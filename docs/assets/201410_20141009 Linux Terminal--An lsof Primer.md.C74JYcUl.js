import{_ as a,a0 as t,w as d,s as p,I as o,x as e,a1 as r,A as n,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"Linux 命令神器：lsof 入门 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 命令神器：lsof 入门 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 命令神器：lsof 入门 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 命令神器：lsof 入门 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20141009 Linux Terminal--An lsof Primer","title":"Linux 命令神器：lsof 入门","tag":"201410","desc":""},"relativePath":"201410/20141009 Linux Terminal--An lsof Primer.md","filePath":"[post].md"}'),h={name:"201410/20141009 Linux Terminal--An lsof Primer.md"};function f(m,l,u,b,P,E){const i=t("Link");return d(),p("div",null,[l[34]||(l[34]=o("h1",{id:"linux-命令神器-lsof-入门",tabindex:"-1"},[e("Linux 命令神器：lsof 入门 "),o("a",{class:"header-anchor",href:"#linux-命令神器-lsof-入门","aria-label":"Permalink to “Linux 命令神器：lsof 入门”"},"​")],-1)),l[35]||(l[35]=o("p",null,[o("img",{src:"http://cdn.linuxaria.com/wp-content/uploads/2011/06/tux-terminal.jpg",alt:""})],-1)),o("p",null,[l[2]||(l[2]=o("strong",null,"lsof",-1)),l[3]||(l[3]=e("是系统管理/",-1)),r(i,{href:"http://linuxaria.com/tag/security"},{default:n(()=>[...l[0]||(l[0]=[e("安全",-1)])]),_:1}),l[4]||(l[4]=e("的尤伯工具。我大多数时候用它来从系统获得与",-1)),r(i,{href:"http://linuxaria.com/tag/network"},{default:n(()=>[...l[1]||(l[1]=[e("网络",-1)])]),_:1}),l[5]||(l[5]=e("连接相关的信息，但那只是这个强大而又鲜为人知的应用的第一步。将这个工具称之为lsof真实名副其实，因为它是指“",-1)),l[6]||(l[6]=o("strong",null,"列出打开文件（lists openfiles）",-1)),l[7]||(l[7]=e("”。而有一点要切记，在Unix中一切（包括网络套接口）都是文件。",-1))]),l[36]||(l[36]=s(`<p>有趣的是，lsof也是有着最多开关的Linux/Unix命令之一。它有那么多的开关，它有许多选项支持使用-和+前缀。</p><pre><code>usage: [-?abhlnNoOPRstUvV] [+|-c c] [+|-d s] [+D D] [+|-f[cgG]]
 [-F [f]] [-g [s]] [-i [i]] [+|-L [l]] [+|-M] [-o [o]]
 [-p s] [+|-r [t]] [-S [t]] [-T [t]] [-u s] [+|-w] [-x [fl]] [--] [names]
</code></pre><p>正如你所见，lsof有着实在是令人惊讶的选项数量。你可以使用它来获得你系统上设备的信息，你能通过它了解到指定的用户在指定的地点正在碰什么东西，或者甚至是一个进程正在使用什么文件或网络连接。</p><p>对于我，lsof替代了netstat和ps的全部工作。它可以带来那些工具所能带来的一切，而且要比那些工具多得多。那么，让我们来看看它的一些基本能力吧：</p><h3 id="关键选项" tabindex="-1">关键选项 <a class="header-anchor" href="#关键选项" aria-label="Permalink to “关键选项”">​</a></h3><p>理解一些关于lsof如何工作的关键性东西是很重要的。最重要的是，当你给它传递选项时，<strong>默认行为</strong>是对结果进行“或”运算。因此，如果你正是用-i来拉出一个端口列表，同时又用-p来拉出一个进程列表，那么默认情况下你会获得两者的结果。</p><p>下面的一些其它东西需要牢记：</p><ul><li><strong>默认</strong> : 没有选项，lsof列出活跃进程的所有打开文件</li><li><strong>组合</strong> : 可以将选项组合到一起，如-abc，但要当心哪些选项需要参数</li><li><strong>-a</strong> : 结果进行“与”运算（而不是“或”）</li><li><strong>-l</strong> : 在输出显示用户ID而不是用户名</li><li><strong>-h</strong> : 获得帮助</li><li><strong>-t</strong> : 仅获取进程ID</li><li><strong>-U</strong> : 获取UNIX套接口地址</li><li><strong>-F</strong> : 格式化输出结果，用于其它命令。可以通过多种方式格式化，如-F pcfn（用于进程id、命令名、文件描述符、文件名，并以空终止）</li></ul><h3 id="获取网络信息" tabindex="-1">获取网络信息 <a class="header-anchor" href="#获取网络信息" aria-label="Permalink to “获取网络信息”">​</a></h3><p>正如我所说的，我主要将lsof用于获取关于系统怎么和网络交互的信息。这里提供了关于此信息的一些主题：</p><h4 id="使用-i显示所有连接" tabindex="-1">使用-i显示所有连接 <a class="header-anchor" href="#使用-i显示所有连接" aria-label="Permalink to “使用-i显示所有连接”">​</a></h4><p>有些人喜欢用netstat来获取网络连接，但是我更喜欢使用lsof来进行此项工作。结果以对我来说很直观的方式呈现，我仅仅只需改变我的语法，就可以通过同样的命令来获取更多信息。</p><pre><code># lsof -i

COMMAND  PID USER   FD   TYPE DEVICE SIZE NODE NAME
dhcpcd 6061 root 4u IPv4 4510 UDP *:bootpc
sshd 7703 root 3u IPv6  6499 TCP *:ssh (LISTEN)
sshd 7892 root 3u IPv6  6757 TCP 10.10.1.5:ssh-&gt;192.168.1.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-i-6仅获取ipv6流量" tabindex="-1">使用-i 6仅获取IPv6流量 <a class="header-anchor" href="#使用-i-6仅获取ipv6流量" aria-label="Permalink to “使用-i 6仅获取IPv6流量”">​</a></h4><pre><code># lsof -i 6
</code></pre><h4 id="仅显示tcp连接-同理可获得udp连接" tabindex="-1">仅显示TCP连接（同理可获得UDP连接） <a class="header-anchor" href="#仅显示tcp连接-同理可获得udp连接" aria-label="Permalink to “仅显示TCP连接（同理可获得UDP连接）”">​</a></h4><p>你也可以通过在-i后提供对应的协议来仅仅显示TCP或者UDP连接信息。</p><pre><code># lsof -iTCP

COMMAND  PID USER   FD   TYPE DEVICE SIZE NODE NAME
sshd 7703 root 3u IPv6 6499 TCP *:ssh (LISTEN)
sshd 7892 root 3u IPv6 6757 TCP 10.10.1.5:ssh-&gt;192.168.1.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-i-port来显示与指定端口相关的网络信息" tabindex="-1">使用-i:port来显示与指定端口相关的网络信息 <a class="header-anchor" href="#使用-i-port来显示与指定端口相关的网络信息" aria-label="Permalink to “使用-i:port来显示与指定端口相关的网络信息”">​</a></h4><p>或者，你也可以通过端口搜索，这对于要找出什么阻止了另外一个应用绑定到指定端口实在是太棒了。</p><pre><code># lsof -i :22

COMMAND  PID USER   FD   TYPE DEVICE SIZE NODE NAME
sshd 7703 root 3u  IPv6 6499 TCP *:ssh (LISTEN)
sshd 7892 root 3u  IPv6 6757 TCP 10.10.1.5:ssh-&gt;192.168.1.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-host来显示指定到指定主机的连接" tabindex="-1">使用@host来显示指定到指定主机的连接 <a class="header-anchor" href="#使用-host来显示指定到指定主机的连接" aria-label="Permalink to “使用@host来显示指定到指定主机的连接”">​</a></h4><p>这对于你在检查是否开放连接到网络中或互联网上某个指定主机的连接时十分有用。</p><pre><code># lsof -i@172.16.12.5

sshd 7892 root 3u IPv6 6757 TCP 10.10.1.5:ssh-&gt;172.16.12.5:49901 (ESTABLISHED)
</code></pre><h4 id="使用-host-port显示基于主机与端口的连接" tabindex="-1">使用@host:port显示基于主机与端口的连接 <a class="header-anchor" href="#使用-host-port显示基于主机与端口的连接" aria-label="Permalink to “使用@host:port显示基于主机与端口的连接”">​</a></h4><p>你也可以组合主机与端口的显示信息。</p><pre><code># lsof -i@172.16.12.5:22

sshd 7892 root 3u IPv6 6757 TCP 10.10.1.5:ssh-&gt;172.16.12.5:49901 (ESTABLISHED)
</code></pre><h4 id="找出监听端口" tabindex="-1">找出监听端口 <a class="header-anchor" href="#找出监听端口" aria-label="Permalink to “找出监听端口”">​</a></h4><p>找出正等候连接的端口。</p><pre><code># lsof -i -sTCP:LISTEN
</code></pre><p>你也可以grep “LISTEN”来完成该任务。</p><pre><code># lsof -i | grep -i LISTEN

iTunes     400 daniel   16u  IPv4 0x4575228  0t0 TCP *:daap (LISTEN)
</code></pre><h4 id="找出已建立的连接" tabindex="-1">找出已建立的连接 <a class="header-anchor" href="#找出已建立的连接" aria-label="Permalink to “找出已建立的连接”">​</a></h4><p>你也可以显示任何已经连接的连接。</p><pre><code># lsof -i -sTCP:ESTABLISHED
</code></pre><p>你也可以通过grep搜索“ESTABLISHED”来完成该任务。</p><pre><code># lsof -i | grep -i ESTABLISHED

firefox-b 169 daniel  49u IPv4 0t0 TCP 1.2.3.3:1863-&gt;1.2.3.4:http (ESTABLISHED)
</code></pre><h3 id="用户信息" tabindex="-1">用户信息 <a class="header-anchor" href="#用户信息" aria-label="Permalink to “用户信息”">​</a></h3><p>你也可以获取各种用户的信息，以及它们在系统上正干着的事情，包括它们的网络活动、对文件的操作等。</p><h4 id="使用-u显示指定用户打开了什么" tabindex="-1">使用-u显示指定用户打开了什么 <a class="header-anchor" href="#使用-u显示指定用户打开了什么" aria-label="Permalink to “使用-u显示指定用户打开了什么”">​</a></h4><pre><code># lsof -u daniel

-- snipped --
Dock 155 daniel  txt REG   14,2   2798436   823208 /usr/lib/libicucore.A.dylib
Dock 155 daniel  txt REG   14,2   1580212   823126 /usr/lib/libobjc.A.dylib
Dock 155 daniel  txt REG   14,2   2934184   823498 /usr/lib/libstdc++.6.0.4.dylib
Dock 155 daniel  txt REG   14,2    132008   823505 /usr/lib/libgcc_s.1.dylib
Dock 155 daniel  txt REG   14,2    212160   823214 /usr/lib/libauto.dylib
-- snipped --
</code></pre><h4 id="使用-u-user来显示除指定用户以外的其它所有用户所做的事情" tabindex="-1">使用-u ^user来显示除指定用户以外的其它所有用户所做的事情 <a class="header-anchor" href="#使用-u-user来显示除指定用户以外的其它所有用户所做的事情" aria-label="Permalink to “使用-u ^user来显示除指定用户以外的其它所有用户所做的事情”">​</a></h4><pre><code># lsof -u ^daniel

-- snipped --
Dock 155 jim  txt REG   14,2   2798436   823208 /usr/lib/libicucore.A.dylib
Dock 155 jim  txt REG   14,2   1580212   823126 /usr/lib/libobjc.A.dylib
Dock 155 jim  txt REG   14,2   2934184   823498 /usr/lib/libstdc++.6.0.4.dylib
Dock 155 jim  txt REG   14,2    132008   823505 /usr/lib/libgcc_s.1.dylib
Dock 155 jim  txt REG   14,2    212160   823214 /usr/lib/libauto.dylib
-- snipped --
</code></pre><h4 id="杀死指定用户所做的一切事情" tabindex="-1">杀死指定用户所做的一切事情 <a class="header-anchor" href="#杀死指定用户所做的一切事情" aria-label="Permalink to “杀死指定用户所做的一切事情”">​</a></h4><p>可以消灭指定用户运行的所有东西，这真不错。</p><pre><code># kill -9 \`lsof -t -u daniel\`
</code></pre><h3 id="命令和进程" tabindex="-1">命令和进程 <a class="header-anchor" href="#命令和进程" aria-label="Permalink to “命令和进程”">​</a></h3><p>可以查看指定程序或进程由什么启动，这通常会很有用，而你可以使用lsof通过名称或进程ID过滤来完成这个任务。下面列出了一些选项：</p><h4 id="使用-c查看指定的命令正在使用的文件和网络连接" tabindex="-1">使用-c查看指定的命令正在使用的文件和网络连接 <a class="header-anchor" href="#使用-c查看指定的命令正在使用的文件和网络连接" aria-label="Permalink to “使用-c查看指定的命令正在使用的文件和网络连接”">​</a></h4><pre><code># lsof -c syslog-ng

COMMAND    PID USER   FD   TYPE     DEVICE    SIZE       NODE NAME
syslog-ng 7547 root  cwd    DIR    3,3    4096   2 /
syslog-ng 7547 root  rtd    DIR    3,3    4096   2 /
syslog-ng 7547 root  txt    REG    3,3  113524  1064970 /usr/sbin/syslog-ng
-- snipped --
</code></pre><h4 id="使用-p查看指定进程id已打开的内容" tabindex="-1">使用-p查看指定进程ID已打开的内容 <a class="header-anchor" href="#使用-p查看指定进程id已打开的内容" aria-label="Permalink to “使用-p查看指定进程ID已打开的内容”">​</a></h4><pre><code># lsof -p 10075

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
</code></pre><h4 id="t选项只返回pid" tabindex="-1">-t选项只返回PID <a class="header-anchor" href="#t选项只返回pid" aria-label="Permalink to “-t选项只返回PID”">​</a></h4><pre><code># lsof -t -c Mail

350
</code></pre><h3 id="文件和目录" tabindex="-1">文件和目录 <a class="header-anchor" href="#文件和目录" aria-label="Permalink to “文件和目录”">​</a></h3><p>通过查看指定文件或目录，你可以看到系统上所有正与其交互的资源——包括用户、进程等。</p><h4 id="显示与指定目录交互的所有一切" tabindex="-1">显示与指定目录交互的所有一切 <a class="header-anchor" href="#显示与指定目录交互的所有一切" aria-label="Permalink to “显示与指定目录交互的所有一切”">​</a></h4><pre><code># lsof /var/log/messages/

COMMAND    PID USER   FD   TYPE DEVICE   SIZE   NODE NAME
syslog-ng 7547 root    4w   REG    3,3 217309 834024 /var/log/messages
</code></pre><h3 id="显示与指定文件交互的所有一切" tabindex="-1">显示与指定文件交互的所有一切 <a class="header-anchor" href="#显示与指定文件交互的所有一切" aria-label="Permalink to “显示与指定文件交互的所有一切”">​</a></h3><pre><code># lsof /home/daniel/firewall_whitelist.txt
</code></pre><h3 id="高级用法" tabindex="-1">高级用法 <a class="header-anchor" href="#高级用法" aria-label="Permalink to “高级用法”">​</a></h3>`,61)),o("p",null,[l[9]||(l[9]=e("与",-1)),r(i,{href:"http://danielmiessler.com/study/tcpdump/"},{default:n(()=>[...l[8]||(l[8]=[e("tcpdump",-1)])]),_:1}),l[10]||(l[10]=e("类似，当你开始组合查询时，它就显示了它强大的功能。",-1))]),l[37]||(l[37]=s(`<h4 id="显示daniel连接到1-1-1-1所做的一切" tabindex="-1">显示daniel连接到1.1.1.1所做的一切 <a class="header-anchor" href="#显示daniel连接到1-1-1-1所做的一切" aria-label="Permalink to “显示daniel连接到1.1.1.1所做的一切”">​</a></h4><pre><code># lsof -u daniel -i @1.1.1.1

bkdr   1893 daniel 3u  IPv6 3456 TCP 10.10.1.10:1234-&gt;1.1.1.1:31337 (ESTABLISHED)
</code></pre><h4 id="同时使用-t和-c选项以给进程发送-hup-信号" tabindex="-1">同时使用-t和-c选项以给进程发送 HUP 信号 <a class="header-anchor" href="#同时使用-t和-c选项以给进程发送-hup-信号" aria-label="Permalink to “同时使用-t和-c选项以给进程发送 HUP 信号”">​</a></h4><pre><code># kill -HUP \`lsof -t -c sshd\`
</code></pre><h4 id="lsof-l1显示所有打开的链接数小于1的文件" tabindex="-1">lsof +L1显示所有打开的链接数小于1的文件 <a class="header-anchor" href="#lsof-l1显示所有打开的链接数小于1的文件" aria-label="Permalink to “lsof +L1显示所有打开的链接数小于1的文件”">​</a></h4><p>这通常（当不总是）表示某个攻击者正尝试通过删除文件入口来隐藏文件内容。</p><pre><code># lsof +L1

(hopefully nothing)
</code></pre><h4 id="显示某个端口范围的打开的连接" tabindex="-1">显示某个端口范围的打开的连接 <a class="header-anchor" href="#显示某个端口范围的打开的连接" aria-label="Permalink to “显示某个端口范围的打开的连接”">​</a></h4><pre><code># lsof -i @fw.google.com:2150=2180
</code></pre><h3 id="结尾" tabindex="-1">结尾 <a class="header-anchor" href="#结尾" aria-label="Permalink to “结尾”">​</a></h3>`,10)),o("p",null,[l[13]||(l[13]=e("本入门教程只是管窥了lsof功能的一斑，要查看完整参考，运行man lsof命令或查看",-1)),r(i,{href:"http://www.netadmintools.com/html/lsof.man.html"},{default:n(()=>[...l[11]||(l[11]=[e("在线版本",-1)])]),_:1}),l[14]||(l[14]=e("。希望本文对你有所助益，也随时",-1)),r(i,{href:"http://danielmiessler.com/connect/"},{default:n(()=>[...l[12]||(l[12]=[e("欢迎你的评论和指正",-1)])]),_:1}),l[15]||(l[15]=e("。",-1))]),l[38]||(l[38]=o("h3",{id:"资源",tabindex:"-1"},[e("资源 "),o("a",{class:"header-anchor",href:"#资源","aria-label":"Permalink to “资源”"},"​")],-1)),o("ul",null,[o("li",null,[l[17]||(l[17]=e("lsof手册页：",-1)),r(i,{href:"http://www.netadmintools.com/html/lsof.man.html"},{default:n(()=>[...l[16]||(l[16]=[e("http://www.netadmintools.com/html/lsof.man.html",-1)])]),_:1})])]),o("p",null,[l[19]||(l[19]=e("本文由 Daniel Miessler撰写，首次在他",-1)),r(i,{href:"http://danielmiessler.com/study/lsof/"},{default:n(()=>[...l[18]||(l[18]=[e("博客",-1)])]),_:1}),l[20]||(l[20]=e("上贴出",-1))]),l[39]||(l[39]=o("hr",null,null,-1)),o("p",null,[l[22]||(l[22]=e("via: ",-1)),r(i,{href:"http://linuxaria.com/howto/linux-terminal-an-lsof-primer"},{default:n(()=>[...l[21]||(l[21]=[e("http://linuxaria.com/howto/linux-terminal-an-lsof-primer",-1)])]),_:1})]),o("p",null,[l[26]||(l[26]=e("作者：",-1)),r(i,{href:"https://plus.google.com/101727609700016666852/posts?rel=author"},{default:n(()=>[...l[23]||(l[23]=[e("Daniel Miessler",-1)])]),_:1}),l[27]||(l[27]=e(" 译者：",-1)),r(i,{href:"https://github.com/GOLinux"},{default:n(()=>[...l[24]||(l[24]=[e("GOLinux",-1)])]),_:1}),l[28]||(l[28]=e(" 校对：",-1)),r(i,{href:"https://github.com/wxy"},{default:n(()=>[...l[25]||(l[25]=[e("wxy",-1)])]),_:1})]),o("p",null,[l[31]||(l[31]=e("本文由 ",-1)),r(i,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...l[29]||(l[29]=[e("LCTT",-1)])]),_:1}),l[32]||(l[32]=e(" 原创翻译，",-1)),r(i,{href:"http://linux.cn/"},{default:n(()=>[...l[30]||(l[30]=[e("Linux中国",-1)])]),_:1}),l[33]||(l[33]=e(" 荣誉推出",-1))])])}const D=a(h,[["render",f]]);export{g as __pageData,D as default};
