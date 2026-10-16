import{_ as t,a0 as o,w as r,s as c,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const N=JSON.parse('{"title":"四个 Linux 上的网络嗅探工具 | LCTT x X-CMD","titleTemplate":false,"description":"四个 Linux 上的网络嗅探工具 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"四个 Linux 上的网络嗅探工具 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"四个 Linux 上的网络嗅探工具 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180104 4 Tools for Network Snooping on Linux","title":"四个 Linux 上的网络嗅探工具","tag":"201805","desc":""},"relativePath":"201805/20180104 4 Tools for Network Snooping on Linux.md","filePath":"[post].md"}'),d={name:"201805/20180104 4 Tools for Network Snooping on Linux.md"};function h(u,s,g,m,k,b){const a=o("Link");return r(),c("div",null,[s[18]||(s[18]=l(`<h1 id="四个-linux-上的网络嗅探工具" tabindex="-1">四个 Linux 上的网络嗅探工具 <a class="header-anchor" href="#四个-linux-上的网络嗅探工具" aria-label="Permalink to “四个 Linux 上的网络嗅探工具”">​</a></h1><p><img src="https://www.linux.com/sites/lcom/files/styles/rendered_file/public/1280px-eudyptula_minor_family_exiting_burrow.jpg?itok=kGZ53AzN" alt=""></p><p>在计算机网络中，数据是暴露的，因为数据包传输是无法隐藏的，所以让我们来使用 <code>whois</code>、<code>dig</code>、<code>nmcli</code> 和 <code>nmap</code> 这四个工具来嗅探网络吧。</p><p>请注意，不要在不属于自己的网络上运行 <code>nmap</code> ，因为这有可能会被其他人认为恶意攻击。</p><h3 id="精简和详细域名信息查询" tabindex="-1">精简和详细域名信息查询 <a class="header-anchor" href="#精简和详细域名信息查询" aria-label="Permalink to “精简和详细域名信息查询”">​</a></h3><p>您可能已经注意到，之前我们用常用的老式 <code>whois</code> 命令查询域名信息，但现如今似乎没有提供同过去一样的详细程度。我们使用该命令查询 linux.com 的域名描述信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois linux.com</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><p>有很多令人讨厌的法律声明。但在哪有联系信息呢？该网站位于 <code>whois.namecheap.com</code> 站点上（见上面输出的第三行）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ whois -h whois.namecheap.com linux.com</span></span></code></pre></div><p>我就不复制出来了，因为这实在太长了，包含了注册人，管理员和技术人员的联系信息。怎么回事啊，露西尔？（LCTT 译注：《行尸走肉》中尼根的棒子）有一些注册库，比如 .com 和 .net 是精简注册库，保存了一部分有限的域名信息。为了获取完整信息请使用 <code>-h</code> 或 <code>--host</code> 参数，该参数便会从域名的 <code>注册服务机构</code> 中获取。</p><p>大部分顶级域名是有详细的注册信息，如 .info。试着使用 <code>whois blockchain.info</code> 命令来查看。</p><p>想要摆脱这些烦人的法律声明？使用 <code>-H</code> 参数。</p><h3 id="dns-解析" tabindex="-1">DNS 解析 <a class="header-anchor" href="#dns-解析" aria-label="Permalink to “DNS 解析”">​</a></h3><p>使用 <code>dig</code> 命令比较从不同的域名服务器返回的查询结果，去除陈旧的信息。域名服务器记录缓存各地的解析信息，并且不同的域名服务器有不同的刷新间隔。以下是一个简单的用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig linux.com</span></span>
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
<span class="line"><span>;; MSG SIZE rcvd: 102</span></span></code></pre></div><p>注意下靠近末尾的这行信息：<code>SERVER: 127.0.1.1#53(127.0.1.1)</code>，这是您默认的缓存解析器。当地址是本地时，就表明您的电脑上安装了 DNS 服务。在我看来这就是一个 Dnsmasq 工具（LCTT 译注：是一个小巧且方便地用于配置 DNS 和 DHCP 的工具），该工具被用作网络管理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps ax|grep dnsmasq</span></span>
<span class="line"><span>2842 ? S 0:00 /usr/sbin/dnsmasq --no-resolv --keep-in-foreground</span></span>
<span class="line"><span>--no-hosts --bind-interfaces --pid-file=/var/run/NetworkManager/dnsmasq.pid</span></span>
<span class="line"><span>--listen-address=127.0.1.1</span></span></code></pre></div><p><code>dig</code> 命令默认是返回 A 记录，也就是域名。IPv6 则有 AAAA 记录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ $ dig linux.com AAAA</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:105</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:4105</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:8105</span></span>
<span class="line"><span>linux.com. 60 IN AAAA 64:ff9b::9765:c105</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>仔细检查下，发现 linux.com 有 IPv6 地址。很好！如果您的网络服务支持 IPv6 那么您就可以用 IPv6 连接。（令人难过的是，我的移动宽带则没提供 IPv6）</p><p>假设您能对您的域名做一些 DNS 改变，又或是您使用 <code>dig</code> 查询的结果有误。试着用一个公共 DNS，如 OpenNIC：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig @69.195.152.204 linux.com</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>;; Query time: 231 msec</span></span>
<span class="line"><span>;; SERVER: 69.195.152.204#53(69.195.152.204)</span></span></code></pre></div><p><code>dig</code> 回应您正在的查询是来自 69.195.152.204。您可以查询各种服务并且比较结果。</p><h3 id="上游域名服务器" tabindex="-1">上游域名服务器 <a class="header-anchor" href="#上游域名服务器" aria-label="Permalink to “上游域名服务器”">​</a></h3><p>我想知道我的上游域名服务器（LCTT 译注：此处指解析器）是谁。为了查询，我首先看下 <code>/etc/resolv/conf</code> 的配置信息:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat /etc/resolv.conf</span></span>
<span class="line"><span># Dynamic resolv.conf(5) file for glibc resolver(3) generated by resolvconf(8)</span></span>
<span class="line"><span># DO NOT EDIT THIS FILE BY HAND -- YOUR CHANGES WILL BE OVERWRITTEN</span></span>
<span class="line"><span>nameserver 127.0.1.1</span></span></code></pre></div><p>好吧，不过我已经知道了。您的 Linux 发行版可能配置不同，您会看到您的上游服务器。接下来我们来试试网络管理器命令行工具 <code>nmcli</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmcli dev show | grep DNS</span></span>
<span class="line"><span>IP4.DNS[1]: 192.168.1.1</span></span></code></pre></div>`,28)),i("p",null,[s[1]||(s[1]=n("很好，现在我们已经知道了，其实那是我的移动热点，我能确认。我能够登录到简易管理面板，来查询上游服务器。然而许多用户级互联网网关不会让您看到或改变这些设置，因此只能尝试其他的方法，如 ",-1)),p(a,{href:"http://www.whatsmydnsserver.com/"},{default:e(()=>[...s[0]||(s[0]=[n("我的域名服务器是什么？",-1)])]),_:1})]),s[19]||(s[19]=l(`<h3 id="查找在您的网络中-ipv4-地址" tabindex="-1">查找在您的网络中 IPv4 地址 <a class="header-anchor" href="#查找在您的网络中-ipv4-地址" aria-label="Permalink to “查找在您的网络中 IPv4 地址”">​</a></h3><p>您的网络上有哪些 IPv4 地址已启用并正在使用中？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap -sn 192.168.1.0/24</span></span>
<span class="line"><span>Starting Nmap 7.01 ( https://nmap.org ) at 2018-01-14 14:03 PST</span></span>
<span class="line"><span>Nmap scan report for Mobile.Hotspot (192.168.1.1)</span></span>
<span class="line"><span>Host is up (0.011s latency).</span></span>
<span class="line"><span>Nmap scan report for studio (192.168.1.2)</span></span>
<span class="line"><span>Host is up (0.000071s latency).</span></span>
<span class="line"><span>Nmap scan report for nellybly (192.168.1.3)</span></span>
<span class="line"><span>Host is up (0.015s latency)</span></span>
<span class="line"><span>Nmap done: 256 IP addresses (2 hosts up) scanned in 2.23 seconds</span></span></code></pre></div><p>每个人都想去扫描自己的局域网中开放的端口。下面的例子是寻找服务和他们的版本号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap -sV 192.168.1.1/24</span></span>
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
<span class="line"><span>Nmap done: 256 IP addresses (2 hosts up) scanned in 11.65 seconds</span></span></code></pre></div><p>这些是有趣的结果。让我们尝试从不同的互联网连接进行相同的操作，以查看这些服务是否暴露于互联网中。如果您有智能手机，相当于您有第二个网络。您可以下载应用程序，还可以为您的 Linux 电脑提供热点。从热点控制面板获取广域网IP地址，然后重试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap -sV 12.34.56.78</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Starting Nmap 7.01 ( https://nmap.org ) at 2018-01-14 17:05 PST</span></span>
<span class="line"><span>Nmap scan report for 12.34.56.78</span></span>
<span class="line"><span>Host is up (0.0061s latency).</span></span>
<span class="line"><span>All 1000 scanned ports on 12.34.56.78 are closed</span></span></code></pre></div><p>果然不出所料，结果和我想象的一样（LCTT 译注：这些服务和信息没有被暴露在公网上）。可以用手册来查询这些命令，以便了解更多有趣的嗅探技术。</p>`,8)),i("p",null,[s[3]||(s[3]=n("了解更多 Linux 的相关知识可以从 Linux 基金会和 edX（LCTT译注：edX 是麻省理工和哈佛大学于 2012 年 4 月联手创建的大规模开放在线课堂平台）中获取免费的 ",-1)),p(a,{href:"https://training.linuxfoundation.org/linux-courses/system-administration-training/introduction-to-linux"},{default:e(()=>[...s[2]||(s[2]=[n("“介绍 Linux”",-1)])]),_:1}),s[4]||(s[4]=n("课程。",-1))]),s[20]||(s[20]=i("hr",null,null,-1)),i("p",null,[s[6]||(s[6]=n("via: ",-1)),p(a,{href:"https://www.linux.com/learn/intro-to-linux/2018/1/4-tools-network-snooping-linux"},{default:e(()=>[...s[5]||(s[5]=[n("https://www.linux.com/learn/intro-to-linux/2018/1/4-tools-network-snooping-linux",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=n("作者：",-1)),p(a,{href:"https://www.linux.com/users/cschroder"},{default:e(()=>[...s[7]||(s[7]=[n("Carla Schroder",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),p(a,{href:"https://github.com/wyxplus"},{default:e(()=>[...s[8]||(s[8]=[n("wyxplus",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[9]||(s[9]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const S=t(d,[["render",h]]);export{N as __pageData,S as default};
