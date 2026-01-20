import { useState } from 'react';

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#strategie', label: 'Strategie' },
  { href: '#struktur', label: 'Struktur' },
  { href: '#prozess', label: 'Ablauf' },
  { href: '#vertrauen', label: 'Vertrauen' },
  { href: '#insights', label: 'Service' },
  { href: '#kontakt', label: 'Kontakt' },
];

const serviceHighlights = [
  {
    title: 'Vermögensstrategie & Ziele',
    text: 'Klare Zielbilder, priorisierte Lebensphasen und realistische Rendite-Risiko-Rahmen.',
  },
  {
    title: 'Portfolio-Architektur',
    text: 'Diversifiziert, transparent, mit nachvollziehbarer Logik statt Produktverkauf.',
  },
  {
    title: 'Risikomanagement & Liquidität',
    text: 'Sicherheitsbausteine, Liquiditätsplanung und Stress-Tests für Ruhe im Alltag.',
  },
];

const strategyPillars = [
  {
    title: 'Standortbestimmung',
    text: 'Vermögen, Verpflichtungen, Werte – wir schaffen eine ehrliche Ausgangsbasis.',
  },
  {
    title: 'Leitplanken definieren',
    text: 'Risikoprofil, Zeithorizont und Liquiditätsbedarfe als feste Orientierung.',
  },
  {
    title: 'Planung mit Szenarien',
    text: 'Mehrere Zukunftsbilder geben Sicherheit bei Marktbewegungen.',
  },
];

const structureHighlights = [
  {
    title: 'Vermögensstruktur & Nachfolge',
    text: 'Familie, Stiftung oder Unternehmen – die Struktur folgt Ihren Werten.',
  },
  {
    title: 'Steuer- & Rechtsabstimmung',
    text: 'In Abstimmung mit Steuer- und Rechtsexperten (nach Bedarf und Freigabe).',
  },
  {
    title: 'Monitoring & Berichte',
    text: 'Regelmäßige Reviews, transparente Reportings und ruhige Kommunikation.',
  },
];

const processSteps = [
  {
    title: 'Erstgespräch',
    text: 'Ziele, Werte und Rahmenbedingungen verstehen – vertraulich und strukturiert.',
    meta: '60 Minuten',
  },
  {
    title: 'Analyse & Konzept',
    text: 'Bestandsaufnahme, Szenarien und ein individueller Strategieentwurf.',
    meta: '2–3 Wochen',
  },
  {
    title: 'Umsetzung',
    text: 'Schrittweise Implementierung mit klarer Dokumentation.',
    meta: 'Nach Vereinbarung',
  },
  {
    title: 'Begleitung',
    text: 'Regelmäßige Reviews, Anpassungen und Sparrings-Formate.',
    meta: 'Quartalsweise',
  },
];

const trustPoints = [
  'Unabhängige Beratung ohne Produktdruck.',
  'Klar strukturierte Dokumentation.',
  'Langfristige Begleitung statt kurzfristiger Maßnahmen.',
  'Vertraulicher Umgang mit sensiblen Daten.',
];

const testimonials = [
  {
    quote:
      '„Endlich eine Beratung, die unsere Familie wirklich versteht und nichts beschönigt.“',
    author: 'Mandant (anonymisiert)',
  },
  {
    quote:
      '„Die Strategie ist nachvollziehbar – wir wissen jetzt, warum wir was tun.“',
    author: 'Mandantin (anonymisiert)',
  },
  {
    quote:
      '„Ruhig, klar, strukturiert. Genau die Begleitung, die wir gesucht haben.“',
    author: 'Mandant (anonymisiert)',
  },
];

const serviceOffers = [
  {
    title: 'Quartals-Update',
    text: 'Ein kompaktes Gespräch mit Überblick über Märkte, Risiken und Chancen.',
  },
  {
    title: 'Familien- & Generationenrunde',
    text: 'Gemeinsames Gespräch zu Werten, Rollen und langfristigen Zielen.',
  },
  {
    title: 'Krisen-Check',
    text: 'Überprüfung der Liquidität und Stabilität bei Marktstress.',
  },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(false);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">Mustername Vermögensberatung</div>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            Menü
          </button>
          <nav
            id="primary-nav"
            className={`nav${navOpen ? ' open' : ''}`}
            aria-label="Hauptnavigation"
          >
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <a className="nav-cta btn btn-primary" href="mailto:kontakt@mustermann-beratung.de">
                Erstgespräch
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">Vermögen mit Ruhe führen.</span>
              <h1>Strategie, die schützt und Möglichkeiten schafft.</h1>
              <p>
                Klar strukturierte Vermögensberatung für Menschen, die Verantwortung tragen. Ohne
                Produktdruck, mit Substanz und langfristiger Perspektive.
              </p>
              <div className="button-row">
                <a className="btn btn-primary" href="mailto:kontakt@mustermann-beratung.de">
                  Erstgespräch vereinbaren
                </a>
                <a className="btn btn-secondary" href="#kontakt">
                  Kontakt aufnehmen
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>Unabhängig</strong>
                  <span>Honorarorientiert</span>
                </div>
                <div>
                  <strong>Strukturiert</strong>
                  <span>Klare Leitplanken</span>
                </div>
                <div>
                  <strong>Langfristig</strong>
                  <span>Begleitung statt Aktionismus</span>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div
                className="photo-panel photo-panel--hero"
                role="img"
                aria-label="Ruhiger Besprechungsraum mit Notizen und Licht"
              >
                <div className="photo-panel__label">Diskretion & Fokus</div>
                <div className="photo-panel__title">Klarheit schafft Vertrauen.</div>
                <div className="photo-panel__meta">
                  <span>Vertrauliche Gespräche</span>
                  <span>Durchdachte Strategien</span>
                </div>
              </div>
              <div className="photo-stack">
                <div
                  className="photo-panel photo-panel--detail"
                  role="img"
                  aria-label="Detailaufnahme von Unterlagen"
                />
                <div
                  className="photo-panel photo-panel--portrait"
                  role="img"
                  aria-label="Beratungssituation am Tisch"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="section section--collections">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Leistungen mit Klarheit.</h2>
                <p className="section-subtitle">
                  Strukturierte Beratung von der Zieldefinition bis zur Portfolioarchitektur – immer
                  nachvollziehbar dokumentiert.
                </p>
              </div>
              <div className="section-visual section-visual--orbit" aria-hidden="true" />
            </div>
            <div className="collection-grid">
              {serviceHighlights.map((item) => (
                <article key={item.title} className="card card--glass">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="pill-row" aria-label="Beratungsprinzipien">
              <span>Transparenz</span>
              <span>Verantwortung</span>
              <span>Familienorientiert</span>
              <span>Ruhige Umsetzung</span>
            </div>
          </div>
        </section>

        <section id="strategie" className="section section--lens">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Strategie, bevor Produkte kommen.</h2>
                <p className="section-subtitle">
                  Erst Struktur und Leitplanken, dann Entscheidungen. So entsteht Stabilität, die
                  Sie jederzeit nachvollziehen können.
                </p>
              </div>
              <div className="section-visual section-visual--orbit" aria-hidden="true" />
            </div>
            <div className="cards cards--wide">
              {strategyPillars.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="struktur" className="section section--atelier">
          <div className="container">
            <div className="split">
              <div>
                <span className="badge badge--soft">Vermögensstruktur</span>
                <h2 className="section-title">Ordnung, die Generationen trägt.</h2>
                <p className="section-subtitle">
                  Vermögen wächst nicht nur im Depot. Struktur, Nachfolge und klare Zuständigkeiten
                  sind der stabile Rahmen.
                </p>
                <div className="list-grid">
                  {structureHighlights.map((item) => (
                    <div key={item.title}>
                      <strong>{item.title}</strong>
                      <p className="small">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="photo-panel photo-panel--atelier"
                role="img"
                aria-label="Besprechungsraum mit übersichtlichen Unterlagen"
              />
            </div>
          </div>
        </section>

        <section id="prozess" className="section section--process">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">So arbeiten wir zusammen.</h2>
                <p className="section-subtitle">
                  Planbar, transparent und mit klaren Schritten – damit Sie jederzeit den Überblick
                  behalten.
                </p>
              </div>
              <div className="section-visual section-visual--ripple" aria-hidden="true" />
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article key={step.title} className="process-card">
                  <div className="process-card__index">{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <span className="process-card__meta">{step.meta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="vertrauen" className="section section--trust">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Vertrauen entsteht durch Transparenz.</h2>
                <p className="section-subtitle">
                  Entscheidungen brauchen Ruhe, Daten und Klarheit. Genau dafür ist der Prozess
                  geschaffen.
                </p>
              </div>
              <div className="section-visual section-visual--grid" aria-hidden="true" />
            </div>
            <div className="trust-grid">
              {trustPoints.map((point) => (
                <div key={point} className="trust-item">
                  <span className="trust-dot" aria-hidden="true" />
                  <p>{point}</p>
                </div>
              ))}
              <div className="trust-card">
                <h3>Diskretion & Verantwortung.</h3>
                <p>
                  Vermögensberatung ist Vertrauenssache. Daher steht Vertraulichkeit in jeder Phase
                  im Mittelpunkt.
                </p>
              </div>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <figure key={item.author} className="testimonial-card">
                  <blockquote>{item.quote}</blockquote>
                  <figcaption>{item.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="section section--offers">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Service, der Orientierung gibt.</h2>
                <p className="section-subtitle">
                  Regelmäßige Updates und klare Formate, damit Entscheidungen nicht aufgeschoben
                  werden müssen.
                </p>
              </div>
              <div className="section-visual section-visual--ripple" aria-hidden="true" />
            </div>
            <div className="cards">
              {serviceOffers.map((offer) => (
                <article key={offer.title} className="card card--soft">
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                </article>
              ))}
            </div>
            <div className="offer-cta">
              <div>
                <h3>Bereit für Klarheit?</h3>
                <p className="small">
                  Ein Erstgespräch gibt Ihnen eine strukturierte Einordnung – ohne Verpflichtung.
                </p>
              </div>
              <a className="btn btn-primary" href="mailto:kontakt@mustermann-beratung.de">
                Erstgespräch anfragen
              </a>
            </div>
          </div>
        </section>

        <section id="kontakt" className="section section--contact">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Kontakt &amp; Erstgespräch</h2>
                <p className="section-subtitle">
                  Für vertrauliche Gespräche reserviere ich feste Zeitfenster – gerne nach
                  Vereinbarung.
                </p>
              </div>
              <div className="section-visual section-visual--pin" aria-hidden="true" />
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <p><strong>Mustername Vermögensberatung</strong></p>
                <p>Inhaber: Max Mustermann (Platzhalter)</p>
                <p>Musterstraße 12<br />10115 Berlin</p>
                <p>
                  Telefon: <a href="tel:+493011122233">030 111 222 33</a><br />
                  E-Mail: <a href="mailto:kontakt@mustermann-beratung.de">kontakt@mustermann-beratung.de</a>
                </p>
                <p><strong>Verfügbarkeit</strong></p>
                <p>Mo – Fr: 09:00 – 18:00 (nur nach Termin)</p>
                <p className="small">
                  Hinweis: Kontaktdaten dienen als Platzhalter und werden im Projektfinale ersetzt.
                </p>
              </div>
              <div className="contact-card contact-card--accent">
                <h3>Diskretion garantiert.</h3>
                <p>
                  Ihre Angaben werden ausschließlich für die Kontaktaufnahme genutzt. Keine
                  Weitergabe, keine Newsletter, keine Tracking-Tools.
                </p>
                <p className="small">Alternativ: Schreiben Sie uns direkt eine E-Mail.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <span>&copy; 2024 Mustername Vermögensberatung</span>
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
