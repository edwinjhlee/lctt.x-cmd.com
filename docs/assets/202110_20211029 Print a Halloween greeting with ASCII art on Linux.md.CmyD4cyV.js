import{_ as i,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"在 Linux 上用 ASCII 艺术打印万圣节问候语 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上用 ASCII 艺术打印万圣节问候语 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上用 ASCII 艺术打印万圣节问候语 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上用 ASCII 艺术打印万圣节问候语 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20211029 Print a Halloween greeting with ASCII art on Linux","title":"在 Linux 上用 ASCII 艺术打印万圣节问候语","tag":"202110","desc":""},"relativePath":"202110/20211029 Print a Halloween greeting with ASCII art on Linux.md","filePath":"[post].md"}'),c={name:"202110/20211029 Print a Halloween greeting with ASCII art on Linux.md"};function u(x,s,I,g,A,f){const p=o("Link");return d(),r("div",null,[s[36]||(s[36]=a("h1",{id:"在-linux-上用-ascii-艺术打印万圣节问候语",tabindex:"-1"},[n("在 Linux 上用 ASCII 艺术打印万圣节问候语 "),a("a",{class:"header-anchor",href:"#在-linux-上用-ascii-艺术打印万圣节问候语","aria-label":"Permalink to “在 Linux 上用 ASCII 艺术打印万圣节问候语”"},"​")],-1)),s[37]||(s[37]=a("blockquote",null,[a("p",null,"使用 Linux 或 FreeDOS 从一个 C 程序中生成彩色的 ASCII 艺术。")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/freedos-halloween-4x3.jpg?itok=6e_42rs9",alt:"FreeDOS 上的庆祝万圣节 ASCII 艺术",title:"Happy Halloween ASCII art on FreeDOS"})],-1)),s[39]||(s[39]=a("p",null,"利用扩展 ASCII 字符集和它的绘画元素集合的全彩 ASCII 艺术在 DOS 上曾经相当流行。你可以在你的下一个 FreeDOS 程序中加入 ASCII 艺术，作为一个很酷的“欢迎”屏幕，或者作为一个提供了更多程序信息的彩色“退出”屏幕，来增加一点视觉上的乐趣。",-1)),a("p",null,[s[2]||(s[2]=n("但是，这种 ASCII 艺术的风格并不仅仅局限于 FreeDOS 程序。你可以在 Linux 终端模式的程序中使用同样的方法。虽然 Linux 使用 ",-1)),e(p,{href:"https://opensource.com/article/21/8/ncurses-linux"},{default:l(()=>[...s[0]||(s[0]=[n("ncurses",-1)])]),_:1}),s[3]||(s[3]=n(" 来控制屏幕，而不是 DOS 的 ",-1)),e(p,{href:"https://opensource.com/article/21/9/programming-dos-conio"},{default:l(()=>[...s[1]||(s[1]=[n("conio",-1)])]),_:1}),s[4]||(s[4]=n("，但相关的概念也适用于 Linux 程序。本文探讨了如何从 C 语言程序中生成彩色 ASCII 艺术。",-1))]),s[40]||(s[40]=a("h3",{id:"ascii-艺术文件",tabindex:"-1"},[n("ASCII 艺术文件 "),a("a",{class:"header-anchor",href:"#ascii-艺术文件","aria-label":"Permalink to “ASCII 艺术文件”"},"​")],-1)),a("p",null,[s[7]||(s[7]=n("你可以使用各种工具来绘制你的 ASCII 艺术。在这个例子中，我使用了一个叫做 TheDraw 的老式 DOS 应用程序，但是你可以在 Linux 上找到现代的开源 ASCII 艺术程序，比如 ",-1)),e(p,{href:"https://blocktronics.github.io/moebius/"},{default:l(()=>[...s[5]||(s[5]=[n("Moebius",-1)])]),_:1}),s[8]||(s[8]=n("（Apache 许可证）或者 ",-1)),e(p,{href:"https://github.com/blocktronics/pablodraw"},{default:l(()=>[...s[6]||(s[6]=[n("PabloDraw",-1)])]),_:1}),s[9]||(s[9]=n("（MIT 许可证）。只要你知道保存的数据是什么样子的，你使用什么工具并不重要。",-1))]),s[41]||(s[41]=t(`<p>下面是一个 ASCII 艺术文件样本的一部分，以 C 源代码保存。请注意，这个代码片段定义了几个值。<code>IMAGEDATA_WIDTH</code> 和 <code>IMAGEDATA_DEPTH</code> 定义了屏幕上的列数和行数。在这里，它是一个 80x25 的 ASCII 艺术“图像”。<code>IMAGEDATA_LENGTH</code> 定义了 <code>IMAGEDATA</code> 数组中的条目数量。ASCII 艺术画面中的每个字符可以用两个字节的数据表示。要显示的字符和包含该字符的前景和背景颜色的颜色属性。对于一个 80x25 的屏幕，每个字符都与一个属性配对，该数组包含 4000 个条目（即 <code>80*25*2=4000</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define IMAGEDATA_WIDTH 80</span></span>
<span class="line"><span>#define IMAGEDATA_DEPTH 25</span></span>
<span class="line"><span>#define IMAGEDATA_LENGTH 4000</span></span>
<span class="line"><span>unsigned char IMAGEDATA [] = {</span></span>
<span class="line"><span>    &#39;.&#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39;.&#39;, 0x0F,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39;.&#39;, 0x0F,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span></code></pre></div><p>数组的其它部分依此类推。</p><p>为了在屏幕上显示这种 ASCII 艺术，你需要写一个小小的程序来读取数组并以正确的颜色打印每个字符。</p><h3 id="设置一个颜色属性" tabindex="-1">设置一个颜色属性 <a class="header-anchor" href="#设置一个颜色属性" aria-label="Permalink to “设置一个颜色属性”">​</a></h3><p>这个 ASCII 艺术文件中的颜色属性在一个字节中定义了背景和前景的颜色，用十六进制的值表示，如 <code>0x08</code> 或 <code>0x6E</code>。十六进制是适合表达这样的颜色“对”的紧凑方式。</p>`,6)),a("p",null,[s[11]||(s[11]=n("像 Linux 上的 ncurses 或 DOS 上的 conio 这样的字符模式系统 ",-1)),e(p,{href:"https://opensource.com/article/21/6/freedos-sixteen-colors"},{default:l(()=>[...s[10]||(s[10]=[n("只能显示 16 种颜色",-1)])]),_:1}),s[12]||(s[12]=n("。这就是十六种可能的文本颜色和八种背景颜色。用二进制计算十六个值（从 0 到 15）只需要四个二进制位。",-1))]),s[42]||(s[42]=t("<blockquote><p><code>1111</code> 是二进制的 15</p></blockquote><p>而且方便的是，十六进制可以用一个字符表示 0 到 15：<code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>、<code>4</code>、<code>5</code>、<code>6</code>、<code>7</code>、<code>8</code>、<code>9</code>、<code>A</code>、<code>B</code>、<code>C</code>、<code>D</code>、<code>E</code> 和 <code>F</code>。所以十六进制的值 <code>F</code> 是数字 15，或二进制的 <code>1111</code>。</p><p>通过颜色对，你可以用一个八位的字节来编码背景和前景的颜色。这就是文本颜色的四个二进制位（十六进制中的 0 到 15 或 0 到 F）和背景颜色的三个二进制位（十六进制中的 0 到 7 或 0 到 E）。字节中剩余的二进制位在这里没有使用，所以我们可以忽略它。</p>",3)),a("p",null,[s[14]||(s[14]=n("为了将颜色对或属性转换成你的程序可以使用的颜色值，你需要 ",-1)),e(p,{href:"https://opensource.com/article/21/8/binary-bit-fields-masks"},{default:l(()=>[...s[13]||(s[13]=[n("使用位掩码",-1)])]),_:1}),s[15]||(s[15]=n("，只指定用于文字颜色或背景颜色的位。使用 FreeDOS 上的 OpenWatcom C 编译器，你可以编写这个函数，从颜色属性中适当地设置颜色。",-1))]),s[43]||(s[43]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void</span></span>
<span class="line"><span>textattr(int newattr)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  _settextcolor(newattr &amp; 15);         /* 0000xxxx */</span></span>
<span class="line"><span>  _setbkcolor((newattr &gt;&gt; 4) &amp; 7);     /* 0xxx0000 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>_settextcolor</code> 函数只设置文本颜色，<code>_setbkcolor</code> 函数设置背景颜色。两者都定义在 <code>graph.h</code> 中。注意，由于颜色属性在一个字节值中包括了背景色和前景色，<code>textattr</code> 函数使用 <code>&amp;</code>（二进制的“与”运算）来设置一个位掩码，只隔离了属性中的最后四个位。这就是颜色对存储前景颜色的值 0 到 15 的地方。</p><p>为了得到背景色，该函数首先执行了一个位移，将位“推”到右边。这就把“上”位放到了“下”位范围，所以任何像 <code>0xxx0000</code> 这样的位都变成了 <code>00000xxx</code>。我们可以用另一个的位掩码 7（二进制 <code>0111</code>）来挑选出背景颜色值。</p><h3 id="显示-ascii-艺术" tabindex="-1">显示 ASCII 艺术 <a class="header-anchor" href="#显示-ascii-艺术" aria-label="Permalink to “显示 ASCII 艺术”">​</a></h3><p><code>IMAGEDATA</code> 数组包含整个 ASCII 艺术屏幕和每个字符的颜色值。为了在屏幕上显示 ASCII 艺术，你的程序需要扫描该数组，设置颜色属性，然后一次在屏幕上显示一个字符。</p><p>让我们在屏幕的底部留出空间，以便向用户提供单独的信息或提示。也就是说，我不想显示一个 80 列 ASCII 屏幕的所有 25 行，而只想显示前 24 行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  /* print one line less than the 80x25 that&#39;s in there:</span></span>
<span class="line"><span>     80 x 24 x 2 = 3840 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (pos = 0; pos &lt; 3840; pos += 2) {</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>在 <code>for</code> 循环里面，我们需要设置颜色，然后打印字符。OpenWatcom C 编译器提供了一个函数 <code>_outtext</code> 来显示带有当前颜色值的文本。然而，这需要传递一个字符串，如果我们需要一个一个地处理每个字符，在一行中的每个字符需要不同颜色的情况下，效率就会很低。</p><p>相反，OpenWatcom 有一个类似的函数，叫做 <code>_outmem</code>，允许你指示要显示多少个字符。对于一次一个字符，我们可以在 <code>IMAGEDATA</code> 数组中提供一个字符值的指针，并告诉 <code>_outtext</code> 只显示一个字符。这将使用当前的颜色属性显示该字符，这就是我们需要的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  for (pos = 0; pos &lt; 3840; pos += 2) {</span></span>
<span class="line"><span>    ch = &amp;IMAGEDATA[pos];              /* pointer assignment */</span></span>
<span class="line"><span>    attr = IMAGEDATA[pos + 1];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    textattr(attr);</span></span>
<span class="line"><span>    _outmem(ch, 1);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>这个更新的 <code>for</code> 循环通过向 <code>IMAGEDATA</code> 数组分配一个指针来设置字符 <code>ch</code>。接下来, 循环设置文本属性, 然后用 <code>_outmem</code> 显示字符.</p><h3 id="整合起来" tabindex="-1">整合起来 <a class="header-anchor" href="#整合起来" aria-label="Permalink to “整合起来”">​</a></h3><p>有了 <code>textattr</code> 函数和处理数组的 <code>for</code> 循环, 我们可以编写一个完整的程序来显示 ASCII 艺术文件的内容。对于这个例子，将 ASCII 艺术文件保存为 <code>imgdata.inc</code>，并用 <code>#include</code> 语句将其包含在源文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;conio.h&gt;</span></span>
<span class="line"><span>#include &lt;graph.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;imgdata.inc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void</span></span>
<span class="line"><span>textattr(int newattr)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  _settextcolor(newattr &amp; 15);         /* 0000xxxx */</span></span>
<span class="line"><span>  _setbkcolor((newattr &gt;&gt; 4) &amp; 7);     /* 0xxx0000 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char *ch;</span></span>
<span class="line"><span>  int attr;</span></span>
<span class="line"><span>  int pos;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (_setvideomode(_TEXTC80) == 0) {</span></span>
<span class="line"><span>    fputs(&quot;Error setting video mode&quot;, stderr);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* draw the array */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  _settextposition(1, 1);              /* top left */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* print one line less than the 80x25 that&#39;s in there:</span></span>
<span class="line"><span>     80 x 24 x 2 = 3840 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (pos = 0; pos &lt; 3840; pos += 2) {</span></span>
<span class="line"><span>    ch = &amp;IMAGEDATA[pos];              /* pointer assignment */</span></span>
<span class="line"><span>    attr = IMAGEDATA[pos + 1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    textattr(attr);</span></span>
<span class="line"><span>    _outmem(ch, 1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  _settextposition(25, 1);             /* bottom left */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  textattr(0x0f);</span></span>
<span class="line"><span>  _outtext(&quot;Press any key to quit&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  textattr(0x00);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 FreeDOS 上使用 OpenWatcom C 编译器编译该程序，你会得到一个显示这个节日信息的新程序。</p><p><img src="https://opensource.com/sites/default/files/freedos-halloween-4x3.png" alt="ASCII艺术中的万圣节信息"></p>`,16)),a("p",null,[a("em",null,[s[17]||(s[17]=n("万圣节快乐（Jim Hall, ",-1)),e(p,{href:"https://creativecommons.org/licenses/by-sa/4.0/"},{default:l(()=>[...s[16]||(s[16]=[n("CC-BY-SA 4.0",-1)])]),_:1}),s[18]||(s[18]=n(")",-1))])]),s[44]||(s[44]=a("p",null,"万圣节快乐，各位！",-1)),a("ul",null,[a("li",null,[e(p,{href:"https://opensource.com/sites/default/files/uploads/imgdata.inc_.txt"},{default:l(()=>[...s[19]||(s[19]=[n("在此下载 inc 代码文件",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://opensource.com/sites/default/files/uploads/hallown.c.txt"},{default:l(()=>[...s[20]||(s[20]=[n("在此下载 C 代码文件",-1)])]),_:1})])]),s[45]||(s[45]=a("hr",null,null,-1)),a("p",null,[s[22]||(s[22]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/10/ascii-linux-halloween"},{default:l(()=>[...s[21]||(s[21]=[n("https://opensource.com/article/21/10/ascii-linux-halloween",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[23]||(s[23]=[n("Jim Hall",-1)])]),_:1}),s[28]||(s[28]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[24]||(s[24]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1}),s[30]||(s[30]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[32]||(s[32]=[n("Linux中国",-1)])]),_:1}),s[35]||(s[35]=n(" 荣誉推出",-1))])])}const b=i(c,[["render",u]]);export{h as __pageData,b as default};
