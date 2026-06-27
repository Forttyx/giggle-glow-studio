import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1rUO_IBfov5qiS_GwDPh4KP7oup6J_GUbb9dLjbs-zpY/export?format=csv";

type NewsItem = { id: string; titulek: string; podtext: string; text: string };

function parseCsv(text: string): NewsItem[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  if (rows.length < 2) return [];
  const header = rows[0].map((h) => h.trim().toLowerCase());
  const idx = (name: string) => header.indexOf(name);
  const iId = idx("id");
  const iTitle = idx("titulek");
  const iPod = idx("podtext");
  const iText = idx("text");
  return rows
    .slice(1)
    .filter((r) => r.some((c) => c && c.trim().length > 0))
    .map((r) => ({
      id: (r[iId] ?? "").trim(),
      titulek: (r[iTitle] ?? "").trim(),
      podtext: (r[iPod] ?? "").trim(),
      text: (r[iText] ?? "").trim(),
    }));
}

async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(SHEET_CSV_URL);
  if (!res.ok) throw new Error("Nepodařilo se načíst aktuality");
  const csv = await res.text();
  return parseCsv(csv);
}

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

function AktualityPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["aktuality-sheet"],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <PageShell>
      <PageHero eyebrow="Aktuality" title="Co se u nás děje" />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <StickerCard key={i} variant="white" className="space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </StickerCard>
            ))}
          </div>
        )}
        {isError && (
          <StickerCard variant="cream" className="text-center">
            <p className="font-bold text-british-red">Aktuality se nepodařilo načíst.</p>
            <p className="mt-1 text-foreground/70">Zkuste to prosím za chvíli znovu.</p>
          </StickerCard>
        )}
        {!isLoading && !isError && data && data.length === 0 && (
          <StickerCard variant="cream" className="text-center">
            <p className="font-bold">Zatím žádné aktuality.</p>
          </StickerCard>
        )}
        {!isLoading && !isError && data && data.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((n, i) => {
              const variants = ["white", "cream", "sun", "mint"] as const;
              const variant = variants[i % variants.length];
              return (
                <Link
                  key={n.id || `${n.titulek}-${i}`}
                  to="/aktuality/$slug"
                  params={{ slug: n.id }}
                  className="block"
                >
                  <StickerCard variant={variant} className="sticker-hover flex h-full flex-col">
                    <h2 className="font-display text-xl font-bold">{n.titulek}</h2>
                    <p className="mt-2 line-clamp-4 text-foreground/80">{n.podtext}</p>
                    <div className="mt-auto pt-4 inline-flex items-center gap-2 font-bold text-royal">
                      Zobrazit více <ArrowRight className="h-4 w-4" />
                    </div>
                  </StickerCard>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </PageShell>
  );
}