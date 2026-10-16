import{_ as o,a0 as d,w as l,s as p,ao as s,I as t,x as i,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150122 Linux FAQs with Answers--How to download and install ixgbe driver on Ubuntu or Debian","title":"Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動","tag":"201503","desc":""},"relativePath":"201503/20150122 Linux FAQs with Answers--How to download and install ixgbe driver on Ubuntu or Debian.md","filePath":"[post].md"}'),b={name:"201503/20150122 Linux FAQs with Answers--How to download and install ixgbe driver on Ubuntu or Debian.md"};function c(u,e,x,g,f,m){const a=d("Link");return l(),p("div",null,[e[14]||(e[14]=s(`<h1 id="linux-有問必答-如何在ubuntu或者debian中編譯安裝ixgbe驅動" tabindex="-1">Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動 <a class="header-anchor" href="#linux-有問必答-如何在ubuntu或者debian中編譯安裝ixgbe驅動" aria-label="Permalink to “Linux 有問必答：如何在Ubuntu或者Debian中編譯安裝ixgbe驅動”">​</a></h1><blockquote><p><strong>提問</strong>： 我想為我的Intel 10G網卡下載安裝最新的ixgbe驅動。我該如何在Ubuntu（或者Debian）中安裝ixgbe驅動？</p></blockquote><p>Intel的10G網卡（比如，82598、 82599、 x540）由ixgbe驅動支持。現代的Linux發行版已經帶有了ixgbe驅動，通過可加載模組的方式使用。然而，有些情況你希望在你機器上的自己編譯安裝ixgbe驅動，比如，你想要體驗ixbge驅動的最新特性時。同樣，內核默認自帶的ixgbe驅動中的一個問題是不允許你自定義驅動的參數。如果你想要一個完全定製的ixgbe驅動（比如 RSS、多隊列、中斷閾值等等），你需要手動從源碼編譯ixgbe驅動。</p><p>這裏是如何在Ubuntu、Debian或者它們的衍生版中下載安裝ixgbe驅動的教程。</p><h3 id="第一步-安裝前提" tabindex="-1">第一步： 安裝前提 <a class="header-anchor" href="#第一步-安裝前提" aria-label="Permalink to “第一步： 安裝前提”">​</a></h3><p>安裝之前，需要安裝匹配的內核頭文件和開發工具包。</p><pre><code>$ sudo apt-get install linux-headers-$(uname -r)
$ sudo apt-get install gcc make
</code></pre><h3 id="第二步-編譯ixgbe驅動" tabindex="-1">第二步： 編譯Ixgbe驅動 <a class="header-anchor" href="#第二步-編譯ixgbe驅動" aria-label="Permalink to “第二步： 編譯Ixgbe驅動”">​</a></h3>`,8)),t("p",null,[e[1]||(e[1]=i("從",-1)),n(a,{href:"http://sourceforge.net/projects/e1000/files/ixgbe%20stable/"},{default:r(()=>[...e[0]||(e[0]=[i("最新的ixgbe驅動",-1)])]),_:1}),e[2]||(e[2]=i("中下載源碼。",-1))]),e[15]||(e[15]=s(`<pre><code>$ wget http://sourceforge.net/projects/e1000/files/ixgbe%20stable/3.23.2/ixgbe-3.23.2.tar.gz
</code></pre><p>如下編譯ixgbe驅動。</p><pre><code>$ tar xvfvz ixgbe-3.23.2.tar.gz
$ cd ixgbe-3.23.2/src
$ make
</code></pre><h3 id="第三步-檢查ixgbe驅動" tabindex="-1">第三步： 檢查Ixgbe驅動 <a class="header-anchor" href="#第三步-檢查ixgbe驅動" aria-label="Permalink to “第三步： 檢查Ixgbe驅動”">​</a></h3><p>編譯之後，你會看到在ixgbe-3.23.2/src目錄下創建了<strong>ixgbe.ko</strong>。這就是會加載到內核之中的ixgbe驅動。</p><p>用modinfo命令檢查內核模組的信息。注意你需要指定模組文件的絕對路徑（比如 ./ixgbe.ko 或者 /home/xmodulo/ixgbe/ixgbe-3.23.2/src/ixgbe.ko）。輸出中會顯示ixgbe內核的版本。</p><pre><code>$ modinfo ./ixgbe.ko
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
</code></pre><h3 id="第四步-測試ixgbe驅動" tabindex="-1">第四步： 測試Ixgbe驅動 <a class="header-anchor" href="#第四步-測試ixgbe驅動" aria-label="Permalink to “第四步： 測試Ixgbe驅動”">​</a></h3><p>在測試新的模組之前，如果你內核中已存在舊版本ixgbe模組的話你需要先移除它。</p><pre><code>$ sudo rmmod ixgbe
</code></pre><p>接着使用insmod命令插入新編譯的ixgbe模組。確保指定一個模組的絕對路徑。</p><pre><code>$ sudo insmod ./ixgbe.ko
</code></pre><p>如果上面的命令成功運行，就不會顯示任何的信息。</p><p>如果你需要，你可以嘗試加入額外的參數。比如，設置RSS的隊列數量為16：</p><pre><code>$ sudo insmod ./ixgbe.ko RSS=16
</code></pre><p>檢查<strong>/var/log/kern.log</strong>來查看ixgbe驅動是否成功激活。查看日誌中的“Intel(R) 10 Gigabit PCI Express Network Driver”。ixgbe的版本信息應該和之前的modinfo的顯示應該相同。</p><pre><code>Sep 18 14:48:52 spongebob kernel: [684717.906254] Intel(R) 10 Gigabit PCI Express Network Driver - version 3.22.3
</code></pre><p><img src="https://farm8.staticflickr.com/7583/16056721867_f06e152076_c.jpg" alt=""></p><h3 id="第五步-安裝ixgbe驅動" tabindex="-1">第五步： 安裝Ixgbe驅動 <a class="header-anchor" href="#第五步-安裝ixgbe驅動" aria-label="Permalink to “第五步： 安裝Ixgbe驅動”">​</a></h3><p>一旦你驗證新的ixgbe驅動可以成功加載，最後一步是在你的系統中安裝驅動。</p><pre><code>$ sudo make install
</code></pre><p><strong>ixgbe.ko</strong> 會安裝在<code>/lib/modules/&lt;kernel-version&gt;/kernel/drivers/net/ethernet/intel/ixgbe</code> 下。</p><p>從這一步起，你可以用下面的modprobe命令加載ixgbe驅動了。注意你不必再指定絕對路徑。</p><pre><code>$ sudo modprobe ixgbe
</code></pre><p>如果你希望在啓動時加載ixgbe驅動，你可以在/etc/modules的最後加入“ixgbe”。</p><hr>`,28)),t("p",null,[e[4]||(e[4]=i("via: ",-1)),n(a,{href:"http://ask.xmodulo.com/download-install-ixgbe-driver-ubuntu-debian.html"},{default:r(()=>[...e[3]||(e[3]=[i("http://ask.xmodulo.com/download-install-ixgbe-driver-ubuntu-debian.html",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=i("譯者：",-1)),n(a,{href:"https://github.com/geekpi"},{default:r(()=>[...e[5]||(e[5]=[i("geekpi",-1)])]),_:1}),e[8]||(e[8]=i(" 校對：",-1)),n(a,{href:"https://github.com/wxy"},{default:r(()=>[...e[6]||(e[6]=[i("wxy",-1)])]),_:1})]),t("p",null,[e[11]||(e[11]=i("本文由 ",-1)),n(a,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[9]||(e[9]=[i("LCTT",-1)])]),_:1}),e[12]||(e[12]=i(" 原創翻譯，",-1)),n(a,{href:"http://linux.cn/"},{default:r(()=>[...e[10]||(e[10]=[i("Linux中國",-1)])]),_:1}),e[13]||(e[13]=i(" 榮譽推出",-1))])])}const k=o(b,[["render",c]]);export{L as __pageData,k as default};
