import{_ as l,a0 as r,w as o,s as u,ao as c,I as s,x as e,a1 as i,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150128 Linux Basics--How To Check If A Package Is Installed Or Not In Ubuntu","title":"Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝","tag":"201503","desc":""},"relativePath":"201503/20150128 Linux Basics--How To Check If A Package Is Installed Or Not In Ubuntu.md","filePath":"[post].md"}'),p={name:"201503/20150128 Linux Basics--How To Check If A Package Is Installed Or Not In Ubuntu.md"};function d(g,n,b,f,x,m){const t=r("Link");return o(),u("div",null,[n[13]||(n[13]=c(`<h1 id="linux-基礎-如何在ubuntu上檢查一個軟件包是否安裝" tabindex="-1">Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝 <a class="header-anchor" href="#linux-基礎-如何在ubuntu上檢查一個軟件包是否安裝" aria-label="Permalink to “Linux 基礎：如何在Ubuntu上檢查一個軟件包是否安裝”">​</a></h1><p><img src="http://1102047360.rsc.cdn77.org/wp-content/uploads/2014/04/ubuntu-790x558.png" alt=""></p><p>如果你正在管理Debian或者Ubuntu服務器，你也許會經常使用<strong>dpkg</strong> 或者 <strong>apt-get</strong>命令。這兩個命令用來安裝、卸載和更新包。</p><p>在本篇中，讓我們看下如何在基於DEB的系統下檢查是否安裝了一個包。</p><p>要檢查特定的包，比如firefox是否安裝了，使用這個命令：</p><pre><code>dpkg -s firefox
</code></pre><p>示例輸出：</p><pre><code> Package: firefox
 Status: install ok installed
 Priority: optional
 Section: web
 Installed-Size: 93339
 Maintainer: Ubuntu Mozilla Team &lt;ubuntu-mozillateam@lists.ubuntu.com&gt;
 Architecture: amd64
 Version: 35.0+build3-0ubuntu0.14.04.2
 Replaces: kubuntu-firefox-installer
 Provides: gnome-www-browser, iceweasel, www-browser
 Depends: lsb-release, libasound2 (&gt;= 1.0.16), libatk1.0-0 (&gt;= 1.12.4), libc6 (&gt;= 2.17), libcairo2 (&gt;= 1.2.4), libdbus-1-3 (&gt;= 1.0.2), libdbus-glib-1-2 (&gt;= 0.78), libfontconfig1 (&gt;= 2.9.0), libfreetype6 (&gt;= 2.2.1), libgcc1 (&gt;= 1:4.1.1), libgdk-pixbuf2.0-0 (&gt;= 2.22.0), libglib2.0-0 (&gt;= 2.37.3), libgtk2.0-0 (&gt;= 2.24.0), libpango-1.0-0 (&gt;= 1.22.0), libpangocairo-1.0-0 (&gt;= 1.14.0), libstartup-notification0 (&gt;= 0.8), libstdc++6 (&gt;= 4.6), libx11-6, libxcomposite1 (&gt;= 1:0.3-1), libxdamage1 (&gt;= 1:1.1), libxext6, libxfixes3, libxrender1, libxt6
 Recommends: xul-ext-ubufox, libcanberra0, libdbusmenu-glib4, libdbusmenu-gtk4
 Suggests: ttf-lyx
 Conffiles:
 /etc/firefox/syspref.js 09e457e65435a1a043521f2bd19cd2a1
 /etc/apport/blacklist.d/firefox ee63264f847e671832d42255912ce144
 /etc/apport/native-origins.d/firefox 7c26b75c7c2b715c89cc6d85338252a4
 /etc/apparmor.d/usr.bin.firefox f54f7a43361c7ecfa3874abca2f292cf
 Description: Safe and easy web browser from Mozilla
 Firefox delivers safe, easy web browsing. A familiar user interface,
 enhanced security features including protection from online identity theft,
 and integrated search let you get the most out of the web.
 Xul-Appid: {ec8030f7-c20a-464f-9b0e-13a3a9e97384}
</code></pre><p>如上所見，firefox已經安裝了。</p><p>同樣，你可以使用<strong>dpkg-query</strong> 命令。這個命令會有一個更好的輸出，當然，你可以用通配符。</p><pre><code>dpkg-query -l firefox
</code></pre><p>示例輸出：</p><pre><code>Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name                                 Version                 Architecture            Description
+++-====================================-=======================-=======================-=============================================================================
ii  firefox                              35.0+build3-0ubuntu0.14 amd64                   Safe and easy web browser from Mozilla
</code></pre><p>要列出你係統中安裝的所有包，輸入下面的命令：</p><pre><code>dpkg --get-selections
</code></pre><p>示例輸出：</p><pre><code>abiword                        install
abiword-common                    install
accountsservice                    install
acl                        install
adduser                        install
alsa-base                    install
alsa-utils                    install
anacron                        install
app-install-data                install
apparmor                    install
.
.
.
zeitgeist                    install
zeitgeist-core                    install
zeitgeist-datahub                install
zenity                        install
zenity-common                    install
zip                        install
zlib1g:amd64                    install
zlib1g:i386                    install
</code></pre><p>上面的輸出可能會非常長，這依賴於你的系統已安裝的包。</p><p>你同樣可以通過<strong>grep</strong>來過濾割到更精確的包。比如，我想要使用<strong>dpkg</strong>命令查看系統中安裝的gcc包：</p><pre><code>dpkg --get-selections | grep gcc
</code></pre><p>示例輸出：</p><pre><code>gcc                        install
gcc-4.8                        install
gcc-4.8-base:amd64                install
gcc-4.8-base:i386                install
gcc-4.9-base:amd64                install
gcc-4.9-base:i386                install
libgcc-4.8-dev:amd64                install
libgcc1:amd64                    install
libgcc1:i386                    install
</code></pre><p>此外，你可以使用“<strong>-L</strong>”參數來找出包中文件的位置。</p><pre><code>dpkg -L gcc-4.8
</code></pre><p>示例輸出：</p><pre><code>/.
/usr
/usr/share
/usr/share/doc
/usr/share/doc/gcc-4.8-base
/usr/share/doc/gcc-4.8-base/README.Bugs
/usr/share/doc/gcc-4.8-base/NEWS.html
/usr/share/doc/gcc-4.8-base/quadmath
/usr/share/doc/gcc-4.8-base/quadmath/changelog.gz
/usr/share/doc/gcc-4.8-base/gcc
.
.
.
/usr/bin/x86_64-linux-gnu-gcc-4.8
/usr/bin/x86_64-linux-gnu-gcc-ar-4.8
/usr/bin/x86_64-linux-gnu-gcov-4.8
</code></pre><p>就是這樣了。希望這篇對你有用。</p><p>美好的一天！</p><hr>`,29)),s("p",null,[n[1]||(n[1]=e("via: ",-1)),i(t,{href:"http://www.unixmen.com/linux-basics-check-package-installed-not-ubuntu/"},{default:a(()=>[...n[0]||(n[0]=[e("http://www.unixmen.com/linux-basics-check-package-installed-not-ubuntu/",-1)])]),_:1})]),s("p",null,[n[5]||(n[5]=e("作者：",-1)),i(t,{href:"http://www.unixmen.com/author/sk/"},{default:a(()=>[...n[2]||(n[2]=[e("SK",-1)])]),_:1}),n[6]||(n[6]=e(" 譯者：",-1)),i(t,{href:"https://github.com/geekpi"},{default:a(()=>[...n[3]||(n[3]=[e("geekpi",-1)])]),_:1}),n[7]||(n[7]=e(" 校對：",-1)),i(t,{href:"https://github.com/wxy"},{default:a(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),s("p",null,[n[10]||(n[10]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原創翻譯，",-1)),i(t,{href:"http://linux.cn/"},{default:a(()=>[...n[9]||(n[9]=[e("Linux中國",-1)])]),_:1}),n[12]||(n[12]=e(" 榮譽推出",-1))])])}const T=l(p,[["render",d]]);export{h as __pageData,T as default};
