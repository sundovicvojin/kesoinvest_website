import { Manrope, Newsreader } from "next/font/google";

const sans = Manrope({
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const display = Newsreader({
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

/**
 * Replace these two declarations with approved `next/font/local` files when
 * the final licensed brand fonts arrive. Consumers only depend on this class.
 */
export const fontClassName = `${sans.variable} ${display.variable}`;
