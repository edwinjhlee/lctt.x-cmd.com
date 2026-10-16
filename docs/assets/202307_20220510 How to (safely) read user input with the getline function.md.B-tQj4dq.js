import{_ as l,a0 as t,w as o,s as c,ao as d,I as i,x as n,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何在 C 语言中安全地读取用户输入 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 C 语言中安全地读取用户输入 | LCTT (202307) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 C 语言中安全地读取用户输入 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 C 语言中安全地读取用户输入 | LCTT (202307) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202307/20220510 How to (safely) read user input with the getline function","title":"如何在 C 语言中安全地读取用户输入","tag":"202307","desc":""},"relativePath":"202307/20220510 How to (safely) read user input with the getline function.md","filePath":"[post].md"}'),r={name:"202307/20220510 How to (safely) read user input with the getline function.md"};function g(h,s,u,k,f,b){const a=t("Link");return o(),c("div",null,[s[15]||(s[15]=d(`<h1 id="如何在-c-语言中安全地读取用户输入" tabindex="-1">如何在 C 语言中安全地读取用户输入 <a class="header-anchor" href="#如何在-c-语言中安全地读取用户输入" aria-label="Permalink to “如何在 C 语言中安全地读取用户输入”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202307/18/104358pr5ergummii3f3le.jpg" alt=""></p><blockquote><p><code>getline()</code> 提供了一种更灵活的方法，可以在不破坏系统的情况下将用户数据读入程序。</p></blockquote><p>在 C 语言中读取字符串是一件非常危险的事情。当读取用户输入时，程序员可能会尝试使用 C 标准库中的 <code>gets</code> 函数。它的用法非常简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char *gets(char *string);</span></span></code></pre></div><p><code>gets()</code> 从标准输入读取数据，然后将结果存储在一个字符串变量中。它会返回一个指向字符串的指针，如果没有读取到内容，返回 <code>NULL</code> 值。</p><p>举一个简单的例子，我们可能会问用户一个问题，然后将结果读入字符串中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char city[10]; // 例如 &quot;Chicago&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 这种方法很糟糕 .. 不要使用 gets</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Where do you live?&quot;);</span></span>
<span class="line"><span>  gets(city);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;&lt;%s&gt; is length %ld\\n&quot;, city, strlen(city));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>输入一个相对较短的值就可以：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Chicago</span></span>
<span class="line"><span>&lt;Chicago&gt; is length 7</span></span></code></pre></div><p>然而，<code>gets()</code> 函数非常简单，它会天真地读取数据，直到它认为用户完成为止。但是它不会检查字符串是否足够容纳用户的输入。输入一个非常长的值会导致 <code>gets()</code> 存储的数据超出字符串变量长度，从而导致覆盖其他部分内存。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</span></span>
<span class="line"><span>&lt;Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch&gt; is length 58</span></span>
<span class="line"><span>Segmentation fault (core dumped)</span></span></code></pre></div><p>最好的情况是，覆盖部分只会破坏程序。最坏的情况是，这会引入一个严重的安全漏洞，恶意用户可以通过你的程序将任意数据插入计算机的内存中。</p><p>这就是为什么在程序中使用 <code>gets()</code> 函数是危险的。使用 <code>gets()</code>，你无法控制程序尝试从用户读取多少数据，这通常会导致缓冲区溢出。</p><h3 id="安全的方法" tabindex="-1">安全的方法 <a class="header-anchor" href="#安全的方法" aria-label="Permalink to “安全的方法”">​</a></h3><p><code>fgets()</code> 函数历来是安全读取字符串的推荐方法。此版本的 <code>gets()</code> 提供了一个安全检查，通过仅读取作为函数参数传递的特定数量的字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char *fgets(char *string, int size, FILE *stream);</span></span></code></pre></div><p><code>fgets()</code> 函数会从文件指针读取数据，然后将数据存储到字符串变量中，但最多只能达到 <code>size</code> 指定的长度。我们可以更新示例程序来测试这一点，使用 <code>fgets()</code> 而不是 <code>gets()</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    char city[10]; // 例如 &quot;Chicago&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    puts(&quot;Where do you live?&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // fgets 虽好但是并不完美</span></span>
<span class="line"><span>    fgets(city, 10, stdin);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    printf(&quot;&lt;%s&gt; is length %ld\\n&quot;, city, strlen(city));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果编译运行，你可以在提示符后输入任意长的城市名称。但是，程序只会读取 <code>size</code> = 10 数据存储到字符串变量中。因为 C 语言在字符串末尾会添加一个空（<code>\\0</code>）字符，这意味着 <code>fgets()</code> 只会读取 9 个字符到字符串中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Where do you live?</span></span>
<span class="line"><span>Minneapolis</span></span>
<span class="line"><span>&lt;Minneapol&gt; is length 9</span></span></code></pre></div><p>虽然这肯定比 <code>fgets()</code> 读取用户输入更安全，但代价是如果用户输入过长，它会“切断”用户输入。</p><h3 id="新的安全方法" tabindex="-1">新的安全方法 <a class="header-anchor" href="#新的安全方法" aria-label="Permalink to “新的安全方法”">​</a></h3><p>更灵活的解决方案是，如果用户输入的数据比变量可能容纳的数据多，则允许字符串读取函数为字符串分配更多内存。根据需要调整字符串变量大小，确保程序始终有足够的空间来存储用户输入。</p><p><code>getline()</code> 函数正是这样。它从输入流读取输入，例如键盘或文件，然后将数据存储在字符串变量中。但与 <code>fgets()</code> 和 <code>gets()</code> 不同，<code>getline()</code> 使用 <code>realloc()</code> 调整字符串大小，确保有足够的内存来存储完整输入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ssize_t getline(char **pstring, size_t *size, FILE *stream);</span></span></code></pre></div><p><code>getline()</code> 实际上是一个名为 <code>getdelim()</code> 的类似函数的装饰器，它会读取数据一直到特殊分隔符停止。本例中，<code>getline()</code> 使用换行符（<code>\\n</code>）作为分隔符，因为当从键盘或文件读取用户输入时，数据行由换行符分隔。</p><p>结果证明这是一种更安全的方法读取任意数据，一次一行。要使用 <code>getline()</code>，首先定义一个字符串指针并将其设置为 <code>NULL</code> ，表示还没有预留内存，再定义一个 <code>size_t</code> 类型的“字符串大小” 的变量，并给它一个零值。当你调用 <code>getline()</code> 时，你需要传入字符串和字符串大小变量的指针，以及从何处读取数据。对于示例程序，我们可以从标准输入中读取：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char *string = NULL;</span></span>
<span class="line"><span>  size_t size = 0;</span></span>
<span class="line"><span>  ssize_t chars_read;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用 getline 读取长字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;Enter a really long string:&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  chars_read = getline(&amp;string, &amp;size, stdin);</span></span>
<span class="line"><span>  printf(&quot;getline returned %ld\\n&quot;, chars_read);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 检查错误</span></span>
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
<span class="line"><span>  // 释放字符串使用的内存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  free(string);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>getline()</code> 读取数据时，它将根据需要自动为字符串变量重新分配内存。当函数读取一行的所有数据时，它通过指针更新字符串的大小，并返回读取的字符数，包括分隔符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Enter a really long string:</span></span>
<span class="line"><span>Supercalifragilisticexpialidocious</span></span>
<span class="line"><span>getline returned 35</span></span>
<span class="line"><span>&lt;Supercalifragilisticexpialidocious</span></span>
<span class="line"><span>&gt; is length 35</span></span></code></pre></div><p>注意，字符串包含分隔符。对于 <code>getline()</code>，分隔符是换行符，这就是为什么输出中有换行符的原因。 如果你不想在字符串值中使用分隔符，可以使用另一个函数将字符串中的分隔符更改为空字符。</p><p>通过 <code>getline()</code>，程序员可以安全地避免 C 编程的一个常见陷阱：你永远无法知道用户可能会输入哪些数据。这就是为什么使用 <code>gets()</code> 不安全，而 <code>fgets()</code> 又太笨拙的原因。相反，<code>getline()</code> 提供了一种更灵活的方法，可以在不破坏系统的情况下将用户数据读入程序。</p><p><em>（题图：MJ/4b23132f-8916-42ae-b2da-06fd2812bea8）</em></p><hr>`,35)),i("p",null,[s[1]||(s[1]=n("via: ",-1)),e(a,{href:"https://opensource.com/article/22/5/safely-read-user-input-getline"},{default:p(()=>[...s[0]||(s[0]=[n("https://opensource.com/article/22/5/safely-read-user-input-getline",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=n("作者：",-1)),e(a,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...s[2]||(s[2]=[n("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=n(" 选题：",-1)),e(a,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[n("lkxed",-1)])]),_:1}),s[8]||(s[8]=n(" 译者：",-1)),e(a,{href:"https://github.com/MjSeven"},{default:p(()=>[...s[4]||(s[4]=[n("MjSeven",-1)])]),_:1}),s[9]||(s[9]=n(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=n("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原创编译，",-1)),e(a,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[n("Linux中国",-1)])]),_:1}),s[14]||(s[14]=n(" 荣誉推出",-1))])])}const v=l(r,[["render",g]]);export{C as __pageData,v as default};
