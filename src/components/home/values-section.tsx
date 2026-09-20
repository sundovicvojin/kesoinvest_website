import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/motion/reveal";

export function ValuesSection() {
  const { values } = homeContent;

  return (
    <Section aria-labelledby="values-title">
      <Container width="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-36 lg:self-start">
            <Eyebrow>{values.eyebrow}</Eyebrow>
            <Heading className="mt-6 max-w-[11ch]" id="values-title" size="h2">
              {values.title}
            </Heading>
          </Reveal>

          <ol className="border-t border-border lg:col-span-6 lg:col-start-7">
            {values.items.map((item, index) => <li className="border-b border-border" key={item}><Reveal className="grid grid-cols-[2.75rem_1fr] gap-3 py-[clamp(1.7rem,3.5vw,3rem)] sm:grid-cols-[4rem_1fr]"><span className="type-label pt-1 text-muted" aria-hidden="true">0{index + 1}</span><p className="font-display text-[clamp(1.5rem,2.7vw,2.75rem)] leading-[1.08] tracking-[-0.03em]">{item}</p></Reveal></li>)}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
