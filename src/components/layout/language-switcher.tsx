"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import type { ComponentProps } from "react";

import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const targetLocale = locale === "fr" ? "en" : "fr";
  const href = { pathname, params } as ComponentProps<typeof Link>["href"];

  return (
    <Link
      href={href}
      locale={targetLocale}
      lang={targetLocale}
      hrefLang={targetLocale}
      aria-label={t("switch")}
      className="inline-flex size-11 items-center justify-center rounded-sm text-sm font-medium text-muted uppercase transition-colors hover:text-accent"
    >
      {targetLocale}
    </Link>
  );
}
