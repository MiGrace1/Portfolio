import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  ghost:
    "border border-border text-foreground hover:border-accent hover:text-accent",
};

/** Shared with links styled as buttons, such as next-intl's Link. */
export function buttonClasses(variant: ButtonVariant = "primary"): string {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-medium transition-colors",
    variantClasses[variant],
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({
  variant,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonClasses(variant), className)}
      {...props}
    />
  );
}
