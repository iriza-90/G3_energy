import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM } from "@/data/content";

export function Team() {
  return (
    <section className="section section--dark" id="team">
      <Container>
        <Reveal>
          <SectionHeading label="Leadership" title="The G3 Team" light />
        </Reveal>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} as="article" className="team-card" delay={i * 75}>
              <div
                className={`team-avatar team-avatar--${member.variant}`}
                data-init={member.initials}
              />
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
