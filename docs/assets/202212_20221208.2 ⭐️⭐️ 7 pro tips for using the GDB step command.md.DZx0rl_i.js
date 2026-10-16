import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"GDB 的 7 个单步调试命令 | LCTT x X-CMD","titleTemplate":false,"description":"GDB 的 7 个单步调试命令 | LCTT (202212) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"GDB 的 7 个单步调试命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"GDB 的 7 个单步调试命令 | LCTT (202212) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202212/20221208.2 ⭐️⭐️ 7 pro tips for using the GDB step command","title":"GDB 的 7 个单步调试命令","tag":"202212","desc":""},"relativePath":"202212/20221208.2 ⭐️⭐️ 7 pro tips for using the GDB step command.md","filePath":"[post].md"}'),c={name:"202212/20221208.2 ⭐️⭐️ 7 pro tips for using the GDB step command.md"};function b(g,s,h,k,u,m){const p=t("Link");return o(),d("div",null,[s[27]||(s[27]=a("h1",{id:"gdb-的-7-个单步调试命令",tabindex:"-1"},[n("GDB 的 7 个单步调试命令 "),a("a",{class:"header-anchor",href:"#gdb-的-7-个单步调试命令","aria-label":"Permalink to “GDB 的 7 个单步调试命令”"},"​")],-1)),s[28]||(s[28]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202212/19/093831nrjrmozx1mixmgii.jpg",alt:""})],-1)),s[29]||(s[29]=a("blockquote",null,[a("p",null,"即使是复杂的函数，也有几种方法可以单步调试，所以下次在排除代码故障时，可以尝试一下这些 GDB 技术。")],-1)),a("p",null,[s[1]||(s[1]=a("strong",null,"调试器",-1)),s[2]||(s[2]=n(" 是一个可以运行你的代码并检查问题的软件。",-1)),e(p,{href:"https://opensource.com/article/21/3/debug-code-gdb"},{default:i(()=>[...s[0]||(s[0]=[n("GNU Debugger",-1)])]),_:1}),s[3]||(s[3]=n("（GBD）是最流行的调试器之一，在这篇文章中，我研究了 GDB 的 ",-1)),s[4]||(s[4]=a("code",null,"step",-1)),s[5]||(s[5]=n(" 命令和其他几种常见情况的相关命令。",-1)),s[6]||(s[6]=a("code",null,"step",-1)),s[7]||(s[7]=n(" 是一个被广泛使用的命令，但它有一些人们不太了解的地方，可能会使得他们十分困惑。此外，还有一些方法可以",-1)),s[8]||(s[8]=a("strong",null,[n("在不使用 "),a("code",null,"step"),n(" 命令的情况下进入一个函数")],-1)),s[9]||(s[9]=n("，比如使用不太知名的 ",-1)),s[10]||(s[10]=a("code",null,"advance",-1)),s[11]||(s[11]=n(" 命令。",-1))]),s[30]||(s[30]=r(`<h3 id="_1、无调试符号" tabindex="-1">1、无调试符号 <a class="header-anchor" href="#_1、无调试符号" aria-label="Permalink to “1、无调试符号”">​</a></h3><p>考虑以下这个简单的示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>int num() {</span></span>
<span class="line"><span>    return 2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void bar(int i) {</span></span>
<span class="line"><span>    printf(&quot;i = %d\\n&quot;, i);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>    bar(num());</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你在没有 <ruby>调试符号<rt> debugging sysbols </rt></ruby> 的情况下进行编译（LCTT 译注：即在使用 <code>gcc</code> 编译程序时没有写 <code>-g</code> 选项），然后在 <code>bar</code> 上设置一个断点，然后尝试在这个函数内使用 <code>step</code> 来单步执行语句。GDB 会给出一个 <ruby>没有行号信息<rt> no line number information </rt></ruby> 的错误信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gcc exmp.c -o exmp</span></span>
<span class="line"><span>gdb ./exmp</span></span>
<span class="line"><span>(gdb) b bar</span></span>
<span class="line"><span>Breakpoint 1 at 0x401135</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, 0x0000000000401135 in bar ()</span></span>
<span class="line"><span>(gdb) step</span></span>
<span class="line"><span>Single stepping until exit from function bar,</span></span>
<span class="line"><span>which has no line number information.</span></span>
<span class="line"><span>i = 2</span></span>
<span class="line"><span>0x0000000000401168 in main ()</span></span></code></pre></div><h3 id="_2、stepi-命令" tabindex="-1">2、stepi 命令 <a class="header-anchor" href="#_2、stepi-命令" aria-label="Permalink to “2、stepi 命令”">​</a></h3><p>但是你仍然可以在没有行号信息的函数内部单步执行语句，但要使用 <code>stepi</code> 命令来代替 <code>step</code>。<code>stepi</code> 一次只执行一条指令。当使用 GDB 的 <code>stepi</code> 命令时，先做 <code>display/i $pc</code> 通常很有用，这会在每一步之后<strong>显示</strong> <ruby>程序计数器<rt> program counter </rt></ruby> 的值和<strong>相应的</strong> <ruby>机器指令<rt> machine instruction </rt></ruby>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b bar</span></span>
<span class="line"><span>Breakpoint 1 at 0x401135</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, 0x0000000000401135 in bar ()</span></span>
<span class="line"><span>(gdb) display/i $pc</span></span>
<span class="line"><span>1: x/i $pc</span></span>
<span class="line"><span>=&gt; 0x401135 &lt;bar+4&gt;: sub $0x10,%rsp</span></span></code></pre></div><p>在上述的 <code>display</code> 命令中，<code>i</code> 代表机器指令，<code>$pc</code> 表示程序计数器寄存器（即 PC 寄存器）。</p><p>使用 <code>info registers</code> 命令，来<strong>打印寄存器的内容</strong>，也是十分有用的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) info registers</span></span>
<span class="line"><span>rax 0x2 2</span></span>
<span class="line"><span>rbx 0x7fffffffdbc8 140737488346056</span></span>
<span class="line"><span>rcx 0x403e18 4210200</span></span>
<span class="line"><span>(gdb) print $rax</span></span>
<span class="line"><span>$1 = 2</span></span>
<span class="line"><span>(gdb) stepi</span></span>
<span class="line"><span>0x0000000000401139 in bar ()</span></span>
<span class="line"><span>1: x/i $pc</span></span>
<span class="line"><span>=&gt; 0x401139 &lt;bar+8&gt;: mov %edi,-0x4(%rbp)</span></span></code></pre></div><h3 id="_3、复杂的函数调用" tabindex="-1">3、复杂的函数调用 <a class="header-anchor" href="#_3、复杂的函数调用" aria-label="Permalink to “3、复杂的函数调用”">​</a></h3><p>在带调试符号的 <code>-g</code> 选项，重新编译示例程序后，你可以使用行号在 <code>main</code> 中 <code>bar</code> 调用上设置断点，然后再单步执行 <code>bar</code> 函数的语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gcc -g exmp.c -o exmp</span></span>
<span class="line"><span>gdb ./exmp</span></span>
<span class="line"><span>(gdb) b exmp.c:14</span></span>
<span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span></code></pre></div><p>接下来，用 <code>step</code>，来单步执行 <code>bar()</code> 函数的语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) step</span></span>
<span class="line"><span>num () at exmp.c:4</span></span>
<span class="line"><span>4 return 2;</span></span></code></pre></div><p>函数调用的参数需要在实际的函数调用之前进行处理，<code>bar()</code> 函数的参数是 <code>num()</code> 函数，所以 <code>num()</code> 会在 <code>bar()</code> 被调用之前执行。但是，通过 GDB 调试，你怎么才能如愿以偿地进入 <code>bar()</code> 函数呢？你可以使用 <code>finish</code> 命令，并再次使用 <code>step</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) finish</span></span>
<span class="line"><span>Run till exit from #0 num () at exmp.c:4</span></span>
<span class="line"><span>0x0000000000401161 in main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>Value returned is $1 = 2</span></span>
<span class="line"><span>(gdb) step</span></span>
<span class="line"><span>bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><h3 id="_4、tbreak-命令" tabindex="-1">4、tbreak 命令 <a class="header-anchor" href="#_4、tbreak-命令" aria-label="Permalink to “4、tbreak 命令”">​</a></h3><p><code>tbreak</code> 命令会设置一个<strong>临时断点</strong>。如果你不想设置永久断点，那么这个命令是很有用的。举个例子🌰，你想进入一个复杂的函数调用，例如 <code>f(g(h()), i(j()), ...)</code>，在这种情况下，你需要一个很长的 <code>step/finish/step</code> 序列，才能到达 <code>f</code> 函数。如果你设置一个临时断点，然后再使用 <code>continue</code> 命令，这样就不需要以上的序列了。为了证明这一点，你需要像以前一样将断点设置在 <code>main</code> 的 <code>bar</code> 调用上。然后在 <code>bar</code> 上设置临时断点。当到达该临时断点后，临时断点会被自动删除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) tbreak bar</span></span>
<span class="line"><span>Temporary breakpoint 2 at 0x40113c: file exmp.c, line 9.</span></span></code></pre></div><p>在调用 <code>bar</code> 的时候遇到断点，并在 <code>bar</code> 上设置临时断点后，你只需要使用 <code>continue</code> 继续运行直到 <code>bar</code> 结束。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Temporary breakpoint 2, bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><h3 id="_5、disable-命令" tabindex="-1">5、disable 命令 <a class="header-anchor" href="#_5、disable-命令" aria-label="Permalink to “5、disable 命令”">​</a></h3><p>类似地，你也可以在 <code>bar</code> 上设置一个正常的断点，然后执行 <code>continue</code>，然后在不再需要第二个断点时，使用 <code>disable</code> 命令禁用这个断点，这样也能达到与 <code>tbreak</code> 相同的效果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b exmp.c:14</span></span>
<span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) b bar</span></span>
<span class="line"><span>Breakpoint 2 at 0x40113c: file exmp.c, line 9.</span></span>
<span class="line"><span>(gdb) c</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Breakpoint 2, bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span>
<span class="line"><span>(gdb) disable 2</span></span></code></pre></div><p>正如你所看到的，<code>info breakpoints</code> 命令在 <code>Enb</code> 列下显示为 <code>n</code>，这意味着这个断点已被禁用。但你也能在再次需要这个断点时，再启用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) info breakpoints</span></span>
<span class="line"><span>Num Type Disp Enb Address What</span></span>
<span class="line"><span>1 breakpoint keep y 0x0000000000401157 in main at exmp.c:14</span></span>
<span class="line"><span>breakpoint already hit 1 time</span></span>
<span class="line"><span>2 breakpoint keep n 0x000000000040113c in bar at exmp.c:9</span></span>
<span class="line"><span>breakpoint already hit 1 time</span></span>
<span class="line"><span>(gdb) enable 2</span></span>
<span class="line"><span>(gdb) info breakpoints</span></span>
<span class="line"><span>Num Type Disp Enb Address What</span></span>
<span class="line"><span>1 breakpoint keep y 0x000000000040116a in main at exmp.c:19</span></span>
<span class="line"><span>breakpoint already hit 1 time</span></span>
<span class="line"><span>2 breakpoint keep y 0x0000000000401158 in bar at exmp.c:14</span></span>
<span class="line"><span>breakpoint already hit 1 time</span></span></code></pre></div><h3 id="_6、advance-命令运行程序到指定的位置" tabindex="-1">6、advance 命令运行程序到指定的位置 <a class="header-anchor" href="#_6、advance-命令运行程序到指定的位置" aria-label="Permalink to “6、advance 命令运行程序到指定的位置”">​</a></h3><p>另一个进入函数内部的方法是 <code>advance</code> 命令。你可以简单地用 <code>advance bar</code>，来代替 <code>tbreak bar ; continue</code>。这一命令会将程序继续运行到指定的位置。</p><p><code>advance</code> 命令的一个很棒的地方在于：如果程序并没有到达你试图进入的位置，那么 GDB 将在当前函数运行完成后停止。因此，程序的执行会受到限制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) advance bar</span></span>
<span class="line"><span>bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><h3 id="_7、skip-命令" tabindex="-1">7、skip 命令 <a class="header-anchor" href="#_7、skip-命令" aria-label="Permalink to “7、skip 命令”">​</a></h3><p>进入 <code>bar</code> 函数的另一种方式是使用 <code>skip num</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b exmp.c:14</span></span>
<span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) skip num</span></span>
<span class="line"><span>Function num will be skipped when stepping.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) step</span></span>
<span class="line"><span>bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><p>请使用 <code>info skip</code> 命令，来了解 GDB 跳过了哪些函数。<code>num()</code> 函数被标记为 <code>y</code>，表示跳过了 <code>num()</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) info skip</span></span>
<span class="line"><span>Num Enb Glob File RE Function</span></span>
<span class="line"><span>1 y n &lt;none&gt; n num</span></span></code></pre></div><p>如果不再需要 <code>skip</code>，可以禁用（并稍后重新启用）或完全删除它。你可以添加另一个 <code>skip</code>，并禁用第一个 <code>skip</code>，然后全部删除。要禁用某个 <code>skip</code>，必须指定其编号（例如，<code>skip disable 1</code>），如果没有指定，则会禁用所有的 <code>skip</code>。启用或删除 <code>skip</code> 的工作原理相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) skip bar</span></span>
<span class="line"><span>(gdb) skip disable 1</span></span>
<span class="line"><span>(gdb) info skip</span></span>
<span class="line"><span>Num Enb Glob File RE Function</span></span>
<span class="line"><span>1 n n &lt;none&gt; n num</span></span>
<span class="line"><span>2 y n &lt;none&gt; n bar</span></span>
<span class="line"><span>(gdb) skip delete</span></span>
<span class="line"><span>(gdb) info skip</span></span>
<span class="line"><span>Not skipping any files or functions.</span></span></code></pre></div><h3 id="gdb-的-step-命令" tabindex="-1">GDB 的 step 命令 <a class="header-anchor" href="#gdb-的-step-命令" aria-label="Permalink to “GDB 的 step 命令”">​</a></h3><p>使用 GDB 的 <code>step</code> 命令是调试程序的一个有用工具。即使是复杂的函数，也有几种方法可以单步调试这些函数，所以下次你在排除代码问题的时候，可以尝试一下这些 GDB 技术。</p><hr>`,42)),a("p",null,[s[13]||(s[13]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/22/12/gdb-step-command"},{default:i(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/22/12/gdb-step-command",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/ahajkova"},{default:i(()=>[...s[14]||(s[14]=[n("Alexandra",-1)])]),_:1}),s[19]||(s[19]=n(" 选题：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[15]||(s[15]=[n("lkxed",-1)])]),_:1}),s[20]||(s[20]=n(" 译者：",-1)),e(p,{href:"https://github.com/chai001125"},{default:i(()=>[...s[16]||(s[16]=[n("chai001125",-1)])]),_:1}),s[21]||(s[21]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[23]||(s[23]=[n("Linux中国",-1)])]),_:1}),s[26]||(s[26]=n(" 荣誉推出",-1))])])}const v=l(c,[["render",b]]);export{y as __pageData,v as default};
