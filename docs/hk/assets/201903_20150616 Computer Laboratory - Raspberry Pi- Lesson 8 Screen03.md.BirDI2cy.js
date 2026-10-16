import{_ as l,a0 as h,w as e,s as k,I as t,x as a,a1 as n,A as p,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const u=JSON.parse('{"title":"計算機實驗室之樹莓派：課程 8 屏幕03 | LCTT x X-CMD","titleTemplate":false,"description":"計算機實驗室之樹莓派：課程 8 屏幕03 | LCTT (201903) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"計算機實驗室之樹莓派：課程 8 屏幕03 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"計算機實驗室之樹莓派：課程 8 屏幕03 | LCTT (201903) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 8 Screen03","title":"計算機實驗室之樹莓派：課程 8 屏幕03","tag":"201903","desc":""},"relativePath":"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 8 Screen03.md","filePath":"[post].md"}'),r={name:"201903/20150616 Computer Laboratory - Raspberry Pi- Lesson 8 Screen03.md"};function E(g,s,c,o,y,F){const i=h("Link");return e(),k("div",null,[s[21]||(s[21]=t("h1",{id:"計算機實驗室之樹莓派-課程-8-屏幕03",tabindex:"-1"},[a("計算機實驗室之樹莓派：課程 8 屏幕03 "),t("a",{class:"header-anchor",href:"#計算機實驗室之樹莓派-課程-8-屏幕03","aria-label":"Permalink to “計算機實驗室之樹莓派：課程 8 屏幕03”"},"​")],-1)),t("p",null,[s[1]||(s[1]=a("屏幕03 課程基於屏幕02 課程來構建，它教你如何繪製文本，和一個操作系統命令列參數上的一個小特性。假設你已經有了",-1)),n(i,{href:"https://linux.cn/article-10551-1.html"},{default:p(()=>[...s[0]||(s[0]=[a("課程 7：屏幕02",-1)])]),_:1}),s[2]||(s[2]=a(" 的操作系統代碼，我們將以它為基礎來構建。",-1))]),s[22]||(s[22]=d(`<h3 id="_1、字符串的理論知識" tabindex="-1">1、字符串的理論知識 <a class="header-anchor" href="#_1、字符串的理論知識" aria-label="Permalink to “1、字符串的理論知識”">​</a></h3><p>是的，我們的任務是為這個操作系統繪製文本。我們有幾個問題需要去處理，最緊急的那個可能是如何去保存文本。令人難以置信的是，文本是迄今為止在計算機上最大的缺陷之一。原本應該是簡單的數據類型卻導致了操作系統的崩潰，從而削弱其他方面的加密效果，並給使用其它字母表的用户帶來了許多問題。儘管如此，它仍然是極其重要的數據類型，因為它將計算機和用户很好地連接起來。文本是計算機能夠理解的非常好的結構，同時人類使用它時也有足夠的可讀性。</p><p>那麼，文本是如何保存的呢？非常簡單，我們使用一種方法，給每個字母分配一個唯一的編號，然後我們保存一系列的這種編號。看起來很容易吧。問題是，那個編號的數量是不固定的。一些文本段可能比其它的長。保存普通數字，我們有一些固有的限制，即：32 位，我們不能超過這個限制，我們要添加方法去使用該長度的數字等等。“文本”這個術語，我們經常也叫它“字符串”，我們希望能夠寫一個可用於可變長度字符串的函數，否則就需要寫很多函數！對於一般的數字來説，這不是個問題，因為只有幾種通用的數字格式（字節、字、半字節、雙字節）。</p><blockquote><p>可變數據類型（比如文本）要求能夠進行很複雜的處理。</p></blockquote><p>因此，如何判斷字符串長度？我想顯而易見的答案是存儲字符串的長度，然後去存儲組成字符串的字符。這稱為長度前綴，因為長度位於字符串的前面。不幸的是，計算機科學家的先驅們不同意這麼做。他們認為使用一個稱為空終止符（<code>NULL</code>）的特殊字符（用 <code>\\0</code> 表示）來表示字符串結束更有意義。這樣確定簡化了許多字符串算法，因為你只需要持續操作直到遇到空終止符為止。不幸的是，這成為了許多安全問題的根源。如果一個惡意用户給你一個特別長的字符串會發生什麼狀況？如果沒有足夠的空間去保存這個特別長的字符串會發生什麼狀況？你可以使用一個字符串複製函數來做複製，直到遇到空終止符為止，但是因為字符串特別長，而覆寫了你的程序，怎麼辦？這看上去似乎有些較真，但是，緩衝區溢出攻擊還是經常發生。長度前綴可以很容易地緩解這種問題，因為它可以很容易地推算出保存這個字符串所需要的緩衝區的長度。作為一個操作系統開發者，我留下這個問題，由你去決定如何才能更好地存儲文本。</p><blockquote><p>緩衝區溢出攻擊禍害計算機由來已久。最近，Wii、Xbox 和 Playstation 2、以及大型系統如 Microsoft 的 Web 和資料庫服務器，都遭受到緩衝區溢出攻擊。</p></blockquote><p>接下來的事情是，我們需要確定的是如何最好地將字符映射到數字。幸運的是，這是高度標準化的，我們有兩個主要的選擇，Unicode 和 ASCII。Unicode 幾乎將每個有用的符號都映射為數字，作為代價，我們需要有很多很多的數字，和一個更復雜的編碼方法。ASCII 為每個字符使用一個字節，因此它僅保存拉丁字母、數字、少數符號和少數特殊字符。因此，ASCII 是非常易於實現的，與之相比，Unicode 的每個字符佔用的空間並不相同，這使得字符串算法更棘手。通常，操作系統上字符使用 ASCII，並不是為了顯示給最終用户的（開發者和專家用户除外），給終端用户顯示信息使用 Unicode，因為 Unicode 能夠支持像日語字符這樣的東西，並且因此可以實現本地化。</p><p>幸運的是，在這裏我們不需要去做選擇，因為它們的前 128 個字符是完全相同的，並且編碼也是完全一樣的。</p><p>表 1.1 ASCII/Unicode 符號 0-127</p><div class="table-wrap"><table><thead><tr><th></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th></th></tr></thead><tbody><tr><td>00</td><td>NUL</td><td>SOH</td><td>STX</td><td>ETX</td><td>EOT</td><td>ENQ</td><td>ACK</td><td>BEL</td><td>BS</td><td>HT</td><td>LF</td><td>VT</td><td>FF</td><td>CR</td><td>SO</td><td>SI</td><td></td></tr><tr><td>10</td><td>DLE</td><td>DC1</td><td>DC2</td><td>DC3</td><td>DC4</td><td>NAK</td><td>SYN</td><td>ETB</td><td>CAN</td><td>EM</td><td>SUB</td><td>ESC</td><td>FS</td><td>GS</td><td>RS</td><td>US</td><td></td></tr><tr><td>20</td><td>!</td><td>&quot;</td><td>#</td><td>$</td><td>%</td><td>&amp;</td><td>.</td><td>(</td><td>)</td><td>*</td><td>+</td><td>,</td><td>-</td><td>.</td><td>/</td><td></td><td></td></tr><tr><td>30</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>:</td><td>;</td><td>&lt;</td><td>=</td><td>&gt;</td><td>?</td><td></td></tr><tr><td>40</td><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td></td></tr><tr><td>50</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td><td>[</td><td>\\</td><td>]</td><td>^</td><td>_</td><td></td></tr><tr><td>60</td><td>\`</td><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td><td>f</td><td>g</td><td>h</td><td>i</td><td>j</td><td>k</td><td>l</td><td>m</td><td>n</td><td>o</td><td></td></tr><tr><td>70</td><td>p</td><td>q</td><td>r</td><td>s</td><td>t</td><td>u</td><td>v</td><td>w</td><td>x</td><td>y</td><td>z</td><td>{</td><td></td><td></td><td>}</td><td>~</td><td>DEL</td></tr></tbody></table></div><p>這個表顯示了前 128 個符號。一個符號的十六進制表示是行的值加上列的值，比如 A 是 41<sub>16</sub>。你可以驚奇地發現前兩行和最後的值。這 33 個特殊字符是不可打印字符。事實上，許多人都忽略了它們。它們之所以存在是因為 ASCII 最初設計是基於計算機網絡來傳輸數據的一種方法。因此它要發送的信息不僅僅是符號。你應該學習的重要的特殊字符是 <code>NUL</code>，它就是我們前面提到的空終止符。<code>HT</code> 水平製表符就是我們經常説的 <code>tab</code>，而 <code>LF</code> 換行符用於生成一個新行。你可能想研究和使用其它特殊字符在你的操行系統中的意義。</p><h3 id="_2、字符" tabindex="-1">2、字符 <a class="header-anchor" href="#_2、字符" aria-label="Permalink to “2、字符”">​</a></h3><p>到目前為止，我們已經知道了一些關於字符串的知識，我們可以開始想想它們是如何顯示的。為了顯示一個字符串，我們需要做的最基礎的事情是能夠顯示一個字符。我們的第一個任務是編寫一個 <code>DrawCharacter</code> 函數，給它一個要繪製的字符和一個位置，然後它將這個字符繪製出來。</p><p>這就很自然地引出關於字體的討論。我們已經知道有許多方式去按照選定的字體去顯示任何給定的字母。那麼字體又是如何工作的呢？在計算機科學的早期階段，字體就是所有字母的一系列小圖片而已，這種字體稱為位圖字體，而所有的字符繪製方法就是將圖片複製到屏幕上。當人們想去調整字體大小時就出問題了。有時我們需要大的字母，而有時我們需要的是小的字母。儘管我們可以為每個字體、每種大小、每個字符都繪製新圖片，但這種作法過於單調乏味。所以，發明了矢量字體。矢量字體不包含字體的圖像，它包含的是如何去繪製字符的描述，即：一個 <code>o</code> 可能是最大字母高度的一半為半徑繪製的圓。現代操作系統都幾乎僅使用這種字體，因為這種字體在任何分辨率下都很完美。</p><blockquote><p>在許多操作系統中使用的 TrueType 字體格式是很強大的，它內置有它自己的彙編語言，以確保在任何分辨率下字母看起來都是正確的。</p></blockquote><p>不幸的是，雖然我很想包含一個矢量字體的格式的實現，但它的內容太多了，將佔用這個網站的剩餘部分。所以，我們將去實現一個位圖字體，可是，如果你想去做一個像樣的圖形操作系統，那麼矢量字體將是很有用的。</p><p>在下載頁面上的字體節中，我們提供了幾個 <code>.bin</code> 文件。這些只是字體的原始二進制數據文件。為完成本教程，從等寬、單色、8x16 節中挑選你喜歡的字體。然後下載它並保存到 <code>source</code> 目錄中並命名為 <code>font.bin</code> 文件。這些文件只是每個字母的單色圖片，它們每個字母剛好是 8 x 16 個像素。所以，每個字母佔用 16 字節，第一個字節是第一行，第二個字節是第二行，依此類推。</p><p><img src="https://ws2.sinaimg.cn/large/006tNc79ly1fzzb2064agj305l0apt96.jpg" alt="bitmap"></p><p>這個示意圖展示了等寬、單色、8x16 的字符 A 的 “Bitstream Vera Sans Mono” 字體。在這個文件中，我們可以找到，它從第 41<sub>16</sub> × 10<sub>16</sub> = 410<sub>16</sub> 字節開始的十六進制序列：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>00, 00, 00, 10, 28, 28, 28, 44, 44, 7C, C6, 82, 00, 00, 00, 00</span></span></code></pre></div><p>在這裏我們將使用等寬字體，因為等寬字體的每個字符大小是相同的。不幸的是，大多數字體的複雜之處就是因為它的寬度不同，從而導致它的顯示代碼更復雜。在下載頁面上還包含有幾個其它的字體，並包含了這種字體的存儲格式介紹。</p><p>我們回到正題。複製下列代碼到 <code>drawing.s</code> 中的 <code>graphicsAddress</code> 的 <code>.int 0</code> 之後。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.align 4</span></span>
<span class="line"><span>font:</span></span>
<span class="line"><span>.incbin &quot;font.bin&quot;</span></span></code></pre></div><blockquote><p><code>.incbin &quot;file&quot;</code> 插入來自文件 “file” 中的二進制數據。</p></blockquote><p>這段代碼複製文件中的字體數據到標籤為 <code>font</code> 的地址。我們在這裏使用了一個 <code>.align 4</code> 去確保每個字符都是從 16 字節的倍數開始，這是一個以後經常用到的用於加快訪問速度的技巧。</p><p>現在我們去寫繪製字符的方法。我在下面給出了偽代碼，你可以嘗試自己去實現它。按慣例 <code>&gt;&gt;</code> 的意思是邏輯右移。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">character</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then exit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set charAddress to font </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set bits to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(charAddress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> bit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPixel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bit, y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  next</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>如果直接去實現它，這顯然不是個高效率的做法。像繪製字符這樣的事情，效率是最重要的。因為我們要頻繁使用它。我們來探索一些改善的方法，使其成為最優化的彙編代碼。首先，因為我們有一個 <code>× 16</code>，你應該會馬上想到它等價於邏輯左移 4 位。緊接着我們有一個變量 <code>row</code>，它只與 <code>charAddress</code> 和 <code>y</code> 相加。所以，我們可以通過增加替代變量來消除它。現在唯一的問題是如何判斷我們何時完成。這時，一個很好用的 <code>.align 4</code> 上場了。我們知道，<code>charAddress</code> 將從包含 0 的低位半字節開始。這意味着我們可以通過檢查低位半字節來看到進入字符數據的程度。</p><p>雖然我們可以消除對 <code>bit</code> 的需求，但我們必須要引入新的變量才能實現，因此最好還是保留它。剩下唯一的改進就是去除嵌套的 <code>bits &gt;&gt; bit</code>。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">character</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then exit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set charAddress to font </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> character </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set bits to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(charAddress)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set bit to </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set bits to bits </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set bit to bit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bits, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setPixel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bit, y)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    until bit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set y to y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set chadAddress to chadAddress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  until charAddress AND </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1111</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>現在，我們已經得到了非常接近彙編代碼的代碼了，並且代碼也是經過優化的。下面就是上述代碼用匯編寫出來的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DrawCharacter</span></span>
<span class="line"><span>DrawCharacter:</span></span>
<span class="line"><span>cmp r0,#127</span></span>
<span class="line"><span>movhi r0,#0</span></span>
<span class="line"><span>movhi r1,#0</span></span>
<span class="line"><span>movhi pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,lr}</span></span>
<span class="line"><span>x .req r4</span></span>
<span class="line"><span>y .req r5</span></span>
<span class="line"><span>charAddr .req r6</span></span>
<span class="line"><span>mov x,r1</span></span>
<span class="line"><span>mov y,r2</span></span>
<span class="line"><span>ldr charAddr,=font</span></span>
<span class="line"><span>add charAddr, r0,lsl #4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lineLoop$:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  bits .req r7</span></span>
<span class="line"><span>  bit .req r8</span></span>
<span class="line"><span>  ldrb bits,[charAddr]</span></span>
<span class="line"><span>  mov bit,#8</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  charPixelLoop$:</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    subs bit,#1</span></span>
<span class="line"><span>    blt charPixelLoopEnd$</span></span>
<span class="line"><span>    lsl bits,#1</span></span>
<span class="line"><span>    tst bits,#0x100</span></span>
<span class="line"><span>    beq charPixelLoop$</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    add r0,x,bit</span></span>
<span class="line"><span>    mov r1,y</span></span>
<span class="line"><span>    bl DrawPixel</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    teq bit,#0</span></span>
<span class="line"><span>    bne charPixelLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  charPixelLoopEnd$:</span></span>
<span class="line"><span>  .unreq bit</span></span>
<span class="line"><span>  .unreq bits</span></span>
<span class="line"><span>  add y,#1</span></span>
<span class="line"><span>  add charAddr,#1</span></span>
<span class="line"><span>  tst charAddr,#0b1111</span></span>
<span class="line"><span>  bne lineLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq y</span></span>
<span class="line"><span>.unreq charAddr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>width .req r0</span></span>
<span class="line"><span>height .req r1</span></span>
<span class="line"><span>mov width,#8</span></span>
<span class="line"><span>mov height,#16</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,pc}</span></span>
<span class="line"><span>.unreq width</span></span>
<span class="line"><span>.unreq height</span></span></code></pre></div><h3 id="_3、字符串" tabindex="-1">3、字符串 <a class="header-anchor" href="#_3、字符串" aria-label="Permalink to “3、字符串”">​</a></h3><p>現在，我們可以繪製字符了，我們可以繪製文本了。我們需要去寫一個方法，給它一個字符串為輸入，它通過遞增位置來繪製出每個字符。為了做的更好，我們應該去實現新的行和製表符。是時候決定關於空終止符的問題了，如果你想讓你的操作系統使用它們，可以按需來修改下面的代碼。為避免這個問題，我將給 <code>DrawString</code> 函數傳遞一個字符串長度，以及字符串的地址，和 <code>x</code> 和 <code>y</code> 的座標作為參數。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r3 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set x0 to x</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cwidth, cheight) to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DrawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x, y)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set y to y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cheight</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x1 to x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      until x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set x1 to x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> × cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set x to x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  next</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>同樣，這個函數與彙編代碼還有很大的差距。你可以隨意去嘗試實現它，即可以直接實現它，也可以簡化它。我在下面給出了簡化後的函數和彙編代碼。</p><p>很明顯，寫這個函數的人並不很有效率（感到奇怪嗎？它就是我寫的）。再説一次，我們有一個 <code>pos</code> 變量，它用於遞增及與其它東西相加，這是完全沒有必要的。我們可以去掉它，而同時進行長度遞減，直到減到 0 為止，這樣就少用了一個寄存器。除了那個煩人的乘以 5 以外，函數的其餘部分還不錯。在這裏要做的一個重要事情是，將乘法移到循環外面；即便使用位移運算，乘法仍然是很慢的，由於我們總是加一個乘以 5 的相同的常數，因此沒有必要重新計算它。實際上，在彙編代碼中它可以在一個操作數中通過參數移位來實現，因此我將代碼改變為下面這樣。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">drawString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r1 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r2 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, r3 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set x0 to x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  until length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set length to length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadByte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(string)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cwidth, cheight) to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DrawCharacter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x, y)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set y to y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cheight</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x1 to x</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set cwidth to cwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      until x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set x1 to x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    otherwise</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      set x to x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set string to string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>以下是它的彙編代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.globl DrawString</span></span>
<span class="line"><span>DrawString:</span></span>
<span class="line"><span>x .req r4</span></span>
<span class="line"><span>y .req r5</span></span>
<span class="line"><span>x0 .req r6</span></span>
<span class="line"><span>string .req r7</span></span>
<span class="line"><span>length .req r8</span></span>
<span class="line"><span>char .req r9</span></span>
<span class="line"><span>push {r4,r5,r6,r7,r8,r9,lr}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov string,r0</span></span>
<span class="line"><span>mov x,r2</span></span>
<span class="line"><span>mov x0,x</span></span>
<span class="line"><span>mov y,r3</span></span>
<span class="line"><span>mov length,r1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stringLoop$:</span></span>
<span class="line"><span>  subs length,#1</span></span>
<span class="line"><span>  blt stringLoopEnd$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ldrb char,[string]</span></span>
<span class="line"><span>  add string,#1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  mov r0,char</span></span>
<span class="line"><span>  mov r1,x</span></span>
<span class="line"><span>  mov r2,y</span></span>
<span class="line"><span>  bl DrawCharacter</span></span>
<span class="line"><span>  cwidth .req r0</span></span>
<span class="line"><span>  cheight .req r1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq char,#&#39;\\n&#39;</span></span>
<span class="line"><span>  moveq x,x0</span></span>
<span class="line"><span>  addeq y,cheight</span></span>
<span class="line"><span>  beq stringLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  teq char,#&#39;\\t&#39;</span></span>
<span class="line"><span>  addne x,cwidth</span></span>
<span class="line"><span>  bne stringLoop$</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  add cwidth, cwidth,lsl #2</span></span>
<span class="line"><span>  x1 .req r1</span></span>
<span class="line"><span>  mov x1,x0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  stringLoopTab$:</span></span>
<span class="line"><span>    add x1,cwidth</span></span>
<span class="line"><span>    cmp x,x1</span></span>
<span class="line"><span>    bge stringLoopTab$</span></span>
<span class="line"><span>  mov x,x1</span></span>
<span class="line"><span>  .unreq x1</span></span>
<span class="line"><span>  b stringLoop$</span></span>
<span class="line"><span>stringLoopEnd$:</span></span>
<span class="line"><span>.unreq cwidth</span></span>
<span class="line"><span>.unreq cheight</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pop {r4,r5,r6,r7,r8,r9,pc}</span></span>
<span class="line"><span>.unreq x</span></span>
<span class="line"><span>.unreq y</span></span>
<span class="line"><span>.unreq x0</span></span>
<span class="line"><span>.unreq string</span></span>
<span class="line"><span>.unreq length</span></span></code></pre></div><p>這個代碼中非常聰明地使用了一個新運算，<code>subs</code> 是從一個操作數中減去另一個數，保存結果，然後將結果與 0 進行比較。實現上，所有的比較都可以實現為減法後的結果與 0 進行比較，但是結果通常會丟棄。這意味着這個操作與 <code>cmp</code> 一樣快。</p><blockquote><p><code>subs reg,#val</code> 從寄存器 <code>reg</code> 中減去 <code>val</code>，然後將結果與 <code>0</code> 進行比較。</p></blockquote><h3 id="_4、你的意願是我的命令列" tabindex="-1">4、你的意願是我的命令列 <a class="header-anchor" href="#_4、你的意願是我的命令列" aria-label="Permalink to “4、你的意願是我的命令列”">​</a></h3><p>現在，我們可以輸出字符串了，而挑戰是找到一個有意思的字符串去繪製。一般在這樣的教程中，人們都希望去繪製 “Hello World!”，但是到目前為止，雖然我們已經能做到了，我覺得這有點“君臨天下”的感覺（如果喜歡這種感覺，請隨意！）。因此，作為替代，我們去繼續繪製我們的命令列。</p><p>有一個限制是我們所做的操作系統是用在 ARM 架構的計算機上。最關鍵的是，在它們引導時，給它一些信息告訴它有哪些可用資源。幾乎所有的處理器都有某些方式來確定這些信息，而在 ARM 上，它是通過位於地址 100<sub>16</sub> 處的數據來確定的，這個數據的格式如下：</p><pre><code>1. 數據是可分解的一系列的標籤。
2. 這裏有九種類型的標籤：\`core\`、\`mem\`、\`videotext\`、\`ramdisk\`、\`initrd2\`、\`serial\`、\`revision\`、\`videolfb\`、\`cmdline\`。
3. 每個標籤只能出現一次，除了 \`core\` 標籤是必不可少的之外，其它的都是可有可無的。
4. 所有標籤都依次放置在地址 \`0x100\` 處。
5. 標籤列表的結束處總是有兩個&lt;ruby&gt;字&lt;rt&gt;word&lt;/rt&gt;&lt;/ruby&gt;，它們全為 0。
6. 每個標籤的字節數都是 4 的倍數。
7. 每個標籤都是以標籤中（以字為單位）的標籤大小開始（標籤包含這個數字）。
8. 緊接着是包含標籤編號的一個半字。編號是按上面列出的順序，從 1 開始（\`core\` 是 1，\`cmdline\` 是 9）。
9. 緊接着是一個包含 5441&lt;sub&gt;16&lt;/sub&gt; 的半字。
10. 之後是標籤的數據，它根據標籤不同是可變的。數據大小（以字為單位）+ 2 的和總是與前面提到的長度相同。
11. 一個 \`core\` 標籤的長度可以是 2 個字也可以是 5 個字。如果是 2 個字，表示沒有數據，如果是 5 個字，表示它有 3 個字的數據。
12. 一個 \`mem\` 標籤總是 4 個字的長度。數據是內存塊的第一個地址，和內存塊的長度。
13. 一個 \`cmdline\` 標籤包含一個 \`null\` 終止符字符串，它是個內核參數。
</code></pre><p>在目前的樹莓派版本中，只提供了 <code>core</code>、<code>mem</code> 和 <code>cmdline</code> 標籤。你可以在後面找到它們的用法，更全面的參考資料在樹莓派的參考頁面上。現在，我們感興趣的是 <code>cmdline</code> 標籤，因為它包含一個字符串。我們繼續寫一些搜索這個命令列（<code>cmdline</code>）標籤的代碼，如果找到了，以每個條目一個新行的形式輸出它。命令列只是圖形處理器或用户認為操作系統應該知道的東西的一個列表。在樹莓派上，這包含了 MAC 地址、序列號和屏幕分辨率。字符串本身也是一個由空格隔開的表達式（像 <code>key.subkey=value</code> 這樣的）的列表。</p><blockquote><p>幾乎所有的操作系統都支持一個“命令列”的程序。它的想法是為選擇一個程序所期望的行為而提供一個通用的機制。</p></blockquote><p>我們從查找 <code>cmdline</code> 標籤開始。將下列的代碼複製到一個名為 <code>tags.s</code> 的新文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .data</span></span>
<span class="line"><span>tag_core: .int 0</span></span>
<span class="line"><span>tag_mem: .int 0</span></span>
<span class="line"><span>tag_videotext: .int 0</span></span>
<span class="line"><span>tag_ramdisk: .int 0</span></span>
<span class="line"><span>tag_initrd2: .int 0</span></span>
<span class="line"><span>tag_serial: .int 0</span></span>
<span class="line"><span>tag_revision: .int 0</span></span>
<span class="line"><span>tag_videolfb: .int 0</span></span>
<span class="line"><span>tag_cmdline: .int 0</span></span></code></pre></div><p>通過標籤列表來查找是一個很慢的操作，因為這涉及到許多內存訪問。因此，我們只想做一次。代碼創建一些數據，用於保存每個類型的第一個標籤的內存地址。接下來，用下面的偽代碼就可以找到一個標籤了。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FindTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r0 is </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set tagAddr to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag_core </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> not tagAddr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tagAddr</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag_core) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set tagAddr to </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loop forever</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set tagIndex to </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readHalfWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagAddr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tagIndex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> then </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FindTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tag_core</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)×</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    then </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">storeWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagAddr, tag_core</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)×</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    set tagAddr to tagAddr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadWord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tagAddr) × </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  end loop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">end function</span></span></code></pre></div><p>這段代碼已經是優化過的，並且很接近彙編了。它嘗試直接加載標籤，第一次這樣做是有些樂觀的，但是除了第一次之外的其它所有情況都是可以這樣做的。如果失敗了，它將去檢查 <code>core</code> 標籤是否有地址。因為 <code>core</code> 標籤是必不可少的，如果它沒有地址，唯一可能的原因就是它不存在。如果它有地址，那就是我們沒有找到我們要找的標籤。如果沒有找到，那我們就需要查找所有標籤的地址。這是通過讀取標籤編號來做的。如果標籤編號為 0，意味着已經到了標籤列表的結束位置。這意味着我們已經查找了目錄中所有的標籤。所以，如果我們再次運行我們的函數，現在它應該能夠給出一個答案。如果標籤編號不為 0，我們檢查這個標籤類型是否已經有一個地址。如果沒有，我們在目錄中保存這個標籤的地址。然後增加這個標籤的長度（以字節為單位）到標籤地址中，然後去查找下一個標籤。</p><p>嘗試去用匯編實現這段代碼。你將需要簡化它。如果被卡住了，下面是我的答案。不要忘了 <code>.section .text</code>！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.section .text</span></span>
<span class="line"><span>.globl FindTag</span></span>
<span class="line"><span>FindTag:</span></span>
<span class="line"><span>tag .req r0</span></span>
<span class="line"><span>tagList .req r1</span></span>
<span class="line"><span>tagAddr .req r2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sub tag,#1</span></span>
<span class="line"><span>cmp tag,#8</span></span>
<span class="line"><span>movhi tag,#0</span></span>
<span class="line"><span>movhi pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr tagList,=tag_core</span></span>
<span class="line"><span>tagReturn$:</span></span>
<span class="line"><span>add tagAddr,tagList, tag,lsl #2</span></span>
<span class="line"><span>ldr tagAddr,[tagAddr]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>teq tagAddr,#0</span></span>
<span class="line"><span>movne r0,tagAddr</span></span>
<span class="line"><span>movne pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr tagAddr,[tagList]</span></span>
<span class="line"><span>teq tagAddr,#0</span></span>
<span class="line"><span>movne r0,#0</span></span>
<span class="line"><span>movne pc,lr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mov tagAddr,#0x100</span></span>
<span class="line"><span>push {r4}</span></span>
<span class="line"><span>tagIndex .req r3</span></span>
<span class="line"><span>oldAddr .req r4</span></span>
<span class="line"><span>tagLoop$:</span></span>
<span class="line"><span>ldrh tagIndex,[tagAddr,#4]</span></span>
<span class="line"><span>subs tagIndex,#1</span></span>
<span class="line"><span>poplt {r4}</span></span>
<span class="line"><span>blt tagReturn$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add tagIndex,tagList, tagIndex,lsl #2</span></span>
<span class="line"><span>ldr oldAddr,[tagIndex]</span></span>
<span class="line"><span>teq oldAddr,#0</span></span>
<span class="line"><span>.unreq oldAddr</span></span>
<span class="line"><span>streq tagAddr,[tagIndex]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ldr tagIndex,[tagAddr]</span></span>
<span class="line"><span>add tagAddr, tagIndex,lsl #2</span></span>
<span class="line"><span>b tagLoop$</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.unreq tag</span></span>
<span class="line"><span>.unreq tagList</span></span>
<span class="line"><span>.unreq tagAddr</span></span>
<span class="line"><span>.unreq tagIndex</span></span></code></pre></div><h3 id="_5、hello-world" tabindex="-1">5、Hello World <a class="header-anchor" href="#_5、hello-world" aria-label="Permalink to “5、Hello World”">​</a></h3><p>現在，我們已經萬事俱備了，我們可以去繪製我們的第一個字符串了。在 <code>main.s</code> 文件中刪除 <code>bl SetGraphicsAddress</code> 之後的所有代碼，然後將下面的代碼放進去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mov r0,#9</span></span>
<span class="line"><span>bl FindTag</span></span>
<span class="line"><span>ldr r1,[r0]</span></span>
<span class="line"><span>lsl r1,#2</span></span>
<span class="line"><span>sub r1,#8</span></span>
<span class="line"><span>add r0,#8</span></span>
<span class="line"><span>mov r2,#0</span></span>
<span class="line"><span>mov r3,#0</span></span>
<span class="line"><span>bl DrawString</span></span>
<span class="line"><span>loop$:</span></span>
<span class="line"><span>b loop$</span></span></code></pre></div><p>這段代碼簡單地使用了我們的 <code>FindTag</code> 方法去查找第 9 個標籤（<code>cmdline</code>），然後計算它的長度，然後傳遞命令和長度給 <code>DrawString</code> 方法，告訴它在 <code>0,0</code> 處繪製字符串。現在可以在樹莓派上測試它了。你應該會在屏幕上看到一行文本。如果沒有，請查看我們的排錯頁面。</p>`,59)),t("p",null,[s[4]||(s[4]=a("如果一切正常，恭喜你已經能夠繪製文本了。但它還有很大的改進空間。如果想去寫了一個數字，或內存的一部分，或操作我們的命令列，該怎麼做呢？在 ",-1)),n(i,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen04.html"},{default:p(()=>[...s[3]||(s[3]=[a("課程 9：屏幕04",-1)])]),_:1}),s[5]||(s[5]=a(" 中，我們將學習如何操作文本和顯示有用的數字和信息。",-1))]),s[23]||(s[23]=t("hr",null,null,-1)),t("p",null,[s[7]||(s[7]=a("via: ",-1)),n(i,{href:"https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen03.html"},{default:p(()=>[...s[6]||(s[6]=[a("https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/screen03.html",-1)])]),_:1})]),t("p",null,[s[12]||(s[12]=a("作者：",-1)),n(i,{href:"https://www.cl.cam.ac.uk"},{default:p(()=>[...s[8]||(s[8]=[a("Alex Chadwick",-1)])]),_:1}),s[13]||(s[13]=a(" 選題：",-1)),n(i,{href:"https://github.com/lujun9972"},{default:p(()=>[...s[9]||(s[9]=[a("lujun9972",-1)])]),_:1}),s[14]||(s[14]=a(" 譯者：",-1)),n(i,{href:"https://github.com/qhwdw"},{default:p(()=>[...s[10]||(s[10]=[a("qhwdw",-1)])]),_:1}),s[15]||(s[15]=a(" 校對：",-1)),n(i,{href:"https://github.com/wxy"},{default:p(()=>[...s[11]||(s[11]=[a("wxy",-1)])]),_:1})]),t("p",null,[s[18]||(s[18]=a("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[16]||(s[16]=[a("LCTT",-1)])]),_:1}),s[19]||(s[19]=a(" 原創編譯，",-1)),n(i,{href:"https://linux.cn/"},{default:p(()=>[...s[17]||(s[17]=[a("Linux中國",-1)])]),_:1}),s[20]||(s[20]=a(" 榮譽推出",-1))])])}const A=l(r,[["render",E]]);export{u as __pageData,A as default};
