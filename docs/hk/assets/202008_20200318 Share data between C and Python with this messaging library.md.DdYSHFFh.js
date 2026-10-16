import{_ as t,a0 as o,w as r,s as c,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"使用 ZeroMQ 消息庫在 C 和 Python 間共享數據 | LCTT x X-CMD","titleTemplate":false,"description":"使用 ZeroMQ 消息庫在 C 和 Python 間共享數據 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ZeroMQ 消息庫在 C 和 Python 間共享數據 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ZeroMQ 消息庫在 C 和 Python 間共享數據 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200318 Share data between C and Python with this messaging library","title":"使用 ZeroMQ 消息庫在 C 和 Python 間共享數據","tag":"202008","desc":""},"relativePath":"202008/20200318 Share data between C and Python with this messaging library.md","filePath":"[post].md"}'),d={name:"202008/20200318 Share data between C and Python with this messaging library.md"};function h(u,s,g,k,b,f){const p=o("Link");return r(),c("div",null,[s[65]||(s[65]=a("h1",{id:"使用-zeromq-消息庫在-c-和-python-間共享數據",tabindex:"-1"},[n("使用 ZeroMQ 消息庫在 C 和 Python 間共享數據 "),a("a",{class:"header-anchor",href:"#使用-zeromq-消息庫在-c-和-python-間共享數據","aria-label":"Permalink to “使用 ZeroMQ 消息庫在 C 和 Python 間共享數據”"},"​")],-1)),s[66]||(s[66]=a("blockquote",null,[a("p",null,"ZeroMQ 是一個快速靈活的消息庫，用於數據收集和不同編程語言間的數據共享。")],-1)),s[67]||(s[67]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/08/202106uale11l1qf11slzw.jpg",alt:""})],-1)),s[68]||(s[68]=a("p",null,"作為軟件工程師，我有多次在要求完成指定任務時感到渾身一冷的經歷。其中有一次，我必須在一些新的硬件基礎設施和雲基礎設施之間寫一個接口，這些硬件需要 C 語言，而云基礎設施主要是用 Python。",-1)),a("p",null,[s[2]||(s[2]=n("實現的方式之一是 ",-1)),i(p,{href:"https://docs.python.org/3/extending/extending.html"},{default:e(()=>[...s[0]||(s[0]=[n("用 C 寫擴展模組",-1)])]),_:1}),s[3]||(s[3]=n("，Python 支持 C 擴展的調用。快速瀏覽文檔後發現，這需要編寫大量的 C 代碼。這樣做的話，在有些情況下效果還不錯，但不是我喜歡的方式。另一種方式就是將兩個任務放在不同的進程中，並使用 ",-1)),i(p,{href:"https://zeromq.org/"},{default:e(()=>[...s[1]||(s[1]=[n("ZeroMQ 消息庫",-1)])]),_:1}),s[4]||(s[4]=n(" 在兩者之間交換消息。",-1))]),a("p",null,[s[6]||(s[6]=n("在發現 ZeroMQ 之前，遇到這種類型的情況時，我選擇了編寫擴展的方式。這種方式不算太差，但非常費時費力。如今，為了避免那些問題，我將一個系統細分為獨立的進程，通過 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Network_socket"},{default:e(()=>[...s[5]||(s[5]=[n("通信套接字",-1)])]),_:1}),s[7]||(s[7]=n(" 發送消息來交換信息。這樣，不同的編程語言可以共存，每個進程也變簡單了，同時也容易調試。",-1))]),s[69]||(s[69]=a("p",null,"ZeroMQ 提供了一個更簡單的過程：",-1)),s[70]||(s[70]=a("ol",null,[a("li",null,"編寫一小段 C 代碼，從硬件讀取數據，然後把發現的東西作為消息發送出去。"),a("li",null,"使用 Python 編寫接口，實現新舊基礎設施之間的對接。")],-1)),a("p",null,[i(p,{href:"https://en.wikipedia.org/wiki/Pieter_Hintjens"},{default:e(()=>[...s[8]||(s[8]=[n("Pieter Hintjens",-1)])]),_:1}),s[10]||(s[10]=n(" 是 ZeroMQ 項目發起者之一，他是個擁有 ",-1)),i(p,{href:"http://hintjens.com/"},{default:e(()=>[...s[9]||(s[9]=[n("有趣視角和作品",-1)])]),_:1}),s[11]||(s[11]=n(" 的非凡人物。",-1))]),s[71]||(s[71]=a("h3",{id:"準備",tabindex:"-1"},[n("準備 "),a("a",{class:"header-anchor",href:"#準備","aria-label":"Permalink to “準備”"},"​")],-1)),s[72]||(s[72]=a("p",null,"本教程中，需要：",-1)),a("ul",null,[a("li",null,[s[14]||(s[14]=n("一個 C 編譯器（例如 ",-1)),i(p,{href:"https://gcc.gnu.org/"},{default:e(()=>[...s[12]||(s[12]=[n("GCC",-1)])]),_:1}),s[15]||(s[15]=n(" 或 ",-1)),i(p,{href:"https://clang.llvm.org/"},{default:e(()=>[...s[13]||(s[13]=[n("Clang",-1)])]),_:1}),s[16]||(s[16]=n("）",-1))]),a("li",null,[i(p,{href:"https://github.com/zeromq/libzmq#installation-of-binary-packages-"},{default:e(()=>[...s[17]||(s[17]=[n("libzmq 庫",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://www.python.org/downloads/"},{default:e(()=>[...s[18]||(s[18]=[n("Python 3",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://zeromq.org/languages/python/"},{default:e(()=>[...s[19]||(s[19]=[n("ZeroMQ 的 Python 封裝",-1)])]),_:1})])]),s[73]||(s[73]=l(`<p>Fedora 系統上的安裝方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf install clang zeromq zeromq-devel python3 python3-zmq</span></span></code></pre></div><p>Debian 和 Ubuntu 系統上的安裝方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apt-get install clang libzmq5 libzmq3-dev python3 python3-zmq</span></span></code></pre></div><p>如果有問題，參考對應項目的安裝指南（上面附有鏈接）。</p><h3 id="編寫硬件接口庫" tabindex="-1">編寫硬件接口庫 <a class="header-anchor" href="#編寫硬件接口庫" aria-label="Permalink to “編寫硬件接口庫”">​</a></h3><p>因為這裏針對的是個設想的場景，本教程虛構了包含兩個函數的操作庫：</p><ul><li><code>fancyhw_init()</code> 用來初始化（設想的）硬件</li><li><code>fancyhw_read_val()</code> 用於返回從硬件讀取的數據</li></ul><p>將庫的完整代碼保存到文件 <code>libfancyhw.h</code> 中:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#ifndef LIBFANCYHW_H</span></span>
<span class="line"><span>#define LIBFANCYHW_H</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;stdint.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// This is the fictitious hardware interfacing library</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void fancyhw_init(unsigned int init_param)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    srand(init_param);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t fancyhw_read_val(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return (int16_t)rand();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif</span></span></code></pre></div><p>這個庫可以模擬你要在不同語言實現的組件間交換的數據，中間有個隨機數發生器。</p><h3 id="設計-c-接口" tabindex="-1">設計 C 接口 <a class="header-anchor" href="#設計-c-接口" aria-label="Permalink to “設計 C 接口”">​</a></h3><p>下面從包含管理數據傳輸的庫開始，逐步實現 C 接口。</p><h4 id="需要的庫" tabindex="-1">需要的庫 <a class="header-anchor" href="#需要的庫" aria-label="Permalink to “需要的庫”">​</a></h4><p>開始先加載必要的庫（每個庫的作用見代碼註釋）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// For printf()</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>// For EXIT_*</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>// For memcpy()</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>// For sleep()</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;zmq.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;libfancyhw.h&quot;</span></span></code></pre></div><h4 id="必要的參數" tabindex="-1">必要的參數 <a class="header-anchor" href="#必要的參數" aria-label="Permalink to “必要的參數”">​</a></h4><p>定義 <code>main</code> 函數和後續過程中必要的參數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const unsigned int INIT_PARAM = 12345;</span></span>
<span class="line"><span>    const unsigned int REPETITIONS = 10;</span></span>
<span class="line"><span>    const unsigned int PACKET_SIZE = 16;</span></span>
<span class="line"><span>    const char *TOPIC = &quot;fancyhw_data&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span></code></pre></div><h4 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to “初始化”">​</a></h4><p>所有的庫都需要初始化。虛構的那個只需要一個參數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fancyhw_init(INIT_PARAM);</span></span></code></pre></div><p>ZeroMQ 庫需要實打實的初始化。首先，定義對象 <code>context</code>，它是用來管理全部的套接字的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void *context = zmq_ctx_new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!context)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_ctx_new(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_FAILURE;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>之後定義用來發送數據的套接字。ZeroMQ 支持若干種套接字，各有其用。使用 <code>publish</code> 套接字（也叫 <code>PUB</code> 套接字），可以複製消息並分發到多個接收端。這使得你可以讓多個接收端接收同一個消息。沒有接收者的消息將被丟棄（即不會入消息隊列）。用法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void *data_socket = zmq_socket(context, ZMQ_PUB);</span></span></code></pre></div>`,26)),a("p",null,[s[22]||(s[22]=n("套接字需要綁定到一個具體的地址，這樣客户端就知道要連接哪裏了。本例中，使用了 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol"},{default:e(()=>[...s[20]||(s[20]=[n("TCP 傳輸層",-1)])]),_:1}),s[23]||(s[23]=n("（當然也有 ",-1)),i(p,{href:"http://zguide.zeromq.org/page:all#Plugging-Sockets-into-the-Topology"},{default:e(()=>[...s[21]||(s[21]=[n("其它選項",-1)])]),_:1}),s[24]||(s[24]=n("，但 TCP 是不錯的默認選擇）：",-1))]),s[74]||(s[74]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const int rb = zmq_bind(data_socket, &quot;tcp://*:5555&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (rb != 0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_ctx_new(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_FAILURE;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下一步, 計算一些後續要用到的值。 注意下面代碼中的 <code>TOPIC</code>，因為 <code>PUB</code> 套接字發送的消息需要綁定一個主題。主題用於供接收者過濾消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const size_t topic_size = strlen(TOPIC);</span></span>
<span class="line"><span>const size_t envelope_size = topic_size + 1 + PACKET_SIZE * sizeof(int16_t);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;Topic: %s; topic size: %zu; Envelope size: %zu\\n&quot;, TOPIC, topic_size, envelope_size);</span></span></code></pre></div><h4 id="發送消息" tabindex="-1">發送消息 <a class="header-anchor" href="#發送消息" aria-label="Permalink to “發送消息”">​</a></h4><p>啓動一個發送消息的循環，循環 <code>REPETITIONS</code> 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for (unsigned int i = 0; i &lt; REPETITIONS; i++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ...</span></span></code></pre></div><p>發送消息前，先填充一個長度為 <code>PACKET_SIZE</code> 的緩衝區。本庫提供的是 16 個位的有符號整數。因為 C 語言中 <code>int</code> 類型佔用空間大小與平台相關，不是確定的值，所以要使用指定寬度的 <code>int</code> 變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int16_t buffer[PACKET_SIZE];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (unsigned int j = 0; j &lt; PACKET_SIZE; j++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    buffer[j] = fancyhw_read_val();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;Read %u data values\\n&quot;, PACKET_SIZE);</span></span></code></pre></div><p>消息的準備和發送的第一步是創建 ZeroMQ 消息，為消息分配必要的內存空間。空白的消息是用於封裝要發送的數據的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zmq_msg_t envelope;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const int rmi = zmq_msg_init_size(&amp;envelope, envelope_size);</span></span>
<span class="line"><span>if (rmi != 0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_msg_init_size(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10)),a("p",null,[s[26]||(s[26]=n("現在內存空間已分配，數據保存在 ZeroMQ 消息 “信封”中。函數 ",-1)),s[27]||(s[27]=a("code",null,"zmq_msg_data()",-1)),s[28]||(s[28]=n(" 返回一個指向封裝數據緩存區頂端的指針。第一部分是主題，之後是一個空格，最後是二進制數。主題和二進制數據之間的分隔符采用空格字符。需要遍歷緩存區的話，使用類型轉換和 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Pointer_%28computer_programming%29%23C_and_C++"},{default:e(()=>[...s[25]||(s[25]=[n("指針算法",-1)])]),_:1}),s[29]||(s[29]=n("。（感謝 C 語言，讓事情變得直截了當。）做法如下：",-1))]),s[75]||(s[75]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>memcpy(zmq_msg_data(&amp;envelope), TOPIC, topic_size);</span></span>
<span class="line"><span>memcpy((void*)((char*)zmq_msg_data(&amp;envelope) + topic_size), &quot; &quot;, 1);</span></span>
<span class="line"><span>memcpy((void*)((char*)zmq_msg_data(&amp;envelope) + 1 + topic_size), buffer, PACKET_SIZE * sizeof(int16_t))</span></span></code></pre></div><p>通過 <code>data_socket</code> 發送消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const size_t rs = zmq_msg_send(&amp;envelope, data_socket, 0);</span></span>
<span class="line"><span>if (rs != envelope_size)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_msg_send(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用數據之前要先解除封裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;Message sent; i: %u, topic: %s\\n&quot;, i, TOPIC);</span></span></code></pre></div><h4 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to “清理”">​</a></h4>`,6)),a("p",null,[s[31]||(s[31]=n("C 語言不提供 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"},{default:e(()=>[...s[30]||(s[30]=[n("垃圾收集",-1)])]),_:1}),s[32]||(s[32]=n(" 功能，用完之後記得要自己掃尾。發送消息之後結束程序之前，需要運行掃尾代碼，釋放分配的內存:",-1))]),s[76]||(s[76]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const int rc = zmq_close(data_socket);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (rc != 0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_close(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_FAILURE;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const int rd = zmq_ctx_destroy(context);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (rd != 0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;Error occurred during zmq_ctx_destroy(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_FAILURE;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return EXIT_SUCCESS;</span></span></code></pre></div><h4 id="完整-c-代碼" tabindex="-1">完整 C 代碼 <a class="header-anchor" href="#完整-c-代碼" aria-label="Permalink to “完整 C 代碼”">​</a></h4><p>保存下面完整的接口代碼到本地名為 <code>hw_interface.c</code> 的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// For printf()</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>// For EXIT_*</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>// For memcpy()</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>// For sleep()</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;zmq.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;libfancyhw.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const unsigned int INIT_PARAM = 12345;</span></span>
<span class="line"><span>    const unsigned int REPETITIONS = 10;</span></span>
<span class="line"><span>    const unsigned int PACKET_SIZE = 16;</span></span>
<span class="line"><span>    const char *TOPIC = &quot;fancyhw_data&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fancyhw_init(INIT_PARAM);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void *context = zmq_ctx_new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (!context)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;ERROR: ZeroMQ error occurred during zmq_ctx_new(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return EXIT_FAILURE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void *data_socket = zmq_socket(context, ZMQ_PUB);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const int rb = zmq_bind(data_socket, &quot;tcp://*:5555&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (rb != 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;ERROR: ZeroMQ error occurred during zmq_ctx_new(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return EXIT_FAILURE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const size_t topic_size = strlen(TOPIC);</span></span>
<span class="line"><span>    const size_t envelope_size = topic_size + 1 + PACKET_SIZE * sizeof(int16_t);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Topic: %s; topic size: %zu; Envelope size: %zu\\n&quot;, TOPIC, topic_size, envelope_size);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (unsigned int i = 0; i &lt; REPETITIONS; i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        int16_t buffer[PACKET_SIZE];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (unsigned int j = 0; j &lt; PACKET_SIZE; j++)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            buffer[j] = fancyhw_read_val();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        printf(&quot;Read %u data values\\n&quot;, PACKET_SIZE);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        zmq_msg_t envelope;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>        const int rmi = zmq_msg_init_size(&amp;envelope, envelope_size);</span></span>
<span class="line"><span>        if (rmi != 0)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            printf(&quot;ERROR: ZeroMQ error occurred during zmq_msg_init_size(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>            zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>        memcpy(zmq_msg_data(&amp;envelope), TOPIC, topic_size);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        memcpy((void*)((char*)zmq_msg_data(&amp;envelope) + topic_size), &quot; &quot;, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        memcpy((void*)((char*)zmq_msg_data(&amp;envelope) + 1 + topic_size), buffer, PACKET_SIZE * sizeof(int16_t));</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>        const size_t rs = zmq_msg_send(&amp;envelope, data_socket, 0);</span></span>
<span class="line"><span>        if (rs != envelope_size)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            printf(&quot;ERROR: ZeroMQ error occurred during zmq_msg_send(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>            zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>        zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        printf(&quot;Message sent; i: %u, topic: %s\\n&quot;, i, TOPIC);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        sleep(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const int rc = zmq_close(data_socket);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (rc != 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;ERROR: ZeroMQ error occurred during zmq_close(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return EXIT_FAILURE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const int rd = zmq_ctx_destroy(context);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (rd != 0)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Error occurred during zmq_ctx_destroy(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return EXIT_FAILURE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>用如下命令編譯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ clang -std=c99 -I. hw_interface.c -lzmq -o hw_interface</span></span></code></pre></div><p>如果沒有編譯錯誤，你就可以運行這個接口了。貼心的是，ZeroMQ <code>PUB</code> 套接字可以在沒有任何應用發送或接受數據的狀態下運行，這簡化了使用複雜度，因為這樣不限制進程啓動的次序。</p><p>運行該接口：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./hw_interface</span></span>
<span class="line"><span>Topic: fancyhw_data; topic size: 12; Envelope size: 45</span></span>
<span class="line"><span>Read 16 data values</span></span>
<span class="line"><span>Message sent; i: 0, topic: fancyhw_data</span></span>
<span class="line"><span>Read 16 data values</span></span>
<span class="line"><span>Message sent; i: 1, topic: fancyhw_data</span></span>
<span class="line"><span>Read 16 data values</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>輸出顯示數據已經通過 ZeroMQ 完成發送，現在要做的是讓一個程序去讀數據。</p><h3 id="編寫-python-數據處理器" tabindex="-1">編寫 Python 數據處理器 <a class="header-anchor" href="#編寫-python-數據處理器" aria-label="Permalink to “編寫 Python 數據處理器”">​</a></h3><p>現在已經準備好從 C 程序向 Python 應用傳送數據了。</p><h4 id="庫" tabindex="-1">庫 <a class="header-anchor" href="#庫" aria-label="Permalink to “庫”">​</a></h4><p>需要兩個庫幫助實現數據傳輸。首先是 ZeroMQ 的 Python 封裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m pip install zmq</span></span></code></pre></div>`,15)),a("p",null,[s[34]||(s[34]=n("另一個就是 ",-1)),i(p,{href:"https://docs.python.org/3/library/struct.html"},{default:e(()=>[...s[33]||(s[33]=[n("struct 庫",-1)])]),_:1}),s[35]||(s[35]=n("，用於解碼二進制數據。這個庫是 Python 標準庫的一部分，所以不需要使用 ",-1)),s[36]||(s[36]=a("code",null,"pip",-1)),s[37]||(s[37]=n(" 命令安裝。",-1))]),s[77]||(s[77]=l(`<p>Python 程序的第一部分是導入這些庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import zmq</span></span>
<span class="line"><span>import struct</span></span></code></pre></div><h4 id="重要參數" tabindex="-1">重要參數 <a class="header-anchor" href="#重要參數" aria-label="Permalink to “重要參數”">​</a></h4><p>使用 ZeroMQ 時，只能向常量 <code>TOPIC</code> 定義相同的接收端發送消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>topic = &quot;fancyhw_data&quot;.encode(&#39;ascii&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Reading messages with topic: {}&quot;.format(topic))</span></span></code></pre></div><h4 id="初始化-1" tabindex="-1">初始化 <a class="header-anchor" href="#初始化-1" aria-label="Permalink to “初始化”">​</a></h4><p>下一步，初始化上下文和套接字。使用 <code>subscribe</code> 套接字（也稱為 <code>SUB</code> 套接字），它是 <code>PUB</code> 套接字的天生伴侶。這個套接字發送時也需要匹配主題。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>with zmq.Context() as context:</span></span>
<span class="line"><span>    socket = context.socket(zmq.SUB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    socket.connect(&quot;tcp://127.0.0.1:5555&quot;)</span></span>
<span class="line"><span>    socket.setsockopt(zmq.SUBSCRIBE, topic)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    i = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span></code></pre></div><h4 id="接收消息" tabindex="-1">接收消息 <a class="header-anchor" href="#接收消息" aria-label="Permalink to “接收消息”">​</a></h4><p>啓動一個無限循環，等待接收發送到 <code>SUB</code> 套接字的新消息。這個循環會在你按下 <code>Ctrl+C</code> 組合鍵或者內部發生錯誤時終止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    try:</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ... # we will fill this in next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except KeyboardInterrupt:</span></span>
<span class="line"><span>        socket.close()</span></span>
<span class="line"><span>    except Exception as error:</span></span>
<span class="line"><span>        print(&quot;ERROR: {}&quot;.format(error))</span></span>
<span class="line"><span>        socket.close()</span></span></code></pre></div><p>這個循環等待 <code>recv()</code> 方法獲取的新消息，然後將接收到的內容從第一個空格字符處分割開，從而得到主題：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>binary_topic, data_buffer = socket.recv().split(b&#39; &#39;, 1)</span></span></code></pre></div><h4 id="解碼消息" tabindex="-1">解碼消息 <a class="header-anchor" href="#解碼消息" aria-label="Permalink to “解碼消息”">​</a></h4><p>Python 此時尚不知道主題是個字符串，使用標準 ASCII 編解碼器進行解碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>topic = binary_topic.decode(encoding = &#39;ascii&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Message {:d}:&quot;.format(i))</span></span>
<span class="line"><span>print(&quot;\\ttopic: &#39;{}&#39;&quot;.format(topic))</span></span></code></pre></div>`,16)),a("p",null,[s[39]||(s[39]=n("下一步就是使用 ",-1)),s[40]||(s[40]=a("code",null,"struct",-1)),s[41]||(s[41]=n(" 庫讀取二進制數據，它可以將二進制數據段轉換為明確的數值。首先，計算數據包中數值的組數。本例中使用的 16 個位的有符號整數對應的是 ",-1)),s[42]||(s[42]=a("code",null,"struct",-1)),s[43]||(s[43]=n()),i(p,{href:"https://docs.python.org/3/library/struct.html#format-characters"},{default:e(()=>[...s[38]||(s[38]=[n("格式字符",-1)])]),_:1}),s[44]||(s[44]=n(" 中的 ",-1)),s[45]||(s[45]=a("code",null,"h",-1)),s[46]||(s[46]=n("：",-1))]),s[78]||(s[78]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>packet_size = len(data_buffer) // struct.calcsize(&quot;h&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;\\tpacket size: {:d}&quot;.format(packet_size))</span></span></code></pre></div><p>知道數據包中有多少組數據後，就可以通過構建一個包含數據組數和數據類型的字符串，來定義格式了（比如“<code>16h</code>”）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct_format = &quot;{:d}h&quot;.format(packet_size)</span></span></code></pre></div><p>將二進制數據串轉換為可直接打印的一系列數字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data = struct.unpack(struct_format, data_buffer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;\\tdata: {}&quot;.format(data))</span></span></code></pre></div><h4 id="完整-python-代碼" tabindex="-1">完整 Python 代碼 <a class="header-anchor" href="#完整-python-代碼" aria-label="Permalink to “完整 Python 代碼”">​</a></h4><p>下面是 Python 實現的完整的接收端：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import zmq</span></span>
<span class="line"><span>import struct</span></span>
<span class="line"><span></span></span>
<span class="line"><span>topic = &quot;fancyhw_data&quot;.encode(&#39;ascii&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Reading messages with topic: {}&quot;.format(topic))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>with zmq.Context() as context:</span></span>
<span class="line"><span>    socket = context.socket(zmq.SUB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    socket.connect(&quot;tcp://127.0.0.1:5555&quot;)</span></span>
<span class="line"><span>    socket.setsockopt(zmq.SUBSCRIBE, topic)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    i = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try:</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span>            binary_topic, data_buffer = socket.recv().split(b&#39; &#39;, 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            topic = binary_topic.decode(encoding = &#39;ascii&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            print(&quot;Message {:d}:&quot;.format(i))</span></span>
<span class="line"><span>            print(&quot;\\ttopic: &#39;{}&#39;&quot;.format(topic))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            packet_size = len(data_buffer) // struct.calcsize(&quot;h&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            print(&quot;\\tpacket size: {:d}&quot;.format(packet_size))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            struct_format = &quot;{:d}h&quot;.format(packet_size)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            data = struct.unpack(struct_format, data_buffer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            print(&quot;\\tdata: {}&quot;.format(data))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            i += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except KeyboardInterrupt:</span></span>
<span class="line"><span>        socket.close()</span></span>
<span class="line"><span>    except Exception as error:</span></span>
<span class="line"><span>        print(&quot;ERROR: {}&quot;.format(error))</span></span>
<span class="line"><span>        socket.close()</span></span></code></pre></div><p>將上面的內容保存到名為 <code>online_analysis.py</code> 的文件。Python 代碼不需要編譯，你可以直接運行它。</p><p>運行輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./online_analysis.py</span></span>
<span class="line"><span>Reading messages with topic: b&#39;fancyhw_data&#39;</span></span>
<span class="line"><span>Message 0:</span></span>
<span class="line"><span>        topic: &#39;fancyhw_data&#39;</span></span>
<span class="line"><span>        packet size: 16</span></span>
<span class="line"><span>        data: (20946, -23616, 9865, 31416, -15911, -10845, -5332, 25662, 10955, -32501, -18717, -24490, -16511, -28861, 24205, 26568)</span></span>
<span class="line"><span>Message 1:</span></span>
<span class="line"><span>        topic: &#39;fancyhw_data&#39;</span></span>
<span class="line"><span>        packet size: 16</span></span>
<span class="line"><span>        data: (12505, 31355, 14083, -19654, -9141, 14532, -25591, 31203, 10428, -25564, -732, -7979, 9529, -27982, 29610, 30475)</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span></code></pre></div><h3 id="小結" tabindex="-1">小結 <a class="header-anchor" href="#小結" aria-label="Permalink to “小結”">​</a></h3><p>本教程介紹了一種新方式，實現從基於 C 的硬件接口收集數據，並分發到基於 Python 的基礎設施的功能。藉此可以獲取數據供後續分析，或者轉送到任意數量的接收端去。它採用了一個消息庫實現數據在發送者和處理者之間的傳送，來取代同樣功能規模龐大的軟件。</p><p>本教程還引出了我稱之為“軟件粒度”的概念，換言之，就是將軟件細分為更小的部分。這種做法的優點之一就是，使得同時採用不同的編程語言實現最簡接口作為不同部分之間溝通的組件成為可能。</p>`,14)),a("p",null,[s[48]||(s[48]=n("實踐中，這種設計使得軟件工程師能以更獨立、合作更高效的方式做事。不同的團隊可以專注於數據分析的不同方面，可以選擇自己中意的實現工具。這種做法的另一個優點是實現了零代價的並行，因為所有的進程都可以並行運行。",-1)),i(p,{href:"https://zeromq.org/"},{default:e(()=>[...s[47]||(s[47]=[n("ZeroMQ 消息庫",-1)])]),_:1}),s[49]||(s[49]=n(" 是個令人讚歎的軟件，使用它可以讓工作大大簡化。",-1))]),s[79]||(s[79]=a("hr",null,null,-1)),a("p",null,[s[51]||(s[51]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/20/3/zeromq-c-python"},{default:e(()=>[...s[50]||(s[50]=[n("https://opensource.com/article/20/3/zeromq-c-python",-1)])]),_:1})]),a("p",null,[s[56]||(s[56]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/cristianofontana"},{default:e(()=>[...s[52]||(s[52]=[n("Cristiano L. Fontana",-1)])]),_:1}),s[57]||(s[57]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[53]||(s[53]=[n("lujun9972",-1)])]),_:1}),s[58]||(s[58]=n(" 譯者：",-1)),i(p,{href:"https://github.com/%E8%AD%AF%E8%80%85ID"},{default:e(()=>[...s[54]||(s[54]=[n("silentdawn-zz",-1)])]),_:1}),s[59]||(s[59]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[55]||(s[55]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[62]||(s[62]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[60]||(s[60]=[n("LCTT",-1)])]),_:1}),s[63]||(s[63]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[61]||(s[61]=[n("Linux中國",-1)])]),_:1}),s[64]||(s[64]=n(" 榮譽推出",-1))])])}const q=t(d,[["render",h]]);export{_ as __pageData,q as default};
