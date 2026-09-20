import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type ContainerWidth = "standard" | "narrow" | "wide" | "full";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  width?: ContainerWidth;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const widths: Record<ContainerWidth, string> = {
  standard: "max-w-[var(--container-standard)]",
  narrow: "max-w-[var(--container-narrow)]",
  wide: "max-w-[var(--container-wide)]",
  full: "max-w-none",
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  width = "standard",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={classNames(
        "mx-auto w-full px-[var(--gutter)]",
        widths[width],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
