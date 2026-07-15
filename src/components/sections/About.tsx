"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_FEATURES, PILLARS } from "@/data/content";

function SolarPanelVisual() {
  const [lit, setLit] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const animate = () => {
      const next = new Set<number>();
      const n = 8 + Math.floor(Math.random() * 16);
      for (let i = 0; i < n; i++) next.add(Math.floor(Math.random() * 63));
      setLit(next);
    };
    animate();
    const id = window.setInterval(animate, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="solar-panel">
      <div className="solar-panel__cells">
        {Array.from({ length: 63 }, (_, i) => (
          <div
            key={i}
            className={
              lit.has(i)
                ? `solar-cell ${i % 3 === 0 ? "is-hot" : "is-lit"}`
                : "solar-cell"
            }
          />
        ))}
      </div>
      <div className="solar-panel__shine" />
      <div className="solar-panel__badge">
        <strong>100%</strong>
        <span>Renewable</span>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="section section--light" id="about">
      <Container className="about-grid">
        <Reveal className="about-visual">
          <SolarPanelVisual />
          <div className="g3-pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="pillar">
                <span className="pillar-letter">{p.letter}</span>
                <div>
                  <strong>{p.title}</strong>
                  <small>{p.subtitle}</small>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-content" delay={100}>
          <div className="section-label">Who We Are</div>
          <h2 className="section-title">Africa&apos;s Next-Generation Energy Company</h2>
          <p className="section-desc">
            G3 Energy International Ltd is incorporated in Rwanda and built to scale across the African continent. We develop, finance, build, and operate utility-scale solar power plants in partnership with national governments, development finance institutions, and global technology partners.
          </p>
          <ul className="feature-list">
            {ABOUT_FEATURES.map((f) => (
              <li key={f.title}>
                <div className="feature-icon">
                  <Icon name={f.icon} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
