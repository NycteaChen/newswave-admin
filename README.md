# NewsWave-admin

<!-- 底下標籤來源參考寫法可至：https://github.com/Envoy-VC/awesome-badges#github-stats -->

![start](https://img.shields.io/github/stars/r37111081/newswave-backend.svg)｜
![forks](https://img.shields.io/github/forks/r37111081/newswave-backend.svg)｜
![issues-pr](https://img.shields.io/github/issues-pr/r37111081/newswave-backend.svg)｜
![issues](https://img.shields.io/github/issues/r37111081/newswave-backend.svg)


<img width="500" src="https://i.imgur.com/4ARRsXj.jpeg" />

- DEMO: [NewsWave 管理後台](https://newswave-admin-qi9w.onrender.com/)

此為 [NewsWave](https://github.com/NycteaChen/newswave-frontend) 的後台管理系統

## 測試帳號

```bash
Account： admin@gmail.com
Password： admin1234
```

## 畫面

![登入](https://i.imgur.com/vTMKNC5.png)
![儀錶板](https://i.imgur.com/ZzhKJO0.png)

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.17.1` 以上

### 取得專案

```bash
git clone https://github.com/NycteaChen/newswave-admin.git
```

### 安裝套件

```bash
npm install
```

### 環境變數設定

請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:4001/
```

## 環境變數說明

```env
NUXT_PUBLIC_API_BASE= # api 域名，請參照後台專案的 localhost: https://github.com/r37111081/newswave-backend
```

## 資料夾

- assets - 靜態資源放置處
  - scss - scss 檔案放置處
  - image - 圖片放置處
- components - 拆分元件放置處
  - _pages - 頁面獨有元件
  - 全域共用元件
- composables - 通用功能放置處（例：API）
- layouts - 頁面佈局
- middleware - 頁面身份驗證
- pages - 頁面路由
- plugins - 擴充插件、搭配 Composables、Provide 定義全局變數
- public - 靜態資源放置處
- stores - pinia 狀態管理
- types - 全域共用 type 放置處
- utils - 自訂共用方法
- .env - 環境變數
- nuxt.config.js - nuxt 3 設定


## Technologies

- Node.js v18.17.1
- Vue v3.4.21
- Vue-router v4.3.0
- Nuxt v3.11.2
- Pinia v2.1.7
- Bootstrap v5.3.3
- vueuse v10.9.0


## Codeing Style Tools

- eslint v8.57.0
- stylelint v16.4.0
- prettier v3.2.5
- husky v8.0.0
- lint-staged v15.2.2

## CI/CD

此專案有使用 Render 服務部屬，當專案 merge 到 master 時會自動執行以下動作：

- 建立 Node.js 環境
- 安裝相依套件
- 編譯程式碼
- 部署到 render

## 開發團隊

- [chsiyu](https://github.com/sihyun-user)
- [chrisT](https://github.com/r37111081)
- [Ciel](https://github.com/NycteaChen)
- [kiki880409](https://github.com/kiki880409)
- [Alan](https://github.com/LOOFOO)
