import{_ as i,a0 as c,w as t,s as r,I as a,x as n,a1 as l,A as e,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"通過 ncurses 在終端創建一個冒險遊戲 | LCTT x X-CMD","titleTemplate":false,"description":"通過 ncurses 在終端創建一個冒險遊戲 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通過 ncurses 在終端創建一個冒險遊戲 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通過 ncurses 在終端創建一個冒險遊戲 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180126 Creating an Adventure Game in the Terminal with ncurses","title":"通過 ncurses 在終端創建一個冒險遊戲","tag":"201802","desc":""},"relativePath":"201802/20180126 Creating an Adventure Game in the Terminal with ncurses.md","filePath":"[post].md"}'),o={name:"201802/20180126 Creating an Adventure Game in the Terminal with ncurses.md"};function h(u,s,m,g,k,y){const p=c("Link");return t(),r("div",null,[s[19]||(s[19]=a("h1",{id:"通過-ncurses-在終端創建一個冒險遊戲",tabindex:"-1"},[n("通過 ncurses 在終端創建一個冒險遊戲 "),a("a",{class:"header-anchor",href:"#通過-ncurses-在終端創建一個冒險遊戲","aria-label":"Permalink to “通過 ncurses 在終端創建一個冒險遊戲”"},"​")],-1)),s[20]||(s[20]=a("p",null,"怎樣使用 curses 函數讀取鍵盤並操作屏幕。",-1)),a("p",null,[s[1]||(s[1]=n("我",-1)),l(p,{href:"https://linux.cn/article-9348-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("之前的文章",-1)])]),_:1}),s[2]||(s[2]=n("介紹了 ncurses 庫，並提供了一個簡單的程序展示了一些將文本放到屏幕上的 curses 函數。在接下來的文章中，我將介紹如何使用其它的 curses 函數。",-1))]),s[21]||(s[21]=d(`<h3 id="探險" tabindex="-1">探險 <a class="header-anchor" href="#探險" aria-label="Permalink to “探險”">​</a></h3><p>當我逐漸長大，家裏有了一台蘋果 II 電腦。我和我兄弟正是在這台電腦上自學瞭如何用 AppleSoft BASIC 寫程序。我在寫了一些數學智力遊戲之後，繼續創造遊戲。作為 80 年代的人，我已經是龍與地下城桌遊的粉絲，在遊戲中角色扮演一個追求打敗怪物並在陌生土地上搶掠的戰士或者男巫，所以我創建一個基本的冒險遊戲也在情理之中。</p><p>AppleSoft BASIC 支持一種簡潔的特性：在標準分辨率圖形模式（GR 模式）下，你可以檢測屏幕上特定點的顏色。這為創建一個冒險遊戲提供了捷徑。比起創建並更新週期性傳送到屏幕的內存地圖，我現在可以依賴 GR 模式為我維護地圖，我的程序還可以在玩家的角色（LCTT 譯註：此處 character 雙關一個代表玩家的角色，同時也是一個字符）在屏幕四處移動的時候查詢屏幕。通過這種方式，我讓電腦完成了大部分艱難的工作。因此，我的自頂向下的冒險遊戲使用了塊狀的 GR 模式圖形來展示我的遊戲地圖。</p><p>我的冒險遊戲使用了一張簡單的地圖，上面有一大片綠地伴着山脈從中間蔓延向下和一個在左上方的大湖。我要粗略地為桌遊戰役繪製這個地圖，其中包含一個允許玩家穿過到遠處的狹窄通道。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-map.jpg" alt=""></p><p><em>圖 1. 一個有湖和山的簡單桌遊地圖</em></p><p>你可以用 curses 繪製這個地圖，並用字符代表草地、山脈和水。接下來，我描述怎樣使用 curses 那樣做，以及如何在 Linux 終端創建和進行類似的一個冒險遊戲。</p><h3 id="構建程序" tabindex="-1">構建程序 <a class="header-anchor" href="#構建程序" aria-label="Permalink to “構建程序”">​</a></h3><p>在我的上一篇文章，我提到了大多數 curses 程序以相同的一組指令獲取終端類型和設置 curses 環境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>initscr();</span></span>
<span class="line"><span>cbreak();</span></span>
<span class="line"><span>noecho();</span></span></code></pre></div><p>在這個程序，我添加了另外的語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>keypad(stdscr, TRUE);</span></span></code></pre></div><p>這裏的 <code>TRUE</code> 標誌允許 curses 從用户終端讀取小鍵盤和功能鍵。如果你想要在你的程序中使用上下左右方向鍵，你需要使用這裏的 <code>keypad(stdscr, TRUE)</code>。</p><p>這樣做了之後，你現在可以開始在終端屏幕上繪圖了。curses 函數包括了一系列在屏幕上繪製文本的方法。在我之前的文章中，我展示了 <code>addch()</code> 和 <code>addstr()</code> 函數以及在添加文本之前先移動到指定屏幕位置的對應函數 <code>mvaddch()</code> 和 <code>mvaddstr()</code>。為了在終端上創建這個冒險遊戲的地圖，你可以使用另外一組函數：<code>vline()</code> 和 <code>hline()</code>，以及它們對應的函數 <code>mvvline()</code> 和 <code>mvhline()</code>。這些 mv 函數接受屏幕座標、一個要繪製的字符和要重複此字符的次數的參數。例如，<code>mvhline(1, 2, &#39;-&#39;, 20)</code> 將會繪製一條開始於第一行第二列並由 20 個橫線組成的線段。</p><p>為了以編程方式繪製地圖到終端屏幕上，讓我們先定義這個 <code>draw_map()</code> 函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define GRASS     &#39; &#39;</span></span>
<span class="line"><span>#define EMPTY     &#39;.&#39;</span></span>
<span class="line"><span>#define WATER     &#39;~&#39;</span></span>
<span class="line"><span>#define MOUNTAIN  &#39;^&#39;</span></span>
<span class="line"><span>#define PLAYER    &#39;*&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void draw_map(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int y, x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 繪製探索地圖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 背景 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (y = 0; y &lt; LINES; y++) {</span></span>
<span class="line"><span>        mvhline(y, 0, GRASS, COLS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 山和山道 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (x = COLS / 2; x &lt; COLS * 3 / 4; x++) {</span></span>
<span class="line"><span>        mvvline(0, x, MOUNTAIN, LINES);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mvhline(LINES / 4, 0, GRASS, COLS);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 湖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (y = 1; y &lt; LINES / 2; y++) {</span></span>
<span class="line"><span>        mvhline(y, 1, WATER, COLS / 3);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在繪製這副地圖時，記住填充大塊字符到屏幕所使用的 <code>mvvline()</code> 和 <code>mvhline()</code> 函數。我繪製從 0 列開始的字符水平線（<code>mvhline</code>）以創建草地區域，直到佔滿整個屏幕的高度和寬度。我繪製從 0 行開始的多條垂直線（<code>mvvline</code>）在此上添加了山脈，繪製單行水平線添加了一條山道（<code>mvhline</code>）。並且，我通過繪製一系列短水平線（<code>mvhline</code>）創建了湖。這種繪製重疊方塊的方式看起來似乎並沒有效率，但是記住在我們調用 <code>refresh()</code> 函數之前 curses 並不會真正更新屏幕。</p><p>繪製完地圖，創建遊戲就還剩下進入循環讓程序等待用户按下上下左右方向鍵中的一個然後讓玩家圖標正確移動了。如果玩家想要移動的地方是空的，就應該允許玩家到那裏。</p><p>你可以把 curses 當做捷徑使用。比起在程序中實例化一個版本的地圖並複製到屏幕這麼複雜，你可以讓屏幕為你跟蹤所有東西。<code>inch()</code> 函數和相關聯的 <code>mvinch()</code> 函數允許你探測屏幕的內容。這讓你可以查詢 curses 以瞭解玩家想要移動到的位置是否被水填滿或者被山阻擋。這樣做你需要一個之後會用到的一個幫助函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int is_move_okay(int y, int x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int testch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 如果要進入的位置可以進入，返回 true */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return ((testch == GRASS) || (testch == EMPTY));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如你所見，這個函數探測行 <code>x</code>、列 <code>y</code> 並在空間未被佔據的時候返回 <code>true</code>，否則返回 <code>false</code>。</p><p>這樣我們寫移動循環就很容易了：從鍵盤獲取一個鍵值然後根據是上下左右鍵移動用户字符。這裏是一個這種循環的簡單版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>        ch = getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 測試輸入的值並獲取方向 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        switch (ch) {</span></span>
<span class="line"><span>        case KEY_UP:</span></span>
<span class="line"><span>            if ((y &gt; 0) &amp;&amp; is_move_okay(y - 1, x)) {</span></span>
<span class="line"><span>                y = y - 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case KEY_DOWN:</span></span>
<span class="line"><span>            if ((y &lt; LINES - 1) &amp;&amp; is_move_okay(y + 1, x)) {</span></span>
<span class="line"><span>                y = y + 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case KEY_LEFT:</span></span>
<span class="line"><span>            if ((x &gt; 0) &amp;&amp; is_move_okay(y, x - 1)) {</span></span>
<span class="line"><span>                x = x - 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        case KEY_RIGHT</span></span>
<span class="line"><span>            if ((x &lt; COLS - 1) &amp;&amp; is_move_okay(y, x + 1)) {</span></span>
<span class="line"><span>                x = x + 1;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    while (1);</span></span></code></pre></div><p>為了在遊戲中使用這個循環，你需要在循環裏添加一些代碼來啓用其它的鍵（例如傳統的移動鍵 WASD），以提供讓用户退出遊戲和在屏幕上四處移動的方法。這裏是完整的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* quest.c */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include </span></span>
<span class="line"><span>#include </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define GRASS  	  &#39; &#39;</span></span>
<span class="line"><span>#define EMPTY     &#39;.&#39;</span></span>
<span class="line"><span>#define WATER	  &#39;~&#39;</span></span>
<span class="line"><span>#define MOUNTAIN  &#39;^&#39;</span></span>
<span class="line"><span>#define PLAYER	  &#39;*&#39;</span></span>
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
<span class="line"><span>    clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 初始化探索地圖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    draw_map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 在左下角初始化玩家 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    y = LINES - 1;</span></span>
<span class="line"><span>    x = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>	/* 默認獲得一個閃爍的光標--表示玩家字符 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	mvaddch(y, x, PLAYER);</span></span>
<span class="line"><span>	move(y, x);</span></span>
<span class="line"><span>	refresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ch = getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	/* 測試輸入的鍵並獲取方向 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	switch (ch) {</span></span>
<span class="line"><span>	case KEY_UP:</span></span>
<span class="line"><span>	case &#39;w&#39;:</span></span>
<span class="line"><span>	case &#39;W&#39;:</span></span>
<span class="line"><span>	    if ((y &gt; 0) &amp;&amp; is_move_okay(y - 1, x)) {</span></span>
<span class="line"><span>		mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>		y = y - 1;</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>	    break;</span></span>
<span class="line"><span>	case KEY_DOWN:</span></span>
<span class="line"><span>	case &#39;s&#39;:</span></span>
<span class="line"><span>	case &#39;S&#39;:</span></span>
<span class="line"><span>	    if ((y &lt; LINES - 1) &amp;&amp; is_move_okay(y + 1, x)) {</span></span>
<span class="line"><span>		mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>		y = y + 1;</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>	    break;</span></span>
<span class="line"><span>	case KEY_LEFT:</span></span>
<span class="line"><span>	case &#39;a&#39;:</span></span>
<span class="line"><span>	case &#39;A&#39;:</span></span>
<span class="line"><span>	    if ((x &gt; 0) &amp;&amp; is_move_okay(y, x - 1)) {</span></span>
<span class="line"><span>		mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>		x = x - 1;</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>	    break;</span></span>
<span class="line"><span>	case KEY_RIGHT:</span></span>
<span class="line"><span>	case &#39;d&#39;:</span></span>
<span class="line"><span>	case &#39;D&#39;:</span></span>
<span class="line"><span>	    if ((x &lt; COLS - 1) &amp;&amp; is_move_okay(y, x + 1)) {</span></span>
<span class="line"><span>		mvaddch(y, x, EMPTY);</span></span>
<span class="line"><span>		x = x + 1;</span></span>
<span class="line"><span>	    }</span></span>
<span class="line"><span>	    break;</span></span>
<span class="line"><span>	}</span></span>
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
<span class="line"><span>    /* 當空間可以進入時返回true */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return ((testch == GRASS) || (testch == EMPTY));</span></span>
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
<span class="line"><span>    for (y = 0; y &lt; LINES; y++) {</span></span>
<span class="line"><span>	mvhline(y, 0, GRASS, COLS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 山脈和山道 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (x = COLS / 2; x &lt; COLS * 3 / 4; x++) {</span></span>
<span class="line"><span>	mvvline(0, x, MOUNTAIN, LINES);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    mvhline(LINES / 4, 0, GRASS, COLS);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 湖 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (y = 1; y &lt; LINES / 2; y++) {</span></span>
<span class="line"><span>	mvhline(y, 1, WATER, COLS / 3);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在完整的程序清單中，你可以看見使用 curses 函數創建遊戲的完整佈置：</p><ol><li>初始化 curses 環境。</li><li>繪製地圖。</li><li>初始化玩家座標（左下角）</li><li>循環： <ul><li>繪製玩家的角色。</li><li>從鍵盤獲取鍵值。</li><li>對應地上下左右調整玩家座標。</li><li>重複。</li></ul></li><li>完成時關閉curses環境並退出。</li></ol><h3 id="開始玩" tabindex="-1">開始玩 <a class="header-anchor" href="#開始玩" aria-label="Permalink to “開始玩”">​</a></h3><p>當你運行遊戲時，玩家的字符在左下角初始化。當玩家在遊戲區域四處移動的時候，程序創建了“一串”點。這樣可以展示玩家經過了的點，讓玩家避免經過不必要的路徑。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-start.png" alt=""></p><p><em>圖 2. 初始化在左下角的玩家</em></p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-1.png" alt=""></p><p><em>圖 3. 玩家可以在遊戲區域四處移動，例如湖周圍和山的通道</em></p><p>為了創建上面這樣的完整冒險遊戲，你可能需要在他/她的角色在遊戲區域四處移動的時候隨機創建不同的怪物。你也可以創建玩家可以發現在打敗敵人後可以掠奪的特殊道具，這些道具應能提高玩家的能力。</p><p>但是作為起點，這是一個展示如何使用 curses 函數讀取鍵盤和操縱屏幕的好程序。</p><h3 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to “下一步”">​</a></h3>`,36)),a("p",null,[s[4]||(s[4]=n("這是一個如何使用 curses 函數更新和讀取屏幕和鍵盤的簡單例子。按照你的程序需要做什麼，curses 可以做得更多。在下一篇文章中，我計劃展示如何更新這個簡單程序以使用顏色。同時，如果你想要學習更多 curses，我鼓勵你去讀位於 Linux 文檔計劃的 Pradeep Padala 寫的",-1)),l(p,{href:"http://tldp.org/HOWTO/NCURSES-Programming-HOWTO"},{default:e(()=>[...s[3]||(s[3]=[n("如何使用 NCURSES 編程",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),s[22]||(s[22]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),l(p,{href:"http://www.linuxjournal.com/content/creating-adventure-game-terminal-ncurses"},{default:e(()=>[...s[6]||(s[6]=[n("http://www.linuxjournal.com/content/creating-adventure-game-terminal-ncurses",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),l(p,{href:"http://www.linuxjournal.com/users/jim-hall"},{default:e(()=>[...s[8]||(s[8]=[n("Jim Hall",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),l(p,{href:"https://github.com/leemeans"},{default:e(()=>[...s[9]||(s[9]=[n("Leemeans",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const b=i(o,[["render",h]]);export{v as __pageData,b as default};
