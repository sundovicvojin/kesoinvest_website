import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { lumaPageContent } from "@/content/luma";
import { Reveal } from "@/components/motion/reveal";

export function ProjectFacts() {
  const { facts } = lumaPageContent;

  return (
    <Section
      aria-labelledby="luma-facts-title"
      className="bg-contrast text-contrast-foreground"
    >
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-36 lg:self-start">
            <Eyebrow className="text-white/55">{facts.eyebrow}</Eyebrow>
            <Heading
              className="mt-6 max-w-[11ch] text-white"
              id="luma-facts-title"
              size="h2"
            >
              {facts.title}
            </Heading>
          </Reveal>

          <dl className="border-t border-white/15 lg:col-span-6 lg:col-start-7">
            {facts.items.map((fact) => <div className="border-b border-white/15" key={fact.label}><Reveal className="grid gap-2 py-[clamp(1.4rem,3vw,2.5rem)] sm:grid-cols-[10rem_1fr] sm:gap-6"><dt className="type-label text-white/50">{fact.label}</dt><dd className="font-display text-[clamp(1.35rem,2.2vw,2.15rem)] leading-[1.12] tracking-[-0.02em] text-white">{fact.value}</dd></Reveal></div>)}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
