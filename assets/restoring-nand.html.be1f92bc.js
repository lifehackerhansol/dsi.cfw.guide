import{_ as o,o as s,c as d,a as e,d as a,b as l,e as n,r as i}from"./app.2a48f271.js";const r={},h=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,[a("FIGYELEM! Ez "),e("em",null,[e("strong",null,"vesz\xE9lyes")]),a(". M\xE9g ha k\xF6veted is pontosan a l\xE9p\xE9seket, meg van a lehet\u0151s\xE9ge annak, hogy brick-eled a DSi-t - mert a NAND nagyon alacsony min\u0151s\xE9g\u0171 - f\u0151leg akkor, ha t\xF6bbsz\xF6r flashelsz! Ezt az utols\xF3 lehet\u0151s\xE9gk\xE9nt szabad csak haszn\xE1lni!")])],-1),c=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[a("Ne ugorj \xE1t "),e("em",null,"semmit"),a(" ezen az oldalon, b\xE1rmi hiba er\u0151sen n\xF6veli a DSi-d brick-el\xE9s\xE9nek es\xE9lyeit.")])],-1),m=e("p",null,"El\u0151sz\xF6r, p\xE1r biztons\xE1gos alternat\xEDva, hogy mi\xE9rt \xE9rdemes ezt tenni:",-1),b=e("li",null,"DSiWare-ek telep\xEDt\xE9se t\xF6rt\xE9nhet a hiyaCFW vagy a TWiLight Menu++ alkalmaz\xE1ssal",-1),z={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[a("Az Unlaunch gomb konfigur\xE1ci\xF3 helyre\xE1ll\xEDt\xE1s megt\xF6rt\xE9nhet az Unlaunch men\xFCb\u0151l, ami a bekapcsol\xE1skor nyomva tartott "),e("kbd",{class:"face"},"A"),a(" + "),e("kbd",{class:"face"},"B"),a(" gombokkal \xE9rhet\u0151 el")],-1),g=e("li",null,"Az Unlaunch-ba bootol\xE1s hib\xE1t adott? Vedd ki az SD k\xE1rty\xE1d \xE9s pr\xF3b\xE1ld \xFAjra ind\xEDtani a rendszered. Ha m\u0171k\xF6dik, akkor a hiba az SD k\xE1rty\xE1ddal van \xE9s a NAND ment\xE9s helyre\xE1ll\xEDt\xE1sa nem fogja jav\xEDtani azt",-1),u={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},p={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,'Az Unlaunch elt\xE1vol\xEDt\xE1sa, ak\xE1r a NAND flashel\xE9s\xE9vel vagy az uninstallerrel, ker\xFClend\u0151, am\xEDg kifejezetten nem sz\xFCks\xE9ges; be\xE1ll\xEDthatod az autoboot gombokat "Launcher"-re \xE9s a DSi-d olyan lesz mint a gy\xE1ri',-1),N=e("p",null,"Az egyetlen dolog, amit a NAND-oddal kell tenned az az Unlaunch telep\xEDt\xE9se. Haszn\xE1ld az alternat\xEDvakat egy\xE9bk\xE9nt.",-1),f=e("h2",{id:"kovetelmenyek",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kovetelmenyek","aria-hidden":"true"},"#"),a(" K\xF6vetelm\xE9nyek")],-1),y=e("li",null,[a("A NAND ment\xE9sed "),e("strong",null,"ugyanarr\xF3l a DSi-r\u0151l")],-1),_={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,"Egy m\xF3d arra, hogy homebrew-ot futtass NAND hozz\xE1f\xE9r\xE9ssel, mint az Unlaunch vagy a Memory Pit",-1),A={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},S={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},E={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},M=n('<h2 id="a-bios-dumpolasa-a-no-gba-ban-torteno-hasznalathoz" tabindex="-1"><a class="header-anchor" href="#a-bios-dumpolasa-a-no-gba-ban-torteno-hasznalathoz" aria-hidden="true">#</a> A BIOS dumpol\xE1sa a no$gba-ban t\xF6rt\xE9n\u0151 haszn\xE1lathoz</h2><ol><li>Csomagold ki az <code>dsibiosdumper.nds</code>-t az <code>dsibiosdumper.zip</code> arch\xEDvb\xF3l \xE9s rakd valahova az SD k\xE1rty\xE1don</li><li>Kapcsold be a konzolod, mik\xF6zben nyomva tartod az <kbd class="face">A</kbd> \xE9s <kbd class="face">B</kbd> gombokat <ul><li>Ez el kell ind\xEDtsa az Unlaunch Filemenu-t</li></ul></li><li>Ind\xEDtsd el dsibiosdumper-t az Unlaunch Filemenu-b\u0151l</li><li>Nyomj <kbd class="face">A</kbd> gombot a BIOS SD k\xE1rty\xE1ra dumpol\xE1s\xE1hoz</li><li>Nyomj <kbd>START</kbd> gombot a dsibiosdumper-b\u0151l kil\xE9p\xE9shez</li></ol><h2 id="a-nand-mentesed-tesztelese" tabindex="-1"><a class="header-anchor" href="#a-nand-mentesed-tesztelese" aria-hidden="true">#</a> A NAND ment\xE9sed tesztel\xE9se</h2><p>Nagyon fontos, hogy teszteld a NAND ment\xE9sedet, hogy m\u0171k\xF6dik, miel\u0151tt helyre\xE1ll\xEDtod a konzolodra; ha brick hib\xE1t mutat a no$gba-ban, akkor j\xF3 es\xE9llyel brick-eli a konzolodat is.</p><ol><li>Csomagold ki a <code>NO$GBA.EXE</code>-t az <code>no$gba-w.zip</code> arch\xEDvb\xF3l \xE9s rakd egy mapp\xE1ba a sz\xE1m\xEDt\xF3g\xE9peden</li><li>M\xE1sold a NAND ment\xE9sedet abba a mapp\xE1ba, ahova a <code>NO$GBA.EXE</code>-t raktad \xE9s nevezd \xE1t <code>DSI-1.MMC</code>-re</li><li>M\xE1sold a <code>bios7i.bin</code> \xE9s a <code>bios9i.bin</code> f\xE1jlokat a mapp\xE1ba, ahova a <code>NO$GBA.EXE</code>-t raktad, nevezd \u0151ket <code>BIOSDSI7.ROM</code> \xE9s <code>BIOSDSI9.ROM</code> nevekre.</li><li>Futtasd a <code>NO$GBA.EXE</code> f\xE1jlt</li><li>Kattints az <code>Options</code> &gt; <code>Emulation Setup</code> opci\xF3kra, hogy megnyisd az Emulation Setup ablakot</li><li>M\xF3dos\xEDtsd a <code>Reset/Startup Entrypoint</code>-ot <code>GBA/NDS BIOS (Nintendo logo)</code>-ra</li><li>M\xF3dos\xEDtsd az <code>NDS Mode/Colors</code>-t <code>DSi (retail/16MB)</code>-ra</li><li>Kattints a <code>Save Now</code>-ra</li><li>Ind\xEDtsd el egy tetsz\u0151leges Nintendo DS ROM-ot (<code>.nds</code> f\xE1jl)</li></ol><p>Ha a no$gba bet\xF6lti a DSi men\xFCt (vagy az Unlaunch Filemenu-t), folytasd a k\xF6vetkez\u0151 r\xE9sszel. Ha b\xE1rmilyen hib\xE1t ad <em><strong>ne flasheld a ment\xE9st</strong></em>!</p><h2 id="az-unlaunch-eltavolitasa-a-nand-mentesedbol-opcionalis" tabindex="-1"><a class="header-anchor" href="#az-unlaunch-eltavolitasa-a-nand-mentesedbol-opcionalis" aria-hidden="true">#</a> Az Unlaunch elt\xE1vol\xEDt\xE1sa a NAND ment\xE9sedb\u0151l (opcion\xE1lis)</h2><p>K\xF6vesd ezt, ha a NAND ment\xE9sed az ut\xE1n k\xE9sz\xEDtetted, hogy telep\xEDtetted az Unlaunch-\xF6t \xE9s el szeretn\xE9d t\xE1vol\xEDtani az Unlaunch-\xF6t a rendszeredr\u0151l. Ha nem akard elt\xE1vol\xEDtani az Unlaunch-\xF6t, <strong>nem</strong> kell v\xE9grehajtanod ezt a r\xE9szt.</p>',8),j={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},U=n("<li>Csomagold ki az <code>UNLAUNCH.DSI</code>-t az <code>unlaunch.zip</code> f\xE1jlb\xF3l</li><li>T\xF6ltsd be az <code>UNLAUNCH.DSI</code>-t a no$gba-ban \xE9s ind\xEDtsd el a Game Card slot-b\xF3l <ul><li>Ez el kell ind\xEDtsa az Unlaunch telep\xEDt\u0151t, ami hasonl\xF3an n\xE9z ki, mint az Unlaunch Filemenu</li></ul></li><li>V\xE1laszd az <code>Uninstall</code>-t</li><li>Ha befejezte, v\xE1laszd a <code>Power down</code>-t</li><li>T\xF6lts be b\xE1rmilyen Nintendo DS ROM-ot \xFAjra \xE9s ellen\u0151rizd, hogy a DSi men\xFCd bet\xF6lts \xE9s megfelel\u0151en m\u0171k\xF6dik</li>",5),B=n('<p>Ha no$gba b\xE1rmilyen probl\xE9m\xE1t mutat, a DSi men\xFC bet\xF6kt\xE9se helyett, <em><strong>ne flash-eld a ment\xE9sed</strong></em>! Ha van egyr\xE9gebbi NAND ment\xE9sed, megpr\xF3b\xE1lhatod azt helyette. <strong>Ne</strong> pr\xF3b\xE1ld meg elt\xE1vol\xEDtani az Unlaunch-\xF6t az elt\xE1vol\xEDt\xF3val (uninstaller) a konzolon, mert extr\xE9m nagy az es\xE9lye, hogy brick-eli a DSi-det.</p><h2 id="a-nand-mentes-flashelese-szoftver" tabindex="-1"><a class="header-anchor" href="#a-nand-mentes-flashelese-szoftver" aria-hidden="true">#</a> A NAND ment\xE9s flashel\xE9se (szoftver)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Legy\xE9l biztos abban, hogy elolvastad az el\u0151z\u0151 l\xE9p\xE9seket, mert itt v\xE1lik a folyamat vesz\xE9lyess\xE9. Ha k\xF6zvetlen\xFCl ide lett\xE9l linkelve, az el\u0151bbiek k\xF6vet\xE9se n\xE9lk\xFCl, menj vissza az oldal tetej\xE9re \xE9s olvasd el az eg\xE9sz oldalt.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Legy\xE9l biztos abban, hogy Nintendo DSi rendszered rendesen fel van t\xF6ltve, miel\u0151tt elkezden\xE9d ezt a r\xE9szt.</p></div><ol><li>Behelyezett SD k\xE1rty\xE1val kapcsold be a konzolod, mik\xF6zben nyomva tartod az <kbd class="face">A</kbd> \xE9s <kbd class="face">B</kbd> gombokat</li><li>Ind\xEDtsd el a SafeNANDManager-t</li><li>Nyomd meg a gombot, hogy <code>elkezd a NAND vissza\xE1ll\xEDt\xE1st</code></li><li>Ha a vissza\xE1ll\xEDt\xE1s v\xE9gzett, nyomd meg a <kbd>START</kbd> gombot a DSi-d kikapcsol\xE1s\xE1shoz</li></ol><p>A NAND-od most m\xE1r helyre\xE1ll\xEDtott kell legyen.</p><h2 id="nand-mentes-flashelese-hardmod" tabindex="-1"><a class="header-anchor" href="#nand-mentes-flashelese-hardmod" aria-hidden="true">#</a> NAND ment\xE9s flashel\xE9se (Hardmod)</h2>',7),H={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"};function I(w,x){const t=i("ExternalLinkIcon");return s(),d("div",null,[h,c,m,e("ul",null,[b,e("li",null,[a("A k\xE9pek helyre\xE1ll\xEDt\xE1sa elv\xE9gezhet\u0151 a "),e("a",z,[a("ninfs"),l(t)]),a(" seg\xEDts\xE9g\xE9vel, kombin\xE1lva a a hiyaCFW vagy a TWiLight Menu++ alkalmaz\xE1ssal, ha szeretn\xE9d \u0151ket a konzolon. A HiyaCFW Helper legutols\xF3 verzi\xF3ja lehet\u0151v\xE9 teszi, hogy kim\xE1sold a fot\xF3id a NAND-r\xF3l az SDNAND-odra a telep\xEDt\xE9s sor\xE1n")]),k,g,e("li",null,[a('Az "An error has occurred..." \xFCzenet bootol\xE1skor val\xF3sz\xEDn\u0171leg egy hiyaCFW hiba \xE9s nem kapcsol\xF3dik a NAND-hoz, l\xE1sd a '),e("a",u,[a("hiyaCFW GYIK & hibaelh\xE1r\xEDt\xE1s"),l(t)]),a(" oldalt a DS-Homebrew Wiki-n tov\xE1bbi inform\xE1ci\xF3k\xE9rt")]),e("li",null,[a("B\xE1rmi hiba a TWiLight Menu++-ben nem kapcsol\xF3dik, meg kell pr\xF3b\xE1lnod \xFAjra telep\xEDteni a TWiLight Menu++-t vagy k\xE9rj seg\xEDts\xE9get a "),e("a",p,[a("Discord szerveren"),l(t)])]),v]),N,f,e("ul",null,[y,e("li",null,[a("A "),e("a",_,[a("SafeNANDManager"),l(t)]),a(" legutols\xF3 kiad\xE1sa")]),D,e("li",null,[e("a",A,[a("no$gba"),l(t)]),a(", a NAND ment\xE9sed ellen\u0151rz\xE9s\xE9hez (T\xF6ltsd le a 'Windows gaming version'-t) "),e("ul",null,[e("li",null,[a("macOS \xE9s Linux felhaszn\xE1l\xF3k haszn\xE1lhatj\xE1k a "),e("a",S,[a("WINE"),l(t)]),a("-t a no$gba futtat\xE1s\xE1hoz")])])]),e("li",null,[e("a",E,[a("dsibiosdumper"),l(t)])])]),M,e("ol",null,[e("li",null,[a("T\xF6ltsd le az "),e("a",j,[a("Unlaunch"),l(t)]),a(" legfrissebb kiad\xE1s\xE1t")]),U]),B,e("p",null,[a("Ha nem tudsz bebootolni a Nintendo DSi-dbe, csak a hardmod megold\xE1s a NAND vissza\xE1ll\xEDt\xE1s\xE1ra ment\xE9sb\u0151l. A legjobb \xFAtmutat\xF3 erre a "),e("a",H,[a("Nintendo DSi hardmod \xFAtmutat\xF3 a DS-Homebrew Wiki"),l(t)]),a("-ben.")])])}var C=o(r,[["render",I],["__file","restoring-nand.html.vue"]]);export{C as default};