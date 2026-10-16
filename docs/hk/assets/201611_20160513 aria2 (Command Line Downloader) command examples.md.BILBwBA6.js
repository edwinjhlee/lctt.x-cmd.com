import{_ as t,a0 as o,w as d,s as r,I as l,x as s,a1 as p,A as i,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"aria2 （命令列下載器）實例 | LCTT x X-CMD","titleTemplate":false,"description":"aria2 （命令列下載器）實例 | LCTT (201611) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"aria2 （命令列下載器）實例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"aria2 （命令列下載器）實例 | LCTT (201611) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201611/20160513 aria2 (Command Line Downloader) command examples","title":"aria2 （命令列下載器）實例","tag":"201611","desc":""},"relativePath":"201611/20160513 aria2 (Command Line Downloader) command examples.md","filePath":"[post].md"}'),c={name:"201611/20160513 aria2 (Command Line Downloader) command examples.md"};function h(g,a,u,b,k,m){const n=o("Link");return d(),r("div",null,[a[22]||(a[22]=l("h1",{id:"aria2-命令列下載器-實例",tabindex:"-1"},[s("aria2 （命令列下載器）實例 "),l("a",{class:"header-anchor",href:"#aria2-命令列下載器-實例","aria-label":"Permalink to “aria2 （命令列下載器）實例”"},"​")],-1)),l("p",null,[p(n,{href:"https://aria2.github.io/"},{default:i(()=>[...a[0]||(a[0]=[s("aria2",-1)])]),_:1}),a[2]||(a[2]=s(" 是一個自由、開源、輕量級多協議和多源的命令列下載工具。它支持 HTTP/HTTPS、FTP、SFTP、 BitTorrent 和 Metalink 協議。aria2 可以通過內建的 JSON-RPC 和 XML-RPC 接口來操縱。aria2 下載文件的時候，自動驗證數據塊。它可以通過多個來源或者多個協議下載一個文件，並且會嘗試利用你的最大下載帶寬。默認情況下，所有的 Linux 發行版都包括 aria2，所以我們可以從官方庫中很容易的安裝。一些 GUI 下載管理器例如 ",-1)),p(n,{href:"http://www.2daygeek.com/install-uget-download-manager-on-ubuntu-centos-debian-fedora-mint-rhel-opensuse/"},{default:i(()=>[...a[1]||(a[1]=[s("uget",-1)])]),_:1}),a[3]||(a[3]=s(" 使用 aria2 作為插件來提高下載速度。",-1))]),a[23]||(a[23]=e('<h3 id="aria2-特性" tabindex="-1">Aria2 特性 <a class="header-anchor" href="#aria2-特性" aria-label="Permalink to “Aria2 特性”">​</a></h3><ul><li>支持 HTTP/HTTPS GET</li><li>支持 HTTP 代理</li><li>支持 HTTP BASIC 認證</li><li>支持 HTTP 代理認證</li><li>支持 FTP （主動、被動模式）</li><li>通過 HTTP 代理的 FTP（GET 命令列或者隧道）</li><li>分段下載</li><li>支持 Cookie</li><li>可以作為守護進程運行。</li><li>支持使用 fast 擴展的 BitTorrent 協議</li><li>支持在多文件 torrent 中選擇文件</li><li>支持 Metalink 3.0 版本（HTTP/FTP/BitTorrent）</li><li>限制下載、上傳速度</li></ul><h3 id="_1-linux-下安裝-aria2" tabindex="-1">1) Linux 下安裝 aria2 <a class="header-anchor" href="#_1-linux-下安裝-aria2" aria-label="Permalink to “1) Linux 下安裝 aria2”">​</a></h3>',3)),l("p",null,[a[6]||(a[6]=s("我們可以很容易的在所有的 Linux 發行版上安裝 aria2 命令列下載器，例如 Debian、 Ubuntu、 Mint、 RHEL、 CentOS、 Fedora、 suse、 openSUSE、 Arch Linux、 Manjaro、 Mageia 等等……只需要輸入下面的命令安裝即可。對於 CentOS、 RHEL 系統，我們需要開啓 ",-1)),p(n,{href:"http://www.2daygeek.com/aria2-command-line-download-utility-tool/"},{default:i(()=>[...a[4]||(a[4]=[s("uget",-1)])]),_:1}),a[7]||(a[7]=s(" 或者 ",-1)),p(n,{href:"http://www.2daygeek.com/aria2-command-line-download-utility-tool/"},{default:i(()=>[...a[5]||(a[5]=[s("RPMForge",-1)])]),_:1}),a[8]||(a[8]=s(" 庫的支持。",-1))]),a[24]||(a[24]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[對於 Debian、 Ubuntu 和 Mint]</span></span>
<span class="line"><span>$ sudo apt-get install aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[對於 CentOS、 RHEL、 Fedora 21 和更早些的操作系統]</span></span>
<span class="line"><span># yum install aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Fedora 22 和 之後的系統]</span></span>
<span class="line"><span># dnf install aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[對於 suse 和 openSUSE]</span></span>
<span class="line"><span># zypper install wget</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Mageia]</span></span>
<span class="line"><span># urpmi aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[對於 Debian、 Ubuntu 和 Mint]</span></span>
<span class="line"><span>$ sudo pacman -S aria2</span></span></code></pre></div><h3 id="_2-下載單個文件" tabindex="-1">2) 下載單個文件 <a class="header-anchor" href="#_2-下載單個文件" aria-label="Permalink to “2) 下載單個文件”">​</a></h3><p>下面的命令將會從指定的 URL 中下載一個文件，並且保存在當前目錄，在下載文件的過程中，我們可以看到文件的（日期、時間、下載速度和下載進度）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#986c80 19MiB/21MiB(90%) CN:1 DL:3.0MiB]</span></span>
<span class="line"><span>03/22 09:49:13 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>986c80|OK  |   3.0MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_3-使用不同的名字保存文件" tabindex="-1">3) 使用不同的名字保存文件 <a class="header-anchor" href="#_3-使用不同的名字保存文件" aria-label="Permalink to “3) 使用不同的名字保存文件”">​</a></h3><p>在初始化下載的時候，我們可以使用 <code>-o</code>（小寫）選項在保存文件的時候使用不同的名字。這兒我們將要使用 owncloud.zip 文件名來保存文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -o owncloud.zip https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#d31304 16MiB/21MiB(74%) CN:1 DL:6.2MiB]</span></span>
<span class="line"><span>03/22 09:51:02 [NOTICE] Download complete: /opt/owncloud.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>d31304|OK  |   7.3MiB/s|/opt/owncloud.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_4-下載速度限制" tabindex="-1">4) 下載速度限制 <a class="header-anchor" href="#_4-下載速度限制" aria-label="Permalink to “4) 下載速度限制”">​</a></h3><p>默認情況下，aria2 會利用全部帶寬來下載文件，在文件下載完成之前，我們在服務器就什麼也做不了（這將會影響其他服務訪問帶寬）。所以在下載大文件時最好使用 <code>–max-download-limit</code> 選項來避免進一步的問題。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c --max-download-limit=500k https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#7f9fbf 21MiB/21MiB(99%) CN:1 DL:466KiB]</span></span>
<span class="line"><span>03/22 09:54:51 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>7f9fbf|OK  |   462KiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_5-下載多個文件" tabindex="-1">5) 下載多個文件 <a class="header-anchor" href="#_5-下載多個文件" aria-label="Permalink to “5) 下載多個文件”">​</a></h3><p>下面的命令將會從指定位置下載超過一個的文件並保存到當前目錄，在下載文件的過程中，我們可以看到文件的（日期、時間、下載速度和下載進度）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -Z https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2 ftp://ftp.gnu.org/gnu/wget/wget-1.17.tar.gz</span></span>
<span class="line"><span>[DL:1.7MiB][#53533c 272KiB/21MiB(1%)][#b52bb1 768KiB/3.6MiB(20%)]</span></span>
<span class="line"><span>03/22 10:25:54 [NOTICE] Download complete: /opt/wget-1.17.tar.gz</span></span>
<span class="line"><span>[#53533c 18MiB/21MiB(86%) CN:1 DL:3.2MiB]</span></span>
<span class="line"><span>03/22 10:25:59 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>b52bb1|OK  |   2.8MiB/s|/opt/wget-1.17.tar.gz</span></span>
<span class="line"><span>53533c|OK  |   3.4MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_6-續傳未完成的下載" tabindex="-1">6) 續傳未完成的下載 <a class="header-anchor" href="#_6-續傳未完成的下載" aria-label="Permalink to “6) 續傳未完成的下載”">​</a></h3><p>當你遇到一些網絡連接問題或者系統問題的時候，並將要下載一個大文件（例如： ISO 鏡像文件），我建議你使用 <code>-c</code> 選項，它可以幫助我們從該狀態續傳未完成的下載，並且像往常一樣完成。不然的話，當你再次下載，它將會初始化新的下載，並保存成一個不同的文件名（自動的在文件名後面添加 .1 ）。注意：如果出現了任何中斷，aria2 使用 .aria2 後綴保存（未完成的）文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -c https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#db0b08 8.2MiB/21MiB(38%) CN:1 DL:3.1MiB ETA:4s]^C</span></span>
<span class="line"><span>03/22 10:09:26 [NOTICE] Shutdown sequence commencing... Press Ctrl-C again for emergency shutdown.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>03/22 10:09:26 [NOTICE] Download GID#db0b08bf55d5908d not complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>db0b08|INPR|   3.3MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(INPR):download in-progress.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果重新啓動傳輸，aria2 將會恢復下載。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># aria2c -c https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#873d08 21MiB/21MiB(98%) CN:1 DL:2.7MiB]</span></span>
<span class="line"><span>03/22 10:09:57 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>873d08|OK  |   1.9MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_7-從文件獲取輸入" tabindex="-1">7) 從文件獲取輸入 <a class="header-anchor" href="#_7-從文件獲取輸入" aria-label="Permalink to “7) 從文件獲取輸入”">​</a></h3><p>就像 wget 可以從一個文件獲取輸入的 URL 列表來下載一樣。我們需要創建一個文件，將每一個 URL 存儲在單獨的行中。ara2 命令列可以添加 <code>-i</code> 選項來執行此操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -i test-aria2.txt</span></span>
<span class="line"><span>[DL:3.9MiB][#b97984 192KiB/21MiB(0%)][#673c8e 2.5MiB/3.6MiB(69%)]</span></span>
<span class="line"><span>03/22 10:14:22 [NOTICE] Download complete: /opt/wget-1.17.tar.gz</span></span>
<span class="line"><span>[#b97984 19MiB/21MiB(90%) CN:1 DL:2.5MiB]</span></span>
<span class="line"><span>03/22 10:14:30 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>673c8e|OK  |   4.3MiB/s|/opt/wget-1.17.tar.gz</span></span>
<span class="line"><span>b97984|OK  |   2.5MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_8-每個主機使用兩個連接來下載" tabindex="-1">8) 每個主機使用兩個連接來下載 <a class="header-anchor" href="#_8-每個主機使用兩個連接來下載" aria-label="Permalink to “8) 每個主機使用兩個連接來下載”">​</a></h3><p>默認情況，每次下載連接到一台服務器的最大數目，對於一條主機只能建立一條。我們可以通過 aria2 命令列添加 <code>-x2</code>（2 表示兩個連接）來創建到每台主機的多個連接，以加快下載速度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -x2 https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#ddd4cd 18MiB/21MiB(83%) CN:1 DL:5.0MiB]</span></span>
<span class="line"><span>03/22 10:16:27 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>ddd4cd|OK  |   5.5MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_9-下載-bittorrent-種子文件" tabindex="-1">9) 下載 BitTorrent 種子文件 <a class="header-anchor" href="#_9-下載-bittorrent-種子文件" aria-label="Permalink to “9) 下載 BitTorrent 種子文件”">​</a></h3><p>我們可以使用 aria2 命令列直接下載一個 BitTorrent 種子文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c https://torcache.net/torrent/C86F4E743253E0EBF3090CCFFCC9B56FA38451A3.torrent?title=[kat.cr]irudhi.suttru.2015.official.teaser.full.hd.1080p.pathi.team.sr</span></span>
<span class="line"><span>[#388321 0B/0B CN:1 DL:0B]                                                                                                                    </span></span>
<span class="line"><span>03/22 20:06:14 [NOTICE] Download complete: /opt/[kat.cr]irudhi.suttru.2015.official.teaser.full.hd.1080p.pathi.team.sr.torrent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>03/22 20:06:14 [ERROR] Exception caught</span></span>
<span class="line"><span>Exception: [BtPostDownloadHandler.cc:98] errorCode=25 Could not parse BitTorrent metainfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>388321|OK  |    11MiB/s|/opt/[kat.cr]irudhi.suttru.2015.official.teaser.full.hd.1080p.pathi.team.sr.torrent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_10-下載-bittorrent-磁力鏈接" tabindex="-1">10) 下載 BitTorrent 磁力鏈接 <a class="header-anchor" href="#_10-下載-bittorrent-磁力鏈接" aria-label="Permalink to “10) 下載 BitTorrent 磁力鏈接”">​</a></h3><p>使用 aria2 我們也可以通過 BitTorrent 磁力鏈接直接下載一個種子文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c &#39;magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C&#39;</span></span></code></pre></div><h3 id="_11-下載-bittorrent-metalink-種子" tabindex="-1">11) 下載 BitTorrent Metalink 種子 <a class="header-anchor" href="#_11-下載-bittorrent-metalink-種子" aria-label="Permalink to “11) 下載 BitTorrent Metalink 種子”">​</a></h3><p>我們也可以通過 aria2 命令列直接下載一個 Metalink 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c https://curl.haxx.se/metalink.cgi?curl=tar.bz2</span></span></code></pre></div><h3 id="_12-從密碼保護的網站下載一個文件" tabindex="-1">12) 從密碼保護的網站下載一個文件 <a class="header-anchor" href="#_12-從密碼保護的網站下載一個文件" aria-label="Permalink to “12) 從密碼保護的網站下載一個文件”">​</a></h3><p>或者，我們也可以從一個密碼保護網站下載一個文件。下面的命令列將會從一個密碼保護網站中下載文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c --http-user=xxx --http-password=xxx https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># aria2c --ftp-user=xxx --ftp-password=xxx ftp://ftp.gnu.org/gnu/wget/wget-1.17.tar.gz</span></span></code></pre></div><h3 id="_13-閲讀更多關於-aria2" tabindex="-1">13) 閲讀更多關於 aria2 <a class="header-anchor" href="#_13-閲讀更多關於-aria2" aria-label="Permalink to “13) 閲讀更多關於 aria2”">​</a></h3><p>如果你希望瞭解瞭解更多選項 —— 它們同時適用於 wget，可以輸入下面的命令列在你自己的終端獲取詳細信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># man aria2c</span></span>
<span class="line"><span>or</span></span>
<span class="line"><span># aria2c --help</span></span></code></pre></div><p>謝謝欣賞 …）</p><hr>`,39)),l("p",null,[a[10]||(a[10]=s("via: ",-1)),p(n,{href:"http://www.2daygeek.com/aria2-command-line-download-utility-tool/"},{default:i(()=>[...a[9]||(a[9]=[s("http://www.2daygeek.com/aria2-command-line-download-utility-tool/",-1)])]),_:1})]),l("p",null,[a[14]||(a[14]=s("作者：",-1)),p(n,{href:"http://www.2daygeek.com/author/magesh/"},{default:i(()=>[...a[11]||(a[11]=[s("MAGESH MARUTHAMUTHU",-1)])]),_:1}),a[15]||(a[15]=s(" 譯者：",-1)),p(n,{href:"https://github.com/yangmingming"},{default:i(()=>[...a[12]||(a[12]=[s("yangmingming",-1)])]),_:1}),a[16]||(a[16]=s(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:i(()=>[...a[13]||(a[13]=[s("wxy",-1)])]),_:1})]),l("p",null,[a[19]||(a[19]=s("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...a[17]||(a[17]=[s("LCTT",-1)])]),_:1}),a[20]||(a[20]=s(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:i(()=>[...a[18]||(a[18]=[s("Linux中國",-1)])]),_:1}),a[21]||(a[21]=s(" 榮譽推出",-1))])])}const T=t(c,[["render",h]]);export{C as __pageData,T as default};
