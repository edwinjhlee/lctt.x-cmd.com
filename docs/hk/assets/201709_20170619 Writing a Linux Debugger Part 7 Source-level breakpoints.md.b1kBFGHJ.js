import{_ as i,a0 as t,w as o,s as r,I as a,x as n,a1 as l,A as e,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"開發一個 Linux 調試器（七）：源碼級斷點 | LCTT x X-CMD","titleTemplate":false,"description":"開發一個 Linux 調試器（七）：源碼級斷點 | LCTT (201709) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"開發一個 Linux 調試器（七）：源碼級斷點 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"開發一個 Linux 調試器（七）：源碼級斷點 | LCTT (201709) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201709/20170619 Writing a Linux Debugger Part 7 Source-level breakpoints","title":"開發一個 Linux 調試器（七）：源碼級斷點","tag":"201709","desc":""},"relativePath":"201709/20170619 Writing a Linux Debugger Part 7 Source-level breakpoints.md","filePath":"[post].md"}'),d={name:"201709/20170619 Writing a Linux Debugger Part 7 Source-level breakpoints.md"};function u(L,s,g,_,b,A){const p=t("Link");return o(),r("div",null,[s[31]||(s[31]=a("h1",{id:"開發一個-linux-調試器-七-源碼級斷點",tabindex:"-1"},[n("開發一個 Linux 調試器（七）：源碼級斷點 "),a("a",{class:"header-anchor",href:"#開發一個-linux-調試器-七-源碼級斷點","aria-label":"Permalink to “開發一個 Linux 調試器（七）：源碼級斷點”"},"​")],-1)),s[32]||(s[32]=a("p",null,"在內存地址上設置斷點雖然不錯，但它並沒有提供最方便用户的工具。我們希望能夠在源代碼行和函數入口地址上設置斷點，以便我們可以在與代碼相同的抽象級別中進行調試。",-1)),s[33]||(s[33]=a("p",null,"這篇文章將會添加源碼級斷點到我們的調試器中。通過所有我們已經支持的功能，這要比起最初聽起來容易得多。我們還將添加一個命令來獲取符號的類型和地址，這對於定位代碼或數據以及理解鏈接概念非常有用。",-1)),s[34]||(s[34]=a("h3",{id:"系列索引",tabindex:"-1"},[n("系列索引 "),a("a",{class:"header-anchor",href:"#系列索引","aria-label":"Permalink to “系列索引”"},"​")],-1)),s[35]||(s[35]=a("p",null,"隨着後面文章的發佈，這些鏈接會逐漸生效。",-1)),a("ol",null,[a("li",null,[l(p,{href:"https://linux.cn/article-8626-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("準備環境",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8645-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("斷點",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8663-1.html"},{default:e(()=>[...s[2]||(s[2]=[n("寄存器和內存",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8719-1.html"},{default:e(()=>[...s[3]||(s[3]=[n("Elves 和 dwarves",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8812-1.html"},{default:e(()=>[...s[4]||(s[4]=[n("源碼和信號",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://linux.cn/article-8813-1.html"},{default:e(()=>[...s[5]||(s[5]=[n("源碼級逐步執行",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://blog.tartanllama.xyz/c++/2017/06/19/writing-a-linux-debugger-source-break/"},{default:e(()=>[...s[6]||(s[6]=[n("源碼級斷點",-1)])]),_:1})]),a("li",null,[l(p,{href:"https://blog.tartanllama.xyz/c++/2017/06/24/writing-a-linux-debugger-unwinding/"},{default:e(()=>[...s[7]||(s[7]=[n("調用棧",-1)])]),_:1})]),s[8]||(s[8]=a("li",null,"讀取變量",-1)),s[9]||(s[9]=a("li",null,"之後步驟",-1))]),s[36]||(s[36]=a("h3",{id:"斷點",tabindex:"-1"},[n("斷點 "),a("a",{class:"header-anchor",href:"#斷點","aria-label":"Permalink to “斷點”"},"​")],-1)),s[37]||(s[37]=a("h4",{id:"dwarf",tabindex:"-1"},[n("DWARF "),a("a",{class:"header-anchor",href:"#dwarf","aria-label":"Permalink to “DWARF”"},"​")],-1)),a("p",null,[l(p,{href:"https://linux.cn/article-8719-1.html"},{default:e(()=>[...s[10]||(s[10]=[n("Elves 和 dwarves",-1)])]),_:1}),s[11]||(s[11]=n(" 這篇文章，描述了 DWARF 調試信息是如何工作的，以及如何用它來將機器碼映射到高層源碼中。回想一下，DWARF 包含了函數的地址範圍和一個允許你在抽象層之間轉換代碼位置的行表。我們將使用這些功能來實現我們的斷點。",-1))]),s[38]||(s[38]=c(`<h4 id="函數入口" tabindex="-1">函數入口 <a class="header-anchor" href="#函數入口" aria-label="Permalink to “函數入口”">​</a></h4><p>如果你考慮重載、成員函數等等，那麼在函數名上設置斷點可能有點複雜，但是我們將遍歷所有的編譯單元，並搜索與我們正在尋找的名稱匹配的函數。DWARF 信息如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt; 0&gt;&lt;0x0000000b&gt;  DW_TAG_compile_unit</span></span>
<span class="line"><span>                    DW_AT_producer              clang version 3.9.1 (tags/RELEASE_391/final)</span></span>
<span class="line"><span>                    DW_AT_language              DW_LANG_C_plus_plus</span></span>
<span class="line"><span>                    DW_AT_name                  /super/secret/path/MiniDbg/examples/variable.cpp</span></span>
<span class="line"><span>                    DW_AT_stmt_list             0x00000000</span></span>
<span class="line"><span>                    DW_AT_comp_dir              /super/secret/path/MiniDbg/build</span></span>
<span class="line"><span>                    DW_AT_low_pc                0x00400670</span></span>
<span class="line"><span>                    DW_AT_high_pc               0x0040069c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LOCAL_SYMBOLS:</span></span>
<span class="line"><span>&lt; 1&gt;&lt;0x0000002e&gt;    DW_TAG_subprogram</span></span>
<span class="line"><span>                      DW_AT_low_pc                0x00400670</span></span>
<span class="line"><span>                      DW_AT_high_pc               0x0040069c</span></span>
<span class="line"><span>                      DW_AT_name                  foo</span></span>
<span class="line"><span>                      ...</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&lt;14&gt;&lt;0x000000b0&gt;    DW_TAG_subprogram</span></span>
<span class="line"><span>                      DW_AT_low_pc                0x00400700</span></span>
<span class="line"><span>                      DW_AT_high_pc               0x004007a0</span></span>
<span class="line"><span>                      DW_AT_name                  bar</span></span>
<span class="line"><span>                      ...</span></span></code></pre></div><p>我們想要匹配 <code>DW_AT_name</code> 並使用 <code>DW_AT_low_pc</code>（函數的起始地址）來設置我們的斷點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::set_breakpoint_at_function(const std::string&amp; name) {</span></span>
<span class="line"><span>    for (const auto&amp; cu : m_dwarf.compilation_units()) {</span></span>
<span class="line"><span>        for (const auto&amp; die : cu.root()) {</span></span>
<span class="line"><span>            if (die.has(dwarf::DW_AT::name) &amp;&amp; at_name(die) == name) {</span></span>
<span class="line"><span>                auto low_pc = at_low_pc(die);</span></span>
<span class="line"><span>                auto entry = get_line_entry_from_pc(low_pc);</span></span>
<span class="line"><span>                ++entry; //skip prologue</span></span>
<span class="line"><span>                set_breakpoint_at_address(entry-&gt;address);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這代碼看起來有點奇怪的唯一一點是 <code>++entry</code>。 問題是函數的 <code>DW_AT_low_pc</code> 不指向該函數的用户代碼的起始地址，它指向 prologue 的開始。編譯器通常會輸出一個函數的 prologue 和 epilogue，它們用於執行保存和恢復堆棧、操作堆棧指針等。這對我們來説不是很有用，所以我們將入口行加一來獲取用户代碼的第一行而不是 prologue。DWARF 行表實際上具有一些功能，用於將入口標記為函數 prologue 之後的第一行，但並不是所有編譯器都輸出它，因此我採用了原始的方法。</p><h4 id="源碼行" tabindex="-1">源碼行 <a class="header-anchor" href="#源碼行" aria-label="Permalink to “源碼行”">​</a></h4><p>要在高層源碼行上設置一個斷點，我們要將這個行號轉換成 DWARF 中的一個地址。我們將遍歷編譯單元，尋找一個名稱與給定文件匹配的編譯單元，然後查找與給定行對應的入口。</p><p>DWARF 看上去有點像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.debug_line: line number info for a single cu</span></span>
<span class="line"><span>Source lines (from CU-DIE at .debug_info offset 0x0000000b):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NS new statement, BB new basic block, ET end of text sequence</span></span>
<span class="line"><span>PE prologue end, EB epilogue begin</span></span>
<span class="line"><span>IS=val ISA number, DI=val discriminator value</span></span>
<span class="line"><span>&lt;pc&gt;        [lno,col] NS BB ET PE EB IS= DI= uri: &quot;filepath&quot;</span></span>
<span class="line"><span>0x004004a7  [   1, 0] NS uri: &quot;/super/secret/path/a.hpp&quot;</span></span>
<span class="line"><span>0x004004ab  [   2, 0] NS</span></span>
<span class="line"><span>0x004004b2  [   3, 0] NS</span></span>
<span class="line"><span>0x004004b9  [   4, 0] NS</span></span>
<span class="line"><span>0x004004c1  [   5, 0] NS</span></span>
<span class="line"><span>0x004004c3  [   1, 0] NS uri: &quot;/super/secret/path/b.hpp&quot;</span></span>
<span class="line"><span>0x004004c7  [   2, 0] NS</span></span>
<span class="line"><span>0x004004ce  [   3, 0] NS</span></span>
<span class="line"><span>0x004004d5  [   4, 0] NS</span></span>
<span class="line"><span>0x004004dd  [   5, 0] NS</span></span>
<span class="line"><span>0x004004df  [   4, 0] NS uri: &quot;/super/secret/path/ab.cpp&quot;</span></span>
<span class="line"><span>0x004004e3  [   5, 0] NS</span></span>
<span class="line"><span>0x004004e8  [   6, 0] NS</span></span>
<span class="line"><span>0x004004ed  [   7, 0] NS</span></span>
<span class="line"><span>0x004004f4  [   7, 0] NS ET</span></span></code></pre></div><p>所以如果我們想要在 <code>ab.cpp</code> 的第五行設置一個斷點，我們將查找與行 (<code>0x004004e3</code>) 相關的入口並設置一個斷點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void debugger::set_breakpoint_at_source_line(const std::string&amp; file, unsigned line) {</span></span>
<span class="line"><span>    for (const auto&amp; cu : m_dwarf.compilation_units()) {</span></span>
<span class="line"><span>        if (is_suffix(file, at_name(cu.root()))) {</span></span>
<span class="line"><span>            const auto&amp; lt = cu.get_line_table();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            for (const auto&amp; entry : lt) {</span></span>
<span class="line"><span>                if (entry.is_stmt &amp;&amp; entry.line == line) {</span></span>
<span class="line"><span>                    set_breakpoint_at_address(entry.address);</span></span>
<span class="line"><span>                    return;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我這裏做了 <code>is_suffix</code> hack，這樣你可以輸入 <code>c.cpp</code> 代表 <code>a/b/c.cpp</code> 。當然你實際上應該使用大小寫敏感路徑處理庫或者其它東西，但是我比較懶。<code>entry.is_stmt</code> 是檢查行表入口是否被標記為一個語句的開頭，這是由編譯器根據它認為是斷點的最佳目標的地址設置的。</p><h3 id="符號查找" tabindex="-1">符號查找 <a class="header-anchor" href="#符號查找" aria-label="Permalink to “符號查找”">​</a></h3><p>當我們在對象文件層時，符號是王者。函數用符號命名，全局變量用符號命名，你得到一個符號，我們得到一個符號，每個人都得到一個符號。 在給定的對象文件中，一些符號可能引用其他對象文件或共享庫，鏈接器將從符號引用創建一個可執行程序。</p><p>可以在正確命名的符號表中查找符號，它存儲在二進制文件的 ELF 部分中。幸運的是，<code>libelfin</code> 有一個不錯的接口來做這件事，所以我們不需要自己處理所有的 ELF 的事情。為了讓你知道我們在處理什麼，下面是一個二進制文件的 <code>.symtab</code> 部分的轉儲，它由 <code>readelf</code> 生成：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Num:    Value          Size Type    Bind   Vis      Ndx Name</span></span>
<span class="line"><span> 0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND</span></span>
<span class="line"><span> 1: 0000000000400238     0 SECTION LOCAL  DEFAULT    1</span></span>
<span class="line"><span> 2: 0000000000400254     0 SECTION LOCAL  DEFAULT    2</span></span>
<span class="line"><span> 3: 0000000000400278     0 SECTION LOCAL  DEFAULT    3</span></span>
<span class="line"><span> 4: 00000000004002c8     0 SECTION LOCAL  DEFAULT    4</span></span>
<span class="line"><span> 5: 0000000000400430     0 SECTION LOCAL  DEFAULT    5</span></span>
<span class="line"><span> 6: 00000000004004e4     0 SECTION LOCAL  DEFAULT    6</span></span>
<span class="line"><span> 7: 0000000000400508     0 SECTION LOCAL  DEFAULT    7</span></span>
<span class="line"><span> 8: 0000000000400528     0 SECTION LOCAL  DEFAULT    8</span></span>
<span class="line"><span> 9: 0000000000400558     0 SECTION LOCAL  DEFAULT    9</span></span>
<span class="line"><span>10: 0000000000400570     0 SECTION LOCAL  DEFAULT   10</span></span>
<span class="line"><span>11: 0000000000400714     0 SECTION LOCAL  DEFAULT   11</span></span>
<span class="line"><span>12: 0000000000400720     0 SECTION LOCAL  DEFAULT   12</span></span>
<span class="line"><span>13: 0000000000400724     0 SECTION LOCAL  DEFAULT   13</span></span>
<span class="line"><span>14: 0000000000400750     0 SECTION LOCAL  DEFAULT   14</span></span>
<span class="line"><span>15: 0000000000600e18     0 SECTION LOCAL  DEFAULT   15</span></span>
<span class="line"><span>16: 0000000000600e20     0 SECTION LOCAL  DEFAULT   16</span></span>
<span class="line"><span>17: 0000000000600e28     0 SECTION LOCAL  DEFAULT   17</span></span>
<span class="line"><span>18: 0000000000600e30     0 SECTION LOCAL  DEFAULT   18</span></span>
<span class="line"><span>19: 0000000000600ff0     0 SECTION LOCAL  DEFAULT   19</span></span>
<span class="line"><span>20: 0000000000601000     0 SECTION LOCAL  DEFAULT   20</span></span>
<span class="line"><span>21: 0000000000601018     0 SECTION LOCAL  DEFAULT   21</span></span>
<span class="line"><span>22: 0000000000601028     0 SECTION LOCAL  DEFAULT   22</span></span>
<span class="line"><span>23: 0000000000000000     0 SECTION LOCAL  DEFAULT   23</span></span>
<span class="line"><span>24: 0000000000000000     0 SECTION LOCAL  DEFAULT   24</span></span>
<span class="line"><span>25: 0000000000000000     0 SECTION LOCAL  DEFAULT   25</span></span>
<span class="line"><span>26: 0000000000000000     0 SECTION LOCAL  DEFAULT   26</span></span>
<span class="line"><span>27: 0000000000000000     0 SECTION LOCAL  DEFAULT   27</span></span>
<span class="line"><span>28: 0000000000000000     0 SECTION LOCAL  DEFAULT   28</span></span>
<span class="line"><span>29: 0000000000000000     0 SECTION LOCAL  DEFAULT   29</span></span>
<span class="line"><span>30: 0000000000000000     0 SECTION LOCAL  DEFAULT   30</span></span>
<span class="line"><span>31: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS init.c</span></span>
<span class="line"><span>32: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS crtstuff.c</span></span>
<span class="line"><span>33: 0000000000600e28     0 OBJECT  LOCAL  DEFAULT   17 __JCR_LIST__</span></span>
<span class="line"><span>34: 00000000004005a0     0 FUNC    LOCAL  DEFAULT   10 deregister_tm_clones</span></span>
<span class="line"><span>35: 00000000004005e0     0 FUNC    LOCAL  DEFAULT   10 register_tm_clones</span></span>
<span class="line"><span>36: 0000000000400620     0 FUNC    LOCAL  DEFAULT   10 __do_global_dtors_aux</span></span>
<span class="line"><span>37: 0000000000601028     1 OBJECT  LOCAL  DEFAULT   22 completed.6917</span></span>
<span class="line"><span>38: 0000000000600e20     0 OBJECT  LOCAL  DEFAULT   16 __do_global_dtors_aux_fin</span></span>
<span class="line"><span>39: 0000000000400640     0 FUNC    LOCAL  DEFAULT   10 frame_dummy</span></span>
<span class="line"><span>40: 0000000000600e18     0 OBJECT  LOCAL  DEFAULT   15 __frame_dummy_init_array_</span></span>
<span class="line"><span>41: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS /super/secret/path/MiniDbg/</span></span>
<span class="line"><span>42: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS crtstuff.c</span></span>
<span class="line"><span>43: 0000000000400818     0 OBJECT  LOCAL  DEFAULT   14 __FRAME_END__</span></span>
<span class="line"><span>44: 0000000000600e28     0 OBJECT  LOCAL  DEFAULT   17 __JCR_END__</span></span>
<span class="line"><span>45: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS</span></span>
<span class="line"><span>46: 0000000000400724     0 NOTYPE  LOCAL  DEFAULT   13 __GNU_EH_FRAME_HDR</span></span>
<span class="line"><span>47: 0000000000601000     0 OBJECT  LOCAL  DEFAULT   20 _GLOBAL_OFFSET_TABLE_</span></span>
<span class="line"><span>48: 0000000000601028     0 OBJECT  LOCAL  DEFAULT   21 __TMC_END__</span></span>
<span class="line"><span>49: 0000000000601020     0 OBJECT  LOCAL  DEFAULT   21 __dso_handle</span></span>
<span class="line"><span>50: 0000000000600e20     0 NOTYPE  LOCAL  DEFAULT   15 __init_array_end</span></span>
<span class="line"><span>51: 0000000000600e18     0 NOTYPE  LOCAL  DEFAULT   15 __init_array_start</span></span>
<span class="line"><span>52: 0000000000600e30     0 OBJECT  LOCAL  DEFAULT   18 _DYNAMIC</span></span>
<span class="line"><span>53: 0000000000601018     0 NOTYPE  WEAK   DEFAULT   21 data_start</span></span>
<span class="line"><span>54: 0000000000400710     2 FUNC    GLOBAL DEFAULT   10 __libc_csu_fini</span></span>
<span class="line"><span>55: 0000000000400570    43 FUNC    GLOBAL DEFAULT   10 _start</span></span>
<span class="line"><span>56: 0000000000000000     0 NOTYPE  WEAK   DEFAULT  UND __gmon_start__</span></span>
<span class="line"><span>57: 0000000000400714     0 FUNC    GLOBAL DEFAULT   11 _fini</span></span>
<span class="line"><span>58: 0000000000000000     0 FUNC    GLOBAL DEFAULT  UND __libc_start_main@@GLIBC_</span></span>
<span class="line"><span>59: 0000000000400720     4 OBJECT  GLOBAL DEFAULT   12 _IO_stdin_used</span></span>
<span class="line"><span>60: 0000000000601018     0 NOTYPE  GLOBAL DEFAULT   21 __data_start</span></span>
<span class="line"><span>61: 00000000004006a0   101 FUNC    GLOBAL DEFAULT   10 __libc_csu_init</span></span>
<span class="line"><span>62: 0000000000601028     0 NOTYPE  GLOBAL DEFAULT   22 __bss_start</span></span>
<span class="line"><span>63: 0000000000601030     0 NOTYPE  GLOBAL DEFAULT   22 _end</span></span>
<span class="line"><span>64: 0000000000601028     0 NOTYPE  GLOBAL DEFAULT   21 _edata</span></span>
<span class="line"><span>65: 0000000000400670    44 FUNC    GLOBAL DEFAULT   10 main</span></span>
<span class="line"><span>66: 0000000000400558     0 FUNC    GLOBAL DEFAULT    9 _init</span></span></code></pre></div><p>你可以在對象文件中看到用於設置環境的很多符號，最後還可以看到 <code>main</code> 符號。</p><p>我們對符號的類型、名稱和值（地址）感興趣。我們有一個該類型的 <code>symbol_type</code> 枚舉，並使用一個 <code>std::string</code> 作為名稱，<code>std::uintptr_t</code> 作為地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>enum class symbol_type {</span></span>
<span class="line"><span>    notype,            // No type (e.g., absolute symbol)</span></span>
<span class="line"><span>    object,            // Data object</span></span>
<span class="line"><span>    func,              // Function entry point</span></span>
<span class="line"><span>    section,           // Symbol is associated with a section</span></span>
<span class="line"><span>    file,              // Source file associated with the</span></span>
<span class="line"><span>};                     // object file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>std::string to_string (symbol_type st) {</span></span>
<span class="line"><span>    switch (st) {</span></span>
<span class="line"><span>    case symbol_type::notype: return &quot;notype&quot;;</span></span>
<span class="line"><span>    case symbol_type::object: return &quot;object&quot;;</span></span>
<span class="line"><span>    case symbol_type::func: return &quot;func&quot;;</span></span>
<span class="line"><span>    case symbol_type::section: return &quot;section&quot;;</span></span>
<span class="line"><span>    case symbol_type::file: return &quot;file&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct symbol {</span></span>
<span class="line"><span>    symbol_type type;</span></span>
<span class="line"><span>    std::string name;</span></span>
<span class="line"><span>    std::uintptr_t addr;</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>我們需要將從 <code>libelfin</code> 獲得的符號類型映射到我們的枚舉，因為我們不希望依賴關係破環這個接口。幸運的是，我為所有的東西選了同樣的名字，所以這樣很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>symbol_type to_symbol_type(elf::stt sym) {</span></span>
<span class="line"><span>    switch (sym) {</span></span>
<span class="line"><span>    case elf::stt::notype: return symbol_type::notype;</span></span>
<span class="line"><span>    case elf::stt::object: return symbol_type::object;</span></span>
<span class="line"><span>    case elf::stt::func: return symbol_type::func;</span></span>
<span class="line"><span>    case elf::stt::section: return symbol_type::section;</span></span>
<span class="line"><span>    case elf::stt::file: return symbol_type::file;</span></span>
<span class="line"><span>    default: return symbol_type::notype;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><p>最後我們要查找符號。為了説明的目的，我循環查找符號表的 ELF 部分，然後收集我在其中找到的任意符號到 <code>std::vector</code> 中。更智能的實現可以建立從名稱到符號的映射，這樣你只需要查看一次數據就行了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>std::vector&lt;symbol&gt; debugger::lookup_symbol(const std::string&amp; name) {</span></span>
<span class="line"><span>    std::vector&lt;symbol&gt; syms;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto &amp;sec : m_elf.sections()) {</span></span>
<span class="line"><span>        if (sec.get_hdr().type != elf::sht::symtab &amp;&amp; sec.get_hdr().type != elf::sht::dynsym)</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        for (auto sym : sec.as_symtab()) {</span></span>
<span class="line"><span>            if (sym.get_name() == name) {</span></span>
<span class="line"><span>                auto &amp;d = sym.get_data();</span></span>
<span class="line"><span>                syms.push_back(symbol{to_symbol_type(d.type()), sym.get_name(), d.value});</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return syms;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="添加命令" tabindex="-1">添加命令 <a class="header-anchor" href="#添加命令" aria-label="Permalink to “添加命令”">​</a></h3><p>一如往常，我們需要添加一些更多的命令來向用户暴露功能。對於斷點，我使用 GDB 風格的接口，其中斷點類型是通過你傳遞的參數推斷的，而不用要求顯式切換：</p><ul><li><code>0x&lt;hexadecimal&gt;</code> -&gt; 斷點地址</li><li><code>&lt;line&gt;:&lt;filename&gt;</code> -&gt; 斷點行號</li><li><code>&lt;anything else&gt;</code> -&gt; 斷點函數名</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    else if(is_prefix(command, &quot;break&quot;)) {</span></span>
<span class="line"><span>        if (args[1][0] == &#39;0&#39; &amp;&amp; args[1][1] == &#39;x&#39;) {</span></span>
<span class="line"><span>            std::string addr {args[1], 2};</span></span>
<span class="line"><span>            set_breakpoint_at_address(std::stol(addr, 0, 16));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (args[1].find(&#39;:&#39;) != std::string::npos) {</span></span>
<span class="line"><span>            auto file_and_line = split(args[1], &#39;:&#39;);</span></span>
<span class="line"><span>            set_breakpoint_at_source_line(file_and_line[0], std::stoi(file_and_line[1]));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            set_breakpoint_at_function(args[1]);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>對於符號，我們將查找符號並打印出我們發現的任何匹配項：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>else if(is_prefix(command, &quot;symbol&quot;)) {</span></span>
<span class="line"><span>    auto syms = lookup_symbol(args[1]);</span></span>
<span class="line"><span>    for (auto&amp;&amp; s : syms) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; s.name &lt;&lt; &#39; &#39; &lt;&lt; to_string(s.type) &lt;&lt; &quot; 0x&quot; &lt;&lt; std::hex &lt;&lt; s.addr &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="測試一下" tabindex="-1">測試一下 <a class="header-anchor" href="#測試一下" aria-label="Permalink to “測試一下”">​</a></h3><p>在一個簡單的二進制文件上啓動調試器，並設置源代碼級別的斷點。在一些 <code>foo</code> 函數上設置一個斷點，看到我的調試器停在它上面是我這個項目最有價值的時刻之一。</p>`,32)),a("p",null,[s[13]||(s[13]=n("符號查找可以通過在程序中添加一些函數或全局變量並查找它們的名稱來進行測試。請注意，如果你正在編譯 C++ 代碼，你還需要考慮",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Name_mangling#C.2B.2B"},{default:e(()=>[...s[12]||(s[12]=[n("名稱重整",-1)])]),_:1}),s[14]||(s[14]=n("。",-1))]),s[39]||(s[39]=a("p",null,"本文就這些了。下一次我將展示如何向調試器添加堆棧展開支持。",-1)),a("p",null,[s[16]||(s[16]=n("你可以在",-1)),l(p,{href:"https://github.com/TartanLlama/minidbg/tree/tut_source_break"},{default:e(()=>[...s[15]||(s[15]=[n("這裏",-1)])]),_:1}),s[17]||(s[17]=n("找到這篇文章的代碼。",-1))]),s[40]||(s[40]=a("hr",null,null,-1)),a("p",null,[s[19]||(s[19]=n("via: ",-1)),l(p,{href:"https://blog.tartanllama.xyz/c++/2017/06/19/writing-a-linux-debugger-source-break/"},{default:e(()=>[...s[18]||(s[18]=[n("https://blog.tartanllama.xyz/c++/2017/06/19/writing-a-linux-debugger-source-break/",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("作者：",-1)),l(p,{href:"https://twitter.com/TartanLlama"},{default:e(()=>[...s[20]||(s[20]=[n("Simon Brand",-1)])]),_:1}),s[24]||(s[24]=n(" 譯者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:e(()=>[...s[21]||(s[21]=[n("geekpi",-1)])]),_:1}),s[25]||(s[25]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[22]||(s[22]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[27]||(s[27]=[n("Linux中國",-1)])]),_:1}),s[30]||(s[30]=n(" 榮譽推出",-1))])])}const h=i(d,[["render",u]]);export{f as __pageData,h as default};
