import{_ as l,a0 as p,w as s,s as u,ao as a,I as e,x as t,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"用Grub啓動ISO鏡像 | LCTT x X-CMD","titleTemplate":false,"description":"用Grub啓動ISO鏡像 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用Grub啓動ISO鏡像 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用Grub啓動ISO鏡像 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141118 How to boot on an ISO image from Grub","title":"用Grub啓動ISO鏡像","tag":"201501","desc":""},"relativePath":"201501/20141118 How to boot on an ISO image from Grub.md","filePath":"[post].md"}'),d={name:"201501/20141118 How to boot on an ISO image from Grub.md"};function m(f,o,b,g,x,k){const i=p("Link");return s(),u("div",null,[o[19]||(o[19]=a(`<h1 id="用grub啓動iso鏡像" tabindex="-1">用Grub啓動ISO鏡像 <a class="header-anchor" href="#用grub啓動iso鏡像" aria-label="Permalink to “用Grub啓動ISO鏡像”">​</a></h1><p>如果你想要使用多個Linux發行版，你沒有那麼多的選擇。你要麼安裝到你的物理機或虛擬機中，要麼以live模式從ISO文件啓動。第二個選擇，對硬盤空間需求較小，只是有點麻煩，因為你需要將ISO文件寫入到U盤或CD/DVD中來啓動。不過，這裏還有另外一個可選的折中方案：把ISO鏡像放在硬盤中，然後以live模式來啓動。該方案比完全安裝更省空間，而且功能也完備，這對於緩慢的虛擬機而言是個不錯的替代方案。下面我將介紹怎樣使用流行的Grub啓動加載器來實現該方案。</p><p>很明顯，你將需要使用到Grub，這是幾乎所有現代Linux發行版都使用的。你也需要你所想用的Linux版本的ISO文件，將它下載到本地磁盤。最後，你需要知道啓動分區在哪裏，並怎樣在Grub中描述。對於此，請使用以下命令：</p><pre><code># fdisk -l 
</code></pre><p>帶有‘*’的就是啓動分區。對於我，就是/dev/sda1，用Grub語言描述就是（hd0,1)。</p><p><img src="https://farm6.staticflickr.com/5606/15174383814_a92a4eda3e_z.jpg" alt=""></p><p>作為參考，sda2就是(hd0,2)，sdb1就是(hd1,1)，以此類推。（你明白了吧。）</p><h3 id="我們需要編輯什麼" tabindex="-1">我們需要編輯什麼？ <a class="header-anchor" href="#我們需要編輯什麼" aria-label="Permalink to “我們需要編輯什麼？”">​</a></h3><p>首先，打開/etc/default/grub並檢查以下行：</p><pre><code>#GRUB_HIDDEN_TIMEOUT=0
</code></pre><p>需要在此行前添加‘#’進行註釋。</p><p>保存，然後打開/etc/grub.d/40_custom。</p><p>在該文件中，你將添加啓動到ISO的參數。結構如下：</p><pre><code>menuentry &quot;[Entry&#39;s title in the grub screen]&quot; { 
set isofile=&quot;[path to ISO file]&quot; 
loopback loop [boot partition in Grub language]$isofile 
[some specific] arguments
}
</code></pre><p>例如，如果你想要從ISO文件啓動Ubuntu，那麼你就是想要添加如下行到40_custom文件：</p><pre><code>menuentry &quot;Ubuntu 14.04 (LTS) Live Desktop amd64&quot; { 
set isofile=&quot;/boot/ubuntu-14.04-desktop-amd64.iso&quot; 
loopback loop (hd0,1)$isofile 
linux (loop)/casper/vmlinuz.efi boot=casper iso-scan/filename=\${isofile} quiet splash 
initrd (loop)/casper/initrd.lz 
}
</code></pre><p><img src="https://farm8.staticflickr.com/7480/15608510369_ff50b28f5e_z.jpg" alt=""></p><p>如果你想要啓動Gparted：</p><pre><code>menuentry &quot;GParted Live amd64&quot; { 
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
</code></pre><p>注意，參數可根據發行版進行修改。幸運的是，有許多地方你可以查閲到。我喜歡這個發行版，但是還有很多其它的發行版你可以啓動。同時，請注意你放置ISO文件的地方。如果你的家目錄被加密或者無法被訪問到，你可能更喜歡將這些文件放到像例子中的啓動分區。但是，請首先確保啓動分區有足夠的空間。</p><p>最後，不要忘了保存40_custom文件並使用以下命令來更新grub：</p><pre><code># sudo update-grub 
</code></pre><p>以便在下次啓動時看到修改。</p><p><img src="https://farm8.staticflickr.com/7480/15795905012_47968033f7_z.jpg" alt=""></p><h3 id="接下來做什麼" tabindex="-1">接下來做什麼？ <a class="header-anchor" href="#接下來做什麼" aria-label="Permalink to “接下來做什麼？”">​</a></h3>`,27)),e("p",null,[o[1]||(o[1]=t("想要更多東西？好吧，那就修改下參數來玩玩。你可以啓動一個ISO文件，並讓它持續做一些事情。例如，如果你是個徹頭徹尾的妄想症患者，想要有個可以快速清除硬盤的選項，那麼可以使用",-1)),n(i,{href:"http://www.dban.org/"},{default:r(()=>[...o[0]||(o[0]=[t("DBAN",-1)])]),_:1}),o[2]||(o[2]=t("來進行一些設置。現在，真的要當心啊，因為此設置會清除你的硬盤，而且在啓動時也沒有恢復選項：",-1))]),o[20]||(o[20]=e("pre",null,[e("code",null,`menuentry "Darik's Boot and Nuke" { 
set isofile="/boot/dban.iso" 
loopback loop (hd0,1)$isofile 
linux (loop)/dban.bzi nuke="dwipe" silent 
}
`)],-1)),o[21]||(o[21]=e("p",null,"另外一個選擇",-1)),o[22]||(o[22]=e("pre",null,[e("code",null,`menuentry "Darik's Boot and Nuke" {
set isofile="/boot/dban.iso"
loopback loop (hd0,1)$isofile
linux (loop)/dban.bzi
}
`)],-1)),o[23]||(o[23]=e("p",null,[t("可以顯示DBAN選項，讓你選擇清除驅動器。"),e("strong",null,"當心，因為它仍然十分危險"),t("。")],-1)),e("p",null,[o[4]||(o[4]=t("小結一下，對於ISO文件和Grub有很多事情可做：從快速live會話到一鍵毀滅，都可以滿足你。之後，你也可以試試啓動一些針對隱私方面的發行版，如",-1)),n(i,{href:"https://tails.boum.org/"},{default:r(()=>[...o[3]||(o[3]=[t("Tails",-1)])]),_:1}),o[5]||(o[5]=t("。",-1))]),o[24]||(o[24]=e("p",null,"你認為從Grub啓動一個ISO這個主意怎樣？這是不是你想要做的呢？為什麼呢？請在下面留言。",-1)),o[25]||(o[25]=e("hr",null,null,-1)),e("p",null,[o[7]||(o[7]=t("via: ",-1)),n(i,{href:"http://xmodulo.com/boot-iso-image-from-grub.html"},{default:r(()=>[...o[6]||(o[6]=[t("http://xmodulo.com/boot-iso-image-from-grub.html",-1)])]),_:1})]),e("p",null,[o[11]||(o[11]=t("作者：",-1)),n(i,{href:"http://xmodulo.com/author/adrien"},{default:r(()=>[...o[8]||(o[8]=[t("Adrien Brochard",-1)])]),_:1}),o[12]||(o[12]=t(" 譯者：",-1)),n(i,{href:"https://github.com/GOLinux"},{default:r(()=>[...o[9]||(o[9]=[t("GOLinux",-1)])]),_:1}),o[13]||(o[13]=t(" 校對：",-1)),n(i,{href:"https://github.com/wxy"},{default:r(()=>[...o[10]||(o[10]=[t("wxy",-1)])]),_:1})]),e("p",null,[o[16]||(o[16]=t("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[14]||(o[14]=[t("LCTT",-1)])]),_:1}),o[17]||(o[17]=t(" 原創翻譯，",-1)),n(i,{href:"http://linux.cn/"},{default:r(()=>[...o[15]||(o[15]=[t("Linux中國",-1)])]),_:1}),o[18]||(o[18]=t(" 榮譽推出",-1))])])}const O=l(d,[["render",m]]);export{T as __pageData,O as default};
