"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/ui/container";
import { primaryNavigation } from "@/content/navigation";
import { classNames } from "@/lib/class-names";

const menuId = "site-mobile-navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = String(isMenuOpen);

    if (!isMenuOpen) {
      return () => {
        delete document.body.dataset.menuOpen;
      };
    }

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const focusFrame = window.requestAnimationFrame(() => focusable?.[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKeyDown);
      delete document.body.dataset.menuOpen;
    };
  }, [isMenuOpen]);

  useGSAP(
    () => {
      if (!isMenuOpen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        "[data-mobile-nav-item]",
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, duration: 0.7, ease: "power4.out", stagger: 0.07, y: 0 },
      );
    },
    { dependencies: [isMenuOpen], scope: menuRef },
  );

  const closeMenu = () => setIsMenuOpen(false);
  const isOverlayHeroState =
    (pathname === "/" || pathname === "/luma-residence/") && !isScrolled;

  return (
    <header
      className={classNames(
        "fixed z-50 transition-[inset,background-color,border-color,color,height,border-radius] duration-[var(--motion-normal)] ease-[var(--ease-premium)]",
        isMenuOpen
          ? "inset-x-0 top-0 h-[var(--header-height)] border-b border-white/15 bg-contrast text-contrast-foreground"
          : isScrolled
            ? "glass-floating inset-x-[var(--gutter)] top-3 h-[calc(var(--header-height)-0.75rem)] rounded-[var(--radius-medium)]"
            : classNames(
                "inset-x-0 top-0 h-[var(--header-height)] border-b border-transparent bg-transparent",
                isOverlayHeroState ? "text-white" : "text-foreground",
              ),
      )}
      data-menu-open={isMenuOpen}
      data-scrolled={isScrolled}
      ref={headerRef}
    >
      <Container
        className="relative z-10 flex h-full items-center justify-between gap-8"
        width="wide"
      >
        <BrandMark onClick={closeMenu} />

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-[clamp(1.5rem,2.5vw,3rem)]">
            {primaryNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className="rule-link type-nav flex min-h-11 items-center focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          className="relative z-10 grid size-12 place-items-center lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          <span className="sr-only">
            {isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          </span>
          <span className="relative block h-4 w-7" aria-hidden="true">
            <span
              className={classNames(
                "absolute left-0 top-1 block h-px w-7 bg-current transition-transform duration-200",
                isMenuOpen && "translate-y-1 rotate-45",
              )}
            />
            <span
              className={classNames(
                "absolute bottom-1 left-0 block h-px w-7 bg-current transition-transform duration-200",
                isMenuOpen && "-translate-y-1 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <div
        aria-hidden={!isMenuOpen}
        className={classNames(
          "fixed inset-0 z-0 bg-contrast pt-[var(--header-height)] text-contrast-foreground transition-[opacity,visibility] duration-[var(--motion-normal)] lg:hidden",
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
        id={menuId}
        inert={!isMenuOpen}
        ref={menuRef}
      >
        <Container className="flex h-full flex-col justify-between py-10" width="wide">
          <nav aria-label="Mobilna navigacija">
            <ul className="grid">
              {primaryNavigation.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li className="border-b border-white/15" data-mobile-nav-item key={item.href}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      className="group flex min-h-[4.75rem] items-center justify-between py-3 font-display text-[clamp(2.2rem,11vw,5rem)] leading-none tracking-[-0.045em] focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)]"
                      href={item.href}
                      onClick={closeMenu}
                    >
                      <span>{item.label}</span>
                      <span className="type-label text-white/45" aria-hidden="true">
                        0{index + 1}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            className="type-nav mt-10 inline-flex min-h-12 w-full items-center justify-center border border-accent bg-accent px-6 py-3 text-accent-foreground focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] sm:w-fit"
            href="/contact/"
            onClick={closeMenu}
          >
            Kontakt
          </Link>
        </Container>
      </div>
    </header>
  );
}
