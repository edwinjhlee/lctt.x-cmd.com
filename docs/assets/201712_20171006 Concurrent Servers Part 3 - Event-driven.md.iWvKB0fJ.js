import{_ as t,a0 as d,w as c,s as o,I as a,x as n,a1 as e,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"并发服务器（三）：事件驱动 | LCTT x X-CMD","titleTemplate":false,"description":"并发服务器（三）：事件驱动 | LCTT (201712) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"并发服务器（三）：事件驱动 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"并发服务器（三）：事件驱动 | LCTT (201712) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201712/20171006 Concurrent Servers Part 3 - Event-driven","title":"并发服务器（三）：事件驱动","tag":"201712","desc":""},"relativePath":"201712/20171006 Concurrent Servers Part 3 - Event-driven.md","filePath":"[post].md"}'),r={name:"201712/20171006 Concurrent Servers Part 3 - Event-driven.md"};function u(f,s,g,b,k,v){const p=d("Link");return c(),o("div",null,[s[75]||(s[75]=a("h1",{id:"并发服务器-三-事件驱动",tabindex:"-1"},[n("并发服务器（三）：事件驱动 "),a("a",{class:"header-anchor",href:"#并发服务器-三-事件驱动","aria-label":"Permalink to “并发服务器（三）：事件驱动”"},"​")],-1)),a("p",null,[s[2]||(s[2]=n("这是并发服务器系列的第三节。",-1)),e(p,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一节",-1)])]),_:1}),s[3]||(s[3]=n(" 介绍了阻塞式编程，",-1)),e(p,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[1]||(s[1]=[n("第二节：线程",-1)])]),_:1}),s[4]||(s[4]=n(" 探讨了多线程，将其作为一种可行的方法来实现服务器并发编程。",-1))]),s[76]||(s[76]=a("p",null,[n("另一种常见的实现并发的方法叫做 "),a("em",null,"事件驱动编程"),n("，也可以叫做 "),a("em",null,"异步"),n(" 编程 ^注1 。这种方法变化万千，因此我们会从最基本的开始，使用一些基本的 API 而非从封装好的高级方法开始。本系列以后的文章会讲高层次抽象，还有各种混合的方法。")],-1)),s[77]||(s[77]=a("p",null,"本系列的所有文章：",-1)),a("ul",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[5]||(s[5]=[n("第一节 - 简介",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[6]||(s[6]=[n("第二节 - 线程",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...s[7]||(s[7]=[n("第三节 - 事件驱动",-1)])]),_:1})])]),s[78]||(s[78]=i(`<h3 id="阻塞式-vs-非阻塞式-i-o" tabindex="-1">阻塞式 vs. 非阻塞式 I/O <a class="header-anchor" href="#阻塞式-vs-非阻塞式-i-o" aria-label="Permalink to “阻塞式 vs. 非阻塞式 I/O”">​</a></h3><p>作为本篇的介绍，我们先讲讲阻塞和非阻塞 I/O 的区别。阻塞式 I/O 更好理解，因为这是我们使用 I/O 相关 API 时的“标准”方式。从套接字接收数据的时候，调用 <code>recv</code> 函数会发生 <em>阻塞</em>，直到它从端口上接收到了来自另一端套接字的数据。这恰恰是第一部分讲到的顺序服务器的问题。</p><p>因此阻塞式 I/O 存在着固有的性能问题。第二节里我们讲过一种解决方法，就是用多线程。哪怕一个线程的 I/O 阻塞了，别的线程仍然可以使用 CPU 资源。实际上，阻塞 I/O 通常在利用资源方面非常高效，因为线程就等待着 —— 操作系统将线程变成休眠状态，只有满足了线程需要的条件才会被唤醒。</p><p><em>非阻塞式</em> I/O 是另一种思路。把套接字设成非阻塞模式时，调用 <code>recv</code> 时（还有 <code>send</code>，但是我们现在只考虑接收），函数返回的会很快，哪怕没有接收到数据。这时，就会返回一个特殊的错误状态 ^注2 来通知调用者，此时没有数据传进来。调用者可以去做其他的事情，或者尝试再次调用 <code>recv</code> 函数。</p><p>示范阻塞式和非阻塞式的 <code>recv</code> 区别的最好方式就是贴一段示例代码。这里有个监听套接字的小程序，一直在 <code>recv</code> 这里阻塞着；当 <code>recv</code> 返回了数据，程序就报告接收到了多少个字节 ^注3 ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, const char** argv) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>主循环重复调用 <code>recv</code> 并且报告它返回的字节数（记住 <code>recv</code> 返回 0 时，就是客户端断开连接了）。试着运行它，我们会在一个终端里运行这个程序，然后在另一个终端里用 <code>nc</code> 进行连接，发送一些字符，每次发送之间间隔几秒钟：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ nc localhost 9988</span></span>
<span class="line"><span>hello                                   # wait for 2 seconds after typing this</span></span>
<span class="line"><span>socket world</span></span>
<span class="line"><span>^D                                      # to end the connection&gt;</span></span></code></pre></div><p>监听程序会输出以下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./blocking-listener 9988</span></span>
<span class="line"><span>Listening on port 9988</span></span>
<span class="line"><span>peer (localhost, 37284) connected</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>recv returned 6 bytes</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>recv returned 13 bytes</span></span>
<span class="line"><span>Calling recv...</span></span>
<span class="line"><span>Peer disconnected; I&#39;m done.</span></span></code></pre></div><p>现在试试非阻塞的监听程序的版本。这是代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, const char** argv) {</span></span>
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
<span class="line"><span>  // 把套接字设成非阻塞模式</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这里与阻塞版本有些差异，值得注意：</p><ol><li><code>accept</code> 函数返回的 <code>newsocktfd</code> 套接字因调用了 <code>fcntl</code>， 被设置成非阻塞的模式。</li><li>检查 <code>recv</code> 的返回状态时，我们对 <code>errno</code> 进行了检查，判断它是否被设置成表示没有可供接收的数据的状态。这时，我们仅仅是休眠了 200 毫秒然后进入到下一轮循环。</li></ol><p>同样用 <code>nc</code> 进行测试，以下是非阻塞监听器的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./nonblocking-listener 9988</span></span>
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
<span class="line"><span>Peer disconnected; I&#39;m done.</span></span></code></pre></div><p>作为练习，给输出添加一个时间戳，确认调用 <code>recv</code> 得到结果之间花费的时间是比输入到 <code>nc</code> 中所用的多还是少（每一轮是 200 ms）。</p><p>这里就实现了使用非阻塞的 <code>recv</code> 让监听者检查套接字变为可能，并且在没有数据的时候重新获得控制权。换句话说，用编程的语言说这就是 <ruby>轮询<rt>polling</rt></ruby> —— 主程序周期性的查询套接字以便读取数据。</p><p>对于顺序响应的问题，这似乎是个可行的方法。非阻塞的 <code>recv</code> 让同时与多个套接字通信变成可能，轮询这些套接字，仅当有新数据到来时才处理。就是这样，这种方式 <em>可以</em> 用来写并发服务器；但实际上一般不这么做，因为轮询的方式很难扩展。</p><p>首先，我在代码中引入的 200ms 延迟对于演示非常好（监听器在我输入 <code>nc</code> 之间只打印几行 “Calling recv...”，但实际上应该有上千行）。但它也增加了多达 200ms 的服务器响应时间，这无意是不必要的。实际的程序中，延迟会低得多，休眠时间越短，进程占用的 CPU 资源就越多。有些时钟周期只是浪费在等待，这并不好，尤其是在移动设备上，这些设备的电量往往有限。</p><p>但是当我们实际这样来使用多个套接字的时候，更严重的问题出现了。想像下监听器正在同时处理 1000 个客户端。这意味着每一个循环迭代里面，它都得为 <em>这 1000 个套接字中的每一个</em> 执行一遍非阻塞的 <code>recv</code>，找到其中准备好了数据的那一个。这非常低效，并且极大的限制了服务器能够并发处理的客户端数。这里有个准则：每次轮询之间等待的间隔越久，服务器响应性越差；而等待的时间越少，CPU 在无用的轮询上耗费的资源越多。</p><p>讲真，所有的轮询都像是无用功。当然操作系统应该是知道哪个套接字是准备好了数据的，因此没必要逐个扫描。事实上，就是这样，接下来就会讲一些 API，让我们可以更优雅地处理多个客户端。</p><h3 id="select" tabindex="-1">select <a class="header-anchor" href="#select" aria-label="Permalink to “select”">​</a></h3><p><code>select</code> 的系统调用是可移植的（POSIX），是标准 Unix API 中常有的部分。它是为上一节最后一部分描述的问题而设计的 —— 允许一个线程可以监视许多文件描述符 ^注4 的变化，而不用在轮询中执行不必要的代码。我并不打算在这里引入一个关于 <code>select</code> 的全面教程，有很多网站和书籍讲这个，但是在涉及到问题的相关内容时，我会介绍一下它的 API，然后再展示一个非常复杂的例子。</p><p><code>select</code> 允许 <em>多路 I/O</em>，监视多个文件描述符，查看其中任何一个的 I/O 是否可用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int select(int nfds, fd_set *readfds, fd_set *writefds,</span></span>
<span class="line"><span>           fd_set *exceptfds, struct timeval *timeout);</span></span></code></pre></div><p><code>readfds</code> 指向文件描述符的缓冲区，这个缓冲区被监视是否有读取事件；<code>fd_set</code> 是一个特殊的数据结构，用户使用 <code>FD_*</code> 宏进行操作。<code>writefds</code> 是针对写事件的。<code>nfds</code> 是监视的缓冲中最大的文件描述符数字（文件描述符就是整数）。<code>timeout</code> 可以让用户指定 <code>select</code> 应该阻塞多久，直到某个文件描述符准备好了（<code>timeout == NULL</code> 就是说一直阻塞着）。现在先跳过 <code>exceptfds</code>。</p><p><code>select</code> 的调用过程如下：</p><ol><li>在调用之前，用户先要为所有不同种类的要监视的文件描述符创建 <code>fd_set</code> 实例。如果想要同时监视读取和写入事件，<code>readfds</code> 和 <code>writefds</code> 都要被创建并且引用。</li><li>用户可以使用 <code>FD_SET</code> 来设置集合中想要监视的特殊描述符。例如，如果想要监视描述符 2、7 和 10 的读取事件，在 <code>readfds</code> 这里调用三次 <code>FD_SET</code>，分别设置 2、7 和 10。</li><li><code>select</code> 被调用。</li><li>当 <code>select</code> 返回时（现在先不管超时），就是说集合中有多少个文件描述符已经就绪了。它也修改 <code>readfds</code> 和 <code>writefds</code> 集合，来标记这些准备好的描述符。其它所有的描述符都会被清空。</li><li>这时用户需要遍历 <code>readfds</code> 和 <code>writefds</code>，找到哪个描述符就绪了（使用 <code>FD_ISSET</code>）。</li></ol>`,29)),a("p",null,[s[9]||(s[9]=n("作为完整的例子，我在并发的服务器程序上使用 ",-1)),s[10]||(s[10]=a("code",null,"select",-1)),s[11]||(s[11]=n("，重新实现了我们之前的协议。",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/select-server.c"},{default:l(()=>[...s[8]||(s[8]=[n("完整的代码在这里",-1)])]),_:1}),s[12]||(s[12]=n("；接下来的是代码中的重点部分及注释。警告：示例代码非常复杂，因此第一次看的时候，如果没有足够的时间，快速浏览也没有关系。",-1))]),s[79]||(s[79]=a("h3",{id:"使用-select-的并发服务器",tabindex:"-1"},[n("使用 select 的并发服务器 "),a("a",{class:"header-anchor",href:"#使用-select-的并发服务器","aria-label":"Permalink to “使用 select 的并发服务器”"},"​")],-1)),s[80]||(s[80]=a("p",null,[n("使用 I/O 的多发 API 诸如 "),a("code",null,"select"),n(" 会给我们服务器的设计带来一些限制；这不会马上显现出来，但这值得探讨，因为它们是理解事件驱动编程到底是什么的关键。")],-1)),s[81]||(s[81]=a("p",null,[n("最重要的是，要记住这种方法本质上是单线程的 ^注5 。服务器实际上在 "),a("em",null,"同一时刻只能做一件事"),n("。因为我们想要同时处理多个客户端请求，我们需要换一种方式重构代码。")],-1)),s[82]||(s[82]=a("p",null,"首先，让我们谈谈主循环。它看起来是什么样的呢？先让我们想象一下服务器有一堆任务，它应该监视哪些东西呢？两种类型的套接字活动：",-1)),a("ol",null,[s[16]||(s[16]=a("li",null,[n("新客户端尝试连接。这些客户端应该被 "),a("code",null,"accept"),n("。")],-1)),a("li",null,[s[14]||(s[14]=n("已连接的客户端发送数据。这个数据要用 ",-1)),e(p,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[13]||(s[13]=[n("第一节",-1)])]),_:1}),s[15]||(s[15]=n(" 中所讲到的协议进行传输，有可能会有一些数据要被回送给客户端。",-1))])]),s[83]||(s[83]=i(`<p>尽管这两种活动在本质上有所区别，我们还是要把它们放在一个循环里，因为只能有一个主循环。循环会包含 <code>select</code> 的调用。这个 <code>select</code> 的调用会监视上述的两种活动。</p><p>这里是部分代码，设置了文件描述符集合，并在主循环里转到被调用的 <code>select</code> 部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// “master” 集合存活在该循环中，跟踪我们想要监视的读取事件或写入事件的文件描述符（FD）。</span></span>
<span class="line"><span>fd_set readfds_master;</span></span>
<span class="line"><span>FD_ZERO(&amp;readfds_master);</span></span>
<span class="line"><span>fd_set writefds_master;</span></span>
<span class="line"><span>FD_ZERO(&amp;writefds_master);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听的套接字一直被监视，用于读取数据，并监测到来的新的端点连接。</span></span>
<span class="line"><span>FD_SET(listener_sockfd, &amp;readfds_master);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 要想更加高效，fdset_max 追踪当前已知最大的 FD；这使得每次调用时对 FD_SETSIZE 的迭代选择不是那么重要了。</span></span>
<span class="line"><span>int fdset_max = listener_sockfd;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while (1) {</span></span>
<span class="line"><span>  // select() 会修改传递给它的 fd_sets，因此进行拷贝一下再传值。</span></span>
<span class="line"><span>  fd_set readfds = readfds_master;</span></span>
<span class="line"><span>  fd_set writefds = writefds_master;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int nready = select(fdset_max + 1, &amp;readfds, &amp;writefds, NULL, NULL);</span></span>
<span class="line"><span>  if (nready &lt; 0) {</span></span>
<span class="line"><span>    perror_die(&quot;select&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>这里的一些要点：</p><ol><li>由于每次调用 <code>select</code> 都会重写传递给函数的集合，调用器就得维护一个 “master” 集合，在循环迭代中，保持对所监视的所有活跃的套接字的追踪。</li><li>注意我们所关心的，最开始的唯一那个套接字是怎么变成 <code>listener_sockfd</code> 的，这就是最开始的套接字，服务器借此来接收新客户端的连接。</li><li><code>select</code> 的返回值，是在作为参数传递的集合中，那些已经就绪的描述符的个数。<code>select</code> 修改这个集合，用来标记就绪的描述符。下一步是在这些描述符中进行迭代。</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>for (int fd = 0; fd &lt;= fdset_max &amp;&amp; nready &gt; 0; fd++) {</span></span>
<span class="line"><span>  // 检查 fd 是否变成可读的</span></span>
<span class="line"><span>  if (FD_ISSET(fd, &amp;readfds)) {</span></span>
<span class="line"><span>    nready--;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (fd == listener_sockfd) {</span></span>
<span class="line"><span>      // 监听的套接字就绪了；这意味着有个新的客户端连接正在联系</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div>`,6)),a("p",null,[s[18]||(s[18]=n("这部分循环检查 ",-1)),s[19]||(s[19]=a("em",null,"可读的",-1)),s[20]||(s[20]=n(" 描述符。让我们跳过监听器套接字（要浏览所有内容，",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/select-server.c"},{default:l(()=>[...s[17]||(s[17]=[n("看这个代码",-1)])]),_:1}),s[21]||(s[21]=n("） 然后看看当其中一个客户端准备好了之后会发生什么。出现了这种情况后，我们调用一个叫做 ",-1)),s[22]||(s[22]=a("code",null,"on_peer_ready_recv",-1)),s[23]||(s[23]=n(" 的 ",-1)),s[24]||(s[24]=a("em",null,"回调",-1)),s[25]||(s[25]=n(" 函数，传入相应的文件描述符。这个调用意味着客户端连接到套接字上，发送某些数据，并且对套接字上 ",-1)),s[26]||(s[26]=a("code",null,"recv",-1)),s[27]||(s[27]=n(" 的调用不会被阻塞 ^注6 。这个回调函数返回结构体 ",-1)),s[28]||(s[28]=a("code",null,"fd_status_t",-1)),s[29]||(s[29]=n("。",-1))]),s[84]||(s[84]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  bool want_read;</span></span>
<span class="line"><span>  bool want_write;</span></span>
<span class="line"><span>} fd_status_t;</span></span></code></pre></div><p>这个结构体告诉主循环，是否应该监视套接字的读取事件、写入事件，或者两者都监视。上述代码展示了 <code>FD_SET</code> 和 <code>FD_CLR</code> 是怎么在合适的描述符集合中被调用的。对于主循环中某个准备好了写入数据的描述符，代码是类似的，除了它所调用的回调函数，这个回调函数叫做 <code>on_peer_ready_send</code>。</p><p>现在来花点时间看看这个回调：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef enum { INITIAL_ACK, WAIT_FOR_MSG, IN_MSG } ProcessingState;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define SENDBUF_SIZE 1024</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  ProcessingState state;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // sendbuf 包含了服务器要返回给客户端的数据。on_peer_ready_recv 句柄填充这个缓冲，</span></span>
<span class="line"><span>  // on_peer_read_send 进行消耗。sendbuf_end 指向缓冲区的最后一个有效字节，</span></span>
<span class="line"><span>  // sendptr 指向下个字节</span></span>
<span class="line"><span>  uint8_t sendbuf[SENDBUF_SIZE];</span></span>
<span class="line"><span>  int sendbuf_end;</span></span>
<span class="line"><span>  int sendptr;</span></span>
<span class="line"><span>} peer_state_t;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 每一端都是通过它连接的文件描述符（fd）进行区分。只要客户端连接上了，fd 就是唯一的。</span></span>
<span class="line"><span>// 当客户端断开连接，另一个客户端连接上就会获得相同的 fd。on_peer_connected 应该</span></span>
<span class="line"><span>// 进行初始化，以便移除旧客户端在同一个 fd 上留下的东西。</span></span>
<span class="line"><span>peer_state_t global_state[MAXFDS];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fd_status_t on_peer_ready_recv(int sockfd) {</span></span>
<span class="line"><span>  assert(sockfd &lt; MAXFDs);</span></span>
<span class="line"><span>  peer_state_t* peerstate = &amp;global_state[sockfd];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (peerstate-&gt;state == INITIAL_ACK ||</span></span>
<span class="line"><span>      peerstate-&gt;sendptr &lt; peerstate-&gt;sendbuf_end) {</span></span>
<span class="line"><span>    // 在初始的 ACK 被送到了客户端，就没有什么要接收的了。</span></span>
<span class="line"><span>    // 等所有待发送的数据都被发送之后接收更多的数据。</span></span>
<span class="line"><span>    return fd_status_W;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  uint8_t buf[1024];</span></span>
<span class="line"><span>  int nbytes = recv(sockfd, buf, sizeof buf, 0);</span></span>
<span class="line"><span>  if (nbytes == 0) {</span></span>
<span class="line"><span>    // 客户端断开连接</span></span>
<span class="line"><span>    return fd_status_NORW;</span></span>
<span class="line"><span>  } else if (nbytes &lt; 0) {</span></span>
<span class="line"><span>    if (errno == EAGAIN || errno == EWOULDBLOCK) {</span></span>
<span class="line"><span>      // 套接字 *实际* 并没有准备好接收，等到它就绪。</span></span>
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
<span class="line"><span>  // 如果没有数据要发送给客户端，报告读取状态作为最后接收的结果。</span></span>
<span class="line"><span>  return (fd_status_t){.want_read = !ready_to_send,</span></span>
<span class="line"><span>                       .want_write = ready_to_send};</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>peer_state_t</code> 是全状态对象，用来表示在主循环中两次回调函数调用之间的客户端的连接。因为回调函数在客户端发送的某些数据时被调用，不能假设它能够不停地与客户端通信，并且它得运行得很快，不能被阻塞。因为套接字被设置成非阻塞模式，<code>recv</code> 会快速的返回。除了调用 <code>recv</code>， 这个句柄做的是处理状态，没有其它的调用，从而不会发生阻塞。</p><p>举个例子，你知道为什么这个代码需要一个额外的状态吗？这个系列中，我们的服务器目前只用到了两个状态，但是这个服务器程序需要三个状态。</p><p>来看看 “套接字准备好发送” 的回调函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fd_status_t on_peer_ready_send(int sockfd) {</span></span>
<span class="line"><span>  assert(sockfd &lt; MAXFDs);</span></span>
<span class="line"><span>  peer_state_t* peerstate = &amp;global_state[sockfd];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (peerstate-&gt;sendptr &gt;= peerstate-&gt;sendbuf_end) {</span></span>
<span class="line"><span>    // 没有要发送的。</span></span>
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
<span class="line"><span>    // 所有东西都成功发送；重置发送队列。</span></span>
<span class="line"><span>    peerstate-&gt;sendptr = 0;</span></span>
<span class="line"><span>    peerstate-&gt;sendbuf_end = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果我们现在是处于特殊的 INITIAL_ACK 状态，就转变到其他状态。</span></span>
<span class="line"><span>    if (peerstate-&gt;state == INITIAL_ACK) {</span></span>
<span class="line"><span>      peerstate-&gt;state = WAIT_FOR_MSG;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return fd_status_R;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里也一样，回调函数调用了一个非阻塞的 <code>send</code>，演示了状态管理。在异步代码中，回调函数执行的很快是受争议的，任何延迟都会阻塞主循环进行处理，因此也阻塞了整个服务器程序去处理其他的客户端。</p><p>用脚步再来运行这个服务器，同时连接 3 个客户端。在一个终端中我们运行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./select-server</span></span></code></pre></div><p>在另一个终端中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 simple-client.py  -n 3 localhost 9090</span></span>
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
<span class="line"><span>INFO:2017-09-26 05:29:18,070:conn2 disconnecting</span></span></code></pre></div>`,13)),a("p",null,[s[31]||(s[31]=n("和线程的情况相似，客户端之间没有延迟，它们被同时处理。而且在 ",-1)),s[32]||(s[32]=a("code",null,"select-server",-1)),s[33]||(s[33]=n(" 也没有用线程！主循环 ",-1)),s[34]||(s[34]=a("em",null,"多路",-1)),s[35]||(s[35]=n(" 处理所有的客户端，通过高效使用 ",-1)),s[36]||(s[36]=a("code",null,"select",-1)),s[37]||(s[37]=n(" 轮询多个套接字。回想下 ",-1)),e(p,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[30]||(s[30]=[n("第二节中",-1)])]),_:1}),s[38]||(s[38]=n(" 顺序的 vs 多线程的客户端处理过程的图片。对于我们的 ",-1)),s[39]||(s[39]=a("code",null,"select-server",-1)),s[40]||(s[40]=n("，三个客户端的处理流程像这样：",-1))]),s[85]||(s[85]=i('<p><img src="https://eli.thegreenplace.net/images/2017/multiplexed-flow.png" alt="多客户端处理流程"></p><p>所有的客户端在同一个线程中同时被处理，通过乘积，做一点这个客户端的任务，然后切换到另一个，再切换到下一个，最后切换回到最开始的那个客户端。注意，这里没有什么循环调度，客户端在它们发送数据的时候被客户端处理，这实际上是受客户端左右的。</p><h3 id="同步、异步、事件驱动、回调" tabindex="-1">同步、异步、事件驱动、回调 <a class="header-anchor" href="#同步、异步、事件驱动、回调" aria-label="Permalink to “同步、异步、事件驱动、回调”">​</a></h3><p><code>select-server</code> 示例代码为讨论什么是异步编程、它和事件驱动及基于回调的编程有何联系，提供了一个良好的背景。因为这些词汇在并发服务器的（非常矛盾的）讨论中很常见。</p><p>让我们从一段 <code>select</code> 的手册页面中引用的一句话开始：</p><blockquote><p>select，pselect，FD_CLR，FD_ISSET，FD_SET，FD_ZERO - 同步 I/O 处理</p></blockquote><p>因此 <code>select</code> 是 <em>同步</em> 处理。但我刚刚演示了大量代码的例子，使用 <code>select</code> 作为 <em>异步</em> 处理服务器的例子。有哪些东西？</p><p>答案是：这取决于你的观察角度。同步常用作阻塞处理，并且对 <code>select</code> 的调用实际上是阻塞的。和第 1、2 节中讲到的顺序的、多线程的服务器中对 <code>send</code> 和 <code>recv</code> 是一样的。因此说 <code>select</code> 是 <em>同步的</em> API 是有道理的。可是，服务器的设计却可以是 <em>异步的</em>，或是 <em>基于回调的</em>，或是 <em>事件驱动的</em>，尽管其中有对 <code>select</code> 的使用。注意这里的 <code>on_peer_*</code> 函数是回调函数；它们永远不会阻塞，并且只有网络事件触发的时候才会被调用。它们可以获得部分数据，并能够在调用过程中保持稳定的状态。</p><p>如果你曾经做过一些 GUI 编程，这些东西对你来说应该很亲切。有个 “事件循环”，常常完全隐藏在框架里，应用的 “业务逻辑” 建立在回调上，这些回调会在各种事件触发后被调用，用户点击鼠标、选择菜单、定时器触发、数据到达套接字等等。曾经最常见的编程模型是客户端的 JavaScript，这里面有一堆回调函数，它们在浏览网页时用户的行为被触发。</p><h3 id="select-的局限" tabindex="-1">select 的局限 <a class="header-anchor" href="#select-的局限" aria-label="Permalink to “select 的局限”">​</a></h3><p>使用 <code>select</code> 作为第一个异步服务器的例子对于说明这个概念很有用，而且由于 <code>select</code> 是很常见、可移植的 API。但是它也有一些严重的缺陷，在监视的文件描述符非常大的时候就会出现。</p><ol><li>有限的文件描述符的集合大小。</li><li>糟糕的性能。</li></ol><p>从文件描述符的大小开始。<code>FD_SETSIZE</code> 是一个编译期常数，在如今的操作系统中，它的值通常是 1024。它被硬编码在 <code>glibc</code> 的头文件里，并且不容易修改。它把 <code>select</code> 能够监视的文件描述符的数量限制在 1024 以内。曾有些人想要写出能够处理上万个并发访问的客户端请求的服务器，所以这个问题很有现实意义。有一些方法，但是不可移植，也很难用。</p><p>糟糕的性能问题就好解决的多，但是依然非常严重。注意当 <code>select</code> 返回的时候，它向调用者提供的信息是 “就绪的” 描述符的个数，还有被修改过的描述符集合。描述符集映射着描述符“就绪/未就绪”，但是并没有提供什么有效的方法去遍历所有就绪的描述符。如果只有一个描述符是就绪的，最坏的情况是调用者需要遍历 <em>整个集合</em> 来找到那个描述符。这在监视的描述符数量比较少的时候还行，但是如果数量变的很大的时候，这种方法弊端就凸显出了 ^注7 。</p><p>由于这些原因，为了写出高性能的并发服务器， <code>select</code> 已经不怎么用了。每一个流行的操作系统有独特的不可移植的 API，允许用户写出非常高效的事件循环；像框架这样的高级结构还有高级语言通常在一个可移植的接口中包含这些 API。</p><h3 id="epoll" tabindex="-1">epoll <a class="header-anchor" href="#epoll" aria-label="Permalink to “epoll”">​</a></h3><p>举个例子，来看看 <code>epoll</code>，Linux 上的关于高容量 I/O 事件通知问题的解决方案。<code>epoll</code> 高效的关键之处在于它与内核更好的协作。不是使用文件描述符，<code>epoll_wait</code> 用当前准备好的事件填满一个缓冲区。只有准备好的事件添加到了缓冲区，因此没有必要遍历客户端中当前 <em>所有</em> 监视的文件描述符。这简化了查找就绪的描述符的过程，把空间复杂度从 <code>select</code> 中的 O(N) 变为了 O(1)。</p>',17)),a("p",null,[s[42]||(s[42]=n("关于 ",-1)),s[43]||(s[43]=a("code",null,"epoll",-1)),s[44]||(s[44]=n(" API 的完整展示不是这里的目的，网上有很多相关资源。虽然你可能猜到了，我还要写一个不同的并发服务器，这次是用 ",-1)),s[45]||(s[45]=a("code",null,"epool",-1)),s[46]||(s[46]=n(" 而不是 ",-1)),s[47]||(s[47]=a("code",null,"select",-1)),s[48]||(s[48]=n("。完整的示例代码 ",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/epoll-server.c"},{default:l(()=>[...s[41]||(s[41]=[n("在这里",-1)])]),_:1}),s[49]||(s[49]=n("。实际上，由于大部分代码和 ",-1)),s[50]||(s[50]=a("code",null,"用 select 的服务器",-1)),s[51]||(s[51]=n("相同，所以我只会讲要点，在主循环里使用 ",-1)),s[52]||(s[52]=a("code",null,"epoll",-1)),s[53]||(s[53]=n("：",-1))]),s[86]||(s[86]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct epoll_event accept_event;</span></span>
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
<span class="line"><span>      // 监听的套接字就绪了；意味着新客户端正在连接。</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // A peer socket is ready.</span></span>
<span class="line"><span>      if (events[i].events &amp; EPOLLIN) {</span></span>
<span class="line"><span>        // 准备好了读取</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      } else if (events[i].events &amp; EPOLLOUT) {</span></span>
<span class="line"><span>        // 准备好了写入</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过调用 <code>epoll_ctl</code> 来配置 <code>epoll</code>。这时，配置监听的套接字数量，也就是 <code>epoll</code> 监听的描述符的数量。然后分配一个缓冲区，把就绪的事件传给 <code>epoll</code> 以供修改。在主循环里对 <code>epoll_wait</code> 的调用是魅力所在。它阻塞着，直到某个描述符就绪了（或者超时），返回就绪的描述符数量。但这时，不要盲目地迭代所有监视的集合，我们知道 <code>epoll_write</code> 会修改传给它的 <code>events</code> 缓冲区，缓冲区中有就绪的事件，从 0 到 <code>nready-1</code>，因此我们只需迭代必要的次数。</p><p>要在 <code>select</code> 里面重新遍历，有明显的差异：如果在监视着 1000 个描述符，只有两个就绪， <code>epoll_waits</code> 返回的是 <code>nready=2</code>，然后修改 <code>events</code> 缓冲区最前面的两个元素，因此我们只需要“遍历”两个描述符。用 <code>select</code> 我们就需要遍历 1000 个描述符，找出哪个是就绪的。因此，在繁忙的服务器上，有许多活跃的套接字时 <code>epoll</code> 比 <code>select</code> 更加容易扩展。</p><p>剩下的代码很直观，因为我们已经很熟悉 “select 服务器” 了。实际上，“epoll 服务器” 中的所有“业务逻辑”和 “select 服务器” 是一样的，回调构成相同的代码。</p><p>这种相似是通过将事件循环抽象分离到一个库/框架中。我将会详述这些内容，因为很多优秀的程序员曾经也是这样做的。相反，下一篇文章里我们会了解 libuv，一个最近出现的更加受欢迎的时间循环抽象层。像 libuv 这样的库让我们能够写出并发的异步服务器，并且不用考虑系统调用下繁琐的细节。</p><hr>`,6)),a("ul",null,[s[59]||(s[59]=a("li",null,"注1：我试着在做网络浏览和阅读这两件事的实际差别中突显自己，但经常做得头疼。有很多不同的选项，从“它们是一样的东西”到“一个是另一个的子集”，再到“它们是完全不同的东西”。在面临这样主观的观点时，最好是完全放弃这个问题，专注特殊的例子和用例。",-1)),s[60]||(s[60]=a("li",null,[n("注2：POSIX 表示这可以是 "),a("code",null,"EAGAIN"),n("，也可以是 "),a("code",null,"EWOULDBLOCK"),n("，可移植应用应该对这两个都进行检查。")],-1)),a("li",null,[s[55]||(s[55]=n("注3：和这个系列所有的 C 示例类似，代码中用到了某些助手工具来设置监听套接字。这些工具的完整代码在这个 ",-1)),e(p,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/utils.h"},{default:l(()=>[...s[54]||(s[54]=[n("仓库",-1)])]),_:1}),s[56]||(s[56]=n(" 的 ",-1)),s[57]||(s[57]=a("code",null,"utils",-1)),s[58]||(s[58]=n(" 模块里。",-1))]),s[61]||(s[61]=i("<li>注4：<code>select</code> 不是网络/套接字专用的函数，它可以监视任意的文件描述符，有可能是硬盘文件、管道、终端、套接字或者 Unix 系统中用到的任何文件描述符。这篇文章里，我们主要关注它在套接字方面的应用。</li><li>注5：有多种方式用多线程来实现事件驱动，我会把它放在稍后的文章中进行讨论。</li><li>注6：由于各种非实验因素，它 <em>仍然</em> 可以阻塞，即使是在 <code>select</code> 说它就绪了之后。因此服务器上打开的所有套接字都被设置成非阻塞模式，如果对 <code>recv</code> 或 <code>send</code> 的调用返回了 <code>EAGAIN</code> 或者 <code>EWOULDBLOCK</code>，回调函数就装作没有事件发生。阅读示例代码的注释可以了解更多细节。</li><li>注7：注意这比该文章前面所讲的异步轮询的例子要稍好一点。轮询需要 <em>一直</em> 发生，而 <code>select</code> 实际上会阻塞到有一个或多个套接字准备好读取/写入；<code>select</code> 会比一直询问浪费少得多的 CPU 时间。</li>",4))]),s[87]||(s[87]=a("hr",null,null,-1)),a("p",null,[s[63]||(s[63]=n("via: ",-1)),e(p,{href:"https://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...s[62]||(s[62]=[n("https://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/",-1)])]),_:1})]),a("p",null,[s[67]||(s[67]=n("作者：",-1)),e(p,{href:"https://eli.thegreenplace.net/pages/about"},{default:l(()=>[...s[64]||(s[64]=[n("Eli Bendersky",-1)])]),_:1}),s[68]||(s[68]=n(" 译者：",-1)),e(p,{href:"https://github.com/GitFuture"},{default:l(()=>[...s[65]||(s[65]=[n("GitFuture",-1)])]),_:1}),s[69]||(s[69]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[66]||(s[66]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[72]||(s[72]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[70]||(s[70]=[n("LCTT",-1)])]),_:1}),s[73]||(s[73]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[71]||(s[71]=[n("Linux中国",-1)])]),_:1}),s[74]||(s[74]=n(" 荣誉推出",-1))])])}const I=t(r,[["render",u]]);export{C as __pageData,I as default};
