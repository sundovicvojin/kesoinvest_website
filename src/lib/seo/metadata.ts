import type { Metadata } from "next";

export const siteUrl = new URL("https://kesoinvest.com");

export const rootMetadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "KESO INVEST",
  title: {
    default: "KESO INVEST — investitor i gradnja u Novom Sadu",
    template: "%s | KESO INVEST",
  },
  description:
    "KESO INVEST — savremeni stambeni i poslovni projekti u Novom Sadu, sa fokusom na kvalitet gradnje, sigurnost i dugoročnu vrednost.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "KESO INVEST",
    title: "KESO INVEST — investitor i gradnja u Novom Sadu",
    description: "Savremeni stambeni i poslovni projekti u Novom Sadu.",
    url: "/",
    images: [{ url: "/images/home/luma-residence-hero.jpg", width: 1920, height: 980, alt: "Luma Residence stambeno-poslovni kompleks" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export function createPageMetadata({ title, description, path, image = "/images/home/luma-residence-hero.jpg" }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: image }] },
  };
}
