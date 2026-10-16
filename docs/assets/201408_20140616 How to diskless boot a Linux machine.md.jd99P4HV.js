import{_ as a,a0 as p,w as s,s as d,ao as l,I as i,x as t,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"如何无盘启动Linux | LCTT x X-CMD","titleTemplate":false,"description":"如何无盘启动Linux | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何无盘启动Linux | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何无盘启动Linux | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140616 How to diskless boot a Linux machine","title":"如何无盘启动Linux","tag":"201408","desc":""},"relativePath":"201408/20140616 How to diskless boot a Linux machine.md","filePath":"[post].md"}'),u={name:"201408/20140616 How to diskless boot a Linux machine.md"};function c(f,e,h,m,b,x){const o=p("Link");return s(),d("div",null,[e[11]||(e[11]=l(`<h1 id="如何无盘启动linux" tabindex="-1">如何无盘启动Linux <a class="header-anchor" href="#如何无盘启动linux" aria-label="Permalink to “如何无盘启动Linux”">​</a></h1><p>无盘启动意味着一台客户端电脑在启动操作系统时没有任何的磁盘存储介质。在这种情形之下，电脑能够通过网络从远程NFS服务器上加载内核和根文件系统。在这过程中可能会用到多种不同的方法来从NFS服务器上加载内核和根文件系统：RARP，BOOTP或是DHCP协议。在这个指导教程中，我会使用BOOTP/DHCP协议，因为它们能够被大多数的网卡所支持。</p><h3 id="无盘计算机的优势" tabindex="-1">无盘计算机的优势 <a class="header-anchor" href="#无盘计算机的优势" aria-label="Permalink to “无盘计算机的优势”">​</a></h3><p>想象一下你的办公室内有30台电脑，每一台都需要使用相同的应用程序。如果你作为管理这些电脑的管理员，你会怎么做？如果你在每一台电脑上安装应用程序，那只是在浪费你的时间。另一方面来说，一套无盘系统就能解决你的问题。有了一套无盘系统，你只需在中央NFS服务器上安装需要的程序，然后通过网络启动这30台客户机即可。</p><h3 id="需要什么" tabindex="-1">需要什么 <a class="header-anchor" href="#需要什么" aria-label="Permalink to “需要什么”">​</a></h3><p>两台或更多的装备有支持DHCP协议的网卡的Linux电脑。这些将扮演NFS服务器角色的电脑应当配有硬盘，其它客户机不需要任何的硬盘。服务器和客户机需要连接到同一个本地网络之内。</p><p>设置一个无盘系统共需要五步。</p><ol><li>安装所需的包</li><li>配置TFTP服务器</li><li>配置DHCP服务器</li><li>配置NFS服务器</li><li>启动无盘客户机</li></ol><p>在这个指导教程中，我假设作为启动服务器的电脑运行的是 Ubuntu。如何你正在使用其它的Linux发行版，原理是一样的。</p><h3 id="第一步-安装所需的包" tabindex="-1">第一步：安装所需的包 <a class="header-anchor" href="#第一步-安装所需的包" aria-label="Permalink to “第一步：安装所需的包”">​</a></h3><p>像下面这样使用 apt-get 命令来安装所有需要的包。</p><pre><code>$ sudo apt-get install dhcp3-server tftpd-hpa syslinux nfs-kernel-server initramfs-tools
</code></pre><h3 id="第二步-配置tftp服务器" tabindex="-1">第二步：配置TFTP服务器 <a class="header-anchor" href="#第二步-配置tftp服务器" aria-label="Permalink to “第二步：配置TFTP服务器”">​</a></h3><p>TFTP服务器是一个小型FTP服务器，需要用它来在本地网络中的客户机和服务器之间自动传输启动文件。</p><p>向/etc/default/tftpd-hpa中添加以下行：</p><pre><code>RUN_DAEMON=&quot;yes&quot;
OPTIONS=&quot;-l -s /var/lib/tftpboot/&quot;
</code></pre><p>接着，创建一个启动文件夹。</p><pre><code>$ sudo mkdir -p /var/lib/tftpboot/pxelinux.cfg
</code></pre><p>复制引导程序镜像。</p><pre><code>$ sudo cp /usr/lib/syslinux/pxelinux.0 /var/lib/tftpboot
</code></pre><p>像下面这样创建一个默认启动配置文件。</p><pre><code>$ sudo vi /tftpboot/pxelinux.cfg/default
</code></pre><hr><pre><code>LABEL Ubuntu
KERNEL vmlinuz
APPEND root=/dev/nfs initrd=initrd.img nfsroot=10.10.101.1:/nfsroot ip=dhcp rw
</code></pre><p>注意：</p><ul><li>&quot;root=/dev/nfs&quot;表示服务器上的网络文件系统（不需要修改）。</li><li>&quot;initrd=initrd.img&quot;是一个用于系统启动的启动脚本。</li><li>&quot;nfsroot=10.10.101.1/nfsroot&quot;指明了服务器的IP地址以及NFS共享文件夹的名称。用你的服务器地址来替换掉IP地址。</li><li>&quot;ip=dhcp&quot;表示客户端电脑使用DHCP寻址方案。</li><li>&quot;rw&quot;表示NFS共享是可读/可写的。</li></ul><p>最后，重启TFTPD服务。</p><pre><code>sudo /etc/init.d/tftpd-hpa restart
</code></pre><h3 id="第三步-配置dhcp服务" tabindex="-1">第三步：配置DHCP服务 <a class="header-anchor" href="#第三步-配置dhcp服务" aria-label="Permalink to “第三步：配置DHCP服务”">​</a></h3><p>你还需要在NFS服务器上配置DHCP服务来允许使用/var/lib/tftpboot/pxelinux.0启动。假设你在使用10.10.101.0作为子网，你的配置可能看起来像下面这样子。</p><pre><code>$ sudo vi /etc/dhcp3/dhcpd.conf
</code></pre><hr><pre><code>allow booting;
allow bootp;

subnet 10.10.101.0 netmask 255.255.255.0 {
	range 10.10.101.2 10.10.101.254;
	option broadcast-address 10.10.101.255;
	option routers 10.10.101.1;
	filename &quot;/pxelinux.0&quot;;
}
</code></pre><p>然后重启DHCP服务。</p><pre><code>$ sudo service isc-dhcp-server restart
</code></pre><h3 id="第四步-配置nfs服务器" tabindex="-1">第四步：配置NFS服务器 <a class="header-anchor" href="#第四步-配置nfs服务器" aria-label="Permalink to “第四步：配置NFS服务器”">​</a></h3><p>创建一个保存客户机根文件系统目录的文件夹。</p><pre><code>$ sudo mkdir /nfsroot
</code></pre><p>接着，设置NFS服务器导出客户机根文件系统。向/etc/exports添加以下行来实现。</p><pre><code>/nfsroot             *(rw,no_root_squash,async,insecure,no_subtree_check)
</code></pre><p>运行下列命令来重新载入修改过的/etc/exports。</p><pre><code>$ sudo exportfs -rv
</code></pre><p>默认情况下，Ubuntu在initrd镜像中不提供网络启动支持。因此你需要创建一个新的initrd.img文件。首先添加下列行到/etc/initramfs-tools/initramfs.conf中。</p><pre><code>BOOT=nfs
MODULES=netboot
</code></pre><p>然后运行下列命令来创建一个新的initrd.img。</p><pre><code>$ sudo mkinitramfs -o /var/lib/tftpboot/initrd.img
</code></pre><p>将新的内核镜像文件复制到/var/lib/tftpboot中。</p><pre><code>$ sudo cp /boot/vmlinuz-\`uname -r\` /var/lib/tfftpboot/vmlinuz
</code></pre><p>是时候将整个根文件系统拷贝到/nfsroot中了。</p><p>假设您使用的是一个全新的Ubuntu服务器安装，你只需将文件系统拷贝到NFS的根之中。</p><pre><code>$ sudo cp -ax / /nfsroot
</code></pre><p>然后通过文本编辑器打开/nfsroot/etc/fstab 并添加以下行。</p><pre><code>/dev/nfs       /               nfs    defaults          1       1
</code></pre><p>文件夹/var/lib/tftpboot应拥有全局读写权限。否则客户机无法从网络启动。</p><pre><code>$ sudo chmod -R 777 /var/lib/tfftpboot
</code></pre><p>最后，为了避免任何服务器设置出现错误，我推荐对运行DHCP服务的网卡使用静态IP。举个例子，如果网卡名为eth0，你的/etc/network/interfaces中的配置应该看起来像这样：</p><pre><code>iface eth0 inet static
	address 10.10.101.1
	netmask 255.255.255.0
	broadcast 10.10.101.255
	network 10.10.101.0
</code></pre><h3 id="第五步-启动无盘客户机" tabindex="-1">第五步：启动无盘客户机 <a class="header-anchor" href="#第五步-启动无盘客户机" aria-label="Permalink to “第五步：启动无盘客户机”">​</a></h3><p>在您完成了服务器上的配置之后，从网络启动你的客户机。要从网络启动一般你只需修改BIOS设置中的启动优先顺序即可。</p><p>如果客户机启动成功，您的无盘环境就配置好了。无需做任何修改就可以任意添加一台或多台客户端电脑。</p><hr>`,61)),i("p",null,[e[1]||(e[1]=t("via: ",-1)),n(o,{href:"http://xmodulo.com/2014/06/diskless-boot-linux-machine.html"},{default:r(()=>[...e[0]||(e[0]=[t("http://xmodulo.com/2014/06/diskless-boot-linux-machine.html",-1)])]),_:1})]),i("p",null,[e[4]||(e[4]=t("译者：",-1)),n(o,{href:"https://github.com/alim0x"},{default:r(()=>[...e[2]||(e[2]=[t("alim0x",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),n(o,{href:"https://github.com/carolinewuyan"},{default:r(()=>[...e[3]||(e[3]=[t("Caroline",-1)])]),_:1})]),i("p",null,[e[8]||(e[8]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创翻译，",-1)),n(o,{href:"http://linux.cn/"},{default:r(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const C=a(u,[["render",c]]);export{k as __pageData,C as default};
