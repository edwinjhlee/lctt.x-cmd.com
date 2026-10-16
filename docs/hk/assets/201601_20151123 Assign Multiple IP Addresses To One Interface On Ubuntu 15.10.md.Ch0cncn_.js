import{_ as p,a0 as i,w as f,s as a,ao as d,I as r,a1 as o,A as s,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址 | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151123 Assign Multiple IP Addresses To One Interface On Ubuntu 15.10","title":"在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址","tag":"201601","desc":""},"relativePath":"201601/20151123 Assign Multiple IP Addresses To One Interface On Ubuntu 15.10.md","filePath":"[post].md"}'),l={name:"201601/20151123 Assign Multiple IP Addresses To One Interface On Ubuntu 15.10.md"};function u(c,e,m,g,b,P){const t=i("Link");return f(),a("div",null,[e[14]||(e[14]=d(`<h1 id="在-ubuntu-15-10-上為單個網卡設置多個-ip-地址" tabindex="-1">在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址 <a class="header-anchor" href="#在-ubuntu-15-10-上為單個網卡設置多個-ip-地址" aria-label="Permalink to “在 Ubuntu 15.10 上為單個網卡設置多個 IP 地址”">​</a></h1><p>有時候你可能想在你的網卡上使用多個 IP 地址。遇到這種情況你會怎麼辦呢？買一個新的網卡並分配一個新的 IP？不，沒有這個必要（至少在小型網絡中）。現在我們可以在 Ubuntu 系統中為一個網卡分配多個 IP 地址。想知道怎麼做到的？跟着我往下看，其實並不難。</p><p>這個方法也適用於 Debian 以及它的衍生版本。</p><h3 id="臨時添加-ip-地址" tabindex="-1">臨時添加 IP 地址 <a class="header-anchor" href="#臨時添加-ip-地址" aria-label="Permalink to “臨時添加 IP 地址”">​</a></h3><p>首先，讓我們找到網卡的 IP 地址。在我的 Ubuntu 15.10 服務器版中，我只使用了一個網卡。</p><p>運行下面的命令找到 IP 地址：</p><pre><code>sudo ip addr
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default 
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
inet 127.0.0.1/8 scope host lo
valid_lft forever preferred_lft forever
inet6 ::1/128 scope host 
valid_lft forever preferred_lft forever
2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4b brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>或</p><pre><code>sudo ifconfig
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>enp0s3 Link encap:Ethernet HWaddr 08:00:27:2a:03:4b 
inet addr:192.168.1.103 Bcast:192.168.1.255 Mask:255.255.255.0
inet6 addr: fe80::a00:27ff:fe2a:34e/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:186 errors:0 dropped:0 overruns:0 frame:0
TX packets:70 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000 
RX bytes:21872 (21.8 KB) TX bytes:9666 (9.6 KB)
lo Link encap:Local Loopback 
inet addr:127.0.0.1 Mask:255.0.0.0
inet6 addr: ::1/128 Scope:Host
UP LOOPBACK RUNNING MTU:65536 Metric:1
RX packets:217 errors:0 dropped:0 overruns:0 frame:0
TX packets:217 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:0 
RX bytes:38793 (38.7 KB) TX bytes:38793 (38.7 KB)
</code></pre><p>正如你在上面輸出中看到的，我的網卡名稱是 <strong>enp0s3</strong>，它的 IP 地址是 <strong>192.168.1.103</strong>。</p><p>現在讓我們來為網卡添加一個新的 IP 地址，例如説 <strong>192.168.1.104</strong>。</p><p>打開你的終端並運行下面的命令添加額外的 IP。</p><pre><code>sudo ip addr add 192.168.1.104/24 dev enp0s3
</code></pre><p>用命令檢查是否啓用了新的 IP：</p><pre><code>sudo ip address show enp0s3
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet 192.168.1.104/24 scope global secondary enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>類似地，你可以添加任意數量的 IP 地址，只要你想要。</p><p>讓我們 ping 一下這個 IP 地址驗證一下。</p><pre><code>sudo ping 192.168.1.104
</code></pre><p><strong>樣例輸出</strong></p><pre><code>PING 192.168.1.104 (192.168.1.104) 56(84) bytes of data.
64 bytes from 192.168.1.104: icmp_seq=1 ttl=64 time=0.901 ms
64 bytes from 192.168.1.104: icmp_seq=2 ttl=64 time=0.571 ms
64 bytes from 192.168.1.104: icmp_seq=3 ttl=64 time=0.521 ms
64 bytes from 192.168.1.104: icmp_seq=4 ttl=64 time=0.524 ms
</code></pre><p>好極了，它能工作！</p><p>要刪除 IP，只需要運行：</p><pre><code>sudo ip addr del 192.168.1.104/24 dev enp0s3
</code></pre><p>再檢查一下是否刪除了 IP。</p><pre><code>sudo ip address show enp0s3
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>可以看到已經沒有了！！</p><p>正如你所知，重啓系統後這些設置會失效。那麼怎麼設置才能永久有效呢？這也很簡單。</p><h3 id="添加永久-ip-地址" tabindex="-1">添加永久 IP 地址 <a class="header-anchor" href="#添加永久-ip-地址" aria-label="Permalink to “添加永久 IP 地址”">​</a></h3><p>Ubuntu 系統的網卡配置文件是 <strong>/etc/network/interfaces</strong>。</p><p>讓我們來看看上面文件的具體內容。</p><pre><code>sudo cat /etc/network/interfaces
</code></pre><p><strong>輸出樣例：</strong></p><pre><code># This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
source /etc/network/interfaces.d/*
# The loopback network interface
auto lo
iface lo inet loopback
# The primary network interface
auto enp0s3
iface enp0s3 inet dhcp
</code></pre><p>正如你在上面輸出中看到的，網卡啓用了 DHCP。</p><p>現在，讓我們來分配一個額外的地址，例如 <strong>192.168.1.104/24</strong>。</p><p>編輯 <strong>/etc/network/interfaces</strong>：</p><pre><code>sudo nano /etc/network/interfaces
</code></pre><p>如下添加額外的 IP 地址。</p><pre><code># This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
source /etc/network/interfaces.d/*
# The loopback network interface
auto lo
iface lo inet loopback
# The primary network interface
auto enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet static
 address 192.168.1.104/24
</code></pre><p>保存並關閉文件。</p><p>運行下面的命令使更改無需重啓即生效。</p><pre><code>sudo ifdown enp0s3 &amp;&amp; sudo ifup enp0s3
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>Killed old client process
Internet Systems Consortium DHCP Client 4.3.1
Copyright 2004-2014 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/
Listening on LPF/enp0s3/08:00:27:2a:03:4e
Sending on LPF/enp0s3/08:00:27:2a:03:4e
Sending on Socket/fallback
DHCPRELEASE on enp0s3 to 192.168.1.1 port 67 (xid=0x225f35)
Internet Systems Consortium DHCP Client 4.3.1
Copyright 2004-2014 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/
Listening on LPF/enp0s3/08:00:27:2a:03:4e
Sending on LPF/enp0s3/08:00:27:2a:03:4e
Sending on Socket/fallback
DHCPDISCOVER on enp0s3 to 255.255.255.255 port 67 interval 3 (xid=0xdfb94764)
DHCPREQUEST of 192.168.1.103 on enp0s3 to 255.255.255.255 port 67 (xid=0x6447b9df)
DHCPOFFER of 192.168.1.103 from 192.168.1.1
DHCPACK of 192.168.1.103 from 192.168.1.1
bound to 192.168.1.103 -- renewal in 35146 seconds.
</code></pre><p><strong>注意</strong>：如果你從遠程連接到服務器，把上面的兩個命令放到<strong>一行</strong>中<strong>非常重要</strong>，因為第一個命令會斷掉你的連接。而採用這種方式可以保留你的 ssh 會話。</p><p>現在，讓我們用下面的命令來檢查一下是否添加了新的 IP：</p><pre><code>sudo ip address show enp0s3
</code></pre><p><strong>輸出樣例：</strong></p><pre><code>2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet 192.168.1.104/24 brd 192.168.1.255 scope global secondary enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>很好！我們已經添加了額外的 IP。</p><p>再次 ping IP 地址進行驗證。</p><pre><code>sudo ping 192.168.1.104
</code></pre><p><strong>樣例輸出：</strong></p><pre><code>PING 192.168.1.104 (192.168.1.104) 56(84) bytes of data.
64 bytes from 192.168.1.104: icmp_seq=1 ttl=64 time=0.137 ms
64 bytes from 192.168.1.104: icmp_seq=2 ttl=64 time=0.050 ms
64 bytes from 192.168.1.104: icmp_seq=3 ttl=64 time=0.054 ms
64 bytes from 192.168.1.104: icmp_seq=4 ttl=64 time=0.067 ms
</code></pre><p>好極了！它能正常工作。就是這樣。</p><p>想知道怎麼給 CentOS/RHEL/Scientific Linux/Fedora 系統添加額外的 IP 地址，可以點擊下面的鏈接。</p>`,64)),r("ul",null,[r("li",null,[o(t,{href:"https://linux.cn/article-5127-1.html"},{default:s(()=>[...e[0]||(e[0]=[n("在CentOS 7上給一個網卡分配多個IP地址",-1)])]),_:1})])]),e[15]||(e[15]=r("p",null,"工作愉快！",-1)),e[16]||(e[16]=r("hr",null,null,-1)),r("p",null,[e[2]||(e[2]=n("via: ",-1)),o(t,{href:"http://www.unixmen.com/assign-multiple-ip-addresses-to-one-interface-on-ubuntu-15-10/"},{default:s(()=>[...e[1]||(e[1]=[n("http://www.unixmen.com/assign-multiple-ip-addresses-to-one-interface-on-ubuntu-15-10/",-1)])]),_:1})]),r("p",null,[e[6]||(e[6]=n("作者：",-1)),o(t,{href:"http://www.unixmen.com/author/sk/"},{default:s(()=>[...e[3]||(e[3]=[n("SK",-1)])]),_:1}),e[7]||(e[7]=n(" 譯者：",-1)),o(t,{href:"http://mutouxiaogui.cn/blog/"},{default:s(()=>[...e[4]||(e[4]=[n("ictlyh",-1)])]),_:1}),e[8]||(e[8]=n(" 校對：",-1)),o(t,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...e[5]||(e[5]=[n("Caroline",-1)])]),_:1})]),r("p",null,[e[11]||(e[11]=n("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原創編譯，",-1)),o(t,{href:"https://linux.cn/"},{default:s(()=>[...e[10]||(e[10]=[n("Linux中國",-1)])]),_:1}),e[13]||(e[13]=n(" 榮譽推出",-1))])])}const _=p(l,[["render",u]]);export{T as __pageData,_ as default};
