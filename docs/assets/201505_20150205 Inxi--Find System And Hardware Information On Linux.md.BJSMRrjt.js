import{_ as s,a0 as d,w as a,s as l,I as t,x as n,a1 as i,A as o,ao as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"Inxi：获取Linux的系统和硬件信息 | LCTT x X-CMD","titleTemplate":false,"description":"Inxi：获取Linux的系统和硬件信息 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Inxi：获取Linux的系统和硬件信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Inxi：获取Linux的系统和硬件信息 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150205 Inxi--Find System And Hardware Information On Linux","title":"Inxi：获取Linux的系统和硬件信息","tag":"201505","desc":""},"relativePath":"201505/20150205 Inxi--Find System And Hardware Information On Linux.md","filePath":"[post].md"}'),u={name:"201505/20150205 Inxi--Find System And Hardware Information On Linux.md"};function x(m,e,c,g,h,f){const r=d("Link");return a(),l("div",null,[e[18]||(e[18]=t("h1",{id:"inxi-获取linux的系统和硬件信息",tabindex:"-1"},[n("Inxi：获取Linux的系统和硬件信息 "),t("a",{class:"header-anchor",href:"#inxi-获取linux的系统和硬件信息","aria-label":"Permalink to “Inxi：获取Linux的系统和硬件信息”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("我们已经展示了一些不同的",-1)),i(r,{href:"https://linux.cn/article-1947-1.html"},{default:o(()=>[...e[0]||(e[0]=[n("应用程序",-1)])]),_:1}),e[2]||(e[2]=n("和方法来获取Linux的系统和硬件信息。在这一系列里，我们将看到如何使用",-1)),e[3]||(e[3]=t("strong",null,"inxi",-1)),e[4]||(e[4]=n("来获取这些详情信息。在论坛技术支持中，它可以作为调试工具，迅速确定用户的系统配置和硬件信息。",-1))]),e[19]||(e[19]=p(`<p><strong>Inxi</strong>是一个可以获取完整的系统和硬件详情信息的命令行工具，内容包括：</p><ul><li>硬件</li><li>CPU</li><li>磁盘驱动器</li><li>Xorg</li><li>桌面环境</li><li>内核</li><li>GCC版本</li><li>进程</li><li>内存占用</li><li>和其他有用的信息</li></ul><h3 id="安装方法" tabindex="-1">安装方法 <a class="header-anchor" href="#安装方法" aria-label="Permalink to “安装方法”">​</a></h3><p>Inxi在多数现代GNU/Linux操作系统的默认软件仓库中。所以我们可以简单地运行下列命令安装。</p><p><strong>在基于Debian的发行版：</strong></p><pre><code>sudo apt-get install inxi
</code></pre><p><strong>在Fedora：</strong></p><pre><code>sudo yum install inxi
</code></pre><p><strong>在基于RHEL的发行版：</strong></p><p>安装EPEL软件仓库：</p><pre><code>sudo yum install epel-release
</code></pre><p>然后使用如下命令安装inxi：</p><pre><code>sudo yum install inxi
</code></pre><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to “使用方法”">​</a></h3><p>在终端运行如下命令可以获取系统的概况信息。</p><pre><code>inxi
</code></pre><p><strong>示例输出：</strong></p><pre><code>CPU~Dual core Intel Core i3-2350M CPU (-HT-MCP-) clocked at Min:800.000Mhz Max:1200.000Mhz Kernel~3.13.0-45-generic x86_64 Up~6:41 Mem~1537.7/3861.3MB HDD~500.1GB(52.5% used) Procs~183 Client~Shell inxi~1.9.17
</code></pre><p>当然，我们可以获取一个特定硬件的详情信息。比如获取<strong>声音/音频硬件详情信息</strong>，可以运行如下命令：</p><pre><code>inxi -A
</code></pre><p><strong>示例输出：</strong></p><pre><code>Audio:     Card: Intel 6 Series/C200 Series Family High Definition Audio Controller driver: snd_hda_intel 
           Sound: Advanced Linux Sound Architecture ver: k3.13.0-45-generic
</code></pre><p>很酷是吧？</p><p>同样的，你可以获取<strong>显卡</strong>的详情信息。</p><pre><code>inxi -G
</code></pre><p><strong>示例输出：</strong></p><pre><code>Graphics:  Card: Intel 2nd Generation Core Processor Family Integrated Graphics Controller 
           X.Org: 1.15.1 drivers: intel (unloaded: fbdev,vesa) Resolution: 1366x768@60.0hz 
           GLX Renderer: Mesa DRI Intel Sandybridge Mobile GLX Version: 3.0 Mesa 10.3.0
</code></pre><p>硬盘信息呢？也是可以的。运行如下命令来获取完整的<strong>硬盘</strong>信息。</p><pre><code>inxi -D
</code></pre><p><strong>示例输出：</strong></p><pre><code>Drives:    HDD Total Size: 500.1GB (52.5% used) 1: id: /dev/sda model: ST9601325BD size: 500.1GB
</code></pre><p>显示Bios和主板详情信息：</p><pre><code>inxi -M
</code></pre><p><strong>示例输出：</strong></p><pre><code>Machine:   System: Dell (portable) product: Inspiron N5050
           Mobo: Dell model: 01HXXJ version: A05 Bios: Dell version: A05 date: 08/03/2012
</code></pre><p>不仅是硬性详情信息，它也可以显示我们系统中的<strong>可用软件仓库列表</strong>。</p><pre><code>inxi -r
</code></pre><p><strong>示例输出：</strong></p><pre><code>Repos:     Active apt sources in file: /etc/apt/sources.list
           deb http://ubuntu.excellmedia.net/archive/ trusty main restricted
           deb-src http://ubuntu.excellmedia.net/archive/ trusty main restricted
           deb http://ubuntu.excellmedia.net/archive/ trusty-updates main restricted
           deb-src http://ubuntu.excellmedia.net/archive/ trusty-updates main restricted
           deb http://ubuntu.excellmedia.net/archive/ trusty universe
           .
           .
           Active apt sources in file: /etc/apt/sources.list.d/intellinuxgraphics.list
           deb https://download.01.org/gfx/ubuntu/14.04/main trusty main #Intel Graphics drivers
           Active apt sources in file: /etc/apt/sources.list.d/linrunner-tlp-trusty.list
           Active apt sources in file: /etc/apt/sources.list.d/wseverin-ppa-trusty.list
           deb http://ppa.launchpad.net/wseverin/ppa/ubuntu trusty main
</code></pre><p>Inxi还可以显示你所在位置的天气信息。感到意外吗？是的，它可以。</p><pre><code>inxi -W Erode,Tamilnadu
</code></pre><p>这里<strong>Erode</strong>是地区，<strong>Tamilnadu</strong>是印度的一个邦。</p><p>示例输出：</p><pre><code>Weather:   Conditions: 79 F (26 C) - Clear Time: February 4, 6:00 PM IST
</code></pre><h3 id="查看完整的硬件详情信息" tabindex="-1">查看完整的硬件详情信息 <a class="header-anchor" href="#查看完整的硬件详情信息" aria-label="Permalink to “查看完整的硬件详情信息”">​</a></h3><p>厌倦了逐一获取每种硬件的信息？你可以使用如下命令将所有信息一次列出：</p><pre><code>inxi -F
</code></pre><p><strong>示例输出：</strong></p><pre><code>System:    Host: sk Kernel: 3.13.0-45-generic x86_64 (64 bit) Desktop: LXDE (Openbox 3.5.2) Distro: Ubuntu 14.04 trusty
Machine:   System: Dell (portable) product: Inspiron N5050
           Mobo: Dell model: 01HXXJ version: A05 Bios: Dell version: A05 date: 08/03/2012
CPU:       Dual core Intel Core i3-2350M CPU (-HT-MCP-) cache: 3072 KB flags: (lm nx sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx) 
           Clock Speeds: 1: 800.00 MHz 2: 1000.00 MHz 3: 800.00 MHz 4: 800.00 MHz
Graphics:  Card: Intel 2nd Generation Core Processor Family Integrated Graphics Controller 
           X.Org: 1.15.1 drivers: intel (unloaded: fbdev,vesa) Resolution: 1366x768@60.0hz 
           GLX Renderer: Mesa DRI Intel Sandybridge Mobile GLX Version: 3.0 Mesa 10.3.0
Audio:     Card: Intel 6 Series/C200 Series Family High Definition Audio Controller driver: snd_hda_intel 
           Sound: Advanced Linux Sound Architecture ver: k3.13.0-45-generic
Network:   Card-1: Qualcomm Atheros AR9285 Wireless Network Adapter (PCI-Express) driver: ath9k 
           IF: wlan0 state: up mac: 
           Card-2: Realtek RTL8101E/RTL8102E PCI Express Fast Ethernet controller driver: r8169 
           IF: eth0 state: down mac: 
Drives:    HDD Total Size: 500.1GB (52.5% used) 1: id: /dev/sda model: ST9500325AS size: 500.1GB 
Partition: ID: / size: 455G used: 245G (57%) fs: ext4 ID: /boot size: 236M used: 159M (72%) fs: ext2 
           ID: swap-1 size: 4.19GB used: 0.00GB (0%) fs: swap 
RAID:      No RAID devices detected - /proc/mdstat and md_mod kernel raid module present
Sensors:   System Temperatures: cpu: 64.5C mobo: N/A 
           Fan Speeds (in rpm): cpu: N/A 
Info:      Processes: 186 Uptime: 6:52 Memory: 1547.2/3861.3MB Client: Shell (bash) inxi: 1.9.17
</code></pre><p>就像上面你看到的那样，inxi显示出了完整的硬件详情信息。</p><p>更多的细节可以参考man手册。</p><pre><code>man inxi
</code></pre><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>你在寻找一个可以显示完整的系统和硬件详情信息的简单工具吗？那么不用再找了，inxi会提供你所需要的。并且，它还是在你系统默认的软件仓库中的轻量级工具。你还想要更多东西吗？试一试它，你不会失望。</p><p>欢呼吧！</p><hr>`,56)),t("p",null,[e[6]||(e[6]=n("via: ",-1)),i(r,{href:"http://www.unixmen.com/inxi-find-system-hardware-information-linux/"},{default:o(()=>[...e[5]||(e[5]=[n("http://www.unixmen.com/inxi-find-system-hardware-information-linux/",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=n("作者：",-1)),i(r,{href:"http://www.unixmen.com/author/sk/"},{default:o(()=>[...e[7]||(e[7]=[n("SK",-1)])]),_:1}),e[11]||(e[11]=n(" 译者：",-1)),i(r,{href:"https://github.com/goreliu"},{default:o(()=>[...e[8]||(e[8]=[n("goreliu",-1)])]),_:1}),e[12]||(e[12]=n(" 校对：",-1)),i(r,{href:"https://github.com/wxy"},{default:o(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=n("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原创翻译，",-1)),i(r,{href:"http://linux.cn/"},{default:o(()=>[...e[14]||(e[14]=[n("Linux中国",-1)])]),_:1}),e[17]||(e[17]=n(" 荣誉推出",-1))])])}const v=s(u,[["render",x]]);export{b as __pageData,v as default};
