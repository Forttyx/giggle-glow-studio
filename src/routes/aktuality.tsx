import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { ArrowRight, CalendarDays } from "lucide-react";

export const Route = createFileRoute("/aktuality")({
  head: () => ({
    meta: [
      { title: "Aktuality — Anglické Centrum Plzeň" },
      { name: "description", content: "Novinky z Anglického Centra Plzeň: dny otevřených dveří, nové kurzy, příležitosti pro lektory." },
      { property: "og:title", content: "Aktuality — Anglické Centrum Plzeň" },
      { property: "og:description", content: "Co se u nás děje — novinky, dny otevřených dveří, nové kurzy." },
    ],
  }),
  component: AktualityPage,
});

const news = [
  {
    slug: "hledame-posily-do-tymu",
    date: "4. 10. 2024",
    title: "Hledáme nové posily do našeho týmu",
    excerpt: "Rozšiřujeme tým o lektorky angličtiny pro děti i dospělé. Ozvěte se nám, pokud máte rádi děti a chcete učit anglicky.",
  },
  {
    slug: "den-otevrenych-dveri-2024",
    date: "16. 7. 2024",
    title: "Den otevřených dveří pro školní rok 2024/25",
    excerpt: "Přijďte se podívat do naší anglické školičky, seznámit se s lektorkami a programem.",
  },
];

function AktualityPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Aktuality" title="Co se u nás děje" />
      <section className="mx-auto max-w-4xl space-y-6 px-4 py-16 sm:px-6">
        {news.map((n, i) => (
          <Link key={n.slug} to="/aktuality/$slug" params={{ slug: n.slug }} className="block">
            <StickerCard variant={i % 2 === 0 ? "white" : "cream"} className="sticker-hover">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-british-red">
                <CalendarDays className="h-4 w-4" /> {n.date}
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold">{n.title}</h2>
              <p className="mt-2 text-foreground/80">{n.excerpt}</p>
              <div className="mt-3 inline-flex items-center gap-2 font-bold text-royal">
                Zobrazit více <ArrowRight className="h-4 w-4" />
              </div>
            </StickerCard>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}