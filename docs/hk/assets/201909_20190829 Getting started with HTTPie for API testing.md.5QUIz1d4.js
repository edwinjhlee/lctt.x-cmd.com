import{_ as i,a0 as l,w as o,s as r,I as a,x as s,a1 as e,A as t,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"使用 HTTPie 進行 API 測試 | LCTT x X-CMD","titleTemplate":false,"description":"使用 HTTPie 進行 API 測試 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 HTTPie 進行 API 測試 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 HTTPie 進行 API 測試 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190829 Getting started with HTTPie for API testing","title":"使用 HTTPie 進行 API 測試","tag":"201909","desc":""},"relativePath":"201909/20190829 Getting started with HTTPie for API testing.md","filePath":"[post].md"}'),u={name:"201909/20190829 Getting started with HTTPie for API testing.md"};function d(g,n,h,q,k,T){const p=l("Link");return o(),r("div",null,[n[38]||(n[38]=a("h1",{id:"使用-httpie-進行-api-測試",tabindex:"-1"},[s("使用 HTTPie 進行 API 測試 "),a("a",{class:"header-anchor",href:"#使用-httpie-進行-api-測試","aria-label":"Permalink to “使用 HTTPie 進行 API 測試”"},"​")],-1)),n[39]||(n[39]=a("blockquote",null,[a("p",null,"使用 HTTPie 調試 API，這是一個用 Python 寫的易用的命令列工具。")],-1)),n[40]||(n[40]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/12/102919ry1ute1y9h991ftz.jpg",alt:""})],-1)),a("p",null,[e(p,{href:"https://httpie.org/"},{default:t(()=>[...n[0]||(n[0]=[s("HTTPie",-1)])]),_:1}),n[1]||(n[1]=s(" 是一個非常易用、易於升級的 HTTP 客户端。它的發音為 “aitch-tee-tee-pie” 並以 ",-1)),n[2]||(n[2]=a("code",null,"http",-1)),n[3]||(n[3]=s(" 命令運行，它是一個用 Python 編寫的來用於訪問 Web 的命令列工具。",-1))]),a("p",null,[n[5]||(n[5]=s("由於這是一篇關於 HTTP 客户端的指導文章，因此你需要一個 HTTP 服務器來試用它。在這裏，訪問 ",-1)),e(p,{href:"https://github.com/postmanlabs/httpbin"},{default:t(()=>[...n[4]||(n[4]=[s("httpbin.org",-1)])]),_:1}),n[6]||(n[6]=s("，它是一個簡單的開源 HTTP 請求和響應服務。httpbin.org 網站是一種測試 Web API 的強大方式，並能仔細管理並顯示請求和響應內容，不過現在讓我們專注於 HTTPie 的強大功能。",-1))]),n[41]||(n[41]=a("h3",{id:"wget-和-curl-的替代品",tabindex:"-1"},[s("Wget 和 cURL 的替代品 "),a("a",{class:"header-anchor",href:"#wget-和-curl-的替代品","aria-label":"Permalink to “Wget 和 cURL 的替代品”"},"​")],-1)),a("p",null,[n[9]||(n[9]=s("你可能聽説過古老的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Wget"},{default:t(()=>[...n[7]||(n[7]=[s("Wget",-1)])]),_:1}),n[10]||(n[10]=s(" 或稍微新一些的 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/CURL"},{default:t(()=>[...n[8]||(n[8]=[s("cURL",-1)])]),_:1}),n[11]||(n[11]=s(" 工具，它們允許你從命令列訪問 Web。它們是為訪問網站而編寫的，而 HTTPie 則用於訪問 Web API。",-1))]),n[42]||(n[42]=a("p",null,[s("網站請求發生在計算機和正在閲讀並響應它所看到的內容的最終用户之間，這並不太依賴於結構化的響應。但是，API 請求會在兩台計算機之間進行"),a("em",null,"結構化"),s("調用，人並不是該流程內的一部分，像 HTTPie 這樣的命令列工具的參數可以有效地處理這個問題。")],-1)),n[43]||(n[43]=a("h3",{id:"安裝-httpie",tabindex:"-1"},[s("安裝 HTTPie "),a("a",{class:"header-anchor",href:"#安裝-httpie","aria-label":"Permalink to “安裝 HTTPie”"},"​")],-1)),a("p",null,[n[13]||(n[13]=s("有幾種方法可以安裝 HTTPie。你可以通過包管理器安裝，無論你使用的是 ",-1)),n[14]||(n[14]=a("code",null,"brew",-1)),n[15]||(n[15]=s("、",-1)),n[16]||(n[16]=a("code",null,"apt",-1)),n[17]||(n[17]=s("、",-1)),n[18]||(n[18]=a("code",null,"yum",-1)),n[19]||(n[19]=s(" 還是 ",-1)),n[20]||(n[20]=a("code",null,"dnf",-1)),n[21]||(n[21]=s("。但是，如果你已配置 ",-1)),e(p,{href:"https://opensource.com/article/19/6/virtual-environments-python-macos"},{default:t(()=>[...n[12]||(n[12]=[s("virtualenvwrapper",-1)])]),_:1}),n[22]||(n[22]=s("，那麼你可以用自己的方式安裝：",-1))]),n[44]||(n[44]=c(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkvirtualenv httpie</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>(httpie) $ pip install httpie</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>(httpie) $ deactivate</span></span>
<span class="line"><span>$ alias http=~/.virtualenvs/httpie/bin/http</span></span>
<span class="line"><span>$ http -b GET https://httpbin.org/get</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;args&quot;: {},</span></span>
<span class="line"><span>    &quot;headers&quot;: {</span></span>
<span class="line"><span>        &quot;Accept&quot;: &quot;*/*&quot;,</span></span>
<span class="line"><span>        &quot;Accept-Encoding&quot;: &quot;gzip, deflate&quot;,</span></span>
<span class="line"><span>        &quot;Host&quot;: &quot;httpbin.org&quot;,</span></span>
<span class="line"><span>        &quot;User-Agent&quot;: &quot;HTTPie/1.0.2&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;origin&quot;: &quot;104.220.242.210, 104.220.242.210&quot;,</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過將 <code>http</code> 別名指向為虛擬環境中的命令，即使虛擬環境在非活動狀態，你也可以運行它。你可以將 <code>alias</code> 命令放在 <code>.bash_profile</code> 或 <code>.bashrc</code> 中，這樣你就可以使用以下命令升級 HTTPie：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ~/.virtualenvs/httpie/bin/pip install -U pip</span></span></code></pre></div><h3 id="使用-httpie-查詢網站" tabindex="-1">使用 HTTPie 查詢網站 <a class="header-anchor" href="#使用-httpie-查詢網站" aria-label="Permalink to “使用 HTTPie 查詢網站”">​</a></h3><p>HTTPie 可以簡化查詢和測試 API。上面使用了一個選項，<code>-b</code>（即 <code>--body</code>）。沒有它，HTTPie 將默認打印整個響應，包括響應頭：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http GET https://httpbin.org/get</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Encoding: gzip</span></span>
<span class="line"><span>Content-Length: 177</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>Date: Fri, 09 Aug 2019 20:19:47 GMT</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;args&quot;: {},</span></span>
<span class="line"><span>    &quot;headers&quot;: {</span></span>
<span class="line"><span>        &quot;Accept&quot;: &quot;*/*&quot;,</span></span>
<span class="line"><span>        &quot;Accept-Encoding&quot;: &quot;gzip, deflate&quot;,</span></span>
<span class="line"><span>        &quot;Host&quot;: &quot;httpbin.org&quot;,</span></span>
<span class="line"><span>        &quot;User-Agent&quot;: &quot;HTTPie/1.0.2&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;origin&quot;: &quot;104.220.242.210, 104.220.242.210&quot;,</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這在調試 API 服務時非常重要，因為大量信息在響應頭中發送。例如，查看發送的 cookie 通常很重要。httpbin.org 提供了通過 URL 路徑設置 cookie（用於測試目的）的方式。以下設置一個標題為 <code>opensource</code>， 值為 <code>awesome</code> 的 cookie：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http GET https://httpbin.org/cookies/set/opensource/awesome</span></span>
<span class="line"><span>HTTP/1.1 302 FOUND</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Length: 223</span></span>
<span class="line"><span>Content-Type: text/html; charset=utf-8</span></span>
<span class="line"><span>Date: Fri, 09 Aug 2019 20:22:39 GMT</span></span>
<span class="line"><span>Location: /cookies</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>Set-Cookie: opensource=awesome; Path=/</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 3.2 Final//EN&quot;&gt;</span></span>
<span class="line"><span>&lt;title&gt;Redirecting...&lt;/title&gt;</span></span>
<span class="line"><span>&lt;h1&gt;Redirecting...&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;p&gt;You should be redirected automatically to target URL:</span></span>
<span class="line"><span>&lt;a href=&quot;/cookies&quot;&gt;/cookies&lt;/a&gt;.  If not click the link.</span></span></code></pre></div><p>注意 <code>Set-Cookie: opensource=awesome; Path=/</code> 的響應頭。這表明你預期設置的 cookie 已正確設置，路徑為 <code>/</code>。另請注意，即使你得到了 <code>302</code> 重定向，<code>http</code> 也不會遵循它。如果你想要遵循重定向，則需要明確使用 <code>--follow</code> 標誌請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http --follow GET https://httpbin.org/cookies/set/opensource/awesome</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Encoding: gzip</span></span>
<span class="line"><span>Content-Length: 66</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>Date: Sat, 10 Aug 2019 01:33:34 GMT</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;cookies&quot;: {</span></span>
<span class="line"><span>        &quot;opensource&quot;: &quot;awesome&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但此時你無法看到原來的 <code>Set-Cookie</code> 頭。為了看到中間響應，你需要使用 <code>--all</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http --headers --all --follow GET https://httpbin.org/cookies/set/opensource/awesome</span></span>
<span class="line"><span>HTTP/1.1 302 FOUND</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Content-Type: text/html; charset=utf-8</span></span>
<span class="line"><span>Date: Sat, 10 Aug 2019 01:38:40 GMT</span></span>
<span class="line"><span>Location: /cookies</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>Set-Cookie: opensource=awesome; Path=/</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span>Content-Length: 223</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Content-Encoding: gzip</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>Date: Sat, 10 Aug 2019 01:38:41 GMT</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span>Content-Length: 66</span></span>
<span class="line"><span>Connection: keep-alive</span></span></code></pre></div><p>打印響應體並不有趣，因為你大多數時候只關心 cookie。如果你想看到中間請求的響應頭，而不是最終請求中的響應體，你可以使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http --print hb --history-print h --all --follow GET https://httpbin.org/cookies/set/opensource/awesome</span></span>
<span class="line"><span>HTTP/1.1 302 FOUND</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Content-Type: text/html; charset=utf-8</span></span>
<span class="line"><span>Date: Sat, 10 Aug 2019 01:40:56 GMT</span></span>
<span class="line"><span>Location: /cookies</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>Set-Cookie: opensource=awesome; Path=/</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span>Content-Length: 223</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Content-Encoding: gzip</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>Date: Sat, 10 Aug 2019 01:40:56 GMT</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span>Content-Length: 66</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;cookies&quot;: {</span></span>
<span class="line"><span>    &quot;opensource&quot;: &quot;awesome&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以使用 <code>--print</code> 精確控制打印的內容（<code>h</code>：響應頭；<code>b</code>：響應體），並使用 <code>--history-print</code> 覆蓋中間請求的打印內容設置。</p><h3 id="使用-httpie-下載二進制文件" tabindex="-1">使用 HTTPie 下載二進制文件 <a class="header-anchor" href="#使用-httpie-下載二進制文件" aria-label="Permalink to “使用 HTTPie 下載二進制文件”">​</a></h3><p>有時響應體並不是文本形式，它需要發送到可被不同應用打開的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http GET https://httpbin.org/image/jpeg</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Length: 35588</span></span>
<span class="line"><span>Content-Type: image/jpeg</span></span>
<span class="line"><span>Date: Fri, 09 Aug 2019 20:25:49 GMT</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------------------------------------+</span></span>
<span class="line"><span>| NOTE: binary data not shown in terminal |</span></span>
<span class="line"><span>+-----------------------------------------+</span></span></code></pre></div><p>要得到正確的圖片，你需要保存到文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http --download GET https://httpbin.org/image/jpeg</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>Access-Control-Allow-Origin: *</span></span>
<span class="line"><span>Connection: keep-alive</span></span>
<span class="line"><span>Content-Length: 35588</span></span>
<span class="line"><span>Content-Type: image/jpeg</span></span>
<span class="line"><span>Date: Fri, 09 Aug 2019 20:28:13 GMT</span></span>
<span class="line"><span>Referrer-Policy: no-referrer-when-downgrade</span></span>
<span class="line"><span>Server: nginx</span></span>
<span class="line"><span>X-Content-Type-Options: nosniff</span></span>
<span class="line"><span>X-Frame-Options: DENY</span></span>
<span class="line"><span>X-XSS-Protection: 1; mode=block</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Downloading 34.75 kB to &quot;jpeg.jpe&quot;</span></span>
<span class="line"><span>Done. 34.75 kB in 0.00068s (50.05 MB/s)</span></span></code></pre></div><p>試一下！圖片很可愛。</p><h3 id="使用-httpie-發送自定義請求" tabindex="-1">使用 HTTPie 發送自定義請求 <a class="header-anchor" href="#使用-httpie-發送自定義請求" aria-label="Permalink to “使用 HTTPie 發送自定義請求”">​</a></h3><p>你可以發送指定的請求頭。這對於需要非標準頭的自定義 Web API 很有用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http GET https://httpbin.org/headers X-Open-Source-Com:Awesome</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;headers&quot;: {</span></span>
<span class="line"><span>    &quot;Accept&quot;: &quot;*/*&quot;,</span></span>
<span class="line"><span>    &quot;Accept-Encoding&quot;: &quot;gzip, deflate&quot;,</span></span>
<span class="line"><span>    &quot;Host&quot;: &quot;httpbin.org&quot;,</span></span>
<span class="line"><span>    &quot;User-Agent&quot;: &quot;HTTPie/1.0.2&quot;,</span></span>
<span class="line"><span>    &quot;X-Open-Source-Com&quot;: &quot;Awesome&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最後，如果要發送 JSON 字段（儘管可以指定確切的內容），對於許多嵌套較少的輸入，你可以使用快捷方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ http --body PUT https://httpbin.org/anything open-source=awesome author=moshez</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;args&quot;: {},</span></span>
<span class="line"><span>  &quot;data&quot;: &quot;{\\&quot;open-source\\&quot;: \\&quot;awesome\\&quot;, \\&quot;author\\&quot;: \\&quot;moshez\\&quot;}&quot;,</span></span>
<span class="line"><span>  &quot;files&quot;: {},</span></span>
<span class="line"><span>  &quot;form&quot;: {},</span></span>
<span class="line"><span>  &quot;headers&quot;: {</span></span>
<span class="line"><span>    &quot;Accept&quot;: &quot;application/json, */*&quot;,</span></span>
<span class="line"><span>    &quot;Accept-Encoding&quot;: &quot;gzip, deflate&quot;,</span></span>
<span class="line"><span>    &quot;Content-Length&quot;: &quot;46&quot;,</span></span>
<span class="line"><span>    &quot;Content-Type&quot;: &quot;application/json&quot;,</span></span>
<span class="line"><span>    &quot;Host&quot;: &quot;httpbin.org&quot;,</span></span>
<span class="line"><span>    &quot;User-Agent&quot;: &quot;HTTPie/1.0.2&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;json&quot;: {</span></span>
<span class="line"><span>    &quot;author&quot;: &quot;moshez&quot;,</span></span>
<span class="line"><span>    &quot;open-source&quot;: &quot;awesome&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;method&quot;: &quot;PUT&quot;,</span></span>
<span class="line"><span>  &quot;origin&quot;: &quot;73.162.254.113, 73.162.254.113&quot;,</span></span>
<span class="line"><span>  &quot;url&quot;: &quot;https://httpbin.org/anything&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下次在調試 Web API 時，無論是你自己的還是別人的，記得放下 cURL，試試 HTTPie 這個命令列工具。</p><hr>`,28)),a("p",null,[n[24]||(n[24]=s("via: ",-1)),e(p,{href:"https://opensource.com/article/19/8/getting-started-httpie"},{default:t(()=>[...n[23]||(n[23]=[s("https://opensource.com/article/19/8/getting-started-httpie",-1)])]),_:1})]),a("p",null,[n[29]||(n[29]=s("作者：",-1)),e(p,{href:"https://opensource.com/users/moshezhttps://opensource.com/users/mkalindepauleduhttps://opensource.com/users/jamesf"},{default:t(()=>[...n[25]||(n[25]=[s("Moshe Zadka",-1)])]),_:1}),n[30]||(n[30]=s(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:t(()=>[...n[26]||(n[26]=[s("lujun9972",-1)])]),_:1}),n[31]||(n[31]=s(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:t(()=>[...n[27]||(n[27]=[s("geekpi",-1)])]),_:1}),n[32]||(n[32]=s(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:t(()=>[...n[28]||(n[28]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[35]||(n[35]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...n[33]||(n[33]=[s("LCTT",-1)])]),_:1}),n[36]||(n[36]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:t(()=>[...n[34]||(n[34]=[s("Linux中國",-1)])]),_:1}),n[37]||(n[37]=s(" 榮譽推出",-1))])])}const m=i(u,[["render",d]]);export{C as __pageData,m as default};
