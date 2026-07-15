import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FLAGSHIP } from "@/data/content";

export function Flagship() {
  return (
    <section className="section section--dark" id="flagship">
      <Container>
        <Reveal>
          <div className="section-label" style={{ color: "var(--green-400)" }}>
            Rwanda Pipeline
          </div>
          <h2 className="section-title section-title--light">{FLAGSHIP.title}</h2>
          <p className="section-desc section-desc--light" style={{ maxWidth: 640 }}>
            {FLAGSHIP.capacityNote}
          </p>
        </Reveal>

        <div className="flagship-layout">
          <Reveal className="flagship-hero-stat" delay={50}>
            <span className="flagship-capacity">{FLAGSHIP.capacity}</span>
            <span className="flagship-capacity-label">Target Capacity</span>
          </Reveal>

          <Reveal className="flagship-details" delay={100}>
            <div className="flagship-detail">
              <h4>Location</h4>
              <p>{FLAGSHIP.location}</p>
            </div>
            <div className="flagship-detail">
              <h4>Off-take</h4>
              <p>{FLAGSHIP.offtake}</p>
            </div>
            <div className="flagship-detail">
              <h4>Technology</h4>
              <p>{FLAGSHIP.technology}</p>
            </div>
            <div className="flagship-detail">
              <h4>Tariff</h4>
              <p>{FLAGSHIP.tariff}</p>
            </div>
            <div className="flagship-detail">
              <h4>Logistics</h4>
              <p>{FLAGSHIP.logistics}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="flagship-regulatory" delay={150}>
          <span className="strategy-label">Regulatory Pathway</span>
          <p>{FLAGSHIP.regulatoryNote}</p>
        </Reveal>

        <div className="flagship-phases">
          {FLAGSHIP.phases.map((phase, i) => (
            <Reveal key={phase.num} className="flagship-phase" delay={i * 60}>
              <span>{phase.num}</span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
