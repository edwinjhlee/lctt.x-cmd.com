import{_ as i,a0 as M,w as t,s as o,ao as c,I as l,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const m=JSON.parse('{"title":"在 Linux 上查看文件內容的 5 種方法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上查看文件內容的 5 種方法 | LCTT (202006) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上查看文件內容的 5 種方法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上查看文件內容的 5 種方法 | LCTT (202006) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202006/20200610 5 ways to examine the content of files on Linux","title":"在 Linux 上查看文件內容的 5 種方法","tag":"202006","desc":""},"relativePath":"202006/20200610 5 ways to examine the content of files on Linux.md","filePath":"[post].md"}'),d={name:"202006/20200610 5 ways to examine the content of files on Linux.md"};function h(r,s,g,k,u,b){const n=M("Link");return t(),o("div",null,[s[15]||(s[15]=c(`<h1 id="在-linux-上查看文件內容的-5-種方法" tabindex="-1">在 Linux 上查看文件內容的 5 種方法 <a class="header-anchor" href="#在-linux-上查看文件內容的-5-種方法" aria-label="Permalink to “在 Linux 上查看文件內容的 5 種方法”">​</a></h1><blockquote><p>如何使用 cat、more、head 和 tail 命令查看 Linux 文件的內容，而不僅僅是文本文件。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202006/23/121047zz9gwx9dwz155m2w.jpg" alt=""></p><p>Linux 提供了許多命令來查看文件的內容，包 括 <code>cat</code>、<code>more</code>、<code>head</code> 和 <code>tail</code>，但這只是一個開始。</p><p>一方面，即使是最顯而易見的命令也有很多許多用户不會去使用的選項。還有一些普普通通的命令提供了一些獨特的功能。在本文中，我們將介紹查看文件內容的命令，以及如何定製這些視圖以更好地滿足你的需求的選項。</p><h3 id="cat" tabindex="-1">cat <a class="header-anchor" href="#cat" aria-label="Permalink to “cat”">​</a></h3><p><code>cat</code> 命令將文本文件的全部內容發送到終端窗口以供查看。實際上，如果你輸入 <code>cat</code>，然後輸入包含數千行內容的文件名，那麼這些行將以極快的速度在你的窗口中滾動，你將無法看到除了最後一屏外的其他文本。對於 Linux 用户來説 <code>cat</code> 命令很熟悉，但即使是這個基本命令也提供了許多有用的選項，例如對輸出中的行進行編號，這是我們許多人可能從未使用過的。更進一步，你不僅可以對行進行編號，還可以選擇如何編號。</p><p>對每行進行編號就像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat -n msg</span></span>
<span class="line"><span>     1  Hello --</span></span>
<span class="line"><span>     2</span></span>
<span class="line"><span>     3  I hope you are having a wonderful day!</span></span>
<span class="line"><span>     4</span></span>
<span class="line"><span>     5</span></span>
<span class="line"><span>     6  That&#39;s it for ...       now</span></span>
<span class="line"><span>     7</span></span>
<span class="line"><span>     8  bye!</span></span>
<span class="line"><span>     9</span></span>
<span class="line"><span>    10  s.</span></span></code></pre></div><p>你也可以只對有內容的行編號。請注意，對於此命令，僅包含空格的行不被視為“空”，而是會被編號。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat -b msg</span></span>
<span class="line"><span>     1  Hello --</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     2  I hope you are having a wonderful day!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>     3  That&#39;s it for ...       now</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     4  bye!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     5  s.</span></span></code></pre></div><p><code>cat</code> 命令允許你使用 <code>-s</code> 選項忽略重複的空白行，但是要完全忽略空白行你必須添加另一個命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat -s msg</span></span>
<span class="line"><span>Hello --</span></span>
<span class="line"><span></span></span>
<span class="line"><span>I hope you are having a wonderful day!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>That&#39;s it for ...       now</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bye!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s.</span></span></code></pre></div><p>要忽略所有空白行，只需如下將 <code>cat</code> 的輸出通過管道傳遞給 <code>grep</code> 命令。 點（<code>.</code>）匹配包含任意字符的文本，因此它將顯示任意非空的行，用於結束一行的回車換行做匹配（LCTT 譯註：此處原文有誤，徑改）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat msg | grep .</span></span>
<span class="line"><span>Hello --</span></span>
<span class="line"><span>I hope you are having a wonderful day!</span></span>
<span class="line"><span>That&#39;s it for ...       now</span></span>
<span class="line"><span>bye!</span></span>
<span class="line"><span>s.</span></span></code></pre></div><p><code>-E</code> 選項通過在每行末尾加 <code>$</code> 符提供視覺提示，來顯示行尾是否還有多餘的空格。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat -E msg</span></span>
<span class="line"><span>Hello --$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>I hope you are having a wonderful day!  $</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>That&#39;s it for ...       now$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>bye!$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>s.$</span></span></code></pre></div><p>使用 <code>-A</code> 時，既可以在每行的末尾顯示 <code>$</code> 字符，並且製表符會顯示為 <code>^I</code> 而不是空白。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat -A msg</span></span>
<span class="line"><span>Hello --$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>I hope you are having a wonderful day!$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>That’s it for ...^Inow$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>bye!$</span></span>
<span class="line"><span>$</span></span>
<span class="line"><span>s.$</span></span></code></pre></div><h3 id="使用-head-和-tail-顯示文件部分內容" tabindex="-1">使用 head 和 tail 顯示文件部分內容 <a class="header-anchor" href="#使用-head-和-tail-顯示文件部分內容" aria-label="Permalink to “使用 head 和 tail 顯示文件部分內容”">​</a></h3><p><code>head</code> 和 <code>tail</code> 顯示文件的頭部或尾部，默認為十行。 你可以使用 <code>-3</code>（顯示 3 行）或 <code>-11</code>（顯示 11 行）之類的字符串來指定要查看的其它行數。<code>tail</code> 命令與 <code>head</code> 的工作方式相同，但是顯示文件的尾部而不是頭部。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ head -3 msg</span></span>
<span class="line"><span>Hello --</span></span>
<span class="line"><span>I hope you are having a wonderful day!</span></span>
<span class="line"><span>$ tail -3 msg</span></span>
<span class="line"><span>bye!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s.</span></span></code></pre></div><p>你還可以結合使用 <code>head</code> 和 <code>tail</code> 命令來查看文件中間的文本。你只需要選擇起點和想要查看行數即可。在此例中，命令將在文件中顯示第二個一百行，並在 <code>cat</code> 的幫助下為這些行編號。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat -b mybigfile | head -200 | tail -100</span></span>
<span class="line"><span>   101  Invoice #2020-06-07a sent to vendor</span></span>
<span class="line"><span>   ...</span></span></code></pre></div><h3 id="使用-more-或者-less-瀏覽一屏文本" tabindex="-1">使用 more 或者 less 瀏覽一屏文本 <a class="header-anchor" href="#使用-more-或者-less-瀏覽一屏文本" aria-label="Permalink to “使用 more 或者 less 瀏覽一屏文本”">​</a></h3><p><code>more</code> 命令是一次瀏覽一屏內容的自然之選，而 <code>less</code> 通過使用上下鍵盤箭頭增加了在文件中上下移動的能力，這樣你就可以遍歷內容，然後在文件中回退。</p><h3 id="使用-od-查看文本的兩種方法" tabindex="-1">使用 od 查看文本的兩種方法 <a class="header-anchor" href="#使用-od-查看文本的兩種方法" aria-label="Permalink to “使用 od 查看文本的兩種方法”">​</a></h3><p><code>od</code>（八進制轉儲）命令能夠以常規文本和一系列 ASCII 值（即該文本在文件中的實際編碼方式）的形式查看文件。在下面的例子中可以看到，帶編號的行顯示了 ASCII 數字值，而其他行則顯示了文本和不可打印的字符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ od -bc msg</span></span>
<span class="line"><span>0000000 110 145 154 154 157 040 055 055 012 012 111 040 150 157 160 145</span></span>
<span class="line"><span>          H   e   l   l   o       -   -  \\n  \\n   I       h   o   p   e</span></span>
<span class="line"><span>0000020 040 171 157 165 040 141 162 145 040 150 141 166 151 156 147 040</span></span>
<span class="line"><span>              y   o   u       a   r   e       h   a   v   i   n   g</span></span>
<span class="line"><span>0000040 141 040 167 157 156 144 145 162 146 165 154 040 144 141 171 041</span></span>
<span class="line"><span>          a       w   o   n   d   e   r   f   u   l       d   a   y   !</span></span>
<span class="line"><span>0000060 012 012 012 124 150 141 164 047 163 040 151 164 040 146 157 162</span></span>
<span class="line"><span>         \\n  \\n  \\n   T   h   a   t   &#39;   s       i   t       f   o   r</span></span>
<span class="line"><span>0000100 040 056 056 056 011 156 157 167 012 012 142 171 145 041 012 012</span></span>
<span class="line"><span>              .   .   .  \\t   n   o   w  \\n  \\n   b   y   e   !  \\n  \\n</span></span>
<span class="line"><span>0000120 163 056 012</span></span>
<span class="line"><span>          s   .  \\n</span></span></code></pre></div><p>請注意，換行符顯示為 <code>\\n</code>（八進制 <code>012</code>），而製表符顯示為 <code>\\t</code>（八進制 <code>011</code>）。</p><p><code>od</code> 命令特別有用的用途之一是查看非文本文件以獲取可以標識文件類型的信息。在這裏，我們看到 <code>JFIF</code>（JPEG 文件交換格式）標籤，該標籤讓 <code>file</code> 之類報告文件類型的命令將它標示為 jpg 文件。這裏還有很多其他有用的信息，特別是如果你對這些文件的格式感到好奇的話。</p><p>在接下來的命令中，我們查看 jpg 文件的開始部分。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ od -bc arrow.jpg | head -12</span></span>
<span class="line"><span>0000000 377 330 377 340 000 020 112 106 111 106 000 001 001 000 000 001</span></span>
<span class="line"><span>        377 330 377 340  \\0 020   J   F   I   F  \\0 001 001  \\0  \\0 001</span></span>
<span class="line"><span>0000020 000 001 000 000 377 333 000 103 000 003 002 002 002 002 002 003</span></span>
<span class="line"><span>         \\0 001  \\0  \\0 377 333  \\0   C  \\0 003 002 002 002 002 002 003</span></span>
<span class="line"><span>0000040 002 002 002 003 003 003 003 004 006 004 004 004 004 004 010 006</span></span>
<span class="line"><span>        002 002 002 003 003 003 003 004 006 004 004 004 004 004  \\b 006</span></span>
<span class="line"><span>0000060 006 005 006 011 010 012 012 011 010 011 011 012 014 017 014 012</span></span>
<span class="line"><span>        006 005 006  \\t  \\b  \\n  \\n  \\t  \\b  \\t  \\t  \\n  \\f 017  \\f  \\n</span></span>
<span class="line"><span>0000100 013 016 013 011 011 015 021 015 016 017 020 020 021 020 012 014</span></span>
<span class="line"><span>         \\v 016  \\v  \\t  \\t  \\r 021  \\r 016 017 020 020 021 020  \\n  \\f</span></span>
<span class="line"><span>0000120 022 023 022 020 023 017 020 020 020 377 333 000 103 001 003 003</span></span>
<span class="line"><span>        022 023 022 020 023 017 020 020 020 377 333  \\0   C 001 003 003</span></span></code></pre></div><p>如果我們要 <code>file</code> 命令提供有關此圖像的信息，我們可能會看到類似下面這樣的信息。<code>file</code> 命令從文件開頭的數據中提取了所有這些描述性信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ file arrow.jpg</span></span>
<span class="line"><span>arrow.png: JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, baseline, precision 8, 500x375, components 3</span></span></code></pre></div><h3 id="使用-jp2a-將文件視為基於文本的圖像" tabindex="-1">使用 jp2a 將文件視為基於文本的圖像 <a class="header-anchor" href="#使用-jp2a-將文件視為基於文本的圖像" aria-label="Permalink to “使用 jp2a 將文件視為基於文本的圖像”">​</a></h3><p>如果你只能在命令列工作，並且想了解特定圖像包含的內容，那麼可以使用 <code>jp2a</code>（jpeg to ascii）之類的工具提供字符渲染。圖像在這種格式下的識別程度取決於文件。不要有太多期待，因為你將看到的圖像版本是“低分辨率”下的測試！這是一隻分辨率很低的帝王企鵝。（請離遠點看）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jp2a Emperor_Penguin.jpg</span></span>
<span class="line"><span>MMMMMMMMWOdkNMMMMMMMMMMMMMMMMMMM</span></span>
<span class="line"><span>MMMXK0kc.... ,OKMMMMMMMMMMMMMMMM</span></span>
<span class="line"><span>MMNK0Ol...   :Xx&#39;dNMMMMMMMMMMMMM</span></span>
<span class="line"><span>MMMMMMMd;lx00Oo. ..xMMMMMMMMMMMM</span></span>
<span class="line"><span>MMMMMMK.OXMMMMMN,...lMMMMMMMMMMM</span></span>
<span class="line"><span>MMMMMMx&#39;KXNNMMMMK....0MMMMMMMMMM</span></span>
<span class="line"><span>MMMMMMx:kkKNWWMMMl.. &#39;NMMMMMMMMM</span></span>
<span class="line"><span>MMMMMMddx0NNNWMMMK&#39;...;NMMMMMMMM</span></span>
<span class="line"><span>MMMMMMck0NNWWWWWMMd  ..lMMMMMMMM</span></span>
<span class="line"><span>MMMMMM.d0KXNWWWWMMo  ...WMMMMMMM</span></span>
<span class="line"><span>MMMMMM.xOXNNWNMMMW. ....KMMMMMMM</span></span>
<span class="line"><span>MMMMMM&#39;kKNKWXWMMMK  ..&#39;.0MMMMMMM</span></span>
<span class="line"><span>MMMMMMxckXNNNNMMMX  .:..XMMMMMMM</span></span>
<span class="line"><span>MMMMMMW;xKNWWWMMMM. .;. NMMMMMMM</span></span>
<span class="line"><span>MMMMMMMok0NNWNWMMMx .l..MMMMMMMM</span></span>
<span class="line"><span>MMMMMMMkxOKXWXNMMMMl.:&#39;dMMMMMMMM</span></span>
<span class="line"><span>MMMMMMM0dKOdKXXNMMMMNx,WMMMMMMMM</span></span>
<span class="line"><span>MMMMMMMWoKxldXKNNMMMMM;MMMMMMMMM</span></span>
<span class="line"><span>MMMMMMMMxxxxdNWNXNMMMM;MMMMMMMMM</span></span>
<span class="line"><span>MMMMMMMMxOcoo0XOOOOWMW,kMMMMMMMM</span></span>
<span class="line"><span>MMMMMMM0xK;.cO0dNX:0XXd;NMMMMMMM</span></span>
<span class="line"><span>MMMNkdd:,&#39;ldXXO0xl;x0kx:;lKMMMMM</span></span>
<span class="line"><span>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Linux 上有很多命令可以通過各種方式查看文件的內容。其中一些選項在你需要處理文件內容時可能會非常有用。其它的只是……有趣。</p><hr>`,41)),l("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://www.networkworld.com/article/3561490/5-ways-to-examine-the-content-of-files-on-linux.html"},{default:e(()=>[...s[0]||(s[0]=[a("https://www.networkworld.com/article/3561490/5-ways-to-examine-the-content-of-files-on-linux.html",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[2]||(s[2]=[a("Sandra Henry-Stocker",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),p(n,{href:"https://github.com/geekpi"},{default:e(()=>[...s[4]||(s[4]=[a("geekpi",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const y=i(d,[["render",h]]);export{m as __pageData,y as default};
