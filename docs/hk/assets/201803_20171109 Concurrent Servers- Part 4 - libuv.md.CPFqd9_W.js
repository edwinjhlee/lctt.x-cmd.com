import{_ as t,a0 as r,w as o,s as c,I as a,x as n,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"併發服務器（四）：libuv | LCTT x X-CMD","titleTemplate":false,"description":"併發服務器（四）：libuv | LCTT (201803) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"併發服務器（四）：libuv | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"併發服務器（四）：libuv | LCTT (201803) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201803/20171109 Concurrent Servers- Part 4 - libuv","title":"併發服務器（四）：libuv","tag":"201803","desc":""},"relativePath":"201803/20171109 Concurrent Servers- Part 4 - libuv.md","filePath":"[post].md"}'),d={name:"201803/20171109 Concurrent Servers- Part 4 - libuv.md"};function u(_,s,f,b,v,g){const e=r("Link");return o(),c("div",null,[s[36]||(s[36]=a("h1",{id:"併發服務器-四-libuv",tabindex:"-1"},[n("併發服務器（四）：libuv "),a("a",{class:"header-anchor",href:"#併發服務器-四-libuv","aria-label":"Permalink to “併發服務器（四）：libuv”"},"​")],-1)),s[37]||(s[37]=a("p",null,"這是併發網絡服務器系列文章的第四部分。在這一部分中，我們將使用 libuv 再次重寫我們的服務器，並且也會討論關於使用一個線程池在回調中去處理耗時任務。最終，我們去看一下底層的 libuv，花一點時間去學習如何用異步 API 對文件系統阻塞操作進行封裝。",-1)),s[38]||(s[38]=a("p",null,"本系列的所有文章：",-1)),a("ul",null,[a("li",null,[p(e,{href:"https://linux.cn/article-8993-1.html"},{default:l(()=>[...s[0]||(s[0]=[n("第一節 - 簡介",-1)])]),_:1})]),a("li",null,[p(e,{href:"https://linux.cn/article-9002-1.html"},{default:l(()=>[...s[1]||(s[1]=[n("第二節 - 線程",-1)])]),_:1})]),a("li",null,[p(e,{href:"https://linux.cn/article-9117-1.html"},{default:l(()=>[...s[2]||(s[2]=[n("第三節 - 事件驅動",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-4-libuv/"},{default:l(()=>[...s[3]||(s[3]=[n("第四節 - libuv",-1)])]),_:1})])]),s[39]||(s[39]=a("h3",{id:"使用-libuv-抽象出事件驅動循環",tabindex:"-1"},[n("使用 libuv 抽象出事件驅動循環 "),a("a",{class:"header-anchor",href:"#使用-libuv-抽象出事件驅動循環","aria-label":"Permalink to “使用 libuv 抽象出事件驅動循環”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("在 ",-1)),p(e,{href:"https://linux.cn/article-9117-1.html"},{default:l(()=>[...s[4]||(s[4]=[n("第三節",-1)])]),_:1}),s[7]||(s[7]=n(" 中，我們看到了基於 ",-1)),s[8]||(s[8]=a("code",null,"select",-1)),s[9]||(s[9]=n(" 和 ",-1)),s[10]||(s[10]=a("code",null,"epoll",-1)),s[11]||(s[11]=n(" 的服務器的相似之處，並且，我説過，在它們之間抽象出細微的差別是件很有吸引力的事。許多庫已經做到了這些，所以在這一部分中我將去選一個並使用它。我選的這個庫是 ",-1)),p(e,{href:"http://libuv.org/"},{default:l(()=>[...s[5]||(s[5]=[n("libuv",-1)])]),_:1}),s[12]||(s[12]=n("，它最初設計用於 Node.js 底層的可移植平台層，並且，後來發現在其它的項目中也有使用。libuv 是用 C 寫的，因此，它具有很高的可移植性，非常適用嵌入到像 JavaScript 和 Python 這樣的高級語言中。",-1))]),s[40]||(s[40]=i('<p>雖然 libuv 為了抽象出底層平台細節已經變成了一個相當大的框架，但它仍然是以 <em>事件循環</em> 思想為中心的。在我們第三部分的事件驅動服務器中，事件循環是顯式定義在 <code>main</code> 函數中的；當使用 libuv 時，該循環通常隱藏在庫自身中，而用户代碼僅需要註冊事件句柄（作為一個回調函數）和運行這個循環。此外，libuv 會在給定的平台上使用更快的事件循環實現，對於 Linux 它是 <code>epoll</code>，等等。</p><p><img src="https://eli.thegreenplace.net/images/2017/libuvloop.png" alt="libuv loop"></p><p>libuv 支持多路事件循環，因此事件循環在庫中是非常重要的；它有一個句柄 —— <code>uv_loop_t</code>，以及創建/殺死/啓動/停止循環的函數。也就是説，在這篇文章中，我將僅需要使用 “默認的” 循環，libuv 可通過 <code>uv_default_loop()</code> 提供它；多路循環大多用於多線程事件驅動的服務器，這是一個更高級別的話題，我將留在這一系列文章的以後部分。</p><h3 id="使用-libuv-的併發服務器" tabindex="-1">使用 libuv 的併發服務器 <a class="header-anchor" href="#使用-libuv-的併發服務器" aria-label="Permalink to “使用 libuv 的併發服務器”">​</a></h3>',4)),a("p",null,[s[14]||(s[14]=n("為了對 libuv 有一個更深的印象，讓我們跳轉到我們的可靠協議的服務器，它通過我們的這個系列已經有了一個強大的重新實現。這個服務器的結構與第三部分中的基於 ",-1)),s[15]||(s[15]=a("code",null,"select",-1)),s[16]||(s[16]=n(" 和 ",-1)),s[17]||(s[17]=a("code",null,"epoll",-1)),s[18]||(s[18]=n(" 的服務器有一些相似之處，因為，它也依賴回調。完整的 ",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/uv-server.c"},{default:l(()=>[...s[13]||(s[13]=[n("示例代碼在這裏",-1)])]),_:1}),s[19]||(s[19]=n("；我們開始設置這個服務器的套接字綁定到一個本地端口：",-1))]),s[41]||(s[41]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int portnum = 9090;</span></span>
<span class="line"><span>if (argc &gt;= 2) {</span></span>
<span class="line"><span>  portnum = atoi(argv[1]);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>printf(&quot;Serving on port %d\\n&quot;, portnum);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int rc;</span></span>
<span class="line"><span>uv_tcp_t server_stream;</span></span>
<span class="line"><span>if ((rc = uv_tcp_init(uv_default_loop(), &amp;server_stream)) &lt; 0) {</span></span>
<span class="line"><span>  die(&quot;uv_tcp_init failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct sockaddr_in server_address;</span></span>
<span class="line"><span>if ((rc = uv_ip4_addr(&quot;0.0.0.0&quot;, portnum, &amp;server_address)) &lt; 0) {</span></span>
<span class="line"><span>  die(&quot;uv_ip4_addr failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ((rc = uv_tcp_bind(&amp;server_stream, (const struct sockaddr*)&amp;server_address, 0)) &lt; 0) {</span></span>
<span class="line"><span>  die(&quot;uv_tcp_bind failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>除了它被封裝進 libuv API 中之外，你看到的是一個相當標準的套接字。在它的返回中，我們取得了一個可工作於任何 libuv 支持的平台上的可移植接口。</p><p>這些代碼也展示了很認真負責的錯誤處理；多數的 libuv 函數返回一個整數狀態，返回一個負數意味着出現了一個錯誤。在我們的服務器中，我們把這些錯誤看做致命問題進行處理，但也可以設想一個更優雅的錯誤恢復。</p><p>現在，那個套接字已經綁定，是時候去監聽它了。這裏我們運行首個回調註冊：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Listen on the socket for new peers to connect. When a new peer connects,</span></span>
<span class="line"><span>// the on_peer_connected callback will be invoked.</span></span>
<span class="line"><span>if ((rc = uv_listen((uv_stream_t*)&amp;server_stream, N_BACKLOG, on_peer_connected)) &lt; 0) {</span></span>
<span class="line"><span>  die(&quot;uv_listen failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>uv_listen</code> 註冊一個事件回調，當新的對端連接到這個套接字時將會調用事件循環。我們的回調在這裏被稱為 <code>on_peer_connected</code>，我們一會兒將去查看它。</p><p>最終，<code>main</code> 運行這個 libuv 循環，直到它被停止（<code>uv_run</code> 僅在循環被停止或者發生錯誤時返回）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Run the libuv event loop.</span></span>
<span class="line"><span>uv_run(uv_default_loop(), UV_RUN_DEFAULT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// If uv_run returned, close the default loop before exiting.</span></span>
<span class="line"><span>return uv_loop_close(uv_default_loop());</span></span></code></pre></div><p>注意，在運行事件循環之前，只有一個回調是通過 <code>main</code> 註冊的；我們稍後將看到怎麼去添加更多的回調。在事件循環的整個運行過程中，添加和刪除回調並不是一個問題 —— 事實上，大多數服務器就是這麼寫的。</p><p>這是一個 <code>on_peer_connected</code>，它處理到服務器的新的客户端連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void on_peer_connected(uv_stream_t* server_stream, int status) {</span></span>
<span class="line"><span>  if (status &lt; 0) {</span></span>
<span class="line"><span>    fprintf(stderr, &quot;Peer connection error: %s\\n&quot;, uv_strerror(status));</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // client will represent this peer; it&#39;s allocated on the heap and only</span></span>
<span class="line"><span>  // released when the client disconnects. The client holds a pointer to</span></span>
<span class="line"><span>  // peer_state_t in its data field; this peer state tracks the protocol state</span></span>
<span class="line"><span>  // with this client throughout interaction.</span></span>
<span class="line"><span>  uv_tcp_t* client = (uv_tcp_t*)xmalloc(sizeof(*client));</span></span>
<span class="line"><span>  int rc;</span></span>
<span class="line"><span>  if ((rc = uv_tcp_init(uv_default_loop(), client)) &lt; 0) {</span></span>
<span class="line"><span>    die(&quot;uv_tcp_init failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  client-&gt;data = NULL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (uv_accept(server_stream, (uv_stream_t*)client) == 0) {</span></span>
<span class="line"><span>    struct sockaddr_storage peername;</span></span>
<span class="line"><span>    int namelen = sizeof(peername);</span></span>
<span class="line"><span>    if ((rc = uv_tcp_getpeername(client, (struct sockaddr*)&amp;peername,</span></span>
<span class="line"><span>                                 &amp;namelen)) &lt; 0) {</span></span>
<span class="line"><span>      die(&quot;uv_tcp_getpeername failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    report_peer_connected((const struct sockaddr_in*)&amp;peername, namelen);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Initialize the peer state for a new client: we start by sending the peer</span></span>
<span class="line"><span>    // the initial &#39;*&#39; ack.</span></span>
<span class="line"><span>    peer_state_t* peerstate = (peer_state_t*)xmalloc(sizeof(*peerstate));</span></span>
<span class="line"><span>    peerstate-&gt;state = INITIAL_ACK;</span></span>
<span class="line"><span>    peerstate-&gt;sendbuf[0] = &#39;*&#39;;</span></span>
<span class="line"><span>    peerstate-&gt;sendbuf_end = 1;</span></span>
<span class="line"><span>    peerstate-&gt;client = client;</span></span>
<span class="line"><span>    client-&gt;data = peerstate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Enqueue the write request to send the ack; when it&#39;s done,</span></span>
<span class="line"><span>    // on_wrote_init_ack will be called. The peer state is passed to the write</span></span>
<span class="line"><span>    // request via the data pointer; the write request does not own this peer</span></span>
<span class="line"><span>    // state - it&#39;s owned by the client handle.</span></span>
<span class="line"><span>    uv_buf_t writebuf = uv_buf_init(peerstate-&gt;sendbuf, peerstate-&gt;sendbuf_end);</span></span>
<span class="line"><span>    uv_write_t* req = (uv_write_t*)xmalloc(sizeof(*req));</span></span>
<span class="line"><span>    req-&gt;data = peerstate;</span></span>
<span class="line"><span>    if ((rc = uv_write(req, (uv_stream_t*)client, &amp;writebuf, 1,</span></span>
<span class="line"><span>                       on_wrote_init_ack)) &lt; 0) {</span></span>
<span class="line"><span>      die(&quot;uv_write failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    uv_close((uv_handle_t*)client, on_client_closed);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這些代碼都有很好的註釋，但是，這裏有一些重要的 libuv 語法我想去強調一下：</p><ul><li>傳入自定義數據到回調中：因為 C 語言還沒有閉包，這可能是個挑戰，libuv 在它的所有的處理類型中有一個 <code>void* data</code> 字段；這些字段可以被用於傳遞用户數據。例如，注意 <code>client-&gt;data</code> 是如何指向到一個 <code>peer_state_t</code> 結構上，以便於 <code>uv_write</code> 和 <code>uv_read_start</code> 註冊的回調可以知道它們正在處理的是哪個客户端的數據。</li><li>內存管理：在帶有垃圾回收的語言中進行事件驅動編程是非常容易的，因為，回調通常運行在一個與它們註冊的地方完全不同的棧幀中，使得基於棧的內存管理很困難。它總是需要傳遞堆分配的數據到 libuv 回調中（當所有回調運行時，除了 <code>main</code>，其它的都運行在棧上），並且，為了避免泄漏，許多情況下都要求這些數據去安全釋放（<code>free()</code>）。這些都是些需要實踐的內容 ^注1 。</li></ul><p>這個服務器上對端的狀態如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  ProcessingState state;</span></span>
<span class="line"><span>  char sendbuf[SENDBUF_SIZE];</span></span>
<span class="line"><span>  int sendbuf_end;</span></span>
<span class="line"><span>  uv_tcp_t* client;</span></span>
<span class="line"><span>} peer_state_t;</span></span></code></pre></div><p>它與第三部分中的狀態非常類似；我們不再需要 <code>sendptr</code>，因為，在調用 “done writing” 回調之前，<code>uv_write</code> 將確保發送它提供的整個緩衝。我們也為其它的回調使用保持了一個到客户端的指針。這裏是 <code>on_wrote_init_ack</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void on_wrote_init_ack(uv_write_t* req, int status) {</span></span>
<span class="line"><span>  if (status) {</span></span>
<span class="line"><span>    die(&quot;Write error: %s\\n&quot;, uv_strerror(status));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  peer_state_t* peerstate = (peer_state_t*)req-&gt;data;</span></span>
<span class="line"><span>  // Flip the peer state to WAIT_FOR_MSG, and start listening for incoming data</span></span>
<span class="line"><span>  // from this peer.</span></span>
<span class="line"><span>  peerstate-&gt;state = WAIT_FOR_MSG;</span></span>
<span class="line"><span>  peerstate-&gt;sendbuf_end = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int rc;</span></span>
<span class="line"><span>  if ((rc = uv_read_start((uv_stream_t*)peerstate-&gt;client, on_alloc_buffer,</span></span>
<span class="line"><span>                          on_peer_read)) &lt; 0) {</span></span>
<span class="line"><span>    die(&quot;uv_read_start failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Note: the write request doesn&#39;t own the peer state, hence we only free the</span></span>
<span class="line"><span>  // request itself, not the state.</span></span>
<span class="line"><span>  free(req);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然後，我們確信知道了這個初始的 <code>&#39;*&#39;</code> 已經被髮送到對端，我們通過調用 <code>uv_read_start</code> 去監聽從這個對端來的入站數據，它註冊一個將被事件循環調用的回調（<code>on_peer_read</code>），不論什麼時候，事件循環都在套接字上接收來自客户端的調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void on_peer_read(uv_stream_t* client, ssize_t nread, const uv_buf_t* buf) {</span></span>
<span class="line"><span>  if (nread &lt; 0) {</span></span>
<span class="line"><span>    if (nread != uv_eof) {</span></span>
<span class="line"><span>      fprintf(stderr, &quot;read error: %s\\n&quot;, uv_strerror(nread));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    uv_close((uv_handle_t*)client, on_client_closed);</span></span>
<span class="line"><span>  } else if (nread == 0) {</span></span>
<span class="line"><span>    // from the documentation of uv_read_cb: nread might be 0, which does not</span></span>
<span class="line"><span>    // indicate an error or eof. this is equivalent to eagain or ewouldblock</span></span>
<span class="line"><span>    // under read(2).</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // nread &gt; 0</span></span>
<span class="line"><span>    assert(buf-&gt;len &gt;= nread);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    peer_state_t* peerstate = (peer_state_t*)client-&gt;data;</span></span>
<span class="line"><span>    if (peerstate-&gt;state == initial_ack) {</span></span>
<span class="line"><span>      // if the initial ack hasn&#39;t been sent for some reason, ignore whatever</span></span>
<span class="line"><span>      // the client sends in.</span></span>
<span class="line"><span>      free(buf-&gt;base);</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // run the protocol state machine.</span></span>
<span class="line"><span>    for (int i = 0; i &lt; nread; ++i) {</span></span>
<span class="line"><span>      switch (peerstate-&gt;state) {</span></span>
<span class="line"><span>      case initial_ack:</span></span>
<span class="line"><span>        assert(0 &amp;&amp; &quot;can&#39;t reach here&quot;);</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case wait_for_msg:</span></span>
<span class="line"><span>        if (buf-&gt;base[i] == &#39;^&#39;) {</span></span>
<span class="line"><span>          peerstate-&gt;state = in_msg;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case in_msg:</span></span>
<span class="line"><span>        if (buf-&gt;base[i] == &#39;$&#39;) {</span></span>
<span class="line"><span>          peerstate-&gt;state = wait_for_msg;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          assert(peerstate-&gt;sendbuf_end &lt; sendbuf_size);</span></span>
<span class="line"><span>          peerstate-&gt;sendbuf[peerstate-&gt;sendbuf_end++] = buf-&gt;base[i] + 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (peerstate-&gt;sendbuf_end &gt; 0) {</span></span>
<span class="line"><span>      // we have data to send. the write buffer will point to the buffer stored</span></span>
<span class="line"><span>      // in the peer state for this client.</span></span>
<span class="line"><span>      uv_buf_t writebuf =</span></span>
<span class="line"><span>          uv_buf_init(peerstate-&gt;sendbuf, peerstate-&gt;sendbuf_end);</span></span>
<span class="line"><span>      uv_write_t* writereq = (uv_write_t*)xmalloc(sizeof(*writereq));</span></span>
<span class="line"><span>      writereq-&gt;data = peerstate;</span></span>
<span class="line"><span>      int rc;</span></span>
<span class="line"><span>      if ((rc = uv_write(writereq, (uv_stream_t*)client, &amp;writebuf, 1,</span></span>
<span class="line"><span>                         on_wrote_buf)) &lt; 0) {</span></span>
<span class="line"><span>        die(&quot;uv_write failed: %s&quot;, uv_strerror(rc));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  free(buf-&gt;base);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個服務器的運行時行為非常類似於第三部分的事件驅動服務器：所有的客户端都在一個單個的線程中併發處理。並且類似的，一些特定的行為必須在服務器代碼中維護：服務器的邏輯實現為一個集成的回調，並且長週期運行是禁止的，因為它會阻塞事件循環。這一點也很類似。讓我們進一步探索這個問題。</p><h3 id="在事件驅動循環中的長週期運行的操作" tabindex="-1">在事件驅動循環中的長週期運行的操作 <a class="header-anchor" href="#在事件驅動循環中的長週期運行的操作" aria-label="Permalink to “在事件驅動循環中的長週期運行的操作”">​</a></h3><p>單線程的事件驅動代碼使它先天就容易受到一些常見問題的影響：長週期運行的代碼會阻塞整個循環。參見如下的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void on_timer(uv_timer_t* timer) {</span></span>
<span class="line"><span>  uint64_t timestamp = uv_hrtime();</span></span>
<span class="line"><span>  printf(&quot;on_timer [%&quot; PRIu64 &quot; ms]\\n&quot;, (timestamp / 1000000) % 100000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // &quot;Work&quot;</span></span>
<span class="line"><span>  if (random() % 5 == 0) {</span></span>
<span class="line"><span>    printf(&quot;Sleeping...\\n&quot;);</span></span>
<span class="line"><span>    sleep(3);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, const char** argv) {</span></span>
<span class="line"><span>  uv_timer_t timer;</span></span>
<span class="line"><span>  uv_timer_init(uv_default_loop(), &amp;timer);</span></span>
<span class="line"><span>  uv_timer_start(&amp;timer, on_timer, 0, 1000);</span></span>
<span class="line"><span>  return uv_run(uv_default_loop(), UV_RUN_DEFAULT);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>它用一個單個註冊的回調運行一個 libuv 事件循環：<code>on_timer</code>，它被每秒鐘循環調用一次。回調報告一個時間戳，並且，偶爾通過睡眠 3 秒去模擬一個長週期運行。這是運行示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./uv-timer-sleep-demo</span></span>
<span class="line"><span>on_timer [4840 ms]</span></span>
<span class="line"><span>on_timer [5842 ms]</span></span>
<span class="line"><span>on_timer [6843 ms]</span></span>
<span class="line"><span>on_timer [7844 ms]</span></span>
<span class="line"><span>Sleeping...</span></span>
<span class="line"><span>on_timer [11845 ms]</span></span>
<span class="line"><span>on_timer [12846 ms]</span></span>
<span class="line"><span>Sleeping...</span></span>
<span class="line"><span>on_timer [16847 ms]</span></span>
<span class="line"><span>on_timer [17849 ms]</span></span>
<span class="line"><span>on_timer [18850 ms]</span></span>
<span class="line"><span>...</span></span></code></pre></div><p><code>on_timer</code> 忠實地每秒執行一次，直到隨機出現的睡眠為止。在那個時間點，<code>on_timer</code> 不再被調用，直到睡眠時間結束；事實上，<em>沒有其它的回調</em>  會在這個時間幀中被調用。這個睡眠調用阻塞了當前線程，它正是被調用的線程，並且也是事件循環使用的線程。當這個線程被阻塞後，事件循環也被阻塞。</p><p>這個示例演示了在事件驅動的調用中為什麼回調不能被阻塞是多少的重要。並且，同樣適用於 Node.js 服務器、客户端側的 Javascript、大多數的 GUI 編程框架、以及許多其它的異步編程模型。</p><p>但是，有時候運行耗時的任務是不可避免的。並不是所有任務都有一個異步 API；例如，我們可能使用一些僅有同步 API 的庫去處理，或者，正在執行一個可能的長週期計算。我們如何用事件驅動編程去結合這些代碼？線程可以幫到你！</p><h3 id="轉換-阻塞調用為異步調用的線程" tabindex="-1">“轉換” 阻塞調用為異步調用的線程 <a class="header-anchor" href="#轉換-阻塞調用為異步調用的線程" aria-label="Permalink to ““轉換” 阻塞調用為異步調用的線程”">​</a></h3><p>一個線程池可以用於轉換阻塞調用為異步調用，通過與事件循環並行運行，並且當任務完成時去由它去公佈事件。以阻塞函數 <code>do_work()</code> 為例，這裏介紹了它是怎麼運行的：</p><ol><li>不在一個回調中直接調用 <code>do_work()</code> ，而是將它打包進一個 “任務”，讓線程池去運行這個任務。當任務完成時，我們也為循環去調用它註冊一個回調；我們稱它為 <code>on_work_done()</code>。</li><li>在這個時間點，我們的回調就可以返回了，而事件循環保持運行；在同一時間點，線程池中的有一個線程運行這個任務。</li><li>一旦任務運行完成，通知主線程（指正在運行事件循環的線程），並且事件循環調用 <code>on_work_done()</code>。</li></ol><p>讓我們看一下，使用 libuv 的工作調度 API，是怎麼去解決我們前面的計時器/睡眠示例中展示的問題的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void on_after_work(uv_work_t* req, int status) {</span></span>
<span class="line"><span>  free(req);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void on_work(uv_work_t* req) {</span></span>
<span class="line"><span>  // &quot;Work&quot;</span></span>
<span class="line"><span>  if (random() % 5 == 0) {</span></span>
<span class="line"><span>    printf(&quot;Sleeping...\\n&quot;);</span></span>
<span class="line"><span>    sleep(3);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void on_timer(uv_timer_t* timer) {</span></span>
<span class="line"><span>  uint64_t timestamp = uv_hrtime();</span></span>
<span class="line"><span>  printf(&quot;on_timer [%&quot; PRIu64 &quot; ms]\\n&quot;, (timestamp / 1000000) % 100000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  uv_work_t* work_req = (uv_work_t*)malloc(sizeof(*work_req));</span></span>
<span class="line"><span>  uv_queue_work(uv_default_loop(), work_req, on_work, on_after_work);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, const char** argv) {</span></span>
<span class="line"><span>  uv_timer_t timer;</span></span>
<span class="line"><span>  uv_timer_init(uv_default_loop(), &amp;timer);</span></span>
<span class="line"><span>  uv_timer_start(&amp;timer, on_timer, 0, 1000);</span></span>
<span class="line"><span>  return uv_run(uv_default_loop(), UV_RUN_DEFAULT);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過一個 <code>work_req</code> ^注2 類型的句柄，我們進入一個任務隊列，代替在 <code>on_timer</code> 上直接調用 sleep，這個函數在任務中（<code>on_work</code>）運行，並且，一旦任務完成（<code>on_after_work</code>），這個函數被調用一次。<code>on_work</code> 是指 “work”（阻塞中的/耗時的操作）進行的地方。注意在這兩個回調傳遞到 <code>uv_queue_work</code> 時的一個關鍵區別：<code>on_work</code> 運行在線程池中，而 <code>on_after_work</code> 運行在事件循環中的主線程上 —— 就好像是其它的回調一樣。</p><p>讓我們看一下這種方式的運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./uv-timer-work-demo</span></span>
<span class="line"><span>on_timer [89571 ms]</span></span>
<span class="line"><span>on_timer [90572 ms]</span></span>
<span class="line"><span>on_timer [91573 ms]</span></span>
<span class="line"><span>on_timer [92575 ms]</span></span>
<span class="line"><span>Sleeping...</span></span>
<span class="line"><span>on_timer [93576 ms]</span></span>
<span class="line"><span>on_timer [94577 ms]</span></span>
<span class="line"><span>Sleeping...</span></span>
<span class="line"><span>on_timer [95577 ms]</span></span>
<span class="line"><span>on_timer [96578 ms]</span></span>
<span class="line"><span>on_timer [97578 ms]</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>即便在 sleep 函數被調用時，定時器也每秒鐘滴答一下，睡眠現在運行在一個單獨的線程中，並且不會阻塞事件循環。</p><h3 id="一個用於練習的素數測試服務器" tabindex="-1">一個用於練習的素數測試服務器 <a class="header-anchor" href="#一個用於練習的素數測試服務器" aria-label="Permalink to “一個用於練習的素數測試服務器”">​</a></h3>`,38)),a("p",null,[s[21]||(s[21]=n('因為通過睡眠去模擬工作並不是件讓人興奮的事，我有一個事先準備好的更綜合的一個示例 —— 一個基於套接字接受來自客户端的數字的服務器，檢查這個數字是否是素數，然後去返回一個 “prime" 或者 “composite”。完整的 ',-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/uv-isprime-server.c"},{default:l(()=>[...s[20]||(s[20]=[n("服務器代碼在這裏",-1)])]),_:1}),s[22]||(s[22]=n(" —— 我不在這裏粘貼了，因為它太長了，更希望讀者在一些自己的練習中去體會它。",-1))]),s[42]||(s[42]=i(`<p>這個服務器使用了一個原生的素數測試算法，因此，對於大的素數可能花很長時間才返回一個回答。在我的機器中，對於 2305843009213693951，它花了 ~5 秒鐘去計算，但是，你的方法可能不同。</p><p>練習 1：服務器有一個設置（通過一個名為 <code>MODE</code> 的環境變量）要麼在套接字回調（意味着在主線程上）中運行素數測試，要麼在 libuv 工作隊列中。當多個客户端同時連接時，使用這個設置來觀察服務器的行為。當它計算一個大的任務時，在阻塞模式中，服務器將不回覆其它客户端，而在非阻塞模式中，它會回覆。</p><p>練習 2：libuv 有一個缺省大小的線程池，並且線程池的大小可以通過環境變量配置。你可以通過使用多個客户端去實驗找出它的缺省值是多少？找到線程池缺省值後，使用不同的設置去看一下，在重負載下怎麼去影響服務器的響應能力。</p><h3 id="在非阻塞文件系統中使用工作隊列" tabindex="-1">在非阻塞文件系統中使用工作隊列 <a class="header-anchor" href="#在非阻塞文件系統中使用工作隊列" aria-label="Permalink to “在非阻塞文件系統中使用工作隊列”">​</a></h3><p>對於只是呆板的演示和 CPU 密集型的計算來説，將可能的阻塞操作委託給一個線程池並不是明智的；libuv 在它的文件系統 API 中本身就大量使用了這種能力。通過這種方式，libuv 使用一個異步 API，以一個輕便的方式顯示出它強大的文件系統的處理能力。</p><p>讓我們使用 <code>uv_fs_read()</code>，例如，這個函數從一個文件中（表示為一個 <code>uv_fs_t</code> 句柄）讀取一個文件到一個緩衝中 ^注3，並且當讀取完成後調用一個回調。換句話説，<code>uv_fs_read()</code> 總是立即返回，即使是文件在一個類似 NFS 的系統上，而數據到達緩衝區可能需要一些時間。換句話説，這個 API 與這種方式中其它的 libuv API 是異步的。這是怎麼工作的呢？</p><p>在這一點上，我們看一下 libuv 的底層；內部實際上非常簡單，並且它是一個很好的練習。作為一個可移植的庫，libuv 對於 Windows 和 Unix 系統在它的許多函數上有不同的實現。我們去看一下在 libuv 源樹中的 <code>src/unix/fs.c</code>。</p><p>這是 <code>uv_fs_read</code> 的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int uv_fs_read(uv_loop_t* loop, uv_fs_t* req,</span></span>
<span class="line"><span>               uv_file file,</span></span>
<span class="line"><span>               const uv_buf_t bufs[],</span></span>
<span class="line"><span>               unsigned int nbufs,</span></span>
<span class="line"><span>               int64_t off,</span></span>
<span class="line"><span>               uv_fs_cb cb) {</span></span>
<span class="line"><span>  if (bufs == NULL || nbufs == 0)</span></span>
<span class="line"><span>    return -EINVAL;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  INIT(READ);</span></span>
<span class="line"><span>  req-&gt;file = file;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  req-&gt;nbufs = nbufs;</span></span>
<span class="line"><span>  req-&gt;bufs = req-&gt;bufsml;</span></span>
<span class="line"><span>  if (nbufs &gt; ARRAY_SIZE(req-&gt;bufsml))</span></span>
<span class="line"><span>    req-&gt;bufs = uv__malloc(nbufs * sizeof(*bufs));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (req-&gt;bufs == NULL) {</span></span>
<span class="line"><span>    if (cb != NULL)</span></span>
<span class="line"><span>      uv__req_unregister(loop, req);</span></span>
<span class="line"><span>    return -ENOMEM;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  memcpy(req-&gt;bufs, bufs, nbufs * sizeof(*bufs));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  req-&gt;off = off;</span></span>
<span class="line"><span>  POST;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>第一次看可能覺得很困難，因為它延緩真實的工作到 <code>INIT</code> 和 <code>POST</code> 宏中，以及為 <code>POST</code> 設置了一些本地變量。這樣做可以避免了文件中的許多重複代碼。</p><p>這是 <code>INIT</code> 宏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define INIT(subtype)                                                         \\</span></span>
<span class="line"><span>  do {                                                                        \\</span></span>
<span class="line"><span>    req-&gt;type = UV_FS;                                                        \\</span></span>
<span class="line"><span>    if (cb != NULL)                                                           \\</span></span>
<span class="line"><span>      uv__req_init(loop, req, UV_FS);                                         \\</span></span>
<span class="line"><span>    req-&gt;fs_type = UV_FS_ ## subtype;                                         \\</span></span>
<span class="line"><span>    req-&gt;result = 0;                                                          \\</span></span>
<span class="line"><span>    req-&gt;ptr = NULL;                                                          \\</span></span>
<span class="line"><span>    req-&gt;loop = loop;                                                         \\</span></span>
<span class="line"><span>    req-&gt;path = NULL;                                                         \\</span></span>
<span class="line"><span>    req-&gt;new_path = NULL;                                                     \\</span></span>
<span class="line"><span>    req-&gt;cb = cb;                                                             \\</span></span>
<span class="line"><span>  }                                                                           \\</span></span>
<span class="line"><span>  while (0)</span></span></code></pre></div><p>它設置了請求，並且更重要的是，設置 <code>req-&gt;fs_type</code> 域為真實的 FS 請求類型。因為 <code>uv_fs_read</code> 調用 <code>INIT(READ)</code>，它意味着 <code>req-&gt;fs_type</code> 被分配一個常數 <code>UV_FS_READ</code>。</p><p>這是 <code>POST</code> 宏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define POST                                                                  \\</span></span>
<span class="line"><span>  do {                                                                        \\</span></span>
<span class="line"><span>    if (cb != NULL) {                                                         \\</span></span>
<span class="line"><span>      uv__work_submit(loop, &amp;req-&gt;work_req, uv__fs_work, uv__fs_done);        \\</span></span>
<span class="line"><span>      return 0;                                                               \\</span></span>
<span class="line"><span>    }                                                                         \\</span></span>
<span class="line"><span>    else {                                                                    \\</span></span>
<span class="line"><span>      uv__fs_work(&amp;req-&gt;work_req);                                            \\</span></span>
<span class="line"><span>      return req-&gt;result;                                                     \\</span></span>
<span class="line"><span>    }                                                                         \\</span></span>
<span class="line"><span>  }                                                                           \\</span></span>
<span class="line"><span>  while (0)</span></span></code></pre></div><p>它做什麼取決於回調是否為 <code>NULL</code>。在 libuv 文件系統 API 中，一個 <code>NULL</code> 回調意味着我們真實地希望去執行一個 <em>同步</em> 操作。在這種情況下，<code>POST</code> 直接調用 <code>uv__fs_work</code>（我們需要了解一下這個函數的功能），而對於一個非 <code>NULL</code> 回調，它把 <code>uv__fs_work</code> 作為一個工作項提交到工作隊列（指的是線程池），然後，註冊 <code>uv__fs_done</code> 作為回調；該函數執行一些登記並調用用户提供的回調。</p><p>如果我們去看 <code>uv__fs_work</code> 的代碼，我們將看到它使用很多宏按照需求將工作分發到實際的文件系統調用。在我們的案例中，對於 <code>UV_FS_READ</code> 這個調用將被 <code>uv__fs_read</code> 生成，它（最終）使用普通的 POSIX API 去讀取。這個函數可以在一個 <em>阻塞</em> 方式中很安全地實現。因為，它通過異步 API 調用時被置於一個線程池中。</p><p>在 Node.js 中，<code>fs.readFile</code> 函數是映射到 <code>uv_fs_read</code> 上。因此，可以在一個非阻塞模式中讀取文件，甚至是當底層文件系統 API 是阻塞方式時。</p><hr><ul><li>注1： 為確保服務器不泄露內存，我在一個啓用泄露檢查的 Valgrind 中運行它。因為服務器經常是被設計為永久運行，這是一個挑戰；為克服這個問題，我在服務器上添加了一個 “kill 開關” —— 一個從客户端接收的特定序列，以使它可以停止事件循環並退出。這個代碼在 <code>theon_wrote_buf</code> 句柄中。</li><li>注2： 在這裏我們不過多地使用 <code>work_req</code>；討論的素數測試服務器接下來將展示怎麼被用於去傳遞上下文信息到回調中。</li><li>注3： <code>uv_fs_read()</code> 提供了一個類似於 <code>preadv</code> Linux 系統調用的通用 API：它使用多緩衝區用於排序，並且支持一個到文件中的偏移。基於我們討論的目的可以忽略這些特性。</li></ul><hr>`,21)),a("p",null,[s[24]||(s[24]=n("via: ",-1)),p(e,{href:"https://eli.thegreenplace.net/2017/concurrent-servers-part-4-libuv/"},{default:l(()=>[...s[23]||(s[23]=[n("https://eli.thegreenplace.net/2017/concurrent-servers-part-4-libuv/",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("作者：",-1)),p(e,{href:"https://eli.thegreenplace.net/"},{default:l(()=>[...s[25]||(s[25]=[n("Eli Bendersky",-1)])]),_:1}),s[29]||(s[29]=n(" 譯者：",-1)),p(e,{href:"https://github.com/qhwdw"},{default:l(()=>[...s[26]||(s[26]=[n("qhwdw",-1)])]),_:1}),s[30]||(s[30]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[27]||(s[27]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[32]||(s[32]=[n("Linux中國",-1)])]),_:1}),s[35]||(s[35]=n(" 榮譽推出",-1))])])}const q=t(d,[["render",u]]);export{k as __pageData,q as default};
