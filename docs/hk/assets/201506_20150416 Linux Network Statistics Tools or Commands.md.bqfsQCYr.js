import{_ as i,a0 as p,w as c,s as d,ao as a,I as n,x as t,a1 as r,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const D=JSON.parse('{"title":"Linux網絡統計工具/命令 | LCTT x X-CMD","titleTemplate":false,"description":"Linux網絡統計工具/命令 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux網絡統計工具/命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux網絡統計工具/命令 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150416 Linux Network Statistics Tools or Commands","title":"Linux網絡統計工具/命令","tag":"201506","desc":""},"relativePath":"201506/20150416 Linux Network Statistics Tools or Commands.md","filePath":"[post].md"}'),l={name:"201506/20150416 Linux Network Statistics Tools or Commands.md"};function T(u,e,f,C,m,k){const s=p("Link");return c(),d("div",null,[e[22]||(e[22]=a(`<h1 id="linux網絡統計工具-命令" tabindex="-1">Linux網絡統計工具/命令 <a class="header-anchor" href="#linux網絡統計工具-命令" aria-label="Permalink to “Linux網絡統計工具/命令”">​</a></h1><p>我在Linux(基於CentOS 或者 Debian 的發行版)中該如何查看當前網絡端口吞吐量的統計信息？在Linux操作系統中如何查看當前內核snmp計數器以及網絡端口的統計信息？</p><p><img src="http://s0.cyberciti.org/images/category/old/networking.png" alt=""></p><p>你可以使用以下任何一個命令：</p><h3 id="nstat-命令-網絡統計工具" tabindex="-1">nstat 命令 : 網絡統計工具 <a class="header-anchor" href="#nstat-命令-網絡統計工具" aria-label="Permalink to “nstat 命令 : 網絡統計工具”">​</a></h3><p>鍵入以下命令:</p><pre><code># nstat
</code></pre><p>輸出樣例:</p><pre><code>#kernel
IpInReceives                    133243             0.0
IpInDelivers                    133243             0.0
IpOutRequests                   92904              0.0
IcmpOutErrors                   97                 0.0
IcmpOutTimeExcds                97                 0.0
IcmpMsgOutType3                 97                 0.0
TcpActiveOpens                  538                0.0
TcpEstabResets                  56                 0.0
TcpInSegs                       129837             0.0
TcpOutSegs                      89720              0.0
TcpRetransSegs                  42                 0.0
TcpOutRsts                      704                0.0
UdpInDatagrams                  3255               0.0
UdpNoPorts                      97                 0.0
UdpOutDatagrams                 3270               0.0
Ip6OutNoRoutes                  206                0.0
TcpExtTW                        141                0.0
TcpExtDelayedACKs               508                0.0
TcpExtDelayedACKLocked          1                  0.0
TcpExtDelayedACKLost            42                 0.0
TcpExtTCPHPHits                 117659             0.0
TcpExtTCPPureAcks               2158               0.0
TcpExtTCPHPAcks                 605                0.0
TcpExtTCPSackRecovery           1                  0.0
TcpExtTCPLossUndo               16                 0.0
TcpExtTCPSackFailures           4                  0.0
TcpExtTCPFastRetrans            1                  0.0
TcpExtTCPSlowStartRetrans       3                  0.0
TcpExtTCPTimeouts               33                 0.0
TcpExtTCPDSACKOldSent           40                 0.0
TcpExtTCPDSACKRecv              5                  0.0
TcpExtTCPAbortOnData            120                0.0
TcpExtTCPAbortOnClose           55                 0.0
TcpExtTCPSackShiftFallback      9                  0.0
IpExtInOctets                   180131682          0.0
IpExtOutOctets                  7289106            0.0
</code></pre><h3 id="ss-命令-查詢套接字工具" tabindex="-1">ss 命令 : 查詢套接字工具 <a class="header-anchor" href="#ss-命令-查詢套接字工具" aria-label="Permalink to “ss 命令 : 查詢套接字工具”">​</a></h3><p>要查看統計彙總, 輸入:</p><pre><code># ss -s
</code></pre><p>輸出樣例:</p><pre><code>Total: 786 (kernel 804)
TCP:   65 (estab 40, closed 7, orphaned 0, synrecv 0, timewait 6/0), ports 56
Transport Total     IP        IPv6
*	  804       -         -
RAW	  1         1         0
UDP	  12        9         3
TCP	  58        52        6
INET	  71        62        9
FRAG	  0         0         0
</code></pre>`,14)),n("p",null,[e[1]||(e[1]=t("查看",-1)),r(s,{href:"https://linux.cn/article-4372-1.html"},{default:o(()=>[...e[0]||(e[0]=[t("ss 命令教程",-1)])]),_:1}),e[2]||(e[2]=t(" 獲取更多信息。",-1))]),e[23]||(e[23]=a(`<h3 id="netstat-命令-不錯的顯示套接字信息的舊工具" tabindex="-1">netstat 命令 : 不錯的顯示套接字信息的舊工具 <a class="header-anchor" href="#netstat-命令-不錯的顯示套接字信息的舊工具" aria-label="Permalink to “netstat 命令 : 不錯的顯示套接字信息的舊工具”">​</a></h3><p>查看所有網絡端口以及彙總信息表，輸入：</p><pre><code># netstat -i
</code></pre><p>輸出樣例:</p><pre><code>Kernel Interface table
Iface   MTU Met   RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg
eth0       1500 0    941022      0      0 0        688165      0      0      0 BMRU
lo        16436 0      9304      0      0 0          9304      0      0      0 LRU
ppp0       1496 0      3784      0      0 0          4177      0      0      0 MOPRU
</code></pre><p>查看每個協議的彙總統計信息，輸入：</p><pre><code># netstat -s
</code></pre><p>輸出樣例:</p><pre><code>Ip:
    1092065 total packets received
    0 forwarded
    0 incoming packets discarded
    1091681 incoming packets delivered
    798913 requests sent out
    895 dropped because of missing route
    759 reassemblies required
    375 packets reassembled ok
Icmp:
    17 ICMP messages received
    0 input ICMP message failed.
    ICMP input histogram:
        timeout in transit: 8
        echo replies: 9
    1747 ICMP messages sent
    0 ICMP messages failed
    ICMP output histogram:
        destination unreachable: 1730
        echo request: 17
IcmpMsg:
        InType0: 9
        InType11: 8
        OutType3: 1730
        OutType8: 17
Tcp:
    4822 active connections openings
    1129 passive connection openings
    457 failed connection attempts
    165 connection resets received
    7 connections established
    1062519 segments received
    771394 segments send out
    7158 segments retransmited
    6 bad segments received.
    2578 resets sent
Udp:
    20846 packets received
    1730 packets to unknown port received.
    0 packet receive errors
    19242 packets sent
UdpLite:
TcpExt:
    71 invalid SYN cookies received
    8 resets received for embryonic SYN_RECV sockets
    142 packets pruned from receive queue because of socket buffer overrun
    2109 TCP sockets finished time wait in fast timer
    84 packets rejects in established connections because of timestamp
    19454 delayed acks sent
    6 delayed acks further delayed because of locked socket
    Quick ack mode was activated 7306 times
    1 packets directly queued to recvmsg prequeue.
    1 bytes directly received in process context from prequeue
    823921 packet headers predicted
    24412 acknowledgments not containing data payload received
    10150 predicted acknowledgments
    242 times recovered from packet loss by selective acknowledgements
    33 congestion windows recovered without slow start by DSACK
    335 congestion windows recovered without slow start after partial ack
    336 TCP data loss events
    TCPLostRetransmit: 35
    1 timeouts after reno fast retransmit
    156 timeouts after SACK recovery
    116 timeouts in loss state
    461 fast retransmits
    5 forward retransmits
    608 retransmits in slow start
    2073 other TCP timeouts
    62 SACK retransmits failed
    43074 packets collapsed in receive queue due to low socket buffer
    8499 DSACKs sent for old packets
    101 DSACKs sent for out of order packets
    308 DSACKs received
    9 DSACKs for out of order packets received
    427 connections reset due to unexpected data
    122 connections reset due to early user close
    28 connections aborted due to timeout
    TCPDSACKIgnoredOld: 3
    TCPDSACKIgnoredNoUndo: 60
    TCPSpuriousRTOs: 4
    TCPSackShifted: 282
    TCPSackMerged: 740
    TCPSackShiftFallback: 1017
IpExt:
    InMcastPkts: 47
    OutMcastPkts: 51
    InBcastPkts: 1
    InOctets: 1341508973
    OutOctets: 72525352
    InMcastOctets: 8649
    OutMcastOctets: 7519
    InBcastOctets: 328
</code></pre>`,9)),n("p",null,[e[4]||(e[4]=t("查看 ",-1)),r(s,{href:"https://linux.cn/article-2434-1.html"},{default:o(()=>[...e[3]||(e[3]=[t("netstat 命令教程",-1)])]),_:1}),e[5]||(e[5]=t(" 獲取更多信息。",-1))]),e[24]||(e[24]=a(`<h3 id="ip-ifconfig-命令-配置或者顯示網絡端口信息" tabindex="-1">ip / ifconfig 命令 : 配置或者顯示網絡端口信息 <a class="header-anchor" href="#ip-ifconfig-命令-配置或者顯示網絡端口信息" aria-label="Permalink to “ip / ifconfig 命令 : 配置或者顯示網絡端口信息”">​</a></h3><p>鍵入以下命令:</p><pre><code># ifconfig 
</code></pre><p>或者</p><pre><code># /sbin/ifconfig
</code></pre><p>或者</p><pre><code># ifconfig eth0
</code></pre><hr><pre><code>eth0      Link encap:Ethernet  HWaddr b8:ac:6f:65:31:e5
          inet addr:192.168.1.5  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::baac:6fff:fe65:31e5/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:966334 errors:0 dropped:0 overruns:0 frame:0
          TX packets:703297 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1186255648 (1.1 GiB)  TX bytes:73968238 (70.5 MiB)
          Interrupt:17
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:9666 errors:0 dropped:0 overruns:0 frame:0
          TX packets:9666 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:1399578 (1.3 MiB)  TX bytes:1399578 (1.3 MiB)
ppp0      Link encap:Point-to-Point Protocol
          inet addr:10.1.11.70  P-t-P:10.0.31.18  Mask:255.255.255.255
          UP POINTOPOINT RUNNING NOARP MULTICAST  MTU:1496  Metric:1
          RX packets:3784 errors:0 dropped:0 overruns:0 frame:0
          TX packets:4177 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:3
          RX bytes:2400265 (2.2 MiB)  TX bytes:275983 (269.5 KiB)
</code></pre><p>顯示網絡端口統計信息，輸入：</p><pre><code># ip -s link
</code></pre><p>輸出樣例:</p><pre><code>1: lo:  mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    RX: bytes  packets  errors  dropped overrun mcast
    1444187    9960     0       0       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    1444187    9960     0       0       0       0
2: eth0:  mtu 1500 qdisc mq state UP qlen 1000
    link/ether b8:ac:6f:65:31:e5 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast
    1221956483 991501   0       0       0       24
    TX: bytes  packets  errors  dropped carrier collsns
    75623937   720272   0       0       0       0
3: wlan0:  mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether 00:21:6a:ca:9b:10 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast
    0          0        0       0       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    0          0        0       0       0       0
4: pan0:  mtu 1500 qdisc noop state DOWN
    link/ether 4a:c7:5f:0e:8e:d8 brd ff:ff:ff:ff:ff:ff
    RX: bytes  packets  errors  dropped overrun mcast
    0          0        0       0       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    0          0        0       0       0       0
8: ppp0:  mtu 1496 qdisc pfifo_fast state UNKNOWN qlen 3
    link/ppp
    RX: bytes  packets  errors  dropped overrun mcast
    2419881    3848     0       0       0       0
    TX: bytes  packets  errors  dropped carrier collsns
    284151     4287     0       0       0       0
</code></pre><h3 id="sar-命令-顯示網絡統計信息" tabindex="-1">sar 命令: 顯示網絡統計信息 <a class="header-anchor" href="#sar-命令-顯示網絡統計信息" aria-label="Permalink to “sar 命令: 顯示網絡統計信息”">​</a></h3>`,14)),n("p",null,[e[7]||(e[7]=t("輸入以下命令 (你需要 ",-1)),r(s,{href:"http://www.cyberciti.biz/tips/identifying-linux-bottlenecks-sar-graphs-with-ksar.html"},{default:o(()=>[...e[6]||(e[6]=[t("通過sysstat包安裝並啓用sar",-1)])]),_:1}),e[8]||(e[8]=t("):",-1))]),e[25]||(e[25]=n("p",null,"sar -n DEV",-1)),e[26]||(e[26]=n("pre",null,[n("code",null,`Linux 2.6.32-220.2.1.el6.x86_64 (www.cyberciti.biz)    Tuesday 13 March 2012   _x86_64_        (2 CPU)
12:00:01  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
12:10:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:10:01  CDT      eth0    127.13    121.32     95.45     18.34      0.00      0.00      0.00
12:10:01  CDT      eth1     98.48    110.62     16.72     96.33      0.00      0.00      0.00
12:20:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:20:01  CDT      eth0    139.95    133.41    106.30     19.95      0.00      0.00      0.00
12:20:01  CDT      eth1    110.65    121.85     18.14    107.13      0.00      0.00      0.00
12:30:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:30:01  CDT      eth0    147.85    132.49    115.78     20.45      0.00      0.00      0.00
12:30:01  CDT      eth1    111.88    127.39     18.61    117.65      0.00      0.00      0.00
12:40:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:40:01  CDT      eth0    136.75    124.64    105.24     19.48      0.00      0.00      0.00
12:40:01  CDT      eth1    101.65    115.32     17.58    104.50      0.00      0.00      0.00
12:50:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
12:50:01  CDT      eth0    131.45    125.69     96.49     19.58      0.00      0.00      0.00
12:50:01  CDT      eth1    101.41    111.31     17.54     96.78      0.00      0.00      0.00
01:00:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:00:01  CDT      eth0    140.30    133.27    102.17     20.75      0.00      0.00      0.00
01:00:01  CDT      eth1    106.90    119.51     18.53    103.09      0.00      0.00      0.00
01:10:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:10:01  CDT      eth0    152.03    127.74    125.56     19.85      0.00      0.00      0.00
01:10:01  CDT      eth1    115.60    134.57     18.73    126.96      0.00      0.00      0.00
01:20:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:20:01  CDT      eth0    138.55    130.55    103.03     20.20      0.00      0.00      0.00
....
..
....
..
.
01:00:01  CDT      eth1    156.82    169.48     28.83    138.49      0.00      0.00      0.00
01:10:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:10:01  CDT      eth0    215.19    194.82    163.11     30.99      0.00      0.00      0.00
01:10:01  CDT      eth1    162.49    183.79     28.36    163.70      0.00      0.00      0.00
01:20:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:20:01  CDT      eth0    200.20    192.23    140.64     30.93      0.00      0.00      0.00
01:20:01  CDT      eth1    153.60    166.96     27.32    140.26      0.00      0.00      0.00
01:30:01  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:30:01  CDT      eth0    111.98    103.58     79.12     16.52      0.00      0.00      0.48
01:30:01  CDT      eth1     87.50     95.58     14.74     79.35      0.00      0.00      0.00
Average:        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
Average:           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
Average:         eth0    211.21    196.20    156.18     31.20      0.00      0.00      0.01
Average:         eth1    159.10    174.52     28.00    149.95      0.00      0.00      0.00
`)],-1)),e[27]||(e[27]=n("p",null,"或者輸入以下命令:",-1)),e[28]||(e[28]=n("pre",null,[n("code",null,`# sar -n DEV 1 3
`)],-1)),e[29]||(e[29]=n("p",null,"輸出樣例:",-1)),e[30]||(e[30]=n("pre",null,[n("code",null,`Linux 2.6.32-220.2.1.el6.x86_64 (www.cyberciti.biz)    Tuesday 13 March 2012   _x86_64_        (2 CPU)
01:44:03  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
01:44:04  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:44:04  CDT      eth0    161.70    154.26    105.20     26.63      0.00      0.00      0.00
01:44:04  CDT      eth1    145.74    142.55     25.11    144.94      0.00      0.00      0.00
01:44:04  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
01:44:05  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:44:05  CDT      eth0    162.14    156.31    107.46     42.18      0.00      0.00      0.00
01:44:05  CDT      eth1    135.92    138.83     39.38    104.92      0.00      0.00      0.00
01:44:05  CDT     IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
01:44:06  CDT        lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
01:44:06  CDT      eth0    303.92    293.14    272.91     37.40      0.00      0.00      0.00
01:44:06  CDT      eth1    252.94    290.20     34.87    263.50      0.00      0.00      0.00
Average:        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s
Average:           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00
Average:         eth0    210.37    202.34    163.19     35.66      0.00      0.00      0.00
Average:         eth1    178.93    191.64     33.36    171.60      0.00      0.00      0.00
`)],-1)),e[31]||(e[31]=n("hr",null,null,-1)),n("p",null,[e[10]||(e[10]=t("via: ",-1)),r(s,{href:"http://www.cyberciti.biz/faq/network-statistics-tools-rhel-centos-debian-linux/"},{default:o(()=>[...e[9]||(e[9]=[t("http://www.cyberciti.biz/faq/network-statistics-tools-rhel-centos-debian-linux/",-1)])]),_:1})]),n("p",null,[e[14]||(e[14]=t("作者：",-1)),r(s,{href:"http://www.cyberciti.biz/tips/about-us"},{default:o(()=>[...e[11]||(e[11]=[t("nixCraft",-1)])]),_:1}),e[15]||(e[15]=t(" 譯者：",-1)),r(s,{href:"https://github.com/ictlyh"},{default:o(()=>[...e[12]||(e[12]=[t("ictlyh",-1)])]),_:1}),e[16]||(e[16]=t(" 校對：",-1)),r(s,{href:"https://github.com/wxy"},{default:o(()=>[...e[13]||(e[13]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[19]||(e[19]=t("本文由 ",-1)),r(s,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原創翻譯，",-1)),r(s,{href:"http://linux.cn/"},{default:o(()=>[...e[18]||(e[18]=[t("Linux中國",-1)])]),_:1}),e[21]||(e[21]=t(" 榮譽推出",-1))])])}const P=i(l,[["render",T]]);export{D as __pageData,P as default};
