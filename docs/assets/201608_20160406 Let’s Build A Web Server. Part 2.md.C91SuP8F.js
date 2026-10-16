import{_ as t,a0 as r,w as o,s as d,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"搭个 Web 服务器（二） | LCTT x X-CMD","titleTemplate":false,"description":"搭个 Web 服务器（二） | LCTT (201608) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"搭个 Web 服务器（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"搭个 Web 服务器（二） | LCTT (201608) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201608/20160406 Let’s Build A Web Server. Part 2","title":"搭个 Web 服务器（二）","tag":"201608","desc":""},"relativePath":"201608/20160406 Let’s Build A Web Server. Part 2.md","filePath":"[post].md"}'),u={name:"201608/20160406 Let’s Build A Web Server. Part 2.md"};function b(g,s,k,f,v,m){const p=r("Link");return o(),d("div",null,[s[89]||(s[89]=a("h1",{id:"搭个-web-服务器-二",tabindex:"-1"},[n("搭个 Web 服务器（二） "),a("a",{class:"header-anchor",href:"#搭个-web-服务器-二","aria-label":"Permalink to “搭个 Web 服务器（二）”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("在",-1)),l(p,{href:"https://linux.cn/article-7662-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n("中，我提出了一个问题：“如何在你刚刚搭建起来的 Web 服务器上适配 Django, Flask 或 Pyramid 应用，而不用单独对 Web 服务器做做出改动以适应各种不同的 Web 框架呢？”我们可以从这一篇中找到答案。",-1))]),s[90]||(s[90]=a("p",null,"曾几何时，你所选择的 Python Web 框架会限制你所可选择的 Web 服务器，反之亦然。如果某个框架及服务器设计用来协同工作的，那么一切正常：",-1)),s[91]||(s[91]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_before_wsgi.png",alt:""})],-1)),s[92]||(s[92]=a("p",null,"但你可能正面对着（或者曾经面对过）尝试将一对无法适配的框架和服务器搭配在一起的问题：",-1)),s[93]||(s[93]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_after_wsgi.png",alt:""})],-1)),s[94]||(s[94]=a("p",null,"基本上，你需要选择那些能够一起工作的框架和服务器，而不能选择你想用的那些。",-1)),a("p",null,[s[4]||(s[4]=n("所以，你该如何确保在不对 Web 服务器或框架的代码做任何更改的情况下，让你的 Web 服务器和多个不同的 Web 框架一同工作呢？这个问题的答案，就是 Python Web 服务器网关接口（Web Server Gateway Interface ）（缩写为 ",-1)),l(p,{href:"https://www.python.org/dev/peps/pep-0333/"},{default:e(()=>[...s[3]||(s[3]=[n("WSGI",-1)])]),_:1}),s[5]||(s[5]=n("，念做“wizgy”）。",-1))]),s[95]||(s[95]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_wsgi_idea.png",alt:""})],-1)),a("p",null,[s[12]||(s[12]=n("WSGI 允许开发者互不干扰地选择 Web 框架及 Web 服务器的类型。现在，你可以真正将 Web 服务器及框架任意搭配，然后选出你最中意的那对组合。比如，你可以使用 ",-1)),l(p,{href:"https://www.djangoproject.com/"},{default:e(()=>[...s[6]||(s[6]=[n("Django",-1)])]),_:1}),s[13]||(s[13]=n("，",-1)),l(p,{href:"http://flask.pocoo.org/"},{default:e(()=>[...s[7]||(s[7]=[n("Flask",-1)])]),_:1}),s[14]||(s[14]=n(" 或者 ",-1)),l(p,{href:"http://trypyramid.com/"},{default:e(()=>[...s[8]||(s[8]=[n("Pyramid",-1)])]),_:1}),s[15]||(s[15]=n("，与 ",-1)),l(p,{href:"http://gunicorn.org/"},{default:e(()=>[...s[9]||(s[9]=[n("Gunicorn",-1)])]),_:1}),s[16]||(s[16]=n("，",-1)),l(p,{href:"http://uwsgi-docs.readthedocs.org/"},{default:e(()=>[...s[10]||(s[10]=[n("Nginx/uWSGI",-1)])]),_:1}),s[17]||(s[17]=n(" 或 ",-1)),l(p,{href:"http://waitress.readthedocs.org/"},{default:e(()=>[...s[11]||(s[11]=[n("Waitress",-1)])]),_:1}),s[18]||(s[18]=n(" 进行结合。感谢 WSGI 同时对服务器与框架的支持，我们可以真正随意选择它们的搭配了。",-1))]),s[96]||(s[96]=i(`<p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_wsgi_interop.png" alt=""></p><p>所以，WSGI 就是我在第一部分中提出，又在本文开头重复了一遍的那个问题的答案。你的 Web 服务器必须实现 WSGI 接口的服务器部分，而现代的 Python Web 框架均已实现了 WSGI 接口的框架部分，这使得你可以直接在 Web 服务器中使用任意框架，而不需要更改任何服务器代码，以对特定的 Web 框架实现兼容。</p><p>现在，你已经知道 Web 服务器及 Web 框架对 WSGI 的支持使得你可以选择最合适的一对来使用，而且它也有利于服务器和框架的开发者，这样他们只需专注于其擅长的部分来进行开发，而不需要触及另一部分的代码。其它语言也拥有类似的接口，比如：Java 拥有 Servlet API，而 Ruby 拥有 Rack。</p><p>这些理论都不错，但是我打赌你在说：“Show me the code!” 那好，我们来看看下面这个很小的 WSGI 服务器实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### 使用 Python 2.7.9，在 Linux 及 Mac OS X 下测试通过</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span>import StringIO</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>class WSGIServer(object):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    address_family = socket.AF_INET</span></span>
<span class="line"><span>    socket_type = socket.SOCK_STREAM</span></span>
<span class="line"><span>    request_queue_size = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def __init__(self, server_address):</span></span>
<span class="line"><span>        ### 创建一个监听的套接字</span></span>
<span class="line"><span>        self.listen_socket = listen_socket = socket.socket(</span></span>
<span class="line"><span>            self.address_family,</span></span>
<span class="line"><span>            self.socket_type</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        ### 允许复用同一地址</span></span>
<span class="line"><span>        listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>        ### 绑定地址</span></span>
<span class="line"><span>        listen_socket.bind(server_address)</span></span>
<span class="line"><span>        ### 激活套接字</span></span>
<span class="line"><span>        listen_socket.listen(self.request_queue_size)</span></span>
<span class="line"><span>        ### 获取主机的名称及端口</span></span>
<span class="line"><span>        host, port = self.listen_socket.getsockname()[:2]</span></span>
<span class="line"><span>        self.server_name = socket.getfqdn(host)</span></span>
<span class="line"><span>        self.server_port = port</span></span>
<span class="line"><span>        ### 返回由 Web 框架/应用设定的响应头部字段</span></span>
<span class="line"><span>        self.headers_set = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_app(self, application):</span></span>
<span class="line"><span>        self.application = application</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def serve_forever(self):</span></span>
<span class="line"><span>        listen_socket = self.listen_socket</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            ### 获取新的客户端连接</span></span>
<span class="line"><span>            self.client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>            ### 处理一条请求后关闭连接，然后循环等待另一个连接建立</span></span>
<span class="line"><span>            self.handle_one_request()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def handle_one_request(self):</span></span>
<span class="line"><span>        self.request_data = request_data = self.client_connection.recv(1024)</span></span>
<span class="line"><span>        ### 以 &#39;curl -v&#39; 的风格输出格式化请求数据</span></span>
<span class="line"><span>        print(&#39;&#39;.join(</span></span>
<span class="line"><span>            &#39;&lt; {line}\\n&#39;.format(line=line)</span></span>
<span class="line"><span>            for line in request_data.splitlines()</span></span>
<span class="line"><span>        ))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.parse_request(request_data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 根据请求数据构建环境变量字典</span></span>
<span class="line"><span>        env = self.get_environ()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 此时需要调用 Web 应用来获取结果，</span></span>
<span class="line"><span>        ### 取回的结果将成为 HTTP 响应体</span></span>
<span class="line"><span>        result = self.application(env, self.start_response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 构造一个响应，回送至客户端</span></span>
<span class="line"><span>        self.finish_response(result)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def parse_request(self, text):</span></span>
<span class="line"><span>        request_line = text.splitlines()[0]</span></span>
<span class="line"><span>        request_line = request_line.rstrip(&#39;\\r\\n&#39;)</span></span>
<span class="line"><span>        ### 将请求行分成几个部分</span></span>
<span class="line"><span>        (self.request_method,  # GET</span></span>
<span class="line"><span>         self.path,            # /hello</span></span>
<span class="line"><span>         self.request_version  # HTTP/1.1</span></span>
<span class="line"><span>         ) = request_line.split()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_environ(self):</span></span>
<span class="line"><span>        env = {}</span></span>
<span class="line"><span>        ### 以下代码段没有遵循 PEP8 规则，但这样排版，是为了通过强调</span></span>
<span class="line"><span>        ### 所需变量及它们的值，来达到其展示目的。</span></span>
<span class="line"><span>        ###</span></span>
<span class="line"><span>        ### WSGI 必需变量</span></span>
<span class="line"><span>        env[&#39;wsgi.version&#39;]      = (1, 0)</span></span>
<span class="line"><span>        env[&#39;wsgi.url_scheme&#39;]   = &#39;http&#39;</span></span>
<span class="line"><span>        env[&#39;wsgi.input&#39;]        = StringIO.StringIO(self.request_data)</span></span>
<span class="line"><span>        env[&#39;wsgi.errors&#39;]       = sys.stderr</span></span>
<span class="line"><span>        env[&#39;wsgi.multithread&#39;]  = False</span></span>
<span class="line"><span>        env[&#39;wsgi.multiprocess&#39;] = False</span></span>
<span class="line"><span>        env[&#39;wsgi.run_once&#39;]     = False</span></span>
<span class="line"><span>        ### CGI 必需变量</span></span>
<span class="line"><span>        env[&#39;REQUEST_METHOD&#39;]    = self.request_method    # GET</span></span>
<span class="line"><span>        env[&#39;PATH_INFO&#39;]         = self.path              # /hello</span></span>
<span class="line"><span>        env[&#39;SERVER_NAME&#39;]       = self.server_name       # localhost</span></span>
<span class="line"><span>        env[&#39;SERVER_PORT&#39;]       = str(self.server_port)  # 8888</span></span>
<span class="line"><span>        return env</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def start_response(self, status, response_headers, exc_info=None):</span></span>
<span class="line"><span>        ### 添加必要的服务器头部字段</span></span>
<span class="line"><span>        server_headers = [</span></span>
<span class="line"><span>            (&#39;Date&#39;, &#39;Tue, 31 Mar 2015 12:54:48 GMT&#39;),</span></span>
<span class="line"><span>            (&#39;Server&#39;, &#39;WSGIServer 0.2&#39;),</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>        self.headers_set = [status, response_headers + server_headers]</span></span>
<span class="line"><span>        ### 为了遵循 WSGI 协议，start_response 函数必须返回一个 &#39;write&#39;</span></span>
<span class="line"><span>        ### 可调用对象（返回值.write 可以作为函数调用）。为了简便，我们</span></span>
<span class="line"><span>        ### 在这里无视这个细节。</span></span>
<span class="line"><span>        ### return self.finish_response</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def finish_response(self, result):</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            status, response_headers = self.headers_set</span></span>
<span class="line"><span>            response = &#39;HTTP/1.1 {status}\\r\\n&#39;.format(status=status)</span></span>
<span class="line"><span>            for header in response_headers:</span></span>
<span class="line"><span>                response += &#39;{0}: {1}\\r\\n&#39;.format(*header)</span></span>
<span class="line"><span>            response += &#39;\\r\\n&#39;</span></span>
<span class="line"><span>            for data in result:</span></span>
<span class="line"><span>                response += data</span></span>
<span class="line"><span>            ### 以 &#39;curl -v&#39; 的风格输出格式化请求数据</span></span>
<span class="line"><span>            print(&#39;&#39;.join(</span></span>
<span class="line"><span>                &#39;&gt; {line}\\n&#39;.format(line=line)</span></span>
<span class="line"><span>                for line in response.splitlines()</span></span>
<span class="line"><span>            ))</span></span>
<span class="line"><span>            self.client_connection.sendall(response)</span></span>
<span class="line"><span>        finally:</span></span>
<span class="line"><span>            self.client_connection.close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def make_server(server_address, application):</span></span>
<span class="line"><span>    server = WSGIServer(server_address)</span></span>
<span class="line"><span>    server.set_app(application)</span></span>
<span class="line"><span>    return server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    if len(sys.argv) &lt; 2:</span></span>
<span class="line"><span>        sys.exit(&#39;Provide a WSGI application object as module:callable&#39;)</span></span>
<span class="line"><span>    app_path = sys.argv[1]</span></span>
<span class="line"><span>    module, application = app_path.split(&#39;:&#39;)</span></span>
<span class="line"><span>    module = __import__(module)</span></span>
<span class="line"><span>    application = getattr(module, application)</span></span>
<span class="line"><span>    httpd = make_server(SERVER_ADDRESS, application)</span></span>
<span class="line"><span>    print(&#39;WSGIServer: Serving HTTP on port {port} ...\\n&#39;.format(port=PORT))</span></span>
<span class="line"><span>    httpd.serve_forever()</span></span></code></pre></div><p>当然，这段代码要比第一部分的服务器代码长不少，但它仍然很短（只有不到 150 行），你可以轻松理解它，而不需要深究细节。上面的服务器代码还可以做更多——它可以用来运行一些你喜欢的框架写出的 Web 应用，可以是 Pyramid，Flask，Django 或其它 Python WSGI 框架。</p>`,6)),a("p",null,[s[20]||(s[20]=n("不相信吗？自己来试试看吧。把以上的代码保存为 ",-1)),s[21]||(s[21]=a("code",null,"webserver2.py",-1)),s[22]||(s[22]=n("，或直接从 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/webserver2.py"},{default:e(()=>[...s[19]||(s[19]=[n("Github",-1)])]),_:1}),s[23]||(s[23]=n(" 上下载它。如果你打算不加任何参数而直接运行它，它会抱怨一句，然后退出。",-1))]),s[97]||(s[97]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver2.py</span></span>
<span class="line"><span>Provide a WSGI application object as module:callable</span></span></code></pre></div><p>它想做的其实是为你的 Web 应用服务，而这才是重头戏。为了运行这个服务器，你唯一需要的就是安装好 Python。不过，如果你希望运行 Pyramid，Flask 或 Django 应用，你还需要先安装那些框架。那我们把这三个都装上吧。我推荐的安装方式是通过 <code>virtualenv</code> 安装。按照以下几步来做，你就可以创建并激活一个虚拟环境，并在其中安装以上三个 Web 框架。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ [sudo] pip install virtualenv</span></span>
<span class="line"><span>$ mkdir ~/envs</span></span>
<span class="line"><span>$ virtualenv ~/envs/lsbaws/</span></span>
<span class="line"><span>$ cd ~/envs/lsbaws/</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>bin  include  lib</span></span>
<span class="line"><span>$ source bin/activate</span></span>
<span class="line"><span>(lsbaws) $ pip install pyramid</span></span>
<span class="line"><span>(lsbaws) $ pip install flask</span></span>
<span class="line"><span>(lsbaws) $ pip install django</span></span></code></pre></div>`,3)),a("p",null,[s[25]||(s[25]=n("现在，你需要创建一个 Web 应用。我们先从 Pyramid 开始吧。把以下代码保存为 ",-1)),s[26]||(s[26]=a("code",null,"pyramidapp.py",-1)),s[27]||(s[27]=n("，并与刚刚的 ",-1)),s[28]||(s[28]=a("code",null,"webserver2.py",-1)),s[29]||(s[29]=n(" 放置在同一目录，或直接从 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/pyramidapp.py"},{default:e(()=>[...s[24]||(s[24]=[n("Github",-1)])]),_:1}),s[30]||(s[30]=n(" 下载该文件：",-1))]),s[98]||(s[98]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from pyramid.config import Configurator</span></span>
<span class="line"><span>from pyramid.response import Response</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def hello_world(request):</span></span>
<span class="line"><span>    return Response(</span></span>
<span class="line"><span>        &#39;Hello world from Pyramid!\\n&#39;,</span></span>
<span class="line"><span>        content_type=&#39;text/plain&#39;,</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config = Configurator()</span></span>
<span class="line"><span>config.add_route(&#39;hello&#39;, &#39;/hello&#39;)</span></span>
<span class="line"><span>config.add_view(hello_world, route_name=&#39;hello&#39;)</span></span>
<span class="line"><span>app = config.make_wsgi_app()</span></span></code></pre></div><p>现在，你可以用你自己的 Web 服务器来运行你的 Pyramid 应用了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py pyramidapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div>`,3)),a("p",null,[s[32]||(s[32]=n("你刚刚让你的服务器去加载 Python 模块 ",-1)),s[33]||(s[33]=a("code",null,"pyramidapp",-1)),s[34]||(s[34]=n(" 中的可执行对象 ",-1)),s[35]||(s[35]=a("code",null,"app",-1)),s[36]||(s[36]=n("。现在你的服务器可以接收请求，并将它们转发到你的 Pyramid 应用中了。在浏览器中输入 ",-1)),l(p,{href:"http://localhost:8888/hello"},{default:e(()=>[...s[31]||(s[31]=[n("http://localhost:8888/hello",-1)])]),_:1}),s[37]||(s[37]=n(" ，敲一下回车，然后看看结果：",-1))]),s[99]||(s[99]=i(`<p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_pyramid.png" alt=""></p><p>你也可以使用命令行工具 <code>curl</code> 来测试服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -v http://localhost:8888/hello</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>看看服务器和 <code>curl</code> 向标准输出流打印的内容吧。</p><p>现在来试试 <code>Flask</code>。运行步骤跟上面的一样。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import Flask</span></span>
<span class="line"><span>from flask import Response</span></span>
<span class="line"><span>flask_app = Flask(&#39;flaskapp&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>@flask_app.route(&#39;/hello&#39;)</span></span>
<span class="line"><span>def hello_world():</span></span>
<span class="line"><span>    return Response(</span></span>
<span class="line"><span>        &#39;Hello world from Flask!\\n&#39;,</span></span>
<span class="line"><span>        mimetype=&#39;text/plain&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = flask_app.wsgi_app</span></span></code></pre></div>`,6)),a("p",null,[s[39]||(s[39]=n("将以上代码保存为 ",-1)),s[40]||(s[40]=a("code",null,"flaskapp.py",-1)),s[41]||(s[41]=n("，或者直接从 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/flaskapp.py"},{default:e(()=>[...s[38]||(s[38]=[n("Github",-1)])]),_:1}),s[42]||(s[42]=n(" 下载，然后输入以下命令运行服务器：",-1))]),s[100]||(s[100]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py flaskapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div>`,1)),a("p",null,[s[44]||(s[44]=n("现在在浏览器中输入 ",-1)),l(p,{href:"http://localhost:8888/hello"},{default:e(()=>[...s[43]||(s[43]=[n("http://localhost:8888/hello",-1)])]),_:1}),s[45]||(s[45]=n(" ，敲一下回车：",-1))]),s[101]||(s[101]=i(`<p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_flask.png" alt=""></p><p>同样，尝试一下 <code>curl</code>，然后你会看到服务器返回了一条 <code>Flask</code> 应用生成的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -v http://localhost:8888/hello</span></span>
<span class="line"><span>...</span></span></code></pre></div>`,3)),a("p",null,[s[49]||(s[49]=n("这个服务器能处理 Django 应用吗？试试看吧！不过这个任务可能有点复杂，所以我建议你将整个仓库克隆下来，然后使用 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/"},{default:e(()=>[...s[46]||(s[46]=[n("Github",-1)])]),_:1}),s[50]||(s[50]=n(" 仓库中的 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/flaskapp.py"},{default:e(()=>[...s[47]||(s[47]=[n("djangoapp.py",-1)])]),_:1}),s[51]||(s[51]=n(" 来完成这个实验。这里的源代码主要是将 Django 的 helloworld 工程（已使用 ",-1)),s[52]||(s[52]=a("code",null,"Django",-1)),s[53]||(s[53]=n(" 的 ",-1)),s[54]||(s[54]=a("code",null,"django-admin.py startproject",-1)),s[55]||(s[55]=n(" 命令创建完毕）添加到了当前的 Python 路径中，然后导入了这个工程的 WSGI 应用。（LCTT 译注：除了这里展示的代码，还需要一个配合的 helloworld 工程才能工作，代码可以参见 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/"},{default:e(()=>[...s[48]||(s[48]=[n("Github",-1)])]),_:1}),s[56]||(s[56]=n(" 仓库。）",-1))]),s[102]||(s[102]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>sys.path.insert(0, &#39;./helloworld&#39;)</span></span>
<span class="line"><span>from helloworld import wsgi</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = wsgi.application</span></span></code></pre></div><p>将以上代码保存为 <code>djangoapp.py</code>，然后用你的 Web 服务器运行这个 Django 应用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py djangoapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div><p>输入以下链接，敲回车：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_django.png" alt=""></p><p>你这次也可以在命令行中测试——你之前应该已经做过两次了——来确认 Django 应用处理了你的请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -v http://localhost:8888/hello</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>你试过了吗？你确定这个服务器可以与那三个框架搭配工作吗？如果没试，请去试一下。阅读固然重要，但这个系列的内容是<strong>重新搭建</strong>，这意味着你需要亲自动手干点活。去试一下吧。别担心，我等着你呢。不开玩笑，你真的需要试一下，亲自尝试每一步，并确保它像预期的那样工作。</p><p>好，你已经体验到了 WSGI 的威力：它可以使 Web 服务器及 Web 框架随意搭配。WSGI 在 Python Web 服务器及框架之间提供了一个微型接口。它非常简单，而且在服务器和框架端均可以轻易实现。下面的代码片段展示了 WSGI 接口的服务器及框架端实现：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def run_application(application):</span></span>
<span class="line"><span>    &quot;&quot;&quot;服务器端代码。&quot;&quot;&quot;</span></span>
<span class="line"><span>    ### Web 应用/框架在这里存储 HTTP 状态码以及 HTTP 响应头部，</span></span>
<span class="line"><span>    ### 服务器会将这些信息传递给客户端</span></span>
<span class="line"><span>    headers_set = []</span></span>
<span class="line"><span>    ### 用于存储 WSGI/CGI 环境变量的字典</span></span>
<span class="line"><span>    environ = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def start_response(status, response_headers, exc_info=None):</span></span>
<span class="line"><span>        headers_set[:] = [status, response_headers]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### 服务器唤醒可执行变量“application”，获得响应头部</span></span>
<span class="line"><span>    result = application(environ, start_response)</span></span>
<span class="line"><span>    ### 服务器组装一个 HTTP 响应，将其传送至客户端</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def app(environ, start_response):</span></span>
<span class="line"><span>    &quot;&quot;&quot;一个空的 WSGI 应用&quot;&quot;&quot;</span></span>
<span class="line"><span>    start_response(&#39;200 OK&#39;, [(&#39;Content-Type&#39;, &#39;text/plain&#39;)])</span></span>
<span class="line"><span>    return [&#39;Hello world!&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run_application(app)</span></span></code></pre></div><p>这是它的工作原理：</p><ol><li>Web 框架提供一个可调用对象 <code>application</code> （WSGI 规范没有规定它的实现方式）。</li><li>Web 服务器每次收到来自客户端的 HTTP 请求后，会唤醒可调用对象 <code>applition</code>。它会向该对象传递一个包含 WSGI/CGI 变量的环境变量字典 <code>environ</code>，以及一个可调用对象 <code>start_response</code>。</li><li>Web 框架或应用生成 HTTP 状态码和 HTTP 响应头部，然后将它传给 <code>start_response</code> 函数，服务器会将其存储起来。同时，Web 框架或应用也会返回 HTTP 响应正文。</li><li>服务器将状态码、响应头部及响应正文组装成一个 HTTP 响应，然后将其传送至客户端（这一步并不在 WSGI 规范中，但从逻辑上讲，这一步应该包含在工作流程之中。所以为了明确这个过程，我把它写了出来）</li></ol><p>这是这个接口规范的图形化表达：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_wsgi_interface.png" alt=""></p><p>到现在为止，你已经看过了用 Pyramid、Flask 和 Django 写出的 Web 应用的代码，你也看到了一个 Web 服务器如何用代码来实现另一半（服务器端的） WSGI 规范。你甚至还看到了我们如何在不使用任何框架的情况下，使用一段代码来实现一个最简单的 WSGI Web 应用。</p><p>其实，当你使用上面的框架编写一个 Web 应用时，你只是在较高的层面工作，而不需要直接与 WSGI 打交道。但是我知道你一定也对 WSGI 接口的框架部分感兴趣，因为你在看这篇文章呀。所以，我们不用 Pyramid、Flask 或 Django，而是自己动手来创造一个最朴素的 WSGI Web 应用（或 Web 框架），然后将它和你的服务器一起运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def app(environ, start_response):</span></span>
<span class="line"><span>    &quot;&quot;&quot;一个最简单的 WSGI 应用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    这是你自己的 Web 框架的起点 ^_^</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    status = &#39;200 OK&#39;</span></span>
<span class="line"><span>    response_headers = [(&#39;Content-Type&#39;, &#39;text/plain&#39;)]</span></span>
<span class="line"><span>    start_response(status, response_headers)</span></span>
<span class="line"><span>    return [&#39;Hello world from a simple WSGI application!\\n&#39;]</span></span></code></pre></div>`,17)),a("p",null,[s[58]||(s[58]=n("同样，将上面的代码保存为 ",-1)),s[59]||(s[59]=a("code",null,"wsgiapp.py",-1)),s[60]||(s[60]=n(" 或直接从 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/wsgiapp.py"},{default:e(()=>[...s[57]||(s[57]=[n("Github",-1)])]),_:1}),s[61]||(s[61]=n(" 上下载该文件，然后在 Web 服务器上运行这个应用，像这样：",-1))]),s[103]||(s[103]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py wsgiapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div><p>在浏览器中输入下面的地址，然后按下回车。这是你应该看到的结果：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_simple_wsgi_app.png" alt=""></p><p>你刚刚在学习如何创建一个 Web 服务器的过程中自己编写了一个最朴素的 WSGI Web 框架！棒极了！</p><p>现在，我们再回来看看服务器传给客户端的那些东西。这是在使用 HTTP 客户端调用你的 Pyramid 应用时，服务器生成的 HTTP 响应内容：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_http_response.png" alt=""></p>`,6)),a("p",null,[s[63]||(s[63]=n("这个响应和你在本系列第一部分中看到的 HTTP 响应有一部分共同点，但它还多出来了一些内容。比如说，它拥有四个你曾经没见过的 ",-1)),l(p,{href:"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},{default:e(()=>[...s[62]||(s[62]=[n("HTTP 头部",-1)])]),_:1}),s[64]||(s[64]=n("：",-1)),s[65]||(s[65]=a("code",null,"Content-Type",-1)),s[66]||(s[66]=n(", ",-1)),s[67]||(s[67]=a("code",null,"Content-Length",-1)),s[68]||(s[68]=n(", ",-1)),s[69]||(s[69]=a("code",null,"Date",-1)),s[70]||(s[70]=n(" 以及 ",-1)),s[71]||(s[71]=a("code",null,"Server",-1)),s[72]||(s[72]=n("。这些头部内容基本上在每个 Web 服务器返回的响应中都会出现。不过，它们都不是被严格要求出现的。这些 HTTP 请求/响应头部字段的目的在于它可以向你传递一些关于 HTTP 请求/响应的额外信息。",-1))]),s[104]||(s[104]=i('<p>既然你对 WSGI 接口了解的更深了一些，那我再来展示一下上面那个 HTTP 响应中的各个部分的信息来源：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_http_response_explanation.png" alt=""></p><p>我现在还没有对上面那个 <code>environ</code> 字典做任何解释，不过基本上这个字典必须包含那些被 WSGI 规范事先定义好的 WSGI 及 CGI 变量值。服务器在解析 HTTP 请求时，会从请求中获取这些变量的值。这是 <code>environ</code> 字典应该有的样子：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_environ.png" alt=""></p><p>Web 框架会利用以上字典中包含的信息，通过字典中的请求路径、请求动作等等来决定使用哪个视图来处理响应、在哪里读取请求正文、在哪里输出错误信息（如果有的话）。</p><p>现在，你已经创造了属于你自己的 WSGI Web 服务器，你也使用不同 Web 框架做了几个 Web 应用。而且，你在这个过程中也自己创造出了一个朴素的 Web 应用及框架。这个过程真是累人。现在我们来回顾一下，你的 WSGI Web 服务器在服务请求时，需要针对 WSGI 应用做些什么：</p><ul><li>首先，服务器开始工作，然后会加载一个可调用对象 <code>application</code>，这个对象由你的 Web 框架或应用提供</li><li>然后，服务器读取一个请求</li><li>然后，服务器会解析这个请求</li><li>然后，服务器会使用请求数据来构建一个 <code>environ</code> 字典</li><li>然后，它会用 <code>environ</code> 字典及一个可调用对象 <code>start_response</code> 作为参数，来调用 <code>application</code>，并获取响应体内容。</li><li>然后，服务器会使用 <code>application</code> 返回的响应体，和 <code>start_response</code> 函数设置的状态码及响应头部内容，来构建一个 HTTP 响应。</li><li>最终，服务器将 HTTP 响应回送给客户端。</li></ul><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_server_summary.png" alt=""></p><p>这基本上是服务器要做的全部内容了。你现在有了一个可以正常工作的 WSGI 服务器，它可以为使用任何遵循 WSGI 规范的 Web 框架（如 Django、Flask、Pyramid，还有你刚刚自己写的那个框架）构建出的 Web 应用服务。最棒的部分在于，它可以在不用更改任何服务器代码的情况下，与多个不同的 Web 框架一起工作。真不错。</p><p>在结束之前，你可以想想这个问题：“你该如何让你的服务器在同一时间处理多个请求呢？”</p><p>敬请期待，我会在第三部分向你展示一种解决这个问题的方法。干杯！</p>',11)),a("p",null,[s[74]||(s[74]=n("顺便，我在撰写一本名为《搭个 Web 服务器：从头开始》的书。这本书讲解了如何从头开始编写一个基本的 Web 服务器，里面包含本文中没有的更多细节。",-1)),l(p,{href:"https://ruslanspivak.com/lsbaws-part2/"},{default:e(()=>[...s[73]||(s[73]=[n("订阅邮件列表",-1)])]),_:1}),s[75]||(s[75]=n("，你就可以获取到这本书的最新进展，以及发布日期。",-1))]),s[105]||(s[105]=a("hr",null,null,-1)),a("p",null,[s[77]||(s[77]=n("via: ",-1)),l(p,{href:"https://ruslanspivak.com/lsbaws-part2/"},{default:e(()=>[...s[76]||(s[76]=[n("https://ruslanspivak.com/lsbaws-part2/",-1)])]),_:1})]),a("p",null,[s[81]||(s[81]=n("作者：",-1)),l(p,{href:"https://github.com/rspivak/"},{default:e(()=>[...s[78]||(s[78]=[n("Ruslan",-1)])]),_:1}),s[82]||(s[82]=n(" 译者：",-1)),l(p,{href:"https://github.com/StdioA"},{default:e(()=>[...s[79]||(s[79]=[n("StdioA",-1)])]),_:1}),s[83]||(s[83]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[80]||(s[80]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[86]||(s[86]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[84]||(s[84]=[n("LCTT",-1)])]),_:1}),s[87]||(s[87]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[85]||(s[85]=[n("Linux中国",-1)])]),_:1}),s[88]||(s[88]=n(" 荣誉推出",-1))])])}const y=t(u,[["render",b]]);export{T as __pageData,y as default};
