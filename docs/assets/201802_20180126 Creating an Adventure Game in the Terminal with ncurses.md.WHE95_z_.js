import{_ as i,a0 as c,w as t,s as r,I as a,x as n,a1 as l,A as e,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"通过 ncurses 在终端创建一个冒险游戏 | LCTT x X-CMD","titleTemplate":false,"description":"通过 ncurses 在终端创建一个冒险游戏 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过 ncurses 在终端创建一个冒险游戏 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过 ncurses 在终端创建一个冒险游戏 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180126 Creating an Adventure Game in the Terminal with ncurses","title":"通过 ncurses 在终端创建一个冒险游戏","tag":"201802","desc":""},"relativePath":"201802/20180126 Creating an Adventure Game in the Terminal with ncurses.md","filePath":"[post].md"}'),o={name:"201802/20180126 Creating an Adventure Game in the Terminal with ncurses.md"};function h(u,s,m,g,k,y){const p=c("Link");return t(),r("div",null,[s[19]||(s[19]=a("h1",{id:"通过-ncurses-在终端创建一个冒险游戏",tabindex:"-1"},[n("通过 ncurses 在终端创建一个冒险游戏 "),a("a",{class:"header-anchor",href:"#通过-ncurses-在终端创建一个冒险游戏","aria-label":"Permalink to “通过 ncurses 在终端创建一个冒险游戏”"},"​")],-1)),s[20]||(s[20]=a("p",null,"怎样使用 curses 函数读取键盘并操作屏幕。",-1)),a("p",null,[s[1]||(s[1]=n("我",-1)),l(p,{href:"https://linux.cn/article-9348-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("之前的文章",-1)])]),_:1}),s[2]||(s[2]=n("介绍了 ncurses 库，并提供了一个简单的程序展示了一些将文本放到屏幕上的 curses 函数。在接下来的文章中，我将介绍如何使用其它的 curses 函数。",-1))]),s[21]||(s[21]=d(`<h3 id="探险" tabindex="-1">探险 <a class="header-anchor" href="#探险" aria-label="Permalink to “探险”">​</a></h3><p>当我逐渐长大，家里有了一台苹果 II 电脑。我和我兄弟正是在这台电脑上自学了如何用 AppleSoft BASIC 写程序。我在写了一些数学智力游戏之后，继续创造游戏。作为 80 年代的人，我已经是龙与地下城桌游的粉丝，在游戏中角色扮演一个追求打败怪物并在陌生土地上抢掠的战士或者男巫，所以我创建一个基本的冒险游戏也在情理之中。</p><p>AppleSoft BASIC 支持一种简洁的特性：在标准分辨率图形模式（GR 模式）下，你可以检测屏幕上特定点的颜色。这为创建一个冒险游戏提供了捷径。比起创建并更新周期性传送到屏幕的内存地图，我现在可以依赖 GR 模式为我维护地图，我的程序还可以在玩家的角色（LCTT 译注：此处 character 双关一个代表玩家的角色，同时也是一个字符）在屏幕四处移动的时候查询屏幕。通过这种方式，我让电脑完成了大部分艰难的工作。因此，我的自顶向下的冒险游戏使用了块状的 GR 模式图形来展示我的游戏地图。</p><p>我的冒险游戏使用了一张简单的地图，上面有一大片绿地伴着山脉从中间蔓延向下和一个在左上方的大湖。我要粗略地为桌游战役绘制这个地图，其中包含一个允许玩家穿过到远处的狭窄通道。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-map.jpg" alt=""></p><p><em>图 1. 一个有湖和山的简单桌游地图</em></p><p>你可以用 curses 绘制这个地图，并用字符代表草地、山脉和水。接下来，我描述怎样使用 curses 那样做，以及如何在 Linux 终端创建和进行类似的一个冒险游戏。</p><h3 id="构建程序" tabindex="-1">构建程序 <a class="header-anchor" href="#构建程序" aria-label="Permalink to “构建程序”">​</a></h3><p>在我的上一篇文章，我提到了大多数 curses 程序以相同的一组指令获取终端类型和设置 curses 环境：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>initscr();</span></span>
<span class="line"><span>cbreak();</span></span>
<span class="line"><span>noecho();</span></span></code></pre></div><p>在这个程序，我添加了另外的语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>keypad(stdscr, TRUE);</span></span></code></pre></div><p>这里的 <code>TRUE</code> 标志允许 curses 从用户终端读取小键盘和功能键。如果你想要在你的程序中使用上下左右方向键，你需要使用这里的 <code>keypad(stdscr, TRUE)</code>。</p><p>这样做了之后，你现在可以开始在终端屏幕上绘图了。curses 函数包括了一系列在屏幕上绘制文本的方法。在我之前的文章中，我展示了 <code>addch()</code> 和 <code>addstr()</code> 函数以及在添加文本之前先移动到指定屏幕位置的对应函数 <code>mvaddch()</code> 和 <code>mvaddstr()</code>。为了在终端上创建这个冒险游戏的地图，你可以使用另外一组函数：<code>vline()</code> 和 <code>hline()</code>，以及它们对应的函数 <code>mvvline()</code> 和 <code>mvhline()</code>。这些 mv 函数接受屏幕坐标、一个要绘制的字符和要重复此字符的次数的参数。例如，<code>mvhline(1, 2, &#39;-&#39;, 20)</code> 将会绘制一条开始于第一行第二列并由 20 个横线组成的线段。</p><p>为了以编程方式绘制地图到终端屏幕上，让我们先定义这个 <code>draw_map()</code> 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define GRASS     &#39; &#39;</span></span>
<span class="line"><span>#define EMPTY     &#39;.&#39;</span></span>
<span class="line"><span>#define WATER     &#39;~&#39;</span></span>
<span class="line"><span>#define MOUNTAIN  &#39;^&#39;</span></span>
<span class="line"><span>#define PLAYER    &#39;*&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void draw_map(void)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int y, x;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 绘制探索地图 */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在绘制这副地图时，记住填充大块字符到屏幕所使用的 <code>mvvline()</code> 和 <code>mvhline()</code> 函数。我绘制从 0 列开始的字符水平线（<code>mvhline</code>）以创建草地区域，直到占满整个屏幕的高度和宽度。我绘制从 0 行开始的多条垂直线（<code>mvvline</code>）在此上添加了山脉，绘制单行水平线添加了一条山道（<code>mvhline</code>）。并且，我通过绘制一系列短水平线（<code>mvhline</code>）创建了湖。这种绘制重叠方块的方式看起来似乎并没有效率，但是记住在我们调用 <code>refresh()</code> 函数之前 curses 并不会真正更新屏幕。</p><p>绘制完地图，创建游戏就还剩下进入循环让程序等待用户按下上下左右方向键中的一个然后让玩家图标正确移动了。如果玩家想要移动的地方是空的，就应该允许玩家到那里。</p><p>你可以把 curses 当做捷径使用。比起在程序中实例化一个版本的地图并复制到屏幕这么复杂，你可以让屏幕为你跟踪所有东西。<code>inch()</code> 函数和相关联的 <code>mvinch()</code> 函数允许你探测屏幕的内容。这让你可以查询 curses 以了解玩家想要移动到的位置是否被水填满或者被山阻挡。这样做你需要一个之后会用到的一个帮助函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int is_move_okay(int y, int x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    int testch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 如果要进入的位置可以进入，返回 true */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return ((testch == GRASS) || (testch == EMPTY));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如你所见，这个函数探测行 <code>x</code>、列 <code>y</code> 并在空间未被占据的时候返回 <code>true</code>，否则返回 <code>false</code>。</p><p>这样我们写移动循环就很容易了：从键盘获取一个键值然后根据是上下左右键移动用户字符。这里是一个这种循环的简单版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>        ch = getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        /* 测试输入的值并获取方向 */</span></span>
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
<span class="line"><span>    while (1);</span></span></code></pre></div><p>为了在游戏中使用这个循环，你需要在循环里添加一些代码来启用其它的键（例如传统的移动键 WASD），以提供让用户退出游戏和在屏幕上四处移动的方法。这里是完整的程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* quest.c */</span></span>
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
<span class="line"><span>    /* 初始化探索地图 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    draw_map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 在左下角初始化玩家 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    y = LINES - 1;</span></span>
<span class="line"><span>    x = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    do {</span></span>
<span class="line"><span>	/* 默认获得一个闪烁的光标--表示玩家字符 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	mvaddch(y, x, PLAYER);</span></span>
<span class="line"><span>	move(y, x);</span></span>
<span class="line"><span>	refresh();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ch = getch();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	/* 测试输入的键并获取方向 */</span></span>
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
<span class="line"><span>    /* 当空间可以进入时返回true */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    testch = mvinch(y, x);</span></span>
<span class="line"><span>    return ((testch == GRASS) || (testch == EMPTY));</span></span>
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
<span class="line"><span>    for (y = 0; y &lt; LINES; y++) {</span></span>
<span class="line"><span>	mvhline(y, 0, GRASS, COLS);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /* 山脉和山道 */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在完整的程序清单中，你可以看见使用 curses 函数创建游戏的完整布置：</p><ol><li>初始化 curses 环境。</li><li>绘制地图。</li><li>初始化玩家坐标（左下角）</li><li>循环： <ul><li>绘制玩家的角色。</li><li>从键盘获取键值。</li><li>对应地上下左右调整玩家坐标。</li><li>重复。</li></ul></li><li>完成时关闭curses环境并退出。</li></ol><h3 id="开始玩" tabindex="-1">开始玩 <a class="header-anchor" href="#开始玩" aria-label="Permalink to “开始玩”">​</a></h3><p>当你运行游戏时，玩家的字符在左下角初始化。当玩家在游戏区域四处移动的时候，程序创建了“一串”点。这样可以展示玩家经过了的点，让玩家避免经过不必要的路径。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-start.png" alt=""></p><p><em>图 2. 初始化在左下角的玩家</em></p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/quest-1.png" alt=""></p><p><em>图 3. 玩家可以在游戏区域四处移动，例如湖周围和山的通道</em></p><p>为了创建上面这样的完整冒险游戏，你可能需要在他/她的角色在游戏区域四处移动的时候随机创建不同的怪物。你也可以创建玩家可以发现在打败敌人后可以掠夺的特殊道具，这些道具应能提高玩家的能力。</p><p>但是作为起点，这是一个展示如何使用 curses 函数读取键盘和操纵屏幕的好程序。</p><h3 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to “下一步”">​</a></h3>`,36)),a("p",null,[s[4]||(s[4]=n("这是一个如何使用 curses 函数更新和读取屏幕和键盘的简单例子。按照你的程序需要做什么，curses 可以做得更多。在下一篇文章中，我计划展示如何更新这个简单程序以使用颜色。同时，如果你想要学习更多 curses，我鼓励你去读位于 Linux 文档计划的 Pradeep Padala 写的",-1)),l(p,{href:"http://tldp.org/HOWTO/NCURSES-Programming-HOWTO"},{default:e(()=>[...s[3]||(s[3]=[n("如何使用 NCURSES 编程",-1)])]),_:1}),s[5]||(s[5]=n("。",-1))]),s[22]||(s[22]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),l(p,{href:"http://www.linuxjournal.com/content/creating-adventure-game-terminal-ncurses"},{default:e(()=>[...s[6]||(s[6]=[n("http://www.linuxjournal.com/content/creating-adventure-game-terminal-ncurses",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),l(p,{href:"http://www.linuxjournal.com/users/jim-hall"},{default:e(()=>[...s[8]||(s[8]=[n("Jim Hall",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),l(p,{href:"https://github.com/leemeans"},{default:e(()=>[...s[9]||(s[9]=[n("Leemeans",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const b=i(o,[["render",h]]);export{v as __pageData,b as default};
