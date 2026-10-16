import{_ as l,a0 as t,w as d,s as o,I as n,x as a,a1 as e,A as i,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"学习使用 GDB 调试代码 | LCTT x X-CMD","titleTemplate":false,"description":"学习使用 GDB 调试代码 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"学习使用 GDB 调试代码 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"学习使用 GDB 调试代码 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20210304 Learn to debug code with the GNU Debugger","title":"学习使用 GDB 调试代码","tag":"202103","desc":""},"relativePath":"202103/20210304 Learn to debug code with the GNU Debugger.md","filePath":"[post].md"}'),g={name:"202103/20210304 Learn to debug code with the GNU Debugger.md"};function c(b,s,h,u,k,f){const p=t("Link");return d(),o("div",null,[s[28]||(s[28]=n("h1",{id:"学习使用-gdb-调试代码",tabindex:"-1"},[a("学习使用 GDB 调试代码 "),n("a",{class:"header-anchor",href:"#学习使用-gdb-调试代码","aria-label":"Permalink to “学习使用 GDB 调试代码”"},"​")],-1)),s[29]||(s[29]=n("blockquote",null,[n("p",null,"使用 GNU 调试器来解决你的代码问题。")],-1)),s[30]||(s[30]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202103/14/210547k3q5lek8j9qspkks.jpg",alt:""})],-1)),s[31]||(s[31]=n("p",null,[a("GNU 调试器常以它的命令 "),n("code",null,"gdb"),a(" 称呼它，它是一个交互式的控制台，可以帮助你浏览源代码、分析执行的内容，其本质上是对错误的应用程序中出现的问题进行逆向工程。")],-1)),n("p",null,[s[2]||(s[2]=a("故障排除的麻烦在于它很复杂。",-1)),e(p,{href:"https://www.gnu.org/software/gdb/"},{default:i(()=>[...s[0]||(s[0]=[a("GNU 调试器",-1)])]),_:1}),s[3]||(s[3]=a(" 并不是一个特别复杂的应用程序，但如果你不知道从哪里开始，甚至不知道何时和为何你可能需要求助于 GDB 来进行故障排除，那么它可能会让人不知所措。如果你一直使用 ",-1)),s[4]||(s[4]=n("code",null,"print",-1)),s[5]||(s[5]=a("、",-1)),s[6]||(s[6]=n("code",null,"echo",-1)),s[7]||(s[7]=a(" 或 ",-1)),e(p,{href:"https://opensource.com/article/20/8/printf"},{default:i(()=>[...s[1]||(s[1]=[a("printf 语句",-1)])]),_:1}),s[8]||(s[8]=a("来调试你的代码，当你开始思考是不是还有更强大的东西时，那么本教程就是为你准备的。",-1))]),s[32]||(s[32]=n("h3",{id:"有错误的代码",tabindex:"-1"},[a("有错误的代码 "),n("a",{class:"header-anchor",href:"#有错误的代码","aria-label":"Permalink to “有错误的代码”"},"​")],-1)),n("p",null,[s[10]||(s[10]=a("要开始使用 GDB，你需要一些代码。这里有一个用 C++ 写的示例应用程序（如果你一般不使用 C++ 编写程序也没关系，在所有语言中原理都是一样的），其来源于 ",-1)),e(p,{href:"https://linux.cn/article-12985-1.html"},{default:i(()=>[...s[9]||(s[9]=[a("猜谜游戏系列",-1)])]),_:1}),s[11]||(s[11]=a(" 中的一个例子。",-1))]),s[33]||(s[33]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span><span> //srand</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span><span>  //printf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main () {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>srand (time(NULL));</span></span>
<span class="line"><span>int alpha = rand() % 8;</span></span>
<span class="line"><span>cout &lt;&lt; &quot;Hello world.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>int beta = 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf(&quot;alpha is set to is %s\\n&quot;, alpha);</span></span>
<span class="line"><span>printf(&quot;kiwi is set to is %s\\n&quot;, beta);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> return 0;</span></span>
<span class="line"><span>} // main</span></span></code></pre></div><p>这个代码示例中有一个 bug，但它确实可以编译（至少在 GCC 5 的时候）。如果你熟悉 C++，你可能已经看到了，但这是一个简单的问题，可以帮助新的 GDB 用户了解调试过程。编译并运行它就可以看到错误：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ g++ -o buggy example.cpp</span></span>
<span class="line"><span>$ ./buggy</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>Segmentation fault</span></span></code></pre></div><h3 id="排除段故障" tabindex="-1">排除段故障 <a class="header-anchor" href="#排除段故障" aria-label="Permalink to “排除段故障”">​</a></h3><p>从这个输出中，你可以推测变量 <code>alpha</code> 的设置是正确的，因为否则的话，你就不会看到它<em>后面</em>的那行代码执行。当然，这并不总是正确的，但这是一个很好的工作理论，如果你使用 <code>printf</code> 作为日志和调试器，基本上也会得出同样的结论。从这里，你可以假设 bug 在于成功打印的那一行之后的<em>某行</em>。然而，不清楚错误是在下一行还是在几行之后。</p><p>GNU 调试器是一个交互式的故障排除工具，所以你可以使用 <code>gdb</code> 命令来运行错误的代码。为了得到更好的结果，你应该从包含有<em>调试符号</em>的源代码中重新编译你的错误应用程序。首先，看看 GDB 在不重新编译的情况下能提供哪些信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb ./buggy</span></span>
<span class="line"><span>Reading symbols from ./buggy...done.</span></span>
<span class="line"><span>(gdb) start</span></span>
<span class="line"><span>Temporary breakpoint 1 at 0x400a44</span></span>
<span class="line"><span>Starting program: /home/seth/demo/buggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 1, 0x0000000000400a44 in main ()</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>当你以一个二进制可执行文件作为参数启动 GDB 时，GDB 会加载该应用程序，然后等待你的指令。因为这是你第一次在这个可执行文件上运行 GDB，所以尝试重复这个错误是有意义的，希望 GDB 能够提供进一步的见解。很直观，GDB 用来启动它所加载的应用程序的命令就是 <code>start</code>。默认情况下，GDB 内置了一个<em>断点</em>，所以当它遇到你的应用程序的 <code>main</code> 函数时，它会暂停执行。要让 GDB 继续执行，使用命令 <code>continue</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Program received signal SIGSEGV, Segmentation fault.</span></span>
<span class="line"><span>0x00007ffff71c0c0b in vfprintf () from /lib64/libc.so.6</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>毫不意外：应用程序在打印 “Hello world” 后不久就崩溃了，但 GDB 可以提供崩溃发生时正在发生的函数调用。这有可能就足够你找到导致崩溃的 bug，但为了更好地了解 GDB 的功能和一般的调试过程，想象一下，如果问题还没有变得清晰，你想更深入地挖掘这段代码发生了什么。</p><h3 id="用调试符号编译代码" tabindex="-1">用调试符号编译代码 <a class="header-anchor" href="#用调试符号编译代码" aria-label="Permalink to “用调试符号编译代码”">​</a></h3><p>要充分利用 GDB，你需要将调试符号编译到你的可执行文件中。你可以用 GCC 中的 <code>-g</code> 选项来生成这个符号：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ g++ -g -o debuggy example.cpp</span></span>
<span class="line"><span>$ ./debuggy</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>Segmentation fault</span></span></code></pre></div><p>将调试符号编译到可执行文件中的结果是得到一个大得多的文件，所以通常不会分发它们，以增加便利性。然而，如果你正在调试开源代码，那么用调试符号重新编译测试是有意义的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l *buggy* *cpp</span></span>
<span class="line"><span>-rw-r--r--    310 Feb 19 08:30 debug.cpp</span></span>
<span class="line"><span>-rwxr-xr-x  11624 Feb 19 10:27 buggy*</span></span>
<span class="line"><span>-rwxr-xr-x  22952 Feb 19 10:53 debuggy*</span></span></code></pre></div><h3 id="用-gdb-调试" tabindex="-1">用 GDB 调试 <a class="header-anchor" href="#用-gdb-调试" aria-label="Permalink to “用 GDB 调试”">​</a></h3><p>加载新的可执行文件（本例中为 <code>debuggy</code>）以启动 GDB：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb ./debuggy</span></span>
<span class="line"><span>Reading symbols from ./debuggy...done.</span></span>
<span class="line"><span>(gdb) start</span></span>
<span class="line"><span>Temporary breakpoint 1 at 0x400a44</span></span>
<span class="line"><span>Starting program: /home/seth/demo/debuggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 1, 0x0000000000400a44 in main ()</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>如前所述，使用 <code>start</code> 命令进行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) start</span></span>
<span class="line"><span>Temporary breakpoint 1 at 0x400a48: file debug.cpp, line 9.</span></span>
<span class="line"><span>Starting program: /home/sek/demo/debuggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 1, main () at debug.cpp:9</span></span>
<span class="line"><span>9       srand (time(NULL));</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>这一次，自动的 <code>main</code> 断点可以指明 GDB 暂停的行号和该行包含的代码。你可以用 <code>continue</code> 恢复正常操作，但你已经知道应用程序在完成之前就会崩溃，因此，你可以使用 <code>next</code> 关键字逐行步进检查你的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) next</span></span>
<span class="line"><span>10  int alpha = rand() % 8;</span></span>
<span class="line"><span>(gdb) next</span></span>
<span class="line"><span>11  cout &lt;&lt; &quot;Hello world.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>(gdb) next</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>12  int beta = 2;</span></span>
<span class="line"><span>(gdb) next</span></span>
<span class="line"><span>14      printf(&quot;alpha is set to is %s\\n&quot;, alpha);</span></span>
<span class="line"><span>(gdb) next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Program received signal SIGSEGV, Segmentation fault.</span></span>
<span class="line"><span>0x00007ffff71c0c0b in vfprintf () from /lib64/libc.so.6</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>从这个过程可以确认，崩溃不是发生在设置 <code>beta</code> 变量的时候，而是执行 <code>printf</code> 行的时候。这个 bug 在本文中已经暴露了好几次（破坏者：向 <code>printf</code> 提供了错误的数据类型），但暂时假设解决方案仍然不明确，需要进一步调查。</p><h3 id="设置断点" tabindex="-1">设置断点 <a class="header-anchor" href="#设置断点" aria-label="Permalink to “设置断点”">​</a></h3><p>一旦你的代码被加载到 GDB 中，你就可以向 GDB 询问到目前为止代码所产生的数据。要尝试数据自省，通过再次发出 <code>start</code> 命令来重新启动你的应用程序，然后进行到第 11 行。一个快速到达 11 行的简单方法是设置一个寻找特定行号的断点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) start</span></span>
<span class="line"><span>The program being debugged has been started already.</span></span>
<span class="line"><span>Start it from the beginning? (y or n) y</span></span>
<span class="line"><span>Temporary breakpoint 2 at 0x400a48: file debug.cpp, line 9.</span></span>
<span class="line"><span>Starting program: /home/sek/demo/debuggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 2, main () at debug.cpp:9</span></span>
<span class="line"><span>9       srand (time(NULL));</span></span>
<span class="line"><span>(gdb) break 11</span></span>
<span class="line"><span>Breakpoint 3 at 0x400a74: file debug.cpp, line 11.</span></span></code></pre></div><p>建立断点后，用 <code>continue</code> 继续执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Breakpoint 3, main () at debug.cpp:11</span></span>
<span class="line"><span>11      cout &lt;&lt; &quot;Hello world.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>现在暂停在第 11 行，就在 <code>alpha</code> 变量被设置之后，以及 <code>beta</code> 被设置之前。</p><h3 id="用-gdb-进行变量自省" tabindex="-1">用 GDB 进行变量自省 <a class="header-anchor" href="#用-gdb-进行变量自省" aria-label="Permalink to “用 GDB 进行变量自省”">​</a></h3><p>要查看一个变量的值，使用 <code>print</code> 命令。在这个示例代码中，<code>alpha</code> 的值是随机的，所以你的实际结果可能与我的不同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print alpha</span></span>
<span class="line"><span>$1 = 3</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>当然，你无法看到一个尚未建立的变量的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print beta</span></span>
<span class="line"><span>$2 = 0</span></span></code></pre></div><h3 id="使用流程控制" tabindex="-1">使用流程控制 <a class="header-anchor" href="#使用流程控制" aria-label="Permalink to “使用流程控制”">​</a></h3><p>要继续进行，你可以步进代码行来到达将 <code>beta</code> 设置为一个值的位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) next</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>12  int beta = 2;</span></span>
<span class="line"><span>(gdb) next</span></span>
<span class="line"><span>14  printf(&quot;alpha is set to is %s\\n&quot;, alpha);</span></span>
<span class="line"><span>(gdb) print beta</span></span>
<span class="line"><span>$3 = 2</span></span></code></pre></div><p>另外，你也可以设置一个观察点，它就像断点一样，是一种控制 GDB 执行代码流程的方法。在这种情况下，你知道 <code>beta</code> 变量应该设置为 <code>2</code>，所以你可以设置一个观察点，当 <code>beta</code> 的值发生变化时提醒你：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) watch beta &gt; 0</span></span>
<span class="line"><span>Hardware watchpoint 5: beta &gt; 0</span></span>
<span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Breakpoint 3, main () at debug.cpp:11</span></span>
<span class="line"><span>11      cout &lt;&lt; &quot;Hello world.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hardware watchpoint 5: beta &gt; 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Old value = false</span></span>
<span class="line"><span>New value = true</span></span>
<span class="line"><span>main () at debug.cpp:14</span></span>
<span class="line"><span>14      printf(&quot;alpha is set to is %s\\n&quot;, alpha);</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>你可以用 <code>next</code> 手动步进完成代码的执行，或者你可以用断点、观察点和捕捉点来控制代码的执行。</p><h3 id="用-gdb-分析数据" tabindex="-1">用 GDB 分析数据 <a class="header-anchor" href="#用-gdb-分析数据" aria-label="Permalink to “用 GDB 分析数据”">​</a></h3><p>你可以以不同格式查看数据。例如，以八进制值查看 <code>beta</code> 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print /o beta</span></span>
<span class="line"><span>$4 = 02</span></span></code></pre></div><p>要查看其在内存中的地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print /o &amp;beta</span></span>
<span class="line"><span>$5 = 0x2</span></span></code></pre></div><p>你也可以看到一个变量的数据类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) whatis beta</span></span>
<span class="line"><span>type = int</span></span></code></pre></div><h3 id="用-gdb-解决错误" tabindex="-1">用 GDB 解决错误 <a class="header-anchor" href="#用-gdb-解决错误" aria-label="Permalink to “用 GDB 解决错误”">​</a></h3><p>这种自省不仅能让你更好地了解什么代码正在执行，还能让你了解它是如何执行的。在这个例子中，对变量运行的 <code>whatis</code> 命令给了你一个线索，即你的 <code>alpha</code> 和 <code>beta</code> 变量是整数，这可能会唤起你对 <code>printf</code> 语法的记忆，使你意识到在你的 <code>printf</code> 语句中，你必须使用 <code>%d</code> 来代替 <code>%s</code>。做了这个改变，就可以让应用程序按预期运行，没有更明显的错误存在。</p><p>当代码编译后发现有 bug 存在时，特别令人沮丧，但最棘手的 bug 就是这样，如果它们很容易被发现，那它们就不是 bug 了。使用 GDB 是猎取并消除它们的一种方法。</p><h3 id="下载我们的速查表" tabindex="-1">下载我们的速查表 <a class="header-anchor" href="#下载我们的速查表" aria-label="Permalink to “下载我们的速查表”">​</a></h3><p>生活的真相就是这样，即使是最基本的编程，代码也会有 bug。并不是所有的错误都会导致应用程序无法运行（甚至无法编译），也不是所有的错误都是由错误的代码引起的。有时，bug 是基于一个特别有创意的用户所做的意外的选择组合而间歇性发生的。有时，程序员从他们自己的代码中使用的库中继承了 bug。无论原因是什么，bug 基本上无处不在，程序员的工作就是发现并消除它们。</p><p>GNU 调试器是一个寻找 bug 的有用工具。你可以用它做的事情比我在本文中演示的要多得多。你可以通过 GNU Info 阅读器来了解它的许多功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ info gdb</span></span></code></pre></div><p>无论你是刚开始学习 GDB 还是专业人员的，提醒一下你有哪些命令是可用的，以及这些命令的语法是什么，都是很有帮助的。</p>`,55)),n("ul",null,[n("li",null,[e(p,{href:"https://opensource.com/downloads/gnu-debugger-cheat-sheet"},{default:i(()=>[...s[12]||(s[12]=[a("下载 GDB 速查表",-1)])]),_:1})])]),s[34]||(s[34]=n("hr",null,null,-1)),n("p",null,[s[14]||(s[14]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/21/3/debug-code-gdb"},{default:i(()=>[...s[13]||(s[13]=[a("https://opensource.com/article/21/3/debug-code-gdb",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[15]||(s[15]=[a("Seth Kenlon",-1)])]),_:1}),s[20]||(s[20]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[16]||(s[16]=[a("lujun9972",-1)])]),_:1}),s[21]||(s[21]=a(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1}),s[22]||(s[22]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[a("LCTT",-1)])]),_:1}),s[26]||(s[26]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[a("Linux中国",-1)])]),_:1}),s[27]||(s[27]=a(" 荣誉推出",-1))])])}const C=l(g,[["render",c]]);export{x as __pageData,C as default};
