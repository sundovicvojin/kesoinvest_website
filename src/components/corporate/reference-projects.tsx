import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { referencePageContent } from "@/content/corporate";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";

export function ReferenceProjects() {
  const { projects } = referencePageContent;

  return (
    <Section aria-labelledby="reference-projects-title">
      <Container width="wide">
        <Reveal><Eyebrow>{projects.eyebrow}</Eyebrow><Heading className="mt-6" id="reference-projects-title" size="h2">{projects.title}</Heading></Reveal>

        <div className="mt-[clamp(3rem,7vw,7rem)] border-t border-border">
          {projects.items.map((project, index) => (
            <article
              className="grid min-h-[70vh] gap-7 border-b border-border py-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-12 lg:items-center lg:gap-[var(--space-grid)]"
              key={project.title}
            >
              <ImageReveal
                className={
                  index % 2 === 0
                    ? "lg:col-span-7"
                    : "lg:order-2 lg:col-span-7 lg:col-start-6"
                }
              >
                <ResponsiveMedia className="media-zoom lg:aspect-[16/10]" ratio="landscape"><Image alt={project.image.alt} fill sizes="(max-width: 1023px) 100vw, 57vw" src={project.image.src} /></ResponsiveMedia>
              </ImageReveal>

              <Reveal
                className={
                  index % 2 === 0
                    ? "lg:col-span-4 lg:col-start-9"
                    : "lg:order-1 lg:col-span-4 lg:col-start-1 lg:row-start-1"
                }
              >
                <p className="type-label text-muted">{project.status}</p>
                <Heading as="h3" className="mt-4" size="h3">
                  {project.title}
                </Heading>
                <p className="type-body mt-4 max-w-sm text-muted">
                  {project.location}
                </p>
                {project.href ? (
                  <TextLink className="mt-7" href={project.href}>
                    Luma Residence
                  </TextLink>
                ) : null}
              </Reveal>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
