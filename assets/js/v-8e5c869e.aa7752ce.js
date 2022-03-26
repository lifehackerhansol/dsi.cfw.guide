"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7744],{7894:(e,i,a)=>{a.r(i),a.d(i,{data:()=>t});const t={key:"v-8e5c869e",path:"/pl_PL/launching-the-exploit.html",title:"Uruchamianie Eksploratora",lang:"pl-PL",frontmatter:{title:"Uruchamianie Eksploratora"},excerpt:"",headers:[{level:2,title:"Wymagania",slug:"wymagania",children:[]},{level:2,title:"Sekcja I - Konfiguracja karty SD",slug:"sekcja-i-konfiguracja-karty-sd",children:[{level:3,title:"Checking your System Version",slug:"checking-your-system-version",children:[]},{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"Sekcja II – Rozpoczęcie eksploatacji",slug:"sekcja-ii-–-rozpoczecie-eksploatacji",children:[]},{level:2,title:"Sekcja III - Konfiguracja menu TWiLight ++",slug:"sekcja-iii-konfiguracja-menu-twilight",children:[]}],filePathRelative:"pl_PL/launching-the-exploit.md"}},8143:(e,i,a)=>{a.r(i),a.d(i,{default:()=>K});var t=a(6252);const o=(0,t._)("p",null,'Zaczniemy od skonfigurowania karty SD do uruchomienia naszego exploita. Dla większości użytkowników zalecamy użycie exploita o nazwie "Memory Pit", który wykorzystuje lukę w sposobie obsługi metadanych obrazu przez aplikację Nintendo DSi Camera.',-1),n=(0,t._)("p",null,"Uruchomienie exploita spowoduje uruchomienie TWiLight Menu++, aplikacji homebrew, która działa jako zamiennik Menu DSi.",-1),l=(0,t._)("h2",{id:"wymagania",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#wymagania","aria-hidden":"true"},"#"),(0,t.Uk)(" Wymagania")],-1),r=(0,t._)("li",null,"Sposób na skopiowanie pobranych plików na kartę SD",-1),s=(0,t.Uk)("Aplikacja, która potrafi rozpakowywać archiwa, taka jak "),c={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("7-Zip"),d=(0,t.Uk)(" (Windows) lub "),h={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("Unarchiver"),k=(0,t.Uk)(" (macOS) "),m=(0,t._)("ul",null,[(0,t._)("li",null,"We advise you to not use WinRAR, as it is known to break things")],-1),g=(0,t.uE)('<h2 id="sekcja-i-konfiguracja-karty-sd" tabindex="-1"><a class="header-anchor" href="#sekcja-i-konfiguracja-karty-sd" aria-hidden="true">#</a> Sekcja I - Konfiguracja karty SD</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Upewnij się, że karta SD jest <a href="sd-card-setup">sformatowana poprawnie</a>.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Korzystasz z Windows, Linux czy macOS? Użyj <a href="lazy-dsi-downloader">Lazy DSi Downloader</a>, aby automatycznie skonfigurować kartę SD.</p></div><h3 id="checking-your-system-version" tabindex="-1"><a class="header-anchor" href="#checking-your-system-version" aria-hidden="true">#</a> Checking your System Version</h3><ol><li>Power on your console</li><li>Open System Settings</li><li>Take note of your System Version on the bottom right corner of your top display <img src="/assets/images/system-version-check.png" alt="Screenshot of where System Version is located"></li><li>Press &quot;DSi Menu&quot; to exit System Settings</li></ol><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><ol><li>Ensure that the Nintendo DSi Camera application does not show the tutorial after launch <ul><li>If it does show, go through it until you&#39;re done <ul><li>If the tutorial crashes as you try to complete it, your Nintendo DSi camera hardware is likely broken in some way. Please use an <a href="alternate-exploits">alternate exploit</a></li></ul></li></ul></li><li>Pobierz Memory Pit dla wersji i regionu systemu twojego Nintendo DSi <ul><li>For versions <a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.3 U,E,A,J</a></li><li>For versions <a href="/assets/files/memory_pit/768_1024/pit.bin">1.4 - 1.4.5 U,E,A,J</a></li><li>For versions <a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.4.6 K,C</a></li></ul></li><li>Upewnij się, że ta ścieżka istnieje na twojej karcie SD: <code>sd:/private/ds/app/484E494A/</code><ul><li>Będziesz już mieć ten katalog, jeśli wcześniej skopiowałeś zdjęcia na kartę SD za pomocą aplikacji Nintendo DSi Camera. Jeśli tak, nie musisz go usuwać ani tworzyć ponownie</li><li>Jeśli nie istnieje, utwórz poszczególne foldery</li></ul></li><li>Jeśli w tej ścieżce znajduje się już plik <code>pit.bin</code>, utwórz jego kopię zapasową</li><li>Umieść plik <code>pit.bin</code> w tym folderze</li><li>If there&#39;s a folder named <code>DCIM</code> in the root of your SD card, make a back up of it so you don&#39;t lose the pictures inside, and then remove it from the SD card</li></ol>',7),y={class:"custom-container tip"},w=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),f=(0,t.Uk)("For an understanding on why we're doing this, please see the "),j=(0,t.Uk)("FAQ"),z=(0,t.Uk)("."),S=(0,t._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,t.Uk)(" TWiLight Menu++")],-1),b=(0,t.Uk)("Pobierz najnowszą wersję "),D={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("TWiLight Menu++"),v=(0,t._)("li",null,[(0,t.Uk)("Wyodrębnij folder "),(0,t._)("code",null,"_nds"),(0,t.Uk)(" z "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)(" do katalogu głównego karty SD")],-1),U=(0,t._)("li",null,[(0,t.Uk)("Wyodrębnij plik "),(0,t._)("code",null,"BOOT.NDS"),(0,t.Uk)(" z "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)(" do katalogu głównego karty SD")],-1),W={class:"custom-container tip"},T=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),L=(0,t.Uk)('Unsure what the SD "root" is? '),I={href:"https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("See this image"),P=(0,t.uE)('<h2 id="sekcja-ii-–-rozpoczecie-eksploatacji" tabindex="-1"><a class="header-anchor" href="#sekcja-ii-–-rozpoczecie-eksploatacji" aria-hidden="true">#</a> Sekcja II – Rozpoczęcie eksploatacji</h2><ol><li>Upewnij się, że karta SD jest włożona do Twojego Nintendo DSi</li><li>Uruchom Nintendo DSi a potem Nintendo DSi Camera</li><li>Wybierz ikonę karty SD na prawym górnym rogu <ul><li>Jeśli otrzymasz wiadomość mówiącą, że karta SD nie jest włożona, użyj innej karty SD</li><li>Jeśli otrzymasz wiadomość mówiącą, że karta SD nie może być używana, upewnij się, że karta SD jest <a href="sd-card-setup">sformatowana poprawnie</a></li></ul></li><li>Open the album using the large button on the right <ul><li>Jeśli Memory Pit został poprawnie skopiowany, ekran powinien migać w kolorze magenta</li></ul></li></ol>',2),N={class:"custom-container warning"},x=(0,t._)("p",{class:"custom-container-title"},"WARNING",-1),A=(0,t.Uk)("Jeśli górny ekran zmieni kolor na zielony, oznacza to, że w katalogu głównym karty SD nie ma pliku "),C=(0,t._)("code",null,"BOOT.NDS",-1),E=(0,t.Uk)(". Follow the "),R=(0,t.Uk)("TWiLight Menu++ setup guide"),O=(0,t.Uk)(" again."),J=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you enter the SD card camera album and nothing unusual happens, ensure that you downloaded the correct version of Memory Pit for your version and region, and placed it into the correct folder on your SD card. Also ensure that the <code>DCIM</code> folder does not exist on your SD card.</p></div><p>You should now see the TWiLight Menu++ language selection.</p><h2 id="sekcja-iii-konfiguracja-menu-twilight" tabindex="-1"><a class="header-anchor" href="#sekcja-iii-konfiguracja-menu-twilight" aria-hidden="true">#</a> Sekcja III - Konfiguracja menu TWiLight ++</h2><ol><li>When prompted, set your preferred language and region <ul><li>The default region setting, Game-specific, is generally recommended</li><li>After setting them, if the console crashes on white screens, press and hold POWER to power off, power back on, and re-run the exploit</li></ul></li><li>Po przejściu do TWiLight Menu++ naciśnij SELECT, aby przełączyć się na menu klasycznego DS</li><li>Tap the DS icon in the bottom middle to open settings</li><li>Use the <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> buttons to switch over to the &quot;Misc. settings&quot; page</li><li>Zmień wpis &quot;Region SysNAND&quot; na region twojej konsoli</li><li>Press <kbd class="face">B</kbd> to save and exit TWiLight Menu++ settings</li></ol><p>You are now able to use TWiLight Menu++, however it&#39;s recommended to continue on and make a NAND backup. This can potentially be used to save your console if anything bad happens in the future.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Kontynuuj do <a href="dumping-nand">zrzucanie NAND</a></p></div>',6),q={},K=(0,a(3744).Z)(q,[["render",function(e,i){const a=(0,t.up)("OutboundLink"),q=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,n,l,(0,t._)("ul",null,[r,(0,t._)("li",null,[s,(0,t._)("a",c,[u,(0,t.Wm)(a)]),d,(0,t._)("a",h,[p,(0,t.Wm)(a)]),k,m])]),g,(0,t._)("div",y,[w,(0,t._)("p",null,[f,(0,t.Wm)(q,{to:"/pl_PL/faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,t.w5)((()=>[j])),_:1}),z])]),S,(0,t._)("ol",null,[(0,t._)("li",null,[b,(0,t._)("a",D,[_,(0,t.Wm)(a)])]),v,U]),(0,t._)("div",W,[T,(0,t._)("p",null,[L,(0,t._)("a",I,[M,(0,t.Wm)(a)])])]),P,(0,t._)("div",N,[x,(0,t._)("p",null,[A,C,E,(0,t.Wm)(q,{to:"/pl_PL/launching-the-exploit.html#twilight-menu"},{default:(0,t.w5)((()=>[R])),_:1}),O])]),J],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const a=e.__vccOpts||e;for(const[e,t]of i)a[e]=t;return a}}}]);