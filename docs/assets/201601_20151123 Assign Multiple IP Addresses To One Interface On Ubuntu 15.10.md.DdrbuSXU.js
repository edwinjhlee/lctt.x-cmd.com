import{_ as p,a0 as i,w as f,s as a,ao as d,I as r,a1 as o,A as s,x as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址 | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151123 Assign Multiple IP Addresses To One Interface On Ubuntu 15.10","title":"在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址","tag":"201601","desc":""},"relativePath":"201601/20151123 Assign Multiple IP Addresses To One Interface On Ubuntu 15.10.md","filePath":"[post].md"}'),l={name:"201601/20151123 Assign Multiple IP Addresses To One Interface On Ubuntu 15.10.md"};function u(c,e,m,g,b,P){const t=i("Link");return f(),a("div",null,[e[14]||(e[14]=d(`<h1 id="在-ubuntu-15-10-上为单个网卡设置多个-ip-地址" tabindex="-1">在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址 <a class="header-anchor" href="#在-ubuntu-15-10-上为单个网卡设置多个-ip-地址" aria-label="Permalink to “在 Ubuntu 15.10 上为单个网卡设置多个 IP 地址”">​</a></h1><p>有时候你可能想在你的网卡上使用多个 IP 地址。遇到这种情况你会怎么办呢？买一个新的网卡并分配一个新的 IP？不，没有这个必要（至少在小型网络中）。现在我们可以在 Ubuntu 系统中为一个网卡分配多个 IP 地址。想知道怎么做到的？跟着我往下看，其实并不难。</p><p>这个方法也适用于 Debian 以及它的衍生版本。</p><h3 id="临时添加-ip-地址" tabindex="-1">临时添加 IP 地址 <a class="header-anchor" href="#临时添加-ip-地址" aria-label="Permalink to “临时添加 IP 地址”">​</a></h3><p>首先，让我们找到网卡的 IP 地址。在我的 Ubuntu 15.10 服务器版中，我只使用了一个网卡。</p><p>运行下面的命令找到 IP 地址：</p><pre><code>sudo ip addr
</code></pre><p><strong>样例输出：</strong></p><pre><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default 
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
</code></pre><p><strong>样例输出：</strong></p><pre><code>enp0s3 Link encap:Ethernet HWaddr 08:00:27:2a:03:4b 
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
</code></pre><p>正如你在上面输出中看到的，我的网卡名称是 <strong>enp0s3</strong>，它的 IP 地址是 <strong>192.168.1.103</strong>。</p><p>现在让我们来为网卡添加一个新的 IP 地址，例如说 <strong>192.168.1.104</strong>。</p><p>打开你的终端并运行下面的命令添加额外的 IP。</p><pre><code>sudo ip addr add 192.168.1.104/24 dev enp0s3
</code></pre><p>用命令检查是否启用了新的 IP：</p><pre><code>sudo ip address show enp0s3
</code></pre><p><strong>样例输出：</strong></p><pre><code>2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet 192.168.1.104/24 scope global secondary enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>类似地，你可以添加任意数量的 IP 地址，只要你想要。</p><p>让我们 ping 一下这个 IP 地址验证一下。</p><pre><code>sudo ping 192.168.1.104
</code></pre><p><strong>样例输出</strong></p><pre><code>PING 192.168.1.104 (192.168.1.104) 56(84) bytes of data.
64 bytes from 192.168.1.104: icmp_seq=1 ttl=64 time=0.901 ms
64 bytes from 192.168.1.104: icmp_seq=2 ttl=64 time=0.571 ms
64 bytes from 192.168.1.104: icmp_seq=3 ttl=64 time=0.521 ms
64 bytes from 192.168.1.104: icmp_seq=4 ttl=64 time=0.524 ms
</code></pre><p>好极了，它能工作！</p><p>要删除 IP，只需要运行：</p><pre><code>sudo ip addr del 192.168.1.104/24 dev enp0s3
</code></pre><p>再检查一下是否删除了 IP。</p><pre><code>sudo ip address show enp0s3
</code></pre><p><strong>样例输出：</strong></p><pre><code>2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>可以看到已经没有了！！</p><p>正如你所知，重启系统后这些设置会失效。那么怎么设置才能永久有效呢？这也很简单。</p><h3 id="添加永久-ip-地址" tabindex="-1">添加永久 IP 地址 <a class="header-anchor" href="#添加永久-ip-地址" aria-label="Permalink to “添加永久 IP 地址”">​</a></h3><p>Ubuntu 系统的网卡配置文件是 <strong>/etc/network/interfaces</strong>。</p><p>让我们来看看上面文件的具体内容。</p><pre><code>sudo cat /etc/network/interfaces
</code></pre><p><strong>输出样例：</strong></p><pre><code># This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
source /etc/network/interfaces.d/*
# The loopback network interface
auto lo
iface lo inet loopback
# The primary network interface
auto enp0s3
iface enp0s3 inet dhcp
</code></pre><p>正如你在上面输出中看到的，网卡启用了 DHCP。</p><p>现在，让我们来分配一个额外的地址，例如 <strong>192.168.1.104/24</strong>。</p><p>编辑 <strong>/etc/network/interfaces</strong>：</p><pre><code>sudo nano /etc/network/interfaces
</code></pre><p>如下添加额外的 IP 地址。</p><pre><code># This file describes the network interfaces available on your system
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
</code></pre><p>保存并关闭文件。</p><p>运行下面的命令使更改无需重启即生效。</p><pre><code>sudo ifdown enp0s3 &amp;&amp; sudo ifup enp0s3
</code></pre><p><strong>样例输出：</strong></p><pre><code>Killed old client process
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
</code></pre><p><strong>注意</strong>：如果你从远程连接到服务器，把上面的两个命令放到<strong>一行</strong>中<strong>非常重要</strong>，因为第一个命令会断掉你的连接。而采用这种方式可以保留你的 ssh 会话。</p><p>现在，让我们用下面的命令来检查一下是否添加了新的 IP：</p><pre><code>sudo ip address show enp0s3
</code></pre><p><strong>输出样例：</strong></p><pre><code>2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
link/ether 08:00:27:2a:03:4e brd ff:ff:ff:ff:ff:ff
inet 192.168.1.103/24 brd 192.168.1.255 scope global enp0s3
valid_lft forever preferred_lft forever
inet 192.168.1.104/24 brd 192.168.1.255 scope global secondary enp0s3
valid_lft forever preferred_lft forever
inet6 fe80::a00:27ff:fe2a:34e/64 scope link 
valid_lft forever preferred_lft forever
</code></pre><p>很好！我们已经添加了额外的 IP。</p><p>再次 ping IP 地址进行验证。</p><pre><code>sudo ping 192.168.1.104
</code></pre><p><strong>样例输出：</strong></p><pre><code>PING 192.168.1.104 (192.168.1.104) 56(84) bytes of data.
64 bytes from 192.168.1.104: icmp_seq=1 ttl=64 time=0.137 ms
64 bytes from 192.168.1.104: icmp_seq=2 ttl=64 time=0.050 ms
64 bytes from 192.168.1.104: icmp_seq=3 ttl=64 time=0.054 ms
64 bytes from 192.168.1.104: icmp_seq=4 ttl=64 time=0.067 ms
</code></pre><p>好极了！它能正常工作。就是这样。</p><p>想知道怎么给 CentOS/RHEL/Scientific Linux/Fedora 系统添加额外的 IP 地址，可以点击下面的链接。</p>`,64)),r("ul",null,[r("li",null,[o(t,{href:"https://linux.cn/article-5127-1.html"},{default:s(()=>[...e[0]||(e[0]=[n("在CentOS 7上给一个网卡分配多个IP地址",-1)])]),_:1})])]),e[15]||(e[15]=r("p",null,"工作愉快！",-1)),e[16]||(e[16]=r("hr",null,null,-1)),r("p",null,[e[2]||(e[2]=n("via: ",-1)),o(t,{href:"http://www.unixmen.com/assign-multiple-ip-addresses-to-one-interface-on-ubuntu-15-10/"},{default:s(()=>[...e[1]||(e[1]=[n("http://www.unixmen.com/assign-multiple-ip-addresses-to-one-interface-on-ubuntu-15-10/",-1)])]),_:1})]),r("p",null,[e[6]||(e[6]=n("作者：",-1)),o(t,{href:"http://www.unixmen.com/author/sk/"},{default:s(()=>[...e[3]||(e[3]=[n("SK",-1)])]),_:1}),e[7]||(e[7]=n(" 译者：",-1)),o(t,{href:"http://mutouxiaogui.cn/blog/"},{default:s(()=>[...e[4]||(e[4]=[n("ictlyh",-1)])]),_:1}),e[8]||(e[8]=n(" 校对：",-1)),o(t,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...e[5]||(e[5]=[n("Caroline",-1)])]),_:1})]),r("p",null,[e[11]||(e[11]=n("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原创编译，",-1)),o(t,{href:"https://linux.cn/"},{default:s(()=>[...e[10]||(e[10]=[n("Linux中国",-1)])]),_:1}),e[13]||(e[13]=n(" 荣誉推出",-1))])])}const _=p(l,[["render",u]]);export{T as __pageData,_ as default};
