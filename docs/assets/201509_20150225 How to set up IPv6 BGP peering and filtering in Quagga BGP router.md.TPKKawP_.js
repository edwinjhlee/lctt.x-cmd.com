import{_ as i,a0 as s,w as g,s as d,I as p,x as r,a1 as o,A as a,ao as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const B=JSON.parse('{"title":"如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤 | LCTT x X-CMD","titleTemplate":false,"description":"如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150225 How to set up IPv6 BGP peering and filtering in Quagga BGP router","title":"如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤","tag":"201509","desc":""},"relativePath":"201509/20150225 How to set up IPv6 BGP peering and filtering in Quagga BGP router.md","filePath":"[post].md"}'),l={name:"201509/20150225 How to set up IPv6 BGP peering and filtering in Quagga BGP router.md"};function u(f,e,c,P,b,m){const t=s("Link");return g(),d("div",null,[e[24]||(e[24]=p("h1",{id:"如何设置在-quagga-bgp-路由器中设置-ipv6-的-bgp-对等体和过滤",tabindex:"-1"},[r("如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤 "),p("a",{class:"header-anchor",href:"#如何设置在-quagga-bgp-路由器中设置-ipv6-的-bgp-对等体和过滤","aria-label":"Permalink to “如何设置在 Quagga BGP 路由器中设置 IPv6 的 BGP 对等体和过滤”"},"​")],-1)),p("p",null,[e[2]||(e[2]=r("在之前的教程中，我们演示了如何使用Quagga建立一个",-1)),o(t,{href:"https://linux.cn/article-4232-1.html"},{default:a(()=>[...e[0]||(e[0]=[r("完备的BGP路由器",-1)])]),_:1}),e[3]||(e[3]=r("和配置",-1)),o(t,{href:"http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html"},{default:a(()=>[...e[1]||(e[1]=[r("前缀过滤",-1)])]),_:1}),e[4]||(e[4]=r("。在本教程中，我们会向你演示如何创建IPv6 BGP对等体并通过BGP通告IPv6前缀。同时我们也将演示如何使用前缀列表和路由映射特性来过滤通告的或者获取到的IPv6前缀。",-1))]),e[25]||(e[25]=n(`<h3 id="拓扑" tabindex="-1">拓扑 <a class="header-anchor" href="#拓扑" aria-label="Permalink to “拓扑”">​</a></h3><p>教程中，我们主要参考如下拓扑。</p><p><img src="https://farm9.staticflickr.com/8599/15944659374_1c65852df2_c.jpg" alt=""></p><p>服务供应商A和B希望在他们之间建立一个IPv6的BGP对等体。他们的IPv6地址和AS信息如下所示。</p><ul><li>对等体IP块: 2001:DB8:3::/64</li><li>供应商A: AS 100, 2001:DB8:1::/48</li><li>供应商B: AS 200, 2001:DB8:2::/48</li></ul><h3 id="centos-rhel安装quagga" tabindex="-1">CentOS/RHEL安装Quagga <a class="header-anchor" href="#centos-rhel安装quagga" aria-label="Permalink to “CentOS/RHEL安装Quagga”">​</a></h3><p>如果Quagga还没有安装，我们可以先使用yum安装。</p><pre><code># yum install quagga 
</code></pre><p>在CentOS/RHEL 7，SELinux策略会默认的阻止对于/usr/sbin/zebra配置目录的写操作，这会对我们将要介绍的安装操作有所影响。因此我们需要像下面这样关闭这个策略。如果你使用的是CentOS/RHEL 6可以跳过这一步。</p><pre><code># setsebool -P zebra_write_config 1 
</code></pre><h3 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to “创建配置文件”">​</a></h3><p>在安装过后，我们先创建配置文件zebra/bgpd作为配置流程的开始。</p><pre><code># cp /usr/share/doc/quagga-XXXXX/zebra.conf.sample /etc/quagga/zebra.conf
# cp /usr/share/doc/quagga-XXXXX/bgpd.conf.sample /etc/quagga/bgpd.conf
</code></pre><p>然后，允许这些服务开机自启。</p><p><strong>在 CentOS/RHEL 6:</strong></p><pre><code># service zebra start; service bgpd start
# chkconfig zebra on; chkconfig bgpd on 
</code></pre><p><strong>在 CentOS/RHEL 7:</strong></p><pre><code># systemctl start zebra; systemctl start bgpd
# systemctl enable zebra; systmectl enable bgpd 
</code></pre><p>Quagga内部提供一个叫作vtysh的shell，其界面与那些主流路由厂商Cisco或Juniper十分相似。启动vtysh shell命令行：</p><pre><code># vtysh
</code></pre><p>提示符将改为：</p><pre><code>router-a#
</code></pre><p>或</p><pre><code>router-b# 
</code></pre><p>在教程的其余部分，这个提示可以表明你正身处在哪个路由的vtysh shell中。</p><h3 id="为zebra指定日志文件" tabindex="-1">为Zebra指定日志文件 <a class="header-anchor" href="#为zebra指定日志文件" aria-label="Permalink to “为Zebra指定日志文件”">​</a></h3><p>来为Zebra配置日志文件，这会有助于调试。</p><p>首先，进入全局配置模式通过输入：</p><pre><code>router-a# configure terminal 
</code></pre><p>提示符将变更成：</p><pre><code>router-a(config)#
</code></pre><p>指定日志文件的位置。然后退出配置模式：</p><pre><code>router-a(config)# log file /var/log/quagga/quagga.log
router-a(config)# exit 
</code></pre><p>保存配置通过：</p><pre><code>router-a# write 
</code></pre><h3 id="配置接口ip地址" tabindex="-1">配置接口IP地址 <a class="header-anchor" href="#配置接口ip地址" aria-label="Permalink to “配置接口IP地址”">​</a></h3><p>现在，让我们为Quagga的物理接口配置IP地址。</p><p>首先，查看一下vtysh中现有的接口。</p><pre><code>router-a# show interfaces 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
## OUTPUT TRUNCATED ###
Interface eth1 is up, line protocol detection is disabled
## OUTPUT TRUNCATED ##
</code></pre><p>现在我们配置IPv6地址。</p><pre><code>router-a# conf terminal
router-a(config)# interface eth0
router-a(config-if)# ipv6 address 2001:db8:3::1/64
router-a(config-if)# interface eth1
router-a(config-if)# ipv6 address 2001:db8:1::1/64
</code></pre><p>在路由B上采用同样的方式分配IPv6地址。我将配置汇总成如下。</p><pre><code>router-b# show running-config 
</code></pre><hr><pre><code>interface eth0
ipv6 address 2001:db8:3::2/64

interface eth1
ipv6 address 2001:db8:2::1/64
</code></pre><p>由于两台路由的eth0端口同属一个子网，即2001：DB8：3::/64，你应该可以相互ping通。在保证ping通的情况下，我们开始下面的内容。</p><pre><code>router-a# ping ipv6 2001:db8:3::2 
</code></pre><hr><pre><code>PING 2001:db8:3::2(2001:db8:3::2) 56 data bytes
64 bytes from 2001:db8:3::2: icmp_seq=1 ttl=64 time=3.20 ms
64 bytes from 2001:db8:3::2: icmp_seq=2 ttl=64 time=1.05 ms
</code></pre><h3 id="步骤-1-ipv6-bgp-对等体" tabindex="-1">步骤 1: IPv6 BGP 对等体 <a class="header-anchor" href="#步骤-1-ipv6-bgp-对等体" aria-label="Permalink to “步骤 1: IPv6 BGP 对等体”">​</a></h3><p>本段，我们将在两个路由之间配置IPv6 BGP。首先，我们在路由A上指定BGP邻居。</p><pre><code>router-a# conf t
router-a(config)# router bgp 100
router-a(config-router)# no auto-summary
router-a(config-router)# no synchronization
router-a(config-router)# neighbor 2001:DB8:3::2 remote-as 200
</code></pre><p>然后，我们定义IPv6的地址族。在地址族中，我们需要定义要通告的网段，并激活邻居。</p><pre><code>router-a(config-router)# address-family ipv6
router-a(config-router-af)# network 2001:DB8:1::/48
router-a(config-router-af)# neighbor 2001:DB8:3::2 activate
</code></pre><p>我们在路由B上也实施相同的配置。这里提供我归总后的配置。</p><pre><code>router-b# conf t
router-b(config)# router bgp 200
router-b(config-router)# no auto-summary
router-b(config-router)# no synchronization
router-b(config-router)# neighbor 2001:DB8:3::1 remote-as 100
router-b(config-router)# address-family ipv6
router-b(config-router-af)# network 2001:DB8:2::/48
router-b(config-router-af)# neighbor 2001:DB8:3::1 activate
</code></pre>`,58)),p("p",null,[e[6]||(e[6]=r("如果一切顺利，在路由间将会形成一个IPv6 BGP会话。如果失败了，请确保",-1)),o(t,{href:"http://ask.xmodulo.com/open-port-firewall-centos-rhel.html"},{default:a(()=>[...e[5]||(e[5]=[r("在防火墙中开启了",-1)])]),_:1}),e[7]||(e[7]=r("必要的端口（TCP 179）。",-1))]),e[26]||(e[26]=n(`<p>我们使用以下命令来确认IPv6 BGP会话的信息。</p><p><strong>查看BGP汇总：</strong></p><pre><code>router-a# show bgp ipv6 unicast summary 
</code></pre><p><strong>查看BGP通告的路由：</strong></p><pre><code>router-a# show bgp ipv6 neighbors &lt;neighbor-IPv6-address&gt; advertised-routes 
</code></pre><p><strong>查看BGP获得的路由：</strong></p><pre><code>router-a# show bgp ipv6 neighbors &lt;neighbor-IPv6-address&gt; routes 
</code></pre><p><img src="https://farm8.staticflickr.com/7317/16379555088_6e29cb6884_b.jpg" alt=""></p><h3 id="步骤-2-过滤ipv6前缀" tabindex="-1">步骤 2： 过滤IPv6前缀 <a class="header-anchor" href="#步骤-2-过滤ipv6前缀" aria-label="Permalink to “步骤 2： 过滤IPv6前缀”">​</a></h3><p>正如我们在上面看到的输出信息那样，路由间通告了他们完整的/48 IPv6前缀。出于演示的目的，我们会考虑以下要求。</p><ul><li>Router-B将通告一个/64前缀，一个/56前缀，和一个完整的/48前缀.</li><li>Router-A将接受任由B提供的何形式的IPv6前缀，其中包含有/56和/64之间的网络掩码长度。</li></ul><p>我们将根据需要过滤的前缀，来使用路由器的前缀列表和路由映射。</p><p><img src="https://farm8.staticflickr.com/7367/16381297417_6549218289_c.jpg" alt=""></p><h4 id="为路由b修改通告的前缀" tabindex="-1">为路由B修改通告的前缀 <a class="header-anchor" href="#为路由b修改通告的前缀" aria-label="Permalink to “为路由B修改通告的前缀”">​</a></h4><p>目前，路由B只通告一个/48前缀。我们修改路由B的BGP配置使它可以通告额外的/56和/64前缀。</p><pre><code>router-b# conf t
router-b(config)# router bgp 200
router-b(config-router)# address-family ipv6
router-b(config-router-af)# network 2001:DB8:2::/56
router-b(config-router-af)# network 2001:DB8:2::/64
</code></pre><p>我们将路由A上验证了所有的前缀都获得到了。</p><p><img src="https://farm9.staticflickr.com/8598/16379761980_7c083ae977_b.jpg" alt=""></p><p>太好了！我们在路由A上收到了所有的前缀，那么我们可以更进一步创建前缀列表和路由映射来过滤这些前缀。</p><h4 id="创建前缀列表" tabindex="-1">创建前缀列表 <a class="header-anchor" href="#创建前缀列表" aria-label="Permalink to “创建前缀列表”">​</a></h4>`,20)),p("p",null,[e[9]||(e[9]=r("就像在",-1)),o(t,{href:"http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html"},{default:a(()=>[...e[8]||(e[8]=[r("上则教程中",-1)])]),_:1}),e[10]||(e[10]=r("描述的那样，前缀列表是一种机制用来匹配带有子网长度的IP地址前缀。按照我们指定的需求，我们需要在路由A的前缀列表中创建一则必要的条目。",-1))]),e[27]||(e[27]=n(`<pre><code>router-a# conf t
router-a(config)# ipv6 prefix-list FILTER-IPV6-PRFX permit 2001:DB8:2::/56 le 64
</code></pre><p>以上的命令会创建一个名为&#39;FILTER-IPV6-PRFX&#39;的前缀列表，用以匹配任何2001:DB8:2::池内掩码在56和64之间的所有前缀。</p><h4 id="创建并应用路由映射" tabindex="-1">创建并应用路由映射 <a class="header-anchor" href="#创建并应用路由映射" aria-label="Permalink to “创建并应用路由映射”">​</a></h4><p>现在已经在前缀列表中创建了条目，我们也应该相应的创建一条使用此条目的路由映射规则了。</p><pre><code>router-a# conf t
router-a(config)# route-map FILTER-IPV6-RMAP permit 10
router-a(config-route-map)# match ipv6 address prefix-list FILTER-IPV6-PRFX
</code></pre><p>以上的命令会创建一条名为&#39;FILTER-IPV6-RMAP&#39;的路由映射规则。这则规则将会允许与之前在前缀列表中创建&#39;FILTER-IPV6-PRFX&#39;所匹配的IPv6</p><p>要记住路由映射规则只有在应用在邻居或者端口的指定方向时才有效。我们将把路由映射应用到BGP的邻居配置中。我们将路由映射应用于入方向，作为进入路由端的前缀过滤器。</p><pre><code>router-a# conf t
router-a(config)# router bgp 100
router-a(config-router)# address-family ipv6
router-a(config-router-af)# neighbor 2001:DB8:3::2 route-map FILTER-IPV6-RMAP in
</code></pre><p>现在我们在路由A上再查看一边获得到的路由，我们应该只能看见两个被允许的前缀了。</p><p><img src="https://farm8.staticflickr.com/7337/16379762020_ec2dc39b31_c.jpg" alt=""></p><p><strong>注意</strong>： 你可能需要重置BGP会话来刷新路由表。</p><p>所有IPv6的BGP会话可以使用以下的命令重启：</p><pre><code>router-a# clear bgp ipv6 * 
</code></pre><p>我汇总了两个路由的配置，并做成了一张清晰的图片以便阅读。</p><p><img src="https://farm9.staticflickr.com/8672/16567240165_eee4398dc8_c.jpg" alt=""></p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>总结一下，这篇教程重点在于如何创建BGP对等体和IPv6的过滤。我们演示了如何向邻居BGP路由通告IPv6前缀，和如何过滤通告前缀或获得的通告。需要注意，本教程使用的过程可能会对网络供应商的网络运作有所影响，请谨慎参考。</p><p>希望这些对你有用。</p><hr>`,19)),p("p",null,[e[12]||(e[12]=r("via: ",-1)),o(t,{href:"http://xmodulo.com/ipv6-bgp-peering-filtering-quagga-bgp-router.html"},{default:a(()=>[...e[11]||(e[11]=[r("http://xmodulo.com/ipv6-bgp-peering-filtering-quagga-bgp-router.html",-1)])]),_:1})]),p("p",null,[e[16]||(e[16]=r("作者：",-1)),o(t,{href:"http://xmodulo.com/author/sarmed"},{default:a(()=>[...e[13]||(e[13]=[r("Sarmed Rahman",-1)])]),_:1}),e[17]||(e[17]=r(" 译者：",-1)),o(t,{href:"https://github.com/martin2011qi"},{default:a(()=>[...e[14]||(e[14]=[r("martin2011qi",-1)])]),_:1}),e[18]||(e[18]=r(" 校对：",-1)),o(t,{href:"https://github.com/wxy"},{default:a(()=>[...e[15]||(e[15]=[r("wxy",-1)])]),_:1})]),p("p",null,[e[21]||(e[21]=r("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[19]||(e[19]=[r("LCTT",-1)])]),_:1}),e[22]||(e[22]=r(" 原创翻译，",-1)),o(t,{href:"http://linux.cn/"},{default:a(()=>[...e[20]||(e[20]=[r("Linux中国",-1)])]),_:1}),e[23]||(e[23]=r(" 荣誉推出",-1))])])}const I=i(l,[["render",u]]);export{B as __pageData,I as default};
