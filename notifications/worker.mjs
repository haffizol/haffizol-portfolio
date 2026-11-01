// Deploy separately from the static portfolio. Secrets stay in Worker bindings.
export default {
 async fetch(request,env){
  const origin=request.headers.get('Origin');
  const allowed=(env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean);
  if(!origin||!allowed.includes(origin))return new Response('Forbidden',{status:403});
  const headers={'Access-Control-Allow-Origin':origin,'Vary':'Origin','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type','Cache-Control':'no-store'};
  const reply=(status,message)=>new Response(message,{status,headers});
  if(new URL(request.url).pathname!=='/visit')return reply(404,'Not found');
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
  if(request.method!=='POST')return reply(405,'Method not allowed');
  if(!env.RESEND_API_KEY||!env.NOTIFY_TO||!env.EMAIL_FROM||!env.VISIT_LIMITER)return reply(503,'Notification service not configured');
  const length=Number(request.headers.get('Content-Length')||0);
  if(length>1024)return reply(413,'Request too large');
  const raw=await request.text();if(raw.length>1024)return reply(413,'Request too large');
  let payload;try{payload=JSON.parse(raw);}catch{return reply(400,'Invalid event');}
  if(payload.event!=='portfolio_visit'||typeof payload.eventId!=='string'||!/^[a-f0-9-]{36}$/i.test(payload.eventId))return reply(400,'Invalid event');
  const agent=request.headers.get('User-Agent')||'';
  if(/bot|crawl|spider|headless|preview/i.test(agent))return reply(202,'Ignored');
  // Platform rate-limiter uses the address for throttling only; it is not emailed.
  const ip=request.headers.get('CF-Connecting-IP')||'unknown';
  const limit=await env.VISIT_LIMITER.limit({key:ip});
  if(!limit.success)return reply(429,'Too many requests');
  try{
   const result=await fetch('https://api.resend.com/emails',{
    method:'POST',headers:{'Authorization':`Bearer ${env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`portfolio-visit/${payload.eventId}`},
    body:JSON.stringify({from:env.EMAIL_FROM,to:[env.NOTIFY_TO],subject:'New visit to Muhammad Haffizol Portfolio',text:`A browser session opened your portfolio.\n\nWebsite: ${origin}\n\nUse this email's delivery time as the notification time. This notification does not identify the visitor. Reloading within the same browser tab/session does not normally send another notification.`})
   });
   if(!result.ok)return reply(502,'Email delivery unavailable');
   return reply(200,'Visit received');
  }catch{return reply(502,'Email delivery unavailable');}
 }
};
