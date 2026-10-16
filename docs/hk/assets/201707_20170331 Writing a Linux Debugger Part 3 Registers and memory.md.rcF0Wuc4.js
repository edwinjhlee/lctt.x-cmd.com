import{_ as l,a0 as r,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"開發一個 Linux 調試器（三）：寄存器和內存 | LCTT x X-CMD","titleTemplate":false,"description":"開發一個 Linux 調試器（三）：寄存器和內存 | LCTT (201707) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"開發一個 Linux 調試器（三）：寄存器和內存 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"開發一個 Linux 調試器（三）：寄存器和內存 | LCTT (201707) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201707/20170331 Writing a Linux Debugger Part 3 Registers and memory","title":"開發一個 Linux 調試器（三）：寄存器和內存","tag":"201707","desc":""},"relativePath":"201707/20170331 Writing a Linux Debugger Part 3 Registers and memory.md","filePath":"[post].md"}'),g={name:"201707/20170331 Writing a Linux Debugger Part 3 Registers and memory.md"};function u(c,s,b,_,h,m){const p=r("Link");return o(),d("div",null,[s[38]||(s[38]=a("h1",{id:"開發一個-linux-調試器-三-寄存器和內存",tabindex:"-1"},[n("開發一個 Linux 調試器（三）：寄存器和內存 "),a("a",{class:"header-anchor",href:"#開發一個-linux-調試器-三-寄存器和內存","aria-label":"Permalink to “開發一個 Linux 調試器（三）：寄存器和內存”"},"​")],-1)),s[39]||(s[39]=a("p",null,"上一篇博文中我們給調試器添加了一個簡單的地址斷點。這次，我們將添加讀寫寄存器和內存的功能，這將使我們能夠使用我們的程序計數器、觀察狀態和改變程序的行為。",-1)),s[40]||(s[40]=a("h3",{id:"系列文章索引",tabindex:"-1"},[n("系列文章索引 "),a("a",{class:"header-anchor",href:"#系列文章索引","aria-label":"Permalink to “系列文章索引”"},"​")],-1)),s[41]||(s[41]=a("p",null,"隨着後面文章的發佈，這些鏈接會逐漸生效。",-1)),a("ol",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("準備環境",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8645-1.html"},{default:i(()=>[...s[1]||(s[1]=[n("斷點",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/03/31/writing-a-linux-debugger-registers/"},{default:i(()=>[...s[2]||(s[2]=[n("寄存器和內存",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/05/writing-a-linux-debugger-elf-dwarf/"},{default:i(()=>[...s[3]||(s[3]=[n("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/04/24/writing-a-linux-debugger-source-signal/"},{default:i(()=>[...s[4]||(s[4]=[n("源碼和信號",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...s[5]||(s[5]=[n("源碼級逐步執行",-1)])]),_:1})]),s[6]||(s[6]=a("li",null,"源碼級斷點",-1)),s[7]||(s[7]=a("li",null,"調用棧展開",-1)),s[8]||(s[8]=a("li",null,"讀取變量",-1)),s[9]||(s[9]=a("li",null,"下一步",-1))]),s[42]||(s[42]=t(`<h3 id="註冊我們的寄存器" tabindex="-1">註冊我們的寄存器 <a class="header-anchor" href="#註冊我們的寄存器" aria-label="Permalink to “註冊我們的寄存器”">​</a></h3><p>在我們真正讀取任何寄存器之前，我們需要告訴調試器一些關於我們的目標平台的信息，這裏是 x86_64 平台。除了多組通用和專用目的寄存器，x86_64 還提供浮點和向量寄存器。為了簡化，我將跳過後兩種寄存器，但是你如果喜歡的話也可以選擇支持它們。x86_64 也允許你像訪問 32、16 或者 8 位寄存器那樣訪問一些 64 位寄存器，但我只會介紹 64 位寄存器。由於這些簡化，對於每個寄存器我們只需要它的名稱、它的 DWARF 寄存器編號以及 <code>ptrace</code> 返回結構體中的存儲地址。我使用範圍枚舉引用這些寄存器，然後我列出了一個全局寄存器描述符數組，其中元素順序和 <code>ptrace</code> 中寄存器結構體相同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enum class reg {</span></span>
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
<span class="line"><span>}};</span></span></code></pre></div>`,3)),a("p",null,[s[11]||(s[11]=n("如果你想自己看看的話，你通常可以在 ",-1)),s[12]||(s[12]=a("code",null,"/usr/include/sys/user.h",-1)),s[13]||(s[13]=n(" 找到寄存器數據結構，另外 DWARF 寄存器編號取自 ",-1)),e(p,{href:"https://www.uclibc.org/docs/psABI-x86_64.pdf"},{default:i(()=>[...s[10]||(s[10]=[n("System V x86_64 ABI",-1)])]),_:1}),s[14]||(s[14]=n("。",-1))]),s[43]||(s[43]=t(`<p>現在我們可以編寫一堆函數來和寄存器交互。我們希望可以讀取寄存器、寫入數據、根據 DWARF 寄存器編號獲取值，以及通過名稱查找寄存器，反之類似。讓我們先從實現 <code>get_register_value</code> 開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t get_register_value(pid_t pid, reg r) {</span></span>
<span class="line"><span>    user_regs_struct regs;</span></span>
<span class="line"><span>    ptrace(PTRACE_GETREGS, pid, nullptr, &amp;regs);</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>ptrace</code> 使得我們可以輕易獲得我們想要的數據。我們只需要構造一個 <code>user_regs_struct</code> 實例並把它和 <code>PTRACE_GETREGS</code> 請求傳遞給 <code>ptrace</code>。</p><p>現在根據要請求的寄存器，我們要讀取 <code>regs</code>。我們可以寫一個很大的 switch 語句，但由於我們 <code>g_register_descriptors</code> 表的佈局順序和 <code>user_regs_struct</code> 相同，我們只需要搜索寄存器描述符的索引，然後作為 <code>uint64_t</code> 數組訪問 <code>user_regs_struct</code> 就行。（你也可以重新排序 <code>reg</code> 枚舉變量，然後使用索引把它們轉換為底層類型，但第一次我就使用這種方式編寫，它能正常工作，我也就懶得改它了。）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>        auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                               [r](auto&amp;&amp; rd) { return rd.r == r; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return *(reinterpret_cast&lt;uint64_t*&gt;(&amp;regs) + (it - begin(g_register_descriptors)));</span></span></code></pre></div><p>到 <code>uint64_t</code> 的轉換是安全的，因為 <code>user_regs_struct</code> 是一個標準佈局類型，但我認為指針算術技術上是<ruby>未定義的行為<rt>undefined behavior</rt></ruby>。當前沒有編譯器會對此產生警告，我也懶得修改，但是如果你想保持最嚴格的正確性，那就寫一個大的 switch 語句。</p><p><code>set_register_value</code> 非常類似，我們只是寫入該位置並在最後寫回寄存器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void set_register_value(pid_t pid, reg r, uint64_t value) {</span></span>
<span class="line"><span>    user_regs_struct regs;</span></span>
<span class="line"><span>    ptrace(PTRACE_GETREGS, pid, nullptr, &amp;regs);</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [r](auto&amp;&amp; rd) { return rd.r == r; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    *(reinterpret_cast&lt;uint64_t*&gt;(&amp;regs) + (it - begin(g_register_descriptors))) = value;</span></span>
<span class="line"><span>    ptrace(PTRACE_SETREGS, pid, nullptr, &amp;regs);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下一步是通過 DWARF 寄存器編號查找。這次我會真正檢查一個錯誤條件以防我們得到一些奇怪的 DWARF 信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t get_register_value_from_dwarf_register (pid_t pid, unsigned regnum) {</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [regnum](auto&amp;&amp; rd) { return rd.dwarf_r == regnum; });</span></span>
<span class="line"><span>    if (it == end(g_register_descriptors)) {</span></span>
<span class="line"><span>        throw std::out_of_range{&quot;Unknown dwarf register&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return get_register_value(pid, it-&gt;r);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>就快完成啦，現在我們已經有了寄存器名稱查找：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>std::string get_register_name(reg r) {</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [r](auto&amp;&amp; rd) { return rd.r == r; });</span></span>
<span class="line"><span>    return it-&gt;name;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reg get_register_from_name(const std::string&amp; name) {</span></span>
<span class="line"><span>    auto it = std::find_if(begin(g_register_descriptors), end(g_register_descriptors),</span></span>
<span class="line"><span>                           [name](auto&amp;&amp; rd) { return rd.name == name; });</span></span>
<span class="line"><span>    return it-&gt;r;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最後我們會添加一個簡單的幫助函數用於導出所有寄存器的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::dump_registers() {</span></span>
<span class="line"><span>    for (const auto&amp; rd : g_register_descriptors) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; rd.name &lt;&lt; &quot; 0x&quot;</span></span>
<span class="line"><span>                  &lt;&lt; std::setfill(&#39;0&#39;) &lt;&lt; std::setw(16) &lt;&lt; std::hex &lt;&lt; get_register_value(m_pid, rd.r) &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如你看到的，iostreams 有非常精確的接口用於美觀地輸出十六進制數據（啊哈哈哈哈哈哈）。如果你喜歡你也可以通過 I/O 操縱器來擺脱這種混亂。</p><p>這些已經足夠支持我們在調試器接下來的部分輕鬆地處理寄存器，所以我們現在可以把這些添加到我們的用户界面。</p><h3 id="顯示我們的寄存器" tabindex="-1">顯示我們的寄存器 <a class="header-anchor" href="#顯示我們的寄存器" aria-label="Permalink to “顯示我們的寄存器”">​</a></h3><p>這裏我們要做的就是給 <code>handle_command</code> 函數添加一個命令。通過下面的代碼，用户可以輸入 <code>register read rax</code>、 <code>register write rax 0x42</code> 以及類似的語句。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if (is_prefix(command, &quot;register&quot;)) {</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><h3 id="接下來做什麼" tabindex="-1">接下來做什麼？ <a class="header-anchor" href="#接下來做什麼" aria-label="Permalink to “接下來做什麼？”">​</a></h3><p>設置斷點的時候我們已經讀取和寫入內存，因此我們只需要添加一些函數用於隱藏 <code>ptrace</code> 調用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t debugger::read_memory(uint64_t address) {</span></span>
<span class="line"><span>    return ptrace(PTRACE_PEEKDATA, m_pid, address, nullptr);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void debugger::write_memory(uint64_t address, uint64_t value) {</span></span>
<span class="line"><span>    ptrace(PTRACE_POKEDATA, m_pid, address, value);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,22)),a("p",null,[s[16]||(s[16]=n("你可能想要添加支持一次讀取或者寫入多個字節，你可以在每次希望讀取另一個字節時通過遞增地址來實現。如果你需要的話，你也可以使用  ",-1)),e(p,{href:"http://man7.org/linux/man-pages/man2/process_vm_readv.2.html"},{default:i(()=>[...s[15]||(s[15]=[a("code",null,"process_vm_readv",-1),n(" 和 ",-1),a("code",null,"process_vm_writev",-1)])]),_:1}),s[17]||(s[17]=n(" 或 ",-1)),s[18]||(s[18]=a("code",null,"/proc/<pid>/mem",-1)),s[19]||(s[19]=n(" 代替 ",-1)),s[20]||(s[20]=a("code",null,"ptrace",-1)),s[21]||(s[21]=n("。",-1))]),s[44]||(s[44]=t(`<p>現在我們會給我們的用户界面添加命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if(is_prefix(command, &quot;memory&quot;)) {</span></span>
<span class="line"><span>        std::string addr {args[2], 2}; //assume 0xADDRESS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (is_prefix(args[1], &quot;read&quot;)) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; std::hex &lt;&lt; read_memory(std::stol(addr, 0, 16)) &lt;&lt; std::endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (is_prefix(args[1], &quot;write&quot;)) {</span></span>
<span class="line"><span>            std::string val {args[3], 2}; //assume 0xVAL</span></span>
<span class="line"><span>            write_memory(std::stol(addr, 0, 16), std::stol(val, 0, 16));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="給-continue-execution-打補丁" tabindex="-1">給  <code>continue_execution</code> 打補丁 <a class="header-anchor" href="#給-continue-execution-打補丁" aria-label="Permalink to “給  continue_execution 打補丁”">​</a></h3><p>在我們測試我們的更改之前，我們現在可以實現一個更健全的 <code>continue_execution</code> 版本。由於我們可以獲取程序計數器，我們可以檢查我們的斷點映射來判斷我們是否處於一個斷點。如果是的話，我們可以停用斷點並在繼續之前跳過它。</p><p>為了清晰和簡潔起見，首先我們要添加一些幫助函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>uint64_t debugger::get_pc() {</span></span>
<span class="line"><span>    return get_register_value(m_pid, reg::rip);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void debugger::set_pc(uint64_t pc) {</span></span>
<span class="line"><span>    set_register_value(m_pid, reg::rip, pc);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>然後我們可以編寫函數來跳過斷點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_over_breakpoint() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>首先我們檢查當前程序計算器的值是否設置了一個斷點。如果有，首先我們把執行返回到斷點之前，停用它，跳過原來的指令，再重新啓用斷點。</p><p><code>wait_for_signal</code> 封裝了我們常用的 <code>waitpid</code> 模式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::wait_for_signal() {</span></span>
<span class="line"><span>    int wait_status;</span></span>
<span class="line"><span>    auto options = 0;</span></span>
<span class="line"><span>    waitpid(m_pid, &amp;wait_status, options);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最後我們像下面這樣重寫 <code>continue_execution</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::continue_execution() {</span></span>
<span class="line"><span>    step_over_breakpoint();</span></span>
<span class="line"><span>    ptrace(PTRACE_CONT, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>    wait_for_signal();</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="測試效果" tabindex="-1">測試效果 <a class="header-anchor" href="#測試效果" aria-label="Permalink to “測試效果”">​</a></h3><p>現在我們可以讀取和修改寄存器了，我們可以對我們的 hello world 程序做一些有意思的更改。類似第一次測試，再次嘗試在 <code>call</code> 指令處設置斷點然後從那裏繼續執行。你可以看到輸出了 <code>Hello world</code>。現在是有趣的部分，在輸出調用後設一個斷點、繼續、將 <code>call</code> 參數設置代碼的地址寫入程序計數器（<code>rip</code>）並繼續。由於程序計數器操縱，你應該再次看到輸出了 <code>Hello world</code>。為了以防你不確定在哪裏設置斷點，下面是我上一篇博文中的 <code>objdump</code> 輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0000000000400936 &lt;main&gt;:</span></span>
<span class="line"><span>  400936:	55                   	push   rbp</span></span>
<span class="line"><span>  400937:	48 89 e5             	mov    rbp,rsp</span></span>
<span class="line"><span>  40093a:	be 35 0a 40 00       	mov    esi,0x400a35</span></span>
<span class="line"><span>  40093f:	bf 60 10 60 00       	mov    edi,0x601060</span></span>
<span class="line"><span>  400944:	e8 d7 fe ff ff       	call   400820 &lt;_ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc@plt&gt;</span></span>
<span class="line"><span>  400949:	b8 00 00 00 00       	mov    eax,0x0</span></span>
<span class="line"><span>  40094e:	5d                   	pop    rbp</span></span>
<span class="line"><span>  40094f:	c3                   	ret</span></span></code></pre></div><p>你要將程序計數器移回 <code>0x40093a</code> 以便正確設置 <code>esi</code> 和 <code>edi</code> 寄存器。</p><p>在下一篇Blog中，我們會第一次接觸到 DWARF 信息並給我們的調試器添加一系列逐步調試的功能。之後，我們會有一個功能工具，它能逐步執行代碼、在想要的地方設置斷點、修改數據以及其它。一如以往，如果你有任何問題請留下你的評論！</p>`,18)),a("p",null,[s[23]||(s[23]=n("你可以在",-1)),e(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_registers"},{default:i(()=>[...s[22]||(s[22]=[n("這裏",-1)])]),_:1}),s[24]||(s[24]=n("找到這篇博文的代碼。",-1))]),s[45]||(s[45]=a("hr",null,null,-1)),a("p",null,[s[26]||(s[26]=n("via: ",-1)),e(p,{href:"https://blog.tartanllama.xyz/c++/2017/03/31/writing-a-linux-debugger-registers/"},{default:i(()=>[...s[25]||(s[25]=[n("https://blog.tartanllama.xyz/c++/2017/03/31/writing-a-linux-debugger-registers/",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://www.twitter.com/TartanLlama"},{default:i(()=>[...s[27]||(s[27]=[n("Simon Brand",-1)])]),_:1}),s[31]||(s[31]=n(" 譯者：",-1)),e(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...s[28]||(s[28]=[n("ictlyh",-1)])]),_:1}),s[32]||(s[32]=n(" 校對：",-1)),e(p,{href:"https://github.com/jasminepeng"},{default:i(()=>[...s[29]||(s[29]=[n("jasminepeng",-1)])]),_:1})]),a("p",null,[s[35]||(s[35]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[33]||(s[33]=[n("LCTT",-1)])]),_:1}),s[36]||(s[36]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[34]||(s[34]=[n("Linux中國",-1)])]),_:1}),s[37]||(s[37]=n(" 榮譽推出",-1))])])}const v=l(g,[["render",u]]);export{x as __pageData,v as default};
