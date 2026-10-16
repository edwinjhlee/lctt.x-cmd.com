import{_ as i,a0 as b,w as l,s,ao as a,I as e,a1 as o,A as r,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境 | LCTT x X-CMD","titleTemplate":false,"description":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20141108 Adding Ubuntu 14.10, Ubuntu 14.04 and Debian 7 to PXE Network Boot Environment Setup on RHEL or CentOS 7","title":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境","tag":"201502","desc":""},"relativePath":"201502/20141108 Adding Ubuntu 14.10, Ubuntu 14.04 and Debian 7 to PXE Network Boot Environment Setup on RHEL or CentOS 7.md","filePath":"[post].md"}'),p={name:"201502/20141108 Adding Ubuntu 14.10, Ubuntu 14.04 and Debian 7 to PXE Network Boot Environment Setup on RHEL or CentOS 7.md"};function d(g,t,m,U,P,w){const u=b("Link");return l(),s("div",null,[t[38]||(t[38]=a('<h1 id="添加ubuntu-14-10-ubuntu-14-04和debian-7到rhel-centos-7的pxe網絡啓動環境" tabindex="-1">添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境 <a class="header-anchor" href="#添加ubuntu-14-10-ubuntu-14-04和debian-7到rhel-centos-7的pxe網絡啓動環境" aria-label="Permalink to “添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE網絡啓動環境”">​</a></h1><p>本教程將指引你添加<strong>Ubuntu 14.10 Server, Ubuntu 14.04 Server</strong>和<strong>Debian 7 Wheezy</strong>發行版到<strong>RHEL/CentOS 7</strong>的PXE網絡啓動環境中。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Add-Ubuntu-and-Debian-to-PXE.png" alt="Add Ubuntu and Debian to PXE Network"></p><p><em>添加Ubuntu和Debian到PXE網絡</em></p><p>雖然對於本教程，我只會演示怎樣來添加<strong>64位</strong>網絡安裝鏡像，但對於Ubuntu或者Debian的<strong>32位</strong>系統，或者其它架構的鏡像，操作步驟也基本相同。同時，就我而言，我會解釋添加Ubuntu 32位源的方法，但不會演示配置。</p><p>從PXE服務器安裝 <strong>Ubuntu</strong>或者<strong>Debian</strong>要求你的客户機必須激活網絡連接，最好是使用<strong>DHCP</strong>通過<strong>NAT</strong>來進行動態分配地址。以便安裝器拉取所需的包並完成安裝過程。</p><h4 id="前置閲讀" tabindex="-1">前置閲讀 <a class="header-anchor" href="#前置閲讀" aria-label="Permalink to “前置閲讀”">​</a></h4>',7)),e("ul",null,[e("li",null,[o(u,{href:"http://linux.cn/article-4902-1.html"},{default:r(()=>[...t[0]||(t[0]=[n("在RHEL/CentOS 7中為多種Linux發行版安裝PXE網絡啓動服務器",-1)])]),_:1})])]),t[39]||(t[39]=e("h2",{id:"步驟-1-添加ubuntu-14-10和ubuntu-14-04服務器到pxe菜單",tabindex:"-1"},[n("步驟 1： 添加Ubuntu 14.10和Ubuntu 14.04服務器到PXE菜單 "),e("a",{class:"header-anchor",href:"#步驟-1-添加ubuntu-14-10和ubuntu-14-04服務器到pxe菜單","aria-label":"Permalink to “步驟 1： 添加Ubuntu 14.10和Ubuntu 14.04服務器到PXE菜單”"},"​")],-1)),t[40]||(t[40]=e("p",null,[e("strong",null,"1."),n(" 要將"),e("strong",null,"Ubuntu 14.10"),n("和"),e("strong",null,"Ubuntu 14.04"),n("添加網絡安裝源到PXE菜單可以通過兩種方式實現：其一是通過下載Ubuntu CD ISO鏡像並掛載到PXE服務器機器上，以便可以讀取Ubuntu網絡啓動文件，其二是通過直接下載Ubuntu網絡啓動歸檔包並將其解壓縮到系統中。下面，我將進一步討論這兩種方法：")],-1)),t[41]||(t[41]=e("h3",{id:"使用ubuntu-14-10和ubuntu-14-04-cd-iso鏡像",tabindex:"-1"},[n("使用Ubuntu 14.10和Ubuntu 14.04 CD ISO鏡像 "),e("a",{class:"header-anchor",href:"#使用ubuntu-14-10和ubuntu-14-04-cd-iso鏡像","aria-label":"Permalink to “使用Ubuntu 14.10和Ubuntu 14.04 CD ISO鏡像”"},"​")],-1)),e("p",null,[t[3]||(t[3]=n("為了能使用此方法，你的PXE服務器需要有一台可工作的CD/DVD驅動器（LCTT 譯註：也可以不用，參考下面內容）。在一台專用的計算機上，轉到",-1)),o(u,{href:"http://releases.ubuntu.com/14.10/"},{default:r(()=>[...t[1]||(t[1]=[n("Ubuntu 14.10下載",-1)])]),_:1}),t[4]||(t[4]=n("和",-1)),o(u,{href:"http://releases.ubuntu.com/14.04/"},{default:r(()=>[...t[2]||(t[2]=[n("Ubuntu 14.04 下載",-1)])]),_:1}),t[5]||(t[5]=n("頁，獲取64位",-1)),t[6]||(t[6]=e("strong",null,"服務器安裝鏡像",-1)),t[7]||(t[7]=n("，將它燒錄到CD，並將CD鏡像放到PXE服務器DVD/CD驅動器，然後使用以下命令掛載到系統。",-1))]),t[42]||(t[42]=a(`<pre><code># mount /dev/cdrom  /mnt
</code></pre><p>如果你的PXE服務器沒有CD/DVD驅動器，你可以使用<strong>wget</strong>命令下載<strong>Ubuntu 14.10</strong> 和<strong>Ubuntu 14.04</strong>的ISO鏡像到本地，然後通過下面的命令（下載並掛載CD）掛載到服務器上上述相同位置。</p><h4 id="在ubuntu-14-10上" tabindex="-1">在Ubuntu 14.10上 <a class="header-anchor" href="#在ubuntu-14-10上" aria-label="Permalink to “在Ubuntu 14.10上”">​</a></h4><pre><code>------------------ 32位 ------------------

# wget http://releases.ubuntu.com/14.10/ubuntu-14.10-server-i386.iso
# mount -o loop /path/to/ubuntu-14.10-server-i386.iso /mnt
</code></pre><hr><pre><code>------------------ 64位 ------------------

# wget http://releases.ubuntu.com/14.10/ubuntu-14.10-server-amd64.iso
# mount -o loop /path/to/ubuntu-14.10-server-amd64.iso /mnt
</code></pre><h4 id="在ubuntu-14-04上" tabindex="-1">在Ubuntu 14.04上 <a class="header-anchor" href="#在ubuntu-14-04上" aria-label="Permalink to “在Ubuntu 14.04上”">​</a></h4><pre><code>------------------ 32位 ------------------

# wget http://releases.ubuntu.com/14.04/ubuntu-14.04.1-server-i386.iso
# mount -o loop /path/to/ubuntu-14.04.1-server-i386.iso /mnt
</code></pre><hr><pre><code>------------------ 64位 ------------------

# wget http://releases.ubuntu.com/14.04/ubuntu-14.04.1-server-amd64.iso
# mount -o loop /path/to/ubuntu-14.04.1-server-amd64.iso /mnt
</code></pre><h3 id="使用ubuntu-14-10和ubuntu-14-04網絡啓動鏡像" tabindex="-1">使用Ubuntu 14.10和Ubuntu 14.04網絡啓動鏡像 <a class="header-anchor" href="#使用ubuntu-14-10和ubuntu-14-04網絡啓動鏡像" aria-label="Permalink to “使用Ubuntu 14.10和Ubuntu 14.04網絡啓動鏡像”">​</a></h3><p>對於該方法，使用以下命令下載Ubuntu網絡啓動鏡像到PXE服務器。</p><h4 id="在ubuntu-14-04上-1" tabindex="-1">在Ubuntu 14.04上 <a class="header-anchor" href="#在ubuntu-14-04上-1" aria-label="Permalink to “在Ubuntu 14.04上”">​</a></h4><pre><code>------------------ 32位 ------------------

# cd
# wget http://archive.ubuntu.com/ubuntu/dists/utopic/main/installer-i386/current/images/netboot/netboot.tar.gz
</code></pre><hr><pre><code>------------------ 64位 ------------------

# cd
# http://archive.ubuntu.com/ubuntu/dists/utopic/main/installer-amd64/current/images/netboot/netboot.tar.gz
</code></pre><h4 id="在ubuntu-14-04上-2" tabindex="-1">在Ubuntu 14.04上 <a class="header-anchor" href="#在ubuntu-14-04上-2" aria-label="Permalink to “在Ubuntu 14.04上”">​</a></h4><pre><code>------------------ 32位 ------------------

# cd
# wget http://archive.ubuntu.com/ubuntu/dists/trusty-updates/main/installer-i386/current/images/netboot/netboot.tar.gz
</code></pre><hr><pre><code>------------------ 64位 ------------------

# cd
# wget http://archive.ubuntu.com/ubuntu/dists/trusty-updates/main/installer-amd64/current/images/netboot/netboot.tar.gz
</code></pre><p>對於其它處理器架構，請訪問下面的Ubuntu 14.10和Ubuntu 14.04網絡啓動官方頁面，選擇你的架構類型並下載所需文件。</p>`,21)),e("ul",null,[e("li",null,[o(u,{href:"http://cdimage.ubuntu.com/netboot/14.10/"},{default:r(()=>[...t[8]||(t[8]=[n("http://cdimage.ubuntu.com/netboot/14.10/",-1)])]),_:1})]),e("li",null,[o(u,{href:"http://cdimage.ubuntu.com/netboot/14.04/"},{default:r(()=>[...t[9]||(t[9]=[n("http://cdimage.ubuntu.com/netboot/14.04/",-1)])]),_:1})])]),t[43]||(t[43]=a(`<p><strong>2.</strong> 在下載完<strong>ISO鏡像</strong>或<strong>網絡啓動安裝器</strong>歸檔包後，通過執行以下命令拷貝整個<strong>ubuntu-installer</strong>文件夾到PXE tftp服務器位置。</p><p><strong>A).</strong> 對於兩種CD ISO鏡像（<strong>32位</strong>或<strong>64位</strong>），在掛載特定架構的CD到PXE服務器<strong>/mnt</strong>系統路徑後，請使用以下命令。</p><pre><code># cp -fr /mnt/install/netboot/ubuntu-installer/ /var/lib/tftpboot/
</code></pre><p><strong>B).</strong> 對於網絡啓動歸檔，根據特定的Ubuntu架構，請運行以下命令。</p><pre><code># cd
# tar xfz netboot.tar.gz
# cp -rf ubuntu-installer/ /var/lib/tftpboot/
</code></pre><p>如果你想要在PXE服務器上同時使用兩種Ubuntu服務器架構，先請下載，然後根據不同的情況掛載或解壓縮32位架構，然後拷貝<strong>ubuntu-installer</strong>目錄到<strong>/var/lib/tftpboot</strong>，然後卸載CD或刪除網絡啓動歸檔以及解壓縮的文件和文件夾。對於64位架構，請重複上述步驟，以便讓最終的<strong>tftp</strong>路徑形成以下結構。</p><pre><code>/var/lib/tftpboot/ubuntu-installer/amd64
/var/lib/tftpboot/ubuntu-installer/i386
</code></pre><p><strong>3.</strong> 在接下來的步驟，通過執行以下命令添加<strong>Ubuntu 14.10</strong>和<strong>Ubuntu 14.04</strong>菜單標籤到<strong>PXE服務器</strong>默認配置文件中。</p><p><strong>重要</strong>：我不可能同時演示兩個Ubuntu版本的操作，出於演示的目的，我添加了<strong>Ubuntu 14.04</strong>菜單標籤到PXE服務器，下述同樣的操作也可應用到Ubuntu 14.10，只需對版本號稍作修改，僅僅只要根據你的Ubuntu版本修改版本號和到OS架構的路徑。</p><p>在你最喜愛的文本編輯器的幫助下，打開PXE默認配置文件，而我偏好nano編輯器。</p><pre><code># nano /var/lib/tftpboot/pxelinux.cfg/default
</code></pre><p>接下來，添加以下配置到PXE菜單。</p><h4 id="對於ubuntu-14-04-32位" tabindex="-1">對於Ubuntu 14.04 32位 <a class="header-anchor" href="#對於ubuntu-14-04-32位" aria-label="Permalink to “對於Ubuntu 14.04 32位”">​</a></h4><pre><code>label 1
menu label ^1) Install Ubuntu 14.04 x32
        kernel ubuntu-installer/i386/linux
        append vga=788 initrd=ubuntu-installer/i386/initrd.gz -- quiet

label 2
menu label ^2) Ubuntu 14.04 Rescue Mode x32
        kernel ubuntu-installer/i386/linux
        append vga=788 initrd=ubuntu-installer/i386/initrd.gz rescue/enable=true -- quiet
</code></pre><h4 id="對於ubuntu-14-04-64位" tabindex="-1">對於Ubuntu 14.04 64位 <a class="header-anchor" href="#對於ubuntu-14-04-64位" aria-label="Permalink to “對於Ubuntu 14.04 64位”">​</a></h4><pre><code>label 5
menu label ^5) Install Ubuntu 14.04 x64
        kernel ubuntu-installer/amd64/linux
        append vga=788 initrd=ubuntu-installer/amd64/initrd.gz -- quiet

label 5
menu label ^6) Ubuntu 14.04 Rescue Mode
        kernel ubuntu-installer/amd64/linux
        append vga=788 initrd=ubuntu-installer/amd64/initrd.gz rescue/enable=true -- quiet
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Add-Ubuntu-to-PXE-Boot.jpg" alt="Add Ubuntu to PXE Boot"> 添加Ubuntu到PXE啓動</p><p><strong>注</strong>：如果你想要包含其它Ubuntu架構，請遵循以上相同的操作，並相應替換PXE默認菜單配置文件中的標籤號和<strong>ubuntu-installer/$architecture_name/</strong>目錄。</p><p><strong>4.</strong> 在配置完PXE菜單配置文件後，根據採用的方法清除源文件，並繼續進行客户端PXE安裝以測試配置是否正確。</p><pre><code>---------------------- 對於CD/DVD方法 ----------------------

# umount /mnt 
</code></pre><hr><pre><code>---------------------- 對於網絡啓動方法 ----------------------

# cd &amp;&amp; rm -rf ubuntu-installer/netboot.tar.gz pxelinux.* version.info  
</code></pre><p>下面是<strong>Ubuntu 14.04</strong>PXE客户端安裝測試的截圖。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Ubuntu-from-PXE-Menu.jpg" alt="Select Ubuntu from PXE Menu"></p><p><em>從PXE菜單選擇Ubuntu</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Ubuntu-Installation-Language.jpg" alt="Choose Ubuntu Installation Language"></p><p><em>選擇Ubuntu安裝語言</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Ubuntu-Rescue-Mode.jpg" alt="Choose Ubuntu Rescue Mode"></p><p><em>選擇Ubuntu救援模式</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Ubuntu-Rescue-Mode-Shell.jpg" alt="Ubuntu Rescue Mode Shell"></p><p><em>Ubuntu救援模式Shell</em></p><h2 id="步驟-2-添加debian-7-wheezy到pxe菜單" tabindex="-1">步驟 2： 添加Debian 7 Wheezy到PXE菜單 <a class="header-anchor" href="#步驟-2-添加debian-7-wheezy到pxe菜單" aria-label="Permalink to “步驟 2： 添加Debian 7 Wheezy到PXE菜單”">​</a></h2><p><strong>5.</strong> 添加<strong>Debian 7</strong>到PXE服務器，需要上述Ubuntu服務器版本相同的步驟。唯一不同點在於網絡啓動歸檔鏡像下載鏈接和源目錄的名稱，現在改為<strong>debian-installer</strong>。</p>`,33)),e("p",null,[t[11]||(t[11]=n("要下載",-1)),t[12]||(t[12]=e("strong",null,"Debian Wheezy",-1)),t[13]||(t[13]=n("網絡啓動歸檔，請轉到",-1)),o(u,{href:"https://www.debian.org/distrib/netinst"},{default:r(()=>[...t[10]||(t[10]=[n("Debian網絡安裝下載",-1)])]),_:1}),t[14]||(t[14]=n("頁，從",-1)),t[15]||(t[15]=e("strong",null,"網絡啓動",-1)),t[16]||(t[16]=n("菜單選擇你想要的系統架構，然後點擊",-1)),t[17]||(t[17]=e("strong",null,"目錄",-1)),t[18]||(t[18]=n("列表中的",-1)),t[19]||(t[19]=e("strong",null,"網絡啓動",-1)),t[20]||(t[20]=n("鏈接，並從",-1)),t[21]||(t[21]=e("strong",null,"文件名",-1)),t[22]||(t[22]=n("列表中下載",-1)),t[23]||(t[23]=e("strong",null,"netboot.tar.gz",-1)),t[24]||(t[24]=n("歸檔包。",-1))]),t[44]||(t[44]=a(`<p>因為Debian為眾多系統架構如Armel，ia64，Mips，PowerPC，Sparc等等提供了網絡安裝源，所以在本指南中，我將只討論<strong>64位</strong>架構。因為其它架構的配置過程和當前的幾乎一樣，唯一不同的是<strong>debian-installer/$directory_architecture name</strong>。</p><p>所以，要進一步深入，以root帳號登錄到你的<strong>PXE服務器</strong>，並通過以下命令抓取Debian 7 64位網絡啓動歸檔包。</p><pre><code># wget  http://ftp.nl.debian.org/debian/dists/wheezy/main/installer-amd64/current/images/netboot/netboot.tar.gz
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Download-Debain-7-Netboot.jpg" alt="Download Debain 7 Netboot"></p><p><em>下載Debian 7網絡啓動包</em></p><p><strong>6.</strong> 在<strong>wget</strong>下載完成<strong>netboot.tar.gz</strong>文件後，請將其解壓縮並運行以下命令拷貝<strong>debian-installer</strong>目錄到tftp服務器默認路徑。</p><pre><code># tar xfz netboot.tar.gz
# cp -rf debian-installer/ /var/lib/tftpboot/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Extract-Debain-7-Netboot.jpg" alt="Extract Debain 7 Netboot"></p><p><em>解壓縮Debian 7網絡啓動包</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Copy-Debain-7-Netboot-to-FTP.jpg" alt="Copy Debain 7 Netboot to FTP"></p><p><em>拷貝Debian 7網絡啓動文件到FTP</em></p><p><strong>7.</strong> 要添加<strong>Debian Wheezy</strong>標籤到<strong>PXE菜單</strong>，請用你最喜愛的文本編輯器打開PXE服務器默認配置文件並添加以下標籤。</p><pre><code># nano /var/lib/tftpboot/pxelinux.cfg/default
</code></pre><p>Debian Wheezy 64位的PXE標籤菜單。</p><pre><code>label 7
menu label ^7) Install Debian 7 x64
        kernel debian-installer/amd64/linux
        append vga=788 initrd=debian-installer/amd64/initrd.gz -- quiet

label 8
menu label ^8) Install Debian 7 x64 Automated
       kernel debian-installer/amd64/linux
       append auto=true priority=critical vga=788 initrd=debian-installer/amd64/initrd.gz -- quiet
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Add-Debian-to-PXE-Boot.jpg" alt="Add Debian to PXE Boot"></p><p><em>添加Debian到PXE啓動</em></p><p><strong>注</strong>：如果你想要添加其它Debian架構，請重複上述步驟，並相應替換PXE默認菜單配置文件中的標籤號和<strong>debian-installer/$architecture_name/</strong>目錄。</p><p><strong>8.</strong> 在進行客户端測試配置之前，請執行以下命令來清除Debian源文件。</p><pre><code># cd &amp;&amp; rm -rf debian-installer/  netboot.tar.gz  pxelinux.*  version.info 
</code></pre><p><strong>9.</strong> 然後通過網絡啓動一台客户機，選擇從PXE菜單安裝Debian，並像正常安裝一樣進一步下去。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Install-Debian-from-PXE.jpg" alt="Select Install Debian from PXE"></p><p><em>選擇從PXE安裝Debian</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Debian-Install-Language.jpg" alt="Select Debian Install Language"></p><p><em>選擇Debian安裝語言</em></p><p>以上是要求添加並從RHEL/CentOS 7 PXE服務器安裝<strong>Ubuntu</strong>或<strong>Debian</strong>到客户機上的全部步驟。在我的下一篇文章中，我將討論一種更為複雜的方法，如何使用RHEL/CentOS 7 PXE網絡啓動服務器來安裝<strong>Windows 7</strong>到客户機。</p><hr>`,27)),e("p",null,[t[26]||(t[26]=n("via: ",-1)),o(u,{href:"http://www.tecmint.com/add-ubuntu-to-pxe-network-boot/"},{default:r(()=>[...t[25]||(t[25]=[n("http://www.tecmint.com/add-ubuntu-to-pxe-network-boot/",-1)])]),_:1})]),e("p",null,[t[30]||(t[30]=n("作者：",-1)),o(u,{href:"http://www.tecmint.com/author/cezarmatei/"},{default:r(()=>[...t[27]||(t[27]=[n("Matei Cezar",-1)])]),_:1}),t[31]||(t[31]=n(" 譯者：",-1)),o(u,{href:"https://github.com/GOLinux"},{default:r(()=>[...t[28]||(t[28]=[n("GOLinux",-1)])]),_:1}),t[32]||(t[32]=n(" 校對：",-1)),o(u,{href:"https://github.com/tinyeyeser"},{default:r(()=>[...t[29]||(t[29]=[n("Mr小眼兒",-1)])]),_:1})]),e("p",null,[t[35]||(t[35]=n("本文由 ",-1)),o(u,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[33]||(t[33]=[n("LCTT",-1)])]),_:1}),t[36]||(t[36]=n(" 原創翻譯，",-1)),o(u,{href:"http://linux.cn/"},{default:r(()=>[...t[34]||(t[34]=[n("Linux中國",-1)])]),_:1}),t[37]||(t[37]=n(" 榮譽推出",-1))])])}const X=i(p,[["render",d]]);export{f as __pageData,X as default};
