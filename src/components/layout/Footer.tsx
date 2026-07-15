import { Brand } from "@/components/ui/Brand";
import { Container } from "@/components/ui/Container";
import { FOOTER_COLUMNS, SITE } from "@/data/content";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <Brand className="brand--footer" />
          <p>{SITE.description}</p>
          <div className="socials">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="X / Twitter" rel="noopener noreferrer" target="_blank">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.name} Ltd. Registered in Rwanda.</p>
        <p className="footer-tagline">G3EI · Powering Africa&apos;s Future</p>
        <p>{SITE.email}</p>
      </Container>
    </footer>
  );
}
