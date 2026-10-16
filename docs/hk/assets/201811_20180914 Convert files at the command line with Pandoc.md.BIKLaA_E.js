import{_ as t,a0 as d,w as o,s as r,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"在命令列使用 Pandoc 進行文件轉換 | LCTT x X-CMD","titleTemplate":false,"description":"在命令列使用 Pandoc 進行文件轉換 | LCTT (201811) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在命令列使用 Pandoc 進行文件轉換 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在命令列使用 Pandoc 進行文件轉換 | LCTT (201811) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201811/20180914 Convert files at the command line with Pandoc","title":"在命令列使用 Pandoc 進行文件轉換","tag":"201811","desc":""},"relativePath":"201811/20180914 Convert files at the command line with Pandoc.md","filePath":"[post].md"}'),c={name:"201811/20180914 Convert files at the command line with Pandoc.md"};function h(g,s,u,k,m,b){const p=d("Link");return o(),r("div",null,[s[50]||(s[50]=a("h1",{id:"在命令列使用-pandoc-進行文件轉換",tabindex:"-1"},[n("在命令列使用 Pandoc 進行文件轉換 "),a("a",{class:"header-anchor",href:"#在命令列使用-pandoc-進行文件轉換","aria-label":"Permalink to “在命令列使用 Pandoc 進行文件轉換”"},"​")],-1)),s[51]||(s[51]=a("blockquote",null,[a("p",null,"這篇指南介紹如何使用 Pandoc 將文檔轉換為多種不同的格式。")],-1)),s[52]||(s[52]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/email_paper_envelope_document.png?itok=uPj_kouJ",alt:""})],-1)),s[53]||(s[53]=a("p",null,"Pandoc 是一個命令列工具，用於將文件從一種標記語言轉換為另一種標記語言。標記語言使用標籤來標記文檔的各個部分。常用的標記語言包括 Markdown、ReStructuredText、HTML、LaTex、ePub 和 Microsoft Word DOCX。",-1)),a("p",null,[s[1]||(s[1]=n("簡單來説，",-1)),e(p,{href:"https://pandoc.org/"},{default:i(()=>[...s[0]||(s[0]=[n("Pandoc",-1)])]),_:1}),s[2]||(s[2]=n(" 允許你將一些文件從一種標記語言轉換為另一種標記語言。典型的例子包括將 Markdown 文件轉換為演示文稿、LaTeX，PDF 甚至是 ePub。",-1))]),s[54]||(s[54]=l('<p>本文將解釋如何使用 Pandoc 從單一標記語言（在本文中為 Markdown）生成多種格式的文檔，引導你完成從 Pandoc 安裝，到展示如何創建多種類型的文檔，再到提供有關如何編寫易於移植到其他格式的文檔的提示。</p><p>文中還將解釋使用元信息文件對文檔內容和元信息（例如，作者姓名、使用的模板、書目樣式等）進行分離的意義。</p><h3 id="pandoc-安裝和要求" tabindex="-1">Pandoc 安裝和要求 <a class="header-anchor" href="#pandoc-安裝和要求" aria-label="Permalink to “Pandoc 安裝和要求”">​</a></h3><p>Pandoc 默認安裝在大多數 Linux 發行版中。本教程使用 pandoc-2.2.3.2 和 pandoc-citeproc-0.14.3。如果不打算生成 PDF，那麼這兩個包就足夠了。但是，我建議也安裝 texlive，這樣就可以選擇生成 PDF 了。</p><p>通過以下命令在 Linux 上安裝這些程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sudo apt-get install pandoc pandoc-citeproc texlive</span></span></code></pre></div>',6)),a("p",null,[s[4]||(s[4]=n("您可以在 Pandoc 的網站上找到其他平台的 ",-1)),e(p,{href:"http://pandoc.org/installing.html"},{default:i(()=>[...s[3]||(s[3]=[n("安裝説明",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),a("p",null,[s[8]||(s[8]=n("我強烈建議安裝 ",-1)),e(p,{href:"https://hackage.haskell.org/package/pandoc-crossref"},{default:i(()=>[...s[6]||(s[6]=[n("pandoc-crossref",-1)])]),_:1}),s[9]||(s[9]=n("，這是一個“用於對圖表，方程式，表格和交叉引用進行編號的過濾器”。最簡單的安裝方式是下載 ",-1)),e(p,{href:"https://github.com/lierdakil/pandoc-crossref/releases/tag/v0.3.2.1"},{default:i(()=>[...s[7]||(s[7]=[n("預構建的可執行文件",-1)])]),_:1}),s[10]||(s[10]=n("，但也可以通過以下命令從 Haskell 的軟件包管理器 cabal 安裝它：",-1))]),s[55]||(s[55]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>cabal update</span></span>
<span class="line"><span>cabal install pandoc-crossref</span></span></code></pre></div>`,1)),a("p",null,[s[12]||(s[12]=n("如果需要額外的 Haskell ",-1)),e(p,{href:"https://github.com/lierdakil/pandoc-crossref#installation"},{default:i(()=>[...s[11]||(s[11]=[n("安裝信息",-1)])]),_:1}),s[13]||(s[13]=n("，請參考 pandoc-crossref 的 GitHub 倉庫。",-1))]),s[56]||(s[56]=l(`<h3 id="幾個例子" tabindex="-1">幾個例子 <a class="header-anchor" href="#幾個例子" aria-label="Permalink to “幾個例子”">​</a></h3><p>我將通過解釋如何生成三種類型的文檔來演示 Pandoc 的工作原理：</p><ul><li>由包含數學公式的 LaTeX 文件創建的網頁</li><li>由 Markdown 文件生成的 Reveal.js 幻燈片</li><li>混合 Markdown 和 LaTeX 的合同文件</li></ul><h4 id="創建一個包含數學公式的網站" tabindex="-1">創建一個包含數學公式的網站 <a class="header-anchor" href="#創建一個包含數學公式的網站" aria-label="Permalink to “創建一個包含數學公式的網站”">​</a></h4><p>Pandoc 的優勢之一是以不同的輸出文件格式顯示數學公式。例如，我們可以從包含一些數學符號（用 LaTeX 編寫）的 LaTeX 文檔（名為 <code>math.tex</code>）生成一個網頁。</p><p><code>math.tex</code> 文檔如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Pandoc math demos</span></span>
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
<span class="line"><span>$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = \\lim_{n\\rightarrow\\infty} (1+x/n)^n$</span></span></code></pre></div><p>通過輸入以下命令將 LaTeX 文檔轉換為名為 <code>mathMathML.html</code> 的網站：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc math.tex -s --mathml  -o mathMathML.html</span></span></code></pre></div><p>參數 <code>-s</code> 告訴 Pandoc 生成一個獨立的網頁（而不是網頁片段，因此它將包括 HTML 中的 head 和 body 標籤），<code>-mathml</code> 參數強制 Pandoc 將 LaTeX 中的數學公式轉換成 MathML，從而可以由現代瀏覽器進行渲染。</p><p><img src="https://opensource.com/sites/default/files/uploads/pandoc_math-formulas.png" alt=""></p>`,11)),a("p",null,[s[16]||(s[16]=n("看一下 ",-1)),e(p,{href:"http://pandoc.org/demo/mathMathML.html"},{default:i(()=>[...s[14]||(s[14]=[n("網頁效果",-1)])]),_:1}),s[17]||(s[17]=n(" 和 ",-1)),e(p,{href:"https://github.com/kikofernandez/pandoc-examples/tree/master/math"},{default:i(()=>[...s[15]||(s[15]=[n("代碼",-1)])]),_:1}),s[18]||(s[18]=n("，代碼倉庫中的 Makefile 使得運行更加簡單。",-1))]),s[57]||(s[57]=a("h4",{id:"製作一個-reveal-js-幻燈片",tabindex:"-1"},[n("製作一個 Reveal.js 幻燈片 "),a("a",{class:"header-anchor",href:"#製作一個-reveal-js-幻燈片","aria-label":"Permalink to “製作一個 Reveal.js 幻燈片”"},"​")],-1)),s[58]||(s[58]=a("p",null,"使用 Pandoc 從 Markdown 文件生成簡單的演示文稿很容易。幻燈片包含頂級幻燈片和下面的嵌套幻燈片。可以通過鍵盤控制演示文稿，從一個頂級幻燈片跳轉到下一個頂級幻燈片，或者顯示頂級幻燈片下面的嵌套幻燈片。 這種結構在基於 HTML 的演示文稿框架中很常見。",-1)),a("p",null,[s[20]||(s[20]=n("創建一個名為 ",-1)),s[21]||(s[21]=a("code",null,"SLIDES",-1)),s[22]||(s[22]=n(" 的幻燈片文檔（參見 ",-1)),e(p,{href:"https://github.com/kikofernandez/pandoc-examples/tree/master/slides"},{default:i(()=>[...s[19]||(s[19]=[n("代碼倉庫",-1)])]),_:1}),s[23]||(s[23]=n("）。首先，在 ",-1)),s[24]||(s[24]=a("code",null,"％",-1)),s[25]||(s[25]=n(" 後面添加幻燈片的元信息（例如，標題、作者和日期）：",-1))]),s[59]||(s[59]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span></code></pre></div>`,1)),a("p",null,[s[27]||(s[27]=n("這些元信息同時也創建了第一張幻燈片。要添加更多幻燈片，使用 Markdown 的一級標題（在下面例子中的第5行，參考 ",-1)),e(p,{href:"https://daringfireball.net/projects/markdown/syntax#header"},{default:i(()=>[...s[26]||(s[26]=[n("Markdown 的一級標題",-1)])]),_:1}),s[28]||(s[28]=n(" ）生成頂級幻燈片。",-1))]),s[60]||(s[60]=l(`<p>例如，可以通過以下命令創建一個標題為 “Case Study”、頂級幻燈片名為 “Wine Management System” 的演示文稿：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Wine Management System</span></span></code></pre></div>`,2)),a("p",null,[s[30]||(s[30]=n("使用 Markdown 的二級標題將內容（比如包含一個新管理系統的説明和實現的幻燈片）放入剛剛創建的頂級幻燈片。下面添加另外兩張幻燈片（在下面例子中的第 7 行和 14 行 ，參考 ",-1)),e(p,{href:"https://daringfireball.net/projects/markdown/syntax#header"},{default:i(()=>[...s[29]||(s[29]=[n("Markdown 的二級標題",-1)])]),_:1}),s[31]||(s[31]=n(" ）。",-1))]),s[61]||(s[61]=l(`<ul><li>第一個二級幻燈片的標題為 “Idea”，並顯示瑞士國旗的圖像</li><li>第二個二級幻燈片的標題為 “Implementation”</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
<span class="line"><span>% Kiko Fernandez Reyes</span></span>
<span class="line"><span>% Sept 27, 2017</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Wine Management System</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## &lt;img src=&quot;img/SwissFlag.png&quot; style=&quot;vertical-align:middle&quot;/&gt; Idea</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Implementation</span></span></code></pre></div><p>我們現在有一個頂級幻燈片（<code>＃Wine Management System</code>），其中包含兩張幻燈片（<code>## Idea</code> 和 <code>## Implementation</code>）。</p><p>通過創建一個由符號 <code>&gt;</code> 開頭的 Markdown 列表，在這兩張幻燈片中添加一些內容。在上面代碼的基礎上，在第一張幻燈片中添加兩個項目（第 9-10 行），第二張幻燈片中添加五個項目（第 16-20 行）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Case Study</span></span>
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
<span class="line"><span>&gt;- Mobile app</span></span></code></pre></div><p>上面的代碼添加了馬特洪峯的圖像，也可以使用純 Markdown 語法或添加 HTML 標籤來改進幻燈片。</p><p>要生成幻燈片，Pandoc 需要引用 Reveal.js 庫，因此它必須與 <code>SLIDES</code> 文件位於同一文件夾中。生成幻燈片的命令如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -t revealjs -s --self-contained SLIDES \\</span></span>
<span class="line"><span>-V theme=white -V slideNumber=true -o index.html</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/uploads/pandoc_matterhorn-slide.png" alt=""></p><p>上面的 Pandoc 命令使用了以下參數：</p><ul><li><code>-t revealjs</code> 表示將輸出一個 revealjs 演示文稿</li><li><code>-s</code> 告訴 Pandoc 生成一個獨立的文檔</li><li><code>--self-contained</code> 生成沒有外部依賴關係的 HTML 文件</li><li><code>-V</code> 設置以下變量： <ul><li><code>theme=white</code> 將幻燈片的主題設為白色</li><li><code>slideNumber=true</code> 顯示幻燈片編號</li></ul></li><li><code>-o index.html</code> 在名為 <code>index.html</code> 的文件中生成幻燈片</li></ul><p>為了簡化操作並避免鍵入如此長的命令，創建以下 Makefile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>all: generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>    pandoc -t revealjs -s --self-contained SLIDES \\</span></span>
<span class="line"><span>    -V theme=white -V slideNumber=true -o index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean: index.html</span></span>
<span class="line"><span>    rm index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY: all clean generate</span></span></code></pre></div>`,13)),a("p",null,[s[33]||(s[33]=n("可以在 ",-1)),e(p,{href:"https://github.com/kikofernandez/pandoc-examples/tree/master/slides"},{default:i(()=>[...s[32]||(s[32]=[n("這個倉庫",-1)])]),_:1}),s[34]||(s[34]=n(" 中找到所有代碼。",-1))]),s[62]||(s[62]=l(`<h4 id="製作一份多種格式的合同" tabindex="-1">製作一份多種格式的合同 <a class="header-anchor" href="#製作一份多種格式的合同" aria-label="Permalink to “製作一份多種格式的合同”">​</a></h4><p>假設你正在準備一份文件，並且（這樣的情況現在很常見）有些人想用 Microsoft Word 格式，其他人使用自由軟件，想要 ODT 格式，而另外一些人則需要 PDF。你不必使用 OpenOffice 或 LibreOffice 來生成 DOCX 或 PDF 格式的文件，可以用 Markdown 創建一份文檔（如果需要高級格式，可以使用一些 LaTeX 語法），並生成任何這些文件類型。</p><p>和以前一樣，首先聲明文檔的元信息（標題、作者和日期）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Contract Agreement for Software X</span></span>
<span class="line"><span>% Kiko Fernandez-Reyes</span></span>
<span class="line"><span>% August 28th, 2018</span></span></code></pre></div><p>然後在 Markdown 中編寫文檔（如果需要高級格式，則添加 LaTeX）。例如，創建一個固定間隔的表格（在 LaTeX 中用 <code>\\hspace{3cm}</code> 聲明）以及客户端和承包商應填寫的行（在 LaTeX 中用 <code>\\hrulefill</code> 聲明）。之後，添加一個用 Markdown 編寫的表格。</p><p>創建的文檔如下所示：</p><p><img src="https://opensource.com/sites/default/files/uploads/pandoc_agreement.png" alt=""></p><p>創建此文檔的代碼如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Contract Agreement for Software X</span></span>
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
<span class="line"><span>+--------------------------------------------|----------|-------------+</span></span></code></pre></div><p>要生成此文檔所需的三種不同輸出格式，編寫如下的 Makefile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>DOCS=contract-agreement.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: $(DOCS)</span></span>
<span class="line"><span>    pandoc -s $(DOCS) -o $(DOCS:md=pdf)</span></span>
<span class="line"><span>    pandoc -s $(DOCS) -o $(DOCS:md=docx)</span></span>
<span class="line"><span>    pandoc -s $(DOCS) -o $(DOCS:md=odt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>    rm *.pdf *.docx *.odt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY: all clean</span></span></code></pre></div><p>4 到 7 行是生成三種不同輸出格式的具體命令：</p><p>如果有多個 Markdown 文件並想將它們合併到一個文檔中，需要按照希望它們出現的順序編寫命令。例如，在撰寫本文時，我創建了三個文檔：一個介紹文檔、三個示例和一些高級用法。以下命令告訴 Pandoc 按指定的順序將這些文件合併在一起，並生成一個名為 document.pdf 的 PDF 文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -s introduction.md examples.md advanced-uses.md -o document.pdf</span></span></code></pre></div><h3 id="模板和元信息" tabindex="-1">模板和元信息 <a class="header-anchor" href="#模板和元信息" aria-label="Permalink to “模板和元信息”">​</a></h3><p>編寫複雜的文檔並非易事，你需要遵循一系列獨立於內容的規則，例如使用特定的模板、編寫摘要、嵌入特定字體，甚至可能要聲明關鍵字。所有這些都與內容無關：簡單地説，它就是元信息。</p><p>Pandoc 使用模板生成不同的輸出格式。例如，有一個 LaTeX 的模板，還有一個 ePub 的模板，等等。這些模板的元信息中有未賦值的變量。使用以下命令找出 Pandoc 模板中可用的元信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -D FORMAT</span></span></code></pre></div><p>例如，LaTex 的模版是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -D latex</span></span></code></pre></div><p>按照以下格式輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$if(title)$</span></span>
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
<span class="line"><span>\\begin{document}</span></span></code></pre></div><p>如你所見，輸出的內容中有標題、致謝、作者、副標題和機構模板變量（還有許多其他可用的變量）。可以使用 YAML 元區塊輕鬆設置這些內容。 在下面例子的第 1-5 行中，我們聲明瞭一個 YAML 元區塊並設置了一些變量（使用上面合同協議的例子）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>---</span></span>
<span class="line"><span>title: Contract Agreement for Software X</span></span>
<span class="line"><span>author: Kiko Fernandez-Reyes</span></span>
<span class="line"><span>date: August 28th, 2018</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(continue writing document as in the previous example)</span></span></code></pre></div><p>這樣做非常奏效，相當於以前的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>% Contract Agreement for Software X</span></span>
<span class="line"><span>% Kiko Fernandez-Reyes</span></span>
<span class="line"><span>% August 28th, 2018</span></span></code></pre></div><p>然而，這樣做將元信息與內容聯繫起來，也即 Pandoc 將始終使用此信息以新格式輸出文件。如果你將要生成多種文件格式，最好要小心一點。例如，如果你需要以 ePub 和 HTML 的格式生成合同，並且 ePub 和 HTML 需要不同的樣式規則，該怎麼辦？</p><p>考慮一下這些情況：</p><ul><li>如果你只是嘗試嵌入 YAML 變量 <code>css:style-epub.css</code>，那麼將從 HTML 版本中移除該變量。這不起作用。</li><li>複製文檔顯然也不是一個好的解決方案，因為一個版本的更改不會與另一個版本同步。</li><li>你也可以像下面這樣將變量添加到 Pandoc 命令中：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -s -V css=style-epub.css document.md document.epub</span></span>
<span class="line"><span>pandoc -s -V css=style-html.css document.md document.html</span></span></code></pre></div><p>我的觀點是，這樣做很容易從命令列忽略這些變量，特別是當你需要設置數十個變量時（這可能出現在編寫複雜文檔的情況中）。現在，如果將它們放在同一文件中（<code>meta.yaml</code> 文件），則只需更新或創建新的元信息文件即可生成所需的輸出格式。然後你會編寫這樣的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>pandoc -s meta-pub.yaml document.md document.epub</span></span>
<span class="line"><span>pandoc -s meta-html.yaml document.md document.html</span></span></code></pre></div><p>這是一個更簡潔的版本，你可以從單個文件更新所有元信息，而無需更新文檔的內容。</p><h3 id="結語" tabindex="-1">結語 <a class="header-anchor" href="#結語" aria-label="Permalink to “結語”">​</a></h3><p>通過以上的基本示例，我展示了 Pandoc 在將 Markdown 文檔轉換為其他格式方面是多麼出色。</p><hr>`,36)),a("p",null,[s[36]||(s[36]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/18/9/intro-pandoc"},{default:i(()=>[...s[35]||(s[35]=[n("https://opensource.com/article/18/9/intro-pandoc",-1)])]),_:1})]),a("p",null,[s[41]||(s[41]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/kikofernandez"},{default:i(()=>[...s[37]||(s[37]=[n("Kiko Fernandez-Reyes",-1)])]),_:1}),s[42]||(s[42]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[38]||(s[38]=[n("lujun9972",-1)])]),_:1}),s[43]||(s[43]=n(" 譯者：",-1)),e(p,{href:"https://github.com/jlztan"},{default:i(()=>[...s[39]||(s[39]=[n("jlztan",-1)])]),_:1}),s[44]||(s[44]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[40]||(s[40]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[47]||(s[47]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[45]||(s[45]=[n("LCTT",-1)])]),_:1}),s[48]||(s[48]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[46]||(s[46]=[n("Linux中國",-1)])]),_:1}),s[49]||(s[49]=n(" 榮譽推出",-1))])])}const T=t(c,[["render",h]]);export{C as __pageData,T as default};
