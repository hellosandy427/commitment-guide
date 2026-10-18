(() => {
  const style=document.createElement('style');
  style.textContent='.daily-compare-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin:20px 0 16px;padding:12px 16px;background:#faf0f2;border-radius:10px}.daily-compare-bar strong{color:#a81f32}.daily-compare-bar button{min-height:44px;padding:10px 16px;border:1px solid #a81f32;background:white;color:#a81f32;border-radius:7px;font:inherit;cursor:pointer;margin:3px}.daily-compare-bar button[aria-pressed="true"]{background:#a81f32;color:white}.daily-compare-bar button:focus-visible{outline:3px solid #126a99;outline-offset:3px}.daily-compare-frame{display:block;width:100%;border:0;height:1500px}.daily-compare-frame[hidden]{display:none}';
  document.head.append(style);
  function mount(){
    const section=document.getElementById('weekly');if(!section||document.getElementById('daily-compare-bar'))return;
    const bar=document.createElement('div');bar.id='daily-compare-bar';bar.className='daily-compare-bar';
    bar.innerHTML='<strong>填寫與提交｜排版對照</strong><div role="group" aria-label="切換新舊排版"><button type="button" data-view="new" aria-pressed="true">新版提案（繁中）</button><button type="button" data-view="old" aria-pressed="false">原版對照</button></div>';
    const frame=document.createElement('iframe');frame.className='daily-compare-frame';frame.title='填寫與提交新版排版及範例';frame.src='daily-layout-study.html?embedded=1';
    section.before(bar,frame);section.hidden=true;section.style.display='none';
    frame.addEventListener('load',()=>{const d=frame.contentDocument;if(!d)return;const css=d.createElement('style');css.textContent='header,.switch,.footnote{display:none!important}body{background:white}main{padding:20px 0;max-width:none}.heading{margin-top:0}';d.head.append(css);const resize=()=>frame.style.height=(d.documentElement.scrollHeight+8)+'px';new ResizeObserver(resize).observe(d.body);resize();});
    bar.addEventListener('click',e=>{const b=e.target.closest('button[data-view]');if(!b)return;const old=b.dataset.view==='old';section.hidden=!old;section.style.display=old?'':'none';frame.hidden=old;bar.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));});
    document.querySelectorAll('a[href="#weekly"]').forEach(a=>a.addEventListener('click',()=>bar.scrollIntoView({block:'start'})));
  }
  new MutationObserver(mount).observe(document.getElementById('sections'),{childList:true});mount();
})();
