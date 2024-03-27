---
title: CSS
order: 4
---
## Ievads CSS

CSS jeb Cascading Style Sheets ir veids kā rakstot dažādus noteikumus piešķirt izskatu HTML elementiem lapā.

Lai saprastu procesu, kā mājaslapa veido CSS stilu izmantošanu, apskatīsim attēlu.

![example image](/renderingcss.svg)
Attēls: mozilla.org

No attēla varam saprast, ka vispirms tiek ielādēta mājaslapa, tad ielādēti CSS noteikumi un tad viss kopā tiek pasniegts lietotājam.

::: caution
CSS nav programmēšanas valoda, bet gan stila valoda, kas ļauj veidot mājaslapas izskatu. CSS ir vienkāršs un saprotams, tāpēc to var izmantot ikviens, kurš vēlas veidot mājaslapas.
:::

## Klases

Elementus HTML dokumentā var ērti grupēt, izmantojot klases. Klasi elementam iestata šādi:

~~~html
<p class="zilaRindkopa">Es mācos kodēt...</p>
~~~

Un atbilstošais CSS selektors, lai rindkopa attēlotos zilā krāsā.

~~~css
.zilaRindkopa { 
    color: blue;
}
~~~

Visas rindkopas, kurām iestatīta klase `zilaRindkopa`, attēlosies zilā krāsā.

Klases īpašības iespējams definēt arī atsevišķiem elementiem, piemēram, dažādas sarkanās nokrāsas virsrakstiem.

~~~html
<h1 class="sarkans">Sarkans virsraksts</h1>
<h2 class="sarkans">Sarkans virsraksts</h2>
<h3 class="sarkans">Sarkans virsraksts</h3>
~~~

~~~css
h1.sarkans {
  color:rgb(255, 0, 0);
}

h2.sarkans {
  color:rgb(220, 0 ,0);
}

h3.sarkans {
  color:rgb(200, 0 ,0);
}
~~~

## Identifikatori

Identifikatorus lieto, lai stilizētu unikālu elementu lappusē.

Pieņemsim, ka lappusē ievietots logo, kuram jāiestata izmēri.

~~~html
<img id="logo" src="mans_logo.jpg">
~~~
~~~css
#logo {
    width: 80px;
}
~~~

Ieteicams identifikātorus lapā turēt unikālus!


## Selektori

Apskatīsim, kā iespējams mainīt burtu izmēru visām rindkopām HTML dokumentā.

~~~css
p {
     font-size: 18pt;
}
~~~

Šajā gadījumā `p` ir selektors, `font-size` ir īpašība, bet `18pt` ir vērtība.

Vienā selektorā iespējams iestatīt īpašības vairākiem elementiem, piemēram, visu līmeņu virsrakstiem.

~~~css
h1, h2, h3, h4, h5, h6 {
    font-family: "Arial";
}
~~~

Ne vienmēr mēs vēlamies formatēt visas rindkopas vai visus virsrakstus lapā, tāpēc lieto [klases un identifikatorus]({% link programmesana/css/klases_un_id.md %}).


### Hierarhiskie selektori

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


### Aktīvie selektori

Aktīvie selektori jeb pseido-klases ir selektori, kas nosaka, kā elements reaģēs uz noteiktām darbībām, piemēram, uzbraukšana ar kursoru vai klikšķis uz saites.

Apskatīsim piemēru ar hipersaiti...

~~~css
a:link {
    color: blue; /* Krāsa neapskatītai saitei */
}

a:visited {
    color: purple; /* Krāsa apskatītai saitei */
} 
~~~

Citas biežāk lietotās pseido-klases ir `active`, `focus` un `hover`.

Ar `active` var iestatīt saites izskatu klikšķa brīdī.
Ar `focus` iestata īpašības atlasītiem elementiem, piemēram, `input` laukam datu ievades brīdī.
Ar `hover` iestata īpašības, kas stājas spēkā, uzbraucot elementam ar peles kursoru.

Dotajā piemērā pogas teksts palielinās 1.5x, ja tam uzbraucam ar kursoru.
~~~css
button:hover {
    font-size: 1.5em;
}
~~~

Ievades lauks iegūs sarkanu rāmi, ja to atlasīs.
~~~css
input:focus {
    border:1px solid red;
}
~~~

Ar `::first-letter` selektoru iespējams atsevišķi nodefinēt pirmā burta stilu rindkopai vai virsrakstam.
~~~css
p::first-letter {
    font-size: 3em;
    color: orange;
    text-shadow: 1px 1px grey;
}
~~~

Selektoru `::selection` izmanto, lai nodefinētu īpašības atlasītam tekstam rindkopā vai virsrakstā.

~~~css
p::selection {
    color: white;
    background-color: black;
}
~~~

Atlasītā rindkopas tekstā būs balti burti uz melna fona.

### Izņēmuma selektori

Iedomāsimies, ka mums ir 4 attēli, kuriem jāiestata izmērs, bet attēlam ar `id="titulbilde"` jāpaliek nemainīgam.

~~~html
<img id="titulbilde" src="...">
<img src="...">
<img src="...">
<img src="...">
~~~

Lieto `:not()`, iekavās rakstot elementu, uz kuru neattieksies dotās īpašības.

~~~css
img:not(#titulbilde) {
    width: 100px;
}
~~~


## Biežāk lietotās īpašības

~~~css
p, a, h1 {
    font-size: 16pt; /* Burtu izmērs */
    font-family: "Times New Roman"; /* Burtu stils */
    font-weight: bold; /* Treknraksts */
    font-style: italic; /* Slīpraksts */
    letter-spacing: 10px; /* Atstatums starp burtiem */
    word-spacing: 30px; /* Atstatums starp vārdiem */

    /* Pasvītrojums un pārsvītrojums */
    text-decoration: none | underline | overline | line-through; 
    text-decoration-color: black; 
    text-decoration-style: solid | wavy | dotted | dashed | double;
}

table {
    border-collapse: collapse; /* Apvieno šūnu, rindu un tabulas ierāmējumu */
    border: 1px solid black; /* Iestata 1px biezu nepārtrauktu rāmja līniju */
}

img, div {
    width: 100px; /* Platums */
    height: 200px;  /* Augstums */
}

div {
    border-radius: 10px; /* Noapaļoti stūri */
    border-radius: 50%; /* Div bloks kā aplis */
    background-color: red; /* Fona krāsa */
    background: linear-gradient(to right, red, yellow); /* Fons kā krāsu pāreja */
}

* {
    padding: 5px; /* Iestata attālumu līdz ierāmējumam */
    margin: 10px; /* Iestata attālumu līdz blakus elementiem */
}
~~~


## Kastes modelis

![box_model](/box_model.jpg)

Avots: web.dev/learn/css/box-model/


## Krāsu sistēmas

Visbiežāk CSS lieto vienu no divām krāsu sistēmām: HEX vai RGB

### HEX sistēma

HEX sistēmā krāsa tiek kodēta heksadecimālajā skaitīšanas sistēmā un kods veidojas kā #RRGGBB, kur RR ir sarkanās krāsas intensitāte, GG ir zaļās krāsas intensitāte, bet BB ir zilās krāsas intensitāte.

Piemēram, #0000FF tiek attēlota kā zilā krāsa.

~~~css
div {
    background-color: #FFFF00; /* Dzeltens fons */
}
~~~

### RGB sistēma

RGB sistēma paredz līdzīgu principu, taču pieraksts veidojas no 3 komponentiem, tie ir (R, G, B), kur R ir sarkanā, G ir zaļā, bet B - zilā krāsa. Katru komponenti norāda ar vērtību no 0 līdz 255.

~~~css
p {
    color: rgb(255, 0, 0); /* Sarkans rindkopas teksts */
}
~~~

Nereti rgb īpašībā lieto 4. parametru, kas ir tā sauktais alfa parametrs, kurš norāda krāsas caurspīdīgumu. Tas var būt diapazonā no 0 līdz 1.0.

~~~css
div {
    background-color: rgba(255, 0, 0, 0.5); /* Puscaurspīdīgs sarkans fons */
}
~~~

Veidojot mājas lapas, tev varētu noderēt resurss [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/), kur iespējams atlasītai krāsai iegūt gan RGB, gan HEX kodu.


## Mērvienības

Mērvienības iedalās absolūtajās un relatīvajās mērvienībās. Absolūtās mērvienības lieto, ja nepieciešams elementam iestatīt fiksētu un nemainīgu izmēru. Relatīvās mērvienības ir atkarīgas no kopējā lapai vai elementam atvēlētā laukuma.

Biežāk lietotās absolūtās mērvienības:

|Mērvienība        | Pielietojums                                                                     |
|------------------|----------------------------------------------------------------------------------|
|`px` jeb pikseļi  | lieto, lai iestatītu izmēru attēlam, div blokam un citiem grafiskiem elementiem  |
|`pt` jeb punkti   | lieto burtu izmēram                                                              |

Relatīvās mērvienības:

|Mērvienība | Pielietojums                                                                     |
|-----------|----------------------------------------------------------------------------------|
|`em`       | lieto burtu izmēram (2em nozīmē 2x lielāki burti)                                |
|`%`        | relatīvs attiecībā pret augstākstāvošo *(parent)* elementu                       |


## Piemērs

Šajā gadījumā attēls aizņems 50% no visa tam atvēlēta laukuma.
~~~html
<body>
    <img id="attels" src="ainava.jpg">
</body>
~~~
~~~css
#attels {
    width: 50%;
}
~~~
