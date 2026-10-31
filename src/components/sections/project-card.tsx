import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/content-schema";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="relative flex h-full flex-col transition-colors hover:border-accent">
      <p className="text-xs text-muted">{project.organization}</p>
      <h3 className="mt-2 font-display text-xl">
        <Link
          href={{
            pathname: "/projects/[slug]",
            params: { slug: project.slug },
          }}
          className="after:absolute after:inset-0"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-4">
        <Badge>{project.status}</Badge>
      </div>
    </Card>
  );
}
