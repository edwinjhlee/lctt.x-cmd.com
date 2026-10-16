import{_ as t,a0 as o,w as d,s as r,ao as e,I as a,x as n,a1 as l,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const c=JSON.parse('{"title":"旅行時通過樹莓派和 iPad Pro 備份圖片 | LCTT x X-CMD","titleTemplate":false,"description":"旅行時通過樹莓派和 iPad Pro 備份圖片 | LCTT (201609) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"旅行時通過樹莓派和 iPad Pro 備份圖片 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"旅行時通過樹莓派和 iPad Pro 備份圖片 | LCTT (201609) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201609/20160626 Backup Photos While Traveling With an Ipad Pro and a Raspberry Pi","title":"旅行時通過樹莓派和 iPad Pro 備份圖片","tag":"201609","desc":""},"relativePath":"201609/20160626 Backup Photos While Traveling With an Ipad Pro and a Raspberry Pi.md","filePath":"[post].md"}'),u={name:"201609/20160626 Backup Photos While Traveling With an Ipad Pro and a Raspberry Pi.md"};function g(h,s,b,f,m,k){const p=o("Link");return d(),r("div",null,[s[92]||(s[92]=e('<h1 id="旅行時通過樹莓派和-ipad-pro-備份圖片" tabindex="-1">旅行時通過樹莓派和 iPad Pro 備份圖片 <a class="header-anchor" href="#旅行時通過樹莓派和-ipad-pro-備份圖片" aria-label="Permalink to “旅行時通過樹莓派和 iPad Pro 備份圖片”">​</a></h1><p><img src="http://www.movingelectrons.net/images/bkup_photos_main.jpg" alt=""></p><p><em>旅行中備份圖片 - 組件</em></p><h3 id="介紹" tabindex="-1">介紹 <a class="header-anchor" href="#介紹" aria-label="Permalink to “介紹”">​</a></h3><p>我在很長的時間內一直在尋找一個旅行中備份圖片的理想方法，把 SD 卡放進你的相機包會讓你暴露在太多的風險之中：SD 卡可能丟失或者被盜，數據可能損壞或者在傳輸過程中失敗。比較好的一個選擇是複製到另外一個介質中，即使它也是個 SD 卡，並且將它放到一個比較安全的地方去，備份到遠端也是一個可行的辦法，但是如果去了一個沒有網絡的地方就不太可行了。</p><p>我理想的備份步驟需要下面的工具:</p>',6)),a("ol",null,[s[3]||(s[3]=a("li",null,"用一台 iPad pro 而不是一台筆記本。我喜歡輕裝旅行，我的大部分旅程都是商務相關的（而不是拍攝休閒的），我痛恨帶着個人筆記本的時候還得帶着商務本。而我的 iPad 卻一直帶着，這就是我為什麼選擇它的原因。",-1)),s[4]||(s[4]=a("li",null,"用盡可能少的硬件設備。",-1)),s[5]||(s[5]=a("li",null,"設備之間的連接需要很安全。我需要在旅館和機場使用這套設備，所以設備之間的連接需要是封閉而加密的。",-1)),a("li",null,[s[1]||(s[1]=n("整個過程應該是可靠穩定的，我還用過其他的路由器/組合設備，但是",-1)),l(p,{href:"http://bit.ly/1MVVtZi"},{default:i(()=>[...s[0]||(s[0]=[n("效果不太理想",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))])]),s[93]||(s[93]=a("h3",{id:"設備",tabindex:"-1"},[n("設備 "),a("a",{class:"header-anchor",href:"#設備","aria-label":"Permalink to “設備”"},"​")],-1)),s[94]||(s[94]=a("p",null,"我配置了一套滿足上面條件並且在未來可以擴充的設備，它包含下面這些部件的使用:",-1)),a("ol",null,[a("li",null,[l(p,{href:"http://www.amazon.com/dp/B01D3NZIMA/?tag=movinelect0e-20"},{default:i(()=>[...s[6]||(s[6]=[n("9.7 英寸的 iPad Pro",-1)])]),_:1}),s[7]||(s[7]=n("，這是本文寫作時最強大、輕薄的 iOS 設備，蘋果筆不是必需的，但是作為零件之一，當我在路上可以做一些編輯工作，所有的重活由樹莓派做 ，其他設備只能通過 SSH 連接就行。",-1))]),a("li",null,[s[9]||(s[9]=n("安裝了 Raspbian 操作系統",-1)),l(p,{href:"http://www.amazon.com/dp/B01CD5VC92/?tag=movinelect0e-20"},{default:i(()=>[...s[8]||(s[8]=[n("樹莓派 3",-1)])]),_:1}),s[10]||(s[10]=n("（LCTT 譯註：Raspbian 是基於 Debian 的樹莓派操作系統）。",-1))]),a("li",null,[s[13]||(s[13]=n("樹莓派的 ",-1)),l(p,{href:"http://www.amazon.com/dp/B010Q57T02/?tag=movinelect0e-20"},{default:i(()=>[...s[11]||(s[11]=[n("Mini SD卡",-1)])]),_:1}),s[14]||(s[14]=n(" 和 ",-1)),l(p,{href:"http://www.amazon.com/dp/B01F1PSFY6/?tag=movinelect0e-20"},{default:i(()=>[...s[12]||(s[12]=[n("盒子/外殼",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),a("li",null,[l(p,{href:"http://amzn.to/293kPqX"},{default:i(()=>[...s[16]||(s[16]=[n("128G 的優盤",-1)])]),_:1}),s[19]||(s[19]=n("，對於我是夠用了，你可以買個更大的。你也可以買個像",-1)),l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[17]||(s[17]=[n("這樣",-1)])]),_:1}),s[20]||(s[20]=n("的移動硬盤，但是樹莓派沒法通過 USB 給移動硬盤提供足夠的電量，這意味你需要額外準備一個",-1)),l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[18]||(s[18]=[n("供電的 USB hub",-1)])]),_:1}),s[21]||(s[21]=n(" 以及電纜，這就破壞了我們讓設備輕薄的初衷。",-1))]),a("li",null,[l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[22]||(s[22]=[n("SD 讀卡器",-1)])]),_:1})]),a("li",null,[l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[23]||(s[23]=[n("另外的 SD 卡",-1)])]),_:1}),s[24]||(s[24]=n("，我會使用幾個 SD 卡，在用滿之前就會立即換一個，這樣就會讓我在一次旅途當中的照片散佈在不同的 SD 卡上。",-1))])]),s[95]||(s[95]=a("p",null,"下圖展示了這些設備之間如何相互連接。",-1)),s[96]||(s[96]=a("p",null,[a("img",{src:"http://www.movingelectrons.net/images/bkup_photos_diag.jpg",alt:""})],-1)),s[97]||(s[97]=a("p",null,[a("em",null,"旅行時照片的備份-流程圖")],-1)),s[98]||(s[98]=a("p",null,"樹莓派會作為一個安全的熱點。它會創建一個自己的 WPA2 加密的 WIFI 網絡，iPad Pro 會連入其中。雖然有很多在線教程教你如何創建 Ad Hoc 網絡（計算機到計算機的單對單網絡），還更簡單一些，但是它的連接是不加密的，而且附件的設備很容易就能連接進去。因此我選擇創建 WIFI 網絡。",-1)),a("p",null,[s[26]||(s[26]=n("相機的 SD 卡通過 SD 讀卡器插到樹莓派 USB 端口之一，128G 的大容量優盤一直插在樹莓派的另外一個 USB 端口上，我選擇了一款",-1)),l(p,{href:"http://amzn.to/293kPqX"},{default:i(()=>[...s[25]||(s[25]=[n("閃迪的",-1)])]),_:1}),s[27]||(s[27]=n("，因為體積比較小。主要的思路就是通過 Python 腳本把 SD 卡的照片備份到優盤上，備份過程是增量備份，每次腳本運行時都只有變化的（比如新拍攝的照片）部分會添加到備份文件夾中，所以這個過程特別快。如果你有很多的照片或者拍攝了很多 RAW 格式的照片，在就是個巨大的優勢。iPad 將用來運行 Python 腳本，而且用來瀏覽 SD 卡和優盤的文件。",-1))]),s[99]||(s[99]=a("p",null,"作為額外的好處，如果給樹莓派連上一根能上網的網線（比如通過以太網口），那麼它就可以共享互聯網連接給那些通過 WIFI 連入的設備。",-1)),s[100]||(s[100]=a("h3",{id:"_1-樹莓派的設置",tabindex:"-1"},[n("1. 樹莓派的設置 "),a("a",{class:"header-anchor",href:"#_1-樹莓派的設置","aria-label":"Permalink to “1. 樹莓派的設置”"},"​")],-1)),s[101]||(s[101]=a("p",null,"這部分需要你捲起袖子親自動手了，我們要用到 Raspbian 的命令列模式，我會盡可能詳細的介紹，方便大家進行下去。",-1)),s[102]||(s[102]=a("h4",{id:"安裝和配置-raspbian",tabindex:"-1"},[n("安裝和配置 Raspbian "),a("a",{class:"header-anchor",href:"#安裝和配置-raspbian","aria-label":"Permalink to “安裝和配置 Raspbian”"},"​")],-1)),a("p",null,[s[29]||(s[29]=n("給樹莓派連接鼠標、鍵盤和 LCD 顯示器，將 SD 卡插到樹莓派上，按照",-1)),l(p,{href:"https://www.raspberrypi.org/downloads/noobs/"},{default:i(()=>[...s[28]||(s[28]=[n("樹莓派官網",-1)])]),_:1}),s[30]||(s[30]=n("的步驟安裝 Raspbian。",-1))]),s[103]||(s[103]=e(`<p>安裝完後，打開 Raspbian 的終端，執行下面的命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get upgrade</span></span></code></pre></div><p>這將升級機器上所有的軟件到最新，我將樹莓派連接到本地網絡，而且為了安全更改了默認的密碼。</p>`,3)),a("p",null,[s[32]||(s[32]=n("Raspbian 默認開啓了 SSH，這樣所有的設置可以在一個遠程的設備上完成。我也設置了 RSA 驗證，但這是可選的功能，可以在",-1)),l(p,{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md"},{default:i(()=>[...s[31]||(s[31]=[n("這裏",-1)])]),_:1}),s[33]||(s[33]=n("查看更多信息。",-1))]),a("p",null,[s[36]||(s[36]=n("這是一個在 Mac 上在 ",-1)),l(p,{href:"https://www.iterm2.com/"},{default:i(()=>[...s[34]||(s[34]=[n("iTerm",-1)])]),_:1}),s[37]||(s[37]=n(" 裏建立 SSH 連接到樹莓派上的截圖",-1)),l(p,{href:"https://www.iterm2.com/"},{default:i(()=>[...s[35]||(s[35]=[n("14",-1)])]),_:1}),s[38]||(s[38]=n("。（LCTT 譯註：原文圖丟失。）",-1))]),s[104]||(s[104]=a("h4",{id:"建立-wpa2-加密的-wifi-ap",tabindex:"-1"},[n("建立 WPA2 加密的 WIFI AP "),a("a",{class:"header-anchor",href:"#建立-wpa2-加密的-wifi-ap","aria-label":"Permalink to “建立 WPA2 加密的 WIFI AP”"},"​")],-1)),a("p",null,[s[40]||(s[40]=n("安裝過程基於",-1)),l(p,{href:"https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/"},{default:i(()=>[...s[39]||(s[39]=[n("這篇文章",-1)])]),_:1}),s[41]||(s[41]=n("，根據我的情況進行了調整。",-1))]),s[105]||(s[105]=e(`<p><strong>1. 安裝軟件包</strong></p><p>我們需要安裝下面的軟件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install hostapd</span></span>
<span class="line"><span>sudo apt-get install dnsmasq</span></span></code></pre></div><p>hostapd 用來使用內置的 WiFi 來創建 AP，dnsmasp 是一個組合的 DHCP 和 DNS 服務其，很容易設置。</p><p><strong>2. 編輯 dhcpcd.conf</strong></p><p>通過以太網連接樹莓派，樹莓派上的網絡接口配置由 <code>dhcpd</code> 控制，因此我們首先忽略這一點，將 <code>wlan0</code> 設置為一個靜態的 IP。</p><p>用 <code>sudo nano /etc/dhcpcd.conf</code> 命令打開 dhcpcd 的配置文件，在最後一行添加上如下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>denyinterfaces wlan0</span></span></code></pre></div><p>注意：它必須放在如果已經有的其它接口行<strong>之上</strong>。</p><p><strong>3. 編輯接口</strong></p><p>現在設置靜態 IP，使用 <code>sudo nano /etc/network/interfaces</code> 打開接口配置文件，按照如下信息編輯<code>wlan0</code>部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>allow-hotplug wlan0</span></span>
<span class="line"><span>iface wlan0 inet static</span></span>
<span class="line"><span>    address 192.168.1.1</span></span>
<span class="line"><span>    netmask 255.255.255.0</span></span>
<span class="line"><span>    network 192.168.1.0</span></span>
<span class="line"><span>    broadcast 192.168.1.255</span></span>
<span class="line"><span>#    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf</span></span></code></pre></div><p>同樣，然後 <code>wlan1</code> 編輯如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#allow-hotplug wlan1</span></span>
<span class="line"><span>#iface wlan1 inet manual</span></span>
<span class="line"><span>#    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf</span></span></code></pre></div><p>重要： 使用 <code>sudo service dhcpcd restart</code> 命令重啓 <code>dhcpd</code>服務，然後用 <code>sudo ifdown eth0; sudo ifup wlan0</code> 命令來重載<code>wlan0</code>的配置。</p><p><strong>4. 配置 Hostapd</strong></p><p>接下來，我們需要配置 hostapd，使用 <code>sudo nano /etc/hostapd/hostapd.conf</code> 命令創建一個新的配置文件，內容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interface=wlan0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use the nl80211 driver with the brcmfmac driver</span></span>
<span class="line"><span>driver=nl80211</span></span>
<span class="line"><span></span></span>
<span class="line"><span># This is the name of the network</span></span>
<span class="line"><span>ssid=YOUR_NETWORK_NAME_HERE</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use the 2.4GHz band</span></span>
<span class="line"><span>hw_mode=g</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use channel 6</span></span>
<span class="line"><span>channel=6</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Enable 802.11n</span></span>
<span class="line"><span>ieee80211n=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Enable QoS Support</span></span>
<span class="line"><span>wmm_enabled=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Enable 40MHz channels with 20ns guard interval</span></span>
<span class="line"><span>ht_capab=[HT40][SHORT-GI-20][DSSS_CCK-40]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Accept all MAC addresses</span></span>
<span class="line"><span>macaddr_acl=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use WPA authentication</span></span>
<span class="line"><span>auth_algs=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Require clients to know the network name</span></span>
<span class="line"><span>ignore_broadcast_ssid=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use WPA2</span></span>
<span class="line"><span>wpa=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use a pre-shared key</span></span>
<span class="line"><span>wpa_key_mgmt=WPA-PSK</span></span>
<span class="line"><span></span></span>
<span class="line"><span># The network passphrase</span></span>
<span class="line"><span>wpa_passphrase=YOUR_NEW_WIFI_PASSWORD_HERE</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Use AES, instead of TKIP</span></span>
<span class="line"><span>rsn_pairwise=CCMP</span></span></code></pre></div><p>配置完成後，我們需要告訴<code>dhcpcd</code> 在系統啓動運行時到哪裏尋找配置文件。 使用 <code>sudo nano /etc/default/hostapd</code> 命令打開默認配置文件，然後找到<code>#DAEMON_CONF=&quot;&quot;</code> 替換成<code>DAEMON_CONF=&quot;/etc/hostapd/hostapd.conf&quot;</code>。</p><p><strong>5. 配置 Dnsmasq</strong></p><p>自帶的 dnsmasp 配置文件包含很多信息方便你使用它，但是我們不需要那麼多選項，我建議把它移動到別的地方（而不要刪除它），然後自己創建一個新文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig  </span></span>
<span class="line"><span>sudo nano /etc/dnsmasq.conf</span></span></code></pre></div><p>粘貼下面的信息到新文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interface=wlan0      # Use interface wlan0</span></span>
<span class="line"><span>listen-address=192.168.1.1 # Explicitly specify the address to listen on</span></span>
<span class="line"><span>bind-interfaces      # Bind to the interface to make sure we aren&#39;t sending things elsewhere</span></span>
<span class="line"><span>server=8.8.8.8       # Forward DNS requests to Google DNS</span></span>
<span class="line"><span>domain-needed        # Don&#39;t forward short names</span></span>
<span class="line"><span>bogus-priv           # Never forward addresses in the non-routed address spaces.</span></span>
<span class="line"><span>dhcp-range=192.168.1.50,192.168.1.100,12h # Assign IP addresses in that range  with a 12 hour lease time</span></span></code></pre></div><p><strong>6. 設置 IPv4 轉發</strong></p><p>最後我們需要做的事就是配置包轉發，用 <code>sudo nano /etc/sysctl.conf</code> 命令打開 <code>sysctl.conf</code> 文件，將包含 <code>net.ipv4.ip_forward=1</code>的那一行之前的#號刪除，它將在下次重啓時生效。</p><p>我們還需要給連接到樹莓派的設備通過 WIFI 分享互聯網連接，做一個 <code>wlan0</code>和 <code>eth0</code> 之間的 NAT。我們可以參照下面的腳本來實現。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE  </span></span>
<span class="line"><span>sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT  </span></span>
<span class="line"><span>sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT</span></span></code></pre></div><p>我命名這個腳本名為 <code>hotspot-boot.sh</code>，然後讓它可以執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod 755 hotspot-boot.sh</span></span></code></pre></div><p>該腳本應該在樹莓派啓動的時候運行。有很多方法實現，下面是我實現的方式：</p>`,31)),a("ol",null,[s[51]||(s[51]=a("li",null,[n("把文件放到"),a("code",null,"/home/pi/scripts"),n("目錄下。")],-1)),a("li",null,[s[43]||(s[43]=n("輸入",-1)),s[44]||(s[44]=a("code",null,"sudo nano /etc/rc.local",-1)),s[45]||(s[45]=n("命令編輯 ",-1)),s[46]||(s[46]=a("code",null,"rc.local",-1)),s[47]||(s[47]=n(" 文件，將運行該腳本的命令放到 ",-1)),s[48]||(s[48]=a("code",null,"exit 0",-1)),s[49]||(s[49]=n("之前。（更多信息參照",-1)),l(p,{href:"https://www.raspberrypi.org/documentation/linux/usage/rc-local.md"},{default:i(()=>[...s[42]||(s[42]=[n("這裏",-1)])]),_:1}),s[50]||(s[50]=n("）。",-1))])]),s[106]||(s[106]=e(`<p>編輯後<code>rc.local</code>看起來像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh -e</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># rc.local</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># This script is executed at the end of each multiuser runlevel.</span></span>
<span class="line"><span># Make sure that the script will &quot;exit 0&quot; on success or any other</span></span>
<span class="line"><span># value on error.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># In order to enable or disable this script just change the execution</span></span>
<span class="line"><span># bits.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># By default this script does nothing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Print the IP address</span></span>
<span class="line"><span>_IP=$(hostname -I) || true</span></span>
<span class="line"><span>if [ &quot;$_IP&quot; ]; then</span></span>
<span class="line"><span>  printf &quot;My IP address is %s\\n&quot; &quot;$_IP&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo /home/pi/scripts/hotspot-boot.sh &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit 0</span></span></code></pre></div><h4 id="安裝-samba-服務和-ntfs-兼容驅動" tabindex="-1">安裝 Samba 服務和 NTFS 兼容驅動 <a class="header-anchor" href="#安裝-samba-服務和-ntfs-兼容驅動" aria-label="Permalink to “安裝 Samba 服務和 NTFS 兼容驅動”">​</a></h4>`,3)),a("p",null,[s[53]||(s[53]=n("我們要安裝下面幾個軟件來啓用 samba 協議，使",-1)),l(p,{href:"https://itunes.apple.com/us/app/filebrowser-access-files-on/id364738545?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[52]||(s[52]=[n("文件瀏覽器",-1)])]),_:1}),s[54]||(s[54]=n("能夠訪問樹莓派分享的文件夾，",-1)),s[55]||(s[55]=a("code",null,"ntfs-3g",-1)),s[56]||(s[56]=n(" 可以使我們能夠訪問移動硬盤中 ntfs 文件系統的文件。",-1))]),s[107]||(s[107]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install ntfs-3g</span></span>
<span class="line"><span>sudo apt-get install samba samba-common-bin</span></span></code></pre></div>`,1)),a("p",null,[s[58]||(s[58]=n("你可以參照",-1)),l(p,{href:"http://www.howtogeek.com/139433/how-to-turn-a-raspberry-pi-into-a-low-power-network-storage-device/"},{default:i(()=>[...s[57]||(s[57]=[n("這些文檔",-1)])]),_:1}),s[59]||(s[59]=n("來配置 Samba。",-1))]),s[108]||(s[108]=e(`<p>重要提示：參考的文檔介紹的是掛載外置硬盤到樹莓派上，我們不這樣做，是因為在這篇文章寫作的時候，樹莓派在啓動時的 auto-mounts 功能同時將 SD 卡和優盤掛載到<code>/media/pi/</code>上，該文章有一些多餘的功能我們也不會採用。</p><h3 id="_2-python-腳本" tabindex="-1">2. Python 腳本 <a class="header-anchor" href="#_2-python-腳本" aria-label="Permalink to “2. Python 腳本”">​</a></h3><p>樹莓派配置好後，我們需要開發腳本來實際拷貝和備份照片。注意，這個腳本只是提供了特定的自動化備份進程，如果你有基本的 Linux/樹莓派命令列操作的技能，你可以 ssh 進樹莓派，然後創建需要的文件夾，使用<code>cp</code>或<code>rsync</code>命令拷貝你自己的照片從一個設備到另外一個設備上。在腳本里我們用<code>rsync</code>命令，這個命令比較可靠而且支持增量備份。</p><p>這個過程依賴兩個文件，腳本文件自身和<code>backup_photos.conf</code>這個配置文件，後者只有幾行包含被掛載的目的驅動器（優盤）和應該掛載到哪個目錄，它看起來是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mount folder=/media/pi/</span></span>
<span class="line"><span>destination folder=PDRIVE128GB</span></span></code></pre></div><p>重要提示：在這個符號<code>=</code>前後不要添加多餘的空格，否則腳本會失效。</p><p>下面是這個 Python 腳本，我把它命名為<code>backup_photos.py</code>，把它放到了<code>/home/pi/scripts/</code>目錄下，我在每行都做了註釋可以方便的查看各行的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>from sh import rsync</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>腳本將掛載到 /media/pi 的 SD 卡上的內容複製到目的磁盤的同名目錄下，目的磁盤的名字在 .conf文件裏定義好了。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Argument:  label/name of the mounted SD Card.</span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CONFIG_FILE = &#39;/home/pi/scripts/backup_photos.conf&#39;</span></span>
<span class="line"><span>ORIGIN_DEV = sys.argv[1]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def create_folder(path):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print (&#39;attempting to create destination folder: &#39;,path)</span></span>
<span class="line"><span>    if not os.path.exists(path):</span></span>
<span class="line"><span>        try: </span></span>
<span class="line"><span>            os.mkdir(path)</span></span>
<span class="line"><span>            print (&#39;Folder created.&#39;)</span></span>
<span class="line"><span>        except:</span></span>
<span class="line"><span>            print (&#39;Folder could not be created. Stopping.&#39;)</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        print (&#39;Folder already in path. Using that instead.&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>confFile = open(CONFIG_FILE,&#39;rU&#39;) </span></span>
<span class="line"><span>#重要：: rU 選項將以統一換行模式打開文件，</span></span>
<span class="line"><span>#所以 \\n 和/或 \\r 都被識別為一個新行。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>confList = confFile.readlines()</span></span>
<span class="line"><span>confFile.close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>for line in confList:</span></span>
<span class="line"><span>    line = line.strip(&#39;\\n&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        name , value = line.split(&#39;=&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if name == &#39;mount folder&#39;:</span></span>
<span class="line"><span>            mountFolder = value</span></span>
<span class="line"><span>        elif name == &#39;destination folder&#39;:</span></span>
<span class="line"><span>            destDevice = value</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except ValueError:</span></span>
<span class="line"><span>        print (&#39;Incorrect line format. Passing.&#39;)</span></span>
<span class="line"><span>        pass</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>destFolder = mountFolder+destDevice+&#39;/&#39;+ORIGIN_DEV</span></span>
<span class="line"><span>create_folder(destFolder)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print (&#39;Copying files...&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 取消這行備註將刪除不在源處的文件</span></span>
<span class="line"><span># rsync(&quot;-av&quot;, &quot;--delete&quot;, mountFolder+ORIGIN_DEV, destFolder)</span></span>
<span class="line"><span>rsync(&quot;-av&quot;, mountFolder+ORIGIN_DEV+&#39;/&#39;, destFolder)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print (&#39;Done.&#39;)</span></span></code></pre></div><h3 id="_3-ipad-pro-的配置" tabindex="-1">3. iPad Pro 的配置 <a class="header-anchor" href="#_3-ipad-pro-的配置" aria-label="Permalink to “3. iPad Pro 的配置”">​</a></h3>`,9)),a("p",null,[s[62]||(s[62]=n("因為重活都由樹莓派幹了，文件不通過 iPad Pro 傳輸，這比我",-1)),l(p,{href:"http://bit.ly/1MVVtZi"},{default:i(()=>[...s[60]||(s[60]=[n("之前嘗試的一種方案",-1)])]),_:1}),s[63]||(s[63]=n("有巨大的優勢。我們在 iPad 上只需要安裝上 ",-1)),l(p,{href:"https://itunes.apple.com/us/app/prompt-2/id917437289?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[61]||(s[61]=[n("Prompt2",-1)])]),_:1}),s[64]||(s[64]=n(" 來通過 SSH 連接樹莓派就行了，這樣你既可以運行 Python 腳本也可以手動複製文件了。",-1))]),s[109]||(s[109]=a("p",null,[a("img",{src:"http://www.movingelectrons.net/images/bkup_photos_ipad&rpi_prompt.jpg",alt:""})],-1)),s[110]||(s[110]=a("p",null,[a("em",null,"iPad 用 Prompt2 通過 SSH 連接樹莓派")],-1)),a("p",null,[s[66]||(s[66]=n("因為我們安裝了 Samba，我們可以以更圖形化的方式訪問連接到樹莓派的 USB 設備，你可以看視頻，在不同的設備之間複製和移動文件，",-1)),l(p,{href:"https://itunes.apple.com/us/app/filebrowser-access-files-on/id364738545?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[65]||(s[65]=[n("文件瀏覽器",-1)])]),_:1}),s[67]||(s[67]=n("對於這種用途非常完美。",-1))]),s[111]||(s[111]=a("h3",{id:"_4-將它們結合在一起",tabindex:"-1"},[n("4. 將它們結合在一起 "),a("a",{class:"header-anchor",href:"#_4-將它們結合在一起","aria-label":"Permalink to “4. 將它們結合在一起”"},"​")],-1)),s[112]||(s[112]=a("p",null,[n("我們假設"),a("code",null,"SD32GB-03"),n("是連接到樹莓派 USB 端口之一的 SD 卡的卷標，"),a("code",null,"PDRIVE128GB"),n("是那個優盤的卷標，也連接到設備上，並在上面指出的配置文件中定義好。如果我們想要備份 SD 卡上的圖片，我們需要這麼做：")],-1)),a("ol",null,[s[71]||(s[71]=a("li",null,"給樹莓派加電打開，將驅動器自動掛載好。",-1)),s[72]||(s[72]=a("li",null,"連接樹莓派配置好的 WIFI 網絡。",-1)),a("li",null,[s[69]||(s[69]=n("用 ",-1)),l(p,{href:"https://itunes.apple.com/us/app/prompt-2/id917437289?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[68]||(s[68]=[n("Prompt2",-1)])]),_:1}),s[70]||(s[70]=n(" 這個 app 通過 SSH 連接到樹莓派。",-1))]),s[73]||(s[73]=a("li",null,[n("連接好後輸入下面的命令："),a("code",null,"python3 backup_photos.py SD32GB-03")],-1))]),s[113]||(s[113]=e('<p>首次備份需要一些時間，這依賴於你的 SD 卡使用了多少容量。這意味着你需要一直保持樹莓派和 iPad 設備連接不斷，你可以在腳本運行之前通過 <code>nohup</code> 命令解決：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nohup python3 backup_photos.py SD32GB-03 &amp;</span></span></code></pre></div><p><img src="http://www.movingelectrons.net/images/bkup_photos_ipad&amp;rpi_finished.png" alt=""></p><p><em>運行完成的腳本如圖所示</em></p><h3 id="未來的定製" tabindex="-1">未來的定製 <a class="header-anchor" href="#未來的定製" aria-label="Permalink to “未來的定製”">​</a></h3>',5)),a("p",null,[s[76]||(s[76]=n("我在樹莓派上安裝了 vnc 服務，這樣我可以通過其它計算機或在 iPad 上用 ",-1)),l(p,{href:"https://itunes.apple.com/us/app/remoter-pro-vnc-ssh-rdp/id519768191?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[74]||(s[74]=[n("Remoter App",-1)])]),_:1}),s[77]||(s[77]=n("連接樹莓派的圖形界面，我安裝了 ",-1)),l(p,{href:"https://getsync.com/"},{default:i(()=>[...s[75]||(s[75]=[n("BitTorrent Sync",-1)])]),_:1}),s[78]||(s[78]=n(" 用來遠端備份我的圖片，當然需要先設置好。當我有了可以運行的解決方案之後，我會補充我的文章。",-1))]),s[114]||(s[114]=a("p",null,"你可以在下面發表你的評論和問題，我會在此頁下面回覆。",-1)),s[115]||(s[115]=a("hr",null,null,-1)),a("p",null,[s[80]||(s[80]=n("via: ",-1)),l(p,{href:"http://www.movingelectrons.net/blog/2016/06/26/backup-photos-while-traveling-with-a-raspberry-pi.html"},{default:i(()=>[...s[79]||(s[79]=[n("http://www.movingelectrons.net/blog/2016/06/26/backup-photos-while-traveling-with-a-raspberry-pi.html",-1)])]),_:1})]),a("p",null,[s[84]||(s[84]=n("作者：",-1)),l(p,{href:"http://www.movingelectrons.net/blog/2016/06/26/backup-photos-while-traveling-with-a-raspberry-pi.html"},{default:i(()=>[...s[81]||(s[81]=[n("Lenin",-1)])]),_:1}),s[85]||(s[85]=n(" 譯者：",-1)),l(p,{href:"https://github.com/jiajia9linuxer"},{default:i(()=>[...s[82]||(s[82]=[n("jiajia9linuxer",-1)])]),_:1}),s[86]||(s[86]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[83]||(s[83]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[89]||(s[89]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[87]||(s[87]=[n("LCTT",-1)])]),_:1}),s[90]||(s[90]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[88]||(s[88]=[n("Linux中國",-1)])]),_:1}),s[91]||(s[91]=n(" 榮譽推出",-1))])])}const y=t(u,[["render",g]]);export{c as __pageData,y as default};
