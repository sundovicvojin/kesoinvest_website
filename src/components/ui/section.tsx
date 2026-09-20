import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type SectionSpacing = "default" | "compact" | "none";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-[var(--space-section)]",
  compact: "py-[var(--space-section-compact)]",
  none: "",
};

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  spacing = "default",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={classNames(spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
