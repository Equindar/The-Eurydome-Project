---
state: Unstructured
level: Data
language: German
---
# Effekte
## Allgemein
Effekte sind Zustandsbeschreibung des Spielers. Diese sind meistens zeitlich begrenzt sein, jedoch auch an die Welt an sich gebunden sein.
So ist es auf einer Testwelt denkbar, dass ein globaler Effekt existiert, der den Erfahrungszuwachs erhöht oder den Zeitverlauf beschleunigt.
Andere Effekte können beispielsweise durch Attacken ausgelöst werden die Blutung, Verbrennung oder Vergiftung. Effekte mit positiver Wirkung nennt man Buffs, mit negativer Wirkung Debuffs.
"Überhitzung" kann beispielsweise in einem Vulkan-Dungeon oder der Wüste entstehen. "Unterkühlung" im Winter und "Hunger", "Dehydration" kann aufgehoben werden durch Aktionen in der Taverne.
Effekte können sich gegenseitig ausschließen wie "Schlaf" und "Müdigkeit".

## Mögliche Effekte
Hier eine kurze Liste, die gebrainstormed wurde, welche Effekte es potenziell geben könnte. Die Liste erhebt keinen Anspruch auf Vollständigkeit und unterliegt weiteren Änderungen.
- Blutung
- Hunger
- Müdigkeit
- Angst / Furcht
- Paralyse
- Schlaf
- Vergiftung
- Kälte / Unterkühlung
- Wut / Kampfesrausch
- Überhitzung
- Verwirrung / Epilepsie
- Verbrennung
- Dehydration
- Verlangsamung
- Beschleunigung
- Betäubung
- Hypnose
- Segnung
- Fluch
- Lebensraub
- Amnesie
- Nässe
- Tarnung / Camouflage
- "GodMode" (Debugging)

## Charakter von Effekten
Charakter im Sinne von der Wirkweise von Effekten.
Effekte können folgende Eigenschaft haben:
- einzigartig
-  erneuernd (Zeitdauer zurücksetzend)
- stapelbar (Wirkung)
- stapelbar (Zeitdauer)
- abnehmender Ertrag ("dimishing returns")

## Beispiele
Treibt sich ein Spieler in einem verstörenden Dungeon herum, wird ihn das das erste Mal mit "Angst" erfüllen, bei den darauffolgenden Aufträgen in dieser Umgebung jedoch weniger belasten, weil er 'abstumpft'.

Effekte können andere Effekte logisch beeinflussen. So wird aus "Müdigkeit" eine stärkere Form wie Übermüdung und durch "Schlaf" wird der Effekt "Müdigkeit" entfernt. Jedoch kann "Angst / Furcht" einen unruhigen Schlaf begünstigen, weshalb man nach Erwachen immernoch "Müdigkeit" verspürt.
Je nach Wirkungsgrad kann "Verlangsamung" durch "Beschleunigung" negiert oder vollständig aufgehoben werden.

## Darstellung
Effekte werden nur dargestellt, wenn sie aktiv sind. Negative erhalten eine rötliche Färbung, positive eine grüne/blaue Färbung. Es wird immer die Dauer eines Effektes angezeigt, ist er unbegrenzt, steht dieses ebenfalls an der Stelle, wo die Dauer zu erwarten wäre. Effekte blinken eine kurze Periode auf, bevor sie die Dauer 0 erreichen.
### Spieler-Effekte
Effekte werden, wenn sie den Spieler beeinflussen, neben der Charakter-Information als Boxen/Kästchen dargestellt. 
### Welt-Effekte
Welteffekte sind solche, die Region, Dungeon, Klima oder Events betreffen.
Diese werden neben den Weltinformationen (bei der Karte? oben rechts?) aufgelistet.