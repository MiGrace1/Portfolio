import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { Section } from "@/components/ui/section";
import { routing } from "@/i18n/routing";
import { getContent, getProject, loadCaseStudy } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  // Slugs are identical in every locale: lib/content.ts enforces it.
  const { projects } = getContent(routing.defaultLocale);
  return projects.map(({ slug }) => ({ slug }));
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

  return (
    <Section>
      <h1 className="mb-8 font-display text-4xl">{project.title}</h1>
      <CaseStudy />
    </Section>
  );
}
