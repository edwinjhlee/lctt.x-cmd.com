import{_ as t,a0 as l,w as o,s as c,ao as d,I as i,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"检查 Linux 系统上的网络连接 | LCTT x X-CMD","titleTemplate":false,"description":"检查 Linux 系统上的网络连接 | LCTT (201712) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"检查 Linux 系统上的网络连接 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"检查 Linux 系统上的网络连接 | LCTT (201712) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201712/20171009 Examining network connections on Linux systems","title":"检查 Linux 系统上的网络连接","tag":"201712","desc":""},"relativePath":"201712/20171009 Examining network connections on Linux systems.md","filePath":"[post].md"}'),r={name:"201712/20171009 Examining network connections on Linux systems.md"};function h(g,s,u,k,f,b){const a=l("Link");return o(),c("div",null,[s[13]||(s[13]=d(`<h1 id="检查-linux-系统上的网络连接" tabindex="-1">检查 Linux 系统上的网络连接 <a class="header-anchor" href="#检查-linux-系统上的网络连接" aria-label="Permalink to “检查 Linux 系统上的网络连接”">​</a></h1><blockquote><p>Linux 系统提供了许多有用的命令来检查网络配置和连接。下面来看几个，包括 <code>ifquery</code>、<code>ifup</code>、<code>ifdown</code> 和 <code>ifconfig</code>。</p></blockquote><p>Linux 上有许多可用于查看网络设置和连接的命令。在今天的文章中，我们将会通过一些非常方便的命令来看看它们是如何工作的。</p><h3 id="ifquery-命令" tabindex="-1">ifquery 命令 <a class="header-anchor" href="#ifquery-命令" aria-label="Permalink to “ifquery 命令”">​</a></h3><p>一个非常有用的命令是 <code>ifquery</code>。这个命令应该会显示一个网络接口列表。但是，你可能只会看到类似这样的内容 - 仅显示回环接口：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ifquery --list</span></span>
<span class="line"><span>lo</span></span></code></pre></div><p>如果是这种情况，那说明你的 <code>/etc/network/interfaces</code> 不包括除了回环接口之外的网络接口信息。在下面的例子中，假设你使用 DHCP 来分配地址，且如果你希望它更有用的话，你可以添加例子最后的两行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># interfaces(5) file used by ifup(8) and ifdown(8)</span></span>
<span class="line"><span>auto lo</span></span>
<span class="line"><span>iface lo inet loopback</span></span>
<span class="line"><span>auto eth0</span></span>
<span class="line"><span>iface eth0 inet dhcp</span></span></code></pre></div><h3 id="ifup-和-ifdown-命令" tabindex="-1">ifup 和 ifdown 命令 <a class="header-anchor" href="#ifup-和-ifdown-命令" aria-label="Permalink to “ifup 和 ifdown 命令”">​</a></h3><p>可以使用相关的 <code>ifup</code> 和 <code>ifdown</code> 命令来打开网络连接并根据需要将其关闭，只要该文件具有所需的描述性数据即可。请记住，“if” 在这里意思是<ruby>接口<rt>interface</rt></ruby>，这与 <code>ifconfig</code> 命令中的一样，而不是<ruby>如果我只有一个大脑<rt>if I only had a brain</rt></ruby> 中的 “if”。</p><h3 id="ifconfig-命令" tabindex="-1">ifconfig 命令 <a class="header-anchor" href="#ifconfig-命令" aria-label="Permalink to “ifconfig 命令”">​</a></h3><p>另外，<code>ifconfig</code> 命令完全不读取 <code>/etc/network/interfaces</code>，但是仍然提供了网络接口相当多的有用信息 —— 配置数据以及可以告诉你每个接口有多忙的数据包计数。<code>ifconfig</code> 命令也可用于关闭和重新启动网络接口（例如：<code>ifconfig eth0 down</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ifconfig eth0</span></span>
<span class="line"><span>eth0      Link encap:Ethernet  HWaddr 00:1e:4f:c8:43:fc</span></span>
<span class="line"><span>          inet addr:192.168.0.6  Bcast:192.168.0.255  Mask:255.255.255.0</span></span>
<span class="line"><span>          inet6 addr: fe80::b44b:bdb6:2527:6ae9/64 Scope:Link</span></span>
<span class="line"><span>          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1</span></span>
<span class="line"><span>          RX packets:60474 errors:0 dropped:0 overruns:0 frame:0</span></span>
<span class="line"><span>          TX packets:33463 errors:0 dropped:0 overruns:0 carrier:0</span></span>
<span class="line"><span>          collisions:0 txqueuelen:1000</span></span>
<span class="line"><span>          RX bytes:43922053 (43.9 MB)  TX bytes:4000460 (4.0 MB)</span></span>
<span class="line"><span>          Interrupt:21 Memory:fe9e0000-fea00000</span></span></code></pre></div><p>输出中的 RX 和 TX 数据包计数很低。此外，没有报告错误或数据包冲突。或许可以用 <code>uptime</code> 命令确认此系统最近才重新启动。</p><p>上面显示的广播 （Bcast） 和网络掩码 （Mask） 地址表明系统运行在 C 类等效网络（默认）上，所以本地地址范围从 <code>192.168.0.1</code> 到 <code>192.168.0.254</code>。</p><h3 id="netstat-命令" tabindex="-1">netstat 命令 <a class="header-anchor" href="#netstat-命令" aria-label="Permalink to “netstat 命令”">​</a></h3><p><code>netstat</code> 命令提供有关路由和网络连接的信息。<code>netstat -rn</code> 命令显示系统的路由表。192.168.0.1 是本地网关 （Flags=UG)。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ netstat -rn</span></span>
<span class="line"><span>Kernel IP routing table</span></span>
<span class="line"><span>Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface</span></span>
<span class="line"><span>0.0.0.0         192.168.0.1     0.0.0.0         UG        0 0          0 eth0</span></span>
<span class="line"><span>169.254.0.0     0.0.0.0         255.255.0.0     U         0 0          0 eth0</span></span>
<span class="line"><span>192.168.0.0     0.0.0.0         255.255.255.0   U         0 0          0 eth0</span></span></code></pre></div><p>上面输出中的 <code>169.254.0.0</code> 条目仅在你正在使用或计划使用本地链路通信时才有必要。如果不是这样的话，你可以在 <code>/etc/network/if-up.d/avahi-autoipd</code> 中注释掉相关的行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tail -12 /etc/network/if-up.d/avahi-autoipd</span></span>
<span class="line"><span>#if [ -x /bin/ip ]; then</span></span>
<span class="line"><span>#       # route already present?</span></span>
<span class="line"><span>#       ip route show | grep -q &#39;^169.254.0.0/16[[:space:]]&#39; &amp;&amp; exit 0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#       /bin/ip route add 169.254.0.0/16 dev $IFACE metric 1000 scope link</span></span>
<span class="line"><span>#elif [ -x /sbin/route ]; then</span></span>
<span class="line"><span>#       # route already present?</span></span>
<span class="line"><span>#       /sbin/route -n | egrep -q &quot;^169.254.0.0[[:space:]]&quot; &amp;&amp; exit 0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#       /sbin/route add -net 169.254.0.0 netmask 255.255.0.0 dev $IFACE metric 1000</span></span>
<span class="line"><span>#fi</span></span></code></pre></div><h3 id="netstat-a-命令" tabindex="-1">netstat -a 命令 <a class="header-anchor" href="#netstat-a-命令" aria-label="Permalink to “netstat -a 命令”">​</a></h3><p><code>netstat -a</code> 命令将显示“所有”网络连接。为了将其限制为显示正在监听和已建立的连接（通常更有用），请改用 <code>netstat -at</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ netstat -at</span></span>
<span class="line"><span>Active Internet connections (servers and established)</span></span>
<span class="line"><span>Proto Recv-Q Send-Q Local Address           Foreign Address         State</span></span>
<span class="line"><span>tcp        0      0 *:ssh                   *:*                     LISTEN</span></span>
<span class="line"><span>tcp        0      0 localhost:ipp           *:*                     LISTEN</span></span>
<span class="line"><span>tcp        0      0 localhost:smtp          *:*                     LISTEN</span></span>
<span class="line"><span>tcp        0    256 192.168.0.6:ssh         192.168.0.32:53550      ESTABLISHED</span></span>
<span class="line"><span>tcp6       0      0 [::]:http               [::]:*                  LISTEN</span></span>
<span class="line"><span>tcp6       0      0 [::]:ssh                [::]:*                  LISTEN</span></span>
<span class="line"><span>tcp6       0      0 ip6-localhost:ipp       [::]:*                  LISTEN</span></span>
<span class="line"><span>tcp6       0      0 ip6-localhost:smtp      [::]:*                  LISTEN</span></span></code></pre></div><h3 id="host-命令" tabindex="-1">host 命令 <a class="header-anchor" href="#host-命令" aria-label="Permalink to “host 命令”">​</a></h3><p><code>host</code> 命令就像 <code>nslookup</code> 一样，用来查询远程系统的 IP 地址，但是还提供系统的邮箱处理地址。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ host world.std.com</span></span>
<span class="line"><span>world.std.com has address 192.74.137.5</span></span>
<span class="line"><span>world.std.com mail is handled by 10 smtp.theworld.com.</span></span></code></pre></div><h3 id="nslookup-命令" tabindex="-1">nslookup 命令 <a class="header-anchor" href="#nslookup-命令" aria-label="Permalink to “nslookup 命令”">​</a></h3><p><code>nslookup</code> 还提供系统中（本例中是本地系统）提供 DNS 查询服务的信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nslookup world.std.com</span></span>
<span class="line"><span>Server:         127.0.1.1</span></span>
<span class="line"><span>Address:        127.0.1.1#53</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Non-authoritative answer:</span></span>
<span class="line"><span>Name:   world.std.com</span></span>
<span class="line"><span>Address: 192.74.137.5</span></span></code></pre></div><h3 id="dig-命令" tabindex="-1">dig 命令 <a class="header-anchor" href="#dig-命令" aria-label="Permalink to “dig 命令”">​</a></h3><p><code>dig</code> 命令提供了很多有关连接到远程系统的信息 - 包括与我们通信的名称服务器以及查询需要多长时间进行响应，并经常用于故障排除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig world.std.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.10.3-P4-Ubuntu &lt;&lt;&gt;&gt; world.std.com</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 28679</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 512</span></span>
<span class="line"><span>;; QUESTION SECTION:</span></span>
<span class="line"><span>;world.std.com.                 IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>world.std.com.          78146   IN      A       192.74.137.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 37 msec</span></span>
<span class="line"><span>;; SERVER: 127.0.1.1#53(127.0.1.1)</span></span>
<span class="line"><span>;; WHEN: Mon Oct 09 13:26:46 EDT 2017</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 58</span></span></code></pre></div><h3 id="nmap-命令" tabindex="-1">nmap 命令 <a class="header-anchor" href="#nmap-命令" aria-label="Permalink to “nmap 命令”">​</a></h3><p><code>nmap</code> 经常用于探查远程系统，但是同样也用于报告本地系统提供的服务。在下面的输出中，我们可以看到登录可以使用 ssh、smtp 用于电子邮箱、web 站点也是启用的，并且 ipp 打印服务正在运行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nmap localhost</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Starting Nmap 7.01 ( https://nmap.org ) at 2017-10-09 15:01 EDT</span></span>
<span class="line"><span>Nmap scan report for localhost (127.0.0.1)</span></span>
<span class="line"><span>Host is up (0.00016s latency).</span></span>
<span class="line"><span>Not shown: 996 closed ports</span></span>
<span class="line"><span>PORT    STATE SERVICE</span></span>
<span class="line"><span>22/tcp  open  ssh</span></span>
<span class="line"><span>25/tcp  open  smtp</span></span>
<span class="line"><span>80/tcp  open  http</span></span>
<span class="line"><span>631/tcp open  ipp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Nmap done: 1 IP address (1 host up) scanned in 0.09 seconds</span></span></code></pre></div><p>Linux 系统提供了很多有用的命令用于查看网络配置和连接。如果你都探索完了，请记住 <code>apropos network</code> 或许会让你了解更多。</p><hr>`,37)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://www.networkworld.com/article/3230519/linux/examining-network-connections-on-linux-systems.html"},{default:p(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3230519/linux/examining-network-connections-on-linux-systems.html",-1)])]),_:1})]),i("p",null,[s[5]||(s[5]=n("作者：",-1)),e(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:p(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[6]||(s[6]=n(" 译者：",-1)),e(a,{href:"https://github.com/geekpi"},{default:p(()=>[...s[3]||(s[3]=[n("geekpi",-1)])]),_:1}),s[7]||(s[7]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[4]||(s[4]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[10]||(s[10]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[8]||(s[8]=[n("LCTT",-1)])]),_:1}),s[11]||(s[11]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[9]||(s[9]=[n("Linux中国",-1)])]),_:1}),s[12]||(s[12]=n(" 荣誉推出",-1))])])}const w=t(r,[["render",h]]);export{y as __pageData,w as default};
