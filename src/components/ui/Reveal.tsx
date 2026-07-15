"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "@/hooks/useReveal";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "li" | "section";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal(delay);

  return (
    <Tag ref={ref as never} className={cn("reveal", visible && "is-visible", className)}>
      {children}
    </Tag>
  );
}
