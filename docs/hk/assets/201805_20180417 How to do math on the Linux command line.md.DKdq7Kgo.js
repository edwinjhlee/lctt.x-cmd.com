import{_ as l,a0 as t,w as c,s as o,ao as h,I as i,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const m=JSON.parse('{"title":"Linux 命令列下的數學運算 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 命令列下的數學運算 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 命令列下的數學運算 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 命令列下的數學運算 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180417 How to do math on the Linux command line","title":"Linux 命令列下的數學運算","tag":"201805","desc":""},"relativePath":"201805/20180417 How to do math on the Linux command line.md","filePath":"[post].md"}'),d={name:"201805/20180417 How to do math on the Linux command line.md"};function r(g,s,k,b,u,f){const n=t("Link");return c(),o("div",null,[s[15]||(s[15]=h(`<h1 id="linux-命令列下的數學運算" tabindex="-1">Linux 命令列下的數學運算 <a class="header-anchor" href="#linux-命令列下的數學運算" aria-label="Permalink to “Linux 命令列下的數學運算”">​</a></h1><blockquote><p>有幾個有趣的命令可以在 Linux 系統下做數學運算： <code>expr</code>、<code>factor</code>、<code>jot</code> 和 <code>bc</code> 命令。</p></blockquote><p><img src="https://images.techhive.com/images/article/2014/12/math_blackboard-100534564-large.jpg" alt=""></p><p>可以在 Linux 命令列下做數學運算嗎？當然可以！事實上，有不少命令可以輕鬆完成這些操作，其中一些甚至讓你大吃一驚。讓我們來學習這些有用的數學運算命令或命令語法吧。</p><h3 id="expr" tabindex="-1">expr <a class="header-anchor" href="#expr" aria-label="Permalink to “expr”">​</a></h3><p>首先，對於在命令列使用命令進行數學運算，可能最容易想到、最常用的命令就是 <code>expr</code> （<ruby>表達式<rt>expression</rt></ruby>。它可以完成四則運算，也可以用於比較大小。下面是幾個例子：</p><h4 id="變量遞增" tabindex="-1">變量遞增 <a class="header-anchor" href="#變量遞增" aria-label="Permalink to “變量遞增”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ count=0</span></span>
<span class="line"><span>$ count=\`expr $count + 1\`</span></span>
<span class="line"><span>$ echo $count</span></span>
<span class="line"><span>1</span></span></code></pre></div><h4 id="完成簡單運算" tabindex="-1">完成簡單運算 <a class="header-anchor" href="#完成簡單運算" aria-label="Permalink to “完成簡單運算”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr 11 + 123</span></span>
<span class="line"><span>134</span></span>
<span class="line"><span>$ expr 134 / 11</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>$ expr 134 - 11</span></span>
<span class="line"><span>123</span></span>
<span class="line"><span>$ expr 11 * 123</span></span>
<span class="line"><span>expr: syntax error      &lt;== oops!</span></span>
<span class="line"><span>$ expr 11 \\* 123</span></span>
<span class="line"><span>1353</span></span>
<span class="line"><span>$ expr 20 % 3</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>注意，你需要在 <code>*</code> 運算符之前增加 <code>\\</code> 符號，避免語法錯誤。<code>%</code> 運算符用於取餘運算。</p><p>下面是一個稍微複雜的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>participants=11</span></span>
<span class="line"><span>total=156</span></span>
<span class="line"><span>share=\`expr $total / $participants\`</span></span>
<span class="line"><span>remaining=\`expr $total - $participants \\* $share\`</span></span>
<span class="line"><span>echo $share</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>echo $remaining</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>假設某個活動中有 11 位參與者，需要頒發的獎項總數為 156，那麼平均每個參與者獲得 14 項獎項，額外剩餘 2 個獎項。</p><h4 id="比較" tabindex="-1">比較 <a class="header-anchor" href="#比較" aria-label="Permalink to “比較”">​</a></h4><p>下面讓我們看一下比較的操作。從第一印象來看，語句看似有些怪異；這裏並不是<strong>設置</strong>數值，而是進行數字比較。在本例中 <code>expr</code> 判斷表達式是否為真：如果結果是 1，那麼表達式為真；反之，表達式為假。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr 11 = 11</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ expr 11 = 12</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>請讀作“11 是否等於 11？”及“11 是否等於 12？”，你很快就會習慣這種寫法。當然，我們不會在命令列上執行上述比較，可能的比較是 <code>$age</code> 是否等於 <code>11</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ age=11</span></span>
<span class="line"><span>$ expr $age = 11</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>如果將數字放到引號中間，那麼你將進行字符串比較，而不是數值比較。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr &quot;11&quot; = &quot;11&quot;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ expr &quot;eleven&quot; = &quot;11&quot;</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>在本例中，我們判斷 10 是否大於 5，以及是否大於 99。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr 10 \\&gt; 5</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ expr 10 \\&gt; 99</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>的確，返回 1 和 0 分別代表比較的結果為真和假，我們一般預期在 Linux 上得到這個結果。在下面的例子中，按照上述邏輯使用 <code>expr</code> 並不正確，因為 <code>if</code> 的工作原理剛好相反，即 0 代表真。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo -n &quot;Cost to us&gt; &quot;</span></span>
<span class="line"><span>read cost</span></span>
<span class="line"><span>echo -n &quot;Price we&#39;re asking&gt; &quot;</span></span>
<span class="line"><span>read price</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ \`expr $price \\&gt; $cost\` ]; then</span></span>
<span class="line"><span> echo &quot;We make money&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span> echo &quot;Don&#39;t sell it&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>下面，我們運行這個腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./checkPrice</span></span>
<span class="line"><span>Cost to us&gt; 11.50</span></span>
<span class="line"><span>Price we&#39;re asking&gt; 6</span></span>
<span class="line"><span>We make money</span></span></code></pre></div><p>這顯然與我們預期不符！我們稍微修改一下，以便使其按我們預期工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo -n &quot;Cost to us&gt; &quot;</span></span>
<span class="line"><span>read cost</span></span>
<span class="line"><span>echo -n &quot;Price we&#39;re asking&gt; &quot;</span></span>
<span class="line"><span>read price</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ \`expr $price \\&gt; $cost\` == 1 ]; then</span></span>
<span class="line"><span> echo &quot;We make money&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span> echo &quot;Don&#39;t sell it&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><h3 id="factor" tabindex="-1">factor <a class="header-anchor" href="#factor" aria-label="Permalink to “factor”">​</a></h3><p><code>factor</code> 命令的功能基本與你預期相符。你給出一個數字，該命令會給出對應數字的因子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ factor 111</span></span>
<span class="line"><span>111: 3 37</span></span>
<span class="line"><span>$ factor 134</span></span>
<span class="line"><span>134: 2 67</span></span>
<span class="line"><span>$ factor 17894</span></span>
<span class="line"><span>17894: 2 23 389</span></span>
<span class="line"><span>$ factor 1987</span></span>
<span class="line"><span>1987: 1987</span></span></code></pre></div><p>注：<code>factor</code> 命令對於最後一個數字沒有返回更多因子，這是因為 1987 是一個<strong>質數</strong>。</p><h3 id="jot" tabindex="-1">jot <a class="header-anchor" href="#jot" aria-label="Permalink to “jot”">​</a></h3><p><code>jot</code> 命令可以創建一系列數字。給定數字總數及起始數字即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jot 8 10</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>11</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>13</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>15</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>17</span></span></code></pre></div><p>你也可以用如下方式使用 <code>jot</code>，這裏我們要求遞減至數字 2。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jot 8 10 2</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>2</span></span></code></pre></div><p><code>jot</code> 可以幫你構造一系列數字組成的列表，該列表可以用於其它任務。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for i in \`jot 7 17\`; do echo April $i; done</span></span>
<span class="line"><span>April 17</span></span>
<span class="line"><span>April 18</span></span>
<span class="line"><span>April 19</span></span>
<span class="line"><span>April 20</span></span>
<span class="line"><span>April 21</span></span>
<span class="line"><span>April 22</span></span>
<span class="line"><span>April 23</span></span></code></pre></div><h3 id="bc" tabindex="-1">bc <a class="header-anchor" href="#bc" aria-label="Permalink to “bc”">​</a></h3><p><code>bc</code> 基本上是命令列數學運算最佳工具之一。輸入你想執行的運算，使用管道發送至該命令即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;123.4+5/6-(7.89*1.234)&quot; | bc</span></span>
<span class="line"><span>113.664</span></span></code></pre></div><p>可見 <code>bc</code> 並沒有忽略精度，而且輸入的字符串也相當直截了當。它還可以進行大小比較、處理布爾值、計算平方根、正弦、餘弦和正切等。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;sqrt(256)&quot; | bc</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>$ echo &quot;s(90)&quot; | bc -l</span></span>
<span class="line"><span>.89399666360055789051</span></span></code></pre></div><p>事實上，<code>bc</code> 甚至可以計算 pi。你需要指定需要的精度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;scale=5; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.14156</span></span>
<span class="line"><span>$ echo &quot;scale=10; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.1415926532</span></span>
<span class="line"><span>$ echo &quot;scale=20; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.14159265358979323844</span></span>
<span class="line"><span>$ echo &quot;scale=40; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.1415926535897932384626433832795028841968</span></span></code></pre></div><p>除了通過管道接收數據並返回結果，<code>bc</code>還可以交互式運行，輸入你想執行的運算即可。本例中提到的 <code>scale</code> 設置可以指定有效數字的個數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bc</span></span>
<span class="line"><span>bc 1.06.95</span></span>
<span class="line"><span>Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.</span></span>
<span class="line"><span>This is free software with ABSOLUTELY NO WARRANTY.</span></span>
<span class="line"><span>For details type \`warranty&#39;.</span></span>
<span class="line"><span>scale=2</span></span>
<span class="line"><span>3/4</span></span>
<span class="line"><span>.75</span></span>
<span class="line"><span>2/3</span></span>
<span class="line"><span>.66</span></span>
<span class="line"><span>quit</span></span></code></pre></div><p>你還可以使用 <code>bc</code> 完成數字進制轉換。<code>obase</code> 用於設置輸出的數字進制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bc</span></span>
<span class="line"><span>bc 1.06.95</span></span>
<span class="line"><span>Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.</span></span>
<span class="line"><span>This is free software with ABSOLUTELY NO WARRANTY.</span></span>
<span class="line"><span>For details type \`warranty&#39;.</span></span>
<span class="line"><span>obase=16</span></span>
<span class="line"><span>16      &lt;=== entered</span></span>
<span class="line"><span>10      &lt;=== response</span></span>
<span class="line"><span>256     &lt;=== entered</span></span>
<span class="line"><span>100     &lt;=== response</span></span>
<span class="line"><span>quit</span></span></code></pre></div><p>按如下方式使用 <code>bc</code> 也是完成十六進制與十進制轉換的最簡單方式之一：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;ibase=16; F2&quot; | bc</span></span>
<span class="line"><span>242</span></span>
<span class="line"><span>$ echo &quot;obase=16; 242&quot; | bc</span></span>
<span class="line"><span>F2</span></span></code></pre></div><p>在上面第一個例子中，我們將輸入進制（<code>ibase</code>）設置為十六進制（<code>hex</code>），完成十六進制到為十進制的轉換。在第二個例子中，我們執行相反的操作，即將輸出進制（<code>obase</code>）設置為十六進制。</p><h3 id="簡單的-bash-數學運算" tabindex="-1">簡單的 bash 數學運算 <a class="header-anchor" href="#簡單的-bash-數學運算" aria-label="Permalink to “簡單的 bash 數學運算”">​</a></h3><p>通過使用雙括號，我們可以在 bash 中完成簡單的數學運算。在下面的例子中，我們創建一個變量，為變量賦值，然後依次執行加法、自減和平方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ((e=11))</span></span>
<span class="line"><span>$ (( e = e + 7 ))</span></span>
<span class="line"><span>$ echo $e</span></span>
<span class="line"><span>18</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ((e--))</span></span>
<span class="line"><span>$ echo $e</span></span>
<span class="line"><span>17</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ((e=e**2))</span></span>
<span class="line"><span>$ echo $e</span></span>
<span class="line"><span>289</span></span></code></pre></div><p>允許使用的運算符包括：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+ -     加法及減法</span></span>
<span class="line"><span>++ --   自增與自減</span></span>
<span class="line"><span>* / %   乘法、除法及求餘數</span></span>
<span class="line"><span>^       指數運算</span></span></code></pre></div><p>你還可以使用邏輯運算符和布爾運算符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ((x=11)); ((y=7))</span></span>
<span class="line"><span>$ if (( x &gt; y )); then</span></span>
<span class="line"><span>&gt; echo &quot;x &gt; y&quot;</span></span>
<span class="line"><span>&gt; fi</span></span>
<span class="line"><span>x &gt; y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ((x=11)); ((y=7)); ((z=3))</span></span>
<span class="line"><span>$ if (( x &gt; y )) &gt;&gt; (( y &gt; z )); then</span></span>
<span class="line"><span>&gt; echo &quot;letters roll downhill&quot;</span></span>
<span class="line"><span>&gt; fi</span></span>
<span class="line"><span>letters roll downhill</span></span></code></pre></div><p>或者如下方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ if [ x &gt; y ] &lt;&lt; [ y &gt; z ]; then echo &quot;letters roll downhill&quot;; fi</span></span>
<span class="line"><span>letters roll downhill</span></span></code></pre></div><p>下面計算 2 的 3 次冪：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;2 ^ 3&quot;</span></span>
<span class="line"><span>2 ^ 3</span></span>
<span class="line"><span>$ echo &quot;2 ^ 3&quot; | bc</span></span>
<span class="line"><span>8</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>在 Linux 系統中，有很多不同的命令列工具可以完成數字運算。希望你在讀完本文之後，能掌握一兩個新工具。</p><hr>`,68)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://www.networkworld.com/article/3268964/linux/how-to-do-math-on-the-linux-command-line.html"},{default:e(()=>[...s[0]||(s[0]=[a("https://www.networkworld.com/article/3268964/linux/how-to-do-math-on-the-linux-command-line.html",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[2]||(s[2]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),p(n,{href:"https://github.com/pinewall"},{default:e(()=>[...s[4]||(s[4]=[a("pinewall",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const $=l(d,[["render",r]]);export{m as __pageData,$ as default};
