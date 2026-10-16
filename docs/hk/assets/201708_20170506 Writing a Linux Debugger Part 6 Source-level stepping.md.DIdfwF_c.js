import{_ as l,a0 as t,w as r,s as o,I as a,x as n,a1 as e,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"開發一個 Linux 調試器（六）：源碼級逐步執行 | LCTT x X-CMD","titleTemplate":false,"description":"開發一個 Linux 調試器（六）：源碼級逐步執行 | LCTT (201708) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"開發一個 Linux 調試器（六）：源碼級逐步執行 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"開發一個 Linux 調試器（六）：源碼級逐步執行 | LCTT (201708) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201708/20170506 Writing a Linux Debugger Part 6 Source-level stepping","title":"開發一個 Linux 調試器（六）：源碼級逐步執行","tag":"201708","desc":""},"relativePath":"201708/20170506 Writing a Linux Debugger Part 6 Source-level stepping.md","filePath":"[post].md"}'),c={name:"201708/20170506 Writing a Linux Debugger Part 6 Source-level stepping.md"};function u(g,s,_,h,b,k){const p=t("Link");return r(),o("div",null,[s[26]||(s[26]=a("h1",{id:"開發一個-linux-調試器-六-源碼級逐步執行",tabindex:"-1"},[n("開發一個 Linux 調試器（六）：源碼級逐步執行 "),a("a",{class:"header-anchor",href:"#開發一個-linux-調試器-六-源碼級逐步執行","aria-label":"Permalink to “開發一個 Linux 調試器（六）：源碼級逐步執行”"},"​")],-1)),s[27]||(s[27]=a("p",null,"在前幾篇博文中我們學習了 DWARF 信息以及它如何使我們將機器碼和上層源碼聯繫起來。這一次我們通過為我們的調試器添加源碼級逐步調試將該知識應用於實際。",-1)),s[28]||(s[28]=a("h3",{id:"系列文章索引",tabindex:"-1"},[n("系列文章索引 "),a("a",{class:"header-anchor",href:"#系列文章索引","aria-label":"Permalink to “系列文章索引”"},"​")],-1)),s[29]||(s[29]=a("p",null,"隨着後面文章的發佈，這些鏈接會逐漸生效。",-1)),a("ol",null,[a("li",null,[e(p,{href:"https://linux.cn/article-8626-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("準備環境",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8645-1.html"},{default:i(()=>[...s[1]||(s[1]=[n("斷點",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8579-1.html"},{default:i(()=>[...s[2]||(s[2]=[n("寄存器和內存",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8719-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://linux.cn/article-8812-1.html"},{default:i(()=>[...s[4]||(s[4]=[n("源碼和信號",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...s[5]||(s[5]=[n("源碼級逐步執行",-1)])]),_:1})]),s[6]||(s[6]=a("li",null,"源碼級斷點",-1)),s[7]||(s[7]=a("li",null,"調用棧展開",-1)),s[8]||(s[8]=a("li",null,"讀取變量",-1)),s[9]||(s[9]=a("li",null,"下一步",-1))]),s[30]||(s[30]=d(`<h3 id="揭秘指令級逐步執行" tabindex="-1">揭秘指令級逐步執行 <a class="header-anchor" href="#揭秘指令級逐步執行" aria-label="Permalink to “揭秘指令級逐步執行”">​</a></h3><p>我們正在超越了自我。首先讓我們通過用户接口揭秘指令級單步執行。我決定將它切分為能被其它部分代碼利用的 <code>single_step_instruction</code> 和確保是否啓用了某個斷點的 <code>single_step_instruction_with_breakpoint_check</code> 兩個函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::single_step_instruction() {</span></span>
<span class="line"><span>    ptrace(PTRACE_SINGLESTEP, m_pid, nullptr, nullptr);</span></span>
<span class="line"><span>    wait_for_signal();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void debugger::single_step_instruction_with_breakpoint_check() {</span></span>
<span class="line"><span>    //首先，檢查我們是否需要停用或者啓用某個斷點</span></span>
<span class="line"><span>    if (m_breakpoints.count(get_pc())) {</span></span>
<span class="line"><span>        step_over_breakpoint();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        single_step_instruction();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>正如以往，另一個命令被集成到我們的 <code>handle_command</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>else if(is_prefix(command, &quot;stepi&quot;)) {</span></span>
<span class="line"><span>    single_step_instruction_with_breakpoint_check();</span></span>
<span class="line"><span>    auto line_entry = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span>    print_source(line_entry-&gt;file-&gt;path, line_entry-&gt;line);</span></span>
<span class="line"><span> }</span></span></code></pre></div><p>利用新增的這些函數我們可以開始實現我們的源碼級逐步執行函數。</p><h3 id="實現逐步執行" tabindex="-1">實現逐步執行 <a class="header-anchor" href="#實現逐步執行" aria-label="Permalink to “實現逐步執行”">​</a></h3><p>我們打算編寫這些函數非常簡單的版本，但真正的調試器有 <em>thread plan</em> 的概念，它封裝了所有的單步信息。例如，調試器可能有一些複雜的邏輯去決定斷點的位置，然後有一些回調函數用於判斷單步操作是否完成。這其中有非常多的基礎設施，我們只採用一種樸素的方法。我們可能會意外地跳過斷點，但如果你願意的話，你可以花一些時間把所有的細節都處理好。</p><p>對於跳出 <code>step_out</code>，我們只是在函數的返回地址處設一個斷點然後繼續執行。我暫時還不想考慮調用棧展開的細節 - 這些都會在後面的部分介紹 - 但可以説返回地址就保存在棧幀開始的後 8 個字節中。因此我們會讀取棧指針然後在內存相對應的地址讀取值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_out() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><code>remove_breakpoint</code> 是一個小的幫助函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::remove_breakpoint(std::intptr_t addr) {</span></span>
<span class="line"><span>    if (m_breakpoints.at(addr).is_enabled()) {</span></span>
<span class="line"><span>        m_breakpoints.at(addr).disable();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    m_breakpoints.erase(addr);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>接下來是跳入 <code>step_in</code>。一個簡單的算法是繼續逐步執行指令直到新的一行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_in() {</span></span>
<span class="line"><span>   auto line = get_line_entry_from_pc(get_pc())-&gt;line;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (get_line_entry_from_pc(get_pc())-&gt;line == line) {</span></span>
<span class="line"><span>        single_step_instruction_with_breakpoint_check();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto line_entry = get_line_entry_from_pc(get_pc());</span></span>
<span class="line"><span>    print_source(line_entry-&gt;file-&gt;path, line_entry-&gt;line);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>跳過 <code>step_over</code> 對於我們來説是三個中最難的。理論上，解決方法就是在下一行源碼中設置一個斷點，但下一行源碼是什麼呢？它可能不是當前行後續的那一行，因為我們可能處於一個循環、或者某種條件結構之中。真正的調試器一般會檢查當前正在執行什麼指令然後計算出所有可能的分支目標，然後在所有分支目標中設置斷點。對於一個小的項目，我不打算實現或者集成一個 x86 指令模擬器，因此我們要想一個更簡單的解決辦法。有幾個可怕的選擇，一個是一直逐步執行直到當前函數新的一行，或者在當前函數的每一行都設置一個斷點。如果我們是要跳過一個函數調用，前者將會相當的低效，因為我們需要逐步執行那個調用圖中的每個指令，因此我會採用第二種方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::step_over() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這個函數有一點複雜，我們將它拆開來看。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    auto func = get_function_from_pc(get_pc());</span></span>
<span class="line"><span>    auto func_entry = at_low_pc(func);</span></span>
<span class="line"><span>    auto func_end = at_high_pc(func);</span></span></code></pre></div><p><code>at_low_pc</code> 和 <code>at_high_pc</code> 是 <code>libelfin</code> 中的函數，它們能給我們指定函數 DWARF 信息條目的最小和最大程序計數器值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    auto line = get_line_entry_from_pc(func_entry);</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><p>我們需要移除我們設置的所有斷點，以便不會泄露出我們的逐步執行函數，為此我們把它們保存到一個 <code>std::vector</code> 中。為了設置所有斷點，我們循環遍歷行表條目直到找到一個不在我們函數範圍內的。對於每一個，我們都要確保它不是我們當前所在的行，而且在這個位置還沒有設置任何斷點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    auto frame_pointer = get_register_value(m_pid, reg::rbp);</span></span>
<span class="line"><span>    auto return_address = read_memory(frame_pointer+8);</span></span>
<span class="line"><span>    if (!m_breakpoints.count(return_address)) {</span></span>
<span class="line"><span>        set_breakpoint_at_address(return_address);</span></span>
<span class="line"><span>        to_delete.push_back(return_address);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>這裏我們在函數的返回地址處設置一個斷點，正如跳出 <code>step_out</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    continue_execution();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto addr : to_delete) {</span></span>
<span class="line"><span>        remove_breakpoint(addr);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>最後，我們繼續執行直到命中它們中的其中一個斷點，然後移除所有我們設置的臨時斷點。</p><p>它並不美觀，但暫時先這樣吧。</p><p>當然，我們還需要將這個新功能添加到用户界面：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if(is_prefix(command, &quot;step&quot;)) {</span></span>
<span class="line"><span>        step_in();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if(is_prefix(command, &quot;next&quot;)) {</span></span>
<span class="line"><span>        step_over();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else if(is_prefix(command, &quot;finish&quot;)) {</span></span>
<span class="line"><span>        step_out();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to “測試”">​</a></h3><p>我通過實現一個調用一系列不同函數的簡單函數來進行測試：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void a() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你應該可以在 <code>main</code> 地址處設置一個斷點，然後在整個程序中跳入、跳過、跳出函數。如果你嘗試跳出 <code>main</code> 函數或者跳入任何動態鏈接庫，就會出現意料之外的事情。</p>`,32)),a("p",null,[s[11]||(s[11]=n("你可以在",-1)),e(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_dwarf_step"},{default:i(()=>[...s[10]||(s[10]=[n("這裏",-1)])]),_:1}),s[12]||(s[12]=n("找到這篇博文的相關代碼。下次我們會利用我們新的 DWARF 技巧來實現源碼級斷點。",-1))]),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[14]||(s[14]=n("via: ",-1)),e(p,{href:"https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/"},{default:i(()=>[...s[13]||(s[13]=[n("https://blog.tartanllama.xyz/c++/2017/05/06/writing-a-linux-debugger-dwarf-step/",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"https://www.twitter.com/TartanLlama"},{default:i(()=>[...s[15]||(s[15]=[n("Simon Brand",-1)])]),_:1}),s[19]||(s[19]=n(" 譯者：",-1)),e(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...s[16]||(s[16]=[n("ictlyh",-1)])]),_:1}),s[20]||(s[20]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中國",-1)])]),_:1}),s[25]||(s[25]=n(" 榮譽推出",-1))])])}const y=l(c,[["render",u]]);export{v as __pageData,y as default};
