# NICENESSness

服のディテールから各地の暮らし・歴史・文化をたどる、NICENESSの非公式ファンジャーナルです。NICENESSの公式運営・公認サイトではありません。

- サイト：https://nicenessness.raurauji.chatgpt.site
- 訂正・新しい記事の提案：https://github.com/raurau-llc/nicenessness/issues/new/choose
- 編集方針：CONTRIBUTING.md / GOVERNANCE.md

## 開発

Node >=22.12.0。`npm ci`、`npm test`、`npm run build`。`npm run dev`でローカル表示。成果物はdist/です。Astroの計測を無効にする場合はASTRO_TELEMETRY_DISABLED=1を設定できます。

content/articles.jsonに3本の原稿と出典情報を収録。readyの原稿のみを配信し、商品ID・シーズン・地域の役割・歴史の年代を分けています。release.v1.jsonは採用時の研究記録ハッシュとfact参照です。研究資料原本や商品説明全文は含みません。

## 公開とSEO

content/site.jsonに正規URLと共同編集リポジトリを保存しています。環境変数SITE_URL / SITE_INDEXABLE / CONTRIBUTION_REPOで上書きできます。ローカル専用の配信ではSITE_INDEXABLE=falseを指定してください。canonical、OG、Article、パンくず、サイトマップを同じ公開オリジンで生成します。

GitHubは共同編集、GPT Sitesは静的配信を担当します。mainへの採用とSitesの公開は別の操作です。Sitesへは承認したコミットをソース用リポジトリにも送信し、そのコミットからビルドしたdist/を版として保存・公開します。認証トークンは保存しません。初回以降の自動デプロイは未設定です。

## 参加

訂正はIssue、原稿・コードの変更はPRで提案してください。出典と該当箇所を添え、提案者以外の編集者が確認します。記事・コードのライセンスと継続的な編集体制は整備中です。現時点でオープンソースライセンスを一括付与したものではありません。

## ソースの書き出し

`npm run export:community -- /absolute/new-directory`で公開用ソースの控えを作れます。出力先は上書きしません。Git履歴、研究入力、環境設定、依存パッケージ、配信成果物を除き、community-export.jsonにファイルハッシュを記録します。
