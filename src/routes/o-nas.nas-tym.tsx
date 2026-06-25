import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";

export const Route = createFileRoute("/o-nas/nas-tym")({
  head: () => ({
    meta: [
      { title: "Náš tým — Anglické Centrum Plzeň" },
      {
        name: "description",
        content:
          "Seznamte se s lektorkami a lektory Anglického Centra Plzeň. Tým zkušených pedagogů, kteří mají děti opravdu rádi.",
      },
      { property: "og:title", content: "Náš tým — Anglické Centrum Plzeň" },
      {
        property: "og:description",
        content: "Lektorky a lektoři Anglického Centra Plzeň.",
      },
    ],
  }),
  component: TeamPage,
});

// Až nám pošleš údaje o lidech, naplníme toto pole.
// { name, role, bio, photo }
const team: Array<{ name: string; role: string; bio: string; photo?: string }> = [];

function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Náš tým"
        title="Lidé, díky kterým to funguje"
        description="Tým zkušených lektorek a lektorů, kteří mají děti opravdu rádi."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {team.length === 0 ? (
          <StickerCard variant="cream" className="text-center">
            <h2 className="font-display text-2xl font-bold">Profily členů týmu připravujeme</h2>
            <p className="mt-3 text-foreground/80">
              Pošlete nám fotky a krátké medailonky každého kolegy a my je sem doplníme.
            </p>
          </StickerCard>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <StickerCard key={p.name} variant="white" className="overflow-hidden p-0">
                {p.photo && (
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-square w-full border-b-2 border-foreground/90 object-cover"
                  />
                )}
                <div className="p-5">
                  <div className="font-display text-xl font-bold">{p.name}</div>
                  <div className="text-sm font-bold text-royal">{p.role}</div>
                  <p className="mt-2 text-sm text-foreground/80">{p.bio}</p>
                </div>
              </StickerCard>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}