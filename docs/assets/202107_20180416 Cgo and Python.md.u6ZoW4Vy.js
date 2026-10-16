import{_ as e,a0 as l,w as r,s as g,I as a,x as s,a1 as t,A as i,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"如何在 Go 中嵌入 Python | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Go 中嵌入 Python | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Go 中嵌入 Python | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Go 中嵌入 Python | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20180416 Cgo and Python","title":"如何在 Go 中嵌入 Python","tag":"202107","desc":""},"relativePath":"202107/20180416 Cgo and Python.md","filePath":"[post].md"}'),d={name:"202107/20180416 Cgo and Python.md"};function h(u,n,c,y,f,m){const p=l("Link");return r(),g("div",null,[n[41]||(n[41]=a("h1",{id:"如何在-go-中嵌入-python",tabindex:"-1"},[s("如何在 Go 中嵌入 Python "),a("a",{class:"header-anchor",href:"#如何在-go-中嵌入-python","aria-label":"Permalink to “如何在 Go 中嵌入 Python”"},"​")],-1)),n[42]||(n[42]=a("p",null,[a("img",{src:"https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_hero.png?auto=format&w=1900&dpr=1",alt:""})],-1)),a("p",null,[n[2]||(n[2]=s("如果你看一下 ",-1)),t(p,{href:"https://github.com/DataDog/datadog-agent/"},{default:i(()=>[...n[0]||(n[0]=[s("新的 Datadog Agent",-1)])]),_:1}),n[3]||(n[3]=s("，你可能会注意到大部分代码库是用 Go 编写的，尽管我们用来收集指标的检查仍然是用 Python 编写的。这大概是因为 Datadog Agent 是一个 ",-1)),t(p,{href:"https://docs.python.org/2/extending/embedding.html"},{default:i(()=>[...n[1]||(n[1]=[s("嵌入了",-1)])]),_:1}),n[4]||(n[4]=s(" CPython 解释器的普通 Go 二进制文件，可以在任何时候按需执行 Python 代码。这个过程通过抽象层来透明化，使得你可以编写惯用的 Go 代码而底层运行的是 Python。",-1))]),a("p",null,[t(p,{href:"https://youtu.be/yrEi5ezq2-c"},{default:i(()=>[...n[5]||(n[5]=[s("视频",-1)])]),_:1})]),n[43]||(n[43]=o('<p>在 Go 应用程序中嵌入 Python 的原因有很多：</p><ul><li>它在过渡期间很有用；可以逐步将现有 Python 项目的部分迁移到新语言，而不会在此过程中丢失任何功能。</li><li>你可以复用现有的 Python 软件或库，而无需用新语言重新实现。</li><li>你可以通过加载去执行常规 Python 脚本来动态扩展你软件，甚至在运行时也可以。</li></ul><p>理由还可以列很多，但对于 Datadog Agent 来说，最后一点至关重要：我们希望做到无需重新编译 Agent，或者说编译任何内容就能够执行自定义检查或更改现有检查。</p><p>嵌入 CPython 非常简单，而且文档齐全。解释器本身是用 C 编写的，并且提供了一个 C API 以编程方式来执行底层操作，例如创建对象、导入模块和调用函数。</p><p>在本文中，我们将展示一些代码示例，我们将会在与 Python 交互的同时继续保持 Go 代码的惯用语，但在我们继续之前，我们需要解决一个间隙：嵌入 API 是 C 语言，但我们的主要应用程序是 Go，这怎么可能工作？</p><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_1.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="介绍-cgo" tabindex="-1">介绍 cgo <a class="header-anchor" href="#介绍-cgo" aria-label="Permalink to “介绍 cgo”">​</a></h3>',7)),a("p",null,[n[10]||(n[10]=s("有 ",-1)),t(p,{href:"https://dave.cheney.net/2016/01/18/cgo-is-not-go"},{default:i(()=>[...n[6]||(n[6]=[s("很多好的理由",-1)])]),_:1}),n[11]||(n[11]=s(" 说服你为什么不要在堆栈中引入 cgo，但嵌入 CPython 是你必须这样做的原因。",-1)),t(p,{href:"https://golang.org/cmd/cgo/"},{default:i(()=>[...n[7]||(n[7]=[s("cgo",-1)])]),_:1}),n[12]||(n[12]=s(" 不是语言，也不是编译器。它是 ",-1)),a("ruby",null,[t(p,{href:"https://en.wikipedia.org/wiki/Foreign_function_interface"},{default:i(()=>[...n[8]||(n[8]=[s("外部函数接口",-1)])]),_:1}),n[9]||(n[9]=a("rt",null,"Foreign Function Interface",-1))]),n[13]||(n[13]=s("（FFI），一种让我们可以在 Go 中使用来调用不同语言（特别是 C）编写的函数和服务的机制。",-1))]),n[44]||(n[44]=o(`<p>当我们提起 “cgo” 时，我们实际上指的是 Go 工具链在底层使用的一组工具、库、函数和类型，因此我们可以通过执行 <code>go build</code> 来获取我们的 Go 二进制文件。下面是使用 cgo 的示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// #include &lt;float.h&gt;</span></span>
<span class="line"><span>import &quot;C&quot;</span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(&quot;Max float value of float is&quot;, C.FLT_MAX)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在这种包含头文件情况下，<code>import &quot;C&quot;</code> 指令上方的注释块称为“<ruby>序言<rt>preamble</rt></ruby>”，可以包含实际的 C 代码。导入后，我们可以通过“C”伪包来“跳转”到外部代码，访问常量 <code>FLT_MAX</code>。你可以通过调用 <code>go build</code> 来构建，它就像普通的 Go 一样。</p><p>如果你想查看 cgo 在这背后到底做了什么，可以运行 <code>go build -x</code>。你将看到 “cgo” 工具将被调用以生成一些 C 和 Go 模块，然后将调用 C 和 Go 编译器来构建目标模块，最后链接器将所有内容放在一起。</p>`,4)),a("p",null,[n[15]||(n[15]=s("你可以在 ",-1)),t(p,{href:"https://blog.golang.org/c-go-cgo"},{default:i(()=>[...n[14]||(n[14]=[s("Go 博客",-1)])]),_:1}),n[16]||(n[16]=s(" 上阅读更多有关 cgo 的信息，该文章包含更多的例子以及一些有用的链接来做进一步了解细节。",-1))]),n[45]||(n[45]=o(`<p>现在我们已经了解了 cgo 可以为我们做什么，让我们看看如何使用这种机制运行一些 Python 代码。</p><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_2.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="嵌入-cpython-一个入门指南" tabindex="-1">嵌入 CPython：一个入门指南 <a class="header-anchor" href="#嵌入-cpython-一个入门指南" aria-label="Permalink to “嵌入 CPython：一个入门指南”">​</a></h3><p>从技术上讲，嵌入 CPython 的 Go 程序并没有你想象的那么复杂。事实上，我们只需在运行 Python 代码之前初始化解释器，并在完成后关闭它。请注意，我们在所有示例中使用 Python 2.x，但我们只需做很少的调整就可以应用于 Python 3.x。让我们看一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// #cgo pkg-config: python-2.7</span></span>
<span class="line"><span>// #include &lt;Python.h&gt;</span></span>
<span class="line"><span>import &quot;C&quot;</span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    C.Py_Initialize()</span></span>
<span class="line"><span>    fmt.Println(C.GoString(C.Py_GetVersion()))</span></span>
<span class="line"><span>    C.Py_Finalize()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子做的正是下面 Python 代码要做的事：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>print(sys.version)</span></span></code></pre></div><p>你可以看到我们在序言加入了一个 <code>#cgo</code> 指令；这些指令被会被传递到工具链，让你改变构建工作流程。在这种情况下，我们告诉 cgo 调用 <code>pkg-config</code> 来收集构建和链接名为 <code>python-2.7</code> 的库所需的标志，并将这些标志传递给 C 编译器。如果你的系统中安装了 CPython 开发库和 pkg-config，你只需要运行 <code>go build</code> 来编译上面的示例。</p><p>回到代码，我们使用 <code>Py_Initialize()</code> 和 <code>Py_Finalize()</code> 来初始化和关闭解释器，并使用 <code>Py_GetVersion</code> C 函数来获取嵌入式解释器版本信息的字符串。</p>`,9)),a("p",null,[n[18]||(n[18]=s("如果你想知道，所有我们需要放在一起调用 C 语言 Python API的 cgo 代码都是模板代码。这就是为什么 Datadog Agent 依赖 ",-1)),t(p,{href:"https://github.com/sbinet/go-python"},{default:i(()=>[...n[17]||(n[17]=[s("go-python",-1)])]),_:1}),n[19]||(n[19]=s(" 来完成所有的嵌入操作；该库为 C API 提供了一个 Go 友好的轻量级包，并隐藏了 cgo 细节。这是另一个基本的嵌入式示例，这次使用 go-python：",-1))]),n[46]||(n[46]=o(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    python &quot;github.com/sbinet/go-python&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    python.Initialize()</span></span>
<span class="line"><span>    python.PyRun_SimpleString(&quot;print &#39;hello, world!&#39;&quot;)</span></span>
<span class="line"><span>    python.Finalize()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这看起来更接近普通 Go 代码，不再暴露 cgo，我们可以在访问 Python API 时来回使用 Go 字符串。嵌入式看起来功能强大且对开发人员友好，是时候充分利用解释器了：让我们尝试从磁盘加载 Python 模块。</p><p>在 Python 方面我们不需要任何复杂的东西，无处不在的“hello world” 就可以达到目的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># foo.py</span></span>
<span class="line"><span>def hello():</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Print hello world for fun and profit.</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    print &quot;hello, world!&quot;</span></span></code></pre></div><p>Go 代码稍微复杂一些，但仍然可读：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// main.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;github.com/sbinet/go-python&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    python.Initialize()</span></span>
<span class="line"><span>    defer python.Finalize()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fooModule := python.PyImport_ImportModule(&quot;foo&quot;)</span></span>
<span class="line"><span>    if fooModule == nil {</span></span>
<span class="line"><span>        panic(&quot;Error importing module&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    helloFunc := fooModule.GetAttrString(&quot;hello&quot;)</span></span>
<span class="line"><span>    if helloFunc == nil {</span></span>
<span class="line"><span>        panic(&quot;Error importing function&quot;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The Python function takes no params but when using the C api</span></span>
<span class="line"><span>    // we&#39;re required to send (empty) *args and **kwargs anyways.</span></span>
<span class="line"><span>    helloFunc.Call(python.PyTuple_New(0), python.PyDict_New())</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>构建时，我们需要将 <code>PYTHONPATH</code> 环境变量设置为当前工作目录，以便导入语句能够找到 <code>foo.py</code> 模块。在 shell 中，该命令如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build main.go &amp;&amp; PYTHONPATH=. ./main</span></span>
<span class="line"><span>hello, world!</span></span></code></pre></div><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_3.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="可怕的全局解释器锁" tabindex="-1">可怕的全局解释器锁 <a class="header-anchor" href="#可怕的全局解释器锁" aria-label="Permalink to “可怕的全局解释器锁”">​</a></h3><p>为了嵌入 Python 必须引入 cgo ，这是一种权衡：构建速度会变慢，垃圾收集器不会帮助我们管理外部系统使用的内存，交叉编译也很难。对于一个特定的项目来说，这些问题是否是可以争论的，但我认为有一些不容商量的问题：Go 并发模型。如果我们不能从 goroutine 中运行 Python，那么使用 Go 就没有意义了。</p><p>在处理并发、Python 和 cgo 之前，我们还需要知道一些事情：它就是<ruby>全局解释器锁<rt>Global Interpreter Lock</rt></ruby>，即 GIL。GIL 是语言解释器（CPython 就是其中之一）中广泛采用的一种机制，可防止多个线程同时运行。这意味着 CPython 执行的任何 Python 程序都无法在同一进程中并行运行。并发仍然是可能的，锁是速度、安全性和实现简易性之间的一个很好的权衡，那么，当涉及到嵌入时，为什么这会造成问题呢？</p><p>当一个常规的、非嵌入式的 Python 程序启动时，不涉及 GIL 以避免锁定操作中的无用开销；在某些 Python 代码首次请求生成线程时 GIL 就启动了。对于每个线程，解释器创建一个数据结构来存储当前的相关状态信息并锁定 GIL。当线程完成时，状态被恢复，GIL 被解锁，准备被其他线程使用。</p><p>当我们从 Go 程序运行 Python 时，上述情况都不会自动发生。如果没有 GIL，我们的 Go 程序可以创建多个 Python 线程，这可能会导致竞争条件，从而导致致命的运行时错误，并且很可能出现分段错误导致整个 Go 应用程序崩溃。</p><p>解决方案是在我们从 Go 运行多线程代码时显式调用 GIL；代码并不复杂，因为 C API 提供了我们需要的所有工具。为了更好地暴露这个问题，我们需要写一些受 CPU 限制的 Python 代码。让我们将这些函数添加到前面示例中的 <code>foo.py</code> 模块中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># foo.py</span></span>
<span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def print_odds(limit=10):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Print odds numbers &lt; limit</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    for i in range(limit):</span></span>
<span class="line"><span>        if i%2:</span></span>
<span class="line"><span>            sys.stderr.write(&quot;{}\\n&quot;.format(i))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def print_even(limit=10):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Print even numbers &lt; limit</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    for i in range(limit):</span></span>
<span class="line"><span>        if i%2 == 0:</span></span>
<span class="line"><span>            sys.stderr.write(&quot;{}\\n&quot;.format(i))</span></span></code></pre></div><p>我们将尝试从 Go 并发打印奇数和偶数，使用两个不同的 goroutine（因此涉及线程）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;sync&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;github.com/sbinet/go-python&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    // The following will also create the GIL explicitly</span></span>
<span class="line"><span>    // by calling PyEval_InitThreads(), without waiting</span></span>
<span class="line"><span>    // for the interpreter to do that</span></span>
<span class="line"><span>    python.Initialize()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    var wg sync.WaitGroup</span></span>
<span class="line"><span>    wg.Add(2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fooModule := python.PyImport_ImportModule(&quot;foo&quot;)</span></span>
<span class="line"><span>    odds := fooModule.GetAttrString(&quot;print_odds&quot;)</span></span>
<span class="line"><span>    even := fooModule.GetAttrString(&quot;print_even&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Initialize() has locked the the GIL but at this point we don&#39;t need it</span></span>
<span class="line"><span>    // anymore. We save the current state and release the lock</span></span>
<span class="line"><span>    // so that goroutines can acquire it</span></span>
<span class="line"><span>    state := python.PyEval_SaveThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    go func() {</span></span>
<span class="line"><span>        _gstate := python.PyGILState_Ensure()</span></span>
<span class="line"><span>        odds.Call(python.PyTuple_New(0), python.PyDict_New())</span></span>
<span class="line"><span>        python.PyGILState_Release(_gstate)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        wg.Done()</span></span>
<span class="line"><span>    }()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    go func() {</span></span>
<span class="line"><span>        _gstate := python.PyGILState_Ensure()</span></span>
<span class="line"><span>        even.Call(python.PyTuple_New(0), python.PyDict_New())</span></span>
<span class="line"><span>        python.PyGILState_Release(_gstate)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        wg.Done()</span></span>
<span class="line"><span>    }()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    wg.Wait()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // At this point we know we won&#39;t need Python anymore in this</span></span>
<span class="line"><span>    // program, we can restore the state and lock the GIL to perform</span></span>
<span class="line"><span>    // the final operations before exiting.</span></span>
<span class="line"><span>    python.PyEval_RestoreThread(state)</span></span>
<span class="line"><span>    python.Finalize()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在阅读示例时，你可能会注意到一个模式，该模式将成为我们运行嵌入式 Python 代码的习惯写法：</p><ol><li>保存状态并锁定 GIL。</li><li>执行 Python。</li><li>恢复状态并解锁 GIL。</li></ol><p>代码应该很简单，但我们想指出一个微妙的细节：请注意，尽管借用了 GIL 执行，有时我们通过调用 <code>PyEval_SaveThread()</code> 和 <code>PyEval_RestoreThread()</code> 来操作 GIL，有时（查看 goroutines 里面）我们对 <code>PyGILState_Ensure()</code> 和 <code>PyGILState_Release()</code> 来做同样的事情。</p><p>我们说过当从 Python 操作多线程时，解释器负责创建存储当前状态所需的数据结构，但是当同样的事情发生在 C API 时，我们来负责处理。</p><p>当我们用 go-python 初始化解释器时，我们是在 Python 上下文中操作的。因此，当调用 <code>PyEval_InitThreads()</code> 时，它会初始化数据结构并锁定 GIL。我们可以使用 <code>PyEval_SaveThread()</code> 和 <code>PyEval_RestoreThread()</code> 对已经存在的状态进行操作。</p><p>在 goroutines 中，我们从 Go 上下文操作，我们需要显式创建状态并在完成后将其删除，这就是 <code>PyGILState_Ensure()</code> 和 <code>PyGILState_Release()</code> 为我们所做的。</p><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_4.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="释放-gopher" tabindex="-1">释放 Gopher <a class="header-anchor" href="#释放-gopher" aria-label="Permalink to “释放 Gopher”">​</a></h3><p>在这一点上，我们知道如何处理在嵌入式解释器中执行 Python 的多线程 Go 代码，但在 GIL 之后，另一个挑战即将来临：Go 调度程序。</p>`,27)),a("p",null,[n[21]||(n[21]=s("当一个 goroutine 启动时，它被安排在可用的 ",-1)),n[22]||(n[22]=a("code",null,"GOMAXPROCS",-1)),n[23]||(n[23]=s(" 线程之一上执行，",-1)),t(p,{href:"https://morsmachine.dk/go-scheduler"},{default:i(()=>[...n[20]||(n[20]=[s("参见此处",-1)])]),_:1}),n[24]||(n[24]=s(" 可了解有关该主题的更多详细信息。如果一个 goroutine 碰巧执行了系统调用或调用 C 代码，当前线程会将线程队列中等待运行的其他 goroutine 移交给另一个线程，以便它们有更好的机会运行； 当前 goroutine 被暂停，等待系统调用或 C 函数返回。当这种情况发生时，线程会尝试恢复暂停的 goroutine，但如果这不可能，它会要求 Go 运行时找到另一个线程来完成 goroutine 并进入睡眠状态。 goroutine 最后被安排给另一个线程，它就完成了。",-1))]),n[47]||(n[47]=o(`<p>考虑到这一点，让我们看看当一个 goroutine 被移动到一个新线程时，运行一些 Python 代码的 goroutine 会发生什么：</p><ol><li>我们的 goroutine 启动，执行 C 调用并暂停。GIL 被锁定。</li><li>当 C 调用返回时，当前线程尝试恢复 goroutine，但失败了。</li><li>当前线程告诉 Go 运行时寻找另一个线程来恢复我们的 goroutine。</li><li>Go 调度器找到一个可用线程并恢复 goroutine。</li><li>goroutine 快完成了，并在返回之前尝试解锁 GIL。</li><li>当前状态中存储的线程 ID 来自原线程，与当前线程的 ID 不同。</li><li>崩溃！</li></ol><p>所幸，我们可以通过从 goroutine 中调用运行时包中的 <code>LockOSThread</code> 函数来强制 Go runtime 始终保持我们的 goroutine 在同一线程上运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go func() {</span></span>
<span class="line"><span>    runtime.LockOSThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _gstate := python.PyGILState_Ensure()</span></span>
<span class="line"><span>    odds.Call(python.PyTuple_New(0), python.PyDict_New())</span></span>
<span class="line"><span>    python.PyGILState_Release(_gstate)</span></span>
<span class="line"><span>    wg.Done()</span></span>
<span class="line"><span>}()</span></span></code></pre></div><p>这会干扰调度器并可能引入一些开销，但这是我们愿意付出的代价。</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>为了嵌入 Python，Datadog Agent 必须接受一些权衡：</p><ul><li>cgo 引入的开销。</li><li>手动处理 GIL 的任务。</li><li>在执行期间将 goroutine 绑定到同一线程的限制。</li></ul><p>为了能方便在 Go 中运行 Python 检查，我们很乐意接受其中的每一项。但通过意识到这些权衡，我们能够最大限度地减少它们的影响，除了为支持 Python 而引入的其他限制，我们没有对策来控制潜在问题：</p><ul><li>构建是自动化和可配置的，因此开发人员仍然需要拥有与 <code>go build</code> 非常相似的东西。</li><li>Agent 的轻量级版本，可以使用 Go 构建标签，完全剥离 Python 支持。</li><li>这样的版本仅依赖于在 Agent 本身硬编码的核心检查（主要是系统和网络检查），但没有 cgo 并且可以交叉编译。</li></ul>`,10)),a("p",null,[n[26]||(n[26]=s("我们将在未来重新评估我们的选择，并决定是否仍然值得保留 cgo；我们甚至可以重新考虑整个 Python 是否仍然值得，等待 ",-1)),t(p,{href:"https://golang.org/pkg/plugin/"},{default:i(()=>[...n[25]||(n[25]=[s("Go 插件包",-1)])]),_:1}),n[27]||(n[27]=s(" 成熟到足以支持我们的用例。但就目前而言，嵌入式 Python 运行良好，从旧代理过渡到新代理再简单不过了。",-1))]),n[48]||(n[48]=a("p",null,"你是一个喜欢混合不同编程语言的多语言者吗？你喜欢了解语言的内部工作原理以提高你的代码性能吗？",-1)),n[49]||(n[49]=a("hr",null,null,-1)),a("p",null,[n[29]||(n[29]=s("via: ",-1)),t(p,{href:"https://www.datadoghq.com/blog/engineering/cgo-and-python/"},{default:i(()=>[...n[28]||(n[28]=[s("https://www.datadoghq.com/blog/engineering/cgo-and-python/",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("作者：",-1)),t(p,{href:"https://github.com/masci"},{default:i(()=>[...n[30]||(n[30]=[s("Massimiliano Pippi",-1)])]),_:1}),n[34]||(n[34]=s(" 译者：",-1)),t(p,{href:"https://github.com/Zioyi"},{default:i(()=>[...n[31]||(n[31]=[s("Zioyi",-1)])]),_:1}),n[35]||(n[35]=s(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[32]||(n[32]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[38]||(n[38]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[36]||(n[36]=[s("LCTT",-1)])]),_:1}),n[39]||(n[39]=s(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...n[37]||(n[37]=[s("Linux中国",-1)])]),_:1}),n[40]||(n[40]=s(" 荣誉推出",-1))])])}const C=e(d,[["render",h]]);export{k as __pageData,C as default};
