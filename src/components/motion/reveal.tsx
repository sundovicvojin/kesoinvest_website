"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { classNames } from "@/lib/class-names";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, once = true }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        root.current,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          delay,
          duration: 1.15,
          ease: "power4.out",
          y: 0,
          scrollTrigger: {
            trigger: root.current,
            start: "top 88%",
            once,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <div className={classNames(className)} data-reveal ref={root}>
      {children}
    </div>
  );
}
