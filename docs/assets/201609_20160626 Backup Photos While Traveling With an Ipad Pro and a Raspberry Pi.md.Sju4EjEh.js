import{_ as t,a0 as o,w as d,s as r,ao as e,I as a,x as n,a1 as l,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const c=JSON.parse('{"title":"旅行时通过树莓派和 iPad Pro 备份图片 | LCTT x X-CMD","titleTemplate":false,"description":"旅行时通过树莓派和 iPad Pro 备份图片 | LCTT (201609) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"旅行时通过树莓派和 iPad Pro 备份图片 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"旅行时通过树莓派和 iPad Pro 备份图片 | LCTT (201609) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201609/20160626 Backup Photos While Traveling With an Ipad Pro and a Raspberry Pi","title":"旅行时通过树莓派和 iPad Pro 备份图片","tag":"201609","desc":""},"relativePath":"201609/20160626 Backup Photos While Traveling With an Ipad Pro and a Raspberry Pi.md","filePath":"[post].md"}'),u={name:"201609/20160626 Backup Photos While Traveling With an Ipad Pro and a Raspberry Pi.md"};function g(h,s,b,f,m,k){const p=o("Link");return d(),r("div",null,[s[92]||(s[92]=e('<h1 id="旅行时通过树莓派和-ipad-pro-备份图片" tabindex="-1">旅行时通过树莓派和 iPad Pro 备份图片 <a class="header-anchor" href="#旅行时通过树莓派和-ipad-pro-备份图片" aria-label="Permalink to “旅行时通过树莓派和 iPad Pro 备份图片”">​</a></h1><p><img src="http://www.movingelectrons.net/images/bkup_photos_main.jpg" alt=""></p><p><em>旅行中备份图片 - 组件</em></p><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h3><p>我在很长的时间内一直在寻找一个旅行中备份图片的理想方法，把 SD 卡放进你的相机包会让你暴露在太多的风险之中：SD 卡可能丢失或者被盗，数据可能损坏或者在传输过程中失败。比较好的一个选择是复制到另外一个介质中，即使它也是个 SD 卡，并且将它放到一个比较安全的地方去，备份到远端也是一个可行的办法，但是如果去了一个没有网络的地方就不太可行了。</p><p>我理想的备份步骤需要下面的工具:</p>',6)),a("ol",null,[s[3]||(s[3]=a("li",null,"用一台 iPad pro 而不是一台笔记本。我喜欢轻装旅行，我的大部分旅程都是商务相关的（而不是拍摄休闲的），我痛恨带着个人笔记本的时候还得带着商务本。而我的 iPad 却一直带着，这就是我为什么选择它的原因。",-1)),s[4]||(s[4]=a("li",null,"用尽可能少的硬件设备。",-1)),s[5]||(s[5]=a("li",null,"设备之间的连接需要很安全。我需要在旅馆和机场使用这套设备，所以设备之间的连接需要是封闭而加密的。",-1)),a("li",null,[s[1]||(s[1]=n("整个过程应该是可靠稳定的，我还用过其他的路由器/组合设备，但是",-1)),l(p,{href:"http://bit.ly/1MVVtZi"},{default:i(()=>[...s[0]||(s[0]=[n("效果不太理想",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))])]),s[93]||(s[93]=a("h3",{id:"设备",tabindex:"-1"},[n("设备 "),a("a",{class:"header-anchor",href:"#设备","aria-label":"Permalink to “设备”"},"​")],-1)),s[94]||(s[94]=a("p",null,"我配置了一套满足上面条件并且在未来可以扩充的设备，它包含下面这些部件的使用:",-1)),a("ol",null,[a("li",null,[l(p,{href:"http://www.amazon.com/dp/B01D3NZIMA/?tag=movinelect0e-20"},{default:i(()=>[...s[6]||(s[6]=[n("9.7 英寸的 iPad Pro",-1)])]),_:1}),s[7]||(s[7]=n("，这是本文写作时最强大、轻薄的 iOS 设备，苹果笔不是必需的，但是作为零件之一，当我在路上可以做一些编辑工作，所有的重活由树莓派做 ，其他设备只能通过 SSH 连接就行。",-1))]),a("li",null,[s[9]||(s[9]=n("安装了 Raspbian 操作系统",-1)),l(p,{href:"http://www.amazon.com/dp/B01CD5VC92/?tag=movinelect0e-20"},{default:i(()=>[...s[8]||(s[8]=[n("树莓派 3",-1)])]),_:1}),s[10]||(s[10]=n("（LCTT 译注：Raspbian 是基于 Debian 的树莓派操作系统）。",-1))]),a("li",null,[s[13]||(s[13]=n("树莓派的 ",-1)),l(p,{href:"http://www.amazon.com/dp/B010Q57T02/?tag=movinelect0e-20"},{default:i(()=>[...s[11]||(s[11]=[n("Mini SD卡",-1)])]),_:1}),s[14]||(s[14]=n(" 和 ",-1)),l(p,{href:"http://www.amazon.com/dp/B01F1PSFY6/?tag=movinelect0e-20"},{default:i(()=>[...s[12]||(s[12]=[n("盒子/外壳",-1)])]),_:1}),s[15]||(s[15]=n("。",-1))]),a("li",null,[l(p,{href:"http://amzn.to/293kPqX"},{default:i(()=>[...s[16]||(s[16]=[n("128G 的优盘",-1)])]),_:1}),s[19]||(s[19]=n("，对于我是够用了，你可以买个更大的。你也可以买个像",-1)),l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[17]||(s[17]=[n("这样",-1)])]),_:1}),s[20]||(s[20]=n("的移动硬盘，但是树莓派没法通过 USB 给移动硬盘提供足够的电量，这意味你需要额外准备一个",-1)),l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[18]||(s[18]=[n("供电的 USB hub",-1)])]),_:1}),s[21]||(s[21]=n(" 以及电缆，这就破坏了我们让设备轻薄的初衷。",-1))]),a("li",null,[l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[22]||(s[22]=[n("SD 读卡器",-1)])]),_:1})]),a("li",null,[l(p,{href:"http://amzn.to/290syFY"},{default:i(()=>[...s[23]||(s[23]=[n("另外的 SD 卡",-1)])]),_:1}),s[24]||(s[24]=n("，我会使用几个 SD 卡，在用满之前就会立即换一个，这样就会让我在一次旅途当中的照片散布在不同的 SD 卡上。",-1))])]),s[95]||(s[95]=a("p",null,"下图展示了这些设备之间如何相互连接。",-1)),s[96]||(s[96]=a("p",null,[a("img",{src:"http://www.movingelectrons.net/images/bkup_photos_diag.jpg",alt:""})],-1)),s[97]||(s[97]=a("p",null,[a("em",null,"旅行时照片的备份-流程图")],-1)),s[98]||(s[98]=a("p",null,"树莓派会作为一个安全的热点。它会创建一个自己的 WPA2 加密的 WIFI 网络，iPad Pro 会连入其中。虽然有很多在线教程教你如何创建 Ad Hoc 网络（计算机到计算机的单对单网络），还更简单一些，但是它的连接是不加密的，而且附件的设备很容易就能连接进去。因此我选择创建 WIFI 网络。",-1)),a("p",null,[s[26]||(s[26]=n("相机的 SD 卡通过 SD 读卡器插到树莓派 USB 端口之一，128G 的大容量优盘一直插在树莓派的另外一个 USB 端口上，我选择了一款",-1)),l(p,{href:"http://amzn.to/293kPqX"},{default:i(()=>[...s[25]||(s[25]=[n("闪迪的",-1)])]),_:1}),s[27]||(s[27]=n("，因为体积比较小。主要的思路就是通过 Python 脚本把 SD 卡的照片备份到优盘上，备份过程是增量备份，每次脚本运行时都只有变化的（比如新拍摄的照片）部分会添加到备份文件夹中，所以这个过程特别快。如果你有很多的照片或者拍摄了很多 RAW 格式的照片，在就是个巨大的优势。iPad 将用来运行 Python 脚本，而且用来浏览 SD 卡和优盘的文件。",-1))]),s[99]||(s[99]=a("p",null,"作为额外的好处，如果给树莓派连上一根能上网的网线（比如通过以太网口），那么它就可以共享互联网连接给那些通过 WIFI 连入的设备。",-1)),s[100]||(s[100]=a("h3",{id:"_1-树莓派的设置",tabindex:"-1"},[n("1. 树莓派的设置 "),a("a",{class:"header-anchor",href:"#_1-树莓派的设置","aria-label":"Permalink to “1. 树莓派的设置”"},"​")],-1)),s[101]||(s[101]=a("p",null,"这部分需要你卷起袖子亲自动手了，我们要用到 Raspbian 的命令行模式，我会尽可能详细的介绍，方便大家进行下去。",-1)),s[102]||(s[102]=a("h4",{id:"安装和配置-raspbian",tabindex:"-1"},[n("安装和配置 Raspbian "),a("a",{class:"header-anchor",href:"#安装和配置-raspbian","aria-label":"Permalink to “安装和配置 Raspbian”"},"​")],-1)),a("p",null,[s[29]||(s[29]=n("给树莓派连接鼠标、键盘和 LCD 显示器，将 SD 卡插到树莓派上，按照",-1)),l(p,{href:"https://www.raspberrypi.org/downloads/noobs/"},{default:i(()=>[...s[28]||(s[28]=[n("树莓派官网",-1)])]),_:1}),s[30]||(s[30]=n("的步骤安装 Raspbian。",-1))]),s[103]||(s[103]=e(`<p>安装完后，打开 Raspbian 的终端，执行下面的命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get upgrade</span></span></code></pre></div><p>这将升级机器上所有的软件到最新，我将树莓派连接到本地网络，而且为了安全更改了默认的密码。</p>`,3)),a("p",null,[s[32]||(s[32]=n("Raspbian 默认开启了 SSH，这样所有的设置可以在一个远程的设备上完成。我也设置了 RSA 验证，但这是可选的功能，可以在",-1)),l(p,{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md"},{default:i(()=>[...s[31]||(s[31]=[n("这里",-1)])]),_:1}),s[33]||(s[33]=n("查看更多信息。",-1))]),a("p",null,[s[36]||(s[36]=n("这是一个在 Mac 上在 ",-1)),l(p,{href:"https://www.iterm2.com/"},{default:i(()=>[...s[34]||(s[34]=[n("iTerm",-1)])]),_:1}),s[37]||(s[37]=n(" 里建立 SSH 连接到树莓派上的截图",-1)),l(p,{href:"https://www.iterm2.com/"},{default:i(()=>[...s[35]||(s[35]=[n("14",-1)])]),_:1}),s[38]||(s[38]=n("。（LCTT 译注：原文图丢失。）",-1))]),s[104]||(s[104]=a("h4",{id:"建立-wpa2-加密的-wifi-ap",tabindex:"-1"},[n("建立 WPA2 加密的 WIFI AP "),a("a",{class:"header-anchor",href:"#建立-wpa2-加密的-wifi-ap","aria-label":"Permalink to “建立 WPA2 加密的 WIFI AP”"},"​")],-1)),a("p",null,[s[40]||(s[40]=n("安装过程基于",-1)),l(p,{href:"https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/"},{default:i(()=>[...s[39]||(s[39]=[n("这篇文章",-1)])]),_:1}),s[41]||(s[41]=n("，根据我的情况进行了调整。",-1))]),s[105]||(s[105]=e(`<p><strong>1. 安装软件包</strong></p><p>我们需要安装下面的软件包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install hostapd</span></span>
<span class="line"><span>sudo apt-get install dnsmasq</span></span></code></pre></div><p>hostapd 用来使用内置的 WiFi 来创建 AP，dnsmasp 是一个组合的 DHCP 和 DNS 服务其，很容易设置。</p><p><strong>2. 编辑 dhcpcd.conf</strong></p><p>通过以太网连接树莓派，树莓派上的网络接口配置由 <code>dhcpd</code> 控制，因此我们首先忽略这一点，将 <code>wlan0</code> 设置为一个静态的 IP。</p><p>用 <code>sudo nano /etc/dhcpcd.conf</code> 命令打开 dhcpcd 的配置文件，在最后一行添加上如下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>denyinterfaces wlan0</span></span></code></pre></div><p>注意：它必须放在如果已经有的其它接口行<strong>之上</strong>。</p><p><strong>3. 编辑接口</strong></p><p>现在设置静态 IP，使用 <code>sudo nano /etc/network/interfaces</code> 打开接口配置文件，按照如下信息编辑<code>wlan0</code>部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>allow-hotplug wlan0</span></span>
<span class="line"><span>iface wlan0 inet static</span></span>
<span class="line"><span>    address 192.168.1.1</span></span>
<span class="line"><span>    netmask 255.255.255.0</span></span>
<span class="line"><span>    network 192.168.1.0</span></span>
<span class="line"><span>    broadcast 192.168.1.255</span></span>
<span class="line"><span>#    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf</span></span></code></pre></div><p>同样，然后 <code>wlan1</code> 编辑如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#allow-hotplug wlan1</span></span>
<span class="line"><span>#iface wlan1 inet manual</span></span>
<span class="line"><span>#    wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf</span></span></code></pre></div><p>重要： 使用 <code>sudo service dhcpcd restart</code> 命令重启 <code>dhcpd</code>服务，然后用 <code>sudo ifdown eth0; sudo ifup wlan0</code> 命令来重载<code>wlan0</code>的配置。</p><p><strong>4. 配置 Hostapd</strong></p><p>接下来，我们需要配置 hostapd，使用 <code>sudo nano /etc/hostapd/hostapd.conf</code> 命令创建一个新的配置文件，内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interface=wlan0</span></span>
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
<span class="line"><span>rsn_pairwise=CCMP</span></span></code></pre></div><p>配置完成后，我们需要告诉<code>dhcpcd</code> 在系统启动运行时到哪里寻找配置文件。 使用 <code>sudo nano /etc/default/hostapd</code> 命令打开默认配置文件，然后找到<code>#DAEMON_CONF=&quot;&quot;</code> 替换成<code>DAEMON_CONF=&quot;/etc/hostapd/hostapd.conf&quot;</code>。</p><p><strong>5. 配置 Dnsmasq</strong></p><p>自带的 dnsmasp 配置文件包含很多信息方便你使用它，但是我们不需要那么多选项，我建议把它移动到别的地方（而不要删除它），然后自己创建一个新文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig  </span></span>
<span class="line"><span>sudo nano /etc/dnsmasq.conf</span></span></code></pre></div><p>粘贴下面的信息到新文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>interface=wlan0      # Use interface wlan0</span></span>
<span class="line"><span>listen-address=192.168.1.1 # Explicitly specify the address to listen on</span></span>
<span class="line"><span>bind-interfaces      # Bind to the interface to make sure we aren&#39;t sending things elsewhere</span></span>
<span class="line"><span>server=8.8.8.8       # Forward DNS requests to Google DNS</span></span>
<span class="line"><span>domain-needed        # Don&#39;t forward short names</span></span>
<span class="line"><span>bogus-priv           # Never forward addresses in the non-routed address spaces.</span></span>
<span class="line"><span>dhcp-range=192.168.1.50,192.168.1.100,12h # Assign IP addresses in that range  with a 12 hour lease time</span></span></code></pre></div><p><strong>6. 设置 IPv4 转发</strong></p><p>最后我们需要做的事就是配置包转发，用 <code>sudo nano /etc/sysctl.conf</code> 命令打开 <code>sysctl.conf</code> 文件，将包含 <code>net.ipv4.ip_forward=1</code>的那一行之前的#号删除，它将在下次重启时生效。</p><p>我们还需要给连接到树莓派的设备通过 WIFI 分享互联网连接，做一个 <code>wlan0</code>和 <code>eth0</code> 之间的 NAT。我们可以参照下面的脚本来实现。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE  </span></span>
<span class="line"><span>sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT  </span></span>
<span class="line"><span>sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT</span></span></code></pre></div><p>我命名这个脚本名为 <code>hotspot-boot.sh</code>，然后让它可以执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo chmod 755 hotspot-boot.sh</span></span></code></pre></div><p>该脚本应该在树莓派启动的时候运行。有很多方法实现，下面是我实现的方式：</p>`,31)),a("ol",null,[s[51]||(s[51]=a("li",null,[n("把文件放到"),a("code",null,"/home/pi/scripts"),n("目录下。")],-1)),a("li",null,[s[43]||(s[43]=n("输入",-1)),s[44]||(s[44]=a("code",null,"sudo nano /etc/rc.local",-1)),s[45]||(s[45]=n("命令编辑 ",-1)),s[46]||(s[46]=a("code",null,"rc.local",-1)),s[47]||(s[47]=n(" 文件，将运行该脚本的命令放到 ",-1)),s[48]||(s[48]=a("code",null,"exit 0",-1)),s[49]||(s[49]=n("之前。（更多信息参照",-1)),l(p,{href:"https://www.raspberrypi.org/documentation/linux/usage/rc-local.md"},{default:i(()=>[...s[42]||(s[42]=[n("这里",-1)])]),_:1}),s[50]||(s[50]=n("）。",-1))])]),s[106]||(s[106]=e(`<p>编辑后<code>rc.local</code>看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/sh -e</span></span>
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
<span class="line"><span>exit 0</span></span></code></pre></div><h4 id="安装-samba-服务和-ntfs-兼容驱动" tabindex="-1">安装 Samba 服务和 NTFS 兼容驱动 <a class="header-anchor" href="#安装-samba-服务和-ntfs-兼容驱动" aria-label="Permalink to “安装 Samba 服务和 NTFS 兼容驱动”">​</a></h4>`,3)),a("p",null,[s[53]||(s[53]=n("我们要安装下面几个软件来启用 samba 协议，使",-1)),l(p,{href:"https://itunes.apple.com/us/app/filebrowser-access-files-on/id364738545?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[52]||(s[52]=[n("文件浏览器",-1)])]),_:1}),s[54]||(s[54]=n("能够访问树莓派分享的文件夹，",-1)),s[55]||(s[55]=a("code",null,"ntfs-3g",-1)),s[56]||(s[56]=n(" 可以使我们能够访问移动硬盘中 ntfs 文件系统的文件。",-1))]),s[107]||(s[107]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install ntfs-3g</span></span>
<span class="line"><span>sudo apt-get install samba samba-common-bin</span></span></code></pre></div>`,1)),a("p",null,[s[58]||(s[58]=n("你可以参照",-1)),l(p,{href:"http://www.howtogeek.com/139433/how-to-turn-a-raspberry-pi-into-a-low-power-network-storage-device/"},{default:i(()=>[...s[57]||(s[57]=[n("这些文档",-1)])]),_:1}),s[59]||(s[59]=n("来配置 Samba。",-1))]),s[108]||(s[108]=e(`<p>重要提示：参考的文档介绍的是挂载外置硬盘到树莓派上，我们不这样做，是因为在这篇文章写作的时候，树莓派在启动时的 auto-mounts 功能同时将 SD 卡和优盘挂载到<code>/media/pi/</code>上，该文章有一些多余的功能我们也不会采用。</p><h3 id="_2-python-脚本" tabindex="-1">2. Python 脚本 <a class="header-anchor" href="#_2-python-脚本" aria-label="Permalink to “2. Python 脚本”">​</a></h3><p>树莓派配置好后，我们需要开发脚本来实际拷贝和备份照片。注意，这个脚本只是提供了特定的自动化备份进程，如果你有基本的 Linux/树莓派命令行操作的技能，你可以 ssh 进树莓派，然后创建需要的文件夹，使用<code>cp</code>或<code>rsync</code>命令拷贝你自己的照片从一个设备到另外一个设备上。在脚本里我们用<code>rsync</code>命令，这个命令比较可靠而且支持增量备份。</p><p>这个过程依赖两个文件，脚本文件自身和<code>backup_photos.conf</code>这个配置文件，后者只有几行包含被挂载的目的驱动器（优盘）和应该挂载到哪个目录，它看起来是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mount folder=/media/pi/</span></span>
<span class="line"><span>destination folder=PDRIVE128GB</span></span></code></pre></div><p>重要提示：在这个符号<code>=</code>前后不要添加多余的空格，否则脚本会失效。</p><p>下面是这个 Python 脚本，我把它命名为<code>backup_photos.py</code>，把它放到了<code>/home/pi/scripts/</code>目录下，我在每行都做了注释可以方便的查看各行的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span>from sh import rsync</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;&#39;&#39;</span></span>
<span class="line"><span>脚本将挂载到 /media/pi 的 SD 卡上的内容复制到目的磁盘的同名目录下，目的磁盘的名字在 .conf文件里定义好了。</span></span>
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
<span class="line"><span>#重要：: rU 选项将以统一换行模式打开文件，</span></span>
<span class="line"><span>#所以 \\n 和/或 \\r 都被识别为一个新行。</span></span>
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
<span class="line"><span># 取消这行备注将删除不在源处的文件</span></span>
<span class="line"><span># rsync(&quot;-av&quot;, &quot;--delete&quot;, mountFolder+ORIGIN_DEV, destFolder)</span></span>
<span class="line"><span>rsync(&quot;-av&quot;, mountFolder+ORIGIN_DEV+&#39;/&#39;, destFolder)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print (&#39;Done.&#39;)</span></span></code></pre></div><h3 id="_3-ipad-pro-的配置" tabindex="-1">3. iPad Pro 的配置 <a class="header-anchor" href="#_3-ipad-pro-的配置" aria-label="Permalink to “3. iPad Pro 的配置”">​</a></h3>`,9)),a("p",null,[s[62]||(s[62]=n("因为重活都由树莓派干了，文件不通过 iPad Pro 传输，这比我",-1)),l(p,{href:"http://bit.ly/1MVVtZi"},{default:i(()=>[...s[60]||(s[60]=[n("之前尝试的一种方案",-1)])]),_:1}),s[63]||(s[63]=n("有巨大的优势。我们在 iPad 上只需要安装上 ",-1)),l(p,{href:"https://itunes.apple.com/us/app/prompt-2/id917437289?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[61]||(s[61]=[n("Prompt2",-1)])]),_:1}),s[64]||(s[64]=n(" 来通过 SSH 连接树莓派就行了，这样你既可以运行 Python 脚本也可以手动复制文件了。",-1))]),s[109]||(s[109]=a("p",null,[a("img",{src:"http://www.movingelectrons.net/images/bkup_photos_ipad&rpi_prompt.jpg",alt:""})],-1)),s[110]||(s[110]=a("p",null,[a("em",null,"iPad 用 Prompt2 通过 SSH 连接树莓派")],-1)),a("p",null,[s[66]||(s[66]=n("因为我们安装了 Samba，我们可以以更图形化的方式访问连接到树莓派的 USB 设备，你可以看视频，在不同的设备之间复制和移动文件，",-1)),l(p,{href:"https://itunes.apple.com/us/app/filebrowser-access-files-on/id364738545?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[65]||(s[65]=[n("文件浏览器",-1)])]),_:1}),s[67]||(s[67]=n("对于这种用途非常完美。",-1))]),s[111]||(s[111]=a("h3",{id:"_4-将它们结合在一起",tabindex:"-1"},[n("4. 将它们结合在一起 "),a("a",{class:"header-anchor",href:"#_4-将它们结合在一起","aria-label":"Permalink to “4. 将它们结合在一起”"},"​")],-1)),s[112]||(s[112]=a("p",null,[n("我们假设"),a("code",null,"SD32GB-03"),n("是连接到树莓派 USB 端口之一的 SD 卡的卷标，"),a("code",null,"PDRIVE128GB"),n("是那个优盘的卷标，也连接到设备上，并在上面指出的配置文件中定义好。如果我们想要备份 SD 卡上的图片，我们需要这么做：")],-1)),a("ol",null,[s[71]||(s[71]=a("li",null,"给树莓派加电打开，将驱动器自动挂载好。",-1)),s[72]||(s[72]=a("li",null,"连接树莓派配置好的 WIFI 网络。",-1)),a("li",null,[s[69]||(s[69]=n("用 ",-1)),l(p,{href:"https://itunes.apple.com/us/app/prompt-2/id917437289?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[68]||(s[68]=[n("Prompt2",-1)])]),_:1}),s[70]||(s[70]=n(" 这个 app 通过 SSH 连接到树莓派。",-1))]),s[73]||(s[73]=a("li",null,[n("连接好后输入下面的命令："),a("code",null,"python3 backup_photos.py SD32GB-03")],-1))]),s[113]||(s[113]=e('<p>首次备份需要一些时间，这依赖于你的 SD 卡使用了多少容量。这意味着你需要一直保持树莓派和 iPad 设备连接不断，你可以在脚本运行之前通过 <code>nohup</code> 命令解决：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>nohup python3 backup_photos.py SD32GB-03 &amp;</span></span></code></pre></div><p><img src="http://www.movingelectrons.net/images/bkup_photos_ipad&amp;rpi_finished.png" alt=""></p><p><em>运行完成的脚本如图所示</em></p><h3 id="未来的定制" tabindex="-1">未来的定制 <a class="header-anchor" href="#未来的定制" aria-label="Permalink to “未来的定制”">​</a></h3>',5)),a("p",null,[s[76]||(s[76]=n("我在树莓派上安装了 vnc 服务，这样我可以通过其它计算机或在 iPad 上用 ",-1)),l(p,{href:"https://itunes.apple.com/us/app/remoter-pro-vnc-ssh-rdp/id519768191?mt=8&uo=4&at=11lqkH"},{default:i(()=>[...s[74]||(s[74]=[n("Remoter App",-1)])]),_:1}),s[77]||(s[77]=n("连接树莓派的图形界面，我安装了 ",-1)),l(p,{href:"https://getsync.com/"},{default:i(()=>[...s[75]||(s[75]=[n("BitTorrent Sync",-1)])]),_:1}),s[78]||(s[78]=n(" 用来远端备份我的图片，当然需要先设置好。当我有了可以运行的解决方案之后，我会补充我的文章。",-1))]),s[114]||(s[114]=a("p",null,"你可以在下面发表你的评论和问题，我会在此页下面回复。",-1)),s[115]||(s[115]=a("hr",null,null,-1)),a("p",null,[s[80]||(s[80]=n("via: ",-1)),l(p,{href:"http://www.movingelectrons.net/blog/2016/06/26/backup-photos-while-traveling-with-a-raspberry-pi.html"},{default:i(()=>[...s[79]||(s[79]=[n("http://www.movingelectrons.net/blog/2016/06/26/backup-photos-while-traveling-with-a-raspberry-pi.html",-1)])]),_:1})]),a("p",null,[s[84]||(s[84]=n("作者：",-1)),l(p,{href:"http://www.movingelectrons.net/blog/2016/06/26/backup-photos-while-traveling-with-a-raspberry-pi.html"},{default:i(()=>[...s[81]||(s[81]=[n("Lenin",-1)])]),_:1}),s[85]||(s[85]=n(" 译者：",-1)),l(p,{href:"https://github.com/jiajia9linuxer"},{default:i(()=>[...s[82]||(s[82]=[n("jiajia9linuxer",-1)])]),_:1}),s[86]||(s[86]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[83]||(s[83]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[89]||(s[89]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[87]||(s[87]=[n("LCTT",-1)])]),_:1}),s[90]||(s[90]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...s[88]||(s[88]=[n("Linux中国",-1)])]),_:1}),s[91]||(s[91]=n(" 荣誉推出",-1))])])}const y=t(u,[["render",g]]);export{c as __pageData,y as default};
