import{_ as t,a0 as d,w as o,s as r,I as a,x as n,a1 as i,A as p,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"在 RHEL 上配置网络绑定（成组） | LCTT x X-CMD","titleTemplate":false,"description":"在 RHEL 上配置网络绑定（成组） | LCTT (202308) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 RHEL 上配置网络绑定（成组） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 RHEL 上配置网络绑定（成组） | LCTT (202308) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202308/20230828 How to Configure Network Bonding or Teaming on RHEL","title":"在 RHEL 上配置网络绑定（成组）","tag":"202308","desc":""},"relativePath":"202308/20230828 How to Configure Network Bonding or Teaming on RHEL.md","filePath":"[post].md"}'),c={name:"202308/20230828 How to Configure Network Bonding or Teaming on RHEL.md"};function h(g,s,k,b,u,f){const e=d("Link");return o(),r("div",null,[s[35]||(s[35]=a("h1",{id:"在-rhel-上配置网络绑定-成组",tabindex:"-1"},[n("在 RHEL 上配置网络绑定（成组） "),a("a",{class:"header-anchor",href:"#在-rhel-上配置网络绑定-成组","aria-label":"Permalink to “在 RHEL 上配置网络绑定（成组）”"},"​")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202308/28/122437eaiz28h2y0a594z9.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("网络 ",-1)),a("ruby",null,[i(e,{href:"https://www.kernel.org/doc/Documentation/networking/bonding.txt"},{default:p(()=>[...s[0]||(s[0]=[n("绑定",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Bonding",-1))]),s[3]||(s[3]=n("（",-1)),s[4]||(s[4]=a("ruby",null,[n("成组"),a("rt",null,"Teaming")],-1)),s[5]||(s[5]=n("） 是 Linux 的一项内核特性，它让我们可以将多个网络接口（例如 ",-1)),s[6]||(s[6]=a("code",null,"ens192",-1)),s[7]||(s[7]=n("、",-1)),s[8]||(s[8]=a("code",null,"ens224",-1)),s[9]||(s[9]=n("）聚合为一个专有的虚拟网络接口，被称为通道绑定（",-1)),s[10]||(s[10]=a("code",null,"bond0",-1)),s[11]||(s[11]=n("）。这样做能够提升吞吐量并增加冗余备份。",-1))]),s[37]||(s[37]=l(`<p>网络绑定一共支持 7 种模式，你可以根据实际需求进行设置。<ruby>链接聚合控制协议<rt>Link Aggregation Control Protocol</rt></ruby>（LACP）， 即模式 4（802.3ad）因其支持链接聚合与冗余而被广泛应用。</p><p>在本篇文章中，我们将引导你学习如何在 RHEL 系统中配置网卡（网络）绑定。</p><h3 id="lacp-绑定的前置条件" tabindex="-1">LACP 绑定的前置条件 <a class="header-anchor" href="#lacp-绑定的前置条件" aria-label="Permalink to “LACP 绑定的前置条件”">​</a></h3><ul><li>网络团队需要在网络交换机的端口上开启 LACP（802.3ad）来实现链接的聚合。</li><li>一个 Linux 系统应该配备至少两个网络接口。</li><li>对于物理服务器，我们推荐在板载接口与 PCI 接口间进行绑定配置，以避免在主机端的网络卡出现单点故障。</li></ul><h3 id="bonding-模块" tabindex="-1">Bonding 模块 <a class="header-anchor" href="#bonding-模块" aria-label="Permalink to “Bonding 模块”">​</a></h3><p>你可以使用 <code>lsmod</code> 命令来确认你的 Linux 系统是否已经加载了 <code>bonding</code> 模块。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsmod | grep -i bonding</span></span>
<span class="line"><span>bonding               12451  0</span></span></code></pre></div><p>系统应该默认已加载。如果未看到，可以运用 <code>modprobe</code> 命令进行加载。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>modprobe bonding</span></span></code></pre></div><h3 id="创建绑定接口" tabindex="-1">创建绑定接口 <a class="header-anchor" href="#创建绑定接口" aria-label="Permalink to “创建绑定接口”">​</a></h3><p>在 <code>/etc/sysconfig/network-scripts/</code> 路径下，创建一个名为 <code>ifcfg-bond0</code> 的绑定接口文件。依据你的网络情况，你可能需要修改诸如 <code>IP</code>、<code>MASK</code> 以及 <code>GATEWAY</code> 等值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vi /etc/sysconfig/network-scripts/ifcfg-bond0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TYPE=Bond</span></span>
<span class="line"><span>DEVICE=bond0</span></span>
<span class="line"><span>NAME=bond0</span></span>
<span class="line"><span>BONDING_MASTER=yes</span></span>
<span class="line"><span>BOOTPROTO=none</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span>IPADDR=192.168.1.100</span></span>
<span class="line"><span>NETMASK=255.255.255.0</span></span>
<span class="line"><span>GATEWAY=192.168.1.1</span></span>
<span class="line"><span>BONDING_OPTS=&quot;mode=4 miimon=100 lacp_rate=1&quot;</span></span></code></pre></div><div class="table-wrap"><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>BONDING_MASTER=yes</code></td><td>表示设备是一个绑定主设备。</td></tr><tr><td><code>mode=4</code></td><td>绑定模式是 IEEE 802.3ad 动态链接聚合（LACP）。</td></tr><tr><td><code>miimon=100</code></td><td>定义以毫秒单位的 MII 链路监测频率，这决定了多久检查每个从属链路的状态一次以寻找失败的链路。<code>0</code> 值将禁用 MII 链路监测。<code>100</code> 是个不错的初始值。</td></tr><tr><td><code>lacp_rate=1</code></td><td>一个设置项，规定我们将以何种频率要求我们的链路伙伴每秒钟发送 LACPDU。默认为慢，即 <code>0</code>。</td></tr></tbody></table></div><h3 id="配置第一个子接口" tabindex="-1">配置第一个子接口 <a class="header-anchor" href="#配置第一个子接口" aria-label="Permalink to “配置第一个子接口”">​</a></h3><p>修改你希望添加到绑定中的第一个子接口。请根据你的实际环境使用合适的接口名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vi /etc/sysconfig/network-scripts/ifcfg-ens192</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TYPE=Ethernet</span></span>
<span class="line"><span>BOOTPROTO=none</span></span>
<span class="line"><span>DEVICE=ens192</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span>MASTER=bond0</span></span>
<span class="line"><span>SLAVE=yes</span></span></code></pre></div><h3 id="配置第二个子接口" tabindex="-1">配置第二个子接口 <a class="header-anchor" href="#配置第二个子接口" aria-label="Permalink to “配置第二个子接口”">​</a></h3><p>修改你希望添加到绑定中的第二个子接口。请根据你的实际环境使用合适的接口名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vi /etc/sysconfig/network-scripts/ifcfg-ens224</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TYPE=Ethernet</span></span>
<span class="line"><span>BOOTPROTO=none</span></span>
<span class="line"><span>DEVICE=ens224</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span>MASTER=bond0</span></span>
<span class="line"><span>SLAVE=yes</span></span></code></pre></div><h3 id="重启网络服务" tabindex="-1">重启网络服务 <a class="header-anchor" href="#重启网络服务" aria-label="Permalink to “重启网络服务”">​</a></h3><p>重启网络服务以激活绑定接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl restart network</span></span></code></pre></div><h3 id="验证绑定配置" tabindex="-1">验证绑定配置 <a class="header-anchor" href="#验证绑定配置" aria-label="Permalink to “验证绑定配置”">​</a></h3>`,26)),a("p",null,[s[13]||(s[13]=n("你可以借助 ",-1)),i(e,{href:"https://www.2daygeek.com/linux-ip-command-configure-network-interface/"},{default:p(()=>[...s[12]||(s[12]=[n("ip 命令",-1)])]),_:1}),s[14]||(s[14]=n(" 来查看绑定接口以及其子接口的情况。可以看到，",-1)),s[15]||(s[15]=a("code",null,"bond0",-1)),s[16]||(s[16]=n(" 现在已启动并在运行。",-1))]),s[38]||(s[38]=l(`<p><img src="https://www.2daygeek.com/wp-content/uploads/2023/08/configure-network-bonding-nic-teaming-rhel-2-1024x276.jpg" alt=""></p><h3 id="查阅绑定接口状态" tabindex="-1">查阅绑定接口状态 <a class="header-anchor" href="#查阅绑定接口状态" aria-label="Permalink to “查阅绑定接口状态”">​</a></h3><p>检查以下文件，你可以看到绑定接口及其子接口的详细信息。输出结果应该看起来很不错，我们能看到诸如绑定模式，MII 状态，MII 轮询间隔，LACP 速率，端口数量等信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat /proc/net/bonding/bond0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Ethernet Channel Bonding Driver: v3.7.1 (April 27, 2011)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bonding Mode: IEEE 802.3ad Dynamic link aggregation</span></span>
<span class="line"><span>Transmit Hash Policy: layer (0)</span></span>
<span class="line"><span>MII Status: up</span></span>
<span class="line"><span>MII Polling Interval (ms): 100</span></span>
<span class="line"><span>Up Delay (ms): 0</span></span>
<span class="line"><span>Down Delay (ms): 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>802.3ad info</span></span>
<span class="line"><span>LACP rate: fast</span></span>
<span class="line"><span>Min links: 0</span></span>
<span class="line"><span>Aggregator selection policy (ad_select): stable</span></span>
<span class="line"><span>System priority: 65535</span></span>
<span class="line"><span>System MAC address: c8:5b:76:4d:d4:5c</span></span>
<span class="line"><span>Active Aggregator Info:</span></span>
<span class="line"><span>        Aggregator ID: 1</span></span>
<span class="line"><span>        Number of ports: 2</span></span>
<span class="line"><span>        Actor Key: 15</span></span>
<span class="line"><span>        Partner Key: 32773</span></span>
<span class="line"><span>        Partner Mac Address: e4:a7:a0:32:fc:e9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Slave Interface: ens192</span></span>
<span class="line"><span>MII Status: up</span></span>
<span class="line"><span>Speed: 10000 Mbps</span></span>
<span class="line"><span>Duplex: full</span></span>
<span class="line"><span>Link Failure Count: 0</span></span>
<span class="line"><span>Permanent HW addr: c8:5b:76:4d:d4:5c</span></span>
<span class="line"><span>Slave queue ID: 0</span></span>
<span class="line"><span>Aggregator ID: 1</span></span>
<span class="line"><span>Actor Churn State: none</span></span>
<span class="line"><span>Partner Churn State: none</span></span>
<span class="line"><span>Actor Churned State: 0</span></span>
<span class="line"><span>Partner Churned State: 0</span></span>
<span class="line"><span>details actor lacp pdu:</span></span>
<span class="line"><span>    system priority: 65535</span></span>
<span class="line"><span>    system mac address: c8:5b:76:4d:d4:5c</span></span>
<span class="line"><span>    port key: 15</span></span>
<span class="line"><span>    port priority: 255</span></span>
<span class="line"><span>    port number: 1</span></span>
<span class="line"><span>    port state: 63</span></span>
<span class="line"><span>details Partner lacp pdu:</span></span>
<span class="line"><span>    system priority: 32667</span></span>
<span class="line"><span>    system mac address: e4:a7:a0:32:fc:e9</span></span>
<span class="line"><span>    oper key: 32773</span></span>
<span class="line"><span>    port priority: 32768</span></span>
<span class="line"><span>    port number: 290</span></span>
<span class="line"><span>    port state: 61</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Slave Interface: ens224</span></span>
<span class="line"><span>MII Status: up</span></span>
<span class="line"><span>Speed: 10000 Mbps</span></span>
<span class="line"><span>Duplex: full</span></span>
<span class="line"><span>Link Failure Count: 0</span></span>
<span class="line"><span>Permanent HW addr: e4:a7:a0:32:fc:e9</span></span>
<span class="line"><span>Slave queue ID: 0</span></span>
<span class="line"><span>Aggregator ID: 1</span></span>
<span class="line"><span>Actor Churn State: none</span></span>
<span class="line"><span>Partner Churn State: none</span></span>
<span class="line"><span>Actor Churned State: 0</span></span>
<span class="line"><span>Partner Churned State: 0</span></span>
<span class="line"><span>details actor lacp pdu:</span></span>
<span class="line"><span>    system priority: 65535</span></span>
<span class="line"><span>    system mac address: e4:a7:a0:32:fc:e9</span></span>
<span class="line"><span>    port key: 15</span></span>
<span class="line"><span>    port priority: 255</span></span>
<span class="line"><span>    port number: 2</span></span>
<span class="line"><span>    port state: 63</span></span>
<span class="line"><span>details Partner lacp pdu:</span></span>
<span class="line"><span>    system priority: 32667</span></span>
<span class="line"><span>    system mac address: c8:5b:76:4d:d4:5c</span></span>
<span class="line"><span>    oper key: 32773</span></span>
<span class="line"><span>    port priority: 32768</span></span>
<span class="line"><span>    port number: 16674</span></span>
<span class="line"><span>    port state: 61</span></span></code></pre></div><h3 id="容错-冗余测试" tabindex="-1">容错/冗余测试 <a class="header-anchor" href="#容错-冗余测试" aria-label="Permalink to “容错/冗余测试”">​</a></h3><p>为了验证容错性和连接速度，你可以逐个断开接口，然后检查服务器是否仍旧可达。</p>`,7)),a("ul",null,[a("li",null,[s[18]||(s[18]=n("测试用例-1：当两个子接口都启动并运行时，使用 ",-1)),i(e,{href:"https://www.2daygeek.com/view-change-ethernet-adapter-settings-nic-card-linux/"},{default:p(()=>[...s[17]||(s[17]=[n("ethtool 命令",-1)])]),_:1}),s[19]||(s[19]=n(" 检查链路速度。",-1))]),s[20]||(s[20]=a("li",null,"测试用例-2：断开第一个子接口，然后尝试访问系统。",-1)),s[21]||(s[21]=a("li",null,"测试用例-3：断开第二个子接口，然后尝试访问系统。",-1))]),s[39]||(s[39]=l(`<h4 id="测试用例-1" tabindex="-1">测试用例-1： <a class="header-anchor" href="#测试用例-1" aria-label="Permalink to “测试用例-1：”">​</a></h4><p>如果你想检测下连接速度：没错，我在 <code>bond0</code> 上看到了 <code>20 Gbps</code> 的速度，因为每个子接口支持 10 Gbps。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ethtool bond0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Settings for bond0:</span></span>
<span class="line"><span>        Supported ports: [ ]</span></span>
<span class="line"><span>        Supported link modes:   Not reported</span></span>
<span class="line"><span>        Supported pause frame use: No</span></span>
<span class="line"><span>        Supports auto-negotiation: No</span></span>
<span class="line"><span>        Supported FEC modes: Not reported</span></span>
<span class="line"><span>        Advertised link modes:  Not reported</span></span>
<span class="line"><span>        Advertised pause frame use: No</span></span>
<span class="line"><span>        Advertised auto-negotiation: No</span></span>
<span class="line"><span>        Advertised FEC modes: Not reported</span></span>
<span class="line"><span>        Speed: 20000Mb/s</span></span>
<span class="line"><span>        Duplex: Full</span></span>
<span class="line"><span>        Port: Other</span></span>
<span class="line"><span>        PHYAD: 0</span></span>
<span class="line"><span>        Transceiver: internal</span></span>
<span class="line"><span>        Auto-negotiation: off</span></span>
<span class="line"><span>        Link detected: yes</span></span></code></pre></div><h4 id="测试用例-2" tabindex="-1">测试用例-2： <a class="header-anchor" href="#测试用例-2" aria-label="Permalink to “测试用例-2：”">​</a></h4><p>现在我们将关闭第一个子接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ifdown ens192</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Device &#39;ens192&#39; successfully disconnected.</span></span></code></pre></div><p>通过 <code>ssh</code> 尝试访问系统。没问题，系统现在是可以访问的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ssh [email protected]</span></span></code></pre></div><p>由于已经有一个子接口关闭，你现在在 <code>bond0</code> 上只能看到 10 Gbps 的速度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ethtool bond0 | grep -i speed</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            Speed: 10000Mb/s</span></span></code></pre></div><p>现在，我们再次查看绑定接口的状态。可以看出，只有一个子接口处于活跃状态。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat /proc/net/bonding/bond0</span></span></code></pre></div><h4 id="测试用例-3" tabindex="-1">测试用例-3： <a class="header-anchor" href="#测试用例-3" aria-label="Permalink to “测试用例-3：”">​</a></h4><p>我们来关闭第二个子接口，并进行类似测试用例-2 的测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ifdown ens224</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Device &#39;ens224&#39; successfully disconnected.</span></span></code></pre></div><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to “结语”">​</a></h3><p>我希望你已经掌握了在 RHEL 上配置 LACP 绑定的方法。</p><p>在本教程中，我们为你展示了在 RHEL 系统配置网络绑定或网卡聚合的最简单方式。</p><p>如果你有任何疑问或者反馈，欢迎在下面留言。</p><p><em>（题图：MJ/939f6ba6-eb46-480d-8879-3a422c7425d2）</em></p><hr>`,25)),a("p",null,[s[23]||(s[23]=n("via: ",-1)),i(e,{href:"https://www.2daygeek.com/configure-network-bonding-nic-teaming-rhel/"},{default:p(()=>[...s[22]||(s[22]=[n("https://www.2daygeek.com/configure-network-bonding-nic-teaming-rhel/",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("作者：",-1)),i(e,{href:"https://www.2daygeek.com/author/jayabal/"},{default:p(()=>[...s[24]||(s[24]=[n("Jayabal Thiyagarajan",-1)])]),_:1}),s[28]||(s[28]=n(" 选题：",-1)),i(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[25]||(s[25]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 译者：ChatGPT 校对：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[30]||(s[30]=[n("LCTT",-1)])]),_:1}),s[33]||(s[33]=n(" 原创编译，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[31]||(s[31]=[n("Linux中国",-1)])]),_:1}),s[34]||(s[34]=n(" 荣誉推出",-1))])])}const v=t(c,[["render",h]]);export{C as __pageData,v as default};
