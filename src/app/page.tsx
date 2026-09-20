import { ContactCta } from "@/components/home/contact-cta";
import { FeaturedProject } from "@/components/home/featured-project";
import { HomeHero } from "@/components/home/home-hero";
import { InvestorIntro } from "@/components/home/investor-intro";
import { ReferencesPreview } from "@/components/home/references-preview";
import { ValuesSection } from "@/components/home/values-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <InvestorIntro />
      <FeaturedProject />
      <ValuesSection />
      <ReferencesPreview />
      <ContactCta />
    </>
  );
}
