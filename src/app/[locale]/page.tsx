import { useLocale } from "next-intl";

import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { getContent } from "@/lib/content";

export default function HomePage() {
  const { profile, experience, education, languages, skills, projects } =
    getContent(useLocale());

  return (
    <>
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
