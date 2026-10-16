import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言 | LCTT x X-CMD","titleTemplate":false,"description":"Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言 | LCTT (202207) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言 | LCTT (202207) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202207/20210101 Djinn- A Code Generator and Templating Language Inspired by Jinja2","title":"Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言","tag":"202207","desc":""},"relativePath":"202207/20210101 Djinn- A Code Generator and Templating Language Inspired by Jinja2.md","filePath":"[post].md"}'),g={name:"202207/20210101 Djinn- A Code Generator and Templating Language Inspired by Jinja2.md"};function u(b,s,k,m,h,f){const p=o("Link");return r(),d("div",null,[s[66]||(s[66]=a("h1",{id:"djinn-一個受-jinja2-啓發的代碼生成器和模板語言",tabindex:"-1"},[n("Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言 "),a("a",{class:"header-anchor",href:"#djinn-一個受-jinja2-啓發的代碼生成器和模板語言","aria-label":"Permalink to “Djinn：一個受 Jinja2 啓發的代碼生成器和模板語言”"},"​")],-1)),s[67]||(s[67]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202207/04/101711nq2we7z7x7wz2z7e.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("代碼生成器是非常有用的工具。我有時使用 ",-1)),i(p,{href:"https://jinja2docs.readthedocs.io/en/stable/"},{default:l(()=>[...s[0]||(s[0]=[n("jinja2",-1)])]),_:1}),s[2]||(s[2]=n(" 的命令列版本來生成高度冗餘的配置文件和其他文本文件，但它在轉換數據方面功能有限。顯然，Jinja2 的作者有不同的想法，而我想要類似於 ",-1)),s[3]||(s[3]=a("ruby",null,[n("列表推導"),a("rt",null,"list comprehensions")],-1)),s[4]||(s[4]=n(" 或 D 語言的 ",-1)),s[5]||(s[5]=a("ruby",null,[n("可組合範圍"),a("rt",null,"composable range")],-1)),s[6]||(s[6]=n(" 算法之類的東西。",-1))]),a("p",null,[s[9]||(s[9]=n("我決定製作一個類似於 Jinja2 的工具，但讓我可以通過使用範圍算法轉換數據來生成複雜的文件。這個想法非常簡單：一個直接用 D 語言代碼重寫的模板語言。因為它 ",-1)),s[10]||(s[10]=a("em",null,"就是",-1)),s[11]||(s[11]=n(" D 語言，它可以支持 D 語言所能做的一切。我想要一個獨立的代碼生成器，但是由於 ",-1)),i(p,{href:"https://dlang.org/articles/mixin.html"},{default:l(()=>[...s[7]||(s[7]=[n("D 語言的 ",-1),a("code",null,"mixin",-1),n(" 特性",-1)])]),_:1}),s[12]||(s[12]=n("，同樣的模板語言可以作為嵌入式模板語言工作（例如，Web 應用程序中的 HTML）。有關該技巧的更多信息，請參閲 ",-1)),i(p,{href:"https://theartofmachinery.com/2017/12/31/compile_time_brainfuck.html"},{default:l(()=>[...s[8]||(s[8]=[n("這篇關於在編譯時使用 mixins 將 Brainfuck 轉換為 D 和機器代碼的文章",-1)])]),_:1}),s[13]||(s[13]=n("。",-1))]),a("p",null,[s[16]||(s[16]=n("像往常一樣，",-1)),i(p,{href:"https://gitlab.com/sarneaud/djinn"},{default:l(()=>[...s[14]||(s[14]=[n("源碼在 GitLab 上",-1)])]),_:1}),s[17]||(s[17]=n("。",-1)),i(p,{href:"https://gitlab.com/sarneaud/djinn/-/tree/v0.1.0/examples"},{default:l(()=>[...s[15]||(s[15]=[n("這篇文章中的例子也可以在這裏找到",-1)])]),_:1}),s[18]||(s[18]=n("。",-1))]),s[68]||(s[68]=e(`<h3 id="hello-world-示例" tabindex="-1">Hello world 示例 <a class="header-anchor" href="#hello-world-示例" aria-label="Permalink to “Hello world 示例”">​</a></h3><p>這是一個演示這個想法的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello [= retro(&quot;dlrow&quot;) ]!</span></span>
<span class="line"><span>[: enum one = 1; :]</span></span>
<span class="line"><span>1 + 1 = [= one + one ]</span></span></code></pre></div><p><code>[= some_expression ]</code> 類似於 Jinja2 中的 <code>{{ some_expression }}</code>，它在輸出中呈現一個值。<code>[: some_statement; :]</code> 類似於 <code>{% some_statement %}</code> ，用於執行完整的代碼語句。我更改了語法，因為 D 也大量使用花括號，並且將兩者混合使模板難以閲讀（還有一些特殊的非 D 指令，比如 <code>include</code>，它們被包裹在 <code>[&lt;</code> 和 <code>&gt;]</code> 中）。</p><p>如果你將上面的內容保存到一個名為 <code>hello.txt.dj</code> 的文件中並運行 <code>djinn</code> 命令列工具，你會得到一個名為 <code>hello.txt</code> 的文件，其中包含你可能猜到的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello world!</span></span>
<span class="line"><span>1 + 1 = 2</span></span></code></pre></div><p>如果你使用過 Jinja2，你可能想知道第二行發生了什麼。Djinn 有一個簡化格式化和空格處理的特殊規則：如果源代碼行包含 <code>[:</code> 語句或 <code>[&lt;</code> 指令但不包含任何非空格輸出，則整行都會被忽略輸出。空行則仍會原樣呈現。</p><h3 id="生成數據" tabindex="-1">生成數據 <a class="header-anchor" href="#生成數據" aria-label="Permalink to “生成數據”">​</a></h3><p>好的，現在來講一些更實用的東西：生成 CSV 數據。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>x,f(x)</span></span>
<span class="line"><span>[: import std.mathspecial;</span></span>
<span class="line"><span>foreach (x; iota(-1.0, 1.0, 0.1)) :]</span></span>
<span class="line"><span>[= &quot;%0.1f,%g&quot;, x, normalDistribution(x) ]</span></span></code></pre></div>`,10)),a("p",null,[s[20]||(s[20]=n("一個 ",-1)),s[21]||(s[21]=a("code",null,"[=",-1)),s[22]||(s[22]=n(" 和 ",-1)),s[23]||(s[23]=a("code",null,"]",-1)),s[24]||(s[24]=n(" 對可以包含多個用逗號分隔的表達式。如果第一個表達式是一個由雙引號包裹的字符串，則會被解釋為 ",-1)),i(p,{href:"https://dlang.org/phobos/std_format.html#format-string"},{default:l(()=>[...s[19]||(s[19]=[n("格式化字符串",-1)])]),_:1}),s[25]||(s[25]=n("。下面是輸出結果：",-1))]),s[69]||(s[69]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>x,f(x)</span></span>
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
<span class="line"><span>0.9,0.81594</span></span></code></pre></div><h3 id="製作圖片" tabindex="-1">製作圖片 <a class="header-anchor" href="#製作圖片" aria-label="Permalink to “製作圖片”">​</a></h3>`,2)),a("p",null,[s[27]||(s[27]=n("這個例子展示了一個圖片的生成過程。",-1)),i(p,{href:"http://netpbm.sourceforge.net/doc/#formats"},{default:l(()=>[...s[26]||(s[26]=[n("經典的 Netpbm 圖像庫定義了一堆圖像格式",-1)])]),_:1}),s[28]||(s[28]=n("，其中一些是基於文本的。例如，這是一個 3 x 3 向量的圖像：",-1))]),s[70]||(s[70]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>P2 # PGM 格式標識</span></span>
<span class="line"><span>3 3 # 寬和高</span></span>
<span class="line"><span>7 # 代表純白色的值（0 代表黑色）</span></span>
<span class="line"><span>7 0 7</span></span>
<span class="line"><span>0 0 0</span></span>
<span class="line"><span>7 0 7</span></span></code></pre></div>`,1)),a("p",null,[s[30]||(s[30]=n("你可以將上述文本保存到名為 ",-1)),s[31]||(s[31]=a("code",null,"cross.pgm",-1)),s[32]||(s[32]=n(" 之類的文件中，很多圖像工具都知道如何解析它。下面是一些 Djinn 代碼，它以相同的格式生成 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Mandelbrot_set"},{default:l(()=>[...s[29]||(s[29]=[n("Mandelbrot 集",-1)])]),_:1}),s[33]||(s[33]=n(" 分形：",-1))]),s[71]||(s[71]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[:</span></span>
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
<span class="line"><span>[= &quot;%(%s %)&quot;, iota(W).map!(x =&gt; mb(x, y)) ]</span></span></code></pre></div><p>生成的文件大約為 800 kB，但它可以很好地被壓縮為 PNG：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ # 使用 GraphicsMagick 進行轉換</span></span>
<span class="line"><span>$ gm convert mandelbrot.pgm mandelbrot.png</span></span></code></pre></div><p>結果如下：</p><p><img src="https://theartofmachinery.com/images/djinn/mandelbrot.png" alt=""></p><h3 id="解決謎題" tabindex="-1">解決謎題 <a class="header-anchor" href="#解決謎題" aria-label="Permalink to “解決謎題”">​</a></h3><p>這裏有一個謎題：</p><p><img src="https://theartofmachinery.com/images/djinn/inequality.svg" alt=""></p><p>一個 5 行 5 列的網格需要用 1 到 5 的數字填充，每個數字在每一行中限使用一次，在每列中限使用一次（即，製作一個 5 行 5 列的<ruby>拉丁方格<rt>Latin square</rt></ruby>）。相鄰單元格中的數字還必須滿足所有 <code>&gt;</code> 大於號表示的不等式。</p>`,9)),a("p",null,[i(p,{href:"https://theartofmachinery.com/2020/05/21/glico_weighted_rock_paper_scissors.html"},{default:l(()=>[...s[34]||(s[34]=[n("幾個月前我使用了 ",-1),a("ruby",null,[n("線性規劃"),a("rt",null,"linear programming")],-1),n("（LP）",-1)])]),_:1}),s[35]||(s[35]=n("。線性規劃問題是具有線性約束的連續變量系統。這次我將使用",-1)),s[36]||(s[36]=a("ruby",null,[n("混合整數線性規劃"),a("rt",null,"mixed integer linear programming")],-1)),s[37]||(s[37]=n("（MILP），它通過允許整數約束變量來歸納 LP。事實證明，這足以成為 NP 完備的，而 MILP 恰好可以很好地模擬這個謎題。",-1))]),a("p",null,[s[39]||(s[39]=n("在上一篇文章中，我使用 Julia 庫 JuMP 來幫助解決這個問題。這次我將使用 ",-1)),i(p,{href:"http://lpsolve.sourceforge.net/5.0/CPLEX-format.htm"},{default:l(()=>[...s[38]||(s[38]=[n("CPLEX：基於文本的格式",-1)])]),_:1}),s[40]||(s[40]=n("，它受到多個 LP 和 MILP 求解器的支持（如果需要，可以通過現成的工具輕鬆轉換為其他格式）。這是上一篇文章中 CPLEX 格式的 LP：",-1))]),s[72]||(s[72]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Minimize</span></span>
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
<span class="line"><span>End</span></span></code></pre></div>`,1)),a("p",null,[s[42]||(s[42]=n("CPLEX 格式易於閲讀，但複雜度高的問題需要大量變量和約束來建模，這使得手工編碼既痛苦又容易出錯。有一些特定領域的語言，例如 ",-1)),i(p,{href:"https://zimpl.zib.de/"},{default:l(()=>[...s[41]||(s[41]=[n("ZIMPL",-1)])]),_:1}),s[43]||(s[43]=n("，用於以高級方式描述 MILP 和 LP。對於許多問題來説，它們非常酷，但最終它們不如具有良好庫（如 JuMP）支持的通用語言或使用 D 語言的代碼生成器那樣富有表現力。",-1))]),s[73]||(s[73]=e(`<p>我將使用兩組變量來模擬這個謎題：<code>v_{r,c}</code> 和 <code>i_{r,c,v}</code>。<code>v_{r,c}</code> 將保存 r 行 c 列單元格的值（從 1 到 5）。<code>i_{r,c,v}</code> 是一個二進制指示器，如果 r 行 c 列的單元格的值是 v，則該指示器值為 1，否則為 0。這兩組變量是網格的冗餘表示，但第一種表示更容易對不等式約束進行建模，而第二種表示更容易對唯一性約束進行建模。我只需要添加一些額外的約束來強制這兩個表示是一致的。但首先，讓我們從每個單元格必須只有一個值的基本約束開始。從數學上講，這意味着給定行和列的所有指示器都必須為 0，但只有一個值為 1 的例外。這可以通過以下等式強制約束：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[i_{r,c,1} + i_{r,c,2} + i_{r,c,3} + i_{r,c,4} + i_{r,c,5} = 1]</span></span></code></pre></div><p>可以使用以下 Djinn 代碼生成對所有行和列的 CPLEX 約束：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\ 單元格只有一個值</span></span>
<span class="line"><span>[:</span></span>
<span class="line"><span>foreach (r; iota(N))</span></span>
<span class="line"><span>foreach (c; iota(N))</span></span>
<span class="line"><span>:]</span></span>
<span class="line"><span>    [= &quot;%-(%s + %)&quot;, vs.map!(v =&gt; ivar(r, c, v)) ] = 1</span></span>
<span class="line"><span>[::]</span></span></code></pre></div><p><code>ivar()</code> 是一個輔助函數，它為我們提供變量名為 <code>i</code> 的字符串標識符，而 <code>vs</code> 存儲從 1 到 5 的數字以方便使用。行和列內唯一性的約束完全相同，但在 <code>i</code> 的其他兩個維度上迭代。</p><p>為了使變量組 <code>i</code> 與變量組 <code>v</code> 保持一致，我們需要如下約束（請記住，變量組 <code>i</code> 中只有一個元素的值是非零的）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[i_{r,c,1} + 2i_{r,c,2} + 3i_{r,c,3} + 4i_{r,c,4} + 5i_{r,c,5} = v_{r,c}]</span></span></code></pre></div><p>CPLEX 要求所有變量都位於左側，因此 Djinn 代碼如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\ 連接變量組 i 和變量組 v</span></span>
<span class="line"><span>[:</span></span>
<span class="line"><span>foreach (r; iota(N))</span></span>
<span class="line"><span>foreach (c; iota(N))</span></span>
<span class="line"><span>:]</span></span>
<span class="line"><span>    [= &quot;%-(%s + %)&quot;, vs.map!(v =&gt; text(v, &#39; &#39;, ivar(r, c, v))) ] - [= vvar(r,c) ] = 0</span></span>
<span class="line"><span>[::]</span></span></code></pre></div>`,9)),a("p",null,[s[45]||(s[45]=n("不等符號相鄰的和左下角值為為 4 單元格的約束寫起來都很簡單。剩下的便是將指示器變量聲明為二進制，併為變量組 ",-1)),s[46]||(s[46]=a("code",null,"v",-1)),s[47]||(s[47]=n(" 設置邊界。加上變量的邊界，總共有 150 個變量和 111 個約束 ",-1)),i(p,{href:"https://gitlab.com/sarneaud/djinn/-/tree/v0.1.0/examples/inequality.lp.dj"},{default:l(()=>[...s[44]||(s[44]=[n("你可以在倉庫中看到完整的代碼",-1)])]),_:1}),s[48]||(s[48]=n("。",-1))]),a("p",null,[i(p,{href:"https://www.gnu.org/software/glpk/"},{default:l(()=>[...s[49]||(s[49]=[n("GNU 線性規劃工具集",-1)])]),_:1}),s[50]||(s[50]=n(" 有一個命令列工具可以解決這個 CPLEX MILP。不幸的是，它的輸出是一個包含了所有內容的體積很大的轉儲，所以我使用 awk 命令來提取需要的內容：",-1))]),s[74]||(s[74]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time glpsol --lp inequality.lp -o /dev/stdout | awk &#39;/v[0-9][0-9]/ { print $2, $4 }&#39; | sort</span></span>
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
<span class="line"><span>sys     0m0.005s</span></span></code></pre></div><p>這是在原始網格中寫出的解決方案：</p><p><img src="https://theartofmachinery.com/images/djinn/inequality_solution.svg" alt=""></p><p>這些例子只是用來玩的，但我相信你已經明白了。順便説一下，Djinn 代碼倉庫的 <code>README.md</code> 文件本身是使用 Djinn 模板生成的。</p><p>正如我所説，Djinn 也可以用作嵌入在 D 語言代碼中的編譯期模板語言。我最初只是想要一個代碼生成器，得益於 D 語言的元編程功能，這算是一個額外獲得的功能。</p><hr>`,6)),a("p",null,[s[52]||(s[52]=n("via: ",-1)),i(p,{href:"https://theartofmachinery.com/2021/01/01/djinn.html"},{default:l(()=>[...s[51]||(s[51]=[n("https://theartofmachinery.com/2021/01/01/djinn.html",-1)])]),_:1})]),a("p",null,[s[57]||(s[57]=n("作者：",-1)),i(p,{href:"https://theartofmachinery.com"},{default:l(()=>[...s[53]||(s[53]=[n("Simon Arneaud",-1)])]),_:1}),s[58]||(s[58]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[54]||(s[54]=[n("lujun9972",-1)])]),_:1}),s[59]||(s[59]=n(" 譯者：",-1)),i(p,{href:"https://github.com/hanszhao80"},{default:l(()=>[...s[55]||(s[55]=[n("hanszhao80",-1)])]),_:1}),s[60]||(s[60]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[56]||(s[56]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[63]||(s[63]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[61]||(s[61]=[n("LCTT",-1)])]),_:1}),s[64]||(s[64]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[62]||(s[62]=[n("Linux中國",-1)])]),_:1}),s[65]||(s[65]=n(" 榮譽推出",-1))])])}const C=t(g,[["render",u]]);export{y as __pageData,C as default};
