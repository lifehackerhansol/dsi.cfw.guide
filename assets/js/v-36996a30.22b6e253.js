"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6866],{3554:(a,e,l)=>{l.r(e),l.d(e,{data:()=>o});const o={key:"v-36996a30",path:"/es_ES/dumping-nand.html",title:"Volcar la memoria NAND",lang:"es-ES",frontmatter:{title:"Volcar la memoria NAND"},excerpt:"",headers:[{level:2,title:"Sección I - Preparación de la tarjeta SD",slug:"seccion-i-preparacion-de-la-tarjeta-sd",children:[]},{level:2,title:"Seccion II - Volcar la NAND",slug:"seccion-ii-volcar-la-nand",children:[]}],filePathRelative:"es_ES/dumping-nand.md",git:{updatedTime:1641080234e3}}},7414:(a,e,l)=>{l.r(e),l.d(e,{default:()=>A});var o=l(6252);const n=(0,o.uE)('<p>Esta página es para hacer un respaldo de la NAND, es decir, una copia de los datos en el almacenamiento interno de la consola. Puedes usar este respaldo para configurar HiyaCFW, también para usarlo con los emuladores no$gba y melonDS para emular una consola Nintendo DSi.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se recomienda encarecidamente realizar este proceso. Un respaldo de la NAND de tu consola se puede usar para restaurar el sistema en el futuro, en caso que tu sistema deje de funcionar.</p></div><h2 id="seccion-i-preparacion-de-la-tarjeta-sd" tabindex="-1"><a class="header-anchor" href="#seccion-i-preparacion-de-la-tarjeta-sd" aria-hidden="true">#</a> Sección I - Preparación de la tarjeta SD</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>¿Utilizas Windows, Linux o macOS? Usa <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> para configurar automáticamente tu tarjeta SD.</p></div>',4),r=(0,o.Uk)("Descarga la última versión de "),i={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("dumpTool"),t=(0,o.Uk)("."),c=(0,o._)("li",null,[(0,o.Uk)("Coloca "),(0,o._)("code",null,"dumpTool.nds"),(0,o.Uk)(" en cualquier lugar de tu tarjeta SD.")],-1),d=(0,o.uE)('<h2 id="seccion-ii-volcar-la-nand" tabindex="-1"><a class="header-anchor" href="#seccion-ii-volcar-la-nand" aria-hidden="true">#</a> Seccion II - Volcar la NAND</h2><ol><li>Inicia <code>dumpTool</code> desde TWiLight Menu++</li><li>Presiona el botón <kbd class="face">A</kbd> de la Nintendo DSi para empazar a volcar la NAND. <ul><li>Hacer un respaldo de la NAND usualmente toma al rededor de 7 minutos.</li></ul></li><li>Cuando el respaldo esté completo, presiona el botón <kbd>START</kbd> de tu consola para salir de dumpTool.</li><li>Apaga la consola e introduce la tarjeta SD en tu dispositivo.</li><li>Guarda este respaldo en un lugar seguro, donde no lo perderás. <ul><li>De ser posible, haz multiples copias y almacénalas en dispositivos distintos.</li><li>Cuando lo hayas guardado en otro lugar, puedes borrarlo de la tarjeta SD.</li></ul></li></ol>',2),u={class:"custom-container warning"},p=(0,o._)("p",{class:"custom-container-title"},"WARNING",-1),m=(0,o.Uk)("El hash SHA1 del archivo "),h=(0,o._)("code",null,"nand.bin",-1),g=(0,o.Uk)(" no concordará con el hash almacenado en el archivo "),k=(0,o._)("code",null,"nand.bin.sha1",-1),b=(0,o.Uk)(". Esto se debe a que dumpTool añade datos adicionales conocidos como no$gba footer al archivo "),f=(0,o._)("code",null,"nand.bin",-1),v=(0,o.Uk)(" después de calcular el hash SHA1. Puedes usar "),D={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},S=(0,o.Uk)("hiyaCFW Helper"),_=(0,o.Uk)("para crear una copia sin dichos datos."),N=(0,o._)("div",{class:"custom-container tip"},[(0,o._)("p",{class:"custom-container-title"},"TIP"),(0,o._)("p",null,[(0,o.Uk)("Continua a "),(0,o._)("a",{href:"installing-unlaunch"},"Instalar Unlaunch"),(0,o.Uk)("(Opcional)")])],-1),U={},A=(0,l(3744).Z)(U,[["render",function(a,e){const l=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,(0,o._)("ol",null,[(0,o._)("li",null,[r,(0,o._)("a",i,[s,(0,o.Wm)(l)]),t]),c]),d,(0,o._)("div",u,[p,(0,o._)("p",null,[m,h,g,k,b,f,v,(0,o._)("a",D,[S,(0,o.Wm)(l)]),_])]),N],64)}]])},3744:(a,e)=>{e.Z=(a,e)=>{const l=a.__vccOpts||a;for(const[a,o]of e)l[a]=o;return l}}}]);