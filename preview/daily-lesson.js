(() => {
 const link=document.createElement('link');link.rel='stylesheet';link.href='daily-lesson.css?v=20261018-1';document.head.append(link);
 const content=`<div class="lesson-heading"><span>01</span><h3>填寫與提交</h3><p>先看上週承諾了什麼，再交代這週的結果。</p></div>
 <div class="lesson-rule"><strong>本週：做到哪？</strong><span>下週：交什麼、何時交？</span></div>
 <div class="lesson-caption"><h4>從上週接著寫，不必從零開始</h4><span>填寫範例 · 道路修繕方案比較</span></div>
 <div class="lesson-screen" aria-label="依實際系統介面整理的週報填寫範例">
 <aside class="lesson-previous"><div class="lesson-panel-title">上週回報 <small>唯讀、可複製</small></div><div class="lesson-state">上週已提交</div>
 <div class="lesson-prev-item"><div class="lesson-label">進度 <button type="button" data-copy="progress">複製</button></div><p id="lesson-prev-progress">已完成道路現況盤點，並邀請兩家施工單位提供報價與預估工期，等待資料回覆。</p></div>
 <div class="lesson-prev-item"><div class="lesson-label">當時填寫的「下週預計」 <button type="button" data-copy="plan">複製</button></div><p id="lesson-prev-plan">取得兩家報價與工期資料，整理費用及施工影響比較，確認需要補充的項目。</p></div>
 <div class="lesson-reminder"><b>回報提醒</b><p>目前沒有待處理的回報提醒。</p></div></aside>
 <div class="lesson-current"><div class="lesson-panel-title">本週回填 <span class="lesson-badge">填寫範例</span></div>
 <div class="lesson-field"><div class="lesson-label"><b>本週進度</b><small>必填</small></div><p class="lesson-formula">已完成什麼 ＋ 目前結果 ＋ 還缺什麼</p><div class="lesson-input">已完成道路現況盤點，並取得兩家施工單位報價；其中一家尚缺工期資料，已請對方於下週二補齊，目前尚未完成方案比較。</div><p class="lesson-helper">持續辦理、等待回覆，也可以直接說明。</p></div>
 <div class="lesson-field"><div class="lesson-label"><b>下週預計</b><small>必填</small></div><p class="lesson-formula">要做什麼 ＋ 交出什麼 ＋ 何時完成</p><div class="lesson-input">下週二追蹤工期資料，下週四完成費用、工期及施工影響比較表，提出建議方案供主管確認。</div></div>
 <div class="lesson-options">□　需要協助／待協調</div><div class="lesson-options">▸　其他資料 <small>選填</small></div>
 <div class="lesson-submit"><span>按鈕位置</span><span class="lesson-draft">暫存草稿</span><span class="lesson-send">提交本週回報</span></div></div></div>
 <div class="lesson-tips"><div><b>① 看上週、複製參照</b><p>用左側「複製」取得內容，再貼到系統右側欄位。</p></div><div><b>② 改成本週實際結果</b><p>把「預計要做」更新為「實際做到哪」，不要照貼舊進度。</p></div><div><b>③ 寫好後提交</b><p>暫存還不算交出；核對週別及內容後，再提交本週回報。</p></div></div>
 <p class="lesson-feedback" role="status" aria-live="polite"></p><details class="lesson-special"><summary>上週未回報時怎麼辦？</summary><p>可從「查看上週／補交」處理；本週仍依實際進展填寫。請先核對目前選取的回報週別。</p></details>`;
 function mount(){const s=document.getElementById('weekly');if(!s||s.dataset.lesson)return;s.dataset.lesson='true';s.className='lesson';s.innerHTML=content;s.addEventListener('click',async e=>{const b=e.target.closest('[data-copy]');if(!b)return;const text=s.querySelector('#lesson-prev-'+b.dataset.copy).textContent;try{await navigator.clipboard.writeText(text);s.querySelector('.lesson-feedback').textContent='已複製範例文字。貼到系統後，請依本週實際進度修改。';}catch{s.querySelector('.lesson-feedback').textContent='請選取上方範例文字，手動複製。';}});}
 new MutationObserver(mount).observe(document.getElementById('sections'),{childList:true});mount();
})();
