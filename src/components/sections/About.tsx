"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT_BODY, ABOUT_FEATURES, PILLARS, SITE } from "@/data/content";

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
        <strong>IPP</strong>
        <span>Solar PV</span>
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
          <h2 className="section-title">Rwandan-Led Independent Power Producer</h2>
          <p className="section-desc">{SITE.description}</p>
          <p className="section-desc" style={{ marginTop: 12 }}>
            {ABOUT_BODY.intro}
          </p>

          <div className="mission-grid">
            <div className="mission-card">
              <span>Vision</span>
              <p>{SITE.vision}</p>
            </div>
            <div className="mission-card">
              <span>Mission</span>
              <p>{SITE.mission}</p>
            </div>
          </div>

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

          <dl className="fact-list">
            {ABOUT_BODY.facts.map((fact) => (
              <div key={fact.label} className="fact-item">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
