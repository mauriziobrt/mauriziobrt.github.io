---
layout: post
title:  "GitHub tutorial"
date:   2023-05-09 12:11:54 +0200
categories: teaching
software: GitHub
---


Github, per chi non lo conoscesse, é uno dei siti più diffusi per gestire codice in condivisione con altri e permette, per quanto riguarda le repository pubbliche, a chiunque di contribuire al codice. A detta di wikipedia una repository é: In version control systems, a repository is a data structure that stores metadata for a set of files or directory structure. Un git é un sistema di controllo dele versioni (version control system) distribuito che permette di monitorare e tenere traccia dei cambiamenti a file digitali, di solito utilizzato per lo sviluppo di codice condiviso, per il coordinamento della programmazione e -quindi- molto utile per lo sviluppo open-source. Questo tipo di servizio é molto conveniente perch ́e ci permette di analizzare e studiare milioni di esempi di codice e di riutilizzarlo per i nostri scopi. In- oltre la condivisione e l’aggiornamento del codice sorgente é gestita in modo per cui noi possiamo caricare codice aggiornato, mantenendo sulla repository tutti i cambiamenti avvenuti, potendo quindi tornare a versioni precedenti del codice. Di solito si realizza un ambiente di lavoro, ovvero una cartella in cui inseriremo il codice scaricato, con dei semplici comandi poi possiamo aggiornare il contenuto di quella cartella, nel caso ci siano cambiamenti al codice online, con un semplice comando.
Mi riferirò da qui in avanti ai comandi eseguibili per chi lavora con piattaforme UNIX ovvero Linux e Mac OS.

---

Apriamo il terminale e per prima cosa dobbiamo verificare che git sia instal- lato, per fare ciò basta scrivere ”git” e premere invio, se viene fuori una serie di informazioni riguardo a git allora `e installato.

---


	$ git

---

Nel caso non sia presente allora scrivete brew install git e premete invio.

---

	$ brew install git

---

Create una nuova cartella nel finder con il comando mkdir nome-cartella, at- tenzione sempre a non usare gli spazi che al terminale non piacciono, poi cd ”nome-cartella” per spostarsi all’interno della cartella creata e infine git clone ”link alla repository”. Per trovare il link alla repo, basta andare sulla pagina git, verso il centro dove c’`e un tasto verde con scritto <> code, premete e copiate il link https//.

---

	$ mkdir "nome-cartella" 
	$ cd "nome-cartella"
	$ git clone "link-repo"

---

Il primo comando da imparare è git clone ed è quello che userete principalmente, all’estrema sinistra della pagina web del repo c’è un bottone con un’icona di struttura ad albero con scritto, solitamente, master, quello è il tasto per scegliere la branch. Ma che cos’è? In pratica ogni repo può avere versioni parallele del codice che vengono sviluppate contemporaneamente, solitamente la branch master contiene il codice funzionante e si usano le altre branch per sviluppare nuove funzionalità.

<h4> Aggiornare la repo locale </h4>

	$ gitt add .
	$ git commit -m "commento"
	$ git push -u origin "nome-branch" 
	$ git show current
