import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { homeContent } from "@/content/home";
import { confirmedContact } from "@/content/site-shell";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  const { contact } = homeContent;

  return (
    <Section
      aria-labelledby="contact-cta-title"
      className="relative overflow-hidden bg-accent text-accent-foreground"
    >
      <Container width="wide">
        <Reveal><Eyebrow className="text-accent-foreground/65">
          {contact.eyebrow}
        </Eyebrow></Reveal>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-[var(--space-grid)]">
          <Heading
            className="max-w-[13ch] lg:col-span-8"
            id="contact-cta-title"
            size="h2"
          >
            {contact.title}
          </Heading>
          <div className="lg:col-span-4">
            <address className="type-body not-italic text-accent-foreground/75">
              <a className="block w-fit hover:underline" href={confirmedContact.mobileHref}>
                {confirmedContact.mobileDisplay}
              </a>
              <a
                className="mt-1 block w-fit break-all hover:underline"
                href={`mailto:${confirmedContact.email}`}
              >
                {confirmedContact.email}
              </a>
            </address>
            <Button
              className="mt-7 w-full sm:w-auto"
              href={contact.cta.href}
              variant="accentContrast"
            >
              {contact.cta.label}
            </Button>
          </div>
        </div>
      </Container>
      <p aria-hidden="true" className="type-monumental absolute -bottom-5 right-0 translate-x-[18%] text-accent-foreground/[0.055]">KESO</p>
    </Section>
  );
}
