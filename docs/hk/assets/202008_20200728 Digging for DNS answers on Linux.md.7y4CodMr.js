import{_ as o,a0 as t,w as d,s as r,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const b=JSON.parse('{"title":"在 Linux 上挖掘 DNS 應答中的秘密 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上挖掘 DNS 應答中的秘密 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上挖掘 DNS 應答中的秘密 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上挖掘 DNS 應答中的秘密 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200728 Digging for DNS answers on Linux","title":"在 Linux 上挖掘 DNS 應答中的秘密","tag":"202008","desc":""},"relativePath":"202008/20200728 Digging for DNS answers on Linux.md","filePath":"[post].md"}'),c={name:"202008/20200728 Digging for DNS answers on Linux.md"};function g(u,s,N,k,w,h){const p=t("Link");return d(),r("div",null,[s[24]||(s[24]=a("h1",{id:"在-linux-上挖掘-dns-應答中的秘密",tabindex:"-1"},[n("在 Linux 上挖掘 DNS 應答中的秘密 "),a("a",{class:"header-anchor",href:"#在-linux-上挖掘-dns-應答中的秘密","aria-label":"Permalink to “在 Linux 上挖掘 DNS 應答中的秘密”"},"​")],-1)),s[25]||(s[25]=a("blockquote",null,[a("p",null,"dig 是一個強大而靈活的工具，用於查詢域名系統（DNS）服務器。在這篇文章中，我們將深入瞭解它的工作原理以及它能告訴你什麼。")],-1)),s[26]||(s[26]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/11/235200wlyytlaymlylfdff.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=a("code",null,"dig",-1)),s[2]||(s[2]=n(" 是一款強大而靈活的查詢 DNS 名稱服務器的工具。它執行 DNS 查詢，並顯示參與該過程的名稱服務器返回的應答以及與搜索相關的細節。系統管理員和 ",-1)),l(p,{href:"https://www.networkworld.com/article/3268449/what-is-dns-and-how-does-it-work.html"},{default:e(()=>[...s[0]||(s[0]=[n("DNS",-1)])]),_:1}),s[3]||(s[3]=n(" 管理員經常使用 ",-1)),s[4]||(s[4]=a("code",null,"dig",-1)),s[5]||(s[5]=n(" 來幫助排除 DNS 問題。在這篇文章中，我們將深入瞭解它的工作原理，看看它能告訴我們什麼。",-1))]),s[27]||(s[27]=i(`<p>開始之前，對 DNS（域名系統）的工作方式有一個基本的印象是很有幫助的。它是全球互聯網的關鍵部分，因為它提供了一種查找世界各地的服務器的方式，從而可以與之連接。你可以把它看作是互聯網的地址簿，任何正確連接到互聯網的系統，都應該能夠使用它來查詢任何正確註冊的服務器的 IP 地址。</p><h3 id="dig-入門" tabindex="-1">dig 入門 <a class="header-anchor" href="#dig-入門" aria-label="Permalink to “dig 入門”">​</a></h3><p>Linux 系統上一般都默認安裝了 <code>dig</code> 工具。下面是一個帶有一點註釋的 <code>dig</code> 命令的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig www.networkworld.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.16.1-Ubuntu &lt;&lt;&gt;&gt; www.networkworld.com &lt;== 你使用的 dig 版本</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 6034</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; OPT PSEUDOSECTION:</span></span>
<span class="line"><span>; EDNS: version: 0, flags:; udp: 65494</span></span>
<span class="line"><span>;; QUESTION SECTION:                            &lt;== 你的查詢細節</span></span>
<span class="line"><span>;www.networkworld.com.          IN      A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; ANSWER SECTION:                              &lt;== 結果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www.networkworld.com.   3568    IN      CNAME   idg.map.fastly.net.</span></span>
<span class="line"><span>idg.map.fastly.net.     30      IN      A       151.101.250.165</span></span>
<span class="line"><span></span></span>
<span class="line"><span>;; Query time: 36 msec                          &lt;== 查詢用時</span></span>
<span class="line"><span>;; SERVER: 127.0.0.53#53(127.0.0.53)            &lt;== 本地緩存解析器</span></span>
<span class="line"><span>;; WHEN: Fri Jul 24 19:11:42 EDT 2020           &lt;== 查詢的時間</span></span>
<span class="line"><span>;; MSG SIZE  rcvd: 97                           &lt;== 返回的字節數</span></span></code></pre></div><p>如果你得到了一個這樣的應答，是好消息嗎？簡短的回答是“是”。你得到了及時的回覆。狀態字段（<code>status: NOERROR</code>）顯示沒有問題。你正在連接到一個能夠提供所要求的信息的名稱服務器，並得到一個回覆，告訴你一些關於你所查詢的系統的重要細節。簡而言之，你已經驗證了你的系統和域名系統相處得很好。</p><p>其他可能的狀態指標包括：</p><ul><li><code>SERVFAIL</code>：被查詢的名稱存在，但沒有數據或現有數據無效。</li><li><code>NXDOMAIN</code>：所查詢的名稱不存在。</li><li><code>REFUSED</code>：該區域的數據不存在於所請求的權威服務器中，並且在這種情況下，基礎設施沒有設置為提供響應服務。</li></ul><p>下面是一個例子，如果你要查找一個不存在的域名，你會看到什麼？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig cannotbe.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>; &lt;&lt;&gt;&gt; DiG 9.16.1-Ubuntu &lt;&lt;&gt;&gt; cannotbe.org</span></span>
<span class="line"><span>;; global options: +cmd</span></span>
<span class="line"><span>;; Got answer:</span></span>
<span class="line"><span>;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NXDOMAIN, id: 35348</span></span>
<span class="line"><span>;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1</span></span></code></pre></div><p>一般來説，<code>dig</code> 比 <code>ping</code> 會提供更多的細節，如果域名不存在，<code>ping</code> 會回覆 “名稱或服務未知”。當你查詢一個合法的系統時，你可以看到域名系統對該系統知道些什麼，這些記錄是如何配置的，以及檢索這些數據需要多長時間。</p><p>（LCTT 譯註：<code>dig</code> 也比 <code>nslookup</code> 提供的數據更多。此外，<code>dig</code> 採用的是操作系統的解析庫，而 <code>nslookup</code> 採用的是自己提供的解析庫，這有時候會帶來不同的行為。最後，有趣的一點是，<code>dig</code> 的返回的格式是符合 BIND 區域文件格式的。）</p><p>事實上，有時 <code>dig</code> 可以在 <code>ping</code> 完全不能響應的時候進行響應，當你試圖確定一個連接問題時，這種信息是非常有用的。</p><h3 id="dns-記錄類型和標誌" tabindex="-1">DNS 記錄類型和標誌 <a class="header-anchor" href="#dns-記錄類型和標誌" aria-label="Permalink to “DNS 記錄類型和標誌”">​</a></h3><p>在上面的第一個查詢中，我們可以看到一個問題，那就是同時存在 <code>CNAME</code> 和 <code>A</code> 記錄。<code>CNAME</code>（<ruby>規範名稱<rt>canonical name</rt></ruby>）就像一個別名，把一個域名指向另一個域名。你查詢的大多數系統不會有 <code>CNAME</code> 記錄，而只有 <code>A</code> 記錄。如果你運行 <code>dig localhost</code> 命令，你會看到一個 <code>A</code> 記錄，它就指向 <code>127.0.0.1</code> —— 這是每個系統都使用的“迴環”地址。<code>A</code> 記錄用於將一個名字映射到一個 IP 地址。</p><p>DNS 記錄類型包括：</p><ul><li><code>A</code> 或 <code>AAAA</code>：IPv4 或 IPv6 地址</li><li><code>CNAME</code>：別名</li><li><code>MX</code>：郵件交換器</li><li><code>NS</code>：名稱服務器</li><li><code>PTR</code>：一個反向條目，讓你根據 IP 地址找到系統名稱</li><li><code>SOA</code>：表示授權記錄開始</li><li><code>TXT</code> 一些相關文本</li></ul>`,16)),a("p",null,[s[7]||(s[7]=n("我們還可以在上述輸出的第五行看到一系列的“標誌”。這些定義在 ",-1)),l(p,{href:"https://tools.ietf.org/html/rfc1035"},{default:e(()=>[...s[6]||(s[6]=[n("RFC 1035",-1)])]),_:1}),s[8]||(s[8]=n(" 中 —— 它定義了 DNS 報文頭中包含的標誌，甚至顯示了報文頭的格式。",-1))]),s[28]||(s[28]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                                1  1  1  1  1  1</span></span>
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
<span class="line"><span>+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+</span></span></code></pre></div><p>在上面的初始查詢中，第五行顯示的標誌是：</p><ul><li><code>qr</code> = 查詢</li><li><code>rd</code> = 進行遞歸查詢</li><li><code>ra</code> = 遞歸數據可用</li></ul><p>RFC 中描述的其他標誌包括：</p><ul><li><code>aa</code> = 權威答覆</li><li><code>cd</code> = 檢查是否禁用</li><li><code>ad</code> = 真實數據</li><li><code>opcode</code> = 一個 4 位字段</li><li><code>tc</code> = 截斷</li><li><code>z</code>（未使用）</li></ul><h3 id="添加-trace-選項" tabindex="-1">添加 +trace 選項 <a class="header-anchor" href="#添加-trace-選項" aria-label="Permalink to “添加 +trace 選項”">​</a></h3><p>如果你添加 <code>+trace</code> 選項，你將從 <code>dig</code> 得到更多的輸出。它會添加更多信息，顯示你的 DNS 查詢如何通過名稱服務器的層次結構找到你要找的答案。</p><p>下面顯示的所有 <code>NS</code> 記錄都反映了名稱服務器 —— 這只是你將看到的數據的第一部分，因為查詢通過名稱服務器的層次結構來追蹤你要找的東西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig +trace networkworld.com</span></span>
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
<span class="line"><span>...</span></span></code></pre></div><p>最終，你會得到與你的要求直接掛鈎的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>networkworld.com.       300     IN      A       151.101.2.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.66.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.130.165</span></span>
<span class="line"><span>networkworld.com.       300     IN      A       151.101.194.165</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-d.pnap.net.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-a.pnap.net.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns0.pcworld.com.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns1.pcworld.com.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-b.pnap.net.</span></span>
<span class="line"><span>networkworld.com.       14400   IN      NS      ns-c.pnap.net.</span></span>
<span class="line"><span>;; Received 269 bytes from 70.42.185.30#53(ns0.pcworld.com) in 116 ms</span></span></code></pre></div><h3 id="挑選響應者" tabindex="-1">挑選響應者 <a class="header-anchor" href="#挑選響應者" aria-label="Permalink to “挑選響應者”">​</a></h3><p>你可以使用 <code>@</code> 符號來指定一個特定的名稱服務器來處理你的查詢。在這裏，我們要求 Google 的主名稱服務器響應我們的查詢：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dig @8.8.8.8 networkworld.com</span></span>
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
<span class="line"><span>;; MSG SIZE  rcvd: 109</span></span></code></pre></div><p>下面所示的命令對 <code>8.8.8.8</code> IP 地址進行反向查找，以顯示它屬於 Google 的 DNS 服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nslookup 8.8.8.8</span></span>
<span class="line"><span>8.8.8.8.in-addr.arpa    name = dns.google.</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p><code>dig</code> 命令是掌握 DNS 工作原理和在出現連接問題時排除故障的重要工具。</p><hr>`,19)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),l(p,{href:"https://www.networkworld.com/article/3568488/digging-for-dns-answers-on-linux.html"},{default:e(()=>[...s[9]||(s[9]=[n("https://www.networkworld.com/article/3568488/digging-for-dns-answers-on-linux.html",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("作者：",-1)),l(p,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[11]||(s[11]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[16]||(s[16]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[12]||(s[12]=[n("lujun9972",-1)])]),_:1}),s[17]||(s[17]=n(" 譯者：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1}),s[18]||(s[18]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[19]||(s[19]=[n("LCTT",-1)])]),_:1}),s[22]||(s[22]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[20]||(s[20]=[n("Linux中國",-1)])]),_:1}),s[23]||(s[23]=n(" 榮譽推出",-1))])])}const f=o(c,[["render",g]]);export{b as __pageData,f as default};
