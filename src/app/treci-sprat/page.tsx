import { RoutePlaceholder } from "@/components/ui/route-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function TreciSpratPage() {
  return <RoutePlaceholder route="/treci-sprat/" title="Treći sprat" />;
}
