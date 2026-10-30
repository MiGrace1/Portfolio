import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-sm border border-border bg-surface p-6",
        className,
      )}
      {...props}
    />
  );
}
