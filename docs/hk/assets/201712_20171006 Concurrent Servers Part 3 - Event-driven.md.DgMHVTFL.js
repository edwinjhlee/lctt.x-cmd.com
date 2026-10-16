import{_ as t,a0 as d,w as c,s as o,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"併發服務器（三）：事件驅動 | LCTT x X-CMD","titleTemplate":false,"description":"併發服務器（三）：事件驅動 | LCTT (201712) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"併發服務器（三）：事件驅動 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"併發服務器（三）：事件驅動 | LCTT (201712) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201712/20171006 Concurrent Servers Part 3 - Event-driven","title":"併發服務器（三）：事件驅動","tag":"201712","desc":""},"relativePath":"201712/20171006 Concurrent Servers Part 3 - Event-driven.md","filePath":"[post].md"}'),r={name:"201712/20171006 Concurrent Servers Part 3 - Event-driven.md"};function u(f,s,g,b,k,v){const p=d("Link");return c(),o("div",null,[s[75]||(s[75]=a("h1",{id:"併發服務器-三-事件驅動",tabindex:"-1"},[n("併發服務器（三）：事件驅動 "),a("a",{class:"header-anchor",href:"#併發服務器-三-事件驅動","aria-label":"Permalink to “併發服務器（三）：事件驅動”"},"​")],-1)),a("p",null,[s[2]||(s[2]=n("這是併發服務器系列的第三節。",-1)),e(p,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一節",-1)])]),_:1}),s[3]||(s[3]=n(" 介紹了阻塞式編程，",-1)),e(p,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[1]||(s[1]=[n("第二節：線程",-1)])]),_:1}),s[4]||(s[4]=n(" 探討了多線程，將其作為一種可行的方法來實現服務器併發編程。",-1))]),s[76]||(s[76]=a("p",null,[n("另一種常見的實現併發的方法叫做 "),a("em",null,"事件驅動編程"),n("，也可以叫做 "),a("em",null,"異步"),n(" 編程 ^注1 。這種方法變化萬千，因此我們會從最基本的開始，使用一些基本的 API 而非從封裝好的高級方法開始。本系列以後的文章會講高層次抽象，還有各種混合的方法。")],-1)),s[77]||(s[77]=a("p",null,"本系列的所有文章：",-1)),a("ul",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("第一節 - 簡介",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("第二節 - 線程",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...s[7]||(s[7]=[n("第三節 - 事件驅動",-1)])]),_:1})])]),s[78]||(s[78]=i(`<h3 id="阻塞式-vs-非阻塞式-i-o" tabindex="-1">阻塞式 vs. 非阻塞式 I/O <a class="header-anchor" href="#阻塞式-vs-非阻塞式-i-o" aria-label="Permalink to “阻塞式 vs. 非阻塞式 I/O”">​</a></h3><p>作為本篇的介紹，我們先講講阻塞和非阻塞 I/O 的區別。阻塞式 I/O 更好理解，因為這是我們使用 I/O 相關 API 時的“標準”方式。從套接字接收數據的時候，調用 <code>recv</code> 函數會發生 <em>阻塞</em>，直到它從端口上接收到了來自另一端套接字的數據。這恰恰是第一部分講到的順序服務器的問題。</p><p>因此阻塞式 I/O 存在着固有的性能問題。第二節裏我們講過一種解決方法，就是用多線程。哪怕一個線程的 I/O 阻塞了，別的線程仍然可以使用 CPU 資源。實際上，阻塞 I/O 通常在利用資源方面非常高效，因為線程就等待着 —— 操作系統將線程變成休眠狀態，只有滿足了線程需要的條件才會被喚醒。</p><p><em>非阻塞式</em> I/O 是另一種思路。把套接字設成非阻塞模式時，調用 <code>recv</code> 時（還有 <code>send</code>，但是我們現在只考慮接收），函數返回的會很快，哪怕沒有接收到數據。這時，就會返回一個特殊的錯誤狀態 ^注2 來通知調用者，此時沒有數據傳進來。調用者可以去做其他的事情，或者嘗試再次調用 <code>recv</code> 函數。</p><p>示範阻塞式和非阻塞式的 <code>recv</code> 區別的最好方式就是貼一段示例代碼。這裏有個監聽套接字的小程序，一直在 <code>recv</code> 這裏阻塞着；當 <code>recv</code> 返回了數據，程序就報告接收到了多少個字節 ^注3 ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, const char** argv) {</span></span>
<span class="line"><span>  setvbuf(stdout, NULL, _IONBF, 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int portnum = 9988;</span></span>
<span class="line"><span>  if (argc &gt;= 2) {</span></span>
<span class="line"><span>    portnum = atoi(argv[1]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  printf(&quot;Listening on port %d\\n&quot;, portnum);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int sockfd = listen_inet_socket(portnum);</span></span>
<span class="line"><span>  struct sockaddr_in peer_addr;</span></span>
<span class="line"><span>  socklen_t peer_addr_len = sizeof(peer_addr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int newsockfd = accept(sockfd, (struct sockaddr*)&amp;peer_addr, &amp;peer_addr_len);</span></span>
<span class="line"><span>  if (newsockfd &lt; 0) {</span></span>
<span class="line"><span>    perror_die(&quot;ERROR on accept&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  report_peer_connected(&amp;peer_addr, peer_addr_len);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while (1) {</span></span>
<span class="line"><span>    uint8_t buf[1024];</span></span>
<span class="line"><span>    printf(&quot;Calling recv...\\n&quot;);</span></span>
<span class="line"><span>    int len = recv(newsockfd, buf, sizeof buf, 0);</span></span>
<span class="line"><span>    if (len &lt; 0) {</span></span>
<span class="line"><span>      perror_die(&quot;recv&quot;);</span></span>
<span class="line"><span>    } else if (len == 0) {</span></span>
<span class="line"><span>      printf(&quot;Peer disconnected; I&#39;m done.\\n&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;recv returned %d bytes\\n&quot;, len);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  close(newsockfd);</span></span>
<span class="line"><span>  close(sockfd);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>主循環重複調用 <code>recv</code> 並且報告它返回的字節數（記住 <code>recv</code> 返回 0 時，就是客户端斷開連接了）。試着運行它，我們會在一個終端裏運行這個程序，然後在另一個終端裏用 <code>nc</code> 進行連接，發送一些字符，每次發送之間間隔幾秒鐘：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nc localhost 9988</span></span>
<span class="line"><span>hello                                   # wait for 2 seconds after typing this</span></span>
<span class="line"><span>socket world</span></span>
<span class="line"><span>^D                                      # to end the connection&gt;</span></span></code></pre></div><p>監聽程序會輸出以下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./blocking-listener 9988</span></span>
<span class="line"><span>Listening on port 9988</span></span>
<span class="line"><span>peer (localhost, 37284) connected</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>recv returned 6 bytes</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>recv returned 13 bytes</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Peer disconnected; I&#39;m done.</span></span></code></pre></div><p>現在試試非阻塞的監聽程序的版本。這是代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, const char** argv) {</span></span>
<span class="line"><span>  setvbuf(stdout, NULL, _IONBF, 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int portnum = 9988;</span></span>
<span class="line"><span>  if (argc &gt;= 2) {</span></span>
<span class="line"><span>    portnum = atoi(argv[1]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  printf(&quot;Listening on port %d\\n&quot;, portnum);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int sockfd = listen_inet_socket(portnum);</span></span>
<span class="line"><span>  struct sockaddr_in peer_addr;</span></span>
<span class="line"><span>  socklen_t peer_addr_len = sizeof(peer_addr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int newsockfd = accept(sockfd, (struct sockaddr*)&amp;peer_addr, &amp;peer_addr_len);</span></span>
<span class="line"><span>  if (newsockfd &lt; 0) {</span></span>
<span class="line"><span>    perror_die(&quot;ERROR on accept&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  report_peer_connected(&amp;peer_addr, peer_addr_len);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 把套接字設成非阻塞模式</span></span>
<span class="line"><span>  int flags = fcntl(newsockfd, F_GETFL, 0);</span></span>
<span class="line"><span>  if (flags == -1) {</span></span>
<span class="line"><span>    perror_die(&quot;fcntl F_GETFL&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (fcntl(newsockfd, F_SETFL, flags | O_NONBLOCK) == -1) {</span></span>
<span class="line"><span>    perror_die(&quot;fcntl F_SETFL O_NONBLOCK&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while (1) {</span></span>
<span class="line"><span>    uint8_t buf[1024];</span></span>
<span class="line"><span>    printf(&quot;Calling recv...\\n&quot;);</span></span>
<span class="line"><span>    int len = recv(newsockfd, buf, sizeof buf, 0);</span></span>
<span class="line"><span>    if (len &lt; 0) {</span></span>
<span class="line"><span>      if (errno == EAGAIN || errno == EWOULDBLOCK) {</span></span>
<span class="line"><span>        usleep(200 * 1000);</span></span>
<span class="line"><span>        continue;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      perror_die(&quot;recv&quot;);</span></span>
<span class="line"><span>    } else if (len == 0) {</span></span>
<span class="line"><span>      printf(&quot;Peer disconnected; I&#39;m done.\\n&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;recv returned %d bytes\\n&quot;, len);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  close(newsockfd);</span></span>
<span class="line"><span>  close(sockfd);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏與阻塞版本有些差異，值得注意：</p><ol><li><code>accept</code> 函數返回的 <code>newsocktfd</code> 套接字因調用了 <code>fcntl</code>， 被設置成非阻塞的模式。</li><li>檢查 <code>recv</code> 的返回狀態時，我們對 <code>errno</code> 進行了檢查，判斷它是否被設置成表示沒有可供接收的數據的狀態。這時，我們僅僅是休眠了 200 毫秒然後進入到下一輪循環。</li></ol><p>同樣用 <code>nc</code> 進行測試，以下是非阻塞監聽器的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./nonblocking-listener 9988</span></span>
<span class="line"><span>Listening on port 9988</span></span>
<span class="line"><span>peer (localhost, 37288) connected</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>recv returned 6 bytes</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>recv returned 13 bytes</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Peer disconnected; I&#39;m done.</span></span></code></pre></div><p>作為練習，給輸出添加一個時間戳，確認調用 <code>recv</code> 得到結果之間花費的時間是比輸入到 <code>nc</code> 中所用的多還是少（每一輪是 200 ms）。</p><p>這裏就實現了使用非阻塞的 <code>recv</code> 讓監聽者檢查套接字變為可能，並且在沒有數據的時候重新獲得控制權。換句話説，用編程的語言説這就是 <ruby>輪詢<rt>polling</rt></ruby> —— 主程序週期性的查詢套接字以便讀取數據。</p><p>對於順序響應的問題，這似乎是個可行的方法。非阻塞的 <code>recv</code> 讓同時與多個套接字通信變成可能，輪詢這些套接字，僅當有新數據到來時才處理。就是這樣，這種方式 <em>可以</em> 用來寫併發服務器；但實際上一般不這麼做，因為輪詢的方式很難擴展。</p><p>首先，我在代碼中引入的 200ms 延遲對於演示非常好（監聽器在我輸入 <code>nc</code> 之間只打印幾行 “Calling recv...”，但實際上應該有上千行）。但它也增加了多達 200ms 的服務器響應時間，這無意是不必要的。實際的程序中，延遲會低得多，休眠時間越短，進程佔用的 CPU 資源就越多。有些時鐘週期只是浪費在等待，這並不好，尤其是在移動設備上，這些設備的電量往往有限。</p><p>但是當我們實際這樣來使用多個套接字的時候，更嚴重的問題出現了。想像下監聽器正在同時處理 1000 個客户端。這意味着每一個循環迭代裏面，它都得為 <em>這 1000 個套接字中的每一個</em> 執行一遍非阻塞的 <code>recv</code>，找到其中準備好了數據的那一個。這非常低效，並且極大的限制了服務器能夠併發處理的客户端數。這裏有個準則：每次輪詢之間等待的間隔越久，服務器響應性越差；而等待的時間越少，CPU 在無用的輪詢上耗費的資源越多。</p><p>講真，所有的輪詢都像是無用功。當然操作系統應該是知道哪個套接字是準備好了數據的，因此沒必要逐個掃描。事實上，就是這樣，接下來就會講一些 API，讓我們可以更優雅地處理多個客户端。</p><h3 id="select" tabindex="-1">select <a class="header-anchor" href="#select" aria-label="Permalink to “select”">​</a></h3><p><code>select</code> 的系統調用是可移植的（POSIX），是標準 Unix API 中常有的部分。它是為上一節最後一部分描述的問題而設計的 —— 允許一個線程可以監視許多文件描述符 ^注4 的變化，而不用在輪詢中執行不必要的代碼。我並不打算在這裏引入一個關於 <code>select</code> 的全面教程，有很多網站和書籍講這個，但是在涉及到問題的相關內容時，我會介紹一下它的 API，然後再展示一個非常複雜的例子。</p><p><code>select</code> 允許 <em>多路 I/O</em>，監視多個文件描述符，查看其中任何一個的 I/O 是否可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int select(int nfds, fd_set *readfds, fd_set *writefds,</span></span>
<span class="line"><span>           fd_set *exceptfds, struct timeval *timeout);</span></span></code></pre></div><p><code>readfds</code> 指向文件描述符的緩衝區，這個緩衝區被監視是否有讀取事件；<code>fd_set</code> 是一個特殊的數據結構，用户使用 <code>FD_*</code> 宏進行操作。<code>writefds</code> 是針對寫事件的。<code>nfds</code> 是監視的緩衝中最大的文件描述符數字（文件描述符就是整數）。<code>timeout</code> 可以讓用户指定 <code>select</code> 應該阻塞多久，直到某個文件描述符準備好了（<code>timeout == NULL</code> 就是説一直阻塞着）。現在先跳過 <code>exceptfds</code>。</p><p><code>select</code> 的調用過程如下：</p><ol><li>在調用之前，用户先要為所有不同種類的要監視的文件描述符創建 <code>fd_set</code> 實例。如果想要同時監視讀取和寫入事件，<code>readfds</code> 和 <code>writefds</code> 都要被創建並且引用。</li><li>用户可以使用 <code>FD_SET</code> 來設置集合中想要監視的特殊描述符。例如，如果想要監視描述符 2、7 和 10 的讀取事件，在 <code>readfds</code> 這裏調用三次 <code>FD_SET</code>，分別設置 2、7 和 10。</li><li><code>select</code> 被調用。</li><li>當 <code>select</code> 返回時（現在先不管超時），就是説集合中有多少個文件描述符已經就緒了。它也修改 <code>readfds</code> 和 <code>writefds</code> 集合，來標記這些準備好的描述符。其它所有的描述符都會被清空。</li><li>這時用户需要遍歷 <code>readfds</code> 和 <code>writefds</code>，找到哪個描述符就緒了（使用 <code>FD_ISSET</code>）。</li></ol>`,29)),a("p",null,[s[9]||(s[9]=n("作為完整的例子，我在併發的服務器程序上使用 ",-1)),s[10]||(s[10]=a("code",null,"select",-1)),s[11]||(s[11]=n("，重新實現了我們之前的協議。",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/select-server.c"},{default:l(()=>[...s[8]||(s[8]=[n("完整的代碼在這裏",-1)])]),_:1}),s[12]||(s[12]=n("；接下來的是代碼中的重點部分及註釋。警告：示例代碼非常複雜，因此第一次看的時候，如果沒有足夠的時間，快速瀏覽也沒有關係。",-1))]),s[79]||(s[79]=a("h3",{id:"使用-select-的併發服務器",tabindex:"-1"},[n("使用 select 的併發服務器 "),a("a",{class:"header-anchor",href:"#使用-select-的併發服務器","aria-label":"Permalink to “使用 select 的併發服務器”"},"​")],-1)),s[80]||(s[80]=a("p",null,[n("使用 I/O 的多發 API 諸如 "),a("code",null,"select"),n(" 會給我們服務器的設計帶來一些限制；這不會馬上顯現出來，但這值得探討，因為它們是理解事件驅動編程到底是什麼的關鍵。")],-1)),s[81]||(s[81]=a("p",null,[n("最重要的是，要記住這種方法本質上是單線程的 ^注5 。服務器實際上在 "),a("em",null,"同一時刻只能做一件事"),n("。因為我們想要同時處理多個客户端請求，我們需要換一種方式重構代碼。")],-1)),s[82]||(s[82]=a("p",null,"首先，讓我們談談主循環。它看起來是什麼樣的呢？先讓我們想像一下服務器有一堆任務，它應該監視哪些東西呢？兩種類型的套接字活動：",-1)),a("ol",null,[s[16]||(s[16]=a("li",null,[n("新客户端嘗試連接。這些客户端應該被 "),a("code",null,"accept"),n("。")],-1)),a("li",null,[s[14]||(s[14]=n("已連接的客户端發送數據。這個數據要用 ",-1)),e(p,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[13]||(s[13]=[n("第一節",-1)])]),_:1}),s[15]||(s[15]=n(" 中所講到的協議進行傳輸，有可能會有一些數據要被回送給客户端。",-1))])]),s[83]||(s[83]=i(`<p>儘管這兩種活動在本質上有所區別，我們還是要把它們放在一個循環裏，因為只能有一個主循環。循環會包含 <code>select</code> 的調用。這個 <code>select</code> 的調用會監視上述的兩種活動。</p><p>這裏是部分代碼，設置了文件描述符集合，並在主循環裏轉到被調用的 <code>select</code> 部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// “master” 集合存活在該循環中，跟蹤我們想要監視的讀取事件或寫入事件的文件描述符（FD）。</span></span>
<span class="line"><span>fd_set readfds_master;</span></span>
<span class="line"><span>FD_ZERO(&amp;readfds_master);</span></span>
<span class="line"><span>fd_set writefds_master;</span></span>
<span class="line"><span>FD_ZERO(&amp;writefds_master);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 監聽的套接字一直被監視，用於讀取數據，並監測到來的新的端點連接。</span></span>
<span class="line"><span>FD_SET(listener_sockfd, &amp;readfds_master);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 要想更加高效，fdset_max 追蹤當前已知最大的 FD；這使得每次調用時對 FD_SETSIZE 的迭代選擇不是那麼重要了。</span></span>
<span class="line"><span>int fdset_max = listener_sockfd;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while (1) {</span></span>
<span class="line"><span>  // select() 會修改傳遞給它的 fd_sets，因此進行拷貝一下再傳值。</span></span>
<span class="line"><span>  fd_set readfds = readfds_master;</span></span>
<span class="line"><span>  fd_set writefds = writefds_master;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int nready = select(fdset_max + 1, &amp;readfds, &amp;writefds, NULL, NULL);</span></span>
<span class="line"><span>  if (nready &lt; 0) {</span></span>
<span class="line"><span>    perror_die(&quot;select&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>這裏的一些要點：</p><ol><li>由於每次調用 <code>select</code> 都會重寫傳遞給函數的集合，調用器就得維護一個 “master” 集合，在循環迭代中，保持對所監視的所有活躍的套接字的追蹤。</li><li>注意我們所關心的，最開始的唯一那個套接字是怎麼變成 <code>listener_sockfd</code> 的，這就是最開始的套接字，服務器藉此來接收新客户端的連接。</li><li><code>select</code> 的返回值，是在作為參數傳遞的集合中，那些已經就緒的描述符的個數。<code>select</code> 修改這個集合，用來標記就緒的描述符。下一步是在這些描述符中進行迭代。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>for (int fd = 0; fd &lt;= fdset_max &amp;&amp; nready &gt; 0; fd++) {</span></span>
<span class="line"><span>  // 檢查 fd 是否變成可讀的</span></span>
<span class="line"><span>  if (FD_ISSET(fd, &amp;readfds)) {</span></span>
<span class="line"><span>    nready--;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (fd == listener_sockfd) {</span></span>
<span class="line"><span>      // 監聽的套接字就緒了；這意味着有個新的客户端連接正在聯繫</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      fd_status_t status = on_peer_ready_recv(fd);</span></span>
<span class="line"><span>      if (status.want_read) {</span></span>
<span class="line"><span>        FD_SET(fd, &amp;readfds_master);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        FD_CLR(fd, &amp;readfds_master);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (status.want_write) {</span></span>
<span class="line"><span>        FD_SET(fd, &amp;writefds_master);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        FD_CLR(fd, &amp;writefds_master);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (!status.want_read &amp;&amp; !status.want_write) {</span></span>
<span class="line"><span>        printf(&quot;socket %d closing\\n&quot;, fd);</span></span>
<span class="line"><span>        close(fd);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,6)),a("p",null,[s[18]||(s[18]=n("這部分循環檢查 ",-1)),s[19]||(s[19]=a("em",null,"可讀的",-1)),s[20]||(s[20]=n(" 描述符。讓我們跳過監聽器套接字（要瀏覽所有內容，",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/select-server.c"},{default:l(()=>[...s[17]||(s[17]=[n("看這個代碼",-1)])]),_:1}),s[21]||(s[21]=n("） 然後看看當其中一個客户端準備好了之後會發生什麼。出現了這種情況後，我們調用一個叫做 ",-1)),s[22]||(s[22]=a("code",null,"on_peer_ready_recv",-1)),s[23]||(s[23]=n(" 的 ",-1)),s[24]||(s[24]=a("em",null,"回調",-1)),s[25]||(s[25]=n(" 函數，傳入相應的文件描述符。這個調用意味着客户端連接到套接字上，發送某些數據，並且對套接字上 ",-1)),s[26]||(s[26]=a("code",null,"recv",-1)),s[27]||(s[27]=n(" 的調用不會被阻塞 ^注6 。這個回調函數返回結構體 ",-1)),s[28]||(s[28]=a("code",null,"fd_status_t",-1)),s[29]||(s[29]=n("。",-1))]),s[84]||(s[84]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  bool want_read;</span></span>
<span class="line"><span>  bool want_write;</span></span>
<span class="line"><span>} fd_status_t;</span></span></code></pre></div><p>這個結構體告訴主循環，是否應該監視套接字的讀取事件、寫入事件，或者兩者都監視。上述代碼展示了 <code>FD_SET</code> 和 <code>FD_CLR</code> 是怎麼在合適的描述符集合中被調用的。對於主循環中某個準備好了寫入數據的描述符，代碼是類似的，除了它所調用的回調函數，這個回調函數叫做 <code>on_peer_ready_send</code>。</p><p>現在來花點時間看看這個回調：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef enum { INITIAL_ACK, WAIT_FOR_MSG, IN_MSG } ProcessingState;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define SENDBUF_SIZE 1024</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  ProcessingState state;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // sendbuf 包含了服務器要返回給客户端的數據。on_peer_ready_recv 句柄填充這個緩衝，</span></span>
<span class="line"><span>  // on_peer_read_send 進行消耗。sendbuf_end 指向緩衝區的最後一個有效字節，</span></span>
<span class="line"><span>  // sendptr 指向下個字節</span></span>
<span class="line"><span>  uint8_t sendbuf[SENDBUF_SIZE];</span></span>
<span class="line"><span>  int sendbuf_end;</span></span>
<span class="line"><span>  int sendptr;</span></span>
<span class="line"><span>} peer_state_t;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每一端都是通過它連接的文件描述符（fd）進行區分。只要客户端連接上了，fd 就是唯一的。</span></span>
<span class="line"><span>// 當客户端斷開連接，另一個客户端連接上就會獲得相同的 fd。on_peer_connected 應該</span></span>
<span class="line"><span>// 進行初始化，以便移除舊客户端在同一個 fd 上留下的東西。</span></span>
<span class="line"><span>peer_state_t global_state[MAXFDS];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fd_status_t on_peer_ready_recv(int sockfd) {</span></span>
<span class="line"><span>  assert(sockfd &lt; MAXFDs);</span></span>
<span class="line"><span>  peer_state_t* peerstate = &amp;global_state[sockfd];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (peerstate-&gt;state == INITIAL_ACK ||</span></span>
<span class="line"><span>      peerstate-&gt;sendptr &lt; peerstate-&gt;sendbuf_end) {</span></span>
<span class="line"><span>    // 在初始的 ACK 被送到了客户端，就沒有什麼要接收的了。</span></span>
<span class="line"><span>    // 等所有待發送的數據都被髮送之後接收更多的數據。</span></span>
<span class="line"><span>    return fd_status_W;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  uint8_t buf[1024];</span></span>
<span class="line"><span>  int nbytes = recv(sockfd, buf, sizeof buf, 0);</span></span>
<span class="line"><span>  if (nbytes == 0) {</span></span>
<span class="line"><span>    // 客户端斷開連接</span></span>
<span class="line"><span>    return fd_status_NORW;</span></span>
<span class="line"><span>  } else if (nbytes &lt; 0) {</span></span>
<span class="line"><span>    if (errno == EAGAIN || errno == EWOULDBLOCK) {</span></span>
<span class="line"><span>      // 套接字 *實際* 並沒有準備好接收，等到它就緒。</span></span>
<span class="line"><span>      return fd_status_R;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      perror_die(&quot;recv&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  bool ready_to_send = false;</span></span>
<span class="line"><span>  for (int i = 0; i &lt; nbytes; ++i) {</span></span>
<span class="line"><span>    switch (peerstate-&gt;state) {</span></span>
<span class="line"><span>    case INITIAL_ACK:</span></span>
<span class="line"><span>      assert(0 &amp;&amp; &quot;can&#39;t reach here&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case WAIT_FOR_MSG:</span></span>
<span class="line"><span>      if (buf[i] == &#39;^&#39;) {</span></span>
<span class="line"><span>        peerstate-&gt;state = IN_MSG;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case IN_MSG:</span></span>
<span class="line"><span>      if (buf[i] == &#39;$&#39;) {</span></span>
<span class="line"><span>        peerstate-&gt;state = WAIT_FOR_MSG;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        assert(peerstate-&gt;sendbuf_end &lt; SENDBUF_SIZE);</span></span>
<span class="line"><span>        peerstate-&gt;sendbuf[peerstate-&gt;sendbuf_end++] = buf[i] + 1;</span></span>
<span class="line"><span>        ready_to_send = true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 如果沒有數據要發送給客户端，報告讀取狀態作為最後接收的結果。</span></span>
<span class="line"><span>  return (fd_status_t){.want_read = !ready_to_send,</span></span>
<span class="line"><span>                       .want_write = ready_to_send};</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>peer_state_t</code> 是全狀態對象，用來表示在主循環中兩次回調函數調用之間的客户端的連接。因為回調函數在客户端發送的某些數據時被調用，不能假設它能夠不停地與客户端通信，並且它得運行得很快，不能被阻塞。因為套接字被設置成非阻塞模式，<code>recv</code> 會快速的返回。除了調用 <code>recv</code>， 這個句柄做的是處理狀態，沒有其它的調用，從而不會發生阻塞。</p><p>舉個例子，你知道為什麼這個代碼需要一個額外的狀態嗎？這個系列中，我們的服務器目前只用到了兩個狀態，但是這個服務器程序需要三個狀態。</p><p>來看看 “套接字準備好發送” 的回調函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fd_status_t on_peer_ready_send(int sockfd) {</span></span>
<span class="line"><span>  assert(sockfd &lt; MAXFDs);</span></span>
<span class="line"><span>  peer_state_t* peerstate = &amp;global_state[sockfd];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (peerstate-&gt;sendptr &gt;= peerstate-&gt;sendbuf_end) {</span></span>
<span class="line"><span>    // 沒有要發送的。</span></span>
<span class="line"><span>    return fd_status_RW;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  int sendlen = peerstate-&gt;sendbuf_end - peerstate-&gt;sendptr;</span></span>
<span class="line"><span>  int nsent = send(sockfd, peerstate-&gt;sendbuf, sendlen, 0);</span></span>
<span class="line"><span>  if (nsent == -1) {</span></span>
<span class="line"><span>    if (errno == EAGAIN || errno == EWOULDBLOCK) {</span></span>
<span class="line"><span>      return fd_status_W;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      perror_die(&quot;send&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (nsent &lt; sendlen) {</span></span>
<span class="line"><span>    peerstate-&gt;sendptr += nsent;</span></span>
<span class="line"><span>    return fd_status_W;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 所有東西都成功發送；重置發送隊列。</span></span>
<span class="line"><span>    peerstate-&gt;sendptr = 0;</span></span>
<span class="line"><span>    peerstate-&gt;sendbuf_end = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果我們現在是處於特殊的 INITIAL_ACK 狀態，就轉變到其他狀態。</span></span>
<span class="line"><span>    if (peerstate-&gt;state == INITIAL_ACK) {</span></span>
<span class="line"><span>      peerstate-&gt;state = WAIT_FOR_MSG;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return fd_status_R;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏也一樣，回調函數調用了一個非阻塞的 <code>send</code>，演示了狀態管理。在異步代碼中，回調函數執行的很快是受爭議的，任何延遲都會阻塞主循環進行處理，因此也阻塞了整個服務器程序去處理其他的客户端。</p><p>用腳步再來運行這個服務器，同時連接 3 個客户端。在一個終端中我們運行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./select-server</span></span></code></pre></div><p>在另一個終端中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 simple-client.py  -n 3 localhost 9090</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,864:conn1 connected...</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,864:conn2 connected...</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,864:conn0 connected...</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,865:conn1 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,865:conn2 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,865:conn0 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,865:conn1 received b&#39;bcdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,865:conn2 received b&#39;bcdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:15,865:conn0 received b&#39;bcdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:16,866:conn1 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:16,867:conn0 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:16,867:conn2 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:16,867:conn1 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:16,868:conn0 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:16,868:conn2 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:17,868:conn1 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:17,869:conn1 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:17,869:conn0 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:17,870:conn0 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:17,870:conn2 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:17,870:conn2 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:18,069:conn1 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:18,070:conn0 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-26 05:29:18,070:conn2 disconnecting</span></span></code></pre></div>`,13)),a("p",null,[s[31]||(s[31]=n("和線程的情況相似，客户端之間沒有延遲，它們被同時處理。而且在 ",-1)),s[32]||(s[32]=a("code",null,"select-server",-1)),s[33]||(s[33]=n(" 也沒有用線程！主循環 ",-1)),s[34]||(s[34]=a("em",null,"多路",-1)),s[35]||(s[35]=n(" 處理所有的客户端，通過高效使用 ",-1)),s[36]||(s[36]=a("code",null,"select",-1)),s[37]||(s[37]=n(" 輪詢多個套接字。回想下 ",-1)),e(p,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[30]||(s[30]=[n("第二節中",-1)])]),_:1}),s[38]||(s[38]=n(" 順序的 vs 多線程的客户端處理過程的圖片。對於我們的 ",-1)),s[39]||(s[39]=a("code",null,"select-server",-1)),s[40]||(s[40]=n("，三個客户端的處理流程像這樣：",-1))]),s[85]||(s[85]=i('<p><img src="https://eli.thegreenplace.net/images/2017/multiplexed-flow.png" alt="多客户端處理流程"></p><p>所有的客户端在同一個線程中同時被處理，通過乘積，做一點這個客户端的任務，然後切換到另一個，再切換到下一個，最後切換回到最開始的那個客户端。注意，這裏沒有什麼循環調度，客户端在它們發送數據的時候被客户端處理，這實際上是受客户端左右的。</p><h3 id="同步、異步、事件驅動、回調" tabindex="-1">同步、異步、事件驅動、回調 <a class="header-anchor" href="#同步、異步、事件驅動、回調" aria-label="Permalink to “同步、異步、事件驅動、回調”">​</a></h3><p><code>select-server</code> 示例代碼為討論什麼是異步編程、它和事件驅動及基於回調的編程有何聯繫，提供了一個良好的背景。因為這些詞彙在併發服務器的（非常矛盾的）討論中很常見。</p><p>讓我們從一段 <code>select</code> 的手冊頁面中引用的一句話開始：</p><blockquote><p>select，pselect，FD_CLR，FD_ISSET，FD_SET，FD_ZERO - 同步 I/O 處理</p></blockquote><p>因此 <code>select</code> 是 <em>同步</em> 處理。但我剛剛演示了大量代碼的例子，使用 <code>select</code> 作為 <em>異步</em> 處理服務器的例子。有哪些東西？</p><p>答案是：這取決於你的觀察角度。同步常用作阻塞處理，並且對 <code>select</code> 的調用實際上是阻塞的。和第 1、2 節中講到的順序的、多線程的服務器中對 <code>send</code> 和 <code>recv</code> 是一樣的。因此説 <code>select</code> 是 <em>同步的</em> API 是有道理的。可是，服務器的設計卻可以是 <em>異步的</em>，或是 <em>基於回調的</em>，或是 <em>事件驅動的</em>，儘管其中有對 <code>select</code> 的使用。注意這裏的 <code>on_peer_*</code> 函數是回調函數；它們永遠不會阻塞，並且只有網絡事件觸發的時候才會被調用。它們可以獲得部分數據，並能夠在調用過程中保持穩定的狀態。</p><p>如果你曾經做過一些 GUI 編程，這些東西對你來説應該很親切。有個 “事件循環”，常常完全隱藏在框架裏，應用的 “業務邏輯” 建立在回調上，這些回調會在各種事件觸發後被調用，用户點擊鼠標、選擇菜單、定時器觸發、數據到達套接字等等。曾經最常見的編程模型是客户端的 JavaScript，這裏面有一堆回調函數，它們在瀏覽網頁時用户的行為被觸發。</p><h3 id="select-的侷限" tabindex="-1">select 的侷限 <a class="header-anchor" href="#select-的侷限" aria-label="Permalink to “select 的侷限”">​</a></h3><p>使用 <code>select</code> 作為第一個異步服務器的例子對於説明這個概念很有用，而且由於 <code>select</code> 是很常見、可移植的 API。但是它也有一些嚴重的缺陷，在監視的文件描述符非常大的時候就會出現。</p><ol><li>有限的文件描述符的集合大小。</li><li>糟糕的性能。</li></ol><p>從文件描述符的大小開始。<code>FD_SETSIZE</code> 是一個編譯期常數，在如今的操作系統中，它的值通常是 1024。它被硬編碼在 <code>glibc</code> 的頭文件裏，並且不容易修改。它把 <code>select</code> 能夠監視的文件描述符的數量限制在 1024 以內。曾有些人想要寫出能夠處理上萬個併發訪問的客户端請求的服務器，所以這個問題很有現實意義。有一些方法，但是不可移植，也很難用。</p><p>糟糕的性能問題就好解決的多，但是依然非常嚴重。注意當 <code>select</code> 返回的時候，它向調用者提供的信息是 “就緒的” 描述符的個數，還有被修改過的描述符集合。描述符集映射着描述符“就緒/未就緒”，但是並沒有提供什麼有效的方法去遍歷所有就緒的描述符。如果只有一個描述符是就緒的，最壞的情況是調用者需要遍歷 <em>整個集合</em> 來找到那個描述符。這在監視的描述符數量比較少的時候還行，但是如果數量變的很大的時候，這種方法弊端就凸顯出了 ^注7 。</p><p>由於這些原因，為了寫出高性能的併發服務器， <code>select</code> 已經不怎麼用了。每一個流行的操作系統有獨特的不可移植的 API，允許用户寫出非常高效的事件循環；像框架這樣的高級結構還有高級語言通常在一個可移植的接口中包含這些 API。</p><h3 id="epoll" tabindex="-1">epoll <a class="header-anchor" href="#epoll" aria-label="Permalink to “epoll”">​</a></h3><p>舉個例子，來看看 <code>epoll</code>，Linux 上的關於高容量 I/O 事件通知問題的解決方案。<code>epoll</code> 高效的關鍵之處在於它與內核更好的協作。不是使用文件描述符，<code>epoll_wait</code> 用當前準備好的事件填滿一個緩衝區。只有準備好的事件添加到了緩衝區，因此沒有必要遍歷客户端中當前 <em>所有</em> 監視的文件描述符。這簡化了查找就緒的描述符的過程，把空間複雜度從 <code>select</code> 中的 O(N) 變為了 O(1)。</p>',17)),a("p",null,[s[42]||(s[42]=n("關於 ",-1)),s[43]||(s[43]=a("code",null,"epoll",-1)),s[44]||(s[44]=n(" API 的完整展示不是這裏的目的，網上有很多相關資源。雖然你可能猜到了，我還要寫一個不同的併發服務器，這次是用 ",-1)),s[45]||(s[45]=a("code",null,"epool",-1)),s[46]||(s[46]=n(" 而不是 ",-1)),s[47]||(s[47]=a("code",null,"select",-1)),s[48]||(s[48]=n("。完整的示例代碼 ",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/epoll-server.c"},{default:l(()=>[...s[41]||(s[41]=[n("在這裏",-1)])]),_:1}),s[49]||(s[49]=n("。實際上，由於大部分代碼和 ",-1)),s[50]||(s[50]=a("code",null,"用 select 的服務器",-1)),s[51]||(s[51]=n("相同，所以我只會講要點，在主循環裏使用 ",-1)),s[52]||(s[52]=a("code",null,"epoll",-1)),s[53]||(s[53]=n("：",-1))]),s[86]||(s[86]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct epoll_event accept_event;</span></span>
<span class="line"><span>accept_event.data.fd = listener_sockfd;</span></span>
<span class="line"><span>accept_event.events = EPOLLIN;</span></span>
<span class="line"><span>if (epoll_ctl(epollfd, EPOLL_CTL_ADD, listener_sockfd, &amp;accept_event) &lt; 0) {</span></span>
<span class="line"><span>  perror_die(&quot;epoll_ctl EPOLL_CTL_ADD&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct epoll_event* events = calloc(MAXFDS, sizeof(struct epoll_event));</span></span>
<span class="line"><span>if (events == NULL) {</span></span>
<span class="line"><span>  die(&quot;Unable to allocate memory for epoll_events&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while (1) {</span></span>
<span class="line"><span>  int nready = epoll_wait(epollfd, events, MAXFDS, -1);</span></span>
<span class="line"><span>  for (int i = 0; i &lt; nready; i++) {</span></span>
<span class="line"><span>    if (events[i].events &amp; EPOLLERR) {</span></span>
<span class="line"><span>      perror_die(&quot;epoll_wait returned EPOLLERR&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (events[i].data.fd == listener_sockfd) {</span></span>
<span class="line"><span>      // 監聽的套接字就緒了；意味着新客户端正在連接。</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // A peer socket is ready.</span></span>
<span class="line"><span>      if (events[i].events &amp; EPOLLIN) {</span></span>
<span class="line"><span>        // 準備好了讀取</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      } else if (events[i].events &amp; EPOLLOUT) {</span></span>
<span class="line"><span>        // 準備好了寫入</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過調用 <code>epoll_ctl</code> 來配置 <code>epoll</code>。這時，配置監聽的套接字數量，也就是 <code>epoll</code> 監聽的描述符的數量。然後分配一個緩衝區，把就緒的事件傳給 <code>epoll</code> 以供修改。在主循環裏對 <code>epoll_wait</code> 的調用是魅力所在。它阻塞着，直到某個描述符就緒了（或者超時），返回就緒的描述符數量。但這時，不要盲目地迭代所有監視的集合，我們知道 <code>epoll_write</code> 會修改傳給它的 <code>events</code> 緩衝區，緩衝區中有就緒的事件，從 0 到 <code>nready-1</code>，因此我們只需迭代必要的次數。</p><p>要在 <code>select</code> 裏面重新遍歷，有明顯的差異：如果在監視着 1000 個描述符，只有兩個就緒， <code>epoll_waits</code> 返回的是 <code>nready=2</code>，然後修改 <code>events</code> 緩衝區最前面的兩個元素，因此我們只需要“遍歷”兩個描述符。用 <code>select</code> 我們就需要遍歷 1000 個描述符，找出哪個是就緒的。因此，在繁忙的服務器上，有許多活躍的套接字時 <code>epoll</code> 比 <code>select</code> 更加容易擴展。</p><p>剩下的代碼很直觀，因為我們已經很熟悉 “select 服務器” 了。實際上，“epoll 服務器” 中的所有“業務邏輯”和 “select 服務器” 是一樣的，回調構成相同的代碼。</p><p>這種相似是通過將事件循環抽象分離到一個庫/框架中。我將會詳述這些內容，因為很多優秀的程序員曾經也是這樣做的。相反，下一篇文章裏我們會了解 libuv，一個最近出現的更加受歡迎的時間循環抽象層。像 libuv 這樣的庫讓我們能夠寫出併發的異步服務器，並且不用考慮系統調用下繁瑣的細節。</p><hr>`,6)),a("ul",null,[s[59]||(s[59]=a("li",null,"注1：我試着在做網絡瀏覽和閲讀這兩件事的實際差別中突顯自己，但經常做得頭疼。有很多不同的選項，從“它們是一樣的東西”到“一個是另一個的子集”，再到“它們是完全不同的東西”。在面臨這樣主觀的觀點時，最好是完全放棄這個問題，專注特殊的例子和用例。",-1)),s[60]||(s[60]=a("li",null,[n("注2：POSIX 表示這可以是 "),a("code",null,"EAGAIN"),n("，也可以是 "),a("code",null,"EWOULDBLOCK"),n("，可移植應用應該對這兩個都進行檢查。")],-1)),a("li",null,[s[55]||(s[55]=n("注3：和這個系列所有的 C 示例類似，代碼中用到了某些助手工具來設置監聽套接字。這些工具的完整代碼在這個 ",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/utils.h"},{default:l(()=>[...s[54]||(s[54]=[n("倉庫",-1)])]),_:1}),s[56]||(s[56]=n(" 的 ",-1)),s[57]||(s[57]=a("code",null,"utils",-1)),s[58]||(s[58]=n(" 模組裏。",-1))]),s[61]||(s[61]=i("<li>注4：<code>select</code> 不是網絡/套接字專用的函數，它可以監視任意的文件描述符，有可能是硬盤文件、管道、終端、套接字或者 Unix 系統中用到的任何文件描述符。這篇文章裏，我們主要關注它在套接字方面的應用。</li><li>注5：有多種方式用多線程來實現事件驅動，我會把它放在稍後的文章中進行討論。</li><li>注6：由於各種非實驗因素，它 <em>仍然</em> 可以阻塞，即使是在 <code>select</code> 説它就緒了之後。因此服務器上打開的所有套接字都被設置成非阻塞模式，如果對 <code>recv</code> 或 <code>send</code> 的調用返回了 <code>EAGAIN</code> 或者 <code>EWOULDBLOCK</code>，回調函數就裝作沒有事件發生。閲讀示例代碼的註釋可以瞭解更多細節。</li><li>注7：注意這比該文章前面所講的異步輪詢的例子要稍好一點。輪詢需要 <em>一直</em> 發生，而 <code>select</code> 實際上會阻塞到有一個或多個套接字準備好讀取/寫入；<code>select</code> 會比一直詢問浪費少得多的 CPU 時間。</li>",4))]),s[87]||(s[87]=a("hr",null,null,-1)),a("p",null,[s[63]||(s[63]=n("via: ",-1)),e(p,{href:"https://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...s[62]||(s[62]=[n("https://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/",-1)])]),_:1})]),a("p",null,[s[67]||(s[67]=n("作者：",-1)),e(p,{href:"https://eli.thegreenplace.net/pages/about"},{default:l(()=>[...s[64]||(s[64]=[n("Eli Bendersky",-1)])]),_:1}),s[68]||(s[68]=n(" 譯者：",-1)),e(p,{href:"https://github.com/GitFuture"},{default:l(()=>[...s[65]||(s[65]=[n("GitFuture",-1)])]),_:1}),s[69]||(s[69]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[66]||(s[66]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[72]||(s[72]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[70]||(s[70]=[n("LCTT",-1)])]),_:1}),s[73]||(s[73]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[71]||(s[71]=[n("Linux中國",-1)])]),_:1}),s[74]||(s[74]=n(" 榮譽推出",-1))])])}const I=t(r,[["render",u]]);export{C as __pageData,I as default};
