import type { ComponentType } from "react";
import type { Locale } from "next-intl";

import { en } from "@/content/en";
import { fr } from "@/content/fr";

import { contentSchema, type Content, type Project } from "./content-schema";

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

export async function loadCaseStudy(
  locale: Locale,
  slug: string,
): Promise<ComponentType> {
  const { default: CaseStudy } = await import(
    `../content/${locale}/projects/${slug}.mdx`
  );
  return CaseStudy;
}
