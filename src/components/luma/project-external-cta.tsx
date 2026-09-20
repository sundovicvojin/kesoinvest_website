import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { LUMA_PROJECT_URL } from "@/config/project-links";
import { lumaPageContent } from "@/content/luma";
import { Reveal } from "@/components/motion/reveal";

export function ProjectExternalCta() {
  const { externalCta } = lumaPageContent;

  return (
    <Section
      aria-labelledby="luma-external-cta-title"
      className="relative overflow-hidden bg-accent text-accent-foreground"
    >
      <Container width="wide">
        <Reveal><Eyebrow className="text-accent-foreground/65">
          {externalCta.eyebrow}
        </Eyebrow></Reveal>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-[var(--space-grid)]">
          <Heading
            className="max-w-[12ch] lg:col-span-8"
            id="luma-external-cta-title"
            size="h2"
          >
            {externalCta.title}
          </Heading>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            {LUMA_PROJECT_URL ? (
              <Button
                className="w-full sm:w-auto"
                href={LUMA_PROJECT_URL}
                variant="accentContrast"
              >
                {externalCta.label}
              </Button>
            ) : (
              <Button
                className="w-full sm:w-auto"
                disabled
                type="button"
                variant="accentContrast"
              >
                {externalCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
      <p aria-hidden="true" className="type-monumental absolute -bottom-4 right-0 translate-x-[12%] text-accent-foreground/[0.055]">LUMA</p>
    </Section>
  );
}
