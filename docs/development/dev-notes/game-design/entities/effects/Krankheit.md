---
state: Unstructured
level: Data
language: German
---
# Krankheit
## Allgemeines
Krankheit kann als negativer Effekt auftreten. Es stellt damit für die meisten Entitäten - also Spielelementen - ein Debuff dar. Sollte man durch eine Segnung, einen aktiven Heileffekt oder durch einen Charaktermerkmal immun sein, ist es ein Effekt ohne Wirkung.
Es wird der Einfachheit halber nicht zwischen Krankheiten unterschieden. Damit gibt es nur einen Effekt "Krankheit" und die Ursache ist nicht entscheidend.
Krankheit kann nicht zum Tode führen.
## Daten
- Typ: "einzigartig"
- besitzt eine Mindestdauer von 24h (= 86.400 Sekunden)
- besitzt eine Dauer von 72h (= 259.200 Sekunden)
## Ursache
Eine Ursache bewirkt zu 100% den Effekt "Krankheit". Mehrere Ursachen sind nicht kummulativ, verkürzen also nicht die benötigte Dauer für den Auslöser des Effektes. 
- Verletzung (Dauer: 48h)
- Hunger (Dauer: 168h)
- Dehydration (Dauer: 96h)
- Vergiftung (Dauer: 24h)
- Infektion (Effekt: Krankheit)
- Unterkühlung (Dauer: 48h)
- Überhitzung (Dauer: 36h)
- Nässe (Dauer: 72h)
## Wirkung
### aktiv:
- verringerte Lebensenergie-Regeneration
- verringerte Ausdauer-Regeneration
- verringerter Erfahrungszuwachs
- -25% Lebensenergie (total)
- -25% Ausdauer (total)
- -30% Hunger (Zuwachs)
### passiv:
- -100% Infektion (Schutz) für 72h + 168h
## Besonderheiten
- Krankheit ist der einzige Effekt, der übertragbar ist.
- Effekt Heilung / Genesung verkürzt die Dauer von Krankheit
- Effekt Dehydration verlängert die Dauer der Krankheit
## Beispiel(e)
- Zum Verständnis: Es gibt nur "Krankheit", keine Lebensmittelvergiftung, Erkältung, Fieber, etc.
### Notizen
- Ein kranker fahrender Händler (NPC) kann eine Krankheit von einem Ort zu einem anderen verbreiten.
- Krankheit ist die logische Eskalation der Ursachen.
- Nach Ende der Krankheit ist man gegen Infektion geschützt (passive Wirkung)
* Versteckte Errungenschaften:
  * Titel "Unheilvoll(er) Patient" (Infektion ausgelöst: 5x)
  * Titel "Ekelhaft(e) Pestbeule" (Infektion ausgelöst: 50x)
___
Tags: #Effekt #einzigartig