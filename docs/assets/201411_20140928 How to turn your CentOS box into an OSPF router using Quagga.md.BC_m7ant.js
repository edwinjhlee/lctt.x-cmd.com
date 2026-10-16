import{_ as p,a0 as s,w as d,s as g,I as a,x as t,a1 as n,A as r,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器 | LCTT x X-CMD","titleTemplate":false,"description":"想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140928 How to turn your CentOS box into an OSPF router using Quagga","title":"想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器","tag":"201411","desc":""},"relativePath":"201411/20140928 How to turn your CentOS box into an OSPF router using Quagga.md","filePath":"[post].md"}'),u={name:"201411/20140928 How to turn your CentOS box into an OSPF router using Quagga.md"};function c(l,e,f,h,R,S){const o=s("Link");return d(),g("div",null,[e[18]||(e[18]=a("h1",{id:"想玩路由器吗-使用-quagga-将你的-centos-变成-ospf-路由器",tabindex:"-1"},[t("想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器 "),a("a",{class:"header-anchor",href:"#想玩路由器吗-使用-quagga-将你的-centos-变成-ospf-路由器","aria-label":"Permalink to “想玩路由器吗？使用 Quagga 将你的 CentOS 变成 OSPF 路由器”"},"​")],-1)),a("p",null,[n(o,{href:"http://www.nongnu.org/quagga/"},{default:r(()=>[...e[0]||(e[0]=[t("Quagga",-1)])]),_:1}),e[1]||(e[1]=t("是一个开源路由软件套件，可以将Linux变成支持如RIP、OSPF、BGP和IS-IS等主要路由协议的路由器。它具有对IPv4和IPv6的完整支持，并支持路由/前缀过滤。Quagga可以是你生命中的救星，以防你的生产路由器一旦宕机，而你没有备用的设备而只能等待更换。通过适当的配置，Quagga甚至可以作为生产路由器。",-1))]),e[19]||(e[19]=i(`<p>本教程中，我们将连接假设之间具有专线连接的两个分支机构网络（例如，192.168.1.0/24和172.17.1.0/24）。</p><p><img src="https://farm4.staticflickr.com/3861/15172727969_13cb7f037f_b.jpg" alt=""></p><p>我们的CentOS位于所述专用链路的两端。两台主机名分别设置为“site-A-RTR”和“site-B-RTR&#39;。下面是IP地址的详细信息。</p><ul><li><strong>Site-A</strong>: 192.168.1.0/24</li><li><strong>Site-B</strong>: 172.16.1.0/24</li><li><strong>两个 Linux 路由器之间的对等网络</strong>: 10.10.10.0/30</li></ul><p>Quagga包括了几个协同工作的守护进程。在本教程中，我们将重点建立以下守护进程。</p><ol><li><strong>Zebra</strong>: 核心守护进程，负责内核接口和静态路由。</li><li><strong>Ospfd</strong>: IPv4 OSPF 守护进程。</li></ol><h3 id="在centos上安装quagga" tabindex="-1">在CentOS上安装Quagga <a class="header-anchor" href="#在centos上安装quagga" aria-label="Permalink to “在CentOS上安装Quagga”">​</a></h3><p>我们使用yum安装Quagga。</p><pre><code># yum install quagga 
</code></pre>`,9)),a("p",null,[e[3]||(e[3]=t("在CentOS7，SELinux默认会阻止quagga将配置文件写到/usr/sbin/zebra。这个SELinux策略会干扰我们接下来要介绍的安装过程，所以我们要禁用此策略。对于这一点，无论是",-1)),n(o,{href:"http://xmodulo.com/how-to-disable-selinux.html"},{default:r(()=>[...e[2]||(e[2]=[t("关闭SELinux",-1)])]),_:1}),e[4]||(e[4]=t("（这里不推荐），还是如下启用“zebra_write_config”都可以。如果你使用的是CentOS 6的请跳过此步骤。",-1))]),e[20]||(e[20]=i(`<pre><code># setsebool -P zebra_write_config 1 
</code></pre><p>如果没有做这个修改，在我们尝试在Quagga命令行中保存配置的时候看到如下错误。</p><pre><code>Can&#39;t open configuration file /etc/quagga/zebra.conf.OS1Uu5.
</code></pre><p>安装完Quagga后，我们要配置必要的对等IP地址，并更新OSPF设置。Quagga自带了一个命令行称为vtysh。vtysh里面用到的Quagga命令与主要的路由器厂商如思科和Juniper是相似的。</p><h3 id="步骤-1-配置-zebra" tabindex="-1">步骤 1: 配置 Zebra <a class="header-anchor" href="#步骤-1-配置-zebra" aria-label="Permalink to “步骤 1: 配置 Zebra”">​</a></h3><p>我们首先创建Zebra配置文件，并启用Zebra守护进程。</p><pre><code># cp /usr/share/doc/quagga-XXXXX/zebra.conf.sample /etc/quagga/zebra.conf
# service zebra start
# chkconfig zebra on 
</code></pre><p>启动vtysh命令行：</p><pre><code># vtysh 
</code></pre><p>首先，我们为Zebra配置日志文件。输入下面的命令进入vtysh的全局配置模式：</p><pre><code>site-A-RTR# configure terminal
</code></pre><p>指定日志文件位置，接着退出模式：</p><pre><code>site-A-RTR(config)# log file /var/log/quagga/quagga.log
site-A-RTR(config)# exit
</code></pre><p>永久保存配置：</p><pre><code>site-A-RTR# write
</code></pre><p>接下来，我们要确定可用的接口并按需配置它们的IP地址。</p><pre><code>site-A-RTR# show interface 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
. . . . .
Interface eth1 is up, line protocol detection is disabled
. . . . .
</code></pre><p>配置eth0参数：</p><pre><code>site-A-RTR# configure terminal
site-A-RTR(config)# interface eth0
site-A-RTR(config-if)# ip address 10.10.10.1/30
site-A-RTR(config-if)# description to-site-B
site-A-RTR(config-if)# no shutdown 
</code></pre><p>继续配置eth1参数：</p><pre><code>site-A-RTR(config)# interface eth1
site-A-RTR(config-if)# ip address 192.168.1.1/24
site-A-RTR(config-if)# description to-site-A-LAN
site-A-RTR(config-if)# no shutdown 
</code></pre><p>现在验证配置:</p><pre><code>site-A-RTR(config-if)# do show interface 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
. . . . .
  inet 10.10.10.1/30 broadcast 10.10.10.3
. . . . .
Interface eth1 is up, line protocol detection is disabled
. . . . .
  inet 192.168.1.1/24 broadcast 192.168.1.255
. . . . .
</code></pre><hr><pre><code>site-A-RTR(config-if)# do show interface description 
</code></pre><hr><pre><code>Interface      Status  Protocol  Description
eth0           up      unknown   to-site-B
eth1           up      unknown   to-site-A-LAN
</code></pre><p>永久保存配置:</p><pre><code>site-A-RTR(config-if)# do write
</code></pre><p>在site-B上重复上面配置IP地址的步骤。</p><p>如果一切顺利，你应该可以在site-A的服务器上ping通site-B上的对等IP地址10.10.10.2了。</p><p>注意：一旦Zebra的守护进程启动了，在vtysh命令行中的任何改变都会立即生效。因此没有必要在更改配置后重启Zebra守护进程。</p><h3 id="步骤-2-配置ospf" tabindex="-1">步骤 2: 配置OSPF <a class="header-anchor" href="#步骤-2-配置ospf" aria-label="Permalink to “步骤 2: 配置OSPF”">​</a></h3><p>我们首先创建OSPF配置文件，并启动OSPF守护进程：</p><pre><code># cp /usr/share/doc/quagga-XXXXX/ospfd.conf.sample /etc/quagga/ospfd.conf
# service ospfd start
# chkconfig ospfd on 
</code></pre><p>现在启动vtysh命令行来继续OSPF配置：</p><pre><code># vtysh
</code></pre><p>输入路由配置模式:</p><pre><code>site-A-RTR# configure terminal
site-A-RTR(config)# router ospf
</code></pre><p>可选配置路由id:</p><pre><code>site-A-RTR(config-router)# router-id 10.10.10.1
</code></pre><p>添加在OSPF中的网络:</p><pre><code>site-A-RTR(config-router)# network 10.10.10.0/30 area 0
site-A-RTR(config-router)# network 192.168.1.0/24 area 0
</code></pre><p>永久保存配置:</p><pre><code>site-A-RTR(config-router)# do write
</code></pre><p>在site-B上重复和上面相似的OSPF配置:</p><pre><code>site-B-RTR(config-router)# network 10.10.10.0/30 area 0
site-B-RTR(config-router)# network 172.16.1.0/24 area 0
site-B-RTR(config-router)# do write 
</code></pre><p>OSPF的邻居现在应该启动了。只要ospfd在运行，通过vtysh的任何OSPF相关配置的改变都会立即生效而不必重启ospfd。</p><p>下一节，我们会验证我们的Quagga设置。</p><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to “验证”">​</a></h3><h4 id="_1-通过ping测试" tabindex="-1">1. 通过ping测试 <a class="header-anchor" href="#_1-通过ping测试" aria-label="Permalink to “1. 通过ping测试”">​</a></h4><p>首先你应该可以从site-A ping同site-B的LAN子网。确保你的防火墙没有阻止ping的流量。</p><pre><code>[root@site-A-RTR ~]# ping 172.16.1.1 -c 2 
</code></pre><h4 id="_2-检查路由表" tabindex="-1">2. 检查路由表 <a class="header-anchor" href="#_2-检查路由表" aria-label="Permalink to “2. 检查路由表”">​</a></h4><p>必要的路由应该同时出现在内核与Quagga理由表中。</p><pre><code>[root@site-A-RTR ~]# ip route 
</code></pre><hr><pre><code>10.10.10.0/30 dev eth0  proto kernel  scope link  src 10.10.10.1
172.16.1.0/30 via 10.10.10.2 dev eth0  proto zebra  metric 20
192.168.1.0/24 dev eth1  proto kernel  scope link  src 192.168.1.1
</code></pre><hr><pre><code>[root@site-A-RTR ~]# vtysh
site-A-RTR# show ip route 
</code></pre><hr><pre><code>Codes: K - kernel route, C - connected, S - static, R - RIP, O - OSPF,
       I - ISIS, B - BGP, &gt; - selected route, * - FIB route

O   10.10.10.0/30 [110/10] is directly connected, eth0, 00:14:29
C&gt;* 10.10.10.0/30 is directly connected, eth0
C&gt;* 127.0.0.0/8 is directly connected, lo
O&gt;* 172.16.1.0/30 [110/20] via 10.10.10.2, eth0, 00:14:14
C&gt;* 192.168.1.0/24 is directly connected, eth1
</code></pre><h4 id="_3-验证ospf邻居和路由" tabindex="-1">3. 验证OSPF邻居和路由 <a class="header-anchor" href="#_3-验证ospf邻居和路由" aria-label="Permalink to “3. 验证OSPF邻居和路由”">​</a></h4><p>在vtysh命令行中，你可以检查必要的邻居是否在线与是否已经学习了合适的路由。</p><pre><code>[root@site-A-RTR ~]# vtysh
site-A-RTR# show ip ospf neighbor 
</code></pre><p><img src="https://farm3.staticflickr.com/2943/15160942468_d348241bd5_z.jpg" alt=""></p><p>本教程中，我们将重点放在使用Quagga配置基本的OSPF。在一般情况下，Quagga能让我们能够轻松在一台普通的Linux机器上配置动态路由协议，如OSPF、RIP或BGP。启用了Quagga的机器可以与你网络中的其他路由器进行通信和交换路由信息。由于它支持主要的开放标准的路由协议，它或许是许多情况下的首选。更重要的是，Quagga的命令行界面与主要路由器厂商如思科和Juniper几乎是相同的，这使得部署和维护Quagga机器变得非常容易。</p><p>希望这些对你们有帮助。</p><hr>`,73)),a("p",null,[e[6]||(e[6]=t("via: ",-1)),n(o,{href:"http://xmodulo.com/turn-centos-box-into-ospf-router-quagga.html"},{default:r(()=>[...e[5]||(e[5]=[t("http://xmodulo.com/turn-centos-box-into-ospf-router-quagga.html",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("作者：",-1)),n(o,{href:"http://xmodulo.com/author/sarmed"},{default:r(()=>[...e[7]||(e[7]=[t("Sarmed Rahman",-1)])]),_:1}),e[11]||(e[11]=t(" 译者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[8]||(e[8]=[t("geekpi",-1)])]),_:1}),e[12]||(e[12]=t(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[15]||(e[15]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[t("LCTT",-1)])]),_:1}),e[16]||(e[16]=t(" 原创翻译，",-1)),n(o,{href:"http://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[t("Linux中国",-1)])]),_:1}),e[17]||(e[17]=t(" 荣誉推出",-1))])])}const m=p(u,[["render",c]]);export{b as __pageData,m as default};
