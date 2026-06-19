## Co stavíme

Kompletní redesign webu **Anglické Centrum Plzeň** — hravý, dětský, britský vizuál cílený primárně na rodiče dětí 3–6 let, ale s plnou strukturou původního webu (děti + dospělí). Obsah převzat z živého webu (anglickecentrum.cz). Poslechové materiály Callan stage 01–08 (8× ZIP, ~96 MB) nahrané do Lovable Cloud Storage.

## Vizuální směr — "Britská školka"

- **Paleta:** Royal blue `#1E3A8A`, British red `#EF4444`, sunny yellow `#FBBF24`, off-white `#F8FAFC`, doplňkově mint pro accenty.
- **Typografie:** display `Fredoka` (kulaté, hravé, čitelné), body `Nunito` (přátelské, bezpatkové). Přes `@fontsource`.
- **Vibe:** Union Jack motivy v decentní formě (pruhy, hvězdy, koruna), ručně kreslené doodly (hvězdičky, srdíčka, ABC, mraky, balónky), zaoblené `rounded-3xl` karty, "sticker" stíny (offset solid border místo blur), sun-burst pozadí v hero, mírný wobble hover na CTA. Dětské, ale stále důvěryhodné pro rodiče.
- **Mikro-interakce:** Framer Motion — fade-up sekce, plovoucí balónky/mraky v hero, respekt `prefers-reduced-motion`.

## Struktura stránek (routes)

```text
/                              Domů — hero, 3 nabídky, čísla, recenze, CTA
/o-nas                         O Anglickém Centru
/anglicka-skolicka             Anglická školička (rozvrh, ceník, fotky)
/anglictina-pro-deti           Děti — info o kurzech 2026/27
/anglictina-pro-dospele        Dospělí — Callanova metoda + downloads ZIPů
/aktuality                     Aktuality
/aktuality/$slug               Detail novinky
/kontakt                       Kontakt + formulář + fakturační údaje
/gdpr                          GDPR
```

Sticky header (logo, nav, telefon CTA `+420 775 220 044`), mobile sheet menu. Footer: adresa, kontakty, fakturační údaje obou s.r.o. (MBedu + Lingua Minor).

## Klíčový obsah

- **USP:** od 2011, 11 let, 8 lektorů, 700 dětí naučeno, 20 aktuálně ve školičce, malé skupinky, 100% v angličtině jako 2. jazyk.
- **Školička:** 2,5–6 let, max. 20/den, rozvrh 7:30–16:00, ceník (3/4/5 dní × dopolední/celodenní), 15% sleva sourozenec, stravné 120/150 Kč.
- **Dospělí:** Callanova metoda, jediní v Plzni, individuální i skupinové (od 3 osob), poslechové materiály — viz storage níže.
- **Kontakt:** Mgr. Marcela Brabcová, Slovanská 149, Plzeň-Slovany, parkování + tram č. 1 zast. Vřesová.
- **Reference:** 5 reálných recenzí rodičů jako carousel.

## Poslechové materiály (Callan)

8 ZIPů (Lesson 001 … Lesson 077, MP3) stažených z původního webu, dohromady ~96 MB:

- callan_stage_01.zip … callan_stage_08.zip

**Storage:** Lovable Cloud Storage, public bucket `callan-materials`. Soubory nahraju přes server function (jednorázový seed skript po vytvoření bucketu — stažení z původního zdroje a upload). RLS: read-only pro `anon`, write jen `service_role`.

V UI na `/anglictina-pro-dospele` sekce **„Poslechové materiály ke stažení"** jako grid 8 karet:

| Stage | Lekce | Velikost | Tlačítko |
|---|---|---|---|
| 1 | 1 – 9 | 12 MB | Stáhnout ZIP |
| 2 | 10 – 19 | 11 MB | … |
| … | … | … | … |
| 8 | 70 – 77 | 13 MB | Stáhnout ZIP |

Odkaz `href` ukazuje přímo na public URL z bucketu (`bucket.publicUrl`), `download` atribut pro vynucené stažení.

## Konverzní prvky

- Primární CTA: **„Přihlásit dítě na prohlídku"** → kontaktní formulář s předvyplněným tématem.
- Sekundární: click-to-call, „Den otevřených dveří" banner.
- Formulář (jméno, email, telefon, zpráva, GDPR checkbox) — server function ukládá do tabulky `contact_submissions`.

## Technická specifikace

- **Framework:** TanStack Start v1 (file-based routing `src/routes/`), React 19, TS strict.
- **Styling:** Tailwind v4 (`src/styles.css`, `@theme`), tokeny pro paletu, `--shadow-sticker`, `--radius-blob`. Shadcn komponenty (Button, Card, Dialog, Form, Input, Textarea, Accordion, Carousel, Sheet).
- **Animace:** `framer-motion`.
- **Fonty:** `@fontsource/fredoka`, `@fontsource/nunito`.
- **Ikony:** `lucide-react` + vlastní SVG doodly.
- **Obrázky:** generované hero/sekční ilustrace (imagegen premium), v `src/assets/` (větší jako `.asset.json` přes Lovable CDN).
- **Backend:** Lovable Cloud
  - Tabulka `contact_submissions` (id, name, email, phone, topic, message, created_at, ip), RLS: insert pro `anon`, select jen `service_role`.
  - Storage bucket `callan-materials` (public), 8× ZIP nahráno jednorázovým seed flow.
  - `createServerFn` `submitContactForm` — Zod validace + insert.
- **SEO:** vlastní `head()` na každé route (CZ title/description, og:title, og:description). og:image jen na leaf routech.
- **A11y:** WCAG AA kontrast, focus-visible ringy, sémantické headingy, alt texty.

### Vercel deployment

TanStack Start v1 nepoužívá pre-1.0 Nitro/vinxi. `nitro.preset: "vercel"` v této verzi neexistuje a build by spadl. Použiju oficiální v1 API: `tanstackStart({ target: 'vercel' })` ve `vite.config.ts`. To je správné řešení pro Vercel deploy na aktuální verzi.

## Pořadí implementace

1. Aktivace Lovable Cloud, migrace `contact_submissions` + RLS.
2. Vytvoření public bucketu `callan-materials`, nahrání 8 ZIPů.
3. Instalace závislostí (`framer-motion`, `@fontsource/fredoka`, `@fontsource/nunito`, `zod`).
4. Design tokeny v `src/styles.css` + globální styly.
5. Sdílené komponenty: `SiteHeader`, `SiteFooter`, doodle SVGs, `StickerCard`, `SectionTitle`, `CTAButton`, `ContactForm`, `CallanDownloads`.
6. Generování klíčových ilustrací (hero kid + UK motiv, školka scéna, Callan, kontakt).
7. Route soubory + obsah dle struktury výše.
8. Server function pro formulář.
9. `vite.config.ts` target Vercel + SEO `head()` na všech routách.
10. Vizuální QA mobile/desktop.

## Co schválit

- Vizuální směr (Britská školka).
- Strukturu route (přidat Galerii? Originál ji nemá, takže nezahrnuji).
- Náhradu `nitro.preset: "vercel"` za `tanstackStart({ target: 'vercel' })`.