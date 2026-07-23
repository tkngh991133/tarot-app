export type CardMeaning = {
  id: number;
  nameJa: string;
  nameEn: string;
  icon: string; // corresponds to icon key in TarotCardArt
  uprightKeywords: string[];
  reversedKeywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
};

export const MAJOR_ARCANA: CardMeaning[] = [
  {
    id: 0,
    nameJa: "愚者",
    nameEn: "THE FOOL",
    icon: "fool",
    uprightKeywords: ["自由", "始まり", "冒険心"],
    reversedKeywords: ["無謀", "迷走", "準備不足"],
    uprightMeaning:
      "何にも縛られない自由な一歩。計算より直感を信じて踏み出すべき時。新しい道の始まりを示す。",
    reversedMeaning:
      "勢い任せの行動が空回りしやすい状態。準備不足や見切り発車に注意が必要な時。",
  },
  {
    id: 1,
    nameJa: "魔術師",
    nameEn: "THE MAGICIAN",
    icon: "magician",
    uprightKeywords: ["創造力", "才能", "始動"],
    reversedKeywords: ["空回り", "詐術", "力不足"],
    uprightMeaning:
      "持てる力と道具はすべて揃っている。あとは意志を持って動き出すだけという状態。",
    reversedMeaning:
      "能力はあるのに使い方を誤っている、あるいは口先だけになっている状態。",
  },
  {
    id: 2,
    nameJa: "女教皇",
    nameEn: "THE HIGH PRIESTESS",
    icon: "priestess",
    uprightKeywords: ["直感", "静けさ", "知性"],
    reversedKeywords: ["神経質", "秘密", "独りよがり"],
    uprightMeaning:
      "表面的な情報より、静かな直感が正しい答えを教えてくれる時。冷静さが武器になる。",
    reversedMeaning:
      "感情を抑えすぎて孤立したり、大事な情報を隠しすぎている状態。",
  },
  {
    id: 3,
    nameJa: "女帝",
    nameEn: "THE EMPRESS",
    icon: "empress",
    uprightKeywords: ["豊かさ", "包容力", "成長"],
    reversedKeywords: ["過保護", "浪費", "停滞"],
    uprightMeaning:
      "努力が実を結び豊かさが広がっていく時。育てる姿勢が実りにつながる。",
    reversedMeaning:
      "与えすぎ・甘やかしすぎによる停滞。リソースの使い方を見直す時期。",
  },
  {
    id: 4,
    nameJa: "皇帝",
    nameEn: "THE EMPEROR",
    icon: "emperor",
    uprightKeywords: ["統率力", "安定", "責任"],
    reversedKeywords: ["独善", "頑固", "支配"],
    uprightMeaning:
      "揺るがない意志と秩序で物事を進める力がある時。責任を引き受けることで信頼を得る。",
    reversedMeaning:
      "支配欲や頑固さが周囲との摩擦を生んでいる状態。柔軟さが必要な時。",
  },
  {
    id: 5,
    nameJa: "教皇",
    nameEn: "THE HIEROPHANT",
    icon: "hierophant",
    uprightKeywords: ["伝統", "助言", "信頼"],
    reversedKeywords: ["形式主義", "反発", "独断"],
    uprightMeaning:
      "経験者からの助言や、これまでのやり方が力になる時。信頼できる型に従う安心感。",
    reversedMeaning:
      "既存のルールに縛られすぎている、または権威への反発心が強まっている状態。",
  },
  {
    id: 6,
    nameJa: "恋人",
    nameEn: "THE LOVERS",
    icon: "lovers",
    uprightKeywords: ["選択", "調和", "共鳴"],
    reversedKeywords: ["すれ違い", "優柔不断", "不一致"],
    uprightMeaning:
      "心から納得できる選択ができる時。相手や物事との価値観の一致が鍵。",
    reversedMeaning:
      "選択に迷い続けている、あるいは価値観のずれが表面化している状態。",
  },
  {
    id: 7,
    nameJa: "戦車",
    nameEn: "THE CHARIOT",
    icon: "chariot",
    uprightKeywords: ["前進", "勝利", "推進力"],
    reversedKeywords: ["暴走", "方向喪失", "空転"],
    uprightMeaning:
      "強い意志で目標に向かって突き進める時。多少の障害も勢いで乗り越えられる。",
    reversedMeaning:
      "力任せの行動が方向性を見失わせている状態。一度立ち止まる必要がある。",
  },
  {
    id: 8,
    nameJa: "力",
    nameEn: "STRENGTH",
    icon: "strength",
    uprightKeywords: ["内なる強さ", "忍耐", "包容"],
    reversedKeywords: ["自信喪失", "感情的", "無力感"],
    uprightMeaning:
      "力ずくではなく、穏やかな強さで物事を制していける時。忍耐が結果を生む。",
    reversedMeaning:
      "自信を失い、感情に振り回されやすくなっている状態。",
  },
  {
    id: 9,
    nameJa: "隠者",
    nameEn: "THE HERMIT",
    icon: "hermit",
    uprightKeywords: ["内省", "探求", "静観"],
    reversedKeywords: ["孤立", "頑迷", "停滞"],
    uprightMeaning:
      "一人で立ち止まり内側を見つめることで、本当に必要な答えが見えてくる時。",
    reversedMeaning:
      "内にこもりすぎて孤立している、視野が狭くなっている状態。",
  },
  {
    id: 10,
    nameJa: "運命の輪",
    nameEn: "WHEEL OF FORTUNE",
    icon: "wheel",
    uprightKeywords: ["転機", "好機", "巡り合わせ"],
    reversedKeywords: ["停滞", "悪循環", "逆風"],
    uprightMeaning:
      "潮目が変わり、状況が良い方向へ動き出すタイミング。流れに乗ることが大切。",
    reversedMeaning:
      "望まない方向へ状況が転がっている、あるいは変化を止めたい心理状態。",
  },
  {
    id: 11,
    nameJa: "正義",
    nameEn: "JUSTICE",
    icon: "justice",
    uprightKeywords: ["公正", "均衡", "決断"],
    reversedKeywords: ["不公平", "偏り", "先延ばし"],
    uprightMeaning:
      "冷静で公正な判断が求められ、また正しく評価される時。バランス感覚が鍵。",
    reversedMeaning:
      "判断が偏っている、あるいは正当な評価がなされていない状態。",
  },
  {
    id: 12,
    nameJa: "吊るされた男",
    nameEn: "THE HANGED MAN",
    icon: "hanged",
    uprightKeywords: ["忍耐", "視点転換", "犠牲"],
    reversedKeywords: ["徒労", "停滞", "抵抗"],
    uprightMeaning:
      "今は動けない、あるいはあえて動かない時期。視点を変えることで見えるものがある。",
    reversedMeaning:
      "耐えているつもりが単なる徒労になっている状態。抜け出す工夫が必要。",
  },
  {
    id: 13,
    nameJa: "死神",
    nameEn: "DEATH",
    icon: "death",
    uprightKeywords: ["終わり", "転換", "再生"],
    reversedKeywords: ["執着", "先延ばし", "停滞"],
    uprightMeaning:
      "ひとつの区切りを迎え、次の段階へ進むタイミング。終わりは新しい形の始まり。",
    reversedMeaning:
      "終わらせるべきものへの執着が、次の展開を妨げている状態。",
  },
  {
    id: 14,
    nameJa: "節制",
    nameEn: "TEMPERANCE",
    icon: "temperance",
    uprightKeywords: ["調和", "中庸", "融合"],
    reversedKeywords: ["不調和", "過不足", "浪費"],
    uprightMeaning:
      "異なる要素をうまく組み合わせ、無理のないバランスを保てている時。",
    reversedMeaning:
      "何かが過剰、あるいは不足していてバランスが崩れている状態。",
  },
  {
    id: 15,
    nameJa: "悪魔",
    nameEn: "THE DEVIL",
    icon: "devil",
    uprightKeywords: ["執着", "依存", "誘惑"],
    reversedKeywords: ["解放", "気づき", "脱却"],
    uprightMeaning:
      "居心地は悪くないが抜け出しにくい依存状態。自覚があるかどうかが分かれ目。",
    reversedMeaning:
      "縛られていたものから抜け出すきっかけをつかみ始めている状態。",
  },
  {
    id: 16,
    nameJa: "塔",
    nameEn: "THE TOWER",
    icon: "tower",
    uprightKeywords: ["崩壊", "衝撃", "突発的変化"],
    reversedKeywords: ["予兆", "回避", "小さな崩れ"],
    uprightMeaning:
      "築いてきた前提が急に崩れる、想定外の出来事が起きる時。ただし壊れた後には新しい土台ができる。",
    reversedMeaning:
      "大きな崩壊は免れているが、綻びの予兆がすでに出ている状態。",
  },
  {
    id: 17,
    nameJa: "星",
    nameEn: "THE STAR",
    icon: "star",
    uprightKeywords: ["希望", "癒し", "理想"],
    reversedKeywords: ["理想倒れ", "自信喪失", "焦り"],
    uprightMeaning:
      "混乱の後に訪れる静かな希望。理想に向かって落ち着いて歩める時期。",
    reversedMeaning:
      "希望が漠然としすぎて手応えが持てない、自信を失いかけている状態。",
  },
  {
    id: 18,
    nameJa: "月",
    nameEn: "THE MOON",
    icon: "moon",
    uprightKeywords: ["不安", "曖昧", "潜在意識"],
    reversedKeywords: ["誤解の解消", "不安の減少", "真実が見える"],
    uprightMeaning:
      "先行きがはっきり見えず、不安や思い込みに惑わされやすい時期。",
    reversedMeaning:
      "霧が晴れるように、これまで見えなかった真実が明らかになり始める状態。",
  },
  {
    id: 19,
    nameJa: "太陽",
    nameEn: "THE SUN",
    icon: "sun",
    uprightKeywords: ["成功", "喜び", "活力"],
    reversedKeywords: ["過信", "一時的な曇り", "空回り"],
    uprightMeaning:
      "努力の成果が誰の目にも明らかな形で表れる、素直に喜べる時期。",
    reversedMeaning:
      "本来の勢いが一時的に鈍っている、もしくは自信過剰になっている状態。",
  },
  {
    id: 20,
    nameJa: "審判",
    nameEn: "JUDGEMENT",
    icon: "judgement",
    uprightKeywords: ["再生", "覚醒", "決断の時"],
    reversedKeywords: ["先送り", "過去への未練", "自己否定"],
    uprightMeaning:
      "過去の経験すべてを踏まえて、新しい段階へ進む決断を下すタイミング。",
    reversedMeaning:
      "過去への未練や後悔が、前に進む決断を鈍らせている状態。",
  },
  {
    id: 21,
    nameJa: "世界",
    nameEn: "THE WORLD",
    icon: "world",
    uprightKeywords: ["完成", "達成", "統合"],
    reversedKeywords: ["未完成", "中途半端", "足踏み"],
    uprightMeaning:
      "ひとつの物語がきれいな形で完結し、次の舞台へつながっていく時期。",
    reversedMeaning:
      "あと一歩のところで完結できていない、詰めの甘さが残っている状態。",
  },
];

export function drawThreeCards(): {
  card: CardMeaning;
  reversed: boolean;
}[] {
  const shuffled = [...MAJOR_ARCANA].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, 3);
  return picked.map((card) => ({
    card,
    reversed: Math.random() < 0.5,
  }));
}
