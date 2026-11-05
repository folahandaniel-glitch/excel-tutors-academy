import type { MetadataRoute } from "next";
import { AI_CRAWLERS, siteBaseUrl } from "@/lib/seo-kit";

export default function robots(): MetadataRoute.Robots {
  const base = siteBaseUrl();
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/student", "/cbt", "/api", "/backend", "/setup", "/reset-password", "/verify"] }, { ...{ userAgent: "*", allow: "/", disallow: ["/admin", "/student", "/cbt", "/api", "/backend", "/setup", "/reset-password", "/verify"] }, userAgent: AI_CRAWLERS }],
    sitemap: `${base}/sitemap.xml`,
  };
}
