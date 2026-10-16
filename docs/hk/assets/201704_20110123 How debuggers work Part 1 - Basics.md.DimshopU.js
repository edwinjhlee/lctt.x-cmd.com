import{_ as t,a0 as r,w as c,s as o,ao as l,I as p,x as n,a1 as e,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"調試器的工作原理（一）：基礎篇 | LCTT x X-CMD","titleTemplate":false,"description":"調試器的工作原理（一）：基礎篇 | LCTT (201704) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"調試器的工作原理（一）：基礎篇 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"調試器的工作原理（一）：基礎篇 | LCTT (201704) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201704/20110123 How debuggers work Part 1 - Basics","title":"調試器的工作原理（一）：基礎篇","tag":"201704","desc":""},"relativePath":"201704/20110123 How debuggers work Part 1 - Basics.md","filePath":"[post].md"}'),d={name:"201704/20110123 How debuggers work Part 1 - Basics.md"};function u(g,s,h,b,k,x){const a=r("Link");return c(),o("div",null,[s[23]||(s[23]=l('<h1 id="調試器的工作原理-一-基礎篇" tabindex="-1">調試器的工作原理（一）：基礎篇 <a class="header-anchor" href="#調試器的工作原理-一-基礎篇" aria-label="Permalink to “調試器的工作原理（一）：基礎篇”">​</a></h1><p>這是調試器工作原理系列文章的第一篇，我不確定這個系列會有多少篇文章，會涉及多少話題，但我仍會從這篇基礎開始。</p><h3 id="這一篇會講什麼" tabindex="-1">這一篇會講什麼 <a class="header-anchor" href="#這一篇會講什麼" aria-label="Permalink to “這一篇會講什麼”">​</a></h3><p>我將為大家展示 Linux 中調試器的主要構成模組 - <code>ptrace</code> 系統調用。這篇文章所有代碼都是基於 32 位 Ubuntu 操作系統。值得注意的是，儘管這些代碼是平台相關的，將它們移植到其它平台應該並不困難。</p><h3 id="緣由" tabindex="-1">緣由 <a class="header-anchor" href="#緣由" aria-label="Permalink to “緣由”">​</a></h3><p>為了理解我們要做什麼，讓我們先考慮下調試器為了完成調試都需要什麼資源。調試器可以開始一個進程並調試這個進程，又或者將自己同某個已經存在的進程關聯起來。調試器能夠單步執行代碼，設定斷點並且將程序執行到斷點，檢查變量的值並追蹤堆棧。許多調試器有着更高級的特性，例如在調試器的地址空間內執行表達式或者調用函數，甚至可以在進程執行過程中改變代碼並觀察效果。</p>',6)),p("p",null,[s[1]||(s[1]=n("儘管現代的調試器都十分的複雜（我沒有檢查，但我確信 gdb 的代碼行數至少有六位數），但它們的工作的原理卻是十分的簡單。調試器的基礎是操作系統與編譯器 / 鏈接器提供的一些基礎服務，其餘的部分只是",-1)),e(a,{href:"http://en.wikipedia.org/wiki/Small_matter_of_programming"},{default:i(()=>[...s[0]||(s[0]=[n("簡單的編程",-1)])]),_:1}),s[2]||(s[2]=n("而已。",-1))]),s[24]||(s[24]=l(`<h3 id="linux-的調試-ptrace" tabindex="-1">Linux 的調試 - ptrace <a class="header-anchor" href="#linux-的調試-ptrace" aria-label="Permalink to “Linux 的調試 - ptrace”">​</a></h3><p>Linux 調試器中的瑞士軍刀便是 <code>ptrace</code> 系統調用（使用 man 2 ptrace 命令可以瞭解更多）。這是一種複雜卻強大的工具，可以允許一個進程控制另外一個進程並從<ruby>內部替換<rt>Peek and poke</rt></ruby>被控制進程的內核鏡像的值（Peek and poke 在系統編程中是很知名的叫法，指的是直接讀寫內存內容）。</p><p>接下來會深入分析。</p><h3 id="執行進程的代碼" tabindex="-1">執行進程的代碼 <a class="header-anchor" href="#執行進程的代碼" aria-label="Permalink to “執行進程的代碼”">​</a></h3><p>我將編寫一個示例，實現一個在“跟蹤”模式下運行的進程。在這個模式下，我們將單步執行進程的代碼，就像機器碼（彙編代碼）被 CPU 執行時一樣。我將分段展示、講解示例代碼，在文章的末尾也有完整 c 文件的下載鏈接，你可以編譯、執行或者隨心所欲的更改。</p><p>更進一步的計劃是實現一段代碼，這段代碼可以創建可執行用户自定義命令的子進程，同時父進程可以跟蹤子進程。首先是主函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, char** argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    pid_t child_pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (argc &lt; 2) {</span></span>
<span class="line"><span>        fprintf(stderr, &quot;Expected a program name as argument\\n&quot;);</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    child_pid = fork();</span></span>
<span class="line"><span>    if (child_pid == 0)</span></span>
<span class="line"><span>        run_target(argv[1]);</span></span>
<span class="line"><span>    else if (child_pid &gt; 0)</span></span>
<span class="line"><span>        run_debugger(child_pid);</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        perror(&quot;fork&quot;);</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看起來相當的簡單：我們用 <code>fork</code> 創建了一個新的子進程（這篇文章假定讀者有一定的 Unix/Linux 編程經驗。我假定你知道或至少了解 fork、exec 族函數與 Unix 信號）。if 語句的分支執行子進程（這裏稱之為 “target”），<code>else if</code> 的分支執行父進程（這裏稱之為 “debugger”）。</p><p>下面是 target 進程的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_target(const char* programname)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    procmsg(&quot;target started. will run &#39;%s&#39;\\n&quot;, programname);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Allow tracing of this process */</span></span>
<span class="line"><span>    if (ptrace(PTRACE_TRACEME, 0, 0, 0) &lt; 0) {</span></span>
<span class="line"><span>        perror(&quot;ptrace&quot;);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Replace this process&#39;s image with the given program */</span></span>
<span class="line"><span>    execl(programname, programname, 0);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這段代碼中最值得注意的是 <code>ptrace</code> 調用。在 <code>sys/ptrace.h</code> 中，<code>ptrace</code> 是如下定義的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>long ptrace(enum __ptrace_request request, pid_t pid,</span></span>
<span class="line"><span>                 void *addr, void *data);</span></span></code></pre></div><p>第一個參數是 <code>_request_</code>，這是許多預定義的 <code>PTRACE_*</code> 常量中的一個。第二個參數為請求分配進程 ID。第三個與第四個參數是地址與數據指針，用於操作內存。上面代碼段中的 <code>ptrace</code> 調用發起了 <code>PTRACE_TRACEME</code> 請求，這意味着該子進程請求系統內核讓其父進程跟蹤自己。幫助頁面上對於 request 的描述很清楚：</p><blockquote><p>意味着該進程被其父進程跟蹤。任何傳遞給該進程的信號（除了 <code>SIGKILL</code>）都將通過 <code>wait()</code> 方法阻塞該進程並通知其父進程。<strong>此外，該進程的之後所有調用 <code>exec()</code> 動作都將導致 <code>SIGTRAP</code> 信號發送到此進程上，使得父進程在新的程序執行前得到取得控制權的機會</strong>。如果一個進程並不需要它的的父進程跟蹤它，那麼這個進程不應該發送這個請求。（pid、addr 與 data 暫且不提）</p></blockquote><p>我高亮了這個例子中我們需要注意的部分。在 <code>ptrace</code> 調用後，<code>run_target</code> 接下來要做的就是通過 <code>execl</code> 傳參並調用。如同高亮部分所説明，這將導致系統內核在 <code>execl</code> 創建進程前暫時停止，並向父進程發送信號。</p><p>是時候看看父進程做什麼了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_debugger(pid_t child_pid)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int wait_status;</span></span>
<span class="line"><span>    unsigned icounter = 0;</span></span>
<span class="line"><span>    procmsg(&quot;debugger started\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Wait for child to stop on its first instruction */</span></span>
<span class="line"><span>    wait(&amp;wait_status);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (WIFSTOPPED(wait_status)) {</span></span>
<span class="line"><span>        icounter++;</span></span>
<span class="line"><span>        /* Make the child execute another instruction */</span></span>
<span class="line"><span>        if (ptrace(PTRACE_SINGLESTEP, child_pid, 0, 0) &lt; 0) {</span></span>
<span class="line"><span>            perror(&quot;ptrace&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* Wait for child to stop on its next instruction */</span></span>
<span class="line"><span>        wait(&amp;wait_status);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    procmsg(&quot;the child executed %u instructions\\n&quot;, icounter);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如前文所述，一旦子進程調用了 <code>exec</code>，子進程會停止並被髮送 <code>SIGTRAP</code> 信號。父進程會等待該過程的發生並在第一個 <code>wait()</code> 處等待。一旦上述事件發生了，<code>wait()</code> 便會返回，由於子進程停止了父進程便會收到信號（如果子進程由於信號的發送停止了，<code>WIFSTOPPED</code> 就會返回 <code>true</code>）。</p><p>父進程接下來的動作就是整篇文章最需要關注的部分了。父進程會將 <code>PTRACE_SINGLESTEP</code> 與子進程 ID 作為參數調用 <code>ptrace</code> 方法。這就會告訴操作系統，“請恢復子進程，但在它執行下一條指令前阻塞”。週而復始地，父進程等待子進程阻塞，循環繼續。當 <code>wait()</code> 中傳出的信號不再是子進程的停止信號時，循環終止。在跟蹤器（父進程）運行期間，這將會是被跟蹤進程（子進程）傳遞給跟蹤器的終止信號（如果子進程終止 <code>WIFEXITED</code> 將返回 <code>true</code>）。</p><p><code>icounter</code> 存儲了子進程執行指令的次數。這麼看來我們小小的例子也完成了些有用的事情 - 在命令列中指定程序，它將執行該程序並記錄它從開始到結束所需要的 cpu 指令數量。接下來就讓我們這麼做吧。</p><h3 id="測試" tabindex="-1">測試 <a class="header-anchor" href="#測試" aria-label="Permalink to “測試”">​</a></h3><p>我編譯了下面這個簡單的程序並利用跟蹤器運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;Hello, world!\\n&quot;);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>令我驚訝的是，跟蹤器花了相當長的時間，並報告整個執行過程共有超過 100,000 條指令執行。僅僅是一條輸出語句？什麼造成了這種情況？答案很有趣（至少你同我一樣痴迷與機器/彙編語言）。Linux 的 gcc 默認會動態的將程序與 c 的運行時庫動態地鏈接。這就意味着任何程序運行前的第一件事是需要動態庫加載器去查找程序運行所需要的共享庫。這些代碼的數量很大 - 別忘了我們的跟蹤器要跟蹤每一條指令，不僅僅是主函數的，而是“整個進程中的指令”。</p><p>所以當我將測試程序使用靜態編譯時（通過比較，可執行文件會多出 500 KB 左右的大小，這部分是 C 運行時庫的靜態鏈接），跟蹤器提示只有大概 7000 條指令被執行。這個數目仍然不小，但是考慮到在主函數執行前 libc 的初始化以及主函數執行後的清除代碼，這個數目已經是相當不錯了。此外，<code>printf</code> 也是一個複雜的函數。</p><p>仍然不滿意的話，我需要的是“可以測試”的東西 - 例如可以完整記錄每一個指令運行的程序執行過程。這當然可以通過彙編代碼完成。所以我找到了這個版本的 “Hello, world!” 並編譯了它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>section    .text</span></span>
<span class="line"><span>    ; The _start symbol must be declared for the linker (ld)</span></span>
<span class="line"><span>    global _start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_start:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ; Prepare arguments for the sys_write system call:</span></span>
<span class="line"><span>    ;   - eax: system call number (sys_write)</span></span>
<span class="line"><span>    ;   - ebx: file descriptor (stdout)</span></span>
<span class="line"><span>    ;   - ecx: pointer to string</span></span>
<span class="line"><span>    ;   - edx: string length</span></span>
<span class="line"><span>    mov    edx, len</span></span>
<span class="line"><span>    mov    ecx, msg</span></span>
<span class="line"><span>    mov    ebx, 1</span></span>
<span class="line"><span>    mov    eax, 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ; Execute the sys_write system call</span></span>
<span class="line"><span>    int    0x80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ; Execute sys_exit</span></span>
<span class="line"><span>    mov    eax, 1</span></span>
<span class="line"><span>    int    0x80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section   .data</span></span>
<span class="line"><span>msg db    &#39;Hello, world!&#39;, 0xa</span></span>
<span class="line"><span>len equ    $ - msg</span></span></code></pre></div><p>當然，現在跟蹤器提示 7 條指令被執行了，這樣一來很容易區分它們。</p><h3 id="深入指令流" tabindex="-1">深入指令流 <a class="header-anchor" href="#深入指令流" aria-label="Permalink to “深入指令流”">​</a></h3><p>上面那個彙編語言編寫的程序使得我可以向你介紹 <code>ptrace</code> 的另外一個強大的用途 - 詳細顯示被跟蹤進程的狀態。下面是 <code>run_debugger</code> 函數的另一個版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_debugger(pid_t child_pid)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int wait_status;</span></span>
<span class="line"><span>    unsigned icounter = 0;</span></span>
<span class="line"><span>    procmsg(&quot;debugger started\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Wait for child to stop on its first instruction */</span></span>
<span class="line"><span>    wait(&amp;wait_status);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while (WIFSTOPPED(wait_status)) {</span></span>
<span class="line"><span>        icounter++;</span></span>
<span class="line"><span>        struct user_regs_struct regs;</span></span>
<span class="line"><span>        ptrace(PTRACE_GETREGS, child_pid, 0, &amp;regs);</span></span>
<span class="line"><span>        unsigned instr = ptrace(PTRACE_PEEKTEXT, child_pid, regs.eip, 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        procmsg(&quot;icounter = %u.  EIP = 0x%08x.  instr = 0x%08x\\n&quot;,</span></span>
<span class="line"><span>                    icounter, regs.eip, instr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* Make the child execute another instruction */</span></span>
<span class="line"><span>        if (ptrace(PTRACE_SINGLESTEP, child_pid, 0, 0) &lt; 0) {</span></span>
<span class="line"><span>            perror(&quot;ptrace&quot;);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* Wait for child to stop on its next instruction */</span></span>
<span class="line"><span>        wait(&amp;wait_status);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    procmsg(&quot;the child executed %u instructions\\n&quot;, icounter);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>不同僅僅存在於 <code>while</code> 循環的開始幾行。這個版本里增加了兩個新的 <code>ptrace</code> 調用。第一條將進程的寄存器值讀取進了一個結構體中。 <code>sys/user.h</code> 定義有 <code>user_regs_struct</code>。如果你查看頭文件，頭部的註釋這麼寫到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* 這個文件只為了 GDB 而創建</span></span>
<span class="line"><span>   不用詳細的閲讀.如果你不知道你在幹嘛，</span></span>
<span class="line"><span>   不要在除了 GDB 以外的任何地方使用此文件  */</span></span></code></pre></div><p>不知道你做何感想，但這讓我覺得我們找對地方了。回到例子中，一旦我們在 <code>regs</code> 變量中取得了寄存器的值，我們就可以通過將 <code>PTRACE_PEEKTEXT</code> 作為參數、 <code>regs.eip</code>（x86 上的擴展指令指針）作為地址，調用 <code>ptrace</code> ，讀取當前進程的當前指令（警告：如同我上面所説，文章很大程度上是平台相關的。我簡化了一些設定 - 例如，x86 指令集不需要調整到 4 字節，我的32位 Ubuntu unsigned int 是 4 字節。事實上，許多平台都不需要。從內存中讀取指令需要預先安裝完整的反彙編器。我們這裏沒有，但實際的調試器是有的）。下面是新跟蹤器所展示出的調試效果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ simple_tracer traced_helloworld</span></span>
<span class="line"><span>[5700] debugger started</span></span>
<span class="line"><span>[5701] target started. will run &#39;traced_helloworld&#39;</span></span>
<span class="line"><span>[5700] icounter = 1\\.  EIP = 0x08048080\\.  instr = 0x00000eba</span></span>
<span class="line"><span>[5700] icounter = 2\\.  EIP = 0x08048085\\.  instr = 0x0490a0b9</span></span>
<span class="line"><span>[5700] icounter = 3\\.  EIP = 0x0804808a.  instr = 0x000001bb</span></span>
<span class="line"><span>[5700] icounter = 4\\.  EIP = 0x0804808f.  instr = 0x000004b8</span></span>
<span class="line"><span>[5700] icounter = 5\\.  EIP = 0x08048094\\.  instr = 0x01b880cd</span></span>
<span class="line"><span>Hello, world!</span></span>
<span class="line"><span>[5700] icounter = 6\\.  EIP = 0x08048096\\.  instr = 0x000001b8</span></span>
<span class="line"><span>[5700] icounter = 7\\.  EIP = 0x0804809b.  instr = 0x000080cd</span></span>
<span class="line"><span>[5700] the child executed 7 instructions</span></span></code></pre></div><p>現在，除了 <code>icounter</code>，我們也可以觀察到指令指針與它每一步所指向的指令。怎麼來判斷這個結果對不對呢？使用 <code>objdump -d</code> 處理可執行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ objdump -d traced_helloworld</span></span>
<span class="line"><span></span></span>
<span class="line"><span>traced_helloworld:     file format elf32-i386</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disassembly of section .text:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>08048080 &lt;.text&gt;:</span></span>
<span class="line"><span> 8048080:     ba 0e 00 00 00          mov    $0xe,%edx</span></span>
<span class="line"><span> 8048085:     b9 a0 90 04 08          mov    $0x80490a0,%ecx</span></span>
<span class="line"><span> 804808a:     bb 01 00 00 00          mov    $0x1,%ebx</span></span>
<span class="line"><span> 804808f:     b8 04 00 00 00          mov    $0x4,%eax</span></span>
<span class="line"><span> 8048094:     cd 80                   int    $0x80</span></span>
<span class="line"><span> 8048096:     b8 01 00 00 00          mov    $0x1,%eax</span></span>
<span class="line"><span> 804809b:     cd 80                   int    $0x80</span></span></code></pre></div><p>這個結果和我們跟蹤器的結果就很容易比較了。</p><p>###　將跟蹤器關聯到正在運行的進程</p><p>如你所知，調試器也能關聯到已經運行的進程。現在你應該不會驚訝，<code>ptrace</code> 通過以 <code>PTRACE_ATTACH</code> 為參數調用也可以完成這個過程。這裏我不會展示示例代碼，通過上文的示例代碼應該很容易實現這個過程。出於學習目的，這裏使用的方法更簡便（因為我們在子進程剛開始就可以讓它停止）。</p><h3 id="代碼" tabindex="-1">代碼 <a class="header-anchor" href="#代碼" aria-label="Permalink to “代碼”">​</a></h3>`,41)),p("p",null,[s[4]||(s[4]=n("上文中的簡單的跟蹤器（更高級的，可以打印指令的版本）的完整c源代碼可以在",-1)),e(a,{href:"https://github.com/eliben/code-for-blog/blob/master/2011/simple_tracer.c"},{default:i(()=>[...s[3]||(s[3]=[n("這裏",-1)])]),_:1}),s[5]||(s[5]=n("找到。它是通過 4.4 版本的 gcc 以 ",-1)),s[6]||(s[6]=p("code",null,"-Wall -pedantic --std=c99",-1)),s[7]||(s[7]=n(" 編譯的。",-1))]),s[25]||(s[25]=l('<h3 id="結論與計劃" tabindex="-1">結論與計劃 <a class="header-anchor" href="#結論與計劃" aria-label="Permalink to “結論與計劃”">​</a></h3><p>誠然，這篇文章並沒有涉及很多內容 - 我們距離親手完成一個實際的調試器還有很長的路要走。但我希望這篇文章至少可以使得調試這件事少一些神秘感。<code>ptrace</code> 是功能多樣的系統調用，我們目前只展示了其中的一小部分。</p><p>單步調試代碼很有用，但也只是在一定程度上有用。上面我通過 C 的 “Hello World!” 做了示例。為了執行主函數，可能需要上萬行代碼來初始化 C 的運行環境。這並不是很方便。最理想的是在 <code>main</code> 函數入口處放置斷點並從斷點處開始分步執行。為此，在這個系列的下一篇，我打算展示怎麼實現斷點。</p><h3 id="參考" tabindex="-1">參考 <a class="header-anchor" href="#參考" aria-label="Permalink to “參考”">​</a></h3><p>撰寫此文時參考瞭如下文章</p>',5)),p("ul",null,[p("li",null,[e(a,{href:"http://www.linuxjournal.com/article/6100?page=0,1"},{default:i(()=>[...s[8]||(s[8]=[n("Playing with ptrace, Part I",-1)])]),_:1})]),p("li",null,[e(a,{href:"http://www.alexonlinux.com/how-debugger-works"},{default:i(()=>[...s[9]||(s[9]=[n("How debugger works",-1)])]),_:1})])]),s[26]||(s[26]=p("hr",null,null,-1)),p("p",null,[s[11]||(s[11]=n("via: ",-1)),e(a,{href:"http://eli.thegreenplace.net/2011/01/23/how-debuggers-work-part-1"},{default:i(()=>[...s[10]||(s[10]=[n("http://eli.thegreenplace.net/2011/01/23/how-debuggers-work-part-1",-1)])]),_:1})]),p("p",null,[s[15]||(s[15]=n("作者：",-1)),e(a,{href:"http://eli.thegreenplace.net/"},{default:i(()=>[...s[12]||(s[12]=[n("Eli Bendersky",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),e(a,{href:"https://github.com/YYforymj"},{default:i(()=>[...s[13]||(s[13]=[n("YYforymj",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[20]||(s[20]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const T=t(d,[["render",u]]);export{_ as __pageData,T as default};
