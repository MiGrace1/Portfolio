import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Content } from "@/lib/content-schema";

export function Experience({ items }: { items: Content["experience"] }) {
  const t = useTranslations("home.experience");

  return (
    <Section id="experience" className="border-t border-border">
      <SectionHeading>{t("title")}</SectionHeading>
      <ol className="space-y-12">
        {items.map(({ company, role, location, period, highlights }) => (
          <li
            key={company}
            className="grid gap-2 md:grid-cols-[1fr_3fr] md:gap-8"
          >
            <p className="text-sm text-muted">{period}</p>
            <div>
              <h3 className="font-display text-xl">{company}</h3>
              <p className="mt-1 text-sm text-accent">
                {role}
                {location && ` · ${location}`}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
