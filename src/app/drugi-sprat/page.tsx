import { RoutePlaceholder } from "@/components/ui/route-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function DrugiSpratPage() {
  return <RoutePlaceholder route="/drugi-sprat/" title="Drugi sprat" />;
}
