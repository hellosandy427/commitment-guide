(() => {
 const link=document.createElement('link');link.rel='stylesheet';link.href='daily-lesson.css?v=20261018-boxes';document.head.append(link);
 const content=`<div class="lesson-heading"><span>01</span><h3>填寫與提交</h3><p>可以參考上週內容，整理本週進展與下一步安排。</p></div>
 <div class="lesson-rule"><strong>本週：做到哪？</strong><span>下週：交什麼、何時交？</span></div>
 <div class="lesson-caption"><h4>上週內容，提供本週填寫參考</h4><span>填寫範例 · 道路修繕方案比較</span></div>
 <div class="lesson-screen" aria-label="依實際系統介面整理的週報填寫範例">
 <aside class="lesson-previous lesson-callout"><div class="lesson-panel-title"><span class="lesson-marked"><span class="lesson-number">1</span>上週回報</span> <small>唯讀、可複製</small></div><div class="lesson-state">上週已提交</div>
 <div class="lesson-prev-item"><div class="lesson-label">進度 <button type="button" data-copy="progress">複製</button></div><p id="lesson-prev-progress">已完成道路破損位置與修繕範圍盤點，將同一份需求清單交給 A、B 兩家施工單位，約定下週三前提供報價、工期及施工期間交通安排。</p></div>
 <div class="lesson-prev-item"><div class="lesson-label">當時填寫的「下週預計」 <button type="button" data-copy="plan">複製</button></div><p id="lesson-prev-plan">下週三收齊 A、B 兩家資料，下週五完成費用、工期及交通影響比較表，提出建議方案送主管確認。</p></div>
 <div class="lesson-reminder"><b>回報提醒</b><p>目前沒有待處理的回報提醒。</p></div></aside>
 <div class="lesson-current"><div class="lesson-write-callout lesson-callout"><div class="lesson-panel-title"><span class="lesson-marked"><span class="lesson-number">2</span>本週回填</span> <span class="lesson-badge">填寫範例</span></div>
 <div class="lesson-field"><div class="lesson-label"><b>本週進度</b><small>必填</small></div><p class="lesson-formula">可說明：做到哪裡、目前結果、待辦事項</p><div class="lesson-input">本週三已收到 A、B 兩家報價，完成費用初步比較：B 的報價較低，但未附工期及交通安排，尚不能判斷整體方案是否較佳。原訂本週五送審未完成，已請 B 於下週二補件，並通知主管改於下週四送審；目前尚未選定施工單位。</div><p class="lesson-helper">持續辦理、等待回覆，也可以直接說明。</p></div>
 <div class="lesson-field"><div class="lesson-label"><b>下週預計</b><small>必填</small></div><p class="lesson-formula">可說明：下一步、預計成果與時間</p><div class="lesson-input">下週二收齊 B 的工期與交通安排，並取得工程部可施工時段；下週三完成兩家費用、工期與交通影響比較，下週四將比較表及建議方案送主管確認。若 B 週二仍未補齊，當日回報缺項與影響，請主管決定是否改邀其他廠商。</div></div>
 </div><div class="lesson-options"><div class="lesson-label"><b>□　需要協助／待協調</b><small>有需要再勾選</small></div><p>需要他人協助、跨部門配合或等待決定時，可以勾選；沒有需要時可不勾選。</p><p><b>勾選後需填寫協助說明</b>，例如：</p><div class="lesson-input">請工程部於下週二前確認可施工時段及需維持通行的路段，供核對兩家交通安排，避免只按報價選擇方案。</div></div>
 <details class="lesson-options lesson-support" open><summary><b>其他資料</b> <small>選填</small></summary><p>有資料要補充時，再展開填寫；沒有資料時，以下欄位可留空。</p><ul><li><b>佐證／補充資料：</b>補充相關說明或參考連結。</li><li><b>本週佐證 NAS 路徑：</b>貼上這週相關檔案或資料夾的位置。</li></ul></details>
 <div class="lesson-submit lesson-callout"><span class="lesson-marked"><span class="lesson-number">3</span>提交</span><span class="lesson-draft">暫存草稿</span><span class="lesson-send">提交本週回報</span></div></div></div>
 <div class="lesson-tips"><div><b class="lesson-marked"><span class="lesson-number">1</span>參考上週內容</b><p>左側可查看上週進度與當時填的「下週預計」。需要沿用部分內容時，可以使用「複製」。</p></div><div><b class="lesson-marked"><span class="lesson-number">2</span>整理本週進展</b><p>可直接填寫本週進展，也可在參考內容上補充目前結果、遇到的問題及下一步安排。</p></div><div><b class="lesson-marked"><span class="lesson-number">3</span>寫好後提交</b><p>暫存還不算交出；核對週別及內容後，再提交本週回報。</p></div></div>
 <p class="lesson-feedback" role="status" aria-live="polite"></p><details class="lesson-special"><summary>上週未回報時怎麼辦？</summary><p>可從「查看上週／補交」處理；本週仍依實際進展填寫。請先核對目前選取的回報週別。</p></details>`;
 function mount(){const s=document.getElementById('weekly');if(!s||s.dataset.lesson)return;s.dataset.lesson='true';s.className='lesson';s.innerHTML=content;s.addEventListener('click',async e=>{const b=e.target.closest('[data-copy]');if(!b)return;const text=s.querySelector('#lesson-prev-'+b.dataset.copy).textContent;try{await navigator.clipboard.writeText(text);s.querySelector('.lesson-feedback').textContent='已複製範例文字，可作為填寫參考，再依實際情況調整。';}catch{s.querySelector('.lesson-feedback').textContent='請選取上方範例文字，手動複製。';}});}
 new MutationObserver(mount).observe(document.getElementById('sections'),{childList:true});mount();
})();
