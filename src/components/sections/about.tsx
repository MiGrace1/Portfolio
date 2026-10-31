import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Content } from "@/lib/content-schema";

type AboutProps = Pick<Content, "education" | "languages"> & {
  paragraphs: Content["profile"]["about"];
};

export function About({ paragraphs, education, languages }: AboutProps) {
  const t = useTranslations("home.about");

  return (
    <Section id="about" className="border-t border-border">
      <SectionHeading>{t("title")}</SectionHeading>
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:gap-16">
        <div className="space-y-4 leading-relaxed text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-display text-xl">{t("education")}</h3>
            <ul className="space-y-3 text-sm">
              {education.map(({ degree, school }) => (
                <li key={degree}>
                  <p>{degree}</p>
                  <p className="text-muted">{school}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-display text-xl">{t("languages")}</h3>
            <ul className="space-y-1 text-sm">
              {languages.map(({ name, level }) => (
                <li key={name}>
                  {name} <span className="text-muted">: {level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
