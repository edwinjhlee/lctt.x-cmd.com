import{_ as n,a0 as s,w as l,s as u,I as t,x as r,a1 as p,A as a,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const G=JSON.parse('{"title":"如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由 | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由 | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20150202 How to filter BGP routes in Quagga BGP router","title":"如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由","tag":"201510","desc":""},"relativePath":"201510/20150202 How to filter BGP routes in Quagga BGP router.md","filePath":"[post].md"}'),g={name:"201510/20150202 How to filter BGP routes in Quagga BGP router.md"};function d(m,e,P,f,c,B){const o=s("Link");return l(),u("div",null,[e[23]||(e[23]=t("h1",{id:"如何使用-quagga-bgp-邊界網關協議-路由器來過濾-bgp-路由",tabindex:"-1"},[r("如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由 "),t("a",{class:"header-anchor",href:"#如何使用-quagga-bgp-邊界網關協議-路由器來過濾-bgp-路由","aria-label":"Permalink to “如何使用 Quagga BGP（邊界網關協議）路由器來過濾 BGP 路由”"},"​")],-1)),t("p",null,[e[1]||(e[1]=r("在",-1)),p(o,{href:"https://linux.cn/article-4609-1.html"},{default:a(()=>[...e[0]||(e[0]=[r("之前的文章",-1)])]),_:1}),e[2]||(e[2]=r("中，我們介紹瞭如何使用 Quagga 將 CentOS 服務器變成一個 BGP 路由器，也介紹了 BGP 對等體和前綴交換設置。在本教程中，我們將重點放在如何使用",-1)),e[3]||(e[3]=t("strong",null,"前綴列表（prefix-list）",-1)),e[4]||(e[4]=r("和",-1)),e[5]||(e[5]=t("strong",null,"路由映射（route-map）",-1)),e[6]||(e[6]=r("來分別控制數據注入和數據輸出。",-1))]),e[24]||(e[24]=i('<p>之前的文章已經説過，BGP 的路由判定是基於前綴的收取和前綴的廣播。為避免錯誤的路由，你需要使用一些過濾機制來控制這些前綴的收發。舉個例子，如果你的一個 BGP 鄰居開始廣播一個本不屬於它們的前綴，而你也將錯就錯地接收了這些不正常前綴，並且也將它轉發到網絡上，這個轉發過程會不斷進行下去，永不停止（所謂的“黑洞”就這樣產生了）。所以確保這樣的前綴不會被收到，或者不會轉發到任何網絡，要達到這個目的，你可以使用前綴列表和路由映射。前者是基於前綴的過濾機制，後者是更為常用的基於前綴的策略，可用於精調過濾機制。</p><p>本文會向你展示如何在 Quagga 中使用前綴列表和路由映射。</p><h3 id="拓撲和需求" tabindex="-1">拓撲和需求 <a class="header-anchor" href="#拓撲和需求" aria-label="Permalink to “拓撲和需求”">​</a></h3><p>本教程使用下面的拓撲結構。</p><p><img src="https://farm8.staticflickr.com/7394/16407625405_4f7d24d1f6_c.jpg" alt=""></p><p>服務供應商A和供應商B已經將對方設置成為 eBGP 對等體，實現互相通信。他們的自治系統號和前綴分別如下所示。</p><ul><li><strong>對等區段</strong>: 192.168.1.0/24</li><li><strong>服務供應商A</strong>: 自治系統號 100, 前綴 10.10.0.0/16</li><li><strong>服務供應商B</strong>: 自治系統號 200, 前綴 10.20.0.0/16</li></ul><p>在這個場景中，供應商B只想從A接收 10.10.10.0/23, 10.10.10.0/24 和 10.10.11.0/24 三個前綴。</p><h3 id="安裝-quagga-和設置-bgp-對等體" tabindex="-1">安裝 Quagga 和設置 BGP 對等體 <a class="header-anchor" href="#安裝-quagga-和設置-bgp-對等體" aria-label="Permalink to “安裝 Quagga 和設置 BGP 對等體”">​</a></h3>',9)),t("p",null,[e[8]||(e[8]=r("在",-1)),p(o,{href:"https://linux.cn/article-4609-1.html"},{default:a(()=>[...e[7]||(e[7]=[r("之前的教程",-1)])]),_:1}),e[9]||(e[9]=r("中，我們已經寫了安裝 Quagga 和設置 BGP 對等體的方法，所以這裏就不再詳細説明了，只簡單介紹下 BGP 配置和前綴廣播：",-1))]),e[25]||(e[25]=i(`<p><img src="https://farm8.staticflickr.com/7428/16219986668_97cb193b15_c.jpg" alt=""></p><p>上圖説明 BGP 對等體已經開啓。Router-A 在向 router-B 廣播多個前綴，而 Router-B 也在向 router-A 廣播一個前綴 10.20.0.0/16。兩個路由器都能正確無誤地收發前綴。</p><h3 id="創建前綴列表" tabindex="-1">創建前綴列表 <a class="header-anchor" href="#創建前綴列表" aria-label="Permalink to “創建前綴列表”">​</a></h3><p>路由器可以使用 ACL 或前綴列表來過濾一個前綴。前綴列表比 ACL 更常用，因為前者處理步驟少，而且易於創建和維護。</p><pre><code>ip prefix-list DEMO-PRFX permit 192.168.0.0/23
</code></pre><p>上面的命令創建了名為“DEMO-FRFX”的前綴列表，只允許存在 192.168.0.0/23 這個前綴。</p><p>前綴列表的另一個強大功能是支持子網掩碼區間，請看下面的例子：</p><pre><code>ip prefix-list DEMO-PRFX permit 192.168.0.0/23 le 24
</code></pre><p>這個命令創建的前綴列表包含在 192.168.0.0/23 和 /24 之間的前綴，分別是 192.168.0.0/23, 192.168.0.0/24 和 192.168.1.0/24。運算符“le”表示小於等於，你也可以使用“ge”表示大於等於。</p><p>一個前綴列表語句可以有多個允許或拒絕操作。每個語句都自動或手動地分配有一個序列號。</p><p>如果存在多個前綴列表語句，則這些語句會按序列號順序被依次執行。在配置前綴列表的時候，我們需要注意在所有前綴列表語句之後是<strong>隱性拒絕</strong>語句，就是説凡是不被明顯允許的，都會被拒絕。</p><p>如果要設置成允許所有前綴，前綴列表語句設置如下：</p><pre><code>ip prefix-list DEMO-PRFX permit 0.0.0.0/0 le 32
</code></pre><p>我們已經知道如何創建前綴列表語句了，現在我們要創建一個名為“PRFX-LST”的前綴列表，來滿足我們實驗場景的需求。</p><pre><code>router-b# conf t
router-b(config)# ip prefix-list PRFX-LST permit 10.10.10.0/23 le 24
</code></pre><h3 id="創建路由映射" tabindex="-1">創建路由映射 <a class="header-anchor" href="#創建路由映射" aria-label="Permalink to “創建路由映射”">​</a></h3><p>除了前綴列表和 ACL，這裏還有另一種機制，叫做路由映射，也可以在 BGP 路由器中控制前綴。事實上，路由映射針對前綴匹配的微調效果比前綴列表和 ACL 都強。</p><p>與前綴列表類似，路由映射語句也可以指定允許和拒絕操作，也需要分配一個序列號。每個路由匹配可以有多個允許或拒絕操作。例如：</p><pre><code>route-map DEMO-RMAP permit 10
</code></pre><p>上面的語句創建了名為“DEMO-RMAP”的路由映射，添加序列號為10的允許操作。現在我們在這個序列號所對應的路由映射下使用 match 命令進行匹配。</p><pre><code>router-a(config-route-map)# match (press ? in the keyboard)
</code></pre><hr><pre><code>  as-path       Match BGP AS path list
  community     Match BGP community list
  extcommunity  Match BGP/VPN extended community list
  interface     match first hop interface of route
  ip            IP information
  ipv6          IPv6 information
  metric        Match metric of route
  origin        BGP origin code
  peer          Match peer address
  probability   Match portion of routes defined by percentage value
  tag           Match tag of route
</code></pre><p>如你所見，路由映射可以匹配很多屬性，在本教程中匹配的是前綴。</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
</code></pre><p>這個 match 命令會匹配之前建好的前綴列表中允許的 IP 地址（也就是前綴 192.168.0.0/23, 192.168.0.0/24 和 192.168.1.0/24）。</p><p>接下來，我們可以使用 set 命令來修改這些屬性。例子如下：</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
set (press ? in keyboard)
</code></pre><hr><pre><code>  aggregator          BGP aggregator attribute
  as-path             Transform BGP AS-path attribute
  atomic-aggregate    BGP atomic aggregate attribute
  comm-list           set BGP community list (for deletion)
  community           BGP community attribute
  extcommunity        BGP extended community attribute
  forwarding-address  Forwarding Address
  ip                  IP information
  ipv6                IPv6 information
  local-preference    BGP local preference path attribute
  metric              Metric value for destination routing protocol
  metric-type         Type of metric
  origin              BGP origin code
  originator-id       BGP originator ID attribute
  src                 src address for route
  tag                 Tag value for routing protocol
  vpnv4               VPNv4 information
  weight              BGP weight for routing table
</code></pre><p>如你所見，set 命令也可以修改很多屬性。為了作個示範，我們修改一下 BGP 的 local-preference 這個屬性。</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
set local-preference 500
</code></pre><p>如同前綴列表，路由映射語句的末尾也有隱性拒絕操作。所以我們需要添加另外一個允許語句（使用序列號20）來允許所有前綴。</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
set local-preference 500
!
route-map DEMO-RMAP permit 20
</code></pre><p>序列號20未指定任何匹配命令，所以默認匹配所有前綴。在這個路由映射語句中，所有的前綴都被允許。</p><p>回想一下，我們的需求是隻允許或只拒絕一些前綴，所以上面的 set 命令不應該存在於這個場景中。我們只需要一個允許語句，如下如示：</p><pre><code>router-b# conf t
router-b(config)# route-map RMAP permit 10
router-b(config-route-map)# match ip address prefix-list PRFX-LST
</code></pre><p>這個路由映射才是我們需要的效果。</p><h3 id="應用路由映射" tabindex="-1">應用路由映射 <a class="header-anchor" href="#應用路由映射" aria-label="Permalink to “應用路由映射”">​</a></h3><p>注意，在被應用於一個接口或一個 BGP 鄰居之前，ACL、前綴列表和路由映射都不會生效。與 ACL 和前綴列表一樣，一條路由映射語句也能被多個接口或鄰居使用。然而，一個接口或一個鄰居只能有一條路由映射語句應用於輸入端，以及一條路由映射語句應用於輸出端。</p><p>下面我們將這條路由映射語句應用於 router-B 的 BGP 配置，為 router-B 的鄰居 192.168.1.1 設置輸入前綴廣播。</p><pre><code>router-b# conf terminal
router-b(config)# router bgp 200
router-b(config-router)# neighbor 192.168.1.1 route-map RMAP in
</code></pre><p>現在檢查下廣播路由和收取路由。</p><p>顯示廣播路由的命令：</p><pre><code>show ip bgp neighbor-IP advertised-routes
</code></pre><p>顯示收取路由的命令：</p><pre><code>show ip bgp neighbor-IP routes
</code></pre><p><img src="https://farm8.staticflickr.com/7424/16221405429_4d86119548_c.jpg" alt=""></p><p>可以看到，router-A 有4條路由前綴到達 router-B，而 router-B 只接收3條。查看一下範圍，我們就能知道只有被路由映射允許的前綴才能在 router-B 上顯示出來，其他的前綴一概丟棄。</p><p><strong>小提示</strong>：如果接收前綴內容沒有刷新，試試重置下 BGP 會話，使用這個命令：<code>clear ip bgp neighbor-IP</code>。本教程中命令如下：</p><pre><code>clear ip bgp 192.168.1.1
</code></pre><p>我們能看到系統已經滿足我們的要求了。接下來我們可以在 router-A 和 router-B 上創建相似的前綴列表和路由映射語句來更好地控制輸入輸出的前綴。</p><p>這裏把配置過程總結一下，方便查看。</p><pre><code>router bgp 200
network 10.20.0.0/16
neighbor 192.168.1.1 remote-as 100
neighbor 192.168.1.1 route-map RMAP in
!
ip prefix-list PRFX-LST seq 5 permit 10.10.10.0/23 le 24
!
route-map RMAP permit 10
match ip address prefix-list PRFX-LST
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在本教程中我們演示瞭如何在 Quagga 中設置前綴列表和路由映射來過濾 BGP 路由。我們也展示瞭如何將前綴列表結合進路由映射來進行輸入前綴的微調功能。你可以參考這些方法來設置滿足自己需求的前綴列表和路由映射。這些工具是保護網絡免受路由毒化和來自 bogon 路由（LCTT 譯註：指不該出現在internet路由表中的地址）的廣播。</p><p>希望本文對你有幫助。</p><hr>`,58)),t("p",null,[e[11]||(e[11]=r("via: ",-1)),p(o,{href:"http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html"},{default:a(()=>[...e[10]||(e[10]=[r("http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=r("作者：",-1)),p(o,{href:"http://xmodulo.com/author/sarmed"},{default:a(()=>[...e[12]||(e[12]=[r("Sarmed Rahman",-1)])]),_:1}),e[16]||(e[16]=r(" 譯者：",-1)),p(o,{href:"https://github.com/bazz2"},{default:a(()=>[...e[13]||(e[13]=[r("bazz2",-1)])]),_:1}),e[17]||(e[17]=r(" 校對：",-1)),p(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[14]||(e[14]=[r("wxy",-1)])]),_:1})]),t("p",null,[e[20]||(e[20]=r("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[18]||(e[18]=[r("LCTT",-1)])]),_:1}),e[21]||(e[21]=r(" 原創翻譯，",-1)),p(o,{href:"http://linux.cn/"},{default:a(()=>[...e[19]||(e[19]=[r("Linux中國",-1)])]),_:1}),e[22]||(e[22]=r(" 榮譽推出",-1))])])}const x=n(g,[["render",d]]);export{G as __pageData,x as default};
