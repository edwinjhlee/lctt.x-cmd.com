import{_ as a,a0 as t,w as d,s as p,I as o,x as e,a1 as r,A as n,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"Linux 命令神器：lsof 入門 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 命令神器：lsof 入門 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 命令神器：lsof 入門 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 命令神器：lsof 入門 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20141009 Linux Terminal--An lsof Primer","title":"Linux 命令神器：lsof 入門","tag":"201410","desc":""},"relativePath":"201410/20141009 Linux Terminal--An lsof Primer.md","filePath":"[post].md"}'),h={name:"201410/20141009 Linux Terminal--An lsof Primer.md"};function f(m,l,u,b,P,E){const i=t("Link");return d(),p("div",null,[l[34]||(l[34]=o("h1",{id:"linux-命令神器-lsof-入門",tabindex:"-1"},[e("Linux 命令神器：lsof 入門 "),o("a",{class:"header-anchor",href:"#linux-命令神器-lsof-入門","aria-label":"Permalink to “Linux 命令神器：lsof 入門”"},"​")],-1)),l[35]||(l[35]=o("p",null,[o("img",{src:"http://cdn.linuxaria.com/wp-content/uploads/2011/06/tux-terminal.jpg",alt:""})],-1)),o("p",null,[l[2]||(l[2]=o("strong",null,"lsof",-1)),l[3]||(l[3]=e("是系統管理/",-1)),r(i,{href:"http://linuxaria.com/tag/security"},{default:n(()=>[...l[0]||(l[0]=[e("安全",-1)])]),_:1}),l[4]||(l[4]=e("的尤伯工具。我大多數時候用它來從系統獲得與",-1)),r(i,{href:"http://linuxaria.com/tag/network"},{default:n(()=>[...l[1]||(l[1]=[e("網絡",-1)])]),_:1}),l[5]||(l[5]=e("連接相關的信息，但那只是這個強大而又鮮為人知的應用的第一步。將這個工具稱之為lsof真實名副其實，因為它是指“",-1)),l[6]||(l[6]=o("strong",null,"列出打開文件（lists openfiles）",-1)),l[7]||(l[7]=e("”。而有一點要切記，在Unix中一切（包括網絡套接口）都是文件。",-1))]),l[36]||(l[36]=s(`<p>有趣的是，lsof也是有着最多開關的Linux/Unix命令之一。它有那麼多的開關，它有許多選項支持使用-和+前綴。</p><pre><code>usage: [-?abhlnNoOPRstUvV] [+|-c c] [+|-d s] [+D D] [+|-f[cgG]]
 [-F [f]] [-g [s]] [-i [i]] [+|-L [l]] [+|-M] [-o [o]]
 [-p s] [+|-r [t]] [-S [t]] [-T [t]] [-u s] [+|-w] [-x [fl]] [--] [names]
</code></pre><p>正如你所見，lsof有着實在是令人驚訝的選項數量。你可以使用它來獲得你係統上設備的信息，你能通過它瞭解到指定的用户在指定的地點正在碰什麼東西，或者甚至是一個進程正在使用什麼文件或網絡連接。</p><p>對於我，lsof替代了netstat和ps的全部工作。它可以帶來那些工具所能帶來的一切，而且要比那些工具多得多。那麼，讓我們來看看它的一些基本能力吧：</p><h3 id="關鍵選項" tabindex="-1">關鍵選項 <a class="header-anchor" href="#關鍵選項" aria-label="Permalink to “關鍵選項”">​</a></h3><p>理解一些關於lsof如何工作的關鍵性東西是很重要的。最重要的是，當你給它傳遞選項時，<strong>默認行為</strong>是對結果進行“或”運算。因此，如果你正是用-i來拉出一個端口列表，同時又用-p來拉出一個進程列表，那麼默認情況下你會獲得兩者的結果。</p><p>下面的一些其它東西需要牢記：</p><ul><li><strong>默認</strong> : 沒有選項，lsof列出活躍進程的所有打開文件</li><li><strong>組合</strong> : 可以將選項組合到一起，如-abc，但要當心哪些選項需要參數</li><li><strong>-a</strong> : 結果進行“與”運算（而不是“或”）</li><li><strong>-l</strong> : 在輸出顯示用户ID而不是用户名</li><li><strong>-h</strong> : 獲得幫助</li><li><strong>-t</strong> : 僅獲取進程ID</li><li><strong>-U</strong> : 獲取UNIX套接口地址</li><li><strong>-F</strong> : 格式化輸出結果，用於其它命令。可以通過多種方式格式化，如-F pcfn（用於進程id、命令名、文件描述符、文件名，並以空終止）</li></ul><h3 id="獲取網絡信息" tabindex="-1">獲取網絡信息 <a class="header-anchor" href="#獲取網絡信息" aria-label="Permalink to “獲取網絡信息”">​</a></h3><p>正如我所説的，我主要將lsof用於獲取關於系統怎麼和網絡交互的信息。這裏提供了關於此信息的一些主題：</p><h4 id="使用-i顯示所有連接" tabindex="-1">使用-i顯示所有連接 <a class="header-anchor" href="#使用-i顯示所有連接" aria-label="Permalink to “使用-i顯示所有連接”">​</a></h4><p>有些人喜歡用netstat來獲取網絡連接，但是我更喜歡使用lsof來進行此項工作。結果以對我來説很直觀的方式呈現，我僅僅只需改變我的語法，就可以通過同樣的命令來獲取更多信息。</p><pre><code># lsof -i

COMMAND  PID USER   FD   TYPE DEVICE SIZE NODE NAME
dhcpcd 6061 root 4u IPv4 4510 UDP *:bootpc
sshd 7703 root 3u IPv6  6499 TCP *:ssh (LISTEN)
sshd 7892 root 3u IPv6  6757 TCP 10.10.1.5:ssh-&gt;192.168.1.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-i-6僅獲取ipv6流量" tabindex="-1">使用-i 6僅獲取IPv6流量 <a class="header-anchor" href="#使用-i-6僅獲取ipv6流量" aria-label="Permalink to “使用-i 6僅獲取IPv6流量”">​</a></h4><pre><code># lsof -i 6
</code></pre><h4 id="僅顯示tcp連接-同理可獲得udp連接" tabindex="-1">僅顯示TCP連接（同理可獲得UDP連接） <a class="header-anchor" href="#僅顯示tcp連接-同理可獲得udp連接" aria-label="Permalink to “僅顯示TCP連接（同理可獲得UDP連接）”">​</a></h4><p>你也可以通過在-i後提供對應的協議來僅僅顯示TCP或者UDP連接信息。</p><pre><code># lsof -iTCP

COMMAND  PID USER   FD   TYPE DEVICE SIZE NODE NAME
sshd 7703 root 3u IPv6 6499 TCP *:ssh (LISTEN)
sshd 7892 root 3u IPv6 6757 TCP 10.10.1.5:ssh-&gt;192.168.1.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-i-port來顯示與指定端口相關的網絡信息" tabindex="-1">使用-i:port來顯示與指定端口相關的網絡信息 <a class="header-anchor" href="#使用-i-port來顯示與指定端口相關的網絡信息" aria-label="Permalink to “使用-i:port來顯示與指定端口相關的網絡信息”">​</a></h4><p>或者，你也可以通過端口搜索，這對於要找出什麼阻止了另外一個應用綁定到指定端口實在是太棒了。</p><pre><code># lsof -i :22

COMMAND  PID USER   FD   TYPE DEVICE SIZE NODE NAME
sshd 7703 root 3u  IPv6 6499 TCP *:ssh (LISTEN)
sshd 7892 root 3u  IPv6 6757 TCP 10.10.1.5:ssh-&gt;192.168.1.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-host來顯示指定到指定主機的連接" tabindex="-1">使用@host來顯示指定到指定主機的連接 <a class="header-anchor" href="#使用-host來顯示指定到指定主機的連接" aria-label="Permalink to “使用@host來顯示指定到指定主機的連接”">​</a></h4><p>這對於你在檢查是否開放連接到網絡中或互聯網上某個指定主機的連接時十分有用。</p><pre><code># lsof -i@172.16.12.5

sshd 7892 root 3u IPv6 6757 TCP 10.10.1.5:ssh-&gt;172.16.12.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-host-port顯示基於主機與端口的連接" tabindex="-1">使用@host:port顯示基於主機與端口的連接 <a class="header-anchor" href="#使用-host-port顯示基於主機與端口的連接" aria-label="Permalink to “使用@host:port顯示基於主機與端口的連接”">​</a></h4><p>你也可以組合主機與端口的顯示信息。</p><pre><code># lsof -i@172.16.12.5:22

sshd 7892 root 3u IPv6 6757 TCP 10.10.1.5:ssh-&gt;172.16.12.5:49901 (ESTABLISHED)
</code></pre><h4 id="找出監聽端口" tabindex="-1">找出監聽端口 <a class="header-anchor" href="#找出監聽端口" aria-label="Permalink to “找出監聽端口”">​</a></h4><p>找出正等候連接的端口。</p><pre><code># lsof -i -sTCP:LISTEN
</code></pre><p>你也可以grep “LISTEN”來完成該任務。</p><pre><code># lsof -i | grep -i LISTEN

iTunes     400 daniel   16u  IPv4 0x4575228  0t0 TCP *:daap (LISTEN)
</code></pre><h4 id="找出已建立的連接" tabindex="-1">找出已建立的連接 <a class="header-anchor" href="#找出已建立的連接" aria-label="Permalink to “找出已建立的連接”">​</a></h4><p>你也可以顯示任何已經連接的連接。</p><pre><code># lsof -i -sTCP:ESTABLISHED
</code></pre><p>你也可以通過grep搜索“ESTABLISHED”來完成該任務。</p><pre><code># lsof -i | grep -i ESTABLISHED

firefox-b 169 daniel  49u IPv4 0t0 TCP 1.2.3.3:1863-&gt;1.2.3.4:http (ESTABLISHED)
</code></pre><h3 id="用户信息" tabindex="-1">用户信息 <a class="header-anchor" href="#用户信息" aria-label="Permalink to “用户信息”">​</a></h3><p>你也可以獲取各種用户的信息，以及它們在系統上正幹着的事情，包括它們的網絡活動、對文件的操作等。</p><h4 id="使用-u顯示指定用户打開了什麼" tabindex="-1">使用-u顯示指定用户打開了什麼 <a class="header-anchor" href="#使用-u顯示指定用户打開了什麼" aria-label="Permalink to “使用-u顯示指定用户打開了什麼”">​</a></h4><pre><code># lsof -u daniel

-- snipped --
Dock 155 daniel  txt REG   14,2   2798436   823208 /usr/lib/libicucore.A.dylib
Dock 155 daniel  txt REG   14,2   1580212   823126 /usr/lib/libobjc.A.dylib
Dock 155 daniel  txt REG   14,2   2934184   823498 /usr/lib/libstdc++.6.0.4.dylib
Dock 155 daniel  txt REG   14,2    132008   823505 /usr/lib/libgcc_s.1.dylib
Dock 155 daniel  txt REG   14,2    212160   823214 /usr/lib/libauto.dylib
-- snipped --
</code></pre><h4 id="使用-u-user來顯示除指定用户以外的其它所有用户所做的事情" tabindex="-1">使用-u ^user來顯示除指定用户以外的其它所有用户所做的事情 <a class="header-anchor" href="#使用-u-user來顯示除指定用户以外的其它所有用户所做的事情" aria-label="Permalink to “使用-u ^user來顯示除指定用户以外的其它所有用户所做的事情”">​</a></h4><pre><code># lsof -u ^daniel

-- snipped --
Dock 155 jim  txt REG   14,2   2798436   823208 /usr/lib/libicucore.A.dylib
Dock 155 jim  txt REG   14,2   1580212   823126 /usr/lib/libobjc.A.dylib
Dock 155 jim  txt REG   14,2   2934184   823498 /usr/lib/libstdc++.6.0.4.dylib
Dock 155 jim  txt REG   14,2    132008   823505 /usr/lib/libgcc_s.1.dylib
Dock 155 jim  txt REG   14,2    212160   823214 /usr/lib/libauto.dylib
-- snipped --
</code></pre><h4 id="殺死指定用户所做的一切事情" tabindex="-1">殺死指定用户所做的一切事情 <a class="header-anchor" href="#殺死指定用户所做的一切事情" aria-label="Permalink to “殺死指定用户所做的一切事情”">​</a></h4><p>可以消滅指定用户運行的所有東西，這真不錯。</p><pre><code># kill -9 \`lsof -t -u daniel\`
</code></pre><h3 id="命令和進程" tabindex="-1">命令和進程 <a class="header-anchor" href="#命令和進程" aria-label="Permalink to “命令和進程”">​</a></h3><p>可以查看指定程序或進程由什麼啓動，這通常會很有用，而你可以使用lsof通過名稱或進程ID過濾來完成這個任務。下面列出了一些選項：</p><h4 id="使用-c查看指定的命令正在使用的文件和網絡連接" tabindex="-1">使用-c查看指定的命令正在使用的文件和網絡連接 <a class="header-anchor" href="#使用-c查看指定的命令正在使用的文件和網絡連接" aria-label="Permalink to “使用-c查看指定的命令正在使用的文件和網絡連接”">​</a></h4><pre><code># lsof -c syslog-ng

COMMAND    PID USER   FD   TYPE     DEVICE    SIZE       NODE NAME
syslog-ng 7547 root  cwd    DIR    3,3    4096   2 /
syslog-ng 7547 root  rtd    DIR    3,3    4096   2 /
syslog-ng 7547 root  txt    REG    3,3  113524  1064970 /usr/sbin/syslog-ng
-- snipped --
</code></pre><h4 id="使用-p查看指定進程id已打開的內容" tabindex="-1">使用-p查看指定進程ID已打開的內容 <a class="header-anchor" href="#使用-p查看指定進程id已打開的內容" aria-label="Permalink to “使用-p查看指定進程ID已打開的內容”">​</a></h4><pre><code># lsof -p 10075

-- snipped --
sshd    10068 root  mem    REG    3,3   34808 850407 /lib/libnss_files-2.4.so
sshd    10068 root  mem    REG    3,3   34924 850409 /lib/libnss_nis-2.4.so
sshd    10068 root  mem    REG    3,3   26596 850405 /lib/libnss_compat-2.4.so
sshd    10068 root  mem    REG    3,3  200152 509940 /usr/lib/libssl.so.0.9.7
sshd    10068 root  mem    REG    3,3   46216 510014 /usr/lib/liblber-2.3
sshd    10068 root  mem    REG    3,3   59868 850413 /lib/libresolv-2.4.so
sshd    10068 root  mem    REG    3,3 1197180 850396 /lib/libc-2.4.so
sshd    10068 root  mem    REG    3,3   22168 850398 /lib/libcrypt-2.4.so
sshd    10068 root  mem    REG    3,3   72784 850404 /lib/libnsl-2.4.so
sshd    10068 root  mem    REG    3,3   70632 850417 /lib/libz.so.1.2.3
sshd    10068 root  mem    REG    3,3    9992 850416 /lib/libutil-2.4.so
-- snipped --
</code></pre><h4 id="t選項只返回pid" tabindex="-1">-t選項只返回PID <a class="header-anchor" href="#t選項只返回pid" aria-label="Permalink to “-t選項只返回PID”">​</a></h4><pre><code># lsof -t -c Mail

350
</code></pre><h3 id="文件和目錄" tabindex="-1">文件和目錄 <a class="header-anchor" href="#文件和目錄" aria-label="Permalink to “文件和目錄”">​</a></h3><p>通過查看指定文件或目錄，你可以看到系統上所有正與其交互的資源——包括用户、進程等。</p><h4 id="顯示與指定目錄交互的所有一切" tabindex="-1">顯示與指定目錄交互的所有一切 <a class="header-anchor" href="#顯示與指定目錄交互的所有一切" aria-label="Permalink to “顯示與指定目錄交互的所有一切”">​</a></h4><pre><code># lsof /var/log/messages/

COMMAND    PID USER   FD   TYPE DEVICE   SIZE   NODE NAME
syslog-ng 7547 root    4w   REG    3,3 217309 834024 /var/log/messages
</code></pre><h3 id="顯示與指定文件交互的所有一切" tabindex="-1">顯示與指定文件交互的所有一切 <a class="header-anchor" href="#顯示與指定文件交互的所有一切" aria-label="Permalink to “顯示與指定文件交互的所有一切”">​</a></h3><pre><code># lsof /home/daniel/firewall_whitelist.txt
</code></pre><h3 id="高級用法" tabindex="-1">高級用法 <a class="header-anchor" href="#高級用法" aria-label="Permalink to “高級用法”">​</a></h3>`,61)),o("p",null,[l[9]||(l[9]=e("與",-1)),r(i,{href:"http://danielmiessler.com/study/tcpdump/"},{default:n(()=>[...l[8]||(l[8]=[e("tcpdump",-1)])]),_:1}),l[10]||(l[10]=e("類似，當你開始組合查詢時，它就顯示了它強大的功能。",-1))]),l[37]||(l[37]=s(`<h4 id="顯示daniel連接到1-1-1-1所做的一切" tabindex="-1">顯示daniel連接到1.1.1.1所做的一切 <a class="header-anchor" href="#顯示daniel連接到1-1-1-1所做的一切" aria-label="Permalink to “顯示daniel連接到1.1.1.1所做的一切”">​</a></h4><pre><code># lsof -u daniel -i @1.1.1.1

bkdr   1893 daniel 3u  IPv6 3456 TCP 10.10.1.10:1234-&gt;1.1.1.1:31337 (ESTABLISHED)
</code></pre><h4 id="同時使用-t和-c選項以給進程發送-hup-信號" tabindex="-1">同時使用-t和-c選項以給進程發送 HUP 信號 <a class="header-anchor" href="#同時使用-t和-c選項以給進程發送-hup-信號" aria-label="Permalink to “同時使用-t和-c選項以給進程發送 HUP 信號”">​</a></h4><pre><code># kill -HUP \`lsof -t -c sshd\`
</code></pre><h4 id="lsof-l1顯示所有打開的鏈接數小於1的文件" tabindex="-1">lsof +L1顯示所有打開的鏈接數小於1的文件 <a class="header-anchor" href="#lsof-l1顯示所有打開的鏈接數小於1的文件" aria-label="Permalink to “lsof +L1顯示所有打開的鏈接數小於1的文件”">​</a></h4><p>這通常（當不總是）表示某個攻擊者正嘗試通過刪除文件入口來隱藏文件內容。</p><pre><code># lsof +L1

(hopefully nothing)
</code></pre><h4 id="顯示某個端口範圍的打開的連接" tabindex="-1">顯示某個端口範圍的打開的連接 <a class="header-anchor" href="#顯示某個端口範圍的打開的連接" aria-label="Permalink to “顯示某個端口範圍的打開的連接”">​</a></h4><pre><code># lsof -i @fw.google.com:2150=2180
</code></pre><h3 id="結尾" tabindex="-1">結尾 <a class="header-anchor" href="#結尾" aria-label="Permalink to “結尾”">​</a></h3>`,10)),o("p",null,[l[13]||(l[13]=e("本入門教程只是管窺了lsof功能的一斑，要查看完整參考，運行man lsof命令或查看",-1)),r(i,{href:"http://www.netadmintools.com/html/lsof.man.html"},{default:n(()=>[...l[11]||(l[11]=[e("在線版本",-1)])]),_:1}),l[14]||(l[14]=e("。希望本文對你有所助益，也隨時",-1)),r(i,{href:"http://danielmiessler.com/connect/"},{default:n(()=>[...l[12]||(l[12]=[e("歡迎你的評論和指正",-1)])]),_:1}),l[15]||(l[15]=e("。",-1))]),l[38]||(l[38]=o("h3",{id:"資源",tabindex:"-1"},[e("資源 "),o("a",{class:"header-anchor",href:"#資源","aria-label":"Permalink to “資源”"},"​")],-1)),o("ul",null,[o("li",null,[l[17]||(l[17]=e("lsof手冊頁：",-1)),r(i,{href:"http://www.netadmintools.com/html/lsof.man.html"},{default:n(()=>[...l[16]||(l[16]=[e("http://www.netadmintools.com/html/lsof.man.html",-1)])]),_:1})])]),o("p",null,[l[19]||(l[19]=e("本文由 Daniel Miessler撰寫，首次在他",-1)),r(i,{href:"http://danielmiessler.com/study/lsof/"},{default:n(()=>[...l[18]||(l[18]=[e("Blog",-1)])]),_:1}),l[20]||(l[20]=e("上貼出",-1))]),l[39]||(l[39]=o("hr",null,null,-1)),o("p",null,[l[22]||(l[22]=e("via: ",-1)),r(i,{href:"http://linuxaria.com/howto/linux-terminal-an-lsof-primer"},{default:n(()=>[...l[21]||(l[21]=[e("http://linuxaria.com/howto/linux-terminal-an-lsof-primer",-1)])]),_:1})]),o("p",null,[l[26]||(l[26]=e("作者：",-1)),r(i,{href:"https://plus.google.com/101727609700016666852/posts?rel=author"},{default:n(()=>[...l[23]||(l[23]=[e("Daniel Miessler",-1)])]),_:1}),l[27]||(l[27]=e(" 譯者：",-1)),r(i,{href:"https://github.com/GOLinux"},{default:n(()=>[...l[24]||(l[24]=[e("GOLinux",-1)])]),_:1}),l[28]||(l[28]=e(" 校對：",-1)),r(i,{href:"https://github.com/wxy"},{default:n(()=>[...l[25]||(l[25]=[e("wxy",-1)])]),_:1})]),o("p",null,[l[31]||(l[31]=e("本文由 ",-1)),r(i,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...l[29]||(l[29]=[e("LCTT",-1)])]),_:1}),l[32]||(l[32]=e(" 原創翻譯，",-1)),r(i,{href:"http://linux.cn/"},{default:n(()=>[...l[30]||(l[30]=[e("Linux中國",-1)])]),_:1}),l[33]||(l[33]=e(" 榮譽推出",-1))])])}const D=a(h,[["render",f]]);export{g as __pageData,D as default};
