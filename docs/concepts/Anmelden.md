# Registrierung und Anmeldung für LunarEclipse/Sylvaria

## IST-Zustand
Aktuell werden keine Benutzerprofile verwaltet.

## SOLL-Zustand

### Problemstellung:
Benutzerkonten müssen angelegt werden können und die anmeldung soll sicher und schnell verlaufen.

### Recherchierte Möglichkeiten:
Benutzername und Passwort
- Klassische Anmeldung mit öffentlichem oder nicht öffentlichem Namen und geheimen Passwort über 1 Faktor
- Pro: Einfach einzurichten und anzuwenden
- Contra: Stark anfällig für Bruteforce Angriffe oder Phisching.
OAuth
- Anmeldung durch andere Webseite
- Pro: Externisieren der Verantwortung, Sehr einfache Anwendung
- Contra: Komplex zu implementieren, Verlust der Kontrolle, DSGVO
Mail und Einmalpasswort
- Registrierung und Anmeldung rein über Link oder Einmalpasswort
- Pro: Vollständige Kontrolle und transparente Sicherheit
- Contra: Umständliche Anwendung bei Gastrechnern
Cookie
- Session wird per Geheimnis aufrecht erhalten
- Pro: Einfache Umsetzung
- Contra: Browserabhängig aber vom Benutzer so entschieden

### Entscheidungshilfe durch Anforderungen:
Der Benutzer soll es maximal einfach haben. Da es bei der ersten Anmeldung generell fast überall zu einer Verifkation des Email-Kontos kommt kann die Eingabe des Passworts gekürzt werden, indem hier die Sicherheit durch Einmalpasswörter Standard erweitert wird. Der Benutzer kann in den Optionen später MFA oder Dauerpasswort einrichten. Weiterhin wird hierdurch die Registrierung hinfällig und gänzlich durch die Anmeldung ersetzt, da der Anmeldeprozess gleich abläuft. Für die Anmeldezeit wird ein Cookie gesetzt um den Benutzer während der Sitzung wieder zu erkennen.

### Bestandteile:
Registrierung oder Anmeldung
- Anmeldung durch Eingabe der Mail-Adresse
- Zusenden eines Passworts und Links auf die angegebene Mail
- Setzen des Cookies
Einstellungen
- Hinzufügen vom Authentificator für MFA
- Hinzufügen eines Dauerpassworts
Abmeldung
- Entfernen des Cookies
Löschen
- Löschen aller Persönlichen Daten

### Probleme die auftreten können:
Mailserver spinnt rum
Mailserver wird misbraucht um Anfragen zu schicken.

## UMSETZUNGS-Phase

### Geschätzter Aufwand an Personal und Zeit:
Mailing
- Versand von Mails und Vorlagen
- 1 Programmierer
- ca. 0.5 Stunden
Session-Cookies
- Anlegen der Session, erkennen usw.
- 1 Programmierer
- ca. 1 Stunde
Profil
- Profil anlegen lassen
- 1 Programmierer
- ca. 2 Stunden
Anmeldung
- Anmeldelink versenden
- 1 Programmierer
- ca. 1 Stunde
Ameldung
- Zerstören der Session
- 1 Programmierer
- ca. 0.5 Stunden
Löschen des Profils
- Mailbestätigung versenden und Profil löschen
- 1 Programmierer
- ca. 1 Stunde
Passwort einstellen
- 1 Programmierer
- ca. 0.5 Stunden
Authentificator einstellen
- 1 Programmierer
- ca. 1 Stunde

## KOTROLL-Phase