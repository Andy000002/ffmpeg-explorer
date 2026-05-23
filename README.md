# 本 Fork 的改動

- 預設文件改為繁體中文，英文版保留在 `README.en.md`。
- 將 Vite 的部署路徑設定為 `/ffmpeg/`，並讓影片與字型等靜態資源依照此路徑載入，方便部署在子路徑下。

---

# 互動式 FFMPEG 指令產生器

**~~~~> [ffmpeg.lav.io](https://ffmpeg.lav.io) <~~~~**

這是一個仍在開發中的 FFmpeg 探索用網頁工具。歡迎回報[問題/建議](https://github.com/antiboredom/ffmpeg-explorer/issues)。使用 [svelte](https://svelte.dev/)、[xyflow](https://github.com/wbkd/react-flow/tree/xyflow) 與 [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) 製作。

歡迎貢獻！如果你想新增功能，可以參考下面的 todo 清單；如果想嘗試修 bug，可以看看 issues 頁面。

以開發模式執行：

```bash
npm install
npm run dev
```

**我也正在尋找好的 FFmpeg 範例。如果你在工具中做出很棒的 filtergraph，只要按下 cmd-s（或在 windows/linux 上按 ctrl-s），就會匯出你的 graph 的 json 檔。歡迎把這些檔案貼到 issues 頁面，之後可能會收錄到工具中。**

## 已知問題

- 在 Chrome 上使用多執行緒模式時無法渲染（看起來會在 mp4 上失敗）

## Todo

- [x] 渲染進度列
- [x] 「取消渲染」按鈕（感謝 @jwetzell）
- [x] 不移除 filters 也能停用/啟用它們（感謝 @jwetzell）
- [ ] 處理 filters 中重複的參數（有時 filters 會同時有長選項與短選項）
- [ ] 在 filters 中加入更多說明/文件（FFmpeg 網站上還有更多內容可以整合進來）
- [ ] 加入 seek 與 trim 等輸入選項
- [x] 想辦法處理複雜的 filtergraphs
- [ ] 加入更多範例輸入（至少需要一張圖片與一個音訊檔）
- [x] 將 filter 選項放到獨立面板中
- [ ] 加入會產生內容的 filters
- [ ] 處理音訊與圖片輸出。
- [ ] 允許編輯指令
- [x] 可行時使用逗號分隔 filters
- [x] 內建一些預設字型，讓文字能正常運作。
- [x] 允許輸出 gif
- [ ] 加入更多測試！
- [x] 也許允許使用者上傳自己的影片
- [ ] 也許讓輸出指令的每個部分都能點擊，以醒目標示對應的 nodes
- [ ] 也許在 filter 清單本身加入 previews

## 靈感來源 / 替代方案

- [ffmpeg.guide](https://ffmpeg.guide)
- [ffmpeg.app](https://ffmpeg.app)
- [這張不錯的截圖](https://fosstodon.org/@wader/110855089546846001)
