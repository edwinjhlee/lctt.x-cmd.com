import{_ as t,a0 as o,w as r,s as d,I as i,x as n,a1 as p,A as e,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本 | LCTT x X-CMD","titleTemplate":false,"description":"ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本 | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本 | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170606 ps_mem – A Simple Python Script To Report Core Memory Usage Accurately In Linux","title":"ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本","tag":"201706","desc":""},"relativePath":"201706/20170606 ps_mem – A Simple Python Script To Report Core Memory Usage Accurately In Linux.md","filePath":"[post].md"}'),u={name:"201706/20170606 ps_mem – A Simple Python Script To Report Core Memory Usage Accurately In Linux.md"};function B(m,s,M,c,g,h){const a=o("Link");return r(),d("div",null,[s[37]||(s[37]=i("h1",{id:"ps-mem-一個用於精確報告-linux-核心內存用量的簡單-python-腳本",tabindex:"-1"},[n("ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本 "),i("a",{class:"header-anchor",href:"#ps-mem-一個用於精確報告-linux-核心內存用量的簡單-python-腳本","aria-label":"Permalink to “ps_mem：一個用於精確報告 Linux 核心內存用量的簡單 Python 腳本”"},"​")],-1)),i("p",null,[p(a,{href:"https://github.com/pixelb/ps_mem"},{default:e(()=>[...s[0]||(s[0]=[n("ps_mem",-1)])]),_:1}),s[1]||(s[1]=n(" 是一個可以幫助我們精確獲取 Linux 中各個程序核心內存使用情況的簡單 python 腳本。雖然在 Linux 上有很多可用於查看內存使用情況的工具，比如 ",-1)),s[2]||(s[2]=i("code",null,"free",-1)),s[3]||(s[3]=n("、",-1)),s[4]||(s[4]=i("code",null,"vmstat",-1)),s[5]||(s[5]=n("、",-1)),s[6]||(s[6]=i("code",null,"smem",-1)),s[7]||(s[7]=n("、",-1)),s[8]||(s[8]=i("code",null,"top",-1)),s[9]||(s[9]=n(" 等，但這個工具和其它的區別在於其精確顯示核心內存使用情況。",-1))]),s[38]||(s[38]=i("p",null,"它會分別計算一個程序私有內存總量和共享內存總量，並以更準確的方式給出了總的內存使用量。很明顯的，它將幫助大家知道系統中哪個程序正在佔用更多的內存。",-1)),s[39]||(s[39]=i("p",null,[n("你可以通過包管理器、"),i("code",null,"pip"),n(" 、或直接運行 "),i("code",null,"ps_mem.py"),n(" 腳本等多種方式來安裝 "),i("code",null,"ps_mem"),n(" 工具。需要注意的是：需要有 root 權限。")],-1)),s[40]||(s[40]=i("p",null,"另外，推薦閲讀以下內存工具：",-1)),i("ul",null,[i("li",null,[p(a,{href:"http://www.2daygeek.com/free-command-to-check-memory-usage-statistics-in-linux/"},{default:e(()=>[...s[10]||(s[10]=[n("free – 一個在 Linux 上查看內存用量統計（可用和已用）的標準工具",-1)])]),_:1})]),i("li",null,[p(a,{href:"http://www.2daygeek.com/smem-linux-memory-usage-statistics-reporting-tool/"},{default:e(()=>[...s[11]||(s[11]=[n("smem – Linux 內存報告/統計工具",-1)])]),_:1})]),i("li",null,[p(a,{href:"http://www.2daygeek.com/linux-vmstat-command-examples-tool-report-virtual-memory-statistics/"},{default:e(()=>[...s[12]||(s[12]=[n("vmstat – 一個好用的用於虛擬內存統計的標準工具",-1)])]),_:1})])]),s[41]||(s[41]=i("h3",{id:"通過包管理器安裝-ps-mem",tabindex:"-1"},[n("通過包管理器安裝 ps_mem "),i("a",{class:"header-anchor",href:"#通過包管理器安裝-ps-mem","aria-label":"Permalink to “通過包管理器安裝 ps_mem”"},"​")],-1)),s[42]||(s[42]=i("p",null,"基於 RHEL 的系統默認倉庫就包含 ps_mem 工具，所以我們可以簡單地通過包管理器進行安裝。",-1)),i("p",null,[s[14]||(s[14]=n("對於 RHEL/CentOS ，使用 ",-1)),p(a,{href:"http://www.2daygeek.com/yum-command-examples/"},{default:e(()=>[...s[13]||(s[13]=[n("yum 包管理器",-1)])]),_:1}),s[15]||(s[15]=n(" 安裝 ",-1)),s[16]||(s[16]=i("code",null,"ps_mem",-1)),s[17]||(s[17]=n(" 包：",-1))]),s[43]||(s[43]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo yum install ps_mem</span></span></code></pre></div>',1)),i("p",null,[s[19]||(s[19]=n("對於Fedora ，使用 ",-1)),p(a,{href:"http://www.2daygeek.com/dnf-command-examples/"},{default:e(()=>[...s[18]||(s[18]=[n("dnf 包管理器",-1)])]),_:1}),s[20]||(s[20]=n(" 安裝 ps_mem 包：",-1))]),s[44]||(s[44]=l('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install ps_mem</span></span></code></pre></div>',1)),i("p",null,[s[22]||(s[22]=n("對於 Arch Linux ，使用 ",-1)),p(a,{href:"http://www.2daygeek.com/pacman-command-examples/"},{default:e(()=>[...s[21]||(s[21]=[n("pacman 包管理器",-1)])]),_:1}),s[23]||(s[23]=n(" 安裝 ps_mem 包：",-1))]),s[45]||(s[45]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pacman -S ps_mem</span></span></code></pre></div><h4 id="通過-pip-安裝-ps-mem" tabindex="-1">通過 pip 安裝 ps_mem <a class="header-anchor" href="#通過-pip-安裝-ps-mem" aria-label="Permalink to “通過 pip 安裝 ps_mem”">​</a></h4><p><code>pip</code> 是在 Linux 上推薦使用的一種安裝 Python 包的工具。可以使用 <code>pip</code> 命令而不是包管理器去獲取最新的版本。使用 <code>pip</code> 包前，請確保你的系統上已安裝過 <code>pip</code> 包。否則，先使用發行版本的包管理器安裝 <code>python-pip</code> 包。</p><p>對於基於 Debian 的系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install python-pip</span></span></code></pre></div><p>對於基於 RHEL/CentOS 的系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo yum install python-pip</span></span></code></pre></div><p>對於 Fedora</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install python-pip</span></span></code></pre></div><p>對於 openSUSE</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo zypper install python-pip</span></span></code></pre></div><p>對於基於 Arch Linux 的系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pacman -S python-pip</span></span></code></pre></div><p>最後，在 Linux 上運行 <code>pip</code> 工具安裝 <code>ps_mem</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo pip install ps_mem</span></span></code></pre></div><h3 id="直接運行-ps-mem-py-腳本" tabindex="-1">直接運行 ps_mem.py 腳本 <a class="header-anchor" href="#直接運行-ps-mem-py-腳本" aria-label="Permalink to “直接運行 ps_mem.py 腳本”">​</a></h3><p>我們也可以從開發者 github 頁面下載文件，並直接運行 <code>ps_mem.py</code> 腳本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ git clone https://github.com/pixelb/ps_mem.git &amp;&amp; cd ps_mem</span></span>
<span class="line"><span>$ sudo python ps_mem.py</span></span></code></pre></div><h3 id="ps-mem-使用方法" tabindex="-1">ps_mem 使用方法 <a class="header-anchor" href="#ps-mem-使用方法" aria-label="Permalink to “ps_mem 使用方法”">​</a></h3><p>不帶任何參數直接運行 <code>ps_mem</code> 以精確獲取每個程序的的核心內存使用情況。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ps_mem</span></span>
<span class="line"><span> Private  +   Shared  =  RAM used	Program</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  1.6 MiB + 438.5 KiB =   2.1 MiB	packagekitd</span></span>
<span class="line"><span>  1.7 MiB + 498.0 KiB =   2.1 MiB	indicator-application-service</span></span>
<span class="line"><span>912.0 KiB +   1.3 MiB =   2.2 MiB	window-stack-bridge</span></span>
<span class="line"><span>  2.0 MiB + 350.5 KiB =   2.3 MiB	gnome-keyring-daemon</span></span>
<span class="line"><span>  1.8 MiB + 575.0 KiB =   2.3 MiB	whoopsie</span></span>
<span class="line"><span>  2.4 MiB + 304.5 KiB =   2.7 MiB	systemd-journald</span></span>
<span class="line"><span>  2.7 MiB + 157.5 KiB =   2.8 MiB	ibus-engine-simple</span></span>
<span class="line"><span>  2.7 MiB + 182.0 KiB =   2.9 MiB	ibus-dconf</span></span>
<span class="line"><span>  2.7 MiB + 332.5 KiB =   3.0 MiB	NetworkManager</span></span>
<span class="line"><span>  3.1 MiB + 169.5 KiB =   3.2 MiB	polkitd</span></span>
<span class="line"><span>  1.9 MiB +   1.7 MiB =   3.6 MiB	systemd (2)</span></span>
<span class="line"><span>  3.4 MiB + 172.5 KiB =   3.6 MiB	deja-dup-monitor</span></span>
<span class="line"><span>  2.9 MiB + 685.0 KiB =   3.6 MiB	zeitgeist-datahub</span></span>
<span class="line"><span>  2.9 MiB + 848.0 KiB =   3.7 MiB	python2.7</span></span>
<span class="line"><span>  3.5 MiB + 442.0 KiB =   4.0 MiB	dbus-daemon (3)</span></span>
<span class="line"><span>  3.2 MiB + 951.0 KiB =   4.1 MiB	evolution-addressbook-factory</span></span>
<span class="line"><span>  3.9 MiB + 435.0 KiB =   4.3 MiB	lightdm (2)</span></span>
<span class="line"><span>  3.7 MiB + 826.5 KiB =   4.5 MiB	polkit-gnome-authentication-agent-1</span></span>
<span class="line"><span>  3.7 MiB + 853.0 KiB =   4.6 MiB	unity-fallback-mount-helper</span></span>
<span class="line"><span>  3.7 MiB + 884.0 KiB =   4.6 MiB	ibus-x11</span></span>
<span class="line"><span>  4.1 MiB + 590.5 KiB =   4.6 MiB	indicator-sound-service</span></span>
<span class="line"><span>  4.5 MiB + 167.0 KiB =   4.7 MiB	udisksd</span></span>
<span class="line"><span>  4.3 MiB + 571.0 KiB =   4.9 MiB	gnome-session-binary</span></span>
<span class="line"><span>  4.5 MiB + 519.0 KiB =   5.0 MiB	zeitgeist-fts</span></span>
<span class="line"><span>  4.2 MiB + 900.5 KiB =   5.1 MiB	indicator-printers-service</span></span>
<span class="line"><span>  4.1 MiB +   1.0 MiB =   5.1 MiB	bash (2)</span></span>
<span class="line"><span>  3.9 MiB +   1.2 MiB =   5.2 MiB	update-notifier</span></span>
<span class="line"><span>  4.8 MiB + 426.0 KiB =   5.2 MiB	pulseaudio</span></span>
<span class="line"><span>  4.5 MiB +   1.5 MiB =   6.0 MiB	url-dispatcher</span></span>
<span class="line"><span>  4.3 MiB +   1.7 MiB =   6.0 MiB	python3.5</span></span>
<span class="line"><span>  5.2 MiB + 856.5 KiB =   6.1 MiB	evolution-addressbook-factory-subprocess</span></span>
<span class="line"><span>  5.6 MiB + 494.5 KiB =   6.1 MiB	colord</span></span>
<span class="line"><span>  5.0 MiB +   1.2 MiB =   6.2 MiB	bamfdaemon</span></span>
<span class="line"><span>  5.7 MiB +   1.1 MiB =   6.8 MiB	evolution-source-registry</span></span>
<span class="line"><span>  5.6 MiB +   1.3 MiB =   6.9 MiB	indicator-keyboard-service</span></span>
<span class="line"><span>  5.5 MiB +   1.5 MiB =   7.1 MiB	ibus-ui-gtk3</span></span>
<span class="line"><span>  5.4 MiB +   1.8 MiB =   7.2 MiB	notify-osd</span></span>
<span class="line"><span>  6.3 MiB +   1.1 MiB =   7.4 MiB	nm-applet</span></span>
<span class="line"><span>  6.4 MiB +   1.4 MiB =   7.8 MiB	evolution-calendar-factory</span></span>
<span class="line"><span>  6.3 MiB +   1.5 MiB =   7.8 MiB	hud-service</span></span>
<span class="line"><span>  6.5 MiB +   1.5 MiB =   8.0 MiB	unity-panel-service</span></span>
<span class="line"><span>  8.2 MiB +   1.8 MiB =  10.0 MiB	unity-settings-daemon</span></span>
<span class="line"><span> 11.1 MiB + 126.5 KiB =  11.2 MiB	snapd</span></span>
<span class="line"><span>  8.2 MiB +   3.0 MiB =  11.2 MiB	indicator-datetime-service</span></span>
<span class="line"><span> 10.3 MiB +   1.7 MiB =  12.0 MiB	evolution-calendar-factory-subprocess (2)</span></span>
<span class="line"><span> 12.5 MiB +   2.8 MiB =  15.3 MiB	redshift-gtk</span></span>
<span class="line"><span> 14.5 MiB +   1.8 MiB =  16.3 MiB	fluxgui</span></span>
<span class="line"><span> 13.5 MiB +   2.9 MiB =  16.4 MiB	gnome-terminal-server</span></span>
<span class="line"><span> 12.7 MiB +   7.6 MiB =  20.4 MiB	apache2 (6)</span></span>
<span class="line"><span> 20.8 MiB + 503.0 KiB =  21.3 MiB	fwupd</span></span>
<span class="line"><span> 22.8 MiB +  70.0 KiB =  22.9 MiB	collectl</span></span>
<span class="line"><span> 22.2 MiB +  10.8 MiB =  33.0 MiB	nautilus</span></span>
<span class="line"><span> 70.9 MiB +   1.5 MiB =  72.4 MiB	gnome-software</span></span>
<span class="line"><span> 97.9 MiB +  24.8 MiB = 122.8 MiB	Xorg</span></span>
<span class="line"><span>131.9 MiB + 168.0 KiB = 132.1 MiB	mysqld</span></span>
<span class="line"><span>222.1 MiB +   9.4 MiB = 231.5 MiB	compiz</span></span>
<span class="line"><span>286.2 MiB +  11.8 MiB = 298.0 MiB	firefox</span></span>
<span class="line"><span>---------------------------------</span></span>
<span class="line"><span>                          1.3 GiB</span></span>
<span class="line"><span>=================================</span></span></code></pre></div><p>輸出中打印出全路徑：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ps_mem -s</span></span>
<span class="line"><span> Private  +   Shared  =  RAM used	Program</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  3.2 MiB + 951.0 KiB =   4.1 MiB	/usr/lib/evolution/evolution-addressbook-factory</span></span>
<span class="line"><span>  3.7 MiB + 826.5 KiB =   4.5 MiB	/usr/lib/policykit-1-gnome/polkit-gnome-authentication-agent-1</span></span>
<span class="line"><span>  3.7 MiB + 853.0 KiB =   4.6 MiB	/usr/lib/unity-settings-daemon/unity-fallback-mount-helper</span></span>
<span class="line"><span>  3.7 MiB + 884.0 KiB =   4.6 MiB	/usr/lib/ibus/ibus-x11 --kill-daemon</span></span>
<span class="line"><span>  4.1 MiB + 590.5 KiB =   4.6 MiB	/usr/lib/x86_64-linux-gnu/indicator-sound/indicator-sound-service</span></span>
<span class="line"><span>  4.5 MiB + 167.0 KiB =   4.7 MiB	/usr/lib/udisks2/udisksd --no-debug</span></span>
<span class="line"><span>  4.3 MiB + 571.0 KiB =   4.9 MiB	/usr/lib/gnome-session/gnome-session-binary --session=ubuntu</span></span>
<span class="line"><span>  4.5 MiB + 519.0 KiB =   5.0 MiB	/usr/lib/x86_64-linux-gnu/zeitgeist-fts</span></span>
<span class="line"><span>  4.2 MiB + 900.5 KiB =   5.1 MiB	/usr/lib/x86_64-linux-gnu/indicator-printers/indicator-printers-service</span></span>
<span class="line"><span>  4.1 MiB +   1.0 MiB =   5.1 MiB	bash (2)</span></span>
<span class="line"><span>  3.9 MiB +   1.2 MiB =   5.2 MiB	update-notifier</span></span>
<span class="line"><span>  4.8 MiB + 426.0 KiB =   5.2 MiB	/usr/bin/pulseaudio --start --log-target=syslog</span></span>
<span class="line"><span>  5.0 MiB + 863.0 KiB =   5.9 MiB	/usr/lib/evolution/evolution-calendar-factory-subprocess --factory local --bus-name org.gnome.evolution.dataserver.Subprocess.Backend.Calendarx2573x3 --own-path /org/gnome/evolution/dataserver/Subprocess/Backend/Calendar/2573/3</span></span>
<span class="line"><span>  4.5 MiB +   1.5 MiB =   6.0 MiB	/usr/lib/x86_64-linux-gnu/url-dispatcher/url-dispatcher</span></span>
<span class="line"><span>  4.3 MiB +   1.7 MiB =   6.0 MiB	python3 -v</span></span>
<span class="line"><span>  5.2 MiB + 856.5 KiB =   6.1 MiB	/usr/lib/evolution/evolution-addressbook-factory-subprocess --factory local --bus-name org.gnome.evolution.dataserver.Subprocess.Backend.AddressBookx2637x2 --own-path /org/gnome/evolution/dataserver/Subprocess/Backend/AddressBook/2637/2</span></span>
<span class="line"><span>  5.6 MiB + 494.5 KiB =   6.1 MiB	/usr/lib/colord/colord</span></span>
<span class="line"><span>  5.2 MiB + 913.0 KiB =   6.1 MiB	/usr/lib/evolution/evolution-calendar-factory-subprocess --factory contacts --bus-name org.gnome.evolution.dataserver.Subprocess.Backend.Calendarx2573x2 --own-path /org/gnome/evolution/dataserver/Subprocess/Backend/Calendar/2573/2</span></span>
<span class="line"><span>  5.0 MiB +   1.2 MiB =   6.2 MiB	/usr/lib/x86_64-linux-gnu/bamf/bamfdaemon</span></span>
<span class="line"><span>  5.7 MiB +   1.1 MiB =   6.8 MiB	/usr/lib/evolution/evolution-source-registry</span></span>
<span class="line"><span>  5.6 MiB +   1.3 MiB =   6.9 MiB	/usr/lib/x86_64-linux-gnu/indicator-keyboard/indicator-keyboard-service --use-gtk</span></span>
<span class="line"><span>  5.5 MiB +   1.5 MiB =   7.1 MiB	/usr/lib/ibus/ibus-ui-gtk3</span></span>
<span class="line"><span>  5.4 MiB +   1.8 MiB =   7.2 MiB	/usr/lib/x86_64-linux-gnu/notify-osd</span></span>
<span class="line"><span>  6.3 MiB +   1.1 MiB =   7.4 MiB	nm-applet</span></span>
<span class="line"><span>  6.4 MiB +   1.4 MiB =   7.8 MiB	/usr/lib/evolution/evolution-calendar-factory</span></span>
<span class="line"><span>  6.3 MiB +   1.5 MiB =   7.8 MiB	/usr/lib/x86_64-linux-gnu/hud/hud-service</span></span>
<span class="line"><span>  6.5 MiB +   1.5 MiB =   8.0 MiB	/usr/lib/x86_64-linux-gnu/unity/unity-panel-service</span></span>
<span class="line"><span>  8.2 MiB +   1.8 MiB =  10.0 MiB	/usr/lib/unity-settings-daemon/unity-settings-daemon</span></span>
<span class="line"><span> 11.1 MiB + 126.5 KiB =  11.2 MiB	/usr/lib/snapd/snapd</span></span>
<span class="line"><span>  8.2 MiB +   3.0 MiB =  11.2 MiB	/usr/lib/x86_64-linux-gnu/indicator-datetime/indicator-datetime-service</span></span>
<span class="line"><span> 12.5 MiB +   2.8 MiB =  15.3 MiB	/usr/bin/python3 /usr/bin/redshift-gtk</span></span>
<span class="line"><span> 14.5 MiB +   1.8 MiB =  16.3 MiB	/usr/bin/python /usr/bin/fluxgui</span></span>
<span class="line"><span> 13.6 MiB +   2.9 MiB =  16.4 MiB	/usr/lib/gnome-terminal/gnome-terminal-server</span></span>
<span class="line"><span> 12.7 MiB +   7.6 MiB =  20.4 MiB	/usr/sbin/apache2 -k start (6)</span></span>
<span class="line"><span> 20.8 MiB + 503.0 KiB =  21.3 MiB	/usr/lib/x86_64-linux-gnu/fwupd/fwupd</span></span>
<span class="line"><span> 22.8 MiB +  70.0 KiB =  22.9 MiB	/usr/bin/perl -w /usr/bin/collectl -D</span></span>
<span class="line"><span> 22.2 MiB +  10.8 MiB =  33.0 MiB	nautilus -n</span></span>
<span class="line"><span> 70.9 MiB +   1.5 MiB =  72.4 MiB	/usr/bin/gnome-software --gapplication-service</span></span>
<span class="line"><span> 97.9 MiB +  24.8 MiB = 122.8 MiB	/usr/lib/xorg/Xorg -core :0 -seat seat0 -auth /var/run/lightdm/root/:0 -nolisten tcp vt7 -novtswitch</span></span>
<span class="line"><span>131.9 MiB + 168.0 KiB = 132.1 MiB	/usr/sbin/mysqld</span></span>
<span class="line"><span>222.1 MiB +   9.4 MiB = 231.5 MiB	/usr/bin/compiz</span></span>
<span class="line"><span>286.2 MiB +  11.8 MiB = 298.1 MiB	/usr/lib/firefox/firefox</span></span>
<span class="line"><span>---------------------------------</span></span>
<span class="line"><span>                          1.3 GiB</span></span>
<span class="line"><span>=================================</span></span></code></pre></div><p>只顯示特定的 PID 列表的內存使用情況：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ps_mem -p 2886,4386</span></span>
<span class="line"><span> Private  +   Shared  =  RAM used	Program</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 13.5 MiB +   2.9 MiB =  16.4 MiB	gnome-terminal-server</span></span>
<span class="line"><span>286.2 MiB +  11.8 MiB = 298.0 MiB	firefox</span></span>
<span class="line"><span>---------------------------------</span></span>
<span class="line"><span>                        314.4 MiB</span></span>
<span class="line"><span>=================================</span></span></code></pre></div><p>每 N 秒打印進程內存。以下命令每 2 秒報告一次內存使用情況：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ps_mem w 2</span></span></code></pre></div><p>只顯示內存總量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ps_mem -t</span></span>
<span class="line"><span>1329884160</span></span></code></pre></div><hr>`,30)),i("p",null,[s[25]||(s[25]=n("via: ",-1)),p(a,{href:"http://www.2daygeek.com/ps_mem-report-core-memory-usage-accurately-in-linux/"},{default:e(()=>[...s[24]||(s[24]=[n("http://www.2daygeek.com/ps_mem-report-core-memory-usage-accurately-in-linux/",-1)])]),_:1})]),i("p",null,[s[29]||(s[29]=n("作者：",-1)),p(a,{href:"http://www.2daygeek.com/author/2daygeek/"},{default:e(()=>[...s[26]||(s[26]=[n("2DAYGEEK",-1)])]),_:1}),s[30]||(s[30]=n(" 譯者：",-1)),p(a,{href:"https://github.com/xllc"},{default:e(()=>[...s[27]||(s[27]=[n("xllc",-1)])]),_:1}),s[31]||(s[31]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[28]||(s[28]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[34]||(s[34]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[32]||(s[32]=[n("LCTT",-1)])]),_:1}),s[35]||(s[35]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[33]||(s[33]=[n("Linux中國",-1)])]),_:1}),s[36]||(s[36]=n(" 榮譽推出",-1))])])}const f=t(u,[["render",B]]);export{y as __pageData,f as default};
