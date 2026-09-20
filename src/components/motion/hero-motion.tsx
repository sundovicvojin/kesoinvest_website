"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { classNames } from "@/lib/class-names";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HeroMotion({ children, className }: { children: React.ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      timeline
        .from("[data-hero-kicker]", { autoAlpha: 0, y: 18, duration: 0.8 })
        .from("[data-hero-title]", { autoAlpha: 0, yPercent: 105, duration: 1.25 }, "-=0.45")
        .from("[data-hero-meta]", { autoAlpha: 0, y: 28, duration: 0.85 }, "-=0.65");

      const image = root.current?.querySelector("[data-hero-image]");
      if (image) {
        gsap.fromTo(image, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: "power3.out" });
        gsap.to(image, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    },
    { scope: root },
  );

  return <div className={classNames("contents", className)} ref={root}>{children}</div>;
}
