import{_ as t,a0 as l,w as o,s as r,I as p,x as a,a1 as e,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"API Star：一個 Python 3 的 API 框架 | LCTT x X-CMD","titleTemplate":false,"description":"API Star：一個 Python 3 的 API 框架 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"API Star：一個 Python 3 的 API 框架 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"API Star：一個 Python 3 的 API 框架 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180203 API Star- Python 3 API Framework - Polyglot.Ninja()","title":"API Star：一個 Python 3 的 API 框架","tag":"201809","desc":""},"relativePath":"201809/20180203 API Star- Python 3 API Framework - Polyglot.Ninja().md","filePath":"[post].md"}'),d={name:"201809/20180203 API Star- Python 3 API Framework - Polyglot.Ninja().md"};function u(h,s,g,m,k,f){const n=l("Link");return o(),r("div",null,[s[19]||(s[19]=p("h1",{id:"api-star-一個-python-3-的-api-框架",tabindex:"-1"},[a("API Star：一個 Python 3 的 API 框架 "),p("a",{class:"header-anchor",href:"#api-star-一個-python-3-的-api-框架","aria-label":"Permalink to “API Star：一個 Python 3 的 API 框架”"},"​")],-1)),p("p",null,[s[1]||(s[1]=a("為了在 Python 中快速構建 API，我主要依賴於 ",-1)),e(n,{href:"http://polyglot.ninja/rest-api-best-practices-python-flask-tutorial/"},{default:i(()=>[...s[0]||(s[0]=[a("Flask",-1)])]),_:1}),s[2]||(s[2]=a("。最近我遇到了一個名為 “API Star” 的基於 Python 3 的新 API 框架。由於幾個原因，我對它很感興趣。首先，該框架包含 Python 新特點，如類型提示和 asyncio。而且它再進一步為開發人員提供了很棒的開發體驗。我們很快就會講到這些功能，但在我們開始之前，我首先要感謝 Tom Christie，感謝他為 Django REST Framework 和 API Star 所做的所有工作。",-1))]),s[20]||(s[20]=c(`<p>現在説回 API Star —— 我感覺這個框架很有成效。我可以選擇基於 asyncio 編寫異步代碼，或者可以選擇傳統後端方式就像 WSGI 那樣。它配備了一個命令列工具 —— <code>apistar</code> 來幫助我們更快地完成工作。它支持 Django ORM 和 SQLAlchemy，這是可選的。它有一個出色的類型系統，使我們能夠定義輸入和輸出的約束，API Star 可以自動生成 API 的模式（包括文檔），提供驗證和序列化功能等等。雖然 API Star 專注於構建 API，但你也可以非常輕鬆地在其上構建 Web 應用程序。在我們自己構建一些東西之前，所有這些可能都沒有意義的。</p><h3 id="開始" tabindex="-1">開始 <a class="header-anchor" href="#開始" aria-label="Permalink to “開始”">​</a></h3><p>我們將從安裝 API Star 開始。為此實驗創建一個虛擬環境是一個好主意。如果你不知道如何創建一個虛擬環境，不要擔心，繼續往下看。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pip install apistar</span></span></code></pre></div><p>（譯註：上面的命令是在 Python 3 虛擬環境下使用的）</p><p>如果你沒有使用虛擬環境或者你的 Python 3 的 <code>pip</code> 名為 <code>pip3</code>，那麼使用 <code>pip3 install apistar</code> 代替。</p><p>一旦我們安裝了這個包，我們就應該可以使用 <code>apistar</code> 命令列工具了。我們可以用它創建一個新項目，讓我們在當前目錄中創建一個新項目。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>apistar new .</span></span></code></pre></div><p>現在我們應該創建兩個文件：<code>app.py</code>，它包含主應用程序，然後是 <code>test.py</code>，它用於測試。讓我們來看看 <code>app.py</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Include, Route</span></span>
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
<span class="line"><span>    app.main()</span></span></code></pre></div><p>在我們深入研究代碼之前，讓我們運行應用程序並查看它是否正常工作。我們在瀏覽器中輸入 <code>http://127.0.0.1:8080/</code>，我們將得到以下響應：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{&quot;message&quot;: &quot;Welcome to API Star!&quot;}</span></span></code></pre></div><p>如果我們輸入：<code>http://127.0.0.1:8080/?name=masnun</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{&quot;message&quot;: &quot;Welcome to API Star, masnun!&quot;}</span></span></code></pre></div><p>同樣的，輸入 <code>http://127.0.0.1:8080/docs/</code>，我們將看到自動生成的 API 文檔。</p><p>現在讓我們來看看代碼。我們有一個 <code>welcome</code> 函數，它接收一個名為 <code>name</code> 的參數，其默認值為 <code>None</code>。API Star 是一個智能的 API 框架。它將嘗試在 url 路徑或者查詢字符串中找到 <code>name</code> 鍵並將其傳遞給我們的函數，它還基於其生成 API 文檔。這真是太好了，不是嗎？</p><p>然後，我們創建一個 <code>Route</code> 和 <code>Include</code> 實例的列表，並將列表傳遞給 <code>App</code> 實例。<code>Route</code> 對象用於定義用户自定義路由。顧名思義，<code>Include</code> 包含了在給定的路徑下的其它 url 路徑。</p><h3 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to “路由”">​</a></h3><p>路由很簡單。當構造 <code>App</code> 實例時，我們需要傳遞一個列表作為 <code>routes</code> 參數，這個列表應該有我們剛才看到的 <code>Route</code> 或 <code>Include</code> 對象組成。對於 <code>Route</code>，我們傳遞一個 url 路徑，http 方法和可調用的請求處理程序（函數或者其他）。對於 <code>Include</code> 實例，我們傳遞一個 url 路徑和一個 <code>Routes</code> 實例列表。</p><h4 id="路徑參數" tabindex="-1">路徑參數 <a class="header-anchor" href="#路徑參數" aria-label="Permalink to “路徑參數”">​</a></h4><p>我們可以在花括號內添加一個名稱來聲明 url 路徑參數。例如 <code>/user/{user_id}</code> 定義了一個 url，其中 <code>user_id</code> 是路徑參數，或者説是一個將被注入到處理函數（實際上是可調用的）中的變量。這有一個簡單的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Route</span></span>
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
<span class="line"><span>    app.main()</span></span></code></pre></div><p>如果我們訪問 <code>http://127.0.0.1:8080/user/23</code>，我們將得到以下響應：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{&quot;message&quot;: &quot;Your profile id is: 23&quot;}</span></span></code></pre></div><p>但如果我們嘗試訪問 <code>http://127.0.0.1:8080/user/some_string</code>，它將無法匹配。因為我們定義了 <code>user_profile</code> 函數，且為 <code>user_id</code> 參數添加了一個類型提示。如果它不是整數，則路徑不匹配。但是如果我們繼續刪除類型提示，只使用 <code>user_profile(user_id)</code>，它將匹配此 url。這也展示了 API Star 的智能之處和利用類型和好處。</p><h4 id="包含-分組路由" tabindex="-1">包含/分組路由 <a class="header-anchor" href="#包含-分組路由" aria-label="Permalink to “包含/分組路由”">​</a></h4><p>有時候將某些 url 組合在一起是有意義的。假設我們有一個處理用户相關功能的 <code>user</code> 模組，將所有與用户相關的 url 分組在 <code>/user</code> 路徑下可能會更好。例如 <code>/user/new</code>、<code>/user/1</code>、<code>/user/1/update</code> 等等。我們可以輕鬆地在單獨的模組或包中創建我們的處理程序和路由，然後將它們包含在我們自己的路由中。</p><p>讓我們創建一個名為 <code>user</code> 的新模組，文件名為 <code>user.py</code>。我們將以下代碼放入這個文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Route</span></span>
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
<span class="line"><span>]</span></span></code></pre></div><p>現在我們可以從 app 主文件中導入 <code>user_routes</code>，並像這樣使用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Include</span></span>
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
<span class="line"><span>    app.main()</span></span></code></pre></div><p>現在 <code>/user/new</code> 將委託給 <code>user_new</code> 函數。</p><h3 id="訪問查詢字符串-查詢參數" tabindex="-1">訪問查詢字符串/查詢參數 <a class="header-anchor" href="#訪問查詢字符串-查詢參數" aria-label="Permalink to “訪問查詢字符串/查詢參數”">​</a></h3><p>查詢參數中傳遞的任何參數都可以直接注入到處理函數中。比如 url <code>/call?phone=1234</code>，處理函數可以定義一個 <code>phone</code> 參數，它將從查詢字符串/查詢參數中接收值。如果 url 查詢字符串不包含 <code>phone</code> 的值，那麼它將得到 <code>None</code>。我們還可以為參數設置一個默認值，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def welcome(name=None):</span></span>
<span class="line"><span>    if name is None:</span></span>
<span class="line"><span>        return {&#39;message&#39;: &#39;Welcome to API Star!&#39;}</span></span>
<span class="line"><span>    return {&#39;message&#39;: &#39;Welcome to API Star, %s!&#39; % name}</span></span></code></pre></div><p>在上面的例子中，我們為 <code>name</code> 設置了一個默認值 <code>None</code>。</p><h3 id="注入對象" tabindex="-1">注入對象 <a class="header-anchor" href="#注入對象" aria-label="Permalink to “注入對象”">​</a></h3><p>通過給一個請求程序添加類型提示，我們可以將不同的對象注入到視圖中。注入請求相關的對象有助於處理程序直接從內部訪問它們。API Star 內置的 <code>http</code> 包中有幾個內置對象。我們也可以使用它的類型系統來創建我們自己的自定義對象並將它們注入到我們的函數中。API Star 還根據指定的約束進行數據驗證。</p><p>讓我們定義自己的 <code>User</code> 類型，並將其注入到我們的請求處理程序中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Include, Route</span></span>
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
<span class="line"><span>    app.main()</span></span></code></pre></div><p>現在如果我們發送這樣的請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl -X POST \\</span></span>
<span class="line"><span>  http://127.0.0.1:8080/ \\</span></span>
<span class="line"><span>  -H &#39;Cache-Control: no-cache&#39; \\</span></span>
<span class="line"><span>  -H &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>  -d &#39;{&quot;name&quot;: &quot;masnun&quot;, &quot;email&quot;: &quot;masnun@gmail.com&quot;, &quot;age&quot;: 12}&#39;</span></span></code></pre></div><p>猜猜發生了什麼？我們得到一個錯誤，説年齡必須等於或大於 18。類型系允許我們進行智能數據驗證。如果我們啓用了 <code>docs</code> url，我們還將自動記錄這些參數。</p><h3 id="發送響應" tabindex="-1">發送響應 <a class="header-anchor" href="#發送響應" aria-label="Permalink to “發送響應”">​</a></h3><p>如果你已經注意到，到目前為止，我們只可以傳遞一個字典，它將被轉換為 JSON 並作為默認返回。但是，我們可以使用 <code>apistar</code> 中的 <code>Response</code> 類來設置狀態碼和其它任意響應頭。這有一個簡單的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from apistar import Route, Response</span></span>
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
<span class="line"><span>    app.main()</span></span></code></pre></div><p>它應該返回純文本響應和一個自定義標響應頭。請注意，<code>content</code> 應該是字節，而不是字符串。這就是我編碼它的原因。</p><h3 id="繼續" tabindex="-1">繼續 <a class="header-anchor" href="#繼續" aria-label="Permalink to “繼續”">​</a></h3>`,48)),p("p",null,[s[4]||(s[4]=a("我剛剛介紹了 API Star 的一些特性，API Star 中還有許多非常酷的東西，我建議通過 ",-1)),e(n,{href:"https://github.com/encode/apistar"},{default:i(()=>[...s[3]||(s[3]=[a("Github Readme",-1)])]),_:1}),s[5]||(s[5]=a(" 文件來了解這個優秀框架所提供的不同功能的更多信息。我還將嘗試在未來幾天內介紹關於 API Star 的更多簡短的，集中的教程。",-1))]),s[21]||(s[21]=p("hr",null,null,-1)),p("p",null,[s[7]||(s[7]=a("via: ",-1)),e(n,{href:"http://polyglot.ninja/api-star-python-3-api-framework/"},{default:i(()=>[...s[6]||(s[6]=[a("http://polyglot.ninja/api-star-python-3-api-framework/",-1)])]),_:1})]),p("p",null,[s[11]||(s[11]=a("作者：",-1)),e(n,{href:"http://polyglot.ninja/author/masnun/"},{default:i(()=>[...s[8]||(s[8]=[a("MASNUN",-1)])]),_:1}),s[12]||(s[12]=a(" 譯者：",-1)),e(n,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[9]||(s[9]=[a("MjSeven",-1)])]),_:1}),s[13]||(s[13]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[16]||(s[16]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[14]||(s[14]=[a("LCTT",-1)])]),_:1}),s[17]||(s[17]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[15]||(s[15]=[a("Linux中國",-1)])]),_:1}),s[18]||(s[18]=a(" 榮譽推出",-1))])])}const _=t(d,[["render",u]]);export{P as __pageData,_ as default};
