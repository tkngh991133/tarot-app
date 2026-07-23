# タロットの導き（tarot-app）

大アルカナ22枚から3枚（過去・現在・未来）を引く、一人占い専用のタロットアプリです。
手相診断アプリ（palm-app）と同じ技術構成（Next.js + Vercel + Gemini API）で構築しています。

## セットアップ

```bash
npm install
```

`.env.local` を作成し、Gemini APIキーを設定してください（`.env.local.example` を参照）。

```
GEMINI_API_KEY=あなたのAPIキー
```

## ローカル起動

```bash
npm run dev
```

## Vercelへのデプロイ

1. GitHubにこのリポジトリの中身をアップロード（ZIPではなく、フォルダ構成のままファイルを直接アップロード）
2. Vercelで新規プロジェクトとしてこのリポジトリをインポート
3. Vercelの Settings → Environment Variables に `GEMINI_API_KEY` を追加
4. デプロイ

## ディレクトリ構成

```
app/
  page.tsx           … メイン画面（入力→カードめくり→結果の状態遷移）
  layout.tsx          … 全体レイアウト・フォント設定
  globals.css         … 紺紫×ゴールドのテーマ
  api/tarot/route.ts  … Gemini APIを呼び出す鑑定生成API
components/
  InputForm.tsx        … 生年月日・性別・職業・テーマ・自由記述の入力フォーム
  FlipCard.tsx         … 1枚ずつめくるカードのフリップ演出
  CardBack.tsx         … カード裏面デザイン
  TarotCardArt.tsx     … 大アルカナ22枚のカード表面デザイン（自作SVG）
  ResultDisplay.tsx    … 鑑定結果表示
lib/
  cards.ts             … 大アルカナ22枚のデータ（意味・キーワード）とランダム3枚抽選ロジック
  types.ts             … 型定義（テーマ・職業・性別など）
```

## 手相アプリからの教訓の反映状況

- [x] GitHubアップロードはZIPではなくファイル直接アップ想定（このREADME内に明記）
- [x] 自由記述入力は `onBlur` 相当（ref経由・非制御コンポーネント）で値取得し、iOSフリック入力に対応
- [x] 生年月日は年・月・日を分けたセレクター方式
- [x] Gemini APIキーは環境変数 `GEMINI_API_KEY` で管理
