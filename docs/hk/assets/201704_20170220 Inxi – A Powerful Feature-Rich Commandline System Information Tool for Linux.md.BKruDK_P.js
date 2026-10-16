import{_ as t,a0 as o,w as r,s as d,ao as l,I as a,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"inxi：一個功能強大的獲取 Linux 系統信息的命令列工具 | LCTT x X-CMD","titleTemplate":false,"description":"inxi：一個功能強大的獲取 Linux 系統信息的命令列工具 | LCTT (201704) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"inxi：一個功能強大的獲取 Linux 系統信息的命令列工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"inxi：一個功能強大的獲取 Linux 系統信息的命令列工具 | LCTT (201704) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201704/20170220 Inxi – A Powerful Feature-Rich Commandline System Information Tool for Linux","title":"inxi：一個功能強大的獲取 Linux 系統信息的命令列工具","tag":"201704","desc":""},"relativePath":"201704/20170220 Inxi – A Powerful Feature-Rich Commandline System Information Tool for Linux.md","filePath":"[post].md"}'),c={name:"201704/20170220 Inxi – A Powerful Feature-Rich Commandline System Information Tool for Linux.md"};function u(h,s,m,b,g,k){const i=o("Link");return r(),d("div",null,[s[39]||(s[39]=l(`<h1 id="inxi-一個功能強大的獲取-linux-系統信息的命令列工具" tabindex="-1">inxi：一個功能強大的獲取 Linux 系統信息的命令列工具 <a class="header-anchor" href="#inxi-一個功能強大的獲取-linux-系統信息的命令列工具" aria-label="Permalink to “inxi：一個功能強大的獲取 Linux 系統信息的命令列工具”">​</a></h1><p>Inxi 最初是為控制台和 IRC（網絡中繼聊天）開發的一個強大且優秀的命令列系統信息腳本。可以使用它獲取用户的硬件和系統信息，它也用於調試或者社區技術支持工具。</p><p>使用 Inxi 可以很容易的獲取所有的硬件信息：硬盤、聲卡、顯卡、網卡、CPU 和 RAM 等。同時也能夠獲取大量的操作系統信息，比如硬件驅動、Xorg 、桌面環境、內核、GCC 版本，進程，開機時間和內存等信息。</p><p>運行在命令列和 IRC 上的 Inxi 輸出略有不同，IRC 上會有一些可供用户使用的默認過濾器和顏色選項。支持的 IRC 客户端有：BitchX、Gaim/Pidgin、ircII、Irssi、 Konversation、 Kopete、 KSirc、 KVIrc、 Weechat 和 Xchat 以及其它的一些客户端，它們具有展示內置或外部 Inxi 輸出的能力。</p><h3 id="在-linux-系統上安裝-inxi" tabindex="-1">在 Linux 系統上安裝 Inxi <a class="header-anchor" href="#在-linux-系統上安裝-inxi" aria-label="Permalink to “在 Linux 系統上安裝 Inxi”">​</a></h3><p>大多數主流 Linux 發行版的倉庫中都有 Inxi ，包括大多數 BSD 系統。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo apt-get install inxi   [On Debian/Ubuntu/Linux Mint]</span></span>
<span class="line"><span>$ sudo yum install inxi       [On CentOs/RHEL/Fedora]</span></span>
<span class="line"><span>$ sudo dnf install inxi       [On Fedora 22+]</span></span></code></pre></div><p>在使用 Inxi 之前，用下面的命令查看 Inxi 所有依賴和推薦的應用，以及各種目錄，並顯示需要安裝哪些包來支持給定的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi --recommends</span></span></code></pre></div><p>Inxi 的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>inxi will now begin checking for the programs it needs to operate. First a check of the main languages and tools</span></span>
<span class="line"><span>inxi uses. Python is only for debugging data collection.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Bash version: 4.3.42(1)-release</span></span>
<span class="line"><span>Gawk version: 4.1.3,</span></span>
<span class="line"><span>Sed version: </span></span>
<span class="line"><span>Sudo version: 1.8.16</span></span>
<span class="line"><span>Python version: 2.7.12</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test One: Required System Directories (Linux Only).</span></span>
<span class="line"><span>If one of these system directories is missing, inxi cannot operate:</span></span>
<span class="line"><span>/proc....................................................................... Present</span></span>
<span class="line"><span>/sys........................................................................ Present</span></span>
<span class="line"><span>All the  directories are present.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test Two: Required Core Applications.</span></span>
<span class="line"><span>If one of these applications is missing, inxi cannot operate:</span></span>
<span class="line"><span>df (info: partition data)................................................... /bin/df</span></span>
<span class="line"><span>gawk (info: core tool)...................................................... /usr/bin/gawk</span></span>
<span class="line"><span>grep (info: string search).................................................. /bin/grep</span></span>
<span class="line"><span>lspci (info: hardware data)................................................. /usr/bin/lspci</span></span>
<span class="line"><span>ps (info: process data)..................................................... /bin/ps</span></span>
<span class="line"><span>readlink.................................................................... /bin/readlink</span></span>
<span class="line"><span>sed (info: string replace).................................................. /bin/sed</span></span>
<span class="line"><span>tr (info: character replace)................................................ /usr/bin/tr</span></span>
<span class="line"><span>uname (info: kernel data)................................................... /bin/uname</span></span>
<span class="line"><span>wc (info: word character count)............................................. /usr/bin/wc</span></span>
<span class="line"><span>All the  applications are present.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test Three: Script Recommends for Graphics Features.</span></span>
<span class="line"><span>NOTE: If you do not use X these do not matter (like a headless server). Otherwise, if one of these applications</span></span>
<span class="line"><span>is missing, inxi will have incomplete output:</span></span>
<span class="line"><span>glxinfo (info: -G glx info)................................................. /usr/bin/glxinfo</span></span>
<span class="line"><span>xdpyinfo (info: -G multi screen resolution)................................. /usr/bin/xdpyinfo</span></span>
<span class="line"><span>xprop (info: -S desktop data)............................................... /usr/bin/xprop</span></span>
<span class="line"><span>xrandr (info: -G single screen resolution).................................. /usr/bin/xrandr</span></span>
<span class="line"><span>All the  applications are present.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test Four: Script Recommends for Remaining Features.</span></span>
<span class="line"><span>If one of these applications is missing, inxi will have incomplete output:</span></span>
<span class="line"><span>dig (info: -i first wlan ip default test)................................... /usr/bin/dig</span></span>
<span class="line"><span>dmidecode (info: -M if no sys machine data; -m memory)...................... /usr/sbin/dmidecode</span></span>
<span class="line"><span>file (info: -o unmounted file system)....................................... /usr/bin/file</span></span>
<span class="line"><span>hciconfig (info: -n -i bluetooth data)...................................... /bin/hciconfig</span></span>
<span class="line"><span>hddtemp (info: -Dx show hdd temp)........................................... /usr/sbin/hddtemp</span></span>
<span class="line"><span>ifconfig (info: -i ip lan-deprecated)....................................... /sbin/ifconfig</span></span>
<span class="line"><span>ip (info: -i ip lan)........................................................ /sbin/ip</span></span>
<span class="line"><span>sensors (info: -s sensors output)........................................... /usr/bin/sensors</span></span>
<span class="line"><span>strings (info: -I sysvinit version)......................................... /usr/bin/strings</span></span>
<span class="line"><span>lsusb (info: -A usb audio;-N usb networking)................................ /usr/bin/lsusb</span></span>
<span class="line"><span>modinfo (info: -Ax,-Nx module version)...................................... /sbin/modinfo</span></span>
<span class="line"><span>runlevel (info: -I runlevel)................................................ /sbin/runlevel</span></span>
<span class="line"><span>sudo (info: -Dx hddtemp-user;-o file-user).................................. /usr/bin/sudo</span></span>
<span class="line"><span>uptime (info: -I uptime (check which package owns Debian)).................. /usr/bin/uptime</span></span>
<span class="line"><span>All the  applications are present.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test Five: Script Recommends for Remaining Features.</span></span>
<span class="line"><span>One of these downloaders needed for options -i/-w/-W (-U/-! [11-15], if supported):</span></span>
<span class="line"><span>wget (info: -i wan ip;-w/-W;-U/-! [11-15] (if supported))................... /usr/bin/wget</span></span>
<span class="line"><span>curl (info: -i wan ip;-w/-W;-U/-! [11-15] (if supported))................... /usr/bin/curl</span></span>
<span class="line"><span>All the  applications are present.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test Six: System Directories for Various Information.</span></span>
<span class="line"><span>(Unless otherwise noted, these are for GNU/Linux systems)</span></span>
<span class="line"><span>If one of these directories is missing, inxi may have incomplete output:</span></span>
<span class="line"><span>/sys/class/dmi/id (info: -M system, motherboard, bios)...................... Present</span></span>
<span class="line"><span>/dev (info: -l,-u,-o,-p,-P,-D disk partition data).......................... Present</span></span>
<span class="line"><span>/dev/disk/by-label (info: -l,-o,-p,-P partition labels)..................... Present</span></span>
<span class="line"><span>/dev/disk/by-uuid (info: -u,-o,-p,-P partition uuid)........................ Present</span></span>
<span class="line"><span>All the  directories are present.</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>Test Seven: System Files for Various Information.</span></span>
<span class="line"><span>(Unless otherwise noted, these are for GNU/Linux systems)</span></span>
<span class="line"><span>If one of these files is missing, inxi may have incomplete output:</span></span>
<span class="line"><span>/proc/asound/cards (info: -A sound card data)............................... Present</span></span>
<span class="line"><span>/proc/asound/version (info: -A ALSA data)................................... Present</span></span>
<span class="line"><span>/proc/cpuinfo (info: -C cpu data)........................................... Present</span></span>
<span class="line"><span>/etc/lsb-release (info: -S distro version data [deprecated])................ Present</span></span>
<span class="line"><span>/proc/mdstat (info: -R mdraid data)......................................... Present</span></span>
<span class="line"><span>/proc/meminfo (info: -I memory data)........................................ Present</span></span>
<span class="line"><span>/etc/os-release (info: -S distro version data).............................. Present</span></span>
<span class="line"><span>/proc/partitions (info: -p,-P partitions data).............................. Present</span></span>
<span class="line"><span>/proc/modules (info: -G module data)........................................ Present</span></span>
<span class="line"><span>/proc/mounts (info: -P,-p partition advanced data).......................... Present</span></span>
<span class="line"><span>/var/run/dmesg.boot (info: -D,-d disk data [BSD only])...................... Missing</span></span>
<span class="line"><span>/proc/scsi/scsi (info: -D Advanced hard disk data [used rarely])............ Present</span></span>
<span class="line"><span>/var/log/Xorg.0.log (info: -G graphics driver load status).................. Present</span></span>
<span class="line"><span>The following files are missing from your system:</span></span>
<span class="line"><span>File: /var/run/dmesg.boot</span></span>
<span class="line"><span>---------------------------------------------------------------------------</span></span>
<span class="line"><span>All tests completed.</span></span></code></pre></div><h3 id="inxi-工具的基本用法" tabindex="-1">Inxi 工具的基本用法 <a class="header-anchor" href="#inxi-工具的基本用法" aria-label="Permalink to “Inxi 工具的基本用法”">​</a></h3><p>用下面的基本用法獲取系統和硬件的詳細信息。</p><h4 id="獲取-linux-系統信息" tabindex="-1">獲取 Linux 系統信息 <a class="header-anchor" href="#獲取-linux-系統信息" aria-label="Permalink to “獲取 Linux 系統信息”">​</a></h4><p>Inix 不加任何選項就能輸出下面的信息：CPU 、內核、開機時長、內存大小、硬盤大小、進程數、登錄終端以及 Inxi 版本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi</span></span>
<span class="line"><span>CPU~Dual core Intel Core i5-4210U (-HT-MCP-) speed/max~2164/2700 MHz Kernel~4.4.0-21-generic x86_64 Up~3:15 Mem~3122.0/7879.9MB HDD~1000.2GB(20.0% used) Procs~234 Client~Shell inxi~2.2.35</span></span></code></pre></div><h4 id="獲取內核和發行版本信息" tabindex="-1">獲取內核和發行版本信息 <a class="header-anchor" href="#獲取內核和發行版本信息" aria-label="Permalink to “獲取內核和發行版本信息”">​</a></h4><p>使用 Inxi 的 <code>-S</code> 選項查看本機系統信息（主機名、內核信息、桌面環境和發行版）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -S</span></span>
<span class="line"><span>System: Host: TecMint Kernel: 4.4.0-21-generic x86_64 (64 bit) Desktop: Cinnamon 3.0.7</span></span>
<span class="line"><span>Distro: Linux Mint 18 Sarah</span></span></code></pre></div><h3 id="獲取電腦機型" tabindex="-1">獲取電腦機型 <a class="header-anchor" href="#獲取電腦機型" aria-label="Permalink to “獲取電腦機型”">​</a></h3><p>使用 <code>-M</code> 選項查看機型（筆記本/台式機）、產品 ID 、機器版本、主板、製造商和 BIOS 等信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -M</span></span>
<span class="line"><span>Machine:   System: LENOVO (portable) product: 20354 v: Lenovo Z50-70</span></span>
<span class="line"><span>Mobo: LENOVO model: Lancer 5A5 v: 31900059WIN Bios: LENOVO v: 9BCN26WW date: 07/31/2014</span></span></code></pre></div><h3 id="獲取-cpu-及主頻信息" tabindex="-1">獲取 CPU 及主頻信息 <a class="header-anchor" href="#獲取-cpu-及主頻信息" aria-label="Permalink to “獲取 CPU 及主頻信息”">​</a></h3><p>使用 <code>-C</code> 選項查看完整的 CPU 信息，包括每核 CPU 的頻率及可用的最大主頻。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -C</span></span>
<span class="line"><span>CPU:       Dual core Intel Core i5-4210U (-HT-MCP-) cache: 3072 KB </span></span>
<span class="line"><span>clock speeds: max: 2700 MHz 1: 1942 MHz 2: 1968 MHz 3: 1734 MHz 4: 1710 MHz</span></span></code></pre></div><h4 id="獲取顯卡信息" tabindex="-1">獲取顯卡信息 <a class="header-anchor" href="#獲取顯卡信息" aria-label="Permalink to “獲取顯卡信息”">​</a></h4><p>使用 <code>-G</code> 選項查看顯卡信息，包括顯卡類型、顯示服務器、系統分辨率、GLX 渲染器和 GLX 版本等等（LCTT 譯註： GLX 是一個 X 窗口系統的 OpenGL 擴展）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -G</span></span>
<span class="line"><span>Graphics:  Card-1: Intel Haswell-ULT Integrated Graphics Controller</span></span>
<span class="line"><span>Card-2: NVIDIA GM108M [GeForce 840M]</span></span>
<span class="line"><span>Display Server: X.Org 1.18.4 drivers: intel (unloaded: fbdev,vesa) Resolution: 1920x1080@60.05hz</span></span>
<span class="line"><span>GLX Renderer: Mesa DRI Intel Haswell Mobile GLX Version: 3.0 Mesa 11.2.0</span></span></code></pre></div><h4 id="獲取聲卡信息" tabindex="-1">獲取聲卡信息 <a class="header-anchor" href="#獲取聲卡信息" aria-label="Permalink to “獲取聲卡信息”">​</a></h4><p>使用 <code>-A</code> 選項查看聲卡信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -A</span></span>
<span class="line"><span>Audio:     Card-1 Intel 8 Series HD Audio Controller driver: snd_hda_intel Sound: ALSA v: k4.4.0-21-generic</span></span>
<span class="line"><span>Card-2 Intel Haswell-ULT HD Audio Controller driver: snd_hda_intel</span></span></code></pre></div><h4 id="獲取網卡信息" tabindex="-1">獲取網卡信息 <a class="header-anchor" href="#獲取網卡信息" aria-label="Permalink to “獲取網卡信息”">​</a></h4><p>使用 <code>-N</code> 選項查看網卡信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -N</span></span>
<span class="line"><span>Network:   Card-1: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller driver: r8169</span></span>
<span class="line"><span>Card-2: Realtek RTL8723BE PCIe Wireless Network Adapter driver: rtl8723be</span></span></code></pre></div><h4 id="獲取硬盤信息" tabindex="-1">獲取硬盤信息 <a class="header-anchor" href="#獲取硬盤信息" aria-label="Permalink to “獲取硬盤信息”">​</a></h4><p>使用 <code>-D</code> 選項查看硬盤信息（大小、ID、型號）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -D</span></span>
<span class="line"><span>Drives:    HDD Total Size: 1000.2GB (20.0% used) ID-1: /dev/sda model: ST1000LM024_HN size: 1000.2GB</span></span></code></pre></div><h4 id="獲取簡要的系統信息" tabindex="-1">獲取簡要的系統信息 <a class="header-anchor" href="#獲取簡要的系統信息" aria-label="Permalink to “獲取簡要的系統信息”">​</a></h4><p>使用 <code>-b</code> 選項顯示上述信息的簡要系統信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -b </span></span>
<span class="line"><span>System:    Host: TecMint Kernel: 4.4.0-21-generic x86_64 (64 bit) Desktop: Cinnamon 3.0.7</span></span>
<span class="line"><span>Distro: Linux Mint 18 Sarah</span></span>
<span class="line"><span>Machine:   System: LENOVO (portable) product: 20354 v: Lenovo Z50-70</span></span>
<span class="line"><span>Mobo: LENOVO model: Lancer 5A5 v: 31900059WIN Bios: LENOVO v: 9BCN26WW date: 07/31/2014</span></span>
<span class="line"><span>CPU:       Dual core Intel Core i5-4210U (-HT-MCP-) speed/max: 2018/2700 MHz</span></span>
<span class="line"><span>Graphics:  Card-1: Intel Haswell-ULT Integrated Graphics Controller</span></span>
<span class="line"><span>Card-2: NVIDIA GM108M [GeForce 840M]</span></span>
<span class="line"><span>Display Server: X.Org 1.18.4 drivers: intel (unloaded: fbdev,vesa) Resolution: 1920x1080@60.05hz</span></span>
<span class="line"><span>GLX Renderer: Mesa DRI Intel Haswell Mobile GLX Version: 3.0 Mesa 11.2.0</span></span>
<span class="line"><span>Network:   Card-1: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller driver: r8169</span></span>
<span class="line"><span>Card-2: Realtek RTL8723BE PCIe Wireless Network Adapter driver: rtl8723be</span></span>
<span class="line"><span>Drives:    HDD Total Size: 1000.2GB (20.0% used)</span></span>
<span class="line"><span>Info:      Processes: 233 Uptime: 3:23 Memory: 3137.5/7879.9MB Client: Shell (bash) inxi: 2.2.35</span></span></code></pre></div><h4 id="獲取硬盤分區信息" tabindex="-1">獲取硬盤分區信息 <a class="header-anchor" href="#獲取硬盤分區信息" aria-label="Permalink to “獲取硬盤分區信息”">​</a></h4><p>使用 <code>-p</code> 選項輸出完整的硬盤分區信息，包括每個分區的分區大小、已用空間、可用空間、文件系統以及文件系統類型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -p</span></span>
<span class="line"><span>Partition: ID-1: / size: 324G used: 183G (60%) fs: ext4 dev: /dev/sda10</span></span>
<span class="line"><span>ID-2: swap-1 size: 4.00GB used: 0.00GB (0%) fs: swap dev: /dev/sda9</span></span></code></pre></div><h4 id="獲取完整的-linux-系統信息" tabindex="-1">獲取完整的 Linux 系統信息 <a class="header-anchor" href="#獲取完整的-linux-系統信息" aria-label="Permalink to “獲取完整的 Linux 系統信息”">​</a></h4><p>使用 <code>-F</code> 選項查看可以完整的 Inxi 輸出（安全起見比如網絡 IP 地址信息沒有顯示，下面的示例只顯示部分輸出信息）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -F </span></span>
<span class="line"><span>System:    Host: TecMint Kernel: 4.4.0-21-generic x86_64 (64 bit) Desktop: Cinnamon 3.0.7</span></span>
<span class="line"><span>Distro: Linux Mint 18 Sarah</span></span>
<span class="line"><span>Machine:   System: LENOVO (portable) product: 20354 v: Lenovo Z50-70</span></span>
<span class="line"><span>Mobo: LENOVO model: Lancer 5A5 v: 31900059WIN Bios: LENOVO v: 9BCN26WW date: 07/31/2014</span></span>
<span class="line"><span>CPU:       Dual core Intel Core i5-4210U (-HT-MCP-) cache: 3072 KB </span></span>
<span class="line"><span>clock speeds: max: 2700 MHz 1: 1716 MHz 2: 1764 MHz 3: 1776 MHz 4: 1800 MHz</span></span>
<span class="line"><span>Graphics:  Card-1: Intel Haswell-ULT Integrated Graphics Controller</span></span>
<span class="line"><span>Card-2: NVIDIA GM108M [GeForce 840M]</span></span>
<span class="line"><span>Display Server: X.Org 1.18.4 drivers: intel (unloaded: fbdev,vesa) Resolution: 1920x1080@60.05hz</span></span>
<span class="line"><span>GLX Renderer: Mesa DRI Intel Haswell Mobile GLX Version: 3.0 Mesa 11.2.0</span></span>
<span class="line"><span>Audio:     Card-1 Intel 8 Series HD Audio Controller driver: snd_hda_intel Sound: ALSA v: k4.4.0-21-generic</span></span>
<span class="line"><span>Card-2 Intel Haswell-ULT HD Audio Controller driver: snd_hda_intel</span></span>
<span class="line"><span>Network:   Card-1: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller driver: r8169</span></span>
<span class="line"><span>IF: enp1s0 state: up speed: 100 Mbps duplex: full mac: 28:d2:44:eb:bd:98</span></span>
<span class="line"><span>Card-2: Realtek RTL8723BE PCIe Wireless Network Adapter driver: rtl8723be</span></span>
<span class="line"><span>IF: wlp2s0 state: down mac: 38:b1:db:7c:78:c7</span></span>
<span class="line"><span>Drives:    HDD Total Size: 1000.2GB (20.0% used) ID-1: /dev/sda model: ST1000LM024_HN size: 1000.2GB</span></span>
<span class="line"><span>Partition: ID-1: / size: 324G used: 183G (60%) fs: ext4 dev: /dev/sda10</span></span>
<span class="line"><span>ID-2: swap-1 size: 4.00GB used: 0.00GB (0%) fs: swap dev: /dev/sda9</span></span>
<span class="line"><span>RAID:      No RAID devices: /proc/mdstat, md_mod kernel module present</span></span>
<span class="line"><span>Sensors:   System Temperatures: cpu: 56.0C mobo: N/A</span></span>
<span class="line"><span>Fan Speeds (in rpm): cpu: N/A</span></span>
<span class="line"><span>Info:      Processes: 234 Uptime: 3:26 Memory: 3188.9/7879.9MB Client: Shell (bash) inxi: 2.2.35</span></span></code></pre></div><h3 id="使用-inxi-工具監控-linux-系統" tabindex="-1">使用 Inxi 工具監控 Linux 系統 <a class="header-anchor" href="#使用-inxi-工具監控-linux-系統" aria-label="Permalink to “使用 Inxi 工具監控 Linux 系統”">​</a></h3><p>下面是監控 Linux 系統進程、開機時間和內存的幾個選項的使用方法。</p><h4 id="監控-linux-進程的內存使用" tabindex="-1">監控 Linux 進程的內存使用 <a class="header-anchor" href="#監控-linux-進程的內存使用" aria-label="Permalink to “監控 Linux 進程的內存使用”">​</a></h4><p>使用下面的命令查看進程數、開機時間和內存使用情況：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -I</span></span>
<span class="line"><span>Info:      Processes: 232 Uptime: 3:35 Memory: 3256.3/7879.9MB Client: Shell (bash) inxi: 2.2.35</span></span></code></pre></div><h4 id="監控進程佔用的-cpu-和內存資源" tabindex="-1">監控進程佔用的 CPU 和內存資源 <a class="header-anchor" href="#監控進程佔用的-cpu-和內存資源" aria-label="Permalink to “監控進程佔用的 CPU 和內存資源”">​</a></h4>`,52)),a("p",null,[s[1]||(s[1]=n("Inxi 默認顯示 ",-1)),e(i,{href:"http://www.tecmint.com/find-processes-by-memory-usage-top-batch-mode/"},{default:p(()=>[...s[0]||(s[0]=[n("前 5 個最消耗 CPU 和內存的進程",-1)])]),_:1}),s[2]||(s[2]=n("。 ",-1)),s[3]||(s[3]=a("code",null,"-t",-1)),s[4]||(s[4]=n(" 選項和 ",-1)),s[5]||(s[5]=a("code",null,"c",-1)),s[6]||(s[6]=n(" 選項一起使用查看前 5 個最消耗 CPU 資源的進程，查看最消耗內存的進程使用 ",-1)),s[7]||(s[7]=a("code",null,"-t",-1)),s[8]||(s[8]=n(" 選項和 ",-1)),s[9]||(s[9]=a("code",null,"m",-1)),s[10]||(s[10]=n(" 選項； ",-1)),s[11]||(s[11]=a("code",null,"-t",-1)),s[12]||(s[12]=n("選項 和 ",-1)),s[13]||(s[13]=a("code",null,"cm",-1)),s[14]||(s[14]=n(" 選項一起使用顯示前 5 個最消耗 CPU 和內存資源的進程。",-1))]),s[40]||(s[40]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>----------------- Linux CPU Usage ----------------- </span></span>
<span class="line"><span>$ inxi -t c </span></span>
<span class="line"><span>Processes: CPU: % used - top 5 active</span></span>
<span class="line"><span>1: cpu: 53.7% command: plugin-container pid: 3066</span></span>
<span class="line"><span>2: cpu: 20.0% command: java pid: 1527</span></span>
<span class="line"><span>3: cpu: 19.7% command: firefox pid: 3018</span></span>
<span class="line"><span>4: cpu: 4.6% command: Xorg pid: 2114</span></span>
<span class="line"><span>5: cpu: 3.0% command: cinnamon pid: 2835</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>----------------- Linux Memoery Usage ----------------- </span></span>
<span class="line"><span>$ inxi -t m</span></span>
<span class="line"><span>Processes: Memory: MB / % used - Used/Total: 3212.5/7879.9MB - top 5 active</span></span>
<span class="line"><span>1: mem: 980.51MB (12.4%) command: plugin-container pid: 3066</span></span>
<span class="line"><span>2: mem: 508.96MB (6.4%) command: java pid: 1527</span></span>
<span class="line"><span>3: mem: 507.89MB (6.4%) command: firefox pid: 3018</span></span>
<span class="line"><span>4: mem: 244.05MB (3.0%) command: chrome pid: 7405</span></span>
<span class="line"><span>5: mem: 211.46MB (2.6%) command: chrome pid: 6146</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>----------------- Linux CPU and Memory Usage ----------------- </span></span>
<span class="line"><span>$ inxi -t cm</span></span>
<span class="line"><span>Processes: CPU: % used - top 5 active</span></span>
<span class="line"><span>1: cpu: 53.7% command: plugin-container pid: 3066</span></span>
<span class="line"><span>2: cpu: 20.0% command: java pid: 1527</span></span>
<span class="line"><span>3: cpu: 19.7% command: firefox pid: 3018</span></span>
<span class="line"><span>4: cpu: 4.6% command: Xorg pid: 2114</span></span>
<span class="line"><span>5: cpu: 3.0% command: cinnamon pid: 2835</span></span>
<span class="line"><span>Memory: MB / % used - Used/Total: 3223.6/7879.9MB - top 5 active</span></span>
<span class="line"><span>1: mem: 991.93MB (12.5%) command: plugin-container pid: 3066</span></span>
<span class="line"><span>2: mem: 508.96MB (6.4%) command: java pid: 1527</span></span>
<span class="line"><span>3: mem: 507.86MB (6.4%) command: firefox pid: 3018</span></span>
<span class="line"><span>4: mem: 244.45MB (3.1%) command: chrome pid: 7405</span></span>
<span class="line"><span>5: mem: 211.68MB (2.6%) command: chrome pid: 6146</span></span></code></pre></div><p>可以在選項 <code>cm</code> 後跟一個整數（在 1-20 之間）設置顯示多少個進程，下面的命令顯示了前 10 個最消耗 CPU 和內存的進程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -t cm10</span></span>
<span class="line"><span>Processes: CPU: % used - top 10 active</span></span>
<span class="line"><span>1: cpu: 53.4% command: plugin-container pid: 3066</span></span>
<span class="line"><span>2: cpu: 19.8% command: java pid: 1527</span></span>
<span class="line"><span>3: cpu: 19.5% command: firefox pid: 3018</span></span>
<span class="line"><span>4: cpu: 4.5% command: Xorg pid: 2114</span></span>
<span class="line"><span>5: cpu: 3.0% command: cinnamon pid: 2835</span></span>
<span class="line"><span>6: cpu: 2.8% command: chrome pid: 7405</span></span>
<span class="line"><span>7: cpu: 1.1% command: pulseaudio pid: 2733</span></span>
<span class="line"><span>8: cpu: 1.0% command: soffice.bin pid: 7799</span></span>
<span class="line"><span>9: cpu: 0.9% command: chrome pid: 5763</span></span>
<span class="line"><span>10: cpu: 0.5% command: chrome pid: 6179</span></span>
<span class="line"><span>Memory: MB / % used - Used/Total: 3163.1/7879.9MB - top 10 active</span></span>
<span class="line"><span>1: mem: 976.82MB (12.3%) command: plugin-container pid: 3066</span></span>
<span class="line"><span>2: mem: 511.70MB (6.4%) command: java pid: 1527</span></span>
<span class="line"><span>3: mem: 466.01MB (5.9%) command: firefox pid: 3018</span></span>
<span class="line"><span>4: mem: 244.40MB (3.1%) command: chrome pid: 7405</span></span>
<span class="line"><span>5: mem: 203.71MB (2.5%) command: chrome pid: 6146</span></span>
<span class="line"><span>6: mem: 199.74MB (2.5%) command: chrome pid: 5763</span></span>
<span class="line"><span>7: mem: 168.30MB (2.1%) command: cinnamon pid: 2835</span></span>
<span class="line"><span>8: mem: 165.51MB (2.1%) command: soffice.bin pid: 7799</span></span>
<span class="line"><span>9: mem: 158.91MB (2.0%) command: chrome pid: 6179</span></span>
<span class="line"><span>10: mem: 151.83MB (1.9%) command: mysqld pid: 1259</span></span></code></pre></div><h4 id="監控網絡設備" tabindex="-1">監控網絡設備 <a class="header-anchor" href="#監控網絡設備" aria-label="Permalink to “監控網絡設備”">​</a></h4><p>下面的命令會列出網卡信息，包括接口信息、網絡頻率、mac 地址、網卡狀態和網絡 IP 等信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -Nni</span></span>
<span class="line"><span>Network:   Card-1: Realtek RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller driver: r8169</span></span>
<span class="line"><span>IF: enp1s0 state: up speed: 100 Mbps duplex: full mac: 28:d2:44:eb:bd:98</span></span>
<span class="line"><span>Card-2: Realtek RTL8723BE PCIe Wireless Network Adapter driver: rtl8723be</span></span>
<span class="line"><span>IF: wlp2s0 state: down mac: 38:b1:db:7c:78:c7</span></span>
<span class="line"><span>WAN IP: 111.91.115.195 IF: wlp2s0 ip-v4: N/A</span></span>
<span class="line"><span>IF: enp1s0 ip-v4: 192.168.0.103</span></span></code></pre></div><h4 id="監控-cpu-温度和電腦風扇轉速" tabindex="-1">監控 CPU 温度和電腦風扇轉速 <a class="header-anchor" href="#監控-cpu-温度和電腦風扇轉速" aria-label="Permalink to “監控 CPU 温度和電腦風扇轉速”">​</a></h4>`,9)),a("p",null,[s[16]||(s[16]=n("可以使用 ",-1)),s[17]||(s[17]=a("code",null,"-s",-1)),s[18]||(s[18]=n(" 選項監控 ",-1)),e(i,{href:"http://www.tecmint.com/install-htop-linux-process-monitoring-for-rhel-centos-fedora/"},{default:p(()=>[...s[15]||(s[15]=[n("配置了傳感器的機器",-1)])]),_:1}),s[19]||(s[19]=n(" 獲取温度和風扇轉速：",-1))]),s[41]||(s[41]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -s</span></span>
<span class="line"><span>Sensors:   System Temperatures: cpu: 53.0C mobo: N/A</span></span>
<span class="line"><span>Fan Speeds (in rpm): cpu: N/A</span></span></code></pre></div><h4 id="用-linux-查看天氣預報" tabindex="-1">用 Linux 查看天氣預報 <a class="header-anchor" href="#用-linux-查看天氣預報" aria-label="Permalink to “用 Linux 查看天氣預報”">​</a></h4><p>使用 <code>-w</code> 選項查看本地區的天氣情況（雖然使用的 API 可能不是很可靠），使用 <code>-W &lt;different_location&gt;</code> 設置另外的地區。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -w</span></span>
<span class="line"><span>Weather:   Conditions: 93 F (34 C) - smoke Time: February 20, 1:38 PM IST</span></span>
<span class="line"><span>$ inxi -W Mumbai,India</span></span>
<span class="line"><span>Weather:   Conditions: 93 F (34 C) - smoke Time: February 20, 1:38 PM IST</span></span>
<span class="line"><span>$ inxi -W Nairobi,Kenya</span></span>
<span class="line"><span>Weather:   Conditions: 70 F (21 C) - Mostly Cloudy Time: February 20, 11:08 AM EAT</span></span></code></pre></div><h4 id="查看所有的-linux-倉庫信息" tabindex="-1">查看所有的 Linux 倉庫信息 <a class="header-anchor" href="#查看所有的-linux-倉庫信息" aria-label="Permalink to “查看所有的 Linux 倉庫信息”">​</a></h4><p>另外，可以使用 <code>-r</code> 選項查看一個 Linux 發行版的倉庫信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -r </span></span>
<span class="line"><span>Repos:     Active apt sources in file: /etc/apt/sources.list.d/dawidd0811-neofetch-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/dawidd0811/neofetch/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/dawidd0811/neofetch/ubuntu xenial main</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/dhor-myway-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/dhor/myway/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/dhor/myway/ubuntu xenial main</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/official-package-repositories.list</span></span>
<span class="line"><span>deb http://packages.linuxmint.com sarah main upstream import backport</span></span>
<span class="line"><span>deb http://archive.ubuntu.com/ubuntu xenial main restricted universe multiverse</span></span>
<span class="line"><span>deb http://archive.ubuntu.com/ubuntu xenial-updates main restricted universe multiverse</span></span>
<span class="line"><span>deb http://archive.ubuntu.com/ubuntu xenial-backports main restricted universe multiverse</span></span>
<span class="line"><span>deb http://security.ubuntu.com/ubuntu/ xenial-security main restricted universe multiverse</span></span>
<span class="line"><span>deb http://archive.canonical.com/ubuntu/ xenial partner</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/qbittorrent-team-qbittorrent-stable-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/qbittorrent-team/qbittorrent-stable/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/qbittorrent-team/qbittorrent-stable/ubuntu xenial main</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/slgobinath-safeeyes-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/slgobinath/safeeyes/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/slgobinath/safeeyes/ubuntu xenial main</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/snwh-pulp-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/snwh/pulp/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/snwh/pulp/ubuntu xenial main</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/twodopeshaggy-jarun-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/twodopeshaggy/jarun/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/twodopeshaggy/jarun/ubuntu xenial main</span></span>
<span class="line"><span>Active apt sources in file: /etc/apt/sources.list.d/ubuntu-mozilla-security-ppa-xenial.list</span></span>
<span class="line"><span>deb http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu xenial main</span></span>
<span class="line"><span>deb-src http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu xenial main</span></span></code></pre></div><p>下面是查看 Inxi 的安裝版本、快速幫助和打開 man 主頁的方法，以及更多的 Inxi 使用細節。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ inxi -v   #顯示版本信息</span></span>
<span class="line"><span>$ inxi -h   #快速幫助</span></span>
<span class="line"><span>$ man inxi  #打開 man 主頁</span></span></code></pre></div>`,9)),a("p",null,[s[21]||(s[21]=n("瀏覽 Inxi 的官方 GitHub 主頁 ",-1)),e(i,{href:"https://github.com/smxi/inxi"},{default:p(()=>[...s[20]||(s[20]=[n("https://github.com/smxi/inxi",-1)])]),_:1}),s[22]||(s[22]=n(" 查看更多的信息。",-1))]),a("p",null,[s[24]||(s[24]=n("Inxi 是一個功能強大的獲取硬件和系統信息的命令列工具。這也是我使用過的最好的 ",-1)),e(i,{href:"http://www.tecmint.com/commands-to-collect-system-and-hardware-information-in-linux/"},{default:p(()=>[...s[23]||(s[23]=[n("獲取硬件和系統信息的命令列工具",-1)])]),_:1}),s[25]||(s[25]=n(" 之一。",-1))]),s[42]||(s[42]=a("p",null,"寫下你的評論。如果你知道其他的像 Inxi 這樣的工具，我們很高興和你一起討論。",-1)),s[43]||(s[43]=a("hr",null,null,-1)),s[44]||(s[44]=a("p",null,"作者簡介：",-1)),s[45]||(s[45]=a("p",null,"Aaron Kili 是一個 Linux 和 F.O.S.S 的狂熱愛好者，即任的 Linux 系統管理員，web 開發者，TecMint 網站的專欄作者，他喜歡使用計算機工作，並且樂於分享計算機技術。",-1)),s[46]||(s[46]=a("hr",null,null,-1)),a("p",null,[s[27]||(s[27]=n("via: ",-1)),e(i,{href:"http://www.tecmint.com/inxi-command-to-find-linux-system-information/"},{default:p(()=>[...s[26]||(s[26]=[n("http://www.tecmint.com/inxi-command-to-find-linux-system-information/",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("作者：",-1)),e(i,{href:"http://www.tecmint.com/author/aaronkili/"},{default:p(()=>[...s[28]||(s[28]=[n("Aaron Kili",-1)])]),_:1}),s[32]||(s[32]=n(" 譯者：",-1)),e(i,{href:"https://github.com/vim-kakali"},{default:p(()=>[...s[29]||(s[29]=[n("vim-kakali",-1)])]),_:1}),s[33]||(s[33]=n(" 校對：",-1)),e(i,{href:"https://github.com/wxy"},{default:p(()=>[...s[30]||(s[30]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(i,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原創編譯，",-1)),e(i,{href:"https://linux.cn/"},{default:p(()=>[...s[35]||(s[35]=[n("Linux中國",-1)])]),_:1}),s[38]||(s[38]=n(" 榮譽推出",-1))])])}const C=t(c,[["render",u]]);export{v as __pageData,C as default};
