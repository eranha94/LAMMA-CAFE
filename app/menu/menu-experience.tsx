/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { groups, img, menu, type MenuCategory, type MenuGroup, type MenuItem, type Price } from "./menu-data";

type Selected = { item: MenuItem; category: MenuCategory } | null;

const normalize = (value: string) => value.replace(/[׳'"״]/g, "").toLowerCase().trim();

function PriceTag({ price, large = false }: { price: Price; large?: boolean }) {
  if (price.kind === "single") {
    return <span className={`dm-price ${large ? "is-large" : ""}`}><b>{price.value}</b><i>₪</i></span>;
  }
  return (
    <span className={`dm-price is-pair ${large ? "is-large" : ""}`}>
      {price.labels.map((label, index) => (
        <span key={label}><small>{label}</small><b>{price.values[index]}</b><i>₪</i></span>
      ))}
    </span>
  );
}

export function MenuExperience() {
  const [group, setGroup] = useState<MenuGroup | "all">("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(menu[0].id);
  const [selected, setSelected] = useState<Selected>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const visible = useMemo(() => {
    const q = normalize(query);
    return menu
      .filter((category) => group === "all" || category.group === group)
      .map((category) => {
        if (!q) return category;
        const categoryHit = normalize(category.title).includes(q);
        const items = categoryHit ? category.items : category.items.filter((item) => normalize(item.name).includes(q));
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [group, query]);

  // Reveal sections + scrollspy for the sticky category bar.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-cat]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          reveal.unobserve(entry.target);
        }
      }),
      { threshold: 0.08 },
    );
    const spy = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive((hit.target as HTMLElement).dataset.cat!);
      },
      { rootMargin: "-140px 0px -60% 0px" },
    );

    sections.forEach((section) => {
      if (reduce) section.classList.add("is-in");
      else reveal.observe(section);
      spy.observe(section);
    });
    return () => { reveal.disconnect(); spy.disconnect(); };
  }, [visible]);

  // Parallax on category banners and hero.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.setProperty("--shift", `${(progress * -14).toFixed(2)}%`);
      });
      document.documentElement.style.setProperty("--dm-scroll", String(Math.min(window.scrollY / vh, 1.2)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [visible]);

  // Keep the active chip visible inside the horizontal bar.
  useEffect(() => {
    const chip = navRef.current?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    const bar = navRef.current;
    if (!chip || !bar) return;
    const target = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
    bar.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  const open = useCallback((item: MenuItem, category: MenuCategory) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setSelected({ item, category });
  }, []);

  const close = useCallback(() => {
    setSelected(null);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="dm-toolbar" id="dm-start">
        <div className="dm-tools">
          <div className="dm-groups" role="tablist" aria-label="סינון לפי סוג">
            {[{ id: "all" as const, label: "הכל" }, ...groups].map((option) => (
              <button
                key={option.id}
                role="tab"
                aria-selected={group === option.id}
                className={group === option.id ? "is-on" : ""}
                onClick={() => { setGroup(option.id); window.scrollTo({ top: document.getElementById("dm-start")!.offsetTop - 8, behavior: "smooth" }); }}
              >
                {option.label}
              </button>
            ))}
          </div>
          <label className="dm-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="חיפוש מנה או משקה…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                const start = document.getElementById("dm-start")!.offsetTop - 8;
                if (window.scrollY > start) window.scrollTo({ top: start });
              }}
              aria-label="חיפוש בתפריט"
            />
          </label>
        </div>
        <nav className="dm-chips" ref={navRef} aria-label="קטגוריות">
          {visible.map((category) => (
            <button
              key={category.id}
              data-chip={category.id}
              className={active === category.id ? "is-on" : ""}
              onClick={() => jump(category.id)}
            >
              {category.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="dm-body">
        {visible.length === 0 && (
          <p className="dm-empty">לא מצאנו את &quot;{query}&quot; בתפריט. אולי ננסה משהו אחר?</p>
        )}

        {visible.map((category, categoryIndex) => (
          <section key={category.id} id={category.id} data-cat={category.id} className="dm-cat" aria-labelledby={`${category.id}-title`}>
            <div className="dm-banner">
              <div className="dm-banner-img" data-parallax>
                <img src={img(category.image, 1400)} alt="" loading={categoryIndex < 2 ? "eager" : "lazy"} />
              </div>
              <span className="dm-banner-en" aria-hidden="true">{category.english}</span>
              <div className="dm-banner-copy">
                <span className="dm-count">{String(categoryIndex + 1).padStart(2, "0")}</span>
                <h2 id={`${category.id}-title`}>{category.title}</h2>
                <p>{category.subtitle}</p>
              </div>
            </div>

            <ul className="dm-items">
              {category.items.map((item, index) => {
                const content = (
                  <>
                    {item.image && (
                      <span className={`dm-thumb ${item.product ? "is-product" : ""}`}><img src={img(item.image, 240)} alt="" loading="lazy" /></span>
                    )}
                    <span className="dm-name">
                      <strong>{item.name}</strong>
                      {item.note && <small>{item.note}</small>}
                    </span>
                    <span className="dm-leader" aria-hidden="true" />
                    <PriceTag price={item.price} />
                  </>
                );
                return (
                  <li key={item.name} style={{ "--i": index } as React.CSSProperties}>
                    {item.image ? (
                      <button className="dm-item has-photo" onClick={() => open(item, category)} aria-label={`${item.name} — הצגת תמונה`}>
                        {content}
                      </button>
                    ) : (
                      <div className="dm-item">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            {category.footnote && <p className="dm-note"><span aria-hidden="true">✦</span> {category.footnote}</p>}
          </section>
        ))}
      </div>

      <a className="dm-top" href="#dm-start" aria-label="חזרה לראש התפריט">↑</a>

      {selected && (
        <div className="dm-sheet" role="dialog" aria-modal="true" aria-label={selected.item.name} onClick={close}>
          <div className="dm-sheet-card" onClick={(event) => event.stopPropagation()}>
            <div className={`dm-sheet-img ${selected.item.product ? "is-product" : ""}`}>
              <img src={img(selected.item.image ?? selected.category.image, 1100)} alt={selected.item.name} />
            </div>
            <div className="dm-sheet-copy">
              <small>{selected.category.title}</small>
              <h3>{selected.item.name}</h3>
              {selected.item.note && <p>{selected.item.note}</p>}
              <PriceTag price={selected.item.price} large />
              <span className="dm-sheet-hint">* התמונה להמחשה בלבד</span>
            </div>
            <button className="dm-sheet-close" onClick={close} autoFocus aria-label="סגירה">✕</button>
          </div>
        </div>
      )}
    </>
  );
}
