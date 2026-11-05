import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/seo-kit";

const PATHS = ["", "/about", "/subjects", "/cbt-practice", "/mock-exams", "/bece-preparation", "/jamb-preparation", "/waec-preparation", "/neco-preparation", "/study-centre", "/how-it-works", "/primary-school", "/for-parents", "/get-access", "/faq", "/contact", "/privacy", "/terms", "/register", "/login"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteBaseUrl();
  return PATHS.map((p) => ({ url: `${base}${p}`, changeFrequency: p ? "monthly" : "weekly", priority: p ? 0.7 : 1 }));
}
