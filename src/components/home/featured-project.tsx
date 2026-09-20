import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";

export function FeaturedProject() {
  const { featuredProject } = homeContent;

  return (
    <Section
      aria-labelledby="featured-project-title"
      className="bg-contrast text-contrast-foreground"
    >
      <Container className="relative" width="wide">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-[var(--space-grid)]">
          <Reveal className="lg:col-span-8">
            <Eyebrow className="text-white/60">
              {featuredProject.eyebrow}
            </Eyebrow>
            <Heading
              className="mt-6 text-white"
              id="featured-project-title"
              size="h1"
            >
              {featuredProject.title}
            </Heading>
          </Reveal>
          <p className="type-label max-w-sm text-white/60 lg:col-span-3 lg:col-start-10 lg:pb-2">
            {featuredProject.location}
          </p>
        </div>

        <ImageReveal className="mt-[clamp(2rem,5vw,4.5rem)]">
          <ResponsiveMedia className="media-zoom bg-black/20 lg:aspect-[2/1]" ratio="cinematic">
            <Image alt={featuredProject.image.alt} className="object-center" fill quality={90} sizes="(max-width: 1536px) 100vw, 1536px" src={featuredProject.image.src} />
          </ResponsiveMedia>
          <div className="glass-dark absolute bottom-5 left-5 hidden max-w-xs rounded-[var(--radius-small)] px-5 py-4 md:block">
            <p className="type-label text-white/55">Lokacija</p>
            <p className="type-small mt-2 text-white/85">{featuredProject.location}</p>
          </div>
        </ImageReveal>

        <div className="mt-[var(--space-content)] grid gap-8 border-t border-white/15 pt-[var(--space-content)] lg:grid-cols-12">
          <p className="type-body-large max-w-3xl text-white/72 lg:col-span-7">
            {featuredProject.body}
          </p>
          <div className="lg:col-span-4 lg:col-start-9">
            <TextLink
              className="text-white decoration-white/30 hover:decoration-white"
              href={featuredProject.cta.href}
            >
              {featuredProject.cta.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
