import { Link, type LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
const variants: Record<Variant, string> = {
  primary: "bg-british-red text-white sticker sticker-hover",
  secondary: "bg-sun text-foreground sticker sticker-hover",
  ghost: "bg-cream text-foreground sticker-sm sticker-hover",
};

type Common = { variant?: Variant; children: ReactNode; className?: string };

export function CTAButton({ to, variant = "primary", children, className, ...rest }: Common & LinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-bold",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function CTAAnchor({
  variant = "primary",
  children,
  className,
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-base font-bold",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}