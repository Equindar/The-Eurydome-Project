# REST-API Schnittstelle für LunarEclipse

## IST-Zustand

Aktuell werden rein über einen Webserver die Daten als HTML zugesendet.

## SOLL-Zustand

### Problemstellung:

Es muss eine Kommunikation zwischen Client und Server stattfinden um Aktualisierungen nachzuladen.

### Recherchierte Möglichkeiten:

AJAX
- Nachladen ganzer XML und HTML Elemente
 - Pro: Simpel umzusetzen
 - Contra: Sehr hoher Traffic

REST-API
- Abrufen von Informationen auf dem Server
 - Pro: Relativ einfach, weniger Traffic
 - Contra: Daten müssen verarbeitet werden.

WebSocket
- Dauerhafte bidirektionale Verbindung zum Server
- Pro: Sehr wenig Traffic, Synchron ohne Verzögerungen
- Contra: Aufwendige Umsetzung, Unter Umständen durch Firewall geblockt

### Entscheidungshilfe durch Anforderungen:

Es soll eine einfache Lösung gefunden werden, die bei allen Clients funktioniert und den Server nciht unnötig belastet. Daher ist REST-API die sinnvolste Entscheidug.

### Bestandteile:

Datenbank
- Speichern und Verwalten der Spielerdaten

Backend-Schnittstelle
- Prüfen der Berechtigung und Zusenden der Daten

Frontend-Schnittstelle
- Abrufen und Vermitteln der Daten innerhalb des Frontends

### Probleme die auftreten können:

Gerade für die Testumgebung muss hier auf die Cors-Policy geachtet werden.
Außerdem muss sichergestellt werden, dass die Anfragen sinnvoll organisiert werden und nicht unnötig viele Daten abgefragt werden.

## UMSETZUNGS-Phase

### Geschätzter Aufwand an Personal und Zeiten:

Basisaufbau
- Grundfunktionalität
- 1 Programmierer
- ca. 3 Stunden

Ausarbeitung
- Umsetzung der nötigen Anfragen
- 1 Programmierer
- ca. 7 Stunden

Wartung
- Einsicht der Logs und Verbesserungen
- 1 Programmierer
- dauerhaft

## KONTROLL-Phase
