import{_ as t,a0 as l,w as o,s as r,I as a,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"使用 Python 函数进行模块化 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 函数进行模块化 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 函数进行模块化 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 函数进行模块化 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190701 Get modular with Python functions","title":"使用 Python 函数进行模块化","tag":"201909","desc":""},"relativePath":"201909/20190701 Get modular with Python functions.md","filePath":"[post].md"}'),d={name:"201909/20190701 Get modular with Python functions.md"};function h(m,s,u,g,k,y){const p=l("Link");return o(),r("div",null,[s[21]||(s[21]=a("h1",{id:"使用-python-函数进行模块化",tabindex:"-1"},[n("使用 Python 函数进行模块化 "),a("a",{class:"header-anchor",href:"#使用-python-函数进行模块化","aria-label":"Permalink to “使用 Python 函数进行模块化”"},"​")],-1)),s[22]||(s[22]=a("blockquote",null,[a("p",null,"使用 Python 函数来最大程度地减少重复任务编码工作量。")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/01/234309ja7ooanopazo3o2m.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("你是否对函数、类、方法、库和模块等花哨的编程术语感到困惑？你是否在与变量作用域斗争？无论你是自学成才的还是经过正式培训的程序员，代码的模块化都会令人困惑。但是类和库鼓励模块化代码，因为模块化代码意味着只需构建一个多用途代码块集合，就可以在许多项目中使用它们来减少编码工作量。换句话说，如果你按照本文对 ",-1)),e(p,{href:"https://www.python.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Python",-1)])]),_:1}),s[2]||(s[2]=n(" 函数的研究，你将找到更聪明的工作方法，这意味着更少的工作。",-1))]),a("p",null,[s[4]||(s[4]=n("本文假定你对 Python 很熟（LCTT 译注：稍微熟悉就可以），并且可以编写和运行一个简单的脚本。如果你还没有使用过 Python，请首先阅读我的文章：",-1)),e(p,{href:"https://opensource.com/article/17/10/python-10"},{default:i(()=>[...s[3]||(s[3]=[n("Python 简介",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),s[24]||(s[24]=c(`<h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to “函数”">​</a></h3><p>函数是迈向模块化过程中重要的一步，因为它们是形式化的重复方法。如果在你的程序中，有一个任务需要反复执行，那么你可以将代码放入一个函数中，根据需要随时调用该函数。这样，你只需编写一次代码，就可以随意使用它。</p><p>以下一个简单函数的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def Timer():</span></span>
<span class="line"><span>    print(&quot;Time is &quot; + str(time.time() ))</span></span></code></pre></div><p>创建一个名为 <code>mymodularity</code> 的目录，并将以上函数代码保存为该目录下的 <code>timestamp.py</code>。</p><p>除了这个函数，在 <code>mymodularity</code> 目录中创建一个名为 <code>__init__.py</code> 的文件，你可以在文件管理器或 bash shell 中执行此操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ touch mymodularity/__init__.py</span></span></code></pre></div><p>现在，你已经创建了属于你自己的 Python 库（Python 中称为“模块”），名为 <code>mymodularity</code>。它不是一个特别有用的模块，因为它所做的只是导入 <code>time</code> 模块并打印一个时间戳，但这只是一个开始。</p><p>要使用你的函数，像对待任何其他 Python 模块一样对待它。以下是一个小应用，它使用你的 <code>mymodularity</code> 软件包来测试 Python <code>sleep()</code> 函数的准确性。将此文件保存为 <code>sleeptest.py</code>，注意要在 <code>mymodularity</code> 文件夹 <em>之外</em>，因为如果你将它保存在 <code>mymodularity</code> <em>里面</em>，那么它将成为你的包中的一个模块，你肯定不希望这样。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Testing Python sleep()...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># modularity</span></span>
<span class="line"><span>timestamp.Timer()</span></span>
<span class="line"><span>time.sleep(3)</span></span>
<span class="line"><span>timestamp.Timer()</span></span></code></pre></div><p>在这个简单的脚本中，你从 <code>mymodularity</code> 包中调用 <code>timestamp</code> 模块两次。从包中导入模块时，通常的语法是从包中导入你所需的模块，然后使用 <em>模块名称 + 一个点 + 要调用的函数名</em>（例如 <code>timestamp.Timer()</code>）。</p><p>你调用了两次 <code>Timer()</code> 函数，所以如果你的 <code>timestamp</code> 模块比这个简单的例子复杂些，那么你将节省大量重复代码。</p><p>保存文件并运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./sleeptest.py</span></span>
<span class="line"><span>Testing Python sleep()...</span></span>
<span class="line"><span>Time is 1560711266.1526039</span></span>
<span class="line"><span>Time is 1560711269.1557732</span></span></code></pre></div><p>根据测试，Python 中的 <code>sleep</code> 函数非常准确：在三秒钟等待之后，时间戳成功且正确地增加了 3，在微秒单位上差距很小。</p><p>Python 库的结构看起来可能令人困惑，但其实它并不是什么魔法。Python <em>被编程</em> 为一个包含 Python 代码的目录，并附带一个 <code>__init__.py</code> 文件，那么这个目录就会被当作一个包，并且 Python 会首先在当前目录中查找可用模块。这就是为什么语句 <code>from mymodularity import timestamp</code> 有效的原因：Python 在当前目录查找名为 <code>mymodularity</code> 的目录，然后查找 <code>timestamp.py</code> 文件。</p><p>你在这个例子中所做的功能和以下这个非模块化的版本是一样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Testing Python sleep()...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># no modularity</span></span>
<span class="line"><span>print(&quot;Time is &quot; + str(time.time() ) )</span></span>
<span class="line"><span>time.sleep(3)</span></span>
<span class="line"><span>print(&quot;Time is &quot; + str(time.time() ) )</span></span></code></pre></div><p>对于这样一个简单的例子，其实没有必要以这种方式编写测试，但是对于编写自己的模块来说，最佳实践是你的代码是通用的，可以将它重用于其他项目。</p><p>通过在调用函数时传递信息，可以使代码更通用。例如，假设你想要使用模块来测试的不是 <em>系统</em> 的 <code>sleep</code> 函数，而是 <em>用户自己实现</em> 的 <code>sleep</code> 函数，更改 <code>timestamp</code> 代码，使它接受一个名为 <code>msg</code> 的传入变量，它将是一个字符串，控制每次调用 <code>timestamp</code> 时如何显示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新代码</span></span>
<span class="line"><span>def Timer(msg):</span></span>
<span class="line"><span>    print(str(msg) + str(time.time() ) )</span></span></code></pre></div><p>现在函数比以前更抽象了。它仍会打印时间戳，但是它为用户打印的内容 <code>msg</code> 还是未定义的。这意味着你需要在调用函数时定义它。</p><p><code>Timer</code> 函数接受的 <code>msg</code> 参数是随便命名的，你可以使用参数 <code>m</code>、<code>message</code> 或 <code>text</code>，或是任何对你来说有意义的名称。重要的是，当调用 <code>timestamp.Timer</code> 函数时，它接收一个文本作为其输入，将接收到的任何内容放入 <code>msg</code> 变量中，并使用该变量完成任务。</p><p>以下是一个测试测试用户正确感知时间流逝能力的新程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Press the RETURN key. Count to 3, and press RETURN again.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input()</span></span>
<span class="line"><span>timestamp.Timer(&quot;Started timer at &quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Count to 3...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input()</span></span>
<span class="line"><span>timestamp.Timer(&quot;You slept until &quot;)</span></span></code></pre></div><p>将你的新程序保存为 <code>response.py</code>，运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./response.py</span></span>
<span class="line"><span>Press the RETURN key. Count to 3, and press RETURN again.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Started timer at 1560714482.3772075</span></span>
<span class="line"><span>Count to 3...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You slept until 1560714484.1628013</span></span></code></pre></div><h3 id="函数和所需参数" tabindex="-1">函数和所需参数 <a class="header-anchor" href="#函数和所需参数" aria-label="Permalink to “函数和所需参数”">​</a></h3><p>新版本的 <code>timestamp</code> 模块现在 <em>需要</em> 一个 <code>msg</code> 参数。这很重要，因为你的第一个应用程序将无法运行，因为它没有将字符串传递给 <code>timestamp.Timer</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./sleeptest.py</span></span>
<span class="line"><span>Testing Python sleep()...</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./sleeptest.py&quot;, line 8, in &amp;lt;module&amp;gt;</span></span>
<span class="line"><span>    timestamp.Timer()</span></span>
<span class="line"><span>TypeError: Timer() missing 1 required positional argument: &#39;msg&#39;</span></span></code></pre></div><p>你能修复你的 <code>sleeptest.py</code> 应用程序，以便它能够与更新后的模块一起正确运行吗？</p><h3 id="变量和函数" tabindex="-1">变量和函数 <a class="header-anchor" href="#变量和函数" aria-label="Permalink to “变量和函数”">​</a></h3><p>通过设计，函数限制了变量的范围。换句话说，如果在函数内创建一个变量，那么这个变量 <em>只</em> 在这个函数内起作用。如果你尝试在函数外部使用函数内部出现的变量，就会发生错误。</p><p>下面是对 <code>response.py</code> 应用程序的修改，尝试从 <code>timestamp.Timer()</code> 函数外部打印 <code>msg</code> 变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Press the RETURN key. Count to 3, and press RETURN again.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input()</span></span>
<span class="line"><span>timestamp.Timer(&quot;Started timer at &quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Count to 3...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input()</span></span>
<span class="line"><span>timestamp.Timer(&quot;You slept for &quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(msg)</span></span></code></pre></div><p>试着运行它，查看错误：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./response.py</span></span>
<span class="line"><span>Press the RETURN key. Count to 3, and press RETURN again.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Started timer at 1560719527.7862902</span></span>
<span class="line"><span>Count to 3...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You slept for 1560719528.135406</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./response.py&quot;, line 15, in &amp;lt;module&amp;gt;</span></span>
<span class="line"><span>    print(msg)</span></span>
<span class="line"><span>NameError: name &#39;msg&#39; is not defined</span></span></code></pre></div><p>应用程序返回一个 <code>NameError</code> 消息，因为没有定义 <code>msg</code>。这看起来令人困惑，因为你编写的代码定义了 <code>msg</code>，但你对代码的了解比 Python 更深入。调用函数的代码，不管函数是出现在同一个文件中，还是打包为模块，都不知道函数内部发生了什么。一个函数独立地执行它的计算，并返回你想要它返回的内容。这其中所涉及的任何变量都只是 <em>本地的</em>：它们只存在于函数中，并且只存在于函数完成其目的所需时间内。</p><h4 id="return-语句" tabindex="-1">Return 语句 <a class="header-anchor" href="#return-语句" aria-label="Permalink to “Return 语句”">​</a></h4><p>如果你的应用程序需要函数中特定包含的信息，那么使用 <code>return</code> 语句让函数在运行后返回有意义的数据。</p><p>时间就是金钱，所以修改 <code>timestamp</code> 函数，以使其用于一个虚构的收费系统：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def Timer(msg):</span></span>
<span class="line"><span>    print(str(msg) + str(time.time() ) )</span></span>
<span class="line"><span>    charge = .02</span></span>
<span class="line"><span>    return charge</span></span></code></pre></div><p>现在，<code>timestamp</code> 模块每次调用都收费 2 美分，但最重要的是，它返回每次调用时所收取的金额。</p><p>以下一个如何使用 <code>return</code> 语句的演示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Press RETURN for the time (costs 2 cents).&quot;)</span></span>
<span class="line"><span>print(&quot;Press Q RETURN to quit.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>total = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    kbd = input()</span></span>
<span class="line"><span>    if kbd.lower() == &quot;q&quot;:</span></span>
<span class="line"><span>        print(&quot;You owe $&quot; + str(total) )</span></span>
<span class="line"><span>        exit()</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        charge = timestamp.Timer(&quot;Time is &quot;)</span></span>
<span class="line"><span>        total = total+charge</span></span></code></pre></div><p>在这个示例代码中，变量 <code>charge</code> 为 <code>timestamp.Timer()</code> 函数的返回，它接收函数返回的任何内容。在本例中，函数返回一个数字，因此使用一个名为 <code>total</code> 的新变量来跟踪已经进行了多少更改。当应用程序收到要退出的信号时，它会打印总花费：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./charge.py</span></span>
<span class="line"><span>Press RETURN for the time (costs 2 cents).</span></span>
<span class="line"><span>Press Q RETURN to quit.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Time is 1560722430.345412</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Time is 1560722430.933996</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Time is 1560722434.6027434</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Time is 1560722438.612629</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Time is 1560722439.3649364</span></span>
<span class="line"><span>q</span></span>
<span class="line"><span>You owe $0.1</span></span></code></pre></div><h4 id="内联函数" tabindex="-1">内联函数 <a class="header-anchor" href="#内联函数" aria-label="Permalink to “内联函数”">​</a></h4><p>函数不必在单独的文件中创建。如果你只是针对一个任务编写一个简短的脚本，那么在同一个文件中编写函数可能更有意义。唯一的区别是你不必导入自己的模块，但函数的工作方式是一样的。以下是时间测试应用程序的最新迭代：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>total = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def Timer(msg):</span></span>
<span class="line"><span>    print(str(msg) + str(time.time() ) )</span></span>
<span class="line"><span>    charge = .02</span></span>
<span class="line"><span>    return charge</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Press RETURN for the time (costs 2 cents).&quot;)</span></span>
<span class="line"><span>print(&quot;Press Q RETURN to quit.&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    kbd = input()</span></span>
<span class="line"><span>    if kbd.lower() == &quot;q&quot;:</span></span>
<span class="line"><span>        print(&quot;You owe $&quot; + str(total) )</span></span>
<span class="line"><span>        exit()</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        charge = Timer(&quot;Time is &quot;)</span></span>
<span class="line"><span>        total = total+charge</span></span></code></pre></div><p>它没有外部依赖（Python 发行版中包含 <code>time</code> 模块），产生与模块化版本相同的结果。它的优点是一切都位于一个文件中，缺点是你不能在其他脚本中使用 <code>Timer()</code> 函数，除非你手动复制和粘贴它。</p><h4 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to “全局变量”">​</a></h4><p>在函数外部创建的变量没有限制作用域，因此它被视为 <em>全局</em> 变量。</p><p>全局变量的一个例子是在 <code>charge.py</code> 中用于跟踪当前花费的 <code>total</code> 变量。<code>total</code> 是在函数之外创建的，因此它绑定到应用程序而不是特定函数。</p><p>应用程序中的函数可以访问全局变量，但要将变量传入导入的模块，你必须像发送 <code>msg</code> 变量一样将变量传入模块。</p><p>全局变量很方便，因为它们似乎随时随地都可用，但也很难跟踪它们，很难知道哪些变量不再需要了但是仍然在系统内存中停留（尽管 Python 有非常好的垃圾收集机制）。</p><p>但是，全局变量很重要，因为不是所有的变量都可以是函数或类的本地变量。现在你知道了如何向函数传入变量并获得返回，事情就变得容易了。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>你已经学到了很多关于函数的知识，所以开始将它们放入你的脚本中 —— 如果它不是作为单独的模块，那么作为代码块，你不必在一个脚本中编写多次。在本系列的下一篇文章中，我将介绍 Python 类。</p><hr>`,60)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/get-modular-python-functions"},{default:i(()=>[...s[6]||(s[6]=[n("https://opensource.com/article/19/7/get-modular-python-functions",-1)])]),_:1})]),a("p",null,[s[12]||(s[12]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth/users/xd-deng/users/nhuntwalker/users/don-watkins"},{default:i(()=>[...s[8]||(s[8]=[n("Seth Kenlon",-1)])]),_:1}),s[13]||(s[13]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[9]||(s[9]=[n("lujun9972",-1)])]),_:1}),s[14]||(s[14]=n(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[10]||(s[10]=[n("MjSeven",-1)])]),_:1}),s[15]||(s[15]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[17]||(s[17]=[n("Linux中国",-1)])]),_:1}),s[20]||(s[20]=n(" 荣誉推出",-1))])])}const q=t(d,[["render",h]]);export{T as __pageData,q as default};
