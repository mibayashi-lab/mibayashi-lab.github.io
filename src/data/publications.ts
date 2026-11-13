export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'journal' | 'international-conference';
  link?: string;
  linkLabel?: string;
};

export const publications: Publication[] = [
  {
    title: 'Japanese Handwriting Generation Based on Human Preference Feedback Using Direct Preference Optimization',
    authors: 'Wakana Kuwata, Ryota Mibayashi, Tani Masanori, Hiroaki Ohshima',
    venue: 'Proceedings of the 13th International Conference on Behavioural and Social Computing (BESC 2026), pp. 344–360',
    year: 2026,
    type: 'international-conference',
    link: 'https://link.springer.com/chapter/10.1007/978-981-92-6910-5_20',
    linkLabel: 'Springer',
  },
  {
    title: 'Evaluating the Robustness of Japanese LLMs to IME-Related and Typographical Errors',
    authors: 'Ryota Mibayashi, Hiroaki Ohshima',
    venue: 'Proceedings of the 13th International Conference on Behavioural and Social Computing (BESC 2026), pp. 90–107',
    year: 2026,
    type: 'international-conference',
    link: 'https://link.springer.com/chapter/10.1007/978-981-92-6913-6_6',
    linkLabel: 'Springer',
  },
  {
    title: 'Analyzing Atypical Local Features in Museum Artifacts using Generative Image Inpainting',
    authors: 'Maho Kinoshita, Wakana Kuwata, Ryota Mibayashi, Hiroaki Ohshima',
    venue: 'Proceedings of the 13th International Conference on Behavioural and Social Computing (BESC 2026), pp. 58–76',
    year: 2026,
    type: 'international-conference',
    link: 'https://link.springer.com/chapter/10.1007/978-981-92-6913-6_4',
    linkLabel: 'Springer',
  },
  {
    title: 'Supporting Perspective Acquisition and Opinion Formation on Societal Issues through AI-Generated Japanese Rap Battle Debates',
    authors: 'Ryota Mibayashi, Toru Urakawa, Dai Takanashi, Kanata Yamagishi, Tomoya Morohoshi, Ryuho Sekikawa, Yasuhiko Nishimura, Yuta Takeuchi, Hideaki Tamori, Takehiro Yamamoto, Hiroaki Ohshima',
    venue: 'Proceedings of the IEEE International Conference on Teaching, Assessment, and Learning for Engineering (TALE 2026)',
    year: 2026,
    type: 'international-conference',
    link: 'https://researchmap.jp/ryotamibayashi/published_papers/55107033',
    linkLabel: 'researchmap',
  },
  {
    title: 'Design and Prototyping of a TPACK Visualization and Reflection-Support Tool Integrating Pre-, In-, and Post-Class Data',
    authors: 'HaiChen Wang, Makiko Oyama, Ryota Mibayashi, Hidenari Kiyomitsu',
    venue: 'Proceedings of the IEEE International Conference on Teaching, Assessment, and Learning for Engineering (TALE 2026)',
    year: 2026,
    type: 'international-conference',
    link: 'https://researchmap.jp/ryotamibayashi/published_papers/55106338',
    linkLabel: 'researchmap',
  },
  {
    title: 'Output Format Bias in Japanese LLMs: A Study on Kanji Reading Prediction',
    authors: 'Ryota Mibayashi',
    venue: 'Proceedings of the 20th International Congress on Advanced Applied Informatics (IIAI-AAI 2026), pp. 246–249',
    year: 2026,
    type: 'international-conference',
    link: 'https://researchmap.jp/ryotamibayashi/published_papers/53701403',
    linkLabel: 'researchmap',
  },
  {
    title: 'モーラの類似性とトークンの生成確率を考慮した単語辞書検索に依存しない日本語ライム生成',
    authors: '三林亮太, 山本岳洋, 大島裕明',
    venue: '情報処理学会論文誌：データベース（TOD）19(3), pp. 1–15',
    year: 2026,
    type: 'journal',
    link: 'https://researchmap.jp/ryotamibayashi/published_papers/53365481',
    linkLabel: 'researchmap',
  },
  {
    title: '日本語手書き文字生成モデルの提案と自動評価による高品質文字選択',
    authors: '桑田若菜, 三林亮太, 谷雅德, 大島裕明',
    venue: '情報処理学会論文誌：データベース（TOD）19(2), pp. 27–40',
    year: 2026,
    type: 'journal',
    link: 'https://researchmap.jp/ryotamibayashi/published_papers/51989074',
    linkLabel: 'researchmap',
  },
  {
    title: 'Japanese Rhyme Generation Based on Mora Similarity and Generation Probability',
    authors: 'Ryota Mibayashi, Takehiro Yamamoto, Hiroaki Ohshima',
    venue: 'Proceedings of the 27th International Conference on Information Integration and Web Intelligence (iiWAS 2025)',
    year: 2025,
    type: 'international-conference',
    link: 'https://dblp.org/rec/conf/iiwas/MibayashiYO25',
    linkLabel: 'DBLP',
  },
];

export const publicationGroups = [
  { key: 'journal', title: '学術論文（査読あり）' },
  { key: 'international-conference', title: '国際会議録（査読あり）' },
] as const;
