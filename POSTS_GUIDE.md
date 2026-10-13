# Posts更新手順

記事は `src/content/posts` にあるMarkdownファイルで管理します。HTMLやAstroを編集する必要はありません。

## GitHubの画面だけで新しい記事を書く

1. GitHubで `src/content/posts/_template.md` を開く
2. 右上の鉛筆アイコンから内容をコピーする
3. `src/content/posts` に戻り、`Add file` → `Create new file` を選ぶ
4. ファイル名を `2026-10-13-article-name.md` のように半角英数字で付ける
5. コピーした内容を貼り付けて編集する
6. 公開するときは `draft: false` にする
7. `Commit changes...` を押す

`main`へコミットすると、自動的にサイトが再構築・公開されます。

## 記事上部の設定

```yaml
---
title: 記事タイトル
date: 2026-10-13
category: NEWS
summary: 記事の短い説明
draft: false
---
```

- `title`: 記事タイトル
- `date`: `年-月-日`形式の日付
- `category`: `NEWS`、`PAPER`、`PROJECT`、`MEMBER`など
- `summary`: 記事の短い説明
- `draft`: `true`なら非公開、`false`なら公開

ファイル名が記事URLになります。例：`2026-10-13-open-lab.md` → `/posts/2026-10-13-open-lab/`

## 記事に画像を載せる

1. GitHubで `public/images/posts` を開く
2. `Add file` → `Upload files` から画像をアップロードする
3. 画像名は `2026-10-13-event.jpg` のように、半角英数字とハイフンで付ける
4. 記事のMarkdown内で、画像を表示したい場所に次の1行を書く

```markdown
![画像の説明](/images/posts/2026-10-13-event.jpg)
```

`画像の説明`には「研究発表の様子」など、画像の内容が分かる短い説明を書いてください。

画像は横幅1600px程度、JPEGまたはWebP形式を推奨します。ファイルサイズが大きすぎる場合は、アップロード前に縮小してください。
