import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Djinn：一个受 Jinja2 启发的代码生成器和模板语言 | LCTT x X-CMD","titleTemplate":false,"description":"Djinn：一个受 Jinja2 启发的代码生成器和模板语言 | LCTT (202207) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Djinn：一个受 Jinja2 启发的代码生成器和模板语言 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Djinn：一个受 Jinja2 启发的代码生成器和模板语言 | LCTT (202207) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202207/20210101 Djinn- A Code Generator and Templating Language Inspired by Jinja2","title":"Djinn：一个受 Jinja2 启发的代码生成器和模板语言","tag":"202207","desc":""},"relativePath":"202207/20210101 Djinn- A Code Generator and Templating Language Inspired by Jinja2.md","filePath":"[post].md"}'),g={name:"202207/20210101 Djinn- A Code Generator and Templating Language Inspired by Jinja2.md"};function u(b,s,k,m,h,f){const p=o("Link");return r(),d("div",null,[s[66]||(s[66]=a("h1",{id:"djinn-一个受-jinja2-启发的代码生成器和模板语言",tabindex:"-1"},[n("Djinn：一个受 Jinja2 启发的代码生成器和模板语言 "),a("a",{class:"header-anchor",href:"#djinn-一个受-jinja2-启发的代码生成器和模板语言","aria-label":"Permalink to “Djinn：一个受 Jinja2 启发的代码生成器和模板语言”"},"​")],-1)),s[67]||(s[67]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202207/04/101711nq2we7z7x7wz2z7e.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("代码生成器是非常有用的工具。我有时使用 ",-1)),i(p,{href:"https://jinja2docs.readthedocs.io/en/stable/"},{default:l(()=>[...s[0]||(s[0]=[n("jinja2",-1)])]),_:1}),s[2]||(s[2]=n(" 的命令行版本来生成高度冗余的配置文件和其他文本文件，但它在转换数据方面功能有限。显然，Jinja2 的作者有不同的想法，而我想要类似于 ",-1)),s[3]||(s[3]=a("ruby",null,[n("列表推导"),a("rt",null,"list comprehensions")],-1)),s[4]||(s[4]=n(" 或 D 语言的 ",-1)),s[5]||(s[5]=a("ruby",null,[n("可组合范围"),a("rt",null,"composable range")],-1)),s[6]||(s[6]=n(" 算法之类的东西。",-1))]),a("p",null,[s[9]||(s[9]=n("我决定制作一个类似于 Jinja2 的工具，但让我可以通过使用范围算法转换数据来生成复杂的文件。这个想法非常简单：一个直接用 D 语言代码重写的模板语言。因为它 ",-1)),s[10]||(s[10]=a("em",null,"就是",-1)),s[11]||(s[11]=n(" D 语言，它可以支持 D 语言所能做的一切。我想要一个独立的代码生成器，但是由于 ",-1)),i(p,{href:"https://dlang.org/articles/mixin.html"},{default:l(()=>[...s[7]||(s[7]=[n("D 语言的 ",-1),a("code",null,"mixin",-1),n(" 特性",-1)])]),_:1}),s[12]||(s[12]=n("，同样的模板语言可以作为嵌入式模板语言工作（例如，Web 应用程序中的 HTML）。有关该技巧的更多信息，请参阅 ",-1)),i(p,{href:"https://theartofmachinery.com/2017/12/31/compile_time_brainfuck.html"},{default:l(()=>[...s[8]||(s[8]=[n("这篇关于在编译时使用 mixins 将 Brainfuck 转换为 D 和机器代码的文章",-1)])]),_:1}),s[13]||(s[13]=n("。",-1))]),a("p",null,[s[16]||(s[16]=n("像往常一样，",-1)),i(p,{href:"https://gitlab.com/sarneaud/djinn"},{default:l(()=>[...s[14]||(s[14]=[n("源码在 GitLab 上",-1)])]),_:1}),s[17]||(s[17]=n("。",-1)),i(p,{href:"https://gitlab.com/sarneaud/djinn/-/tree/v0.1.0/examples"},{default:l(()=>[...s[15]||(s[15]=[n("这篇文章中的例子也可以在这里找到",-1)])]),_:1}),s[18]||(s[18]=n("。",-1))]),s[68]||(s[68]=e(`<h3 id="hello-world-示例" tabindex="-1">Hello world 示例 <a class="header-anchor" href="#hello-world-示例" aria-label="Permalink to “Hello world 示例”">​</a></h3><p>这是一个演示这个想法的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello [= retro(&quot;dlrow&quot;) ]!</span></span>
<span class="line"><span>[: enum one = 1; :]</span></span>
<span class="line"><span>1 + 1 = [= one + one ]</span></span></code></pre></div><p><code>[= some_expression ]</code> 类似于 Jinja2 中的 <code>{{ some_expression }}</code>，它在输出中呈现一个值。<code>[: some_statement; :]</code> 类似于 <code>{% some_statement %}</code> ，用于执行完整的代码语句。我更改了语法，因为 D 也大量使用花括号，并且将两者混合使模板难以阅读（还有一些特殊的非 D 指令，比如 <code>include</code>，它们被包裹在 <code>[&lt;</code> 和 <code>&gt;]</code> 中）。</p><p>如果你将上面的内容保存到一个名为 <code>hello.txt.dj</code> 的文件中并运行 <code>djinn</code> 命令行工具，你会得到一个名为 <code>hello.txt</code> 的文件，其中包含你可能猜到的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello world!</span></span>
<span class="line"><span>1 + 1 = 2</span></span></code></pre></div><p>如果你使用过 Jinja2，你可能想知道第二行发生了什么。Djinn 有一个简化格式化和空格处理的特殊规则：如果源代码行包含 <code>[:</code> 语句或 <code>[&lt;</code> 指令但不包含任何非空格输出，则整行都会被忽略输出。空行则仍会原样呈现。</p><h3 id="生成数据" tabindex="-1">生成数据 <a class="header-anchor" href="#生成数据" aria-label="Permalink to “生成数据”">​</a></h3><p>好的，现在来讲一些更实用的东西：生成 CSV 数据。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>x,f(x)</span></span>
<span class="line"><span>[: import std.mathspecial;</span></span>
<span class="line"><span>foreach (x; iota(-1.0, 1.0, 0.1)) :]</span></span>
<span class="line"><span>[= &quot;%0.1f,%g&quot;, x, normalDistribution(x) ]</span></span></code></pre></div>`,10)),a("p",null,[s[20]||(s[20]=n("一个 ",-1)),s[21]||(s[21]=a("code",null,"[=",-1)),s[22]||(s[22]=n(" 和 ",-1)),s[23]||(s[23]=a("code",null,"]",-1)),s[24]||(s[24]=n(" 对可以包含多个用逗号分隔的表达式。如果第一个表达式是一个由双引号包裹的字符串，则会被解释为 ",-1)),i(p,{href:"https://dlang.org/phobos/std_format.html#format-string"},{default:l(()=>[...s[19]||(s[19]=[n("格式化字符串",-1)])]),_:1}),s[25]||(s[25]=n("。下面是输出结果：",-1))]),s[69]||(s[69]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>x,f(x)</span></span>
<span class="line"><span>-1.0,0.158655</span></span>
<span class="line"><span>-0.9,0.18406</span></span>
<span class="line"><span>-0.8,0.211855</span></span>
<span class="line"><span>-0.7,0.241964</span></span>
<span class="line"><span>-0.6,0.274253</span></span>
<span class="line"><span>-0.5,0.308538</span></span>
<span class="line"><span>-0.4,0.344578</span></span>
<span class="line"><span>-0.3,0.382089</span></span>
<span class="line"><span>-0.2,0.42074</span></span>
<span class="line"><span>-0.1,0.460172</span></span>
<span class="line"><span>0.0,0.5</span></span>
<span class="line"><span>0.1,0.539828</span></span>
<span class="line"><span>0.2,0.57926</span></span>
<span class="line"><span>0.3,0.617911</span></span>
<span class="line"><span>0.4,0.655422</span></span>
<span class="line"><span>0.5,0.691462</span></span>
<span class="line"><span>0.6,0.725747</span></span>
<span class="line"><span>0.7,0.758036</span></span>
<span class="line"><span>0.8,0.788145</span></span>
<span class="line"><span>0.9,0.81594</span></span></code></pre></div><h3 id="制作图片" tabindex="-1">制作图片 <a class="header-anchor" href="#制作图片" aria-label="Permalink to “制作图片”">​</a></h3>`,2)),a("p",null,[s[27]||(s[27]=n("这个例子展示了一个图片的生成过程。",-1)),i(p,{href:"http://netpbm.sourceforge.net/doc/#formats"},{default:l(()=>[...s[26]||(s[26]=[n("经典的 Netpbm 图像库定义了一堆图像格式",-1)])]),_:1}),s[28]||(s[28]=n("，其中一些是基于文本的。例如，这是一个 3 x 3 向量的图像：",-1))]),s[70]||(s[70]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>P2 # PGM 格式标识</span></span>
<span class="line"><span>3 3 # 宽和高</span></span>
<span class="line"><span>7 # 代表纯白色的值（0 代表黑色）</span></span>
<span class="line"><span>7 0 7</span></span>
<span class="line"><span>0 0 0</span></span>
<span class="line"><span>7 0 7</span></span></code></pre></div>`,1)),a("p",null,[s[30]||(s[30]=n("你可以将上述文本保存到名为 ",-1)),s[31]||(s[31]=a("code",null,"cross.pgm",-1)),s[32]||(s[32]=n(" 之类的文件中，很多图像工具都知道如何解析它。下面是一些 Djinn 代码，它以相同的格式生成 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Mandelbrot_set"},{default:l(()=>[...s[29]||(s[29]=[n("Mandelbrot 集",-1)])]),_:1}),s[33]||(s[33]=n(" 分形：",-1))]),s[71]||(s[71]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[:</span></span>
<span class="line"><span>import std.complex;</span></span>
<span class="line"><span>enum W = 640;</span></span>
<span class="line"><span>enum H = 480;</span></span>
<span class="line"><span>enum kMaxIter = 20;</span></span>
<span class="line"><span>ubyte mb(uint x, uint y)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const c = complex(3.0 * (x - W / 1.5) / W, 2.0 * (y - H / 2.0) / H);</span></span>
<span class="line"><span>    auto z = complex(0.0);</span></span>
<span class="line"><span>    ubyte ret = kMaxIter;</span></span>
<span class="line"><span>    while (abs(z) &lt;= 2 &amp;&amp; --ret) z = z * z + c;</span></span>
<span class="line"><span>    return ret;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>:]</span></span>
<span class="line"><span>P2</span></span>
<span class="line"><span>[= W ] [= H ]</span></span>
<span class="line"><span>[= kMaxIter ]</span></span>
<span class="line"><span>[: foreach (y; 0..H) :]</span></span>
<span class="line"><span>[= &quot;%(%s %)&quot;, iota(W).map!(x =&gt; mb(x, y)) ]</span></span></code></pre></div><p>生成的文件大约为 800 kB，但它可以很好地被压缩为 PNG：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ # 使用 GraphicsMagick 进行转换</span></span>
<span class="line"><span>$ gm convert mandelbrot.pgm mandelbrot.png</span></span></code></pre></div><p>结果如下：</p><p><img src="https://theartofmachinery.com/images/djinn/mandelbrot.png" alt=""></p><h3 id="解决谜题" tabindex="-1">解决谜题 <a class="header-anchor" href="#解决谜题" aria-label="Permalink to “解决谜题”">​</a></h3><p>这里有一个谜题：</p><p><img src="https://theartofmachinery.com/images/djinn/inequality.svg" alt=""></p><p>一个 5 行 5 列的网格需要用 1 到 5 的数字填充，每个数字在每一行中限使用一次，在每列中限使用一次（即，制作一个 5 行 5 列的<ruby>拉丁方格<rt>Latin square</rt></ruby>）。相邻单元格中的数字还必须满足所有 <code>&gt;</code> 大于号表示的不等式。</p>`,9)),a("p",null,[i(p,{href:"https://theartofmachinery.com/2020/05/21/glico_weighted_rock_paper_scissors.html"},{default:l(()=>[...s[34]||(s[34]=[n("几个月前我使用了 ",-1),a("ruby",null,[n("线性规划"),a("rt",null,"linear programming")],-1),n("（LP）",-1)])]),_:1}),s[35]||(s[35]=n("。线性规划问题是具有线性约束的连续变量系统。这次我将使用",-1)),s[36]||(s[36]=a("ruby",null,[n("混合整数线性规划"),a("rt",null,"mixed integer linear programming")],-1)),s[37]||(s[37]=n("（MILP），它通过允许整数约束变量来归纳 LP。事实证明，这足以成为 NP 完备的，而 MILP 恰好可以很好地模拟这个谜题。",-1))]),a("p",null,[s[39]||(s[39]=n("在上一篇文章中，我使用 Julia 库 JuMP 来帮助解决这个问题。这次我将使用 ",-1)),i(p,{href:"http://lpsolve.sourceforge.net/5.0/CPLEX-format.htm"},{default:l(()=>[...s[38]||(s[38]=[n("CPLEX：基于文本的格式",-1)])]),_:1}),s[40]||(s[40]=n("，它受到多个 LP 和 MILP 求解器的支持（如果需要，可以通过现成的工具轻松转换为其他格式）。这是上一篇文章中 CPLEX 格式的 LP：",-1))]),s[72]||(s[72]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Minimize</span></span>
<span class="line"><span>  obj: v</span></span>
<span class="line"><span>Subject To</span></span>
<span class="line"><span>  ptotal: pr + pp + ps = 1</span></span>
<span class="line"><span>  rock: 4 ps - 5 pp - v &lt;= 0</span></span>
<span class="line"><span>  paper: 5 pr - 8 ps - v &lt;= 0</span></span>
<span class="line"><span>  scissors: 8 pp - 4 pr - v &lt;= 0</span></span>
<span class="line"><span>Bounds</span></span>
<span class="line"><span>  0 &lt;= pr &lt;= 1</span></span>
<span class="line"><span>  0 &lt;= pp &lt;= 1</span></span>
<span class="line"><span>  0 &lt;= ps &lt;= 1</span></span>
<span class="line"><span>End</span></span></code></pre></div>`,1)),a("p",null,[s[42]||(s[42]=n("CPLEX 格式易于阅读，但复杂度高的问题需要大量变量和约束来建模，这使得手工编码既痛苦又容易出错。有一些特定领域的语言，例如 ",-1)),i(p,{href:"https://zimpl.zib.de/"},{default:l(()=>[...s[41]||(s[41]=[n("ZIMPL",-1)])]),_:1}),s[43]||(s[43]=n("，用于以高级方式描述 MILP 和 LP。对于许多问题来说，它们非常酷，但最终它们不如具有良好库（如 JuMP）支持的通用语言或使用 D 语言的代码生成器那样富有表现力。",-1))]),s[73]||(s[73]=e(`<p>我将使用两组变量来模拟这个谜题：<code>v_{r,c}</code> 和 <code>i_{r,c,v}</code>。<code>v_{r,c}</code> 将保存 r 行 c 列单元格的值（从 1 到 5）。<code>i_{r,c,v}</code> 是一个二进制指示器，如果 r 行 c 列的单元格的值是 v，则该指示器值为 1，否则为 0。这两组变量是网格的冗余表示，但第一种表示更容易对不等式约束进行建模，而第二种表示更容易对唯一性约束进行建模。我只需要添加一些额外的约束来强制这两个表示是一致的。但首先，让我们从每个单元格必须只有一个值的基本约束开始。从数学上讲，这意味着给定行和列的所有指示器都必须为 0，但只有一个值为 1 的例外。这可以通过以下等式强制约束：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[i_{r,c,1} + i_{r,c,2} + i_{r,c,3} + i_{r,c,4} + i_{r,c,5} = 1]</span></span></code></pre></div><p>可以使用以下 Djinn 代码生成对所有行和列的 CPLEX 约束：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\ 单元格只有一个值</span></span>
<span class="line"><span>[:</span></span>
<span class="line"><span>foreach (r; iota(N))</span></span>
<span class="line"><span>foreach (c; iota(N))</span></span>
<span class="line"><span>:]</span></span>
<span class="line"><span>    [= &quot;%-(%s + %)&quot;, vs.map!(v =&gt; ivar(r, c, v)) ] = 1</span></span>
<span class="line"><span>[::]</span></span></code></pre></div><p><code>ivar()</code> 是一个辅助函数，它为我们提供变量名为 <code>i</code> 的字符串标识符，而 <code>vs</code> 存储从 1 到 5 的数字以方便使用。行和列内唯一性的约束完全相同，但在 <code>i</code> 的其他两个维度上迭代。</p><p>为了使变量组 <code>i</code> 与变量组 <code>v</code> 保持一致，我们需要如下约束（请记住，变量组 <code>i</code> 中只有一个元素的值是非零的）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[i_{r,c,1} + 2i_{r,c,2} + 3i_{r,c,3} + 4i_{r,c,4} + 5i_{r,c,5} = v_{r,c}]</span></span></code></pre></div><p>CPLEX 要求所有变量都位于左侧，因此 Djinn 代码如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\ 连接变量组 i 和变量组 v</span></span>
<span class="line"><span>[:</span></span>
<span class="line"><span>foreach (r; iota(N))</span></span>
<span class="line"><span>foreach (c; iota(N))</span></span>
<span class="line"><span>:]</span></span>
<span class="line"><span>    [= &quot;%-(%s + %)&quot;, vs.map!(v =&gt; text(v, &#39; &#39;, ivar(r, c, v))) ] - [= vvar(r,c) ] = 0</span></span>
<span class="line"><span>[::]</span></span></code></pre></div>`,9)),a("p",null,[s[45]||(s[45]=n("不等符号相邻的和左下角值为为 4 单元格的约束写起来都很简单。剩下的便是将指示器变量声明为二进制，并为变量组 ",-1)),s[46]||(s[46]=a("code",null,"v",-1)),s[47]||(s[47]=n(" 设置边界。加上变量的边界，总共有 150 个变量和 111 个约束 ",-1)),i(p,{href:"https://gitlab.com/sarneaud/djinn/-/tree/v0.1.0/examples/inequality.lp.dj"},{default:l(()=>[...s[44]||(s[44]=[n("你可以在仓库中看到完整的代码",-1)])]),_:1}),s[48]||(s[48]=n("。",-1))]),a("p",null,[i(p,{href:"https://www.gnu.org/software/glpk/"},{default:l(()=>[...s[49]||(s[49]=[n("GNU 线性规划工具集",-1)])]),_:1}),s[50]||(s[50]=n(" 有一个命令行工具可以解决这个 CPLEX MILP。不幸的是，它的输出是一个包含了所有内容的体积很大的转储，所以我使用 awk 命令来提取需要的内容：",-1))]),s[74]||(s[74]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time glpsol --lp inequality.lp -o /dev/stdout | awk &#39;/v[0-9][0-9]/ { print $2, $4 }&#39; | sort</span></span>
<span class="line"><span>v00 1</span></span>
<span class="line"><span>v01 3</span></span>
<span class="line"><span>v02 2</span></span>
<span class="line"><span>v03 5</span></span>
<span class="line"><span>v04 4</span></span>
<span class="line"><span>v10 2</span></span>
<span class="line"><span>v11 5</span></span>
<span class="line"><span>v12 4</span></span>
<span class="line"><span>v13 1</span></span>
<span class="line"><span>v14 3</span></span>
<span class="line"><span>v20 3</span></span>
<span class="line"><span>v21 1</span></span>
<span class="line"><span>v22 5</span></span>
<span class="line"><span>v23 4</span></span>
<span class="line"><span>v24 2</span></span>
<span class="line"><span>v30 5</span></span>
<span class="line"><span>v31 4</span></span>
<span class="line"><span>v32 3</span></span>
<span class="line"><span>v33 2</span></span>
<span class="line"><span>v34 1</span></span>
<span class="line"><span>v40 4</span></span>
<span class="line"><span>v41 2</span></span>
<span class="line"><span>v42 1</span></span>
<span class="line"><span>v43 3</span></span>
<span class="line"><span>v44 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.114s</span></span>
<span class="line"><span>user    0m0.106s</span></span>
<span class="line"><span>sys     0m0.005s</span></span></code></pre></div><p>这是在原始网格中写出的解决方案：</p><p><img src="https://theartofmachinery.com/images/djinn/inequality_solution.svg" alt=""></p><p>这些例子只是用来玩的，但我相信你已经明白了。顺便说一下，Djinn 代码仓库的 <code>README.md</code> 文件本身是使用 Djinn 模板生成的。</p><p>正如我所说，Djinn 也可以用作嵌入在 D 语言代码中的编译期模板语言。我最初只是想要一个代码生成器，得益于 D 语言的元编程功能，这算是一个额外获得的功能。</p><hr>`,6)),a("p",null,[s[52]||(s[52]=n("via: ",-1)),i(p,{href:"https://theartofmachinery.com/2021/01/01/djinn.html"},{default:l(()=>[...s[51]||(s[51]=[n("https://theartofmachinery.com/2021/01/01/djinn.html",-1)])]),_:1})]),a("p",null,[s[57]||(s[57]=n("作者：",-1)),i(p,{href:"https://theartofmachinery.com"},{default:l(()=>[...s[53]||(s[53]=[n("Simon Arneaud",-1)])]),_:1}),s[58]||(s[58]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[54]||(s[54]=[n("lujun9972",-1)])]),_:1}),s[59]||(s[59]=n(" 译者：",-1)),i(p,{href:"https://github.com/hanszhao80"},{default:l(()=>[...s[55]||(s[55]=[n("hanszhao80",-1)])]),_:1}),s[60]||(s[60]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[56]||(s[56]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[63]||(s[63]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[61]||(s[61]=[n("LCTT",-1)])]),_:1}),s[64]||(s[64]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[62]||(s[62]=[n("Linux中国",-1)])]),_:1}),s[65]||(s[65]=n(" 荣誉推出",-1))])])}const C=t(g,[["render",u]]);export{y as __pageData,C as default};
