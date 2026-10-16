import{_ as t,a0 as o,w as c,s as d,ao as l,I as a,a1 as e,A as i,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Linux 終端快速檢測網站是否宕機的 6 個方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 終端快速檢測網站是否宕機的 6 個方法 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 終端快速檢測網站是否宕機的 6 個方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 終端快速檢測網站是否宕機的 6 個方法 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191116 6 Methods to Quickly Check if a Website is up or down from the Linux Terminal","title":"在 Linux 終端快速檢測網站是否宕機的 6 個方法","tag":"201912","desc":""},"relativePath":"201912/20191116 6 Methods to Quickly Check if a Website is up or down from the Linux Terminal.md","filePath":"[post].md"}'),h={name:"201912/20191116 6 Methods to Quickly Check if a Website is up or down from the Linux Terminal.md"};function g(r,s,u,k,b,m){const p=o("Link");return c(),d("div",null,[s[48]||(s[48]=l('<h1 id="在-linux-終端快速檢測網站是否宕機的-6-個方法" tabindex="-1">在 Linux 終端快速檢測網站是否宕機的 6 個方法 <a class="header-anchor" href="#在-linux-終端快速檢測網站是否宕機的-6-個方法" aria-label="Permalink to “在 Linux 終端快速檢測網站是否宕機的 6 個方法”">​</a></h1><blockquote><p>本教程教你怎樣在 Linux 終端快速檢測一個網站是否宕機。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201912/10/093801u332115oocxz4531.jpg" alt=""></p><p>你可能已經瞭解了一些類似的命令，像 <code>ping</code>、<code>curl</code> 和 <code>wget</code>。我們在本教程中又加入了一些其他命令。同時，我們也加入了不同的選項來檢測單個和多個主機的信息。</p><p>本文將幫助你檢測網站是否宕機。但是如果你在維護一些網站，希望網站宕掉時得到實時的報警，我推薦你去使用實時網站監控工具。這種工具有很多，有些是免費的，大部分收費。根據你的需求，選擇合適的工具。在後續的文章中我們會涉及這個主題。</p><h3 id="方法-1-使用-fping-命令檢測一個網站是否宕機" tabindex="-1">方法 1：使用 fping 命令檢測一個網站是否宕機 <a class="header-anchor" href="#方法-1-使用-fping-命令檢測一個網站是否宕機" aria-label="Permalink to “方法 1：使用 fping 命令檢測一個網站是否宕機”">​</a></h3>',6)),a("p",null,[e(p,{href:"https://www.2daygeek.com/how-to-use-ping-fping-gping-in-linux/"},{default:i(()=>[...s[0]||(s[0]=[n("fping 命令",-1)])]),_:1}),s[1]||(s[1]=l(" 是一個類似 <code>ping</code> 的程序，使用互聯網控制消息協議（ICMP）的<ruby>回應請求報文<rt>echo request</rt></ruby>來判斷目標主機是否能回應。<code>fping</code> 與 <code>ping</code> 的不同之處在於它可以並行地 <code>ping</code> 任意數量的主機，也可以從一個文本文件讀入主機名稱。<code>fping</code> 發送一個 ICMP 回應請求後不等待目標主機響應，就以輪詢模式向下一個目標主機發請求。如果一個目標主機有響應，那麼它就被標記為存活的，然後從檢查目標列表裏去掉。如果一個目標主機在限定的時間和（或）重試次數內沒有響應，則被指定為網站無法到達的。",13))]),s[49]||(s[49]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># fping 2daygeek.com linuxtechnews.com magesh.co.in</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2daygeek.com is alive</span></span>
<span class="line"><span>linuxtechnews.com is alive</span></span>
<span class="line"><span>magesh.co.in is alive</span></span></code></pre></div><h3 id="方法-2-使用-http-命令檢測一個網站是否宕機" tabindex="-1">方法 2：使用 http 命令檢測一個網站是否宕機 <a class="header-anchor" href="#方法-2-使用-http-命令檢測一個網站是否宕機" aria-label="Permalink to “方法 2：使用 http 命令檢測一個網站是否宕機”">​</a></h3>`,2)),a("p",null,[s[3]||(s[3]=n("HTTPie（讀作 aitch-tee-tee-pie）是一個命令列 HTTP 客户端。",-1)),e(p,{href:"https://www.2daygeek.com/httpie-curl-wget-alternative-http-client-linux/"},{default:i(()=>[...s[2]||(s[2]=[n("httpie",-1)])]),_:1}),s[4]||(s[4]=n(" 是一個可以與 web 服務通過 CLI 進行交互的現代工具。httpie 工具提供了簡單的 ",-1)),s[5]||(s[5]=a("code",null,"http",-1)),s[6]||(s[6]=n(" 命令，可以通過發送簡單的、自然語言語法的任意 HTTP 請求得到多彩的結果輸出。HTTPie 可以用來對 HTTP 服務器進行測試、調試和基本的交互。",-1))]),s[50]||(s[50]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># http 2daygeek.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 301 Moved Permanently</span></span>
<span class="line"><span>CF-RAY: 535b66722ab6e5fc-LHR</span></span>
<span class="line"><span>Cache-Control: max-age=3600</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Date: Thu, 14 Nov 2019 19:30:28 GMT</span></span>
<span class="line"><span>Expires: Thu, 14 Nov 2019 20:30:28 GMT</span></span>
<span class="line"><span>Location: https://2daygeek.com/</span></span>
<span class="line"><span>Server: cloudflare</span></span>
<span class="line"><span>Transfer-Encoding: chunked</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span></code></pre></div><h3 id="方法-3-使用-curl-命令檢測一個網站是否宕機" tabindex="-1">方法 3：使用 curl 命令檢測一個網站是否宕機 <a class="header-anchor" href="#方法-3-使用-curl-命令檢測一個網站是否宕機" aria-label="Permalink to “方法 3：使用 curl 命令檢測一個網站是否宕機”">​</a></h3>`,2)),a("p",null,[e(p,{href:"https://www.2daygeek.com/curl-linux-command-line-download-manager/"},{default:i(()=>[...s[7]||(s[7]=[n("curl 命令",-1)])]),_:1}),s[8]||(s[8]=n(" 是一個用於在服務器間通過支持的協議（DICT、FILE、FTP、FTPS、GOPHER、HTTP、HTTPS、IMAP、IMAPS、LDAP、LDAPS、POP3、POP3S、RTMP、RTSP、SCP、SFTP、SMTP、SMTPS、TELNET 和 TFTP）傳輸數據的工具。這個工具不支持用户交互。",-1)),s[9]||(s[9]=a("code",null,"curl",-1)),s[10]||(s[10]=n(" 也支持使用代理、用户認證、FTP 上傳、HTTP POST 請求、SSL 連接、cookie、斷點續傳、Metalink 等等。",-1)),s[11]||(s[11]=a("code",null,"curl ",-1)),s[12]||(s[12]=n("由 libcurl 庫提供所有與傳輸有關的能力。",-1))]),s[51]||(s[51]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># curl -I https://www.magesh.co.in</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/2 200</span></span>
<span class="line"><span>date: Thu, 14 Nov 2019 19:39:47 GMT</span></span>
<span class="line"><span>content-type: text/html</span></span>
<span class="line"><span>set-cookie: __cfduid=db16c3aee6a75c46a504c15131ead3e7f1573760386; expires=Fri, 13-Nov-20 19:39:46 GMT; path=/; domain=.magesh.co.in; HttpOnly</span></span>
<span class="line"><span>vary: Accept-Encoding</span></span>
<span class="line"><span>last-modified: Sun, 14 Jun 2015 11:52:38 GMT</span></span>
<span class="line"><span>x-cache: HIT from Backend</span></span>
<span class="line"><span>cf-cache-status: DYNAMIC</span></span>
<span class="line"><span>expect-ct: max-age=604800, report-uri=&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span></span>
<span class="line"><span>server: cloudflare</span></span>
<span class="line"><span>cf-ray: 535b74123ca4dbf3-LHR</span></span></code></pre></div><p>如果你只想看 HTTP 狀態碼而不是返回的全部信息，用下面的 <code>curl</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># curl -I &quot;www.magesh.co.in&quot; 2&gt;&amp;1 | awk &#39;/HTTP\\// {print $2}&#39;</span></span>
<span class="line"><span> 200</span></span></code></pre></div><p>如果你想看一個網站是否宕機，用下面的 bash 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi curl-url-check.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>if curl -I &quot;https://www.magesh.co.in&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; ; then</span></span>
<span class="line"><span>    echo &quot;magesh.co.in is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;magesh.co.in is down&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>當你把腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh curl-url-check.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/2 200</span></span>
<span class="line"><span>magesh.co.in is up</span></span></code></pre></div><p>如果你想看多個網站的狀態，使用下面的 shell 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi curl-url-check-1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for site in www.google.com google.co.in www.xyzzz.com</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>if curl -I &quot;$site&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; ; then</span></span>
<span class="line"><span>    echo &quot;$site is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;$site is down&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>echo &quot;----------------------------------&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>當你把上面腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh curl-url-check-1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>www.google.com is up</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>HTTP/1.1 301 Moved Permanently</span></span>
<span class="line"><span>google.co.in is up</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>www.xyzzz.com is down</span></span>
<span class="line"><span>----------------------------------</span></span></code></pre></div><h3 id="方法-4-使用-wget-命令檢測一個網站是否宕機" tabindex="-1">方法 4：使用 wget 命令檢測一個網站是否宕機 <a class="header-anchor" href="#方法-4-使用-wget-命令檢測一個網站是否宕機" aria-label="Permalink to “方法 4：使用 wget 命令檢測一個網站是否宕機”">​</a></h3>`,12)),a("p",null,[e(p,{href:"https://www.2daygeek.com/wget-linux-command-line-download-utility-tool/"},{default:i(()=>[...s[13]||(s[13]=[n("wget 命令",-1)])]),_:1}),s[14]||(s[14]=n("（前身是 Geturl）是一個自由開源的命令列下載工具，通過 HTTP、HTTPS、FTP 和其他廣泛使用的互聯網協議獲取文件。",-1)),s[15]||(s[15]=a("code",null,"wget",-1)),s[16]||(s[16]=n(" 是非交互式的命令列工具，由 World Wide Web 和 get 得名。",-1)),s[17]||(s[17]=a("code",null,"wget",-1)),s[18]||(s[18]=n(" 相對於其他工具來説更優秀，功能包括後台運行、遞歸下載、多文件下載、斷點續傳、非交互式下載和大文件下載。",-1))]),s[52]||(s[52]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wget -S --spider https://www.magesh.co.in</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Spider mode enabled. Check if remote file exists.</span></span>
<span class="line"><span>--2019-11-15 01:22:00--  https://www.magesh.co.in/</span></span>
<span class="line"><span>Loaded CA certificate &#39;/etc/ssl/certs/ca-certificates.crt&#39;</span></span>
<span class="line"><span>Resolving www.magesh.co.in (www.magesh.co.in)… 104.18.35.52, 104.18.34.52, 2606:4700:30::6812:2334, …</span></span>
<span class="line"><span>Connecting to www.magesh.co.in (www.magesh.co.in)|104.18.35.52|:443… connected.</span></span>
<span class="line"><span>HTTP request sent, awaiting response…</span></span>
<span class="line"><span>  HTTP/1.1 200 OK</span></span>
<span class="line"><span>  Date: Thu, 14 Nov 2019 19:52:01 GMT</span></span>
<span class="line"><span>  Content-Type: text/html</span></span>
<span class="line"><span>  Connection: keep-alive</span></span>
<span class="line"><span>  Set-Cookie: __cfduid=db73306a2f1c72c1318ad4709ef49a3a01573761121; expires=Fri, 13-Nov-20 19:52:01 GMT; path=/; domain=.magesh.co.in; HttpOnly</span></span>
<span class="line"><span>  Vary: Accept-Encoding</span></span>
<span class="line"><span>  Last-Modified: Sun, 14 Jun 2015 11:52:38 GMT</span></span>
<span class="line"><span>  X-Cache: HIT from Backend</span></span>
<span class="line"><span>  CF-Cache-Status: DYNAMIC</span></span>
<span class="line"><span>  Expect-CT: max-age=604800, report-uri=&quot;https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct&quot;</span></span>
<span class="line"><span>  Server: cloudflare</span></span>
<span class="line"><span>  CF-RAY: 535b85fe381ee684-LHR</span></span>
<span class="line"><span>Length: unspecified [text/html]</span></span>
<span class="line"><span>Remote file exists and could contain further links,</span></span>
<span class="line"><span>but recursion is disabled -- not retrieving.</span></span></code></pre></div><p>如果你只想看 HTTP 狀態碼而不是返回的全部結果，用下面的 <code>wget</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wget --spider -S &quot;www.magesh.co.in&quot; 2&gt;&amp;1 | awk &#39;/HTTP\\// {print $2}&#39;</span></span>
<span class="line"><span> 200</span></span></code></pre></div><p>如果你想看一個網站是否宕機，用下面的 bash 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi wget-url-check.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>if wget --spider -S &quot;https://www.google.com&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; ; then</span></span>
<span class="line"><span>    echo &quot;Google.com is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;Google.com is down&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>當你把腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># wget-url-check.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Google.com is up</span></span></code></pre></div><p>如果你想看多個網站的狀態，使用下面的 shell 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi curl-url-check-1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for site in www.google.com google.co.in www.xyzzz.com</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>if wget --spider -S &quot;$site&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; ; then</span></span>
<span class="line"><span>    echo &quot;$site is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;$site is down&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>echo &quot;----------------------------------&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>當你把上面腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh wget-url-check-1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>www.google.com is up</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>HTTP/1.1 301 Moved Permanently</span></span>
<span class="line"><span>google.co.in is up</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>www.xyzzz.com is down</span></span>
<span class="line"><span>----------------------------------</span></span></code></pre></div><h3 id="方法-5-使用-lynx-命令檢測一個網站是否宕機" tabindex="-1">方法 5：使用 lynx 命令檢測一個網站是否宕機 <a class="header-anchor" href="#方法-5-使用-lynx-命令檢測一個網站是否宕機" aria-label="Permalink to “方法 5：使用 lynx 命令檢測一個網站是否宕機”">​</a></h3>`,12)),a("p",null,[e(p,{href:"https://www.2daygeek.com/best-text-mode-based-command-line-web-browser-for-linux/"},{default:i(()=>[...s[19]||(s[19]=[n("lynx",-1)])]),_:1}),s[20]||(s[20]=n(" 是一個在",-1)),s[21]||(s[21]=a("ruby",null,[n("可尋址光標字符單元終端"),a("rt",null,"cursor-addressable character cell terminals")],-1)),s[22]||(s[22]=n("上使用的基於文本的高度可配的 web 瀏覽器，它是最古老的 web 瀏覽器並且現在仍在活躍開發。",-1))]),s[53]||(s[53]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lynx -head -dump http://www.magesh.co.in</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Date: Fri, 15 Nov 2019 08:14:23 GMT</span></span>
<span class="line"><span>Content-Type: text/html</span></span>
<span class="line"><span>Connection: close</span></span>
<span class="line"><span>Set-Cookie: __cfduid=df3cb624024b81df7362f42ede71300951573805662; expires=Sat, 1</span></span>
<span class="line"><span>4-Nov-20 08:14:22 GMT; path=/; domain=.magesh.co.in; HttpOnly</span></span>
<span class="line"><span>Vary: Accept-Encoding</span></span>
<span class="line"><span>Last-Modified: Sun, 14 Jun 2015 11:52:38 GMT</span></span>
<span class="line"><span>X-Cache: HIT from Backend</span></span>
<span class="line"><span>CF-Cache-Status: DYNAMIC</span></span>
<span class="line"><span>Server: cloudflare</span></span>
<span class="line"><span>CF-RAY: 535fc5704a43e694-LHR</span></span></code></pre></div><p>如果你只想看 HTTP 狀態碼而不是返回的全部結果，用下面的 <code>lynx</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lynx -head -dump https://www.magesh.co.in 2&gt;&amp;1 | awk &#39;/HTTP\\// {print $2}&#39;</span></span>
<span class="line"><span> 200</span></span></code></pre></div><p>如果你想看一個網站是否宕機，用下面的 bash 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi lynx-url-check.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>if lynx -head -dump http://www.magesh.co.in 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; ; then</span></span>
<span class="line"><span>    echo &quot;magesh.co.in is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;magesh.co.in is down&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>當你把腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh lynx-url-check.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>magesh.co.in is up</span></span></code></pre></div><p>如果你想看多個網站的狀態，使用下面的 shell 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi lynx-url-check-1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for site in http://www.google.com https://google.co.in http://www.xyzzz.com</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>if lynx -head -dump &quot;$site&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; ; then</span></span>
<span class="line"><span>    echo &quot;$site is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;$site is down&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>echo &quot;----------------------------------&quot;</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>當你把上面腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh lynx-url-check-1.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.0 200 OK</span></span>
<span class="line"><span>http://www.google.com is up</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>HTTP/1.0 301 Moved Permanently</span></span>
<span class="line"><span>https://google.co.in is up</span></span>
<span class="line"><span>----------------------------------</span></span>
<span class="line"><span>www.xyzzz.com is down</span></span>
<span class="line"><span>----------------------------------</span></span></code></pre></div><h3 id="方法-6-使用-ping-命令檢測一個網站是否宕機" tabindex="-1">方法 6：使用 ping 命令檢測一個網站是否宕機 <a class="header-anchor" href="#方法-6-使用-ping-命令檢測一個網站是否宕機" aria-label="Permalink to “方法 6：使用 ping 命令檢測一個網站是否宕機”">​</a></h3>`,12)),a("p",null,[e(p,{href:"https://www.2daygeek.com/how-to-use-ping-fping-gping-in-linux/"},{default:i(()=>[...s[23]||(s[23]=[n("ping 命令",-1)])]),_:1}),s[24]||(s[24]=n("（Packet Internet Groper）是網絡工具的代表，用於在互聯網協議（IP）的網絡中測試一個目標主機是否可用/可連接。通過向目標主機發送 ICMP 回應請求報文包並等待 ICMP 回應響應報文來檢測主機的可用性。它基於已發送的包、接收到的包和丟失了的包來統計結果數據，通常包含最小/平均/最大響應時間。",-1))]),s[54]||(s[54]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ping -c 5 2daygeek.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PING 2daygeek.com (104.27.157.177) 56(84) bytes of data.</span></span>
<span class="line"><span>64 bytes from 104.27.157.177 (104.27.157.177): icmp_seq=1 ttl=58 time=228 ms</span></span>
<span class="line"><span>64 bytes from 104.27.157.177 (104.27.157.177): icmp_seq=2 ttl=58 time=227 ms</span></span>
<span class="line"><span>64 bytes from 104.27.157.177 (104.27.157.177): icmp_seq=3 ttl=58 time=250 ms</span></span>
<span class="line"><span>64 bytes from 104.27.157.177 (104.27.157.177): icmp_seq=4 ttl=58 time=171 ms</span></span>
<span class="line"><span>64 bytes from 104.27.157.177 (104.27.157.177): icmp_seq=5 ttl=58 time=193 ms</span></span>
<span class="line"><span></span></span>
<span class="line"><span>--- 2daygeek.com ping statistics ---</span></span>
<span class="line"><span>5 packets transmitted, 5 received, 0% packet loss, time 13244ms</span></span>
<span class="line"><span>rtt min/avg/max/mdev = 170.668/213.824/250.295/28.320 ms</span></span></code></pre></div><h3 id="附加-1-使用-telnet-命令檢測一個網站是否宕機" tabindex="-1">附加 1：使用 telnet 命令檢測一個網站是否宕機 <a class="header-anchor" href="#附加-1-使用-telnet-命令檢測一個網站是否宕機" aria-label="Permalink to “附加 1：使用 telnet 命令檢測一個網站是否宕機”">​</a></h3><p><code>telnet</code> 命令是一個使用 TELNET 協議用於 TCP/IP 網絡中多個主機相互通信的古老的網絡協議。它通過 23 端口連接其他設備如計算機和網絡設備。<code>telnet</code> 是不安全的協議，現在由於用這個協議發送的數據沒有經過加密可能被黑客攔截，所以不推薦使用。大家都使用經過加密且非常安全的 SSH 協議來代替 <code>telnet</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># telnet google.com 80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Trying 216.58.194.46…</span></span>
<span class="line"><span>Connected to google.com.</span></span>
<span class="line"><span>Escape character is &#39;^]&#39;.</span></span>
<span class="line"><span>^]</span></span>
<span class="line"><span>telnet&gt; quit</span></span>
<span class="line"><span>Connection closed.</span></span></code></pre></div><h3 id="附加-2-使用-bash-腳本檢測一個網站是否宕機" tabindex="-1">附加 2：使用 bash 腳本檢測一個網站是否宕機 <a class="header-anchor" href="#附加-2-使用-bash-腳本檢測一個網站是否宕機" aria-label="Permalink to “附加 2：使用 bash 腳本檢測一個網站是否宕機”">​</a></h3>`,5)),a("p",null,[s[26]||(s[26]=n("簡而言之，一個 ",-1)),e(p,{href:"https://www.2daygeek.com/category/shell-script/"},{default:i(()=>[...s[25]||(s[25]=[n("shell 腳本",-1)])]),_:1}),s[27]||(s[27]=n(" 就是一個包含一系列命令的文件。shell 從文件讀取內容按輸入順序逐行在命令列執行。為了讓它更有效，我們添加一些條件。這也減輕了 Linux 管理員的負擔。",-1))]),s[55]||(s[55]=l(`<p>如果你想想用 <code>wget</code> 命令看多個網站的狀態，使用下面的 shell 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi wget-url-check-2.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for site in www.google.com google.co.in www.xyzzz.com</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>if wget --spider -S &quot;$site&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; &gt; /dev/null ; then</span></span>
<span class="line"><span>    echo &quot;$site is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;$site is down&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>當你把上面腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh wget-url-check-2.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www.google.com is up</span></span>
<span class="line"><span>google.co.in is up</span></span>
<span class="line"><span>www.xyzzz.com is down</span></span></code></pre></div>`,4)),a("p",null,[s[29]||(s[29]=n("如果你想用 ",-1)),s[30]||(s[30]=a("code",null,"wget",-1)),s[31]||(s[31]=n(" 命令看多個網站的狀態，使用下面的 ",-1)),e(p,{href:"https://www.2daygeek.com/category/bash-script/"},{default:i(()=>[...s[28]||(s[28]=[n("shell 腳本",-1)])]),_:1}),s[32]||(s[32]=n("：",-1))]),s[56]||(s[56]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># vi curl-url-check-2.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for site in www.google.com google.co.in www.xyzzz.com</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>if curl -I &quot;$site&quot; 2&gt;&amp;1 | grep -w &quot;200\\|301&quot; &gt; /dev/null ; then</span></span>
<span class="line"><span>    echo &quot;$site is up&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo &quot;$site is down&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>當你把上面腳本內容添加到一個文件後，執行文件，查看結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sh curl-url-check-2.sh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www.google.com is up</span></span>
<span class="line"><span>google.co.in is up</span></span>
<span class="line"><span>www.xyzzz.com is down</span></span></code></pre></div><hr>`,4)),a("p",null,[s[34]||(s[34]=n("via: ",-1)),e(p,{href:"https://www.2daygeek.com/linux-command-check-website-is-up-down-alive/"},{default:i(()=>[...s[33]||(s[33]=[n("https://www.2daygeek.com/linux-command-check-website-is-up-down-alive/",-1)])]),_:1})]),a("p",null,[s[39]||(s[39]=n("作者：",-1)),e(p,{href:"https://www.2daygeek.com/author/magesh/"},{default:i(()=>[...s[35]||(s[35]=[n("Magesh Maruthamuthu",-1)])]),_:1}),s[40]||(s[40]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[36]||(s[36]=[n("lujun9972",-1)])]),_:1}),s[41]||(s[41]=n(" 譯者：",-1)),e(p,{href:"https://github.com/lxbwolf"},{default:i(()=>[...s[37]||(s[37]=[n("lxbwolf",-1)])]),_:1}),s[42]||(s[42]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[38]||(s[38]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[45]||(s[45]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[43]||(s[43]=[n("LCTT",-1)])]),_:1}),s[46]||(s[46]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[44]||(s[44]=[n("Linux中國",-1)])]),_:1}),s[47]||(s[47]=n(" 榮譽推出",-1))])])}const y=t(h,[["render",g]]);export{T as __pageData,y as default};
