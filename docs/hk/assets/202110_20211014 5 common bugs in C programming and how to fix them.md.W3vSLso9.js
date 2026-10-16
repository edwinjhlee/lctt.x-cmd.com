import{_ as i,a0 as t,w as c,s as o,ao as r,I as l,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"C 語言編程中的 5 個常見錯誤及對應解決方案 | LCTT x X-CMD","titleTemplate":false,"description":"C 語言編程中的 5 個常見錯誤及對應解決方案 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"C 語言編程中的 5 個常見錯誤及對應解決方案 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"C 語言編程中的 5 個常見錯誤及對應解決方案 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20211014 5 common bugs in C programming and how to fix them","title":"C 語言編程中的 5 個常見錯誤及對應解決方案","tag":"202110","desc":""},"relativePath":"202110/20211014 5 common bugs in C programming and how to fix them.md","filePath":"[post].md"}'),d={name:"202110/20211014 5 common bugs in C programming and how to fix them.md"};function u(h,s,g,b,m,f){const a=t("Link");return c(),o("div",null,[s[15]||(s[15]=r(`<h1 id="c-語言編程中的-5-個常見錯誤及對應解決方案" tabindex="-1">C 語言編程中的 5 個常見錯誤及對應解決方案 <a class="header-anchor" href="#c-語言編程中的-5-個常見錯誤及對應解決方案" aria-label="Permalink to “C 語言編程中的 5 個常見錯誤及對應解決方案”">​</a></h1><blockquote><p>增強 C 語言程序的彈性和可靠性的五種方法。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202110/18/174123p4cz99skp9zz4nf4.jpg" alt=""></p><p>即使是最好的程序員也無法完全避免錯誤。這些錯誤可能會引入安全漏洞、導致程序崩潰或產生意外操作，具體影響要取決於程序的運行邏輯。</p><p>C 語言有時名聲不太好，因為它不像近期的編程語言（比如 Rust）那樣具有內存安全性。但是通過額外的代碼，一些最常見和嚴重的 C 語言錯誤是可以避免的。下文講解了可能影響應用程序的五個錯誤以及避免它們的方法：</p><h3 id="_1、未初始化的變量" tabindex="-1">1、未初始化的變量 <a class="header-anchor" href="#_1、未初始化的變量" aria-label="Permalink to “1、未初始化的變量”">​</a></h3><p>程序啓動時，系統會為其分配一塊內存以供存儲數據。這意味着程序啓動時，變量將獲得內存中的一個隨機值。</p><p>有些編程環境會在程序啓動時特意將內存“清零”，因此每個變量都得以有初始的零值。程序中的變量都以零值作為初始值，聽上去是很不錯的。但是在 C 編程規範中，系統並不會初始化變量。</p><p>看一下這個使用了若干變量和兩個數組的示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i, j, k;</span></span>
<span class="line"><span>  int numbers[5];</span></span>
<span class="line"><span>  int *array;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;These variables are not initialized:&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;  i = %d\\n&quot;, i);</span></span>
<span class="line"><span>  printf(&quot;  j = %d\\n&quot;, j);</span></span>
<span class="line"><span>  printf(&quot;  k = %d\\n&quot;, k);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;This array is not initialized:&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>    printf(&quot;  numbers[%d] = %d\\n&quot;, i, numbers[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;malloc an array ...&quot;);</span></span>
<span class="line"><span>  array = malloc(sizeof(int) * 5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (array) {</span></span>
<span class="line"><span>    puts(&quot;This malloc&#39;ed array is not initialized:&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>      printf(&quot;  array[%d] = %d\\n&quot;, i, array[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    free(array);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Ok&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這個程序不會初始化變量，所以變量以系統內存中的隨機值作為初始值。在我的 Linux 系統上編譯和運行這個程序，會看到一些變量恰巧有“零”值，但其他變量並沒有：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>These variables are not initialized:</span></span>
<span class="line"><span>  i = 0</span></span>
<span class="line"><span>  j = 0</span></span>
<span class="line"><span>  k = 32766</span></span>
<span class="line"><span>This array is not initialized:</span></span>
<span class="line"><span>  numbers[0] = 0</span></span>
<span class="line"><span>  numbers[1] = 0</span></span>
<span class="line"><span>  numbers[2] = 4199024</span></span>
<span class="line"><span>  numbers[3] = 0</span></span>
<span class="line"><span>  numbers[4] = 0</span></span>
<span class="line"><span>malloc an array ...</span></span>
<span class="line"><span>This malloc&#39;ed array is not initialized:</span></span>
<span class="line"><span>  array[0] = 0</span></span>
<span class="line"><span>  array[1] = 0</span></span>
<span class="line"><span>  array[2] = 0</span></span>
<span class="line"><span>  array[3] = 0</span></span>
<span class="line"><span>  array[4] = 0</span></span>
<span class="line"><span>Ok</span></span></code></pre></div><p>很幸運，<code>i</code> 和 <code>j</code> 變量是從零值開始的，但 <code>k</code> 的起始值為 32766。在 <code>numbers</code> 數組中，大多數元素也恰好從零值開始，只有第三個元素的初始值為 4199024。</p><p>在不同的系統上編譯相同的程序，可以進一步顯示未初始化變量的危險性。不要誤以為“全世界都在運行 Linux”，你的程序很可能某天在其他平台上運行。例如，下面是在 FreeDOS 上運行相同程序的結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>These variables are not initialized:</span></span>
<span class="line"><span>  i = 0</span></span>
<span class="line"><span>  j = 1074</span></span>
<span class="line"><span>  k = 3120</span></span>
<span class="line"><span>This array is not initialized:</span></span>
<span class="line"><span>  numbers[0] = 3106</span></span>
<span class="line"><span>  numbers[1] = 1224</span></span>
<span class="line"><span>  numbers[2] = 784</span></span>
<span class="line"><span>  numbers[3] = 2926</span></span>
<span class="line"><span>  numbers[4] = 1224</span></span>
<span class="line"><span>malloc an array ...</span></span>
<span class="line"><span>This malloc&#39;ed array is not initialized:</span></span>
<span class="line"><span>  array[0] = 3136</span></span>
<span class="line"><span>  array[1] = 3136</span></span>
<span class="line"><span>  array[2] = 14499</span></span>
<span class="line"><span>  array[3] = -5886</span></span>
<span class="line"><span>  array[4] = 219</span></span>
<span class="line"><span>Ok</span></span></code></pre></div><p>永遠都要記得初始化程序的變量。如果你想讓變量將以零值作為初始值，請額外添加代碼將零分配給該變量。預先編好這些額外的代碼，這會有助於減少日後讓人頭疼的調試過程。</p><h3 id="_2、數組越界" tabindex="-1">2、數組越界 <a class="header-anchor" href="#_2、數組越界" aria-label="Permalink to “2、數組越界”">​</a></h3><p>C 語言中，數組索引從零開始。這意味着對於長度為 10 的數組，索引是從 0 到 9；長度為 1000 的數組，索引則是從 0 到 999。</p><p>程序員有時會忘記這一點，他們從索引 1 開始引用數組，產生了<ruby>“大小差一”<rt>off by one</rt></ruby>錯誤。在長度為 5 的數組中，程序員在索引“5”處使用的值，實際上並不是數組的第 5 個元素。相反，它是內存中的一些其他值，根本與此數組無關。</p><p>這是一個數組越界的示例程序。該程序使用了一個只含有 5 個元素的數組，但卻引用了該範圍之外的數組元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span>  int numbers[5];</span></span>
<span class="line"><span>  int *array;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* test 1 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;This array has five elements (0 to 4)&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* initalize the array */</span></span>
<span class="line"><span>  for (i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>    numbers[i] = i;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* oops, this goes beyond the array bounds: */</span></span>
<span class="line"><span>  for (i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>    printf(&quot;  numbers[%d] = %d\\n&quot;, i, numbers[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* test 2 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;malloc an array ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  array = malloc(sizeof(int) * 5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (array) {</span></span>
<span class="line"><span>    puts(&quot;This malloc&#39;ed array also has five elements (0 to 4)&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* initalize the array */</span></span>
<span class="line"><span>    for (i = 0; i &lt; 5; i++) {</span></span>
<span class="line"><span>      array[i] = i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* oops, this goes beyond the array bounds: */</span></span>
<span class="line"><span>    for (i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>      printf(&quot;  array[%d] = %d\\n&quot;, i, array[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    free(array);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Ok&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>可以看到，程序初始化了數組的所有值（從索引 0 到 4），然後從索引 0 開始讀取，結尾是索引 9 而不是索引 4。前五個值是正確的，再後面的值會讓你不知所以：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>This array has five elements (0 to 4)</span></span>
<span class="line"><span>  numbers[0] = 0</span></span>
<span class="line"><span>  numbers[1] = 1</span></span>
<span class="line"><span>  numbers[2] = 2</span></span>
<span class="line"><span>  numbers[3] = 3</span></span>
<span class="line"><span>  numbers[4] = 4</span></span>
<span class="line"><span>  numbers[5] = 0</span></span>
<span class="line"><span>  numbers[6] = 4198512</span></span>
<span class="line"><span>  numbers[7] = 0</span></span>
<span class="line"><span>  numbers[8] = 1326609712</span></span>
<span class="line"><span>  numbers[9] = 32764</span></span>
<span class="line"><span>malloc an array ...</span></span>
<span class="line"><span>This malloc&#39;ed array also has five elements (0 to 4)</span></span>
<span class="line"><span>  array[0] = 0</span></span>
<span class="line"><span>  array[1] = 1</span></span>
<span class="line"><span>  array[2] = 2</span></span>
<span class="line"><span>  array[3] = 3</span></span>
<span class="line"><span>  array[4] = 4</span></span>
<span class="line"><span>  array[5] = 0</span></span>
<span class="line"><span>  array[6] = 133441</span></span>
<span class="line"><span>  array[7] = 0</span></span>
<span class="line"><span>  array[8] = 0</span></span>
<span class="line"><span>  array[9] = 0</span></span>
<span class="line"><span>Ok</span></span></code></pre></div><p>引用數組時，始終要記得追蹤數組大小。將數組大小存儲在變量中；不要對數組大小進行<ruby>硬編碼<rt>hard-code</rt></ruby>。否則，如果後期該標識符指向另一個不同大小的數組，卻忘記更改硬編碼的數組長度時，程序就可能會發生數組越界。</p><h3 id="_3、字符串溢出" tabindex="-1">3、字符串溢出 <a class="header-anchor" href="#_3、字符串溢出" aria-label="Permalink to “3、字符串溢出”">​</a></h3><p>字符串只是特定類型的數組。在 C 語言中，字符串是一個由 <code>char</code> 類型值組成的數組，其中用一個零字符表示字符串的結尾。</p><p>因此，與數組一樣，要注意避免超出字符串的範圍。有時也稱之為 <em>字符串溢出</em>。</p><p>使用 <code>gets</code> 函數讀取數據是一種很容易發生字符串溢出的行為方式。<code>gets</code> 函數非常危險，因為它不知道在一個字符串中可以存儲多少數據，只會機械地從用户那裏讀取數據。如果用户輸入像 <code>foo</code> 這樣的短字符串，不會發生意外；但是當用户輸入的值超過字符串長度時，後果可能是災難性的。</p><p>下面是一個使用 <code>gets</code> 函數讀取城市名稱的示例程序。在這個程序中，我還添加了一些未使用的變量，來展示字符串溢出對其他數據的影響：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char name[10];                       /* Such as &quot;Chicago&quot; */</span></span>
<span class="line"><span>  int var1 = 1, var2 = 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* show initial values */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;var1 = %d; var2 = %d\\n&quot;, var1, var2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* this is bad .. please don&#39;t use gets */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Where do you live?&quot;);</span></span>
<span class="line"><span>  gets(name);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* show ending values */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;&lt;%s&gt; is length %d\\n&quot;, name, strlen(name));</span></span>
<span class="line"><span>  printf(&quot;var1 = %d; var2 = %d\\n&quot;, var1, var2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Ok&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>當你測試類似的短城市名稱時，該程序運行良好，例如伊利諾伊州的 <code>Chicago</code> 或北卡羅來納州的<code>Raleigh</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var1 = 1; var2 = 2</span></span>
<span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Raleigh</span></span>
<span class="line"><span>&lt;Raleigh&gt; is length 7</span></span>
<span class="line"><span>var1 = 1; var2 = 2</span></span>
<span class="line"><span>Ok</span></span></code></pre></div><p>威爾士的小鎮 <code>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</code> 有着世界上最長的名字之一。這個字符串有 58 個字符，遠遠超出了 <code>name</code> 變量中保留的 10 個字符。結果，程序將值存儲在內存的其他區域，覆蓋了 <code>var1</code> 和 <code>var2</code> 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var1 = 1; var2 = 2</span></span>
<span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</span></span>
<span class="line"><span>&lt;Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch&gt; is length 58</span></span>
<span class="line"><span>var1 = 2036821625; var2 = 2003266668</span></span>
<span class="line"><span>Ok</span></span>
<span class="line"><span>Segmentation fault (core dumped)</span></span></code></pre></div><p>在運行結束之前，程序會用長字符串覆蓋內存的其他部分區域。注意，<code>var1</code> 和 <code>var2</code> 的值不再是起始的 <code>1</code> 和 <code>2</code>。</p><p>避免使用 <code>gets</code> 函數，改用更安全的方法來讀取用户數據。例如，<code>getline</code> 函數會分配足夠的內存來存儲用户輸入，因此不會因輸入長值而發生意外的字符串溢出。</p><h3 id="_4、重複釋放內存" tabindex="-1">4、重複釋放內存 <a class="header-anchor" href="#_4、重複釋放內存" aria-label="Permalink to “4、重複釋放內存”">​</a></h3><p>“分配的內存要手動釋放”是良好的 C 語言編程原則之一。程序可以使用 <code>malloc</code> 函數為數組和字符串分配內存，該函數會開闢一塊內存，並返回一個指向內存中起始地址的指針。之後，程序可以使用 <code>free</code> 函數釋放內存，該函數會使用指針將內存標記為未使用。</p><p>但是，你應該只使用一次 <code>free</code> 函數。第二次調用 <code>free</code> 會導致意外的後果，可能會毀掉你的程序。下面是一個針對此點的簡短示例程序。程序分配了內存，然後立即釋放了它。但為了模仿一個健忘但有條理的程序員，我在程序結束時又一次釋放了內存，導致兩次釋放了相同的內存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int *array;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;malloc an array ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  array = malloc(sizeof(int) * 5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (array) {</span></span>
<span class="line"><span>    puts(&quot;malloc succeeded&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    puts(&quot;Free the array...&quot;);</span></span>
<span class="line"><span>    free(array);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Free the array...&quot;);</span></span>
<span class="line"><span>  free(array);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Ok&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>運行這個程序會導致第二次使用 <code>free</code> 函數時出現戲劇性的失敗：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>malloc an array ...</span></span>
<span class="line"><span>malloc succeeded</span></span>
<span class="line"><span>Free the array...</span></span>
<span class="line"><span>Free the array...</span></span>
<span class="line"><span>free(): double free detected in tcache 2</span></span>
<span class="line"><span>Aborted (core dumped)</span></span></code></pre></div><p>要記得避免在數組或字符串上多次調用 <code>free</code>。將 <code>malloc</code> 和 <code>free</code> 函數定位在同一個函數中，這是避免重複釋放內存的一種方法。</p><p>例如，一個紙牌遊戲程序可能會在主函數中為一副牌分配內存，然後在其他函數中使用這副牌來玩遊戲。記得在主函數，而不是其他函數中釋放內存。將 <code>malloc</code> 和 <code>free</code> 語句放在一起有助於避免多次釋放內存。</p><h3 id="_5、使用無效的文件指針" tabindex="-1">5、使用無效的文件指針 <a class="header-anchor" href="#_5、使用無效的文件指針" aria-label="Permalink to “5、使用無效的文件指針”">​</a></h3><p>文件是一種便捷的數據存儲方式。例如，你可以將程序的配置數據存儲在 <code>config.dat</code> 文件中。Bash shell 會從用户家目錄中的 <code>.bash_profile</code> 讀取初始化腳本。GNU Emacs 編輯器會尋找文件 <code>.emacs</code> 以從中確定起始值。而 Zoom 會議客户端使用 <code>zoomus.conf</code> 文件讀取其程序配置。</p><p>所以，從文件中讀取數據的能力幾乎對所有程序都很重要。但是假如要讀取的文件不存在，會發生什麼呢？</p><p>在 C 語言中讀取文件，首先要用 <code>fopen</code> 函數打開文件，該函數會返回指向文件的流指針。你可以結合其他函數，使用這個指針來讀取數據，例如 <code>fgetc</code> 會逐個字符地讀取文件。</p><p>如果要讀取的文件不存在或程序沒有讀取權限，<code>fopen</code> 函數會返回 <code>NULL</code> 作為文件指針，這表示文件指針無效。但是這裏有一個示例程序，它機械地直接去讀取文件，不檢查 <code>fopen</code> 是否返回了 <code>NULL</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  FILE *pfile;</span></span>
<span class="line"><span>  int ch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Open the FILE.TXT file ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pfile = fopen(&quot;FILE.TXT&quot;, &quot;r&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* you should check if the file pointer is valid, but we skipped that */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Now display the contents of FILE.TXT ...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while ((ch = fgetc(pfile)) != EOF) {</span></span>
<span class="line"><span>    printf(&quot;&lt;%c&gt;&quot;, ch);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  fclose(pfile);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Ok&quot;);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>當你運行這個程序時，第一次調用 <code>fgetc</code> 會失敗，程序會立即中止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Open the FILE.TXT file ...</span></span>
<span class="line"><span>Now display the contents of FILE.TXT ...</span></span>
<span class="line"><span>Segmentation fault (core dumped)</span></span></code></pre></div><p>始終檢查文件指針以確保其有效。例如，在調用 <code>fopen</code> 打開一個文件後，用類似 <code>if (pfile != NULL)</code> 的語句檢查指針，以確保指針是可以使用的。</p><p>人都會犯錯，最優秀的程序員也會產生編程錯誤。但是，遵循上面這些準則，添加一些額外的代碼來檢查這五種類型的錯誤，就可以避免最嚴重的 C 語言編程錯誤。提前編寫幾行代碼來捕獲這些錯誤，可能會幫你節省數小時的調試時間。</p><hr>`,55)),l("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/21/10/programming-bugs"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/21/10/programming-bugs",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[2]||(s[2]=[n("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),p(a,{href:"https://github.com/unigeorge"},{default:e(()=>[...s[4]||(s[4]=[n("unigeorge",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const v=i(d,[["render",u]]);export{q as __pageData,v as default};
