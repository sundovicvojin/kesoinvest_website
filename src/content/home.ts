export const homeContent = {
  hero: {
    eyebrow: "KESO INVEST",
    title: "Nova adresa kvaliteta, sigurnosti i mira",
    project: "Luma Residence",
    cta: {
      label: "Saznajte više",
      href: "/luma-residence/",
    },
    image: {
      src: "/images/home/luma-residence-hero.jpg",
      alt: "Luma Residence stambeno-poslovni kompleks",
    },
  },
  investor: {
    eyebrow: "O investitoru",
    title: "Naš pristup",
    body: "U svakom projektu, od idejnog rešenja do završne faze, vodimo se istim principima – kvalitet gradnje, pažljivo birane lokacije i odgovoran odnos prema kupcima. Upravo zato su naši stanovi sinonim za sigurnu investiciju i prijatan životni prostor.",
    cta: {
      label: "O investitoru",
      href: "/o-investitoru/",
    },
    image: {
      src: "/images/home/keso-invest-project-feature.jpg",
      alt: "Stambeni objekat kompanije KESO INVEST",
    },
  },
  featuredProject: {
    eyebrow: "U fazi izgradnje",
    title: "Luma Residence",
    location: "Ugao ulica Oblačića Rada i Boška Vrebalova, Novi Sad",
    body: "Luma Residence je moderan stambeno–poslovni kompleks koji se gradi na uglu ulica Oblačića Rada i Boška Vrebalova. Osmišljen kao mesto za kvalitetan život, sa funkcionalnim stanovima, modernim poslovnim prostorima, podzemnom garažom i okruženjem koje pruža mir, sigurnost i dobru povezanost sa gradom.",
    cta: {
      label: "Saznajte više",
      href: "/luma-residence/",
    },
    image: {
      src: "/images/luma/luma-residence-building-selector.png",
      alt: "Luma Residence — prikaz kompleksa",
    },
  },
  values: {
    eyebrow: "Naš pristup",
    title: "Naše vrednosti",
    items: [
      "Pouzdanost u realizaciji svakog projekta.",
      "Transparentna prodaja i potpuna pravna sigurnost.",
      "Savremeni arhitektonski koncepti prilagođeni savremenom životu.",
      "Fokus na komfor i dugoročnu vrednost vašeg doma.",
    ],
  },
  references: {
    eyebrow: "Reference",
    title: "Naša gradilišta govore više od reči",
    body: "Svaki objekat nosi prepoznatljiv pečat našeg tima: kvalitetnu gradnju, funkcionalna rešenja i savremen dizajn.",
    cta: {
      label: "Reference",
      href: "/reference/",
    },
    items: [
      {
        title: null,
        location: "Novi Sad",
        image: {
          src: "/images/references/brace-ribnikar-46.png",
          alt: "Realizovani stambeni objekat kompanije KESO INVEST u Novom Sadu",
        },
      },
      {
        title: null,
        location: "Novi Sad",
        image: {
          src: "/images/references/djordja-servickog-16.png",
          alt: "Realizovani stambeni objekat kompanije KESO INVEST u Novom Sadu",
        },
      },
      {
        title: "Dalmatinska 21",
        location: "Novi Sad",
        image: {
          src: "/images/references/dalmatinska-21.png",
          alt: "Stambeni objekat u Dalmatinskoj 21",
        },
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Tu smo da odgovorimo na svako vaše pitanje",
    cta: {
      label: "Kontakt",
      href: "/contact/",
    },
  },
} as const;

// TODO(content): Add homepage statistics only after the conflicting totals are confirmed.
// TODO(content): Add the company profile sentence after the official legal spelling
// and the “10+ years” statement are confirmed.
// TODO(content): Confirm the source-to-project mapping for reference thumbnails before
// the dedicated reference page is implemented.
// TODO(content): Restore the two omitted reference labels after their official display
// names (with or without street numbers) are confirmed.
