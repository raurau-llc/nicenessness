# 記事候補の重複照合 — 2026-10-04

照合の基準は [article-topic-index-20261004.json](article-topic-index-20261004.json)。`main` 217本、PR14 5本、PR15 4本、PR17 9本（保留中のT330を含む）、PR18 2本の計237 IDを、各ブランチの実際の`content/articles.json`から抽出した。各行の題名、導入、主題、商品、出典URLまで比較する。新しい候補を採る前にはopen PRのheadを再取得し、索引を更新する。IDが違っても、同じ収蔵品・広告・商品を同じ問いで扱う場合は重複と判定する。

PR15のT091・T097・T099とPR18に加えられた同IDの3本は、IDも中心題材も重なっていたためPR18から除いた。PR15は変更していない。PR18にはT131とT253だけを残した。

T253の[1955年のDoD品目表](https://nara-media.s3.amazonaws.com/electronic-records/rg-330/Directives/rec_160415.PDF)にはN-2Bの型名があり、[MARSHの公式説明](https://www.niceness.jp/products/marsh)はN-2・N-3を参照に挙げる。ただしmain T137もN-3系の型名と現行品を分けて読む記事で、T253は衣服の形や着用環境に関する新しい事実が乏しい。独立の読者価値が示されるまでT253は`review`のまま保留する。

## 次に調べる8候補

ここに挙げるのは調査候補であり、執筆・掲載の採用判定ではない。既存の固定研究IDを用いる。URLが示す事実の範囲を超えて、NICENESSの直接原型や当時の一般的用途を推定しない。

| ID | 問いと既存との差 | 確認できる資料URL | 執筆前に必要なこと |
| --- | --- | --- | --- |
| T001 | H.LEDZに絞り、工具を入れる帆布バッグの開口部・リベット・持ち手を調べる。main T062はD.LANDS等のメッセンジャーバッグを、自転車で運ぶときの固定具から読む。 | [Klein Toolsの現行工具バッグ](https://www.kleintools.com/catalog/canvas-tool-bags/tool-bag-black-canvas-12-inch)、[NICENESS H.LEDZ](https://www.niceness.jp/products/h-ledz) | Kleinの現行仕様を1920〜50年代へ遡らせない。同時代のカタログか収蔵実物と使用場面を探す。 |
| T039 | 米国のドレス用シャツと着脱できる襟を個別に調べる。main T007の1970年代英国シャツ・仏ドレスシャツの組合せ、T315の米国ワークシャツとは、用途と問いを分ける。 | [The Metの米国製綿シャツ](https://www.metmuseum.org/art/collection/search/91159)、[NICENESS C.IOMMI](https://www.niceness.jp/products/c-iommi) | Metの目録が示すのは年代・地域・素材で、着脱襟の構造ではない。同時代の型紙や実物の襟資料を得る。 |
| T041 | 特定の古典作品の模写ではなく、ダ・ヴィンチのデッサンをモチーフとする現代の柄づくりを調べる。main T209は科学図を衣服の模様にした別の題材。対象はLEOへ絞る。 | [NICENESSの制作記事](https://www.niceness.jp/episode/drawings-and-discoveries/)、[NICENESS LEO](https://www.niceness.jp/products/leo) | 記事は原図を特定していない。デッサンのどの要素が柄になったかを独立資料で確かめるまで、一般的なダ・ヴィンチ解説で引き延ばさない。 |
| T284 | 鞄用金具と現行ベルトの七宝焼バックルを比較する。main T092はNORTH & JUDDの錨印バックル、PR14 T300は石を留めるバングルを扱う。 | [The Metの1970年代初頭の鞄](https://www.metmuseum.org/art/collection/search/79199) | 目録が示すのは革と真鍮で、七宝焼ではない。JOJOに使われた金具の製作者・年代・元用途の資料を探す。NICENESSの当該説明は提供公式アーカイブ本文で、公開URLは未確認。 |
| T306 | 1970年の音楽家の服装記録と革の着方。main T274の革ベスト、PR17 T290の舞台用スーツとは個人の記録と服型で分ける。 | [Getty/Condé NastのMiles Davis写真目録](https://www.gettyimages.co.uk/detail/news-photo/musician-miles-davis-in-a-custom-made-rawhide-laced-chamois-news-photo/511136552) | 写真の服はプルオーバーで、NICENESS DAVEの参照という証拠はない。提供資料の人物名も判読不能。画像は権利管理下にあり転載しない。 |
| T323 | 約1950年の西部風スポーツジャケットという個別の収蔵品。main T313のラウンジジャケット、PR17 T290の舞台衣装とは着用文脈と物の構造を分ける。 | [National Park Serviceのスポーツジャケット収蔵記録](https://www.nps.gov/hstr/learn/historyculture/sports-jacket-circa-1950.htm) | H.KENTがこの一着を参照したとは確認できない。もう一つのJFK収蔵リンクは今回閲覧エラーのため、本文照合をやり直す。 |
| T331 | 消防用帆布という生地の参照を、作業衣の素材規格として確かめる。main T189とT264は同じHAYESのフード・前立てを扱っており、この素材の問いを立てられるかを先に検証する。 | [NICENESS HAYES](https://www.niceness.jp/products/hayes) | 「1930年代の米国消防用帆布」は現時点でブランド説明のみ。同年代の消防被服・帆布規格の一次資料に届くまで史実記事にしない。 |
| T341 | サルバトーレ・ピッコロの縫製と手仕上げ。main T007には同製作者のTottiが出るため、未掲載のGUARINOに絞り、現代の製作工程に問いを置く。 | [NICENESS GUARINO](https://www.niceness.jp/products/guarino) | 公式ページはイタリアでの縫製・手仕上げと「MADE IN JAPAN」を併記する。工程と原産地表示の関係を当事者資料で確認する。メーカーサイトは今回閲覧できず独立照合は未了。 |

## 除外例と次回の手順

- T173/T174のBrown's Beach広告とFederal Registerはmain T073が既に両方使用。T245のHAMMILLはmain T220と商品・中心の鳥柄ニットが近い。T333の二つの資料URLはmain T332と一致する。T326はmain T325とKARASのバラクラバ／ネックゲイターを扱う。T054のNICENESS製品URLは全点main T052と一致し、外部のParaboot記事は直接原型を示さない。T006の仏ドレスシャツはmain T007/T193に近く、Metの目録には新しい構造上の手掛かりがない。
- 提案時はmainとすべてのopen PRの現在のheadを確認し、索引のID・題名・導入・商品・資料URLを照合する。同一資料でも異なる問いが成立するかを本文で判断し、出典の異なる段落を使う場合はその箇所も記録する。
- 公開用の既存研究IDがない新題材は、`CONTRIBUTING.md`に従ってメンテナーと衝突しない新記事IDおよび独立した資料照合記録を定める。既存研究manifestへIDを追記して採番したことにはしない。
