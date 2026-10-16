import{_ as x,a0 as b,w as g,s as I,I as r,x as i,a1 as o,A as t,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150413 Linux FAQs with Answers--How to compile ixgbe driver on CentOS, RHEL or Fedora","title":"Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动","tag":"201506","desc":""},"relativePath":"201506/20150413 Linux FAQs with Answers--How to compile ixgbe driver on CentOS, RHEL or Fedora.md","filePath":"[post].md"}'),S={name:"201506/20150413 Linux FAQs with Answers--How to compile ixgbe driver on CentOS, RHEL or Fedora.md"};function d(s,e,M,a,f,p){const n=b("Link");return g(),I("div",null,[e[18]||(e[18]=r("h1",{id:"linux-有问必答-如何在红帽系linux中编译ixgbe驱动",tabindex:"-1"},[i("Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动 "),r("a",{class:"header-anchor",href:"#linux-有问必答-如何在红帽系linux中编译ixgbe驱动","aria-label":"Permalink to “Linux 有问必答: 如何在红帽系linux中编译Ixgbe驱动”"},"​")],-1)),e[19]||(e[19]=r("blockquote",null,[r("p",null,[r("strong",null,"提问"),i("：我想要安装最新版的ixgbe 10G网卡驱动。在CentOS, Fedora 或 RHEL中，我应该如何编译ixgbe驱动？")])],-1)),e[20]||(e[20]=r("p",null,"想要在linux使用Intel的PCI Express 10G网卡（例如，82598，82599，x540），需要安装Ixgbe驱动。如今的Linux发行版都会预安装ixgbe的可加载模块，但是预安装的ixgbe驱动不是完整功能版。如果想要开启和定制所有10G网卡的功能（如，RSS、多队列、虚拟化功能、硬件 offload 等），需要从源码编译安装。",-1)),r("p",null,[e[1]||(e[1]=i("本文基于红帽系平台（如，CentOS，RHEL或Fedora）。Debian系平台，请看",-1)),o(n,{href:"https://linux.cn/article-5149-1.html"},{default:t(()=>[...e[0]||(e[0]=[i("这篇文章",-1)])]),_:1})]),e[21]||(e[21]=r("h3",{id:"第一步-安装依赖",tabindex:"-1"},[i("第一步: 安装依赖 "),r("a",{class:"header-anchor",href:"#第一步-安装依赖","aria-label":"Permalink to “第一步: 安装依赖”"},"​")],-1)),e[22]||(e[22]=r("p",null,"首先，安装必要的开发环境和安装匹配的内核头文件",-1)),e[23]||(e[23]=r("pre",null,[r("code",null,`$ sudo yum install gcc make
$ sudo yum install kernel-devel
`)],-1)),e[24]||(e[24]=r("h3",{id:"第二步-编译ixgbe",tabindex:"-1"},[i("第二步: 编译Ixgbe "),r("a",{class:"header-anchor",href:"#第二步-编译ixgbe","aria-label":"Permalink to “第二步: 编译Ixgbe”"},"​")],-1)),r("p",null,[e[3]||(e[3]=i("从",-1)),o(n,{href:"http://sourceforge.net/projects/e1000/files/ixgbe%20stable/"},{default:t(()=>[...e[2]||(e[2]=[i("官方页面",-1)])]),_:1}),e[4]||(e[4]=i("下载最新Ixgbe源码",-1))]),e[25]||(e[25]=l(`<pre><code>$ wget http://downloads.sourceforge.net/project/e1000/ixgbe%20stable/3.23.2/ixgbe-3.23.2.tar.gz 
</code></pre><p>请检查支持的内核版本。例如，Ixgbe3.23.2版本支持Linux内核版本2.6.18到3.18.1。</p><p>提取压缩包并编译</p><pre><code>$ tar -xvf ixgbe-3.23.2.tar.gz
$ cd ixgbe-3.23.2/src
$ make 
</code></pre><p>如果成功，可以在当前目录找到编译完成的驱动（ixgbe.ko）。</p><p>可以运行这个命令来查看编译信息：</p><pre><code>$ modinfo ./ixgbe.ko 
</code></pre><p>将会输出一个Ixgbe驱动的可用参数列表</p><p><img src="https://farm9.staticflickr.com/8789/16429483653_b9b6e6cd7f_c.jpg" alt=""></p><h3 id="第三步-加载-ixgbe-驱动" tabindex="-1">第三步: 加载 Ixgbe 驱动 <a class="header-anchor" href="#第三步-加载-ixgbe-驱动" aria-label="Permalink to “第三步: 加载 Ixgbe 驱动”">​</a></h3><p>这步准备加载已经编译好的驱动。</p><p>如果系统已经加载了Ixgbe驱动，首先需要卸载掉老版本。否则，新版本不能加载。</p><pre><code>$ sudo rmmod ixgbe.ko
</code></pre><p>然后插入编译完成的驱动到内核中：</p><pre><code>$ sudo insmod ./ixgbe.ko
</code></pre><p>同时，你可以设置启动参数</p><pre><code>$ sudo insmod ./ixgbe.ko FdirPballoc=3 RSS=16
</code></pre><p>验证驱动是否加载成功，使用dmesg命令，查看其输出</p><pre><code>$ dmesg 
</code></pre><hr><pre><code>Intel(R) 10 Gigabit PCI Express Network Driver - version 3.23.2
Copyright (c) 1999-2014 Intel Corporation.
ixgbe 0000:21:00.0: PCI INT A -&gt; GSI 64 (level, low) -&gt; IRQ 64
ixgbe 0000:21:00.0: setting latency timer to 64
ixgbe: Receive-Side Scaling (RSS) set to 16
ixgbe: Flow Director packet buffer allocation set to 3
ixgbe: 0000:21:00.0: ixgbe_check_options: Flow Director will be allocated 256kB of packet buffer
ixgbe: 0000:21:00.0: ixgbe_check_options: FCoE Offload feature enabled
ixgbe 0000:21:00.0: irq 87 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 88 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 89 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 90 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 91 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 92 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 93 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 94 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 95 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 96 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 97 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 98 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 99 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 100 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 101 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 102 for MSI/MSI-X
ixgbe 0000:21:00.0: irq 103 for MSI/MSI-X
ixgbe 0000:21:00.0: eth3: DCA registration failed: -1
ixgbe 0000:21:00.0: PCI Express bandwidth of 32GT/s available
ixgbe 0000:21:00.0: (Speed:5.0GT/s, Width: x8, Encoding Loss:20%)
ixgbe 0000:21:00.0: eth3: MAC: 2, PHY: 9, SFP+: 3, PBA No: E68793-006
ixgbe 0000:21:00.0: 90:e2:ba:5b:e9:1c
ixgbe 0000:21:00.0: eth3: Enabled Features: RxQ: 16 TxQ: 16 FdirHash RSC 
ixgbe 0000:21:00.0: eth3: Intel(R) 10 Gigabit Network Connection
ixgbe 0000:21:00.1: PCI INT B -&gt; GSI 68 (level, low) -&gt; IRQ 68
ixgbe 0000:21:00.1: setting latency timer to 64
ixgbe: 0000:21:00.1: ixgbe_check_options: FCoE Offload feature enabled
ixgbe 0000:21:00.0: registered PHC device on eth3
ixgbe 0000:21:00.1: irq 104 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 105 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 106 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 107 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 108 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 109 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 110 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 111 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 112 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 113 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 114 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 115 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 116 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 117 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 118 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 119 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 120 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 121 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 122 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 123 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 124 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 125 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 126 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 127 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 128 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 129 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 130 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 131 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 132 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 133 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 134 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 135 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 136 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 137 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 138 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 139 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 140 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 141 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 142 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 143 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 144 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 145 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 146 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 147 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 148 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 149 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 150 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 151 for MSI/MSI-X
ixgbe 0000:21:00.1: irq 152 for MSI/MSI-X
ADDRCONF(NETDEV_UP): eth3: link is not ready
8021q: adding VLAN 0 to HW filter on device eth3
ixgbe 0000:21:00.1: eth4: DCA registration failed: -1
ixgbe 0000:21:00.1: PCI Express bandwidth of 32GT/s available
ixgbe 0000:21:00.1: (Speed:5.0GT/s, Width: x8, Encoding Loss:20%)
ixgbe 0000:21:00.1: eth4: MAC: 2, PHY: 9, SFP+: 4, PBA No: E68793-006
ixgbe 0000:21:00.1: 90:e2:ba:5b:e9:1e
ixgbe 0000:21:00.1: eth4: Enabled Features: RxQ: 48 TxQ: 48 FdirHash RSC 
ixgbe 0000:21:00.1: eth4: Intel(R) 10 Gigabit Network Connection
ixgbe 0000:21:00.0: eth3: detected SFP+: 3
ixgbe 0000:21:00.1: registered PHC device on eth4
ADDRCONF(NETDEV_UP): eth4: link is not ready
8021q: adding VLAN 0 to HW filter on device eth4
ixgbe 0000:21:00.1: eth4: detected SFP+: 4
ixgbe 0000:21:00.0: eth3: NIC Link is Up 10 Gbps, Flow Control: RX/TX
ADDRCONF(NETDEV_CHANGE): eth3: link becomes ready
ixgbe 0000:21:00.1: eth4: NIC Link is Up 10 Gbps, Flow Control: RX/TX
ADDRCONF(NETDEV_CHANGE): eth4: link becomes ready
eth3: no IPv6 routers present
eth4: no IPv6 routers present
</code></pre><h3 id="第四步-安装ixgbe驱动" tabindex="-1">第四步: 安装Ixgbe驱动 <a class="header-anchor" href="#第四步-安装ixgbe驱动" aria-label="Permalink to “第四步: 安装Ixgbe驱动”">​</a></h3><p>当确认驱动已经加载后，就可以安装驱动到系统中了</p><pre><code>$ sudo make install
</code></pre><p>ixgbe.ko将会安装在下列目录</p><pre><code>/lib/modules/&lt;kernel-version&gt;/kernel/drivers/net/ixgbe
</code></pre><p>此时，编译好的驱动将在启动时自动加载，也可以通过运行命令加载它：</p><pre><code>$ sudo modprobe ixgbe 
</code></pre><p><img src="https://farm9.staticflickr.com/8760/16863416809_804dea1491_c.jpg" alt=""></p><hr>`,30)),r("p",null,[e[6]||(e[6]=i("via: ",-1)),o(n,{href:"http://ask.xmodulo.com/compile-ixgbe-driver-centos-rhel-fedora.html"},{default:t(()=>[...e[5]||(e[5]=[i("http://ask.xmodulo.com/compile-ixgbe-driver-centos-rhel-fedora.html",-1)])]),_:1})]),r("p",null,[e[10]||(e[10]=i("作者：",-1)),o(n,{href:"http://ask.xmodulo.com/author/nanni"},{default:t(()=>[...e[7]||(e[7]=[i("Dan Nanni",-1)])]),_:1}),e[11]||(e[11]=i(" 译者：",-1)),o(n,{href:"http://vicyu.net"},{default:t(()=>[...e[8]||(e[8]=[i("Vic020",-1)])]),_:1}),e[12]||(e[12]=i(" 校对：",-1)),o(n,{href:"https://github.com/wxy"},{default:t(()=>[...e[9]||(e[9]=[i("wxy",-1)])]),_:1})]),r("p",null,[e[15]||(e[15]=i("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[13]||(e[13]=[i("LCTT",-1)])]),_:1}),e[16]||(e[16]=i(" 原创翻译，",-1)),o(n,{href:"http://linux.cn/"},{default:t(()=>[...e[14]||(e[14]=[i("Linux中国",-1)])]),_:1}),e[17]||(e[17]=i(" 荣誉推出",-1))])])}const m=x(S,[["render",d]]);export{q as __pageData,m as default};
