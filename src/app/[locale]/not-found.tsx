import { useTranslations } from "next-intl";

import { buttonClasses } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <Section>
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("description")}</p>
      <Link href="/" className={`${buttonClasses("ghost")} mt-8`}>
        {t("backHome")}
      </Link>
    </Section>
  );
}
