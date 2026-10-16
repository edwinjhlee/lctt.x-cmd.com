import{_ as l,a0 as t,w as o,s as d,ao as c,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const I=JSON.parse('{"title":"使用 dig 命令挖掘域名解析信息 | LCTT x X-CMD","titleTemplate":false,"description":"使用 dig 命令挖掘域名解析信息 | LCTT (202002) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 dig 命令挖掘域名解析信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 dig 命令挖掘域名解析信息 | LCTT (202002) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202002/20200214 Digging up IP addresses with the Linux dig command","title":"使用 dig 命令挖掘域名解析信息","tag":"202002","desc":""},"relativePath":"202002/20200214 Digging up IP addresses with the Linux dig command.md","filePath":"[post].md"}'),r={name:"202002/20200214 Digging up IP addresses with the Linux dig command.md"};function g(h,s,k,u,m,b){const a=t("Link");return o(),d("div",null,[s[15]||(s[15]=c(`<h1 id="使用-dig-命令挖掘域名解析信息" tabindex="-1">使用 dig 命令挖掘域名解析信息 <a class="header-anchor" href="#使用-dig-命令挖掘域名解析信息" aria-label="Permalink to “使用 dig 命令挖掘域名解析信息”">​</a></h1><blockquote><p>命令列工具 <code>dig</code> 是用於解析域名和故障排查的一個利器。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202002/26/094028jgvzguau1pdgicpz.jpg" alt=""></p><p>從主要功能上來説，<code>dig</code> 和 <code>nslookup</code> 之間差異不大，但 <code>dig</code> 更像一個加強版的 <code>nslookup</code>，可以查詢到一些由域名服務器管理的信息，這在排查某些問題的時候非常有用。總的來説，<code>dig</code> 是一個既簡單易用又功能強大的命令列工具。（LCTT 譯註：<code>dig</code> 和 <code>nslookup</code> 行為的主要區別來自於 <code>dig</code> 使用是是操作系統本身的解析庫，而 <code>nslookup</code> 使用的是該程序自帶的解析庫，這有時候會帶來一些行為差異。此外，從表現形式上看，<code>dig</code> 返回是結果是以 BIND 配置信息的格式返回的，也帶有更多的技術細節。）</p><p><code>dig</code> 最基本的功能就是查詢域名信息，因此它的名稱實際上是“<ruby>域名信息查詢工具<rt>Domain Information Groper</rt></ruby>”的縮寫。<code>dig</code> 向用户返回的內容可以非常詳盡，也可以非常簡潔，展現內容的多少完全由用户在查詢時使用的選項來決定。</p><h3 id="我只需要查詢-ip-地址" tabindex="-1">我只需要查詢 IP 地址 <a class="header-anchor" href="#我只需要查詢-ip-地址" aria-label="Permalink to “我只需要查詢 IP 地址”">​</a></h3><p>如果只需要查詢某個域名指向的 IP 地址，可以使用 <code>+short</code> 選項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig facebook.com +short</span></span>
<span class="line"><span>31.13.66.35</span></span></code></pre></div><p>在查詢的時候發現有的域名會指向多個 IP 地址？這其實是網站提高其可用性的一種措施。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com +short</span></span>
<span class="line"><span>151.101.2.165</span></span>
<span class="line"><span>151.101.66.165</span></span>
<span class="line"><span>151.101.130.165</span></span>
<span class="line"><span>151.101.194.165</span></span></code></pre></div><p>也正是由於這些網站通過負載均衡實現高可用，在下一次查詢的時候，或許會發現這幾個 IP 地址的排序有所不同。（LCTT 譯註：瀏覽器等應用默認會使用返回的第一個 IP 地址，因此這樣實現了一種簡單的負載均衡。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com +short</span></span>
<span class="line"><span>151.101.130.165</span></span>
<span class="line"><span>151.101.194.165</span></span>
<span class="line"><span>151.101.2.165</span></span>
<span class="line"><span>151.101.66.165</span></span></code></pre></div><h3 id="標準返回" tabindex="-1">標準返回 <a class="header-anchor" href="#標準返回" aria-label="Permalink to “標準返回”">​</a></h3><p><code>dig</code> 的標準返回內容則包括這個工具本身的一些信息，以及請求域名服務器時返回的響應內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com</span></span>
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
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><p>由於域名服務器有緩存機制，返回的內容可能是之前緩存好的信息。在這種情況下，<code>dig</code> 最後顯示的<ruby>查詢時間<rt>Query time</rt></ruby>會是 0 毫秒（0 msec）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>;; Query time: 0 msec        &lt;==</span></span>
<span class="line"><span>;; SERVER: 127.0.0.53#53(127.0.0.53)</span></span>
<span class="line"><span>;; WHEN: Thu Feb 13 15:30:09 EST 2020</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><h3 id="向誰查詢" tabindex="-1">向誰查詢？ <a class="header-anchor" href="#向誰查詢" aria-label="Permalink to “向誰查詢？”">​</a></h3><p>在默認情況下，<code>dig</code> 會根據 <code>/etc/resolv.conf</code> 這個文件的內容決定向哪個域名服務器獲取查詢結果。你也可以使用 <code>@</code> 來指定 <code>dig</code> 請求的域名服務器。</p><p>在下面的例子中，就指定了 <code>dig</code> 向 Google 的域名服務器 8.8.8.8 查詢域名信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig @8.8.8.8 networkworld.com</span></span>
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
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><p>想要知道正在使用的 <code>dig</code> 工具的版本，可以使用 <code>-v</code> 選項。你會看到類似這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig -v</span></span>
<span class="line"><span>DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu</span></span></code></pre></div><p>或者這樣的返回信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig -v</span></span>
<span class="line"><span>DiG 9.11.4-P2-RedHat-9.11.4-22.P2.el8</span></span></code></pre></div><p>如果你覺得 <code>dig</code> 返回的內容過於詳細，可以使用 <code>+noall</code>（不顯示所有內容）和 <code>+answer</code>（僅顯示域名服務器的響應內容）選項，域名服務器的詳細信息就會被忽略，只保留域名解析結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig networkworld.com +noall +answer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.11.5-P4-5.1ubuntu2.1-Ubuntu &lt;&lt;&gt;&gt; networkworld.com +noall +answer</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span></code></pre></div><h3 id="批量查詢域名" tabindex="-1">批量查詢域名 <a class="header-anchor" href="#批量查詢域名" aria-label="Permalink to “批量查詢域名”">​</a></h3><p>如果你要查詢多個域名，可以把這些域名寫入到一個文件內（<code>domains</code>），然後使用下面的 <code>dig</code> 命令遍歷整個文件並給出所有查詢結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig +noall +answer -f domains</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>world.std.com.          77972   IN      A       192.74.137.5</span></span>
<span class="line"><span>uushenandoah.org.       1982    IN      A       162.241.24.209</span></span>
<span class="line"><span>amazon.com.             18      IN      A       176.32.103.205</span></span>
<span class="line"><span>amazon.com.             18      IN      A       176.32.98.166</span></span>
<span class="line"><span>amazon.com.             18      IN      A       205.251.242.103</span></span></code></pre></div><p>你也可以在上面的命令中使用 <code>+short</code> 選項，但如果其中有些域名指向多個 IP 地址，就無法看出哪些 IP 地址對應哪個域名了。在這種情況下，更好地做法應該是讓 <code>awk</code> 對返回內容進行處理，只留下第一列和最後一列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig +noall +answer -f domains | awk &#39;{print $1,$NF}&#39;</span></span>
<span class="line"><span>networkworld.com. 151.101.66.165</span></span>
<span class="line"><span>networkworld.com. 151.101.130.165</span></span>
<span class="line"><span>networkworld.com. 151.101.194.165</span></span>
<span class="line"><span>networkworld.com. 151.101.2.165</span></span>
<span class="line"><span>world.std.com. 192.74.137.5</span></span>
<span class="line"><span>amazon.com. 176.32.98.166</span></span>
<span class="line"><span>amazon.com. 205.251.242.103</span></span>
<span class="line"><span>amazon.com. 176.32.103.205</span></span></code></pre></div><hr>`,33)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3527430/digging-up-ip-addresses-with-the-dig-command.html"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.networkworld.com/article/3527430/digging-up-ip-addresses-with-the-dig-command.html",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[2]||(s[2]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),p(a,{href:"https://github.com/HankChow"},{default:e(()=>[...s[4]||(s[4]=[n("HankChow",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const N=l(r,[["render",g]]);export{I as __pageData,N as default};
