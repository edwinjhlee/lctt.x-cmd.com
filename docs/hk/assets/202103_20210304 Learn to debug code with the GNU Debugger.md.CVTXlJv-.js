import{_ as l,a0 as t,w as d,s as o,I as n,x as a,a1 as e,A as i,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"學習使用 GDB 調試代碼 | LCTT x X-CMD","titleTemplate":false,"description":"學習使用 GDB 調試代碼 | LCTT (202103) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"學習使用 GDB 調試代碼 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"學習使用 GDB 調試代碼 | LCTT (202103) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202103/20210304 Learn to debug code with the GNU Debugger","title":"學習使用 GDB 調試代碼","tag":"202103","desc":""},"relativePath":"202103/20210304 Learn to debug code with the GNU Debugger.md","filePath":"[post].md"}'),g={name:"202103/20210304 Learn to debug code with the GNU Debugger.md"};function c(b,s,h,u,k,f){const p=t("Link");return d(),o("div",null,[s[28]||(s[28]=n("h1",{id:"學習使用-gdb-調試代碼",tabindex:"-1"},[a("學習使用 GDB 調試代碼 "),n("a",{class:"header-anchor",href:"#學習使用-gdb-調試代碼","aria-label":"Permalink to “學習使用 GDB 調試代碼”"},"​")],-1)),s[29]||(s[29]=n("blockquote",null,[n("p",null,"使用 GNU 調試器來解決你的代碼問題。")],-1)),s[30]||(s[30]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202103/14/210547k3q5lek8j9qspkks.jpg",alt:""})],-1)),s[31]||(s[31]=n("p",null,[a("GNU 調試器常以它的命令 "),n("code",null,"gdb"),a(" 稱呼它，它是一個交互式的控制台，可以幫助你瀏覽源代碼、分析執行的內容，其本質上是對錯誤的應用程序中出現的問題進行逆向工程。")],-1)),n("p",null,[s[2]||(s[2]=a("故障排除的麻煩在於它很複雜。",-1)),e(p,{href:"https://www.gnu.org/software/gdb/"},{default:i(()=>[...s[0]||(s[0]=[a("GNU 調試器",-1)])]),_:1}),s[3]||(s[3]=a(" 並不是一個特別複雜的應用程序，但如果你不知道從哪裏開始，甚至不知道何時和為何你可能需要求助於 GDB 來進行故障排除，那麼它可能會讓人不知所措。如果你一直使用 ",-1)),s[4]||(s[4]=n("code",null,"print",-1)),s[5]||(s[5]=a("、",-1)),s[6]||(s[6]=n("code",null,"echo",-1)),s[7]||(s[7]=a(" 或 ",-1)),e(p,{href:"https://opensource.com/article/20/8/printf"},{default:i(()=>[...s[1]||(s[1]=[a("printf 語句",-1)])]),_:1}),s[8]||(s[8]=a("來調試你的代碼，當你開始思考是不是還有更強大的東西時，那麼本教程就是為你準備的。",-1))]),s[32]||(s[32]=n("h3",{id:"有錯誤的代碼",tabindex:"-1"},[a("有錯誤的代碼 "),n("a",{class:"header-anchor",href:"#有錯誤的代碼","aria-label":"Permalink to “有錯誤的代碼”"},"​")],-1)),n("p",null,[s[10]||(s[10]=a("要開始使用 GDB，你需要一些代碼。這裏有一個用 C++ 寫的示例應用程序（如果你一般不使用 C++ 編寫程序也沒關係，在所有語言中原理都是一樣的），其來源於 ",-1)),e(p,{href:"https://linux.cn/article-12985-1.html"},{default:i(()=>[...s[9]||(s[9]=[a("猜謎遊戲系列",-1)])]),_:1}),s[11]||(s[11]=a(" 中的一個例子。",-1))]),s[33]||(s[33]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>
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
<span class="line"><span>} // main</span></span></code></pre></div><p>這個代碼示例中有一個 bug，但它確實可以編譯（至少在 GCC 5 的時候）。如果你熟悉 C++，你可能已經看到了，但這是一個簡單的問題，可以幫助新的 GDB 用户瞭解調試過程。編譯並運行它就可以看到錯誤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ g++ -o buggy example.cpp</span></span>
<span class="line"><span>$ ./buggy</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>Segmentation fault</span></span></code></pre></div><h3 id="排除段故障" tabindex="-1">排除段故障 <a class="header-anchor" href="#排除段故障" aria-label="Permalink to “排除段故障”">​</a></h3><p>從這個輸出中，你可以推測變量 <code>alpha</code> 的設置是正確的，因為否則的話，你就不會看到它<em>後面</em>的那行代碼執行。當然，這並不總是正確的，但這是一個很好的工作理論，如果你使用 <code>printf</code> 作為日誌和調試器，基本上也會得出同樣的結論。從這裏，你可以假設 bug 在於成功打印的那一行之後的<em>某行</em>。然而，不清楚錯誤是在下一行還是在幾行之後。</p><p>GNU 調試器是一個交互式的故障排除工具，所以你可以使用 <code>gdb</code> 命令來運行錯誤的代碼。為了得到更好的結果，你應該從包含有<em>調試符號</em>的源代碼中重新編譯你的錯誤應用程序。首先，看看 GDB 在不重新編譯的情況下能提供哪些信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb ./buggy</span></span>
<span class="line"><span>Reading symbols from ./buggy...done.</span></span>
<span class="line"><span>(gdb) start</span></span>
<span class="line"><span>Temporary breakpoint 1 at 0x400a44</span></span>
<span class="line"><span>Starting program: /home/seth/demo/buggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 1, 0x0000000000400a44 in main ()</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>當你以一個二進制可執行文件作為參數啓動 GDB 時，GDB 會加載該應用程序，然後等待你的指令。因為這是你第一次在這個可執行文件上運行 GDB，所以嘗試重複這個錯誤是有意義的，希望 GDB 能夠提供進一步的見解。很直觀，GDB 用來啓動它所加載的應用程序的命令就是 <code>start</code>。默認情況下，GDB 內置了一個<em>斷點</em>，所以當它遇到你的應用程序的 <code>main</code> 函數時，它會暫停執行。要讓 GDB 繼續執行，使用命令 <code>continue</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Program received signal SIGSEGV, Segmentation fault.</span></span>
<span class="line"><span>0x00007ffff71c0c0b in vfprintf () from /lib64/libc.so.6</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>毫不意外：應用程序在打印 “Hello world” 後不久就崩潰了，但 GDB 可以提供崩潰發生時正在發生的函數調用。這有可能就足夠你找到導致崩潰的 bug，但為了更好地瞭解 GDB 的功能和一般的調試過程，想像一下，如果問題還沒有變得清晰，你想更深入地挖掘這段代碼發生了什麼。</p><h3 id="用調試符號編譯代碼" tabindex="-1">用調試符號編譯代碼 <a class="header-anchor" href="#用調試符號編譯代碼" aria-label="Permalink to “用調試符號編譯代碼”">​</a></h3><p>要充分利用 GDB，你需要將調試符號編譯到你的可執行文件中。你可以用 GCC 中的 <code>-g</code> 選項來生成這個符號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ g++ -g -o debuggy example.cpp</span></span>
<span class="line"><span>$ ./debuggy</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>Segmentation fault</span></span></code></pre></div><p>將調試符號編譯到可執行文件中的結果是得到一個大得多的文件，所以通常不會分發它們，以增加便利性。然而，如果你正在調試開源代碼，那麼用調試符號重新編譯測試是有意義的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls -l *buggy* *cpp</span></span>
<span class="line"><span>-rw-r--r--    310 Feb 19 08:30 debug.cpp</span></span>
<span class="line"><span>-rwxr-xr-x  11624 Feb 19 10:27 buggy*</span></span>
<span class="line"><span>-rwxr-xr-x  22952 Feb 19 10:53 debuggy*</span></span></code></pre></div><h3 id="用-gdb-調試" tabindex="-1">用 GDB 調試 <a class="header-anchor" href="#用-gdb-調試" aria-label="Permalink to “用 GDB 調試”">​</a></h3><p>加載新的可執行文件（本例中為 <code>debuggy</code>）以啓動 GDB：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gdb ./debuggy</span></span>
<span class="line"><span>Reading symbols from ./debuggy...done.</span></span>
<span class="line"><span>(gdb) start</span></span>
<span class="line"><span>Temporary breakpoint 1 at 0x400a44</span></span>
<span class="line"><span>Starting program: /home/seth/demo/debuggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 1, 0x0000000000400a44 in main ()</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>如前所述，使用 <code>start</code> 命令進行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) start</span></span>
<span class="line"><span>Temporary breakpoint 1 at 0x400a48: file debug.cpp, line 9.</span></span>
<span class="line"><span>Starting program: /home/sek/demo/debuggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 1, main () at debug.cpp:9</span></span>
<span class="line"><span>9       srand (time(NULL));</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>這一次，自動的 <code>main</code> 斷點可以指明 GDB 暫停的行號和該行包含的代碼。你可以用 <code>continue</code> 恢復正常操作，但你已經知道應用程序在完成之前就會崩潰，因此，你可以使用 <code>next</code> 關鍵字逐行步進檢查你的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) next</span></span>
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
<span class="line"><span>(gdb)</span></span></code></pre></div><p>從這個過程可以確認，崩潰不是發生在設置 <code>beta</code> 變量的時候，而是執行 <code>printf</code> 行的時候。這個 bug 在本文中已經暴露了好幾次（破壞者：向 <code>printf</code> 提供了錯誤的數據類型），但暫時假設解決方案仍然不明確，需要進一步調查。</p><h3 id="設置斷點" tabindex="-1">設置斷點 <a class="header-anchor" href="#設置斷點" aria-label="Permalink to “設置斷點”">​</a></h3><p>一旦你的代碼被加載到 GDB 中，你就可以向 GDB 詢問到目前為止代碼所產生的數據。要嘗試數據自省，通過再次發出 <code>start</code> 命令來重新啓動你的應用程序，然後進行到第 11 行。一個快速到達 11 行的簡單方法是設置一個尋找特定行號的斷點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) start</span></span>
<span class="line"><span>The program being debugged has been started already.</span></span>
<span class="line"><span>Start it from the beginning? (y or n) y</span></span>
<span class="line"><span>Temporary breakpoint 2 at 0x400a48: file debug.cpp, line 9.</span></span>
<span class="line"><span>Starting program: /home/sek/demo/debuggy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Temporary breakpoint 2, main () at debug.cpp:9</span></span>
<span class="line"><span>9       srand (time(NULL));</span></span>
<span class="line"><span>(gdb) break 11</span></span>
<span class="line"><span>Breakpoint 3 at 0x400a74: file debug.cpp, line 11.</span></span></code></pre></div><p>建立斷點後，用 <code>continue</code> 繼續執行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Continuing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Breakpoint 3, main () at debug.cpp:11</span></span>
<span class="line"><span>11      cout &lt;&lt; &quot;Hello world.&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>現在暫停在第 11 行，就在 <code>alpha</code> 變量被設置之後，以及 <code>beta</code> 被設置之前。</p><h3 id="用-gdb-進行變量自省" tabindex="-1">用 GDB 進行變量自省 <a class="header-anchor" href="#用-gdb-進行變量自省" aria-label="Permalink to “用 GDB 進行變量自省”">​</a></h3><p>要查看一個變量的值，使用 <code>print</code> 命令。在這個示例代碼中，<code>alpha</code> 的值是隨機的，所以你的實際結果可能與我的不同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print alpha</span></span>
<span class="line"><span>$1 = 3</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>當然，你無法看到一個尚未建立的變量的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print beta</span></span>
<span class="line"><span>$2 = 0</span></span></code></pre></div><h3 id="使用流程控制" tabindex="-1">使用流程控制 <a class="header-anchor" href="#使用流程控制" aria-label="Permalink to “使用流程控制”">​</a></h3><p>要繼續進行，你可以步進代碼行來到達將 <code>beta</code> 設置為一個值的位置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) next</span></span>
<span class="line"><span>Hello world.</span></span>
<span class="line"><span>12  int beta = 2;</span></span>
<span class="line"><span>(gdb) next</span></span>
<span class="line"><span>14  printf(&quot;alpha is set to is %s\\n&quot;, alpha);</span></span>
<span class="line"><span>(gdb) print beta</span></span>
<span class="line"><span>$3 = 2</span></span></code></pre></div><p>另外，你也可以設置一個觀察點，它就像斷點一樣，是一種控制 GDB 執行代碼流程的方法。在這種情況下，你知道 <code>beta</code> 變量應該設置為 <code>2</code>，所以你可以設置一個觀察點，當 <code>beta</code> 的值發生變化時提醒你：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) watch beta &gt; 0</span></span>
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
<span class="line"><span>(gdb)</span></span></code></pre></div><p>你可以用 <code>next</code> 手動步進完成代碼的執行，或者你可以用斷點、觀察點和捕捉點來控制代碼的執行。</p><h3 id="用-gdb-分析數據" tabindex="-1">用 GDB 分析數據 <a class="header-anchor" href="#用-gdb-分析數據" aria-label="Permalink to “用 GDB 分析數據”">​</a></h3><p>你可以以不同格式查看數據。例如，以八進制值查看 <code>beta</code> 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print /o beta</span></span>
<span class="line"><span>$4 = 02</span></span></code></pre></div><p>要查看其在內存中的地址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) print /o &amp;beta</span></span>
<span class="line"><span>$5 = 0x2</span></span></code></pre></div><p>你也可以看到一個變量的數據類型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) whatis beta</span></span>
<span class="line"><span>type = int</span></span></code></pre></div><h3 id="用-gdb-解決錯誤" tabindex="-1">用 GDB 解決錯誤 <a class="header-anchor" href="#用-gdb-解決錯誤" aria-label="Permalink to “用 GDB 解決錯誤”">​</a></h3><p>這種自省不僅能讓你更好地瞭解什麼代碼正在執行，還能讓你瞭解它是如何執行的。在這個例子中，對變量運行的 <code>whatis</code> 命令給了你一個線索，即你的 <code>alpha</code> 和 <code>beta</code> 變量是整數，這可能會喚起你對 <code>printf</code> 語法的記憶，使你意識到在你的 <code>printf</code> 語句中，你必須使用 <code>%d</code> 來代替 <code>%s</code>。做了這個改變，就可以讓應用程序按預期運行，沒有更明顯的錯誤存在。</p><p>當代碼編譯後發現有 bug 存在時，特別令人沮喪，但最棘手的 bug 就是這樣，如果它們很容易被發現，那它們就不是 bug 了。使用 GDB 是獵取並消除它們的一種方法。</p><h3 id="下載我們的速查表" tabindex="-1">下載我們的速查表 <a class="header-anchor" href="#下載我們的速查表" aria-label="Permalink to “下載我們的速查表”">​</a></h3><p>生活的真相就是這樣，即使是最基本的編程，代碼也會有 bug。並不是所有的錯誤都會導致應用程序無法運行（甚至無法編譯），也不是所有的錯誤都是由錯誤的代碼引起的。有時，bug 是基於一個特別有創意的用户所做的意外的選擇組合而間歇性發生的。有時，程序員從他們自己的代碼中使用的庫中繼承了 bug。無論原因是什麼，bug 基本上無處不在，程序員的工作就是發現並消除它們。</p><p>GNU 調試器是一個尋找 bug 的有用工具。你可以用它做的事情比我在本文中演示的要多得多。你可以通過 GNU Info 閲讀器來了解它的許多功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ info gdb</span></span></code></pre></div><p>無論你是剛開始學習 GDB 還是專業人員的，提醒一下你有哪些命令是可用的，以及這些命令的語法是什麼，都是很有幫助的。</p>`,55)),n("ul",null,[n("li",null,[e(p,{href:"https://opensource.com/downloads/gnu-debugger-cheat-sheet"},{default:i(()=>[...s[12]||(s[12]=[a("下載 GDB 速查表",-1)])]),_:1})])]),s[34]||(s[34]=n("hr",null,null,-1)),n("p",null,[s[14]||(s[14]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/21/3/debug-code-gdb"},{default:i(()=>[...s[13]||(s[13]=[a("https://opensource.com/article/21/3/debug-code-gdb",-1)])]),_:1})]),n("p",null,[s[19]||(s[19]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[15]||(s[15]=[a("Seth Kenlon",-1)])]),_:1}),s[20]||(s[20]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[16]||(s[16]=[a("lujun9972",-1)])]),_:1}),s[21]||(s[21]=a(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1}),s[22]||(s[22]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[18]||(s[18]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[23]||(s[23]=[a("LCTT",-1)])]),_:1}),s[26]||(s[26]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[24]||(s[24]=[a("Linux中國",-1)])]),_:1}),s[27]||(s[27]=a(" 榮譽推出",-1))])])}const C=l(g,[["render",c]]);export{x as __pageData,C as default};
