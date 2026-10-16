import{_ as t,a0 as r,w as c,s as o,ao as l,I as p,x as n,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"调试器的工作原理（一）：基础篇 | LCTT x X-CMD","titleTemplate":false,"description":"调试器的工作原理（一）：基础篇 | LCTT (201704) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"调试器的工作原理（一）：基础篇 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"调试器的工作原理（一）：基础篇 | LCTT (201704) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201704/20110123 How debuggers work Part 1 - Basics","title":"调试器的工作原理（一）：基础篇","tag":"201704","desc":""},"relativePath":"201704/20110123 How debuggers work Part 1 - Basics.md","filePath":"[post].md"}'),d={name:"201704/20110123 How debuggers work Part 1 - Basics.md"};function u(g,s,h,b,k,x){const a=r("Link");return c(),o("div",null,[s[23]||(s[23]=l('<h1 id="调试器的工作原理-一-基础篇" tabindex="-1">调试器的工作原理（一）：基础篇 <a class="header-anchor" href="#调试器的工作原理-一-基础篇" aria-label="Permalink to “调试器的工作原理（一）：基础篇”">​</a></h1><p>这是调试器工作原理系列文章的第一篇，我不确定这个系列会有多少篇文章，会涉及多少话题，但我仍会从这篇基础开始。</p><h3 id="这一篇会讲什么" tabindex="-1">这一篇会讲什么 <a class="header-anchor" href="#这一篇会讲什么" aria-label="Permalink to “这一篇会讲什么”">​</a></h3><p>我将为大家展示 Linux 中调试器的主要构成模块 - <code>ptrace</code> 系统调用。这篇文章所有代码都是基于 32 位 Ubuntu 操作系统。值得注意的是，尽管这些代码是平台相关的，将它们移植到其它平台应该并不困难。</p><h3 id="缘由" tabindex="-1">缘由 <a class="header-anchor" href="#缘由" aria-label="Permalink to “缘由”">​</a></h3><p>为了理解我们要做什么，让我们先考虑下调试器为了完成调试都需要什么资源。调试器可以开始一个进程并调试这个进程，又或者将自己同某个已经存在的进程关联起来。调试器能够单步执行代码，设定断点并且将程序执行到断点，检查变量的值并追踪堆栈。许多调试器有着更高级的特性，例如在调试器的地址空间内执行表达式或者调用函数，甚至可以在进程执行过程中改变代码并观察效果。</p>',6)),p("p",null,[s[1]||(s[1]=n("尽管现代的调试器都十分的复杂（我没有检查，但我确信 gdb 的代码行数至少有六位数），但它们的工作的原理却是十分的简单。调试器的基础是操作系统与编译器 / 链接器提供的一些基础服务，其余的部分只是",-1)),e(a,{href:"http://en.wikipedia.org/wiki/Small_matter_of_programming"},{default:i(()=>[...s[0]||(s[0]=[n("简单的编程",-1)])]),_:1}),s[2]||(s[2]=n("而已。",-1))]),s[24]||(s[24]=l(`<h3 id="linux-的调试-ptrace" tabindex="-1">Linux 的调试 - ptrace <a class="header-anchor" href="#linux-的调试-ptrace" aria-label="Permalink to “Linux 的调试 - ptrace”">​</a></h3><p>Linux 调试器中的瑞士军刀便是 <code>ptrace</code> 系统调用（使用 man 2 ptrace 命令可以了解更多）。这是一种复杂却强大的工具，可以允许一个进程控制另外一个进程并从<ruby>内部替换<rt>Peek and poke</rt></ruby>被控制进程的内核镜像的值（Peek and poke 在系统编程中是很知名的叫法，指的是直接读写内存内容）。</p><p>接下来会深入分析。</p><h3 id="执行进程的代码" tabindex="-1">执行进程的代码 <a class="header-anchor" href="#执行进程的代码" aria-label="Permalink to “执行进程的代码”">​</a></h3><p>我将编写一个示例，实现一个在“跟踪”模式下运行的进程。在这个模式下，我们将单步执行进程的代码，就像机器码（汇编代码）被 CPU 执行时一样。我将分段展示、讲解示例代码，在文章的末尾也有完整 c 文件的下载链接，你可以编译、执行或者随心所欲的更改。</p><p>更进一步的计划是实现一段代码，这段代码可以创建可执行用户自定义命令的子进程，同时父进程可以跟踪子进程。首先是主函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, char** argv)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>看起来相当的简单：我们用 <code>fork</code> 创建了一个新的子进程（这篇文章假定读者有一定的 Unix/Linux 编程经验。我假定你知道或至少了解 fork、exec 族函数与 Unix 信号）。if 语句的分支执行子进程（这里称之为 “target”），<code>else if</code> 的分支执行父进程（这里称之为 “debugger”）。</p><p>下面是 target 进程的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_target(const char* programname)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这段代码中最值得注意的是 <code>ptrace</code> 调用。在 <code>sys/ptrace.h</code> 中，<code>ptrace</code> 是如下定义的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>long ptrace(enum __ptrace_request request, pid_t pid,</span></span>
<span class="line"><span>                 void *addr, void *data);</span></span></code></pre></div><p>第一个参数是 <code>_request_</code>，这是许多预定义的 <code>PTRACE_*</code> 常量中的一个。第二个参数为请求分配进程 ID。第三个与第四个参数是地址与数据指针，用于操作内存。上面代码段中的 <code>ptrace</code> 调用发起了 <code>PTRACE_TRACEME</code> 请求，这意味着该子进程请求系统内核让其父进程跟踪自己。帮助页面上对于 request 的描述很清楚：</p><blockquote><p>意味着该进程被其父进程跟踪。任何传递给该进程的信号（除了 <code>SIGKILL</code>）都将通过 <code>wait()</code> 方法阻塞该进程并通知其父进程。<strong>此外，该进程的之后所有调用 <code>exec()</code> 动作都将导致 <code>SIGTRAP</code> 信号发送到此进程上，使得父进程在新的程序执行前得到取得控制权的机会</strong>。如果一个进程并不需要它的的父进程跟踪它，那么这个进程不应该发送这个请求。（pid、addr 与 data 暂且不提）</p></blockquote><p>我高亮了这个例子中我们需要注意的部分。在 <code>ptrace</code> 调用后，<code>run_target</code> 接下来要做的就是通过 <code>execl</code> 传参并调用。如同高亮部分所说明，这将导致系统内核在 <code>execl</code> 创建进程前暂时停止，并向父进程发送信号。</p><p>是时候看看父进程做什么了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_debugger(pid_t child_pid)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>如前文所述，一旦子进程调用了 <code>exec</code>，子进程会停止并被发送 <code>SIGTRAP</code> 信号。父进程会等待该过程的发生并在第一个 <code>wait()</code> 处等待。一旦上述事件发生了，<code>wait()</code> 便会返回，由于子进程停止了父进程便会收到信号（如果子进程由于信号的发送停止了，<code>WIFSTOPPED</code> 就会返回 <code>true</code>）。</p><p>父进程接下来的动作就是整篇文章最需要关注的部分了。父进程会将 <code>PTRACE_SINGLESTEP</code> 与子进程 ID 作为参数调用 <code>ptrace</code> 方法。这就会告诉操作系统，“请恢复子进程，但在它执行下一条指令前阻塞”。周而复始地，父进程等待子进程阻塞，循环继续。当 <code>wait()</code> 中传出的信号不再是子进程的停止信号时，循环终止。在跟踪器（父进程）运行期间，这将会是被跟踪进程（子进程）传递给跟踪器的终止信号（如果子进程终止 <code>WIFEXITED</code> 将返回 <code>true</code>）。</p><p><code>icounter</code> 存储了子进程执行指令的次数。这么看来我们小小的例子也完成了些有用的事情 - 在命令行中指定程序，它将执行该程序并记录它从开始到结束所需要的 cpu 指令数量。接下来就让我们这么做吧。</p><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to “测试”">​</a></h3><p>我编译了下面这个简单的程序并利用跟踪器运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;Hello, world!\\n&quot;);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>令我惊讶的是，跟踪器花了相当长的时间，并报告整个执行过程共有超过 100,000 条指令执行。仅仅是一条输出语句？什么造成了这种情况？答案很有趣（至少你同我一样痴迷与机器/汇编语言）。Linux 的 gcc 默认会动态的将程序与 c 的运行时库动态地链接。这就意味着任何程序运行前的第一件事是需要动态库加载器去查找程序运行所需要的共享库。这些代码的数量很大 - 别忘了我们的跟踪器要跟踪每一条指令，不仅仅是主函数的，而是“整个进程中的指令”。</p><p>所以当我将测试程序使用静态编译时（通过比较，可执行文件会多出 500 KB 左右的大小，这部分是 C 运行时库的静态链接），跟踪器提示只有大概 7000 条指令被执行。这个数目仍然不小，但是考虑到在主函数执行前 libc 的初始化以及主函数执行后的清除代码，这个数目已经是相当不错了。此外，<code>printf</code> 也是一个复杂的函数。</p><p>仍然不满意的话，我需要的是“可以测试”的东西 - 例如可以完整记录每一个指令运行的程序执行过程。这当然可以通过汇编代码完成。所以我找到了这个版本的 “Hello, world!” 并编译了它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>section    .text</span></span>
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
<span class="line"><span>len equ    $ - msg</span></span></code></pre></div><p>当然，现在跟踪器提示 7 条指令被执行了，这样一来很容易区分它们。</p><h3 id="深入指令流" tabindex="-1">深入指令流 <a class="header-anchor" href="#深入指令流" aria-label="Permalink to “深入指令流”">​</a></h3><p>上面那个汇编语言编写的程序使得我可以向你介绍 <code>ptrace</code> 的另外一个强大的用途 - 详细显示被跟踪进程的状态。下面是 <code>run_debugger</code> 函数的另一个版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_debugger(pid_t child_pid)</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>不同仅仅存在于 <code>while</code> 循环的开始几行。这个版本里增加了两个新的 <code>ptrace</code> 调用。第一条将进程的寄存器值读取进了一个结构体中。 <code>sys/user.h</code> 定义有 <code>user_regs_struct</code>。如果你查看头文件，头部的注释这么写到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* 这个文件只为了 GDB 而创建</span></span>
<span class="line"><span>   不用详细的阅读.如果你不知道你在干嘛，</span></span>
<span class="line"><span>   不要在除了 GDB 以外的任何地方使用此文件  */</span></span></code></pre></div><p>不知道你做何感想，但这让我觉得我们找对地方了。回到例子中，一旦我们在 <code>regs</code> 变量中取得了寄存器的值，我们就可以通过将 <code>PTRACE_PEEKTEXT</code> 作为参数、 <code>regs.eip</code>（x86 上的扩展指令指针）作为地址，调用 <code>ptrace</code> ，读取当前进程的当前指令（警告：如同我上面所说，文章很大程度上是平台相关的。我简化了一些设定 - 例如，x86 指令集不需要调整到 4 字节，我的32位 Ubuntu unsigned int 是 4 字节。事实上，许多平台都不需要。从内存中读取指令需要预先安装完整的反汇编器。我们这里没有，但实际的调试器是有的）。下面是新跟踪器所展示出的调试效果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ simple_tracer traced_helloworld</span></span>
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
<span class="line"><span>[5700] the child executed 7 instructions</span></span></code></pre></div><p>现在，除了 <code>icounter</code>，我们也可以观察到指令指针与它每一步所指向的指令。怎么来判断这个结果对不对呢？使用 <code>objdump -d</code> 处理可执行文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ objdump -d traced_helloworld</span></span>
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
<span class="line"><span> 804809b:     cd 80                   int    $0x80</span></span></code></pre></div><p>这个结果和我们跟踪器的结果就很容易比较了。</p><p>###　将跟踪器关联到正在运行的进程</p><p>如你所知，调试器也能关联到已经运行的进程。现在你应该不会惊讶，<code>ptrace</code> 通过以 <code>PTRACE_ATTACH</code> 为参数调用也可以完成这个过程。这里我不会展示示例代码，通过上文的示例代码应该很容易实现这个过程。出于学习目的，这里使用的方法更简便（因为我们在子进程刚开始就可以让它停止）。</p><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to “代码”">​</a></h3>`,41)),p("p",null,[s[4]||(s[4]=n("上文中的简单的跟踪器（更高级的，可以打印指令的版本）的完整c源代码可以在",-1)),e(a,{href:"https://github.com/eliben/code-for-blog/blob/master/2011/simple_tracer.c"},{default:i(()=>[...s[3]||(s[3]=[n("这里",-1)])]),_:1}),s[5]||(s[5]=n("找到。它是通过 4.4 版本的 gcc 以 ",-1)),s[6]||(s[6]=p("code",null,"-Wall -pedantic --std=c99",-1)),s[7]||(s[7]=n(" 编译的。",-1))]),s[25]||(s[25]=l('<h3 id="结论与计划" tabindex="-1">结论与计划 <a class="header-anchor" href="#结论与计划" aria-label="Permalink to “结论与计划”">​</a></h3><p>诚然，这篇文章并没有涉及很多内容 - 我们距离亲手完成一个实际的调试器还有很长的路要走。但我希望这篇文章至少可以使得调试这件事少一些神秘感。<code>ptrace</code> 是功能多样的系统调用，我们目前只展示了其中的一小部分。</p><p>单步调试代码很有用，但也只是在一定程度上有用。上面我通过 C 的 “Hello World!” 做了示例。为了执行主函数，可能需要上万行代码来初始化 C 的运行环境。这并不是很方便。最理想的是在 <code>main</code> 函数入口处放置断点并从断点处开始分步执行。为此，在这个系列的下一篇，我打算展示怎么实现断点。</p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to “参考”">​</a></h3><p>撰写此文时参考了如下文章</p>',5)),p("ul",null,[p("li",null,[e(a,{href:"http://www.linuxjournal.com/article/6100?page=0,1"},{default:i(()=>[...s[8]||(s[8]=[n("Playing with ptrace, Part I",-1)])]),_:1})]),p("li",null,[e(a,{href:"http://www.alexonlinux.com/how-debugger-works"},{default:i(()=>[...s[9]||(s[9]=[n("How debugger works",-1)])]),_:1})])]),s[26]||(s[26]=p("hr",null,null,-1)),p("p",null,[s[11]||(s[11]=n("via: ",-1)),e(a,{href:"http://eli.thegreenplace.net/2011/01/23/how-debuggers-work-part-1"},{default:i(()=>[...s[10]||(s[10]=[n("http://eli.thegreenplace.net/2011/01/23/how-debuggers-work-part-1",-1)])]),_:1})]),p("p",null,[s[15]||(s[15]=n("作者：",-1)),e(a,{href:"http://eli.thegreenplace.net/"},{default:i(()=>[...s[12]||(s[12]=[n("Eli Bendersky",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),e(a,{href:"https://github.com/YYforymj"},{default:i(()=>[...s[13]||(s[13]=[n("YYforymj",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[20]||(s[20]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:i(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const T=t(d,[["render",u]]);export{_ as __pageData,T as default};
