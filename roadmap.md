ROADMAP

1. ## DOMÄNE EINRICHTEN (1H)
  - Hauptdomäne
  - Unterdomäne (Welt / Admin)
1. ## SERVER-KONFIGURATION (3H)
  - Datenbank-Server
  - Webserver
  - Mailserver
1. ## LANDING-PAGE (8H)
  - AGB / Datenschutz
  - Vorstellung des Projekts
1. ## REGISTRIEREN UND ANMELDEN (8H)
  - Registrieren / Bestätigen
  - Anmelden / Abmelden
  - Passwort vergessen
  - Löschen
1. ## WELTEN-LOBBY (12H)
  - Welten auflisten
    - Alphawelt
    - Betawelt
  - Character Erstellen / Löschen
  - Spieler-Inventar
1. ## KOMMUNIKATION - WEBSOCKET (40H)
  - Bidirektionale synchrone Verbindung aufbauen
  - Kommunikationsprotokoll
  - Parser / Interpreter
  - Datenbankzugriffe & Event Verarbeitung
1. ## SPIELWELT & ADMINISTRATION (36H)
  - Höhenwerte generieren (Noise 0 - 255)
  - Boden / Ressourcen verteilen
  - Wasserlevel setzen (~ 63)
  - Zyklisch generieren von
    - Feuchtigkeitskarte (0 - 255)
      - Vom Wasser
      - Blurring abh. Höhenwert
    - Temperaturkarte (0 - 255)
      - Vom Land
      - Blurring abh. Höhenwert
    - Terrainkarte (indexiert)
     - Pflanzen
       - Wachsen:
         - Hohe Feuchtigkeit
         - (und)
         - Mittl. Temperatur
       - Sterben:
         - Niedr. Feuchtigkeit
         - (oder)
         - Hohe Temperatur
1. ## CHARACTER - SPIELWELT (30H)
  - Bewegungssteuerung des Characters
    - Touch / Maus (ggf. mit Queue)
  - Ansehen des Inventars
  - Aufsammeln von Gegenständen
    - Zweige
    - Steine
    - Nüsse
  - Verarbeiten von Gegenständen
    - Messer
    - Axt
    - Hammer
    - Speer
  - Förderungs-Handwerk (primitives)
    - Holzfällen
    - Lagerfeuer
    - Unterstand aufstellen
1. ## KAMPF (36H)
  - Character-Stats
  - Level
    - Stärke
    - Geschicklichkeit
    - Intelligenz
    - Konstitution
  - Leben
  - Ausdauer
  - Angriffe & Fähigkeiten
  - Kampf-Engine (Basis)
    - Bewegen
    - Angreifen
      - Hitboxen
      - Ausweichen / Blocken
      - Schadensmodelle
      - Schadensklassen
      - Fernkampf
      - Kampfeffekte
  - Looting
  - Mobspawner
    - Anzahl, Stärke, Typ, Loot
    - Position, Richtungvektor
    - Angriff anderer Gruppen abh. von Agressivität
1. ## LAGER / STÄDTE (60H)
  - Handeln
    - Einführen von Münzen
    - Tauschen zwischen Spielern
    - Errichten eines Marktstands
    - „Fahrender Händler“
  - Errichten von Lagern
    - Es wird ein Lagerfeuer aufgestellt und ein Unterstand
  - Errichten von Gebäuden
    - Zelt (Leder, etwas Holz)
    - Unterstand (etwas Holz)
    - Holzhütte (Holz)
    - Holzhaus (viel Holz)
    - Steinhütte (Stein, Holz)
    - Steinhaus (Stein)

(Funktion wird durch den Ausbau bestimmt)

- Palisaden
- Mauern
- Wachturm
- Aussichtsturm
- Wachhaus
- Tor
- Brücke
- Wege
- Straßen
- Ansiedeln von (NPC) Bürgern
  - Bedürfnisse & Gesundheit
  - Individueller Character
  - Handwerksfähigkeit
  - Verwalten der Arbeitskräfte
  - Abbau von Grundressourcen
- Einstellen von Policies
  - Verwaltung der Stadt durch „Gesetze“
- Ausbauen von Lagern
  - Lager (Min. 1 Gebäude, Feuer)
  - Dorf (Min. 15 Gebäude)
  - Siedlung (Min. 40 Gebäude)
  - Stadt (Min. 100 Gebäude, Mauer)
  - Großstadt (Min. 360 Gebäude)
1. ## HANDWERKSSYSTEM (40H)
- Ausbau der Gebäude durch Einrichtung
  - Werkbank
  - Amboss
  - Ofen

Etc.

- Produktion von Gütern
  - Einrichtungsgegenstände
  - Waffen (erstmals Bögen)
  - Rüstung

Etc.

- Sozialgebäude
  - Taverne
  - Arzthaus
  - Bücherei
1. ## ZAUBEREI (36H)
- Verarbeiten von magischen Ressourcen
  - Kräuter
  - Wurzeln
  - Knochen

Etc. zu

- Magiepulvern
- Runensystem
  - Kombination von Zaubern
- Verzauberungen
  - Gegenstände verzaubern
- Erforschen von Zaubern
  - Lernen von Zaubern
  - Schreiben von Büchern
1. ## SEO + BETA (8H)
- Verfassen von Beschreibung / Tags
- Einladen von Freiwilligen zum Balancing
1. ## HAUPT-STORY (120H)
- Tutorial-Quest
  - Einführung wie man spielt
- Story-Quests
  - Story erzählen
- Neben-Quests
  - Beschäftigung der Spieler
- Guidline-Quests
  - Unterstützen der Welt und Spielerschaft
- Vorgeschichte für Landing Page
  - Allgemeines Setting (Lore)
1. ## GEZEITEN, WETTER UND NACHT (100H)
- Jahreszeiten
  - Winter
    - Essenproduktion-
  - Frühling
  - Sommer
    - Wasserverbrauch+
  - Herbst
- Nacht
  - Abh. von Jahreszeit \*\*
  - Nacht
    - Holzverbrauch+
  - Tag
- Gezeiten
  - Pro Mondzyklus
  - Pro Tag/Nacht Zyklus

(Aufaddiert)

- Zusammen: Überflutung?
- Wetter
  - Dürren
  - Regenzeiten
  - Stürme (Sand, Eis)
1. ## RELEASE (80H)
- Balancing
- Durchgehen von Tester-Wünschen


### PARALLEL DAZU
## GRAFIKEN (100 - 400H)
