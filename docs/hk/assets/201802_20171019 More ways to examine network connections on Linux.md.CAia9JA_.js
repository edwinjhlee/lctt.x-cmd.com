import{_ as t,a0 as l,w as o,s as c,ao as r,I as i,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"在 Linux 上檢查網絡連接的更多方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上檢查網絡連接的更多方法 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上檢查網絡連接的更多方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上檢查網絡連接的更多方法 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20171019 More ways to examine network connections on Linux","title":"在 Linux 上檢查網絡連接的更多方法","tag":"201802","desc":""},"relativePath":"201802/20171019 More ways to examine network connections on Linux.md","filePath":"[post].md"}'),d={name:"201802/20171019 More ways to examine network connections on Linux.md"};function h(u,s,g,k,m,f){const a=l("Link");return o(),c("div",null,[s[16]||(s[16]=r(`<h1 id="在-linux-上檢查網絡連接的更多方法" tabindex="-1">在 Linux 上檢查網絡連接的更多方法 <a class="header-anchor" href="#在-linux-上檢查網絡連接的更多方法" aria-label="Permalink to “在 Linux 上檢查網絡連接的更多方法”">​</a></h1><blockquote><p>有幾個命令可以幫助你在 Linux 系統上看到網絡狀況，這些包括 ip、ethtool、traceroute、tcptraceroute 和 tcpdump。</p></blockquote><p><img src="https://images.techhive.com/images/article/2016/11/ethernet_cables-100694419-large.jpg" alt=""></p><p><code>ifconfig</code> 和 <code>netstat</code> 命令當然非常有用，但還有很多其它命令能幫你查看 Linux 系統上的網絡狀況。本文探索了一些檢查網絡連接的非常簡便的命令。</p><h3 id="ip-命令" tabindex="-1">ip 命令 <a class="header-anchor" href="#ip-命令" aria-label="Permalink to “ip 命令”">​</a></h3><p><code>ip</code> 命令顯示了許多與你使用 <code>ifconfig</code> 命令時的一樣信息。其中一些信息以不同的格式呈現，比如顯示 <code>192.168.0.6/24</code>，而不是 <code>inet addr:192.168.0.6 Bcast:192.168.0.255</code>，儘管 <code>ifconfig</code> 更適合數據包計數，但 <code>ip</code> 命令有許多有用的選項。</p><p>首先，<code>ip a</code> 命令可以列出所有網絡接口的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip a</span></span>
<span class="line"><span>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1</span></span>
<span class="line"><span> link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span></span>
<span class="line"><span> inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span> valid_lft forever preferred_lft forever</span></span>
<span class="line"><span> inet6 ::1/128 scope host</span></span>
<span class="line"><span> valid_lft forever preferred_lft forever</span></span>
<span class="line"><span>2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000</span></span>
<span class="line"><span> link/ether 00:1e:4f:c8:43:fc brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span> inet 192.168.0.6/24 brd 192.168.0.255 scope global eth0</span></span>
<span class="line"><span> valid_lft forever preferred_lft forever</span></span>
<span class="line"><span> inet6 fe80::21e:4fff:fec8:43fc/64 scope link</span></span>
<span class="line"><span> valid_lft forever preferred_lft forever</span></span></code></pre></div><p>如果你只想看到簡單的網絡接口列表，你可以用 <code>grep</code> 限制它的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip a | grep inet</span></span>
<span class="line"><span> inet 127.0.0.1/8 scope host lo</span></span>
<span class="line"><span> inet6 ::1/128 scope host</span></span>
<span class="line"><span> inet 192.168.0.6/24 brd 192.168.0.255 scope global eth0</span></span>
<span class="line"><span> inet6 fe80::21e:4fff:fec8:43fc/64 scope link</span></span></code></pre></div><p>使用如下面的命令，你可以看到你的默認路由：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip route show</span></span>
<span class="line"><span>default via 192.168.0.1 dev eth0</span></span>
<span class="line"><span>192.168.0.0/24 dev eth0 proto kernel scope link src 192.168.0.6</span></span></code></pre></div><p>在這個輸出中，你可以看到通過 <code>eth0</code> 的默認網關是 <code>192.168.0.1</code>，並且本地網絡是相當標準的 <code>192.168.0.0/24</code>。</p><p>你也可以使用 <code>ip</code> 命令來啓用和禁用網絡接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo ip link set eth1 up</span></span>
<span class="line"><span>$ sudo ip link set eth1 down</span></span></code></pre></div><h3 id="ethtool-命令" tabindex="-1">ethtool 命令 <a class="header-anchor" href="#ethtool-命令" aria-label="Permalink to “ethtool 命令”">​</a></h3><p>另一個檢查網絡非常有用的工具是 <code>ethtool</code>。這個命令提供了網絡接口上的許多描述性的數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ethtool eth0</span></span>
<span class="line"><span>Settings for eth0:</span></span>
<span class="line"><span> Supported ports: [ TP ]</span></span>
<span class="line"><span> Supported link modes: 10baseT/Half 10baseT/Full</span></span>
<span class="line"><span> 100baseT/Half 100baseT/Full</span></span>
<span class="line"><span> 1000baseT/Full</span></span>
<span class="line"><span> Supported pause frame use: No</span></span>
<span class="line"><span> Supports auto-negotiation: Yes</span></span>
<span class="line"><span> Advertised link modes: 10baseT/Half 10baseT/Full</span></span>
<span class="line"><span> 100baseT/Half 100baseT/Full</span></span>
<span class="line"><span> 1000baseT/Full</span></span>
<span class="line"><span> Advertised pause frame use: No</span></span>
<span class="line"><span> Advertised auto-negotiation: Yes</span></span>
<span class="line"><span> Speed: 100Mb/s</span></span>
<span class="line"><span> Duplex: Full</span></span>
<span class="line"><span> Port: Twisted Pair</span></span>
<span class="line"><span> PHYAD: 1</span></span>
<span class="line"><span> Transceiver: internal</span></span>
<span class="line"><span> Auto-negotiation: on</span></span>
<span class="line"><span> MDI-X: on (auto)</span></span>
<span class="line"><span>Cannot get wake-on-lan settings: Operation not permitted</span></span>
<span class="line"><span> Current message level: 0x00000007 (7)</span></span>
<span class="line"><span> drv probe link</span></span>
<span class="line"><span> Link detected: yes</span></span></code></pre></div><p>你也可以使用 <code>ethtool</code> 命令來檢查以太網驅動程序的設置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ethtool -i eth0</span></span>
<span class="line"><span>driver: e1000e</span></span>
<span class="line"><span>version: 3.2.6-k</span></span>
<span class="line"><span>firmware-version: 1.4-0</span></span>
<span class="line"><span>expansion-rom-version:</span></span>
<span class="line"><span>bus-info: 0000:00:19.0</span></span>
<span class="line"><span>supports-statistics: yes</span></span>
<span class="line"><span>supports-test: yes</span></span>
<span class="line"><span>supports-eeprom-access: yes</span></span>
<span class="line"><span>supports-register-dump: yes</span></span>
<span class="line"><span>supports-priv-flags: no</span></span></code></pre></div><p>自動協商的詳細信息可以用這樣的命令來顯示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ethtool -a eth0</span></span>
<span class="line"><span>Pause parameters for eth0:</span></span>
<span class="line"><span>Autonegotiate: on</span></span>
<span class="line"><span>RX: on</span></span>
<span class="line"><span>TX: on</span></span></code></pre></div><h3 id="traceroute-命令" tabindex="-1">traceroute 命令 <a class="header-anchor" href="#traceroute-命令" aria-label="Permalink to “traceroute 命令”">​</a></h3><p><code>traceroute</code> 命令用於顯示路由路徑。它通過在一系列數據包中設置數據包頭的 TTL（生存時間）字段來捕獲數據包所經過的路徑，以及數據包從一跳到下一跳需要的時間。<code>traceroute</code> 的輸出有助於評估網絡連接的健康狀況，因為某些路由可能需要花費更長的時間才能到達最終的目的地。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo traceroute world.std.com</span></span>
<span class="line"><span>traceroute to world.std.com (192.74.137.5), 30 hops max, 60 byte packets</span></span>
<span class="line"><span> 1 192.168.0.1 (192.168.0.1) 3.691 ms 3.678 ms 3.665 ms</span></span>
<span class="line"><span> 2 10.224.64.1 (10.224.64.1) 26.273 ms 27.354 ms 28.574 ms</span></span>
<span class="line"><span> 3 10.20.0.33 (10.20.0.33) 28.293 ms 30.625 ms 33.959 ms</span></span>
<span class="line"><span> 4 10.20.0.226 (10.20.0.226) 36.807 ms 37.868 ms 37.857 ms</span></span>
<span class="line"><span> 5 204.111.0.132 (204.111.0.132) 38.256 ms 39.091 ms 40.429 ms</span></span>
<span class="line"><span> 6 ash-b1-link.telia.net (80.239.161.69) 41.612 ms 28.214 ms 29.573 ms</span></span>
<span class="line"><span> 7 xe-1-3-1.er1.iad10.us.zip.zayo.com (64.125.13.157) 30.429 ms 27.915 ms 29.065 ms</span></span>
<span class="line"><span> 8 ae6.cr1.dca2.us.zip.zayo.com (64.125.20.117) 31.353 ms 32.413 ms 33.821 ms</span></span>
<span class="line"><span> 9 ae27.cs1.dca2.us.eth.zayo.com (64.125.30.246) 43.474 ms 44.519 ms 46.037 ms</span></span>
<span class="line"><span>10 ae4.cs1.lga5.us.eth.zayo.com (64.125.29.202) 48.107 ms 48.960 ms 50.024 ms</span></span>
<span class="line"><span>11 ae8.mpr3.bos2.us.zip.zayo.com (64.125.30.139) 51.626 ms 51.200 ms 39.283 ms</span></span>
<span class="line"><span>12 64.124.51.229.t495-rtr.towerstream.com (64.124.51.229) 40.233 ms 41.295 ms 39.651 ms</span></span>
<span class="line"><span>13 69.38.149.18 (69.38.149.18) 44.955 ms 46.210 ms 55.673 ms</span></span>
<span class="line"><span>14 64.119.137.154 (64.119.137.154) 56.076 ms 56.064 ms 56.052 ms</span></span>
<span class="line"><span>15 world.std.com (192.74.137.5) 63.440 ms 63.886 ms 63.870 ms</span></span></code></pre></div><h3 id="tcptraceroute-命令" tabindex="-1">tcptraceroute 命令 <a class="header-anchor" href="#tcptraceroute-命令" aria-label="Permalink to “tcptraceroute 命令”">​</a></h3><p><code>tcptraceroute</code> 命令與 <code>traceroute</code> 基本上是一樣的，只是它能夠繞過最常見的防火牆的過濾。正如該命令的手冊頁所述，<code>tcptraceroute</code> 發送 TCP SYN 數據包而不是 UDP 或 ICMP ECHO 數據包，所以其不易被阻塞。</p><h3 id="tcpdump-命令" tabindex="-1">tcpdump 命令 <a class="header-anchor" href="#tcpdump-命令" aria-label="Permalink to “tcpdump 命令”">​</a></h3><p><code>tcpdump</code> 命令允許你捕獲網絡數據包來進一步分析。使用 <code>-D</code> 選項列出可用的網絡接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tcpdump -D</span></span>
<span class="line"><span>1.eth0 [Up, Running]</span></span>
<span class="line"><span>2.any (Pseudo-device that captures on all interfaces) [Up, Running]</span></span>
<span class="line"><span>3.lo [Up, Running, Loopback]</span></span>
<span class="line"><span>4.nflog (Linux netfilter log (NFLOG) interface)</span></span>
<span class="line"><span>5.nfqueue (Linux netfilter queue (NFQUEUE) interface)</span></span>
<span class="line"><span>6.usbmon1 (USB bus number 1)</span></span>
<span class="line"><span>7.usbmon2 (USB bus number 2)</span></span>
<span class="line"><span>8.usbmon3 (USB bus number 3)</span></span>
<span class="line"><span>9.usbmon4 (USB bus number 4)</span></span>
<span class="line"><span>10.usbmon5 (USB bus number 5)</span></span>
<span class="line"><span>11.usbmon6 (USB bus number 6)</span></span>
<span class="line"><span>12.usbmon7 (USB bus number 7)</span></span></code></pre></div><p><code>-v</code> 選項控制你看到的細節程度——越多的 <code>v</code>，越詳細，但超過 3 個 <code>v</code> 不會有更多意義。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tcpdump -vv host 192.168.0.32</span></span>
<span class="line"><span>tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes</span></span>
<span class="line"><span>20:26:31.321816 IP (tos 0x10, ttl 64, id 22411, offset 0, flags [DF], proto TCP (6), length 184)</span></span>
<span class="line"><span> 192.168.0.6.ssh &gt; 192.168.0.32.57294: Flags [P.], cksum 0x8221 (incorrect -&gt; 0x0254), seq 3891093411:3891093555, ack 2388988308, win 329, length 144</span></span>
<span class="line"><span>20:26:31.321984 IP (tos 0x10, ttl 64, id 22412, offset 0, flags [DF], proto TCP (6), length 200)</span></span>
<span class="line"><span> 192.168.0.6.ssh &gt; 192.168.0.32.57294: Flags [P.], cksum 0x8231 (incorrect -&gt; 0x3db0), seq 144:304, ack 1, win 329, length 160</span></span>
<span class="line"><span>20:26:31.323791 IP (tos 0x0, ttl 128, id 20259, offset 0, flags [DF], proto TCP (6), length 40)</span></span>
<span class="line"><span> 192.168.0.32.57294 &gt; 192.168.0.6.ssh: Flags [.], cksum 0x643d (correct), seq 1, ack 304, win 385, length 0</span></span>
<span class="line"><span>20:26:31.383954 IP (tos 0x10, ttl 64, id 22413, offset 0, flags [DF], proto TCP (6), length 248)</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>當你運行像這樣的命令時，會看到<strong>非常多</strong>的輸出。</p><p>這個命令捕獲來自特定主機和 <code>eth0</code> 上的 <code>11</code> 個數據包。<code>-w</code> 選項標識保存捕獲包的文件。在這個示例命令中，我們只要求捕獲 <code>11</code> 個數據包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo tcpdump -c 11 -i eth0 src 192.168.0.32 -w packets.pcap</span></span>
<span class="line"><span>tcpdump: listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes</span></span>
<span class="line"><span>11 packets captured</span></span>
<span class="line"><span>11 packets received by filter</span></span>
<span class="line"><span>0 packets dropped by kernel</span></span></code></pre></div><h3 id="arp-命令" tabindex="-1">arp 命令 <a class="header-anchor" href="#arp-命令" aria-label="Permalink to “arp 命令”">​</a></h3><p><code>arp</code> 命令將 IPv4 地址映射到硬件地址。它所提供的信息也可以在一定程度上用於識別系統，因為網絡適配器可以告訴你使用它們的系統的一些信息。下面的第二個 MAC 地址，以 <code>f8:8e:85</code> 開頭，很容易被識別出是 Comtrend 路由器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ arp -a</span></span>
<span class="line"><span>? (192.168.0.12) at b0:c0:90:3f:10:15 [ether] on eth0</span></span>
<span class="line"><span>? (192.168.0.1) at f8:8e:85:35:7f:b9 [ether] on eth0</span></span></code></pre></div>`,38)),i("p",null,[s[1]||(s[1]=n("上面的第一行顯示了系統本身的網絡適配器的 MAC 地址。該網絡適配器似乎已由台灣 Chicony 電子公司製造。你可以很容易地在網上查找 MAC 地址關聯，例如來自 Wireshark 的這個工具 —— ",-1)),e(a,{href:"https://www.wireshark.org/tools/oui-lookup.html"},{default:p(()=>[...s[0]||(s[0]=[n("https://www.wireshark.org/tools/oui-lookup.html",-1)])]),_:1}),s[2]||(s[2]=n(" 。",-1))]),s[17]||(s[17]=i("hr",null,null,-1)),i("p",null,[s[4]||(s[4]=n("via: ",-1)),e(a,{href:"https://www.networkworld.com/article/3233306/linux/more-ways-to-examine-network-connections-on-linux.html"},{default:p(()=>[...s[3]||(s[3]=[n("https://www.networkworld.com/article/3233306/linux/more-ways-to-examine-network-connections-on-linux.html",-1)])]),_:1})]),i("p",null,[s[8]||(s[8]=n("作者：",-1)),e(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:p(()=>[...s[5]||(s[5]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[9]||(s[9]=n(" 譯者：",-1)),e(a,{href:"https://github.com/kimii"},{default:p(()=>[...s[6]||(s[6]=[n("kimii",-1)])]),_:1}),s[10]||(s[10]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[7]||(s[7]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[13]||(s[13]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[11]||(s[11]=[n("LCTT",-1)])]),_:1}),s[14]||(s[14]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[12]||(s[12]=[n("Linux中國",-1)])]),_:1}),s[15]||(s[15]=n(" 榮譽推出",-1))])])}const v=t(d,[["render",h]]);export{y as __pageData,v as default};
