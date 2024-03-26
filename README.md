# DLSITE Replacer

Firefox用。42〜対応。たぶん。Chromeとかも多分ちょっと書き換えれば動くよ。しらんけど。

雑。さすがに文字列が文字列だけにFirefoxのadd-on置き場に置かれるはずもなく野良リリース。
バイナリ…というかドラッグアンドドロップでインストールできる.xpiファイルは右側のReleaseより。

インストールできないとか必ず言われると思うのだが、URL欄にa
```
about:config
```
って打って、検索窓に
```
xpi
```
って打って
```
xpinstall.signatures.required
```
ってところを
```
false
```
にする。
そうすると「危ないかもしれないから気をつけろ」とかいわれるけど、危ないかどうかは拡張子をzipにするとか、7zipかなにかで展開して中身みりゃ良い。
https://github.com/crackerjacques/dlsite_replacer/blob/main/img/ss01.png
![IMG](https://github.com/crackerjacques/dlsite_replacer/blob/main/img/ss01.png?raw=true)

ライセンスについてはWTFPLでおねがいします。

DLSITEから叱られたら取り下げます。
