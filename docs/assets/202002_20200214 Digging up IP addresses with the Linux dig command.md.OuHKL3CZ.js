import{_ as l,a0 as t,w as o,s as d,ao as c,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const I=JSON.parse('{"title":"使用 dig 命令挖掘域名解析信息 | LCTT x X-CMD","titleTemplate":false,"description":"使用 dig 命令挖掘域名解析信息 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 dig 命令挖掘域名解析信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 dig 命令挖掘域名解析信息 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200214 Digging up IP addresses with the Linux dig command","title":"使用 dig 命令挖掘域名解析信息","tag":"202002","desc":""},"relativePath":"202002/20200214 Digging up IP addresses with the Linux dig command.md","filePath":"[post].md"}'),r={name:"202002/20200214 Digging up IP addresses with the Linux dig command.md"};function g(h,s,k,u,m,b){const a=t("Link");return o(),d("div",null,[s[15]||(s[15]=c(`<h1 id="使用-dig-命令挖掘域名解析信息" tabindex="-1">使用 dig 命令挖掘域名解析信息 <a class="header-anchor" href="#使用-dig-命令挖掘域名解析信息" aria-label="Permalink to “使用 dig 命令挖掘域名解析信息”">​</a></h1><blockquote><p>命令行工具 <code>dig</code> 是用于解析域名和故障排查的一个利器。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202002/26/094028jgvzguau1pdgicpz.jpg" alt=""></p><p>从主要功能上来说，<code>dig</code> 和 <code>nslookup</code> 之间差异不大，但 <code>dig</code> 更像一个加强版的 <code>nslookup</code>，可以查询到一些由域名服务器管理的信息，这在排查某些问题的时候非常有用。总的来说，<code>dig</code> 是一个既简单易用又功能强大的命令行工具。（LCTT 译注：<code>dig</code> 和 <code>nslookup</code> 行为的主要区别来自于 <code>dig</code> 使用是是操作系统本身的解析库，而 <code>nslookup</code> 使用的是该程序自带的解析库，这有时候会带来一些行为差异。此外，从表现形式上看，<code>dig</code> 返回是结果是以 BIND 配置信息的格式返回的，也带有更多的技术细节。）</p><p><code>dig</code> 最基本的功能就是查询域名信息，因此它的名称实际上是“<ruby>域名信息查询工具<rt>Domain Information Groper</rt></ruby>”的缩写。<code>dig</code> 向用户返回的内容可以非常详尽，也可以非常简洁，展现内容的多少完全由用户在查询时使用的选项来决定。</p><h3 id="我只需要查询-ip-地址" tabindex="-1">我只需要查询 IP 地址 <a class="header-anchor" href="#我只需要查询-ip-地址" aria-label="Permalink to “我只需要查询 IP 地址”">​</a></h3><p>如果只需要查询某个域名指向的 IP 地址，可以使用 <code>+short</code> 选项：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig facebook.com +short</span></span>
<span class="line"><span>31.13.66.35</span></span></code></pre></div><p>在查询的时候发现有的域名会指向多个 IP 地址？这其实是网站提高其可用性的一种措施。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com +short</span></span>
<span class="line"><span>151.101.2.165</span></span>
<span class="line"><span>151.101.66.165</span></span>
<span class="line"><span>151.101.130.165</span></span>
<span class="line"><span>151.101.194.165</span></span></code></pre></div><p>也正是由于这些网站通过负载均衡实现高可用，在下一次查询的时候，或许会发现这几个 IP 地址的排序有所不同。（LCTT 译注：浏览器等应用默认会使用返回的第一个 IP 地址，因此这样实现了一种简单的负载均衡。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com +short</span></span>
<span class="line"><span>151.101.130.165</span></span>
<span class="line"><span>151.101.194.165</span></span>
<span class="line"><span>151.101.2.165</span></span>
<span class="line"><span>151.101.66.165</span></span></code></pre></div><h3 id="标准返回" tabindex="-1">标准返回 <a class="header-anchor" href="#标准返回" aria-label="Permalink to “标准返回”">​</a></h3><p><code>dig</code> 的标准返回内容则包括这个工具本身的一些信息，以及请求域名服务器时返回的响应内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu &lt;&lt;&gt;*gt; networkworld.com</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 39932</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 65494</span></span>
<span class="line"><span>;; QUESTION SECTION:</span></span>
<span class="line"><span>;networkworld.com.              IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 108 msec</span></span>
<span class="line"><span>;; SERVER: 127.0.0.53#53(127.0.0.53)</span></span>
<span class="line"><span>;; WHEN: Thu Feb 13 13:49:53 EST 2020</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><p>由于域名服务器有缓存机制，返回的内容可能是之前缓存好的信息。在这种情况下，<code>dig</code> 最后显示的<ruby>查询时间<rt>Query time</rt></ruby>会是 0 毫秒（0 msec）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>;; Query time: 0 msec        &lt;==</span></span>
<span class="line"><span>;; SERVER: 127.0.0.53#53(127.0.0.53)</span></span>
<span class="line"><span>;; WHEN: Thu Feb 13 15:30:09 EST 2020</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><h3 id="向谁查询" tabindex="-1">向谁查询？ <a class="header-anchor" href="#向谁查询" aria-label="Permalink to “向谁查询？”">​</a></h3><p>在默认情况下，<code>dig</code> 会根据 <code>/etc/resolv.conf</code> 这个文件的内容决定向哪个域名服务器获取查询结果。你也可以使用 <code>@</code> 来指定 <code>dig</code> 请求的域名服务器。</p><p>在下面的例子中，就指定了 <code>dig</code> 向 Google 的域名服务器 8.8.8.8 查询域名信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig @8.8.8.8 networkworld.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu &lt;&lt;&gt;&gt; @8.8.8.8 networkworld.com</span></span>
<span class="line"><span>; (1 server found)</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 21163</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 512</span></span>
<span class="line"><span>;; QUESTION SECTION:</span></span>
<span class="line"><span>;networkworld.com.              IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       299     IN      A       151.101.2.165</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 48 msec</span></span>
<span class="line"><span>;; SERVER: 8.8.8.8#53(8.8.8.8)</span></span>
<span class="line"><span>;; WHEN: Thu Feb 13 14:26:14 EST 2020</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><p>想要知道正在使用的 <code>dig</code> 工具的版本，可以使用 <code>-v</code> 选项。你会看到类似这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig -v</span></span>
<span class="line"><span>DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu</span></span></code></pre></div><p>或者这样的返回信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig -v</span></span>
<span class="line"><span>DiG 9.11.4-P2-RedHat-9.11.4-22.P2.el8</span></span></code></pre></div><p>如果你觉得 <code>dig</code> 返回的内容过于详细，可以使用 <code>+noall</code>（不显示所有内容）和 <code>+answer</code>（仅显示域名服务器的响应内容）选项，域名服务器的详细信息就会被忽略，只保留域名解析结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com +noall +answer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu &lt;&lt;&gt;&gt; networkworld.com +noall +answer</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span></code></pre></div><h3 id="批量查询域名" tabindex="-1">批量查询域名 <a class="header-anchor" href="#批量查询域名" aria-label="Permalink to “批量查询域名”">​</a></h3><p>如果你要查询多个域名，可以把这些域名写入到一个文件内（<code>domains</code>），然后使用下面的 <code>dig</code> 命令遍历整个文件并给出所有查询结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig +noall +answer -f domains</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>world.std.com.          77972   IN      A       192.74.137.5</span></span>
<span class="line"><span>uushenandoah.org.       1982    IN      A       162.241.24.209</span></span>
<span class="line"><span>amazon.com.             18      IN      A       176.32.103.205</span></span>
<span class="line"><span>amazon.com.             18      IN      A       176.32.98.166</span></span>
<span class="line"><span>amazon.com.             18      IN      A       205.251.242.103</span></span></code></pre></div><p>你也可以在上面的命令中使用 <code>+short</code> 选项，但如果其中有些域名指向多个 IP 地址，就无法看出哪些 IP 地址对应哪个域名了。在这种情况下，更好地做法应该是让 <code>awk</code> 对返回内容进行处理，只留下第一列和最后一列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig +noall +answer -f domains | awk &#39;{print $1,$NF}&#39;</span></span>
<span class="line"><span>networkworld.com. 151.101.66.165</span></span>
<span class="line"><span>networkworld.com. 151.101.130.165</span></span>
<span class="line"><span>networkworld.com. 151.101.194.165</span></span>
<span class="line"><span>networkworld.com. 151.101.2.165</span></span>
<span class="line"><span>world.std.com. 192.74.137.5</span></span>
<span class="line"><span>amazon.com. 176.32.98.166</span></span>
<span class="line"><span>amazon.com. 205.251.242.103</span></span>
<span class="line"><span>amazon.com. 176.32.103.205</span></span></code></pre></div><hr>`,33)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3527430/digging-up-ip-addresses-with-the-dig-command.html"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3527430/digging-up-ip-addresses-with-the-dig-command.html",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/HankChow"},{default:e(()=>[...s[4]||(s[4]=[n("HankChow",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const N=l(r,[["render",g]]);export{I as __pageData,N as default};
