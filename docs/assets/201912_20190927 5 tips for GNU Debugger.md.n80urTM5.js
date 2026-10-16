import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"5 个鲜为人知 GNU 调试器（GDB）技巧 | LCTT x X-CMD","titleTemplate":false,"description":"5 个鲜为人知 GNU 调试器（GDB）技巧 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"5 个鲜为人知 GNU 调试器（GDB）技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"5 个鲜为人知 GNU 调试器（GDB）技巧 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20190927 5 tips for GNU Debugger","title":"5 个鲜为人知 GNU 调试器（GDB）技巧","tag":"201912","desc":""},"relativePath":"201912/20190927 5 tips for GNU Debugger.md","filePath":"[post].md"}'),g={name:"201912/20190927 5 tips for GNU Debugger.md"};function c(u,s,b,m,h,f){const p=o("Link");return d(),r("div",null,[s[30]||(s[30]=a("h1",{id:"_5-个鲜为人知-gnu-调试器-gdb-技巧",tabindex:"-1"},[n("5 个鲜为人知 GNU 调试器（GDB）技巧 "),a("a",{class:"header-anchor",href:"#_5-个鲜为人知-gnu-调试器-gdb-技巧","aria-label":"Permalink to “5 个鲜为人知 GNU 调试器（GDB）技巧”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"了解如何使用 gdb 的一些鲜为人知的功能来检查和修复代码。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201912/05/203701ss8onfvpsnvnsnn5.jpg",alt:""})],-1)),a("p",null,[e(p,{href:"https://www.gnu.org/software/gdb/"},{default:i(()=>[...s[0]||(s[0]=[n("GNU 调试器",-1)])]),_:1}),s[1]||(s[1]=n("（",-1)),s[2]||(s[2]=a("code",null,"gdb",-1)),s[3]||(s[3]=n("）是一种宝贵的工具，可用于在开发程序时检查正在运行的进程并解决问题。",-1))]),s[33]||(s[33]=l(`<p>你可以在特定位置（按函数名称、行号等）设置断点、启用和禁用这些断点、显示和更改变量值，并执行所有调试器希望执行的所有标准操作。但是它还有许多其它你可能没有尝试过的功能。这里有五个你可以尝试一下。</p><h3 id="条件断点" tabindex="-1">条件断点 <a class="header-anchor" href="#条件断点" aria-label="Permalink to “条件断点”">​</a></h3><p>设置断点是学习使用 GNU 调试器的第一步。程序在达到断点时停止，你可以运行 <code>gdb</code> 的命令对其进行检查或更改变量，然后再允许该程序继续运行。</p><p>例如，你可能知道一个经常调用的函数有时会崩溃，但仅当它获得某个参数值时才会崩溃。你可以在该函数的开始处设置一个断点并运行程序。每次碰到该断点时都会显示函数参数，并且如果未提供触发崩溃的参数值，则可以继续操作，直到再次调用该函数为止。当这个惹了麻烦的参数触发崩溃时，你可以单步执行代码以查看问题所在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) break sometimes_crashes</span></span>
<span class="line"><span>Breakpoint 1 at 0x40110e: file prog.c, line 5.</span></span>
<span class="line"><span>(gdb) run</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Breakpoint 1, sometimes_crashes (f=0x7fffffffd1bc) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Breakpoint 1, sometimes_crashes (f=0x7fffffffd1bc) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>(gdb) continue</span></span></code></pre></div><p>为了使此方法更具可重复性，你可以在你感兴趣的特定调用之前计算该函数被调用的次数，并在该断点处设置一个计数器（例如，<code>continue 30</code> 以使其在接下来的 29 次到达该断点时忽略它）。</p><p>但是断点真正强大的地方在于它们在运行时评估表达式的能力，这使你可以自动化这种测试。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>break [LOCATION] if CONDITION</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(gdb) break sometimes_crashes if !f</span></span>
<span class="line"><span>Breakpoint 1 at 0x401132: file prog.c, line 5.</span></span>
<span class="line"><span>(gdb) run</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Breakpoint 1, sometimes_crashes (f=0x0) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>条件断点使你不必让 <code>gdb</code> 每次调用该函数时都去问你要做什么，而是让条件断点仅在特定表达式的值为 <code>true</code> 时才使 <code>gdb</code> 停止在该位置。如果执行到达条件断点的位置，但表达式的计算结果为 <code>false</code>，调试器会自动使程序继续运行，而无需询问用户该怎么做。</p><h3 id="断点命令" tabindex="-1">断点命令 <a class="header-anchor" href="#断点命令" aria-label="Permalink to “断点命令”">​</a></h3><p>GNU 调试器中断点的一个甚至更复杂的功能是能够编写对到达断点的响应的脚本。断点命令使你可以编写一系列 GNU 调试器命令，以在到达该断点时运行。</p><p>我们可以使用它来规避在 <code>sometimes_crashes</code> 函数中我们已知的错误，并在它提供空指针时使其无害地从该函数返回。</p><p>我们可以使用 <code>silent</code> 作为第一行，以更好地控制输出。否则，每次命中断点时，即使在运行断点命令之前，也会显示堆栈帧。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) break sometimes_crashes</span></span>
<span class="line"><span>Breakpoint 1 at 0x401132: file prog.c, line 5.</span></span>
<span class="line"><span>(gdb) commands 1</span></span>
<span class="line"><span>Type commands for breakpoint(s) 1, one per line.</span></span>
<span class="line"><span>End with a line saying just &quot;end&quot;.</span></span>
<span class="line"><span>&gt;silent</span></span>
<span class="line"><span>&gt;if !f</span></span>
<span class="line"><span> &gt;frame</span></span>
<span class="line"><span> &gt;printf &quot;Skipping call\\n&quot;</span></span>
<span class="line"><span> &gt;return 0</span></span>
<span class="line"><span> &gt;continue</span></span>
<span class="line"><span> &gt;end</span></span>
<span class="line"><span>&gt;printf &quot;Continuing\\n&quot;</span></span>
<span class="line"><span>&gt;continue</span></span>
<span class="line"><span>&gt;end</span></span>
<span class="line"><span>(gdb) run</span></span>
<span class="line"><span>Starting program: /home/twaugh/Documents/GDB/prog</span></span>
<span class="line"><span>warning: Loadable section &quot;.note.gnu.property&quot; outside of ELF segments</span></span>
<span class="line"><span>Continuing</span></span>
<span class="line"><span>Continuing</span></span>
<span class="line"><span>Continuing</span></span>
<span class="line"><span>#0  sometimes_crashes (f=0x0) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>Skipping call</span></span>
<span class="line"><span>[Inferior 1 (process 9373) exited normally]</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><h3 id="转储二进制内存" tabindex="-1">转储二进制内存 <a class="header-anchor" href="#转储二进制内存" aria-label="Permalink to “转储二进制内存”">​</a></h3><p>GNU 调试器内置支持使用 <code>x</code> 命令以各种格式检查内存，包括八进制、十六进制等。但是我喜欢并排看到两种格式：左侧为十六进制字节，右侧为相同字节表示的 ASCII 字符。</p>`,16)),a("p",null,[s[5]||(s[5]=n("当我想逐字节查看文件的内容时，经常使用 ",-1)),s[6]||(s[6]=a("code",null,"hexdump -C",-1)),s[7]||(s[7]=n("（",-1)),s[8]||(s[8]=a("code",null,"hexdump",-1)),s[9]||(s[9]=n(" 来自 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Util-linux"},{default:i(()=>[...s[4]||(s[4]=[n("util-linux",-1)])]),_:1}),s[10]||(s[10]=n(" 软件包）。这是 ",-1)),s[11]||(s[11]=a("code",null,"gdb",-1)),s[12]||(s[12]=n(" 的 ",-1)),s[13]||(s[13]=a("code",null,"x",-1)),s[14]||(s[14]=n(" 命令显示的十六进制字节：",-1))]),s[34]||(s[34]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) x/33xb mydata</span></span>
<span class="line"><span>0x404040 &lt;mydata&gt;   :    0x02    0x01    0x00    0x02    0x00    0x00    0x00    0x01</span></span>
<span class="line"><span>0x404048 &lt;mydata+8&gt; :    0x01    0x47    0x00    0x12    0x61    0x74    0x74    0x72</span></span>
<span class="line"><span>0x404050 &lt;mydata+16&gt;:    0x69    0x62    0x75    0x74    0x65    0x73    0x2d    0x63</span></span>
<span class="line"><span>0x404058 &lt;mydata+24&gt;:    0x68    0x61    0x72    0x73    0x65    0x75    0x00    0x05</span></span>
<span class="line"><span>0x404060 &lt;mydata+32&gt;:    0x00</span></span></code></pre></div><p>如果你想让 <code>gdb</code> 像 <code>hexdump</code> 一样显示内存怎么办？这是可以的，实际上，你可以将这种方法用于你喜欢的任何格式。</p><p>通过使用 <code>dump</code> 命令以将字节存储在文件中，结合 <code>shell</code> 命令以在文件上运行 <code>hexdump</code> 以及<code>define</code> 命令，我们可以创建自己的新的 <code>hexdump</code> 命令来使用 <code>hexdump</code> 显示内存内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) define hexdump</span></span>
<span class="line"><span>Type commands for definition of &quot;hexdump&quot;.</span></span>
<span class="line"><span>End with a line saying just &quot;end&quot;.</span></span>
<span class="line"><span>&gt;dump binary memory /tmp/dump.bin $arg0 $arg0+$arg1</span></span>
<span class="line"><span>&gt;shell hexdump -C /tmp/dump.bin</span></span>
<span class="line"><span>&gt;end</span></span></code></pre></div><p>这些命令甚至可以放在 <code>~/.gdbinit</code> 文件中，以永久定义 <code>hexdump</code> 命令。以下是它运行的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) hexdump mydata sizeof(mydata)</span></span>
<span class="line"><span>00000000  02 01 00 02 00 00 00 01  01 47 00 12 61 74 74 72  |.........G..attr|</span></span>
<span class="line"><span>00000010  69 62 75 74 65 73 2d 63  68 61 72 73 65 75 00 05  |ibutes-charseu..|</span></span>
<span class="line"><span>00000020  00                                                |.|</span></span>
<span class="line"><span>00000021</span></span></code></pre></div><h3 id="行内反汇编" tabindex="-1">行内反汇编 <a class="header-anchor" href="#行内反汇编" aria-label="Permalink to “行内反汇编”">​</a></h3><p>有时你想更多地了解导致崩溃的原因，而源代码还不够。你想查看在 CPU 指令级别发生了什么。</p><p><code>disassemble</code> 命令可让你查看实现函数的 CPU 指令。但是有时输出可能很难跟踪。通常，我想查看与该函数源代码的特定部分相对应的指令。为此，请使用 <code>/s</code> 修饰符在反汇编中包括源代码行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) disassemble/s main</span></span>
<span class="line"><span>Dump of assembler code for function main:</span></span>
<span class="line"><span>prog.c:</span></span>
<span class="line"><span>11    {</span></span>
<span class="line"><span>   0x0000000000401158 &lt;+0&gt;:    push   %rbp</span></span>
<span class="line"><span>   0x0000000000401159 &lt;+1&gt;:    mov      %rsp,%rbp</span></span>
<span class="line"><span>   0x000000000040115c &lt;+4&gt;:    sub      $0x10,%rsp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12      int n = 0;</span></span>
<span class="line"><span>   0x0000000000401160 &lt;+8&gt;:    movl   $0x0,-0x4(%rbp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>13      sometimes_crashes(&amp;n);</span></span>
<span class="line"><span>   0x0000000000401167 &lt;+15&gt;:    lea     -0x4(%rbp),%rax</span></span>
<span class="line"><span>   0x000000000040116b &lt;+19&gt;:    mov     %rax,%rdi</span></span>
<span class="line"><span>   0x000000000040116e &lt;+22&gt;:    callq  0x401126 &lt;sometimes_crashes&gt;</span></span>
<span class="line"><span>[...snipped...]</span></span></code></pre></div><p>这里，用 <code>info</code> 寄存器查看所有 CPU 寄存器的当前值，以及用如 <code>stepi</code> 这样命令一次执行一条指令，可以使你对程序有了更详细的了解。</p><h3 id="反向调试" tabindex="-1">反向调试 <a class="header-anchor" href="#反向调试" aria-label="Permalink to “反向调试”">​</a></h3><p>有时，你希望自己可以逆转时间。想象一下，你已经达到了变量的监视点。监视点像是一个断点，但不是在程序中的某个位置设置，而是在表达式上设置（使用 <code>watch</code> 命令）。每当表达式的值更改时，执行就会停止，并且调试器将获得控制权。</p><p>想象一下你已经达到了这个监视点，并且由该变量使用的内存已更改了值。事实证明，这可能是由更早发生的事情引起的。例如，内存已释放，现在正在重新使用。但是它是何时何地被释放的呢？</p><p>GNU 调试器甚至可以解决此问题，因为你可以反向运行程序！</p><p>它通过在每个步骤中仔细记录程序的状态来实现此目的，以便可以恢复以前记录的状态，从而产生时间倒流的错觉。</p><p>要启用此状态记录，请使用 <code>target record-full</code> 命令。然后，你可以使用一些听起来不太可行的命令，例如：</p><ul><li><code>reverse-step</code>，倒退到上一个源代码行</li><li><code>*reverse-next</code>，它倒退到上一个源代码行，向后跳过函数调用</li><li><code>reverse-finish</code>，倒退到当前函数即将被调用的时刻</li><li><code>reverse-continue</code>，它返回到程序中的先前状态，该状态将（现在）触发断点（或其他导致断点停止的状态）</li></ul><p>这是运行中的反向调试的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b main</span></span>
<span class="line"><span>Breakpoint 1 at 0x401160: file prog.c, line 12.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/twaugh/Documents/GDB/prog</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Breakpoint 1, main () at prog.c:12</span></span>
<span class="line"><span>12      int n = 0;</span></span>
<span class="line"><span>(gdb) target record-full</span></span>
<span class="line"><span>(gdb) c</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Program received signal SIGSEGV, Segmentation fault.</span></span>
<span class="line"><span>0x0000000000401154 in sometimes_crashes (f=0x0) at prog.c:7</span></span>
<span class="line"><span>7      return *f;</span></span>
<span class="line"><span>(gdb) reverse-finish</span></span>
<span class="line"><span>Run back to call of #0  0x0000000000401154 in sometimes_crashes (f=0x0)</span></span>
<span class="line"><span>        at prog.c:7</span></span>
<span class="line"><span>0x0000000000401190 in main () at prog.c:16</span></span>
<span class="line"><span>16      sometimes_crashes(0);</span></span></code></pre></div><p>这些只是 GNU 调试器可以做的一些有用的事情。还有更多有待发现。你最喜欢 <code>gdb</code> 的哪个隐藏的、鲜为人知或令人吃惊的功能？请在评论中分享。</p><hr>`,22)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/9/tips-gnu-debugger"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/9/tips-gnu-debugger",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/twaugh"},{default:i(()=>[...s[17]||(s[17]=[n("Tim Waugh",-1)])]),_:1}),s[22]||(s[22]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1}),s[24]||(s[24]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const y=t(g,[["render",c]]);export{C as __pageData,y as default};
