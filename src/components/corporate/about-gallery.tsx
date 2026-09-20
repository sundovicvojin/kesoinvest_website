import Image from "next/image";

import { Container } from "@/components/ui/container";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { Section } from "@/components/ui/section";
import { aboutPageContent } from "@/content/corporate";
import { ImageReveal } from "@/components/motion/image-reveal";

export function AboutGallery() {
  const { gallery } = aboutPageContent;

  return (
    <Section aria-label="KESO INVEST galerija" className="bg-surface">
      <Container width="wide">
        <div className="grid grid-cols-2 gap-[var(--space-grid)] lg:grid-cols-12">
          <ImageReveal className="col-span-2 lg:col-span-5"><ResponsiveMedia className="media-zoom" ratio="square">
            <Image
              alt={gallery[0].alt}
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              src={gallery[0].src}
            />
          </ResponsiveMedia></ImageReveal>
          <ImageReveal className="col-span-1 mt-[clamp(2rem,8vw,8rem)] lg:col-span-3 lg:col-start-7"><ResponsiveMedia className="media-zoom" ratio="portrait">
            <Image
              alt={gallery[1].alt}
              fill
              sizes="(max-width: 1023px) 48vw, 24vw"
              src={gallery[1].src}
            />
          </ResponsiveMedia></ImageReveal>
          <ImageReveal className="col-span-1 lg:col-span-3 lg:col-start-10"><ResponsiveMedia className="media-zoom" ratio="portrait">
            <Image
              alt={gallery[2].alt}
              fill
              sizes="(max-width: 1023px) 48vw, 24vw"
              src={gallery[2].src}
            />
          </ResponsiveMedia></ImageReveal>
          <ImageReveal className="col-span-2 lg:col-span-7 lg:col-start-3 lg:mt-[clamp(2rem,6vw,6rem)]"><ResponsiveMedia className="media-zoom" ratio="cinematic">
            <Image
              alt={gallery[3].alt}
              fill
              sizes="(max-width: 1023px) 100vw, 48vw"
              src={gallery[3].src}
            />
          </ResponsiveMedia></ImageReveal>
        </div>
      </Container>
    </Section>
  );
}
