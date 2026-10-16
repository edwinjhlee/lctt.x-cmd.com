import{_ as l,a0 as t,w as d,s as r,I as a,x as n,a1 as p,A as i,ao as c}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"ncurses 入门指南 | LCTT x X-CMD","titleTemplate":false,"description":"ncurses 入门指南 | LCTT (201802) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"ncurses 入门指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"ncurses 入门指南 | LCTT (201802) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201802/20180118 Getting Started with ncurses","title":"ncurses 入门指南","tag":"201802","desc":""},"relativePath":"201802/20180118 Getting Started with ncurses.md","filePath":"[post].md"}'),o={name:"201802/20180118 Getting Started with ncurses.md"};function u(g,s,h,m,k,b){const e=t("Link");return d(),r("div",null,[s[22]||(s[22]=a("h1",{id:"ncurses-入门指南",tabindex:"-1"},[n("ncurses 入门指南 "),a("a",{class:"header-anchor",href:"#ncurses-入门指南","aria-label":"Permalink to “ncurses 入门指南”"},"​")],-1)),s[23]||(s[23]=a("blockquote",null,[a("p",null,"怎样使用curses来绘制终端屏幕？")],-1)),s[24]||(s[24]=a("p",null,"虽然图形界面非常酷，但是不是所有的程序都需要点击式的界面。例如，令人尊敬的 Vi 编辑器在第一个 GUI 出现之前在纯文本终端运行了很久。",-1)),s[25]||(s[25]=a("p",null,[n("Vi 编辑器是一个在“文本”模式下绘制的"),a("ruby",null,[n("面向屏幕"),a("rt",null,"screen-oriented")]),n("程序的例子。它使用了一个叫 curses 的库。这个库提供了一系列的编程接口来操纵终端屏幕。curses 库产生于 BSD UNIX，但是 Linux 系统通过 ncurses 库提供这个功能。")],-1)),a("p",null,[s[1]||(s[1]=n("[要了解 ncurses “过去曾引起的风暴”，参见 ",-1)),p(e,{href:"http://www.linuxjournal.com/article/1124"},{default:i(()=>[...s[0]||(s[0]=[n("ncurses: Portable Screen-Handling for Linux",-1)])]),_:1}),s[2]||(s[2]=n(", September 1, 1995, by Eric S. Raymond.]",-1))]),s[26]||(s[26]=c(`<p>使用 curses 创建程序实际上非常简单。在这个文章中，我展示了一个利用 curses 来在终端屏幕上绘图的示例程序。</p><h3 id="谢尔宾斯基三角形" tabindex="-1">谢尔宾斯基三角形 <a class="header-anchor" href="#谢尔宾斯基三角形" aria-label="Permalink to “谢尔宾斯基三角形”">​</a></h3><p>简单展示一些 curses 函数的一个方法是生成<ruby>谢尔宾斯基三角形<rt>Sierpinski&#39;s Triangle</rt></ruby>。如果你对生成谢尔宾斯基三角形的这种方法不熟悉的话，这里是一些产生谢尔宾斯基三角形的规则：</p><ol><li>设置定义三角形的三个点。</li><li>随机选择任意的一个点 <code>(x,y)</code>。</li></ol><p>然后：</p><ol><li>在三角形的顶点中随机选择一个点。</li><li>将新的 <code>x,y</code> 设置为先前的 <code>x,y</code> 和三角顶点的中间点。</li><li>重复（上述步骤）。</li></ol><p>所以我按照这些指令写了这个程序，程序使用 curses 函数来向终端屏幕绘制谢尔宾斯基三角形：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* triangle.c */</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>让我一边解释一边浏览这个程序。首先，<code>getrandom_int()</code> 函数是我对 Linux 系统调用 <code>getrandom()</code> 的包装器。它保证返回一个正整数（<code>int</code>）值。（LCTT 译注：<code>getrandom()</code> 系统调用按照字节返回随机值到一个变量中，值是随机的，不保证正负，使用 <code>stdlib.h</code> 的 <code>random()</code> 函数可以达到同样的效果）另外，按照上面的规则，你应该能够辨认出初始化和迭代谢尔宾斯基三角形的代码。除此之外，我们来看看我用来在终端上绘制三角形的 curses 函数。</p><p>大多数 curses 程序以这四条指令开头。 <code>initscr()</code> 函数获取包括大小和特征在内的终端类型，并设置终端支持的 curses 环境。<code>cbreak()</code> 函数禁用行缓冲并设置 curses 每次只接受一个字符。<code>noecho()</code> 函数告诉 curses 不要把输入回显到屏幕上。而 <code>clear()</code> 函数清空了屏幕：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  initscr();</span></span>
<span class="line"><span>  cbreak();</span></span>
<span class="line"><span>  noecho();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clear();</span></span></code></pre></div><p>之后程序设置了三个定义三角的顶点。注意这里使用的 <code>LINES</code> 和 <code>COLS</code>，它们是由 <code>initscr()</code> 来设置的。这些值告诉程序在终端的行数和列数。屏幕坐标从 <code>0</code> 开始，所以屏幕左上角是 <code>0</code> 行 <code>0</code> 列。屏幕右下角是 <code>LINES - 1</code> 行，<code>COLS - 1</code> 列。为了便于记忆，我的程序里把这些值分别设为了变量 <code>maxlines</code> 和 <code>maxcols</code>。</p><p>在屏幕上绘制文字的两个简单方法是 <code>addch()</code> 和 <code>addstr()</code> 函数。也可以使用相关的 <code>mvaddch()</code> 和 <code>mvaddstr()</code> 函数可以将字符放到一个特定的屏幕位置。我的程序在很多地方都用到了这些函数。首先程序绘制三个定义三角的点并标记为 <code>&#39;0&#39;</code>，<code>&#39;1&#39;</code> 和 <code>&#39;2&#39;</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  mvaddch(y[0], x[0], &#39;0&#39;);</span></span>
<span class="line"><span>  mvaddch(y[1], x[1], &#39;1&#39;);</span></span>
<span class="line"><span>  mvaddch(y[2], x[2], &#39;2&#39;);</span></span></code></pre></div><p>为了绘制任意的一个初始点，程序做了类似的一个调用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  mvaddch(yi, xi, &#39;.&#39;);</span></span></code></pre></div><p>还有为了在谢尔宾斯基三角形递归中绘制连续的点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>      mvaddch(yi, xi, &#39;*&#39;);</span></span></code></pre></div><p>当程序完成之后，将会在屏幕左下角（在 <code>maxlines</code> 行，<code>0</code> 列）显示一个帮助信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  mvaddstr(maxlines, 0, &quot;Press any key to quit&quot;);</span></span></code></pre></div><p>注意 curses 在内存中维护了一个版本的屏幕显示，并且只有在你要求的时候才会更新这个屏幕，这很重要。特别是当你想要向屏幕显示大量的文字的时候，这样程序会有更好的性能表现。这是因为 curses 只能更新在上次更新之后改变的这部分屏幕。想要让 curses 更新终端屏幕，请使用 <code>refresh()</code> 函数。</p><p>在我的示例程序中，我选择在“绘制”每个谢尔宾斯基三角形中的连续点时更新屏幕。通过这样做，用户可以观察三角形中的每次迭代。（LCTT 译注：由于 CPU 太快，迭代过程执行就太快了，所以其实很难直接看到迭代过程）</p><p>在退出之前，我使用 <code>getch()</code> 函数等待用户按下一个键。然后我调用 <code>endwin()</code> 函数退出 curses 环境并返回终端程序到一般控制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  getch();</span></span>
<span class="line"><span>  endwin();</span></span></code></pre></div><h3 id="编译和示例输出" tabindex="-1">编译和示例输出 <a class="header-anchor" href="#编译和示例输出" aria-label="Permalink to “编译和示例输出”">​</a></h3><p>现在你已经有了你的第一个 curses 示例程序，是时候编译运行它了。记住 Linux 操作系统通过 ncurses 库来实现 curses 功能，所以你需要在编译的时候通过 <code>-lncurses</code>来链接——例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ls</span></span>
<span class="line"><span>getrandom_int.c  getrandom_int.h  triangle.c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ gcc -Wall -lncurses -o triangle triangle.c getrandom_int.c</span></span></code></pre></div><p>（LCTT 译注：此处命令行有问题，<code>-lncurses</code> 选项在我的 Ubuntu 16.04 系统 + gcc 4.9.3 环境下，必须放在命令行最后，否则找不到库文件，链接时会出现未定义的引用。）</p><p>在标准的 80x24 终端运行这个 <code>triangle</code> 程序并没什么意思。在那样的分辨率下你不能看见谢尔宾斯基三角形的很多细节。如果你运行终端窗口并设置非常小的字体大小，你可以更加容易地看到谢尔宾斯基三角形的不规则性质。在我的系统上，输出如图 1。</p><p><img src="http://www.linuxjournal.com/files/linuxjournal.com/ufiles/imagecache/large-550px-centered/u1000009/triangle.png" alt=""></p><p><em>图 1. triangle 程序的输出</em></p><p>虽然迭代具有随机性，但是每次谢尔宾斯基三角形的运行看起来都会很一致。唯一的不同是最初绘制到屏幕的一些点的位置不同。在这个例子中，你可以看到三角形开始的一个小圆点，在点 1 附近。看起来程序接下来选择了点 2，然后你可以看到在圆点和“2”之间的星号。并且看起来程序随机选择了点 2 作为下一个随机数，因为你可以看到在第一个星号和“2”之间的星号。从这里开始，就不能继续分辨三角形是怎样被画出来的了，因为所有的连续点都属于三角形区域。</p><h3 id="开始学习-ncurses" tabindex="-1">开始学习 ncurses <a class="header-anchor" href="#开始学习-ncurses" aria-label="Permalink to “开始学习 ncurses”">​</a></h3>`,33)),a("p",null,[s[6]||(s[6]=n("这个程序是一个怎样使用 curses 函数绘制字符到屏幕的简单例子。按照你的程序的需要，你可以通过 curses 做得更多。在下一篇文章中，我将会展示怎样使用 curses 让用户和屏幕交互。如果你对于学习 curses 有兴趣，我建议你去读位于 ",-1)),a("ruby",null,[p(e,{href:"http://www.tldp.org"},{default:i(()=>[...s[3]||(s[3]=[n("Linux 文档计划",-1)])]),_:1}),s[4]||(s[4]=a("rt",null,"Linux Documentation Project",-1))]),s[7]||(s[7]=n("的 Pradeep Padala 写的 ",-1)),p(e,{href:"http://tldp.org/HOWTO/NCURSES-Programming-HOWTO"},{default:i(()=>[...s[5]||(s[5]=[n("NCURSES Programming HOWTO",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[27]||(s[27]=a("h3",{id:"关于作者",tabindex:"-1"},[n("关于作者 "),a("a",{class:"header-anchor",href:"#关于作者","aria-label":"Permalink to “关于作者”"},"​")],-1)),s[28]||(s[28]=a("p",null,"Jim Hall 是一个自由及开源软件的倡议者，他最有名的工作是 FreeDOS 计划，也同样致力于开源软件的可用性。Jim 是在明尼苏达州的拉姆齐县的首席信息官。",-1)),s[29]||(s[29]=a("hr",null,null,-1)),a("p",null,[s[10]||(s[10]=n("via: ",-1)),p(e,{href:"http://www.linuxjournal.com/content/getting-started-ncurses"},{default:i(()=>[...s[9]||(s[9]=[n("http://www.linuxjournal.com/content/getting-started-ncurses",-1)])]),_:1})]),a("p",null,[s[14]||(s[14]=n("作者：",-1)),p(e,{href:"http://www.linuxjournal.com/users/jim-hall"},{default:i(()=>[...s[11]||(s[11]=[n("Jim Hall",-1)])]),_:1}),s[15]||(s[15]=n(" 译者：",-1)),p(e,{href:"https://github.com/leemeans"},{default:i(()=>[...s[12]||(s[12]=[n("leemeans",-1)])]),_:1}),s[16]||(s[16]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[13]||(s[13]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中国",-1)])]),_:1}),s[21]||(s[21]=n(" 荣誉推出",-1))])])}const C=l(o,[["render",u]]);export{y as __pageData,C as default};
