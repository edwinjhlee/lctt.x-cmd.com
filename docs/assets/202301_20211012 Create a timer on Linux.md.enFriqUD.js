import{_ as l,a0 as r,w as o,s as u,I as a,x as n,a1 as t,A as i,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"在 Linux 中创建定时器 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中创建定时器 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中创建定时器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中创建定时器 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20211012 Create a timer on Linux","title":"在 Linux 中创建定时器","tag":"202301","desc":""},"relativePath":"202301/20211012 Create a timer on Linux.md","filePath":"[post].md"}'),d={name:"202301/20211012 Create a timer on Linux.md"};function m(g,s,c,f,v,b){const p=r("Link");return o(),u("div",null,[s[42]||(s[42]=a("h1",{id:"在-linux-中创建定时器",tabindex:"-1"},[n("在 Linux 中创建定时器 "),a("a",{class:"header-anchor",href:"#在-linux-中创建定时器","aria-label":"Permalink to “在 Linux 中创建定时器”"},"​")],-1)),s[43]||(s[43]=a("blockquote",null,[a("p",null,"这是一个演示如何创建 POSIX 兼容的间隔定时器的教程。")],-1)),s[44]||(s[44]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202301/09/150238f1d60cmvssr9d0js.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("对开发人员来说，定时某些事件是一项常见任务。定时器的常见场景是看门狗、任务的循环执行，或在特定时间安排事件。在这篇文章中，我将演示如何使用 ",-1)),t(p,{href:"https://linux.die.net/man/2/timer_create"},{default:i(()=>[...s[0]||(s[0]=[n("timer_create(...)",-1)])]),_:1}),s[2]||(s[2]=n(" 创建一个 POSIX 兼容的间隔定时器。",-1))]),a("p",null,[s[4]||(s[4]=n("你可以从 ",-1)),t(p,{href:"https://github.com/hANSIc99/posix_timers"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[5]||(s[5]=n(" 下载下面样例的源代码。",-1))]),s[45]||(s[45]=a("h3",{id:"准备-qt-creator",tabindex:"-1"},[n("准备 Qt Creator "),a("a",{class:"header-anchor",href:"#准备-qt-creator","aria-label":"Permalink to “准备 Qt Creator”"},"​")],-1)),a("p",null,[s[8]||(s[8]=n("我使用 ",-1)),t(p,{href:"https://www.qt.io/product/development-tools"},{default:i(()=>[...s[6]||(s[6]=[n("Qt Creator",-1)])]),_:1}),s[9]||(s[9]=n(" 作为该样例的 IDE。为了在 Qt Creator 运行和调试样例代码，请克隆 ",-1)),t(p,{href:"https://github.com/hANSIc99/posix_timers"},{default:i(()=>[...s[7]||(s[7]=[n("GitHub",-1)])]),_:1}),s[10]||(s[10]=n(" 上的仓库，打开 Qt Creator，在 “",-1)),s[11]||(s[11]=a("ruby",null,[n("文件"),a("rt",null,"File")],-1)),s[12]||(s[12]=n(" -> ",-1)),s[13]||(s[13]=a("ruby",null,[n("打开文件或项目……"),a("rt",null,"Open File or Project...")],-1)),s[14]||(s[14]=n("” 并选择 “CMakeLists.txt”：",-1))]),s[46]||(s[46]=e(`<p><img src="https://opensource.com/sites/default/files/posix_timers_open_project_0.png" alt="Qt Creator open project"></p><p><em>在 Qt Creator 中打开项目</em></p><p>选择工具链之后，点击 “<ruby>配置项目<rt>Configure Project</rt></ruby>”。这个项目包括三个独立的样例（我们在这篇文章中将只会用到其中的两个）。使用绿色标记出来的菜单，可以在每个样例的配置之间切换，并为每个样例激活在终端运行 “<ruby>在终端中运行<rt>Run in terminal</rt></ruby>”（用黄色标记）。当前用于构建和调试的活动示例可以通过左下角的“<ruby>调试<rt>Debug</rt></ruby>” 按钮进行选择（参见下面的橙色标记）。</p><p><img src="https://opensource.com/sites/default/files/posix_timers_project_configuration_2.png" alt="Project configuration"></p><p><em>项目配置</em></p><h3 id="线程定时器" tabindex="-1">线程定时器 <a class="header-anchor" href="#线程定时器" aria-label="Permalink to “线程定时器”">​</a></h3><p>让我们看看 <code>simple_threading_timer.c</code> 样例。这是最简单的一个。它展示了一个调用了超时函数 <code>expired</code> 的间隔定时器是如何被创建的。在每次过期时，都会创建一个新的线程，在其中调用函数 <code>expired</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;time.h&gt;</span></span>
<span class="line"><span>#include &lt;signal.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;errno.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void expired(union sigval timer_data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pid_t gettid(void);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct t_eventData{</span></span>
<span class="line"><span>    int myData;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int res = 0;</span></span>
<span class="line"><span>    timer_t timerId = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    struct t_eventData eventData = { .myData = 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /*  sigevent 指定了过期时要执行的操作  */</span></span>
<span class="line"><span>    struct sigevent sev = { 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定启动延时时间和间隔时间 </span></span>
<span class="line"><span>    * it_value和it_interval 不能为零 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    struct itimerspec its = {   .it_value.tv_sec  = 1,</span></span>
<span class="line"><span>                                .it_value.tv_nsec = 0,</span></span>
<span class="line"><span>                                .it_interval.tv_sec  = 1,</span></span>
<span class="line"><span>                                .it_interval.tv_nsec = 0</span></span>
<span class="line"><span>                            };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Simple Threading Timer - thread-id: %d\\n&quot;, gettid());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sev.sigev_notify = SIGEV_THREAD;</span></span>
<span class="line"><span>    sev.sigev_notify_function = &amp;amp;expired;</span></span>
<span class="line"><span>    sev.sigev_value.sival_ptr = &amp;amp;eventData;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 创建定时器 */</span></span>
<span class="line"><span>    res = timer_create(CLOCK_REALTIME, &amp;amp;sev, &amp;amp;timerId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (res != 0){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error timer_create: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 启动定时器 */</span></span>
<span class="line"><span>    res = timer_settime(timerId, 0, &amp;amp;its, NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (res != 0){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error timer_settime: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Press ETNER Key to Exit\\n&quot;);</span></span>
<span class="line"><span>    while(getchar()!=&#39;\\n&#39;){}</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void expired(union sigval timer_data){</span></span>
<span class="line"><span>    struct t_eventData *data = timer_data.sival_ptr;</span></span>
<span class="line"><span>    printf(&quot;Timer fired %d - thread-id: %d\\n&quot;, ++data-&gt;myData, gettid());</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这种方法的优点是在代码和简单调试方面用量小。缺点是由于到期时创建新线程而增加额外的开销，因此行为不太确定。</p><h3 id="中断信号定时器" tabindex="-1">中断信号定时器 <a class="header-anchor" href="#中断信号定时器" aria-label="Permalink to “中断信号定时器”">​</a></h3>`,10)),a("p",null,[s[16]||(s[16]=n("超时定时器通知的另一种可能性是基于 ",-1)),t(p,{href:"https://man7.org/linux/man-pages/man3/signal.3p.html"},{default:i(()=>[...s[15]||(s[15]=[n("内核信号",-1)])]),_:1}),s[17]||(s[17]=n("。内核不是在每次定时器过期时创建一个新线程，而是向进程发送一个信号，进程被中断，并调用相应的信号处理程序。",-1))]),a("p",null,[s[19]||(s[19]=n("由于接收信号时的默认操作是终止进程（参考 ",-1)),t(p,{href:"https://linux.die.net/man/7/signal"},{default:i(()=>[...s[18]||(s[18]=[n("signal",-1)])]),_:1}),s[20]||(s[20]=n(" 手册页），我们必须要提前设置好 Qt Creator，以便进行正确的调试。",-1))]),s[47]||(s[47]=e('<p>当被调试对象接收到一个信号时，Qt Creator 的默认行为是：</p><ul><li>中断执行并切换到调试器上下文。</li><li>显示一个弹出窗口，通知用户接收到信号。</li></ul><p>这两种操作都不需要，因为信号的接收是我们应用程序的一部分。</p><p>Qt Creator 在后台使用 GDB。为了防止 GDB 在进程接收到信号时停止执行，进入 “<ruby>工具<rt>Tools</rt></ruby> -&gt; <ruby>选项<rt>Options</rt></ruby>” 菜单，选择 “<ruby>调试器<rt>Debugger</rt></ruby>”，并导航到 “<ruby>本地变量和表达式<rt>Locals &amp; Expressions</rt></ruby>”。添加下面的表达式到 “<ruby>定制调试助手<rt>Debugging Helper Customization</rt></ruby>”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>handle SIG34 nostop pass</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/posix_timers_sig34_nostop_pass.png" alt="Signal no stop with error"></p><p><em>Sig 34 时不停止</em></p>',7)),a("p",null,[s[22]||(s[22]=n("你可以在 ",-1)),t(p,{href:"https://sourceware.org/gdb/onlinedocs/gdb/Signals.html"},{default:i(()=>[...s[21]||(s[21]=[n("GDB 文档",-1)])]),_:1}),s[23]||(s[23]=n(" 中找到更多关于 GDB 信号处理的信息。",-1))]),s[48]||(s[48]=e(`<p>接下来，当我们在信号处理程序中停止时，我们要抑制每次接收到信号时通知我们的弹出窗口:</p><p><img src="https://opensource.com/sites/default/files/posix_timers_sig34_pop_up_2.png" alt="Signal 34 pop up box"></p><p><em>Signal 34 弹出窗口</em></p><p>为此，导航到 “GDB” 标签并取消勾选标记的复选框:</p><p><img src="https://opensource.com/sites/default/files/posix_timers_signal_windows.png" alt="Timer signal windows"></p><p><em>定时器信号窗口</em></p><p>现在你可以正确的调试 <code>signal_interrupt_timer</code>。真正的信号定时器的实施会更复杂一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;signal.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;signal.h&gt;</span></span>
<span class="line"><span>#include &lt;time.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;errno.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define UNUSED(x) (void)(x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static void handler(int sig, siginfo_t *si, void *uc);</span></span>
<span class="line"><span>pid_t gettid(void);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct t_eventData{</span></span>
<span class="line"><span>    int myData;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int res = 0;</span></span>
<span class="line"><span>    timer_t timerId = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    struct sigevent sev = { 0 };</span></span>
<span class="line"><span>    struct t_eventData eventData = { .myData = 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定收到信号时的操作 */</span></span>
<span class="line"><span>    struct sigaction sa = { 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定启动延时的时间和间隔时间 */</span></span>
<span class="line"><span>    struct itimerspec its = {   .it_value.tv_sec  = 1,</span></span>
<span class="line"><span>                                .it_value.tv_nsec = 0,</span></span>
<span class="line"><span>                                .it_interval.tv_sec  = 1,</span></span>
<span class="line"><span>                                .it_interval.tv_nsec = 0</span></span>
<span class="line"><span>                            };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Signal Interrupt Timer - thread-id: %d\\n&quot;, gettid());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sev.sigev_notify = SIGEV_SIGNAL; // Linux-specific</span></span>
<span class="line"><span>    sev.sigev_signo = SIGRTMIN;</span></span>
<span class="line"><span>    sev.sigev_value.sival_ptr = &amp;amp;eventData;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 创建定时器 */</span></span>
<span class="line"><span>    res = timer_create(CLOCK_REALTIME, &amp;amp;sev, &amp;amp;timerId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ( res != 0){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error timer_create: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定信号和处理程序 */</span></span>
<span class="line"><span>    sa.sa_flags = SA_SIGINFO;</span></span>
<span class="line"><span>    sa.sa_sigaction = handler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 初始化信号 */</span></span>
<span class="line"><span>    sigemptyset(&amp;amp;sa.sa_mask);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Establishing handler for signal %d\\n&quot;, SIGRTMIN);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 注册信号处理程序 */</span></span>
<span class="line"><span>    if (sigaction(SIGRTMIN, &amp;amp;sa, NULL) == -1){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error sigaction: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 启动定时器 */</span></span>
<span class="line"><span>    res = timer_settime(timerId, 0, &amp;amp;its, NULL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ( res != 0){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error timer_settime: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Press ENTER to Exit\\n&quot;);</span></span>
<span class="line"><span>    while(getchar()!=&#39;\\n&#39;){}</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>static void</span></span>
<span class="line"><span>handler(int sig, siginfo_t *si, void *uc)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    UNUSED(sig);</span></span>
<span class="line"><span>    UNUSED(uc);</span></span>
<span class="line"><span>    struct t_eventData *data = (struct t_eventData *) si-&gt;_sifields._rt.si_sigval.sival_ptr;</span></span>
<span class="line"><span>    printf(&quot;Timer fired %d - thread-id: %d\\n&quot;, ++data-&gt;myData, gettid());</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>与线程定时器相比，我们必须初始化信号并注册一个信号处理程序。这种方法性能更好，因为它不会导致创建额外的线程。因此，信号处理程序的执行也更加确定。缺点显然是正确调试需要额外的配置工作。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,10)),a("p",null,[s[25]||(s[25]=n("本文中描述的两种方法都是接近内核的定时器的实现。不过，即使 ",-1)),t(p,{href:"https://linux.die.net/man/2/timer_create"},{default:i(()=>[...s[24]||(s[24]=[n("timer_create(...)",-1)])]),_:1}),s[26]||(s[26]=n(" 函数是 POSIX 规范的一部分，由于数据结构的细微差别，也不可能在 FreeBSD 系统上编译样例代码。除了这个缺点之外，这种实现还为通用计时应用程序提供了细粒度控制。",-1))]),s[49]||(s[49]=a("hr",null,null,-1)),a("p",null,[s[28]||(s[28]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/21/10/linux-timers"},{default:i(()=>[...s[27]||(s[27]=[n("https://opensource.com/article/21/10/linux-timers",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/hansic99"},{default:i(()=>[...s[29]||(s[29]=[n("Stephan Avenwedde",-1)])]),_:1}),s[34]||(s[34]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[30]||(s[30]=[n("lujun9972",-1)])]),_:1}),s[35]||(s[35]=n(" 译者：",-1)),t(p,{href:"https://github.com/FigaroCao"},{default:i(()=>[...s[31]||(s[31]=[n("FigaroCao",-1)])]),_:1}),s[36]||(s[36]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[32]||(s[32]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[39]||(s[39]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[37]||(s[37]=[n("LCTT",-1)])]),_:1}),s[40]||(s[40]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...s[38]||(s[38]=[n("Linux中国",-1)])]),_:1}),s[41]||(s[41]=n(" 荣誉推出",-1))])])}const h=l(d,[["render",m]]);export{T as __pageData,h as default};
