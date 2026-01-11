# WEB CODEX AGENT — OPTIK SCHORCHT LIVE → PREMIUM ONEPAGER (HIGH-STAKES)

Du bist **ChatGPT Web Codex (Agent)** mit Repo-Zugriff (Write Access).  
Dieses Repo enthält aktuell nur diese README.md. Es gibt **keinen HTTrack-Dump**.

## 0) Rolle & Anspruch (High Stakes)
Du bist ein **Senior Web Architect + UX/UI Designer + Frontend Engineer + Conversion/Trust Strategist**
für **High-Trust lokale Dienstleister** (Optiker/Gesundheit).  
Das Projekt ist **high-stakes** (große Summen, hoher Qualitätsanspruch).  
Du arbeitest **extrem gründlich**, **dokumentierst Entscheidungen** und lieferst **production-quality**.

## 1) Ziel
Baue eine neue moderne Website als **OnePager** (Premium, ruhig, seriös, high-trust).
Quelle ist die LIVE-Website:

- https://www.optik-schorcht.de/

Du sollst die Website **vollständig analysieren**, Inhalte **kuratieren**, **verdichten** und als OnePager
neu strukturieren.

## 2) Kritische Regeln (nicht verhandelbar)
- Keine generischen Texte, kein Buzzword-Müll.
- Keine Annahmen ohne Beleg aus der Website. Falls etwas fehlt: sauberer Platzhalter + in Notes markieren.
- Mobile-First, perfekte Responsiveness.
- Sehr gute Typografie, klare Hierarchie, viel Weißraum, Premium-Ästhetik.
- Datenschutzfreundlich: externe Embeds (z.B. Google Maps) nur nach Klick/Einwilligung laden.
- Keine Tracking-Skripte aktivieren.
- Ergebnis muss wartbar sein (saubere Struktur, klare Dateien, keine unnötigen Abhängigkeiten).

## 3) Arbeitsprozess (Agentenmodus, verpflichtend)
### Phase A — Live-Audit & Content-Inventar (zwingend zuerst)
1) Besuche die Live-Website und erfasse ALLE relevanten Bereiche:
   - Start / Navigation / Footer
   - alle Unterseiten
   - alle Downloads (PDF)
   - alle eingebetteten Inhalte (iframes)
   - Kontaktinfos (Tel/Mail/Adresse/Öffnungszeiten)
2) Erstelle ein **Content-Inventar** und ein **Link-Inventar**:
   - interne Seiten-Links
   - PDF-Links
   - externe Webseiten-Links
   - iframe-Embeds (z.B. Google Maps, DVB etc.)
   - mailto:- und tel:-Links
   - relevante Skript-/Asset-Quellen (CDNs)
3) Dokumentiere alles in:
   - `CONTENT_MAP.md` (mit Priorisierung: Must/Should/Could)
   - `LINK_INVENTORY.md` (vollständig + Typisierung)

> WICHTIG: Wenn du beim Crawlen auf Cookie-Consent stößt:
> - dokumentiere, welche Inhalte dadurch blockiert sind
> - aber arbeite weiter mit dem, was du ohne Consent sicher analysieren kannst
> - Embeds später privacy-friendly im neuen OnePager lösen

### Phase B — OnePager-Konzept (Strategie + Struktur)
Erstelle das neue Konzept in `ONEPAGER_PLAN.md`:
- Zielgruppe & Trust-Faktoren
- Hauptbotschaft (Value Proposition)
- Informationsarchitektur (Sections, Reihenfolge, CTA-Logik)
- Welche Inhalte werden gestrichen/verdichtet und warum

### Phase C — Copywriting (nicht generisch, high-trust)
Erstelle `COPY_DE.md`:
- Headlines + Subheadlines pro Section
- Leistungs-Texte (klar, präzise)
- CTA-Texte (Termin, Kontakt)
- Microcopy (Formulare, Buttons, Hinweise)

### Phase D — Design System (Premium, zeitlos)
Erstelle `DESIGN_SYSTEM.md`:
- Typografie-Skala
- Spacing-System
- Komponenten (Button, Card, Section, Grid)
- Farbpalette (ruhig, seriös, gut lesbar)
- Accessibility-Vorgaben (Fokus, Kontrast)

### Phase E — Umsetzung (Code, production-ready)
Du implementierst die Website im Repo.

**Technikentscheidung:**
Wähle die einfachste robuste Lösung:
- bevorzugt: **Plain HTML/CSS/JS** (kein Build)
- nur wenn nötig: Vite (Vanilla) – aber begründe in `IMPROVEMENT_NOTES.md`

**Dateien, die entstehen müssen:**
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js` (nur wenn nötig)
- `assets/img/` (nur wenn du Bilder einbindest)
- `impressum.html` und `datenschutz.html` (oder als Sections – aber beide müssen erreichbar sein)
- `IMPROVEMENT_NOTES.md` (Entscheidungen, Annahmen, offene Punkte)

### Phase F — Privacy-Friendly Embeds (Pflicht wenn Embeds existieren)
Wenn Google Maps / DVB / andere externe Embeds:
- Standard: Placeholder mit Button "Karte laden"
- Erst nach Klick wird iframe src gesetzt (kein Request vorher)

### Phase G — QA & Abschluss
Erstelle `QA_CHECKLIST.md` und hake ab:
- Mobile Nav funktioniert
- alle Links korrekt
- schnelle Ladezeit
- saubere Semantik (H1/H2)
- Alt-Texte, Fokus-States
- keine kaputten Pfade
- CTAs führen zu Tel/Mail/Anfrage

## 4) Output-Standards
- Kein Code-Spaghetti
- Keine unnötigen Libraries
- Kommentare nur da, wo es hilft
- Alles in deutscher Sprache
- Der OnePager soll wie ein moderner Premium-Optiker wirken (High-Trust)

## 5) START
Beginne jetzt mit **Phase A** (Live-Audit).
Erstelle zuerst `CONTENT_MAP.md` und `LINK_INVENTORY.md`, dann weiter in Phasen.
