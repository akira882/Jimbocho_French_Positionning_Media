import { Restaurant, Persona } from './types';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'cadet',
    name: 'cadet',
    catchphrase: '生産者と繋がる、カウンターの「没入」体験',
    description: '「日本の風土」をテーマに、シェフ自ら産地を巡ることで実現した国産食材100%のフレンチ。L字カウンターを中心とした店内は、シェフの所作や食材のストーリーをBGMに、大切な人と肩を並べて語り合うための特等席。派手さよりも「本質」を共有したい夜に。',
    priceLevel: 'Dinner ￥12,000 ~',
    atmosphere: '洗練された隠れ家・シェフズカウンター',
    useCase: '勝負デート・本質を知る人との会食',
    imgUrl: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    isClient: true,
    features: ['国産食材100%の衝撃', 'シェフズカウンター', '静かな熱量'],
    reasonsToChoose: ['距離を縮めたい', '食材の背景を知りたい'],
    reasonsNotToChoose: ['大人数で騒ぎたい', 'テーブルで向かい合いたい'],
    detailedFeatures: [
      {
        title: "① ユニークな多国籍料理",
        description: "Cadetでは、伝統的なフレンチ料理と日本の食材が融合したユニークな多国籍料理を提供しています。\nシェフは、フランス料理の伝統的なレシピに日本の旬の食材を組み合わせることで、新しい味わいのマリアージュを創出。\nこれにより、cadetでは新感覚の料理を提供し、伝統と革新が見事に融合したフレンチ料理を楽しむことができます。",
        img: "" // TODO: Add image (e.g., "cadet-food-1.png")
      },
      {
        title: "② 旬の食材を活かす",
        description: "cadetの料理は、旬の食材を活かすことにこだわっていることが特徴です。\n季節ごとに変わる食材を最大限に活用し、その時期に最も美味しい味を引き出します。新鮮な食材の持ち味を生かした料理は、ゲストに深い満足感を提供します。",
        img: "" // TODO: Add image
      },
      {
        title: "③ ワインとのペアリング",
        description: "cadetでは、料理とワインのペアリングにこだわっているのも大きな特徴の1つ。\n店内に在籍するソムリエがその日の料理に合ったワインを厳選し、ゲストに最高のマリアージュを提供。料理とワインの組み合わせにより、新たな味覚の世界を探索することができます。",
        img: "" // TODO: Add image
      }
    ],
    courseInfo: "【DINNER】おまかせコース:6,000円～10,000円(税込)\n【DINNER】おまかせコース（＋ペアリング付き）:12,000円～16,000円(税込)\n※写真はペアリングコース料理の一例です。メニューは時期によって変更されます。",
    courseImg: "", // TODO: Add image for Course section
    atmosphereDetail: "cadetの店内は、洗練された雰囲気が漂う落ち着いた空間です。暖色系のインテリアと調和の取れた照明が、居心地の良さを演出しています。\n完全予約制なので落ち着いた雰囲気の中で食事を楽しめるところも大きな魅力の1つ。\nデートや接待など特別な日に最適です。居心地の良い空間と洗練された料理で、cadetは多くの美食家に愛されるレストランです。",
    atmosphereImg: "", // TODO: Add image for Atmosphere section
    basicInfo: {
      address: "東京都千代田区神田錦町3-22 テラススクエア 1F",
      access: "東京メトロ半蔵門線・都営三田線・都営新宿線 神保町駅から287m （神保町駅A9出口より徒歩2分）",
      hours: "LUNCH ／ 11:30～15:00（L.O.14:00）\nDINNER ／ 18:00～23:00（L.O.22:00）\n※土曜日と祝日のみ 18:00～22:00（L.O.19:00）",
      closingDay: "日曜日・月曜日 ※月曜日が祝日の場合は休み",
      seats: "30席",
      cards: "VISA , MASTER , AMEX , DINERS , JCB , その他"
    }
  },
  {
    id: 'garb_pintino',
    name: 'GARB pintino',
    catchphrase: '開放感と賑わいの、モダン・カジュアル',
    description: '天井高6mの圧倒的な開放感とテラス席を持つ、神保町でも稀有な大箱フレンチ。堅苦しさは一切なく、ワイン片手に会話が弾む「社交場」としての機能が高い。気心知れた仲間とのパーティや、緊張をほぐしたい初期のデートには最適解。',
    priceLevel: 'Dinner ￥6,000 ~ ￥8,000',
    atmosphere: '開放的・モダン・賑やか',
    useCase: '女子会・グループ・カジュアルデート',
    imgUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    isClient: false,
    features: ['天井高4m超の開放感', 'テラス席あり', 'パーティプラン充実'],
    reasonsToChoose: ['ワイワイ楽しみたい', '開放感が欲しい'],
    reasonsNotToChoose: ['静かに語り合いたい', 'しっとりとした情緒が欲しい'],
    detailedFeatures: [
      {
        title: "① カジュアルながらも本格的な料理",
        description: "GARB pintinoでは、カジュアルな雰囲気の中で本格的な料理を楽しむことができます。\nシェフはシンプルで美味しい料理を提供し、新鮮な食材を活かしたメニューが魅力です。カジュアルながらも、食事を通じて深い満足感を得ることができます。",
        img: "" // TODO: Add image
      },
      {
        title: "② 季節の食材を活用",
        description: "GARB pintinoの料理は、季節の食材を大切にしています。\nシェフはその時期に最も美味しい食材を厳選し、丁寧に調理。特に肉料理や魚料理は絶品で、食べるたびに新たな味わいを楽しむことができます。",
        img: "" // TODO: Add image
      }
    ],
    courseInfo: "DINNER COURSE: 6,000～10,000円(税込)\nGARBコース: 6,000円\nOption + 2,000 (120min) スパークリング付フリードリンク\n※コースは一例です",
    courseImg: "", // TODO: Add image
    atmosphereDetail: "GARB pintinoの店内は、開放的でモダンな雰囲気が漂っています。明るい照明とナチュラルなインテリアが、リラックスした雰囲気が特徴的です。\n友人や家族と食事を楽しむのにぴったりの空間になっています。\nカジュアルなディナーにぴったりのGARB pintinoでは、ソムリエが在籍しており、料理とワインのペアリングを提案しています。そのため、カジュアルながらも本格的なワイン体験を楽しめるのが嬉しいですね。",
    atmosphereImg: "", // TODO: Add image
    basicInfo: {
      address: "東京都千代田区神田錦町3-22 テラススクエア 2F",
      access: "東京メトロ半蔵門線・都営三田線・都営新宿線 神保町駅から287m（神保町駅A9出口より徒歩2分）",
      hours: "【Mon-Fri】LUNCH / 11:30～15:00（14:00 l.o.） DINNER / 17:30～23:00（22:00 l.o. drink 22:30 l.o.）\n【Sat】LUNCH / 11:30～15:00（14:00 l.o.）",
      closingDay: "日曜日",
      seats: "全96席(店内／86席、テラス／10席) ※分煙・ペット不可"
    }
  },
  {
    id: 'jimbocho_gokita',
    name: '神保町 五木田',
    catchphrase: '伝統と格式、大人のための正統派フレンチ',
    description: 'クラシックな技法に忠実な、繊細で美しいフレンチ。暖色系の照明が灯る落ち着いた店内は、記念日や接待、そして大人数での落ち着いた宴会に絶大な安心感をもたらす。ソムリエによるペアリングと、奇をてらわない実直な美味しさは、ゲストを選ばない「王道」の選択肢。',
    priceLevel: 'Dinner ￥7,000 ~ ￥18,000',
    atmosphere: 'クラシック・落ち着き・正統派',
    useCase: '接待・記念日・大人の宴会',
    imgUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    isClient: false,
    features: ['ソムリエ常駐', '大人数対応の個室感', 'クラシックな技法'],
    reasonsToChoose: ['絶対に外せない接待', 'フォーマルな宴会'],
    reasonsNotToChoose: ['もっとラフに楽しみたい', 'シェフとの距離感を詰めたい'],
    detailedFeatures: [
      {
        title: "① 繊細なフレンチ料理",
        description: "神保町 五木田の料理は、繊細で洗練されたフレンチが特徴です。\nシェフは伝統的なフレンチの技法を駆使し、美しい盛り付けと深い味わいを追求しています。食材の旨みを最大限に引き出し、ゲストに極上の味覚体験を提供します。",
        img: "" // TODO: Add image
      },
      {
        title: "② 季節の食材を活かす",
        description: "神保町 五木田では、季節の食材を大切にしています。シェフはその時期に最も美味しい食材を選び、丁寧に調理。\n季節ごとに変わるメニューには、旬の食材の味わいが存分に詰まっています。",
        img: "" // TODO: Add image
      }
    ],
    courseInfo: "7,000～18,000円(税込)",
    courseImg: "", // TODO: Add image
    atmosphereDetail: "神保町 五木田の店内は、落ち着いた雰囲気が漂うクラシックなレストランです。\n暖色系の照明と木の温かみが調和し、特別な日にふさわしい雰囲気を醸し出しています。大人数での宴会に最適な空間です。\n店内にはソムリエが在籍しており、料理とワインのペアリングをサポート。料理とワインの調和を楽しむ贅沢なひとときを提供します。",
    atmosphereImg: "", // TODO: Add image
    basicInfo: {
      address: "東京都千代田区西神田2-4-9 第二錦水ビル1F",
      access: "神保町駅A2出口より徒歩4分、JR中央/総武線 水道橋駅 西口 徒歩6分",
      hours: "17:30 - 23:30",
      closingDay: "月曜、月2回日曜(不定休、祝前日等変更あり)",
      dressCode: "スマートカジュアル※ビーチサンダル、短パンは入店お断り",
      seats: "不明"
    }
  }
];

export const TARGET_PERSONA: Persona = {
  name: "高橋 啓介 (Keisuke Takahashi)",
  age: 33,
  occupation: "経営コンサルタント",
  income: "年収 1,500万円",
  currentStatus: "3回目のデート。相手は「五木田」のような正統派も、「GARB」のような流行りも知っている女性。だからこそ、今回は「あえて」の選択で、自分の美意識（＝生産者へのリスペクトや、静かな空間選び）を伝えたい。",
  psychographics: {
    values: "TPOに合わせた最適解を選べる自分が好き。接待なら五木田、同僚とならGARBを選ぶが、口説きたい夜にはCadetを選ぶ。",
    fears: "「またこのパターンか」と思われること。TPOを外すこと（静かに話したいのにうるさい店、ラフに行きたいのに堅苦しい店）。",
    desires: "「神保町でフレンチ？」という意外性から入り、「こんな素敵な時間の過ごし方があるんだ」と感心させたい。"
  },
  behavior: {
    searchKeywords: [
      "神保町 フレンチ 比較",
      "神保町 デート ディナー",
      "神保町 接待 個室",
      "神保町 五木田 予約"
    ],
    webBrowsingHabits: [
      "TableCheck",
      "Google Maps (雰囲気確認)",
      "Retty (実名口コミ)"
    ]
  },
  scenario: "ユーザーはまず「神保町 フレンチ」で検索し、このページに辿り着く。そこで「誰と、どんな時間を過ごしたいか？」という問いかけに対し、自分の今の状況（3回目のデート、静かに話したい）を照らし合わせ、論理的帰結としてCadetを選択する。",
  matchReason: "Cadetが唯一無二なのは「カウンターでの没入感」である。五木田のテーブル席のような「対面緊張」もなく、GARBのような「喧騒」もない。二人の世界に浸るための最適解。"
};