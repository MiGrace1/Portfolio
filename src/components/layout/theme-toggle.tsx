"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

function toggleTheme() {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  try {
    localStorage.setItem("theme", nextTheme);
  } catch {
    // Storage can be blocked: the theme still applies for this page.
  }
}

export function ThemeToggle() {
  const t = useTranslations("theme");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("toggle")}
      className="inline-flex size-11 items-center justify-center rounded-sm text-muted transition-colors hover:text-accent"
    >
      <Sun aria-hidden className="hidden size-5 dark:block" />
      <Moon aria-hidden className="size-5 dark:hidden" />
    </button>
  );
}
