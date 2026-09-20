# KESO INVEST — Content Source of Truth

Status: `DRAFT / CLIENT REVIEW REQUIRED`  
Scope: content migration only; no new copy has been introduced.  
Rule: every value marked `UNCONFIRMED` must remain unresolved until the client answers the matching item in `CONTENT_QUESTIONS.md`.

## Status vocabulary

- `CONFIRMED_FROM_SITE`: transcribed from the current public site, with no conflicting value found.
- `UNCONFIRMED`: present on the public site but contradicted elsewhere, incomplete, or time-sensitive.
- `DEMO / DO NOT MIGRATE`: Luxtower/template content.

## Canonical existing routes

1. `https://kesoinvest.com/`
2. `https://kesoinvest.com/luma-residence/`
3. `https://kesoinvest.com/prvi-sprat/`
4. `https://kesoinvest.com/drugi-sprat/`
5. `https://kesoinvest.com/treci-sprat/`
6. `https://kesoinvest.com/cetvrti-sprat/`
7. `https://kesoinvest.com/reference/`
8. `https://kesoinvest.com/o-investitoru/`
9. `https://kesoinvest.com/contact/`

## Global navigation

- Početna → `/`
- Luma Residence → `/luma-residence/`
  - Prvi sprat → `/prvi-sprat/`
  - Drugi sprat → `/drugi-sprat/`
  - Treći sprat → `/treci-sprat/`
  - Četvrti sprat → `/cetvrti-sprat/`
- Reference → `/reference/`
- O investitoru → `/o-investitoru/`
- Kontakt → `/contact/`

Header phone: `+381 21 30 10 250` — `UNCONFIRMED` because other page blocks show a different landline.

## Shared contact data

| Field | Existing value | Status |
|---|---|---|
| Address | Danila Kiša 14a, Novi Sad | `CONFIRMED_FROM_SITE` |
| Landline A | +381 21 30 10 250 | `UNCONFIRMED` |
| Landline B | +381 21 234 56 78 | `UNCONFIRMED` |
| Mobile | +381 64 657 9655 | `CONFIRMED_FROM_SITE` |
| Email | kesoinvestdoo@gmail.com | `CONFIRMED_FROM_SITE` |
| Working hours | Ponedeljak – Petak: 08 – 16h | `UNCONFIRMED` — absent from some contact blocks |
| Map location | Danila Kiša 14a, Novi Sad | `CONFIRMED_FROM_SITE` |

### Existing contact form

Heading variants:

- `Tu smo da odgovorimo na svako vaše pitanje`
- `Zakažite obilazak / Pošaljite upit`

Fields and controls:

- Ime
- Prezime
- E-mail
- Poruka
- Captcha / invisible anti-spam control
- Submit CTA: `Pošalji`
- Honeypot text currently exposed in markup: `If you are human, leave this field blank.`

Form recipient, privacy copy, retention behavior and final anti-spam service are `UNCONFIRMED`.

---

## Page: Početna

Source: `https://kesoinvest.com/`

### Hero

- Eyebrow/heading: `Nova adresa kvaliteta, sigurnosti i mira`
- Project name: `Luma Residence`
- CTA: `Saznajte više`
- CTA destination: `/luma-residence/`

### Section: Život kakav zaslužujete

> Na spoju ulica Oblačića Rada i Boška Vrebalova, gradi se Luma Residence — moderan stambeno-poslovni kompleks osmišljen za one koji traže savršen spoj gradske povezanosti i mira. U prodaji su stanovi različitih struktura kao i funkcionalni poslovni prostori, a projekat je planiran da se realizuje u dve faze.

Project facts as currently published:

- Status projekta: u fazi izgradnje.
- I faza: Lamela G i Lamela A — završetak planiran za kraj 2027. — `UNCONFIRMED`.
- II faza: Lamela B — u pripremi.
- Ponuda stanova: od 27 m² do 93 m² — `UNCONFIRMED`.
- Poslovni prostori: od 90 m² do 560 m².
- Lokacija: ugao ulica Oblačića Rada i Boška Vrebalova.
- CTA: `POGLEDAJ PONUDU STANOVA` → `/luma-residence/`.

### Section: O investitoru

> KESO INVEST doo je novosadska građevinska kompanija sa fokusom na stambene projekte visoke vrednosti. Više od 10 godina gradimo domove koji spajaju kvalitet, sigurnost i funkcionalnost, sa ciljem da svakom kupcu pružimo pouzdan i dugoročan izbor.

> Tokom prethodne decenije realizovali smo više od 300 stanova i 10 poslovnih lokala širom Novog Sada, čime smo potvrdili stabilnost, odgovoran pristup i visok nivo stručnosti u svakom segmentu gradnje.

The values `više od 300 stanova` and `10 poslovnih lokala` are `UNCONFIRMED`.

### Section: Naše vrednosti

- Pouzdanost u realizaciji svakog projekta.
- Transparentna prodaja i potpuna pravna sigurnost.
- Savremeni arhitektonski koncepti prilagođeni savremenom životu.
- Fokus na komfor i dugoročnu vrednost vašeg doma.

### Card: Naš pristup

> U svakom projektu, od idejnog rešenja do završne faze, vodimo se istim principima – kvalitet gradnje, pažljivo birane lokacije i odgovoran odnos prema kupcima. Upravo zato su naši stanovi sinonim za sigurnu investiciju i prijatan životni prostor.

### Section: Naša gradilišta govore više od reči

> KESO INVEST iza sebe ima brojne uspešno realizovane objekte u Novom Sadu – od Bele Njive do Grbavice, do Novog Naselja do Telepa. Svaki od njih odlikuju visok kvalitet završne obrade, funkcionalnost i pažljivo osmišljen dizajn koji spaja estetiku i udobnost.

Existing table:

| Lokacija | Broj stanova | Broj lokala | Status |
|---|---:|---:|---|
| Bele Njive 24 | 36 | 0 | `UNCONFIRMED` naming |
| Bele Njive 24a | 38 | 0 | `UNCONFIRMED` naming |
| Braće Ribnikar 46 | 12 | 2 | `CONFIRMED_FROM_SITE` |
| Đorđa Servickog 16 | 16 | 1 | `CONFIRMED_FROM_SITE` |
| Dalmatinska 21 | 32 | 4 | `CONFIRMED_FROM_SITE` |
| Ukupno | 134 | 7 | `UNCONFIRMED` due conflicting site copy |

Existing animated statistics:

- Izgrađenih stanova: intended value appears to be `130+`; non-JavaScript/crawler output currently shows `0+` — `UNCONFIRMED`.
- Godina iskustva: intended value appears to be `10+`; output currently shows `0+` — `UNCONFIRMED`.
- Lokacija u Novom Sadu: intended value appears to be `5+`; output currently shows `0+` — `UNCONFIRMED`.
- Završeni projekti u planiranim rokovima: intended value appears to be `100%`; output currently shows `0%` — `UNCONFIRMED`.

### Contact section

- Heading: `Tu smo da odgovorimo na svako vaše pitanje`.
- Uses the shared form.
- Landline shown here: `+381 21 234 56 78` — `UNCONFIRMED`.

---

## Page: Luma Residence

Source: `https://kesoinvest.com/luma-residence/`

### Building selector

- Image title/alt currently: `Zgrada`.
- Heading: `Pronađi stan koji ti savršeno odgovara`.
- Clickable floor links:
  - Prvi sprat → `/prvi-sprat/`
  - Drugi sprat → `/drugi-sprat/`
  - Treći sprat → `/treci-sprat/`
  - Četvrti sprat → `/cetvrti-sprat/`

### Section: Život kakav zaslužujete

> Luma Residence je moderan stambeno–poslovni kompleks koji se gradi na uglu ulica Oblačića Rada i Boška Vrebalova. Osmišljen kao mesto za kvalitetan život, sa funkcionalnim stanovima, modernim poslovnim prostorima, podzemnom garažom i okruženjem koje pruža mir, sigurnost i dobru povezanost sa gradom.

> U ponudi se nalaze stanovi od 27 m² do 93 m², kao i poslovni prostori površine 90–560 m². Kompletan kompleks gradi se u dve faze, sa planiranim završetkom prve faze do kraja 2027. godine.

- Apartment range and deadline: `UNCONFIRMED`.
- CTA: `📄 Preuzmi infobook`.
- Existing download: `https://kesoinvest.com/wp-content/uploads/2025/11/Luma-residence-Infobook-1-print.pdf`.

### Section: Podzemna garaža — sigurnost, praktičnost i udobnost

> Luma Residence poseduje ukupno 98 garažnih parking mesta, raspoređenih na dve podzemne etaže, projektovanih da stanarima obezbede maksimalnu udobnost i sigurnost vozila tokom cele godine. Parking mesta se mogu kupiti uz stan ili kao samostalna jedinica, što dodatno unapređuje organizaciju porodičnog ili poslovnog života.

Parking count `98`: `UNCONFIRMED`.

### Section: Poslovni prostori za savremene biznise

> Poslovni prostori u prizemlju Luma Residence kompleksa dostupni su u površinama od 90 do 560 m², uz mogućnost prilagođavanja rasporeda u skladu sa potrebama budućeg zakupca ili vlasnika. Zahvaljujući velikim staklenim portalima i direktnom pristupu sa ulice, ovi prostori su idealni za maloprodajne objekte, apoteke, ordinacije, kancelarije, kozmetičke i frizerske salone, kao i različite uslužne delatnosti.

Whether spaces are for sale, lease, or both is `UNCONFIRMED`.

### Section: Sve što vam je potrebno nalazi se na samo nekoliko koraka od vašeg doma.

| Place | Existing distance | Status |
|---|---:|---|
| Vrtić | 400 m | `CONFIRMED_FROM_SITE` |
| Prodavnica | 100 m | `CONFIRMED_FROM_SITE` |
| Igralište | 100 m | `CONFIRMED_FROM_SITE` |
| Autobuska stanica | 100 m | `CONFIRMED_FROM_SITE` |
| Policijska stanica | 450 m | `CONFIRMED_FROM_SITE` |
| Park za pse | 50 m | `CONFIRMED_FROM_SITE` |

### Contact and gallery

- Heading: `Zakažite obilazak / Pošaljite upit`.
- Uses the shared form.
- Repeats the infobook CTA.
- Contains a three-image carousel whose current alt values are `0`, `1`, `2`.
- Landline shown in this block: `+381 21 234 56 78` — `UNCONFIRMED`.

---

## Pages: Luma floors and apartments

Sources:

- `https://kesoinvest.com/prvi-sprat/`
- `https://kesoinvest.com/drugi-sprat/`
- `https://kesoinvest.com/treci-sprat/`
- `https://kesoinvest.com/cetvrti-sprat/`

### Shared floor navigation

- `← Nazad` → `/luma-residence/`
- `Prvi sprat`
- `Drugi sprat`
- `Treći sprat`
- `Četvrti Sprat`

### Apartment inventory

`SOLD` below means only that the current public hotspot contains the text `Prodat`; current commercial availability still requires client confirmation.

| Floor | Apartment | Existing public state | Content available |
|---|---:|---|---|
| I | 1 | `UNCONFIRMED` | Modal floor-plan image |
| I | 2 | `UNCONFIRMED` | Modal floor-plan image |
| I | 3 | `UNCONFIRMED` | Modal floor-plan image |
| I | 4 | `UNCONFIRMED` | Modal floor-plan image |
| I | 5 | `UNCONFIRMED` | Modal floor-plan image |
| I | 6 | `UNCONFIRMED` | Modal floor-plan image |
| I | 7 | `UNCONFIRMED` | Modal floor-plan image |
| I | 8 | `UNCONFIRMED` | Modal floor-plan image |
| II | 9 | `UNCONFIRMED` | Modal floor-plan image |
| II | 10 | `UNCONFIRMED` | Modal floor-plan image |
| II | 11 | `SOLD / UNCONFIRMED CURRENTNESS` | Hotspot text: `Drugi sprat stan broj 11 - Prodat`; no modal image |
| II | 12 | `UNCONFIRMED` | Modal floor-plan image |
| II | 13 | `UNCONFIRMED` | Modal floor-plan image |
| II | 14 | `UNCONFIRMED` | Modal floor-plan image |
| II | 15 | `UNCONFIRMED` | Modal floor-plan image |
| II | 16 | `UNCONFIRMED` | Modal floor-plan image |
| III | 17 | `UNCONFIRMED` | Modal floor-plan image |
| III | 18 | `SOLD / UNCONFIRMED CURRENTNESS` | Hotspot text: `Treći sprat stan broj 18 - Prodat`; no modal image |
| III | 19 | `SOLD / UNCONFIRMED CURRENTNESS` | Hotspot text: `Treći sprat stan broj 19 - Prodat`; no modal image |
| III | 20 | `UNCONFIRMED` | Modal floor-plan image |
| III | 21 | `UNCONFIRMED` | Modal floor-plan image |
| III | 22 | `UNCONFIRMED` | Modal floor-plan image |
| III | 23 | `UNCONFIRMED` | Modal floor-plan image |
| III | 24 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 25 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 26 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 27 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 28 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 29 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 30 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 31 | `UNCONFIRMED` | Modal floor-plan image |
| IV | 32 | `UNCONFIRMED` | Modal floor-plan image |

### Per-floor heading and guidance

- `Etaža I Sprata`
- `Etaža II Sprata`
- `Etaža III Sprata`
- `Etaža IV Sprata`

> Odaberite stan, proverite njegovu dostupnost i saznajte sve ključne detalje — površinu, raspored prostorija, orijentaciju, dimenzije i sve dodatne informacije koje su vam važne.

The current site does not actually provide structured surface, room, orientation or dimension data outside plan images.

### Repeated apartment-type summary on every floor

- Jednosoban stan (27–30 m²), ukupno: 2.
- Dvosoban stan (39–46 m²), ukupno: 7.
- Trosoban stan (50–65 m²), ukupno: 3.
- Četvorosoban stan od 89 m², ukupno: 3.

All four lines are `UNCONFIRMED`: they total 15 units but each floor interface displays eight apartments.

### Placeholder table currently repeated on floor pages

- `Stanovi: A1, A2, A3, A4, A5, A6`
- `m²: 58, 58, 58, 58, 58, 58`
- `Lokali: L1, L2, L3, L4`
- `m²: 58, 58, 58, 58`

Status: `UNCONFIRMED / LIKELY PLACEHOLDER`. Do not implement until the client confirms whether any of it is real.

### Repeated project facts on floor pages

- 3 lamele: A, B i G.
- Spratnost: 2 podzemne etaže + prizemlje + galerija + 4 sprata.
- Stanovi: 35 m² – 110 m² (1–4 sobe) — `UNCONFIRMED`.
- Podzemna garaža sa 60 mesta — `UNCONFIRMED`.
- A+ energetska efikasnost — `UNCONFIRMED`; no supporting document was identified.
- Poslovni prostori u prizemlju sa staklenim frontovima.

### Older repeated project block on floor pages

Heading: `Život kakav zaslužujete`

> Na spoju ulica Oblačića Rada i Boška Vrebalova, gradi se Luma Residence — moderan stambeno-poslovni kompleks osmišljen za one koji traže savršen spoj gradske povezanosti i mira. U prodaji su stanovi različitih struktura, a useljenje je planirano za kraj 2026. godine.

Key information:

- Status: U fazi izgradnje.
- Rok završetka / useljenja: kraj 2026. — `UNCONFIRMED`.
- Ponuda stanova: od 35 m² do 110 m² — `UNCONFIRMED`.
- Lokacija: ugao Oblačića Rada i Boška Vrebalova.
- CTA: `POGLEDAJ PONUDU STANOVA` → `/luma-residence/`.

The floor pages then repeat the newer Luma description, garage, business-space, distance, contact, infobook and gallery content already transcribed above. Preserve the content source, but duplication in the final information architecture is `UNCONFIRMED`.

---

## Page: Reference

Source: `https://kesoinvest.com/reference/`

### Hero/intro

Heading: `Naši realizovani projekti govore više od reči`

> KESO INVEST je tokom protekle decenije realizovao brojne projekte na pažljivo odabranim lokacijama širom Novog Sada. Svaki objekat nosi prepoznatljiv pečat našeg tima: kvalitetnu gradnju, funkcionalna rešenja i savremen dizajn.

### Statistics

Existing intended values are `UNCONFIRMED`:

- 130+ izgrađenih stanova.
- 10+ godina iskustva.
- 5+ lokacija u Novom Sadu.
- 100% završeni projekti u planiranim rokovima.

### Section: Gradimo poverenje, ne samo kvadrate

> Od prvog projekta do danas, ostali smo dosledni istim vrednostima — preciznosti, kvalitetu i poštovanju dogovora. Naš rast nije merljiv samo u kvadratima koje smo izgradili, već u poverenju koje smo stekli kod kupaca i partnera.

> Svaka nova lokacija za nas je prilika da podignemo standard još više — da uvedemo naprednija rešenja, modernije materijale i još funkcionalnije rasporede. Iza svake zgrade stoje posvećenost, iskustvo i vizija stvaranja prostora u kojima se zaista živi.

### Section: Naši projekti

| Existing project name | Existing status | Status note |
|---|---|---|
| Bele njive 24, Novi Sad | Izgrađeno | Naming `UNCONFIRMED` |
| Bele njive 24a, Novi Sad | Izgrađeno | Naming `UNCONFIRMED` |
| Braće Ribnikar, Novi Sad | Izgrađeno | Street number 46 appears elsewhere; display name `UNCONFIRMED` |
| Đorđa Servickog, Novi Sad | Izgrađeno | Street number 16 appears elsewhere; display name `UNCONFIRMED` |
| Dalmatinska 21, Novi Sad | Izgrađeno | `CONFIRMED_FROM_SITE` |
| Ugao Oblačića Rada i Boška Vrebalova | Luma Residence – u izgradnji | `CONFIRMED_FROM_SITE` |

### Section: Kvalitet koji traje

> Naši završeni projekti nisu samo adrese na mapi grada, već svedočanstvo o doslednosti, pouzdanosti i radu koji traje. Više od 130 izgrađenih stanova, 10 godina iskustva, 5 lokacija i 100% ispoštovani rokovi potvrđuju našu filozofiju.

All numeric claims in this paragraph are `UNCONFIRMED`.

### Contact section

- Heading: `Tu smo da odgovorimo na svako vaše pitanje`.
- Uses shared form.
- Includes working hours.
- Landline: `+381 21 234 56 78` — `UNCONFIRMED`.

---

## Page: O investitoru

Source: `https://kesoinvest.com/o-investitoru/`

### Section: Više od decenije građenja poverenja

> KESO INVEST d.o.o. iz Novog Sada prepoznat je po projektima koji spajaju vrhunski kvalitet, funkcionalnost i savremen dizajn.

> Tokom više od deset godina rada izgradili smo preko 130 stanova i 7 poslovnih prostora na pažljivo odabranim lokacijama širom Novog Sada od Bela Njiva 24 i 24a, preko Braće Ribnikar 46, do Dalmatinske 21 i Đorđa Servickog 16.

> Svaki od ovih projekata potvrđuje našu doslednost u poštovanju rokova, kvalitetu izvođenja radova i potpunoj sigurnosti za kupce.

The company spelling, residential count, commercial count and `Bela/Bele Njive` form are `UNCONFIRMED`.

### Section: Naša filozofija

> Verujemo da se poverenje, baš kao i dom, gradi sloj po sloj — pažljivo, promišljeno i s ljubavlju prema poslu.

> Biramo lokacije koje inspirišu, koristimo materijale koji traju i sarađujemo sa timovima koji dele našu viziju stvaranja prijatnih, funkcionalnih i savremenih prostora u kojima se zaista živi.

> Za nas, svaka zgrada ima svoju priču. Iza svake cigle stoji ideja o porodici koja u njoj započinje novo poglavlje, o deci koja rastu, o trenucima koji se pamte. Upravo zato svaki projekat doživljavamo lično — kao priliku da stvorimo mesto gde se ljudi osećaju kao kod kuće, od prvog dana.

### Statistics and contact

- Same four `UNCONFIRMED` statistics as the Reference page.
- Contact heading: `Tu smo da odgovorimo na svako vaše pitanje`.
- Uses shared form and includes working hours.
- Landline: `+381 21 234 56 78` — `UNCONFIRMED`.

---

## Page: Kontakt

Source: `https://kesoinvest.com/contact/`

- Page title: `Kontakt`.
- Heading: `Tu smo da odgovorimo na svako vaše pitanje`.
- Uses the shared contact form.
- Address: Danila Kiša 14a, Novi Sad.
- Landline: `+381 21 30 10 250` — `UNCONFIRMED`.
- Mobile: `+381 64 657 9655`.
- Email: `kesoinvestdoo@gmail.com`.
- Google Maps query: `Danila Kiša 14a, Novi Sad`.
- Working hours are not displayed on this page; whether they should be added is `UNCONFIRMED`.

## Existing SEO copy retained for later SEO phase

Current homepage title:

`Keso Invest – Gradnja kvalitetnih stanova u Novom Sadu već 10+ godina`

Current homepage description:

`Više od decenije gradimo kvalitetne stanove i poslovne prostore u Novom Sadu. Preko 130 izgrađenih stanova i 7 lokala – sigurnost, rokovi i vrhunski kvalitet.`

Numeric claims remain `UNCONFIRMED`. Other relevant pages currently use generic titles ending in `- Luma Residence` and generally have no curated meta description.
