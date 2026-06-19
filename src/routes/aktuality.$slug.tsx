import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { ArrowLeft, CalendarDays } from "lucide-react";

const POSTS: Record<string, { date: string; title: string; body: string[] }> = {
  "hledame-posily-do-tymu": {
    date: "4. 10. 2024",
    title: "Hledáme nové posily do našeho týmu",
    body: [
      "Rozšiřujeme tým a hledáme nové lektorky angličtiny — pro anglickou školičku, dětské kurzy i kurzy pro dospělé.",
      "Hledáme někoho, kdo má rád děti, je trpělivý a komunikativní, a chce se s námi podílet na hravé a smysluplné výuce angličtiny.",
      "Pokud vás nabídka zaujala, ozvěte se nám na info@anglickecentrum.cz nebo na +420 775 220 044.",
    ],
  },
  "den-otevrenych-dveri-2024": {
    date: "16. 7. 2024",
    title: "Den otevřených dveří pro školní rok 2024/25",
    body: [
      "Srdečně zveme všechny rodiče i děti na den otevřených dveří v naší Anglické školičce.",
      "Provedeme vás prostorami, seznámíme s lektorkami, ukážeme typický denní program a rádi zodpovíme všechny vaše otázky.",
      "Pro upřesnění termínu nás kontaktujte telefonicky nebo emailem — domluvíme termín, který vám bude vyhovovat.",
    ],
  },
};

export const Route = createFileRoute("/aktuality/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Aktualita"} — Anglické Centrum Plzeň` },
      { name: "description", content: loaderData?.body[0]?.slice(0, 155) ?? "Aktualita" },
      { property: "og:title", content: loaderData?.title ?? "Aktualita" },
      { property: "og:description", content: loaderData?.body[0]?.slice(0, 155) ?? "" },
    ],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold">Aktualita nenalezena</h1>
        <Link to="/aktuality" className="mt-6 inline-block font-bold text-royal underline">Zpět na aktuality</Link>
      </div>
    </PageShell>
  ),
});

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link to="/aktuality" className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zpět na aktuality
        </Link>
        <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-british-red">
          <CalendarDays className="h-4 w-4" /> {post.date}
        </div>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">{post.title}</h1>
        <StickerCard variant="cream" className="mt-8 space-y-4 text-base text-foreground/80">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </StickerCard>
      </article>
    </PageShell>
  );
}