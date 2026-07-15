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
            label="Full Asset Lifecycle"
            title="From Greenfield to 25-Year Operations"
            description="Development and regulatory work led by our Rwandan team; engineering, construction and equipment supply through our strategic partner's certified capabilities."
            light
          />
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <Reveal key={service.num} as="article" className="service-card" delay={i * 50}>
              <span className="service-num">{service.num}</span>
              <div className="service-icon">
                <Icon name={service.icon} />
              </div>
              <span className="service-cat">{service.cat}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
