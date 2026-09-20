import { RoutePlaceholder } from "@/components/ui/route-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function PrviSpratPage() {
  return <RoutePlaceholder route="/prvi-sprat/" title="Prvi sprat" />;
}
