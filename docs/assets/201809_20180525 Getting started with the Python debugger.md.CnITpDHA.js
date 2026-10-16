import{_ as l,a0 as d,w as o,s as r,I as a,x as n,a1 as t,A as e,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"Python 调试器入门 | LCTT x X-CMD","titleTemplate":false,"description":"Python 调试器入门 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Python 调试器入门 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Python 调试器入门 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180525 Getting started with the Python debugger","title":"Python 调试器入门","tag":"201809","desc":""},"relativePath":"201809/20180525 Getting started with the Python debugger.md","filePath":"[post].md"}'),c={name:"201809/20180525 Getting started with the Python debugger.md"};function b(h,s,g,u,k,y){const p=d("Link");return o(),r("div",null,[s[25]||(s[25]=a("h1",{id:"python-调试器入门",tabindex:"-1"},[n("Python 调试器入门 "),a("a",{class:"header-anchor",href:"#python-调试器入门","aria-label":"Permalink to “Python 调试器入门”"},"​")],-1)),s[26]||(s[26]=a("p",null,[a("img",{src:"https://fedoramagazine.org/wp-content/uploads/2018/05/pdb-816x345.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Python 生态系统包含丰富的工具和库，可以让开发人员更加舒适。 例如，我们之前已经介绍了如何",-1)),t(p,{href:"https://fedoramagazine.org/enhance-python-interactive-shell"},{default:e(()=>[...s[0]||(s[0]=[n("使用交互式 shell 增强 Python",-1)])]),_:1}),s[2]||(s[2]=n("。本文重点介绍另一种可以节省时间并提高 Python 技能的工具：Python 调试器。",-1))]),s[27]||(s[27]=i(`<h3 id="python-调试器" tabindex="-1">Python 调试器 <a class="header-anchor" href="#python-调试器" aria-label="Permalink to “Python 调试器”">​</a></h3><p>Python 标准库提供了一个名为 pdb 的调试器。此调试器提供了调试所需的大多数功能，如断点、单行步进、堆栈帧的检查等等。</p><p>了解一些pdb 的基本知识很有用，因为它是标准库的一部分。 你可以在无法安装其他增强的调试器的环境中使用它。</p><h4 id="运行-pdb" tabindex="-1">运行 pdb <a class="header-anchor" href="#运行-pdb" aria-label="Permalink to “运行 pdb”">​</a></h4><p>运行 pdb 的最简单方法是从命令行，将程序作为参数传递来调试。 看看以下脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pdb_test.py</span></span>
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
<span class="line"><span>    countdown(seconds)</span></span></code></pre></div><p>你可以从命令行运行 pdb，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m pdb pdb_test.py</span></span>
<span class="line"><span>&gt; /tmp/pdb_test.py(1)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; from time import sleep</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>使用 pdb 的另一种方法是在程序中设置断点。为此，请导入 <code>pdb</code> 模块并使用<code>set_trace</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># pdb_test.py</span></span>
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
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>脚本在断点处停止，pdb 显示脚本中的下一行。 你也可以在失败后执行调试器。 这称为<ruby>事后调试<rt>postmortem debugging</rt></ruby>。</p><h4 id="穿行于执行堆栈" tabindex="-1">穿行于执行堆栈 <a class="header-anchor" href="#穿行于执行堆栈" aria-label="Permalink to “穿行于执行堆栈”">​</a></h4><p>调试中的一个常见用例是在执行堆栈中穿行。 Python 调试器运行后，可以使用以下命令：</p><ul><li><p><code>w(here)</code>：显示当前执行的行以及执行堆栈的位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) w</span></span>
<span class="line"><span>/tmp/test_pdb.py(16)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; countdown(seconds)</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div></li><li><p><code>l(ist)</code>：显示当前位置周围更多的上下文（代码）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 test_pdb.py</span></span>
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
<span class="line"><span>15  	    seconds = 10</span></span></code></pre></div></li><li><p><code>u(p)</code>/<code>d(own)</code>：向上或向下穿行调用堆栈。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ py3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) up</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(16)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; countdown(seconds)</span></span>
<span class="line"><span>(Pdb) down</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div></li></ul><h4 id="单步执行程序" tabindex="-1">单步执行程序 <a class="header-anchor" href="#单步执行程序" aria-label="Permalink to “单步执行程序”">​</a></h4><p>pdb提供以下命令来执行和单步执行代码：</p><ul><li><p><code>n(ext)</code>：继续执行，直到达到当前函数中的下一行，或者返回</p></li><li><p><code>s(tep)</code>：执行当前行并在第一个可能的场合停止（在被调用的函数或当前函数中）</p></li><li><p><code>c(ontinue)</code>：继续执行，仅在断点处停止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ py3 test_pdb.py</span></span>
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
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>该示例显示了 <code>next</code> 和 <code>step</code> 之间的区别。 实际上，当使用 <code>step</code> 时，调试器会进入 <code>pdb</code> 模块源代码，而接下来就会执行 <code>set_trace</code> 函数。</p></li></ul><h4 id="检查变量内容" tabindex="-1">检查变量内容 <a class="header-anchor" href="#检查变量内容" aria-label="Permalink to “检查变量内容”">​</a></h4><ul><li><p>pdb 非常有用的地方是检查执行堆栈中存储的变量的内容。 例如，<code>a(rgs)</code> 命令打印当前函数的变量，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>py3 test_pdb.py</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) where</span></span>
<span class="line"><span>/tmp/test_pdb.py(16)&lt;module&gt;()</span></span>
<span class="line"><span>-&gt; countdown(seconds)</span></span>
<span class="line"><span>&gt; /tmp/test_pdb.py(10)countdown()</span></span>
<span class="line"><span>-&gt; print(i)</span></span>
<span class="line"><span>(Pdb) args</span></span>
<span class="line"><span>number = 10</span></span>
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>pdb 打印变量的值，在本例中是 10。</p></li><li><p>可用于打印变量值的另一个命令是 <code>p(rint)</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ py3 test_pdb.py</span></span>
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
<span class="line"><span>(Pdb)</span></span></code></pre></div><p>如示例中最后的命令所示，<code>print</code> 可以在显示结果之前计算表达式。</p></li></ul>`,20)),a("p",null,[t(p,{href:"https://docs.python.org/3/library/pdb.html"},{default:e(()=>[...s[3]||(s[3]=[n("Python 文档",-1)])]),_:1}),s[4]||(s[4]=n("包含每个 pdb 命令的参考和示例。 对于开始使用 Python 调试器人来说，这是一个有用的读物。",-1))]),s[28]||(s[28]=a("h3",{id:"增强的调试器",tabindex:"-1"},[n("增强的调试器 "),a("a",{class:"header-anchor",href:"#增强的调试器","aria-label":"Permalink to “增强的调试器”"},"​")],-1)),a("p",null,[s[7]||(s[7]=n("一些增强的调试器提供了更好的用户体验。 大多数为 pdb 添加了有用的额外功能，例如语法突出高亮、更好的回溯和自省。 流行的增强调试器包括 ",-1)),t(p,{href:"https://github.com/gotcha/ipdb"},{default:e(()=>[...s[5]||(s[5]=[n("IPython 的 ipdb",-1)])]),_:1}),s[8]||(s[8]=n(" 和 ",-1)),t(p,{href:"https://github.com/antocuni/pdb"},{default:e(()=>[...s[6]||(s[6]=[n("pdb++",-1)])]),_:1}),s[9]||(s[9]=n("。",-1))]),s[29]||(s[29]=i(`<p>这些示例显示如何在虚拟环境中安装这两个调试器。 这些示例使用新的虚拟环境，但在调试应用程序的情况下，应使用应用程序的虚拟环境。</p><h4 id="安装-ipython-的-ipdb" tabindex="-1">安装 IPython 的 ipdb <a class="header-anchor" href="#安装-ipython-的-ipdb" aria-label="Permalink to “安装 IPython 的 ipdb”">​</a></h4><p>要安装 IPython ipdb，请在虚拟环境中使用 <code>pip</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m venv .test_pdb</span></span>
<span class="line"><span>$ source .test_pdb/bin/activate</span></span>
<span class="line"><span>(test_pdb)$ pip install ipdb</span></span></code></pre></div><p>要在脚本中调用 ipdb，必须使用以下命令。 请注意，该模块称为 ipdb 而不是 pdb：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import ipdb; ipdb.set_trace()</span></span></code></pre></div><p>IPython 的 ipdb 也可以用 Fedora 包安装，所以你可以使用 Fedora 的包管理器 <code>dnf</code> 来安装它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sudo dnf install python3-ipdb</span></span></code></pre></div><h4 id="安装-pdb" tabindex="-1">安装 pdb++ <a class="header-anchor" href="#安装-pdb" aria-label="Permalink to “安装 pdb++”">​</a></h4><p>你可以类似地安装 pdb++：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ python3 -m venv .test_pdb</span></span>
<span class="line"><span>$ source .test_pdb/bin/activate</span></span>
<span class="line"><span>(test_pdb)$ pip install pdbp</span></span></code></pre></div><p>pdb++ 重写了 pdb 模块，因此你可以使用相同的语法在程序中添加断点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import pdb; pdb.set_trace()</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>学习如何使用 Python 调试器可以节省你在排查应用程序问题时的时间。 对于了解应用程序或某些库的复杂部分如何工作也是有用的，从而提高 Python 开发人员的技能。</p><hr>`,16)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),t(p,{href:"https://fedoramagazine.org/getting-started-python-debugger/"},{default:e(()=>[...s[10]||(s[10]=[n("https://fedoramagazine.org/getting-started-python-debugger/",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("作者：",-1)),t(p,{href:"https://fedoramagazine.org"},{default:e(()=>[...s[12]||(s[12]=[n("Clément Verna",-1)])]),_:1}),s[17]||(s[17]=n(" 选题：",-1)),t(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[13]||(s[13]=[n("lujun9972",-1)])]),_:1}),s[18]||(s[18]=n(" 译者：",-1)),t(p,{href:"https://github.com/Flowsnow"},{default:e(()=>[...s[14]||(s[14]=[n("Flowsnow",-1)])]),_:1}),s[19]||(s[19]=n(" 校对：",-1)),t(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[15]||(s[15]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("本文由 ",-1)),t(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[20]||(s[20]=[n("LCTT",-1)])]),_:1}),s[23]||(s[23]=n(" 原创编译，",-1)),t(p,{href:"https://linux.cn/"},{default:e(()=>[...s[21]||(s[21]=[n("Linux中国",-1)])]),_:1}),s[24]||(s[24]=n(" 荣誉推出",-1))])])}const P=l(c,[["render",b]]);export{_ as __pageData,P as default};
