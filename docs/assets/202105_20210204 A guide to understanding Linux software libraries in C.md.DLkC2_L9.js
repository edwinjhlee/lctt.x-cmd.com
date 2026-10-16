import{_ as t,a0 as o,w as c,s as d,ao as l,I as a,x as n,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"用 C 语言理解 Linux 软件库 | LCTT x X-CMD","titleTemplate":false,"description":"用 C 语言理解 Linux 软件库 | LCTT (202105) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 C 语言理解 Linux 软件库 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 C 语言理解 Linux 软件库 | LCTT (202105) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202105/20210204 A guide to understanding Linux software libraries in C","title":"用 C 语言理解 Linux 软件库","tag":"202105","desc":""},"relativePath":"202105/20210204 A guide to understanding Linux software libraries in C.md","filePath":"[post].md"}'),r={name:"202105/20210204 A guide to understanding Linux software libraries in C.md"};function g(h,s,u,b,k,m){const e=o("Link");return c(),d("div",null,[s[33]||(s[33]=l('<h1 id="用-c-语言理解-linux-软件库" tabindex="-1">用 C 语言理解 Linux 软件库 <a class="header-anchor" href="#用-c-语言理解-linux-软件库" aria-label="Permalink to “用 C 语言理解 Linux 软件库”">​</a></h1><blockquote><p>软件库是重复使用代码的一种简单而合理的方式。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202105/22/165307u0n970uivji7kiim.jpg" alt=""></p><p>软件库是一种是一直以来长期存在的、简单合理的复用代码的方式。这篇文章解释了如何从头开始构建库并使得其可用。尽管这两个示例库都以 Linux 为例，但创建、发布和使用这些库的步骤也可以应用于其它类 Unix 系统。</p><p>这些示例库使用 C 语言编写，非常适合该任务。Linux 内核大部分由 C 语言和少量汇编语言编写（Windows 和 Linux 的表亲如 macOS 也是如此）。用于输入/输出、网络、字符串处理、数学、安全、数据编码等的标准系统库等主要由 C 语言编写。所以使用 C 语言编写库就是使用 Linux 的原生语言来编写。除此之外，C 语言的性能也在一众高级语言中鹤立鸡群。</p><p>还有两个来访问这些库的示例<ruby>客户程序<rt>client</rt></ruby>（一个使用 C，另一个使用 Python）。毫无疑问可以使用 C 语言客户程序来访问 C 语言编写的库，但是 Python 客户程序示例说明了一个由 C 语言编写的库也可以服务于其他编程语言。</p><h3 id="静态库和动态库对比" tabindex="-1">静态库和动态库对比 <a class="header-anchor" href="#静态库和动态库对比" aria-label="Permalink to “静态库和动态库对比”">​</a></h3><p>Linux 系统存在两种类型库：</p><ul><li><strong>静态库（也被称为归档库）</strong>：在编译过程中的链接阶段，静态库会被编译进程序（例如 C 或 Rust）中。每个客户程序都有属于自己的一份库的拷贝。静态库有一个显而易见的缺点 —— 当库需要进行一定改动时（例如修复一个 bug），静态库必须重新链接一次。接下来要介绍的动态库避免了这一缺点。</li><li><strong>动态库（也被称为共享库）</strong>：动态库首先会在程序编译中的链接阶段被标记，但是客户程序和库代码在运行之前仍然没有联系，且库代码不会进入到客户程序中。系统的动态加载器会把一个共享库和正在运行的客户程序进行连接，无论该客户程序是由静态编译语言（如 C）编写，还是由动态解释语言（如 Python）编写。因此，动态库不需要麻烦客户程序便可以进行更新。最后，多个客户程序可以共享同一个动态库的单一副本。</li></ul><p>通常来说，动态库优于静态库，尽管其复杂性较高而性能较低。下面是两种类型的库如何创建和发布：</p><ol><li>库的源代码会被编译成一个或多个目标模块，目标模块是二进制文件，可以被包含在库中并且链接到可执行的二进制中。</li><li>目标模块会会被打包成一个文件。对于静态库，标准的文件拓展名是 <code>.a</code> 意为“<ruby>归档<rt>archive</rt></ruby>”；对于动态库，标准的文件拓展名是 <code>.so</code> 意为“<ruby>共享目标<rt>shared object</rt></ruby>”。对于这两个相同功能的示例库，分别发布为 <code>libprimes.a</code> （静态库）和 <code>libshprimes.so</code> （动态库）。两种库的文件名都使用前缀 <code>lib</code> 进行标识。</li><li>库文件被复制到标准目录下，使得客户程序可以轻松地访问到库。无论是静态库还是动态库，典型的位置是 <code>/usr/lib</code> 或者 <code>/usr/local/lib</code>，当然其他位置也是可以的。</li></ol><p>构建和发布每种库的具体步骤会在下面详细介绍。首先我将介绍两种库里涉及到的 C 函数。</p><h3 id="示例库函数" tabindex="-1">示例库函数 <a class="header-anchor" href="#示例库函数" aria-label="Permalink to “示例库函数”">​</a></h3><p>这两个示例库都是由五个相同的 C 函数构建而成的，其中四个函数可供客户程序使用。第五个函数是其他四个函数的一个工具函数，它显示了 C 语言怎么隐藏信息。每个函数的源代码都很短，可以将这些函数放在单个源文件中，尽管也可以放在多个源文件中（如四个公布的函数都有一个文件）。</p><p>这些库函数是基本的处理函数，以多种方式来处理质数。所有的函数接收无符号（即非负）整数值作为参数：</p>',15)),a("ul",null,[s[5]||(s[5]=a("li",null,[a("code",null,"is_prime"),n(" 函数测试其单个参数是否为质数。")],-1)),s[6]||(s[6]=a("li",null,[a("code",null,"are_coprimes"),n(" 函数检查了其两个参数的"),a("ruby",null,[n("最大公约数"),a("rt",null,"greatest common divisor")]),n("（gcd）是否为 1，即是否为互质数。")],-1)),s[7]||(s[7]=a("li",null,[a("code",null,"prime_factors"),n("：函数列出其参数的质因数。")],-1)),a("li",null,[s[2]||(s[2]=a("code",null,"glodbach",-1)),s[3]||(s[3]=n("：函数接收一个大于等于 4 的偶数，列出其可以分解为两个质数的和。它也许存在多个符合条件的数对。该函数是以 18 世纪数学家 ",-1)),a("ruby",null,[p(e,{href:"https://en.wikipedia.org/wiki/Christian_Goldbach"},{default:i(()=>[...s[0]||(s[0]=[n("克里斯蒂安·哥德巴赫",-1)])]),_:1}),s[1]||(s[1]=a("rt",null,"Christian Goldbach",-1))]),s[4]||(s[4]=n(" 命名的，他的猜想是任意一个大于 2 的偶数可以分解为两个质数之和，这依旧是数论里最古老的未被解决的问题。",-1))])]),s[34]||(s[34]=l(`<p>工具函数 <code>gcd</code> 留在已部署的库文件中，但是在没有包含这个函数的文件无法访问此函数。因此，一个使用库的客户程序无法调用 <code>gcd</code> 函数。仔细观察 C 函数可以明白这一点。</p><h3 id="更多关于-c-函数的内容" tabindex="-1">更多关于 C 函数的内容 <a class="header-anchor" href="#更多关于-c-函数的内容" aria-label="Permalink to “更多关于 C 函数的内容”">​</a></h3><p>每个在 C 语言中的函数都有一个存储类，它决定了函数的范围。对于函数，有两种选择。</p><ul><li><p>函数默认的存储类是 <code>extern</code>，它给了函数一个全局域。一个客户程序可以调用在示例库中用 <code>extern</code> 修饰的任意函数。下面是一个带有显式 <code>extern</code> 声明的 <code>are_coprimes</code> 函数定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>存储类 <code>static</code> 将一个函数的的范围限制到函数被定义的文件中。在示例库中，工具函数 <code>gcd</code> 是静态的（<code>static</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>static unsigned gcd(unsigned n1, unsigned n2) {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><p>只有在 <code>primes.c</code> 文件中的函数可以调用 <code>gcd</code>，而只有 <code>are_coprimes</code> 函数会调用它。当静态库和动态库被构建和发布后，其他的程序可以调用外部的（<code>extern</code>）函数，如 <code>are_coprimes</code> ，但是不可以调用静态（<code>static</code>）函数 <code>gcd</code>。静态（<code>static</code>）存储类通过将函数范围限制在其他库函数内，进而实现了对库的客户程序隐藏 <code>gcd</code> 函数。</p><p>在 <code>primes.c</code> 文件中除了 <code>gcd</code> 函数外，其他函数并没有指明存储类，默认将会设置为外部的（<code>extern</code>）。然而，在库中显式注明 <code>extern</code> 更加常见。</p><p>C 语言区分了函数的<ruby>定义<rt>definition</rt></ruby>和<ruby>声明<rt>declaration</rt></ruby>，这对库来说很重要。接下来让我们开始了解定义。C 语言仅允许命名函数不允许匿名函数，并且每个函数需要定义以下内容：</p><ul><li>一个唯一的名字。一个程序不允许存在两个同名的函数。</li><li>一个可以为空的参数列表。参数需要指明类型。</li><li>一个返回值类型（例如：<code>int</code> 代表 32 位有符号整数），当没有返回值时设置为空类型（<code>void</code>）。</li><li>用一对花括号包围起来的函数主体部分。在一个特制的示例中，函数主体部分可以为空。</li></ul><p>程序中的每个函数必须要被定义一次。</p><p>下面是库函数 <code>are_coprimes</code> 的完整定义：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2) { /* 定义 */</span></span>
<span class="line"><span>  return 1 == gcd(n1, n2); /* 最大公约数是否为 1? */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>函数返回一个布尔值（<code>0</code> 代表假，<code>1</code> 代表真），取决于两个整数参数值的最大公约数是否为 1。工具函数 <code>gcd</code> 计算两个整数参数 <code>n1</code> 和 <code>n2</code> 的最大公约数。</p><p>函数声明不同于定义，其不需要主体部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extern unsigned are_coprimes(unsigned n1, unsigned n2); /* 声明 */</span></span></code></pre></div><p>声明在参数列表后用一个分号代表结束，它没有被花括号包围起来的主体部分。程序中的函数可以被多次声明。</p><p>为什么需要声明？在 C 语言中，一个被调用的函数必须对其调用者可见。有多种方式可以提供这样的可见性，具体依赖于编译器如何实现。一个必然可行的方式就是当它们二者位于同一个文件中时，将被调用的函数定义在在它的调用者之前。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void f() {...}     /* f 定义在其被调用前 */</span></span>
<span class="line"><span>void g() { f(); }  /* ok */</span></span></code></pre></div><p>当函数 <code>f</code> 被在调用前声明，此时函数 <code>f</code> 的定义可以移动到函数 <code>g</code> 的下方。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void f();         /* 声明使得函数 f 对调用者可见 */</span></span>
<span class="line"><span>void g() { f(); } /* ok */</span></span>
<span class="line"><span>void f() {...}    /* 相较于前一种方式，此方式显得更简洁 */</span></span></code></pre></div><p>但是当如果一个被调用的函数和调用它的函数不在同一个文件中时呢？因为前文提到一个函数在一个程序中需要被定义一次，那么如何使得让一个文件中被定义的函数在另一个文件中可见？</p><p>这个问题会影响库，无论是静态库还是动态库。例如在这两个质数库中函数被定义在源文件 <code>primes.c</code> 中，每个库中都有该函数的二进制副本，但是这些定义的函数必须要对使用库的 C 程序可见，该 C 程序有其自身的源文件。</p><p>函数声明可以帮助提供跨文件的可见性。对于上述的“质数”例子，它有一个名为 <code>primes.h</code> 的头文件，其声明了四个函数使得它们对使用库的 C 程序可见。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/** 头文件 primes.h：函数声明 **/</span></span>
<span class="line"><span>extern unsigned is_prime(unsigned);</span></span>
<span class="line"><span>extern void prime_factors(unsigned);</span></span>
<span class="line"><span>extern unsigned are_coprimes(unsigned, unsigned);</span></span>
<span class="line"><span>extern void goldbach(unsigned);</span></span></code></pre></div><p>这些声明通过为每个函数指定其调用语法来作为接口。</p><p>为了客户程序的便利性，头文件 <code>primes.h</code> 应该存储在 C 编译器查找路径下的目录中。典型的位置有 <code>/usr/include</code> 和 <code>/usr/local/include</code>。一个 C 语言客户程序应使用 <code>#include</code> 包含这个头文件，并尽可能将这条语句其程序源代码的首部（头文件将会被导入另一个源文件的“头”部）。C 语言头文件可以被导入其他语言（如 Rust 语言）中的 <code>bindgen</code>，使其它语言的客户程序可以访问 C 语言的库。</p><p>总之，一个库函数只可以被定义一次，但可以在任何需要它的地方进行声明，任一使用 C 语言库的程序都需要该声明。头文件可以包含函数声明，但不能包含函数定义。如果头文件包含了函数定义，那么该文件可能会在一个 C 语言程序中被多次包含，从而破坏了一个函数在 C 语言程序中必须被精确定义一次的规则。</p><h3 id="库的源代码" tabindex="-1">库的源代码 <a class="header-anchor" href="#库的源代码" aria-label="Permalink to “库的源代码”">​</a></h3>`,27)),a("p",null,[s[9]||(s[9]=n("下面是两个库的源代码。这部分代码、头文件、以及两个示例客户程序都可以在 ",-1)),p(e,{href:"https://condor.depaul.edu/mkalin"},{default:i(()=>[...s[8]||(s[8]=[n("我的网页",-1)])]),_:1}),s[10]||(s[10]=n(" 上找到。",-1))]),s[35]||(s[35]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;math.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern unsigned is_prime(unsigned n) {</span></span>
<span class="line"><span>  if (n &lt;= 3) return n &gt; 1;                   /* 2 和 3 是质数 */</span></span>
<span class="line"><span>  if (0 == (n % 2) || 0 == (n % 3)) return 0; /* 2 和 3 的倍数不会是质数 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 检查 n 是否是其他 &lt; n 的值的倍数 */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 5; (i * i) &lt;= n; i += 6)</span></span>
<span class="line"><span>    if (0 == (n % i) || 0 == (n % (i + 2))) return 0; /* 不是质数 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 1; /* 一个不是 2 和 3 的质数 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern void prime_factors(unsigned n) {</span></span>
<span class="line"><span>  /* 在数字 n 的质因数分解中列出所有 2 */</span></span>
<span class="line"><span>  while (0 == (n % 2)) {  </span></span>
<span class="line"><span>    printf(&quot;%i &quot;, 2);</span></span>
<span class="line"><span>    n /= 2;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 数字 2 已经处理完成，下面处理奇数 */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 3; i &lt;= sqrt(n); i += 2) {</span></span>
<span class="line"><span>    while (0 == (n % i)) {</span></span>
<span class="line"><span>      printf(&quot;%i &quot;, i);</span></span>
<span class="line"><span>      n /= i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 还有其他质因数？*/</span></span>
<span class="line"><span>  if (n &gt; 2) printf(&quot;%i&quot;, n);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 工具函数：计算最大公约数 */</span></span>
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
<span class="line"><span>  /* 输入错误 */</span></span>
<span class="line"><span>  if ((n &lt;= 2) || ((n &amp; 0x01) &gt; 0)) {</span></span>
<span class="line"><span>    printf(&quot;Number must be &gt; 2 and even: %i is not.\\n&quot;, n);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* 两个简单的例子：4 和 6 */</span></span>
<span class="line"><span>  if ((4 == n) || (6 == n)) {</span></span>
<span class="line"><span>    printf(&quot;%i = %i + %i\\n&quot;, n, n / 2, n / 2);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>  /* 当 n &gt; 8 时，存在多种可能性 */</span></span>
<span class="line"><span>  unsigned i;</span></span>
<span class="line"><span>  for (i = 3; i &lt; (n / 2); i++) {</span></span>
<span class="line"><span>    if (is_prime(i) &amp;&amp; is_prime(n - i)) {</span></span>
<span class="line"><span>      printf(&quot;%i = %i + %i\\n&quot;, n, i, n - i);</span></span>
<span class="line"><span>      /* 如果只需要一对，那么用 break 语句替换这句 */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>库函数</em></p><p>这些函数可以被库利用。两个库可以从相同的源代码中获得，同时头文件 <code>primes.h</code> 是两个库的 C 语言接口。</p><h3 id="构建库" tabindex="-1">构建库 <a class="header-anchor" href="#构建库" aria-label="Permalink to “构建库”">​</a></h3><p>静态库和动态库在构建和发布的步骤上有一些细节的不同。静态库需要三个步骤，而动态库需要增加两个步骤即一共五个步骤。额外的步骤表明了动态库的动态方法具有更多的灵活性。让我们先从静态库开始。</p><p>库的源文件 <code>primes.c</code> 被编译成一个目标模块。下面是命令，百分号 <code>%</code> 代表系统提示符，两个井字符 <code>#</code> 是我的注释。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -c primes.c ## 步骤1（静态）</span></span></code></pre></div><p>这一步生成目标模块是二进制文件 <code>primes.o</code>。<code>-c</code> 标志意味着只编译。</p><p>下一步是使用 Linux 的 <code>ar</code> 命令将目标对象归档。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% ar -cvq libprimes.a primes.o ## 步骤2（静态）</span></span></code></pre></div><p><code>-cvq</code> 三个标识分别是“创建”、“详细的”、“快速添加”（以防新文件没有添加到归档中）的简称。回忆一下，前文提到过前缀 <code>lib</code> 是必须的，而库名是任意的。当然，库的文件名必须是唯一的，以避免冲突。</p><p>归档已经准备好要被发布：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo cp libprimes.a /usr/local/lib ## 步骤3（静态）</span></span></code></pre></div><p>现在静态库对接下来的客户程序是可见的，示例在后面。（包含 <code>sudo</code> 可以确保有访问权限将文件复制进 <code>/usr/local/lib</code> 目录中）</p><p>动态库还需要一个或多个对象模块进行打包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc primes.c -c -fpic ## 步骤1（动态）</span></span></code></pre></div><p>增加的选项 <code>-fpic</code> 指示编译器生成与位置无关的代码，这意味着不需要将该二进制模块加载到一个固定的内存位置。在一个拥有多个动态库的系统中这种灵活性是至关重要的。生成的对象模块会略大于静态库生成的对象模块。</p><p>下面是从对象模块创建单个库文件的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -shared -Wl,-soname,libshprimes.so -o libshprimes.so.1 primes.o ## 步骤2（动态）</span></span></code></pre></div><p>选项 <code>-shared</code> 表明了该库是一个共享的（动态的）而不是静态的。<code>-Wl</code> 选项引入了一系列编译器选项，第一个便是设置动态库的 <code>-soname</code>，这是必须设置的。<code>soname</code> 首先指定了库的逻辑名字（<code>libshprimes.so</code>），接下来的 <code>-o</code> 选项指明了库的物理文件名字（<code>libshprimes.so.1</code>）。这样做的目的是为了保持逻辑名不变的同时允许物理名随着新版本而发生变化。在本例中，在物理文件名 <code>libshprimes.so.1</code> 中最后的 1 代表是第一个库的版本。尽管逻辑文件名和物理文件名可以是相同的，但是最佳做法是将它们命名为不同的名字。一个客户程序将会通过逻辑名（本例中为 <code>libshprimes.so</code>）来访问库，稍后我会进一步解释。</p><p>接下来的一步是通过复制共享库到合适的目录下使得客户程序容易访问，例如 <code>/usr/local/lib</code> 目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo cp libshprimes.so.1 /usr/local/lib ## 步骤3（动态）</span></span></code></pre></div><p>现在在共享库的逻辑名（<code>libshprimes.so</code>）和它的物理文件名（<code>/usr/local/lib/libshprimes.so.1</code>）之间设置一个符号链接。最简单的方式是将 <code>/usr/local/lib</code> 作为工作目录，在该目录下输入命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo ln --symbolic libshprimes.so.1 libshprimes.so ## 步骤4（动态）</span></span></code></pre></div><p>逻辑名 <code>libshprimes.so</code> 不应该改变，但是符号链接的目标（<code>libshrimes.so.1</code>）可以根据需要进行更新，新的库实现可以是修复了 bug，提高性能等。</p><p>最后一步（一个预防措施）是调用 <code>ldconfig</code> 工具来配置系统的动态加载器。这个配置保证了加载器能够找到新发布的库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% sudo ldconfig ## 步骤5（动态）</span></span></code></pre></div><p>到现在，动态库已为包括下面的两个在内的示例客户程序准备就绪了。</p><h3 id="一个使用库的-c-程序" tabindex="-1">一个使用库的 C 程序 <a class="header-anchor" href="#一个使用库的-c-程序" aria-label="Permalink to “一个使用库的 C 程序”">​</a></h3><p>这个示例 C 程序是一个测试程序，它的源代码以两条 <code>#include</code> 指令开始：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;  /* 标准输入/输出函数 */</span></span>
<span class="line"><span>#include &lt;primes.h&gt; /* 我的库函数 */</span></span></code></pre></div><p>文件名两边的尖括号表示可以在编译器的搜索路径中找到这些头文件（对于 <code>primes.h</code> 文件来说在 <code>/usr/local/inlcude</code> 目录下）。如果不包含 <code>#include</code>，编译器会抱怨缺少 <code>is_prime</code> 和 <code>prime_factors</code> 等函数的声明，它们在两个库中都有发布。顺便提一句，测试程序的源代码不需要更改即可测试两个库中的每一个库。</p><p>相比之下，库的源文件（<code>primes.c</code>）使用 <code>#include</code> 指令打开以下头文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;math.h&gt;</span></span></code></pre></div><p><code>math.h</code> 头文件是必须的，因为库函数 <code>prime_factors</code> 会调用数学函数 <code>sqrt</code>，其在标准库 <code>libm.so</code> 中。</p><p>作为参考，这是测试库程序的源代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;primes.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main() {</span></span>
<span class="line"><span>  /* 是质数 */</span></span>
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
<span class="line"><span>  /* 是合数 */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p><em>测试程序</em></p><p>在编译 <code>tester.c</code> 文件到可执行文件时，难处理的部分时链接选项的顺序。回想前文中提到两个示例库都是用 <code>lib</code> 作为前缀开始，并且每一个都有一个常规的拓展后缀：<code>.a</code> 代表静态库 <code>libprimes.a</code>，<code>.so</code> 代表动态库 <code>libshprimes.so</code>。在链接规范中，前缀 <code>lib</code> 和拓展名被忽略了。链接标志以 <code>-l</code> （小写 L）开始，并且一条编译命令可能包含多个链接标志。下面是一个完整的测试程序的编译指令，使用动态库作为示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o tester tester.c -lshprimes -lm</span></span></code></pre></div><p>第一个链接标志指定了库 <code>libshprimes.so</code>，第二个链接标志指定了标准数学库 <code>libm.so</code>。</p><p>链接器是懒惰的，这意味着链接标志的顺序是需要考虑的。例如，调整上述实例中的链接顺序将会产生一个编译时错误：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o tester tester.c -lm -lshprimes ## 危险！</span></span></code></pre></div><p>链接 <code>libm.so</code> 库的标志先出现，但是这个库中没有函数被测试程序显式调用；因此，链接器不会链接到 <code>math.so</code> 库。调用 <code>sqrt</code> 库函数仅发生在 <code>libshprimes.so</code> 库中包含的 <code>prime_factors</code> 函数。编译测试程序返回的错误是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>primes.c: undefined reference to &#39;sqrt&#39;</span></span></code></pre></div><p>因此，链接标志的顺序应该是通知链接器需要 <code>sqrt</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% gcc -o tester tester.c -lshprimes -lm ## 首先链接 -lshprimes</span></span></code></pre></div><p>链接器在 <code>libshprimes.so</code> 库中发现了对库函数 <code>sqrt</code> 的调用，所以接下来对数学库 <code>libm.so</code>做了合适的链接。链接还有一个更复杂的选项，它支持链接的标志顺序。然而在本例中，最简单的方式就是恰当地排列链接标志。</p><p>下面是运行测试程序的部分输出结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>is_prime</span></span>
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
<span class="line"><span>...</span></span></code></pre></div><p>对于 <code>goldbach</code> 函数，即使一个相当小的偶数值（例如 18）也许存在多个一对质数之和的组合（在这种情况下，5+13 和 7+11）。因此这种多个质数对是使得尝试证明哥德巴赫猜想变得复杂的因素之一。</p><h3 id="封装使用库的-python-程序" tabindex="-1">封装使用库的 Python 程序 <a class="header-anchor" href="#封装使用库的-python-程序" aria-label="Permalink to “封装使用库的 Python 程序”">​</a></h3><p>与 C 不同，Python 不是一个静态编译语言，这意味着 Python 客户示例程序必须访问动态版本而非静态版本的 <code>primes</code> 库。为了能这样做，Python 中有众多的支持<ruby>外部语言接口<rt>foreign function interface</rt></ruby>（FFI）的模块（标准的或第三方的），它们允许用一种语言编写的程序来调用另一种语言编写的函数。Python 中的 <code>ctypes</code> 是一个标准的、相对简单的允许 Python 代码调用 C 函数的 FFI。</p><p>任何 FFI 都面临挑战，因为对接的语言不大可能会具有完全相同的数据类型。例如：<code>primes</code> 库使用 C 语言类型 <code>unsigned int</code>，而 Python 并不具有这种类型；因此 <code>ctypes</code> FFI 将 C 语言中的 <code>unsigned int</code> 类型映射为 Python 中的 <code>int</code> 类型。在 <code>primes</code> 库中发布的四个 <code>extern</code> C 函数中，有两个在具有显式 <code>ctypes</code> 配置的 Python 中会表现得更好。</p><p>C 函数 <code>prime_factors</code> 和 <code>goldbach</code> 返回 <code>void</code> 而不是返回一个具体类型，但是 <code>ctypes</code> 默认会将 C 语言中的 <code>void</code> 替换为 Python 语言中的 <code>int</code>。当从 Python 代码中调用时，这两个 C 函数会从栈中返回一个随机整数值（因此，该值无任何意义）。然而，可以对 <code>ctypes</code> 进行配置，让这些函数返回 <code>None</code> （Python 中为 <code>null</code> 类型）。下面是对 <code>prime_factors</code> 函数的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>primes.prime_factors.restype = None</span></span></code></pre></div><p>可以用类似的语句处理 <code>goldbach</code> 函数。</p><p>下面的交互示例（在 Python3 中）展示了在 Python 客户程序和 <code>primes</code> 库之间的接口是简单明了的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&gt;&gt;&gt; from ctypes import cdll</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; primes = cdll.LoadLibrary(&quot;libshprimes.so&quot;) ## 逻辑名</span></span>
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
<span class="line"><span>32 = 13 + 19</span></span></code></pre></div><p>在 <code>primes</code> 库中的函数只使用一个简单数据类型：<code>unsigned int</code>。如果这个 C 语言库使用复杂的类型如结构体，如果库函数传递和返回指向结构体的指针，那么比 <code>ctypes</code> 更强大的 FFI 更适合作为一个在 Python 语言和 C 语言之间的平滑接口。尽管如此，<code>ctypes</code> 示例展示了一个 Python 客户程序可以使用 C 语言编写的库。值得注意的是，用作科学计算的流行的 <code>Numpy</code> 库是用 C 语言编写的，然后在高级 Python API 中公开。</p>`,60)),a("p",null,[s[12]||(s[12]=n("简单的 ",-1)),s[13]||(s[13]=a("code",null,"primes",-1)),s[14]||(s[14]=n(" 库和高级的 ",-1)),s[15]||(s[15]=a("code",null,"Numpy",-1)),s[16]||(s[16]=n(" 库强调了 C 语言仍然是编程语言中的通用语言。几乎每一个语言都可以与 C 语言交互，同时通过 C 语言也可以和任何其他语言交互。Python 很容易和 C 语言交互，作为另外一个例子，当 ",-1)),p(e,{href:"https://openjdk.java.net/projects/panama"},{default:i(()=>[...s[11]||(s[11]=[n("Panama 项目",-1)])]),_:1}),s[17]||(s[17]=n(" 成为 Java Native Interface（JNI）一个替代品后，Java 语言和 C 语言交互也会变的很容易。",-1))]),s[36]||(s[36]=a("hr",null,null,-1)),a("p",null,[s[19]||(s[19]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/21/2/linux-software-libraries"},{default:i(()=>[...s[18]||(s[18]=[n("https://opensource.com/article/21/2/linux-software-libraries",-1)])]),_:1})]),a("p",null,[s[24]||(s[24]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/mkalindepauledu"},{default:i(()=>[...s[20]||(s[20]=[n("Marty Kalin",-1)])]),_:1}),s[25]||(s[25]=n(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[21]||(s[21]=[n("lujun9972",-1)])]),_:1}),s[26]||(s[26]=n(" 译者：",-1)),p(e,{href:"https://github.com/mengxinayan"},{default:i(()=>[...s[22]||(s[22]=[n("萌新阿岩",-1)])]),_:1}),s[27]||(s[27]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[23]||(s[23]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[28]||(s[28]=[n("LCTT",-1)])]),_:1}),s[31]||(s[31]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[29]||(s[29]=[n("Linux中国",-1)])]),_:1}),s[32]||(s[32]=n(" 荣誉推出",-1))])])}const x=t(r,[["render",g]]);export{C as __pageData,x as default};
