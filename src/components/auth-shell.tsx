/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { getBrand } from "@/server/brand";
import { Logo } from "./brand";

const PORTRAIT = "/brand/founder-standing.webp";
const PORTRAIT_SMALL = "/brand/founder-standing-360.webp";

/** Split-screen layout of every sign-in and registration screen: the school logo and the Director's portrait. */
export async function AuthShell({ title, subtitle, children, variant = "student", wide }: { title: string; subtitle?: React.ReactNode; children: React.ReactNode; variant?: "student" | "backend"; wide?: boolean }) {
  const brand = await getBrand();
  return (
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <aside className="relative hidden overflow-hidden bg-navy-800 text-white lg:block">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-royal-600/30 blur-3xl" aria-hidden />
        <div className="relative flex h-full flex-col justify-between gap-6 p-10 xl:p-12">
          <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white">
            ← Back to website
          </Link>
          <div>
            <div className="mx-auto flex max-w-md items-end justify-center gap-5">
              <div className="w-36 shrink-0 rounded-3xl bg-white p-4 shadow-lift xl:w-44">
                <Logo src={brand.logoUrl} alt="EXCEL TUTORS ACADEMY logo" className="mx-auto w-full" priority />
              </div>
              <img src={PORTRAIT} alt="Excel Tutors Academy" width={720} height={1080} decoding="async" className="gold-frame h-72 w-48 shrink-0 rounded-3xl object-cover object-top xl:h-80 xl:w-56" />
            </div>
            <p className="mt-8 text-center font-display text-3xl font-extrabold">EXCEL TUTORS ACADEMY</p>
            <p className="mt-2 text-center text-lg font-semibold text-gold-400">{brand.tagline}</p>
            <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{brand.positioning}</p>
          </div>
          <p className="flex items-center justify-center gap-2 text-xs text-white/60">
            <ShieldCheck className="size-4 text-gold-400" aria-hidden />
            {variant === "backend" ? "Restricted area. All access is logged." : "Your password is encrypted and never visible to anyone."}
          </p>
        </div>
      </aside>
      <main id="main" className="flex flex-col bg-white">
        <div className="flex items-center justify-between gap-3 bg-navy-800 px-5 py-3 text-white lg:hidden">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white p-1">
              <Logo src={brand.markUrl} alt="EXCEL TUTORS ACADEMY logo" className="size-full object-contain" priority />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-extrabold tracking-wide">EXCEL TUTORS ACADEMY</span>
              <span className="block truncate text-[0.68rem] font-semibold text-gold-400">{brand.tagline}</span>
            </span>
          </Link>
          <img src={PORTRAIT_SMALL} alt="Excel Tutors Academy" width={360} height={540} decoding="async" className="size-12 shrink-0 rounded-full object-cover object-top ring-2 ring-gold-400" />
        </div>
        <div className="flex flex-1 items-start justify-center px-5 pb-12 pt-6 sm:items-center sm:px-8 lg:pt-12">
          <div className={wide ? "w-full max-w-2xl" : "w-full max-w-md"}>
            {variant === "backend" && <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Backend access</p>}
            <h1 className="text-[1.7rem] font-extrabold tracking-tight text-navy-800">{title}</h1>
            {subtitle && <div className="mt-1.5 text-sm text-muted">{subtitle}</div>}
            <div className="mt-7">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
