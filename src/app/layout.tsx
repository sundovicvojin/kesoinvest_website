import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { fontClassName } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo/metadata";
import "@/styles/globals.css";
import { confirmedContact } from "@/content/site-shell";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn">
      <body className={fontClassName}>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KESO INVEST",
              url: "https://kesoinvest.com",
              email: confirmedContact.email,
              telephone: confirmedContact.mobileDisplay,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Danila Kiša 14a",
                addressLocality: "Novi Sad",
                addressCountry: "RS",
              },
            }).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <MotionProvider>
          <a className="skip-link" href="#main-content">
            Preskoči na sadržaj
          </a>
          <SiteHeader />
          <main className="site-main" id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
          <div aria-hidden="true" className="page-noise" />
        </MotionProvider>
      </body>
    </html>
  );
}
