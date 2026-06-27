import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); row = []; field = "";
      } else field += c;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  if (rows.length < 2) return [];
  const header = rows[0].map((h) => h.trim().toLowerCase());
  const iId = header.indexOf("id");
  const iTitle = header.indexOf("titulek");
  const iPod = header.indexOf("podtext");
  const iText = header.indexOf("text");
  return rows.slice(1)
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
  return parseCsv(await res.text());
}

export const Route = createFileRoute("/aktuality/$slug")({
  head: () => ({
    meta: [
      { title: "Aktualita — Anglické Centrum Plzeň" },
      { name: "description", content: "Aktualita z Anglického Centra Plzeň" },
    ],
  }),
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["aktuality-sheet"],
    queryFn: fetchNews,
    staleTime: 5 * 60 * 1000,
  });
  const post = data?.find((p) => p.id === slug);

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link to="/aktuality" className="inline-flex items-center gap-2 text-sm font-bold text-royal hover:underline">
          <ArrowLeft className="h-4 w-4" /> Zpět na aktuality
        </Link>
        {isLoading && (
          <div className="mt-8 space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-40 w-full" />
          </div>
        )}
        {!isLoading && (isError || !post) && (
          <div className="mt-12 text-center">
            <h1 className="font-display text-4xl font-bold">Aktualita nenalezena</h1>
            <Link to="/aktuality" className="mt-6 inline-block font-bold text-royal underline">Zpět na aktuality</Link>
          </div>
        )}
        {!isLoading && post && (
          <>
            <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl">{post.titulek}</h1>
            {post.podtext && (
              <p className="mt-3 text-lg text-foreground/70">{post.podtext}</p>
            )}
            <StickerCard variant="cream" className="mt-8 text-base text-foreground/80">
              <div className="prose-aktuality">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: (props) => <h2 className="mt-6 mb-3 font-display text-2xl font-bold text-royal" {...props} />,
                    h2: (props) => <h3 className="mt-6 mb-3 font-display text-xl font-bold text-royal" {...props} />,
                    h3: (props) => <h4 className="mt-5 mb-2 font-display text-lg font-bold text-royal" {...props} />,
                    p: (props) => <p className="my-3 leading-relaxed" {...props} />,
                    ul: (props) => <ul className="my-3 list-disc space-y-1 pl-6" {...props} />,
                    ol: (props) => <ol className="my-3 list-decimal space-y-1 pl-6" {...props} />,
                    a: (props) => <a className="font-bold text-royal underline" target="_blank" rel="noreferrer" {...props} />,
                    strong: (props) => <strong className="font-bold text-foreground" {...props} />,
                  }}
                >
                  {post.text}
                </ReactMarkdown>
              </div>
            </StickerCard>
          </>
        )}
      </article>
    </PageShell>
  );
}