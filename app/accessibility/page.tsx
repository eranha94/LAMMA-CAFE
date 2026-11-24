import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר LAMMA Cafe ודרכים ליצירת קשר בנושא נגישות.",
};

// TODO (בעלי העסק): לעדכן כתובת ופרטי נגישות פיזית בבית הקפה כשיהיו זמינים.
const updated = "נובמבר 2026";

export default function AccessibilityPage() {
  return (
    <main className="a11y-page">
      <Link href="/" className="a11y-back">← חזרה לאתר</Link>
      <h1>הצהרת נגישות</h1>

      <p>
        ב־LAMMA Cafe חשוב לנו שכל אחד ואחת יוכלו להשתמש באתר בנוחות. אנחנו פועלים להנגיש את האתר
        לאנשים עם מוגבלות, ברוח תקנות שוויון זכויות לאנשים עם מוגבלות והתקן הישראלי 5568.
      </p>

      <h2>מה עשינו באתר</h2>
      <ul>
        <li>האתר בנוי בעברית ובכיווניות ימין־לשמאל, עם מבנה כותרות ברור.</li>
        <li>ניתן לנווט באתר ובתפריט באמצעות המקלדת בלבד.</li>
        <li>לתמונות בעלות תוכן יש טקסט חלופי; תמונות עיצוביות מסומנות כך שקוראי מסך ידלגו עליהן.</li>
        <li>האתר מכבד את הגדרת &quot;הפחתת תנועה&quot; של מערכת ההפעלה ומבטל אנימציות בהתאם.</li>
        <li>האתר מותאם לתצוגה במחשב, בטאבלט ובטלפון ותומך בהגדלת טקסט בדפדפן.</li>
        <li>לסרטון יש פקדי ניגון רגילים, והוא אינו מתנגן אוטומטית.</li>
      </ul>

      <h2>מגבלות ידועות</h2>
      <p>
        ייתכן שחלקים מסוימים באתר עדיין אינם נגישים במלואם. אנחנו ממשיכים לשפר את האתר, ונשמח לשמוע
        על כל קושי שנתקלתם בו.
      </p>

      <h2>יצירת קשר בנושא נגישות</h2>
      <p>
        נתקלתם בבעיה או שאתם צריכים מידע בפורמט אחר? אפשר לפנות אלינו בטלפון{" "}
        <a href="tel:+972524394885">052-439-4885</a> או ב־
        <a href="https://wa.me/972524394885" target="_blank" rel="noreferrer">WhatsApp</a>, ונחזור אליכם בהקדם.
      </p>

      <p className="a11y-updated">ההצהרה עודכנה לאחרונה: {updated}</p>

      <style>{`
        .a11y-page { max-width: 720px; margin: 0 auto; padding: 56px 24px 96px; line-height: 1.75; font-size: 17px; }
        .a11y-page h1 { font-size: clamp(32px, 6vw, 48px); margin: 28px 0 18px; }
        .a11y-page h2 { font-size: 22px; margin: 36px 0 10px; }
        .a11y-page ul { padding-inline-start: 22px; }
        .a11y-page li { margin-bottom: 6px; }
        .a11y-page a { text-decoration: underline; text-underline-offset: 3px; }
        .a11y-back { font-weight: 600; font-size: 15px; }
        .a11y-updated { margin-top: 40px; font-size: 14px; color: var(--clay); }
      `}</style>
    </main>
  );
}
