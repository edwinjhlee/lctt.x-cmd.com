import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"使用 ncurses 進行顏色編程 | LCTT x X-CMD","titleTemplate":false,"description":"使用 ncurses 進行顏色編程 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ncurses 進行顏色編程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ncurses 進行顏色編程 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180206 Programming in Color with ncurses","title":"使用 ncurses 進行顏色編程","tag":"201804","desc":""},"relativePath":"201804/20180206 Programming in Color with ncurses.md","filePath":"[post].md"}'),d={name:"201804/20180206 Programming in Color with ncurses.md"};function R(A,s,O,_,u,P){const p=t("Link");return c(),o("div",null,[s[23]||(s[23]=a("h1",{id:"使用-ncurses-進行顏色編程",tabindex:"-1"},[n("使用 ncurses 進行顏色編程 "),a("a",{class:"header-anchor",href:"#使用-ncurses-進行顏色編程","aria-label":"Permalink to “使用 ncurses 進行顏色編程”"},"​")],-1)),s[24]||(s[24]=a("p",null,[a("img",{src:"https://www.linuxjournal.com/sites/default/files/styles/850x500/public/nodeimage/story/quest-color-1.png?itok=lOK4ldl6",alt:""})],-1)),s[25]||(s[25]=a("blockquote",null,[a("p",null,"Jim 給他的終端冒險遊戲添加了顏色，演示瞭如何用 curses 操縱顏色。")],-1)),a("p",null,[s[2]||(s[2]=n("在我的使用 ncurses 庫進行編程的系列文章的",-1)),l(p,{href:"https://linux.cn/article-9348-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一篇",-1)])]),_:1}),s[3]||(s[3]=n("和",-1)),l(p,{href:"https://linux.cn/article-9383-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("第二篇",-1)])]),_:1}),s[4]||(s[4]=n("中，我已經介紹了一些 curses 函數來在屏幕上作畫、從屏幕上查詢和從鍵盤讀取字符。為了搞清楚這些函數，我使用 curses 來利用簡單字符繪製遊戲地圖和玩家角色，創建了一個簡單的冒險遊戲。在這篇緊接着的文章裏，我展示瞭如何為你的 curses 程序添加顏色。",-1))]),s[26]||(s[26]=r(`<p>在屏幕上繪圖一切都挺好的，但是如果只有黑底白字的文本，你的程序可能看起來很無趣。顏色可以幫助傳遞更多的信息。舉個例子，如果你的程序需要報告執行成功或者執行失敗時。在這樣的情況下你可以使用綠色或者紅色來幫助強調輸出。或者，你只是簡單地想要“潮藝”一下給你的程序來讓它看起來更美觀。</p><p>在這篇文章中，我用一個簡單的例子來展示通過 curses 函數進行顏色操作。在我先前的文章中，我寫了一個可以讓你在一個粗糙繪製的地圖上移動玩家角色的初級冒險類遊戲。但是那裏面的地圖完全是白色和黑色的文本，通過形狀來表明是水（<code>～</code>）或者山（<code>^</code>）。所以，讓我們將遊戲更新到使用顏色的版本吧。</p><h3 id="顏色要素" tabindex="-1">顏色要素 <a class="header-anchor" href="#顏色要素" aria-label="Permalink to “顏色要素”">​</a></h3><p>在你可以使用顏色之前，你的程序需要知道它是否可以依靠終端正確地顯示顏色。在現代操作系統上，此處應該永遠為true。但是在經典的計算機上，一些終端是單色的，例如古老的 VT52 和 VT100 終端，一般它們提供黑底白色或者黑底綠色的文本。</p><p>可以使用 <code>has_colors()</code> 函數查詢終端的顏色功能。這個函數將會在終端可以顯示顏色的時候返回 <code>true</code>，否則將會返回 <code>false</code>。這個函數一般用於 <code>if</code> 塊的開頭，就像這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if (has_colors() == FALSE) {</span></span>
<span class="line"><span>    endwin();</span></span>
<span class="line"><span>    printf(&quot;Your terminal does not support color\\n&quot;);</span></span>
<span class="line"><span>    exit(1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在知道終端可以顯示顏色之後，你可以使用 <code>start_color()</code> 函數來設置 curses 使用顏色。現在是時候定義程序將要使用的顏色了。</p><p>在 curses 中，你應該按對定義顏色：一個前景色放在一個背景色上。這樣允許 curses 一次性設置兩個顏色屬性，這也是一般你想要使用的方式。通過 <code>init_pair()</code> 函數可以定義一個前景色和背景色並關聯到索引數字來設置顏色對。大致語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>init_pair(index, foreground, background);</span></span></code></pre></div><p>控制台支持八種基礎的顏色：黑色、紅色、綠色、黃色、藍色、品紅色、青色和白色。這些顏色通過下面的名稱為你定義好了：</p><ul><li><code>COLOR_BLACK</code></li><li><code>COLOR_RED</code></li><li><code>COLOR_GREEN</code></li><li><code>COLOR_YELLOW</code></li><li><code>COLOR_BLUE</code></li><li><code>COLOR_MAGENTA</code></li><li><code>COLOR_CYAN</code></li><li><code>COLOR_WHITE</code></li></ul><h3 id="應用顏色" tabindex="-1">應用顏色 <a class="header-anchor" href="#應用顏色" aria-label="Permalink to “應用顏色”">​</a></h3><p>在我的冒險遊戲中，我想要讓草地呈現綠色而玩家的足跡變成不易察覺的綠底黃色點跡。水應該是藍色，那些表示波浪的 <code>~</code> 符號應該是近似青色的。我想讓山（<code>^</code>）是灰色的，但是我可以用白底黑色文本做一個可用的折中方案。（LCTT 譯註：意為終端預設的顏色沒有灰色，使用白底黑色文本做一個折中方案）為了讓玩家的角色更易見，我想要使用一個刺目的品紅底紅色設計。我可以像這樣定義這些顏色對：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>start_color();</span></span>
<span class="line"><span>init_pair(1, COLOR_YELLOW, COLOR_GREEN);</span></span>
<span class="line"><span>init_pair(2, COLOR_CYAN, COLOR_BLUE);</span></span>
<span class="line"><span>init_pair(3, COLOR_BLACK, COLOR_WHITE);</span></span>
<span class="line"><span>init_pair(4, COLOR_RED, COLOR_MAGENTA);</span></span></code></pre></div><p>為了讓顏色對更容易記憶，我的程序中定義了一些符號常量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define GRASS_PAIR     1</span></span>
<span class="line"><span>#define EMPTY_PAIR     1</span></span>
<span class="line"><span>#define WATER_PAIR     2</span></span>
<span class="line"><span>#define MOUNTAIN_PAIR  3</span></span>
<span class="line"><span>#define PLAYER_PAIR    4</span></span></code></pre></div><p>有了這些常量，我的顏色定義就變成了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>start_color();</span></span>
<span class="line"><span>init_pair(GRASS_PAIR, COLOR_YELLOW, COLOR_GREEN);</span></span>
<span class="line"><span>init_pair(WATER_PAIR, COLOR_CYAN, COLOR_BLUE);</span></span>
<span class="line"><span>init_pair(MOUNTAIN_PAIR, COLOR_BLACK, COLOR_WHITE);</span></span>
<span class="line"><span>init_pair(PLAYER_PAIR, COLOR_RED, COLOR_MAGENTA);</span></span></code></pre></div><p>在任何時候你想要使用顏色顯示文本，你只需要告訴 curses 設置哪種顏色屬性。為了更好的編程實踐，你同樣應該在你完成了顏色使用的時候告訴 curses 取消顏色組合。為了設置顏色，應該在調用像 <code>mvaddch()</code> 這樣的函數之前使用<code>attron()</code>，然後通過 <code>attroff()</code> 關閉顏色屬性。例如，在我繪製玩家角色的時候，我應該這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>attron(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>mvaddch(y, x, PLAYER);</span></span>
<span class="line"><span>attroff(COLOR_PAIR(PLAYER_PAIR));</span></span></code></pre></div><p>記住將顏色應用到你的程序對你如何查詢屏幕有一些微妙的影響。一般來講，由 <code>mvinch()</code> 函數返回的值是<strong>沒有</strong>帶顏色屬性的類型 <code>chtype</code>，這個值基本上是一個整型值，也可以當作整型值來用。但是，由於使用顏色添加了額外的屬性到屏幕上的字符上，所以 <code>chtype</code> 按照擴展的位模式攜帶了額外的顏色信息。一旦你使用 <code>mvinch()</code>，返回值將會包含這些額外的顏色值。為了只提取<strong>文本</strong>值，例如在 <code>is_move_okay()</code> 函數中，你需要和 <code>A_CHARTEXT</code> 做 <code>&amp;</code> 位運算：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int is_move_okay(int y, int x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int testch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* return true if the space is okay to move into */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return (((testch &amp; A_CHARTEXT) == GRASS)</span></span>
<span class="line"><span>            || ((testch &amp; A_CHARTEXT) == EMPTY));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過這些修改，我可以用顏色更新這個冒險遊戲：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* quest.c */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;curses.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define GRASS     &#39; &#39;</span></span>
<span class="line"><span>#define EMPTY     &#39;.&#39;</span></span>
<span class="line"><span>#define WATER     &#39;~&#39;</span></span>
<span class="line"><span>#define MOUNTAIN  &#39;^&#39;</span></span>
<span class="line"><span>#define PLAYER    &#39;*&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define GRASS_PAIR     1</span></span>
<span class="line"><span>#define EMPTY_PAIR     1</span></span>
<span class="line"><span>#define WATER_PAIR     2</span></span>
<span class="line"><span>#define MOUNTAIN_PAIR  3</span></span>
<span class="line"><span>#define PLAYER_PAIR    4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int is_move_okay(int y, int x);</span></span>
<span class="line"><span>void draw_map(void);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int y, x;</span></span>
<span class="line"><span>    int ch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 初始化curses */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    initscr();</span></span>
<span class="line"><span>    keypad(stdscr, TRUE);</span></span>
<span class="line"><span>    cbreak();</span></span>
<span class="line"><span>    noecho();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 初始化顏色 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (has_colors() == FALSE) {</span></span>
<span class="line"><span>        endwin();</span></span>
<span class="line"><span>        printf(&quot;Your terminal does not support color\\n&quot;);</span></span>
<span class="line"><span>        exit(1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    start_color();</span></span>
<span class="line"><span>    init_pair(GRASS_PAIR, COLOR_YELLOW, COLOR_GREEN);</span></span>
<span class="line"><span>    init_pair(WATER_PAIR, COLOR_CYAN, COLOR_BLUE);</span></span>
<span class="line"><span>    init_pair(MOUNTAIN_PAIR, COLOR_BLACK, COLOR_WHITE);</span></span>
<span class="line"><span>    init_pair(PLAYER_PAIR, COLOR_RED, COLOR_MAGENTA);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 初始化探索地圖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    draw_map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 在左下角創建新角色 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    y = LINES - 1;</span></span>
<span class="line"><span>    x = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 默認情況下，你獲得了一個閃爍的光標--用來指明玩家 * */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        attron(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>        mvaddch(y, x, PLAYER);</span></span>
<span class="line"><span>        attroff(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>        move(y, x);</span></span>
<span class="line"><span>        refresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ch = getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 測試輸入鍵值並獲取方向 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        switch (ch) {</span></span>
<span class="line"><span>        case KEY_UP:</span></span>
<span class="line"><span>        case &#39;w&#39;:</span></span>
<span class="line"><span>        case &#39;W&#39;:</span></span>
<span class="line"><span>            if ((y &gt; 0) &amp;&amp; is_move_okay(y - 1, x)) {</span></span>
<span class="line"><span>                attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>                attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                y = y - 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case KEY_DOWN:</span></span>
<span class="line"><span>        case &#39;s&#39;:</span></span>
<span class="line"><span>        case &#39;S&#39;:</span></span>
<span class="line"><span>            if ((y &lt; LINES - 1) &amp;&amp; is_move_okay(y + 1, x)) {</span></span>
<span class="line"><span>                attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>                attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                y = y + 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case KEY_LEFT:</span></span>
<span class="line"><span>        case &#39;a&#39;:</span></span>
<span class="line"><span>        case &#39;A&#39;:</span></span>
<span class="line"><span>            if ((x &gt; 0) &amp;&amp; is_move_okay(y, x - 1)) {</span></span>
<span class="line"><span>                attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>                attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                x = x - 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case KEY_RIGHT:</span></span>
<span class="line"><span>        case &#39;d&#39;:</span></span>
<span class="line"><span>        case &#39;D&#39;:</span></span>
<span class="line"><span>            if ((x &lt; COLS - 1) &amp;&amp; is_move_okay(y, x + 1)) {</span></span>
<span class="line"><span>                attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>                attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>                x = x + 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while ((ch != &#39;q&#39;) &amp;&amp; (ch != &#39;Q&#39;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    endwin();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    exit(0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int is_move_okay(int y, int x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int testch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 當空白處可以進入的時候返回true */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return (((testch &amp; A_CHARTEXT) == GRASS)</span></span>
<span class="line"><span>            || ((testch &amp; A_CHARTEXT) == EMPTY));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void draw_map(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int y, x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 繪製探索地圖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 背景 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    attron(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>    for (y = 0; y &lt; LINES; y++) {</span></span>
<span class="line"><span>        mvhline(y, 0, GRASS, COLS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    attroff(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 山峯和山路 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    attron(COLOR_PAIR(MOUNTAIN_PAIR));</span></span>
<span class="line"><span>    for (x = COLS / 2; x &lt; COLS * 3 / 4; x++) {</span></span>
<span class="line"><span>        mvvline(0, x, MOUNTAIN, LINES);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    attroff(COLOR_PAIR(MOUNTAIN_PAIR));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    attron(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>    mvhline(LINES / 4, 0, GRASS, COLS);</span></span>
<span class="line"><span>    attroff(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 湖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    attron(COLOR_PAIR(WATER_PAIR));</span></span>
<span class="line"><span>    for (y = 1; y &lt; LINES / 2; y++) {</span></span>
<span class="line"><span>        mvhline(y, 1, WATER, COLS / 3);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    attroff(COLOR_PAIR(WATER_PAIR));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可能不能認出所有為了在冒險遊戲裏面支持顏色需要的修改，除非你目光敏鋭。<code>diff</code> 工具展示了所有為了支持顏色而添加的函數或者修改的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ diff quest-color/quest.c quest/quest.c</span></span>
<span class="line"><span>12,17d11</span></span>
<span class="line"><span>&lt; #define GRASS_PAIR     1</span></span>
<span class="line"><span>&lt; #define EMPTY_PAIR     1</span></span>
<span class="line"><span>&lt; #define WATER_PAIR     2</span></span>
<span class="line"><span>&lt; #define MOUNTAIN_PAIR  3</span></span>
<span class="line"><span>&lt; #define PLAYER_PAIR    4</span></span>
<span class="line"><span>&lt;</span></span>
<span class="line"><span>33,46d26</span></span>
<span class="line"><span>&lt;     /* initialize colors */</span></span>
<span class="line"><span>&lt;</span></span>
<span class="line"><span>&lt;     if (has_colors() == FALSE) {</span></span>
<span class="line"><span>&lt;    endwin();</span></span>
<span class="line"><span>&lt;    printf(&quot;Your terminal does not support color\\n&quot;);</span></span>
<span class="line"><span>&lt;    exit(1);</span></span>
<span class="line"><span>&lt;     }</span></span>
<span class="line"><span>&lt;</span></span>
<span class="line"><span>&lt;     start_color();</span></span>
<span class="line"><span>&lt;     init_pair(GRASS_PAIR, COLOR_YELLOW, COLOR_GREEN);</span></span>
<span class="line"><span>&lt;     init_pair(WATER_PAIR, COLOR_CYAN, COLOR_BLUE);</span></span>
<span class="line"><span>&lt;     init_pair(MOUNTAIN_PAIR, COLOR_BLACK, COLOR_WHITE);</span></span>
<span class="line"><span>&lt;     init_pair(PLAYER_PAIR, COLOR_RED, COLOR_MAGENTA);</span></span>
<span class="line"><span>&lt;</span></span>
<span class="line"><span>61d40</span></span>
<span class="line"><span>&lt;    attron(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>63d41</span></span>
<span class="line"><span>&lt;    attroff(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>76d53</span></span>
<span class="line"><span>&lt;            attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>78d54</span></span>
<span class="line"><span>&lt;            attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>86d61</span></span>
<span class="line"><span>&lt;            attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>88d62</span></span>
<span class="line"><span>&lt;            attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>96d69</span></span>
<span class="line"><span>&lt;            attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>98d70</span></span>
<span class="line"><span>&lt;            attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>106d77</span></span>
<span class="line"><span>&lt;            attron(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>108d78</span></span>
<span class="line"><span>&lt;            attroff(COLOR_PAIR(EMPTY_PAIR));</span></span>
<span class="line"><span>128,129c98</span></span>
<span class="line"><span>&lt;     return (((testch &amp; A_CHARTEXT) == GRASS)</span></span>
<span class="line"><span>&lt;        || ((testch &amp; A_CHARTEXT) == EMPTY));</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>&gt;     return ((testch == GRASS) || (testch == EMPTY));</span></span>
<span class="line"><span>140d108</span></span>
<span class="line"><span>&lt;     attron(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>144d111</span></span>
<span class="line"><span>&lt;     attroff(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>148d114</span></span>
<span class="line"><span>&lt;     attron(COLOR_PAIR(MOUNTAIN_PAIR));</span></span>
<span class="line"><span>152d117</span></span>
<span class="line"><span>&lt;     attroff(COLOR_PAIR(MOUNTAIN_PAIR));</span></span>
<span class="line"><span>154d118</span></span>
<span class="line"><span>&lt;     attron(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>156d119</span></span>
<span class="line"><span>&lt;     attroff(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>160d122</span></span>
<span class="line"><span>&lt;     attron(COLOR_PAIR(WATER_PAIR));</span></span>
<span class="line"><span>164d125</span></span>
<span class="line"><span>&lt;     attroff(COLOR_PAIR(WATER_PAIR));</span></span></code></pre></div><h3 id="開始玩吧-現在有顏色了" tabindex="-1">開始玩吧--現在有顏色了 <a class="header-anchor" href="#開始玩吧-現在有顏色了" aria-label="Permalink to “開始玩吧--現在有顏色了”">​</a></h3><p>程序現在有了更舒服的顏色設計了，更匹配原來的桌遊地圖，有綠色的地、藍色的湖和壯觀的灰色山峯。英雄穿着紅色的制服十分奪目。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-map_0.jpg" alt=""></p><p><em>圖 1. 一個簡單的帶湖和山的桌遊地圖</em></p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-color-start.png" alt=""></p><p><em>圖 2. 玩家站在左下角</em></p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-color-1.png" alt=""></p><p><em>圖 3. 玩家可以在遊戲區域移動，比如圍繞湖，通過山的通道到達未知的區域。</em></p><p>通過顏色，你可以更清楚地展示信息。這個例子使用顏色指出可遊戲的區域（綠色）相對着不可通過的區域（藍色或者灰色）。我希望你可以使用這個示例遊戲作為你自己的程序的一個起點或者參照。這取決於你需要你的程序做什麼，你可以通過 curses 做得更多。</p>`,35)),a("p",null,[s[7]||(s[7]=n("在下一篇文章，我計劃展示 ncurses 庫的其它特性，比如怎樣創建窗口和邊框。同時，如果你對於學習 curses 有興趣，我建議你去讀位於 ",-1)),l(p,{href:"http://www.tldp.org"},{default:e(()=>[...s[5]||(s[5]=[n("Linux 文檔計劃",-1)])]),_:1}),s[8]||(s[8]=n(" 的 Pradeep Padala 寫的 ",-1)),l(p,{href:"http://tldp.org/HOWTO/NCURSES-Programming-HOWTO"},{default:e(()=>[...s[6]||(s[6]=[n("NCURSES Programming HOWTO",-1)])]),_:1}),s[9]||(s[9]=n("。",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),l(p,{href:"http://www.linuxjournal.com/content/programming-color-ncurses"},{default:e(()=>[...s[10]||(s[10]=[n("http://www.linuxjournal.com/content/programming-color-ncurses",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("作者：",-1)),l(p,{href:"http://www.linuxjournal.com/users/jim-hall"},{default:e(()=>[...s[12]||(s[12]=[n("Jim Hall",-1)])]),_:1}),s[16]||(s[16]=n(" 譯者：",-1)),l(p,{href:"https://github.com/leemeans"},{default:e(()=>[...s[13]||(s[13]=[n("leemeans",-1)])]),_:1}),s[17]||(s[17]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[n("Linux中國",-1)])]),_:1}),s[22]||(s[22]=n(" 榮譽推出",-1))])])}const C=i(d,[["render",R]]);export{g as __pageData,C as default};
