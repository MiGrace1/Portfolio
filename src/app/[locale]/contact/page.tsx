import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/ui/section";
import { isContactFormEnabled } from "@/lib/contact-config";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");

  return buildMetadata({
    locale: await getLocale(),
    href: "/contact",
    title: t("title"),
    ogTitle: t("title"),
    description: t("intro"),
  });
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const { email, phone } = siteConfig;

  return (
    <Section>
      <h1 className="font-display text-4xl sm:text-5xl">{t("title")}</h1>
      <p className="mt-4 max-w-prose leading-relaxed text-muted">
        {t("intro")}
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
        {isContactFormEnabled() && <ContactForm />}
        <address className="space-y-1 text-sm text-muted not-italic">
          <p>
            <a
              href={`mailto:${email}`}
              className="inline-flex min-h-11 items-center hover:text-accent"
            >
              {email}
            </a>
          </p>
          <p>
            <a
              href={`tel:${phone.replaceAll(" ", "")}`}
              className="inline-flex min-h-11 items-center hover:text-accent"
            >
              {phone}
            </a>
          </p>
        </address>
      </div>
    </Section>
  );
}
