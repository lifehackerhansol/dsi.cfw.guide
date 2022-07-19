"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[660],{8008:(e,i,t)=>{t.r(i),t.d(i,{data:()=>n});const n={key:"v-6dabb84f",path:"/zh_CN/faq.html",title:"常见问题",lang:"zh-CN",frontmatter:{title:"常见问题"},excerpt:"",headers:[{level:2,title:"Should I do a system update?",slug:"should-i-do-a-system-update",children:[]},{level:2,title:"Which is the best exploit?",slug:"which-is-the-best-exploit",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"Flipnote Lenny",slug:"flipnote-lenny",children:[]},{level:3,title:"Unlaunch",slug:"unlaunch",children:[]}]},{level:2,title:"Will I lose any functionality by modding my system?",slug:"will-i-lose-any-functionality-by-modding-my-system",children:[]},{level:2,title:"How do I play Nintendo DS Game Card dumps?",slug:"how-do-i-play-nintendo-ds-game-card-dumps",children:[]},{level:2,title:"How do I update my homebrew?",slug:"how-do-i-update-my-homebrew",children:[]},{level:2,title:"I am new or I would like to redo my setup. Where do I start?",slug:"i-am-new-or-i-would-like-to-redo-my-setup-where-do-i-start",children:[]},{level:2,title:"How can I remove parental controls?",slug:"how-can-i-remove-parental-controls",children:[]},{level:2,title:"Can I change my Nintendo DSi's region?",slug:"can-i-change-my-nintendo-dsi-s-region",children:[]},{level:2,title:"What happened to the hiyaCFW installation guide?",slug:"what-happened-to-the-hiyacfw-installation-guide",children:[]},{level:2,title:"What kind of SD card should I use?",slug:"what-kind-of-sd-card-should-i-use",children:[]},{level:2,title:"Can I use my DSi SD card on other systems?",slug:"can-i-use-my-dsi-sd-card-on-other-systems",children:[]},{level:2,title:"The Unlaunch page says that version 2.0 is not known to be safe. Should I use a previous version instead?",slug:"the-unlaunch-page-says-that-version-2-0-is-not-known-to-be-safe-should-i-use-a-previous-version-instead",children:[]},{level:2,title:"How do I install DSiWare?",slug:"how-do-i-install-dsiware",children:[]}],filePathRelative:"zh_CN/faq.md"}},8918:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Be});var n=t(6252);const a=(0,n.uE)('<h2 id="should-i-do-a-system-update" tabindex="-1"><a class="header-anchor" href="#should-i-do-a-system-update" aria-hidden="true">#</a> Should I do a system update?</h2><p>No. The Nintendo DSi is able to run homebrew on any version, including the latest, however there is no benefit to updating. The DSi Shop has been taken fully offline, the DSi Camera&#39;s Facebook integration is long dead, and the only other thing updates did was block flashcards. There is also an, extremely small, risk of <strong>bricking</strong> your DSi when doing a system update, likely the same as the risk when installing Unlaunch.</p><h2 id="which-is-the-best-exploit" tabindex="-1"><a class="header-anchor" href="#which-is-the-best-exploit" aria-hidden="true">#</a> Which is the best exploit?</h2><p>Unlaunch is overall the best exploit for the DSi, with the only downside being that there is a minor brick risk on install. In general it&#39;s recommended to use Memory Pit (as it&#39;s the simplest and most compatible exploit) to install Unlaunch, however if you decide you want to avoid any risk it&#39;s recommended to instead use Flipnote Lenny as using Memory Pit can cause issues in certain cases. Below is a list of the pros and cons of each exploit:</p><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><p>Pros:</p><ul><li>Quick and easy to use</li><li>No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one file</li><li>Compatible with all DSi consoles unless they have a broken camera and haven&#39;t completed the camera tutorial</li></ul><p>Cons:</p><ul><li>Requires loading the DSi Camera application every time you want to access homebrew</li><li>Incompatible with certain DSi mode titles and homebrew due to WRAM only being open to the ARM7 CPU</li><li>Access to Slot-1 (the DS Game Card) is blocked in homebrew</li><li>Access to the DSP is blocked resulting in worse sound in GBARunner2</li><li>Photos on the SD card cannot be viewed in the DSi Camera application while Memory Pit is installed, as this is the trigger for the exploit <ul><li>The only way to view SD card photos while Memory Pit is installed, is to launch a ROM dump of the DSi Camera application using <strong>TW</strong>i<strong>L</strong>ight Menu++ to boot it via nds-bootstrap (v0.61.3 or later)</li></ul></li></ul><h3 id="flipnote-lenny" tabindex="-1"><a class="header-anchor" href="#flipnote-lenny" aria-hidden="true">#</a> Flipnote Lenny</h3><p>Pros:</p><ul><li>Better compatibility with DSi mode titles and homebrew than Memory Pit</li><li>No risk of damaging the console, uninstalling is as simple as removing the SD or deleting one folder</li><li>Better sound in GBARunner2</li></ul><p>Cons:</p><ul><li>Requires Flipnote Studio</li><li>Requires loading Flipnote Studio every time you want to access homebrew, slightly more time consuming than Memory Pit</li><li>Access to Slot-1 (the DS Game Card) is blocked in homebrew</li></ul><h3 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h3><p>Pros:</p><ul><li>Allows loading homebrew and DSiWare immediately on system boot, with optional button hotkeys</li><li>Full access to the system without any restrictions, including: <ul><li>Access to Slot-1 allowing dumping Game Cards and loading incompatible flashcards</li><li>Better sound in GBARunner2</li></ul></li><li>Removes region locks on DSi-Enhanced/Exclusive Game Cards</li><li>Protection against most ways a DSi could brick</li><li>DSi-Enhanced games can be run in DSi mode without a Donor ROM</li><li>Old homebrew can be run via nds-bootstrap-hb</li></ul><p>Cons:</p>',18),o=(0,n._)("li",null,[(0,n.Uk)("Very minor risk of "),(0,n._)("strong",null,"bricking"),(0,n.Uk)(" the console when installing")],-1),l=(0,n.Uk)("Another, slightly higher, risk of bricking if you decide to "),r=(0,n.Uk)("uninstall it"),s=(0,n._)("li",null,"Not compatible with development consoles",-1),h=(0,n._)("h2",{id:"will-i-lose-any-functionality-by-modding-my-system",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#will-i-lose-any-functionality-by-modding-my-system","aria-hidden":"true"},"#"),(0,n.Uk)(" Will I lose any functionality by modding my system?")],-1),d=(0,n._)("p",null,[(0,n.Uk)("If you install Unlaunch or use Flipnote Lenny no functionality will be lost. If you use Memory Pit you will be unable to view photos on the SD card using the DSi Camera application while Memory Pit is installed. To regain the ability to view your SD card photos install Unlaunch or switch to a different exploit, then delete Memory Pit's "),(0,n._)("code",null,"pit.bin"),(0,n.Uk)(" file.")],-1),u=(0,n._)("h2",{id:"how-do-i-play-nintendo-ds-game-card-dumps",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#how-do-i-play-nintendo-ds-game-card-dumps","aria-hidden":"true"},"#"),(0,n.Uk)(" How do I play Nintendo DS Game Card dumps?")],-1),c=(0,n._)("p",null,"Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.",-1),m=(0,n._)("li",null,"With TWiLight Menu++ you can navigate your SD card to find ROM files to play with nds-bootstrap. The advantages to using TWiLight Menu++ are having a cheat menu, per-game settings, and avoiding the restrictions that forwarders bring. In other words, you can drop your ROM files directly and play without any setup. There is no 39 title limit, neither hiyaCFW or Unlaunch are required and there are no restrictions on SD card free space you can have",-1),p=(0,n.Uk)("hiyaCFW users can create forwarders for the SDNAND's DSi Menu using the "),g={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("DS Game Forwarders"),w=(0,n.Uk)(" guide on the DS-Homebrew Wiki, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++ "),f=(0,n.Uk)("If you do not have hiyaCFW and would like to use forwarders, you can follow the "),b={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("hiyaCFW installation guide"),_=(0,n.Uk)(" on the DS-Homebrew Wiki"),v=(0,n._)("h2",{id:"how-do-i-update-my-homebrew",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#how-do-i-update-my-homebrew","aria-hidden":"true"},"#"),(0,n.Uk)(" How do I update my homebrew?")],-1),S=(0,n._)("strong",null,"Unlaunch",-1),U=(0,n.Uk)(" - Follow the instructions on the "),D=(0,n.Uk)("Installing Unlaunch"),W=(0,n.Uk)(" page "),C=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("You do "),(0,n._)("strong",null,"not"),(0,n.Uk)(" need to uninstall Unlaunch before doing this")])],-1),M=(0,n._)("strong",null,"hiyaCFW",-1),I=(0,n.Uk)(" - Replace "),x=(0,n._)("code",null,"hiya.dsi",-1),T=(0,n.Uk)(" on the root of the SD card from the "),F={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("updated release"),P=(0,n._)("strong",null,"TWiLight Menu++",-1),A=(0,n.Uk)(" - Follow the instructions on the "),L={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("DS-Homebrew Wiki"),G=(0,n.uE)("<li><strong>nds-bootstrap</strong> - Copy <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> to the <code>_nds</code> folder on the root of your SD card <ul><li>If you use TWiLight Menu++, there is a high chance that the latest nds-bootstrap release is included with TWiLight Menu++</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, etc</strong> - Follow the instructions used to download them</li>",2),H=(0,n._)("p",null,"Other homebrew might use other methods to update.",-1),B=(0,n._)("h2",{id:"i-am-new-or-i-would-like-to-redo-my-setup-where-do-i-start",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#i-am-new-or-i-would-like-to-redo-my-setup-where-do-i-start","aria-hidden":"true"},"#"),(0,n.Uk)(" I am new or I would like to redo my setup. Where do I start?")],-1),q=(0,n._)("li",null,"If you have not already modified your console or are looking to update Unlaunch on your system, we recommend starting from the beginning of the guide and following through the pages. Be sure to read everything on the homepage",-1),z=(0,n.Uk)("If you have the latest version Unlaunch, follow the "),E={href:"https://wiki.ds-homebrew.com/twilightmenu/installing-dsi",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("TWiLight Menu++ install guide"),Y=(0,n.Uk)(" to set up TWiLight Menu++ on your system"),j=(0,n._)("h2",{id:"how-can-i-remove-parental-controls",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#how-can-i-remove-parental-controls","aria-hidden":"true"},"#"),(0,n.Uk)(" How can I remove parental controls?")],-1),Z=(0,n.Uk)("The "),J={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("mkey generator"),V=(0,n.Uk)(" can generate the code required to remove parental controls"),K=(0,n._)("h2",{id:"can-i-change-my-nintendo-dsi-s-region",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#can-i-change-my-nintendo-dsi-s-region","aria-hidden":"true"},"#"),(0,n.Uk)(" Can I change my Nintendo DSi's region?")],-1),X=(0,n._)("p",null,"Yes, there are a few different methods depending on what you want to change:",-1),$=(0,n._)("li",null,"The safest and simplest method is to simply install TWiLight Menu++, it can use any official language and more without needing NAND modifications",-1),ee=(0,n.Uk)("If you want to actually change the system region and are using hiyaCFW, you can use Yoti's "),ie={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},te=(0,n.Uk)("hiyalang"),ne=(0,n.Uk)(" for Asian DSi systems. For American DSi systems use "),ae={href:"https://github.com/Simonsator/cli_hiyalang/releases/",target:"_blank",rel:"noopener noreferrer"},oe=(0,n.Uk)("this version of hiyalang"),le=(0,n.Uk)("Lastly, if you want to change the region on the actual system NAND, you can use Mighty Max's "),re={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},se=(0,n.Uk)("DSi Language Patcher"),he=(0,n._)("h2",{id:"what-happened-to-the-hiyacfw-installation-guide",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#what-happened-to-the-hiyacfw-installation-guide","aria-hidden":"true"},"#"),(0,n.Uk)(" What happened to the hiyaCFW installation guide?")],-1),de=(0,n.Uk)("Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the "),ue={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},ce=(0,n.Uk)("DS-Homebrew Wiki"),me=(0,n.Uk)("."),pe=(0,n.uE)('<ul><li>If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects</li></ul><h2 id="what-kind-of-sd-card-should-i-use" tabindex="-1"><a class="header-anchor" href="#what-kind-of-sd-card-should-i-use" aria-hidden="true">#</a> What kind of SD card should I use?</h2><ul><li>You should buy an SD card from a trusted brand</li><li>A full-size SD card or a microSD card with an adapter will both work</li><li>Any capacity between 1 GB and 2 TB will work. For general usage, 8 GB is enough <ul><li>Some software, such as hiyaCFW, may experience incrementally longer loading times with larger SD card capacities</li></ul></li><li>Speed class 8 or higher is recommended</li></ul><h2 id="can-i-use-my-dsi-sd-card-on-other-systems" tabindex="-1"><a class="header-anchor" href="#can-i-use-my-dsi-sd-card-on-other-systems" aria-hidden="true">#</a> Can I use my DSi SD card on other systems?</h2><p>Generally, yes, with two exceptions:</p><ul><li>hiyaCFW will only work on the system it was set up for</li><li>Even if you are using nds-bootstrap or a flashcard, friend codes in online NDS games will be reset when attempting to go online using a different console</li></ul>',6),ge={id:"the-unlaunch-page-says-that-version-2-0-is-not-known-to-be-safe-should-i-use-a-previous-version-instead",tabindex:"-1"},ye=(0,n._)("a",{class:"header-anchor",href:"#the-unlaunch-page-says-that-version-2-0-is-not-known-to-be-safe-should-i-use-a-previous-version-instead","aria-hidden":"true"},"#",-1),we=(0,n.Uk)(" The "),fe={href:"https://problemkaputt.de/unlaunch.htm",target:"_blank",rel:"noopener noreferrer"},be=(0,n.Uk)("Unlaunch page"),ke=(0,n.Uk)(" says that version 2.0 is not known to be safe. Should I use a previous version instead?"),_e=(0,n._)("p",null,"The Unlaunch page has not been updated since version 2.0 was released, which was over two years ago. The vast majority of users experience no issues with this version, so it is considered safe.",-1),ve=(0,n._)("h2",{id:"how-do-i-install-dsiware",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#how-do-i-install-dsiware","aria-hidden":"true"},"#"),(0,n.Uk)(" How do I install DSiWare?")],-1),Se=(0,n._)("p",null,"There are three ways to play DSiWare on a DSi:",-1),Ue=(0,n._)("li",null,"Simply run the ROM from TWiLight Menu++, this is the simplest and the only limit is the size of your SD card, however there are some minor compatibility issues",-1),De=(0,n.Uk)("Install "),We={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},Ce=(0,n.Uk)("hiyaCFW"),Me=(0,n.Uk)(", then install the DSiWare using either "),Ie={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},xe=(0,n.Uk)("NTM"),Te=(0,n.Uk)(" or "),Fe={href:"https://github.com/JeffRuLz/TMFH/releases",target:"_blank",rel:"noopener noreferrer"},Ne=(0,n.Uk)("TMFH"),Pe=(0,n.Uk)(", as this is the actual DSi Menu this has a limit of 39 titles, but compatibility is perfect"),Ae=(0,n.Uk)("Install directly to the SysNAND DSi Menu using "),Le={href:"https://github.com/Epicpkmn11/NTM/releases",target:"_blank",rel:"noopener noreferrer"},Re=(0,n.Uk)("NTM"),Ge=(0,n.Uk)(", this also has perfect compatibility, but the 39 title and 1024 Block (128 MiB) limits both apply and there is an extremely minor brick risk due to writing to the internal NAND"),He={},Be=(0,t(3744).Z)(He,[["render",function(e,i){const t=(0,n.up)("RouterLink"),He=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n._)("ul",null,[o,(0,n._)("li",null,[l,(0,n.Wm)(t,{to:"/zh_CN/uninstalling-unlaunch.html"},{default:(0,n.w5)((()=>[r])),_:1})]),s]),h,d,u,c,(0,n._)("ul",null,[m,(0,n._)("li",null,[p,(0,n._)("a",g,[y,(0,n.Wm)(He)]),w,(0,n._)("ul",null,[(0,n._)("li",null,[f,(0,n._)("a",b,[k,(0,n.Wm)(He)]),_])])])]),v,(0,n._)("ul",null,[(0,n._)("li",null,[S,U,(0,n.Wm)(t,{to:"/zh_CN/installing-unlaunch.html"},{default:(0,n.w5)((()=>[D])),_:1}),W,C]),(0,n._)("li",null,[M,I,x,T,(0,n._)("a",F,[N,(0,n.Wm)(He)])]),(0,n._)("li",null,[P,A,(0,n._)("a",L,[R,(0,n.Wm)(He)])]),G]),H,B,(0,n._)("ul",null,[q,(0,n._)("li",null,[z,(0,n._)("a",E,[O,(0,n.Wm)(He)]),Y])]),j,(0,n._)("ul",null,[(0,n._)("li",null,[Z,(0,n._)("a",J,[Q,(0,n.Wm)(He)]),V])]),K,X,(0,n._)("ul",null,[$,(0,n._)("li",null,[ee,(0,n._)("a",ie,[te,(0,n.Wm)(He)]),ne,(0,n._)("a",ae,[oe,(0,n.Wm)(He)])]),(0,n._)("li",null,[le,(0,n._)("a",re,[se,(0,n.Wm)(He)])])]),he,(0,n._)("p",null,[de,(0,n._)("a",ue,[ce,(0,n.Wm)(He)]),me]),pe,(0,n._)("h2",ge,[ye,we,(0,n._)("a",fe,[be,(0,n.Wm)(He)]),ke]),_e,ve,Se,(0,n._)("ul",null,[Ue,(0,n._)("li",null,[De,(0,n._)("a",We,[Ce,(0,n.Wm)(He)]),Me,(0,n._)("a",Ie,[xe,(0,n.Wm)(He)]),Te,(0,n._)("a",Fe,[Ne,(0,n.Wm)(He)]),Pe]),(0,n._)("li",null,[Ae,(0,n._)("a",Le,[Re,(0,n.Wm)(He)]),Ge])])],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,n]of i)t[e]=n;return t}}}]);