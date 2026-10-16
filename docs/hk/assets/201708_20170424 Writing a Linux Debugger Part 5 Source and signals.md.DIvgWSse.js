import{_ as e,a0 as t,w as o,s as r,I as a,x as s,a1 as l,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"開發一個 Linux 調試器（四）：源碼和信號 | LCTT x X-CMD","titleTemplate":false,"description":"開發一個 Linux 調試器（四）：源碼和信號 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"開發一個 Linux 調試器（四）：源碼和信號 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"開發一個 Linux 調試器（四）：源碼和信號 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170424 Writing a Linux Debugger Part 5 Source and signals","title":"開發一個 Linux 調試器（四）：源碼和信號","tag":"201708","desc":""},"relativePath":"201708/20170424 Writing a Linux Debugger Part 5 Source and signals.md","filePath":"[post].md"}'),c={name:"201708/20170424 Writing a Linux Debugger Part 5 Source and signals.md"};function u(g,n,f,_,b,h){const p=t("Link");return o(),r("div",null,[n[33]||(n[33]=a("h1",{id:"開發一個-linux-調試器-四-源碼和信號",tabindex:"-1"},[s("開發一個 Linux 調試器（四）：源碼和信號 "),a("a",{class:"header-anchor",href:"#開發一個-linux-調試器-四-源碼和信號","aria-label":"Permalink to “開發一個 Linux 調試器（四）：源碼和信號”"},"​")],-1)),n[34]||(n[34]=a("p",null,"在上一部分我們學習了關於 DWARF 的信息，以及它如何被用於讀取變量和將被執行的機器碼與我們的高級語言的源碼聯繫起來。在這一部分，我們將進入實踐，實現一些我們調試器後面會使用的 DWARF 原語。我們也會利用這個機會，使我們的調試器可以在命中一個斷點時打印出當前的源碼上下文。",-1)),n[35]||(n[35]=a("h3",{id:"系列文章索引",tabindex:"-1"},[s("系列文章索引 "),a("a",{class:"header-anchor",href:"#系列文章索引","aria-label":"Permalink to “系列文章索引”"},"​")],-1)),n[36]||(n[36]=a("p",null,"隨着後面文章的發佈，這些鏈接會逐漸生效。",-1)),a("ol",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...n[0]||(n[0]=[s("準備環境",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8645-1.html"},{default:i(()=>[...n[1]||(n[1]=[s("斷點",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8663-1.html"},{default:i(()=>[...n[2]||(n[2]=[s("寄存器和內存",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8719-1.html"},{default:i(()=>[...n[3]||(n[3]=[s("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/"},{default:i(()=>[...n[4]||(n[4]=[s("源碼和信號",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...n[5]||(n[5]=[s("源碼級逐步執行",-1)])]),_:1})]),n[6]||(n[6]=a("li",null,"源碼級斷點",-1)),n[7]||(n[7]=a("li",null,"調用棧展開",-1)),n[8]||(n[8]=a("li",null,"讀取變量",-1)),n[9]||(n[9]=a("li",null,"下一步",-1))]),n[37]||(n[37]=a("h3",{id:"設置我們的-dwarf-解析器",tabindex:"-1"},[s("設置我們的 DWARF 解析器 "),a("a",{class:"header-anchor",href:"#設置我們的-dwarf-解析器","aria-label":"Permalink to “設置我們的 DWARF 解析器”"},"​")],-1)),a("p",null,[n[12]||(n[12]=s("正如我在這系列文章開始時備註的，我們會使用 ",-1)),l(p,{href:"https://github.com/TartanLlama/libelfin/tree/fbreg"},{default:i(()=>[...n[10]||(n[10]=[s("libelfin",-1)])]),_:1}),n[13]||(n[13]=s(" 來處理我們的 DWARF 信息。希望你已經在",-1)),l(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...n[11]||(n[11]=[s("第一部分",-1)])]),_:1}),n[14]||(n[14]=s("設置好了這些，如果沒有的話，現在做吧，確保你使用我倉庫的 ",-1)),n[15]||(n[15]=a("code",null,"fbreg",-1)),n[16]||(n[16]=s(" 分支。",-1))]),n[38]||(n[38]=d(`<p>一旦你構建好了 <code>libelfin</code>，就可以把它添加到我們的調試器。第一步是解析我們的 ELF 可執行程序並從中提取 DWARF 信息。使用 <code>libelfin</code> 可以輕易實現，只需要對<code>調試器</code>作以下更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>class debugger {</span></span>
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
<span class="line"><span>};</span></span></code></pre></div><p>我們使用了 <code>open</code> 而不是 <code>std::ifstream</code>，因為 elf 加載器需要傳遞一個 UNIX 文件描述符給  <code>mmap</code>，從而可以將文件映射到內存而不是每次讀取一部分。</p><h3 id="調試信息原語" tabindex="-1">調試信息原語 <a class="header-anchor" href="#調試信息原語" aria-label="Permalink to “調試信息原語”">​</a></h3><p>下一步我們可以實現從程序計數器的值中提取行條目（line entry）以及函數 DWARF 信息條目（function DIE）的函數。我們從 <code>get_function_from_pc</code> 開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dwarf::die debugger::get_function_from_pc(uint64_t pc) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這裏我採用了樸素的方法，迭代遍歷編譯單元直到找到一個包含程序計數器的，然後迭代遍歷它的子節點直到我們找到相關函數（<code>DW_TAG_subprogram</code>）。正如我在上一篇中提到的，如果你想要的話你可以處理類似的成員函數或者內聯等情況。</p><p>接下來是 <code>get_line_entry_from_pc</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dwarf::line_table::iterator debugger::get_line_entry_from_pc(uint64_t pc) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>同樣，我們可以簡單地找到正確的編譯單元，然後查詢行表獲取相關的條目。</p><h3 id="打印源碼" tabindex="-1">打印源碼 <a class="header-anchor" href="#打印源碼" aria-label="Permalink to “打印源碼”">​</a></h3><p>當我們命中一個斷點或者逐步執行我們的代碼時，我們會想知道處於源碼中的什麼位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::print_source(const std::string&amp; file_name, unsigned line, unsigned n_lines_context) {</span></span>
<span class="line"><span>    std::ifstream file {file_name};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //獲得一個所需行附近的窗口</span></span>
<span class="line"><span>    auto start_line = line &lt;= n_lines_context ? 1 : line - n_lines_context;</span></span>
<span class="line"><span>    auto end_line = line + n_lines_context + (line &lt; n_lines_context ? n_lines_context - line : 0) + 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    char c{};</span></span>
<span class="line"><span>    auto current_line = 1u;</span></span>
<span class="line"><span>    //跳過 start_line 之前的行</span></span>
<span class="line"><span>    while (current_line != start_line &amp;&amp; file.get(c)) {</span></span>
<span class="line"><span>        if (c == &#39;\\n&#39;) {</span></span>
<span class="line"><span>            ++current_line;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果我們在當前行則輸出光標</span></span>
<span class="line"><span>    std::cout &lt;&lt; (current_line==line ? &quot;&gt; &quot; : &quot;  &quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //輸出行直到 end_line</span></span>
<span class="line"><span>    while (current_line &lt;= end_line &amp;&amp; file.get(c)) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; c;</span></span>
<span class="line"><span>        if (c == &#39;\\n&#39;) {</span></span>
<span class="line"><span>            ++current_line;</span></span>
<span class="line"><span>            //如果我們在當前行則輸出光標</span></span>
<span class="line"><span>            std::cout &lt;&lt; (current_line==line ? &quot;&gt; &quot; : &quot;  &quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //輸出換行確保恰當地清空了流</span></span>
<span class="line"><span>    std::cout &lt;&lt; std::endl;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在我們可以打印出源碼了，我們需要將這些通過鈎子添加到我們的調試器。實現這個的一個好地方是當調試器從一個斷點或者（最終）逐步執行得到一個信號時。到了這裏，我們可能想要給我們的調試器添加一些更好的信號處理。</p><h3 id="更好的信號處理" tabindex="-1">更好的信號處理 <a class="header-anchor" href="#更好的信號處理" aria-label="Permalink to “更好的信號處理”">​</a></h3><p>我們希望能夠得知什麼信號被髮送給了進程，同樣我們也想知道它是如何產生的。例如，我們希望能夠得知是否由於命中了一個斷點從而獲得一個 <code>SIGTRAP</code>，還是由於逐步執行完成、或者是產生了一個新線程等等導致的。幸運的是，我們可以再一次使用 <code>ptrace</code>。可以給 <code>ptrace</code> 的一個命令是 <code>PTRACE_GETSIGINFO</code>，它會給你被髮送給進程的最後一個信號的信息。我們類似這樣使用它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>siginfo_t debugger::get_signal_info() {</span></span>
<span class="line"><span>    siginfo_t info;</span></span>
<span class="line"><span>    ptrace(PTRACE_GETSIGINFO, m_pid, nullptr, &amp;info);</span></span>
<span class="line"><span>    return info;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這會給我們一個 <code>siginfo_t</code> 對象，它能提供以下信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>siginfo_t {</span></span>
<span class="line"><span>    int      si_signo;     /* 信號編號 */</span></span>
<span class="line"><span>    int      si_errno;     /* errno 值 */</span></span>
<span class="line"><span>    int      si_code;      /* 信號代碼 */</span></span>
<span class="line"><span>    int      si_trapno;    /* 導致生成硬件信號的陷阱編號</span></span>
<span class="line"><span>                              （大部分架構中都沒有使用） */</span></span>
<span class="line"><span>    pid_t    si_pid;       /* 發送信號的進程 ID */</span></span>
<span class="line"><span>    uid_t    si_uid;       /* 發送信號進程的用户 ID */</span></span>
<span class="line"><span>    int      si_status;    /* 退出值或信號 */</span></span>
<span class="line"><span>    clock_t  si_utime;     /* 消耗的用户時間 */</span></span>
<span class="line"><span>    clock_t  si_stime;     /* 消耗的系統時間 */</span></span>
<span class="line"><span>    sigval_t si_value;     /* 信號值 */</span></span>
<span class="line"><span>    int      si_int;       /* POSIX.1b 信號 */</span></span>
<span class="line"><span>    void    *si_ptr;       /* POSIX.1b 信號 */</span></span>
<span class="line"><span>    int      si_overrun;   /* 計時器 overrun 計數;</span></span>
<span class="line"><span>                              POSIX.1b 計時器 */</span></span>
<span class="line"><span>    int      si_timerid;   /* 計時器 ID; POSIX.1b 計時器 */</span></span>
<span class="line"><span>    void    *si_addr;      /* 導致錯誤的內存地址 */</span></span>
<span class="line"><span>    long     si_band;      /* Band event (在 glibc 2.3.2 和之前版本中是 int 類型) */</span></span>
<span class="line"><span>    int      si_fd;        /* 文件描述符 */</span></span>
<span class="line"><span>    short    si_addr_lsb;  /* 地址的最不重要位</span></span>
<span class="line"><span>                              (自 Linux 2.6.32) */</span></span>
<span class="line"><span>    void    *si_lower;     /* 出現地址違規的下限 (自 Linux 3.19) */</span></span>
<span class="line"><span>    void    *si_upper;     /* 出現地址違規的上限 (自 Linux 3.19) */</span></span>
<span class="line"><span>    int      si_pkey;      /* PTE 上導致錯誤的保護鍵 (自 Linux 4.6) */</span></span>
<span class="line"><span>    void    *si_call_addr; /* 系統調用指令的地址</span></span>
<span class="line"><span>                              (自 Linux 3.5) */</span></span>
<span class="line"><span>    int      si_syscall;   /* 系統調用嘗試次數</span></span>
<span class="line"><span>                              (自 Linux 3.5) */</span></span>
<span class="line"><span>    unsigned int si_arch;  /* 嘗試系統調用的架構</span></span>
<span class="line"><span>                              (自 Linux 3.5) */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我只需要使用 <code>si_signo</code> 就可以找到被髮送的信號，使用 <code>si_code</code> 來獲取更多關於信號的信息。放置這些代碼的最好位置是我們的 <code>wait_for_signal</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::wait_for_signal() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>現在再來處理 <code>SIGTRAP</code>。知道當命中一個斷點時會發送 <code>SI_KERNEL</code> 或 <code>TRAP_BRKPT</code>，而逐步執行結束時會發送 <code>TRAP_TRACE</code> 就足夠了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::handle_sigtrap(siginfo_t info) {</span></span>
<span class="line"><span>    switch (info.si_code) {</span></span>
<span class="line"><span>    //如果命中了一個斷點其中的一個會被設置</span></span>
<span class="line"><span>    case SI_KERNEL:</span></span>
<span class="line"><span>    case TRAP_BRKPT:</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        set_pc(get_pc()-1); //將程序計數器的值設置為它應該指向的地方</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Hit breakpoint at address 0x&quot; &lt;&lt; std::hex &lt;&lt; get_pc() &lt;&lt; std::endl;</span></span>
<span class="line"><span>        auto line_entry = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span>        print_source(line_entry-&gt;file-&gt;path, line_entry-&gt;line);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //如果信號是由逐步執行發送的，這會被設置</span></span>
<span class="line"><span>    case TRAP_TRACE:</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Unknown SIGTRAP code &quot; &lt;&lt; info.si_code &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏有一大堆不同風格的信號你可以處理。查看 <code>man sigaction</code> 獲取更多信息。</p><p>由於當我們收到 <code>SIGTRAP</code> 信號時我們已經修正了程序計數器的值，我們可以從 <code>step_over_breakpoint</code> 中移除這些代碼，現在它看起來類似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_over_breakpoint() {</span></span>
<span class="line"><span>    if (m_breakpoints.count(get_pc())) {</span></span>
<span class="line"><span>        auto&amp; bp = m_breakpoints[get_pc()];</span></span>
<span class="line"><span>        if (bp.is_enabled()) {</span></span>
<span class="line"><span>            bp.disable();</span></span>
<span class="line"><span>            ptrace(PTRACE_SINGLESTEP, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>            wait_for_signal();</span></span>
<span class="line"><span>            bp.enable();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to “測試”">​</a></h3><p>現在你應該可以在某個地址設置斷點，運行程序然後看到打印出了源碼，而且正在被執行的行被光標標記了出來。</p>`,28)),a("p",null,[n[18]||(n[18]=s("後面我們會添加設置源碼級別斷點的功能。同時，你可以從",-1)),l(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_source"},{default:i(()=>[...n[17]||(n[17]=[s("這裏",-1)])]),_:1}),n[19]||(n[19]=s("獲取該博文的代碼。",-1))]),n[39]||(n[39]=a("hr",null,null,-1)),a("p",null,[n[21]||(n[21]=s("via: ",-1)),l(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/"},{default:i(()=>[...n[20]||(n[20]=[s("https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/",-1)])]),_:1})]),a("p",null,[n[25]||(n[25]=s("作者：",-1)),l(p,{href:"https://www.twitter.com/TartanLlama"},{default:i(()=>[...n[22]||(n[22]=[s("Simon Brand",-1)])]),_:1}),n[26]||(n[26]=s(" 譯者：",-1)),l(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...n[23]||(n[23]=[s("ictlyh",-1)])]),_:1}),n[27]||(n[27]=s(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[24]||(n[24]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[30]||(n[30]=s("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[28]||(n[28]=[s("LCTT",-1)])]),_:1}),n[31]||(n[31]=s(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:i(()=>[...n[29]||(n[29]=[s("Linux中國",-1)])]),_:1}),n[32]||(n[32]=s(" 榮譽推出",-1))])])}const T=e(c,[["render",u]]);export{x as __pageData,T as default};
