import{_ as t,a0 as o,w as r,s as d,I as a,x as s,a1 as p,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"并发服务器（一）：简介 | LCTT x X-CMD","titleTemplate":false,"description":"并发服务器（一）：简介 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"并发服务器（一）：简介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"并发服务器（一）：简介 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20171002 Concurrent Servers Part 1 - Introduction","title":"并发服务器（一）：简介","tag":"201710","desc":""},"relativePath":"201710/20171002 Concurrent Servers Part 1 - Introduction.md","filePath":"[post].md"}'),c={name:"201710/20171002 Concurrent Servers Part 1 - Introduction.md"};function u(b,n,f,g,k,m){const e=o("Link");return r(),d("div",null,[n[41]||(n[41]=a("h1",{id:"并发服务器-一-简介",tabindex:"-1"},[s("并发服务器（一）：简介 "),a("a",{class:"header-anchor",href:"#并发服务器-一-简介","aria-label":"Permalink to “并发服务器（一）：简介”"},"​")],-1)),n[42]||(n[42]=a("p",null,"这是关于并发网络服务器编程的第一篇教程。我计划测试几个主流的、可以同时处理多个客户端请求的服务器并发模型，基于可扩展性和易实现性对这些模型进行评判。所有的服务器都会监听套接字连接，并且实现一些简单的协议用于与客户端进行通讯。",-1)),n[43]||(n[43]=a("p",null,"该系列的所有文章：",-1)),a("ul",null,[a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/"},{default:l(()=>[...n[0]||(n[0]=[s("第一节 - 简介",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-2-threads/"},{default:l(()=>[...n[1]||(n[1]=[s("第二节 - 线程",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...n[2]||(n[2]=[s("第三节 - 事件驱动",-1)])]),_:1})])]),n[44]||(n[44]=i('<h3 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to “协议”">​</a></h3><p>该系列教程所用的协议都非常简单，但足以展示并发服务器设计的许多有趣层面。而且这个协议是 <em>有状态的</em> —— 服务器根据客户端发送的数据改变内部状态，然后根据内部状态产生相应的行为。并非所有的协议都是有状态的 —— 实际上，基于 HTTP 的许多协议是无状态的，但是有状态的协议也是很常见，值得认真讨论。</p><p>在服务器端看来，这个协议的视图是这样的：</p><p><img src="https://raw.githubusercontent.com/LCTT/wiki-images/master/TranslateProject/ref_img/005.png" alt=""></p><p>总之：服务器等待新客户端的连接；当一个客户端连接的时候，服务器会向该客户端发送一个 <code>*</code> 字符，进入“等待消息”的状态。在该状态下，服务器会忽略客户端发送的所有字符，除非它看到了一个 <code>^</code> 字符，这表示一个新消息的开始。这个时候服务器就会转变为“正在通信”的状态，这时它会向客户端回送数据，把收到的所有字符的每个字节加 1 回送给客户端^注1 。当客户端发送了 <code>$</code> 字符，服务器就会退回到等待新消息的状态。<code>^</code> 和 <code>$</code> 字符仅仅用于分隔消息 —— 它们不会被服务器回送。</p><p>每个状态之后都有个隐藏的箭头指向 “等待客户端” 状态，用来客户端断开连接。因此，客户端要表示“我已经结束”的方法很简单，关掉它那一端的连接就好。</p><p>显然，这个协议是真实协议的简化版，真实使用的协议一般包含复杂的报文头、转义字符序列（例如让消息体中可以出现 <code>$</code> 符号），额外的状态变化。但是我们这个协议足以完成期望。</p><p>另一点：这个系列是介绍性的，并假设客户端都工作的很好（虽然可能运行很慢）；因此没有设置超时，也没有设置特殊的规则来确保服务器不会因为客户端的恶意行为（或是故障）而出现阻塞，导致不能正常结束。</p><h3 id="顺序服务器" tabindex="-1">顺序服务器 <a class="header-anchor" href="#顺序服务器" aria-label="Permalink to “顺序服务器”">​</a></h3><p>这个系列中我们的第一个服务端程序是一个简单的“顺序”服务器，用 C 进行编写，除了标准的 POSIX 中用于套接字的内容以外没有使用其它库。服务器程序是顺序，因为它一次只能处理一个客户端的请求；当有客户端连接时，像之前所说的那样，服务器会进入到状态机中，并且不再监听套接字接受新的客户端连接，直到当前的客户端结束连接。显然这不是并发的，而且即便在很少的负载下也不能服务多个客户端，但它对于我们的讨论很有用，因为我们需要的是一个易于理解的基础。</p>',10)),a("p",null,[n[4]||(n[4]=s("这个服务器的完整代码在",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/sequential-server.c"},{default:l(()=>[...n[3]||(n[3]=[s("这里",-1)])]),_:1}),n[5]||(n[5]=s("；接下来，我会着重于一些重点的部分。",-1)),n[6]||(n[6]=a("code",null,"main",-1)),n[7]||(n[7]=s(" 函数里面的外层循环用于监听套接字，以便接受新客户端的连接。一旦有客户端进行连接，就会调用 ",-1)),n[8]||(n[8]=a("code",null,"serve_connection",-1)),n[9]||(n[9]=s("，这个函数中的代码会一直运行，直到客户端断开连接。",-1))]),n[45]||(n[45]=i(`<p>顺序服务器在循环里调用 <code>accept</code> 用来监听套接字，并接受新连接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while (1) {</span></span>
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
<span class="line"><span>  serve_connection(newsockfd);</span></span>
<span class="line"><span>  printf(&quot;peer done\\n&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>accept</code> 函数每次都会返回一个新的已连接的套接字，然后服务器调用 <code>serve_connection</code>；注意这是一个 <em>阻塞式</em> 的调用 —— 在 <code>serve_connection</code> 返回前，<code>accept</code> 函数都不会再被调用了；服务器会被阻塞，直到客户端结束连接才能接受新的连接。换句话说，客户端按 <em>顺序</em> 得到响应。</p><p>这是 <code>serve_connection</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef enum { WAIT_FOR_MSG, IN_MSG } ProcessingState;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void serve_connection(int sockfd) {</span></span>
<span class="line"><span>  if (send(sockfd, &quot;*&quot;, 1, 0) &lt; 1) {</span></span>
<span class="line"><span>    perror_die(&quot;send&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ProcessingState state = WAIT_FOR_MSG;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while (1) {</span></span>
<span class="line"><span>    uint8_t buf[1024];</span></span>
<span class="line"><span>    int len = recv(sockfd, buf, sizeof buf, 0);</span></span>
<span class="line"><span>    if (len &lt; 0) {</span></span>
<span class="line"><span>      perror_die(&quot;recv&quot;);</span></span>
<span class="line"><span>    } else if (len == 0) {</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (int i = 0; i &lt; len; ++i) {</span></span>
<span class="line"><span>      switch (state) {</span></span>
<span class="line"><span>      case WAIT_FOR_MSG:</span></span>
<span class="line"><span>        if (buf[i] == &#39;^&#39;) {</span></span>
<span class="line"><span>          state = IN_MSG;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case IN_MSG:</span></span>
<span class="line"><span>        if (buf[i] == &#39;$&#39;) {</span></span>
<span class="line"><span>          state = WAIT_FOR_MSG;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          buf[i] += 1;</span></span>
<span class="line"><span>          if (send(sockfd, &amp;buf[i], 1, 0) &lt; 1) {</span></span>
<span class="line"><span>            perror(&quot;send error&quot;);</span></span>
<span class="line"><span>            close(sockfd);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  close(sockfd);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它完全是按照状态机协议进行编写的。每次循环的时候，服务器尝试接收客户端的数据。收到 0 字节意味着客户端断开连接，然后循环就会退出。否则，会逐字节检查接收缓存，每一个字节都可能会触发一个状态。</p><p><code>recv</code> 函数返回接收到的字节数与客户端发送消息的数量完全无关（<code>^...$</code> 闭合序列的字节）。因此，在保持状态的循环中遍历整个缓冲区很重要。而且，每一个接收到的缓冲中可能包含多条信息，但也有可能开始了一个新消息，却没有显式的结束字符；而这个结束字符可能在下一个缓冲中才能收到，这就是处理状态在循环迭代中进行维护的原因。</p><p>例如，试想主循环中的 <code>recv</code> 函数在某次连接中返回了三个非空的缓冲：</p><ol><li><code>^abc$de^abte$f</code></li><li><code>xyz^123</code></li><li><code>25$^ab$abab</code></li></ol>`,9)),a("p",null,[n[11]||(n[11]=s("服务端返回的是哪些数据？追踪代码对于理解状态转变很有用。（答案见^注",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Mealy_machine"},{default:l(()=>[...n[10]||(n[10]=[s("2",-1)])]),_:1}),n[12]||(n[12]=s(" ）",-1))]),n[46]||(n[46]=a("h3",{id:"多个并发客户端",tabindex:"-1"},[s("多个并发客户端 "),a("a",{class:"header-anchor",href:"#多个并发客户端","aria-label":"Permalink to “多个并发客户端”"},"​")],-1)),n[47]||(n[47]=a("p",null,"如果多个客户端在同一时刻向顺序服务器发起连接会发生什么事情？",-1)),n[48]||(n[48]=a("p",null,[s("服务器端的代码（以及它的名字 “顺序服务器”）已经说的很清楚了，一次只能处理 "),a("em",null,"一个"),s(" 客户端的请求。只要服务器在 "),a("code",null,"serve_connection"),s(" 函数中忙于处理客户端的请求，就不会接受别的客户端的连接。只有当前的客户端断开了连接，"),a("code",null,"serve_connection"),s(" 才会返回，然后最外层的循环才能继续执行接受其他客户端的连接。")],-1)),a("p",null,[n[14]||(n[14]=s("为了演示这个行为，",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/tree/master/2017/async-socket-server"},{default:l(()=>[...n[13]||(n[13]=[s("该系列教程的示例代码",-1)])]),_:1}),n[15]||(n[15]=s(" 包含了一个 Python 脚本，用于模拟几个想要同时连接服务器的客户端。每一个客户端发送类似之前那样的三个数据缓冲 ^注3 ，不过每次发送数据之间会有一定延迟。",-1))]),n[49]||(n[49]=i(`<p>客户端脚本在不同的线程中并发地模拟客户端行为。这是我们的序列化服务器与客户端交互的信息记录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 simple-client.py  -n 3 localhost 9090</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:17,763:conn1 connected...</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:17,763:conn1 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:17,763:conn1 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:17,802:conn1 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:18,764:conn1 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:18,764:conn1 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:19,764:conn1 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:19,765:conn1 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:19,965:conn1 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:19,966:conn2 connected...</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:19,967:conn2 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:19,967:conn2 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:20,006:conn2 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:20,968:conn2 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:20,969:conn2 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:21,970:conn2 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:21,970:conn2 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:22,171:conn2 disconnecting</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:22,171:conn0 connected...</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:22,172:conn0 sending b&#39;^abc$de^abte$f&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:22,172:conn0 received b&#39;b&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:22,210:conn0 received b&#39;cdbcuf&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:23,173:conn0 sending b&#39;xyz^123&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:23,174:conn0 received b&#39;234&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:24,175:conn0 sending b&#39;25$^ab0000$abab&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:24,176:conn0 received b&#39;36bc1111&#39;</span></span>
<span class="line"><span>INFO:2017-09-16 14:14:24,376:conn0 disconnecting</span></span></code></pre></div><p>这里要注意连接名：<code>conn1</code> 是第一个连接到服务器的，先跟服务器交互了一段时间。接下来的连接 <code>conn2</code> —— 在第一个断开连接后，连接到了服务器，然后第三个连接也是一样。就像日志显示的那样，每一个连接让服务器变得繁忙，持续了大约 2.2 秒的时间（这实际上是人为地在客户端代码中加入的延迟），在这段时间里别的客户端都不能连接。</p><p>显然，这不是一个可扩展的策略。这个例子中，客户端中加入了延迟，让服务器不能处理别的交互动作。一个智能服务器应该能处理一堆客户端的请求，而这个原始的服务器在结束连接之前一直繁忙（我们将会在之后的章节中看到如何实现智能的服务器）。尽管服务端有延迟，但这不会过度占用 CPU；例如，从数据库中查找信息（时间基本上是花在连接到数据库服务器上，或者是花在硬盘中的本地数据库）。</p><h3 id="总结及期望" tabindex="-1">总结及期望 <a class="header-anchor" href="#总结及期望" aria-label="Permalink to “总结及期望”">​</a></h3><p>这个示例服务器达成了两个预期目标：</p><ol><li>首先是介绍了问题范畴和贯彻该系列文章的套接字编程基础。</li><li>对于并发服务器编程的抛砖引玉 —— 就像之前的部分所说，顺序服务器还不能在非常轻微的负载下进行扩展，而且没有高效的利用资源。</li></ol>`,7)),a("p",null,[n[19]||(n[19]=s("在看下一篇文章前，确保你已经理解了这里所讲的服务器/客户端协议，还有顺序服务器的代码。我之前介绍过了这个简单的协议；例如 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2009/08/12/framing-in-serial-communications/"},{default:l(()=>[...n[16]||(n[16]=[s("串行通信分帧",-1)])]),_:1}),n[20]||(n[20]=s(" 和 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2009/08/29/co-routines-as-an-alternative-to-state-machines"},{default:l(()=>[...n[17]||(n[17]=[s("用协程来替代状态机",-1)])]),_:1}),n[21]||(n[21]=s("。要学习套接字网络编程的基础，",-1)),p(e,{href:"http://beej.us/guide/bgnet/"},{default:l(()=>[...n[18]||(n[18]=[s("Beej 的教程",-1)])]),_:1}),n[22]||(n[22]=s(" 用来入门很不错，但是要深入理解我推荐你还是看本书。",-1))]),n[50]||(n[50]=a("p",null,"如果有什么不清楚的，请在评论区下进行评论或者向我发送邮件。深入理解并发服务器！",-1)),n[51]||(n[51]=a("hr",null,null,-1)),a("ul",null,[a("li",null,[n[24]||(n[24]=s("注1：状态转变中的 In/Out 记号是指 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Mealy_machine"},{default:l(()=>[...n[23]||(n[23]=[s("Mealy machine",-1)])]),_:1}),n[25]||(n[25]=s("。",-1))]),n[26]||(n[26]=a("li",null,[s("注2：回应的是 "),a("code",null,"bcdbcuf23436bc"),s("。")],-1)),n[27]||(n[27]=a("li",null,[s("注3：这里在结尾处有一点小区别，加了字符串 "),a("code",null,"0000"),s(" —— 服务器回应这个序列，告诉客户端让其断开连接；这是一个简单的握手协议，确保客户端有足够的时间接收到服务器发送的所有回复。")],-1))]),n[52]||(n[52]=a("hr",null,null,-1)),a("p",null,[n[29]||(n[29]=s("via: ",-1)),p(e,{href:"https://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/"},{default:l(()=>[...n[28]||(n[28]=[s("https://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("作者：",-1)),p(e,{href:"https://eli.thegreenplace.net/pages/about"},{default:l(()=>[...n[30]||(n[30]=[s("Eli Bendersky",-1)])]),_:1}),n[34]||(n[34]=s(" 译者：",-1)),p(e,{href:"https://github.com/GitFuture"},{default:l(()=>[...n[31]||(n[31]=[s("GitFuture",-1)])]),_:1}),n[35]||(n[35]=s(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...n[32]||(n[32]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[38]||(n[38]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[36]||(n[36]=[s("LCTT",-1)])]),_:1}),n[39]||(n[39]=s(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...n[37]||(n[37]=[s("Linux中国",-1)])]),_:1}),n[40]||(n[40]=s(" 荣誉推出",-1))])])}const N=t(c,[["render",u]]);export{T as __pageData,N as default};
