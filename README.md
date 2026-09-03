# 三林研究室 Webサイト

神戸大学 三林研究室のWebサイトです。

## 開発

Node.js 22.19以降を使用してください。

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 8885
```

## ビルド

```sh
npm run build
```

掲載内容は `src/data/site.ts`、ページは `src/pages/index.astro` で管理します。
