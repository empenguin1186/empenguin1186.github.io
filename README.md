# portfolio

## Tips

### display プロパティの transition の対象に指定する際の注意事項
- transition プロパティの対象に display プロパティを指定しても思った通りの挙動とならない場合が存在する。
  - http://bashalog.c-brains.jp/19/10/02-095448.php

### 要素を見えなくする設定について
- visibility: hidden; と opacity: 0 の違いは、visibility: hidden; を設定すると、要素が存在しなくなるためにボタンやリンクをクリックした時に発火するイベントが機能しなくなる。それに対し、opacity: 0; を設定すると、要素が見えなくなるだけでクリックするとイベントは発火する。
  - http://var.blog.jp/archives/51539053.html

### CSS で三角形を作るには
- 上向きの正三角形を作るには、border-left,right,bottom の border の太さの比を 1:1:√3 とし、border-bottom に色をつけその他は透明にする。

### だんだん色が薄くなる設定
background-image: linear-gradient(180deg, rgba(252, 252, 252, 0), rgba(252, 252, 252, 0.5) 30%, #fcfcfc);

## TODO
- ヘッダが一番前に来ていないので直す
- menu-open時バックグラウンドがおかしいので直す
- hero のレイアウトがデバイス毎にちょっと異なるので修正する
- 
