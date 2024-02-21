---
state: Unstructured
level: Data
language: German
---
# Lobby
## IST-Zustand
Die Lobby ist ein neues Feature. Es existiert aktuell keine Basis.
 
## SOLL-Zustand
Das Spielen in der Gruppe ist ein wichtiges, zentrales Spielelement für die Community. Damit soll es bezogen auf die Benutzersteuerung durch wenige Klicks erreichbar sein. Die Steuerung ist simple/einfach, elegant und intuitiv.
  
### Problemstellung:
Die Lobby erlaubt es, dass eingeloggte Spieler sich zu Gruppen zusammenfinden können, um ein gemeinsames Abenteuer zu erleben. Dabei hat der Benutzer die Möglichkeit, eine neue Gruppe zu erstellen und diese zu verwalten oder einer bestehenden Gruppe beizutreten. Der Gruppenleiter hat die Möglichkeit, die Gruppe aufzulösen, Einstellungen zu ändern oder die Zugänglichkeit zur Gruppe zu beschränken.

  

### Recherchierte Möglichkeiten:

// Liste an verschiedenen Möglichkeiten, die das Problem lösen könnten

  

### Entscheidungshilfe durch Anforderungen:

  

// Welche der Möglichkeiten löst das Problem am besten und warum?

  

### Bestandteile:

  

// Abschnitt

// - Kurzbeschreibung der Kernfunktionen

  

### Probleme die Auftreten können:

  

// Liste an Kritischen Punkten, die beachtet werden müssen)

  

## UMSETZUNGS-Phase

  

### Geschätzter Aufwand an Personal und Zeit:

  

// Teilschritt

// - Kurzbeschreibung

// - # Personal

// - ca. # Stunden

  

## Kontroll-Phase
Akzeptanzkriterien / Definition of Done:
- System / Anzeige:
	- Der Dialog Lobby wird für eingeloggte Benutzer (Spieler) angezeigt
	- Der Dialog Lobby wird für nicht eingeloggte Benutzer nicht angezeigt
	- Der Button "Gruppe erstellen" wird für gruppenlose Spieler angezeigt
		- Der Button "Gruppe erstellen" wird nur angezeigt, wenn die Berechtigung `system.group.create` vorhanden ist.
	- Eine Liste mit allen verfügbaren Gruppen wird angezeigt mit den darin befindlichen Spielern
- Benutzerführung:
	- Ein Spieler, der keiner Gruppe angehört, kann eine neue Gruppe erstellen
	- Ein Spieler, der keiner Gruppe angehört, sieht eine Liste aller verfügbaren Gruppen
	- Ein Spieler ohne Gruppenzugehörigkeit kann einer bestehenden Gruppe beitreten
	- 
// - Testverfahren

// - Ergebnis

___
Tags: #community #group