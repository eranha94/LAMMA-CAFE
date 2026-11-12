// LAMMA Cafe — digital menu data.
// To update a price or add a dish, edit this file only. The page renders from it.
//
// Images are illustrative (Unsplash) until real photos of the dishes are added.
// To use your own photo: put it in /public/menu/ and set image: "/menu/your-photo.jpg".

export type Price =
  | { kind: "single"; value: number }
  | { kind: "pair"; labels: [string, string]; values: [number, number] };

export type MenuItem = {
  name: string;
  price: Price;
  image?: string;
  /** Packshot on a white background (cans, bottles): shown whole, not cropped. */
  product?: boolean;
  note?: string;
};

export type MenuGroup = "hot" | "cold" | "sweet";

export type MenuCategory = {
  id: string;
  group: MenuGroup;
  title: string;
  english: string;
  subtitle: string;
  image: string;
  items: MenuItem[];
  footnote?: string;
};

export const groups: { id: MenuGroup; label: string }[] = [
  { id: "hot", label: "חם" },
  { id: "cold", label: "קר ומרענן" },
  { id: "sweet", label: "מתוק ומאפים" },
];

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;
// Official product photos (manufacturer packshots, via Shufersal's image CDN).
const packshot = (file: string) =>
  `https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto,w_600/v1551800922/prod/product_images/products_large/${file}`;

const one = (value: number): Price => ({ kind: "single", value });
const size = (small: number, large: number): Price => ({ kind: "pair", labels: ["קטן", "גדול"], values: [small, large] });
const shot = (short: number, long: number): Price => ({ kind: "pair", labels: ["קצר", "ארוך"], values: [short, long] });
const jug = (cup: number, pitcher: number): Price => ({ kind: "pair", labels: ["כוס", "קנקן"], values: [cup, pitcher] });

export const menu: MenuCategory[] = [
  {
    id: "hot-drinks",
    group: "hot",
    title: "קפה ומשקאות חמים",
    english: "HOT COFFEE",
    subtitle: "רגע חם להתחיל איתו את היום",
    image: unsplash("1593443320739-77f74939d0da"),
    items: [
      { name: "קפה מאפה", price: size(26, 28), image: unsplash("1761210719318-3c2164dfa980") },
      { name: "אספרסו", price: shot(8, 10), image: unsplash("1559496417-e7f25cb247f3") },
      { name: "אמריקאנו", price: size(12, 14), image: unsplash("1551030173-122aabc4489c") },
      { name: "קפה שחור", price: size(10, 12), image: unsplash("1664398346444-f6feafaa88b6") },
      { name: "קפוצ׳ינו", price: size(13, 15), image: unsplash("1761783768352-e7f42bfa9988") },
      { name: "מוקה", price: size(14, 16), image: unsplash("1618576230663-9714aecfb99a") },
      { name: "נס קפה", price: size(13, 15), image: unsplash("1614767866551-fe60a95d0d19") },
      { name: "שוקו", price: size(14, 16), image: unsplash("1762411238451-b90dd1c74238") },
      { name: "אילן", price: one(13), image: unsplash("1529892485617-25f63cd7b1e9") },
      { name: "מקיאטו", price: shot(8, 10), image: unsplash("1485808191679-5f86510681a2") },
      { name: "תה נענע", price: size(10, 12), image: unsplash("1591299089616-c9604047b1a6") },
      { name: "תה חליטות", price: one(15), image: unsplash("1571934811356-5cc061b6821f") },
      { name: "קנקן חליטות", price: one(38), image: unsplash("1762328497064-2c0ac87a1229") },
    ],
    footnote: "ניתן להחליף לחלב שיבולת שועל / סויה / שקדים בתוספת 2 ₪",
  },
  {
    id: "special-hot",
    group: "hot",
    title: "משקאות חמים מיוחדים",
    english: "SIGNATURE HOT",
    subtitle: "טעמים שמזמינים לעצור עוד רגע",
    image: unsplash("1570968915860-54d5c301fa9f"),
    items: [
      { name: "קרמל מלוח", price: size(15, 17), image: unsplash("1772519597624-cd5284f318c4") },
      { name: "פסטצ׳יו", price: size(15, 17), image: unsplash("1729869257061-dec08b3747bd") },
      { name: "צ׳אי", price: one(22), image: unsplash("1693302050215-66ae33076745") },
      { name: "סחלב", price: one(24), image: unsplash("1567041460039-3df7d3d6d440") },
    ],
  },
  {
    id: "cold-drinks",
    group: "cold",
    title: "קפה ומשקאות קרים",
    english: "ICED COFFEE",
    subtitle: "קרים מרעננים ומדוייקים לכל שעה",
    image: unsplash("1461023058943-07fcbe16d735"),
    items: [
      { name: "קפה קר", price: size(16, 18), image: unsplash("1517701550927-30cf4ba1dba5") },
      { name: "אמריקאנו קר", price: size(14, 16), image: unsplash("1581996323441-538096e854b9") },
      { name: "שוקו קר", price: size(17, 19), image: unsplash("1661529548674-8dae0330fe04") },
      { name: "נס קפה קר", price: size(16, 18), image: unsplash("1687467110633-8e90cecd042b") },
    ],
  },
  {
    id: "special-cold",
    group: "cold",
    title: "משקאות קרים מיוחדים",
    english: "SIGNATURE COLD",
    subtitle: "רעננות עם נגיעה מיוחדת",
    image: unsplash("1765162007488-077bb985ae4c"),
    items: [
      { name: "מאצ׳ה", price: size(26, 28), image: unsplash("1515823064-d6e0c04616a7") },
      { name: "מאצ׳ה פירות יער", price: size(28, 30), image: unsplash("1749104028327-a33087ea4f47") },
      { name: "מאצ׳ה מנגו", price: size(28, 30), image: unsplash("1623123093799-70a72826e167") },
      { name: "אפוגטו", price: one(24), image: unsplash("1594631661960-34762327295a") },
      { name: "תה סאני", price: size(14, 16), image: unsplash("1762883469122-c15463bbce28") },
      { name: "תה דובדובן שובב", price: size(14, 16), image: unsplash("1468465236047-6aac20937e92") },
      { name: "צ׳אי מסאלה", price: size(16, 18), image: unsplash("1604959807242-9eb8fd0b5bfa") },
    ],
    footnote: "כדורי בובה לתה קר בתוספת 3 ₪",
  },
  {
    id: "ices",
    group: "cold",
    title: "אייסים",
    english: "ICE BLENDS",
    subtitle: "פינוק קר במרקם מושלם",
    image: unsplash("1637178035222-a08f2d4dd1a3"),
    items: [
      { name: "אייס קפה", price: size(19, 22), image: unsplash("1781003925936-29fd97bbefa5") },
      { name: "אייס וניל", price: size(19, 22), image: unsplash("1629386133133-5e639cf8d388") },
      { name: "גרניטה פיקאן", price: one(27), image: unsplash("1728777187058-9b68eb1ff2d0") },
      { name: "מיקס פירות", price: one(29), image: unsplash("1772661515640-0f205cbf6796") },
      { name: "לימונענע גרוס", price: one(21), image: unsplash("1774857244194-b2c66ac93e43") },
    ],
  },
  {
    id: "milkshakes",
    group: "cold",
    title: "מילקשייקים",
    english: "MILKSHAKES",
    subtitle: "מתוק עשיר ומפנק",
    image: unsplash("1553787499-6f9133860278"),
    items: [
      { name: "טירמיסו", price: one(32), image: unsplash("1619158403521-ed9795026d47") },
      { name: "שוקולד קראש", price: one(32), image: unsplash("1577805947697-89e18249d767") },
      { name: "לוטוס קרמל", price: one(32), image: unsplash("1653122025451-ec76a73f8a08") },
      { name: "מילקשייק LAMMA", price: one(35), image: unsplash("1572490122747-3968b75cc699"), note: "הסיגנצ׳ר של הבית" },
    ],
  },
  {
    id: "mojito",
    group: "cold",
    title: "מוחיטו",
    english: "MOJITO",
    subtitle: "רעננות בכל לגימה",
    image: unsplash("1775717427643-2b0fc39a81f8"),
    items: [
      { name: "קלאסי", price: one(26), image: unsplash("1653542772393-71ffa417b1c4") },
      { name: "אננס", price: one(26), image: unsplash("1607644536940-6c300b5784c5") },
      { name: "מנגו", price: one(26), image: unsplash("1546173159-315724a31696") },
      { name: "תות", price: one(26), image: unsplash("1662550577541-5e8f192e6514") },
      { name: "רימון", price: one(26), image: unsplash("1602860637860-fa3d04533a07") },
      { name: "קיווי", price: one(26), image: unsplash("1792929421390-7410ee9644b4") },
      { name: "פסיפלורה", price: one(26), image: unsplash("1677513643430-01b710bec296") },
      { name: "אוכמניות", price: one(26), image: unsplash("1530816878870-4f4fe65f5946") },
    ],
    footnote: "טעם רביעי בתוספת 3 ₪",
  },
  {
    id: "juices",
    group: "cold",
    title: "סחוטים",
    english: "FRESH JUICE",
    subtitle: "טרי טבעי מרענן",
    image: unsplash("1600271886742-f049cd451bba"),
    items: [
      { name: "תפוזים", price: jug(20, 46), image: unsplash("1697399075538-1087356c81d8") },
      { name: "תפוגזר", price: jug(20, 46), image: unsplash("1618046364546-81e9d03d39a6") },
      { name: "תפוחים", price: jug(20, 46), image: unsplash("1605199910378-edb0c0709ab4") },
      { name: "תפוחגזר", price: one(21), image: unsplash("1628961915805-4c92c885ce61") },
      { name: "תפוח סלק", price: one(23), image: unsplash("1757597738356-11d378869593") },
      { name: "תפוח סלק וג׳נג׳ר", price: one(25), image: unsplash("1500291161618-747dee2ab16c") },
      { name: "גזר", price: one(18), image: unsplash("1528556860752-2a6a19a285a3") },
    ],
  },
  {
    id: "soft-drinks",
    group: "cold",
    title: "משקאות קלים",
    english: "SOFT DRINKS",
    subtitle: "משהו קטן ליד הרגע שלכם",
    image: unsplash("1629654613528-5d0a2e4166de"),
    items: [
      { name: "מים", price: one(7), image: packshot("PXR22_L_P_2331490_1.png"), product: true },
      { name: "סודה", price: one(8), image: packshot("WFQ68_L_P_7290017888729_1.png"), product: true },
      { name: "XL", price: one(8), image: packshot("EKJ44_L_P_5906485301012_1.png"), product: true },
      { name: "XL TEN", price: one(8), image: packshot("AKY48_L_P_5902198160403_1.png"), product: true },
      { name: "ספרייט", price: one(10), image: packshot("XGQ32_L_P_7290110110703_1.png"), product: true },
      { name: "קולה", price: one(10), image: packshot("YFR48_L_P_7290011017866_1.png"), product: true },
      { name: "קולה זירו", price: one(10), image: packshot("YFY46_L_P_7290011017873_1.png"), product: true },
      { name: "תות בננה", price: one(12), image: packshot("YSI26_L_P_1247723_1.png"), product: true },
      { name: "ענבים", price: one(12), image: packshot("VOV54_L_P_7290019153764_1.png"), product: true },
    ],
  },
  {
    id: "pastries",
    group: "sweet",
    title: "קרואסונים ומאפים",
    english: "BAKERY",
    subtitle: "נאפים מדי יום, מושלמים לצד הקפה",
    image: unsplash("1691480162735-9b91238080f6"),
    items: [
      { name: "חמאה", price: one(18), image: unsplash("1623334044303-241021148842") },
      { name: "שוקולד", price: one(18), image: unsplash("1613929231151-d7571591259e") },
      { name: "שקדים", price: one(18), image: unsplash("1625425404751-19b16c027511") },
      { name: "גלגל קוקיז", price: one(30), image: unsplash("1764281469526-e1c378515e6f") },
      { name: "גבינה מתוקה", price: one(18), image: unsplash("1591538001662-0d5a25234305") },
      { name: "בורקס גבינה", price: one(17), image: unsplash("1617806501736-fc7cab7c05bf") },
      { name: "בורקס תפוח אדמה", price: one(17), image: unsplash("1785884040273-345673bee948") },
      { name: "פולנטה", price: one(22), image: unsplash("1783286854752-1c7dfbaa845c") },
    ],
  },
  {
    id: "cookies",
    group: "sweet",
    title: "קוקיז",
    english: "COOKIES",
    subtitle: "ביס קטן שמרגיש כמו בית",
    image: unsplash("1558961363-fa8fdf82db35"),
    items: [
      { name: "פרירו רושה", price: one(23), image: unsplash("1590080874088-eec64895b423") },
      { name: "רד ולווט", price: one(23), image: unsplash("1673412810103-27c233f77da6") },
      { name: "קלאסיק", price: one(23), image: unsplash("1499636136210-6f4ee915583e") },
      { name: "אמסטרדם", price: one(23), image: unsplash("1634188023615-7e08901193b6") },
      { name: "קינדר", price: one(23), image: unsplash("1619149651177-b09092806f1a") },
    ],
  },
  {
    id: "desserts",
    group: "sweet",
    title: "קינוחים",
    english: "DESSERTS",
    subtitle: "יש רגעים שחייבים להסתיים במתוק",
    image: unsplash("1617305855058-336d24456869"),
    items: [
      { name: "רד ולווט", price: one(38), image: unsplash("1779885580469-28385974ca80") },
      { name: "סופלה", price: one(43), image: unsplash("1626125323072-bc20d2674d9e") },
      { name: "סן סבסטיאן", price: one(45), image: unsplash("1635327173758-85badf17f995"), note: "תוספת שוקולד +2 ₪ · תוספת פיסטוק +2 ₪" },
    ],
  },
  {
    id: "crunch",
    group: "sweet",
    title: "קינוחים מיוחדים",
    english: "SIGNATURE CRUNCH",
    subtitle: "הקראנץ׳ של LAMMA",
    image: unsplash("1639744211487-b27e3551b07c"),
    items: [
      { name: "מנגו קראנץ׳", price: one(40), image: unsplash("1688458297155-228a3b1e5b49") },
      { name: "תות בננה קראנץ׳", price: one(40), image: unsplash("1611293388250-580b08c4a145") },
      { name: "פירות יער קראנץ׳", price: one(40), image: unsplash("1556048029-9c5edf1aa695") },
      { name: "שקדים קראנץ׳", price: one(40), image: unsplash("1569775683473-c534979f35a9") },
      { name: "טירמיסו קראנץ׳", price: one(40), image: unsplash("1766232333746-b0a2697d6d0d") },
    ],
  },
  {
    id: "biscuits",
    group: "sweet",
    title: "עוגיות",
    english: "BISCUITS",
    subtitle: "מתוק ליד הקפה",
    image: unsplash("1595397351604-cf490cc38bf1"),
    items: [
      { name: "גבינת פאקו", price: one(8), image: unsplash("1584126467120-b4e355b17374") },
      { name: "רולדה קינדר", price: one(10), image: unsplash("1772469425825-b1b5309760d4") },
      { name: "הנדי סושי", price: one(10), image: unsplash("1579551650975-a46e5988d09e") },
    ],
  },
  {
    id: "extras",
    group: "sweet",
    title: "תוספות",
    english: "EXTRAS",
    subtitle: "להתאים את הטעם בדיוק אליכם",
    image: unsplash("1497034825429-c343d7c6a68f"),
    items: [
      { name: "גלידה", price: one(7), image: unsplash("1562790879-dfde82829db0") },
      { name: "שוקולד בצד", price: one(3), image: unsplash("1623660053975-cf75a8be0908") },
    ],
  },
];

export const heroImage = unsplash("1541167760496-1628856ab772");

/** Sized, compressed Unsplash URL. Local images (starting with "/") are returned as-is. */
export function img(src: string, width: number) {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  return `${src}?auto=format&fit=crop&w=${width}&q=72`;
}
