import{_ as i,a0 as o,w as c,s as r,I as l,x as n,a1 as p,A as e,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"無密碼驗證：客户端 | LCTT x X-CMD","titleTemplate":false,"description":"無密碼驗證：客户端 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"無密碼驗證：客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"無密碼驗證：客户端 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180429 Passwordless Auth- Client","title":"無密碼驗證：客户端","tag":"201807","desc":""},"relativePath":"201807/20180429 Passwordless Auth- Client.md","filePath":"[post].md"}'),d={name:"201807/20180429 Passwordless Auth- Client.md"};function u(h,s,g,m,f,b){const a=o("Link");return c(),r("div",null,[s[32]||(s[32]=l("h1",{id:"無密碼驗證-客户端",tabindex:"-1"},[n("無密碼驗證：客户端 "),l("a",{class:"header-anchor",href:"#無密碼驗證-客户端","aria-label":"Permalink to “無密碼驗證：客户端”"},"​")],-1)),l("p",null,[s[1]||(s[1]=n("我們繼續 ",-1)),p(a,{href:"https://linux.cn/article-9748-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("無密碼驗證",-1)])]),_:1}),s[2]||(s[2]=n(" 的文章。上一篇文章中，我們用 Go 寫了一個 HTTP 服務，用這個服務來做無密碼驗證 API。今天，我們為它再寫一個 JavaScript 客户端。",-1))]),l("p",null,[s[4]||(s[4]=n("我們將使用 ",-1)),p(a,{href:"https://linux.cn/article-9815-1.html"},{default:e(()=>[...s[3]||(s[3]=[n("這裏的",-1)])]),_:1}),s[5]||(s[5]=n(" 這個單頁面應用程序（SPA）來展示使用的技術。如果你還沒有讀過它，請先讀它。",-1))]),s[33]||(s[33]=t(`<p>記住流程：</p><ul><li>用户輸入其 email。</li><li>用户收到一個帶有魔法鏈接的郵件。</li><li>用户點擊該鏈接、</li><li>用户驗證成功。</li></ul><p>對於根 URL（<code>/</code>），我們將根據驗證的狀態分別使用兩個不同的頁面：一個是帶有訪問表單的頁面，或者是已驗證通過的用户的歡迎頁面。另一個頁面是驗證回調的重定向頁面。</p><h3 id="伺服" tabindex="-1">伺服 <a class="header-anchor" href="#伺服" aria-label="Permalink to “伺服”">​</a></h3><p>我們將使用相同的 Go 服務器來為客户端提供服務，因此，在我們前面的 <code>main.go</code> 中添加一些路由：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.Handle(&quot;GET&quot;, &quot;/...&quot;, http.FileServer(SPAFileSystem{http.Dir(&quot;static&quot;)}))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type SPAFileSystem struct {</span></span>
<span class="line"><span>	fs http.FileSystem</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (spa SPAFileSystem) Open(name string) (http.File, error) {</span></span>
<span class="line"><span>	f, err := spa.fs.Open(name)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		return spa.fs.Open(&quot;index.html&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個伺服文件放在 <code>static</code> 下，配合 <code>static/index.html</code> 作為回調。</p>`,8)),l("p",null,[s[7]||(s[7]=n("你可以使用你自己的服務器，但是你得在服務器上啓用 ",-1)),p(a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},{default:e(()=>[...s[6]||(s[6]=[n("CORS",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[34]||(s[34]=t(`<h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to “HTML”">​</a></h3><p>我們來看一下那個 <code>static/index.html</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span> &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span> &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span> &lt;title&gt;Passwordless Demo&lt;/title&gt;</span></span>
<span class="line"><span> &lt;link rel=&quot;shortcut icon&quot; href=&quot;data:,&quot;&gt;</span></span>
<span class="line"><span> &lt;script src=&quot;/js/main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>單頁面應用程序的所有渲染由 JavaScript 來完成，因此，我們使用了一個空的 body 部分和一個 <code>main.js</code> 文件。</p>`,4)),l("p",null,[s[10]||(s[10]=n("我們將使用 ",-1)),p(a,{href:"https://linux.cn/article-9815-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("上篇文章",-1)])]),_:1}),s[11]||(s[11]=n(" 中的 Router。",-1))]),s[35]||(s[35]=t(`<h3 id="渲染" tabindex="-1">渲染 <a class="header-anchor" href="#渲染" aria-label="Permalink to “渲染”">​</a></h3><p>現在，我們使用下面的內容來創建一個 <code>static/js/main.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import Router from &#39;https://unpkg.com/@nicolasparada/router&#39;</span></span>
<span class="line"><span>import { isAuthenticated } from &#39;./auth.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = new Router()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.handle(&#39;/&#39;, guard(view(&#39;home&#39;)))</span></span>
<span class="line"><span>router.handle(&#39;/callback&#39;, view(&#39;callback&#39;))</span></span>
<span class="line"><span>router.handle(/^\\//, view(&#39;not-found&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.install(async resultPromise =&gt; {</span></span>
<span class="line"><span>    document.body.innerHTML = &#39;&#39;</span></span>
<span class="line"><span>    document.body.appendChild(await resultPromise)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function view(name) {</span></span>
<span class="line"><span>    return (...args) =&gt; import(\`/js/pages/\${name}-page.js\`)</span></span>
<span class="line"><span>        .then(m =&gt; m.default(...args))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function guard(fn1, fn2 = view(&#39;welcome&#39;)) {</span></span>
<span class="line"><span>    return (...args) =&gt; isAuthenticated()</span></span>
<span class="line"><span>        ? fn1(...args)</span></span>
<span class="line"><span>        : fn2(...args)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>與上篇文章不同的是，我們實現了一個 <code>isAuthenticated()</code> 函數和一個 <code>guard()</code> 函數，使用它去渲染兩種驗證狀態的頁面。因此，當用户訪問 <code>/</code> 時，它將根據用户是否通過了驗證來展示主頁或者是歡迎頁面。</p><h3 id="驗證" tabindex="-1">驗證 <a class="header-anchor" href="#驗證" aria-label="Permalink to “驗證”">​</a></h3><p>現在，我們來編寫 <code>isAuthenticated()</code> 函數。使用下面的內容來創建一個 <code>static/js/auth.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>export function getAuthUser() {</span></span>
<span class="line"><span>    const authUserItem = localStorage.getItem(&#39;auth_user&#39;)</span></span>
<span class="line"><span>    const expiresAtItem = localStorage.getItem(&#39;expires_at&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (authUserItem !== null &amp;&amp; expiresAtItem !== null) {</span></span>
<span class="line"><span>        const expiresAt = new Date(expiresAtItem)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!isNaN(expiresAt.valueOf()) &amp;&amp; expiresAt &gt; new Date()) {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                return JSON.parse(authUserItem)</span></span>
<span class="line"><span>            } catch (_) { }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return null</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function isAuthenticated() {</span></span>
<span class="line"><span>    return localStorage.getItem(&#39;jwt&#39;) !== null &amp;&amp; getAuthUser() !== null</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>當有人登入時，我們將保存 JSON 格式的 web 令牌、它的過期日期，以及在 <code>localStorage</code> 上的當前已驗證用户。這個模組就是這個用處。</p><ul><li><code>getAuthUser()</code> 用於從 <code>localStorage</code> 獲取已認證的用户，以確認 JSON 格式的 Web 令牌沒有過期。</li><li><code>isAuthenticated()</code> 在前面的函數中用於去檢查它是否沒有返回 <code>null</code>。</li></ul><h3 id="獲取" tabindex="-1">獲取 <a class="header-anchor" href="#獲取" aria-label="Permalink to “獲取”">​</a></h3><p>在繼續這個頁面之前，我將寫一些與服務器 API 一起使用的 HTTP 工具。</p><p>我們使用以下的內容去創建一個 <code>static/js/http.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { isAuthenticated } from &#39;./auth.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function get(url, headers) {</span></span>
<span class="line"><span>    return fetch(url, {</span></span>
<span class="line"><span>        headers: Object.assign(getAuthHeader(), headers),</span></span>
<span class="line"><span>    }).then(handleResponse)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function post(url, body, headers) {</span></span>
<span class="line"><span>    return fetch(url, {</span></span>
<span class="line"><span>        method: &#39;POST&#39;,</span></span>
<span class="line"><span>        headers: Object.assign(getAuthHeader(), { &#39;content-type&#39;: &#39;application/json&#39; }, headers),</span></span>
<span class="line"><span>        body: JSON.stringify(body),</span></span>
<span class="line"><span>    }).then(handleResponse)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getAuthHeader() {</span></span>
<span class="line"><span>    return isAuthenticated()</span></span>
<span class="line"><span>        ? { authorization: \`Bearer \${localStorage.getItem(&#39;jwt&#39;)}\` }</span></span>
<span class="line"><span>        : {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function handleResponse(res) {</span></span>
<span class="line"><span>    const body = await res.clone().json().catch(() =&gt; res.text())</span></span>
<span class="line"><span>    const response = {</span></span>
<span class="line"><span>        statusCode: res.status,</span></span>
<span class="line"><span>        statusText: res.statusText,</span></span>
<span class="line"><span>        headers: res.headers,</span></span>
<span class="line"><span>        body,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (!res.ok) {</span></span>
<span class="line"><span>        const message = typeof body === &#39;object&#39; &amp;&amp; body !== null &amp;&amp; &#39;message&#39; in body</span></span>
<span class="line"><span>            ? body.message</span></span>
<span class="line"><span>            : typeof body === &#39;string&#39; &amp;&amp; body !== &#39;&#39;</span></span>
<span class="line"><span>                ? body</span></span>
<span class="line"><span>                : res.statusText</span></span>
<span class="line"><span>        const err = new Error(message)</span></span>
<span class="line"><span>        throw Object.assign(err, response)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return response</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    get,</span></span>
<span class="line"><span>    post,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個模組導出了 <code>get()</code> 和 <code>post()</code> 函數。它們是 <code>fetch</code> API 的封裝。當用户是已驗證的，這二個函數注入一個 <code>Authorization: Bearer &lt;token_here&gt;</code> 頭到請求中；這樣服務器就能對我們進行身份驗證。</p><h3 id="歡迎頁" tabindex="-1">歡迎頁 <a class="header-anchor" href="#歡迎頁" aria-label="Permalink to “歡迎頁”">​</a></h3><p>我們現在來到歡迎頁面。用如下的內容創建一個 <code>static/js/pages/welcome-page.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const template = document.createElement(&#39;template&#39;)</span></span>
<span class="line"><span>template.innerHTML = \`</span></span>
<span class="line"><span>    &lt;h1&gt;Passwordless Demo&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;h2&gt;Access&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;form id=&quot;access-form&quot;&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;email&quot; placeholder=&quot;Email&quot; autofocus required&gt;</span></span>
<span class="line"><span>        &lt;button type=&quot;submit&quot;&gt;Send Magic Link&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/form&gt;</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function welcomePage() {</span></span>
<span class="line"><span>    const page = template.content.cloneNode(true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    page.getElementById(&#39;access-form&#39;)</span></span>
<span class="line"><span>        .addEventListener(&#39;submit&#39;, onAccessFormSubmit)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return page</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個頁面使用一個 <code>HTMLTemplateElement</code> 作為視圖。這只是一個輸入用户 email 的簡單表單。</p><p>為了避免干擾，我將跳過錯誤處理部分，只是將它們輸出到控制台上。</p><p>現在，我們來寫 <code>onAccessFormSubmit()</code> 函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import http from &#39;../http.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function onAccessFormSubmit(ev) {</span></span>
<span class="line"><span>    ev.preventDefault()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const form = ev.currentTarget</span></span>
<span class="line"><span>    const input = form.querySelector(&#39;input&#39;)</span></span>
<span class="line"><span>    const email = input.value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendMagicLink(email).catch(err =&gt; {</span></span>
<span class="line"><span>        console.error(err)</span></span>
<span class="line"><span>        if (err.statusCode === 404 &amp;&amp; wantToCreateAccount()) {</span></span>
<span class="line"><span>            runCreateUserProgram(email)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function sendMagicLink(email) {</span></span>
<span class="line"><span>    return http.post(&#39;/api/passwordless/start&#39;, {</span></span>
<span class="line"><span>        email,</span></span>
<span class="line"><span>        redirectUri: location.origin + &#39;/callback&#39;,</span></span>
<span class="line"><span>    }).then(() =&gt; {</span></span>
<span class="line"><span>        alert(&#39;Magic link sent. Go check your email inbox.&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function wantToCreateAccount() {</span></span>
<span class="line"><span>    return prompt(&#39;No user found. Do you want to create an account?&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它對 <code>/api/passwordless/start</code> 發起了 POST 請求，請求體中包含 <code>email</code> 和 <code>redirectUri</code>。在本例中它返回 <code>404 Not Found</code> 狀態碼時，我們將創建一個用户。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function runCreateUserProgram(email) {</span></span>
<span class="line"><span>    const username = prompt(&quot;Enter username&quot;)</span></span>
<span class="line"><span>    if (username === null) return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    http.post(&#39;/api/users&#39;, { email, username })</span></span>
<span class="line"><span>        .then(res =&gt; res.body)</span></span>
<span class="line"><span>        .then(user =&gt; sendMagicLink(user.email))</span></span>
<span class="line"><span>        .catch(console.error)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個用户創建程序，首先詢問用户名，然後使用 email 和用户名做一個 <code>POST</code> 請求到 <code>/api/users</code>。成功之後，給創建的用户發送一個魔法鏈接。</p><h3 id="回調頁" tabindex="-1">回調頁 <a class="header-anchor" href="#回調頁" aria-label="Permalink to “回調頁”">​</a></h3><p>這是訪問表單的全部功能，現在我們來做回調頁面。使用如下的內容來創建一個 <code>static/js/pages/callback-page.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import http from &#39;../http.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const template = document.createElement(&#39;template&#39;)</span></span>
<span class="line"><span>template.innerHTML = \`</span></span>
<span class="line"><span>    &lt;h1&gt;Authenticating you&lt;/h1&gt;</span></span>
<span class="line"><span>\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function callbackPage() {</span></span>
<span class="line"><span>    const page = template.content.cloneNode(true)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const hash = location.hash.substr(1)</span></span>
<span class="line"><span>    const fragment = new URLSearchParams(hash)</span></span>
<span class="line"><span>    for (const [k, v] of fragment.entries()) {</span></span>
<span class="line"><span>        fragment.set(decodeURIComponent(k), decodeURIComponent(v))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const jwt = fragment.get(&#39;jwt&#39;)</span></span>
<span class="line"><span>    const expiresAt = fragment.get(&#39;expires_at&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    http.get(&#39;/api/auth_user&#39;, { authorization: \`Bearer \${jwt}\` })</span></span>
<span class="line"><span>        .then(res =&gt; res.body)</span></span>
<span class="line"><span>        .then(authUser =&gt; {</span></span>
<span class="line"><span>            localStorage.setItem(&#39;jwt&#39;, jwt)</span></span>
<span class="line"><span>            localStorage.setItem(&#39;auth_user&#39;, JSON.stringify(authUser))</span></span>
<span class="line"><span>            localStorage.setItem(&#39;expires_at&#39;, expiresAt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            location.replace(&#39;/&#39;)</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>        .catch(console.error)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return page</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>請記住……當點擊魔法鏈接時，我們會來到 <code>/api/passwordless/verify_redirect</code>，它將把我們重定向到重定向 URI，我們將放在哈希中的 JWT 和過期日期傳遞給 <code>/callback</code>。</p><p>回調頁面解碼 URL 中的哈希，提取這些參數去做一個 <code>GET</code> 請求到 <code>/api/auth_user</code>，用 JWT 保存所有數據到 <code>localStorage</code> 中。最後，重定向到主頁面。</p><h3 id="主頁" tabindex="-1">主頁 <a class="header-anchor" href="#主頁" aria-label="Permalink to “主頁”">​</a></h3><p>創建如下內容的 <code>static/pages/home-page.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { getAuthUser } from &#39;../auth.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function homePage() {</span></span>
<span class="line"><span>    const authUser = getAuthUser()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const template = document.createElement(&#39;template&#39;)</span></span>
<span class="line"><span>    template.innerHTML = \`</span></span>
<span class="line"><span>        &lt;h1&gt;Passwordless Demo&lt;/h1&gt;</span></span>
<span class="line"><span>        &lt;p&gt;Welcome back, \${authUser.username} 👋&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;button id=&quot;logout-button&quot;&gt;Logout&lt;/button&gt;</span></span>
<span class="line"><span>    \`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const page = template.content</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    page.getElementById(&#39;logout-button&#39;)</span></span>
<span class="line"><span>        .addEventListener(&#39;click&#39;, logout)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return page</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function logout() {</span></span>
<span class="line"><span>    localStorage.clear()</span></span>
<span class="line"><span>    location.reload()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個頁面用於歡迎已驗證用户，同時也有一個登出按鈕。<code>logout()</code> 函數的功能只是清理掉 <code>localStorage</code> 並重載這個頁面。</p>`,33)),l("p",null,[s[14]||(s[14]=n("這就是全部內容了。我猜你在此之前已經看過這個 ",-1)),p(a,{href:"https://go-passwordless-demo.herokuapp.com/"},{default:e(()=>[...s[12]||(s[12]=[n("demo",-1)])]),_:1}),s[15]||(s[15]=n(" 了。當然，這些源代碼也在同一個 ",-1)),p(a,{href:"https://github.com/nicolasparada/go-passwordless-demo"},{default:e(()=>[...s[13]||(s[13]=[n("倉庫",-1)])]),_:1}),s[16]||(s[16]=n(" 中。",-1))]),s[36]||(s[36]=l("hr",null,null,-1)),l("p",null,[s[18]||(s[18]=n("via: ",-1)),p(a,{href:"https://nicolasparada.netlify.com/posts/passwordless-auth-client/"},{default:e(()=>[...s[17]||(s[17]=[n("https://nicolasparada.netlify.com/posts/passwordless-auth-client/",-1)])]),_:1})]),l("p",null,[s[23]||(s[23]=n("作者：",-1)),p(a,{href:"https://nicolasparada.netlify.com/"},{default:e(()=>[...s[19]||(s[19]=[n("Nicolás Parada",-1)])]),_:1}),s[24]||(s[24]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[20]||(s[20]=[n("lujun9972",-1)])]),_:1}),s[25]||(s[25]=n(" 譯者：",-1)),p(a,{href:"https://github.com/qhwdw"},{default:e(()=>[...s[21]||(s[21]=[n("qhwdw",-1)])]),_:1}),s[26]||(s[26]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[29]||(s[29]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[27]||(s[27]=[n("LCTT",-1)])]),_:1}),s[30]||(s[30]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[28]||(s[28]=[n("Linux中國",-1)])]),_:1}),s[31]||(s[31]=n(" 榮譽推出",-1))])])}const x=i(d,[["render",u]]);export{T as __pageData,x as default};
