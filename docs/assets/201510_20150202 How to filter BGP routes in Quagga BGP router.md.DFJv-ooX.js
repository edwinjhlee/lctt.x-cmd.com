import{_ as n,a0 as s,w as l,s as u,I as t,x as r,a1 as p,A as a,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const G=JSON.parse('{"title":"如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由 | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由 | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20150202 How to filter BGP routes in Quagga BGP router","title":"如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由","tag":"201510","desc":""},"relativePath":"201510/20150202 How to filter BGP routes in Quagga BGP router.md","filePath":"[post].md"}'),g={name:"201510/20150202 How to filter BGP routes in Quagga BGP router.md"};function d(m,e,P,f,c,B){const o=s("Link");return l(),u("div",null,[e[23]||(e[23]=t("h1",{id:"如何使用-quagga-bgp-边界网关协议-路由器来过滤-bgp-路由",tabindex:"-1"},[r("如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由 "),t("a",{class:"header-anchor",href:"#如何使用-quagga-bgp-边界网关协议-路由器来过滤-bgp-路由","aria-label":"Permalink to “如何使用 Quagga BGP（边界网关协议）路由器来过滤 BGP 路由”"},"​")],-1)),t("p",null,[e[1]||(e[1]=r("在",-1)),p(o,{href:"https://linux.cn/article-4609-1.html"},{default:a(()=>[...e[0]||(e[0]=[r("之前的文章",-1)])]),_:1}),e[2]||(e[2]=r("中，我们介绍了如何使用 Quagga 将 CentOS 服务器变成一个 BGP 路由器，也介绍了 BGP 对等体和前缀交换设置。在本教程中，我们将重点放在如何使用",-1)),e[3]||(e[3]=t("strong",null,"前缀列表（prefix-list）",-1)),e[4]||(e[4]=r("和",-1)),e[5]||(e[5]=t("strong",null,"路由映射（route-map）",-1)),e[6]||(e[6]=r("来分别控制数据注入和数据输出。",-1))]),e[24]||(e[24]=i('<p>之前的文章已经说过，BGP 的路由判定是基于前缀的收取和前缀的广播。为避免错误的路由，你需要使用一些过滤机制来控制这些前缀的收发。举个例子，如果你的一个 BGP 邻居开始广播一个本不属于它们的前缀，而你也将错就错地接收了这些不正常前缀，并且也将它转发到网络上，这个转发过程会不断进行下去，永不停止（所谓的“黑洞”就这样产生了）。所以确保这样的前缀不会被收到，或者不会转发到任何网络，要达到这个目的，你可以使用前缀列表和路由映射。前者是基于前缀的过滤机制，后者是更为常用的基于前缀的策略，可用于精调过滤机制。</p><p>本文会向你展示如何在 Quagga 中使用前缀列表和路由映射。</p><h3 id="拓扑和需求" tabindex="-1">拓扑和需求 <a class="header-anchor" href="#拓扑和需求" aria-label="Permalink to “拓扑和需求”">​</a></h3><p>本教程使用下面的拓扑结构。</p><p><img src="https://farm8.staticflickr.com/7394/16407625405_4f7d24d1f6_c.jpg" alt=""></p><p>服务供应商A和供应商B已经将对方设置成为 eBGP 对等体，实现互相通信。他们的自治系统号和前缀分别如下所示。</p><ul><li><strong>对等区段</strong>: 192.168.1.0/24</li><li><strong>服务供应商A</strong>: 自治系统号 100, 前缀 10.10.0.0/16</li><li><strong>服务供应商B</strong>: 自治系统号 200, 前缀 10.20.0.0/16</li></ul><p>在这个场景中，供应商B只想从A接收 10.10.10.0/23, 10.10.10.0/24 和 10.10.11.0/24 三个前缀。</p><h3 id="安装-quagga-和设置-bgp-对等体" tabindex="-1">安装 Quagga 和设置 BGP 对等体 <a class="header-anchor" href="#安装-quagga-和设置-bgp-对等体" aria-label="Permalink to “安装 Quagga 和设置 BGP 对等体”">​</a></h3>',9)),t("p",null,[e[8]||(e[8]=r("在",-1)),p(o,{href:"https://linux.cn/article-4609-1.html"},{default:a(()=>[...e[7]||(e[7]=[r("之前的教程",-1)])]),_:1}),e[9]||(e[9]=r("中，我们已经写了安装 Quagga 和设置 BGP 对等体的方法，所以这里就不再详细说明了，只简单介绍下 BGP 配置和前缀广播：",-1))]),e[25]||(e[25]=i(`<p><img src="https://farm8.staticflickr.com/7428/16219986668_97cb193b15_c.jpg" alt=""></p><p>上图说明 BGP 对等体已经开启。Router-A 在向 router-B 广播多个前缀，而 Router-B 也在向 router-A 广播一个前缀 10.20.0.0/16。两个路由器都能正确无误地收发前缀。</p><h3 id="创建前缀列表" tabindex="-1">创建前缀列表 <a class="header-anchor" href="#创建前缀列表" aria-label="Permalink to “创建前缀列表”">​</a></h3><p>路由器可以使用 ACL 或前缀列表来过滤一个前缀。前缀列表比 ACL 更常用，因为前者处理步骤少，而且易于创建和维护。</p><pre><code>ip prefix-list DEMO-PRFX permit 192.168.0.0/23
</code></pre><p>上面的命令创建了名为“DEMO-FRFX”的前缀列表，只允许存在 192.168.0.0/23 这个前缀。</p><p>前缀列表的另一个强大功能是支持子网掩码区间，请看下面的例子：</p><pre><code>ip prefix-list DEMO-PRFX permit 192.168.0.0/23 le 24
</code></pre><p>这个命令创建的前缀列表包含在 192.168.0.0/23 和 /24 之间的前缀，分别是 192.168.0.0/23, 192.168.0.0/24 和 192.168.1.0/24。运算符“le”表示小于等于，你也可以使用“ge”表示大于等于。</p><p>一个前缀列表语句可以有多个允许或拒绝操作。每个语句都自动或手动地分配有一个序列号。</p><p>如果存在多个前缀列表语句，则这些语句会按序列号顺序被依次执行。在配置前缀列表的时候，我们需要注意在所有前缀列表语句之后是<strong>隐性拒绝</strong>语句，就是说凡是不被明显允许的，都会被拒绝。</p><p>如果要设置成允许所有前缀，前缀列表语句设置如下：</p><pre><code>ip prefix-list DEMO-PRFX permit 0.0.0.0/0 le 32
</code></pre><p>我们已经知道如何创建前缀列表语句了，现在我们要创建一个名为“PRFX-LST”的前缀列表，来满足我们实验场景的需求。</p><pre><code>router-b# conf t
router-b(config)# ip prefix-list PRFX-LST permit 10.10.10.0/23 le 24
</code></pre><h3 id="创建路由映射" tabindex="-1">创建路由映射 <a class="header-anchor" href="#创建路由映射" aria-label="Permalink to “创建路由映射”">​</a></h3><p>除了前缀列表和 ACL，这里还有另一种机制，叫做路由映射，也可以在 BGP 路由器中控制前缀。事实上，路由映射针对前缀匹配的微调效果比前缀列表和 ACL 都强。</p><p>与前缀列表类似，路由映射语句也可以指定允许和拒绝操作，也需要分配一个序列号。每个路由匹配可以有多个允许或拒绝操作。例如：</p><pre><code>route-map DEMO-RMAP permit 10
</code></pre><p>上面的语句创建了名为“DEMO-RMAP”的路由映射，添加序列号为10的允许操作。现在我们在这个序列号所对应的路由映射下使用 match 命令进行匹配。</p><pre><code>router-a(config-route-map)# match (press ? in the keyboard)
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
</code></pre><p>如你所见，路由映射可以匹配很多属性，在本教程中匹配的是前缀。</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
</code></pre><p>这个 match 命令会匹配之前建好的前缀列表中允许的 IP 地址（也就是前缀 192.168.0.0/23, 192.168.0.0/24 和 192.168.1.0/24）。</p><p>接下来，我们可以使用 set 命令来修改这些属性。例子如下：</p><pre><code>route-map DEMO-RMAP permit 10
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
</code></pre><p>如你所见，set 命令也可以修改很多属性。为了作个示范，我们修改一下 BGP 的 local-preference 这个属性。</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
set local-preference 500
</code></pre><p>如同前缀列表，路由映射语句的末尾也有隐性拒绝操作。所以我们需要添加另外一个允许语句（使用序列号20）来允许所有前缀。</p><pre><code>route-map DEMO-RMAP permit 10
match ip address prefix-list DEMO-PRFX
set local-preference 500
!
route-map DEMO-RMAP permit 20
</code></pre><p>序列号20未指定任何匹配命令，所以默认匹配所有前缀。在这个路由映射语句中，所有的前缀都被允许。</p><p>回想一下，我们的需求是只允许或只拒绝一些前缀，所以上面的 set 命令不应该存在于这个场景中。我们只需要一个允许语句，如下如示：</p><pre><code>router-b# conf t
router-b(config)# route-map RMAP permit 10
router-b(config-route-map)# match ip address prefix-list PRFX-LST
</code></pre><p>这个路由映射才是我们需要的效果。</p><h3 id="应用路由映射" tabindex="-1">应用路由映射 <a class="header-anchor" href="#应用路由映射" aria-label="Permalink to “应用路由映射”">​</a></h3><p>注意，在被应用于一个接口或一个 BGP 邻居之前，ACL、前缀列表和路由映射都不会生效。与 ACL 和前缀列表一样，一条路由映射语句也能被多个接口或邻居使用。然而，一个接口或一个邻居只能有一条路由映射语句应用于输入端，以及一条路由映射语句应用于输出端。</p><p>下面我们将这条路由映射语句应用于 router-B 的 BGP 配置，为 router-B 的邻居 192.168.1.1 设置输入前缀广播。</p><pre><code>router-b# conf terminal
router-b(config)# router bgp 200
router-b(config-router)# neighbor 192.168.1.1 route-map RMAP in
</code></pre><p>现在检查下广播路由和收取路由。</p><p>显示广播路由的命令：</p><pre><code>show ip bgp neighbor-IP advertised-routes
</code></pre><p>显示收取路由的命令：</p><pre><code>show ip bgp neighbor-IP routes
</code></pre><p><img src="https://farm8.staticflickr.com/7424/16221405429_4d86119548_c.jpg" alt=""></p><p>可以看到，router-A 有4条路由前缀到达 router-B，而 router-B 只接收3条。查看一下范围，我们就能知道只有被路由映射允许的前缀才能在 router-B 上显示出来，其他的前缀一概丢弃。</p><p><strong>小提示</strong>：如果接收前缀内容没有刷新，试试重置下 BGP 会话，使用这个命令：<code>clear ip bgp neighbor-IP</code>。本教程中命令如下：</p><pre><code>clear ip bgp 192.168.1.1
</code></pre><p>我们能看到系统已经满足我们的要求了。接下来我们可以在 router-A 和 router-B 上创建相似的前缀列表和路由映射语句来更好地控制输入输出的前缀。</p><p>这里把配置过程总结一下，方便查看。</p><pre><code>router bgp 200
network 10.20.0.0/16
neighbor 192.168.1.1 remote-as 100
neighbor 192.168.1.1 route-map RMAP in
!
ip prefix-list PRFX-LST seq 5 permit 10.10.10.0/23 le 24
!
route-map RMAP permit 10
match ip address prefix-list PRFX-LST
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在本教程中我们演示了如何在 Quagga 中设置前缀列表和路由映射来过滤 BGP 路由。我们也展示了如何将前缀列表结合进路由映射来进行输入前缀的微调功能。你可以参考这些方法来设置满足自己需求的前缀列表和路由映射。这些工具是保护网络免受路由毒化和来自 bogon 路由（LCTT 译注：指不该出现在internet路由表中的地址）的广播。</p><p>希望本文对你有帮助。</p><hr>`,58)),t("p",null,[e[11]||(e[11]=r("via: ",-1)),p(o,{href:"http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html"},{default:a(()=>[...e[10]||(e[10]=[r("http://xmodulo.com/filter-bgp-routes-quagga-bgp-router.html",-1)])]),_:1})]),t("p",null,[e[15]||(e[15]=r("作者：",-1)),p(o,{href:"http://xmodulo.com/author/sarmed"},{default:a(()=>[...e[12]||(e[12]=[r("Sarmed Rahman",-1)])]),_:1}),e[16]||(e[16]=r(" 译者：",-1)),p(o,{href:"https://github.com/bazz2"},{default:a(()=>[...e[13]||(e[13]=[r("bazz2",-1)])]),_:1}),e[17]||(e[17]=r(" 校对：",-1)),p(o,{href:"https://github.com/wxy"},{default:a(()=>[...e[14]||(e[14]=[r("wxy",-1)])]),_:1})]),t("p",null,[e[20]||(e[20]=r("本文由 ",-1)),p(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[18]||(e[18]=[r("LCTT",-1)])]),_:1}),e[21]||(e[21]=r(" 原创翻译，",-1)),p(o,{href:"http://linux.cn/"},{default:a(()=>[...e[19]||(e[19]=[r("Linux中国",-1)])]),_:1}),e[22]||(e[22]=r(" 荣誉推出",-1))])])}const x=n(g,[["render",d]]);export{G as __pageData,x as default};
