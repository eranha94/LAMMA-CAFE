"use client";

import { useEffect, useMemo, useState } from "react";

const weeklyHours: Record<number, { open: number; close: number } | null> = {
  0: { open: 7, close: 21 },
  1: { open: 7, close: 21 },
  2: { open: 7, close: 21 },
  3: null,
  4: { open: 7, close: 22 },
  5: { open: 7, close: 22 },
  6: { open: 7, close: 21 },
};

function getJerusalemNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jerusalem",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { day: dayMap[values.weekday], minutes: Number(values.hour) * 60 + Number(values.minute) };
}

export function OpenStatus({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState<{ day: number; minutes: number } | null>(null);

  useEffect(() => {
    const refresh = () => setNow(getJerusalemNow());
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const status = useMemo(() => {
    if (!now) return { open: true, label: "בודקים שעות…", detail: "" };
    const hours = weeklyHours[now.day];
    if (!hours) return { open: false, label: "סגור היום", detail: "נפגשים מחר ב־07:00" };

    const isOpen = now.minutes >= hours.open * 60 && now.minutes < hours.close * 60;
    if (isOpen) return { open: true, label: "פתוח עכשיו", detail: `עד ${String(hours.close).padStart(2, "0")}:00` };
    if (now.minutes < hours.open * 60) return { open: false, label: "נפתח היום", detail: "ב־07:00" };
    return { open: false, label: "סגור כרגע", detail: now.day === 2 ? "נפגשים בחמישי ב־07:00" : "נפגשים מחר ב־07:00" };
  }, [now]);

  return (
    <span className={`open-status ${status.open ? "is-open" : "is-closed"} ${compact ? "is-compact" : ""}`}>
      <i aria-hidden="true" />
      <span><b>{status.label}</b>{status.detail && <small>{status.detail}</small>}</span>
    </span>
  );
}
export function StoryVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`film-frame ${isPlaying ? "is-playing" : ""}`}>
      <video
        controls
        playsInline
        preload="metadata"
        poster="/media/video-poster.jpg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/media/about-lamma.mp4" type="video/mp4" />
      </video>

      <span className="film-play" aria-hidden="true">
        PLAY
      </span>
    </div>
  );
}

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("js-ready");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14, rootMargin: "0px 0px -4%" },
    );
    revealItems.forEach((item) => observer.observe(item));

    const pointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", pointer, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", pointer);
    };
  }, []);

  return null;
}
