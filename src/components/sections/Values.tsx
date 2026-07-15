import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALUES } from "@/data/content";

export function Values() {
  return (
    <section className="section section--light" id="values">
      <Container>
        <Reveal>
          <SectionHeading
            label="ESG Commitments"
            title="How We Deliver Responsibly"
            description="Environmental integrity, community partnership and skills transfer — built into every project from day one."
            center
          />
        </Reveal>

        <div className="values-grid">
          {VALUES.map((value, i) => (
            <Reveal key={value.num} as="article" className="value-card" delay={i * 100}>
              <span className="value-num">{value.num}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
