# カード絵柄の差し替えについて

このフォルダに `{id}.png` という名前で画像を置くと、そのカードだけ自作SVGから
差し替えた画像に切り替わります（画像が無いカードは今まで通りSVGデザインのまま）。

推奨サイズ：縦長 200×340px 相当の比率（例: 600×1020pxなど）

## id とカードの対応表

| id | カード名 |
|----|----------|
| 0  | 愚者 THE FOOL |
| 1  | 魔術師 THE MAGICIAN |
| 2  | 女教皇 THE HIGH PRIESTESS |
| 3  | 女帝 THE EMPRESS |
| 4  | 皇帝 THE EMPEROR |
| 5  | 教皇 THE HIEROPHANT |
| 6  | 恋人 THE LOVERS |
| 7  | 戦車 THE CHARIOT |
| 8  | 力 STRENGTH |
| 9  | 隠者 THE HERMIT |
| 10 | 運命の輪 WHEEL OF FORTUNE |
| 11 | 正義 JUSTICE |
| 12 | 吊るされた男 THE HANGED MAN |
| 13 | 死神 DEATH |
| 14 | 節制 TEMPERANCE |
| 15 | 悪魔 THE DEVIL |
| 16 | 塔 THE TOWER |
| 17 | 星 THE STAR |
| 18 | 月 THE MOON |
| 19 | 太陽 THE SUN |
| 20 | 審判 JUDGEMENT |
| 21 | 世界 THE WORLD |

例：死神のカードだけ差し替えたい場合 → `13.png` をこのフォルダに追加するだけでOK。
png以外（jpg/webpなど）を使いたい場合は `components/TarotCardArt.tsx` 内の
`CUSTOM_IMAGE_EXT` を変更してください。
