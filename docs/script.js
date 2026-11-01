const projects = window.PORTFOLIO_PROJECTS;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function windowArt(title,body){return `<div class="mini-window"><div class="mini-title"><span><i></i><i></i><i></i></span><span>${title}</span><span>↗</span></div><div class="mini-body">${body}</div></div>`;}
function artwork(p){
 if(p.category.includes('academic'))return `<img class="project-poster" src="assets/posters/${p.id==='uitm-wheelchair'?'uitm-robopioneers-wheelchair.png':'uitm-piezoelectric-cantilever.png'}" alt="">`;
 if(p.art==='chat')return windowArt('PRODUCTION / ANALYTICS',`<div class="mini-sub">CONCEPTUAL WORKFLOW</div><div class="chat-message">Review production data.</div><div class="chat-message response"><div class="chat-line"></div><div class="chat-line"></div><div class="chat-line short"></div></div><div class="mini-footer"><span>PRODUCTION DATA + AI</span><span>ILLUSTRATION</span></div>`);
 if(p.art==='rfid')return windowArt('MATERIAL / IDENTIFICATION',`<div class="mini-sub">STOCK & MATERIAL IDENTIFICATION</div><div class="mini-heading">UHF RFID stock tracking</div><div class="rfid-lines"><div class="rfid-tag">▥</div><span class="rfid-waves">)))</span><div class="rfid-list"><span></span><span></span><span></span></div></div><div class="mini-footer"><span>UHF TAG → READER → EDGE</span><span>IN DEVELOPMENT</span></div>`);
 if(p.art==='workflow')return windowArt('DOCUMENT / AUTOMATION',`<div class="mini-sub">AI-ASSISTED DOCUMENT PROCESSING</div><div class="mini-heading">Purchase-order processing</div><div class="pipeline"><b>DOCUMENT</b><span>→</span><b>EXTRACT</b><span>→</span><b>REVIEW</b></div><div class="mini-footer"><span>LOGISTICS WORKFLOW</span><span>CONCEPT</span></div>`);
 if(p.art==='vision')return windowArt('VISION / INSPECTION',`<div class="vision-art"><div class="mat"></div><div class="detect"></div></div><div class="mini-footer"><span>DEFECT DETECTION</span><span>CONCEPT</span></div>`);
 const options={maintenance:['MAINTENANCE / WORKFLOW','Maintenance management',['Work orders','Preventive maintenance','Equipment history','AI summaries']],checksheet:['PRODUCTION / MONITORING','OEE & smart checksheets',['Machine state','Production output','Downtime & rejects','4M change points']],people:['PEOPLE / OPERATIONS',p.id==='attendance'?'Smart attendance':'HR records',['Employee information','Tracking & reporting','Review & follow-up']],safety:['SHE / ACTION TRACKING','Safety management',['Issue reporting','Assign & track actions','Review & verification']],scale:['WEIGHING / MATERIALS','IoT weighing',['Material recipes','Target weights','Live measurements']],overview:['PRODUCTION / TWO PLANTS','Production overview',['Port Klang','Sendayan','Live line performance']],thermal:['INVERTER / TEMPERATURE','Temperature monitoring',['Temperature readings','Equipment status','Automatic alerts']],document:['DOCUMENT / AUTOMATION','Document processing',['Source document','Process & review','Prepared output']]};
 const [label,title,rows]=options[p.art]||options.checksheet;
 return windowArt(label,`<div class="mini-sub">CONCEPTUAL WORKFLOW</div><div class="mini-heading">${title}</div><div class="mini-table">${rows.map((r,i)=>`<div class="mini-row"><i></i><span>${r}</span><small>${String(i+1).padStart(2,'0')}</small></div>`).join('')}</div>`);
}
function card(p){
 const index=projects.indexOf(p)+1;
 return `<article class="project-card" data-id="${p.id}" data-stage="${p.stage}"><button class="project-cover" data-project="${p.id}" aria-label="Read project: ${escapeHTML(p.short)}"><span class="cover-label">${escapeHTML(p.label)}</span><span class="cover-number">${String(index).padStart(2,'0')}</span><div class="artwork" aria-hidden="true">${artwork(p)}</div></button><div class="project-meta"><span>${escapeHTML(p.label)}</span><span class="state ${p.stage!=='operational'?'developing':''}">${escapeHTML(p.state)}</span></div><div class="project-title-row"><h3>${escapeHTML(p.short)}</h3><button class="project-open" data-project="${p.id}" aria-label="Open ${escapeHTML(p.short)} project">↗</button></div><p>${escapeHTML(p.intro)}</p>${p.metrics?`<div class="card-impact">${p.metrics.slice(0,2).map(m=>`<div><strong>${escapeHTML(m[0])}</strong><small>${escapeHTML(m[1])}</small></div>`).join('')}</div>`:''}<div class="project-bottom"><span class="project-role">${escapeHTML(p.role)}</span><button class="read-case" data-project="${p.id}">Project details ↗</button></div></article>`;
}
document.querySelector('#sugihara-grid').innerHTML=projects.filter(p=>!p.category.includes('academic')).map(card).join('');
document.querySelector('#uitm-grid').innerHTML=projects.filter(p=>p.category.includes('academic')).map(card).join('');
const filters=[...document.querySelectorAll('.filter')];
const search=document.querySelector('#project-search');
const stage=document.querySelector('#project-stage');
let category='all';
document.querySelector('[data-filter="all"] span').textContent=projects.length;
function applyFilters(){
 const term=search.value.trim().toLocaleLowerCase();let count=0;
 document.querySelectorAll('.project-card').forEach((card,index)=>{
  const p=projects.find(p=>p.id===card.dataset.id);
  const categoryMatch=category==='all'||p.category.includes(category);
  const stageMatch=stage.value==='all'||p.stage===stage.value;
  const haystack=[p.id,p.short,p.title,p.intro,p.role,p.context,...p.stack].join(' ').toLocaleLowerCase();
  card.hidden=!categoryMatch||!stageMatch||(term&&!haystack.includes(term));
  if(!card.hidden)count++;
 });
 document.querySelector('#filter-announcement').textContent=`Showing ${count} of ${projects.length} projects.`;
 document.querySelector('#project-empty').hidden=count!==0;
 for(const [id,label] of [['sugihara','Sugihara'],['uitm','UiTM']]){const group=document.querySelector('#'+id+'-projects');const visible=group.querySelectorAll('.project-card:not([hidden])').length;group.hidden=visible===0;document.querySelector('#'+id+'-count').textContent=visible+' projects';}
}
filters.forEach(button=>button.addEventListener('click',()=>{
 category=button.dataset.filter;
 filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 applyFilters();
}));
search.addEventListener('input',applyFilters);
stage.addEventListener('change',applyFilters);
document.querySelector('#reset-projects').addEventListener('click',()=>{search.value='';stage.value='all';category='all';filters.forEach(b=>{const active=b.dataset.filter==='all';b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});applyFilters();});
applyFilters();

const dialog=document.querySelector('#case-dialog');
let lastTrigger;
document.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-project]');if(!trigger)return;
 const p=projects.find(p=>p.id===trigger.dataset.project);if(!p)return;
 lastTrigger=trigger;
 document.querySelector('#case-content').innerHTML=`<div class="case-body"><p class="eyebrow">${p.label} / ${p.state.toUpperCase()}</p><h2 id="case-title">${p.short}</h2><p class="case-context">${p.context}</p><p class="case-lead">${p.intro}</p><div class="case-facts"><div><small>MY CONTRIBUTION</small><p>${p.role}</p></div><div><small>PROJECT STATUS</small><p>${p.state}</p></div></div><section class="case-section"><h3>Purpose</h3><p>${p.problem}</p></section><section class="case-section"><h3>My contribution</h3><ul>${p.contribution.map(x=>`<li>${x}</li>`).join('')}</ul></section><section class="case-section"><h3>Results and status</h3><p>${p.outcome}</p>${p.metrics?`<div class="metrics">${p.metrics.map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div>`:''}</section><section class="case-section"><h3>Technology & disciplines</h3><div class="case-stack">${p.stack.map(t=>`<span>${t}</span>`).join('')}</div></section><aside class="case-evidence"><h3>Supporting evidence</h3><p>${p.evidence}</p>${p.link?`<a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.linkText}</a>`:''}${(p.links||[]).map(l=>`<br><a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}</aside><p class="case-note">SOURCE: ${p.source.toUpperCase()}<br>Company applications and internal operational data are not embedded in this portfolio.</p></div>`;
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('modal-open');
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(lastTrigger)lastTrigger.focus();});
document.querySelector('#year').textContent=new Date().getFullYear();
