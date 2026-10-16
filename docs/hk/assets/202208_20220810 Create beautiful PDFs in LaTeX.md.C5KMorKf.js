import{_ as l,a0 as o,w as r,s as d,ao as i,I as t,x as a,a1 as n,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"使用 LaTeX 創建優美的 PDF 文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 LaTeX 創建優美的 PDF 文件 | LCTT (202208) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 LaTeX 創建優美的 PDF 文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 LaTeX 創建優美的 PDF 文件 | LCTT (202208) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202208/20220810 Create beautiful PDFs in LaTeX","title":"使用 LaTeX 創建優美的 PDF 文件","tag":"202208","desc":""},"relativePath":"202208/20220810 Create beautiful PDFs in LaTeX.md","filePath":"[post].md"}'),c={name:"202208/20220810 Create beautiful PDFs in LaTeX.md"};function u(h,s,b,g,m,f){const e=o("Link");return r(),d("div",null,[s[21]||(s[21]=i('<h1 id="使用-latex-創建優美的-pdf-文件" tabindex="-1">使用 LaTeX 創建優美的 PDF 文件 <a class="header-anchor" href="#使用-latex-創建優美的-pdf-文件" aria-label="Permalink to “使用 LaTeX 創建優美的 PDF 文件”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202208/23/120339s9ek65lo8cce5jj4.jpg" alt=""></p><blockquote><p>使用 LaTeX 標記語言來撰寫文檔。</p></blockquote><p>LaTeX 文件準備系統有一段有趣的歷史。在 1968 年，程序員 Don Knuth 用一種老式印刷排版方式，撰寫了他的第一本書《<ruby>計算機程序設計藝術<rt>The Art of Computer Programming</rt></ruby>》。當他在 1976 年出版第二版時，出版商已經轉向現代照相排版技術。</p><p>Knuth 對新版本的外觀不滿意。他從程序員的角度解決問題，決定創建他自己的文字處理系統，這樣以後他出版的書就可以以相同格式排版，擁有相同的外觀。因此，Don Knuth 在 1978 年編寫了第一版 TeX 。</p><p>幾年後，Leslie Lamport 創建了一組宏定義，以便作者更容易編寫複雜文檔。Lamport 的宏定義擴展，即 LaTeX，有效地擴展了 TeX 能夠輕鬆創建各種文檔。例如，許多學術組織使用 LaTeX 出版期刊和論文集。</p><h3 id="使用-latex-編寫文檔" tabindex="-1">使用 LaTeX 編寫文檔 <a class="header-anchor" href="#使用-latex-編寫文檔" aria-label="Permalink to “使用 LaTeX 編寫文檔”">​</a></h3>',7)),t("p",null,[s[1]||(s[1]=a("通過寫一些短文就可以很容易掌握 LaTeX 基礎。讓我們從 ",-1)),n(e,{href:"https://opensource.com/about"},{default:p(()=>[...s[0]||(s[0]=[a("Opensource.com",-1)])]),_:1}),s[2]||(s[2]=a(" 介紹頁面借用一下內容，創建一個示例：",-1))]),s[22]||(s[22]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat about.tex </span></span>
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
<span class="line"><span>\\end{document}</span></span></code></pre></div><p>類似其他文檔格式程序， LaTeX 會將單詞彙集起來，填充成段落 。這意味着你可以在段落中間添加新文本，而不用擔心最終文檔的段落參差不齊。只要你不在段落中添加空行， LaTeX 就會創建完全對齊的段落。當它找到一個空行時， LaTeX 會開啓一個新段落。</p><p>LaTeX 需要一些定義文檔的控制語句。任何 LaTeX 文檔應當以“文檔類別”聲明開始。LaTeX 支持多種文檔，包括書信、書籍和文章。例如，我使用 <code>\\documentclass{article}</code> 設置類別為 “文章” 。</p><p>使用 <code>\\begin{document}</code> 和 <code>\\end{document}</code> 聲明來定義文本的開始和結束。如果你在 <code>\\begin{document}</code> 前添加了文本，那麼 LaTeX 會報錯。在 <code>\\end{document}</code> 之後的文本都會被忽略。</p><p>使用 LaTeX 的 <code>latex</code> 命令處理文檔：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ latex about.tex</span></span>
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
<span class="line"><span>Transcript written on about.log.</span></span></code></pre></div><p>LaTeX 會輸出許多文本，這樣你就可以知道它在幹什麼。若你的文檔包含錯誤， LaTeX 會報錯並提示它可以做什麼。大多數情況下，你可以在提示後輸入 <code>exit</code> 來強制退出 LaTeX 。</p><p>如果用 LaTeX 成功生成一個文檔，會生成一個帶 <code>.dvi</code> 後綴的文件。<code>DVI</code> 表示 “<ruby>設備無關<rt>Device Independent</rt></ruby>”，因為你可以使用不同的工具來生成其他格式。例如， <code>dvipdf</code> 程序可以將 DVI 文件轉換為 PDF 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ dvipdf about.dvi</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output.jpg" alt="LaTeX output"></p><h3 id="添加列表" tabindex="-1">添加列表 <a class="header-anchor" href="#添加列表" aria-label="Permalink to “添加列表”">​</a></h3><p>LaTeX 支持兩種列表：一種以數字開頭的 “枚舉” 列表，一種 “逐項” 或 “項目符號” 列表。在第二段後添加一個簡短的枚舉列表，列出人們可以參與 Opensource.com 的方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\begin{enumerate}</span></span>
<span class="line"><span>\\item Be a writer</span></span>
<span class="line"><span>\\item Be a reader</span></span>
<span class="line"><span>\\end{enumerate}</span></span></code></pre></div><p>與在文檔定義中添加 <code>\\begin</code> 和 <code>\\end</code> 聲明類似，你也需要在列表前後添加 <code>\\begin</code> 和 <code>\\end</code> 聲明。在列表中，每個項目以 <code>\\item</code> 命令開始。當你用 LaTeX 處理該文檔並轉換為 PDF 格式後，你會看到該列表為數字列表：</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-list.jpg" alt="LaTeX output"></p><p>你也可以在列表中嵌套列表。這是一個優雅的功能，如果你需要在列表中為每個條目添加選項。例如，你可以為想要在 Opensource.com 中成為作者的人們提供一些不同的資源。嵌入列表使用單獨的 <code>\\begin</code> 和 <code>\\end</code> 聲明。為了看起來方便，我在示例中添加了空行，但是 LaTeX 會忽略這些空行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\begin{enumerate}</span></span>
<span class="line"><span>\\item Be a writer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  \\begin{itemize}</span></span>
<span class="line"><span>  \\item Resources for writers</span></span>
<span class="line"><span>  \\item Contributor Club</span></span>
<span class="line"><span>  \\item Correspondent Program</span></span>
<span class="line"><span>  \\end{itemize}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\item Be a reader</span></span>
<span class="line"><span>\\end{enumerate}</span></span></code></pre></div><p>作為嵌套列表，新列表嵌入在編號 1 的項目中，因為你在原先的 <code>\\item</code> 聲明之間添加了列表。你可以通過在 <code>\\end{enumerate}</code> 語句前添加新列表，作為編號 2 項目的嵌套列表。</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-list-2.jpg" alt="LaTeX output"></p><h3 id="章節和小節" tabindex="-1">章節和小節 <a class="header-anchor" href="#章節和小節" aria-label="Permalink to “章節和小節”">​</a></h3><p>你可以將冗長文章分成多個章節，這樣更易於閲讀。使用 <code>\\section{...}</code> 語句在大括號內添加章節標題。例如，你可以在文檔頂部添加一個標題為 “About Opensource.com” 的新章節：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head about.tex </span></span>
<span class="line"><span>\\documentclass{article}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\section{About Opensource.com}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Opensource.com is a premier, daily publication focused on</span></span>
<span class="line"><span>open source and Linux tutorials, stories, and resources.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We&#39;re a diverse and inviting group, made up of staff</span></span>
<span class="line"><span>editors, Correspondents, contributors, and readers. We</span></span></code></pre></div><p><code>article</code> 文檔類會在每個主要章節添加編號，並使字體變大來突出顯示。</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-heading.jpg" alt="LaTeX output"></p><p>你可以使用 <code>\\subsection{...}</code> 命令來組織文檔。就像 <code>\\section{...}</code> 命令一樣，在大括號中輸入副標題名稱。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head about.tex</span></span>
<span class="line"><span>\\documentclass{article}</span></span>
<span class="line"><span>\\begin{document}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\section{About Opensource.com}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Opensource.com is a premier, daily publication focused on</span></span>
<span class="line"><span>open source and Linux tutorials, stories, and resources.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\subsection{Welcome to the Opensource.com community}</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-subheading.jpg" alt="LaTeX output"></p><h3 id="標題和作者" tabindex="-1">標題和作者 <a class="header-anchor" href="#標題和作者" aria-label="Permalink to “標題和作者”">​</a></h3><p>用於出版的科學類的文章需要標題、作者以及發表日期。LaTeX 提供了通過插入命令的方式來添加這些信息，然後使用單獨的 <code>\\maketitle</code> 命令生成文章的標題。</p><p>將 “About Us” 作為文章標題，作者為 “Opensource.com Editors”，發表日期為 “July 10, 2022” 。你必須在 <code>\\begin{document}</code> 之後，文章內容前插入這些內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>\\title{About Us}</span></span>
<span class="line"><span>\\author{Opensource.com Editors}</span></span>
<span class="line"><span>\\date{July 10, 2022}</span></span>
<span class="line"><span>\\maketitle</span></span></code></pre></div><p>當你在生成文檔時，LaTeX 會將標題、作者和日期添加到文章的頂部：</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-about.jpg" alt="LaTeX output"></p><h3 id="着重強調" tabindex="-1">着重強調 <a class="header-anchor" href="#着重強調" aria-label="Permalink to “着重強調”">​</a></h3><p>科學和其他技術類文章通常會突出術語和短語。 LaTeX 提供了幾種可以在技術文檔中使用的字體效果，包括強調文本（通常以斜體顯示）、粗體文本和<ruby>小型大寫字母<rt>small caps</rt></ruby>。</p><p>將短語“staff editors, Correspondents, contributors, and readers”放在斜體文本中，並將特定詞“reader”和“writer”放在段落後面的強調文本中。你也可以將“skills, talents, backgrounds, and experiences”加粗。雖然這不是正確的樣式設置方式，但你可以使用小型大寫字母來鍵入 “Linux” 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head -20 about.tex </span></span>
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
<span class="line"><span>as a \\emph{reader} or a \\emph{writer}.</span></span></code></pre></div><p>該示例展示了不同樣式的文本的應用方法。當你需要強調時，使用 <code>\\emph{...}</code> 命令，將強調主題放在大括號內。要以斜體、粗體或小型大寫字母顯示文本，使用 <code>\\text</code> 命令的變體：<code>\\textit{...}</code> 用於斜體，<code>\\textbf{...}</code> 用於粗體，以及 <code>\\ textsc{...}</code> 用於小型大寫字母。LaTeX 支持許多其他方式來設置文本樣式，這些樣式有助於你編寫科學技術類文章。</p><p><img src="https://opensource.com/sites/default/files/2022-08/latex-output-emphasis.jpg" alt="LaTeX output"></p><h3 id="使用-latex" tabindex="-1">使用 LaTeX <a class="header-anchor" href="#使用-latex" aria-label="Permalink to “使用 LaTeX”">​</a></h3>`,40)),t("p",null,[s[4]||(s[4]=a("我只是介紹了使用 LaTeX 撰寫科學技術文章的幾種方式。你也可以在 LaTeX 中添加腳註，進行數學公式和方程的排版，取決於你的需求。你也可以通過閲讀 Opensource.com 中的文章 ",-1)),n(e,{href:"https://opensource.com/article/17/6/introduction-latex"},{default:p(()=>[...s[3]||(s[3]=[a("《在 LaTeX 中創建文檔的介紹》",-1)])]),_:1}),s[5]||(s[5]=a(" ，瞭解使用 LaTeX 撰寫科學技術文章的其他方式。",-1))]),s[23]||(s[23]=t("hr",null,null,-1)),t("p",null,[s[7]||(s[7]=a("via: ",-1)),n(e,{href:"https://opensource.com/article/22/8/pdf-latex"},{default:p(()=>[...s[6]||(s[6]=[a("https://opensource.com/article/22/8/pdf-latex",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=a("作者：",-1)),n(e,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...s[8]||(s[8]=[a("Jim Hall",-1)])]),_:1}),s[13]||(s[13]=a(" 選題：",-1)),n(e,{href:"https://github.com/lkxed"},{default:p(()=>[...s[9]||(s[9]=[a("lkxed",-1)])]),_:1}),s[14]||(s[14]=a(" 譯者：",-1)),n(e,{href:"https://github.com/Donkey-Hao"},{default:p(()=>[...s[10]||(s[10]=[a("Donkey",-1)])]),_:1}),s[15]||(s[15]=a(" 校對：",-1)),n(e,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[18]||(s[18]=a("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原創編譯，",-1)),n(e,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中國",-1)])]),_:1}),s[20]||(s[20]=a(" 榮譽推出",-1))])])}const L=l(c,[["render",u]]);export{x as __pageData,L as default};
