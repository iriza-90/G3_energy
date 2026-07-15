"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { EXPANSION, MARKETS } from "@/data/content";
import { cn } from "@/lib/cn";

type Market = (typeof MARKETS)[number];

export function Markets() {
  const [active, setActive] = useState<Market>(MARKETS[0]);

  return (
    <section className="section section--muted" id="markets">
      <Container>
        <div className="markets-header">
          <Reveal>
            <div className="section-label">Expansion Path</div>
            <h2 className="section-title">Where We Operate & Expand</h2>
            <p className="section-desc">
              Rwanda first — then a replicable country-subsidiary model across East Africa and,
              over time, the wider continent.
            </p>
          </Reveal>
          <Reveal className="markets-map" delay={100}>
            <div aria-hidden="true">
              <div className="map-ring map-ring--1" />
              <div className="map-ring map-ring--2" />
              <div className="map-ring map-ring--3" />
              <div className="map-dot map-dot--hq" />
            </div>
          </Reveal>
        </div>

        <div className="expansion-grid">
          {EXPANSION.map((step, i) => (
            <Reveal key={step.phase} className="expansion-card" delay={i * 80}>
              <span className="expansion-phase">{step.phase}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="market-pills" delay={150}>
          {MARKETS.map((market) => (
            <button
              key={market}
              type="button"
              className={cn("pill", active === market && "is-active")}
              onClick={() => setActive(market)}
            >
              {market}
            </button>
          ))}
        </Reveal>

        <Reveal className="strategy-card" delay={200}>
          <span className="strategy-label">Subsidiary Model</span>
          <p>
            We register country-specific subsidiaries under the G3 Energy International parent.
            Each country company pursues its own PPA, local permits and project financing — while
            sharing the group&apos;s technology, finance and management expertise from Kigali.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
