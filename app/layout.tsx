import type { Metadata } from "next";
import "@fontsource/assistant/400.css";
import "@fontsource/assistant/500.css";
import "@fontsource/assistant/600.css";
import "@fontsource/assistant/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LAMMA Cafe | קפה, אוכל ורגעים טובים",
    template: "%s | LAMMA Cafe",
  },
  description: "LAMMA Cafe — מקום בלי גיל, עם אווירה צעירה, קפה שנעשה באהבה ורגעים שנשארים.",
  applicationName: "LAMMA Cafe",
  keywords: ["LAMMA", "LAMMA Cafe", "בית קפה", "קפה", "אוכל", "מאפים"],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="he" dir="rtl"><body>{children}</body></html>;
}
