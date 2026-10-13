# Sandy 教學網站副本

## 來源與範圍
- Sandy 專案：`https://github.com/hellosandy427/commitment-guide`
- Angela 來源：`https://github.com/Angela-tw/commitment-guide`
- 2026-10-13 複製的來源基準：`422039d5d774eb1f9e1483ce076a77d4e594ff46`。
- 目前優先處理 01「登入」、02「維護承諾」；具體修改依 Sandy 後續指示。
- 03「日常回報」、04「總覽與週別」目前保留原樣，不主動修改或發布。
- 03 後續可能採用 Angela 更新的版本；須先比對差異，再選擇性帶入。

## 同步注意事項
- `origin` 指向 Sandy 的副本；`upstream` 用於讀取 Angela 的更新。本機已停用 upstream 推送。
- 不向 Angela 的專案推送，除非 Sandy 明確要求。
- 正式區與 `preview/` 各有共用的 `guide.js`、`style.css`；四個主題不是完全獨立的檔案。
- 更新 03 時，不可直接覆蓋共用檔案或重設分支，避免覆蓋 Sandy 已修改的 01、02。
- 預覽版 03 的步驟索引目前為 `[5, 6, 9]`，不能只複製第 5、6 筆；以更新當下程式的分組設定為準。
- 引入 03 時一併核對三種語言、圖片、標記座標與必要的渲染邏輯，並檢查 01、02 未被改壞。
- 複製專案並不代表已建立新的 GitHub Pages 網站；發布及正式入口切換依 Sandy 指示。
