import{_ as u,a0 as s,w as d,s as i,ao as a,I as o,x as t,a1 as p,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在 Ubuntu 14.04 中配置 PXE 服务器 | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 14.04 中配置 PXE 服务器 | LCTT (201511) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 14.04 中配置 PXE 服务器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 14.04 中配置 PXE 服务器 | LCTT (201511) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201511/20150921 Configure PXE Server In Ubuntu 14.04","title":"在 Ubuntu 14.04 中配置 PXE 服务器","tag":"201511","desc":""},"relativePath":"201511/20150921 Configure PXE Server In Ubuntu 14.04.md","filePath":"[post].md"}'),l={name:"201511/20150921 Configure PXE Server In Ubuntu 14.04.md"};function b(f,e,P,c,m,T){const n=s("Link");return d(),i("div",null,[e[21]||(e[21]=a(`<h1 id="在-ubuntu-14-04-中配置-pxe-服务器" tabindex="-1">在 Ubuntu 14.04 中配置 PXE 服务器 <a class="header-anchor" href="#在-ubuntu-14-04-中配置-pxe-服务器" aria-label="Permalink to “在 Ubuntu 14.04 中配置 PXE 服务器”">​</a></h1><p><img src="https://www.maketecheasier.com/assets/uploads/2015/09/pxe-featured.jpg" alt=""></p><p>PXE（Preboot Execution Environment--预启动执行环境）服务器允许用户从网络中启动 Linux 发行版并且可以不需要 Linux ISO 镜像就能同时在数百台 PC 中安装。如果你客户端的计算机没有 CD/DVD 或USB 引导盘，或者如果你想在大型企业中同时安装多台计算机，那么 PXE 服务器可以帮你节省时间和金钱。</p><p>在这篇文章中，我们将告诉你如何在 Ubuntu 14.04 配置 PXE 服务器。</p><h3 id="配置网络" tabindex="-1">配置网络 <a class="header-anchor" href="#配置网络" aria-label="Permalink to “配置网络”">​</a></h3><p>开始前，你需要先设置 PXE 服务器使用静态 IP。在你的系统中要使用静态 IP 地址，需要编辑 “/etc/network/interfaces” 文件。</p><p>打开 “/etc/network/interfaces” 文件.</p><pre><code>sudo nano /etc/network/interfaces
</code></pre><p>作如下修改:</p><pre><code># 回环网络接口
auto lo
iface lo inet loopback
# 主网络接口
auto eth0
iface eth0 inet static
address 192.168.1.20
netmask 255.255.255.0
gateway 192.168.1.1
dns-nameservers 8.8.8.8
</code></pre><p>保存文件并退出。这将设置其 IP 地址为“192.168.1.20”。然后重新启动网络服务。</p><pre><code>sudo /etc/init.d/networking restart
</code></pre><h3 id="安装-dhcp-tftp-和-nfs" tabindex="-1">安装 DHCP, TFTP 和 NFS: <a class="header-anchor" href="#安装-dhcp-tftp-和-nfs" aria-label="Permalink to “安装 DHCP, TFTP 和 NFS:”">​</a></h3><p>DHCP，TFTP 和 NFS 是 PXE 服务器的重要组成部分。首先，需要更新你的系统并安装所有需要的软件包。</p><p>为此，运行以下命令：</p><pre><code>sudo apt-get update
sudo apt-get install isc-dhcp-Server inetutils-inetd tftpd-hpa syslinux nfs-kernel-Server
</code></pre><h3 id="配置-dhcp-服务" tabindex="-1">配置 DHCP 服务: <a class="header-anchor" href="#配置-dhcp-服务" aria-label="Permalink to “配置 DHCP 服务:”">​</a></h3><p>DHCP 代表动态主机配置协议（Dynamic Host Configuration Protocol），它主要用于动态分配网络配置参数，如用于接口和服务的 IP 地址。在 PXE 环境中，DHCP 服务器允许客户端请求并自动获得一个 IP 地址来访问网络。</p><p>1、编辑 “/etc/default/dhcp3-server” 文件.</p><pre><code>sudo nano /etc/default/dhcp3-server
</code></pre><p>作如下修改:</p><pre><code>INTERFACES=&quot;eth0&quot;
</code></pre><p>保存 (Ctrl + o) 并退出 (Ctrl + x) 文件.</p><p>2、编辑 “/etc/dhcp3/dhcpd.conf” 文件:</p><pre><code>sudo nano /etc/dhcp/dhcpd.conf
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
</code></pre><p>保存文件并退出。</p><p>3、启动 DHCP 服务.</p><pre><code>sudo /etc/init.d/isc-dhcp-server start
</code></pre><h3 id="配置-tftp-服务器" tabindex="-1">配置 TFTP 服务器: <a class="header-anchor" href="#配置-tftp-服务器" aria-label="Permalink to “配置 TFTP 服务器:”">​</a></h3><p>TFTP 是一种文件传输协议，类似于 FTP，但它不用进行用户认证也不能列出目录。TFTP 服务器总是监听网络上的 PXE 客户端的请求。当它检测到网络中有 PXE 客户端请求 PXE 服务时，它将提供包含引导菜单的网络数据包。</p><p>1、配置 TFTP 时,需要编辑 “/etc/inetd.conf” 文件.</p><pre><code>sudo nano /etc/inetd.conf
</code></pre><p>作如下修改:</p><pre><code>tftp dgram udp wait root /usr/sbin/in.tftpd /usr/sbin/in.tftpd -s /var/lib/tftpboot
</code></pre><p>保存文件并退出。</p><p>2、编辑 “/etc/default/tftpd-hpa” 文件。</p><pre><code>sudo nano /etc/default/tftpd-hpa
</code></pre><p>作如下修改:</p><pre><code>TFTP_USERNAME=&quot;tftp&quot;
TFTP_DIRECTORY=&quot;/var/lib/tftpboot&quot;
TFTP_ADDRESS=&quot;[:0.0.0.0:]:69&quot;
TFTP_OPTIONS=&quot;--secure&quot;
RUN_DAEMON=&quot;yes&quot;
OPTIONS=&quot;-l -s /var/lib/tftpboot&quot;
</code></pre><p>保存文件并退出。</p><p>3、 使用 <code>xinetd</code> 让 boot 服务在每次系统开机时自动启动，并启动tftpd服务。</p><pre><code>sudo update-inetd --enable BOOT
sudo service tftpd-hpa start
</code></pre><p>4、检查状态。</p><pre><code>sudo netstat -lu
</code></pre><p>它将如下所示:</p><pre><code>Proto Recv-Q Send-Q Local Address Foreign Address State
udp 0 0 *:tftp *:*
</code></pre><h3 id="配置-pxe-启动文件" tabindex="-1">配置 PXE 启动文件 <a class="header-anchor" href="#配置-pxe-启动文件" aria-label="Permalink to “配置 PXE 启动文件”">​</a></h3><p>现在，你需要将 PXE 引导文件 “pxelinux.0” 放在 TFTP 根目录下。为 TFTP 创建目录结构，并从 “/usr/lib/syslinux/” 复制 syslinux 提供的所有引导程序文件到 “/var/lib/tftpboot/” 下，操作如下：</p><pre><code>sudo mkdir /var/lib/tftpboot
sudo mkdir /var/lib/tftpboot/pxelinux.cfg
sudo mkdir -p /var/lib/tftpboot/Ubuntu/14.04/amd64/
sudo cp /usr/lib/syslinux/vesamenu.c32 /var/lib/tftpboot/
sudo cp /usr/lib/syslinux/pxelinux.0 /var/lib/tftpboot/
</code></pre><h4 id="设置-pxelinux-配置文件" tabindex="-1">设置 PXELINUX 配置文件 <a class="header-anchor" href="#设置-pxelinux-配置文件" aria-label="Permalink to “设置 PXELINUX 配置文件”">​</a></h4><p>PXE 配置文件定义了 PXE 客户端启动时显示的菜单，它能引导并与 TFTP 服务器关联。默认情况下，当一个 PXE 客户端启动时，它会使用自己的 MAC 地址指定要读取的配置文件，所以我们需要创建一个包含可引导内核列表的默认文件。</p><p>编辑 PXE 服务器配置文件，使用有效的安装选项。</p><p>编辑 “/var/lib/tftpboot/pxelinux.cfg/default”：</p><pre><code>sudo nano /var/lib/tftpboot/pxelinux.cfg/default
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
</code></pre><p>保存文件并退出。</p><p>编辑 “/var/lib/tftpboot/pxelinux.cfg/pxe.conf” 文件。</p><pre><code>sudo nano /var/lib/tftpboot/pxelinux.cfg/pxe.conf
</code></pre><p>作如下修改:</p><pre><code>MENU TITLE PXE Server
NOESCAPE 1
ALLOWOPTIONS 1
PROMPT 0
MENU WIDTH 80
MENU ROWS 14
MENU TABMSGROW 24
MENU MARGIN 10
MENU COLOR border 30;44 #ffffffff #00000000 std
</code></pre><p>保存文件并退出。</p><h3 id="为-pxe-服务器添加-ubuntu-14-04-桌面启动镜像" tabindex="-1">为 PXE 服务器添加 Ubuntu 14.04 桌面启动镜像 <a class="header-anchor" href="#为-pxe-服务器添加-ubuntu-14-04-桌面启动镜像" aria-label="Permalink to “为 PXE 服务器添加 Ubuntu 14.04 桌面启动镜像”">​</a></h3><p>对于这一步需要 Ubuntu 内核和 initrd 文件。要获得这些文件，你需要 Ubuntu 14.04 桌面 ISO 镜像。你可以通过以下命令下载 Ubuntu 14.04 ISO 镜像到 /mnt 目录：</p><pre><code>sudo cd /mnt
sudo wget http://releases.ubuntu.com/14.04/ubuntu-14.04.3-desktop-amd64.iso
</code></pre>`,67)),o("p",null,[e[1]||(e[1]=o("strong",null,"注意",-1)),e[2]||(e[2]=t(": 下载用的 URL 可能会改变，因为 ISO 镜像会进行更新。如果上面的网址无法访问，看看",-1)),p(n,{href:"http://releases.ubuntu.com/14.04/"},{default:r(()=>[...e[0]||(e[0]=[t("这个网站",-1)])]),_:1}),e[3]||(e[3]=t("，了解最新的下载链接。",-1))]),e[22]||(e[22]=a(`<p>挂载 ISO 文件，使用以下命令将所有文件复制到 TFTP文件夹中：</p><pre><code>sudo mount -o loop /mnt/ubuntu-14.04.3-desktop-amd64.iso /media/
sudo cp -r /media/* /var/lib/tftpboot/Ubuntu/14.04/amd64/
sudo cp -r /media/.disk /var/lib/tftpboot/Ubuntu/14.04/amd64/
sudo cp /media/casper/initrd.lz /media/casper/vmlinuz /var/lib/tftpboot/Ubuntu/
</code></pre><h3 id="将导出的-iso-目录配置到-nfs-服务器上" tabindex="-1">将导出的 ISO 目录配置到 NFS 服务器上 <a class="header-anchor" href="#将导出的-iso-目录配置到-nfs-服务器上" aria-label="Permalink to “将导出的 ISO 目录配置到 NFS 服务器上”">​</a></h3><p>现在，你需要通过 NFS 协议来设置“安装源镜像（ Installation Source Mirrors）”。你还可以使用 HTTP 和 FTP 来安装源镜像。在这里，我已经使用 NFS 输出 ISO 内容。</p><p>要配置 NFS 服务器，你需要编辑 “/etc/exports” 文件。</p><pre><code>sudo nano /etc/exports
</code></pre><p>作如下修改:</p><pre><code>/var/lib/tftpboot/Ubuntu/14.04/amd64 *(ro,async,no_root_squash,no_subtree_check)
</code></pre><p>保存文件并退出。为使更改生效，输出并启动 NFS 服务。</p><pre><code>sudo exportfs -a
sudo /etc/init.d/nfs-kernel-server start
</code></pre><p>现在，你的 PXE 服务器已经准备就绪。</p><h3 id="配置网络引导-pxe-客户端" tabindex="-1">配置网络引导 PXE 客户端 <a class="header-anchor" href="#配置网络引导-pxe-客户端" aria-label="Permalink to “配置网络引导 PXE 客户端”">​</a></h3><p>PXE 客户端可以是任何支持 PXE 网络引导的计算机系统。现在，你的客户端只需要在系统的 BIOS 中设置 “从网络引导（Boot From Network）” 选项就可以启动并安装 Ubuntu 14.04 桌面。</p><p>现在准备出发吧 - 用网络引导启动你的 PXE 客户端计算机，你现在应该看到一个子菜单，显示了我们创建的 Ubuntu 14.04 桌面的菜单项。</p><p><img src="https://www.maketecheasier.com/assets/uploads/2015/09/pxe.png" alt="pxe"></p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>配置使用 PXE 服务器从网络启动安装能提高效率和节省时间。你可以在本地网络中同时安装数百个客户端。所有你需要的只是一个 PXE 服务器和能启动 PXE 的客户端。试试吧，如果这个对你有用请让我们知道。</p><p>参考:</p>`,18)),o("ul",null,[o("li",null,[p(n,{href:"https://en.wikipedia.org/wiki/Preboot_Execution_Environment"},{default:r(()=>[...e[4]||(e[4]=[t("PXE Server wiki",-1)])]),_:1})]),o("li",null,[p(n,{href:"https://help.ubuntu.com/community/PXEInstallServer"},{default:r(()=>[...e[5]||(e[5]=[t("PXE Server Ubuntu",-1)])]),_:1})])]),o("p",null,[e[7]||(e[7]=t("图片来源: ",-1)),p(n,{href:"https://www.flickr.com/photos/jhcalderon/3681926417/"},{default:r(()=>[...e[6]||(e[6]=[t("fupsol_unl_20",-1)])]),_:1})]),e[23]||(e[23]=o("hr",null,null,-1)),o("p",null,[e[9]||(e[9]=t("via: ",-1)),p(n,{href:"https://www.maketecheasier.com/configure-pxe-server-ubuntu/"},{default:r(()=>[...e[8]||(e[8]=[t("https://www.maketecheasier.com/configure-pxe-server-ubuntu/",-1)])]),_:1})]),o("p",null,[e[13]||(e[13]=t("作者：",-1)),p(n,{href:"https://www.maketecheasier.com/author/hiteshjethva/"},{default:r(()=>[...e[10]||(e[10]=[t("Hitesh Jethva",-1)])]),_:1}),e[14]||(e[14]=t(" 译者：",-1)),p(n,{href:"https://github.com/strugglingyouth"},{default:r(()=>[...e[11]||(e[11]=[t("strugglingyouth",-1)])]),_:1}),e[15]||(e[15]=t(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:r(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[18]||(e[18]=t("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:r(()=>[...e[17]||(e[17]=[t("Linux中国",-1)])]),_:1}),e[20]||(e[20]=t(" 荣誉推出",-1))])])}const U=u(l,[["render",b]]);export{x as __pageData,U as default};
