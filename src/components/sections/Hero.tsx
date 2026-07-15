"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HERO_STATS, SITE } from "@/data/content";
import { useCountUp, useReveal } from "@/hooks/useReveal";

function StatCard({
  value,
  label,
  count,
  prefix,
  suffix,
}: {
  value: string;
  label: string;
  count?: number;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, visible } = useReveal(0);
  const animated = useCountUp(count, {
    prefix,
    suffix,
    enabled: visible && count !== undefined,
  });

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-value">{count !== undefined ? animated : value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function LiveChart() {
  const [points, setPoints] = useState(() =>
    Array.from({ length: 32 }, () => 30 + Math.random() * 30),
  );
  const [kw, setKw] = useState("42.8");

  useEffect(() => {
    const id = window.setInterval(() => {
      setPoints((prev) => [...prev.slice(1), 18 + Math.random() * 40]);
      setKw((38 + Math.random() * 10).toFixed(1));
    }, 900);
    return () => window.clearInterval(id);
  }, []);

  const w = 320;
  const h = 80;
  const step = w / (points.length - 1);
  const line = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - p).toFixed(1)}`)
    .join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <div className="hero-chart">
      <div className="chart-header">
        <span>Energy Output</span>
        <span className="chart-value">{kw} MW</span>
      </div>
      <svg className="chart-svg" viewBox="0 0 320 80" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3DB87A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3DB87A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#chartFill)" />
        <path d={line} fill="none" stroke="#3DB87A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-mesh" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
      </div>

      <Container className="hero-inner">
        <Reveal className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Independent Power Producer · Kigali, Rwanda · {SITE.profileYear}
          </div>
          <h1 className="hero-title">
            Powering
            <br />
            <em>Africa&apos;s Future</em>
          </h1>
          <p className="hero-lead">{SITE.description}</p>
          <div className="hero-actions">
            <Button href="#services">Explore Services</Button>
            <Button href="#contact" variant="ghost">
              Partner With Us
            </Button>
          </div>
        </Reveal>

        <Reveal className="hero-panel" delay={150}>
          <div className="hero-panel-top">
            <span className="panel-label">Delivery Snapshot</span>
            <span className="panel-status">
              <span className="pulse" /> Active
            </span>
          </div>
          <div className="hero-stats">
            {HERO_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <LiveChart />
        </Reveal>
      </Container>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
