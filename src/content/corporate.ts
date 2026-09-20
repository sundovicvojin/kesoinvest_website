export const referencePageContent = {
  hero: {
    eyebrow: "Reference",
    title: "Naši realizovani projekti govore više od reči",
    body: "Svaki objekat nosi prepoznatljiv pečat našeg tima: kvalitetnu gradnju, funkcionalna rešenja i savremen dizajn.",
    image: {
      src: "/images/references/keso-invest-references-hero.png",
      alt: "Realizovani projekat kompanije KESO INVEST",
    },
  },
  approach: {
    eyebrow: "Reference",
    title: "Gradimo poverenje, ne samo kvadrate",
    paragraphs: [
      "Od prvog projekta do danas, ostali smo dosledni istim vrednostima — preciznosti, kvalitetu i poštovanju dogovora. Naš rast nije merljiv samo u kvadratima koje smo izgradili, već u poverenju koje smo stekli kod kupaca i partnera.",
      "Svaka nova lokacija za nas je prilika da podignemo standard još više — da uvedemo naprednija rešenja, modernije materijale i još funkcionalnije rasporede. Iza svake zgrade stoje posvećenost, iskustvo i vizija stvaranja prostora u kojima se zaista živi.",
    ],
  },
  projects: {
    eyebrow: "Reference",
    title: "Naši projekti",
    items: [
      {
        title: "Dalmatinska 21",
        location: "Novi Sad",
        status: "Izgrađeno",
        image: {
          src: "/images/references/dalmatinska-21.png",
          alt: "Stambeni objekat Dalmatinska 21, Novi Sad",
        },
        href: null,
      },
      {
        title: "Luma Residence",
        location: "Ugao Oblačića Rada i Boška Vrebalova",
        status: "U izgradnji",
        image: {
          src: "/images/references/reference-luma-residence.png",
          alt: "Luma Residence u izgradnji",
        },
        href: "/luma-residence/",
      },
    ],
  },
} as const;

export const aboutPageContent = {
  hero: {
    eyebrow: "KESO INVEST",
    title: "O investitoru",
    body: "Svaki od ovih projekata potvrđuje našu doslednost u poštovanju rokova, kvalitetu izvođenja radova i potpunoj sigurnosti za kupce.",
    image: {
      src: "/images/corporate/keso-invest-about-hero.png",
      alt: "KESO INVEST projekat u Novom Sadu",
    },
  },
  philosophy: {
    eyebrow: "O investitoru",
    title: "Naša filozofija",
    paragraphs: [
      "Verujemo da se poverenje, baš kao i dom, gradi sloj po sloj — pažljivo, promišljeno i s ljubavlju prema poslu.",
      "Biramo lokacije koje inspirišu, koristimo materijale koji traju i sarađujemo sa timovima koji dele našu viziju stvaranja prijatnih, funkcionalnih i savremenih prostora u kojima se zaista živi.",
      "Za nas, svaka zgrada ima svoju priču. Iza svake cigle stoji ideja o porodici koja u njoj započinje novo poglavlje, o deci koja rastu, o trenucima koji se pamte. Upravo zato svaki projekat doživljavamo lično — kao priliku da stvorimo mesto gde se ljudi osećaju kao kod kuće, od prvog dana.",
    ],
  },
  gallery: [
    {
      src: "/images/corporate/keso-invest-about-gallery-01.png",
      alt: "Realizovani projekat kompanije KESO INVEST",
    },
    {
      src: "/images/corporate/keso-invest-about-gallery-02.png",
      alt: "Realizovani projekat kompanije KESO INVEST",
    },
    {
      src: "/images/corporate/keso-invest-about-gallery-03.png",
      alt: "Realizovani projekat kompanije KESO INVEST",
    },
    {
      src: "/images/corporate/keso-invest-about-gallery-04.png",
      alt: "Realizovani projekat kompanije KESO INVEST",
    },
  ],
} as const;

// TODO(content): Restore the omitted reference projects after the official
// Bela/Bele Njive spelling and the Braće Ribnikar / Đorđa Servickog display
// names are confirmed.
// TODO(content): Add corporate statistics and the longer company introduction
// only after the legal company spelling, timeline and project totals are confirmed.
