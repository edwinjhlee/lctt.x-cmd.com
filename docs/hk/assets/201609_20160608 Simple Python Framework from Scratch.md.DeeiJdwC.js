import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as p,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"從零構建一個簡單的 Python 框架 | LCTT x X-CMD","titleTemplate":false,"description":"從零構建一個簡單的 Python 框架 | LCTT (201609) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從零構建一個簡單的 Python 框架 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從零構建一個簡單的 Python 框架 | LCTT (201609) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201609/20160608 Simple Python Framework from Scratch","title":"從零構建一個簡單的 Python 框架","tag":"201609","desc":""},"relativePath":"201609/20160608 Simple Python Framework from Scratch.md","filePath":"[post].md"}'),u={name:"201609/20160608 Simple Python Framework from Scratch.md"};function f(c,s,g,b,m,h){const e=o("Link");return r(),d("div",null,[s[120]||(s[120]=a("h1",{id:"從零構建一個簡單的-python-框架",tabindex:"-1"},[n("從零構建一個簡單的 Python 框架 "),a("a",{class:"header-anchor",href:"#從零構建一個簡單的-python-框架","aria-label":"Permalink to “從零構建一個簡單的 Python 框架”"},"​")],-1)),s[121]||(s[121]=a("p",null,"為什麼你想要自己構建一個 web 框架呢？我想，原因有以下幾點：",-1)),s[122]||(s[122]=a("ul",null,[a("li",null,"你有一個新奇的想法，覺得將會取代其他的框架"),a("li",null,"你想要獲得一些名氣"),a("li",null,"你遇到的問題很獨特，以至於現有的框架不太合適"),a("li",null,"你對 web 框架是如何工作的很感興趣，因為你想要成為一位更好的 web 開發者。")],-1)),a("p",null,[s[1]||(s[1]=n("接下來的筆墨將着重於最後一點。這篇文章旨在通過對設計和實現過程一步一步的闡述告訴讀者，我在完成一個小型的服務器和框架之後學到了什麼。你可以在這個",-1)),p(e,{href:"https://github.com/sirMackk/diy_framework"},{default:l(()=>[...s[0]||(s[0]=[n("代碼倉庫",-1)])]),_:1}),s[2]||(s[2]=n("中找到這個項目的完整代碼。",-1))]),s[123]||(s[123]=a("p",null,"我希望這篇文章可以鼓勵更多的人來嘗試，因為這確實很有趣。它讓我知道了 web 應用是如何工作的，而且這比我想的要容易的多！",-1)),s[124]||(s[124]=a("h3",{id:"範圍",tabindex:"-1"},[n("範圍 "),a("a",{class:"header-anchor",href:"#範圍","aria-label":"Permalink to “範圍”"},"​")],-1)),s[125]||(s[125]=a("p",null,"框架可以處理請求-響應週期、身份認證、資料庫訪問、模板生成等部分工作。Web 開發者使用框架是因為，大多數的 web 應用擁有大量相同的功能，而對每個項目都重新實現同樣的功能意義不大。",-1)),s[126]||(s[126]=a("p",null,"比較大的的框架如 Rails 和 Django 實現了高層次的抽象，或者説“自備電池”（“batteries-included”，這是 Python 的口號之一，意即所有功能都自足。）。而實現所有的這些功能可能要花費數千小時，因此在這個項目上，我們重點完成其中的一小部分。在開始寫代碼前，我先列舉一下所需的功能以及限制。",-1)),s[127]||(s[127]=a("p",null,"功能：",-1)),a("ul",null,[a("li",null,[s[4]||(s[4]=n("處理 HTTP 的 GET 和 POST 請求。你可以在",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"},{default:l(()=>[...s[3]||(s[3]=[n("這篇 wiki",-1)])]),_:1}),s[5]||(s[5]=n(" 中對 HTTP 有個大致的瞭解。",-1))]),s[6]||(s[6]=a("li",null,[n("實現異步操作（我"),a("em",null,"喜歡"),n(" Python 3 的 asyncio 模組）。")],-1)),s[7]||(s[7]=a("li",null,"簡單的路由邏輯以及參數擷取。",-1)),s[8]||(s[8]=a("li",null,"像其他微型框架一樣，提供一個簡單的用户級 API 。",-1)),s[9]||(s[9]=a("li",null,"支持身份認證，因為學會這個很酷啊（微笑）。",-1))]),s[128]||(s[128]=a("p",null,"限制：",-1)),a("ul",null,[a("li",null,[s[11]||(s[11]=n("將只支持 HTTP 1.1 的一個小子集，不支持傳輸編碼（transfer-encoding）、HTTP 認證（http-auth）、內容編碼（content-encoding，如 gzip）以及",-1)),p(e,{href:"https://en.wikipedia.org/wiki/HTTP_persistent_connection"},{default:l(()=>[...s[10]||(s[10]=[n("持久化連接",-1)])]),_:1}),s[12]||(s[12]=n("等功能。",-1))]),s[13]||(s[13]=a("li",null,"不支持對響應內容的 MIME 判斷 - 用户需要手動指定。",-1)),s[14]||(s[14]=a("li",null,"不支持 WSGI - 僅能處理簡單的 TCP 連接。",-1)),s[15]||(s[15]=a("li",null,"不支持資料庫。",-1))]),s[129]||(s[129]=t(`<p>我覺得一個小的用例可以讓上述內容更加具體，也可以用來演示這個框架的 API：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from diy_framework import App, Router</span></span>
<span class="line"><span>from diy_framework.http_utils import Response</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># GET simple route</span></span>
<span class="line"><span>async def home(r):</span></span>
<span class="line"><span>    rsp = Response()</span></span>
<span class="line"><span>    rsp.set_header(&#39;Content-Type&#39;, &#39;text/html&#39;)</span></span>
<span class="line"><span>    rsp.body = &#39;&lt;html&gt;&lt;body&gt;&lt;b&gt;test&lt;/b&gt;&lt;/body&gt;&lt;/html&gt;&#39;</span></span>
<span class="line"><span>    return rsp</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># GET route + params</span></span>
<span class="line"><span>async def welcome(r, name):</span></span>
<span class="line"><span>    return &quot;Welcome {}&quot;.format(name)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># POST route + body param</span></span>
<span class="line"><span>async def parse_form(r):</span></span>
<span class="line"><span>    if r.method == &#39;GET&#39;:</span></span>
<span class="line"><span>        return &#39;form&#39;</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        name = r.body.get(&#39;name&#39;, &#39;&#39;)[0]</span></span>
<span class="line"><span>        password = r.body.get(&#39;password&#39;, &#39;&#39;)[0]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       return &quot;{0}:{1}&quot;.format(name, password)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># application = router + http server</span></span>
<span class="line"><span>router = Router()</span></span>
<span class="line"><span>router.add_routes({</span></span>
<span class="line"><span>    r&#39;/welcome/{name}&#39;: welcome,</span></span>
<span class="line"><span>    r&#39;/&#39;: home,</span></span>
<span class="line"><span>    r&#39;/login&#39;: parse_form,})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = App(router)</span></span>
<span class="line"><span>app.start_server()</span></span></code></pre></div><p>&#39; 用户需要定義一些能夠返回字符串或 <code>Response</code> 對象的異步函數，然後將這些函數與表示路由的字符串配對，最後通過一個函數調用（<code>start_server</code>）開始處理請求。</p><p>完成設計之後，我將它抽象為幾個我需要編碼的部分：</p><ul><li>接受 TCP 連接以及調度一個異步函數來處理這些連接的部分</li><li>將原始文本解析成某種抽象容器的部分</li><li>對於每個請求，用來決定調用哪個函數的部分</li><li>將上述部分集中到一起，併為開發者提供一個簡單接口的部分</li></ul><p>我先編寫一些測試，這些測試被用來描述每個部分的功能。幾次重構後，整個設計被分成若干部分，每個部分之間是相對解耦的。這樣就非常好，因為每個部分可以被獨立地研究學習。以下是我上文列出的抽象的具體體現：</p><ul><li>一個 HTTPServer 對象，需要一個 Router 對象和一個 http_parser 模組，並使用它們來初始化。</li><li>HTTPConnection 對象，每一個對象表示一個單獨的客户端 HTTP 連接，並且處理其請求-響應週期：使用 http_parser 模組將收到的字節流解析為一個 Request 對象；使用一個 Router 實例尋找並調用正確的函數來生成一個響應；最後將這個響應發送回客户端。</li><li>一對 Request 和 Response 對象為用户提供了一種友好的方式，來處理實質上是字節流的字符串。用户不需要知道正確的消息格式和分隔符是怎樣的。</li><li>一個包含“路由:函數”對應關係的 Router 對象。它提供一個添加配對的方法，可以根據 URL 路徑查找到相應的函數。</li><li>最後，一個 App 對象。它包含配置信息，並使用它們實例化一個 HTTPServer 實例。</li></ul><p>讓我們從 <code>HTTPConnection</code> 開始來講解各個部分。</p><h3 id="模擬異步連接" tabindex="-1">模擬異步連接 <a class="header-anchor" href="#模擬異步連接" aria-label="Permalink to “模擬異步連接”">​</a></h3>`,9)),a("p",null,[s[19]||(s[19]=n("為了滿足上述約束條件，每一個 HTTP 請求都是一個單獨的 TCP 連接。這使得處理請求的速度變慢了，因為建立多個 TCP 連接需要相對高的花銷（DNS 查詢，TCP 三次握手，",-1)),p(e,{href:"https://en.wikipedia.org/wiki/TCP_congestion-avoidance_algorithm#Slow_start"},{default:l(()=>[...s[16]||(s[16]=[n("慢啓動",-1)])]),_:1}),s[20]||(s[20]=n("等等的花銷），不過這樣更加容易模擬。對於這一任務，我選擇相對高級的 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-stream.html"},{default:l(()=>[...s[17]||(s[17]=[n("asyncio-stream",-1)])]),_:1}),s[21]||(s[21]=n(" 模組，它建立在 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-protocol.html"},{default:l(()=>[...s[18]||(s[18]=[n("asyncio 的傳輸和協議",-1)])]),_:1}),s[22]||(s[22]=n("的基礎之上。我強烈推薦你讀一讀標準庫中的相應代碼，很有意思！",-1))]),s[130]||(s[130]=a("p",null,[n("一個 "),a("code",null,"HTTPConnection"),n(" 的實例能夠處理多個任務。首先，它使用 "),a("code",null,"asyncio.StreamReader"),n(" 對象以增量的方式從 TCP 連接中讀取數據，並存儲在緩存中。每一個讀取操作完成後，它會嘗試解析緩存中的數據，並生成一個 "),a("code",null,"Request"),n(" 對象。一旦收到了這個完整的請求，它就生成一個回覆，並通過 "),a("code",null,"asyncio.StreamWriter"),n(" 對象發送回客户端。當然，它還有兩個任務：超時連接以及錯誤處理。")],-1)),a("p",null,[s[24]||(s[24]=n("你可以在",-1)),p(e,{href:"https://github.com/sirMackk/diy_framework/blob/88968e6b30e59504251c0c7cd80abe88f51adb79/diy_framework/http_server.py#L46"},{default:l(()=>[...s[23]||(s[23]=[n("這裏",-1)])]),_:1}),s[25]||(s[25]=n("瀏覽這個類的完整代碼。我將分別介紹代碼的每一部分。為了簡單起見，我移除了代碼文檔。",-1))]),s[131]||(s[131]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class HTTPConnection(object):</span></span>
<span class="line"><span>    def init(self, http_server, reader, writer):</span></span>
<span class="line"><span>        self.router = http_server.router</span></span>
<span class="line"><span>        self.http_parser = http_server.http_parser</span></span>
<span class="line"><span>        self.loop = http_server.loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self._reader = reader</span></span>
<span class="line"><span>        self._writer = writer</span></span>
<span class="line"><span>        self._buffer = bytearray()</span></span>
<span class="line"><span>        self._conn_timeout = None</span></span>
<span class="line"><span>        self.request = Request()</span></span></code></pre></div><p>這個 <code>init</code> 方法沒啥意思，它僅僅是收集了一些對象以供後面使用。它存儲了一個 <code>router</code> 對象、一個 <code>http_parser</code> 對象以及 <code>loop</code> 對象，分別用來生成響應、解析請求以及在事件循環中調度任務。</p>`,2)),a("p",null,[s[28]||(s[28]=n("然後，它存儲了代表一個 TCP 連接的讀寫對，和一個充當原始字節緩衝區的空",-1)),p(e,{href:"https://docs.python.org/3/library/functions.html#bytearray"},{default:l(()=>[...s[26]||(s[26]=[n("字節數組",-1)])]),_:1}),s[29]||(s[29]=n("。",-1)),s[30]||(s[30]=a("code",null,"_conn_timeout",-1)),s[31]||(s[31]=n(" 存儲了一個 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.Handle"},{default:l(()=>[...s[27]||(s[27]=[n("asyncio.Handle",-1)])]),_:1}),s[32]||(s[32]=n(" 的實例，用來管理超時邏輯。最後，它還存儲了 ",-1)),s[33]||(s[33]=a("code",null,"Request",-1)),s[34]||(s[34]=n(" 對象的一個單一實例。",-1))]),s[132]||(s[132]=t(`<p>下面的代碼是用來接受和發送數據的核心功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async def handle_request(self):</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        while not self.request.finished and not self._reader.at_eof():</span></span>
<span class="line"><span>            data = await self._reader.read(1024)</span></span>
<span class="line"><span>            if data:</span></span>
<span class="line"><span>                self._reset_conn_timeout()</span></span>
<span class="line"><span>                await self.process_data(data)</span></span>
<span class="line"><span>        if self.request.finished:</span></span>
<span class="line"><span>            await self.reply()</span></span>
<span class="line"><span>        elif self._reader.at_eof():</span></span>
<span class="line"><span>            raise BadRequestException()</span></span>
<span class="line"><span>    except (NotFoundException,</span></span>
<span class="line"><span>            BadRequestException) as e:</span></span>
<span class="line"><span>        self.error_reply(e.code, body=Response.reason_phrases[e.code])</span></span>
<span class="line"><span>    except Exception as e:</span></span>
<span class="line"><span>        self.error_reply(500, body=Response.reason_phrases[500])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    self.close_connection()</span></span></code></pre></div><p>所有內容被包含在 <code>try-except</code> 代碼塊中，這樣在解析請求或響應期間拋出的異常可以被捕獲到，然後一個錯誤響應會發送回客户端。</p><p>在 <code>while</code> 循環中不斷讀取請求，直到解析器將 <code>self.request.finished</code> 設置為 True ，或者客户端關閉連接所觸發的信號使得 <code>self._reader_at_eof()</code> 函數返回值為 True 為止。這段代碼嘗試在每次循環迭代中從 <code>StreamReader</code> 中讀取數據，並通過調用 <code>self.process_data(data)</code> 函數以增量方式生成 <code>self.request</code>。每次循環讀取數據時，連接超時計數器被重置。</p><p>這兒有個錯誤，你發現了嗎？稍後我們會再討論這個。需要注意的是，這個循環可能會耗盡 CPU 資源，因為如果沒有讀取到東西 <code>self._reader.read()</code> 函數將會返回一個空的字節對象 <code>b&#39;&#39;</code>。這就意味着循環將會不斷運行，卻什麼也不做。一個可能的解決方法是，用非阻塞的方式等待一小段時間：<code>await asyncio.sleep(0.1)</code>。我們暫且不對它做優化。</p><p>還記得上一段我提到的那個錯誤嗎？只有從 <code>StreamReader</code> 讀取數據時，<code>self._reset_conn_timeout()</code> 函數才會被調用。這就意味着，<strong>直到第一個字節到達時</strong>，<code>timeout</code> 才被初始化。如果有一個客户端建立了與服務器的連接卻不發送任何數據，那就永遠不會超時。這可能被用來消耗系統資源，從而導致拒絕服務式攻擊（DoS）。修復方法就是在 <code>init</code> 函數中調用 <code>self._reset_conn_timeout()</code> 函數。</p><p>當請求接受完成或連接中斷時，程序將運行到 <code>if-else</code> 代碼塊。這部分代碼會判斷解析器收到完整的數據後是否完成了解析。如果是，好，生成一個回覆併發送回客户端。如果不是，那麼請求信息可能有錯誤，拋出一個異常！最後，我們調用 <code>self.close_connection</code> 執行清理工作。</p><p>解析請求的部分在 <code>self.process_data</code> 方法中。這個方法非常簡短，也易於測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async def process_data(self, data):</span></span>
<span class="line"><span>    self._buffer.extend(data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    self._buffer = self.http_parser.parse_into(</span></span>
<span class="line"><span>        self.request, self._buffer)</span></span></code></pre></div>`,9)),a("p",null,[s[37]||(s[37]=n("每一次調用都將數據累積到 ",-1)),s[38]||(s[38]=a("code",null,"self._buffer",-1)),s[39]||(s[39]=n(" 中，然後試着用 ",-1)),s[40]||(s[40]=a("code",null,"self.http_parser",-1)),s[41]||(s[41]=n(" 來解析已經收集的數據。這裏需要指出的是，這段代碼展示了一種稱為",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Dependency_injection"},{default:l(()=>[...s[35]||(s[35]=[n("依賴注入（Dependency Injection）",-1)])]),_:1}),s[42]||(s[42]=t("的模式。如果你還記得 <code>init</code> 函數的話，應該知道我們傳入了一個包含 <code>http_parser</code> 對象的 <code>http_server</code> 對象。在這個例子裏，<code>http_parser</code> 對象是 <code>diy_framework</code> 包中的一個模組。不過它也可以是任何含有 <code>parse_into</code> 函數的類，這個 <code>parse_into</code> 函數接受一個 <code>Request</code> 對象以及字節數組作為參數。這很有用，原因有二：一是，這意味着這段代碼更易擴展。如果有人想通過一個不同的解析器來使用 <code>HTTPConnection</code>，沒問題，只需將它作為參數傳入即可。二是，這使得測試更加容易，因為 <code>http_parser</code> 不是硬編碼的，所以使用虛假數據或者 ",21)),p(e,{href:"https://docs.python.org/3/library/unittest.mock.html"},{default:l(()=>[...s[36]||(s[36]=[n("mock",-1)])]),_:1}),s[43]||(s[43]=n(" 對象來替代是很容易的。",-1))]),s[133]||(s[133]=t(`<p>下一段有趣的部分就是 <code>reply</code> 方法了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async def reply(self):</span></span>
<span class="line"><span>    request = self.request</span></span>
<span class="line"><span>    handler = self.router.get_handler(request.path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response = await handler.handle(request)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if not isinstance(response, Response):</span></span>
<span class="line"><span>        response = Response(code=200, body=response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    self._writer.write(response.to_bytes())</span></span>
<span class="line"><span>    await self._writer.drain()</span></span></code></pre></div><p>這裏，一個 <code>HTTPConnection</code> 的實例使用了 <code>HTTPServer</code> 中的 <code>router</code> 對象來得到一個生成響應的對象。一個路由可以是任何一個擁有 <code>get_handler</code> 方法的對象，這個方法接收一個字符串作為參數，返回一個可調用的對象或者拋出 <code>NotFoundException</code> 異常。而這個可調用的對象被用來處理請求以及生成響應。處理程序由框架的使用者編寫，如上文所説的那樣，應該返回字符串或者 <code>Response</code> 對象。<code>Response</code> 對象提供了一個友好的接口，因此這個簡單的 if 語句保證了無論處理程序返回什麼，代碼最終都得到一個統一的 <code>Response</code> 對象。</p><p>接下來，被賦值給 <code>self._writer</code> 的 <code>StreamWriter</code> 實例被調用，將字節字符串發送回客户端。函數返回前，程序在 <code>await self._writer.drain()</code> 處等待，以確保所有的數據被髮送給客户端。只要緩存中還有未發送的數據，<code>self._writer.close()</code> 方法就不會執行。</p><p><code>HTTPConnection</code> 類還有兩個更加有趣的部分：一個用於關閉連接的方法，以及一組用來處理超時機制的方法。首先，關閉一條連接由下面這個小函數完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def close_connection(self):</span></span>
<span class="line"><span>    self._cancel_conn_timeout()</span></span>
<span class="line"><span>    self._writer.close()</span></span></code></pre></div><p>每當一條連接將被關閉時，這段代碼首先取消超時，然後把連接從事件循環中清除。</p><p>超時機制由三個相關的函數組成：第一個函數在超時後給客户端發送錯誤消息並關閉連接；第二個函數用於取消當前的超時；第三個函數調度超時功能。前兩個函數比較簡單，我將詳細解釋第三個函數 <code>_reset_cpmm_timeout()</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def _conn_timeout_close(self):</span></span>
<span class="line"><span>    self.error_reply(500, &#39;timeout&#39;)</span></span>
<span class="line"><span>    self.close_connection()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def _cancel_conn_timeout(self):</span></span>
<span class="line"><span>    if self._conn_timeout:</span></span>
<span class="line"><span>        self._conn_timeout.cancel()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def _reset_conn_timeout(self, timeout=TIMEOUT):</span></span>
<span class="line"><span>    self._cancel_conn_timeout()</span></span>
<span class="line"><span>    self._conn_timeout = self.loop.call_later(</span></span>
<span class="line"><span>        timeout, self._conn_timeout_close)</span></span></code></pre></div>`,9)),a("p",null,[s[45]||(s[45]=n("每當 ",-1)),s[46]||(s[46]=a("code",null,"_reset_conn_timeout",-1)),s[47]||(s[47]=n(" 函數被調用時，它會先取消之前所有賦值給 ",-1)),s[48]||(s[48]=a("code",null,"self._conn_timeout",-1)),s[49]||(s[49]=n(" 的 ",-1)),s[50]||(s[50]=a("code",null,"asyncio.Handle",-1)),s[51]||(s[51]=n(" 對象。然後，使用 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.BaseEventLoop.call_later"},{default:l(()=>[...s[44]||(s[44]=[n("BaseEventLoop.call_later",-1)])]),_:1}),s[52]||(s[52]=n(" 函數讓 ",-1)),s[53]||(s[53]=a("code",null,"_conn_timeout_close",-1)),s[54]||(s[54]=n(" 函數在超時數秒（",-1)),s[55]||(s[55]=a("code",null,"timeout",-1)),s[56]||(s[56]=n("）後執行。如果你還記得 ",-1)),s[57]||(s[57]=a("code",null,"handle_request",-1)),s[58]||(s[58]=n(" 函數的內容，就知道每當接收到數據時，這個函數就會被調用。這就取消了當前的超時並且重新安排 ",-1)),s[59]||(s[59]=a("code",null,"_conn_timeout_close",-1)),s[60]||(s[60]=n(" 函數在超時數秒（",-1)),s[61]||(s[61]=a("code",null,"timeout",-1)),s[62]||(s[62]=n("）後執行。只要接收到數據，這個循環就會不斷地重置超時回調。如果在超時時間內沒有接收到數據，最後函數 ",-1)),s[63]||(s[63]=a("code",null,"_conn_timeout_close",-1)),s[64]||(s[64]=n(" 就會被調用。",-1))]),s[134]||(s[134]=t(`<h3 id="創建連接" tabindex="-1">創建連接 <a class="header-anchor" href="#創建連接" aria-label="Permalink to “創建連接”">​</a></h3><p>我們需要創建 <code>HTTPConnection</code> 對象，並且正確地使用它們。這一任務由 <code>HTTPServer</code> 類完成。<code>HTTPServer</code> 類是一個簡單的容器，可以存儲着一些配置信息（解析器，路由和事件循環實例），並使用這些配置來創建 <code>HTTPConnection</code> 實例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class HTTPServer(object):</span></span>
<span class="line"><span>    def init(self, router, http_parser, loop):</span></span>
<span class="line"><span>        self.router = router</span></span>
<span class="line"><span>        self.http_parser = http_parser</span></span>
<span class="line"><span>        self.loop = loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def handle_connection(self, reader, writer):</span></span>
<span class="line"><span>        connection = HTTPConnection(self, reader, writer)</span></span>
<span class="line"><span>        asyncio.ensure_future(connection.handle_request(), loop=self.loop)</span></span></code></pre></div>`,3)),a("p",null,[s[66]||(s[66]=a("code",null,"HTTPServer",-1)),s[67]||(s[67]=n(" 的每一個實例能夠監聽一個端口。它有一個 ",-1)),s[68]||(s[68]=a("code",null,"handle_connection",-1)),s[69]||(s[69]=n(" 的異步方法來創建 ",-1)),s[70]||(s[70]=a("code",null,"HTTPConnection",-1)),s[71]||(s[71]=n(" 的實例，並安排它們在事件循環中運行。這個方法被傳遞給 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-stream.html#asyncio.start_server"},{default:l(()=>[...s[65]||(s[65]=[n("asyncio.start_server",-1)])]),_:1}),s[72]||(s[72]=n(" 作為一個回調函數。也就是説，每當一個 TCP 連接初始化時（以 ",-1)),s[73]||(s[73]=a("code",null,"StreamReader",-1)),s[74]||(s[74]=n(" 和 ",-1)),s[75]||(s[75]=a("code",null,"StreamWriter",-1)),s[76]||(s[76]=n(" 為參數），它就會被調用。",-1))]),s[135]||(s[135]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   self._server = HTTPServer(self.router, self.http_parser, self.loop)</span></span>
<span class="line"><span>   self._connection_handler = asyncio.start_server(</span></span>
<span class="line"><span>        self._server.handle_connection,</span></span>
<span class="line"><span>        host=self.host,</span></span>
<span class="line"><span>        port=self.port,</span></span>
<span class="line"><span>        reuse_address=True,</span></span>
<span class="line"><span>        reuse_port=True,</span></span>
<span class="line"><span>        loop=self.loop)</span></span></code></pre></div><p>這就是構成整個應用程序工作原理的核心：<code>asyncio.start_server</code> 接受 TCP 連接，然後在一個預配置的 <code>HTTPServer</code> 對象上調用一個方法。這個方法將處理一條 TCP 連接的所有邏輯：讀取、解析、生成響應併發送回客户端、以及關閉連接。它的重點是 IO 邏輯、解析和生成響應。</p><p>講解了核心的 IO 部分，讓我們繼續。</p><h3 id="解析請求" tabindex="-1">解析請求 <a class="header-anchor" href="#解析請求" aria-label="Permalink to “解析請求”">​</a></h3><p>這個微型框架的使用者被寵壞了，不願意和字節打交道。它們想要一個更高層次的抽象 —— 一種更加簡單的方法來處理請求。這個微型框架就包含了一個簡單的 HTTP 解析器，能夠將字節流轉化為 Request 對象。</p><p>這些 Request 對象是像這樣的容器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Request(object):</span></span>
<span class="line"><span>    def init(self):</span></span>
<span class="line"><span>        self.method = None</span></span>
<span class="line"><span>        self.path = None</span></span>
<span class="line"><span>        self.query_params = {}</span></span>
<span class="line"><span>        self.path_params = {}</span></span>
<span class="line"><span>        self.headers = {}</span></span>
<span class="line"><span>        self.body = None</span></span>
<span class="line"><span>        self.body_raw = None</span></span>
<span class="line"><span>        self.finished = False</span></span></code></pre></div><p>它包含了所有需要的數據，可以用一種容易理解的方法從客户端接受數據。哦，不包括 cookie ，它對身份認證是非常重要的，我會將它留在第二部分。</p><p>每一個 HTTP 請求都包含了一些必需的內容，如請求路徑和請求方法。它們也包含了一些可選的內容，如請求體、請求頭，或是 URL 參數。隨着 REST 的流行，除了 URL 參數，URL 本身會包含一些信息。比如，&quot;/user/1/edit&quot; 包含了用户的 id 。</p><p>一個請求的每個部分都必須被識別、解析，並正確地賦值給 Request 對象的對應屬性。HTTP/1.1 是一個文本協議，事實上這簡化了很多東西。（HTTP/2 是一個二進制協議，這又是另一種樂趣了）</p><p>解析器不需要跟蹤狀態，因此 <code>http_parser</code> 模組其實就是一組函數。調用函數需要用到 <code>Request</code> 對象，並將它連同一個包含原始請求信息的字節數組傳遞給 <code>parse_into</code> 函數。然後解析器會修改 <code>Request</code> 對象以及充當緩存的字節數組。字節數組的信息被逐漸地解析到 request 對象中。</p><p><code>http_parser</code> 模組的核心功能就是下面這個 <code>parse_into</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def parse_into(request, buffer):</span></span>
<span class="line"><span>    _buffer = buffer[:]</span></span>
<span class="line"><span>    if not request.method and can_parse_request_line(_buffer):</span></span>
<span class="line"><span>        (request.method, request.path,</span></span>
<span class="line"><span>         request.query_params) = parse_request_line(_buffer)</span></span>
<span class="line"><span>        remove_request_line(_buffer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if not request.headers and can_parse_headers(_buffer):</span></span>
<span class="line"><span>        request.headers = parse_headers(_buffer)</span></span>
<span class="line"><span>        if not has_body(request.headers):</span></span>
<span class="line"><span>            request.finished = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        remove_intro(_buffer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if not request.finished and can_parse_body(request.headers, _buffer):</span></span>
<span class="line"><span>        request.body_raw, request.body = parse_body(request.headers, _buffer)</span></span>
<span class="line"><span>        clear_buffer(_buffer)</span></span>
<span class="line"><span>        request.finished = True</span></span>
<span class="line"><span>    return _buffer</span></span></code></pre></div><p>從上面的代碼中可以看到，我把解析的過程分為三個部分：解析請求行（這行像這樣：GET /resource HTTP/1.1），解析請求頭以及解析請求體。</p><p>請求行包含了 HTTP 請求方法以及 URL 地址。而 URL 地址則包含了更多的信息：路徑、url 參數和開發者自定義的 url 參數。解析請求方法和 URL 還是很容易的 - 合適地分割字符串就好了。函數 <code>urlparse.parse</code> 可以用來解析 URL 參數。開發者自定義的 URL 參數可以通過正則表達式來解析。</p><p>接下來是 HTTP 頭部。它們是一行行由鍵值對組成的簡單文本。問題在於，可能有多個 HTTP 頭有相同的名字，卻有不同的值。一個值得關注的 HTTP 頭部是 <code>Content-Length</code>，它描述了請求體的字節長度（不是整個請求，僅僅是請求體）。這對於決定是否解析請求體有很重要的作用。</p><p>最後，解析器根據 HTTP 方法和頭部來決定是否解析請求體。</p><h3 id="路由" tabindex="-1">路由！ <a class="header-anchor" href="#路由" aria-label="Permalink to “路由！”">​</a></h3><p>在某種意義上，路由就像是連接框架和用户的橋樑，用户用合適的方法創建 <code>Router</code> 對象併為其設置路徑/函數對，然後將它賦值給 App 對象。而 App 對象依次調用 <code>get_handler</code> 函數生成相應的回調函數。簡單來説，路由就負責兩件事，一是存儲路徑/函數對，二是返回需要的路徑/函數對</p><p><code>Router</code> 類中有兩個允許最終開發者添加路由的方法，分別是 <code>add_routes</code> 和 <code>add_route</code>。因為 <code>add_routes</code> 就是 <code>add_route</code> 函數的一層封裝，我們將主要講解 <code>add_route</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def add_route(self, path, handler):</span></span>
<span class="line"><span>    compiled_route = self.class.build_route_regexp(path)</span></span>
<span class="line"><span>    if compiled_route not in self.routes:</span></span>
<span class="line"><span>        self.routes[compiled_route] = handler</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        raise DuplicateRoute</span></span></code></pre></div><p>首先，這個函數使用 <code>Router.build_router_regexp</code> 的類方法，將一條路由規則（如 &#39;/cars/{id}&#39; 這樣的字符串），“編譯”到一個已編譯的正則表達式對象。這些已編譯的正則表達式用來匹配請求路徑，以及解析開發者自定義的 URL 參數。如果已經存在一個相同的路由，程序就會拋出一個異常。最後，這個路由/處理程序對被添加到一個簡單的字典<code>self.routes</code>中。</p><p>下面展示 Router 是如何“編譯”路由的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@classmethod</span></span>
<span class="line"><span>def build_route_regexp(cls, regexp_str):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Turns a string into a compiled regular expression. Parses &#39;{}&#39; into</span></span>
<span class="line"><span>    named groups ie. &#39;/path/{variable}&#39; is turned into</span></span>
<span class="line"><span>    &#39;/path/(?P&lt;variable&gt;[a-zA-Z0-9_-]+)&#39;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    :param regexp_str: a string representing a URL path.</span></span>
<span class="line"><span>    :return: a compiled regular expression.</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    def named_groups(matchobj):</span></span>
<span class="line"><span>        return &#39;(?P&lt;{0}&gt;[a-zA-Z0-9_-]+)&#39;.format(matchobj.group(1))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    re_str = re.sub(r&#39;{([a-zA-Z0-9_-]+)}&#39;, named_groups, regexp_str)</span></span>
<span class="line"><span>    re_str = &#39;&#39;.join((&#39;^&#39;, re_str, &#39;$&#39;,))</span></span>
<span class="line"><span>    return re.compile(re_str)</span></span></code></pre></div><p>這個方法使用正則表達式將所有出現的 <code>{variable}</code> 替換為 <code>(?P&lt;variable&gt;)</code>。然後在字符串頭尾分別添加 <code>^</code> 和 <code>$</code> 標記，最後編譯正則表達式對象。</p><p>完成了路由存儲僅成功了一半，下面是如何得到路由對應的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def get_handler(self, path):</span></span>
<span class="line"><span>    logger.debug(&#39;Getting handler for: {0}&#39;.format(path))</span></span>
<span class="line"><span>    for route, handler in self.routes.items():</span></span>
<span class="line"><span>        path_params = self.class.match_path(route, path)</span></span>
<span class="line"><span>        if path_params is not None:</span></span>
<span class="line"><span>            logger.debug(&#39;Got handler for: {0}&#39;.format(path))</span></span>
<span class="line"><span>            wrapped_handler = HandlerWrapper(handler, path_params)</span></span>
<span class="line"><span>            return wrapped_handler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    raise NotFoundException()</span></span></code></pre></div><p>一旦 <code>App</code> 對象獲得一個 <code>Request</code> 對象，也就獲得了 URL 的路徑部分（如 /users/15/edit）。然後，我們需要匹配函數來生成一個響應或者 404 錯誤。<code>get_handler</code> 函數將路徑作為參數，循環遍歷路由，對每條路由調用 <code>Router.match_path</code> 類方法檢查是否有已編譯的正則對象與這個請求路徑匹配。如果存在，我們就調用 <code>HandleWrapper</code> 來包裝路由對應的函數。<code>path_params</code> 字典包含了路徑變量（如 &#39;/users/15/edit&#39; 中的 &#39;15&#39;），若路由沒有指定變量，字典就為空。最後，我們將包裝好的函數返回給 <code>App</code> 對象。</p><p>如果遍歷了所有的路由都找不到與路徑匹配的，函數就會拋出 <code>NotFoundException</code> 異常。</p><p>這個 <code>Route.match</code> 類方法挺簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def match_path(cls, route, path):</span></span>
<span class="line"><span>    match = route.match(path)</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        return match.groupdict()</span></span>
<span class="line"><span>    except AttributeError:</span></span>
<span class="line"><span>        return None</span></span></code></pre></div>`,31)),a("p",null,[s[78]||(s[78]=n("它使用正則對象的 ",-1)),p(e,{href:"https://docs.python.org/3/library/re.html#re.match"},{default:l(()=>[...s[77]||(s[77]=[n("match 方法",-1)])]),_:1}),s[79]||(s[79]=n("來檢查路由是否與路徑匹配。若果不匹配，則返回 None 。",-1))]),s[136]||(s[136]=t(`<p>最後，我們有 <code>HandleWraapper</code> 類。它的唯一任務就是封裝一個異步函數，存儲 <code>path_params</code> 字典，並通過 <code>handle</code> 方法對外提供一個統一的接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class HandlerWrapper(object):</span></span>
<span class="line"><span>    def init(self, handler, path_params):</span></span>
<span class="line"><span>        self.handler = handler</span></span>
<span class="line"><span>        self.path_params = path_params</span></span>
<span class="line"><span>        self.request = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def handle(self, request):</span></span>
<span class="line"><span>        return await self.handler(request, **self.path_params)</span></span></code></pre></div><h3 id="組合到一起" tabindex="-1">組合到一起 <a class="header-anchor" href="#組合到一起" aria-label="Permalink to “組合到一起”">​</a></h3><p>框架的最後部分就是用 <code>App</code> 類把所有的部分聯繫起來。</p>`,4)),a("p",null,[s[81]||(s[81]=a("code",null,"App",-1)),s[82]||(s[82]=n(" 類用於集中所有的配置細節。一個 ",-1)),s[83]||(s[83]=a("code",null,"App",-1)),s[84]||(s[84]=n(" 對象通過其 ",-1)),s[85]||(s[85]=a("code",null,"start_server",-1)),s[86]||(s[86]=n(" 方法，使用一些配置數據創建一個 ",-1)),s[87]||(s[87]=a("code",null,"HTTPServer",-1)),s[88]||(s[88]=n(" 的實例，然後將它傳遞給 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-stream.html?highlight=start_server#asyncio.start_server"},{default:l(()=>[...s[80]||(s[80]=[n("asyncio.start_server 函數",-1)])]),_:1}),s[89]||(s[89]=n("。",-1)),s[90]||(s[90]=a("code",null,"asyncio.start_server",-1)),s[91]||(s[91]=n(" 函數會對每一個 TCP 連接調用 ",-1)),s[92]||(s[92]=a("code",null,"HTTPServer",-1)),s[93]||(s[93]=n(" 對象的 ",-1)),s[94]||(s[94]=a("code",null,"handle_connection",-1)),s[95]||(s[95]=n(" 方法。",-1))]),s[137]||(s[137]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def start_server(self):</span></span>
<span class="line"><span>    if not self._server:</span></span>
<span class="line"><span>        self.loop = asyncio.get_event_loop()</span></span>
<span class="line"><span>        self._server = HTTPServer(self.router, self.http_parser, self.loop)</span></span>
<span class="line"><span>        self._connection_handler = asyncio.start_server(</span></span>
<span class="line"><span>            self._server.handle_connection,</span></span>
<span class="line"><span>            host=self.host,</span></span>
<span class="line"><span>            port=self.port,</span></span>
<span class="line"><span>            reuse_address=True,</span></span>
<span class="line"><span>            reuse_port=True,</span></span>
<span class="line"><span>            loop=self.loop)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        logger.info(&#39;Starting server on {0}:{1}&#39;.format(</span></span>
<span class="line"><span>            self.host, self.port))</span></span>
<span class="line"><span>        self.loop.run_until_complete(self._connection_handler)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            self.loop.run_forever()</span></span>
<span class="line"><span>        except KeyboardInterrupt:</span></span>
<span class="line"><span>            logger.info(&#39;Got signal, killing server&#39;)</span></span>
<span class="line"><span>        except DiyFrameworkException as e:</span></span>
<span class="line"><span>            logger.error(&#39;Critical framework failure:&#39;)</span></span>
<span class="line"><span>            logger.error(e.traceback)</span></span>
<span class="line"><span>        finally:</span></span>
<span class="line"><span>            self.loop.close()</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        logger.info(&#39;Server already started - {0}&#39;.format(self))</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>如果你查看源碼，就會發現所有的代碼僅 320 餘行（包括測試代碼的話共 540 餘行）。這麼少的代碼實現了這麼多的功能，讓我有點驚訝。這個框架沒有提供模板、身份認證以及資料庫訪問等功能（這些內容也很有趣哦）。這也讓我知道，像 Django 和 Tornado 這樣的框架是如何工作的，而且我能夠快速地調試它們了。</p><p>這也是我按照測試驅動開發完成的第一個項目，整個過程有趣而有意義。先編寫測試用例迫使我思考設計和架構，而不僅僅是把代碼放到一起，讓它們可以運行。不要誤解我的意思，有很多時候，後者的方式更好。不過如果你想給確保這些不怎麼維護的代碼在之後的幾周甚至幾個月依然工作，那麼測試驅動開發正是你需要的。</p>`,4)),a("p",null,[s[97]||(s[97]=n("我研究了下",-1)),p(e,{href:"https://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html"},{default:l(()=>[...s[96]||(s[96]=[n("整潔架構",-1)])]),_:1}),s[98]||(s[98]=n("以及依賴注入模式，這些充分體現在 ",-1)),s[99]||(s[99]=a("code",null,"Router",-1)),s[100]||(s[100]=n(" 類是如何作為一個更高層次的抽象的（實體？）。",-1)),s[101]||(s[101]=a("code",null,"Router",-1)),s[102]||(s[102]=n(" 類是比較接近核心的，像 ",-1)),s[103]||(s[103]=a("code",null,"http_parser",-1)),s[104]||(s[104]=n(" 和 ",-1)),s[105]||(s[105]=a("code",null,"App",-1)),s[106]||(s[106]=n(" 的內容比較邊緣化，因為它們只是完成了極小的字符串和字節流、或是中層 IO 的工作。測試驅動開發（TDD）迫使我獨立思考每個小部分，這使我問自己這樣的問題：方法調用的組合是否易於理解？類名是否準確地反映了我正在解決的問題？我的代碼中是否很容易區分出不同的抽象層？",-1))]),s[138]||(s[138]=a("p",null,"來吧，寫個小框架，真的很有趣：）",-1)),s[139]||(s[139]=a("hr",null,null,-1)),a("p",null,[s[108]||(s[108]=n("via: ",-1)),p(e,{href:"http://mattscodecave.com/posts/simple-python-framework-from-scratch.html"},{default:l(()=>[...s[107]||(s[107]=[n("http://mattscodecave.com/posts/simple-python-framework-from-scratch.html",-1)])]),_:1})]),a("p",null,[s[112]||(s[112]=n("作者：",-1)),p(e,{href:"http://mattscodecave.com/hire-me.html"},{default:l(()=>[...s[109]||(s[109]=[n("Matt",-1)])]),_:1}),s[113]||(s[113]=n(" 譯者：",-1)),p(e,{href:"https://github.com/Cathon"},{default:l(()=>[...s[110]||(s[110]=[n("Cathon",-1)])]),_:1}),s[114]||(s[114]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[111]||(s[111]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[117]||(s[117]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[115]||(s[115]=[n("LCTT",-1)])]),_:1}),s[118]||(s[118]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[116]||(s[116]=[n("Linux中國",-1)])]),_:1}),s[119]||(s[119]=n(" 榮譽推出",-1))])])}const _=i(u,[["render",f]]);export{y as __pageData,_ as default};
