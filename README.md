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
- **部署**: GitHub Pages
- **版本控制**: Git + GitHub

---

## 快速部署指南

### 前置要求

- GitHub 帳戶
- Git 已安裝

### 部署步驟

#### 步驟 1：推送至 GitHub

```bash
cd /Users/nick/My/GitHub/acnh_arts

# 檢查 Git 狀態
git status

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit: ACNH Arts Web App"

# 添加遠程倉庫（替換 USERNAME）
git remote add origin https://github.com/USERNAME/acnh_arts.git

# 設定主分支為 main
git branch -M main

# 推送
git push -u origin main
```

#### 步驟 2：啟用 GitHub Pages

1. 訪問您的倉庫：`https://github.com/USERNAME/acnh_arts`
2. 點擊 **Settings** 標籤
3. 左側邊欄找 **Pages**
4. 在 **Source** 選擇 **Deploy from a branch**
5. 選擇 **Branch: main**, **Folder: / (root)**
6. 點擊 **Save**

#### 步驟 3：訪問您的網站

等待 1-2 分鐘，您的網站將在以下地址上線：

```
https://username.github.io/acnh_arts
```

---

## 更新網站

編輯檔案後，只需三步：

```bash
git add .
git commit -m "Update: your message"
git push
```

GitHub Pages 會自動部署更新！

---

## 本地預覽

### 使用 Python

```bash
python3 -m http.server 8000
# 訪問 http://localhost:8000
```

### 使用 Node.js

```bash
npx http-server
# 訪問 http://localhost:8080
```

---

## 項目結構

```
acnh_arts/
├── index.html          # 主網頁
├── arts.md            # 藝術品數據
├── README.md          # 此檔案
├── DEPLOYMENT.md      # 詳細部署指南
├── .gitignore         # Git 忽略規則
└── assets/
    └── images/        # 所有圖片檔案
```

---

## 常見問題

**Q: 我沒有 GitHub 帳戶可以部署嗎？**
- 需要 GitHub 帳戶才能使用 GitHub Pages

**Q: 部署後看不到網站？**
- 確保 GitHub Pages 已啟用
- 清除瀏覽器快取（Ctrl+Shift+Delete）
- 等待 5 分鐘讓部署完成

**Q: 如何使用自訂域名？**
- 購買域名後，在 GitHub Pages 設定中添加自訂域名
- 詳見 [DEPLOYMENT.md](./DEPLOYMENT.md)

**Q: 可以加入更多藝術品嗎？**
- 可以！編輯 `index.html` 中的數據並推送更新

---

## 相關資源

- 🎮 [集合啦！動物森友會官網](https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/)
- 📚 [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- 🌐 [TailwindCSS 文檔](https://tailwindcss.com/docs)

---

## 許可證

MIT

