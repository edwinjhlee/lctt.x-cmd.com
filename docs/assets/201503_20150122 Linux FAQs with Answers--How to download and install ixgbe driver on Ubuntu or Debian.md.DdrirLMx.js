import{_ as o,a0 as d,w as l,s as p,ao as s,I as t,x as i,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150122 Linux FAQs with Answers--How to download and install ixgbe driver on Ubuntu or Debian","title":"Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动","tag":"201503","desc":""},"relativePath":"201503/20150122 Linux FAQs with Answers--How to download and install ixgbe driver on Ubuntu or Debian.md","filePath":"[post].md"}'),b={name:"201503/20150122 Linux FAQs with Answers--How to download and install ixgbe driver on Ubuntu or Debian.md"};function c(u,e,x,g,f,m){const a=d("Link");return l(),p("div",null,[e[14]||(e[14]=s(`<h1 id="linux-有问必答-如何在ubuntu或者debian中编译安装ixgbe驱动" tabindex="-1">Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动 <a class="header-anchor" href="#linux-有问必答-如何在ubuntu或者debian中编译安装ixgbe驱动" aria-label="Permalink to “Linux 有问必答：如何在Ubuntu或者Debian中编译安装ixgbe驱动”">​</a></h1><blockquote><p><strong>提问</strong>： 我想为我的Intel 10G网卡下载安装最新的ixgbe驱动。我该如何在Ubuntu（或者Debian）中安装ixgbe驱动？</p></blockquote><p>Intel的10G网卡（比如，82598、 82599、 x540）由ixgbe驱动支持。现代的Linux发行版已经带有了ixgbe驱动，通过可加载模块的方式使用。然而，有些情况你希望在你机器上的自己编译安装ixgbe驱动，比如，你想要体验ixbge驱动的最新特性时。同样，内核默认自带的ixgbe驱动中的一个问题是不允许你自定义驱动的参数。如果你想要一个完全定制的ixgbe驱动（比如 RSS、多队列、中断阈值等等），你需要手动从源码编译ixgbe驱动。</p><p>这里是如何在Ubuntu、Debian或者它们的衍生版中下载安装ixgbe驱动的教程。</p><h3 id="第一步-安装前提" tabindex="-1">第一步： 安装前提 <a class="header-anchor" href="#第一步-安装前提" aria-label="Permalink to “第一步： 安装前提”">​</a></h3><p>安装之前，需要安装匹配的内核头文件和开发工具包。</p><pre><code>$ sudo apt-get install linux-headers-$(uname -r)
$ sudo apt-get install gcc make
</code></pre><h3 id="第二步-编译ixgbe驱动" tabindex="-1">第二步： 编译Ixgbe驱动 <a class="header-anchor" href="#第二步-编译ixgbe驱动" aria-label="Permalink to “第二步： 编译Ixgbe驱动”">​</a></h3>`,8)),t("p",null,[e[1]||(e[1]=i("从",-1)),n(a,{href:"http://sourceforge.net/projects/e1000/files/ixgbe%20stable/"},{default:r(()=>[...e[0]||(e[0]=[i("最新的ixgbe驱动",-1)])]),_:1}),e[2]||(e[2]=i("中下载源码。",-1))]),e[15]||(e[15]=s(`<pre><code>$ wget http://sourceforge.net/projects/e1000/files/ixgbe%20stable/3.23.2/ixgbe-3.23.2.tar.gz
</code></pre><p>如下编译ixgbe驱动。</p><pre><code>$ tar xvfvz ixgbe-3.23.2.tar.gz
$ cd ixgbe-3.23.2/src
$ make
</code></pre><h3 id="第三步-检查ixgbe驱动" tabindex="-1">第三步： 检查Ixgbe驱动 <a class="header-anchor" href="#第三步-检查ixgbe驱动" aria-label="Permalink to “第三步： 检查Ixgbe驱动”">​</a></h3><p>编译之后，你会看到在ixgbe-3.23.2/src目录下创建了<strong>ixgbe.ko</strong>。这就是会加载到内核之中的ixgbe驱动。</p><p>用modinfo命令检查内核模块的信息。注意你需要指定模块文件的绝对路径（比如 ./ixgbe.ko 或者 /home/xmodulo/ixgbe/ixgbe-3.23.2/src/ixgbe.ko）。输出中会显示ixgbe内核的版本。</p><pre><code>$ modinfo ./ixgbe.ko
</code></pre><hr><pre><code>filename:       /home/xmodulo/ixgbe/ixgbe-3.23.2/src/ixgbe.ko
version:        3.23.2
license:        GPL
description:    Intel(R) 10 Gigabit PCI Express Network Driver
author:         Intel Corporation, 
srcversion:     2ADA5E537923E983FA9DAE2
alias:          pci:v00008086d00001560sv*sd*bc*sc*i*
alias:          pci:v00008086d00001558sv*sd*bc*sc*i*
alias:          pci:v00008086d0000154Asv*sd*bc*sc*i*
alias:          pci:v00008086d00001557sv*sd*bc*sc*i*
alias:          pci:v00008086d0000154Fsv*sd*bc*sc*i*
alias:          pci:v00008086d0000154Dsv*sd*bc*sc*i*
alias:          pci:v00008086d00001528sv*sd*bc*sc*i*
alias:          pci:v00008086d000010F8sv*sd*bc*sc*i*
alias:          pci:v00008086d0000151Csv*sd*bc*sc*i*
alias:          pci:v00008086d00001529sv*sd*bc*sc*i*
alias:          pci:v00008086d0000152Asv*sd*bc*sc*i*
alias:          pci:v00008086d000010F9sv*sd*bc*sc*i*
alias:          pci:v00008086d00001514sv*sd*bc*sc*i*
alias:          pci:v00008086d00001507sv*sd*bc*sc*i*
alias:          pci:v00008086d000010FBsv*sd*bc*sc*i*
alias:          pci:v00008086d00001517sv*sd*bc*sc*i*
alias:          pci:v00008086d000010FCsv*sd*bc*sc*i*
alias:          pci:v00008086d000010F7sv*sd*bc*sc*i*
alias:          pci:v00008086d00001508sv*sd*bc*sc*i*
alias:          pci:v00008086d000010DBsv*sd*bc*sc*i*
alias:          pci:v00008086d000010F4sv*sd*bc*sc*i*
alias:          pci:v00008086d000010E1sv*sd*bc*sc*i*
alias:          pci:v00008086d000010F1sv*sd*bc*sc*i*
alias:          pci:v00008086d000010ECsv*sd*bc*sc*i*
alias:          pci:v00008086d000010DDsv*sd*bc*sc*i*
alias:          pci:v00008086d0000150Bsv*sd*bc*sc*i*
alias:          pci:v00008086d000010C8sv*sd*bc*sc*i*
alias:          pci:v00008086d000010C7sv*sd*bc*sc*i*
alias:          pci:v00008086d000010C6sv*sd*bc*sc*i*
alias:          pci:v00008086d000010B6sv*sd*bc*sc*i*
depends:        ptp,dca
vermagic:       3.11.0-19-generic SMP mod_unload modversions 
parm:           InterruptType:Change Interrupt Mode (0=Legacy, 1=MSI, 2=MSI-X), default IntMode (deprecated) (array of int)
parm:           IntMode:Change Interrupt Mode (0=Legacy, 1=MSI, 2=MSI-X), default 2 (array of int)
parm:           MQ:Disable or enable Multiple Queues, default 1 (array of int)
parm:           DCA:Disable or enable Direct Cache Access, 0=disabled, 1=descriptor only, 2=descriptor and data (array of int)
parm:           RSS:Number of Receive-Side Scaling Descriptor Queues, default 0=number of cpus (array of int)
parm:           VMDQ:Number of Virtual Machine Device Queues: 0/1 = disable, 2-16 enable (default=8) (array of int)
parm:           max_vfs:Number of Virtual Functions: 0 = disable (default), 1-63 = enable this many VFs (array of int)
parm:           VEPA:VEPA Bridge Mode: 0 = VEB (default), 1 = VEPA (array of int)
parm:           InterruptThrottleRate:Maximum interrupts per second, per vector, (0,1,956-488281), default 1 (array of int)
parm:           LLIPort:Low Latency Interrupt TCP Port (0-65535) (array of int)
parm:           LLIPush:Low Latency Interrupt on TCP Push flag (0,1) (array of int)
parm:           LLISize:Low Latency Interrupt on Packet Size (0-1500) (array of int)
parm:           LLIEType:Low Latency Interrupt Ethernet Protocol Type (array of int)
parm:           LLIVLANP:Low Latency Interrupt on VLAN priority threshold (array of int)
parm:           FdirPballoc:Flow Director packet buffer allocation level:
			1 = 8k hash filters or 2k perfect filters
			2 = 16k hash filters or 4k perfect filters
			3 = 32k hash filters or 8k perfect filters (array of int)
parm:           AtrSampleRate:Software ATR Tx packet sample rate (array of int)
parm:           FCoE:Disable or enable FCoE Offload, default 1 (array of int)
parm:           LRO:Large Receive Offload (0,1), default 1 = on (array of int)
parm:           allow_unsupported_sfp:Allow unsupported and untested SFP+ modules on 82599 based adapters, default 0 = Disable (array of int)
</code></pre><h3 id="第四步-测试ixgbe驱动" tabindex="-1">第四步： 测试Ixgbe驱动 <a class="header-anchor" href="#第四步-测试ixgbe驱动" aria-label="Permalink to “第四步： 测试Ixgbe驱动”">​</a></h3><p>在测试新的模块之前，如果你内核中已存在旧版本ixgbe模块的话你需要先移除它。</p><pre><code>$ sudo rmmod ixgbe
</code></pre><p>接着使用insmod命令插入新编译的ixgbe模块。确保指定一个模块的绝对路径。</p><pre><code>$ sudo insmod ./ixgbe.ko
</code></pre><p>如果上面的命令成功运行，就不会显示任何的信息。</p><p>如果你需要，你可以尝试加入额外的参数。比如，设置RSS的队列数量为16：</p><pre><code>$ sudo insmod ./ixgbe.ko RSS=16
</code></pre><p>检查<strong>/var/log/kern.log</strong>来查看ixgbe驱动是否成功激活。查看日志中的“Intel(R) 10 Gigabit PCI Express Network Driver”。ixgbe的版本信息应该和之前的modinfo的显示应该相同。</p><pre><code>Sep 18 14:48:52 spongebob kernel: [684717.906254] Intel(R) 10 Gigabit PCI Express Network Driver - version 3.22.3
</code></pre><p><img src="https://farm8.staticflickr.com/7583/16056721867_f06e152076_c.jpg" alt=""></p><h3 id="第五步-安装ixgbe驱动" tabindex="-1">第五步： 安装Ixgbe驱动 <a class="header-anchor" href="#第五步-安装ixgbe驱动" aria-label="Permalink to “第五步： 安装Ixgbe驱动”">​</a></h3><p>一旦你验证新的ixgbe驱动可以成功加载，最后一步是在你的系统中安装驱动。</p><pre><code>$ sudo make install
</code></pre><p><strong>ixgbe.ko</strong> 会安装在<code>/lib/modules/&lt;kernel-version&gt;/kernel/drivers/net/ethernet/intel/ixgbe</code> 下。</p><p>从这一步起，你可以用下面的modprobe命令加载ixgbe驱动了。注意你不必再指定绝对路径。</p><pre><code>$ sudo modprobe ixgbe
</code></pre><p>如果你希望在启动时加载ixgbe驱动，你可以在/etc/modules的最后加入“ixgbe”。</p><hr>`,28)),t("p",null,[e[4]||(e[4]=i("via: ",-1)),n(a,{href:"http://ask.xmodulo.com/download-install-ixgbe-driver-ubuntu-debian.html"},{default:r(()=>[...e[3]||(e[3]=[i("http://ask.xmodulo.com/download-install-ixgbe-driver-ubuntu-debian.html",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=i("译者：",-1)),n(a,{href:"https://github.com/geekpi"},{default:r(()=>[...e[5]||(e[5]=[i("geekpi",-1)])]),_:1}),e[8]||(e[8]=i(" 校对：",-1)),n(a,{href:"https://github.com/wxy"},{default:r(()=>[...e[6]||(e[6]=[i("wxy",-1)])]),_:1})]),t("p",null,[e[11]||(e[11]=i("本文由 ",-1)),n(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[9]||(e[9]=[i("LCTT",-1)])]),_:1}),e[12]||(e[12]=i(" 原创翻译，",-1)),n(a,{href:"http://linux.cn/"},{default:r(()=>[...e[10]||(e[10]=[i("Linux中国",-1)])]),_:1}),e[13]||(e[13]=i(" 荣誉推出",-1))])])}const k=o(b,[["render",c]]);export{L as __pageData,k as default};
