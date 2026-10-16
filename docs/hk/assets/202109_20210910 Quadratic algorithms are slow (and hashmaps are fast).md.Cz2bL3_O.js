import{_ as i,a0 as t,w as r,s as o,ao as d,I as n,x as a,a1 as e,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"淺談慢速的二次算法與快速的 hashmap | LCTT x X-CMD","titleTemplate":false,"description":"淺談慢速的二次算法與快速的 hashmap | LCTT (202109) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"淺談慢速的二次算法與快速的 hashmap | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"淺談慢速的二次算法與快速的 hashmap | LCTT (202109) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202109/20210910 Quadratic algorithms are slow (and hashmaps are fast)","title":"淺談慢速的二次算法與快速的 hashmap","tag":"202109","desc":""},"relativePath":"202109/20210910 Quadratic algorithms are slow (and hashmaps are fast).md","filePath":"[post].md"}'),h={name:"202109/20210910 Quadratic algorithms are slow (and hashmaps are fast).md"};function c(m,s,u,g,y,b){const p=t("Link");return r(),o("div",null,[s[27]||(s[27]=d(`<h1 id="淺談慢速的二次算法與快速的-hashmap" tabindex="-1">淺談慢速的二次算法與快速的 hashmap <a class="header-anchor" href="#淺談慢速的二次算法與快速的-hashmap" aria-label="Permalink to “淺談慢速的二次算法與快速的 hashmap”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202109/15/094524s7dlcq74ksqazyyc.jpg" alt=""></p><p>大家好！昨天我與一位朋友聊天，他正在準備編程面試，並試圖學習一些算法基礎知識。</p><p>我們聊到了<ruby>二次時間<rt>quadratic-time</rt></ruby>與<ruby>線性時間<rt>linear-time</rt></ruby>算法的話題，我認為在這裏寫這篇文章會很有趣，因為避免二次時間算法不僅在面試中很重要——有時在現實生活中瞭解一下也是很好的！後面我會快速解釋一下什麼是“二次時間算法” 😃</p><p>以下是我們將要討論的 3 件事：</p><ol><li>二次時間函數比線性時間函數慢得非常非常多</li><li>有時可以通過使用 hashmap 把二次算法變成線性算法</li><li>這是因為 hashmap 查找非常快（即時查詢！）</li></ol><p>我會盡量避免使用數學術語，重點關注真實的代碼示例以及它們到底有多快/多慢。</p><h3 id="目標問題-取兩個列表的交集" tabindex="-1">目標問題：取兩個列表的交集 <a class="header-anchor" href="#目標問題-取兩個列表的交集" aria-label="Permalink to “目標問題：取兩個列表的交集”">​</a></h3><p>我們來討論一個簡單的面試式問題：獲取 2 個數字列表的交集。 例如，<code>intersect([1,2,3], [2,4,5])</code> 應該返回 <code>[2]</code>。</p><p>這個問題也是有些現實應用的——你可以假設有一個真實程序，其需求正是取兩個 ID 列表的交集。</p><h3 id="顯而易見-的解決方案" tabindex="-1">“顯而易見”的解決方案： <a class="header-anchor" href="#顯而易見-的解決方案" aria-label="Permalink to ““顯而易見”的解決方案：”">​</a></h3><p>我們來寫一些獲取 2 個列表交集的代碼。下面是一個實現此需求的程序，命名為 <code>quadratic.py</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 實際運行的代碼</span></span>
<span class="line"><span>def intersection(list1, list2):</span></span>
<span class="line"><span>    result = []</span></span>
<span class="line"><span>    for x in list1:</span></span>
<span class="line"><span>        for y in list2:</span></span>
<span class="line"><span>            if x == y:</span></span>
<span class="line"><span>                result.append(y)</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一些樣板，便於我們從命令列運行程序，處理不同大小的列表</span></span>
<span class="line"><span>def run(n):</span></span>
<span class="line"><span>    # 定義兩個有 n+1 個元素的列表</span></span>
<span class="line"><span>    list1 = list(range(3, n)) + [2]</span></span>
<span class="line"><span>    list2 = list(range(n+1, 2*n)) + [2]</span></span>
<span class="line"><span>    # 取其交集並輸出結果</span></span>
<span class="line"><span>    print(list(intersection(list1, list2)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用第一個命令列參數作為輸入，運行程序</span></span>
<span class="line"><span>run(int(sys.argv[1]))</span></span></code></pre></div><p>程序名為 <code>quadratic.py</code>（LCTT 譯註：“quadratic”意為“二次方的”）的原因是：如果 <code>list1</code> 和 <code>list2</code> 的大小為 <code>n</code>，那麼內層循環（<code>if x == y</code>）會運行 <code>n^2</code> 次。在數學中，像 <code>x^2</code> 這樣的函數就稱為“二次”函數。</p><h3 id="quadratic-py-有多慢" tabindex="-1"><code>quadratic.py</code> 有多慢？ <a class="header-anchor" href="#quadratic-py-有多慢" aria-label="Permalink to “quadratic.py 有多慢？”">​</a></h3><p>用一些不同長度的列表來運行這個程序，兩個列表的交集總是相同的：<code>[2]</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 quadratic.py 10</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.037s</span></span>
<span class="line"><span>$ time python3 quadratic.py 100</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.053s</span></span>
<span class="line"><span>$ time python3 quadratic.py 1000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.051s</span></span>
<span class="line"><span>$ time python3 quadratic.py 10000 # 10,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m1.661s</span></span></code></pre></div><p>到目前為止，一切都還不錯——程序仍然只花費不到 2 秒的時間。</p><p>然後運行該程序處理兩個包含 100,000 個元素的列表，我不得不等待了很長時間。結果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 quadratic.py 100000 # 100,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    2m41.059s</span></span></code></pre></div><p>這可以説相當慢了！總共花費了 160 秒，幾乎是在 10,000 個元素上運行時（1.6 秒）的 100 倍。所以我們可以看到，在某個點之後，每次我們將列表擴大 10 倍，程序運行的時間就會增加大約 100 倍。</p><p>我沒有嘗試在 1,000,000 個元素上運行這個程序，因為我知道它會花費又 100 倍的時間——可能大約需要 3 個小時。我沒時間這樣做！</p><p>你現在大概明白了為什麼二次時間算法會成為一個問題——即使是這個非常簡單的程序也會很快變得非常緩慢。</p><h3 id="快速版-linear-py" tabindex="-1">快速版：<code>linear.py</code> <a class="header-anchor" href="#快速版-linear-py" aria-label="Permalink to “快速版：linear.py”">​</a></h3><p>好，接下來我們編寫一個快速版的程序。我先給你看看程序的樣子，然後再分析。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 實際執行的算法</span></span>
<span class="line"><span>def intersection(list1, list2):</span></span>
<span class="line"><span>    set1 = set(list1) # this is a hash set</span></span>
<span class="line"><span>    result = []</span></span>
<span class="line"><span>    for y in list2:</span></span>
<span class="line"><span>        if y in set1:</span></span>
<span class="line"><span>            result.append(y)</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一些樣板，便於我們從命令列運行程序，處理不同大小的列表</span></span>
<span class="line"><span>def run(n):</span></span>
<span class="line"><span>    # 定義兩個有 n+1 個元素的列表</span></span>
<span class="line"><span>    list1 = range(3, n) + [2]</span></span>
<span class="line"><span>    list2 = range(n+1, 2*n) + [2]</span></span>
<span class="line"><span>    # 輸出交集結果</span></span>
<span class="line"><span>    print(intersection(list1, list2))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run(int(sys.argv[1]))</span></span></code></pre></div><p>（這不是最慣用的 Python 使用方式，但我想在儘量避免使用太多 Python 思想的前提下編寫代碼，以便不瞭解 Python 的人能夠更容易理解）</p><p>這裏我們做了兩件與慢速版程序不同的事：</p><ol><li>將 <code>list1</code> 轉換成名為 <code>set1</code> 的 set 集合</li><li>只使用一個 for 循環而不是兩個</li></ol><h3 id="看看-linear-py-程序有多快" tabindex="-1">看看 <code>linear.py</code> 程序有多快 <a class="header-anchor" href="#看看-linear-py-程序有多快" aria-label="Permalink to “看看 linear.py 程序有多快”">​</a></h3><p>在討論 <em>為什麼</em> 這個程序快之前，我們先在一些大型列表上運行該程序，以此證明它確實是很快的。此處演示該程序依次在大小為 10 到 10,000,000 的列表上運行的過程。（請記住，我們上一個的程序在 100,000 個元素上運行時開始變得非常非常慢）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 linear.py 100</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.056s</span></span>
<span class="line"><span>$ time python3 linear.py 1000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.036s</span></span>
<span class="line"><span>$ time python3 linear.py 10000 # 10,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.028s</span></span>
<span class="line"><span>$ time python3 linear.py 100000 # 100,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.048s &lt;-- quadratic.py took 2 minutes in this case! we&#39;re doing it in 0.04 seconds now!!! so fast!</span></span>
<span class="line"><span>$ time python3 linear.py 1000000 # 1,000,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.178s</span></span>
<span class="line"><span>$ time python3 linear.py 10000000 # 10,000,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m1.560s</span></span></code></pre></div><h3 id="在極大型列表上運行-linear-py" tabindex="-1">在極大型列表上運行 <code>linear.py</code> <a class="header-anchor" href="#在極大型列表上運行-linear-py" aria-label="Permalink to “在極大型列表上運行 linear.py”">​</a></h3><p>如果我們試着在一個非常非常大的列表（100 億 / 10,000,000,000 個元素）上運行它，那麼實際上會遇到另一個問題：它足夠 <em>快</em> 了（該列表僅比花費 4.2 秒的列表大 100 倍，因此我們大概應該能在不超過 420 秒的時間內完成），但我的計算機沒有足夠的內存來存儲列表的所有元素，因此程序在運行結束之前崩潰了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 linear.py 10000000000</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;/home/bork/work/homepage/linear.py&quot;, line 18, in &lt;module&gt;</span></span>
<span class="line"><span>    run(int(sys.argv[1]))</span></span>
<span class="line"><span>  File &quot;/home/bork/work/homepage/linear.py&quot;, line 13, in run</span></span>
<span class="line"><span>    list1 = [1] * n + [2]</span></span>
<span class="line"><span>MemoryError</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.090s</span></span>
<span class="line"><span>user    0m0.034s</span></span>
<span class="line"><span>sys 0m0.018s</span></span></code></pre></div><p>不過本文不討論內存使用，所以我們可以忽略這個問題。</p><h3 id="那麼-為什麼-linear-py-很快呢" tabindex="-1">那麼，為什麼 <code>linear.py</code> 很快呢？ <a class="header-anchor" href="#那麼-為什麼-linear-py-很快呢" aria-label="Permalink to “那麼，為什麼 linear.py 很快呢？”">​</a></h3><p>現在我將試着解釋為什麼 <code>linear.py</code> 很快。</p><p>再看一下我們的代碼:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def intersection(list1, list2):</span></span>
<span class="line"><span>    set1 = set(list1) # this is a hash set</span></span>
<span class="line"><span>    result = []</span></span>
<span class="line"><span>    for y in list2:</span></span>
<span class="line"><span>        if y in set1:</span></span>
<span class="line"><span>            result.append(y)</span></span>
<span class="line"><span>    return result</span></span></code></pre></div><p>假設 <code>list1</code> 和 <code>list2</code> 都是大約 10,000,000 個不同元素的列表，這樣的元素數量可以説是很大了！</p><p>那麼為什麼它還能夠運行得如此之快呢？因為 hashmap！！！</p><h3 id="hashmap-查找是即時的-常數級時間" tabindex="-1">hashmap 查找是即時的（“常數級時間”） <a class="header-anchor" href="#hashmap-查找是即時的-常數級時間" aria-label="Permalink to “hashmap 查找是即時的（“常數級時間”）”">​</a></h3><p>我們看一下快速版程序中的 <code>if</code> 語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if y in set1:</span></span>
<span class="line"><span>    result.append(y)</span></span></code></pre></div><p>你可能會認為如果 <code>set1</code> 包含 1000 萬個元素，那麼這個查找——<code>if y in set1</code> 會比 <code>set1</code> 包含 1000 個元素時慢。但事實並非如此！無論 <code>set1</code> 有多大，所需時間基本是相同的（超級快）。</p><p>這是因為 <code>set1</code> 是一個哈希集合，它是一種只有鍵沒有值的 hashmap（hashtable）結構。</p>`,47)),n("p",null,[s[3]||(s[3]=a("我不準備在本文中解釋 ",-1)),s[4]||(s[4]=n("em",null,"為什麼",-1)),s[5]||(s[5]=a(" hashmap 查找是即時的，但是神奇的 Vaidehi Joshi 的 ",-1)),e(p,{href:"https://medium.com/basecs"},{default:l(()=>[...s[0]||(s[0]=[a("basecs",-1)])]),_:1}),s[6]||(s[6]=a(" 系列中有關於 ",-1)),e(p,{href:"https://medium.com/basecs/taking-hash-tables-off-the-shelf-139cbf4752f0"},{default:l(()=>[...s[1]||(s[1]=[a("hash table",-1)])]),_:1}),s[7]||(s[7]=a(" 和 ",-1)),e(p,{href:"https://medium.com/basecs/hashing-out-hash-functions-ea5dd8beb4dd"},{default:l(()=>[...s[2]||(s[2]=[a("hash 函數",-1)])]),_:1}),s[8]||(s[8]=a(" 的解釋，其中討論了 hashmap 即時查找的原因。",-1))]),s[28]||(s[28]=n("h3",{id:"不經意的二次方-現實中的二次算法",tabindex:"-1"},[a("不經意的二次方：現實中的二次算法！ "),n("a",{class:"header-anchor",href:"#不經意的二次方-現實中的二次算法","aria-label":"Permalink to “不經意的二次方：現實中的二次算法！”"},"​")],-1)),n("p",null,[s[10]||(s[10]=a("二次時間算法真的很慢，我們看到的的這個問題實際上在現實中也會遇到——Nelson Elhage 有一個很棒的Blog，名為 ",-1)),e(p,{href:"https://accidentallyquadratic.tumblr.com/"},{default:l(()=>[...s[9]||(s[9]=[a("不經意的二次方",-1)])]),_:1}),s[11]||(s[11]=a("，其中有關於不經意以二次時間算法運行代碼導致性能問題的故事。",-1))]),s[29]||(s[29]=n("h3",{id:"二次時間算法可能會-偷襲-你",tabindex:"-1"},[a("二次時間算法可能會“偷襲”你 "),n("a",{class:"header-anchor",href:"#二次時間算法可能會-偷襲-你","aria-label":"Permalink to “二次時間算法可能會“偷襲”你”"},"​")],-1)),s[30]||(s[30]=n("p",null,"關於二次時間算法的奇怪之處在於，當你在少量元素（如 1000）上運行它們時，它看起來並沒有那麼糟糕！沒那麼慢！但是如果你給它 1,000,000 個元素，它真的會花費幾個小時去運行。",-1)),s[31]||(s[31]=n("p",null,"所以我認為它還是值得深入瞭解的，這樣你就可以避免無意中使用二次時間算法，特別是當有一種簡單的方法來編寫線性時間算法（例如使用 hashmap）時。",-1)),s[32]||(s[32]=n("h3",{id:"總是讓我感到一絲神奇的-hashmap",tabindex:"-1"},[a("總是讓我感到一絲神奇的 hashmap "),n("a",{class:"header-anchor",href:"#總是讓我感到一絲神奇的-hashmap","aria-label":"Permalink to “總是讓我感到一絲神奇的 hashmap”"},"​")],-1)),s[33]||(s[33]=n("p",null,[a("hashmap 當然不是魔法（你可以學習一下為什麼 hashmap 查找是即時的！真的很酷！），但它總是讓人 "),n("em",null,"感覺"),a(" 有點神奇，每次我在程序中使用 hashmap 來加速，都會使我感到開心 😃")],-1)),s[34]||(s[34]=n("hr",null,null,-1)),n("p",null,[s[13]||(s[13]=a("via: ",-1)),e(p,{href:"https://jvns.ca/blog/2021/09/10/hashmaps-make-things-fast/"},{default:l(()=>[...s[12]||(s[12]=[a("https://jvns.ca/blog/2021/09/10/hashmaps-make-things-fast/",-1)])]),_:1})]),n("p",null,[s[18]||(s[18]=a("作者：",-1)),e(p,{href:"https://jvns.ca/"},{default:l(()=>[...s[14]||(s[14]=[a("Julia Evans",-1)])]),_:1}),s[19]||(s[19]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[15]||(s[15]=[a("lujun9972",-1)])]),_:1}),s[20]||(s[20]=a(" 譯者：",-1)),e(p,{href:"https://github.com/unigeorge"},{default:l(()=>[...s[16]||(s[16]=[a("unigeorge",-1)])]),_:1}),s[21]||(s[21]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[24]||(s[24]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[22]||(s[22]=[a("LCTT",-1)])]),_:1}),s[25]||(s[25]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[23]||(s[23]=[a("Linux中國",-1)])]),_:1}),s[26]||(s[26]=a(" 榮譽推出",-1))])])}const C=i(h,[["render",c]]);export{x as __pageData,C as default};
