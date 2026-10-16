import{_ as t,a0 as r,w as o,s as d,I as a,x as s,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const m=JSON.parse('{"title":"併發服務器（二）：線程 | LCTT x X-CMD","titleTemplate":false,"description":"併發服務器（二）：線程 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"併發服務器（二）：線程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"併發服務器（二）：線程 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20171004 Concurrent Servers Part 2 - Threads","title":"併發服務器（二）：線程","tag":"201710","desc":""},"relativePath":"201710/20171004 Concurrent Servers Part 2 - Threads.md","filePath":"[post].md"}'),c={name:"201710/20171004 Concurrent Servers Part 2 - Threads.md"};function b(g,n,u,f,k,h){const e=r("Link");return o(),d("div",null,[n[47]||(n[47]=a("h1",{id:"併發服務器-二-線程",tabindex:"-1"},[s("併發服務器（二）：線程 "),a("a",{class:"header-anchor",href:"#併發服務器-二-線程","aria-label":"Permalink to “併發服務器（二）：線程”"},"​")],-1)),a("p",null,[n[1]||(n[1]=s("這是併發網絡服務器系列的第二節。",-1)),p(e,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...n[0]||(n[0]=[s("第一節",-1)])]),_:1}),n[2]||(n[2]=s(" 提出了服務端實現的協議，還有簡單的順序服務器的代碼，是這整個系列的基礎。",-1))]),n[48]||(n[48]=a("p",null,"這一節裏，我們來看看怎麼用多線程來實現併發，用 C 實現一個最簡單的多線程服務器，和用 Python 實現的線程池。",-1)),n[49]||(n[49]=a("p",null,"該系列的所有文章：",-1)),a("ul",null,[a("li",null,[p(e,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...n[3]||(n[3]=[s("第一節 - 簡介",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-2-threads/"},{default:l(()=>[...n[4]||(n[4]=[s("第二節 - 線程",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...n[5]||(n[5]=[s("第三節 - 事件驅動",-1)])]),_:1})])]),n[50]||(n[50]=i('<h3 id="多線程的方法設計併發服務器" tabindex="-1">多線程的方法設計併發服務器 <a class="header-anchor" href="#多線程的方法設計併發服務器" aria-label="Permalink to “多線程的方法設計併發服務器”">​</a></h3><p>説起第一節裏的順序服務器的性能，最顯而易見的，是在服務器處理客户端連接時，計算機的很多資源都被浪費掉了。儘管假定客户端快速發送完消息，不做任何等待，仍然需要考慮網絡通信的開銷；網絡要比現在的 CPU 慢上百萬倍還不止，因此 CPU 運行服務器時會等待接收套接字的流量，而大量的時間都花在完全不必要的等待中。</p><p>這裏是一份示意圖，表明順序時客户端的運行過程：</p><p><img src="https://eli.thegreenplace.net/images/2017/sequential-flow.png" alt="順序客户端處理流程"></p><p>這個圖片上有 3 個客户端程序。稜形表示客户端的“到達時間”（即客户端嘗試連接服務器的時間）。黑色線條表示“等待時間”（客户端等待服務器真正接受連接所用的時間），有色矩形表示“處理時間”（服務器和客户端使用協議進行交互所用的時間）。有色矩形的末端表示客户端斷開連接。</p><p>上圖中，綠色和橘色的客户端儘管緊跟在藍色客户端之後到達服務器，也要等到服務器處理完藍色客户端的請求。這時綠色客户端得到響應，橘色的還要等待一段時間。</p><p>多線程服務器會開啓多個控制線程，讓操作系統管理 CPU 的併發（使用多個 CPU 核心）。當客户端連接的時候，創建一個線程與之交互，而在主線程中，服務器能夠接受其他的客户端連接。下圖是該模式的時間軸：</p><p><img src="https://eli.thegreenplace.net/images/2017/concurrent-flow.png" alt="並行客户端處理流程"></p><h3 id="每個客户端一個線程-在-c-語言裏要用-pthread" tabindex="-1">每個客户端一個線程，在 C 語言裏要用 pthread <a class="header-anchor" href="#每個客户端一個線程-在-c-語言裏要用-pthread" aria-label="Permalink to “每個客户端一個線程，在 C 語言裏要用 pthread”">​</a></h3>',9)),a("p",null,[n[8]||(n[8]=s("這篇文章的 ",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/threaded-server.c"},{default:l(()=>[...n[6]||(n[6]=[s("第一個示例代碼",-1)])]),_:1}),n[9]||(n[9]=s(" 是一個簡單的 “每個客户端一個線程” 的服務器，用 C 語言編寫，使用了 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2010/04/05/pthreads-as-a-case-study-of-good-api-design"},{default:l(()=>[...n[7]||(n[7]=[s("phtreads API",-1)])]),_:1}),n[10]||(n[10]=s(" 用於實現多線程。這裏是主循環代碼：",-1))]),n[51]||(n[51]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while (1) {</span></span>
<span class="line"><span>  struct sockaddr_in peer_addr;</span></span>
<span class="line"><span>  socklen_t peer_addr_len = sizeof(peer_addr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int newsockfd =</span></span>
<span class="line"><span>      accept(sockfd, (struct sockaddr*)&amp;peer_addr, &amp;peer_addr_len);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (newsockfd &lt; 0) {</span></span>
<span class="line"><span>    perror_die(&quot;ERROR on accept&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  report_peer_connected(&amp;peer_addr, peer_addr_len);</span></span>
<span class="line"><span>  pthread_t the_thread;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  thread_config_t* config = (thread_config_t*)malloc(sizeof(*config));</span></span>
<span class="line"><span>  if (!config) {</span></span>
<span class="line"><span>    die(&quot;OOM&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  config-&gt;sockfd = newsockfd;</span></span>
<span class="line"><span>  pthread_create(&amp;the_thread, NULL, server_thread, config);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 回收線程 —— 在線程結束的時候，它佔用的資源會被回收</span></span>
<span class="line"><span>  // 因為主線程在一直運行，所以它比服務線程存活更久。</span></span>
<span class="line"><span>  pthread_detach(the_thread);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這是 <code>server_thread</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void* server_thread(void* arg) {</span></span>
<span class="line"><span>  thread_config_t* config = (thread_config_t*)arg;</span></span>
<span class="line"><span>  int sockfd = config-&gt;sockfd;</span></span>
<span class="line"><span>  free(config);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // This cast will work for Linux, but in general casting pthread_id to an 這個類型轉換在 Linux 中可以正常運行，但是一般來説將 pthread_id 類型轉換成整形不便於移植代碼</span></span>
<span class="line"><span>  // integral type isn&#39;t portable.</span></span>
<span class="line"><span>  unsigned long id = (unsigned long)pthread_self();</span></span>
<span class="line"><span>  printf(&quot;Thread %lu created to handle connection with socket %d\\n&quot;, id,</span></span>
<span class="line"><span>         sockfd);</span></span>
<span class="line"><span>  serve_connection(sockfd);</span></span>
<span class="line"><span>  printf(&quot;Thread %lu done\\n&quot;, id);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>線程 “configuration” 是作為 <code>thread_config_t</code> 結構體進行傳遞的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct { int sockfd; } thread_config_t;</span></span></code></pre></div><p>主循環中調用的 <code>pthread_create</code> 產生一個新線程，然後運行 <code>server_thread</code> 函數。這個線程會在 <code>server_thread</code> 返回的時候結束。而在 <code>serve_connection</code> 返回的時候 <code>server_thread</code> 才會返回。<code>serve_connection</code> 和第一節完全一樣。</p><p>第一節中我們用腳本生成了多個併發訪問的客户端，觀察服務器是怎麼處理的。現在來看看多線程服務器的處理結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 simple-client.py  -n 3 localhost 9090</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,632:conn1 connected...</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,632:conn2 connected...</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,632:conn0 connected...</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,632:conn1 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,632:conn2 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,632:conn0 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,633:conn1 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,633:conn2 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,633:conn0 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,670:conn1 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,671:conn0 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:56,671:conn2 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:57,634:conn1 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:57,634:conn2 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:57,634:conn1 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:57,634:conn0 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:57,634:conn2 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:57,634:conn0 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,635:conn1 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,635:conn2 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,636:conn1 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,636:conn2 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,637:conn0 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,637:conn0 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,836:conn2 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,836:conn1 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-20 06:31:58,837:conn0 disconnecting</span></span></code></pre></div><p>實際上，所有客户端同時連接，它們與服務器的通信是同時發生的。</p><h3 id="每個客户端一個線程的難點" tabindex="-1">每個客户端一個線程的難點 <a class="header-anchor" href="#每個客户端一個線程的難點" aria-label="Permalink to “每個客户端一個線程的難點”">​</a></h3><p>儘管在現代操作系統中就資源利用率方面來看，線程相當的高效，但前一節中講到的方法在高負載時卻會出現紕漏。</p>`,11)),a("p",null,[n[12]||(n[12]=s("想像一下這樣的情景：很多客户端同時進行連接，某些會話持續的時間長。這意味着某個時刻服務器上有很多活躍的線程。太多的線程會消耗掉大量的內存和 CPU 資源，而僅僅是用於上下文切換^注1 。另外其也可視為安全問題：因為這樣的設計容易讓服務器成為 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Denial-of-service_attack"},{default:l(()=>[...n[11]||(n[11]=[s("DoS 攻擊",-1)])]),_:1}),n[13]||(n[13]=s(" 的目標 —— 上百萬個客户端同時連接，並且客户端都處於閒置狀態，這樣耗盡了所有資源就可能讓服務器宕機。",-1))]),n[52]||(n[52]=a("p",null,"當服務器要與每個客户端通信，CPU 進行大量計算時，就會出現更嚴重的問題。這種情況下，容易想到的方法是減少服務器的響應能力 —— 只有其中一些客户端能得到服務器的響應。",-1)),n[53]||(n[53]=a("p",null,[s("因此，對多線程服務器所能夠處理的併發客户端數做一些 "),a("em",null,"速率限制"),s(" 就是個明智的選擇。有很多方法可以實現。最容易想到的是計數當前已經連接上的客户端，把連接數限制在某個範圍內（需要通過仔細的測試後決定）。另一種流行的多線程應用設計是使用 "),a("em",null,"線程池"),s("。")],-1)),n[54]||(n[54]=a("h3",{id:"線程池",tabindex:"-1"},[s("線程池 "),a("a",{class:"header-anchor",href:"#線程池","aria-label":"Permalink to “線程池”"},"​")],-1)),a("p",null,[p(e,{href:"https://en.wikipedia.org/wiki/Thread_pool"},{default:l(()=>[...n[14]||(n[14]=[s("線程池",-1)])]),_:1}),n[15]||(n[15]=s(" 很簡單，也很有用。服務器創建幾個任務線程，這些線程從某些隊列中獲取任務。這就是“池”。然後每一個客户端的連接被當成任務分發到池中。只要池中有空閒的線程，它就會去處理任務。如果當前池中所有線程都是繁忙狀態，那麼服務器就會阻塞，直到線程池可以接受任務（某個繁忙狀態的線程處理完當前任務後，變回空閒的狀態）。",-1))]),n[55]||(n[55]=a("p",null,"這裏有個 4 線程的線程池處理任務的圖。任務（這裏就是客户端的連接）要等到線程池中的某個線程可以接受新任務。",-1)),n[56]||(n[56]=a("p",null,[a("img",{src:"https://raw.githubusercontent.com/LCTT/wiki-images/master/TranslateProject/ref_img/006.png",alt:""})],-1)),n[57]||(n[57]=a("p",null,"非常明顯，線程池的定義就是一種按比例限制的機制。我們可以提前設定服務器所能擁有的線程數。那麼這就是併發連接的最多的客户端數 —— 其它的客户端就要等到線程空閒。如果我們的池中有 8 個線程，那麼 8 就是服務器可以處理的最多的客户端併發連接數，哪怕上千個客户端想要同時連接。",-1)),n[58]||(n[58]=a("p",null,"那麼怎麼確定池中需要有多少個線程呢？通過對問題範疇進行細緻的分析、評估、實驗以及根據我們擁有的硬件配置。如果是單核的雲服務器，答案只有一個；如果是 100 核心的多套接字的服務器，那麼答案就有很多種。也可以在運行時根據負載動態選擇池的大小 —— 我會在這個系列之後的文章中談到這個東西。",-1)),n[59]||(n[59]=a("p",null,[s("使用線程池的服務器在高負載情況下表現出 "),a("em",null,"性能退化"),s(" —— 客户端能夠以穩定的速率進行連接，可能會比其它時刻得到響應的用時稍微久一點；也就是説，無論多少個客户端同時進行連接，服務器總能保持響應，盡最大能力響應等待的客户端。與之相反，每個客户端一個線程的服務器，會接收多個客户端的連接直到過載，這時它更容易崩潰或者因為要處理_所有_客户端而變得緩慢，因為資源都被耗盡了（比如虛擬內存的佔用）。")],-1)),n[60]||(n[60]=a("h3",{id:"在服務器上使用線程池",tabindex:"-1"},[s("在服務器上使用線程池 "),a("a",{class:"header-anchor",href:"#在服務器上使用線程池","aria-label":"Permalink to “在服務器上使用線程池”"},"​")],-1)),a("p",null,[n[17]||(n[17]=s("為了",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/threadpool-server.py"},{default:l(()=>[...n[16]||(n[16]=[s("改變服務器的實現",-1)])]),_:1}),n[18]||(n[18]=s("，我用了 Python，在 Python 的標準庫中帶有一個已經實現好的穩定的線程池。（",-1)),n[19]||(n[19]=a("code",null,"concurrent.futures",-1)),n[20]||(n[20]=s(" 模組裏的 ",-1)),n[21]||(n[21]=a("code",null,"ThreadPoolExecutor",-1)),n[22]||(n[22]=s("） ^注2 。",-1))]),n[61]||(n[61]=i(`<p>服務器創建一個線程池，然後進入循環，監聽套接字接收客户端的連接。用 <code>submit</code> 把每一個連接的客户端分配到池中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pool = ThreadPoolExecutor(args.n)</span></span>
<span class="line"><span>sockobj = socket.socket(socket.AF_INET, socket.SOCK_STREAM)</span></span>
<span class="line"><span>sockobj.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)</span></span>
<span class="line"><span>sockobj.bind((&#39;localhost&#39;, args.port))</span></span>
<span class="line"><span>sockobj.listen(15)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>try:</span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        client_socket, client_address = sockobj.accept()</span></span>
<span class="line"><span>        pool.submit(serve_connection, client_socket, client_address)</span></span>
<span class="line"><span>except KeyboardInterrupt as e:</span></span>
<span class="line"><span>    print(e)</span></span>
<span class="line"><span>    sockobj.close()</span></span></code></pre></div><p><code>serve_connection</code> 函數和 C 的那部分很像，與一個客户端交互，直到其斷開連接，並且遵循我們的協議：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ProcessingState = Enum(&#39;ProcessingState&#39;, &#39;WAIT_FOR_MSG IN_MSG&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def serve_connection(sockobj, client_address):</span></span>
<span class="line"><span>    print(&#39;{0} connected&#39;.format(client_address))</span></span>
<span class="line"><span>    sockobj.sendall(b&#39;*&#39;)</span></span>
<span class="line"><span>    state = ProcessingState.WAIT_FOR_MSG</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while True:</span></span>
<span class="line"><span>        try:</span></span>
<span class="line"><span>            buf = sockobj.recv(1024)</span></span>
<span class="line"><span>            if not buf:</span></span>
<span class="line"><span>                break</span></span>
<span class="line"><span>        except IOError as e:</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>        for b in buf:</span></span>
<span class="line"><span>            if state == ProcessingState.WAIT_FOR_MSG:</span></span>
<span class="line"><span>                if b == ord(b&#39;^&#39;):</span></span>
<span class="line"><span>                    state = ProcessingState.IN_MSG</span></span>
<span class="line"><span>            elif state == ProcessingState.IN_MSG:</span></span>
<span class="line"><span>                if b == ord(b&#39;$&#39;):</span></span>
<span class="line"><span>                    state = ProcessingState.WAIT_FOR_MSG</span></span>
<span class="line"><span>                else:</span></span>
<span class="line"><span>                    sockobj.send(bytes([b + 1]))</span></span>
<span class="line"><span>            else:</span></span>
<span class="line"><span>                assert False</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print(&#39;{0} done&#39;.format(client_address))</span></span>
<span class="line"><span>    sys.stdout.flush()</span></span>
<span class="line"><span>    sockobj.close()</span></span></code></pre></div><p>來看看線程池的大小對並行訪問的客户端的阻塞行為有什麼樣的影響。為了演示，我會運行一個池大小為 2 的線程池服務器（只生成兩個線程用於響應客户端）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 threadpool-server.py -n 2</span></span></code></pre></div><p>在另外一個終端裏，運行客户端模擬器，產生 3 個併發訪問的客户端：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 simple-client.py  -n 3 localhost 9090</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,815:conn1 connected...</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,827:conn0 connected...</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,828:conn1 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,828:conn0 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,828:conn1 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,828:conn0 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,867:conn1 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:52,867:conn0 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:53,829:conn1 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:53,829:conn0 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:53,830:conn1 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:53,831:conn0 received b&#39;2&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:53,831:conn0 received b&#39;34&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:54,831:conn1 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:54,832:conn1 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:54,832:conn0 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:54,833:conn0 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:55,032:conn1 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:55,032:conn2 connected...</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:55,033:conn2 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:55,033:conn0 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:55,034:conn2 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:55,071:conn2 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:56,036:conn2 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:56,036:conn2 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:57,037:conn2 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:57,038:conn2 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-22 05:58:57,238:conn2 disconnecting</span></span></code></pre></div><p>回顧之前討論的服務器行為：</p><ol><li>在順序服務器中，所有的連接都是串行的。一個連接結束後，下一個連接才能開始。</li><li>前面講到的每個客户端一個線程的服務器中，所有連接都被同時接受並得到服務。</li></ol>`,10)),a("p",null,[n[24]||(n[24]=s("這裏可以看到一種可能的情況：兩個連接同時得到服務，只有其中一個結束連接後第三個才能連接上。這就是把線程池大小設置成 2 的結果。真實用例中我們會把線程池設置的更大些，取決於機器和實際的協議。線程池的緩衝機制就能很好理解了 —— 我 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2017/clojure-concurrency-and-blocking-with-coreasync/"},{default:l(()=>[...n[23]||(n[23]=[s("幾個月前",-1)])]),_:1}),n[25]||(n[25]=s(" 更詳細的介紹過這種機制，關於 Clojure 的 ",-1)),n[26]||(n[26]=a("code",null,"core.async",-1)),n[27]||(n[27]=s(" 模組。",-1))]),n[62]||(n[62]=a("h3",{id:"總結與展望",tabindex:"-1"},[s("總結與展望 "),a("a",{class:"header-anchor",href:"#總結與展望","aria-label":"Permalink to “總結與展望”"},"​")],-1)),n[63]||(n[63]=a("p",null,"這篇文章討論了在服務器中，用多線程作併發的方法。每個客户端一個線程的方法最早提出來，但是實際上卻不常用，因為它並不安全。",-1)),n[64]||(n[64]=a("p",null,"線程池就常見多了，最受歡迎的幾個編程語言有良好的實現（某些編程語言，像 Python，就是在標準庫中實現）。這裏説的使用線程池的服務器，不會受到每個客户端一個線程的弊端。",-1)),n[65]||(n[65]=a("p",null,"然而，線程不是處理多個客户端並行訪問的唯一方法。下一節中我們會看看其它的解決方案，可以使用_異步處理_，或者_事件驅動_的編程。",-1)),n[66]||(n[66]=a("hr",null,null,-1)),a("ul",null,[a("li",null,[n[29]||(n[29]=s("注1：老實説，現代 Linux 內核可以承受足夠多的併發線程 —— 只要這些線程主要在 I/O 上被阻塞。",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/threadspammer.c"},{default:l(()=>[...n[28]||(n[28]=[s("這裏有個示例程序",-1)])]),_:1}),n[30]||(n[30]=s("，它產生可配置數量的線程，線程在循環體中是休眠的，每 50 ms 喚醒一次。我在 4 核的 Linux 機器上可以輕鬆的產生 10000 個線程；哪怕這些線程大多數時間都在睡眠，它們仍然消耗一到兩個核心，以便實現上下文切換。而且，它們佔用了 80 GB 的虛擬內存（Linux 上每個線程的棧大小默認是 8MB）。實際使用中，線程會使用內存並且不會在循環體中休眠，因此它可以非常快的佔用完一個機器的內存。",-1))]),a("li",null,[n[32]||(n[32]=s("注2：自己動手實現一個線程池是個有意思的練習，但我現在還不想做。我曾寫過用來練手的 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2011/12/27/python-threads-communication-and-stopping"},{default:l(()=>[...n[31]||(n[31]=[s("針對特殊任務的線程池",-1)])]),_:1}),n[33]||(n[33]=s("。是用 Python 寫的；用 C 重寫的話有些難度，但對於經驗豐富的程序員，幾個小時就夠了。",-1))])]),n[67]||(n[67]=a("hr",null,null,-1)),a("p",null,[n[35]||(n[35]=s("via: ",-1)),p(e,{href:"https://eli.thegreenplace.net/2017/concurrent-servers-part-2-threads/"},{default:l(()=>[...n[34]||(n[34]=[s("https://eli.thegreenplace.net/2017/concurrent-servers-part-2-threads/",-1)])]),_:1})]),a("p",null,[n[39]||(n[39]=s("作者：",-1)),p(e,{href:"https://eli.thegreenplace.net/pages/about"},{default:l(()=>[...n[36]||(n[36]=[s("Eli Bendersky",-1)])]),_:1}),n[40]||(n[40]=s(" 譯者：",-1)),p(e,{href:"https://github.com/GitFuture"},{default:l(()=>[...n[37]||(n[37]=[s("GitFuture",-1)])]),_:1}),n[41]||(n[41]=s(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...n[38]||(n[38]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[44]||(n[44]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[42]||(n[42]=[s("LCTT",-1)])]),_:1}),n[45]||(n[45]=s(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...n[43]||(n[43]=[s("Linux中國",-1)])]),_:1}),n[46]||(n[46]=s(" 榮譽推出",-1))])])}const O=t(c,[["render",b]]);export{m as __pageData,O as default};
