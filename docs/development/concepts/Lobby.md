---
state: Unstructured
level: Data
language: German
---
# Lobby

## IST-Zustand

Die Lobby ist ein neues Feature. Es existiert aktuell keine Basis.

## SOLL-Zustand

Das Spielen in der Gruppe ist ein wichtiges, zentrales Spielelement für die Community. Gruppen sollen erstellt, verwaltet und gelöscht werden können. Damit soll es bezogen auf die Benutzersteuerung durch wenige Klicks erreichbar sein. Die Steuerung ist simple/einfach, elegant und intuitiv.

### Problemstellung

Die Lobby erlaubt es, dass eingeloggte Spieler sich zu Gruppen zusammenfinden können, um ein gemeinsames Abenteuer zu erleben. Dabei hat der Benutzer die Möglichkeit, eine neue Gruppe zu erstellen und diese zu verwalten oder einer bestehenden Gruppe über eine Liste beizutreten. Gruppenlose Spieler können sich auf mehrere Gruppenplätze gleichzeitig bewerben und werden damit zu Gruppenanwärtern. Wird die Bewerbung eines Anwärters angenommen, tritt dieser der Gruppen automatisch bei und alle weiteren Bewerbungen werden ungültig. Der Gruppenleiter hat die Möglichkeit, die Gruppe aufzulösen, Einstellungen zu ändern oder die Zugänglichkeit zur Gruppe zu beschränken. Ein weiteres Recht des Gruppenleiters ist es, Spieler temporär oder permanent aus der Gruppe zu entfernen. Permanent entfernte Spieler ist ein erneuter Beitritt zur Gruppe nicht gestattet. Das aktive Verlassen einer Gruppe ist durch den Spieler möglich, automatisch wird dies bei der Auflösung der Gruppe durchgeführt. 

### Recherchierte Möglichkeiten

???

### Entscheidungshilfe durch Anforderungen

???

### Bestandteile

// Abschnitt
// - Kurzbeschreibung der Kernfunktionen

### Probleme, die auftreten können

Es können inaktive Gruppen entstehen, die erstellt werden, jedoch nie genutzt werden.
Viele aktive Gruppen vermindern die Lesbarkeit der Liste.
Mit steigender Konfigurierbarkeit einer Gruppe ist das Erstellen einer Gruppenvorlage wünschenswert.

## Implementierung

### Geschätzter Aufwand an Personal und Zeit

**Layout**

- Lobby-Übersicht: Liste verfügbarer Gruppen (öffentlich/privat), Schnellsuche (Gruppen), Button für "Gruppe erstellen"
  - Verantwortlichkeit/Umsetzung: Equindar
  - Zeitaufwand: 4h
- "Gruppe erstellen"-Dialog: Eingabe Name, Beschreibung, Spielerlimit, Zugangsbeschränkung (Passwort)
  - Verantwortlichkeit/Umsetzung: Equindar
  - Zeitaufwand: 2h
- Gruppe-Übersicht-Dialog: Liste der Spieler, Gruppenaktionen basierend auf den Berechtigungen: Verlassen, Entlassen ("kick"), Sperren ("ban"), Auflösen
  - Verantwortlichkeit/Umsetzung: Equindar
  - Zeitaufwand: 2h

**Datenbasis**

- Datenbank-Tabelle 'groups' mit ID, Name, Description, isPrivate, Keyword, createdDate, deletedDate
- Datenbank-Tabelle 'group_players' mit ID, Group_ID, Player_ID, GroupRole_ID, joinedDate, leftDate
- Datenbank-Tabelle 'group_roles' mit ID, Name

**Funktionalität**

- Gruppe

**Berechtigungen**

- Einzelrechte erstellen:
  - `group.view`: Gruppe sehen
  - `group.create`: Gruppe erstellen
  - `group.edit`: Gruppe bearbeiten
  - `group.join`: Gruppen beitreten
  - `group.leave`: Gruppe verlassen
  - `group.close`: Gruppe auflösen
  - `group.member.add`: Gruppenmitglied hinzufügen (einladen?)
  - `group.member.kick`: Gruppenmitglied entlassen
  - `group.member.ban`: Gruppenmitglied sperren
  - `group.member.promote`: Gruppenmitglied sperren
  - `group.member.demote`: Gruppenmitglied sperren
  - `group.settings.edit`: Gruppeneinstellungen bearbeiten
  - `system.group.edit`: Gruppe bearbeiten
  - `system.group.delete`: Gruppe löschen
- Gruppenberechtigungen erstellen:
  - "Spieler": `group.view`, `group.create`, `group.join`, `group.leave`
  - "Gruppenleiter": `group.*`

## Qualitätssicherung

Akzeptanzkriterien / Definition of Done:

- System / Anzeige:
  - Der Dialog Lobby wird für eingeloggte Benutzer (Spieler) angezeigt
  - Der Dialog Lobby wird für nicht eingeloggte Benutzer nicht angezeigt
  - Der Button "Gruppe erstellen" wird für gruppenlose Spieler angezeigt
    - Der Button "Gruppe erstellen" wird nur angezeigt, wenn die Berechtigung `group.create` vorhanden ist.
  - Eine Liste mit allen verfügbaren Gruppen wird angezeigt mit den darin befindlichen Spielern
- Benutzerführung:
  - Ein Spieler, der keiner Gruppe angehört, kann eine neue Gruppe erstellen
  - Ein Spieler, der keiner Gruppe angehört, sieht eine Liste aller verfügbaren Gruppen
  - Ein Spieler ohne Gruppenzugehörigkeit kann einer bestehenden Gruppe beitreten
  - Ein Spieler mit Gruppenzugehörigkeit kann eine Gruppe wechseln, dabei die Gruppen-Aktion "verlassen", "betreten" nacheinander durchgeführt.
  -  Ein Spieler mit Gruppenzugehörigkeit kann sich in der Lobby nach anderen Gruppen umsehen, dabei ist es egal, welche aktuelle Gruppenrolle man besitzt.
___
Notizen / Änderungen:
- Gruppenvorlage: ad acta für den Moment
- Passwortgeschützt: ad acta, aktuell nicht geplant
- Gruppenanwärter: Spieler können sich gleichzeitig auf mehrere Gruppen und -plätze bewerben
- Gruppenleiter können Bewerbungen ansehen, annehmen und ablehnen.
- Gruppengrößen können limitiert werden, müssen jedoch nicht.
- Während man seine Gruppe gegründet hat, kann man dennoch die anderen Gruppen sehen.
- Sobald man einer Gruppe beitritt, werden alle aktiven Bewerbungen verworfen.
- Darstellung:
	- Aktive Gruppen steht oben
	- In der Lobby steht ein Chat zur Verfügung für alle.

Mögliche Situation:
- Tavernenchat: "Leute, wir brauchen noch einen Tank für Mission XYZ" + Checkbox: Bewerbung akzeptieren.
---

Tags: #community #group
