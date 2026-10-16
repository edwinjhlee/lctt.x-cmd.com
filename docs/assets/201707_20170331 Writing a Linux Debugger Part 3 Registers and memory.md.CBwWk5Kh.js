import{_ as l,a0 as r,w as d,s as o,I as a,x as n,a1 as e,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"开发一个 Linux 调试器（三）：寄存器和内存 | LCTT x X-CMD","titleTemplate":false,"description":"开发一个 Linux 调试器（三）：寄存器和内存 | LCTT (201707) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"开发一个 Linux 调试器（三）：寄存器和内存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"开发一个 Linux 调试器（三）：寄存器和内存 | LCTT (201707) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201707/20170331 Writing a Linux Debugger Part 3 Registers and memory","title":"开发一个 Linux 调试器（三）：寄存器和内存","tag":"201707","desc":""},"relativePath":"201707/20170331 Writing a Linux Debugger Part 3 Registers and memory.md","filePath":"[post].md"}'),g={name:"201707/20170331 Writing a Linux Debugger Part 3 Registers and memory.md"};function u(c,s,b,_,h,m){const p=r("Link");return d(),o("div",null,[s[38]||(s[38]=a("h1",{id:"开发一个-linux-调试器-三-寄存器和内存",tabindex:"-1"},[n("开发一个 Linux 调试器（三）：寄存器和内存 "),a("a",{class:"header-anchor",href:"#开发一个-linux-调试器-三-寄存器和内存","aria-label":"Permalink to “开发一个 Linux 调试器（三）：寄存器和内存”"},"​")],-1)),s[39]||(s[39]=a("p",null,"上一篇博文中我们给调试器添加了一个简单的地址断点。这次，我们将添加读写寄存器和内存的功能，这将使我们能够使用我们的程序计数器、观察状态和改变程序的行为。",-1)),s[40]||(s[40]=a("h3",{id:"系列文章索引",tabindex:"-1"},[n("系列文章索引 "),a("a",{class:"header-anchor",href:"#系列文章索引","aria-label":"Permalink to “系列文章索引”"},"​")],-1)),s[41]||(s[41]=a("p",null,"随着后面文章的发布，这些链接会逐渐生效。",-1)),a("ol",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("准备环境",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8645-1.html"},{default:i(()=>[...s[1]||(s[1]=[n("断点",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/03/31/writing-a-linux-debugger-registers/"},{default:i(()=>[...s[2]||(s[2]=[n("寄存器和内存",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/05/writing-a-linux-debugger-elf-dwarf/"},{default:i(()=>[...s[3]||(s[3]=[n("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/"},{default:i(()=>[...s[4]||(s[4]=[n("源码和信号",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...s[5]||(s[5]=[n("源码级逐步执行",-1)])]),_:1})]),s[6]||(s[6]=a("li",null,"源码级断点",-1)),s[7]||(s[7]=a("li",null,"调用栈展开",-1)),s[8]||(s[8]=a("li",null,"读取变量",-1)),s[9]||(s[9]=a("li",null,"下一步",-1))]),s[42]||(s[42]=t(`<h3 id="注册我们的寄存器" tabindex="-1">注册我们的寄存器 <a class="header-anchor" href="#注册我们的寄存器" aria-label="Permalink to “注册我们的寄存器”">​</a></h3><p>在我们真正读取任何寄存器之前，我们需要告诉调试器一些关于我们的目标平台的信息，这里是 x86_64 平台。除了多组通用和专用目的寄存器，x86_64 还提供浮点和向量寄存器。为了简化，我将跳过后两种寄存器，但是你如果喜欢的话也可以选择支持它们。x86_64 也允许你像访问 32、16 或者 8 位寄存器那样访问一些 64 位寄存器，但我只会介绍 64 位寄存器。由于这些简化，对于每个寄存器我们只需要它的名称、它的 DWARF 寄存器编号以及 <code>ptrace</code> 返回结构体中的存储地址。我使用范围枚举引用这些寄存器，然后我列出了一个全局寄存器描述符数组，其中元素顺序和 <code>ptrace</code> 中寄存器结构体相同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enum class reg {</span></span>
<span class="line"><span>    rax, rbx, rcx, rdx,</span></span>
<span class="line"><span>    rdi, rsi, rbp, rsp,</span></span>
<span class="line"><span>    r8,  r9,  r10, r11,</span></span>
<span class="line"><span>    r12, r13, r14, r15,</span></span>
<span class="line"><span>    rip, rflags,    cs,</span></span>
<span class="line"><span>    orig_rax, fs_base,</span></span>
<span class="line"><span>    gs_base,</span></span>
<span class="line"><span>    fs, gs, ss, ds, es</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>constexpr std::size_t n_registers = 27;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct reg_descriptor {</span></span>
<span class="line"><span>    reg r;</span></span>
<span class="line"><span>    int dwarf_r;</span></span>
<span class="line"><span>    std::string name;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const std::array&lt;reg_descriptor, n_registers&gt; g_register_descriptors {{</span></span>
<span class="line"><span>    { reg::r15, 15, &quot;r15&quot; },</span></span>
<span class="line"><span>    { reg::r14, 14, &quot;r14&quot; },</span></span>
<span class="line"><span>    { reg::r13, 13, &quot;r13&quot; },</span></span>
<span class="line"><span>    { reg::r12, 12, &quot;r12&quot; },</span></span>
<span class="line"><span>    { reg::rbp, 6, &quot;rbp&quot; },</span></span>
<span class="line"><span>    { reg::rbx, 3, &quot;rbx&quot; },</span></span>
<span class="line"><span>    { reg::r11, 11, &quot;r11&quot; },</span></span>
<span class="line"><span>    { reg::r10, 10, &quot;r10&quot; },</span></span>
<span class="line"><span>    { reg::r9, 9, &quot;r9&quot; },</span></span>
<span class="line"><span>    { reg::r8, 8, &quot;r8&quot; },</span></span>
<span class="line"><span>    { reg::rax, 0, &quot;rax&quot; },</span></span>
<span class="line"><span>    { reg::rcx, 2, &quot;rcx&quot; },</span></span>
<span class="line"><span>    { reg::rdx, 1, &quot;rdx&quot; },</span></span>
<span class="line"><span>    { reg::rsi, 4, &quot;rsi&quot; },</span></span>
<span class="line"><span>    { reg::rdi, 5, &quot;rdi&quot; },</span></span>
<span class="line"><span>    { reg::orig_rax, -1, &quot;orig_rax&quot; },</span></span>
<span class="line"><span>    { reg::rip, -1, &quot;rip&quot; },</span></span>
<span class="line"><span>    { reg::cs, 51, &quot;cs&quot; },</span></span>
<span class="line"><span>    { reg::rflags, 49, &quot;eflags&quot; },</span></span>
<span class="line"><span>    { reg::rsp, 7, &quot;rsp&quot; },</span></span>
<span class="line"><span>    { reg::ss, 52, &quot;ss&quot; },</span></span>
<span class="line"><span>    { reg::fs_base, 58, &quot;fs_base&quot; },</span></span>
<span class="line"><span>    { reg::gs_base, 59, &quot;gs_base&quot; },</span></span>
<span class="line"><span>    { reg::ds, 53, &quot;ds&quot; },</span></span>
<span class="line"><span>    { reg::es, 50, &quot;es&quot; },</span></span>
<span class="line"><span>    { reg::fs, 54, &quot;fs&quot; },</span></span>
<span class="line"><span>    { reg::gs, 55, &quot;gs&quot; },</span></span>
<span class="line"><span>}};</span></span></code></pre></div>`,3)),a("p",null,[s[11]||(s[11]=n("如果你想自己看看的话，你通常可以在 ",-1)),s[12]||(s[12]=a("code",null,"/usr/include/sys/user.h",-1)),s[13]||(s[13]=n(" 找到寄存器数据结构，另外 DWARF 寄存器编号取自 ",-1)),e(p,{href:"https://www.uclibc.org/docs/psABI-x86_64.pdf"},{default:i(()=>[...s[10]||(s[10]=[n("System V x86_64 ABI",-1)])]),_:1}),s[14]||(s[14]=n("。",-1))]),s[43]||(s[43]=t(`<p>现在我们可以编写一堆函数来和寄存器交互。我们希望可以读取寄存器、写入数据、根据 DWARF 寄存器编号获取值，以及通过名称查找寄存器，反之类似。让我们先从实现 <code>get_register_value</code> 开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t get_register_value(pid_t pid, reg r) {</span></span>
<span class="line"><span>    user_regs_struct regs;</span></span>
<span class="line"><span>    ptrace(PTRACE_GETREGS, pid, nullptr, &amp;regs);</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>ptrace</code> 使得我们可以轻易获得我们想要的数据。我们只需要构造一个 <code>user_regs_struct</code> 实例并把它和 <code>PTRACE_GETREGS</code> 请求传递给 <code>ptrace</code>。</p><p>现在根据要请求的寄存器，我们要读取 <code>regs</code>。我们可以写一个很大的 switch 语句，但由于我们 <code>g_register_descriptors</code> 表的布局顺序和 <code>user_regs_struct</code> 相同，我们只需要搜索寄存器描述符的索引，然后作为 <code>uint64_t</code> 数组访问 <code>user_regs_struct</code> 就行。（你也可以重新排序 <code>reg</code> 枚举变量，然后使用索引把它们转换为底层类型，但第一次我就使用这种方式编写，它能正常工作，我也就懒得改它了。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                               [r](auto&amp;&amp; rd) { return rd.r == r; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return *(reinterpret_cast&lt;uint64_t*&gt;(&amp;regs) + (it - begin(g_register_descriptors)));</span></span></code></pre></div><p>到 <code>uint64_t</code> 的转换是安全的，因为 <code>user_regs_struct</code> 是一个标准布局类型，但我认为指针算术技术上是<ruby>未定义的行为<rt>undefined behavior</rt></ruby>。当前没有编译器会对此产生警告，我也懒得修改，但是如果你想保持最严格的正确性，那就写一个大的 switch 语句。</p><p><code>set_register_value</code> 非常类似，我们只是写入该位置并在最后写回寄存器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void set_register_value(pid_t pid, reg r, uint64_t value) {</span></span>
<span class="line"><span>    user_regs_struct regs;</span></span>
<span class="line"><span>    ptrace(PTRACE_GETREGS, pid, nullptr, &amp;regs);</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [r](auto&amp;&amp; rd) { return rd.r == r; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    *(reinterpret_cast&lt;uint64_t*&gt;(&amp;regs) + (it - begin(g_register_descriptors))) = value;</span></span>
<span class="line"><span>    ptrace(PTRACE_SETREGS, pid, nullptr, &amp;regs);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下一步是通过 DWARF 寄存器编号查找。这次我会真正检查一个错误条件以防我们得到一些奇怪的 DWARF 信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t get_register_value_from_dwarf_register (pid_t pid, unsigned regnum) {</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [regnum](auto&amp;&amp; rd) { return rd.dwarf_r == regnum; });</span></span>
<span class="line"><span>    if (it == end(g_register_descriptors)) {</span></span>
<span class="line"><span>        throw std::out_of_range{&quot;Unknown dwarf register&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return get_register_value(pid, it-&gt;r);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>就快完成啦，现在我们已经有了寄存器名称查找：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>std::string get_register_name(reg r) {</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [r](auto&amp;&amp; rd) { return rd.r == r; });</span></span>
<span class="line"><span>    return it-&gt;name;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reg get_register_from_name(const std::string&amp; name) {</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [name](auto&amp;&amp; rd) { return rd.name == name; });</span></span>
<span class="line"><span>    return it-&gt;r;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后我们会添加一个简单的帮助函数用于导出所有寄存器的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::dump_registers() {</span></span>
<span class="line"><span>    for (const auto&amp; rd : g_register_descriptors) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; rd.name &lt;&lt; &quot; 0x&quot;</span></span>
<span class="line"><span>                  &lt;&lt; std::setfill(&#39;0&#39;) &lt;&lt; std::setw(16) &lt;&lt; std::hex &lt;&lt; get_register_value(m_pid, rd.r) &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如你看到的，iostreams 有非常精确的接口用于美观地输出十六进制数据（啊哈哈哈哈哈哈）。如果你喜欢你也可以通过 I/O 操纵器来摆脱这种混乱。</p><p>这些已经足够支持我们在调试器接下来的部分轻松地处理寄存器，所以我们现在可以把这些添加到我们的用户界面。</p><h3 id="显示我们的寄存器" tabindex="-1">显示我们的寄存器 <a class="header-anchor" href="#显示我们的寄存器" aria-label="Permalink to “显示我们的寄存器”">​</a></h3><p>这里我们要做的就是给 <code>handle_command</code> 函数添加一个命令。通过下面的代码，用户可以输入 <code>register read rax</code>、 <code>register write rax 0x42</code> 以及类似的语句。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if (is_prefix(command, &quot;register&quot;)) {</span></span>
<span class="line"><span>        if (is_prefix(args[1], &quot;dump&quot;)) {</span></span>
<span class="line"><span>            dump_registers();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (is_prefix(args[1], &quot;read&quot;)) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; get_register_value(m_pid, get_register_from_name(args[2])) &lt;&lt; std::endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (is_prefix(args[1], &quot;write&quot;)) {</span></span>
<span class="line"><span>            std::string val {args[3], 2}; //assume 0xVAL</span></span>
<span class="line"><span>            set_register_value(m_pid, get_register_from_name(args[2]), std::stol(val, 0, 16));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="接下来做什么" tabindex="-1">接下来做什么？ <a class="header-anchor" href="#接下来做什么" aria-label="Permalink to “接下来做什么？”">​</a></h3><p>设置断点的时候我们已经读取和写入内存，因此我们只需要添加一些函数用于隐藏 <code>ptrace</code> 调用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t debugger::read_memory(uint64_t address) {</span></span>
<span class="line"><span>    return ptrace(PTRACE_PEEKDATA, m_pid, address, nullptr);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void debugger::write_memory(uint64_t address, uint64_t value) {</span></span>
<span class="line"><span>    ptrace(PTRACE_POKEDATA, m_pid, address, value);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,22)),a("p",null,[s[16]||(s[16]=n("你可能想要添加支持一次读取或者写入多个字节，你可以在每次希望读取另一个字节时通过递增地址来实现。如果你需要的话，你也可以使用  ",-1)),e(p,{href:"http://man7.org/linux/man-pages/man2/process_vm_readv.2.html"},{default:i(()=>[...s[15]||(s[15]=[a("code",null,"process_vm_readv",-1),n(" 和 ",-1),a("code",null,"process_vm_writev",-1)])]),_:1}),s[17]||(s[17]=n(" 或 ",-1)),s[18]||(s[18]=a("code",null,"/proc/<pid>/mem",-1)),s[19]||(s[19]=n(" 代替 ",-1)),s[20]||(s[20]=a("code",null,"ptrace",-1)),s[21]||(s[21]=n("。",-1))]),s[44]||(s[44]=t(`<p>现在我们会给我们的用户界面添加命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if(is_prefix(command, &quot;memory&quot;)) {</span></span>
<span class="line"><span>        std::string addr {args[2], 2}; //assume 0xADDRESS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (is_prefix(args[1], &quot;read&quot;)) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; std::hex &lt;&lt; read_memory(std::stol(addr, 0, 16)) &lt;&lt; std::endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (is_prefix(args[1], &quot;write&quot;)) {</span></span>
<span class="line"><span>            std::string val {args[3], 2}; //assume 0xVAL</span></span>
<span class="line"><span>            write_memory(std::stol(addr, 0, 16), std::stol(val, 0, 16));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="给-continue-execution-打补丁" tabindex="-1">给  <code>continue_execution</code> 打补丁 <a class="header-anchor" href="#给-continue-execution-打补丁" aria-label="Permalink to “给  continue_execution 打补丁”">​</a></h3><p>在我们测试我们的更改之前，我们现在可以实现一个更健全的 <code>continue_execution</code> 版本。由于我们可以获取程序计数器，我们可以检查我们的断点映射来判断我们是否处于一个断点。如果是的话，我们可以停用断点并在继续之前跳过它。</p><p>为了清晰和简洁起见，首先我们要添加一些帮助函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t debugger::get_pc() {</span></span>
<span class="line"><span>    return get_register_value(m_pid, reg::rip);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void debugger::set_pc(uint64_t pc) {</span></span>
<span class="line"><span>    set_register_value(m_pid, reg::rip, pc);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然后我们可以编写函数来跳过断点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_over_breakpoint() {</span></span>
<span class="line"><span>    // - 1 because execution will go past the breakpoint</span></span>
<span class="line"><span>    auto possible_breakpoint_location = get_pc() - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (m_breakpoints.count(possible_breakpoint_location)) {</span></span>
<span class="line"><span>        auto&amp; bp = m_breakpoints[possible_breakpoint_location];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (bp.is_enabled()) {</span></span>
<span class="line"><span>            auto previous_instruction_address = possible_breakpoint_location;</span></span>
<span class="line"><span>            set_pc(previous_instruction_address);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            bp.disable();</span></span>
<span class="line"><span>            ptrace(PTRACE_SINGLESTEP, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>            wait_for_signal();</span></span>
<span class="line"><span>            bp.enable();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>首先我们检查当前程序计算器的值是否设置了一个断点。如果有，首先我们把执行返回到断点之前，停用它，跳过原来的指令，再重新启用断点。</p><p><code>wait_for_signal</code> 封装了我们常用的 <code>waitpid</code> 模式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::wait_for_signal() {</span></span>
<span class="line"><span>    int wait_status;</span></span>
<span class="line"><span>    auto options = 0;</span></span>
<span class="line"><span>    waitpid(m_pid, &amp;wait_status, options);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后我们像下面这样重写 <code>continue_execution</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::continue_execution() {</span></span>
<span class="line"><span>    step_over_breakpoint();</span></span>
<span class="line"><span>    ptrace(PTRACE_CONT, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>    wait_for_signal();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="测试效果" tabindex="-1">测试效果 <a class="header-anchor" href="#测试效果" aria-label="Permalink to “测试效果”">​</a></h3><p>现在我们可以读取和修改寄存器了，我们可以对我们的 hello world 程序做一些有意思的更改。类似第一次测试，再次尝试在 <code>call</code> 指令处设置断点然后从那里继续执行。你可以看到输出了 <code>Hello world</code>。现在是有趣的部分，在输出调用后设一个断点、继续、将 <code>call</code> 参数设置代码的地址写入程序计数器（<code>rip</code>）并继续。由于程序计数器操纵，你应该再次看到输出了 <code>Hello world</code>。为了以防你不确定在哪里设置断点，下面是我上一篇博文中的 <code>objdump</code> 输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0000000000400936 &lt;main&gt;:</span></span>
<span class="line"><span>  400936:	55                   	push   rbp</span></span>
<span class="line"><span>  400937:	48 89 e5             	mov    rbp,rsp</span></span>
<span class="line"><span>  40093a:	be 35 0a 40 00       	mov    esi,0x400a35</span></span>
<span class="line"><span>  40093f:	bf 60 10 60 00       	mov    edi,0x601060</span></span>
<span class="line"><span>  400944:	e8 d7 fe ff ff       	call   400820 &lt;_ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc@plt&gt;</span></span>
<span class="line"><span>  400949:	b8 00 00 00 00       	mov    eax,0x0</span></span>
<span class="line"><span>  40094e:	5d                   	pop    rbp</span></span>
<span class="line"><span>  40094f:	c3                   	ret</span></span></code></pre></div><p>你要将程序计数器移回 <code>0x40093a</code> 以便正确设置 <code>esi</code> 和 <code>edi</code> 寄存器。</p><p>在下一篇博客中，我们会第一次接触到 DWARF 信息并给我们的调试器添加一系列逐步调试的功能。之后，我们会有一个功能工具，它能逐步执行代码、在想要的地方设置断点、修改数据以及其它。一如以往，如果你有任何问题请留下你的评论！</p>`,18)),a("p",null,[s[23]||(s[23]=n("你可以在",-1)),e(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_registers"},{default:i(()=>[...s[22]||(s[22]=[n("这里",-1)])]),_:1}),s[24]||(s[24]=n("找到这篇博文的代码。",-1))]),s[45]||(s[45]=a("hr",null,null,-1)),a("p",null,[s[26]||(s[26]=n("via: ",-1)),e(p,{href:"https://blog.tartanllama.xyz/c++/2017/03/31/writing-a-linux-debugger-registers/"},{default:i(()=>[...s[25]||(s[25]=[n("https://blog.tartanllama.xyz/c++/2017/03/31/writing-a-linux-debugger-registers/",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://www.twitter.com/TartanLlama"},{default:i(()=>[...s[27]||(s[27]=[n("Simon Brand",-1)])]),_:1}),s[31]||(s[31]=n(" 译者：",-1)),e(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...s[28]||(s[28]=[n("ictlyh",-1)])]),_:1}),s[32]||(s[32]=n(" 校对：",-1)),e(p,{href:"https://github.com/jasminepeng"},{default:i(()=>[...s[29]||(s[29]=[n("jasminepeng",-1)])]),_:1})]),a("p",null,[s[35]||(s[35]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[33]||(s[33]=[n("LCTT",-1)])]),_:1}),s[36]||(s[36]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[34]||(s[34]=[n("Linux中国",-1)])]),_:1}),s[37]||(s[37]=n(" 荣誉推出",-1))])])}const v=l(g,[["render",u]]);export{x as __pageData,v as default};
