import{_ as t,a0 as o,w as r,s as c,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"使用 ZeroMQ 消息库在 C 和 Python 间共享数据 | LCTT x X-CMD","titleTemplate":false,"description":"使用 ZeroMQ 消息库在 C 和 Python 间共享数据 | LCTT (202008) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ZeroMQ 消息库在 C 和 Python 间共享数据 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ZeroMQ 消息库在 C 和 Python 间共享数据 | LCTT (202008) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202008/20200318 Share data between C and Python with this messaging library","title":"使用 ZeroMQ 消息库在 C 和 Python 间共享数据","tag":"202008","desc":""},"relativePath":"202008/20200318 Share data between C and Python with this messaging library.md","filePath":"[post].md"}'),d={name:"202008/20200318 Share data between C and Python with this messaging library.md"};function h(u,s,g,k,b,f){const p=o("Link");return r(),c("div",null,[s[65]||(s[65]=a("h1",{id:"使用-zeromq-消息库在-c-和-python-间共享数据",tabindex:"-1"},[n("使用 ZeroMQ 消息库在 C 和 Python 间共享数据 "),a("a",{class:"header-anchor",href:"#使用-zeromq-消息库在-c-和-python-间共享数据","aria-label":"Permalink to “使用 ZeroMQ 消息库在 C 和 Python 间共享数据”"},"​")],-1)),s[66]||(s[66]=a("blockquote",null,[a("p",null,"ZeroMQ 是一个快速灵活的消息库，用于数据收集和不同编程语言间的数据共享。")],-1)),s[67]||(s[67]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202008/08/202106uale11l1qf11slzw.jpg",alt:""})],-1)),s[68]||(s[68]=a("p",null,"作为软件工程师，我有多次在要求完成指定任务时感到浑身一冷的经历。其中有一次，我必须在一些新的硬件基础设施和云基础设施之间写一个接口，这些硬件需要 C 语言，而云基础设施主要是用 Python。",-1)),a("p",null,[s[2]||(s[2]=n("实现的方式之一是 ",-1)),i(p,{href:"https://docs.python.org/3/extending/extending.html"},{default:e(()=>[...s[0]||(s[0]=[n("用 C 写扩展模块",-1)])]),_:1}),s[3]||(s[3]=n("，Python 支持 C 扩展的调用。快速浏览文档后发现，这需要编写大量的 C 代码。这样做的话，在有些情况下效果还不错，但不是我喜欢的方式。另一种方式就是将两个任务放在不同的进程中，并使用 ",-1)),i(p,{href:"https://zeromq.org/"},{default:e(()=>[...s[1]||(s[1]=[n("ZeroMQ 消息库",-1)])]),_:1}),s[4]||(s[4]=n(" 在两者之间交换消息。",-1))]),a("p",null,[s[6]||(s[6]=n("在发现 ZeroMQ 之前，遇到这种类型的情况时，我选择了编写扩展的方式。这种方式不算太差，但非常费时费力。如今，为了避免那些问题，我将一个系统细分为独立的进程，通过 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Network_socket"},{default:e(()=>[...s[5]||(s[5]=[n("通信套接字",-1)])]),_:1}),s[7]||(s[7]=n(" 发送消息来交换信息。这样，不同的编程语言可以共存，每个进程也变简单了，同时也容易调试。",-1))]),s[69]||(s[69]=a("p",null,"ZeroMQ 提供了一个更简单的过程：",-1)),s[70]||(s[70]=a("ol",null,[a("li",null,"编写一小段 C 代码，从硬件读取数据，然后把发现的东西作为消息发送出去。"),a("li",null,"使用 Python 编写接口，实现新旧基础设施之间的对接。")],-1)),a("p",null,[i(p,{href:"https://en.wikipedia.org/wiki/Pieter_Hintjens"},{default:e(()=>[...s[8]||(s[8]=[n("Pieter Hintjens",-1)])]),_:1}),s[10]||(s[10]=n(" 是 ZeroMQ 项目发起者之一，他是个拥有 ",-1)),i(p,{href:"http://hintjens.com/"},{default:e(()=>[...s[9]||(s[9]=[n("有趣视角和作品",-1)])]),_:1}),s[11]||(s[11]=n(" 的非凡人物。",-1))]),s[71]||(s[71]=a("h3",{id:"准备",tabindex:"-1"},[n("准备 "),a("a",{class:"header-anchor",href:"#准备","aria-label":"Permalink to “准备”"},"​")],-1)),s[72]||(s[72]=a("p",null,"本教程中，需要：",-1)),a("ul",null,[a("li",null,[s[14]||(s[14]=n("一个 C 编译器（例如 ",-1)),i(p,{href:"https://gcc.gnu.org/"},{default:e(()=>[...s[12]||(s[12]=[n("GCC",-1)])]),_:1}),s[15]||(s[15]=n(" 或 ",-1)),i(p,{href:"https://clang.llvm.org/"},{default:e(()=>[...s[13]||(s[13]=[n("Clang",-1)])]),_:1}),s[16]||(s[16]=n("）",-1))]),a("li",null,[i(p,{href:"https://github.com/zeromq/libzmq#installation-of-binary-packages-"},{default:e(()=>[...s[17]||(s[17]=[n("libzmq 库",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://www.python.org/downloads/"},{default:e(()=>[...s[18]||(s[18]=[n("Python 3",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://zeromq.org/languages/python/"},{default:e(()=>[...s[19]||(s[19]=[n("ZeroMQ 的 Python 封装",-1)])]),_:1})])]),s[73]||(s[73]=l(`<p>Fedora 系统上的安装方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dnf install clang zeromq zeromq-devel python3 python3-zmq</span></span></code></pre></div><p>Debian 和 Ubuntu 系统上的安装方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ apt-get install clang libzmq5 libzmq3-dev python3 python3-zmq</span></span></code></pre></div><p>如果有问题，参考对应项目的安装指南（上面附有链接）。</p><h3 id="编写硬件接口库" tabindex="-1">编写硬件接口库 <a class="header-anchor" href="#编写硬件接口库" aria-label="Permalink to “编写硬件接口库”">​</a></h3><p>因为这里针对的是个设想的场景，本教程虚构了包含两个函数的操作库：</p><ul><li><code>fancyhw_init()</code> 用来初始化（设想的）硬件</li><li><code>fancyhw_read_val()</code> 用于返回从硬件读取的数据</li></ul><p>将库的完整代码保存到文件 <code>libfancyhw.h</code> 中:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#ifndef LIBFANCYHW_H</span></span>
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
<span class="line"><span>#endif</span></span></code></pre></div><p>这个库可以模拟你要在不同语言实现的组件间交换的数据，中间有个随机数发生器。</p><h3 id="设计-c-接口" tabindex="-1">设计 C 接口 <a class="header-anchor" href="#设计-c-接口" aria-label="Permalink to “设计 C 接口”">​</a></h3><p>下面从包含管理数据传输的库开始，逐步实现 C 接口。</p><h4 id="需要的库" tabindex="-1">需要的库 <a class="header-anchor" href="#需要的库" aria-label="Permalink to “需要的库”">​</a></h4><p>开始先加载必要的库（每个库的作用见代码注释）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// For printf()</span></span>
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
<span class="line"><span>#include &quot;libfancyhw.h&quot;</span></span></code></pre></div><h4 id="必要的参数" tabindex="-1">必要的参数 <a class="header-anchor" href="#必要的参数" aria-label="Permalink to “必要的参数”">​</a></h4><p>定义 <code>main</code> 函数和后续过程中必要的参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const unsigned int INIT_PARAM = 12345;</span></span>
<span class="line"><span>    const unsigned int REPETITIONS = 10;</span></span>
<span class="line"><span>    const unsigned int PACKET_SIZE = 16;</span></span>
<span class="line"><span>    const char *TOPIC = &quot;fancyhw_data&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span></code></pre></div><h4 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to “初始化”">​</a></h4><p>所有的库都需要初始化。虚构的那个只需要一个参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fancyhw_init(INIT_PARAM);</span></span></code></pre></div><p>ZeroMQ 库需要实打实的初始化。首先，定义对象 <code>context</code>，它是用来管理全部的套接字的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void *context = zmq_ctx_new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (!context)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_ctx_new(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_FAILURE;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>之后定义用来发送数据的套接字。ZeroMQ 支持若干种套接字，各有其用。使用 <code>publish</code> 套接字（也叫 <code>PUB</code> 套接字），可以复制消息并分发到多个接收端。这使得你可以让多个接收端接收同一个消息。没有接收者的消息将被丢弃（即不会入消息队列）。用法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void *data_socket = zmq_socket(context, ZMQ_PUB);</span></span></code></pre></div>`,26)),a("p",null,[s[22]||(s[22]=n("套接字需要绑定到一个具体的地址，这样客户端就知道要连接哪里了。本例中，使用了 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol"},{default:e(()=>[...s[20]||(s[20]=[n("TCP 传输层",-1)])]),_:1}),s[23]||(s[23]=n("（当然也有 ",-1)),i(p,{href:"http://zguide.zeromq.org/page:all#Plugging-Sockets-into-the-Topology"},{default:e(()=>[...s[21]||(s[21]=[n("其它选项",-1)])]),_:1}),s[24]||(s[24]=n("，但 TCP 是不错的默认选择）：",-1))]),s[74]||(s[74]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const int rb = zmq_bind(data_socket, &quot;tcp://*:5555&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (rb != 0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_ctx_new(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_FAILURE;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下一步, 计算一些后续要用到的值。 注意下面代码中的 <code>TOPIC</code>，因为 <code>PUB</code> 套接字发送的消息需要绑定一个主题。主题用于供接收者过滤消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const size_t topic_size = strlen(TOPIC);</span></span>
<span class="line"><span>const size_t envelope_size = topic_size + 1 + PACKET_SIZE * sizeof(int16_t);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;Topic: %s; topic size: %zu; Envelope size: %zu\\n&quot;, TOPIC, topic_size, envelope_size);</span></span></code></pre></div><h4 id="发送消息" tabindex="-1">发送消息 <a class="header-anchor" href="#发送消息" aria-label="Permalink to “发送消息”">​</a></h4><p>启动一个发送消息的循环，循环 <code>REPETITIONS</code> 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for (unsigned int i = 0; i &lt; REPETITIONS; i++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ...</span></span></code></pre></div><p>发送消息前，先填充一个长度为 <code>PACKET_SIZE</code> 的缓冲区。本库提供的是 16 个位的有符号整数。因为 C 语言中 <code>int</code> 类型占用空间大小与平台相关，不是确定的值，所以要使用指定宽度的 <code>int</code> 变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int16_t buffer[PACKET_SIZE];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (unsigned int j = 0; j &lt; PACKET_SIZE; j++)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    buffer[j] = fancyhw_read_val();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;Read %u data values\\n&quot;, PACKET_SIZE);</span></span></code></pre></div><p>消息的准备和发送的第一步是创建 ZeroMQ 消息，为消息分配必要的内存空间。空白的消息是用于封装要发送的数据的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zmq_msg_t envelope;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const int rmi = zmq_msg_init_size(&amp;envelope, envelope_size);</span></span>
<span class="line"><span>if (rmi != 0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_msg_init_size(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10)),a("p",null,[s[26]||(s[26]=n("现在内存空间已分配，数据保存在 ZeroMQ 消息 “信封”中。函数 ",-1)),s[27]||(s[27]=a("code",null,"zmq_msg_data()",-1)),s[28]||(s[28]=n(" 返回一个指向封装数据缓存区顶端的指针。第一部分是主题，之后是一个空格，最后是二进制数。主题和二进制数据之间的分隔符采用空格字符。需要遍历缓存区的话，使用类型转换和 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Pointer_%28computer_programming%29%23C_and_C++"},{default:e(()=>[...s[25]||(s[25]=[n("指针算法",-1)])]),_:1}),s[29]||(s[29]=n("。（感谢 C 语言，让事情变得直截了当。）做法如下：",-1))]),s[75]||(s[75]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>memcpy(zmq_msg_data(&amp;envelope), TOPIC, topic_size);</span></span>
<span class="line"><span>memcpy((void*)((char*)zmq_msg_data(&amp;envelope) + topic_size), &quot; &quot;, 1);</span></span>
<span class="line"><span>memcpy((void*)((char*)zmq_msg_data(&amp;envelope) + 1 + topic_size), buffer, PACKET_SIZE * sizeof(int16_t))</span></span></code></pre></div><p>通过 <code>data_socket</code> 发送消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const size_t rs = zmq_msg_send(&amp;envelope, data_socket, 0);</span></span>
<span class="line"><span>if (rs != envelope_size)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;ERROR: ZeroMQ error occurred during zmq_msg_send(): %s\\n&quot;, zmq_strerror(errno));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用数据之前要先解除封装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>zmq_msg_close(&amp;envelope);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;Message sent; i: %u, topic: %s\\n&quot;, i, TOPIC);</span></span></code></pre></div><h4 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to “清理”">​</a></h4>`,6)),a("p",null,[s[31]||(s[31]=n("C 语言不提供 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"},{default:e(()=>[...s[30]||(s[30]=[n("垃圾收集",-1)])]),_:1}),s[32]||(s[32]=n(" 功能，用完之后记得要自己扫尾。发送消息之后结束程序之前，需要运行扫尾代码，释放分配的内存:",-1))]),s[76]||(s[76]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const int rc = zmq_close(data_socket);</span></span>
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
<span class="line"><span>return EXIT_SUCCESS;</span></span></code></pre></div><h4 id="完整-c-代码" tabindex="-1">完整 C 代码 <a class="header-anchor" href="#完整-c-代码" aria-label="Permalink to “完整 C 代码”">​</a></h4><p>保存下面完整的接口代码到本地名为 <code>hw_interface.c</code> 的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// For printf()</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>用如下命令编译：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ clang -std=c99 -I. hw_interface.c -lzmq -o hw_interface</span></span></code></pre></div><p>如果没有编译错误，你就可以运行这个接口了。贴心的是，ZeroMQ <code>PUB</code> 套接字可以在没有任何应用发送或接受数据的状态下运行，这简化了使用复杂度，因为这样不限制进程启动的次序。</p><p>运行该接口：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./hw_interface</span></span>
<span class="line"><span>Topic: fancyhw_data; topic size: 12; Envelope size: 45</span></span>
<span class="line"><span>Read 16 data values</span></span>
<span class="line"><span>Message sent; i: 0, topic: fancyhw_data</span></span>
<span class="line"><span>Read 16 data values</span></span>
<span class="line"><span>Message sent; i: 1, topic: fancyhw_data</span></span>
<span class="line"><span>Read 16 data values</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>输出显示数据已经通过 ZeroMQ 完成发送，现在要做的是让一个程序去读数据。</p><h3 id="编写-python-数据处理器" tabindex="-1">编写 Python 数据处理器 <a class="header-anchor" href="#编写-python-数据处理器" aria-label="Permalink to “编写 Python 数据处理器”">​</a></h3><p>现在已经准备好从 C 程序向 Python 应用传送数据了。</p><h4 id="库" tabindex="-1">库 <a class="header-anchor" href="#库" aria-label="Permalink to “库”">​</a></h4><p>需要两个库帮助实现数据传输。首先是 ZeroMQ 的 Python 封装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m pip install zmq</span></span></code></pre></div>`,15)),a("p",null,[s[34]||(s[34]=n("另一个就是 ",-1)),i(p,{href:"https://docs.python.org/3/library/struct.html"},{default:e(()=>[...s[33]||(s[33]=[n("struct 库",-1)])]),_:1}),s[35]||(s[35]=n("，用于解码二进制数据。这个库是 Python 标准库的一部分，所以不需要使用 ",-1)),s[36]||(s[36]=a("code",null,"pip",-1)),s[37]||(s[37]=n(" 命令安装。",-1))]),s[77]||(s[77]=l(`<p>Python 程序的第一部分是导入这些库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import zmq</span></span>
<span class="line"><span>import struct</span></span></code></pre></div><h4 id="重要参数" tabindex="-1">重要参数 <a class="header-anchor" href="#重要参数" aria-label="Permalink to “重要参数”">​</a></h4><p>使用 ZeroMQ 时，只能向常量 <code>TOPIC</code> 定义相同的接收端发送消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>topic = &quot;fancyhw_data&quot;.encode(&#39;ascii&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Reading messages with topic: {}&quot;.format(topic))</span></span></code></pre></div><h4 id="初始化-1" tabindex="-1">初始化 <a class="header-anchor" href="#初始化-1" aria-label="Permalink to “初始化”">​</a></h4><p>下一步，初始化上下文和套接字。使用 <code>subscribe</code> 套接字（也称为 <code>SUB</code> 套接字），它是 <code>PUB</code> 套接字的天生伴侣。这个套接字发送时也需要匹配主题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>with zmq.Context() as context:</span></span>
<span class="line"><span>    socket = context.socket(zmq.SUB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    socket.connect(&quot;tcp://127.0.0.1:5555&quot;)</span></span>
<span class="line"><span>    socket.setsockopt(zmq.SUBSCRIBE, topic)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    i = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span></code></pre></div><h4 id="接收消息" tabindex="-1">接收消息 <a class="header-anchor" href="#接收消息" aria-label="Permalink to “接收消息”">​</a></h4><p>启动一个无限循环，等待接收发送到 <code>SUB</code> 套接字的新消息。这个循环会在你按下 <code>Ctrl+C</code> 组合键或者内部发生错误时终止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    try:</span></span>
<span class="line"><span>        while True:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ... # we will fill this in next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    except KeyboardInterrupt:</span></span>
<span class="line"><span>        socket.close()</span></span>
<span class="line"><span>    except Exception as error:</span></span>
<span class="line"><span>        print(&quot;ERROR: {}&quot;.format(error))</span></span>
<span class="line"><span>        socket.close()</span></span></code></pre></div><p>这个循环等待 <code>recv()</code> 方法获取的新消息，然后将接收到的内容从第一个空格字符处分割开，从而得到主题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>binary_topic, data_buffer = socket.recv().split(b&#39; &#39;, 1)</span></span></code></pre></div><h4 id="解码消息" tabindex="-1">解码消息 <a class="header-anchor" href="#解码消息" aria-label="Permalink to “解码消息”">​</a></h4><p>Python 此时尚不知道主题是个字符串，使用标准 ASCII 编解码器进行解码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>topic = binary_topic.decode(encoding = &#39;ascii&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Message {:d}:&quot;.format(i))</span></span>
<span class="line"><span>print(&quot;\\ttopic: &#39;{}&#39;&quot;.format(topic))</span></span></code></pre></div>`,16)),a("p",null,[s[39]||(s[39]=n("下一步就是使用 ",-1)),s[40]||(s[40]=a("code",null,"struct",-1)),s[41]||(s[41]=n(" 库读取二进制数据，它可以将二进制数据段转换为明确的数值。首先，计算数据包中数值的组数。本例中使用的 16 个位的有符号整数对应的是 ",-1)),s[42]||(s[42]=a("code",null,"struct",-1)),s[43]||(s[43]=n()),i(p,{href:"https://docs.python.org/3/library/struct.html#format-characters"},{default:e(()=>[...s[38]||(s[38]=[n("格式字符",-1)])]),_:1}),s[44]||(s[44]=n(" 中的 ",-1)),s[45]||(s[45]=a("code",null,"h",-1)),s[46]||(s[46]=n("：",-1))]),s[78]||(s[78]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>packet_size = len(data_buffer) // struct.calcsize(&quot;h&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;\\tpacket size: {:d}&quot;.format(packet_size))</span></span></code></pre></div><p>知道数据包中有多少组数据后，就可以通过构建一个包含数据组数和数据类型的字符串，来定义格式了（比如“<code>16h</code>”）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct_format = &quot;{:d}h&quot;.format(packet_size)</span></span></code></pre></div><p>将二进制数据串转换为可直接打印的一系列数字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data = struct.unpack(struct_format, data_buffer)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;\\tdata: {}&quot;.format(data))</span></span></code></pre></div><h4 id="完整-python-代码" tabindex="-1">完整 Python 代码 <a class="header-anchor" href="#完整-python-代码" aria-label="Permalink to “完整 Python 代码”">​</a></h4><p>下面是 Python 实现的完整的接收端：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/env python3</span></span>
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
<span class="line"><span>        socket.close()</span></span></code></pre></div><p>将上面的内容保存到名为 <code>online_analysis.py</code> 的文件。Python 代码不需要编译，你可以直接运行它。</p><p>运行输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./online_analysis.py</span></span>
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
<span class="line"><span>...</span></span></code></pre></div><h3 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to “小结”">​</a></h3><p>本教程介绍了一种新方式，实现从基于 C 的硬件接口收集数据，并分发到基于 Python 的基础设施的功能。借此可以获取数据供后续分析，或者转送到任意数量的接收端去。它采用了一个消息库实现数据在发送者和处理者之间的传送，来取代同样功能规模庞大的软件。</p><p>本教程还引出了我称之为“软件粒度”的概念，换言之，就是将软件细分为更小的部分。这种做法的优点之一就是，使得同时采用不同的编程语言实现最简接口作为不同部分之间沟通的组件成为可能。</p>`,14)),a("p",null,[s[48]||(s[48]=n("实践中，这种设计使得软件工程师能以更独立、合作更高效的方式做事。不同的团队可以专注于数据分析的不同方面，可以选择自己中意的实现工具。这种做法的另一个优点是实现了零代价的并行，因为所有的进程都可以并行运行。",-1)),i(p,{href:"https://zeromq.org/"},{default:e(()=>[...s[47]||(s[47]=[n("ZeroMQ 消息库",-1)])]),_:1}),s[49]||(s[49]=n(" 是个令人赞叹的软件，使用它可以让工作大大简化。",-1))]),s[79]||(s[79]=a("hr",null,null,-1)),a("p",null,[s[51]||(s[51]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/20/3/zeromq-c-python"},{default:e(()=>[...s[50]||(s[50]=[n("https://opensource.com/article/20/3/zeromq-c-python",-1)])]),_:1})]),a("p",null,[s[56]||(s[56]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/cristianofontana"},{default:e(()=>[...s[52]||(s[52]=[n("Cristiano L. Fontana",-1)])]),_:1}),s[57]||(s[57]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[53]||(s[53]=[n("lujun9972",-1)])]),_:1}),s[58]||(s[58]=n(" 译者：",-1)),i(p,{href:"https://github.com/%E8%AF%91%E8%80%85ID"},{default:e(()=>[...s[54]||(s[54]=[n("silentdawn-zz",-1)])]),_:1}),s[59]||(s[59]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[55]||(s[55]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[62]||(s[62]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[60]||(s[60]=[n("LCTT",-1)])]),_:1}),s[63]||(s[63]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[61]||(s[61]=[n("Linux中国",-1)])]),_:1}),s[64]||(s[64]=n(" 荣誉推出",-1))])])}const q=t(d,[["render",h]]);export{_ as __pageData,q as default};
