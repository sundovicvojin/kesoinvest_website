import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { Section } from "@/components/ui/section";
import { lumaPageContent } from "@/content/luma";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";

export function ProjectIntro() {
  const { intro } = lumaPageContent;

  return (
    <Section aria-labelledby="luma-intro-title">
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <Heading className="mt-6 max-w-[10ch]" id="luma-intro-title" size="h2">
              {intro.title}
            </Heading>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <p className="type-body-large max-w-2xl text-muted">{intro.body}</p>
          </Reveal>
        </div>

        <ImageReveal className="mt-[clamp(3rem,7vw,7rem)]"><ResponsiveMedia className="media-zoom lg:aspect-[2/1]" ratio="cinematic">
          <Image
            alt={intro.image.alt}
            className="object-center"
            fill
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={intro.image.src}
          />
        </ResponsiveMedia></ImageReveal>
      </Container>
    </Section>
  );
}
