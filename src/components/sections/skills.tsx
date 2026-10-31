import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Content } from "@/lib/content-schema";

function SkillList({ label, skills }: { label: string; skills: string[] }) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="mb-2 text-xs text-muted">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills({ groups }: { groups: Content["skills"] }) {
  const t = useTranslations("home.skills");

  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeading>{t("title")}</SectionHeading>
      <div className="grid gap-10 sm:grid-cols-2">
        {groups.map(({ name, daily, notions }) => (
          <div key={name} className="space-y-4">
            <h3 className="font-display text-xl">{name}</h3>
            <SkillList label={t("daily")} skills={daily} />
            <SkillList label={t("notions")} skills={notions} />
          </div>
        ))}
      </div>
    </Section>
  );
}
