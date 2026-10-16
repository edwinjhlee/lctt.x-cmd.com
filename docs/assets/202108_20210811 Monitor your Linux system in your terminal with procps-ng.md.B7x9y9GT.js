import{_ as t,a0 as o,w as r,s as d,ao as l,I as a,x as n,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"在终端监控你的 Linux 系统 | LCTT x X-CMD","titleTemplate":false,"description":"在终端监控你的 Linux 系统 | LCTT (202108) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在终端监控你的 Linux 系统 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在终端监控你的 Linux 系统 | LCTT (202108) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202108/20210811 Monitor your Linux system in your terminal with procps-ng","title":"在终端监控你的 Linux 系统","tag":"202108","desc":""},"relativePath":"202108/20210811 Monitor your Linux system in your terminal with procps-ng.md","filePath":"[post].md"}'),u={name:"202108/20210811 Monitor your Linux system in your terminal with procps-ng.md"};function c(g,s,h,b,k,f){const p=o("Link");return r(),d("div",null,[s[31]||(s[31]=l('<h1 id="在终端监控你的-linux-系统" tabindex="-1">在终端监控你的 Linux 系统 <a class="header-anchor" href="#在终端监控你的-linux-系统" aria-label="Permalink to “在终端监控你的 Linux 系统”">​</a></h1><blockquote><p>如何找到一个程序的进程 ID（PID）。最常见的 Linux 工具是由 procps-ng 包提供的，包括 <code>ps</code>、<code>pstree</code>、<code>pidof</code> 和 <code>pgrep</code> 命令。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202108/24/092948gyyv6nvbn77x7y6o.jpg" alt=""></p>',3)),a("p",null,[s[1]||(s[1]=n("在 ",-1)),e(p,{href:"https://opensource.com/article/19/7/what-posix-richard-stallman-explains"},{default:i(()=>[...s[0]||(s[0]=[n("POSIX",-1)])]),_:1}),s[2]||(s[2]=n(" 术语中，",-1)),s[3]||(s[3]=a("ruby",null,[n("进程"),a("rt",null,"process")],-1)),s[4]||(s[4]=n("是一个正在进行的事件，由操作系统的内核管理。当你启动一个应用时就会产生一个进程，尽管还有许多其他的进程在你的计算机后台运行，包括保持系统时间准确的程序、监测新的文件系统、索引文件，等等。",-1))]),s[32]||(s[32]=a("p",null,"大多数操作系统都有某种类型的系统活动监视器，因此你可以了解在任何特定时刻有哪些进程在运行。Linux 有一些供你选择，包括 GNOME 系统监视器和 KSysGuard。这两个软件在桌面环境都很有用，但 Linux 也提供了在终端监控系统的能力。不管你选择哪一种，对于那些积极管理自己电脑的人来说，检查一个特定的进程是一项常见的任务。",-1)),a("p",null,[s[6]||(s[6]=n("在这篇文章中，我演示了如何找到一个程序的进程 ID（PID）。最常见的工具是由 ",-1)),e(p,{href:"https://gitlab.com/procps-ng"},{default:i(()=>[...s[5]||(s[5]=[n("procps-ng",-1)])]),_:1}),s[7]||(s[7]=n(" 包提供的，包括 ",-1)),s[8]||(s[8]=a("code",null,"ps",-1)),s[9]||(s[9]=n("、",-1)),s[10]||(s[10]=a("code",null,"pstree",-1)),s[11]||(s[11]=n("、",-1)),s[12]||(s[12]=a("code",null,"pidof",-1)),s[13]||(s[13]=n(" 和 ",-1)),s[14]||(s[14]=a("code",null,"pgrep",-1)),s[15]||(s[15]=n(" 命令。",-1))]),s[33]||(s[33]=l(`<h3 id="查找一个正在运行的程序的-pid" tabindex="-1">查找一个正在运行的程序的 PID <a class="header-anchor" href="#查找一个正在运行的程序的-pid" aria-label="Permalink to “查找一个正在运行的程序的 PID”">​</a></h3><p>有时你想得到一个你知道正在运行的特定程序的进程 ID（PID）。<code>pidof</code> 和 <code>pgrep</code> 命令可以通过命令名称查找进程。</p><p><code>pidof</code> 命令返回一个命令的 PID，它按名称搜索确切的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pidof bash</span></span>
<span class="line"><span>1776 5736</span></span></code></pre></div><p><code>pgrep</code> 命令允许使用正则表达式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pgrep .sh</span></span>
<span class="line"><span>1605</span></span>
<span class="line"><span>1679</span></span>
<span class="line"><span>1688</span></span>
<span class="line"><span>1776</span></span>
<span class="line"><span>2333</span></span>
<span class="line"><span>5736</span></span>
<span class="line"><span>$ pgrep bash</span></span>
<span class="line"><span>5736</span></span></code></pre></div><h3 id="通过文件查找-pid" tabindex="-1">通过文件查找 PID <a class="header-anchor" href="#通过文件查找-pid" aria-label="Permalink to “通过文件查找 PID”">​</a></h3><p>你可以用 <code>fuser</code> 命令找到使用特定文件的进程的 PID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ fuser --user ~/example.txt          </span></span>
<span class="line"><span>/home/tux/example.txt: 3234(tux)</span></span></code></pre></div><h3 id="通过-pid-获得进程名称" tabindex="-1">通过 PID 获得进程名称 <a class="header-anchor" href="#通过-pid-获得进程名称" aria-label="Permalink to “通过 PID 获得进程名称”">​</a></h3><p>如果你有一个进程的 PID 编号，但没有生成它的命令，你可以用 <code>ps</code> 做一个“反向查找”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps 3234</span></span>
<span class="line"><span>PID TTY   STAT  TIME COMMAND</span></span>
<span class="line"><span>5736 pts/1  Ss   0:00 emacs</span></span></code></pre></div><h3 id="列出所有进程" tabindex="-1">列出所有进程 <a class="header-anchor" href="#列出所有进程" aria-label="Permalink to “列出所有进程”">​</a></h3><p><code>ps</code> 命令列出进程。你可以用 <code>-e</code> 选项列出你系统上的每一个进程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>PID TTY          TIME CMD</span></span>
<span class="line"><span>  1 ?         00:00:03 systemd</span></span>
<span class="line"><span>  2 ?         00:00:00 kthreadd</span></span>
<span class="line"><span>  3 ?         00:00:00 rcu_gp</span></span>
<span class="line"><span>  4 ?         00:00:00 rcu_par_gp</span></span>
<span class="line"><span>  6 ?         00:00:00 kworker/0:0H-events_highpri</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>5648 ?        00:00:00 gnome-control-c</span></span>
<span class="line"><span>5656 ?        00:00:00 gnome-terminal-</span></span>
<span class="line"><span>5736 pts/1    00:00:00 bash</span></span>
<span class="line"><span>5791 pts/1    00:00:00 ps</span></span>
<span class="line"><span>5792 pts/1    00:00:00 less</span></span>
<span class="line"><span>(END)</span></span></code></pre></div><h3 id="只列出你的进程" tabindex="-1">只列出你的进程 <a class="header-anchor" href="#只列出你的进程" aria-label="Permalink to “只列出你的进程”">​</a></h3><p><code>ps -e</code> 的输出可能会让人不知所措，所以使用 <code>-U</code> 来查看一个用户的进程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps -U tux | less</span></span>
<span class="line"><span> PID TTY          TIME CMD</span></span>
<span class="line"><span>3545 ?        00:00:00 systemd</span></span>
<span class="line"><span>3548 ?        00:00:00 (sd-pam)</span></span>
<span class="line"><span>3566 ?        00:00:18 pulseaudio</span></span>
<span class="line"><span>3570 ?        00:00:00 gnome-keyring-d</span></span>
<span class="line"><span>3583 ?        00:00:00 dbus-daemon</span></span>
<span class="line"><span>3589 tty2     00:00:00 gdm-wayland-ses</span></span>
<span class="line"><span>3592 tty2     00:00:00 gnome-session-b</span></span>
<span class="line"><span>3613 ?        00:00:00 gvfsd</span></span>
<span class="line"><span>3618 ?        00:00:00 gvfsd-fuse</span></span>
<span class="line"><span>3665 tty2     00:01:03 gnome-shell</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>这样就减少了 200 个（可能是 100 个，取决于你运行的系统）需要分类的进程。</p><p>你可以用 <code>pstree</code> 命令以不同的格式查看同样的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pstree -U tux -u --show-pids</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>├─gvfsd-metadata(3921)─┬─{gvfsd-metadata}(3923)</span></span>
<span class="line"><span>│           └─{gvfsd-metadata}(3924)</span></span>
<span class="line"><span>├─ibus-portal(3836)─┬─{ibus-portal}(3840)</span></span>
<span class="line"><span>│          └─{ibus-portal}(3842)</span></span>
<span class="line"><span>├─obexd(5214)</span></span>
<span class="line"><span>├─pulseaudio(3566)─┬─{pulseaudio}(3640)</span></span>
<span class="line"><span>│         ├─{pulseaudio}(3649)</span></span>
<span class="line"><span>│         └─{pulseaudio}(5258)</span></span>
<span class="line"><span>├─tracker-store(4150)─┬─{tracker-store}(4153)</span></span>
<span class="line"><span>│           ├─{tracker-store}(4154)</span></span>
<span class="line"><span>│           ├─{tracker-store}(4157)</span></span>
<span class="line"><span>│           └─{tracker-store}(4178)</span></span>
<span class="line"><span>└─xdg-permission-3847─┬─{xdg-permission-}(3848)</span></span>
<span class="line"><span>            └─{xdg-permission-}(3850)</span></span></code></pre></div><h3 id="列出进程的上下文" tabindex="-1">列出进程的上下文 <a class="header-anchor" href="#列出进程的上下文" aria-label="Permalink to “列出进程的上下文”">​</a></h3><p>你可以用 <code>-u</code> 选项查看你拥有的所有进程的额外上下文。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps -U tux -u</span></span>
<span class="line"><span>USER  PID %CPU %MEM    VSZ   RSS TTY STAT START  TIME COMMAND</span></span>
<span class="line"><span>tux  3545  0.0  0.0  89656  9708 ?   Ss   13:59  0:00 /usr/lib/systemd/systemd --user</span></span>
<span class="line"><span>tux  3548  0.0  0.0 171416  5288 ?   S    13:59  0:00 (sd-pam)</span></span>
<span class="line"><span>tux  3566  0.9  0.1 1722212 17352 ?  S&lt;sl 13:59  0:29 /usr/bin/pulseaudio [...]</span></span>
<span class="line"><span>tux  3570  0.0  0.0 664736  8036 ?   SLl  13:59  0:00 /usr/bin/gnome-keyring-daemon [...]</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>tux  5736  0.0  0.0 235628  6036 pts/1 Ss 14:18  0:00 bash</span></span>
<span class="line"><span>tux  6227  0.0  0.4 2816872 74512 tty2 Sl+14:30  0:00 /opt/firefox/firefox-bin [...]</span></span>
<span class="line"><span>tux  6660  0.0  0.0 268524  3996 pts/1 R+ 14:50  0:00 ps -U tux -u</span></span>
<span class="line"><span>tux  6661  0.0  0.0 219468  2460 pts/1 S+ 14:50  0:00 less</span></span></code></pre></div><h3 id="用-pid-排除故障" tabindex="-1">用 PID 排除故障 <a class="header-anchor" href="#用-pid-排除故障" aria-label="Permalink to “用 PID 排除故障”">​</a></h3><p>如果你在某个特定的程序上有问题，或者你只是好奇某个程序在你的系统上还使用了什么资源，你可以用 <code>pmap</code> 查看运行中的进程的内存图。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pmap 1776</span></span>
<span class="line"><span>5736:   bash</span></span>
<span class="line"><span>000055f9060ec000   1056K r-x-- bash</span></span>
<span class="line"><span>000055f9063f3000     16K r---- bash</span></span>
<span class="line"><span>000055f906400000     40K rw---   [ anon ]</span></span>
<span class="line"><span>00007faf0fa67000   9040K r--s- passwd</span></span>
<span class="line"><span>00007faf1033b000     40K r-x-- libnss_sss.so.2</span></span>
<span class="line"><span>00007faf10345000   2044K ----- libnss_sss.so.2</span></span>
<span class="line"><span>00007faf10545000      4K rw--- libnss_sss.so.2</span></span>
<span class="line"><span>00007faf10546000 212692K r---- locale-archive</span></span>
<span class="line"><span>00007faf1d4fb000   1776K r-x-- libc-2.28.so</span></span>
<span class="line"><span>00007faf1d6b7000   2044K ----- libc-2.28.so</span></span>
<span class="line"><span>00007faf1d8ba000      8K rw--- libc-2.28.so</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="处理进程-id" tabindex="-1">处理进程 ID <a class="header-anchor" href="#处理进程-id" aria-label="Permalink to “处理进程 ID”">​</a></h3><p>procps-ng 软件包有你需要的所有命令，以调查和监控你的系统在任何时候的使用情况。无论你是对 Linux 系统中各个分散的部分如何结合在一起感到好奇，还是要对一个错误进行调查，或者你想优化你的计算机的性能，学习这些命令都会为你了解你的操作系统提供一个重要的优势。</p><hr>`,30)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/8/linux-procps-ng"},{default:i(()=>[...s[16]||(s[16]=[n("https://opensource.com/article/21/8/linux-procps-ng",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[18]||(s[18]=[n("Seth Kenlon",-1)])]),_:1}),s[23]||(s[23]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[19]||(s[19]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 译者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[20]||(s[20]=[n("geekpi",-1)])]),_:1}),s[25]||(s[25]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[27]||(s[27]=[n("Linux中国",-1)])]),_:1}),s[30]||(s[30]=n(" 荣誉推出",-1))])])}const T=t(u,[["render",c]]);export{y as __pageData,T as default};
