import{_ as o,a0 as t,w as d,s as r,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"在 Linux 上挖掘 DNS 应答中的秘密 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上挖掘 DNS 应答中的秘密 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上挖掘 DNS 应答中的秘密 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上挖掘 DNS 应答中的秘密 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200728 Digging for DNS answers on Linux","title":"在 Linux 上挖掘 DNS 应答中的秘密","tag":"202008","desc":""},"relativePath":"202008/20200728 Digging for DNS answers on Linux.md","filePath":"[post].md"}'),c={name:"202008/20200728 Digging for DNS answers on Linux.md"};function g(u,s,N,k,w,h){const p=t("Link");return d(),r("div",null,[s[24]||(s[24]=a("h1",{id:"在-linux-上挖掘-dns-应答中的秘密",tabindex:"-1"},[n("在 Linux 上挖掘 DNS 应答中的秘密 "),a("a",{class:"header-anchor",href:"#在-linux-上挖掘-dns-应答中的秘密","aria-label":"Permalink to “在 Linux 上挖掘 DNS 应答中的秘密”"},"​")],-1)),s[25]||(s[25]=a("blockquote",null,[a("p",null,"dig 是一个强大而灵活的工具，用于查询域名系统（DNS）服务器。在这篇文章中，我们将深入了解它的工作原理以及它能告诉你什么。")],-1)),s[26]||(s[26]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/11/235200wlyytlaymlylfdff.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=a("code",null,"dig",-1)),s[2]||(s[2]=n(" 是一款强大而灵活的查询 DNS 名称服务器的工具。它执行 DNS 查询，并显示参与该过程的名称服务器返回的应答以及与搜索相关的细节。系统管理员和 ",-1)),l(p,{href:"https://www.networkworld.com/article/3268449/what-is-dns-and-how-does-it-work.html"},{default:e(()=>[...s[0]||(s[0]=[n("DNS",-1)])]),_:1}),s[3]||(s[3]=n(" 管理员经常使用 ",-1)),s[4]||(s[4]=a("code",null,"dig",-1)),s[5]||(s[5]=n(" 来帮助排除 DNS 问题。在这篇文章中，我们将深入了解它的工作原理，看看它能告诉我们什么。",-1))]),s[27]||(s[27]=i(`<p>开始之前，对 DNS（域名系统）的工作方式有一个基本的印象是很有帮助的。它是全球互联网的关键部分，因为它提供了一种查找世界各地的服务器的方式，从而可以与之连接。你可以把它看作是互联网的地址簿，任何正确连接到互联网的系统，都应该能够使用它来查询任何正确注册的服务器的 IP 地址。</p><h3 id="dig-入门" tabindex="-1">dig 入门 <a class="header-anchor" href="#dig-入门" aria-label="Permalink to “dig 入门”">​</a></h3><p>Linux 系统上一般都默认安装了 <code>dig</code> 工具。下面是一个带有一点注释的 <code>dig</code> 命令的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig www.networkworld.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.16.1-Ubuntu &lt;&lt;&gt;&gt; www.networkworld.com &lt;== 你使用的 dig 版本</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 6034</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 65494</span></span>
<span class="line"><span>;; QUESTION SECTION:                            &lt;== 你的查询细节</span></span>
<span class="line"><span>;www.networkworld.com.          IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:                              &lt;== 结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www.networkworld.com.   3568    IN      CNAME   idg.map.fastly.net.</span></span>
<span class="line"><span>idg.map.fastly.net.     30      IN      A       151.101.250.165</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 36 msec                          &lt;== 查询用时</span></span>
<span class="line"><span>;; SERVER: 127.0.0.53#53(127.0.0.53)            &lt;== 本地缓存解析器</span></span>
<span class="line"><span>;; WHEN: Fri Jul 24 19:11:42 EDT 2020           &lt;== 查询的时间</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 97                           &lt;== 返回的字节数</span></span></code></pre></div><p>如果你得到了一个这样的应答，是好消息吗？简短的回答是“是”。你得到了及时的回复。状态字段（<code>status: NOERROR</code>）显示没有问题。你正在连接到一个能够提供所要求的信息的名称服务器，并得到一个回复，告诉你一些关于你所查询的系统的重要细节。简而言之，你已经验证了你的系统和域名系统相处得很好。</p><p>其他可能的状态指标包括：</p><ul><li><code>SERVFAIL</code>：被查询的名称存在，但没有数据或现有数据无效。</li><li><code>NXDOMAIN</code>：所查询的名称不存在。</li><li><code>REFUSED</code>：该区域的数据不存在于所请求的权威服务器中，并且在这种情况下，基础设施没有设置为提供响应服务。</li></ul><p>下面是一个例子，如果你要查找一个不存在的域名，你会看到什么？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig cannotbe.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.16.1-Ubuntu &lt;&lt;&gt;&gt; cannotbe.org</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NXDOMAIN, id: 35348</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1</span></span></code></pre></div><p>一般来说，<code>dig</code> 比 <code>ping</code> 会提供更多的细节，如果域名不存在，<code>ping</code> 会回复 “名称或服务未知”。当你查询一个合法的系统时，你可以看到域名系统对该系统知道些什么，这些记录是如何配置的，以及检索这些数据需要多长时间。</p><p>（LCTT 译注：<code>dig</code> 也比 <code>nslookup</code> 提供的数据更多。此外，<code>dig</code> 采用的是操作系统的解析库，而 <code>nslookup</code> 采用的是自己提供的解析库，这有时候会带来不同的行为。最后，有趣的一点是，<code>dig</code> 的返回的格式是符合 BIND 区域文件格式的。）</p><p>事实上，有时 <code>dig</code> 可以在 <code>ping</code> 完全不能响应的时候进行响应，当你试图确定一个连接问题时，这种信息是非常有用的。</p><h3 id="dns-记录类型和标志" tabindex="-1">DNS 记录类型和标志 <a class="header-anchor" href="#dns-记录类型和标志" aria-label="Permalink to “DNS 记录类型和标志”">​</a></h3><p>在上面的第一个查询中，我们可以看到一个问题，那就是同时存在 <code>CNAME</code> 和 <code>A</code> 记录。<code>CNAME</code>（<ruby>规范名称<rt>canonical name</rt></ruby>）就像一个别名，把一个域名指向另一个域名。你查询的大多数系统不会有 <code>CNAME</code> 记录，而只有 <code>A</code> 记录。如果你运行 <code>dig localhost</code> 命令，你会看到一个 <code>A</code> 记录，它就指向 <code>127.0.0.1</code> —— 这是每个系统都使用的“回环”地址。<code>A</code> 记录用于将一个名字映射到一个 IP 地址。</p><p>DNS 记录类型包括：</p><ul><li><code>A</code> 或 <code>AAAA</code>：IPv4 或 IPv6 地址</li><li><code>CNAME</code>：别名</li><li><code>MX</code>：邮件交换器</li><li><code>NS</code>：名称服务器</li><li><code>PTR</code>：一个反向条目，让你根据 IP 地址找到系统名称</li><li><code>SOA</code>：表示授权记录开始</li><li><code>TXT</code> 一些相关文本</li></ul>`,16)),a("p",null,[s[7]||(s[7]=n("我们还可以在上述输出的第五行看到一系列的“标志”。这些定义在 ",-1)),l(p,{href:"https://tools.ietf.org/html/rfc1035"},{default:e(()=>[...s[6]||(s[6]=[n("RFC 1035",-1)])]),_:1}),s[8]||(s[8]=n(" 中 —— 它定义了 DNS 报文头中包含的标志，甚至显示了报文头的格式。",-1))]),s[28]||(s[28]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                                1  1  1  1  1  1</span></span>
<span class="line"><span>  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|                      ID                       |</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|QR|   Opcode  |AA|TC|RD|RA|   Z    |   RCODE   |</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|                    QDCOUNT                    |</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|                    ANCOUNT                    |</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|                    NSCOUNT                    |</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span>
<span class="line"><span>|                    ARCOUNT                    |</span></span>
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span></code></pre></div><p>在上面的初始查询中，第五行显示的标志是：</p><ul><li><code>qr</code> = 查询</li><li><code>rd</code> = 进行递归查询</li><li><code>ra</code> = 递归数据可用</li></ul><p>RFC 中描述的其他标志包括：</p><ul><li><code>aa</code> = 权威答复</li><li><code>cd</code> = 检查是否禁用</li><li><code>ad</code> = 真实数据</li><li><code>opcode</code> = 一个 4 位字段</li><li><code>tc</code> = 截断</li><li><code>z</code>（未使用）</li></ul><h3 id="添加-trace-选项" tabindex="-1">添加 +trace 选项 <a class="header-anchor" href="#添加-trace-选项" aria-label="Permalink to “添加 +trace 选项”">​</a></h3><p>如果你添加 <code>+trace</code> 选项，你将从 <code>dig</code> 得到更多的输出。它会添加更多信息，显示你的 DNS 查询如何通过名称服务器的层次结构找到你要找的答案。</p><p>下面显示的所有 <code>NS</code> 记录都反映了名称服务器 —— 这只是你将看到的数据的第一部分，因为查询通过名称服务器的层次结构来追踪你要找的东西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig +trace networkworld.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.16.1-Ubuntu &lt;&lt;&gt;&gt; +trace networkworld.com</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>.                       84895   IN      NS      k.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      e.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      m.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      h.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      c.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      f.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      a.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      g.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      l.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      d.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      b.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      i.root-servers.net.</span></span>
<span class="line"><span>.                       84895   IN      NS      j.root-servers.net.</span></span>
<span class="line"><span>;; Received 262 bytes from 127.0.0.53#53(127.0.0.53) in 28 ms</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>最终，你会得到与你的要求直接挂钩的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-d.pnap.net.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-a.pnap.net.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns0.pcworld.com.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns1.pcworld.com.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-b.pnap.net.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-c.pnap.net.</span></span>
<span class="line"><span>;; Received 269 bytes from 70.42.185.30#53(ns0.pcworld.com) in 116 ms</span></span></code></pre></div><h3 id="挑选响应者" tabindex="-1">挑选响应者 <a class="header-anchor" href="#挑选响应者" aria-label="Permalink to “挑选响应者”">​</a></h3><p>你可以使用 <code>@</code> 符号来指定一个特定的名称服务器来处理你的查询。在这里，我们要求 Google 的主名称服务器响应我们的查询：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig @8.8.8.8 networkworld.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.16.1-Ubuntu &lt;&lt;&gt;&gt; @8.8.8.8 networkworld.com</span></span>
<span class="line"><span>; (1 server found)</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 43640</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 512</span></span>
<span class="line"><span>;; QUESTION SECTION:</span></span>
<span class="line"><span>;networkworld.com.              IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.2.165</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 48 msec</span></span>
<span class="line"><span>;; SERVER: 8.8.8.8#53(8.8.8.8)</span></span>
<span class="line"><span>;; WHEN: Sat Jul 25 11:21:19 EDT 2020</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><p>下面所示的命令对 <code>8.8.8.8</code> IP 地址进行反向查找，以显示它属于 Google 的 DNS 服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nslookup 8.8.8.8</span></span>
<span class="line"><span>8.8.8.8.in-addr.arpa    name = dns.google.</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p><code>dig</code> 命令是掌握 DNS 工作原理和在出现连接问题时排除故障的重要工具。</p><hr>`,19)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),l(p,{href:"https://www.networkworld.com/article/3568488/digging-for-dns-answers-on-linux.html"},{default:e(()=>[...s[9]||(s[9]=[n("https://www.networkworld.com/article/3568488/digging-for-dns-answers-on-linux.html",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("作者：",-1)),l(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[11]||(s[11]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[16]||(s[16]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[12]||(s[12]=[n("lujun9972",-1)])]),_:1}),s[17]||(s[17]=n(" 译者：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1}),s[18]||(s[18]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[19]||(s[19]=[n("LCTT",-1)])]),_:1}),s[22]||(s[22]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[20]||(s[20]=[n("Linux中国",-1)])]),_:1}),s[23]||(s[23]=n(" 荣誉推出",-1))])])}const f=o(c,[["render",g]]);export{b as __pageData,f as default};
