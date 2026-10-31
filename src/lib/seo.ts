import type { Metadata } from "next";
import type { Locale } from "next-intl";

import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { siteConfig } from "./site-config";

type Href = Parameters<typeof getPathname>[0]["href"];

const openGraphLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
};

export function getAbsoluteUrl(locale: Locale, href: Href): string {
  const pathname = getPathname({ locale, href });
  return `${siteConfig.url}${pathname === "/" ? "" : pathname}`;
}

export function getLanguageAlternates(href: Href) {
  return Object.fromEntries(
    routing.locales.map((locale) => [locale, getAbsoluteUrl(locale, href)]),
  );
}

type PageMetadata = {
  locale: Locale;
  href: Href;
  title: Metadata["title"];
  ogTitle: string;
  description: string;
};

export function buildMetadata({
  locale,
  href,
  title,
  ogTitle,
  description,
}: PageMetadata): Metadata {
  const url = getAbsoluteUrl(locale, href);
  const image = `${siteConfig.url}/${locale}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...getLanguageAlternates(href),
        "x-default": getAbsoluteUrl(routing.defaultLocale, href),
      },
    },
    openGraph: {
      type: "website",
      url,
      title: ogTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
      locale: openGraphLocales[locale],
      alternateLocale: routing.locales
        .filter((other) => other !== locale)
        .map((other) => openGraphLocales[other]),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}
