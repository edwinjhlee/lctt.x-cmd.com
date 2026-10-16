import{_ as i,a0 as a,w as u,s,I as r,x as t,a1 as n,A as p,ao as g}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const R=JSON.parse('{"title":"使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器 | LCTT (201501) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器 | LCTT (201501) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201501/20141023 How to turn your CentOS box into a BGP router using Quagga","title":"使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器","tag":"201501","desc":""},"relativePath":"201501/20141023 How to turn your CentOS box into a BGP router using Quagga.md","filePath":"[post].md"}'),d={name:"201501/20141023 How to turn your CentOS box into a BGP router using Quagga.md"};function c(l,e,f,h,m,b){const o=a("Link");return u(),s("div",null,[e[21]||(e[21]=r("h1",{id:"使用-quagga-將你的-centos-系統變成一個-bgp-路由器",tabindex:"-1"},[t("使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器 "),r("a",{class:"header-anchor",href:"#使用-quagga-將你的-centos-系統變成一個-bgp-路由器","aria-label":"Permalink to “使用 Quagga 將你的 CentOS 系統變成一個 BGP 路由器”"},"​")],-1)),r("p",null,[e[1]||(e[1]=t("在",-1)),n(o,{href:"http://linux.cn/article-4232-1.html"},{default:p(()=>[...e[0]||(e[0]=[t("之前的教程中",-1)])]),_:1}),e[2]||(e[2]=t("，我對如何簡單地使用Quagga把CentOS系統變成一個不折不扣地OSPF路由器做了一些介紹。Quagga是一個開源路由軟件套件。在這個教程中，我將會重點講講",-1)),e[3]||(e[3]=r("strong",null,"如何把一個Linux系統變成一個BGP路由器，還是使用Quagga",-1)),e[4]||(e[4]=t("，演示如何建立BGP與其它BGP路由器對等。",-1))]),r("p",null,[e[6]||(e[6]=t("在我們進入細節之前，一些BGP的背景知識還是必要的。邊界網關協議（即BGP）是互聯網的域間路由協議的實際標準。在BGP術語中，全球互聯網是由成千上萬相關聯的自治系統(AS)組成，其中每一個AS代表每一個特定運營商提供的一個網絡管理域（",-1)),n(o,{href:"http://weibo.com/3181671860/BngyXxEUF"},{default:p(()=>[...e[5]||(e[5]=[t("據説",-1)])]),_:1}),e[7]||(e[7]=t("，美國前總統喬治.布什都有自己的 AS 編號）。",-1))]),e[22]||(e[22]=g(`<p>為了使其網絡在全球範圍內路由可達，每一個AS需要知道如何在英特網中到達其它的AS。這時候就需要BGP出來扮演這個角色了。BGP是一個AS去與相鄰的AS交換路由信息的語言。這些路由信息通常被稱為BGP線路或者BGP前綴。包括AS號(ASN；全球唯一號碼)以及相關的IP地址塊。一旦所有的BGP線路被當地的BGP路由表學習和記錄，每一個AS將會知道如何到達互聯網的任何公網IP。</p><p>在不同域(AS)之間路由的能力是BGP被稱為外部網關協議(EGP)或者域間協議的主要原因。就如一些路由協議，例如OSPF、IS-IS、RIP和EIGRP都是內部網關協議(IGPs)或者域內路由協議，用於處理一個域內的路由.</p><h3 id="測試方案" tabindex="-1">測試方案 <a class="header-anchor" href="#測試方案" aria-label="Permalink to “測試方案”">​</a></h3><p>在這個教程中，讓我們來使用以下拓撲。</p><p><img src="https://farm6.staticflickr.com/5598/15603223841_4c76343313_z.jpg" alt=""></p><p>我們假設運營商A想要建立一個BGP來與運營商B對等交換路由。它們的AS號和IP地址空間的細節如下所示：</p><ul><li><p><strong>運營商 A</strong>: ASN (100)， IP地址空間 (100.100.0.0/22)， 分配給BGP路由器eth1網卡的IP地址(100.100.1.1)</p></li><li><p><strong>運營商 B</strong>: ASN (200)， IP地址空間 (200.200.0.0/22)， 分配給BGP路由器eth1網卡的IP地址(200.200.1.1)</p></li></ul><p>路由器A和路由器B使用100.100.0.0/30子網來連接到對方。從理論上來説，任何子網從運營商那裏都是可達的、可互連的。在真實場景中，建議使用掩碼為30位的公網IP地址空間來實現運營商A和運營商B之間的連通。</p><h3 id="在-centos中安裝quagga" tabindex="-1">在 CentOS中安裝Quagga <a class="header-anchor" href="#在-centos中安裝quagga" aria-label="Permalink to “在 CentOS中安裝Quagga”">​</a></h3><p>如果Quagga還沒安裝好，我們可以使用yum來安裝Quagga。</p><pre><code># yum install quagga 
</code></pre><p>如果你正在使用的是CentOS7系統，你需要應用一下策略來設置SELinux。否則，SElinux將會阻止Zebra守護進程寫入它的配置目錄。如果你正在使用的是CentOS6，你可以跳過這一步。</p><pre><code># setsebool -P zebra_write_config 1 
</code></pre><p>Quagga軟件套件包含幾個守護進程，這些進程可以協同工作。關於BGP路由，我們將把重點放在建立以下2個守護進程。</p><ul><li><strong>Zebra</strong>:一個核心守護進程用於內核接口和靜態路由.</li><li><strong>BGPd</strong>:一個BGP守護進程.</li></ul><h3 id="配置日誌記錄" tabindex="-1">配置日誌記錄 <a class="header-anchor" href="#配置日誌記錄" aria-label="Permalink to “配置日誌記錄”">​</a></h3><p>在Quagga被安裝後，下一步就是配置Zebra來管理BGP路由器的網絡接口。我們通過創建一個Zebra配置文件和啓用日誌記錄來開始第一步。</p><pre><code># cp /usr/share/doc/quagga-XXXXX/zebra.conf.sample /etc/quagga/zebra.conf 
</code></pre><p>在CentOS6系統中：</p><pre><code># service zebra start
# chkconfig zebra on
</code></pre><p>在CentOS7系統中:</p><pre><code># systemctl start zebra
# systemctl enable zebra 
</code></pre><p>Quagga提供了一個叫做vtysh特有的命令列工具，你可以輸入與路由器廠商(例如Cisco和Juniper)兼容和支持的命令。我們將使用vtysh shell來配置BGP路由在教程的其餘部分。</p><p>啓動vtysh shell 命令，輸入：</p><pre><code># vtysh
</code></pre><p>提示將被改成該主機名，這表明你是在vtysh shell中。</p><pre><code>Router-A#
</code></pre><p>現在我們將使用以下命令來為Zebra配置日誌文件：</p><pre><code>Router-A# configure terminal
Router-A(config)# log file /var/log/quagga/quagga.log
Router-A(config)# exit
</code></pre><p>永久保存Zebra配置：</p><pre><code>Router-A# write
</code></pre><p>在路由器B操作同樣的步驟。</p><h3 id="配置對等的ip地址" tabindex="-1">配置對等的IP地址 <a class="header-anchor" href="#配置對等的ip地址" aria-label="Permalink to “配置對等的IP地址”">​</a></h3><p>下一步，我們將在可用的接口上配置對等的IP地址。</p><pre><code>Router-A# show interface   #顯示接口信息
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
. . . . .
Interface eth1 is up, line protocol detection is disabled
. . . . .
</code></pre><p>配置eth0接口的參數：</p><pre><code>site-A-RTR# configure terminal
site-A-RTR(config)# interface eth0
site-A-RTR(config-if)# ip address 100.100.0.1/30
site-A-RTR(config-if)# description &quot;to Router-B&quot;
site-A-RTR(config-if)# no shutdown
site-A-RTR(config-if)# exit
</code></pre><p>繼續配置eth1接口的參數：</p><pre><code>site-A-RTR(config)# interface eth1
site-A-RTR(config-if)# ip address 100.100.1.1/24
site-A-RTR(config-if)# description &quot;test ip from provider A network&quot;
site-A-RTR(config-if)# no shutdown
site-A-RTR(config-if)# exit
</code></pre><p>現在確認配置：</p><pre><code>Router-A# show interface 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
  Description: &quot;to Router-B&quot;
  inet 100.100.0.1/30 broadcast 100.100.0.3
Interface eth1 is up, line protocol detection is disabled
  Description: &quot;test ip from provider A network&quot;
  inet 100.100.1.1/24 broadcast 100.100.1.255
</code></pre><hr><pre><code>Router-A# show interface description   #顯示接口描述
</code></pre><hr><pre><code>Interface       Status  Protocol  Description
eth0            up      unknown   &quot;to Router-B&quot;
eth1            up      unknown   &quot;test ip from provider A network&quot;
</code></pre><p>如果一切看起來正常，別忘記保存配置。</p><pre><code>Router-A# write
</code></pre><p>同樣地，在路由器B重複一次配置。</p><p>在我們繼續下一步之前，確認下彼此的IP是可以ping通的。</p><pre><code>Router-A# ping 100.100.0.2 
</code></pre><hr><pre><code>PING 100.100.0.2 (100.100.0.2) 56(84) bytes of data.
64 bytes from 100.100.0.2: icmp_seq=1 ttl=64 time=0.616 ms
</code></pre><p>下一步，我們將繼續配置BGP對等和前綴設置。</p><h3 id="配置bgp對等" tabindex="-1">配置BGP對等 <a class="header-anchor" href="#配置bgp對等" aria-label="Permalink to “配置BGP對等”">​</a></h3><p>Quagga守護進程負責BGP的服務叫bgpd。首先我們來準備它的配置文件。</p><pre><code># cp /usr/share/doc/quagga-XXXXXXX/bgpd.conf.sample /etc/quagga/bgpd.conf 
</code></pre><p>在CentOS6系統中：</p><pre><code># service bgpd start
# chkconfig bgpd on
</code></pre><p>在CentOS7中：</p><pre><code># systemctl start bgpd
# systemctl enable bgpd
</code></pre><p>現在，讓我們來進入Quagga 的shell。</p><pre><code># vtysh
</code></pre><p>第一步，我們要確認當前沒有已經配置的BGP會話。在一些版本，我們可能會發現一個AS號為7675的BGP會話。由於我們不需要這個會話，所以把它移除。</p><pre><code>Router-A# show running-config 
</code></pre><hr><pre><code>... ... ...
router bgp 7675
 bgp router-id 200.200.1.1
... ... ... 
</code></pre><p>我們將移除一些預先配置好的BGP會話，並建立我們所需的會話取而代之。</p><pre><code>Router-A# configure terminal
Router-A(config)# no router bgp 7675
Router-A(config)# router bgp 100
Router-A(config)# no auto-summary
Router-A(config)# no synchronizaiton
Router-A(config-router)# neighbor 100.100.0.2 remote-as 200
Router-A(config-router)# neighbor 100.100.0.2 description &quot;provider B&quot;
Router-A(config-router)# exit
Router-A(config)# exit
Router-A# write 
</code></pre><p>路由器B將用同樣的方式來進行配置，以下配置提供作為參考。</p><pre><code>Router-B# configure terminal
Router-B(config)# no router bgp 7675
Router-B(config)# router bgp 200
Router-B(config)# no auto-summary
Router-B(config)# no synchronizaiton
Router-B(config-router)# neighbor 100.100.0.1 remote-as 100
Router-B(config-router)# neighbor 100.100.0.1 description &quot;provider A&quot;
Router-B(config-router)# exit
Router-B(config)# exit
Router-B# write 
</code></pre><p>當相關的路由器都被配置好，兩台路由器之間的對等將被建立。現在讓我們通過運行下面的命令來確認：</p><pre><code>Router-A# show ip bgp summary 
</code></pre><p><img src="https://farm6.staticflickr.com/5614/15420135700_e3568d2e5f_z.jpg" alt=""></p><p>從輸出中，我們可以看到&quot;State/PfxRcd&quot;部分。如果對等關閉，輸出將會顯示&quot;Idle&quot;或者&quot;Active&#39;。請記住，單詞&#39;Active&#39;這個詞在路由器中總是不好的意思。它意味着路由器正在積極地尋找鄰居、前綴或者路由。當對等是up狀態，&quot;State/PfxRcd&quot;下的輸出狀態將會從特殊鄰居接收到前綴號。</p><p>在這個例子的輸出中，BGP對等只是在AS100和AS200之間呈up狀態。因此沒有前綴被更改，所以最右邊列的數值是0。</p><h3 id="配置前綴通告" tabindex="-1">配置前綴通告 <a class="header-anchor" href="#配置前綴通告" aria-label="Permalink to “配置前綴通告”">​</a></h3><p>正如一開始提到，AS 100將以100.100.0.0/22作為通告，在我們的例子中AS 200將同樣以200.200.0.0/22作為通告。這些前綴需要被添加到BGP配置如下。</p><p>在路由器-A中：</p><pre><code>Router-A# configure terminal
Router-A(config)# router bgp 100
Router-A(config)# network 100.100.0.0/22
Router-A(config)# exit
Router-A# write
</code></pre><p>在路由器-B中：</p><pre><code>Router-B# configure terminal
Router-B(config)# router bgp 200
Router-B(config)# network 200.200.0.0/22
Router-B(config)# exit
Router-B# write 
</code></pre><p>在這一點上，兩個路由器會根據需要開始通告前綴。</p><h3 id="測試前綴通告" tabindex="-1">測試前綴通告 <a class="header-anchor" href="#測試前綴通告" aria-label="Permalink to “測試前綴通告”">​</a></h3><p>首先，讓我們來確認前綴的數量是否被改變了。</p><pre><code>Router-A# show ip bgp summary 
</code></pre><p><img src="https://farm6.staticflickr.com/5608/15419095659_0ebb384eee_z.jpg" alt=""></p><p>為了查看所接收的更多前綴細節，我們可以使用以下命令，這個命令用於顯示鄰居100.100.0.2所接收到的前綴總數。</p><pre><code> Router-A# show ip bgp neighbors 100.100.0.2 advertised-routes 
</code></pre><p><img src="https://farm6.staticflickr.com/5597/15419618208_4604e5639a_z.jpg" alt=""></p><p>查看哪一個前綴是我們從鄰居接收到的：</p><pre><code>Router-A# show ip bgp neighbors 100.100.0.2 routes 
</code></pre><p><img src="https://farm4.staticflickr.com/3935/15606556462_e17eae7f49_z.jpg" alt=""></p><p>我們也可以查看所有的BGP路由器：</p><pre><code>Router-A# show ip bgp 
</code></pre><p><img src="https://farm6.staticflickr.com/5609/15419618228_5c776423a5_z.jpg" alt=""></p><p>以上的命令都可以被用於檢查哪個路由器通過BGP在路由器表中被學習到。</p><pre><code>Router-A# show ip route 
</code></pre><hr><pre><code>代碼: K - 內核路由, C - 已鏈接 , S - 靜態 , R - 路由信息協議 , O - 開放式最短路徑優先協議,
    
       I - 中間系統到中間系統的路由選擇協議, B - 邊界網關協議, &gt; - 選擇路由, * - FIB 路由
   
C&gt;* 100.100.0.0/30 is directly connected, eth0
C&gt;* 100.100.1.0/24 is directly connected, eth1
B&gt;* 200.200.0.0/22 [20/0] via 100.100.0.2, eth0, 00:06:45
</code></pre><hr><pre><code>Router-A# show ip route bgp 
</code></pre><hr><pre><code>B&gt;* 200.200.0.0/22 [20/0] via 100.100.0.2, eth0, 00:08:13
</code></pre><p>BGP學習到的路由也將會在Linux路由表中出現。</p><pre><code>[root@Router-A~]# ip route 
</code></pre><hr><pre><code>100.100.0.0/30 dev eth0  proto kernel  scope link  src 100.100.0.1
100.100.1.0/24 dev eth1  proto kernel  scope link  src 100.100.1.1
200.200.0.0/22 via 100.100.0.2 dev eth0  proto zebra
</code></pre><p>最後，我們將使用ping命令來測試連通。結果將成功ping通。</p><pre><code>[root@Router-A~]# ping 200.200.1.1 -c 2
</code></pre><p>總而言之，本教程將重點放在如何在CentOS系統中運行一個基本的BGP路由器。這個教程讓你開始學習BGP的配置，一些更高級的設置例如設置過濾器、BGP屬性調整、本地優先級和預先路徑準備等，我將會在後續的教程中覆蓋這些主題。</p><p>希望這篇教程能給大家一些幫助。</p><hr>`,116)),r("p",null,[e[9]||(e[9]=t("via: ",-1)),n(o,{href:"http://xmodulo.com/centos-bgp-router-quagga.html"},{default:p(()=>[...e[8]||(e[8]=[t("http://xmodulo.com/centos-bgp-router-quagga.html",-1)])]),_:1})]),r("p",null,[e[13]||(e[13]=t("作者：",-1)),n(o,{href:"http://xmodulo.com/author/sarmed"},{default:p(()=>[...e[10]||(e[10]=[t("Sarmed Rahman",-1)])]),_:1}),e[14]||(e[14]=t(" 譯者：",-1)),n(o,{href:"https://github.com/disylee"},{default:p(()=>[...e[11]||(e[11]=[t("disylee",-1)])]),_:1}),e[15]||(e[15]=t(" 校對：",-1)),n(o,{href:"https://github.com/wxy"},{default:p(()=>[...e[12]||(e[12]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[18]||(e[18]=t("本文由 ",-1)),n(o,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[16]||(e[16]=[t("LCTT",-1)])]),_:1}),e[19]||(e[19]=t(" 原創翻譯，",-1)),n(o,{href:"http://linux.cn/"},{default:p(()=>[...e[17]||(e[17]=[t("Linux中國",-1)])]),_:1}),e[20]||(e[20]=t(" 榮譽推出",-1))])])}const A=i(d,[["render",c]]);export{R as __pageData,A as default};
