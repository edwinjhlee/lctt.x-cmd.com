import{_ as i,a0 as c,w as r,s,ao as l,I as p,x as a,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"apt-get 和 apt-cache 命令實例展示 | LCTT x X-CMD","titleTemplate":false,"description":"apt-get 和 apt-cache 命令實例展示 | LCTT (201502) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"apt-get 和 apt-cache 命令實例展示 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"apt-get 和 apt-cache 命令實例展示 | LCTT (201502) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201502/20150105 Ubuntu apt-get and apt-cache commands with practical examples","title":"apt-get 和 apt-cache 命令實例展示","tag":"201502","desc":""},"relativePath":"201502/20150105 Ubuntu apt-get and apt-cache commands with practical examples.md","filePath":"[post].md"}'),d={name:"201502/20150105 Ubuntu apt-get and apt-cache commands with practical examples.md"};function h(u,e,g,m,b,x){const t=c("Link");return r(),s("div",null,[e[13]||(e[13]=l(`<h1 id="apt-get-和-apt-cache-命令實例展示" tabindex="-1">apt-get 和 apt-cache 命令實例展示 <a class="header-anchor" href="#apt-get-和-apt-cache-命令實例展示" aria-label="Permalink to “apt-get 和 apt-cache 命令實例展示”">​</a></h1><p>apt-get和apt-cache是<strong>Ubuntu Linux</strong>中的命令列下的<strong>包管理</strong>工具。 apt-get的GUI版本是Synaptic包管理器。本篇中我們會展示apt-get和apt-cache命令的15個不同例子。</p><h3 id="示例-1-列出所有可用包" tabindex="-1">示例：1 列出所有可用包 <a class="header-anchor" href="#示例-1-列出所有可用包" aria-label="Permalink to “示例：1 列出所有可用包”">​</a></h3><pre><code>linuxtechi@localhost:~$ apt-cache pkgnames
account-plugin-yahoojp
ceph-fuse
dvd+rw-tools
e3
gnome-commander-data
grub-gfxpayload-lists
gweled
.......................................
</code></pre><h3 id="示例-2-用關鍵字搜索包" tabindex="-1">示例：2 用關鍵字搜索包 <a class="header-anchor" href="#示例-2-用關鍵字搜索包" aria-label="Permalink to “示例：2 用關鍵字搜索包”">​</a></h3><p>這個命令在你不確定包名時很有用，只要在apt-cache（LCTT 譯註：這裏原文是apt-get，應為筆誤）後面輸入與包相關的關鍵字即可。</p><pre><code>linuxtechi@localhost:~$ apt-cache search &quot;web server&quot;
apache2 - Apache HTTP Server
apache2-bin - Apache HTTP Server (binary files and modules)
apache2-data - Apache HTTP Server (common files)
apache2-dbg - Apache debugging symbols
apache2-dev - Apache HTTP Server (development headers)
apache2-doc - Apache HTTP Server (on-site documentation)
apache2-utils - Apache HTTP Server (utility programs for web servers)
......................................................................
</code></pre><p><strong>注意</strong>： 如果你安裝了“<strong>apt-file</strong>”包，我們就可以像下面那樣用配置文件搜索包。</p><pre><code>linuxtechi@localhost:~$ apt-file search nagios.cfg
ganglia-nagios-bridge: /usr/share/doc/ganglia-nagios-bridge/nagios.cfg
nagios3-common: /etc/nagios3/nagios.cfg
nagios3-common: /usr/share/doc/nagios3-common/examples/nagios.cfg.gz
pnp4nagios-bin: /etc/pnp4nagios/nagios.cfg
pnp4nagios-bin: /usr/share/doc/pnp4nagios/examples/nagios.cfg
</code></pre><h3 id="示例-3-顯示特定包的基本信息" tabindex="-1">示例：3 顯示特定包的基本信息 <a class="header-anchor" href="#示例-3-顯示特定包的基本信息" aria-label="Permalink to “示例：3 顯示特定包的基本信息”">​</a></h3><pre><code>linuxtechi@localhost:~$ apt-cache show postfix
Package: postfix
Priority: optional
Section: mail
Installed-Size: 3524
Maintainer: LaMont Jones &lt;lamont@debian.org&gt;
Architecture: amd64
Version: 2.11.1-1
Replaces: mail-transport-agent
Provides: default-mta, mail-transport-agent
.....................................................
</code></pre><h3 id="示例-4-列出包的依賴" tabindex="-1">示例：4 列出包的依賴 <a class="header-anchor" href="#示例-4-列出包的依賴" aria-label="Permalink to “示例：4 列出包的依賴”">​</a></h3><pre><code>linuxtechi@localhost:~$ apt-cache depends postfix
postfix
 Depends: libc6
 Depends: libdb5.3
 Depends: libsasl2-2
 Depends: libsqlite3-0
 Depends: libssl1.0.0
 |Depends: debconf
 Depends: &lt;debconf-2.0&gt;
 cdebconf
 debconf
 Depends: netbase
 Depends: adduser
 Depends: dpkg
............................................
</code></pre><h3 id="示例-5-使用apt-cache顯示緩存統計" tabindex="-1">示例：5 使用apt-cache顯示緩存統計 <a class="header-anchor" href="#示例-5-使用apt-cache顯示緩存統計" aria-label="Permalink to “示例：5 使用apt-cache顯示緩存統計”">​</a></h3><pre><code>linuxtechi@localhost:~$ apt-cache stats 
Total package names: 60877 (1,218 k)
Total package structures: 102824 (5,758 k)
 Normal packages: 71285
 Pure virtual packages: 1102
 Single virtual packages: 9151
 Mixed virtual packages: 1827
 Missing: 19459
Total distinct versions: 74913 (5,394 k)
Total distinct descriptions: 93792 (2,251 k)
Total dependencies: 573443 (16.1 M)
Total ver/file relations: 78007 (1,872 k)
Total Desc/File relations: 93792 (2,251 k)
Total Provides mappings: 16583 (332 k)
Total globbed strings: 171 (2,263 )
Total dependency version space: 2,665 k
Total slack space: 37.3 k
Total space accounted for: 29.5 M
</code></pre><h3 id="示例-6-使用-apt-get-update-更新倉庫" tabindex="-1">示例：6 使用 “apt-get update” 更新倉庫 <a class="header-anchor" href="#示例-6-使用-apt-get-update-更新倉庫" aria-label="Permalink to “示例：6 使用 “apt-get update” 更新倉庫”">​</a></h3><p>使用命令“apt-get update”, 我們可以重新從源倉庫中同步文件索引。包的索引從“/etc/apt/sources.list”中檢索。</p><pre><code>linuxtechi@localhost:~$ sudo apt-get update
 Ign http://extras.ubuntu.com utopic InRelease
 Hit http://extras.ubuntu.com utopic Release.gpg
 Hit http://extras.ubuntu.com utopic Release
 Hit http://extras.ubuntu.com utopic/main Sources
 Hit http://extras.ubuntu.com utopic/main amd64 Packages
 Hit http://extras.ubuntu.com utopic/main i386 Packages
 Ign http://in.archive.ubuntu.com utopic InRelease
 Ign http://in.archive.ubuntu.com utopic-updates InRelease
 Ign http://in.archive.ubuntu.com utopic-backports InRelease
 ................................................................
</code></pre><h3 id="示例-7-使用apt-get安裝包" tabindex="-1">示例：7 使用apt-get安裝包 <a class="header-anchor" href="#示例-7-使用apt-get安裝包" aria-label="Permalink to “示例：7 使用apt-get安裝包”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get install icinga
</code></pre><p>上面的命令會安裝叫“icinga”的包。</p><h3 id="示例-8-升級所有已安裝的包" tabindex="-1">示例：8 升級所有已安裝的包 <a class="header-anchor" href="#示例-8-升級所有已安裝的包" aria-label="Permalink to “示例：8 升級所有已安裝的包”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get upgrade
</code></pre><h3 id="示例-9-更新特定的包" tabindex="-1">示例：9 更新特定的包 <a class="header-anchor" href="#示例-9-更新特定的包" aria-label="Permalink to “示例：9 更新特定的包”">​</a></h3><p>在apt-get命令中的“install”選項後面接上“-only-upgrade”用來更新一個特定的包，如下所示：</p><pre><code>linuxtechi@localhost:~$ sudo apt-get install filezilla --only-upgrade
</code></pre><h3 id="示例-10-使用apt-get卸載包" tabindex="-1">示例：10 使用apt-get卸載包 <a class="header-anchor" href="#示例-10-使用apt-get卸載包" aria-label="Permalink to “示例：10 使用apt-get卸載包”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get remove skype
</code></pre><p>上面的命令只會刪除skype包，如果你想要刪除它的配置文件，在apt-get命令中使用“purge”選項。如下所示：</p><pre><code>linuxtechi@localhost:~$ sudo apt-get purge skype
</code></pre><p>我們可以結合使用上面的兩個命令：</p><pre><code>linuxtechi@localhost:~$ sudo apt-get remove --purge skype
</code></pre><h3 id="示例-11-在當前的目錄中下載包" tabindex="-1">示例：11 在當前的目錄中下載包 <a class="header-anchor" href="#示例-11-在當前的目錄中下載包" aria-label="Permalink to “示例：11 在當前的目錄中下載包”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get download icinga
Get:1 http://in.archive.ubuntu.com/ubuntu/ utopic/universe icinga amd64 1.11.6-1build1 [1,474 B]
Fetched 1,474 B in 1s (1,363 B/s)
</code></pre><p>上面的目錄會把icinga包下載到你的當前工作目錄。</p><h3 id="示例-12-清理本地包占用的磁盤空間" tabindex="-1">示例：12 清理本地包占用的磁盤空間 <a class="header-anchor" href="#示例-12-清理本地包占用的磁盤空間" aria-label="Permalink to “示例：12 清理本地包占用的磁盤空間”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get clean
</code></pre><p>上面的命令會清空apt-get所下載的包占用的磁盤空間。</p><p>我們也可以使用“<strong>autoclean</strong>”選項來代替“<strong>clean</strong>”，兩者之間主要的區別是autoclean清理不再使用且沒用的下載。</p><pre><code>linuxtechi@localhost:~$ sudo apt-get autoclean
Reading package lists... Done
Building dependency tree
Reading state information... Done
</code></pre><h3 id="示例-13-使用-autoremove-刪除包" tabindex="-1">示例：13 使用“autoremove”刪除包 <a class="header-anchor" href="#示例-13-使用-autoremove-刪除包" aria-label="Permalink to “示例：13 使用“autoremove”刪除包”">​</a></h3><p>當在apt-get命令中使用“autoremove”時，它會刪除為了滿足依賴而安裝且現在沒用的包。</p><pre><code>linuxtechi@localhost:~$ sudo apt-get autoremove icinga
</code></pre><h3 id="示例-14-顯示包的更新日誌" tabindex="-1">示例：14 顯示包的更新日誌 <a class="header-anchor" href="#示例-14-顯示包的更新日誌" aria-label="Permalink to “示例：14 顯示包的更新日誌”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get changelog apache2
Get:1 Changelog for apache2 (http://changelogs.ubuntu.com/changelogs/pool/main/a/apache2/apache2_2.4.10-1ubuntu1/changelog) [195 kB]
Fetched 195 kB in 3s (60.9 kB/s)
</code></pre><p>上面的命令會下載apache2的更新日誌，並在你屏幕上分頁顯示。</p><h3 id="示例-15-使用-check-選項顯示損壞的依賴關係" tabindex="-1">示例：15 使用 “check” 選項顯示損壞的依賴關係 <a class="header-anchor" href="#示例-15-使用-check-選項顯示損壞的依賴關係" aria-label="Permalink to “示例：15 使用 “check” 選項顯示損壞的依賴關係”">​</a></h3><pre><code>linuxtechi@localhost:~$ sudo apt-get check
Reading package lists... Done
Building dependency tree
Reading state information... Done
</code></pre><hr>`,49)),p("p",null,[e[1]||(e[1]=a("via: ",-1)),n(t,{href:"http://www.linuxtechi.com/ubuntu-apt-get-apt-cache-commands-examples/"},{default:o(()=>[...e[0]||(e[0]=[a("http://www.linuxtechi.com/ubuntu-apt-get-apt-cache-commands-examples/",-1)])]),_:1})]),p("p",null,[e[5]||(e[5]=a("作者：",-1)),n(t,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:o(()=>[...e[2]||(e[2]=[a("Pradeep Kumar",-1)])]),_:1}),e[6]||(e[6]=a(" 譯者：",-1)),n(t,{href:"https://github.com/geekpi"},{default:o(()=>[...e[3]||(e[3]=[a("geekpi",-1)])]),_:1}),e[7]||(e[7]=a(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[4]||(e[4]=[a("wxy",-1)])]),_:1})]),p("p",null,[e[10]||(e[10]=a("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[8]||(e[8]=[a("LCTT",-1)])]),_:1}),e[11]||(e[11]=a(" 原創翻譯，",-1)),n(t,{href:"http://linux.cn/"},{default:o(()=>[...e[9]||(e[9]=[a("Linux中國",-1)])]),_:1}),e[12]||(e[12]=a(" 榮譽推出",-1))])])}const v=i(d,[["render",h]]);export{T as __pageData,v as default};
