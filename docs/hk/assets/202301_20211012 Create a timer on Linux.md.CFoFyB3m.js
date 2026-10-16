import{_ as l,a0 as r,w as o,s as u,I as a,x as n,a1 as t,A as i,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Linux 中創建定時器 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中創建定時器 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中創建定時器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中創建定時器 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20211012 Create a timer on Linux","title":"在 Linux 中創建定時器","tag":"202301","desc":""},"relativePath":"202301/20211012 Create a timer on Linux.md","filePath":"[post].md"}'),d={name:"202301/20211012 Create a timer on Linux.md"};function m(g,s,c,f,v,b){const p=r("Link");return o(),u("div",null,[s[42]||(s[42]=a("h1",{id:"在-linux-中創建定時器",tabindex:"-1"},[n("在 Linux 中創建定時器 "),a("a",{class:"header-anchor",href:"#在-linux-中創建定時器","aria-label":"Permalink to “在 Linux 中創建定時器”"},"​")],-1)),s[43]||(s[43]=a("blockquote",null,[a("p",null,"這是一個演示如何創建 POSIX 兼容的間隔定時器的教程。")],-1)),s[44]||(s[44]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202301/09/150238f1d60cmvssr9d0js.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("對開發人員來説，定時某些事件是一項常見任務。定時器的常見場景是看門狗、任務的循環執行，或在特定時間安排事件。在這篇文章中，我將演示如何使用 ",-1)),t(p,{href:"https://linux.die.net/man/2/timer_create"},{default:i(()=>[...s[0]||(s[0]=[n("timer_create(...)",-1)])]),_:1}),s[2]||(s[2]=n(" 創建一個 POSIX 兼容的間隔定時器。",-1))]),a("p",null,[s[4]||(s[4]=n("你可以從 ",-1)),t(p,{href:"https://github.com/hANSIc99/posix_timers"},{default:i(()=>[...s[3]||(s[3]=[n("GitHub",-1)])]),_:1}),s[5]||(s[5]=n(" 下載下面樣例的源代碼。",-1))]),s[45]||(s[45]=a("h3",{id:"準備-qt-creator",tabindex:"-1"},[n("準備 Qt Creator "),a("a",{class:"header-anchor",href:"#準備-qt-creator","aria-label":"Permalink to “準備 Qt Creator”"},"​")],-1)),a("p",null,[s[8]||(s[8]=n("我使用 ",-1)),t(p,{href:"https://www.qt.io/product/development-tools"},{default:i(()=>[...s[6]||(s[6]=[n("Qt Creator",-1)])]),_:1}),s[9]||(s[9]=n(" 作為該樣例的 IDE。為了在 Qt Creator 運行和調試樣例代碼，請克隆 ",-1)),t(p,{href:"https://github.com/hANSIc99/posix_timers"},{default:i(()=>[...s[7]||(s[7]=[n("GitHub",-1)])]),_:1}),s[10]||(s[10]=n(" 上的倉庫，打開 Qt Creator，在 “",-1)),s[11]||(s[11]=a("ruby",null,[n("文件"),a("rt",null,"File")],-1)),s[12]||(s[12]=n(" -> ",-1)),s[13]||(s[13]=a("ruby",null,[n("打開文件或項目……"),a("rt",null,"Open File or Project...")],-1)),s[14]||(s[14]=n("” 並選擇 “CMakeLists.txt”：",-1))]),s[46]||(s[46]=e(`<p><img src="https://opensource.com/sites/default/files/posix_timers_open_project_0.png" alt="Qt Creator open project"></p><p><em>在 Qt Creator 中打開項目</em></p><p>選擇工具鏈之後，點擊 “<ruby>配置項目<rt>Configure Project</rt></ruby>”。這個項目包括三個獨立的樣例（我們在這篇文章中將只會用到其中的兩個）。使用綠色標記出來的菜單，可以在每個樣例的配置之間切換，併為每個樣例激活在終端運行 “<ruby>在終端中運行<rt>Run in terminal</rt></ruby>”（用黃色標記）。當前用於構建和調試的活動示例可以通過左下角的“<ruby>調試<rt>Debug</rt></ruby>” 按鈕進行選擇（參見下面的橙色標記）。</p><p><img src="https://opensource.com/sites/default/files/posix_timers_project_configuration_2.png" alt="Project configuration"></p><p><em>項目配置</em></p><h3 id="線程定時器" tabindex="-1">線程定時器 <a class="header-anchor" href="#線程定時器" aria-label="Permalink to “線程定時器”">​</a></h3><p>讓我們看看 <code>simple_threading_timer.c</code> 樣例。這是最簡單的一個。它展示了一個調用了超時函數 <code>expired</code> 的間隔定時器是如何被創建的。在每次過期時，都會創建一個新的線程，在其中調用函數 <code>expired</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>    /*  sigevent 指定了過期時要執行的操作  */</span></span>
<span class="line"><span>    struct sigevent sev = { 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定啓動延時時間和間隔時間 </span></span>
<span class="line"><span>    * it_value和it_interval 不能為零 */</span></span>
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
<span class="line"><span>    /* 創建定時器 */</span></span>
<span class="line"><span>    res = timer_create(CLOCK_REALTIME, &amp;amp;sev, &amp;amp;timerId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (res != 0){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error timer_create: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 啓動定時器 */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這種方法的優點是在代碼和簡單調試方面用量小。缺點是由於到期時創建新線程而增加額外的開銷，因此行為不太確定。</p><h3 id="中斷信號定時器" tabindex="-1">中斷信號定時器 <a class="header-anchor" href="#中斷信號定時器" aria-label="Permalink to “中斷信號定時器”">​</a></h3>`,10)),a("p",null,[s[16]||(s[16]=n("超時定時器通知的另一種可能性是基於 ",-1)),t(p,{href:"https://man7.org/linux/man-pages/man3/signal.3p.html"},{default:i(()=>[...s[15]||(s[15]=[n("內核信號",-1)])]),_:1}),s[17]||(s[17]=n("。內核不是在每次定時器過期時創建一個新線程，而是向進程發送一個信號，進程被中斷，並調用相應的信號處理程序。",-1))]),a("p",null,[s[19]||(s[19]=n("由於接收信號時的默認操作是終止進程（參考 ",-1)),t(p,{href:"https://linux.die.net/man/7/signal"},{default:i(()=>[...s[18]||(s[18]=[n("signal",-1)])]),_:1}),s[20]||(s[20]=n(" 手冊頁），我們必須要提前設置好 Qt Creator，以便進行正確的調試。",-1))]),s[47]||(s[47]=e('<p>當被調試對象接收到一個信號時，Qt Creator 的默認行為是：</p><ul><li>中斷執行並切換到調試器上下文。</li><li>顯示一個彈出窗口，通知用户接收到信號。</li></ul><p>這兩種操作都不需要，因為信號的接收是我們應用程序的一部分。</p><p>Qt Creator 在後台使用 GDB。為了防止 GDB 在進程接收到信號時停止執行，進入 “<ruby>工具<rt>Tools</rt></ruby> -&gt; <ruby>選項<rt>Options</rt></ruby>” 菜單，選擇 “<ruby>調試器<rt>Debugger</rt></ruby>”，並導航到 “<ruby>本地變量和表達式<rt>Locals &amp; Expressions</rt></ruby>”。添加下面的表達式到 “<ruby>定製調試助手<rt>Debugging Helper Customization</rt></ruby>”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>handle SIG34 nostop pass</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/posix_timers_sig34_nostop_pass.png" alt="Signal no stop with error"></p><p><em>Sig 34 時不停止</em></p>',7)),a("p",null,[s[22]||(s[22]=n("你可以在 ",-1)),t(p,{href:"https://sourceware.org/gdb/onlinedocs/gdb/Signals.html"},{default:i(()=>[...s[21]||(s[21]=[n("GDB 文檔",-1)])]),_:1}),s[23]||(s[23]=n(" 中找到更多關於 GDB 信號處理的信息。",-1))]),s[48]||(s[48]=e(`<p>接下來，當我們在信號處理程序中停止時，我們要抑制每次接收到信號時通知我們的彈出窗口:</p><p><img src="https://opensource.com/sites/default/files/posix_timers_sig34_pop_up_2.png" alt="Signal 34 pop up box"></p><p><em>Signal 34 彈出窗口</em></p><p>為此，導航到 “GDB” 標籤並取消勾選標記的複選框:</p><p><img src="https://opensource.com/sites/default/files/posix_timers_signal_windows.png" alt="Timer signal windows"></p><p><em>定時器信號窗口</em></p><p>現在你可以正確的調試 <code>signal_interrupt_timer</code>。真正的信號定時器的實施會更復雜一些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>    /* 指定收到信號時的操作 */</span></span>
<span class="line"><span>    struct sigaction sa = { 0 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定啓動延時的時間和間隔時間 */</span></span>
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
<span class="line"><span>    /* 創建定時器 */</span></span>
<span class="line"><span>    res = timer_create(CLOCK_REALTIME, &amp;amp;sev, &amp;amp;timerId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if ( res != 0){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error timer_create: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 指定信號和處理程序 */</span></span>
<span class="line"><span>    sa.sa_flags = SA_SIGINFO;</span></span>
<span class="line"><span>    sa.sa_sigaction = handler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 初始化信號 */</span></span>
<span class="line"><span>    sigemptyset(&amp;amp;sa.sa_mask);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;Establishing handler for signal %d\\n&quot;, SIGRTMIN);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 註冊信號處理程序 */</span></span>
<span class="line"><span>    if (sigaction(SIGRTMIN, &amp;amp;sa, NULL) == -1){</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Error sigaction: %s\\n&quot;, strerror(errno));</span></span>
<span class="line"><span>        exit(-1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 啓動定時器 */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>與線程定時器相比，我們必須初始化信號並註冊一個信號處理程序。這種方法性能更好，因為它不會導致創建額外的線程。因此，信號處理程序的執行也更加確定。缺點顯然是正確調試需要額外的配置工作。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,10)),a("p",null,[s[25]||(s[25]=n("本文中描述的兩種方法都是接近內核的定時器的實現。不過，即使 ",-1)),t(p,{href:"https://linux.die.net/man/2/timer_create"},{default:i(()=>[...s[24]||(s[24]=[n("timer_create(...)",-1)])]),_:1}),s[26]||(s[26]=n(" 函數是 POSIX 規範的一部分，由於數據結構的細微差別，也不可能在 FreeBSD 系統上編譯樣例代碼。除了這個缺點之外，這種實現還為通用計時應用程序提供了細粒度控制。",-1))]),s[49]||(s[49]=a("hr",null,null,-1)),a("p",null,[s[28]||(s[28]=n("via: ",-1)),t(p,{href:"https://opensource.com/article/21/10/linux-timers"},{default:i(()=>[...s[27]||(s[27]=[n("https://opensource.com/article/21/10/linux-timers",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("作者：",-1)),t(p,{href:"https://opensource.com/users/hansic99"},{default:i(()=>[...s[29]||(s[29]=[n("Stephan Avenwedde",-1)])]),_:1}),s[34]||(s[34]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[30]||(s[30]=[n("lujun9972",-1)])]),_:1}),s[35]||(s[35]=n(" 譯者：",-1)),t(p,{href:"https://github.com/FigaroCao"},{default:i(()=>[...s[31]||(s[31]=[n("FigaroCao",-1)])]),_:1}),s[36]||(s[36]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[32]||(s[32]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[39]||(s[39]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[37]||(s[37]=[n("LCTT",-1)])]),_:1}),s[40]||(s[40]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...s[38]||(s[38]=[n("Linux中國",-1)])]),_:1}),s[41]||(s[41]=n(" 榮譽推出",-1))])])}const h=l(d,[["render",m]]);export{T as __pageData,h as default};
