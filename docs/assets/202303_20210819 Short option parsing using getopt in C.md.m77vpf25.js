import{_ as l,a0 as t,w as o,s as c,ao as d,I as a,x as n,a1 as e,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"在 C 语言中使用 getopt 解析命令行短选项 | LCTT x X-CMD","titleTemplate":false,"description":"在 C 语言中使用 getopt 解析命令行短选项 | LCTT (202303) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 C 语言中使用 getopt 解析命令行短选项 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 C 语言中使用 getopt 解析命令行短选项 | LCTT (202303) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202303/20210819 Short option parsing using getopt in C","title":"在 C 语言中使用 getopt 解析命令行短选项","tag":"202303","desc":""},"relativePath":"202303/20210819 Short option parsing using getopt in C.md","filePath":"[post].md"}'),r={name:"202303/20210819 Short option parsing using getopt in C.md"};function g(h,s,u,k,b,f){const p=t("Link");return o(),c("div",null,[s[26]||(s[26]=d(`<h1 id="在-c-语言中使用-getopt-解析命令行短选项" tabindex="-1">在 C 语言中使用 getopt 解析命令行短选项 <a class="header-anchor" href="#在-c-语言中使用-getopt-解析命令行短选项" aria-label="Permalink to “在 C 语言中使用 getopt 解析命令行短选项”">​</a></h1><blockquote><p>通过使用命令行让用户告诉程序要什么，可以让程序更加灵活。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202303/02/141038srs54y5t4pv3r1ym.jpg" alt=""></p><p>在已经知道要处理什么文件和对文件进行哪些操作的情况下，编写处理文件的 C 语言程序就很容易了。如果将文件名“硬编码”在程序中，或者你的程序只以一种方式来处理文件，那么你的程序总是知道要做什么。</p><p>但是如果程序每次运行时能够对用户的输入做出反应，可以使程序更灵活。让用户告诉程序要处理什么文件，或者以不同的方式完成任务，要实现这样的功能就需要读取命令行参数。</p><h3 id="读取命令行" tabindex="-1">读取命令行 <a class="header-anchor" href="#读取命令行" aria-label="Permalink to “读取命令行”">​</a></h3><p>一个 C 语言程序可以用如下声明开头：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main()</span></span></code></pre></div><p>这是启动 C 程序最简单的形式。但如果在圆括号中加入标准参数，你的程序就可以从命令行中读取选项了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>int main(int argc, char **argv)</span></span></code></pre></div><p><code>argc</code> 表示命令行中的参数个数。它总是一个至少为 1 的数。</p><p><code>argv</code> 是一个二级指针，它指向一个字符串数组。这个数组中保存的是从命令行接收的各个参数。数组的第一个元素 <code>*argv[0]</code> 是程序的名称。<code>**argv</code> 数组的其它元素包含剩下的命令行参数。</p><p>下面我将写一个简单的示例程序，它能够回显通过命令行参数传递给它的选项。它跟 Linux 的 <code>echo</code> 命令类似，只不过我们的程序会打印出程序名。同时它还会调用 <code>puts</code> 函数将命令行选项按行打印输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  printf(&quot;argc=%d\\n&quot;, argc); /* debugging */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = 0; i &lt; argc; i++) {</span></span>
<span class="line"><span>    puts(argv[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>编译此程序，并在运行时提供一些命令行参数，你会看到传入的命令行参数被逐行打印出来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./echo this program can read the command line</span></span>
<span class="line"><span>argc=8</span></span>
<span class="line"><span>./echo</span></span>
<span class="line"><span>this</span></span>
<span class="line"><span>program</span></span>
<span class="line"><span>can</span></span>
<span class="line"><span>read</span></span>
<span class="line"><span>the</span></span>
<span class="line"><span>command</span></span>
<span class="line"><span>line</span></span></code></pre></div><p>这个命令行将程序的 <code>argc</code> 置为 8，<code>**argv</code> 数组包含 8 个元素：程序名以及用户输入的 7 个单词。由于 C 语言中数组下标从 0 开始，所以这些元素的标号分别是 0 到 7。这也是在 <code>for</code> 循环中处理命令行参数时能够用 <code>i &lt; argc</code> 作为比较条件的原因。</p><p>你也可以用这个方式实现自己的 <code>cat</code> 或 <code>cp</code> 命令。<code>cat</code> 命令的基本功能是显示一个或几个文件的内容。下面是一个简化版的<code>cat</code> 命令，它从命令行获取文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void</span></span>
<span class="line"><span>copyfile(FILE *in, FILE *out)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int ch;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while ((ch = fgetc(in)) != EOF) {</span></span>
<span class="line"><span>    fputc(ch, out);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span>  FILE *fileptr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = 1; i &lt; argc; i++) {</span></span>
<span class="line"><span>    fileptr = fopen(argv[i], &quot;r&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (fileptr != NULL) {</span></span>
<span class="line"><span>      copyfile(fileptr, stdout);</span></span>
<span class="line"><span>      fclose(fileptr);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个简化版的 <code>cat</code> 命令从命令行读取文件名列表，然后将各个文件的内容逐字符地显示到标准输出上。假定我有一个叫做 <code>hello.txt</code> 的文件，其中包含数行文本内容。我能用自己实现的 <code>cat</code> 命令将它的内容显示出来：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./cat hello.txt</span></span>
<span class="line"><span>Hi there!</span></span>
<span class="line"><span>This is a sample text file.</span></span></code></pre></div><p>以这个简单程序为出发点，你也可以实现自己版本的其它 Linux 命令。比如 <code>cp</code> 命令，它从命令行读取两个文件名：要读取的文件和要写入的文件。</p><h3 id="读取命令行选项" tabindex="-1">读取命令行选项 <a class="header-anchor" href="#读取命令行选项" aria-label="Permalink to “读取命令行选项”">​</a></h3><p>通过命令行读取文件名和其它文本固然很棒，但是如果想要程序根据用户给出的选项改变行为呢？比如 Linux 的 <code>cat</code> 命令就支持以下命令行选项：</p><ul><li><code>-b</code> 显示非空行的行号</li><li><code>-E</code> 在行尾显示 <code>$</code></li><li><code>-n</code> 显示行号</li><li><code>-s</code> 合并显示空行</li><li><code>-T</code> 将制表符显示为 <code>^I</code></li><li><code>-v</code> 用 <code>^x</code> 和 <code>M-x</code> 方式显示非打印字符，换行符和制表符除外</li></ul><p>这些以一个连字符开头的单字母的选项叫做短选项。通常短选项是分开使用的，就像这样 <code>cat -E -n</code>。但是也可以将多个短选项合并，比如 <code>cat -En</code>。</p><p>值得庆幸的是，所有 Linux 和 Unix 系统都包含 <code>getopt</code> 库。它提供了一种简单的方式来读取命令行参数。<code>getopt</code> 定义在头文件 <code>unistd.h</code> 中。你可以在程序中使用 <code>getopt</code> 来读取命令行短选项。</p><p>与其它 Unix 系统不同的是，Linux 上的 <code>getopt</code> 总是保证短选项出现在命令行参数的最前面。比如，用户输入的是 <code>cat -E file -n</code>。<code>-E</code> 在最前面，<code>-n</code> 在文件名之后。如果使用 Linux 的 <code>getopt</code> 来处理，程序会认为用户输入的是 <code>cat -E -n file</code>。这样做可以使处理过程更顺畅，因为 <code>getopt</code> 可以解析完所有短选项，剩下的文件名列表可以通过 <code>**argv</code> 来统一处理。</p><p>你可以这样使用 <code>getopt</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int getopt(int argc, char **argv, char *optstring);</span></span></code></pre></div><p><code>optstring</code> 是由所有合法的选项字符组成的字符串。比如你的程序允许的选项是 <code>-E</code> 和 <code>-n</code>， 那么 <code>optstring</code> 的值就是 <code>&quot;En&quot;</code>。</p><p>通常通过在循环中调用 <code>getopt</code> 来解析命令行选项。每次调用时 <code>getopt</code> 会返回找到的下一个短选项，如果遇到无法识别的选项则返回 <code>&#39;?&#39;</code>。当没有更多短选项时它返回 <code>-1</code>，并且设置全局变量 <code>optind</code> 的值指向 <code>**argv</code> 中所有段选项之后的第一个元素。</p><p>下面看一个简单的例子。这个演示程序没有实现 <code>cat</code> 命令的所有选项，但它只是能够解析命令行。每当发现一个合法的命令行选项，它就打印出相应的提示消息。在你自己的程序中，你可能会根据这些命令行选项执行变量赋值等者其它操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main(int argc, char **argv)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span>  int option;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* parse short options */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  while ((option = getopt(argc, argv, &quot;bEnsTv&quot;)) != -1) {</span></span>
<span class="line"><span>    switch (option) {</span></span>
<span class="line"><span>    case &#39;b&#39;:</span></span>
<span class="line"><span>      puts(&quot;Put line numbers next to non-blank lines&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;E&#39;:</span></span>
<span class="line"><span>      puts(&quot;Show the ends of lines as $&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;n&#39;:</span></span>
<span class="line"><span>      puts(&quot;Put line numbers next to all lines&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;s&#39;:</span></span>
<span class="line"><span>      puts(&quot;Suppress printing repeated blank lines&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;T&#39;:</span></span>
<span class="line"><span>      puts(&quot;Show tabs as ^I&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case &#39;v&#39;:</span></span>
<span class="line"><span>      puts(&quot;Verbose&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    default:                          /* &#39;?&#39; */</span></span>
<span class="line"><span>      puts(&quot;What&#39;s that??&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /* print the rest of the command line */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  puts(&quot;------------------------------&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (i = optind; i &lt; argc; i++) {</span></span>
<span class="line"><span>    puts(argv[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>假如你把程序编译为 <code>args</code>，你可以通过尝试不同的命令行参数组合，来了解程序是怎么解析短选项，以及是怎么将其它的命令行参数留下来的。最简单的例子是将所有的选项都放在最前面，就像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -b -T file1 file2</span></span>
<span class="line"><span>Put line numbers next to non-blank lines</span></span>
<span class="line"><span>Show tabs as ^I</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><p>现在试试将两个短选项合并使用的效果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -bT file1 file2</span></span>
<span class="line"><span>Put line numbers next to non-blank lines</span></span>
<span class="line"><span>Show tabs as ^I</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><p>如果有必要的话，<code>getopt</code>可以对命令行参数进行重排：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -E file1 file2 -T</span></span>
<span class="line"><span>Show the ends of lines as $</span></span>
<span class="line"><span>Show tabs as ^I</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><p>如果用户输入了错误的短选项，<code>getopt</code> 会打印一条消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./args -s -an file1 file2</span></span>
<span class="line"><span>Suppress printing repeated blank lines</span></span>
<span class="line"><span>./args: invalid option -- &#39;a&#39;</span></span>
<span class="line"><span>What&#39;s that??</span></span>
<span class="line"><span>Put line numbers next to all lines</span></span>
<span class="line"><span>------------------------------</span></span>
<span class="line"><span>file1</span></span>
<span class="line"><span>file2</span></span></code></pre></div><h3 id="下载速查表" tabindex="-1">下载速查表 <a class="header-anchor" href="#下载速查表" aria-label="Permalink to “下载速查表”">​</a></h3><p><code>getopt</code> 还有更多的功能。例如，通过设计 <code>-s string</code> 或 <code>-f file</code> 这样的命令行语法规则，可以让短选项拥有自己的二级选项。你也可以告诉 <code>getopt</code> 在遇到无法识别的选项时不显示错误信息。使用 <code>man 3 getopt</code> 命令查看 <code>getopt(3)</code> 手册可以了解 <code>getopt</code> 的更多功能。</p>`,44)),a("p",null,[s[1]||(s[1]=n("如果你需要 ",-1)),s[2]||(s[2]=a("code",null,"getopt()",-1)),s[3]||(s[3]=n(" 和 ",-1)),s[4]||(s[4]=a("code",null,"getopt_long()",-1)),s[5]||(s[5]=n("的使用语法和结构上的提示，可以 ",-1)),e(p,{href:"https://opensource.com/downloads/c-getopt-cheat-sheet"},{default:i(()=>[...s[0]||(s[0]=[n("下载我制作的速查表",-1)])]),_:1}),s[6]||(s[6]=n("。它提供了最小可行代码，并列出了你需要了解的一些全局变量的含义。速查表的一面是 ",-1)),s[7]||(s[7]=a("code",null,"getopt()",-1)),s[8]||(s[8]=n(" 的用法，另一面是 ",-1)),s[9]||(s[9]=a("code",null,"getopt_long()",-1)),s[10]||(s[10]=n("的用法。",-1))]),s[27]||(s[27]=a("hr",null,null,-1)),a("p",null,[s[12]||(s[12]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/21/8/short-option-parsing-c"},{default:i(()=>[...s[11]||(s[11]=[n("https://opensource.com/article/21/8/short-option-parsing-c",-1)])]),_:1})]),a("p",null,[s[17]||(s[17]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:i(()=>[...s[13]||(s[13]=[n("Jim Hall",-1)])]),_:1}),s[18]||(s[18]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[14]||(s[14]=[n("lujun9972",-1)])]),_:1}),s[19]||(s[19]=n(" 译者：",-1)),e(p,{href:"https://github.com/toknow-gh"},{default:i(()=>[...s[15]||(s[15]=[n("toknow-gh",-1)])]),_:1}),s[20]||(s[20]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[23]||(s[23]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[n("LCTT",-1)])]),_:1}),s[24]||(s[24]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[n("Linux中国",-1)])]),_:1}),s[25]||(s[25]=n(" 荣誉推出",-1))])])}const x=l(r,[["render",g]]);export{v as __pageData,x as default};
