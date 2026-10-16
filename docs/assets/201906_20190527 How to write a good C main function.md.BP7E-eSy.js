import{_ as t,a0 as o,w as d,s as c,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何写好 C main 函数 | LCTT x X-CMD","titleTemplate":false,"description":"如何写好 C main 函数 | LCTT (201906) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何写好 C main 函数 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何写好 C main 函数 | LCTT (201906) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201906/20190527 How to write a good C main function","title":"如何写好 C main 函数","tag":"201906","desc":""},"relativePath":"201906/20190527 How to write a good C main function.md","filePath":"[post].md"}'),r={name:"201906/20190527 How to write a good C main function.md"};function u(g,s,h,b,f,k){const p=o("Link");return d(),c("div",null,[s[39]||(s[39]=a("h1",{id:"如何写好-c-main-函数",tabindex:"-1"},[n("如何写好 C main 函数 "),a("a",{class:"header-anchor",href:"#如何写好-c-main-函数","aria-label":"Permalink to “如何写好 C main 函数”"},"​")],-1)),s[40]||(s[40]=a("blockquote",null,[a("p",null,"学习如何构造一个 C 文件并编写一个 C main 函数来成功地处理命令行参数。")],-1)),s[41]||(s[41]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201906/08/211422umrzznnvmapcwuc3.jpg",alt:'Hand drawing out the word "code"'})],-1)),a("p",null,[s[1]||(s[1]=n("我知道，现在孩子们用 Python 和 JavaScript 编写他们的疯狂“应用程序”。但是不要这么快就否定 C 语言 —— 它能够提供很多东西，并且简洁。如果你需要速度，用 C 语言编写可能就是你的答案。如果你正在寻找稳定的职业或者想学习如何捕获",-1)),e(p,{href:"https://www.owasp.org/index.php/Null_Dereference"},{default:i(()=>[...s[0]||(s[0]=[n("空指针解引用",-1)])]),_:1}),s[2]||(s[2]=n("，C 语言也可能是你的答案！在本文中，我将解释如何构造一个 C 文件并编写一个 C main 函数来成功地处理命令行参数。",-1))]),s[42]||(s[42]=l(`<p>我：一个顽固的 Unix 系统程序员。</p><p>你：一个有编辑器、C 编译器，并有时间打发的人。</p><p>让我们开工吧。</p><h3 id="一个无聊但正确的-c-程序" tabindex="-1">一个无聊但正确的 C 程序 <a class="header-anchor" href="#一个无聊但正确的-c-程序" aria-label="Permalink to “一个无聊但正确的 C 程序”">​</a></h3><p><img src="https://opensource.com/sites/default/files/uploads/hatingotherpeoplescode-big.png" alt="Parody O&#39;Reilly book cover, &quot;Hating Other People&#39;s Code&quot;" title="Parody O&#39;Reilly book cover, &quot;Hating Other People&#39;s Code&quot;"></p><p>C 程序以 <code>main()</code> 函数开头，通常保存在名为 <code>main.c</code> 的文件中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个程序可以<em>编译</em>但不<em>干</em>任何事。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ gcc main.c</span></span>
<span class="line"><span>$ ./a.out -o foo -vv</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>正确但无聊。</p><h3 id="main-函数是唯一的。" tabindex="-1">main 函数是唯一的。 <a class="header-anchor" href="#main-函数是唯一的。" aria-label="Permalink to “main 函数是唯一的。”">​</a></h3><p><code>main()</code> 函数是开始执行时所执行的程序的第一个函数，但不是第一个执行的函数。<em>第一个</em>函数是 <code>_start()</code>，它通常由 C 运行库提供，在编译程序时自动链入。此细节高度依赖于操作系统和编译器工具链，所以我假装没有提到它。</p><p><code>main()</code> 函数有两个参数，通常称为 <code>argc</code> 和 <code>argv</code>，并返回一个有符号整数。大多数 Unix 环境都希望程序在成功时返回 <code>0</code>（零），失败时返回 <code>-1</code>（负一）。</p><div class="table-wrap"><table><thead><tr><th>参数</th><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>argc</code></td><td>参数个数</td><td>参数向量的个数</td></tr><tr><td><code>argv</code></td><td>参数向量</td><td>字符指针数组</td></tr></tbody></table></div><p>参数向量 <code>argv</code> 是调用你的程序的命令行的标记化表示形式。在上面的例子中，<code>argv</code> 将是以下字符串的列表：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>argv = [ &quot;/path/to/a.out&quot;, &quot;-o&quot;, &quot;foo&quot;, &quot;-vv&quot; ];</span></span></code></pre></div><p>参数向量在其第一个索引 <code>argv[0]</code> 中确保至少会有一个字符串，这是执行程序的完整路径。</p><h3 id="main-c-文件的剖析" tabindex="-1">main.c 文件的剖析 <a class="header-anchor" href="#main-c-文件的剖析" aria-label="Permalink to “main.c 文件的剖析”">​</a></h3><p>当我从头开始编写 <code>main.c</code> 时，它的结构通常如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>/* 0 版权/许可证 */</span></span>
<span class="line"><span>/* 1 包含 */</span></span>
<span class="line"><span>/* 2 定义 */</span></span>
<span class="line"><span>/* 3 外部声明 */</span></span>
<span class="line"><span>/* 4 类型定义 */</span></span>
<span class="line"><span>/* 5 全局变量声明 */</span></span>
<span class="line"><span>/* 6 函数原型 */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>/* 7 命令行解析 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* 8 函数声明 */</span></span></code></pre></div><p>下面我将讨论这些编号的各个部分，除了编号为 0 的那部分。如果你必须把版权或许可文本放在源代码中，那就放在那里。</p><p>另一件我不想讨论的事情是注释。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>“评论谎言。”</span></span>
<span class="line"><span>- 一个愤世嫉俗但聪明又好看的程序员。</span></span></code></pre></div><p>与其使用注释，不如使用有意义的函数名和变量名。</p><p>鉴于程序员固有的惰性，一旦添加了注释，维护负担就会增加一倍。如果更改或重构代码，则需要更新或扩充注释。随着时间的推移，代码会变得面目全非，与注释所描述的内容完全不同。</p><p>如果你必须写注释，不要写关于代码正在做<em>什么</em>，相反，写下代码<em>为什么</em>要这样写。写一些你将要在五年后读到的注释，那时你已经将这段代码忘得一干二净。世界的命运取决于你。<em>不要有压力。</em></p><h4 id="_1、包含" tabindex="-1">1、包含 <a class="header-anchor" href="#_1、包含" aria-label="Permalink to “1、包含”">​</a></h4><p>我添加到 <code>main.c</code> 文件的第一个东西是包含文件，它们为程序提供大量标准 C 标准库函数和变量。C 标准库做了很多事情。浏览 <code>/usr/include</code> 中的头文件，你可以了解到它们可以做些什么。</p>`,28)),a("p",null,[s[4]||(s[4]=a("code",null,"#include",-1)),s[5]||(s[5]=n(" 字符串是 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/C_preprocessor"},{default:i(()=>[...s[3]||(s[3]=[n("C 预处理程序",-1)])]),_:1}),s[6]||(s[6]=n("（cpp）指令，它会将引用的文件完整地包含在当前文件中。C 中的头文件通常以 ",-1)),s[7]||(s[7]=a("code",null,".h",-1)),s[8]||(s[8]=n(" 扩展名命名，且不应包含任何可执行代码。它只有宏、定义、类型定义、外部变量和函数原型。字符串 ",-1)),s[9]||(s[9]=a("code",null,"<header.h>",-1)),s[10]||(s[10]=n(" 告诉 cpp 在系统定义的头文件路径中查找名为 ",-1)),s[11]||(s[11]=a("code",null,"header.h",-1)),s[12]||(s[12]=n(" 的文件，它通常在 ",-1)),s[13]||(s[13]=a("code",null,"/usr/include",-1)),s[14]||(s[14]=n(" 目录中。",-1))]),s[43]||(s[43]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;libgen.h&gt;</span></span>
<span class="line"><span>#include &lt;errno.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;getopt.h&gt;</span></span>
<span class="line"><span>#include &lt;sys/types.h&gt;</span></span></code></pre></div><p>这是我默认会全局包含的最小包含集合，它将引入：</p><div class="table-wrap"><table><thead><tr><th>#include 文件</th><th>提供的东西</th></tr></thead><tbody><tr><td>stdio</td><td>提供 <code>FILE</code>、<code>stdin</code>、<code>stdout</code>、<code>stderr</code> 和 <code>fprint()</code> 函数系列</td></tr><tr><td>stdlib</td><td>提供 <code>malloc()</code>、<code>calloc()</code> 和 <code>realloc()</code></td></tr><tr><td>unistd</td><td>提供 <code>EXIT_FAILURE</code>、<code>EXIT_SUCCESS</code></td></tr><tr><td>libgen</td><td>提供 <code>basename()</code> 函数</td></tr><tr><td>errno</td><td>定义外部 <code>errno</code> 变量及其可以接受的所有值</td></tr><tr><td>string</td><td>提供 <code>memcpy()</code>、<code>memset()</code> 和 <code>strlen()</code> 函数系列</td></tr><tr><td>getopt</td><td>提供外部 <code>optarg</code>、<code>opterr</code>、<code>optind</code> 和 <code>getopt()</code> 函数</td></tr><tr><td>sys/types</td><td>类型定义快捷方式，如 <code>uint32_t</code> 和 <code>uint64_t</code></td></tr></tbody></table></div><h4 id="_2、定义" tabindex="-1">2、定义 <a class="header-anchor" href="#_2、定义" aria-label="Permalink to “2、定义”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define OPTSTR &quot;vi:o:f:h&quot;</span></span>
<span class="line"><span>#define USAGE_FMT  &quot;%s [-v] [-f hexflag] [-i inputfile] [-o outputfile] [-h]&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_INPUT  &quot;fopen(input, r)&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_OUTPUT &quot;fopen(output, w)&quot;</span></span>
<span class="line"><span>#define ERR_DO_THE_NEEDFUL &quot;do_the_needful blew up&quot;</span></span>
<span class="line"><span>#define DEFAULT_PROGNAME &quot;george&quot;</span></span></code></pre></div>`,5)),a("p",null,[s[16]||(s[16]=n("这在现在没有多大意义，但 ",-1)),s[17]||(s[17]=a("code",null,"OPTSTR",-1)),s[18]||(s[18]=n(" 定义我这里会说明一下，它是程序推荐的命令行开关。参考 ",-1)),e(p,{href:"https://linux.die.net/man/3/getopt"},{default:i(()=>[...s[15]||(s[15]=[n("getopt(3)",-1)])]),_:1}),s[19]||(s[19]=n(" man 页面，了解 ",-1)),s[20]||(s[20]=a("code",null,"OPTSTR",-1)),s[21]||(s[21]=n(" 将如何影响 ",-1)),s[22]||(s[22]=a("code",null,"getopt()",-1)),s[23]||(s[23]=n(" 的行为。",-1))]),s[44]||(s[44]=l(`<p><code>USAGE_FMT</code> 定义了一个 <code>printf()</code> 风格的格式字符串，它用在 <code>usage()</code> 函数中。</p><p>我还喜欢将字符串常量放在文件的 <code>#define</code> 这一部分。如果需要，把它们收集在一起可以更容易地修正拼写、重用消息和国际化消息。</p><p>最后，在命名 <code>#define</code> 时全部使用大写字母，以区别变量和函数名。如果需要，可以将单词放连在一起或使用下划线分隔，只要确保它们都是大写的就行。</p><h4 id="_3、外部声明" tabindex="-1">3、外部声明 <a class="header-anchor" href="#_3、外部声明" aria-label="Permalink to “3、外部声明”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern int errno;</span></span>
<span class="line"><span>extern char *optarg;</span></span>
<span class="line"><span>extern int opterr, optind;</span></span></code></pre></div><p><code>extern</code> 声明将该名称带入当前编译单元的命名空间（即 “文件”），并允许程序访问该变量。这里我们引入了三个整数变量和一个字符指针的定义。<code>opt</code> 前缀的几个变量是由 <code>getopt()</code> 函数使用的，C 标准库使用 <code>errno</code> 作为带外通信通道来传达函数可能的失败原因。</p><h4 id="_4、类型定义" tabindex="-1">4、类型定义 <a class="header-anchor" href="#_4、类型定义" aria-label="Permalink to “4、类型定义”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  int           verbose;</span></span>
<span class="line"><span>  uint32_t      flags;</span></span>
<span class="line"><span>  FILE         *input;</span></span>
<span class="line"><span>  FILE         *output;</span></span>
<span class="line"><span>} options_t;</span></span></code></pre></div><p>在外部声明之后，我喜欢为结构、联合和枚举声明 <code>typedef</code>。命名一个 <code>typedef</code> 是一种传统习惯。我非常喜欢使用 <code>_t</code> 后缀来表示该名称是一种类型。在这个例子中，我将 <code>options_t</code> 声明为一个包含 4 个成员的 <code>struct</code>。C 是一种空格无关的编程语言，因此我使用空格将字段名排列在同一列中。我只是喜欢它看起来的样子。对于指针声明，我在名称前面加上星号，以明确它是一个指针。</p><h4 id="_5、全局变量声明" tabindex="-1">5、全局变量声明 <a class="header-anchor" href="#_5、全局变量声明" aria-label="Permalink to “5、全局变量声明”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int dumb_global_variable = -11;</span></span></code></pre></div><p>全局变量是一个坏主意，你永远不应该使用它们。但如果你必须使用全局变量，请在这里声明，并确保给它们一个默认值。说真的，<em>不要使用全局变量</em>。</p><h4 id="_6、函数原型" tabindex="-1">6、函数原型 <a class="header-anchor" href="#_6、函数原型" aria-label="Permalink to “6、函数原型”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt);</span></span>
<span class="line"><span>int do_the_needful(options_t *options);</span></span></code></pre></div><p>在编写函数时，将它们添加到 <code>main()</code> 函数之后而不是之前，在这里放函数原型。早期的 C 编译器使用单遍策略，这意味着你在程序中使用的每个符号（变量或函数名称）必须在使用之前声明。现代编译器几乎都是多遍编译器，它们在生成代码之前构建一个完整的符号表，因此并不严格要求使用函数原型。但是，有时你无法选择代码要使用的编译器，所以请编写函数原型并继续这样做下去。</p><p>当然，我总是包含一个 <code>usage()</code> 函数，当 <code>main()</code> 函数不理解你从命令行传入的内容时，它会调用这个函数。</p><h4 id="_7、命令行解析" tabindex="-1">7、命令行解析 <a class="header-anchor" href="#_7、命令行解析" aria-label="Permalink to “7、命令行解析”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    int opt;</span></span>
<span class="line"><span>    options_t options = { 0, 0x0, stdin, stdout };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    opterr = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while ((opt = getopt(argc, argv, OPTSTR)) != EOF) </span></span>
<span class="line"><span>       switch(opt) {</span></span>
<span class="line"><span>           case &#39;i&#39;:</span></span>
<span class="line"><span>              if (!(options.input = fopen(optarg, &quot;r&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_INPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;o&#39;:</span></span>
<span class="line"><span>              if (!(options.output = fopen(optarg, &quot;w&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_OUTPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }    </span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>           case &#39;f&#39;:</span></span>
<span class="line"><span>              options.flags = (uint32_t )strtoul(optarg, NULL, 16);</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;v&#39;:</span></span>
<span class="line"><span>              options.verbose += 1;</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;h&#39;:</span></span>
<span class="line"><span>           default:</span></span>
<span class="line"><span>              usage(basename(argv[0]), opt);</span></span>
<span class="line"><span>              /* NOTREACHED */</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (do_the_needful(&amp;options) != EXIT_SUCCESS) {</span></span>
<span class="line"><span>       perror(ERR_DO_THE_NEEDFUL);</span></span>
<span class="line"><span>       exit(EXIT_FAILURE);</span></span>
<span class="line"><span>       /* NOTREACHED */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好吧，代码有点多。这个 <code>main()</code> 函数的目的是收集用户提供的参数，执行最基本的输入验证，然后将收集到的参数传递给使用它们的函数。这个示例声明一个使用默认值初始化的 <code>options</code> 变量，并解析命令行，根据需要更新 <code>options</code>。</p><p><code>main()</code> 函数的核心是一个 <code>while</code> 循环，它使用 <code>getopt()</code> 来遍历 <code>argv</code>，寻找命令行选项及其参数（如果有的话）。文件前面定义的 <code>OPTSTR</code> 是驱动 <code>getopt()</code> 行为的模板。<code>opt</code> 变量接受 <code>getopt()</code> 找到的任何命令行选项的字符值，程序对检测命令行选项的响应发生在 <code>switch</code> 语句中。</p><p>如果你注意到了可能会问，为什么 <code>opt</code> 被声明为 32 位 <code>int</code>，但是预期是 8 位 <code>char</code>？事实上 <code>getopt()</code> 返回一个 <code>int</code>，当它到达 <code>argv</code> 末尾时取负值，我会使用 <code>EOF</code>（<em>文件末尾</em>标记）匹配。<code>char</code> 是有符号的，但我喜欢将变量匹配到它们的函数返回值。</p><p>当检测到一个已知的命令行选项时，会发生特定的行为。在 <code>OPTSTR</code> 中指定一个以冒号结尾的参数，这些选项可以有一个参数。当一个选项有一个参数时，<code>argv</code> 中的下一个字符串可以通过外部定义的变量 <code>optarg</code> 提供给程序。我使用 <code>optarg</code> 来打开文件进行读写，或者将命令行参数从字符串转换为整数值。</p><p>这里有几个关于代码风格的要点：</p><ul><li>将 <code>opterr</code> 初始化为 <code>0</code>，禁止 <code>getopt</code> 触发 <code>?</code>。</li><li>在 <code>main()</code> 的中间使用 <code>exit(EXIT_FAILURE);</code> 或 <code>exit(EXIT_SUCCESS);</code>。</li><li><code>/* NOTREACHED */</code> 是我喜欢的一个 lint 指令。</li><li>在返回 int 类型的函数末尾使用 <code>return EXIT_SUCCESS;</code>。</li><li>显示强制转换隐式类型。</li></ul><p>这个程序的命令行格式，经过编译如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./a.out -h</span></span>
<span class="line"><span>a.out [-v] [-f hexflag] [-i inputfile] [-o outputfile] [-h]</span></span></code></pre></div><p>事实上，在编译后 <code>usage()</code> 就会向 <code>stderr</code> 发出这样的内容。</p><h4 id="_8、函数声明" tabindex="-1">8、函数声明 <a class="header-anchor" href="#_8、函数声明" aria-label="Permalink to “8、函数声明”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c */</span></span>
<span class="line"><span>&lt;...&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt) {</span></span>
<span class="line"><span>   fprintf(stderr, USAGE_FMT, progname?progname:DEFAULT_PROGNAME);</span></span>
<span class="line"><span>   exit(EXIT_FAILURE);</span></span>
<span class="line"><span>   /* NOTREACHED */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int do_the_needful(options_t *options) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options) {</span></span>
<span class="line"><span>     errno = EINVAL;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options-&gt;input || !options-&gt;output) {</span></span>
<span class="line"><span>     errno = ENOENT;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /* XXX do needful stuff */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我最后编写的函数不是个样板函数。在本例中，函数 <code>do_the_needful()</code> 接受一个指向 <code>options_t</code> 结构的指针。我验证 <code>options</code> 指针不为 <code>NULL</code>，然后继续验证 <code>input</code> 和 <code>output</code> 结构成员。如果其中一个测试失败，返回 <code>EXIT_FAILURE</code>，并且通过将外部全局变量 <code>errno</code> 设置为常规错误代码，我可以告知调用者常规的错误原因。调用者可以使用便捷函数 <code>perror()</code> 来根据 <code>errno</code> 的值发出便于阅读的错误消息。</p><p>函数几乎总是以某种方式验证它们的输入。如果完全验证代价很大，那么尝试执行一次并将验证后的数据视为不可变。<code>usage()</code> 函数使用 <code>fprintf()</code> 调用中的条件赋值验证 <code>progname</code> 参数。接下来 <code>usage()</code> 函数就退出了，所以我不会费心设置 <code>errno</code>，也不用操心是否使用正确的程序名。</p><p>在这里，我要避免的最大错误是解引用 <code>NULL</code> 指针。这将导致操作系统向我的进程发送一个名为 <code>SYSSEGV</code> 的特殊信号，导致不可避免的死亡。用户最不希望看到的是由 <code>SYSSEGV</code> 而导致的崩溃。最好是捕获 <code>NULL</code> 指针以发出更合适的错误消息并优雅地关闭程序。</p><p>有些人抱怨在函数体中有多个 <code>return</code> 语句，他们喋喋不休地说些“控制流的连续性”之类的东西。老实说，如果函数中间出现错误，那就应该返回这个错误条件。写一大堆嵌套的 <code>if</code> 语句只有一个 <code>return</code> 绝不是一个“好主意”™。</p><p>最后，如果你编写的函数接受四个以上的参数，请考虑将它们绑定到一个结构中，并传递一个指向该结构的指针。这使得函数签名更简单，更容易记住，并且在以后调用时不会出错。它还可以使调用函数速度稍微快一些，因为需要复制到函数堆栈中的东西更少。在实践中，只有在函数被调用数百万或数十亿次时，才会考虑这个问题。如果认为这没有意义，那也无所谓。</p><h3 id="等等-你不是说没有注释吗" tabindex="-1">等等，你不是说没有注释吗！？！！ <a class="header-anchor" href="#等等-你不是说没有注释吗" aria-label="Permalink to “等等，你不是说没有注释吗！？！！”">​</a></h3><p>在 <code>do_the_needful()</code> 函数中，我写了一种特殊类型的注释，它被是作为占位符设计的，而不是为了说明代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* XXX do needful stuff */</span></span></code></pre></div><p>当你写到这里时，有时你不想停下来编写一些特别复杂的代码，你会之后再写，而不是现在。那就是我留给自己再次回来的地方。我插入一个带有 <code>XXX</code> 前缀的注释和一个描述需要做什么的简短注释。之后，当我有更多时间的时候，我会在源代码中寻找 <code>XXX</code>。使用什么前缀并不重要，只要确保它不太可能在另一个上下文环境（如函数名或变量）中出现在你代码库里。</p><h3 id="把它们组合在一起" tabindex="-1">把它们组合在一起 <a class="header-anchor" href="#把它们组合在一起" aria-label="Permalink to “把它们组合在一起”">​</a></h3><p>好吧，当你编译这个程序后，它<em>仍然</em>几乎没有任何作用。但是现在你有了一个坚实的骨架来构建你自己的命令行解析 C 程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/* main.c - the complete listing */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;libgen.h&gt;</span></span>
<span class="line"><span>#include &lt;errno.h&gt;</span></span>
<span class="line"><span>#include &lt;string.h&gt;</span></span>
<span class="line"><span>#include &lt;getopt.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define OPTSTR &quot;vi:o:f:h&quot;</span></span>
<span class="line"><span>#define USAGE_FMT  &quot;%s [-v] [-f hexflag] [-i inputfile] [-o outputfile] [-h]&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_INPUT  &quot;fopen(input, r)&quot;</span></span>
<span class="line"><span>#define ERR_FOPEN_OUTPUT &quot;fopen(output, w)&quot;</span></span>
<span class="line"><span>#define ERR_DO_THE_NEEDFUL &quot;do_the_needful blew up&quot;</span></span>
<span class="line"><span>#define DEFAULT_PROGNAME &quot;george&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern int errno;</span></span>
<span class="line"><span>extern char *optarg;</span></span>
<span class="line"><span>extern int opterr, optind;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>  int           verbose;</span></span>
<span class="line"><span>  uint32_t      flags;</span></span>
<span class="line"><span>  FILE         *input;</span></span>
<span class="line"><span>  FILE         *output;</span></span>
<span class="line"><span>} options_t;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int dumb_global_variable = -11;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt);</span></span>
<span class="line"><span>int  do_the_needful(options_t *options);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char *argv[]) {</span></span>
<span class="line"><span>    int opt;</span></span>
<span class="line"><span>    options_t options = { 0, 0x0, stdin, stdout };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    opterr = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while ((opt = getopt(argc, argv, OPTSTR)) != EOF) </span></span>
<span class="line"><span>       switch(opt) {</span></span>
<span class="line"><span>           case &#39;i&#39;:</span></span>
<span class="line"><span>              if (!(options.input = fopen(optarg, &quot;r&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_INPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;o&#39;:</span></span>
<span class="line"><span>              if (!(options.output = fopen(optarg, &quot;w&quot;)) ){</span></span>
<span class="line"><span>                 perror(ERR_FOPEN_OUTPUT);</span></span>
<span class="line"><span>                 exit(EXIT_FAILURE);</span></span>
<span class="line"><span>                 /* NOTREACHED */</span></span>
<span class="line"><span>              }    </span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>           case &#39;f&#39;:</span></span>
<span class="line"><span>              options.flags = (uint32_t )strtoul(optarg, NULL, 16);</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;v&#39;:</span></span>
<span class="line"><span>              options.verbose += 1;</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           case &#39;h&#39;:</span></span>
<span class="line"><span>           default:</span></span>
<span class="line"><span>              usage(basename(argv[0]), opt);</span></span>
<span class="line"><span>              /* NOTREACHED */</span></span>
<span class="line"><span>              break;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (do_the_needful(&amp;options) != EXIT_SUCCESS) {</span></span>
<span class="line"><span>       perror(ERR_DO_THE_NEEDFUL);</span></span>
<span class="line"><span>       exit(EXIT_FAILURE);</span></span>
<span class="line"><span>       /* NOTREACHED */</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void usage(char *progname, int opt) {</span></span>
<span class="line"><span>   fprintf(stderr, USAGE_FMT, progname?progname:DEFAULT_PROGNAME);</span></span>
<span class="line"><span>   exit(EXIT_FAILURE);</span></span>
<span class="line"><span>   /* NOTREACHED */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int do_the_needful(options_t *options) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options) {</span></span>
<span class="line"><span>     errno = EINVAL;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if (!options-&gt;input || !options-&gt;output) {</span></span>
<span class="line"><span>     errno = ENOENT;</span></span>
<span class="line"><span>     return EXIT_FAILURE;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   /* XXX do needful stuff */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   return EXIT_SUCCESS;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>现在，你已经准备好编写更易于维护的 C 语言。如果你有任何问题或反馈，请在评论中分享。</p><hr>`,43)),a("p",null,[s[25]||(s[25]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/19/5/how-write-good-c-main-function"},{default:i(()=>[...s[24]||(s[24]=[n("https://opensource.com/article/19/5/how-write-good-c-main-function",-1)])]),_:1})]),a("p",null,[s[30]||(s[30]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jnyjny"},{default:i(()=>[...s[26]||(s[26]=[n("Erik O'Shaughnessy",-1)])]),_:1}),s[31]||(s[31]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[27]||(s[27]=[n("lujun9972",-1)])]),_:1}),s[32]||(s[32]=n(" 译者：",-1)),e(p,{href:"https://github.com/MjSeven"},{default:i(()=>[...s[28]||(s[28]=[n("MjSeven",-1)])]),_:1}),s[33]||(s[33]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[29]||(s[29]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[36]||(s[36]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[34]||(s[34]=[n("LCTT",-1)])]),_:1}),s[37]||(s[37]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[35]||(s[35]=[n("Linux中国",-1)])]),_:1}),s[38]||(s[38]=n(" 荣誉推出",-1))])])}const T=t(r,[["render",u]]);export{C as __pageData,T as default};
