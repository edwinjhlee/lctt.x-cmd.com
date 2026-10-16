import{_ as l,a0 as d,w as o,s as r,I as a,x as n,a1 as t,A as e,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"Python 調試器入門 | LCTT x X-CMD","titleTemplate":false,"description":"Python 調試器入門 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 調試器入門 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 調試器入門 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180525 Getting started with the Python debugger","title":"Python 調試器入門","tag":"201809","desc":""},"relativePath":"201809/20180525 Getting started with the Python debugger.md","filePath":"[post].md"}'),c={name:"201809/20180525 Getting started with the Python debugger.md"};function b(h,s,g,u,k,y){const p=d("Link");return o(),r("div",null,[s[25]||(s[25]=a("h1",{id:"python-調試器入門",tabindex:"-1"},[n("Python 調試器入門 "),a("a",{class:"header-anchor",href:"#python-調試器入門","aria-label":"Permalink to “Python 調試器入門”"},"​")],-1)),s[26]||(s[26]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2018/05/pdb-816x345.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Python 生態系統包含豐富的工具和庫，可以讓開發人員更加舒適。 例如，我們之前已經介紹瞭如何",-1)),t(p,{href:"https://fedoramagazine.org/enhance-python-interactive-shell"},{default:e(()=>[...s[0]||(s[0]=[n("使用交互式 shell 增強 Python",-1)])]),_:1}),s[2]||(s[2]=n("。本文重點介紹另一種可以節省時間並提高 Python 技能的工具：Python 調試器。",-1))]),s[27]||(s[27]=i(`<h3 id="python-調試器" tabindex="-1">Python 調試器 <a class="header-anchor" href="#python-調試器" aria-label="Permalink to “Python 調試器”">​</a></h3><p>Python 標準庫提供了一個名為 pdb 的調試器。此調試器提供了調試所需的大多數功能，如斷點、單行步進、堆棧幀的檢查等等。</p><p>瞭解一些pdb 的基本知識很有用，因為它是標準庫的一部分。 你可以在無法安裝其他增強的調試器的環境中使用它。</p><h4 id="運行-pdb" tabindex="-1">運行 pdb <a class="header-anchor" href="#運行-pdb" aria-label="Permalink to “運行 pdb”">​</a></h4><p>運行 pdb 的最簡單方法是從命令列，將程序作為參數傳遞來調試。 看看以下腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pdb_test.py</span></span>
<span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from time import sleep</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def countdown(number):</span></span>
<span class="line"><span>    for i in range(number, 0, -1):</span></span>
<span class="line"><span>        print(i)</span></span>
<span class="line"><span>        sleep(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    seconds = 10</span></span>
<span class="line"><span>    countdown(seconds)</span></span></code></pre></div><p>你可以從命令列運行 pdb，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m pdb pdb_test.py</span></span>
<span class="line"><span>&gt; /tmp/pdb_test.py(1)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; from time import sleep</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>使用 pdb 的另一種方法是在程序中設置斷點。為此，請導入 <code>pdb</code> 模組並使用<code>set_trace</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pdb_test.py</span></span>
<span class="line"><span>#!/usr/bin/python3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from time import sleep</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>def countdown(number):</span></span>
<span class="line"><span>    for i in range(number, 0, -1):</span></span>
<span class="line"><span>        import pdb; pdb.set_trace()</span></span>
<span class="line"><span>        print(i)</span></span>
<span class="line"><span>        sleep(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>    seconds = 10</span></span>
<span class="line"><span>    countdown(seconds)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 pdb_test.py</span></span>
<span class="line"><span>&gt; /tmp/pdb_test.py(6)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>腳本在斷點處停止，pdb 顯示腳本中的下一行。 你也可以在失敗後執行調試器。 這稱為<ruby>事後調試<rt>postmortem debugging</rt></ruby>。</p><h4 id="穿行於執行堆棧" tabindex="-1">穿行於執行堆棧 <a class="header-anchor" href="#穿行於執行堆棧" aria-label="Permalink to “穿行於執行堆棧”">​</a></h4><p>調試中的一個常見用例是在執行堆棧中穿行。 Python 調試器運行後，可以使用以下命令：</p><ul><li><p><code>w(here)</code>：顯示當前執行的行以及執行堆棧的位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) w</span></span>
<span class="line"><span>/tmp/test_pdb.py(16)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; countdown(seconds)</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div></li><li><p><code>l(ist)</code>：顯示當前位置周圍更多的上下文（代碼）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) l</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7  	def countdown(number):</span></span>
<span class="line"><span>8  	    for i in range(number, 0, -1):</span></span>
<span class="line"><span>9  	        import pdb; pdb.set_trace()</span></span>
<span class="line"><span>10  -&gt;	        print(i)</span></span>
<span class="line"><span>11  	        sleep(1)</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>13</span></span>
<span class="line"><span>14  	if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>15  	    seconds = 10</span></span></code></pre></div></li><li><p><code>u(p)</code>/<code>d(own)</code>：向上或向下穿行調用堆棧。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ py3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) up</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(16)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; countdown(seconds)</span></span>
<span class="line"><span>(Pdb) down</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div></li></ul><h4 id="單步執行程序" tabindex="-1">單步執行程序 <a class="header-anchor" href="#單步執行程序" aria-label="Permalink to “單步執行程序”">​</a></h4><p>pdb提供以下命令來執行和單步執行代碼：</p><ul><li><p><code>n(ext)</code>：繼續執行，直到達到當前函數中的下一行，或者返回</p></li><li><p><code>s(tep)</code>：執行當前行並在第一個可能的場合停止（在被調用的函數或當前函數中）</p></li><li><p><code>c(ontinue)</code>：繼續執行，僅在斷點處停止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ py3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) n</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(11)countdown()</span></span>
<span class="line"><span>-&gt; sleep(1)</span></span>
<span class="line"><span>(Pdb) n</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(8)countdown()</span></span>
<span class="line"><span>-&gt; for i in range(number, 0, -1):</span></span>
<span class="line"><span>(Pdb) n</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(9)countdown()</span></span>
<span class="line"><span>-&gt; import pdb; pdb.set_trace()</span></span>
<span class="line"><span>(Pdb) s</span></span>
<span class="line"><span>--Call--</span></span>
<span class="line"><span>&gt; /usr/lib64/python3.6/pdb.py(1584)set_trace()</span></span>
<span class="line"><span>-&gt; def set_trace():</span></span>
<span class="line"><span>(Pdb) c</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) c</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(9)countdown()</span></span>
<span class="line"><span>-&gt; import pdb; pdb.set_trace()</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>該示例顯示了 <code>next</code> 和 <code>step</code> 之間的區別。 實際上，當使用 <code>step</code> 時，調試器會進入 <code>pdb</code> 模組源代碼，而接下來就會執行 <code>set_trace</code> 函數。</p></li></ul><h4 id="檢查變量內容" tabindex="-1">檢查變量內容 <a class="header-anchor" href="#檢查變量內容" aria-label="Permalink to “檢查變量內容”">​</a></h4><ul><li><p>pdb 非常有用的地方是檢查執行堆棧中存儲的變量的內容。 例如，<code>a(rgs)</code> 命令打印當前函數的變量，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>py3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) where</span></span>
<span class="line"><span>/tmp/test_pdb.py(16)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; countdown(seconds)</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) args</span></span>
<span class="line"><span>number = 10</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>pdb 打印變量的值，在本例中是 10。</p></li><li><p>可用於打印變量值的另一個命令是 <code>p(rint)</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ py3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) list</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7  	def countdown(number):</span></span>
<span class="line"><span>8  	    for i in range(number, 0, -1):</span></span>
<span class="line"><span>9  	        import pdb; pdb.set_trace()</span></span>
<span class="line"><span>10  -&gt;	        print(i)</span></span>
<span class="line"><span>11  	        sleep(1)</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>13</span></span>
<span class="line"><span>14  	if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span>15  	    seconds = 10</span></span>
<span class="line"><span>(Pdb) print(seconds)</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>(Pdb) p i</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>(Pdb) p number - i</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>如示例中最後的命令所示，<code>print</code> 可以在顯示結果之前計算表達式。</p></li></ul>`,20)),a("p",null,[t(p,{href:"https://docs.python.org/3/library/pdb.html"},{default:e(()=>[...s[3]||(s[3]=[n("Python 文檔",-1)])]),_:1}),s[4]||(s[4]=n("包含每個 pdb 命令的參考和示例。 對於開始使用 Python 調試器人來説，這是一個有用的讀物。",-1))]),s[28]||(s[28]=a("h3",{id:"增強的調試器",tabindex:"-1"},[n("增強的調試器 "),a("a",{class:"header-anchor",href:"#增強的調試器","aria-label":"Permalink to “增強的調試器”"},"​")],-1)),a("p",null,[s[7]||(s[7]=n("一些增強的調試器提供了更好的用户體驗。 大多數為 pdb 添加了有用的額外功能，例如語法突出高亮、更好的回溯和自省。 流行的增強調試器包括 ",-1)),t(p,{href:"https://github.com/gotcha/ipdb"},{default:e(()=>[...s[5]||(s[5]=[n("IPython 的 ipdb",-1)])]),_:1}),s[8]||(s[8]=n(" 和 ",-1)),t(p,{href:"https://github.com/antocuni/pdb"},{default:e(()=>[...s[6]||(s[6]=[n("pdb++",-1)])]),_:1}),s[9]||(s[9]=n("。",-1))]),s[29]||(s[29]=i(`<p>這些示例顯示如何在虛擬環境中安裝這兩個調試器。 這些示例使用新的虛擬環境，但在調試應用程序的情況下，應使用應用程序的虛擬環境。</p><h4 id="安裝-ipython-的-ipdb" tabindex="-1">安裝 IPython 的 ipdb <a class="header-anchor" href="#安裝-ipython-的-ipdb" aria-label="Permalink to “安裝 IPython 的 ipdb”">​</a></h4><p>要安裝 IPython ipdb，請在虛擬環境中使用 <code>pip</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m venv .test_pdb</span></span>
<span class="line"><span>$ source .test_pdb/bin/activate</span></span>
<span class="line"><span>(test_pdb)$ pip install ipdb</span></span></code></pre></div><p>要在腳本中調用 ipdb，必須使用以下命令。 請注意，該模組稱為 ipdb 而不是 pdb：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import ipdb; ipdb.set_trace()</span></span></code></pre></div><p>IPython 的 ipdb 也可以用 Fedora 包安裝，所以你可以使用 Fedora 的包管理器 <code>dnf</code> 來安裝它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install python3-ipdb</span></span></code></pre></div><h4 id="安裝-pdb" tabindex="-1">安裝 pdb++ <a class="header-anchor" href="#安裝-pdb" aria-label="Permalink to “安裝 pdb++”">​</a></h4><p>你可以類似地安裝 pdb++：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m venv .test_pdb</span></span>
<span class="line"><span>$ source .test_pdb/bin/activate</span></span>
<span class="line"><span>(test_pdb)$ pip install pdbp</span></span></code></pre></div><p>pdb++ 重寫了 pdb 模組，因此你可以使用相同的語法在程序中添加斷點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pdb; pdb.set_trace()</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>學習如何使用 Python 調試器可以節省你在排查應用程序問題時的時間。 對於瞭解應用程序或某些庫的複雜部分如何工作也是有用的，從而提高 Python 開發人員的技能。</p><hr>`,16)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),t(p,{href:"https://fedoramagazine.org/getting-started-python-debugger/"},{default:e(()=>[...s[10]||(s[10]=[n("https://fedoramagazine.org/getting-started-python-debugger/",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("作者：",-1)),t(p,{href:"https://fedoramagazine.org"},{default:e(()=>[...s[12]||(s[12]=[n("Clément Verna",-1)])]),_:1}),s[17]||(s[17]=n(" 選題：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[13]||(s[13]=[n("lujun9972",-1)])]),_:1}),s[18]||(s[18]=n(" 譯者：",-1)),t(p,{href:"https://github.com/Flowsnow"},{default:e(()=>[...s[14]||(s[14]=[n("Flowsnow",-1)])]),_:1}),s[19]||(s[19]=n(" 校對：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原創編譯，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[21]||(s[21]=[n("Linux中國",-1)])]),_:1}),s[24]||(s[24]=n(" 榮譽推出",-1))])])}const P=l(c,[["render",b]]);export{_ as __pageData,P as default};
