import{_ as p,a0 as i,w as u,s as f,ao as d,I as r,x as e,a1 as n,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse('{"title":"在CentOS 7上給一個網卡分配多個IP地址 | LCTT x X-CMD","titleTemplate":false,"description":"在CentOS 7上給一個網卡分配多個IP地址 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在CentOS 7上給一個網卡分配多個IP地址 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在CentOS 7上給一個網卡分配多個IP地址 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150205 Linux Basics--Assign Multiple IP Addresses To Single Network Interface Card On CentOS 7","title":"在CentOS 7上給一個網卡分配多個IP地址","tag":"201503","desc":""},"relativePath":"201503/20150205 Linux Basics--Assign Multiple IP Addresses To Single Network Interface Card On CentOS 7.md","filePath":"[post].md"}'),q={name:"201503/20150205 Linux Basics--Assign Multiple IP Addresses To Single Network Interface Card On CentOS 7.md"};function l(a,t,c,m,P,I){const o=i("Link");return u(),f("div",null,[t[13]||(t[13]=d(`<h1 id="在centos-7上給一個網卡分配多個ip地址" tabindex="-1">在CentOS 7上給一個網卡分配多個IP地址 <a class="header-anchor" href="#在centos-7上給一個網卡分配多個ip地址" aria-label="Permalink to “在CentOS 7上給一個網卡分配多個IP地址”">​</a></h1><p>有時你也許想要給一個網卡多個地址。你該怎麼做呢？另外買一個網卡來分配地址？在小型網絡中其實不用這麼做。我們現在可以在CentOS/RHEL 7中給一個網卡分配多個ip地址。想知道怎麼做麼？好的，跟隨我，這並不難。</p><p>首先，讓我們找到網卡的IP地址。在我的CentOS 7服務器中，我只使用了一個網卡。</p><p>用root特權運行下面的命令：</p><pre><code>ip addr
</code></pre><p>示例輸出：</p><pre><code>1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:80:63:19 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.150/24 brd 192.168.1.255 scope global enp0s3
       valid_lft forever preferred_lft forever
</code></pre><p>如上所見，我的網卡名是enp0s3，ip地址是192.168.1.150。</p><p>如你所知，網卡的配置文件存儲在 <strong>/etc/sysconfig/network-scripts/</strong> 目錄下。每個網卡的詳細內容將會以不同的名字存儲，比如<strong>ifcfg-enp0s3</strong>。</p><p>讓我們看下<strong>ifcfg-enp0s3</strong>的細節。</p><pre><code>cat /etc/sysconfig/network-scripts/ifcfg-enp0s3
</code></pre><p>示例輸出：</p><pre><code>TYPE=&quot;Ethernet&quot;
BOOTPROTO=&quot;none&quot;
DEFROUTE=&quot;yes&quot;
IPV4_FAILURE_FATAL=&quot;no&quot;
IPV6INIT=&quot;yes&quot;
IPV6_AUTOCONF=&quot;yes&quot;
IPV6_DEFROUTE=&quot;yes&quot;
IPV6_FAILURE_FATAL=&quot;no&quot;
NAME=&quot;enp0s3&quot;
UUID=&quot;e9f9caef-cb9e-4a19-aace-767c6ee6f849&quot;
ONBOOT=&quot;yes&quot;
HWADDR=&quot;08:00:27:80:63:19&quot;
IPADDR0=&quot;192.168.1.150&quot;
PREFIX0=&quot;24&quot;
GATEWAY0=&quot;192.168.1.1&quot;
DNS1=&quot;192.168.1.1&quot;
IPV6_PEERDNS=&quot;yes&quot;
IPV6_PEERROUTES=&quot;yes&quot;
</code></pre><p>好的，現在我們將在相同的子網中分配多個地址了。</p><p>編輯文件 <strong>/etc/sysconfig/network-scripts/ifcfg-enp0s3</strong>：</p><pre><code>vi /etc/sysconfig/network-scripts/ifcfg-enp0s3
</code></pre><p>像下面那樣加入額外的IP地址。</p><pre><code>TYPE=&quot;Ethernet&quot;
BOOTPROTO=&quot;none&quot;
DEFROUTE=&quot;yes&quot;
IPV4_FAILURE_FATAL=&quot;no&quot;
IPV6INIT=&quot;yes&quot;
IPV6_AUTOCONF=&quot;yes&quot;
IPV6_DEFROUTE=&quot;yes&quot;
IPV6_FAILURE_FATAL=&quot;no&quot;
NAME=&quot;enp0s3&quot;
UUID=&quot;933cdc9b-b383-4ddd-b219-5a72c69c9cf0&quot;
ONBOOT=&quot;yes&quot;
HWADDR=&quot;08:00:27:3F:AB:68&quot;
IPADDR0=&quot;192.168.1.150&quot;
IPADDR1=&quot;192.168.1.151&quot;
IPADDR2=&quot;192.168.1.152&quot;
PREFIX0=&quot;24&quot;
GATEWAY0=&quot;192.168.1.1&quot;
DNS1=&quot;192.168.1.1&quot;
IPV6_PEERDNS=&quot;yes&quot;
IPV6_PEERROUTES=&quot;yes&quot;
</code></pre><p>如你所見，我已經加了兩個IP地址：<strong>IPADDR1=”192.168.1.151″ &amp; IPADDR2=”192.168.1.152″</strong></p><p>類似地，你可以加入更多的ip地址。</p><p>最後，保存並退出文件。重啓網絡服務來使更改生效。</p><pre><code>systemctl restart network
</code></pre><p>現在，讓我們檢查是否已經加入了ip地址。</p><pre><code>ip addr
</code></pre><dl><dt>示例輸出：</dt><dd>lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00 inet 127.0.0.1/8 scope host lo valid_lft forever preferred_lft forever inet6 ::1/128 scope host valid_lft forever preferred_lft forever 2: enp0s3: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000 link/ether 08:00:27:3f🆎68 brd ff:ff:ff:ff:ff:ff inet 192.168.1.150/24 brd 192.168.1.255 scope global enp0s3 valid_lft forever preferred_lft forever inet 192.168.1.151/24 brd 192.168.1.255 scope global secondary enp0s3 valid_lft forever preferred_lft forever inet 192.168.1.152/24 brd 192.168.1.255 scope global secondary enp0s3 valid_lft forever preferred_lft forever inet6 fe80::a00:27ff:fe3f:ab68/64 scope link valid_lft forever preferred_lft forever</dd></dl><p>如你所見，單個網卡已經有3個ip地址了。</p><p>讓我們ping一下新增的IP地址：</p><pre><code>ping -c 4 192.168.1.151
</code></pre><p>示例輸出：</p><pre><code>PING 192.168.1.151 (192.168.1.151) 56(84) bytes of data.
64 bytes from 192.168.1.151: icmp_seq=1 ttl=64 time=0.048 ms
64 bytes from 192.168.1.151: icmp_seq=2 ttl=64 time=0.075 ms
64 bytes from 192.168.1.151: icmp_seq=3 ttl=64 time=0.077 ms
64 bytes from 192.168.1.151: icmp_seq=4 ttl=64 time=0.077 ms

--- 192.168.1.151 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 2999ms
rtt min/avg/max/mdev = 0.048/0.069/0.077/0.013 ms
</code></pre><hr><pre><code>ping -c 4 192.168.1.152
</code></pre><p>示例輸出：</p><pre><code>PING 192.168.1.152 (192.168.1.152) 56(84) bytes of data.
64 bytes from 192.168.1.152: icmp_seq=1 ttl=64 time=0.034 ms
64 bytes from 192.168.1.152: icmp_seq=2 ttl=64 time=0.075 ms
64 bytes from 192.168.1.152: icmp_seq=3 ttl=64 time=0.073 ms
64 bytes from 192.168.1.152: icmp_seq=4 ttl=64 time=0.075 ms

--- 192.168.1.152 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 2999ms
rtt min/avg/max/mdev = 0.034/0.064/0.075/0.018 ms
</code></pre><p>如果你想要使用<strong>不同的子網</strong>，你要改變<strong>PREFIX0=24</strong>成不同的子網，比如 <strong>PREFIX1=16</strong>。</p><p>比如，我想要添加一個A類地址（**比如10.0.0.1*）到我的網卡中。</p><pre><code>TYPE=&quot;Ethernet&quot;
BOOTPROTO=&quot;none&quot;
DEFROUTE=&quot;yes&quot;
IPV4_FAILURE_FATAL=&quot;no&quot;
IPV6INIT=&quot;yes&quot;
IPV6_AUTOCONF=&quot;yes&quot;
IPV6_DEFROUTE=&quot;yes&quot;
IPV6_FAILURE_FATAL=&quot;no&quot;
NAME=&quot;enp0s3&quot;
UUID=&quot;933cdc9b-b383-4ddd-b219-5a72c69c9cf0&quot;
ONBOOT=&quot;yes&quot;
HWADDR=&quot;08:00:27:3F:AB:68&quot;
IPADDR0=&quot;192.168.1.150&quot;
IPADDR1=&quot;192.168.1.151&quot;
IPADDR2=&quot;192.168.1.152&quot;
IPADDR3=&quot;10.0.0.1&quot;
PREFIX0=&quot;24&quot;
PREFIX1=16
GATEWAY0=&quot;192.168.1.1&quot;
DNS1=&quot;192.168.1.1&quot;
IPV6_PEERDNS=&quot;yes&quot;
IPV6_PEERROUTES=&quot;yes&quot;
</code></pre><p>你可以看到我已經添加一個A類地址(10.0.0.1)並且前綴是16。</p><p>保存並退出文件。重啓網絡服務，接着，ping新增的地址：</p><pre><code>ping -c 4 10.0.0.1
</code></pre><p>示例輸出：</p><pre><code>PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.
64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.097 ms
64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.073 ms
64 bytes from 10.0.0.1: icmp_seq=3 ttl=64 time=0.074 ms
64 bytes from 10.0.0.1: icmp_seq=4 ttl=64 time=0.075 ms

--- 10.0.0.1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3000ms
rtt min/avg/max/mdev = 0.073/0.079/0.097/0.014 ms
</code></pre><p>相似地，你可以添加不同的網關。</p><p>就是這樣。</p><hr>`,45)),r("p",null,[t[1]||(t[1]=e("via: ",-1)),n(o,{href:"http://www.unixmen.com/linux-basics-assign-multiple-ip-addresses-single-network-interface-card-centos-7/"},{default:s(()=>[...t[0]||(t[0]=[e("http://www.unixmen.com/linux-basics-assign-multiple-ip-addresses-single-network-interface-card-centos-7/",-1)])]),_:1})]),r("p",null,[t[5]||(t[5]=e("作者：",-1)),n(o,{href:"http://www.unixmen.com/author/sk/"},{default:s(()=>[...t[2]||(t[2]=[e("SK",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:s(()=>[...t[3]||(t[3]=[e("geekpi",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:s(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),r("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),n(o,{href:"http://linux.cn/"},{default:s(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const g=p(q,[["render",l]]);export{A as __pageData,g as default};
