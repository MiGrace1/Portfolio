import { useTranslations } from "next-intl";

import { buttonClasses } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "@/i18n/navigation";

export function ContactCta() {
  const t = useTranslations("home");

  return (
    <Section className="border-t border-border">
      <SectionHeading className="mb-4">{t("cta.title")}</SectionHeading>
      <p className="max-w-prose leading-relaxed text-muted">
        {t("cta.description")}
      </p>
      <Link href="/contact" className={`${buttonClasses("primary")} mt-8`}>
        {t("hero.contactMe")}
      </Link>
    </Section>
  );
}
