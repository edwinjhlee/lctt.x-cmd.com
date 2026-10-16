import{_ as p,a0 as l,w as d,s as a,ao as s,I as i,x as e,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理 | LCTT x X-CMD","titleTemplate":false,"description":"RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理 | LCTT (RHCSA Series) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理 | LCTT (RHCSA Series) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCSA Series/RHCSA Series--Part 15--Essentials of Virtualization and Guest Administration with KVM","title":"RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理","tag":"RHCSA Series","desc":""},"relativePath":"RHCSA Series/RHCSA Series--Part 15--Essentials of Virtualization and Guest Administration with KVM.md","filePath":"[post].md"}'),m={name:"RHCSA Series/RHCSA Series--Part 15--Essentials of Virtualization and Guest Administration with KVM.md"};function u(g,t,v,S,f,V){const r=l("Link");return d(),a("div",null,[t[32]||(t[32]=s('<h1 id="rhcsa-系列-十五-虚拟化基础和使用-kvm-进行虚拟机管理" tabindex="-1">RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理 <a class="header-anchor" href="#rhcsa-系列-十五-虚拟化基础和使用-kvm-进行虚拟机管理" aria-label="Permalink to “RHCSA 系列（十五）： 虚拟化基础和使用 KVM 进行虚拟机管理”">​</a></h1><p>假如你在词典中查一下单词 “虚拟化（virtualize）”，你将会发现它的意思是 “创造某些事物的一个虚拟物（而非真实的）”。在计算机行业中，术语虚拟化（virtualization）指的是：在相同的物理（硬件）系统上，同时运行多个操作系统，且这几个系统相互隔离的<strong>可能性</strong>，而那个硬件在虚拟化架构中被称作宿主机（host）。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/RHCSA-Part15.png" alt="KVM 虚拟化基础和 KVM 虚拟机管理"></p><p><em>RHCSA 系列： 虚拟化基础和使用 KVM 进行虚拟机管理 – Part 15</em></p><p>通过使用虚拟机监视器（也被称为虚拟机管理程序（hypervisor）），虚拟机（被称为 guest）由底层的硬件来供给虚拟资源（举几个例子来说，如 CPU，RAM，存储介质，网络接口等）。</p><p>考虑到这一点就可以清楚地看出，虚拟化的主要优点是节约成本（在设备和网络基础设施，及维护工作等方面）和显著地减少容纳所有必要硬件所需的物理空间。</p><p>由于这个简单的指南不能涵盖所有的虚拟化方法，我鼓励你参考在总结部分中列出的文档，以此对这个话题做更深入的了解。</p>',7)),i("p",null,[t[1]||(t[1]=e("请记住当前文章只是用于在 RHEL 7 中用命令行工具使用 ",-1)),n(r,{href:"http://www.linux-kvm.org/page/Main_Page"},{default:o(()=>[...t[0]||(t[0]=[e("KVM",-1)])]),_:1}),t[2]||(t[2]=e(" (Kernel-based Virtual Machine（基于内核的虚拟机）) 学习虚拟化基础知识的一个起点，而并不是对这个话题的深入探讨。",-1))]),t[33]||(t[33]=s(`<h3 id="检查硬件要求并安装软件包" tabindex="-1">检查硬件要求并安装软件包 <a class="header-anchor" href="#检查硬件要求并安装软件包" aria-label="Permalink to “检查硬件要求并安装软件包”">​</a></h3><p>为了设置虚拟化，你的 CPU 必须能够支持它。你可以使用下面的命令来查看你的系统是否满足这个要求：</p><pre><code># grep -E &#39;svm|vmx&#39; /proc/cpuinfo
</code></pre><p>在下面的截图中，我们可以看到当前的系统（带有一个 AMD 的微处理器）支持虚拟化，svm 字样的存在暗示了这一点。假如我们有一个 Intel 系列的处理器，我们将会看到上面命令的结果将会出现 vmx 字样。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-KVM-Support.png" alt="检查 KVM 支持"></p><p><em>检查 KVM 支持</em></p><p>另外，你需要在你宿主机的硬件（BIOS 或 UEFI）中开启虚拟化。</p><p>现在，安装必要的软件包：</p><ul><li>qemu-kvm 是一个开源的虚拟机程序，为 KVM 虚拟机监视器提供硬件仿真，而 qemu-img 则提供了一个操纵磁盘镜像的命令行工具。</li><li>libvirt 包含与操作系统的虚拟化功能交互的工具。</li><li>libvirt-python 包含一个模块，它允许用 Python 写的应用来使用由 libvirt 提供的接口。</li><li>libguestfs-tools 包含各式各样的针对虚拟机的系统管理员命令行工具。</li><li>virt-install 包含针对虚拟机管理的其他命令行工具。</li></ul><p>命令如下：</p><pre><code># yum update &amp;&amp; yum install qemu-kvm qemu-img libvirt libvirt-python libguestfs-tools virt-install
</code></pre><p>一旦安装完成，请确保你启动并开启了 libvirtd 服务：</p><pre><code># systemctl start libvirtd.service
# systemctl enable libvirtd.service
</code></pre><p>默认情况下，每个虚拟机将只能够与放在相同的物理服务器上的虚拟机以及宿主机自身通信。要使得虚拟机能够访问位于局域网或因特网中的其他机器，我们需要像下面这样在我们的宿主机上设置一个桥接接口（比如说 br0）：</p><p>1、 添加下面的一行到我们的 NIC 主配置中（类似 <code>/etc/sysconfig/network-scripts/ifcfg-enp0s3</code> 这样的文件）：</p><pre><code>BRIDGE=br0
</code></pre><p>2、 使用下面的内容（注意，你可能需要更改 IP 地址，网关地址和 DNS 信息）为 br0 创建一个配置文件（<code>/etc/sysconfig/network-scripts/ifcfg-br0</code>）：</p><pre><code>DEVICE=br0
TYPE=Bridge
BOOTPROTO=static
IPADDR=192.168.0.18
NETMASK=255.255.255.0
GATEWAY=192.168.0.1
NM_CONTROLLED=no
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
NAME=br0
ONBOOT=yes
DNS1=8.8.8.8
DNS2=8.8.4.4
</code></pre><p>3、 最后在文件<code>/etc/sysctl.conf</code> 中设置：</p><pre><code>net.ipv4.ip_forward = 1
</code></pre><p>来开启包转发并加载更改到当前的内核配置中：</p><pre><code># sysctl -p
</code></pre>`,22)),i("p",null,[t[4]||(t[4]=e("注意，你可能还需要告诉 firewalld 让这类的流量应当被允许通过防火墙。假如你需要这样做，记住你可以参考这个系列的 ",-1)),n(r,{href:"https://linux.cn/article-6315-1.html"},{default:o(()=>[...t[3]||(t[3]=[e("使用 firewalld 和 iptables 来控制网络流量",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),t[34]||(t[34]=i("h3",{id:"创建虚拟机镜像",tabindex:"-1"},[e("创建虚拟机镜像 "),i("a",{class:"header-anchor",href:"#创建虚拟机镜像","aria-label":"Permalink to “创建虚拟机镜像”"},"​")],-1)),i("p",null,[t[7]||(t[7]=e("默认情况下，虚拟机镜像将会被创建到 ",-1)),t[8]||(t[8]=i("code",null,"/var/lib/libvirt/images",-1)),t[9]||(t[9]=e(" 中，且强烈建议你不要更改这个设定，除非你真的需要那么做且知道你在做什么，并能自己处理有关 SELinux 的设定（这个话题已经超出了本教程的讨论范畴，但你可以参考这个系列的第 13 部分 ",-1)),n(r,{href:"https://linux.cn/article-6339-1.html"},{default:o(()=>[...t[6]||(t[6]=[e("使用 SELinux 来进行强制访问控制",-1)])]),_:1}),t[10]||(t[10]=e("，假如你想更新你的知识的话）。",-1))]),t[35]||(t[35]=s(`<p>这意味着你需要确保你在文件系统中分配了必要的空间来容纳你的虚拟机。</p><p>下面的命令将使用位于 <code>/home/gacanepa/ISOs</code>目录下的 rhel-server-7.0-x86_64-dvd.iso 镜像文件和 br0 这个网桥来创建一个名为 <code>tecmint-virt01</code> 的虚拟机，它有一个虚拟 CPU，1 GB（=1024 MB）的 RAM，20 GB 的磁盘空间（由<code>/var/lib/libvirt/images/tecmint-virt01.img</code>所代表）：</p><pre><code># virt-install \\
--network bridge=br0
--name tecmint-virt01 \\
--ram=1024 \\
--vcpus=1 \\
--disk path=/var/lib/libvirt/images/tecmint-virt01.img,size=20 \\
--graphics none \\
--cdrom /home/gacanepa/ISOs/rhel-server-7.0-x86_64-dvd.iso
--extra-args=&quot;console=tty0 console=ttyS0,115200&quot;
</code></pre><p>假如安装文件位于一个 HTTP 服务器上，而不是存储在你磁盘中的镜像中，你必须将上面的 <code>-cdrom</code> 替换为 <code>-location</code>，并明确地指出在线存储仓库的地址。</p><p>至于上面的 <code>–graphics none</code> 选项，它告诉安装程序只以文本模式执行安装过程。假如你使用一个 GUI 界面和一个 VNC 窗口来访问主虚拟机控制台，则可以省略这个选项。最后，使用 <code>–extra-args</code> 参数，我们将传递内核启动参数给安装程序，以此来设置一个串行的虚拟机控制台。</p><p>现在，所安装的虚拟机应当可以作为一个正常的（真实的）服务来运行了。假如没有，请查看上面列出的步骤。</p><h3 id="管理虚拟机" tabindex="-1">管理虚拟机 <a class="header-anchor" href="#管理虚拟机" aria-label="Permalink to “管理虚拟机”">​</a></h3><p>作为一个系统管理员，还有一些典型的管理任务需要你在虚拟机上去完成。注：下面所有的命令都需要在你的宿主机上运行：</p><p><strong>1. 列出所有的虚拟机：</strong></p><pre><code># virsh list --all
</code></pre><p>你必须留意上面命令输出中的虚拟机 ID（尽管上面的命令还会返回虚拟机的名称和当前的状态），因为你需要它来执行有关某个虚拟机的大多数管理任务。</p><p><strong>2. 显示某个虚拟机的信息：</strong></p><pre><code># virsh dominfo [VM Id]
</code></pre><p><strong>3. 开启，重启或停止一个虚拟机操作系统：</strong></p><pre><code># virsh start | reboot | shutdown [VM Id]
</code></pre><p><strong>4. 假如网络无法连接且在宿主机上没有运行 X 服务器，可以使用下面的命令来访问虚拟机的串行控制台：</strong></p><pre><code># virsh console [VM Id]
</code></pre><p><strong>注</strong>：这需要你添加一个串行控制台配置信息到 <code>/etc/grub.conf</code> 文件中（参考刚才创建虚拟机时传递给<code>-extra-args</code>选项的参数）。</p><p><strong>5. 修改分配的内存或虚拟 CPU：</strong></p><p>首先，关闭虚拟机：</p><pre><code># virsh shutdown [VM Id]
</code></pre><p>为 RAM 编辑虚拟机的配置：</p><pre><code># virsh edit [VM Id]
</code></pre><p>然后更改</p><pre><code>&lt;memory&gt;[内存大小，注意不要加上方括号]&lt;/memory&gt;
</code></pre><p>使用新的设定重启虚拟机：</p><pre><code># virsh create /etc/libvirt/qemu/tecmint-virt01.xml
</code></pre><p>最后，可以使用下面的命令来动态地改变内存的大小：</p><pre><code># virsh setmem [VM Id] [内存大小，这里没有括号]
</code></pre><p>对于 CPU，使用：</p><pre><code># virsh edit [VM Id]
</code></pre><p>然后更改</p><pre><code>&lt;cpu&gt;[CPU 数目，这里没有括号]&lt;/cpu&gt;
</code></pre><p>至于更深入的命令和细节，请参考 RHEL 5 虚拟化指南（这个指南尽管有些陈旧，但包括了用于管理虚拟机的 virsh 命令的详尽清单）的第 26 章里的表 26.1。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,35)),i("p",null,[t[13]||(t[13]=e("在这篇文章中，我们涵盖了在 RHEL 7 中如何使用 KVM 和虚拟化的一些基本概念，这个话题是一个广泛且令人着迷的话题。并且我希望它能成为你在随后阅读官方的 ",-1)),n(r,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Virtualization_Getting_Started_Guide/index.html"},{default:o(()=>[...t[11]||(t[11]=[e("RHEL 虚拟化入门",-1)])]),_:1}),t[14]||(t[14]=e(" 和 ",-1)),n(r,{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Virtualization_Deployment_and_Administration_Guide/index.html"},{default:o(()=>[...t[12]||(t[12]=[e("RHEL 虚拟化部署和管理指南",-1)])]),_:1}),t[15]||(t[15]=e(" ，探索更高级的主题时的起点教程，并给你带来帮助。",-1))]),i("p",null,[t[17]||(t[17]=e("另外，为了分辨或拓展这里解释的某些概念，你还可以参考先前包含在 ",-1)),n(r,{href:"http://www.tecmint.com/install-and-configure-kvm-in-linux/"},{default:o(()=>[...t[16]||(t[16]=[e("KVM 系列",-1)])]),_:1}),t[18]||(t[18]=e(" 中的文章。",-1))]),t[36]||(t[36]=i("hr",null,null,-1)),i("p",null,[t[20]||(t[20]=e("via: ",-1)),n(r,{href:"http://www.tecmint.com/kvm-virtualization-basics-and-guest-administration/"},{default:o(()=>[...t[19]||(t[19]=[e("http://www.tecmint.com/kvm-virtualization-basics-and-guest-administration/",-1)])]),_:1})]),i("p",null,[t[24]||(t[24]=e("作者：",-1)),n(r,{href:"http://www.tecmint.com/author/gacanepa/"},{default:o(()=>[...t[21]||(t[21]=[e("Gabriel Cánepa",-1)])]),_:1}),t[25]||(t[25]=e(" 译者：",-1)),n(r,{href:"https://github.com/FSSlc"},{default:o(()=>[...t[22]||(t[22]=[e("FSSlc",-1)])]),_:1}),t[26]||(t[26]=e(" 校对：",-1)),n(r,{href:"https://github.com/wxy"},{default:o(()=>[...t[23]||(t[23]=[e("wxy",-1)])]),_:1})]),i("p",null,[t[29]||(t[29]=e("本文由 ",-1)),n(r,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[27]||(t[27]=[e("LCTT",-1)])]),_:1}),t[30]||(t[30]=e(" 原创翻译，",-1)),n(r,{href:"https://linux.cn/"},{default:o(()=>[...t[28]||(t[28]=[e("Linux中国",-1)])]),_:1}),t[31]||(t[31]=e(" 荣誉推出",-1))])])}const b=p(m,[["render",u]]);export{A as __pageData,b as default};
