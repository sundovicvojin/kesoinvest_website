"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { classNames } from "@/lib/class-names";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(root.current, { clipPath: "inset(0 0 100% 0)" }, {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.35,
        ease: "power4.inOut",
        scrollTrigger: { trigger: root.current, start: "top 86%", once: true },
      });
    },
    { scope: root },
  );

  return <div className={classNames("relative overflow-hidden", className)} ref={root}>{children}</div>;
}
