import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/ui/container";
import { confirmedContact } from "@/content/site-shell";
import { primaryNavigation } from "@/content/navigation";
import { Reveal } from "@/components/motion/reveal";

export function SiteFooter() {
  return (
    <footer className="bg-contrast text-contrast-foreground">
      <Container className="py-[var(--space-section-compact)]" width="wide">
        <Reveal className="grid gap-16 border-b border-white/15 pb-16 md:grid-cols-12 md:gap-8 lg:pb-24">
          <div className="md:col-span-5 lg:col-span-6">
            <BrandMark className="text-accent" />
            <p className="mt-8 max-w-sm font-display text-[clamp(2rem,4vw,4rem)] leading-[0.98] tracking-[-0.035em]">
              Gradimo poverenje, ne samo kvadrate.
            </p>
          </div>

          <nav
            aria-label="Navigacija u podnožju"
            className="md:col-span-3 lg:col-span-2"
          >
            <p className="type-label mb-5 text-white/45">Navigacija</p>
            <ul className="grid gap-1">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="type-label mb-5 text-white/45">Kontakt</p>
            <address className="grid gap-2 text-sm leading-relaxed not-italic">
              <p>{confirmedContact.address}</p>
              <a
                className="w-fit transition-colors hover:text-accent focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
                href={confirmedContact.mobileHref}
              >
                {confirmedContact.mobileDisplay}
              </a>
              <a
                className="w-fit break-all transition-colors hover:text-accent focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
                href={`mailto:${confirmedContact.email}`}
              >
                {confirmedContact.email}
              </a>
            </address>
            {/* TODO(content): Add the confirmed landline and legal links only after client approval. */}
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 pt-8 text-xs tracking-[0.06em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KESO INVEST</p>
        </div>

        <p
          aria-hidden="true"
          className="type-monumental mt-16 overflow-hidden whitespace-nowrap text-white/[0.055]"
        >
          KESO INVEST
        </p>
      </Container>
    </footer>
  );
}
