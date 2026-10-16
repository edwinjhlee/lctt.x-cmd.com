import{_ as t,a0 as c,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"搭个 Web 服务器（三） | LCTT x X-CMD","titleTemplate":false,"description":"搭个 Web 服务器（三） | LCTT (201610) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"搭个 Web 服务器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"搭个 Web 服务器（三） | LCTT (201610) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201610/20160809 Part 3 - Let’s Build A Web Server","title":"搭个 Web 服务器（三）","tag":"201610","desc":""},"relativePath":"201610/20160809 Part 3 - Let’s Build A Web Server.md","filePath":"[post].md"}'),d={name:"201610/20160809 Part 3 - Let’s Build A Web Server.md"},g={start:"3"};function h(k,s,b,u,_,m){const p=c("Link");return o(),r("div",null,[s[58]||(s[58]=a("h1",{id:"搭个-web-服务器-三",tabindex:"-1"},[n("搭个 Web 服务器（三） "),a("a",{class:"header-anchor",href:"#搭个-web-服务器-三","aria-label":"Permalink to “搭个 Web 服务器（三）”"},"​")],-1)),s[59]||(s[59]=a("blockquote",null,[a("p",null,"“当我们必须创造时，才能够学到更多。” ——皮亚杰")],-1)),a("p",null,[s[2]||(s[2]=n("在本系列的",-1)),e(p,{href:"https://linux.cn/article-7685-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第二部分",-1)])]),_:1}),s[3]||(s[3]=n("中，你创造了一个可以处理基本 HTTP GET 请求的、朴素的 WSGI 服务器。当时我问了一个问题：“你该如何让你的服务器在同一时间处理多个请求呢？”在这篇文章中，你会找到答案。系好安全带，我们要认真起来，全速前进了！你将会体验到一段非常快速的旅程。准备好你的 Linux、Mac OS X（或者其他 *nix 系统），还有你的 Python。本文中所有源代码均可在 ",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/"},{default:l(()=>[...s[1]||(s[1]=[n("GitHub",-1)])]),_:1}),s[4]||(s[4]=n(" 上找到。",-1))]),s[60]||(s[60]=a("h3",{id:"服务器的基本结构及如何处理请求",tabindex:"-1"},[n("服务器的基本结构及如何处理请求 "),a("a",{class:"header-anchor",href:"#服务器的基本结构及如何处理请求","aria-label":"Permalink to “服务器的基本结构及如何处理请求”"},"​")],-1)),a("p",null,[s[7]||(s[7]=n("首先，我们来回顾一下 Web 服务器的基本结构，以及服务器处理来自客户端的请求时，所需的必要步骤。你在",-1)),e(p,{href:"https://linux.cn/article-7662-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("第一部分",-1)])]),_:1}),s[8]||(s[8]=n("及",-1)),e(p,{href:"https://linux.cn/article-7685-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("第二部分",-1)])]),_:1}),s[9]||(s[9]=n("中创建的轮询服务器只能够一次处理一个请求。在处理完当前请求之前，它不能够接受新的客户端连接。所有请求为了等待服务都需要排队，在服务繁忙时，这个队伍可能会排的很长，一些客户端可能会感到不开心。",-1))]),s[61]||(s[61]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it1.png",alt:""})],-1)),a("p",null,[s[11]||(s[11]=n("这是轮询服务器 ",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/webserver3a.py"},{default:l(()=>[...s[10]||(s[10]=[n("webserver3a.py",-1)])]),_:1}),s[12]||(s[12]=n(" 的代码：",-1))]),s[62]||(s[62]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#####################################################################</span></span>
<span class="line"><span># 轮询服务器 - webserver3a.py                                       #</span></span>
<span class="line"><span>#                                                                   #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                                          #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过                        #</span></span>
<span class="line"><span>#####################################################################</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    print(request.decode())</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        handle_request(client_connection)</span></span>
<span class="line"><span>        client_connection.close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>为了观察到你的服务器在同一时间只能处理一个请求的行为，我们对服务器的代码做一点点修改：在将响应发送至客户端之后，将程序阻塞 60 秒。这个修改只需要一行代码，来告诉服务器进程暂停 60 秒钟。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it2.png" alt=""></p>`,3)),a("p",null,[s[14]||(s[14]=n("这是我们更改后的代码，包含暂停语句的服务器 ",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/webserver3b.py"},{default:l(()=>[...s[13]||(s[13]=[n("webserver3b.py",-1)])]),_:1}),s[15]||(s[15]=n("：",-1))]),s[63]||(s[63]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#########################################################################</span></span>
<span class="line"><span># 轮询服务器 - webserver3b.py                                           #</span></span>
<span class="line"><span>#                                                                       #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                                              #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过                            #</span></span>
<span class="line"><span>#                                                                       #</span></span>
<span class="line"><span># - 服务器向客户端发送响应之后，会阻塞 60 秒                            #</span></span>
<span class="line"><span>#########################################################################</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    print(request.decode())</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span>    time.sleep(60)  ### 睡眠语句，阻塞该进程 60 秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        handle_request(client_connection)</span></span>
<span class="line"><span>        client_connection.close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>用以下命令启动服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3b.py</span></span></code></pre></div><p>现在，打开一个新的命令行窗口，然后运行 <code>curl</code> 语句。你应该可以立刻看到屏幕上显示的字符串“Hello, World!”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span>
<span class="line"><span>Hello, World!</span></span></code></pre></div><p>然后，立刻打开第二个命令行窗口，运行相同的 <code>curl</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>如果你在 60 秒之内完成了以上步骤，你会看到第二条 <code>curl</code> 指令不会立刻产生任何输出，而只是挂在了哪里。同样，服务器也不会在标准输出流中输出新的请求内容。这是这个过程在我的 Mac 电脑上的运行结果（在右下角用黄色框标注出来的窗口中，我们能看到第二个 <code>curl</code> 指令被挂起，正在等待连接被服务器接受）：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it3.png" alt=""></p><p>当你等待足够长的时间（60 秒以上）后，你会看到第一个 <code>curl</code> 程序完成，而第二个 <code>curl</code> 在屏幕上输出了“Hello, World!”，然后休眠 60 秒，进而终止。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it4.png" alt=""></p><p>这样运行的原因是因为在服务器在处理完第一个来自 <code>curl</code> 的请求之后，只有等待 60 秒才能开始处理第二个请求。这个处理请求的过程按顺序进行（也可以说，迭代进行），一步一步进行，在我们刚刚给出的例子中，在同一时间内只能处理一个请求。</p><p>现在，我们来简单讨论一下客户端与服务器的交流过程。为了让两个程序在网络中互相交流，它们必须使用套接字。你应当在本系列的前两部分中见过它几次了。但是，套接字是什么？</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_socket.png" alt=""></p><p>套接字（socket）是一个通讯通道端点（endpoint）的抽象描述，它可以让你的程序通过文件描述符来与其它程序进行交流。在这篇文章中，我只会单独讨论 Linux 或 Mac OS X 中的 TCP/IP 套接字。这里有一个重点概念需要你去理解：TCP 套接字对（socket pair）。</p>`,15)),a("blockquote",null,[a("p",null,[s[17]||(s[17]=n("TCP 连接使用的套接字对是一个由 4 个元素组成的元组，它确定了 TCP 连接的两端：本地 IP 地址、本地端口、远端 IP 地址及远端端口。一个套接字对唯一地确定了网络中的每一个 TCP 连接。在连接一端的两个值：一个 IP 地址和一个端口，通常被称作一个套接字。（引自",-1)),e(p,{href:"http://www.epubit.com.cn/book/details/1692"},{default:l(()=>[...s[16]||(s[16]=[n("《UNIX 网络编程 卷1：套接字联网 API （第3版）》",-1)])]),_:1}),s[18]||(s[18]=n("）",-1))])]),s[64]||(s[64]=i('<p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_socketpair.png" alt=""></p><p>所以，元组 <code>{10.10.10.2:49152, 12.12.12.3:8888}</code> 就是一个能够在客户端确定 TCP 连接两端的套接字对，而元组 <code>{12.12.12.3:8888, 10.10.10.2:49152}</code> 则是在服务端确定 TCP 连接两端的套接字对。在这个例子中，确定 TCP 服务端的两个值（IP 地址 <code>12.12.12.3</code> 及端口 <code>8888</code>），代表一个套接字；另外两个值则代表客户端的套接字。</p><p>一个服务器创建一个套接字并开始建立连接的基本工作流程如下：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_server_socket_sequence.png" alt=""></p><ol><li>服务器创建一个 TCP/IP 套接字。我们可以用这条 Python 语句来创建：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span></code></pre></div><ol start="2"><li>服务器可能会设定一些套接字选项（这个步骤是可选的，但是你可以看到上面的服务器代码做了设定，这样才能够在重启服务器时多次复用同一地址）：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span></code></pre></div>',8)),a("ol",g,[a("li",null,[s[20]||(s[20]=n("然后，服务器绑定一个地址。绑定函数 ",-1)),s[21]||(s[21]=a("code",null,"bind",-1)),s[22]||(s[22]=n(" 可以将一个本地协议地址赋给套接字。若使用 TCP 协议，调用绑定函数 ",-1)),s[23]||(s[23]=a("code",null,"bind",-1)),s[24]||(s[24]=n(" 时，需要指定一个端口号，一个 IP 地址，或两者兼有，或两者全无。（引自",-1)),e(p,{href:"http://www.epubit.com.cn/book/details/1692"},{default:l(()=>[...s[19]||(s[19]=[n("《UNIX网络编程 卷1：套接字联网 API （第3版）》",-1)])]),_:1}),s[25]||(s[25]=n("）",-1))])]),s[65]||(s[65]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket.bind(SERVER_ADDRESS)</span></span></code></pre></div><ol start="4"><li>然后，服务器开启套接字的监听模式。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span></code></pre></div><p>监听函数 <code>listen</code> 只应在服务端调用。它会通知操作系统内核，表明它会接受所有向该套接字发送的入站连接请求。</p><p>以上四步完成后，服务器将循环接收来自客户端的连接，一次循环处理一条。当有连接可用时，接受请求函数 <code>accept</code> 将会返回一个已连接的客户端套接字。然后，服务器从这个已连接的客户端套接字中读取请求数据，将数据在其标准输出流中输出出来，并向客户端回送一条消息。然后，服务器会关闭这个客户端连接，并准备接收一个新的客户端连接。</p><p>这是客户端使用 TCP/IP 协议与服务器通信的必要步骤：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_client_socket_sequence.png" alt=""></p><p>下面是一段示例代码，使用这段代码，客户端可以连接你的服务器，发送一个请求，并输出响应内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 创建一个套接字，并连接值服务器</span></span>
<span class="line"><span>sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>sock.connect((&#39;localhost&#39;, 8888))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 发送一段数据，并接收响应数据</span></span>
<span class="line"><span>sock.sendall(b&#39;test&#39;)</span></span>
<span class="line"><span>data = sock.recv(1024)</span></span>
<span class="line"><span>print(data.decode())</span></span></code></pre></div><p>在创建套接字后，客户端需要连接至服务器。我们可以调用连接函数 <code>connect</code> 来完成这个操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sock.connect((&#39;localhost&#39;, 8888))</span></span></code></pre></div><p>客户端只需提供待连接的远程服务器的 IP 地址（或主机名），及端口号，即可连接至远端服务器。</p><p>你可能已经注意到了，客户端不需要调用 <code>bind</code> 及 <code>accept</code> 函数，就可以与服务器建立连接。客户端不需要调用 <code>bind</code> 函数是因为客户端不需要关注本地 IP 地址及端口号。操作系统内核中的 TCP/IP 协议栈会在客户端调用 <code>connect</code> 函数时，自动为套接字分配本地 IP 地址及本地端口号。这个本地端口被称为临时端口（ephemeral port），即一个短暂开放的端口。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_ephemeral_port.png" alt=""></p><p>服务器中有一些端口被用于承载一些众所周知的服务，它们被称作通用（well-known）端口：如 80 端口用于 HTTP 服务，22 端口用于 SSH 服务。打开你的 Python shell，与你在本地运行的服务器建立一个连接，来看看内核给你的客户端套接字分配了哪个临时端口（在尝试这个例子之前，你需要运行服务器程序 <code>webserver3a.py</code> 或 <code>webserver3b.py</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import socket</span></span>
<span class="line"><span>&gt;&gt;&gt; sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>&gt;&gt;&gt; sock.connect((&#39;localhost&#39;, 8888))</span></span>
<span class="line"><span>&gt;&gt;&gt; host, port = sock.getsockname()[:2]</span></span>
<span class="line"><span>&gt;&gt;&gt; host, port</span></span>
<span class="line"><span>(&#39;127.0.0.1&#39;, 60589)</span></span></code></pre></div><p>在上面的例子中，内核将临时端口 60589 分配给了你的套接字。</p><p>在我开始回答我在第二部分中提出的问题之前，我还需要快速讲解一些概念。你很快就会明白这些概念为什么非常重要。这两个概念，一个是进程，另外一个是文件描述符。</p><p>什么是进程？进程就是一个程序执行的实体。举个例子：当你的服务器代码被执行时，它会被载入内存，而内存中表现此次程序运行的实体就叫做进程。内核记录了进程的一系列有关信息——比如进程 ID——来追踪它的运行情况。当你在执行轮询服务器 <code>webserver3a.py</code> 或 <code>webserver3b.py</code> 时，你其实只是启动了一个进程。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_server_process.png" alt=""></p><p>我们在终端窗口中运行 <code>webserver3b.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3b.py</span></span></code></pre></div><p>在另一个终端窗口中，我们可以使用 <code>ps</code> 命令获取该进程的相关信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps | grep webserver3b | grep -v grep</span></span>
<span class="line"><span>7182 ttys003    0:00.04 python webserver3b.py</span></span></code></pre></div><p><code>ps</code> 命令显示，我们刚刚只运行了一个 Python 进程 <code>webserver3b.py</code>。当一个进程被创建时，内核会为其分配一个进程 ID，也就是 PID。在 UNIX 中，所有用户进程都有一个父进程；当然，这个父进程也有进程 ID，叫做父进程 ID，缩写为 PPID。假设你默认使用 BASH shell，那当你启动服务器时，就会启动一个新的进程，同时被赋予一个 PID，而它的父进程 PID 会被设为 BASH shell 的 PID。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_ppid_pid.png" alt=""></p><p>自己尝试一下，看看这一切都是如何工作的。重新开启你的 Python shell，它会创建一个新进程，然后在其中使用系统调用 <code>os.getpid()</code> 及 <code>os.getppid()</code> 来获取 Python shell 进程的 PID 及其父进程 PID（也就是你的 BASH shell 的 PID）。然后，在另一个终端窗口中运行 <code>ps</code> 命令，然后用 <code>grep</code> 来查找 PPID（父进程 ID，在我的例子中是 3148）。在下面的屏幕截图中，你可以看到一个我的 Mac OS X 系统中关于进程父子关系的例子，在这个例子中，子进程是我的 Python shell 进程，而父进程是 BASH shell 进程：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_pid_ppid_screenshot.png" alt=""></p><p>另外一个需要了解的概念，就是文件描述符。什么是文件描述符？文件描述符是一个非负整数，当进程打开一个现有文件、创建新文件或创建一个新的套接字时，内核会将这个数返回给进程。你以前可能听说过，在 UNIX 中，一切皆是文件。内核会按文件描述符来找到一个进程所打开的文件。当你需要读取文件或向文件写入时，我们同样通过文件描述符来定位这个文件。Python 提供了高层次的操作文件（或套接字）的对象，所以你不需要直接通过文件描述符来定位文件。但是，在高层对象之下，我们就是用它来在 UNIX 中定位文件及套接字，通过这个整数的文件描述符。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_process_descriptors.png" alt=""></p><p>一般情况下，UNIX shell 会将一个进程的标准输入流（STDIN）的文件描述符设为 0，标准输出流（STDOUT）设为 1，而标准错误打印（STDERR）的文件描述符会被设为 2。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_default_descriptors.png" alt=""></p><p>我之前提到过，即使 Python 提供了高层次的文件对象或类文件对象来供你操作，你仍然可以在对象上使用 <code>fileno()</code> 方法，来获取与该文件相关联的文件描述符。回到 Python shell 中，我们来看看你该怎么做到这一点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import sys</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stdin</span></span>
<span class="line"><span>&lt;open file &#39;&lt;stdin&gt;&#39;, mode &#39;r&#39; at 0x102beb0c0&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stdin.fileno()</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stdout.fileno()</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stderr.fileno()</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>当你在 Python 中操作文件及套接字时，你可能会使用高层次的文件/套接字对象，但是你仍然有可能会直接使用文件描述符。下面有一个例子，来演示如何用文件描述符做参数来进行一次写入的系统调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import sys</span></span>
<span class="line"><span>&gt;&gt;&gt; import os</span></span>
<span class="line"><span>&gt;&gt;&gt; res = os.write(sys.stdout.fileno(), &#39;hello\\n&#39;)</span></span>
<span class="line"><span>hello</span></span></code></pre></div><p>下面是比较有趣的部分——不过你可能不会为此感到惊讶，因为你已经知道在 Unix 中，一切皆为文件——你的套接字对象同样有一个相关联的文件描述符。和刚才操纵文件时一样，当你在 Python 中创建一个套接字时，你会得到一个对象而不是一个非负整数，但你永远可以用我之前提到过的 <code>fileno()</code> 方法获取套接字对象的文件描述符，并可以通过这个文件描述符来直接操纵套接字。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import socket</span></span>
<span class="line"><span>&gt;&gt;&gt; sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>&gt;&gt;&gt; sock.fileno()</span></span>
<span class="line"><span>3</span></span></code></pre></div><p>我还想再提一件事：不知道你有没有注意到，在我们的第二个轮询服务器 <code>webserver3b.py</code> 中，当你的服务器休眠 60 秒的过程中，你仍然可以通过第二个 <code>curl</code> 命令连接至服务器。当然 <code>curl</code> 命令并没有立刻输出任何内容而是挂在哪里，但是既然服务器没有接受连接，那它为什么不立即拒绝掉连接，而让它还能够继续与服务器建立连接呢？这个问题的答案是：当我在调用套接字对象的 <code>listen</code> 方法时，我为该方法提供了一个 <code>BACKLOG</code> 参数，在代码中用 <code>REQUEST_QUEUE_SIZE</code> 常量来表示。<code>BACKLOG</code> 参数决定了在内核中为存放即将到来的连接请求所创建的队列的大小。当服务器 <code>webserver3b.py</code> 在睡眠的时候，你运行的第二个 <code>curl</code> 命令依然能够连接至服务器，因为内核中用来存放即将接收的连接请求的队列依然拥有足够大的可用空间。</p><p>尽管增大 <code>BACKLOG</code> 参数并不能神奇地使你的服务器同时处理多个请求，但当你的服务器很繁忙时，将它设置为一个较大的值还是相当重要的。这样，在你的服务器调用 <code>accept</code> 方法时，不需要再等待一个新的连接建立，而可以立刻直接抓取队列中的第一个客户端连接，并不加停顿地立刻处理它。</p><p>欧耶！现在你已经了解了一大块内容。我们来快速回顾一下我们刚刚讲解的知识（当然，如果这些对你来说都是基础知识的话，那我们就当复习好啦）。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>轮询服务器</li><li>服务端套接字创建流程（创建套接字，绑定，监听及接受）</li><li>客户端连接创建流程（创建套接字，连接）</li><li>套接字对</li><li>套接字</li><li>临时端口及通用端口</li><li>进程</li><li>进程 ID（PID），父进程 ID（PPID），以及进程父子关系</li><li>文件描述符</li><li>套接字的 <code>listen</code> 方法中，<code>BACKLOG</code> 参数的含义</li></ul><h3 id="如何并发处理多个请求" tabindex="-1">如何并发处理多个请求 <a class="header-anchor" href="#如何并发处理多个请求" aria-label="Permalink to “如何并发处理多个请求”">​</a></h3><p>现在，我可以开始回答第二部分中的那个问题了：“你该如何让你的服务器在同一时间处理多个请求呢？”或者换一种说法：“如何编写一个并发服务器？”</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_service_clients.png" alt=""></p><p>在 UNIX 系统中编写一个并发服务器最简单的方法，就是使用系统调用 <code>fork()</code>。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_fork.png" alt=""></p><p>下面是全新出炉的并发服务器 <code>webserver3c.py</code> 的代码，它可以同时处理多个请求（和我们之前的例子 <code>webserver3b.py</code> 一样，每个子进程都会休眠 60 秒）：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it2.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 并发服务器 - webserver3c.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过          #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># - 完成客户端请求处理之后，子进程会休眠 60 秒        #</span></span>
<span class="line"><span># - 父子进程会关闭重复的描述符                        #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span>#######################################################</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    print(</span></span>
<span class="line"><span>        &#39;Child PID: {pid}. Parent PID {ppid}&#39;.format(</span></span>
<span class="line"><span>            pid=os.getpid(),</span></span>
<span class="line"><span>            ppid=os.getppid(),</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    print(request.decode())</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span>    time.sleep(60)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span>    print(&#39;Parent PID (PPID): {pid}\\n&#39;.format(pid=os.getpid()))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子进程</span></span>
<span class="line"><span>            listen_socket.close()  ### 关闭子进程中复制的套接字对象</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)  ### 子进程在这里退出</span></span>
<span class="line"><span>        else:  ### 父进程</span></span>
<span class="line"><span>            client_connection.close()  ### 关闭父进程中的客户端连接对象，并循环执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>在深入研究代码、讨论 <code>fork</code> 如何工作之前，先尝试运行它，自己看一看这个服务器是否真的可以同时处理多个客户端请求，而不是像轮询服务器 <code>webserver3a.py</code> 和 <code>webserver3b.py</code> 一样。在命令行中使用如下命令启动服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3c.py</span></span></code></pre></div><p>然后，像我们之前测试轮询服务器那样，运行两个 <code>curl</code> 命令，来看看这次的效果。现在你可以看到，即使子进程在处理客户端请求后会休眠 60 秒，但它并不会影响其它客户端连接，因为他们都是由完全独立的进程来处理的。你应该看到你的 <code>curl</code> 命令立即输出了“Hello, World!”然后挂起 60 秒。你可以按照你的想法运行尽可能多的 <code>curl</code> 命令（好吧，并不能运行特别特别多 <code>^_^</code>），所有的命令都会立刻输出来自服务器的响应 “Hello, World!”，并不会出现任何可被察觉到的延迟行为。试试看吧。</p><p>如果你要理解 <code>fork()</code>，那最重要的一点是：<strong>你调用了它一次，但是它会返回两次</strong> —— 一次在父进程中，另一次是在子进程中。当你创建了一个新进程，那么 <code>fork()</code> 在子进程中的返回值是 0。如果是在父进程中，那 <code>fork()</code> 函数会返回子进程的 PID。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_how_fork_works.png" alt=""></p><p>我依然记得在第一次看到它并尝试使用 <code>fork()</code> 的时候，我是多么的入迷。它在我眼里就像是魔法一样。这就好像我在读一段顺序执行的代码，然后“砰！”地一声，代码变成了两份，然后出现了两个实体，同时并行地运行相同的代码。讲真，那个时候我觉得它真的跟魔法一样神奇。</p><p>当父进程创建出一个新的子进程时，子进程会复制从父进程中复制一份文件描述符：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_shared_descriptors.png" alt=""></p><p>你可能注意到，在上面的代码中，父进程关闭了客户端连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>else:  ### parent</span></span>
<span class="line"><span>    client_connection.close()  # close parent copy and loop over</span></span></code></pre></div><p>不过，既然父进程关闭了这个套接字，那为什么子进程仍然能够从来自客户端的套接字中读取数据呢？答案就在上面的图片中。内核会使用描述符引用计数器来决定是否要关闭一个套接字。当你的服务器创建一个子进程时，子进程会复制父进程的所有文件描述符，内核中该描述符的引用计数也会增加。如果只有一个父进程及一个子进程，那客户端套接字的文件描述符引用数应为 2；当父进程关闭客户端连接的套接字时，内核只会减少它的引用计数，将其变为 1，但这仍然不会使内核关闭该套接字。子进程也关闭了父进程中 <code>listen_socket</code> 的复制实体，因为子进程不需要关注新的客户端连接，而只需要处理已建立的客户端连接中的请求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>listen_socket.close()  ### 关闭子进程中的复制实体</span></span></code></pre></div><p>我们将会在后文中讨论，如果你不关闭那些重复的描述符，会发生什么。</p><p>你可以从你的并发服务器源码中看到，父进程的主要职责为：接受一个新的客户端连接，复制出一个子进程来处理这个连接，然后继续循环来接受另外的客户端连接，仅此而已。服务器父进程并不会处理客户端连接——子进程才会做这件事。</p><p>打个岔：当我们说两个事件并发执行时，我们所要表达的意思是什么？</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_concurrent_events.png" alt=""></p><p>当我们说“两个事件并发执行”时，它通常意味着这两个事件同时发生。简单来讲，这个定义没问题，但你应该记住它的严格定义：</p>`,68)),a("blockquote",null,[a("p",null,[s[27]||(s[27]=n("如果你不能在代码中判断两个事件的发生顺序，那这两个事件就是并发执行的。（引自",-1)),e(p,{href:"http://www.amazon.com/gp/product/1441418687/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1441418687&linkCode=as2&tag=russblo0b-20&linkId=QFOAWARN62OWTWUG"},{default:l(()=>[...s[26]||(s[26]=[n("《信号系统简明手册 (第二版): 并发控制深入浅出及常见错误》",-1)])]),_:1}),s[28]||(s[28]=n("）",-1))])]),s[66]||(s[66]=i(`<p>好的，现在你又该回顾一下你刚刚学过的知识点了。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>在 Unix 中，编写一个并发服务器的最简单的方式——使用 <code>fork()</code> 系统调用；</li><li>当一个进程分叉（<code>fork</code>）出另一个进程时，它会变成刚刚分叉出的进程的父进程；</li><li>在进行 <code>fork</code> 调用后，父进程和子进程共享相同的文件描述符；</li><li>系统内核通过描述符的引用计数来决定是否要关闭该描述符对应的文件或套接字；</li><li>服务器父进程的主要职责：现在它做的只是从客户端接受一个新的连接，分叉出子进程来处理这个客户端连接，然后开始下一轮循环，去接收新的客户端连接。</li></ul><h3 id="进程分叉后不关闭重复的套接字会发生什么" tabindex="-1">进程分叉后不关闭重复的套接字会发生什么？ <a class="header-anchor" href="#进程分叉后不关闭重复的套接字会发生什么" aria-label="Permalink to “进程分叉后不关闭重复的套接字会发生什么？”">​</a></h3><p>我们来看看，如果我们不在父进程与子进程中关闭重复的套接字描述符会发生什么。下面是刚才的并发服务器代码的修改版本，这段代码（<code>webserver3d.py</code> 中，服务器不会关闭重复的描述符）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 并发服务器 - webserver3d.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过          #</span></span>
<span class="line"><span>#######################################################</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    clients = []</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        ### 将引用存储起来，否则在下一轮循环时，他们会被垃圾回收机制销毁</span></span>
<span class="line"><span>        clients.append(client_connection)</span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子进程</span></span>
<span class="line"><span>            listen_socket.close()  ### 关闭子进程中多余的套接字</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)  ### 子进程在这里结束</span></span>
<span class="line"><span>        else:  ### 父进程</span></span>
<span class="line"><span>            # client_connection.close()</span></span>
<span class="line"><span>            print(len(clients))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>用以下命令来启动服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>用 <code>curl</code> 命令连接服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span>
<span class="line"><span>Hello, World!</span></span></code></pre></div><p>好，<code>curl</code> 命令输出了来自并发服务器的响应内容，但程序并没有退出，而是仍然挂起。到底发生了什么？这个服务器并不会挂起 60 秒：子进程只处理客户端连接，关闭连接然后退出，但客户端的 <code>curl</code> 命令并没有终止。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_child_is_active.png" alt=""></p><p>所以，为什么 <code>curl</code> 不终止呢？原因就在于文件描述符的副本。当子进程关闭客户端连接时，系统内核会减少客户端套接字的引用计数，将其变为 1。服务器子进程退出了，但客户端套接字并没有被内核关闭，因为该套接字的描述符引用计数并没有变为 0，所以，这就导致了连接终止包（在 TCP/IP 协议中称作 <code>FIN</code>）不会被发送到客户端，所以客户端会一直保持连接。这里也会出现另一个问题：如果你的服务器长时间运行，并且不关闭文件描述符的副本，那么可用的文件描述符会被消耗殆尽：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_out_of_descriptors.png" alt=""></p><p>使用 <code>Control-C</code> 关闭服务器 <code>webserver3d.py</code>，然后在 shell 中使用内置命令 <code>ulimit</code> 来查看系统默认为你的服务器进程分配的可用资源数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -a</span></span>
<span class="line"><span>core file size          (blocks, -c) 0</span></span>
<span class="line"><span>data seg size           (kbytes, -d) unlimited</span></span>
<span class="line"><span>scheduling priority             (-e) 0</span></span>
<span class="line"><span>file size               (blocks, -f) unlimited</span></span>
<span class="line"><span>pending signals                 (-i) 3842</span></span>
<span class="line"><span>max locked memory       (kbytes, -l) 64</span></span>
<span class="line"><span>max memory size         (kbytes, -m) unlimited</span></span>
<span class="line"><span>open files                      (-n) 1024</span></span>
<span class="line"><span>pipe size            (512 bytes, -p) 8</span></span>
<span class="line"><span>POSIX message queues     (bytes, -q) 819200</span></span>
<span class="line"><span>real-time priority              (-r) 0</span></span>
<span class="line"><span>stack size              (kbytes, -s) 8192</span></span>
<span class="line"><span>cpu time               (seconds, -t) unlimited</span></span>
<span class="line"><span>max user processes              (-u) 3842</span></span>
<span class="line"><span>virtual memory          (kbytes, -v) unlimited</span></span>
<span class="line"><span>file locks                      (-x) unlimited</span></span></code></pre></div><p>你可以从上面的结果看到，在我的 Ubuntu 机器中，系统为我的服务器进程分配的最大可用文件描述符（文件打开）数为 1024。</p><p>现在我们来看一看，如果你的服务器不关闭重复的描述符，它会如何消耗可用的文件描述符。在一个已有的或新建的终端窗口中，将你的服务器进程的最大可用文件描述符设为 256：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -n 256</span></span></code></pre></div><p>在你刚刚运行 <code>ulimit -n 256</code> 的终端窗口中运行服务器 <code>webserver3d.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>然后使用下面的客户端 <code>client3.py</code> 来测试你的服务器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 测试客户端 - client3.py                             #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过          #</span></span>
<span class="line"><span>#######################################################</span></span>
<span class="line"><span>import argparse</span></span>
<span class="line"><span>import errno</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = &#39;localhost&#39;, 8888</span></span>
<span class="line"><span>REQUEST = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>GET /hello HTTP/1.1</span></span>
<span class="line"><span>Host: localhost:8888</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def main(max_clients, max_conns):</span></span>
<span class="line"><span>    socks = []</span></span>
<span class="line"><span>    for client_num in range(max_clients):</span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:</span></span>
<span class="line"><span>            for connection_num in range(max_conns):</span></span>
<span class="line"><span>                sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>                sock.connect(SERVER_ADDRESS)</span></span>
<span class="line"><span>                sock.sendall(REQUEST)</span></span>
<span class="line"><span>                socks.append(sock)</span></span>
<span class="line"><span>                print(connection_num)</span></span>
<span class="line"><span>                os._exit(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    parser = argparse.ArgumentParser(</span></span>
<span class="line"><span>        description=&#39;Test client for LSBAWS.&#39;,</span></span>
<span class="line"><span>        formatter_class=argparse.ArgumentDefaultsHelpFormatter,</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;--max-conns&#39;,</span></span>
<span class="line"><span>        type=int,</span></span>
<span class="line"><span>        default=1024,</span></span>
<span class="line"><span>        help=&#39;Maximum number of connections per client.&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    parser.add_argument(</span></span>
<span class="line"><span>        &#39;--max-clients&#39;,</span></span>
<span class="line"><span>        type=int,</span></span>
<span class="line"><span>        default=1,</span></span>
<span class="line"><span>        help=&#39;Maximum number of clients.&#39;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    args = parser.parse_args()</span></span>
<span class="line"><span>    main(args.max_clients, args.max_conns)</span></span></code></pre></div><p>在一个新建的终端窗口中，运行 <code>client3.py</code> 然后让它与服务器同步创建 300 个连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients=300</span></span></code></pre></div><p>过一会，你的服务器进程就该爆了。这是我的环境中出现的异常截图：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_too_many_fds_exc.png" alt=""></p><p>这个例子很明显——你的服务器应该关闭描述符副本。</p><h4 id="僵尸进程" tabindex="-1">僵尸进程 <a class="header-anchor" href="#僵尸进程" aria-label="Permalink to “僵尸进程”">​</a></h4><p>但是，即使你关闭了描述符副本，你依然没有摆脱险境，因为你的服务器还有一个问题，这个问题在于“僵尸（zombies）”！</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_zombies.png" alt=""></p><p>没错，这个服务器代码确实在制造僵尸进程。我们来看看怎么回事。重新运行你的服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>在另一个终端窗口中运行以下 <code>curl</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>现在，运行 <code>ps</code> 环境，来查看正在运行的 Python 进程。下面是我的环境中 <code>ps</code> 的运行结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps auxw | grep -i python | grep -v grep</span></span>
<span class="line"><span>vagrant   9099  0.0  1.2  31804  6256 pts/0    S+   16:33   0:00 python webserver3d.py</span></span>
<span class="line"><span>vagrant   9102  0.0  0.0      0     0 pts/0    Z+   16:33   0:00 [python] &lt;defunct&gt;</span></span></code></pre></div><p>你看到第二行中，pid 为 9102，状态为 <code>Z+</code>，名字里面有个 <code>&lt;defunct&gt;</code> 的进程了吗？那就是我们的僵尸进程。这个僵尸进程的问题在于：你无法将它杀掉！</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_kill_zombie.png" alt=""></p><p>就算你尝试使用 <code>kill -9</code> 来杀死僵尸进程，它们仍旧会存活。自己试试看，看看结果。</p><p>这个僵尸到底是什么，为什么我们的服务器会造出它们呢？一个僵尸进程（zombie）是一个已经结束的进程，但它的父进程并没有等待（<code>waited</code>）它结束，并且也没有收到它的终结状态。如果一个进程在父进程退出之前退出，系统内核会把它变为一个僵尸进程，存储它的部分信息，以便父进程读取。内核保存的进程信息通常包括进程 ID、进程终止状态，以及进程的资源占用情况。OK，所以僵尸进程确实有存在的意义，但如果服务器不管这些僵尸进程，你的系统将会被壅塞。我们来看看这个会如何发生。首先，关闭你运行的服务器；然后，在一个新的终端窗口中，使用 <code>ulimit</code> 命令将最大用户进程数设为 400（同时，要确保你的最大可用描述符数大于这个数字，我们在这里设为 500）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -u 400</span></span>
<span class="line"><span>$ ulimit -n 500</span></span></code></pre></div><p>在你刚刚运行 <code>ulimit -u 400</code> 命令的终端中，运行服务器 <code>webserver3d.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>在一个新的终端窗口中，运行 <code>client3.py</code>，并且让它与服务器同时创建 500 个连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients=500</span></span></code></pre></div><p>然后，过一会，你的服务器进程应该会再次爆了，它会在创建新进程时抛出一个 <code>OSError: 资源暂时不可用</code> 的异常。但它并没有达到系统允许的最大进程数。这是我的环境中输出的异常信息截图：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_resource_unavailable.png" alt=""></p><p>你可以看到，如果服务器不管僵尸进程，它们会引发问题。接下来我会简单探讨一下僵尸进程问题的解决方案。</p><p>我们来回顾一下你刚刚掌握的知识点：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>如果你不关闭文件描述符副本，客户端就不会在请求处理完成后终止，因为客户端连接没有被关闭；</li><li>如果你不关闭文件描述符副本，长久运行的服务器最终会把可用的文件描述符（最大文件打开数）消耗殆尽；</li><li>当你创建一个新进程，而父进程不等待（<code>wait</code>）子进程，也不在子进程结束后收集它的终止状态，它会变为一个僵尸进程；</li><li>僵尸通常都会吃东西，在我们的例子中，僵尸进程会吃掉资源。如果你的服务器不管僵尸进程，它最终会消耗掉所有的可用进程（最大用户进程数）；</li><li>你不能杀死（<code>kill</code>）僵尸进程，你需要等待（<code>wait</code>）它。</li></ul><h3 id="如何处理僵尸进程" tabindex="-1">如何处理僵尸进程？ <a class="header-anchor" href="#如何处理僵尸进程" aria-label="Permalink to “如何处理僵尸进程？”">​</a></h3><p>所以，你需要做什么来处理僵尸进程呢？你需要修改你的服务器代码，来等待（<code>wait</code>）僵尸进程，并收集它们的终止信息。你可以在代码中使用系统调用 <code>wait</code> 来完成这个任务。不幸的是，这个方法离理想目标还很远，因为在没有终止的子进程存在的情况下调用 <code>wait</code> 会导致服务器进程阻塞，这会阻碍你的服务器处理新的客户端连接请求。那么，我们有其他选择吗？嗯，有的，其中一个解决方案需要结合信号处理以及 <code>wait</code> 系统调用。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_signaling.png" alt=""></p><p>这是它的工作流程。当一个子进程退出时，内核会发送 <code>SIGCHLD</code> 信号。父进程可以设置一个信号处理器，它可以异步响应 <code>SIGCHLD</code> 信号，并在信号响应函数中等待（<code>wait</code>）子进程收集终止信息，从而阻止了僵尸进程的存在。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part_conc4_sigchld_async.png" alt=""></p><p>顺便说一下，异步事件意味着父进程无法提前知道事件的发生时间。</p><p>修改你的服务器代码，设置一个 <code>SIGCHLD</code> 信号处理器，在信号处理器中等待（<code>wait</code>）终止的子进程。修改后的代码如下（webserver3e.py）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 并发服务器 - webserver3e.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过          #</span></span>
<span class="line"><span>#######################################################</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import signal</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def grim_reaper(signum, frame):</span></span>
<span class="line"><span>    pid, status = os.wait()</span></span>
<span class="line"><span>    print(</span></span>
<span class="line"><span>        &#39;Child {pid} terminated with status {status}&#39;</span></span>
<span class="line"><span>        &#39;\\n&#39;.format(pid=pid, status=status)</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    print(request.decode())</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span>    ### 挂起进程，来允许父进程完成循环，并在 &quot;accept&quot; 处阻塞</span></span>
<span class="line"><span>    time.sleep(3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    signal.signal(signal.SIGCHLD, grim_reaper)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子进程</span></span>
<span class="line"><span>            listen_socket.close()  ### 关闭子进程中多余的套接字</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)</span></span>
<span class="line"><span>        else:  ### 父进程</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>运行服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3e.py</span></span></code></pre></div><p>使用你的老朋友——<code>curl</code> 命令来向修改后的并发服务器发送一个请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>再来看看服务器：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_eintr.png" alt=""></p><p>刚刚发生了什么？<code>accept</code> 调用失败了，错误信息为 <code>EINTR</code>。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_eintr_error.png" alt=""></p><p>当子进程退出并触发 <code>SIGCHLD</code> 事件时，父进程的 <code>accept</code> 调用被阻塞了，系统转去运行信号处理器，当信号处理函数完成时，<code>accept</code> 系统调用被打断：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_eintr_accept.png" alt=""></p><p>别担心，这个问题很好解决。你只需要重新运行 <code>accept</code> 系统调用即可。这是修改后的服务器代码 <code>webserver3f.py</code>，它可以解决这个问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 并发服务器 - webserver3f.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过          #</span></span>
<span class="line"><span>#######################################################</span></span>
<span class="line"><span>import errno</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import signal</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 1024</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def grim_reaper(signum, frame):</span></span>
<span class="line"><span>    pid, status = os.wait()</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    print(request.decode())</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    signal.signal(signal.SIGCHLD, grim_reaper)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        except IOError as e:</span></span>
<span class="line"><span>            code, msg = e.args</span></span>
<span class="line"><span>            ### 若 &#39;accept&#39; 被打断，那么重启它</span></span>
<span class="line"><span>            if code == errno.EINTR:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                raise</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子进程</span></span>
<span class="line"><span>            listen_socket.close()  ### 关闭子进程中多余的描述符</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)</span></span>
<span class="line"><span>        else:  ### 父进程</span></span>
<span class="line"><span>            client_connection.close()  ### 关闭父进程中多余的描述符，继续下一轮循环</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>运行更新后的服务器 <code>webserver3f.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3f.py</span></span></code></pre></div><p>用 <code>curl</code> 来向更新后的并发服务器发送一个请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>看到了吗？没有 EINTR 异常出现了。现在检查一下，确保没有僵尸进程存活，调用 <code>wait</code> 函数的 <code>SIGCHLD</code> 信号处理器能够正常处理被终止的子进程。我们只需使用 <code>ps</code> 命令，然后看看现在没有处于 <code>Z+</code> 状态（或名字包含 <code>&lt;defunct&gt;</code> ）的 Python 进程就好了。很棒！僵尸进程没有了，我们很安心。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>如果你创建了一个子进程，但是不等待它，它就会变成一个僵尸进程；</li><li>使用 <code>SIGCHLD</code> 信号处理器可以异步地等待子进程终止，并收集其终止状态；</li><li>当使用事件处理器时，你需要牢记，系统调用可能会被打断，所以你需要处理这种情况发生时带来的异常。</li></ul><h4 id="正确处理-sigchld-信号" tabindex="-1">正确处理 SIGCHLD 信号 <a class="header-anchor" href="#正确处理-sigchld-信号" aria-label="Permalink to “正确处理 SIGCHLD 信号”">​</a></h4><p>好的，一切顺利。是不是没问题了？额，几乎是。重新尝试运行 <code>webserver3f.py</code> 但我们这次不会只发送一个请求，而是同步创建 128 个连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients 128</span></span></code></pre></div><p>现在再次运行 <code>ps</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps auxw | grep -i python | grep -v grep</span></span></code></pre></div><p>看到了吗？天啊，僵尸进程又出来了！</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc5_zombies_again.png" alt=""></p><p>这回怎么回事？当你同时运行 128 个客户端，建立 128 个连接时，服务器的子进程几乎会在同一时间处理好你的请求，然后退出。这会导致非常多的 <code>SIGCHLD</code> 信号被发送到父进程。问题在于，这些信号不会存储在队列中，所以你的服务器进程会错过很多信号，这也就导致了几个僵尸进程处于无主状态：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc5_signals_not_queued.png" alt=""></p><p>这个问题的解决方案依然是设置 <code>SIGCHLD</code> 事件处理器。但我们这次将会用 <code>WNOHANG</code> 参数循环调用 <code>waitpid</code> 来替代 <code>wait</code>，以保证所有处于终止状态的子进程都会被处理。下面是修改后的代码，<code>webserver3g.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 并发服务器 - webserver3g.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 环境下测试通过          #</span></span>
<span class="line"><span>#######################################################</span></span>
<span class="line"><span>import errno</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span>import signal</span></span>
<span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SERVER_ADDRESS = (HOST, PORT) = &#39;&#39;, 8888</span></span>
<span class="line"><span>REQUEST_QUEUE_SIZE = 1024</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def grim_reaper(signum, frame):</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            pid, status = os.waitpid(</span></span>
<span class="line"><span>                -1,          ### 等待所有子进程</span></span>
<span class="line"><span>                 os.WNOHANG  ### 无终止进程时，不阻塞进程，并抛出 EWOULDBLOCK 错误</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        except OSError:</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if pid == 0:  ### 没有僵尸进程存在了</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def handle_request(client_connection):</span></span>
<span class="line"><span>    request = client_connection.recv(1024)</span></span>
<span class="line"><span>    print(request.decode())</span></span>
<span class="line"><span>    http_response = b&quot;&quot;&quot;\\</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hello, World!</span></span>
<span class="line"><span>&quot;&quot;&quot;</span></span>
<span class="line"><span>    client_connection.sendall(http_response)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_forever():</span></span>
<span class="line"><span>    listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>    listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>    listen_socket.bind(SERVER_ADDRESS)</span></span>
<span class="line"><span>    listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span>
<span class="line"><span>    print(&#39;Serving HTTP on port {port} ...&#39;.format(port=PORT))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    signal.signal(signal.SIGCHLD, grim_reaper)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            client_connection, client_address = listen_socket.accept()</span></span>
<span class="line"><span>        except IOError as e:</span></span>
<span class="line"><span>            code, msg = e.args</span></span>
<span class="line"><span>            ### 若 &#39;accept&#39; 被打断，那么重启它</span></span>
<span class="line"><span>            if code == errno.EINTR:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                raise</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子进程</span></span>
<span class="line"><span>            listen_socket.close()  ### 关闭子进程中多余的描述符</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)</span></span>
<span class="line"><span>        else:  ### 父进程</span></span>
<span class="line"><span>            client_connection.close()  ### 关闭父进程中多余的描述符，继续下一轮循环</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>运行服务器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3g.py</span></span></code></pre></div><p>使用测试客户端 <code>client3.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients 128</span></span></code></pre></div><p>现在来查看一下，确保没有僵尸进程存在。耶！没有僵尸的生活真美好 <code>^_^</code>。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc5_no_zombies.png" alt=""></p><h3 id="大功告成" tabindex="-1">大功告成 <a class="header-anchor" href="#大功告成" aria-label="Permalink to “大功告成”">​</a></h3><p>恭喜！你刚刚经历了一段很长的旅程，我希望你能够喜欢它。现在你拥有了自己的简易并发服务器，并且这段代码能够为你在继续研究生产级 Web 服务器的路上奠定基础。</p>`,98)),a("p",null,[s[30]||(s[30]=n("我将会留一个作业：你需要将第二部分中的 WSGI 服务器升级，将它改造为一个并发服务器。你可以在",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/webserver3h.py"},{default:l(()=>[...s[29]||(s[29]=[n("这里",-1)])]),_:1}),s[31]||(s[31]=n("找到更改后的代码。但是，当你实现了自己的版本之后，你才应该来看我的代码。你已经拥有了实现这个服务器所需的所有信息。所以，快去实现它吧 ",-1)),s[32]||(s[32]=a("code",null,"^_^",-1)),s[33]||(s[33]=n("。",-1))]),s[67]||(s[67]=a("p",null,"然后要做什么呢？乔希·比林斯说过：",-1)),s[68]||(s[68]=a("blockquote",null,[a("p",null,"“就像一枚邮票一样——专注于一件事，不达目的不罢休。”")],-1)),s[69]||(s[69]=a("p",null,"开始学习基本知识。回顾你已经学过的知识。然后一步一步深入。",-1)),s[70]||(s[70]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_dig_deeper.png",alt:""})],-1)),s[71]||(s[71]=a("blockquote",null,[a("p",null,"“如果你只学会了方法，你将会被这些方法所困。但如果你学会了原理，那你就能发明出新的方法。”——拉尔夫·沃尔多·爱默生")],-1)),s[72]||(s[72]=a("p",null,"下面是一份书单，我从这些书中提炼出了这篇文章所需的素材。他们能助你在我刚刚所述的几个方面中发掘出兼具深度和广度的知识。我极力推荐你们去搞到这几本书看看：从你的朋友那里借，在当地的图书馆中阅读，或者直接在亚马逊上把它买回来。下面是我的典藏秘籍：",-1)),a("ol",null,[a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/1692"},{default:l(()=>[...s[34]||(s[34]=[n("《UNIX 网络编程 卷1：套接字联网 API （第3版）》",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/1625"},{default:l(()=>[...s[35]||(s[35]=[n("《UNIX 环境高级编程（第3版）》",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/1432"},{default:l(()=>[...s[36]||(s[36]=[n("《Linux/UNIX 系统编程手册》",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/4232"},{default:l(()=>[...s[37]||(s[37]=[n("《TCP/IP 详解 卷1：协议（第2版）",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.amazon.com/gp/product/1441418687/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1441418687&linkCode=as2&tag=russblo0b-20&linkId=QFOAWARN62OWTWUG"},{default:l(()=>[...s[38]||(s[38]=[n("《信号系统简明手册 (第二版): 并发控制深入浅出及常见错误》",-1)])]),_:1}),s[40]||(s[40]=n("，这本书也可以从",-1)),e(p,{href:"http://greenteapress.com/semaphores/"},{default:l(()=>[...s[39]||(s[39]=[n("作者的个人网站",-1)])]),_:1}),s[41]||(s[41]=n("中免费下载到。",-1))])]),a("p",null,[s[43]||(s[43]=n("顺便，我在撰写一本名为《搭个 Web 服务器：从头开始》的书。这本书讲解了如何从头开始编写一个基本的 Web 服务器，里面包含本文中没有的更多细节。订阅",-1)),e(p,{href:"https://ruslanspivak.com/lsbaws-part1/"},{default:l(()=>[...s[42]||(s[42]=[n("原文下方的邮件列表",-1)])]),_:1}),s[44]||(s[44]=n("，你就可以获取到这本书的最新进展，以及发布日期。",-1))]),s[73]||(s[73]=a("hr",null,null,-1)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),e(p,{href:"https://ruslanspivak.com/lsbaws-part3/"},{default:l(()=>[...s[45]||(s[45]=[n("https://ruslanspivak.com/lsbaws-part3/",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),e(p,{href:"https://github.com/rspivak/"},{default:l(()=>[...s[47]||(s[47]=[n("Ruslan",-1)])]),_:1}),s[51]||(s[51]=n(" 译者：",-1)),e(p,{href:"https://github.com/StdioA"},{default:l(()=>[...s[48]||(s[48]=[n("StdioA",-1)])]),_:1}),s[52]||(s[52]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[53]||(s[53]=[n("LCTT",-1)])]),_:1}),s[56]||(s[56]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[54]||(s[54]=[n("Linux中国",-1)])]),_:1}),s[57]||(s[57]=n(" 荣誉推出",-1))])])}const S=t(d,[["render",h]]);export{v as __pageData,S as default};
