import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { ProjectDetails } from "@/components/sections/project-details";
import { ProjectPagination } from "@/components/sections/project-pagination";
import { Section } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import {
  getAdjacentProjects,
  getContent,
  getLiveUrl,
  getProject,
  loadCaseStudy,
} from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  // Slugs are identical in every locale: lib/content.ts enforces it.
  const { projects } = getContent(routing.defaultLocale);
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = hasLocale(routing.locales, locale)
    ? getProject(locale, slug)
    : undefined;
  if (!project) {
    return {};
  }

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const project = getProject(locale, slug);
  if (!project) {
    notFound();
  }
  const CaseStudy = await loadCaseStudy(locale, slug);
  const { previous, next } = getAdjacentProjects(locale, slug);
  const t = await getTranslations("projects");

  return (
    <Section>
      <Link
        href="/projects"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft aria-hidden className="size-4" />
        {t("back")}
      </Link>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_16rem] md:gap-16">
        <div className="order-2 md:order-1">
          <CaseStudy />
        </div>
        <aside className="order-1 md:order-2">
          <ProjectDetails project={project} liveUrl={getLiveUrl(slug)} />
          {project.confidential && (
            <p className="mt-4 text-xs leading-relaxed text-muted">
              {t("confidentialNote")}
            </p>
          )}
        </aside>
      </div>
      <ProjectPagination previous={previous} next={next} />
    </Section>
  );
}
