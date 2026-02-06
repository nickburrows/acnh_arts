# 詳細部署指南

本文檔提供詳細的上傳至 GitHub 和部署至 Cloudflare 的完整步驟。

---

## 目錄

1. [GitHub 設置](#github-設置)
2. [Cloudflare Pages 部署](#cloudflare-pages-部署推薦)
3. [Cloudflare Workers 部署](#cloudflare-workers-部署)
4. [常見問題](#常見問題)
5. [故障排除](#故障排除)

---

## GitHub 設置

### 步驟 1：創建 GitHub 存放庫

1. 訪問 [github.com](https://github.com) 並登入
2. 點擊右上角頭像 → **Your repositories**
3. 點擊 **New** 按鈕
4. 填寫以下信息：
   - **Repository name**: `acnh_arts`
   - **Description**: `動森藝術品真偽鑑定網頁`
   - **Visibility**: `Public`（推薦）或 `Private`
5. 點擊 **Create repository**

### 步驟 2：配置 Git 用戶名和郵件

如果是第一次使用 Git，需要配置用戶信息：

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 步驟 3：初始化並推送本地存放庫

在您的專案目錄中，運行：

```bash
# 檢查 Git 狀態
git status

# 添加所有檔案到暫存區
git add .

# 提交
git commit -m "Initial commit: ACNH Arts Web App"

# 添加遠程倉庫（替換 USERNAME）
git remote add origin https://github.com/USERNAME/acnh_arts.git

# 設定主分支為 main
git branch -M main

# 第一次推送（-u 設定上游分支）
git push -u origin main
```

### 步驟 4：驗證

訪問 GitHub 上的存放庫頁面：`https://github.com/USERNAME/acnh_arts`

您應該看到所有檔案已上傳。

---

## Cloudflare Pages 部署（推薦）

Cloudflare Pages 是最簡單的部署方式，支持自動從 GitHub 構建。

### 優點

✅ 免費  
✅ 自動部署（每次推送 GitHub）  
✅ 免費 HTTPS  
✅ 無冷啟動時間  
✅ 支持自訂域名  

### 步驟 1：準備 Cloudflare 帳戶

1. 訪問 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 如果沒有帳戶，點擊 **Sign Up** 創建帳戶
3. 登入儀表板

### 步驟 2：創建 Pages 項目

1. 在左側邊欄找 **Pages**
2. 點擊 **Create a project**
3. 點擊 **Connect to Git**

### 步驟 3：連接 GitHub

1. 選擇 **GitHub** 提供商
2. 點擊 **Authorize Cloudflare**
3. GitHub 會要求授權，點擊 **Authorize cloudflare**
4. （可選）選擇特定存放庫，或授予所有訪問權限

### 步驟 4：選擇存放庫和分支

1. 在存放庫列表中找到 `acnh_arts`，點擊
2. **Production branch** 選擇 `main`

### 步驟 5：配置構建設定

1. **Project name**: `acnh-arts`
2. **Framework preset**: `None`
3. **Build command**: （留空）
4. **Build output directory**: （留空）
5. **Environment variables**: （留空，除非需要）
6. 不勾選任何高級選項

### 步驟 6：部署

1. 點擊 **Save and Deploy**
2. Cloudflare 會開始構建和部署
3. 等待幾分鐘...
4. 看到 ✓ Deployment complete 後就完成了！

### 步驟 7：訪問您的網站

網站將在以下網址上線：  
`https://acnh-arts.pages.dev`

---

## 設置自訂域名（Pages）

1. 在 Pages 項目設定中，找 **Custom domains**
2. 點擊 **Set up a custom domain**
3. 輸入您的域名（例如 `acnh-arts.com`）
4. 按照提示配置 DNS 記錄

---

## Cloudflare Workers 部署

如需更多控制或服務器端功能，可以使用 Workers。

### 優點

✅ 免費（前 100K 請求/天）  
✅ 更多控制  
✅ 支持環境變數  
✅ 支持 KV 儲存  

### 步驟 1：安裝 Wrangler CLI

```bash
# 使用 Yarn
yarn add --dev wrangler

# 或使用 NPM
npm install --save-dev wrangler
```

### 步驟 2：登入 Cloudflare

```bash
# 使用 Yarn
yarn wrangler login

# 或使用 NPM
npx wrangler login
```

這將打開瀏覽器提示授權。

### 步驟 3：獲取帳戶 ID

1. 登入 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 右上角點擊帳戶頭像
3. 點擊 **Account Details** 或 **Workers**
4. 找到 **Account ID** 並複製

### 步驟 4：更新 wrangler.toml

編輯 `wrangler.toml` 檔案：

```toml
name = "acnh-arts"
account_id = "YOUR_ACCOUNT_ID"  # 粘貼您的帳戶 ID
```

### 步驟 5：部署

```bash
# 開發環境
yarn dev

# 生產部署
yarn deploy

# 或指定環境
yarn wrangler deploy --env production
```

### 步驟 6：訪問

您的 Worker 將在以下地址上線：  
`https://acnh-arts.SUBDOMAIN.workers.dev`

---

## 自訂域名（Workers）

1. 訪問 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 找到您的 Worker
3. 進入 **Settings** → **Triggers**
4. 在 **Routes** 中添加自訂域名

---

## 自動化部署

### GitHub Actions（可選）

在 `.github/workflows/deploy.yml` 中添加自動部署配置：

```yaml
name: Deploy to Cloudflare

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

---

## 常見問題

### Q: GitHub 上傳時要求密碼怎麼辦？

從 GitHub 2021 年 8 月起，不再支持直接使用密碼。改用以下方式：

**方式 1：Personal Access Token**
1. 訪問 GitHub 設定 → **Developer settings** → **Personal access tokens**
2. 點擊 **Generate new token**
3. 勾選 `repo` 權限
4. 點擊 **Generate token** 並複製
5. 當提示輸入密碼時，粘貼 Token

**方式 2：SSH 密鑰（推薦）**
```bash
# 生成 SSH 密鑰
ssh-keygen -t ed25519 -C "your_email@example.com"

# 添加公鑰至 GitHub
cat ~/.ssh/id_ed25519.pub  # 複製並粘貼至 GitHub Settings → SSH Keys

# 修改遠程倉庫 URL
git remote set-url origin git@github.com:USERNAME/acnh_arts.git
```

### Q: 部署後網頁無法加載圖片？

檢查以下項目：
1. 確保 `assets/images/` 目錄已推送至 GitHub
2. 檢查 `index.html` 中的圖片路徑
3. 在瀏覽器開發者工具（F12）檢查網絡錯誤

### Q: 如何更新已部署的網站？

```bash
# 編輯檔案
# ...

# 提交和推送
git add .
git commit -m "Update: description"
git push

# Cloudflare Pages 會自動部署（通常 1-2 分鐘）
# Cloudflare Workers 需要手動部署：yarn deploy
```

### Q: 成本是多少？

- Cloudflare Pages：**完全免費**
- Cloudflare Workers：免費（100K 請求/天）

### Q: 可以使用自己的域名嗎？

可以！需要：
1. 購買域名（例如 [GoDaddy](https://www.godaddy.com)、[NameCheap](https://www.namecheap.com)）
2. 將域名添加至 Cloudflare（或將託管 DNS 指向 Cloudflare）
3. 在 Pages/Workers 設定中配置域名

### Q: 如何查看部署日誌？

**Pages**: 在 Cloudflare Pages 項目中查看 **Deployments** 標籤  
**Workers**: 使用 `yarn wrangler tail` 查看實時日誌

---

## 故障排除

### 推送至 GitHub 失敗

```bash
# 檢查遠程倉庫
git remote -v

# 如果 URL 錯誤，修改它
git remote set-url origin https://github.com/USERNAME/acnh_arts.git

# 重試推送
git push -u origin main
```

### Cloudflare Pages 構建失敗

1. 檢查部署日誌（Deployments 標籤）
2. 確保沒有構建命令或異常設定
3. 檢查 `.gitignore` 是否排除了必要檔案

### 部署後看到 404 錯誤

1. 確保 `index.html` 在項目根目錄
2. 清除瀏覽器快取（Ctrl+Shift+Delete / Cmd+Shift+Delete）
3. 等待幾分鐘讓部署完全完成

### 圖片無法加載

1. 檢查文件路徑是否正確
2. 訪問 `https://yourdomain.com/assets/images/filename.jpg` 直接測試
3. 確保檔案已推送至 GitHub

---

## 下一步

- ✅ 添加更多藝術品信息
- ✅ 自訂網站外觀
- ✅ 添加更多功能（評論、數據庫等）
- ✅ 設置自訂域名

---

## 需要幫助？

- 📚 [Cloudflare Pages 文檔](https://developers.cloudflare.com/pages/)
- 🔧 [Wrangler CLI 文檔](https://developers.cloudflare.com/workers/wrangler/cli-wrangler/)
- 💻 [Git 官方文檔](https://git-scm.com/doc)
- 🐙 [GitHub 幫助](https://docs.github.com/)
