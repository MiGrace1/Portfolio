import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/content-schema";

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({
  project,
  headingLevel: Heading = "h3",
}: ProjectCardProps) {
  return (
    <Card className="relative flex h-full flex-col transition-colors hover:border-accent">
      <p className="text-xs text-muted">{project.organization}</p>
      <Heading className="mt-2 font-display text-xl">
        <Link
          href={{
            pathname: "/projects/[slug]",
            params: { slug: project.slug },
          }}
          className="after:absolute after:inset-0"
        >
          {project.title}
        </Link>
      </Heading>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-4">
        <Badge>{project.status}</Badge>
      </div>
    </Card>
  );
}
