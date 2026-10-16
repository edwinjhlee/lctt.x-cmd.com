import{_ as i,a0 as o,w as r,s as d,ao as t,I as a,x as n,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"JavaScript 路由器 | LCTT x X-CMD","titleTemplate":false,"description":"JavaScript 路由器 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"JavaScript 路由器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"JavaScript 路由器 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180425 JavaScript Router","title":"JavaScript 路由器","tag":"201807","desc":""},"relativePath":"201807/20180425 JavaScript Router.md","filePath":"[post].md"}'),c={name:"201807/20180425 JavaScript Router.md"};function u(g,s,h,m,f,k){const p=o("Link");return r(),d("div",null,[s[35]||(s[35]=t(`<h1 id="javascript-路由器" tabindex="-1">JavaScript 路由器 <a class="header-anchor" href="#javascript-路由器" aria-label="Permalink to “JavaScript 路由器”">​</a></h1><p>构建单页面应用（SPA）有许多的框架/库，但是我希望它们能少一些。我有一个解决方案，我想共享给大家。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Router {</span></span>
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
<span class="line"><span>console.log(router.exec(&#39;/foo&#39;)) // not found page</span></span></code></pre></div><p>使用它你可以为一个 URL 模式添加处理程序。这个模式可能是一个简单的字符串或一个正则表达式。使用一个字符串将精确匹配它，但是如果使用一个正则表达式将允许你做一些更复杂的事情，比如，从用户页面上看到的 URL 中获取其中的一部分，或者匹配任何没有找到页面的 URL。</p><p>我将详细解释这个 <code>exec</code> 方法 … 正如我前面说的，URL 模式既有可能是一个字符串，也有可能是一个正则表达式，因此，我首先来检查它是否是一个字符串。如果模式与给定的路径名相同，它返回运行处理程序。如果是一个正则表达式，我们与给定的路径名进行匹配。如果匹配成功，它将获取的参数传递给处理程序，并返回运行这个处理程序。</p><h3 id="工作示例" tabindex="-1">工作示例 <a class="header-anchor" href="#工作示例" aria-label="Permalink to “工作示例”">​</a></h3><p>那个例子正好记录到了控制台。我们尝试将它整合到一个页面，看看它是什么样的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
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
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,8)),a("p",null,[s[1]||(s[1]=n("这是 ",-1)),s[2]||(s[2]=a("code",null,"index.html",-1)),s[3]||(s[3]=n("。对于单页面应用程序来说，你必须在服务器侧做一个特别的工作，因为所有未知的路径都将返回这个 ",-1)),s[4]||(s[4]=a("code",null,"index.html",-1)),s[5]||(s[5]=n("。在开发时，我们使用了一个 npm 工具调用了 ",-1)),e(p,{href:"https://npm.im/serve"},{default:l(()=>[...s[0]||(s[0]=[n("serve",-1)])]),_:1}),s[6]||(s[6]=n("。这个工具去提供静态内容。使用标志 ",-1)),s[7]||(s[7]=a("code",null,"-s",-1)),s[8]||(s[8]=n("/",-1)),s[9]||(s[9]=a("code",null,"--single",-1)),s[10]||(s[10]=n("，你可以提供单页面应用程序。",-1))]),a("p",null,[s[12]||(s[12]=n("使用 ",-1)),e(p,{href:"https://nodejs.org/"},{default:l(()=>[...s[11]||(s[11]=[n("Node.js",-1)])]),_:1}),s[13]||(s[13]=n(" 和安装的 npm（它与 Node 一起安装），运行：",-1))]),s[36]||(s[36]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm i -g serve</span></span>
<span class="line"><span>serve -s</span></span></code></pre></div><p>那个 HTML 文件将脚本 <code>main.js</code> 加载为一个模块。在我们渲染的相关页面中，它有一个简单的 <code>&lt;header&gt;</code> 和一个 <code>&lt;main&gt;</code> 元素。</p><p>在 <code>main.js</code> 文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const main = document.querySelector(&#39;main&#39;)</span></span>
<span class="line"><span>const result = router.exec(location.pathname)</span></span>
<span class="line"><span>main.innerHTML = result</span></span></code></pre></div><p>我们调用传递了当前路径名为参数的 <code>router.exec()</code>，然后将 <code>result</code> 设置为 <code>main</code> 元素的 HTML。</p><p>如果你访问 <code>localhost</code> 并运行它，你将看到它能够正常工作，但不是预期中的来自一个单页面应用程序。当你点击链接时，单页面应用程序将不会被刷新。</p>`,6)),a("p",null,[s[15]||(s[15]=n("我们将在每个点击的链接的锚点上附加事件监听器，防止出现缺省行为，并做出正确的渲染。因为一个单页面应用程序是一个动态的东西，你预期要创建的锚点链接是动态的，因此要添加事件监听器，我使用的是一个叫 ",-1)),e(p,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation"},{default:l(()=>[...s[14]||(s[14]=[n("事件委托",-1)])]),_:1}),s[16]||(s[16]=n(" 的方法。",-1))]),s[37]||(s[37]=t(`<p>我给整个文档附加一个点击事件监听器，然后去检查在锚点上（或内部）是否有点击事件。</p><p>在 <code>Router</code> 类中，我有一个注册回调的方法，在我们每次点击一个链接或者一个 <code>popstate</code> 事件发生时，这个方法将被运行。每次你使用浏览器的返回或者前进按钮时，<code>popstate</code> 事件将被发送。</p><p>为了方便其见，我们给回调传递与 <code>router.exec(location.pathname)</code> 相同的参数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Router {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>对于链接的点击事件，除调用了回调之外，我们还使用 <code>history.pushState()</code> 去更新 URL。</p><p>我们将前面的 <code>main</code> 元素中的渲染移动到 <code>install</code> 回调中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.install(result =&gt; {</span></span>
<span class="line"><span> main.innerHTML = result</span></span>
<span class="line"><span>})</span></span></code></pre></div><h4 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to “DOM”">​</a></h4><p>你传递给路由器的这些处理程序并不需要返回一个字符串。如果你需要更多的东西，你可以返回实际的 DOM。如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const homeTmpl = document.createElement(&#39;template&#39;)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>现在，在 <code>install</code> 回调中，你可以去检查 <code>result</code> 是一个 <code>string</code> 还是一个 <code>Node</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.install(result =&gt; {</span></span>
<span class="line"><span>    if (typeof result === &#39;string&#39;) {</span></span>
<span class="line"><span>        main.innerHTML = result</span></span>
<span class="line"><span>    } else if (result instanceof Node) {</span></span>
<span class="line"><span>        main.innerHTML = &#39;&#39;</span></span>
<span class="line"><span>        main.appendChild(result)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>这些就是基本的功能。我希望将它共享出来，因为我将在下篇文章中使用到这个路由器。</p>`,13)),a("p",null,[s[18]||(s[18]=n("我已经以一个 ",-1)),e(p,{href:"https://www.npmjs.com/package/@nicolasparada/router"},{default:l(()=>[...s[17]||(s[17]=[n("npm 包",-1)])]),_:1}),s[19]||(s[19]=n(" 的形式将它发布了。",-1))]),s[38]||(s[38]=a("hr",null,null,-1)),a("p",null,[s[21]||(s[21]=n("via: ",-1)),e(p,{href:"https://nicolasparada.netlify.com/posts/js-router/"},{default:l(()=>[...s[20]||(s[20]=[n("https://nicolasparada.netlify.com/posts/js-router/",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("作者：",-1)),e(p,{href:"https://nicolasparada.netlify.com/"},{default:l(()=>[...s[22]||(s[22]=[n("Nicolás Parada",-1)])]),_:1}),s[27]||(s[27]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[23]||(s[23]=[n("lujun9972",-1)])]),_:1}),s[28]||(s[28]=n(" 译者：",-1)),e(p,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[24]||(s[24]=[n("qhwdw",-1)])]),_:1}),s[29]||(s[29]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[32]||(s[32]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[30]||(s[30]=[n("LCTT",-1)])]),_:1}),s[33]||(s[33]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[31]||(s[31]=[n("Linux中国",-1)])]),_:1}),s[34]||(s[34]=n(" 荣誉推出",-1))])])}const y=i(c,[["render",u]]);export{T as __pageData,y as default};
