import{_ as l,a0 as o,w as d,s as r,ao as e,I as t,x as n,a1 as p,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"如何使用 Sphinx 給 Python 代碼寫文檔 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Sphinx 給 Python 代碼寫文檔 | LCTT (201911) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Sphinx 給 Python 代碼寫文檔 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Sphinx 給 Python 代碼寫文檔 | LCTT (201911) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201911/20191121 How to document Python code with Sphinx","title":"如何使用 Sphinx 給 Python 代碼寫文檔","tag":"201911","desc":""},"relativePath":"201911/20191121 How to document Python code with Sphinx.md","filePath":"[post].md"}'),u={name:"201911/20191121 How to document Python code with Sphinx.md"};function h(g,s,c,x,f,b){const a=o("Link");return d(),r("div",null,[s[36]||(s[36]=e(`<h1 id="如何使用-sphinx-給-python-代碼寫文檔" tabindex="-1">如何使用 Sphinx 給 Python 代碼寫文檔 <a class="header-anchor" href="#如何使用-sphinx-給-python-代碼寫文檔" aria-label="Permalink to “如何使用 Sphinx 給 Python 代碼寫文檔”">​</a></h1><blockquote><p>最好將文檔作為開發過程的一部分。Sphinx 加上 Tox，讓文檔可以輕鬆書寫，並且外觀漂亮。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/coffee_python.jpg?itok=G04cSvp_" alt="Python in a coffee cup." title="Python in a coffee cup."></p><p>Python 代碼可以在源碼中包含文檔。這種方式默認依靠 <strong>docstring</strong>，它以三引號格式定義。雖然文檔的價值是很大的，但是沒有充足的文檔的代碼還是很常見。讓我們演練一個場景，瞭解出色的文檔的強大功能。</p><p>經歷了太多在白板技術面試上要求你實現斐波那契數列，你已經受夠了。你回家用 Python 寫了一個可重用的斐波那契計算器，使用浮點技巧來實現 <code>O(1)</code> 複雜度。</p><p>代碼很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># fib.py</span></span>
<span class="line"><span>import math</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_SQRT_5 = math.sqrt(5)</span></span>
<span class="line"><span>_PHI = (1 + _SQRT_5) / 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def approx_fib(n):</span></span>
<span class="line"><span>    return round(_PHI**(n+1) / _SQRT_5)</span></span></code></pre></div><p>（該斐波那契數列是四捨五入到最接近的整數的幾何序列，這是我最喜歡的鮮為人知的數學事實之一。）</p>`,8)),t("p",null,[s[1]||(s[1]=n("作為一個好人，你可以將代碼開源，並將它放在 ",-1)),p(a,{href:"https://pypi.org/"},{default:i(()=>[...s[0]||(s[0]=[n("PyPI",-1)])]),_:1}),s[2]||(s[2]=n(" 上。",-1)),s[3]||(s[3]=t("code",null,"setup.py",-1)),s[4]||(s[4]=n(" 文件很簡單：",-1))]),s[37]||(s[37]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>import setuptools</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setuptools.setup(</span></span>
<span class="line"><span>    name=&#39;fib&#39;,</span></span>
<span class="line"><span>    version=&#39;2019.1.0&#39;,</span></span>
<span class="line"><span>    description=&#39;Fibonacci&#39;,</span></span>
<span class="line"><span>    py_modules=[&quot;fib&quot;],</span></span>
<span class="line"><span>)</span></span></code></pre></div>`,1)),t("p",null,[s[6]||(s[6]=n("但是，沒有文檔的代碼是沒有用的。因此，你可以向函數添加 docstring。我最喜歡的 docstring 樣式之一是 ",-1)),p(a,{href:"http://google.github.io/styleguide/pyguide.html#381-docstrings"},{default:i(()=>[...s[5]||(s[5]=[n("“Google” 樣式",-1)])]),_:1}),s[7]||(s[7]=n("。標記很輕量，當它放在源代碼中時很好。",-1))]),s[38]||(s[38]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def approx_fib(n):</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    Approximate Fibonacci sequence</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Args:</span></span>
<span class="line"><span>        n (int): The place in Fibonacci sequence to approximate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Returns:</span></span>
<span class="line"><span>        float: The approximate value in Fibonacci sequence</span></span>
<span class="line"><span>    &quot;&quot;&quot;</span></span>
<span class="line"><span>    # ...</span></span></code></pre></div><p>但是函數的文檔只是成功的一半。普通文檔對於情境化代碼用法很重要。在這種情況下，情景是惱人的技術面試。</p>`,2)),t("p",null,[s[9]||(s[9]=n("有一種添加更多文檔的方式，專業 Python 人的方式通常是在 ",-1)),s[10]||(s[10]=t("code",null,"docs/",-1)),s[11]||(s[11]=n(" 添加 rst 文件（ ",-1)),p(a,{href:"http://docutils.sourceforge.net/rst.html"},{default:i(()=>[...s[8]||(s[8]=[n("reStructuredText",-1)])]),_:1}),s[12]||(s[12]=n(" 的縮寫）。因此 ",-1)),s[13]||(s[13]=t("code",null,"docs/index.rst",-1)),s[14]||(s[14]=n(" 文件最終看起來像這樣：",-1))]),s[39]||(s[39]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Fibonacci</span></span>
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
<span class="line"><span>   :members:</span></span></code></pre></div><p>我們完成了，對吧？我們已經將文本放在了文件中。人們應該會看的。</p><h3 id="使-python-文檔更漂亮" tabindex="-1">使 Python 文檔更漂亮 <a class="header-anchor" href="#使-python-文檔更漂亮" aria-label="Permalink to “使 Python 文檔更漂亮”">​</a></h3>`,3)),t("p",null,[s[16]||(s[16]=n("為了使你的文檔看起來更漂亮，你可以利用 ",-1)),p(a,{href:"http://www.sphinx-doc.org/en/master/"},{default:i(()=>[...s[15]||(s[15]=[n("Sphinx",-1)])]),_:1}),s[17]||(s[17]=n("，它旨在製作漂亮的 Python 文檔。這三個 Sphinx 擴展特別有用：",-1))]),s[40]||(s[40]=e(`<ul><li><code>sphinx.ext.autodoc</code>：從模組內部獲取文檔</li><li><code>sphinx.ext.napoleon</code>：支持 Google 樣式的 docstring</li><li><code>sphinx.ext.viewcode</code>：將 ReStructured Text 源碼與生成的文檔打包在一起</li></ul><p>為了告訴 Sphinx 該生成什麼以及如何生成，我們在 <code>docs/conf.py</code> 中配置一個輔助文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>extensions = [</span></span>
<span class="line"><span>    &#39;sphinx.ext.autodoc&#39;,</span></span>
<span class="line"><span>    &#39;sphinx.ext.napoleon&#39;,</span></span>
<span class="line"><span>    &#39;sphinx.ext.viewcode&#39;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span># 該入口點的名稱，沒有 .rst 擴展名。</span></span>
<span class="line"><span># 慣例該名稱是 index</span></span>
<span class="line"><span>master_doc = &quot;index&quot;</span></span>
<span class="line"><span># 這些值全部用在生成的文檔當中。</span></span>
<span class="line"><span># 通常，發佈（release）與版本（version）是一樣的，</span></span>
<span class="line"><span># 但是有時候我們會有帶有 rc 標籤的發佈。</span></span>
<span class="line"><span>project = &quot;Fib&quot;</span></span>
<span class="line"><span>copyright = &quot;2019, Moshe Zadka&quot;</span></span>
<span class="line"><span>author = &quot;Moshe Zadka&quot;</span></span>
<span class="line"><span>version = release = &quot;2019.1.0&quot;</span></span></code></pre></div>`,3)),t("p",null,[s[19]||(s[19]=n("此文件使我們可以使用所需的所有元數據來發布代碼，並注意擴展名（上面的註釋説明了方式）。最後，要確保生成我們想要的文檔，請使用 ",-1)),p(a,{href:"https://tox.readthedocs.io/en/latest/"},{default:i(()=>[...s[18]||(s[18]=[n("Tox",-1)])]),_:1}),s[20]||(s[20]=n(" 管理虛擬環境以確保我們順利生成文檔：",-1))]),s[41]||(s[41]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[tox]</span></span>
<span class="line"><span># 默認情況下，\`.tox\` 是該目錄。</span></span>
<span class="line"><span># 將其放在非點文件中可以從</span></span>
<span class="line"><span># 文件管理器或瀏覽器的</span></span>
<span class="line"><span># 打開對話框中打開生成的文檔，</span></span>
<span class="line"><span># 這些對話框有時會隱藏點文件。</span></span>
<span class="line"><span>toxworkdir = {toxinidir}/build/tox</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[testenv:docs]</span></span>
<span class="line"><span># 從 \`docs\` 目錄內運行 \`sphinx\`，</span></span>
<span class="line"><span># 以確保它不會拾取任何可能進入頂層目錄下的</span></span>
<span class="line"><span># 虛擬環境或 \`build/\` 目錄下的其他工件的雜散文件。</span></span>
<span class="line"><span>changedir = docs</span></span>
<span class="line"><span># 唯一的依賴關係是 \`sphinx\`。</span></span>
<span class="line"><span># 如果我們使用的是單獨打包的擴展程序，</span></span>
<span class="line"><span># 我們將在此處指定它們。</span></span>
<span class="line"><span># 更好的做法是指定特定版本的 sphinx。</span></span>
<span class="line"><span>deps =</span></span>
<span class="line"><span>    sphinx</span></span>
<span class="line"><span># 這是用於生成 HTML 的 \`sphinx\` 命令。</span></span>
<span class="line"><span># 在其他情況下，我們可能想生成 PDF 或電子書。</span></span>
<span class="line"><span>commands =</span></span>
<span class="line"><span>    sphinx-build -W -b html -d {envtmpdir}/doctrees . {envtmpdir}/html</span></span>
<span class="line"><span># 我們使用 Python 3.7。</span></span>
<span class="line"><span># Tox 有時會根據 testenv 的名稱嘗試自動檢測它，</span></span>
<span class="line"><span># 但是 \`docs\` 沒有給出有用的線索，因此我們必須明確它。</span></span>
<span class="line"><span>basepython = python3.7</span></span></code></pre></div><p>現在，無論何時運行 Tox，它都會為你的 Python 代碼生成漂亮的文檔。</p><h3 id="在-python-中寫文檔很好" tabindex="-1">在 Python 中寫文檔很好 <a class="header-anchor" href="#在-python-中寫文檔很好" aria-label="Permalink to “在 Python 中寫文檔很好”">​</a></h3><p>作為 Python 開發人員，我們可以使用的工具鏈很棒。我們可以從 <strong>docstring</strong> 開始，添加 .rst 文件，然後添加 Sphinx 和 Tox 來為用户美化結果。</p><p>你對好的文檔有何評價？你還有其他喜歡的方式麼？請在評論中分享它們！</p><hr>`,6)),t("p",null,[s[22]||(s[22]=n("via: ",-1)),p(a,{href:"https://opensource.com/article/19/11/document-python-sphinx"},{default:i(()=>[...s[21]||(s[21]=[n("https://opensource.com/article/19/11/document-python-sphinx",-1)])]),_:1})]),t("p",null,[s[27]||(s[27]=n("作者：",-1)),p(a,{href:"https://opensource.com/users/moshez"},{default:i(()=>[...s[23]||(s[23]=[n("Moshe Zadka",-1)])]),_:1}),s[28]||(s[28]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[24]||(s[24]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 譯者：",-1)),p(a,{href:"https://github.com/geekpi"},{default:i(()=>[...s[25]||(s[25]=[n("geekpi",-1)])]),_:1}),s[30]||(s[30]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:i(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),t("p",null,[s[33]||(s[33]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:i(()=>[...s[32]||(s[32]=[n("Linux中國",-1)])]),_:1}),s[35]||(s[35]=n(" 榮譽推出",-1))])])}const T=l(u,[["render",h]]);export{y as __pageData,T as default};
