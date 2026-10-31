import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { getContent } from "@/lib/content";
import { getAbsoluteUrl, getLanguageAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectHrefs = getContent(routing.defaultLocale).projects.map(
    ({ slug }) => ({
      pathname: "/projects/[slug]" as const,
      params: { slug },
    }),
  );
  const hrefs = ["/", "/projects", "/contact", ...projectHrefs] as const;

  return routing.locales.flatMap((locale) =>
    hrefs.map((href) => ({
      url: getAbsoluteUrl(locale, href),
      alternates: { languages: getLanguageAlternates(href) },
    })),
  );
}
