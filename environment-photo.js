const PHOTO_UPLOAD_URL='https://drive.google.com/drive/u/0/folders/1rb8xoxazkyC3i6kCewDdld4NK_FfXYLT';
const PHOTO_COPY={
  'zh-Hant':{
    uploadLabel:'開啟照片上傳區 ↗',link:'照片怎麼放？查看操作步驟 →',title:'把照片放進追蹤表',lead:'先上傳照片，再複製單張照片的連結。改善前放 G 欄，改善後／驗收照片放 R 欄。',
    steps:[['上傳照片','點上方「開啟照片上傳區」，進入改善後／驗收照片的對應位置。按「新增 → 檔案上傳」，選取照片；也可以把照片拖進資料夾。上傳完成後，點兩下要使用的那張照片。'],['取得照片網址','在照片預覽畫面，按右上角「共用」旁的向下箭頭 ①，再按「複製連結」②。若沒有箭頭，也可開啟「共用」視窗，按「複製連結」。'],['貼入公式，放進儲存格','把下面公式中的「這段替換成您上傳的照片的網址」換成剛複製的完整連結；保留兩旁英文雙引號及其他符號。選取對應案件的 G 或 R 欄，在上方公式列貼上整條公式，再按 Enter。'],['確認圖片與案件相符','照片出現後，調整列高／欄寬即可放大；模式 1 會保持比例。改善後有照片時，也請在「完成拍照時間」填實際拍攝日期。']],
    placeholder:'這段替換成您上傳的照片的網址',label:'也可以在這裡貼上照片連結，自動產生公式',hint:'請使用單張照片的 /file/d/… 連結；資料夾 /folders/… 無法顯示為一張圖片。',copy:'複製公式',copied:'已複製，請貼到追蹤表',failed:'請選取上方公式後按 Ctrl+C 複製',invalid:'請貼上單張照片的 Google Drive 連結。',alt:'照片預覽右上方：共用旁的下拉箭頭及複製連結選項',
    note:'照片空白或出錯？先確認連結是單張照片，且有權限查看。這個 IMAGE 轉址方式已於本表 No.55 顯示成功，但可能受 Google 載入與權限限制；不要為了顯示圖片任意公開公司資料。'
  },
  'zh-Hans':{
    uploadLabel:'打开照片上传区 ↗',link:'照片怎么放？查看操作步骤 →',title:'把照片放进追踪表',lead:'先上传照片，再复制单张照片链接。改善前放 G 列，改善后／验收照片放 R 列。',
    steps:[['上传照片','点击上方“打开照片上传区”，进入改善后／验收照片的位置。点击“新建 → 文件上传”，选择照片，或将照片拖进文件夹。上传后双击要使用的照片。'],['获取照片网址','在照片预览右上角，点击“共享”旁的下拉箭头 ①，再点击“复制链接”②。没有箭头时，也可打开“共享”窗口，再点击“复制链接”。'],['将公式放入单元格','把下方公式中的占位文字换成完整照片链接，保留英文双引号及其他符号。选中案件对应的 G 或 R 列单元格，在公式栏粘贴整条公式，按 Enter。'],['确认照片对应案件','图片出现后可调整行高／列宽；模式 1 保持比例。有改善后照片时，请填写实际拍摄日期。']],
    placeholder:'这段替换成您上传的照片的网址',label:'在这里粘贴照片链接，自动生成公式',hint:'使用单张照片的 /file/d/… 链接；文件夹 /folders/… 无法显示为一张图片。',copy:'复制公式',copied:'已复制，请粘贴到追踪表',failed:'请选中上方公式后按 Ctrl+C 复制',invalid:'请粘贴单张照片的 Google Drive 链接。',alt:'照片预览右上角的下拉箭头和复制链接选项',
    note:'空白或报错时，确认链接指向单张照片且有查看权限。这种 IMAGE 转址已在 No.55 显示成功，但仍受 Google 加载与权限限制；不要为显示图片随意公开公司资料。'
  },
  en:{
    uploadLabel:'Open photo upload folder ↗',link:'How to add photos →',title:'Add photos to the tracker',lead:'Upload a photo, then copy its individual file link. Put before photos in column G and after / review photos in column R.',
    steps:[['Upload the photo','Use the upload folder button above, then navigate to the after / review evidence folder. Choose New → File upload, or drag a photo into the folder. After upload, double-click the individual photo.'],['Copy its link','In the photo preview, click the arrow next to Share ①, then Copy link ②. If the arrow is unavailable, open Share and choose Copy link.'],['Paste the formula into the cell','Replace the placeholder in the formula below with the complete photo link. Keep the straight quotation marks and other symbols. Select the case’s G or R cell, paste the entire formula into the formula bar, and press Enter.'],['Check the result','Confirm the photo belongs to this case. Adjust row height / column width to enlarge it; mode 1 preserves its proportions. Record the actual date for after photos.']],
    placeholder:'Replace this text with your uploaded photo URL',label:'Or paste a photo link here to generate the formula',hint:'Use an individual /file/d/… link. A /folders/… link cannot display as a single image.',copy:'Copy formula',copied:'Copied — paste into the tracker',failed:'Select the formula above and press Ctrl+C',invalid:'Enter an individual Google Drive photo link.',alt:'Photo preview: Share dropdown and Copy link',note:'If blank or showing an error, check the file link and viewing access. This IMAGE workaround displayed successfully for No.55, but depends on Google loading and access restrictions. Do not make company files public just to show an image.'
  }
};
function renderPhotoGuide(lang){
  const c=PHOTO_COPY[lang],root=document.getElementById('photo-guide');
  const formula=url=>'=IMAGE("https://lh3.googleusercontent.com/d/"&REGEXEXTRACT("'+url+'","/d/([^/]+)"),1)';
  root.innerHTML='<span class="eyebrow">IMAGE</span><h2 id="photo-title">'+esc(c.title)+'</h2><p>'+esc(c.lead)+'</p><ol class="photo-steps">'+c.steps.map(([title,body],i)=>'<li><span class="step-dot">'+(i+1)+'</span><div><h3>'+esc(title)+'</h3>'+(i===0?'<a class="secondary photo-upload-link" href="'+PHOTO_UPLOAD_URL+'" target="_blank" rel="noopener">'+esc(c.uploadLabel)+'</a>':'')+'<p>'+esc(body)+'</p>'+(i===1?'<figure class="photo-toolbar"><img src="assets/environment/photo-copy-link.jpg" alt="'+esc(c.alt)+'" width="420" height="200" loading="lazy"><span class="photo-pin photo-pin-one" aria-hidden="true">1</span><span class="photo-pin photo-pin-two" aria-hidden="true">2</span></figure>':'')+'</div></li>').join('')+'</ol><pre class="photo-formula"><code>'+esc(formula(c.placeholder))+'</code></pre><div class="photo-builder"><label for="photo-url">'+esc(c.label)+'</label><input id="photo-url" type="url" placeholder="https://drive.google.com/file/d/…/view?usp=sharing" autocomplete="off" aria-describedby="photo-url-hint"><p id="photo-url-hint">'+esc(c.hint)+'</p><pre class="photo-formula" id="photo-result" hidden><code></code></pre><button type="button" id="photo-copy" disabled>'+esc(c.copy)+'</button><p id="photo-feedback" role="status" aria-live="polite"></p></div><p class="photo-note">'+esc(c.note)+'</p>';
  const input=root.querySelector('#photo-url'),result=root.querySelector('#photo-result'),copy=root.querySelector('#photo-copy'),feedback=root.querySelector('#photo-feedback');
  input.addEventListener('input',()=>{
    const url=input.value.trim();let valid=false;
    try{const u=new URL(url);valid=u.protocol==='https:'&&u.hostname==='drive.google.com'&&/^\/file\/d\/[A-Za-z0-9_-]+(?:\/|$)/.test(u.pathname)&&!/["\r\n]/.test(url)}catch{}
    copy.disabled=!valid;result.hidden=!valid;result.querySelector('code').textContent=valid?formula(url):'';feedback.textContent=url&&!valid?c.invalid:'';
  });
  copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(result.textContent);feedback.textContent=c.copied}catch{feedback.textContent=c.failed}});
}
