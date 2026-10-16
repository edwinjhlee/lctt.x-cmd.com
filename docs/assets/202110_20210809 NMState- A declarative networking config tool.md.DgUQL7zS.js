import{_ as t,a0 as c,w as r,s as d,ao as i,I as l,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"NMState：一个声明式网络配置工具 | LCTT x X-CMD","titleTemplate":false,"description":"NMState：一个声明式网络配置工具 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"NMState：一个声明式网络配置工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"NMState：一个声明式网络配置工具 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210809 NMState- A declarative networking config tool","title":"NMState：一个声明式网络配置工具","tag":"202110","desc":""},"relativePath":"202110/20210809 NMState- A declarative networking config tool.md","filePath":"[post].md"}'),o={name:"202110/20210809 NMState- A declarative networking config tool.md"};function h(u,s,f,g,b,m){const a=c("Link");return r(),d("div",null,[s[20]||(s[20]=i('<h1 id="nmstate-一个声明式网络配置工具" tabindex="-1">NMState：一个声明式网络配置工具 <a class="header-anchor" href="#nmstate-一个声明式网络配置工具" aria-label="Permalink to “NMState：一个声明式网络配置工具”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202110/08/145714mqcyh6sshchomyot.jpg" alt=""></p><p>这篇文章描述并演示了 NMState，这是一个使用声明式方法配置主机的网络管理器。这意味着你可以通过 API 定义所需的配置状态，而工具则通过<ruby>提供者<rt>provider</rt></ruby>来应用配置。</p><h3 id="配置方法-命令式与声明式" tabindex="-1">配置方法：命令式与声明式 <a class="header-anchor" href="#配置方法-命令式与声明式" aria-label="Permalink to “配置方法：命令式与声明式”">​</a></h3><p>网络管理有时候是一项非常复杂的任务，这取决于环境的规模和多样性。在 IT 的早期，网络管理依赖于网络管理员在网络设备上手动执行命令。如今，<ruby>基础设施即代码<rt>Infrastructure as Code</rt></ruby>（IaC）允许以不同的方式将这些任务自动化。z这基本上有两种方法：命令式或声明式。</p><p>在命令式方法中，你会定义“如何”达到所需的配置状态。而在声明式范式里则定义了“什么”是所需的配置状态，所以它不确定哪些步骤是必需的，也不确定它们必须以何种顺序执行。这种方法目前正在聚集更多的人员参与，你可以在目前使用的大多数管理和编排工具上找到它。</p><h3 id="nmstate-一个声明式的工具" tabindex="-1">NMState：一个声明式的工具 <a class="header-anchor" href="#nmstate-一个声明式的工具" aria-label="Permalink to “NMState：一个声明式的工具”">​</a></h3><p>NMState 是一个网络管理器，允许你按照声明式方法配置主机。这意味着你通过一个北向的声明式 API 定义所需的配置状态，这个工具通过南向的<ruby>提供者<rt>provider</rt></ruby>应用配置。</p><p>目前 NMState 支持的唯一的提供者是 NetworkManager，它是为 Fedora Linux 提供网络功能的主要服务。不过，NMState 的开发计划中将逐渐增加其他提供者。</p>',9)),l("p",null,[s[2]||(s[2]=n("关于 NMState 的进一步信息，请访问其项目 ",-1)),p(a,{href:"https://nmstate.io/"},{default:e(()=>[...s[0]||(s[0]=[n("站点",-1)])]),_:1}),s[3]||(s[3]=n(" 或 GitHub ",-1)),p(a,{href:"https://github.com/nmstate/nmstate"},{default:e(()=>[...s[1]||(s[1]=[n("仓库",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[21]||(s[21]=i(`<h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>NMState 在 Fedora Linux 29+ 上可用，需要在系统上安装并运行 NetworkManager 1.26 或更高版本。下面是在 Fedora Linux 34 上的安装情况：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf -y install nmstate</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>输出节略</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>Installed:</span></span>
<span class="line"><span>  NetworkManager-config-server-1:1.30.4-1.fc34.noarch      gobject-introspection-1.68.0-3.fc34.x86_64      nispor-1.0.1-2.fc34.x86_64              nmstate-1.0.3-2.fc34.noarch</span></span>
<span class="line"><span>  python3-gobject-base-3.40.1-1.fc34.x86_64                python3-libnmstate-1.0.3-2.fc34.noarch          python3-nispor-1.0.1-2.fc34.noarch      python3-varlink-30.3.1-2.fc34.noarch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Complete!</span></span></code></pre></div><p>这样，你可以使用 <code>nmstatectl</code> 作为 NMState 的命令行工具。请参考 <code>nmstatectl -help</code> 或 <code>man nmstatectl</code> 以了解关于这个工具的进一步信息。</p><h3 id="使用-nmstate" tabindex="-1">使用 NMstate <a class="header-anchor" href="#使用-nmstate" aria-label="Permalink to “使用 NMstate”">​</a></h3><p>首先要检查系统中安装的 NMState 版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmstatectl version</span></span>
<span class="line"><span>1.0.3</span></span></code></pre></div><p>检查一个网络接口的当前配置，例如 <code>eth0</code> 的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmstatectl show eth0</span></span>
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
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>正如你在上面看到的，这个网络配置显示了四个主要部分：</p><ul><li><code>dns-resolver</code>：这部分是这个接口的名字服务器配置。</li><li><code>route-rules</code>：它说明了路由规则。</li><li><code>routes</code>：它包括动态和静态路由。</li><li><code>interfaces</code>：这部分描述了 ipv4 和 ipv6 设置。</li></ul><h3 id="修改配置" tabindex="-1">修改配置 <a class="header-anchor" href="#修改配置" aria-label="Permalink to “修改配置”">​</a></h3><p>你可以在两种模式下修改所需的配置状态：</p><ul><li>交互式：通过 <code>nmstatectl edit</code> 编辑接口配置。这个命令调用环境变量 <code>EDITOR</code> 定义的文本编辑器，因此可以用 yaml 格式编辑网络状态。完成编辑后，NMState 将应用新的网络配置，除非有语法错误。</li><li>基于文件的：使用 <code>nmstatectl apply</code> 应用接口配置，它从先前创建的 yaml 或 json 文件中导入一个所需的配置状态。</li></ul><p>下面几节告诉你如何使用 NMState 来改变网络配置。这些改变可能会对系统造成破坏，所以建议在测试系统或客户虚拟机上执行这些任务，直到你对 NMState 有更好的理解。</p><p>这里使用的测试系统有两个以太网接口，<code>eth0</code> 和 <code>eth1</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip -br -4 a</span></span>
<span class="line"><span>lo               UNKNOWN        127.0.0.1/8</span></span>
<span class="line"><span>eth0             UP             192.168.122.238/24</span></span>
<span class="line"><span>eth1             UP             192.168.122.108/24</span></span></code></pre></div><h4 id="互动配置模式的例子" tabindex="-1">互动配置模式的例子 <a class="header-anchor" href="#互动配置模式的例子" aria-label="Permalink to “互动配置模式的例子”">​</a></h4><p>使用 <code>nmstatectl edit</code> 命令将 <code>eth0</code> 接口的 MTU 改为 9000 字节，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nmstatectl edit eth0</span></span>
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
<span class="line"><span>  mtu: 9000</span></span></code></pre></div><p>在保存并退出编辑器后，NMState 应用新的网络期望状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>2021-06-29 11:29:05,726 root         DEBUG    Nmstate version: 1.0.3</span></span>
<span class="line"><span>2021-06-29 11:29:05,726 root         DEBUG    Applying desire state: {&#39;dns-resolver&#39;: {&#39;config&#39;: {}, &#39;running&#39;: {&#39;search&#39;: [], &#39;server&#39;: [&#39;192.168.122.1&#39;]}}, &#39;route-rules&#39;: {&#39;config&#39;: []}, &#39;routes&#39;: {&#39;config&#39;: [], &#39;running&#39;: [{&#39;destination&#39;: &#39;fe80::/64&#39;, &#39;metric&#39;: 102, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth0&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;0.0.0.0/0&#39;, &#39;metric&#39;: 102, &#39;next-hop-address&#39;: &#39;192.168.122.1&#39;, &#39;next-hop-interface&#39;: &#39;eth0&#39;, &#39;table-id&#39;: 254}, {&#39;destination&#39;: &#39;192.168.122.0/24&#39;, &#39;metric&#39;: 102, &#39;next-hop-address&#39;: &#39;&#39;, &#39;next-hop-interface&#39;: &#39;eth0&#39;, &#39;table-id&#39;: 254}]}, &#39;interfaces&#39;: [{&#39;name&#39;: &#39;eth0&#39;, &#39;type&#39;: &#39;ethernet&#39;, &#39;state&#39;: &#39;up&#39;, &#39;ipv4&#39;: {&#39;enabled&#39;: True, &#39;address&#39;: [{&#39;ip&#39;: &#39;192.168.122.238&#39;, &#39;prefix-length&#39;: 24}], &#39;auto-dns&#39;: True, &#39;auto-gateway&#39;: True, &#39;auto-route-table-id&#39;: 0, &#39;auto-routes&#39;: True, &#39;dhcp&#39;: True}, &#39;ipv6&#39;: {&#39;enabled&#39;: True, &#39;address&#39;: [{&#39;ip&#39;: &#39;fe80::5054:ff:fe91:e44e&#39;, &#39;prefix-length&#39;: 64}], &#39;auto-dns&#39;: True, &#39;auto-gateway&#39;: True, &#39;auto-route-table-id&#39;: 0, &#39;auto-routes&#39;: True, &#39;autoconf&#39;: True, &#39;dhcp&#39;: True}, &#39;lldp&#39;: {&#39;enabled&#39;: False}, &#39;mac-address&#39;: &#39;52:54:00:91:E4:4E&#39;, &#39;mtu&#39;: 9000}]}</span></span>
<span class="line"><span>--- output omitted ---</span></span>
<span class="line"><span>2021-06-29 11:29:05,760 root         DEBUG    Async action: Update profile uuid:2bdee700-f62b-365a-bd1d-69d9c31a9f0c iface:eth0 type:ethernet started</span></span>
<span class="line"><span>2021-06-29 11:29:05,792 root         DEBUG    Async action: Update profile uuid:2bdee700-f62b-365a-bd1d-69d9c31a9f0c iface:eth0 type:ethernet finished</span></span></code></pre></div><p>现在，使用 <code>ip</code> 命令和 <code>eth0</code> 的配置文件来检查 <code>eth0</code> 的 <code>MTU</code> 是不是 9000 字节。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip link show eth0</span></span>
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
<span class="line"><span>[proxy]</span></span></code></pre></div><h4 id="基于文件的配置模式的例子" tabindex="-1">基于文件的配置模式的例子 <a class="header-anchor" href="#基于文件的配置模式的例子" aria-label="Permalink to “基于文件的配置模式的例子”">​</a></h4><p>让我们使用基于文件的方法来设置一个新的配置状态。这里我们禁用 <code>eth1</code> 接口的 IPv6 配置。</p><p>首先，创建一个 yaml 文件来定义 <code>eth1</code> 接口的期望状态。使用 <code>nmstatectl show</code> 来保存当前设置，然后使用 <code>nmstatectl edit</code> 来禁用 IPv6。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmstatectl show eth1 &gt; eth1.yaml</span></span>
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
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>保存新的配置后，用它来应用新的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo nmstatectl apply eth1.yaml</span></span>
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
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>你可以检查看到 <code>eth1</code> 接口没有配置任何 IPv6：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip -br a</span></span>
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
<span class="line"><span>[proxy]</span></span></code></pre></div><h4 id="临时应用改变" tabindex="-1">临时应用改变 <a class="header-anchor" href="#临时应用改变" aria-label="Permalink to “临时应用改变”">​</a></h4><p>NMState 的一个有趣的功能允许你临时配置一个期望的网络状态。如果你对这个配置感到满意，你可以事后提交。否则，当超时（默认为 60 秒）过后，它将回滚。</p><p>修改前面例子中的 <code>eth1</code> 配置，使它有一个 IPv4 静态地址，而不是通过 DHCP 动态获得。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vi eth1.yaml</span></span>
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
<span class="line"><span>  mtu: 1500</span></span></code></pre></div><p>现在，使用选项 <code>no-commit</code> 临时应用这个配置，让它只在 30 秒内有效。这可以通过添加选项 <code>timeout</code> 来完成。同时，我们将运行 <code>ip -br a</code> 命令三次，看看配置在 <code>eth1</code> 接口的 IPv4 地址是如何变化的，然后配置就会回滚。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ip -br a &amp;&amp; sudo nmstatectl apply --no-commit --timeout 30 eth1.yaml &amp;&amp; sleep 10 &amp;&amp; ip -br a &amp;&amp; sleep 25 &amp;&amp; ip -br a</span></span>
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
<span class="line"><span>eth1             UP             192.168.122.108/24</span></span></code></pre></div><p>从上面可以看到，<code>eth1</code> 的 IP 地址从 <code>192.168.122.108</code> 暂时变成了 <code>192.168.122.110</code>，然后在超时结束后又回到了 <code>192.168.122.108</code>。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>NMState 是一个声明式的网络配置工具，目前可以通过 NetworkManager API 在主机中应用所需的网络配置状态。这种状态既可以用文本编辑器交互式地定义，也可以用基于文件的方法创建一个 yaml 或 json 文件。</p><p>这种工具提供了“基础设施即代码”，它可以自动化网络任务，也减少了使用传统配置方法可能出现的潜在错误配置或不稳定的网络情况。</p><hr>`,43)),l("p",null,[s[6]||(s[6]=n("via: ",-1)),p(a,{href:"https://fedoramagazine.org/nmstate-a-declarative-networking-config-tool/"},{default:e(()=>[...s[5]||(s[5]=[n("https://fedoramagazine.org/nmstate-a-declarative-networking-config-tool/",-1)])]),_:1})]),l("p",null,[s[11]||(s[11]=n("作者：",-1)),p(a,{href:"https://fedoramagazine.org/author/malgnuz/"},{default:e(()=>[...s[7]||(s[7]=[n("Maurizio Garcia",-1)])]),_:1}),s[12]||(s[12]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[8]||(s[8]=[n("lujun9972",-1)])]),_:1}),s[13]||(s[13]=n(" 译者：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1}),s[14]||(s[14]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[17]||(s[17]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[15]||(s[15]=[n("LCTT",-1)])]),_:1}),s[18]||(s[18]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[16]||(s[16]=[n("Linux中国",-1)])]),_:1}),s[19]||(s[19]=n(" 荣誉推出",-1))])])}const v=t(o,[["render",h]]);export{y as __pageData,v as default};
