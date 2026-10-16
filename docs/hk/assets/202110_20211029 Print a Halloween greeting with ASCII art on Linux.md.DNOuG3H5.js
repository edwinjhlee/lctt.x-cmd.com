import{_ as i,a0 as o,w as d,s as r,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const h=JSON.parse('{"title":"在 Linux 上用 ASCII 藝術打印萬聖節問候語 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 上用 ASCII 藝術打印萬聖節問候語 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 上用 ASCII 藝術打印萬聖節問候語 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 上用 ASCII 藝術打印萬聖節問候語 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20211029 Print a Halloween greeting with ASCII art on Linux","title":"在 Linux 上用 ASCII 藝術打印萬聖節問候語","tag":"202110","desc":""},"relativePath":"202110/20211029 Print a Halloween greeting with ASCII art on Linux.md","filePath":"[post].md"}'),c={name:"202110/20211029 Print a Halloween greeting with ASCII art on Linux.md"};function u(x,s,I,g,A,f){const p=o("Link");return d(),r("div",null,[s[36]||(s[36]=a("h1",{id:"在-linux-上用-ascii-藝術打印萬聖節問候語",tabindex:"-1"},[n("在 Linux 上用 ASCII 藝術打印萬聖節問候語 "),a("a",{class:"header-anchor",href:"#在-linux-上用-ascii-藝術打印萬聖節問候語","aria-label":"Permalink to “在 Linux 上用 ASCII 藝術打印萬聖節問候語”"},"​")],-1)),s[37]||(s[37]=a("blockquote",null,[a("p",null,"使用 Linux 或 FreeDOS 從一個 C 程序中生成彩色的 ASCII 藝術。")],-1)),s[38]||(s[38]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/freedos-halloween-4x3.jpg?itok=6e_42rs9",alt:"FreeDOS 上的慶祝萬聖節 ASCII 藝術",title:"Happy Halloween ASCII art on FreeDOS"})],-1)),s[39]||(s[39]=a("p",null,"利用擴展 ASCII 字符集和它的繪畫元素集合的全綵 ASCII 藝術在 DOS 上曾經相當流行。你可以在你的下一個 FreeDOS 程序中加入 ASCII 藝術，作為一個很酷的“歡迎”屏幕，或者作為一個提供了更多程序信息的彩色“退出”屏幕，來增加一點視覺上的樂趣。",-1)),a("p",null,[s[2]||(s[2]=n("但是，這種 ASCII 藝術的風格並不僅僅侷限於 FreeDOS 程序。你可以在 Linux 終端模式的程序中使用同樣的方法。雖然 Linux 使用 ",-1)),e(p,{href:"https://opensource.com/article/21/8/ncurses-linux"},{default:l(()=>[...s[0]||(s[0]=[n("ncurses",-1)])]),_:1}),s[3]||(s[3]=n(" 來控制屏幕，而不是 DOS 的 ",-1)),e(p,{href:"https://opensource.com/article/21/9/programming-dos-conio"},{default:l(()=>[...s[1]||(s[1]=[n("conio",-1)])]),_:1}),s[4]||(s[4]=n("，但相關的概念也適用於 Linux 程序。本文探討了如何從 C 語言程序中生成彩色 ASCII 藝術。",-1))]),s[40]||(s[40]=a("h3",{id:"ascii-藝術文件",tabindex:"-1"},[n("ASCII 藝術文件 "),a("a",{class:"header-anchor",href:"#ascii-藝術文件","aria-label":"Permalink to “ASCII 藝術文件”"},"​")],-1)),a("p",null,[s[7]||(s[7]=n("你可以使用各種工具來繪製你的 ASCII 藝術。在這個例子中，我使用了一個叫做 TheDraw 的老式 DOS 應用程序，但是你可以在 Linux 上找到現代的開源 ASCII 藝術程序，比如 ",-1)),e(p,{href:"https://blocktronics.github.io/moebius/"},{default:l(()=>[...s[5]||(s[5]=[n("Moebius",-1)])]),_:1}),s[8]||(s[8]=n("（Apache 許可證）或者 ",-1)),e(p,{href:"https://github.com/blocktronics/pablodraw"},{default:l(()=>[...s[6]||(s[6]=[n("PabloDraw",-1)])]),_:1}),s[9]||(s[9]=n("（MIT 許可證）。只要你知道保存的數據是什麼樣子的，你使用什麼工具並不重要。",-1))]),s[41]||(s[41]=t(`<p>下面是一個 ASCII 藝術文件樣本的一部分，以 C 源代碼保存。請注意，這個代碼片段定義了幾個值。<code>IMAGEDATA_WIDTH</code> 和 <code>IMAGEDATA_DEPTH</code> 定義了屏幕上的列數和行數。在這裏，它是一個 80x25 的 ASCII 藝術“圖像”。<code>IMAGEDATA_LENGTH</code> 定義了 <code>IMAGEDATA</code> 數組中的條目數量。ASCII 藝術畫面中的每個字符可以用兩個字節的數據表示。要顯示的字符和包含該字符的前景和背景顏色的顏色屬性。對於一個 80x25 的屏幕，每個字符都與一個屬性配對，該數組包含 4000 個條目（即 <code>80*25*2=4000</code>）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define IMAGEDATA_WIDTH 80</span></span>
<span class="line"><span>#define IMAGEDATA_DEPTH 25</span></span>
<span class="line"><span>#define IMAGEDATA_LENGTH 4000</span></span>
<span class="line"><span>unsigned char IMAGEDATA [] = {</span></span>
<span class="line"><span>    &#39;.&#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39;.&#39;, 0x0F,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39;.&#39;, 0x0F,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span>
<span class="line"><span>    &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,  &#39; &#39;, 0x08,</span></span></code></pre></div><p>數組的其它部分依此類推。</p><p>為了在屏幕上顯示這種 ASCII 藝術，你需要寫一個小小的程序來讀取數組並以正確的顏色打印每個字符。</p><h3 id="設置一個顏色屬性" tabindex="-1">設置一個顏色屬性 <a class="header-anchor" href="#設置一個顏色屬性" aria-label="Permalink to “設置一個顏色屬性”">​</a></h3><p>這個 ASCII 藝術文件中的顏色屬性在一個字節中定義了背景和前景的顏色，用十六進制的值表示，如 <code>0x08</code> 或 <code>0x6E</code>。十六進制是適合表達這樣的顏色“對”的緊湊方式。</p>`,6)),a("p",null,[s[11]||(s[11]=n("像 Linux 上的 ncurses 或 DOS 上的 conio 這樣的字符模式系統 ",-1)),e(p,{href:"https://opensource.com/article/21/6/freedos-sixteen-colors"},{default:l(()=>[...s[10]||(s[10]=[n("只能顯示 16 種顏色",-1)])]),_:1}),s[12]||(s[12]=n("。這就是十六種可能的文本顏色和八種背景顏色。用二進制計算十六個值（從 0 到 15）只需要四個二進制位。",-1))]),s[42]||(s[42]=t("<blockquote><p><code>1111</code> 是二進制的 15</p></blockquote><p>而且方便的是，十六進制可以用一個字符表示 0 到 15：<code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>、<code>4</code>、<code>5</code>、<code>6</code>、<code>7</code>、<code>8</code>、<code>9</code>、<code>A</code>、<code>B</code>、<code>C</code>、<code>D</code>、<code>E</code> 和 <code>F</code>。所以十六進制的值 <code>F</code> 是數字 15，或二進制的 <code>1111</code>。</p><p>通過顏色對，你可以用一個八位的字節來編碼背景和前景的顏色。這就是文本顏色的四個二進制位（十六進制中的 0 到 15 或 0 到 F）和背景顏色的三個二進制位（十六進制中的 0 到 7 或 0 到 E）。字節中剩餘的二進制位在這裏沒有使用，所以我們可以忽略它。</p>",3)),a("p",null,[s[14]||(s[14]=n("為了將顏色對或屬性轉換成你的程序可以使用的顏色值，你需要 ",-1)),e(p,{href:"https://opensource.com/article/21/8/binary-bit-fields-masks"},{default:l(()=>[...s[13]||(s[13]=[n("使用位掩碼",-1)])]),_:1}),s[15]||(s[15]=n("，只指定用於文字顏色或背景顏色的位。使用 FreeDOS 上的 OpenWatcom C 編譯器，你可以編寫這個函數，從顏色屬性中適當地設置顏色。",-1))]),s[43]||(s[43]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void</span></span>
<span class="line"><span>textattr(int newattr)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  _settextcolor(newattr &amp; 15);         /* 0000xxxx */</span></span>
<span class="line"><span>  _setbkcolor((newattr &gt;&gt; 4) &amp; 7);     /* 0xxx0000 */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>_settextcolor</code> 函數只設置文本顏色，<code>_setbkcolor</code> 函數設置背景顏色。兩者都定義在 <code>graph.h</code> 中。注意，由於顏色屬性在一個字節值中包括了背景色和前景色，<code>textattr</code> 函數使用 <code>&amp;</code>（二進制的“與”運算）來設置一個位掩碼，只隔離了屬性中的最後四個位。這就是顏色對存儲前景顏色的值 0 到 15 的地方。</p><p>為了得到背景色，該函數首先執行了一個位移，將位“推”到右邊。這就把“上”位放到了“下”位範圍，所以任何像 <code>0xxx0000</code> 這樣的位都變成了 <code>00000xxx</code>。我們可以用另一個的位掩碼 7（二進制 <code>0111</code>）來挑選出背景顏色值。</p><h3 id="顯示-ascii-藝術" tabindex="-1">顯示 ASCII 藝術 <a class="header-anchor" href="#顯示-ascii-藝術" aria-label="Permalink to “顯示 ASCII 藝術”">​</a></h3><p><code>IMAGEDATA</code> 數組包含整個 ASCII 藝術屏幕和每個字符的顏色值。為了在屏幕上顯示 ASCII 藝術，你的程序需要掃描該數組，設置顏色屬性，然後一次在屏幕上顯示一個字符。</p><p>讓我們在屏幕的底部留出空間，以便向用户提供單獨的信息或提示。也就是説，我不想顯示一個 80 列 ASCII 屏幕的所有 25 行，而只想顯示前 24 行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  /* print one line less than the 80x25 that&#39;s in there:</span></span>
<span class="line"><span>     80 x 24 x 2 = 3840 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (pos = 0; pos &lt; 3840; pos += 2) {</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>在 <code>for</code> 循環裏面，我們需要設置顏色，然後打印字符。OpenWatcom C 編譯器提供了一個函數 <code>_outtext</code> 來顯示帶有當前顏色值的文本。然而，這需要傳遞一個字符串，如果我們需要一個一個地處理每個字符，在一行中的每個字符需要不同顏色的情況下，效率就會很低。</p><p>相反，OpenWatcom 有一個類似的函數，叫做 <code>_outmem</code>，允許你指示要顯示多少個字符。對於一次一個字符，我們可以在 <code>IMAGEDATA</code> 數組中提供一個字符值的指針，並告訴 <code>_outtext</code> 只顯示一個字符。這將使用當前的顏色屬性顯示該字符，這就是我們需要的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  for (pos = 0; pos &lt; 3840; pos += 2) {</span></span>
<span class="line"><span>    ch = &amp;IMAGEDATA[pos];              /* pointer assignment */</span></span>
<span class="line"><span>    attr = IMAGEDATA[pos + 1];</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    textattr(attr);</span></span>
<span class="line"><span>    _outmem(ch, 1);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>這個更新的 <code>for</code> 循環通過向 <code>IMAGEDATA</code> 數組分配一個指針來設置字符 <code>ch</code>。接下來, 循環設置文本屬性, 然後用 <code>_outmem</code> 顯示字符.</p><h3 id="整合起來" tabindex="-1">整合起來 <a class="header-anchor" href="#整合起來" aria-label="Permalink to “整合起來”">​</a></h3><p>有了 <code>textattr</code> 函數和處理數組的 <code>for</code> 循環, 我們可以編寫一個完整的程序來顯示 ASCII 藝術文件的內容。對於這個例子，將 ASCII 藝術文件保存為 <code>imgdata.inc</code>，並用 <code>#include</code> 語句將其包含在源文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;conio.h&gt;</span></span>
<span class="line"><span>#include &lt;graph.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;imgdata.inc&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void</span></span>
<span class="line"><span>textattr(int newattr)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  _settextcolor(newattr &amp; 15);         /* 0000xxxx */</span></span>
<span class="line"><span>  _setbkcolor((newattr &gt;&gt; 4) &amp; 7);     /* 0xxx0000 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  char *ch;</span></span>
<span class="line"><span>  int attr;</span></span>
<span class="line"><span>  int pos;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (_setvideomode(_TEXTC80) == 0) {</span></span>
<span class="line"><span>    fputs(&quot;Error setting video mode&quot;, stderr);</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* draw the array */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  _settextposition(1, 1);              /* top left */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* print one line less than the 80x25 that&#39;s in there:</span></span>
<span class="line"><span>     80 x 24 x 2 = 3840 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (pos = 0; pos &lt; 3840; pos += 2) {</span></span>
<span class="line"><span>    ch = &amp;IMAGEDATA[pos];              /* pointer assignment */</span></span>
<span class="line"><span>    attr = IMAGEDATA[pos + 1];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    textattr(attr);</span></span>
<span class="line"><span>    _outmem(ch, 1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  _settextposition(25, 1);             /* bottom left */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  textattr(0x0f);</span></span>
<span class="line"><span>  _outtext(&quot;Press any key to quit&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  textattr(0x00);</span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 FreeDOS 上使用 OpenWatcom C 編譯器編譯該程序，你會得到一個顯示這個節日信息的新程序。</p><p><img src="https://opensource.com/sites/default/files/freedos-halloween-4x3.png" alt="ASCII藝術中的萬聖節信息"></p>`,16)),a("p",null,[a("em",null,[s[17]||(s[17]=n("萬聖節快樂（Jim Hall, ",-1)),e(p,{href:"https://creativecommons.org/licenses/by-sa/4.0/"},{default:l(()=>[...s[16]||(s[16]=[n("CC-BY-SA 4.0",-1)])]),_:1}),s[18]||(s[18]=n(")",-1))])]),s[44]||(s[44]=a("p",null,"萬聖節快樂，各位！",-1)),a("ul",null,[a("li",null,[e(p,{href:"https://opensource.com/sites/default/files/uploads/imgdata.inc_.txt"},{default:l(()=>[...s[19]||(s[19]=[n("在此下載 inc 代碼文件",-1)])]),_:1})]),a("li",null,[e(p,{href:"https://opensource.com/sites/default/files/uploads/hallown.c.txt"},{default:l(()=>[...s[20]||(s[20]=[n("在此下載 C 代碼文件",-1)])]),_:1})])]),s[45]||(s[45]=a("hr",null,null,-1)),a("p",null,[s[22]||(s[22]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/10/ascii-linux-halloween"},{default:l(()=>[...s[21]||(s[21]=[n("https://opensource.com/article/21/10/ascii-linux-halloween",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[23]||(s[23]=[n("Jim Hall",-1)])]),_:1}),s[28]||(s[28]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[24]||(s[24]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1}),s[30]||(s[30]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[33]||(s[33]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[32]||(s[32]=[n("Linux中國",-1)])]),_:1}),s[35]||(s[35]=n(" 榮譽推出",-1))])])}const b=i(c,[["render",u]]);export{h as __pageData,b as default};
