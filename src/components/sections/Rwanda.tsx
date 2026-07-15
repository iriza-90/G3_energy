"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RWANDA } from "@/data/content";
import { useCountUp, useReveal } from "@/hooks/useReveal";

function Metric({
  value,
  label,
  count,
  suffix,
  decimals,
  delay,
}: {
  value: string;
  label: string;
  count?: number;
  suffix?: string;
  decimals?: number;
  delay: number;
}) {
  const { ref, visible } = useReveal(delay);
  const animated = useCountUp(count, {
    suffix,
    decimals,
    enabled: visible && count !== undefined,
  });

  return (
    <div ref={ref} className={`reveal rwanda-metric ${visible ? "is-visible" : ""}`}>
      <strong>{count !== undefined ? animated : value}</strong>
      <span>{label}</span>
    </div>
  );
}

export function Rwanda() {
  return (
    <section className="section section--dark" id="rwanda">
      <Container>
        <Reveal>
          <SectionHeading
            label="Home Market"
            title="Rwanda Flagship · Then Africa"
            description="A 100–150 MW utility-scale solar IPP in Eastern Province — the foundation for East African expansion."
            light
          />
        </Reveal>

        <div className="rwanda-layout">
          <Reveal className="rwanda-flagship" delay={50}>
            <span className="rwanda-flagship__label">Target Capacity</span>
            <strong className="rwanda-flagship__value">{RWANDA.capacity}</strong>
            <ul>
              <li>{RWANDA.location}</li>
              <li>{RWANDA.offtake}</li>
              <li>{RWANDA.note}</li>
            </ul>
          </Reveal>

          <div className="rwanda-metrics">
            {RWANDA.metrics.map((metric, i) => (
              <Metric key={metric.label} {...metric} delay={i * 60} />
            ))}
          </div>
        </div>

        <div className="expansion-grid">
          {RWANDA.expansion.map((step, i) => (
            <Reveal key={step.phase} className="expansion-card expansion-card--dark" delay={i * 60}>
              <span className="expansion-phase">{step.phase}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
