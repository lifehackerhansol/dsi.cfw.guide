"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9355],{1047:(l,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a={key:"v-5f6e42e5",path:"/zh_CN/dumping-nand.html",title:"提取NAND",lang:"zh-CN",frontmatter:{title:"提取NAND"},excerpt:"",headers:[{level:2,title:"第一节 - SD 卡设置",slug:"第一节-sd-卡设置",children:[]},{level:2,title:"第二节——提取NAND",slug:"第二节——提取nand",children:[]}],filePathRelative:"zh_CN/dumping-nand.md",git:{updatedTime:1637536243e3,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},9939:(l,e,n)=>{n.r(e),n.d(e,{default:()=>A});var a=n(6252);const i=(0,a.uE)('<p>这个页面用于备份NAND，它是DSi内部数据的拷贝。 It can be used to set up hiyaCFW, as well as no$gba and melonDS for DSi emulation.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>强烈建议你进行该步骤。 如果机器变砖，NAND备份可以用于系统恢复</p></div><h2 id="第一节-sd-卡设置" tabindex="-1"><a class="header-anchor" href="#第一节-sd-卡设置" aria-hidden="true">#</a> 第一节 - SD 卡设置</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>正在使用Windows、Linux或 macOS 设备？ 使用 <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> 来自动设置您的 SD 卡。</p></div>',4),t=(0,a.Uk)("下载最新版本的 "),o={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("dumpTool"),s=(0,a._)("li",null,[(0,a.Uk)("将 "),(0,a._)("code",null,"dumpTool.nds"),(0,a.Uk)(" 放置在你SD卡的任意位置")],-1),r=(0,a.uE)('<h2 id="第二节——提取nand" tabindex="-1"><a class="header-anchor" href="#第二节——提取nand" aria-hidden="true">#</a> 第二节——提取NAND</h2><ol><li>通过 TWiLight 菜单++ 启动 <code>dumpTool</code></li><li>点击Nintendo DSi上的 <kbd class="face">A</kbd> 键来开始提取你的 NAND <ul><li>NAND备份一般需要7分钟左右</li></ul></li><li>当NAND备份完成后，按 <kbd>START</kbd> 按钮退出提取工具</li><li>关闭DSi并将SD卡插入您的电脑中</li><li>将此备份存储在任何安全且不会丢失的地方 <ul><li>如果可能，请在不同的存储设备上做多个备份</li><li>如果你在其他地方完成了备份，你可以在SD卡中将其删除</li></ul></li></ol>',2),c={class:"custom-container warning"},u=(0,a._)("p",{class:"custom-container-title"},"WARNING",-1),h=(0,a._)("code",null,"nand.bin",-1),p=(0,a.Uk)(" 的 SHA1 hash值将与 "),m=(0,a._)("code",null,"nand.bin.sha1",-1),N=(0,a.Uk)(" 中储存的hash值不匹配。 这是因为在计算SHA1 hash值后，dumpTool对 "),k=(0,a._)("code",null,"nand.bin",-1),D=(0,a.Uk)(" 文件增加了一个 no$gba 页脚的额外数据。 您可以使用 "),_={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("hiyaCFW Helper"),f=(0,a.Uk)(" 创建一个无页脚的副本。"),g=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"TIP"),(0,a._)("p",null,[(0,a.Uk)("继续 "),(0,a._)("a",{href:"installing-unlaunch"},"安装Unlaunch"),(0,a.Uk)("（可选）")])],-1),S={},A=(0,n(3744).Z)(S,[["render",function(l,e){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("ol",null,[(0,a._)("li",null,[t,(0,a._)("a",o,[d,(0,a.Wm)(n)])]),s]),r,(0,a._)("div",c,[u,(0,a._)("p",null,[h,p,m,N,k,D,(0,a._)("a",_,[b,(0,a.Wm)(n)]),f])]),g],64)}]])},3744:(l,e)=>{e.Z=(l,e)=>{const n=l.__vccOpts||l;for(const[l,a]of e)n[l]=a;return n}}}]);