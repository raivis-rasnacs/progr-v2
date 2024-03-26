---
title: Hipersaites
---

## Hipersaite uz ārēju resursu

Lapā iespējams ievietot klikšķināmu hipersaiti, kas ved uz ārēju resursu. Tam lieto birku `<a>` ar parametru `href=`.

~~~html
<a href="https://www.e-klase.lv/">Doties uz e-klasi!</a>
~~~

Rezultāts:
[Doties uz e-klasi!](https://www.e-klase.lv/)

Parametrā `href=` svarīgi norādīt pilno adresi!


~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>

    <h1>Mana hipersaite</h1>
    <a href="https://navtadasmajaslapas.lv/apaksmape">Nospied mani</a>
    
</body>
</html>
~~~
 
![html1](/urlhiperlink.png)

## Hipersaite uz citu HTML dokumentu

Iedomāsimies, ka mums ir fails `index.html` un fails `jauna_sadala.html`.

Galvenajā lapā ievietosim saiti uz jauno sadaļu...

~~~html
<a href="jauna_sadala.html">Doties uz jauno sadaļu!</a>
~~~

Ja HTML dokuments atrodas apakšmapē, svarīgi norādīt tās nosaukumu, piemēram, `sadalas/jauna.sadala.html`!

