import{_ as i,a0 as o,w as r,s as d,ao as t,I as a,x as n,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"JavaScript 路由器 | LCTT x X-CMD","titleTemplate":false,"description":"JavaScript 路由器 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JavaScript 路由器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JavaScript 路由器 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180425 JavaScript Router","title":"JavaScript 路由器","tag":"201807","desc":""},"relativePath":"201807/20180425 JavaScript Router.md","filePath":"[post].md"}'),c={name:"201807/20180425 JavaScript Router.md"};function u(g,s,h,m,f,k){const p=o("Link");return r(),d("div",null,[s[35]||(s[35]=t(`<h1 id="javascript-路由器" tabindex="-1">JavaScript 路由器 <a class="header-anchor" href="#javascript-路由器" aria-label="Permalink to “JavaScript 路由器”">​</a></h1><p>構建單頁面應用（SPA）有許多的框架/庫，但是我希望它們能少一些。我有一個解決方案，我想共享給大家。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Router {</span></span>
<span class="line"><span>    constructor() {</span></span>
<span class="line"><span>        this.routes = []</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    handle(pattern, handler) {</span></span>
<span class="line"><span>        this.routes.push({ pattern, handler })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    exec(pathname) {</span></span>
<span class="line"><span>        for (const route of this.routes) {</span></span>
<span class="line"><span>            if (typeof route.pattern === &#39;string&#39;) {</span></span>
<span class="line"><span>                if (route.pattern === pathname) {</span></span>
<span class="line"><span>                    return route.handler()</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            } else if (route.pattern instanceof RegExp) {</span></span>
<span class="line"><span>                const result = pathname.match(route.pattern)</span></span>
<span class="line"><span>                if (result !== null) {</span></span>
<span class="line"><span>                    const params = result.slice(1).map(decodeURIComponent)</span></span>
<span class="line"><span>                    return route.handler(...params)</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const router = new Router()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.handle(&#39;/&#39;, homePage)</span></span>
<span class="line"><span>router.handle(/^\\/users\\/([^\\/]+)$/, userPage)</span></span>
<span class="line"><span>router.handle(/^\\//, notFoundPage)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function homePage() {</span></span>
<span class="line"><span>    return &#39;home page&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function userPage(username) {</span></span>
<span class="line"><span>    return \`\${username}&#39;s page\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function notFoundPage() {</span></span>
<span class="line"><span>    return &#39;not found page&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(router.exec(&#39;/&#39;)) // home page</span></span>
<span class="line"><span>console.log(router.exec(&#39;/users/john&#39;)) // john&#39;s page</span></span>
<span class="line"><span>console.log(router.exec(&#39;/foo&#39;)) // not found page</span></span></code></pre></div><p>使用它你可以為一個 URL 模式添加處理程序。這個模式可能是一個簡單的字符串或一個正則表達式。使用一個字符串將精確匹配它，但是如果使用一個正則表達式將允許你做一些更復雜的事情，比如，從用户頁面上看到的 URL 中獲取其中的一部分，或者匹配任何沒有找到頁面的 URL。</p><p>我將詳細解釋這個 <code>exec</code> 方法 … 正如我前面説的，URL 模式既有可能是一個字符串，也有可能是一個正則表達式，因此，我首先來檢查它是否是一個字符串。如果模式與給定的路徑名相同，它返回運行處理程序。如果是一個正則表達式，我們與給定的路徑名進行匹配。如果匹配成功，它將獲取的參數傳遞給處理程序，並返回運行這個處理程序。</p><h3 id="工作示例" tabindex="-1">工作示例 <a class="header-anchor" href="#工作示例" aria-label="Permalink to “工作示例”">​</a></h3><p>那個例子正好記錄到了控制台。我們嘗試將它整合到一個頁面，看看它是什麼樣的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span> &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span> &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span> &lt;title&gt;Router Demo&lt;/title&gt;</span></span>
<span class="line"><span> &lt;link rel=&quot;shortcut icon&quot; href=&quot;data:,&quot;&gt;</span></span>
<span class="line"><span> &lt;script src=&quot;/main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span> &lt;header&gt;</span></span>
<span class="line"><span> &lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;</span></span>
<span class="line"><span> &lt;a href=&quot;/users/john_doe&quot;&gt;Profile&lt;/a&gt;</span></span>
<span class="line"><span> &lt;/header&gt;</span></span>
<span class="line"><span> &lt;main&gt;&lt;/main&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,8)),a("p",null,[s[1]||(s[1]=n("這是 ",-1)),s[2]||(s[2]=a("code",null,"index.html",-1)),s[3]||(s[3]=n("。對於單頁面應用程序來説，你必須在服務器側做一個特別的工作，因為所有未知的路徑都將返回這個 ",-1)),s[4]||(s[4]=a("code",null,"index.html",-1)),s[5]||(s[5]=n("。在開發時，我們使用了一個 npm 工具調用了 ",-1)),e(p,{href:"https://npm.im/serve"},{default:l(()=>[...s[0]||(s[0]=[n("serve",-1)])]),_:1}),s[6]||(s[6]=n("。這個工具去提供靜態內容。使用標誌 ",-1)),s[7]||(s[7]=a("code",null,"-s",-1)),s[8]||(s[8]=n("/",-1)),s[9]||(s[9]=a("code",null,"--single",-1)),s[10]||(s[10]=n("，你可以提供單頁面應用程序。",-1))]),a("p",null,[s[12]||(s[12]=n("使用 ",-1)),e(p,{href:"https://nodejs.org/"},{default:l(()=>[...s[11]||(s[11]=[n("Node.js",-1)])]),_:1}),s[13]||(s[13]=n(" 和安裝的 npm（它與 Node 一起安裝），運行：",-1))]),s[36]||(s[36]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i -g serve</span></span>
<span class="line"><span>serve -s</span></span></code></pre></div><p>那個 HTML 文件將腳本 <code>main.js</code> 加載為一個模組。在我們渲染的相關頁面中，它有一個簡單的 <code>&lt;header&gt;</code> 和一個 <code>&lt;main&gt;</code> 元素。</p><p>在 <code>main.js</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const main = document.querySelector(&#39;main&#39;)</span></span>
<span class="line"><span>const result = router.exec(location.pathname)</span></span>
<span class="line"><span>main.innerHTML = result</span></span></code></pre></div><p>我們調用傳遞了當前路徑名為參數的 <code>router.exec()</code>，然後將 <code>result</code> 設置為 <code>main</code> 元素的 HTML。</p><p>如果你訪問 <code>localhost</code> 並運行它，你將看到它能夠正常工作，但不是預期中的來自一個單頁面應用程序。當你點擊鏈接時，單頁面應用程序將不會被刷新。</p>`,6)),a("p",null,[s[15]||(s[15]=n("我們將在每個點擊的鏈接的錨點上附加事件監聽器，防止出現缺省行為，並做出正確的渲染。因為一個單頁面應用程序是一個動態的東西，你預期要創建的錨點鏈接是動態的，因此要添加事件監聽器，我使用的是一個叫 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation"},{default:l(()=>[...s[14]||(s[14]=[n("事件委託",-1)])]),_:1}),s[16]||(s[16]=n(" 的方法。",-1))]),s[37]||(s[37]=t(`<p>我給整個文檔附加一個點擊事件監聽器，然後去檢查在錨點上（或內部）是否有點擊事件。</p><p>在 <code>Router</code> 類中，我有一個註冊回調的方法，在我們每次點擊一個鏈接或者一個 <code>popstate</code> 事件發生時，這個方法將被運行。每次你使用瀏覽器的返回或者前進按鈕時，<code>popstate</code> 事件將被髮送。</p><p>為了方便其見，我們給回調傳遞與 <code>router.exec(location.pathname)</code> 相同的參數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Router {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    install(callback) {</span></span>
<span class="line"><span>        const execCallback = () =&gt; {</span></span>
<span class="line"><span>            callback(this.exec(location.pathname))</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        document.addEventListener(&#39;click&#39;, ev =&gt; {</span></span>
<span class="line"><span>            if (ev.defaultPrevented</span></span>
<span class="line"><span>                || ev.button !== 0</span></span>
<span class="line"><span>                || ev.ctrlKey</span></span>
<span class="line"><span>                || ev.shiftKey</span></span>
<span class="line"><span>                || ev.altKey</span></span>
<span class="line"><span>                || ev.metaKey) {</span></span>
<span class="line"><span>                return</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            const a = ev.target.closest(&#39;a&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (a === null</span></span>
<span class="line"><span>                || (a.target !== &#39;&#39; &amp;&amp; a.target !== &#39;_self&#39;)</span></span>
<span class="line"><span>                || a.hostname !== location.hostname) {</span></span>
<span class="line"><span>                return</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ev.preventDefault()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (a.href !== location.href) {</span></span>
<span class="line"><span>                history.pushState(history.state, document.title, a.href)</span></span>
<span class="line"><span>                execCallback()</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        addEventListener(&#39;popstate&#39;, execCallback)</span></span>
<span class="line"><span>        execCallback()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>對於鏈接的點擊事件，除調用了回調之外，我們還使用 <code>history.pushState()</code> 去更新 URL。</p><p>我們將前面的 <code>main</code> 元素中的渲染移動到 <code>install</code> 回調中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.install(result =&gt; {</span></span>
<span class="line"><span> main.innerHTML = result</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to “DOM”">​</a></h4><p>你傳遞給路由器的這些處理程序並不需要返回一個字符串。如果你需要更多的東西，你可以返回實際的 DOM。如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const homeTmpl = document.createElement(&#39;template&#39;)</span></span>
<span class="line"><span>homeTmpl.innerHTML = \`</span></span>
<span class="line"><span> &lt;div class=&quot;container&quot;&gt;</span></span>
<span class="line"><span> &lt;h1&gt;Home Page&lt;/h1&gt;</span></span>
<span class="line"><span> &lt;/div&gt;</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function homePage() {</span></span>
<span class="line"><span> const page = homeTmpl.content.cloneNode(true)</span></span>
<span class="line"><span> // You can do \`page.querySelector()\` here...</span></span>
<span class="line"><span> return page</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在，在 <code>install</code> 回調中，你可以去檢查 <code>result</code> 是一個 <code>string</code> 還是一個 <code>Node</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.install(result =&gt; {</span></span>
<span class="line"><span>    if (typeof result === &#39;string&#39;) {</span></span>
<span class="line"><span>        main.innerHTML = result</span></span>
<span class="line"><span>    } else if (result instanceof Node) {</span></span>
<span class="line"><span>        main.innerHTML = &#39;&#39;</span></span>
<span class="line"><span>        main.appendChild(result)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>這些就是基本的功能。我希望將它共享出來，因為我將在下篇文章中使用到這個路由器。</p>`,13)),a("p",null,[s[18]||(s[18]=n("我已經以一個 ",-1)),e(p,{href:"https://www.npmjs.com/package/@nicolasparada/router"},{default:l(()=>[...s[17]||(s[17]=[n("npm 包",-1)])]),_:1}),s[19]||(s[19]=n(" 的形式將它發佈了。",-1))]),s[38]||(s[38]=a("hr",null,null,-1)),a("p",null,[s[21]||(s[21]=n("via: ",-1)),e(p,{href:"https://nicolasparada.netlify.com/posts/js-router/"},{default:l(()=>[...s[20]||(s[20]=[n("https://nicolasparada.netlify.com/posts/js-router/",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("作者：",-1)),e(p,{href:"https://nicolasparada.netlify.com/"},{default:l(()=>[...s[22]||(s[22]=[n("Nicolás Parada",-1)])]),_:1}),s[27]||(s[27]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[23]||(s[23]=[n("lujun9972",-1)])]),_:1}),s[28]||(s[28]=n(" 譯者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[24]||(s[24]=[n("qhwdw",-1)])]),_:1}),s[29]||(s[29]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[30]||(s[30]=[n("LCTT",-1)])]),_:1}),s[33]||(s[33]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[31]||(s[31]=[n("Linux中國",-1)])]),_:1}),s[34]||(s[34]=n(" 榮譽推出",-1))])])}const y=i(c,[["render",u]]);export{T as __pageData,y as default};
