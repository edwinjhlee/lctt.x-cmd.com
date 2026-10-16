import{_ as l,a0 as i,w as d,s as r,I as a,x as n,a1 as e,A as o,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Python Web 應用程序 Tornado  框架簡介 | LCTT x X-CMD","titleTemplate":false,"description":"Python Web 應用程序 Tornado  框架簡介 | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python Web 應用程序 Tornado  框架簡介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python Web 應用程序 Tornado  框架簡介 | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20180614 An introduction to the Tornado Python web app framework","title":"Python Web 應用程序 Tornado  框架簡介","tag":"201902","desc":""},"relativePath":"201902/20180614 An introduction to the Tornado Python web app framework.md","filePath":"[post].md"}'),c={name:"201902/20180614 An introduction to the Tornado Python web app framework.md"};function u(f,s,h,m,k,g){const p=i("Link");return d(),r("div",null,[s[71]||(s[71]=a("h1",{id:"python-web-應用程序-tornado-框架簡介",tabindex:"-1"},[n("Python Web 應用程序 Tornado 框架簡介 "),a("a",{class:"header-anchor",href:"#python-web-應用程序-tornado-框架簡介","aria-label":"Permalink to “Python Web 應用程序 Tornado  框架簡介”"},"​")],-1)),s[72]||(s[72]=a("blockquote",null,[a("p",null,"在比較 Python 框架的系列文章的第三部分中，我們來了解 Tornado，它是為處理異步進程而構建的。")],-1)),s[73]||(s[73]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/tornado.png?itok=kAa3eXIU",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("在這個由四部分組成的系列文章的前兩篇中，我們介紹了 ",-1)),e(p,{href:"https://opensource.com/article/18/5/pyramid-framework"},{default:o(()=>[...s[0]||(s[0]=[n("Pyramid",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),e(p,{href:"https://opensource.com/article/18/4/flask"},{default:o(()=>[...s[1]||(s[1]=[n("Flask",-1)])]),_:1}),s[4]||(s[4]=n(" Web 框架。我們已經構建了兩次相同的應用程序，看到了一個完整的 DIY 框架和包含了更多功能的框架之間的異同。",-1))]),a("p",null,[s[6]||(s[6]=n("現在讓我們來看看另一個稍微不同的選擇：",-1)),e(p,{href:"https://tornado.readthedocs.io/en/stable/"},{default:o(()=>[...s[5]||(s[5]=[n("Tornado 框架",-1)])]),_:1}),s[7]||(s[7]=n("。Tornado 在很大程度上與 Flask 一樣簡單，但有一個主要區別：Tornado 是專門為處理異步進程而構建的。在我們本系列所構建的應用程序中，這種特殊的醬料（LCTT 譯註：這裏意思是 Tornado 的異步功能）在我們構建的 app 中並不是非常有用，但我們將看到在哪裏可以使用它，以及它在更一般的情況下是如何工作的。",-1))]),s[74]||(s[74]=t(`<p>讓我們繼續前兩篇文章中模式，首先從處理設置和配置開始。</p><h3 id="tornado-啓動和配置" tabindex="-1">Tornado 啓動和配置 <a class="header-anchor" href="#tornado-啓動和配置" aria-label="Permalink to “Tornado 啓動和配置”">​</a></h3><p>如果你一直關注這個系列，那麼第一步應該對你來説習以為常。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir tornado_todo</span></span>
<span class="line"><span>$ cd tornado_todo</span></span>
<span class="line"><span>$ pipenv install --python 3.6</span></span>
<span class="line"><span>$ pipenv shell</span></span>
<span class="line"><span>(tornado-someHash) $ pipenv install tornado</span></span></code></pre></div><p>創建一個 <code>setup.py</code> 文件來安裝我們的應用程序相關的東西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(tornado-someHash) $ touch setup.py</span></span>
<span class="line"><span># setup.py</span></span>
<span class="line"><span>from setuptools import setup, find_packages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>requires = [</span></span>
<span class="line"><span>    &#39;tornado&#39;,</span></span>
<span class="line"><span>    &#39;tornado-sqlalchemy&#39;,</span></span>
<span class="line"><span>    &#39;psycopg2&#39;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setup(</span></span>
<span class="line"><span>    name=&#39;tornado_todo&#39;,</span></span>
<span class="line"><span>    version=&#39;0.0&#39;,</span></span>
<span class="line"><span>    description=&#39;A To-Do List built with Tornado&#39;,</span></span>
<span class="line"><span>    author=&#39;&lt;Your name&gt;&#39;,</span></span>
<span class="line"><span>    author_email=&#39;&lt;Your email&gt;&#39;,</span></span>
<span class="line"><span>    keywords=&#39;web tornado&#39;,</span></span>
<span class="line"><span>    packages=find_packages(),</span></span>
<span class="line"><span>    install_requires=requires,</span></span>
<span class="line"><span>    entry_points={</span></span>
<span class="line"><span>        &#39;console_scripts&#39;: [</span></span>
<span class="line"><span>            &#39;serve_app = todo:main&#39;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>因為 Tornado 不需要任何外部配置，所以我們可以直接編寫 Python 代碼來讓程序運行。讓我們創建 <code>todo</code> 目錄，並用需要的前幾個文件填充它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>todo/</span></span>
<span class="line"><span>    __init__.py</span></span>
<span class="line"><span>    models.py</span></span>
<span class="line"><span>    views.py</span></span></code></pre></div><p>就像 Flask 和 Pyramid 一樣，Tornado 也有一些基本配置，放在 <code>__init__.py</code> 中。從 <code>tornado.web</code> 中，我們將導入 <code>Application</code> 對象，它將處理路由和視圖的連接，包括資料庫（當我們談到那裏時再説）以及運行 Tornado 應用程序所需的其它額外設置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application()</span></span></code></pre></div><p>像 Flask 一樣，Tornado 主要是一個 DIY 框架。當構建我們的 app 時，我們必須設置該應用實例。因為 Tornado 用它自己的 HTTP 服務器來提供該應用，我們必須設置如何提供該應用。首先，在 <code>tornado.options.define</code> 中定義要監聽的端口。然後我們實例化 Tornado 的 <code>HTTPServer</code>，將該 <code>Application</code> 對象的實例作為參數傳遞給它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.httpserver import HTTPServer</span></span>
<span class="line"><span>from tornado.options import define, options</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span></span></span>
<span class="line"><span>define(&#39;port&#39;, default=8888, help=&#39;port to listen on&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application()</span></span>
<span class="line"><span>    http_server = HTTPServer(app)</span></span>
<span class="line"><span>    http_server.listen(options.port)</span></span></code></pre></div><p>當我們使用 <code>define</code> 函數時，我們最終會在 <code>options</code> 對象上創建屬性。第一個參數位置的任何內容都將是屬性的名稱，分配給 <code>default</code> 關鍵字參數的內容將是該屬性的值。</p><p>例如，如果我們將屬性命名為 <code>potato</code> 而不是 <code>port</code>，我們可以通過 <code>options.potato</code> 訪問它的值。</p><p>在 <code>HTTPServer</code> 上調用 <code>listen</code> 並不會啓動服務器。我們必須再做一步，找一個可以監聽請求並返回響應的工作應用程序，我們需要一個輸入輸出循環。幸運的是，Tornado 以 <code>tornado.ioloop.IOLoop</code> 的形式提供了開箱即用的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.httpserver import HTTPServer</span></span>
<span class="line"><span>from tornado.ioloop import IOLoop</span></span>
<span class="line"><span>from tornado.options import define, options</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span></span></span>
<span class="line"><span>define(&#39;port&#39;, default=8888, help=&#39;port to listen on&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application()</span></span>
<span class="line"><span>    http_server = HTTPServer(app)</span></span>
<span class="line"><span>    http_server.listen(options.port)</span></span>
<span class="line"><span>    print(&#39;Listening on http://localhost:%i&#39; % options.port)</span></span>
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><p>我喜歡某種形式的 <code>print</code> 語句，來告訴我什麼時候應用程序正在提供服務，這是我的習慣。如果你願意，可以不使用 <code>print</code>。</p><p>我們以 <code>IOLoop.current().start()</code> 開始我們的 I/O 循環。讓我們進一步討論輸入，輸出和異步性。</p><h3 id="python-中的異步和-i-o-循環的基礎知識" tabindex="-1">Python 中的異步和 I/O 循環的基礎知識 <a class="header-anchor" href="#python-中的異步和-i-o-循環的基礎知識" aria-label="Permalink to “Python 中的異步和 I/O 循環的基礎知識”">​</a></h3><p>請允許我提前説明，我絕對，肯定，一定並且放心地説不是異步編程方面的專家。就像我寫的所有內容一樣，接下來的內容源於我對這個概念的理解的侷限性。因為我是人，可能有很深很深的缺陷。</p><p>異步程序的主要問題是：</p><pre><code>* 數據如何進來？
* 數據如何出去？
* 什麼時候可以在不佔用我全部注意力情況下運行某個過程？
</code></pre>`,22)),a("p",null,[s[10]||(s[10]=n("由於",-1)),e(p,{href:"https://realpython.com/python-gil/"},{default:o(()=>[...s[8]||(s[8]=[n("全局解釋器鎖",-1)])]),_:1}),s[11]||(s[11]=n("（GIL），Python 被設計為一種",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Thread_(computing)"},{default:o(()=>[...s[9]||(s[9]=[n("單線程",-1)])]),_:1}),s[12]||(s[12]=n("語言。對於 Python 程序必須執行的每個任務，其線程執行的全部注意力都集中在該任務的持續時間內。我們的 HTTP 服務器是用 Python 編寫的，因此，當接收到數據（如 HTTP 請求）時，服務器的唯一關心的是傳入的數據。這意味着，在大多數情況下，無論是程序需要運行還是處理數據，程序都將完全消耗服務器的執行線程，阻止接收其它可能的數據，直到服務器完成它需要做的事情。",-1))]),a("p",null,[s[14]||(s[14]=n("在許多情況下，這不是太成問題。典型的 Web 請求，響應週期只需要幾分之一秒。除此之外，構建 HTTP 服務器的套接字可以維護待處理的傳入請求的積壓。因此，如果請求在該套接字處理其它內容時進入，則它很可能只是在處理之前稍微排隊等待一會。對於低到中等流量的站點，幾分之一秒的時間並不是什麼大問題，你可以使用多個部署的實例以及 ",-1)),e(p,{href:"https://www.nginx.com/"},{default:o(()=>[...s[13]||(s[13]=[n("NGINX",-1)])]),_:1}),s[15]||(s[15]=n(" 等負載均衡器來為更大的請求負載分配流量。",-1))]),s[75]||(s[75]=t(`<p>但是，如果你的平均響應時間超過一秒鐘，該怎麼辦？如果你使用來自傳入請求的數據來啓動一些長時間的過程（如機器學習算法或某些海量資料庫查詢），該怎麼辦？現在，你的單線程 Web 服務器開始累積一個無法尋址的積壓請求，其中一些請求會因為超時而被丟棄。這不是一種選擇，特別是如果你希望你的服務在一段時間內是可靠的。</p><p>異步 Python 程序登場。重要的是要記住因為它是用 Python 編寫的，所以程序仍然是一個單線程進程。除非特別標記，否則在異步程序中仍然會阻塞執行。</p><p>但是，當異步程序結構正確時，只要你指定某個函數應該具有這樣的能力，你的異步 Python 程序就可以“擱置”長時間運行的任務。然後，當擱置的任務完成並準備好恢復時，異步控制器會收到報告，只要在需要時管理它們的執行，而不會完全阻塞對新輸入的處理。</p><p>這有點誇張，所以讓我們用一個人類的例子來證明。</p><h3 id="帶回家吧" tabindex="-1">帶回家吧 <a class="header-anchor" href="#帶回家吧" aria-label="Permalink to “帶回家吧”">​</a></h3><p>我經常發現自己在家裏試圖完成很多家務，但沒有多少時間來做它們。在某一天，積壓的家務可能看起來像：</p><pre><code>* 做飯（20 分鐘準備，40 分鐘烹飪）
* 洗碗（60 分鐘）
* 洗滌並擦乾衣物（30 分鐘洗滌，每次乾燥 90 分鐘）
* 真空清洗地板（30 分鐘）
</code></pre><p>如果我是一個傳統的同步程序，我會親自完成每項任務。在我考慮處理任何其他事情之前，每項任務都需要我全神貫注地完成。因為如果沒有我的全力關注，什麼事情都完成不了。所以我的執行順序可能如下：</p><pre><code>1. 完全專注於準備和烹飪食物，包括等待食物烹飪（60 分鐘）
2. 將髒盤子移到水槽中（65 分鐘過去了）
3. 清洗所有盤子（125 分鐘過去了）
4. 開始完全專注於洗衣服，包括等待洗衣機洗完，然後將衣物轉移到烘乾機，再等烘乾機完成（ 250 分鐘過去了）
5. 對地板進行真空吸塵（280 分鐘了）
</code></pre><p>從頭到尾完成所有事情花費了 4 小時 40 分鐘。</p><p>我應該像異步程序一樣聰明地工作，而不是努力工作。我的家裏到處都是可以為我工作的機器，而不用我一直努力工作。同時，現在我可以將注意力轉移真正需要的東西上。</p><p>我的執行順序可能看起來像：</p><pre><code>1. 將衣物放入洗衣機並啓動它（5 分鐘）
2. 在洗衣機運行時，準備食物（25 分鐘過去了）
3. 準備好食物後，開始烹飪食物（30 分鐘過去了）
4. 在烹飪食物時，將衣物從洗衣機移到烘乾機機中開始烘乾（35 分鐘過去了）
5. 當烘乾機運行中，且食物仍在烹飪時，對地板進行真空吸塵（65 分鐘過去了）
6. 吸塵後，將食物從爐子中取出並裝盤子入洗碗機（70 分鐘過去了）
7. 運行洗碗機（130 分鐘完成）
</code></pre><p>現在花費的時間下降到 2 小時 10 分鐘。即使我允許在作業之間切換花費更多時間（總共 10-20 分鐘）。如果我等待着按順序執行每項任務，我花費的時間仍然只有一半左右。這就是將程序構造為異步的強大功能。</p><h4 id="那麼-i-o-循環在哪裏" tabindex="-1">那麼 I/O 循環在哪裏？ <a class="header-anchor" href="#那麼-i-o-循環在哪裏" aria-label="Permalink to “那麼 I/O 循環在哪裏？”">​</a></h4><p>一個異步 Python 程序的工作方式是從某個外部源（輸入）獲取數據，如果某個進程需要，則將該數據轉移到某個外部工作者（輸出）進行處理。當外部進程完成時，Python 主程序會收到提醒，然後程序獲取外部處理（輸入）的結果，並繼續這樣其樂融融的方式。</p><p>當數據不在 Python 主程序手中時，主程序就會被釋放來處理其它任何事情。包括等待全新的輸入（如 HTTP 請求）和處理長時間運行的進程的結果（如機器學習算法的結果，長時間運行的資料庫查詢）。主程序雖仍然是單線程的，但成了事件驅動的，它對程序處理的特定事件會觸發動作。監聽這些事件並指示應如何處理它們的主要是 I/O 循環在工作。</p><p>我知道，我們走了很長的路才得到這個重要的解釋，但我希望在這裏傳達的是，它不是魔術，也不是某種複雜的並行處理或多線程工作。全局解釋器鎖仍然存在，主程序中任何長時間運行的進程仍然會阻塞其它任何事情的進行，該程序仍然是單線程的。然而，通過將繁瑣的工作外部化，我們可以將線程的注意力集中在它需要注意的地方。</p><p>這有點像我上面的異步任務。當我的注意力完全集中在準備食物上時，它就是我所能做的一切。然而，當我能讓爐子幫我做飯，洗碗機幫我洗碗，洗衣機和烘乾機幫我洗衣服時，我的注意力就會被釋放出來，去做其它事情。當我被提醒，我的一個長時間運行的任務已經完成並準備再次處理時，如果我的注意力是空閒的，我可以獲取該任務的結果，並對其做下一步需要做的任何事情。</p><h3 id="tornado-路由和視圖" tabindex="-1">Tornado 路由和視圖 <a class="header-anchor" href="#tornado-路由和視圖" aria-label="Permalink to “Tornado 路由和視圖”">​</a></h3><p>儘管經歷了在 Python 中討論異步的所有麻煩，我們還是決定暫不使用它。先來編寫一個基本的 Tornado 視圖。</p><p>與我們在 Flask 和 Pyramid 實現中看到的基於函數的視圖不同，Tornado 的視圖都是基於類的。這意味着我們將不在使用單獨的、獨立的函數來規定如何處理請求。相反，傳入的 HTTP 請求將被捕獲並將其分配為我們定義的類的一個屬性。然後，它的方法將處理相應的請求類型。</p><p>讓我們從一個基本的視圖開始，即在屏幕上打印 “Hello, World”。我們為 Tornado 應用程序構造的每個基於類的視圖都必須繼承 <code>tornado.web</code> 中的 <code>RequestHandler</code> 對象。這將設置我們需要（但不想寫）的所有底層邏輯來接收請求，同時構造正確格式的 HTTP 響應。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class HelloWorld(RequestHandler):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Print &#39;Hello, world!&#39; as the response body.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Handle a GET request for saying Hello World!.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.write(&quot;Hello, world!&quot;)</span></span></code></pre></div><p>因為我們要處理 <code>GET</code> 請求，所以我們聲明（實際上是重寫）了 <code>get</code> 方法。我們提供文本或 JSON 可序列化對象，用 <code>self.write</code> 寫入響應體。之後，我們讓 <code>RequestHandler</code> 來做在發送響應之前必須完成的其它工作。</p><p>就目前而言，此視圖與 Tornado 應用程序本身並沒有實際連接。我們必須回到 <code>__init__.py</code>，並稍微更新 <code>main</code> 函數。以下是新的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.httpserver import HTTPServer</span></span>
<span class="line"><span>from tornado.ioloop import IOLoop</span></span>
<span class="line"><span>from tornado.options import define, options</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span>from todo.views import HelloWorld</span></span>
<span class="line"><span></span></span>
<span class="line"><span>define(&#39;port&#39;, default=8888, help=&#39;port to listen on&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application([</span></span>
<span class="line"><span>        (&#39;/&#39;, HelloWorld)</span></span>
<span class="line"><span>    ])</span></span>
<span class="line"><span>    http_server = HTTPServer(app)</span></span>
<span class="line"><span>    http_server.listen(options.port)</span></span>
<span class="line"><span>    print(&#39;Listening on http://localhost:%i&#39; % options.port)</span></span>
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><h4 id="我們做了什麼" tabindex="-1">我們做了什麼 <a class="header-anchor" href="#我們做了什麼" aria-label="Permalink to “我們做了什麼”">​</a></h4><p>我們將 <code>views.py</code> 文件中的 <code>HelloWorld</code> 視圖導入到腳本 <code>__init__.py</code> 的頂部。然後我們添加了一個路由-視圖對應的列表，作為 <code>Application</code> 實例化的第一個參數。每當我們想要在應用程序中聲明一個路由時，它必須綁定到一個視圖。如果需要，可以對多個路由使用相同的視圖，但每個路由必須有一個視圖。</p><p>我們可以通過在 <code>setup.py</code> 中啓用的 <code>serve_app</code> 命令來運行應用程序，從而確保這一切都能正常工作。查看 <code>http://localhost:8888/</code> 並看到它顯示 “Hello, world!”。</p><p>當然，在這個領域中我們還能做更多，也將做更多，但現在讓我們來討論模型吧。</p><h3 id="連接資料庫" tabindex="-1">連接資料庫 <a class="header-anchor" href="#連接資料庫" aria-label="Permalink to “連接資料庫”">​</a></h3>`,32)),a("p",null,[s[17]||(s[17]=n("如果我們想要保留數據，就需要連接資料庫。與 Flask 一樣，我們將使用一個特定於框架的 SQLAchemy 變體，名為 ",-1)),e(p,{href:"https://tornado-sqlalchemy.readthedocs.io/en/latest/"},{default:o(()=>[...s[16]||(s[16]=[n("tornado-sqlalchemy",-1)])]),_:1}),s[18]||(s[18]=n("。",-1))]),a("p",null,[s[20]||(s[20]=n("為什麼要使用它而不是 ",-1)),e(p,{href:"https://www.sqlalchemy.org/"},{default:o(()=>[...s[19]||(s[19]=[n("SQLAlchemy",-1)])]),_:1}),s[21]||(s[21]=n(" 呢？好吧，其實 ",-1)),s[22]||(s[22]=a("code",null,"tornado-sqlalchemy",-1)),s[23]||(s[23]=n(" 具有簡單 SQLAlchemy 的所有優點，因此我們仍然可以使用通用的 ",-1)),s[24]||(s[24]=a("code",null,"Base",-1)),s[25]||(s[25]=n(" 聲明模型，並使用我們習以為常的所有列數據類型和關係。除了我們已經慣常瞭解到的，",-1)),s[26]||(s[26]=a("code",null,"tornado-sqlalchemy",-1)),s[27]||(s[27]=n(" 還為其資料庫查詢功能提供了一種可訪問的異步模式，專門用於與 Tornado 現有的 I/O 循環一起工作。",-1))]),s[76]||(s[76]=t(`<p>我們通過將 <code>tornado-sqlalchemy</code> 和 <code>psycopg2</code> 添加到 <code>setup.py</code> 到所需包的列表並重新安裝包來創建環境。在 <code>models.py</code> 中，我們聲明瞭模型。這一步看起來與我們在 Flask 和 Pyramid 中已經看到的完全一樣，所以我將跳過全部聲明，只列出了 <code>Task</code> 模型的必要部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 這不是完整的 models.py, 但是足夠看到不同點</span></span>
<span class="line"><span>from tornado_sqlalchemy import declarative_base</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Base = declarative_base</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Task(Base):</span></span>
<span class="line"><span>    # 等等，因為剩下的幾乎所有的東西都一樣 ...</span></span></code></pre></div><p>我們仍然需要將 <code>tornado-sqlalchemy</code> 連接到實際應用程序。在 <code>__init__.py</code> 中，我們將定義資料庫並將其集成到應用程序中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.httpserver import HTTPServer</span></span>
<span class="line"><span>from tornado.ioloop import IOLoop</span></span>
<span class="line"><span>from tornado.options import define, options</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span>from todo.views import HelloWorld</span></span>
<span class="line"><span></span></span>
<span class="line"><span># add these</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>from tornado_sqlalchemy import make_session_factory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>define(&#39;port&#39;, default=8888, help=&#39;port to listen on&#39;)</span></span>
<span class="line"><span>factory = make_session_factory(os.environ.get(&#39;DATABASE_URL&#39;, &#39;&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application([</span></span>
<span class="line"><span>        (&#39;/&#39;, HelloWorld)</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>        session_factory=factory</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    http_server = HTTPServer(app)</span></span>
<span class="line"><span>    http_server.listen(options.port)</span></span>
<span class="line"><span>    print(&#39;Listening on http://localhost:%i&#39; % options.port)</span></span>
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><p>就像我們在 Pyramid 中傳遞的會話工廠一樣，我們可以使用 <code>make_session_factory</code> 來接收資料庫 URL 並生成一個對象，這個對象的唯一目的是為視圖提供到資料庫的連接。然後我們將新創建的 <code>factory</code> 傳遞給 <code>Application</code> 對象，並使用 <code>session_factory</code> 關鍵字參數將它綁定到應用程序中。</p><p>最後，初始化和管理資料庫與 Flask 和 Pyramid 相同（即，單獨的 DB 管理腳本，與 <code>Base</code> 對象一起工作等）。它看起來很相似，所以在這裏我就不介紹了。</p><h3 id="回顧視圖" tabindex="-1">回顧視圖 <a class="header-anchor" href="#回顧視圖" aria-label="Permalink to “回顧視圖”">​</a></h3><p>Hello，World 總是適合學習基礎知識，但我們需要一些真實的，特定應用程序的視圖。</p><p>讓我們從 info 視圖開始。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class InfoView(RequestHandler):</span></span>
<span class="line"><span>    &quot;&quot;&quot;只允許 GET 請求&quot;&quot;&quot;</span></span>
<span class="line"><span>    SUPPORTED_METHODS = [&quot;GET&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_default_headers(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;設置默認響應頭為 json 格式的&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_header(&quot;Content-Type&quot;, &#39;application/json; charset=&quot;utf-8&quot;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;列出這個 API 的路由&quot;&quot;&quot;</span></span>
<span class="line"><span>        routes = {</span></span>
<span class="line"><span>            &#39;info&#39;: &#39;GET /api/v1&#39;,</span></span>
<span class="line"><span>            &#39;register&#39;: &#39;POST /api/v1/accounts&#39;,</span></span>
<span class="line"><span>            &#39;single profile detail&#39;: &#39;GET /api/v1/accounts/&lt;username&gt;&#39;,</span></span>
<span class="line"><span>            &#39;edit profile&#39;: &#39;PUT /api/v1/accounts/&lt;username&gt;&#39;,</span></span>
<span class="line"><span>            &#39;delete profile&#39;: &#39;DELETE /api/v1/accounts/&lt;username&gt;&#39;,</span></span>
<span class="line"><span>            &#39;login&#39;: &#39;POST /api/v1/accounts/login&#39;,</span></span>
<span class="line"><span>            &#39;logout&#39;: &#39;GET /api/v1/accounts/logout&#39;,</span></span>
<span class="line"><span>            &quot;user&#39;s tasks&quot;: &#39;GET /api/v1/accounts/&lt;username&gt;/tasks&#39;,</span></span>
<span class="line"><span>            &quot;create task&quot;: &#39;POST /api/v1/accounts/&lt;username&gt;/tasks&#39;,</span></span>
<span class="line"><span>            &quot;task detail&quot;: &#39;GET /api/v1/accounts/&lt;username&gt;/tasks/&lt;id&gt;&#39;,</span></span>
<span class="line"><span>            &quot;task update&quot;: &#39;PUT /api/v1/accounts/&lt;username&gt;/tasks/&lt;id&gt;&#39;,</span></span>
<span class="line"><span>            &quot;delete task&quot;: &#39;DELETE /api/v1/accounts/&lt;username&gt;/tasks/&lt;id&gt;&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        self.write(json.dumps(routes))</span></span></code></pre></div><p>有什麼改變嗎？讓我們從上往下看。</p>`,11)),a("p",null,[s[29]||(s[29]=n("我們添加了 ",-1)),s[30]||(s[30]=a("code",null,"SUPPORTED_METHODS",-1)),s[31]||(s[31]=n(" 類屬性，它是一個可迭代對象，代表這個視圖所接受的請求方法，其他任何方法都將返回一個 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors"},{default:o(()=>[...s[28]||(s[28]=[n("405",-1)])]),_:1}),s[32]||(s[32]=n(" 狀態碼。當我們創建 ",-1)),s[33]||(s[33]=a("code",null,"HelloWorld",-1)),s[34]||(s[34]=n(" 視圖時，我們沒有指定它，主要是當時有點懶。如果沒有這個類屬性，此視圖將響應任何試圖綁定到該視圖的路由的請求。",-1))]),s[77]||(s[77]=t(`<p>我們聲明瞭 <code>set_default_headers</code> 方法，它設置 HTTP 響應的默認頭。我們在這裏聲明它，以確保我們返回的任何響應都有一個 <code>&quot;Content-Type&quot;</code> 是 <code>&quot;application/json&quot;</code> 類型。</p><p>我們將 <code>json.dumps(some_object)</code> 添加到 <code>self.write</code> 的參數中，因為它可以很容易地構建響應主體的內容。</p><p>現在已經完成了，我們可以繼續將它連接到 <code>__init__.py</code> 中的主路由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.httpserver import HTTPServer</span></span>
<span class="line"><span>from tornado.ioloop import IOLoop</span></span>
<span class="line"><span>from tornado.options import define, options</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span>from todo.views import InfoView</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加這些</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>from tornado_sqlalchemy import make_session_factory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>define(&#39;port&#39;, default=8888, help=&#39;port to listen on&#39;)</span></span>
<span class="line"><span>factory = make_session_factory(os.environ.get(&#39;DATABASE_URL&#39;, &#39;&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application([</span></span>
<span class="line"><span>        (&#39;/&#39;, InfoView)</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>        session_factory=factory</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    http_server = HTTPServer(app)</span></span>
<span class="line"><span>    http_server.listen(options.port)</span></span>
<span class="line"><span>    print(&#39;Listening on http://localhost:%i&#39; % options.port)</span></span>
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><p>我們知道，還需要編寫更多的視圖和路由。每個都會根據需要放入 <code>Application</code> 路由列表中，每個視圖還需要一個 <code>set_default_headers</code> 方法。在此基礎上，我們還將創建 <code>send_response</code> 方法，它的作用是將響應與我們想要給響應設置的任何自定義狀態碼打包在一起。由於每個視圖都需要這兩個方法，因此我們可以創建一個包含它們的基類，這樣每個視圖都可以繼承基類。這樣，我們只需要編寫一次。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BaseView(RequestHandler):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Base view for this application.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_default_headers(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Set the default response header to be JSON.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_header(&quot;Content-Type&quot;, &#39;application/json; charset=&quot;utf-8&quot;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def send_response(self, data, status=200):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Construct and send a JSON response with appropriate status code.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_status(status)</span></span>
<span class="line"><span>        self.write(json.dumps(data))</span></span></code></pre></div><p>對於我們即將編寫的 <code>TaskListView</code> 這樣的視圖，我們還需要一個到資料庫的連接。我們需要 <code>tornado_sqlalchemy</code> 中的 <code>SessionMixin</code> 在每個視圖類中添加一個數據庫會話。我們可以將它放在 <code>BaseView</code> 中，這樣，默認情況下，從它繼承的每個視圖都可以訪問資料庫會話。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from tornado_sqlalchemy import SessionMixin</span></span>
<span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BaseView(RequestHandler, SessionMixin):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Base view for this application.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_default_headers(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Set the default response header to be JSON.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_header(&quot;Content-Type&quot;, &#39;application/json; charset=&quot;utf-8&quot;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def send_response(self, data, status=200):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Construct and send a JSON response with appropriate status code.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_status(status)</span></span>
<span class="line"><span>        self.write(json.dumps(data))</span></span></code></pre></div><p>只要我們修改 <code>BaseView</code> 對象，在將數據發佈到這個 API 時，我們就應該定位到這裏。</p><p>當 Tornado（從 v.4.5 開始）使用來自客户端的數據並將其組織起來到應用程序中使用時，它會將所有傳入數據視為字節串。但是，這裏的所有代碼都假設使用 Python 3，因此我們希望使用的唯一字符串是 Unicode 字符串。我們可以為這個 <code>BaseView</code> 類添加另一個方法，它的工作是將輸入數據轉換為 Unicode，然後再在視圖的其他地方使用。</p><p>如果我們想要在正確的視圖方法中使用它之前轉換這些數據，我們可以重寫視圖類的原生 <code>prepare</code> 方法。它的工作是在視圖方法運行前運行。如果我們重寫 <code>prepare</code> 方法，我們可以設置一些邏輯來運行，每當收到請求時，這些邏輯就會執行字節串到 Unicode 的轉換。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from tornado_sqlalchemy import SessionMixin</span></span>
<span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BaseView(RequestHandler, SessionMixin):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Base view for this application.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def prepare(self):</span></span>
<span class="line"><span>        self.form_data = {</span></span>
<span class="line"><span>            key: [val.decode(&#39;utf8&#39;) for val in val_list]</span></span>
<span class="line"><span>            for key, val_list in self.request.arguments.items()</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_default_headers(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Set the default response header to be JSON.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_header(&quot;Content-Type&quot;, &#39;application/json; charset=&quot;utf-8&quot;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def send_response(self, data, status=200):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Construct and send a JSON response with appropriate status code.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_status(status)</span></span>
<span class="line"><span>        self.write(json.dumps(data))</span></span></code></pre></div><p>如果有任何數據進入，它將在 <code>self.request.arguments</code> 字典中找到。我們可以通過鍵訪問該資料庫，並將其內容（始終是列表）轉換為 Unicode。因為這是基於類的視圖而不是基於函數的，所以我們可以將修改後的數據存儲為一個實例屬性，以便以後使用。我在這裏稱它為 <code>form_data</code>，但它也可以被稱為 <code>potato</code>。關鍵是我們可以存儲提交給應用程序的數據。</p><h3 id="異步視圖方法" tabindex="-1">異步視圖方法 <a class="header-anchor" href="#異步視圖方法" aria-label="Permalink to “異步視圖方法”">​</a></h3><p>現在我們已經構建了 <code>BaseaView</code>，我們可以構建 <code>TaskListView</code> 了，它會繼承 <code>BaseaView</code>。</p><p>正如你可以從章節標題中看到的那樣，以下是所有關於異步性的討論。<code>TaskListView</code> 將處理返回任務列表的 <code>GET</code> 請求和用户給定一些表單數據來創建新任務的 <code>POST</code> 請求。讓我們首先來看看處理 <code>GET</code> 請求的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># all the previous imports</span></span>
<span class="line"><span>import datetime</span></span>
<span class="line"><span>from tornado.gen import coroutine</span></span>
<span class="line"><span>from tornado_sqlalchemy import as_future</span></span>
<span class="line"><span>from todo.models import Profile, Task</span></span>
<span class="line"><span></span></span>
<span class="line"><span># the BaseView is above here</span></span>
<span class="line"><span>class TaskListView(BaseView):</span></span>
<span class="line"><span>    &quot;&quot;&quot;View for reading and adding new tasks.&quot;&quot;&quot;</span></span>
<span class="line"><span>    SUPPORTED_METHODS = (&quot;GET&quot;, &quot;POST&quot;,)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @coroutine</span></span>
<span class="line"><span>    def get(self, username):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Get all tasks for an existing user.&quot;&quot;&quot;</span></span>
<span class="line"><span>        with self.make_session() as session:</span></span>
<span class="line"><span>            profile = yield as_future(session.query(Profile).filter(Profile.username == username).first)</span></span>
<span class="line"><span>            if profile:</span></span>
<span class="line"><span>                tasks = [task.to_dict() for task in profile.tasks]</span></span>
<span class="line"><span>                self.send_response({</span></span>
<span class="line"><span>                    &#39;username&#39;: profile.username,</span></span>
<span class="line"><span>                    &#39;tasks&#39;: tasks</span></span>
<span class="line"><span>                })</span></span></code></pre></div><p>這裏的第一個主要部分是 <code>@coroutine</code> 裝飾器，它從 <code>tornado.gen</code> 導入。任何具有與調用堆棧的正常流程不同步的 Python 可調用部分實際上是“協程”，即一個可以與其它協程一起運行的協程。在我的家務勞動的例子中，幾乎所有的家務活都是一個共同的例行協程。有些阻止了例行協程（例如，給地板吸塵），但這種例行協程只會阻礙我開始或關心其它任何事情的能力。它沒有阻止已經啓動的任何其他協程繼續進行。</p><p>Tornado 提供了許多方法來構建一個利用協程的應用程序，包括允許我們設置函數調用鎖，同步異步協程的條件，以及手動修改控制 I/O 循環的事件系統。</p><p>這裏使用 <code>@coroutine</code> 裝飾器的唯一條件是允許 <code>get</code> 方法將 SQL 查詢作為後台進程，並在查詢完成後恢復，同時不阻止 Tornado I/O 循環去處理其他傳入的數據源。這就是關於此實現的所有“異步”：帶外資料庫查詢。顯然，如果我們想要展示異步 Web 應用程序的魔力和神奇，那麼一個任務列表就不是好的展示方式。</p><p>但是，這就是我們正在構建的，所以讓我們來看看方法如何利用 <code>@coroutine</code> 裝飾器。<code>SessionMixin</code> 混合到 <code>BaseView</code> 聲明中，為我們的視圖類添加了兩個方便的，支持資料庫的屬性：<code>session</code> 和 <code>make_session</code>。它們的名字相似，實現的目標也相當相似。</p><p><code>self.session</code> 屬性是一個關注資料庫的會話。在請求-響應週期結束時，在視圖將響應發送回客户端之前，任何對資料庫的更改都被提交，並關閉會話。</p><p><code>self.make_session</code> 是一個上下文管理器和生成器，可以動態構建和返回一個全新的會話對象。第一個 <code>self.session</code> 對象仍然存在。無論如何，反正 <code>make_session</code> 會創建一個新的。<code>make_session</code> 生成器還為其自身提供了一個功能，用於在其上下文（即縮進級別）結束時提交和關閉它創建的會話。</p><p>如果你查看源代碼，則賦值給 <code>self.session</code> 的對象類型與 <code>self.make_session</code> 生成的對象類型之間沒有區別，不同之處在於它們是如何被管理的。</p><p>使用 <code>make_session</code> 上下文管理器，生成的會話僅屬於上下文，在該上下文中開始和結束。你可以使用 <code>make_session</code> 上下文管理器在同一個視圖中打開，修改，提交以及關閉多個數據庫會話。</p><p><code>self.session</code> 要簡單得多，當你進入視圖方法時會話已經打開，在響應被髮送回客户端之前會話就已提交。</p>`,26)),a("p",null,[s[37]||(s[37]=n("雖然",-1)),e(p,{href:"https://tornado-sqlalchemy.readthedocs.io/en/latest/#usage"},{default:o(()=>[...s[35]||(s[35]=[n("讀取文檔片段",-1)])]),_:1}),s[38]||(s[38]=n("和 ",-1)),e(p,{href:"https://pypi.org/project/tornado-sqlalchemy/#description"},{default:o(()=>[...s[36]||(s[36]=[n("PyPI 示例",-1)])]),_:1}),s[39]||(s[39]=n("都説明了上下文管理器的使用，但是沒有説明 ",-1)),s[40]||(s[40]=a("code",null,"self.session",-1)),s[41]||(s[41]=n(" 對象或由 ",-1)),s[42]||(s[42]=a("code",null,"self.make_session",-1)),s[43]||(s[43]=n(" 生成的 ",-1)),s[44]||(s[44]=a("code",null,"session",-1)),s[45]||(s[45]=n(" 本質上是不是異步的。當我們啓動查詢時，我們開始考慮內置於 ",-1)),s[46]||(s[46]=a("code",null,"tornado-sqlalchemy",-1)),s[47]||(s[47]=n(" 中的異步行為。",-1))]),s[78]||(s[78]=t(`<p><code>tornado-sqlalchemy</code> 包為我們提供了 <code>as_future</code> 函數。它的工作是裝飾 <code>tornado-sqlalchemy</code> 會話構造的查詢並 yield 其返回值。如果視圖方法用 <code>@coroutine</code> 裝飾，那麼使用 <code>yield as_future(query)</code> 模式將使封裝的查詢成為一個異步後台進程。I/O 循環會接管等待查詢的返回值和 <code>as_future</code> 創建的 <code>future</code> 對象的解析。</p><p>要訪問 <code>as_future（query）</code> 的結果，你必須從它 <code>yield</code>。否則，你只能獲得一個未解析的生成器對象，並且無法對查詢執行任何操作。</p><p>這個視圖方法中的其他所有內容都與之前課堂上的類似，與我們在 Flask 和 Pyramid 中看到的內容類似。</p><p><code>post</code> 方法看起來非常相似。為了保持一致性，讓我們看一下 <code>post</code> 方法以及它如何處理用 <code>BaseView</code> 構造的 <code>self.form_data</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@coroutine</span></span>
<span class="line"><span>def post(self, username):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Create a new task.&quot;&quot;&quot;</span></span>
<span class="line"><span>    with self.make_session() as session:</span></span>
<span class="line"><span>        profile = yield as_future(session.query(Profile).filter(Profile.username == username).first)</span></span>
<span class="line"><span>        if profile:</span></span>
<span class="line"><span>            due_date = self.form_data[&#39;due_date&#39;][0]</span></span>
<span class="line"><span>            task = Task(</span></span>
<span class="line"><span>                name=self.form_data[&#39;name&#39;][0],</span></span>
<span class="line"><span>                note=self.form_data[&#39;note&#39;][0],</span></span>
<span class="line"><span>                creation_date=datetime.now(),</span></span>
<span class="line"><span>                due_date=datetime.strptime(due_date, &#39;%d/%m/%Y %H:%M:%S&#39;) if due_date else None,</span></span>
<span class="line"><span>                completed=self.form_data[&#39;completed&#39;][0],</span></span>
<span class="line"><span>                profile_id=profile.id,</span></span>
<span class="line"><span>                profile=profile</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>            session.add(task)</span></span>
<span class="line"><span>            self.send_response({&#39;msg&#39;: &#39;posted&#39;}, status=201)</span></span></code></pre></div><p>正如我所説，這是我們所期望的：</p><p>* 與我們在 <code>get</code> 方法中看到的查詢模式相同   * 構造一個新的 <code>Task</code> 對象的實例，用 <code>form_data</code> 的數據填充   * 添加新的 <code>Task</code> 對象（但不提交，因為它由上下文管理器處理！）到資料庫會話   * 將響應發送給客户端</p><p>這樣我們就有了 Tornado web 應用程序的基礎。其他內容（例如，資料庫管理和更多完整應用程序的視圖）實際上與我們在 Flask 和 Pyramid 應用程序中看到的相同。</p><h3 id="關於使用合適的工具完成合適的工作的一點想法" tabindex="-1">關於使用合適的工具完成合適的工作的一點想法 <a class="header-anchor" href="#關於使用合適的工具完成合適的工作的一點想法" aria-label="Permalink to “關於使用合適的工具完成合適的工作的一點想法”">​</a></h3><p>在我們繼續瀏覽這些 Web 框架時，我們開始看到它們都可以有效地處理相同的問題。對於像這樣的待辦事項列表，任何框架都可以完成這項任務。但是，有些 Web 框架比其它框架更適合某些工作，這具體取決於對你來説什麼“更合適”和你的需求。</p><p>雖然 Tornado 顯然和 Pyramid 或 Flask 一樣可以處理相同工作，但將它用於這樣的應用程序實際上是一種浪費，這就像開車從家走一個街區（LCTT 譯註：這裏意思應該是從家開始走一個街區只需步行即可）。是的，它可以完成“旅行”的工作，但短途旅行不是你選擇汽車而不是自行車或者使用雙腳的原因。</p><p>根據文檔，Tornado 被稱為 “Python Web 框架和異步網絡庫”。在 Python Web 框架生態系統中很少有人喜歡它。如果你嘗試完成的工作需要（或將從中獲益）以任何方式、形狀或形式的異步性，使用 Tornado。如果你的應用程序需要處理多個長期連接，同時又不想犧牲太多性能，選擇 Tornado。如果你的應用程序是多個應用程序，並且需要線程感知以準確處理數據，使用 Tornado。這是它最有效的地方。</p><p>用你的汽車做“汽車的事情”，使用其他交通工具做其他事情。</p><h3 id="向前看-進行一些深度檢查" tabindex="-1">向前看，進行一些深度檢查 <a class="header-anchor" href="#向前看-進行一些深度檢查" aria-label="Permalink to “向前看，進行一些深度檢查”">​</a></h3><p>談到使用合適的工具來完成合適的工作，在選擇框架時，請記住應用程序的範圍和規模，包括現在和未來。到目前為止，我們只研究了適用於中小型 Web 應用程序的框架。本系列的下一篇也是最後一篇將介紹最受歡迎的 Python 框架之一 Django，它適用於可能會變得更大的大型應用程序。同樣，儘管它在技術上能夠並且將會處理待辦事項列表問題，但請記住，這不是它的真正用途。我們仍然會通過它來展示如何使用它來構建應用程序，但我們必須牢記框架的意圖以及它是如何反映在架構中的：</p><ul><li><strong>Flask</strong>： 適用於小型，簡單的項目。它可以使我們輕鬆地構建視圖並將它們快速連接到路由，它可以簡單地封裝在一個文件中。</li><li><strong>Pyramid</strong>： 適用於可能增長的項目。它包含一些配置來啓動和運行。應用程序組件的獨立領域可以很容易地劃分並構建到任意深度，而不會忽略中央應用程序。</li><li><strong>Tornado</strong>： 適用於受益於精確和有意識的 I/O 控制的項目。它允許協程，並輕鬆公開可以控制如何接收請求或發送響應以及何時發生這些操作的方法。</li><li><strong>Django</strong>：（我們將會看到）意味着可能會變得更大的東西。它有着非常龐大的生態系統，包括大量插件和模組。它非常有主見的配置和管理，以保持所有不同部分在同一條線上。</li></ul><p>無論你是從本系列的第一篇文章開始閲讀，還是稍後才加入的，都要感謝閲讀！請隨意留下問題或意見。下次再見時，我手裏會拿着 Django。</p><h3 id="感謝-python-bdfl" tabindex="-1">感謝 Python BDFL <a class="header-anchor" href="#感謝-python-bdfl" aria-label="Permalink to “感謝 Python BDFL”">​</a></h3>`,18)),a("p",null,[s[49]||(s[49]=n("我必須把功勞歸於它應得的地方，非常感謝 ",-1)),e(p,{href:"https://www.twitter.com/gvanrossum"},{default:o(()=>[...s[48]||(s[48]=[n("Guido van Rossum",-1)])]),_:1}),s[50]||(s[50]=n("，不僅僅是因為他創造了我最喜歡的編程語言。",-1))]),a("p",null,[s[53]||(s[53]=n("在 ",-1)),e(p,{href:"https://www.pycascades.com"},{default:o(()=>[...s[51]||(s[51]=[n("PyCascades 2018",-1)])]),_:1}),s[54]||(s[54]=n(" 期間，我很幸運的不僅做了基於這個文章系列的演講，而且還被邀請參加了演講者的晚宴。整個晚上我都坐在 Guido 旁邊，不停地問他問題。其中一個問題是，在 Python 中異步到底是如何工作的，但他沒有一點大驚小怪，而是花時間向我解釋，讓我開始理解這個概念。他後來",-1)),e(p,{href:"https://twitter.com/gvanrossum/status/956186585493458944"},{default:o(()=>[...s[52]||(s[52]=[n("推特給我",-1)])]),_:1}),s[55]||(s[55]=n("發了一條消息：是用於學習異步 Python 的廣闊資源。我隨後在三個月內閲讀了三次，然後寫了這篇文章。你真是一個非常棒的人，Guido！",-1))]),s[79]||(s[79]=a("hr",null,null,-1)),a("p",null,[s[57]||(s[57]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/6/tornado-framework"},{default:o(()=>[...s[56]||(s[56]=[n("https://opensource.com/article/18/6/tornado-framework",-1)])]),_:1})]),a("p",null,[s[62]||(s[62]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/nhuntwalker"},{default:o(()=>[...s[58]||(s[58]=[n("Nicholas Hunt-Walker",-1)])]),_:1}),s[63]||(s[63]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:o(()=>[...s[59]||(s[59]=[n("lujun9972",-1)])]),_:1}),s[64]||(s[64]=n(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:o(()=>[...s[60]||(s[60]=[n("MjSeven",-1)])]),_:1}),s[65]||(s[65]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:o(()=>[...s[61]||(s[61]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[68]||(s[68]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...s[66]||(s[66]=[n("LCTT",-1)])]),_:1}),s[69]||(s[69]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:o(()=>[...s[67]||(s[67]=[n("Linux中國",-1)])]),_:1}),s[70]||(s[70]=n(" 榮譽推出",-1))])])}const T=l(c,[["render",u]]);export{y as __pageData,T as default};
