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
  if(document.visibilityState!=='visible'||sending||finished)return;
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
