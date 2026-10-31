import type { ComponentType } from "react";
import type { Locale } from "next-intl";

import { en } from "@/content/en";
import { fr } from "@/content/fr";

import { contentSchema, type Content, type Project } from "./content-schema";
import { siteConfig } from "./site-config";

// Parsed at module load: invalid content fails the build instead of shipping.
const contentByLocale: Record<Locale, Content> = {
  fr: contentSchema.parse(fr),
  en: contentSchema.parse(en),
};

const slugs = (locale: Locale) =>
  contentByLocale[locale].projects.map((project) => project.slug).join();

if (slugs("fr") !== slugs("en")) {
  throw new Error("French and English projects must share slugs and order");
}

export function getContent(locale: Locale): Content {
  return contentByLocale[locale];
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return getContent(locale).projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(locale: Locale, slug: string) {
  const { projects } = getContent(locale);
  const index = projects.findIndex((project) => project.slug === slug);
  return { previous: projects[index - 1], next: projects[index + 1] };
}

/** The URL stays out of the repository and only shows once authorized. */
export function getLiveUrl(slug: string): string | undefined {
  if (slug !== "gep" || !siteConfig.confidentiality.showLiveLink) {
    return undefined;
  }
  return process.env.GEP_LIVE_URL || undefined;
}

export async function loadCaseStudy(
  locale: Locale,
  slug: string,
): Promise<ComponentType> {
  const { default: CaseStudy } = await import(
    `../content/${locale}/projects/${slug}.mdx`
  );
  return CaseStudy;
}
