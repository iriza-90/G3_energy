import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "ghost";
    size?: "md" | "sm";
    fullWidth?: boolean;
    href?: string;
  };

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "btn",
    variant === "primary" && "btn--primary",
    variant === "ghost" && "btn--ghost",
    size === "sm" && "btn--sm",
    fullWidth && "btn--full",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
