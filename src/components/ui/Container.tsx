import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "nav";
};

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("container", className)}>{children}</Tag>;
}
