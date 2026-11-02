const FALLBACK_SITE_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return FALLBACK_SITE_URL;
}

/**
 * Single source of truth for identity and links.
 * Translated copy (job title, tagline) belongs in the i18n messages, not here.
 */
export const siteConfig = {
  name: "Metheu Sadeu Michelle Grace",
  url: resolveSiteUrl(),
  email: "gracesadeu@gmail.com",
  phone: "+237 687 285 525",
  social: {
    github: "https://github.com/MiGrace1",
    linkedin: "https://www.linkedin.com/in/michelle-sadeu-7134a5302",
  },
  /**
   * Stay false until the supervisor gives written authorization.
   * The GEP live URL is never stored here: the repository is public,
   * so it comes from the server-only GEP_LIVE_URL environment variable.
   */
  confidentiality: {
    showLiveLink: false as boolean,
    showScreenshots: false as boolean,
  },
} as const;
