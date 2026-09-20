import type { HTMLAttributes, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function Eyebrow({ children, className, ...props }: EyebrowProps) {
  return (
    <p
      className={classNames(
        "type-label flex items-center gap-3 text-muted before:h-px before:w-8 before:bg-current",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
