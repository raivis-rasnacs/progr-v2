---
title: Versijas
---
### Versijas jeb komiti

Veidojot tīmekļa vietni vai datorprogrammu, veido versijas, piemēram, v1.0 vai v3.0. Bet dažreiz nākas izlabot kļūdas vai pievienot kādu nelielu labojumu un tādā gadījumā veido mazās jeb *minorversijas*, piemēram, v2.1 vai v1.4. Visas šīs versijas Git sistēmā ir tā sauktie komiti jeb *commits*

Komits glabā informāciju par katru projekta failu un izmaiņām failā konkrētājā brīdī un programmētājam ir iespēja *atgriezties pagātnē* uz kādu iepriekšējo komitu, ja jaunās izmaiņas nedarbojas, kā iecerēts

Mēs iemācījāmies ar komandu `git add` sagatavot failus jaunai versijai un nu tie ir atpazīstami Git sistēmā. Izveidosim pirmo komitu ar komandu

~~~git
git commit -m "Mans pirmais komits"
~~~

Parametrs -m apzīmē, ka pievienosim ziņojumu *(message)* jeb aprakstu par izmaiņām komitā, bet pašu aprakstu norādām pēdiņās

![pirmais_komits](/git/pirmais_komits.png)

Ziņojumā redzēsim, cik faili ir reģistrēti komitā un kādas izmaiņas tajos veiktos

### Versiju žurnāls

Lai redzētu versiju vēsturi repozitorijam, lietojam komandu

~~~git
git log --oneline
~~~

![komitu_zurnals](/git/log.png)

Katrs komits attēlots jaunā rindā ar savu unikālu adresi, piemēram, *5c039ef*

### Atgriežamies uz vecāku versiju

Veiksim izmaiņas kādā no failiem un izveidosim vēl vienu versiju

Failā *index.html* pievienojam paragrāfu un izpildam `git status`

![izmainas](/git/izmainas.png)

Redzam, ka Git ziņo par jaunām izmaiņām failā, tāpēc tas ir atkārtoti jāpievieno ar `git add .`

![gatavas_izmainas](/git/gatavas_izmainas.png)

Atkārtoti izpildot `git status`, redzam, ka izmaiņas failā ir atpazītas un var veidot jaunu versiju, pievienojot ziņojumu

![otra_versija](/git/otra_versija.png)

Versiju žurnālā būs nu jau 2 versijas, kur pēdējā satur papildinātu *index.html* failu

![otra_versija](/git/log2.png)

Ja jaunās izmaiņas tomēr nevēlamies, varam atgriezties uz sākotnējo versiju un *index.html* fails atkal kļūs tukšs

Tam lietojam komandu

~~~git
git reset --hard <komita_id>
~~~

Repozitorijā anulējas visas izmaiņas, kas ieviestas kopš norādītā komita