import { AboutGallery } from "@/components/corporate/about-gallery";
import { CorporateHero } from "@/components/corporate/corporate-hero";
import { ContactCta } from "@/components/home/contact-cta";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { aboutPageContent } from "@/content/corporate";
import { Reveal } from "@/components/motion/reveal";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({ title: "O investitoru", description: "Upoznajte pristup i vrednosti kompanije KESO INVEST.", path: "/o-investitoru/", image: "/images/corporate/keso-invest-about-hero.png" });

export default function OInvestitoruPage() {
  const { hero, philosophy } = aboutPageContent;

  return (
    <>
      <CorporateHero {...hero} layout="split" />

      <Section aria-labelledby="philosophy-title" className="bg-contrast text-contrast-foreground">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
            <Reveal className="lg:col-span-4">
              <Eyebrow className="text-white/55">{philosophy.eyebrow}</Eyebrow>
              <Heading
                className="mt-6 text-white"
                id="philosophy-title"
                size="h2"
              >
                {philosophy.title}
              </Heading>
            </Reveal>
            <Reveal className="lg:col-span-7 lg:col-start-6">
              <p className="font-display text-[clamp(1.75rem,3.5vw,3.75rem)] leading-[1.08] tracking-[-0.025em] text-white">
                {philosophy.paragraphs[0]}
              </p>
              <div className="mt-[clamp(2rem,5vw,4.5rem)] grid gap-6 border-t border-white/15 pt-[var(--space-content)] md:grid-cols-2">
                {philosophy.paragraphs.slice(1).map((paragraph) => (
                  <p className="type-body text-white/68" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <AboutGallery />
      <ContactCta />
    </>
  );
}
