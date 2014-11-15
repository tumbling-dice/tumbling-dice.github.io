#Yoによるはたテロ

<index>
1. [Yoのインストール](#yo-install)
2. [HATATEのSubscribe](#yo-subscribe)
3. [Yoの受信](#yo-receive)
4. [Yoの送信](#yo-send)
5. [Yo APIの制約](#yo-api-imitation)
</index>

##yo-install
[Google Play](https://play.google.com/store/apps/details?id=com.justyo&hl=ja)か[App Store](https://itunes.apple.com/jp/app/yo./id834335592?mt=8&ign-mpt=uo%3D4)からインストールします。

インストールし終わったら起動して適当にユーザを登録しておきましょう。

##yo-subscribe

「HATATE」と言うユーザにYoを一度でも送っておけば「HATATEをSubscribeした」とみなされます。

Subscribeは、Twitterで言えばフォローみたいなものです。

通知詳細設定ではたてちゃんからYoを送ってもらうことでYoのリスト上にHATATEちゃんが現れます。

[![ss-yo-0](./images/ss-yo-0.png)](./images/ss-yo-0.png)

**ただし、一度でも自分からHATATEにYoを送っていないとSubscribeしたとは認識されません。**

##yo-receive

HATATEをSubscribeしておくと誰かがはたてちゃんを包丁で刺した時にYoを受け取ることが出来ます。

**Androidじゃなくても受け取れます。**はたテロです。

##yo-send

通知詳細設定のYoにチェックボックスを入れておけばはたテロに参加することが出来ます。

[![ss-yo-0](./images/ss-yo-0.png)](./images/ss-yo-0.png)

**Yoをインストールしていなくても実行可能です。**

##yo-api-imitation

YoのAPIとして「あるアカウントをSubscribeしているユーザすべてにYoを送信する」と言うものがあります。

はたテロはこのAPIを使用しています。

が、このAPIは1分間に1回しか使用できません。つまり、誰かが同時刻にアラームをセットしていた場合、**最初の一人分のYoのみが送信されます。**

[LastUpdate](2014/11/16)