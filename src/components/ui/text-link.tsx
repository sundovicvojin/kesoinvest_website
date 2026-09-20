import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type TextLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
};

export function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <Link
      className={classNames(
        "rule-link type-nav group inline-flex min-h-11 items-center gap-3 py-2 focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" />
      </svg>
    </Link>
  );
}
