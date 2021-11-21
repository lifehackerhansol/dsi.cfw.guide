"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5048],{9928:(e,i,a)=>{a.r(i),a.d(i,{data:()=>o});const o={key:"v-f94e40ee",path:"/it_IT/",title:"Home",lang:"it-IT",frontmatter:{home:!0,title:"Home",header:{overlay_image:"/assets/images/home-page-feature.png",overlay_filter:.5}},excerpt:"",headers:[{level:2,title:"Cos'è l'homebrew?",slug:"cos-e-l-homebrew",children:[]},{level:2,title:"Cosa farà questa guida al mio sistema?",slug:"cosa-fara-questa-guida-al-mio-sistema",children:[]},{level:2,title:"Cosa posso fare moddando il mio sistema?",slug:"cosa-posso-fare-moddando-il-mio-sistema",children:[]},{level:2,title:"Dove posso trovare delle applicazioni homebrew?",slug:"dove-posso-trovare-delle-applicazioni-homebrew",children:[]},{level:2,title:"Cosa dovrei sapere prima di iniziare?",slug:"cosa-dovrei-sapere-prima-di-iniziare",children:[]}],filePathRelative:"it_IT/index.md",git:{updatedTime:1637536243e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},269:(e,i,a)=>{a.r(i),a.d(i,{default:()=>D});var o=a(6252);const r={class:"custom-container tip"},l=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),t=(0,o.Uk)("Per guide complete su homebrew e custom firmware per altri dispositivi, controlla "),n={href:"https://cfw.guide/",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("CFW.Guide"),d=(0,o.Uk)("."),c=(0,o.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Questa guida non è compatibile con le console di sviluppo Nintendo DSI.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Leggi attentamente tutte le pagine introduttive (compresa questa!) prima di procedere.</p></div><h2 id="cos-e-l-homebrew" tabindex="-1"><a class="header-anchor" href="#cos-e-l-homebrew" aria-hidden="true">#</a> Cos&#39;è l&#39;homebrew?</h2>',3),u={href:"https://en.wikipedia.org/wiki/Homebrew_(video_games)",target:"_blank",rel:"noopener noreferrer"},m=(0,o.Uk)("Le applicazioni Homebrew"),p=(0,o.Uk)(" sono software senza licenza fatte per sistemi chiusi come il Nintendo DSi. Queste applicazioni possono variare da app utili a giochi homebrew personalizzati."),h=(0,o.uE)('<p>L&#39;Homebrew può essere eseguito gratuitamente su tutte le console Nintendo DSi, indipendentemente dalla versione del firmware o dalla regione. Tutto ciò di cui hai bisogno è un punto di ingresso e una scheda SD per memorizzare i tuoi homebrew. Il punto di entrata principale utilizzato in questa guida sarà chiamato Memory Pit, ma ce ne sono altri che si potrebbero utilizzare se Memory Pit è inutilizzabile.</p><h2 id="cosa-fara-questa-guida-al-mio-sistema" tabindex="-1"><a class="header-anchor" href="#cosa-fara-questa-guida-al-mio-sistema" aria-hidden="true">#</a> Cosa farà questa guida al mio sistema?</h2><p>Tieni presente che la guida è strutturata in maniera lineare, ma in genere dipende da quanto in profondità si desidera andare in termini di modding del sistema.</p><ul><li>Imposteremo un punto di accesso per avviare homebrew di base tramite Memory Pit, l&#39;exploit per l&#39;applicazione Fotocamera Nintendo DSi</li><li>Poi faremo un backup della NAND, che è utile come punto di restauro nel caso in cui si pasticci più tardi</li><li>Infine, per gli utenti che vogliono accedere a tutte le funzionalità del DSi li guideremo attraverso l&#39;installazione di Unlaunch. Unlaunch consente alle applicazioni homebrew di avviarsi con più permessi (come l&#39;accesso alla Slot-1) e all&#39;avvio del sistema <ul><li>L&#39;installazione di Unlaunch modifica la tua NAND, e in casi estremi ha il potenziale di fare un <strong>brick</strong> al sistema. Se non si vuole rischiare un brick, puoi fermarti dopo aver fatto un backup della NAND</li></ul></li></ul><h2 id="cosa-posso-fare-moddando-il-mio-sistema" tabindex="-1"><a class="header-anchor" href="#cosa-posso-fare-moddando-il-mio-sistema" aria-hidden="true">#</a> Cosa posso fare moddando il mio sistema?</h2><ul><li>Avviare i backup dei giochi Nintendo DS(i) o hack di ROM dalla scheda SD del DSi senza la necessità di una flashcard</li><li>Avviare qualsiasi DSiWare (fuori regione e/o esclusiva 3DS) dalla tua scheda SD</li><li>Avviare applicazioni DSiWare e homebrew tenendo premuti pulsanti specifici quando si accende il Nintendo DSi</li><li>Avviare classici dei vecchi tempi utilizzando vari emulatori</li><li>Usare flashcard normalmente incompatibili</li><li>Reindirizzare la NAND alla scheda SD utilizzando hiyaCFW</li><li>Guardare i tuoi film preferiti usando MPEG4Player</li><li>Mostrare un&#39;immagine (definita come immagine d&#39;avvio) all&#39;avvio del sistema</li><li>Giocare a giochi homebrew</li></ul><h2 id="dove-posso-trovare-delle-applicazioni-homebrew" tabindex="-1"><a class="header-anchor" href="#dove-posso-trovare-delle-applicazioni-homebrew" aria-hidden="true">#</a> Dove posso trovare delle applicazioni homebrew?</h2>',7),v={href:"https://db.universal-team.net/ds",target:"_blank",rel:"noopener noreferrer"},f=(0,o.Uk)("Universal-DB"),g=(0,o.Uk)(" ha la maggior parte degli homebrew moderni, con una bella ricerca e un bel ordinamento per tenere traccia di ciò che è stato aggiornato di recente"),b={href:"https://www.gamebrew.org/wiki/List_of_all_DS_homebrew",target:"_blank",rel:"noopener noreferrer"},z=(0,o.Uk)("GameBrew"),w=(0,o.Uk)(" ha un sacco di homebrew più vecchi, tuttavia molti funzionano solo su flashcard"),k=(0,o.uE)('<h2 id="cosa-dovrei-sapere-prima-di-iniziare" tabindex="-1"><a class="header-anchor" href="#cosa-dovrei-sapere-prima-di-iniziare" aria-hidden="true">#</a> Cosa dovrei sapere prima di iniziare?</h2><ul><li>Su Windows, si consiglia di <a href="file-extensions-%28windows%29">mostrare le estensioni dei file</a> se si utilizza il File Explorer predefinito</li><li>L&#39;unico rischio di brick deriva dall&#39;installazione di Unlaunch, ma il rischio è minimo</li><li>Se non hai esperienza con la copia dei file su una scheda SD, abbiamo a tua disposizione strumenti di assistenza</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continua a <a href="launching-the-exploit">Avvio dell&#39; Exploit</a></p></div>',3),_={},D=(0,a(3744).Z)(_,[["render",function(e,i){const a=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",r,[l,(0,o._)("p",null,[t,(0,o._)("a",n,[s,(0,o.Wm)(a)]),d])]),c,(0,o._)("p",null,[(0,o._)("a",u,[m,(0,o.Wm)(a)]),p]),h,(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",v,[f,(0,o.Wm)(a)]),g]),(0,o._)("li",null,[(0,o._)("a",b,[z,(0,o.Wm)(a)]),w])]),k],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const a=e.__vccOpts||e;for(const[e,o]of i)a[e]=o;return a}}}]);