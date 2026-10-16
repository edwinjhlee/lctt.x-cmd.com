import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as n,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"如何在 C 語言中安全地讀取用户輸入 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 C 語言中安全地讀取用户輸入 | LCTT (202307) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 C 語言中安全地讀取用户輸入 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 C 語言中安全地讀取用户輸入 | LCTT (202307) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202307/20220510 How to (safely) read user input with the getline function","title":"如何在 C 語言中安全地讀取用户輸入","tag":"202307","desc":""},"relativePath":"202307/20220510 How to (safely) read user input with the getline function.md","filePath":"[post].md"}'),r={name:"202307/20220510 How to (safely) read user input with the getline function.md"};function g(h,s,u,k,f,b){const a=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="如何在-c-語言中安全地讀取用户輸入" tabindex="-1">如何在 C 語言中安全地讀取用户輸入 <a class="header-anchor" href="#如何在-c-語言中安全地讀取用户輸入" aria-label="Permalink to “如何在 C 語言中安全地讀取用户輸入”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202307/18/104358pr5ergummii3f3le.jpg" alt=""></p><blockquote><p><code>getline()</code> 提供了一種更靈活的方法，可以在不破壞系統的情況下將用户數據讀入程序。</p></blockquote><p>在 C 語言中讀取字符串是一件非常危險的事情。當讀取用户輸入時，程序員可能會嘗試使用 C 標準庫中的 <code>gets</code> 函數。它的用法非常簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char *gets(char *string);</span></span></code></pre></div><p><code>gets()</code> 從標準輸入讀取數據，然後將結果存儲在一個字符串變量中。它會返回一個指向字符串的指針，如果沒有讀取到內容，返回 <code>NULL</code> 值。</p><p>舉一個簡單的例子，我們可能會問用户一個問題，然後將結果讀入字符串中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char city[10]; // 例如 &quot;Chicago&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 這種方法很糟糕 .. 不要使用 gets</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Where do you live?&quot;);</span></span>
<span class="line"><span>  gets(city);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;&lt;%s&gt; is length %ld\\n&quot;, city, strlen(city));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>輸入一個相對較短的值就可以：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Chicago</span></span>
<span class="line"><span>&lt;Chicago&gt; is length 7</span></span></code></pre></div><p>然而，<code>gets()</code> 函數非常簡單，它會天真地讀取數據，直到它認為用户完成為止。但是它不會檢查字符串是否足夠容納用户的輸入。輸入一個非常長的值會導致 <code>gets()</code> 存儲的數據超出字符串變量長度，從而導致覆蓋其他部分內存。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</span></span>
<span class="line"><span>&lt;Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch&gt; is length 58</span></span>
<span class="line"><span>Segmentation fault (core dumped)</span></span></code></pre></div><p>最好的情況是，覆蓋部分只會破壞程序。最壞的情況是，這會引入一個嚴重的安全漏洞，惡意用户可以通過你的程序將任意數據插入計算機的內存中。</p><p>這就是為什麼在程序中使用 <code>gets()</code> 函數是危險的。使用 <code>gets()</code>，你無法控制程序嘗試從用户讀取多少數據，這通常會導致緩衝區溢出。</p><h3 id="安全的方法" tabindex="-1">安全的方法 <a class="header-anchor" href="#安全的方法" aria-label="Permalink to “安全的方法”">​</a></h3><p><code>fgets()</code> 函數歷來是安全讀取字符串的推薦方法。此版本的 <code>gets()</code> 提供了一個安全檢查，通過僅讀取作為函數參數傳遞的特定數量的字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char *fgets(char *string, int size, FILE *stream);</span></span></code></pre></div><p><code>fgets()</code> 函數會從文件指針讀取數據，然後將數據存儲到字符串變量中，但最多隻能達到 <code>size</code> 指定的長度。我們可以更新示例程序來測試這一點，使用 <code>fgets()</code> 而不是 <code>gets()</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    char city[10]; // 例如 &quot;Chicago&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    puts(&quot;Where do you live?&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // fgets 雖好但是並不完美</span></span>
<span class="line"><span>    fgets(city, 10, stdin);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;&lt;%s&gt; is length %ld\\n&quot;, city, strlen(city));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果編譯運行，你可以在提示符後輸入任意長的城市名稱。但是，程序只會讀取 <code>size</code> = 10 數據存儲到字符串變量中。因為 C 語言在字符串末尾會添加一個空（<code>\\0</code>）字符，這意味着 <code>fgets()</code> 只會讀取 9 個字符到字符串中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Minneapolis</span></span>
<span class="line"><span>&lt;Minneapol&gt; is length 9</span></span></code></pre></div><p>雖然這肯定比 <code>fgets()</code> 讀取用户輸入更安全，但代價是如果用户輸入過長，它會“切斷”用户輸入。</p><h3 id="新的安全方法" tabindex="-1">新的安全方法 <a class="header-anchor" href="#新的安全方法" aria-label="Permalink to “新的安全方法”">​</a></h3><p>更靈活的解決方案是，如果用户輸入的數據比變量可能容納的數據多，則允許字符串讀取函數為字符串分配更多內存。根據需要調整字符串變量大小，確保程序始終有足夠的空間來存儲用户輸入。</p><p><code>getline()</code> 函數正是這樣。它從輸入流讀取輸入，例如鍵盤或文件，然後將數據存儲在字符串變量中。但與 <code>fgets()</code> 和 <code>gets()</code> 不同，<code>getline()</code> 使用 <code>realloc()</code> 調整字符串大小，確保有足夠的內存來存儲完整輸入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ssize_t getline(char **pstring, size_t *size, FILE *stream);</span></span></code></pre></div><p><code>getline()</code> 實際上是一個名為 <code>getdelim()</code> 的類似函數的裝飾器，它會讀取數據一直到特殊分隔符停止。本例中，<code>getline()</code> 使用換行符（<code>\\n</code>）作為分隔符，因為當從鍵盤或文件讀取用户輸入時，數據行由換行符分隔。</p><p>結果證明這是一種更安全的方法讀取任意數據，一次一行。要使用 <code>getline()</code>，首先定義一個字符串指針並將其設置為 <code>NULL</code> ，表示還沒有預留內存，再定義一個 <code>size_t</code> 類型的“字符串大小” 的變量，並給它一個零值。當你調用 <code>getline()</code> 時，你需要傳入字符串和字符串大小變量的指針，以及從何處讀取數據。對於示例程序，我們可以從標準輸入中讀取：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char *string = NULL;</span></span>
<span class="line"><span>  size_t size = 0;</span></span>
<span class="line"><span>  ssize_t chars_read;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用 getline 讀取長字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Enter a really long string:&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chars_read = getline(&amp;string, &amp;size, stdin);</span></span>
<span class="line"><span>  printf(&quot;getline returned %ld\\n&quot;, chars_read);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 檢查錯誤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (chars_read &lt; 0) {</span></span>
<span class="line"><span>    puts(&quot;couldn&#39;t read the input&quot;);</span></span>
<span class="line"><span>    free(string);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 打印字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;&lt;%s&gt; is length %ld\\n&quot;, string, strlen(string));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 釋放字符串使用的內存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  free(string);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>getline()</code> 讀取數據時，它將根據需要自動為字符串變量重新分配內存。當函數讀取一行的所有數據時，它通過指針更新字符串的大小，並返回讀取的字符數，包括分隔符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Enter a really long string:</span></span>
<span class="line"><span>Supercalifragilisticexpialidocious</span></span>
<span class="line"><span>getline returned 35</span></span>
<span class="line"><span>&lt;Supercalifragilisticexpialidocious</span></span>
<span class="line"><span>&gt; is length 35</span></span></code></pre></div><p>注意，字符串包含分隔符。對於 <code>getline()</code>，分隔符是換行符，這就是為什麼輸出中有換行符的原因。 如果你不想在字符串值中使用分隔符，可以使用另一個函數將字符串中的分隔符更改為空字符。</p><p>通過 <code>getline()</code>，程序員可以安全地避免 C 編程的一個常見陷阱：你永遠無法知道用户可能會輸入哪些數據。這就是為什麼使用 <code>gets()</code> 不安全，而 <code>fgets()</code> 又太笨拙的原因。相反，<code>getline()</code> 提供了一種更靈活的方法，可以在不破壞系統的情況下將用户數據讀入程序。</p><p><em>（題圖：MJ/4b23132f-8916-42ae-b2da-06fd2812bea8）</em></p><hr>`,35)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/22/5/safely-read-user-input-getline"},{default:p(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/22/5/safely-read-user-input-getline",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...s[2]||(s[2]=[n("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),e(a,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[n("lkxed",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),e(a,{href:"https://github.com/MjSeven"},{default:p(()=>[...s[4]||(s[4]=[n("MjSeven",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const v=l(r,[["render",g]]);export{C as __pageData,v as default};
