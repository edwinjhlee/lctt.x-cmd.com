import{_ as i,a0 as r,w as o,s as d,ao as l,I as e,x as n,a1 as p,A as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"Julia 和 Python，哪一個更快？ | LCTT x X-CMD","titleTemplate":false,"description":"Julia 和 Python，哪一個更快？ | LCTT (202210) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Julia 和 Python，哪一個更快？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Julia 和 Python，哪一個更快？ | LCTT (202210) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202210/20220902 Julia and Python- Which Language is Quicker-","title":"Julia 和 Python，哪一個更快？","tag":"202210","desc":""},"relativePath":"202210/20220902 Julia and Python- Which Language is Quicker-.md","filePath":"[post].md"}'),c={name:"202210/20220902 Julia and Python- Which Language is Quicker-.md"};function h(u,s,g,y,m,k){const a=r("Link");return o(),d("div",null,[s[24]||(s[24]=l('<h1 id="julia-和-python-哪一個更快" tabindex="-1">Julia 和 Python，哪一個更快？ <a class="header-anchor" href="#julia-和-python-哪一個更快" aria-label="Permalink to “Julia 和 Python，哪一個更快？”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202210/02/122529vdztvds1ttqez1ts.jpg" alt=""></p><p>Julia 是一門高度抽象的動態編程語言。雖然它是一門能夠開發所有程序的通用語言，但它有幾個特點，非常適用於科學計算和數值計算。Python 在 1990 年初作為一種簡單的面向對象的程序語言出現，如今已經有了顯著的發展。本文將從它們在神經網絡和機器學習的性能表現上進行討論。</p><p>Julia 的架構以動態語言中的<ruby>參數多態性<rt>parametric polymorphism</rt></ruby>和<ruby>多重派發<rt>multiple dispatch</rt></ruby>的編程範式為主要特色。它允許使用或不使用<ruby>消息傳遞接口<rt>message passing interface</rt></ruby>（MPI）或內置的 “OpenMP 式” 線程進行併發、並行和分佈式計算，以及直接調用 C 和 FORTRAN 庫而無需額外的代碼。Julia 使用 <ruby>即時<rt>just-in-time</rt></ruby>（JIT）編譯器，Julia 社區將其稱為 “<ruby>即時預編譯<rt>just-ahead-of-time</rt></ruby>（JAOT）”，因為它在運行之前默認將所有代碼編譯為機器碼。</p><p>與 Python 不同，Julia 是專為統計學和機器學習而設計的。Julia 可以快速的完成線性代數的運算，但 Python 很慢。這是因為 Python 從來都不是為了適應機器學習用到的矩陣和方程而設計的。Python 本身並不差，特別是 Numpy，但在沒有使用包的情況下，Julia 更像是為數學量身定製的。相比 Python，Julia 的運算符更像 R，這是一個顯著的優勢。大部分的線性代數運算可以用更少的時間和精力去完成。</p><p>眾所周知，近年來 Python 在機器學習和數據科學領域佔據主導地位。因為在 Python 中我們可以使用各種各樣的第三方庫來幫助我們編寫機器學習的代碼。雖然 Python 有這麼多優勢，但仍有一個主要的缺點——它是一門解釋性語言，速度非常慢。現在是數據時代，數據越多我們處理它的時間就越長，這也是 Julia 出現的理由。</p><p>到目前為止，有關 Julia 的研究工作都集中在高性能或者 Julia 的科學計算能力等主題上。但在這裏，我們將討論 Julia 不僅能夠有效地處理複雜的科學計算，還能夠處理基於商業的問題，以及像 Python 一樣處理機器學習和神經網絡。</p><h3 id="實驗目標與實驗設計" tabindex="-1">實驗目標與實驗設計 <a class="header-anchor" href="#實驗目標與實驗設計" aria-label="Permalink to “實驗目標與實驗設計”">​</a></h3><p>Julia 像 Python 一樣簡潔，但卻像 C 一樣是一門編譯語言。首先我們來測試 Julia 要比 Python 快多少。為此，我們先在一些簡單的程序上測試它們，然後來到我們實驗的重點，測試它們的機器學習和深度學習能力。</p><p>Julia 和 Python 都提供了許多庫和開源的基準測試工具。為了在 Julia 中進行基準測試和計算時間，我們使用了 <code>CPUTime</code> 和 <code>time</code> 庫；對於 Python，我們同樣使用了 <code>time</code> 模組。</p><h3 id="矩陣乘法" tabindex="-1">矩陣乘法 <a class="header-anchor" href="#矩陣乘法" aria-label="Permalink to “矩陣乘法”">​</a></h3>',11)),e("p",null,[s[1]||(s[1]=n("一開始我們嘗試了簡單的算術運算，但由於這些運算不會產生太大的時間差異，我們決定比較矩陣乘法的時間差異。我們創建了兩個 ",-1)),s[2]||(s[2]=e("code",null,"(10 * 10)",-1)),s[3]||(s[3]=n(" 的隨機浮點數矩陣，並對它們施以點積。眾所周知，Python 有一個 ",-1)),s[4]||(s[4]=e("code",null,"Numpy",-1)),s[5]||(s[5]=n(" 庫，常被用於計算矩陣和向量。而 Julia 也有一個 ",-1)),s[6]||(s[6]=e("code",null,"LinearAlgebra",-1)),s[7]||(s[7]=n(" 庫，常用於計算矩陣和向量。因此我們分別比較了各自使用和不使用庫的矩陣乘法的耗時。本文用到的所有源碼已經放在了 ",-1)),p(a,{href:"https://github.com/mr-nerdster/Julia_Research.gitsee"},{default:t(()=>[...s[0]||(s[0]=[n("GitHub 存儲庫",-1)])]),_:1}),s[8]||(s[8]=n("。下面給出了用 Julia 編寫的 10×10 矩陣乘法程序：",-1))]),s[25]||(s[25]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@time LinearAlgebra.mul!(c,x,y)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>function MM()</span></span>
<span class="line"><span>x = rand(Float64,(10,10))</span></span>
<span class="line"><span>y = rand(Float64,(10,10))</span></span>
<span class="line"><span>c = zeros(10,10)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>for i in range(1,10)</span></span>
<span class="line"><span>for j in range(1,10)</span></span>
<span class="line"><span>for k in range(1,10)</span></span>
<span class="line"><span>c[i,j] += x[i,k]*y[k,j]</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>@time MM</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>0.000001 seconds</span></span>
<span class="line"><span>MM (generic function with 1 method)</span></span></code></pre></div><p>Julia 使用庫耗時 0.000017 秒，使用循環耗時 0.000001 秒。</p><p>使用 Python 編寫相同的矩陣乘法程序如下。 從結果可以發現，與不使用庫相比，使用庫的程序花費的時間更少：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>import time as t</span></span>
<span class="line"><span>x = np.random.rand(10,10)</span></span>
<span class="line"><span>y = np.random.rand(10,10)</span></span>
<span class="line"><span>start = t.time()</span></span>
<span class="line"><span>z = np.dot(x, y)</span></span>
<span class="line"><span>print(“Time = “,t.time()-start)</span></span>
<span class="line"><span>Time = 0.001316070556640625</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span>import time as t</span></span>
<span class="line"><span>l = 0</span></span>
<span class="line"><span>h= 10</span></span>
<span class="line"><span>cols = 10</span></span>
<span class="line"><span>rows= 10</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>choices = list (map(float, range(l,h)))</span></span>
<span class="line"><span>x = [random.choices (choices , k=cols) for _ in range(rows)]</span></span>
<span class="line"><span>y = [random.choices (choices , k=cols) for _ in range(rows)]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>result = [([0]*cols) for i in range (rows)]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>start = t.time()</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>for i in range(len(x)):</span></span>
<span class="line"><span>for j in range(len(y[0])):</span></span>
<span class="line"><span>for k in range(len(result)):</span></span>
<span class="line"><span>result[i][j] += x[i][k] * y[k][j]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>print(result)</span></span>
<span class="line"><span>print(“Time = “, t.time()-start)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Time = 0.0015912055969238281</span></span></code></pre></div><p>Python 使用庫耗時 0.0013 秒，使用循環耗時 0.0015 秒。</p><h3 id="線性搜索" tabindex="-1">線性搜索 <a class="header-anchor" href="#線性搜索" aria-label="Permalink to “線性搜索”">​</a></h3><p>我們進行的下一個實驗是對十萬個隨機生成的數字進行線性搜索。這裏使用了兩種方法，一種是使用 <code>for</code> 循環，另一種是使用運算符。我們使用 1 到 1000 的整數執行了 1000 次搜索，正如你在下面的輸出中看到的那樣，我們還打印了我們在數據集中找到了多少個整數。下面給出了使用循環和使用 <code>IN</code> 運算符的時間。這裏我們使用了 CPU 3 次運行時間的中位數。</p><p>使用 Julia 編寫的程序和運行結果如下：</p><p>（LCTT 譯註：此處原文缺失 Julia 代碼）</p><p>使用 Python 編寫的程序和運行結果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy as np</span></span>
<span class="line"><span>import time as t</span></span>
<span class="line"><span>x = np.random.rand(10,10)</span></span>
<span class="line"><span>y = np.random.rand(10,10)</span></span>
<span class="line"><span>start = t.time()</span></span>
<span class="line"><span>z = np.dot(x, y)</span></span>
<span class="line"><span>print(“Time = “,t.time()-start)</span></span>
<span class="line"><span>Time = 0.001316070556640625</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>import random</span></span>
<span class="line"><span>import time as t</span></span>
<span class="line"><span>l = 0</span></span>
<span class="line"><span>h= 10</span></span>
<span class="line"><span>cols = 10</span></span>
<span class="line"><span>rows= 10</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>choices = list (map(float, range(l,h)))</span></span>
<span class="line"><span>x = [random.choices (choices , k=cols) for _ in range(rows)]</span></span>
<span class="line"><span>y = [random.choices (choices , k=cols) for _ in range(rows)]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>result = [([0]*cols) for i in range (rows)]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>start = t.time()</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>for i in range(len(x)):</span></span>
<span class="line"><span>for j in range(len(y[0])):</span></span>
<span class="line"><span>for k in range(len(result)):</span></span>
<span class="line"><span>result[i][j] += x[i][k] * y[k][j]</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>print(result)</span></span>
<span class="line"><span>print(“Time = “, t.time()-start)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Time = 0.0015912055969238281</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>FOR_SEARCH:</span></span>
<span class="line"><span>Elapsed CPU time: 16.420260511 seconds</span></span>
<span class="line"><span>matches: 550</span></span>
<span class="line"><span>Elapsed CPU time: 16.140975079 seconds</span></span>
<span class="line"><span>matches: 550</span></span>
<span class="line"><span>Elapsed CPU time: 16.49639576 seconds</span></span>
<span class="line"><span>matches: 550</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IN:</span></span>
<span class="line"><span>Elapsed CPU time: 6.446583343 seconds</span></span>
<span class="line"><span>matches: 550</span></span>
<span class="line"><span>Elapsed CPU time: 6.216615487 seconds</span></span>
<span class="line"><span>matches: 550</span></span>
<span class="line"><span>Elapsed CPU time: 6.296716556 seconds</span></span>
<span class="line"><span>matches: 550</span></span></code></pre></div><p>從以上結果來看，在 Julia 中使用循環和運算符並不會產生顯著的時間差異。但是在 Python 中循環幾乎比運算符 IN 多花了三倍的時間。有趣的是，在這兩種情況下，Julia 都比 Python 快得多。</p><h3 id="線性迴歸" tabindex="-1">線性迴歸 <a class="header-anchor" href="#線性迴歸" aria-label="Permalink to “線性迴歸”">​</a></h3><p>下一個實驗是測試機器學習算法。我們選擇了以一種最常見和最簡單的機器學習算法，使用簡單數據集的線性迴歸。我們使用了一個包含 237 條數據的數據集 “Head Brain”，數據集的兩列分別為 “HeadSize” 和 “BrainWeight”。接下來，我們使用 “head size” 數據去計算 “brain weight”。在 Python 和 Julia 中我們都沒有使用第三方庫，而是從零實現了線性迴歸算法。</p><p>Julia：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GC.gc()</span></span>
<span class="line"><span>@CPUtime begin</span></span>
<span class="line"><span>linear_reg()</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>elapsed CPU time: 0.000718 seconds</span></span></code></pre></div><p>Python：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gc.collect()</span></span>
<span class="line"><span>start = process_time()</span></span>
<span class="line"><span>linear_reg()</span></span>
<span class="line"><span>end = process_time()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(end-start)</span></span>
<span class="line"><span>elapsed time: 0.007180344000000005</span></span></code></pre></div><p>上面給出了 Julia 和 Python 所花費的時間。</p><h3 id="邏輯迴歸" tabindex="-1">邏輯迴歸 <a class="header-anchor" href="#邏輯迴歸" aria-label="Permalink to “邏輯迴歸”">​</a></h3><p>接下來，我們使用兩種語言的庫對最常見的機器學習算法（即邏輯迴歸）進行了實驗。對於 Python 我們使用最常見的庫 <code>sklearn</code>；對於 Julia，我們使用 <code>GLM</code> 庫。我們在這裏用到的數據集是有關銀行客户的信息，其中包含 10,000 個數據條目。目標變量是一個二元變量，區分消費者是否繼續使用銀行賬户。</p><p>下面給出了 Julia 進行邏輯迴歸所花費的時間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@time log_rec()</span></span>
<span class="line"><span>0.027746 seconds (3.32 k allocations: 10.947 MiB)</span></span></code></pre></div><p>下面給出了 Python 進行邏輯迴歸所花費的時間：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gc.collect()</span></span>
<span class="line"><span>start = process_time()</span></span>
<span class="line"><span>LogReg()</span></span>
<span class="line"><span>end = process_time()</span></span>
<span class="line"><span>print(end-start)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Accuracy : 0.8068</span></span>
<span class="line"><span>0.34901400000000005</span></span></code></pre></div><h3 id="神經網絡" tabindex="-1">神經網絡 <a class="header-anchor" href="#神經網絡" aria-label="Permalink to “神經網絡”">​</a></h3><p>在各種程序和數據集上測試這兩種語言後，我們在神經網絡上使用 MNIST 數據集繼續測試它們。該數據集包含從零到九的手繪數字的灰度圖像。每張圖像為 28×28 像素。每個像素值表示該像素的亮度或暗度，該值是包含 0 到 255 之間的整數。該數據還包含一個標籤列，該列表示在相關圖像中繪製的數字。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/07/Figure-1-Example-of-MNIST-data-set.jpg" alt="Figure 1: Example of MNIST data set"></p><p>圖 1 是 MNIST 數據集的示例。</p><p>對兩種語言我們都建立了一個簡單的神經網絡來測試它們耗費的時間。神經網絡的結構如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Input ---&gt; Hidden layer ---&gt; Output</span></span></code></pre></div><p>該神經網絡包含了一個輸入層、隱層還有輸出層。為了避免神經網絡的複雜度過高，我們對數據集沒有進行任何的預處理工作。在 Julia 和 Python 中我們都進行了40次訓練並比較它們的時間差異。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/07/Figure-2-Julia-takes-5.76-seconds-in-a-neural-network.jpg" alt="Figure 2: Julia takes 5.76 seconds in a neural network"></p><p>在 Julia 中，<code>Flux</code> 庫通常被用於建立神經網絡；在 Python 中我們常使用 <code>Keras</code> 庫。圖 2 展示了 Julia 在神經網絡上的耗時。圖 3 展示了 Python 的神經網絡經過了若干次訓練的耗時。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/07/Figure-3-Python-takes-110.3-seconds-in-a-neural-network.jpg" alt="Figure 3: Python takes 110.3 seconds in a neural network"></p><p>這個結果展示了 Julia 和 Python 在處理神經網絡時存在巨大的時間差異。</p><p>表 1 總結了此次實驗的測試結果並計算了 Julia 和 Python 時間差異的百分比。</p><div class="table-wrap"><table><thead><tr><th style="text-align:left;">實驗</th><th style="text-align:left;">Julia（秒）</th><th style="text-align:left;">Python（秒）</th><th style="text-align:left;">時間差（%）</th></tr></thead><tbody><tr><td style="text-align:left;">矩陣乘法（不使用庫）</td><td style="text-align:left;">0.000001</td><td style="text-align:left;">0.0015</td><td style="text-align:left;">99.9</td></tr><tr><td style="text-align:left;">矩陣乘法（使用庫）</td><td style="text-align:left;">0.000017</td><td style="text-align:left;">0.0013</td><td style="text-align:left;">98.69</td></tr><tr><td style="text-align:left;">線性搜索（使用循環）</td><td style="text-align:left;">0.42</td><td style="text-align:left;">16.4</td><td style="text-align:left;">97.43</td></tr><tr><td style="text-align:left;">線性搜索（使用 IN 操作符）</td><td style="text-align:left;">0.43</td><td style="text-align:left;">6.2</td><td style="text-align:left;">93.06</td></tr><tr><td style="text-align:left;">線性迴歸</td><td style="text-align:left;">0.000718</td><td style="text-align:left;">0.00718</td><td style="text-align:left;">90</td></tr><tr><td style="text-align:left;">邏輯迴歸</td><td style="text-align:left;">0.025</td><td style="text-align:left;">0.34901</td><td style="text-align:left;">92.83</td></tr><tr><td style="text-align:left;">神經網絡</td><td style="text-align:left;">5.76</td><td style="text-align:left;">110.3</td><td style="text-align:left;">94.77</td></tr></tbody></table></div><p>我們進行的所有實驗都表明，隨着程序複雜性以及數據集大小的增加，Julia 和 Python 之間的執行時間差異也會增加。由這個結果我們可以推斷，Julia 是一門更適合機器學習和神經網絡的編程語言。</p><hr>`,41)),e("p",null,[s[10]||(s[10]=n("via: ",-1)),p(a,{href:"https://www.opensourceforu.com/2022/09/julia-and-python-which-language-is-quicker/"},{default:t(()=>[...s[9]||(s[9]=[n("https://www.opensourceforu.com/2022/09/julia-and-python-which-language-is-quicker/",-1)])]),_:1})]),e("p",null,[s[15]||(s[15]=n("作者：",-1)),p(a,{href:"https://www.opensourceforu.com/author/b-thangaraju/"},{default:t(()=>[...s[11]||(s[11]=[n("B Thangaraju",-1)])]),_:1}),s[16]||(s[16]=n(" 選題：",-1)),p(a,{href:"https://github.com/lkxed"},{default:t(()=>[...s[12]||(s[12]=[n("lkxed",-1)])]),_:1}),s[17]||(s[17]=n(" 譯者：",-1)),p(a,{href:"https://github.com/Return7g"},{default:t(()=>[...s[13]||(s[13]=[n("Return7g",-1)])]),_:1}),s[18]||(s[18]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[21]||(s[21]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[19]||(s[19]=[n("LCTT",-1)])]),_:1}),s[22]||(s[22]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:t(()=>[...s[20]||(s[20]=[n("Linux中國",-1)])]),_:1}),s[23]||(s[23]=n(" 榮譽推出",-1))])])}const P=i(c,[["render",h]]);export{x as __pageData,P as default};
