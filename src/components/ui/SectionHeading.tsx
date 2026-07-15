import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  light,
  center,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-header", center && "section-header--center", className)}>
      <div className="section-label">{label}</div>
      <h2 className={cn("section-title", light && "section-title--light")}>{title}</h2>
      {description ? (
        <p className={cn("section-desc", light && "section-desc--light")}>{description}</p>
      ) : null}
    </div>
  );
}
