# NewsWave-admin

<!-- 底下標籤來源參考寫法可至：https://github.com/Envoy-VC/awesome-badges#github-stats -->

![start](https://img.shields.io/github/stars/r37111081/newswave-backend.svg)｜
![forks](https://img.shields.io/github/forks/r37111081/newswave-backend.svg)｜
![issues-pr](https://img.shields.io/github/issues-pr/r37111081/newswave-backend.svg)｜
![issues](https://img.shields.io/github/issues/r37111081/newswave-backend.svg)


<img width="500" src="https://i.imgur.com/4ARRsXj.jpeg" />

- DEMO 1: https://newswave-admin.onrender.com/
- DEMO 2: https://newswave-admin-qi9w.onrender.com/

This repo is the backend management system of [NewsWave](https://github.com/NycteaChen/newswave-frontend). 

## Test account

```bash
Account： admin@gmail.com
Password： admin1234
```

## Views

### Login
![Login](https://i.imgur.com/vTMKNC5.png)

### Stats
![Stats](https://i.imgur.com/ZzhKJO0.png)

## Install

Node.js at least `v18.17.1`

### Clone repo

```bash
git clone https://github.com/NycteaChen/newswave-admin.git
```

### Install package

```bash
npm install
```

### Env setting

Please enter `cp .env.example .env` in the terminal to copy the .env.example file and adjust the relevant fields according to the contents of `.env`.

### Run repo

```bash
npm run dev
```

```bash
http://localhost:4001/
```

## About Env

```env
NUXT_PUBLIC_API_BASE= # api domain, follow the backend repo localhost: https://github.com/r37111081/newswave-backend
FRONT_END_URL = # front end url
```

## Files

- assets - Static resource
  - scss 
  - image
- components
  - _pages - Page components
  - Global components
- composables - General functions（e.g. Api）
- layouts
- middleware - Router auth
- pages - Page router view
- plugins
- public 
- stores - Pinia store
- types - Global Type
- utils - Custom sharing method
- .env 
- nuxt.config.js


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

Use Render to auto-build, when merging to master :

- Build Node.js environment
- Install package
- Compile code
- Build to Render

## Development Team

- [chsiyu](https://github.com/sihyun-user)
- [chrisT](https://github.com/r37111081)
- [Ciel](https://github.com/NycteaChen)
- [kiki880409](https://github.com/kiki880409)
- [Alan](https://github.com/LOOFOO)
