import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <section className="section section--dark" id="services">
      <Container>
        <Reveal>
          <SectionHeading
            label="What We Do"
            title="Full Solar Asset Lifecycle"
            description="From greenfield development to 25-year operations — led from Kigali, delivered with our certified shareholder partner."
            light
          />
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <Reveal key={service.num} as="article" className="service-card service-card--compact" delay={i * 40}>
              <span className="service-num">{service.num}</span>
              <div className="service-icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
