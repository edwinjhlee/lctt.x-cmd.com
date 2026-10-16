import{_ as e,a0 as t,w as o,s as r,I as a,x as s,a1 as l,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"开发一个 Linux 调试器（四）：源码和信号 | LCTT x X-CMD","titleTemplate":false,"description":"开发一个 Linux 调试器（四）：源码和信号 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"开发一个 Linux 调试器（四）：源码和信号 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"开发一个 Linux 调试器（四）：源码和信号 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170424 Writing a Linux Debugger Part 5 Source and signals","title":"开发一个 Linux 调试器（四）：源码和信号","tag":"201708","desc":""},"relativePath":"201708/20170424 Writing a Linux Debugger Part 5 Source and signals.md","filePath":"[post].md"}'),c={name:"201708/20170424 Writing a Linux Debugger Part 5 Source and signals.md"};function u(g,n,f,_,b,h){const p=t("Link");return o(),r("div",null,[n[33]||(n[33]=a("h1",{id:"开发一个-linux-调试器-四-源码和信号",tabindex:"-1"},[s("开发一个 Linux 调试器（四）：源码和信号 "),a("a",{class:"header-anchor",href:"#开发一个-linux-调试器-四-源码和信号","aria-label":"Permalink to “开发一个 Linux 调试器（四）：源码和信号”"},"​")],-1)),n[34]||(n[34]=a("p",null,"在上一部分我们学习了关于 DWARF 的信息，以及它如何被用于读取变量和将被执行的机器码与我们的高级语言的源码联系起来。在这一部分，我们将进入实践，实现一些我们调试器后面会使用的 DWARF 原语。我们也会利用这个机会，使我们的调试器可以在命中一个断点时打印出当前的源码上下文。",-1)),n[35]||(n[35]=a("h3",{id:"系列文章索引",tabindex:"-1"},[s("系列文章索引 "),a("a",{class:"header-anchor",href:"#系列文章索引","aria-label":"Permalink to “系列文章索引”"},"​")],-1)),n[36]||(n[36]=a("p",null,"随着后面文章的发布，这些链接会逐渐生效。",-1)),a("ol",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...n[0]||(n[0]=[s("准备环境",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8645-1.html"},{default:i(()=>[...n[1]||(n[1]=[s("断点",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8663-1.html"},{default:i(()=>[...n[2]||(n[2]=[s("寄存器和内存",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8719-1.html"},{default:i(()=>[...n[3]||(n[3]=[s("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/"},{default:i(()=>[...n[4]||(n[4]=[s("源码和信号",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...n[5]||(n[5]=[s("源码级逐步执行",-1)])]),_:1})]),n[6]||(n[6]=a("li",null,"源码级断点",-1)),n[7]||(n[7]=a("li",null,"调用栈展开",-1)),n[8]||(n[8]=a("li",null,"读取变量",-1)),n[9]||(n[9]=a("li",null,"下一步",-1))]),n[37]||(n[37]=a("h3",{id:"设置我们的-dwarf-解析器",tabindex:"-1"},[s("设置我们的 DWARF 解析器 "),a("a",{class:"header-anchor",href:"#设置我们的-dwarf-解析器","aria-label":"Permalink to “设置我们的 DWARF 解析器”"},"​")],-1)),a("p",null,[n[12]||(n[12]=s("正如我在这系列文章开始时备注的，我们会使用 ",-1)),l(p,{href:"https://github.com/TartanLlama/libelfin/tree/fbreg"},{default:i(()=>[...n[10]||(n[10]=[s("libelfin",-1)])]),_:1}),n[13]||(n[13]=s(" 来处理我们的 DWARF 信息。希望你已经在",-1)),l(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...n[11]||(n[11]=[s("第一部分",-1)])]),_:1}),n[14]||(n[14]=s("设置好了这些，如果没有的话，现在做吧，确保你使用我仓库的 ",-1)),n[15]||(n[15]=a("code",null,"fbreg",-1)),n[16]||(n[16]=s(" 分支。",-1))]),n[38]||(n[38]=d(`<p>一旦你构建好了 <code>libelfin</code>，就可以把它添加到我们的调试器。第一步是解析我们的 ELF 可执行程序并从中提取 DWARF 信息。使用 <code>libelfin</code> 可以轻易实现，只需要对<code>调试器</code>作以下更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class debugger {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    debugger (std::string prog_name, pid_t pid)</span></span>
<span class="line"><span>         : m_prog_name{std::move(prog_name)}, m_pid{pid} {</span></span>
<span class="line"><span>        auto fd = open(m_prog_name.c_str(), O_RDONLY);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        m_elf = elf::elf{elf::create_mmap_loader(fd)};</span></span>
<span class="line"><span>        m_dwarf = dwarf::dwarf{dwarf::elf::create_loader(m_elf)};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>    dwarf::dwarf m_dwarf;</span></span>
<span class="line"><span>    elf::elf m_elf;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>我们使用了 <code>open</code> 而不是 <code>std::ifstream</code>，因为 elf 加载器需要传递一个 UNIX 文件描述符给  <code>mmap</code>，从而可以将文件映射到内存而不是每次读取一部分。</p><h3 id="调试信息原语" tabindex="-1">调试信息原语 <a class="header-anchor" href="#调试信息原语" aria-label="Permalink to “调试信息原语”">​</a></h3><p>下一步我们可以实现从程序计数器的值中提取行条目（line entry）以及函数 DWARF 信息条目（function DIE）的函数。我们从 <code>get_function_from_pc</code> 开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dwarf::die debugger::get_function_from_pc(uint64_t pc) {</span></span>
<span class="line"><span>    for (auto &amp;cu : m_dwarf.compilation_units()) {</span></span>
<span class="line"><span>        if (die_pc_range(cu.root()).contains(pc)) {</span></span>
<span class="line"><span>            for (const auto&amp; die : cu.root()) {</span></span>
<span class="line"><span>                if (die.tag == dwarf::DW_TAG::subprogram) {</span></span>
<span class="line"><span>                    if (die_pc_range(die).contains(pc)) {</span></span>
<span class="line"><span>                        return die;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    throw std::out_of_range{&quot;Cannot find function&quot;};</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里我采用了朴素的方法，迭代遍历编译单元直到找到一个包含程序计数器的，然后迭代遍历它的子节点直到我们找到相关函数（<code>DW_TAG_subprogram</code>）。正如我在上一篇中提到的，如果你想要的话你可以处理类似的成员函数或者内联等情况。</p><p>接下来是 <code>get_line_entry_from_pc</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dwarf::line_table::iterator debugger::get_line_entry_from_pc(uint64_t pc) {</span></span>
<span class="line"><span>    for (auto &amp;cu : m_dwarf.compilation_units()) {</span></span>
<span class="line"><span>        if (die_pc_range(cu.root()).contains(pc)) {</span></span>
<span class="line"><span>            auto &amp;lt = cu.get_line_table();</span></span>
<span class="line"><span>            auto it = lt.find_address(pc);</span></span>
<span class="line"><span>            if (it == lt.end()) {</span></span>
<span class="line"><span>                throw std::out_of_range{&quot;Cannot find line entry&quot;};</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            else {</span></span>
<span class="line"><span>                return it;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    throw std::out_of_range{&quot;Cannot find line entry&quot;};</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>同样，我们可以简单地找到正确的编译单元，然后查询行表获取相关的条目。</p><h3 id="打印源码" tabindex="-1">打印源码 <a class="header-anchor" href="#打印源码" aria-label="Permalink to “打印源码”">​</a></h3><p>当我们命中一个断点或者逐步执行我们的代码时，我们会想知道处于源码中的什么位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::print_source(const std::string&amp; file_name, unsigned line, unsigned n_lines_context) {</span></span>
<span class="line"><span>    std::ifstream file {file_name};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //获得一个所需行附近的窗口</span></span>
<span class="line"><span>    auto start_line = line &lt;= n_lines_context ? 1 : line - n_lines_context;</span></span>
<span class="line"><span>    auto end_line = line + n_lines_context + (line &lt; n_lines_context ? n_lines_context - line : 0) + 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char c{};</span></span>
<span class="line"><span>    auto current_line = 1u;</span></span>
<span class="line"><span>    //跳过 start_line 之前的行</span></span>
<span class="line"><span>    while (current_line != start_line &amp;&amp; file.get(c)) {</span></span>
<span class="line"><span>        if (c == &#39;\\n&#39;) {</span></span>
<span class="line"><span>            ++current_line;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果我们在当前行则输出光标</span></span>
<span class="line"><span>    std::cout &lt;&lt; (current_line==line ? &quot;&gt; &quot; : &quot;  &quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //输出行直到 end_line</span></span>
<span class="line"><span>    while (current_line &lt;= end_line &amp;&amp; file.get(c)) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; c;</span></span>
<span class="line"><span>        if (c == &#39;\\n&#39;) {</span></span>
<span class="line"><span>            ++current_line;</span></span>
<span class="line"><span>            //如果我们在当前行则输出光标</span></span>
<span class="line"><span>            std::cout &lt;&lt; (current_line==line ? &quot;&gt; &quot; : &quot;  &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //输出换行确保恰当地清空了流</span></span>
<span class="line"><span>    std::cout &lt;&lt; std::endl;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在我们可以打印出源码了，我们需要将这些通过钩子添加到我们的调试器。实现这个的一个好地方是当调试器从一个断点或者（最终）逐步执行得到一个信号时。到了这里，我们可能想要给我们的调试器添加一些更好的信号处理。</p><h3 id="更好的信号处理" tabindex="-1">更好的信号处理 <a class="header-anchor" href="#更好的信号处理" aria-label="Permalink to “更好的信号处理”">​</a></h3><p>我们希望能够得知什么信号被发送给了进程，同样我们也想知道它是如何产生的。例如，我们希望能够得知是否由于命中了一个断点从而获得一个 <code>SIGTRAP</code>，还是由于逐步执行完成、或者是产生了一个新线程等等导致的。幸运的是，我们可以再一次使用 <code>ptrace</code>。可以给 <code>ptrace</code> 的一个命令是 <code>PTRACE_GETSIGINFO</code>，它会给你被发送给进程的最后一个信号的信息。我们类似这样使用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>siginfo_t debugger::get_signal_info() {</span></span>
<span class="line"><span>    siginfo_t info;</span></span>
<span class="line"><span>    ptrace(PTRACE_GETSIGINFO, m_pid, nullptr, &amp;info);</span></span>
<span class="line"><span>    return info;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这会给我们一个 <code>siginfo_t</code> 对象，它能提供以下信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>siginfo_t {</span></span>
<span class="line"><span>    int      si_signo;     /* 信号编号 */</span></span>
<span class="line"><span>    int      si_errno;     /* errno 值 */</span></span>
<span class="line"><span>    int      si_code;      /* 信号代码 */</span></span>
<span class="line"><span>    int      si_trapno;    /* 导致生成硬件信号的陷阱编号</span></span>
<span class="line"><span>                              （大部分架构中都没有使用） */</span></span>
<span class="line"><span>    pid_t    si_pid;       /* 发送信号的进程 ID */</span></span>
<span class="line"><span>    uid_t    si_uid;       /* 发送信号进程的用户 ID */</span></span>
<span class="line"><span>    int      si_status;    /* 退出值或信号 */</span></span>
<span class="line"><span>    clock_t  si_utime;     /* 消耗的用户时间 */</span></span>
<span class="line"><span>    clock_t  si_stime;     /* 消耗的系统时间 */</span></span>
<span class="line"><span>    sigval_t si_value;     /* 信号值 */</span></span>
<span class="line"><span>    int      si_int;       /* POSIX.1b 信号 */</span></span>
<span class="line"><span>    void    *si_ptr;       /* POSIX.1b 信号 */</span></span>
<span class="line"><span>    int      si_overrun;   /* 计时器 overrun 计数;</span></span>
<span class="line"><span>                              POSIX.1b 计时器 */</span></span>
<span class="line"><span>    int      si_timerid;   /* 计时器 ID; POSIX.1b 计时器 */</span></span>
<span class="line"><span>    void    *si_addr;      /* 导致错误的内存地址 */</span></span>
<span class="line"><span>    long     si_band;      /* Band event (在 glibc 2.3.2 和之前版本中是 int 类型) */</span></span>
<span class="line"><span>    int      si_fd;        /* 文件描述符 */</span></span>
<span class="line"><span>    short    si_addr_lsb;  /* 地址的最不重要位</span></span>
<span class="line"><span>                              (自 Linux 2.6.32) */</span></span>
<span class="line"><span>    void    *si_lower;     /* 出现地址违规的下限 (自 Linux 3.19) */</span></span>
<span class="line"><span>    void    *si_upper;     /* 出现地址违规的上限 (自 Linux 3.19) */</span></span>
<span class="line"><span>    int      si_pkey;      /* PTE 上导致错误的保护键 (自 Linux 4.6) */</span></span>
<span class="line"><span>    void    *si_call_addr; /* 系统调用指令的地址</span></span>
<span class="line"><span>                              (自 Linux 3.5) */</span></span>
<span class="line"><span>    int      si_syscall;   /* 系统调用尝试次数</span></span>
<span class="line"><span>                              (自 Linux 3.5) */</span></span>
<span class="line"><span>    unsigned int si_arch;  /* 尝试系统调用的架构</span></span>
<span class="line"><span>                              (自 Linux 3.5) */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我只需要使用 <code>si_signo</code> 就可以找到被发送的信号，使用 <code>si_code</code> 来获取更多关于信号的信息。放置这些代码的最好位置是我们的 <code>wait_for_signal</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::wait_for_signal() {</span></span>
<span class="line"><span>    int wait_status;</span></span>
<span class="line"><span>    auto options = 0;</span></span>
<span class="line"><span>    waitpid(m_pid, &amp;wait_status, options);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto siginfo = get_signal_info();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    switch (siginfo.si_signo) {</span></span>
<span class="line"><span>    case SIGTRAP:</span></span>
<span class="line"><span>        handle_sigtrap(siginfo);</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    case SIGSEGV:</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Yay, segfault. Reason: &quot; &lt;&lt; siginfo.si_code &lt;&lt; std::endl;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Got signal &quot; &lt;&lt; strsignal(siginfo.si_signo) &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在再来处理 <code>SIGTRAP</code>。知道当命中一个断点时会发送 <code>SI_KERNEL</code> 或 <code>TRAP_BRKPT</code>，而逐步执行结束时会发送 <code>TRAP_TRACE</code> 就足够了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::handle_sigtrap(siginfo_t info) {</span></span>
<span class="line"><span>    switch (info.si_code) {</span></span>
<span class="line"><span>    //如果命中了一个断点其中的一个会被设置</span></span>
<span class="line"><span>    case SI_KERNEL:</span></span>
<span class="line"><span>    case TRAP_BRKPT:</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        set_pc(get_pc()-1); //将程序计数器的值设置为它应该指向的地方</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Hit breakpoint at address 0x&quot; &lt;&lt; std::hex &lt;&lt; get_pc() &lt;&lt; std::endl;</span></span>
<span class="line"><span>        auto line_entry = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span>        print_source(line_entry-&gt;file-&gt;path, line_entry-&gt;line);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //如果信号是由逐步执行发送的，这会被设置</span></span>
<span class="line"><span>    case TRAP_TRACE:</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Unknown SIGTRAP code &quot; &lt;&lt; info.si_code &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里有一大堆不同风格的信号你可以处理。查看 <code>man sigaction</code> 获取更多信息。</p><p>由于当我们收到 <code>SIGTRAP</code> 信号时我们已经修正了程序计数器的值，我们可以从 <code>step_over_breakpoint</code> 中移除这些代码，现在它看起来类似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_over_breakpoint() {</span></span>
<span class="line"><span>    if (m_breakpoints.count(get_pc())) {</span></span>
<span class="line"><span>        auto&amp; bp = m_breakpoints[get_pc()];</span></span>
<span class="line"><span>        if (bp.is_enabled()) {</span></span>
<span class="line"><span>            bp.disable();</span></span>
<span class="line"><span>            ptrace(PTRACE_SINGLESTEP, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>            wait_for_signal();</span></span>
<span class="line"><span>            bp.enable();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h3><p>现在你应该可以在某个地址设置断点，运行程序然后看到打印出了源码，而且正在被执行的行被光标标记了出来。</p>`,28)),a("p",null,[n[18]||(n[18]=s("后面我们会添加设置源码级别断点的功能。同时，你可以从",-1)),l(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_source"},{default:i(()=>[...n[17]||(n[17]=[s("这里",-1)])]),_:1}),n[19]||(n[19]=s("获取该博文的代码。",-1))]),n[39]||(n[39]=a("hr",null,null,-1)),a("p",null,[n[21]||(n[21]=s("via: ",-1)),l(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/"},{default:i(()=>[...n[20]||(n[20]=[s("https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/",-1)])]),_:1})]),a("p",null,[n[25]||(n[25]=s("作者：",-1)),l(p,{href:"https://www.twitter.com/TartanLlama"},{default:i(()=>[...n[22]||(n[22]=[s("Simon Brand",-1)])]),_:1}),n[26]||(n[26]=s(" 译者：",-1)),l(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...n[23]||(n[23]=[s("ictlyh",-1)])]),_:1}),n[27]||(n[27]=s(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[24]||(n[24]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[30]||(n[30]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[28]||(n[28]=[s("LCTT",-1)])]),_:1}),n[31]||(n[31]=s(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...n[29]||(n[29]=[s("Linux中国",-1)])]),_:1}),n[32]||(n[32]=s(" 荣誉推出",-1))])])}const T=e(c,[["render",u]]);export{x as __pageData,T as default};
