import{_ as i,a0 as o,w as c,s as r,I as l,x as n,a1 as p,A as e,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"无密码验证：客户端 | LCTT x X-CMD","titleTemplate":false,"description":"无密码验证：客户端 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"无密码验证：客户端 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"无密码验证：客户端 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180429 Passwordless Auth- Client","title":"无密码验证：客户端","tag":"201807","desc":""},"relativePath":"201807/20180429 Passwordless Auth- Client.md","filePath":"[post].md"}'),d={name:"201807/20180429 Passwordless Auth- Client.md"};function u(h,s,g,m,f,b){const a=o("Link");return c(),r("div",null,[s[32]||(s[32]=l("h1",{id:"无密码验证-客户端",tabindex:"-1"},[n("无密码验证：客户端 "),l("a",{class:"header-anchor",href:"#无密码验证-客户端","aria-label":"Permalink to “无密码验证：客户端”"},"​")],-1)),l("p",null,[s[1]||(s[1]=n("我们继续 ",-1)),p(a,{href:"https://linux.cn/article-9748-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("无密码验证",-1)])]),_:1}),s[2]||(s[2]=n(" 的文章。上一篇文章中，我们用 Go 写了一个 HTTP 服务，用这个服务来做无密码验证 API。今天，我们为它再写一个 JavaScript 客户端。",-1))]),l("p",null,[s[4]||(s[4]=n("我们将使用 ",-1)),p(a,{href:"https://linux.cn/article-9815-1.html"},{default:e(()=>[...s[3]||(s[3]=[n("这里的",-1)])]),_:1}),s[5]||(s[5]=n(" 这个单页面应用程序（SPA）来展示使用的技术。如果你还没有读过它，请先读它。",-1))]),s[33]||(s[33]=t(`<p>记住流程：</p><ul><li>用户输入其 email。</li><li>用户收到一个带有魔法链接的邮件。</li><li>用户点击该链接、</li><li>用户验证成功。</li></ul><p>对于根 URL（<code>/</code>），我们将根据验证的状态分别使用两个不同的页面：一个是带有访问表单的页面，或者是已验证通过的用户的欢迎页面。另一个页面是验证回调的重定向页面。</p><h3 id="伺服" tabindex="-1">伺服 <a class="header-anchor" href="#伺服" aria-label="Permalink to “伺服”">​</a></h3><p>我们将使用相同的 Go 服务器来为客户端提供服务，因此，在我们前面的 <code>main.go</code> 中添加一些路由：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>router.Handle(&quot;GET&quot;, &quot;/...&quot;, http.FileServer(SPAFileSystem{http.Dir(&quot;static&quot;)}))</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type SPAFileSystem struct {</span></span>
<span class="line"><span>	fs http.FileSystem</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (spa SPAFileSystem) Open(name string) (http.File, error) {</span></span>
<span class="line"><span>	f, err := spa.fs.Open(name)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		return spa.fs.Open(&quot;index.html&quot;)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return f, nil</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个伺服文件放在 <code>static</code> 下，配合 <code>static/index.html</code> 作为回调。</p>`,8)),l("p",null,[s[7]||(s[7]=n("你可以使用你自己的服务器，但是你得在服务器上启用 ",-1)),p(a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},{default:e(()=>[...s[6]||(s[6]=[n("CORS",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[34]||(s[34]=t(`<h3 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to “HTML”">​</a></h3><p>我们来看一下那个 <code>static/index.html</code> 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span> &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span> &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span> &lt;title&gt;Passwordless Demo&lt;/title&gt;</span></span>
<span class="line"><span> &lt;link rel=&quot;shortcut icon&quot; href=&quot;data:,&quot;&gt;</span></span>
<span class="line"><span> &lt;script src=&quot;/js/main.js&quot; type=&quot;module&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><p>单页面应用程序的所有渲染由 JavaScript 来完成，因此，我们使用了一个空的 body 部分和一个 <code>main.js</code> 文件。</p>`,4)),l("p",null,[s[10]||(s[10]=n("我们将使用 ",-1)),p(a,{href:"https://linux.cn/article-9815-1.html"},{default:e(()=>[...s[9]||(s[9]=[n("上篇文章",-1)])]),_:1}),s[11]||(s[11]=n(" 中的 Router。",-1))]),s[35]||(s[35]=t(`<h3 id="渲染" tabindex="-1">渲染 <a class="header-anchor" href="#渲染" aria-label="Permalink to “渲染”">​</a></h3><p>现在，我们使用下面的内容来创建一个 <code>static/js/main.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import Router from &#39;https://unpkg.com/@nicolasparada/router&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>与上篇文章不同的是，我们实现了一个 <code>isAuthenticated()</code> 函数和一个 <code>guard()</code> 函数，使用它去渲染两种验证状态的页面。因此，当用户访问 <code>/</code> 时，它将根据用户是否通过了验证来展示主页或者是欢迎页面。</p><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to “验证”">​</a></h3><p>现在，我们来编写 <code>isAuthenticated()</code> 函数。使用下面的内容来创建一个 <code>static/js/auth.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>export function getAuthUser() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>当有人登入时，我们将保存 JSON 格式的 web 令牌、它的过期日期，以及在 <code>localStorage</code> 上的当前已验证用户。这个模块就是这个用处。</p><ul><li><code>getAuthUser()</code> 用于从 <code>localStorage</code> 获取已认证的用户，以确认 JSON 格式的 Web 令牌没有过期。</li><li><code>isAuthenticated()</code> 在前面的函数中用于去检查它是否没有返回 <code>null</code>。</li></ul><h3 id="获取" tabindex="-1">获取 <a class="header-anchor" href="#获取" aria-label="Permalink to “获取”">​</a></h3><p>在继续这个页面之前，我将写一些与服务器 API 一起使用的 HTTP 工具。</p><p>我们使用以下的内容去创建一个 <code>static/js/http.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { isAuthenticated } from &#39;./auth.js&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个模块导出了 <code>get()</code> 和 <code>post()</code> 函数。它们是 <code>fetch</code> API 的封装。当用户是已验证的，这二个函数注入一个 <code>Authorization: Bearer &lt;token_here&gt;</code> 头到请求中；这样服务器就能对我们进行身份验证。</p><h3 id="欢迎页" tabindex="-1">欢迎页 <a class="header-anchor" href="#欢迎页" aria-label="Permalink to “欢迎页”">​</a></h3><p>我们现在来到欢迎页面。用如下的内容创建一个 <code>static/js/pages/welcome-page.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const template = document.createElement(&#39;template&#39;)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个页面使用一个 <code>HTMLTemplateElement</code> 作为视图。这只是一个输入用户 email 的简单表单。</p><p>为了避免干扰，我将跳过错误处理部分，只是将它们输出到控制台上。</p><p>现在，我们来写 <code>onAccessFormSubmit()</code> 函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import http from &#39;../http.js&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>它对 <code>/api/passwordless/start</code> 发起了 POST 请求，请求体中包含 <code>email</code> 和 <code>redirectUri</code>。在本例中它返回 <code>404 Not Found</code> 状态码时，我们将创建一个用户。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function runCreateUserProgram(email) {</span></span>
<span class="line"><span>    const username = prompt(&quot;Enter username&quot;)</span></span>
<span class="line"><span>    if (username === null) return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    http.post(&#39;/api/users&#39;, { email, username })</span></span>
<span class="line"><span>        .then(res =&gt; res.body)</span></span>
<span class="line"><span>        .then(user =&gt; sendMagicLink(user.email))</span></span>
<span class="line"><span>        .catch(console.error)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个用户创建程序，首先询问用户名，然后使用 email 和用户名做一个 <code>POST</code> 请求到 <code>/api/users</code>。成功之后，给创建的用户发送一个魔法链接。</p><h3 id="回调页" tabindex="-1">回调页 <a class="header-anchor" href="#回调页" aria-label="Permalink to “回调页”">​</a></h3><p>这是访问表单的全部功能，现在我们来做回调页面。使用如下的内容来创建一个 <code>static/js/pages/callback-page.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import http from &#39;../http.js&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>请记住……当点击魔法链接时，我们会来到 <code>/api/passwordless/verify_redirect</code>，它将把我们重定向到重定向 URI，我们将放在哈希中的 JWT 和过期日期传递给 <code>/callback</code>。</p><p>回调页面解码 URL 中的哈希，提取这些参数去做一个 <code>GET</code> 请求到 <code>/api/auth_user</code>，用 JWT 保存所有数据到 <code>localStorage</code> 中。最后，重定向到主页面。</p><h3 id="主页" tabindex="-1">主页 <a class="header-anchor" href="#主页" aria-label="Permalink to “主页”">​</a></h3><p>创建如下内容的 <code>static/pages/home-page.js</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import { getAuthUser } from &#39;../auth.js&#39;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个页面用于欢迎已验证用户，同时也有一个登出按钮。<code>logout()</code> 函数的功能只是清理掉 <code>localStorage</code> 并重载这个页面。</p>`,33)),l("p",null,[s[14]||(s[14]=n("这就是全部内容了。我猜你在此之前已经看过这个 ",-1)),p(a,{href:"https://go-passwordless-demo.herokuapp.com/"},{default:e(()=>[...s[12]||(s[12]=[n("demo",-1)])]),_:1}),s[15]||(s[15]=n(" 了。当然，这些源代码也在同一个 ",-1)),p(a,{href:"https://github.com/nicolasparada/go-passwordless-demo"},{default:e(()=>[...s[13]||(s[13]=[n("仓库",-1)])]),_:1}),s[16]||(s[16]=n(" 中。",-1))]),s[36]||(s[36]=l("hr",null,null,-1)),l("p",null,[s[18]||(s[18]=n("via: ",-1)),p(a,{href:"https://nicolasparada.netlify.com/posts/passwordless-auth-client/"},{default:e(()=>[...s[17]||(s[17]=[n("https://nicolasparada.netlify.com/posts/passwordless-auth-client/",-1)])]),_:1})]),l("p",null,[s[23]||(s[23]=n("作者：",-1)),p(a,{href:"https://nicolasparada.netlify.com/"},{default:e(()=>[...s[19]||(s[19]=[n("Nicolás Parada",-1)])]),_:1}),s[24]||(s[24]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[20]||(s[20]=[n("lujun9972",-1)])]),_:1}),s[25]||(s[25]=n(" 译者：",-1)),p(a,{href:"https://github.com/qhwdw"},{default:e(()=>[...s[21]||(s[21]=[n("qhwdw",-1)])]),_:1}),s[26]||(s[26]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[29]||(s[29]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[27]||(s[27]=[n("LCTT",-1)])]),_:1}),s[30]||(s[30]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[28]||(s[28]=[n("Linux中国",-1)])]),_:1}),s[31]||(s[31]=n(" 荣誉推出",-1))])])}const x=i(d,[["render",u]]);export{T as __pageData,x as default};
