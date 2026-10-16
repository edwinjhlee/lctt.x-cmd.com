import{_ as t,a0 as c,w as r,s as d,I as n,x as a,a1 as p,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"通过 ftrace 来分析 Linux 内核 | LCTT x X-CMD","titleTemplate":false,"description":"通过 ftrace 来分析 Linux 内核 | LCTT (202109) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过 ftrace 来分析 Linux 内核 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过 ftrace 来分析 Linux 内核 | LCTT (202109) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202109/20210727 Analyze the Linux kernel with ftrace","title":"通过 ftrace 来分析 Linux 内核","tag":"202109","desc":""},"relativePath":"202109/20210727 Analyze the Linux kernel with ftrace.md","filePath":"[post].md"}'),o={name:"202109/20210727 Analyze the Linux kernel with ftrace.md"};function h(u,s,g,k,f,_){const e=c("Link");return r(),d("div",null,[s[28]||(s[28]=n("h1",{id:"通过-ftrace-来分析-linux-内核",tabindex:"-1"},[a("通过 ftrace 来分析 Linux 内核 "),n("a",{class:"header-anchor",href:"#通过-ftrace-来分析-linux-内核","aria-label":"Permalink to “通过 ftrace 来分析 Linux 内核”"},"​")],-1)),s[29]||(s[29]=n("blockquote",null,[n("p",null,[a("通过 "),n("code",null,"ftrace"),a(" 来了解 Linux 内核内部工作方式是一个好方法。")])],-1)),s[30]||(s[30]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202109/05/151954cb5z5rg7zqa9lbzu.jpg",alt:""})],-1)),s[31]||(s[31]=n("p",null,"操作系统的内核是最难以理解的软件之一。自从你的系统启动后，它会一直在后台运行。尽管每个用户都不与内核直接交互，但他们在内核的帮助下完成自己的计算任务。与内核的交互发生在调用系统调用或者用户日常使用的各种库或应用间接调用了系统调用。",-1)),n("p",null,[s[1]||(s[1]=a("在之前的文章里我介绍了如何使用 ",-1)),p(e,{href:"https://linux.cn/article-11545-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("strace",-1)])]),_:1}),s[2]||(s[2]=a(" 来追踪系统调用。然而，使用 ",-1)),s[3]||(s[3]=n("code",null,"strace",-1)),s[4]||(s[4]=a(" 时你的视野是有限的。它允许你查看特定参数的系统调用。并在工作完成后，看到其返回值或状态，以表明是成功还是失败。但是你无法知道内核在这段时间内发生了什么。除了系统调用外，还有很多其他活动内核中发生，而你却视而不见。",-1))]),s[32]||(s[32]=i(`<h3 id="ftrace-介绍" tabindex="-1">ftrace 介绍 <a class="header-anchor" href="#ftrace-介绍" aria-label="Permalink to “ftrace 介绍”">​</a></h3><p>本文的旨在通过使用一个名为 <code>ftrace</code> 的机制来阐明追踪内核函数的一些情况。它使得任何 Linux 用户可以轻松地追踪内核，并且了解更多关于 Linux 内核内部如何工作。</p><p><code>ftrace</code> 默认产生的输出往往是巨大的，因为内核总是忙碌的。为了节省空间，很多情况下我会通过截断来给出尽量小的输出。</p><p>我使用 Fedora 来演示下面的例子，但是它们应该在其他最新的 Linux 发行版上同样可以运行。</p><h3 id="启用-ftrace" tabindex="-1">启用 ftrace <a class="header-anchor" href="#启用-ftrace" aria-label="Permalink to “启用 ftrace”">​</a></h3><p><code>ftrace</code> 现在已经是内核中的一部分了，你不再需要事先安装它了。也就是说，如果你在使用最近的 Linux 系统，那么 <code>ftrace</code> 是已经启用了的。为了验证 <code>ftrace</code> 是否可用，运行 <code>mount</code> 命令并查找 <code>tracefs</code>。如果你看到类似下面的输出，表示 <code>ftrace</code> 已经启用，你可以轻松地尝试本文中下面的例子。下面有些命令需要在 root 用户下使用（用 <code>sudo</code> 执行是不够的）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mount | grep tracefs</span></span>
<span class="line"><span>none on /sys/kernel/tracing type tracefs (rw,relatime,seclabel)</span></span></code></pre></div><p>要想使用 <code>ftrace</code>，你首先需要进入上面 <code>mount</code> 命令中找到的特定目录中，在那个目录下运行文章中的其他命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cd /sys/kernel/tracing</span></span></code></pre></div><h3 id="一般的工作流程" tabindex="-1">一般的工作流程 <a class="header-anchor" href="#一般的工作流程" aria-label="Permalink to “一般的工作流程”">​</a></h3><p>首先，你需要理解捕捉踪迹和获取输出的一般流程。如果你直接运行 <code>ftrace</code>，不会运行任何特定的 <code>ftrace</code> 命令。相反的，基本操作是通过标准 Linux 命令来写入或读取一些文件。</p><p>一般的步骤如下：</p><ol><li>通过写入一些特定文件来启用/结束追踪</li><li>通过写入一些特定文件来设置/取消追踪时的过滤规则</li><li>从文件中读取基于第 1 和 2 步的追踪输出</li><li>从文件中清除早期输出或缓冲区</li><li>缩小到你的特定用例（你要追踪的内核函数），重复 1、2、3、4 步</li></ol><h3 id="可用的追踪器类型" tabindex="-1">可用的追踪器类型 <a class="header-anchor" href="#可用的追踪器类型" aria-label="Permalink to “可用的追踪器类型”">​</a></h3><p>有多种不同的追踪器可供使用。之前提到，在运行任何命令前，你需要进入一个特定的目录下，因为需要的文件在这些目录下。我在我的例子中使用了相对路径（而不是绝对路径）。</p><p>你可以查看 <code>available_tracers</code> 文件内容来查看所有可用的追踪器类型。你可以看下面列出了几个。不需要担心这些：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat available_tracers</span></span>
<span class="line"><span>hwlat blk mmiotrace function_graph wakeup_dl wakeup_rt wakeup function nop</span></span></code></pre></div><p>在所有输出的追踪器中，我会聚焦于下面三个特殊的：启用追踪的 <code>function</code> 和 <code>function_graph</code>，以及停止追踪的 <code>nop</code>。</p><h3 id="确认当前的追踪器" tabindex="-1">确认当前的追踪器 <a class="header-anchor" href="#确认当前的追踪器" aria-label="Permalink to “确认当前的追踪器”">​</a></h3><p>通常情况默认的追踪器设定为 <code>nop</code>。即在特殊文件中 <code>current_tracer</code> 中的 “无操作”，这意味着追踪目前是关闭的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>nop</span></span></code></pre></div><h3 id="查看追踪输出" tabindex="-1">查看追踪输出 <a class="header-anchor" href="#查看追踪输出" aria-label="Permalink to “查看追踪输出”">​</a></h3>`,22)),n("p",null,[s[6]||(s[6]=a("在启用任何追踪功能之前，请你看一下保存追踪输出的文件。你可以用 ",-1)),p(e,{href:"https://opensource.com/article/19/2/getting-started-cat-command"},{default:l(()=>[...s[5]||(s[5]=[a("cat",-1)])]),_:1}),s[7]||(s[7]=a(" 命令查看名为 ",-1)),s[8]||(s[8]=n("code",null,"trace",-1)),s[9]||(s[9]=a(" 的文件的内容：",-1))]),s[33]||(s[33]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat trace</span></span>
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
<span class="line"><span>#              | |         |   ||||      |         |</span></span></code></pre></div><h3 id="启用-function-追踪器" tabindex="-1">启用 function 追踪器 <a class="header-anchor" href="#启用-function-追踪器" aria-label="Permalink to “启用 function 追踪器”">​</a></h3><p>你可以通过向 <code>current_tracer</code> 文件写入 <code>function</code> 来启用第一个追踪器 <code>function</code>（文件原本内容为 <code>nop</code>，意味着追踪是关闭的）。把这个操作看成是启用追踪的一种方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ pwd</span></span>
<span class="line"><span>/sys/kernel/tracing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>nop</span></span>
<span class="line"><span>$ echo function &gt; current_tracer</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$ cat current_tracer</span></span>
<span class="line"><span>function</span></span></code></pre></div><h3 id="查看-function-追踪器的更新追踪输出" tabindex="-1">查看 function 追踪器的更新追踪输出 <a class="header-anchor" href="#查看-function-追踪器的更新追踪输出" aria-label="Permalink to “查看 function 追踪器的更新追踪输出”">​</a></h3><p>现在你已启用追踪，是时候查看输出了。如果你查看 <code>trace</code> 文件内容，你将会看到许多被连续写入的内容。我通过管道只展示了文件内容的前 20 行。根据左边输出的标题，你可以看到在某个 CPU 上运行的任务和进程 ID。根据右边输出的内容，你可以看到具体的内核函数和其父函数。中间显示了时间戳信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># sudo cat trace | head -20</span></span>
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
<span class="line"><span>          &lt;idle&gt;-0       [000] d...  2088.841741: cpuidle_governor_latency_req &lt;-menu_select</span></span></code></pre></div><p>请记住当追踪打开后，这意味着追踪结果会被一直连续写入直至你关闭追踪。</p><h3 id="关闭追踪" tabindex="-1">关闭追踪 <a class="header-anchor" href="#关闭追踪" aria-label="Permalink to “关闭追踪”">​</a></h3><p>关闭追踪是简单的。你只需要在 <code>current_tracer</code> 文件中用 <code>nop</code> 替换 <code>function</code> 追踪器即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo echo nop &gt; current_tracer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>nop</span></span></code></pre></div><h3 id="启用-function-graph-追踪器" tabindex="-1">启用 function_graph 追踪器 <a class="header-anchor" href="#启用-function-graph-追踪器" aria-label="Permalink to “启用 function_graph 追踪器”">​</a></h3><p>现在尝试第二个名为 <code>function_graph</code> 的追踪器。你可以使用和上面相同的步骤：在 <code>current_tracer</code> 文件中写入 <code>function_graph</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo echo function_graph &gt; current_tracer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sudo cat current_tracer</span></span>
<span class="line"><span>function_graph</span></span></code></pre></div><h3 id="function-tracer-追踪器的追踪输出" tabindex="-1">function_tracer 追踪器的追踪输出 <a class="header-anchor" href="#function-tracer-追踪器的追踪输出" aria-label="Permalink to “function_tracer 追踪器的追踪输出”">​</a></h3><p>注意到目前 <code>trace</code> 文件的输出格式已经发生变化。现在，你可以看到 CPU ID 和内核函数的执行时长。接下来，一个花括号表示一个函数的开始，以及它内部调用了哪些其他函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat trace | head -20</span></span>
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
<span class="line"><span> 6)   1.067 us    |                  }</span></span></code></pre></div><h3 id="启用追踪的设置来增加追踪的深度" tabindex="-1">启用追踪的设置来增加追踪的深度 <a class="header-anchor" href="#启用追踪的设置来增加追踪的深度" aria-label="Permalink to “启用追踪的设置来增加追踪的深度”">​</a></h3><p>你可以使用下面的步骤来调整追踪器以看到更深层次的函数调用。完成之后，你可以查看 <code>trace</code> 文件的内容并发现输出变得更加详细了。为了文章的可读性，这个例子的输出被省略了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat max_graph_depth</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># echo 1 &gt; max_graph_depth ## or:</span></span>
<span class="line"><span># echo 2 &gt; max_graph_depth</span></span>
<span class="line"><span></span></span>
<span class="line"><span># sudo cat trace</span></span></code></pre></div><h3 id="查找要追踪的函数" tabindex="-1">查找要追踪的函数 <a class="header-anchor" href="#查找要追踪的函数" aria-label="Permalink to “查找要追踪的函数”">​</a></h3><p>上面的步骤足以让你开始追踪。但是它产生的输出内容是巨大的，当你想试图找到自己感兴趣的内容时，往往会很困难。通常你更希望能够只追踪特定的函数，而忽略其他函数。但如果你不知道它们确切的名称，你怎么知道要追踪哪些进程？有一个文件可以帮助你解决这个问题 —— <code>available_filter_functions</code> 文件提供了一个可供追踪的函数列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo wc -l available_filter_functions  </span></span>
<span class="line"><span>63165 available_filter_functions</span></span></code></pre></div><h3 id="查找一般的内核函数" tabindex="-1">查找一般的内核函数 <a class="header-anchor" href="#查找一般的内核函数" aria-label="Permalink to “查找一般的内核函数”">​</a></h3><p>现在试着搜索一个你所知道的简单内核函数。用户空间由 <code>malloc</code> 函数用来分配内存，而内核由 <code>kmalloc</code> 函数，它提供类似的功能。下面是所有与 <code>kmalloc</code> 相关的函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo grep kmalloc available_filter_functions</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="查找内核模块或者驱动相关函数" tabindex="-1">查找内核模块或者驱动相关函数 <a class="header-anchor" href="#查找内核模块或者驱动相关函数" aria-label="Permalink to “查找内核模块或者驱动相关函数”">​</a></h3><p>在 <code>available_filter_functions</code> 文件的输出中，你可以看到一些以括号内文字结尾的行，例如下面的例子中的 <code>[kvm_intel]</code>。这些函数与当前加载的内核模块 <code>kvm_intel</code> 有关。你可以运行 <code>lsmod</code> 命令来验证：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo grep kvm available_filter_functions | tail</span></span>
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
<span class="line"><span>irqbypass              16384  1 kvm</span></span></code></pre></div><h3 id="仅追踪特定的函数" tabindex="-1">仅追踪特定的函数 <a class="header-anchor" href="#仅追踪特定的函数" aria-label="Permalink to “仅追踪特定的函数”">​</a></h3><p>为了实现对特定函数或模式的追踪，你可以利用 <code>set_ftrace_filter</code> 文件来指定你要追踪上述输出中的哪些函数。这个文件也接受 <code>*</code> 模式，它可以扩展到包括具有给定模式的其他函数。作为一个例子，我在我的机器上使用 ext4 文件系统。我可以用下面的命令指定 ext4 的特定内核函数来追踪：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mount | grep home</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><p>现在当你可以看到追踪输出时，你只能看到与内核函数有关的 <code>ext4</code> 函数，而你之前已经为其设置了一个过滤器。所有其他的输出都被忽略了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat trace |head -20</span></span>
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
<span class="line"><span>           cupsd-1066    [004] ....  3308.990130: ext4_file_read_iter &lt;-new_sync_read</span></span></code></pre></div><h3 id="排除要被追踪的函数" tabindex="-1">排除要被追踪的函数 <a class="header-anchor" href="#排除要被追踪的函数" aria-label="Permalink to “排除要被追踪的函数”">​</a></h3><p>你并不总是知道你想追踪什么，但是，你肯定知道你不想追踪什么。因此，有一个 <code>set_ftrace_notrace</code> —— 请注意其中的 “no”。你可以在这个文件中写下你想要的模式，并启用追踪。这样除了所提到的模式外，任何其他东西都会被追踪到。这通常有助于删除那些使我们的输出变得混乱的普通功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo cat set_ftrace_notrace</span></span>
<span class="line"><span>#### no functions disabled ####</span></span></code></pre></div><h3 id="具有目标性的追踪" tabindex="-1">具有目标性的追踪 <a class="header-anchor" href="#具有目标性的追踪" aria-label="Permalink to “具有目标性的追踪”">​</a></h3><p>到目前为止，你一直在追踪内核中发生的一切。但是，它无法帮助你追踪与某个特定命令有关的事件。为了达到这个目的，你可以按需打开和关闭跟踪，并且在它们之间，运行我们选择的命令，这样你就不会在跟踪输出中得到额外的输出。你可以通过向 <code>tracing_on</code> 写入 <code>1</code> 来启用跟踪，写 <code>0</code> 来关闭跟踪。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># cat tracing_on</span></span>
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
<span class="line"><span>0</span></span></code></pre></div><h3 id="追踪特定的-pid" tabindex="-1">追踪特定的 PID <a class="header-anchor" href="#追踪特定的-pid" aria-label="Permalink to “追踪特定的 PID”">​</a></h3><p>如果你想追踪与正在运行的特定进程有关的活动，你可以将该 PID 写入一个名为 <code>set_ftrace_pid</code> 的文件，然后启用追踪。这样一来，追踪就只限于这个 PID，这在某些情况下是非常有帮助的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo echo $PID &gt; set_ftrace_pid</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p><code>ftrace</code> 是一个了解 Linux 内核内部工作的很好方式。通过一些练习，你可以学会对 <code>ftrace</code> 进行调整以缩小搜索范围。要想更详细地了解 <code>ftrace</code> 和它的高级用法，请看 <code>ftrace</code> 的核心作者 Steven Rostedt 写的这些优秀文章。</p>`,45)),n("ul",null,[n("li",null,[p(e,{href:"https://lwn.net/Articles/365835/"},{default:l(()=>[...s[10]||(s[10]=[a("调试 Linux 内核，第一部分",-1)])]),_:1})]),n("li",null,[p(e,{href:"https://lwn.net/Articles/366796/"},{default:l(()=>[...s[11]||(s[11]=[a("调试 Linux 内核，第二部分",-1)])]),_:1})]),n("li",null,[p(e,{href:"https://lwn.net/Articles/370423/"},{default:l(()=>[...s[12]||(s[12]=[a("调试 Linux 内核，第三部分",-1)])]),_:1})])]),s[34]||(s[34]=n("hr",null,null,-1)),n("p",null,[s[14]||(s[14]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/21/7/linux-kernel-ftrace"},{default:l(()=>[...s[13]||(s[13]=[a("https://opensource.com/article/21/7/linux-kernel-ftrace",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[15]||(s[15]=[a("Gaurav Kamathe",-1)])]),_:1}),s[20]||(s[20]=a(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[16]||(s[16]=[a("lujun9972",-1)])]),_:1}),s[21]||(s[21]=a(" 译者：",-1)),p(e,{href:"https://github.com/mengxinayan"},{default:l(()=>[...s[17]||(s[17]=[a("萌新阿岩",-1)])]),_:1}),s[22]||(s[22]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[23]||(s[23]=[a("LCTT",-1)])]),_:1}),s[26]||(s[26]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[24]||(s[24]=[a("Linux中国",-1)])]),_:1}),s[27]||(s[27]=a(" 荣誉推出",-1))])])}const v=t(o,[["render",h]]);export{x as __pageData,v as default};
