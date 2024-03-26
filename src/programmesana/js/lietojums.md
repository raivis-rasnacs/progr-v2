---
title: Lietošana
order: 1
---
# Lietošana

JavaScript lieto, lai mājas lapai piešķirtu dinamiku un interaktivitāti.

![html-css-js](/html-css-js.png)  
Izmantotais attēls: edureka.co

Lai sāktu mājaslapā rakstīt Javascript kodu jālieto `<script type="application/javascript"></script>` birkas. 

Var izmantot arī vienkāršo variantu `<script></script>`

Piemērs:

~~~html

<script type="application/javascript">

</script>

~~~

Vai - otrs variants.

~~~html

<script>
    
// Javascript kods

</script>

~~~

Lai iekļautu savā lapā ārējo Javascript kodu:

`<script src="mansskripts.js"></script>`

`<script>` tagu vēlams ievietot body bloka beigās! 


Ārējie Javascript faili var tikt uzturēti uz cita servera. Ja skripts uz ārējā servera tiek noņemts, tad arī vietnē netiks ielādēts šis fails.

# Komentāri kodā

~~~js

alert("Paziņojuma lodziņš");

// Vienas rindas komentārs
/*
Vairāku 
rindu 
komentārs
*/

~~~

# Brīdinājumi konsolē

Programmētājs, lai atkļūdotu savu kodu, var veidot dažādus paziņojumus konsolē. Konsole parādās, ja lietotājs pārlūkā nospiež labo peles klikšķi un tad izvēlas `Inpect` -> `Console` vai ar taustiņu kombināciju `Ctrl + Shift + J`.

Ir trīs veida paziņojumi.


Informatīvais - informē par kādu koda darbības posmu.

Kļūda - parasti kļūdu veida paziņojumi, tiek izmantots arī sintakses kļūdu gadījumos.

Parasts paziņojums - parasts teksts konsolē.



Visi trīs paziņojumi attēloti bildē.

![example image](/js_konsoles_pazinojumi.png)
 
Kods:
~~~js

console.log("Parasts teikums konsolē");
console.warn("Brīdinājums konsolē");
console.error("Kļūda konsolē");

~~~