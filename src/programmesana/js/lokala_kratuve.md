---
title: Lokālā krātuve
---

## Lokālā krātuve (localStorage)

---

![cookie-local-session](/cookie-local-session.png)
Attēls: loginradius.com

Jau noskaidrojām, ka mainīgie datus glabā tikai īslaicīgi un, aizverot lapu, savas vērtības pazaudē. Tāpēc lieto lokālo krātuvi...

Tā darbojas līdzīgi kā sīkdatnes un ir piesaistīta konkrētai mājas lapai, taču pieejams daudz lielāks atmiņas apjoms līdz pat 10MB un dati glabājas JSON formātā.

Dati no lokālās krātuves tiek dzēsti, notīrot parlūkošanas vēsturi pārlūkprogrammā visā periodā.

Apskatīsim, kā saglabāt datus lokālā krātuvē.

~~~js
localStorage.setItem("apmekletajs", "Ilze");
~~~

Lokālā krātuvē ērti saglabāt dažādus lapas iestatījumus, piemēram, izvēlēto valodu

~~~js
localStorage.setItem("valoda", "Eng");
~~~

Lai nolasītu vērtību, lieto `getItem()`

~~~js
var valoda = localStorage.getItem("valoda");
~~~

Vērtību dzēš ar `removeItem()`

~~~js
localStorage.removeItem("valoda");
~~~

Visu lokālo krātuvi dzēš ar `clear()`

~~~js
localStorage.clear();
~~~

---

## Sesijas krātuve (sessionStorage)

Sesijas krātuve darbojas ļoti līdzīgi, bet tajā dati saglabājas tikai sesijas laikā. Aizverot cilni vai pārlūkprogrammu, tie dzēšas.

