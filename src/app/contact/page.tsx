import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { contactPageContent } from "@/content/contact";
import { confirmedContact } from "@/content/site-shell";
import { Reveal } from "@/components/motion/reveal";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({ title: "Kontakt", description: "Kontaktirajte KESO INVEST u Novom Sadu i pošaljite upit.", path: "/contact/" });

export default function ContactPage() {
  return (
    <>
      <section
        aria-labelledby="contact-page-title"
        className="relative overflow-hidden pb-[var(--space-section)] pt-[calc(var(--header-height)+var(--space-section-compact))]"
      >
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
            <Reveal className="lg:col-span-8">
              <Eyebrow>{contactPageContent.eyebrow}</Eyebrow>
              <Heading
                as="h1"
                className="mt-6 max-w-[13ch]"
                id="contact-page-title"
                size="h1"
              >
                {contactPageContent.title}
              </Heading>
            </Reveal>

            <address className="glass grid content-end gap-5 rounded-[var(--radius-medium)] p-6 not-italic lg:col-span-3 lg:col-start-10 lg:p-8">
              <div>
                <p className="type-label mb-2 text-muted">Adresa</p>
                <p className="type-body">{confirmedContact.address}</p>
              </div>
              <div>
                <p className="type-label mb-2 text-muted">Telefon</p>
                <a
                  className="type-body underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  href={confirmedContact.mobileHref}
                >
                  {confirmedContact.mobileDisplay}
                </a>
              </div>
              <div>
                <p className="type-label mb-2 text-muted">E-mail</p>
                <a
                  className="type-body break-all underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  href={`mailto:${confirmedContact.email}`}
                >
                  {confirmedContact.email}
                </a>
              </div>
            </address>
          </div>
          <p aria-hidden="true" className="type-monumental mt-[clamp(4rem,9vw,9rem)] whitespace-nowrap text-foreground/[0.055]">KONTAKT</p>
        </Container>
      </section>

      <Section aria-labelledby="contact-form-title" className="bg-contrast text-contrast-foreground">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-[var(--space-grid)]">
            <div className="lg:col-span-4">
              <Eyebrow className="text-white/50">{contactPageContent.eyebrow}</Eyebrow>
              <Heading className="mt-6 text-white" id="contact-form-title" size="h2">
                {contactPageContent.form.title}
              </Heading>
            </div>
            <div className="glass-dark rounded-[var(--radius-medium)] p-[clamp(1.25rem,4vw,3.5rem)] lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
