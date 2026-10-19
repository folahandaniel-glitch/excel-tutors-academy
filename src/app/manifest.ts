import type { MetadataRoute } from "next";

/** PWA manifest — install to home screen; icons generated from the official logo. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EXCEL TUTORS ACADEMY",
    short_name: "EXCEL CBT",
    description: "Learn. Practise. Test. Improve. — EXCEL TUTORS ACADEMY",
    start_url: "/student",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1f4b",
    orientation: "portrait",
    icons: [
      { src: "/brand/logo-mark-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/logo-mark-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/brand/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/brand/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
