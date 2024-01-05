function parseG(gcode) {
  const params = {};

  const regex = /([A-Z]+)(-?\d+(\.\d+)?|'[^']*')/g;
  let match;

  while ((match = regex.exec(gcode)) !== null) {
    const key = match[1];
    const value = match[2];

    if (value[0] === "'") {
      params[key] = value.slice(1, -1); // Remove single quotes around string
    } else {
      params[key] = parseFloat(value);
    }
  }

  return params;
}

/* FELDERSCHLÜSSEL */
// C  - Character-ID
// CL - Character-Leben (Max)
// CN - Character-Name
// CS -*Character-Ausdauer (Max)
// DA - Schaden-Absorbiert
// DB - Schaden-Geblockt
// DC - Schaden-Kritisch
// DE - Schaden-Ausgewichen
// DF - Schaden-Feuer
// DL - Schaden-Blitz
// DM - Schaden-Verfehlt
// DP - Schaden-Physisch
// DTB- Schaden-Blutung
// DTF- Schaden-Verbrennung
// DTP- Schaden-Vergiftung
// DW - Schaden-Wasser
// E  - Akteur-ID
// EA - Akteur-Aktion
// EC - Akteur-Zauber
// EF - Akteur-Fraktion
// EI - Akteur-Item-ID
// EM - Akteur-Modell
// EO - Akteur-Besitzer-Akteur-ID
// ES - Akteur-Status
// ET -*Akteur-Taktik
// EX - Akteur-X (Aktuell)
// EY - Akteur-Y (Aktuell)
// L  - Beute-Item-ID
// LC - Beute-Item-Anzahl (Nur bei Stapelbaren Items)
// LE -*Beute-Erfahrung
// N  - Zeilennummer
// NT - Zeit (in Ticks)
// O  - Objekt-ID
// OM - Objekt-Modell
// OX - Object-X (Aktuell)
// OY - Objekt-Y (Aktuell)
// PX - Position-X
// PY - Position-Y
// ST - Einstellung-Ticks-pro-Sekunde (Standard: 4)
// T  - Ziel-Akteur-ID
// TA - Ziel-Akteur-Aktion
// TI - Ziel-Akteur-Item-ID
// TM - Ziel-Akteur-Modell
// TS - Ziel-Akteur-Status
// TX - Ziel-Akteur-X (Aktuell)
// TY - Ziel-Akteur-Y (Aktuell)
// * Nur für befreundete Spieler sichtbar