import{_ as r,a0 as p,w as d,s as i,ao as l,I as s,x as e,a1 as a,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"netstat 的10个基本用法 | LCTT x X-CMD","titleTemplate":false,"description":"netstat 的10个基本用法 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"netstat 的10个基本用法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"netstat 的10个基本用法 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/10 basic examples of linux netstat command","title":"netstat 的10个基本用法","tag":"201401","desc":""},"relativePath":"201401/10 basic examples of linux netstat command.md","filePath":"[post].md"}'),c={name:"201401/10 basic examples of linux netstat command.md"};function h(u,t,g,m,f,T){const n=p("Link");return d(),i("div",null,[t[11]||(t[11]=l(`<h1 id="netstat-的10个基本用法" tabindex="-1">netstat 的10个基本用法 <a class="header-anchor" href="#netstat-的10个基本用法" aria-label="Permalink to “netstat 的10个基本用法”">​</a></h1><h3 id="netstat-简介" tabindex="-1">Netstat 简介 <a class="header-anchor" href="#netstat-简介" aria-label="Permalink to “Netstat 简介”">​</a></h3><p>Netstat 是一款命令行工具，可用于列出系统上所有的网络套接字连接情况，包括 tcp, udp 以及 unix 套接字，另外它还能列出处于监听状态（即等待接入请求）的套接字。如果你想确认系统上的 Web 服务有没有起来，你可以查看80端口有没有打开。以上功能使 netstat 成为网管和系统管理员的必备利器。在这篇教程中，我会列出几个例子，教大家如何使用 netstat 去查找网络连接信息和系统开启的端口号。</p><p>以下的简单介绍来自 netstat 的 man 手册：</p><blockquote><p>netstat - 打印网络连接、路由表、连接的数据统计、伪装连接以及广播域成员。</p></blockquote><h3 id="_1-列出所有连接" tabindex="-1">1. 列出所有连接 <a class="header-anchor" href="#_1-列出所有连接" aria-label="Permalink to “1. 列出所有连接”">​</a></h3><p>第一个要介绍的，是最简单的命令：列出所有当前的连接。使用 -a 选项即可。</p><pre><code>$ netstat -a

Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 enlightened:domain      *:*                     LISTEN     
tcp        0      0 localhost:ipp           *:*                     LISTEN     
tcp        0      0 enlightened.local:54750 li240-5.members.li:http ESTABLISHED
tcp        0      0 enlightened.local:49980 del01s07-in-f14.1:https ESTABLISHED
tcp6       0      0 ip6-localhost:ipp       [::]:*                  LISTEN     
udp        0      0 enlightened:domain      *:*                                
udp        0      0 *:bootpc                *:*                                
udp        0      0 enlightened.local:ntp   *:*                                
udp        0      0 localhost:ntp           *:*                                
udp        0      0 *:ntp                   *:*                                
udp        0      0 *:58570                 *:*                                
udp        0      0 *:mdns                  *:*                                
udp        0      0 *:49459                 *:*                                
udp6       0      0 fe80::216:36ff:fef8:ntp [::]:*                             
udp6       0      0 ip6-localhost:ntp       [::]:*                             
udp6       0      0 [::]:ntp                [::]:*                             
udp6       0      0 [::]:mdns               [::]:*                             
udp6       0      0 [::]:63811              [::]:*                             
udp6       0      0 [::]:54952              [::]:*                             
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   Path
unix  2      [ ACC ]     STREAM     LISTENING     12403    @/tmp/dbus-IDgfj3UGXX
unix  2      [ ACC ]     STREAM     LISTENING     40202    @/dbus-vfs-daemon/socket-6nUC6CCx
</code></pre><p>上述命令列出 tcp, udp 和 unix 协议下所有套接字的所有连接。然而这些信息还不够详细，管理员往往需要查看某个协议或端口的具体连接情况。</p><h3 id="_2-只列出-tcp-或-udp-协议的连接" tabindex="-1">2. 只列出 TCP 或 UDP 协议的连接 <a class="header-anchor" href="#_2-只列出-tcp-或-udp-协议的连接" aria-label="Permalink to “2. 只列出 TCP 或 UDP 协议的连接”">​</a></h3><p>使用 <strong>-t</strong> 选项列出 TCP 协议的连接：</p><pre><code>$ netstat -at
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 enlightened:domain      *:*                     LISTEN     
tcp        0      0 localhost:ipp           *:*                     LISTEN     
tcp        0      0 enlightened.local:36310 del01s07-in-f24.1:https ESTABLISHED
tcp        0      0 enlightened.local:45038 a96-17-181-10.depl:http ESTABLISHED
tcp        0      0 enlightened.local:37892 ABTS-North-Static-:http ESTABLISHED
.....
</code></pre><p>使用 <strong>-u</strong> 选项列出 UDP 协议的连接：</p><pre><code>$ netstat -au
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
udp        0      0 *:34660                 *:*                                
udp        0      0 enlightened:domain      *:*                                
udp        0      0 *:bootpc                *:*                                
udp        0      0 enlightened.local:ntp   *:*                                
udp        0      0 localhost:ntp           *:*                                
udp        0      0 *:ntp                   *:*                                
udp6       0      0 fe80::216:36ff:fef8:ntp [::]:*                             
udp6       0      0 ip6-localhost:ntp       [::]:*                             
udp6       0      0 [::]:ntp                [::]:*
</code></pre><p>上面同时显示了 IPv4 和 IPv6 的连接。</p><h3 id="_3-禁用反向域名解析-加快查询速度" tabindex="-1">3. 禁用反向域名解析，加快查询速度 <a class="header-anchor" href="#_3-禁用反向域名解析-加快查询速度" aria-label="Permalink to “3. 禁用反向域名解析，加快查询速度”">​</a></h3><p>默认情况下 netstat 会通过反向域名解析技术查找每个 IP 地址对应的主机名。这会降低查找速度。如果你觉得 IP 地址已经足够，而没有必要知道主机名，就使用 <strong>-n</strong> 选项禁用域名解析功能。</p><pre><code>$ netstat -ant
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN     
tcp        0      0 192.168.1.2:49058       173.255.230.5:80        ESTABLISHED
tcp        0      0 192.168.1.2:33324       173.194.36.117:443      ESTABLISHED
tcp6       0      0 ::1:631                 :::*                    LISTEN
</code></pre><p>上述命令列出所有 TCP 协议的连接，没有使用域名解析技术。So easy ? 非常好。</p><h3 id="_4-只列出监听中的连接" tabindex="-1">4. 只列出监听中的连接 <a class="header-anchor" href="#_4-只列出监听中的连接" aria-label="Permalink to “4. 只列出监听中的连接”">​</a></h3><p>任何网络服务的后台进程都会打开一个端口，用于监听接入的请求。这些正在监听的套接字也和连接的套接字一样，也能被 netstat 列出来。使用 <strong>-l</strong> 选项列出正在监听的套接字。</p><pre><code>$ netstat -tnl
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN     
tcp6       0      0 ::1:631                 :::*                    LISTEN
</code></pre><p>现在我们可以看到处于监听状态的 TCP 端口和连接。如果你查看所有监听端口，去掉 <strong>-t</strong> 选项。如果你只想查看 UDP 端口，使用 <strong>-u</strong> 选项，代替 <strong>-t</strong> 选项。</p><p>注意：不要使用 <strong>-a</strong> 选项，否则 netstat 会列出所有连接，而不仅仅是监听端口。</p><h3 id="_5-获取进程名、进程号以及用户-id" tabindex="-1">5. 获取进程名、进程号以及用户 ID <a class="header-anchor" href="#_5-获取进程名、进程号以及用户-id" aria-label="Permalink to “5. 获取进程名、进程号以及用户 ID”">​</a></h3><p>查看端口和连接的信息时，能查看到它们对应的进程名和进程号对系统管理员来说是非常有帮助的。举个栗子，Apache 的 httpd 服务开启80端口，如果你要查看 http 服务是否已经启动，或者 http 服务是由 apache 还是 nginx 启动的，这时候你可以看看进程名。</p><p>使用 <strong>-p</strong> 选项查看进程信息。</p><pre><code>~$ sudo netstat -nlpt
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN      1144/dnsmasq    
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      661/cupsd       
tcp6       0      0 ::1:631                 :::*                    LISTEN      661/cupsd
</code></pre><p>使用 <strong>-p</strong> 选项时，netstat 必须运行在 root 权限之下，不然它就不能得到运行在 root 权限下的进程名，而很多服务包括 http 和 ftp 都运行在 root 权限之下。</p><p>相比进程名和进程号而言，查看进程的拥有者会更有用。使用 <strong>-ep</strong> 选项可以同时查看进程名和用户名。</p><pre><code>$ sudo netstat -ltpe
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       User       Inode       PID/Program name
tcp        0      0 enlightened:domain      *:*                     LISTEN      root       11090       1144/dnsmasq    
tcp        0      0 localhost:ipp           *:*                     LISTEN      root       9755        661/cupsd       
tcp6       0      0 ip6-localhost:ipp       [::]:*                  LISTEN      root       9754        661/cupsd
</code></pre><p>上面列出 TCP 协议下的监听套接字，同时显示进程信息和一些额外信息。</p><p>这些额外的信息包括用户名和进程的索引节点号。这个命令对网管来说很有用。</p><p><strong>注意</strong> - 假如你将 <strong>-n</strong> 和 <strong>-e</strong> 选项一起使用，User 列的属性就是用户的 ID 号，而不是用户名。</p><h3 id="_6-打印统计数据" tabindex="-1">6. 打印统计数据 <a class="header-anchor" href="#_6-打印统计数据" aria-label="Permalink to “6. 打印统计数据”">​</a></h3><p>netstat 可以打印出网络统计数据，包括某个协议下的收发包数量。</p><p>下面列出所有网络包的统计情况：</p><pre><code>$ netstat -s
Ip:
    32797 total packets received
    0 forwarded
    0 incoming packets discarded
    32795 incoming packets delivered
    29115 requests sent out
    60 outgoing packets dropped
Icmp:
    125 ICMP messages received
    0 input ICMP message failed.
    ICMP input histogram:
        destination unreachable: 125
    125 ICMP messages sent
    0 ICMP messages failed
    ICMP output histogram:
        destination unreachable: 125
... OUTPUT TRUNCATED ...
</code></pre><p>如果想只打印出 TCP 或 UDP 协议的统计数据，只要加上对应的选项（<strong>-t</strong> 和 <strong>-u</strong>）即可，so easy。</p><h3 id="_7-显示内核路由信息" tabindex="-1">7. 显示内核路由信息 <a class="header-anchor" href="#_7-显示内核路由信息" aria-label="Permalink to “7. 显示内核路由信息”">​</a></h3><p>使用 <strong>-r</strong> 选项打印内核路由信息。打印出来的信息与 route 命令输出的信息一样。我们也可以使用 <strong>-n</strong> 选项禁止域名解析。</p><pre><code>$ netstat -rn
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0
</code></pre><h3 id="_8-打印网络接口" tabindex="-1">8. 打印网络接口 <a class="header-anchor" href="#_8-打印网络接口" aria-label="Permalink to “8. 打印网络接口”">​</a></h3><p>netstat 也能打印网络接口信息，<strong>-i</strong> 选项就是为这个功能而生。</p><pre><code>$ netstat -i
Kernel Interface table
Iface   MTU Met   RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0       1500 0     31611      0      0 0         27503      0      0      0 BMRU
lo        65536 0      2913      0      0 0          2913      0      0      0 LRU
</code></pre><p>上面输出的信息比较原始。我们将 <strong>-e</strong> 选项和 <strong>-i</strong> 选项搭配使用，可以输出用户友好的信息。</p><pre><code>$ netstat -ie
Kernel Interface table
eth0      Link encap:Ethernet  HWaddr 00:16:36:f8:b2:64  
          inet addr:192.168.1.2  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::216:36ff:fef8:b264/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:31682 errors:0 dropped:0 overruns:0 frame:0
          TX packets:27573 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:29637117 (29.6 MB)  TX bytes:4590583 (4.5 MB)
          Interrupt:18 Memory:da000000-da020000 

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:2921 errors:0 dropped:0 overruns:0 frame:0
          TX packets:2921 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:305297 (305.2 KB)  TX bytes:305297 (305.2 KB)
</code></pre><p>上面的输出信息与 ifconfig 输出的信息一样。</p><h3 id="_9-netstat-持续输出" tabindex="-1">9. netstat 持续输出 <a class="header-anchor" href="#_9-netstat-持续输出" aria-label="Permalink to “9. netstat 持续输出”">​</a></h3><p>我们可以使用 netstat 的 <strong>-c</strong> 选项持续输出信息。</p><pre><code>$ netstat -ct
</code></pre><p>这个命令可持续输出 TCP 协议信息。</p><h3 id="_10-显示多播组信息" tabindex="-1">10. 显示多播组信息 <a class="header-anchor" href="#_10-显示多播组信息" aria-label="Permalink to “10. 显示多播组信息”">​</a></h3><p>选项 <strong>-g</strong> 会输出 IPv4 和 IPv6 的多播组信息。</p><pre><code>$ netstat -g
IPv6/IPv4 Group Memberships
Interface       RefCnt Group
--------------- ------ ---------------------
lo              1      all-systems.mcast.net
eth0            1      224.0.0.251
eth0            1      all-systems.mcast.net
lo              1      ip6-allnodes
lo              1      ff01::1
eth0            1      ff02::fb
eth0            1      ff02::1:fff8:b264
eth0            1      ip6-allnodes
eth0            1      ff01::1
wlan0           1      ip6-allnodes
wlan0           1      ff01::1
</code></pre><h3 id="更多用法" tabindex="-1">更多用法 <a class="header-anchor" href="#更多用法" aria-label="Permalink to “更多用法”">​</a></h3><p>目前为止我们列出了 netstat 的基本用法，现在让我们一起来 geek 吧～</p><h3 id="打印-active-状态的连接" tabindex="-1">打印 active 状态的连接 <a class="header-anchor" href="#打印-active-状态的连接" aria-label="Permalink to “打印 active 状态的连接”">​</a></h3><p>active 状态的套接字连接用 &quot;ESTABLISHED&quot; 字段表示，所以我们可以使用 grep 命令获得 active 状态的连接：</p><pre><code>$ netstat -atnp | grep ESTA
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 192.168.1.2:49156       173.255.230.5:80        ESTABLISHED 1691/chrome     
tcp        0      0 192.168.1.2:33324       173.194.36.117:443      ESTABLISHED 1691/chrome
</code></pre><p>配合 watch 命令监视 active 状态的连接：</p><pre><code>$ watch -d -n0 &quot;netstat -atnp | grep ESTA&quot;
</code></pre><h3 id="查看服务是否在运行" tabindex="-1">查看服务是否在运行 <a class="header-anchor" href="#查看服务是否在运行" aria-label="Permalink to “查看服务是否在运行”">​</a></h3><p>如果你想看看 http,smtp 或 ntp 服务是否在运行，使用 grep。</p><pre><code>$ sudo netstat -aple | grep ntp
udp        0      0 enlightened.local:ntp   *:*                                 root       17430       1789/ntpd       
udp        0      0 localhost:ntp           *:*                                 root       17429       1789/ntpd       
udp        0      0 *:ntp                   *:*                                 root       17422       1789/ntpd       
udp6       0      0 fe80::216:36ff:fef8:ntp [::]:*                              root       17432       1789/ntpd       
udp6       0      0 ip6-localhost:ntp       [::]:*                              root       17431       1789/ntpd       
udp6       0      0 [::]:ntp                [::]:*                              root       17423       1789/ntpd       
unix  2      [ ]         DGRAM                    17418    1789/ntpd
</code></pre><p>从这里可以看到 ntp 服务正在运行。使用 grep 命令你可以查看 http 或 smtp 或其它任何你想查看的服务。</p><p>好了，netstat 的大部分功能都介绍过了，如果你想知道 netstat 更高级的功能，阅读它的手册吧（man netstat）。</p><p>欢迎在下面留下你的反馈和建议。</p><hr>`,69)),s("p",null,[t[1]||(t[1]=e("via: ",-1)),a(n,{href:"http://www.binarytides.com/linux-netstat-command-examples/"},{default:o(()=>[...t[0]||(t[0]=[e("http://www.binarytides.com/linux-netstat-command-examples/",-1)])]),_:1})]),s("p",null,[t[4]||(t[4]=e("译者：",-1)),a(n,{href:"https://github.com/bazz2"},{default:o(()=>[...t[2]||(t[2]=[e("bazz2",-1)])]),_:1}),t[5]||(t[5]=e(" 校对：",-1)),a(n,{href:"https://github.com/wxy"},{default:o(()=>[...t[3]||(t[3]=[e("wxy",-1)])]),_:1})]),s("p",null,[t[8]||(t[8]=e("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[6]||(t[6]=[e("LCTT",-1)])]),_:1}),t[9]||(t[9]=e(" 原创翻译，",-1)),a(n,{href:"http://linux.cn/"},{default:o(()=>[...t[7]||(t[7]=[e("Linux中国",-1)])]),_:1}),t[10]||(t[10]=e(" 荣誉推出",-1))])])}const P=r(c,[["render",h]]);export{S as __pageData,P as default};
