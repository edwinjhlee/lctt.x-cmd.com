import{_ as l,a0 as e,w as r,s as g,I as a,x as s,a1 as t,A as i,ao as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"如何在 Go 中嵌入 Python | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Go 中嵌入 Python | LCTT (202107) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Go 中嵌入 Python | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Go 中嵌入 Python | LCTT (202107) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202107/20180416 Cgo and Python","title":"如何在 Go 中嵌入 Python","tag":"202107","desc":""},"relativePath":"202107/20180416 Cgo and Python.md","filePath":"[post].md"}'),d={name:"202107/20180416 Cgo and Python.md"};function h(u,n,c,y,f,m){const p=e("Link");return r(),g("div",null,[n[41]||(n[41]=a("h1",{id:"如何在-go-中嵌入-python",tabindex:"-1"},[s("如何在 Go 中嵌入 Python "),a("a",{class:"header-anchor",href:"#如何在-go-中嵌入-python","aria-label":"Permalink to “如何在 Go 中嵌入 Python”"},"​")],-1)),n[42]||(n[42]=a("p",null,[a("img",{src:"https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_hero.png?auto=format&w=1900&dpr=1",alt:""})],-1)),a("p",null,[n[2]||(n[2]=s("如果你看一下 ",-1)),t(p,{href:"https://github.com/DataDog/datadog-agent/"},{default:i(()=>[...n[0]||(n[0]=[s("新的 Datadog Agent",-1)])]),_:1}),n[3]||(n[3]=s("，你可能會注意到大部分代碼庫是用 Go 編寫的，儘管我們用來收集指標的檢查仍然是用 Python 編寫的。這大概是因為 Datadog Agent 是一個 ",-1)),t(p,{href:"https://docs.python.org/2/extending/embedding.html"},{default:i(()=>[...n[1]||(n[1]=[s("嵌入了",-1)])]),_:1}),n[4]||(n[4]=s(" CPython 解釋器的普通 Go 二進制文件，可以在任何時候按需執行 Python 代碼。這個過程通過抽象層來透明化，使得你可以編寫慣用的 Go 代碼而底層運行的是 Python。",-1))]),a("p",null,[t(p,{href:"https://youtu.be/yrEi5ezq2-c"},{default:i(()=>[...n[5]||(n[5]=[s("視頻",-1)])]),_:1})]),n[43]||(n[43]=o('<p>在 Go 應用程序中嵌入 Python 的原因有很多：</p><ul><li>它在過渡期間很有用；可以逐步將現有 Python 項目的部分遷移到新語言，而不會在此過程中丟失任何功能。</li><li>你可以複用現有的 Python 軟件或庫，而無需用新語言重新實現。</li><li>你可以通過加載去執行常規 Python 腳本來動態擴展你軟件，甚至在運行時也可以。</li></ul><p>理由還可以列很多，但對於 Datadog Agent 來説，最後一點至關重要：我們希望做到無需重新編譯 Agent，或者説編譯任何內容就能夠執行自定義檢查或更改現有檢查。</p><p>嵌入 CPython 非常簡單，而且文檔齊全。解釋器本身是用 C 編寫的，並且提供了一個 C API 以編程方式來執行底層操作，例如創建對象、導入模組和調用函數。</p><p>在本文中，我們將展示一些代碼示例，我們將會在與 Python 交互的同時繼續保持 Go 代碼的慣用語，但在我們繼續之前，我們需要解決一個間隙：嵌入 API 是 C 語言，但我們的主要應用程序是 Go，這怎麼可能工作？</p><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_1.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="介紹-cgo" tabindex="-1">介紹 cgo <a class="header-anchor" href="#介紹-cgo" aria-label="Permalink to “介紹 cgo”">​</a></h3>',7)),a("p",null,[n[10]||(n[10]=s("有 ",-1)),t(p,{href:"https://dave.cheney.net/2016/01/18/cgo-is-not-go"},{default:i(()=>[...n[6]||(n[6]=[s("很多好的理由",-1)])]),_:1}),n[11]||(n[11]=s(" 説服你為什麼不要在堆棧中引入 cgo，但嵌入 CPython 是你必須這樣做的原因。",-1)),t(p,{href:"https://golang.org/cmd/cgo/"},{default:i(()=>[...n[7]||(n[7]=[s("cgo",-1)])]),_:1}),n[12]||(n[12]=s(" 不是語言，也不是編譯器。它是 ",-1)),a("ruby",null,[t(p,{href:"https://en.wikipedia.org/wiki/Foreign_function_interface"},{default:i(()=>[...n[8]||(n[8]=[s("外部函數接口",-1)])]),_:1}),n[9]||(n[9]=a("rt",null,"Foreign Function Interface",-1))]),n[13]||(n[13]=s("（FFI），一種讓我們可以在 Go 中使用來調用不同語言（特別是 C）編寫的函數和服務的機制。",-1))]),n[44]||(n[44]=o(`<p>當我們提起 “cgo” 時，我們實際上指的是 Go 工具鏈在底層使用的一組工具、庫、函數和類型，因此我們可以通過執行 <code>go build</code> 來獲取我們的 Go 二進制文件。下面是使用 cgo 的示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// #include &lt;float.h&gt;</span></span>
<span class="line"><span>import &quot;C&quot;</span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    fmt.Println(&quot;Max float value of float is&quot;, C.FLT_MAX)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這種包含頭文件情況下，<code>import &quot;C&quot;</code> 指令上方的註釋塊稱為“<ruby>序言<rt>preamble</rt></ruby>”，可以包含實際的 C 代碼。導入後，我們可以通過“C”偽包來“跳轉”到外部代碼，訪問常量 <code>FLT_MAX</code>。你可以通過調用 <code>go build</code> 來構建，它就像普通的 Go 一樣。</p><p>如果你想查看 cgo 在這背後到底做了什麼，可以運行 <code>go build -x</code>。你將看到 “cgo” 工具將被調用以生成一些 C 和 Go 模組，然後將調用 C 和 Go 編譯器來構建目標模組，最後鏈接器將所有內容放在一起。</p>`,4)),a("p",null,[n[15]||(n[15]=s("你可以在 ",-1)),t(p,{href:"https://blog.golang.org/c-go-cgo"},{default:i(()=>[...n[14]||(n[14]=[s("Go Blog",-1)])]),_:1}),n[16]||(n[16]=s(" 上閲讀更多有關 cgo 的信息，該文章包含更多的例子以及一些有用的鏈接來做進一步瞭解細節。",-1))]),n[45]||(n[45]=o(`<p>現在我們已經瞭解了 cgo 可以為我們做什麼，讓我們看看如何使用這種機制運行一些 Python 代碼。</p><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_2.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="嵌入-cpython-一個入門指南" tabindex="-1">嵌入 CPython：一個入門指南 <a class="header-anchor" href="#嵌入-cpython-一個入門指南" aria-label="Permalink to “嵌入 CPython：一個入門指南”">​</a></h3><p>從技術上講，嵌入 CPython 的 Go 程序並沒有你想像的那麼複雜。事實上，我們只需在運行 Python 代碼之前初始化解釋器，並在完成後關閉它。請注意，我們在所有示例中使用 Python 2.x，但我們只需做很少的調整就可以應用於 Python 3.x。讓我們看一個例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>上面的例子做的正是下面 Python 代碼要做的事：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>print(sys.version)</span></span></code></pre></div><p>你可以看到我們在序言加入了一個 <code>#cgo</code> 指令；這些指令被會被傳遞到工具鏈，讓你改變構建工作流程。在這種情況下，我們告訴 cgo 調用 <code>pkg-config</code> 來收集構建和鏈接名為 <code>python-2.7</code> 的庫所需的標誌，並將這些標誌傳遞給 C 編譯器。如果你的系統中安裝了 CPython 開發庫和 pkg-config，你只需要運行 <code>go build</code> 來編譯上面的示例。</p><p>回到代碼，我們使用 <code>Py_Initialize()</code> 和 <code>Py_Finalize()</code> 來初始化和關閉解釋器，並使用 <code>Py_GetVersion</code> C 函數來獲取嵌入式解釋器版本信息的字符串。</p>`,9)),a("p",null,[n[18]||(n[18]=s("如果你想知道，所有我們需要放在一起調用 C 語言 Python API的 cgo 代碼都是模板代碼。這就是為什麼 Datadog Agent 依賴 ",-1)),t(p,{href:"https://github.com/sbinet/go-python"},{default:i(()=>[...n[17]||(n[17]=[s("go-python",-1)])]),_:1}),n[19]||(n[19]=s(" 來完成所有的嵌入操作；該庫為 C API 提供了一個 Go 友好的輕量級包，並隱藏了 cgo 細節。這是另一個基本的嵌入式示例，這次使用 go-python：",-1))]),n[46]||(n[46]=o(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    python &quot;github.com/sbinet/go-python&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    python.Initialize()</span></span>
<span class="line"><span>    python.PyRun_SimpleString(&quot;print &#39;hello, world!&#39;&quot;)</span></span>
<span class="line"><span>    python.Finalize()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這看起來更接近普通 Go 代碼，不再暴露 cgo，我們可以在訪問 Python API 時來回使用 Go 字符串。嵌入式看起來功能強大且對開發人員友好，是時候充分利用解釋器了：讓我們嘗試從磁盤加載 Python 模組。</p><p>在 Python 方面我們不需要任何複雜的東西，無處不在的“hello world” 就可以達到目的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># foo.py</span></span>
<span class="line"><span>def hello():</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Print hello world for fun and profit.</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    print &quot;hello, world!&quot;</span></span></code></pre></div><p>Go 代碼稍微複雜一些，但仍然可讀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// main.go</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>構建時，我們需要將 <code>PYTHONPATH</code> 環境變量設置為當前工作目錄，以便導入語句能夠找到 <code>foo.py</code> 模組。在 shell 中，該命令如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ go build main.go &amp;&amp; PYTHONPATH=. ./main</span></span>
<span class="line"><span>hello, world!</span></span></code></pre></div><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_3.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="可怕的全局解釋器鎖" tabindex="-1">可怕的全局解釋器鎖 <a class="header-anchor" href="#可怕的全局解釋器鎖" aria-label="Permalink to “可怕的全局解釋器鎖”">​</a></h3><p>為了嵌入 Python 必須引入 cgo ，這是一種權衡：構建速度會變慢，垃圾收集器不會幫助我們管理外部系統使用的內存，交叉編譯也很難。對於一個特定的項目來説，這些問題是否是可以爭論的，但我認為有一些不容商量的問題：Go 併發模型。如果我們不能從 goroutine 中運行 Python，那麼使用 Go 就沒有意義了。</p><p>在處理併發、Python 和 cgo 之前，我們還需要知道一些事情：它就是<ruby>全局解釋器鎖<rt>Global Interpreter Lock</rt></ruby>，即 GIL。GIL 是語言解釋器（CPython 就是其中之一）中廣泛採用的一種機制，可防止多個線程同時運行。這意味着 CPython 執行的任何 Python 程序都無法在同一進程中並行運行。併發仍然是可能的，鎖是速度、安全性和實現簡易性之間的一個很好的權衡，那麼，當涉及到嵌入時，為什麼這會造成問題呢？</p><p>當一個常規的、非嵌入式的 Python 程序啓動時，不涉及 GIL 以避免鎖定操作中的無用開銷；在某些 Python 代碼首次請求生成線程時 GIL 就啓動了。對於每個線程，解釋器創建一個數據結構來存儲當前的相關狀態信息並鎖定 GIL。當線程完成時，狀態被恢復，GIL 被解鎖，準備被其他線程使用。</p><p>當我們從 Go 程序運行 Python 時，上述情況都不會自動發生。如果沒有 GIL，我們的 Go 程序可以創建多個 Python 線程，這可能會導致競爭條件，從而導致致命的運行時錯誤，並且很可能出現分段錯誤導致整個 Go 應用程序崩潰。</p><p>解決方案是在我們從 Go 運行多線程代碼時顯式調用 GIL；代碼並不複雜，因為 C API 提供了我們需要的所有工具。為了更好地暴露這個問題，我們需要寫一些受 CPU 限制的 Python 代碼。讓我們將這些函數添加到前面示例中的 <code>foo.py</code> 模組中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># foo.py</span></span>
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
<span class="line"><span>            sys.stderr.write(&quot;{}\\n&quot;.format(i))</span></span></code></pre></div><p>我們將嘗試從 Go 併發打印奇數和偶數，使用兩個不同的 goroutine（因此涉及線程）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在閲讀示例時，你可能會注意到一個模式，該模式將成為我們運行嵌入式 Python 代碼的習慣寫法：</p><ol><li>保存狀態並鎖定 GIL。</li><li>執行 Python。</li><li>恢復狀態並解鎖 GIL。</li></ol><p>代碼應該很簡單，但我們想指出一個微妙的細節：請注意，儘管借用了 GIL 執行，有時我們通過調用 <code>PyEval_SaveThread()</code> 和 <code>PyEval_RestoreThread()</code> 來操作 GIL，有時（查看 goroutines 裏面）我們對 <code>PyGILState_Ensure()</code> 和 <code>PyGILState_Release()</code> 來做同樣的事情。</p><p>我們説過當從 Python 操作多線程時，解釋器負責創建存儲當前狀態所需的數據結構，但是當同樣的事情發生在 C API 時，我們來負責處理。</p><p>當我們用 go-python 初始化解釋器時，我們是在 Python 上下文中操作的。因此，當調用 <code>PyEval_InitThreads()</code> 時，它會初始化數據結構並鎖定 GIL。我們可以使用 <code>PyEval_SaveThread()</code> 和 <code>PyEval_RestoreThread()</code> 對已經存在的狀態進行操作。</p><p>在 goroutines 中，我們從 Go 上下文操作，我們需要顯式創建狀態並在完成後將其刪除，這就是 <code>PyGILState_Ensure()</code> 和 <code>PyGILState_Release()</code> 為我們所做的。</p><p><img src="https://datadog-prod.imgix.net/img/blog/engineering/cgo-and-python/cgo_python_divider_4.png?auto=format&amp;fit=max&amp;w=847" alt=""></p><h3 id="釋放-gopher" tabindex="-1">釋放 Gopher <a class="header-anchor" href="#釋放-gopher" aria-label="Permalink to “釋放 Gopher”">​</a></h3><p>在這一點上，我們知道如何處理在嵌入式解釋器中執行 Python 的多線程 Go 代碼，但在 GIL 之後，另一個挑戰即將來臨：Go 調度程序。</p>`,27)),a("p",null,[n[21]||(n[21]=s("當一個 goroutine 啓動時，它被安排在可用的 ",-1)),n[22]||(n[22]=a("code",null,"GOMAXPROCS",-1)),n[23]||(n[23]=s(" 線程之一上執行，",-1)),t(p,{href:"https://morsmachine.dk/go-scheduler"},{default:i(()=>[...n[20]||(n[20]=[s("參見此處",-1)])]),_:1}),n[24]||(n[24]=s(" 可瞭解有關該主題的更多詳細信息。如果一個 goroutine 碰巧執行了系統調用或調用 C 代碼，當前線程會將線程隊列中等待運行的其他 goroutine 移交給另一個線程，以便它們有更好的機會運行； 當前 goroutine 被暫停，等待系統調用或 C 函數返回。當這種情況發生時，線程會嘗試恢復暫停的 goroutine，但如果這不可能，它會要求 Go 運行時找到另一個線程來完成 goroutine 並進入睡眠狀態。 goroutine 最後被安排給另一個線程，它就完成了。",-1))]),n[47]||(n[47]=o(`<p>考慮到這一點，讓我們看看當一個 goroutine 被移動到一個新線程時，運行一些 Python 代碼的 goroutine 會發生什麼：</p><ol><li>我們的 goroutine 啓動，執行 C 調用並暫停。GIL 被鎖定。</li><li>當 C 調用返回時，當前線程嘗試恢復 goroutine，但失敗了。</li><li>當前線程告訴 Go 運行時尋找另一個線程來恢復我們的 goroutine。</li><li>Go 調度器找到一個可用線程並恢復 goroutine。</li><li>goroutine 快完成了，並在返回之前嘗試解鎖 GIL。</li><li>當前狀態中存儲的線程 ID 來自原線程，與當前線程的 ID 不同。</li><li>崩潰！</li></ol><p>所幸，我們可以通過從 goroutine 中調用運行時包中的 <code>LockOSThread</code> 函數來強制 Go runtime 始終保持我們的 goroutine 在同一線程上運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>go func() {</span></span>
<span class="line"><span>    runtime.LockOSThread()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _gstate := python.PyGILState_Ensure()</span></span>
<span class="line"><span>    odds.Call(python.PyTuple_New(0), python.PyDict_New())</span></span>
<span class="line"><span>    python.PyGILState_Release(_gstate)</span></span>
<span class="line"><span>    wg.Done()</span></span>
<span class="line"><span>}()</span></span></code></pre></div><p>這會干擾調度器並可能引入一些開銷，但這是我們願意付出的代價。</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>為了嵌入 Python，Datadog Agent 必須接受一些權衡：</p><ul><li>cgo 引入的開銷。</li><li>手動處理 GIL 的任務。</li><li>在執行期間將 goroutine 綁定到同一線程的限制。</li></ul><p>為了能方便在 Go 中運行 Python 檢查，我們很樂意接受其中的每一項。但通過意識到這些權衡，我們能夠最大限度地減少它們的影響，除了為支持 Python 而引入的其他限制，我們沒有對策來控制潛在問題：</p><ul><li>構建是自動化和可配置的，因此開發人員仍然需要擁有與 <code>go build</code> 非常相似的東西。</li><li>Agent 的輕量級版本，可以使用 Go 構建標籤，完全剝離 Python 支持。</li><li>這樣的版本僅依賴於在 Agent 本身硬編碼的核心檢查（主要是系統和網絡檢查），但沒有 cgo 並且可以交叉編譯。</li></ul>`,10)),a("p",null,[n[26]||(n[26]=s("我們將在未來重新評估我們的選擇，並決定是否仍然值得保留 cgo；我們甚至可以重新考慮整個 Python 是否仍然值得，等待 ",-1)),t(p,{href:"https://golang.org/pkg/plugin/"},{default:i(()=>[...n[25]||(n[25]=[s("Go 插件包",-1)])]),_:1}),n[27]||(n[27]=s(" 成熟到足以支持我們的用例。但就目前而言，嵌入式 Python 運行良好，從舊代理過渡到新代理再簡單不過了。",-1))]),n[48]||(n[48]=a("p",null,"你是一個喜歡混合不同編程語言的多語言者嗎？你喜歡瞭解語言的內部工作原理以提高你的代碼性能嗎？",-1)),n[49]||(n[49]=a("hr",null,null,-1)),a("p",null,[n[29]||(n[29]=s("via: ",-1)),t(p,{href:"https://www.datadoghq.com/blog/engineering/cgo-and-python/"},{default:i(()=>[...n[28]||(n[28]=[s("https://www.datadoghq.com/blog/engineering/cgo-and-python/",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("作者：",-1)),t(p,{href:"https://github.com/masci"},{default:i(()=>[...n[30]||(n[30]=[s("Massimiliano Pippi",-1)])]),_:1}),n[34]||(n[34]=s(" 譯者：",-1)),t(p,{href:"https://github.com/Zioyi"},{default:i(()=>[...n[31]||(n[31]=[s("Zioyi",-1)])]),_:1}),n[35]||(n[35]=s(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:i(()=>[...n[32]||(n[32]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[38]||(n[38]=s("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[36]||(n[36]=[s("LCTT",-1)])]),_:1}),n[39]||(n[39]=s(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:i(()=>[...n[37]||(n[37]=[s("Linux中國",-1)])]),_:1}),n[40]||(n[40]=s(" 榮譽推出",-1))])])}const C=l(d,[["render",h]]);export{k as __pageData,C as default};
