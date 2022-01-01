"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3976],{8903:(e,n,o)=>{o.r(n),o.d(n,{data:()=>i});const i={key:"v-9d348696",path:"/restoring-nand.html",title:"Restoring a NAND backup",lang:"en-US",frontmatter:{title:"Restoring a NAND backup"},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Dumping the BIOS for use in no$gba",slug:"dumping-the-bios-for-use-in-no-gba",children:[]},{level:2,title:"Testing your NAND backup",slug:"testing-your-nand-backup",children:[]},{level:2,title:"Uninstalling Unlaunch from your NAND backup (optional)",slug:"uninstalling-unlaunch-from-your-nand-backup-optional",children:[]},{level:2,title:"Flashing your NAND backup (Software)",slug:"flashing-your-nand-backup-software",children:[]},{level:2,title:"Flashing your NAND backup (Hardmod)",slug:"flashing-your-nand-backup-hardmod",children:[]}],filePathRelative:"restoring-nand.md",git:{updatedTime:1641080234e3}}},2179:(e,n,o)=>{o.r(n),o.d(n,{default:()=>Q});var i=o(6252);const t=(0,i._)("div",{class:"custom-container danger"},[(0,i._)("p",{class:"custom-container-title"},"DANGER"),(0,i._)("p",null,[(0,i.Uk)("WARNING! This is "),(0,i._)("em",null,[(0,i._)("strong",null,"dangerous")]),(0,i.Uk)(". Even following these steps exactly still has potential to brick the DSi as the NAND is very low quality, especially if you flash multiple times! This should only be used as a last resort!")])],-1),a=(0,i._)("div",{class:"custom-container tip"},[(0,i._)("p",{class:"custom-container-title"},"TIP"),(0,i._)("p",null,[(0,i.Uk)("Do not skip "),(0,i._)("em",null,"anything"),(0,i.Uk)(" on this page, any mistake greatly increases chance of bricking your DSi.")])],-1),r=(0,i._)("p",null,"First, a few safer alternatives to why you might want to do this:",-1),l=(0,i._)("li",null,"Installing DSiWare can be done using hiyaCFW or TWiLight Menu++",-1),s=(0,i.Uk)("Recovering pictures can be done using "),u={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},d=(0,i.Uk)("ninfs"),c=(0,i.Uk)(", in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup"),h=(0,i._)("li",null,[(0,i.Uk)("Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding "),(0,i._)("kbd",{class:"face"},"A"),(0,i.Uk)(" + "),(0,i._)("kbd",{class:"face"},"B"),(0,i.Uk)(" while powering the console on")],-1),p=(0,i._)("li",null,"Booting into Unlaunch resulting in an error? Take out your SD card and try starting the system again. If it works, then it's a fault with your SD card and restoring a NAND backup won't fix it",-1),g=(0,i.Uk)('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),b={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},k=(0,i.Uk)("hiyaCFW FAQ & Troubleshooting"),f=(0,i.Uk)(" on the DS-Homebrew Wiki for more information"),m=(0,i.Uk)("Any errors in TWiLight Menu++ are unrelated and you should try reinstalling TWiLight Menu++ or ask for help on "),y={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},N=(0,i.Uk)("Discord"),w=(0,i._)("li",null,'Uninstalling Unlaunch, whether by flashing NAND or using its uninstaller, should avoided unless absolutely necessary, you can set the autoboot keys to "Launcher" and your DSi will be like stock',-1),D=(0,i._)("p",null,"The only thing you should be doing with your NAND is installing Unlaunch. Use the alternatives otherwise.",-1),U=(0,i._)("h2",{id:"requirements",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),(0,i.Uk)(" Requirements")],-1),_=(0,i._)("li",null,[(0,i.Uk)("Your NAND backup "),(0,i._)("strong",null,"from the same DSi")],-1),A=(0,i.Uk)("The latest release of "),S={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},v=(0,i.Uk)("SafeNANDManager"),W=(0,i._)("li",null,"A way to run homebrew with NAND access, such as Unlaunch or Memory Pit",-1),E={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},I=(0,i.Uk)("no$gba"),T=(0,i.Uk)(", to check your NAND backup (Download the 'Windows gaming version') "),O=(0,i.Uk)("macOS and Linux users can use "),C={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},M=(0,i.Uk)("WINE"),R=(0,i.Uk)(" to run no$gba"),x={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},B=(0,i.Uk)("dsibiosdumper"),F=(0,i.uE)('<h2 id="dumping-the-bios-for-use-in-no-gba" tabindex="-1"><a class="header-anchor" href="#dumping-the-bios-for-use-in-no-gba" aria-hidden="true">#</a> Dumping the BIOS for use in no$gba</h2><ol><li>Extract <code>dsibiosdumper.nds</code> from the <code>dsibiosdumper.zip</code> archive and place it anywhere on your SD card</li><li>Power on your console while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd><ul><li>This should launch the Unlaunch Filemenu</li></ul></li><li>Launch dsibiosdumper from the Unlaunch Filemenu</li><li>Press <kbd class="face">A</kbd> to dump the BIOS to the SD card</li><li>Press <kbd>START</kbd> to exit dsibiosdumper</li></ol><h2 id="testing-your-nand-backup" tabindex="-1"><a class="header-anchor" href="#testing-your-nand-backup" aria-hidden="true">#</a> Testing your NAND backup</h2><p>It is very important to test that your NAND backup is working before attempting to restore it to your console, if it shows a brick error in no$gba it will most likely brick your console too.</p><ol><li>Extract <code>NO$GBA.EXE</code> from <code>no$gba-w.zip</code> to a folder on your computer</li><li>Copy your NAND backup to the folder you put <code>NO$GBA.EXE</code> in and rename it to <code>DSI-1.MMC</code></li><li>Copy <code>bios7i.bin</code> and <code>bios9i.bin</code> to the folder you put <code>NO$GBA.EXE</code>, named <code>BIOSDSI7.ROM</code> and <code>BIOSDSI9.ROM</code>, respectively.</li><li>Run <code>NO$GBA.EXE</code></li><li>Click <code>Options</code> &gt; <code>Emulation Setup</code> to open the Emulation Setup window</li><li>Change <code>Reset/Startup Entrypoint</code> to <code>GBA/NDS BIOS (Nintendo logo)</code></li><li>Change <code>NDS Mode/Colors</code> to <code>DSi (retail/16MB)</code></li><li>Click <code>Save Now</code></li><li>Launch any Nintendo DS ROM (<code>.nds</code> file)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. If it shows any kind of error <em><strong>do not flash that backup</strong></em>!</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),L=(0,i.Uk)("Download the latest version of the "),$={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},G=(0,i.Uk)("Unlaunch installer"),H=(0,i.uE)("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),q=(0,i.uE)('<h2 id="flashing-your-nand-backup-software" tabindex="-1"><a class="header-anchor" href="#flashing-your-nand-backup-software" aria-hidden="true">#</a> Flashing your NAND backup (Software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure you have read through the above steps as this is where it gets dangerous. If you were linked directly to here without following the above, then go back to the top and read this whole page.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Make sure your Nintendo DSi system is well charged before beginning this section.</p></div><ol><li>With your SD card inserted, power on your Nintendo DSi while holding <kbd class="face">A</kbd> and <kbd class="face">B</kbd></li><li>Launch SafeNANDManager</li><li>Press the button to <code>begin NAND restore</code></li><li>Once the restore finishes, press <kbd>START</kbd> to turn off your DSi</li></ol><p>Your NAND should now be restored.</p><h2 id="flashing-your-nand-backup-hardmod" tabindex="-1"><a class="header-anchor" href="#flashing-your-nand-backup-hardmod" aria-hidden="true">#</a> Flashing your NAND backup (Hardmod)</h2>',6),P=(0,i.Uk)("If you cannot boot your Nintendo DSi, a hardmod is the only way to restore a NAND backup. The best guide that currently exists is the "),z={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},X=(0,i.Uk)("Nintendo DSi hardmod guide on the DS-Homebrew Wiki"),Y=(0,i.Uk)("."),Z={},Q=(0,o(3744).Z)(Z,[["render",function(e,n){const o=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,a,r,(0,i._)("ul",null,[l,(0,i._)("li",null,[s,(0,i._)("a",u,[d,(0,i.Wm)(o)]),c]),h,p,(0,i._)("li",null,[g,(0,i._)("a",b,[k,(0,i.Wm)(o)]),f]),(0,i._)("li",null,[m,(0,i._)("a",y,[N,(0,i.Wm)(o)])]),w]),D,U,(0,i._)("ul",null,[_,(0,i._)("li",null,[A,(0,i._)("a",S,[v,(0,i.Wm)(o)])]),W,(0,i._)("li",null,[(0,i._)("a",E,[I,(0,i.Wm)(o)]),T,(0,i._)("ul",null,[(0,i._)("li",null,[O,(0,i._)("a",C,[M,(0,i.Wm)(o)]),R])])]),(0,i._)("li",null,[(0,i._)("a",x,[B,(0,i.Wm)(o)])])]),F,(0,i._)("ol",null,[(0,i._)("li",null,[L,(0,i._)("a",$,[G,(0,i.Wm)(o)])]),H]),q,(0,i._)("p",null,[P,(0,i._)("a",z,[X,(0,i.Wm)(o)]),Y])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,i]of n)o[e]=i;return o}}}]);