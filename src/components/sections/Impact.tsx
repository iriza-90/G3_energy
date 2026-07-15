"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMPACT_METRICS } from "@/data/content";
import { useCountUp, useReveal } from "@/hooks/useReveal";

function ImpactCard({
  value,
  label,
  description,
  count,
  prefix,
  suffix,
  decimals,
  delay,
}: {
  value: string;
  label: string;
  description: string;
  count?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay: number;
}) {
  const { ref, visible } = useReveal(delay);
  const animated = useCountUp(count, {
    prefix,
    suffix,
    decimals,
    enabled: visible && count !== undefined,
  });

  return (
    <div ref={ref} className={`reveal impact-card ${visible ? "is-visible" : ""}`}>
      <span className="impact-value">{count !== undefined ? animated : value}</span>
      <span className="impact-label">{label}</span>
      <p>{description}</p>
    </div>
  );
}

export function Impact() {
  return (
    <section className="section section--impact" id="impact">
      <Container>
        <Reveal>
          <SectionHeading
            label="Our Impact"
            title="Numbers That Matter"
            description="Every megawatt we generate is a step towards universal energy access across Africa."
            light
          />
        </Reveal>

        <div className="impact-grid">
          {IMPACT_METRICS.map((metric, i) => (
            <ImpactCard key={metric.label} {...metric} delay={i * 75} />
          ))}
        </div>
      </Container>
    </section>
  );
}
