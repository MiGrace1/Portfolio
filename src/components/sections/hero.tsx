import { useTranslations } from "next-intl";
import Image from "next/image";

import { buttonClasses } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import type { Content } from "@/lib/content-schema";
import { siteConfig } from "@/lib/site-config";

export function Hero({ profile }: { profile: Content["profile"] }) {
  const t = useTranslations("home.hero");

  return (
    <Section>
      <div className="grid animate-fade-in items-center gap-10 md:grid-cols-[3fr_2fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="mb-4 text-sm text-muted">{profile.availability}</p>
          <h1 className="font-display text-4xl leading-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg text-accent">{profile.title}</p>
          <p className="mt-6 max-w-prose leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className={buttonClasses("primary")}>
              {t("viewProjects")}
            </Link>
            <Link href="/contact" className={buttonClasses("ghost")}>
              {t("contactMe")}
            </Link>
          </div>
        </div>
        <div className="relative order-1 aspect-square w-full max-w-xs overflow-hidden rounded-sm md:order-2 md:aspect-[4/5] md:max-w-none">
          <Image
            src="/images/profile.png"
            alt={t("photoAlt")}
            fill
            preload
            sizes="(min-width: 768px) 40vw, 320px"
            className="object-cover object-[50%_12%]"
          />
        </div>
      </div>
    </Section>
  );
}
