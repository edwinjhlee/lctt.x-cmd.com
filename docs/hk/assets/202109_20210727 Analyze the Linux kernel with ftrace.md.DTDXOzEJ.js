import{_ as t,a0 as c,w as r,s as d,I as n,x as a,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"通過 ftrace 來分析 Linux 內核 | LCTT x X-CMD","titleTemplate":false,"description":"通過 ftrace 來分析 Linux 內核 | LCTT (202109) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 ftrace 來分析 Linux 內核 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 ftrace 來分析 Linux 內核 | LCTT (202109) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202109/20210727 Analyze the Linux kernel with ftrace","title":"通過 ftrace 來分析 Linux 內核","tag":"202109","desc":""},"relativePath":"202109/20210727 Analyze the Linux kernel with ftrace.md","filePath":"[post].md"}'),o={name:"202109/20210727 Analyze the Linux kernel with ftrace.md"};function h(u,s,g,k,f,_){const e=c("Link");return r(),d("div",null,[s[28]||(s[28]=n("h1",{id:"通過-ftrace-來分析-linux-內核",tabindex:"-1"},[a("通過 ftrace 來分析 Linux 內核 "),n("a",{class:"header-anchor",href:"#通過-ftrace-來分析-linux-內核","aria-label":"Permalink to “通過 ftrace 來分析 Linux 內核”"},"​")],-1)),s[29]||(s[29]=n("blockquote",null,[n("p",null,[a("通過 "),n("code",null,"ftrace"),a(" 來了解 Linux 內核內部工作方式是一個好方法。")])],-1)),s[30]||(s[30]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202109/05/151954cb5z5rg7zqa9lbzu.jpg",alt:""})],-1)),s[31]||(s[31]=n("p",null,"操作系統的內核是最難以理解的軟件之一。自從你的系統啓動後，它會一直在後台運行。儘管每個用户都不與內核直接交互，但他們在內核的幫助下完成自己的計算任務。與內核的交互發生在調用系統調用或者用户日常使用的各種庫或應用間接調用了系統調用。",-1)),n("p",null,[s[1]||(s[1]=a("在之前的文章裏我介紹瞭如何使用 ",-1)),p(e,{href:"https://linux.cn/article-11545-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("strace",-1)])]),_:1}),s[2]||(s[2]=a(" 來追蹤系統調用。然而，使用 ",-1)),s[3]||(s[3]=n("code",null,"strace",-1)),s[4]||(s[4]=a(" 時你的視野是有限的。它允許你查看特定參數的系統調用。並在工作完成後，看到其返回值或狀態，以表明是成功還是失敗。但是你無法知道內核在這段時間內發生了什麼。除了系統調用外，還有很多其他活動內核中發生，而你卻視而不見。",-1))]),s[32]||(s[32]=i(`<h3 id="ftrace-介紹" tabindex="-1">ftrace 介紹 <a class="header-anchor" href="#ftrace-介紹" aria-label="Permalink to “ftrace 介紹”">​</a></h3><p>本文的旨在通過使用一個名為 <code>ftrace</code> 的機制來闡明追蹤內核函數的一些情況。它使得任何 Linux 用户可以輕鬆地追蹤內核，並且瞭解更多關於 Linux 內核內部如何工作。</p><p><code>ftrace</code> 默認產生的輸出往往是巨大的，因為內核總是忙碌的。為了節省空間，很多情況下我會通過截斷來給出儘量小的輸出。</p><p>我使用 Fedora 來演示下面的例子，但是它們應該在其他最新的 Linux 發行版上同樣可以運行。</p><h3 id="啓用-ftrace" tabindex="-1">啓用 ftrace <a class="header-anchor" href="#啓用-ftrace" aria-label="Permalink to “啓用 ftrace”">​</a></h3><p><code>ftrace</code> 現在已經是內核中的一部分了，你不再需要事先安裝它了。也就是説，如果你在使用最近的 Linux 系統，那麼 <code>ftrace</code> 是已經啓用了的。為了驗證 <code>ftrace</code> 是否可用，運行 <code>mount</code> 命令並查找 <code>tracefs</code>。如果你看到類似下面的輸出，表示 <code>ftrace</code> 已經啓用，你可以輕鬆地嘗試本文中下面的例子。下面有些命令需要在 root 用户下使用（用 <code>sudo</code> 執行是不夠的）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mount | grep tracefs</span></span>
<span class="line"><span>none on /sys/kernel/tracing type tracefs (rw,relatime,seclabel)</span></span></code></pre></div><p>要想使用 <code>ftrace</code>，你首先需要進入上面 <code>mount</code> 命令中找到的特定目錄中，在那個目錄下運行文章中的其他命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd /sys/kernel/tracing</span></span></code></pre></div><h3 id="一般的工作流程" tabindex="-1">一般的工作流程 <a class="header-anchor" href="#一般的工作流程" aria-label="Permalink to “一般的工作流程”">​</a></h3><p>首先，你需要理解捕捉蹤跡和獲取輸出的一般流程。如果你直接運行 <code>ftrace</code>，不會運行任何特定的 <code>ftrace</code> 命令。相反的，基本操作是通過標準 Linux 命令來寫入或讀取一些文件。</p><p>一般的步驟如下：</p><ol><li>通過寫入一些特定文件來啓用/結束追蹤</li><li>通過寫入一些特定文件來設置/取消追蹤時的過濾規則</li><li>從文件中讀取基於第 1 和 2 步的追蹤輸出</li><li>從文件中清除早期輸出或緩衝區</li><li>縮小到你的特定用例（你要追蹤的內核函數），重複 1、2、3、4 步</li></ol><h3 id="可用的追蹤器類型" tabindex="-1">可用的追蹤器類型 <a class="header-anchor" href="#可用的追蹤器類型" aria-label="Permalink to “可用的追蹤器類型”">​</a></h3><p>有多種不同的追蹤器可供使用。之前提到，在運行任何命令前，你需要進入一個特定的目錄下，因為需要的文件在這些目錄下。我在我的例子中使用了相對路徑（而不是絕對路徑）。</p><p>你可以查看 <code>available_tracers</code> 文件內容來查看所有可用的追蹤器類型。你可以看下面列出了幾個。不需要擔心這些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat available_tracers</span></span>
<span class="line"><span>hwlat blk mmiotrace function_graph wakeup_dl wakeup_rt wakeup function nop</span></span></code></pre></div><p>在所有輸出的追蹤器中，我會聚焦於下面三個特殊的：啓用追蹤的 <code>function</code> 和 <code>function_graph</code>，以及停止追蹤的 <code>nop</code>。</p><h3 id="確認當前的追蹤器" tabindex="-1">確認當前的追蹤器 <a class="header-anchor" href="#確認當前的追蹤器" aria-label="Permalink to “確認當前的追蹤器”">​</a></h3><p>通常情況默認的追蹤器設定為 <code>nop</code>。即在特殊文件中 <code>current_tracer</code> 中的 “無操作”，這意味着追蹤目前是關閉的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>nop</span></span></code></pre></div><h3 id="查看追蹤輸出" tabindex="-1">查看追蹤輸出 <a class="header-anchor" href="#查看追蹤輸出" aria-label="Permalink to “查看追蹤輸出”">​</a></h3>`,22)),n("p",null,[s[6]||(s[6]=a("在啓用任何追蹤功能之前，請你看一下保存追蹤輸出的文件。你可以用 ",-1)),p(e,{href:"https://opensource.com/article/19/2/getting-started-cat-command"},{default:l(()=>[...s[5]||(s[5]=[a("cat",-1)])]),_:1}),s[7]||(s[7]=a(" 命令查看名為 ",-1)),s[8]||(s[8]=n("code",null,"trace",-1)),s[9]||(s[9]=a(" 的文件的內容：",-1))]),s[33]||(s[33]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat trace</span></span>
<span class="line"><span></span></span>
<span class="line"><span># tracer: nop</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># entries-in-buffer/entries-written: 0/0   #P:8</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#                                _-----=&gt; irqs-off</span></span>
<span class="line"><span>#                               / _----=&gt; need-resched</span></span>
<span class="line"><span>#                              | / _---=&gt; hardirq/softirq</span></span>
<span class="line"><span>#                              || / _--=&gt; preempt-depth</span></span>
<span class="line"><span>#                              ||| /     delay</span></span>
<span class="line"><span>#           TASK-PID     CPU#  ||||   TIMESTAMP  FUNCTION</span></span>
<span class="line"><span>#              | |         |   ||||      |         |</span></span></code></pre></div><h3 id="啓用-function-追蹤器" tabindex="-1">啓用 function 追蹤器 <a class="header-anchor" href="#啓用-function-追蹤器" aria-label="Permalink to “啓用 function 追蹤器”">​</a></h3><p>你可以通過向 <code>current_tracer</code> 文件寫入 <code>function</code> 來啓用第一個追蹤器 <code>function</code>（文件原本內容為 <code>nop</code>，意味着追蹤是關閉的）。把這個操作看成是啓用追蹤的一種方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>nop</span></span>
<span class="line"><span>$ echo function &gt; current_tracer</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cat current_tracer</span></span>
<span class="line"><span>function</span></span></code></pre></div><h3 id="查看-function-追蹤器的更新追蹤輸出" tabindex="-1">查看 function 追蹤器的更新追蹤輸出 <a class="header-anchor" href="#查看-function-追蹤器的更新追蹤輸出" aria-label="Permalink to “查看 function 追蹤器的更新追蹤輸出”">​</a></h3><p>現在你已啓用追蹤，是時候查看輸出了。如果你查看 <code>trace</code> 文件內容，你將會看到許多被連續寫入的內容。我通過管道只展示了文件內容的前 20 行。根據左邊輸出的標題，你可以看到在某個 CPU 上運行的任務和進程 ID。根據右邊輸出的內容，你可以看到具體的內核函數和其父函數。中間顯示了時間戳信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sudo cat trace | head -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span># tracer: function</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># entries-in-buffer/entries-written: 409936/4276216   #P:8</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#                                _-----=&gt; irqs-off</span></span>
<span class="line"><span>#                               / _----=&gt; need-resched</span></span>
<span class="line"><span>#                              | / _---=&gt; hardirq/softirq</span></span>
<span class="line"><span>#                              || / _--=&gt; preempt-depth</span></span>
<span class="line"><span>#                              ||| /     delay</span></span>
<span class="line"><span>#           TASK-PID     CPU#  ||||   TIMESTAMP  FUNCTION</span></span>
<span class="line"><span>#              | |         |   ||||      |         |</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841739: tsc_verify_tsc_adjust &lt;-arch_cpu_idle_enter</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841739: local_touch_nmi &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841740: rcu_nocb_flush_deferred_wakeup &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841740: tick_check_broadcast_expired &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841740: cpuidle_get_cpu_driver &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841740: cpuidle_not_available &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841741: cpuidle_select &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841741: menu_select &lt;-do_idle</span></span>
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841741: cpuidle_governor_latency_req &lt;-menu_select</span></span></code></pre></div><p>請記住當追蹤打開後，這意味着追蹤結果會被一直連續寫入直至你關閉追蹤。</p><h3 id="關閉追蹤" tabindex="-1">關閉追蹤 <a class="header-anchor" href="#關閉追蹤" aria-label="Permalink to “關閉追蹤”">​</a></h3><p>關閉追蹤是簡單的。你只需要在 <code>current_tracer</code> 文件中用 <code>nop</code> 替換 <code>function</code> 追蹤器即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo echo nop &gt; current_tracer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>nop</span></span></code></pre></div><h3 id="啓用-function-graph-追蹤器" tabindex="-1">啓用 function_graph 追蹤器 <a class="header-anchor" href="#啓用-function-graph-追蹤器" aria-label="Permalink to “啓用 function_graph 追蹤器”">​</a></h3><p>現在嘗試第二個名為 <code>function_graph</code> 的追蹤器。你可以使用和上面相同的步驟：在 <code>current_tracer</code> 文件中寫入 <code>function_graph</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo echo function_graph &gt; current_tracer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>function_graph</span></span></code></pre></div><h3 id="function-tracer-追蹤器的追蹤輸出" tabindex="-1">function_tracer 追蹤器的追蹤輸出 <a class="header-anchor" href="#function-tracer-追蹤器的追蹤輸出" aria-label="Permalink to “function_tracer 追蹤器的追蹤輸出”">​</a></h3><p>注意到目前 <code>trace</code> 文件的輸出格式已經發生變化。現在，你可以看到 CPU ID 和內核函數的執行時長。接下來，一個花括號表示一個函數的開始，以及它內部調用了哪些其他函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat trace | head -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span># tracer: function_graph</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># CPU  DURATION                  FUNCTION CALLS</span></span>
<span class="line"><span># |     |   |                     |   |   |   |</span></span>
<span class="line"><span> 6)               |              n_tty_write() {</span></span>
<span class="line"><span> 6)               |                down_read() {</span></span>
<span class="line"><span> 6)               |                  __cond_resched() {</span></span>
<span class="line"><span> 6)   0.341 us    |                    rcu_all_qs();</span></span>
<span class="line"><span> 6)   1.057 us    |                  }</span></span>
<span class="line"><span> 6)   1.807 us    |                }</span></span>
<span class="line"><span> 6)   0.402 us    |                process_echoes();</span></span>
<span class="line"><span> 6)               |                add_wait_queue() {</span></span>
<span class="line"><span> 6)   0.391 us    |                  _raw_spin_lock_irqsave();</span></span>
<span class="line"><span> 6)   0.359 us    |                  _raw_spin_unlock_irqrestore();</span></span>
<span class="line"><span> 6)   1.757 us    |                }</span></span>
<span class="line"><span> 6)   0.350 us    |                tty_hung_up_p();</span></span>
<span class="line"><span> 6)               |                mutex_lock() {</span></span>
<span class="line"><span> 6)               |                  __cond_resched() {</span></span>
<span class="line"><span> 6)   0.404 us    |                    rcu_all_qs();</span></span>
<span class="line"><span> 6)   1.067 us    |                  }</span></span></code></pre></div><h3 id="啓用追蹤的設置來增加追蹤的深度" tabindex="-1">啓用追蹤的設置來增加追蹤的深度 <a class="header-anchor" href="#啓用追蹤的設置來增加追蹤的深度" aria-label="Permalink to “啓用追蹤的設置來增加追蹤的深度”">​</a></h3><p>你可以使用下面的步驟來調整追蹤器以看到更深層次的函數調用。完成之後，你可以查看 <code>trace</code> 文件的內容並發現輸出變得更加詳細了。為了文章的可讀性，這個例子的輸出被省略了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat max_graph_depth</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># echo 1 &gt; max_graph_depth ## or:</span></span>
<span class="line"><span># echo 2 &gt; max_graph_depth</span></span>
<span class="line"><span></span></span>
<span class="line"><span># sudo cat trace</span></span></code></pre></div><h3 id="查找要追蹤的函數" tabindex="-1">查找要追蹤的函數 <a class="header-anchor" href="#查找要追蹤的函數" aria-label="Permalink to “查找要追蹤的函數”">​</a></h3><p>上面的步驟足以讓你開始追蹤。但是它產生的輸出內容是巨大的，當你想試圖找到自己感興趣的內容時，往往會很困難。通常你更希望能夠只追蹤特定的函數，而忽略其他函數。但如果你不知道它們確切的名稱，你怎麼知道要追蹤哪些進程？有一個文件可以幫助你解決這個問題 —— <code>available_filter_functions</code> 文件提供了一個可供追蹤的函數列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo wc -l available_filter_functions  </span></span>
<span class="line"><span>63165 available_filter_functions</span></span></code></pre></div><h3 id="查找一般的內核函數" tabindex="-1">查找一般的內核函數 <a class="header-anchor" href="#查找一般的內核函數" aria-label="Permalink to “查找一般的內核函數”">​</a></h3><p>現在試着搜索一個你所知道的簡單內核函數。用户空間由 <code>malloc</code> 函數用來分配內存，而內核由 <code>kmalloc</code> 函數，它提供類似的功能。下面是所有與 <code>kmalloc</code> 相關的函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo grep kmalloc available_filter_functions</span></span>
<span class="line"><span>debug_kmalloc</span></span>
<span class="line"><span>mempool_kmalloc</span></span>
<span class="line"><span>kmalloc_slab</span></span>
<span class="line"><span>kmalloc_order</span></span>
<span class="line"><span>kmalloc_order_trace</span></span>
<span class="line"><span>kmalloc_fix_flags</span></span>
<span class="line"><span>kmalloc_large_node</span></span>
<span class="line"><span>__kmalloc</span></span>
<span class="line"><span>__kmalloc_track_caller</span></span>
<span class="line"><span>__kmalloc_node</span></span>
<span class="line"><span>__kmalloc_node_track_caller</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="查找內核模組或者驅動相關函數" tabindex="-1">查找內核模組或者驅動相關函數 <a class="header-anchor" href="#查找內核模組或者驅動相關函數" aria-label="Permalink to “查找內核模組或者驅動相關函數”">​</a></h3><p>在 <code>available_filter_functions</code> 文件的輸出中，你可以看到一些以括號內文字結尾的行，例如下面的例子中的 <code>[kvm_intel]</code>。這些函數與當前加載的內核模組 <code>kvm_intel</code> 有關。你可以運行 <code>lsmod</code> 命令來驗證：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo grep kvm available_filter_functions | tail</span></span>
<span class="line"><span>__pi_post_block [kvm_intel]</span></span>
<span class="line"><span>vmx_vcpu_pi_load [kvm_intel]</span></span>
<span class="line"><span>vmx_vcpu_pi_put [kvm_intel]</span></span>
<span class="line"><span>pi_pre_block [kvm_intel]</span></span>
<span class="line"><span>pi_post_block [kvm_intel]</span></span>
<span class="line"><span>pi_wakeup_handler [kvm_intel]</span></span>
<span class="line"><span>pi_has_pending_interrupt [kvm_intel]</span></span>
<span class="line"><span>pi_update_irte [kvm_intel]</span></span>
<span class="line"><span>vmx_dump_dtsel [kvm_intel]</span></span>
<span class="line"><span>vmx_dump_sel [kvm_intel]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ lsmod  | grep -i kvm</span></span>
<span class="line"><span>kvm_intel             335872  0</span></span>
<span class="line"><span>kvm                   987136  1 kvm_intel</span></span>
<span class="line"><span>irqbypass              16384  1 kvm</span></span></code></pre></div><h3 id="僅追蹤特定的函數" tabindex="-1">僅追蹤特定的函數 <a class="header-anchor" href="#僅追蹤特定的函數" aria-label="Permalink to “僅追蹤特定的函數”">​</a></h3><p>為了實現對特定函數或模式的追蹤，你可以利用 <code>set_ftrace_filter</code> 文件來指定你要追蹤上述輸出中的哪些函數。這個文件也接受 <code>*</code> 模式，它可以擴展到包括具有給定模式的其他函數。作為一個例子，我在我的機器上使用 ext4 文件系統。我可以用下面的命令指定 ext4 的特定內核函數來追蹤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mount | grep home</span></span>
<span class="line"><span>/dev/mapper/fedora-home on /home type ext4 (rw,relatime,seclabel)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat set_ftrace_filter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### all functions enabled ####</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ echo ext4_* &gt; set_ftrace_filter</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cat set_ftrace_filter</span></span>
<span class="line"><span>ext4_has_free_clusters</span></span>
<span class="line"><span>ext4_validate_block_bitmap</span></span>
<span class="line"><span>ext4_get_group_number</span></span>
<span class="line"><span>ext4_get_group_no_and_offset</span></span>
<span class="line"><span>ext4_get_group_desc</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>現在當你可以看到追蹤輸出時，你只能看到與內核函數有關的 <code>ext4</code> 函數，而你之前已經為其設置了一個過濾器。所有其他的輸出都被忽略了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat trace |head -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## tracer: function</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># entries-in-buffer/entries-written: 3871/3871   #P:8</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#                                _-----=&gt; irqs-off</span></span>
<span class="line"><span>#                               / _----=&gt; need-resched</span></span>
<span class="line"><span>#                              | / _---=&gt; hardirq/softirq</span></span>
<span class="line"><span>#                              || / _--=&gt; preempt-depth</span></span>
<span class="line"><span>#                              ||| /     delay</span></span>
<span class="line"><span>#           TASK-PID     CPU#  ||||   TIMESTAMP  FUNCTION</span></span>
<span class="line"><span>#              | |         |   ||||      |         |</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.989545: ext4_file_getattr &lt;-vfs_fstat</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.989547: ext4_getattr &lt;-ext4_file_getattr</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.989552: ext4_file_getattr &lt;-vfs_fstat</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.989553: ext4_getattr &lt;-ext4_file_getattr</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.990097: ext4_file_open &lt;-do_dentry_open</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.990111: ext4_file_getattr &lt;-vfs_fstat</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.990111: ext4_getattr &lt;-ext4_file_getattr</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.990122: ext4_llseek &lt;-ksys_lseek</span></span>
<span class="line"><span>           cupsd-1066    [004] ....  3308.990130: ext4_file_read_iter &lt;-new_sync_read</span></span></code></pre></div><h3 id="排除要被追蹤的函數" tabindex="-1">排除要被追蹤的函數 <a class="header-anchor" href="#排除要被追蹤的函數" aria-label="Permalink to “排除要被追蹤的函數”">​</a></h3><p>你並不總是知道你想追蹤什麼，但是，你肯定知道你不想追蹤什麼。因此，有一個 <code>set_ftrace_notrace</code> —— 請注意其中的 “no”。你可以在這個文件中寫下你想要的模式，並啓用追蹤。這樣除了所提到的模式外，任何其他東西都會被追蹤到。這通常有助於刪除那些使我們的輸出變得混亂的普通功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo cat set_ftrace_notrace</span></span>
<span class="line"><span>#### no functions disabled ####</span></span></code></pre></div><h3 id="具有目標性的追蹤" tabindex="-1">具有目標性的追蹤 <a class="header-anchor" href="#具有目標性的追蹤" aria-label="Permalink to “具有目標性的追蹤”">​</a></h3><p>到目前為止，你一直在追蹤內核中發生的一切。但是，它無法幫助你追蹤與某個特定命令有關的事件。為了達到這個目的，你可以按需打開和關閉跟蹤，並且在它們之間，運行我們選擇的命令，這樣你就不會在跟蹤輸出中得到額外的輸出。你可以通過向 <code>tracing_on</code> 寫入 <code>1</code> 來啓用跟蹤，寫 <code>0</code> 來關閉跟蹤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat tracing_on</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># echo 1 &gt; tracing_on</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat tracing_on</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Run some specific command that we wish to trace here ###</span></span>
<span class="line"><span></span></span>
<span class="line"><span># echo 0 &gt; tracing_on</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cat tracing_on</span></span>
<span class="line"><span>0</span></span></code></pre></div><h3 id="追蹤特定的-pid" tabindex="-1">追蹤特定的 PID <a class="header-anchor" href="#追蹤特定的-pid" aria-label="Permalink to “追蹤特定的 PID”">​</a></h3><p>如果你想追蹤與正在運行的特定進程有關的活動，你可以將該 PID 寫入一個名為 <code>set_ftrace_pid</code> 的文件，然後啓用追蹤。這樣一來，追蹤就只限於這個 PID，這在某些情況下是非常有幫助的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo echo $PID &gt; set_ftrace_pid</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p><code>ftrace</code> 是一個瞭解 Linux 內核內部工作的很好方式。通過一些練習，你可以學會對 <code>ftrace</code> 進行調整以縮小搜索範圍。要想更詳細地瞭解 <code>ftrace</code> 和它的高級用法，請看 <code>ftrace</code> 的核心作者 Steven Rostedt 寫的這些優秀文章。</p>`,45)),n("ul",null,[n("li",null,[p(e,{href:"https://lwn.net/Articles/365835/"},{default:l(()=>[...s[10]||(s[10]=[a("調試 Linux 內核，第一部分",-1)])]),_:1})]),n("li",null,[p(e,{href:"https://lwn.net/Articles/366796/"},{default:l(()=>[...s[11]||(s[11]=[a("調試 Linux 內核，第二部分",-1)])]),_:1})]),n("li",null,[p(e,{href:"https://lwn.net/Articles/370423/"},{default:l(()=>[...s[12]||(s[12]=[a("調試 Linux 內核，第三部分",-1)])]),_:1})])]),s[34]||(s[34]=n("hr",null,null,-1)),n("p",null,[s[14]||(s[14]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/21/7/linux-kernel-ftrace"},{default:l(()=>[...s[13]||(s[13]=[a("https://opensource.com/article/21/7/linux-kernel-ftrace",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[15]||(s[15]=[a("Gaurav Kamathe",-1)])]),_:1}),s[20]||(s[20]=a(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[16]||(s[16]=[a("lujun9972",-1)])]),_:1}),s[21]||(s[21]=a(" 譯者：",-1)),p(e,{href:"https://github.com/mengxinayan"},{default:l(()=>[...s[17]||(s[17]=[a("萌新阿巖",-1)])]),_:1}),s[22]||(s[22]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[23]||(s[23]=[a("LCTT",-1)])]),_:1}),s[26]||(s[26]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[24]||(s[24]=[a("Linux中國",-1)])]),_:1}),s[27]||(s[27]=a(" 榮譽推出",-1))])])}const v=t(o,[["render",h]]);export{x as __pageData,v as default};
