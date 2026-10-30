"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", labelKey: "home" },
  { href: "/projects", labelKey: "projects" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function NavLinks() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-3 sm:gap-6">
      {links.map(({ href, labelKey }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center text-sm transition-colors hover:text-accent",
                isActive ? "text-foreground" : "text-muted",
              )}
            >
              {t(labelKey)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
