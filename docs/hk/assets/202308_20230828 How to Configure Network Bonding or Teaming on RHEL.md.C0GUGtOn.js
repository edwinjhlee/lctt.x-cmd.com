import{_ as t,a0 as d,w as o,s as r,I as a,x as n,a1 as i,A as p,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"在 RHEL 上配置網絡綁定（成組） | LCTT x X-CMD","titleTemplate":false,"description":"在 RHEL 上配置網絡綁定（成組） | LCTT (202308) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 RHEL 上配置網絡綁定（成組） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 RHEL 上配置網絡綁定（成組） | LCTT (202308) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202308/20230828 How to Configure Network Bonding or Teaming on RHEL","title":"在 RHEL 上配置網絡綁定（成組）","tag":"202308","desc":""},"relativePath":"202308/20230828 How to Configure Network Bonding or Teaming on RHEL.md","filePath":"[post].md"}'),c={name:"202308/20230828 How to Configure Network Bonding or Teaming on RHEL.md"};function h(g,s,k,b,u,f){const e=d("Link");return o(),r("div",null,[s[35]||(s[35]=a("h1",{id:"在-rhel-上配置網絡綁定-成組",tabindex:"-1"},[n("在 RHEL 上配置網絡綁定（成組） "),a("a",{class:"header-anchor",href:"#在-rhel-上配置網絡綁定-成組","aria-label":"Permalink to “在 RHEL 上配置網絡綁定（成組）”"},"​")],-1)),s[36]||(s[36]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202308/28/122437eaiz28h2y0a594z9.jpg",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("網絡 ",-1)),a("ruby",null,[i(e,{href:"https://www.kernel.org/doc/Documentation/networking/bonding.txt"},{default:p(()=>[...s[0]||(s[0]=[n("綁定",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Bonding",-1))]),s[3]||(s[3]=n("（",-1)),s[4]||(s[4]=a("ruby",null,[n("成組"),a("rt",null,"Teaming")],-1)),s[5]||(s[5]=n("） 是 Linux 的一項內核特性，它讓我們可以將多個網絡接口（例如 ",-1)),s[6]||(s[6]=a("code",null,"ens192",-1)),s[7]||(s[7]=n("、",-1)),s[8]||(s[8]=a("code",null,"ens224",-1)),s[9]||(s[9]=n("）聚合為一個專有的虛擬網絡接口，被稱為通道綁定（",-1)),s[10]||(s[10]=a("code",null,"bond0",-1)),s[11]||(s[11]=n("）。這樣做能夠提升吞吐量並增加冗餘備份。",-1))]),s[37]||(s[37]=l(`<p>網絡綁定一共支持 7 種模式，你可以根據實際需求進行設置。<ruby>鏈接聚合控制協議<rt>Link Aggregation Control Protocol</rt></ruby>（LACP）， 即模式 4（802.3ad）因其支持鏈接聚合與冗餘而被廣泛應用。</p><p>在本篇文章中，我們將引導你學習如何在 RHEL 系統中配置網卡（網絡）綁定。</p><h3 id="lacp-綁定的前置條件" tabindex="-1">LACP 綁定的前置條件 <a class="header-anchor" href="#lacp-綁定的前置條件" aria-label="Permalink to “LACP 綁定的前置條件”">​</a></h3><ul><li>網絡團隊需要在網絡交換機的端口上開啓 LACP（802.3ad）來實現鏈接的聚合。</li><li>一個 Linux 系統應該配備至少兩個網絡接口。</li><li>對於物理服務器，我們推薦在板載接口與 PCI 接口間進行綁定配置，以避免在主機端的網絡卡出現單點故障。</li></ul><h3 id="bonding-模組" tabindex="-1">Bonding 模組 <a class="header-anchor" href="#bonding-模組" aria-label="Permalink to “Bonding 模組”">​</a></h3><p>你可以使用 <code>lsmod</code> 命令來確認你的 Linux 系統是否已經加載了 <code>bonding</code> 模組。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lsmod | grep -i bonding</span></span>
<span class="line"><span>bonding               12451  0</span></span></code></pre></div><p>系統應該默認已加載。如果未看到，可以運用 <code>modprobe</code> 命令進行加載。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>modprobe bonding</span></span></code></pre></div><h3 id="創建綁定接口" tabindex="-1">創建綁定接口 <a class="header-anchor" href="#創建綁定接口" aria-label="Permalink to “創建綁定接口”">​</a></h3><p>在 <code>/etc/sysconfig/network-scripts/</code> 路徑下，創建一個名為 <code>ifcfg-bond0</code> 的綁定接口文件。依據你的網絡情況，你可能需要修改諸如 <code>IP</code>、<code>MASK</code> 以及 <code>GATEWAY</code> 等值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vi /etc/sysconfig/network-scripts/ifcfg-bond0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TYPE=Bond</span></span>
<span class="line"><span>DEVICE=bond0</span></span>
<span class="line"><span>NAME=bond0</span></span>
<span class="line"><span>BONDING_MASTER=yes</span></span>
<span class="line"><span>BOOTPROTO=none</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span>IPADDR=192.168.1.100</span></span>
<span class="line"><span>NETMASK=255.255.255.0</span></span>
<span class="line"><span>GATEWAY=192.168.1.1</span></span>
<span class="line"><span>BONDING_OPTS=&quot;mode=4 miimon=100 lacp_rate=1&quot;</span></span></code></pre></div><div class="table-wrap"><table><thead><tr><th>參數</th><th>描述</th></tr></thead><tbody><tr><td><code>BONDING_MASTER=yes</code></td><td>表示設備是一個綁定主設備。</td></tr><tr><td><code>mode=4</code></td><td>綁定模式是 IEEE 802.3ad 動態鏈接聚合（LACP）。</td></tr><tr><td><code>miimon=100</code></td><td>定義以毫秒單位的 MII 鏈路監測頻率，這決定了多久檢查每個從屬鏈路的狀態一次以尋找失敗的鏈路。<code>0</code> 值將禁用 MII 鏈路監測。<code>100</code> 是個不錯的初始值。</td></tr><tr><td><code>lacp_rate=1</code></td><td>一個設置項，規定我們將以何種頻率要求我們的鏈路夥伴每秒鐘發送 LACPDU。默認為慢，即 <code>0</code>。</td></tr></tbody></table></div><h3 id="配置第一個子接口" tabindex="-1">配置第一個子接口 <a class="header-anchor" href="#配置第一個子接口" aria-label="Permalink to “配置第一個子接口”">​</a></h3><p>修改你希望添加到綁定中的第一個子接口。請根據你的實際環境使用合適的接口名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vi /etc/sysconfig/network-scripts/ifcfg-ens192</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TYPE=Ethernet</span></span>
<span class="line"><span>BOOTPROTO=none</span></span>
<span class="line"><span>DEVICE=ens192</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span>MASTER=bond0</span></span>
<span class="line"><span>SLAVE=yes</span></span></code></pre></div><h3 id="配置第二個子接口" tabindex="-1">配置第二個子接口 <a class="header-anchor" href="#配置第二個子接口" aria-label="Permalink to “配置第二個子接口”">​</a></h3><p>修改你希望添加到綁定中的第二個子接口。請根據你的實際環境使用合適的接口名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vi /etc/sysconfig/network-scripts/ifcfg-ens224</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>TYPE=Ethernet</span></span>
<span class="line"><span>BOOTPROTO=none</span></span>
<span class="line"><span>DEVICE=ens224</span></span>
<span class="line"><span>ONBOOT=yes</span></span>
<span class="line"><span>MASTER=bond0</span></span>
<span class="line"><span>SLAVE=yes</span></span></code></pre></div><h3 id="重啓網絡服務" tabindex="-1">重啓網絡服務 <a class="header-anchor" href="#重啓網絡服務" aria-label="Permalink to “重啓網絡服務”">​</a></h3><p>重啓網絡服務以激活綁定接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>systemctl restart network</span></span></code></pre></div><h3 id="驗證綁定配置" tabindex="-1">驗證綁定配置 <a class="header-anchor" href="#驗證綁定配置" aria-label="Permalink to “驗證綁定配置”">​</a></h3>`,26)),a("p",null,[s[13]||(s[13]=n("你可以藉助 ",-1)),i(e,{href:"https://www.2daygeek.com/linux-ip-command-configure-network-interface/"},{default:p(()=>[...s[12]||(s[12]=[n("ip 命令",-1)])]),_:1}),s[14]||(s[14]=n(" 來查看綁定接口以及其子接口的情況。可以看到，",-1)),s[15]||(s[15]=a("code",null,"bond0",-1)),s[16]||(s[16]=n(" 現在已啓動並在運行。",-1))]),s[38]||(s[38]=l(`<p><img src="https://www.2daygeek.com/wp-content/uploads/2023/08/configure-network-bonding-nic-teaming-rhel-2-1024x276.jpg" alt=""></p><h3 id="查閲綁定接口狀態" tabindex="-1">查閲綁定接口狀態 <a class="header-anchor" href="#查閲綁定接口狀態" aria-label="Permalink to “查閲綁定接口狀態”">​</a></h3><p>檢查以下文件，你可以看到綁定接口及其子接口的詳細信息。輸出結果應該看起來很不錯，我們能看到諸如綁定模式，MII 狀態，MII 輪詢間隔，LACP 速率，端口數量等信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat /proc/net/bonding/bond0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Ethernet Channel Bonding Driver: v3.7.1 (April 27, 2011)</span></span>
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
<span class="line"><span>    port state: 61</span></span></code></pre></div><h3 id="容錯-冗餘測試" tabindex="-1">容錯/冗餘測試 <a class="header-anchor" href="#容錯-冗餘測試" aria-label="Permalink to “容錯/冗餘測試”">​</a></h3><p>為了驗證容錯性和連接速度，你可以逐個斷開接口，然後檢查服務器是否仍舊可達。</p>`,7)),a("ul",null,[a("li",null,[s[18]||(s[18]=n("測試用例-1：當兩個子接口都啓動並運行時，使用 ",-1)),i(e,{href:"https://www.2daygeek.com/view-change-ethernet-adapter-settings-nic-card-linux/"},{default:p(()=>[...s[17]||(s[17]=[n("ethtool 命令",-1)])]),_:1}),s[19]||(s[19]=n(" 檢查鏈路速度。",-1))]),s[20]||(s[20]=a("li",null,"測試用例-2：斷開第一個子接口，然後嘗試訪問系統。",-1)),s[21]||(s[21]=a("li",null,"測試用例-3：斷開第二個子接口，然後嘗試訪問系統。",-1))]),s[39]||(s[39]=l(`<h4 id="測試用例-1" tabindex="-1">測試用例-1： <a class="header-anchor" href="#測試用例-1" aria-label="Permalink to “測試用例-1：”">​</a></h4><p>如果你想檢測下連接速度：沒錯，我在 <code>bond0</code> 上看到了 <code>20 Gbps</code> 的速度，因為每個子接口支持 10 Gbps。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ethtool bond0</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Settings for bond0:</span></span>
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
<span class="line"><span>        Link detected: yes</span></span></code></pre></div><h4 id="測試用例-2" tabindex="-1">測試用例-2： <a class="header-anchor" href="#測試用例-2" aria-label="Permalink to “測試用例-2：”">​</a></h4><p>現在我們將關閉第一個子接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ifdown ens192</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Device &#39;ens192&#39; successfully disconnected.</span></span></code></pre></div><p>通過 <code>ssh</code> 嘗試訪問系統。沒問題，系統現在是可以訪問的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ssh [email protected]</span></span></code></pre></div><p>由於已經有一個子接口關閉，你現在在 <code>bond0</code> 上只能看到 10 Gbps 的速度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ethtool bond0 | grep -i speed</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>            Speed: 10000Mb/s</span></span></code></pre></div><p>現在，我們再次查看綁定接口的狀態。可以看出，只有一個子接口處於活躍狀態。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cat /proc/net/bonding/bond0</span></span></code></pre></div><h4 id="測試用例-3" tabindex="-1">測試用例-3： <a class="header-anchor" href="#測試用例-3" aria-label="Permalink to “測試用例-3：”">​</a></h4><p>我們來關閉第二個子接口，並進行類似測試用例-2 的測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ifdown ens224</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Device &#39;ens224&#39; successfully disconnected.</span></span></code></pre></div><h3 id="結語" tabindex="-1">結語 <a class="header-anchor" href="#結語" aria-label="Permalink to “結語”">​</a></h3><p>我希望你已經掌握了在 RHEL 上配置 LACP 綁定的方法。</p><p>在本教程中，我們為你展示了在 RHEL 系統配置網絡綁定或網卡聚合的最簡單方式。</p><p>如果你有任何疑問或者反饋，歡迎在下面留言。</p><p><em>（題圖：MJ/939f6ba6-eb46-480d-8879-3a422c7425d2）</em></p><hr>`,25)),a("p",null,[s[23]||(s[23]=n("via: ",-1)),i(e,{href:"https://www.2daygeek.com/configure-network-bonding-nic-teaming-rhel/"},{default:p(()=>[...s[22]||(s[22]=[n("https://www.2daygeek.com/configure-network-bonding-nic-teaming-rhel/",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("作者：",-1)),i(e,{href:"https://www.2daygeek.com/author/jayabal/"},{default:p(()=>[...s[24]||(s[24]=[n("Jayabal Thiyagarajan",-1)])]),_:1}),s[28]||(s[28]=n(" 選題：",-1)),i(e,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[25]||(s[25]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 譯者：ChatGPT 校對：",-1)),i(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ",-1)),i(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[30]||(s[30]=[n("LCTT",-1)])]),_:1}),s[33]||(s[33]=n(" 原創編譯，",-1)),i(e,{href:"https://linux.cn/"},{default:p(()=>[...s[31]||(s[31]=[n("Linux中國",-1)])]),_:1}),s[34]||(s[34]=n(" 榮譽推出",-1))])])}const v=t(c,[["render",h]]);export{C as __pageData,v as default};
