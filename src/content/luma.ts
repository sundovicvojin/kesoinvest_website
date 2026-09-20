export const lumaPageContent = {
  hero: {
    eyebrow: "U fazi izgradnje",
    title: "Luma Residence",
    descriptor: "Život kakav zaslužujete",
    location: "Ugao ulica Oblačića Rada i Boška Vrebalova, Novi Sad",
    image: {
      src: "/images/home/luma-residence-hero.jpg",
      alt: "Luma Residence stambeno-poslovni kompleks",
    },
  },
  intro: {
    eyebrow: "Luma Residence",
    title: "Život kakav zaslužujete",
    body: "Luma Residence je moderan stambeno–poslovni kompleks koji se gradi na uglu ulica Oblačića Rada i Boška Vrebalova. Osmišljen kao mesto za kvalitetan život, sa funkcionalnim stanovima, modernim poslovnim prostorima, podzemnom garažom i okruženjem koje pruža mir, sigurnost i dobru povezanost sa gradom.",
    image: {
      src: "/images/luma/luma-residence-building-selector.png",
      alt: "Luma Residence — prikaz objekta",
    },
  },
  facts: {
    eyebrow: "Luma Residence",
    title: "Osnovne informacije",
    items: [
      {
        label: "Lokacija",
        value: "Ugao ulica Oblačića Rada i Boška Vrebalova, Novi Sad",
      },
      {
        label: "Tip projekta",
        value: "Stambeno-poslovni kompleks",
      },
      {
        label: "Status projekta",
        value: "U fazi izgradnje",
      },
      {
        label: "Realizacija",
        value: "Dve faze",
      },
    ],
  },
  gallery: [
    {
      src: "/images/luma/luma-residence-gallery-01.png",
      alt: "Porodica u savremenom stambenom prostoru",
    },
    {
      src: "/images/luma/luma-residence-gallery-02.png",
      alt: "Porodica u domu",
    },
    {
      src: "/images/luma/luma-residence-gallery-03.png",
      alt: "Par u savremenom enterijeru",
    },
  ],
  externalCta: {
    eyebrow: "Luma Residence",
    title: "Posetite Luma Residence",
    label: "Posetite Luma Residence",
  },
} as const;

// TODO(content): Keep apartment ranges, parking totals, completion dates, unit
// availability and floor data out of the corporate page until the separate
// Luma Residence project owns and confirms them.
