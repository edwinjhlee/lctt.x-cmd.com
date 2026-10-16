import{_ as s,a0 as i,w as l,s as p,I as n,x as e,a1 as r,A as a,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"十个鲜为人知的Linux命令 - Part 5 | LCTT x X-CMD","titleTemplate":false,"description":"十个鲜为人知的Linux命令 - Part 5 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十个鲜为人知的Linux命令 - Part 5 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十个鲜为人知的Linux命令 - Part 5 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/10 Lesser Known Useful Linux Commands- Part V","title":"十个鲜为人知的Linux命令 - Part 5","tag":"201401","desc":""},"relativePath":"201401/10 Lesser Known Useful Linux Commands- Part V.md","filePath":"[post].md"}'),u={name:"201401/10 Lesser Known Useful Linux Commands- Part V.md"};function c(h,t,f,m,g,x){const o=i("Link");return l(),p("div",null,[t[15]||(t[15]=n("h1",{id:"十个鲜为人知的linux命令-part-5",tabindex:"-1"},[e("十个鲜为人知的Linux命令 - Part 5 "),n("a",{class:"header-anchor",href:"#十个鲜为人知的linux命令-part-5","aria-label":"Permalink to “十个鲜为人知的Linux命令 - Part 5”"},"​")],-1)),t[16]||(t[16]=n("p",null,[e("在前四篇 "),n("strong",null,"“鲜为人知的Linux命令”"),e(" 系列文章受到高度赞赏之后，我们将为广大读者呈上此系列的最后一篇文章，虽然是最后一篇，但是其重要性毫不逊于前几篇。")],-1)),t[17]||(t[17]=n("p",null,[n("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/12/10-Lesser-Known-Useful-Commands-V.png",alt:""})],-1)),t[18]||(t[18]=n("p",null,"前几篇文章的地址如下：",-1)),n("ul",null,[n("li",null,[r(o,{href:"http://linux.cn/article-2258-1.html"},{default:a(()=>[...t[0]||(t[0]=[e("十一个鲜为人知的 Linux 命令 - Part 1",-1)])]),_:1})]),n("li",null,[r(o,{href:"http://linux.cn/article-2265-1.html"},{default:a(()=>[...t[1]||(t[1]=[e("十个鲜为人知的 Linux 命令 - Part 2",-1)])]),_:1})]),n("li",null,[r(o,{href:"http://linux.cn/article-2284-1.html"},{default:a(()=>[...t[2]||(t[2]=[e("十个鲜为人知的 Linux 命令 - Part 3",-1)])]),_:1})]),n("li",null,[r(o,{href:"http://linux.cn/article-2404-1.html"},{default:a(()=>[...t[3]||(t[3]=[e("十个鲜为人知的 Linux 命令 - Part 4",-1)])]),_:1})])]),t[19]||(t[19]=d(`<h3 id="_42-lsb-release" tabindex="-1">42. lsb_release <a class="header-anchor" href="#_42-lsb-release" aria-label="Permalink to “42. lsb_release”">​</a></h3><p><strong>‘lsb_release’</strong> 命令会打印特殊发行版的信息。如果 <strong>lsb_release</strong> 还没安装，你可以在基于 <strong>Debain</strong> 的发行版中用命令 apt 安装，在基于 <strong>Red Hat</strong> 系统下用 yum 来安装包。</p><pre><code># lsb_release -a
LSB Version:    :base-4.0-ia32:base-4.0-noarch:core-4.0-ia32:core-4.0-noarch:graphics-4.0-ia32:
Distributor ID: CentOS
Description:    CentOS release 6.3 (Final)
Release:        6.3
Codename:       Final
</code></pre><p><strong>注意：</strong>选项‘<strong>-a</strong>’，会显示有关<strong>版本、ID、详情、发行号</strong>和<strong>研发代号</strong>的全部可用信息。</p><h3 id="_43-nc-zv-localhost-80" tabindex="-1">43. nc -zv localhost 80 <a class="header-anchor" href="#_43-nc-zv-localhost-80" aria-label="Permalink to “43. nc -zv localhost 80”">​</a></h3><p>检查 <strong>80</strong> 端口是否被打开。我们可以用任何其他端口号替换‘<strong>80</strong>’来检查端口是否被打开或关闭。</p><pre><code>$ nc -zv localhost 80
Connection to localhost 80 port [tcp/http] succeeded!
</code></pre><p>（译注：出现该信息表示80端口已被打开。）</p><p>检查 <strong>8080</strong> 端口是否启用</p><pre><code>$ nc -zv localhost 8080
nc: connect to localhost port 8080 (tcp) failed: Connection refused
</code></pre><p>（译注：该信息显示了8080端口并未打开。）</p><h3 id="_44-curl-ipinfo-io" tabindex="-1">44. curl ipinfo.io <a class="header-anchor" href="#_44-curl-ipinfo-io" aria-label="Permalink to “44. curl ipinfo.io”">​</a></h3><p>该命令会输出并提供 <strong>IP 地址</strong> 的 <strong>‘地理位置’</strong> 。</p><pre><code>$ curl ipinfo.io 
</code></pre><p>&quot;ip&quot;: &quot;xx.xx.xx.xx&quot;, &quot;hostname&quot;: &quot;triband-del-aa.bbb.cc.ddd.bol.net.in&quot;, &quot;city&quot;: &quot;null&quot;, &quot;region&quot;: &quot;null&quot;, &quot;country&quot;: &quot;IN&quot;, &quot;loc&quot;: &quot;20,77&quot;, &quot;org&quot;: &quot;AS17813 Mahanagar Telephone Nigam Ltd&quot;.</p><h3 id="_45-find-user-root" tabindex="-1">45. find . -user root <a class="header-anchor" href="#_45-find-user-root" aria-label="Permalink to “45. find . -user root”">​</a></h3><p>该命令会输出当前目录下( <strong>root</strong> )用户所拥有的文件（译注：即owner为root）。下面是在当前目录下列出的所有 ‘root’用户拥有的文件。</p><pre><code># find . -user root
./.recently-used.xbel
./.mysql_history
./.aptitude
./.aptitude/config
./.aptitude/cache
./.bluefish
./.bluefish/session-2.0
./.bluefish/autosave
./.bash_history
</code></pre><p>在当前路径下列出所有 <strong>‘avi’</strong> 用户拥有的文件</p><pre><code># find . -user avi
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
</code></pre><h3 id="_46-sudo-apt-get-build-dep-ffmpeg" tabindex="-1">46. sudo apt-get build-dep ffmpeg <a class="header-anchor" href="#_46-sudo-apt-get-build-dep-ffmpeg" aria-label="Permalink to “46. sudo apt-get build-dep ffmpeg”">​</a></h3><p>该命令会在相应的包安装时自动构建依赖关系。因此包安装的过程将非常流畅，也是非常容易的。</p><pre><code># apt-get build-dep ffmpeg
libxinerama-dev libxml-namespacesupport-perl libxml-sax-expat-perl
libxml-sax-perl libxml-simple-perl libxrandr-dev libxrender-dev
x11proto-render-dev x11proto-xinerama-dev xulrunner-dev
The following packages will be upgraded:
libpixman-1-0

1 upgraded, 143 newly installed, 0 to remove and 6 not upgraded.
Need to get 205 MB of archives.
After this operation, 448 MB of additional disk space will be used.
Do you want to continue [Y/n]?
</code></pre><h3 id="_47-lsof-itcp-80-stcp-listen" tabindex="-1">47. lsof -iTCP:80 -sTCP:LISTEN <a class="header-anchor" href="#_47-lsof-itcp-80-stcp-listen" aria-label="Permalink to “47. lsof -iTCP:80 -sTCP:LISTEN”">​</a></h3><p>该命令会输出所用正在使用 <strong>80</strong> 端口的 <strong>进程/服务</strong> 的名称。在 <strong>80</strong> 端口运行下列命令会更好理解这个命令，它会列出所用运行在该端口的 <strong>进程/服务</strong> 。</p><pre><code>root@localhost:/home/avi# lsof -iTCP:80 -sTCP:LISTEN
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
apache2 1566 root 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1664 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1665 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1666 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1667 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
apache2 1668 www-data 5u IPv6 5805 0t0 TCP *:www (LISTEN)
</code></pre><p>同样，你可以检查运行在端口 <strong>22</strong> 的进程/服务。</p><pre><code>root@localhost:/home/avi# lsof -iTCP:22 -sTCP:LISTEN
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
sshd 2261 root 3u IPv4 8366 0t0 TCP *:ssh (LISTEN)
sshd 2261 root 4u IPv6 8369 0t0 TCP *:ssh (LISTEN)
</code></pre><h3 id="_48-find-size-100m" tabindex="-1">48. find -size +100M <a class="header-anchor" href="#_48-find-size-100m" aria-label="Permalink to “48. find -size +100M”">​</a></h3><p>这条find命令会在当前目录下列出所有超过指定大小的文件(这里指定为<strong>100 MB</strong>)，递归查询。</p><pre><code># find -size +100M
./.local/share/Trash/files/linuxmint-15-cinnamon-dvd-32bit.iso
./Downloads/Fedora-Live-Desktop-i686-19-1.iso
./Downloads/Ant Videos/shakira 2.avi
./Downloads/Deewar.avi
./Desktop/101MSDCF/MOV02224.AVI
./Desktop/101MSDCF/MOV02020.AVI
./Desktop/101MSDCF/MOV00406.MP4
./Desktop/squeeze.iso
</code></pre><p>在当前目录递归的列出所用大于 <strong>1000 MB</strong> 的文件。</p><pre><code>root@localhost:/home/avi# find -size +1000M
./Downloads/The Dark Knight 2008 hindi BRRip 720p/The Dark Knight.mkv.part
./Downloads/Saudagar - (1991) - DVDRiP - x264 - AAC 5.1 - Chapters - Esubs - [DDR]/Saudagar 
- (1991) - DVDRiP - x264 - AAC 5.1 - Chapters - Esubs - [DDR].mkv
./Downloads/Deewar.avi
./Desktop/squeeze.iso
</code></pre><h3 id="_49-pdftk" tabindex="-1">49. pdftk <a class="header-anchor" href="#_49-pdftk" aria-label="Permalink to “49. pdftk”">​</a></h3><p><strong>pdftk</strong>命令用来合并几个pdf文件。你必须安装有 <strong>pdftk</strong> 程序。如果还没有，请用apt或yum来获取相应的包。</p><pre><code>$ pdftk 1.pdf 2.pdf 3.pdf …. 10.pdf cat output merged.pdf
</code></pre><h3 id="_50-ps-lf-u-user-name" tabindex="-1">50. ps -LF -u user_name <a class="header-anchor" href="#_50-ps-lf-u-user-name" aria-label="Permalink to “50. ps -LF -u user_name”">​</a></h3><p>该命令会输出一个用户的进程和线程。选项“<strong>L</strong>”（列出线程），选项“<strong>-F</strong>”（完整格式化）</p><pre><code>$ ps -LF -u avi
avi 21645 3717 21766 0 5 66168 117164 1 18:58 ? 00:00:00 /usr/
avi 21645 3717 21768 0 5 66168 117164 1 18:58 ? 00:00:00 /usr/
avi 22314 3717 22314 0 2 42797 50332 0 19:00 ? 00:00:40 /usr/
avi 22314 3717 22316 0 2 42797 50332 1 19:00 ? 00:00:00 /usr/
avi 22678 24621 22678 0 1 969 1060 1 21:05 pts/1 00:00:00 ps -L
avi 23051 3717 23051 0 2 37583 45444 1 19:03 ? 00:00:52 /usr/
avi 23051 3717 23053 0 2 37583 45444 0 19:03 ? 00:00:03 /usr/
avi 23652 1 23652 0 2 22092 12520 0 19:06 ? 00:00:22 gnome
avi 23652 1 23655 0 2 22092 12520 0 19:06 ? 00:00:00 gnome
</code></pre><h3 id="_51-startx-1" tabindex="-1">51. startx - :1 <a class="header-anchor" href="#_51-startx-1" aria-label="Permalink to “51. startx - :1”">​</a></h3><p>分享 <strong>X</strong> 会话。如果你需要频繁的（以不同用户身份）登入或登出桌面时，那就需要 <strong>startx</strong> 来救场。这个命令建立了一个新的会话从而避免了在一个会话中反复的登入和登出。为了在X会话间进行交换，我们可以通过‘<strong>ctrl+Alt+F7</strong>’和‘<strong>ctrl+Alt+F8</strong>’的组合键来完成。</p><p><strong>注意</strong>：快捷键“<strong>ctrl+Alt+F1～F6</strong>“是为了控制台会话准备的，而“<strong>ctrl+Alt+F７～F12</strong>”则为X会话服务。因此我们有<strong>6</strong>个控制台会话和<strong>6</strong>个X会话，不需要频繁的登入登出。上面的顺序适用于大多数的发行版，然而不同发行版可能会有不同的实现。我在Debian中尝试过，运行的很好。</p><p>以上就是今天的所有内容。我们如有需要会在以后的文章中继续发布“鲜为人知的命令”，不要忘记留下你对我们文章和‘ <strong>鲜为人知的Linux命令</strong> ’系列的宝贵意见。我会很快带来我的新文章，敬请期待，记得常回来看看哦。</p><hr>`,44)),n("p",null,[t[5]||(t[5]=e("via: ",-1)),r(o,{href:"http://www.tecmint.com/10-lesser-known-useful-linux-commands-part-v/"},{default:a(()=>[...t[4]||(t[4]=[e("http://www.tecmint.com/10-lesser-known-useful-linux-commands-part-v/",-1)])]),_:1})]),n("p",null,[t[8]||(t[8]=e("译者：",-1)),r(o,{href:"https://github.com/Luoxcat"},{default:a(()=>[...t[6]||(t[6]=[e("Luoxcat",-1)])]),_:1}),t[9]||(t[9]=e(" 校对：",-1)),r(o,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...t[7]||(t[7]=[e("Caroline",-1)])]),_:1})]),n("p",null,[t[12]||(t[12]=e("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[10]||(t[10]=[e("LCTT",-1)])]),_:1}),t[13]||(t[13]=e(" 原创翻译，",-1)),r(o,{href:"http://linux.cn/"},{default:a(()=>[...t[11]||(t[11]=[e("Linux中国",-1)])]),_:1}),t[14]||(t[14]=e(" 荣誉推出",-1))])])}const P=s(u,[["render",c]]);export{C as __pageData,P as default};
