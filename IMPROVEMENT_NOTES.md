# IMPROVEMENT_NOTES

## Entscheidungen
- Umsetzung als **Plain HTML/CSS/JS** ohne Build-Tool, um Wartbarkeit und schnelle Bereitstellung zu sichern.
- Privacy-First: Externe Karte wird nur nach Klick geladen (Click-to-Load).

## Offene Punkte / Annahmen
- Die Karten-URL ist aktuell auf den DVB-Link aus der Live-Seite gesetzt. Bitte prüfen, ob eine Google-Maps-Embed-URL bevorzugt wird und ggf. ersetzen.
- Bilder aus der Live-Seite wurden nicht übernommen (Repo enthält keine Bild-Assets). Wenn gewünscht, bitte lizenzierte Originalbilder bereitstellen und in `assets/img/` ablegen.
