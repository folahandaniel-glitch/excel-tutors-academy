import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";
import { ServiceWorker } from "@/components/service-worker";
import { SpeakButtons } from "@/components/speak-buttons";
import { getDefaultSchoolId, getSetting } from "@/server/settings";

/** Backend-editable theme: optional primary/accent colours override the navy and gold tokens. */
async function themeCss() {
  try {
    const b = await getSetting(await getDefaultSchoolId(), "branding");
    const hex = /^#[0-9a-fA-F]{6}$/;
    const css: string[] = [];
    if (hex.test(b.primaryColor ?? "")) css.push(`--color-navy-800:${b.primaryColor};--color-navy-700:${b.primaryColor};`);
    if (hex.test(b.accentColor ?? "")) css.push(`--color-gold-500:${b.accentColor};--color-gold-400:${b.accentColor};`);
    return css.length ? `:root{${css.join("")}}` : "";
  } catch {
    return "";
  }
}

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? "http://localhost:3000"),
  title: { default: "EXCEL TUTORS ACADEMY — Learn Today, Lead Tomorrow.", template: "%s · EXCEL TUTORS ACADEMY" },
  description:
    "EXCEL TUTORS ACADEMY by EXCEL TUTORS ACADEMY: guided lessons, auto-marked classwork, secure computer-based tests and BECE, JAMB, WAEC and NECO preparation for JSS1–SS3 students.",
  applicationName: "EXCEL TUTORS ACADEMY",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "EXCEL TUTORS ACADEMY",
    description: "Smart Assessment. Secure Examination. Better Learning.",
    siteName: "EXCEL TUTORS ACADEMY",
    images: [{ url: "/brand/logo-full-480.png", width: 480, height: 423, alt: "EXCEL TUTORS ACADEMY logo" }],
    locale: "en_NG",
    type: "website",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b1f4b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Reading the request makes every page dynamic, so Next.js stamps the per-request CSP nonce on its scripts.
  await headers();
  const theme = await themeCss();
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="min-h-dvh">
        {theme && <style dangerouslySetInnerHTML={{ __html: theme }} />}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ToastProvider>{children}</ToastProvider>
        <ServiceWorker />
        <SpeakButtons />
      </body>
    </html>
  );
}
