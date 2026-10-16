import{_ as i,a0 as t,w as c,s as o,ao as r,I as l,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"C 语言编程中的 5 个常见错误及对应解决方案 | LCTT x X-CMD","titleTemplate":false,"description":"C 语言编程中的 5 个常见错误及对应解决方案 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"C 语言编程中的 5 个常见错误及对应解决方案 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"C 语言编程中的 5 个常见错误及对应解决方案 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20211014 5 common bugs in C programming and how to fix them","title":"C 语言编程中的 5 个常见错误及对应解决方案","tag":"202110","desc":""},"relativePath":"202110/20211014 5 common bugs in C programming and how to fix them.md","filePath":"[post].md"}'),d={name:"202110/20211014 5 common bugs in C programming and how to fix them.md"};function u(h,s,g,b,m,f){const a=t("Link");return c(),o("div",null,[s[15]||(s[15]=r(`<h1 id="c-语言编程中的-5-个常见错误及对应解决方案" tabindex="-1">C 语言编程中的 5 个常见错误及对应解决方案 <a class="header-anchor" href="#c-语言编程中的-5-个常见错误及对应解决方案" aria-label="Permalink to “C 语言编程中的 5 个常见错误及对应解决方案”">​</a></h1><blockquote><p>增强 C 语言程序的弹性和可靠性的五种方法。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202110/18/174123p4cz99skp9zz4nf4.jpg" alt=""></p><p>即使是最好的程序员也无法完全避免错误。这些错误可能会引入安全漏洞、导致程序崩溃或产生意外操作，具体影响要取决于程序的运行逻辑。</p><p>C 语言有时名声不太好，因为它不像近期的编程语言（比如 Rust）那样具有内存安全性。但是通过额外的代码，一些最常见和严重的 C 语言错误是可以避免的。下文讲解了可能影响应用程序的五个错误以及避免它们的方法：</p><h3 id="_1、未初始化的变量" tabindex="-1">1、未初始化的变量 <a class="header-anchor" href="#_1、未初始化的变量" aria-label="Permalink to “1、未初始化的变量”">​</a></h3><p>程序启动时，系统会为其分配一块内存以供存储数据。这意味着程序启动时，变量将获得内存中的一个随机值。</p><p>有些编程环境会在程序启动时特意将内存“清零”，因此每个变量都得以有初始的零值。程序中的变量都以零值作为初始值，听上去是很不错的。但是在 C 编程规范中，系统并不会初始化变量。</p><p>看一下这个使用了若干变量和两个数组的示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>这个程序不会初始化变量，所以变量以系统内存中的随机值作为初始值。在我的 Linux 系统上编译和运行这个程序，会看到一些变量恰巧有“零”值，但其他变量并没有：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>These variables are not initialized:</span></span>
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
<span class="line"><span>Ok</span></span></code></pre></div><p>很幸运，<code>i</code> 和 <code>j</code> 变量是从零值开始的，但 <code>k</code> 的起始值为 32766。在 <code>numbers</code> 数组中，大多数元素也恰好从零值开始，只有第三个元素的初始值为 4199024。</p><p>在不同的系统上编译相同的程序，可以进一步显示未初始化变量的危险性。不要误以为“全世界都在运行 Linux”，你的程序很可能某天在其他平台上运行。例如，下面是在 FreeDOS 上运行相同程序的结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>These variables are not initialized:</span></span>
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
<span class="line"><span>Ok</span></span></code></pre></div><p>永远都要记得初始化程序的变量。如果你想让变量将以零值作为初始值，请额外添加代码将零分配给该变量。预先编好这些额外的代码，这会有助于减少日后让人头疼的调试过程。</p><h3 id="_2、数组越界" tabindex="-1">2、数组越界 <a class="header-anchor" href="#_2、数组越界" aria-label="Permalink to “2、数组越界”">​</a></h3><p>C 语言中，数组索引从零开始。这意味着对于长度为 10 的数组，索引是从 0 到 9；长度为 1000 的数组，索引则是从 0 到 999。</p><p>程序员有时会忘记这一点，他们从索引 1 开始引用数组，产生了<ruby>“大小差一”<rt>off by one</rt></ruby>错误。在长度为 5 的数组中，程序员在索引“5”处使用的值，实际上并不是数组的第 5 个元素。相反，它是内存中的一些其他值，根本与此数组无关。</p><p>这是一个数组越界的示例程序。该程序使用了一个只含有 5 个元素的数组，但却引用了该范围之外的数组元素：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>可以看到，程序初始化了数组的所有值（从索引 0 到 4），然后从索引 0 开始读取，结尾是索引 9 而不是索引 4。前五个值是正确的，再后面的值会让你不知所以：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>This array has five elements (0 to 4)</span></span>
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
<span class="line"><span>Ok</span></span></code></pre></div><p>引用数组时，始终要记得追踪数组大小。将数组大小存储在变量中；不要对数组大小进行<ruby>硬编码<rt>hard-code</rt></ruby>。否则，如果后期该标识符指向另一个不同大小的数组，却忘记更改硬编码的数组长度时，程序就可能会发生数组越界。</p><h3 id="_3、字符串溢出" tabindex="-1">3、字符串溢出 <a class="header-anchor" href="#_3、字符串溢出" aria-label="Permalink to “3、字符串溢出”">​</a></h3><p>字符串只是特定类型的数组。在 C 语言中，字符串是一个由 <code>char</code> 类型值组成的数组，其中用一个零字符表示字符串的结尾。</p><p>因此，与数组一样，要注意避免超出字符串的范围。有时也称之为 <em>字符串溢出</em>。</p><p>使用 <code>gets</code> 函数读取数据是一种很容易发生字符串溢出的行为方式。<code>gets</code> 函数非常危险，因为它不知道在一个字符串中可以存储多少数据，只会机械地从用户那里读取数据。如果用户输入像 <code>foo</code> 这样的短字符串，不会发生意外；但是当用户输入的值超过字符串长度时，后果可能是灾难性的。</p><p>下面是一个使用 <code>gets</code> 函数读取城市名称的示例程序。在这个程序中，我还添加了一些未使用的变量，来展示字符串溢出对其他数据的影响：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>当你测试类似的短城市名称时，该程序运行良好，例如伊利诺伊州的 <code>Chicago</code> 或北卡罗来纳州的<code>Raleigh</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var1 = 1; var2 = 2</span></span>
<span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Raleigh</span></span>
<span class="line"><span>&lt;Raleigh&gt; is length 7</span></span>
<span class="line"><span>var1 = 1; var2 = 2</span></span>
<span class="line"><span>Ok</span></span></code></pre></div><p>威尔士的小镇 <code>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</code> 有着世界上最长的名字之一。这个字符串有 58 个字符，远远超出了 <code>name</code> 变量中保留的 10 个字符。结果，程序将值存储在内存的其他区域，覆盖了 <code>var1</code> 和 <code>var2</code> 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var1 = 1; var2 = 2</span></span>
<span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</span></span>
<span class="line"><span>&lt;Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch&gt; is length 58</span></span>
<span class="line"><span>var1 = 2036821625; var2 = 2003266668</span></span>
<span class="line"><span>Ok</span></span>
<span class="line"><span>Segmentation fault (core dumped)</span></span></code></pre></div><p>在运行结束之前，程序会用长字符串覆盖内存的其他部分区域。注意，<code>var1</code> 和 <code>var2</code> 的值不再是起始的 <code>1</code> 和 <code>2</code>。</p><p>避免使用 <code>gets</code> 函数，改用更安全的方法来读取用户数据。例如，<code>getline</code> 函数会分配足够的内存来存储用户输入，因此不会因输入长值而发生意外的字符串溢出。</p><h3 id="_4、重复释放内存" tabindex="-1">4、重复释放内存 <a class="header-anchor" href="#_4、重复释放内存" aria-label="Permalink to “4、重复释放内存”">​</a></h3><p>“分配的内存要手动释放”是良好的 C 语言编程原则之一。程序可以使用 <code>malloc</code> 函数为数组和字符串分配内存，该函数会开辟一块内存，并返回一个指向内存中起始地址的指针。之后，程序可以使用 <code>free</code> 函数释放内存，该函数会使用指针将内存标记为未使用。</p><p>但是，你应该只使用一次 <code>free</code> 函数。第二次调用 <code>free</code> 会导致意外的后果，可能会毁掉你的程序。下面是一个针对此点的简短示例程序。程序分配了内存，然后立即释放了它。但为了模仿一个健忘但有条理的程序员，我在程序结束时又一次释放了内存，导致两次释放了相同的内存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>运行这个程序会导致第二次使用 <code>free</code> 函数时出现戏剧性的失败：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>malloc an array ...</span></span>
<span class="line"><span>malloc succeeded</span></span>
<span class="line"><span>Free the array...</span></span>
<span class="line"><span>Free the array...</span></span>
<span class="line"><span>free(): double free detected in tcache 2</span></span>
<span class="line"><span>Aborted (core dumped)</span></span></code></pre></div><p>要记得避免在数组或字符串上多次调用 <code>free</code>。将 <code>malloc</code> 和 <code>free</code> 函数定位在同一个函数中，这是避免重复释放内存的一种方法。</p><p>例如，一个纸牌游戏程序可能会在主函数中为一副牌分配内存，然后在其他函数中使用这副牌来玩游戏。记得在主函数，而不是其他函数中释放内存。将 <code>malloc</code> 和 <code>free</code> 语句放在一起有助于避免多次释放内存。</p><h3 id="_5、使用无效的文件指针" tabindex="-1">5、使用无效的文件指针 <a class="header-anchor" href="#_5、使用无效的文件指针" aria-label="Permalink to “5、使用无效的文件指针”">​</a></h3><p>文件是一种便捷的数据存储方式。例如，你可以将程序的配置数据存储在 <code>config.dat</code> 文件中。Bash shell 会从用户家目录中的 <code>.bash_profile</code> 读取初始化脚本。GNU Emacs 编辑器会寻找文件 <code>.emacs</code> 以从中确定起始值。而 Zoom 会议客户端使用 <code>zoomus.conf</code> 文件读取其程序配置。</p><p>所以，从文件中读取数据的能力几乎对所有程序都很重要。但是假如要读取的文件不存在，会发生什么呢？</p><p>在 C 语言中读取文件，首先要用 <code>fopen</code> 函数打开文件，该函数会返回指向文件的流指针。你可以结合其他函数，使用这个指针来读取数据，例如 <code>fgetc</code> 会逐个字符地读取文件。</p><p>如果要读取的文件不存在或程序没有读取权限，<code>fopen</code> 函数会返回 <code>NULL</code> 作为文件指针，这表示文件指针无效。但是这里有一个示例程序，它机械地直接去读取文件，不检查 <code>fopen</code> 是否返回了 <code>NULL</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>当你运行这个程序时，第一次调用 <code>fgetc</code> 会失败，程序会立即中止：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Open the FILE.TXT file ...</span></span>
<span class="line"><span>Now display the contents of FILE.TXT ...</span></span>
<span class="line"><span>Segmentation fault (core dumped)</span></span></code></pre></div><p>始终检查文件指针以确保其有效。例如，在调用 <code>fopen</code> 打开一个文件后，用类似 <code>if (pfile != NULL)</code> 的语句检查指针，以确保指针是可以使用的。</p><p>人都会犯错，最优秀的程序员也会产生编程错误。但是，遵循上面这些准则，添加一些额外的代码来检查这五种类型的错误，就可以避免最严重的 C 语言编程错误。提前编写几行代码来捕获这些错误，可能会帮你节省数小时的调试时间。</p><hr>`,55)),l("p",null,[s[1]||(s[1]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/21/10/programming-bugs"},{default:e(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/21/10/programming-bugs",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[2]||(s[2]=[n("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),p(a,{href:"https://github.com/unigeorge"},{default:e(()=>[...s[4]||(s[4]=[n("unigeorge",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const v=i(d,[["render",u]]);export{q as __pageData,v as default};
