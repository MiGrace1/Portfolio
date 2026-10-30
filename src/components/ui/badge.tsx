import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2.5 py-1 text-xs text-muted",
        className,
      )}
      {...props}
    />
  );
}
