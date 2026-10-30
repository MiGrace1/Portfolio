import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./container";

export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-16 sm:py-24", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
