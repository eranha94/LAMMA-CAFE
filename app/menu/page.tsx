/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { heroImage, img, menu } from "./menu-data";
import { MenuExperience } from "./menu-experience";
import "./menu.css";

export const metadata: Metadata = {
  title: "התפריט",
  description: "התפריט הדיגיטלי של LAMMA Cafe — קפה חם וקר, משקאות מיוחדים, מאפים טריים וקינוחים.",
};

const itemCount = menu.reduce((sum, category) => sum + category.items.length, 0);

export default function MenuPage() {
  return (
    <main className="dm">
      <header className="dm-header">
        <Link href="/" className="dm-home" aria-label="LAMMA Cafe — חזרה לדף הבית">
          <img src="/brand/logo-horizontal-cream.svg" alt="LAMMA Cafe" />
        </Link>
        <Link href="/" className="dm-back">לאתר <span aria-hidden="true">←</span></Link>
      </header>

      <section className="dm-hero" aria-labelledby="dm-title">
        <div className="dm-hero-media" aria-hidden="true">
          <img src={img(heroImage, 1800)} alt="" fetchPriority="high" />
        </div>
        <div className="dm-hero-shade" aria-hidden="true" />
        <div className="dm-hero-copy">
          <p className="dm-eyebrow"><span /> LAMMA MENU · 2026</p>
          <h1 id="dm-title">
            <span className="dm-line"><span>מה בא לכם</span></span>
            <span className="dm-line"><em>עכשיו?</em></span>
          </h1>
          <p className="dm-hero-sub">
            {menu.length} קטגוריות · {itemCount} מנות ומשקאות — חם או קר, מתוק או מלוח. גללו, חפשו ובחרו.
          </p>
        </div>
        <a className="dm-scroll" href="#dm-start" aria-label="גלילה לתפריט">
          <span>גללו לתפריט</span><i aria-hidden="true" />
        </a>
      </section>

      <MenuExperience />

      <div className="dm-footer">
        <img src="/brand/mark-cream.svg" alt="" />
        <p>תודה שעצרתם אצלנו.<br /><strong>נשמח לראות אתכם שוב.</strong></p>
        <small>* התמונות להמחשה בלבד · המחירים בש״ח</small>
        <div>
          <a href="https://wa.me/972524394885" target="_blank" rel="noreferrer">WhatsApp ↙</a>
          <Link href="/">חזרה לאתר</Link>
        </div>
      </div>
    </main>
  );
}
