import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Zadejte prosím jméno").max(100),
  email: z.string().trim().email("Neplatný e-mail").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  topic: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Krátká zpráva").max(2000),
  gdpr: z.literal(true, { errorMap: () => ({ message: "Souhlas s GDPR je nutný" }) }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Backend není nakonfigurovaný.");
    const supabase = createClient(url, key, {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      topic: data.topic || null,
      message: data.message,
    });
    if (error) {
      console.error("[contact] insert error", error);
      throw new Error("Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.");
    }
    return { ok: true as const };
  });