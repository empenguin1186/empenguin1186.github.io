# portfolio

## Tips

### display プロパティの transition の対象に指定する際の注意事項
- transition プロパティの対象に display プロパティを指定しても思った通りの挙動とならない場合が存在する。
  - http://bashalog.c-brains.jp/19/10/02-095448.php

### 要素を見えなくする設定について
- visibility: hidden; と opacity: 0 の違いは、visibility: hidden; を設定すると、要素が存在しなくなるためにボタンやリンクをクリックした時に発火するイベントが機能しなくなる。それに対し、opacity: 0; を設定すると、要素が見えなくなるだけでクリックするとイベントは発火する。
  - http://var.blog.jp/archives/51539053.html
