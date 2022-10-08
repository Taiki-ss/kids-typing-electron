import React, { useMemo } from 'react';

type Question = {
  jp: string;
  en: string;
};

const QUESTION_DATA: Question[] = [
  { jp: 'だいな', en: 'daina' },
  { jp: 'だいおういか', en: 'daiouika' },
  { jp: 'でっかー', en: 'dekka-' },
  { jp: 'ぐどん', en: 'gudonn' },
  { jp: 'ひらめ', en: 'hirame' },
  { jp: 'ひょうもんだこ', en: 'hyoumonndako' },
  { jp: 'いくら', en: 'ikura' },
  { jp: 'かまたくん', en: 'kamatakunn' },
  { jp: 'かのこいせえび', en: 'kanokoiseebi' },
  { jp: 'かれい', en: 'karei' },
  { jp: 'けんせい', en: 'kennsei' },
  { jp: 'こんぐ', en: 'konngu' },
  { jp: 'めかごもら', en: 'mekagomora' },
  { jp: 'むかんでんだー', en: 'mukadennda-' },
  { jp: 'おにだるまおこぜ', en: 'onidarumaokoze' },
  { jp: 'おじさん', en: 'ozisann' },
  { jp: 'せみえび', en: 'semiebi' },
  {
    jp: 'すべすべまんじゅうがに',
    en: 'subesubemannjuugani',
  },
  { jp: 'たいが', en: 'taiga' },
  { jp: 'てんぺらーせいじん', en: 'tennpera-seizinn' },
  { jp: 'てぃが', en: 'thiga' },
  { jp: 'ちびすけ', en: 'tibisuke' },
  { jp: 'ちんあなご', en: 'tinnanago' },
  { jp: 'とらいすくわっと', en: 'toraisukuwatto' },
  { jp: 'ついんてーる', en: 'tuinnte-ru' },
  { jp: 'うちわえび', en: 'utiwaebi' },
  { jp: 'ゆうり', en: 'yuuri' },
  { jp: 'ぞうりえび', en: 'zouriebi' },
  { jp: 'しんうるとらまん', en: 'sinnurutoramann' },
  { jp: 'がぼら', en: 'gabora' },
  { jp: 'うるとらまんぜっと', en: 'urutoramannzetto' },
  { jp: 'しんごじら', en: 'sinngozira' },
  { jp: 'れっどきんぐ', en: 'reddokinngu' },
  { jp: 'とりがー', en: 'toriga-' },
  { jp: 'きょうりゅう', en: 'kyouryuu' },
  { jp: 'どんぶらざーず', en: 'donnburaza-zu' },
  { jp: 'ごもら', en: 'gomora' },
  { jp: 'せぶんがー', en: 'sebunnga-' },
  { jp: 'ざらぶ', en: 'zarabu' },
  { jp: 'めふぃらす', en: 'mefirasu' },
  { jp: 'ちー', en: 'ti-' },
  { jp: 'こっち', en: 'kotti' },
  { jp: 'ねてるけんせい', en: 'neterukennsei' },
  { jp: 'かわいいゆうり', en: 'kawaiiyuuri' },
  { jp: 'くれないがい', en: 'kurenaigai' },
  { jp: 'じゃぐらすじゃぐらー', en: 'jagurasujagura-' },
  { jp: 'げねがーぐ', en: 'genega-gu' },
  { jp: 'すふぃあざうるす', en: 'sufiazaurusu' },
  { jp: 'のーば', en: 'no-ba' },
  { jp: 'まぐろぱずる', en: 'maguropazuru' },
  { jp: 'かにぱずる', en: 'kanipazuru' },
  { jp: 'がりがりくん', en: 'garigarikunn' },
  {
    jp: 'はいぱーぜっとんですさいず',
    en: 'haipa-zettonndesusaizu',
  },
  { jp: 'きめらべろす', en: 'kimeraberosu' },
  { jp: 'おーぶ', en: 'o-bu' },
  { jp: 'ひかきん', en: 'hikakinn' },
  { jp: 'らんぼるぎーに', en: 'rannborugi-ni' },
  { jp: 'ふぇらーり', en: 'fera-ri' },
];

const QuestionData = () => QUESTION_DATA[Math.floor(Math.random() * QUESTION_DATA.length)];

export default QuestionData;
