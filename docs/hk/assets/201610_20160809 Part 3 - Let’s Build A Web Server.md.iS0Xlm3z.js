import{_ as t,a0 as c,w as o,s as r,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"搭個 Web 服務器（三） | LCTT x X-CMD","titleTemplate":false,"description":"搭個 Web 服務器（三） | LCTT (201610) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"搭個 Web 服務器（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"搭個 Web 服務器（三） | LCTT (201610) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201610/20160809 Part 3 - Let’s Build A Web Server","title":"搭個 Web 服務器（三）","tag":"201610","desc":""},"relativePath":"201610/20160809 Part 3 - Let’s Build A Web Server.md","filePath":"[post].md"}'),d={name:"201610/20160809 Part 3 - Let’s Build A Web Server.md"},g={start:"3"};function h(k,s,b,u,_,m){const p=c("Link");return o(),r("div",null,[s[58]||(s[58]=a("h1",{id:"搭個-web-服務器-三",tabindex:"-1"},[n("搭個 Web 服務器（三） "),a("a",{class:"header-anchor",href:"#搭個-web-服務器-三","aria-label":"Permalink to “搭個 Web 服務器（三）”"},"​")],-1)),s[59]||(s[59]=a("blockquote",null,[a("p",null,"“當我們必須創造時，才能夠學到更多。” ——皮亞傑")],-1)),a("p",null,[s[2]||(s[2]=n("在本系列的",-1)),e(p,{href:"https://linux.cn/article-7685-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第二部分",-1)])]),_:1}),s[3]||(s[3]=n("中，你創造了一個可以處理基本 HTTP GET 請求的、樸素的 WSGI 服務器。當時我問了一個問題：“你該如何讓你的服務器在同一時間處理多個請求呢？”在這篇文章中，你會找到答案。繫好安全帶，我們要認真起來，全速前進了！你將會體驗到一段非常快速的旅程。準備好你的 Linux、Mac OS X（或者其他 *nix 系統），還有你的 Python。本文中所有源代碼均可在 ",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/"},{default:l(()=>[...s[1]||(s[1]=[n("GitHub",-1)])]),_:1}),s[4]||(s[4]=n(" 上找到。",-1))]),s[60]||(s[60]=a("h3",{id:"服務器的基本結構及如何處理請求",tabindex:"-1"},[n("服務器的基本結構及如何處理請求 "),a("a",{class:"header-anchor",href:"#服務器的基本結構及如何處理請求","aria-label":"Permalink to “服務器的基本結構及如何處理請求”"},"​")],-1)),a("p",null,[s[7]||(s[7]=n("首先，我們來回顧一下 Web 服務器的基本結構，以及服務器處理來自客户端的請求時，所需的必要步驟。你在",-1)),e(p,{href:"https://linux.cn/article-7662-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("第一部分",-1)])]),_:1}),s[8]||(s[8]=n("及",-1)),e(p,{href:"https://linux.cn/article-7685-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("第二部分",-1)])]),_:1}),s[9]||(s[9]=n("中創建的輪詢服務器只能夠一次處理一個請求。在處理完當前請求之前，它不能夠接受新的客户端連接。所有請求為了等待服務都需要排隊，在服務繁忙時，這個隊伍可能會排的很長，一些客户端可能會感到不開心。",-1))]),s[61]||(s[61]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it1.png",alt:""})],-1)),a("p",null,[s[11]||(s[11]=n("這是輪詢服務器 ",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/webserver3a.py"},{default:l(()=>[...s[10]||(s[10]=[n("webserver3a.py",-1)])]),_:1}),s[12]||(s[12]=n(" 的代碼：",-1))]),s[62]||(s[62]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#####################################################################</span></span>
<span class="line"><span># 輪詢服務器 - webserver3a.py                                       #</span></span>
<span class="line"><span>#                                                                   #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                                          #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過                        #</span></span>
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
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>為了觀察到你的服務器在同一時間只能處理一個請求的行為，我們對服務器的代碼做一點點修改：在將響應發送至客户端之後，將程序阻塞 60 秒。這個修改只需要一行代碼，來告訴服務器進程暫停 60 秒鐘。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it2.png" alt=""></p>`,3)),a("p",null,[s[14]||(s[14]=n("這是我們更改後的代碼，包含暫停語句的服務器 ",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/webserver3b.py"},{default:l(()=>[...s[13]||(s[13]=[n("webserver3b.py",-1)])]),_:1}),s[15]||(s[15]=n("：",-1))]),s[63]||(s[63]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#########################################################################</span></span>
<span class="line"><span># 輪詢服務器 - webserver3b.py                                           #</span></span>
<span class="line"><span>#                                                                       #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                                              #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過                            #</span></span>
<span class="line"><span>#                                                                       #</span></span>
<span class="line"><span># - 服務器向客户端發送響應之後，會阻塞 60 秒                            #</span></span>
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
<span class="line"><span>    time.sleep(60)  ### 睡眠語句，阻塞該進程 60 秒</span></span>
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
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>用以下命令啓動服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3b.py</span></span></code></pre></div><p>現在，打開一個新的命令列窗口，然後運行 <code>curl</code> 語句。你應該可以立刻看到屏幕上顯示的字符串“Hello, World!”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span>
<span class="line"><span>Hello, World!</span></span></code></pre></div><p>然後，立刻打開第二個命令列窗口，運行相同的 <code>curl</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>如果你在 60 秒之內完成了以上步驟，你會看到第二條 <code>curl</code> 指令不會立刻產生任何輸出，而只是掛在了哪裏。同樣，服務器也不會在標準輸出流中輸出新的請求內容。這是這個過程在我的 Mac 電腦上的運行結果（在右下角用黃色框標註出來的窗口中，我們能看到第二個 <code>curl</code> 指令被掛起，正在等待連接被服務器接受）：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it3.png" alt=""></p><p>當你等待足夠長的時間（60 秒以上）後，你會看到第一個 <code>curl</code> 程序完成，而第二個 <code>curl</code> 在屏幕上輸出了“Hello, World!”，然後休眠 60 秒，進而終止。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it4.png" alt=""></p><p>這樣運行的原因是因為在服務器在處理完第一個來自 <code>curl</code> 的請求之後，只有等待 60 秒才能開始處理第二個請求。這個處理請求的過程按順序進行（也可以説，迭代進行），一步一步進行，在我們剛剛給出的例子中，在同一時間內只能處理一個請求。</p><p>現在，我們來簡單討論一下客户端與服務器的交流過程。為了讓兩個程序在網絡中互相交流，它們必須使用套接字。你應當在本系列的前兩部分中見過它幾次了。但是，套接字是什麼？</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_socket.png" alt=""></p><p>套接字（socket）是一個通訊通道端點（endpoint）的抽象描述，它可以讓你的程序通過文件描述符來與其它程序進行交流。在這篇文章中，我只會單獨討論 Linux 或 Mac OS X 中的 TCP/IP 套接字。這裏有一個重點概念需要你去理解：TCP 套接字對（socket pair）。</p>`,15)),a("blockquote",null,[a("p",null,[s[17]||(s[17]=n("TCP 連接使用的套接字對是一個由 4 個元素組成的元組，它確定了 TCP 連接的兩端：本地 IP 地址、本地端口、遠端 IP 地址及遠端端口。一個套接字對唯一地確定了網絡中的每一個 TCP 連接。在連接一端的兩個值：一個 IP 地址和一個端口，通常被稱作一個套接字。（引自",-1)),e(p,{href:"http://www.epubit.com.cn/book/details/1692"},{default:l(()=>[...s[16]||(s[16]=[n("《UNIX 網絡編程 卷1：套接字聯網 API （第3版）》",-1)])]),_:1}),s[18]||(s[18]=n("）",-1))])]),s[64]||(s[64]=i('<p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_socketpair.png" alt=""></p><p>所以，元組 <code>{10.10.10.2:49152, 12.12.12.3:8888}</code> 就是一個能夠在客户端確定 TCP 連接兩端的套接字對，而元組 <code>{12.12.12.3:8888, 10.10.10.2:49152}</code> 則是在服務端確定 TCP 連接兩端的套接字對。在這個例子中，確定 TCP 服務端的兩個值（IP 地址 <code>12.12.12.3</code> 及端口 <code>8888</code>），代表一個套接字；另外兩個值則代表客户端的套接字。</p><p>一個服務器創建一個套接字並開始建立連接的基本工作流程如下：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_server_socket_sequence.png" alt=""></p><ol><li>服務器創建一個 TCP/IP 套接字。我們可以用這條 Python 語句來創建：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span></code></pre></div><ol start="2"><li>服務器可能會設定一些套接字選項（這個步驟是可選的，但是你可以看到上面的服務器代碼做了設定，這樣才能夠在重啓服務器時多次複用同一地址）：</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span></code></pre></div>',8)),a("ol",g,[a("li",null,[s[20]||(s[20]=n("然後，服務器綁定一個地址。綁定函數 ",-1)),s[21]||(s[21]=a("code",null,"bind",-1)),s[22]||(s[22]=n(" 可以將一個本地協議地址賦給套接字。若使用 TCP 協議，調用綁定函數 ",-1)),s[23]||(s[23]=a("code",null,"bind",-1)),s[24]||(s[24]=n(" 時，需要指定一個端口號，一個 IP 地址，或兩者兼有，或兩者全無。（引自",-1)),e(p,{href:"http://www.epubit.com.cn/book/details/1692"},{default:l(()=>[...s[19]||(s[19]=[n("《UNIX網絡編程 卷1：套接字聯網 API （第3版）》",-1)])]),_:1}),s[25]||(s[25]=n("）",-1))])]),s[65]||(s[65]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket.bind(SERVER_ADDRESS)</span></span></code></pre></div><ol start="4"><li>然後，服務器開啓套接字的監聽模式。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>	listen_socket.listen(REQUEST_QUEUE_SIZE)</span></span></code></pre></div><p>監聽函數 <code>listen</code> 只應在服務端調用。它會通知操作系統內核，表明它會接受所有向該套接字發送的入站連接請求。</p><p>以上四步完成後，服務器將循環接收來自客户端的連接，一次循環處理一條。當有連接可用時，接受請求函數 <code>accept</code> 將會返回一個已連接的客户端套接字。然後，服務器從這個已連接的客户端套接字中讀取請求數據，將數據在其標準輸出流中輸出出來，並向客户端回送一條消息。然後，服務器會關閉這個客户端連接，並準備接收一個新的客户端連接。</p><p>這是客户端使用 TCP/IP 協議與服務器通信的必要步驟：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_client_socket_sequence.png" alt=""></p><p>下面是一段示例代碼，使用這段代碼，客户端可以連接你的服務器，發送一個請求，並輸出響應內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import socket</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 創建一個套接字，並連接值服務器</span></span>
<span class="line"><span>sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>sock.connect((&#39;localhost&#39;, 8888))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 發送一段數據，並接收響應數據</span></span>
<span class="line"><span>sock.sendall(b&#39;test&#39;)</span></span>
<span class="line"><span>data = sock.recv(1024)</span></span>
<span class="line"><span>print(data.decode())</span></span></code></pre></div><p>在創建套接字後，客户端需要連接至服務器。我們可以調用連接函數 <code>connect</code> 來完成這個操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sock.connect((&#39;localhost&#39;, 8888))</span></span></code></pre></div><p>客户端只需提供待連接的遠程服務器的 IP 地址（或主機名），及端口號，即可連接至遠端服務器。</p><p>你可能已經注意到了，客户端不需要調用 <code>bind</code> 及 <code>accept</code> 函數，就可以與服務器建立連接。客户端不需要調用 <code>bind</code> 函數是因為客户端不需要關注本地 IP 地址及端口號。操作系統內核中的 TCP/IP 協議棧會在客户端調用 <code>connect</code> 函數時，自動為套接字分配本地 IP 地址及本地端口號。這個本地端口被稱為臨時端口（ephemeral port），即一個短暫開放的端口。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_ephemeral_port.png" alt=""></p><p>服務器中有一些端口被用於承載一些眾所周知的服務，它們被稱作通用（well-known）端口：如 80 端口用於 HTTP 服務，22 端口用於 SSH 服務。打開你的 Python shell，與你在本地運行的服務器建立一個連接，來看看內核給你的客户端套接字分配了哪個臨時端口（在嘗試這個例子之前，你需要運行服務器程序 <code>webserver3a.py</code> 或 <code>webserver3b.py</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import socket</span></span>
<span class="line"><span>&gt;&gt;&gt; sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>&gt;&gt;&gt; sock.connect((&#39;localhost&#39;, 8888))</span></span>
<span class="line"><span>&gt;&gt;&gt; host, port = sock.getsockname()[:2]</span></span>
<span class="line"><span>&gt;&gt;&gt; host, port</span></span>
<span class="line"><span>(&#39;127.0.0.1&#39;, 60589)</span></span></code></pre></div><p>在上面的例子中，內核將臨時端口 60589 分配給了你的套接字。</p><p>在我開始回答我在第二部分中提出的問題之前，我還需要快速講解一些概念。你很快就會明白這些概念為什麼非常重要。這兩個概念，一個是進程，另外一個是文件描述符。</p><p>什麼是進程？進程就是一個程序執行的實體。舉個例子：當你的服務器代碼被執行時，它會被載入內存，而內存中表現此次程序運行的實體就叫做進程。內核記錄了進程的一系列有關信息——比如進程 ID——來追蹤它的運行情況。當你在執行輪詢服務器 <code>webserver3a.py</code> 或 <code>webserver3b.py</code> 時，你其實只是啓動了一個進程。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_server_process.png" alt=""></p><p>我們在終端窗口中運行 <code>webserver3b.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3b.py</span></span></code></pre></div><p>在另一個終端窗口中，我們可以使用 <code>ps</code> 命令獲取該進程的相關信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps | grep webserver3b | grep -v grep</span></span>
<span class="line"><span>7182 ttys003    0:00.04 python webserver3b.py</span></span></code></pre></div><p><code>ps</code> 命令顯示，我們剛剛只運行了一個 Python 進程 <code>webserver3b.py</code>。當一個進程被創建時，內核會為其分配一個進程 ID，也就是 PID。在 UNIX 中，所有用户進程都有一個父進程；當然，這個父進程也有進程 ID，叫做父進程 ID，縮寫為 PPID。假設你默認使用 BASH shell，那當你啓動服務器時，就會啓動一個新的進程，同時被賦予一個 PID，而它的父進程 PID 會被設為 BASH shell 的 PID。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_ppid_pid.png" alt=""></p><p>自己嘗試一下，看看這一切都是如何工作的。重新開啓你的 Python shell，它會創建一個新進程，然後在其中使用系統調用 <code>os.getpid()</code> 及 <code>os.getppid()</code> 來獲取 Python shell 進程的 PID 及其父進程 PID（也就是你的 BASH shell 的 PID）。然後，在另一個終端窗口中運行 <code>ps</code> 命令，然後用 <code>grep</code> 來查找 PPID（父進程 ID，在我的例子中是 3148）。在下面的屏幕截圖中，你可以看到一個我的 Mac OS X 系統中關於進程父子關係的例子，在這個例子中，子進程是我的 Python shell 進程，而父進程是 BASH shell 進程：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_pid_ppid_screenshot.png" alt=""></p><p>另外一個需要了解的概念，就是文件描述符。什麼是文件描述符？文件描述符是一個非負整數，當進程打開一個現有文件、創建新文件或創建一個新的套接字時，內核會將這個數返回給進程。你以前可能聽説過，在 UNIX 中，一切皆是文件。內核會按文件描述符來找到一個進程所打開的文件。當你需要讀取文件或向文件寫入時，我們同樣通過文件描述符來定位這個文件。Python 提供了高層次的操作文件（或套接字）的對象，所以你不需要直接通過文件描述符來定位文件。但是，在高層對象之下，我們就是用它來在 UNIX 中定位文件及套接字，通過這個整數的文件描述符。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_process_descriptors.png" alt=""></p><p>一般情況下，UNIX shell 會將一個進程的標準輸入流（STDIN）的文件描述符設為 0，標準輸出流（STDOUT）設為 1，而標準錯誤打印（STDERR）的文件描述符會被設為 2。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it_default_descriptors.png" alt=""></p><p>我之前提到過，即使 Python 提供了高層次的文件對象或類文件對象來供你操作，你仍然可以在對象上使用 <code>fileno()</code> 方法，來獲取與該文件相關聯的文件描述符。回到 Python shell 中，我們來看看你該怎麼做到這一點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import sys</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stdin</span></span>
<span class="line"><span>&lt;open file &#39;&lt;stdin&gt;&#39;, mode &#39;r&#39; at 0x102beb0c0&gt;</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stdin.fileno()</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stdout.fileno()</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>&gt;&gt;&gt; sys.stderr.fileno()</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>當你在 Python 中操作文件及套接字時，你可能會使用高層次的文件/套接字對象，但是你仍然有可能會直接使用文件描述符。下面有一個例子，來演示如何用文件描述符做參數來進行一次寫入的系統調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import sys</span></span>
<span class="line"><span>&gt;&gt;&gt; import os</span></span>
<span class="line"><span>&gt;&gt;&gt; res = os.write(sys.stdout.fileno(), &#39;hello\\n&#39;)</span></span>
<span class="line"><span>hello</span></span></code></pre></div><p>下面是比較有趣的部分——不過你可能不會為此感到驚訝，因為你已經知道在 Unix 中，一切皆為文件——你的套接字對象同樣有一個相關聯的文件描述符。和剛才操縱文件時一樣，當你在 Python 中創建一個套接字時，你會得到一個對象而不是一個非負整數，但你永遠可以用我之前提到過的 <code>fileno()</code> 方法獲取套接字對象的文件描述符，並可以通過這個文件描述符來直接操縱套接字。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; import socket</span></span>
<span class="line"><span>&gt;&gt;&gt; sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>&gt;&gt;&gt; sock.fileno()</span></span>
<span class="line"><span>3</span></span></code></pre></div><p>我還想再提一件事：不知道你有沒有注意到，在我們的第二個輪詢服務器 <code>webserver3b.py</code> 中，當你的服務器休眠 60 秒的過程中，你仍然可以通過第二個 <code>curl</code> 命令連接至服務器。當然 <code>curl</code> 命令並沒有立刻輸出任何內容而是掛在哪裏，但是既然服務器沒有接受連接，那它為什麼不立即拒絕掉連接，而讓它還能夠繼續與服務器建立連接呢？這個問題的答案是：當我在調用套接字對象的 <code>listen</code> 方法時，我為該方法提供了一個 <code>BACKLOG</code> 參數，在代碼中用 <code>REQUEST_QUEUE_SIZE</code> 常量來表示。<code>BACKLOG</code> 參數決定了在內核中為存放即將到來的連接請求所創建的隊列的大小。當服務器 <code>webserver3b.py</code> 在睡眠的時候，你運行的第二個 <code>curl</code> 命令依然能夠連接至服務器，因為內核中用來存放即將接收的連接請求的隊列依然擁有足夠大的可用空間。</p><p>儘管增大 <code>BACKLOG</code> 參數並不能神奇地使你的服務器同時處理多個請求，但當你的服務器很繁忙時，將它設置為一個較大的值還是相當重要的。這樣，在你的服務器調用 <code>accept</code> 方法時，不需要再等待一個新的連接建立，而可以立刻直接抓取隊列中的第一個客户端連接，並不加停頓地立刻處理它。</p><p>歐耶！現在你已經瞭解了一大塊內容。我們來快速回顧一下我們剛剛講解的知識（當然，如果這些對你來説都是基礎知識的話，那我們就當複習好啦）。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>輪詢服務器</li><li>服務端套接字創建流程（創建套接字，綁定，監聽及接受）</li><li>客户端連接創建流程（創建套接字，連接）</li><li>套接字對</li><li>套接字</li><li>臨時端口及通用端口</li><li>進程</li><li>進程 ID（PID），父進程 ID（PPID），以及進程父子關係</li><li>文件描述符</li><li>套接字的 <code>listen</code> 方法中，<code>BACKLOG</code> 參數的含義</li></ul><h3 id="如何併發處理多個請求" tabindex="-1">如何併發處理多個請求 <a class="header-anchor" href="#如何併發處理多個請求" aria-label="Permalink to “如何併發處理多個請求”">​</a></h3><p>現在，我可以開始回答第二部分中的那個問題了：“你該如何讓你的服務器在同一時間處理多個請求呢？”或者換一種説法：“如何編寫一個併發服務器？”</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_service_clients.png" alt=""></p><p>在 UNIX 系統中編寫一個併發服務器最簡單的方法，就是使用系統調用 <code>fork()</code>。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_fork.png" alt=""></p><p>下面是全新出爐的併發服務器 <code>webserver3c.py</code> 的代碼，它可以同時處理多個請求（和我們之前的例子 <code>webserver3b.py</code> 一樣，每個子進程都會休眠 60 秒）：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_it2.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 併發服務器 - webserver3c.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過          #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># - 完成客户端請求處理之後，子進程會休眠 60 秒        #</span></span>
<span class="line"><span># - 父子進程會關閉重複的描述符                        #</span></span>
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
<span class="line"><span>        if pid == 0:  ### 子進程</span></span>
<span class="line"><span>            listen_socket.close()  ### 關閉子進程中複製的套接字對象</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)  ### 子進程在這裏退出</span></span>
<span class="line"><span>        else:  ### 父進程</span></span>
<span class="line"><span>            client_connection.close()  ### 關閉父進程中的客户端連接對象，並循環執行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>在深入研究代碼、討論 <code>fork</code> 如何工作之前，先嚐試運行它，自己看一看這個服務器是否真的可以同時處理多個客户端請求，而不是像輪詢服務器 <code>webserver3a.py</code> 和 <code>webserver3b.py</code> 一樣。在命令列中使用如下命令啓動服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3c.py</span></span></code></pre></div><p>然後，像我們之前測試輪詢服務器那樣，運行兩個 <code>curl</code> 命令，來看看這次的效果。現在你可以看到，即使子進程在處理客户端請求後會休眠 60 秒，但它並不會影響其它客户端連接，因為他們都是由完全獨立的進程來處理的。你應該看到你的 <code>curl</code> 命令立即輸出了“Hello, World!”然後掛起 60 秒。你可以按照你的想法運行儘可能多的 <code>curl</code> 命令（好吧，並不能運行特別特別多 <code>^_^</code>），所有的命令都會立刻輸出來自服務器的響應 “Hello, World!”，並不會出現任何可被察覺到的延遲行為。試試看吧。</p><p>如果你要理解 <code>fork()</code>，那最重要的一點是：<strong>你調用了它一次，但是它會返回兩次</strong> —— 一次在父進程中，另一次是在子進程中。當你創建了一個新進程，那麼 <code>fork()</code> 在子進程中的返回值是 0。如果是在父進程中，那 <code>fork()</code> 函數會返回子進程的 PID。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_how_fork_works.png" alt=""></p><p>我依然記得在第一次看到它並嘗試使用 <code>fork()</code> 的時候，我是多麼的入迷。它在我眼裏就像是魔法一樣。這就好像我在讀一段順序執行的代碼，然後“砰！”地一聲，代碼變成了兩份，然後出現了兩個實體，同時並行地運行相同的代碼。講真，那個時候我覺得它真的跟魔法一樣神奇。</p><p>當父進程創建出一個新的子進程時，子進程會複製從父進程中複製一份文件描述符：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_shared_descriptors.png" alt=""></p><p>你可能注意到，在上面的代碼中，父進程關閉了客户端連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>else:  ### parent</span></span>
<span class="line"><span>    client_connection.close()  # close parent copy and loop over</span></span></code></pre></div><p>不過，既然父進程關閉了這個套接字，那為什麼子進程仍然能夠從來自客户端的套接字中讀取數據呢？答案就在上面的圖片中。內核會使用描述符引用計數器來決定是否要關閉一個套接字。當你的服務器創建一個子進程時，子進程會複製父進程的所有文件描述符，內核中該描述符的引用計數也會增加。如果只有一個父進程及一個子進程，那客户端套接字的文件描述符引用數應為 2；當父進程關閉客户端連接的套接字時，內核只會減少它的引用計數，將其變為 1，但這仍然不會使內核關閉該套接字。子進程也關閉了父進程中 <code>listen_socket</code> 的複製實體，因為子進程不需要關注新的客户端連接，而只需要處理已建立的客户端連接中的請求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>listen_socket.close()  ### 關閉子進程中的複製實體</span></span></code></pre></div><p>我們將會在後文中討論，如果你不關閉那些重複的描述符，會發生什麼。</p><p>你可以從你的併發服務器源碼中看到，父進程的主要職責為：接受一個新的客户端連接，複製出一個子進程來處理這個連接，然後繼續循環來接受另外的客户端連接，僅此而已。服務器父進程並不會處理客户端連接——子進程才會做這件事。</p><p>打個岔：當我們説兩個事件併發執行時，我們所要表達的意思是什麼？</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc2_concurrent_events.png" alt=""></p><p>當我們説“兩個事件併發執行”時，它通常意味着這兩個事件同時發生。簡單來講，這個定義沒問題，但你應該記住它的嚴格定義：</p>`,68)),a("blockquote",null,[a("p",null,[s[27]||(s[27]=n("如果你不能在代碼中判斷兩個事件的發生順序，那這兩個事件就是併發執行的。（引自",-1)),e(p,{href:"http://www.amazon.com/gp/product/1441418687/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1441418687&linkCode=as2&tag=russblo0b-20&linkId=QFOAWARN62OWTWUG"},{default:l(()=>[...s[26]||(s[26]=[n("《信號系統簡明手冊 (第二版): 併發控制深入淺出及常見錯誤》",-1)])]),_:1}),s[28]||(s[28]=n("）",-1))])]),s[66]||(s[66]=i(`<p>好的，現在你又該回顧一下你剛剛學過的知識點了。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>在 Unix 中，編寫一個併發服務器的最簡單的方式——使用 <code>fork()</code> 系統調用；</li><li>當一個進程分叉（<code>fork</code>）出另一個進程時，它會變成剛剛分叉出的進程的父進程；</li><li>在進行 <code>fork</code> 調用後，父進程和子進程共享相同的文件描述符；</li><li>系統內核通過描述符的引用計數來決定是否要關閉該描述符對應的文件或套接字；</li><li>服務器父進程的主要職責：現在它做的只是從客户端接受一個新的連接，分叉出子進程來處理這個客户端連接，然後開始下一輪循環，去接收新的客户端連接。</li></ul><h3 id="進程分叉後不關閉重複的套接字會發生什麼" tabindex="-1">進程分叉後不關閉重複的套接字會發生什麼？ <a class="header-anchor" href="#進程分叉後不關閉重複的套接字會發生什麼" aria-label="Permalink to “進程分叉後不關閉重複的套接字會發生什麼？”">​</a></h3><p>我們來看看，如果我們不在父進程與子進程中關閉重複的套接字描述符會發生什麼。下面是剛才的併發服務器代碼的修改版本，這段代碼（<code>webserver3d.py</code> 中，服務器不會關閉重複的描述符）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 併發服務器 - webserver3d.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過          #</span></span>
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
<span class="line"><span>        ### 將引用存儲起來，否則在下一輪循環時，他們會被垃圾回收機制銷燬</span></span>
<span class="line"><span>        clients.append(client_connection)</span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子進程</span></span>
<span class="line"><span>            listen_socket.close()  ### 關閉子進程中多餘的套接字</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)  ### 子進程在這裏結束</span></span>
<span class="line"><span>        else:  ### 父進程</span></span>
<span class="line"><span>            # client_connection.close()</span></span>
<span class="line"><span>            print(len(clients))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>用以下命令來啓動服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>用 <code>curl</code> 命令連接服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span>
<span class="line"><span>Hello, World!</span></span></code></pre></div><p>好，<code>curl</code> 命令輸出了來自併發服務器的響應內容，但程序並沒有退出，而是仍然掛起。到底發生了什麼？這個服務器並不會掛起 60 秒：子進程只處理客户端連接，關閉連接然後退出，但客户端的 <code>curl</code> 命令並沒有終止。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_child_is_active.png" alt=""></p><p>所以，為什麼 <code>curl</code> 不終止呢？原因就在於文件描述符的副本。當子進程關閉客户端連接時，系統內核會減少客户端套接字的引用計數，將其變為 1。服務器子進程退出了，但客户端套接字並沒有被內核關閉，因為該套接字的描述符引用計數並沒有變為 0，所以，這就導致了連接終止包（在 TCP/IP 協議中稱作 <code>FIN</code>）不會被髮送到客户端，所以客户端會一直保持連接。這裏也會出現另一個問題：如果你的服務器長時間運行，並且不關閉文件描述符的副本，那麼可用的文件描述符會被消耗殆盡：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_out_of_descriptors.png" alt=""></p><p>使用 <code>Control-C</code> 關閉服務器 <code>webserver3d.py</code>，然後在 shell 中使用內置命令 <code>ulimit</code> 來查看系統默認為你的服務器進程分配的可用資源數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -a</span></span>
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
<span class="line"><span>file locks                      (-x) unlimited</span></span></code></pre></div><p>你可以從上面的結果看到，在我的 Ubuntu 機器中，系統為我的服務器進程分配的最大可用文件描述符（文件打開）數為 1024。</p><p>現在我們來看一看，如果你的服務器不關閉重複的描述符，它會如何消耗可用的文件描述符。在一個已有的或新建的終端窗口中，將你的服務器進程的最大可用文件描述符設為 256：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -n 256</span></span></code></pre></div><p>在你剛剛運行 <code>ulimit -n 256</code> 的終端窗口中運行服務器 <code>webserver3d.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>然後使用下面的客户端 <code>client3.py</code> 來測試你的服務器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 測試客户端 - client3.py                             #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過          #</span></span>
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
<span class="line"><span>    main(args.max_clients, args.max_conns)</span></span></code></pre></div><p>在一個新建的終端窗口中，運行 <code>client3.py</code> 然後讓它與服務器同步創建 300 個連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients=300</span></span></code></pre></div><p>過一會，你的服務器進程就該爆了。這是我的環境中出現的異常截圖：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_too_many_fds_exc.png" alt=""></p><p>這個例子很明顯——你的服務器應該關閉描述符副本。</p><h4 id="殭屍進程" tabindex="-1">殭屍進程 <a class="header-anchor" href="#殭屍進程" aria-label="Permalink to “殭屍進程”">​</a></h4><p>但是，即使你關閉了描述符副本，你依然沒有擺脱險境，因為你的服務器還有一個問題，這個問題在於“殭屍（zombies）”！</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_zombies.png" alt=""></p><p>沒錯，這個服務器代碼確實在製造殭屍進程。我們來看看怎麼回事。重新運行你的服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>在另一個終端窗口中運行以下 <code>curl</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>現在，運行 <code>ps</code> 環境，來查看正在運行的 Python 進程。下面是我的環境中 <code>ps</code> 的運行結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps auxw | grep -i python | grep -v grep</span></span>
<span class="line"><span>vagrant   9099  0.0  1.2  31804  6256 pts/0    S+   16:33   0:00 python webserver3d.py</span></span>
<span class="line"><span>vagrant   9102  0.0  0.0      0     0 pts/0    Z+   16:33   0:00 [python] &lt;defunct&gt;</span></span></code></pre></div><p>你看到第二行中，pid 為 9102，狀態為 <code>Z+</code>，名字裏面有個 <code>&lt;defunct&gt;</code> 的進程了嗎？那就是我們的殭屍進程。這個殭屍進程的問題在於：你無法將它殺掉！</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_kill_zombie.png" alt=""></p><p>就算你嘗試使用 <code>kill -9</code> 來殺死殭屍進程，它們仍舊會存活。自己試試看，看看結果。</p><p>這個殭屍到底是什麼，為什麼我們的服務器會造出它們呢？一個殭屍進程（zombie）是一個已經結束的進程，但它的父進程並沒有等待（<code>waited</code>）它結束，並且也沒有收到它的終結狀態。如果一個進程在父進程退出之前退出，系統內核會把它變為一個殭屍進程，存儲它的部分信息，以便父進程讀取。內核保存的進程信息通常包括進程 ID、進程終止狀態，以及進程的資源佔用情況。OK，所以殭屍進程確實有存在的意義，但如果服務器不管這些殭屍進程，你的系統將會被壅塞。我們來看看這個會如何發生。首先，關閉你運行的服務器；然後，在一個新的終端窗口中，使用 <code>ulimit</code> 命令將最大用户進程數設為 400（同時，要確保你的最大可用描述符數大於這個數字，我們在這裏設為 500）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ulimit -u 400</span></span>
<span class="line"><span>$ ulimit -n 500</span></span></code></pre></div><p>在你剛剛運行 <code>ulimit -u 400</code> 命令的終端中，運行服務器 <code>webserver3d.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3d.py</span></span></code></pre></div><p>在一個新的終端窗口中，運行 <code>client3.py</code>，並且讓它與服務器同時創建 500 個連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients=500</span></span></code></pre></div><p>然後，過一會，你的服務器進程應該會再次爆了，它會在創建新進程時拋出一個 <code>OSError: 資源暫時不可用</code> 的異常。但它並沒有達到系統允許的最大進程數。這是我的環境中輸出的異常信息截圖：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc3_resource_unavailable.png" alt=""></p><p>你可以看到，如果服務器不管殭屍進程，它們會引發問題。接下來我會簡單探討一下殭屍進程問題的解決方案。</p><p>我們來回顧一下你剛剛掌握的知識點：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>如果你不關閉文件描述符副本，客户端就不會在請求處理完成後終止，因為客户端連接沒有被關閉；</li><li>如果你不關閉文件描述符副本，長久運行的服務器最終會把可用的文件描述符（最大文件打開數）消耗殆盡；</li><li>當你創建一個新進程，而父進程不等待（<code>wait</code>）子進程，也不在子進程結束後收集它的終止狀態，它會變為一個殭屍進程；</li><li>殭屍通常都會吃東西，在我們的例子中，殭屍進程會吃掉資源。如果你的服務器不管殭屍進程，它最終會消耗掉所有的可用進程（最大用户進程數）；</li><li>你不能殺死（<code>kill</code>）殭屍進程，你需要等待（<code>wait</code>）它。</li></ul><h3 id="如何處理殭屍進程" tabindex="-1">如何處理殭屍進程？ <a class="header-anchor" href="#如何處理殭屍進程" aria-label="Permalink to “如何處理殭屍進程？”">​</a></h3><p>所以，你需要做什麼來處理殭屍進程呢？你需要修改你的服務器代碼，來等待（<code>wait</code>）殭屍進程，並收集它們的終止信息。你可以在代碼中使用系統調用 <code>wait</code> 來完成這個任務。不幸的是，這個方法離理想目標還很遠，因為在沒有終止的子進程存在的情況下調用 <code>wait</code> 會導致服務器進程阻塞，這會阻礙你的服務器處理新的客户端連接請求。那麼，我們有其他選擇嗎？嗯，有的，其中一個解決方案需要結合信號處理以及 <code>wait</code> 系統調用。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_signaling.png" alt=""></p><p>這是它的工作流程。當一個子進程退出時，內核會發送 <code>SIGCHLD</code> 信號。父進程可以設置一個信號處理器，它可以異步響應 <code>SIGCHLD</code> 信號，並在信號響應函數中等待（<code>wait</code>）子進程收集終止信息，從而阻止了殭屍進程的存在。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part_conc4_sigchld_async.png" alt=""></p><p>順便説一下，異步事件意味着父進程無法提前知道事件的發生時間。</p><p>修改你的服務器代碼，設置一個 <code>SIGCHLD</code> 信號處理器，在信號處理器中等待（<code>wait</code>）終止的子進程。修改後的代碼如下（webserver3e.py）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 併發服務器 - webserver3e.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過          #</span></span>
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
<span class="line"><span>    ### 掛起進程，來允許父進程完成循環，並在 &quot;accept&quot; 處阻塞</span></span>
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
<span class="line"><span>        if pid == 0:  ### 子進程</span></span>
<span class="line"><span>            listen_socket.close()  ### 關閉子進程中多餘的套接字</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)</span></span>
<span class="line"><span>        else:  ### 父進程</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>運行服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3e.py</span></span></code></pre></div><p>使用你的老朋友——<code>curl</code> 命令來向修改後的併發服務器發送一個請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>再來看看服務器：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_eintr.png" alt=""></p><p>剛剛發生了什麼？<code>accept</code> 調用失敗了，錯誤信息為 <code>EINTR</code>。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_eintr_error.png" alt=""></p><p>當子進程退出並觸發 <code>SIGCHLD</code> 事件時，父進程的 <code>accept</code> 調用被阻塞了，系統轉去運行信號處理器，當信號處理函數完成時，<code>accept</code> 系統調用被打斷：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc4_eintr_accept.png" alt=""></p><p>別擔心，這個問題很好解決。你只需要重新運行 <code>accept</code> 系統調用即可。這是修改後的服務器代碼 <code>webserver3f.py</code>，它可以解決這個問題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 併發服務器 - webserver3f.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過          #</span></span>
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
<span class="line"><span>            ### 若 &#39;accept&#39; 被打斷，那麼重啓它</span></span>
<span class="line"><span>            if code == errno.EINTR:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                raise</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子進程</span></span>
<span class="line"><span>            listen_socket.close()  ### 關閉子進程中多餘的描述符</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)</span></span>
<span class="line"><span>        else:  ### 父進程</span></span>
<span class="line"><span>            client_connection.close()  ### 關閉父進程中多餘的描述符，繼續下一輪循環</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>運行更新後的服務器 <code>webserver3f.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3f.py</span></span></code></pre></div><p>用 <code>curl</code> 來向更新後的併發服務器發送一個請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl http://localhost:8888/hello</span></span></code></pre></div><p>看到了嗎？沒有 EINTR 異常出現了。現在檢查一下，確保沒有殭屍進程存活，調用 <code>wait</code> 函數的 <code>SIGCHLD</code> 信號處理器能夠正常處理被終止的子進程。我們只需使用 <code>ps</code> 命令，然後看看現在沒有處於 <code>Z+</code> 狀態（或名字包含 <code>&lt;defunct&gt;</code> ）的 Python 進程就好了。很棒！殭屍進程沒有了，我們很安心。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_checkpoint.png" alt=""></p><ul><li>如果你創建了一個子進程，但是不等待它，它就會變成一個殭屍進程；</li><li>使用 <code>SIGCHLD</code> 信號處理器可以異步地等待子進程終止，並收集其終止狀態；</li><li>當使用事件處理器時，你需要牢記，系統調用可能會被打斷，所以你需要處理這種情況發生時帶來的異常。</li></ul><h4 id="正確處理-sigchld-信號" tabindex="-1">正確處理 SIGCHLD 信號 <a class="header-anchor" href="#正確處理-sigchld-信號" aria-label="Permalink to “正確處理 SIGCHLD 信號”">​</a></h4><p>好的，一切順利。是不是沒問題了？額，幾乎是。重新嘗試運行 <code>webserver3f.py</code> 但我們這次不會只發送一個請求，而是同步創建 128 個連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients 128</span></span></code></pre></div><p>現在再次運行 <code>ps</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ps auxw | grep -i python | grep -v grep</span></span></code></pre></div><p>看到了嗎？天啊，殭屍進程又出來了！</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc5_zombies_again.png" alt=""></p><p>這回怎麼回事？當你同時運行 128 個客户端，建立 128 個連接時，服務器的子進程幾乎會在同一時間處理好你的請求，然後退出。這會導致非常多的 <code>SIGCHLD</code> 信號被髮送到父進程。問題在於，這些信號不會存儲在隊列中，所以你的服務器進程會錯過很多信號，這也就導致了幾個殭屍進程處於無主狀態：</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc5_signals_not_queued.png" alt=""></p><p>這個問題的解決方案依然是設置 <code>SIGCHLD</code> 事件處理器。但我們這次將會用 <code>WNOHANG</code> 參數循環調用 <code>waitpid</code> 來替代 <code>wait</code>，以保證所有處於終止狀態的子進程都會被處理。下面是修改後的代碼，<code>webserver3g.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#######################################################</span></span>
<span class="line"><span># 併發服務器 - webserver3g.py                         #</span></span>
<span class="line"><span>#                                                     #</span></span>
<span class="line"><span># 使用 Python 2.7.9 或 3.4                            #</span></span>
<span class="line"><span># 在 Ubuntu 14.04 及 Mac OS X 環境下測試通過          #</span></span>
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
<span class="line"><span>                -1,          ### 等待所有子進程</span></span>
<span class="line"><span>                 os.WNOHANG  ### 無終止進程時，不阻塞進程，並拋出 EWOULDBLOCK 錯誤</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>        except OSError:</span></span>
<span class="line"><span>            return</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if pid == 0:  ### 沒有殭屍進程存在了</span></span>
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
<span class="line"><span>            ### 若 &#39;accept&#39; 被打斷，那麼重啓它</span></span>
<span class="line"><span>            if code == errno.EINTR:</span></span>
<span class="line"><span>                continue</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                raise</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        pid = os.fork()</span></span>
<span class="line"><span>        if pid == 0:  ### 子進程</span></span>
<span class="line"><span>            listen_socket.close()  ### 關閉子進程中多餘的描述符</span></span>
<span class="line"><span>            handle_request(client_connection)</span></span>
<span class="line"><span>            client_connection.close()</span></span>
<span class="line"><span>            os._exit(0)</span></span>
<span class="line"><span>        else:  ### 父進程</span></span>
<span class="line"><span>            client_connection.close()  ### 關閉父進程中多餘的描述符，繼續下一輪循環</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    serve_forever()</span></span></code></pre></div><p>運行服務器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python webserver3g.py</span></span></code></pre></div><p>使用測試客户端 <code>client3.py</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python client3.py --max-clients 128</span></span></code></pre></div><p>現在來查看一下，確保沒有殭屍進程存在。耶！沒有殭屍的生活真美好 <code>^_^</code>。</p><p><img src="https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_conc5_no_zombies.png" alt=""></p><h3 id="大功告成" tabindex="-1">大功告成 <a class="header-anchor" href="#大功告成" aria-label="Permalink to “大功告成”">​</a></h3><p>恭喜！你剛剛經歷了一段很長的旅程，我希望你能夠喜歡它。現在你擁有了自己的簡易併發服務器，並且這段代碼能夠為你在繼續研究生產級 Web 服務器的路上奠定基礎。</p>`,98)),a("p",null,[s[30]||(s[30]=n("我將會留一個作業：你需要將第二部分中的 WSGI 服務器升級，將它改造為一個併發服務器。你可以在",-1)),e(p,{href:"https://github.com/rspivak/lsbaws/blob/master/part3/webserver3h.py"},{default:l(()=>[...s[29]||(s[29]=[n("這裏",-1)])]),_:1}),s[31]||(s[31]=n("找到更改後的代碼。但是，當你實現了自己的版本之後，你才應該來看我的代碼。你已經擁有了實現這個服務器所需的所有信息。所以，快去實現它吧 ",-1)),s[32]||(s[32]=a("code",null,"^_^",-1)),s[33]||(s[33]=n("。",-1))]),s[67]||(s[67]=a("p",null,"然後要做什麼呢？喬希·比林斯説過：",-1)),s[68]||(s[68]=a("blockquote",null,[a("p",null,"“就像一枚郵票一樣——專注於一件事，不達目的不罷休。”")],-1)),s[69]||(s[69]=a("p",null,"開始學習基本知識。回顧你已經學過的知識。然後一步一步深入。",-1)),s[70]||(s[70]=a("p",null,[a("img",{src:"https://ruslanspivak.com/lsbaws-part3/lsbaws_part3_dig_deeper.png",alt:""})],-1)),s[71]||(s[71]=a("blockquote",null,[a("p",null,"“如果你只學會了方法，你將會被這些方法所困。但如果你學會了原理，那你就能發明出新的方法。”——拉爾夫·沃爾多·愛默生")],-1)),s[72]||(s[72]=a("p",null,"下面是一份書單，我從這些書中提煉出了這篇文章所需的素材。他們能助你在我剛剛所述的幾個方面中發掘出兼具深度和廣度的知識。我極力推薦你們去搞到這幾本書看看：從你的朋友那裏借，在當地的圖書館中閲讀，或者直接在亞馬遜上把它買回來。下面是我的典藏秘籍：",-1)),a("ol",null,[a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/1692"},{default:l(()=>[...s[34]||(s[34]=[n("《UNIX 網絡編程 卷1：套接字聯網 API （第3版）》",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/1625"},{default:l(()=>[...s[35]||(s[35]=[n("《UNIX 環境高級編程（第3版）》",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/1432"},{default:l(()=>[...s[36]||(s[36]=[n("《Linux/UNIX 系統編程手冊》",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.epubit.com.cn/book/details/4232"},{default:l(()=>[...s[37]||(s[37]=[n("《TCP/IP 詳解 卷1：協議（第2版）",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.amazon.com/gp/product/1441418687/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1441418687&linkCode=as2&tag=russblo0b-20&linkId=QFOAWARN62OWTWUG"},{default:l(()=>[...s[38]||(s[38]=[n("《信號系統簡明手冊 (第二版): 併發控制深入淺出及常見錯誤》",-1)])]),_:1}),s[40]||(s[40]=n("，這本書也可以從",-1)),e(p,{href:"http://greenteapress.com/semaphores/"},{default:l(()=>[...s[39]||(s[39]=[n("作者的個人網站",-1)])]),_:1}),s[41]||(s[41]=n("中免費下載到。",-1))])]),a("p",null,[s[43]||(s[43]=n("順便，我在撰寫一本名為《搭個 Web 服務器：從頭開始》的書。這本書講解了如何從頭開始編寫一個基本的 Web 服務器，裏面包含本文中沒有的更多細節。訂閲",-1)),e(p,{href:"https://ruslanspivak.com/lsbaws-part1/"},{default:l(()=>[...s[42]||(s[42]=[n("原文下方的郵件列表",-1)])]),_:1}),s[44]||(s[44]=n("，你就可以獲取到這本書的最新進展，以及發佈日期。",-1))]),s[73]||(s[73]=a("hr",null,null,-1)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),e(p,{href:"https://ruslanspivak.com/lsbaws-part3/"},{default:l(()=>[...s[45]||(s[45]=[n("https://ruslanspivak.com/lsbaws-part3/",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),e(p,{href:"https://github.com/rspivak/"},{default:l(()=>[...s[47]||(s[47]=[n("Ruslan",-1)])]),_:1}),s[51]||(s[51]=n(" 譯者：",-1)),e(p,{href:"https://github.com/StdioA"},{default:l(()=>[...s[48]||(s[48]=[n("StdioA",-1)])]),_:1}),s[52]||(s[52]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[53]||(s[53]=[n("LCTT",-1)])]),_:1}),s[56]||(s[56]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[54]||(s[54]=[n("Linux中國",-1)])]),_:1}),s[57]||(s[57]=n(" 榮譽推出",-1))])])}const S=t(d,[["render",h]]);export{v as __pageData,S as default};
