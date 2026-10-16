import{_ as t,a0 as o,w as c,s as d,ao as l,I as a,x as n,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"用 C 語言理解 Linux 軟件庫 | LCTT x X-CMD","titleTemplate":false,"description":"用 C 語言理解 Linux 軟件庫 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 C 語言理解 Linux 軟件庫 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 C 語言理解 Linux 軟件庫 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210204 A guide to understanding Linux software libraries in C","title":"用 C 語言理解 Linux 軟件庫","tag":"202105","desc":""},"relativePath":"202105/20210204 A guide to understanding Linux software libraries in C.md","filePath":"[post].md"}'),r={name:"202105/20210204 A guide to understanding Linux software libraries in C.md"};function g(h,s,u,b,k,m){const e=o("Link");return c(),d("div",null,[s[33]||(s[33]=l('<h1 id="用-c-語言理解-linux-軟件庫" tabindex="-1">用 C 語言理解 Linux 軟件庫 <a class="header-anchor" href="#用-c-語言理解-linux-軟件庫" aria-label="Permalink to “用 C 語言理解 Linux 軟件庫”">​</a></h1><blockquote><p>軟件庫是重複使用代碼的一種簡單而合理的方式。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202105/22/165307u0n970uivji7kiim.jpg" alt=""></p><p>軟件庫是一種是一直以來長期存在的、簡單合理的複用代碼的方式。這篇文章解釋瞭如何從頭開始構建庫並使得其可用。儘管這兩個示例庫都以 Linux 為例，但創建、發佈和使用這些庫的步驟也可以應用於其它類 Unix 系統。</p><p>這些示例庫使用 C 語言編寫，非常適合該任務。Linux 內核大部分由 C 語言和少量彙編語言編寫（Windows 和 Linux 的表親如 macOS 也是如此）。用於輸入/輸出、網絡、字符串處理、數學、安全、數據編碼等的標準系統庫等主要由 C 語言編寫。所以使用 C 語言編寫庫就是使用 Linux 的原生語言來編寫。除此之外，C 語言的性能也在一眾高級語言中鶴立雞羣。</p><p>還有兩個來訪問這些庫的示例<ruby>客户程序<rt>client</rt></ruby>（一個使用 C，另一個使用 Python）。毫無疑問可以使用 C 語言客户程序來訪問 C 語言編寫的庫，但是 Python 客户程序示例説明了一個由 C 語言編寫的庫也可以服務於其他編程語言。</p><h3 id="靜態庫和動態庫對比" tabindex="-1">靜態庫和動態庫對比 <a class="header-anchor" href="#靜態庫和動態庫對比" aria-label="Permalink to “靜態庫和動態庫對比”">​</a></h3><p>Linux 系統存在兩種類型庫：</p><ul><li><strong>靜態庫（也被稱為歸檔庫）</strong>：在編譯過程中的鏈接階段，靜態庫會被編譯進程序（例如 C 或 Rust）中。每個客户程序都有屬於自己的一份庫的拷貝。靜態庫有一個顯而易見的缺點 —— 當庫需要進行一定改動時（例如修復一個 bug），靜態庫必須重新鏈接一次。接下來要介紹的動態庫避免了這一缺點。</li><li><strong>動態庫（也被稱為共享庫）</strong>：動態庫首先會在程序編譯中的鏈接階段被標記，但是客户程序和庫代碼在運行之前仍然沒有聯繫，且庫代碼不會進入到客户程序中。系統的動態加載器會把一個共享庫和正在運行的客户程序進行連接，無論該客户程序是由靜態編譯語言（如 C）編寫，還是由動態解釋語言（如 Python）編寫。因此，動態庫不需要麻煩客户程序便可以進行更新。最後，多個客户程序可以共享同一個動態庫的單一副本。</li></ul><p>通常來説，動態庫優於靜態庫，儘管其複雜性較高而性能較低。下面是兩種類型的庫如何創建和發佈：</p><ol><li>庫的源代碼會被編譯成一個或多個目標模組，目標模組是二進制文件，可以被包含在庫中並且鏈接到可執行的二進制中。</li><li>目標模組會會被打包成一個文件。對於靜態庫，標準的文件拓展名是 <code>.a</code> 意為“<ruby>歸檔<rt>archive</rt></ruby>”；對於動態庫，標準的文件拓展名是 <code>.so</code> 意為“<ruby>共享目標<rt>shared object</rt></ruby>”。對於這兩個相同功能的示例庫，分別發佈為 <code>libprimes.a</code> （靜態庫）和 <code>libshprimes.so</code> （動態庫）。兩種庫的文件名都使用前綴 <code>lib</code> 進行標識。</li><li>庫文件被複制到標準目錄下，使得客户程序可以輕鬆地訪問到庫。無論是靜態庫還是動態庫，典型的位置是 <code>/usr/lib</code> 或者 <code>/usr/local/lib</code>，當然其他位置也是可以的。</li></ol><p>構建和發佈每種庫的具體步驟會在下面詳細介紹。首先我將介紹兩種庫裏涉及到的 C 函數。</p><h3 id="示例庫函數" tabindex="-1">示例庫函數 <a class="header-anchor" href="#示例庫函數" aria-label="Permalink to “示例庫函數”">​</a></h3><p>這兩個示例庫都是由五個相同的 C 函數構建而成的，其中四個函數可供客户程序使用。第五個函數是其他四個函數的一個工具函數，它顯示了 C 語言怎麼隱藏信息。每個函數的源代碼都很短，可以將這些函數放在單個源文件中，儘管也可以放在多個源文件中（如四個公佈的函數都有一個文件）。</p><p>這些庫函數是基本的處理函數，以多種方式來處理質數。所有的函數接收無符號（即非負）整數值作為參數：</p>',15)),a("ul",null,[s[5]||(s[5]=a("li",null,[a("code",null,"is_prime"),n(" 函數測試其單個參數是否為質數。")],-1)),s[6]||(s[6]=a("li",null,[a("code",null,"are_coprimes"),n(" 函數檢查了其兩個參數的"),a("ruby",null,[n("最大公約數"),a("rt",null,"greatest common divisor")]),n("（gcd）是否為 1，即是否為互質數。")],-1)),s[7]||(s[7]=a("li",null,[a("code",null,"prime_factors"),n("：函數列出其參數的質因數。")],-1)),a("li",null,[s[2]||(s[2]=a("code",null,"glodbach",-1)),s[3]||(s[3]=n("：函數接收一個大於等於 4 的偶數，列出其可以分解為兩個質數的和。它也許存在多個符合條件的數對。該函數是以 18 世紀數學家 ",-1)),a("ruby",null,[p(e,{href:"https://en.wikipedia.org/wiki/Christian_Goldbach"},{default:i(()=>[...s[0]||(s[0]=[n("克里斯蒂安·哥德巴赫",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Christian Goldbach",-1))]),s[4]||(s[4]=n(" 命名的，他的猜想是任意一個大於 2 的偶數可以分解為兩個質數之和，這依舊是數論裏最古老的未被解決的問題。",-1))])]),s[34]||(s[34]=l(`<p>工具函數 <code>gcd</code> 留在已部署的庫文件中，但是在沒有包含這個函數的文件無法訪問此函數。因此，一個使用庫的客户程序無法調用 <code>gcd</code> 函數。仔細觀察 C 函數可以明白這一點。</p><h3 id="更多關於-c-函數的內容" tabindex="-1">更多關於 C 函數的內容 <a class="header-anchor" href="#更多關於-c-函數的內容" aria-label="Permalink to “更多關於 C 函數的內容”">​</a></h3><p>每個在 C 語言中的函數都有一個存儲類，它決定了函數的範圍。對於函數，有兩種選擇。</p><ul><li><p>函數默認的存儲類是 <code>extern</code>，它給了函數一個全局域。一個客户程序可以調用在示例庫中用 <code>extern</code> 修飾的任意函數。下面是一個帶有顯式 <code>extern</code> 聲明的 <code>are_coprimes</code> 函數定義：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>存儲類 <code>static</code> 將一個函數的的範圍限制到函數被定義的文件中。在示例庫中，工具函數 <code>gcd</code> 是靜態的（<code>static</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>static unsigned gcd(unsigned n1, unsigned n2) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><p>只有在 <code>primes.c</code> 文件中的函數可以調用 <code>gcd</code>，而只有 <code>are_coprimes</code> 函數會調用它。當靜態庫和動態庫被構建和發佈後，其他的程序可以調用外部的（<code>extern</code>）函數，如 <code>are_coprimes</code> ，但是不可以調用靜態（<code>static</code>）函數 <code>gcd</code>。靜態（<code>static</code>）存儲類通過將函數範圍限制在其他庫函數內，進而實現了對庫的客户程序隱藏 <code>gcd</code> 函數。</p><p>在 <code>primes.c</code> 文件中除了 <code>gcd</code> 函數外，其他函數並沒有指明存儲類，默認將會設置為外部的（<code>extern</code>）。然而，在庫中顯式註明 <code>extern</code> 更加常見。</p><p>C 語言區分了函數的<ruby>定義<rt>definition</rt></ruby>和<ruby>聲明<rt>declaration</rt></ruby>，這對庫來説很重要。接下來讓我們開始瞭解定義。C 語言僅允許命名函數不允許匿名函數，並且每個函數需要定義以下內容：</p><ul><li>一個唯一的名字。一個程序不允許存在兩個同名的函數。</li><li>一個可以為空的參數列表。參數需要指明類型。</li><li>一個返回值類型（例如：<code>int</code> 代表 32 位有符號整數），當沒有返回值時設置為空類型（<code>void</code>）。</li><li>用一對花括號包圍起來的函數主體部分。在一個特製的示例中，函數主體部分可以為空。</li></ul><p>程序中的每個函數必須要被定義一次。</p><p>下面是庫函數 <code>are_coprimes</code> 的完整定義：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2) { /* 定義 */</span></span>
<span class="line"><span>  return 1 == gcd(n1, n2); /* 最大公約數是否為 1? */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>函數返回一個布爾值（<code>0</code> 代表假，<code>1</code> 代表真），取決於兩個整數參數值的最大公約數是否為 1。工具函數 <code>gcd</code> 計算兩個整數參數 <code>n1</code> 和 <code>n2</code> 的最大公約數。</p><p>函數聲明不同於定義，其不需要主體部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2); /* 聲明 */</span></span></code></pre></div><p>聲明在參數列表後用一個分號代表結束，它沒有被花括號包圍起來的主體部分。程序中的函數可以被多次聲明。</p><p>為什麼需要聲明？在 C 語言中，一個被調用的函數必須對其調用者可見。有多種方式可以提供這樣的可見性，具體依賴於編譯器如何實現。一個必然可行的方式就是當它們二者位於同一個文件中時，將被調用的函數定義在在它的調用者之前。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void f() {...}     /* f 定義在其被調用前 */</span></span>
<span class="line"><span>void g() { f(); }  /* ok */</span></span></code></pre></div><p>當函數 <code>f</code> 被在調用前聲明，此時函數 <code>f</code> 的定義可以移動到函數 <code>g</code> 的下方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void f();         /* 聲明使得函數 f 對調用者可見 */</span></span>
<span class="line"><span>void g() { f(); } /* ok */</span></span>
<span class="line"><span>void f() {...}    /* 相較於前一種方式，此方式顯得更簡潔 */</span></span></code></pre></div><p>但是當如果一個被調用的函數和調用它的函數不在同一個文件中時呢？因為前文提到一個函數在一個程序中需要被定義一次，那麼如何使得讓一個文件中被定義的函數在另一個文件中可見？</p><p>這個問題會影響庫，無論是靜態庫還是動態庫。例如在這兩個質數庫中函數被定義在源文件 <code>primes.c</code> 中，每個庫中都有該函數的二進制副本，但是這些定義的函數必須要對使用庫的 C 程序可見，該 C 程序有其自身的源文件。</p><p>函數聲明可以幫助提供跨文件的可見性。對於上述的“質數”例子，它有一個名為 <code>primes.h</code> 的頭文件，其聲明瞭四個函數使得它們對使用庫的 C 程序可見。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** 頭文件 primes.h：函數聲明 **/</span></span>
<span class="line"><span>extern unsigned is_prime(unsigned);</span></span>
<span class="line"><span>extern void prime_factors(unsigned);</span></span>
<span class="line"><span>extern unsigned are_coprimes(unsigned, unsigned);</span></span>
<span class="line"><span>extern void goldbach(unsigned);</span></span></code></pre></div><p>這些聲明通過為每個函數指定其調用語法來作為接口。</p><p>為了客户程序的便利性，頭文件 <code>primes.h</code> 應該存儲在 C 編譯器查找路徑下的目錄中。典型的位置有 <code>/usr/include</code> 和 <code>/usr/local/include</code>。一個 C 語言客户程序應使用 <code>#include</code> 包含這個頭文件，並儘可能將這條語句其程序源代碼的首部（頭文件將會被導入另一個源文件的“頭”部）。C 語言頭文件可以被導入其他語言（如 Rust 語言）中的 <code>bindgen</code>，使其它語言的客户程序可以訪問 C 語言的庫。</p><p>總之，一個庫函數只可以被定義一次，但可以在任何需要它的地方進行聲明，任一使用 C 語言庫的程序都需要該聲明。頭文件可以包含函數聲明，但不能包含函數定義。如果頭文件包含了函數定義，那麼該文件可能會在一個 C 語言程序中被多次包含，從而破壞了一個函數在 C 語言程序中必須被精確定義一次的規則。</p><h3 id="庫的源代碼" tabindex="-1">庫的源代碼 <a class="header-anchor" href="#庫的源代碼" aria-label="Permalink to “庫的源代碼”">​</a></h3>`,27)),a("p",null,[s[9]||(s[9]=n("下面是兩個庫的源代碼。這部分代碼、頭文件、以及兩個示例客户程序都可以在 ",-1)),p(e,{href:"https://condor.depaul.edu/mkalin"},{default:i(()=>[...s[8]||(s[8]=[n("我的網頁",-1)])]),_:1}),s[10]||(s[10]=n(" 上找到。",-1))]),s[35]||(s[35]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;math.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern unsigned is_prime(unsigned n) {</span></span>
<span class="line"><span>  if (n &lt;= 3) return n &gt; 1;                   /* 2 和 3 是質數 */</span></span>
<span class="line"><span>  if (0 == (n % 2) || 0 == (n % 3)) return 0; /* 2 和 3 的倍數不會是質數 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 檢查 n 是否是其他 &lt; n 的值的倍數 */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 5; (i * i) &lt;= n; i += 6)</span></span>
<span class="line"><span>    if (0 == (n % i) || 0 == (n % (i + 2))) return 0; /* 不是質數 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 1; /* 一個不是 2 和 3 的質數 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern void prime_factors(unsigned n) {</span></span>
<span class="line"><span>  /* 在數字 n 的質因數分解中列出所有 2 */</span></span>
<span class="line"><span>  while (0 == (n % 2)) {  </span></span>
<span class="line"><span>    printf(&quot;%i &quot;, 2);</span></span>
<span class="line"><span>    n /= 2;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 數字 2 已經處理完成，下面處理奇數 */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 3; i &lt;= sqrt(n); i += 2) {</span></span>
<span class="line"><span>    while (0 == (n % i)) {</span></span>
<span class="line"><span>      printf(&quot;%i &quot;, i);</span></span>
<span class="line"><span>      n /= i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 還有其他質因數？*/</span></span>
<span class="line"><span>  if (n &gt; 2) printf(&quot;%i&quot;, n);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 工具函數：計算最大公約數 */</span></span>
<span class="line"><span>static unsigned gcd(unsigned n1, unsigned n2) {</span></span>
<span class="line"><span>  while (n1 != 0) {</span></span>
<span class="line"><span>    unsigned n3 = n1;</span></span>
<span class="line"><span>    n1 = n2 % n1;</span></span>
<span class="line"><span>    n2 = n3;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return n2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2) {</span></span>
<span class="line"><span>  return 1 == gcd(n1, n2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern void goldbach(unsigned n) {</span></span>
<span class="line"><span>  /* 輸入錯誤 */</span></span>
<span class="line"><span>  if ((n &lt;= 2) || ((n &amp; 0x01) &gt; 0)) {</span></span>
<span class="line"><span>    printf(&quot;Number must be &gt; 2 and even: %i is not.\\n&quot;, n);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 兩個簡單的例子：4 和 6 */</span></span>
<span class="line"><span>  if ((4 == n) || (6 == n)) {</span></span>
<span class="line"><span>    printf(&quot;%i = %i + %i\\n&quot;, n, n / 2, n / 2);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  /* 當 n &gt; 8 時，存在多種可能性 */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 3; i &lt; (n / 2); i++) {</span></span>
<span class="line"><span>    if (is_prime(i) &amp;&amp; is_prime(n - i)) {</span></span>
<span class="line"><span>      printf(&quot;%i = %i + %i\\n&quot;, n, i, n - i);</span></span>
<span class="line"><span>      /* 如果只需要一對，那麼用 break 語句替換這句 */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>庫函數</em></p><p>這些函數可以被庫利用。兩個庫可以從相同的源代碼中獲得，同時頭文件 <code>primes.h</code> 是兩個庫的 C 語言接口。</p><h3 id="構建庫" tabindex="-1">構建庫 <a class="header-anchor" href="#構建庫" aria-label="Permalink to “構建庫”">​</a></h3><p>靜態庫和動態庫在構建和發佈的步驟上有一些細節的不同。靜態庫需要三個步驟，而動態庫需要增加兩個步驟即一共五個步驟。額外的步驟表明了動態庫的動態方法具有更多的靈活性。讓我們先從靜態庫開始。</p><p>庫的源文件 <code>primes.c</code> 被編譯成一個目標模組。下面是命令，百分號 <code>%</code> 代表系統提示符，兩個井字符 <code>#</code> 是我的註釋。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -c primes.c ## 步驟1（靜態）</span></span></code></pre></div><p>這一步生成目標模組是二進制文件 <code>primes.o</code>。<code>-c</code> 標誌意味着只編譯。</p><p>下一步是使用 Linux 的 <code>ar</code> 命令將目標對象歸檔。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% ar -cvq libprimes.a primes.o ## 步驟2（靜態）</span></span></code></pre></div><p><code>-cvq</code> 三個標識分別是“創建”、“詳細的”、“快速添加”（以防新文件沒有添加到歸檔中）的簡稱。回憶一下，前文提到過前綴 <code>lib</code> 是必須的，而庫名是任意的。當然，庫的文件名必須是唯一的，以避免衝突。</p><p>歸檔已經準備好要被髮布：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo cp libprimes.a /usr/local/lib ## 步驟3（靜態）</span></span></code></pre></div><p>現在靜態庫對接下來的客户程序是可見的，示例在後面。（包含 <code>sudo</code> 可以確保有訪問權限將文件複製進 <code>/usr/local/lib</code> 目錄中）</p><p>動態庫還需要一個或多個對象模組進行打包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc primes.c -c -fpic ## 步驟1（動態）</span></span></code></pre></div><p>增加的選項 <code>-fpic</code> 指示編譯器生成與位置無關的代碼，這意味着不需要將該二進制模組加載到一個固定的內存位置。在一個擁有多個動態庫的系統中這種靈活性是至關重要的。生成的對象模組會略大於靜態庫生成的對象模組。</p><p>下面是從對象模組創建單個庫文件的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -shared -Wl,-soname,libshprimes.so -o libshprimes.so.1 primes.o ## 步驟2（動態）</span></span></code></pre></div><p>選項 <code>-shared</code> 表明了該庫是一個共享的（動態的）而不是靜態的。<code>-Wl</code> 選項引入了一系列編譯器選項，第一個便是設置動態庫的 <code>-soname</code>，這是必須設置的。<code>soname</code> 首先指定了庫的邏輯名字（<code>libshprimes.so</code>），接下來的 <code>-o</code> 選項指明瞭庫的物理文件名字（<code>libshprimes.so.1</code>）。這樣做的目的是為了保持邏輯名不變的同時允許物理名隨着新版本而發生變化。在本例中，在物理文件名 <code>libshprimes.so.1</code> 中最後的 1 代表是第一個庫的版本。儘管邏輯文件名和物理文件名可以是相同的，但是最佳做法是將它們命名為不同的名字。一個客户程序將會通過邏輯名（本例中為 <code>libshprimes.so</code>）來訪問庫，稍後我會進一步解釋。</p><p>接下來的一步是通過複製共享庫到合適的目錄下使得客户程序容易訪問，例如 <code>/usr/local/lib</code> 目錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo cp libshprimes.so.1 /usr/local/lib ## 步驟3（動態）</span></span></code></pre></div><p>現在在共享庫的邏輯名（<code>libshprimes.so</code>）和它的物理文件名（<code>/usr/local/lib/libshprimes.so.1</code>）之間設置一個符號鏈接。最簡單的方式是將 <code>/usr/local/lib</code> 作為工作目錄，在該目錄下輸入命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo ln --symbolic libshprimes.so.1 libshprimes.so ## 步驟4（動態）</span></span></code></pre></div><p>邏輯名 <code>libshprimes.so</code> 不應該改變，但是符號鏈接的目標（<code>libshrimes.so.1</code>）可以根據需要進行更新，新的庫實現可以是修復了 bug，提高性能等。</p><p>最後一步（一個預防措施）是調用 <code>ldconfig</code> 工具來配置系統的動態加載器。這個配置保證了加載器能夠找到新發布的庫。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo ldconfig ## 步驟5（動態）</span></span></code></pre></div><p>到現在，動態庫已為包括下面的兩個在內的示例客户程序準備就緒了。</p><h3 id="一個使用庫的-c-程序" tabindex="-1">一個使用庫的 C 程序 <a class="header-anchor" href="#一個使用庫的-c-程序" aria-label="Permalink to “一個使用庫的 C 程序”">​</a></h3><p>這個示例 C 程序是一個測試程序，它的源代碼以兩條 <code>#include</code> 指令開始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;  /* 標準輸入/輸出函數 */</span></span>
<span class="line"><span>#include &lt;primes.h&gt; /* 我的庫函數 */</span></span></code></pre></div><p>文件名兩邊的尖括號表示可以在編譯器的搜索路徑中找到這些頭文件（對於 <code>primes.h</code> 文件來説在 <code>/usr/local/inlcude</code> 目錄下）。如果不包含 <code>#include</code>，編譯器會抱怨缺少 <code>is_prime</code> 和 <code>prime_factors</code> 等函數的聲明，它們在兩個庫中都有發佈。順便提一句，測試程序的源代碼不需要更改即可測試兩個庫中的每一個庫。</p><p>相比之下，庫的源文件（<code>primes.c</code>）使用 <code>#include</code> 指令打開以下頭文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;math.h&gt;</span></span></code></pre></div><p><code>math.h</code> 頭文件是必須的，因為庫函數 <code>prime_factors</code> 會調用數學函數 <code>sqrt</code>，其在標準庫 <code>libm.so</code> 中。</p><p>作為參考，這是測試庫程序的源代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;primes.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  /* 是質數 */</span></span>
<span class="line"><span>  printf(&quot;\\nis_prime\\n&quot;);</span></span>
<span class="line"><span>  unsigned i, count = 0, n = 1000;</span></span>
<span class="line"><span>  for (i = 1; i &lt;= n; i++) {</span></span>
<span class="line"><span>    if (is_prime(i)) {</span></span>
<span class="line"><span>      count++;</span></span>
<span class="line"><span>      if (1 == (i % 100)) printf(&quot;Sample prime ending in 1: %i\\n&quot;, i);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  printf(&quot;%i primes in range of 1 to a thousand.\\n&quot;, count);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* prime_factors */</span></span>
<span class="line"><span>  printf(&quot;\\nprime_factors\\n&quot;);</span></span>
<span class="line"><span>  printf(&quot;prime factors of 12: &quot;);</span></span>
<span class="line"><span>  prime_factors(12);</span></span>
<span class="line"><span>  printf(&quot;\\n&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  printf(&quot;prime factors of 13: &quot;);</span></span>
<span class="line"><span>  prime_factors(13);</span></span>
<span class="line"><span>  printf(&quot;\\n&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  printf(&quot;prime factors of 876,512,779: &quot;);</span></span>
<span class="line"><span>  prime_factors(876512779);</span></span>
<span class="line"><span>  printf(&quot;\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 是合數 */</span></span>
<span class="line"><span>  printf(&quot;\\nare_coprime\\n&quot;);</span></span>
<span class="line"><span>  printf(&quot;Are %i and %i coprime? %s\\n&quot;,</span></span>
<span class="line"><span>         21, 22, are_coprimes(21, 22) ? &quot;yes&quot; : &quot;no&quot;);</span></span>
<span class="line"><span>  printf(&quot;Are %i and %i coprime? %s\\n&quot;,</span></span>
<span class="line"><span>         21, 24, are_coprimes(21, 24) ? &quot;yes&quot; : &quot;no&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 哥德巴赫 */</span></span>
<span class="line"><span>  printf(&quot;\\ngoldbach\\n&quot;);</span></span>
<span class="line"><span>  goldbach(11);    /* error */</span></span>
<span class="line"><span>  goldbach(4);     /* small one */</span></span>
<span class="line"><span>  goldbach(6);     /* another */</span></span>
<span class="line"><span>  for (i = 100; i &lt;= 150; i += 2) goldbach(i);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>測試程序</em></p><p>在編譯 <code>tester.c</code> 文件到可執行文件時，難處理的部分時鏈接選項的順序。回想前文中提到兩個示例庫都是用 <code>lib</code> 作為前綴開始，並且每一個都有一個常規的拓展後綴：<code>.a</code> 代表靜態庫 <code>libprimes.a</code>，<code>.so</code> 代表動態庫 <code>libshprimes.so</code>。在鏈接規範中，前綴 <code>lib</code> 和拓展名被忽略了。鏈接標誌以 <code>-l</code> （小寫 L）開始，並且一條編譯命令可能包含多個鏈接標誌。下面是一個完整的測試程序的編譯指令，使用動態庫作為示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o tester tester.c -lshprimes -lm</span></span></code></pre></div><p>第一個鏈接標誌指定了庫 <code>libshprimes.so</code>，第二個鏈接標誌指定了標準數學庫 <code>libm.so</code>。</p><p>鏈接器是懶惰的，這意味着鏈接標誌的順序是需要考慮的。例如，調整上述實例中的鏈接順序將會產生一個編譯時錯誤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o tester tester.c -lm -lshprimes ## 危險！</span></span></code></pre></div><p>鏈接 <code>libm.so</code> 庫的標誌先出現，但是這個庫中沒有函數被測試程序顯式調用；因此，鏈接器不會鏈接到 <code>math.so</code> 庫。調用 <code>sqrt</code> 庫函數僅發生在 <code>libshprimes.so</code> 庫中包含的 <code>prime_factors</code> 函數。編譯測試程序返回的錯誤是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>primes.c: undefined reference to &#39;sqrt&#39;</span></span></code></pre></div><p>因此，鏈接標誌的順序應該是通知鏈接器需要 <code>sqrt</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o tester tester.c -lshprimes -lm ## 首先鏈接 -lshprimes</span></span></code></pre></div><p>鏈接器在 <code>libshprimes.so</code> 庫中發現了對庫函數 <code>sqrt</code> 的調用，所以接下來對數學庫 <code>libm.so</code>做了合適的鏈接。鏈接還有一個更復雜的選項，它支持鏈接的標誌順序。然而在本例中，最簡單的方式就是恰當地排列鏈接標誌。</p><p>下面是運行測試程序的部分輸出結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>is_prime</span></span>
<span class="line"><span>Sample prime ending in 1: 101</span></span>
<span class="line"><span>Sample prime ending in 1: 401</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>168 primes in range of 1 to a thousand.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prime_factors</span></span>
<span class="line"><span>prime factors of 12: 2 2 3</span></span>
<span class="line"><span>prime factors of 13: 13</span></span>
<span class="line"><span>prime factors of 876,512,779: 211 4154089</span></span>
<span class="line"><span></span></span>
<span class="line"><span>are_coprime</span></span>
<span class="line"><span>Are 21 and 22 coprime? yes</span></span>
<span class="line"><span>Are 21 and 24 coprime? no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>goldbach</span></span>
<span class="line"><span>Number must be &amp;gt; 2 and even: 11 is not.</span></span>
<span class="line"><span>4 = 2 + 2</span></span>
<span class="line"><span>6 = 3 + 3</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>32 =  3 + 29</span></span>
<span class="line"><span>32 = 13 + 19</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>100 =  3 + 97</span></span>
<span class="line"><span>100 = 11 + 89</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>對於 <code>goldbach</code> 函數，即使一個相當小的偶數值（例如 18）也許存在多個一對質數之和的組合（在這種情況下，5+13 和 7+11）。因此這種多個質數對是使得嘗試證明哥德巴赫猜想變得複雜的因素之一。</p><h3 id="封裝使用庫的-python-程序" tabindex="-1">封裝使用庫的 Python 程序 <a class="header-anchor" href="#封裝使用庫的-python-程序" aria-label="Permalink to “封裝使用庫的 Python 程序”">​</a></h3><p>與 C 不同，Python 不是一個靜態編譯語言，這意味着 Python 客户示例程序必須訪問動態版本而非靜態版本的 <code>primes</code> 庫。為了能這樣做，Python 中有眾多的支持<ruby>外部語言接口<rt>foreign function interface</rt></ruby>（FFI）的模組（標準的或第三方的），它們允許用一種語言編寫的程序來調用另一種語言編寫的函數。Python 中的 <code>ctypes</code> 是一個標準的、相對簡單的允許 Python 代碼調用 C 函數的 FFI。</p><p>任何 FFI 都面臨挑戰，因為對接的語言不大可能會具有完全相同的數據類型。例如：<code>primes</code> 庫使用 C 語言類型 <code>unsigned int</code>，而 Python 並不具有這種類型；因此 <code>ctypes</code> FFI 將 C 語言中的 <code>unsigned int</code> 類型映射為 Python 中的 <code>int</code> 類型。在 <code>primes</code> 庫中發佈的四個 <code>extern</code> C 函數中，有兩個在具有顯式 <code>ctypes</code> 配置的 Python 中會表現得更好。</p><p>C 函數 <code>prime_factors</code> 和 <code>goldbach</code> 返回 <code>void</code> 而不是返回一個具體類型，但是 <code>ctypes</code> 默認會將 C 語言中的 <code>void</code> 替換為 Python 語言中的 <code>int</code>。當從 Python 代碼中調用時，這兩個 C 函數會從棧中返回一個隨機整數值（因此，該值無任何意義）。然而，可以對 <code>ctypes</code> 進行配置，讓這些函數返回 <code>None</code> （Python 中為 <code>null</code> 類型）。下面是對 <code>prime_factors</code> 函數的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>primes.prime_factors.restype = None</span></span></code></pre></div><p>可以用類似的語句處理 <code>goldbach</code> 函數。</p><p>下面的交互示例（在 Python3 中）展示了在 Python 客户程序和 <code>primes</code> 庫之間的接口是簡單明瞭的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; from ctypes import cdll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes = cdll.LoadLibrary(&quot;libshprimes.so&quot;) ## 邏輯名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes.is_prime(13)</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>&gt;&gt;&gt; primes.is_prime(12)</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes.are_coprimes(8, 24)</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>&gt;&gt;&gt; primes.are_coprimes(8, 25)</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes.prime_factors.restype = None</span></span>
<span class="line"><span>&gt;&gt;&gt; primes.goldbach.restype = None</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes.prime_factors(72)</span></span>
<span class="line"><span>2 2 2 3 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes.goldbach(32)</span></span>
<span class="line"><span>32 = 3 + 29</span></span>
<span class="line"><span>32 = 13 + 19</span></span></code></pre></div><p>在 <code>primes</code> 庫中的函數只使用一個簡單數據類型：<code>unsigned int</code>。如果這個 C 語言庫使用複雜的類型如結構體，如果庫函數傳遞和返回指向結構體的指針，那麼比 <code>ctypes</code> 更強大的 FFI 更適合作為一個在 Python 語言和 C 語言之間的平滑接口。儘管如此，<code>ctypes</code> 示例展示了一個 Python 客户程序可以使用 C 語言編寫的庫。值得注意的是，用作科學計算的流行的 <code>Numpy</code> 庫是用 C 語言編寫的，然後在高級 Python API 中公開。</p>`,60)),a("p",null,[s[12]||(s[12]=n("簡單的 ",-1)),s[13]||(s[13]=a("code",null,"primes",-1)),s[14]||(s[14]=n(" 庫和高級的 ",-1)),s[15]||(s[15]=a("code",null,"Numpy",-1)),s[16]||(s[16]=n(" 庫強調了 C 語言仍然是編程語言中的通用語言。幾乎每一個語言都可以與 C 語言交互，同時通過 C 語言也可以和任何其他語言交互。Python 很容易和 C 語言交互，作為另外一個例子，當 ",-1)),p(e,{href:"https://openjdk.java.net/projects/panama"},{default:i(()=>[...s[11]||(s[11]=[n("Panama 項目",-1)])]),_:1}),s[17]||(s[17]=n(" 成為 Java Native Interface（JNI）一個替代品後，Java 語言和 C 語言交互也會變的很容易。",-1))]),s[36]||(s[36]=a("hr",null,null,-1)),a("p",null,[s[19]||(s[19]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/21/2/linux-software-libraries"},{default:i(()=>[...s[18]||(s[18]=[n("https://opensource.com/article/21/2/linux-software-libraries",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/mkalindepauledu"},{default:i(()=>[...s[20]||(s[20]=[n("Marty Kalin",-1)])]),_:1}),s[25]||(s[25]=n(" 選題：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[21]||(s[21]=[n("lujun9972",-1)])]),_:1}),s[26]||(s[26]=n(" 譯者：",-1)),p(e,{href:"https://github.com/mengxinayan"},{default:i(()=>[...s[22]||(s[22]=[n("萌新阿巖",-1)])]),_:1}),s[27]||(s[27]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[23]||(s[23]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[28]||(s[28]=[n("LCTT",-1)])]),_:1}),s[31]||(s[31]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[29]||(s[29]=[n("Linux中國",-1)])]),_:1}),s[32]||(s[32]=n(" 榮譽推出",-1))])])}const x=t(r,[["render",g]]);export{C as __pageData,x as default};
