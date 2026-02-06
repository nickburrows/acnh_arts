# GitHub Pages 部署指南

本文檔提供詳細的上傳至 GitHub 和部署至 GitHub Pages 的完整步驟。

---

## 目錄

1. [GitHub 設置](#github-設置)
2. [啟用 GitHub Pages](#啟用-github-pages)
3. [自訂域名](#自訂域名)
4. [故障排除](#故障排除)

---

## GitHub 設置

### 步驟 1：創建 GitHub 存放庫

1. 訪問 [github.com](https://github.com) 並登入
2. 點擊右上角頭像 → **Your repositories**
3. 點擊 **New** 按鈕
4. 填寫以下信息：
   - **Repository name**: `acnh_arts`
   - **Description**: `動森藝術品真偽鑑定網頁`
   - **Visibility**: `Public`（推薦）
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
cd /Users/nick/My/GitHub/acnh_arts

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

## 啟用 GitHub Pages

### 步驟 1：打開倉庫設定

1. 訪問您的倉庫：`https://github.com/USERNAME/acnh_arts`
2. 點擊頂部的 **Settings** 標籤

### 步驟 2：導航至 Pages 設定

1. 在左側邊欄找 **Pages**（靠近底部）
2. 點擊進入

### 步驟 3：配置發布源

1. **Source** 下選擇 **Deploy from a branch**
2. **Branch** 選擇 **main**
3. **Folder** 選擇 **/ (root)**
4. 點擊 **Save**

### 步驟 4：等待部署

頁面會顯示：

```
Your site is ready to be published at https://username.github.io/acnh_arts
```

**第一次部署可能需要 3-5 分鐘。**

### 步驟 5：訪問您的網站

打開瀏覽器訪問：

```
https://username.github.io/acnh_arts
```

---

## 日常更新流程

### 編輯和推送更新

```bash
# 1. 編輯您的檔案
# ...

# 2. 檢查變更
git status

# 3. 添加變更
git add .

# 4. 提交
git commit -m "Update: describe what you changed"

# 5. 推送
git push
```

**GitHub Pages 會自動部署（通常 1-2 分鐘內）**

---

## 自訂域名

如果您想使用自己的域名（例如 `acnh-arts.com`），請按照以下步驟。

### 前置要求

- 購買域名（GoDaddy、NameCheap 等）
- 域名的 DNS 控制面板存取權限

### 步驟 1：添加自訂域名至 GitHub Pages

1. 進入倉庫 **Settings** → **Pages**
2. 在 **Custom domain** 欄輸入您的域名（例如 `acnh-arts.com`）
3. 點擊 **Save**

GitHub 會生成一個 `CNAME` 檔案。

### 步驟 2：配置 DNS 記錄

登入您的域名提供商的 DNS 控制面板。

#### 選項 A：A 記錄（推薦）

添加 4 條 A 記錄，指向 GitHub Pages 的 IP：

```
Name: @
Type: A
Value: 185.199.108.153

Name: @
Type: A
Value: 185.199.109.153

Name: @
Type: A
Value: 185.199.110.153

Name: @
Type: A
Value: 185.199.111.153
```

#### 選項 B：CNAME 記錄

```
Name: www
Type: CNAME
Value: username.github.io
```

### 步驟 3：等待 DNS 傳播

DNS 變更通常在 15 分鐘到 24 小時內生效。

### 步驟 4：啟用 HTTPS

1. 回到 GitHub Pages 設定
2. 等待您看到 **DNS lookup successful** 的綠色勾號
3. 勾選 **Enforce HTTPS**

GitHub 會自動生成免費的 SSL 證書（Let's Encrypt）。

---

## 常見問題

### Q: gh-pages 分支是什麼？為什麼我不需要？

舊版 GitHub Pages 需要 `gh-pages` 分支。現代版本（2019 年後）直接從任何分支部署，無需該分支。

### Q: 推送到 GitHub 時出現 Permission denied 錯誤

解決方案 1：使用 HTTPS（推薦新手）
```bash
git remote set-url origin https://github.com/USERNAME/acnh_arts.git
```

解決方案 2：設置 SSH 密鑰
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub  # 複製公鑰
# 在 GitHub Settings → SSH Keys 添加公鑰
```

### Q: "fatal: remote origin already exists"

```bash
# 移除舊的遠程倉庫
git remote remove origin

# 添加新的
git remote add origin https://github.com/USERNAME/acnh_arts.git
```

### Q: GitHub Pages 部署失敗或看不到網站

1. **檢查 Settings → Pages 是否已啟用**
2. **確保 Branch 設定為 main**
3. **檢查 Folder 設定為 / (root)**
4. **清除瀏覽器快取**（Ctrl+Shift+Delete）
5. **檢查 Actions 標籤看部署日誌**

### Q: 圖片無法加載

1. 確認圖片已推送至 GitHub
   ```bash
   git status  # 應該看不到 assets/images 有未追蹤的檔案
   ```

2. 檢查 HTML 中的圖片路徑（無應無開頭 `/`）
   ```html
   <!-- ✓ 正確 -->
   <img src="assets/images/filename.jpg">
   
   <!-- ✗ 錯誤 -->
   <img src="/assets/images/filename.jpg">
   ```

3. 直接訪問圖片 URL 測試
   ```
   https://username.github.io/acnh_arts/assets/images/filename.jpg
   ```

### Q: 自訂域名配置後為什麼還是看不到 HTTPS？

GitHub 需要 6-24 小時才能為自訂域名生成 SSL 證書。耐心等待並在 Pages 設定中監控狀態。

### Q: 我可以有多個 GitHub Pages 站點嗎？

可以！您可以有：
- 1 個個人站點（username.github.io）
- 無限個項目站點（其他倉庫的 GitHub Pages）

### Q: 如何刪除 GitHub Pages？

1. Settings → Pages
2. **Source** 改為 **None**
3. 點擊 **Save**

---

## 進階：使用 GitHub Actions 自動部署

如果您想自動化部署流程，可以使用 GitHub Actions（可選）。

在 `.github/workflows/deploy.yml` 中：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: echo "Static assets deployed!"
```

這樣每次推送 main 分支時，會自動運行此工作流程。

---

## 相關資源

- 📚 [GitHub Pages 官方文檔](https://docs.github.com/en/pages)
- 🌐 [pages.github.com 官網](https://pages.github.com/)
- 💾 [Git 官方文檔](https://git-scm.com/doc)
- 🔒 [GitHub SSH 密鑰設置](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## 需要更多幫助？

- 訪問 GitHub Community Discussions
- 查閱 GitHub Pages 官方文檔
- 在倉庫提交 Issue


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
