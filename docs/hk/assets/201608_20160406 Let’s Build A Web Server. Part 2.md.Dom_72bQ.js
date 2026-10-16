import{_ as t,a0 as r,w as o,s as d,I as a,x as n,a1 as l,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"搭個 Web 服務器（二） | LCTT x X-CMD","titleTemplate":false,"description":"搭個 Web 服務器（二） | LCTT (201608) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"搭個 Web 服務器（二） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"搭個 Web 服務器（二） | LCTT (201608) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201608/20160406 Let’s Build A Web Server. Part 2","title":"搭個 Web 服務器（二）","tag":"201608","desc":""},"relativePath":"201608/20160406 Let’s Build A Web Server. Part 2.md","filePath":"[post].md"}'),u={name:"201608/20160406 Let’s Build A Web Server. Part 2.md"};function b(g,s,k,f,v,m){const p=r("Link");return o(),d("div",null,[s[89]||(s[89]=a("h1",{id:"搭個-web-服務器-二",tabindex:"-1"},[n("搭個 Web 服務器（二） "),a("a",{class:"header-anchor",href:"#搭個-web-服務器-二","aria-label":"Permalink to “搭個 Web 服務器（二）”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("在",-1)),l(p,{href:"https://linux.cn/article-7662-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n("中，我提出了一個問題：“如何在你剛剛搭建起來的 Web 服務器上適配 Django, Flask 或 Pyramid 應用，而不用單獨對 Web 服務器做做出改動以適應各種不同的 Web 框架呢？”我們可以從這一篇中找到答案。",-1))]),s[90]||(s[90]=a("p",null,"曾幾何時，你所選擇的 Python Web 框架會限制你所可選擇的 Web 服務器，反之亦然。如果某個框架及服務器設計用來協同工作的，那麼一切正常：",-1)),s[91]||(s[91]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_before_wsgi.png",alt:""})],-1)),s[92]||(s[92]=a("p",null,"但你可能正面對着（或者曾經面對過）嘗試將一對無法適配的框架和服務器搭配在一起的問題：",-1)),s[93]||(s[93]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_after_wsgi.png",alt:""})],-1)),s[94]||(s[94]=a("p",null,"基本上，你需要選擇那些能夠一起工作的框架和服務器，而不能選擇你想用的那些。",-1)),a("p",null,[s[4]||(s[4]=n("所以，你該如何確保在不對 Web 服務器或框架的代碼做任何更改的情況下，讓你的 Web 服務器和多個不同的 Web 框架一同工作呢？這個問題的答案，就是 Python Web 服務器網關接口（Web Server Gateway Interface ）（縮寫為 ",-1)),l(p,{href:"https://www.python.org/dev/peps/pep-0333/"},{default:e(()=>[...s[3]||(s[3]=[n("WSGI",-1)])]),_:1}),s[5]||(s[5]=n("，念做“wizgy”）。",-1))]),s[95]||(s[95]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_wsgi_idea.png",alt:""})],-1)),a("p",null,[s[12]||(s[12]=n("WSGI 允許開發者互不干擾地選擇 Web 框架及 Web 服務器的類型。現在，你可以真正將 Web 服務器及框架任意搭配，然後選出你最中意的那對組合。比如，你可以使用 ",-1)),l(p,{href:"https://www.djangoproject.com/"},{default:e(()=>[...s[6]||(s[6]=[n("Django",-1)])]),_:1}),s[13]||(s[13]=n("，",-1)),l(p,{href:"http://flask.pocoo.org/"},{default:e(()=>[...s[7]||(s[7]=[n("Flask",-1)])]),_:1}),s[14]||(s[14]=n(" 或者 ",-1)),l(p,{href:"http://trypyramid.com/"},{default:e(()=>[...s[8]||(s[8]=[n("Pyramid",-1)])]),_:1}),s[15]||(s[15]=n("，與 ",-1)),l(p,{href:"http://gunicorn.org/"},{default:e(()=>[...s[9]||(s[9]=[n("Gunicorn",-1)])]),_:1}),s[16]||(s[16]=n("，",-1)),l(p,{href:"http://uwsgi-docs.readthedocs.org/"},{default:e(()=>[...s[10]||(s[10]=[n("Nginx/uWSGI",-1)])]),_:1}),s[17]||(s[17]=n(" 或 ",-1)),l(p,{href:"http://waitress.readthedocs.org/"},{default:e(()=>[...s[11]||(s[11]=[n("Waitress",-1)])]),_:1}),s[18]||(s[18]=n(" 進行結合。感謝 WSGI 同時對服務器與框架的支持，我們可以真正隨意選擇它們的搭配了。",-1))]),s[96]||(s[96]=i(`<p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_wsgi_interop.png" alt=""></p><p>所以，WSGI 就是我在第一部分中提出，又在本文開頭重複了一遍的那個問題的答案。你的 Web 服務器必須實現 WSGI 接口的服務器部分，而現代的 Python Web 框架均已實現了 WSGI 接口的框架部分，這使得你可以直接在 Web 服務器中使用任意框架，而不需要更改任何服務器代碼，以對特定的 Web 框架實現兼容。</p><p>現在，你已經知道 Web 服務器及 Web 框架對 WSGI 的支持使得你可以選擇最合適的一對來使用，而且它也有利於服務器和框架的開發者，這樣他們只需專注於其擅長的部分來進行開發，而不需要觸及另一部分的代碼。其它語言也擁有類似的接口，比如：Java 擁有 Servlet API，而 Ruby 擁有 Rack。</p><p>這些理論都不錯，但是我打賭你在説：“Show me the code!” 那好，我們來看看下面這個很小的 WSGI 服務器實現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### 使用 Python 2.7.9，在 Linux 及 Mac OS X 下測試通過</span></span>
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
<span class="line"><span>        ### 創建一個監聽的套接字</span></span>
<span class="line"><span>        self.listen_socket = listen_socket = socket.socket(</span></span>
<span class="line"><span>            self.address_family,</span></span>
<span class="line"><span>            self.socket_type</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>        ### 允許複用同一地址</span></span>
<span class="line"><span>        listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>        ### 綁定地址</span></span>
<span class="line"><span>        listen_socket.bind(server_address)</span></span>
<span class="line"><span>        ### 激活套接字</span></span>
<span class="line"><span>        listen_socket.listen(self.request_queue_size)</span></span>
<span class="line"><span>        ### 獲取主機的名稱及端口</span></span>
<span class="line"><span>        host, port = self.listen_socket.getsockname()[:2]</span></span>
<span class="line"><span>        self.server_name = socket.getfqdn(host)</span></span>
<span class="line"><span>        self.server_port = port</span></span>
<span class="line"><span>        ### 返回由 Web 框架/應用設定的響應頭部字段</span></span>
<span class="line"><span>        self.headers_set = []</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_app(self, application):</span></span>
<span class="line"><span>        self.application = application</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def serve_forever(self):</span></span>
<span class="line"><span>        listen_socket = self.listen_socket</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            ### 獲取新的客户端連接</span></span>
<span class="line"><span>            self.client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>            ### 處理一條請求後關閉連接，然後循環等待另一個連接建立</span></span>
<span class="line"><span>            self.handle_one_request()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def handle_one_request(self):</span></span>
<span class="line"><span>        self.request_data = request_data = self.client_connection.recv(1024)</span></span>
<span class="line"><span>        ### 以 &#39;curl -v&#39; 的風格輸出格式化請求數據</span></span>
<span class="line"><span>        print(&#39;&#39;.join(</span></span>
<span class="line"><span>            &#39;&lt; {line}\\n&#39;.format(line=line)</span></span>
<span class="line"><span>            for line in request_data.splitlines()</span></span>
<span class="line"><span>        ))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        self.parse_request(request_data)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 根據請求數據構建環境變量字典</span></span>
<span class="line"><span>        env = self.get_environ()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 此時需要調用 Web 應用來獲取結果，</span></span>
<span class="line"><span>        ### 取回的結果將成為 HTTP 響應體</span></span>
<span class="line"><span>        result = self.application(env, self.start_response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ### 構造一個響應，回送至客户端</span></span>
<span class="line"><span>        self.finish_response(result)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def parse_request(self, text):</span></span>
<span class="line"><span>        request_line = text.splitlines()[0]</span></span>
<span class="line"><span>        request_line = request_line.rstrip(&#39;\\r\\n&#39;)</span></span>
<span class="line"><span>        ### 將請求行分成幾個部分</span></span>
<span class="line"><span>        (self.request_method,  # GET</span></span>
<span class="line"><span>         self.path,            # /hello</span></span>
<span class="line"><span>         self.request_version  # HTTP/1.1</span></span>
<span class="line"><span>         ) = request_line.split()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def get_environ(self):</span></span>
<span class="line"><span>        env = {}</span></span>
<span class="line"><span>        ### 以下代碼段沒有遵循 PEP8 規則，但這樣排版，是為了通過強調</span></span>
<span class="line"><span>        ### 所需變量及它們的值，來達到其展示目的。</span></span>
<span class="line"><span>        ###</span></span>
<span class="line"><span>        ### WSGI 必需變量</span></span>
<span class="line"><span>        env[&#39;wsgi.version&#39;]      = (1, 0)</span></span>
<span class="line"><span>        env[&#39;wsgi.url_scheme&#39;]   = &#39;http&#39;</span></span>
<span class="line"><span>        env[&#39;wsgi.input&#39;]        = StringIO.StringIO(self.request_data)</span></span>
<span class="line"><span>        env[&#39;wsgi.errors&#39;]       = sys.stderr</span></span>
<span class="line"><span>        env[&#39;wsgi.multithread&#39;]  = False</span></span>
<span class="line"><span>        env[&#39;wsgi.multiprocess&#39;] = False</span></span>
<span class="line"><span>        env[&#39;wsgi.run_once&#39;]     = False</span></span>
<span class="line"><span>        ### CGI 必需變量</span></span>
<span class="line"><span>        env[&#39;REQUEST_METHOD&#39;]    = self.request_method    # GET</span></span>
<span class="line"><span>        env[&#39;PATH_INFO&#39;]         = self.path              # /hello</span></span>
<span class="line"><span>        env[&#39;SERVER_NAME&#39;]       = self.server_name       # localhost</span></span>
<span class="line"><span>        env[&#39;SERVER_PORT&#39;]       = str(self.server_port)  # 8888</span></span>
<span class="line"><span>        return env</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def start_response(self, status, response_headers, exc_info=None):</span></span>
<span class="line"><span>        ### 添加必要的服務器頭部字段</span></span>
<span class="line"><span>        server_headers = [</span></span>
<span class="line"><span>            (&#39;Date&#39;, &#39;Tue, 31 Mar 2015 12:54:48 GMT&#39;),</span></span>
<span class="line"><span>            (&#39;Server&#39;, &#39;WSGIServer 0.2&#39;),</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>        self.headers_set = [status, response_headers + server_headers]</span></span>
<span class="line"><span>        ### 為了遵循 WSGI 協議，start_response 函數必須返回一個 &#39;write&#39;</span></span>
<span class="line"><span>        ### 可調用對象（返回值.write 可以作為函數調用）。為了簡便，我們</span></span>
<span class="line"><span>        ### 在這裏無視這個細節。</span></span>
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
<span class="line"><span>            ### 以 &#39;curl -v&#39; 的風格輸出格式化請求數據</span></span>
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
<span class="line"><span>    httpd.serve_forever()</span></span></code></pre></div><p>當然，這段代碼要比第一部分的服務器代碼長不少，但它仍然很短（只有不到 150 行），你可以輕鬆理解它，而不需要深究細節。上面的服務器代碼還可以做更多——它可以用來運行一些你喜歡的框架寫出的 Web 應用，可以是 Pyramid，Flask，Django 或其它 Python WSGI 框架。</p>`,6)),a("p",null,[s[20]||(s[20]=n("不相信嗎？自己來試試看吧。把以上的代碼保存為 ",-1)),s[21]||(s[21]=a("code",null,"webserver2.py",-1)),s[22]||(s[22]=n("，或直接從 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/webserver2.py"},{default:e(()=>[...s[19]||(s[19]=[n("Github",-1)])]),_:1}),s[23]||(s[23]=n(" 上下載它。如果你打算不加任何參數而直接運行它，它會抱怨一句，然後退出。",-1))]),s[97]||(s[97]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver2.py</span></span>
<span class="line"><span>Provide a WSGI application object as module:callable</span></span></code></pre></div><p>它想做的其實是為你的 Web 應用服務，而這才是重頭戲。為了運行這個服務器，你唯一需要的就是安裝好 Python。不過，如果你希望運行 Pyramid，Flask 或 Django 應用，你還需要先安裝那些框架。那我們把這三個都裝上吧。我推薦的安裝方式是通過 <code>virtualenv</code> 安裝。按照以下幾步來做，你就可以創建並激活一個虛擬環境，並在其中安裝以上三個 Web 框架。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ [sudo] pip install virtualenv</span></span>
<span class="line"><span>$ mkdir ~/envs</span></span>
<span class="line"><span>$ virtualenv ~/envs/lsbaws/</span></span>
<span class="line"><span>$ cd ~/envs/lsbaws/</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>bin  include  lib</span></span>
<span class="line"><span>$ source bin/activate</span></span>
<span class="line"><span>(lsbaws) $ pip install pyramid</span></span>
<span class="line"><span>(lsbaws) $ pip install flask</span></span>
<span class="line"><span>(lsbaws) $ pip install django</span></span></code></pre></div>`,3)),a("p",null,[s[25]||(s[25]=n("現在，你需要創建一個 Web 應用。我們先從 Pyramid 開始吧。把以下代碼保存為 ",-1)),s[26]||(s[26]=a("code",null,"pyramidapp.py",-1)),s[27]||(s[27]=n("，並與剛剛的 ",-1)),s[28]||(s[28]=a("code",null,"webserver2.py",-1)),s[29]||(s[29]=n(" 放置在同一目錄，或直接從 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/pyramidapp.py"},{default:e(()=>[...s[24]||(s[24]=[n("Github",-1)])]),_:1}),s[30]||(s[30]=n(" 下載該文件：",-1))]),s[98]||(s[98]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from pyramid.config import Configurator</span></span>
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
<span class="line"><span>app = config.make_wsgi_app()</span></span></code></pre></div><p>現在，你可以用你自己的 Web 服務器來運行你的 Pyramid 應用了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py pyramidapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div>`,3)),a("p",null,[s[32]||(s[32]=n("你剛剛讓你的服務器去加載 Python 模組 ",-1)),s[33]||(s[33]=a("code",null,"pyramidapp",-1)),s[34]||(s[34]=n(" 中的可執行對象 ",-1)),s[35]||(s[35]=a("code",null,"app",-1)),s[36]||(s[36]=n("。現在你的服務器可以接收請求，並將它們轉發到你的 Pyramid 應用中了。在瀏覽器中輸入 ",-1)),l(p,{href:"http://localhost:8888/hello"},{default:e(()=>[...s[31]||(s[31]=[n("http://localhost:8888/hello",-1)])]),_:1}),s[37]||(s[37]=n(" ，敲一下回車，然後看看結果：",-1))]),s[99]||(s[99]=i(`<p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_pyramid.png" alt=""></p><p>你也可以使用命令列工具 <code>curl</code> 來測試服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -v http://localhost:8888/hello</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>看看服務器和 <code>curl</code> 向標準輸出流打印的內容吧。</p><p>現在來試試 <code>Flask</code>。運行步驟跟上面的一樣。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>from flask import Flask</span></span>
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
<span class="line"><span>app = flask_app.wsgi_app</span></span></code></pre></div>`,6)),a("p",null,[s[39]||(s[39]=n("將以上代碼保存為 ",-1)),s[40]||(s[40]=a("code",null,"flaskapp.py",-1)),s[41]||(s[41]=n("，或者直接從 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/flaskapp.py"},{default:e(()=>[...s[38]||(s[38]=[n("Github",-1)])]),_:1}),s[42]||(s[42]=n(" 下載，然後輸入以下命令運行服務器：",-1))]),s[100]||(s[100]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py flaskapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div>`,1)),a("p",null,[s[44]||(s[44]=n("現在在瀏覽器中輸入 ",-1)),l(p,{href:"http://localhost:8888/hello"},{default:e(()=>[...s[43]||(s[43]=[n("http://localhost:8888/hello",-1)])]),_:1}),s[45]||(s[45]=n(" ，敲一下回車：",-1))]),s[101]||(s[101]=i(`<p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_flask.png" alt=""></p><p>同樣，嘗試一下 <code>curl</code>，然後你會看到服務器返回了一條 <code>Flask</code> 應用生成的信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -v http://localhost:8888/hello</span></span>
<span class="line"><span>...</span></span></code></pre></div>`,3)),a("p",null,[s[49]||(s[49]=n("這個服務器能處理 Django 應用嗎？試試看吧！不過這個任務可能有點複雜，所以我建議你將整個倉庫克隆下來，然後使用 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/"},{default:e(()=>[...s[46]||(s[46]=[n("Github",-1)])]),_:1}),s[50]||(s[50]=n(" 倉庫中的 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/flaskapp.py"},{default:e(()=>[...s[47]||(s[47]=[n("djangoapp.py",-1)])]),_:1}),s[51]||(s[51]=n(" 來完成這個實驗。這裏的源代碼主要是將 Django 的 helloworld 工程（已使用 ",-1)),s[52]||(s[52]=a("code",null,"Django",-1)),s[53]||(s[53]=n(" 的 ",-1)),s[54]||(s[54]=a("code",null,"django-admin.py startproject",-1)),s[55]||(s[55]=n(" 命令創建完畢）添加到了當前的 Python 路徑中，然後導入了這個工程的 WSGI 應用。（LCTT 譯註：除了這裏展示的代碼，還需要一個配合的 helloworld 工程才能工作，代碼可以參見 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/"},{default:e(()=>[...s[48]||(s[48]=[n("Github",-1)])]),_:1}),s[56]||(s[56]=n(" 倉庫。）",-1))]),s[102]||(s[102]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>sys.path.insert(0, &#39;./helloworld&#39;)</span></span>
<span class="line"><span>from helloworld import wsgi</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = wsgi.application</span></span></code></pre></div><p>將以上代碼保存為 <code>djangoapp.py</code>，然後用你的 Web 服務器運行這個 Django 應用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py djangoapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div><p>輸入以下鏈接，敲回車：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_django.png" alt=""></p><p>你這次也可以在命令列中測試——你之前應該已經做過兩次了——來確認 Django 應用處理了你的請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl -v http://localhost:8888/hello</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>你試過了嗎？你確定這個服務器可以與那三個框架搭配工作嗎？如果沒試，請去試一下。閲讀固然重要，但這個系列的內容是<strong>重新搭建</strong>，這意味着你需要親自動手乾點活。去試一下吧。別擔心，我等着你呢。不開玩笑，你真的需要試一下，親自嘗試每一步，並確保它像預期的那樣工作。</p><p>好，你已經體驗到了 WSGI 的威力：它可以使 Web 服務器及 Web 框架隨意搭配。WSGI 在 Python Web 服務器及框架之間提供了一個微型接口。它非常簡單，而且在服務器和框架端均可以輕易實現。下面的代碼片段展示了 WSGI 接口的服務器及框架端實現：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def run_application(application):</span></span>
<span class="line"><span>    &quot;&quot;&quot;服務器端代碼。&quot;&quot;&quot;</span></span>
<span class="line"><span>    ### Web 應用/框架在這裏存儲 HTTP 狀態碼以及 HTTP 響應頭部，</span></span>
<span class="line"><span>    ### 服務器會將這些信息傳遞給客户端</span></span>
<span class="line"><span>    headers_set = []</span></span>
<span class="line"><span>    ### 用於存儲 WSGI/CGI 環境變量的字典</span></span>
<span class="line"><span>    environ = {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def start_response(status, response_headers, exc_info=None):</span></span>
<span class="line"><span>        headers_set[:] = [status, response_headers]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### 服務器喚醒可執行變量“application”，獲得響應頭部</span></span>
<span class="line"><span>    result = application(environ, start_response)</span></span>
<span class="line"><span>    ### 服務器組裝一個 HTTP 響應，將其傳送至客户端</span></span>
<span class="line"><span>    …</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def app(environ, start_response):</span></span>
<span class="line"><span>    &quot;&quot;&quot;一個空的 WSGI 應用&quot;&quot;&quot;</span></span>
<span class="line"><span>    start_response(&#39;200 OK&#39;, [(&#39;Content-Type&#39;, &#39;text/plain&#39;)])</span></span>
<span class="line"><span>    return [&#39;Hello world!&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run_application(app)</span></span></code></pre></div><p>這是它的工作原理：</p><ol><li>Web 框架提供一個可調用對象 <code>application</code> （WSGI 規範沒有規定它的實現方式）。</li><li>Web 服務器每次收到來自客户端的 HTTP 請求後，會喚醒可調用對象 <code>applition</code>。它會向該對象傳遞一個包含 WSGI/CGI 變量的環境變量字典 <code>environ</code>，以及一個可調用對象 <code>start_response</code>。</li><li>Web 框架或應用生成 HTTP 狀態碼和 HTTP 響應頭部，然後將它傳給 <code>start_response</code> 函數，服務器會將其存儲起來。同時，Web 框架或應用也會返回 HTTP 響應正文。</li><li>服務器將狀態碼、響應頭部及響應正文組裝成一個 HTTP 響應，然後將其傳送至客户端（這一步並不在 WSGI 規範中，但從邏輯上講，這一步應該包含在工作流程之中。所以為了明確這個過程，我把它寫了出來）</li></ol><p>這是這個接口規範的圖形化表達：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_wsgi_interface.png" alt=""></p><p>到現在為止，你已經看過了用 Pyramid、Flask 和 Django 寫出的 Web 應用的代碼，你也看到了一個 Web 服務器如何用代碼來實現另一半（服務器端的） WSGI 規範。你甚至還看到了我們如何在不使用任何框架的情況下，使用一段代碼來實現一個最簡單的 WSGI Web 應用。</p><p>其實，當你使用上面的框架編寫一個 Web 應用時，你只是在較高的層面工作，而不需要直接與 WSGI 打交道。但是我知道你一定也對 WSGI 接口的框架部分感興趣，因為你在看這篇文章呀。所以，我們不用 Pyramid、Flask 或 Django，而是自己動手來創造一個最樸素的 WSGI Web 應用（或 Web 框架），然後將它和你的服務器一起運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def app(environ, start_response):</span></span>
<span class="line"><span>    &quot;&quot;&quot;一個最簡單的 WSGI 應用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    這是你自己的 Web 框架的起點 ^_^</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    status = &#39;200 OK&#39;</span></span>
<span class="line"><span>    response_headers = [(&#39;Content-Type&#39;, &#39;text/plain&#39;)]</span></span>
<span class="line"><span>    start_response(status, response_headers)</span></span>
<span class="line"><span>    return [&#39;Hello world from a simple WSGI application!\\n&#39;]</span></span></code></pre></div>`,17)),a("p",null,[s[58]||(s[58]=n("同樣，將上面的代碼保存為 ",-1)),s[59]||(s[59]=a("code",null,"wsgiapp.py",-1)),s[60]||(s[60]=n(" 或直接從 ",-1)),l(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part2/wsgiapp.py"},{default:e(()=>[...s[57]||(s[57]=[n("Github",-1)])]),_:1}),s[61]||(s[61]=n(" 上下載該文件，然後在 Web 服務器上運行這個應用，像這樣：",-1))]),s[103]||(s[103]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(lsbaws) $ python webserver2.py wsgiapp:app</span></span>
<span class="line"><span>WSGIServer: Serving HTTP on port 8888 ...</span></span></code></pre></div><p>在瀏覽器中輸入下面的地址，然後按下回車。這是你應該看到的結果：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_browser_simple_wsgi_app.png" alt=""></p><p>你剛剛在學習如何創建一個 Web 服務器的過程中自己編寫了一個最樸素的 WSGI Web 框架！棒極了！</p><p>現在，我們再回來看看服務器傳給客户端的那些東西。這是在使用 HTTP 客户端調用你的 Pyramid 應用時，服務器生成的 HTTP 響應內容：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_http_response.png" alt=""></p>`,6)),a("p",null,[s[63]||(s[63]=n("這個響應和你在本系列第一部分中看到的 HTTP 響應有一部分共同點，但它還多出來了一些內容。比如説，它擁有四個你曾經沒見過的 ",-1)),l(p,{href:"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},{default:e(()=>[...s[62]||(s[62]=[n("HTTP 頭部",-1)])]),_:1}),s[64]||(s[64]=n("：",-1)),s[65]||(s[65]=a("code",null,"Content-Type",-1)),s[66]||(s[66]=n(", ",-1)),s[67]||(s[67]=a("code",null,"Content-Length",-1)),s[68]||(s[68]=n(", ",-1)),s[69]||(s[69]=a("code",null,"Date",-1)),s[70]||(s[70]=n(" 以及 ",-1)),s[71]||(s[71]=a("code",null,"Server",-1)),s[72]||(s[72]=n("。這些頭部內容基本上在每個 Web 服務器返回的響應中都會出現。不過，它們都不是被嚴格要求出現的。這些 HTTP 請求/響應頭部字段的目的在於它可以向你傳遞一些關於 HTTP 請求/響應的額外信息。",-1))]),s[104]||(s[104]=i('<p>既然你對 WSGI 接口瞭解的更深了一些，那我再來展示一下上面那個 HTTP 響應中的各個部分的信息來源：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_http_response_explanation.png" alt=""></p><p>我現在還沒有對上面那個 <code>environ</code> 字典做任何解釋，不過基本上這個字典必須包含那些被 WSGI 規範事先定義好的 WSGI 及 CGI 變量值。服務器在解析 HTTP 請求時，會從請求中獲取這些變量的值。這是 <code>environ</code> 字典應該有的樣子：</p><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_environ.png" alt=""></p><p>Web 框架會利用以上字典中包含的信息，通過字典中的請求路徑、請求動作等等來決定使用哪個視圖來處理響應、在哪裏讀取請求正文、在哪裏輸出錯誤信息（如果有的話）。</p><p>現在，你已經創造了屬於你自己的 WSGI Web 服務器，你也使用不同 Web 框架做了幾個 Web 應用。而且，你在這個過程中也自己創造出了一個樸素的 Web 應用及框架。這個過程真是累人。現在我們來回顧一下，你的 WSGI Web 服務器在服務請求時，需要針對 WSGI 應用做些什麼：</p><ul><li>首先，服務器開始工作，然後會加載一個可調用對象 <code>application</code>，這個對象由你的 Web 框架或應用提供</li><li>然後，服務器讀取一個請求</li><li>然後，服務器會解析這個請求</li><li>然後，服務器會使用請求數據來構建一個 <code>environ</code> 字典</li><li>然後，它會用 <code>environ</code> 字典及一個可調用對象 <code>start_response</code> 作為參數，來調用 <code>application</code>，並獲取響應體內容。</li><li>然後，服務器會使用 <code>application</code> 返回的響應體，和 <code>start_response</code> 函數設置的狀態碼及響應頭部內容，來構建一個 HTTP 響應。</li><li>最終，服務器將 HTTP 響應回送給客户端。</li></ul><p><img src="https://ruslanspivak.com/lsbaws-part2/lsbaws_part2_server_summary.png" alt=""></p><p>這基本上是服務器要做的全部內容了。你現在有了一個可以正常工作的 WSGI 服務器，它可以為使用任何遵循 WSGI 規範的 Web 框架（如 Django、Flask、Pyramid，還有你剛剛自己寫的那個框架）構建出的 Web 應用服務。最棒的部分在於，它可以在不用更改任何服務器代碼的情況下，與多個不同的 Web 框架一起工作。真不錯。</p><p>在結束之前，你可以想想這個問題：“你該如何讓你的服務器在同一時間處理多個請求呢？”</p><p>敬請期待，我會在第三部分向你展示一種解決這個問題的方法。乾杯！</p>',11)),a("p",null,[s[74]||(s[74]=n("順便，我在撰寫一本名為《搭個 Web 服務器：從頭開始》的書。這本書講解了如何從頭開始編寫一個基本的 Web 服務器，裏面包含本文中沒有的更多細節。",-1)),l(p,{href:"https://ruslanspivak.com/lsbaws-part2/"},{default:e(()=>[...s[73]||(s[73]=[n("訂閲郵件列表",-1)])]),_:1}),s[75]||(s[75]=n("，你就可以獲取到這本書的最新進展，以及發佈日期。",-1))]),s[105]||(s[105]=a("hr",null,null,-1)),a("p",null,[s[77]||(s[77]=n("via: ",-1)),l(p,{href:"https://ruslanspivak.com/lsbaws-part2/"},{default:e(()=>[...s[76]||(s[76]=[n("https://ruslanspivak.com/lsbaws-part2/",-1)])]),_:1})]),a("p",null,[s[81]||(s[81]=n("作者：",-1)),l(p,{href:"https://github.com/rspivak/"},{default:e(()=>[...s[78]||(s[78]=[n("Ruslan",-1)])]),_:1}),s[82]||(s[82]=n(" 譯者：",-1)),l(p,{href:"https://github.com/StdioA"},{default:e(()=>[...s[79]||(s[79]=[n("StdioA",-1)])]),_:1}),s[83]||(s[83]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[80]||(s[80]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[86]||(s[86]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[84]||(s[84]=[n("LCTT",-1)])]),_:1}),s[87]||(s[87]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[85]||(s[85]=[n("Linux中國",-1)])]),_:1}),s[88]||(s[88]=n(" 榮譽推出",-1))])])}const y=t(u,[["render",b]]);export{T as __pageData,y as default};
