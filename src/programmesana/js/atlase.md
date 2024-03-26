---
title:  Elementu atlase
---

# Elementu atlase lapā

Lai atlasītu kādu elementu dokumentā pēc tā identifikatora izmanto:

Ieteicams identifikātorus lapā turēt unikālus!


~~~js

let vertiba = document.getElementById("identifikators");

~~~

Kur vārda `identifikators` lieto unikālo identifikatoru. HTML birkā to raksta: `id="identifikators"`

Lai atlasītu kādu elementu dokumentā pēc tā klases izmanto:

Klases elementiem lapā var atkārtoties

~~~js

let vertiba = document.getElementsByClassName("manaklase");

~~~

Kur vārda `manaklase` lieto elementa  `Class` identifikatoru. HTML birkā to raksta: `class="manaklase"`

# Elementu satura, krāsas maiņa ar Javascript

Lai mainītu kāda elementa dizainu un saturu, izmanto:

~~~js

let elements = document.getElementById("identifikators");
elements.innerHTML = "Jauns saturs"; // Šis samaina HTML elementa saturu.

let elements = document.getElementById("identifikators");
elements.style.color = "green"; // Uzliek tekstam zaļu krāsu

~~~