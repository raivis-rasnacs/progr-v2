---
title:  Hierarhiskie selektori
---

# Hierarhiskie selektori

Ja nepieciešams formatēt elementu, kas ir tiešais *apakšīrnieks* citam elementam, lieto `>`.

~~~html
<p>Rindkopa ārpus div bloka.</p>
<div>
    <p>Rindkopa div blokā.</p>
</div>
~~~
~~~css
div > p {
    font-weight: bold;
}
~~~

Ja elementiem nav tiešas saiknes, tad rīkojas šādi:

~~~html
<p>Rindkopa ārpus div bloka.</p>
<div>
    <span>
        <p>Rindkopa div blokā.</p>
    </span>
</div>
~~~
~~~css
div p {
    font-weight: bold;
}
~~~
Stils būs spēkā visām rindkopām, kuras atrodas jebkurā pakāpē div blokā.

