import{_ as l,a0 as o,w as d,s as r,ao as e,I as t,x as n,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"如何使用 Sphinx 给 Python 代码写文档 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Sphinx 给 Python 代码写文档 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Sphinx 给 Python 代码写文档 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Sphinx 给 Python 代码写文档 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191121 How to document Python code with Sphinx","title":"如何使用 Sphinx 给 Python 代码写文档","tag":"201911","desc":""},"relativePath":"201911/20191121 How to document Python code with Sphinx.md","filePath":"[post].md"}'),u={name:"201911/20191121 How to document Python code with Sphinx.md"};function h(g,s,c,x,f,b){const a=o("Link");return d(),r("div",null,[s[36]||(s[36]=e(`<h1 id="如何使用-sphinx-给-python-代码写文档" tabindex="-1">如何使用 Sphinx 给 Python 代码写文档 <a class="header-anchor" href="#如何使用-sphinx-给-python-代码写文档" aria-label="Permalink to “如何使用 Sphinx 给 Python 代码写文档”">​</a></h1><blockquote><p>最好将文档作为开发过程的一部分。Sphinx 加上 Tox，让文档可以轻松书写，并且外观漂亮。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/coffee_python.jpg?itok=G04cSvp_" alt="Python in a coffee cup." title="Python in a coffee cup."></p><p>Python 代码可以在源码中包含文档。这种方式默认依靠 <strong>docstring</strong>，它以三引号格式定义。虽然文档的价值是很大的，但是没有充足的文档的代码还是很常见。让我们演练一个场景，了解出色的文档的强大功能。</p><p>经历了太多在白板技术面试上要求你实现斐波那契数列，你已经受够了。你回家用 Python 写了一个可重用的斐波那契计算器，使用浮点技巧来实现 <code>O(1)</code> 复杂度。</p><p>代码很简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># fib.py</span></span>
<span class="line"><span>import math</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_SQRT_5 = math.sqrt(5)</span></span>
<span class="line"><span>_PHI = (1 + _SQRT_5) / 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def approx_fib(n):</span></span>
<span class="line"><span>    return round(_PHI**(n+1) / _SQRT_5)</span></span></code></pre></div><p>（该斐波那契数列是四舍五入到最接近的整数的几何序列，这是我最喜欢的鲜为人知的数学事实之一。）</p>`,8)),t("p",null,[s[1]||(s[1]=n("作为一个好人，你可以将代码开源，并将它放在 ",-1)),p(a,{href:"https://pypi.org/"},{default:i(()=>[...s[0]||(s[0]=[n("PyPI",-1)])]),_:1}),s[2]||(s[2]=n(" 上。",-1)),s[3]||(s[3]=t("code",null,"setup.py",-1)),s[4]||(s[4]=n(" 文件很简单：",-1))]),s[37]||(s[37]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import setuptools</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setuptools.setup(</span></span>
<span class="line"><span>    name=&#39;fib&#39;,</span></span>
<span class="line"><span>    version=&#39;2019.1.0&#39;,</span></span>
<span class="line"><span>    description=&#39;Fibonacci&#39;,</span></span>
<span class="line"><span>    py_modules=[&quot;fib&quot;],</span></span>
<span class="line"><span>)</span></span></code></pre></div>`,1)),t("p",null,[s[6]||(s[6]=n("但是，没有文档的代码是没有用的。因此，你可以向函数添加 docstring。我最喜欢的 docstring 样式之一是 ",-1)),p(a,{href:"http://google.github.io/styleguide/pyguide.html#381-docstrings"},{default:i(()=>[...s[5]||(s[5]=[n("“Google” 样式",-1)])]),_:1}),s[7]||(s[7]=n("。标记很轻量，当它放在源代码中时很好。",-1))]),s[38]||(s[38]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def approx_fib(n):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Approximate Fibonacci sequence</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Args:</span></span>
<span class="line"><span>        n (int): The place in Fibonacci sequence to approximate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Returns:</span></span>
<span class="line"><span>        float: The approximate value in Fibonacci sequence</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    # ...</span></span></code></pre></div><p>但是函数的文档只是成功的一半。普通文档对于情境化代码用法很重要。在这种情况下，情景是恼人的技术面试。</p>`,2)),t("p",null,[s[9]||(s[9]=n("有一种添加更多文档的方式，专业 Python 人的方式通常是在 ",-1)),s[10]||(s[10]=t("code",null,"docs/",-1)),s[11]||(s[11]=n(" 添加 rst 文件（ ",-1)),p(a,{href:"http://docutils.sourceforge.net/rst.html"},{default:i(()=>[...s[8]||(s[8]=[n("reStructuredText",-1)])]),_:1}),s[12]||(s[12]=n(" 的缩写）。因此 ",-1)),s[13]||(s[13]=t("code",null,"docs/index.rst",-1)),s[14]||(s[14]=n(" 文件最终看起来像这样：",-1))]),s[39]||(s[39]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Fibonacci</span></span>
<span class="line"><span>=========</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Are you annoyed at tech interviewers asking you to implement</span></span>
<span class="line"><span>the Fibonacci sequence?</span></span>
<span class="line"><span>Do you want to have some fun with them?</span></span>
<span class="line"><span>A simple</span></span>
<span class="line"><span>:code:\`pip install fib\`</span></span>
<span class="line"><span>is all it takes to tell them to,</span></span>
<span class="line"><span>um,</span></span>
<span class="line"><span>fib off.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.. automodule:: fib</span></span>
<span class="line"><span>   :members:</span></span></code></pre></div><p>我们完成了，对吧？我们已经将文本放在了文件中。人们应该会看的。</p><h3 id="使-python-文档更漂亮" tabindex="-1">使 Python 文档更漂亮 <a class="header-anchor" href="#使-python-文档更漂亮" aria-label="Permalink to “使 Python 文档更漂亮”">​</a></h3>`,3)),t("p",null,[s[16]||(s[16]=n("为了使你的文档看起来更漂亮，你可以利用 ",-1)),p(a,{href:"http://www.sphinx-doc.org/en/master/"},{default:i(()=>[...s[15]||(s[15]=[n("Sphinx",-1)])]),_:1}),s[17]||(s[17]=n("，它旨在制作漂亮的 Python 文档。这三个 Sphinx 扩展特别有用：",-1))]),s[40]||(s[40]=e(`<ul><li><code>sphinx.ext.autodoc</code>：从模块内部获取文档</li><li><code>sphinx.ext.napoleon</code>：支持 Google 样式的 docstring</li><li><code>sphinx.ext.viewcode</code>：将 ReStructured Text 源码与生成的文档打包在一起</li></ul><p>为了告诉 Sphinx 该生成什么以及如何生成，我们在 <code>docs/conf.py</code> 中配置一个辅助文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extensions = [</span></span>
<span class="line"><span>    &#39;sphinx.ext.autodoc&#39;,</span></span>
<span class="line"><span>    &#39;sphinx.ext.napoleon&#39;,</span></span>
<span class="line"><span>    &#39;sphinx.ext.viewcode&#39;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span># 该入口点的名称，没有 .rst 扩展名。</span></span>
<span class="line"><span># 惯例该名称是 index</span></span>
<span class="line"><span>master_doc = &quot;index&quot;</span></span>
<span class="line"><span># 这些值全部用在生成的文档当中。</span></span>
<span class="line"><span># 通常，发布（release）与版本（version）是一样的，</span></span>
<span class="line"><span># 但是有时候我们会有带有 rc 标签的发布。</span></span>
<span class="line"><span>project = &quot;Fib&quot;</span></span>
<span class="line"><span>copyright = &quot;2019, Moshe Zadka&quot;</span></span>
<span class="line"><span>author = &quot;Moshe Zadka&quot;</span></span>
<span class="line"><span>version = release = &quot;2019.1.0&quot;</span></span></code></pre></div>`,3)),t("p",null,[s[19]||(s[19]=n("此文件使我们可以使用所需的所有元数据来发布代码，并注意扩展名（上面的注释说明了方式）。最后，要确保生成我们想要的文档，请使用 ",-1)),p(a,{href:"https://tox.readthedocs.io/en/latest/"},{default:i(()=>[...s[18]||(s[18]=[n("Tox",-1)])]),_:1}),s[20]||(s[20]=n(" 管理虚拟环境以确保我们顺利生成文档：",-1))]),s[41]||(s[41]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[tox]</span></span>
<span class="line"><span># 默认情况下，\`.tox\` 是该目录。</span></span>
<span class="line"><span># 将其放在非点文件中可以从</span></span>
<span class="line"><span># 文件管理器或浏览器的</span></span>
<span class="line"><span># 打开对话框中打开生成的文档，</span></span>
<span class="line"><span># 这些对话框有时会隐藏点文件。</span></span>
<span class="line"><span>toxworkdir = {toxinidir}/build/tox</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[testenv:docs]</span></span>
<span class="line"><span># 从 \`docs\` 目录内运行 \`sphinx\`，</span></span>
<span class="line"><span># 以确保它不会拾取任何可能进入顶层目录下的</span></span>
<span class="line"><span># 虚拟环境或 \`build/\` 目录下的其他工件的杂散文件。</span></span>
<span class="line"><span>changedir = docs</span></span>
<span class="line"><span># 唯一的依赖关系是 \`sphinx\`。</span></span>
<span class="line"><span># 如果我们使用的是单独打包的扩展程序，</span></span>
<span class="line"><span># 我们将在此处指定它们。</span></span>
<span class="line"><span># 更好的做法是指定特定版本的 sphinx。</span></span>
<span class="line"><span>deps =</span></span>
<span class="line"><span>    sphinx</span></span>
<span class="line"><span># 这是用于生成 HTML 的 \`sphinx\` 命令。</span></span>
<span class="line"><span># 在其他情况下，我们可能想生成 PDF 或电子书。</span></span>
<span class="line"><span>commands =</span></span>
<span class="line"><span>    sphinx-build -W -b html -d {envtmpdir}/doctrees . {envtmpdir}/html</span></span>
<span class="line"><span># 我们使用 Python 3.7。</span></span>
<span class="line"><span># Tox 有时会根据 testenv 的名称尝试自动检测它，</span></span>
<span class="line"><span># 但是 \`docs\` 没有给出有用的线索，因此我们必须明确它。</span></span>
<span class="line"><span>basepython = python3.7</span></span></code></pre></div><p>现在，无论何时运行 Tox，它都会为你的 Python 代码生成漂亮的文档。</p><h3 id="在-python-中写文档很好" tabindex="-1">在 Python 中写文档很好 <a class="header-anchor" href="#在-python-中写文档很好" aria-label="Permalink to “在 Python 中写文档很好”">​</a></h3><p>作为 Python 开发人员，我们可以使用的工具链很棒。我们可以从 <strong>docstring</strong> 开始，添加 .rst 文件，然后添加 Sphinx 和 Tox 来为用户美化结果。</p><p>你对好的文档有何评价？你还有其他喜欢的方式么？请在评论中分享它们！</p><hr>`,6)),t("p",null,[s[22]||(s[22]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/19/11/document-python-sphinx"},{default:i(()=>[...s[21]||(s[21]=[n("https://opensource.com/article/19/11/document-python-sphinx",-1)])]),_:1})]),t("p",null,[s[27]||(s[27]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/moshez"},{default:i(()=>[...s[23]||(s[23]=[n("Moshe Zadka",-1)])]),_:1}),s[28]||(s[28]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[24]||(s[24]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 译者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:i(()=>[...s[25]||(s[25]=[n("geekpi",-1)])]),_:1}),s[30]||(s[30]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[33]||(s[33]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:i(()=>[...s[32]||(s[32]=[n("Linux中国",-1)])]),_:1}),s[35]||(s[35]=n(" 荣誉推出",-1))])])}const T=l(u,[["render",h]]);export{y as __pageData,T as default};
