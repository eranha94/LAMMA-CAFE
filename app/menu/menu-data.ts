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
      { name: "קפה מאפה", price: size(26, 28) },
      { name: "אספרסו", price: shot(8, 10), image: unsplash("1559496417-e7f25cb247f3") },
      { name: "אמריקאנו", price: size(12, 14) },
      { name: "קפה שחור", price: size(10, 12) },
      { name: "קפוצ׳ינו", price: size(13, 15), image: unsplash("1761783768352-e7f42bfa9988") },
      { name: "מוקה", price: size(14, 16) },
      { name: "נס קפה", price: size(13, 15) },
      { name: "שוקו", price: size(14, 16), image: unsplash("1762411238451-b90dd1c74238") },
      { name: "אילן", price: one(13) },
      { name: "מקיאטו", price: shot(8, 10) },
      { name: "תה נענע", price: size(10, 12), image: unsplash("1591299089616-c9604047b1a6") },
      { name: "תה חליטות", price: one(15) },
      { name: "קנקן חליטות", price: one(38) },
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
      { name: "אוראיו", price: size(16, 18) },
      { name: "קרמל מלוח", price: size(15, 17) },
      { name: "פסטצ׳יו", price: size(15, 17) },
      { name: "צ׳אי", price: one(22) },
      { name: "סחלב", price: one(24) },
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
      { name: "קפה קר", price: size(16, 18) },
      { name: "אמריקאנו קר", price: size(14, 16) },
      { name: "שוקו קר", price: size(17, 19) },
      { name: "נס קפה קר", price: size(16, 18) },
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
      { name: "מאצ׳ה פירות יער", price: size(28, 30) },
      { name: "מאצ׳ה מנגו", price: size(28, 30) },
      { name: "אפוגטו", price: one(24), image: unsplash("1594631661960-34762327295a") },
      { name: "תה סאני", price: size(14, 16) },
      { name: "תה דובדובן שובב", price: size(14, 16) },
      { name: "צ׳אי מסאלה", price: size(16, 18) },
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
      { name: "אייס וניל", price: size(19, 22) },
      { name: "גרניטה פיקאן", price: one(27) },
      { name: "מיקס פירות", price: one(29) },
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
      { name: "טירמיסו", price: one(32) },
      { name: "שוקולד קראש", price: one(32) },
      { name: "לוטוס קרמל", price: one(32) },
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
      { name: "אננס", price: one(26) },
      { name: "מנגו", price: one(26) },
      { name: "תות", price: one(26) },
      { name: "רימון", price: one(26) },
      { name: "קיווי", price: one(26) },
      { name: "פסיפלורה", price: one(26) },
      { name: "אוכמניות", price: one(26) },
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
      { name: "תפוזים", price: jug(20, 46) },
      { name: "תפוגזר", price: jug(18, 46) },
      { name: "תפוחים", price: jug(20, 46) },
      { name: "תפוחגזר", price: one(21) },
      { name: "תפוח סלק", price: one(23), image: unsplash("1757597738356-11d378869593") },
      { name: "תפוח סלק וג׳נג׳ר", price: one(25) },
      { name: "גזר", price: one(19) },
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
      { name: "מים", price: one(7) },
      { name: "סודה", price: one(8) },
      { name: "XL", price: one(8) },
      { name: "XL TEN", price: one(8) },
      { name: "ספרייט", price: one(10) },
      { name: "קולה", price: one(10) },
      { name: "קולה זירו", price: one(10) },
      { name: "תות בננה", price: one(12) },
      { name: "ענבים", price: one(12) },
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
      { name: "שוקולד", price: one(18) },
      { name: "שקדים", price: one(18) },
      { name: "גלגל קוקיז", price: one(30) },
      { name: "גבינה מתוקה", price: one(18) },
      { name: "בורקס גבינה", price: one(17), image: unsplash("1617806501736-fc7cab7c05bf") },
      { name: "בורקס תפוח אדמה", price: one(17) },
      { name: "פולנטה", price: one(22) },
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
      { name: "פרירו רושה", price: one(23) },
      { name: "רד ולווט", price: one(23) },
      { name: "קלאסיק", price: one(23), image: unsplash("1499636136210-6f4ee915583e") },
      { name: "אמסטרדם", price: one(23) },
      { name: "קינדר", price: one(23) },
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
      { name: "רד ולווט", price: one(38) },
      { name: "סופלה", price: one(43), image: unsplash("1626125323072-bc20d2674d9e") },
      { name: "סן סבסטיאן", price: one(45) },
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
      { name: "מנגו קראנץ׳", price: one(40) },
      { name: "תות בננה קראנץ׳", price: one(40) },
      { name: "פירות יער קראנץ׳", price: one(40) },
      { name: "שקדים קראנץ׳", price: one(40) },
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
      { name: "גבינת פאקו", price: one(8) },
      { name: "רולדה קינדר", price: one(10) },
      { name: "הנדי סושי", price: one(10) },
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
      { name: "גלידה", price: one(7) },
      { name: "שוקולד בצד", price: one(3) },
    ],
  },
];

export const heroImage = unsplash("1541167760496-1628856ab772");

/** Sized, compressed Unsplash URL. Local images (starting with "/") are returned as-is. */
export function img(src: string, width: number) {
  if (src.startsWith("/")) return src;
  return `${src}?auto=format&fit=crop&w=${width}&q=72`;
}
