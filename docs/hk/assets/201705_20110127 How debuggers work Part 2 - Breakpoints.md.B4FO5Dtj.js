import{_ as l,a0 as t,w as o,s as d,I as a,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"調試器工作原理（二）：斷點 | LCTT x X-CMD","titleTemplate":false,"description":"調試器工作原理（二）：斷點 | LCTT (201705) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"調試器工作原理（二）：斷點 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"調試器工作原理（二）：斷點 | LCTT (201705) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201705/20110127 How debuggers work Part 2 - Breakpoints","title":"調試器工作原理（二）：斷點","tag":"201705","desc":""},"relativePath":"201705/20110127 How debuggers work Part 2 - Breakpoints.md","filePath":"[post].md"}'),r={name:"201705/20110127 How debuggers work Part 2 - Breakpoints.md"};function h(g,s,u,b,k,x){const p=t("Link");return o(),d("div",null,[s[26]||(s[26]=a("h1",{id:"調試器工作原理-二-斷點",tabindex:"-1"},[n("調試器工作原理（二）：斷點 "),a("a",{class:"header-anchor",href:"#調試器工作原理-二-斷點","aria-label":"Permalink to “調試器工作原理（二）：斷點”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("這是調試器工作原理系列文章的第二部分，閲讀本文前，請確保你已經讀過",-1)),e(p,{href:"https://linux.cn/article-8418-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("第一部分",-1)])]),_:1}),s[2]||(s[2]=n("。",-1))]),s[27]||(s[27]=c(`<h3 id="關於本文" tabindex="-1">關於本文 <a class="header-anchor" href="#關於本文" aria-label="Permalink to “關於本文”">​</a></h3><p>我將會演示如何在調試器中實現斷點。斷點是調試的兩大利器之一，另一個是可以在被調試進程的內存中檢查變量值。我們在系列的第一部分已經瞭解過值檢查，但是斷點對我們來説依然神秘。不過本文過後，它們就不再如此了。</p><h3 id="軟件中斷" tabindex="-1">軟件中斷 <a class="header-anchor" href="#軟件中斷" aria-label="Permalink to “軟件中斷”">​</a></h3><p>為了在 x86 架構機器上實現斷點，軟件中斷（也被稱作“陷阱”）被會派上用場。在我們深入細節之前，我想先大致解釋一下中斷和陷阱的概念。</p><p>CPU 有一條單獨的執行流，一條指令接一條的執行（在更高的層面看是這樣的，但是在底層的細節上來説，現在的許多 CPU 都會並行執行多個指令，這其中的一些指令就不是按照原本的順序執行的）。為了能夠處理異步的事件，如 IO 和 硬件定時器，CPU 使用了中斷。硬件中斷通常是一個特定的電子信號，並附加了一個特別的”響應電路”。該電路通知中斷激活，並讓 CPU 停止當前執行，保存狀態，然後跳轉到一個預定義的地址，也就是中斷處理程序的位置。當處理程序完成其工作後，CPU 又從之前停止的地方重新恢復運行。</p><p>軟件中斷在規則上與硬件相似，但實際操作中有些不同。CPU 支持一些特殊的指令，來允許軟件模擬出一箇中斷。當這樣的一個指令被執行時，CPU 像對待一個硬件中斷那樣 —— 停止正常的執行流，保存狀態，然後跳轉到一個處理程序。這種“中斷”使得許多現代 OS 的驚歎設計得以高效地實現（如任務調度，虛擬內存，內存保護，調試）。</p><p>許多編程錯誤（如被 0 除）也被 CPU 當做中斷對待，常常也叫做“異常”， 這時候硬件和軟件中斷之間的界限就模糊了，很難説這種異常到底是硬件中斷還是軟件中斷。但我已經偏離今天主題太遠了，所以現在讓我們回到斷點上來。</p><h3 id="int-3-理論" tabindex="-1">int 3 理論 <a class="header-anchor" href="#int-3-理論" aria-label="Permalink to “int 3 理論”">​</a></h3><p>前面説了很多，現在簡單來説斷點就是一個部署在 CPU 上的特殊中斷，叫 <code>int 3</code>。<code>int</code> 是一個 “中斷指令”的 x86 術語，該指令是對一個預定義中斷處理的調用。x86 支持 8 位的 int 指令操作數，這決定了中斷的數量，所以理論上可以支持 256 箇中斷。前 32 箇中斷為 CPU 自己保留，而 int 3 就是本文關注的 —— 它被叫做 “調試器專用中斷”。</p><p>避免更深的解釋，我將引用“聖經”裏一段話（這裏説的“聖經”，當然指的是英特爾的體系結構軟件開發者手冊, 卷 2A）。</p><blockquote><p>INT 3 指令生成一個以字節操作碼（CC），用於調用該調試異常處理程序。（這個一字節格式是非常有用的，因為它可以用於使用斷點來替換任意指令的第一個字節 ，包括哪些一字節指令，而不會覆寫其它代碼）</p></blockquote><p>上述引用非常重要，但是目前去解釋它還是為時過早。本文後面我們會回過頭再看。</p><h3 id="int-3-實踐" tabindex="-1">int 3 實踐 <a class="header-anchor" href="#int-3-實踐" aria-label="Permalink to “int 3 實踐”">​</a></h3><p>沒錯，知道事物背後的理論非常不錯，不過，這些理論到底意思是啥？我們怎樣使用 <code>int 3</code> 部署斷點？或者怎麼翻譯成通用的編程術語 —— <em>請給我看代碼！</em></p><p>實際上，實現非常簡單。一旦你的程序執行了 <code>int 3</code> 指令， OS 就會停止程序（ OS 是怎麼做到像這樣停止進程的？ OS 註冊其 int 3 的控制程序到 CPU 即可，就這麼簡單）。在 Linux（這也是本文比較關心的地方） 上， OS 會發送給進程一個信號 ——  <code>SIGTRAP</code>。</p><p>就是這樣，真的。現在回想一下本系列的第一部分, 追蹤進程（調試程序） 會得到其子進程（或它所連接的被調試進程）所得到的所有信號的通知，接下來你就知道了。</p><p>就這樣, 沒有更多的電腦架構基礎術語了。該是例子和代碼的時候了。</p><h3 id="手動設置斷點" tabindex="-1">手動設置斷點 <a class="header-anchor" href="#手動設置斷點" aria-label="Permalink to “手動設置斷點”">​</a></h3><p>現在我要演示在程序裏設置斷點的代碼。我要使用的程序如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>section    .text</span></span>
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
<span class="line"><span>    mov     edx, len1</span></span>
<span class="line"><span>    mov     ecx, msg1</span></span>
<span class="line"><span>    mov     ebx, 1</span></span>
<span class="line"><span>    mov     eax, 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ; Execute the sys_write system call</span></span>
<span class="line"><span>    int     0x80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ; Now print the other message</span></span>
<span class="line"><span>    mov     edx, len2</span></span>
<span class="line"><span>    mov     ecx, msg2</span></span>
<span class="line"><span>    mov     ebx, 1</span></span>
<span class="line"><span>    mov     eax, 4</span></span>
<span class="line"><span>    int     0x80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ; Execute sys_exit</span></span>
<span class="line"><span>    mov     eax, 1</span></span>
<span class="line"><span>    int     0x80</span></span>
<span class="line"><span></span></span>
<span class="line"><span>section    .data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>msg1    db      &#39;Hello,&#39;, 0xa</span></span>
<span class="line"><span>len1    equ     $ - msg1</span></span>
<span class="line"><span>msg2    db      &#39;world!&#39;, 0xa</span></span>
<span class="line"><span>len2    equ     $ - msg2</span></span></code></pre></div><p>我現在在使用匯編語言，是為了當我們面對 C 代碼的時候，能清楚一些編譯細節。上面代碼做的事情非常簡單，就是在一行打印出 “hello,”，然後在下一行打印出 “world!”。這與之前文章中的程序非常類似。</p><p>現在我想在第一次打印和第二次打印之間設置一個斷點。我們看到在第一條 <code>int 0x80</code> ，其後指令是 <code>mov edx, len2</code>。（等等，再次 int？是的，Linux 使用 <code>int 0x80</code> 來實現用户進程到系統內核的系統調用。用户將系統調用的號碼及其參數放到寄存器，並執行 <code>int 0x80</code>。然後 CPU 會跳到相應的中斷處理程序，其中， OS 註冊了一個過程，該過程查看寄存器並決定要執行的系統調用。）首先，我們需要知道該指令所映射的地址。運行 <code>objdump -d</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>traced_printer2:     file format elf32-i386</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sections:</span></span>
<span class="line"><span>Idx Name          Size      VMA       LMA       File off  Algn</span></span>
<span class="line"><span>  0 .text         00000033  08048080  08048080  00000080  2**4</span></span>
<span class="line"><span>                  CONTENTS, ALLOC, LOAD, READONLY, CODE</span></span>
<span class="line"><span>  1 .data         0000000e  080490b4  080490b4  000000b4  2**2</span></span>
<span class="line"><span>                  CONTENTS, ALLOC, LOAD, DATA</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disassembly of section .text:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>08048080 &lt;.text&gt;:</span></span>
<span class="line"><span> 8048080:     ba 07 00 00 00          mov    $0x7,%edx</span></span>
<span class="line"><span> 8048085:     b9 b4 90 04 08          mov    $0x80490b4,%ecx</span></span>
<span class="line"><span> 804808a:     bb 01 00 00 00          mov    $0x1,%ebx</span></span>
<span class="line"><span> 804808f:     b8 04 00 00 00          mov    $0x4,%eax</span></span>
<span class="line"><span> 8048094:     cd 80                   int    $0x80</span></span>
<span class="line"><span> 8048096:     ba 07 00 00 00          mov    $0x7,%edx</span></span>
<span class="line"><span> 804809b:     b9 bb 90 04 08          mov    $0x80490bb,%ecx</span></span>
<span class="line"><span> 80480a0:     bb 01 00 00 00          mov    $0x1,%ebx</span></span>
<span class="line"><span> 80480a5:     b8 04 00 00 00          mov    $0x4,%eax</span></span>
<span class="line"><span> 80480aa:     cd 80                   int    $0x80</span></span>
<span class="line"><span> 80480ac:     b8 01 00 00 00          mov    $0x1,%eax</span></span>
<span class="line"><span> 80480b1:     cd 80                   int    $0x80</span></span></code></pre></div><p>所以，我們要設置斷點的地址是 <code>0x8048096</code>。等等，這不是調試器工作的真實姿勢，對吧？真正的調試器是在代碼行和函數上設置斷點，而不是赤裸裸的內存地址？完全正確，但是目前我們仍然還沒到那一步，為了更像_真正的_調試器一樣設置斷點，我們仍不得不首先理解一些符號和調試信息。所以現在，我們就得面對內存地址。</p><p>在這點上，我真想又偏離一下主題。所以現在你有兩個選擇，如果你真的感興趣想知道_為什麼_那個地址應該是 <code>0x8048096</code>，它代表着什麼，那就看下面的部分。否則你只是想了解斷點，你可以跳過這部分。</p><h3 id="題外話-——-程序地址和入口" tabindex="-1">題外話 —— 程序地址和入口 <a class="header-anchor" href="#題外話-——-程序地址和入口" aria-label="Permalink to “題外話 —— 程序地址和入口”">​</a></h3><p>坦白説，<code>0x8048096</code> 本身沒多大意義，僅僅是可執行程序的 text 部分開端偏移的一些字節。如果你看上面導出來的列表，你會看到 text 部分從地址 <code>0x08048080</code> 開始。這告訴 OS 在分配給進程的虛擬地址空間裏，將該地址映射到 text 部分開始的地方。在 Linux 上面，這些地址可以是絕對地址（例如，當可執行程序加載到內存中時它不做重定位），因為通過虛擬地址系統，每個進程獲得自己的一塊內存，並且將整個 32 位地址空間看做自己的（稱為 “線性” 地址）。</p><p>如果我們使用 <code>readelf</code> 命令檢查 ELF 文件頭部（ELF，可執行和可鏈接格式，是 Linux 上用於對象文件、共享庫和可執行程序的文件格式），我們會看到：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ readelf -h traced_printer2</span></span>
<span class="line"><span>ELF Header:</span></span>
<span class="line"><span>  Magic:   7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00</span></span>
<span class="line"><span>  Class:                             ELF32</span></span>
<span class="line"><span>  Data:                              2&#39;s complement, little endian</span></span>
<span class="line"><span>  Version:                           1 (current)</span></span>
<span class="line"><span>  OS/ABI:                            UNIX - System V</span></span>
<span class="line"><span>  ABI Version:                       0</span></span>
<span class="line"><span>  Type:                              EXEC (Executable file)</span></span>
<span class="line"><span>  Machine:                           Intel 80386</span></span>
<span class="line"><span>  Version:                           0x1</span></span>
<span class="line"><span>  Entry point address:               0x8048080</span></span>
<span class="line"><span>  Start of program headers:          52 (bytes into file)</span></span>
<span class="line"><span>  Start of section headers:          220 (bytes into file)</span></span>
<span class="line"><span>  Flags:                             0x0</span></span>
<span class="line"><span>  Size of this header:               52 (bytes)</span></span>
<span class="line"><span>  Size of program headers:           32 (bytes)</span></span>
<span class="line"><span>  Number of program headers:         2</span></span>
<span class="line"><span>  Size of section headers:           40 (bytes)</span></span>
<span class="line"><span>  Number of section headers:         4</span></span>
<span class="line"><span>  Section header string table index: 3</span></span></code></pre></div><p>注意頭部裏的 <code>Entry point address</code>，它同樣指向 <code>0x8048080</code>。所以我們在系統層面解釋該 elf 文件的編碼信息，它意思是：</p><ol><li>映射 text 部分（包含所給的內容）到地址 <code>0x8048080</code></li><li>從入口 —— 地址 <code>0x8048080</code> 處開始執行</li></ol><p>但是，為什麼是 <code>0x8048080</code> 呢？事實證明是一些歷史原因。一些 Google 的結果把我引向源頭，宣傳每個進程的地址空間的前 128M 是保留在棧裏的。128M 對應為 <code>0x8000000</code>，該地址是可執行程序其他部分可以開始的地方。而 <code>0x8048080</code>，比較特別，是 Linux <code>ld</code> 鏈接器使用的默認入口地址。該入口可以通過給 <code>ld</code> 傳遞 <code>-Ttext</code> 參數改變。</p><p>總結一下，這地址沒啥特別的，我們可以隨意修改它。只要 ELF 可執行文件被合理的組織，並且頭部裏的入口地址與真正的程序代碼（text 部分）開始的地址匹配，一切都沒問題。</p><h3 id="用-int-3-在調試器中設置斷點" tabindex="-1">用 int 3 在調試器中設置斷點 <a class="header-anchor" href="#用-int-3-在調試器中設置斷點" aria-label="Permalink to “用 int 3 在調試器中設置斷點”">​</a></h3><p>為了在被追蹤進程的某些目標地址設置一個斷點，調試器會做如下工作：</p><ol><li>記住存儲在目標地址的數據</li><li>用 int 指令替換掉目標地址的第一個字節</li></ol><p>然後，當調試器要求 OS 運行該進程的時候（通過上一篇文章中提過的 <code>PTRACE_CONT</code>），進程就會運行起來直到遇到 <code>int 3</code>，此處進程會停止運行，並且 OS 會發送一個信號給調試器。調試器會收到一個信號表明其子進程（或者説被追蹤進程）停止了。調試器可以做以下工作：</p><ol><li>在目標地址，用原來的正常執行指令替換掉 int 3 指令</li><li>將被追蹤進程的指令指針回退一步。這是因為現在指令指針位於剛剛執行過的 int 3 之後。</li><li>允許用户以某些方式與進程交互，因為該進程仍然停止在特定的目標地址。這裏你的調試器可以讓你取得變量值，調用棧等等。</li><li>當用户想繼續運行，調試器會小心地把斷點放回目標地址去（因為它在第 1 步時被移走了），除非用户要求取消該斷點。</li></ol><p>讓我們來看看，這些步驟是如何翻譯成具體代碼的。我們會用到第一篇裏的調試器 “模板”（fork 一個子進程並追蹤它）。無論如何，文末會有一個完整樣例源代碼的鏈接</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* Obtain and show child&#39;s instruction pointer */</span></span>
<span class="line"><span>ptrace(PTRACE_GETREGS, child_pid, 0, &amp;regs);</span></span>
<span class="line"><span>procmsg(&quot;Child started. EIP = 0x%08x\\n&quot;, regs.eip);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Look at the word at the address we&#39;re interested in */</span></span>
<span class="line"><span>unsigned addr = 0x8048096;</span></span>
<span class="line"><span>unsigned data = ptrace(PTRACE_PEEKTEXT, child_pid, (void*)addr, 0);</span></span>
<span class="line"><span>procmsg(&quot;Original data at 0x%08x: 0x%08x\\n&quot;, addr, data);</span></span></code></pre></div><p>這裏調試器從被追蹤的進程中取回了指令指針，也檢查了在 <code>0x8048096</code> 的字。當開始追蹤運行文章開頭的彙編代碼，將會打印出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[13028] Child started. EIP = 0x08048080</span></span>
<span class="line"><span>[13028] Original data at 0x08048096: 0x000007ba</span></span></code></pre></div><p>目前為止都看起來不錯。接下來：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* Write the trap instruction &#39;int 3&#39; into the address */</span></span>
<span class="line"><span>unsigned data_with_trap = (data &amp; 0xFFFFFF00) | 0xCC;</span></span>
<span class="line"><span>ptrace(PTRACE_POKETEXT, child_pid, (void*)addr, (void*)data_with_trap);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* See what&#39;s there again... */</span></span>
<span class="line"><span>unsigned readback_data = ptrace(PTRACE_PEEKTEXT, child_pid, (void*)addr, 0);</span></span>
<span class="line"><span>procmsg(&quot;After trap, data at 0x%08x: 0x%08x\\n&quot;, addr, readback_data);</span></span></code></pre></div><p>注意到 <code>int 3</code> 是如何被插入到目標地址的。此處打印：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[13028] After trap, data at 0x08048096: 0x000007cc</span></span></code></pre></div><p>正如預料的那樣 —— <code>0xba</code> 被 <code>0xcc</code> 替換掉了。現在調試器運行子進程並等待它在斷點處停止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* Let the child run to the breakpoint and wait for it to</span></span>
<span class="line"><span>** reach it</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>ptrace(PTRACE_CONT, child_pid, 0, 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wait(&amp;wait_status);</span></span>
<span class="line"><span>if (WIFSTOPPED(wait_status)) {</span></span>
<span class="line"><span>    procmsg(&quot;Child got a signal: %s\\n&quot;, strsignal(WSTOPSIG(wait_status)));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>    perror(&quot;wait&quot;);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* See where the child is now */</span></span>
<span class="line"><span>ptrace(PTRACE_GETREGS, child_pid, 0, &amp;regs);</span></span>
<span class="line"><span>procmsg(&quot;Child stopped at EIP = 0x%08x\\n&quot;, regs.eip);</span></span></code></pre></div><p>這裏打印出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello,</span></span>
<span class="line"><span>[13028] Child got a signal: Trace/breakpoint trap</span></span>
<span class="line"><span>[13028] Child stopped at EIP = 0x08048097</span></span></code></pre></div><p>注意到 “Hello,” 在斷點前打印出來了 —— 完全如我們計劃的那樣。同時注意到子進程停止的地方 —— 剛好就是單字節中斷指令後面。</p><p>最後，如早先詮釋的那樣，為了讓子進程繼續運行，我們得做一些工作。我們用原來的指令替換掉中斷指令，並且讓進程從這裏繼續之前的運行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* Remove the breakpoint by restoring the previous data</span></span>
<span class="line"><span>** at the target address, and unwind the EIP back by 1 to</span></span>
<span class="line"><span>** let the CPU execute the original instruction that was</span></span>
<span class="line"><span>** there.</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>ptrace(PTRACE_POKETEXT, child_pid, (void*)addr, (void*)data);</span></span>
<span class="line"><span>regs.eip -= 1;</span></span>
<span class="line"><span>ptrace(PTRACE_SETREGS, child_pid, 0, &amp;regs);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* The child can continue running now */</span></span>
<span class="line"><span>ptrace(PTRACE_CONT, child_pid, 0, 0);</span></span></code></pre></div><p>這會使子進程繼續打印出 “world！”，然後退出。</p><p>注意，我們在這裏沒有恢復斷點。通過在單步調試模式下，運行原來的指令，然後將中斷放回去，並且只在運行 PTRACE_CONT 時做到恢復斷點。文章稍後會展示 debuglib 如何做到這點。</p><h3 id="更多關於-int-3" tabindex="-1">更多關於 int 3 <a class="header-anchor" href="#更多關於-int-3" aria-label="Permalink to “更多關於 int 3”">​</a></h3><p>現在可以回過頭去看看 <code>int 3</code> 和因特爾手冊裏那個神秘的説明，原文如下：</p><blockquote><p>這個一字節格式是非常有用的，因為它可以用於使用斷點來替換任意指令的第一個字節 ，包括哪些一字節指令，而不會覆寫其它代碼</p></blockquote><p>int 指令在 x86 機器上佔兩個字節 —— <code>0xcd</code> 緊跟着中斷數（細心的讀者可以在上面列出的轉儲中發現 <code>int 0x80</code> 翻譯成了 <code>cd 80</code>）。<code>int 3</code> 被編碼為 <code>cd 03</code>，但是為其還保留了一個單字節指令 —— <code>0xcc</code>。</p><p>為什麼這樣呢？因為這可以允許我們插入一個斷點，而不需要重寫多餘的指令。這非常重要，考慮下面的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    .. some code ..</span></span>
<span class="line"><span>    jz    foo</span></span>
<span class="line"><span>    dec   eax</span></span>
<span class="line"><span>foo:</span></span>
<span class="line"><span>    call  bar</span></span>
<span class="line"><span>    .. some code ..</span></span></code></pre></div><p>假設你想在 <code>dec eax</code> 這裏放置一個斷點。這對應一個單字節指令（操作碼為 <code>0x48</code>）。由於替換斷點的指令長於一個字節，我們不得不強制覆蓋掉下個指令（<code>call</code>）的一部分，這就會篡改 <code>call</code> 指令，並很可能導致一些完全不合理的事情發生。這樣一來跳轉到 <code>foo</code> 分支的 <code>jz foo</code> 指令會導致什麼？就會不在 dec eax 這裏停止，CPU 徑直去執行後面一些無效的指令了。</p><p>而有了單字節的 <code>int 3</code> 指令，這個問題就解決了。 1 字節是在 x86 上面所能找到的最短指令，這樣我們可以保證僅改變我們想中斷的指令。</p><h3 id="封裝一些晦澀的細節" tabindex="-1">封裝一些晦澀的細節 <a class="header-anchor" href="#封裝一些晦澀的細節" aria-label="Permalink to “封裝一些晦澀的細節”">​</a></h3><p>很多上述章節樣例代碼的底層細節，都可以很容易封裝在方便使用的 API 裏。我已經做了很多封裝的工作，將它們都放在一個叫做 debuglib 的通用庫裏 —— 文末可以去下載。這裏我僅僅是想展示它的用法示例，但是繞了一圈。下面我們將追蹤一個用 C 寫的程序。</p><h3 id="追蹤一個-c-程序地址和入口" tabindex="-1">追蹤一個 C 程序地址和入口 <a class="header-anchor" href="#追蹤一個-c-程序地址和入口" aria-label="Permalink to “追蹤一個 C 程序地址和入口”">​</a></h3><p>目前為止，為了簡單，我把注意力放在了目標彙編代碼。現在是時候往上一個層次，去看看我們如何追蹤一個 C 程序。</p><p>事實證明並不是非常難 —— 找到放置斷點位置有一點難罷了。考慮下面樣例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void do_stuff()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    printf(&quot;Hello, &quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    for (int i = 0; i &lt; 4; ++i)</span></span>
<span class="line"><span>        do_stuff();</span></span>
<span class="line"><span>    printf(&quot;world!\\n&quot;);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>假設我想在 <code>do_stuff</code> 入口處放置一個斷點。我會先使用 <code>objdump</code> 反彙編一下可執行文件，但是打印出的東西太多。尤其看到很多無用，也不感興趣的 C 程序運行時的初始化代碼。所以我們僅看一下 <code>do_stuff</code> 部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>080483e4 &lt;do_stuff&gt;:</span></span>
<span class="line"><span> 80483e4:     55                      push   %ebp</span></span>
<span class="line"><span> 80483e5:     89 e5                   mov    %esp,%ebp</span></span>
<span class="line"><span> 80483e7:     83 ec 18                sub    $0x18,%esp</span></span>
<span class="line"><span> 80483ea:     c7 04 24 f0 84 04 08    movl   $0x80484f0,(%esp)</span></span>
<span class="line"><span> 80483f1:     e8 22 ff ff ff          call   8048318 &lt;puts@plt&gt;</span></span>
<span class="line"><span> 80483f6:     c9                      leave</span></span>
<span class="line"><span> 80483f7:     c3                      ret</span></span></code></pre></div><p>那麼，我們將會把斷點放在 <code>0x080483e4</code>，這是 <code>do_stuff</code> 第一條指令執行的地方。而且，該函數是在循環裏面調用的，我們想要在斷點處一直停止執行直到循環結束。我們將會使用 debuglib 來簡化該流程，下面是完整的調試函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void run_debugger(pid_t child_pid)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    procmsg(&quot;debugger started\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Wait for child to stop on its first instruction */</span></span>
<span class="line"><span>    wait(0);</span></span>
<span class="line"><span>    procmsg(&quot;child now at EIP = 0x%08x\\n&quot;, get_child_eip(child_pid));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Create breakpoint and run to it*/</span></span>
<span class="line"><span>    debug_breakpoint* bp = create_breakpoint(child_pid, (void*)0x080483e4);</span></span>
<span class="line"><span>    procmsg(&quot;breakpoint created\\n&quot;);</span></span>
<span class="line"><span>    ptrace(PTRACE_CONT, child_pid, 0, 0);</span></span>
<span class="line"><span>    wait(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* Loop as long as the child didn&#39;t exit */</span></span>
<span class="line"><span>    while (1) {</span></span>
<span class="line"><span>        /* The child is stopped at a breakpoint here. Resume its</span></span>
<span class="line"><span>        ** execution until it either exits or hits the</span></span>
<span class="line"><span>        ** breakpoint again.</span></span>
<span class="line"><span>        */</span></span>
<span class="line"><span>        procmsg(&quot;child stopped at breakpoint. EIP = 0x%08X\\n&quot;, get_child_eip(child_pid));</span></span>
<span class="line"><span>        procmsg(&quot;resuming\\n&quot;);</span></span>
<span class="line"><span>        int rc = resume_from_breakpoint(child_pid, bp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (rc == 0) {</span></span>
<span class="line"><span>            procmsg(&quot;child exited\\n&quot;);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else if (rc == 1) {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            procmsg(&quot;unexpected: %d\\n&quot;, rc);</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cleanup_breakpoint(bp);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>為了避免修改 EIP 標誌位和目的進程的內存空間的麻煩，我們僅需要調用 <code>create_breakpoint</code>，<code>resume_from_breakpoint</code> 和 <code>cleanup_breakpoint</code>。讓我們來看看追蹤上面的 C 代碼樣例會輸出什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bp_use_lib traced_c_loop</span></span>
<span class="line"><span>[13363] debugger started</span></span>
<span class="line"><span>[13364] target started. will run &#39;traced_c_loop&#39;</span></span>
<span class="line"><span>[13363] child now at EIP = 0x00a37850</span></span>
<span class="line"><span>[13363] breakpoint created</span></span>
<span class="line"><span>[13363] child stopped at breakpoint. EIP = 0x080483E5</span></span>
<span class="line"><span>[13363] resuming</span></span>
<span class="line"><span>Hello,</span></span>
<span class="line"><span>[13363] child stopped at breakpoint. EIP = 0x080483E5</span></span>
<span class="line"><span>[13363] resuming</span></span>
<span class="line"><span>Hello,</span></span>
<span class="line"><span>[13363] child stopped at breakpoint. EIP = 0x080483E5</span></span>
<span class="line"><span>[13363] resuming</span></span>
<span class="line"><span>Hello,</span></span>
<span class="line"><span>[13363] child stopped at breakpoint. EIP = 0x080483E5</span></span>
<span class="line"><span>[13363] resuming</span></span>
<span class="line"><span>Hello,</span></span>
<span class="line"><span>world!</span></span>
<span class="line"><span>[13363] child exited</span></span></code></pre></div><p>如預期一樣！</p><h3 id="樣例代碼" tabindex="-1">樣例代碼 <a class="header-anchor" href="#樣例代碼" aria-label="Permalink to “樣例代碼”">​</a></h3>`,77)),a("p",null,[e(p,{href:"https://github.com/eliben/code-for-blog/tree/master/2011/debuggers_part2_code"},{default:i(()=>[...s[3]||(s[3]=[n("這裏是",-1)])]),_:1}),s[4]||(s[4]=n("本文用到的完整源代碼文件。在歸檔中你可以找到：",-1))]),s[28]||(s[28]=a("ul",null,[a("li",null,"debuglib.h 和 debuglib.c - 封裝了調試器的一些內部工作的示例庫"),a("li",null,"bp_manual.c - 這篇文章開始部分介紹的“手動”設置斷點的方法。一些樣板代碼使用了 debuglib 庫。"),a("li",null,"bp_use_lib.c - 大部分代碼使用了 debuglib 庫，用於在第二個代碼範例中演示在 C 程序的循環中追蹤。")],-1)),s[29]||(s[29]=a("h3",{id:"引文",tabindex:"-1"},[n("引文 "),a("a",{class:"header-anchor",href:"#引文","aria-label":"Permalink to “引文”"},"​")],-1)),s[30]||(s[30]=a("p",null,"在準備本文的時候，我搜集了如下的資源和文章：",-1)),a("ul",null,[a("li",null,[e(p,{href:"http://www.alexonlinux.com/how-debugger-works"},{default:i(()=>[...s[5]||(s[5]=[n("How debugger works",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.linuxforums.org/articles/understanding-elf-using-readelf-and-objdump_125.html"},{default:i(()=>[...s[6]||(s[6]=[n("Understanding ELF using readelf and objdump",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://mainisusuallyafunction.blogspot.com/2011/01/implementing-breakpoints-on-x86-linux.html"},{default:i(()=>[...s[7]||(s[7]=[n("Implementing breakpoints on x86 Linux",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://www.nasm.us/xdoc/2.09.04/html/nasmdoc0.html"},{default:i(()=>[...s[8]||(s[8]=[n("NASM manual",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://stackoverflow.com/questions/2187484/elf-binary-entry-point"},{default:i(()=>[...s[9]||(s[9]=[n("SO discussion of the ELF entry point",-1)])]),_:1})]),a("li",null,[e(p,{href:"http://news.ycombinator.net/item?id=2131894"},{default:i(()=>[...s[10]||(s[10]=[n("This Hacker News discussion",-1)])]),_:1}),s[11]||(s[11]=n(" of the first part of the series",-1))]),a("li",null,[e(p,{href:"http://www.deansys.com/doc/gdbInternals/gdbint_toc.html"},{default:i(()=>[...s[12]||(s[12]=[n("GDB Internals",-1)])]),_:1})])]),s[31]||(s[31]=a("hr",null,null,-1)),a("p",null,[s[14]||(s[14]=n("via: ",-1)),e(p,{href:"http://eli.thegreenplace.net/2011/01/27/how-debuggers-work-part-2-breakpoints"},{default:i(()=>[...s[13]||(s[13]=[n("http://eli.thegreenplace.net/2011/01/27/how-debuggers-work-part-2-breakpoints",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("作者：",-1)),e(p,{href:"http://eli.thegreenplace.net/"},{default:i(()=>[...s[15]||(s[15]=[n("Eli Bendersky",-1)])]),_:1}),s[19]||(s[19]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wi-cuckoo"},{default:i(()=>[...s[16]||(s[16]=[n("wi-cuckoo",-1)])]),_:1}),s[20]||(s[20]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[17]||(s[17]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中國",-1)])]),_:1}),s[25]||(s[25]=n(" 榮譽推出",-1))])])}const y=l(r,[["render",h]]);export{C as __pageData,y as default};
