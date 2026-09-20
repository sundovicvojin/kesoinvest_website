import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Unesite ime.")
    .max(100, "Ime može imati najviše 100 karaktera."),
  lastName: z
    .string()
    .trim()
    .min(1, "Unesite prezime.")
    .max(100, "Prezime može imati najviše 100 karaktera."),
  email: z
    .string()
    .trim()
    .min(1, "Unesite e-mail adresu.")
    .max(254, "E-mail adresa je predugačka.")
    .email("Unesite ispravnu e-mail adresu."),
  message: z
    .string()
    .trim()
    .min(10, "Poruka mora imati najmanje 10 karaktera.")
    .max(5000, "Poruka može imati najviše 5000 karaktera."),
  website: z.string().max(200).optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
