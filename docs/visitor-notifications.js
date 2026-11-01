(() => {
 const config=window.PORTFOLIO_VISITS;
 if(!config?.enabled || !config.endpoint)return;
 let endpoint;
 try{endpoint=new URL(config.endpoint);}catch{return;}
 if(endpoint.protocol!=='https:')return;
 if(config.provider==='apps-script' && (endpoint.hostname!=='script.google.com'||!/^\/macros\/s\/[^/]+\/exec$/.test(endpoint.pathname)))return;
 if(['localhost','127.0.0.1','::1'].includes(location.hostname))return;
 const disclosure=document.querySelector('#visit-disclosure');
 if(disclosure)disclosure.hidden=false;
 const ignoreKey='portfolio-ignore-visits';
 const controls=document.querySelector('#visit-controls');
 const toggle=document.querySelector('#visit-toggle');
 const status=document.querySelector('#visit-status');
 let ignored=false;
 try{
  if(new URL(location.href).searchParams.get('ignore-visits')==='1')localStorage.setItem(ignoreKey,'1');
  ignored=localStorage.getItem(ignoreKey)==='1';
 }catch{/* Browsers that block storage cannot persist this preference. */}
 function renderPreference(){
  if(controls)controls.hidden=false;
  if(toggle){toggle.textContent=ignored?'Allow notifications from this browser':'Ignore this browser';toggle.setAttribute('aria-pressed',String(ignored));}
  if(status)status.textContent=ignored?'Your visits in this browser are ignored.':'Visits in this browser can notify the portfolio owner.';
 }
 renderPreference();
 if(toggle)toggle.addEventListener('click',()=>{
  try{
   ignored=!ignored;
   localStorage.setItem(ignoreKey,ignored?'1':'0');
   renderPreference();
  }catch{if(status)status.textContent='Your browser blocked saving this preference. Please allow site storage and try again.';}
 });
 window.addEventListener('storage',event=>{if(event.key===ignoreKey){ignored=event.newValue==='1';renderPreference();}});
 const key='portfolio-visit-v2';
 let eventId;
 try {
  const saved=JSON.parse(sessionStorage.getItem(key)||'null');
  if(saved?.dispatched)return;
  eventId=saved?.id||crypto.randomUUID();
  sessionStorage.setItem(key,JSON.stringify({id:eventId,dispatched:false}));
 }catch{return;}
 let sending=false,finished=false;
 async function notify(){
  if(ignored||document.visibilityState!=='visible'||sending||finished)return;
  sending=true;
  try{
   const appsScript=config.provider==='apps-script';
   const response=await fetch(endpoint.href,{method:'POST',mode:appsScript?'no-cors':'cors',credentials:'omit',referrerPolicy:'no-referrer',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({event:'portfolio_visit',eventId,site:'https://haffizol.github.io/haffizol-portfolio/'}),keepalive:true});
   // An opaque Apps Script response confirms dispatch, not email delivery.
   if(appsScript||response.ok){
    finished=true;
    sessionStorage.setItem(key,JSON.stringify({id:eventId,dispatched:true}));
    document.removeEventListener('visibilitychange',notify);
   }
  }catch{/* Email failures must not interrupt the portfolio. */}
  finally{sending=false;}
 }
 document.addEventListener('visibilitychange',notify);
 notify();
})();
