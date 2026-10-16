import{_ as l,a0 as t,w as d,s as c,ao as o,I as i,x as a,a1 as e,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"一些命令列小技巧：wc、sort、sed 和 tr | LCTT x X-CMD","titleTemplate":false,"description":"一些命令列小技巧：wc、sort、sed 和 tr | LCTT (202108) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一些命令列小技巧：wc、sort、sed 和 tr | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一些命令列小技巧：wc、sort、sed 和 tr | LCTT (202108) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202108/20210726 Command line quick tips- wc, sort, sed and tr","title":"一些命令列小技巧：wc、sort、sed 和 tr","tag":"202108","desc":""},"relativePath":"202108/20210726 Command line quick tips- wc, sort, sed and tr.md","filePath":"[post].md"}'),r={name:"202108/20210726 Command line quick tips- wc, sort, sed and tr.md"};function h(k,s,g,u,b,y){const n=t("Link");return d(),c("div",null,[s[15]||(s[15]=o(`<h1 id="一些命令列小技巧-wc、sort、sed-和-tr" tabindex="-1">一些命令列小技巧：wc、sort、sed 和 tr <a class="header-anchor" href="#一些命令列小技巧-wc、sort、sed-和-tr" aria-label="Permalink to “一些命令列小技巧：wc、sort、sed 和 tr”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202108/10/085720hyd795y1wrmd5rx9.jpg" alt=""></p><p>Linux 發行版十分好用，而且它們有一些用户可能不知道的技巧。讓我們來看看一些命令列實用工具，當你熱衷於終端而不是 GUI 時，它們可能更順手。</p><p>我們都知道在一個系統上使用終端會更高效。當你編輯和排版一個文本文件時，終端會讓你確切的感受到，生活如此簡單。</p><p>本文將向你介紹 <code>wc</code>、<code>sort</code>、<code>tr</code> 和 <code>sed</code> 命令。</p><h3 id="wc" tabindex="-1">wc <a class="header-anchor" href="#wc" aria-label="Permalink to “wc”">​</a></h3><p><code>wc</code> 是一個實用工具，全稱是 “word count”。顧名思義，它可以用來統計任何文件的行數、單詞數和字節數。</p><p>讓我們來看看它是如何工作的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc filename</span></span>
<span class="line"><span>lines words characters filename</span></span></code></pre></div><p>輸出的是文件的行數、單詞數、字符數和文件名。</p><p>想獲得特定的輸出，我們必須使用選項：</p><ul><li><code>-c</code> 打印字節總數</li><li><code>-l</code> 打印行數</li><li><code>-w</code> 打印單詞總數</li><li><code>-m</code> 打印字符總數</li></ul><h4 id="wc-示例" tabindex="-1">wc 示例 <a class="header-anchor" href="#wc-示例" aria-label="Permalink to “wc 示例”">​</a></h4><p>讓我們來看看它的運行結果。</p><p>讓我們從一個文本文件 <code>lormipsm.txt</code> 開始。首先，我們通過 <code>cat</code> 查看文件內容，然後使用 <code>wc</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat loremipsm.txt</span></span>
<span class="line"><span>Linux is the best-known and most-used open source operating system.</span></span>
<span class="line"><span>As an operating system, Linux is software that sits underneath all of the other software on a computer,</span></span>
<span class="line"><span>receiving requests from those programs and replaying these requests to the computer&#39;s hardware.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ wc loremipsm.txt</span></span>
<span class="line"><span>3 41 268 loremipsm.txt</span></span></code></pre></div><p>假設我只想查看文件的字節數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -c loremipsm.txt</span></span>
<span class="line"><span>268 loremipsm.txt</span></span></code></pre></div><p>查看文件的行數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -l loremipsm.txt</span></span>
<span class="line"><span>3 loremipsm.txt</span></span></code></pre></div><p>查看文件的單詞數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -w loremipsm.txt</span></span>
<span class="line"><span>41 loremipsm.txt</span></span></code></pre></div><p>現在只查看文件的字符數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -m loremipsm.txt</span></span>
<span class="line"><span>268 loremipsm.txt</span></span></code></pre></div><h3 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-label="Permalink to “sort”">​</a></h3><p><code>sort</code> 命令是最有用的工具之一。它會對文件的數據進行排序。可以根據字符或數字進行升序或降序排列。它也可以用來對文件中的行進行排序和隨機化。</p><p>使用 <code>sort</code> 非常簡單。我們需要做的僅僅是提供一個文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort filename</span></span></code></pre></div><p>默認的是按照字母順序對數據進行排序。需要注意的是 <code>sort</code> 命令僅僅是對數據進行排序展示。它並不會改寫文件。</p><p>使用 <code>sort</code> 命令的一些有用的選項：</p><ul><li><code>-r</code> 將文件中的行按倒序進行排序</li><li><code>-R</code> 將文件中的行打亂為隨機順序</li><li><code>-o</code> 將輸出保存到另一個文件中</li><li><code>-k</code> 按照特定列進行排序</li><li><code>-t</code> 使用指定的分隔符，而不使用空格</li><li><code>-n</code> 根據數值對數據進行排序</li></ul><h4 id="sort-示例" tabindex="-1">sort 示例 <a class="header-anchor" href="#sort-示例" aria-label="Permalink to “sort 示例”">​</a></h4><p>讓我們看看 <code>sort</code> 的幾個簡單示例。</p><p>我們有一個 <code>list.txt</code> 的文件，包含逗號分隔的名稱和數值。</p><p>首先讓我們打印出文件內容並簡單排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat list.txt</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Shyam Head, 2</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Kristian Felix, 10</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sort list.txt</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Kristian Felix, 10</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Shyam Head, 2</span></span></code></pre></div><p>現在對數據進行倒序排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -r list.txt</span></span>
<span class="line"><span>Shyam Head, 2</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Kristian Felix, 10</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span></code></pre></div><p>讓我們打亂數據：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -R list.txt</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span>
<span class="line"><span>Kristian Felix, 10</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Shyam Head, 2</span></span></code></pre></div><p>來看一點更復雜的。這次我們根據第二個字段，也就是數值對數據進行排序，並使用 <code>-o</code> 選項將輸出保存到另一個文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -n -k2 -t &#39;,&#39; -o sorted_list.txt list.txt</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>   sorted_list.txt    list.txt</span></span>
<span class="line"><span>$ cat sorted_list.txt</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Shyam Head, 2</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Kristian Felix, 10</span></span></code></pre></div><p>這裏我們使用 <code>-n</code> 選項按數字順序進行排序，<code>-k</code> 選項用來指定要排序的字段（在本例中為第 2 個字段），<code>-t</code> 選項指定分隔符或字段分隔符（逗號），<code>-o</code> 選項將輸出保存到 <code>sorted_list.txt</code> 文件中。</p><h3 id="sed" tabindex="-1">sed <a class="header-anchor" href="#sed" aria-label="Permalink to “sed”">​</a></h3><p><code>sed</code> 是一個流編輯器，用於過濾和轉換輸出中的文本。這意味着我們不需要對原文件進行修改，只需要對輸出進行修改。如果需要，我們可以將更改保存到一個新的文件中。<code>sed</code> 提供了很多有用的選項用於過濾和編輯數據。</p><p><code>sed</code> 的語法格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed [OPTION] ‘PATTERN’ filename</span></span></code></pre></div><p>sed 常用的一些選項：</p><ul><li><code>-n</code> 取消默認輸出</li><li><code>p</code> 打印指定的數據</li><li><code>d</code> 刪除指定行</li><li><code>q</code> 退出 <code>sed</code> 腳本</li></ul><h4 id="sed-示例" tabindex="-1">sed 示例 <a class="header-anchor" href="#sed-示例" aria-label="Permalink to “sed 示例”">​</a></h4><p>我們來看看 <code>sed</code> 是如何運作的。我們從 <code>data</code> 文件開始，其中的字段表示編號、名稱、年齡和操作系統。</p><p>如果行出現在特定的行範圍內，該行將打印 2 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat data</span></span>
<span class="line"><span>1    Vicky Grant      20   linux</span></span>
<span class="line"><span>2    Nora Burton    19   Mac</span></span>
<span class="line"><span>3    Willis Castillo   21  Windows</span></span>
<span class="line"><span>4    Gilberto Mack 30   Windows</span></span>
<span class="line"><span>5    Aubrey Hayes  17   windows</span></span>
<span class="line"><span>6    Allan Snyder    21   mac</span></span>
<span class="line"><span>7    Freddie Dean   25   linux</span></span>
<span class="line"><span>8    Ralph Martin    19   linux</span></span>
<span class="line"><span>9    Mindy Howard  20   Mac</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sed &#39;3,7 p&#39; data</span></span>
<span class="line"><span>1    Vicky Grant      20   linux</span></span>
<span class="line"><span>2    Nora Burton    19   Mac</span></span>
<span class="line"><span>3    Willis Castillo   21  Windows</span></span>
<span class="line"><span>3    Willis Castillo   21  Windows</span></span>
<span class="line"><span>4    Gilberto Mack 30   Windows</span></span>
<span class="line"><span>4    Gilberto Mack 30   Windows</span></span>
<span class="line"><span>5    Aubrey Hayes  17   windows</span></span>
<span class="line"><span>5    Aubrey Hayes  17   windows</span></span>
<span class="line"><span>6    Allan Snyder    21   mac</span></span>
<span class="line"><span>6    Allan Snyder    21   mac</span></span>
<span class="line"><span>7    Freddie Dean   25   linux</span></span>
<span class="line"><span>7    Freddie Dean   25   linux</span></span>
<span class="line"><span>8    Ralph Martin    19   linux</span></span>
<span class="line"><span>9    Mindy Howard 20   Mac</span></span></code></pre></div><p>這裏的操作用單引號括起來，表示第 3 行和第 7 行，並且使用了 <code>p</code> 打印出符合匹配規則的數據。sed 的默認行為是在解析後打印每一行。這意味着由於使用了 <code>p</code> ，第 3 行到第 7 行打印了兩次。</p><p>如何打印文件中特定的行？使用 <code>-n</code> 選項來消除在輸出中不匹配的行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -n &#39;3,7 p&#39; data</span></span>
<span class="line"><span>3    Willis Castillo     21    Windows</span></span>
<span class="line"><span>4    Gilberto Mack    30   Windows</span></span>
<span class="line"><span>5    Aubrey Hayes     17   windows</span></span>
<span class="line"><span>6    Allan Snyder       21   mac</span></span>
<span class="line"><span>7    Freddie Dean      25  linux</span></span></code></pre></div><p>使用 ‘-n’ 僅僅只有第 3 行到第 7 行會被打印。</p><p>省略文件中的特定行。使用 <code>d</code> 從輸出中刪除行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed &#39;3 d&#39; data</span></span>
<span class="line"><span>1    Vicky Grant      20    linux</span></span>
<span class="line"><span>2   Nora Burton     19    Mac</span></span>
<span class="line"><span>4   Gilberto Mack  30    Windows</span></span>
<span class="line"><span>5   Aubrey Hayes   17    windows</span></span>
<span class="line"><span>6   Allan Snyder     21    mac</span></span>
<span class="line"><span>7   Freddie Dean    25   linux</span></span>
<span class="line"><span>8   Ralph Martin    19    linux</span></span>
<span class="line"><span>9   Mindy Howard  20   Mac</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sed &#39;5,9 d&#39; data</span></span>
<span class="line"><span>1    Vicky Grant     20   linux</span></span>
<span class="line"><span>2   Nora Burton    19   Mac</span></span>
<span class="line"><span>3   Willis Castillo   21   Windows</span></span>
<span class="line"><span>4   Gilberto Mack 30   Windows</span></span></code></pre></div><p>從文件中搜索特定的關鍵字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -n &#39;/linux/ p&#39; data</span></span>
<span class="line"><span>7    Freddie Dean   25  linux</span></span>
<span class="line"><span>8    Ralph Martin   19   linux</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sed -n &#39;/linux/I p&#39; data</span></span>
<span class="line"><span>1     Vicky Grant      20  Linux</span></span>
<span class="line"><span>7     Freddie Dean  25  linux</span></span>
<span class="line"><span>8     Ralph Martin   19  linux</span></span></code></pre></div><p>在這些例子中，我們在 <code>/ /</code> 中使用了一個正則表達式。如果文件中有類似的單詞，但大小寫不一致，可以使用 <code>I</code> 使得搜索不區分大小寫。回想一下，<code>-n</code> 刪除了輸出中不匹配的行。</p><p>替換文件中的單詞：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed &#39;s/linux/linus/&#39; data</span></span>
<span class="line"><span>1   Vicky Grant      20   Linux</span></span>
<span class="line"><span>2   Nora Burton    19   Mac</span></span>
<span class="line"><span>3   Willis Castillo   21   Windows</span></span>
<span class="line"><span>4   Gilberto Mack  30  Windows</span></span>
<span class="line"><span>5   Aubrey Hayes   17  windows</span></span>
<span class="line"><span>6   Allan Snyder     21  mac</span></span>
<span class="line"><span>7   Freddie Dean    25 linus</span></span>
<span class="line"><span>8   Ralph Martin    19  linus</span></span>
<span class="line"><span>9   Mindy Howard 20  Mac</span></span></code></pre></div><p>這裏 <code>s/ / /</code> 表示它是一個正則表達式。在兩個 <code>/</code> 之間的就是定位的單詞和需要替換的新單詞。</p><h3 id="tr" tabindex="-1">tr <a class="header-anchor" href="#tr" aria-label="Permalink to “tr”">​</a></h3><p><code>tr</code> 命令可以用來轉換或刪除字符。它可以將小寫字母轉換為大寫字母，也可以將大寫字母轉換為小寫字母，可以消除重複字符，也可以刪除特定字符。</p><p><code>tr</code> 的奇怪之處在於，它不同於 <code>wc</code>、<code>sort</code>、<code>sed</code> 那樣接受文件作為輸入。我們使用 <code>|</code> （管道符）為 <code>tr</code> 命令提供輸入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat filename | tr [OPTION]</span></span></code></pre></div><p><code>tr</code> 命令使用的一些選項：</p><ul><li><code>-d</code> 刪除給定輸入第一個集合中的指定字符，不做轉換</li><li><code>-s</code> 將重複出現的字符替換為單個</li></ul><h4 id="tr-示例" tabindex="-1">tr 示例 <a class="header-anchor" href="#tr-示例" aria-label="Permalink to “tr 示例”">​</a></h4><p>現在讓我們使用 <code>tr</code> 命令將 <code>letter</code> 文件中的所有小寫字符轉換為大寫字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat letter</span></span>
<span class="line"><span>Linux is too easy to learn,</span></span>
<span class="line"><span>And you should try it too.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ cat letter | tr &#39;a-z&#39; &#39;A-Z&#39;</span></span>
<span class="line"><span>LINUX IS TOO EASY TO LEARN,</span></span>
<span class="line"><span>AND YOU SHOULD TRY IT TOO.</span></span></code></pre></div><p>這裏的 <code>a-z</code>、<code>A-Z</code> 表示我們想要將 <code>a</code> 到 <code>z</code> 範圍內的小寫字符轉換為大寫字符。</p><p>刪除文件中的 <code>o</code> 字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat letter | tr -d &#39;o&#39;</span></span>
<span class="line"><span>Linux is t easy t learn,</span></span>
<span class="line"><span>And yu shuld try it t.</span></span></code></pre></div><p>從文件中壓縮字符 <code>o</code> 意味着如果 <code>o</code> 在文件中重複出現，那麼它將會被刪除並且只打印一次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat letter | tr -s &#39;o&#39;</span></span>
<span class="line"><span>Linux is to easy to learn,</span></span>
<span class="line"><span>And you should try it to.</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>這是使用 <code>wc</code>、<code>sort</code>、<code>sed</code>、<code>tr</code> 命令的快速演示。這些命令可以方便快捷的操作終端上的文本文件。你可以使用 <code>man</code> 命令來了解這些命令的更多信息。</p><hr>`,82)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://fedoramagazine.org/command-line-quick-tips-wc-sort-sed-and-tr/"},{default:p(()=>[...s[0]||(s[0]=[a("https://fedoramagazine.org/command-line-quick-tips-wc-sort-sed-and-tr/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://fedoramagazine.org/author/mahesh1b/"},{default:p(()=>[...s[2]||(s[2]=[a("mahesh1b",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),e(n,{href:"https://github.com/perfiffer"},{default:p(()=>[...s[4]||(s[4]=[a("perfiffer",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const w=l(r,[["render",h]]);export{x as __pageData,w as default};
