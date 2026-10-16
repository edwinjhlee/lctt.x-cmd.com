import{_ as t,a0 as l,w as o,s as r,I as p,x as a,a1 as e,A as i,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"API Star：一个 Python 3 的 API 框架 | LCTT x X-CMD","titleTemplate":false,"description":"API Star：一个 Python 3 的 API 框架 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"API Star：一个 Python 3 的 API 框架 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"API Star：一个 Python 3 的 API 框架 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180203 API Star- Python 3 API Framework - Polyglot.Ninja()","title":"API Star：一个 Python 3 的 API 框架","tag":"201809","desc":""},"relativePath":"201809/20180203 API Star- Python 3 API Framework - Polyglot.Ninja().md","filePath":"[post].md"}'),d={name:"201809/20180203 API Star- Python 3 API Framework - Polyglot.Ninja().md"};function u(h,s,g,m,k,f){const n=l("Link");return o(),r("div",null,[s[19]||(s[19]=p("h1",{id:"api-star-一个-python-3-的-api-框架",tabindex:"-1"},[a("API Star：一个 Python 3 的 API 框架 "),p("a",{class:"header-anchor",href:"#api-star-一个-python-3-的-api-框架","aria-label":"Permalink to “API Star：一个 Python 3 的 API 框架”"},"​")],-1)),p("p",null,[s[1]||(s[1]=a("为了在 Python 中快速构建 API，我主要依赖于 ",-1)),e(n,{href:"http://polyglot.ninja/rest-api-best-practices-python-flask-tutorial/"},{default:i(()=>[...s[0]||(s[0]=[a("Flask",-1)])]),_:1}),s[2]||(s[2]=a("。最近我遇到了一个名为 “API Star” 的基于 Python 3 的新 API 框架。由于几个原因，我对它很感兴趣。首先，该框架包含 Python 新特点，如类型提示和 asyncio。而且它再进一步为开发人员提供了很棒的开发体验。我们很快就会讲到这些功能，但在我们开始之前，我首先要感谢 Tom Christie，感谢他为 Django REST Framework 和 API Star 所做的所有工作。",-1))]),s[20]||(s[20]=c(`<p>现在说回 API Star —— 我感觉这个框架很有成效。我可以选择基于 asyncio 编写异步代码，或者可以选择传统后端方式就像 WSGI 那样。它配备了一个命令行工具 —— <code>apistar</code> 来帮助我们更快地完成工作。它支持 Django ORM 和 SQLAlchemy，这是可选的。它有一个出色的类型系统，使我们能够定义输入和输出的约束，API Star 可以自动生成 API 的模式（包括文档），提供验证和序列化功能等等。虽然 API Star 专注于构建 API，但你也可以非常轻松地在其上构建 Web 应用程序。在我们自己构建一些东西之前，所有这些可能都没有意义的。</p><h3 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to “开始”">​</a></h3><p>我们将从安装 API Star 开始。为此实验创建一个虚拟环境是一个好主意。如果你不知道如何创建一个虚拟环境，不要担心，继续往下看。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install apistar</span></span></code></pre></div><p>（译注：上面的命令是在 Python 3 虚拟环境下使用的）</p><p>如果你没有使用虚拟环境或者你的 Python 3 的 <code>pip</code> 名为 <code>pip3</code>，那么使用 <code>pip3 install apistar</code> 代替。</p><p>一旦我们安装了这个包，我们就应该可以使用 <code>apistar</code> 命令行工具了。我们可以用它创建一个新项目，让我们在当前目录中创建一个新项目。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apistar new .</span></span></code></pre></div><p>现在我们应该创建两个文件：<code>app.py</code>，它包含主应用程序，然后是 <code>test.py</code>，它用于测试。让我们来看看 <code>app.py</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Include, Route</span></span>
<span class="line"><span>from apistar.frameworks.wsgi import WSGIApp as App</span></span>
<span class="line"><span>from apistar.handlers import docs_urls, static_urls</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def welcome(name=None):</span></span>
<span class="line"><span>    if name is None:</span></span>
<span class="line"><span>        return {&#39;message&#39;: &#39;Welcome to API Star!&#39;}</span></span>
<span class="line"><span>    return {&#39;message&#39;: &#39;Welcome to API Star, %s!&#39; % name}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>routes = [</span></span>
<span class="line"><span>    Route(&#39;/&#39;, &#39;GET&#39;, welcome),</span></span>
<span class="line"><span>    Include(&#39;/docs&#39;, docs_urls),</span></span>
<span class="line"><span>    Include(&#39;/static&#39;, static_urls)</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = App(routes=routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.main()</span></span></code></pre></div><p>在我们深入研究代码之前，让我们运行应用程序并查看它是否正常工作。我们在浏览器中输入 <code>http://127.0.0.1:8080/</code>，我们将得到以下响应：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{&quot;message&quot;: &quot;Welcome to API Star!&quot;}</span></span></code></pre></div><p>如果我们输入：<code>http://127.0.0.1:8080/?name=masnun</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{&quot;message&quot;: &quot;Welcome to API Star, masnun!&quot;}</span></span></code></pre></div><p>同样的，输入 <code>http://127.0.0.1:8080/docs/</code>，我们将看到自动生成的 API 文档。</p><p>现在让我们来看看代码。我们有一个 <code>welcome</code> 函数，它接收一个名为 <code>name</code> 的参数，其默认值为 <code>None</code>。API Star 是一个智能的 API 框架。它将尝试在 url 路径或者查询字符串中找到 <code>name</code> 键并将其传递给我们的函数，它还基于其生成 API 文档。这真是太好了，不是吗？</p><p>然后，我们创建一个 <code>Route</code> 和 <code>Include</code> 实例的列表，并将列表传递给 <code>App</code> 实例。<code>Route</code> 对象用于定义用户自定义路由。顾名思义，<code>Include</code> 包含了在给定的路径下的其它 url 路径。</p><h3 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to “路由”">​</a></h3><p>路由很简单。当构造 <code>App</code> 实例时，我们需要传递一个列表作为 <code>routes</code> 参数，这个列表应该有我们刚才看到的 <code>Route</code> 或 <code>Include</code> 对象组成。对于 <code>Route</code>，我们传递一个 url 路径，http 方法和可调用的请求处理程序（函数或者其他）。对于 <code>Include</code> 实例，我们传递一个 url 路径和一个 <code>Routes</code> 实例列表。</p><h4 id="路径参数" tabindex="-1">路径参数 <a class="header-anchor" href="#路径参数" aria-label="Permalink to “路径参数”">​</a></h4><p>我们可以在花括号内添加一个名称来声明 url 路径参数。例如 <code>/user/{user_id}</code> 定义了一个 url，其中 <code>user_id</code> 是路径参数，或者说是一个将被注入到处理函数（实际上是可调用的）中的变量。这有一个简单的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Route</span></span>
<span class="line"><span>from apistar.frameworks.wsgi import WSGIApp as App</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def user_profile(user_id: int):</span></span>
<span class="line"><span>    return {&#39;message&#39;: &#39;Your profile id is: {}&#39;.format(user_id)}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>routes = [</span></span>
<span class="line"><span>    Route(&#39;/user/{user_id}&#39;, &#39;GET&#39;, user_profile),</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = App(routes=routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.main()</span></span></code></pre></div><p>如果我们访问 <code>http://127.0.0.1:8080/user/23</code>，我们将得到以下响应：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{&quot;message&quot;: &quot;Your profile id is: 23&quot;}</span></span></code></pre></div><p>但如果我们尝试访问 <code>http://127.0.0.1:8080/user/some_string</code>，它将无法匹配。因为我们定义了 <code>user_profile</code> 函数，且为 <code>user_id</code> 参数添加了一个类型提示。如果它不是整数，则路径不匹配。但是如果我们继续删除类型提示，只使用 <code>user_profile(user_id)</code>，它将匹配此 url。这也展示了 API Star 的智能之处和利用类型和好处。</p><h4 id="包含-分组路由" tabindex="-1">包含/分组路由 <a class="header-anchor" href="#包含-分组路由" aria-label="Permalink to “包含/分组路由”">​</a></h4><p>有时候将某些 url 组合在一起是有意义的。假设我们有一个处理用户相关功能的 <code>user</code> 模块，将所有与用户相关的 url 分组在 <code>/user</code> 路径下可能会更好。例如 <code>/user/new</code>、<code>/user/1</code>、<code>/user/1/update</code> 等等。我们可以轻松地在单独的模块或包中创建我们的处理程序和路由，然后将它们包含在我们自己的路由中。</p><p>让我们创建一个名为 <code>user</code> 的新模块，文件名为 <code>user.py</code>。我们将以下代码放入这个文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Route</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def user_new():</span></span>
<span class="line"><span>    return {&quot;message&quot;: &quot;Create a new user&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def user_update(user_id: int):</span></span>
<span class="line"><span>    return {&quot;message&quot;: &quot;Update user #{}&quot;.format(user_id)}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def user_profile(user_id: int):</span></span>
<span class="line"><span>    return {&quot;message&quot;: &quot;User Profile for: {}&quot;.format(user_id)}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>user_routes = [</span></span>
<span class="line"><span>    Route(&quot;/new&quot;, &quot;GET&quot;, user_new),</span></span>
<span class="line"><span>    Route(&quot;/{user_id}/update&quot;, &quot;GET&quot;, user_update),</span></span>
<span class="line"><span>    Route(&quot;/{user_id}/profile&quot;, &quot;GET&quot;, user_profile),</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>现在我们可以从 app 主文件中导入 <code>user_routes</code>，并像这样使用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Include</span></span>
<span class="line"><span>from apistar.frameworks.wsgi import WSGIApp as App</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from user import user_routes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>routes = [</span></span>
<span class="line"><span>    Include(&quot;/user&quot;, user_routes)</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = App(routes=routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.main()</span></span></code></pre></div><p>现在 <code>/user/new</code> 将委托给 <code>user_new</code> 函数。</p><h3 id="访问查询字符串-查询参数" tabindex="-1">访问查询字符串/查询参数 <a class="header-anchor" href="#访问查询字符串-查询参数" aria-label="Permalink to “访问查询字符串/查询参数”">​</a></h3><p>查询参数中传递的任何参数都可以直接注入到处理函数中。比如 url <code>/call?phone=1234</code>，处理函数可以定义一个 <code>phone</code> 参数，它将从查询字符串/查询参数中接收值。如果 url 查询字符串不包含 <code>phone</code> 的值，那么它将得到 <code>None</code>。我们还可以为参数设置一个默认值，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def welcome(name=None):</span></span>
<span class="line"><span>    if name is None:</span></span>
<span class="line"><span>        return {&#39;message&#39;: &#39;Welcome to API Star!&#39;}</span></span>
<span class="line"><span>    return {&#39;message&#39;: &#39;Welcome to API Star, %s!&#39; % name}</span></span></code></pre></div><p>在上面的例子中，我们为 <code>name</code> 设置了一个默认值 <code>None</code>。</p><h3 id="注入对象" tabindex="-1">注入对象 <a class="header-anchor" href="#注入对象" aria-label="Permalink to “注入对象”">​</a></h3><p>通过给一个请求程序添加类型提示，我们可以将不同的对象注入到视图中。注入请求相关的对象有助于处理程序直接从内部访问它们。API Star 内置的 <code>http</code> 包中有几个内置对象。我们也可以使用它的类型系统来创建我们自己的自定义对象并将它们注入到我们的函数中。API Star 还根据指定的约束进行数据验证。</p><p>让我们定义自己的 <code>User</code> 类型，并将其注入到我们的请求处理程序中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Include, Route</span></span>
<span class="line"><span>from apistar.frameworks.wsgi import WSGIApp as App</span></span>
<span class="line"><span>from apistar import typesystem</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User(typesystem.Object):</span></span>
<span class="line"><span>    properties = {</span></span>
<span class="line"><span>    &#39;name&#39;: typesystem.string(max_length=100),</span></span>
<span class="line"><span>    &#39;email&#39;: typesystem.string(max_length=100),</span></span>
<span class="line"><span>    &#39;age&#39;: typesystem.integer(maximum=100, minimum=18)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    required = [&quot;name&quot;, &quot;age&quot;, &quot;email&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def new_user(user: User):</span></span>
<span class="line"><span>    return user</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>routes = [</span></span>
<span class="line"><span>    Route(&#39;/&#39;, &#39;POST&#39;, new_user),</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = App(routes=routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.main()</span></span></code></pre></div><p>现在如果我们发送这样的请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl -X POST \\</span></span>
<span class="line"><span>  http://127.0.0.1:8080/ \\</span></span>
<span class="line"><span>  -H &#39;Cache-Control: no-cache&#39; \\</span></span>
<span class="line"><span>  -H &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  -d &#39;{&quot;name&quot;: &quot;masnun&quot;, &quot;email&quot;: &quot;masnun@gmail.com&quot;, &quot;age&quot;: 12}&#39;</span></span></code></pre></div><p>猜猜发生了什么？我们得到一个错误，说年龄必须等于或大于 18。类型系允许我们进行智能数据验证。如果我们启用了 <code>docs</code> url，我们还将自动记录这些参数。</p><h3 id="发送响应" tabindex="-1">发送响应 <a class="header-anchor" href="#发送响应" aria-label="Permalink to “发送响应”">​</a></h3><p>如果你已经注意到，到目前为止，我们只可以传递一个字典，它将被转换为 JSON 并作为默认返回。但是，我们可以使用 <code>apistar</code> 中的 <code>Response</code> 类来设置状态码和其它任意响应头。这有一个简单的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Route, Response</span></span>
<span class="line"><span>from apistar.frameworks.wsgi import WSGIApp as App</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def hello():</span></span>
<span class="line"><span>    return Response(</span></span>
<span class="line"><span>    content=&quot;Hello&quot;.encode(&quot;utf-8&quot;),</span></span>
<span class="line"><span>    status=200,</span></span>
<span class="line"><span>    headers={&quot;X-API-Framework&quot;: &quot;API Star&quot;},</span></span>
<span class="line"><span>    content_type=&quot;text/plain&quot;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>routes = [</span></span>
<span class="line"><span>    Route(&#39;/&#39;, &#39;GET&#39;, hello),</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = App(routes=routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.main()</span></span></code></pre></div><p>它应该返回纯文本响应和一个自定义标响应头。请注意，<code>content</code> 应该是字节，而不是字符串。这就是我编码它的原因。</p><h3 id="继续" tabindex="-1">继续 <a class="header-anchor" href="#继续" aria-label="Permalink to “继续”">​</a></h3>`,48)),p("p",null,[s[4]||(s[4]=a("我刚刚介绍了 API Star 的一些特性，API Star 中还有许多非常酷的东西，我建议通过 ",-1)),e(n,{href:"https://github.com/encode/apistar"},{default:i(()=>[...s[3]||(s[3]=[a("Github Readme",-1)])]),_:1}),s[5]||(s[5]=a(" 文件来了解这个优秀框架所提供的不同功能的更多信息。我还将尝试在未来几天内介绍关于 API Star 的更多简短的，集中的教程。",-1))]),s[21]||(s[21]=p("hr",null,null,-1)),p("p",null,[s[7]||(s[7]=a("via: ",-1)),e(n,{href:"http://polyglot.ninja/api-star-python-3-api-framework/"},{default:i(()=>[...s[6]||(s[6]=[a("http://polyglot.ninja/api-star-python-3-api-framework/",-1)])]),_:1})]),p("p",null,[s[11]||(s[11]=a("作者：",-1)),e(n,{href:"http://polyglot.ninja/author/masnun/"},{default:i(()=>[...s[8]||(s[8]=[a("MASNUN",-1)])]),_:1}),s[12]||(s[12]=a(" 译者：",-1)),e(n,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[9]||(s[9]=[a("MjSeven",-1)])]),_:1}),s[13]||(s[13]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[15]||(s[15]=[a("Linux中国",-1)])]),_:1}),s[18]||(s[18]=a(" 荣誉推出",-1))])])}const _=t(d,[["render",u]]);export{P as __pageData,_ as default};
