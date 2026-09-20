import { ProjectExternalCta } from "@/components/luma/project-external-cta";
import { ProjectFacts } from "@/components/luma/project-facts";
import { ProjectGallery } from "@/components/luma/project-gallery";
import { ProjectHero } from "@/components/luma/project-hero";
import { ProjectIntro } from "@/components/luma/project-intro";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Luma Residence",
  description: "Luma Residence je moderan stambeno-poslovni kompleks u Novom Sadu, trenutno u fazi izgradnje.",
  path: "/luma-residence/",
});

export default function LumaResidencePage() {
  return (
    <>
      <ProjectHero />
      <ProjectIntro />
      <ProjectFacts />
      <ProjectGallery />
      <ProjectExternalCta />
    </>
  );
}
