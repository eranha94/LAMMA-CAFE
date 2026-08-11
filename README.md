# LAMMA Cafe — Premium Website

אתר תדמית מלא ל־LAMMA Cafe, בנוי עם Next.js 16, React 19 ו־TypeScript.

## מה כלול

- עיצוב פרימיום מלא בעברית וב־RTL.
- ערכת הלוגו הווקטורית משולבת ב־Header, ב־Hero וב־Footer.
- Favicon, Apple Touch Icon ואייקוני PWA.
- אנימציות כניסה, תנועה עדינה, אפקטי עומק וגרעיניות.
- מצב פתוח/סגור בזמן אמת לפי שעון ישראל.
- סרטון הסיפור של LAMMA עם תמונת פתיחה מותאמת.
- קודי QR לתפריט ולאינסטגרם.
- שעות פתיחה וקישור ישיר ל־WhatsApp.
- התאמה מלאה למחשב, טאבלט ומובייל.
- תמיכה ב־Reduced Motion ונגישות מקלדת.

## הפעלה מקומית

```bash
npm install
npm run dev
```

האתר יעלה בכתובת `http://localhost:3000`.

## בדיקת ייצור

```bash
npm run lint
npm run build
npm start
```

## העלאה ל־GitHub ו־Vercel

1. מעלים את תוכן התיקייה ל־Repository חדש ב־GitHub.
2. מחברים את ה־Repository ל־Vercel.
3. Vercel יזהה את Next.js אוטומטית; אין צורך לשנות פקודות Build.
4. לאחר הפריסה מחברים את הדומיין דרך הגדרות Domains ב־Vercel.

## עדכון פרטי העסק

- טלפון ו־WhatsApp: `app/page.tsx`
- שעות פתיחה לתצוגה: המערך `hours` בתוך `app/page.tsx`
- שעות פתיחה בזמן אמת: `weeklyHours` בתוך `app/experience.tsx`
- קישור/קוד התפריט: `public/media/menu-qr.svg`
- קישור/קוד האינסטגרם: `public/media/instagram-qr.svg`
- סרטון: `public/media/about-lamma.mp4`
- לוגואים לאתר: `public/brand/`
- צבעים, ריווחים ואנימציות: `app/globals.css`

## לפני העלייה לאוויר

המיקום עדיין מסומן באתר כפרט שיתווסף בהמשך. אחרי קבלת כתובת מדויקת מומלץ להוסיף כפתור ניווט של Google Maps או Waze. בנוסף, כאשר יהיו תמונות מקוריות של המקום והמנות, אפשר לשלב גלריה אמיתית בלי לשנות את שפת העיצוב.

© 2026 LAMMA Cafe
