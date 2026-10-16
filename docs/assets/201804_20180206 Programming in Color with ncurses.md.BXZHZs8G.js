import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"使用 ncurses 进行颜色编程 | LCTT x X-CMD","titleTemplate":false,"description":"使用 ncurses 进行颜色编程 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 ncurses 进行颜色编程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 ncurses 进行颜色编程 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180206 Programming in Color with ncurses","title":"使用 ncurses 进行颜色编程","tag":"201804","desc":""},"relativePath":"201804/20180206 Programming in Color with ncurses.md","filePath":"[post].md"}'),d={name:"201804/20180206 Programming in Color with ncurses.md"};function R(A,s,O,_,u,P){const p=t("Link");return c(),o("div",null,[s[23]||(s[23]=a("h1",{id:"使用-ncurses-进行颜色编程",tabindex:"-1"},[n("使用 ncurses 进行颜色编程 "),a("a",{class:"header-anchor",href:"#使用-ncurses-进行颜色编程","aria-label":"Permalink to “使用 ncurses 进行颜色编程”"},"​")],-1)),s[24]||(s[24]=a("p",null,[a("img",{src:"https://www.linuxjournal.com/sites/default/files/styles/850x500/public/nodeimage/story/quest-color-1.png?itok=lOK4ldl6",alt:""})],-1)),s[25]||(s[25]=a("blockquote",null,[a("p",null,"Jim 给他的终端冒险游戏添加了颜色，演示了如何用 curses 操纵颜色。")],-1)),a("p",null,[s[2]||(s[2]=n("在我的使用 ncurses 库进行编程的系列文章的",-1)),l(p,{href:"https://linux.cn/article-9348-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("第一篇",-1)])]),_:1}),s[3]||(s[3]=n("和",-1)),l(p,{href:"https://linux.cn/article-9383-1.html"},{default:e(()=>[...s[1]||(s[1]=[n("第二篇",-1)])]),_:1}),s[4]||(s[4]=n("中，我已经介绍了一些 curses 函数来在屏幕上作画、从屏幕上查询和从键盘读取字符。为了搞清楚这些函数，我使用 curses 来利用简单字符绘制游戏地图和玩家角色，创建了一个简单的冒险游戏。在这篇紧接着的文章里，我展示了如何为你的 curses 程序添加颜色。",-1))]),s[26]||(s[26]=r(`<p>在屏幕上绘图一切都挺好的，但是如果只有黑底白字的文本，你的程序可能看起来很无趣。颜色可以帮助传递更多的信息。举个例子，如果你的程序需要报告执行成功或者执行失败时。在这样的情况下你可以使用绿色或者红色来帮助强调输出。或者，你只是简单地想要“潮艺”一下给你的程序来让它看起来更美观。</p><p>在这篇文章中，我用一个简单的例子来展示通过 curses 函数进行颜色操作。在我先前的文章中，我写了一个可以让你在一个粗糙绘制的地图上移动玩家角色的初级冒险类游戏。但是那里面的地图完全是白色和黑色的文本，通过形状来表明是水（<code>～</code>）或者山（<code>^</code>）。所以，让我们将游戏更新到使用颜色的版本吧。</p><h3 id="颜色要素" tabindex="-1">颜色要素 <a class="header-anchor" href="#颜色要素" aria-label="Permalink to “颜色要素”">​</a></h3><p>在你可以使用颜色之前，你的程序需要知道它是否可以依靠终端正确地显示颜色。在现代操作系统上，此处应该永远为true。但是在经典的计算机上，一些终端是单色的，例如古老的 VT52 和 VT100 终端，一般它们提供黑底白色或者黑底绿色的文本。</p><p>可以使用 <code>has_colors()</code> 函数查询终端的颜色功能。这个函数将会在终端可以显示颜色的时候返回 <code>true</code>，否则将会返回 <code>false</code>。这个函数一般用于 <code>if</code> 块的开头，就像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if (has_colors() == FALSE) {</span></span>
<span class="line"><span>    endwin();</span></span>
<span class="line"><span>    printf(&quot;Your terminal does not support color\\n&quot;);</span></span>
<span class="line"><span>    exit(1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在知道终端可以显示颜色之后，你可以使用 <code>start_color()</code> 函数来设置 curses 使用颜色。现在是时候定义程序将要使用的颜色了。</p><p>在 curses 中，你应该按对定义颜色：一个前景色放在一个背景色上。这样允许 curses 一次性设置两个颜色属性，这也是一般你想要使用的方式。通过 <code>init_pair()</code> 函数可以定义一个前景色和背景色并关联到索引数字来设置颜色对。大致语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>init_pair(index, foreground, background);</span></span></code></pre></div><p>控制台支持八种基础的颜色：黑色、红色、绿色、黄色、蓝色、品红色、青色和白色。这些颜色通过下面的名称为你定义好了：</p><ul><li><code>COLOR_BLACK</code></li><li><code>COLOR_RED</code></li><li><code>COLOR_GREEN</code></li><li><code>COLOR_YELLOW</code></li><li><code>COLOR_BLUE</code></li><li><code>COLOR_MAGENTA</code></li><li><code>COLOR_CYAN</code></li><li><code>COLOR_WHITE</code></li></ul><h3 id="应用颜色" tabindex="-1">应用颜色 <a class="header-anchor" href="#应用颜色" aria-label="Permalink to “应用颜色”">​</a></h3><p>在我的冒险游戏中，我想要让草地呈现绿色而玩家的足迹变成不易察觉的绿底黄色点迹。水应该是蓝色，那些表示波浪的 <code>~</code> 符号应该是近似青色的。我想让山（<code>^</code>）是灰色的，但是我可以用白底黑色文本做一个可用的折中方案。（LCTT 译注：意为终端预设的颜色没有灰色，使用白底黑色文本做一个折中方案）为了让玩家的角色更易见，我想要使用一个刺目的品红底红色设计。我可以像这样定义这些颜色对：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>start_color();</span></span>
<span class="line"><span>init_pair(1, COLOR_YELLOW, COLOR_GREEN);</span></span>
<span class="line"><span>init_pair(2, COLOR_CYAN, COLOR_BLUE);</span></span>
<span class="line"><span>init_pair(3, COLOR_BLACK, COLOR_WHITE);</span></span>
<span class="line"><span>init_pair(4, COLOR_RED, COLOR_MAGENTA);</span></span></code></pre></div><p>为了让颜色对更容易记忆，我的程序中定义了一些符号常量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define GRASS_PAIR     1</span></span>
<span class="line"><span>#define EMPTY_PAIR     1</span></span>
<span class="line"><span>#define WATER_PAIR     2</span></span>
<span class="line"><span>#define MOUNTAIN_PAIR  3</span></span>
<span class="line"><span>#define PLAYER_PAIR    4</span></span></code></pre></div><p>有了这些常量，我的颜色定义就变成了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>start_color();</span></span>
<span class="line"><span>init_pair(GRASS_PAIR, COLOR_YELLOW, COLOR_GREEN);</span></span>
<span class="line"><span>init_pair(WATER_PAIR, COLOR_CYAN, COLOR_BLUE);</span></span>
<span class="line"><span>init_pair(MOUNTAIN_PAIR, COLOR_BLACK, COLOR_WHITE);</span></span>
<span class="line"><span>init_pair(PLAYER_PAIR, COLOR_RED, COLOR_MAGENTA);</span></span></code></pre></div><p>在任何时候你想要使用颜色显示文本，你只需要告诉 curses 设置哪种颜色属性。为了更好的编程实践，你同样应该在你完成了颜色使用的时候告诉 curses 取消颜色组合。为了设置颜色，应该在调用像 <code>mvaddch()</code> 这样的函数之前使用<code>attron()</code>，然后通过 <code>attroff()</code> 关闭颜色属性。例如，在我绘制玩家角色的时候，我应该这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>attron(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>mvaddch(y, x, PLAYER);</span></span>
<span class="line"><span>attroff(COLOR_PAIR(PLAYER_PAIR));</span></span></code></pre></div><p>记住将颜色应用到你的程序对你如何查询屏幕有一些微妙的影响。一般来讲，由 <code>mvinch()</code> 函数返回的值是<strong>没有</strong>带颜色属性的类型 <code>chtype</code>，这个值基本上是一个整型值，也可以当作整型值来用。但是，由于使用颜色添加了额外的属性到屏幕上的字符上，所以 <code>chtype</code> 按照扩展的位模式携带了额外的颜色信息。一旦你使用 <code>mvinch()</code>，返回值将会包含这些额外的颜色值。为了只提取<strong>文本</strong>值，例如在 <code>is_move_okay()</code> 函数中，你需要和 <code>A_CHARTEXT</code> 做 <code>&amp;</code> 位运算：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int is_move_okay(int y, int x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int testch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* return true if the space is okay to move into */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return (((testch &amp; A_CHARTEXT) == GRASS)</span></span>
<span class="line"><span>            || ((testch &amp; A_CHARTEXT) == EMPTY));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过这些修改，我可以用颜色更新这个冒险游戏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* quest.c */</span></span>
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
<span class="line"><span>    /* 初始化颜色 */</span></span>
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
<span class="line"><span>    /* 初始化探索地图 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    draw_map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 在左下角创建新角色 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    y = LINES - 1;</span></span>
<span class="line"><span>    x = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 默认情况下，你获得了一个闪烁的光标--用来指明玩家 * */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        attron(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>        mvaddch(y, x, PLAYER);</span></span>
<span class="line"><span>        attroff(COLOR_PAIR(PLAYER_PAIR));</span></span>
<span class="line"><span>        move(y, x);</span></span>
<span class="line"><span>        refresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ch = getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 测试输入键值并获取方向 */</span></span>
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
<span class="line"><span>    /* 当空白处可以进入的时候返回true */</span></span>
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
<span class="line"><span>    /* 绘制探索地图 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 背景 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    attron(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span>    for (y = 0; y &lt; LINES; y++) {</span></span>
<span class="line"><span>        mvhline(y, 0, GRASS, COLS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    attroff(COLOR_PAIR(GRASS_PAIR));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 山峰和山路 */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你可能不能认出所有为了在冒险游戏里面支持颜色需要的修改，除非你目光敏锐。<code>diff</code> 工具展示了所有为了支持颜色而添加的函数或者修改的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ diff quest-color/quest.c quest/quest.c</span></span>
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
<span class="line"><span>&lt;     attroff(COLOR_PAIR(WATER_PAIR));</span></span></code></pre></div><h3 id="开始玩吧-现在有颜色了" tabindex="-1">开始玩吧--现在有颜色了 <a class="header-anchor" href="#开始玩吧-现在有颜色了" aria-label="Permalink to “开始玩吧--现在有颜色了”">​</a></h3><p>程序现在有了更舒服的颜色设计了，更匹配原来的桌游地图，有绿色的地、蓝色的湖和壮观的灰色山峰。英雄穿着红色的制服十分夺目。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-map_0.jpg" alt=""></p><p><em>图 1. 一个简单的带湖和山的桌游地图</em></p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-color-start.png" alt=""></p><p><em>图 2. 玩家站在左下角</em></p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-color-1.png" alt=""></p><p><em>图 3. 玩家可以在游戏区域移动，比如围绕湖，通过山的通道到达未知的区域。</em></p><p>通过颜色，你可以更清楚地展示信息。这个例子使用颜色指出可游戏的区域（绿色）相对着不可通过的区域（蓝色或者灰色）。我希望你可以使用这个示例游戏作为你自己的程序的一个起点或者参照。这取决于你需要你的程序做什么，你可以通过 curses 做得更多。</p>`,35)),a("p",null,[s[7]||(s[7]=n("在下一篇文章，我计划展示 ncurses 库的其它特性，比如怎样创建窗口和边框。同时，如果你对于学习 curses 有兴趣，我建议你去读位于 ",-1)),l(p,{href:"http://www.tldp.org"},{default:e(()=>[...s[5]||(s[5]=[n("Linux 文档计划",-1)])]),_:1}),s[8]||(s[8]=n(" 的 Pradeep Padala 写的 ",-1)),l(p,{href:"http://tldp.org/HOWTO/NCURSES-Programming-HOWTO"},{default:e(()=>[...s[6]||(s[6]=[n("NCURSES Programming HOWTO",-1)])]),_:1}),s[9]||(s[9]=n("。",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[11]||(s[11]=n("via: ",-1)),l(p,{href:"http://www.linuxjournal.com/content/programming-color-ncurses"},{default:e(()=>[...s[10]||(s[10]=[n("http://www.linuxjournal.com/content/programming-color-ncurses",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("作者：",-1)),l(p,{href:"http://www.linuxjournal.com/users/jim-hall"},{default:e(()=>[...s[12]||(s[12]=[n("Jim Hall",-1)])]),_:1}),s[16]||(s[16]=n(" 译者：",-1)),l(p,{href:"https://github.com/leemeans"},{default:e(()=>[...s[13]||(s[13]=[n("leemeans",-1)])]),_:1}),s[17]||(s[17]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[14]||(s[14]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[20]||(s[20]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[18]||(s[18]=[n("LCTT",-1)])]),_:1}),s[21]||(s[21]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[19]||(s[19]=[n("Linux中国",-1)])]),_:1}),s[22]||(s[22]=n(" 荣誉推出",-1))])])}const C=i(d,[["render",R]]);export{g as __pageData,C as default};
