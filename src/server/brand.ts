import "server-only";
import { cache } from "react";
import { getDefaultSchoolId, getSettings } from "./settings";

export interface Brand {
  schoolId: string;
  platformName: string;
  schoolName: string;
  tagline: string;
  positioning: string;
  poweredBy: string;
  showPoweredBy: boolean;
  phone: string;
  accessCodeContact: string;
  email: string;
  address: string;
  logoUrl: string;
  markUrl: string;
  heroUrl: string;
  examBannerUrl: string | null;
  flags: Record<string, boolean>;
}

/** Official campus photo shown until a Super Admin uploads a replacement in Branding. */
export const DEFAULT_HERO_URL = "/brand/hero-students.webp";

const asset = (id: string | null | undefined) => (id ? `/api/v1/assets/${id}` : null);

/** Branding resolved once per request; every logo in the UI comes from here (Rule 19). */
export const getBrand = cache(async (): Promise<Brand> => {
  const schoolId = await getDefaultSchoolId();
  const s = await getSettings(schoolId, ["general", "school", "branding", "featureFlags"]);
  return {
    schoolId,
    platformName: s.general.platformName,
    schoolName: s.school.name,
    tagline: s.general.tagline,
    positioning: s.general.positioning,
    poweredBy: s.general.poweredBy,
    showPoweredBy: s.general.showPoweredBy,
    phone: s.school.phone,
    accessCodeContact: s.school.accessCodeContact,
    email: s.school.email,
    address: s.school.address,
    logoUrl: asset(s.branding.logoAssetId) ?? "/brand/logo-full-480.webp",
    markUrl: asset(s.branding.logoAssetId) ?? "/brand/logo-mark-128.png",
    heroUrl: asset(s.branding.heroAssetId) ?? DEFAULT_HERO_URL,
    examBannerUrl: asset(s.branding.examBannerAssetId),
    flags: s.featureFlags as unknown as Record<string, boolean>,
  };
});
