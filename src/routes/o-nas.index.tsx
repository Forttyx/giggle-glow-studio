import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { CTAButton } from "@/components/site/CTAButton";
import { DoodleStar } from "@/components/site/Doodles";

export const Route = createFileRoute("/o-nas/")({
  head: () => ({
    meta: [
      { title: "O nás — Anglické Centrum Plzeň" },
      {
        name: "description",
        content:
          "Anglické výukové centrum v Plzni od roku 2011. Anglická školka, kurzy pro děti i dospělé, Callanova metoda. Učíme mluvit anglicky beze strachu.",
      },
      { property: "og:title", content: "O Anglickém Centru Plzeň" },
      { property: "og:description", content: "Od roku 2011 učíme děti i dospělé mluvit anglicky beze strachu." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="O Anglickém Centru"
        title="Jsme anglické výukové centrum"
        description="Od roku 2011 se specializujeme na výuku angličtiny. Nabízíme kurzy pro jakoukoli věkovou skupinu — zaměřujeme se zejména na děti, ale začít může každý."
      />

      <section className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
        <StickerCard variant="cream">
          <h2 className="font-display text-2xl font-bold">Co u nás najdete</h2>
          <p className="mt-3 text-foreground/80">
            Vyberte si, co vám nejlépe vyhovuje. Provozujeme anglickou školku, dopolední a odpolední kurzy
            angličtiny pro děti v malých skupinkách a skupinové nebo individuální kurzy pro dospělé,
            konverzační kurzy, přípravné kurzy na mezinárodní zkoušky Cambridge a přípravné kurzy
            k maturitní zkoušce.
          </p>
        </StickerCard>

        <div>
          <h2 className="font-display text-3xl font-bold">Naším cílem je</h2>
          <p className="mt-3 text-foreground/80">
            Naučit vás nebo vaše děti domluvit se anglicky beze strachu a ostychu. Naše lekce jsou proto:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Plné střídajících se aktivit — děti se nenudí, stále se něco děje.",
              "Efektivní. Celou hodinu mluvíte anglicky.",
              "Praktické. Učí se celé fráze a věty.",
              "Zábavné. Vše probíhá formou hry a soutěží.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-card p-4 sticker-sm">
                <DoodleStar className="mt-0.5 h-5 w-5 flex-shrink-0 text-british-red" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <StickerCard variant="sun">
          <h2 className="font-display text-2xl font-bold">Vyučujeme v malých skupinkách nebo individuálně</h2>
          <p className="mt-3 text-foreground/90">
            Je proto čas věnovat se jednotlivým studentům. Každý dostane prostor mluvit. Chceme, aby děti
            chápaly angličtinu jako přirozenou součást života, dokázaly přirozeně komunikovat a angličtinu
            používat. Chceme, aby měly radost ze svých úspěchů.
          </p>
        </StickerCard>

        <div className="text-center">
          <CTAButton to="/kontakt">Domluvit prohlídku</CTAButton>
        </div>
      </section>
    </PageShell>
  );
}