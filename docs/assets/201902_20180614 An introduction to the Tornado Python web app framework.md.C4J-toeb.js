import{_ as l,a0 as i,w as d,s as r,I as a,x as n,a1 as e,A as o,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Python Web 应用程序 Tornado  框架简介 | LCTT x X-CMD","titleTemplate":false,"description":"Python Web 应用程序 Tornado  框架简介 | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python Web 应用程序 Tornado  框架简介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python Web 应用程序 Tornado  框架简介 | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20180614 An introduction to the Tornado Python web app framework","title":"Python Web 应用程序 Tornado  框架简介","tag":"201902","desc":""},"relativePath":"201902/20180614 An introduction to the Tornado Python web app framework.md","filePath":"[post].md"}'),c={name:"201902/20180614 An introduction to the Tornado Python web app framework.md"};function u(f,s,h,m,k,g){const p=i("Link");return d(),r("div",null,[s[71]||(s[71]=a("h1",{id:"python-web-应用程序-tornado-框架简介",tabindex:"-1"},[n("Python Web 应用程序 Tornado 框架简介 "),a("a",{class:"header-anchor",href:"#python-web-应用程序-tornado-框架简介","aria-label":"Permalink to “Python Web 应用程序 Tornado  框架简介”"},"​")],-1)),s[72]||(s[72]=a("blockquote",null,[a("p",null,"在比较 Python 框架的系列文章的第三部分中，我们来了解 Tornado，它是为处理异步进程而构建的。")],-1)),s[73]||(s[73]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/tornado.png?itok=kAa3eXIU",alt:""})],-1)),a("p",null,[s[2]||(s[2]=n("在这个由四部分组成的系列文章的前两篇中，我们介绍了 ",-1)),e(p,{href:"https://opensource.com/article/18/5/pyramid-framework"},{default:o(()=>[...s[0]||(s[0]=[n("Pyramid",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),e(p,{href:"https://opensource.com/article/18/4/flask"},{default:o(()=>[...s[1]||(s[1]=[n("Flask",-1)])]),_:1}),s[4]||(s[4]=n(" Web 框架。我们已经构建了两次相同的应用程序，看到了一个完整的 DIY 框架和包含了更多功能的框架之间的异同。",-1))]),a("p",null,[s[6]||(s[6]=n("现在让我们来看看另一个稍微不同的选择：",-1)),e(p,{href:"https://tornado.readthedocs.io/en/stable/"},{default:o(()=>[...s[5]||(s[5]=[n("Tornado 框架",-1)])]),_:1}),s[7]||(s[7]=n("。Tornado 在很大程度上与 Flask 一样简单，但有一个主要区别：Tornado 是专门为处理异步进程而构建的。在我们本系列所构建的应用程序中，这种特殊的酱料（LCTT 译注：这里意思是 Tornado 的异步功能）在我们构建的 app 中并不是非常有用，但我们将看到在哪里可以使用它，以及它在更一般的情况下是如何工作的。",-1))]),s[74]||(s[74]=t(`<p>让我们继续前两篇文章中模式，首先从处理设置和配置开始。</p><h3 id="tornado-启动和配置" tabindex="-1">Tornado 启动和配置 <a class="header-anchor" href="#tornado-启动和配置" aria-label="Permalink to “Tornado 启动和配置”">​</a></h3><p>如果你一直关注这个系列，那么第一步应该对你来说习以为常。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir tornado_todo</span></span>
<span class="line"><span>$ cd tornado_todo</span></span>
<span class="line"><span>$ pipenv install --python 3.6</span></span>
<span class="line"><span>$ pipenv shell</span></span>
<span class="line"><span>(tornado-someHash) $ pipenv install tornado</span></span></code></pre></div><p>创建一个 <code>setup.py</code> 文件来安装我们的应用程序相关的东西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(tornado-someHash) $ touch setup.py</span></span>
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
<span class="line"><span>)</span></span></code></pre></div><p>因为 Tornado 不需要任何外部配置，所以我们可以直接编写 Python 代码来让程序运行。让我们创建 <code>todo</code> 目录，并用需要的前几个文件填充它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>todo/</span></span>
<span class="line"><span>    __init__.py</span></span>
<span class="line"><span>    models.py</span></span>
<span class="line"><span>    views.py</span></span></code></pre></div><p>就像 Flask 和 Pyramid 一样，Tornado 也有一些基本配置，放在 <code>__init__.py</code> 中。从 <code>tornado.web</code> 中，我们将导入 <code>Application</code> 对象，它将处理路由和视图的连接，包括数据库（当我们谈到那里时再说）以及运行 Tornado 应用程序所需的其它额外设置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main():</span></span>
<span class="line"><span>    &quot;&quot;&quot;Construct and serve the tornado application.&quot;&quot;&quot;</span></span>
<span class="line"><span>    app = Application()</span></span></code></pre></div><p>像 Flask 一样，Tornado 主要是一个 DIY 框架。当构建我们的 app 时，我们必须设置该应用实例。因为 Tornado 用它自己的 HTTP 服务器来提供该应用，我们必须设置如何提供该应用。首先，在 <code>tornado.options.define</code> 中定义要监听的端口。然后我们实例化 Tornado 的 <code>HTTPServer</code>，将该 <code>Application</code> 对象的实例作为参数传递给它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
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
<span class="line"><span>    http_server.listen(options.port)</span></span></code></pre></div><p>当我们使用 <code>define</code> 函数时，我们最终会在 <code>options</code> 对象上创建属性。第一个参数位置的任何内容都将是属性的名称，分配给 <code>default</code> 关键字参数的内容将是该属性的值。</p><p>例如，如果我们将属性命名为 <code>potato</code> 而不是 <code>port</code>，我们可以通过 <code>options.potato</code> 访问它的值。</p><p>在 <code>HTTPServer</code> 上调用 <code>listen</code> 并不会启动服务器。我们必须再做一步，找一个可以监听请求并返回响应的工作应用程序，我们需要一个输入输出循环。幸运的是，Tornado 以 <code>tornado.ioloop.IOLoop</code> 的形式提供了开箱即用的功能。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
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
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><p>我喜欢某种形式的 <code>print</code> 语句，来告诉我什么时候应用程序正在提供服务，这是我的习惯。如果你愿意，可以不使用 <code>print</code>。</p><p>我们以 <code>IOLoop.current().start()</code> 开始我们的 I/O 循环。让我们进一步讨论输入，输出和异步性。</p><h3 id="python-中的异步和-i-o-循环的基础知识" tabindex="-1">Python 中的异步和 I/O 循环的基础知识 <a class="header-anchor" href="#python-中的异步和-i-o-循环的基础知识" aria-label="Permalink to “Python 中的异步和 I/O 循环的基础知识”">​</a></h3><p>请允许我提前说明，我绝对，肯定，一定并且放心地说不是异步编程方面的专家。就像我写的所有内容一样，接下来的内容源于我对这个概念的理解的局限性。因为我是人，可能有很深很深的缺陷。</p><p>异步程序的主要问题是：</p><pre><code>* 数据如何进来？
* 数据如何出去？
* 什么时候可以在不占用我全部注意力情况下运行某个过程？
</code></pre>`,22)),a("p",null,[s[10]||(s[10]=n("由于",-1)),e(p,{href:"https://realpython.com/python-gil/"},{default:o(()=>[...s[8]||(s[8]=[n("全局解释器锁",-1)])]),_:1}),s[11]||(s[11]=n("（GIL），Python 被设计为一种",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Thread_(computing)"},{default:o(()=>[...s[9]||(s[9]=[n("单线程",-1)])]),_:1}),s[12]||(s[12]=n("语言。对于 Python 程序必须执行的每个任务，其线程执行的全部注意力都集中在该任务的持续时间内。我们的 HTTP 服务器是用 Python 编写的，因此，当接收到数据（如 HTTP 请求）时，服务器的唯一关心的是传入的数据。这意味着，在大多数情况下，无论是程序需要运行还是处理数据，程序都将完全消耗服务器的执行线程，阻止接收其它可能的数据，直到服务器完成它需要做的事情。",-1))]),a("p",null,[s[14]||(s[14]=n("在许多情况下，这不是太成问题。典型的 Web 请求，响应周期只需要几分之一秒。除此之外，构建 HTTP 服务器的套接字可以维护待处理的传入请求的积压。因此，如果请求在该套接字处理其它内容时进入，则它很可能只是在处理之前稍微排队等待一会。对于低到中等流量的站点，几分之一秒的时间并不是什么大问题，你可以使用多个部署的实例以及 ",-1)),e(p,{href:"https://www.nginx.com/"},{default:o(()=>[...s[13]||(s[13]=[n("NGINX",-1)])]),_:1}),s[15]||(s[15]=n(" 等负载均衡器来为更大的请求负载分配流量。",-1))]),s[75]||(s[75]=t(`<p>但是，如果你的平均响应时间超过一秒钟，该怎么办？如果你使用来自传入请求的数据来启动一些长时间的过程（如机器学习算法或某些海量数据库查询），该怎么办？现在，你的单线程 Web 服务器开始累积一个无法寻址的积压请求，其中一些请求会因为超时而被丢弃。这不是一种选择，特别是如果你希望你的服务在一段时间内是可靠的。</p><p>异步 Python 程序登场。重要的是要记住因为它是用 Python 编写的，所以程序仍然是一个单线程进程。除非特别标记，否则在异步程序中仍然会阻塞执行。</p><p>但是，当异步程序结构正确时，只要你指定某个函数应该具有这样的能力，你的异步 Python 程序就可以“搁置”长时间运行的任务。然后，当搁置的任务完成并准备好恢复时，异步控制器会收到报告，只要在需要时管理它们的执行，而不会完全阻塞对新输入的处理。</p><p>这有点夸张，所以让我们用一个人类的例子来证明。</p><h3 id="带回家吧" tabindex="-1">带回家吧 <a class="header-anchor" href="#带回家吧" aria-label="Permalink to “带回家吧”">​</a></h3><p>我经常发现自己在家里试图完成很多家务，但没有多少时间来做它们。在某一天，积压的家务可能看起来像：</p><pre><code>* 做饭（20 分钟准备，40 分钟烹饪）
* 洗碗（60 分钟）
* 洗涤并擦干衣物（30 分钟洗涤，每次干燥 90 分钟）
* 真空清洗地板（30 分钟）
</code></pre><p>如果我是一个传统的同步程序，我会亲自完成每项任务。在我考虑处理任何其他事情之前，每项任务都需要我全神贯注地完成。因为如果没有我的全力关注，什么事情都完成不了。所以我的执行顺序可能如下：</p><pre><code>1. 完全专注于准备和烹饪食物，包括等待食物烹饪（60 分钟）
2. 将脏盘子移到水槽中（65 分钟过去了）
3. 清洗所有盘子（125 分钟过去了）
4. 开始完全专注于洗衣服，包括等待洗衣机洗完，然后将衣物转移到烘干机，再等烘干机完成（ 250 分钟过去了）
5. 对地板进行真空吸尘（280 分钟了）
</code></pre><p>从头到尾完成所有事情花费了 4 小时 40 分钟。</p><p>我应该像异步程序一样聪明地工作，而不是努力工作。我的家里到处都是可以为我工作的机器，而不用我一直努力工作。同时，现在我可以将注意力转移真正需要的东西上。</p><p>我的执行顺序可能看起来像：</p><pre><code>1. 将衣物放入洗衣机并启动它（5 分钟）
2. 在洗衣机运行时，准备食物（25 分钟过去了）
3. 准备好食物后，开始烹饪食物（30 分钟过去了）
4. 在烹饪食物时，将衣物从洗衣机移到烘干机机中开始烘干（35 分钟过去了）
5. 当烘干机运行中，且食物仍在烹饪时，对地板进行真空吸尘（65 分钟过去了）
6. 吸尘后，将食物从炉子中取出并装盘子入洗碗机（70 分钟过去了）
7. 运行洗碗机（130 分钟完成）
</code></pre><p>现在花费的时间下降到 2 小时 10 分钟。即使我允许在作业之间切换花费更多时间（总共 10-20 分钟）。如果我等待着按顺序执行每项任务，我花费的时间仍然只有一半左右。这就是将程序构造为异步的强大功能。</p><h4 id="那么-i-o-循环在哪里" tabindex="-1">那么 I/O 循环在哪里？ <a class="header-anchor" href="#那么-i-o-循环在哪里" aria-label="Permalink to “那么 I/O 循环在哪里？”">​</a></h4><p>一个异步 Python 程序的工作方式是从某个外部源（输入）获取数据，如果某个进程需要，则将该数据转移到某个外部工作者（输出）进行处理。当外部进程完成时，Python 主程序会收到提醒，然后程序获取外部处理（输入）的结果，并继续这样其乐融融的方式。</p><p>当数据不在 Python 主程序手中时，主程序就会被释放来处理其它任何事情。包括等待全新的输入（如 HTTP 请求）和处理长时间运行的进程的结果（如机器学习算法的结果，长时间运行的数据库查询）。主程序虽仍然是单线程的，但成了事件驱动的，它对程序处理的特定事件会触发动作。监听这些事件并指示应如何处理它们的主要是 I/O 循环在工作。</p><p>我知道，我们走了很长的路才得到这个重要的解释，但我希望在这里传达的是，它不是魔术，也不是某种复杂的并行处理或多线程工作。全局解释器锁仍然存在，主程序中任何长时间运行的进程仍然会阻塞其它任何事情的进行，该程序仍然是单线程的。然而，通过将繁琐的工作外部化，我们可以将线程的注意力集中在它需要注意的地方。</p><p>这有点像我上面的异步任务。当我的注意力完全集中在准备食物上时，它就是我所能做的一切。然而，当我能让炉子帮我做饭，洗碗机帮我洗碗，洗衣机和烘干机帮我洗衣服时，我的注意力就会被释放出来，去做其它事情。当我被提醒，我的一个长时间运行的任务已经完成并准备再次处理时，如果我的注意力是空闲的，我可以获取该任务的结果，并对其做下一步需要做的任何事情。</p><h3 id="tornado-路由和视图" tabindex="-1">Tornado 路由和视图 <a class="header-anchor" href="#tornado-路由和视图" aria-label="Permalink to “Tornado 路由和视图”">​</a></h3><p>尽管经历了在 Python 中讨论异步的所有麻烦，我们还是决定暂不使用它。先来编写一个基本的 Tornado 视图。</p><p>与我们在 Flask 和 Pyramid 实现中看到的基于函数的视图不同，Tornado 的视图都是基于类的。这意味着我们将不在使用单独的、独立的函数来规定如何处理请求。相反，传入的 HTTP 请求将被捕获并将其分配为我们定义的类的一个属性。然后，它的方法将处理相应的请求类型。</p><p>让我们从一个基本的视图开始，即在屏幕上打印 “Hello, World”。我们为 Tornado 应用程序构造的每个基于类的视图都必须继承 <code>tornado.web</code> 中的 <code>RequestHandler</code> 对象。这将设置我们需要（但不想写）的所有底层逻辑来接收请求，同时构造正确格式的 HTTP 响应。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class HelloWorld(RequestHandler):</span></span>
<span class="line"><span>    &quot;&quot;&quot;Print &#39;Hello, world!&#39; as the response body.&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;Handle a GET request for saying Hello World!.&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.write(&quot;Hello, world!&quot;)</span></span></code></pre></div><p>因为我们要处理 <code>GET</code> 请求，所以我们声明（实际上是重写）了 <code>get</code> 方法。我们提供文本或 JSON 可序列化对象，用 <code>self.write</code> 写入响应体。之后，我们让 <code>RequestHandler</code> 来做在发送响应之前必须完成的其它工作。</p><p>就目前而言，此视图与 Tornado 应用程序本身并没有实际连接。我们必须回到 <code>__init__.py</code>，并稍微更新 <code>main</code> 函数。以下是新的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
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
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><h4 id="我们做了什么" tabindex="-1">我们做了什么 <a class="header-anchor" href="#我们做了什么" aria-label="Permalink to “我们做了什么”">​</a></h4><p>我们将 <code>views.py</code> 文件中的 <code>HelloWorld</code> 视图导入到脚本 <code>__init__.py</code> 的顶部。然后我们添加了一个路由-视图对应的列表，作为 <code>Application</code> 实例化的第一个参数。每当我们想要在应用程序中声明一个路由时，它必须绑定到一个视图。如果需要，可以对多个路由使用相同的视图，但每个路由必须有一个视图。</p><p>我们可以通过在 <code>setup.py</code> 中启用的 <code>serve_app</code> 命令来运行应用程序，从而确保这一切都能正常工作。查看 <code>http://localhost:8888/</code> 并看到它显示 “Hello, world!”。</p><p>当然，在这个领域中我们还能做更多，也将做更多，但现在让我们来讨论模型吧。</p><h3 id="连接数据库" tabindex="-1">连接数据库 <a class="header-anchor" href="#连接数据库" aria-label="Permalink to “连接数据库”">​</a></h3>`,32)),a("p",null,[s[17]||(s[17]=n("如果我们想要保留数据，就需要连接数据库。与 Flask 一样，我们将使用一个特定于框架的 SQLAchemy 变体，名为 ",-1)),e(p,{href:"https://tornado-sqlalchemy.readthedocs.io/en/latest/"},{default:o(()=>[...s[16]||(s[16]=[n("tornado-sqlalchemy",-1)])]),_:1}),s[18]||(s[18]=n("。",-1))]),a("p",null,[s[20]||(s[20]=n("为什么要使用它而不是 ",-1)),e(p,{href:"https://www.sqlalchemy.org/"},{default:o(()=>[...s[19]||(s[19]=[n("SQLAlchemy",-1)])]),_:1}),s[21]||(s[21]=n(" 呢？好吧，其实 ",-1)),s[22]||(s[22]=a("code",null,"tornado-sqlalchemy",-1)),s[23]||(s[23]=n(" 具有简单 SQLAlchemy 的所有优点，因此我们仍然可以使用通用的 ",-1)),s[24]||(s[24]=a("code",null,"Base",-1)),s[25]||(s[25]=n(" 声明模型，并使用我们习以为常的所有列数据类型和关系。除了我们已经惯常了解到的，",-1)),s[26]||(s[26]=a("code",null,"tornado-sqlalchemy",-1)),s[27]||(s[27]=n(" 还为其数据库查询功能提供了一种可访问的异步模式，专门用于与 Tornado 现有的 I/O 循环一起工作。",-1))]),s[76]||(s[76]=t(`<p>我们通过将 <code>tornado-sqlalchemy</code> 和 <code>psycopg2</code> 添加到 <code>setup.py</code> 到所需包的列表并重新安装包来创建环境。在 <code>models.py</code> 中，我们声明了模型。这一步看起来与我们在 Flask 和 Pyramid 中已经看到的完全一样，所以我将跳过全部声明，只列出了 <code>Task</code> 模型的必要部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 这不是完整的 models.py, 但是足够看到不同点</span></span>
<span class="line"><span>from tornado_sqlalchemy import declarative_base</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Base = declarative_base</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Task(Base):</span></span>
<span class="line"><span>    # 等等，因为剩下的几乎所有的东西都一样 ...</span></span></code></pre></div><p>我们仍然需要将 <code>tornado-sqlalchemy</code> 连接到实际应用程序。在 <code>__init__.py</code> 中，我们将定义数据库并将其集成到应用程序中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
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
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><p>就像我们在 Pyramid 中传递的会话工厂一样，我们可以使用 <code>make_session_factory</code> 来接收数据库 URL 并生成一个对象，这个对象的唯一目的是为视图提供到数据库的连接。然后我们将新创建的 <code>factory</code> 传递给 <code>Application</code> 对象，并使用 <code>session_factory</code> 关键字参数将它绑定到应用程序中。</p><p>最后，初始化和管理数据库与 Flask 和 Pyramid 相同（即，单独的 DB 管理脚本，与 <code>Base</code> 对象一起工作等）。它看起来很相似，所以在这里我就不介绍了。</p><h3 id="回顾视图" tabindex="-1">回顾视图 <a class="header-anchor" href="#回顾视图" aria-label="Permalink to “回顾视图”">​</a></h3><p>Hello，World 总是适合学习基础知识，但我们需要一些真实的，特定应用程序的视图。</p><p>让我们从 info 视图开始。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
<span class="line"><span>import json</span></span>
<span class="line"><span>from tornado.web import RequestHandler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class InfoView(RequestHandler):</span></span>
<span class="line"><span>    &quot;&quot;&quot;只允许 GET 请求&quot;&quot;&quot;</span></span>
<span class="line"><span>    SUPPORTED_METHODS = [&quot;GET&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_default_headers(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;设置默认响应头为 json 格式的&quot;&quot;&quot;</span></span>
<span class="line"><span>        self.set_header(&quot;Content-Type&quot;, &#39;application/json; charset=&quot;utf-8&quot;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get(self):</span></span>
<span class="line"><span>        &quot;&quot;&quot;列出这个 API 的路由&quot;&quot;&quot;</span></span>
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
<span class="line"><span>        self.write(json.dumps(routes))</span></span></code></pre></div><p>有什么改变吗？让我们从上往下看。</p>`,11)),a("p",null,[s[29]||(s[29]=n("我们添加了 ",-1)),s[30]||(s[30]=a("code",null,"SUPPORTED_METHODS",-1)),s[31]||(s[31]=n(" 类属性，它是一个可迭代对象，代表这个视图所接受的请求方法，其他任何方法都将返回一个 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors"},{default:o(()=>[...s[28]||(s[28]=[n("405",-1)])]),_:1}),s[32]||(s[32]=n(" 状态码。当我们创建 ",-1)),s[33]||(s[33]=a("code",null,"HelloWorld",-1)),s[34]||(s[34]=n(" 视图时，我们没有指定它，主要是当时有点懒。如果没有这个类属性，此视图将响应任何试图绑定到该视图的路由的请求。",-1))]),s[77]||(s[77]=t(`<p>我们声明了 <code>set_default_headers</code> 方法，它设置 HTTP 响应的默认头。我们在这里声明它，以确保我们返回的任何响应都有一个 <code>&quot;Content-Type&quot;</code> 是 <code>&quot;application/json&quot;</code> 类型。</p><p>我们将 <code>json.dumps(some_object)</code> 添加到 <code>self.write</code> 的参数中，因为它可以很容易地构建响应主体的内容。</p><p>现在已经完成了，我们可以继续将它连接到 <code>__init__.py</code> 中的主路由。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># __init__.py</span></span>
<span class="line"><span>from tornado.httpserver import HTTPServer</span></span>
<span class="line"><span>from tornado.ioloop import IOLoop</span></span>
<span class="line"><span>from tornado.options import define, options</span></span>
<span class="line"><span>from tornado.web import Application</span></span>
<span class="line"><span>from todo.views import InfoView</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加这些</span></span>
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
<span class="line"><span>    IOLoop.current().start()</span></span></code></pre></div><p>我们知道，还需要编写更多的视图和路由。每个都会根据需要放入 <code>Application</code> 路由列表中，每个视图还需要一个 <code>set_default_headers</code> 方法。在此基础上，我们还将创建 <code>send_response</code> 方法，它的作用是将响应与我们想要给响应设置的任何自定义状态码打包在一起。由于每个视图都需要这两个方法，因此我们可以创建一个包含它们的基类，这样每个视图都可以继承基类。这样，我们只需要编写一次。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
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
<span class="line"><span>        self.write(json.dumps(data))</span></span></code></pre></div><p>对于我们即将编写的 <code>TaskListView</code> 这样的视图，我们还需要一个到数据库的连接。我们需要 <code>tornado_sqlalchemy</code> 中的 <code>SessionMixin</code> 在每个视图类中添加一个数据库会话。我们可以将它放在 <code>BaseView</code> 中，这样，默认情况下，从它继承的每个视图都可以访问数据库会话。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
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
<span class="line"><span>        self.write(json.dumps(data))</span></span></code></pre></div><p>只要我们修改 <code>BaseView</code> 对象，在将数据发布到这个 API 时，我们就应该定位到这里。</p><p>当 Tornado（从 v.4.5 开始）使用来自客户端的数据并将其组织起来到应用程序中使用时，它会将所有传入数据视为字节串。但是，这里的所有代码都假设使用 Python 3，因此我们希望使用的唯一字符串是 Unicode 字符串。我们可以为这个 <code>BaseView</code> 类添加另一个方法，它的工作是将输入数据转换为 Unicode，然后再在视图的其他地方使用。</p><p>如果我们想要在正确的视图方法中使用它之前转换这些数据，我们可以重写视图类的原生 <code>prepare</code> 方法。它的工作是在视图方法运行前运行。如果我们重写 <code>prepare</code> 方法，我们可以设置一些逻辑来运行，每当收到请求时，这些逻辑就会执行字节串到 Unicode 的转换。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># views.py</span></span>
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
<span class="line"><span>        self.write(json.dumps(data))</span></span></code></pre></div><p>如果有任何数据进入，它将在 <code>self.request.arguments</code> 字典中找到。我们可以通过键访问该数据库，并将其内容（始终是列表）转换为 Unicode。因为这是基于类的视图而不是基于函数的，所以我们可以将修改后的数据存储为一个实例属性，以便以后使用。我在这里称它为 <code>form_data</code>，但它也可以被称为 <code>potato</code>。关键是我们可以存储提交给应用程序的数据。</p><h3 id="异步视图方法" tabindex="-1">异步视图方法 <a class="header-anchor" href="#异步视图方法" aria-label="Permalink to “异步视图方法”">​</a></h3><p>现在我们已经构建了 <code>BaseaView</code>，我们可以构建 <code>TaskListView</code> 了，它会继承 <code>BaseaView</code>。</p><p>正如你可以从章节标题中看到的那样，以下是所有关于异步性的讨论。<code>TaskListView</code> 将处理返回任务列表的 <code>GET</code> 请求和用户给定一些表单数据来创建新任务的 <code>POST</code> 请求。让我们首先来看看处理 <code>GET</code> 请求的代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># all the previous imports</span></span>
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
<span class="line"><span>                })</span></span></code></pre></div><p>这里的第一个主要部分是 <code>@coroutine</code> 装饰器，它从 <code>tornado.gen</code> 导入。任何具有与调用堆栈的正常流程不同步的 Python 可调用部分实际上是“协程”，即一个可以与其它协程一起运行的协程。在我的家务劳动的例子中，几乎所有的家务活都是一个共同的例行协程。有些阻止了例行协程（例如，给地板吸尘），但这种例行协程只会阻碍我开始或关心其它任何事情的能力。它没有阻止已经启动的任何其他协程继续进行。</p><p>Tornado 提供了许多方法来构建一个利用协程的应用程序，包括允许我们设置函数调用锁，同步异步协程的条件，以及手动修改控制 I/O 循环的事件系统。</p><p>这里使用 <code>@coroutine</code> 装饰器的唯一条件是允许 <code>get</code> 方法将 SQL 查询作为后台进程，并在查询完成后恢复，同时不阻止 Tornado I/O 循环去处理其他传入的数据源。这就是关于此实现的所有“异步”：带外数据库查询。显然，如果我们想要展示异步 Web 应用程序的魔力和神奇，那么一个任务列表就不是好的展示方式。</p><p>但是，这就是我们正在构建的，所以让我们来看看方法如何利用 <code>@coroutine</code> 装饰器。<code>SessionMixin</code> 混合到 <code>BaseView</code> 声明中，为我们的视图类添加了两个方便的，支持数据库的属性：<code>session</code> 和 <code>make_session</code>。它们的名字相似，实现的目标也相当相似。</p><p><code>self.session</code> 属性是一个关注数据库的会话。在请求-响应周期结束时，在视图将响应发送回客户端之前，任何对数据库的更改都被提交，并关闭会话。</p><p><code>self.make_session</code> 是一个上下文管理器和生成器，可以动态构建和返回一个全新的会话对象。第一个 <code>self.session</code> 对象仍然存在。无论如何，反正 <code>make_session</code> 会创建一个新的。<code>make_session</code> 生成器还为其自身提供了一个功能，用于在其上下文（即缩进级别）结束时提交和关闭它创建的会话。</p><p>如果你查看源代码，则赋值给 <code>self.session</code> 的对象类型与 <code>self.make_session</code> 生成的对象类型之间没有区别，不同之处在于它们是如何被管理的。</p><p>使用 <code>make_session</code> 上下文管理器，生成的会话仅属于上下文，在该上下文中开始和结束。你可以使用 <code>make_session</code> 上下文管理器在同一个视图中打开，修改，提交以及关闭多个数据库会话。</p><p><code>self.session</code> 要简单得多，当你进入视图方法时会话已经打开，在响应被发送回客户端之前会话就已提交。</p>`,26)),a("p",null,[s[37]||(s[37]=n("虽然",-1)),e(p,{href:"https://tornado-sqlalchemy.readthedocs.io/en/latest/#usage"},{default:o(()=>[...s[35]||(s[35]=[n("读取文档片段",-1)])]),_:1}),s[38]||(s[38]=n("和 ",-1)),e(p,{href:"https://pypi.org/project/tornado-sqlalchemy/#description"},{default:o(()=>[...s[36]||(s[36]=[n("PyPI 示例",-1)])]),_:1}),s[39]||(s[39]=n("都说明了上下文管理器的使用，但是没有说明 ",-1)),s[40]||(s[40]=a("code",null,"self.session",-1)),s[41]||(s[41]=n(" 对象或由 ",-1)),s[42]||(s[42]=a("code",null,"self.make_session",-1)),s[43]||(s[43]=n(" 生成的 ",-1)),s[44]||(s[44]=a("code",null,"session",-1)),s[45]||(s[45]=n(" 本质上是不是异步的。当我们启动查询时，我们开始考虑内置于 ",-1)),s[46]||(s[46]=a("code",null,"tornado-sqlalchemy",-1)),s[47]||(s[47]=n(" 中的异步行为。",-1))]),s[78]||(s[78]=t(`<p><code>tornado-sqlalchemy</code> 包为我们提供了 <code>as_future</code> 函数。它的工作是装饰 <code>tornado-sqlalchemy</code> 会话构造的查询并 yield 其返回值。如果视图方法用 <code>@coroutine</code> 装饰，那么使用 <code>yield as_future(query)</code> 模式将使封装的查询成为一个异步后台进程。I/O 循环会接管等待查询的返回值和 <code>as_future</code> 创建的 <code>future</code> 对象的解析。</p><p>要访问 <code>as_future（query）</code> 的结果，你必须从它 <code>yield</code>。否则，你只能获得一个未解析的生成器对象，并且无法对查询执行任何操作。</p><p>这个视图方法中的其他所有内容都与之前课堂上的类似，与我们在 Flask 和 Pyramid 中看到的内容类似。</p><p><code>post</code> 方法看起来非常相似。为了保持一致性，让我们看一下 <code>post</code> 方法以及它如何处理用 <code>BaseView</code> 构造的 <code>self.form_data</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@coroutine</span></span>
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
<span class="line"><span>            self.send_response({&#39;msg&#39;: &#39;posted&#39;}, status=201)</span></span></code></pre></div><p>正如我所说，这是我们所期望的：</p><p>* 与我们在 <code>get</code> 方法中看到的查询模式相同   * 构造一个新的 <code>Task</code> 对象的实例，用 <code>form_data</code> 的数据填充   * 添加新的 <code>Task</code> 对象（但不提交，因为它由上下文管理器处理！）到数据库会话   * 将响应发送给客户端</p><p>这样我们就有了 Tornado web 应用程序的基础。其他内容（例如，数据库管理和更多完整应用程序的视图）实际上与我们在 Flask 和 Pyramid 应用程序中看到的相同。</p><h3 id="关于使用合适的工具完成合适的工作的一点想法" tabindex="-1">关于使用合适的工具完成合适的工作的一点想法 <a class="header-anchor" href="#关于使用合适的工具完成合适的工作的一点想法" aria-label="Permalink to “关于使用合适的工具完成合适的工作的一点想法”">​</a></h3><p>在我们继续浏览这些 Web 框架时，我们开始看到它们都可以有效地处理相同的问题。对于像这样的待办事项列表，任何框架都可以完成这项任务。但是，有些 Web 框架比其它框架更适合某些工作，这具体取决于对你来说什么“更合适”和你的需求。</p><p>虽然 Tornado 显然和 Pyramid 或 Flask 一样可以处理相同工作，但将它用于这样的应用程序实际上是一种浪费，这就像开车从家走一个街区（LCTT 译注：这里意思应该是从家开始走一个街区只需步行即可）。是的，它可以完成“旅行”的工作，但短途旅行不是你选择汽车而不是自行车或者使用双脚的原因。</p><p>根据文档，Tornado 被称为 “Python Web 框架和异步网络库”。在 Python Web 框架生态系统中很少有人喜欢它。如果你尝试完成的工作需要（或将从中获益）以任何方式、形状或形式的异步性，使用 Tornado。如果你的应用程序需要处理多个长期连接，同时又不想牺牲太多性能，选择 Tornado。如果你的应用程序是多个应用程序，并且需要线程感知以准确处理数据，使用 Tornado。这是它最有效的地方。</p><p>用你的汽车做“汽车的事情”，使用其他交通工具做其他事情。</p><h3 id="向前看-进行一些深度检查" tabindex="-1">向前看，进行一些深度检查 <a class="header-anchor" href="#向前看-进行一些深度检查" aria-label="Permalink to “向前看，进行一些深度检查”">​</a></h3><p>谈到使用合适的工具来完成合适的工作，在选择框架时，请记住应用程序的范围和规模，包括现在和未来。到目前为止，我们只研究了适用于中小型 Web 应用程序的框架。本系列的下一篇也是最后一篇将介绍最受欢迎的 Python 框架之一 Django，它适用于可能会变得更大的大型应用程序。同样，尽管它在技术上能够并且将会处理待办事项列表问题，但请记住，这不是它的真正用途。我们仍然会通过它来展示如何使用它来构建应用程序，但我们必须牢记框架的意图以及它是如何反映在架构中的：</p><ul><li><strong>Flask</strong>： 适用于小型，简单的项目。它可以使我们轻松地构建视图并将它们快速连接到路由，它可以简单地封装在一个文件中。</li><li><strong>Pyramid</strong>： 适用于可能增长的项目。它包含一些配置来启动和运行。应用程序组件的独立领域可以很容易地划分并构建到任意深度，而不会忽略中央应用程序。</li><li><strong>Tornado</strong>： 适用于受益于精确和有意识的 I/O 控制的项目。它允许协程，并轻松公开可以控制如何接收请求或发送响应以及何时发生这些操作的方法。</li><li><strong>Django</strong>：（我们将会看到）意味着可能会变得更大的东西。它有着非常庞大的生态系统，包括大量插件和模块。它非常有主见的配置和管理，以保持所有不同部分在同一条线上。</li></ul><p>无论你是从本系列的第一篇文章开始阅读，还是稍后才加入的，都要感谢阅读！请随意留下问题或意见。下次再见时，我手里会拿着 Django。</p><h3 id="感谢-python-bdfl" tabindex="-1">感谢 Python BDFL <a class="header-anchor" href="#感谢-python-bdfl" aria-label="Permalink to “感谢 Python BDFL”">​</a></h3>`,18)),a("p",null,[s[49]||(s[49]=n("我必须把功劳归于它应得的地方，非常感谢 ",-1)),e(p,{href:"https://www.twitter.com/gvanrossum"},{default:o(()=>[...s[48]||(s[48]=[n("Guido van Rossum",-1)])]),_:1}),s[50]||(s[50]=n("，不仅仅是因为他创造了我最喜欢的编程语言。",-1))]),a("p",null,[s[53]||(s[53]=n("在 ",-1)),e(p,{href:"https://www.pycascades.com"},{default:o(()=>[...s[51]||(s[51]=[n("PyCascades 2018",-1)])]),_:1}),s[54]||(s[54]=n(" 期间，我很幸运的不仅做了基于这个文章系列的演讲，而且还被邀请参加了演讲者的晚宴。整个晚上我都坐在 Guido 旁边，不停地问他问题。其中一个问题是，在 Python 中异步到底是如何工作的，但他没有一点大惊小怪，而是花时间向我解释，让我开始理解这个概念。他后来",-1)),e(p,{href:"https://twitter.com/gvanrossum/status/956186585493458944"},{default:o(()=>[...s[52]||(s[52]=[n("推特给我",-1)])]),_:1}),s[55]||(s[55]=n("发了一条消息：是用于学习异步 Python 的广阔资源。我随后在三个月内阅读了三次，然后写了这篇文章。你真是一个非常棒的人，Guido！",-1))]),s[79]||(s[79]=a("hr",null,null,-1)),a("p",null,[s[57]||(s[57]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/6/tornado-framework"},{default:o(()=>[...s[56]||(s[56]=[n("https://opensource.com/article/18/6/tornado-framework",-1)])]),_:1})]),a("p",null,[s[62]||(s[62]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/nhuntwalker"},{default:o(()=>[...s[58]||(s[58]=[n("Nicholas Hunt-Walker",-1)])]),_:1}),s[63]||(s[63]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:o(()=>[...s[59]||(s[59]=[n("lujun9972",-1)])]),_:1}),s[64]||(s[64]=n(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:o(()=>[...s[60]||(s[60]=[n("MjSeven",-1)])]),_:1}),s[65]||(s[65]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:o(()=>[...s[61]||(s[61]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[68]||(s[68]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...s[66]||(s[66]=[n("LCTT",-1)])]),_:1}),s[69]||(s[69]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:o(()=>[...s[67]||(s[67]=[n("Linux中国",-1)])]),_:1}),s[70]||(s[70]=n(" 荣誉推出",-1))])])}const T=l(c,[["render",u]]);export{y as __pageData,T as default};
