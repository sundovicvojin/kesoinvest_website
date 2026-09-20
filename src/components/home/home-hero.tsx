import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";
import { HeroMotion } from "@/components/motion/hero-motion";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <HeroMotion>
      <section
        aria-labelledby="home-hero-title"
        className="relative isolate flex min-h-[100svh] overflow-hidden bg-contrast text-contrast-foreground"
      >
        <Image
          alt={hero.image.alt}
          className="-z-20 object-cover object-[64%_center] will-change-transform sm:object-center"
          data-hero-image
          fill
          priority
          quality={92}
          sizes="100vw"
          src={hero.image.src}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,13,10,0.82)_0%,rgba(10,13,10,0.44)_48%,rgba(10,13,10,0.12)_78%),linear-gradient(0deg,rgba(10,13,10,0.58)_0%,transparent_55%)]" />

        <Container className="flex min-h-[100svh] flex-col justify-end pb-[clamp(2rem,6vw,5rem)] pt-[calc(var(--header-height)+4rem)]" width="wide">
          <p className="type-label mb-5 text-white/70" data-hero-kicker>{hero.eyebrow}</p>
          <div className="overflow-hidden pb-3">
            <h1 className="type-display max-w-[10ch] text-white" data-hero-title id="home-hero-title">
              {hero.title}
            </h1>
          </div>

          <div className="mt-[clamp(1.5rem,4vw,3.5rem)] grid gap-5 border-t border-white/30 pt-5 sm:grid-cols-[1fr_auto] sm:items-end" data-hero-meta>
            <div>
              <p className="type-label mb-2 text-white/55">Aktuelni projekat</p>
              <p className="font-display text-[clamp(1.6rem,3vw,3rem)] leading-none tracking-[-0.03em]">{hero.project}</p>
            </div>
            <Button className="w-full sm:w-auto sm:min-w-48" href={hero.cta.href} variant="inverse">{hero.cta.label}</Button>
          </div>
        </Container>

        <p aria-hidden="true" className="type-label absolute bottom-7 right-[var(--gutter)] hidden origin-right rotate-90 text-white/50 xl:block">Scroll</p>
      </section>
    </HeroMotion>
  );
}
