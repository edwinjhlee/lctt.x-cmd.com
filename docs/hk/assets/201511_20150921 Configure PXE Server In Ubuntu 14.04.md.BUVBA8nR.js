import{_ as u,a0 as s,w as d,s as i,ao as a,I as o,x as t,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在 Ubuntu 14.04 中配置 PXE 服務器 | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 14.04 中配置 PXE 服務器 | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 14.04 中配置 PXE 服務器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 14.04 中配置 PXE 服務器 | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20150921 Configure PXE Server In Ubuntu 14.04","title":"在 Ubuntu 14.04 中配置 PXE 服務器","tag":"201511","desc":""},"relativePath":"201511/20150921 Configure PXE Server In Ubuntu 14.04.md","filePath":"[post].md"}'),l={name:"201511/20150921 Configure PXE Server In Ubuntu 14.04.md"};function b(f,e,P,c,m,T){const n=s("Link");return d(),i("div",null,[e[21]||(e[21]=a(`<h1 id="在-ubuntu-14-04-中配置-pxe-服務器" tabindex="-1">在 Ubuntu 14.04 中配置 PXE 服務器 <a class="header-anchor" href="#在-ubuntu-14-04-中配置-pxe-服務器" aria-label="Permalink to “在 Ubuntu 14.04 中配置 PXE 服務器”">​</a></h1><p><img src="https://www.maketecheasier.com/assets/uploads/2015/09/pxe-featured.jpg" alt=""></p><p>PXE（Preboot Execution Environment--預啓動執行環境）服務器允許用户從網絡中啓動 Linux 發行版並且可以不需要 Linux ISO 鏡像就能同時在數百台 PC 中安裝。如果你客户端的計算機沒有 CD/DVD 或USB 引導盤，或者如果你想在大型企業中同時安裝多台計算機，那麼 PXE 服務器可以幫你節省時間和金錢。</p><p>在這篇文章中，我們將告訴你如何在 Ubuntu 14.04 配置 PXE 服務器。</p><h3 id="配置網絡" tabindex="-1">配置網絡 <a class="header-anchor" href="#配置網絡" aria-label="Permalink to “配置網絡”">​</a></h3><p>開始前，你需要先設置 PXE 服務器使用靜態 IP。在你的系統中要使用靜態 IP 地址，需要編輯 “/etc/network/interfaces” 文件。</p><p>打開 “/etc/network/interfaces” 文件.</p><pre><code>sudo nano /etc/network/interfaces
</code></pre><p>作如下修改:</p><pre><code># 迴環網絡接口
auto lo
iface lo inet loopback
# 主網絡接口
auto eth0
iface eth0 inet static
address 192.168.1.20
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 8.8.8.8
</code></pre><p>保存文件並退出。這將設置其 IP 地址為“192.168.1.20”。然後重新啓動網絡服務。</p><pre><code>sudo /etc/init.d/networking restart
</code></pre><h3 id="安裝-dhcp-tftp-和-nfs" tabindex="-1">安裝 DHCP, TFTP 和 NFS: <a class="header-anchor" href="#安裝-dhcp-tftp-和-nfs" aria-label="Permalink to “安裝 DHCP, TFTP 和 NFS:”">​</a></h3><p>DHCP，TFTP 和 NFS 是 PXE 服務器的重要組成部分。首先，需要更新你的系統並安裝所有需要的軟件包。</p><p>為此，運行以下命令：</p><pre><code>sudo apt-get update
sudo apt-get install isc-dhcp-Server inetutils-inetd tftpd-hpa syslinux nfs-kernel-Server
</code></pre><h3 id="配置-dhcp-服務" tabindex="-1">配置 DHCP 服務: <a class="header-anchor" href="#配置-dhcp-服務" aria-label="Permalink to “配置 DHCP 服務:”">​</a></h3><p>DHCP 代表動態主機配置協議（Dynamic Host Configuration Protocol），它主要用於動態分配網絡配置參數，如用於接口和服務的 IP 地址。在 PXE 環境中，DHCP 服務器允許客户端請求並自動獲得一個 IP 地址來訪問網絡。</p><p>1、編輯 “/etc/default/dhcp3-server” 文件.</p><pre><code>sudo nano /etc/default/dhcp3-server
</code></pre><p>作如下修改:</p><pre><code>INTERFACES=&quot;eth0&quot;
</code></pre><p>保存 (Ctrl + o) 並退出 (Ctrl + x) 文件.</p><p>2、編輯 “/etc/dhcp3/dhcpd.conf” 文件:</p><pre><code>sudo nano /etc/dhcp/dhcpd.conf
</code></pre><p>作如下修改:</p><pre><code>default-lease-time 600;
max-lease-time 7200;
subnet 192.168.1.0 netmask 255.255.255.0 {
range 192.168.1.21 192.168.1.240;
option subnet-mask 255.255.255.0;
option routers 192.168.1.20;
option broadcast-address 192.168.1.255;
filename &quot;pxelinux.0&quot;;
next-Server 192.168.1.20;
}
</code></pre><p>保存文件並退出。</p><p>3、啓動 DHCP 服務.</p><pre><code>sudo /etc/init.d/isc-dhcp-server start
</code></pre><h3 id="配置-tftp-服務器" tabindex="-1">配置 TFTP 服務器: <a class="header-anchor" href="#配置-tftp-服務器" aria-label="Permalink to “配置 TFTP 服務器:”">​</a></h3><p>TFTP 是一種文件傳輸協議，類似於 FTP，但它不用進行用户認證也不能列出目錄。TFTP 服務器總是監聽網絡上的 PXE 客户端的請求。當它檢測到網絡中有 PXE 客户端請求 PXE 服務時，它將提供包含引導菜單的網絡數據包。</p><p>1、配置 TFTP 時,需要編輯 “/etc/inetd.conf” 文件.</p><pre><code>sudo nano /etc/inetd.conf
</code></pre><p>作如下修改:</p><pre><code>tftp dgram udp wait root /usr/sbin/in.tftpd /usr/sbin/in.tftpd -s /var/lib/tftpboot
</code></pre><p>保存文件並退出。</p><p>2、編輯 “/etc/default/tftpd-hpa” 文件。</p><pre><code>sudo nano /etc/default/tftpd-hpa
</code></pre><p>作如下修改:</p><pre><code>TFTP_USERNAME=&quot;tftp&quot;
TFTP_DIRECTORY=&quot;/var/lib/tftpboot&quot;
TFTP_ADDRESS=&quot;[:0.0.0.0:]:69&quot;
TFTP_OPTIONS=&quot;--secure&quot;
RUN_DAEMON=&quot;yes&quot;
OPTIONS=&quot;-l -s /var/lib/tftpboot&quot;
</code></pre><p>保存文件並退出。</p><p>3、 使用 <code>xinetd</code> 讓 boot 服務在每次系統開機時自動啓動，並啓動tftpd服務。</p><pre><code>sudo update-inetd --enable BOOT
sudo service tftpd-hpa start
</code></pre><p>4、檢查狀態。</p><pre><code>sudo netstat -lu
</code></pre><p>它將如下所示:</p><pre><code>Proto Recv-Q Send-Q Local Address Foreign Address State
udp 0 0 *:tftp *:*
</code></pre><h3 id="配置-pxe-啓動文件" tabindex="-1">配置 PXE 啓動文件 <a class="header-anchor" href="#配置-pxe-啓動文件" aria-label="Permalink to “配置 PXE 啓動文件”">​</a></h3><p>現在，你需要將 PXE 引導文件 “pxelinux.0” 放在 TFTP 根目錄下。為 TFTP 創建目錄結構，並從 “/usr/lib/syslinux/” 複製 syslinux 提供的所有引導程序文件到 “/var/lib/tftpboot/” 下，操作如下：</p><pre><code>sudo mkdir /var/lib/tftpboot
sudo mkdir /var/lib/tftpboot/pxelinux.cfg
sudo mkdir -p /var/lib/tftpboot/Ubuntu/14.04/amd64/
sudo cp /usr/lib/syslinux/vesamenu.c32 /var/lib/tftpboot/
sudo cp /usr/lib/syslinux/pxelinux.0 /var/lib/tftpboot/
</code></pre><h4 id="設置-pxelinux-配置文件" tabindex="-1">設置 PXELINUX 配置文件 <a class="header-anchor" href="#設置-pxelinux-配置文件" aria-label="Permalink to “設置 PXELINUX 配置文件”">​</a></h4><p>PXE 配置文件定義了 PXE 客户端啓動時顯示的菜單，它能引導並與 TFTP 服務器關聯。默認情況下，當一個 PXE 客户端啓動時，它會使用自己的 MAC 地址指定要讀取的配置文件，所以我們需要創建一個包含可引導內核列表的默認文件。</p><p>編輯 PXE 服務器配置文件，使用有效的安裝選項。</p><p>編輯 “/var/lib/tftpboot/pxelinux.cfg/default”：</p><pre><code>sudo nano /var/lib/tftpboot/pxelinux.cfg/default
</code></pre><p>作如下修改:</p><pre><code>DEFAULT vesamenu.c32
TIMEOUT 100
PROMPT 0
MENU INCLUDE pxelinux.cfg/PXE.conf
NOESCAPE 1
LABEL Try Ubuntu 14.04 Desktop
MENU LABEL Try Ubuntu 14.04 Desktop
kernel Ubuntu/vmlinuz
append boot=casper netboot=nfs nfsroot=192.168.1.20:/var/lib/tftpboot/Ubuntu/14.04/amd64
initrd=Ubuntu/initrd.lz quiet splash
ENDTEXT
LABEL Install Ubuntu 14.04 Desktop
MENU LABEL Install Ubuntu 14.04 Desktop
kernel Ubuntu/vmlinuz
append boot=casper automatic-ubiquity netboot=nfs nfsroot=192.168.1.20:/var/lib/tftpboot/Ubuntu/14.04/amd64
initrd=Ubuntu/initrd.lz quiet splash
ENDTEXT
</code></pre><p>保存文件並退出。</p><p>編輯 “/var/lib/tftpboot/pxelinux.cfg/pxe.conf” 文件。</p><pre><code>sudo nano /var/lib/tftpboot/pxelinux.cfg/pxe.conf
</code></pre><p>作如下修改:</p><pre><code>MENU TITLE PXE Server
NOESCAPE 1
ALLOWOPTIONS 1
PROMPT 0
MENU WIDTH 80
MENU ROWS 14
MENU TABMSGROW 24
MENU MARGIN 10
MENU COLOR border 30;44 #ffffffff #00000000 std
</code></pre><p>保存文件並退出。</p><h3 id="為-pxe-服務器添加-ubuntu-14-04-桌面啓動鏡像" tabindex="-1">為 PXE 服務器添加 Ubuntu 14.04 桌面啓動鏡像 <a class="header-anchor" href="#為-pxe-服務器添加-ubuntu-14-04-桌面啓動鏡像" aria-label="Permalink to “為 PXE 服務器添加 Ubuntu 14.04 桌面啓動鏡像”">​</a></h3><p>對於這一步需要 Ubuntu 內核和 initrd 文件。要獲得這些文件，你需要 Ubuntu 14.04 桌面 ISO 鏡像。你可以通過以下命令下載 Ubuntu 14.04 ISO 鏡像到 /mnt 目錄：</p><pre><code>sudo cd /mnt
sudo wget http://releases.ubuntu.com/14.04/ubuntu-14.04.3-desktop-amd64.iso
</code></pre>`,67)),o("p",null,[e[1]||(e[1]=o("strong",null,"注意",-1)),e[2]||(e[2]=t(": 下載用的 URL 可能會改變，因為 ISO 鏡像會進行更新。如果上面的網址無法訪問，看看",-1)),p(n,{href:"http://releases.ubuntu.com/14.04/"},{default:r(()=>[...e[0]||(e[0]=[t("這個網站",-1)])]),_:1}),e[3]||(e[3]=t("，瞭解最新的下載鏈接。",-1))]),e[22]||(e[22]=a(`<p>掛載 ISO 文件，使用以下命令將所有文件複製到 TFTP文件夾中：</p><pre><code>sudo mount -o loop /mnt/ubuntu-14.04.3-desktop-amd64.iso /media/
sudo cp -r /media/* /var/lib/tftpboot/Ubuntu/14.04/amd64/
sudo cp -r /media/.disk /var/lib/tftpboot/Ubuntu/14.04/amd64/
sudo cp /media/casper/initrd.lz /media/casper/vmlinuz /var/lib/tftpboot/Ubuntu/
</code></pre><h3 id="將導出的-iso-目錄配置到-nfs-服務器上" tabindex="-1">將導出的 ISO 目錄配置到 NFS 服務器上 <a class="header-anchor" href="#將導出的-iso-目錄配置到-nfs-服務器上" aria-label="Permalink to “將導出的 ISO 目錄配置到 NFS 服務器上”">​</a></h3><p>現在，你需要通過 NFS 協議來設置“安裝源鏡像（ Installation Source Mirrors）”。你還可以使用 HTTP 和 FTP 來安裝源鏡像。在這裏，我已經使用 NFS 輸出 ISO 內容。</p><p>要配置 NFS 服務器，你需要編輯 “/etc/exports” 文件。</p><pre><code>sudo nano /etc/exports
</code></pre><p>作如下修改:</p><pre><code>/var/lib/tftpboot/Ubuntu/14.04/amd64 *(ro,async,no_root_squash,no_subtree_check)
</code></pre><p>保存文件並退出。為使更改生效，輸出並啓動 NFS 服務。</p><pre><code>sudo exportfs -a
sudo /etc/init.d/nfs-kernel-server start
</code></pre><p>現在，你的 PXE 服務器已經準備就緒。</p><h3 id="配置網絡引導-pxe-客户端" tabindex="-1">配置網絡引導 PXE 客户端 <a class="header-anchor" href="#配置網絡引導-pxe-客户端" aria-label="Permalink to “配置網絡引導 PXE 客户端”">​</a></h3><p>PXE 客户端可以是任何支持 PXE 網絡引導的計算機系統。現在，你的客户端只需要在系統的 BIOS 中設置 “從網絡引導（Boot From Network）” 選項就可以啓動並安裝 Ubuntu 14.04 桌面。</p><p>現在準備出發吧 - 用網絡引導啓動你的 PXE 客户端計算機，你現在應該看到一個子菜單，顯示了我們創建的 Ubuntu 14.04 桌面的菜單項。</p><p><img src="https://www.maketecheasier.com/assets/uploads/2015/09/pxe.png" alt="pxe"></p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>配置使用 PXE 服務器從網絡啓動安裝能提高效率和節省時間。你可以在本地網絡中同時安裝數百個客户端。所有你需要的只是一個 PXE 服務器和能啓動 PXE 的客户端。試試吧，如果這個對你有用請讓我們知道。</p><p>參考:</p>`,18)),o("ul",null,[o("li",null,[p(n,{href:"https://en.wikipedia.org/wiki/Preboot_Execution_Environment"},{default:r(()=>[...e[4]||(e[4]=[t("PXE Server wiki",-1)])]),_:1})]),o("li",null,[p(n,{href:"https://help.ubuntu.com/community/PXEInstallServer"},{default:r(()=>[...e[5]||(e[5]=[t("PXE Server Ubuntu",-1)])]),_:1})])]),o("p",null,[e[7]||(e[7]=t("圖片來源: ",-1)),p(n,{href:"https://www.flickr.com/photos/jhcalderon/3681926417/"},{default:r(()=>[...e[6]||(e[6]=[t("fupsol_unl_20",-1)])]),_:1})]),e[23]||(e[23]=o("hr",null,null,-1)),o("p",null,[e[9]||(e[9]=t("via: ",-1)),p(n,{href:"https://www.maketecheasier.com/configure-pxe-server-ubuntu/"},{default:r(()=>[...e[8]||(e[8]=[t("https://www.maketecheasier.com/configure-pxe-server-ubuntu/",-1)])]),_:1})]),o("p",null,[e[13]||(e[13]=t("作者：",-1)),p(n,{href:"https://www.maketecheasier.com/author/hiteshjethva/"},{default:r(()=>[...e[10]||(e[10]=[t("Hitesh Jethva",-1)])]),_:1}),e[14]||(e[14]=t(" 譯者：",-1)),p(n,{href:"https://github.com/strugglingyouth"},{default:r(()=>[...e[11]||(e[11]=[t("strugglingyouth",-1)])]),_:1}),e[15]||(e[15]=t(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[18]||(e[18]=t("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:r(()=>[...e[17]||(e[17]=[t("Linux中國",-1)])]),_:1}),e[20]||(e[20]=t(" 榮譽推出",-1))])])}const U=u(l,[["render",b]]);export{x as __pageData,U as default};
