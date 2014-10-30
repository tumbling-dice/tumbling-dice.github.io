[LastUpdate](2014/10/30)
#スペルカードガチャ画面（GachaActivity）

<index>
1. [レイアウト](#layout)
2. [利用者向けガイド](#guide)
    1. [遊び方](#guide-rule)
    2. [注意](#guide-caution)
3. [（開発者向け）機能概要](#summary)
4. [（開発者向け）ソース](#source)
</index>

##layout
TODO:stub

##guide
###guide-rule
はたてちゃんの画像をタップするだけです。何かしらのスペルカードが3枚貰えます。

1日1回…というか、1殺1回です。アラームを鳴らした瞬間にまた引けるようになります。

###guide-caution
**悲鳴およびバイブ機能と連携しています。**

公共の場で引くときは[通知詳細設定画面](index.html?md=notification)でOFFにしておかないと*ウグーーーーーーーーーーッ!!!*が響き渡ることでしょう。

公共の場でこんなアプリを使うなという意志がこめられています。

##summary
TODO:stub

##source
* [GachaActivity.java](https://github.com/tumbling-dice/Hatate/blob/master/src/inujini_/hatate/GachaActivity.java)
* [activity_gacha.xml](https://github.com/tumbling-dice/Hatate/blob/master/res/layout/activity_gacha.xml)
