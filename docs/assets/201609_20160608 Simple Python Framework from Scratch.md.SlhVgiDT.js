import{_ as i,a0 as o,w as r,s as d,I as a,x as n,a1 as p,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"从零构建一个简单的 Python 框架 | LCTT x X-CMD","titleTemplate":false,"description":"从零构建一个简单的 Python 框架 | LCTT (201609) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"从零构建一个简单的 Python 框架 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"从零构建一个简单的 Python 框架 | LCTT (201609) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201609/20160608 Simple Python Framework from Scratch","title":"从零构建一个简单的 Python 框架","tag":"201609","desc":""},"relativePath":"201609/20160608 Simple Python Framework from Scratch.md","filePath":"[post].md"}'),u={name:"201609/20160608 Simple Python Framework from Scratch.md"};function f(c,s,g,b,m,h){const e=o("Link");return r(),d("div",null,[s[120]||(s[120]=a("h1",{id:"从零构建一个简单的-python-框架",tabindex:"-1"},[n("从零构建一个简单的 Python 框架 "),a("a",{class:"header-anchor",href:"#从零构建一个简单的-python-框架","aria-label":"Permalink to “从零构建一个简单的 Python 框架”"},"​")],-1)),s[121]||(s[121]=a("p",null,"为什么你想要自己构建一个 web 框架呢？我想，原因有以下几点：",-1)),s[122]||(s[122]=a("ul",null,[a("li",null,"你有一个新奇的想法，觉得将会取代其他的框架"),a("li",null,"你想要获得一些名气"),a("li",null,"你遇到的问题很独特，以至于现有的框架不太合适"),a("li",null,"你对 web 框架是如何工作的很感兴趣，因为你想要成为一位更好的 web 开发者。")],-1)),a("p",null,[s[1]||(s[1]=n("接下来的笔墨将着重于最后一点。这篇文章旨在通过对设计和实现过程一步一步的阐述告诉读者，我在完成一个小型的服务器和框架之后学到了什么。你可以在这个",-1)),p(e,{href:"https://github.com/sirMackk/diy_framework"},{default:l(()=>[...s[0]||(s[0]=[n("代码仓库",-1)])]),_:1}),s[2]||(s[2]=n("中找到这个项目的完整代码。",-1))]),s[123]||(s[123]=a("p",null,"我希望这篇文章可以鼓励更多的人来尝试，因为这确实很有趣。它让我知道了 web 应用是如何工作的，而且这比我想的要容易的多！",-1)),s[124]||(s[124]=a("h3",{id:"范围",tabindex:"-1"},[n("范围 "),a("a",{class:"header-anchor",href:"#范围","aria-label":"Permalink to “范围”"},"​")],-1)),s[125]||(s[125]=a("p",null,"框架可以处理请求-响应周期、身份认证、数据库访问、模板生成等部分工作。Web 开发者使用框架是因为，大多数的 web 应用拥有大量相同的功能，而对每个项目都重新实现同样的功能意义不大。",-1)),s[126]||(s[126]=a("p",null,"比较大的的框架如 Rails 和 Django 实现了高层次的抽象，或者说“自备电池”（“batteries-included”，这是 Python 的口号之一，意即所有功能都自足。）。而实现所有的这些功能可能要花费数千小时，因此在这个项目上，我们重点完成其中的一小部分。在开始写代码前，我先列举一下所需的功能以及限制。",-1)),s[127]||(s[127]=a("p",null,"功能：",-1)),a("ul",null,[a("li",null,[s[4]||(s[4]=n("处理 HTTP 的 GET 和 POST 请求。你可以在",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"},{default:l(()=>[...s[3]||(s[3]=[n("这篇 wiki",-1)])]),_:1}),s[5]||(s[5]=n(" 中对 HTTP 有个大致的了解。",-1))]),s[6]||(s[6]=a("li",null,[n("实现异步操作（我"),a("em",null,"喜欢"),n(" Python 3 的 asyncio 模块）。")],-1)),s[7]||(s[7]=a("li",null,"简单的路由逻辑以及参数撷取。",-1)),s[8]||(s[8]=a("li",null,"像其他微型框架一样，提供一个简单的用户级 API 。",-1)),s[9]||(s[9]=a("li",null,"支持身份认证，因为学会这个很酷啊（微笑）。",-1))]),s[128]||(s[128]=a("p",null,"限制：",-1)),a("ul",null,[a("li",null,[s[11]||(s[11]=n("将只支持 HTTP 1.1 的一个小子集，不支持传输编码（transfer-encoding）、HTTP 认证（http-auth）、内容编码（content-encoding，如 gzip）以及",-1)),p(e,{href:"https://en.wikipedia.org/wiki/HTTP_persistent_connection"},{default:l(()=>[...s[10]||(s[10]=[n("持久化连接",-1)])]),_:1}),s[12]||(s[12]=n("等功能。",-1))]),s[13]||(s[13]=a("li",null,"不支持对响应内容的 MIME 判断 - 用户需要手动指定。",-1)),s[14]||(s[14]=a("li",null,"不支持 WSGI - 仅能处理简单的 TCP 连接。",-1)),s[15]||(s[15]=a("li",null,"不支持数据库。",-1))]),s[129]||(s[129]=t(`<p>我觉得一个小的用例可以让上述内容更加具体，也可以用来演示这个框架的 API：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from diy_framework import App, Router</span></span>
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
<span class="line"><span>app.start_server()</span></span></code></pre></div><p>&#39; 用户需要定义一些能够返回字符串或 <code>Response</code> 对象的异步函数，然后将这些函数与表示路由的字符串配对，最后通过一个函数调用（<code>start_server</code>）开始处理请求。</p><p>完成设计之后，我将它抽象为几个我需要编码的部分：</p><ul><li>接受 TCP 连接以及调度一个异步函数来处理这些连接的部分</li><li>将原始文本解析成某种抽象容器的部分</li><li>对于每个请求，用来决定调用哪个函数的部分</li><li>将上述部分集中到一起，并为开发者提供一个简单接口的部分</li></ul><p>我先编写一些测试，这些测试被用来描述每个部分的功能。几次重构后，整个设计被分成若干部分，每个部分之间是相对解耦的。这样就非常好，因为每个部分可以被独立地研究学习。以下是我上文列出的抽象的具体体现：</p><ul><li>一个 HTTPServer 对象，需要一个 Router 对象和一个 http_parser 模块，并使用它们来初始化。</li><li>HTTPConnection 对象，每一个对象表示一个单独的客户端 HTTP 连接，并且处理其请求-响应周期：使用 http_parser 模块将收到的字节流解析为一个 Request 对象；使用一个 Router 实例寻找并调用正确的函数来生成一个响应；最后将这个响应发送回客户端。</li><li>一对 Request 和 Response 对象为用户提供了一种友好的方式，来处理实质上是字节流的字符串。用户不需要知道正确的消息格式和分隔符是怎样的。</li><li>一个包含“路由:函数”对应关系的 Router 对象。它提供一个添加配对的方法，可以根据 URL 路径查找到相应的函数。</li><li>最后，一个 App 对象。它包含配置信息，并使用它们实例化一个 HTTPServer 实例。</li></ul><p>让我们从 <code>HTTPConnection</code> 开始来讲解各个部分。</p><h3 id="模拟异步连接" tabindex="-1">模拟异步连接 <a class="header-anchor" href="#模拟异步连接" aria-label="Permalink to “模拟异步连接”">​</a></h3>`,9)),a("p",null,[s[19]||(s[19]=n("为了满足上述约束条件，每一个 HTTP 请求都是一个单独的 TCP 连接。这使得处理请求的速度变慢了，因为建立多个 TCP 连接需要相对高的花销（DNS 查询，TCP 三次握手，",-1)),p(e,{href:"https://en.wikipedia.org/wiki/TCP_congestion-avoidance_algorithm#Slow_start"},{default:l(()=>[...s[16]||(s[16]=[n("慢启动",-1)])]),_:1}),s[20]||(s[20]=n("等等的花销），不过这样更加容易模拟。对于这一任务，我选择相对高级的 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-stream.html"},{default:l(()=>[...s[17]||(s[17]=[n("asyncio-stream",-1)])]),_:1}),s[21]||(s[21]=n(" 模块，它建立在 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-protocol.html"},{default:l(()=>[...s[18]||(s[18]=[n("asyncio 的传输和协议",-1)])]),_:1}),s[22]||(s[22]=n("的基础之上。我强烈推荐你读一读标准库中的相应代码，很有意思！",-1))]),s[130]||(s[130]=a("p",null,[n("一个 "),a("code",null,"HTTPConnection"),n(" 的实例能够处理多个任务。首先，它使用 "),a("code",null,"asyncio.StreamReader"),n(" 对象以增量的方式从 TCP 连接中读取数据，并存储在缓存中。每一个读取操作完成后，它会尝试解析缓存中的数据，并生成一个 "),a("code",null,"Request"),n(" 对象。一旦收到了这个完整的请求，它就生成一个回复，并通过 "),a("code",null,"asyncio.StreamWriter"),n(" 对象发送回客户端。当然，它还有两个任务：超时连接以及错误处理。")],-1)),a("p",null,[s[24]||(s[24]=n("你可以在",-1)),p(e,{href:"https://github.com/sirMackk/diy_framework/blob/88968e6b30e59504251c0c7cd80abe88f51adb79/diy_framework/http_server.py#L46"},{default:l(()=>[...s[23]||(s[23]=[n("这里",-1)])]),_:1}),s[25]||(s[25]=n("浏览这个类的完整代码。我将分别介绍代码的每一部分。为了简单起见，我移除了代码文档。",-1))]),s[131]||(s[131]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class HTTPConnection(object):</span></span>
<span class="line"><span>    def init(self, http_server, reader, writer):</span></span>
<span class="line"><span>        self.router = http_server.router</span></span>
<span class="line"><span>        self.http_parser = http_server.http_parser</span></span>
<span class="line"><span>        self.loop = http_server.loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self._reader = reader</span></span>
<span class="line"><span>        self._writer = writer</span></span>
<span class="line"><span>        self._buffer = bytearray()</span></span>
<span class="line"><span>        self._conn_timeout = None</span></span>
<span class="line"><span>        self.request = Request()</span></span></code></pre></div><p>这个 <code>init</code> 方法没啥意思，它仅仅是收集了一些对象以供后面使用。它存储了一个 <code>router</code> 对象、一个 <code>http_parser</code> 对象以及 <code>loop</code> 对象，分别用来生成响应、解析请求以及在事件循环中调度任务。</p>`,2)),a("p",null,[s[28]||(s[28]=n("然后，它存储了代表一个 TCP 连接的读写对，和一个充当原始字节缓冲区的空",-1)),p(e,{href:"https://docs.python.org/3/library/functions.html#bytearray"},{default:l(()=>[...s[26]||(s[26]=[n("字节数组",-1)])]),_:1}),s[29]||(s[29]=n("。",-1)),s[30]||(s[30]=a("code",null,"_conn_timeout",-1)),s[31]||(s[31]=n(" 存储了一个 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.Handle"},{default:l(()=>[...s[27]||(s[27]=[n("asyncio.Handle",-1)])]),_:1}),s[32]||(s[32]=n(" 的实例，用来管理超时逻辑。最后，它还存储了 ",-1)),s[33]||(s[33]=a("code",null,"Request",-1)),s[34]||(s[34]=n(" 对象的一个单一实例。",-1))]),s[132]||(s[132]=t(`<p>下面的代码是用来接受和发送数据的核心功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async def handle_request(self):</span></span>
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
<span class="line"><span>    self.close_connection()</span></span></code></pre></div><p>所有内容被包含在 <code>try-except</code> 代码块中，这样在解析请求或响应期间抛出的异常可以被捕获到，然后一个错误响应会发送回客户端。</p><p>在 <code>while</code> 循环中不断读取请求，直到解析器将 <code>self.request.finished</code> 设置为 True ，或者客户端关闭连接所触发的信号使得 <code>self._reader_at_eof()</code> 函数返回值为 True 为止。这段代码尝试在每次循环迭代中从 <code>StreamReader</code> 中读取数据，并通过调用 <code>self.process_data(data)</code> 函数以增量方式生成 <code>self.request</code>。每次循环读取数据时，连接超时计数器被重置。</p><p>这儿有个错误，你发现了吗？稍后我们会再讨论这个。需要注意的是，这个循环可能会耗尽 CPU 资源，因为如果没有读取到东西 <code>self._reader.read()</code> 函数将会返回一个空的字节对象 <code>b&#39;&#39;</code>。这就意味着循环将会不断运行，却什么也不做。一个可能的解决方法是，用非阻塞的方式等待一小段时间：<code>await asyncio.sleep(0.1)</code>。我们暂且不对它做优化。</p><p>还记得上一段我提到的那个错误吗？只有从 <code>StreamReader</code> 读取数据时，<code>self._reset_conn_timeout()</code> 函数才会被调用。这就意味着，<strong>直到第一个字节到达时</strong>，<code>timeout</code> 才被初始化。如果有一个客户端建立了与服务器的连接却不发送任何数据，那就永远不会超时。这可能被用来消耗系统资源，从而导致拒绝服务式攻击（DoS）。修复方法就是在 <code>init</code> 函数中调用 <code>self._reset_conn_timeout()</code> 函数。</p><p>当请求接受完成或连接中断时，程序将运行到 <code>if-else</code> 代码块。这部分代码会判断解析器收到完整的数据后是否完成了解析。如果是，好，生成一个回复并发送回客户端。如果不是，那么请求信息可能有错误，抛出一个异常！最后，我们调用 <code>self.close_connection</code> 执行清理工作。</p><p>解析请求的部分在 <code>self.process_data</code> 方法中。这个方法非常简短，也易于测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async def process_data(self, data):</span></span>
<span class="line"><span>    self._buffer.extend(data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    self._buffer = self.http_parser.parse_into(</span></span>
<span class="line"><span>        self.request, self._buffer)</span></span></code></pre></div>`,9)),a("p",null,[s[37]||(s[37]=n("每一次调用都将数据累积到 ",-1)),s[38]||(s[38]=a("code",null,"self._buffer",-1)),s[39]||(s[39]=n(" 中，然后试着用 ",-1)),s[40]||(s[40]=a("code",null,"self.http_parser",-1)),s[41]||(s[41]=n(" 来解析已经收集的数据。这里需要指出的是，这段代码展示了一种称为",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Dependency_injection"},{default:l(()=>[...s[35]||(s[35]=[n("依赖注入（Dependency Injection）",-1)])]),_:1}),s[42]||(s[42]=t("的模式。如果你还记得 <code>init</code> 函数的话，应该知道我们传入了一个包含 <code>http_parser</code> 对象的 <code>http_server</code> 对象。在这个例子里，<code>http_parser</code> 对象是 <code>diy_framework</code> 包中的一个模块。不过它也可以是任何含有 <code>parse_into</code> 函数的类，这个 <code>parse_into</code> 函数接受一个 <code>Request</code> 对象以及字节数组作为参数。这很有用，原因有二：一是，这意味着这段代码更易扩展。如果有人想通过一个不同的解析器来使用 <code>HTTPConnection</code>，没问题，只需将它作为参数传入即可。二是，这使得测试更加容易，因为 <code>http_parser</code> 不是硬编码的，所以使用虚假数据或者 ",21)),p(e,{href:"https://docs.python.org/3/library/unittest.mock.html"},{default:l(()=>[...s[36]||(s[36]=[n("mock",-1)])]),_:1}),s[43]||(s[43]=n(" 对象来替代是很容易的。",-1))]),s[133]||(s[133]=t(`<p>下一段有趣的部分就是 <code>reply</code> 方法了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>async def reply(self):</span></span>
<span class="line"><span>    request = self.request</span></span>
<span class="line"><span>    handler = self.router.get_handler(request.path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    response = await handler.handle(request)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if not isinstance(response, Response):</span></span>
<span class="line"><span>        response = Response(code=200, body=response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    self._writer.write(response.to_bytes())</span></span>
<span class="line"><span>    await self._writer.drain()</span></span></code></pre></div><p>这里，一个 <code>HTTPConnection</code> 的实例使用了 <code>HTTPServer</code> 中的 <code>router</code> 对象来得到一个生成响应的对象。一个路由可以是任何一个拥有 <code>get_handler</code> 方法的对象，这个方法接收一个字符串作为参数，返回一个可调用的对象或者抛出 <code>NotFoundException</code> 异常。而这个可调用的对象被用来处理请求以及生成响应。处理程序由框架的使用者编写，如上文所说的那样，应该返回字符串或者 <code>Response</code> 对象。<code>Response</code> 对象提供了一个友好的接口，因此这个简单的 if 语句保证了无论处理程序返回什么，代码最终都得到一个统一的 <code>Response</code> 对象。</p><p>接下来，被赋值给 <code>self._writer</code> 的 <code>StreamWriter</code> 实例被调用，将字节字符串发送回客户端。函数返回前，程序在 <code>await self._writer.drain()</code> 处等待，以确保所有的数据被发送给客户端。只要缓存中还有未发送的数据，<code>self._writer.close()</code> 方法就不会执行。</p><p><code>HTTPConnection</code> 类还有两个更加有趣的部分：一个用于关闭连接的方法，以及一组用来处理超时机制的方法。首先，关闭一条连接由下面这个小函数完成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def close_connection(self):</span></span>
<span class="line"><span>    self._cancel_conn_timeout()</span></span>
<span class="line"><span>    self._writer.close()</span></span></code></pre></div><p>每当一条连接将被关闭时，这段代码首先取消超时，然后把连接从事件循环中清除。</p><p>超时机制由三个相关的函数组成：第一个函数在超时后给客户端发送错误消息并关闭连接；第二个函数用于取消当前的超时；第三个函数调度超时功能。前两个函数比较简单，我将详细解释第三个函数 <code>_reset_cpmm_timeout()</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def _conn_timeout_close(self):</span></span>
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
<span class="line"><span>        timeout, self._conn_timeout_close)</span></span></code></pre></div>`,9)),a("p",null,[s[45]||(s[45]=n("每当 ",-1)),s[46]||(s[46]=a("code",null,"_reset_conn_timeout",-1)),s[47]||(s[47]=n(" 函数被调用时，它会先取消之前所有赋值给 ",-1)),s[48]||(s[48]=a("code",null,"self._conn_timeout",-1)),s[49]||(s[49]=n(" 的 ",-1)),s[50]||(s[50]=a("code",null,"asyncio.Handle",-1)),s[51]||(s[51]=n(" 对象。然后，使用 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.BaseEventLoop.call_later"},{default:l(()=>[...s[44]||(s[44]=[n("BaseEventLoop.call_later",-1)])]),_:1}),s[52]||(s[52]=n(" 函数让 ",-1)),s[53]||(s[53]=a("code",null,"_conn_timeout_close",-1)),s[54]||(s[54]=n(" 函数在超时数秒（",-1)),s[55]||(s[55]=a("code",null,"timeout",-1)),s[56]||(s[56]=n("）后执行。如果你还记得 ",-1)),s[57]||(s[57]=a("code",null,"handle_request",-1)),s[58]||(s[58]=n(" 函数的内容，就知道每当接收到数据时，这个函数就会被调用。这就取消了当前的超时并且重新安排 ",-1)),s[59]||(s[59]=a("code",null,"_conn_timeout_close",-1)),s[60]||(s[60]=n(" 函数在超时数秒（",-1)),s[61]||(s[61]=a("code",null,"timeout",-1)),s[62]||(s[62]=n("）后执行。只要接收到数据，这个循环就会不断地重置超时回调。如果在超时时间内没有接收到数据，最后函数 ",-1)),s[63]||(s[63]=a("code",null,"_conn_timeout_close",-1)),s[64]||(s[64]=n(" 就会被调用。",-1))]),s[134]||(s[134]=t(`<h3 id="创建连接" tabindex="-1">创建连接 <a class="header-anchor" href="#创建连接" aria-label="Permalink to “创建连接”">​</a></h3><p>我们需要创建 <code>HTTPConnection</code> 对象，并且正确地使用它们。这一任务由 <code>HTTPServer</code> 类完成。<code>HTTPServer</code> 类是一个简单的容器，可以存储着一些配置信息（解析器，路由和事件循环实例），并使用这些配置来创建 <code>HTTPConnection</code> 实例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class HTTPServer(object):</span></span>
<span class="line"><span>    def init(self, router, http_parser, loop):</span></span>
<span class="line"><span>        self.router = router</span></span>
<span class="line"><span>        self.http_parser = http_parser</span></span>
<span class="line"><span>        self.loop = loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def handle_connection(self, reader, writer):</span></span>
<span class="line"><span>        connection = HTTPConnection(self, reader, writer)</span></span>
<span class="line"><span>        asyncio.ensure_future(connection.handle_request(), loop=self.loop)</span></span></code></pre></div>`,3)),a("p",null,[s[66]||(s[66]=a("code",null,"HTTPServer",-1)),s[67]||(s[67]=n(" 的每一个实例能够监听一个端口。它有一个 ",-1)),s[68]||(s[68]=a("code",null,"handle_connection",-1)),s[69]||(s[69]=n(" 的异步方法来创建 ",-1)),s[70]||(s[70]=a("code",null,"HTTPConnection",-1)),s[71]||(s[71]=n(" 的实例，并安排它们在事件循环中运行。这个方法被传递给 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-stream.html#asyncio.start_server"},{default:l(()=>[...s[65]||(s[65]=[n("asyncio.start_server",-1)])]),_:1}),s[72]||(s[72]=n(" 作为一个回调函数。也就是说，每当一个 TCP 连接初始化时（以 ",-1)),s[73]||(s[73]=a("code",null,"StreamReader",-1)),s[74]||(s[74]=n(" 和 ",-1)),s[75]||(s[75]=a("code",null,"StreamWriter",-1)),s[76]||(s[76]=n(" 为参数），它就会被调用。",-1))]),s[135]||(s[135]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   self._server = HTTPServer(self.router, self.http_parser, self.loop)</span></span>
<span class="line"><span>   self._connection_handler = asyncio.start_server(</span></span>
<span class="line"><span>        self._server.handle_connection,</span></span>
<span class="line"><span>        host=self.host,</span></span>
<span class="line"><span>        port=self.port,</span></span>
<span class="line"><span>        reuse_address=True,</span></span>
<span class="line"><span>        reuse_port=True,</span></span>
<span class="line"><span>        loop=self.loop)</span></span></code></pre></div><p>这就是构成整个应用程序工作原理的核心：<code>asyncio.start_server</code> 接受 TCP 连接，然后在一个预配置的 <code>HTTPServer</code> 对象上调用一个方法。这个方法将处理一条 TCP 连接的所有逻辑：读取、解析、生成响应并发送回客户端、以及关闭连接。它的重点是 IO 逻辑、解析和生成响应。</p><p>讲解了核心的 IO 部分，让我们继续。</p><h3 id="解析请求" tabindex="-1">解析请求 <a class="header-anchor" href="#解析请求" aria-label="Permalink to “解析请求”">​</a></h3><p>这个微型框架的使用者被宠坏了，不愿意和字节打交道。它们想要一个更高层次的抽象 —— 一种更加简单的方法来处理请求。这个微型框架就包含了一个简单的 HTTP 解析器，能够将字节流转化为 Request 对象。</p><p>这些 Request 对象是像这样的容器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class Request(object):</span></span>
<span class="line"><span>    def init(self):</span></span>
<span class="line"><span>        self.method = None</span></span>
<span class="line"><span>        self.path = None</span></span>
<span class="line"><span>        self.query_params = {}</span></span>
<span class="line"><span>        self.path_params = {}</span></span>
<span class="line"><span>        self.headers = {}</span></span>
<span class="line"><span>        self.body = None</span></span>
<span class="line"><span>        self.body_raw = None</span></span>
<span class="line"><span>        self.finished = False</span></span></code></pre></div><p>它包含了所有需要的数据，可以用一种容易理解的方法从客户端接受数据。哦，不包括 cookie ，它对身份认证是非常重要的，我会将它留在第二部分。</p><p>每一个 HTTP 请求都包含了一些必需的内容，如请求路径和请求方法。它们也包含了一些可选的内容，如请求体、请求头，或是 URL 参数。随着 REST 的流行，除了 URL 参数，URL 本身会包含一些信息。比如，&quot;/user/1/edit&quot; 包含了用户的 id 。</p><p>一个请求的每个部分都必须被识别、解析，并正确地赋值给 Request 对象的对应属性。HTTP/1.1 是一个文本协议，事实上这简化了很多东西。（HTTP/2 是一个二进制协议，这又是另一种乐趣了）</p><p>解析器不需要跟踪状态，因此 <code>http_parser</code> 模块其实就是一组函数。调用函数需要用到 <code>Request</code> 对象，并将它连同一个包含原始请求信息的字节数组传递给 <code>parse_into</code> 函数。然后解析器会修改 <code>Request</code> 对象以及充当缓存的字节数组。字节数组的信息被逐渐地解析到 request 对象中。</p><p><code>http_parser</code> 模块的核心功能就是下面这个 <code>parse_into</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def parse_into(request, buffer):</span></span>
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
<span class="line"><span>    return _buffer</span></span></code></pre></div><p>从上面的代码中可以看到，我把解析的过程分为三个部分：解析请求行（这行像这样：GET /resource HTTP/1.1），解析请求头以及解析请求体。</p><p>请求行包含了 HTTP 请求方法以及 URL 地址。而 URL 地址则包含了更多的信息：路径、url 参数和开发者自定义的 url 参数。解析请求方法和 URL 还是很容易的 - 合适地分割字符串就好了。函数 <code>urlparse.parse</code> 可以用来解析 URL 参数。开发者自定义的 URL 参数可以通过正则表达式来解析。</p><p>接下来是 HTTP 头部。它们是一行行由键值对组成的简单文本。问题在于，可能有多个 HTTP 头有相同的名字，却有不同的值。一个值得关注的 HTTP 头部是 <code>Content-Length</code>，它描述了请求体的字节长度（不是整个请求，仅仅是请求体）。这对于决定是否解析请求体有很重要的作用。</p><p>最后，解析器根据 HTTP 方法和头部来决定是否解析请求体。</p><h3 id="路由" tabindex="-1">路由！ <a class="header-anchor" href="#路由" aria-label="Permalink to “路由！”">​</a></h3><p>在某种意义上，路由就像是连接框架和用户的桥梁，用户用合适的方法创建 <code>Router</code> 对象并为其设置路径/函数对，然后将它赋值给 App 对象。而 App 对象依次调用 <code>get_handler</code> 函数生成相应的回调函数。简单来说，路由就负责两件事，一是存储路径/函数对，二是返回需要的路径/函数对</p><p><code>Router</code> 类中有两个允许最终开发者添加路由的方法，分别是 <code>add_routes</code> 和 <code>add_route</code>。因为 <code>add_routes</code> 就是 <code>add_route</code> 函数的一层封装，我们将主要讲解 <code>add_route</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def add_route(self, path, handler):</span></span>
<span class="line"><span>    compiled_route = self.class.build_route_regexp(path)</span></span>
<span class="line"><span>    if compiled_route not in self.routes:</span></span>
<span class="line"><span>        self.routes[compiled_route] = handler</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        raise DuplicateRoute</span></span></code></pre></div><p>首先，这个函数使用 <code>Router.build_router_regexp</code> 的类方法，将一条路由规则（如 &#39;/cars/{id}&#39; 这样的字符串），“编译”到一个已编译的正则表达式对象。这些已编译的正则表达式用来匹配请求路径，以及解析开发者自定义的 URL 参数。如果已经存在一个相同的路由，程序就会抛出一个异常。最后，这个路由/处理程序对被添加到一个简单的字典<code>self.routes</code>中。</p><p>下面展示 Router 是如何“编译”路由的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@classmethod</span></span>
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
<span class="line"><span>    return re.compile(re_str)</span></span></code></pre></div><p>这个方法使用正则表达式将所有出现的 <code>{variable}</code> 替换为 <code>(?P&lt;variable&gt;)</code>。然后在字符串头尾分别添加 <code>^</code> 和 <code>$</code> 标记，最后编译正则表达式对象。</p><p>完成了路由存储仅成功了一半，下面是如何得到路由对应的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def get_handler(self, path):</span></span>
<span class="line"><span>    logger.debug(&#39;Getting handler for: {0}&#39;.format(path))</span></span>
<span class="line"><span>    for route, handler in self.routes.items():</span></span>
<span class="line"><span>        path_params = self.class.match_path(route, path)</span></span>
<span class="line"><span>        if path_params is not None:</span></span>
<span class="line"><span>            logger.debug(&#39;Got handler for: {0}&#39;.format(path))</span></span>
<span class="line"><span>            wrapped_handler = HandlerWrapper(handler, path_params)</span></span>
<span class="line"><span>            return wrapped_handler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    raise NotFoundException()</span></span></code></pre></div><p>一旦 <code>App</code> 对象获得一个 <code>Request</code> 对象，也就获得了 URL 的路径部分（如 /users/15/edit）。然后，我们需要匹配函数来生成一个响应或者 404 错误。<code>get_handler</code> 函数将路径作为参数，循环遍历路由，对每条路由调用 <code>Router.match_path</code> 类方法检查是否有已编译的正则对象与这个请求路径匹配。如果存在，我们就调用 <code>HandleWrapper</code> 来包装路由对应的函数。<code>path_params</code> 字典包含了路径变量（如 &#39;/users/15/edit&#39; 中的 &#39;15&#39;），若路由没有指定变量，字典就为空。最后，我们将包装好的函数返回给 <code>App</code> 对象。</p><p>如果遍历了所有的路由都找不到与路径匹配的，函数就会抛出 <code>NotFoundException</code> 异常。</p><p>这个 <code>Route.match</code> 类方法挺简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def match_path(cls, route, path):</span></span>
<span class="line"><span>    match = route.match(path)</span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        return match.groupdict()</span></span>
<span class="line"><span>    except AttributeError:</span></span>
<span class="line"><span>        return None</span></span></code></pre></div>`,31)),a("p",null,[s[78]||(s[78]=n("它使用正则对象的 ",-1)),p(e,{href:"https://docs.python.org/3/library/re.html#re.match"},{default:l(()=>[...s[77]||(s[77]=[n("match 方法",-1)])]),_:1}),s[79]||(s[79]=n("来检查路由是否与路径匹配。若果不匹配，则返回 None 。",-1))]),s[136]||(s[136]=t(`<p>最后，我们有 <code>HandleWraapper</code> 类。它的唯一任务就是封装一个异步函数，存储 <code>path_params</code> 字典，并通过 <code>handle</code> 方法对外提供一个统一的接口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class HandlerWrapper(object):</span></span>
<span class="line"><span>    def init(self, handler, path_params):</span></span>
<span class="line"><span>        self.handler = handler</span></span>
<span class="line"><span>        self.path_params = path_params</span></span>
<span class="line"><span>        self.request = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    async def handle(self, request):</span></span>
<span class="line"><span>        return await self.handler(request, **self.path_params)</span></span></code></pre></div><h3 id="组合到一起" tabindex="-1">组合到一起 <a class="header-anchor" href="#组合到一起" aria-label="Permalink to “组合到一起”">​</a></h3><p>框架的最后部分就是用 <code>App</code> 类把所有的部分联系起来。</p>`,4)),a("p",null,[s[81]||(s[81]=a("code",null,"App",-1)),s[82]||(s[82]=n(" 类用于集中所有的配置细节。一个 ",-1)),s[83]||(s[83]=a("code",null,"App",-1)),s[84]||(s[84]=n(" 对象通过其 ",-1)),s[85]||(s[85]=a("code",null,"start_server",-1)),s[86]||(s[86]=n(" 方法，使用一些配置数据创建一个 ",-1)),s[87]||(s[87]=a("code",null,"HTTPServer",-1)),s[88]||(s[88]=n(" 的实例，然后将它传递给 ",-1)),p(e,{href:"https://docs.python.org/3/library/asyncio-stream.html?highlight=start_server#asyncio.start_server"},{default:l(()=>[...s[80]||(s[80]=[n("asyncio.start_server 函数",-1)])]),_:1}),s[89]||(s[89]=n("。",-1)),s[90]||(s[90]=a("code",null,"asyncio.start_server",-1)),s[91]||(s[91]=n(" 函数会对每一个 TCP 连接调用 ",-1)),s[92]||(s[92]=a("code",null,"HTTPServer",-1)),s[93]||(s[93]=n(" 对象的 ",-1)),s[94]||(s[94]=a("code",null,"handle_connection",-1)),s[95]||(s[95]=n(" 方法。",-1))]),s[137]||(s[137]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def start_server(self):</span></span>
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
<span class="line"><span>        logger.info(&#39;Server already started - {0}&#39;.format(self))</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>如果你查看源码，就会发现所有的代码仅 320 余行（包括测试代码的话共 540 余行）。这么少的代码实现了这么多的功能，让我有点惊讶。这个框架没有提供模板、身份认证以及数据库访问等功能（这些内容也很有趣哦）。这也让我知道，像 Django 和 Tornado 这样的框架是如何工作的，而且我能够快速地调试它们了。</p><p>这也是我按照测试驱动开发完成的第一个项目，整个过程有趣而有意义。先编写测试用例迫使我思考设计和架构，而不仅仅是把代码放到一起，让它们可以运行。不要误解我的意思，有很多时候，后者的方式更好。不过如果你想给确保这些不怎么维护的代码在之后的几周甚至几个月依然工作，那么测试驱动开发正是你需要的。</p>`,4)),a("p",null,[s[97]||(s[97]=n("我研究了下",-1)),p(e,{href:"https://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html"},{default:l(()=>[...s[96]||(s[96]=[n("整洁架构",-1)])]),_:1}),s[98]||(s[98]=n("以及依赖注入模式，这些充分体现在 ",-1)),s[99]||(s[99]=a("code",null,"Router",-1)),s[100]||(s[100]=n(" 类是如何作为一个更高层次的抽象的（实体？）。",-1)),s[101]||(s[101]=a("code",null,"Router",-1)),s[102]||(s[102]=n(" 类是比较接近核心的，像 ",-1)),s[103]||(s[103]=a("code",null,"http_parser",-1)),s[104]||(s[104]=n(" 和 ",-1)),s[105]||(s[105]=a("code",null,"App",-1)),s[106]||(s[106]=n(" 的内容比较边缘化，因为它们只是完成了极小的字符串和字节流、或是中层 IO 的工作。测试驱动开发（TDD）迫使我独立思考每个小部分，这使我问自己这样的问题：方法调用的组合是否易于理解？类名是否准确地反映了我正在解决的问题？我的代码中是否很容易区分出不同的抽象层？",-1))]),s[138]||(s[138]=a("p",null,"来吧，写个小框架，真的很有趣：）",-1)),s[139]||(s[139]=a("hr",null,null,-1)),a("p",null,[s[108]||(s[108]=n("via: ",-1)),p(e,{href:"http://mattscodecave.com/posts/simple-python-framework-from-scratch.html"},{default:l(()=>[...s[107]||(s[107]=[n("http://mattscodecave.com/posts/simple-python-framework-from-scratch.html",-1)])]),_:1})]),a("p",null,[s[112]||(s[112]=n("作者：",-1)),p(e,{href:"http://mattscodecave.com/hire-me.html"},{default:l(()=>[...s[109]||(s[109]=[n("Matt",-1)])]),_:1}),s[113]||(s[113]=n(" 译者：",-1)),p(e,{href:"https://github.com/Cathon"},{default:l(()=>[...s[110]||(s[110]=[n("Cathon",-1)])]),_:1}),s[114]||(s[114]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[111]||(s[111]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[117]||(s[117]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[115]||(s[115]=[n("LCTT",-1)])]),_:1}),s[118]||(s[118]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[116]||(s[116]=[n("Linux中国",-1)])]),_:1}),s[119]||(s[119]=n(" 荣誉推出",-1))])])}const _=i(u,[["render",f]]);export{y as __pageData,_ as default};
