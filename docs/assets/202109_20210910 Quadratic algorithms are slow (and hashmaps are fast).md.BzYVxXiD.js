import{_ as i,a0 as t,w as r,s as o,ao as d,I as n,x as a,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"浅谈慢速的二次算法与快速的 hashmap | LCTT x X-CMD","titleTemplate":false,"description":"浅谈慢速的二次算法与快速的 hashmap | LCTT (202109) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"浅谈慢速的二次算法与快速的 hashmap | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"浅谈慢速的二次算法与快速的 hashmap | LCTT (202109) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202109/20210910 Quadratic algorithms are slow (and hashmaps are fast)","title":"浅谈慢速的二次算法与快速的 hashmap","tag":"202109","desc":""},"relativePath":"202109/20210910 Quadratic algorithms are slow (and hashmaps are fast).md","filePath":"[post].md"}'),h={name:"202109/20210910 Quadratic algorithms are slow (and hashmaps are fast).md"};function c(m,s,u,g,y,b){const p=t("Link");return r(),o("div",null,[s[27]||(s[27]=d(`<h1 id="浅谈慢速的二次算法与快速的-hashmap" tabindex="-1">浅谈慢速的二次算法与快速的 hashmap <a class="header-anchor" href="#浅谈慢速的二次算法与快速的-hashmap" aria-label="Permalink to “浅谈慢速的二次算法与快速的 hashmap”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202109/15/094524s7dlcq74ksqazyyc.jpg" alt=""></p><p>大家好！昨天我与一位朋友聊天，他正在准备编程面试，并试图学习一些算法基础知识。</p><p>我们聊到了<ruby>二次时间<rt>quadratic-time</rt></ruby>与<ruby>线性时间<rt>linear-time</rt></ruby>算法的话题，我认为在这里写这篇文章会很有趣，因为避免二次时间算法不仅在面试中很重要——有时在现实生活中了解一下也是很好的！后面我会快速解释一下什么是“二次时间算法” 😃</p><p>以下是我们将要讨论的 3 件事：</p><ol><li>二次时间函数比线性时间函数慢得非常非常多</li><li>有时可以通过使用 hashmap 把二次算法变成线性算法</li><li>这是因为 hashmap 查找非常快（即时查询！）</li></ol><p>我会尽量避免使用数学术语，重点关注真实的代码示例以及它们到底有多快/多慢。</p><h3 id="目标问题-取两个列表的交集" tabindex="-1">目标问题：取两个列表的交集 <a class="header-anchor" href="#目标问题-取两个列表的交集" aria-label="Permalink to “目标问题：取两个列表的交集”">​</a></h3><p>我们来讨论一个简单的面试式问题：获取 2 个数字列表的交集。 例如，<code>intersect([1,2,3], [2,4,5])</code> 应该返回 <code>[2]</code>。</p><p>这个问题也是有些现实应用的——你可以假设有一个真实程序，其需求正是取两个 ID 列表的交集。</p><h3 id="显而易见-的解决方案" tabindex="-1">“显而易见”的解决方案： <a class="header-anchor" href="#显而易见-的解决方案" aria-label="Permalink to ““显而易见”的解决方案：”">​</a></h3><p>我们来写一些获取 2 个列表交集的代码。下面是一个实现此需求的程序，命名为 <code>quadratic.py</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 实际运行的代码</span></span>
<span class="line"><span>def intersection(list1, list2):</span></span>
<span class="line"><span>    result = []</span></span>
<span class="line"><span>    for x in list1:</span></span>
<span class="line"><span>        for y in list2:</span></span>
<span class="line"><span>            if x == y:</span></span>
<span class="line"><span>                result.append(y)</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一些样板，便于我们从命令行运行程序，处理不同大小的列表</span></span>
<span class="line"><span>def run(n):</span></span>
<span class="line"><span>    # 定义两个有 n+1 个元素的列表</span></span>
<span class="line"><span>    list1 = list(range(3, n)) + [2]</span></span>
<span class="line"><span>    list2 = list(range(n+1, 2*n)) + [2]</span></span>
<span class="line"><span>    # 取其交集并输出结果</span></span>
<span class="line"><span>    print(list(intersection(list1, list2)))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用第一个命令行参数作为输入，运行程序</span></span>
<span class="line"><span>run(int(sys.argv[1]))</span></span></code></pre></div><p>程序名为 <code>quadratic.py</code>（LCTT 译注：“quadratic”意为“二次方的”）的原因是：如果 <code>list1</code> 和 <code>list2</code> 的大小为 <code>n</code>，那么内层循环（<code>if x == y</code>）会运行 <code>n^2</code> 次。在数学中，像 <code>x^2</code> 这样的函数就称为“二次”函数。</p><h3 id="quadratic-py-有多慢" tabindex="-1"><code>quadratic.py</code> 有多慢？ <a class="header-anchor" href="#quadratic-py-有多慢" aria-label="Permalink to “quadratic.py 有多慢？”">​</a></h3><p>用一些不同长度的列表来运行这个程序，两个列表的交集总是相同的：<code>[2]</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 quadratic.py 10</span></span>
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
<span class="line"><span>real    0m1.661s</span></span></code></pre></div><p>到目前为止，一切都还不错——程序仍然只花费不到 2 秒的时间。</p><p>然后运行该程序处理两个包含 100,000 个元素的列表，我不得不等待了很长时间。结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 quadratic.py 100000 # 100,000</span></span>
<span class="line"><span>[2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    2m41.059s</span></span></code></pre></div><p>这可以说相当慢了！总共花费了 160 秒，几乎是在 10,000 个元素上运行时（1.6 秒）的 100 倍。所以我们可以看到，在某个点之后，每次我们将列表扩大 10 倍，程序运行的时间就会增加大约 100 倍。</p><p>我没有尝试在 1,000,000 个元素上运行这个程序，因为我知道它会花费又 100 倍的时间——可能大约需要 3 个小时。我没时间这样做！</p><p>你现在大概明白了为什么二次时间算法会成为一个问题——即使是这个非常简单的程序也会很快变得非常缓慢。</p><h3 id="快速版-linear-py" tabindex="-1">快速版：<code>linear.py</code> <a class="header-anchor" href="#快速版-linear-py" aria-label="Permalink to “快速版：linear.py”">​</a></h3><p>好，接下来我们编写一个快速版的程序。我先给你看看程序的样子，然后再分析。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 实际执行的算法</span></span>
<span class="line"><span>def intersection(list1, list2):</span></span>
<span class="line"><span>    set1 = set(list1) # this is a hash set</span></span>
<span class="line"><span>    result = []</span></span>
<span class="line"><span>    for y in list2:</span></span>
<span class="line"><span>        if y in set1:</span></span>
<span class="line"><span>            result.append(y)</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一些样板，便于我们从命令行运行程序，处理不同大小的列表</span></span>
<span class="line"><span>def run(n):</span></span>
<span class="line"><span>    # 定义两个有 n+1 个元素的列表</span></span>
<span class="line"><span>    list1 = range(3, n) + [2]</span></span>
<span class="line"><span>    list2 = range(n+1, 2*n) + [2]</span></span>
<span class="line"><span>    # 输出交集结果</span></span>
<span class="line"><span>    print(intersection(list1, list2))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run(int(sys.argv[1]))</span></span></code></pre></div><p>（这不是最惯用的 Python 使用方式，但我想在尽量避免使用太多 Python 思想的前提下编写代码，以便不了解 Python 的人能够更容易理解）</p><p>这里我们做了两件与慢速版程序不同的事：</p><ol><li>将 <code>list1</code> 转换成名为 <code>set1</code> 的 set 集合</li><li>只使用一个 for 循环而不是两个</li></ol><h3 id="看看-linear-py-程序有多快" tabindex="-1">看看 <code>linear.py</code> 程序有多快 <a class="header-anchor" href="#看看-linear-py-程序有多快" aria-label="Permalink to “看看 linear.py 程序有多快”">​</a></h3><p>在讨论 <em>为什么</em> 这个程序快之前，我们先在一些大型列表上运行该程序，以此证明它确实是很快的。此处演示该程序依次在大小为 10 到 10,000,000 的列表上运行的过程。（请记住，我们上一个的程序在 100,000 个元素上运行时开始变得非常非常慢）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 linear.py 100</span></span>
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
<span class="line"><span>real    0m1.560s</span></span></code></pre></div><h3 id="在极大型列表上运行-linear-py" tabindex="-1">在极大型列表上运行 <code>linear.py</code> <a class="header-anchor" href="#在极大型列表上运行-linear-py" aria-label="Permalink to “在极大型列表上运行 linear.py”">​</a></h3><p>如果我们试着在一个非常非常大的列表（100 亿 / 10,000,000,000 个元素）上运行它，那么实际上会遇到另一个问题：它足够 <em>快</em> 了（该列表仅比花费 4.2 秒的列表大 100 倍，因此我们大概应该能在不超过 420 秒的时间内完成），但我的计算机没有足够的内存来存储列表的所有元素，因此程序在运行结束之前崩溃了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ time python3 linear.py 10000000000</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File &quot;/home/bork/work/homepage/linear.py&quot;, line 18, in &lt;module&gt;</span></span>
<span class="line"><span>    run(int(sys.argv[1]))</span></span>
<span class="line"><span>  File &quot;/home/bork/work/homepage/linear.py&quot;, line 13, in run</span></span>
<span class="line"><span>    list1 = [1] * n + [2]</span></span>
<span class="line"><span>MemoryError</span></span>
<span class="line"><span></span></span>
<span class="line"><span>real    0m0.090s</span></span>
<span class="line"><span>user    0m0.034s</span></span>
<span class="line"><span>sys 0m0.018s</span></span></code></pre></div><p>不过本文不讨论内存使用，所以我们可以忽略这个问题。</p><h3 id="那么-为什么-linear-py-很快呢" tabindex="-1">那么，为什么 <code>linear.py</code> 很快呢？ <a class="header-anchor" href="#那么-为什么-linear-py-很快呢" aria-label="Permalink to “那么，为什么 linear.py 很快呢？”">​</a></h3><p>现在我将试着解释为什么 <code>linear.py</code> 很快。</p><p>再看一下我们的代码:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def intersection(list1, list2):</span></span>
<span class="line"><span>    set1 = set(list1) # this is a hash set</span></span>
<span class="line"><span>    result = []</span></span>
<span class="line"><span>    for y in list2:</span></span>
<span class="line"><span>        if y in set1:</span></span>
<span class="line"><span>            result.append(y)</span></span>
<span class="line"><span>    return result</span></span></code></pre></div><p>假设 <code>list1</code> 和 <code>list2</code> 都是大约 10,000,000 个不同元素的列表，这样的元素数量可以说是很大了！</p><p>那么为什么它还能够运行得如此之快呢？因为 hashmap！！！</p><h3 id="hashmap-查找是即时的-常数级时间" tabindex="-1">hashmap 查找是即时的（“常数级时间”） <a class="header-anchor" href="#hashmap-查找是即时的-常数级时间" aria-label="Permalink to “hashmap 查找是即时的（“常数级时间”）”">​</a></h3><p>我们看一下快速版程序中的 <code>if</code> 语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if y in set1:</span></span>
<span class="line"><span>    result.append(y)</span></span></code></pre></div><p>你可能会认为如果 <code>set1</code> 包含 1000 万个元素，那么这个查找——<code>if y in set1</code> 会比 <code>set1</code> 包含 1000 个元素时慢。但事实并非如此！无论 <code>set1</code> 有多大，所需时间基本是相同的（超级快）。</p><p>这是因为 <code>set1</code> 是一个哈希集合，它是一种只有键没有值的 hashmap（hashtable）结构。</p>`,47)),n("p",null,[s[3]||(s[3]=a("我不准备在本文中解释 ",-1)),s[4]||(s[4]=n("em",null,"为什么",-1)),s[5]||(s[5]=a(" hashmap 查找是即时的，但是神奇的 Vaidehi Joshi 的 ",-1)),e(p,{href:"https://medium.com/basecs"},{default:l(()=>[...s[0]||(s[0]=[a("basecs",-1)])]),_:1}),s[6]||(s[6]=a(" 系列中有关于 ",-1)),e(p,{href:"https://medium.com/basecs/taking-hash-tables-off-the-shelf-139cbf4752f0"},{default:l(()=>[...s[1]||(s[1]=[a("hash table",-1)])]),_:1}),s[7]||(s[7]=a(" 和 ",-1)),e(p,{href:"https://medium.com/basecs/hashing-out-hash-functions-ea5dd8beb4dd"},{default:l(()=>[...s[2]||(s[2]=[a("hash 函数",-1)])]),_:1}),s[8]||(s[8]=a(" 的解释，其中讨论了 hashmap 即时查找的原因。",-1))]),s[28]||(s[28]=n("h3",{id:"不经意的二次方-现实中的二次算法",tabindex:"-1"},[a("不经意的二次方：现实中的二次算法！ "),n("a",{class:"header-anchor",href:"#不经意的二次方-现实中的二次算法","aria-label":"Permalink to “不经意的二次方：现实中的二次算法！”"},"​")],-1)),n("p",null,[s[10]||(s[10]=a("二次时间算法真的很慢，我们看到的的这个问题实际上在现实中也会遇到——Nelson Elhage 有一个很棒的博客，名为 ",-1)),e(p,{href:"https://accidentallyquadratic.tumblr.com/"},{default:l(()=>[...s[9]||(s[9]=[a("不经意的二次方",-1)])]),_:1}),s[11]||(s[11]=a("，其中有关于不经意以二次时间算法运行代码导致性能问题的故事。",-1))]),s[29]||(s[29]=n("h3",{id:"二次时间算法可能会-偷袭-你",tabindex:"-1"},[a("二次时间算法可能会“偷袭”你 "),n("a",{class:"header-anchor",href:"#二次时间算法可能会-偷袭-你","aria-label":"Permalink to “二次时间算法可能会“偷袭”你”"},"​")],-1)),s[30]||(s[30]=n("p",null,"关于二次时间算法的奇怪之处在于，当你在少量元素（如 1000）上运行它们时，它看起来并没有那么糟糕！没那么慢！但是如果你给它 1,000,000 个元素，它真的会花费几个小时去运行。",-1)),s[31]||(s[31]=n("p",null,"所以我认为它还是值得深入了解的，这样你就可以避免无意中使用二次时间算法，特别是当有一种简单的方法来编写线性时间算法（例如使用 hashmap）时。",-1)),s[32]||(s[32]=n("h3",{id:"总是让我感到一丝神奇的-hashmap",tabindex:"-1"},[a("总是让我感到一丝神奇的 hashmap "),n("a",{class:"header-anchor",href:"#总是让我感到一丝神奇的-hashmap","aria-label":"Permalink to “总是让我感到一丝神奇的 hashmap”"},"​")],-1)),s[33]||(s[33]=n("p",null,[a("hashmap 当然不是魔法（你可以学习一下为什么 hashmap 查找是即时的！真的很酷！），但它总是让人 "),n("em",null,"感觉"),a(" 有点神奇，每次我在程序中使用 hashmap 来加速，都会使我感到开心 😃")],-1)),s[34]||(s[34]=n("hr",null,null,-1)),n("p",null,[s[13]||(s[13]=a("via: ",-1)),e(p,{href:"https://jvns.ca/blog/2021/09/10/hashmaps-make-things-fast/"},{default:l(()=>[...s[12]||(s[12]=[a("https://jvns.ca/blog/2021/09/10/hashmaps-make-things-fast/",-1)])]),_:1})]),n("p",null,[s[18]||(s[18]=a("作者：",-1)),e(p,{href:"https://jvns.ca/"},{default:l(()=>[...s[14]||(s[14]=[a("Julia Evans",-1)])]),_:1}),s[19]||(s[19]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[15]||(s[15]=[a("lujun9972",-1)])]),_:1}),s[20]||(s[20]=a(" 译者：",-1)),e(p,{href:"https://github.com/unigeorge"},{default:l(()=>[...s[16]||(s[16]=[a("unigeorge",-1)])]),_:1}),s[21]||(s[21]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[17]||(s[17]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[24]||(s[24]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[22]||(s[22]=[a("LCTT",-1)])]),_:1}),s[25]||(s[25]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[23]||(s[23]=[a("Linux中国",-1)])]),_:1}),s[26]||(s[26]=a(" 荣誉推出",-1))])])}const C=i(h,[["render",c]]);export{x as __pageData,C as default};
