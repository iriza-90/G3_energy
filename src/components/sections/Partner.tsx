import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PARTNER } from "@/data/content";

export function Partner() {
  return (
    <section className="section section--light" id="partner">
      <Container>
        <Reveal>
          <SectionHeading
            label="Strategic Partner"
            title="Shareholder Capability, Not Arm's-Length EPC"
            description={PARTNER.summary}
          />
        </Reveal>

        <Reveal className="partner-banner" delay={80}>
          <div>
            <h3>{PARTNER.name}</h3>
            <p>{PARTNER.nameZh} · Founded {PARTNER.founded}</p>
          </div>
        </Reveal>

        <div className="partner-creds">
          {PARTNER.credentials.map((item, i) => (
            <Reveal key={item.label} className="partner-cred" delay={i * 40}>
              <strong>{item.label}</strong>
              <p>{item.value}</p>
            </Reveal>
          ))}
        </div>

        <ul className="partner-highlights">
          {PARTNER.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
