import{_ as t,a0 as o,w as d,s as r,I as l,x as s,a1 as p,A as i,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"aria2 （命令行下载器）实例 | LCTT x X-CMD","titleTemplate":false,"description":"aria2 （命令行下载器）实例 | LCTT (201611) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"aria2 （命令行下载器）实例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"aria2 （命令行下载器）实例 | LCTT (201611) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201611/20160513 aria2 (Command Line Downloader) command examples","title":"aria2 （命令行下载器）实例","tag":"201611","desc":""},"relativePath":"201611/20160513 aria2 (Command Line Downloader) command examples.md","filePath":"[post].md"}'),c={name:"201611/20160513 aria2 (Command Line Downloader) command examples.md"};function h(g,a,u,b,k,m){const n=o("Link");return d(),r("div",null,[a[22]||(a[22]=l("h1",{id:"aria2-命令行下载器-实例",tabindex:"-1"},[s("aria2 （命令行下载器）实例 "),l("a",{class:"header-anchor",href:"#aria2-命令行下载器-实例","aria-label":"Permalink to “aria2 （命令行下载器）实例”"},"​")],-1)),l("p",null,[p(n,{href:"https://aria2.github.io/"},{default:i(()=>[...a[0]||(a[0]=[s("aria2",-1)])]),_:1}),a[2]||(a[2]=s(" 是一个自由、开源、轻量级多协议和多源的命令行下载工具。它支持 HTTP/HTTPS、FTP、SFTP、 BitTorrent 和 Metalink 协议。aria2 可以通过内建的 JSON-RPC 和 XML-RPC 接口来操纵。aria2 下载文件的时候，自动验证数据块。它可以通过多个来源或者多个协议下载一个文件，并且会尝试利用你的最大下载带宽。默认情况下，所有的 Linux 发行版都包括 aria2，所以我们可以从官方库中很容易的安装。一些 GUI 下载管理器例如 ",-1)),p(n,{href:"http://www.2daygeek.com/install-uget-download-manager-on-ubuntu-centos-debian-fedora-mint-rhel-opensuse/"},{default:i(()=>[...a[1]||(a[1]=[s("uget",-1)])]),_:1}),a[3]||(a[3]=s(" 使用 aria2 作为插件来提高下载速度。",-1))]),a[23]||(a[23]=e('<h3 id="aria2-特性" tabindex="-1">Aria2 特性 <a class="header-anchor" href="#aria2-特性" aria-label="Permalink to “Aria2 特性”">​</a></h3><ul><li>支持 HTTP/HTTPS GET</li><li>支持 HTTP 代理</li><li>支持 HTTP BASIC 认证</li><li>支持 HTTP 代理认证</li><li>支持 FTP （主动、被动模式）</li><li>通过 HTTP 代理的 FTP（GET 命令行或者隧道）</li><li>分段下载</li><li>支持 Cookie</li><li>可以作为守护进程运行。</li><li>支持使用 fast 扩展的 BitTorrent 协议</li><li>支持在多文件 torrent 中选择文件</li><li>支持 Metalink 3.0 版本（HTTP/FTP/BitTorrent）</li><li>限制下载、上传速度</li></ul><h3 id="_1-linux-下安装-aria2" tabindex="-1">1) Linux 下安装 aria2 <a class="header-anchor" href="#_1-linux-下安装-aria2" aria-label="Permalink to “1) Linux 下安装 aria2”">​</a></h3>',3)),l("p",null,[a[6]||(a[6]=s("我们可以很容易的在所有的 Linux 发行版上安装 aria2 命令行下载器，例如 Debian、 Ubuntu、 Mint、 RHEL、 CentOS、 Fedora、 suse、 openSUSE、 Arch Linux、 Manjaro、 Mageia 等等……只需要输入下面的命令安装即可。对于 CentOS、 RHEL 系统，我们需要开启 ",-1)),p(n,{href:"http://www.2daygeek.com/aria2-command-line-download-utility-tool/"},{default:i(()=>[...a[4]||(a[4]=[s("uget",-1)])]),_:1}),a[7]||(a[7]=s(" 或者 ",-1)),p(n,{href:"http://www.2daygeek.com/aria2-command-line-download-utility-tool/"},{default:i(()=>[...a[5]||(a[5]=[s("RPMForge",-1)])]),_:1}),a[8]||(a[8]=s(" 库的支持。",-1))]),a[24]||(a[24]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[对于 Debian、 Ubuntu 和 Mint]</span></span>
<span class="line"><span>$ sudo apt-get install aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[对于 CentOS、 RHEL、 Fedora 21 和更早些的操作系统]</span></span>
<span class="line"><span># yum install aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Fedora 22 和 之后的系统]</span></span>
<span class="line"><span># dnf install aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[对于 suse 和 openSUSE]</span></span>
<span class="line"><span># zypper install wget</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Mageia]</span></span>
<span class="line"><span># urpmi aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[对于 Debian、 Ubuntu 和 Mint]</span></span>
<span class="line"><span>$ sudo pacman -S aria2</span></span></code></pre></div><h3 id="_2-下载单个文件" tabindex="-1">2) 下载单个文件 <a class="header-anchor" href="#_2-下载单个文件" aria-label="Permalink to “2) 下载单个文件”">​</a></h3><p>下面的命令将会从指定的 URL 中下载一个文件，并且保存在当前目录，在下载文件的过程中，我们可以看到文件的（日期、时间、下载速度和下载进度）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#986c80 19MiB/21MiB(90%) CN:1 DL:3.0MiB]</span></span>
<span class="line"><span>03/22 09:49:13 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>986c80|OK  |   3.0MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_3-使用不同的名字保存文件" tabindex="-1">3) 使用不同的名字保存文件 <a class="header-anchor" href="#_3-使用不同的名字保存文件" aria-label="Permalink to “3) 使用不同的名字保存文件”">​</a></h3><p>在初始化下载的时候，我们可以使用 <code>-o</code>（小写）选项在保存文件的时候使用不同的名字。这儿我们将要使用 owncloud.zip 文件名来保存文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -o owncloud.zip https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#d31304 16MiB/21MiB(74%) CN:1 DL:6.2MiB]</span></span>
<span class="line"><span>03/22 09:51:02 [NOTICE] Download complete: /opt/owncloud.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>d31304|OK  |   7.3MiB/s|/opt/owncloud.zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_4-下载速度限制" tabindex="-1">4) 下载速度限制 <a class="header-anchor" href="#_4-下载速度限制" aria-label="Permalink to “4) 下载速度限制”">​</a></h3><p>默认情况下，aria2 会利用全部带宽来下载文件，在文件下载完成之前，我们在服务器就什么也做不了（这将会影响其他服务访问带宽）。所以在下载大文件时最好使用 <code>–max-download-limit</code> 选项来避免进一步的问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c --max-download-limit=500k https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#7f9fbf 21MiB/21MiB(99%) CN:1 DL:466KiB]</span></span>
<span class="line"><span>03/22 09:54:51 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>7f9fbf|OK  |   462KiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_5-下载多个文件" tabindex="-1">5) 下载多个文件 <a class="header-anchor" href="#_5-下载多个文件" aria-label="Permalink to “5) 下载多个文件”">​</a></h3><p>下面的命令将会从指定位置下载超过一个的文件并保存到当前目录，在下载文件的过程中，我们可以看到文件的（日期、时间、下载速度和下载进度）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -Z https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2 ftp://ftp.gnu.org/gnu/wget/wget-1.17.tar.gz</span></span>
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
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_6-续传未完成的下载" tabindex="-1">6) 续传未完成的下载 <a class="header-anchor" href="#_6-续传未完成的下载" aria-label="Permalink to “6) 续传未完成的下载”">​</a></h3><p>当你遇到一些网络连接问题或者系统问题的时候，并将要下载一个大文件（例如： ISO 镜像文件），我建议你使用 <code>-c</code> 选项，它可以帮助我们从该状态续传未完成的下载，并且像往常一样完成。不然的话，当你再次下载，它将会初始化新的下载，并保存成一个不同的文件名（自动的在文件名后面添加 .1 ）。注意：如果出现了任何中断，aria2 使用 .aria2 后缀保存（未完成的）文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -c https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
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
<span class="line"><span>如果重新启动传输，aria2 将会恢复下载。</span></span>
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
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_7-从文件获取输入" tabindex="-1">7) 从文件获取输入 <a class="header-anchor" href="#_7-从文件获取输入" aria-label="Permalink to “7) 从文件获取输入”">​</a></h3><p>就像 wget 可以从一个文件获取输入的 URL 列表来下载一样。我们需要创建一个文件，将每一个 URL 存储在单独的行中。ara2 命令行可以添加 <code>-i</code> 选项来执行此操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -i test-aria2.txt</span></span>
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
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_8-每个主机使用两个连接来下载" tabindex="-1">8) 每个主机使用两个连接来下载 <a class="header-anchor" href="#_8-每个主机使用两个连接来下载" aria-label="Permalink to “8) 每个主机使用两个连接来下载”">​</a></h3><p>默认情况，每次下载连接到一台服务器的最大数目，对于一条主机只能建立一条。我们可以通过 aria2 命令行添加 <code>-x2</code>（2 表示两个连接）来创建到每台主机的多个连接，以加快下载速度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c -x2 https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span>[#ddd4cd 18MiB/21MiB(83%) CN:1 DL:5.0MiB]</span></span>
<span class="line"><span>03/22 10:16:27 [NOTICE] Download complete: /opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Download Results:</span></span>
<span class="line"><span>gid   |stat|avg speed  |path/URI</span></span>
<span class="line"><span>======+====+===========+=======================================================</span></span>
<span class="line"><span>ddd4cd|OK  |   5.5MiB/s|/opt/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status Legend:</span></span>
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_9-下载-bittorrent-种子文件" tabindex="-1">9) 下载 BitTorrent 种子文件 <a class="header-anchor" href="#_9-下载-bittorrent-种子文件" aria-label="Permalink to “9) 下载 BitTorrent 种子文件”">​</a></h3><p>我们可以使用 aria2 命令行直接下载一个 BitTorrent 种子文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c https://torcache.net/torrent/C86F4E743253E0EBF3090CCFFCC9B56FA38451A3.torrent?title=[kat.cr]irudhi.suttru.2015.official.teaser.full.hd.1080p.pathi.team.sr</span></span>
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
<span class="line"><span>(OK):download completed.</span></span></code></pre></div><h3 id="_10-下载-bittorrent-磁力链接" tabindex="-1">10) 下载 BitTorrent 磁力链接 <a class="header-anchor" href="#_10-下载-bittorrent-磁力链接" aria-label="Permalink to “10) 下载 BitTorrent 磁力链接”">​</a></h3><p>使用 aria2 我们也可以通过 BitTorrent 磁力链接直接下载一个种子文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c &#39;magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C&#39;</span></span></code></pre></div><h3 id="_11-下载-bittorrent-metalink-种子" tabindex="-1">11) 下载 BitTorrent Metalink 种子 <a class="header-anchor" href="#_11-下载-bittorrent-metalink-种子" aria-label="Permalink to “11) 下载 BitTorrent Metalink 种子”">​</a></h3><p>我们也可以通过 aria2 命令行直接下载一个 Metalink 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c https://curl.haxx.se/metalink.cgi?curl=tar.bz2</span></span></code></pre></div><h3 id="_12-从密码保护的网站下载一个文件" tabindex="-1">12) 从密码保护的网站下载一个文件 <a class="header-anchor" href="#_12-从密码保护的网站下载一个文件" aria-label="Permalink to “12) 从密码保护的网站下载一个文件”">​</a></h3><p>或者，我们也可以从一个密码保护网站下载一个文件。下面的命令行将会从一个密码保护网站中下载文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># aria2c --http-user=xxx --http-password=xxx https://download.owncloud.org/community/owncloud-9.0.0.tar.bz2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># aria2c --ftp-user=xxx --ftp-password=xxx ftp://ftp.gnu.org/gnu/wget/wget-1.17.tar.gz</span></span></code></pre></div><h3 id="_13-阅读更多关于-aria2" tabindex="-1">13) 阅读更多关于 aria2 <a class="header-anchor" href="#_13-阅读更多关于-aria2" aria-label="Permalink to “13) 阅读更多关于 aria2”">​</a></h3><p>如果你希望了解了解更多选项 —— 它们同时适用于 wget，可以输入下面的命令行在你自己的终端获取详细信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># man aria2c</span></span>
<span class="line"><span>or</span></span>
<span class="line"><span># aria2c --help</span></span></code></pre></div><p>谢谢欣赏 …）</p><hr>`,39)),l("p",null,[a[10]||(a[10]=s("via: ",-1)),p(n,{href:"http://www.2daygeek.com/aria2-command-line-download-utility-tool/"},{default:i(()=>[...a[9]||(a[9]=[s("http://www.2daygeek.com/aria2-command-line-download-utility-tool/",-1)])]),_:1})]),l("p",null,[a[14]||(a[14]=s("作者：",-1)),p(n,{href:"http://www.2daygeek.com/author/magesh/"},{default:i(()=>[...a[11]||(a[11]=[s("MAGESH MARUTHAMUTHU",-1)])]),_:1}),a[15]||(a[15]=s(" 译者：",-1)),p(n,{href:"https://github.com/yangmingming"},{default:i(()=>[...a[12]||(a[12]=[s("yangmingming",-1)])]),_:1}),a[16]||(a[16]=s(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:i(()=>[...a[13]||(a[13]=[s("wxy",-1)])]),_:1})]),l("p",null,[a[19]||(a[19]=s("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...a[17]||(a[17]=[s("LCTT",-1)])]),_:1}),a[20]||(a[20]=s(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:i(()=>[...a[18]||(a[18]=[s("Linux中国",-1)])]),_:1}),a[21]||(a[21]=s(" 荣誉推出",-1))])])}const T=t(c,[["render",h]]);export{C as __pageData,T as default};
