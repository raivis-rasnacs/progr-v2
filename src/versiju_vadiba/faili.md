---
title: Pievienojam failus
---
## Failu pievienošana

Pirms veidojam versijas, jāizpilda svarīgs solis - faili jāieliek uzskaitē

![add_commit](/git/add_commit.png)

Ar komandu

~~~git
git status
~~~

varam ērti apskatīt, kuri faili jau ir repozitorija uzskaitē un kuri vēl nav

![neizsekotie_faili](/git/untracked_files.png)

Sarkanā krāsā iezīmētie ir sveši faili, pievienosim tos repizotorijam ar

~~~git
git add .
~~~

Ja nepieciešams, var izpildīt komandu arī atsevišķiem failiem, bet to izmanto retāk

~~~git
git add <faila_nosaukums>
~~~

Tagad atkārtoti izpildot komandu `git status`, redzēsim, ka faili attēloti zaļā krāsā un Git ir sācis sekot izmaiņām failos

![paziistami_faili](/git/to_commit.png)

Redzam arī paziņojumu *No commits yet*, kas nozīmē, ka neesam fiksējuši vēl nevienu versiju savā projektā, bet par to nākamajā sadaļā...

