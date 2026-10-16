import{_ as l,a0 as t,w as r,s as o,I as i,x as a,a1 as e,A as p,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包 | LCTT x X-CMD","titleTemplate":false,"description":"用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包 | LCTT (201611) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包 | LCTT (201611) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201611/20160229 dpkg commands to manage packages on Debian Based Systems","title":"用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包","tag":"201611","desc":""},"relativePath":"201611/20160229 dpkg commands to manage packages on Debian Based Systems.md","filePath":"[post].md"}'),g={name:"201611/20160229 dpkg commands to manage packages on Debian Based Systems.md"};function u(c,s,b,k,h,m){const n=t("Link");return r(),o("div",null,[s[29]||(s[29]=i("h1",{id:"用-dpkg-命令在-debian-系的-linux-系统中管理软件包",tabindex:"-1"},[a("用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包 "),i("a",{class:"header-anchor",href:"#用-dpkg-命令在-debian-系的-linux-系统中管理软件包","aria-label":"Permalink to “用 dpkg 命令在 Debian 系的 Linux 系统中管理软件包”"},"​")],-1)),i("p",null,[e(n,{href:"https://wiki.debian.org/Teams/Dpkg"},{default:p(()=>[...s[0]||(s[0]=[a("dpkg",-1)])]),_:1}),s[1]||(s[1]=a(" 意即 Debian 包管理器（Debian PacKaGe manager）。dpkg 是一个可以安装、构建、删除及管理 Debian 软件包的命令行工具。dpkg 将 Aptitude（首选而更用户友好）作为执行所有操作的前端界面。",-1))]),s[30]||(s[30]=i("p",null,"其它的一些工具如 dpkg-deb 和 dpkg-query 等也使用 dpkg 作为执行某些操作的前端。",-1)),i("p",null,[s[3]||(s[3]=a("现在大多数系统管理员使用 Apt、",-1)),e(n,{href:"http://www.2daygeek.com/apt-get-apt-cache-command-examples/"},{default:p(()=>[...s[2]||(s[2]=[a("Apt-Get",-1)])]),_:1}),s[4]||(s[4]=a(" 及 Aptitude 等工具，不用费心就可以轻松地管理软件。",-1))]),i("p",null,[s[10]||(s[10]=a("尽管如此，必要的时候还是需要用 dpkg 来安装某些软件。其它的一些在 Linux 系统上广泛使用的包管理工具还有 ",-1)),e(n,{href:"http://www.2daygeek.com/yum-command-examples/"},{default:p(()=>[...s[5]||(s[5]=[a("yum",-1)])]),_:1}),s[11]||(s[11]=a("、",-1)),e(n,{href:"http://www.2daygeek.com/dnf-command-examples/"},{default:p(()=>[...s[6]||(s[6]=[a("dnf",-1)])]),_:1}),s[12]||(s[12]=a("、",-1)),e(n,{href:"http://www.2daygeek.com/apt-get-apt-cache-command-examples/"},{default:p(()=>[...s[7]||(s[7]=[a("apt-get",-1)])]),_:1}),s[13]||(s[13]=a("、dpkg、",-1)),e(n,{href:"http://www.2daygeek.com/rpm-command-examples/"},{default:p(()=>[...s[8]||(s[8]=[a("rpm",-1)])]),_:1}),s[14]||(s[14]=a("、",-1)),e(n,{href:"http://www.2daygeek.com/zypper-command-examples/"},{default:p(()=>[...s[9]||(s[9]=[a("Zypper",-1)])]),_:1}),s[15]||(s[15]=a("、pacman、urpmi 等等。",-1))]),s[31]||(s[31]=d(`<p>现在，我要在装有 Ubuntu 15.10 的机器上用一些实例讲解最常用的 dpkg 命令。</p><h3 id="_1-dpkg-常见命令的语法及-dpkg-文件位置" tabindex="-1">1) dpkg 常见命令的语法及 dpkg 文件位置 <a class="header-anchor" href="#_1-dpkg-常见命令的语法及-dpkg-文件位置" aria-label="Permalink to “1) dpkg 常见命令的语法及 dpkg 文件位置”">​</a></h3><p>下面是 dpkg 常见命令的语法及 dpkg 相关文件的位置，如果想深入了解，这些对你肯定大有益处。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### dpkg 命令的语法</span></span>
<span class="line"><span>$ dpkg -[command] [.deb package name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ dpkg -[command] [package name]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### dpkg 相关文件的位置</span></span>
<span class="line"><span>$ /var/lib/dpkg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 这个文件包含了被 dpkg 命令（install、remove 等）所修改的包的信息</span></span>
<span class="line"><span>$ /var/lib/dpkg/status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 这个文件包含了可用包的列表</span></span>
<span class="line"><span>$ /var/lib/dpkg/status</span></span></code></pre></div><h3 id="_2-安装-升级软件" tabindex="-1">2) 安装/升级软件 <a class="header-anchor" href="#_2-安装-升级软件" aria-label="Permalink to “2) 安装/升级软件”">​</a></h3><p>在基于 Debian 的系统里，比如 Debian、Mint、Ubuntu 和 elementryOS，用以下命令来安装/升级 .deb 软件包。这里我要用 <code>atom-amd64.deb</code> 文件安装 Atom。要是已经安装了 Atom，就会升级它。要么就会安装一个新的 Atom。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### 安装或升级 dpkg 软件包</span></span>
<span class="line"><span>$ sudo dpkg -i atom-amd64.deb</span></span>
<span class="line"><span>Selecting previously unselected package atom.</span></span>
<span class="line"><span>(Reading database ... 426102 files and directories currently installed.)</span></span>
<span class="line"><span>Preparing to unpack atom-amd64.deb ...</span></span>
<span class="line"><span>Unpacking atom (1.5.3) over (1.5.3) ...</span></span>
<span class="line"><span>Setting up atom (1.5.3) ...</span></span>
<span class="line"><span>Processing triggers for gnome-menus (3.13.3-6ubuntu1) ...</span></span>
<span class="line"><span>Processing triggers for bamfdaemon (0.5.2~bzr0+15.10.20150627.1-0ubuntu1) ...</span></span>
<span class="line"><span>Rebuilding /usr/share/applications/bamf-2.index...</span></span>
<span class="line"><span>Processing triggers for desktop-file-utils (0.22-1ubuntu3) ...</span></span>
<span class="line"><span>Processing triggers for mime-support (3.58ubuntu1) ...</span></span></code></pre></div><h3 id="_3-从文件夹里安装软件" tabindex="-1">3) 从文件夹里安装软件 <a class="header-anchor" href="#_3-从文件夹里安装软件" aria-label="Permalink to “3) 从文件夹里安装软件”">​</a></h3><p>在基于 Debian 的系统里，用下列命令从目录中逐个安装软件。这会安装 <code>/opt/software</code> 目录下的所有以 .deb 为后缀的软件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dpkg -iR /opt/software</span></span>
<span class="line"><span>Selecting previously unselected package atom.</span></span>
<span class="line"><span>(Reading database ... 423303 files and directories currently installed.)</span></span>
<span class="line"><span>Preparing to unpack /opt/software/atom-amd64.deb ...</span></span>
<span class="line"><span>Unpacking atom (1.5.3) ...</span></span>
<span class="line"><span>Setting up atom (1.5.3) ...</span></span>
<span class="line"><span>Processing triggers for gnome-menus (3.13.3-6ubuntu1) ...</span></span>
<span class="line"><span>Processing triggers for bamfdaemon (0.5.2~bzr0+15.10.20150627.1-0ubuntu1) ...</span></span>
<span class="line"><span>Rebuilding /usr/share/applications/bamf-2.index...</span></span>
<span class="line"><span>Processing triggers for desktop-file-utils (0.22-1ubuntu3) ...</span></span>
<span class="line"><span>Processing triggers for mime-support (3.58ubuntu1) ...</span></span></code></pre></div><h3 id="_4-显示已安装软件列表" tabindex="-1">4) 显示已安装软件列表 <a class="header-anchor" href="#_4-显示已安装软件列表" aria-label="Permalink to “4) 显示已安装软件列表”">​</a></h3><p>以下命令可以列出 Debian 系的系统中所有已安装的软件，同时会显示软件版本和描述信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -l</span></span>
<span class="line"><span>Desired=Unknown/Install/Remove/Purge/Hold</span></span>
<span class="line"><span>| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend</span></span>
<span class="line"><span>|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)</span></span>
<span class="line"><span>||/ Name                        Version                            Architecture Description</span></span>
<span class="line"><span>+++-===========================-==================================-============-================================================================</span></span>
<span class="line"><span>ii  account-plugin-aim          3.12.10-0ubuntu2                   amd64        Messaging account plugin for AIM</span></span>
<span class="line"><span>ii  account-plugin-facebook     0.12+15.10.20150723-0ubuntu1       all          GNOME Control Center account plugin for single signon - facebook</span></span>
<span class="line"><span>ii  account-plugin-flickr       0.12+15.10.20150723-0ubuntu1       all          GNOME Control Center account plugin for single signon - flickr</span></span>
<span class="line"><span>ii  account-plugin-google       0.12+15.10.20150723-0ubuntu1       all          GNOME Control Center account plugin for single signon</span></span>
<span class="line"><span>ii  account-plugin-jabber       3.12.10-0ubuntu2                   amd64        Messaging account plugin for Jabber/XMPP</span></span>
<span class="line"><span>ii  account-plugin-salut        3.12.10-0ubuntu2                   amd64        Messaging account plugin for Local XMPP (Salut)</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span></code></pre></div><h3 id="_5-查看指定的已安装软件" tabindex="-1">5) 查看指定的已安装软件 <a class="header-anchor" href="#_5-查看指定的已安装软件" aria-label="Permalink to “5) 查看指定的已安装软件”">​</a></h3><p>用以下命令列出指定的一个已安装软件，同时会显示软件版本和描述信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -l atom</span></span>
<span class="line"><span>Desired=Unknown/Install/Remove/Purge/Hold</span></span>
<span class="line"><span>| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend</span></span>
<span class="line"><span>|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)</span></span>
<span class="line"><span>||/ Name       Version   Architecture        Description</span></span>
<span class="line"><span>+++-==========-=========-===================-============================================</span></span>
<span class="line"><span>ii  atom       1.5.3     amd64               A hackable text editor for the 21st Century.</span></span></code></pre></div><h3 id="_6-查看软件安装目录" tabindex="-1">6) 查看软件安装目录 <a class="header-anchor" href="#_6-查看软件安装目录" aria-label="Permalink to “6) 查看软件安装目录”">​</a></h3><p>以下命令可以在基于 Debian 的系统上查看软件的安装路径。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -L atom</span></span>
<span class="line"><span>/.</span></span>
<span class="line"><span>/usr</span></span>
<span class="line"><span>/usr/bin</span></span>
<span class="line"><span>/usr/bin/atom</span></span>
<span class="line"><span>/usr/share</span></span>
<span class="line"><span>/usr/share/lintian</span></span>
<span class="line"><span>/usr/share/lintian/overrides</span></span>
<span class="line"><span>/usr/share/lintian/overrides/atom</span></span>
<span class="line"><span>/usr/share/pixmaps</span></span>
<span class="line"><span>/usr/share/pixmaps/atom.png</span></span>
<span class="line"><span>/usr/share/doc</span></span></code></pre></div><h3 id="_7-查看-deb-包内容" tabindex="-1">7) 查看 deb 包内容 <a class="header-anchor" href="#_7-查看-deb-包内容" aria-label="Permalink to “7) 查看 deb 包内容”">​</a></h3><p>下列命令可以查看 deb 包内容。它会显示 .deb 包中的一系列文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -c atom-amd64.deb</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/bin/</span></span>
<span class="line"><span>-rwxr-xr-x root/root      3067 2016-02-13 02:13 ./usr/bin/atom</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/share/</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/share/lintian/</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/share/lintian/overrides/</span></span>
<span class="line"><span>-rw-r--r-- root/root       299 2016-02-13 02:13 ./usr/share/lintian/overrides/atom</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/share/pixmaps/</span></span>
<span class="line"><span>-rw-r--r-- root/root    643183 2016-02-13 02:13 ./usr/share/pixmaps/atom.png</span></span>
<span class="line"><span>drwxr-xr-x root/root         0 2016-02-13 02:13 ./usr/share/doc/</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span></code></pre></div><h3 id="_8-显示软件的详细信息" tabindex="-1">8) 显示软件的详细信息 <a class="header-anchor" href="#_8-显示软件的详细信息" aria-label="Permalink to “8) 显示软件的详细信息”">​</a></h3><p>以下命令可以显示软件的详细信息，如软件名、软件类别、版本、维护者、软件架构、依赖的软件、软件描述等等。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -s atom</span></span>
<span class="line"><span>Package: atom</span></span>
<span class="line"><span>Status: install ok installed</span></span>
<span class="line"><span>Priority: optional</span></span>
<span class="line"><span>Section: devel</span></span>
<span class="line"><span>Installed-Size: 213496</span></span>
<span class="line"><span>Maintainer: GitHub &lt;atom@github.com&gt;Architecture: amd64</span></span>
<span class="line"><span>Version: 1.5.3</span></span>
<span class="line"><span>Depends: git, gconf2, gconf-service, libgtk2.0-0, libudev0 | libudev1, libgcrypt11 | libgcrypt20, libnotify4, libxtst6, libnss3, python, gvfs-bin, xdg-utils, libcap2</span></span>
<span class="line"><span>Recommends: lsb-release</span></span>
<span class="line"><span>Suggests: libgnome-keyring0, gir1.2-gnomekeyring-1.0</span></span>
<span class="line"><span>Description: A hackable text editor for the 21st Century.</span></span>
<span class="line"><span> Atom is a free and open source text editor that is modern, approachable, and hackable to the core.&lt;/atom@github.com&gt;</span></span></code></pre></div><h3 id="_9-查看文件属于哪个软件" tabindex="-1">9) 查看文件属于哪个软件 <a class="header-anchor" href="#_9-查看文件属于哪个软件" aria-label="Permalink to “9) 查看文件属于哪个软件”">​</a></h3><p>用以下命令来查看文件属于哪个软件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -S /usr/bin/atom</span></span>
<span class="line"><span>atom: /usr/bin/atom</span></span></code></pre></div><h3 id="_10-移除-删除软件" tabindex="-1">10) 移除/删除软件 <a class="header-anchor" href="#_10-移除-删除软件" aria-label="Permalink to “10) 移除/删除软件”">​</a></h3><p>以下命令可以用来移除/删除一个已经安装的软件，但不删除配置文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dpkg -r atom</span></span>
<span class="line"><span>(Reading database ... 426404 files and directories currently installed.)</span></span>
<span class="line"><span>Removing atom (1.5.3) ...</span></span>
<span class="line"><span>Processing triggers for gnome-menus (3.13.3-6ubuntu1) ...</span></span>
<span class="line"><span>Processing triggers for bamfdaemon (0.5.2~bzr0+15.10.20150627.1-0ubuntu1) ...</span></span>
<span class="line"><span>Rebuilding /usr/share/applications/bamf-2.index...</span></span>
<span class="line"><span>Processing triggers for desktop-file-utils (0.22-1ubuntu3) ...</span></span>
<span class="line"><span>Processing triggers for mime-support (3.58ubuntu1) ...</span></span></code></pre></div><h3 id="_11-清除软件" tabindex="-1">11) 清除软件 <a class="header-anchor" href="#_11-清除软件" aria-label="Permalink to “11) 清除软件”">​</a></h3><p>以下命令可以用来移除/删除包括配置文件在内的所有文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dpkg -P atom</span></span>
<span class="line"><span>(Reading database ... 426404 files and directories currently installed.)</span></span>
<span class="line"><span>Removing atom (1.5.3) ...</span></span>
<span class="line"><span>Processing triggers for gnome-menus (3.13.3-6ubuntu1) ...</span></span>
<span class="line"><span>Processing triggers for bamfdaemon (0.5.2~bzr0+15.10.20150627.1-0ubuntu1) ...</span></span>
<span class="line"><span>Rebuilding /usr/share/applications/bamf-2.index...</span></span>
<span class="line"><span>Processing triggers for desktop-file-utils (0.22-1ubuntu3) ...</span></span>
<span class="line"><span>Processing triggers for mime-support (3.58ubuntu1) ...</span></span></code></pre></div><h3 id="_12-了解更多" tabindex="-1">12) 了解更多 <a class="header-anchor" href="#_12-了解更多" aria-label="Permalink to “12) 了解更多”">​</a></h3><p>用以下命令来查看更多关于 dpkg 的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dpkg -help</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>$ man dpkg</span></span></code></pre></div><p>开始体验 dpkg 吧。</p><hr>`,39)),i("p",null,[s[17]||(s[17]=a("via: ",-1)),e(n,{href:"http://www.2daygeek.com/dpkg-command-examples/"},{default:p(()=>[...s[16]||(s[16]=[a("http://www.2daygeek.com/dpkg-command-examples/",-1)])]),_:1})]),i("p",null,[s[21]||(s[21]=a("作者：",-1)),e(n,{href:"http://www.2daygeek.com/author/magesh/"},{default:p(()=>[...s[18]||(s[18]=[a("MAGESH MARUTHAMUTHU",-1)])]),_:1}),s[22]||(s[22]=a(" 译者：",-1)),e(n,{href:"https://github.com/GitFuture"},{default:p(()=>[...s[19]||(s[19]=[a("GitFuture",-1)])]),_:1}),s[23]||(s[23]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[20]||(s[20]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[26]||(s[26]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[24]||(s[24]=[a("LCTT",-1)])]),_:1}),s[27]||(s[27]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[25]||(s[25]=[a("Linux中国",-1)])]),_:1}),s[28]||(s[28]=a(" 荣誉推出",-1))])])}const C=l(g,[["render",u]]);export{y as __pageData,C as default};
