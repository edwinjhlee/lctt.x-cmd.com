import{_ as r,a0 as p,w as d,s as i,ao as l,I as s,x as e,a1 as a,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"netstat 的10個基本用法 | LCTT x X-CMD","titleTemplate":false,"description":"netstat 的10個基本用法 | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"netstat 的10個基本用法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"netstat 的10個基本用法 | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/10 basic examples of linux netstat command","title":"netstat 的10個基本用法","tag":"201401","desc":""},"relativePath":"201401/10 basic examples of linux netstat command.md","filePath":"[post].md"}'),c={name:"201401/10 basic examples of linux netstat command.md"};function h(u,t,g,m,f,T){const n=p("Link");return d(),i("div",null,[t[11]||(t[11]=l(`<h1 id="netstat-的10個基本用法" tabindex="-1">netstat 的10個基本用法 <a class="header-anchor" href="#netstat-的10個基本用法" aria-label="Permalink to “netstat 的10個基本用法”">​</a></h1><h3 id="netstat-簡介" tabindex="-1">Netstat 簡介 <a class="header-anchor" href="#netstat-簡介" aria-label="Permalink to “Netstat 簡介”">​</a></h3><p>Netstat 是一款命令列工具，可用於列出系統上所有的網絡套接字連接情況，包括 tcp, udp 以及 unix 套接字，另外它還能列出處於監聽狀態（即等待接入請求）的套接字。如果你想確認系統上的 Web 服務有沒有起來，你可以查看80端口有沒有打開。以上功能使 netstat 成為網管和系統管理員的必備利器。在這篇教程中，我會列出幾個例子，教大家如何使用 netstat 去查找網絡連接信息和系統開啓的端口號。</p><p>以下的簡單介紹來自 netstat 的 man 手冊：</p><blockquote><p>netstat - 打印網絡連接、路由表、連接的數據統計、偽裝連接以及廣播域成員。</p></blockquote><h3 id="_1-列出所有連接" tabindex="-1">1. 列出所有連接 <a class="header-anchor" href="#_1-列出所有連接" aria-label="Permalink to “1. 列出所有連接”">​</a></h3><p>第一個要介紹的，是最簡單的命令：列出所有當前的連接。使用 -a 選項即可。</p><pre><code>$ netstat -a

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
</code></pre><p>上述命令列出 tcp, udp 和 unix 協議下所有套接字的所有連接。然而這些信息還不夠詳細，管理員往往需要查看某個協議或端口的具體連接情況。</p><h3 id="_2-只列出-tcp-或-udp-協議的連接" tabindex="-1">2. 只列出 TCP 或 UDP 協議的連接 <a class="header-anchor" href="#_2-只列出-tcp-或-udp-協議的連接" aria-label="Permalink to “2. 只列出 TCP 或 UDP 協議的連接”">​</a></h3><p>使用 <strong>-t</strong> 選項列出 TCP 協議的連接：</p><pre><code>$ netstat -at
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 enlightened:domain      *:*                     LISTEN     
tcp        0      0 localhost:ipp           *:*                     LISTEN     
tcp        0      0 enlightened.local:36310 del01s07-in-f24.1:https ESTABLISHED
tcp        0      0 enlightened.local:45038 a96-17-181-10.depl:http ESTABLISHED
tcp        0      0 enlightened.local:37892 ABTS-North-Static-:http ESTABLISHED
.....
</code></pre><p>使用 <strong>-u</strong> 選項列出 UDP 協議的連接：</p><pre><code>$ netstat -au
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
</code></pre><p>上面同時顯示了 IPv4 和 IPv6 的連接。</p><h3 id="_3-禁用反向域名解析-加快查詢速度" tabindex="-1">3. 禁用反向域名解析，加快查詢速度 <a class="header-anchor" href="#_3-禁用反向域名解析-加快查詢速度" aria-label="Permalink to “3. 禁用反向域名解析，加快查詢速度”">​</a></h3><p>默認情況下 netstat 會通過反向域名解析技術查找每個 IP 地址對應的主機名。這會降低查找速度。如果你覺得 IP 地址已經足夠，而沒有必要知道主機名，就使用 <strong>-n</strong> 選項禁用域名解析功能。</p><pre><code>$ netstat -ant
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN     
tcp        0      0 192.168.1.2:49058       173.255.230.5:80        ESTABLISHED
tcp        0      0 192.168.1.2:33324       173.194.36.117:443      ESTABLISHED
tcp6       0      0 ::1:631                 :::*                    LISTEN
</code></pre><p>上述命令列出所有 TCP 協議的連接，沒有使用域名解析技術。So easy ? 非常好。</p><h3 id="_4-只列出監聽中的連接" tabindex="-1">4. 只列出監聽中的連接 <a class="header-anchor" href="#_4-只列出監聽中的連接" aria-label="Permalink to “4. 只列出監聽中的連接”">​</a></h3><p>任何網絡服務的後台進程都會打開一個端口，用於監聽接入的請求。這些正在監聽的套接字也和連接的套接字一樣，也能被 netstat 列出來。使用 <strong>-l</strong> 選項列出正在監聽的套接字。</p><pre><code>$ netstat -tnl
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN     
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN     
tcp6       0      0 ::1:631                 :::*                    LISTEN
</code></pre><p>現在我們可以看到處於監聽狀態的 TCP 端口和連接。如果你查看所有監聽端口，去掉 <strong>-t</strong> 選項。如果你只想查看 UDP 端口，使用 <strong>-u</strong> 選項，代替 <strong>-t</strong> 選項。</p><p>注意：不要使用 <strong>-a</strong> 選項，否則 netstat 會列出所有連接，而不僅僅是監聽端口。</p><h3 id="_5-獲取進程名、進程號以及用户-id" tabindex="-1">5. 獲取進程名、進程號以及用户 ID <a class="header-anchor" href="#_5-獲取進程名、進程號以及用户-id" aria-label="Permalink to “5. 獲取進程名、進程號以及用户 ID”">​</a></h3><p>查看端口和連接的信息時，能查看到它們對應的進程名和進程號對系統管理員來説是非常有幫助的。舉個栗子，Apache 的 httpd 服務開啓80端口，如果你要查看 http 服務是否已經啓動，或者 http 服務是由 apache 還是 nginx 啓動的，這時候你可以看看進程名。</p><p>使用 <strong>-p</strong> 選項查看進程信息。</p><pre><code>~$ sudo netstat -nlpt
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.1.1:53            0.0.0.0:*               LISTEN      1144/dnsmasq    
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN      661/cupsd       
tcp6       0      0 ::1:631                 :::*                    LISTEN      661/cupsd
</code></pre><p>使用 <strong>-p</strong> 選項時，netstat 必須運行在 root 權限之下，不然它就不能得到運行在 root 權限下的進程名，而很多服務包括 http 和 ftp 都運行在 root 權限之下。</p><p>相比進程名和進程號而言，查看進程的擁有者會更有用。使用 <strong>-ep</strong> 選項可以同時查看進程名和用户名。</p><pre><code>$ sudo netstat -ltpe
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       User       Inode       PID/Program name
tcp        0      0 enlightened:domain      *:*                     LISTEN      root       11090       1144/dnsmasq    
tcp        0      0 localhost:ipp           *:*                     LISTEN      root       9755        661/cupsd       
tcp6       0      0 ip6-localhost:ipp       [::]:*                  LISTEN      root       9754        661/cupsd
</code></pre><p>上面列出 TCP 協議下的監聽套接字，同時顯示進程信息和一些額外信息。</p><p>這些額外的信息包括用户名和進程的索引節點號。這個命令對網管來説很有用。</p><p><strong>注意</strong> - 假如你將 <strong>-n</strong> 和 <strong>-e</strong> 選項一起使用，User 列的屬性就是用户的 ID 號，而不是用户名。</p><h3 id="_6-打印統計數據" tabindex="-1">6. 打印統計數據 <a class="header-anchor" href="#_6-打印統計數據" aria-label="Permalink to “6. 打印統計數據”">​</a></h3><p>netstat 可以打印出網絡統計數據，包括某個協議下的收發包數量。</p><p>下面列出所有網絡包的統計情況：</p><pre><code>$ netstat -s
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
</code></pre><p>如果想只打印出 TCP 或 UDP 協議的統計數據，只要加上對應的選項（<strong>-t</strong> 和 <strong>-u</strong>）即可，so easy。</p><h3 id="_7-顯示內核路由信息" tabindex="-1">7. 顯示內核路由信息 <a class="header-anchor" href="#_7-顯示內核路由信息" aria-label="Permalink to “7. 顯示內核路由信息”">​</a></h3><p>使用 <strong>-r</strong> 選項打印內核路由信息。打印出來的信息與 route 命令輸出的信息一樣。我們也可以使用 <strong>-n</strong> 選項禁止域名解析。</p><pre><code>$ netstat -rn
Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 eth0
192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0
</code></pre><h3 id="_8-打印網絡接口" tabindex="-1">8. 打印網絡接口 <a class="header-anchor" href="#_8-打印網絡接口" aria-label="Permalink to “8. 打印網絡接口”">​</a></h3><p>netstat 也能打印網絡接口信息，<strong>-i</strong> 選項就是為這個功能而生。</p><pre><code>$ netstat -i
Kernel Interface table
Iface   MTU Met   RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0       1500 0     31611      0      0 0         27503      0      0      0 BMRU
lo        65536 0      2913      0      0 0          2913      0      0      0 LRU
</code></pre><p>上面輸出的信息比較原始。我們將 <strong>-e</strong> 選項和 <strong>-i</strong> 選項搭配使用，可以輸出用户友好的信息。</p><pre><code>$ netstat -ie
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
</code></pre><p>上面的輸出信息與 ifconfig 輸出的信息一樣。</p><h3 id="_9-netstat-持續輸出" tabindex="-1">9. netstat 持續輸出 <a class="header-anchor" href="#_9-netstat-持續輸出" aria-label="Permalink to “9. netstat 持續輸出”">​</a></h3><p>我們可以使用 netstat 的 <strong>-c</strong> 選項持續輸出信息。</p><pre><code>$ netstat -ct
</code></pre><p>這個命令可持續輸出 TCP 協議信息。</p><h3 id="_10-顯示多播組信息" tabindex="-1">10. 顯示多播組信息 <a class="header-anchor" href="#_10-顯示多播組信息" aria-label="Permalink to “10. 顯示多播組信息”">​</a></h3><p>選項 <strong>-g</strong> 會輸出 IPv4 和 IPv6 的多播組信息。</p><pre><code>$ netstat -g
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
</code></pre><h3 id="更多用法" tabindex="-1">更多用法 <a class="header-anchor" href="#更多用法" aria-label="Permalink to “更多用法”">​</a></h3><p>目前為止我們列出了 netstat 的基本用法，現在讓我們一起來 geek 吧～</p><h3 id="打印-active-狀態的連接" tabindex="-1">打印 active 狀態的連接 <a class="header-anchor" href="#打印-active-狀態的連接" aria-label="Permalink to “打印 active 狀態的連接”">​</a></h3><p>active 狀態的套接字連接用 &quot;ESTABLISHED&quot; 字段表示，所以我們可以使用 grep 命令獲得 active 狀態的連接：</p><pre><code>$ netstat -atnp | grep ESTA
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 192.168.1.2:49156       173.255.230.5:80        ESTABLISHED 1691/chrome     
tcp        0      0 192.168.1.2:33324       173.194.36.117:443      ESTABLISHED 1691/chrome
</code></pre><p>配合 watch 命令監視 active 狀態的連接：</p><pre><code>$ watch -d -n0 &quot;netstat -atnp | grep ESTA&quot;
</code></pre><h3 id="查看服務是否在運行" tabindex="-1">查看服務是否在運行 <a class="header-anchor" href="#查看服務是否在運行" aria-label="Permalink to “查看服務是否在運行”">​</a></h3><p>如果你想看看 http,smtp 或 ntp 服務是否在運行，使用 grep。</p><pre><code>$ sudo netstat -aple | grep ntp
udp        0      0 enlightened.local:ntp   *:*                                 root       17430       1789/ntpd       
udp        0      0 localhost:ntp           *:*                                 root       17429       1789/ntpd       
udp        0      0 *:ntp                   *:*                                 root       17422       1789/ntpd       
udp6       0      0 fe80::216:36ff:fef8:ntp [::]:*                              root       17432       1789/ntpd       
udp6       0      0 ip6-localhost:ntp       [::]:*                              root       17431       1789/ntpd       
udp6       0      0 [::]:ntp                [::]:*                              root       17423       1789/ntpd       
unix  2      [ ]         DGRAM                    17418    1789/ntpd
</code></pre><p>從這裏可以看到 ntp 服務正在運行。使用 grep 命令你可以查看 http 或 smtp 或其它任何你想查看的服務。</p><p>好了，netstat 的大部分功能都介紹過了，如果你想知道 netstat 更高級的功能，閲讀它的手冊吧（man netstat）。</p><p>歡迎在下面留下你的反饋和建議。</p><hr>`,69)),s("p",null,[t[1]||(t[1]=e("via: ",-1)),a(n,{href:"http://www.binarytides.com/linux-netstat-command-examples/"},{default:o(()=>[...t[0]||(t[0]=[e("http://www.binarytides.com/linux-netstat-command-examples/",-1)])]),_:1})]),s("p",null,[t[4]||(t[4]=e("譯者：",-1)),a(n,{href:"https://github.com/bazz2"},{default:o(()=>[...t[2]||(t[2]=[e("bazz2",-1)])]),_:1}),t[5]||(t[5]=e(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:o(()=>[...t[3]||(t[3]=[e("wxy",-1)])]),_:1})]),s("p",null,[t[8]||(t[8]=e("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[6]||(t[6]=[e("LCTT",-1)])]),_:1}),t[9]||(t[9]=e(" 原創翻譯，",-1)),a(n,{href:"http://linux.cn/"},{default:o(()=>[...t[7]||(t[7]=[e("Linux中國",-1)])]),_:1}),t[10]||(t[10]=e(" 榮譽推出",-1))])])}const P=r(c,[["render",h]]);export{S as __pageData,P as default};
