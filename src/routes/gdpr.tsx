import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/gdpr")({
  head: () => ({
    meta: [
      { title: "Ochrana osobních údajů — Anglické Centrum Plzeň" },
      { name: "description", content: "Zásady zpracování osobních údajů Anglického Centra Plzeň v souladu s GDPR." },
      { property: "og:title", content: "Ochrana osobních údajů — Anglické Centrum" },
      { property: "og:description", content: "Zásady zpracování osobních údajů v souladu s GDPR." },
    ],
  }),
  component: GdprPage,
});

function GdprPage() {
  return (
    <PageShell>
      <PageHero eyebrow="GDPR" title="Ochrana osobních údajů" />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-foreground/80 sm:px-6">
        <p>
          Provozovatelé webu — <strong>MBedu, s.r.o.</strong> (IČO 29116066) a <strong>Lingua Minor s.r.o.</strong>{" "}
          (IČO 07266588), oba se sídlem Zadní cesta 1065/22, 326 00 Plzeň — zpracovávají osobní údaje v souladu
          s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
        </p>
        <h2 className="font-display text-2xl font-bold text-foreground">Jaké údaje zpracováváme</h2>
        <p>
          Údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailem: jméno, e-mail,
          telefon a obsah vaší zprávy. Tyto údaje slouží výhradně k vyřízení vaší poptávky a komunikaci s vámi.
        </p>
        <h2 className="font-display text-2xl font-bold text-foreground">Jak dlouho údaje uchováváme</h2>
        <p>Po dobu nezbytně nutnou k vyřízení dotazu, případně po dobu trvání smluvního vztahu.</p>
        <h2 className="font-display text-2xl font-bold text-foreground">Vaše práva</h2>
        <p>
          Máte právo na přístup ke svým údajům, jejich opravu, výmaz, omezení zpracování i přenositelnost.
          Kontaktujte nás na <a href="mailto:info@anglickecentrum.cz" className="font-bold text-royal underline">info@anglickecentrum.cz</a>.
        </p>
      </section>
    </PageShell>
  );
}