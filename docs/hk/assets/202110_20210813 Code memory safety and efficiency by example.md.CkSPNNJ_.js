import{_ as t,a0 as c,w as o,s as d,ao as l,I as i,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"實例講解代碼之內存安全與效率 | LCTT x X-CMD","titleTemplate":false,"description":"實例講解代碼之內存安全與效率 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"實例講解代碼之內存安全與效率 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"實例講解代碼之內存安全與效率 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20210813 Code memory safety and efficiency by example","title":"實例講解代碼之內存安全與效率","tag":"202110","desc":""},"relativePath":"202110/20210813 Code memory safety and efficiency by example.md","filePath":"[post].md"}'),r={name:"202110/20210813 Code memory safety and efficiency by example.md"};function h(g,s,u,k,f,b){const a=c("Link");return o(),d("div",null,[s[22]||(s[22]=l(`<h1 id="實例講解代碼之內存安全與效率" tabindex="-1">實例講解代碼之內存安全與效率 <a class="header-anchor" href="#實例講解代碼之內存安全與效率" aria-label="Permalink to “實例講解代碼之內存安全與效率”">​</a></h1><blockquote><p>瞭解有關內存安全和效率的更多信息。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202110/03/101238cd0hgdrhamzab7hj.jpg" alt=""></p><p>C 是一種高級語言，同時具有“<ruby>接近金屬<rt>close-to-the-metal</rt></ruby>”（LCTT 譯註：即“接近人類思維方式”的反義詞）的特性，這使得它有時看起來更像是一種可移植的彙編語言，而不像 Java 或 Python 這樣的兄弟語言。內存管理作為上述特性之一，涵蓋了正在執行的程序對內存的安全和高效使用。本文通過 C 語言代碼示例，以及現代 C 語言編譯器生成的彙編語言代碼段，詳細介紹了內存安全性和效率。</p><p>儘管代碼示例是用 C 語言編寫的，但安全高效的內存管理指南對於 C++ 是同樣適用的。這兩種語言在很多細節上有所不同（例如，C++ 具有 C 所缺乏的面向對象特性和泛型），但在內存管理方面面臨的挑戰是一樣的。</p><h3 id="執行中程序的內存概述" tabindex="-1">執行中程序的內存概述 <a class="header-anchor" href="#執行中程序的內存概述" aria-label="Permalink to “執行中程序的內存概述”">​</a></h3><p>對於正在執行的程序（又名 <em><ruby>進程<rt>process</rt></ruby></em>），內存被劃分為三個區域：<strong><ruby>棧<rt>stack</rt></ruby></strong>、<strong><ruby>堆<rt>heap</rt></ruby></strong> 和 <strong><ruby>靜態區<rt>static area</rt></ruby></strong>。下文會給出每個區域的概述，以及完整的代碼示例。</p><p>作為通用 CPU 寄存器的替補，<em>棧</em> 為代碼塊（例如函數或循環體）中的局部變量提供暫存器存儲。傳遞給函數的參數在此上下文中也視作局部變量。看一下下面這個簡短的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void some_func(int a, int b) {</span></span>
<span class="line"><span>   int n;</span></span>
<span class="line"><span>   ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過 <code>a</code> 和 <code>b</code> 傳遞的參數以及局部變量 <code>n</code> 的存儲會在棧中，除非編譯器可以找到通用寄存器。編譯器傾向於優先將通用寄存器用作暫存器，因為 CPU 對這些寄存器的訪問速度很快（一個時鐘週期）。然而，這些寄存器在台式機、筆記本電腦和手持機器的標準架構上很少（大約 16 個）。</p><p>在只有彙編語言程序員才能看到的實施層面，棧被組織為具有 <code>push</code>（插入）和 <code>pop</code>（刪除）操作的 LIFO（後進先出）列表。 <code>top</code> 指針可以作為偏移的基地址；這樣，除了 <code>top</code> 之外的棧位置也變得可訪問了。例如，表達式 <code>top+16</code> 指向堆棧的 <code>top</code> 指針上方 16 個字節的位置，表達式 <code>top-16</code> 指向 <code>top</code> 指針下方 16 個字節的位置。因此，可以通過 <code>top</code> 指針訪問實現了暫存器存儲的棧的位置。在標準的 ARM 或 Intel 架構中，棧從高內存地址增長到低內存地址；因此，減小某進程的 <code>top</code> 就是增大其棧規模。</p><p>使用棧結構就意味着輕鬆高效地使用內存。編譯器（而非程序員）會編寫管理棧的代碼，管理過程通過分配和釋放所需的暫存器存儲來實現；程序員聲明函數參數和局部變量，將實現過程交給編譯器。此外，完全相同的棧存儲可以在連續的函數調用和代碼塊（如循環）中重複使用。精心設計的模組化代碼會將棧存儲作為暫存器的首選內存選項，同時優化編譯器要儘可能使用通用寄存器而不是棧。</p><p><strong>堆</strong> 提供的存儲是通過程序員代碼顯式分配的，堆分配的語法因語言而異。在 C 中，成功調用庫函數 <code>malloc</code>（或其變體 <code>calloc</code> 等）會分配指定數量的字節（在 C++ 和 Java 等語言中，<code>new</code> 運算符具有相同的用途）。編程語言在如何釋放堆分配的存儲方面有着巨大的差異：</p><ul><li><p>在 Java、Go、Lisp 和 Python 等語言中，程序員不會顯式釋放動態分配的堆存儲。</p><p>例如，下面這個 Java 語句為一個字符串分配了堆存儲，並將這個堆存儲的地址存儲在變量 <code>greeting</code> 中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>String greeting = new String(&quot;Hello, world!&quot;);</span></span></code></pre></div><p>Java 有一個垃圾回收器，它是一個運行時實用程序，如果進程無法再訪問自己分配的堆存儲，回收器可以使其自動釋放。因此，Java 堆釋放是通過垃圾收集器自動進行的。在上面的示例中，垃圾收集器將在變量 <code>greeting</code> 超出作用域後，釋放字符串的堆存儲。</p></li><li><p>Rust 編譯器會編寫堆釋放代碼。這是 Rust 在不依賴垃圾回收器的情況下，使堆釋放實現自動化的開創性努力，但這也會帶來運行時複雜性和開銷。向 Rust 的努力致敬！</p></li><li><p>在 C（和 C++）中，堆釋放是程序員的任務。程序員調用 <code>malloc</code> 分配堆存儲，然後負責相應地調用庫函數 <code>free</code> 來釋放該存儲空間（在 C++ 中，<code>new</code> 運算符分配堆存儲，而 <code>delete</code> 和 <code>delete[]</code> 運算符釋放此類存儲）。下面是一個 C 語言代碼示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char* greeting = malloc(14);       /* 14 heap bytes */</span></span>
<span class="line"><span>strcpy(greeting, &quot;Hello, world!&quot;); /* copy greeting into bytes */</span></span>
<span class="line"><span>puts(greeting);                    /* print greeting */</span></span>
<span class="line"><span>free(greeting);                    /* free malloced bytes */</span></span></code></pre></div><p>C 語言避免了垃圾回收器的成本和複雜性，但也不過是讓程序員承擔了堆釋放的任務。</p></li></ul><p>內存的 <strong>靜態區</strong> 為可執行代碼（例如 C 語言函數）、字符串文字（例如“Hello, world!”）和全局變量提供存儲空間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int n;                       /* global variable */</span></span>
<span class="line"><span>int main() {                 /* function */</span></span>
<span class="line"><span>   char* msg = &quot;No comment&quot;; /* string literal */</span></span>
<span class="line"><span>   ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>該區域是靜態的，因為它的大小從進程執行開始到結束都固定不變。由於靜態區相當於進程固定大小的內存佔用，因此經驗法則是通過避免使用全局數組等方法來使該區域儘可能小。</p><p>下文會結合代碼示例對本節概述展開進一步講解。</p><h3 id="棧存儲" tabindex="-1">棧存儲 <a class="header-anchor" href="#棧存儲" aria-label="Permalink to “棧存儲”">​</a></h3><p>想像一個有各種連續執行的任務的程序，任務包括了處理每隔幾分鐘通過網絡下載並存儲在本地文件中的數字數據。下面的 <code>stack</code> 程序簡化了處理流程（僅是將奇數整數值轉換為偶數），而將重點放在棧存儲的好處上。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define Infile   &quot;incoming.dat&quot;</span></span>
<span class="line"><span>#define Outfile  &quot;outgoing.dat&quot;</span></span>
<span class="line"><span>#define IntCount 128000  /* 128,000 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void other_task1() { /*...*/ }</span></span>
<span class="line"><span>void other_task2() { /*...*/ }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void process_data(const char* infile,</span></span>
<span class="line"><span>          const char* outfile,</span></span>
<span class="line"><span>          const unsigned n) {</span></span>
<span class="line"><span>  int nums[n];</span></span>
<span class="line"><span>  FILE* input = fopen(infile, &quot;r&quot;);</span></span>
<span class="line"><span>  if (NULL == infile) return;</span></span>
<span class="line"><span>  FILE* output = fopen(outfile, &quot;w&quot;);</span></span>
<span class="line"><span>  if (NULL == output) {</span></span>
<span class="line"><span>    fclose(input);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fread(nums, n, sizeof(int), input); /* read input data */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>    if (1 == (nums[i] &amp; 0x1))  /* odd parity? */</span></span>
<span class="line"><span>      nums[i]--;               /* make even */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fclose(input);               /* close input file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fwrite(nums, n, sizeof(int), output);</span></span>
<span class="line"><span>  fclose(output);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  process_data(Infile, Outfile, IntCount);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  /** now perform other tasks **/</span></span>
<span class="line"><span>  other_task1(); /* automatically released stack storage available */</span></span>
<span class="line"><span>  other_task2(); /* ditto */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>底部的 <code>main</code> 函數首先調用 <code>process_data</code> 函數，該函數會創建一個基於棧的數組，其大小由參數 <code>n</code> 給定（當前示例中為 128,000）。因此，該數組佔用 <code>128000 * sizeof(int)</code> 個字節，在標準設備上達到了 512,000 字節（<code>int</code> 在這些設備上是四個字節）。然後數據會被讀入數組（使用庫函數 <code>fread</code>），循環處理，並保存到本地文件 <code>outgoing.dat</code>（使用庫函數 <code>fwrite</code>）。</p><p>當 <code>process_data</code> 函數返回到其調用者 <code>main</code> 函數時，<code>process_data</code> 函數的大約 500MB 棧暫存器可供 <code>stack</code> 程序中的其他函數用作暫存器。在此示例中，<code>main</code> 函數接下來調用存根函數 <code>other_task1</code> 和 <code>other_task2</code>。這三個函數在 <code>main</code> 中依次調用，這意味着所有三個函數都可以使用相同的堆棧存儲作為暫存器。因為編寫棧管理代碼的是編譯器而不是程序員，所以這種方法對程序員來説既高效又容易。</p><p>在 C 語言中，在塊（例如函數或循環體）內定義的任何變量默認都有一個 <code>auto</code> 存儲類，這意味着該變量是基於棧的。存儲類 <code>register</code> 現在已經過時了，因為 C 編譯器會主動嘗試儘可能使用 CPU 寄存器。只有在塊內定義的變量可能是 <code>register</code>，如果沒有可用的 CPU 寄存器，編譯器會將其更改為 <code>auto</code>。基於棧的編程可能是不錯的首選方式，但這種風格確實有一些挑戰性。下面的 <code>badStack</code> 程序説明了這點。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const int* get_array(const unsigned n) {</span></span>
<span class="line"><span>  int arr[n]; /* stack-based array */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i++) arr[i] = 1 + 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return arr;  /** ERROR **/</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  const unsigned n = 16;</span></span>
<span class="line"><span>  const int* ptr = get_array(n);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i++) printf(&quot;%i &quot;, ptr[i]);</span></span>
<span class="line"><span>  puts(&quot;\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>badStack</code> 程序中的控制流程很簡單。<code>main</code> 函數使用 16（LCTT 譯註：原文為 128，應為作者筆誤）作為參數調用函數 <code>get_array</code>，然後被調用函數會使用傳入參數來創建對應大小的本地數組。<code>get_array</code> 函數會初始化數組並返回給 <code>main</code> 中的數組標識符 <code>arr</code>。 <code>arr</code> 是一個指針常量，保存數組的第一個 <code>int</code> 元素的地址。</p><p>當然，本地數組 <code>arr</code> 可以在 <code>get_array</code> 函數中訪問，但是一旦 <code>get_array</code> 返回，就不能合法訪問該數組。儘管如此，<code>main</code> 函數會嘗試使用函數 <code>get_array</code> 返回的堆棧地址 <code>arr</code> 來打印基於棧的數組。現代編譯器會警告錯誤。例如，下面是來自 GNU 編譯器的警告：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>badStack.c: In function &#39;get_array&#39;:</span></span>
<span class="line"><span>badStack.c:9:10: warning: function returns address of local variable [-Wreturn-local-addr]</span></span>
<span class="line"><span>return arr;  /** ERROR **/</span></span></code></pre></div><p>一般規則是，如果使用棧存儲實現局部變量，應該僅在該變量所在的代碼塊內，訪問這塊基於棧的存儲（在本例中，數組指針 <code>arr</code> 和循環計數器 <code>i</code> 均為這樣的局部變量）。因此，函數永遠不應該返回指向基於棧存儲的指針。</p><h3 id="堆存儲" tabindex="-1">堆存儲 <a class="header-anchor" href="#堆存儲" aria-label="Permalink to “堆存儲”">​</a></h3><p>接下來使用若干代碼示例凸顯在 C 語言中使用堆存儲的優點。在第一個示例中，使用了最優方案分配、使用和釋放堆存儲。第二個示例（在下一節中）將堆存儲嵌套在了其他堆存儲中，這會使其釋放操作變得複雜。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int* get_heap_array(unsigned n) {</span></span>
<span class="line"><span>  int* heap_nums = malloc(sizeof(int) * n); </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i++)</span></span>
<span class="line"><span>    heap_nums[i] = i + 1;  /* initialize the array */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  /* stack storage for variables heap_nums and i released</span></span>
<span class="line"><span>     automatically when get_num_array returns */</span></span>
<span class="line"><span>  return heap_nums; /* return (copy of) the pointer */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  unsigned n = 100, i;</span></span>
<span class="line"><span>  int* heap_nums = get_heap_array(n); /* save returned address */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  if (NULL == heap_nums) /* malloc failed */</span></span>
<span class="line"><span>    fprintf(stderr, &quot;%s\\n&quot;, &quot;malloc(...) failed...&quot;);</span></span>
<span class="line"><span>  else {</span></span>
<span class="line"><span>    for (i = 0; i &lt; n; i++) printf(&quot;%i\\n&quot;, heap_nums[i]);</span></span>
<span class="line"><span>    free(heap_nums); /* free the heap storage */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return 0; </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的 <code>heap</code> 程序有兩個函數： <code>main</code> 函數使用參數（示例中為 100）調用 <code>get_heap_array</code> 函數，參數用來指定數組應該有多少個 <code>int</code> 元素。因為堆分配可能會失敗，<code>main</code> 函數會檢查 <code>get_heap_array</code> 是否返回了 <code>NULL</code>；如果是，則表示失敗。如果分配成功，<code>main</code> 將打印數組中的 <code>int</code> 值，然後立即調用庫函數 <code>free</code> 來對堆存儲解除分配。這就是最優的方案。</p><p><code>get_heap_array</code> 函數以下列語句開頭，該語句值得仔細研究一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int* heap_nums = malloc(sizeof(int) * n); /* heap allocation */</span></span></code></pre></div><p><code>malloc</code> 庫函數及其變體函數針對字節進行操作；因此，<code>malloc</code> 的參數是 <code>n</code> 個 <code>int</code> 類型元素所需的字節數（<code>sizeof(int)</code> 在標準現代設備上是四個字節）。<code>malloc</code> 函數返回所分配字節段的首地址，如果失敗則返回 <code>NULL</code> .</p><p>如果成功調用 <code>malloc</code>，在現代台式機上其返回的地址大小為 64 位。在手持設備和早些時候的台式機上，該地址的大小可能是 32 位，或者甚至更小，具體取決於其年代。堆分配數組中的元素是 <code>int</code> 類型，這是一個四字節的有符號整數。這些堆分配的 <code>int</code> 的地址存儲在基於棧的局部變量 <code>heap_nums</code> 中。可以參考下圖：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>                 heap-based</span></span>
<span class="line"><span> stack-based        /</span></span>
<span class="line"><span>     \\        +----+----+   +----+</span></span>
<span class="line"><span> heap-nums---&gt;|int1|int2|...|intN|</span></span>
<span class="line"><span>              +----+----+   +----+</span></span></code></pre></div><p>一旦 <code>get_heap_array</code> 函數返回，指針變量 <code>heap_nums</code> 的棧存儲將自動回收——但動態 <code>int</code> 數組的堆存儲仍然存在，這就是 <code>get_heap_array</code> 函數返回這個地址（的副本）給 <code>main</code> 函數的原因：它現在負責在打印數組的整數後，通過調用庫函數 <code>free</code> 顯式釋放堆存儲：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>free(heap_nums); /* free the heap storage */</span></span></code></pre></div><p><code>malloc</code> 函數不會初始化堆分配的存儲空間，因此裏面是隨機值。相比之下，其變體函數 <code>calloc</code> 會將分配的存儲初始化為零。這兩個函數都返回 <code>NULL</code> 來表示分配失敗。</p><p>在 <code>heap</code> 示例中，<code>main</code> 函數在調用 <code>free</code> 後會立即返回，正在執行的程序會終止，這會讓系統回收所有已分配的堆存儲。儘管如此，程序員應該養成在不再需要時立即顯式釋放堆存儲的習慣。</p><h3 id="嵌套堆分配" tabindex="-1">嵌套堆分配 <a class="header-anchor" href="#嵌套堆分配" aria-label="Permalink to “嵌套堆分配”">​</a></h3><p>下一個代碼示例會更棘手一些。C 語言有很多返回指向堆存儲的指針的庫函數。下面是一個常見的使用情景：</p><p>1、C 程序調用一個庫函數，該函數返回一個指向基於堆的存儲的指針，而指向的存儲通常是一個聚合體，如數組或結構體：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SomeStructure* ptr = lib_function(); /* returns pointer to heap storage */</span></span></code></pre></div><p>2、 然後程序使用所分配的存儲。</p><p>3、 對於清理而言，問題是對 <code>free</code> 的簡單調用是否會清理庫函數分配的所有堆分配存儲。例如，<code>SomeStructure</code> 實例可能有指向堆分配存儲的字段。一個特別麻煩的情況是動態分配的結構體數組，每個結構體有一個指向又一層動態分配的存儲的字段。下面的代碼示例説明了這個問題，並重點關注瞭如何設計一個可以安全地為客户端提供堆分配存儲的庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  unsigned id;</span></span>
<span class="line"><span>  unsigned len;</span></span>
<span class="line"><span>  float*   heap_nums;</span></span>
<span class="line"><span>} HeapStruct;</span></span>
<span class="line"><span>unsigned structId = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HeapStruct* get_heap_struct(unsigned n) {</span></span>
<span class="line"><span>  /* Try to allocate a HeapStruct. */</span></span>
<span class="line"><span>  HeapStruct* heap_struct = malloc(sizeof(HeapStruct));</span></span>
<span class="line"><span>  if (NULL == heap_struct) /* failure? */</span></span>
<span class="line"><span>    return NULL;           /* if so, return NULL */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* Try to allocate floating-point aggregate within HeapStruct. */</span></span>
<span class="line"><span>  heap_struct-&gt;heap_nums = malloc(sizeof(float) * n);</span></span>
<span class="line"><span>  if (NULL == heap_struct-&gt;heap_nums) {  /* failure? */</span></span>
<span class="line"><span>    free(heap_struct);                   /* if so, first free the HeapStruct */</span></span>
<span class="line"><span>    return NULL;                         /* then return NULL */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* Success: set fields */</span></span>
<span class="line"><span>  heap_struct-&gt;id = structId++;</span></span>
<span class="line"><span>  heap_struct-&gt;len = n;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return heap_struct; /* return pointer to allocated HeapStruct */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void free_all(HeapStruct* heap_struct) {</span></span>
<span class="line"><span>  if (NULL == heap_struct) /* NULL pointer? */</span></span>
<span class="line"><span>    return;                /* if so, do nothing */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  free(heap_struct-&gt;heap_nums); /* first free encapsulated aggregate */</span></span>
<span class="line"><span>  free(heap_struct);            /* then free containing structure */  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  const unsigned n = 100;</span></span>
<span class="line"><span>  HeapStruct* hs = get_heap_struct(n); /* get structure with N floats */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* Do some (meaningless) work for demo. */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i++) hs-&gt;heap_nums[i] = 3.14 + (float) i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i += 10) printf(&quot;%12f\\n&quot;, hs-&gt;heap_nums[i]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  free_all(hs); /* free dynamically allocated storage */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的 <code>nestedHeap</code> 程序示例以結構體 <code>HeapStruct</code> 為中心，結構體中又有名為 <code>heap_nums</code> 的指針字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  unsigned id;</span></span>
<span class="line"><span>  unsigned len;</span></span>
<span class="line"><span>  float*   heap_nums; /** pointer **/</span></span>
<span class="line"><span>} HeapStruct;</span></span></code></pre></div><p>函數 <code>get_heap_struct</code> 嘗試為 <code>HeapStruct</code> 實例分配堆存儲，這需要為字段 <code>heap_nums</code> 指向的若干個 <code>float</code> 變量分配堆存儲。如果成功調用 <code>get_heap_struct</code> 函數，並將指向堆分配結構體的指針以 <code>hs</code> 命名，其結果可以描述如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hs--&gt;HeapStruct instance</span></span>
<span class="line"><span>        id</span></span>
<span class="line"><span>        len</span></span>
<span class="line"><span>        heap_nums--&gt;N contiguous float elements</span></span></code></pre></div><p>在 <code>get_heap_struct</code> 函數中，第一個堆分配過程很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>HeapStruct* heap_struct = malloc(sizeof(HeapStruct));</span></span>
<span class="line"><span>if (NULL == heap_struct) /* failure? */</span></span>
<span class="line"><span>  return NULL;           /* if so, return NULL */</span></span></code></pre></div><p><code>sizeof(HeapStruct)</code> 包括了 <code>heap_nums</code> 字段的字節數（32 位機器上為 4，64 位機器上為 8），<code>heap_nums</code> 字段則是指向動態分配數組中的 <code>float</code> 元素的指針。那麼，問題關鍵在於 <code>malloc</code> 為這個結構體傳送了字節空間還是表示失敗的 <code>NULL</code>；如果是 <code>NULL</code>，<code>get_heap_struct</code> 函數就也返回 <code>NULL</code> 以通知調用者堆分配失敗。</p><p>第二步嘗試堆分配的過程更復雜，因為在這一步，<code>HeapStruct</code> 的堆存儲已經分配好了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>heap_struct-&gt;heap_nums = malloc(sizeof(float) * n);</span></span>
<span class="line"><span>if (NULL == heap_struct-&gt;heap_nums) {  /* failure? */</span></span>
<span class="line"><span>  free(heap_struct);                   /* if so, first free the HeapStruct */</span></span>
<span class="line"><span>  return NULL;                         /* and then return NULL */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>傳遞給 <code>get_heap_struct</code> 函數的參數 <code>n</code> 指明動態分配的 <code>heap_nums</code> 數組中應該有多少個 <code>float</code> 元素。如果可以分配所需的若干個 <code>float</code> 元素，則該函數在返回 <code>HeapStruct</code> 的堆地址之前會設置結構的 <code>id</code> 和 <code>len</code> 字段。 但是，如果嘗試分配失敗，則需要兩個步驟來實現最優方案：</p><p>1、 必須釋放 <code>HeapStruct</code> 的存儲以避免內存泄漏。對於調用 <code>get_heap_struct</code> 的客户端函數而言，沒有動態 <code>heap_nums</code> 數組的 <code>HeapStruct</code> 可能就是沒用的；因此，<code>HeapStruct</code> 實例的字節空間應該顯式釋放，以便系統可以回收這些空間用於未來的堆分配。</p><p>2、 返回 <code>NULL</code> 以標識失敗。</p><p>如果成功調用 <code>get_heap_struct</code> 函數，那麼釋放堆存儲也很棘手，因為它涉及要以正確順序進行的兩次 <code>free</code> 操作。因此，該程序設計了一個 <code>free_all</code> 函數，而不是要求程序員再去手動實現兩步釋放操作。回顧一下，<code>free_all</code> 函數是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void free_all(HeapStruct* heap_struct) {</span></span>
<span class="line"><span>  if (NULL == heap_struct) /* NULL pointer? */</span></span>
<span class="line"><span>    return;                /* if so, do nothing */</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  free(heap_struct-&gt;heap_nums); /* first free encapsulated aggregate */</span></span>
<span class="line"><span>  free(heap_struct);            /* then free containing structure */  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>檢查完參數 <code>heap_struct</code> 不是 <code>NULL</code> 值後，函數首先釋放 <code>heap_nums</code> 數組，這步要求 <code>heap_struct</code> 指針此時仍然是有效的。先釋放 <code>heap_struct</code> 的做法是錯誤的。一旦 <code>heap_nums</code> 被釋放，<code>heap_struct</code> 就可以釋放了。如果 <code>heap_struct</code> 被釋放，但 <code>heap_nums</code> 沒有被釋放，那麼數組中的 <code>float</code> 元素就會泄漏：仍然分配了字節空間，但無法被訪問到——因此一定要記得釋放 <code>heap_nums</code>。存儲泄漏將一直持續，直到 <code>nestedHeap</code> 程序退出，系統回收泄漏的字節時為止。</p><p>關於 <code>free</code> 庫函數的注意事項就是要有順序。回想一下上面的調用示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>free(heap_struct-&gt;heap_nums); /* first free encapsulated aggregate */</span></span>
<span class="line"><span>free(heap_struct);            /* then free containing structure */</span></span></code></pre></div><p>這些調用釋放了分配的存儲空間——但它們並 <em>不是</em> 將它們的操作參數設置為 <code>NULL</code>（<code>free</code> 函數會獲取地址的副本作為參數；因此，將副本更改為 <code>NULL</code> 並不會改變原地址上的參數值）。例如，在成功調用 <code>free</code> 之後，指針 <code>heap_struct</code> 仍然持有一些堆分配字節的堆地址，但是現在使用這個地址將會產生錯誤，因為對 <code>free</code> 的調用使得系統有權回收然後重用這些分配過的字節。</p><p>使用 <code>NULL</code> 參數調用 <code>free</code> 沒有意義，但也沒有什麼壞處。而在非 <code>NULL</code> 的地址上重複調用 <code>free</code> 會導致不確定結果的錯誤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>free(heap_struct);  /* 1st call: ok */</span></span>
<span class="line"><span>free(heap_struct);  /* 2nd call: ERROR */</span></span></code></pre></div><h3 id="內存泄漏和堆碎片化" tabindex="-1">內存泄漏和堆碎片化 <a class="header-anchor" href="#內存泄漏和堆碎片化" aria-label="Permalink to “內存泄漏和堆碎片化”">​</a></h3><p>“內存泄漏”是指動態分配的堆存儲變得不再可訪問。看一下相關的代碼段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>float* nums = malloc(sizeof(float) * 10); /* 10 floats */</span></span>
<span class="line"><span>nums[0] = 3.14f;                          /* and so on */</span></span>
<span class="line"><span>nums = malloc(sizeof(float) * 25);        /* 25 new floats */</span></span></code></pre></div><p>假如第一個 <code>malloc</code> 成功，第二個 <code>malloc</code> 會再將 <code>nums</code> 指針重置為 <code>NULL</code>（分配失敗情況下）或是新分配的 25 個 <code>float</code> 中第一個的地址。最初分配的 10 個 <code>float</code> 元素的堆存儲仍然處於被分配狀態，但此時已無法再對其訪問，因為 <code>nums</code> 指針要麼指向別處，要麼是 <code>NULL</code>。結果就是造成了 40 個字節（<code>sizeof(float) * 10</code>）的泄漏。</p><p>在第二次調用 <code>malloc</code> 之前，應該釋放最初分配的存儲空間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>float* nums = malloc(sizeof(float) * 10); /* 10 floats */</span></span>
<span class="line"><span>nums[0] = 3.14f;                          /* and so on */</span></span>
<span class="line"><span>free(nums);                               /** good **/</span></span>
<span class="line"><span>nums = malloc(sizeof(float) * 25);        /* no leakage */</span></span></code></pre></div><p>即使沒有泄漏，堆也會隨着時間的推移而碎片化，需要對系統進行碎片整理。例如，假設兩個最大的堆塊當前的大小分別為 200MB 和 100MB。然而，這兩個堆塊並不連續，進程 <code>P</code> 此時又需要分配 250MB 的連續堆存儲。在進行分配之前，系統可能要對堆進行 <em>碎片整理</em> 以給 <code>P</code> 提供 250MB 連續存儲空間。碎片整理很複雜，因此也很耗時。</p><p>內存泄漏會創建處於已分配狀態但不可訪問的堆塊，從而會加速碎片化。因此，釋放不再需要的堆存儲是程序員幫助減少碎片整理需求的一種方式。</p><h3 id="診斷內存泄漏的工具" tabindex="-1">診斷內存泄漏的工具 <a class="header-anchor" href="#診斷內存泄漏的工具" aria-label="Permalink to “診斷內存泄漏的工具”">​</a></h3>`,78)),i("p",null,[s[1]||(s[1]=n("有很多工具可用於分析內存效率和安全性，其中我最喜歡的是 ",-1)),e(a,{href:"https://www.valgrind.org/"},{default:p(()=>[...s[0]||(s[0]=[n("valgrind",-1)])]),_:1}),s[2]||(s[2]=n("。為了説明該工具如何處理內存泄漏，這裏給出 ",-1)),s[3]||(s[3]=i("code",null,"leaky",-1)),s[4]||(s[4]=n(" 示例程序：",-1))]),s[23]||(s[23]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int* get_ints(unsigned n) {</span></span>
<span class="line"><span>  int* ptr = malloc(n * sizeof(int));</span></span>
<span class="line"><span>  if (ptr != NULL) {</span></span>
<span class="line"><span>    unsigned i;</span></span>
<span class="line"><span>    for (i = 0; i &lt; n; i++) ptr[i] = i + 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return ptr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void print_ints(int* ptr, unsigned n) {</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; n; i++) printf(&quot;%3i\\n&quot;, ptr[i]);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  const unsigned n = 32;</span></span>
<span class="line"><span>  int* arr = get_ints(n);</span></span>
<span class="line"><span>  if (arr != NULL) print_ints(arr, n);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /** heap storage not yet freed... **/</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>main</code> 函數調用了 <code>get_ints</code> 函數，後者會試着從堆中 <code>malloc</code> 32 個 4 字節的 <code>int</code>，然後初始化動態數組（如果 <code>malloc</code> 成功）。初始化成功後，<code>main</code> 函數會調用 <code>print_ints</code>函數。程序中並沒有調用 <code>free</code> 來對應 <code>malloc</code> 操作；因此，內存泄漏了。</p><p>如果安裝了 <code>valgrind</code> 工具箱，下面的命令會檢查 <code>leaky</code> 程序是否存在內存泄漏（<code>%</code> 是命令列提示符）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% valgrind --leak-check=full ./leaky</span></span></code></pre></div><p>絕大部分輸出都在下面給出了。左邊的數字 207683 是正在執行的 <code>leaky</code> 程序的進程標識符。這份報告給出了泄漏發生位置的詳細信息，本例中位置是在 <code>main</code> 函數所調用的 <code>get_ints</code> 函數中對 <code>malloc</code> 的調用處。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>==207683== HEAP SUMMARY:</span></span>
<span class="line"><span>==207683==   in use at exit: 128 bytes in 1 blocks</span></span>
<span class="line"><span>==207683==   total heap usage: 2 allocs, 1 frees, 1,152 bytes allocated</span></span>
<span class="line"><span>==207683== </span></span>
<span class="line"><span>==207683== 128 bytes in 1 blocks are definitely lost in loss record 1 of 1</span></span>
<span class="line"><span>==207683==   at 0x483B7F3: malloc (in /usr/lib/x86_64-linux-gnu/valgrind/vgpreload_memcheck-amd64-linux.so)</span></span>
<span class="line"><span>==207683==   by 0x109186: get_ints (in /home/marty/gc/leaky)</span></span>
<span class="line"><span>==207683==   by 0x109236: main (in /home/marty/gc/leaky)</span></span>
<span class="line"><span>==207683== </span></span>
<span class="line"><span>==207683== LEAK SUMMARY:</span></span>
<span class="line"><span>==207683==   definitely lost: 128 bytes in 1 blocks</span></span>
<span class="line"><span>==207683==   indirectly lost: 0 bytes in 0 blocks</span></span>
<span class="line"><span>==207683==   possibly lost: 0 bytes in 0 blocks</span></span>
<span class="line"><span>==207683==   still reachable: 0 bytes in 0 blocks</span></span>
<span class="line"><span>==207683==   suppressed: 0 bytes in 0 blocks</span></span></code></pre></div><p>如果把 <code>main</code> 函數改成在對 <code>print_ints</code> 的調用之後，再加上一個對 <code>free</code> 的調用，<code>valgrind</code> 就會對 <code>leaky</code> 程序給出一個乾淨的內存健康清單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>==218462== All heap blocks were freed -- no leaks are possible</span></span></code></pre></div><h3 id="靜態區存儲" tabindex="-1">靜態區存儲 <a class="header-anchor" href="#靜態區存儲" aria-label="Permalink to “靜態區存儲”">​</a></h3><p>在正統的 C 語言中，函數必須在所有塊之外定義。這是一些 C 編譯器支持的特性，杜絕了在另一個函數體內定義一個函數的可能。我舉的例子都是在所有塊之外定義的函數。這樣的函數要麼是 <code>static</code> ，即靜態的，要麼是 <code>extern</code>，即外部的，其中 <code>extern</code> 是默認值。</p><p>C 語言中，以 <code>static</code> 或 <code>extern</code> 修飾的函數和變量駐留在內存中所謂的 <strong>靜態區</strong> 中，因為在程序執行期間該區域大小是固定不變的。這兩個存儲類型的語法非常複雜，我們應該回顧一下。在回顧之後，會有一個完整的代碼示例來生動展示語法細節。在所有塊之外定義的函數或變量默認為 <code>extern</code>；因此，函數和變量要想存儲類型為 <code>static</code> ，必須顯式指定：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** file1.c: outside all blocks, five definitions  **/</span></span>
<span class="line"><span>int foo(int n) { return n * 2; }     /* extern by default */</span></span>
<span class="line"><span>static int bar(int n) { return n; }  /* static */</span></span>
<span class="line"><span>extern int baz(int n) { return -n; } /* explicitly extern */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int num1;        /* extern */</span></span>
<span class="line"><span>static int num2; /* static */</span></span></code></pre></div><p><code>extern</code> 和 <code>static</code> 的區別在於作用域：<code>extern</code> 修飾的函數或變量可以實現跨文件可見（需要聲明）。相比之下，<code>static</code> 修飾的函數僅在 <em>定義</em> 該函數的文件中可見，而 <code>static</code> 修飾的變量僅在 <em>定義</em> 該變量的文件（或文件中的塊）中可見：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>static int n1;    /* scope is the file */</span></span>
<span class="line"><span>void func() {</span></span>
<span class="line"><span>   static int n2; /* scope is func&#39;s body */</span></span>
<span class="line"><span>   ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果在所有塊之外定義了 <code>static</code> 變量，例如上面的 <code>n1</code>，該變量的作用域就是定義變量的文件。無論在何處定義 <code>static</code> 變量，變量的存儲都在內存的靜態區中。</p><p><code>extern</code> 函數或變量在給定文件中的所有塊之外定義，但這樣定義的函數或變量也可以在其他文件中聲明。典型的做法是在頭文件中 <em>聲明</em> 這樣的函數或變量，只要需要就可以包含進來。下面這些簡短的例子闡述了這些棘手的問題。</p><p>假設 <code>extern</code> 函數 <code>foo</code> 在 <code>file1.c</code> 中 <em>定義</em>，有無關鍵字 <code>extern</code> 效果都一樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** file1.c **/</span></span>
<span class="line"><span>int foo(int n) { return n * 2; } /* definition has a body {...} */</span></span></code></pre></div><p>必須在其他文件（或其中的塊）中使用顯式的 <code>extern</code> <em>聲明</em> 此函數才能使其可見。以下是使 <code>extern</code> 函數 <code>foo</code> 在文件 <code>file2.c</code> 中可見的聲明語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** file2.c: make function foo visible here **/</span></span>
<span class="line"><span>extern int foo(int); /* declaration (no body) */</span></span></code></pre></div><p>回想一下，函數聲明沒有用大括號括起來的主體，而函數定義會有這樣的主體。</p><p>為了便於查看，函數和變量聲明通常會放在頭文件中。準備好需要聲明的源代碼文件，然後就可以 <code>#include</code> 相關的頭文件。下一節中的 <code>staticProg</code> 程序演示了這種方法。</p><p>至於 <code>extern</code> 的變量，規則就變得更棘手了（很抱歉增加了難度！）。任何 <code>extern</code> 的對象——無論函數或變量——必須 <em>定義</em> 在所有塊之外。此外，在所有塊之外定義的變量默認為 <code>extern</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** outside all blocks **/</span></span>
<span class="line"><span>int n; /* defaults to extern */</span></span></code></pre></div><p>但是，只有在變量的 <em>定義</em> 中顯式初始化變量時，<code>extern</code> 才能在變量的 <em>定義</em> 中顯式修飾（LCTT 譯註：換言之，如果下列代碼中的 <code>int n1;</code> 行前加上 <code>extern</code>，該行就由 <em>定義</em> 變成了 <em>聲明</em>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** file1.c: outside all blocks **/</span></span>
<span class="line"><span>int n1;             /* defaults to extern, initialized by compiler to zero */</span></span>
<span class="line"><span>extern int n2 = -1; /* ok, initialized explicitly */</span></span>
<span class="line"><span>int n3 = 9876;      /* ok, extern by default and initialized explicitly */</span></span></code></pre></div><p>要使在 <code>file1.c</code> 中定義為 <code>extern</code> 的變量在另一個文件（例如 <code>file2.c</code>）中可見，該變量必須在 <code>file2.c</code> 中顯式 <em>聲明</em> 為 <code>extern</code> 並且不能初始化（初始化會將聲明轉換為定義）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** file2.c **/</span></span>
<span class="line"><span>extern int n1; /* declaration of n1 defined in file1.c */</span></span></code></pre></div><p>為了避免與 <code>extern</code> 變量混淆，經驗是在 <em>聲明</em> 中顯式使用 <code>extern</code>（必須），但不要在 <em>定義</em> 中使用（非必須且棘手）。對於函數，<code>extern</code> 在定義中是可選使用的，但在聲明中是必須使用的。下一節中的 <code>staticProg</code> 示例會把這些點整合到一個完整的程序中。</p><h3 id="staticprog-示例" tabindex="-1">staticProg 示例 <a class="header-anchor" href="#staticprog-示例" aria-label="Permalink to “staticProg 示例”">​</a></h3><p><code>staticProg</code> 程序由三個文件組成：兩個 C 語言源文件（<code>static1.c</code> 和 <code>static2.c</code>）以及一個頭文件（<code>static.h</code>），頭文件中包含兩個聲明：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** header file static.h **/</span></span>
<span class="line"><span>#define NumCount 100               /* macro */</span></span>
<span class="line"><span>extern int global_nums[NumCount];  /* array declaration */</span></span>
<span class="line"><span>extern void fill_array();          /* function declaration */</span></span></code></pre></div><p>兩個聲明中的 <code>extern</code>，一個用於數組，另一個用於函數，強調對象在別處（“外部”）<em>定義</em>：數組 <code>global_nums</code> 在文件 <code>static1.c</code> 中定義（沒有顯式的 <code>extern</code>），函數 <code>fill_array</code> 在文件 <code>static2.c</code> 中定義（也沒有顯式的 <code>extern</code>）。每個源文件都包含了頭文件 <code>static.h</code>。<code>static1.c</code> 文件定義了兩個駐留在內存靜態區域中的數組（<code>global_nums</code> 和 <code>more_nums</code>）。第二個數組有 <code>static</code> 修飾，這將其作用域限制為定義數組的文件 (<code>static1.c</code>)。如前所述， <code>extern</code> 修飾的 <code>global_nums</code> 則可以實現在多個文件中可見。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** static1.c **/</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;static.h&quot;             /* declarations */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int global_nums[NumCount];      /* definition: extern (global) aggregate */</span></span>
<span class="line"><span>static int more_nums[NumCount]; /* definition: scope limited to this file */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  fill_array(); /** defined in file static2.c **/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; NumCount; i++)</span></span>
<span class="line"><span>    more_nums[i] = i * -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* confirm initialization worked */</span></span>
<span class="line"><span>  for (i = 0; i &lt; NumCount; i += 10) </span></span>
<span class="line"><span>    printf(&quot;%4i\\t%4i\\n&quot;, global_nums[i], more_nums[i]);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  return 0;  </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面的 <code>static2.c</code> 文件中定義了 <code>fill_array</code> 函數，該函數由 <code>main</code>（在 <code>static1.c</code> 文件中）調用；<code>fill_array</code> 函數會給名為 <code>global_nums</code> 的 <code>extern</code> 數組中的元素賦值，該數組在文件 <code>static1.c</code> 中定義。使用兩個文件的唯一目的是凸顯 <code>extern</code> 變量或函數能夠跨文件可見。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** static2.c **/</span></span>
<span class="line"><span>#include &quot;static.h&quot; /** declarations **/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void fill_array() { /** definition **/</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 0; i &lt; NumCount; i++) global_nums[i] = i + 2;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>staticProg</code> 程序可以用如下編譯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o staticProg static1.c static2.c</span></span></code></pre></div><h3 id="從彙編語言看更多細節" tabindex="-1">從彙編語言看更多細節 <a class="header-anchor" href="#從彙編語言看更多細節" aria-label="Permalink to “從彙編語言看更多細節”">​</a></h3><p>現代 C 編譯器能夠處理 C 和彙編語言的任意組合。編譯 C 源文件時，編譯器首先將 C 代碼翻譯成彙編語言。這是對從上文 <code>static1.c</code> 文件生成的彙編語言進行保存的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -S static1.c</span></span></code></pre></div><p>生成的文件就是 <code>static1.s</code>。這是文件頂部的一段代碼，額外添加了行號以提高可讀性：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    .file    &quot;static1.c&quot;          ## line  1</span></span>
<span class="line"><span>    .text                         ## line  2</span></span>
<span class="line"><span>    .comm    global_nums,400,32   ## line  3</span></span>
<span class="line"><span>    .local    more_nums           ## line  4</span></span>
<span class="line"><span>    .comm    more_nums,400,32     ## line  5</span></span>
<span class="line"><span>    .section    .rodata           ## line  6</span></span>
<span class="line"><span>.LC0:                             ## line  7</span></span>
<span class="line"><span>    .string    &quot;%4i\\t%4i\\n&quot;       ## line  8</span></span>
<span class="line"><span>    .text                         ## line  9</span></span>
<span class="line"><span>    .globl    main                ## line 10</span></span>
<span class="line"><span>    .type    main, @function      ## line 11</span></span>
<span class="line"><span>main:                             ## line 12</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>諸如 <code>.file</code>（第 1 行）之類的彙編語言指令以句點開頭。顧名思義，指令會指導彙編程序將彙編語言翻譯成機器代碼。<code>.rodata</code> 指令（第 6 行）表示後面是隻讀對象，包括字符串常量 <code>&quot;%4i\\t%4i\\n&quot;</code>（第 8 行），<code>main</code> 函數（第 12 行）會使用此字符串常量來實現格式化輸出。作為標籤引入（通過末尾的冒號實現）的 <code>main</code> 函數（第 12 行），同樣也是隻讀的。</p><p>在彙編語言中，標籤就是地址。標籤 <code>main:</code>（第 12 行）標記了 <code>main</code> 函數代碼開始的地址，標籤 <code>.LC0:</code>（第 7 行）標記了格式化字符串開頭所在的地址。</p><p><code>global_nums</code>（第 3 行）和 <code>more_nums</code>（第 4 行）數組的定義包含了兩個數字：400 是每個數組中的總字節數，32 是每個數組（含 100 個 <code>int</code> 元素）中每個元素的比特數。（第 5 行中的 <code>.comm</code> 指令表示 <code>common name</code>，可以忽略。）</p><p>兩個數組定義的不同之處在於 <code>more_nums</code> 被標記為 <code>.local</code>（第 4 行），這意味着其作用域僅限於其所在文件 <code>static1.s</code>。相比之下，<code>global_nums</code> 數組就能在多個文件中實現可見，包括由 <code>static1.c</code> 和 <code>static2.c</code> 文件翻譯成的彙編文件。</p><p>最後，<code>.text</code> 指令在彙編代碼段中出現了兩次（第 2 行和第 9 行）。術語“text”表示“只讀”，但也會涵蓋一些讀/寫變量，例如兩個數組中的元素。儘管本文展示的彙編語言是針對 Intel 架構的，但 Arm6 彙編也非常相似。對於這兩種架構，<code>.text</code> 區域中的變量（本例中為兩個數組中的元素）會自動初始化為零。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>C 語言中的內存高效和內存安全編程準則很容易説明，但可能會很難遵循，尤其是在調用設計不佳的庫的時候。準則如下：</p><ul><li>儘可能使用棧存儲，進而鼓勵編譯器將通用寄存器用作暫存器，實現優化。棧存儲代表了高效的內存使用並促進了代碼的整潔和模組化。永遠不要返回指向基於棧的存儲的指針。</li><li>小心使用堆存儲。C（和 C++）中的重難點是確保動態分配的存儲儘快解除分配。良好的編程習慣和工具（如 <code>valgrind</code>）有助於攻關這些重難點。優先選用自身提供釋放函數的庫，例如 <code>nestedHeap</code> 代碼示例中的 <code>free_all</code> 釋放函數。</li><li>謹慎使用靜態存儲，因為這種存儲會自始至終地影響進程的內存佔用。特別是儘量避免使用 <code>extern</code> 和 <code>static</code> 數組。</li></ul>`,51)),i("p",null,[s[6]||(s[6]=n("本文 C 語言代碼示例可在我的網站（",-1)),e(a,{href:"https://condor.depaul.edu/mkalin%EF%BC%89%E4%B8%8A%E6%89%BE%E5%88%B0%E3%80%82"},{default:p(()=>[...s[5]||(s[5]=[n("https://condor.depaul.edu/mkalin）上找到。",-1)])]),_:1})]),s[24]||(s[24]=i("hr",null,null,-1)),i("p",null,[s[8]||(s[8]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/21/8/memory-programming-c"},{default:p(()=>[...s[7]||(s[7]=[n("https://opensource.com/article/21/8/memory-programming-c",-1)])]),_:1})]),i("p",null,[s[13]||(s[13]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/mkalindepauledu"},{default:p(()=>[...s[9]||(s[9]=[n("Marty Kalin",-1)])]),_:1}),s[14]||(s[14]=n(" 選題：",-1)),e(a,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[10]||(s[10]=[n("lujun9972",-1)])]),_:1}),s[15]||(s[15]=n(" 譯者：",-1)),e(a,{href:"https://github.com/unigeorge"},{default:p(()=>[...s[11]||(s[11]=[n("unigeorge",-1)])]),_:1}),s[16]||(s[16]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[12]||(s[12]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[18]||(s[18]=[n("Linux中國",-1)])]),_:1}),s[21]||(s[21]=n(" 榮譽推出",-1))])])}const C=t(r,[["render",h]]);export{_ as __pageData,C as default};
