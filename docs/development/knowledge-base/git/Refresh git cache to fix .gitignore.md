---
state: Unstructured
level: Data
language: German
---
# Git Cache erneuern
Ab und zu wird ein Eintrag in der .gitignore nicht angewendet, weil er beispielsweise später hinzugefügt wurde als die Datei/der Ordner bereits im CVS eingepflegt ist.
Dann ist es notwendig, den Cache und die Historie für dieses Objekt zurückzusetzen.

Vor der Durchführung der unten genannten Schritte bitte alle Änderungen commiten.
## Schritt #1
für alle Daten im Repository:
```shell
git -rm -rf --cached . 
```

nur für die Datei test.md:
```shell
git rm -rf --cached ./test.md
```


## Schritt #2
Die Zieldatei(en) sind nun untracked und müssen neu commited werden:
```shell
git add .
```

```shell
git commit -m "chore(git): cache fixed"
```

Damit sollte die .gitignore nun wieder funktionieren.
