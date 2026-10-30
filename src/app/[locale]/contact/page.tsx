import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <Section>
      <h1 className="font-display text-4xl">{t("contact.title")}</h1>
      <p className="mt-4 text-muted">{t("common.comingSoon")}</p>
    </Section>
  );
}
