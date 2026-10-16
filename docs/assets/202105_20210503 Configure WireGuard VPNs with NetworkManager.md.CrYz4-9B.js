import{_ as l,a0 as r,w as t,s as d,I as n,x as a,a1 as p,A as i,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"用 NetworkManager 配置 WireGuard 虚拟私有网络 | LCTT x X-CMD","titleTemplate":false,"description":"用 NetworkManager 配置 WireGuard 虚拟私有网络 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 NetworkManager 配置 WireGuard 虚拟私有网络 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 NetworkManager 配置 WireGuard 虚拟私有网络 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210503 Configure WireGuard VPNs with NetworkManager","title":"用 NetworkManager 配置 WireGuard 虚拟私有网络","tag":"202105","desc":""},"relativePath":"202105/20210503 Configure WireGuard VPNs with NetworkManager.md","filePath":"[post].md"}'),g={name:"202105/20210503 Configure WireGuard VPNs with NetworkManager.md"};function c(u,s,h,k,b,w){const e=r("Link");return t(),d("div",null,[s[20]||(s[20]=n("h1",{id:"用-networkmanager-配置-wireguard-虚拟私有网络",tabindex:"-1"},[a("用 NetworkManager 配置 WireGuard 虚拟私有网络 "),n("a",{class:"header-anchor",href:"#用-networkmanager-配置-wireguard-虚拟私有网络","aria-label":"Permalink to “用 NetworkManager 配置 WireGuard 虚拟私有网络”"},"​")],-1)),s[21]||(s[21]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202105/10/235609bmbzbr4bikupbjjr.jpg",alt:""})],-1)),s[22]||(s[22]=n("p",null,[n("ruby",null,[a("虚拟私有网络"),n("rt",null,"Virtual Private Networks")]),a("应用广泛。如今有各种方案可供使用，用户可通过这些方案访问任意类型的资源，同时保持其机密性与隐私性。")],-1)),s[23]||(s[23]=n("p",null,"最近，WireGuard 因为其简单性、速度与安全性成为最广泛使用的虚拟私有网络协议之一。WireGuard 最早应用于 Linux 内核，但目前可以用在其他平台，例如 iOS、Android 等。",-1)),n("p",null,[s[1]||(s[1]=a("WireGuard 使用 UDP 作为其传输协议，并在 Critokey Routing（CKR）的基础上建立对等节点之间的通信。每个对等节点（无论是服务器或客户端）都有一对",-1)),s[2]||(s[2]=n("ruby",null,[a("密钥"),n("rt",null,"key")],-1)),s[3]||(s[3]=a("（公钥与私钥），公钥与许可 IP 间建立通信连接。有关 WireGuard 更多信息请访问其 ",-1)),p(e,{href:"https://www.wireguard.com/"},{default:i(()=>[...s[0]||(s[0]=[a("主页",-1)])]),_:1}),s[4]||(s[4]=a("。",-1))]),s[24]||(s[24]=o(`<p>本文描述了如何在两个对等节点（PeerA 与 PeerB）间设置 WireGuard。两个节点均运行 Fedora Linux 系统，使用 NetworkManager 进行持久性配置。</p><h3 id="wireguard-设置与网络配置" tabindex="-1">WireGuard 设置与网络配置 <a class="header-anchor" href="#wireguard-设置与网络配置" aria-label="Permalink to “WireGuard 设置与网络配置”">​</a></h3><p>在 PeerA 与 PeerB 之间建立持久性虚拟私有网络连接只需三步：</p><ol><li>安装所需软件包。</li><li>生成<ruby>密钥对<rt>key pair</rt></ruby>。</li><li>配置 WireGuard 接口。</li></ol><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p>在两个对等节点（PeerA 与 PeerB）上安装 <code>wireguard-tools</code> 软件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo -i</span></span>
<span class="line"><span># dnf -y install wireguard-tools</span></span></code></pre></div><p>这个包可以从 Fedora Linux 更新库中找到。它在 <code>/etc/wireguard/</code> 中创建一个配置目录。在这里你将创建密钥和接口配置文件。</p><h3 id="生成密钥对" tabindex="-1">生成密钥对 <a class="header-anchor" href="#生成密钥对" aria-label="Permalink to “生成密钥对”">​</a></h3><p>现在，使用 <code>wg</code> 工具在每个节点上生成公钥与私钥：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd /etc/wireguard</span></span>
<span class="line"><span># wg genkey | tee privatekey | wg pubkey &gt; publickey</span></span></code></pre></div><h3 id="在-peera-上配置-wireguard-接口" tabindex="-1">在 PeerA 上配置 WireGuard 接口 <a class="header-anchor" href="#在-peera-上配置-wireguard-接口" aria-label="Permalink to “在 PeerA 上配置 WireGuard 接口”">​</a></h3><p>WireGuard 接口命名规则为 <code>wg0</code>、<code>wg1</code> 等等。完成下述步骤为 WireGuard 接口创建配置：</p><ul><li>PeerA 节点上配置想要的 IP 地址与掩码。</li><li>该节点监听的 UDP 端口。</li><li>PeerA 的私钥。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; EOF &gt; /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>[Interface]</span></span>
<span class="line"><span>Address = 172.16.1.254/24</span></span>
<span class="line"><span>SaveConfig = true</span></span>
<span class="line"><span>ListenPort = 60001</span></span>
<span class="line"><span>PrivateKey = mAoO2RxlqRvCZZoHhUDiW3+zAazcZoELrYbgl+TpPEc=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Peer]</span></span>
<span class="line"><span>PublicKey = IOePXA9igeRqzCSzw4dhpl4+6l/NiQvkDSAnj5LtShw=</span></span>
<span class="line"><span>AllowedIPs = 172.16.1.2/32</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>允许 UDP 流量通过节点监听的端口：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># firewall-cmd --add-port=60001/udp --permanent --zone=public</span></span>
<span class="line"><span># firewall-cmd --reload</span></span>
<span class="line"><span>success</span></span></code></pre></div><p>最后，将接口配置文件导入 NetworkManager。这样，WireGuard 接口在重启后将持续存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># nmcli con import type wireguard file /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>Connection &#39;wg0&#39; (21d939af-9e55-4df2-bacf-a13a4a488377) successfully added.</span></span></code></pre></div><p>验证 <code>wg0</code>的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wg</span></span>
<span class="line"><span>interface: wg0</span></span>
<span class="line"><span>  public key: FEPcisOjLaZsJbYSxb0CI5pvbXwIB3BCjMUPxuaLrH8=</span></span>
<span class="line"><span>  private key: (hidden)</span></span>
<span class="line"><span>  listening port: 60001</span></span>
<span class="line"><span></span></span>
<span class="line"><span>peer: IOePXA9igeRqzCSzw4dhpl4+6l/NiQvkDSAnj5LtShw=</span></span>
<span class="line"><span>  allowed ips: 172.16.1.2/32</span></span>
<span class="line"><span></span></span>
<span class="line"><span># nmcli -p device show wg0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span>                             Device details (wg0)</span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span>GENERAL.DEVICE:                         wg0</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.TYPE:                           wireguard</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.HWADDR:                         (unknown)</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.MTU:                            1420</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.STATE:                          100 (connected)</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.CONNECTION:                     wg0</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/ActiveC&gt;</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>IP4.ADDRESS[1]:                         172.16.1.254/24</span></span>
<span class="line"><span>IP4.GATEWAY:                            --</span></span>
<span class="line"><span>IP4.ROUTE[1]:                           dst = 172.16.1.0/24, nh = 0.0.0.0, mt =&gt;</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>IP6.GATEWAY:                            --</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span></code></pre></div><p>上述输出显示接口 <code>wg0</code> 已连接。现在，它可以和虚拟私有网络 IP 地址为 172.16.1.2 的对等节点通信。</p><h3 id="在-peerb-上配置-wireguard-接口" tabindex="-1">在 PeerB 上配置 WireGuard 接口 <a class="header-anchor" href="#在-peerb-上配置-wireguard-接口" aria-label="Permalink to “在 PeerB 上配置 WireGuard 接口”">​</a></h3><p>现在可以在第二个对等节点上创建 <code>wg0</code> 接口的配置文件了。确保你已经完成以下步骤：</p><ul><li>PeerB 节点上设置 IP 地址与掩码。</li><li>PeerB 的私钥。</li><li>PeerA 的公钥。</li><li>PeerA 的 IP 地址或主机名、监听 WireGuard 流量的 UDP 端口。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; EOF &gt; /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>[Interface]</span></span>
<span class="line"><span>Address = 172.16.1.2</span></span>
<span class="line"><span>SaveConfig = true</span></span>
<span class="line"><span>PrivateKey = UBiF85o7937fBK84c2qLFQwEr6eDhLSJsb5SAq1lF3c=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Peer]</span></span>
<span class="line"><span>PublicKey = FEPcisOjLaZsJbYSxb0CI5pvbXwIB3BCjMUPxuaLrH8=</span></span>
<span class="line"><span>AllowedIPs = 172.16.1.254/32</span></span>
<span class="line"><span>Endpoint = peera.example.com:60001</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>最后一步是将接口配置文件导入 NetworkManager。如上所述，这一步是重启后保持 WireGuard 接口持续存在的关键。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># nmcli con import type wireguard file /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>Connection &#39;wg0&#39; (39bdaba7-8d91-4334-bc8f-85fa978777d8) successfully added.</span></span></code></pre></div><p>验证 <code>wg0</code> 的状态：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wg</span></span>
<span class="line"><span>interface: wg0</span></span>
<span class="line"><span>  public key: IOePXA9igeRqzCSzw4dhpl4+6l/NiQvkDSAnj5LtShw=</span></span>
<span class="line"><span>  private key: (hidden)</span></span>
<span class="line"><span>  listening port: 47749</span></span>
<span class="line"><span></span></span>
<span class="line"><span>peer: FEPcisOjLaZsJbYSxb0CI5pvbXwIB3BCjMUPxuaLrH8=</span></span>
<span class="line"><span>  endpoint: 192.168.124.230:60001</span></span>
<span class="line"><span>  allowed ips: 172.16.1.254/32</span></span>
<span class="line"><span></span></span>
<span class="line"><span># nmcli -p device show wg0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span>                             Device details (wg0)</span></span>
<span class="line"><span>===============================================================================</span></span>
<span class="line"><span>GENERAL.DEVICE:                         wg0</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.TYPE:                           wireguard</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.HWADDR:                         (unknown)</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.MTU:                            1420</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.STATE:                          100 (connected)</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.CONNECTION:                     wg0</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>GENERAL.CON-PATH:                       /org/freedesktop/NetworkManager/ActiveC&gt;</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>IP4.ADDRESS[1]:                         172.16.1.2/32</span></span>
<span class="line"><span>IP4.GATEWAY:                            --</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span>
<span class="line"><span>IP6.GATEWAY:                            --</span></span>
<span class="line"><span>-------------------------------------------------------------------------------</span></span></code></pre></div><p>上述输出显示接口 <code>wg0</code> 已连接。现在，它可以和虚拟私有网络 IP 地址为 172.16.1.254 的对等节点通信。</p><h3 id="验证节点间通信" tabindex="-1">验证节点间通信 <a class="header-anchor" href="#验证节点间通信" aria-label="Permalink to “验证节点间通信”">​</a></h3><p>完成上述步骤后，两个对等节点可以通过虚拟私有网络连接相互通信，以下是 ICMP 测试结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@peerb ~]# ping 172.16.1.254 -c 4</span></span>
<span class="line"><span>PING 172.16.1.254 (172.16.1.254) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=1 ttl=64 time=0.566 ms</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=2 ttl=64 time=1.33 ms</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=3 ttl=64 time=1.67 ms</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=4 ttl=64 time=1.47 ms</span></span></code></pre></div><p>在这种情况下，如果你在 PeerA 端口 60001 上捕获 UDP 通信，则将看到依赖 WireGuard 协议的通信过程和加密的数据：</p><p><img src="https://fedoramagazine.org/wp-content/uploads/2021/04/capture-1024x601.png" alt="捕获依赖 WireGuard 协议的节点间 UDP 流量"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h2><p>虚拟私有网络很常见。在用于部署虚拟私有网络的各种协议和工具中，WireGuard 是一种简单、轻巧和安全的选择。它可以在对等节点之间基于 CryptoKey 路由建立安全的点对点连接，过程非常简单。此外，NetworkManager 支持 WireGuard 接口，允许重启后进行持久配置。</p><hr>`,39)),n("p",null,[s[6]||(s[6]=a("via: ",-1)),p(e,{href:"https://fedoramagazine.org/configure-wireguard-vpns-with-networkmanager/"},{default:i(()=>[...s[5]||(s[5]=[a("https://fedoramagazine.org/configure-wireguard-vpns-with-networkmanager/",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("作者：",-1)),p(e,{href:"https://fedoramagazine.org/author/malgnuz/"},{default:i(()=>[...s[7]||(s[7]=[a("Maurizio Garcia",-1)])]),_:1}),s[12]||(s[12]=a(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[8]||(s[8]=[a("lujun9972",-1)])]),_:1}),s[13]||(s[13]=a(" 译者：",-1)),p(e,{href:"https://github.com/DCOLIVERSUN"},{default:i(()=>[...s[9]||(s[9]=[a("DCOLIVERSUN",-1)])]),_:1}),s[14]||(s[14]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[16]||(s[16]=[a("Linux中国",-1)])]),_:1}),s[19]||(s[19]=a(" 荣誉推出",-1))])])}const C=l(g,[["render",c]]);export{P as __pageData,C as default};
