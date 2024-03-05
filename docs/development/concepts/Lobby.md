---
state: Unstructured
level: Data
language: German
---
# Lobby

## IST-Zustand

Die Lobby ist ein neues Feature. Es existiert aktuell keine Basis.

## SOLL-Zustand

Das Spielen in der Gruppe ist ein wichtiges, zentrales Spielelement für die Community. Gruppen sollen erstellt, verwaltet und gelöscht werden können. Damit soll es bezogen auf die Benutzersteuerung durch wenige Klicks erreichbar sein. Die Steuerung ist simple/einfach, elegant und intuitiv. Einstellungen für Gruppen sind so übersichtlich strukturiert, dass neue Gruppenleiter schnell die wichtigsten Dinge vornehmen können.

### Problemstellung

Die Lobby erlaubt es, dass eingeloggte Spieler sich zu Gruppen zusammenfinden können, um ein gemeinsames Abenteuer zu erleben. Ein gemeinsamer Chat auf der Lobby erleichtert die Kommunikation. Dabei hat der Benutzer die Möglichkeit, eine neue Gruppe zu erstellen und diese zu verwalten oder einer bestehenden Gruppe über eine Liste beizutreten. Gruppenlose Spieler können sich auf mehrere Gruppenplätze gleichzeitig bewerben und werden damit zu Gruppenanwärtern. Wird die Bewerbung eines Anwärters angenommen, tritt dieser der Gruppen automatisch bei und alle weiteren Bewerbungen werden ungültig. Der Gruppenleiter hat die Möglichkeit, die Gruppe aufzulösen, Einstellungen zu ändern oder die Zugänglichkeit zur Gruppe zu beschränken. Die Ansicht, Annahme oder Ablehnung von Bewerbungen obliegt dem Gruppenleiter. Ein weiteres Recht des Gruppenleiters ist es, Spieler temporär oder permanent aus der Gruppe zu entfernen. Permanent entfernte Spieler ist ein erneuter Beitritt zur Gruppe nicht gestattet. Das aktive Verlassen einer Gruppe ist durch den Spieler möglich, automatisch wird dies bei der Auflösung der Gruppe durchgeführt. Spieler ohne oder mit Gruppenzuordnung haben jederzeit die Möglichkeit, in der Lobby alle verfügbaren Gruppen aufgelistet zu bekommen.

### Recherchierte Möglichkeiten
**Gruppen in Evergore:**
- Gruppe kann erstellt werden über den Sammelpunkt
- Gruppen können passwortgeschützt sein, oder mit Min- und Maximalstufe begrenzt sein
- Es existieren Gruppenmitglieder mit erweiterten Berechtigungen: Gruppenleiter, Stellvertreter
- Gruppen haben ein Limit von 8 Spielern, erweiterbar um 2 Anfängerplätze
- Gruppen können versteckt werden und besitzen Diplomatie-Einstellungen
- Gruppen lösen sich nach Inaktivität (3 Stunden) selbst auf.
- Gruppen sind standortbezogen und können nicht durchsucht werden

**Gruppen in Northgard:**
- Eine Spiellobby wird beim Eröffnen vordefiniert als 1v1 - 2v2 - 3v3 - 2v2v2 oder 3v3v3.

### Entscheidungshilfe durch Anforderungen

???

### Bestandteile
#### Gruppen-Zugängigkeit:
Eine Gruppe kann den Zugriff "offen", "eingeschränkt" oder "geschlossen" haben.
Diese Einstellung kann jederzeit durch den Gruppenleiter geändert werden. Das Hinterlegen eines Passwortes wird nicht unterstützt, da es einfachere, weniger fehleranfällige Wege gibt. So kann eine Whitelist an Spielern hinterlegt werden, wenn der Zugriff "eingeschränkt" ausgewählt wurde.

#### Gruppen-Einstellungen
Es soll die Möglichkeit geben, empfohlene Einstellungen zu übernehmen mittels Button-Klick. 
_Zukünftig / Upcoming Feature:_
Werden die Einstellungen zu komplex im weiteren Verlauf des Spieles, kann die Konfiguration als Vorlage gespeichert werden für Spieler, die eine feste Gruppe bevorzugen.

#### Gruppenbewerbungen und -anwärter
Spieler können sich für Gruppen bewerben und bei Annahme werden die Spieler der Gruppe hinzugefügt. Weitere ausstehende Bewerbungen werden verworfen. Eine Einstellung für Bewerbung erlauben kann aktiv/inaktiv gesetzt werden.

#### Gruppengröße
Gruppen sind standardmäßig ohne Spieler-Limit. Dieses kann jedoch eingestellt werden, wenn man dies explizit steuern möchte.

#### Gruppen-Einladungen
Es soll als Gruppenleiter die Möglichkeit geben, Einladungen in Form eines Links versenden zu können. Werden diese Verweise angeklickt bei einer "offenen" Gruppe, tritt der Spieler der Gruppe direkt bei. Bei einer "eingeschränkten" Gruppe verweist der Einladungslink auf eine Bewerbung. Bei einer "geschlossenen" Gruppe steht die Möglichkeit einer Einladung nicht zur Verfügung.
_Zukünftig / Upcoming Feature:_
Dieses Feature ist für einen späteren Zeitpunkt geplant.

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
  - Spieler mit Gruppenzugehörigkeit sehen ihre aktive Gruppe an oberster Stelle der Liste.
  - Gruppenanwärter sehen Gruppen, bei denen sie sich beworben haben an oberster Stelle der Liste, absteigend sortiert nach dem Bewerbungsdatum.
- Benutzerführung:
  - Ein Spieler, der keiner Gruppe angehört, kann eine neue Gruppe erstellen
  - Ein Spieler, der keiner Gruppe angehört, sieht eine Liste aller verfügbaren Gruppen
  - Ein Spieler ohne Gruppenzugehörigkeit kann einer bestehenden Gruppe beitreten
  - Ein Spieler mit Gruppenzugehörigkeit kann eine Gruppe wechseln, dabei die Gruppen-Aktion "verlassen", "betreten" nacheinander durchgeführt.
  -  Ein Spieler mit Gruppenzugehörigkeit kann sich in der Lobby nach anderen Gruppen umsehen, dabei ist es egal, welche aktuelle Gruppenrolle man besitzt.
___
Notizen / Änderungen:
- aktuell keine

---

Tags: #community #group
