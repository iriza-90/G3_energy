import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRACK_RECORD } from "@/data/content";

export function TrackRecord() {
  return (
    <section className="section section--muted" id="track-record">
      <Container>
        <Reveal>
          <SectionHeading
            label="Proven Delivery"
            title="Track Record That Travels"
            description="Completed utility-scale and distributed PV assets that demonstrate licensing, EPC, financing and grid-connection capability."
          />
        </Reveal>

        <div className="track-grid">
          {TRACK_RECORD.map((project, i) => (
            <Reveal key={project.title} as="article" className="track-card" delay={i * 100}>
              <div className="track-card__top">
                <div>
                  <span className="track-card__sub">{project.subtitle}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="track-card__stat">
                  <strong>{project.highlight}</strong>
                  <span>{project.highlightLabel}</span>
                </div>
              </div>
              <p>{project.description}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
