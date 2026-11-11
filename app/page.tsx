/* eslint-disable @next/next/no-img-element */
import { MotionController, OpenStatus, StoryVideo } from "./experience";

const hours = [
  ["ראשון", "07:00–21:00"],
  ["שני", "07:00–21:00"],
  ["שלישי", "07:00–21:00"],
  ["רביעי", "סגור"],
  ["חמישי", "07:00–22:00"],
  ["שישי", "07:00–22:00"],
  ["שבת", "07:00–21:00"],
];

const Arrow = () => <span className="arrow" aria-hidden="true">↙</span>;

export default function Home() {
  return (
    <main id="home">
      <MotionController />

      <header className="site-header">
        <a className="brand-link" href="#home" aria-label="LAMMA Cafe — דף הבית">
          <img src="/brand/logo-header.svg" alt="LAMMA Cafe" />
        </a>

        <nav className="desktop-nav" aria-label="ניווט ראשי">
          <a href="#story">הסיפור</a>
          <a href="#experience">החוויה</a>
          <a href="#menu">התפריט</a>
          <a href="#visit">בואו לבקר</a>
        </nav>

        <div className="header-actions">
          <OpenStatus compact />
          <a className="header-cta" href="https://wa.me/972524394885" target="_blank" rel="noreferrer">
            דברו איתנו <Arrow />
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="פתיחת תפריט ניווט"><span /><span /></summary>
          <div>
            <a href="#story">הסיפור</a>
            <a href="#experience">החוויה</a>
            <a href="#menu">התפריט</a>
            <a href="#visit">בואו לבקר</a>
            <a href="https://wa.me/972524394885" target="_blank" rel="noreferrer">WhatsApp ↙</a>
          </div>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-entry"><span /> COFFEE · FOOD · MOMENTS</p>
          <h1 id="hero-title" className="hero-entry hero-delay-one">
            כל מפגש טוב<br />מתחיל ברגע<br /><em>אחד של שקט.</em>
          </h1>
          <p className="hero-text hero-entry hero-delay-two">
            מקום בלי גיל, עם אווירה צעירה, קפה שמכינים באהבה ורגעים שנשארים איתכם הרבה אחרי שהכוס מתרוקנת.
          </p>
          <div className="hero-actions hero-entry hero-delay-three">
            <a className="button button-ink" href="/menu">לפתיחת התפריט <Arrow /></a>
            <a className="quiet-link" href="#story">להכיר את LAMMA <span>↓</span></a>
          </div>
          <div className="hero-status hero-entry hero-delay-three"><OpenStatus /></div>
        </div>

        <div className="hero-art hero-entry hero-delay-one" aria-hidden="true">
          <span className="halo halo-one" />
          <span className="halo halo-two" />
          <div className="hero-card">
            <span className="micro-copy">EST. 2026</span>
            <img src="/brand/badge-color.svg" alt="" />
            <span className="hero-card-note">A PLACE TO<br />PAUSE &amp; GATHER</span>
          </div>
          <div className="hero-stamp"><img src="/brand/mark-cream.svg" alt="" /><span>GOOD COFFEE<br />GOOD MOMENTS</span></div>
        </div>

        <div className="hero-footnote" aria-hidden="true">LAMMA <span>למה לא לעצור לרגע?</span></div>
      </section>

      <div className="brand-ribbon" aria-label="הערכים של LAMMA">
        <div>
          <span>קפה טוב</span><i>✦</i><span>אוכל טוב</span><i>✦</i><span>רגעים טובים</span><i>✦</i>
          <span>קפה טוב</span><i>✦</i><span>אוכל טוב</span><i>✦</i><span>רגעים טובים</span><i>✦</i>
        </div>
      </div>

      <section className="story section" id="story">
        <div className="section-label" data-reveal><span>01</span> הסיפור שלנו</div>
        <div className="story-heading" data-reveal>
          <p className="kicker">יותר מבית קפה</p>
          <h2>מקום שגילה לנו דברים<br />על עצמנו <em>שלא ידענו.</em></h2>
        </div>

        <div className="story-body" data-reveal>
          <p className="lead">LAMMA נולדה בשביל המפגש — בין אנשים, בין טעמים ובין רגע קטן ליום שלם.</p>
          <p>יש מקומות שבאים אליהם לשתות קפה, ויש מקומות שפשוט מרגישים בהם שייכים. כאן המוזיקה מרגיעה, הריח עוטף והקצב מזכיר שלא תמיד צריך למהר.</p>
          <div className="signature">Take a breath.<br /><span>We&apos;ll take care of the rest.</span></div>
        </div>

        <div className="story-film" data-reveal>
          <StoryVideo />
          <div className="film-caption"><b>הסיפור של LAMMA</b><span>00:29 דקות · עם סאונד</span></div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label light" data-reveal><span>02</span> ההרגשה</div>
        <div className="experience-intro" data-reveal>
          <p className="kicker gold">בדיוק בקצב שלכם</p>
          <h2>רוגע. טעם.<br /><em>אנשים.</em></h2>
          <p>שלושה דברים פשוטים שהופכים כל ביקור קטן לרגע שרוצים לחזור אליו.</p>
        </div>

        <div className="value-cards">
          <article data-reveal>
            <span>01</span><i>◯</i>
            <h3>אווירה<br />בלי גיל</h3>
            <p>צעירה, נינוחה ומתאימה לכולם — בדיוק כמו מפגש טוב.</p>
          </article>
          <article data-reveal>
            <span>02</span><i>✦</i>
            <h3>טעם<br />עם כוונה</h3>
            <p>קפה, מאפים ומנות שעושים באהבה ומגישים בלי קיצורי דרך.</p>
          </article>
          <article data-reveal>
            <span>03</span><i>⌁</i>
            <h3>רגעים<br />שנשארים</h3>
            <p>המוזיקה, הריח והשיחה שממשיכה גם אחרי שהקפה נגמר.</p>
          </article>
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="menu-orbit" aria-hidden="true" />
        <div className="section-label" data-reveal><span>03</span> התפריט</div>
        <div className="menu-copy" data-reveal>
          <p className="kicker">הטעם של הרגע</p>
          <h2>מה בא לכם<br /><em>עכשיו?</em></h2>
          <p>חם או קר, מתוק או מלוח, משהו קטן ליד או עצירה של ממש — התפריט שלנו מחכה לכם.</p>
          <div className="menu-tags" aria-label="קטגוריות בתפריט">
            <span>קפה חם</span><span>קרים ואייסים</span><span>מוחיטו וסחוטים</span><span>מאפים</span><span>קינוחים</span>
          </div>
          <a className="button button-ink" href="/menu">לתפריט הדיגיטלי <Arrow /></a>
        </div>

        <a className="menu-card" href="/menu" data-reveal aria-label="פתיחת התפריט הדיגיטלי">
          <span className="menu-card-top">LAMMA MENU <b>↙</b></span>

          <div className="qr-window">

  <img
    src="/media/menu-qr.svg"
    alt="קוד QR לפתיחת תפריט LAMMA" />
</div>
          <div className="menu-card-bottom"><strong>סרקו או לחצו<br />לצפייה בתפריט</strong><span>MENU<br />2026</span></div>
        </a>
      </section>

      <section className="visit section" id="visit">
        <div className="section-label light" data-reveal><span>04</span> בואו לבקר</div>
        <div className="visit-copy" data-reveal>
          <p className="kicker gold">אנחנו כבר כאן</p>
          <h2>הכיסא שלכם<br /><em>כבר מחכה.</em></h2>
          <p>המיקום והניווט יתווספו כאן בקרוב. עד אז — אפשר לדבר איתנו ישירות ולקבל את כל הפרטים.</p>
          <OpenStatus />
          <a className="button button-gold" href="https://wa.me/972524394885?text=%D7%94%D7%99%D7%99%20LAMMA%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D" target="_blank" rel="noreferrer">כתבו לנו ב־WhatsApp <Arrow /></a>
        </div>

        <div className="hours-card" data-reveal>
          <div className="hours-title"><span>שעות פתיחה</span><small>OPENING HOURS</small></div>
          {hours.map(([day, time]) => (
            <div key={day} className={time === "סגור" ? "closed" : ""}><span>יום {day}</span><b>{time}</b></div>
          ))}
        </div>

        <a className="instagram-card" href="/media/instagram-qr.svg" target="_blank" rel="noreferrer" data-reveal>
          <div className="instagram-qr"><img src="/media/instagram-qr.svg" alt="קוד QR לאינסטגרם של LAMMA" /></div>
          <div><span>FOLLOW THE MOMENTS</span><strong>עקבו אחרינו<br />באינסטגרם ↙</strong></div>
        </a>
      </section>

      <section className="closing" aria-label="סיום">
        <img src="/brand/mark-cream.svg" alt="" />
        <p>GOOD COFFEE. GOOD FOOD.<br /><em>GOOD MOMENTS.</em></p>
      </section>

      <footer>
        <div className="footer-brand"><img src="/brand/logo-horizontal-cream.svg" alt="LAMMA Cafe" /><span>COFFEE · FOOD · MOMENTS</span></div>
        <div className="footer-message"><span>תודה שעצרתם אצלנו.</span><strong>נשמח לראות אתכם שוב.</strong></div>
        <div className="footer-links"><a href="tel:+972524394885">052-439-4885</a><a href="/menu">התפריט</a><a href="#home">חזרה למעלה ↑</a></div>
        <small>© 2026 LAMMA CAFE · ALL RIGHTS RESERVED</small>
      </footer>

      <a className="floating-whatsapp" href="https://wa.me/972524394885" target="_blank" rel="noreferrer" aria-label="פתיחת שיחה עם LAMMA בוואטסאפ">
        <span>WhatsApp</span><i aria-hidden="true">↙</i>
      </a>
    </main>
  );
}
