import{_ as t,a0 as d,w as o,s as r,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"在命令行使用 Pandoc 进行文件转换 | LCTT x X-CMD","titleTemplate":false,"description":"在命令行使用 Pandoc 进行文件转换 | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在命令行使用 Pandoc 进行文件转换 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在命令行使用 Pandoc 进行文件转换 | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20180914 Convert files at the command line with Pandoc","title":"在命令行使用 Pandoc 进行文件转换","tag":"201811","desc":""},"relativePath":"201811/20180914 Convert files at the command line with Pandoc.md","filePath":"[post].md"}'),c={name:"201811/20180914 Convert files at the command line with Pandoc.md"};function h(g,s,u,k,m,b){const p=d("Link");return o(),r("div",null,[s[50]||(s[50]=a("h1",{id:"在命令行使用-pandoc-进行文件转换",tabindex:"-1"},[n("在命令行使用 Pandoc 进行文件转换 "),a("a",{class:"header-anchor",href:"#在命令行使用-pandoc-进行文件转换","aria-label":"Permalink to “在命令行使用 Pandoc 进行文件转换”"},"​")],-1)),s[51]||(s[51]=a("blockquote",null,[a("p",null,"这篇指南介绍如何使用 Pandoc 将文档转换为多种不同的格式。")],-1)),s[52]||(s[52]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/email_paper_envelope_document.png?itok=uPj_kouJ",alt:""})],-1)),s[53]||(s[53]=a("p",null,"Pandoc 是一个命令行工具，用于将文件从一种标记语言转换为另一种标记语言。标记语言使用标签来标记文档的各个部分。常用的标记语言包括 Markdown、ReStructuredText、HTML、LaTex、ePub 和 Microsoft Word DOCX。",-1)),a("p",null,[s[1]||(s[1]=n("简单来说，",-1)),e(p,{href:"https://pandoc.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Pandoc",-1)])]),_:1}),s[2]||(s[2]=n(" 允许你将一些文件从一种标记语言转换为另一种标记语言。典型的例子包括将 Markdown 文件转换为演示文稿、LaTeX，PDF 甚至是 ePub。",-1))]),s[54]||(s[54]=l('<p>本文将解释如何使用 Pandoc 从单一标记语言（在本文中为 Markdown）生成多种格式的文档，引导你完成从 Pandoc 安装，到展示如何创建多种类型的文档，再到提供有关如何编写易于移植到其他格式的文档的提示。</p><p>文中还将解释使用元信息文件对文档内容和元信息（例如，作者姓名、使用的模板、书目样式等）进行分离的意义。</p><h3 id="pandoc-安装和要求" tabindex="-1">Pandoc 安装和要求 <a class="header-anchor" href="#pandoc-安装和要求" aria-label="Permalink to “Pandoc 安装和要求”">​</a></h3><p>Pandoc 默认安装在大多数 Linux 发行版中。本教程使用 pandoc-2.2.3.2 和 pandoc-citeproc-0.14.3。如果不打算生成 PDF，那么这两个包就足够了。但是，我建议也安装 texlive，这样就可以选择生成 PDF 了。</p><p>通过以下命令在 Linux 上安装这些程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install pandoc pandoc-citeproc texlive</span></span></code></pre></div>',6)),a("p",null,[s[4]||(s[4]=n("您可以在 Pandoc 的网站上找到其他平台的 ",-1)),e(p,{href:"http://pandoc.org/installing.html"},{default:i(()=>[...s[3]||(s[3]=[n("安装说明",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),a("p",null,[s[8]||(s[8]=n("我强烈建议安装 ",-1)),e(p,{href:"https://hackage.haskell.org/package/pandoc-crossref"},{default:i(()=>[...s[6]||(s[6]=[n("pandoc-crossref",-1)])]),_:1}),s[9]||(s[9]=n("，这是一个“用于对图表，方程式，表格和交叉引用进行编号的过滤器”。最简单的安装方式是下载 ",-1)),e(p,{href:"https://github.com/lierdakil/pandoc-crossref/releases/tag/v0.3.2.1"},{default:i(()=>[...s[7]||(s[7]=[n("预构建的可执行文件",-1)])]),_:1}),s[10]||(s[10]=n("，但也可以通过以下命令从 Haskell 的软件包管理器 cabal 安装它：",-1))]),s[55]||(s[55]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cabal update</span></span>
<span class="line"><span>cabal install pandoc-crossref</span></span></code></pre></div>`,1)),a("p",null,[s[12]||(s[12]=n("如果需要额外的 Haskell ",-1)),e(p,{href:"https://github.com/lierdakil/pandoc-crossref#installation"},{default:i(()=>[...s[11]||(s[11]=[n("安装信息",-1)])]),_:1}),s[13]||(s[13]=n("，请参考 pandoc-crossref 的 GitHub 仓库。",-1))]),s[56]||(s[56]=l(`<h3 id="几个例子" tabindex="-1">几个例子 <a class="header-anchor" href="#几个例子" aria-label="Permalink to “几个例子”">​</a></h3><p>我将通过解释如何生成三种类型的文档来演示 Pandoc 的工作原理：</p><ul><li>由包含数学公式的 LaTeX 文件创建的网页</li><li>由 Markdown 文件生成的 Reveal.js 幻灯片</li><li>混合 Markdown 和 LaTeX 的合同文件</li></ul><h4 id="创建一个包含数学公式的网站" tabindex="-1">创建一个包含数学公式的网站 <a class="header-anchor" href="#创建一个包含数学公式的网站" aria-label="Permalink to “创建一个包含数学公式的网站”">​</a></h4><p>Pandoc 的优势之一是以不同的输出文件格式显示数学公式。例如，我们可以从包含一些数学符号（用 LaTeX 编写）的 LaTeX 文档（名为 <code>math.tex</code>）生成一个网页。</p><p><code>math.tex</code> 文档如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Pandoc math demos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$a^2 + b^2 = c^2$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$v(t) = v_0 + \\frac{1}{2}at^2$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$\\exists x \\forall y (Rxy \\equiv Ryx)$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$p \\wedge q \\models p$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$\\Box\\diamond p\\equiv\\diamond p$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$\\int_{0}^{1} x dx = \\left[ \\frac{1}{2}x^2 \\right]_{0}^{1} = \\frac{1}{2}$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = \\lim_{n\\rightarrow\\infty} (1+x/n)^n$</span></span></code></pre></div><p>通过输入以下命令将 LaTeX 文档转换为名为 <code>mathMathML.html</code> 的网站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc math.tex -s --mathml  -o mathMathML.html</span></span></code></pre></div><p>参数 <code>-s</code> 告诉 Pandoc 生成一个独立的网页（而不是网页片段，因此它将包括 HTML 中的 head 和 body 标签），<code>-mathml</code> 参数强制 Pandoc 将 LaTeX 中的数学公式转换成 MathML，从而可以由现代浏览器进行渲染。</p><p><img src="https://opensource.com/sites/default/files/uploads/pandoc_math-formulas.png" alt=""></p>`,11)),a("p",null,[s[16]||(s[16]=n("看一下 ",-1)),e(p,{href:"http://pandoc.org/demo/mathMathML.html"},{default:i(()=>[...s[14]||(s[14]=[n("网页效果",-1)])]),_:1}),s[17]||(s[17]=n(" 和 ",-1)),e(p,{href:"https://github.com/kikofernandez/pandoc-examples/tree/master/math"},{default:i(()=>[...s[15]||(s[15]=[n("代码",-1)])]),_:1}),s[18]||(s[18]=n("，代码仓库中的 Makefile 使得运行更加简单。",-1))]),s[57]||(s[57]=a("h4",{id:"制作一个-reveal-js-幻灯片",tabindex:"-1"},[n("制作一个 Reveal.js 幻灯片 "),a("a",{class:"header-anchor",href:"#制作一个-reveal-js-幻灯片","aria-label":"Permalink to “制作一个 Reveal.js 幻灯片”"},"​")],-1)),s[58]||(s[58]=a("p",null,"使用 Pandoc 从 Markdown 文件生成简单的演示文稿很容易。幻灯片包含顶级幻灯片和下面的嵌套幻灯片。可以通过键盘控制演示文稿，从一个顶级幻灯片跳转到下一个顶级幻灯片，或者显示顶级幻灯片下面的嵌套幻灯片。 这种结构在基于 HTML 的演示文稿框架中很常见。",-1)),a("p",null,[s[20]||(s[20]=n("创建一个名为 ",-1)),s[21]||(s[21]=a("code",null,"SLIDES",-1)),s[22]||(s[22]=n(" 的幻灯片文档（参见 ",-1)),e(p,{href:"https://github.com/kikofernandez/pandoc-examples/tree/master/slides"},{default:i(()=>[...s[19]||(s[19]=[n("代码仓库",-1)])]),_:1}),s[23]||(s[23]=n("）。首先，在 ",-1)),s[24]||(s[24]=a("code",null,"％",-1)),s[25]||(s[25]=n(" 后面添加幻灯片的元信息（例如，标题、作者和日期）：",-1))]),s[59]||(s[59]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span></code></pre></div>`,1)),a("p",null,[s[27]||(s[27]=n("这些元信息同时也创建了第一张幻灯片。要添加更多幻灯片，使用 Markdown 的一级标题（在下面例子中的第5行，参考 ",-1)),e(p,{href:"https://daringfireball.net/projects/markdown/syntax#header"},{default:i(()=>[...s[26]||(s[26]=[n("Markdown 的一级标题",-1)])]),_:1}),s[28]||(s[28]=n(" ）生成顶级幻灯片。",-1))]),s[60]||(s[60]=l(`<p>例如，可以通过以下命令创建一个标题为 “Case Study”、顶级幻灯片名为 “Wine Management System” 的演示文稿：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Wine Management System</span></span></code></pre></div>`,2)),a("p",null,[s[30]||(s[30]=n("使用 Markdown 的二级标题将内容（比如包含一个新管理系统的说明和实现的幻灯片）放入刚刚创建的顶级幻灯片。下面添加另外两张幻灯片（在下面例子中的第 7 行和 14 行 ，参考 ",-1)),e(p,{href:"https://daringfireball.net/projects/markdown/syntax#header"},{default:i(()=>[...s[29]||(s[29]=[n("Markdown 的二级标题",-1)])]),_:1}),s[31]||(s[31]=n(" ）。",-1))]),s[61]||(s[61]=l(`<ul><li>第一个二级幻灯片的标题为 “Idea”，并显示瑞士国旗的图像</li><li>第二个二级幻灯片的标题为 “Implementation”</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Wine Management System</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## &lt;img src=&quot;img/SwissFlag.png&quot; style=&quot;vertical-align:middle&quot;/&gt; Idea</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Implementation</span></span></code></pre></div><p>我们现在有一个顶级幻灯片（<code>＃Wine Management System</code>），其中包含两张幻灯片（<code>## Idea</code> 和 <code>## Implementation</code>）。</p><p>通过创建一个由符号 <code>&gt;</code> 开头的 Markdown 列表，在这两张幻灯片中添加一些内容。在上面代码的基础上，在第一张幻灯片中添加两个项目（第 9-10 行），第二张幻灯片中添加五个项目（第 16-20 行）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Wine Management System</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## &lt;img src=&quot;img/SwissFlag.png&quot; style=&quot;vertical-align:middle&quot;/&gt; Idea</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;- Swiss love their **wine** and cheese</span></span>
<span class="line"><span>&gt;- Create a *simple* wine tracker system</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![](img/matterhorn.jpg)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Implementation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;- Bottles have a RFID tag</span></span>
<span class="line"><span>&gt;- RFID reader (emits and read signal)</span></span>
<span class="line"><span>&gt;- **Raspberry Pi**</span></span>
<span class="line"><span>&gt;- **Server (online shop)**</span></span>
<span class="line"><span>&gt;- Mobile app</span></span></code></pre></div><p>上面的代码添加了马特洪峰的图像，也可以使用纯 Markdown 语法或添加 HTML 标签来改进幻灯片。</p><p>要生成幻灯片，Pandoc 需要引用 Reveal.js 库，因此它必须与 <code>SLIDES</code> 文件位于同一文件夹中。生成幻灯片的命令如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -t revealjs -s --self-contained SLIDES \\</span></span>
<span class="line"><span>-V theme=white -V slideNumber=true -o index.html</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/pandoc_matterhorn-slide.png" alt=""></p><p>上面的 Pandoc 命令使用了以下参数：</p><ul><li><code>-t revealjs</code> 表示将输出一个 revealjs 演示文稿</li><li><code>-s</code> 告诉 Pandoc 生成一个独立的文档</li><li><code>--self-contained</code> 生成没有外部依赖关系的 HTML 文件</li><li><code>-V</code> 设置以下变量： <ul><li><code>theme=white</code> 将幻灯片的主题设为白色</li><li><code>slideNumber=true</code> 显示幻灯片编号</li></ul></li><li><code>-o index.html</code> 在名为 <code>index.html</code> 的文件中生成幻灯片</li></ul><p>为了简化操作并避免键入如此长的命令，创建以下 Makefile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>all: generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>    pandoc -t revealjs -s --self-contained SLIDES \\</span></span>
<span class="line"><span>    -V theme=white -V slideNumber=true -o index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean: index.html</span></span>
<span class="line"><span>    rm index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY: all clean generate</span></span></code></pre></div>`,13)),a("p",null,[s[33]||(s[33]=n("可以在 ",-1)),e(p,{href:"https://github.com/kikofernandez/pandoc-examples/tree/master/slides"},{default:i(()=>[...s[32]||(s[32]=[n("这个仓库",-1)])]),_:1}),s[34]||(s[34]=n(" 中找到所有代码。",-1))]),s[62]||(s[62]=l(`<h4 id="制作一份多种格式的合同" tabindex="-1">制作一份多种格式的合同 <a class="header-anchor" href="#制作一份多种格式的合同" aria-label="Permalink to “制作一份多种格式的合同”">​</a></h4><p>假设你正在准备一份文件，并且（这样的情况现在很常见）有些人想用 Microsoft Word 格式，其他人使用自由软件，想要 ODT 格式，而另外一些人则需要 PDF。你不必使用 OpenOffice 或 LibreOffice 来生成 DOCX 或 PDF 格式的文件，可以用 Markdown 创建一份文档（如果需要高级格式，可以使用一些 LaTeX 语法），并生成任何这些文件类型。</p><p>和以前一样，首先声明文档的元信息（标题、作者和日期）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Contract Agreement for Software X</span></span>
<span class="line"><span>% Kiko Fernandez-Reyes</span></span>
<span class="line"><span>% August 28th, 2018</span></span></code></pre></div><p>然后在 Markdown 中编写文档（如果需要高级格式，则添加 LaTeX）。例如，创建一个固定间隔的表格（在 LaTeX 中用 <code>\\hspace{3cm}</code> 声明）以及客户端和承包商应填写的行（在 LaTeX 中用 <code>\\hrulefill</code> 声明）。之后，添加一个用 Markdown 编写的表格。</p><p>创建的文档如下所示：</p><p><img src="https://opensource.com/sites/default/files/uploads/pandoc_agreement.png" alt=""></p><p>创建此文档的代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Contract Agreement for Software X</span></span>
<span class="line"><span>% Kiko Fernandez-Reyes</span></span>
<span class="line"><span>% August 28th, 2018</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Work Order</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\begin{table}[h]</span></span>
<span class="line"><span>\\begin{tabular}{ccc}</span></span>
<span class="line"><span>The Contractor &amp; \\hspace{3cm} &amp; The Customer \\\\</span></span>
<span class="line"><span>&amp; &amp; \\\\</span></span>
<span class="line"><span>&amp; &amp; \\\\</span></span>
<span class="line"><span>\\hrulefill &amp; \\hspace{3cm} &amp; \\hrulefill \\\\</span></span>
<span class="line"><span>%</span></span>
<span class="line"><span>Name &amp; \\hspace{3cm} &amp; Name \\\\</span></span>
<span class="line"><span>&amp; &amp; \\\\</span></span>
<span class="line"><span>&amp; &amp; \\\\</span></span>
<span class="line"><span>\\hrulefill &amp; \\hspace{3cm} &amp; \\hrulefill \\\\</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>\\end{tabular}</span></span>
<span class="line"><span>\\end{table}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\vspace{1cm}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span>
<span class="line"><span>| Type of Service                            | Cost     |     Total   |</span></span>
<span class="line"><span>+:===========================================+=========:+:===========:+</span></span>
<span class="line"><span>| Game Engine                                | 70.0     | 70.0        |</span></span>
<span class="line"><span>|                                            |          |             |</span></span>
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span>
<span class="line"><span>|                                            |          |             |</span></span>
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span>
<span class="line"><span>| Extra: Comply with defined API functions   | 10.0     | 10.0        |</span></span>
<span class="line"><span>|        and expected returned format        |          |             |</span></span>
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span>
<span class="line"><span>|                                            |          |             |</span></span>
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span>
<span class="line"><span>| **Total Cost**                             |          | **80.0**    |</span></span>
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span></code></pre></div><p>要生成此文档所需的三种不同输出格式，编写如下的 Makefile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>DOCS=contract-agreement.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: $(DOCS)</span></span>
<span class="line"><span>    pandoc -s $(DOCS) -o $(DOCS:md=pdf)</span></span>
<span class="line"><span>    pandoc -s $(DOCS) -o $(DOCS:md=docx)</span></span>
<span class="line"><span>    pandoc -s $(DOCS) -o $(DOCS:md=odt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>    rm *.pdf *.docx *.odt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY: all clean</span></span></code></pre></div><p>4 到 7 行是生成三种不同输出格式的具体命令：</p><p>如果有多个 Markdown 文件并想将它们合并到一个文档中，需要按照希望它们出现的顺序编写命令。例如，在撰写本文时，我创建了三个文档：一个介绍文档、三个示例和一些高级用法。以下命令告诉 Pandoc 按指定的顺序将这些文件合并在一起，并生成一个名为 document.pdf 的 PDF 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -s introduction.md examples.md advanced-uses.md -o document.pdf</span></span></code></pre></div><h3 id="模板和元信息" tabindex="-1">模板和元信息 <a class="header-anchor" href="#模板和元信息" aria-label="Permalink to “模板和元信息”">​</a></h3><p>编写复杂的文档并非易事，你需要遵循一系列独立于内容的规则，例如使用特定的模板、编写摘要、嵌入特定字体，甚至可能要声明关键字。所有这些都与内容无关：简单地说，它就是元信息。</p><p>Pandoc 使用模板生成不同的输出格式。例如，有一个 LaTeX 的模板，还有一个 ePub 的模板，等等。这些模板的元信息中有未赋值的变量。使用以下命令找出 Pandoc 模板中可用的元信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -D FORMAT</span></span></code></pre></div><p>例如，LaTex 的模版是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -D latex</span></span></code></pre></div><p>按照以下格式输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$if(title)$</span></span>
<span class="line"><span>\\title{$title$$if(thanks)$\\thanks{$thanks$}$endif$}</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span>$if(subtitle)$</span></span>
<span class="line"><span>\\providecommand{\\subtitle}[1]{}</span></span>
<span class="line"><span>\\subtitle{$subtitle$}</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span>$if(author)$</span></span>
<span class="line"><span>\\author{$for(author)$$author$$sep$ \\and $endfor$}</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span>$if(institute)$</span></span>
<span class="line"><span>\\providecommand{\\institute}[1]{}</span></span>
<span class="line"><span>\\institute{$for(institute)$$institute$$sep$ \\and $endfor$}</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span>\\date{$date$}</span></span>
<span class="line"><span>$if(beamer)$</span></span>
<span class="line"><span>$if(titlegraphic)$</span></span>
<span class="line"><span>\\titlegraphic{\\includegraphics{$titlegraphic$}}</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span>$if(logo)$</span></span>
<span class="line"><span>\\logo{\\includegraphics{$logo$}}</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span>$endif$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\begin{document}</span></span></code></pre></div><p>如你所见，输出的内容中有标题、致谢、作者、副标题和机构模板变量（还有许多其他可用的变量）。可以使用 YAML 元区块轻松设置这些内容。 在下面例子的第 1-5 行中，我们声明了一个 YAML 元区块并设置了一些变量（使用上面合同协议的例子）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>title: Contract Agreement for Software X</span></span>
<span class="line"><span>author: Kiko Fernandez-Reyes</span></span>
<span class="line"><span>date: August 28th, 2018</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(continue writing document as in the previous example)</span></span></code></pre></div><p>这样做非常奏效，相当于以前的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Contract Agreement for Software X</span></span>
<span class="line"><span>% Kiko Fernandez-Reyes</span></span>
<span class="line"><span>% August 28th, 2018</span></span></code></pre></div><p>然而，这样做将元信息与内容联系起来，也即 Pandoc 将始终使用此信息以新格式输出文件。如果你将要生成多种文件格式，最好要小心一点。例如，如果你需要以 ePub 和 HTML 的格式生成合同，并且 ePub 和 HTML 需要不同的样式规则，该怎么办？</p><p>考虑一下这些情况：</p><ul><li>如果你只是尝试嵌入 YAML 变量 <code>css:style-epub.css</code>，那么将从 HTML 版本中移除该变量。这不起作用。</li><li>复制文档显然也不是一个好的解决方案，因为一个版本的更改不会与另一个版本同步。</li><li>你也可以像下面这样将变量添加到 Pandoc 命令中：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -s -V css=style-epub.css document.md document.epub</span></span>
<span class="line"><span>pandoc -s -V css=style-html.css document.md document.html</span></span></code></pre></div><p>我的观点是，这样做很容易从命令行忽略这些变量，特别是当你需要设置数十个变量时（这可能出现在编写复杂文档的情况中）。现在，如果将它们放在同一文件中（<code>meta.yaml</code> 文件），则只需更新或创建新的元信息文件即可生成所需的输出格式。然后你会编写这样的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -s meta-pub.yaml document.md document.epub</span></span>
<span class="line"><span>pandoc -s meta-html.yaml document.md document.html</span></span></code></pre></div><p>这是一个更简洁的版本，你可以从单个文件更新所有元信息，而无需更新文档的内容。</p><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to “结语”">​</a></h3><p>通过以上的基本示例，我展示了 Pandoc 在将 Markdown 文档转换为其他格式方面是多么出色。</p><hr>`,36)),a("p",null,[s[36]||(s[36]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/9/intro-pandoc"},{default:i(()=>[...s[35]||(s[35]=[n("https://opensource.com/article/18/9/intro-pandoc",-1)])]),_:1})]),a("p",null,[s[41]||(s[41]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/kikofernandez"},{default:i(()=>[...s[37]||(s[37]=[n("Kiko Fernandez-Reyes",-1)])]),_:1}),s[42]||(s[42]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[38]||(s[38]=[n("lujun9972",-1)])]),_:1}),s[43]||(s[43]=n(" 译者：",-1)),e(p,{href:"https://github.com/jlztan"},{default:i(()=>[...s[39]||(s[39]=[n("jlztan",-1)])]),_:1}),s[44]||(s[44]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[40]||(s[40]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[47]||(s[47]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[45]||(s[45]=[n("LCTT",-1)])]),_:1}),s[48]||(s[48]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[46]||(s[46]=[n("Linux中国",-1)])]),_:1}),s[49]||(s[49]=n(" 荣誉推出",-1))])])}const T=t(c,[["render",h]]);export{C as __pageData,T as default};
