-- Tighten contact_submissions: restrict grants and replace permissive INSERT policy with validated check

REVOKE ALL ON public.contact_submissions FROM anon;
REVOKE ALL ON public.contact_submissions FROM authenticated;

GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

DROP POLICY IF EXISTS "Anyone can submit a contact form" ON public.contact_submissions;

CREATE POLICY "Anyone can submit a validated contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(message)) BETWEEN 1 AND 5000
  AND (phone IS NULL OR length(phone) <= 50)
  AND (topic IS NULL OR length(topic) <= 100)
);