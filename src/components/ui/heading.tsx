import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type HeadingSize = "display" | "h1" | "h2" | "h3";

type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: HeadingSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const sizeClasses: Record<HeadingSize, string> = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
};

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  size = "h2",
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={classNames(sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
