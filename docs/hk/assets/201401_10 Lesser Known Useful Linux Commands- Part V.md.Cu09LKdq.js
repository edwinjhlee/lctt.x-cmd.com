import{_ as s,a0 as i,w as l,s as p,I as n,x as e,a1 as r,A as a,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"十個鮮為人知的Linux命令 - Part 5 | LCTT x X-CMD","titleTemplate":false,"description":"十個鮮為人知的Linux命令 - Part 5 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十個鮮為人知的Linux命令 - Part 5 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十個鮮為人知的Linux命令 - Part 5 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/10 Lesser Known Useful Linux Commands- Part V","title":"十個鮮為人知的Linux命令 - Part 5","tag":"201401","desc":""},"relativePath":"201401/10 Lesser Known Useful Linux Commands- Part V.md","filePath":"[post].md"}'),u={name:"201401/10 Lesser Known Useful Linux Commands- Part V.md"};function c(h,t,f,m,g,x){const o=i("Link");return l(),p("div",null,[t[15]||(t[15]=n("h1",{id:"十個鮮為人知的linux命令-part-5",tabindex:"-1"},[e("十個鮮為人知的Linux命令 - Part 5 "),n("a",{class:"header-anchor",href:"#十個鮮為人知的linux命令-part-5","aria-label":"Permalink to “十個鮮為人知的Linux命令 - Part 5”"},"​")],-1)),t[16]||(t[16]=n("p",null,[e("在前四篇 "),n("strong",null,"“鮮為人知的Linux命令”"),e(" 系列文章受到高度讚賞之後，我們將為廣大讀者呈上此係列的最後一篇文章，雖然是最後一篇，但是其重要性毫不遜於前幾篇。")],-1)),t[17]||(t[17]=n("p",null,[n("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/12/10-Lesser-Known-Useful-Commands-V.png",alt:""})],-1)),t[18]||(t[18]=n("p",null,"前幾篇文章的地址如下：",-1)),n("ul",null,[n("li",null,[r(o,{href:"http://linux.cn/article-2258-1.html"},{default:a(()=>[...t[0]||(t[0]=[e("十一個鮮為人知的 Linux 命令 - Part 1",-1)])]),_:1})]),n("li",null,[r(o,{href:"http://linux.cn/article-2265-1.html"},{default:a(()=>[...t[1]||(t[1]=[e("十個鮮為人知的 Linux 命令 - Part 2",-1)])]),_:1})]),n("li",null,[r(o,{href:"http://linux.cn/article-2284-1.html"},{default:a(()=>[...t[2]||(t[2]=[e("十個鮮為人知的 Linux 命令 - Part 3",-1)])]),_:1})]),n("li",null,[r(o,{href:"http://linux.cn/article-2404-1.html"},{default:a(()=>[...t[3]||(t[3]=[e("十個鮮為人知的 Linux 命令 - Part 4",-1)])]),_:1})])]),t[19]||(t[19]=d(`<h3 id="_42-lsb-release" tabindex="-1">42. lsb_release <a class="header-anchor" href="#_42-lsb-release" aria-label="Permalink to “42. lsb_release”">​</a></h3><p><strong>‘lsb_release’</strong> 命令會打印特殊發行版的信息。如果 <strong>lsb_release</strong> 還沒安裝，你可以在基於 <strong>Debain</strong> 的發行版中用命令 apt 安裝，在基於 <strong>Red Hat</strong> 系統下用 yum 來安裝包。</p><pre><code># lsb_release -a
LSB Version:    :base-4.0-ia32:base-4.0-noarch:core-4.0-ia32:core-4.0-noarch:graphics-4.0-ia32:
Distributor ID: CentOS
Description:    CentOS release 6.3 (Final)
Release:        6.3
Codename:       Final
</code></pre><p><strong>注意：</strong>選項‘<strong>-a</strong>’，會顯示有關<strong>版本、ID、詳情、發行號</strong>和<strong>研發代號</strong>的全部可用信息。</p><h3 id="_43-nc-zv-localhost-80" tabindex="-1">43. nc -zv localhost 80 <a class="header-anchor" href="#_43-nc-zv-localhost-80" aria-label="Permalink to “43. nc -zv localhost 80”">​</a></h3><p>檢查 <strong>80</strong> 端口是否被打開。我們可以用任何其他端口號替換‘<strong>80</strong>’來檢查端口是否被打開或關閉。</p><pre><code>$ nc -zv localhost 80
Connection to localhost 80 port [tcp/http] succeeded!
</code></pre><p>（譯註：出現該信息表示80端口已被打開。）</p><p>檢查 <strong>8080</strong> 端口是否啓用</p><pre><code>$ nc -zv localhost 8080
nc: connect to localhost port 8080 (tcp) failed: Connection refused
</code></pre><p>（譯註：該信息顯示了8080端口並未打開。）</p><h3 id="_44-curl-ipinfo-io" tabindex="-1">44. curl ipinfo.io <a class="header-anchor" href="#_44-curl-ipinfo-io" aria-label="Permalink to “44. curl ipinfo.io”">​</a></h3><p>該命令會輸出並提供 <strong>IP 地址</strong> 的 <strong>‘地理位置’</strong> 。</p><pre><code>$ curl ipinfo.io 
</code></pre><p>&quot;ip&quot;: &quot;xx.xx.xx.xx&quot;, &quot;hostname&quot;: &quot;triband-del-aa.bbb.cc.ddd.bol.net.in&quot;, &quot;city&quot;: &quot;null&quot;, &quot;region&quot;: &quot;null&quot;, &quot;country&quot;: &quot;IN&quot;, &quot;loc&quot;: &quot;20,77&quot;, &quot;org&quot;: &quot;AS17813 Mahanagar Telephone Nigam Ltd&quot;.</p><h3 id="_45-find-user-root" tabindex="-1">45. find . -user root <a class="header-anchor" href="#_45-find-user-root" aria-label="Permalink to “45. find . -user root”">​</a></h3><p>該命令會輸出當前目錄下( <strong>root</strong> )用户所擁有的文件（譯註：即owner為root）。下面是在當前目錄下列出的所有 ‘root’用户擁有的文件。</p><pre><code># find . -user root
./.recently-used.xbel
./.mysql_history
./.aptitude
./.aptitude/config
./.aptitude/cache
./.bluefish
./.bluefish/session-2.0
./.bluefish/autosave
./.bash_history
</code></pre><p>在當前路徑下列出所有 <strong>‘avi’</strong> 用户擁有的文件</p><pre><code># find . -user avi
./.cache/chromium/Cache/f_002b66
./.cache/chromium/Cache/f_001719
./.cache/chromium/Cache/f_001262
./.cache/chromium/Cache/f_000544
./.cache/chromium/Cache/f_002e40
./.cache/chromium/Cache/f_00119a
./.cache/chromium/Cache/f_0014fc
./.cache/chromium/Cache/f_001b52
./.cache/chromium/Cache/f_00198d
./.cache/chromium/Cache/f_003680
</code></pre><h3 id="_46-sudo-apt-get-build-dep-ffmpeg" tabindex="-1">46. sudo apt-get build-dep ffmpeg <a class="header-anchor" href="#_46-sudo-apt-get-build-dep-ffmpeg" aria-label="Permalink to “46. sudo apt-get build-dep ffmpeg”">​</a></h3><p>該命令會在相應的包安裝時自動構建依賴關係。因此包安裝的過程將非常流暢，也是非常容易的。</p><pre><code># apt-get build-dep ffmpeg
libxinerama-dev libxml-namespacesupport-perl libxml-sax-expat-perl
libxml-sax-perl libxml-simple-perl libxrandr-dev libxrender-dev
x11proto-render-dev x11proto-xinerama-dev xulrunner-dev
The following packages will be upgraded:
libpixman-1-0

1 upgraded, 143 newly installed, 0 to remove and 6 not upgraded.
Need to get 205 MB of archives.
After this operation, 448 MB of additional disk space will be used.
Do you want to continue [Y/n]?
</code></pre><h3 id="_47-lsof-itcp-80-stcp-listen" tabindex="-1">47. lsof -iTCP:80 -sTCP:LISTEN <a class="header-anchor" href="#_47-lsof-itcp-80-stcp-listen" aria-label="Permalink to “47. lsof -iTCP:80 -sTCP:LISTEN”">​</a></h3><p>該命令會輸出所用正在使用 <strong>80</strong> 端口的 <strong>進程/服務</strong> 的名稱。在 <strong>80</strong> 端口運行下列命令會更好理解這個命令，它會列出所用運行在該端口的 <strong>進程/服務</strong> 。</p><pre><code>root@localhost:/home/avi# lsof -iTCP:80 -sTCP:LISTEN
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
apache2 1566 root 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1664 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1665 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1666 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1667 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1668 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
</code></pre><p>同樣，你可以檢查運行在端口 <strong>22</strong> 的進程/服務。</p><pre><code>root@localhost:/home/avi# lsof -iTCP:22 -sTCP:LISTEN
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
sshd 2261 root 3u IPv4 8366 0t0 TCP *:ssh (LISTEN)
sshd 2261 root 4u IPv6 8369 0t0 TCP *:ssh (LISTEN)
</code></pre><h3 id="_48-find-size-100m" tabindex="-1">48. find -size +100M <a class="header-anchor" href="#_48-find-size-100m" aria-label="Permalink to “48. find -size +100M”">​</a></h3><p>這條find命令會在當前目錄下列出所有超過指定大小的文件(這裏指定為<strong>100 MB</strong>)，遞歸查詢。</p><pre><code># find -size +100M
./.local/share/Trash/files/linuxmint-15-cinnamon-dvd-32bit.iso
./Downloads/Fedora-Live-Desktop-i686-19-1.iso
./Downloads/Ant Videos/shakira 2.avi
./Downloads/Deewar.avi
./Desktop/101MSDCF/MOV02224.AVI
./Desktop/101MSDCF/MOV02020.AVI
./Desktop/101MSDCF/MOV00406.MP4
./Desktop/squeeze.iso
</code></pre><p>在當前目錄遞歸的列出所用大於 <strong>1000 MB</strong> 的文件。</p><pre><code>root@localhost:/home/avi# find -size +1000M
./Downloads/The Dark Knight 2008 hindi BRRip 720p/The Dark Knight.mkv.part
./Downloads/Saudagar - (1991) - DVDRiP - x264 - AAC 5.1 - Chapters - Esubs - [DDR]/Saudagar 
- (1991) - DVDRiP - x264 - AAC 5.1 - Chapters - Esubs - [DDR].mkv
./Downloads/Deewar.avi
./Desktop/squeeze.iso
</code></pre><h3 id="_49-pdftk" tabindex="-1">49. pdftk <a class="header-anchor" href="#_49-pdftk" aria-label="Permalink to “49. pdftk”">​</a></h3><p><strong>pdftk</strong>命令用來合併幾個pdf文件。你必須安裝有 <strong>pdftk</strong> 程序。如果還沒有，請用apt或yum來獲取相應的包。</p><pre><code>$ pdftk 1.pdf 2.pdf 3.pdf …. 10.pdf cat output merged.pdf
</code></pre><h3 id="_50-ps-lf-u-user-name" tabindex="-1">50. ps -LF -u user_name <a class="header-anchor" href="#_50-ps-lf-u-user-name" aria-label="Permalink to “50. ps -LF -u user_name”">​</a></h3><p>該命令會輸出一個用户的進程和線程。選項“<strong>L</strong>”（列出線程），選項“<strong>-F</strong>”（完整格式化）</p><pre><code>$ ps -LF -u avi
avi 21645 3717 21766 0 5 66168 117164 1 18:58 ? 00:00:00 /usr/
avi 21645 3717 21768 0 5 66168 117164 1 18:58 ? 00:00:00 /usr/
avi 22314 3717 22314 0 2 42797 50332 0 19:00 ? 00:00:40 /usr/
avi 22314 3717 22316 0 2 42797 50332 1 19:00 ? 00:00:00 /usr/
avi 22678 24621 22678 0 1 969 1060 1 21:05 pts/1 00:00:00 ps -L
avi 23051 3717 23051 0 2 37583 45444 1 19:03 ? 00:00:52 /usr/
avi 23051 3717 23053 0 2 37583 45444 0 19:03 ? 00:00:03 /usr/
avi 23652 1 23652 0 2 22092 12520 0 19:06 ? 00:00:22 gnome
avi 23652 1 23655 0 2 22092 12520 0 19:06 ? 00:00:00 gnome
</code></pre><h3 id="_51-startx-1" tabindex="-1">51. startx - :1 <a class="header-anchor" href="#_51-startx-1" aria-label="Permalink to “51. startx - :1”">​</a></h3><p>分享 <strong>X</strong> 會話。如果你需要頻繁的（以不同用户身份）登入或登出桌面時，那就需要 <strong>startx</strong> 來救場。這個命令建立了一個新的會話從而避免了在一個會話中反覆的登入和登出。為了在X會話間進行交換，我們可以通過‘<strong>ctrl+Alt+F7</strong>’和‘<strong>ctrl+Alt+F8</strong>’的組合鍵來完成。</p><p><strong>注意</strong>：快捷鍵“<strong>ctrl+Alt+F1～F6</strong>“是為了控制台會話準備的，而“<strong>ctrl+Alt+F７～F12</strong>”則為X會話服務。因此我們有<strong>6</strong>個控制台會話和<strong>6</strong>個X會話，不需要頻繁的登入登出。上面的順序適用於大多數的發行版，然而不同發行版可能會有不同的實現。我在Debian中嘗試過，運行的很好。</p><p>以上就是今天的所有內容。我們如有需要會在以後的文章中繼續發佈“鮮為人知的命令”，不要忘記留下你對我們文章和‘ <strong>鮮為人知的Linux命令</strong> ’系列的寶貴意見。我會很快帶來我的新文章，敬請期待，記得常回來看看哦。</p><hr>`,44)),n("p",null,[t[5]||(t[5]=e("via: ",-1)),r(o,{href:"http://www.tecmint.com/10-lesser-known-useful-linux-commands-part-v/"},{default:a(()=>[...t[4]||(t[4]=[e("http://www.tecmint.com/10-lesser-known-useful-linux-commands-part-v/",-1)])]),_:1})]),n("p",null,[t[8]||(t[8]=e("譯者：",-1)),r(o,{href:"https://github.com/Luoxcat"},{default:a(()=>[...t[6]||(t[6]=[e("Luoxcat",-1)])]),_:1}),t[9]||(t[9]=e(" 校對：",-1)),r(o,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...t[7]||(t[7]=[e("Caroline",-1)])]),_:1})]),n("p",null,[t[12]||(t[12]=e("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[10]||(t[10]=[e("LCTT",-1)])]),_:1}),t[13]||(t[13]=e(" 原創翻譯，",-1)),r(o,{href:"http://linux.cn/"},{default:a(()=>[...t[11]||(t[11]=[e("Linux中國",-1)])]),_:1}),t[14]||(t[14]=e(" 榮譽推出",-1))])])}const P=s(u,[["render",c]]);export{C as __pageData,P as default};
