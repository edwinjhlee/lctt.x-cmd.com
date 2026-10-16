import{_ as t,a0 as c,w as r,s as d,I as n,x as a,a1 as p,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 trace-cmd 追踪内核 | LCTT x X-CMD","titleTemplate":false,"description":"使用 trace-cmd 追踪内核 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 trace-cmd 追踪内核 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 trace-cmd 追踪内核 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210728 Kernel tracing with trace-cmd","title":"使用 trace-cmd 追踪内核","tag":"202110","desc":""},"relativePath":"202110/20210728 Kernel tracing with trace-cmd.md","filePath":"[post].md"}'),o={name:"202110/20210728 Kernel tracing with trace-cmd.md"};function h(g,s,u,k,_,b){const e=c("Link");return r(),d("div",null,[s[33]||(s[33]=n("h1",{id:"使用-trace-cmd-追踪内核",tabindex:"-1"},[a("使用 trace-cmd 追踪内核 "),n("a",{class:"header-anchor",href:"#使用-trace-cmd-追踪内核","aria-label":"Permalink to “使用 trace-cmd 追踪内核”"},"​")],-1)),s[34]||(s[34]=n("blockquote",null,[n("p",null,"trace-cmd 是一个易于使用，且特性众多、可用来追踪内核函数的命令。")],-1)),s[35]||(s[35]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202110/05/145818d2i9tgjetzj8itqg.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在 ",-1)),p(e,{href:"https://linux.cn/article-13752-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("之前的文章",-1)])]),_:1}),s[2]||(s[2]=a(" 里，我介绍了如何利用 ",-1)),s[3]||(s[3]=n("code",null,"ftrace",-1)),s[4]||(s[4]=a(" 来追踪内核函数。通过写入和读出文件来使用 ",-1)),s[5]||(s[5]=n("code",null,"ftrace",-1)),s[6]||(s[6]=a(" 会变得很枯燥，所以我对它做了一个封装来运行带有选项的命令，以启用和禁用追踪、设置过滤器、查看输出、清除输出等等。",-1))]),n("p",null,[p(e,{href:"https://lwn.net/Articles/410200/"},{default:l(()=>[...s[7]||(s[7]=[a("trace-cmd",-1)])]),_:1}),s[8]||(s[8]=a(" 命令是一个可以帮助你做到这一点的工具。在这篇文章中，我使用 ",-1)),s[9]||(s[9]=n("code",null,"trace-cmd",-1)),s[10]||(s[10]=a(" 来执行我在 ",-1)),s[11]||(s[11]=n("code",null,"ftrace",-1)),s[12]||(s[12]=a(" 文章中所做的相同任务。由于会经常参考那篇文章，建议在阅读这篇文章之前先阅读它。",-1))]),s[36]||(s[36]=i(`<h3 id="安装-trace-cmd" tabindex="-1">安装 trace-cmd <a class="header-anchor" href="#安装-trace-cmd" aria-label="Permalink to “安装 trace-cmd”">​</a></h3><p>本文中所有的命令都运行在 root 用户下。</p><p>因为 <code>ftrace</code> 机制被内置于内核中，因此你可以使用下面的命令进行验证它是否启用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mount | grep tracefs</span></span>
<span class="line"><span>none on /sys/kernel/tracing type tracefs (rw,relatime,seclabel)</span></span></code></pre></div><p>不过，你需要手动尝试安装 <code>trace-cmd</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf install trace-cmd -y</span></span></code></pre></div><h3 id="列出可用的追踪器" tabindex="-1">列出可用的追踪器 <a class="header-anchor" href="#列出可用的追踪器" aria-label="Permalink to “列出可用的追踪器”">​</a></h3><p>当使用 <code>ftrace</code> 时，你必须查看文件的内容以了解有哪些追踪器可用。但使用 <code>trace-cmd</code>，你可以通过以下方式获得这些信息:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -t</span></span>
<span class="line"><span>hwlat blk mmiotrace function_graph wakeup_dl wakeup_rt wakeup function nop</span></span></code></pre></div><h3 id="启用函数追踪器" tabindex="-1">启用函数追踪器 <a class="header-anchor" href="#启用函数追踪器" aria-label="Permalink to “启用函数追踪器”">​</a></h3>`,10)),n("p",null,[s[14]||(s[14]=a("在我 ",-1)),p(e,{href:"https://linux.cn/article-13752-1.html"},{default:l(()=>[...s[13]||(s[13]=[a("之前的文章",-1)])]),_:1}),s[15]||(s[15]=a(" 中，我使用了两个追踪器，在这里我也会这么做。用 ",-1)),s[16]||(s[16]=n("code",null,"function",-1)),s[17]||(s[17]=a(" 启用你的第一个追踪器:",-1))]),s[37]||(s[37]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ trace-cmd start -p function</span></span>
<span class="line"><span>  plugin &#39;function&#39;</span></span></code></pre></div><h3 id="查看追踪输出" tabindex="-1">查看追踪输出 <a class="header-anchor" href="#查看追踪输出" aria-label="Permalink to “查看追踪输出”">​</a></h3><p>一旦追踪器被启用，你可以通过使用 <code>show</code> 参数来查看输出。这只显示了前 20 行以保持例子的简短（见我之前的文章对输出的解释）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd show | head -20</span></span>
<span class="line"><span>## tracer: function</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># entries-in-buffer/entries-written: 410142/3380032   #P:8</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#                                _-----=&gt; irqs-off</span></span>
<span class="line"><span>#                               / _----=&gt; need-resched</span></span>
<span class="line"><span>#                              | / _---=&gt; hardirq/softirq</span></span>
<span class="line"><span>#                              || / _--=&gt; preempt-depth</span></span>
<span class="line"><span>#                              ||| /     delay</span></span>
<span class="line"><span>#           TASK-PID     CPU#  ||||   TIMESTAMP  FUNCTION</span></span>
<span class="line"><span>#              | |         |   ||||      |         |</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538759: __msecs_to_jiffies &lt;-rebalance_domains</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538760: load_balance &lt;-rebalance_domains</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538761: idle_cpu &lt;-load_balance</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538762: group_balance_cpu &lt;-load_balance</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538762: find_busiest_group &lt;-load_balance</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538763: update_group_capacity &lt;-update_sd_lb_stats.constprop.0</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538763: __msecs_to_jiffies &lt;-update_group_capacity</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538765: idle_cpu &lt;-update_sd_lb_stats.constprop.0</span></span>
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538766: __msecs_to_jiffies &lt;-rebalance_domains</span></span></code></pre></div><h3 id="停止追踪并清除缓冲区" tabindex="-1">停止追踪并清除缓冲区 <a class="header-anchor" href="#停止追踪并清除缓冲区" aria-label="Permalink to “停止追踪并清除缓冲区”">​</a></h3><p>追踪将会在后台继续运行，你可以继续用 <code>show</code> 查看输出。</p><p>要停止追踪，请运行带有 <code>stop</code> 参数的 <code>trace-cmd</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd stop</span></span></code></pre></div><p>要清除缓冲区，用 <code>clear</code> 参数运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd clear</span></span></code></pre></div><h3 id="启用函数调用图追踪器" tabindex="-1">启用函数调用图追踪器 <a class="header-anchor" href="#启用函数调用图追踪器" aria-label="Permalink to “启用函数调用图追踪器”">​</a></h3><p>运行第二个追踪器，通过 <code>function_graph</code> 参数来启用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd start -p function_graph</span></span>
<span class="line"><span>  Plugin &#39;function_graph&#39;</span></span></code></pre></div><p>再次使用 <code>show</code> 参数查看输出。正如预期的那样，输出与第一次追踪输出略有不同。这一次，它包括一个<strong>函数调用</strong>链：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd show | head -20</span></span>
<span class="line"><span>## tracer: function_graph</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># CPU  DURATION                  FUNCTION CALLS</span></span>
<span class="line"><span># |     |   |                     |   |   |   |</span></span>
<span class="line"><span> 4)   0.079 us    |        } /* rcu_all_qs */</span></span>
<span class="line"><span> 4)   0.327 us    |      } /* __cond_resched */</span></span>
<span class="line"><span> 4)   0.081 us    |      rcu_read_unlock_strict();</span></span>
<span class="line"><span> 4)               |      __cond_resched() {</span></span>
<span class="line"><span> 4)   0.078 us    |        rcu_all_qs();</span></span>
<span class="line"><span> 4)   0.243 us    |      }</span></span>
<span class="line"><span> 4)   0.080 us    |      rcu_read_unlock_strict();</span></span>
<span class="line"><span> 4)               |      __cond_resched() {</span></span>
<span class="line"><span> 4)   0.078 us    |        rcu_all_qs();</span></span>
<span class="line"><span> 4)   0.241 us    |      }</span></span>
<span class="line"><span> 4)   0.080 us    |      rcu_read_unlock_strict();</span></span>
<span class="line"><span> 4)               |      __cond_resched() {</span></span>
<span class="line"><span> 4)   0.079 us    |        rcu_all_qs();</span></span>
<span class="line"><span> 4)   0.235 us    |      }</span></span>
<span class="line"><span> 4)   0.095 us    |      rcu_read_unlock_strict();</span></span>
<span class="line"><span> 4)               |      __cond_resched() {</span></span></code></pre></div><p>使用 <code>stop</code> 和 <code>clear</code> 命令来停止追踪和清除缓存区：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd stop</span></span>
<span class="line"><span># trace-cmd clear</span></span></code></pre></div><h3 id="调整追踪以增加深度" tabindex="-1">调整追踪以增加深度 <a class="header-anchor" href="#调整追踪以增加深度" aria-label="Permalink to “调整追踪以增加深度”">​</a></h3><p>如果你想在函数调用中看到更多的深度，你可以对追踪器进行调整：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd start -p function_graph --max-graph-depth 5</span></span>
<span class="line"><span>  plugin &#39;function_graph&#39;</span></span></code></pre></div><p>现在，当你将这个输出与你之前看到的进行比较时，你应该看到更多的嵌套函数调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd show | head -20</span></span>
<span class="line"><span>## tracer: function_graph</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># CPU  DURATION                  FUNCTION CALLS</span></span>
<span class="line"><span># |     |   |                     |   |   |   |</span></span>
<span class="line"><span> 6)               |        __fget_light() {</span></span>
<span class="line"><span> 6)   0.804 us    |          __fget_files();</span></span>
<span class="line"><span> 6)   2.708 us    |        }</span></span>
<span class="line"><span> 6)   3.650 us    |      } /* __fdget */</span></span>
<span class="line"><span> 6)   0.547 us    |      eventfd_poll();</span></span>
<span class="line"><span> 6)   0.535 us    |      fput();</span></span>
<span class="line"><span> 6)               |      __fdget() {</span></span>
<span class="line"><span> 6)               |        __fget_light() {</span></span>
<span class="line"><span> 6)   0.946 us    |          __fget_files();</span></span>
<span class="line"><span> 6)   1.895 us    |        }</span></span>
<span class="line"><span> 6)   2.849 us    |      }</span></span>
<span class="line"><span> 6)               |      sock_poll() {</span></span>
<span class="line"><span> 6)   0.651 us    |        unix_poll();</span></span>
<span class="line"><span> 6)   1.905 us    |      }</span></span>
<span class="line"><span> 6)   0.475 us    |      fput();</span></span>
<span class="line"><span> 6)               |      __fdget() {</span></span></code></pre></div><h3 id="了解可被追踪的函数" tabindex="-1">了解可被追踪的函数 <a class="header-anchor" href="#了解可被追踪的函数" aria-label="Permalink to “了解可被追踪的函数”">​</a></h3><p>如果你想只追踪某些函数而忽略其他的，你需要知道确切的函数名称。你可以用 <code>list -f</code> 参数来得到它们。例如搜索常见的内核函数 <code>kmalloc</code>，它被用来在内核中分配内存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | grep kmalloc</span></span>
<span class="line"><span>bpf_map_kmalloc_node</span></span>
<span class="line"><span>mempool_kmalloc</span></span>
<span class="line"><span>__traceiter_kmalloc</span></span>
<span class="line"><span>__traceiter_kmalloc_node</span></span>
<span class="line"><span>kmalloc_slab</span></span>
<span class="line"><span>kmalloc_order</span></span>
<span class="line"><span>kmalloc_order_trace</span></span>
<span class="line"><span>kmalloc_large_node</span></span>
<span class="line"><span>__kmalloc</span></span>
<span class="line"><span>__kmalloc_track_caller</span></span>
<span class="line"><span>__kmalloc_node</span></span>
<span class="line"><span>__kmalloc_node_track_caller</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>下面是我的测试系统中可被追踪的函数总数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | wc -l</span></span>
<span class="line"><span>63165</span></span></code></pre></div><h3 id="追踪内核模块相关的函数" tabindex="-1">追踪内核模块相关的函数 <a class="header-anchor" href="#追踪内核模块相关的函数" aria-label="Permalink to “追踪内核模块相关的函数”">​</a></h3><p>你也可以追踪与特定内核模块相关的函数。假设你想追踪 <code>kvm</code> 内核模块相关的功能，你可以通过以下方式来实现。请确保该模块已经加载：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lsmod | grep kvm_intel</span></span>
<span class="line"><span>kvm_intel 335872 0</span></span>
<span class="line"><span>kvm 987136 1 kvm_intel</span></span></code></pre></div><p>再次运行 <code>trace-cmd</code>，使用 <code>list</code> 参数，并从输出结果中，<code>grep</code> 查找以 <code>]</code> 结尾的行。这将过滤掉内核模块。然后 <code>grep</code> 内核模块 <code>kvm_intel</code> ，你应该看到所有与该内核模块有关的函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | grep ]$  | grep kvm_intel</span></span>
<span class="line"><span>vmx_can_emulate_instruction [kvm_intel]</span></span>
<span class="line"><span>vmx_update_emulated_instruction [kvm_intel]</span></span>
<span class="line"><span>vmx_setup_uret_msr [kvm_intel]</span></span>
<span class="line"><span>vmx_set_identity_map_addr [kvm_intel]</span></span>
<span class="line"><span>handle_machine_check [kvm_intel]</span></span>
<span class="line"><span>handle_triple_fault [kvm_intel]</span></span>
<span class="line"><span>vmx_patch_hypercall [kvm_intel]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vmx_dump_dtsel [kvm_intel]</span></span>
<span class="line"><span>vmx_dump_sel [kvm_intel]</span></span></code></pre></div><h3 id="追踪特定函数" tabindex="-1">追踪特定函数 <a class="header-anchor" href="#追踪特定函数" aria-label="Permalink to “追踪特定函数”">​</a></h3><p>现在你知道了如何找到感兴趣的函数，请用一个例子把这些内容用于时间。就像前面的文章一样，试着追踪与文件系统相关的函数。我的测试系统上的文件系统是 <code>ext4</code>。</p><p>这个过程略有不同；你在运行命令时，不使用 <code>start</code> 参数，而是在 <code>record</code> 参数后面加上你想追踪的函数的“模式”。你还需要指定你想要的追踪器；在这种情况下，就是 <code>function_graph</code>。该命令会继续记录追踪，直到你用 <code>Ctrl+C</code> 停止它。所以几秒钟后，按 <code>Ctrl+C</code> 停止追踪：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | grep ^ext4_</span></span>
<span class="line"><span></span></span>
<span class="line"><span># trace-cmd record -l ext4_* -p function_graph</span></span>
<span class="line"><span>  plugin &#39;function_graph&#39;</span></span>
<span class="line"><span>Hit Ctrl^C to stop recording</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>CPU0 data recorded at offset=0x856000</span></span>
<span class="line"><span>    8192 bytes in size</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="查看追踪记录" tabindex="-1">查看追踪记录 <a class="header-anchor" href="#查看追踪记录" aria-label="Permalink to “查看追踪记录”">​</a></h3><p>要查看你之前的追踪记录，运行带有 <code>report</code> 参数的命令。从输出结果来看，很明显过滤器起作用了，你只看到 <code>ext4</code> 相关的函数追踪：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd report | head -20</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>cpus=8</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928103: funcgraph_entry:                   |  ext4_show_options() {</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928104: funcgraph_entry:        0.187 us   |    ext4_get_dummy_policy();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928105: funcgraph_exit:         1.583 us   |  }</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928122: funcgraph_entry:                   |  ext4_create() {</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928122: funcgraph_entry:                   |    ext4_alloc_inode() {</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928123: funcgraph_entry:        0.101 us   |      ext4_es_init_tree();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928123: funcgraph_entry:        0.083 us   |      ext4_init_pending_tree();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928123: funcgraph_entry:        0.141 us   |      ext4_fc_init_inode();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928123: funcgraph_exit:         0.931 us   |    }</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928124: funcgraph_entry:        0.081 us   |    ext4_get_dummy_policy();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928124: funcgraph_entry:        0.133 us   |    ext4_get_group_desc();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928124: funcgraph_entry:        0.115 us   |    ext4_free_inodes_count();</span></span>
<span class="line"><span>       trace-cmd-12697 [000] 11303.928124: funcgraph_entry:        0.114 us   |    ext4_get_group_desc();</span></span></code></pre></div><h3 id="追踪一个特定的-pid" tabindex="-1">追踪一个特定的 PID <a class="header-anchor" href="#追踪一个特定的-pid" aria-label="Permalink to “追踪一个特定的 PID”">​</a></h3><p>假设你想追踪与一个进程（PID）有关的函数。打开另一个终端，注意运行中的 shell 的PID：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo $$</span></span>
<span class="line"><span>10885</span></span></code></pre></div><p>再次运行 <code>record</code> 命令，用 <code>-P</code> 选项传递PID。这一次，让终端运行（也就是说，先不要按 <code>Ctrl+C</code> ）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd record -P 10885 -p function_graph</span></span>
<span class="line"><span>  Plugin &#39;function_graph&#39;</span></span>
<span class="line"><span>Hit Ctrl^C to stop recording</span></span></code></pre></div><h3 id="在-shell-上运行一些命令" tabindex="-1">在 shell 上运行一些命令 <a class="header-anchor" href="#在-shell-上运行一些命令" aria-label="Permalink to “在 shell 上运行一些命令”">​</a></h3><p>移动到另一个终端，在那里你有一个以特定 PID 运行的 shell，并运行任何命令，例如，<code>ls</code> 命令用来列出文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls</span></span>
<span class="line"><span>Temp-9b61f280-fdc1-4512-9211-5c60f764d702</span></span>
<span class="line"><span>tracker-extract-3-files.1000</span></span>
<span class="line"><span>v8-compile-cache-1000</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>移动到你启用追踪的终端，按 <code>Ctrl+C</code> 停止追踪：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd record -P 10885 -p function_graph</span></span>
<span class="line"><span>  plugin &#39;function_graph&#39;</span></span>
<span class="line"><span>Hit Ctrl^C to stop recording</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>CPU1 data recorded at offset=0x856000</span></span>
<span class="line"><span>    618496 bytes in size</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>在追踪的输出中，你可以看到左边是 PID 和 Bash shell，右边是与之相关的函数调用。这对于缩小你的追踪范围是非常方便的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd report  | head -20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cpus=8</span></span>
<span class="line"><span>          &lt;idle&gt;-0     [001] 11555.380581: funcgraph_entry:                   |  switch_mm_irqs_off() {</span></span>
<span class="line"><span>          &lt;idle&gt;-0     [001] 11555.380583: funcgraph_entry:        1.703 us   |    load_new_mm_cr3();</span></span>
<span class="line"><span>          &lt;idle&gt;-0     [001] 11555.380586: funcgraph_entry:        0.493 us   |    switch_ldt();</span></span>
<span class="line"><span>          &lt;idle&gt;-0     [001] 11555.380587: funcgraph_exit:         7.235 us   |  }</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380589: funcgraph_entry:        1.046 us   |  finish_task_switch.isra.0();</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380591: funcgraph_entry:                   |  __fdget() {</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380592: funcgraph_entry:        2.036 us   |    __fget_light();</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380594: funcgraph_exit:         3.256 us   |  }</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380595: funcgraph_entry:                   |  tty_poll() {</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380597: funcgraph_entry:                   |    tty_ldisc_ref_wait() {</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380598: funcgraph_entry:                   |      ldsem_down_read() {</span></span>
<span class="line"><span>            bash-10885 [001] 11555.380598: funcgraph_entry:                   |        __cond_resched() {</span></span></code></pre></div><h3 id="试一试" tabindex="-1">试一试 <a class="header-anchor" href="#试一试" aria-label="Permalink to “试一试”">​</a></h3><p>这些简短的例子显示了使用 <code>trace-cmd</code> 命令而不是底层的 <code>ftrace</code> 机制，是如何实现既容易使用又拥有丰富的功能，许多内容本文并没有涉及。要想了解更多信息并更好地使用它，请查阅它的手册，并尝试使用其他有用的命令。</p><hr>`,54)),n("p",null,[s[19]||(s[19]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/21/7/linux-kernel-trace-cmd"},{default:l(()=>[...s[18]||(s[18]=[a("https://opensource.com/article/21/7/linux-kernel-trace-cmd",-1)])]),_:1})]),n("p",null,[s[24]||(s[24]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[20]||(s[20]=[a("Gaurav Kamathe",-1)])]),_:1}),s[25]||(s[25]=a(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[21]||(s[21]=[a("lujun9972",-1)])]),_:1}),s[26]||(s[26]=a(" 译者：",-1)),p(e,{href:"https://github.com/mengxinayan"},{default:l(()=>[...s[22]||(s[22]=[a("萌新阿岩",-1)])]),_:1}),s[27]||(s[27]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[23]||(s[23]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[30]||(s[30]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[28]||(s[28]=[a("LCTT",-1)])]),_:1}),s[31]||(s[31]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[29]||(s[29]=[a("Linux中国",-1)])]),_:1}),s[32]||(s[32]=a(" 荣誉推出",-1))])])}const C=t(o,[["render",h]]);export{y as __pageData,C as default};
