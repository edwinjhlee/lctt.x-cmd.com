import{_ as t,a0 as c,w as r,s as d,ao as i,I as l,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"NMState：一個聲明式網絡配置工具 | LCTT x X-CMD","titleTemplate":false,"description":"NMState：一個聲明式網絡配置工具 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"NMState：一個聲明式網絡配置工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"NMState：一個聲明式網絡配置工具 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210809 NMState- A declarative networking config tool","title":"NMState：一個聲明式網絡配置工具","tag":"202110","desc":""},"relativePath":"202110/20210809 NMState- A declarative networking config tool.md","filePath":"[post].md"}'),o={name:"202110/20210809 NMState- A declarative networking config tool.md"};function h(u,s,f,g,b,m){const a=c("Link");return r(),d("div",null,[s[20]||(s[20]=i('<h1 id="nmstate-一個聲明式網絡配置工具" tabindex="-1">NMState：一個聲明式網絡配置工具 <a class="header-anchor" href="#nmstate-一個聲明式網絡配置工具" aria-label="Permalink to “NMState：一個聲明式網絡配置工具”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202110/08/145714mqcyh6sshchomyot.jpg" alt=""></p><p>這篇文章描述並演示了 NMState，這是一個使用聲明式方法配置主機的網絡管理器。這意味着你可以通過 API 定義所需的配置狀態，而工具則通過<ruby>提供者<rt>provider</rt></ruby>來應用配置。</p><h3 id="配置方法-命令式與聲明式" tabindex="-1">配置方法：命令式與聲明式 <a class="header-anchor" href="#配置方法-命令式與聲明式" aria-label="Permalink to “配置方法：命令式與聲明式”">​</a></h3><p>網絡管理有時候是一項非常複雜的任務，這取決於環境的規模和多樣性。在 IT 的早期，網絡管理依賴於網絡管理員在網絡設備上手動執行命令。如今，<ruby>基礎設施即代碼<rt>Infrastructure as Code</rt></ruby>（IaC）允許以不同的方式將這些任務自動化。z這基本上有兩種方法：命令式或聲明式。</p><p>在命令式方法中，你會定義“如何”達到所需的配置狀態。而在聲明式範式裏則定義了“什麼”是所需的配置狀態，所以它不確定哪些步驟是必需的，也不確定它們必須以何種順序執行。這種方法目前正在聚集更多的人員參與，你可以在目前使用的大多數管理和編排工具上找到它。</p><h3 id="nmstate-一個聲明式的工具" tabindex="-1">NMState：一個聲明式的工具 <a class="header-anchor" href="#nmstate-一個聲明式的工具" aria-label="Permalink to “NMState：一個聲明式的工具”">​</a></h3><p>NMState 是一個網絡管理器，允許你按照聲明式方法配置主機。這意味着你通過一個北向的聲明式 API 定義所需的配置狀態，這個工具通過南向的<ruby>提供者<rt>provider</rt></ruby>應用配置。</p><p>目前 NMState 支持的唯一的提供者是 NetworkManager，它是為 Fedora Linux 提供網絡功能的主要服務。不過，NMState 的開發計劃中將逐漸增加其他提供者。</p>',9)),l("p",null,[s[2]||(s[2]=n("關於 NMState 的進一步信息，請訪問其項目 ",-1)),p(a,{href:"https://nmstate.io/"},{default:e(()=>[...s[0]||(s[0]=[n("站點",-1)])]),_:1}),s[3]||(s[3]=n(" 或 GitHub ",-1)),p(a,{href:"https://github.com/nmstate/nmstate"},{default:e(()=>[...s[1]||(s[1]=[n("倉庫",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[21]||(s[21]=i(`<h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>NMState 在 Fedora Linux 29+ 上可用，需要在系統上安裝並運行 NetworkManager 1.26 或更高版本。下面是在 Fedora Linux 34 上的安裝情況：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf -y install nmstate</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>輸出節略</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Installed:</span></span>
<span class="line"><span>  NetworkManager-config-server-1:1.30.4-1.fc34.noarch      gobject-introspection-1.68.0-3.fc34.x86_64      nispor-1.0.1-2.fc34.x86_64              nmstate-1.0.3-2.fc34.noarch</span></span>
<span class="line"><span>  python3-gobject-base-3.40.1-1.fc34.x86_64                python3-libnmstate-1.0.3-2.fc34.noarch          python3-nispor-1.0.1-2.fc34.noarch      python3-varlink-30.3.1-2.fc34.noarch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Complete!</span></span></code></pre></div><p>這樣，你可以使用 <code>nmstatectl</code> 作為 NMState 的命令列工具。請參考 <code>nmstatectl -help</code> 或 <code>man nmstatectl</code> 以瞭解關於這個工具的進一步信息。</p><h3 id="使用-nmstate" tabindex="-1">使用 NMstate <a class="header-anchor" href="#使用-nmstate" aria-label="Permalink to “使用 NMstate”">​</a></h3><p>首先要檢查系統中安裝的 NMState 版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmstatectl version</span></span>
<span class="line"><span>1.0.3</span></span></code></pre></div><p>檢查一個網絡接口的當前配置，例如 <code>eth0</code> 的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmstatectl show eth0</span></span>
<span class="line"><span>2021-06-29 10:28:21,530 root         DEBUG    NetworkManager version 1.30.4</span></span>
<span class="line"><span>2021-06-29 10:28:21,531 root         DEBUG    Async action: Retrieve applied config: ethernet eth0 started</span></span>
<span class="line"><span>2021-06-29 10:28:21,531 root         DEBUG    Async action: Retrieve applied config: ethernet eth1 started</span></span>
<span class="line"><span>2021-06-29 10:28:21,532 root         DEBUG    Async action: Retrieve applied config: ethernet eth0 finished</span></span>
<span class="line"><span>2021-06-29 10:28:21,533 root         DEBUG    Async action: Retrieve applied config: ethernet eth1 finished</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>dns-resolver:</span></span>
<span class="line"><span>  config: {}</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>    search: []</span></span>
<span class="line"><span>    server:</span></span>
<span class="line"><span>    - 192.168.122.1</span></span>
<span class="line"><span>route-rules:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>  - destination: fe80::/64</span></span>
<span class="line"><span>    metric: 100</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth0</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 0.0.0.0/0</span></span>
<span class="line"><span>    metric: 100</span></span>
<span class="line"><span>    next-hop-address: 192.168.122.1</span></span>
<span class="line"><span>    next-hop-interface: eth0</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 192.168.122.0/24</span></span>
<span class="line"><span>    metric: 100</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth0</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>interfaces:</span></span>
<span class="line"><span>- name: eth0</span></span>
<span class="line"><span>  type: ethernet</span></span>
<span class="line"><span>  state: up</span></span>
<span class="line"><span>  ipv4:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: 192.168.122.238</span></span>
<span class="line"><span>      prefix-length: 24</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  ipv6:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: fe80::c3c9:c4f9:75b1:a570</span></span>
<span class="line"><span>      prefix-length: 64</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    autoconf: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  lldp:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  mac-address: 52:54:00:91:E4:4E</span></span>
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>正如你在上面看到的，這個網絡配置顯示了四個主要部分：</p><ul><li><code>dns-resolver</code>：這部分是這個接口的名字服務器配置。</li><li><code>route-rules</code>：它説明了路由規則。</li><li><code>routes</code>：它包括動態和靜態路由。</li><li><code>interfaces</code>：這部分描述了 ipv4 和 ipv6 設置。</li></ul><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to “修改配置”">​</a></h3><p>你可以在兩種模式下修改所需的配置狀態：</p><ul><li>交互式：通過 <code>nmstatectl edit</code> 編輯接口配置。這個命令調用環境變量 <code>EDITOR</code> 定義的文本編輯器，因此可以用 yaml 格式編輯網絡狀態。完成編輯後，NMState 將應用新的網絡配置，除非有語法錯誤。</li><li>基於文件的：使用 <code>nmstatectl apply</code> 應用接口配置，它從先前創建的 yaml 或 json 文件中導入一個所需的配置狀態。</li></ul><p>下面幾節告訴你如何使用 NMState 來改變網絡配置。這些改變可能會對系統造成破壞，所以建議在測試系統或客户虛擬機上執行這些任務，直到你對 NMState 有更好的理解。</p><p>這裏使用的測試系統有兩個以太網接口，<code>eth0</code> 和 <code>eth1</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip -br -4 a</span></span>
<span class="line"><span>lo               UNKNOWN        127.0.0.1/8</span></span>
<span class="line"><span>eth0             UP             192.168.122.238/24</span></span>
<span class="line"><span>eth1             UP             192.168.122.108/24</span></span></code></pre></div><h4 id="互動配置模式的例子" tabindex="-1">互動配置模式的例子 <a class="header-anchor" href="#互動配置模式的例子" aria-label="Permalink to “互動配置模式的例子”">​</a></h4><p>使用 <code>nmstatectl edit</code> 命令將 <code>eth0</code> 接口的 MTU 改為 9000 字節，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nmstatectl edit eth0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>dns-resolver:</span></span>
<span class="line"><span>  config: {}</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>    search: []</span></span>
<span class="line"><span>    server:</span></span>
<span class="line"><span>    - 192.168.122.1</span></span>
<span class="line"><span>route-rules:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>  - destination: fe80::/64</span></span>
<span class="line"><span>    metric: 100</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth0</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 0.0.0.0/0</span></span>
<span class="line"><span>    metric: 100</span></span>
<span class="line"><span>    next-hop-address: 192.168.122.1</span></span>
<span class="line"><span>    next-hop-interface: eth0</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 192.168.122.0/24</span></span>
<span class="line"><span>    metric: 100</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth0</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>interfaces:</span></span>
<span class="line"><span>- name: eth0</span></span>
<span class="line"><span>  type: ethernet</span></span>
<span class="line"><span>  state: up</span></span>
<span class="line"><span>  ipv4:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: 192.168.122.123</span></span>
<span class="line"><span>      prefix-length: 24</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  ipv6:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: fe80::c3c9:c4f9:75b1:a570</span></span>
<span class="line"><span>      prefix-length: 64</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    autoconf: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  lldp:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  mac-address: 52:54:00:91:E4:4E</span></span>
<span class="line"><span>  mtu: 9000</span></span></code></pre></div><p>在保存並退出編輯器後，NMState 應用新的網絡期望狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>2021-06-29 11:29:05,726 root         DEBUG    Nmstate version: 1.0.3</span></span>
<span class="line"><span>2021-06-29 11:29:05,726 root         DEBUG    Applying desire state: {&#39;dns-resolver&#39;: {&#39;config&#39;: {}, &#39;running&#39;: {&#39;search&#39;: [], &#39;server&#39;: [&#39;192.168.122.1&#39;]}}, &#39;route-rules&#39;: {&#39;config&#39;: []}, &#39;routes&#39;: {&#39;config&#39;: [], &#39;running&#39;: [{&#39;destination&#39;: &#39;fe80::/64&#39;, &#39;metric&#39;: 102, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth0&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;0.0.0.0/0&#39;, &#39;metric&#39;: 102, &#39;next-hop-address&#39;: &#39;192.168.122.1&#39;, &#39;next-hop-interface&#39;: &#39;eth0&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;192.168.122.0/24&#39;, &#39;metric&#39;: 102, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth0&#39;, &#39;table-id&#39;: 254}]}, &#39;interfaces&#39;: [{&#39;name&#39;: &#39;eth0&#39;, &#39;type&#39;: &#39;ethernet&#39;, &#39;state&#39;: &#39;up&#39;, &#39;ipv4&#39;: {&#39;enabled&#39;: True, &#39;address&#39;: [{&#39;ip&#39;: &#39;192.168.122.238&#39;, &#39;prefix-length&#39;: 24}], &#39;auto-dns&#39;: True, &#39;auto-gateway&#39;: True, &#39;auto-route-table-id&#39;: 0, &#39;auto-routes&#39;: True, &#39;dhcp&#39;: True}, &#39;ipv6&#39;: {&#39;enabled&#39;: True, &#39;address&#39;: [{&#39;ip&#39;: &#39;fe80::5054:ff:fe91:e44e&#39;, &#39;prefix-length&#39;: 64}], &#39;auto-dns&#39;: True, &#39;auto-gateway&#39;: True, &#39;auto-route-table-id&#39;: 0, &#39;auto-routes&#39;: True, &#39;autoconf&#39;: True, &#39;dhcp&#39;: True}, &#39;lldp&#39;: {&#39;enabled&#39;: False}, &#39;mac-address&#39;: &#39;52:54:00:91:E4:4E&#39;, &#39;mtu&#39;: 9000}]}</span></span>
<span class="line"><span>--- output omitted ---</span></span>
<span class="line"><span>2021-06-29 11:29:05,760 root         DEBUG    Async action: Update profile uuid:2bdee700-f62b-365a-bd1d-69d9c31a9f0c iface:eth0 type:ethernet started</span></span>
<span class="line"><span>2021-06-29 11:29:05,792 root         DEBUG    Async action: Update profile uuid:2bdee700-f62b-365a-bd1d-69d9c31a9f0c iface:eth0 type:ethernet finished</span></span></code></pre></div><p>現在，使用 <code>ip</code> 命令和 <code>eth0</code> 的配置文件來檢查 <code>eth0</code> 的 <code>MTU</code> 是不是 9000 字節。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip link show eth0</span></span>
<span class="line"><span>2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 9000 qdisc fq_codel state UP mode DEFAULT group default qlen 1000</span></span>
<span class="line"><span>    link/ether 52:54:00:91:e4:4e brd ff:ff:ff:ff:ff:ff</span></span>
<span class="line"><span>    altname enp1s0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat /etc/NetworkManager/system-connections/eth0.nmconnection</span></span>
<span class="line"><span>[sudo] password for admin:</span></span>
<span class="line"><span>[connection]</span></span>
<span class="line"><span>id=eth0</span></span>
<span class="line"><span>uuid=2bdee700-f62b-365a-bd1d-69d9c31a9f0c</span></span>
<span class="line"><span>type=ethernet</span></span>
<span class="line"><span>interface-name=eth0</span></span>
<span class="line"><span>lldp=0</span></span>
<span class="line"><span>permissions=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ethernet]</span></span>
<span class="line"><span>cloned-mac-address=52:54:00:91:E4:4E</span></span>
<span class="line"><span>mac-address-blacklist=</span></span>
<span class="line"><span>mtu=9000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ipv4]</span></span>
<span class="line"><span>dhcp-client-id=mac</span></span>
<span class="line"><span>dhcp-timeout=2147483647</span></span>
<span class="line"><span>dns-search=</span></span>
<span class="line"><span>method=auto</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ipv6]</span></span>
<span class="line"><span>addr-gen-mode=eui64</span></span>
<span class="line"><span>dhcp-duid=ll</span></span>
<span class="line"><span>dhcp-iaid=mac</span></span>
<span class="line"><span>dhcp-timeout=2147483647</span></span>
<span class="line"><span>dns-search=</span></span>
<span class="line"><span>method=auto</span></span>
<span class="line"><span>ra-timeout=2147483647</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[proxy]</span></span></code></pre></div><h4 id="基於文件的配置模式的例子" tabindex="-1">基於文件的配置模式的例子 <a class="header-anchor" href="#基於文件的配置模式的例子" aria-label="Permalink to “基於文件的配置模式的例子”">​</a></h4><p>讓我們使用基於文件的方法來設置一個新的配置狀態。這裏我們禁用 <code>eth1</code> 接口的 IPv6 配置。</p><p>首先，創建一個 yaml 文件來定義 <code>eth1</code> 接口的期望狀態。使用 <code>nmstatectl show</code> 來保存當前設置，然後使用 <code>nmstatectl edit</code> 來禁用 IPv6。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmstatectl show eth1 &gt; eth1.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ vi eth1.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>dns-resolver:</span></span>
<span class="line"><span>  config: {}</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>    search: []</span></span>
<span class="line"><span>    server:</span></span>
<span class="line"><span>    - 192.168.122.1</span></span>
<span class="line"><span>route-rules:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>  - destination: fe80::/64</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 0.0.0.0/0</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: 192.168.122.1</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 192.168.122.0/24</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>interfaces:</span></span>
<span class="line"><span>- name: eth1</span></span>
<span class="line"><span>  type: ethernet</span></span>
<span class="line"><span>  state: up</span></span>
<span class="line"><span>  ipv4:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: 192.168.122.108</span></span>
<span class="line"><span>      prefix-length: 24</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  ipv6:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: fe80::5054:ff:fe3c:9b04</span></span>
<span class="line"><span>      prefix-length: 64</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    autoconf: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  lldp:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  mac-address: 52:54:00:3C:9B:04</span></span>
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>保存新的配置後，用它來應用新的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nmstatectl apply eth1.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2021-06-29 12:17:21,531 root         DEBUG    Nmstate version: 1.0.3</span></span>
<span class="line"><span>2021-06-29 12:17:21,531 root         DEBUG    Applying desire state: {&#39;dns-resolver&#39;: {&#39;config&#39;: {}, &#39;running&#39;: {&#39;search&#39;: [], &#39;server&#39;: [&#39;192.168.122.1&#39;]}}, &#39;route-rules&#39;: {&#39;config&#39;: []}, &#39;routes&#39;: {&#39;config&#39;: [], &#39;running&#39;: [{&#39;destination&#39;: &#39;fe80::/64&#39;, &#39;metric&#39;: 101, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth1&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;0.0.0.0/0&#39;, &#39;metric&#39;: 101, &#39;next-hop-address&#39;: &#39;192.168.122.1&#39;, &#39;next-hop-interface&#39;: &#39;eth1&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;192.168.122.0/24&#39;, &#39;metric&#39;: 101, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth1&#39;, &#39;table-id&#39;: 254}]}, &#39;interfaces&#39;: [{&#39;name&#39;: &#39;eth1&#39;, &#39;type&#39;: &#39;ethernet&#39;, &#39;state&#39;: &#39;up&#39;, &#39;ipv4&#39;: {&#39;enabled&#39;: True, &#39;address&#39;: [{&#39;ip&#39;: &#39;192.168.122.108&#39;, &#39;prefix-length&#39;: 24}], &#39;auto-dns&#39;: True, &#39;auto-gateway&#39;: True, &#39;auto-route-table-id&#39;: 0, &#39;auto-routes&#39;: True, &#39;dhcp&#39;: True}, &#39;ipv6&#39;: {&#39;enabled&#39;: False}, &#39;lldp&#39;: {&#39;enabled&#39;: False}, &#39;mac-address&#39;: &#39;52:54:00:3C:9B:04&#39;, &#39;mtu&#39;: 1500}]}</span></span>
<span class="line"><span>--- output omitted ---</span></span>
<span class="line"><span>2021-06-29 12:17:21,582 root         DEBUG    Async action: Update profile uuid:5d7244cb-673d-3b88-a675-32e31fad4347 iface:eth1 type:ethernet started</span></span>
<span class="line"><span>2021-06-29 12:17:21,587 root         DEBUG    Async action: Update profile uuid:5d7244cb-673d-3b88-a675-32e31fad4347 iface:eth1 type:ethernet finished</span></span>
<span class="line"><span>--- output omitted ---</span></span>
<span class="line"><span>Desired state applied:</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>dns-resolver:</span></span>
<span class="line"><span>  config: {}</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>    search: []</span></span>
<span class="line"><span>    server:</span></span>
<span class="line"><span>    - 192.168.122.1</span></span>
<span class="line"><span>route-rules:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>  - destination: fe80::/64</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 0.0.0.0/0</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: 192.168.122.1</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 192.168.122.0/24</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>interfaces:</span></span>
<span class="line"><span>- name: eth1</span></span>
<span class="line"><span>  type: ethernet</span></span>
<span class="line"><span>  state: up</span></span>
<span class="line"><span>  ipv4:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: 192.168.122.108</span></span>
<span class="line"><span>      prefix-length: 24</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    dhcp: true</span></span>
<span class="line"><span>  ipv6:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  lldp:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  mac-address: 52:54:00:3C:9B:04</span></span>
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>你可以檢查看到 <code>eth1</code> 接口沒有配置任何 IPv6：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip -br a</span></span>
<span class="line"><span>lo               UNKNOWN        127.0.0.1/8 ::1/128</span></span>
<span class="line"><span>eth0             UP             192.168.122.238/24 fe80::5054:ff:fe91:e44e/64</span></span>
<span class="line"><span>eth1             UP             192.168.122.108/24</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat /etc/NetworkManager/system-connections/eth1.nmconnection</span></span>
<span class="line"><span>[connection]</span></span>
<span class="line"><span>id=eth1</span></span>
<span class="line"><span>uuid=5d7244cb-673d-3b88-a675-32e31fad4347</span></span>
<span class="line"><span>type=ethernet</span></span>
<span class="line"><span>interface-name=eth1</span></span>
<span class="line"><span>lldp=0</span></span>
<span class="line"><span>permissions=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ethernet]</span></span>
<span class="line"><span>cloned-mac-address=52:54:00:3C:9B:04</span></span>
<span class="line"><span>mac-address-blacklist=</span></span>
<span class="line"><span>mtu=1500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ipv4]</span></span>
<span class="line"><span>dhcp-client-id=mac</span></span>
<span class="line"><span>dhcp-timeout=2147483647</span></span>
<span class="line"><span>dns-search=</span></span>
<span class="line"><span>method=auto</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ipv6]</span></span>
<span class="line"><span>addr-gen-mode=eui64</span></span>
<span class="line"><span>dhcp-duid=ll</span></span>
<span class="line"><span>dhcp-iaid=mac</span></span>
<span class="line"><span>dns-search=</span></span>
<span class="line"><span>method=disabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[proxy]</span></span></code></pre></div><h4 id="臨時應用改變" tabindex="-1">臨時應用改變 <a class="header-anchor" href="#臨時應用改變" aria-label="Permalink to “臨時應用改變”">​</a></h4><p>NMState 的一個有趣的功能允許你臨時配置一個期望的網絡狀態。如果你對這個配置感到滿意，你可以事後提交。否則，當超時（默認為 60 秒）過後，它將回滾。</p><p>修改前面例子中的 <code>eth1</code> 配置，使它有一個 IPv4 靜態地址，而不是通過 DHCP 動態獲得。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vi eth1.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>dns-resolver:</span></span>
<span class="line"><span>  config: {}</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>    search: []</span></span>
<span class="line"><span>    server:</span></span>
<span class="line"><span>    - 192.168.122.1</span></span>
<span class="line"><span>route-rules:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>  - destination: fe80::/64</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 0.0.0.0/0</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: 192.168.122.1</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 192.168.122.0/24</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>interfaces:</span></span>
<span class="line"><span>- name: eth1</span></span>
<span class="line"><span>  type: ethernet</span></span>
<span class="line"><span>  state: up</span></span>
<span class="line"><span>  ipv4:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: 192.168.122.110</span></span>
<span class="line"><span>      prefix-length: 24</span></span>
<span class="line"><span>    auto-dns: true</span></span>
<span class="line"><span>    auto-gateway: true</span></span>
<span class="line"><span>    auto-route-table-id: 0</span></span>
<span class="line"><span>    auto-routes: true</span></span>
<span class="line"><span>    dhcp: false</span></span>
<span class="line"><span>  ipv6:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  lldp:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  mac-address: 52:54:00:3C:9B:04</span></span>
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>現在，使用選項 <code>no-commit</code> 臨時應用這個配置，讓它只在 30 秒內有效。這可以通過添加選項 <code>timeout</code> 來完成。同時，我們將運行 <code>ip -br a</code> 命令三次，看看配置在 <code>eth1</code> 接口的 IPv4 地址是如何變化的，然後配置就會回滾。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip -br a &amp;&amp; sudo nmstatectl apply --no-commit --timeout 30 eth1.yaml &amp;&amp; sleep 10 &amp;&amp; ip -br a &amp;&amp; sleep 25 &amp;&amp; ip -br a</span></span>
<span class="line"><span>lo               UNKNOWN        127.0.0.1/8 ::1/128</span></span>
<span class="line"><span>eth0             UP             192.168.122.238/24 fe80::5054:ff:fe91:e44e/64</span></span>
<span class="line"><span>eth1             UP             192.168.122.108/24</span></span>
<span class="line"><span>2021-06-29 17:29:18,266 root         DEBUG    Nmstate version: 1.0.3</span></span>
<span class="line"><span>2021-06-29 17:29:18,267 root         DEBUG    Applying desire state: {&#39;dns-resolver&#39;: {&#39;config&#39;: {}, &#39;running&#39;: {&#39;search&#39;: [], &#39;server&#39;: [&#39;192.168.122.1&#39;]}}, &#39;route-rules&#39;: {&#39;config&#39;: []}, &#39;routes&#39;: {&#39;config&#39;: [], &#39;running&#39;: [{&#39;destination&#39;: &#39;fe80::/64&#39;, &#39;metric&#39;: 101, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth1&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;0.0.0.0/0&#39;, &#39;metric&#39;: 101, &#39;next-hop-address&#39;: &#39;192.168.122.1&#39;, &#39;next-hop-interface&#39;: &#39;eth1&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;192.168.122.0/24&#39;, &#39;metric&#39;: 101, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth1&#39;, &#39;table-id&#39;: 254}]}, &#39;interfaces&#39;: [{&#39;name&#39;: &#39;eth1&#39;, &#39;type&#39;: &#39;ethernet&#39;, &#39;state&#39;: &#39;up&#39;, &#39;ipv4&#39;: {&#39;enabled&#39;: True, &#39;address&#39;: [{&#39;ip&#39;: &#39;192.168.122.110&#39;, &#39;prefix-length&#39;: 24}], &#39;dhcp&#39;: False}, &#39;ipv6&#39;: {&#39;enabled&#39;: False}, &#39;lldp&#39;: {&#39;enabled&#39;: False}, &#39;mac-address&#39;: &#39;52:54:00:3C:9B:04&#39;, &#39;mtu&#39;: 1500}]}</span></span>
<span class="line"><span>--- output omitted ---</span></span>
<span class="line"><span>Desired state applied:</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>dns-resolver:</span></span>
<span class="line"><span>  config: {}</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>    search: []</span></span>
<span class="line"><span>    server:</span></span>
<span class="line"><span>    - 192.168.122.1</span></span>
<span class="line"><span>route-rules:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  config: []</span></span>
<span class="line"><span>  running:</span></span>
<span class="line"><span>  - destination: fe80::/64</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 0.0.0.0/0</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: 192.168.122.1</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>  - destination: 192.168.122.0/24</span></span>
<span class="line"><span>    metric: 101</span></span>
<span class="line"><span>    next-hop-address: &#39;&#39;</span></span>
<span class="line"><span>    next-hop-interface: eth1</span></span>
<span class="line"><span>    table-id: 254</span></span>
<span class="line"><span>interfaces:</span></span>
<span class="line"><span>- name: eth1</span></span>
<span class="line"><span>  type: ethernet</span></span>
<span class="line"><span>  state: up</span></span>
<span class="line"><span>  ipv4:</span></span>
<span class="line"><span>    enabled: true</span></span>
<span class="line"><span>    address:</span></span>
<span class="line"><span>    - ip: 192.168.122.110</span></span>
<span class="line"><span>      prefix-length: 24</span></span>
<span class="line"><span>    dhcp: false</span></span>
<span class="line"><span>  ipv6:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  lldp:</span></span>
<span class="line"><span>    enabled: false</span></span>
<span class="line"><span>  mac-address: 52:54:00:3C:9B:04</span></span>
<span class="line"><span>  mtu: 1500</span></span>
<span class="line"><span>Checkpoint: NetworkManager|/org/freedesktop/NetworkManager/Checkpoint/7</span></span>
<span class="line"><span>lo               UNKNOWN        127.0.0.1/8 ::1/128</span></span>
<span class="line"><span>eth0             UP             192.168.122.238/24 fe80::5054:ff:fe91:e44e/64</span></span>
<span class="line"><span>eth1             UP             192.168.122.110/24</span></span>
<span class="line"><span>lo               UNKNOWN        127.0.0.1/8 ::1/128</span></span>
<span class="line"><span>eth0             UP             192.168.122.238/24 fe80::5054:ff:fe91:e44e/64</span></span>
<span class="line"><span>eth1             UP             192.168.122.108/24</span></span></code></pre></div><p>從上面可以看到，<code>eth1</code> 的 IP 地址從 <code>192.168.122.108</code> 暫時變成了 <code>192.168.122.110</code>，然後在超時結束後又回到了 <code>192.168.122.108</code>。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>NMState 是一個聲明式的網絡配置工具，目前可以通過 NetworkManager API 在主機中應用所需的網絡配置狀態。這種狀態既可以用文本編輯器交互式地定義，也可以用基於文件的方法創建一個 yaml 或 json 文件。</p><p>這種工具提供了“基礎設施即代碼”，它可以自動化網絡任務，也減少了使用傳統配置方法可能出現的潛在錯誤配置或不穩定的網絡情況。</p><hr>`,43)),l("p",null,[s[6]||(s[6]=n("via: ",-1)),p(a,{href:"https://fedoramagazine.org/nmstate-a-declarative-networking-config-tool/"},{default:e(()=>[...s[5]||(s[5]=[n("https://fedoramagazine.org/nmstate-a-declarative-networking-config-tool/",-1)])]),_:1})]),l("p",null,[s[11]||(s[11]=n("作者：",-1)),p(a,{href:"https://fedoramagazine.org/author/malgnuz/"},{default:e(()=>[...s[7]||(s[7]=[n("Maurizio Garcia",-1)])]),_:1}),s[12]||(s[12]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[8]||(s[8]=[n("lujun9972",-1)])]),_:1}),s[13]||(s[13]=n(" 譯者：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1}),s[14]||(s[14]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[17]||(s[17]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[15]||(s[15]=[n("LCTT",-1)])]),_:1}),s[18]||(s[18]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[16]||(s[16]=[n("Linux中國",-1)])]),_:1}),s[19]||(s[19]=n(" 榮譽推出",-1))])])}const v=t(o,[["render",h]]);export{y as __pageData,v as default};
