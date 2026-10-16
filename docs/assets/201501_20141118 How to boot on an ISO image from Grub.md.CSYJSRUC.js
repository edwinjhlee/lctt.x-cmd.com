import{_ as l,a0 as p,w as s,s as u,ao as a,I as e,x as t,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"用Grub启动ISO镜像 | LCTT x X-CMD","titleTemplate":false,"description":"用Grub启动ISO镜像 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用Grub启动ISO镜像 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用Grub启动ISO镜像 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141118 How to boot on an ISO image from Grub","title":"用Grub启动ISO镜像","tag":"201501","desc":""},"relativePath":"201501/20141118 How to boot on an ISO image from Grub.md","filePath":"[post].md"}'),d={name:"201501/20141118 How to boot on an ISO image from Grub.md"};function m(f,o,b,g,x,k){const i=p("Link");return s(),u("div",null,[o[19]||(o[19]=a(`<h1 id="用grub启动iso镜像" tabindex="-1">用Grub启动ISO镜像 <a class="header-anchor" href="#用grub启动iso镜像" aria-label="Permalink to “用Grub启动ISO镜像”">​</a></h1><p>如果你想要使用多个Linux发行版，你没有那么多的选择。你要么安装到你的物理机或虚拟机中，要么以live模式从ISO文件启动。第二个选择，对硬盘空间需求较小，只是有点麻烦，因为你需要将ISO文件写入到U盘或CD/DVD中来启动。不过，这里还有另外一个可选的折中方案：把ISO镜像放在硬盘中，然后以live模式来启动。该方案比完全安装更省空间，而且功能也完备，这对于缓慢的虚拟机而言是个不错的替代方案。下面我将介绍怎样使用流行的Grub启动加载器来实现该方案。</p><p>很明显，你将需要使用到Grub，这是几乎所有现代Linux发行版都使用的。你也需要你所想用的Linux版本的ISO文件，将它下载到本地磁盘。最后，你需要知道启动分区在哪里，并怎样在Grub中描述。对于此，请使用以下命令：</p><pre><code># fdisk -l 
</code></pre><p>带有‘*’的就是启动分区。对于我，就是/dev/sda1，用Grub语言描述就是（hd0,1)。</p><p><img src="https://farm6.staticflickr.com/5606/15174383814_a92a4eda3e_z.jpg" alt=""></p><p>作为参考，sda2就是(hd0,2)，sdb1就是(hd1,1)，以此类推。（你明白了吧。）</p><h3 id="我们需要编辑什么" tabindex="-1">我们需要编辑什么？ <a class="header-anchor" href="#我们需要编辑什么" aria-label="Permalink to “我们需要编辑什么？”">​</a></h3><p>首先，打开/etc/default/grub并检查以下行：</p><pre><code>#GRUB_HIDDEN_TIMEOUT=0
</code></pre><p>需要在此行前添加‘#’进行注释。</p><p>保存，然后打开/etc/grub.d/40_custom。</p><p>在该文件中，你将添加启动到ISO的参数。结构如下：</p><pre><code>menuentry &quot;[Entry&#39;s title in the grub screen]&quot; { 
set isofile=&quot;[path to ISO file]&quot; 
loopback loop [boot partition in Grub language]$isofile 
[some specific] arguments
}
</code></pre><p>例如，如果你想要从ISO文件启动Ubuntu，那么你就是想要添加如下行到40_custom文件：</p><pre><code>menuentry &quot;Ubuntu 14.04 (LTS) Live Desktop amd64&quot; { 
set isofile=&quot;/boot/ubuntu-14.04-desktop-amd64.iso&quot; 
loopback loop (hd0,1)$isofile 
linux (loop)/casper/vmlinuz.efi boot=casper iso-scan/filename=\${isofile} quiet splash 
initrd (loop)/casper/initrd.lz 
}
</code></pre><p><img src="https://farm8.staticflickr.com/7480/15608510369_ff50b28f5e_z.jpg" alt=""></p><p>如果你想要启动Gparted：</p><pre><code>menuentry &quot;GParted Live amd64&quot; { 
set isofile=&quot;/boot/gparted-live-0.18.0-2-amd64.iso&quot; 
loopback loop (hd0,1)$isofile 
loopback loop $isofile 
linux (loop)/live/vmlinuz boot=live config union=aufs noswap noprompt ip=frommedia toram=filesystem.squashfs findiso=\${isofile} 
initrd (loop)/live/initrd.img 
}
</code></pre><p>或者甚至是Fedora：</p><pre><code>menuentry &quot;Fedora 20 Live Desktop x86_64&quot; { 
set isofile=&quot;/boot/Fedora-Live-Desktop-x86_64-20-1.iso&quot; 
loopback loop (hd0,1)$isofile 
loopback loop $isofile 
linux (loop)/isolinux/vmlinuz0 root=live:CDLABEL=Fedora-Live-Desktop-x86_64-20-1 rootfstype=auto ro rd.live.image quiet rhgb rd.luks=0 rd.md=0 rd.dm=0 iso-scan/filename=\${isofile} 
initrd (loop)/isolinux/initrd0.img 
}
</code></pre><p>注意，参数可根据发行版进行修改。幸运的是，有许多地方你可以查阅到。我喜欢这个发行版，但是还有很多其它的发行版你可以启动。同时，请注意你放置ISO文件的地方。如果你的家目录被加密或者无法被访问到，你可能更喜欢将这些文件放到像例子中的启动分区。但是，请首先确保启动分区有足够的空间。</p><p>最后，不要忘了保存40_custom文件并使用以下命令来更新grub：</p><pre><code># sudo update-grub 
</code></pre><p>以便在下次启动时看到修改。</p><p><img src="https://farm8.staticflickr.com/7480/15795905012_47968033f7_z.jpg" alt=""></p><h3 id="接下来做什么" tabindex="-1">接下来做什么？ <a class="header-anchor" href="#接下来做什么" aria-label="Permalink to “接下来做什么？”">​</a></h3>`,27)),e("p",null,[o[1]||(o[1]=t("想要更多东西？好吧，那就修改下参数来玩玩。你可以启动一个ISO文件，并让它持续做一些事情。例如，如果你是个彻头彻尾的妄想症患者，想要有个可以快速清除硬盘的选项，那么可以使用",-1)),n(i,{href:"http://www.dban.org/"},{default:r(()=>[...o[0]||(o[0]=[t("DBAN",-1)])]),_:1}),o[2]||(o[2]=t("来进行一些设置。现在，真的要当心啊，因为此设置会清除你的硬盘，而且在启动时也没有恢复选项：",-1))]),o[20]||(o[20]=e("pre",null,[e("code",null,`menuentry "Darik's Boot and Nuke" { 
set isofile="/boot/dban.iso" 
loopback loop (hd0,1)$isofile 
linux (loop)/dban.bzi nuke="dwipe" silent 
}
`)],-1)),o[21]||(o[21]=e("p",null,"另外一个选择",-1)),o[22]||(o[22]=e("pre",null,[e("code",null,`menuentry "Darik's Boot and Nuke" {
set isofile="/boot/dban.iso"
loopback loop (hd0,1)$isofile
linux (loop)/dban.bzi
}
`)],-1)),o[23]||(o[23]=e("p",null,[t("可以显示DBAN选项，让你选择清除驱动器。"),e("strong",null,"当心，因为它仍然十分危险"),t("。")],-1)),e("p",null,[o[4]||(o[4]=t("小结一下，对于ISO文件和Grub有很多事情可做：从快速live会话到一键毁灭，都可以满足你。之后，你也可以试试启动一些针对隐私方面的发行版，如",-1)),n(i,{href:"https://tails.boum.org/"},{default:r(()=>[...o[3]||(o[3]=[t("Tails",-1)])]),_:1}),o[5]||(o[5]=t("。",-1))]),o[24]||(o[24]=e("p",null,"你认为从Grub启动一个ISO这个主意怎样？这是不是你想要做的呢？为什么呢？请在下面留言。",-1)),o[25]||(o[25]=e("hr",null,null,-1)),e("p",null,[o[7]||(o[7]=t("via: ",-1)),n(i,{href:"http://xmodulo.com/boot-iso-image-from-grub.html"},{default:r(()=>[...o[6]||(o[6]=[t("http://xmodulo.com/boot-iso-image-from-grub.html",-1)])]),_:1})]),e("p",null,[o[11]||(o[11]=t("作者：",-1)),n(i,{href:"http://xmodulo.com/author/adrien"},{default:r(()=>[...o[8]||(o[8]=[t("Adrien Brochard",-1)])]),_:1}),o[12]||(o[12]=t(" 译者：",-1)),n(i,{href:"https://github.com/GOLinux"},{default:r(()=>[...o[9]||(o[9]=[t("GOLinux",-1)])]),_:1}),o[13]||(o[13]=t(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:r(()=>[...o[10]||(o[10]=[t("wxy",-1)])]),_:1})]),e("p",null,[o[16]||(o[16]=t("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[14]||(o[14]=[t("LCTT",-1)])]),_:1}),o[17]||(o[17]=t(" 原创翻译，",-1)),n(i,{href:"http://linux.cn/"},{default:r(()=>[...o[15]||(o[15]=[t("Linux中国",-1)])]),_:1}),o[18]||(o[18]=t(" 荣誉推出",-1))])])}const O=l(d,[["render",m]]);export{T as __pageData,O as default};
