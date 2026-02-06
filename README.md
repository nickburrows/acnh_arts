# 動森藝術品真偽鑑定 🎨

一個用於《集合啦！動物森友會》藝術品及雕塑真偽判別的網頁應用。

## 特性

- 🖼️ 30 個畫作和 13 個雕塑的真偽判別指南
- 🔍 實時名稱搜尋功能
- 🌙 自動適應系統深色模式
- 📱 響應式設計，支持各種裝置
- 🖱️ 點擊縮略圖放大查看完整尺寸圖片

## 技術堆疊

- **前端**: HTML5 + TailwindCSS + Vanilla JavaScript
- **部署**: Cloudflare Pages / Cloudflare Workers
- **版本控制**: Git + GitHub

---

## 快速部署指南

### 方式 A：使用 Cloudflare Pages（推薦）⭐

#### 步驟 1：上傳至 GitHub

```bash
# 初始化 Git 並推送至 GitHub
git add .
git commit -m "Initial commit: ACNH Arts Web App"
git remote add origin https://github.com/USERNAME/acnh_arts.git
git branch -M main
git push -u origin main
```

#### 步驟 2：部署至 Cloudflare Pages

1. 登入 [Cloudflare 儀表板](https://dash.cloudflare.com/)
2. **Pages** → **連接到 Git** → **GitHub**
3. 授權並選擇 `acnh_arts` 存放庫
4. 構建設定：
   - 項目名稱: `acnh-arts`
   - 生產分支: `main`
   - 框架預設: `None`
   - 點擊 **保存並部署**

您的網站將在 `https://acnh-arts.pages.dev` 上線！

---

### 方式 B：使用 Cloudflare Workers

```bash
# 1. 安裝 Wrangler
yarn add -D wrangler

# 2. 認證
yarn wrangler login

# 3. 部署
yarn deploy
```

---

## 本地開發

```bash
# 安裝依賴
yarn install

# 啟動開發伺服器
yarn dev

# 訪問 http://localhost:8787
```

---

## 日常工作流程

```bash
# 編輯檔案後...
git add .
git commit -m "描述您的變更"
git push
```

Cloudflare Pages 會自動構建和部署！

---

## 常見問題

**Q: 如何更新網站內容？**
- 編輯檔案並推送至 GitHub，Cloudflare Pages 會自動部署

**Q: 成本多少？**
- 免費！

**Q: 如何添加自訂域名？**
- 在 Cloudflare Pages 設定中添加域名

---

詳細文檔請參考 [完整部署指南](./DEPLOYMENT.md)
