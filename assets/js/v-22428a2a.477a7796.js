"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5091],{668:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-22428a2a",path:"/zh_CN/dsiware-backups.html",title:"DSiware备份",lang:"zh-CN",frontmatter:{title:"DSiware备份"},excerpt:"",headers:[{level:2,title:"首先需要…",slug:"首先需要",children:[]},{level:2,title:"Nintendo DSi - 说明",slug:"nintendo-dsi-说明",children:[{level:3,title:"Section I - Identifying the desired DSiWare",slug:"section-i-identifying-the-desired-dsiware",children:[]},{level:3,title:"Section II - Extracting the DSiWare",slug:"section-ii-extracting-the-dsiware",children:[]},{level:3,title:"Section III - Extracting the save file (optional)",slug:"section-iii-extracting-the-save-file-optional",children:[]}]}],filePathRelative:"zh_CN/dsiware-backups.md",git:{updatedTime:1637536243e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},6125:(e,i,t)=>{t.r(i),t.d(i,{default:()=>h});var o=t(6252);const a=(0,o._)("h2",{id:"首先需要",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#首先需要","aria-hidden":"true"},"#"),(0,o.Uk)(" 首先需要…")],-1),l=(0,o.Uk)("最新版本的 "),n={href:"https://github.com/RocketRobz/godmode9i/releases",target:"_blank",rel:"noopener noreferrer"},d=(0,o.Uk)("GodMode9i"),r=(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Uk)("下载压缩包，解压并将 "),(0,o._)("code",null,"GodMode9i.nds"),(0,o.Uk)(" 放置在你 SD 卡的任意位置")])],-1),c=(0,o.uE)('<h2 id="nintendo-dsi-说明" tabindex="-1"><a class="header-anchor" href="#nintendo-dsi-说明" aria-hidden="true">#</a> Nintendo DSi - 说明</h2><h3 id="section-i-identifying-the-desired-dsiware" tabindex="-1"><a class="header-anchor" href="#section-i-identifying-the-desired-dsiware" aria-hidden="true">#</a> Section I - Identifying the desired DSiWare</h3><ol><li>Launch GodMode9i and select <code>[nand:] SYSNAND</code></li><li>Navigate to the <code>title</code> folder</li><li>Choose the folder according to whichever category you&#39;re looking for <ul><li><code>00030004</code>: Standard DSiWare</li><li><code>00030005</code>: Pre-installed Fun Tools</li><li><code>0003000f</code>: System Data (non-DSiWare files, can&#39;t be run)</li><li><code>00030015</code>: System Base Tools</li><li><code>00030017</code>: Launcher</li></ul></li><li>Once you have chosen which type of DSiWare you would like to extract, enter a subfolder, and then enter <code>content</code></li><li>There should now be an <code>.app</code> file visible. Select the file, and choose <code>Show NDS file info</code>. This will tell you if it&#39;s the DSiWare that you are looking for <ul><li>If it is not the DSiWare title that you were looking for, continue searching in other folders until you find it</li><li>Files in <code>0003000f</code> cannot have their NDS file info viewed because they are not launchable DSiWare and do not contain a valid banner</li></ul></li></ol><h3 id="section-ii-extracting-the-dsiware" tabindex="-1"><a class="header-anchor" href="#section-ii-extracting-the-dsiware" aria-hidden="true">#</a> Section II - Extracting the DSiWare</h3><ol><li>Highlight the <code>.app</code> file, then press <kbd class="face">Y</kbd> to add it to the clipboard</li><li>Navigate your SD card to the directory where you&#39;d like to place the dumped DSiWare title</li><li>Press <kbd class="face">Y</kbd> again to paste the DSiWare title in the directory you are currently navigating <ul><li>You can change the name of the file after pasting it by pressing <kbd class="face">X</kbd> while holding <kbd class="R">R</kbd></li><li>Repeat this for all files you wish to copy to the same directory</li></ul></li></ol><p>You should now see the DSiWare title in TWiLight Menu++ or the Unlaunch Filemenu.</p><h3 id="section-iii-extracting-the-save-file-optional" tabindex="-1"><a class="header-anchor" href="#section-iii-extracting-the-save-file-optional" aria-hidden="true">#</a> Section III - Extracting the save file (optional)</h3><ol><li>In the same folder as <code>content</code> for your specified DSiWare, there will be a folder named <code>data</code></li><li>Inside the <code>data</code> folder is the save file. Copy this file to your SD card in the same way you did for the DSiWare title itself <ul><li>Unlaunch and nds-bootstrap use the <code>.pub</code> and <code>.prv</code> file extensions for DSiWare save files. If your DSiWare save file was originally titled <code>public.sav</code>, use the <code>.pub</code> extension, and if the save file was originally titled <code>private.sav</code>, use the <code>.prv</code> extension</li><li>If you wish to use the DSiWare save file with TWiLight Menu++, make sure to place it in the <code>saves</code> folder at the location of your ROM</li></ul></li></ol>',8),s={},h=(0,t(3744).Z)(s,[["render",function(e,i){const t=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("ul",null,[(0,o._)("li",null,[l,(0,o._)("a",n,[d,(0,o.Wm)(t)]),r])]),c],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,o]of i)t[e]=o;return t}}}]);