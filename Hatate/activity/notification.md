[LastUpdate](2014/10/31)
#通知詳細設定画面（NotificationActivity）

<index>
1. [レイアウト](#layout)
2. [利用者向けガイド](#guide)
    1. [確実にとどめをさす](#guide-snooze)
    2. [生存確認間隔](#guide-snooze-time)
    3. [声](#guide-scream)
    4. [声量](#guide-volume)
    5. [バイブ](#guide-vibration)
    6. [バイブパターン](#guide-vibration-pattern)
    7. [憎しみの光](#guide-light)
    8. [光の色](#guide-light-color)
    9. [殺害報告](#guide-tweet)
    10. [確認](#guide-preview)
3. [（開発者向け）機能概要](#summary)
4. [（開発者向け）ソース](#source)
</index>

##layout
TODO:stub

##guide
###guide-snooze
いわゆるスヌーズ機能です。
通知をクリック or 削除するまで延々と刺され続けます。

あくまで刺され続けるだけなので、この機能をONにしても以下の情報は何ら更新されません。
* 好感度
* スペルカード
* 刺した回数

よくよく考えたら刺した回数は増えなきゃおかしいですね。そのうち直します。

###guide-snooze-time
スヌーズの間隔を設定します。単位は秒です。

段々声が大きくなるとかそう言う機能はないです。つけてもいいですけど。

###guide-scream
通知時に悲鳴を上げるかどうか設定します。

好感度が高いと*ウグゥーーーーーーーーーーッ!!! (発情)*になります。

逆に好感度が低いと*ウグゥーーーーーーーーーーッ!!! (とても汚い声)*になります。

###guide-volume
声量を調節します。

**実際には端末のメディア音量をそのまま変更することになるので注意してください。**

この設定値を保存しておいて、再生時にだけ設定する、ってことも不可能ではないんですが、諸事情から実装を見送っています。

###guide-vibration
通知時に*ウグゥーーーーーーーーーーッ!!!*っぽい振動を発することが出来ます。

###guide-vibration-pattern
バイブのパターンを以下の三つから選択することが出来ます。

* *ウグゥーーーーーーーーーーッ!!!*
* *ウ、ウ、ウ、ウグゥーーーーーーーーーーッ!!!*
* *ウグゥーーーーーッ!!!ウグゥーーーーーッ!!!*

選択すると自動でプレビューされるので、好みのものを選んでください。

###guide-light
通知時にLEDライトを点灯させることが出来ます。

**端末スリープ時にのみLEDが点灯します。**

なんでLEDをその場で点灯させるAPIがないのかはよくわかりません。
ネイティブな部分をゴニョゴニョすると出来るらしいんですが、やりたくないです。

###guide-light-color
点灯するライトの色を選択することが出来ます。

現在は以下の三つから選択することが出来ます。
* 赤
* 青
* 緑

何でこの三色なのかですが、RGBだからですね。

端末によっては再現不可能な色も存在するので、シンプルな色だけを選べるようになっています。

って言うかこの設定いじってる人いるんですかね…？

###guide-tweet
**使わないでください。**

事前にTwitter認証済みのアカウントが存在しない場合はOAuth認証が始まります。しないでください。**使わないでください。**

###guide-preview
実際に刺してみるとどうなるのか、設定内容を確認します。

##summary
TODO:stub

##source
* [NotificationActivity.java](https://github.com/tumbling-dice/Hatate/blob/master/src/inujini_/hatate/NotificationActivity.java)
* [notification.xml](https://github.com/tumbling-dice/Hatate/blob/master/res/xml/notification.xml)
* [arrays_vibration.xml](https://github.com/tumbling-dice/Hatate/blob/master/res/values/arrays_vibration.xml)
* [arrays_lightcolor.xml](https://github.com/tumbling-dice/Hatate/blob/master/res/values/arrays_lightcolor.xml)
