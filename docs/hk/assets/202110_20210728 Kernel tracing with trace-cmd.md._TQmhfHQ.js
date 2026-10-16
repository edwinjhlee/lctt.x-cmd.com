import{_ as t,a0 as c,w as r,s as d,I as n,x as a,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 trace-cmd 追蹤內核 | LCTT x X-CMD","titleTemplate":false,"description":"使用 trace-cmd 追蹤內核 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 trace-cmd 追蹤內核 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 trace-cmd 追蹤內核 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210728 Kernel tracing with trace-cmd","title":"使用 trace-cmd 追蹤內核","tag":"202110","desc":""},"relativePath":"202110/20210728 Kernel tracing with trace-cmd.md","filePath":"[post].md"}'),o={name:"202110/20210728 Kernel tracing with trace-cmd.md"};function h(g,s,u,k,_,b){const e=c("Link");return r(),d("div",null,[s[33]||(s[33]=n("h1",{id:"使用-trace-cmd-追蹤內核",tabindex:"-1"},[a("使用 trace-cmd 追蹤內核 "),n("a",{class:"header-anchor",href:"#使用-trace-cmd-追蹤內核","aria-label":"Permalink to “使用 trace-cmd 追蹤內核”"},"​")],-1)),s[34]||(s[34]=n("blockquote",null,[n("p",null,"trace-cmd 是一個易於使用，且特性眾多、可用來追蹤內核函數的命令。")],-1)),s[35]||(s[35]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202110/05/145818d2i9tgjetzj8itqg.jpg",alt:""})],-1)),n("p",null,[s[1]||(s[1]=a("在 ",-1)),p(e,{href:"https://linux.cn/article-13752-1.html"},{default:l(()=>[...s[0]||(s[0]=[a("之前的文章",-1)])]),_:1}),s[2]||(s[2]=a(" 裏，我介紹瞭如何利用 ",-1)),s[3]||(s[3]=n("code",null,"ftrace",-1)),s[4]||(s[4]=a(" 來追蹤內核函數。通過寫入和讀出文件來使用 ",-1)),s[5]||(s[5]=n("code",null,"ftrace",-1)),s[6]||(s[6]=a(" 會變得很枯燥，所以我對它做了一個封裝來運行帶有選項的命令，以啓用和禁用追蹤、設置過濾器、查看輸出、清除輸出等等。",-1))]),n("p",null,[p(e,{href:"https://lwn.net/Articles/410200/"},{default:l(()=>[...s[7]||(s[7]=[a("trace-cmd",-1)])]),_:1}),s[8]||(s[8]=a(" 命令是一個可以幫助你做到這一點的工具。在這篇文章中，我使用 ",-1)),s[9]||(s[9]=n("code",null,"trace-cmd",-1)),s[10]||(s[10]=a(" 來執行我在 ",-1)),s[11]||(s[11]=n("code",null,"ftrace",-1)),s[12]||(s[12]=a(" 文章中所做的相同任務。由於會經常參考那篇文章，建議在閲讀這篇文章之前先閲讀它。",-1))]),s[36]||(s[36]=i(`<h3 id="安裝-trace-cmd" tabindex="-1">安裝 trace-cmd <a class="header-anchor" href="#安裝-trace-cmd" aria-label="Permalink to “安裝 trace-cmd”">​</a></h3><p>本文中所有的命令都運行在 root 用户下。</p><p>因為 <code>ftrace</code> 機制被內置於內核中，因此你可以使用下面的命令進行驗證它是否啓用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># mount | grep tracefs</span></span>
<span class="line"><span>none on /sys/kernel/tracing type tracefs (rw,relatime,seclabel)</span></span></code></pre></div><p>不過，你需要手動嘗試安裝 <code>trace-cmd</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># dnf install trace-cmd -y</span></span></code></pre></div><h3 id="列出可用的追蹤器" tabindex="-1">列出可用的追蹤器 <a class="header-anchor" href="#列出可用的追蹤器" aria-label="Permalink to “列出可用的追蹤器”">​</a></h3><p>當使用 <code>ftrace</code> 時，你必須查看文件的內容以瞭解有哪些追蹤器可用。但使用 <code>trace-cmd</code>，你可以通過以下方式獲得這些信息:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -t</span></span>
<span class="line"><span>hwlat blk mmiotrace function_graph wakeup_dl wakeup_rt wakeup function nop</span></span></code></pre></div><h3 id="啓用函數追蹤器" tabindex="-1">啓用函數追蹤器 <a class="header-anchor" href="#啓用函數追蹤器" aria-label="Permalink to “啓用函數追蹤器”">​</a></h3>`,10)),n("p",null,[s[14]||(s[14]=a("在我 ",-1)),p(e,{href:"https://linux.cn/article-13752-1.html"},{default:l(()=>[...s[13]||(s[13]=[a("之前的文章",-1)])]),_:1}),s[15]||(s[15]=a(" 中，我使用了兩個追蹤器，在這裏我也會這麼做。用 ",-1)),s[16]||(s[16]=n("code",null,"function",-1)),s[17]||(s[17]=a(" 啓用你的第一個追蹤器:",-1))]),s[37]||(s[37]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ trace-cmd start -p function</span></span>
<span class="line"><span>  plugin &#39;function&#39;</span></span></code></pre></div><h3 id="查看追蹤輸出" tabindex="-1">查看追蹤輸出 <a class="header-anchor" href="#查看追蹤輸出" aria-label="Permalink to “查看追蹤輸出”">​</a></h3><p>一旦追蹤器被啓用，你可以通過使用 <code>show</code> 參數來查看輸出。這隻顯示了前 20 行以保持例子的簡短（見我之前的文章對輸出的解釋）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd show | head -20</span></span>
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
<span class="line"><span>           gdbus-2606    [004] ..s. 10520.538766: __msecs_to_jiffies &lt;-rebalance_domains</span></span></code></pre></div><h3 id="停止追蹤並清除緩衝區" tabindex="-1">停止追蹤並清除緩衝區 <a class="header-anchor" href="#停止追蹤並清除緩衝區" aria-label="Permalink to “停止追蹤並清除緩衝區”">​</a></h3><p>追蹤將會在後台繼續運行，你可以繼續用 <code>show</code> 查看輸出。</p><p>要停止追蹤，請運行帶有 <code>stop</code> 參數的 <code>trace-cmd</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd stop</span></span></code></pre></div><p>要清除緩衝區，用 <code>clear</code> 參數運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd clear</span></span></code></pre></div><h3 id="啓用函數調用圖追蹤器" tabindex="-1">啓用函數調用圖追蹤器 <a class="header-anchor" href="#啓用函數調用圖追蹤器" aria-label="Permalink to “啓用函數調用圖追蹤器”">​</a></h3><p>運行第二個追蹤器，通過 <code>function_graph</code> 參數來啓用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd start -p function_graph</span></span>
<span class="line"><span>  Plugin &#39;function_graph&#39;</span></span></code></pre></div><p>再次使用 <code>show</code> 參數查看輸出。正如預期的那樣，輸出與第一次追蹤輸出略有不同。這一次，它包括一個<strong>函數調用</strong>鏈：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd show | head -20</span></span>
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
<span class="line"><span> 4)               |      __cond_resched() {</span></span></code></pre></div><p>使用 <code>stop</code> 和 <code>clear</code> 命令來停止追蹤和清除緩存區：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd stop</span></span>
<span class="line"><span># trace-cmd clear</span></span></code></pre></div><h3 id="調整追蹤以增加深度" tabindex="-1">調整追蹤以增加深度 <a class="header-anchor" href="#調整追蹤以增加深度" aria-label="Permalink to “調整追蹤以增加深度”">​</a></h3><p>如果你想在函數調用中看到更多的深度，你可以對追蹤器進行調整：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd start -p function_graph --max-graph-depth 5</span></span>
<span class="line"><span>  plugin &#39;function_graph&#39;</span></span></code></pre></div><p>現在，當你將這個輸出與你之前看到的進行比較時，你應該看到更多的嵌套函數調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd show | head -20</span></span>
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
<span class="line"><span> 6)               |      __fdget() {</span></span></code></pre></div><h3 id="瞭解可被追蹤的函數" tabindex="-1">瞭解可被追蹤的函數 <a class="header-anchor" href="#瞭解可被追蹤的函數" aria-label="Permalink to “瞭解可被追蹤的函數”">​</a></h3><p>如果你想只追蹤某些函數而忽略其他的，你需要知道確切的函數名稱。你可以用 <code>list -f</code> 參數來得到它們。例如搜索常見的內核函數 <code>kmalloc</code>，它被用來在內核中分配內存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | grep kmalloc</span></span>
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
<span class="line"><span>[...]</span></span></code></pre></div><p>下面是我的測試系統中可被追蹤的函數總數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | wc -l</span></span>
<span class="line"><span>63165</span></span></code></pre></div><h3 id="追蹤內核模組相關的函數" tabindex="-1">追蹤內核模組相關的函數 <a class="header-anchor" href="#追蹤內核模組相關的函數" aria-label="Permalink to “追蹤內核模組相關的函數”">​</a></h3><p>你也可以追蹤與特定內核模組相關的函數。假設你想追蹤 <code>kvm</code> 內核模組相關的功能，你可以通過以下方式來實現。請確保該模組已經加載：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># lsmod | grep kvm_intel</span></span>
<span class="line"><span>kvm_intel 335872 0</span></span>
<span class="line"><span>kvm 987136 1 kvm_intel</span></span></code></pre></div><p>再次運行 <code>trace-cmd</code>，使用 <code>list</code> 參數，並從輸出結果中，<code>grep</code> 查找以 <code>]</code> 結尾的行。這將過濾掉內核模組。然後 <code>grep</code> 內核模組 <code>kvm_intel</code> ，你應該看到所有與該內核模組有關的函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | grep ]$  | grep kvm_intel</span></span>
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
<span class="line"><span>vmx_dump_sel [kvm_intel]</span></span></code></pre></div><h3 id="追蹤特定函數" tabindex="-1">追蹤特定函數 <a class="header-anchor" href="#追蹤特定函數" aria-label="Permalink to “追蹤特定函數”">​</a></h3><p>現在你知道了如何找到感興趣的函數，請用一個例子把這些內容用於時間。就像前面的文章一樣，試着追蹤與文件系統相關的函數。我的測試系統上的文件系統是 <code>ext4</code>。</p><p>這個過程略有不同；你在運行命令時，不使用 <code>start</code> 參數，而是在 <code>record</code> 參數後面加上你想追蹤的函數的“模式”。你還需要指定你想要的追蹤器；在這種情況下，就是 <code>function_graph</code>。該命令會繼續記錄追蹤，直到你用 <code>Ctrl+C</code> 停止它。所以幾秒鐘後，按 <code>Ctrl+C</code> 停止追蹤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd list -f | grep ^ext4_</span></span>
<span class="line"><span></span></span>
<span class="line"><span># trace-cmd record -l ext4_* -p function_graph</span></span>
<span class="line"><span>  plugin &#39;function_graph&#39;</span></span>
<span class="line"><span>Hit Ctrl^C to stop recording</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>CPU0 data recorded at offset=0x856000</span></span>
<span class="line"><span>    8192 bytes in size</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><h3 id="查看追蹤記錄" tabindex="-1">查看追蹤記錄 <a class="header-anchor" href="#查看追蹤記錄" aria-label="Permalink to “查看追蹤記錄”">​</a></h3><p>要查看你之前的追蹤記錄，運行帶有 <code>report</code> 參數的命令。從輸出結果來看，很明顯過濾器起作用了，你只看到 <code>ext4</code> 相關的函數追蹤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd report | head -20</span></span>
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
<span class="line"><span>       trace-cmd-12697 [000] 11303.928124: funcgraph_entry:        0.114 us   |    ext4_get_group_desc();</span></span></code></pre></div><h3 id="追蹤一個特定的-pid" tabindex="-1">追蹤一個特定的 PID <a class="header-anchor" href="#追蹤一個特定的-pid" aria-label="Permalink to “追蹤一個特定的 PID”">​</a></h3><p>假設你想追蹤與一個進程（PID）有關的函數。打開另一個終端，注意運行中的 shell 的PID：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># echo $$</span></span>
<span class="line"><span>10885</span></span></code></pre></div><p>再次運行 <code>record</code> 命令，用 <code>-P</code> 選項傳遞PID。這一次，讓終端運行（也就是説，先不要按 <code>Ctrl+C</code> ）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd record -P 10885 -p function_graph</span></span>
<span class="line"><span>  Plugin &#39;function_graph&#39;</span></span>
<span class="line"><span>Hit Ctrl^C to stop recording</span></span></code></pre></div><h3 id="在-shell-上運行一些命令" tabindex="-1">在 shell 上運行一些命令 <a class="header-anchor" href="#在-shell-上運行一些命令" aria-label="Permalink to “在 shell 上運行一些命令”">​</a></h3><p>移動到另一個終端，在那裏你有一個以特定 PID 運行的 shell，並運行任何命令，例如，<code>ls</code> 命令用來列出文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ls</span></span>
<span class="line"><span>Temp-9b61f280-fdc1-4512-9211-5c60f764d702</span></span>
<span class="line"><span>tracker-extract-3-files.1000</span></span>
<span class="line"><span>v8-compile-cache-1000</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>移動到你啓用追蹤的終端，按 <code>Ctrl+C</code> 停止追蹤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd record -P 10885 -p function_graph</span></span>
<span class="line"><span>  plugin &#39;function_graph&#39;</span></span>
<span class="line"><span>Hit Ctrl^C to stop recording</span></span>
<span class="line"><span>^C</span></span>
<span class="line"><span>CPU1 data recorded at offset=0x856000</span></span>
<span class="line"><span>    618496 bytes in size</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>在追蹤的輸出中，你可以看到左邊是 PID 和 Bash shell，右邊是與之相關的函數調用。這對於縮小你的追蹤範圍是非常方便的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># trace-cmd report  | head -20</span></span>
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
<span class="line"><span>            bash-10885 [001] 11555.380598: funcgraph_entry:                   |        __cond_resched() {</span></span></code></pre></div><h3 id="試一試" tabindex="-1">試一試 <a class="header-anchor" href="#試一試" aria-label="Permalink to “試一試”">​</a></h3><p>這些簡短的例子顯示了使用 <code>trace-cmd</code> 命令而不是底層的 <code>ftrace</code> 機制，是如何實現既容易使用又擁有豐富的功能，許多內容本文並沒有涉及。要想了解更多信息並更好地使用它，請查閲它的手冊，並嘗試使用其他有用的命令。</p><hr>`,54)),n("p",null,[s[19]||(s[19]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/21/7/linux-kernel-trace-cmd"},{default:l(()=>[...s[18]||(s[18]=[a("https://opensource.com/article/21/7/linux-kernel-trace-cmd",-1)])]),_:1})]),n("p",null,[s[24]||(s[24]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/gkamathe"},{default:l(()=>[...s[20]||(s[20]=[a("Gaurav Kamathe",-1)])]),_:1}),s[25]||(s[25]=a(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[21]||(s[21]=[a("lujun9972",-1)])]),_:1}),s[26]||(s[26]=a(" 譯者：",-1)),p(e,{href:"https://github.com/mengxinayan"},{default:l(()=>[...s[22]||(s[22]=[a("萌新阿巖",-1)])]),_:1}),s[27]||(s[27]=a(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[23]||(s[23]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[30]||(s[30]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[28]||(s[28]=[a("LCTT",-1)])]),_:1}),s[31]||(s[31]=a(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[29]||(s[29]=[a("Linux中國",-1)])]),_:1}),s[32]||(s[32]=a(" 榮譽推出",-1))])])}const C=t(o,[["render",h]]);export{y as __pageData,C as default};
