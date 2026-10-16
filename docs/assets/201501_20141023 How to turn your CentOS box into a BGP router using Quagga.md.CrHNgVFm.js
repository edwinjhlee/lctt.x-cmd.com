import{_ as i,a0 as a,w as u,s,I as r,x as t,a1 as n,A as p,ao as g}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const R=JSON.parse('{"title":"使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141023 How to turn your CentOS box into a BGP router using Quagga","title":"使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器","tag":"201501","desc":""},"relativePath":"201501/20141023 How to turn your CentOS box into a BGP router using Quagga.md","filePath":"[post].md"}'),d={name:"201501/20141023 How to turn your CentOS box into a BGP router using Quagga.md"};function c(l,e,f,h,m,b){const o=a("Link");return u(),s("div",null,[e[21]||(e[21]=r("h1",{id:"使用-quagga-将你的-centos-系统变成一个-bgp-路由器",tabindex:"-1"},[t("使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器 "),r("a",{class:"header-anchor",href:"#使用-quagga-将你的-centos-系统变成一个-bgp-路由器","aria-label":"Permalink to “使用 Quagga 将你的 CentOS 系统变成一个 BGP 路由器”"},"​")],-1)),r("p",null,[e[1]||(e[1]=t("在",-1)),n(o,{href:"http://linux.cn/article-4232-1.html"},{default:p(()=>[...e[0]||(e[0]=[t("之前的教程中",-1)])]),_:1}),e[2]||(e[2]=t("，我对如何简单地使用Quagga把CentOS系统变成一个不折不扣地OSPF路由器做了一些介绍。Quagga是一个开源路由软件套件。在这个教程中，我将会重点讲讲",-1)),e[3]||(e[3]=r("strong",null,"如何把一个Linux系统变成一个BGP路由器，还是使用Quagga",-1)),e[4]||(e[4]=t("，演示如何建立BGP与其它BGP路由器对等。",-1))]),r("p",null,[e[6]||(e[6]=t("在我们进入细节之前，一些BGP的背景知识还是必要的。边界网关协议（即BGP）是互联网的域间路由协议的实际标准。在BGP术语中，全球互联网是由成千上万相关联的自治系统(AS)组成，其中每一个AS代表每一个特定运营商提供的一个网络管理域（",-1)),n(o,{href:"http://weibo.com/3181671860/BngyXxEUF"},{default:p(()=>[...e[5]||(e[5]=[t("据说",-1)])]),_:1}),e[7]||(e[7]=t("，美国前总统乔治.布什都有自己的 AS 编号）。",-1))]),e[22]||(e[22]=g(`<p>为了使其网络在全球范围内路由可达，每一个AS需要知道如何在英特网中到达其它的AS。这时候就需要BGP出来扮演这个角色了。BGP是一个AS去与相邻的AS交换路由信息的语言。这些路由信息通常被称为BGP线路或者BGP前缀。包括AS号(ASN；全球唯一号码)以及相关的IP地址块。一旦所有的BGP线路被当地的BGP路由表学习和记录，每一个AS将会知道如何到达互联网的任何公网IP。</p><p>在不同域(AS)之间路由的能力是BGP被称为外部网关协议(EGP)或者域间协议的主要原因。就如一些路由协议，例如OSPF、IS-IS、RIP和EIGRP都是内部网关协议(IGPs)或者域内路由协议，用于处理一个域内的路由.</p><h3 id="测试方案" tabindex="-1">测试方案 <a class="header-anchor" href="#测试方案" aria-label="Permalink to “测试方案”">​</a></h3><p>在这个教程中，让我们来使用以下拓扑。</p><p><img src="https://farm6.staticflickr.com/5598/15603223841_4c76343313_z.jpg" alt=""></p><p>我们假设运营商A想要建立一个BGP来与运营商B对等交换路由。它们的AS号和IP地址空间的细节如下所示：</p><ul><li><p><strong>运营商 A</strong>: ASN (100)， IP地址空间 (100.100.0.0/22)， 分配给BGP路由器eth1网卡的IP地址(100.100.1.1)</p></li><li><p><strong>运营商 B</strong>: ASN (200)， IP地址空间 (200.200.0.0/22)， 分配给BGP路由器eth1网卡的IP地址(200.200.1.1)</p></li></ul><p>路由器A和路由器B使用100.100.0.0/30子网来连接到对方。从理论上来说，任何子网从运营商那里都是可达的、可互连的。在真实场景中，建议使用掩码为30位的公网IP地址空间来实现运营商A和运营商B之间的连通。</p><h3 id="在-centos中安装quagga" tabindex="-1">在 CentOS中安装Quagga <a class="header-anchor" href="#在-centos中安装quagga" aria-label="Permalink to “在 CentOS中安装Quagga”">​</a></h3><p>如果Quagga还没安装好，我们可以使用yum来安装Quagga。</p><pre><code># yum install quagga 
</code></pre><p>如果你正在使用的是CentOS7系统，你需要应用一下策略来设置SELinux。否则，SElinux将会阻止Zebra守护进程写入它的配置目录。如果你正在使用的是CentOS6，你可以跳过这一步。</p><pre><code># setsebool -P zebra_write_config 1 
</code></pre><p>Quagga软件套件包含几个守护进程，这些进程可以协同工作。关于BGP路由，我们将把重点放在建立以下2个守护进程。</p><ul><li><strong>Zebra</strong>:一个核心守护进程用于内核接口和静态路由.</li><li><strong>BGPd</strong>:一个BGP守护进程.</li></ul><h3 id="配置日志记录" tabindex="-1">配置日志记录 <a class="header-anchor" href="#配置日志记录" aria-label="Permalink to “配置日志记录”">​</a></h3><p>在Quagga被安装后，下一步就是配置Zebra来管理BGP路由器的网络接口。我们通过创建一个Zebra配置文件和启用日志记录来开始第一步。</p><pre><code># cp /usr/share/doc/quagga-XXXXX/zebra.conf.sample /etc/quagga/zebra.conf 
</code></pre><p>在CentOS6系统中：</p><pre><code># service zebra start
# chkconfig zebra on
</code></pre><p>在CentOS7系统中:</p><pre><code># systemctl start zebra
# systemctl enable zebra 
</code></pre><p>Quagga提供了一个叫做vtysh特有的命令行工具，你可以输入与路由器厂商(例如Cisco和Juniper)兼容和支持的命令。我们将使用vtysh shell来配置BGP路由在教程的其余部分。</p><p>启动vtysh shell 命令，输入：</p><pre><code># vtysh
</code></pre><p>提示将被改成该主机名，这表明你是在vtysh shell中。</p><pre><code>Router-A#
</code></pre><p>现在我们将使用以下命令来为Zebra配置日志文件：</p><pre><code>Router-A# configure terminal
Router-A(config)# log file /var/log/quagga/quagga.log
Router-A(config)# exit
</code></pre><p>永久保存Zebra配置：</p><pre><code>Router-A# write
</code></pre><p>在路由器B操作同样的步骤。</p><h3 id="配置对等的ip地址" tabindex="-1">配置对等的IP地址 <a class="header-anchor" href="#配置对等的ip地址" aria-label="Permalink to “配置对等的IP地址”">​</a></h3><p>下一步，我们将在可用的接口上配置对等的IP地址。</p><pre><code>Router-A# show interface   #显示接口信息
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
. . . . .
Interface eth1 is up, line protocol detection is disabled
. . . . .
</code></pre><p>配置eth0接口的参数：</p><pre><code>site-A-RTR# configure terminal
site-A-RTR(config)# interface eth0
site-A-RTR(config-if)# ip address 100.100.0.1/30
site-A-RTR(config-if)# description &quot;to Router-B&quot;
site-A-RTR(config-if)# no shutdown
site-A-RTR(config-if)# exit
</code></pre><p>继续配置eth1接口的参数：</p><pre><code>site-A-RTR(config)# interface eth1
site-A-RTR(config-if)# ip address 100.100.1.1/24
site-A-RTR(config-if)# description &quot;test ip from provider A network&quot;
site-A-RTR(config-if)# no shutdown
site-A-RTR(config-if)# exit
</code></pre><p>现在确认配置：</p><pre><code>Router-A# show interface 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
  Description: &quot;to Router-B&quot;
  inet 100.100.0.1/30 broadcast 100.100.0.3
Interface eth1 is up, line protocol detection is disabled
  Description: &quot;test ip from provider A network&quot;
  inet 100.100.1.1/24 broadcast 100.100.1.255
</code></pre><hr><pre><code>Router-A# show interface description   #显示接口描述
</code></pre><hr><pre><code>Interface       Status  Protocol  Description
eth0            up      unknown   &quot;to Router-B&quot;
eth1            up      unknown   &quot;test ip from provider A network&quot;
</code></pre><p>如果一切看起来正常，别忘记保存配置。</p><pre><code>Router-A# write
</code></pre><p>同样地，在路由器B重复一次配置。</p><p>在我们继续下一步之前，确认下彼此的IP是可以ping通的。</p><pre><code>Router-A# ping 100.100.0.2 
</code></pre><hr><pre><code>PING 100.100.0.2 (100.100.0.2) 56(84) bytes of data.
64 bytes from 100.100.0.2: icmp_seq=1 ttl=64 time=0.616 ms
</code></pre><p>下一步，我们将继续配置BGP对等和前缀设置。</p><h3 id="配置bgp对等" tabindex="-1">配置BGP对等 <a class="header-anchor" href="#配置bgp对等" aria-label="Permalink to “配置BGP对等”">​</a></h3><p>Quagga守护进程负责BGP的服务叫bgpd。首先我们来准备它的配置文件。</p><pre><code># cp /usr/share/doc/quagga-XXXXXXX/bgpd.conf.sample /etc/quagga/bgpd.conf 
</code></pre><p>在CentOS6系统中：</p><pre><code># service bgpd start
# chkconfig bgpd on
</code></pre><p>在CentOS7中：</p><pre><code># systemctl start bgpd
# systemctl enable bgpd
</code></pre><p>现在，让我们来进入Quagga 的shell。</p><pre><code># vtysh
</code></pre><p>第一步，我们要确认当前没有已经配置的BGP会话。在一些版本，我们可能会发现一个AS号为7675的BGP会话。由于我们不需要这个会话，所以把它移除。</p><pre><code>Router-A# show running-config 
</code></pre><hr><pre><code>... ... ...
router bgp 7675
 bgp router-id 200.200.1.1
... ... ... 
</code></pre><p>我们将移除一些预先配置好的BGP会话，并建立我们所需的会话取而代之。</p><pre><code>Router-A# configure terminal
Router-A(config)# no router bgp 7675
Router-A(config)# router bgp 100
Router-A(config)# no auto-summary
Router-A(config)# no synchronizaiton
Router-A(config-router)# neighbor 100.100.0.2 remote-as 200
Router-A(config-router)# neighbor 100.100.0.2 description &quot;provider B&quot;
Router-A(config-router)# exit
Router-A(config)# exit
Router-A# write 
</code></pre><p>路由器B将用同样的方式来进行配置，以下配置提供作为参考。</p><pre><code>Router-B# configure terminal
Router-B(config)# no router bgp 7675
Router-B(config)# router bgp 200
Router-B(config)# no auto-summary
Router-B(config)# no synchronizaiton
Router-B(config-router)# neighbor 100.100.0.1 remote-as 100
Router-B(config-router)# neighbor 100.100.0.1 description &quot;provider A&quot;
Router-B(config-router)# exit
Router-B(config)# exit
Router-B# write 
</code></pre><p>当相关的路由器都被配置好，两台路由器之间的对等将被建立。现在让我们通过运行下面的命令来确认：</p><pre><code>Router-A# show ip bgp summary 
</code></pre><p><img src="https://farm6.staticflickr.com/5614/15420135700_e3568d2e5f_z.jpg" alt=""></p><p>从输出中，我们可以看到&quot;State/PfxRcd&quot;部分。如果对等关闭，输出将会显示&quot;Idle&quot;或者&quot;Active&#39;。请记住，单词&#39;Active&#39;这个词在路由器中总是不好的意思。它意味着路由器正在积极地寻找邻居、前缀或者路由。当对等是up状态，&quot;State/PfxRcd&quot;下的输出状态将会从特殊邻居接收到前缀号。</p><p>在这个例子的输出中，BGP对等只是在AS100和AS200之间呈up状态。因此没有前缀被更改，所以最右边列的数值是0。</p><h3 id="配置前缀通告" tabindex="-1">配置前缀通告 <a class="header-anchor" href="#配置前缀通告" aria-label="Permalink to “配置前缀通告”">​</a></h3><p>正如一开始提到，AS 100将以100.100.0.0/22作为通告，在我们的例子中AS 200将同样以200.200.0.0/22作为通告。这些前缀需要被添加到BGP配置如下。</p><p>在路由器-A中：</p><pre><code>Router-A# configure terminal
Router-A(config)# router bgp 100
Router-A(config)# network 100.100.0.0/22
Router-A(config)# exit
Router-A# write
</code></pre><p>在路由器-B中：</p><pre><code>Router-B# configure terminal
Router-B(config)# router bgp 200
Router-B(config)# network 200.200.0.0/22
Router-B(config)# exit
Router-B# write 
</code></pre><p>在这一点上，两个路由器会根据需要开始通告前缀。</p><h3 id="测试前缀通告" tabindex="-1">测试前缀通告 <a class="header-anchor" href="#测试前缀通告" aria-label="Permalink to “测试前缀通告”">​</a></h3><p>首先，让我们来确认前缀的数量是否被改变了。</p><pre><code>Router-A# show ip bgp summary 
</code></pre><p><img src="https://farm6.staticflickr.com/5608/15419095659_0ebb384eee_z.jpg" alt=""></p><p>为了查看所接收的更多前缀细节，我们可以使用以下命令，这个命令用于显示邻居100.100.0.2所接收到的前缀总数。</p><pre><code> Router-A# show ip bgp neighbors 100.100.0.2 advertised-routes 
</code></pre><p><img src="https://farm6.staticflickr.com/5597/15419618208_4604e5639a_z.jpg" alt=""></p><p>查看哪一个前缀是我们从邻居接收到的：</p><pre><code>Router-A# show ip bgp neighbors 100.100.0.2 routes 
</code></pre><p><img src="https://farm4.staticflickr.com/3935/15606556462_e17eae7f49_z.jpg" alt=""></p><p>我们也可以查看所有的BGP路由器：</p><pre><code>Router-A# show ip bgp 
</code></pre><p><img src="https://farm6.staticflickr.com/5609/15419618228_5c776423a5_z.jpg" alt=""></p><p>以上的命令都可以被用于检查哪个路由器通过BGP在路由器表中被学习到。</p><pre><code>Router-A# show ip route 
</code></pre><hr><pre><code>代码: K - 内核路由, C - 已链接 , S - 静态 , R - 路由信息协议 , O - 开放式最短路径优先协议,
    
       I - 中间系统到中间系统的路由选择协议, B - 边界网关协议, &gt; - 选择路由, * - FIB 路由
   
C&gt;* 100.100.0.0/30 is directly connected, eth0
C&gt;* 100.100.1.0/24 is directly connected, eth1
B&gt;* 200.200.0.0/22 [20/0] via 100.100.0.2, eth0, 00:06:45
</code></pre><hr><pre><code>Router-A# show ip route bgp 
</code></pre><hr><pre><code>B&gt;* 200.200.0.0/22 [20/0] via 100.100.0.2, eth0, 00:08:13
</code></pre><p>BGP学习到的路由也将会在Linux路由表中出现。</p><pre><code>[root@Router-A~]# ip route 
</code></pre><hr><pre><code>100.100.0.0/30 dev eth0  proto kernel  scope link  src 100.100.0.1
100.100.1.0/24 dev eth1  proto kernel  scope link  src 100.100.1.1
200.200.0.0/22 via 100.100.0.2 dev eth0  proto zebra
</code></pre><p>最后，我们将使用ping命令来测试连通。结果将成功ping通。</p><pre><code>[root@Router-A~]# ping 200.200.1.1 -c 2
</code></pre><p>总而言之，本教程将重点放在如何在CentOS系统中运行一个基本的BGP路由器。这个教程让你开始学习BGP的配置，一些更高级的设置例如设置过滤器、BGP属性调整、本地优先级和预先路径准备等，我将会在后续的教程中覆盖这些主题。</p><p>希望这篇教程能给大家一些帮助。</p><hr>`,116)),r("p",null,[e[9]||(e[9]=t("via: ",-1)),n(o,{href:"http://xmodulo.com/centos-bgp-router-quagga.html"},{default:p(()=>[...e[8]||(e[8]=[t("http://xmodulo.com/centos-bgp-router-quagga.html",-1)])]),_:1})]),r("p",null,[e[13]||(e[13]=t("作者：",-1)),n(o,{href:"http://xmodulo.com/author/sarmed"},{default:p(()=>[...e[10]||(e[10]=[t("Sarmed Rahman",-1)])]),_:1}),e[14]||(e[14]=t(" 译者：",-1)),n(o,{href:"https://github.com/disylee"},{default:p(()=>[...e[11]||(e[11]=[t("disylee",-1)])]),_:1}),e[15]||(e[15]=t(" 校对：",-1)),n(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[18]||(e[18]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原创翻译，",-1)),n(o,{href:"http://linux.cn/"},{default:p(()=>[...e[17]||(e[17]=[t("Linux中国",-1)])]),_:1}),e[20]||(e[20]=t(" 荣誉推出",-1))])])}const A=i(d,[["render",c]]);export{R as __pageData,A as default};
