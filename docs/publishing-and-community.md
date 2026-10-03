# 公開と共同編集の運用

公開リポジトリ：https://github.com/raurau-llc/nicenessness
配信先：https://nicenessness.raurauji.chatgpt.site

研究原本は別管理し、このリポジトリにはサイトコードと公開用記事・出典だけを置きます。GitHubのmain採用とGPT Sitesへの公開は別の工程です。Sitesの閲覧者全員に編集権限を渡しません。

更新の順番は、Issue/PR → 出典確認 → 自動チェック → 提案者以外のレビュー → mainへ採用 → 承認した版をSitesへ公開、です。史実を変える修正は資料の該当箇所を必ず確認します。CIはデータ構造とリンク等を確認し、史実自体を承認するものではありません。

正式URLはcontent/site.jsonに記録。公開中のページはindex対象、検索と404はnoindex。canonical、OG、構造化データ、サイトマップは同じURLを使用します。フィルター条件付きURLは基底ページを正規URLとします。商品に架空の価格・在庫・レビューを付けません。記事の掲載日は実際の日付を使います。

今後決めるもの：継続的なメンテナーと資料確認担当、コードと記事のライセンス、貢献者名の表示方針、自動デプロイの導入。CODEOWNERSには実在する担当者が決まってから登録します。第三者の原文・写真・ロゴへ一括してライセンスを付与しません。

GitHub mainには217記事、2026-10-03確認時の公開サイトには197記事。本提案で5記事を追加した222記事はレビュー・採用・配信をそれぞれ必要とします。研究全件の記事化は後続です。地図は概略図。投稿受付はGitHub Issueを使用し、サイト内の下書き保存そのものは送信ではありません。

## 記事追加 v4（2026-09-12）

既存10記事を保持して40記事を追加し、合計50記事・60アイテム。各記事の出典、関連地域の役割、年代、タグを収録。公開原稿の根拠は `content/release.v4.json` に記録し、従来版も保存する。初期の sourceRevision と、今回の各記事の検証済み研究スナップショットのハッシュは区別する。T013の古い商品リンク参照F06は現行事実表に存在しないため、公開版では対応するブランド説明F04へ明示的に結び直した。調査原本とmanifestは変更していない。

## 記事追加 v5（2026-09-12）

既存50記事を保持し、さらに50記事を追加。合計100記事・94アイテム。服の構造、文様、仕事・スポーツ・音楽の着用場面を扱い、関連地域は製造・着用・原料・所蔵などの役割を区別する。採用時の研究記録50件すべてで本文ハッシュと検証記録の一致を確認し、公開版の事実参照を `content/release.v5.json` に保存。研究入力と過去版は変更しない。

T081・T083・T093の元の商品リンクは別テーマの説明や参照が残っていたため、公開版のみ今回の葵文様・羊歯文様・干支のブランド説明へ明示的に接続し直した。元の研究リンクは未変更。メーカーの現行仕様や回顧は、その発言元が分かる形で記述。比較資料とNICENESSの直接の原型の区別を各記事に残した。

## 記事追加 v6（2026-09-12）

既存100記事を保持して50記事を追加し、150記事・133アイテムへ。記事間の比較史料と主題の重なりを確認し、重複の強い10候補を入れ替えた。採用50件は研究本文と検証記録のハッシュ一致を再確認。新規のスペインを地域一覧と欧州地図へ追加し、全23地域へ対応。参照地域が特定できない記事は地図へ推定登録しない。所蔵者・競売の観察は出典欄で独立表示。T121の商品リンクに残っていた歴史事実への参照は、公開版のみ実際のブランド説明F03へ修正。旧100記事と調査資料は未変更。採用根拠はcontent/release.v6.json。

## 素材索引（2026-09-12）

`content/materials.json` は確認済みの部位ごとの索引。初回は48アイテム・57部位・16素材。商品とシーズンを特定し、公開記事と採用したブランド事実へ参照を持たせる。全文やタグのキーワード抽出だけで素材を登録しない。繊維、革の動物種、布組織、仕上げは別の概念として扱う。原皮・原料産地と製織・鞣し・仕上げ・調達先・タンナー所在地・製作地を区別し、材名や会社所在地から原皮産地を補完しない。産地情報は当該部位に紐づけ、別部位へ流用しない。未登録は非使用・不存在を意味しない。

追加時はmaterials.test.mjsの出典・同一部位/同一工程条件のテストと、全ページのリンク検証を実施する。牛革にはカーフ、羊革にはラムを含む親子分類を採用。現在は確認した説明の索引であり全商品の組成表ではない。


## 2026-09-13: 155 articles and mixed homepage

Added T283, T287, T294, T295 and T335 from SHA-verified research snapshots; release.v7 retains the previous 150 records. Historical comparisons and maker claims remain qualified. Homepage uses a seeded permutation: all articles stay in server HTML, a fresh short visit mixes them, and the visit seed is retained for 30 minutes for article/back navigation. No timer changes an open page. The accepted bilingual tagline is preserved.


## 2026-09-14: 176 articles

Added 21 reviewed stories from SHA-matched fixed research snapshots in release.v9. Preserved all prior 155 articles, homepage order behavior, and approved copy. T255 was held because its archive record does not show the garments themselves. Historical comparison objects do not establish direct NICENESS references; manufacturer claims, geographic roles and unknowns remain separate.


## 2026-09-14: 197 articles

Added 21 stories from SHA-matched fixed research snapshots in release.v10. The set prioritizes visible construction, use and material details. Historical comparison objects and institutional or maker claims do not establish direct NICENESS references. Ireland was added as a distinct cultural and museum-record region for T244. Existing 176 stories and homepage behavior are unchanged.

## 2026-09-21: 217 articles

Added 20 stories from SHA-matched fixed research snapshots in release.v11. Each snapshot was re-hashed against its own `history-validation` record before adoption; only topics whose hashes still match were used. Belgium and New Zealand were added as distinct museum-record regions for T271, T250 and T274. Existing 197 stories, homepage behavior and approved copy are unchanged.

Held back from this batch: T091, T097 and T099, the same three held at the 150-article batch. Their research files no longer hash to their validation records — T097 and T099 were rewritten by the recorded `history-source-type-repair.v1` pass, and T091 differs with no repair record. Adopting them needs a fresh validation record from the research side, not a hash copied out of the file. Eleven snapshots show this drift in total. T048 is not among the open ones: its mismatch was reconciled when it was adopted at batch 03, against the validated 25daded snapshot. T075 carries the same drift with no reconciliation recorded and is not published; re-checking it is a separate task.

Topics without an independently sourced historical fact remain unpublished. Of the 845 completed research topics, 648 were unpublished before this batch and only 52 carry at least one historical fact backed by a non-NICENESS source; brand-statement-only topics are not made into articles.

## 2026-10-03: five proposed stories

Proposed additions: T102 (1950 rugby jersey), T222 (cloverleaf collar), T243 (1973 printed T-shirt), T300 (turquoise bangle), T304 (balloon silhouette). All 217 existing article objects are preserved. The first three were checked for scope, claim/source alignment, duplicate history, geographic roles and product boundaries before the remaining two were prepared. The five use fresh reads of museum, university and government sources. No photographs or full product descriptions were copied.

T102 and T222 have stale archive validation hashes. Their selected claims were rechecked against the primary sources in `content/revalidation.v12.json`; the prior hashes are retained there. This verifies the claims used here, rather than claiming that every fact in the research file is complete. T243's previously inaccessible source was freshly read. T222 shares K.ROLAND with T063 but addresses the rounded collar of a 1915–17 collection object, without repeating T063's Italian tailoring narrative. T285 was not included because its source overlaps the published hoodie history. Cardin's late-1950s balloon dress is kept distinct from CALM's stated 1960s reference. DWIGHT's wishes are attributed to NICENESS rather than assigned to all Indigenous cultures or presented as effects of the stone.

New `publishedAt` and `modifiedAt` values remain null until actual publication. Before release, record the real release date, obtain the required independent approval on the resulting head, and pass the `verify` check. An editorial check by the author does not fulfill that independent approval. Main requires one approving review and successful `verify` CI, including for administrators.

The live site is Sites version 14 with 197 unique story links, while GitHub main at e1da630 contains 217 article objects. GitHub adoption and Sites deployment are separate operations; PR #13 added 20 articles to main but the live site has not received that version. The source histories were checked as compatible without overwriting either. PR #13 has successful CI but no approving review in its returned review history; its 20 articles are not silently counted as approved for a new deployment. Resolve that review evidence and the release scope before syncing them into Sites.

Proposed additions remain `review` and are excluded from production output. Local draft preview was validated separately before this guard correction. Promotion to `ready` with real publication dates requires normal review of the final release head.
