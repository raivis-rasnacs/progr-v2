---
title: HTML
order: 3
---
## Kas ir HTML?

HTML jeb angļu valodā Hyper Text Markup Language ir marķēšanas/iezīmēšanas valoda, kura ļauj klienta pārlūkā atrādīt mājaslapas saturu. 

::: caution
HTML nav programmēšanas valoda.
:::

HTML faili beidzas ar paplašinājumu `.html` vai jaunajā versijā `.htm` un ir izpildāmi pārlūkā.

Mājaslapas sastāv no birkām vai angliski `tags`. 

Ar lielāko daļu birku var iepazīties [šeit](https://www.w3schools.com/tags/default.asp)

Birkas ļauj strukturēt mājaslapu no dažādiem elementiem. 

Lai definētu elementu, lielākajai daļai no HTML birkām ir atverošā birka un aizverošā. 

Piemērs:

~~~html
<p> </p>
~~~

`<p>` ir atverošā birka, kura informē pārlūku, ka sākas paragrāfs.

`</p>` ir aizverošā birka, kura informē pārlūku, ka beidzas paragrāfs.

## Kā darbojas HTML? Kur tas rodas?

![example image](/request.png){: .nerami}

Avots: monashdatafluency.github.com

Aplūkojot šo attēlu , var secināt, ka viss sākas ar lietotāja pieprasījumu - momentu, kad lietotājs pārlūkā ievada tīmekļa lapas adresi.

Tad notiek pieprasījums uz serveri. Serveris izveido HTML kodu un atgriež skatītāja pārlūkam. 

Pārlūks to saliek kopā un atrāda tieši tā kā to bija izdomājis programmētājs.


## HTML hierarhijas koks

HTML dokumentam piemīt hierarhiska struktūra, ko veido saiknes starp elementiem

![DOM_tree](/dom_tree.jpg)

Piemērā redzam, ka visaugstāk stāvošais ir `html` bloks, kas satur `head` un `body` blokus. `body` blokā ir ievietots `div` elements, kas satur sarakstu ar 3 vienībām. Šajā gadījumā `ul` elementam augstāk stāvošs *(parent)* ir `div` elements, bet zemāk stāvoši *(child)* ir `li` elementi. `img` elementam ir tikai augstāk stāvošais *(parent)* elements `a`.

Atceries, ka tabulā pirms rindām vienmēr automātiski tiek pievienots `tbody` bloks!


## HTML struktūra un pieraksts

Apskatīsim mājaslapas daļas. 

Mājaslapas birkas un kods, šo pārlūks saņem no servera:

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>

    <h1>Pirmā līmeņa virsraksts</h1>
    <p>Paragrāfs</p>

</body>
</html>
~~~

Šādi to pārlūks parāda lietotājam:

![pythonlogo](/htmlsadalas.png)

Mājaslapa sākas ar birkām `<!DOCTYPE html>` un `<html>`, kas informē pārlūku, ka sākas jauna mājaslapas datne.

Mājaslapai ir divas daļas galvene un vidus, par to liecina birku pāri `<head> </head>` `<body> </body>`.

`<head> </head>` birku pārī tiek ievietoti visi ārējie skripti un mājaslapu aprakstošie tehniskie parametri. 

Piemēram, birka `<title> </title>`, kas uzstāda mājaslapas nosaukumu pārlūka cilnē.

`<body> </body>`  birku pārī tiek ievietots mājaslapas saturs - viss ko lietotājs var redzēt lapā. 



Mājaslapas kodu lietotājs var apskatīt. Biežākā kombinācija ir `ctrl` + `U`

`<head></head>` sadaļā parasti tiek ielikti ārējie stila faili vai Javascript faili.

Tāpat ir noderīgas arī `meta` birkas, kuras ļauj pārlūkam uzzināt informāciju par veidoto lapu, tās autoru vai arī iestatīt lapas kodējumu u.c. ar lapu saistītus parametrus.

Lapai ir raksturīgs tās kodējums. Kodējums ir veids(formāts) kā tiek rādīts teksts. 

Lai apskatītu ASCII kodejumu: [šeit](https://www.ascii-code.com/)

Lai ievietotu `UTF-8` kodējuma noteikumu jālieto šāda birka:

~~~html
<meta charset="UTF-8">
~~~

Šī birka ļaus atrādīt latviešu valodas burtus to pareizā izskatā, pretējā gadījumā garumzīmju vietā var tikt rādītas jautājuma zīmes.

## Komentāri kodā

~~~html

<!-- Komentārs HTML lapā -->
~~~

Komentārs šajā gadījumā ir vienas rindas. Birka sākas ar `<!--` un beidzas ar `-->`

Kādam nolūkam lieto komentārus? - Pavisam vienkārši, lai "atslēgtu" kādu konkrētu koda daļu, lai pārlūks to neatrādītu.

Piemērs:

~~~html
    <!--  <div>Virsraksts</div>
       
    <div>Lapas vidējās daļas saturs</div> -->
~~~

Vēl viens no piemēriem ir dažādu informatīvu komentāru izveide citiem programmētājiem.

Piemērs:

~~~html
    <div>Virsraksts</div>
        <!-- Šeit beidzas virsraksts un sākas vidus daļa -->
    <div>Lapas vidējās daļas saturs</div>
~~~

Komentāri netiek atrādīti lapā! To var redzēt tikai un vienīgi skatoties lapas kodu. 




## Birkas

Aplūkosim no kā sastāv birka.


![example image](/htmlbirkas.png)

Bāzes attēls: altervista.org

Attēlā redzama paragrāfa birka, kurai ir pievienots klases atribūts. 

Šis paragrāfs lapā atlasāms pēc klases `nice`. 

Birka tiek atvērta ar simboliem `< >` -> `<p>`. Un noslēgta ar slīpsvītru `</ >` -> `</p>`


Ne visām birkām ir nepieciešama to noslēgšana. Piemēram attēla ievietošanas (`<img>`) birkai nav nepieciešama noslēgšana.

Birkām var būt arī definēti to atribūti ne tikai ar vārdu `style`, tabulām var tikt definētas robežas `border=1`, bildēm adrese ar atribūtu `src` utt.

Piemēri:

~~~html

<img src="/mape/bilde.png"> <!-- Bilde ar tās adresi -->

<table border=1> </table>   <!-- Tabula ar tās robežu -->

<a href="https://manasaite.lv/neeksiste">Nospied mani</a> <!-- Hipersaite ar tās adresi un tekstu -->

<img src="https://codebrainer.azureedge.net/images/what-is-html.jpg" width="20px" height="20px"> <!-- Bilde ar tās izmēriem garumā un platumā -->
~~~

### Rindas pārtraukums

Lai pārnestu elementu jaunā rindā, lieto birku `<br>`.

~~~html
<a href="https://www.inbox.lv/">Inbox</a><br>
<a href="https://www.delfi.lv/">Delfi</a>
~~~

Noklusēti hipersaites attēlojas vienā rindā, tāpēc pārnesot jaunā rindā, jālieto `<br>`!

### Div bloki

Birku `<div>` lieto lapas izkārtojumam. Tas ir bloks, kurā ievieto citus elementus, piemēram, rindkopas vai attēlus.

~~~html
<div id="kvadrats">
    <p>Es esmu kvadrāts!</p>
</div>

<div id="aplis">
    <p>Es esmu aplis!</p>
</div>
~~~

Noklusēti div bloki nav redzami, tāpēc pievienosim tiem stilu!

~~~html
<head>
    <style>
        div {
            width: 100px;
            height: 100px;
        }

        #kvadrats {
            background-color: lightgreen;
        }

        #aplis {
            background-color: orange;
            border-radius: 50%;
            line-height: 100px;
        }
    </style>
</head>
~~~

Iznākums:  
![div-bloki](/div-bloki.jpg)

Ar `border-radius: 50%;` iegūstam apaļu formu, bet `line-height: 100px;` novieto tekstu apļa centrā!

Par CSS vairāk izlasīsi sadaļā [stila piešķiršana](./stilapieskirsana.md)!

### Atveramais saraksts

Ar birkām `<details>` un `<summary>` var panākt interesantu atveramo izvēlni.

~~~html
<details>
    <summary>Mana grāmatu izlase:</summary>
    <ul>
        <li>Zvejnieka dēls</li>
        <li>Straumēni</li>
        <li>Purva bridējs</li>
    </ul>
</details>
~~~

Rezultāts:  
![details-birka](/details.gif)

Nospiežot uz bultiņas, saraksts atveras. Nospiežot vēlreiz, aizveras.

Lai saraksts noklusēti attēlotos atvērts, `details` birkai pieraksta atribūtu `open`!

### Izcelts teksts

Lai izceltu rindkopas fragmentu, lieto birku `<mark>`.

~~~html

<p>Šis nav svarīgs rindkopas teksts, bet <mark>šis ir ļoti svarīgs teksts.</mark></p>

~~~

Iznākums:  
<p>Šis nav svarīgs rindkopas teksts, bet <mark>šis ir ļoti svarīgs teksts.</mark></p>

Teksts starp `<mark>` birkām attēlosies dzeltens. Iestatot stila atribūtu `background-color: [krāsa];` var iestatīt jebkādu citu iekrāsojumu!


### Attēla ievietošana lapā
~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>

    <h1>Ievietoju savu pirmo bildīti!</h1>
    <img src="https://codebrainer.azureedge.net/images/what-is-html.jpg" width="20px" height="20px">

</body>
</html>
~~~
Avots: azureedge.net
Izskats:
![html1](/html_uzd1.png)

Šajā piemērā tiek ievietots pirmā līmeņa virsraksts `h1` un ārējā bilde, bet ļauts izmantot arī datorā atrodamās.

Attēlam ir 3 atribūti: `src` - attēla adrese, `width` - attēla platums pikseļos, `height` - attēla garums pikseļos.

Attēla izmērus var pierakstīt arī ar atribūtu `style` - `style="width:20px;height:20px"`

Atribūtā `alt` norāda tekstu, kas parādīsies, ja attēlu neizdosies ielādēt.

Piemērs:  

![kur-ir-attels](/kur-ir-attels.jpg)

Ārēji uzturētās bildes var ar laiku pazust. Tas atkarīgs no attēla uzturētāja.


### Hipersaite uz ārēju resursu

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

### Hipersaite uz citu HTML dokumentu

Iedomāsimies, ka mums ir fails `index.html` un fails `jauna_sadala.html`.

Galvenajā lapā ievietosim saiti uz jauno sadaļu...

~~~html
<a href="jauna_sadala.html">Doties uz jauno sadaļu!</a>
~~~

Ja HTML dokuments atrodas apakšmapē, svarīgi norādīt tās nosaukumu, piemēram, `sadalas/jauna.sadala.html`!



### Rindkopas

Rindkopas lapā ievieto ar birku `<p>`. Katra rindkopa attēlojas jaunā rindā.

~~~html
<p>Šī ir rindkopa</p>
~~~

### Dažādi virsraksti lapā

Kopā ir 6 līmeņu virsraksti, tie atšķirās ar burtu izmēru. `<h1>` ir lielākais, bet `<h6>` mazākais.

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>Lapas virsraksts</title>
    </head>
<body>
    <h1>1. līmeņa virsraksts </h1>
    <h2>2. līmeņa virsraksts </h2>
    <h3>3. līmeņa virsraksts </h3>
    <h4>4. līmeņa virsraksts </h4>
    <h5>5. līmeņa virsraksts </h5>
    <h6>6. līmeņa virsraksts </h6>
</body>
</html>
~~~
Izskats:

![html1](/html_uzd2.png)


## Tabulas izveide

Lai izveidotu HTML tabulu to sāk veidot ar birku `<table>`. Tad seko rindu un šūnu definēšana.

Rindu definē ar birku `<tr>` un šūnu definē ar `<td>`.

Angliski - `<tr>` -> Table Row
`<td>` -> Table data

Apskatīsim piemēru.

~~~html
<table>
	<tr>
    	<td>1. rinda - 1. kolona </td>
        <td>1. rinda - 2. kolona </td>
        <td>1. rinda - 3. kolona </td>
        <td>1. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>2. rinda - 1. kolona </td>
        <td>2. rinda - 2. kolona </td>
        <td>2. rinda - 3. kolona </td>
        <td>2. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>3. rinda - 1. kolona </td>
        <td>3. rinda - 2. kolona </td>
        <td>3. rinda - 3. kolona </td>
        <td>3. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>4. rinda - 1. kolona </td>
        <td>4. rinda - 2. kolona </td>
        <td>4. rinda - 3. kolona </td>
        <td>4. rinda - 4. kolona </td>
    </tr>
</table>
~~~
Izskats:
![html1](/html_uzd4.jpg)

Var secināt, ka tabula nav pārskatāma, jo tabulai nav robežu. 
Lai uzstādītu tabulai robežas, tad izmantot birkai `<table>` atribūtu `border=1`

~~~html
<table border=1>
	<tr>
    	<td>1. rinda - 1. kolona </td>
        <td>1. rinda - 2. kolona </td>
        <td>1. rinda - 3. kolona </td>
        <td>1. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>2. rinda - 1. kolona </td>
        <td>2. rinda - 2. kolona </td>
        <td>2. rinda - 3. kolona </td>
        <td>2. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>3. rinda - 1. kolona </td>
        <td>3. rinda - 2. kolona </td>
        <td>3. rinda - 3. kolona </td>
        <td>3. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>4. rinda - 1. kolona </td>
        <td>4. rinda - 2. kolona </td>
        <td>4. rinda - 3. kolona </td>
        <td>4. rinda - 4. kolona </td>
    </tr>
</table>
~~~
Izskats:

![html1](/htmltablerobezas.png)

Tabulai ir iespējams arī uzstādi šūnu sapludināšanu vertikālu un horizontāli. 

Ja sapludina šūnas horizontāli, tad jāatceras noņemt tik šūnas cik tiek sapludinātas jeb sapludinot 2 šūnas horizontāli jānoņem divas `<td></td>` birkas. Tāpat arī vertikāli, bet atbilstoši rindu skaitam.

Piemērs.
~~~html
<table>
	<tr>
    	<td rowspan=2>1. rinda - 1. kolona </td>
        <td>1. rinda - 2. kolona </td>
        <td>1. rinda - 3. kolona </td>
        <td>1. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<!-- Noņemu pirmo šūnu, jo sapludinu divas rindas. -->
        <td>2. rinda - 2. kolona </td>
        <td>2. rinda - 3. kolona </td>
        <td>2. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>3. rinda - 1. kolona </td>
        <td>3. rinda - 2. kolona </td>
        <td>3. rinda - 3. kolona </td>
        <td>3. rinda - 4. kolona </td>
    </tr>
    <tr>
    	<td>4. rinda - 1. kolona </td>
        <td>4. rinda - 2. kolona </td>
        <td colspan=2>4. rinda - 3. kolona </td>
        <!-- Noņemu pēdējo šūnu, jo sapludinu divas šūnas blakus. -->
    </tr>
</table>
~~~

Iznākums:
![html1](/html_uzd5.jpg)


## Saraksti ar numerāciju

Numurētu sarakstu veido ar birku `<ol>`, kas nozīmē *ordered list*. Katru saraksta vienību jeb rindu veido ar birku `<li>`.

~~~html
<ol>
    <li>Pirmdiena</li>
    <li>Otrdiena</li>
    <li>Trešdiena</li>
    <li>Ceturtdiena</li>
    <li>Piektdiena</li>
    <li>Sestdiena</li>
    <li>Svētdiena</li>
</ol>
~~~

Iznākums:  
![numurets-saraksts](/numurets-saraksts.jpg)

Iestatot sarakstam atribūtu `type="I"`, iegūstam romiešu ciparus, bet atribūts `type="A"` veidos alfabētisku numerāciju.

~~~html
<h3>Kurš ir gada pirmais mēnesis?</h3>
<ol type="A">
    <li>Septembris</li>
    <li>Augusts</li>
    <li>Janvāris</li>
</ol>
~~~

Rezultāts:  
![saraksts](/saraksts.jpg)

## Saraksti bez numerācijas

Nenumurētu sarakstu veido ar birku `<ul>`, bet saraksta vienības tāpat ar `<li>`.

~~~html
<h3>Ēdienkarte:</h3>
<ul>
    <li>Aukstā zupa</li>
    <li>Karbondāde</li>
    <li>Biezpienmaize</li>
    <li>Kefīrs</li>
</ul>
~~~

Rezultāts:  
![edienkarte](/edienkarte.jpg)

Sarakstus iespējams veidot vairākos līmeņos, `<li>` vietā liekot `<ol>` vai `<ul>`.

## Stila piešķiršana elementam

Ir divi veidi kā piešķirt stilu elementam:
1. Pievienojot stila noteikumu pie paša elementa;
2. Definējot stila failu/stila birkas pašā lapā.

Piešķirot stilu kādam elementam to raksta atribūtā `style`. 

Ar visiem pieejamajiem stila definējumiem var iepazīties [šeit](https://www.w3schools.com/cssref/)

Piemērs. Pievienojam elementam fona krāsu `background-color` un teksta krāsu `color`, un izmēru `font-size`. 

~~~html
<p style="background-color:red;color:white;font-size:20px"> Paragrāfs ar sarkanu fonu un baltu tekstu</p>
~~~
Izskats:
![example image](/paragrafssarkans.png)


Šajā piemērā stila noteikumi darbosies tikai uz šo elementu.

Otrs veids ir definēt stilu kā failu vai stila birku dokumentā. 

Piemērs. Izveidojam stila birkas HTML dokumentā. Un uzstādam visus tos pašus noteikumus.

~~~html
<style>
    p{
        backround-color:red;
        color:white;
        font-size:20px;
    }
</style>
~~~

Šajā piemērā stila noteikumi darbosies uz visiem `p` elementiem.


Stila failu definē ar paplašinājumu `.css` un ievieto lapā ar šādu birku:

~~~html
 <link rel="stylesheet" href="manstils.css">
~~~

~~~note
Stila faila ievietošanu veic lapas galvenē jeb `<head>` birkās. 
~~~

Stila noteikumu izskats stila failā:
~~~css
p{
    backround-color:red;
    color:white;
    font-size:20px
}
~~~
## Stila piešķiršana pēc ID vai Class

Iepriekšējā nodaļā apskatījām piemēru kā var piešķirt stilu konkrētam elementam vai viena veida elementiem, piemēram, paragrāfiem.

Ir arī veids, kurā var piešķirt stilus konkrētiem elementiem tos grupējot pēc klases vai identifikatora.

Lai pievienotu stilu elementam pēc tā identifikatora `id`.

Nodefinēsim paragrāfu ar identifikatoru `zalu`.

~~~note
Klases un identifikātorus veido programmētājs.
~~~

~~~html
<p id="zalu">Paragrāfs</p>
~~~

Lai atlasītu šo elementu pēc identifikatora stila failā jāizmanto tā nosaukums un restīte `#`.

~~~css
#zalu{
    background:green;
    color:white;
    font-size:20px;
}
~~~
Izskats:

![example image](/idzalu.png)

Tieši tāpat var atlasīt visus elementus pēc tā klases. Tad izmanto atribūtu `class`. Restītes vietā izmanto punktu.

~~~html
<p class="zalu">Paragrāfs</p>
~~~

~~~css
.zalu{
    background:red;
    color:white;
    font-size:20px
}
~~~
Izskats:
![example image](/classzalu.png)

Elements var saturēt vairākas klases.

~~~html
<p class="zalu centret">Paragrāfs</p>
~~~


## Noslēgumā

HTML mājaslapas var veidot arī bez interneta pieslēguma, jāizveido tukšs `.htm` dokuments, kurā iekšā ir HTML kods, tad jāatver ar kādu no pārlūkiem.

Daļa jauno pārlūku paši pabeidz birkas, ja to ir aizmirsis izdarīt izstrādātājs, bet uz to nevajadzētu paļauties.

Lai ātri notestētu kodu, ērti lietot [JSFiddle](https://jsfiddle.net) koda redaktoru.

Vēlams mājas lapas darbību pārbaudīt dažādās pārlūkprogrammās!


[Šeit](https://www.w3schools.com/tags/ref_html_browsersupport.asp) vari izlasīt par birku saderību ar dažādām pārlūkprogrammām un to versijām.

