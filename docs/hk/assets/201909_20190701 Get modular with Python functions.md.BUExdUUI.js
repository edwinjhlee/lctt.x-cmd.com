import{_ as t,a0 as l,w as o,s as r,I as a,x as n,a1 as e,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"使用 Python 函數進行模組化 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Python 函數進行模組化 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Python 函數進行模組化 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Python 函數進行模組化 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190701 Get modular with Python functions","title":"使用 Python 函數進行模組化","tag":"201909","desc":""},"relativePath":"201909/20190701 Get modular with Python functions.md","filePath":"[post].md"}'),d={name:"201909/20190701 Get modular with Python functions.md"};function h(m,s,u,g,k,y){const p=l("Link");return o(),r("div",null,[s[21]||(s[21]=a("h1",{id:"使用-python-函數進行模組化",tabindex:"-1"},[n("使用 Python 函數進行模組化 "),a("a",{class:"header-anchor",href:"#使用-python-函數進行模組化","aria-label":"Permalink to “使用 Python 函數進行模組化”"},"​")],-1)),s[22]||(s[22]=a("blockquote",null,[a("p",null,"使用 Python 函數來最大程度地減少重複任務編碼工作量。")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201909/01/234309ja7ooanopazo3o2m.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("你是否對函數、類、方法、庫和模組等花哨的編程術語感到困惑？你是否在與變量作用域鬥爭？無論你是自學成才的還是經過正式培訓的程序員，代碼的模組化都會令人困惑。但是類和庫鼓勵模組化代碼，因為模組化代碼意味着只需構建一個多用途代碼塊集合，就可以在許多項目中使用它們來減少編碼工作量。換句話説，如果你按照本文對 ",-1)),e(p,{href:"https://www.python.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Python",-1)])]),_:1}),s[2]||(s[2]=n(" 函數的研究，你將找到更聰明的工作方法，這意味着更少的工作。",-1))]),a("p",null,[s[4]||(s[4]=n("本文假定你對 Python 很熟（LCTT 譯註：稍微熟悉就可以），並且可以編寫和運行一個簡單的腳本。如果你還沒有使用過 Python，請首先閲讀我的文章：",-1)),e(p,{href:"https://opensource.com/article/17/10/python-10"},{default:i(()=>[...s[3]||(s[3]=[n("Python 簡介",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),s[24]||(s[24]=c(`<h3 id="函數" tabindex="-1">函數 <a class="header-anchor" href="#函數" aria-label="Permalink to “函數”">​</a></h3><p>函數是邁向模組化過程中重要的一步，因為它們是形式化的重複方法。如果在你的程序中，有一個任務需要反覆執行，那麼你可以將代碼放入一個函數中，根據需要隨時調用該函數。這樣，你只需編寫一次代碼，就可以隨意使用它。</p><p>以下一個簡單函數的示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def Timer():</span></span>
<span class="line"><span>    print(&quot;Time is &quot; + str(time.time() ))</span></span></code></pre></div><p>創建一個名為 <code>mymodularity</code> 的目錄，並將以上函數代碼保存為該目錄下的 <code>timestamp.py</code>。</p><p>除了這個函數，在 <code>mymodularity</code> 目錄中創建一個名為 <code>__init__.py</code> 的文件，你可以在文件管理器或 bash shell 中執行此操作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ touch mymodularity/__init__.py</span></span></code></pre></div><p>現在，你已經創建了屬於你自己的 Python 庫（Python 中稱為“模組”），名為 <code>mymodularity</code>。它不是一個特別有用的模組，因為它所做的只是導入 <code>time</code> 模組並打印一個時間戳，但這只是一個開始。</p><p>要使用你的函數，像對待任何其他 Python 模組一樣對待它。以下是一個小應用，它使用你的 <code>mymodularity</code> 軟件包來測試 Python <code>sleep()</code> 函數的準確性。將此文件保存為 <code>sleeptest.py</code>，注意要在 <code>mymodularity</code> 文件夾 <em>之外</em>，因為如果你將它保存在 <code>mymodularity</code> <em>裏面</em>，那麼它將成為你的包中的一個模組，你肯定不希望這樣。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Testing Python sleep()...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># modularity</span></span>
<span class="line"><span>timestamp.Timer()</span></span>
<span class="line"><span>time.sleep(3)</span></span>
<span class="line"><span>timestamp.Timer()</span></span></code></pre></div><p>在這個簡單的腳本中，你從 <code>mymodularity</code> 包中調用 <code>timestamp</code> 模組兩次。從包中導入模組時，通常的語法是從包中導入你所需的模組，然後使用 <em>模組名稱 + 一個點 + 要調用的函數名</em>（例如 <code>timestamp.Timer()</code>）。</p><p>你調用了兩次 <code>Timer()</code> 函數，所以如果你的 <code>timestamp</code> 模組比這個簡單的例子複雜些，那麼你將節省大量重複代碼。</p><p>保存文件並運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./sleeptest.py</span></span>
<span class="line"><span>Testing Python sleep()...</span></span>
<span class="line"><span>Time is 1560711266.1526039</span></span>
<span class="line"><span>Time is 1560711269.1557732</span></span></code></pre></div><p>根據測試，Python 中的 <code>sleep</code> 函數非常準確：在三秒鐘等待之後，時間戳成功且正確地增加了 3，在微秒單位上差距很小。</p><p>Python 庫的結構看起來可能令人困惑，但其實它並不是什麼魔法。Python <em>被編程</em> 為一個包含 Python 代碼的目錄，並附帶一個 <code>__init__.py</code> 文件，那麼這個目錄就會被當作一個包，並且 Python 會首先在當前目錄中查找可用模組。這就是為什麼語句 <code>from mymodularity import timestamp</code> 有效的原因：Python 在當前目錄查找名為 <code>mymodularity</code> 的目錄，然後查找 <code>timestamp.py</code> 文件。</p><p>你在這個例子中所做的功能和以下這個非模組化的版本是一樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span>from mymodularity import timestamp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(&quot;Testing Python sleep()...&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># no modularity</span></span>
<span class="line"><span>print(&quot;Time is &quot; + str(time.time() ) )</span></span>
<span class="line"><span>time.sleep(3)</span></span>
<span class="line"><span>print(&quot;Time is &quot; + str(time.time() ) )</span></span></code></pre></div><p>對於這樣一個簡單的例子，其實沒有必要以這種方式編寫測試，但是對於編寫自己的模組來説，最佳實踐是你的代碼是通用的，可以將它重用於其他項目。</p><p>通過在調用函數時傳遞信息，可以使代碼更通用。例如，假設你想要使用模組來測試的不是 <em>系統</em> 的 <code>sleep</code> 函數，而是 <em>用户自己實現</em> 的 <code>sleep</code> 函數，更改 <code>timestamp</code> 代碼，使它接受一個名為 <code>msg</code> 的傳入變量，它將是一個字符串，控制每次調用 <code>timestamp</code> 時如何顯示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新代碼</span></span>
<span class="line"><span>def Timer(msg):</span></span>
<span class="line"><span>    print(str(msg) + str(time.time() ) )</span></span></code></pre></div><p>現在函數比以前更抽象了。它仍會打印時間戳，但是它為用户打印的內容 <code>msg</code> 還是未定義的。這意味着你需要在調用函數時定義它。</p><p><code>Timer</code> 函數接受的 <code>msg</code> 參數是隨便命名的，你可以使用參數 <code>m</code>、<code>message</code> 或 <code>text</code>，或是任何對你來説有意義的名稱。重要的是，當調用 <code>timestamp.Timer</code> 函數時，它接收一個文本作為其輸入，將接收到的任何內容放入 <code>msg</code> 變量中，並使用該變量完成任務。</p><p>以下是一個測試測試用户正確感知時間流逝能力的新程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>timestamp.Timer(&quot;You slept until &quot;)</span></span></code></pre></div><p>將你的新程序保存為 <code>response.py</code>，運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./response.py</span></span>
<span class="line"><span>Press the RETURN key. Count to 3, and press RETURN again.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Started timer at 1560714482.3772075</span></span>
<span class="line"><span>Count to 3...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You slept until 1560714484.1628013</span></span></code></pre></div><h3 id="函數和所需參數" tabindex="-1">函數和所需參數 <a class="header-anchor" href="#函數和所需參數" aria-label="Permalink to “函數和所需參數”">​</a></h3><p>新版本的 <code>timestamp</code> 模組現在 <em>需要</em> 一個 <code>msg</code> 參數。這很重要，因為你的第一個應用程序將無法運行，因為它沒有將字符串傳遞給 <code>timestamp.Timer</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./sleeptest.py</span></span>
<span class="line"><span>Testing Python sleep()...</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./sleeptest.py&quot;, line 8, in &amp;lt;module&amp;gt;</span></span>
<span class="line"><span>    timestamp.Timer()</span></span>
<span class="line"><span>TypeError: Timer() missing 1 required positional argument: &#39;msg&#39;</span></span></code></pre></div><p>你能修復你的 <code>sleeptest.py</code> 應用程序，以便它能夠與更新後的模組一起正確運行嗎？</p><h3 id="變量和函數" tabindex="-1">變量和函數 <a class="header-anchor" href="#變量和函數" aria-label="Permalink to “變量和函數”">​</a></h3><p>通過設計，函數限制了變量的範圍。換句話説，如果在函數內創建一個變量，那麼這個變量 <em>只</em> 在這個函數內起作用。如果你嘗試在函數外部使用函數內部出現的變量，就會發生錯誤。</p><p>下面是對 <code>response.py</code> 應用程序的修改，嘗試從 <code>timestamp.Timer()</code> 函數外部打印 <code>msg</code> 變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>print(msg)</span></span></code></pre></div><p>試着運行它，查看錯誤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./response.py</span></span>
<span class="line"><span>Press the RETURN key. Count to 3, and press RETURN again.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Started timer at 1560719527.7862902</span></span>
<span class="line"><span>Count to 3...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You slept for 1560719528.135406</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;./response.py&quot;, line 15, in &amp;lt;module&amp;gt;</span></span>
<span class="line"><span>    print(msg)</span></span>
<span class="line"><span>NameError: name &#39;msg&#39; is not defined</span></span></code></pre></div><p>應用程序返回一個 <code>NameError</code> 消息，因為沒有定義 <code>msg</code>。這看起來令人困惑，因為你編寫的代碼定義了 <code>msg</code>，但你對代碼的瞭解比 Python 更深入。調用函數的代碼，不管函數是出現在同一個文件中，還是打包為模組，都不知道函數內部發生了什麼。一個函數獨立地執行它的計算，並返回你想要它返回的內容。這其中所涉及的任何變量都只是 <em>本地的</em>：它們只存在於函數中，並且只存在於函數完成其目的所需時間內。</p><h4 id="return-語句" tabindex="-1">Return 語句 <a class="header-anchor" href="#return-語句" aria-label="Permalink to “Return 語句”">​</a></h4><p>如果你的應用程序需要函數中特定包含的信息，那麼使用 <code>return</code> 語句讓函數在運行後返回有意義的數據。</p><p>時間就是金錢，所以修改 <code>timestamp</code> 函數，以使其用於一個虛構的收費系統：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def Timer(msg):</span></span>
<span class="line"><span>    print(str(msg) + str(time.time() ) )</span></span>
<span class="line"><span>    charge = .02</span></span>
<span class="line"><span>    return charge</span></span></code></pre></div><p>現在，<code>timestamp</code> 模組每次調用都收費 2 美分，但最重要的是，它返回每次調用時所收取的金額。</p><p>以下一個如何使用 <code>return</code> 語句的演示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>        total = total+charge</span></span></code></pre></div><p>在這個示例代碼中，變量 <code>charge</code> 為 <code>timestamp.Timer()</code> 函數的返回，它接收函數返回的任何內容。在本例中，函數返回一個數字，因此使用一個名為 <code>total</code> 的新變量來跟蹤已經進行了多少更改。當應用程序收到要退出的信號時，它會打印總花費：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 ./charge.py</span></span>
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
<span class="line"><span>You owe $0.1</span></span></code></pre></div><h4 id="內聯函數" tabindex="-1">內聯函數 <a class="header-anchor" href="#內聯函數" aria-label="Permalink to “內聯函數”">​</a></h4><p>函數不必在單獨的文件中創建。如果你只是針對一個任務編寫一個簡短的腳本，那麼在同一個文件中編寫函數可能更有意義。唯一的區別是你不必導入自己的模組，但函數的工作方式是一樣的。以下是時間測試應用程序的最新迭代：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env python3</span></span>
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
<span class="line"><span>        total = total+charge</span></span></code></pre></div><p>它沒有外部依賴（Python 發行版中包含 <code>time</code> 模組），產生與模組化版本相同的結果。它的優點是一切都位於一個文件中，缺點是你不能在其他腳本中使用 <code>Timer()</code> 函數，除非你手動複製和粘貼它。</p><h4 id="全局變量" tabindex="-1">全局變量 <a class="header-anchor" href="#全局變量" aria-label="Permalink to “全局變量”">​</a></h4><p>在函數外部創建的變量沒有限制作用域，因此它被視為 <em>全局</em> 變量。</p><p>全局變量的一個例子是在 <code>charge.py</code> 中用於跟蹤當前花費的 <code>total</code> 變量。<code>total</code> 是在函數之外創建的，因此它綁定到應用程序而不是特定函數。</p><p>應用程序中的函數可以訪問全局變量，但要將變量傳入導入的模組，你必須像發送 <code>msg</code> 變量一樣將變量傳入模組。</p><p>全局變量很方便，因為它們似乎隨時隨地都可用，但也很難跟蹤它們，很難知道哪些變量不再需要了但是仍然在系統內存中停留（儘管 Python 有非常好的垃圾收集機制）。</p><p>但是，全局變量很重要，因為不是所有的變量都可以是函數或類的本地變量。現在你知道了如何向函數傳入變量並獲得返回，事情就變得容易了。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>你已經學到了很多關於函數的知識，所以開始將它們放入你的腳本中 —— 如果它不是作為單獨的模組，那麼作為代碼塊，你不必在一個腳本中編寫多次。在本系列的下一篇文章中，我將介紹 Python 類。</p><hr>`,60)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/7/get-modular-python-functions"},{default:i(()=>[...s[6]||(s[6]=[n("https://opensource.com/article/19/7/get-modular-python-functions",-1)])]),_:1})]),a("p",null,[s[12]||(s[12]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth/users/xd-deng/users/nhuntwalker/users/don-watkins"},{default:i(()=>[...s[8]||(s[8]=[n("Seth Kenlon",-1)])]),_:1}),s[13]||(s[13]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[9]||(s[9]=[n("lujun9972",-1)])]),_:1}),s[14]||(s[14]=n(" 譯者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[10]||(s[10]=[n("MjSeven",-1)])]),_:1}),s[15]||(s[15]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[11]||(s[11]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[18]||(s[18]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[16]||(s[16]=[n("LCTT",-1)])]),_:1}),s[19]||(s[19]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[17]||(s[17]=[n("Linux中國",-1)])]),_:1}),s[20]||(s[20]=n(" 榮譽推出",-1))])])}const q=t(d,[["render",h]]);export{T as __pageData,q as default};
