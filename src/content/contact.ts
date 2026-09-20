export const contactPageContent = {
  eyebrow: "Kontakt",
  title: "Tu smo da odgovorimo na svako vaše pitanje",
  form: {
    title: "Zakažite obilazak / Pošaljite upit",
    fields: {
      firstName: "Ime",
      lastName: "Prezime",
      email: "E-mail",
      message: "Poruka",
    },
    submitLabel: "Pošalji",
    submittingLabel: "Slanje...",
    successMessage: "Hvala. Vaš upit je uspešno poslat.",
    errorMessage: "Upit trenutno nije moguće poslati. Pokušajte ponovo.",
    privacyNotice: null as string | null,
    privacyPolicyHref: null as string | null,
  },
} as const;

// TODO(launch): Add client-approved privacy notice and Privacy Policy URL before
// production launch. Do not publish inferred legal copy.
