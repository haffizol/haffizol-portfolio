(() => {
 const config=window.PORTFOLIO_VISITS;
 if(!config?.enabled || !config.endpoint || !/^https:\/\//.test(config.endpoint))return;
 if(['localhost','127.0.0.1','::1'].includes(location.hostname))return;
 document.querySelector('#visit-disclosure').hidden=false;
 const key='portfolio-visit-v1';
 let eventId;
 try {
  const saved=JSON.parse(sessionStorage.getItem(key)||'null');
  if(saved?.sent)return;
  eventId=saved?.id||crypto.randomUUID();
  sessionStorage.setItem(key,JSON.stringify({id:eventId,sent:false}));
 }catch{return;}
 let sending=false;
 async function notify(){
  if(document.visibilityState!=='visible'||sending)return;
  sending=true;
  try{
   const response=await fetch(config.endpoint,{method:'POST',mode:'cors',credentials:'omit',referrerPolicy:'no-referrer',headers:{'Content-Type':'text/plain'},body:JSON.stringify({event:'portfolio_visit',eventId}),keepalive:true});
   if(response.ok)sessionStorage.setItem(key,JSON.stringify({id:eventId,sent:true}));
  }catch{/* Email failures must not interrupt the portfolio. */}
  finally{sending=false;}
 }
 if(document.visibilityState==='visible')notify();
 else document.addEventListener('visibilitychange',notify,{once:true});
})();
