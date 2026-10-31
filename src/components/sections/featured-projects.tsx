import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Link } from "@/i18n/navigation";
import type { Content } from "@/lib/content-schema";

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
            <Card className="flex h-full flex-col">
              <p className="text-xs text-muted">{project.organization}</p>
              <h3 className="mt-2 font-display text-xl">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <div className="mt-4">
                <Badge>{project.status}</Badge>
              </div>
              <Link
                href={{
                  pathname: "/projects/[slug]",
                  params: { slug: project.slug },
                }}
                aria-label={t("readCaseStudy", { title: project.title })}
                className="mt-4 inline-flex min-h-11 w-fit items-center text-accent"
              >
                <ArrowRight aria-hidden className="size-5" />
              </Link>
            </Card>
          </li>
        ))}
      </ul>
      <Link href="/projects" className={`${buttonClasses("ghost")} mt-10`}>
        {t("viewAll")}
      </Link>
    </Section>
  );
}
