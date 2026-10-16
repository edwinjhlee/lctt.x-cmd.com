import{_ as t,a0 as o,w as r,s as d,I as a,x as s,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"併發服務器（一）：簡介 | LCTT x X-CMD","titleTemplate":false,"description":"併發服務器（一）：簡介 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"併發服務器（一）：簡介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"併發服務器（一）：簡介 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20171002 Concurrent Servers Part 1 - Introduction","title":"併發服務器（一）：簡介","tag":"201710","desc":""},"relativePath":"201710/20171002 Concurrent Servers Part 1 - Introduction.md","filePath":"[post].md"}'),c={name:"201710/20171002 Concurrent Servers Part 1 - Introduction.md"};function u(b,n,f,g,k,m){const e=o("Link");return r(),d("div",null,[n[41]||(n[41]=a("h1",{id:"併發服務器-一-簡介",tabindex:"-1"},[s("併發服務器（一）：簡介 "),a("a",{class:"header-anchor",href:"#併發服務器-一-簡介","aria-label":"Permalink to “併發服務器（一）：簡介”"},"​")],-1)),n[42]||(n[42]=a("p",null,"這是關於併發網絡服務器編程的第一篇教程。我計劃測試幾個主流的、可以同時處理多個客户端請求的服務器併發模型，基於可擴展性和易實現性對這些模型進行評判。所有的服務器都會監聽套接字連接，並且實現一些簡單的協議用於與客户端進行通訊。",-1)),n[43]||(n[43]=a("p",null,"該系列的所有文章：",-1)),a("ul",null,[a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/"},{default:l(()=>[...n[0]||(n[0]=[s("第一節 - 簡介",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-2-threads/"},{default:l(()=>[...n[1]||(n[1]=[s("第二節 - 線程",-1)])]),_:1})]),a("li",null,[p(e,{href:"http://eli.thegreenplace.net/2017/concurrent-servers-part-3-event-driven/"},{default:l(()=>[...n[2]||(n[2]=[s("第三節 - 事件驅動",-1)])]),_:1})])]),n[44]||(n[44]=i('<h3 id="協議" tabindex="-1">協議 <a class="header-anchor" href="#協議" aria-label="Permalink to “協議”">​</a></h3><p>該系列教程所用的協議都非常簡單，但足以展示併發服務器設計的許多有趣層面。而且這個協議是 <em>有狀態的</em> —— 服務器根據客户端發送的數據改變內部狀態，然後根據內部狀態產生相應的行為。並非所有的協議都是有狀態的 —— 實際上，基於 HTTP 的許多協議是無狀態的，但是有狀態的協議也是很常見，值得認真討論。</p><p>在服務器端看來，這個協議的視圖是這樣的：</p><p><img src="https://raw.githubusercontent.com/LCTT/wiki-images/master/TranslateProject/ref_img/005.png" alt=""></p><p>總之：服務器等待新客户端的連接；當一個客户端連接的時候，服務器會向該客户端發送一個 <code>*</code> 字符，進入“等待消息”的狀態。在該狀態下，服務器會忽略客户端發送的所有字符，除非它看到了一個 <code>^</code> 字符，這表示一個新消息的開始。這個時候服務器就會轉變為“正在通信”的狀態，這時它會向客户端回送數據，把收到的所有字符的每個字節加 1 回送給客户端^注1 。當客户端發送了 <code>$</code> 字符，服務器就會退回到等待新消息的狀態。<code>^</code> 和 <code>$</code> 字符僅僅用於分隔消息 —— 它們不會被服務器回送。</p><p>每個狀態之後都有個隱藏的箭頭指向 “等待客户端” 狀態，用來客户端斷開連接。因此，客户端要表示“我已經結束”的方法很簡單，關掉它那一端的連接就好。</p><p>顯然，這個協議是真實協議的簡化版，真實使用的協議一般包含複雜的報文頭、轉義字符序列（例如讓消息體中可以出現 <code>$</code> 符號），額外的狀態變化。但是我們這個協議足以完成期望。</p><p>另一點：這個系列是介紹性的，並假設客户端都工作的很好（雖然可能運行很慢）；因此沒有設置超時，也沒有設置特殊的規則來確保服務器不會因為客户端的惡意行為（或是故障）而出現阻塞，導致不能正常結束。</p><h3 id="順序服務器" tabindex="-1">順序服務器 <a class="header-anchor" href="#順序服務器" aria-label="Permalink to “順序服務器”">​</a></h3><p>這個系列中我們的第一個服務端程序是一個簡單的“順序”服務器，用 C 進行編寫，除了標準的 POSIX 中用於套接字的內容以外沒有使用其它庫。服務器程序是順序，因為它一次只能處理一個客户端的請求；當有客户端連接時，像之前所説的那樣，服務器會進入到狀態機中，並且不再監聽套接字接受新的客户端連接，直到當前的客户端結束連接。顯然這不是併發的，而且即便在很少的負載下也不能服務多個客户端，但它對於我們的討論很有用，因為我們需要的是一個易於理解的基礎。</p>',10)),a("p",null,[n[4]||(n[4]=s("這個服務器的完整代碼在",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/blob/master/2017/async-socket-server/sequential-server.c"},{default:l(()=>[...n[3]||(n[3]=[s("這裏",-1)])]),_:1}),n[5]||(n[5]=s("；接下來，我會着重於一些重點的部分。",-1)),n[6]||(n[6]=a("code",null,"main",-1)),n[7]||(n[7]=s(" 函數里面的外層循環用於監聽套接字，以便接受新客户端的連接。一旦有客户端進行連接，就會調用 ",-1)),n[8]||(n[8]=a("code",null,"serve_connection",-1)),n[9]||(n[9]=s("，這個函數中的代碼會一直運行，直到客户端斷開連接。",-1))]),n[45]||(n[45]=i(`<p>順序服務器在循環裏調用 <code>accept</code> 用來監聽套接字，並接受新連接：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while (1) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>accept</code> 函數每次都會返回一個新的已連接的套接字，然後服務器調用 <code>serve_connection</code>；注意這是一個 <em>阻塞式</em> 的調用 —— 在 <code>serve_connection</code> 返回前，<code>accept</code> 函數都不會再被調用了；服務器會被阻塞，直到客户端結束連接才能接受新的連接。換句話説，客户端按 <em>順序</em> 得到響應。</p><p>這是 <code>serve_connection</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef enum { WAIT_FOR_MSG, IN_MSG } ProcessingState;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>它完全是按照狀態機協議進行編寫的。每次循環的時候，服務器嘗試接收客户端的數據。收到 0 字節意味着客户端斷開連接，然後循環就會退出。否則，會逐字節檢查接收緩存，每一個字節都可能會觸發一個狀態。</p><p><code>recv</code> 函數返回接收到的字節數與客户端發送消息的數量完全無關（<code>^...$</code> 閉合序列的字節）。因此，在保持狀態的循環中遍歷整個緩衝區很重要。而且，每一個接收到的緩衝中可能包含多條信息，但也有可能開始了一個新消息，卻沒有顯式的結束字符；而這個結束字符可能在下一個緩衝中才能收到，這就是處理狀態在循環迭代中進行維護的原因。</p><p>例如，試想主循環中的 <code>recv</code> 函數在某次連接中返回了三個非空的緩衝：</p><ol><li><code>^abc$de^abte$f</code></li><li><code>xyz^123</code></li><li><code>25$^ab$abab</code></li></ol>`,9)),a("p",null,[n[11]||(n[11]=s("服務端返回的是哪些數據？追蹤代碼對於理解狀態轉變很有用。（答案見^注",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Mealy_machine"},{default:l(()=>[...n[10]||(n[10]=[s("2",-1)])]),_:1}),n[12]||(n[12]=s(" ）",-1))]),n[46]||(n[46]=a("h3",{id:"多個併發客户端",tabindex:"-1"},[s("多個併發客户端 "),a("a",{class:"header-anchor",href:"#多個併發客户端","aria-label":"Permalink to “多個併發客户端”"},"​")],-1)),n[47]||(n[47]=a("p",null,"如果多個客户端在同一時刻向順序服務器發起連接會發生什麼事情？",-1)),n[48]||(n[48]=a("p",null,[s("服務器端的代碼（以及它的名字 “順序服務器”）已經説的很清楚了，一次只能處理 "),a("em",null,"一個"),s(" 客户端的請求。只要服務器在 "),a("code",null,"serve_connection"),s(" 函數中忙於處理客户端的請求，就不會接受別的客户端的連接。只有當前的客户端斷開了連接，"),a("code",null,"serve_connection"),s(" 才會返回，然後最外層的循環才能繼續執行接受其他客户端的連接。")],-1)),a("p",null,[n[14]||(n[14]=s("為了演示這個行為，",-1)),p(e,{href:"https://github.com/eliben/code-for-blog/tree/master/2017/async-socket-server"},{default:l(()=>[...n[13]||(n[13]=[s("該系列教程的示例代碼",-1)])]),_:1}),n[15]||(n[15]=s(" 包含了一個 Python 腳本，用於模擬幾個想要同時連接服務器的客户端。每一個客户端發送類似之前那樣的三個數據緩衝 ^注3 ，不過每次發送數據之間會有一定延遲。",-1))]),n[49]||(n[49]=i(`<p>客户端腳本在不同的線程中併發地模擬客户端行為。這是我們的序列化服務器與客户端交互的信息記錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3.6 simple-client.py  -n 3 localhost 9090</span></span>
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
<span class="line"><span>INFO:2017-09-16 14:14:24,376:conn0 disconnecting</span></span></code></pre></div><p>這裏要注意連接名：<code>conn1</code> 是第一個連接到服務器的，先跟服務器交互了一段時間。接下來的連接 <code>conn2</code> —— 在第一個斷開連接後，連接到了服務器，然後第三個連接也是一樣。就像日誌顯示的那樣，每一個連接讓服務器變得繁忙，持續了大約 2.2 秒的時間（這實際上是人為地在客户端代碼中加入的延遲），在這段時間裏別的客户端都不能連接。</p><p>顯然，這不是一個可擴展的策略。這個例子中，客户端中加入了延遲，讓服務器不能處理別的交互動作。一個智能服務器應該能處理一堆客户端的請求，而這個原始的服務器在結束連接之前一直繁忙（我們將會在之後的章節中看到如何實現智能的服務器）。儘管服務端有延遲，但這不會過度佔用 CPU；例如，從資料庫中查找信息（時間基本上是花在連接到資料庫服務器上，或者是花在硬盤中的本地資料庫）。</p><h3 id="總結及期望" tabindex="-1">總結及期望 <a class="header-anchor" href="#總結及期望" aria-label="Permalink to “總結及期望”">​</a></h3><p>這個示例服務器達成了兩個預期目標：</p><ol><li>首先是介紹了問題範疇和貫徹該系列文章的套接字編程基礎。</li><li>對於併發服務器編程的拋磚引玉 —— 就像之前的部分所説，順序服務器還不能在非常輕微的負載下進行擴展，而且沒有高效的利用資源。</li></ol>`,7)),a("p",null,[n[19]||(n[19]=s("在看下一篇文章前，確保你已經理解了這裏所講的服務器/客户端協議，還有順序服務器的代碼。我之前介紹過了這個簡單的協議；例如 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2009/08/12/framing-in-serial-communications/"},{default:l(()=>[...n[16]||(n[16]=[s("串行通信分幀",-1)])]),_:1}),n[20]||(n[20]=s(" 和 ",-1)),p(e,{href:"http://eli.thegreenplace.net/2009/08/29/co-routines-as-an-alternative-to-state-machines"},{default:l(()=>[...n[17]||(n[17]=[s("用協程來替代狀態機",-1)])]),_:1}),n[21]||(n[21]=s("。要學習套接字網絡編程的基礎，",-1)),p(e,{href:"http://beej.us/guide/bgnet/"},{default:l(()=>[...n[18]||(n[18]=[s("Beej 的教程",-1)])]),_:1}),n[22]||(n[22]=s(" 用來入門很不錯，但是要深入理解我推薦你還是看本書。",-1))]),n[50]||(n[50]=a("p",null,"如果有什麼不清楚的，請在評論區下進行評論或者向我發送郵件。深入理解併發服務器！",-1)),n[51]||(n[51]=a("hr",null,null,-1)),a("ul",null,[a("li",null,[n[24]||(n[24]=s("注1：狀態轉變中的 In/Out 記號是指 ",-1)),p(e,{href:"https://en.wikipedia.org/wiki/Mealy_machine"},{default:l(()=>[...n[23]||(n[23]=[s("Mealy machine",-1)])]),_:1}),n[25]||(n[25]=s("。",-1))]),n[26]||(n[26]=a("li",null,[s("注2：回應的是 "),a("code",null,"bcdbcuf23436bc"),s("。")],-1)),n[27]||(n[27]=a("li",null,[s("注3：這裏在結尾處有一點小區別，加了字符串 "),a("code",null,"0000"),s(" —— 服務器回應這個序列，告訴客户端讓其斷開連接；這是一個簡單的握手協議，確保客户端有足夠的時間接收到服務器發送的所有回覆。")],-1))]),n[52]||(n[52]=a("hr",null,null,-1)),a("p",null,[n[29]||(n[29]=s("via: ",-1)),p(e,{href:"https://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/"},{default:l(()=>[...n[28]||(n[28]=[s("https://eli.thegreenplace.net/2017/concurrent-servers-part-1-introduction/",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("作者：",-1)),p(e,{href:"https://eli.thegreenplace.net/pages/about"},{default:l(()=>[...n[30]||(n[30]=[s("Eli Bendersky",-1)])]),_:1}),n[34]||(n[34]=s(" 譯者：",-1)),p(e,{href:"https://github.com/GitFuture"},{default:l(()=>[...n[31]||(n[31]=[s("GitFuture",-1)])]),_:1}),n[35]||(n[35]=s(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...n[32]||(n[32]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[38]||(n[38]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[36]||(n[36]=[s("LCTT",-1)])]),_:1}),n[39]||(n[39]=s(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...n[37]||(n[37]=[s("Linux中國",-1)])]),_:1}),n[40]||(n[40]=s(" 榮譽推出",-1))])])}const N=t(c,[["render",u]]);export{T as __pageData,N as default};
