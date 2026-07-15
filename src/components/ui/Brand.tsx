import { SITE } from "@/data/content";
import { cn } from "@/lib/cn";

type BrandProps = {
  href?: string;
  className?: string;
};

export function Brand({ href = "#home", className }: BrandProps) {
  return (
    <a href={href} className={cn("brand", className)}>
      <span className="brand-mark" aria-hidden="true">
        {SITE.shortName}
      </span>
      <span className="brand-text">
        <span className="brand-name">{SITE.name}</span>
        <span className="brand-tag">{SITE.tagline}</span>
      </span>
    </a>
  );
}
