import{_ as t,a0 as o,w as r,s as c,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const N=JSON.parse('{"title":"四個 Linux 上的網絡嗅探工具 | LCTT x X-CMD","titleTemplate":false,"description":"四個 Linux 上的網絡嗅探工具 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"四個 Linux 上的網絡嗅探工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"四個 Linux 上的網絡嗅探工具 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180104 4 Tools for Network Snooping on Linux","title":"四個 Linux 上的網絡嗅探工具","tag":"201805","desc":""},"relativePath":"201805/20180104 4 Tools for Network Snooping on Linux.md","filePath":"[post].md"}'),d={name:"201805/20180104 4 Tools for Network Snooping on Linux.md"};function h(u,s,g,m,k,b){const a=o("Link");return r(),c("div",null,[s[18]||(s[18]=l(`<h1 id="四個-linux-上的網絡嗅探工具" tabindex="-1">四個 Linux 上的網絡嗅探工具 <a class="header-anchor" href="#四個-linux-上的網絡嗅探工具" aria-label="Permalink to “四個 Linux 上的網絡嗅探工具”">​</a></h1><p><img src="https://www.linux.com/sites/lcom/files/styles/rendered_file/public/1280px-eudyptula_minor_family_exiting_burrow.jpg?itok=kGZ53AzN" alt=""></p><p>在計算機網絡中，數據是暴露的，因為數據包傳輸是無法隱藏的，所以讓我們來使用 <code>whois</code>、<code>dig</code>、<code>nmcli</code> 和 <code>nmap</code> 這四個工具來嗅探網絡吧。</p><p>請注意，不要在不屬於自己的網絡上運行 <code>nmap</code> ，因為這有可能會被其他人認為惡意攻擊。</p><h3 id="精簡和詳細域名信息查詢" tabindex="-1">精簡和詳細域名信息查詢 <a class="header-anchor" href="#精簡和詳細域名信息查詢" aria-label="Permalink to “精簡和詳細域名信息查詢”">​</a></h3><p>您可能已經注意到，之前我們用常用的老式 <code>whois</code> 命令查詢域名信息，但現如今似乎沒有提供同過去一樣的詳細程度。我們使用該命令查詢 linux.com 的域名描述信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois linux.com</span></span>
<span class="line"><span>Domain Name: LINUX.COM</span></span>
<span class="line"><span>Registry Domain ID: 4245540_DOMAIN_COM-VRSN</span></span>
<span class="line"><span>Registrar WHOIS Server: whois.namecheap.com</span></span>
<span class="line"><span>Registrar URL: http://www.namecheap.com</span></span>
<span class="line"><span>Updated Date: 2018-01-10T12:26:50Z</span></span>
<span class="line"><span>Creation Date: 1994-06-02T04:00:00Z</span></span>
<span class="line"><span>Registry Expiry Date: 2018-06-01T04:00:00Z</span></span>
<span class="line"><span>Registrar: NameCheap Inc.</span></span>
<span class="line"><span>Registrar IANA ID: 1068</span></span>
<span class="line"><span>Registrar Abuse Contact Email: abuse@namecheap.com</span></span>
<span class="line"><span>Registrar Abuse Contact Phone: +1.6613102107</span></span>
<span class="line"><span>Domain Status: ok https://icann.org/epp#ok</span></span>
<span class="line"><span>Name Server: NS5.DNSMADEEASY.COM</span></span>
<span class="line"><span>Name Server: NS6.DNSMADEEASY.COM</span></span>
<span class="line"><span>Name Server: NS7.DNSMADEEASY.COM</span></span>
<span class="line"><span>DNSSEC: unsigned</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>有很多令人討厭的法律聲明。但在哪有聯繫信息呢？該網站位於 <code>whois.namecheap.com</code> 站點上（見上面輸出的第三行）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois -h whois.namecheap.com linux.com</span></span></code></pre></div><p>我就不復製出來了，因為這實在太長了，包含了註冊人，管理員和技術人員的聯繫信息。怎麼回事啊，露西爾？（LCTT 譯註：《行屍走肉》中尼根的棒子）有一些註冊庫，比如 .com 和 .net 是精簡註冊庫，保存了一部分有限的域名信息。為了獲取完整信息請使用 <code>-h</code> 或 <code>--host</code> 參數，該參數便會從域名的 <code>註冊服務機構</code> 中獲取。</p><p>大部分頂級域名是有詳細的註冊信息，如 .info。試着使用 <code>whois blockchain.info</code> 命令來查看。</p><p>想要擺脱這些煩人的法律聲明？使用 <code>-H</code> 參數。</p><h3 id="dns-解析" tabindex="-1">DNS 解析 <a class="header-anchor" href="#dns-解析" aria-label="Permalink to “DNS 解析”">​</a></h3><p>使用 <code>dig</code> 命令比較從不同的域名服務器返回的查詢結果，去除陳舊的信息。域名服務器記錄緩存各地的解析信息，並且不同的域名服務器有不同的刷新間隔。以下是一個簡單的用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig linux.com</span></span>
<span class="line"><span>&lt;&lt;&gt;&gt; DiG 9.10.3-P4-Ubuntu &lt;&lt;&gt;&gt; linux.com</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;&lt;- opcode: QUERY, status: NOERROR, id: 13694</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 1440</span></span>
<span class="line"><span>;; QUESTION SECTION:</span></span>
<span class="line"><span>;linux.com. IN A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>linux.com. 10800 IN A 151.101.129.5</span></span>
<span class="line"><span>linux.com. 10800 IN A 151.101.65.5</span></span>
<span class="line"><span>linux.com. 10800 IN A 151.101.1.5</span></span>
<span class="line"><span>linux.com. 10800 IN A 151.101.193.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 92 msec</span></span>
<span class="line"><span>;; SERVER: 127.0.1.1#53(127.0.1.1)</span></span>
<span class="line"><span>;; WHEN: Tue Jan 16 15:17:04 PST 2018</span></span>
<span class="line"><span>;; MSG SIZE rcvd: 102</span></span></code></pre></div><p>注意下靠近末尾的這行信息：<code>SERVER: 127.0.1.1#53(127.0.1.1)</code>，這是您默認的緩存解析器。當地址是本地時，就表明您的電腦上安裝了 DNS 服務。在我看來這就是一個 Dnsmasq 工具（LCTT 譯註：是一個小巧且方便地用於配置 DNS 和 DHCP 的工具），該工具被用作網絡管理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps ax|grep dnsmasq</span></span>
<span class="line"><span>2842 ? S 0:00 /usr/sbin/dnsmasq --no-resolv --keep-in-foreground</span></span>
<span class="line"><span>--no-hosts --bind-interfaces --pid-file=/var/run/NetworkManager/dnsmasq.pid</span></span>
<span class="line"><span>--listen-address=127.0.1.1</span></span></code></pre></div><p><code>dig</code> 命令默認是返回 A 記錄，也就是域名。IPv6 則有 AAAA 記錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ $ dig linux.com AAAA</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:105</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:4105</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:8105</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:c105</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>仔細檢查下，發現 linux.com 有 IPv6 地址。很好！如果您的網絡服務支持 IPv6 那麼您就可以用 IPv6 連接。（令人難過的是，我的移動寬帶則沒提供 IPv6）</p><p>假設您能對您的域名做一些 DNS 改變，又或是您使用 <code>dig</code> 查詢的結果有誤。試着用一個公共 DNS，如 OpenNIC：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig @69.195.152.204 linux.com</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>;; Query time: 231 msec</span></span>
<span class="line"><span>;; SERVER: 69.195.152.204#53(69.195.152.204)</span></span></code></pre></div><p><code>dig</code> 回應您正在的查詢是來自 69.195.152.204。您可以查詢各種服務並且比較結果。</p><h3 id="上游域名服務器" tabindex="-1">上游域名服務器 <a class="header-anchor" href="#上游域名服務器" aria-label="Permalink to “上游域名服務器”">​</a></h3><p>我想知道我的上游域名服務器（LCTT 譯註：此處指解析器）是誰。為了查詢，我首先看下 <code>/etc/resolv/conf</code> 的配置信息:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/resolv.conf</span></span>
<span class="line"><span># Dynamic resolv.conf(5) file for glibc resolver(3) generated by resolvconf(8)</span></span>
<span class="line"><span># DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN</span></span>
<span class="line"><span>nameserver 127.0.1.1</span></span></code></pre></div><p>好吧，不過我已經知道了。您的 Linux 發行版可能配置不同，您會看到您的上游服務器。接下來我們來試試網絡管理器命令列工具 <code>nmcli</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmcli dev show | grep DNS</span></span>
<span class="line"><span>IP4.DNS[1]: 192.168.1.1</span></span></code></pre></div>`,28)),i("p",null,[s[1]||(s[1]=n("很好，現在我們已經知道了，其實那是我的移動熱點，我能確認。我能夠登錄到簡易管理面板，來查詢上游服務器。然而許多用户級互聯網網關不會讓您看到或改變這些設置，因此只能嘗試其他的方法，如 ",-1)),p(a,{href:"http://www.whatsmydnsserver.com/"},{default:e(()=>[...s[0]||(s[0]=[n("我的域名服務器是什麼？",-1)])]),_:1})]),s[19]||(s[19]=l(`<h3 id="查找在您的網絡中-ipv4-地址" tabindex="-1">查找在您的網絡中 IPv4 地址 <a class="header-anchor" href="#查找在您的網絡中-ipv4-地址" aria-label="Permalink to “查找在您的網絡中 IPv4 地址”">​</a></h3><p>您的網絡上有哪些 IPv4 地址已啓用並正在使用中？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap -sn 192.168.1.0/24</span></span>
<span class="line"><span>Starting Nmap 7.01 ( https://nmap.org ) at 2018-01-14 14:03 PST</span></span>
<span class="line"><span>Nmap scan report for Mobile.Hotspot (192.168.1.1)</span></span>
<span class="line"><span>Host is up (0.011s latency).</span></span>
<span class="line"><span>Nmap scan report for studio (192.168.1.2)</span></span>
<span class="line"><span>Host is up (0.000071s latency).</span></span>
<span class="line"><span>Nmap scan report for nellybly (192.168.1.3)</span></span>
<span class="line"><span>Host is up (0.015s latency)</span></span>
<span class="line"><span>Nmap done: 256 IP addresses (2 hosts up) scanned in 2.23 seconds</span></span></code></pre></div><p>每個人都想去掃描自己的局域網中開放的端口。下面的例子是尋找服務和他們的版本號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap -sV 192.168.1.1/24</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Starting Nmap 7.01 ( https://nmap.org ) at 2018-01-14 16:46 PST</span></span>
<span class="line"><span>Nmap scan report for Mobile.Hotspot (192.168.1.1)</span></span>
<span class="line"><span>Host is up (0.0071s latency).</span></span>
<span class="line"><span>Not shown: 997 closed ports</span></span>
<span class="line"><span>PORT STATE SERVICE VERSION</span></span>
<span class="line"><span>22/tcp filtered ssh</span></span>
<span class="line"><span>53/tcp open domain dnsmasq 2.55</span></span>
<span class="line"><span>80/tcp open http GoAhead WebServer 2.5.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Nmap scan report for studio (192.168.1.102)</span></span>
<span class="line"><span>Host is up (0.000087s latency).</span></span>
<span class="line"><span>Not shown: 998 closed ports</span></span>
<span class="line"><span>PORT STATE SERVICE VERSION</span></span>
<span class="line"><span>22/tcp open ssh OpenSSH 7.2p2 Ubuntu 4ubuntu2.2 (Ubuntu Linux; protocol 2.0)</span></span>
<span class="line"><span>631/tcp open ipp CUPS 2.1</span></span>
<span class="line"><span>Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .</span></span>
<span class="line"><span>Nmap done: 256 IP addresses (2 hosts up) scanned in 11.65 seconds</span></span></code></pre></div><p>這些是有趣的結果。讓我們嘗試從不同的互聯網連接進行相同的操作，以查看這些服務是否暴露於互聯網中。如果您有智能手機，相當於您有第二個網絡。您可以下載應用程序，還可以為您的 Linux 電腦提供熱點。從熱點控制面板獲取廣域網IP地址，然後重試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap -sV 12.34.56.78</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Starting Nmap 7.01 ( https://nmap.org ) at 2018-01-14 17:05 PST</span></span>
<span class="line"><span>Nmap scan report for 12.34.56.78</span></span>
<span class="line"><span>Host is up (0.0061s latency).</span></span>
<span class="line"><span>All 1000 scanned ports on 12.34.56.78 are closed</span></span></code></pre></div><p>果然不出所料，結果和我想像的一樣（LCTT 譯註：這些服務和信息沒有被暴露在公網上）。可以用手冊來查詢這些命令，以便了解更多有趣的嗅探技術。</p>`,8)),i("p",null,[s[3]||(s[3]=n("瞭解更多 Linux 的相關知識可以從 Linux 基金會和 edX（LCTT譯註：edX 是麻省理工和哈佛大學於 2012 年 4 月聯手創建的大規模開放在線課堂平台）中獲取免費的 ",-1)),p(a,{href:"https://training.linuxfoundation.org/linux-courses/system-administration-training/introduction-to-linux"},{default:e(()=>[...s[2]||(s[2]=[n("“介紹 Linux”",-1)])]),_:1}),s[4]||(s[4]=n("課程。",-1))]),s[20]||(s[20]=i("hr",null,null,-1)),i("p",null,[s[6]||(s[6]=n("via: ",-1)),p(a,{href:"https://www.linux.com/learn/intro-to-linux/2018/1/4-tools-network-snooping-linux"},{default:e(()=>[...s[5]||(s[5]=[n("https://www.linux.com/learn/intro-to-linux/2018/1/4-tools-network-snooping-linux",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=n("作者：",-1)),p(a,{href:"https://www.linux.com/users/cschroder"},{default:e(()=>[...s[7]||(s[7]=[n("Carla Schroder",-1)])]),_:1}),s[11]||(s[11]=n(" 譯者：",-1)),p(a,{href:"https://github.com/wyxplus"},{default:e(()=>[...s[8]||(s[8]=[n("wyxplus",-1)])]),_:1}),s[12]||(s[12]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中國",-1)])]),_:1}),s[17]||(s[17]=n(" 榮譽推出",-1))])])}const S=t(d,[["render",h]]);export{N as __pageData,S as default};
