[LastUpdate](2014/10/30)
#OAuth認証画面（OauthActivity）

<index>
1. [レイアウト](#layout)
2. [利用者向けガイド](#guide)
3. [（開発者向け）機能概要](#summary)
4. [（開発者向け）ソース](#source)
</index>

##layout
なし

##guide
この画面は基本的に見えません。見えないようになっています。物凄い低スペックな端末だと一瞬見えますが。

OAuth認証は[通知詳細設定画面](index.html?md=notification)か[Twitter連携アカウント管理画面](index.html?md=account_list)から行うことが出来ます。

それぞれ微妙に挙動が異なるので、細かい説明はそちらをどうぞ。

##summary
OAuth認証後のリダイレクトを受け取り、即座に[OauthService](https://github.com/tumbling-dice/Hatate/blob/master/src/inujini_/hatate/service/OauthService.java)を実行する。
<note>
**android.intent.category.BROWSABLEはServiceで受け取ることが出来ない。**

そのため、リダイレクトを受け取るためのActivityが必ず必要となる。
</note>

##source
* [OauthActivity.java](https://github.com/tumbling-dice/Hatate/blob/master/src/inujini_/hatate/OauthActivity.java)
