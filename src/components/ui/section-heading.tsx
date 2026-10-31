import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function SectionHeading({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn("mb-10 font-display text-3xl sm:text-4xl", className)}
      {...props}
    />
  );
}
