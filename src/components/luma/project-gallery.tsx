import Image from "next/image";

import { Container } from "@/components/ui/container";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { Section } from "@/components/ui/section";
import { lumaPageContent } from "@/content/luma";
import { ImageReveal } from "@/components/motion/image-reveal";

export function ProjectGallery() {
  const { gallery } = lumaPageContent;

  return (
    <Section aria-label="Luma Residence galerija" className="bg-surface">
      <Container width="wide">
        <ImageReveal><ResponsiveMedia className="media-zoom lg:aspect-[2/1]" ratio="cinematic">
          <Image
            alt={gallery[0].alt}
            fill
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={gallery[0].src}
          />
        </ResponsiveMedia></ImageReveal>

        <div className="mt-[var(--space-grid)] grid gap-[var(--space-grid)] md:grid-cols-2">
          {gallery.slice(1).map((image) => (
            <ImageReveal key={image.src}><ResponsiveMedia className="media-zoom" ratio="landscape">
              <Image
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                src={image.src}
              />
            </ResponsiveMedia></ImageReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
