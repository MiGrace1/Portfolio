import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/content-schema";

type PaginationLinkProps = {
  project: Project;
  label: string;
  direction: "previous" | "next";
};

function PaginationLink({ project, label, direction }: PaginationLinkProps) {
  const isNext = direction === "next";
  const Icon = isNext ? ArrowRight : ArrowLeft;

  return (
    <Link
      href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
      rel={isNext ? "next" : "prev"}
      className={cn(
        "group flex flex-col gap-1 sm:max-w-[45%]",
        isNext && "ml-auto sm:items-end sm:text-right",
      )}
    >
      <span className="flex items-center gap-2 text-xs text-muted">
        {!isNext && <Icon aria-hidden className="size-4" />}
        {label}
        {isNext && <Icon aria-hidden className="size-4" />}
      </span>
      <span className="font-display text-lg transition-colors group-hover:text-accent">
        {project.title}
      </span>
    </Link>
  );
}

type ProjectPaginationProps = {
  previous?: Project;
  next?: Project;
};

export function ProjectPagination({ previous, next }: ProjectPaginationProps) {
  const t = useTranslations("projects");

  return (
    <nav
      aria-label={t("title")}
      className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row"
    >
      {previous && (
        <PaginationLink
          project={previous}
          label={t("previous")}
          direction="previous"
        />
      )}
      {next && (
        <PaginationLink project={next} label={t("next")} direction="next" />
      )}
    </nav>
  );
}
