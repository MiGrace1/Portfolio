import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { ProjectCard } from "@/components/sections/project-card";
import { Section } from "@/components/ui/section";
import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");

  return buildMetadata({
    locale: await getLocale(),
    href: "/projects",
    title: t("title"),
    ogTitle: t("title"),
    description: t("description"),
  });
}

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const { projects } = getContent(useLocale());

  return (
    <Section>
      <h1 className="font-display text-4xl sm:text-5xl">{t("title")}</h1>
      <p className="mt-4 max-w-prose leading-relaxed text-muted">
        {t("description")}
      </p>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
