import { useTranslations } from "next-intl";

import { buttonClasses } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "@/i18n/navigation";
import type { Content } from "@/lib/content-schema";

import { ProjectCard } from "./project-card";

const FEATURED_COUNT = 3;

export function FeaturedProjects({
  projects,
}: {
  projects: Content["projects"];
}) {
  const t = useTranslations("home.featuredProjects");

  return (
    <Section id="projects" className="border-t border-border">
      <SectionHeading>{t("title")}</SectionHeading>
      <ul className="grid gap-6 md:grid-cols-3">
        {projects.slice(0, FEATURED_COUNT).map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <Link href="/projects" className={`${buttonClasses("ghost")} mt-10`}>
        {t("viewAll")}
      </Link>
    </Section>
  );
}
