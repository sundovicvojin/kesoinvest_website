import type { HTMLAttributes, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type ResponsiveMediaProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  ratio?: "landscape" | "portrait" | "square" | "cinematic";
};

const ratios = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  cinematic: "aspect-[16/9]",
};

export function ResponsiveMedia({
  children,
  className,
  ratio = "landscape",
  ...props
}: ResponsiveMediaProps) {
  return (
    <div
      className={classNames(
        "relative overflow-hidden bg-surface [&_img]:size-full [&_img]:object-cover [&_video]:size-full [&_video]:object-cover",
        ratios[ratio],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
