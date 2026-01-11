import { useState } from 'react';

const mapSrc =
  'https://www.dvb.de/de-de/hl?id=0100poiID%3A2104106643%3A14612000%3A-1%3ADVB-Kundenzentrum%3ADresden%3ADVB-Kundenzentrum%3AANY%3APOI%3A4621698%3A501254%3ANAV4%3Avvo';

const navLinks = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#atelier', label: 'Atelier' },
  { href: '#vertrauen', label: 'Vertrauen' },
  { href: '#angebote', label: 'Angebote' },
  { href: '#kontakt', label: 'Kontakt' },
];

const serviceHighlights = [
  {
    title: 'Brillen, die Persönlichkeit zeigen.',
    text: 'Markant, elegant, sportlich – Fassungen, die Ihren Stil tragen und die Augenlinie betonen.',
  },
  {
    title: 'Kontaktlinsen mit Präzision.',
    text: 'Individuell angepasst, mit Hornhaut-Topographie und engmaschiger Kontrolle für langes Wohlgefühl.',
  },
  {
    title: '3D-Sehanalyse mit Feingefühl.',
    text: 'Visionix 120 für Kontrast, Tiefenschärfe und klares Sehen bei Tages- und Kunstlicht.',
  },
];

const trustPoints = [
  '30+ Jahre Erfahrung in Dresden.',
  'Persönliche 1:1 Beratung ohne Zeitdruck.',
  'Achtsame Auswahl von Markenfassungen & Premium-Gläsern.',
  'Transparente Empfehlungen, nachvollziehbar erklärt.',
];

const offers = [
  {
    title: 'Brillenberatung mit Stilprofil',
    text: 'Gesichtsform, Blickachsen, Material und Alltag – wir kuratieren Ihre perfekte Linie.',
  },
  {
    title: 'Kontaktlinsen-Startpaket',
    text: 'Einweisung, Hygieneplan und Follow-up – damit Sie sicher starten und bleiben.',
  },
  {
    title: 'Sehanalyse-Upgrade',
    text: '3D-Refraktion plus Kontrasttests für detailreiches Sehen in jeder Situation.',
  },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleNavClick = () => {
    setNavOpen(false);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">Optik Schorcht</div>
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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta" href="https://www.sehen.de/augenoptiker-suche/dresden/01067/augenoptik-schorcht/terminanfrage/" target="_blank" rel="noreferrer">
              Termin
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">Sehen erleben.</span>
              <h1>Fotorealistisch. Ruhig. Präzise.</h1>
              <p>
                Optik Schorcht verbindet feinfühlige Beratung mit hochwertiger Technik – in einem
                Atelier, das Licht, Material und Ruhe neu denkt.
              </p>
              <div className="button-row">
                <a
                  className="btn btn-primary"
                  href="https://www.sehen.de/augenoptiker-suche/dresden/01067/augenoptik-schorcht/terminanfrage/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Termin vereinbaren
                </a>
                <a className="btn btn-secondary" href="#kontakt">
                  Kontakt aufnehmen
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>30+ Jahre</strong>
                  <span>Optik-Kompetenz</span>
                </div>
                <div>
                  <strong>3D-Analyse</strong>
                  <span>Visionix 120</span>
                </div>
                <div>
                  <strong>1:1 Beratung</strong>
                  <span>Mit Zeit</span>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div className="photo-panel photo-panel--hero" role="img" aria-label="Premium-Atelier mit warmem Licht">
                <div className="photo-panel__label">Atelier-Atmosphäre</div>
                <div className="photo-panel__title">Wärme. Textur. Licht.</div>
                <div className="photo-panel__meta">
                  <span>Fotorealistische Tiefenwirkung</span>
                  <span>Framer-Ästhetik</span>
                </div>
              </div>
              <div className="photo-stack">
                <div className="photo-panel photo-panel--detail" role="img" aria-label="Detailaufnahme einer Brille" />
                <div className="photo-panel photo-panel--portrait" role="img" aria-label="Beratung im Fokus" />
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="section section--lens">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Ihr Sehen. Ihr Stil. Ihre Lösung.</h2>
                <p className="section-subtitle">
                  Brillen, Kontaktlinsen und präzise Sehanalyse – individuell abgestimmt und mit
                  ruhiger Beratung. Sie wählen. Ich berate.
                </p>
              </div>
              <div className="section-visual section-visual--orbit" aria-hidden="true" />
            </div>
            <div className="cards cards--wide">
              {serviceHighlights.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="atelier" className="section section--atelier">
          <div className="container">
            <div className="split">
              <div>
                <span className="badge badge--soft">Atelier</span>
                <h2 className="section-title">Ein Raum, der entschleunigt.</h2>
                <p className="section-subtitle">
                  Das Atelier ist bewusst kuratiert: matte Materialien, warme Texturen und
                  atmosphärisches Licht sorgen für ein echtes Ankommen.
                </p>
                <div className="list-grid">
                  <div>
                    <strong>Intime Beratung</strong>
                    <p className="small">Klare Abläufe, keine Hektik, alles im Blick.</p>
                  </div>
                  <div>
                    <strong>Materialwelt</strong>
                    <p className="small">Fassungen, die haptisch überzeugen und langlebig sind.</p>
                  </div>
                  <div>
                    <strong>Lichtplanung</strong>
                    <p className="small">Farbtemperaturen, die reale Wahrnehmung unterstützen.</p>
                  </div>
                </div>
              </div>
              <div className="photo-panel photo-panel--atelier" role="img" aria-label="Innenraum mit ruhigem Licht" />
            </div>
          </div>
        </section>

        <section id="vertrauen" className="section section--trust">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Vertrauen entsteht im Detail.</h2>
                <p className="section-subtitle">
                  Präzise Messung, nachvollziehbare Empfehlung und Qualitätsprodukte, die lange
                  begleiten.
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
                <h3>Premium-Qualität, die man sieht.</h3>
                <p>
                  SEIKO-Markengläser mit Verträglichkeitsgarantie sowie sorgfältig ausgewählte
                  Manufakturfassungen – für sichtbare Perfektion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="angebote" className="section section--offers">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Angebote, die Sinn ergeben.</h2>
                <p className="section-subtitle">
                  Klar kuratierte Leistungen, die Ihnen Orientierung geben und hochwertige Ergebnisse
                  sichern.
                </p>
              </div>
              <div className="section-visual section-visual--ripple" aria-hidden="true" />
            </div>
            <div className="cards">
              {offers.map((offer) => (
                <article key={offer.title} className="card card--soft">
                  <h3>{offer.title}</h3>
                  <p>{offer.text}</p>
                </article>
              ))}
            </div>
            <div className="offer-cta">
              <div>
                <h3>Termin? Wir nehmen uns Zeit.</h3>
                <p className="small">
                  ZEIT nehmen, ZEIT haben – für Ihre Augen und Ihre Wünsche. Ich will, dass Sie Sehen
                  erleben.
                </p>
              </div>
              <a
                className="btn btn-primary"
                href="https://www.sehen.de/augenoptiker-suche/dresden/01067/augenoptik-schorcht/terminanfrage/"
                target="_blank"
                rel="noreferrer"
              >
                Termin anfragen
              </a>
            </div>
          </div>
        </section>

        <section id="kontakt" className="section section--contact">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Kontakt &amp; Öffnungszeiten</h2>
                <p className="section-subtitle">
                  Zentral in Dresden, leicht erreichbar, mit viel Zeit für Sie.
                </p>
              </div>
              <div className="section-visual section-visual--pin" aria-hidden="true" />
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <p><strong>Optik Schorcht</strong></p>
                <p>Inhaber: Joachim Skorupa</p>
                <p>Kleine Brüdergasse 1<br />01067 Dresden</p>
                <p>
                  Telefon: <a href="tel:+493514901510">0351 4901510</a><br />
                  E-Mail: <a href="mailto:optik.schorcht@euronet-server.com">optik.schorcht@euronet-server.com</a>
                </p>
                <p><strong>Öffnungszeiten</strong></p>
                <p>Mo / Di / Do / Fr: 09:00 – 18:00</p>
                <p>Mittwoch: geschlossen</p>
                <p>Samstag: nach Vereinbarung</p>
                <p className="small">Zeit nehmen. Zeit haben. Für Ihre Augen. Für Ihre Wünsche.</p>
              </div>
              <div className="map-shell">
                {!mapLoaded ? (
                  <div className="map-placeholder">
                    <p><strong>Karte laden</strong></p>
                    <p className="small">
                      Zum Schutz Ihrer Daten wird die Karte erst nach Klick geladen. Es werden dabei
                      Inhalte von Drittanbietern abgerufen.
                    </p>
                    <button className="btn btn-primary" type="button" onClick={() => setMapLoaded(true)}>
                      Karte laden
                    </button>
                  </div>
                ) : (
                  <iframe
                    className="map-frame"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapSrc}
                    title="Anfahrt"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <span>&copy; Optik Schorcht</span>
            <a href="/impressum.html">Impressum</a>
            <a href="/datenschutz.html">Datenschutz</a>
            <a href="https://www.1xo.de/" target="_blank" rel="noreferrer">
              ZVA / 1XO
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
