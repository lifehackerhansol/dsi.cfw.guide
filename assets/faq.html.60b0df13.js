import{_ as r,r as s,o as c,c as d,a as i,d as e,b as a,w as l,e as t}from"./app.62e59432.js";const u={},h=t('<h2 id="devo-aggiornare-il-sistema" tabindex="-1"><a class="header-anchor" href="#devo-aggiornare-il-sistema" aria-hidden="true">#</a> Devo aggiornare il sistema?</h2><p><strong>Non</strong> \xE8 consigliato aggiornare il tuo DSi a meno che non sai che ci sono DSiWare acquistati. Mentre \xE8 ancora possibile seguire questa guida se lo fai, l&#39;unico vantaggio di aggiornare la console \xE8 la possibilit\xE0 di accedere al Nintendo DSi Shop per scaricare i titoli gi\xE0 acquistati. Tutti gli altri vantaggi, come l&#39;integrazione di Facebook nell&#39;applicazione Fotocamera Nintendo DSi, non sono pi\xF9 utilizzabili o non sono sufficientemente significativi da giustificare gli aspetti negativi:</p><ul><li>L&#39;installazione di aggiornamenti di sistema \xE8 conosciuta per causare occasionalmente dei <strong>brick</strong> alle console, con approssimativamente la stessa frequenza di quando si installa Unlaunch</li><li>Gli exploit pi\xF9 vecchi non sono pi\xF9 possibili da usare, che potrebbero essere necessari se non sei in grado di utilizzare gli exploit consigliati</li><li>La compatibilit\xE0 con le flashcard \xE8 minore, tuttavia questo \xE8 bypassato se si installa Unlaunch</li></ul><h2 id="qual-e-l-exploit-migliore" tabindex="-1"><a class="header-anchor" href="#qual-e-l-exploit-migliore" aria-hidden="true">#</a> Qual \xE8 l&#39;exploit migliore?</h2><p>Unlaunch \xE8 nel complesso il miglior exploit per il DSi, con l&#39;unico lato negativo \xE8 che c&#39;\xE8 un rischio minore di causare un brick all&#39;installazione. In generale si consiglia di utilizzare Memory Pit per installare Unlaunch. Se desideri evitare qualsiasi rischio si consiglia invece di utilizzare Flipnote Lenny in quanto ha meno problemi in homebrew rispetto a Memory Pit mentre \xE8 altrettanto sicuro e semplice da rimuovere. Sotto c&#39;\xE8 una lista di tutti i pro e i contro di ciascun exploit:</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>Pro:</p><ul><li>Facile e semplice da usare</li><li>Nessun rischio di danneggiare la console, la disinstallazione \xE8 talmente semplice che basta rimuovere la scheda SD o eliminare un file</li><li>Compatibile con tutte le console DSi a meno che non abbiano una fotocamera rotta e non abbiano completato il tutorial dellla fotocamera</li></ul><p>Contro:</p><ul><li>Richiede di aprire l&#39;app Fotocamera Nintendo DSi ogni volta che si desidera accedere all&#39;homebrew</li><li>Incompatibile con alcuni titoli in modalit\xE0 DSi e applicazioni homebrew a causa di WRAM aperto solo alla CPU ARM7</li><li>L&#39;accesso alla Slot-1 (la scheda di gioco DS) \xE8 bloccato con gli homebrew</li><li>L&#39;accesso al DSP \xE8 bloccato e ci\xF2 comporta un peggioramento del suono in GBARunner2</li><li>Le foto sulla scheda SD non possono essere visualizzate tramite l&#39;applicazione Fotocamera Nintendo DSi mentre Memory Pit \xE8 installato, dato che ci\xF2 attiverebbe l&#39;exploit <ul><li>L&#39;unico modo per visualizzare le foto della scheda SD mentre Memory Pit \xE8 installato \xE8 tramite l&#39;esecuzione di un dump della ROM dell&#39;applicazione Fotocamera Nintendo DSi usando <strong>TW</strong>i<strong>L</strong>ight Menu++ per avviarlo tramite nds-bootstrap (v0.61.3 o successive)</li></ul></li></ul><h3 id="stylehax" tabindex="-1"><a class="header-anchor" href="#stylehax" aria-hidden="true">#</a> stylehax</h3><p>Pro:</p><ul><li>Migliore compatibilit\xE0 con titoli e app homebrew in modalit\xE0 DSi rispetto a Memory Pit</li><li>Facile da usare</li><li>Nessun rischio di danneggiare la console</li><li>Utilizzabile su console con fotocamera rotta</li><li>Audio migliore in GBARunner2</li></ul><p>Contro:</p><ul><li>Richiede accesso a internet</li><li>Richiede di aprire DSi Browser ogni volta che si desidera accedere all&#39;homebrew, e ci\xF2 richiede un po&#39; pi\xF9 di tempo rispetto a Memory Pit</li><li>L&#39;accesso alla Slot-1 (la scheda di gioco DS) \xE8 bloccato con gli homebrew</li></ul><h3 id="flipnote-lenny" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny" aria-hidden="true">#</a> Flipnote Lenny</h3><p>Pro:</p><ul><li>Migliore compatibilit\xE0 con titoli e app homebrew in modalit\xE0 DSi rispetto a Memory Pit</li><li>Nessun rischio di danneggiare la console, la disinstallazione \xE8 talmente semplice che basta rimuovere la SD o eliminare una cartella</li><li>Utilizzabile su console con fotocamera rotta</li><li>Audio migliore in GBARunner2</li></ul><p>Contro:</p><ul><li>Richiede di aprire Flipnote Studio ogni volta che si desidera accedere all&#39;homebrew e ci\xF2 richiede poco pi\xF9 tempo di Memory Pit</li><li>L&#39;accesso alla Slot-1 (la scheda di gioco DS) \xE8 bloccato con gli homebrew</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>Pro:</p><ul><li>Consente di aprire app homebrew e DSiWare immediatamente all&#39;avvio del sistema, con tasti di scelta rapidi opzionali</li><li>Pieno accesso al sistema senza alcuna limitazione, tra cui: <ul><li>Accesso alla Slot-1 che consente di eseguire i backup di schede di gioco e l&#39;avvio di flashcard non compatibili</li><li>Audio migliore in GBARunner2</li></ul></li><li>Rimuove i blocchi regionali sulle schede di gioco DSi-Enhanced/Esclusive DSi</li><li>Protezione contro la maggior parte dei modi con cui un DSi potrebbe rompersi</li><li>I giochi DSi-Enhanced possono essere eseguiti in modalit\xE0 DSi senza una ROM donatrice</li><li>Vecchie app homebrew possono essere eseguite tramite nds-bootstrap-hb</li></ul><p>Contro:</p>',24),p=i("li",null,[e("Un bassissimo rischio di "),i("strong",null,"rompere"),e(" la console durante l'installazione")],-1),m=i("li",null,"Non compatibile con console di sviluppo",-1),g=t('<h2 id="perdero-qualche-funzionalita-se-modifico-il-mio-sistema" tabindex="-1"><a class="header-anchor" href="#perdero-qualche-funzionalita-se-modifico-il-mio-sistema" aria-hidden="true">#</a> Perder\xF2 qualche funzionalit\xE0 se modifico il mio sistema?</h2><p>Se si installa Unlaunch o si usa Flipnote Lenny, non si perder\xE0 alcuna funzionalit\xE0. Se si usa Memory Pit, non sar\xE0 possibile visualizzare le foto sulla scheda SD utilizzando la fotocamera DSi, a meno che non avvii un dump ROM dell&#39;applicazione Fotocamera Nintendo DSi utilizzando <strong>TW</strong>i<strong>L</strong>ight Menu++ per avviarlo tramite nds-bootstrap.</p><ul><li>Per recuperare la possibilit\xE0 di visualizzare le foto salvate sulla scheda SD quando avvii la Fotocamera Nintendo DSi dal menu DSi installa Unlaunch o passa a un exploit differente, poi elimina il file <code>pit.bin</code><ul><li>Se <code>tip.bin</code> esiste ancora nella stessa cartella, rinominalo a <code>pit.bin</code></li></ul></li></ul><h2 id="come-faccio-a-giocare-ai-backup-delle-schede-di-gioco-per-nintendo-ds" tabindex="-1"><a class="header-anchor" href="#come-faccio-a-giocare-ai-backup-delle-schede-di-gioco-per-nintendo-ds" aria-hidden="true">#</a> Come faccio a giocare ai backup delle schede di gioco per Nintendo DS?</h2><p>Giocare ai backup delle schede di gioco sulla console richiede l&#39;uso di una flashcard o di nds-bootstrap, un programma che consente di riprodurre i giochi dalla scheda SD interna reindirizzando le scritture e le letture della Slot-1.</p>',5),b=i("li",null,"Con TWiLight Menu++ puoi navigare nella tua scheda SD per trovare i file ROM da avviare tramite nds-bootstrap. I vantaggi di utilizzare TWiLight Menu++ sono di avere un menu per i trucchi, impostazioni per gioco, e di evitare le restrizioni che le scorciatoie comportano. In altre parole, \xE8 possibile spostare i file ROM direttamente e giocare senza alcuna configurazione. Non c'\xE8 nessun limite di 39 titoli, n\xE9 hiyaCFW o Unlaunch sono necessari e non ci sono restrizioni sullo spazio libero della scheda SD che si pu\xF2 avere",-1),f={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},v={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},_=i("h2",{id:"come-faccio-ad-aggiornare-il-mio-homebrew",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#come-faccio-ad-aggiornare-il-mio-homebrew","aria-hidden":"true"},"#"),e(" Come faccio ad aggiornare il mio homebrew?")],-1),z=i("strong",null,"Unlaunch",-1),S=i("ul",null,[i("li",null,[i("strong",null,"Non"),e(" devi disinstallare Unlaunch prima di farlo")])],-1),D=i("strong",null,"hiyaCFW",-1),w=i("code",null,"hiya.dsi",-1),y={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},k=i("strong",null,"TWiLight Menu++",-1),x={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},M=t("<li><strong>nds-bootstrap</strong> - Copia <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> nella cartella <code>_nds</code> sulla scheda SD <ul><li>Se utilizzi TWiLight Menu++, c&#39;\xE8 un&#39;alta probabilit\xE0 che l&#39;ultima versione di nds-bootstrap sia inclusa con TWiLight Menu++</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, ecc</strong> - Segui le istruzioni su come scaricarli</li>",2),N=i("p",null,"Altre app homebrew potrebbero usare altri metodi per essere aggiornate.",-1),C=i("h2",{id:"sono-nuovo-o-vorrei-rifare-la-mia-configurazione-da-dove-inizio",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#sono-nuovo-o-vorrei-rifare-la-mia-configurazione-da-dove-inizio","aria-hidden":"true"},"#"),e(" Sono nuovo o vorrei rifare la mia configurazione. Da dove inizio?")],-1),W=i("li",null,"Se non hai gi\xE0 modificato la console o stai cercando di aggiornare Unlaunch sul tuo sistema, si consiglia di partire dall'inizio della guida e di seguirla attraverso le pagine. Assicurati di leggere tutto sulla pagina principale",-1),L={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},q=i("h2",{id:"come-posso-eliminare-il-filtro-famiglia",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#come-posso-eliminare-il-filtro-famiglia","aria-hidden":"true"},"#"),e(" Come posso eliminare il filtro famiglia?")],-1),F={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},P=i("h2",{id:"posso-cambiare-la-regione-del-mio-nintendo-dsi",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#posso-cambiare-la-regione-del-mio-nintendo-dsi","aria-hidden":"true"},"#"),e(" Posso cambiare la regione del mio Nintendo DSi?")],-1),T=i("p",null,"S\xEC, ci sono alcuni metodi diversi a seconda di ci\xF2 che si desidera cambiare:",-1),U=i("li",null,"Il metodo pi\xF9 semplice e sicuro \xE8 quello di installare semplicemente TWiLight Menu++, pu\xF2 utilizzare qualsiasi lingua ufficiale e altre senza bisogno di modifiche alla NAND",-1),R={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},B=i("h2",{id:"cosa-e-successo-alla-guida-all-installazione-di-hiyacfw",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#cosa-e-successo-alla-guida-all-installazione-di-hiyacfw","aria-hidden":"true"},"#"),e(" Cosa \xE8 successo alla guida all'installazione di hiyaCFW?")],-1),G={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},E=t('<ul><li>Se sei stato collegato alla pagina in questione da un&#39;altra guida, le istruzioni che stai seguendo sono obsolete. \xC8 consigliato invece di utilizzare questa guida, dato che viene aggiornata costantemente dagli sviluppatori di questi progetti</li></ul><h2 id="che-tipo-di-scheda-sd-dovrei-utilizzare" tabindex="-1"><a class="header-anchor" href="#che-tipo-di-scheda-sd-dovrei-utilizzare" aria-hidden="true">#</a> Che tipo di scheda SD dovrei utilizzare?</h2><ul><li>Dovresti acquistare una scheda SD di un marchio affidabile</li><li>Funzioner\xE0 sia una scheda SD sia una scheda microSD in un adattatore</li><li>Qualsiasi capacit\xE0 compresa tra 1 GB e 2 TB andr\xE0 bene. Per un uso generale, 8 GB sono sufficienti <ul><li>Con alcuni software, come hiyaCFW, si possono avere tempi di caricamento molto pi\xF9 lunghi con schede SD con capienze pi\xF9 grandi</li></ul></li><li>Si raccomanda una classe di velocit\xE0 8 o superiore</li></ul><h2 id="posso-usare-la-mia-scheda-sd-del-dsi-su-altri-sistemi" tabindex="-1"><a class="header-anchor" href="#posso-usare-la-mia-scheda-sd-del-dsi-su-altri-sistemi" aria-hidden="true">#</a> Posso usare la mia scheda SD del DSi su altri sistemi?</h2><p>Generalmente s\xEC, ma con due eccezioni:</p><ul><li>hiyaCFW funzioner\xE0 solo sul sistema su cui \xE8 stato configurato</li><li>Anche se stai usando nds-bootstrap o una flashcard, i codici amico dei giochi online NDS verranno reimpostati quando si tenta di andare online utilizzando una console diversa</li></ul><h2 id="come-posso-passare-a-una-nuova-scheda-sd-dopo-aver-impostato-gli-homebrew" tabindex="-1"><a class="header-anchor" href="#come-posso-passare-a-una-nuova-scheda-sd-dopo-aver-impostato-gli-homebrew" aria-hidden="true">#</a> Come posso passare a una nuova scheda SD dopo aver impostato gli homebrew?</h2>',7),O=i("h2",{id:"posso-ancora-usare-il-mio-sistema-normalmente-senza-la-scheda-sd-inserita-dopo-aver-impostato-gli-homebrew",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#posso-ancora-usare-il-mio-sistema-normalmente-senza-la-scheda-sd-inserita-dopo-aver-impostato-gli-homebrew","aria-hidden":"true"},"#"),e(" Posso ancora usare il mio sistema normalmente senza la scheda SD inserita dopo aver impostato gli homebrew?")],-1),V=i("em",null,"hai",-1),H={id:"la-pagina-di-unlaunch-dice-che-la-versione-2-0-non-e-notoriamente-sicura-dovrei-usare-una-versione-precedente",tabindex:"-1"},Q=i("a",{class:"header-anchor",href:"#la-pagina-di-unlaunch-dice-che-la-versione-2-0-non-e-notoriamente-sicura-dovrei-usare-una-versione-precedente","aria-hidden":"true"},"#",-1),Y={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},j=i("p",null,"La pagina di Unlaunch non \xE8 stata aggiornata da quando \xE8 stata rilasciata la versione 2.0, pi\xF9 di due anni fa. La stragrande maggioranza degli utenti non hanno problemi con questa versione, ed \xE8 perci\xF2 considerata sicura.",-1),J=i("h2",{id:"come-faccio-ad-avviare-i-dump-dei-dsiware",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#come-faccio-ad-avviare-i-dump-dei-dsiware","aria-hidden":"true"},"#"),e(" Come faccio ad avviare i dump dei DSiWare?")],-1),K=i("p",null,"Il metodo consigliato \xE8 quello di avviarli semplicemente con TWiLight Menu++, a causa del semplice metodo trascina-e-rilascia e non ci sono limiti arbitrari. Quando nds-bootstrap \xE8 impostato come metodo di avvio, ottiene anche i benefici di trucchi e screenshot, cos\xEC come qualsiasi altro vantaggio fornito dal menu in-gioco.",-1),X={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"};function $(ii,ei){const n=s("RouterLink"),o=s("ExternalLinkIcon");return c(),d("div",null,[h,i("ul",null,[p,i("li",null,[e("Un altro rischio, leggermente pi\xF9 alto, di rompere la console se si decide di "),a(n,{to:"/it_IT/uninstalling-unlaunch.html"},{default:l(()=>[e("disinstallarlo")]),_:1})]),m]),g,i("ul",null,[b,i("li",null,[e("gli utenti di hiyaCFW possono creare scorciatoie per il menu DSi della SDNAND utilizzando la guida "),i("a",f,[e("Scorciatoie per i giochi DS"),a(o)]),e(" sulla DS-Homebrew Wiki, ma hanno alcune limitazioni. C'\xE8 un limite non aggirabile di 39 titoli, e sono meno convenienti da creare rispetto all'uso di TWiLight Menu++ "),i("ul",null,[i("li",null,[e("Se non hai hiyaCFW e volessi usare le scorciatoie, puoi seguire la "),i("a",v,[e("guida all'Installazione di hiyaCFW"),a(o)]),e(" sulla DS-Homebrew Wiki")])])])]),_,i("ul",null,[i("li",null,[z,e(" - Segui le istruzioni sulla pagina "),a(n,{to:"/it_IT/installing-unlaunch.html"},{default:l(()=>[e("Installazione di Unlaunch")]),_:1}),S]),i("li",null,[D,e(" - Sostituisci "),w,e(" nella scheda SD con la "),i("a",y,[e("versione aggiornata"),a(o)])]),i("li",null,[k,e(" - Segui le istruzioni sulla "),i("a",x,[e("DS-Homebrew Wiki"),a(o)])]),M]),N,C,i("ul",null,[W,i("li",null,[e("Se hai l'ultima versione di Unlaunch, segui la "),i("a",L,[e("guida per l'installazione di TWiLight Menu++"),a(o)]),e(" per installare TWiLight Menu++ sul tuo sistema")])]),q,i("ul",null,[i("li",null,[e("Il "),i("a",F,[e("generatore mkey"),a(o)]),e(" pu\xF2 generare il codice necessario per rimuovere il filtro famiglia")])]),P,T,i("ul",null,[U,i("li",null,[e("Se vuoi effettivamente cambiare la regione di sistema e stai utilizzando hiyaCFW, \xE8 possibile utilizzare "),i("a",R,[e("hiyalang"),a(o)]),e(" per i DSi asiatici. Per i DSi americani utilizza "),i("a",A,[e("questa versione di hiyalang"),a(o)])]),i("li",null,[e("Infine, se si desidera cambiare la regione sulla NAND di sistema, \xE8 possibile utilizzare il "),i("a",I,[e("DSi Language Patcher"),a(o)]),e(" di Mighty Max")])]),B,i("p",null,[e("Poich\xE9 hiyaCFW non \xE8 molto pratico ed \xE8 stato un passaggio problematico e confusionario della guida per parecchi utenti, \xC8 stata spostata alla "),i("a",G,[e("DS-Homebrew Wiki"),a(o)]),e(".")]),E,i("p",null,[e("Formatta la tua nuova scheda SD utilizzando le istruzioni "),a(n,{to:"/it_IT/sd-card-setup.html"},{default:l(()=>[e("Configurazione scheda SD")]),_:1}),e(", poi semplicemente sposta i dati dalla vecchia scheda SD a quella nuova.")]),O,i("p",null,[e("S\xEC. Se non \xE8 stato installato Unlaunch, il sistema rimarr\xE0 completamente non modificato. Se "),V,e(" installato Unlaunch, potresti aver bisogno di "),a(n,{to:"/it_IT/installing-unlaunch.html#section-iii-post-unlaunch-configuration"},{default:l(()=>[e("configurare Unlaunch")]),_:1}),e(" per avviare automaticamente il menu DSi originale in condizioni specifiche.")]),i("h2",H,[Q,e(" La pagina di "),i("a",Y,[e("Unlaunch"),a(o)]),e(" dice che la versione 2.0 non \xE8 notoriamente sicura. Dovrei usare una versione precedente?")]),j,J,K,i("p",null,[e("Tuttavia, per i pochi titoli che sono incompatibili, puoi usare "),i("a",X,[e("NTM"),a(o)]),e(" per installarli su memoria interna o "),i("a",Z,[e("SDNAND"),a(o)]),e(" di hiyaCFW. Oltre alla mancanza dei benefici di cui sopra, vi \xE8 anche un limite di 39 titoli che non possono superare 128 MiB/1.024 blocchi di dimensione. Per SysNAND, c'\xE8 anche un rischio molto piccolo di causare un brick al sistema quando si scrive sulla NAND interna.")])])}var oi=r(u,[["render",$],["__file","faq.html.vue"]]);export{oi as default};