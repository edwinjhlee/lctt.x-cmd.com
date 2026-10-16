import{_ as l,a0 as t,w as d,s as r,I as a,x as n,a1 as p,A as i,ao as c}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"ncurses 入門指南 | LCTT x X-CMD","titleTemplate":false,"description":"ncurses 入門指南 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"ncurses 入門指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"ncurses 入門指南 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180118 Getting Started with ncurses","title":"ncurses 入門指南","tag":"201802","desc":""},"relativePath":"201802/20180118 Getting Started with ncurses.md","filePath":"[post].md"}'),o={name:"201802/20180118 Getting Started with ncurses.md"};function u(g,s,h,m,k,b){const e=t("Link");return d(),r("div",null,[s[22]||(s[22]=a("h1",{id:"ncurses-入門指南",tabindex:"-1"},[n("ncurses 入門指南 "),a("a",{class:"header-anchor",href:"#ncurses-入門指南","aria-label":"Permalink to “ncurses 入門指南”"},"​")],-1)),s[23]||(s[23]=a("blockquote",null,[a("p",null,"怎樣使用curses來繪製終端屏幕？")],-1)),s[24]||(s[24]=a("p",null,"雖然圖形界面非常酷，但是不是所有的程序都需要點擊式的界面。例如，令人尊敬的 Vi 編輯器在第一個 GUI 出現之前在純文本終端運行了很久。",-1)),s[25]||(s[25]=a("p",null,[n("Vi 編輯器是一個在“文本”模式下繪製的"),a("ruby",null,[n("面向屏幕"),a("rt",null,"screen-oriented")]),n("程序的例子。它使用了一個叫 curses 的庫。這個庫提供了一系列的編程接口來操縱終端屏幕。curses 庫產生於 BSD UNIX，但是 Linux 系統通過 ncurses 庫提供這個功能。")],-1)),a("p",null,[s[1]||(s[1]=n("[要了解 ncurses “過去曾引起的風暴”，參見 ",-1)),p(e,{href:"http://www.linuxjournal.com/article/1124"},{default:i(()=>[...s[0]||(s[0]=[n("ncurses: Portable Screen-Handling for Linux",-1)])]),_:1}),s[2]||(s[2]=n(", September 1, 1995, by Eric S. Raymond.]",-1))]),s[26]||(s[26]=c(`<p>使用 curses 創建程序實際上非常簡單。在這個文章中，我展示了一個利用 curses 來在終端屏幕上繪圖的示例程序。</p><h3 id="謝爾賓斯基三角形" tabindex="-1">謝爾賓斯基三角形 <a class="header-anchor" href="#謝爾賓斯基三角形" aria-label="Permalink to “謝爾賓斯基三角形”">​</a></h3><p>簡單展示一些 curses 函數的一個方法是生成<ruby>謝爾賓斯基三角形<rt>Sierpinski&#39;s Triangle</rt></ruby>。如果你對生成謝爾賓斯基三角形的這種方法不熟悉的話，這裏是一些產生謝爾賓斯基三角形的規則：</p><ol><li>設置定義三角形的三個點。</li><li>隨機選擇任意的一個點 <code>(x,y)</code>。</li></ol><p>然後：</p><ol><li>在三角形的頂點中隨機選擇一個點。</li><li>將新的 <code>x,y</code> 設置為先前的 <code>x,y</code> 和三角頂點的中間點。</li><li>重複（上述步驟）。</li></ol><p>所以我按照這些指令寫了這個程序，程序使用 curses 函數來向終端屏幕繪製謝爾賓斯基三角形：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* triangle.c */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;curses.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;getrandom_int.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define ITERMAX 10000</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  long iter;</span></span>
<span class="line"><span>  int yi, xi;</span></span>
<span class="line"><span>  int y[3], x[3];</span></span>
<span class="line"><span>  int index;</span></span>
<span class="line"><span>  int maxlines, maxcols;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* initialize curses */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  initscr();</span></span>
<span class="line"><span>  cbreak();</span></span>
<span class="line"><span>  noecho();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* initialize triangle */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  maxlines = LINES - 1;</span></span>
<span class="line"><span>  maxcols = COLS - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  y[0] = 0;</span></span>
<span class="line"><span>  x[0] = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  y[1] = maxlines;</span></span>
<span class="line"><span>  x[1] = maxcols / 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  y[2] = 0;</span></span>
<span class="line"><span>  x[2] = maxcols;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mvaddch(y[0], x[0], &#39;0&#39;);</span></span>
<span class="line"><span>  mvaddch(y[1], x[1], &#39;1&#39;);</span></span>
<span class="line"><span>  mvaddch(y[2], x[2], &#39;2&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* initialize yi,xi with random values */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  yi = getrandom_int() % maxlines;</span></span>
<span class="line"><span>  xi = getrandom_int() % maxcols;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mvaddch(yi, xi, &#39;.&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* iterate the triangle */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (iter = 0; iter &lt; ITERMAX; iter++) {</span></span>
<span class="line"><span>      index = getrandom_int() % 3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      yi = (yi + y[index]) / 2;</span></span>
<span class="line"><span>      xi = (xi + x[index]) / 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      mvaddch(yi, xi, &#39;*&#39;);</span></span>
<span class="line"><span>      refresh();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* done */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  mvaddstr(maxlines, 0, &quot;Press any key to quit&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  refresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getch();</span></span>
<span class="line"><span>  endwin();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  exit(0);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>讓我一邊解釋一邊瀏覽這個程序。首先，<code>getrandom_int()</code> 函數是我對 Linux 系統調用 <code>getrandom()</code> 的包裝器。它保證返回一個正整數（<code>int</code>）值。（LCTT 譯註：<code>getrandom()</code> 系統調用按照字節返回隨機值到一個變量中，值是隨機的，不保證正負，使用 <code>stdlib.h</code> 的 <code>random()</code> 函數可以達到同樣的效果）另外，按照上面的規則，你應該能夠辨認出初始化和迭代謝爾賓斯基三角形的代碼。除此之外，我們來看看我用來在終端上繪製三角形的 curses 函數。</p><p>大多數 curses 程序以這四條指令開頭。 <code>initscr()</code> 函數獲取包括大小和特徵在內的終端類型，並設置終端支持的 curses 環境。<code>cbreak()</code> 函數禁用行緩衝並設置 curses 每次只接受一個字符。<code>noecho()</code> 函數告訴 curses 不要把輸入回顯到屏幕上。而 <code>clear()</code> 函數清空了屏幕：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  initscr();</span></span>
<span class="line"><span>  cbreak();</span></span>
<span class="line"><span>  noecho();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clear();</span></span></code></pre></div><p>之後程序設置了三個定義三角的頂點。注意這裏使用的 <code>LINES</code> 和 <code>COLS</code>，它們是由 <code>initscr()</code> 來設置的。這些值告訴程序在終端的行數和列數。屏幕座標從 <code>0</code> 開始，所以屏幕左上角是 <code>0</code> 行 <code>0</code> 列。屏幕右下角是 <code>LINES - 1</code> 行，<code>COLS - 1</code> 列。為了便於記憶，我的程序裏把這些值分別設為了變量 <code>maxlines</code> 和 <code>maxcols</code>。</p><p>在屏幕上繪製文字的兩個簡單方法是 <code>addch()</code> 和 <code>addstr()</code> 函數。也可以使用相關的 <code>mvaddch()</code> 和 <code>mvaddstr()</code> 函數可以將字符放到一個特定的屏幕位置。我的程序在很多地方都用到了這些函數。首先程序繪製三個定義三角的點並標記為 <code>&#39;0&#39;</code>，<code>&#39;1&#39;</code> 和 <code>&#39;2&#39;</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  mvaddch(y[0], x[0], &#39;0&#39;);</span></span>
<span class="line"><span>  mvaddch(y[1], x[1], &#39;1&#39;);</span></span>
<span class="line"><span>  mvaddch(y[2], x[2], &#39;2&#39;);</span></span></code></pre></div><p>為了繪製任意的一個初始點，程序做了類似的一個調用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  mvaddch(yi, xi, &#39;.&#39;);</span></span></code></pre></div><p>還有為了在謝爾賓斯基三角形遞歸中繪製連續的點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      mvaddch(yi, xi, &#39;*&#39;);</span></span></code></pre></div><p>當程序完成之後，將會在屏幕左下角（在 <code>maxlines</code> 行，<code>0</code> 列）顯示一個幫助信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  mvaddstr(maxlines, 0, &quot;Press any key to quit&quot;);</span></span></code></pre></div><p>注意 curses 在內存中維護了一個版本的屏幕顯示，並且只有在你要求的時候才會更新這個屏幕，這很重要。特別是當你想要向屏幕顯示大量的文字的時候，這樣程序會有更好的性能表現。這是因為 curses 只能更新在上次更新之後改變的這部分屏幕。想要讓 curses 更新終端屏幕，請使用 <code>refresh()</code> 函數。</p><p>在我的示例程序中，我選擇在“繪製”每個謝爾賓斯基三角形中的連續點時更新屏幕。通過這樣做，用户可以觀察三角形中的每次迭代。（LCTT 譯註：由於 CPU 太快，迭代過程執行就太快了，所以其實很難直接看到迭代過程）</p><p>在退出之前，我使用 <code>getch()</code> 函數等待用户按下一個鍵。然後我調用 <code>endwin()</code> 函數退出 curses 環境並返回終端程序到一般控制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  getch();</span></span>
<span class="line"><span>  endwin();</span></span></code></pre></div><h3 id="編譯和示例輸出" tabindex="-1">編譯和示例輸出 <a class="header-anchor" href="#編譯和示例輸出" aria-label="Permalink to “編譯和示例輸出”">​</a></h3><p>現在你已經有了你的第一個 curses 示例程序，是時候編譯運行它了。記住 Linux 操作系統通過 ncurses 庫來實現 curses 功能，所以你需要在編譯的時候通過 <code>-lncurses</code>來鏈接——例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>getrandom_int.c  getrandom_int.h  triangle.c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ gcc -Wall -lncurses -o triangle triangle.c getrandom_int.c</span></span></code></pre></div><p>（LCTT 譯註：此處命令列有問題，<code>-lncurses</code> 選項在我的 Ubuntu 16.04 系統 + gcc 4.9.3 環境下，必須放在命令列最後，否則找不到庫文件，鏈接時會出現未定義的引用。）</p><p>在標準的 80x24 終端運行這個 <code>triangle</code> 程序並沒什麼意思。在那樣的分辨率下你不能看見謝爾賓斯基三角形的很多細節。如果你運行終端窗口並設置非常小的字體大小，你可以更加容易地看到謝爾賓斯基三角形的不規則性質。在我的系統上，輸出如圖 1。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/triangle.png" alt=""></p><p><em>圖 1. triangle 程序的輸出</em></p><p>雖然迭代具有隨機性，但是每次謝爾賓斯基三角形的運行看起來都會很一致。唯一的不同是最初繪製到屏幕的一些點的位置不同。在這個例子中，你可以看到三角形開始的一個小圓點，在點 1 附近。看起來程序接下來選擇了點 2，然後你可以看到在圓點和“2”之間的星號。並且看起來程序隨機選擇了點 2 作為下一個隨機數，因為你可以看到在第一個星號和“2”之間的星號。從這裏開始，就不能繼續分辨三角形是怎樣被畫出來的了，因為所有的連續點都屬於三角形區域。</p><h3 id="開始學習-ncurses" tabindex="-1">開始學習 ncurses <a class="header-anchor" href="#開始學習-ncurses" aria-label="Permalink to “開始學習 ncurses”">​</a></h3>`,33)),a("p",null,[s[6]||(s[6]=n("這個程序是一個怎樣使用 curses 函數繪製字符到屏幕的簡單例子。按照你的程序的需要，你可以通過 curses 做得更多。在下一篇文章中，我將會展示怎樣使用 curses 讓用户和屏幕交互。如果你對於學習 curses 有興趣，我建議你去讀位於 ",-1)),a("ruby",null,[p(e,{href:"http://www.tldp.org"},{default:i(()=>[...s[3]||(s[3]=[n("Linux 文檔計劃",-1)])]),_:1}),s[4]||(s[4]=a("rt",null,"Linux Documentation Project",-1))]),s[7]||(s[7]=n("的 Pradeep Padala 寫的 ",-1)),p(e,{href:"http://tldp.org/HOWTO/NCURSES-Programming-HOWTO"},{default:i(()=>[...s[5]||(s[5]=[n("NCURSES Programming HOWTO",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[27]||(s[27]=a("h3",{id:"關於作者",tabindex:"-1"},[n("關於作者 "),a("a",{class:"header-anchor",href:"#關於作者","aria-label":"Permalink to “關於作者”"},"​")],-1)),s[28]||(s[28]=a("p",null,"Jim Hall 是一個自由及開源軟件的倡議者，他最有名的工作是 FreeDOS 計劃，也同樣致力於開源軟件的可用性。Jim 是在明尼蘇達州的拉姆齊縣的首席信息官。",-1)),s[29]||(s[29]=a("hr",null,null,-1)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),p(e,{href:"http://www.linuxjournal.com/content/getting-started-ncurses"},{default:i(()=>[...s[9]||(s[9]=[n("http://www.linuxjournal.com/content/getting-started-ncurses",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),p(e,{href:"http://www.linuxjournal.com/users/jim-hall"},{default:i(()=>[...s[11]||(s[11]=[n("Jim Hall",-1)])]),_:1}),s[15]||(s[15]=n(" 譯者：",-1)),p(e,{href:"https://github.com/leemeans"},{default:i(()=>[...s[12]||(s[12]=[n("leemeans",-1)])]),_:1}),s[16]||(s[16]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中國",-1)])]),_:1}),s[21]||(s[21]=n(" 榮譽推出",-1))])])}const C=l(o,[["render",u]]);export{y as __pageData,C as default};
