import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CREDENTIALS, PROJECTS } from "@/data/content";

export function Capability() {
  return (
    <section className="section section--muted" id="capability">
      <Container>
        <Reveal>
          <SectionHeading
            label="Capability"
            title="Proven Delivery & Certified Strength"
            description="Completed utility-scale projects plus the licences and standards our founding EPC shareholder brings to every G3 site."
          />
        </Reveal>

        <div className="capability-projects">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} as="article" className="capability-project" delay={i * 80}>
              <span className="capability-project__place">{project.place}</span>
              <div className="capability-project__top">
                <h3>{project.title}</h3>
                <strong>{project.highlight}</strong>
              </div>
              <p>{project.summary}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="capability-creds" delay={120}>
          <h3>Licences & Trust Signals</h3>
          <div className="capability-creds__grid">
            {CREDENTIALS.map((item) => (
              <div key={item.grade} className="capability-cred">
                <strong>{item.grade}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
