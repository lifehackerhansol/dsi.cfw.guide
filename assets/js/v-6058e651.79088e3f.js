"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6097],{4285:(e,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t={key:"v-6058e651",path:"/hu_HU/launching-the-exploit.html",title:"Az Exploit indítása",lang:"hu-HU",frontmatter:{title:"Az Exploit indítása"},excerpt:"",headers:[{level:3,title:"I. rész - DSi Camera verziójának ellenőrzése",slug:"i-resz-dsi-camera-verziojanak-ellenorzese",children:[]},{level:3,title:"II. rész - Memory Pit",slug:"ii-resz-memory-pit",children:[]},{level:2,title:"III. rész - Az Exploit indítása",slug:"iii-resz-az-exploit-inditasa",children:[]}],filePathRelative:"hu_HU/launching-the-exploit.md"}},460:(e,a,l)=>{l.r(a),l.d(a,{default:()=>B});var t=l(6252);const i=(0,t._)("p",null,'Először az SD kártyád állítjuk be az exploit futtatásához. A legtöbb felhasználónak a "Memory Pit" exploitot ajánljuk, ami a Nintendo DSi Camera alkalmazás kép metaadat kezelésének hibáját használja ki.',-1),n=(0,t._)("p",null,"Az exploit indítása a TWiLight Menu++-ba bootol, egy homebrew alkalmazásba, ami a DSi Menü cseréjeként szolgál.",-1),o={class:"custom-container tip"},s=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),r=(0,t.Uk)("Ha nem tervezed az Unlaunch telepítését és van Flipnote Studio-d, ajánlott a a "),d=(0,t.Uk)("Flipnote Lenny"),k=(0,t.Uk)(" használata helyette. "),m=(0,t.Uk)("Melyik a legjobb exploit?"),z=(0,t._)("h3",{id:"i-resz-dsi-camera-verziojanak-ellenorzese",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#i-resz-dsi-camera-verziojanak-ellenorzese","aria-hidden":"true"},"#"),(0,t.Uk)(" I. rész - DSi Camera verziójának ellenőrzése")],-1),h=(0,t._)("li",null,"Kapcsold be a konzolod",-1),u=(0,t.Uk)("Nyisd meg a Nintendo DSi Camera alkalmazást "),p=(0,t._)("li",null,"Ha még nem hajtottad végre a kamera oktatást, tedd meg",-1),c=(0,t.Uk)("Ha a tutorial megjelenik és összeomlik, akkor a Nintendo DSi kamera hardvered valószínűleg hibás valamilyen módon és nem fogod tudni használni a Memory Pit-et. Használj egy "),g=(0,t.Uk)("alternatív exploitot"),y=(0,t._)("li",null,"Nyisd meg az albumot a nagy gombot használva a jobb oldalon",-1),b=(0,t._)("li",null,[(0,t.Uk)("Jegyezd meg, hogy van-e Facebook ikonod a csillagok, klubok és szívek mellett, ott ahol pirossal jelöltük: "),(0,t._)("img",{src:"/assets/images/facebook-check.png",alt:"Képernyőkép arról, ahol a Facebook ikon megtalálható"})],-1),_=(0,t.uE)('<h3 id="ii-resz-memory-pit" tabindex="-1"><a class="header-anchor" href="#ii-resz-memory-pit" aria-hidden="true">#</a> II. rész - Memory Pit</h3><ol><li>Töltsd le a megfelelő Memory Pit binárist a Nintendo DSi Camera verziódhoz: <ul><li><a href="/assets/files/memory_pit/768_1024/pit.bin">Ha <em><strong>van</strong></em> Facebook ikonod</a></li><li><a href="/assets/files/memory_pit/256/pit.bin">Ha <em><strong>nincs</strong></em> Facebook ikonod</a></li></ul></li><li>Navigálj az <code>sd:/private/ds/app/484E494A/</code> mappába az SD kártyádon <ul><li>Ha már létezik ez a könyvtár, korábban készítettél fotókat az SD kártyádra az Nintendo DSi Camera alkalmazással. Ha így van, nem kell törölnöd és újra létrehoznod</li><li>Ha nem létezik, hozd létre az egyes mappákat</li></ul></li><li>If there is already a <code>pit.bin</code> file in that path, rename it to <code>tip.bin</code></li><li>Rakd a Memory Pit <code>pit.bin</code> fájlját ebbe a mappába</li><li>Ha létezik mappa <code>DCIM</code> néven az SD kártya gyökerében, készts róla mentést, így nem veszted el belőle a képeket, majd töröld a mappát az SD kártyáról</li></ol><h2 id="iii-resz-az-exploit-inditasa" tabindex="-1"><a class="header-anchor" href="#iii-resz-az-exploit-inditasa" aria-hidden="true">#</a> III. rész - Az Exploit indítása</h2>',3),v=(0,t._)("li",null,"Biztosítsd, hogy az SD kártyád bekerüljön a Nintendo DSi-dbe",-1),f=(0,t._)("li",null,"Bootold be a Nintendo DSi-d és indítsd el a Nintendo DSi Camera alkalmazást",-1),j=(0,t.Uk)("Válaszd az SD kártya ikont a jobb oldalt felül "),D=(0,t._)("li",null,"Ha üzentet kapsz, hogy az SD kártya nincs berakva, használj másik SD kártyát",-1),U=(0,t.Uk)("Ha üzentet kapsz, hogy az SD kártyád nem használható, biztosítsd, hogy az SD kártyád "),S=(0,t.Uk)("megfelelően formázott"),H=(0,t._)("li",null,[(0,t.Uk)("Nyisd meg az albumot a nagy gombot használva a jobb oldalon "),(0,t._)("ul",null,[(0,t._)("li",null,"Ha a képernyő magenta színnel villan, a Memory Pit megfelelően másolásra került")])],-1),x={class:"custom-container warning"},N=(0,t._)("p",{class:"custom-container-title"},"WARNING",-1),I=(0,t.Uk)("Ha a felső képernyő zöldre vált, akkor nincs a TWiLight Menu++ "),M=(0,t._)("code",null,"BOOT.NDS",-1),w=(0,t.Uk)(" fájlja az SD kártyád gyökerében. Hajtsd végre az "),A=(0,t.Uk)("előkészítő lépéseket"),C=(0,t.Uk)(" újra."),P=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"WARNING"),(0,t._)("p",null,[(0,t.Uk)("Ha beléptél az SD kártya kamera albumba és semmi szokatlan nem történt, ellenőrizd, hogy jó verzióját töltötted-e le a Memory Pit-nek, ami a verziódhoz és a régiódhoz tartozik és hogy jó mappába raktad-e az SD kártyádon. Továbbá győződj meg arról, hogy nincs "),(0,t._)("code",null,"DCIM"),(0,t.Uk)(" mappa az SD kártyád gyökerében.")])],-1),W=(0,t._)("p",null,"Most már használhatod a TWiLight Menu++-t! Először kérni fogja, hogy válassz nyelvet és régiót. Ezeknek nem kell egyezniük a konzolod nyelvével vagy régiójával, szóval állítsd őket arra, amik neked megfelelnek. Utána ajánlott, hogy folytasd és készíts egy NAND mentést. Ez potenciálisan használható lesz arra, hogy megmentsd a konzolod, ha valami rossz történne a jövőben.",-1),E={class:"custom-container tip"},T=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),F=(0,t.Uk)("Folytasd a "),L=(0,t.Uk)("NAND Dumpolásával"),R={},B=(0,l(3744).Z)(R,[["render",function(e,a){const l=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,n,(0,t._)("div",o,[s,(0,t._)("p",null,[r,(0,t.Wm)(l,{to:"/hu_HU/launching-the-flipnote-exploit.html"},{default:(0,t.w5)((()=>[d])),_:1}),k,(0,t.Wm)(l,{to:"/hu_HU/faq.html#which-is-the-best-exploit"},{default:(0,t.w5)((()=>[m])),_:1})])]),z,(0,t._)("ol",null,[h,(0,t._)("li",null,[u,(0,t._)("ul",null,[p,(0,t._)("li",null,[c,(0,t.Wm)(l,{to:"/hu_HU/alternate-exploits.html"},{default:(0,t.w5)((()=>[g])),_:1})])])]),y,b]),_,(0,t._)("ol",null,[v,f,(0,t._)("li",null,[j,(0,t._)("ul",null,[D,(0,t._)("li",null,[U,(0,t.Wm)(l,{to:"/hu_HU/sd-card-setup.html"},{default:(0,t.w5)((()=>[S])),_:1})])])]),H]),(0,t._)("div",x,[N,(0,t._)("p",null,[I,M,w,(0,t.Wm)(l,{to:"/hu_HU/get-started.html#section-i-prep-work"},{default:(0,t.w5)((()=>[A])),_:1}),C])]),P,W,(0,t._)("div",E,[T,(0,t._)("p",null,[F,(0,t.Wm)(l,{to:"/hu_HU/dumping-nand.html"},{default:(0,t.w5)((()=>[L])),_:1})])])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,t]of a)l[e]=t;return l}}}]);