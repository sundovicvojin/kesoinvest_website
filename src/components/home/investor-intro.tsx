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

export function InvestorIntro() {
  const { investor } = homeContent;

  return (
    <Section aria-labelledby="investor-title">
      <Container width="wide">
        <div className="grid items-start gap-[var(--space-content)] lg:grid-cols-12 lg:gap-[var(--space-grid)]">
          <Reveal className="lg:col-span-7 lg:pr-[clamp(1rem,4vw,4rem)]">
            <Eyebrow>{investor.eyebrow}</Eyebrow>
            <Heading
              className="mt-6 max-w-[10ch]"
              id="investor-title"
              size="h2"
            >
              {investor.title}
            </Heading>
            <p className="type-body-large mt-[var(--space-content)] max-w-2xl text-muted">
              {investor.body}
            </p>
            <TextLink className="mt-7" href={investor.cta.href}>
              {investor.cta.label}
            </TextLink>
          </Reveal>

          <ImageReveal className="mt-4 lg:col-span-4 lg:col-start-9 lg:mt-[clamp(4rem,10vw,9rem)]">
            <ResponsiveMedia className="media-zoom" ratio="portrait">
              <Image alt={investor.image.alt} fill sizes="(max-width: 1023px) calc(100vw - 2.5rem), 30vw" src={investor.image.src} />
            </ResponsiveMedia>
          </ImageReveal>
        </div>
      </Container>
    </Section>
  );
}
