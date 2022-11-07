---
title: FAQ
---

## Devo aggiornare il sistema?
No. Il Nintendo DSi è in grado di eseguire l'homebrew in qualsiasi versione, inclusa l'ultima, tuttavia non ci sono benefici nell'aggiornare il sistema. Il DSi Shop è stato chiuso definitivamente, l'integrazione di Facebook nella app Fotocamera Nintendo DSi è inutilizzabile da molto tempo e l'unica altra cosa che gli aggiornamenti hanno fatto è stata bloccare le flashcards. C'è anche un rischio estremamente basso di **rompere** il DSi aggiornando il sistema, probabilmente lo stesso rischio di quando si installa Unlaunch.

## Qual è l'exploit migliore?
Unlaunch nel complesso è l'exploit migliore per il DSi, l'unico lato negativo è che c'è un basso rischio di rompere il DSi quando lo si installa. In generale si consiglia di utilizzare Memory Pit (essendo l'exploit più semplice e compatibile) per installare Unlaunch, ma se si decide di evitare qualsiasi rischio si raccomanda invece di utilizzare Flipnote Lenny dato che l'utilizzo di Memory Pit può causare problemi in alcuni casi. Sotto c'è una lista di tutti i pro e i contro di ciascun exploit:

### Memory Pit
Pro:
- Veloce e Facile da utilizzare
- Nessun rischio di danneggiare la console, la disinstallazione è talmente semplice che basta rimuovere la SD o eliminare un file
- Compatibile con tutte le console DSi a meno che non abbiano una fotocamera rotta e non abbiano completato il tutorial della app fotocamera

Contro:
- Richiede di aprire l'app Fotocamera Nintendo DSi ogni volta che si desidera accedere all'homebrew
- Incompatible with certain DSi mode titles and homebrew due to WRAM only being open to the ARM7 CPU
- Access to Slot-1 (the DS Game Card) is blocked in homebrew
- L'accesso al DSP è bloccato e ciò comporta un peggioramento del suono in GBARunner2
- Photos on the SD card cannot be viewed in the DSi Camera application while Memory Pit is installed, as this is the trigger for the exploit
     - The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using **TW**i**L**ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)

### Flipnote Lenny
Pro:
- Migliore compatibilità con titoli e app homebrew in modalità DSi rispetto a Memory Pit
- Nessun rischio di danneggiare la console, la disinstallazione è talmente semplice che basta rimuovere la SD o eliminare una cartella
- Audio migliore in GBARunner2

Contro:
- Richiede Flipnote Studio
- Richiede di aprire Flipnote Studio ogni volta che si desidera accedere all'homebrew, e ciò richiede poco più tempo di Memory Pit
- Access to Slot-1 (the DS Game Card) is blocked in homebrew

### Unlaunch
Pro:
- Consente di aprire app homebrew e DSiWare immediatamente all'avvio del sistema, con tasti di scelta rapidi opzionali
- Pieno accesso al sistema senza alcuna limitazione, tra cui:
   - Accesso allo Slot-1 che consente di eseguire il backup di Cartucce di Gioco e l'avvio di flashcard non compatibili
   - Audio migliore in GBARunner2
- Rimuove i blocchi regionali sulle carte di gioco DSi-Enhanced/Exclusive
- Protezione contro la maggior parte dei modi con cui un DSi potrebbe rompersi
- I giochi DSi-Enhanced possono essere eseguiti in modalità DSi senza una Donor ROM
- Vecchie app homebrew possono essere eseguite tramite nds-bootstrap-hb

Contro:
- Un bassissimo rischio di **rompere** la console durante l'installazione
- Un altro rischio, leggermente più alto, di rompere la console se si decide di [disinstallarlo](uninstalling-unlaunch.html)
- Non compatibile con console di sviluppo

## Perderò qualche funzionalità se modifico il mio sistema?
Se si installa Unlaunch o si usa Flipnote Lenny non si perderà alcuna funzionalità. Se si utilizza Memory Pit non sarà possibile visualizzare foto salvate sulla scheda SD tramite l'app Fotocamera Nintendo DSi mentre l'exploit è installato. Per essere in grado di visualizzare le foto salvate sulla scheda SD installa Unlaunch o passa a un exploit differente, poi elimina il file `pit.bin`.

## Come faccio a giocare ai backup delle cartucce di gioco per Nintendo DS?
Giocare ai backup delle cartucce sulla console richiede l'uso di una flashcard o di nds-bootstrap, un programma che consente di riprodurre i giochi dalla scheda SD interna reindirizzando le scritture e le letture dello slot-1.
- Con TWiLight Menu++ puoi navigare nella tua scheda SD per trovare i file ROM da avviare tramite nds-bootstrap. I vantaggi di utilizzare TWiLight Menu++ sono di avere un menu per i trucchi, per le impostazioni per gioco, e di evitare le restrizioni che i collegamenti portano. In altre parole, è possibile spostare i file ROM direttamente e giocare senza alcuna configurazione. Non c'è nessun limite di 39 titoli, né hiyaCFW o Unlaunch sono necessari e non ci sono restrizioni sullo spazio libero della scheda SD che si può avere
- Gli utenti di hiyaCFW possono creare collegamenti per il menu DSi della SDNAND utilizzando la guida [Collegamenti per i Giochi DS](https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card) sulla DS-Homebrew Wiki, ma hanno alcune limitazioni. C'è un limite non aggirabile di 39 titoli, sono meno convenienti da creare rispetto all'uso di TWiLight Menu++
   - Se non hai hiyaCFW e volessi usare collegamenti, puoi seguire la [guida all'Installazione di hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing) sulla DS-Homebrew Wiki

## Come faccio ad aggiornare il mio homebrew?
- **Unlaunch** - Segui le istruzioni sulla pagina [Installazione di Unlaunch](installing-unlaunch.html)
   - **Non** devi disinstallare Unlaunch prima di farlo
- **hiyaCFW** - Sostituisci `hiya.dsi` nella scheda SD con la [versione aggiornata](https://github.com/RocketRobz/hiyaCFW/releases)
- **TWiLight Menu++** - Segui le istruzioni sulla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/twilightmenu/updating-dsi)
- **nds-bootstrap** - Copia `nds-bootstrap-hb-release.nds` & `nds-bootstrap-release.nds` nella cartella `_nds` sulla scheda SD
   - Se si utilizza TWiLight Menu++, c'è un'alta probabilità che l'ultima versione di nds-bootstrap sia inclusa con TWiLight Menu++
- **GodMode9i, dumpTool, Forwarder3-DS, ecc** - Segui le istruzioni su come scaricarli

Altre app homebrew potrebbero usare altri metodi per essere aggiornate.

## Sono nuovo o vorrei rifare la mia configurazione. Da dove Inizio?
- Se non hai già modificato la console o stai cercando di aggiornare Unlaunch sul tuo sistema, si consiglia di partire dall'inizio della guida e di seguirla attraverso le pagine. Assicurati di leggere tutto sulla pagina principale
- Se hai l'ultima versione di Unlaunch ma non vuoi hiyaCFW, segui [Avvio dell'Exploit](https://wiki.ds-homebrew.com/twilightmenu/installing-dsi) per installare TWiLight Menu++ sul tuo sistema

## Come posso eliminare il filtro famiglia?
- Il [generatore mkey](https://mkey.salthax.org) può generare il codice per rimuovere il filtro famiglia

## Posso cambiare la regione del mio Nintendo DSi?
Sì, ci sono alcuni metodi diversi a seconda di ciò che si desidera cambiare:
- Il metodo più semplice e sicuro è quello di installare semplicemente TWiLight Menu++, può utilizzare qualsiasi lingua ufficiale e altre senza bisogno di modifiche della NAND
- If you want to actually change the system region and are using hiyaCFW, you can use Yoti's [hiyalang](https://github.com/Yoti/cli_hiyalang/releases) for Asian DSi systems. For American DSi systems use [this version of hiyalang](https://github.com/Simonsator/cli_hiyalang/releases/)
- Infine, se si desidera cambiare la regione sulla NAND di sistema, è possibile utilizzare il [DSi Language Patcher](https://gbatemp.net/threads/release-dsi-language-patcher.582836/) di Mighty Max

## Cosa è successo alla guida all'installazione di hiyaCFW?
Poiché hiyaCFW non è molto pratico ed è stato un passaggio problematico e confusionario della guida per parecchi utenti, la guida è stata spostata alla [DS-Homebrew Wiki](https://wiki.ds-homebrew.com/hiyacfw/installing).
- Se sei stato collegato alla pagina in questione da un'altra guida, le istruzioni che stai seguendo sono obsolete. Si prega invece di utilizzare questa guida, dato che viene aggiornata costantemente dagli sviluppatori di questi progetti

## Che tipo di scheda SD dovrei utilizzare?
- È necessario acquistare una scheda SD da un marchio di fiducia
- Funzionerà sia una scheda SD sia una scheda microSD in un adattatore
- Qualsiasi capacità compresa tra 1 GB e 2 TB andrà bene. Per un uso generale, 8 GB sono sufficienti
  - Con alcuni software, come hiyaCFW, si possono avere tempi di caricamento molto più lunghi con schede SD con capienze più grandi
- Si raccomanda una classe di velocità 8 o superiore

## Posso usare la mia scheda SD del DSi su altri sistemi?
Generalmente sì, ma con due eccezioni:
- hiyaCFW funzionerà solo sul sistema per cui è stato creato
- Anche se stai usando nds-bootstrap o una flashcard, i codici amico dei giochi online NDS verranno reimpostati quando si tenta di andare online utilizzando una console diversa

## La pagina di [Unlaunch](https://problemkaputt.de/unlaunch.htm) dice che la versione 2.0 non è notoriamente sicura. Dovrei usare una versione precedente?
La pagina di Unlaunch non è stata aggiornata da quando è stata rilasciata la versione 2.0, più di due anni fa. La stragrande maggioranza degli utenti non hanno problemi con questa versione, ed è perciò considerata sicura.

## How do I install DSiWare?
There are three ways to play DSiWare on a DSi:
- Simply run the ROM from TWiLight Menu++, this is the simplest and the only limit is the size of your SD card, however there are some minor compatibility issues
- Install [hiyaCFW](https://wiki.ds-homebrew.com/hiyacfw/installing), then install the DSiWare using either [NTM](https://github.com/Epicpkmn11/NTM/releases) or [TMFH](https://github.com/JeffRuLz/TMFH/releases), as this is the actual DSi Menu this has a limit of 39 titles, but compatibility is perfect
- Install directly to the SysNAND DSi Menu using [NTM](https://github.com/Epicpkmn11/NTM/releases), this also has perfect compatibility, but the 39 title and 1024 Block (128 MiB) limits both apply and there is an extremely minor brick risk due to writing to the internal NAND