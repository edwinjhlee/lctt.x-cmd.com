import{_ as i,a0 as s,w as g,s as d,I as p,x as r,a1 as o,A as a,ao as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const B=JSON.parse('{"title":"如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾 | LCTT x X-CMD","titleTemplate":false,"description":"如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150225 How to set up IPv6 BGP peering and filtering in Quagga BGP router","title":"如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾","tag":"201509","desc":""},"relativePath":"201509/20150225 How to set up IPv6 BGP peering and filtering in Quagga BGP router.md","filePath":"[post].md"}'),l={name:"201509/20150225 How to set up IPv6 BGP peering and filtering in Quagga BGP router.md"};function u(f,e,c,P,b,m){const t=s("Link");return g(),d("div",null,[e[24]||(e[24]=p("h1",{id:"如何設置在-quagga-bgp-路由器中設置-ipv6-的-bgp-對等體和過濾",tabindex:"-1"},[r("如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾 "),p("a",{class:"header-anchor",href:"#如何設置在-quagga-bgp-路由器中設置-ipv6-的-bgp-對等體和過濾","aria-label":"Permalink to “如何設置在 Quagga BGP 路由器中設置 IPv6 的 BGP 對等體和過濾”"},"​")],-1)),p("p",null,[e[2]||(e[2]=r("在之前的教程中，我們演示瞭如何使用Quagga建立一個",-1)),o(t,{href:"https://linux.cn/article-4232-1.html"},{default:a(()=>[...e[0]||(e[0]=[r("完備的BGP路由器",-1)])]),_:1}),e[3]||(e[3]=r("和配置",-1)),o(t,{href:"http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html"},{default:a(()=>[...e[1]||(e[1]=[r("前綴過濾",-1)])]),_:1}),e[4]||(e[4]=r("。在本教程中，我們會向你演示如何創建IPv6 BGP對等體並通過BGP通告IPv6前綴。同時我們也將演示如何使用前綴列表和路由映射特性來過濾通告的或者獲取到的IPv6前綴。",-1))]),e[25]||(e[25]=n(`<h3 id="拓撲" tabindex="-1">拓撲 <a class="header-anchor" href="#拓撲" aria-label="Permalink to “拓撲”">​</a></h3><p>教程中，我們主要參考如下拓撲。</p><p><img src="https://farm9.staticflickr.com/8599/15944659374_1c65852df2_c.jpg" alt=""></p><p>服務供應商A和B希望在他們之間建立一個IPv6的BGP對等體。他們的IPv6地址和AS信息如下所示。</p><ul><li>對等體IP塊: 2001:DB8:3::/64</li><li>供應商A: AS 100, 2001:DB8:1::/48</li><li>供應商B: AS 200, 2001:DB8:2::/48</li></ul><h3 id="centos-rhel安裝quagga" tabindex="-1">CentOS/RHEL安裝Quagga <a class="header-anchor" href="#centos-rhel安裝quagga" aria-label="Permalink to “CentOS/RHEL安裝Quagga”">​</a></h3><p>如果Quagga還沒有安裝，我們可以先使用yum安裝。</p><pre><code># yum install quagga 
</code></pre><p>在CentOS/RHEL 7，SELinux策略會默認的阻止對於/usr/sbin/zebra配置目錄的寫操作，這會對我們將要介紹的安裝操作有所影響。因此我們需要像下面這樣關閉這個策略。如果你使用的是CentOS/RHEL 6可以跳過這一步。</p><pre><code># setsebool -P zebra_write_config 1 
</code></pre><h3 id="創建配置文件" tabindex="-1">創建配置文件 <a class="header-anchor" href="#創建配置文件" aria-label="Permalink to “創建配置文件”">​</a></h3><p>在安裝過後，我們先創建配置文件zebra/bgpd作為配置流程的開始。</p><pre><code># cp /usr/share/doc/quagga-XXXXX/zebra.conf.sample /etc/quagga/zebra.conf
# cp /usr/share/doc/quagga-XXXXX/bgpd.conf.sample /etc/quagga/bgpd.conf
</code></pre><p>然後，允許這些服務開機自啓。</p><p><strong>在 CentOS/RHEL 6:</strong></p><pre><code># service zebra start; service bgpd start
# chkconfig zebra on; chkconfig bgpd on 
</code></pre><p><strong>在 CentOS/RHEL 7:</strong></p><pre><code># systemctl start zebra; systemctl start bgpd
# systemctl enable zebra; systmectl enable bgpd 
</code></pre><p>Quagga內部提供一個叫作vtysh的shell，其界面與那些主流路由廠商Cisco或Juniper十分相似。啓動vtysh shell命令列：</p><pre><code># vtysh
</code></pre><p>提示符將改為：</p><pre><code>router-a#
</code></pre><p>或</p><pre><code>router-b# 
</code></pre><p>在教程的其餘部分，這個提示可以表明你正身處在哪個路由的vtysh shell中。</p><h3 id="為zebra指定日誌文件" tabindex="-1">為Zebra指定日誌文件 <a class="header-anchor" href="#為zebra指定日誌文件" aria-label="Permalink to “為Zebra指定日誌文件”">​</a></h3><p>來為Zebra配置日誌文件，這會有助於調試。</p><p>首先，進入全局配置模式通過輸入：</p><pre><code>router-a# configure terminal 
</code></pre><p>提示符將變更成：</p><pre><code>router-a(config)#
</code></pre><p>指定日誌文件的位置。然後退出配置模式：</p><pre><code>router-a(config)# log file /var/log/quagga/quagga.log
router-a(config)# exit 
</code></pre><p>保存配置通過：</p><pre><code>router-a# write 
</code></pre><h3 id="配置接口ip地址" tabindex="-1">配置接口IP地址 <a class="header-anchor" href="#配置接口ip地址" aria-label="Permalink to “配置接口IP地址”">​</a></h3><p>現在，讓我們為Quagga的物理接口配置IP地址。</p><p>首先，查看一下vtysh中現有的接口。</p><pre><code>router-a# show interfaces 
</code></pre><hr><pre><code>Interface eth0 is up, line protocol detection is disabled
## OUTPUT TRUNCATED ###
Interface eth1 is up, line protocol detection is disabled
## OUTPUT TRUNCATED ##
</code></pre><p>現在我們配置IPv6地址。</p><pre><code>router-a# conf terminal
router-a(config)# interface eth0
router-a(config-if)# ipv6 address 2001:db8:3::1/64
router-a(config-if)# interface eth1
router-a(config-if)# ipv6 address 2001:db8:1::1/64
</code></pre><p>在路由B上採用同樣的方式分配IPv6地址。我將配置彙總成如下。</p><pre><code>router-b# show running-config 
</code></pre><hr><pre><code>interface eth0
ipv6 address 2001:db8:3::2/64

interface eth1
ipv6 address 2001:db8:2::1/64
</code></pre><p>由於兩台路由的eth0端口同屬一個子網，即2001：DB8：3::/64，你應該可以相互ping通。在保證ping通的情況下，我們開始下面的內容。</p><pre><code>router-a# ping ipv6 2001:db8:3::2 
</code></pre><hr><pre><code>PING 2001:db8:3::2(2001:db8:3::2) 56 data bytes
64 bytes from 2001:db8:3::2: icmp_seq=1 ttl=64 time=3.20 ms
64 bytes from 2001:db8:3::2: icmp_seq=2 ttl=64 time=1.05 ms
</code></pre><h3 id="步驟-1-ipv6-bgp-對等體" tabindex="-1">步驟 1: IPv6 BGP 對等體 <a class="header-anchor" href="#步驟-1-ipv6-bgp-對等體" aria-label="Permalink to “步驟 1: IPv6 BGP 對等體”">​</a></h3><p>本段，我們將在兩個路由之間配置IPv6 BGP。首先，我們在路由A上指定BGP鄰居。</p><pre><code>router-a# conf t
router-a(config)# router bgp 100
router-a(config-router)# no auto-summary
router-a(config-router)# no synchronization
router-a(config-router)# neighbor 2001:DB8:3::2 remote-as 200
</code></pre><p>然後，我們定義IPv6的地址族。在地址族中，我們需要定義要通告的網段，並激活鄰居。</p><pre><code>router-a(config-router)# address-family ipv6
router-a(config-router-af)# network 2001:DB8:1::/48
router-a(config-router-af)# neighbor 2001:DB8:3::2 activate
</code></pre><p>我們在路由B上也實施相同的配置。這裏提供我歸總後的配置。</p><pre><code>router-b# conf t
router-b(config)# router bgp 200
router-b(config-router)# no auto-summary
router-b(config-router)# no synchronization
router-b(config-router)# neighbor 2001:DB8:3::1 remote-as 100
router-b(config-router)# address-family ipv6
router-b(config-router-af)# network 2001:DB8:2::/48
router-b(config-router-af)# neighbor 2001:DB8:3::1 activate
</code></pre>`,58)),p("p",null,[e[6]||(e[6]=r("如果一切順利，在路由間將會形成一個IPv6 BGP會話。如果失敗了，請確保",-1)),o(t,{href:"http://ask.xmodulo.com/open-port-firewall-centos-rhel.html"},{default:a(()=>[...e[5]||(e[5]=[r("在防火牆中開啓了",-1)])]),_:1}),e[7]||(e[7]=r("必要的端口（TCP 179）。",-1))]),e[26]||(e[26]=n(`<p>我們使用以下命令來確認IPv6 BGP會話的信息。</p><p><strong>查看BGP彙總：</strong></p><pre><code>router-a# show bgp ipv6 unicast summary 
</code></pre><p><strong>查看BGP通告的路由：</strong></p><pre><code>router-a# show bgp ipv6 neighbors &lt;neighbor-IPv6-address&gt; advertised-routes 
</code></pre><p><strong>查看BGP獲得的路由：</strong></p><pre><code>router-a# show bgp ipv6 neighbors &lt;neighbor-IPv6-address&gt; routes 
</code></pre><p><img src="https://farm8.staticflickr.com/7317/16379555088_6e29cb6884_b.jpg" alt=""></p><h3 id="步驟-2-過濾ipv6前綴" tabindex="-1">步驟 2： 過濾IPv6前綴 <a class="header-anchor" href="#步驟-2-過濾ipv6前綴" aria-label="Permalink to “步驟 2： 過濾IPv6前綴”">​</a></h3><p>正如我們在上面看到的輸出信息那樣，路由間通告了他們完整的/48 IPv6前綴。出於演示的目的，我們會考慮以下要求。</p><ul><li>Router-B將通告一個/64前綴，一個/56前綴，和一個完整的/48前綴.</li><li>Router-A將接受任由B提供的何形式的IPv6前綴，其中包含有/56和/64之間的網絡掩碼長度。</li></ul><p>我們將根據需要過濾的前綴，來使用路由器的前綴列表和路由映射。</p><p><img src="https://farm8.staticflickr.com/7367/16381297417_6549218289_c.jpg" alt=""></p><h4 id="為路由b修改通告的前綴" tabindex="-1">為路由B修改通告的前綴 <a class="header-anchor" href="#為路由b修改通告的前綴" aria-label="Permalink to “為路由B修改通告的前綴”">​</a></h4><p>目前，路由B只通告一個/48前綴。我們修改路由B的BGP配置使它可以通告額外的/56和/64前綴。</p><pre><code>router-b# conf t
router-b(config)# router bgp 200
router-b(config-router)# address-family ipv6
router-b(config-router-af)# network 2001:DB8:2::/56
router-b(config-router-af)# network 2001:DB8:2::/64
</code></pre><p>我們將路由A上驗證了所有的前綴都獲得到了。</p><p><img src="https://farm9.staticflickr.com/8598/16379761980_7c083ae977_b.jpg" alt=""></p><p>太好了！我們在路由A上收到了所有的前綴，那麼我們可以更進一步創建前綴列表和路由映射來過濾這些前綴。</p><h4 id="創建前綴列表" tabindex="-1">創建前綴列表 <a class="header-anchor" href="#創建前綴列表" aria-label="Permalink to “創建前綴列表”">​</a></h4>`,20)),p("p",null,[e[9]||(e[9]=r("就像在",-1)),o(t,{href:"http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html"},{default:a(()=>[...e[8]||(e[8]=[r("上則教程中",-1)])]),_:1}),e[10]||(e[10]=r("描述的那樣，前綴列表是一種機制用來匹配帶有子網長度的IP地址前綴。按照我們指定的需求，我們需要在路由A的前綴列表中創建一則必要的條目。",-1))]),e[27]||(e[27]=n(`<pre><code>router-a# conf t
router-a(config)# ipv6 prefix-list FILTER-IPV6-PRFX permit 2001:DB8:2::/56 le 64
</code></pre><p>以上的命令會創建一個名為&#39;FILTER-IPV6-PRFX&#39;的前綴列表，用以匹配任何2001:DB8:2::池內掩碼在56和64之間的所有前綴。</p><h4 id="創建並應用路由映射" tabindex="-1">創建並應用路由映射 <a class="header-anchor" href="#創建並應用路由映射" aria-label="Permalink to “創建並應用路由映射”">​</a></h4><p>現在已經在前綴列表中創建了條目，我們也應該相應的創建一條使用此條目的路由映射規則了。</p><pre><code>router-a# conf t
router-a(config)# route-map FILTER-IPV6-RMAP permit 10
router-a(config-route-map)# match ipv6 address prefix-list FILTER-IPV6-PRFX
</code></pre><p>以上的命令會創建一條名為&#39;FILTER-IPV6-RMAP&#39;的路由映射規則。這則規則將會允許與之前在前綴列表中創建&#39;FILTER-IPV6-PRFX&#39;所匹配的IPv6</p><p>要記住路由映射規則只有在應用在鄰居或者端口的指定方向時才有效。我們將把路由映射應用到BGP的鄰居配置中。我們將路由映射應用於入方向，作為進入路由端的前綴過濾器。</p><pre><code>router-a# conf t
router-a(config)# router bgp 100
router-a(config-router)# address-family ipv6
router-a(config-router-af)# neighbor 2001:DB8:3::2 route-map FILTER-IPV6-RMAP in
</code></pre><p>現在我們在路由A上再查看一邊獲得到的路由，我們應該只能看見兩個被允許的前綴了。</p><p><img src="https://farm8.staticflickr.com/7337/16379762020_ec2dc39b31_c.jpg" alt=""></p><p><strong>注意</strong>： 你可能需要重置BGP會話來刷新路由表。</p><p>所有IPv6的BGP會話可以使用以下的命令重啓：</p><pre><code>router-a# clear bgp ipv6 * 
</code></pre><p>我彙總了兩個路由的配置，並做成了一張清晰的圖片以便閲讀。</p><p><img src="https://farm9.staticflickr.com/8672/16567240165_eee4398dc8_c.jpg" alt=""></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>總結一下，這篇教程重點在於如何創建BGP對等體和IPv6的過濾。我們演示瞭如何向鄰居BGP路由通告IPv6前綴，和如何過濾通告前綴或獲得的通告。需要注意，本教程使用的過程可能會對網絡供應商的網絡運作有所影響，請謹慎參考。</p><p>希望這些對你有用。</p><hr>`,19)),p("p",null,[e[12]||(e[12]=r("via: ",-1)),o(t,{href:"http://xmodulo.com/ipv6-bgp-peering-filtering-quagga-bgp-router.html"},{default:a(()=>[...e[11]||(e[11]=[r("http://xmodulo.com/ipv6-bgp-peering-filtering-quagga-bgp-router.html",-1)])]),_:1})]),p("p",null,[e[16]||(e[16]=r("作者：",-1)),o(t,{href:"http://xmodulo.com/author/sarmed"},{default:a(()=>[...e[13]||(e[13]=[r("Sarmed Rahman",-1)])]),_:1}),e[17]||(e[17]=r(" 譯者：",-1)),o(t,{href:"https://github.com/martin2011qi"},{default:a(()=>[...e[14]||(e[14]=[r("martin2011qi",-1)])]),_:1}),e[18]||(e[18]=r(" 校對：",-1)),o(t,{href:"https://github.com/wxy"},{default:a(()=>[...e[15]||(e[15]=[r("wxy",-1)])]),_:1})]),p("p",null,[e[21]||(e[21]=r("本文由 ",-1)),o(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[19]||(e[19]=[r("LCTT",-1)])]),_:1}),e[22]||(e[22]=r(" 原創翻譯，",-1)),o(t,{href:"http://linux.cn/"},{default:a(()=>[...e[20]||(e[20]=[r("Linux中國",-1)])]),_:1}),e[23]||(e[23]=r(" 榮譽推出",-1))])])}const I=i(l,[["render",u]]);export{B as __pageData,I as default};
