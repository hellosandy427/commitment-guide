(() => {
function mount(){
 const root=document.querySelector('#report-reminders');
 if(!root||root.querySelector('.review-demo-controls'))return;
 const screen=root.querySelector('.lesson-screen'),example=root.querySelector('.review-system-example'),card=example.querySelector('.wr-conversation');
 const messages=card.querySelector('.wr-messages'),initial=messages.innerHTML;
 const later=root.querySelector('.review-later');
 const additions=[...later.querySelectorAll('.wr-message')].map(e=>e.outerHTML);
 const actions=card.querySelector('.review-example-actions'),instruction=root.querySelector('.review-instruction');
 const originalInstruction=instruction.innerHTML;
 later.remove();root.querySelector('.review-states')?.remove();root.querySelector('.review-color-key')?.remove();
 const controls=document.createElement('div');controls.className='review-demo-controls';
 controls.innerHTML='<p class="review-demo-caption">点选阶段，看同一条提问如何来回处理</p><div class="review-demo-stages" role="group" aria-label="示例阶段"><button type="button" data-stage="0">① 待填报人回应</button><button type="button" data-stage="1">② 已回应，待核对</button><button type="button" data-stage="2">③ 已结束追踪</button></div><div class="review-demo-perspectives" role="group" aria-label="查看视角"><span>查看视角</span><button type="button" data-perspective="owner">填报人</button><button type="button" data-perspective="reviewer">原提问管理阶层</button></div><p class="review-demo-feedback" role="status" aria-live="polite"></p><small>教学切换示例，不会提交或修改系统资料。右侧保留填报人填写示例。</small>';
 screen.before(controls);
 let stage=0,perspective='owner';
 function update(){
  controls.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.stage)===stage)));
  controls.querySelectorAll('[data-perspective]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.perspective===perspective)));
  const active=(stage===0&&perspective==='owner')||(stage===1&&perspective==='reviewer');
  card.classList.toggle('wr-action-required',active);card.classList.toggle('wr-action-neutral',!active);
  card.querySelector(':scope > strong').textContent=['待 填报人（范例） 回复','已回复，待核对','已结束追踪'][stage];
  card.querySelector('.review-action-cue').textContent=active?(stage===0?'待你回应':'待你核对'):(stage===2?'已结束追踪':perspective==='owner'?'等待管理阶层核对':'等待填报人回应');
  card.querySelector('.review-action-cue').hidden=!active;
  messages.innerHTML=initial+(stage>=1?additions[0]:'')+(stage===2?additions[1]:'');
  actions.innerHTML=stage===0&&perspective==='owner'?'<a href="#review-write">在週報中回應</a>':stage===1&&perspective==='owner'?'<a href="#review-write">在週報中補充</a>':stage<2&&perspective==='reviewer'?'<span>繼續追問</span><span>結束追蹤</span>':'';
  controls.querySelector('.review-demo-feedback').textContent=stage===2?'双方皆为中性底色。这条提问已结束追踪，工程仍须持续回报。':active?(stage===0?'现在轮到你回应：外层显示浅红底。':'现在轮到你核对：外层显示浅红底，可继续追问或结束追踪。'):(stage===0?'正在等待填报人回应：你看到中性底色。':'正在等待管理阶层核对：你看到中性底色，仍可在周报中补充。');
  instruction.innerHTML=stage===0&&perspective==='owner'?originalInstruction:stage===2?'<strong>这条提问已结束追踪，不代表整项承诺已完成。</strong><p>已结束的内容仍保留在系统的「已結束追蹤」区块。</p>':perspective==='reviewer'?'<strong>核对回应是否完整。</strong><p>需要补充时，按「繼續追問」；确认完成后，按「結束追蹤」。这些是管理阶层操作，右侧填写区仅为填报人教学示例。</p>':'<strong>已提交回应，等待管理阶层核对。</strong><p>若还有新资料，按「在週報中補充」，更新周报后再次提交。管理阶层也可能继续追问。</p>';
 }
 controls.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.stage!==undefined)stage=Number(b.dataset.stage);if(b.dataset.perspective)perspective=b.dataset.perspective;update();});
 update();
}
new MutationObserver(mount).observe(document.getElementById('sections'),{childList:true});mount();
})();
