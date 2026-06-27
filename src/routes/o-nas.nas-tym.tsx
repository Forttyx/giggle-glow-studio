import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import marcelaImg from "@/assets/real/team-marcela.jpg.asset.json";
import dagmarImg from "@/assets/real/team-dagmar.jpg.asset.json";
import veeImg from "@/assets/real/team-vee.jpg.asset.json";
import oliImg from "@/assets/real/team-oli.jpg.asset.json";
import tutuImg from "@/assets/real/team-tutu.jpg.asset.json";

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
type Member = {
  name: string;
  role: string;
  photo: string;
  contact?: { email?: string; phone?: string };
  bio: string[];
};

const team: Member[] = [
  {
    name: "Mgr. Marcela Brabcová",
    role: "Majitelka a manažerka Anglického Centra",
    photo: marcelaImg.url,
    contact: { email: "info@anglickecentrum.cz", phone: "775 22 00 44" },
    bio: [
      "Angličtina je součástí mého každodenního života od 13 let. Vždycky jsem cestovala, studovala jsem ji na ZČU, pracovala jsem 10 let u americké banky, kde jsem ji používala víc než češtinu. Ačkoli jsem se angličtině věnovala tak dlouho, teprve v práci jsem pochopila, že ji vlastně vůbec neumím a teprve tam jsem se jí během krátkého času v praxi „naučila“. Potkala jsem mnoho kolegů, kteří žili v bilinguálních rodinách a jejichž děti neměly žádný problém od malička mluvit více jazyky. Připadalo mi to skvělé – bez mnohaleté dřiny – a chtěla jsem svým dětem umožnit něco podobného. S manželem jsme ale oba Češi a tak to nešlo úplně přirozeně, způsob jsme si ale našli…",
      "Rozhodla jsem se založit anglickou školičku – pro malý počet dětí tak, abychom se jim mohli plně věnovat a především mluvit na ně jen anglicky. Děti se k nám nechodí učit anglicky, chodí si hrát, zpívat, učí se říkanky a básničky a všechno je to v angličtině – mají tak vlastní prožitky a zkušenosti a přitom si angličtinu osvojují. To je skvělý způsob poznávání a přirozeného učení. Moje maminka mi vždycky říkala: „zkušenosti jsou nepřenosné“ a tak je nepřenášíme, ale umožňujeme je dětem získat.",
      "Baví nás to všechny a děkuji svému skvělému týmu, že tohle poslání pomáhá plnit.",
    ],
  },
  {
    name: "Dagmar Nejedlá",
    role: "Hlavní lektorka, vedoucí programu, lektorka skupiny Butterflies (4–6 let)",
    photo: dagmarImg.url,
    bio: [
      "I love teaching English because I love the language itself and the joy of working with children. It’s amazing how easily young learners can pick up a new language, almost as if it were their own mother tongue, and being part of that journey makes me truly happy. The energy, curiosity, and smiles of the children inspire me to create new adventures for them every day.",
      "One of the most rewarding parts of my job is seeing children arrive so young, then watching them grow in confidence and ability until they are ready to take their next big step into primary school. When they leave, I truly miss them, but I’m grateful for the opportunity to see some of them again in conversation classes — because over time, we grow so close that they feel like a part of my own world.",
    ],
  },
  {
    name: "Vladimíra (Vee) Kolářová",
    role: "Lektorka skupin Butterflies a Caterpillars",
    photo: veeImg.url,
    bio: [
      "Hi, I’m Vlaďka – but most people know me as Vee. My professional journey has been shaped by curiosity, creativity, and a love for working with people. During my student years, I explored a variety of jobs – from receptionist and barista to roles in the sports and advertising industries. These experiences gave me a broad perspective and helped me discover where my heart truly belongs: early childhood education.",
      "In my twenties, I moved to Australia and began studying Early Childhood Education and Care. I worked in several daycares there, where I fell in love with the multicultural environment and the inclusive, hands-on approach to learning. Those years were incredibly formative, both professionally and personally.",
      "After returning to Pilsen, I continued working with young children, bringing with me the inspiration and experience I gained abroad. I was lucky to cross paths with Marcela, and I’ve been part of this amazing team ever since. What I love most is the same multicultural spirit I cherished in Australia – a place where every child, family, and educator brings something unique to the community.",
      "Outside of work, I enjoy arts and crafts, yoga and fitness, and finding fun ways to spark creativity and curiosity through games that support logical thinking. These passions often make their way into my work with children, as I believe in learning through movement, creativity, and exploration.",
    ],
  },
  {
    name: "Olha (Oli) Osyková",
    role: "Asistentka pro všechny děti, kdokoli zrovna potřebuje pomoct s čímkoli",
    photo: oliImg.url,
    bio: [
      "Oli pochází z Ukrajiny a v Čechách žije už přes 5 let. Mluví skvěle anglicky (to je jasné) a také česky, ale stejně jako u Tutu to před dětmi tajíme. Takže dětem, kteří k nám nastupují nově a anglicky ještě neumí, Oli i Tutu rozumějí a když je třeba ví, co potřebují, ale pro děti je to snazší, když „vědí“ že mluví jen anglicky.",
    ],
  },
  {
    name: "Tutuwaa (Tutu) Sarpong",
    role: "Hlavní lektorka skupiny Caterpillars",
    photo: tutuImg.url,
    bio: [
      "Tutu pochází z Ghany, ale v České republice žije již mnoho let. U nás ve školičce učí již 4 roky. Tutu rozumí i mluví česky, ale před dětmi to tajíme.",
      "My name is Tutuwaa Sarpong. I am from Ghana. I have been living in Plzen for 14 years and I have been teaching English since I moved to Plzen. I like teaching English and being around children. Children need a teacher who is patient, kind, caring and understanding. I believe that is who I am. My goal is to make English very easy and enjoyable for children to learn.",
    ],
  },
];

function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Náš tým"
        title="Lidé, díky kterým to funguje"
        description="Tým zkušených lektorek a lektorů, kteří mají děti opravdu rádi."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          {team.map((p, i) => {
            const variants = ["cream", "sun", "mint", "white", "cream"] as const;
            const variant = variants[i % variants.length];
            return (
              <StickerCard
                key={p.name}
                variant={variant}
                shadow={false}
                className="grid gap-6 p-6 sm:p-8 md:grid-cols-[260px_1fr] md:gap-8"
              >
                <div className="rounded-2xl bg-card p-2 sticker-outline">
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">{p.name}</h2>
                  <div className="mt-1 text-sm font-bold uppercase tracking-wide text-royal">
                    {p.role}
                  </div>
                  {p.contact && (
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {p.contact.email && (
                        <a href={`mailto:${p.contact.email}`} className="font-bold text-british-red underline-offset-2 hover:underline">
                          {p.contact.email}
                        </a>
                      )}
                      {p.contact.phone && (
                        <a href={`tel:+420${p.contact.phone.replace(/\s/g, "")}`} className="font-bold text-british-red underline-offset-2 hover:underline">
                          {p.contact.phone}
                        </a>
                      )}
                    </div>
                  )}
                  <div className="mt-4 space-y-3 text-foreground/80">
                    {p.bio.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </StickerCard>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}