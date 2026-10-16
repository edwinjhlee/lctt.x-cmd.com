import{_ as p,a0 as s,w as d,s as g,I as a,x as t,a1 as n,A as r,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器 | LCTT x X-CMD","titleTemplate":false,"description":"想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140928 How to turn your CentOS box into an OSPF router using Quagga","title":"想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器","tag":"201411","desc":""},"relativePath":"201411/20140928 How to turn your CentOS box into an OSPF router using Quagga.md","filePath":"[post].md"}'),u={name:"201411/20140928 How to turn your CentOS box into an OSPF router using Quagga.md"};function c(l,e,f,h,R,S){const o=s("Link");return d(),g("div",null,[e[18]||(e[18]=a("h1",{id:"想玩路由器嗎-使用-quagga-將你的-centos-變成-ospf-路由器",tabindex:"-1"},[t("想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器 "),a("a",{class:"header-anchor",href:"#想玩路由器嗎-使用-quagga-將你的-centos-變成-ospf-路由器","aria-label":"Permalink to “想玩路由器嗎？使用 Quagga 將你的 CentOS 變成 OSPF 路由器”"},"​")],-1)),a("p",null,[n(o,{href:"http://www.nongnu.org/quagga/"},{default:r(()=>[...e[0]||(e[0]=[t("Quagga",-1)])]),_:1}),e[1]||(e[1]=t("是一個開源路由軟件套件，可以將Linux變成支持如RIP、OSPF、BGP和IS-IS等主要路由協議的路由器。它具有對IPv4和IPv6的完整支持，並支持路由/前綴過濾。Quagga可以是你生命中的救星，以防你的生產路由器一旦宕機，而你沒有備用的設備而只能等待更換。通過適當的配置，Quagga甚至可以作為生產路由器。",-1))]),e[19]||(e[19]=i(`<p>本教程中，我們將連接假設之間具有專線連接的兩個分支機構網絡（例如，192.168.1.0/24和172.17.1.0/24）。</p><p><img src="https://farm4.staticflickr.com/3861/15172727969_13cb7f037f_b.jpg" alt=""></p><p>我們的CentOS位於所述專用鏈路的兩端。兩台主機名分別設置為“site-A-RTR”和“site-B-RTR&#39;。下面是IP地址的詳細信息。</p><ul><li><strong>Site-A</strong>: 192.168.1.0/24</li><li><strong>Site-B</strong>: 172.16.1.0/24</li><li><strong>兩個 Linux 路由器之間的對等網絡</strong>: 10.10.10.0/30</li></ul><p>Quagga包括了幾個協同工作的守護進程。在本教程中，我們將重點建立以下守護進程。</p><ol><li><strong>Zebra</strong>: 核心守護進程，負責內核接口和靜態路由。</li><li><strong>Ospfd</strong>: IPv4 OSPF 守護進程。</li></ol><h3 id="在centos上安裝quagga" tabindex="-1">在CentOS上安裝Quagga <a class="header-anchor" href="#在centos上安裝quagga" aria-label="Permalink to “在CentOS上安裝Quagga”">​</a></h3><p>我們使用yum安裝Quagga。</p><pre><code># yum install quagga 
</code></pre>`,9)),a("p",null,[e[3]||(e[3]=t("在CentOS7，SELinux默認會阻止quagga將配置文件寫到/usr/sbin/zebra。這個SELinux策略會干擾我們接下來要介紹的安裝過程，所以我們要禁用此策略。對於這一點，無論是",-1)),n(o,{href:"http://xmodulo.com/how-to-disable-selinux.html"},{default:r(()=>[...e[2]||(e[2]=[t("關閉SELinux",-1)])]),_:1}),e[4]||(e[4]=t("（這裏不推薦），還是如下啓用“zebra_write_config”都可以。如果你使用的是CentOS 6的請跳過此步驟。",-1))]),e[20]||(e[20]=i(`<pre><code># setsebool -P zebra_write_config 1 
</code></pre><p>如果沒有做這個修改，在我們嘗試在Quagga命令列中保存配置的時候看到如下錯誤。</p><pre><code>Can&#39;t open configuration file /etc/quagga/zebra.conf.OS1Uu5.
</code></pre><p>安裝完Quagga後，我們要配置必要的對等IP地址，並更新OSPF設置。Quagga自帶了一個命令列稱為vtysh。vtysh裏面用到的Quagga命令與主要的路由器廠商如思科和Juniper是相似的。</p><h3 id="步驟-1-配置-zebra" tabindex="-1">步驟 1: 配置 Zebra <a class="header-anchor" href="#步驟-1-配置-zebra" aria-label="Permalink to “步驟 1: 配置 Zebra”">​</a></h3><p>我們首先創建Zebra配置文件，並啓用Zebra守護進程。</p><pre><code># cp /usr/share/doc/quagga-XXXXX/zebra.conf.sample /etc/quagga/zebra.conf
# service zebra start
# chkconfig zebra on 
</code></pre><p>啓動vtysh命令列：</p><pre><code># vtysh 
</code></pre><p>首先，我們為Zebra配置日誌文件。輸入下面的命令進入vtysh的全局配置模式：</p><pre><code>site-A-RTR# configure terminal
</code></pre><p>指定日誌文件位置，接着退出模式：</p><pre><code>site-A-RTR(config)# log file /var/log/quagga/quagga.log
site-A-RTR(config)# exit
</code></pre><p>永久保存配置：</p><pre><code>site-A-RTR# write
</code></pre><p>接下來，我們要確定可用的接口並按需配置它們的IP地址。</p><pre><code>site-A-RTR# show interface 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
. . . . .
Interface eth1 is up, line protocol detection is disabled
. . . . .
</code></pre><p>配置eth0參數：</p><pre><code>site-A-RTR# configure terminal
site-A-RTR(config)# interface eth0
site-A-RTR(config-if)# ip address 10.10.10.1/30
site-A-RTR(config-if)# description to-site-B
site-A-RTR(config-if)# no shutdown 
</code></pre><p>繼續配置eth1參數：</p><pre><code>site-A-RTR(config)# interface eth1
site-A-RTR(config-if)# ip address 192.168.1.1/24
site-A-RTR(config-if)# description to-site-A-LAN
site-A-RTR(config-if)# no shutdown 
</code></pre><p>現在驗證配置:</p><pre><code>site-A-RTR(config-if)# do show interface 
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
</code></pre><p>在site-B上重複上面配置IP地址的步驟。</p><p>如果一切順利，你應該可以在site-A的服務器上ping通site-B上的對等IP地址10.10.10.2了。</p><p>注意：一旦Zebra的守護進程啓動了，在vtysh命令列中的任何改變都會立即生效。因此沒有必要在更改配置後重啓Zebra守護進程。</p><h3 id="步驟-2-配置ospf" tabindex="-1">步驟 2: 配置OSPF <a class="header-anchor" href="#步驟-2-配置ospf" aria-label="Permalink to “步驟 2: 配置OSPF”">​</a></h3><p>我們首先創建OSPF配置文件，並啓動OSPF守護進程：</p><pre><code># cp /usr/share/doc/quagga-XXXXX/ospfd.conf.sample /etc/quagga/ospfd.conf
# service ospfd start
# chkconfig ospfd on 
</code></pre><p>現在啓動vtysh命令列來繼續OSPF配置：</p><pre><code># vtysh
</code></pre><p>輸入路由配置模式:</p><pre><code>site-A-RTR# configure terminal
site-A-RTR(config)# router ospf
</code></pre><p>可選配置路由id:</p><pre><code>site-A-RTR(config-router)# router-id 10.10.10.1
</code></pre><p>添加在OSPF中的網絡:</p><pre><code>site-A-RTR(config-router)# network 10.10.10.0/30 area 0
site-A-RTR(config-router)# network 192.168.1.0/24 area 0
</code></pre><p>永久保存配置:</p><pre><code>site-A-RTR(config-router)# do write
</code></pre><p>在site-B上重複和上面相似的OSPF配置:</p><pre><code>site-B-RTR(config-router)# network 10.10.10.0/30 area 0
site-B-RTR(config-router)# network 172.16.1.0/24 area 0
site-B-RTR(config-router)# do write 
</code></pre><p>OSPF的鄰居現在應該啓動了。只要ospfd在運行，通過vtysh的任何OSPF相關配置的改變都會立即生效而不必重啓ospfd。</p><p>下一節，我們會驗證我們的Quagga設置。</p><h3 id="驗證" tabindex="-1">驗證 <a class="header-anchor" href="#驗證" aria-label="Permalink to “驗證”">​</a></h3><h4 id="_1-通過ping測試" tabindex="-1">1. 通過ping測試 <a class="header-anchor" href="#_1-通過ping測試" aria-label="Permalink to “1. 通過ping測試”">​</a></h4><p>首先你應該可以從site-A ping同site-B的LAN子網。確保你的防火牆沒有阻止ping的流量。</p><pre><code>[root@site-A-RTR ~]# ping 172.16.1.1 -c 2 
</code></pre><h4 id="_2-檢查路由表" tabindex="-1">2. 檢查路由表 <a class="header-anchor" href="#_2-檢查路由表" aria-label="Permalink to “2. 檢查路由表”">​</a></h4><p>必要的路由應該同時出現在內核與Quagga理由表中。</p><pre><code>[root@site-A-RTR ~]# ip route 
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
</code></pre><h4 id="_3-驗證ospf鄰居和路由" tabindex="-1">3. 驗證OSPF鄰居和路由 <a class="header-anchor" href="#_3-驗證ospf鄰居和路由" aria-label="Permalink to “3. 驗證OSPF鄰居和路由”">​</a></h4><p>在vtysh命令列中，你可以檢查必要的鄰居是否在線與是否已經學習了合適的路由。</p><pre><code>[root@site-A-RTR ~]# vtysh
site-A-RTR# show ip ospf neighbor 
</code></pre><p><img src="https://farm3.staticflickr.com/2943/15160942468_d348241bd5_z.jpg" alt=""></p><p>本教程中，我們將重點放在使用Quagga配置基本的OSPF。在一般情況下，Quagga能讓我們能夠輕鬆在一台普通的Linux機器上配置動態路由協議，如OSPF、RIP或BGP。啓用了Quagga的機器可以與你網絡中的其他路由器進行通信和交換路由信息。由於它支持主要的開放標準的路由協議，它或許是許多情況下的首選。更重要的是，Quagga的命令列界面與主要路由器廠商如思科和Juniper幾乎是相同的，這使得部署和維護Quagga機器變得非常容易。</p><p>希望這些對你們有幫助。</p><hr>`,73)),a("p",null,[e[6]||(e[6]=t("via: ",-1)),n(o,{href:"http://xmodulo.com/turn-centos-box-into-ospf-router-quagga.html"},{default:r(()=>[...e[5]||(e[5]=[t("http://xmodulo.com/turn-centos-box-into-ospf-router-quagga.html",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=t("作者：",-1)),n(o,{href:"http://xmodulo.com/author/sarmed"},{default:r(()=>[...e[7]||(e[7]=[t("Sarmed Rahman",-1)])]),_:1}),e[11]||(e[11]=t(" 譯者：",-1)),n(o,{href:"https://github.com/geekpi"},{default:r(()=>[...e[8]||(e[8]=[t("geekpi",-1)])]),_:1}),e[12]||(e[12]=t(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[t("wxy",-1)])]),_:1})]),a("p",null,[e[15]||(e[15]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[t("LCTT",-1)])]),_:1}),e[16]||(e[16]=t(" 原創翻譯，",-1)),n(o,{href:"http://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[t("Linux中國",-1)])]),_:1}),e[17]||(e[17]=t(" 榮譽推出",-1))])])}const m=p(u,[["render",c]]);export{b as __pageData,m as default};
