import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContactForm } from "@/lib/contact.functions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactForm({ defaultTopic }: { defaultTopic?: string }) {
  const submit = useServerFn(submitContactForm);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      topic: String(fd.get("topic") || ""),
      message: String(fd.get("message") || ""),
      gdpr: fd.get("gdpr") === "on",
    };
    setLoading(true);
    try {
      await submit({ data } as never);
      toast.success("Děkujeme! Ozveme se vám nejpozději do druhého pracovního dne.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Něco se pokazilo.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border-2 border-foreground/80 bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-sun/60";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-bold">Jméno a příjmení *</span>
          <input name="name" required maxLength={100} className={inputClass} placeholder="Marcela Brabcová" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold">E-mail *</span>
          <input name="email" type="email" required maxLength={255} className={inputClass} placeholder="vase@email.cz" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold">Telefon</span>
          <input name="phone" type="tel" maxLength={40} className={inputClass} placeholder="+420 777 123 456" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-bold">Téma</span>
          <input
            name="topic"
            defaultValue={defaultTopic}
            maxLength={120}
            className={inputClass}
            placeholder="Např. zápis do školičky"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-bold">Zpráva *</span>
        <textarea name="message" required rows={5} maxLength={2000} className={inputClass} placeholder="Napište nám, na co se chcete zeptat…" />
      </label>
      <label className="flex items-start gap-3 text-sm text-foreground/80">
        <input name="gdpr" type="checkbox" required className="mt-1 h-5 w-5 rounded border-2 border-foreground/80 accent-royal" />
        <span>
          Souhlasím se zpracováním osobních údajů dle{" "}
          <a href="/gdpr" className="font-bold text-royal underline">GDPR pravidel</a>.
        </span>
      </label>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-full bg-british-red px-7 py-3 font-display text-base font-bold text-white sticker sticker-hover disabled:opacity-60"
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        Odeslat zprávu
      </button>
    </form>
  );
}