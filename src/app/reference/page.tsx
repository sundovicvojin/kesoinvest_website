import { ContactCta } from "@/components/home/contact-cta";
import { CorporateHero } from "@/components/corporate/corporate-hero";
import { ReferenceProjects } from "@/components/corporate/reference-projects";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { referencePageContent } from "@/content/corporate";
import { Reveal } from "@/components/motion/reveal";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({ title: "Reference", description: "Realizovani projekti kompanije KESO INVEST u Novom Sadu.", path: "/reference/", image: "/images/references/keso-invest-references-hero.png" });

export default function ReferencePage() {
  const { hero, approach } = referencePageContent;

  return (
    <>
      <CorporateHero {...hero} />

      <Section
        aria-labelledby="reference-approach-title"
        className="bg-contrast text-contrast-foreground"
      >
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
            <Reveal className="lg:col-span-7">
              <Eyebrow className="text-white/55">{approach.eyebrow}</Eyebrow>
              <Heading
                className="mt-6 max-w-[12ch] text-white"
                id="reference-approach-title"
                size="h2"
              >
                {approach.title}
              </Heading>
            </Reveal>
            <Reveal className="grid gap-6 lg:col-span-4 lg:col-start-9 lg:pt-12">
              {approach.paragraphs.map((paragraph) => (
                <p className="type-body text-white/68" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <ReferenceProjects />
      <ContactCta />
    </>
  );
}
