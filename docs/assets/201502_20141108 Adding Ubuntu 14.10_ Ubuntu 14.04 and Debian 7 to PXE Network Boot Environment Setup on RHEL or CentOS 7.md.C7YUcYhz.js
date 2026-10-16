import{_ as i,a0 as b,w as l,s,ao as a,I as e,a1 as o,A as r,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境 | LCTT x X-CMD","titleTemplate":false,"description":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20141108 Adding Ubuntu 14.10, Ubuntu 14.04 and Debian 7 to PXE Network Boot Environment Setup on RHEL or CentOS 7","title":"添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境","tag":"201502","desc":""},"relativePath":"201502/20141108 Adding Ubuntu 14.10, Ubuntu 14.04 and Debian 7 to PXE Network Boot Environment Setup on RHEL or CentOS 7.md","filePath":"[post].md"}'),p={name:"201502/20141108 Adding Ubuntu 14.10, Ubuntu 14.04 and Debian 7 to PXE Network Boot Environment Setup on RHEL or CentOS 7.md"};function d(g,t,m,U,P,w){const u=b("Link");return l(),s("div",null,[t[38]||(t[38]=a('<h1 id="添加ubuntu-14-10-ubuntu-14-04和debian-7到rhel-centos-7的pxe网络启动环境" tabindex="-1">添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境 <a class="header-anchor" href="#添加ubuntu-14-10-ubuntu-14-04和debian-7到rhel-centos-7的pxe网络启动环境" aria-label="Permalink to “添加Ubuntu 14.10，Ubuntu 14.04和Debian 7到RHEL/CentOS 7的PXE网络启动环境”">​</a></h1><p>本教程将指引你添加<strong>Ubuntu 14.10 Server, Ubuntu 14.04 Server</strong>和<strong>Debian 7 Wheezy</strong>发行版到<strong>RHEL/CentOS 7</strong>的PXE网络启动环境中。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Add-Ubuntu-and-Debian-to-PXE.png" alt="Add Ubuntu and Debian to PXE Network"></p><p><em>添加Ubuntu和Debian到PXE网络</em></p><p>虽然对于本教程，我只会演示怎样来添加<strong>64位</strong>网络安装镜像，但对于Ubuntu或者Debian的<strong>32位</strong>系统，或者其它架构的镜像，操作步骤也基本相同。同时，就我而言，我会解释添加Ubuntu 32位源的方法，但不会演示配置。</p><p>从PXE服务器安装 <strong>Ubuntu</strong>或者<strong>Debian</strong>要求你的客户机必须激活网络连接，最好是使用<strong>DHCP</strong>通过<strong>NAT</strong>来进行动态分配地址。以便安装器拉取所需的包并完成安装过程。</p><h4 id="前置阅读" tabindex="-1">前置阅读 <a class="header-anchor" href="#前置阅读" aria-label="Permalink to “前置阅读”">​</a></h4>',7)),e("ul",null,[e("li",null,[o(u,{href:"http://linux.cn/article-4902-1.html"},{default:r(()=>[...t[0]||(t[0]=[n("在RHEL/CentOS 7中为多种Linux发行版安装PXE网络启动服务器",-1)])]),_:1})])]),t[39]||(t[39]=e("h2",{id:"步骤-1-添加ubuntu-14-10和ubuntu-14-04服务器到pxe菜单",tabindex:"-1"},[n("步骤 1： 添加Ubuntu 14.10和Ubuntu 14.04服务器到PXE菜单 "),e("a",{class:"header-anchor",href:"#步骤-1-添加ubuntu-14-10和ubuntu-14-04服务器到pxe菜单","aria-label":"Permalink to “步骤 1： 添加Ubuntu 14.10和Ubuntu 14.04服务器到PXE菜单”"},"​")],-1)),t[40]||(t[40]=e("p",null,[e("strong",null,"1."),n(" 要将"),e("strong",null,"Ubuntu 14.10"),n("和"),e("strong",null,"Ubuntu 14.04"),n("添加网络安装源到PXE菜单可以通过两种方式实现：其一是通过下载Ubuntu CD ISO镜像并挂载到PXE服务器机器上，以便可以读取Ubuntu网络启动文件，其二是通过直接下载Ubuntu网络启动归档包并将其解压缩到系统中。下面，我将进一步讨论这两种方法：")],-1)),t[41]||(t[41]=e("h3",{id:"使用ubuntu-14-10和ubuntu-14-04-cd-iso镜像",tabindex:"-1"},[n("使用Ubuntu 14.10和Ubuntu 14.04 CD ISO镜像 "),e("a",{class:"header-anchor",href:"#使用ubuntu-14-10和ubuntu-14-04-cd-iso镜像","aria-label":"Permalink to “使用Ubuntu 14.10和Ubuntu 14.04 CD ISO镜像”"},"​")],-1)),e("p",null,[t[3]||(t[3]=n("为了能使用此方法，你的PXE服务器需要有一台可工作的CD/DVD驱动器（LCTT 译注：也可以不用，参考下面内容）。在一台专用的计算机上，转到",-1)),o(u,{href:"http://releases.ubuntu.com/14.10/"},{default:r(()=>[...t[1]||(t[1]=[n("Ubuntu 14.10下载",-1)])]),_:1}),t[4]||(t[4]=n("和",-1)),o(u,{href:"http://releases.ubuntu.com/14.04/"},{default:r(()=>[...t[2]||(t[2]=[n("Ubuntu 14.04 下载",-1)])]),_:1}),t[5]||(t[5]=n("页，获取64位",-1)),t[6]||(t[6]=e("strong",null,"服务器安装镜像",-1)),t[7]||(t[7]=n("，将它烧录到CD，并将CD镜像放到PXE服务器DVD/CD驱动器，然后使用以下命令挂载到系统。",-1))]),t[42]||(t[42]=a(`<pre><code># mount /dev/cdrom  /mnt
</code></pre><p>如果你的PXE服务器没有CD/DVD驱动器，你可以使用<strong>wget</strong>命令下载<strong>Ubuntu 14.10</strong> 和<strong>Ubuntu 14.04</strong>的ISO镜像到本地，然后通过下面的命令（下载并挂载CD）挂载到服务器上上述相同位置。</p><h4 id="在ubuntu-14-10上" tabindex="-1">在Ubuntu 14.10上 <a class="header-anchor" href="#在ubuntu-14-10上" aria-label="Permalink to “在Ubuntu 14.10上”">​</a></h4><pre><code>------------------ 32位 ------------------

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
</code></pre><h3 id="使用ubuntu-14-10和ubuntu-14-04网络启动镜像" tabindex="-1">使用Ubuntu 14.10和Ubuntu 14.04网络启动镜像 <a class="header-anchor" href="#使用ubuntu-14-10和ubuntu-14-04网络启动镜像" aria-label="Permalink to “使用Ubuntu 14.10和Ubuntu 14.04网络启动镜像”">​</a></h3><p>对于该方法，使用以下命令下载Ubuntu网络启动镜像到PXE服务器。</p><h4 id="在ubuntu-14-04上-1" tabindex="-1">在Ubuntu 14.04上 <a class="header-anchor" href="#在ubuntu-14-04上-1" aria-label="Permalink to “在Ubuntu 14.04上”">​</a></h4><pre><code>------------------ 32位 ------------------

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
</code></pre><p>对于其它处理器架构，请访问下面的Ubuntu 14.10和Ubuntu 14.04网络启动官方页面，选择你的架构类型并下载所需文件。</p>`,21)),e("ul",null,[e("li",null,[o(u,{href:"http://cdimage.ubuntu.com/netboot/14.10/"},{default:r(()=>[...t[8]||(t[8]=[n("http://cdimage.ubuntu.com/netboot/14.10/",-1)])]),_:1})]),e("li",null,[o(u,{href:"http://cdimage.ubuntu.com/netboot/14.04/"},{default:r(()=>[...t[9]||(t[9]=[n("http://cdimage.ubuntu.com/netboot/14.04/",-1)])]),_:1})])]),t[43]||(t[43]=a(`<p><strong>2.</strong> 在下载完<strong>ISO镜像</strong>或<strong>网络启动安装器</strong>归档包后，通过执行以下命令拷贝整个<strong>ubuntu-installer</strong>文件夹到PXE tftp服务器位置。</p><p><strong>A).</strong> 对于两种CD ISO镜像（<strong>32位</strong>或<strong>64位</strong>），在挂载特定架构的CD到PXE服务器<strong>/mnt</strong>系统路径后，请使用以下命令。</p><pre><code># cp -fr /mnt/install/netboot/ubuntu-installer/ /var/lib/tftpboot/
</code></pre><p><strong>B).</strong> 对于网络启动归档，根据特定的Ubuntu架构，请运行以下命令。</p><pre><code># cd
# tar xfz netboot.tar.gz
# cp -rf ubuntu-installer/ /var/lib/tftpboot/
</code></pre><p>如果你想要在PXE服务器上同时使用两种Ubuntu服务器架构，先请下载，然后根据不同的情况挂载或解压缩32位架构，然后拷贝<strong>ubuntu-installer</strong>目录到<strong>/var/lib/tftpboot</strong>，然后卸载CD或删除网络启动归档以及解压缩的文件和文件夹。对于64位架构，请重复上述步骤，以便让最终的<strong>tftp</strong>路径形成以下结构。</p><pre><code>/var/lib/tftpboot/ubuntu-installer/amd64
/var/lib/tftpboot/ubuntu-installer/i386
</code></pre><p><strong>3.</strong> 在接下来的步骤，通过执行以下命令添加<strong>Ubuntu 14.10</strong>和<strong>Ubuntu 14.04</strong>菜单标签到<strong>PXE服务器</strong>默认配置文件中。</p><p><strong>重要</strong>：我不可能同时演示两个Ubuntu版本的操作，出于演示的目的，我添加了<strong>Ubuntu 14.04</strong>菜单标签到PXE服务器，下述同样的操作也可应用到Ubuntu 14.10，只需对版本号稍作修改，仅仅只要根据你的Ubuntu版本修改版本号和到OS架构的路径。</p><p>在你最喜爱的文本编辑器的帮助下，打开PXE默认配置文件，而我偏好nano编辑器。</p><pre><code># nano /var/lib/tftpboot/pxelinux.cfg/default
</code></pre><p>接下来，添加以下配置到PXE菜单。</p><h4 id="对于ubuntu-14-04-32位" tabindex="-1">对于Ubuntu 14.04 32位 <a class="header-anchor" href="#对于ubuntu-14-04-32位" aria-label="Permalink to “对于Ubuntu 14.04 32位”">​</a></h4><pre><code>label 1
menu label ^1) Install Ubuntu 14.04 x32
        kernel ubuntu-installer/i386/linux
        append vga=788 initrd=ubuntu-installer/i386/initrd.gz -- quiet

label 2
menu label ^2) Ubuntu 14.04 Rescue Mode x32
        kernel ubuntu-installer/i386/linux
        append vga=788 initrd=ubuntu-installer/i386/initrd.gz rescue/enable=true -- quiet
</code></pre><h4 id="对于ubuntu-14-04-64位" tabindex="-1">对于Ubuntu 14.04 64位 <a class="header-anchor" href="#对于ubuntu-14-04-64位" aria-label="Permalink to “对于Ubuntu 14.04 64位”">​</a></h4><pre><code>label 5
menu label ^5) Install Ubuntu 14.04 x64
        kernel ubuntu-installer/amd64/linux
        append vga=788 initrd=ubuntu-installer/amd64/initrd.gz -- quiet

label 5
menu label ^6) Ubuntu 14.04 Rescue Mode
        kernel ubuntu-installer/amd64/linux
        append vga=788 initrd=ubuntu-installer/amd64/initrd.gz rescue/enable=true -- quiet
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Add-Ubuntu-to-PXE-Boot.jpg" alt="Add Ubuntu to PXE Boot"> 添加Ubuntu到PXE启动</p><p><strong>注</strong>：如果你想要包含其它Ubuntu架构，请遵循以上相同的操作，并相应替换PXE默认菜单配置文件中的标签号和<strong>ubuntu-installer/$architecture_name/</strong>目录。</p><p><strong>4.</strong> 在配置完PXE菜单配置文件后，根据采用的方法清除源文件，并继续进行客户端PXE安装以测试配置是否正确。</p><pre><code>---------------------- 对于CD/DVD方法 ----------------------

# umount /mnt 
</code></pre><hr><pre><code>---------------------- 对于网络启动方法 ----------------------

# cd &amp;&amp; rm -rf ubuntu-installer/netboot.tar.gz pxelinux.* version.info  
</code></pre><p>下面是<strong>Ubuntu 14.04</strong>PXE客户端安装测试的截图。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Ubuntu-from-PXE-Menu.jpg" alt="Select Ubuntu from PXE Menu"></p><p><em>从PXE菜单选择Ubuntu</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Ubuntu-Installation-Language.jpg" alt="Choose Ubuntu Installation Language"></p><p><em>选择Ubuntu安装语言</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Ubuntu-Rescue-Mode.jpg" alt="Choose Ubuntu Rescue Mode"></p><p><em>选择Ubuntu救援模式</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Ubuntu-Rescue-Mode-Shell.jpg" alt="Ubuntu Rescue Mode Shell"></p><p><em>Ubuntu救援模式Shell</em></p><h2 id="步骤-2-添加debian-7-wheezy到pxe菜单" tabindex="-1">步骤 2： 添加Debian 7 Wheezy到PXE菜单 <a class="header-anchor" href="#步骤-2-添加debian-7-wheezy到pxe菜单" aria-label="Permalink to “步骤 2： 添加Debian 7 Wheezy到PXE菜单”">​</a></h2><p><strong>5.</strong> 添加<strong>Debian 7</strong>到PXE服务器，需要上述Ubuntu服务器版本相同的步骤。唯一不同点在于网络启动归档镜像下载链接和源目录的名称，现在改为<strong>debian-installer</strong>。</p>`,33)),e("p",null,[t[11]||(t[11]=n("要下载",-1)),t[12]||(t[12]=e("strong",null,"Debian Wheezy",-1)),t[13]||(t[13]=n("网络启动归档，请转到",-1)),o(u,{href:"https://www.debian.org/distrib/netinst"},{default:r(()=>[...t[10]||(t[10]=[n("Debian网络安装下载",-1)])]),_:1}),t[14]||(t[14]=n("页，从",-1)),t[15]||(t[15]=e("strong",null,"网络启动",-1)),t[16]||(t[16]=n("菜单选择你想要的系统架构，然后点击",-1)),t[17]||(t[17]=e("strong",null,"目录",-1)),t[18]||(t[18]=n("列表中的",-1)),t[19]||(t[19]=e("strong",null,"网络启动",-1)),t[20]||(t[20]=n("链接，并从",-1)),t[21]||(t[21]=e("strong",null,"文件名",-1)),t[22]||(t[22]=n("列表中下载",-1)),t[23]||(t[23]=e("strong",null,"netboot.tar.gz",-1)),t[24]||(t[24]=n("归档包。",-1))]),t[44]||(t[44]=a(`<p>因为Debian为众多系统架构如Armel，ia64，Mips，PowerPC，Sparc等等提供了网络安装源，所以在本指南中，我将只讨论<strong>64位</strong>架构。因为其它架构的配置过程和当前的几乎一样，唯一不同的是<strong>debian-installer/$directory_architecture name</strong>。</p><p>所以，要进一步深入，以root帐号登录到你的<strong>PXE服务器</strong>，并通过以下命令抓取Debian 7 64位网络启动归档包。</p><pre><code># wget  http://ftp.nl.debian.org/debian/dists/wheezy/main/installer-amd64/current/images/netboot/netboot.tar.gz
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Download-Debain-7-Netboot.jpg" alt="Download Debain 7 Netboot"></p><p><em>下载Debian 7网络启动包</em></p><p><strong>6.</strong> 在<strong>wget</strong>下载完成<strong>netboot.tar.gz</strong>文件后，请将其解压缩并运行以下命令拷贝<strong>debian-installer</strong>目录到tftp服务器默认路径。</p><pre><code># tar xfz netboot.tar.gz
# cp -rf debian-installer/ /var/lib/tftpboot/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Extract-Debain-7-Netboot.jpg" alt="Extract Debain 7 Netboot"></p><p><em>解压缩Debian 7网络启动包</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Copy-Debain-7-Netboot-to-FTP.jpg" alt="Copy Debain 7 Netboot to FTP"></p><p><em>拷贝Debian 7网络启动文件到FTP</em></p><p><strong>7.</strong> 要添加<strong>Debian Wheezy</strong>标签到<strong>PXE菜单</strong>，请用你最喜爱的文本编辑器打开PXE服务器默认配置文件并添加以下标签。</p><pre><code># nano /var/lib/tftpboot/pxelinux.cfg/default
</code></pre><p>Debian Wheezy 64位的PXE标签菜单。</p><pre><code>label 7
menu label ^7) Install Debian 7 x64
        kernel debian-installer/amd64/linux
        append vga=788 initrd=debian-installer/amd64/initrd.gz -- quiet

label 8
menu label ^8) Install Debian 7 x64 Automated
       kernel debian-installer/amd64/linux
       append auto=true priority=critical vga=788 initrd=debian-installer/amd64/initrd.gz -- quiet
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Add-Debian-to-PXE-Boot.jpg" alt="Add Debian to PXE Boot"></p><p><em>添加Debian到PXE启动</em></p><p><strong>注</strong>：如果你想要添加其它Debian架构，请重复上述步骤，并相应替换PXE默认菜单配置文件中的标签号和<strong>debian-installer/$architecture_name/</strong>目录。</p><p><strong>8.</strong> 在进行客户端测试配置之前，请执行以下命令来清除Debian源文件。</p><pre><code># cd &amp;&amp; rm -rf debian-installer/  netboot.tar.gz  pxelinux.*  version.info 
</code></pre><p><strong>9.</strong> 然后通过网络启动一台客户机，选择从PXE菜单安装Debian，并像正常安装一样进一步下去。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Install-Debian-from-PXE.jpg" alt="Select Install Debian from PXE"></p><p><em>选择从PXE安装Debian</em></p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Select-Debian-Install-Language.jpg" alt="Select Debian Install Language"></p><p><em>选择Debian安装语言</em></p><p>以上是要求添加并从RHEL/CentOS 7 PXE服务器安装<strong>Ubuntu</strong>或<strong>Debian</strong>到客户机上的全部步骤。在我的下一篇文章中，我将讨论一种更为复杂的方法，如何使用RHEL/CentOS 7 PXE网络启动服务器来安装<strong>Windows 7</strong>到客户机。</p><hr>`,27)),e("p",null,[t[26]||(t[26]=n("via: ",-1)),o(u,{href:"http://www.tecmint.com/add-ubuntu-to-pxe-network-boot/"},{default:r(()=>[...t[25]||(t[25]=[n("http://www.tecmint.com/add-ubuntu-to-pxe-network-boot/",-1)])]),_:1})]),e("p",null,[t[30]||(t[30]=n("作者：",-1)),o(u,{href:"http://www.tecmint.com/author/cezarmatei/"},{default:r(()=>[...t[27]||(t[27]=[n("Matei Cezar",-1)])]),_:1}),t[31]||(t[31]=n(" 译者：",-1)),o(u,{href:"https://github.com/GOLinux"},{default:r(()=>[...t[28]||(t[28]=[n("GOLinux",-1)])]),_:1}),t[32]||(t[32]=n(" 校对：",-1)),o(u,{href:"https://github.com/tinyeyeser"},{default:r(()=>[...t[29]||(t[29]=[n("Mr小眼儿",-1)])]),_:1})]),e("p",null,[t[35]||(t[35]=n("本文由 ",-1)),o(u,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[33]||(t[33]=[n("LCTT",-1)])]),_:1}),t[36]||(t[36]=n(" 原创翻译，",-1)),o(u,{href:"http://linux.cn/"},{default:r(()=>[...t[34]||(t[34]=[n("Linux中国",-1)])]),_:1}),t[37]||(t[37]=n(" 荣誉推出",-1))])])}const X=i(p,[["render",d]]);export{f as __pageData,X as default};
