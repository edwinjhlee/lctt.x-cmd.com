import{_ as l,a0 as t,w as r,s as o,I as a,x as n,a1 as e,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"开发一个 Linux 调试器（六）：源码级逐步执行 | LCTT x X-CMD","titleTemplate":false,"description":"开发一个 Linux 调试器（六）：源码级逐步执行 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"开发一个 Linux 调试器（六）：源码级逐步执行 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"开发一个 Linux 调试器（六）：源码级逐步执行 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170506 Writing a Linux Debugger Part 6 Source-level stepping","title":"开发一个 Linux 调试器（六）：源码级逐步执行","tag":"201708","desc":""},"relativePath":"201708/20170506 Writing a Linux Debugger Part 6 Source-level stepping.md","filePath":"[post].md"}'),c={name:"201708/20170506 Writing a Linux Debugger Part 6 Source-level stepping.md"};function u(g,s,_,h,b,k){const p=t("Link");return r(),o("div",null,[s[26]||(s[26]=a("h1",{id:"开发一个-linux-调试器-六-源码级逐步执行",tabindex:"-1"},[n("开发一个 Linux 调试器（六）：源码级逐步执行 "),a("a",{class:"header-anchor",href:"#开发一个-linux-调试器-六-源码级逐步执行","aria-label":"Permalink to “开发一个 Linux 调试器（六）：源码级逐步执行”"},"​")],-1)),s[27]||(s[27]=a("p",null,"在前几篇博文中我们学习了 DWARF 信息以及它如何使我们将机器码和上层源码联系起来。这一次我们通过为我们的调试器添加源码级逐步调试将该知识应用于实际。",-1)),s[28]||(s[28]=a("h3",{id:"系列文章索引",tabindex:"-1"},[n("系列文章索引 "),a("a",{class:"header-anchor",href:"#系列文章索引","aria-label":"Permalink to “系列文章索引”"},"​")],-1)),s[29]||(s[29]=a("p",null,"随着后面文章的发布，这些链接会逐渐生效。",-1)),a("ol",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("准备环境",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8645-1.html"},{default:i(()=>[...s[1]||(s[1]=[n("断点",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8579-1.html"},{default:i(()=>[...s[2]||(s[2]=[n("寄存器和内存",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8719-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8812-1.html"},{default:i(()=>[...s[4]||(s[4]=[n("源码和信号",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...s[5]||(s[5]=[n("源码级逐步执行",-1)])]),_:1})]),s[6]||(s[6]=a("li",null,"源码级断点",-1)),s[7]||(s[7]=a("li",null,"调用栈展开",-1)),s[8]||(s[8]=a("li",null,"读取变量",-1)),s[9]||(s[9]=a("li",null,"下一步",-1))]),s[30]||(s[30]=d(`<h3 id="揭秘指令级逐步执行" tabindex="-1">揭秘指令级逐步执行 <a class="header-anchor" href="#揭秘指令级逐步执行" aria-label="Permalink to “揭秘指令级逐步执行”">​</a></h3><p>我们正在超越了自我。首先让我们通过用户接口揭秘指令级单步执行。我决定将它切分为能被其它部分代码利用的 <code>single_step_instruction</code> 和确保是否启用了某个断点的 <code>single_step_instruction_with_breakpoint_check</code> 两个函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::single_step_instruction() {</span></span>
<span class="line"><span>    ptrace(PTRACE_SINGLESTEP, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>    wait_for_signal();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void debugger::single_step_instruction_with_breakpoint_check() {</span></span>
<span class="line"><span>    //首先，检查我们是否需要停用或者启用某个断点</span></span>
<span class="line"><span>    if (m_breakpoints.count(get_pc())) {</span></span>
<span class="line"><span>        step_over_breakpoint();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        single_step_instruction();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如以往，另一个命令被集成到我们的 <code>handle_command</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>else if(is_prefix(command, &quot;stepi&quot;)) {</span></span>
<span class="line"><span>    single_step_instruction_with_breakpoint_check();</span></span>
<span class="line"><span>    auto line_entry = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span>    print_source(line_entry-&gt;file-&gt;path, line_entry-&gt;line);</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>利用新增的这些函数我们可以开始实现我们的源码级逐步执行函数。</p><h3 id="实现逐步执行" tabindex="-1">实现逐步执行 <a class="header-anchor" href="#实现逐步执行" aria-label="Permalink to “实现逐步执行”">​</a></h3><p>我们打算编写这些函数非常简单的版本，但真正的调试器有 <em>thread plan</em> 的概念，它封装了所有的单步信息。例如，调试器可能有一些复杂的逻辑去决定断点的位置，然后有一些回调函数用于判断单步操作是否完成。这其中有非常多的基础设施，我们只采用一种朴素的方法。我们可能会意外地跳过断点，但如果你愿意的话，你可以花一些时间把所有的细节都处理好。</p><p>对于跳出 <code>step_out</code>，我们只是在函数的返回地址处设一个断点然后继续执行。我暂时还不想考虑调用栈展开的细节 - 这些都会在后面的部分介绍 - 但可以说返回地址就保存在栈帧开始的后 8 个字节中。因此我们会读取栈指针然后在内存相对应的地址读取值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_out() {</span></span>
<span class="line"><span>    auto frame_pointer = get_register_value(m_pid, reg::rbp);</span></span>
<span class="line"><span>    auto return_address = read_memory(frame_pointer+8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    bool should_remove_breakpoint = false;</span></span>
<span class="line"><span>    if (!m_breakpoints.count(return_address)) {</span></span>
<span class="line"><span>        set_breakpoint_at_address(return_address);</span></span>
<span class="line"><span>        should_remove_breakpoint = true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    continue_execution();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (should_remove_breakpoint) {</span></span>
<span class="line"><span>        remove_breakpoint(return_address);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>remove_breakpoint</code> 是一个小的帮助函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::remove_breakpoint(std::intptr_t addr) {</span></span>
<span class="line"><span>    if (m_breakpoints.at(addr).is_enabled()) {</span></span>
<span class="line"><span>        m_breakpoints.at(addr).disable();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m_breakpoints.erase(addr);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下来是跳入 <code>step_in</code>。一个简单的算法是继续逐步执行指令直到新的一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_in() {</span></span>
<span class="line"><span>   auto line = get_line_entry_from_pc(get_pc())-&gt;line;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (get_line_entry_from_pc(get_pc())-&gt;line == line) {</span></span>
<span class="line"><span>        single_step_instruction_with_breakpoint_check();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto line_entry = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span>    print_source(line_entry-&gt;file-&gt;path, line_entry-&gt;line);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>跳过 <code>step_over</code> 对于我们来说是三个中最难的。理论上，解决方法就是在下一行源码中设置一个断点，但下一行源码是什么呢？它可能不是当前行后续的那一行，因为我们可能处于一个循环、或者某种条件结构之中。真正的调试器一般会检查当前正在执行什么指令然后计算出所有可能的分支目标，然后在所有分支目标中设置断点。对于一个小的项目，我不打算实现或者集成一个 x86 指令模拟器，因此我们要想一个更简单的解决办法。有几个可怕的选择，一个是一直逐步执行直到当前函数新的一行，或者在当前函数的每一行都设置一个断点。如果我们是要跳过一个函数调用，前者将会相当的低效，因为我们需要逐步执行那个调用图中的每个指令，因此我会采用第二种方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_over() {</span></span>
<span class="line"><span>    auto func = get_function_from_pc(get_pc());</span></span>
<span class="line"><span>    auto func_entry = at_low_pc(func);</span></span>
<span class="line"><span>    auto func_end = at_high_pc(func);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto line = get_line_entry_from_pc(func_entry);</span></span>
<span class="line"><span>    auto start_line = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::vector&lt;std::intptr_t&gt; to_delete{};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (line-&gt;address &lt; func_end) {</span></span>
<span class="line"><span>        if (line-&gt;address != start_line-&gt;address &amp;&amp; !m_breakpoints.count(line-&gt;address)) {</span></span>
<span class="line"><span>            set_breakpoint_at_address(line-&gt;address);</span></span>
<span class="line"><span>            to_delete.push_back(line-&gt;address);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ++line;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto frame_pointer = get_register_value(m_pid, reg::rbp);</span></span>
<span class="line"><span>    auto return_address = read_memory(frame_pointer+8);</span></span>
<span class="line"><span>    if (!m_breakpoints.count(return_address)) {</span></span>
<span class="line"><span>        set_breakpoint_at_address(return_address);</span></span>
<span class="line"><span>        to_delete.push_back(return_address);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    continue_execution();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto addr : to_delete) {</span></span>
<span class="line"><span>        remove_breakpoint(addr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个函数有一点复杂，我们将它拆开来看。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    auto func = get_function_from_pc(get_pc());</span></span>
<span class="line"><span>    auto func_entry = at_low_pc(func);</span></span>
<span class="line"><span>    auto func_end = at_high_pc(func);</span></span></code></pre></div><p><code>at_low_pc</code> 和 <code>at_high_pc</code> 是 <code>libelfin</code> 中的函数，它们能给我们指定函数 DWARF 信息条目的最小和最大程序计数器值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    auto line = get_line_entry_from_pc(func_entry);</span></span>
<span class="line"><span>    auto start_line = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::vector&lt;std::intptr_t&gt; breakpoints_to_remove{};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (line-&gt;address &lt; func_end) {</span></span>
<span class="line"><span>        if (line-&gt;address != start_line-&gt;address &amp;&amp; !m_breakpoints.count(line-&gt;address)) {</span></span>
<span class="line"><span>            set_breakpoint_at_address(line-&gt;address);</span></span>
<span class="line"><span>            breakpoints_to_remove.push_back(line-&gt;address);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        ++line;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>我们需要移除我们设置的所有断点，以便不会泄露出我们的逐步执行函数，为此我们把它们保存到一个 <code>std::vector</code> 中。为了设置所有断点，我们循环遍历行表条目直到找到一个不在我们函数范围内的。对于每一个，我们都要确保它不是我们当前所在的行，而且在这个位置还没有设置任何断点。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    auto frame_pointer = get_register_value(m_pid, reg::rbp);</span></span>
<span class="line"><span>    auto return_address = read_memory(frame_pointer+8);</span></span>
<span class="line"><span>    if (!m_breakpoints.count(return_address)) {</span></span>
<span class="line"><span>        set_breakpoint_at_address(return_address);</span></span>
<span class="line"><span>        to_delete.push_back(return_address);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>这里我们在函数的返回地址处设置一个断点，正如跳出 <code>step_out</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    continue_execution();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto addr : to_delete) {</span></span>
<span class="line"><span>        remove_breakpoint(addr);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>最后，我们继续执行直到命中它们中的其中一个断点，然后移除所有我们设置的临时断点。</p><p>它并不美观，但暂时先这样吧。</p><p>当然，我们还需要将这个新功能添加到用户界面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if(is_prefix(command, &quot;step&quot;)) {</span></span>
<span class="line"><span>        step_in();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if(is_prefix(command, &quot;next&quot;)) {</span></span>
<span class="line"><span>        step_over();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if(is_prefix(command, &quot;finish&quot;)) {</span></span>
<span class="line"><span>        step_out();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h3><p>我通过实现一个调用一系列不同函数的简单函数来进行测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void a() {</span></span>
<span class="line"><span>    int foo = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void b() {</span></span>
<span class="line"><span>    int foo = 2;</span></span>
<span class="line"><span>    a();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void c() {</span></span>
<span class="line"><span>    int foo = 3;</span></span>
<span class="line"><span>    b();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void d() {</span></span>
<span class="line"><span>    int foo = 4;</span></span>
<span class="line"><span>    c();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void e() {</span></span>
<span class="line"><span>    int foo = 5;</span></span>
<span class="line"><span>    d();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void f() {</span></span>
<span class="line"><span>    int foo = 6;</span></span>
<span class="line"><span>    e();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    f();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你应该可以在 <code>main</code> 地址处设置一个断点，然后在整个程序中跳入、跳过、跳出函数。如果你尝试跳出 <code>main</code> 函数或者跳入任何动态链接库，就会出现意料之外的事情。</p>`,32)),a("p",null,[s[11]||(s[11]=n("你可以在",-1)),e(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_dwarf_step"},{default:i(()=>[...s[10]||(s[10]=[n("这里",-1)])]),_:1}),s[12]||(s[12]=n("找到这篇博文的相关代码。下次我们会利用我们新的 DWARF 技巧来实现源码级断点。",-1))]),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[14]||(s[14]=n("via: ",-1)),e(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...s[13]||(s[13]=[n("https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"https://www.twitter.com/TartanLlama"},{default:i(()=>[...s[15]||(s[15]=[n("Simon Brand",-1)])]),_:1}),s[19]||(s[19]=n(" 译者：",-1)),e(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...s[16]||(s[16]=[n("ictlyh",-1)])]),_:1}),s[20]||(s[20]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中国",-1)])]),_:1}),s[25]||(s[25]=n(" 荣誉推出",-1))])])}const y=l(c,[["render",u]]);export{v as __pageData,y as default};
