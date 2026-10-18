# Sandy 教學網站副本

## 來源與範圍
- Sandy 專案：`https://github.com/hellosandy427/commitment-guide`
- Angela 來源：`https://github.com/Angela-tw/commitment-guide`
- 2026-10-13 複製的來源基準：`422039d5d774eb1f9e1483ce076a77d4e594ff46`。
- 目前優先處理 01「登入」、02「維護承諾」；具體修改依 Sandy 後續指示。
- 2026-10-14 依 Sandy 指示同步 03、04 至 Angela 來源 `39c3cbcb97c4018d8ba24fa80e8fd7c6b54a129b`，發布於預覽區；正式區維持來源的開發中狀態。
- 03 後續可能採用 Angela 更新的版本；須先比對差異，再選擇性帶入。

## 同步注意事項
- `origin` 指向 Sandy 的副本；`upstream` 用於讀取 Angela 的更新。本機已停用 upstream 推送。
- 不向 Angela 的專案推送，除非 Sandy 明確要求。
- 正式區與 `preview/` 各有共用的 `guide.js`、`style.css`；四個主題不是完全獨立的檔案。
- 更新 03 時，不可直接覆蓋共用檔案或重設分支，避免覆蓋 Sandy 已修改的 01、02。
- 預覽區 03、04 現在使用獨立的 `guide-0304.js`、`style-0304.css`，其內容與本次來源檔案完全相同；01、02 繼續使用原 `guide.js`、`style.css`。03 索引為 `[5,6,7]`，04 為 `[8]`；以更新當下程式的分組設定為準。
- 引入 03 時一併核對三種語言、圖片、標記座標與必要的渲染邏輯，並檢查 01、02 未被改壞。
- Sandy 的 GitHub Pages 已啟用，main 分支推送後自動發布：https://hellosandy427.github.io/commitment-guide/ 。

## 2026-10-18 日常回報教學
- 預覽區03目前由 `daily-lesson.js`／`daily-lesson.css` 提供清晰的原生文字示意，舊 `daily-layout-study` 截圖版未掛載；不要把新版換回舊 iframe。
- 上週參照與複製僅為填寫方向，不要求一律先複製再改寫。
- 本週進度、下週預計必填；協助有需要才勾，勾選後說明必填；其他資料的佐證說明／本週 NAS 路徑選填。專案 NAS 必填設定另依系統標示，不混為同一欄。
- 桌機1360及手機390寬度核對，示意可縮放且無水平溢出；本次僅調整preview，未改正式教學或業務資料。
