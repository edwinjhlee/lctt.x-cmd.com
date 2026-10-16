import{_ as t,a0 as o,w as r,s as d,ao as l,I as a,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"在終端監控你的 Linux 系統 | LCTT x X-CMD","titleTemplate":false,"description":"在終端監控你的 Linux 系統 | LCTT (202108) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在終端監控你的 Linux 系統 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在終端監控你的 Linux 系統 | LCTT (202108) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202108/20210811 Monitor your Linux system in your terminal with procps-ng","title":"在終端監控你的 Linux 系統","tag":"202108","desc":""},"relativePath":"202108/20210811 Monitor your Linux system in your terminal with procps-ng.md","filePath":"[post].md"}'),u={name:"202108/20210811 Monitor your Linux system in your terminal with procps-ng.md"};function c(g,s,h,b,k,f){const p=o("Link");return r(),d("div",null,[s[31]||(s[31]=l('<h1 id="在終端監控你的-linux-系統" tabindex="-1">在終端監控你的 Linux 系統 <a class="header-anchor" href="#在終端監控你的-linux-系統" aria-label="Permalink to “在終端監控你的 Linux 系統”">​</a></h1><blockquote><p>如何找到一個程序的進程 ID（PID）。最常見的 Linux 工具是由 procps-ng 包提供的，包括 <code>ps</code>、<code>pstree</code>、<code>pidof</code> 和 <code>pgrep</code> 命令。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202108/24/092948gyyv6nvbn77x7y6o.jpg" alt=""></p>',3)),a("p",null,[s[1]||(s[1]=n("在 ",-1)),e(p,{href:"https://opensource.com/article/19/7/what-posix-richard-stallman-explains"},{default:i(()=>[...s[0]||(s[0]=[n("POSIX",-1)])]),_:1}),s[2]||(s[2]=n(" 術語中，",-1)),s[3]||(s[3]=a("ruby",null,[n("進程"),a("rt",null,"process")],-1)),s[4]||(s[4]=n("是一個正在進行的事件，由操作系統的內核管理。當你啓動一個應用時就會產生一個進程，儘管還有許多其他的進程在你的計算機後台運行，包括保持系統時間準確的程序、監測新的文件系統、索引文件，等等。",-1))]),s[32]||(s[32]=a("p",null,"大多數操作系統都有某種類型的系統活動監視器，因此你可以瞭解在任何特定時刻有哪些進程在運行。Linux 有一些供你選擇，包括 GNOME 系統監視器和 KSysGuard。這兩個軟件在桌面環境都很有用，但 Linux 也提供了在終端監控系統的能力。不管你選擇哪一種，對於那些積極管理自己電腦的人來説，檢查一個特定的進程是一項常見的任務。",-1)),a("p",null,[s[6]||(s[6]=n("在這篇文章中，我演示瞭如何找到一個程序的進程 ID（PID）。最常見的工具是由 ",-1)),e(p,{href:"https://gitlab.com/procps-ng"},{default:i(()=>[...s[5]||(s[5]=[n("procps-ng",-1)])]),_:1}),s[7]||(s[7]=n(" 包提供的，包括 ",-1)),s[8]||(s[8]=a("code",null,"ps",-1)),s[9]||(s[9]=n("、",-1)),s[10]||(s[10]=a("code",null,"pstree",-1)),s[11]||(s[11]=n("、",-1)),s[12]||(s[12]=a("code",null,"pidof",-1)),s[13]||(s[13]=n(" 和 ",-1)),s[14]||(s[14]=a("code",null,"pgrep",-1)),s[15]||(s[15]=n(" 命令。",-1))]),s[33]||(s[33]=l(`<h3 id="查找一個正在運行的程序的-pid" tabindex="-1">查找一個正在運行的程序的 PID <a class="header-anchor" href="#查找一個正在運行的程序的-pid" aria-label="Permalink to “查找一個正在運行的程序的 PID”">​</a></h3><p>有時你想得到一個你知道正在運行的特定程序的進程 ID（PID）。<code>pidof</code> 和 <code>pgrep</code> 命令可以通過命令名稱查找進程。</p><p><code>pidof</code> 命令返回一個命令的 PID，它按名稱搜索確切的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pidof bash</span></span>
<span class="line"><span>1776 5736</span></span></code></pre></div><p><code>pgrep</code> 命令允許使用正則表達式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pgrep .sh</span></span>
<span class="line"><span>1605</span></span>
<span class="line"><span>1679</span></span>
<span class="line"><span>1688</span></span>
<span class="line"><span>1776</span></span>
<span class="line"><span>2333</span></span>
<span class="line"><span>5736</span></span>
<span class="line"><span>$ pgrep bash</span></span>
<span class="line"><span>5736</span></span></code></pre></div><h3 id="通過文件查找-pid" tabindex="-1">通過文件查找 PID <a class="header-anchor" href="#通過文件查找-pid" aria-label="Permalink to “通過文件查找 PID”">​</a></h3><p>你可以用 <code>fuser</code> 命令找到使用特定文件的進程的 PID。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ fuser --user ~/example.txt          </span></span>
<span class="line"><span>/home/tux/example.txt: 3234(tux)</span></span></code></pre></div><h3 id="通過-pid-獲得進程名稱" tabindex="-1">通過 PID 獲得進程名稱 <a class="header-anchor" href="#通過-pid-獲得進程名稱" aria-label="Permalink to “通過 PID 獲得進程名稱”">​</a></h3><p>如果你有一個進程的 PID 編號，但沒有生成它的命令，你可以用 <code>ps</code> 做一個“反向查找”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps 3234</span></span>
<span class="line"><span>PID TTY   STAT  TIME COMMAND</span></span>
<span class="line"><span>5736 pts/1  Ss   0:00 emacs</span></span></code></pre></div><h3 id="列出所有進程" tabindex="-1">列出所有進程 <a class="header-anchor" href="#列出所有進程" aria-label="Permalink to “列出所有進程”">​</a></h3><p><code>ps</code> 命令列出進程。你可以用 <code>-e</code> 選項列出你係統上的每一個進程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>PID TTY          TIME CMD</span></span>
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
<span class="line"><span>(END)</span></span></code></pre></div><h3 id="只列出你的進程" tabindex="-1">只列出你的進程 <a class="header-anchor" href="#只列出你的進程" aria-label="Permalink to “只列出你的進程”">​</a></h3><p><code>ps -e</code> 的輸出可能會讓人不知所措，所以使用 <code>-U</code> 來查看一個用户的進程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps -U tux | less</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><p>這樣就減少了 200 個（可能是 100 個，取決於你運行的系統）需要分類的進程。</p><p>你可以用 <code>pstree</code> 命令以不同的格式查看同樣的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pstree -U tux -u --show-pids</span></span>
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
<span class="line"><span>            └─{xdg-permission-}(3850)</span></span></code></pre></div><h3 id="列出進程的上下文" tabindex="-1">列出進程的上下文 <a class="header-anchor" href="#列出進程的上下文" aria-label="Permalink to “列出進程的上下文”">​</a></h3><p>你可以用 <code>-u</code> 選項查看你擁有的所有進程的額外上下文。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps -U tux -u</span></span>
<span class="line"><span>USER  PID %CPU %MEM    VSZ   RSS TTY STAT START  TIME COMMAND</span></span>
<span class="line"><span>tux  3545  0.0  0.0  89656  9708 ?   Ss   13:59  0:00 /usr/lib/systemd/systemd --user</span></span>
<span class="line"><span>tux  3548  0.0  0.0 171416  5288 ?   S    13:59  0:00 (sd-pam)</span></span>
<span class="line"><span>tux  3566  0.9  0.1 1722212 17352 ?  S&lt;sl 13:59  0:29 /usr/bin/pulseaudio [...]</span></span>
<span class="line"><span>tux  3570  0.0  0.0 664736  8036 ?   SLl  13:59  0:00 /usr/bin/gnome-keyring-daemon [...]</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>tux  5736  0.0  0.0 235628  6036 pts/1 Ss 14:18  0:00 bash</span></span>
<span class="line"><span>tux  6227  0.0  0.4 2816872 74512 tty2 Sl+14:30  0:00 /opt/firefox/firefox-bin [...]</span></span>
<span class="line"><span>tux  6660  0.0  0.0 268524  3996 pts/1 R+ 14:50  0:00 ps -U tux -u</span></span>
<span class="line"><span>tux  6661  0.0  0.0 219468  2460 pts/1 S+ 14:50  0:00 less</span></span></code></pre></div><h3 id="用-pid-排除故障" tabindex="-1">用 PID 排除故障 <a class="header-anchor" href="#用-pid-排除故障" aria-label="Permalink to “用 PID 排除故障”">​</a></h3><p>如果你在某個特定的程序上有問題，或者你只是好奇某個程序在你的系統上還使用了什麼資源，你可以用 <code>pmap</code> 查看運行中的進程的內存圖。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pmap 1776</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="處理進程-id" tabindex="-1">處理進程 ID <a class="header-anchor" href="#處理進程-id" aria-label="Permalink to “處理進程 ID”">​</a></h3><p>procps-ng 軟件包有你需要的所有命令，以調查和監控你的系統在任何時候的使用情況。無論你是對 Linux 系統中各個分散的部分如何結合在一起感到好奇，還是要對一個錯誤進行調查，或者你想優化你的計算機的性能，學習這些命令都會為你瞭解你的操作系統提供一個重要的優勢。</p><hr>`,30)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/8/linux-procps-ng"},{default:i(()=>[...s[16]||(s[16]=[n("https://opensource.com/article/21/8/linux-procps-ng",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[18]||(s[18]=[n("Seth Kenlon",-1)])]),_:1}),s[23]||(s[23]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[19]||(s[19]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:i(()=>[...s[20]||(s[20]=[n("geekpi",-1)])]),_:1}),s[25]||(s[25]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[27]||(s[27]=[n("Linux中國",-1)])]),_:1}),s[30]||(s[30]=n(" 榮譽推出",-1))])])}const T=t(u,[["render",c]]);export{y as __pageData,T as default};
