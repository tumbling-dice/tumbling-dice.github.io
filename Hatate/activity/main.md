[LastUpdate](2014/10/30)
#いろいろな設定画面（MainActivity）

<index>
1. [レイアウト](#layout)
2. [利用者向けガイド](#guide)
    1. [起動時刻設定](#guide-time-preference)
    2. [とどめをささない](#guide-notify-preference)
    3. [通知詳細設定](#guide-notify-detail)
    4. [スペルカードガチャ](#guide-spellcard-gacha)
    5. [スペルカード図鑑](#guide-spellcard-library)
    6. [スペルカード取得履歴一覧](#guide-spellcard-history)
    7. [好感度](#guide-love)
    8. [確認機能](#guide-preview)
    9. [オンラインマニュアル](#guide-online-manual)
    10. [ライセンス](#guide-license)
    11. [tips](#guide-tips)
3. [（開発者向け）機能概要](#summary)
4. [（開発者向け）ソース](#source)
</index>

##layout
[![ss-main-0](./images/ss-main-0.png)](./images/ss-main-0.png)
[![ss-main-1](./images/ss-main-1.png)](./images/ss-main-1.png)

##guide
###guide-time-preference
はたてちゃんを刺し殺す時間を設定します。

毎日その時間にとりあえず刺しに行きます。

###guide-notify-preference
とどめをささないことで悲鳴をあげさせる余裕を生みだします。

チェックが入っていると通知をOFFにすることが出来るんですが、一応殺しているのに好感度に変化がなかったりスペルカードが手に入らなかったりスペルカードガチャが出来なかったりしていますね。

普通に仕様バグなのでそのうち直ります。たぶん「とどめをささない」って文言が悪い。「慈悲を見せる」とかにしよう。

###guide-notify-detail
[通知詳細設定画面](index.html?md=notification)に移動します。

###guide-spellcard-gacha
[スペルカードガチャ画面](index.html?md=gacha)に移動します。

通知が発生するごとに一回引くことが出来ます。

###guide-spellcard-library
[スペルカード図鑑画面](index.html?md=spellcard_library)に移動します。

今までに手に入れたスペルカードをシリーズ順 or キャラクター順に眺めることが出来ます。

###guide-spellcard-history
[スペルカード取得履歴画面](index.html?md=spellcard_history)に移動します。

最新20件のスペルカード取得履歴を眺めることが出来ます。


###guide-love
今まで刺した回数と現在の好感度を確認することが出来ます。

###guide-preview
現在の設定でアラームが実行されたらどうなるのか確認出来ます。

面白半分でインストールした人がこれを押して満足し、さくっとアンインストール出来るようにするためここにも置いてあります。

###guide-online-manual
[このマニュアル](../)を見ることができます。

###guide-license
[ライセンス画面](index.html?md=license)に移動します。

###guide-tips
この画面が表示された時点で一度強制的にアラームを解除します。

現状、アラームが（再）登録されるタイミングは「MainActivityでBackボタンが押された」瞬間です。

人によってはBackボタンを使わないで終了させる可能性もあるのでもうちょっといいイベントをフックしたいところではあるんですが…。

##summary
TODO:stub

##source
* [MainActivity.java](https://github.com/tumbling-dice/Hatate/blob/master/src/inujini_/hatate/MainActivity.java)
* [main.xml](https://github.com/tumbling-dice/Hatate/blob/master/res/xml/main.xml)
