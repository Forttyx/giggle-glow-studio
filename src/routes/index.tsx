import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTAButton } from "@/components/site/CTAButton";
import {
  DoodleBalloon,
  DoodleCloud,
  DoodleHeart,
  DoodleStar,
  DoodleSun,
  UnionJackBunting,
} from "@/components/site/Doodles";
import { HERO_IMAGE, SKOLICKA_IMAGE, DETI_IMAGE, DOSPELI_IMAGE } from "@/lib/media";

const heroImg = HERO_IMAGE;
const skolickaImg = SKOLICKA_IMAGE;
const detiImg = DETI_IMAGE;
const dospeliImg = DOSPELI_IMAGE;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anglické Centrum Plzeň — angličtina pro děti i dospělé" },
      {
        name: "description",
        content:
          "Anglická školička pro děti 2,5–6 let, kurzy angličtiny pro děti i dospělé v Plzni. Malé skupinky, hravá výuka, Callanova metoda. Od roku 2011.",
      },
      { property: "og:title", content: "Anglické Centrum Plzeň" },
      {
        property: "og:description",
        content: "Hravá angličtina pro děti i dospělé v Plzni. Školička, kurzy, Callanova metoda.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const offerings = [
  {
    to: "/anglicka-skolicka" as const,
    image: skolickaImg,
    icon: Sparkles,
    title: "Soukromá anglická školička",
    description:
      "Malá školička s domácí atmosférou pro děti 2,5–6 let. Angličtina jako druhý jazyk skrze hry, písničky a říkanky.",
    badge: "Nejoblíbenější",
    variant: "sun" as const,
  },
  {
    to: "/kontakt" as const,
    image: detiImg,
    icon: BookOpen,
    title: "Skupinové kurzy angličtiny pro děti",
    description:
      "Dopolední a odpolední kurzy vedené zábavnou a hravou formou v malých skupinkách. Ozvěte se nám pro aktuální nabídku.",
    badge: "Malé skupinky",
    variant: "mint" as const,
  },
  {
    to: "/kontakt" as const,
    image: dospeliImg,
    icon: GraduationCap,
    title: "Individuální kurzy angličtiny pro dospělé",
    description:
      "Callanovou metodou individuálně nebo v páru. Začnete mluvit už od první lekce — jediní v Plzni.",
    badge: "Callanova metoda",
    variant: "cream" as const,
  },
];

const stats = [
  { value: "15", label: "let učíme anglicky" },
  { value: "8", label: "lektorů v týmu" },
  { value: "700+", label: "naučených dětí" },
  { value: "20", label: "dětí ve školce" },
];

const testimonials = [
  {
    quote:
      "Náš Matýsek navštěvuje školku v Anglickém Centru rok. Bylo to jedno z našich nejlepších rozhodnutí! Lektorky mají děti opravdu rády a kombinují výuku, zábavu a výchovu velmi jemnou formou.",
    author: "Maminka Matýska",
  },
  {
    quote:
      "Má to smysl! Nejdříve jsme k angličtině u čtyřletého synka přistupovali jako k pokusu, ale výsledky jsou vidět brzy. Dvouletý synek pochytává svá první slovíčka také v angličtině.",
    author: "Rodina Novákových",
  },
  {
    quote:
      "Naprostá spokojenost. Ve vašem centru jsou jednoznačně na prvním místě dětičky a jejich spokojenost. Vždy se na všem domluvíme, komunikace funguje skvěle.",
    author: "Maminka Aničky",
  },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream bg-paper">
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
          <UnionJackBunting className="mx-auto h-24 w-full max-w-5xl" />
        </div>
        <DoodleCloud className="absolute left-6 top-24 h-12 w-24 text-royal/70" />
        <DoodleSun className="absolute right-10 top-20 h-16 w-16 text-sun" />
        <DoodleBalloon className="absolute left-1/4 bottom-10 hidden h-16 w-12 text-british-red lg:block" />
        <DoodleStar className="absolute right-1/4 bottom-16 hidden h-10 w-10 text-royal lg:block" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-royal px-3 py-1 text-xs font-bold uppercase tracking-wide text-royal-foreground sticker-sm">
              <DoodleHeart className="h-3.5 w-3.5" /> Plzeň · od 2011
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Hravá angličtina,<br />
              <span className="relative inline-block">
                <span className="relative z-10">na kterou se</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-4 -rotate-1 bg-sun" aria-hidden />
                <span className="relative">vaše dítě těší</span>
              </span>
              .
            </h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/70">
              Malá školička s domácí atmosférou, hravé kurzy pro děti a Callanova metoda pro dospělé.
              U nás se angličtina učí jako druhý jazyk — přirozeně, beze strachu a s úsměvem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/kontakt" variant="primary">
                Přihlásit dítě na prohlídku <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton to="/anglicka-skolicka" variant="secondary">
                Nahlédnout do školičky
              </CTAButton>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2"><DoodleStar className="h-4 w-4 text-sun" /> Malé skupinky</span>
              <span className="inline-flex items-center gap-2"><DoodleStar className="h-4 w-4 text-sun" /> 100% v angličtině</span>
              <span className="inline-flex items-center gap-2"><DoodleStar className="h-4 w-4 text-sun" /> Individuální přístup</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-card p-3 sticker rotate-1">
              <img
                src={heroImg}
                alt="Děti se učí anglicky v Anglickém Centru Plzeň"
                width={1536}
                height={1024}
                className="aspect-[3/2] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-british-red px-4 py-3 text-white sticker-sm -rotate-3 md:block">
              <div className="font-display text-2xl font-bold leading-none">700+</div>
              <div className="text-xs">naučených dětí</div>
            </div>
            <div className="absolute -top-6 -right-4 hidden rounded-2xl bg-sun px-4 py-3 text-foreground sticker-sm rotate-6 md:block">
              <div className="font-display text-sm font-bold">Hi! ✋</div>
              <div className="text-xs">Welcome!</div>
            </div>
          </div>
        </div>
      </section>

      {/* NABÍDKA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          align="center"
          eyebrow="Co nabízíme"
          title="Tři způsoby, jak začít mluvit anglicky"
          description="Vyberte si, co vyhovuje vám nebo vašemu dítěti. Všechno spojuje malá skupina, kvalitní lektor a smysluplný program."
          className="mx-auto items-center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offerings.map((o) => {
            const Icon = o.icon;
            return (
              <Link key={o.to} to={o.to} className="group block">
                <StickerCard
                  variant={o.variant}
                  className="flex h-full flex-col overflow-hidden p-0 sticker-hover"
                >
                  <div className="relative">
                    <img
                      src={o.image}
                      alt={o.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full border-b-2 border-foreground/90 object-cover"
                    />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-bold text-foreground sticker-sm">
                      <Icon className="h-3.5 w-3.5" /> {o.badge}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-2xl font-bold text-foreground">{o.title}</h3>
                    <p className="flex-1 text-sm text-foreground/80">{o.description}</p>
                    <div className="inline-flex items-center gap-2 font-bold text-foreground">
                      Zjistit více <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </StickerCard>
              </Link>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="border-y-2 border-foreground/90 bg-royal py-16 text-royal-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl font-bold sm:text-6xl text-sun">{s.value}</div>
                <div className="mt-1 text-sm uppercase tracking-wide text-royal-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROČ K NÁM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Proč Anglické Centrum"
              title="Domluvte se anglicky beze strachu"
              description="Specializujeme se na výuku angličtiny od roku 2011. Pomáháme dětem i dospělým získat sebevědomí v jazyce — krok za krokem."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Celou vyučovací hodinu mluvíte anglicky",
                "Malé skupinky pro individuální přístup",
                "Kurzy na sebe navazují — nezačínáte každý rok od začátku",
                "Aktivity přizpůsobené věku — výuka je zábavná i efektivní",
                "Tým 8 zkušených lektorů, kteří mají děti opravdu rádi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-foreground/80">
                  <DoodleStar className="mt-0.5 h-5 w-5 flex-shrink-0 text-british-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton to="/o-nas" variant="ghost">
                Více o nás <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StickerCard variant="sun" className="col-span-2 -rotate-1">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8" />
                <div>
                  <div className="font-display text-xl font-bold">Individuální přístup</div>
                  <div className="text-sm text-foreground/80">Maximum 20 dětí denně ve školičce.</div>
                </div>
              </div>
            </StickerCard>
            <StickerCard variant="mint" className="rotate-2">
              <div className="font-display text-lg font-bold">Druhý jazyk</div>
              <p className="mt-1 text-sm text-foreground/80">Děti se učí angličtinu stejně přirozeně jako češtinu.</p>
            </StickerCard>
            <StickerCard variant="red" className="-rotate-2">
              <div className="font-display text-lg font-bold">Hravou formou</div>
              <p className="mt-1 text-sm">Písničky, říkanky, divadlo, výtvarka — pořád se něco děje.</p>
            </StickerCard>
          </div>
        </div>
      </section>

      {/* REFERENCE */}
      <section className="border-y-2 border-foreground/90 bg-mint/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            align="center"
            eyebrow="Říkají o nás"
            title="Co píší rodiče"
            className="mx-auto items-center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <StickerCard
                key={t.author}
                variant="white"
                className={i % 2 === 0 ? "rotate-1" : "-rotate-1"}
              >
                <DoodleHeart className="h-6 w-6 text-british-red" />
                <p className="mt-3 text-base leading-relaxed text-foreground/80">„{t.quote}"</p>
                <div className="mt-4 font-display text-sm font-bold text-foreground">— {t.author}</div>
              </StickerCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <StickerCard variant="royal" className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Přijďte se k nám podívat</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-royal-foreground/90">
            Rádi vás pozveme na nezávaznou prohlídku školičky. Po telefonické nebo emailové dohodě.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTAButton to="/kontakt" variant="secondary">Domluvit prohlídku</CTAButton>
            <a
              href="tel:+420775220044"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-display text-base font-bold text-foreground sticker-sm sticker-hover"
            >
              +420 775 22 00 44
            </a>
          </div>
        </StickerCard>
      </section>
    </PageShell>
  );
}
