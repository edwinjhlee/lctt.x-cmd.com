import{_ as l,a0 as r,w as t,s as d,I as n,x as a,a1 as p,A as i,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"用 NetworkManager 配置 WireGuard 虛擬私有網絡 | LCTT x X-CMD","titleTemplate":false,"description":"用 NetworkManager 配置 WireGuard 虛擬私有網絡 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 NetworkManager 配置 WireGuard 虛擬私有網絡 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 NetworkManager 配置 WireGuard 虛擬私有網絡 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210503 Configure WireGuard VPNs with NetworkManager","title":"用 NetworkManager 配置 WireGuard 虛擬私有網絡","tag":"202105","desc":""},"relativePath":"202105/20210503 Configure WireGuard VPNs with NetworkManager.md","filePath":"[post].md"}'),g={name:"202105/20210503 Configure WireGuard VPNs with NetworkManager.md"};function c(u,s,h,k,b,w){const e=r("Link");return t(),d("div",null,[s[20]||(s[20]=n("h1",{id:"用-networkmanager-配置-wireguard-虛擬私有網絡",tabindex:"-1"},[a("用 NetworkManager 配置 WireGuard 虛擬私有網絡 "),n("a",{class:"header-anchor",href:"#用-networkmanager-配置-wireguard-虛擬私有網絡","aria-label":"Permalink to “用 NetworkManager 配置 WireGuard 虛擬私有網絡”"},"​")],-1)),s[21]||(s[21]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202105/10/235609bmbzbr4bikupbjjr.jpg",alt:""})],-1)),s[22]||(s[22]=n("p",null,[n("ruby",null,[a("虛擬私有網絡"),n("rt",null,"Virtual Private Networks")]),a("應用廣泛。如今有各種方案可供使用，用户可通過這些方案訪問任意類型的資源，同時保持其機密性與隱私性。")],-1)),s[23]||(s[23]=n("p",null,"最近，WireGuard 因為其簡單性、速度與安全性成為最廣泛使用的虛擬私有網絡協議之一。WireGuard 最早應用於 Linux 內核，但目前可以用在其他平台，例如 iOS、Android 等。",-1)),n("p",null,[s[1]||(s[1]=a("WireGuard 使用 UDP 作為其傳輸協議，並在 Critokey Routing（CKR）的基礎上建立對等節點之間的通信。每個對等節點（無論是服務器或客户端）都有一對",-1)),s[2]||(s[2]=n("ruby",null,[a("密鑰"),n("rt",null,"key")],-1)),s[3]||(s[3]=a("（公鑰與私鑰），公鑰與許可 IP 間建立通信連接。有關 WireGuard 更多信息請訪問其 ",-1)),p(e,{href:"https://www.wireguard.com/"},{default:i(()=>[...s[0]||(s[0]=[a("主頁",-1)])]),_:1}),s[4]||(s[4]=a("。",-1))]),s[24]||(s[24]=o(`<p>本文描述瞭如何在兩個對等節點（PeerA 與 PeerB）間設置 WireGuard。兩個節點均運行 Fedora Linux 系統，使用 NetworkManager 進行持久性配置。</p><h3 id="wireguard-設置與網絡配置" tabindex="-1">WireGuard 設置與網絡配置 <a class="header-anchor" href="#wireguard-設置與網絡配置" aria-label="Permalink to “WireGuard 設置與網絡配置”">​</a></h3><p>在 PeerA 與 PeerB 之間建立持久性虛擬私有網絡連接只需三步：</p><ol><li>安裝所需軟件包。</li><li>生成<ruby>密鑰對<rt>key pair</rt></ruby>。</li><li>配置 WireGuard 接口。</li></ol><h3 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to “安裝”">​</a></h3><p>在兩個對等節點（PeerA 與 PeerB）上安裝 <code>wireguard-tools</code> 軟件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo -i</span></span>
<span class="line"><span># dnf -y install wireguard-tools</span></span></code></pre></div><p>這個包可以從 Fedora Linux 更新庫中找到。它在 <code>/etc/wireguard/</code> 中創建一個配置目錄。在這裏你將創建密鑰和接口配置文件。</p><h3 id="生成密鑰對" tabindex="-1">生成密鑰對 <a class="header-anchor" href="#生成密鑰對" aria-label="Permalink to “生成密鑰對”">​</a></h3><p>現在，使用 <code>wg</code> 工具在每個節點上生成公鑰與私鑰：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd /etc/wireguard</span></span>
<span class="line"><span># wg genkey | tee privatekey | wg pubkey &gt; publickey</span></span></code></pre></div><h3 id="在-peera-上配置-wireguard-接口" tabindex="-1">在 PeerA 上配置 WireGuard 接口 <a class="header-anchor" href="#在-peera-上配置-wireguard-接口" aria-label="Permalink to “在 PeerA 上配置 WireGuard 接口”">​</a></h3><p>WireGuard 接口命名規則為 <code>wg0</code>、<code>wg1</code> 等等。完成下述步驟為 WireGuard 接口創建配置：</p><ul><li>PeerA 節點上配置想要的 IP 地址與掩碼。</li><li>該節點監聽的 UDP 端口。</li><li>PeerA 的私鑰。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; EOF &gt; /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>[Interface]</span></span>
<span class="line"><span>Address = 172.16.1.254/24</span></span>
<span class="line"><span>SaveConfig = true</span></span>
<span class="line"><span>ListenPort = 60001</span></span>
<span class="line"><span>PrivateKey = mAoO2RxlqRvCZZoHhUDiW3+zAazcZoELrYbgl+TpPEc=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Peer]</span></span>
<span class="line"><span>PublicKey = IOePXA9igeRqzCSzw4dhpl4+6l/NiQvkDSAnj5LtShw=</span></span>
<span class="line"><span>AllowedIPs = 172.16.1.2/32</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>允許 UDP 流量通過節點監聽的端口：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># firewall-cmd --add-port=60001/udp --permanent --zone=public</span></span>
<span class="line"><span># firewall-cmd --reload</span></span>
<span class="line"><span>success</span></span></code></pre></div><p>最後，將接口配置文件導入 NetworkManager。這樣，WireGuard 接口在重啓後將持續存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># nmcli con import type wireguard file /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>Connection &#39;wg0&#39; (21d939af-9e55-4df2-bacf-a13a4a488377) successfully added.</span></span></code></pre></div><p>驗證 <code>wg0</code>的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wg</span></span>
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
<span class="line"><span>-------------------------------------------------------------------------------</span></span></code></pre></div><p>上述輸出顯示接口 <code>wg0</code> 已連接。現在，它可以和虛擬私有網絡 IP 地址為 172.16.1.2 的對等節點通信。</p><h3 id="在-peerb-上配置-wireguard-接口" tabindex="-1">在 PeerB 上配置 WireGuard 接口 <a class="header-anchor" href="#在-peerb-上配置-wireguard-接口" aria-label="Permalink to “在 PeerB 上配置 WireGuard 接口”">​</a></h3><p>現在可以在第二個對等節點上創建 <code>wg0</code> 接口的配置文件了。確保你已經完成以下步驟：</p><ul><li>PeerB 節點上設置 IP 地址與掩碼。</li><li>PeerB 的私鑰。</li><li>PeerA 的公鑰。</li><li>PeerA 的 IP 地址或主機名、監聽 WireGuard 流量的 UDP 端口。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat &lt;&lt; EOF &gt; /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>[Interface]</span></span>
<span class="line"><span>Address = 172.16.1.2</span></span>
<span class="line"><span>SaveConfig = true</span></span>
<span class="line"><span>PrivateKey = UBiF85o7937fBK84c2qLFQwEr6eDhLSJsb5SAq1lF3c=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Peer]</span></span>
<span class="line"><span>PublicKey = FEPcisOjLaZsJbYSxb0CI5pvbXwIB3BCjMUPxuaLrH8=</span></span>
<span class="line"><span>AllowedIPs = 172.16.1.254/32</span></span>
<span class="line"><span>Endpoint = peera.example.com:60001</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>最後一步是將接口配置文件導入 NetworkManager。如上所述，這一步是重啓後保持 WireGuard 接口持續存在的關鍵。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># nmcli con import type wireguard file /etc/wireguard/wg0.conf</span></span>
<span class="line"><span>Connection &#39;wg0&#39; (39bdaba7-8d91-4334-bc8f-85fa978777d8) successfully added.</span></span></code></pre></div><p>驗證 <code>wg0</code> 的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wg</span></span>
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
<span class="line"><span>-------------------------------------------------------------------------------</span></span></code></pre></div><p>上述輸出顯示接口 <code>wg0</code> 已連接。現在，它可以和虛擬私有網絡 IP 地址為 172.16.1.254 的對等節點通信。</p><h3 id="驗證節點間通信" tabindex="-1">驗證節點間通信 <a class="header-anchor" href="#驗證節點間通信" aria-label="Permalink to “驗證節點間通信”">​</a></h3><p>完成上述步驟後，兩個對等節點可以通過虛擬私有網絡連接相互通信，以下是 ICMP 測試結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[root@peerb ~]# ping 172.16.1.254 -c 4</span></span>
<span class="line"><span>PING 172.16.1.254 (172.16.1.254) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=1 ttl=64 time=0.566 ms</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=2 ttl=64 time=1.33 ms</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=3 ttl=64 time=1.67 ms</span></span>
<span class="line"><span>64 bytes from 172.16.1.254: icmp_seq=4 ttl=64 time=1.47 ms</span></span></code></pre></div><p>在這種情況下，如果你在 PeerA 端口 60001 上捕獲 UDP 通信，則將看到依賴 WireGuard 協議的通信過程和加密的數據：</p><p><img src="https://fedoramagazine.org/wp-content/uploads/2021/04/capture-1024x601.png" alt="捕獲依賴 WireGuard 協議的節點間 UDP 流量"></p><h2 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h2><p>虛擬私有網絡很常見。在用於部署虛擬私有網絡的各種協議和工具中，WireGuard 是一種簡單、輕巧和安全的選擇。它可以在對等節點之間基於 CryptoKey 路由建立安全的點對點連接，過程非常簡單。此外，NetworkManager 支持 WireGuard 接口，允許重啓後進行持久配置。</p><hr>`,39)),n("p",null,[s[6]||(s[6]=a("via: ",-1)),p(e,{href:"https://fedoramagazine.org/configure-wireguard-vpns-with-networkmanager/"},{default:i(()=>[...s[5]||(s[5]=[a("https://fedoramagazine.org/configure-wireguard-vpns-with-networkmanager/",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("作者：",-1)),p(e,{href:"https://fedoramagazine.org/author/malgnuz/"},{default:i(()=>[...s[7]||(s[7]=[a("Maurizio Garcia",-1)])]),_:1}),s[12]||(s[12]=a(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[8]||(s[8]=[a("lujun9972",-1)])]),_:1}),s[13]||(s[13]=a(" 譯者：",-1)),p(e,{href:"https://github.com/DCOLIVERSUN"},{default:i(()=>[...s[9]||(s[9]=[a("DCOLIVERSUN",-1)])]),_:1}),s[14]||(s[14]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[16]||(s[16]=[a("Linux中國",-1)])]),_:1}),s[19]||(s[19]=a(" 榮譽推出",-1))])])}const C=l(g,[["render",c]]);export{P as __pageData,C as default};
