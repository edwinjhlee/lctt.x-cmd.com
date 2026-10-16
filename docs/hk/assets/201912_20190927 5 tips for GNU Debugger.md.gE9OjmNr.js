import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"5 個鮮為人知 GNU 調試器（GDB）技巧 | LCTT x X-CMD","titleTemplate":false,"description":"5 個鮮為人知 GNU 調試器（GDB）技巧 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"5 個鮮為人知 GNU 調試器（GDB）技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"5 個鮮為人知 GNU 調試器（GDB）技巧 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20190927 5 tips for GNU Debugger","title":"5 個鮮為人知 GNU 調試器（GDB）技巧","tag":"201912","desc":""},"relativePath":"201912/20190927 5 tips for GNU Debugger.md","filePath":"[post].md"}'),g={name:"201912/20190927 5 tips for GNU Debugger.md"};function c(u,s,b,m,h,f){const p=o("Link");return d(),r("div",null,[s[30]||(s[30]=a("h1",{id:"_5-個鮮為人知-gnu-調試器-gdb-技巧",tabindex:"-1"},[n("5 個鮮為人知 GNU 調試器（GDB）技巧 "),a("a",{class:"header-anchor",href:"#_5-個鮮為人知-gnu-調試器-gdb-技巧","aria-label":"Permalink to “5 個鮮為人知 GNU 調試器（GDB）技巧”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"瞭解如何使用 gdb 的一些鮮為人知的功能來檢查和修復代碼。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201912/05/203701ss8onfvpsnvnsnn5.jpg",alt:""})],-1)),a("p",null,[e(p,{href:"https://www.gnu.org/software/gdb/"},{default:i(()=>[...s[0]||(s[0]=[n("GNU 調試器",-1)])]),_:1}),s[1]||(s[1]=n("（",-1)),s[2]||(s[2]=a("code",null,"gdb",-1)),s[3]||(s[3]=n("）是一種寶貴的工具，可用於在開發程序時檢查正在運行的進程並解決問題。",-1))]),s[33]||(s[33]=l(`<p>你可以在特定位置（按函數名稱、行號等）設置斷點、啓用和禁用這些斷點、顯示和更改變量值，並執行所有調試器希望執行的所有標準操作。但是它還有許多其它你可能沒有嘗試過的功能。這裏有五個你可以嘗試一下。</p><h3 id="條件斷點" tabindex="-1">條件斷點 <a class="header-anchor" href="#條件斷點" aria-label="Permalink to “條件斷點”">​</a></h3><p>設置斷點是學習使用 GNU 調試器的第一步。程序在達到斷點時停止，你可以運行 <code>gdb</code> 的命令對其進行檢查或更改變量，然後再允許該程序繼續運行。</p><p>例如，你可能知道一個經常調用的函數有時會崩潰，但僅當它獲得某個參數值時才會崩潰。你可以在該函數的開始處設置一個斷點並運行程序。每次碰到該斷點時都會顯示函數參數，並且如果未提供觸發崩潰的參數值，則可以繼續操作，直到再次調用該函數為止。當這個惹了麻煩的參數觸發崩潰時，你可以單步執行代碼以查看問題所在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) break sometimes_crashes</span></span>
<span class="line"><span>Breakpoint 1 at 0x40110e: file prog.c, line 5.</span></span>
<span class="line"><span>(gdb) run</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Breakpoint 1, sometimes_crashes (f=0x7fffffffd1bc) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>(gdb) continue</span></span>
<span class="line"><span>Breakpoint 1, sometimes_crashes (f=0x7fffffffd1bc) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>(gdb) continue</span></span></code></pre></div><p>為了使此方法更具可重複性，你可以在你感興趣的特定調用之前計算該函數被調用的次數，並在該斷點處設置一個計數器（例如，<code>continue 30</code> 以使其在接下來的 29 次到達該斷點時忽略它）。</p><p>但是斷點真正強大的地方在於它們在運行時評估表達式的能力，這使你可以自動化這種測試。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>break [LOCATION] if CONDITION</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(gdb) break sometimes_crashes if !f</span></span>
<span class="line"><span>Breakpoint 1 at 0x401132: file prog.c, line 5.</span></span>
<span class="line"><span>(gdb) run</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Breakpoint 1, sometimes_crashes (f=0x0) at prog.c:5</span></span>
<span class="line"><span>5      fprintf(stderr,</span></span>
<span class="line"><span>(gdb)</span></span></code></pre></div><p>條件斷點使你不必讓 <code>gdb</code> 每次調用該函數時都去問你要做什麼，而是讓條件斷點僅在特定表達式的值為 <code>true</code> 時才使 <code>gdb</code> 停止在該位置。如果執行到達條件斷點的位置，但表達式的計算結果為 <code>false</code>，調試器會自動使程序繼續運行，而無需詢問用户該怎麼做。</p><h3 id="斷點命令" tabindex="-1">斷點命令 <a class="header-anchor" href="#斷點命令" aria-label="Permalink to “斷點命令”">​</a></h3><p>GNU 調試器中斷點的一個甚至更復雜的功能是能夠編寫對到達斷點的響應的腳本。斷點命令使你可以編寫一系列 GNU 調試器命令，以在到達該斷點時運行。</p><p>我們可以使用它來規避在 <code>sometimes_crashes</code> 函數中我們已知的錯誤，並在它提供空指針時使其無害地從該函數返回。</p><p>我們可以使用 <code>silent</code> 作為第一行，以更好地控制輸出。否則，每次命中斷點時，即使在運行斷點命令之前，也會顯示堆棧幀。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) break sometimes_crashes</span></span>
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
<span class="line"><span>(gdb)</span></span></code></pre></div><h3 id="轉儲二進制內存" tabindex="-1">轉儲二進制內存 <a class="header-anchor" href="#轉儲二進制內存" aria-label="Permalink to “轉儲二進制內存”">​</a></h3><p>GNU 調試器內置支持使用 <code>x</code> 命令以各種格式檢查內存，包括八進制、十六進制等。但是我喜歡並排看到兩種格式：左側為十六進制字節，右側為相同字節表示的 ASCII 字符。</p>`,16)),a("p",null,[s[5]||(s[5]=n("當我想逐字節查看文件的內容時，經常使用 ",-1)),s[6]||(s[6]=a("code",null,"hexdump -C",-1)),s[7]||(s[7]=n("（",-1)),s[8]||(s[8]=a("code",null,"hexdump",-1)),s[9]||(s[9]=n(" 來自 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Util-linux"},{default:i(()=>[...s[4]||(s[4]=[n("util-linux",-1)])]),_:1}),s[10]||(s[10]=n(" 軟件包）。這是 ",-1)),s[11]||(s[11]=a("code",null,"gdb",-1)),s[12]||(s[12]=n(" 的 ",-1)),s[13]||(s[13]=a("code",null,"x",-1)),s[14]||(s[14]=n(" 命令顯示的十六進制字節：",-1))]),s[34]||(s[34]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) x/33xb mydata</span></span>
<span class="line"><span>0x404040 &lt;mydata&gt;   :    0x02    0x01    0x00    0x02    0x00    0x00    0x00    0x01</span></span>
<span class="line"><span>0x404048 &lt;mydata+8&gt; :    0x01    0x47    0x00    0x12    0x61    0x74    0x74    0x72</span></span>
<span class="line"><span>0x404050 &lt;mydata+16&gt;:    0x69    0x62    0x75    0x74    0x65    0x73    0x2d    0x63</span></span>
<span class="line"><span>0x404058 &lt;mydata+24&gt;:    0x68    0x61    0x72    0x73    0x65    0x75    0x00    0x05</span></span>
<span class="line"><span>0x404060 &lt;mydata+32&gt;:    0x00</span></span></code></pre></div><p>如果你想讓 <code>gdb</code> 像 <code>hexdump</code> 一樣顯示內存怎麼辦？這是可以的，實際上，你可以將這種方法用於你喜歡的任何格式。</p><p>通過使用 <code>dump</code> 命令以將字節存儲在文件中，結合 <code>shell</code> 命令以在文件上運行 <code>hexdump</code> 以及<code>define</code> 命令，我們可以創建自己的新的 <code>hexdump</code> 命令來使用 <code>hexdump</code> 顯示內存內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) define hexdump</span></span>
<span class="line"><span>Type commands for definition of &quot;hexdump&quot;.</span></span>
<span class="line"><span>End with a line saying just &quot;end&quot;.</span></span>
<span class="line"><span>&gt;dump binary memory /tmp/dump.bin $arg0 $arg0+$arg1</span></span>
<span class="line"><span>&gt;shell hexdump -C /tmp/dump.bin</span></span>
<span class="line"><span>&gt;end</span></span></code></pre></div><p>這些命令甚至可以放在 <code>~/.gdbinit</code> 文件中，以永久定義 <code>hexdump</code> 命令。以下是它運行的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) hexdump mydata sizeof(mydata)</span></span>
<span class="line"><span>00000000  02 01 00 02 00 00 00 01  01 47 00 12 61 74 74 72  |.........G..attr|</span></span>
<span class="line"><span>00000010  69 62 75 74 65 73 2d 63  68 61 72 73 65 75 00 05  |ibutes-charseu..|</span></span>
<span class="line"><span>00000020  00                                                |.|</span></span>
<span class="line"><span>00000021</span></span></code></pre></div><h3 id="行內反彙編" tabindex="-1">行內反彙編 <a class="header-anchor" href="#行內反彙編" aria-label="Permalink to “行內反彙編”">​</a></h3><p>有時你想更多地瞭解導致崩潰的原因，而源代碼還不夠。你想查看在 CPU 指令級別發生了什麼。</p><p><code>disassemble</code> 命令可讓你查看實現函數的 CPU 指令。但是有時輸出可能很難跟蹤。通常，我想查看與該函數源代碼的特定部分相對應的指令。為此，請使用 <code>/s</code> 修飾符在反彙編中包括源代碼行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) disassemble/s main</span></span>
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
<span class="line"><span>[...snipped...]</span></span></code></pre></div><p>這裏，用 <code>info</code> 寄存器查看所有 CPU 寄存器的當前值，以及用如 <code>stepi</code> 這樣命令一次執行一條指令，可以使你對程序有了更詳細的瞭解。</p><h3 id="反向調試" tabindex="-1">反向調試 <a class="header-anchor" href="#反向調試" aria-label="Permalink to “反向調試”">​</a></h3><p>有時，你希望自己可以逆轉時間。想像一下，你已經達到了變量的監視點。監視點像是一個斷點，但不是在程序中的某個位置設置，而是在表達式上設置（使用 <code>watch</code> 命令）。每當表達式的值更改時，執行就會停止，並且調試器將獲得控制權。</p><p>想像一下你已經達到了這個監視點，並且由該變量使用的內存已更改了值。事實證明，這可能是由更早發生的事情引起的。例如，內存已釋放，現在正在重新使用。但是它是何時何地被釋放的呢？</p><p>GNU 調試器甚至可以解決此問題，因為你可以反向運行程序！</p><p>它通過在每個步驟中仔細記錄程序的狀態來實現此目的，以便可以恢復以前記錄的狀態，從而產生時間倒流的錯覺。</p><p>要啓用此狀態記錄，請使用 <code>target record-full</code> 命令。然後，你可以使用一些聽起來不太可行的命令，例如：</p><ul><li><code>reverse-step</code>，倒退到上一個源代碼行</li><li><code>*reverse-next</code>，它倒退到上一個源代碼行，向後跳過函數調用</li><li><code>reverse-finish</code>，倒退到當前函數即將被調用的時刻</li><li><code>reverse-continue</code>，它返回到程序中的先前狀態，該狀態將（現在）觸發斷點（或其他導致斷點停止的狀態）</li></ul><p>這是運行中的反向調試的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(gdb) b main</span></span>
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
<span class="line"><span>16      sometimes_crashes(0);</span></span></code></pre></div><p>這些只是 GNU 調試器可以做的一些有用的事情。還有更多有待發現。你最喜歡 <code>gdb</code> 的哪個隱藏的、鮮為人知或令人吃驚的功能？請在評論中分享。</p><hr>`,22)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/9/tips-gnu-debugger"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/9/tips-gnu-debugger",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/twaugh"},{default:i(()=>[...s[17]||(s[17]=[n("Tim Waugh",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[19]||(s[19]=[n("wxy",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const y=t(g,[["render",c]]);export{C as __pageData,y as default};
