import{_ as i,a0 as p,w as l,s as d,I as t,x as n,a1 as r,A as s,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性 | LCTT x X-CMD","titleTemplate":false,"description":"怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/20150205 How To Scan And Check A WordPress Website Security Using WPScan, Nmap, And Nikto","title":"怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性","tag":"201504","desc":""},"relativePath":"201504/20150205 How To Scan And Check A WordPress Website Security Using WPScan, Nmap, And Nikto.md","filePath":"[post].md"}'),u={name:"201504/20150205 How To Scan And Check A WordPress Website Security Using WPScan, Nmap, And Nikto.md"};function m(c,e,h,b,g,w){const o=p("Link");return l(),d("div",null,[e[33]||(e[33]=t("h1",{id:"怎樣用-wpscan-nmap-和-nikto-掃描和檢查一個-wordpress-站點的安全性",tabindex:"-1"},[n("怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性 "),t("a",{class:"header-anchor",href:"#怎樣用-wpscan-nmap-和-nikto-掃描和檢查一個-wordpress-站點的安全性","aria-label":"Permalink to “怎樣用 WPScan，Nmap 和 Nikto 掃描和檢查一個 WordPress 站點的安全性”"},"​")],-1)),e[34]||(e[34]=t("h3",{id:"介紹",tabindex:"-1"},[n("介紹 "),t("a",{class:"header-anchor",href:"#介紹","aria-label":"Permalink to “介紹”"},"​")],-1)),e[35]||(e[35]=t("p",null,"數百萬個網站用着 WordPress ，這當然是有原因的。WordPress 是眾多內容管理系統中對開發者最友好的，本質上説你可以用它做任何事情。不幸的是，每天都有些嚇人的報告説某個主要的網站被黑了，或者某個重要的資料庫被泄露了之類的，嚇得人一愣一愣的。",-1)),e[36]||(e[36]=t("p",null,"如果你還沒有安裝 WordPress ，可以看下下面的文章。",-1)),e[37]||(e[37]=t("p",null,"在基於 Debian 的系統上：",-1)),t("ul",null,[t("li",null,[r(o,{href:"http://www.unixmen.com/install-wordpress-ubuntu-14-10/"},{default:s(()=>[...e[0]||(e[0]=[n("如何在 Ubuntu 上安裝 WordPress",-1)])]),_:1})])]),e[38]||(e[38]=t("p",null,"在基於 RPM 的系統上：",-1)),t("ul",null,[t("li",null,[r(o,{href:"http://www.unixmen.com/install-configure-wordpress-4-0-benny-centos-7/"},{default:s(()=>[...e[1]||(e[1]=[n("如何在 CentOS 上安裝 WordPress",-1)])]),_:1})])]),t("p",null,[e[3]||(e[3]=n("我之前的文章 ",-1)),r(o,{href:"http://www.unixmen.com/secure-wordpress-website/"},{default:s(()=>[...e[2]||(e[2]=[n(" 如何安全加固 WordPress 站點",-1)])]),_:1}),e[4]||(e[4]=n(" 裏面列出的",-1)),e[5]||(e[5]=t("strong",null,"備忘錄",-1)),e[6]||(e[6]=n("為讀者維護 WordPress 的安全提供了一點幫助。",-1))]),e[39]||(e[39]=a(`<p>在這篇文章裏面，我將介紹 <strong>wpscan</strong> 的安裝過程，以及怎樣使用 wpscan 來定位那些已知的會讓你的站點變得易受攻擊的插件和主題。還有怎樣安裝和使用一款免費的網絡探索和攻擊的安全掃描軟件 <strong>nmap</strong> 。最後展示的是使用 <strong>nikto</strong> 的步驟。</p><h3 id="用-wpscan-測試-wordpress-中易受攻擊的插件和主題" tabindex="-1">用 WPScan 測試 WordPress 中易受攻擊的插件和主題 <a class="header-anchor" href="#用-wpscan-測試-wordpress-中易受攻擊的插件和主題" aria-label="Permalink to “用 WPScan 測試 WordPress 中易受攻擊的插件和主題”">​</a></h3><p><strong>WPScan</strong> 是一個 WordPress 黑盒安全掃描軟件，用 Ruby 寫成，它是專門用來尋找已知的 WordPress 的弱點的。它為安全專家和 WordPress 管理員提供了一條評估他們的 WordPress 站點的途徑。它的基於開源代碼，在 GPLv3 下發行。</p><h4 id="下載和安裝-wpscan" tabindex="-1">下載和安裝 WPScan <a class="header-anchor" href="#下載和安裝-wpscan" aria-label="Permalink to “下載和安裝 WPScan”">​</a></h4><p>在我們開始安裝之前，很重要的一點是要注意 wpscan 不能在 Windows 下工作，所以你需要使用一台 Linux 或者 OS X 的機器來完成下面的事情。如果你只有 Windows 的系統，拿你可以下載一個 Virtualbox 然後在虛擬機裏面安裝任何你喜歡的 Linux 發行版本。</p><p>WPScan 的源代碼放在 Github 上，所以需要先安裝 git（LCTT 譯註：其實你也可以直接從 Github 上下載打包的源代碼，而不必非得裝 git ）。</p><pre><code>sudo apt-get install git
</code></pre><p>git 裝好了，我們就要安裝 wpscan 的依賴包了。</p><pre><code>sudo apt-get install libcurl4-gnutls-dev libopenssl-ruby libxml2 libxml2-dev libxslt1-dev ruby-dev ruby1.9.3
</code></pre><p>把 wpscan 從 github 上 clone 下來。</p><pre><code>git clone https://github.com/wpscanteam/wpscan.git
</code></pre><p>現在我們可以進入這個新建立的 wpscan 目錄，通過 bundler 安裝必要的 ruby 包。</p><pre><code>cd wpscan
sudo gem install bundler &amp;&amp; bundle install --without test development
</code></pre><p>現在 wpscan 裝好了，我們就可以用它來搜索我們 WordPress 站點潛在的易受攻擊的文件。wpcan 最重要的方面是它能列出不僅是插件和主題，也能列出用户和縮略圖的功能。WPScan 也可以用來暴力破解 WordPress —— 但這不是本文要討論的內容。</p><h4 id="更新-wpscan" tabindex="-1">更新 WPScan <a class="header-anchor" href="#更新-wpscan" aria-label="Permalink to “更新 WPScan”">​</a></h4><pre><code>ruby wpscan.rb --update
</code></pre><h4 id="列舉插件" tabindex="-1">列舉插件 <a class="header-anchor" href="#列舉插件" aria-label="Permalink to “列舉插件”">​</a></h4><p>要列出所有插件，只需要加上 “--enumerate p” 參數，就像這樣：</p><pre><code>ruby wpscan.rb --url http(s)://www.yoursiteurl.com --enumerate p
</code></pre><p>或者僅僅列出易受攻擊的插件：</p><pre><code>ruby wpscan.rb --url http(s)://www.yoursiteurl.com --enumerate vp
</code></pre><p>下面是一些例子：</p><pre><code>| Name: ukiscet
| Location: http://********.com/wp-content/plugins/akismet/

| Name: audio-player
| Location: http://********.com/wp-content/plugins/audio-player/
|
| * Title: Audio Player - player.swf playerID Parameter XSS
| * Reference: http://seclists.org/bugtraq/2013/Feb/35
| * Reference: http://secunia.com/advisories/52083
| * Reference: http://osvdb.org/89963
| * Fixed in: 2.0.4.6

| Name: bbpress - v2.3.2
| Location: http://********.com/wp-content/plugins/bbpress/
| Readme: http://********.com/wp-content/plugins/bbpress/readme.txt
|
| * Title: BBPress - Multiple Script Malformed Input Path Disclosure
| * Reference: http://xforce.iss.net/xforce/xfdb/78244
| * Reference: http://packetstormsecurity.com/files/116123/
| * Reference: http://osvdb.org/86399
| * Reference: http://www.exploit-db.com/exploits/22396/
|
| * Title: BBPress - forum.php page Parameter SQL Injection
| * Reference: http://xforce.iss.net/xforce/xfdb/78244
| * Reference: http://packetstormsecurity.com/files/116123/
| * Reference: http://osvdb.org/86400
| * Reference: http://www.exploit-db.com/exploits/22396/

| Name: contact
| Location: http://********.com/wp-content/plugins/contact/
</code></pre><h4 id="列舉主題" tabindex="-1">列舉主題 <a class="header-anchor" href="#列舉主題" aria-label="Permalink to “列舉主題”">​</a></h4><p>列舉主題和列舉插件差不多，只要用&quot;--enumerate t&quot;就可以了。</p><pre><code>ruby wpscan.rb --url http(s)://www.host-name.com --enumerate t
</code></pre><p>或者只列出易受攻擊的主題：</p><pre><code>ruby wpscan.rb --url http(s)://www.host-name.com --enumerate vt
</code></pre><p>例子的輸出：</p><pre><code>| Name: path
| Location: http://********.com/wp-content/themes/path/
| Style URL: http://********.com/wp-content/themes/path/style.css
| Description: 

| Name: pub
| Location: http://********.com/wp-content/themes/pub/
| Style URL: http://********.com/wp-content/themes/pub/style.css
| Description: 

| Name: rockstar
| Location: http://********.com/wp-content/themes/rockstar/
| Style URL: http://********.com/wp-content/themes/rockstar/style.css
| Description: 
|
| * Title: WooThemes WooFramework Remote Unauthenticated Shortcode Execution
| * Reference: https://gist.github.com/2523147

| Name: twentyten
| Location: http://********.com/wp-content/themes/twentyten/
| Style URL: http://********.com/wp-content/themes/twentyten/style.css
| Description: 
</code></pre><h4 id="列舉用户" tabindex="-1">列舉用户 <a class="header-anchor" href="#列舉用户" aria-label="Permalink to “列舉用户”">​</a></h4><p>WPscan 也可以用來列舉某個 WordPress 站點的用户和有效的登錄記錄。攻擊者常常這麼做——為了獲得一個用户清單，好進行暴力破解。</p><pre><code>ruby wpscan.rb --url http(s)://www.host-name.com --enumerate u
</code></pre><h4 id="列舉-timthumb-文件" tabindex="-1">列舉 Timthumb 文件 <a class="header-anchor" href="#列舉-timthumb-文件" aria-label="Permalink to “列舉 Timthumb 文件”">​</a></h4><p>關於 WPscan ，我要説的最後一個功能是列舉 timthub （縮略圖）相關的文件。近年來，timthumb 已經成為攻擊者眼裏的一個常見目標，因為無數的漏洞被找出來併發到論壇上、郵件列表等等地方。用下面的命令可以通過 wpscan 找出易受攻擊的 timthub 文件：</p><pre><code>ruby wpscan.rb --url http(s)://www.host-name.com --enumerate tt
</code></pre><h3 id="用-nmap-掃描你-vps-的開放端口" tabindex="-1">用 Nmap 掃描你 VPS 的開放端口 <a class="header-anchor" href="#用-nmap-掃描你-vps-的開放端口" aria-label="Permalink to “用 Nmap 掃描你 VPS 的開放端口”">​</a></h3><p><strong>Nmap</strong> 是一個開源的用於網絡探索和安全審查方面的工具。它可以迅速掃描巨大的網絡，也可一單機使用。Nmap 用原始 IP 數據包通過不同尋常的方法判斷網絡裏那些主機是正在工作的，那些主機上都提供了什麼服務（應用名稱和版本），是什麼操作系統（以及版本），用的什麼類型的防火牆，以及很多其他特徵。</p><h4 id="在-debian-和-ubuntu-上下載和安裝-nmap" tabindex="-1">在 Debian 和 Ubuntu 上下載和安裝 nmap <a class="header-anchor" href="#在-debian-和-ubuntu-上下載和安裝-nmap" aria-label="Permalink to “在 Debian 和 Ubuntu 上下載和安裝 nmap”">​</a></h4><p>要在基於 Debian 和 Ubuntu 的操作系統上安裝 nmap ，運行下面的命令：</p><pre><code>sudo apt-get install nmap
</code></pre><p><strong>輸出樣例</strong></p><pre><code>Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  nmap
0 upgraded, 1 newly installed, 0 to remove and 2 not upgraded.
Need to get 1,643 kB of archives.
After this operation, 6,913 kB of additional disk space will be used.
Get:1 http://mirrors.service.networklayer.com/ubuntu/ precise/main nmap amd64 5.21-1.1ubuntu1 [1,643 kB]
Fetched 1,643 kB in 0s (16.4 MB/s)
Selecting previously unselected package nmap.
(Reading database ... 56834 files and directories currently installed.)
Unpacking nmap (from .../nmap_5.21-1.1ubuntu1_amd64.deb) ...
Processing triggers for man-db ...
Setting up nmap (5.21-1.1ubuntu1) ...
</code></pre><h4 id="舉個例子" tabindex="-1">舉個例子 <a class="header-anchor" href="#舉個例子" aria-label="Permalink to “舉個例子”">​</a></h4><p>輸出 nmap 的版本：</p><pre><code>nmap -V
</code></pre><p>或者</p><pre><code>nmap --version
</code></pre><p><strong>輸出樣例</strong></p><pre><code>Nmap version 5.21 ( http://nmap.org )
</code></pre><h4 id="在-centos-上下載和安裝-nmap" tabindex="-1">在 Centos 上下載和安裝 nmap <a class="header-anchor" href="#在-centos-上下載和安裝-nmap" aria-label="Permalink to “在 Centos 上下載和安裝 nmap”">​</a></h4><p>要在基於 RHEL 的 Linux 上面安裝 nmap ，輸入下面的命令：</p><pre><code>yum install nmap
</code></pre><p><strong>輸出樣例</strong></p><pre><code>Loaded plugins: protectbase, rhnplugin, security
0 packages excluded due to repository protections
Setting up Install Process
Resolving Dependencies
--&gt; Running transaction check
---&gt; Package nmap.x86_64 2:5.51-2.el6 will be installed
--&gt; Finished Dependency Resolution
 
Dependencies Resolved
 
================================================================================
 Package    Arch         Version               Repository                  Size
================================================================================
Installing:
 nmap       x86_64       2:5.51-2.el6          rhel-x86_64-server-6       2.8 M
 
Transaction Summary
================================================================================
Install       1 Package(s)
 
Total download size: 2.8 M
Installed size: 0
Is this ok [y/N]: y
Downloading Packages:
nmap-5.51-2.el6.x86_64.rpm                               | 2.8 MB     00:00
Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing : 2:nmap-5.51-2.el6.x86_64                                     1/1
  Verifying  : 2:nmap-5.51-2.el6.x86_64                                     1/1
 
Installed:
  nmap.x86_64 2:5.51-2.el6
 
Complete!
</code></pre><h4 id="舉個例子-1" tabindex="-1">舉個例子 <a class="header-anchor" href="#舉個例子-1" aria-label="Permalink to “舉個例子”">​</a></h4><p>輸出 nmap 版本號：</p><pre><code>nmap --version
</code></pre><p><strong>輸出樣例</strong></p><pre><code>Nmap version 5.51 ( http://nmap.org )
</code></pre><h4 id="用-nmap-掃描端口" tabindex="-1">用 Nmap 掃描端口 <a class="header-anchor" href="#用-nmap-掃描端口" aria-label="Permalink to “用 Nmap 掃描端口”">​</a></h4><p>你可以用 nmap 來獲得很多關於你的服務器的信息，它可以讓你站在對你的網站不懷好意的人的角度看你自己的網站。</p><p>因此，請僅用它測試你自己的服務器或者在行動之前通知服務器的所有者。</p><p>nmap 的作者提供了一個測試服務器：</p><pre><code>scanme.nmap.org
</code></pre><p>有些命令可能會耗時較長：</p><p>要掃描一個 IP 地址或者一個主機名（全稱域名），運行：</p><pre><code>nmap 192.168.1.1
</code></pre><p>輸出樣例：</p><p><img src="http://s0.cyberciti.org/uploads/faq/2012/11/redhat-nmap-command-output.png" alt="Fig.01: nmap in action"></p><p>掃描以獲得主機的操作系統：</p><pre><code>sudo nmap -O 192.168.1.1
</code></pre><p>加上“-”或者“/24”來一次性掃描某個範圍裏面的多個主機：</p><pre><code>sudo nmap -PN xxx.xxx.xxx.xxx-yyy
</code></pre><p>掃描某個範圍內可用的服務：</p><pre><code>sudo nmap -sP network_address_range
</code></pre><p>掃描 IP 地址時部進行反向 DNS 解析。多數情況下這會加快你獲得結果的速度：</p><pre><code>sudo nmap -n remote_host
</code></pre><p>掃描一個特定端口而不是所有常用端口：</p><pre><code>sudo nmap -p port_number remote_host
</code></pre><p>掃描一個網絡，找出哪些服務器在線，分別運行了什麼服務。</p><p>這就是傳説中的主機探索或者 ping 掃描：</p><pre><code>nmap -sP 192.168.1.0/24
</code></pre><p>輸出樣例：</p><pre><code>Host 192.168.1.1 is up (0.00035s latency).
MAC Address: BC:AE:C5:C3:16:93 (Unknown)
Host 192.168.1.2 is up (0.0038s latency).
MAC Address: 74:44:01:40:57:FB (Unknown)
Host 192.168.1.5 is up.
Host nas03 (192.168.1.12) is up (0.0091s latency).
MAC Address: 00:11:32:11:15:FC (Synology Incorporated)
Nmap done: 256 IP addresses (4 hosts up) scanned in 2.80 second
</code></pre><p>理解端口配置和如何發現你的服務器上的攻擊目標只是確保你的信息和你的 VPS 安全的第一步。</p><h3 id="用-nikto-掃描你網站的缺陷" tabindex="-1">用 Nikto 掃描你網站的缺陷 <a class="header-anchor" href="#用-nikto-掃描你網站的缺陷" aria-label="Permalink to “用 Nikto 掃描你網站的缺陷”">​</a></h3>`,87)),t("p",null,[r(o,{href:"http://www.unixmen.com/install-nikto-web-scanner-check-vulnerabilities"},{default:s(()=>[...e[7]||(e[7]=[n("Nikto",-1)])]),_:1}),e[8]||(e[8]=n(" 網絡掃描器是一個開源的 web 服務器的掃描軟件，它可以用來掃描 web 服務器上的惡意的程序和文件。Nikto 也可以用來檢查軟件版本是否過期。Nikto 能進行簡單而快速地掃描以發現服務器上危險的文件和程序。掃描結束後會給出一個日誌文件。`",-1))]),e[40]||(e[40]=t("h4",{id:"在-linux-服務器上下載和安裝-nikto",tabindex:"-1"},[n("在 Linux 服務器上下載和安裝 Nikto "),t("a",{class:"header-anchor",href:"#在-linux-服務器上下載和安裝-nikto","aria-label":"Permalink to “在 Linux 服務器上下載和安裝 Nikto”"},"​")],-1)),t("p",null,[e[10]||(e[10]=n("Perl 在 Linux 上是預先安裝好的，所以你只需要從",-1)),r(o,{href:"https://cirt.net/nikto/"},{default:s(()=>[...e[9]||(e[9]=[n("項目頁面",-1)])]),_:1}),e[11]||(e[11]=n("下載 nikto ，解壓到一個目錄裏面，然後開始測試。",-1))]),e[41]||(e[41]=a(`<pre><code>wget https://cirt.net/nikto/nikto-2.1.4.tar.gz
</code></pre><p>你可以用某個歸檔管理工具解包，或者如下同時使用 tar 和 gzip ：</p><pre><code>tar zxvf nikto-2.1.4.tar.gz
cd nikto-2.1.4
perl nikto.pl
</code></pre><p>安裝正確的話會得到這樣的結果：</p><pre><code> - ***** SSL support not available (see docs for SSL install) *****
- Nikto v2.1.4
---------------------------------------------------------------------------
+ ERROR: No host specified

       -config+            Use this config file
       -Cgidirs+           scan these CGI dirs: &#39;none&#39;, &#39;all&#39;, or values like &quot;/cgi/ /cgi-a/&quot;
       -dbcheck            check database and other key files for syntax errors
       -Display+           Turn on/off display outputs
       -evasion+           ids evasion technique
       -Format+            save file (-o) format
       -host+              target host
       -Help               Extended help information
       -id+                Host authentication to use, format is id:pass or id:pass:realm
       -list-plugins       List all available plugins
       -mutate+            Guess additional file names
       -mutate-options+    Provide extra information for mutations
       -output+            Write output to this file
       -nocache            Disables the URI cache
       -nossl              Disables using SSL
       -no404              Disables 404 checks
       -port+              Port to use (default 80)
       -Plugins+           List of plugins to run (default: ALL)
       -root+              Prepend root value to all requests, format is /directory
       -ssl                Force ssl mode on port
       -Single             Single request mode
       -timeout+           Timeout (default 2 seconds)
       -Tuning+            Scan tuning
       -update             Update databases and plugins from CIRT.net
       -vhost+             Virtual host (for Host header)
       -Version            Print plugin and database versions
           + requires a value

    Note: This is the short help output. Use -H for full help.
</code></pre><p>這個報錯只是告訴我們沒有給出必要的參數。SSL 支持可以通過安裝相關的 perl ssl 模組得到（sudo apt-get install libnet-ssleay-perl）。</p><h4 id="更新-nikto-資料庫" tabindex="-1">更新 nikto 資料庫 <a class="header-anchor" href="#更新-nikto-資料庫" aria-label="Permalink to “更新 nikto 資料庫”">​</a></h4><p>在開始使用之前我們需要先更新 nikto 資料庫：</p><pre><code>/usr/local/bin/nikto.pl -update
</code></pre><p>下面的命令可以列出可用的 nikto 插件。</p><pre><code>nikto.pl -list-plugins // To list the installed plugins //
</code></pre><h4 id="掃描以尋找缺陷" tabindex="-1">掃描以尋找缺陷 <a class="header-anchor" href="#掃描以尋找缺陷" aria-label="Permalink to “掃描以尋找缺陷”">​</a></h4><p>我們用一個 url 來在做個簡單的測試。</p><pre><code>perl nikto.pl -h http://www.host-name.com
</code></pre><p><strong>輸出樣例</strong></p>`,15)),t("p",null,[e[13]||(e[13]=n("會有十分冗長的輸出，可能一開始會讓人感到困惑。許多 Nikto 的警報會返回 OSVDB 序號。這是由開源缺陷資料庫（",-1)),r(o,{href:"http://osvdb.org/"},{default:s(()=>[...e[12]||(e[12]=[n("http://osvdb.org/",-1)])]),_:1}),e[14]||(e[14]=n("）所指定。你可以在 OSVDB 上找出相關缺陷的深入説明。",-1))]),e[42]||(e[42]=t("pre",null,[t("code",null,`$ nikto -h http://www.host-name.com
- Nikto v2.1.4
---------------------------------------------------------------------------
+ Target IP:         1.2.3.4
+ Target Hostname:    host-name.com
+ Target Port:        80
+ Start Time:         2012-08-11 14:27:31
---------------------------------------------------------------------------
+ Server: Apache/2.2.22 (FreeBSD) mod_ssl/2.2.22 OpenSSL/1.0.1c DAV/2
+ robots.txt contains 4 entries which should be manually viewed.
+ mod_ssl/2.2.22 appears to be outdated (current is at least 2.8.31) (may depend on server version)
+ ETag header found on server, inode: 5918348, size: 121, mtime: 0x48fc943691040
+ mod_ssl/2.2.22 OpenSSL/1.0.1c DAV/2 - mod_ssl 2.8.7 and lower are vulnerable to a remote buffer overflow which may allow a remote shell (difficult to exploit). CVE-2002-0082, OSVDB-756.
+ Allowed HTTP Methods: GET, HEAD, POST, OPTIONS, TRACE 
+ OSVDB-877: HTTP TRACE method is active, suggesting the host is vulnerable to XST
+ /lists/admin/: PHPList pre 2.6.4 contains a number of vulnerabilities including remote administrative access, harvesting user info and more. Default login to admin interface is admin/phplist
+ OSVDB-2322: /gallery/search.php?searchstring=<script>alert(document.cookie)<\/script>: Gallery 1.3.4 and below is vulnerable to Cross Site Scripting (XSS). Upgrade to the latest version. http://www.securityfocus.com/bid/8288.
+ OSVDB-7022: /calendar.php?year=<script>alert(document.cookie);<\/script>&month=03&day=05: DCP-Portal v5.3.1 is vulnerable to  Cross Site Scripting (XSS). http://www.cert.org/advisories/CA-2000-02.html.
+ OSVDB-3233: /phpinfo.php: Contains PHP configuration information
+ OSVDB-3092: /system/: This might be interesting...
+ OSVDB-3092: /template/: This may be interesting as the directory may hold sensitive files or reveal system information.
+ OSVDB-3092: /updates/: This might be interesting...
+ OSVDB-3092: /README: README file found.
+ 6448 items checked: 1 error(s) and 14 item(s) reported on remote host
+ End Time:           2012-08-11 15:52:57 (5126 seconds)
---------------------------------------------------------------------------
+ 1 host(s) tested
$
`)],-1)),e[43]||(e[43]=t("p",null,[t("strong",null,"Nikto"),n(" 是一個非常輕量級的通用工具。因為 Nikto 是用 Perl 寫的，所以它可以在幾乎任何服務器的操作系統上運行。")],-1)),t("p",null,[e[16]||(e[16]=n("希望這篇文章能在你檢查 wordpress 站點的缺陷的時候給你一些提示。我之前的文章",-1)),r(o,{href:"http://www.unixmen.com/secure-wordpress-website/"},{default:s(()=>[...e[15]||(e[15]=[n("如何安全加固 WordPress 站點",-1)])]),_:1}),e[17]||(e[17]=n("記錄了一個",-1)),e[18]||(e[18]=t("strong",null,"清單",-1)),e[19]||(e[19]=n("，可以讓你保護你的 WordPress 站點的工作變得更簡單。",-1))]),e[44]||(e[44]=t("p",null,"有想説的，留下你的評論。",-1)),e[45]||(e[45]=t("hr",null,null,-1)),t("p",null,[e[21]||(e[21]=n("via: ",-1)),r(o,{href:"http://www.unixmen.com/scan-check-wordpress-website-security-using-wpscan-nmap-nikto/"},{default:s(()=>[...e[20]||(e[20]=[n("http://www.unixmen.com/scan-check-wordpress-website-security-using-wpscan-nmap-nikto/",-1)])]),_:1})]),t("p",null,[e[25]||(e[25]=n("作者：",-1)),r(o,{href:"http://www.unixmen.com/author/anis/"},{default:s(()=>[...e[22]||(e[22]=[n("anismaj",-1)])]),_:1}),e[26]||(e[26]=n(" 譯者：",-1)),r(o,{href:"https://github.com/boredivan"},{default:s(()=>[...e[23]||(e[23]=[n("boredivan",-1)])]),_:1}),e[27]||(e[27]=n(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[24]||(e[24]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[30]||(e[30]=n("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[28]||(e[28]=[n("LCTT",-1)])]),_:1}),e[31]||(e[31]=n(" 原創翻譯，",-1)),r(o,{href:"http://linux.cn/"},{default:s(()=>[...e[29]||(e[29]=[n("Linux中國",-1)])]),_:1}),e[32]||(e[32]=n(" 榮譽推出",-1))])])}const S=i(u,[["render",m]]);export{k as __pageData,S as default};
