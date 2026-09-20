import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import { classNames } from "@/lib/class-names";
import { HeroMotion } from "@/components/motion/hero-motion";

type CorporateHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
  layout?: "wide" | "split";
};

export function CorporateHero({
  eyebrow,
  title,
  body,
  image,
  layout = "wide",
}: CorporateHeroProps) {
  const isSplit = layout === "split";

  return (
    <HeroMotion>
    <section aria-labelledby="corporate-hero-title" className="relative overflow-hidden pb-[var(--space-section)] pt-[calc(var(--header-height)+var(--space-section-compact))]">
      <Container className="relative" width="wide">
        <div
          className={classNames(
            "grid gap-[var(--space-content)]",
            isSplit
              ? "lg:grid-cols-12 lg:items-end lg:gap-[var(--space-grid)]"
              : "lg:grid-cols-12 lg:gap-[var(--space-grid)]",
          )}
        >
          <div className={isSplit ? "lg:col-span-7" : "lg:col-span-9"}>
            <Eyebrow data-hero-kicker>{eyebrow}</Eyebrow>
            <div className="overflow-hidden pb-2">
            <Heading
              as="h1"
              className="mt-6 max-w-[12ch]"
              data-hero-title
              id="corporate-hero-title"
              size="h1"
            >
              {title}
            </Heading>
            </div>
          </div>
          <p
            data-hero-meta
            className={classNames(
              "type-body-large max-w-2xl text-muted",
              isSplit
                ? "lg:col-span-4 lg:col-start-9 lg:pb-2"
                : "lg:col-span-4 lg:col-start-9",
            )}
          >
            {body}
          </p>
        </div>

        <ResponsiveMedia
          className={classNames(
            "media-zoom mt-[clamp(2.5rem,6vw,6rem)]",
            isSplit && "lg:ml-[8.333%] lg:w-5/6",
          )}
          ratio={isSplit ? "landscape" : "cinematic"}
        >
          <Image
            alt={image.alt}
            className="object-center"
            data-hero-image
            fill
            priority
            sizes={
              isSplit
                ? "(max-width: 1023px) 100vw, 64vw"
                : "(max-width: 1536px) 100vw, 1536px"
            }
            src={image.src}
          />
        </ResponsiveMedia>
      </Container>
    </section>
    </HeroMotion>
  );
}
