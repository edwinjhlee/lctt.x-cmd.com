import{_ as s,a0 as d,w as a,s as l,I as t,x as n,a1 as i,A as o,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"Inxi：獲取Linux的系統和硬件信息 | LCTT x X-CMD","titleTemplate":false,"description":"Inxi：獲取Linux的系統和硬件信息 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Inxi：獲取Linux的系統和硬件信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Inxi：獲取Linux的系統和硬件信息 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150205 Inxi--Find System And Hardware Information On Linux","title":"Inxi：獲取Linux的系統和硬件信息","tag":"201505","desc":""},"relativePath":"201505/20150205 Inxi--Find System And Hardware Information On Linux.md","filePath":"[post].md"}'),u={name:"201505/20150205 Inxi--Find System And Hardware Information On Linux.md"};function x(m,e,c,g,h,f){const r=d("Link");return a(),l("div",null,[e[18]||(e[18]=t("h1",{id:"inxi-獲取linux的系統和硬件信息",tabindex:"-1"},[n("Inxi：獲取Linux的系統和硬件信息 "),t("a",{class:"header-anchor",href:"#inxi-獲取linux的系統和硬件信息","aria-label":"Permalink to “Inxi：獲取Linux的系統和硬件信息”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("我們已經展示了一些不同的",-1)),i(r,{href:"https://linux.cn/article-1947-1.html"},{default:o(()=>[...e[0]||(e[0]=[n("應用程序",-1)])]),_:1}),e[2]||(e[2]=n("和方法來獲取Linux的系統和硬件信息。在這一系列裏，我們將看到如何使用",-1)),e[3]||(e[3]=t("strong",null,"inxi",-1)),e[4]||(e[4]=n("來獲取這些詳情信息。在論壇技術支持中，它可以作為調試工具，迅速確定用户的系統配置和硬件信息。",-1))]),e[19]||(e[19]=p(`<p><strong>Inxi</strong>是一個可以獲取完整的系統和硬件詳情信息的命令列工具，內容包括：</p><ul><li>硬件</li><li>CPU</li><li>磁盤驅動器</li><li>Xorg</li><li>桌面環境</li><li>內核</li><li>GCC版本</li><li>進程</li><li>內存佔用</li><li>和其他有用的信息</li></ul><h3 id="安裝方法" tabindex="-1">安裝方法 <a class="header-anchor" href="#安裝方法" aria-label="Permalink to “安裝方法”">​</a></h3><p>Inxi在多數現代GNU/Linux操作系統的默認軟件倉庫中。所以我們可以簡單地運行下列命令安裝。</p><p><strong>在基於Debian的發行版：</strong></p><pre><code>sudo apt-get install inxi
</code></pre><p><strong>在Fedora：</strong></p><pre><code>sudo yum install inxi
</code></pre><p><strong>在基於RHEL的發行版：</strong></p><p>安裝EPEL軟件倉庫：</p><pre><code>sudo yum install epel-release
</code></pre><p>然後使用如下命令安裝inxi：</p><pre><code>sudo yum install inxi
</code></pre><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to “使用方法”">​</a></h3><p>在終端運行如下命令可以獲取系統的概況信息。</p><pre><code>inxi
</code></pre><p><strong>示例輸出：</strong></p><pre><code>CPU~Dual core Intel Core i3-2350M CPU (-HT-MCP-) clocked at Min:800.000Mhz Max:1200.000Mhz Kernel~3.13.0-45-generic x86_64 Up~6:41 Mem~1537.7/3861.3MB HDD~500.1GB(52.5% used) Procs~183 Client~Shell inxi~1.9.17
</code></pre><p>當然，我們可以獲取一個特定硬件的詳情信息。比如獲取<strong>聲音/音頻硬件詳情信息</strong>，可以運行如下命令：</p><pre><code>inxi -A
</code></pre><p><strong>示例輸出：</strong></p><pre><code>Audio:     Card: Intel 6 Series/C200 Series Family High Definition Audio Controller driver: snd_hda_intel 
           Sound: Advanced Linux Sound Architecture ver: k3.13.0-45-generic
</code></pre><p>很酷是吧？</p><p>同樣的，你可以獲取<strong>顯卡</strong>的詳情信息。</p><pre><code>inxi -G
</code></pre><p><strong>示例輸出：</strong></p><pre><code>Graphics:  Card: Intel 2nd Generation Core Processor Family Integrated Graphics Controller 
           X.Org: 1.15.1 drivers: intel (unloaded: fbdev,vesa) Resolution: 1366x768@60.0hz 
           GLX Renderer: Mesa DRI Intel Sandybridge Mobile GLX Version: 3.0 Mesa 10.3.0
</code></pre><p>硬盤信息呢？也是可以的。運行如下命令來獲取完整的<strong>硬盤</strong>信息。</p><pre><code>inxi -D
</code></pre><p><strong>示例輸出：</strong></p><pre><code>Drives:    HDD Total Size: 500.1GB (52.5% used) 1: id: /dev/sda model: ST9601325BD size: 500.1GB
</code></pre><p>顯示Bios和主板詳情信息：</p><pre><code>inxi -M
</code></pre><p><strong>示例輸出：</strong></p><pre><code>Machine:   System: Dell (portable) product: Inspiron N5050
           Mobo: Dell model: 01HXXJ version: A05 Bios: Dell version: A05 date: 08/03/2012
</code></pre><p>不僅是硬性詳情信息，它也可以顯示我們系統中的<strong>可用軟件倉庫列表</strong>。</p><pre><code>inxi -r
</code></pre><p><strong>示例輸出：</strong></p><pre><code>Repos:     Active apt sources in file: /etc/apt/sources.list
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
</code></pre><p>Inxi還可以顯示你所在位置的天氣信息。感到意外嗎？是的，它可以。</p><pre><code>inxi -W Erode,Tamilnadu
</code></pre><p>這裏<strong>Erode</strong>是地區，<strong>Tamilnadu</strong>是印度的一個邦。</p><p>示例輸出：</p><pre><code>Weather:   Conditions: 79 F (26 C) - Clear Time: February 4, 6:00 PM IST
</code></pre><h3 id="查看完整的硬件詳情信息" tabindex="-1">查看完整的硬件詳情信息 <a class="header-anchor" href="#查看完整的硬件詳情信息" aria-label="Permalink to “查看完整的硬件詳情信息”">​</a></h3><p>厭倦了逐一獲取每種硬件的信息？你可以使用如下命令將所有信息一次列出：</p><pre><code>inxi -F
</code></pre><p><strong>示例輸出：</strong></p><pre><code>System:    Host: sk Kernel: 3.13.0-45-generic x86_64 (64 bit) Desktop: LXDE (Openbox 3.5.2) Distro: Ubuntu 14.04 trusty
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
</code></pre><p>就像上面你看到的那樣，inxi顯示出了完整的硬件詳情信息。</p><p>更多的細節可以參考man手冊。</p><pre><code>man inxi
</code></pre><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>你在尋找一個可以顯示完整的系統和硬件詳情信息的簡單工具嗎？那麼不用再找了，inxi會提供你所需要的。並且，它還是在你係統默認的軟件倉庫中的輕量級工具。你還想要更多東西嗎？試一試它，你不會失望。</p><p>歡呼吧！</p><hr>`,56)),t("p",null,[e[6]||(e[6]=n("via: ",-1)),i(r,{href:"http://www.unixmen.com/inxi-find-system-hardware-information-linux/"},{default:o(()=>[...e[5]||(e[5]=[n("http://www.unixmen.com/inxi-find-system-hardware-information-linux/",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=n("作者：",-1)),i(r,{href:"http://www.unixmen.com/author/sk/"},{default:o(()=>[...e[7]||(e[7]=[n("SK",-1)])]),_:1}),e[11]||(e[11]=n(" 譯者：",-1)),i(r,{href:"https://github.com/goreliu"},{default:o(()=>[...e[8]||(e[8]=[n("goreliu",-1)])]),_:1}),e[12]||(e[12]=n(" 校對：",-1)),i(r,{href:"https://github.com/wxy"},{default:o(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=n("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原創翻譯，",-1)),i(r,{href:"http://linux.cn/"},{default:o(()=>[...e[14]||(e[14]=[n("Linux中國",-1)])]),_:1}),e[17]||(e[17]=n(" 榮譽推出",-1))])])}const v=s(u,[["render",x]]);export{b as __pageData,v as default};
