import{_ as i,a0 as r,w as o,s as d,ao as l,I as e,x as n,a1 as p,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Julia 和 Python，哪一个更快？ | LCTT x X-CMD","titleTemplate":false,"description":"Julia 和 Python，哪一个更快？ | LCTT (202210) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Julia 和 Python，哪一个更快？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Julia 和 Python，哪一个更快？ | LCTT (202210) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202210/20220902 Julia and Python- Which Language is Quicker-","title":"Julia 和 Python，哪一个更快？","tag":"202210","desc":""},"relativePath":"202210/20220902 Julia and Python- Which Language is Quicker-.md","filePath":"[post].md"}'),c={name:"202210/20220902 Julia and Python- Which Language is Quicker-.md"};function h(u,s,g,y,m,k){const a=r("Link");return o(),d("div",null,[s[24]||(s[24]=l('<h1 id="julia-和-python-哪一个更快" tabindex="-1">Julia 和 Python，哪一个更快？ <a class="header-anchor" href="#julia-和-python-哪一个更快" aria-label="Permalink to “Julia 和 Python，哪一个更快？”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202210/02/122529vdztvds1ttqez1ts.jpg" alt=""></p><p>Julia 是一门高度抽象的动态编程语言。虽然它是一门能够开发所有程序的通用语言，但它有几个特点，非常适用于科学计算和数值计算。Python 在 1990 年初作为一种简单的面向对象的程序语言出现，如今已经有了显著的发展。本文将从它们在神经网络和机器学习的性能表现上进行讨论。</p><p>Julia 的架构以动态语言中的<ruby>参数多态性<rt>parametric polymorphism</rt></ruby>和<ruby>多重派发<rt>multiple dispatch</rt></ruby>的编程范式为主要特色。它允许使用或不使用<ruby>消息传递接口<rt>message passing interface</rt></ruby>（MPI）或内置的 “OpenMP 式” 线程进行并发、并行和分布式计算，以及直接调用 C 和 FORTRAN 库而无需额外的代码。Julia 使用 <ruby>即时<rt>just-in-time</rt></ruby>（JIT）编译器，Julia 社区将其称为 “<ruby>即时预编译<rt>just-ahead-of-time</rt></ruby>（JAOT）”，因为它在运行之前默认将所有代码编译为机器码。</p><p>与 Python 不同，Julia 是专为统计学和机器学习而设计的。Julia 可以快速的完成线性代数的运算，但 Python 很慢。这是因为 Python 从来都不是为了适应机器学习用到的矩阵和方程而设计的。Python 本身并不差，特别是 Numpy，但在没有使用包的情况下，Julia 更像是为数学量身定制的。相比 Python，Julia 的运算符更像 R，这是一个显著的优势。大部分的线性代数运算可以用更少的时间和精力去完成。</p><p>众所周知，近年来 Python 在机器学习和数据科学领域占据主导地位。因为在 Python 中我们可以使用各种各样的第三方库来帮助我们编写机器学习的代码。虽然 Python 有这么多优势，但仍有一个主要的缺点——它是一门解释性语言，速度非常慢。现在是数据时代，数据越多我们处理它的时间就越长，这也是 Julia 出现的理由。</p><p>到目前为止，有关 Julia 的研究工作都集中在高性能或者 Julia 的科学计算能力等主题上。但在这里，我们将讨论 Julia 不仅能够有效地处理复杂的科学计算，还能够处理基于商业的问题，以及像 Python 一样处理机器学习和神经网络。</p><h3 id="实验目标与实验设计" tabindex="-1">实验目标与实验设计 <a class="header-anchor" href="#实验目标与实验设计" aria-label="Permalink to “实验目标与实验设计”">​</a></h3><p>Julia 像 Python 一样简洁，但却像 C 一样是一门编译语言。首先我们来测试 Julia 要比 Python 快多少。为此，我们先在一些简单的程序上测试它们，然后来到我们实验的重点，测试它们的机器学习和深度学习能力。</p><p>Julia 和 Python 都提供了许多库和开源的基准测试工具。为了在 Julia 中进行基准测试和计算时间，我们使用了 <code>CPUTime</code> 和 <code>time</code> 库；对于 Python，我们同样使用了 <code>time</code> 模块。</p><h3 id="矩阵乘法" tabindex="-1">矩阵乘法 <a class="header-anchor" href="#矩阵乘法" aria-label="Permalink to “矩阵乘法”">​</a></h3>',11)),e("p",null,[s[1]||(s[1]=n("一开始我们尝试了简单的算术运算，但由于这些运算不会产生太大的时间差异，我们决定比较矩阵乘法的时间差异。我们创建了两个 ",-1)),s[2]||(s[2]=e("code",null,"(10 * 10)",-1)),s[3]||(s[3]=n(" 的随机浮点数矩阵，并对它们施以点积。众所周知，Python 有一个 ",-1)),s[4]||(s[4]=e("code",null,"Numpy",-1)),s[5]||(s[5]=n(" 库，常被用于计算矩阵和向量。而 Julia 也有一个 ",-1)),s[6]||(s[6]=e("code",null,"LinearAlgebra",-1)),s[7]||(s[7]=n(" 库，常用于计算矩阵和向量。因此我们分别比较了各自使用和不使用库的矩阵乘法的耗时。本文用到的所有源码已经放在了 ",-1)),p(a,{href:"https://github.com/mr-nerdster/Julia_Research.gitsee"},{default:t(()=>[...s[0]||(s[0]=[n("GitHub 存储库",-1)])]),_:1}),s[8]||(s[8]=n("。下面给出了用 Julia 编写的 10×10 矩阵乘法程序：",-1))]),s[25]||(s[25]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@time LinearAlgebra.mul!(c,x,y)</span></span>
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
<span class="line"><span>MM (generic function with 1 method)</span></span></code></pre></div><p>Julia 使用库耗时 0.000017 秒，使用循环耗时 0.000001 秒。</p><p>使用 Python 编写相同的矩阵乘法程序如下。 从结果可以发现，与不使用库相比，使用库的程序花费的时间更少：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy as np</span></span>
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
<span class="line"><span>Time = 0.0015912055969238281</span></span></code></pre></div><p>Python 使用库耗时 0.0013 秒，使用循环耗时 0.0015 秒。</p><h3 id="线性搜索" tabindex="-1">线性搜索 <a class="header-anchor" href="#线性搜索" aria-label="Permalink to “线性搜索”">​</a></h3><p>我们进行的下一个实验是对十万个随机生成的数字进行线性搜索。这里使用了两种方法，一种是使用 <code>for</code> 循环，另一种是使用运算符。我们使用 1 到 1000 的整数执行了 1000 次搜索，正如你在下面的输出中看到的那样，我们还打印了我们在数据集中找到了多少个整数。下面给出了使用循环和使用 <code>IN</code> 运算符的时间。这里我们使用了 CPU 3 次运行时间的中位数。</p><p>使用 Julia 编写的程序和运行结果如下：</p><p>（LCTT 译注：此处原文缺失 Julia 代码）</p><p>使用 Python 编写的程序和运行结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import numpy as np</span></span>
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
<span class="line"><span>matches: 550</span></span></code></pre></div><p>从以上结果来看，在 Julia 中使用循环和运算符并不会产生显著的时间差异。但是在 Python 中循环几乎比运算符 IN 多花了三倍的时间。有趣的是，在这两种情况下，Julia 都比 Python 快得多。</p><h3 id="线性回归" tabindex="-1">线性回归 <a class="header-anchor" href="#线性回归" aria-label="Permalink to “线性回归”">​</a></h3><p>下一个实验是测试机器学习算法。我们选择了以一种最常见和最简单的机器学习算法，使用简单数据集的线性回归。我们使用了一个包含 237 条数据的数据集 “Head Brain”，数据集的两列分别为 “HeadSize” 和 “BrainWeight”。接下来，我们使用 “head size” 数据去计算 “brain weight”。在 Python 和 Julia 中我们都没有使用第三方库，而是从零实现了线性回归算法。</p><p>Julia：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>GC.gc()</span></span>
<span class="line"><span>@CPUtime begin</span></span>
<span class="line"><span>linear_reg()</span></span>
<span class="line"><span>end</span></span>
<span class="line"><span>elapsed CPU time: 0.000718 seconds</span></span></code></pre></div><p>Python：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gc.collect()</span></span>
<span class="line"><span>start = process_time()</span></span>
<span class="line"><span>linear_reg()</span></span>
<span class="line"><span>end = process_time()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(end-start)</span></span>
<span class="line"><span>elapsed time: 0.007180344000000005</span></span></code></pre></div><p>上面给出了 Julia 和 Python 所花费的时间。</p><h3 id="逻辑回归" tabindex="-1">逻辑回归 <a class="header-anchor" href="#逻辑回归" aria-label="Permalink to “逻辑回归”">​</a></h3><p>接下来，我们使用两种语言的库对最常见的机器学习算法（即逻辑回归）进行了实验。对于 Python 我们使用最常见的库 <code>sklearn</code>；对于 Julia，我们使用 <code>GLM</code> 库。我们在这里用到的数据集是有关银行客户的信息，其中包含 10,000 个数据条目。目标变量是一个二元变量，区分消费者是否继续使用银行账户。</p><p>下面给出了 Julia 进行逻辑回归所花费的时间：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@time log_rec()</span></span>
<span class="line"><span>0.027746 seconds (3.32 k allocations: 10.947 MiB)</span></span></code></pre></div><p>下面给出了 Python 进行逻辑回归所花费的时间：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gc.collect()</span></span>
<span class="line"><span>start = process_time()</span></span>
<span class="line"><span>LogReg()</span></span>
<span class="line"><span>end = process_time()</span></span>
<span class="line"><span>print(end-start)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Accuracy : 0.8068</span></span>
<span class="line"><span>0.34901400000000005</span></span></code></pre></div><h3 id="神经网络" tabindex="-1">神经网络 <a class="header-anchor" href="#神经网络" aria-label="Permalink to “神经网络”">​</a></h3><p>在各种程序和数据集上测试这两种语言后，我们在神经网络上使用 MNIST 数据集继续测试它们。该数据集包含从零到九的手绘数字的灰度图像。每张图像为 28×28 像素。每个像素值表示该像素的亮度或暗度，该值是包含 0 到 255 之间的整数。该数据还包含一个标签列，该列表示在相关图像中绘制的数字。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/07/Figure-1-Example-of-MNIST-data-set.jpg" alt="Figure 1: Example of MNIST data set"></p><p>图 1 是 MNIST 数据集的示例。</p><p>对两种语言我们都建立了一个简单的神经网络来测试它们耗费的时间。神经网络的结构如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Input ---&gt; Hidden layer ---&gt; Output</span></span></code></pre></div><p>该神经网络包含了一个输入层、隐层还有输出层。为了避免神经网络的复杂度过高，我们对数据集没有进行任何的预处理工作。在 Julia 和 Python 中我们都进行了40次训练并比较它们的时间差异。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/07/Figure-2-Julia-takes-5.76-seconds-in-a-neural-network.jpg" alt="Figure 2: Julia takes 5.76 seconds in a neural network"></p><p>在 Julia 中，<code>Flux</code> 库通常被用于建立神经网络；在 Python 中我们常使用 <code>Keras</code> 库。图 2 展示了 Julia 在神经网络上的耗时。图 3 展示了 Python 的神经网络经过了若干次训练的耗时。</p><p><img src="https://www.opensourceforu.com/wp-content/uploads/2022/07/Figure-3-Python-takes-110.3-seconds-in-a-neural-network.jpg" alt="Figure 3: Python takes 110.3 seconds in a neural network"></p><p>这个结果展示了 Julia 和 Python 在处理神经网络时存在巨大的时间差异。</p><p>表 1 总结了此次实验的测试结果并计算了 Julia 和 Python 时间差异的百分比。</p><div class="table-wrap"><table><thead><tr><th style="text-align:left;">实验</th><th style="text-align:left;">Julia（秒）</th><th style="text-align:left;">Python（秒）</th><th style="text-align:left;">时间差（%）</th></tr></thead><tbody><tr><td style="text-align:left;">矩阵乘法（不使用库）</td><td style="text-align:left;">0.000001</td><td style="text-align:left;">0.0015</td><td style="text-align:left;">99.9</td></tr><tr><td style="text-align:left;">矩阵乘法（使用库）</td><td style="text-align:left;">0.000017</td><td style="text-align:left;">0.0013</td><td style="text-align:left;">98.69</td></tr><tr><td style="text-align:left;">线性搜索（使用循环）</td><td style="text-align:left;">0.42</td><td style="text-align:left;">16.4</td><td style="text-align:left;">97.43</td></tr><tr><td style="text-align:left;">线性搜索（使用 IN 操作符）</td><td style="text-align:left;">0.43</td><td style="text-align:left;">6.2</td><td style="text-align:left;">93.06</td></tr><tr><td style="text-align:left;">线性回归</td><td style="text-align:left;">0.000718</td><td style="text-align:left;">0.00718</td><td style="text-align:left;">90</td></tr><tr><td style="text-align:left;">逻辑回归</td><td style="text-align:left;">0.025</td><td style="text-align:left;">0.34901</td><td style="text-align:left;">92.83</td></tr><tr><td style="text-align:left;">神经网络</td><td style="text-align:left;">5.76</td><td style="text-align:left;">110.3</td><td style="text-align:left;">94.77</td></tr></tbody></table></div><p>我们进行的所有实验都表明，随着程序复杂性以及数据集大小的增加，Julia 和 Python 之间的执行时间差异也会增加。由这个结果我们可以推断，Julia 是一门更适合机器学习和神经网络的编程语言。</p><hr>`,41)),e("p",null,[s[10]||(s[10]=n("via: ",-1)),p(a,{href:"https://www.opensourceforu.com/2022/09/julia-and-python-which-language-is-quicker/"},{default:t(()=>[...s[9]||(s[9]=[n("https://www.opensourceforu.com/2022/09/julia-and-python-which-language-is-quicker/",-1)])]),_:1})]),e("p",null,[s[15]||(s[15]=n("作者：",-1)),p(a,{href:"https://www.opensourceforu.com/author/b-thangaraju/"},{default:t(()=>[...s[11]||(s[11]=[n("B Thangaraju",-1)])]),_:1}),s[16]||(s[16]=n(" 选题：",-1)),p(a,{href:"https://github.com/lkxed"},{default:t(()=>[...s[12]||(s[12]=[n("lkxed",-1)])]),_:1}),s[17]||(s[17]=n(" 译者：",-1)),p(a,{href:"https://github.com/Return7g"},{default:t(()=>[...s[13]||(s[13]=[n("Return7g",-1)])]),_:1}),s[18]||(s[18]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:t(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),e("p",null,[s[21]||(s[21]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[19]||(s[19]=[n("LCTT",-1)])]),_:1}),s[22]||(s[22]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:t(()=>[...s[20]||(s[20]=[n("Linux中国",-1)])]),_:1}),s[23]||(s[23]=n(" 荣誉推出",-1))])])}const P=i(c,[["render",h]]);export{x as __pageData,P as default};
