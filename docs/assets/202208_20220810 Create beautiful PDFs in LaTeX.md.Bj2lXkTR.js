import{_ as l,a0 as o,w as r,s as d,ao as i,I as t,x as a,a1 as n,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"使用 LaTeX 创建优美的 PDF 文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 LaTeX 创建优美的 PDF 文件 | LCTT (202208) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 LaTeX 创建优美的 PDF 文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 LaTeX 创建优美的 PDF 文件 | LCTT (202208) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202208/20220810 Create beautiful PDFs in LaTeX","title":"使用 LaTeX 创建优美的 PDF 文件","tag":"202208","desc":""},"relativePath":"202208/20220810 Create beautiful PDFs in LaTeX.md","filePath":"[post].md"}'),c={name:"202208/20220810 Create beautiful PDFs in LaTeX.md"};function u(h,s,b,g,m,f){const e=o("Link");return r(),d("div",null,[s[21]||(s[21]=i('<h1 id="使用-latex-创建优美的-pdf-文件" tabindex="-1">使用 LaTeX 创建优美的 PDF 文件 <a class="header-anchor" href="#使用-latex-创建优美的-pdf-文件" aria-label="Permalink to “使用 LaTeX 创建优美的 PDF 文件”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202208/23/120339s9ek65lo8cce5jj4.jpg" alt=""></p><blockquote><p>使用 LaTeX 标记语言来撰写文档。</p></blockquote><p>LaTeX 文件准备系统有一段有趣的历史。在 1968 年，程序员 Don Knuth 用一种老式印刷排版方式，撰写了他的第一本书《<ruby>计算机程序设计艺术<rt>The Art of Computer Programming</rt></ruby>》。当他在 1976 年出版第二版时，出版商已经转向现代照相排版技术。</p><p>Knuth 对新版本的外观不满意。他从程序员的角度解决问题，决定创建他自己的文字处理系统，这样以后他出版的书就可以以相同格式排版，拥有相同的外观。因此，Don Knuth 在 1978 年编写了第一版 TeX 。</p><p>几年后，Leslie Lamport 创建了一组宏定义，以便作者更容易编写复杂文档。Lamport 的宏定义扩展，即 LaTeX，有效地扩展了 TeX 能够轻松创建各种文档。例如，许多学术组织使用 LaTeX 出版期刊和论文集。</p><h3 id="使用-latex-编写文档" tabindex="-1">使用 LaTeX 编写文档 <a class="header-anchor" href="#使用-latex-编写文档" aria-label="Permalink to “使用 LaTeX 编写文档”">​</a></h3>',7)),t("p",null,[s[1]||(s[1]=a("通过写一些短文就可以很容易掌握 LaTeX 基础。让我们从 ",-1)),n(e,{href:"https://opensource.com/about"},{default:p(()=>[...s[0]||(s[0]=[a("Opensource.com",-1)])]),_:1}),s[2]||(s[2]=a(" 介绍页面借用一下内容，创建一个示例：",-1))]),s[22]||(s[22]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat about.tex </span></span>
<span class="line"><span>\\documentclass{article}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Opensource.com is a premier, daily publication focused on</span></span>
<span class="line"><span>open source and Linux tutorials, stories, and resources.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;re a diverse and inviting group, made up of staff</span></span>
<span class="line"><span>editors, Correspondents, contributors, and readers. We</span></span>
<span class="line"><span>value differences in skills, talents, backgrounds, and</span></span>
<span class="line"><span>experiences. There are a few different ways to get involved</span></span>
<span class="line"><span>as a reader or a writer.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\end{document}</span></span></code></pre></div><p>类似其他文档格式程序， LaTeX 会将单词汇集起来，填充成段落 。这意味着你可以在段落中间添加新文本，而不用担心最终文档的段落参差不齐。只要你不在段落中添加空行， LaTeX 就会创建完全对齐的段落。当它找到一个空行时， LaTeX 会开启一个新段落。</p><p>LaTeX 需要一些定义文档的控制语句。任何 LaTeX 文档应当以“文档类别”声明开始。LaTeX 支持多种文档，包括书信、书籍和文章。例如，我使用 <code>\\documentclass{article}</code> 设置类别为 “文章” 。</p><p>使用 <code>\\begin{document}</code> 和 <code>\\end{document}</code> 声明来定义文本的开始和结束。如果你在 <code>\\begin{document}</code> 前添加了文本，那么 LaTeX 会报错。在 <code>\\end{document}</code> 之后的文本都会被忽略。</p><p>使用 LaTeX 的 <code>latex</code> 命令处理文档：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ latex about.tex</span></span>
<span class="line"><span>This is pdfTeX, Version 3.141592653-2.6-1.40.22 (TeX Live 2021) (preloaded format=latex)</span></span>
<span class="line"><span> restricted \\write18 enabled.</span></span>
<span class="line"><span>entering extended mode</span></span>
<span class="line"><span>(./about.tex</span></span>
<span class="line"><span>LaTeX2e &lt;2020-10-01&gt; patch level 4</span></span>
<span class="line"><span>(/usr/share/texlive/texmf-dist/tex/latex/base/article.cls</span></span>
<span class="line"><span>Document Class: article 2020/04/10 v1.4m Standard LaTeX document class</span></span>
<span class="line"><span>(/usr/share/texlive/texmf-dist/tex/latex/base/size10.clo))</span></span>
<span class="line"><span>(/usr/share/texlive/texmf-dist/tex/latex/l3backend/l3backend-dvips.def)</span></span>
<span class="line"><span>No file about.aux.</span></span>
<span class="line"><span>[1] (./about.aux) )</span></span>
<span class="line"><span>Output written on about.dvi (1 page, 736 bytes).</span></span>
<span class="line"><span>Transcript written on about.log.</span></span></code></pre></div><p>LaTeX 会输出许多文本，这样你就可以知道它在干什么。若你的文档包含错误， LaTeX 会报错并提示它可以做什么。大多数情况下，你可以在提示后输入 <code>exit</code> 来强制退出 LaTeX 。</p><p>如果用 LaTeX 成功生成一个文档，会生成一个带 <code>.dvi</code> 后缀的文件。<code>DVI</code> 表示 “<ruby>设备无关<rt>Device Independent</rt></ruby>”，因为你可以使用不同的工具来生成其他格式。例如， <code>dvipdf</code> 程序可以将 DVI 文件转换为 PDF 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dvipdf about.dvi</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output.jpg" alt="LaTeX output"></p><h3 id="添加列表" tabindex="-1">添加列表 <a class="header-anchor" href="#添加列表" aria-label="Permalink to “添加列表”">​</a></h3><p>LaTeX 支持两种列表：一种以数字开头的 “枚举” 列表，一种 “逐项” 或 “项目符号” 列表。在第二段后添加一个简短的枚举列表，列出人们可以参与 Opensource.com 的方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\begin{enumerate}</span></span>
<span class="line"><span>\\item Be a writer</span></span>
<span class="line"><span>\\item Be a reader</span></span>
<span class="line"><span>\\end{enumerate}</span></span></code></pre></div><p>与在文档定义中添加 <code>\\begin</code> 和 <code>\\end</code> 声明类似，你也需要在列表前后添加 <code>\\begin</code> 和 <code>\\end</code> 声明。在列表中，每个项目以 <code>\\item</code> 命令开始。当你用 LaTeX 处理该文档并转换为 PDF 格式后，你会看到该列表为数字列表：</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-list.jpg" alt="LaTeX output"></p><p>你也可以在列表中嵌套列表。这是一个优雅的功能，如果你需要在列表中为每个条目添加选项。例如，你可以为想要在 Opensource.com 中成为作者的人们提供一些不同的资源。嵌入列表使用单独的 <code>\\begin</code> 和 <code>\\end</code> 声明。为了看起来方便，我在示例中添加了空行，但是 LaTeX 会忽略这些空行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\begin{enumerate}</span></span>
<span class="line"><span>\\item Be a writer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  \\begin{itemize}</span></span>
<span class="line"><span>  \\item Resources for writers</span></span>
<span class="line"><span>  \\item Contributor Club</span></span>
<span class="line"><span>  \\item Correspondent Program</span></span>
<span class="line"><span>  \\end{itemize}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\item Be a reader</span></span>
<span class="line"><span>\\end{enumerate}</span></span></code></pre></div><p>作为嵌套列表，新列表嵌入在编号 1 的项目中，因为你在原先的 <code>\\item</code> 声明之间添加了列表。你可以通过在 <code>\\end{enumerate}</code> 语句前添加新列表，作为编号 2 项目的嵌套列表。</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-list-2.jpg" alt="LaTeX output"></p><h3 id="章节和小节" tabindex="-1">章节和小节 <a class="header-anchor" href="#章节和小节" aria-label="Permalink to “章节和小节”">​</a></h3><p>你可以将冗长文章分成多个章节，这样更易于阅读。使用 <code>\\section{...}</code> 语句在大括号内添加章节标题。例如，你可以在文档顶部添加一个标题为 “About Opensource.com” 的新章节：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head about.tex </span></span>
<span class="line"><span>\\documentclass{article}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\section{About Opensource.com}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Opensource.com is a premier, daily publication focused on</span></span>
<span class="line"><span>open source and Linux tutorials, stories, and resources.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;re a diverse and inviting group, made up of staff</span></span>
<span class="line"><span>editors, Correspondents, contributors, and readers. We</span></span></code></pre></div><p><code>article</code> 文档类会在每个主要章节添加编号，并使字体变大来突出显示。</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-heading.jpg" alt="LaTeX output"></p><p>你可以使用 <code>\\subsection{...}</code> 命令来组织文档。就像 <code>\\section{...}</code> 命令一样，在大括号中输入副标题名称。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head about.tex</span></span>
<span class="line"><span>\\documentclass{article}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\section{About Opensource.com}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Opensource.com is a premier, daily publication focused on</span></span>
<span class="line"><span>open source and Linux tutorials, stories, and resources.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\subsection{Welcome to the Opensource.com community}</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-subheading.jpg" alt="LaTeX output"></p><h3 id="标题和作者" tabindex="-1">标题和作者 <a class="header-anchor" href="#标题和作者" aria-label="Permalink to “标题和作者”">​</a></h3><p>用于出版的科学类的文章需要标题、作者以及发表日期。LaTeX 提供了通过插入命令的方式来添加这些信息，然后使用单独的 <code>\\maketitle</code> 命令生成文章的标题。</p><p>将 “About Us” 作为文章标题，作者为 “Opensource.com Editors”，发表日期为 “July 10, 2022” 。你必须在 <code>\\begin{document}</code> 之后，文章内容前插入这些内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\title{About Us}</span></span>
<span class="line"><span>\\author{Opensource.com Editors}</span></span>
<span class="line"><span>\\date{July 10, 2022}</span></span>
<span class="line"><span>\\maketitle</span></span></code></pre></div><p>当你在生成文档时，LaTeX 会将标题、作者和日期添加到文章的顶部：</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-about.jpg" alt="LaTeX output"></p><h3 id="着重强调" tabindex="-1">着重强调 <a class="header-anchor" href="#着重强调" aria-label="Permalink to “着重强调”">​</a></h3><p>科学和其他技术类文章通常会突出术语和短语。 LaTeX 提供了几种可以在技术文档中使用的字体效果，包括强调文本（通常以斜体显示）、粗体文本和<ruby>小型大写字母<rt>small caps</rt></ruby>。</p><p>将短语“staff editors, Correspondents, contributors, and readers”放在斜体文本中，并将特定词“reader”和“writer”放在段落后面的强调文本中。你也可以将“skills, talents, backgrounds, and experiences”加粗。虽然这不是正确的样式设置方式，但你可以使用小型大写字母来键入 “Linux” 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head -20 about.tex </span></span>
<span class="line"><span>\\documentclass{article}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\title{About Us}</span></span>
<span class="line"><span>\\author{Opensource.com Editors}</span></span>
<span class="line"><span>\\date{July 10, 2022}</span></span>
<span class="line"><span>\\maketitle</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\section{About Opensource.com}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Opensource.com is a premier, daily publication focused on</span></span>
<span class="line"><span>open source and \\textsc{Linux} tutorials, stories, and resources.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\subsection{Welcome to the Opensource.com community}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;re a diverse and inviting group, made up of \\textit{staff</span></span>
<span class="line"><span>editors, Correspondents, contributors, and readers}. We</span></span>
<span class="line"><span>value differences in \\textbf{skills, talents, backgrounds, and</span></span>
<span class="line"><span>experiences}. There are a few different ways to get involved</span></span>
<span class="line"><span>as a \\emph{reader} or a \\emph{writer}.</span></span></code></pre></div><p>该示例展示了不同样式的文本的应用方法。当你需要强调时，使用 <code>\\emph{...}</code> 命令，将强调主题放在大括号内。要以斜体、粗体或小型大写字母显示文本，使用 <code>\\text</code> 命令的变体：<code>\\textit{...}</code> 用于斜体，<code>\\textbf{...}</code> 用于粗体，以及 <code>\\ textsc{...}</code> 用于小型大写字母。LaTeX 支持许多其他方式来设置文本样式，这些样式有助于你编写科学技术类文章。</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-emphasis.jpg" alt="LaTeX output"></p><h3 id="使用-latex" tabindex="-1">使用 LaTeX <a class="header-anchor" href="#使用-latex" aria-label="Permalink to “使用 LaTeX”">​</a></h3>`,40)),t("p",null,[s[4]||(s[4]=a("我只是介绍了使用 LaTeX 撰写科学技术文章的几种方式。你也可以在 LaTeX 中添加脚注，进行数学公式和方程的排版，取决于你的需求。你也可以通过阅读 Opensource.com 中的文章 ",-1)),n(e,{href:"https://opensource.com/article/17/6/introduction-latex"},{default:p(()=>[...s[3]||(s[3]=[a("《在 LaTeX 中创建文档的介绍》",-1)])]),_:1}),s[5]||(s[5]=a(" ，了解使用 LaTeX 撰写科学技术文章的其他方式。",-1))]),s[23]||(s[23]=t("hr",null,null,-1)),t("p",null,[s[7]||(s[7]=a("via: ",-1)),n(e,{href:"https://opensource.com/article/22/8/pdf-latex"},{default:p(()=>[...s[6]||(s[6]=[a("https://opensource.com/article/22/8/pdf-latex",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=a("作者：",-1)),n(e,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...s[8]||(s[8]=[a("Jim Hall",-1)])]),_:1}),s[13]||(s[13]=a(" 选题：",-1)),n(e,{href:"https://github.com/lkxed"},{default:p(()=>[...s[9]||(s[9]=[a("lkxed",-1)])]),_:1}),s[14]||(s[14]=a(" 译者：",-1)),n(e,{href:"https://github.com/Donkey-Hao"},{default:p(()=>[...s[10]||(s[10]=[a("Donkey",-1)])]),_:1}),s[15]||(s[15]=a(" 校对：",-1)),n(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[18]||(s[18]=a("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原创编译，",-1)),n(e,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中国",-1)])]),_:1}),s[20]||(s[20]=a(" 荣誉推出",-1))])])}const L=l(c,[["render",u]]);export{x as __pageData,L as default};
