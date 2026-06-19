import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", "space-y-3", className)}>
      {eyebrow && (
        <div className={cn("inline-block rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground sticker-sm", align === "center" && "mx-auto")}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}