import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { homeContent } from "@/content/home";
import { classNames } from "@/lib/class-names";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";

const positions = [
  "lg:col-span-5",
  "lg:col-span-5 lg:col-start-8 lg:mt-[clamp(5rem,12vw,11rem)]",
  "lg:col-span-6 lg:col-start-3 lg:mt-[clamp(3rem,8vw,8rem)]",
] as const;

export function ReferencesPreview() {
  const { references } = homeContent;

  return (
    <Section aria-labelledby="references-title" className="bg-surface">
      <Container width="wide">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-[var(--space-grid)]">
          <Reveal className="lg:col-span-8">
            <Eyebrow>{references.eyebrow}</Eyebrow>
            <Heading
              className="mt-6 max-w-[13ch]"
              id="references-title"
              size="h2"
            >
              {references.title}
            </Heading>
          </Reveal>
          <div className="lg:col-span-4">
            <p className="type-body text-muted">{references.body}</p>
            <TextLink className="mt-5" href={references.cta.href}>
              {references.cta.label}
            </TextLink>
          </div>
        </div>

        <div className="mt-[clamp(3rem,7vw,7rem)] grid gap-12 lg:grid-cols-12 lg:gap-x-[var(--space-grid)] lg:gap-y-0">
          {references.items.map((project, index) => (
            <article
              className={classNames(positions[index])}
              key={project.image.src}
            >
              <ImageReveal>
                <ResponsiveMedia className={classNames("media-zoom bg-surface-strong", index === 2 && "lg:aspect-[16/10]")} ratio="landscape">
                  <Image alt={project.image.alt} fill sizes="(max-width: 1023px) calc(100vw - 2 * var(--gutter)), 44vw" src={project.image.src} />
                </ResponsiveMedia>
              </ImageReveal>
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                {project.title ? (
                  <Heading as="h3" size="h3">
                    {project.title}
                  </Heading>
                ) : (
                  <span className="type-label text-muted" aria-hidden="true">
                    0{index + 1}
                  </span>
                )}
                <span className="type-label shrink-0 text-muted">
                  {project.location}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
