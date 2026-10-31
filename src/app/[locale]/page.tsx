import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { PersonJsonLd } from "@/components/sections/person-json-ld";
import { Skills } from "@/components/sections/skills";
import { getContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("metadata");
  const title = `${siteConfig.name} | ${getContent(locale).profile.title}`;

  return buildMetadata({
    locale,
    href: "/",
    title: { absolute: title },
    ogTitle: title,
    description: t("description"),
  });
}

export default function HomePage() {
  const { profile, experience, education, languages, skills, projects } =
    getContent(useLocale());

  return (
    <>
      <PersonJsonLd profile={profile} />
      <Hero profile={profile} />
      <About
        paragraphs={profile.about}
        education={education}
        languages={languages}
      />
      <Experience items={experience} />
      <Skills groups={skills} />
      <FeaturedProjects projects={projects} />
      <ContactCta />
    </>
  );
}
