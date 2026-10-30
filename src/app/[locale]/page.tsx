import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <Section>
      <h1 className="font-display text-4xl sm:text-6xl">{siteConfig.name}</h1>
      <p className="mt-4 text-lg text-accent">{t("title")}</p>
    </Section>
  );
}
