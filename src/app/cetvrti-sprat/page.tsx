import { RoutePlaceholder } from "@/components/ui/route-placeholder";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function CetvrtiSpratPage() {
  return <RoutePlaceholder route="/cetvrti-sprat/" title="Četvrti sprat" />;
}
