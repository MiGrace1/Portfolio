import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/content-schema";

type ProjectDetailsProps = {
  project: Project;
  liveUrl?: string;
};

export function ProjectDetails({ project, liveUrl }: ProjectDetailsProps) {
  const t = useTranslations("projects.details");
  const { repository, demo } = project.links;
  const links = [
    { label: t("live"), href: liveUrl },
    { label: t("demo"), href: demo },
    { label: t("repository"), href: repository },
  ].filter((link) => link.href);

  const rows = [
    { label: t("role"), value: project.role },
    { label: t("organization"), value: project.organization },
    { label: t("status"), value: project.status },
  ];

  return (
    <Card>
      <dl className="space-y-4 text-sm">
        {rows.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-xs text-muted">{label}</dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ))}
        <div>
          <dt className="text-xs text-muted">{t("stack")}</dt>
          <dd className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <li key={technology}>
                  <Badge>{technology}</Badge>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        {links.length > 0 && (
          <div>
            <dt className="text-xs text-muted">{t("links")}</dt>
            <dd className="mt-1 flex flex-col">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center text-accent"
                >
                  {label}
                </a>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </Card>
  );
}
