import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ESG } from "@/data/content";

export function Values() {
  return (
    <section className="section section--light" id="impact">
      <Container>
        <Reveal>
          <SectionHeading
            label="ESG"
            title="How We Deliver Responsibly"
            description="Clear commitments on environment, people and community — built into every project."
            center
          />
        </Reveal>

        <div className="esg-grid">
          {ESG.map((column, i) => (
            <Reveal key={column.title} as="article" className="esg-card" delay={i * 80}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
