import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { lumaPageContent } from "@/content/luma";
import { HeroMotion } from "@/components/motion/hero-motion";

export function ProjectHero() {
  const { hero } = lumaPageContent;

  return (
    <HeroMotion><section
      aria-labelledby="luma-hero-title"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-contrast text-contrast-foreground"
    >
      <Image
        alt={hero.image.alt}
        className="-z-20 object-cover object-[68%_center] sm:object-center"
        data-hero-image
        fill
        priority
        sizes="100vw"
        src={hero.image.src}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,24,22,0.82)_0%,rgba(12,24,22,0.5)_45%,rgba(12,24,22,0.12)_82%)]"
      />

      <Container
        className="flex min-h-[100svh] flex-col justify-end pb-[clamp(3rem,8vw,7rem)] pt-[calc(var(--header-height)+3rem)]"
        width="wide"
      >
        <p className="type-label text-white/65" data-hero-kicker>{hero.eyebrow}</p>
        <div className="overflow-hidden pb-3"><Heading
          as="h1"
          className="mt-5 max-w-[12ch] text-white"
          data-hero-title
          id="luma-hero-title"
          size="display"
        >
          {hero.title}
        </Heading></div>

        <div className="mt-[clamp(2rem,5vw,4.5rem)] grid gap-4 border-t border-white/30 pt-5 sm:grid-cols-2 sm:items-end" data-hero-meta>
          <p className="font-display text-[clamp(1.5rem,2.6vw,2.5rem)] leading-none tracking-[-0.02em]">
            {hero.descriptor}
          </p>
          <p className="type-label max-w-sm text-white/65 sm:justify-self-end sm:text-right">
            {hero.location}
          </p>
        </div>
      </Container>
    </section></HeroMotion>
  );
}
