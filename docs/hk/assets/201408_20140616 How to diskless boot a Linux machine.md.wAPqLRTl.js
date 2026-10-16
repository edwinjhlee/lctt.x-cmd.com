import{_ as a,a0 as p,w as s,s as d,ao as l,I as i,x as t,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何無盤啓動Linux | LCTT x X-CMD","titleTemplate":false,"description":"如何無盤啓動Linux | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何無盤啓動Linux | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何無盤啓動Linux | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140616 How to diskless boot a Linux machine","title":"如何無盤啓動Linux","tag":"201408","desc":""},"relativePath":"201408/20140616 How to diskless boot a Linux machine.md","filePath":"[post].md"}'),u={name:"201408/20140616 How to diskless boot a Linux machine.md"};function c(f,e,h,m,b,x){const o=p("Link");return s(),d("div",null,[e[11]||(e[11]=l(`<h1 id="如何無盤啓動linux" tabindex="-1">如何無盤啓動Linux <a class="header-anchor" href="#如何無盤啓動linux" aria-label="Permalink to “如何無盤啓動Linux”">​</a></h1><p>無盤啓動意味着一台客户端電腦在啓動操作系統時沒有任何的磁盤存儲介質。在這種情形之下，電腦能夠通過網絡從遠程NFS服務器上加載內核和根文件系統。在這過程中可能會用到多種不同的方法來從NFS服務器上加載內核和根文件系統：RARP，BOOTP或是DHCP協議。在這個指導教程中，我會使用BOOTP/DHCP協議，因為它們能夠被大多數的網卡所支持。</p><h3 id="無盤計算機的優勢" tabindex="-1">無盤計算機的優勢 <a class="header-anchor" href="#無盤計算機的優勢" aria-label="Permalink to “無盤計算機的優勢”">​</a></h3><p>想像一下你的辦公室內有30台電腦，每一台都需要使用相同的應用程序。如果你作為管理這些電腦的管理員，你會怎麼做？如果你在每一台電腦上安裝應用程序，那只是在浪費你的時間。另一方面來説，一套無盤系統就能解決你的問題。有了一套無盤系統，你只需在中央NFS服務器上安裝需要的程序，然後通過網絡啓動這30台客户機即可。</p><h3 id="需要什麼" tabindex="-1">需要什麼 <a class="header-anchor" href="#需要什麼" aria-label="Permalink to “需要什麼”">​</a></h3><p>兩台或更多的裝備有支持DHCP協議的網卡的Linux電腦。這些將扮演NFS服務器角色的電腦應當配有硬盤，其它客户機不需要任何的硬盤。服務器和客户機需要連接到同一個本地網絡之內。</p><p>設置一個無盤系統共需要五步。</p><ol><li>安裝所需的包</li><li>配置TFTP服務器</li><li>配置DHCP服務器</li><li>配置NFS服務器</li><li>啓動無盤客户機</li></ol><p>在這個指導教程中，我假設作為啓動服務器的電腦運行的是 Ubuntu。如何你正在使用其它的Linux發行版，原理是一樣的。</p><h3 id="第一步-安裝所需的包" tabindex="-1">第一步：安裝所需的包 <a class="header-anchor" href="#第一步-安裝所需的包" aria-label="Permalink to “第一步：安裝所需的包”">​</a></h3><p>像下面這樣使用 apt-get 命令來安裝所有需要的包。</p><pre><code>$ sudo apt-get install dhcp3-server tftpd-hpa syslinux nfs-kernel-server initramfs-tools
</code></pre><h3 id="第二步-配置tftp服務器" tabindex="-1">第二步：配置TFTP服務器 <a class="header-anchor" href="#第二步-配置tftp服務器" aria-label="Permalink to “第二步：配置TFTP服務器”">​</a></h3><p>TFTP服務器是一個小型FTP服務器，需要用它來在本地網絡中的客户機和服務器之間自動傳輸啓動文件。</p><p>向/etc/default/tftpd-hpa中添加以下行：</p><pre><code>RUN_DAEMON=&quot;yes&quot;
OPTIONS=&quot;-l -s /var/lib/tftpboot/&quot;
</code></pre><p>接着，創建一個啓動文件夾。</p><pre><code>$ sudo mkdir -p /var/lib/tftpboot/pxelinux.cfg
</code></pre><p>複製引導程序鏡像。</p><pre><code>$ sudo cp /usr/lib/syslinux/pxelinux.0 /var/lib/tftpboot
</code></pre><p>像下面這樣創建一個默認啓動配置文件。</p><pre><code>$ sudo vi /tftpboot/pxelinux.cfg/default
</code></pre><hr><pre><code>LABEL Ubuntu
KERNEL vmlinuz
APPEND root=/dev/nfs initrd=initrd.img nfsroot=10.10.101.1:/nfsroot ip=dhcp rw
</code></pre><p>注意：</p><ul><li>&quot;root=/dev/nfs&quot;表示服務器上的網絡文件系統（不需要修改）。</li><li>&quot;initrd=initrd.img&quot;是一個用於系統啓動的啓動腳本。</li><li>&quot;nfsroot=10.10.101.1/nfsroot&quot;指明瞭服務器的IP地址以及NFS共享文件夾的名稱。用你的服務器地址來替換掉IP地址。</li><li>&quot;ip=dhcp&quot;表示客户端電腦使用DHCP尋址方案。</li><li>&quot;rw&quot;表示NFS共享是可讀/可寫的。</li></ul><p>最後，重啓TFTPD服務。</p><pre><code>sudo /etc/init.d/tftpd-hpa restart
</code></pre><h3 id="第三步-配置dhcp服務" tabindex="-1">第三步：配置DHCP服務 <a class="header-anchor" href="#第三步-配置dhcp服務" aria-label="Permalink to “第三步：配置DHCP服務”">​</a></h3><p>你還需要在NFS服務器上配置DHCP服務來允許使用/var/lib/tftpboot/pxelinux.0啓動。假設你在使用10.10.101.0作為子網，你的配置可能看起來像下面這樣子。</p><pre><code>$ sudo vi /etc/dhcp3/dhcpd.conf
</code></pre><hr><pre><code>allow booting;
allow bootp;

subnet 10.10.101.0 netmask 255.255.255.0 {
	range 10.10.101.2 10.10.101.254;
	option broadcast-address 10.10.101.255;
	option routers 10.10.101.1;
	filename &quot;/pxelinux.0&quot;;
}
</code></pre><p>然後重啓DHCP服務。</p><pre><code>$ sudo service isc-dhcp-server restart
</code></pre><h3 id="第四步-配置nfs服務器" tabindex="-1">第四步：配置NFS服務器 <a class="header-anchor" href="#第四步-配置nfs服務器" aria-label="Permalink to “第四步：配置NFS服務器”">​</a></h3><p>創建一個保存客户機根文件系統目錄的文件夾。</p><pre><code>$ sudo mkdir /nfsroot
</code></pre><p>接着，設置NFS服務器導出客户機根文件系統。向/etc/exports添加以下行來實現。</p><pre><code>/nfsroot             *(rw,no_root_squash,async,insecure,no_subtree_check)
</code></pre><p>運行下列命令來重新載入修改過的/etc/exports。</p><pre><code>$ sudo exportfs -rv
</code></pre><p>默認情況下，Ubuntu在initrd鏡像中不提供網絡啓動支持。因此你需要創建一個新的initrd.img文件。首先添加下列行到/etc/initramfs-tools/initramfs.conf中。</p><pre><code>BOOT=nfs
MODULES=netboot
</code></pre><p>然後運行下列命令來創建一個新的initrd.img。</p><pre><code>$ sudo mkinitramfs -o /var/lib/tftpboot/initrd.img
</code></pre><p>將新的內核鏡像文件複製到/var/lib/tftpboot中。</p><pre><code>$ sudo cp /boot/vmlinuz-\`uname -r\` /var/lib/tfftpboot/vmlinuz
</code></pre><p>是時候將整個根文件系統拷貝到/nfsroot中了。</p><p>假設您使用的是一個全新的Ubuntu服務器安裝，你只需將文件系統拷貝到NFS的根之中。</p><pre><code>$ sudo cp -ax / /nfsroot
</code></pre><p>然後通過文本編輯器打開/nfsroot/etc/fstab 並添加以下行。</p><pre><code>/dev/nfs       /               nfs    defaults          1       1
</code></pre><p>文件夾/var/lib/tftpboot應擁有全局讀寫權限。否則客户機無法從網絡啓動。</p><pre><code>$ sudo chmod -R 777 /var/lib/tfftpboot
</code></pre><p>最後，為了避免任何服務器設置出現錯誤，我推薦對運行DHCP服務的網卡使用靜態IP。舉個例子，如果網卡名為eth0，你的/etc/network/interfaces中的配置應該看起來像這樣：</p><pre><code>iface eth0 inet static
	address 10.10.101.1
	netmask 255.255.255.0
	broadcast 10.10.101.255
	network 10.10.101.0
</code></pre><h3 id="第五步-啓動無盤客户機" tabindex="-1">第五步：啓動無盤客户機 <a class="header-anchor" href="#第五步-啓動無盤客户機" aria-label="Permalink to “第五步：啓動無盤客户機”">​</a></h3><p>在您完成了服務器上的配置之後，從網絡啓動你的客户機。要從網絡啓動一般你只需修改BIOS設置中的啓動優先順序即可。</p><p>如果客户機啓動成功，您的無盤環境就配置好了。無需做任何修改就可以任意添加一台或多台客户端電腦。</p><hr>`,61)),i("p",null,[e[1]||(e[1]=t("via: ",-1)),n(o,{href:"http://xmodulo.com/2014/06/diskless-boot-linux-machine.html"},{default:r(()=>[...e[0]||(e[0]=[t("http://xmodulo.com/2014/06/diskless-boot-linux-machine.html",-1)])]),_:1})]),i("p",null,[e[4]||(e[4]=t("譯者：",-1)),n(o,{href:"https://github.com/alim0x"},{default:r(()=>[...e[2]||(e[2]=[t("alim0x",-1)])]),_:1}),e[5]||(e[5]=t(" 校對：",-1)),n(o,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...e[3]||(e[3]=[t("Caroline",-1)])]),_:1})]),i("p",null,[e[8]||(e[8]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原創翻譯，",-1)),n(o,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[t("Linux中國",-1)])]),_:1}),e[10]||(e[10]=t(" 榮譽推出",-1))])])}const C=a(u,[["render",c]]);export{k as __pageData,C as default};
