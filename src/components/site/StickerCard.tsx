import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Variant = "cream" | "white" | "sun" | "mint" | "royal" | "red";
const variantMap: Record<Variant, string> = {
  cream: "bg-cream",
  white: "bg-card",
  sun: "bg-sun",
  mint: "bg-mint",
  royal: "bg-royal text-royal-foreground",
  red: "bg-british-red text-white",
};

export function StickerCard({
  variant = "cream",
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { variant?: Variant }) {
  return <div className={cn("rounded-3xl p-6 sticker", variantMap[variant], className)} {...rest} />;
}