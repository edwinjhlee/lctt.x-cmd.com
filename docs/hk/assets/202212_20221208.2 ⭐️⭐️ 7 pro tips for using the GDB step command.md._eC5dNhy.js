import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"GDB 的 7 個單步調試命令 | LCTT x X-CMD","titleTemplate":false,"description":"GDB 的 7 個單步調試命令 | LCTT (202212) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"GDB 的 7 個單步調試命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"GDB 的 7 個單步調試命令 | LCTT (202212) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202212/20221208.2 ⭐️⭐️ 7 pro tips for using the GDB step command","title":"GDB 的 7 個單步調試命令","tag":"202212","desc":""},"relativePath":"202212/20221208.2 ⭐️⭐️ 7 pro tips for using the GDB step command.md","filePath":"[post].md"}'),c={name:"202212/20221208.2 ⭐️⭐️ 7 pro tips for using the GDB step command.md"};function b(g,s,h,k,u,m){const p=t("Link");return o(),d("div",null,[s[27]||(s[27]=a("h1",{id:"gdb-的-7-個單步調試命令",tabindex:"-1"},[n("GDB 的 7 個單步調試命令 "),a("a",{class:"header-anchor",href:"#gdb-的-7-個單步調試命令","aria-label":"Permalink to “GDB 的 7 個單步調試命令”"},"​")],-1)),s[28]||(s[28]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202212/19/093831nrjrmozx1mixmgii.jpg",alt:""})],-1)),s[29]||(s[29]=a("blockquote",null,[a("p",null,"即使是複雜的函數，也有幾種方法可以單步調試，所以下次在排除代碼故障時，可以嘗試一下這些 GDB 技術。")],-1)),a("p",null,[s[1]||(s[1]=a("strong",null,"調試器",-1)),s[2]||(s[2]=n(" 是一個可以運行你的代碼並檢查問題的軟件。",-1)),e(p,{href:"https://opensource.com/article/21/3/debug-code-gdb"},{default:i(()=>[...s[0]||(s[0]=[n("GNU Debugger",-1)])]),_:1}),s[3]||(s[3]=n("（GBD）是最流行的調試器之一，在這篇文章中，我研究了 GDB 的 ",-1)),s[4]||(s[4]=a("code",null,"step",-1)),s[5]||(s[5]=n(" 命令和其他幾種常見情況的相關命令。",-1)),s[6]||(s[6]=a("code",null,"step",-1)),s[7]||(s[7]=n(" 是一個被廣泛使用的命令，但它有一些人們不太瞭解的地方，可能會使得他們十分困惑。此外，還有一些方法可以",-1)),s[8]||(s[8]=a("strong",null,[n("在不使用 "),a("code",null,"step"),n(" 命令的情況下進入一個函數")],-1)),s[9]||(s[9]=n("，比如使用不太知名的 ",-1)),s[10]||(s[10]=a("code",null,"advance",-1)),s[11]||(s[11]=n(" 命令。",-1))]),s[30]||(s[30]=r(`<h3 id="_1、無調試符號" tabindex="-1">1、無調試符號 <a class="header-anchor" href="#_1、無調試符號" aria-label="Permalink to “1、無調試符號”">​</a></h3><p>考慮以下這個簡單的示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>如果你在沒有 <ruby>調試符號<rt> debugging sysbols </rt></ruby> 的情況下進行編譯（LCTT 譯註：即在使用 <code>gcc</code> 編譯程序時沒有寫 <code>-g</code> 選項），然後在 <code>bar</code> 上設置一個斷點，然後嘗試在這個函數內使用 <code>step</code> 來單步執行語句。GDB 會給出一個 <ruby>沒有行號信息<rt> no line number information </rt></ruby> 的錯誤信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gcc exmp.c -o exmp</span></span>
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
<span class="line"><span>0x0000000000401168 in main ()</span></span></code></pre></div><h3 id="_2、stepi-命令" tabindex="-1">2、stepi 命令 <a class="header-anchor" href="#_2、stepi-命令" aria-label="Permalink to “2、stepi 命令”">​</a></h3><p>但是你仍然可以在沒有行號信息的函數內部單步執行語句，但要使用 <code>stepi</code> 命令來代替 <code>step</code>。<code>stepi</code> 一次只執行一條指令。當使用 GDB 的 <code>stepi</code> 命令時，先做 <code>display/i $pc</code> 通常很有用，這會在每一步之後<strong>顯示</strong> <ruby>程序計數器<rt> program counter </rt></ruby> 的值和<strong>相應的</strong> <ruby>機器指令<rt> machine instruction </rt></ruby>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b bar</span></span>
<span class="line"><span>Breakpoint 1 at 0x401135</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, 0x0000000000401135 in bar ()</span></span>
<span class="line"><span>(gdb) display/i $pc</span></span>
<span class="line"><span>1: x/i $pc</span></span>
<span class="line"><span>=&gt; 0x401135 &lt;bar+4&gt;: sub $0x10,%rsp</span></span></code></pre></div><p>在上述的 <code>display</code> 命令中，<code>i</code> 代表機器指令，<code>$pc</code> 表示程序計數器寄存器（即 PC 寄存器）。</p><p>使用 <code>info registers</code> 命令，來<strong>打印寄存器的內容</strong>，也是十分有用的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) info registers</span></span>
<span class="line"><span>rax 0x2 2</span></span>
<span class="line"><span>rbx 0x7fffffffdbc8 140737488346056</span></span>
<span class="line"><span>rcx 0x403e18 4210200</span></span>
<span class="line"><span>(gdb) print $rax</span></span>
<span class="line"><span>$1 = 2</span></span>
<span class="line"><span>(gdb) stepi</span></span>
<span class="line"><span>0x0000000000401139 in bar ()</span></span>
<span class="line"><span>1: x/i $pc</span></span>
<span class="line"><span>=&gt; 0x401139 &lt;bar+8&gt;: mov %edi,-0x4(%rbp)</span></span></code></pre></div><h3 id="_3、複雜的函數調用" tabindex="-1">3、複雜的函數調用 <a class="header-anchor" href="#_3、複雜的函數調用" aria-label="Permalink to “3、複雜的函數調用”">​</a></h3><p>在帶調試符號的 <code>-g</code> 選項，重新編譯示例程序後，你可以使用行號在 <code>main</code> 中 <code>bar</code> 調用上設置斷點，然後再單步執行 <code>bar</code> 函數的語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gcc -g exmp.c -o exmp</span></span>
<span class="line"><span>gdb ./exmp</span></span>
<span class="line"><span>(gdb) b exmp.c:14</span></span>
<span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span></code></pre></div><p>接下來，用 <code>step</code>，來單步執行 <code>bar()</code> 函數的語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) step</span></span>
<span class="line"><span>num () at exmp.c:4</span></span>
<span class="line"><span>4 return 2;</span></span></code></pre></div><p>函數調用的參數需要在實際的函數調用之前進行處理，<code>bar()</code> 函數的參數是 <code>num()</code> 函數，所以 <code>num()</code> 會在 <code>bar()</code> 被調用之前執行。但是，通過 GDB 調試，你怎麼才能如願以償地進入 <code>bar()</code> 函數呢？你可以使用 <code>finish</code> 命令，並再次使用 <code>step</code> 命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) finish</span></span>
<span class="line"><span>Run till exit from #0 num () at exmp.c:4</span></span>
<span class="line"><span>0x0000000000401161 in main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>Value returned is $1 = 2</span></span>
<span class="line"><span>(gdb) step</span></span>
<span class="line"><span>bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><h3 id="_4、tbreak-命令" tabindex="-1">4、tbreak 命令 <a class="header-anchor" href="#_4、tbreak-命令" aria-label="Permalink to “4、tbreak 命令”">​</a></h3><p><code>tbreak</code> 命令會設置一個<strong>臨時斷點</strong>。如果你不想設置永久斷點，那麼這個命令是很有用的。舉個例子🌰，你想進入一個複雜的函數調用，例如 <code>f(g(h()), i(j()), ...)</code>，在這種情況下，你需要一個很長的 <code>step/finish/step</code> 序列，才能到達 <code>f</code> 函數。如果你設置一個臨時斷點，然後再使用 <code>continue</code> 命令，這樣就不需要以上的序列了。為了證明這一點，你需要像以前一樣將斷點設置在 <code>main</code> 的 <code>bar</code> 調用上。然後在 <code>bar</code> 上設置臨時斷點。當到達該臨時斷點後，臨時斷點會被自動刪除。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) tbreak bar</span></span>
<span class="line"><span>Temporary breakpoint 2 at 0x40113c: file exmp.c, line 9.</span></span></code></pre></div><p>在調用 <code>bar</code> 的時候遇到斷點，並在 <code>bar</code> 上設置臨時斷點後，你只需要使用 <code>continue</code> 繼續運行直到 <code>bar</code> 結束。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Temporary breakpoint 2, bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><h3 id="_5、disable-命令" tabindex="-1">5、disable 命令 <a class="header-anchor" href="#_5、disable-命令" aria-label="Permalink to “5、disable 命令”">​</a></h3><p>類似地，你也可以在 <code>bar</code> 上設置一個正常的斷點，然後執行 <code>continue</code>，然後在不再需要第二個斷點時，使用 <code>disable</code> 命令禁用這個斷點，這樣也能達到與 <code>tbreak</code> 相同的效果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b exmp.c:14</span></span>
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
<span class="line"><span>(gdb) disable 2</span></span></code></pre></div><p>正如你所看到的，<code>info breakpoints</code> 命令在 <code>Enb</code> 列下顯示為 <code>n</code>，這意味着這個斷點已被禁用。但你也能在再次需要這個斷點時，再啓用它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) info breakpoints</span></span>
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
<span class="line"><span>breakpoint already hit 1 time</span></span></code></pre></div><h3 id="_6、advance-命令運行程序到指定的位置" tabindex="-1">6、advance 命令運行程序到指定的位置 <a class="header-anchor" href="#_6、advance-命令運行程序到指定的位置" aria-label="Permalink to “6、advance 命令運行程序到指定的位置”">​</a></h3><p>另一個進入函數內部的方法是 <code>advance</code> 命令。你可以簡單地用 <code>advance bar</code>，來代替 <code>tbreak bar ; continue</code>。這一命令會將程序繼續運行到指定的位置。</p><p><code>advance</code> 命令的一個很棒的地方在於：如果程序並沒有到達你試圖進入的位置，那麼 GDB 將在當前函數運行完成後停止。因此，程序的執行會受到限制：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) advance bar</span></span>
<span class="line"><span>bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><h3 id="_7、skip-命令" tabindex="-1">7、skip 命令 <a class="header-anchor" href="#_7、skip-命令" aria-label="Permalink to “7、skip 命令”">​</a></h3><p>進入 <code>bar</code> 函數的另一種方式是使用 <code>skip num</code> 命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b exmp.c:14</span></span>
<span class="line"><span>Breakpoint 1 at 0x401157: file exmp.c, line 14.</span></span>
<span class="line"><span>(gdb) skip num</span></span>
<span class="line"><span>Function num will be skipped when stepping.</span></span>
<span class="line"><span>(gdb) r</span></span>
<span class="line"><span>Starting program: /home/ahajkova/exmp</span></span>
<span class="line"><span>Breakpoint 1, main () at exmp.c:14</span></span>
<span class="line"><span>14 bar(num());</span></span>
<span class="line"><span>(gdb) step</span></span>
<span class="line"><span>bar (i=2) at exmp.c:9</span></span>
<span class="line"><span>9 printf(&quot;i = %d\\n&quot;, i);</span></span></code></pre></div><p>請使用 <code>info skip</code> 命令，來了解 GDB 跳過了哪些函數。<code>num()</code> 函數被標記為 <code>y</code>，表示跳過了 <code>num()</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) info skip</span></span>
<span class="line"><span>Num Enb Glob File RE Function</span></span>
<span class="line"><span>1 y n &lt;none&gt; n num</span></span></code></pre></div><p>如果不再需要 <code>skip</code>，可以禁用（並稍後重新啓用）或完全刪除它。你可以添加另一個 <code>skip</code>，並禁用第一個 <code>skip</code>，然後全部刪除。要禁用某個 <code>skip</code>，必須指定其編號（例如，<code>skip disable 1</code>），如果沒有指定，則會禁用所有的 <code>skip</code>。啓用或刪除 <code>skip</code> 的工作原理相同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) skip bar</span></span>
<span class="line"><span>(gdb) skip disable 1</span></span>
<span class="line"><span>(gdb) info skip</span></span>
<span class="line"><span>Num Enb Glob File RE Function</span></span>
<span class="line"><span>1 n n &lt;none&gt; n num</span></span>
<span class="line"><span>2 y n &lt;none&gt; n bar</span></span>
<span class="line"><span>(gdb) skip delete</span></span>
<span class="line"><span>(gdb) info skip</span></span>
<span class="line"><span>Not skipping any files or functions.</span></span></code></pre></div><h3 id="gdb-的-step-命令" tabindex="-1">GDB 的 step 命令 <a class="header-anchor" href="#gdb-的-step-命令" aria-label="Permalink to “GDB 的 step 命令”">​</a></h3><p>使用 GDB 的 <code>step</code> 命令是調試程序的一個有用工具。即使是複雜的函數，也有幾種方法可以單步調試這些函數，所以下次你在排除代碼問題的時候，可以嘗試一下這些 GDB 技術。</p><hr>`,42)),a("p",null,[s[13]||(s[13]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/22/12/gdb-step-command"},{default:i(()=>[...s[12]||(s[12]=[n("https://opensource.com/article/22/12/gdb-step-command",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/ahajkova"},{default:i(()=>[...s[14]||(s[14]=[n("Alexandra",-1)])]),_:1}),s[19]||(s[19]=n(" 選題：",-1)),e(p,{href:"https://github.com/lkxed"},{default:i(()=>[...s[15]||(s[15]=[n("lkxed",-1)])]),_:1}),s[20]||(s[20]=n(" 譯者：",-1)),e(p,{href:"https://github.com/chai001125"},{default:i(()=>[...s[16]||(s[16]=[n("chai001125",-1)])]),_:1}),s[21]||(s[21]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[22]||(s[22]=[n("LCTT",-1)])]),_:1}),s[25]||(s[25]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[23]||(s[23]=[n("Linux中國",-1)])]),_:1}),s[26]||(s[26]=n(" 榮譽推出",-1))])])}const v=l(c,[["render",b]]);export{y as __pageData,v as default};
