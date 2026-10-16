import{_ as l,a0 as t,w as d,s as c,ao as o,I as i,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"一些命令行小技巧：wc、sort、sed 和 tr | LCTT x X-CMD","titleTemplate":false,"description":"一些命令行小技巧：wc、sort、sed 和 tr | LCTT (202108) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一些命令行小技巧：wc、sort、sed 和 tr | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一些命令行小技巧：wc、sort、sed 和 tr | LCTT (202108) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202108/20210726 Command line quick tips- wc, sort, sed and tr","title":"一些命令行小技巧：wc、sort、sed 和 tr","tag":"202108","desc":""},"relativePath":"202108/20210726 Command line quick tips- wc, sort, sed and tr.md","filePath":"[post].md"}'),r={name:"202108/20210726 Command line quick tips- wc, sort, sed and tr.md"};function h(k,s,g,u,b,y){const n=t("Link");return d(),c("div",null,[s[15]||(s[15]=o(`<h1 id="一些命令行小技巧-wc、sort、sed-和-tr" tabindex="-1">一些命令行小技巧：wc、sort、sed 和 tr <a class="header-anchor" href="#一些命令行小技巧-wc、sort、sed-和-tr" aria-label="Permalink to “一些命令行小技巧：wc、sort、sed 和 tr”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202108/10/085720hyd795y1wrmd5rx9.jpg" alt=""></p><p>Linux 发行版十分好用，而且它们有一些用户可能不知道的技巧。让我们来看看一些命令行实用工具，当你热衷于终端而不是 GUI 时，它们可能更顺手。</p><p>我们都知道在一个系统上使用终端会更高效。当你编辑和排版一个文本文件时，终端会让你确切的感受到，生活如此简单。</p><p>本文将向你介绍 <code>wc</code>、<code>sort</code>、<code>tr</code> 和 <code>sed</code> 命令。</p><h3 id="wc" tabindex="-1">wc <a class="header-anchor" href="#wc" aria-label="Permalink to “wc”">​</a></h3><p><code>wc</code> 是一个实用工具，全称是 “word count”。顾名思义，它可以用来统计任何文件的行数、单词数和字节数。</p><p>让我们来看看它是如何工作的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc filename</span></span>
<span class="line"><span>lines words characters filename</span></span></code></pre></div><p>输出的是文件的行数、单词数、字符数和文件名。</p><p>想获得特定的输出，我们必须使用选项：</p><ul><li><code>-c</code> 打印字节总数</li><li><code>-l</code> 打印行数</li><li><code>-w</code> 打印单词总数</li><li><code>-m</code> 打印字符总数</li></ul><h4 id="wc-示例" tabindex="-1">wc 示例 <a class="header-anchor" href="#wc-示例" aria-label="Permalink to “wc 示例”">​</a></h4><p>让我们来看看它的运行结果。</p><p>让我们从一个文本文件 <code>lormipsm.txt</code> 开始。首先，我们通过 <code>cat</code> 查看文件内容，然后使用 <code>wc</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat loremipsm.txt</span></span>
<span class="line"><span>Linux is the best-known and most-used open source operating system.</span></span>
<span class="line"><span>As an operating system, Linux is software that sits underneath all of the other software on a computer,</span></span>
<span class="line"><span>receiving requests from those programs and replaying these requests to the computer&#39;s hardware.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ wc loremipsm.txt</span></span>
<span class="line"><span>3 41 268 loremipsm.txt</span></span></code></pre></div><p>假设我只想查看文件的字节数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -c loremipsm.txt</span></span>
<span class="line"><span>268 loremipsm.txt</span></span></code></pre></div><p>查看文件的行数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -l loremipsm.txt</span></span>
<span class="line"><span>3 loremipsm.txt</span></span></code></pre></div><p>查看文件的单词数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -w loremipsm.txt</span></span>
<span class="line"><span>41 loremipsm.txt</span></span></code></pre></div><p>现在只查看文件的字符数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wc -m loremipsm.txt</span></span>
<span class="line"><span>268 loremipsm.txt</span></span></code></pre></div><h3 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-label="Permalink to “sort”">​</a></h3><p><code>sort</code> 命令是最有用的工具之一。它会对文件的数据进行排序。可以根据字符或数字进行升序或降序排列。它也可以用来对文件中的行进行排序和随机化。</p><p>使用 <code>sort</code> 非常简单。我们需要做的仅仅是提供一个文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort filename</span></span></code></pre></div><p>默认的是按照字母顺序对数据进行排序。需要注意的是 <code>sort</code> 命令仅仅是对数据进行排序展示。它并不会改写文件。</p><p>使用 <code>sort</code> 命令的一些有用的选项：</p><ul><li><code>-r</code> 将文件中的行按倒序进行排序</li><li><code>-R</code> 将文件中的行打乱为随机顺序</li><li><code>-o</code> 将输出保存到另一个文件中</li><li><code>-k</code> 按照特定列进行排序</li><li><code>-t</code> 使用指定的分隔符，而不使用空格</li><li><code>-n</code> 根据数值对数据进行排序</li></ul><h4 id="sort-示例" tabindex="-1">sort 示例 <a class="header-anchor" href="#sort-示例" aria-label="Permalink to “sort 示例”">​</a></h4><p>让我们看看 <code>sort</code> 的几个简单示例。</p><p>我们有一个 <code>list.txt</code> 的文件，包含逗号分隔的名称和数值。</p><p>首先让我们打印出文件内容并简单排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat list.txt</span></span>
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
<span class="line"><span>Shyam Head, 2</span></span></code></pre></div><p>现在对数据进行倒序排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -r list.txt</span></span>
<span class="line"><span>Shyam Head, 2</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Kristian Felix, 10</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span></code></pre></div><p>让我们打乱数据：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -R list.txt</span></span>
<span class="line"><span>Cieran Wilks, 9</span></span>
<span class="line"><span>Greyson Meyers, 6</span></span>
<span class="line"><span>Adelina Rowland, 4</span></span>
<span class="line"><span>Kristian Felix, 10</span></span>
<span class="line"><span>Luther Cooke, 7</span></span>
<span class="line"><span>Ruden Dyer, 3</span></span>
<span class="line"><span>Lauryn Fuents, 8</span></span>
<span class="line"><span>Hayden Mcfarlnd, 1</span></span>
<span class="line"><span>Ananya Lamb, 5</span></span>
<span class="line"><span>Shyam Head, 2</span></span></code></pre></div><p>来看一点更复杂的。这次我们根据第二个字段，也就是数值对数据进行排序，并使用 <code>-o</code> 选项将输出保存到另一个文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sort -n -k2 -t &#39;,&#39; -o sorted_list.txt list.txt</span></span>
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
<span class="line"><span>Kristian Felix, 10</span></span></code></pre></div><p>这里我们使用 <code>-n</code> 选项按数字顺序进行排序，<code>-k</code> 选项用来指定要排序的字段（在本例中为第 2 个字段），<code>-t</code> 选项指定分隔符或字段分隔符（逗号），<code>-o</code> 选项将输出保存到 <code>sorted_list.txt</code> 文件中。</p><h3 id="sed" tabindex="-1">sed <a class="header-anchor" href="#sed" aria-label="Permalink to “sed”">​</a></h3><p><code>sed</code> 是一个流编辑器，用于过滤和转换输出中的文本。这意味着我们不需要对原文件进行修改，只需要对输出进行修改。如果需要，我们可以将更改保存到一个新的文件中。<code>sed</code> 提供了很多有用的选项用于过滤和编辑数据。</p><p><code>sed</code> 的语法格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed [OPTION] ‘PATTERN’ filename</span></span></code></pre></div><p>sed 常用的一些选项：</p><ul><li><code>-n</code> 取消默认输出</li><li><code>p</code> 打印指定的数据</li><li><code>d</code> 删除指定行</li><li><code>q</code> 退出 <code>sed</code> 脚本</li></ul><h4 id="sed-示例" tabindex="-1">sed 示例 <a class="header-anchor" href="#sed-示例" aria-label="Permalink to “sed 示例”">​</a></h4><p>我们来看看 <code>sed</code> 是如何运作的。我们从 <code>data</code> 文件开始，其中的字段表示编号、名称、年龄和操作系统。</p><p>如果行出现在特定的行范围内，该行将打印 2 次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat data</span></span>
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
<span class="line"><span>9    Mindy Howard 20   Mac</span></span></code></pre></div><p>这里的操作用单引号括起来，表示第 3 行和第 7 行，并且使用了 <code>p</code> 打印出符合匹配规则的数据。sed 的默认行为是在解析后打印每一行。这意味着由于使用了 <code>p</code> ，第 3 行到第 7 行打印了两次。</p><p>如何打印文件中特定的行？使用 <code>-n</code> 选项来消除在输出中不匹配的行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -n &#39;3,7 p&#39; data</span></span>
<span class="line"><span>3    Willis Castillo     21    Windows</span></span>
<span class="line"><span>4    Gilberto Mack    30   Windows</span></span>
<span class="line"><span>5    Aubrey Hayes     17   windows</span></span>
<span class="line"><span>6    Allan Snyder       21   mac</span></span>
<span class="line"><span>7    Freddie Dean      25  linux</span></span></code></pre></div><p>使用 ‘-n’ 仅仅只有第 3 行到第 7 行会被打印。</p><p>省略文件中的特定行。使用 <code>d</code> 从输出中删除行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed &#39;3 d&#39; data</span></span>
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
<span class="line"><span>4   Gilberto Mack 30   Windows</span></span></code></pre></div><p>从文件中搜索特定的关键字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -n &#39;/linux/ p&#39; data</span></span>
<span class="line"><span>7    Freddie Dean   25  linux</span></span>
<span class="line"><span>8    Ralph Martin   19   linux</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ sed -n &#39;/linux/I p&#39; data</span></span>
<span class="line"><span>1     Vicky Grant      20  Linux</span></span>
<span class="line"><span>7     Freddie Dean  25  linux</span></span>
<span class="line"><span>8     Ralph Martin   19  linux</span></span></code></pre></div><p>在这些例子中，我们在 <code>/ /</code> 中使用了一个正则表达式。如果文件中有类似的单词，但大小写不一致，可以使用 <code>I</code> 使得搜索不区分大小写。回想一下，<code>-n</code> 删除了输出中不匹配的行。</p><p>替换文件中的单词：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed &#39;s/linux/linus/&#39; data</span></span>
<span class="line"><span>1   Vicky Grant      20   Linux</span></span>
<span class="line"><span>2   Nora Burton    19   Mac</span></span>
<span class="line"><span>3   Willis Castillo   21   Windows</span></span>
<span class="line"><span>4   Gilberto Mack  30  Windows</span></span>
<span class="line"><span>5   Aubrey Hayes   17  windows</span></span>
<span class="line"><span>6   Allan Snyder     21  mac</span></span>
<span class="line"><span>7   Freddie Dean    25 linus</span></span>
<span class="line"><span>8   Ralph Martin    19  linus</span></span>
<span class="line"><span>9   Mindy Howard 20  Mac</span></span></code></pre></div><p>这里 <code>s/ / /</code> 表示它是一个正则表达式。在两个 <code>/</code> 之间的就是定位的单词和需要替换的新单词。</p><h3 id="tr" tabindex="-1">tr <a class="header-anchor" href="#tr" aria-label="Permalink to “tr”">​</a></h3><p><code>tr</code> 命令可以用来转换或删除字符。它可以将小写字母转换为大写字母，也可以将大写字母转换为小写字母，可以消除重复字符，也可以删除特定字符。</p><p><code>tr</code> 的奇怪之处在于，它不同于 <code>wc</code>、<code>sort</code>、<code>sed</code> 那样接受文件作为输入。我们使用 <code>|</code> （管道符）为 <code>tr</code> 命令提供输入。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat filename | tr [OPTION]</span></span></code></pre></div><p><code>tr</code> 命令使用的一些选项：</p><ul><li><code>-d</code> 删除给定输入第一个集合中的指定字符，不做转换</li><li><code>-s</code> 将重复出现的字符替换为单个</li></ul><h4 id="tr-示例" tabindex="-1">tr 示例 <a class="header-anchor" href="#tr-示例" aria-label="Permalink to “tr 示例”">​</a></h4><p>现在让我们使用 <code>tr</code> 命令将 <code>letter</code> 文件中的所有小写字符转换为大写字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat letter</span></span>
<span class="line"><span>Linux is too easy to learn,</span></span>
<span class="line"><span>And you should try it too.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ cat letter | tr &#39;a-z&#39; &#39;A-Z&#39;</span></span>
<span class="line"><span>LINUX IS TOO EASY TO LEARN,</span></span>
<span class="line"><span>AND YOU SHOULD TRY IT TOO.</span></span></code></pre></div><p>这里的 <code>a-z</code>、<code>A-Z</code> 表示我们想要将 <code>a</code> 到 <code>z</code> 范围内的小写字符转换为大写字符。</p><p>删除文件中的 <code>o</code> 字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat letter | tr -d &#39;o&#39;</span></span>
<span class="line"><span>Linux is t easy t learn,</span></span>
<span class="line"><span>And yu shuld try it t.</span></span></code></pre></div><p>从文件中压缩字符 <code>o</code> 意味着如果 <code>o</code> 在文件中重复出现，那么它将会被删除并且只打印一次：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat letter | tr -s &#39;o&#39;</span></span>
<span class="line"><span>Linux is to easy to learn,</span></span>
<span class="line"><span>And you should try it to.</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>这是使用 <code>wc</code>、<code>sort</code>、<code>sed</code>、<code>tr</code> 命令的快速演示。这些命令可以方便快捷的操作终端上的文本文件。你可以使用 <code>man</code> 命令来了解这些命令的更多信息。</p><hr>`,82)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://fedoramagazine.org/command-line-quick-tips-wc-sort-sed-and-tr/"},{default:p(()=>[...s[0]||(s[0]=[a("https://fedoramagazine.org/command-line-quick-tips-wc-sort-sed-and-tr/",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://fedoramagazine.org/author/mahesh1b/"},{default:p(()=>[...s[2]||(s[2]=[a("mahesh1b",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),e(n,{href:"https://github.com/perfiffer"},{default:p(()=>[...s[4]||(s[4]=[a("perfiffer",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const w=l(r,[["render",h]]);export{x as __pageData,w as default};
