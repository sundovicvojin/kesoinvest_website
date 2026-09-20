import Link from "next/link";

import { classNames } from "@/lib/class-names";

type BrandMarkProps = {
  className?: string;
  onClick?: () => void;
};

export function BrandMark({ className, onClick }: BrandMarkProps) {
  // TODO(content): Replace the typographic fallback with the approved KESO SVG.
  return (
    <Link
      aria-label="KESO INVEST — početna"
      className={classNames(
        "inline-flex min-h-11 items-center text-[0.875rem] font-semibold tracking-[0.22em] uppercase",
        className,
      )}
      href="/"
      onClick={onClick}
    >
      KESO INVEST
    </Link>
  );
}
