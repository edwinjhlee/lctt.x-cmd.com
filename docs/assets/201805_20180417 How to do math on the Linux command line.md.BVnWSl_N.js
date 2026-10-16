import{_ as l,a0 as t,w as c,s as o,ao as h,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const m=JSON.parse('{"title":"Linux 命令行下的数学运算 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 命令行下的数学运算 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 命令行下的数学运算 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 命令行下的数学运算 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180417 How to do math on the Linux command line","title":"Linux 命令行下的数学运算","tag":"201805","desc":""},"relativePath":"201805/20180417 How to do math on the Linux command line.md","filePath":"[post].md"}'),d={name:"201805/20180417 How to do math on the Linux command line.md"};function r(g,s,k,b,u,f){const n=t("Link");return c(),o("div",null,[s[15]||(s[15]=h(`<h1 id="linux-命令行下的数学运算" tabindex="-1">Linux 命令行下的数学运算 <a class="header-anchor" href="#linux-命令行下的数学运算" aria-label="Permalink to “Linux 命令行下的数学运算”">​</a></h1><blockquote><p>有几个有趣的命令可以在 Linux 系统下做数学运算： <code>expr</code>、<code>factor</code>、<code>jot</code> 和 <code>bc</code> 命令。</p></blockquote><p><img src="https://images.techhive.com/images/article/2014/12/math_blackboard-100534564-large.jpg" alt=""></p><p>可以在 Linux 命令行下做数学运算吗？当然可以！事实上，有不少命令可以轻松完成这些操作，其中一些甚至让你大吃一惊。让我们来学习这些有用的数学运算命令或命令语法吧。</p><h3 id="expr" tabindex="-1">expr <a class="header-anchor" href="#expr" aria-label="Permalink to “expr”">​</a></h3><p>首先，对于在命令行使用命令进行数学运算，可能最容易想到、最常用的命令就是 <code>expr</code> （<ruby>表达式<rt>expression</rt></ruby>。它可以完成四则运算，也可以用于比较大小。下面是几个例子：</p><h4 id="变量递增" tabindex="-1">变量递增 <a class="header-anchor" href="#变量递增" aria-label="Permalink to “变量递增”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ count=0</span></span>
<span class="line"><span>$ count=\`expr $count + 1\`</span></span>
<span class="line"><span>$ echo $count</span></span>
<span class="line"><span>1</span></span></code></pre></div><h4 id="完成简单运算" tabindex="-1">完成简单运算 <a class="header-anchor" href="#完成简单运算" aria-label="Permalink to “完成简单运算”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr 11 + 123</span></span>
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
<span class="line"><span>2</span></span></code></pre></div><p>注意，你需要在 <code>*</code> 运算符之前增加 <code>\\</code> 符号，避免语法错误。<code>%</code> 运算符用于取余运算。</p><p>下面是一个稍微复杂的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>participants=11</span></span>
<span class="line"><span>total=156</span></span>
<span class="line"><span>share=\`expr $total / $participants\`</span></span>
<span class="line"><span>remaining=\`expr $total - $participants \\* $share\`</span></span>
<span class="line"><span>echo $share</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>echo $remaining</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>假设某个活动中有 11 位参与者，需要颁发的奖项总数为 156，那么平均每个参与者获得 14 项奖项，额外剩余 2 个奖项。</p><h4 id="比较" tabindex="-1">比较 <a class="header-anchor" href="#比较" aria-label="Permalink to “比较”">​</a></h4><p>下面让我们看一下比较的操作。从第一印象来看，语句看似有些怪异；这里并不是<strong>设置</strong>数值，而是进行数字比较。在本例中 <code>expr</code> 判断表达式是否为真：如果结果是 1，那么表达式为真；反之，表达式为假。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr 11 = 11</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ expr 11 = 12</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>请读作“11 是否等于 11？”及“11 是否等于 12？”，你很快就会习惯这种写法。当然，我们不会在命令行上执行上述比较，可能的比较是 <code>$age</code> 是否等于 <code>11</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ age=11</span></span>
<span class="line"><span>$ expr $age = 11</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>如果将数字放到引号中间，那么你将进行字符串比较，而不是数值比较。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr &quot;11&quot; = &quot;11&quot;</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ expr &quot;eleven&quot; = &quot;11&quot;</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>在本例中，我们判断 10 是否大于 5，以及是否大于 99。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ expr 10 \\&gt; 5</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ expr 10 \\&gt; 99</span></span>
<span class="line"><span>0</span></span></code></pre></div><p>的确，返回 1 和 0 分别代表比较的结果为真和假，我们一般预期在 Linux 上得到这个结果。在下面的例子中，按照上述逻辑使用 <code>expr</code> 并不正确，因为 <code>if</code> 的工作原理刚好相反，即 0 代表真。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>fi</span></span></code></pre></div><p>下面，我们运行这个脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./checkPrice</span></span>
<span class="line"><span>Cost to us&gt; 11.50</span></span>
<span class="line"><span>Price we&#39;re asking&gt; 6</span></span>
<span class="line"><span>We make money</span></span></code></pre></div><p>这显然与我们预期不符！我们稍微修改一下，以便使其按我们预期工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>fi</span></span></code></pre></div><h3 id="factor" tabindex="-1">factor <a class="header-anchor" href="#factor" aria-label="Permalink to “factor”">​</a></h3><p><code>factor</code> 命令的功能基本与你预期相符。你给出一个数字，该命令会给出对应数字的因子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ factor 111</span></span>
<span class="line"><span>111: 3 37</span></span>
<span class="line"><span>$ factor 134</span></span>
<span class="line"><span>134: 2 67</span></span>
<span class="line"><span>$ factor 17894</span></span>
<span class="line"><span>17894: 2 23 389</span></span>
<span class="line"><span>$ factor 1987</span></span>
<span class="line"><span>1987: 1987</span></span></code></pre></div><p>注：<code>factor</code> 命令对于最后一个数字没有返回更多因子，这是因为 1987 是一个<strong>质数</strong>。</p><h3 id="jot" tabindex="-1">jot <a class="header-anchor" href="#jot" aria-label="Permalink to “jot”">​</a></h3><p><code>jot</code> 命令可以创建一系列数字。给定数字总数及起始数字即可。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jot 8 10</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>11</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>13</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>15</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>17</span></span></code></pre></div><p>你也可以用如下方式使用 <code>jot</code>，这里我们要求递减至数字 2。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jot 8 10 2</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>2</span></span></code></pre></div><p><code>jot</code> 可以帮你构造一系列数字组成的列表，该列表可以用于其它任务。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for i in \`jot 7 17\`; do echo April $i; done</span></span>
<span class="line"><span>April 17</span></span>
<span class="line"><span>April 18</span></span>
<span class="line"><span>April 19</span></span>
<span class="line"><span>April 20</span></span>
<span class="line"><span>April 21</span></span>
<span class="line"><span>April 22</span></span>
<span class="line"><span>April 23</span></span></code></pre></div><h3 id="bc" tabindex="-1">bc <a class="header-anchor" href="#bc" aria-label="Permalink to “bc”">​</a></h3><p><code>bc</code> 基本上是命令行数学运算最佳工具之一。输入你想执行的运算，使用管道发送至该命令即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;123.4+5/6-(7.89*1.234)&quot; | bc</span></span>
<span class="line"><span>113.664</span></span></code></pre></div><p>可见 <code>bc</code> 并没有忽略精度，而且输入的字符串也相当直截了当。它还可以进行大小比较、处理布尔值、计算平方根、正弦、余弦和正切等。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;sqrt(256)&quot; | bc</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>$ echo &quot;s(90)&quot; | bc -l</span></span>
<span class="line"><span>.89399666360055789051</span></span></code></pre></div><p>事实上，<code>bc</code> 甚至可以计算 pi。你需要指定需要的精度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;scale=5; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.14156</span></span>
<span class="line"><span>$ echo &quot;scale=10; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.1415926532</span></span>
<span class="line"><span>$ echo &quot;scale=20; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.14159265358979323844</span></span>
<span class="line"><span>$ echo &quot;scale=40; 4*a(1)&quot; | bc -l</span></span>
<span class="line"><span>3.1415926535897932384626433832795028841968</span></span></code></pre></div><p>除了通过管道接收数据并返回结果，<code>bc</code>还可以交互式运行，输入你想执行的运算即可。本例中提到的 <code>scale</code> 设置可以指定有效数字的个数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bc</span></span>
<span class="line"><span>bc 1.06.95</span></span>
<span class="line"><span>Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.</span></span>
<span class="line"><span>This is free software with ABSOLUTELY NO WARRANTY.</span></span>
<span class="line"><span>For details type \`warranty&#39;.</span></span>
<span class="line"><span>scale=2</span></span>
<span class="line"><span>3/4</span></span>
<span class="line"><span>.75</span></span>
<span class="line"><span>2/3</span></span>
<span class="line"><span>.66</span></span>
<span class="line"><span>quit</span></span></code></pre></div><p>你还可以使用 <code>bc</code> 完成数字进制转换。<code>obase</code> 用于设置输出的数字进制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bc</span></span>
<span class="line"><span>bc 1.06.95</span></span>
<span class="line"><span>Copyright 1991-1994, 1997, 1998, 2000, 2004, 2006 Free Software Foundation, Inc.</span></span>
<span class="line"><span>This is free software with ABSOLUTELY NO WARRANTY.</span></span>
<span class="line"><span>For details type \`warranty&#39;.</span></span>
<span class="line"><span>obase=16</span></span>
<span class="line"><span>16      &lt;=== entered</span></span>
<span class="line"><span>10      &lt;=== response</span></span>
<span class="line"><span>256     &lt;=== entered</span></span>
<span class="line"><span>100     &lt;=== response</span></span>
<span class="line"><span>quit</span></span></code></pre></div><p>按如下方式使用 <code>bc</code> 也是完成十六进制与十进制转换的最简单方式之一：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;ibase=16; F2&quot; | bc</span></span>
<span class="line"><span>242</span></span>
<span class="line"><span>$ echo &quot;obase=16; 242&quot; | bc</span></span>
<span class="line"><span>F2</span></span></code></pre></div><p>在上面第一个例子中，我们将输入进制（<code>ibase</code>）设置为十六进制（<code>hex</code>），完成十六进制到为十进制的转换。在第二个例子中，我们执行相反的操作，即将输出进制（<code>obase</code>）设置为十六进制。</p><h3 id="简单的-bash-数学运算" tabindex="-1">简单的 bash 数学运算 <a class="header-anchor" href="#简单的-bash-数学运算" aria-label="Permalink to “简单的 bash 数学运算”">​</a></h3><p>通过使用双括号，我们可以在 bash 中完成简单的数学运算。在下面的例子中，我们创建一个变量，为变量赋值，然后依次执行加法、自减和平方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ((e=11))</span></span>
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
<span class="line"><span>289</span></span></code></pre></div><p>允许使用的运算符包括：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+ -     加法及减法</span></span>
<span class="line"><span>++ --   自增与自减</span></span>
<span class="line"><span>* / %   乘法、除法及求余数</span></span>
<span class="line"><span>^       指数运算</span></span></code></pre></div><p>你还可以使用逻辑运算符和布尔运算符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ((x=11)); ((y=7))</span></span>
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
<span class="line"><span>letters roll downhill</span></span></code></pre></div><p>下面计算 2 的 3 次幂：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo &quot;2 ^ 3&quot;</span></span>
<span class="line"><span>2 ^ 3</span></span>
<span class="line"><span>$ echo &quot;2 ^ 3&quot; | bc</span></span>
<span class="line"><span>8</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在 Linux 系统中，有很多不同的命令行工具可以完成数字运算。希望你在读完本文之后，能掌握一两个新工具。</p><hr>`,68)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://www.networkworld.com/article/3268964/linux/how-to-do-math-on-the-linux-command-line.html"},{default:e(()=>[...s[0]||(s[0]=[a("https://www.networkworld.com/article/3268964/linux/how-to-do-math-on-the-linux-command-line.html",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[2]||(s[2]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),p(n,{href:"https://github.com/pinewall"},{default:e(()=>[...s[4]||(s[4]=[a("pinewall",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const $=l(d,[["render",r]]);export{m as __pageData,$ as default};
