import { useTranslations } from "next-intl";

import { Container } from "@/components/ui/container";
import { Link } from "@/i18n/navigation";

import { LanguageSwitcher } from "./language-switcher";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="border-b border-border">
      <Container className="flex items-center justify-between gap-2 py-2">
        <Link href="/" className="font-display text-lg">
          <span className="sm:hidden">MG</span>
          <span className="hidden sm:inline">Michelle Grace</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          <nav aria-label={t("label")}>
            <NavLinks />
          </nav>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
