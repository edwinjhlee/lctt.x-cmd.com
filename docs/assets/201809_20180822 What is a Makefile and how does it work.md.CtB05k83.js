import{_ as i,a0 as t,w as o,s as c,ao as d,I as p,x as a,a1 as e,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Makefile 及其工作原理 | LCTT x X-CMD","titleTemplate":false,"description":"Makefile 及其工作原理 | LCTT (201809) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Makefile 及其工作原理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Makefile 及其工作原理 | LCTT (201809) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201809/20180822 What is a Makefile and how does it work","title":"Makefile 及其工作原理","tag":"201809","desc":""},"relativePath":"201809/20180822 What is a Makefile and how does it work.md","filePath":"[post].md"}'),h={name:"201809/20180822 What is a Makefile and how does it work.md"};function r(g,s,k,u,b,f){const n=t("Link");return o(),c("div",null,[s[20]||(s[20]=d(`<h1 id="makefile-及其工作原理" tabindex="-1">Makefile 及其工作原理 <a class="header-anchor" href="#makefile-及其工作原理" aria-label="Permalink to “Makefile 及其工作原理”">​</a></h1><blockquote><p>用这个方便的工具来更有效的运行和编译你的程序。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/osdc_liberate%20docs_1109ay.png?itok=xQOLreya" alt=""></p><p>当你需要在一些源文件改变后运行或更新一个任务时，通常会用到 <code>make</code> 工具。<code>make</code> 工具需要读取一个 <code>Makefile</code>（或 <code>makefile</code>）文件，在该文件中定义了一系列需要执行的任务。你可以使用 <code>make</code> 来将源代码编译为可执行程序。大部分开源项目会使用 <code>make</code> 来实现最终的二进制文件的编译，然后使用 <code>make install</code> 命令来执行安装。</p><p>本文将通过一些基础和进阶的示例来展示 <code>make</code> 和 <code>Makefile</code> 的使用方法。在开始前，请确保你的系统中安装了 <code>make</code>。</p><h3 id="基础示例" tabindex="-1">基础示例 <a class="header-anchor" href="#基础示例" aria-label="Permalink to “基础示例”">​</a></h3><p>依然从打印 “Hello World” 开始。首先创建一个名字为 <code>myproject</code> 的目录，目录下新建 <code>Makefile</code> 文件，文件内容为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>say_hello:</span></span>
<span class="line"><span>        echo &quot;Hello World&quot;</span></span></code></pre></div><p>在 <code>myproject</code> 目录下执行 <code>make</code>，会有如下输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>echo &quot;Hello World&quot;</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>在上面的例子中，“say_hello” 类似于其他编程语言中的函数名。这被称之为<ruby>目标<rt>target</rt></ruby>。在该目标之后的是预置条件或依赖。为了简单起见，我们在这个示例中没有定义预置条件。<code>echo ‘Hello World&#39;</code> 命令被称为<ruby>步骤<rt>recipe</rt></ruby>。这些步骤基于预置条件来实现目标。目标、预置条件和步骤共同构成一个规则。</p><p>总结一下，一个典型的规则的语法为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>目标: 预置条件</span></span>
<span class="line"><span>&lt;TAB&gt; 步骤</span></span></code></pre></div><p>作为示例，目标可以是一个基于预置条件（源代码）的二进制文件。另一方面，预置条件也可以是依赖其他预置条件的目标。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>final_target: sub_target final_target.c</span></span>
<span class="line"><span>        Recipe_to_create_final_target</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>sub_target: sub_target.c</span></span>
<span class="line"><span>        Recipe_to_create_sub_target</span></span></code></pre></div><p>目标并不要求是一个文件，也可以只是步骤的名字，就如我们的例子中一样。我们称之为“伪目标”。</p><p>再回到上面的示例中，当 <code>make</code> 被执行时，整条指令 <code>echo &quot;Hello World&quot;</code> 都被显示出来，之后才是真正的执行结果。如果不希望指令本身被打印处理，需要在 <code>echo</code> 前添加 <code>@</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span></code></pre></div><p>重新运行 <code>make</code>，将会只有如下输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>接下来在 <code>Makefile</code> 中添加如下伪目标：<code>generate</code> 和 <code>clean</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>        @echo &quot;Creating empty text files...&quot;</span></span>
<span class="line"><span>        touch file-{1..10}.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm *.txt</span></span></code></pre></div><p>随后当我们运行 <code>make</code> 时，只有 <code>say_hello</code> 这个目标被执行。这是因为<code>Makefile</code> 中的第一个目标为默认目标。通常情况下会调用默认目标，这就是你在大多数项目中看到 <code>all</code> 作为第一个目标而出现。<code>all</code> 负责来调用它他的目标。我们可以通过 <code>.DEFAULT_GOAL</code> 这个特殊的伪目标来覆盖掉默认的行为。</p><p>在 <code>Makefile</code> 文件开头增加 <code>.DEFAULT_GOAL</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.DEFAULT_GOAL := generate</span></span></code></pre></div><p><code>make</code> 会将 <code>generate</code> 作为默认目标：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Creating empty text files...</span></span>
<span class="line"><span>touch file-{1..10}.txt</span></span></code></pre></div><p>顾名思义，<code>.DEFAULT_GOAL</code> 伪目标仅能定义一个目标。这就是为什么很多 <code>Makefile</code> 会包括 <code>all</code> 这个目标，这样可以调用多个目标。</p><p>下面删除掉 <code>.DEFAULT_GOAL</code>，增加 <code>all</code> 目标：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>all: say_hello generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>        @echo &quot;Creating empty text files...&quot;</span></span>
<span class="line"><span>        touch file-{1..10}.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm *.txt</span></span></code></pre></div><p>运行之前，我们再增加一些特殊的伪目标。<code>.PHONY</code> 用来定义这些不是文件的目标。<code>make</code> 会默认调用这些伪目标下的步骤，而不去检查文件名是否存在或最后修改日期。完整的 <code>Makefile</code> 如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.PHONY: all say_hello generate clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: say_hello generate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>say_hello:</span></span>
<span class="line"><span>        @echo &quot;Hello World&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generate:</span></span>
<span class="line"><span>        @echo &quot;Creating empty text files...&quot;</span></span>
<span class="line"><span>        touch file-{1..10}.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm *.txt</span></span></code></pre></div><p><code>make</code> 命令会调用 <code>say_hello</code> 和 <code>generate</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Hello World</span></span>
<span class="line"><span>Creating empty text files...</span></span>
<span class="line"><span>touch file-{1..10}.txt</span></span></code></pre></div><p><code>clean</code> 不应该被放入 <code>all</code> 中，或者被放入第一个目标中。<code>clean</code> 应当在需要清理时手动调用，调用方法为 <code>make clean</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make clean</span></span>
<span class="line"><span>Cleaning up...</span></span>
<span class="line"><span>rm *.txt</span></span></code></pre></div><p>现在你应该已经对 <code>Makefile</code> 有了基础的了解，接下来我们看一些进阶的示例。</p><h3 id="进阶示例" tabindex="-1">进阶示例 <a class="header-anchor" href="#进阶示例" aria-label="Permalink to “进阶示例”">​</a></h3><h4 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to “变量”">​</a></h4><p>在之前的实例中，大部分目标和预置条件是已经固定了的，但在实际项目中，它们通常用变量和模式来代替。</p><p>定义变量最简单的方式是使用 <code>=</code> 操作符。例如，将命令 <code>gcc</code> 赋值给变量 <code>CC</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CC = gcc</span></span></code></pre></div><p>这被称为递归扩展变量，用于如下所示的规则中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>hello: hello.c</span></span>
<span class="line"><span>    \${CC} hello.c -o hello</span></span></code></pre></div><p>你可能已经想到了，这些步骤将会在传递给终端时展开为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>gcc hello.c -o hello</span></span></code></pre></div><p><code>\${CC}</code> 和 <code>$(CC)</code> 都能对 <code>gcc</code> 进行引用。但如果一个变量尝试将它本身赋值给自己，将会造成死循环。让我们验证一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CC = gcc</span></span>
<span class="line"><span>CC = \${CC}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all:</span></span>
<span class="line"><span>    @echo \${CC}</span></span></code></pre></div><p>此时运行 <code>make</code> 会导致：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ make</span></span>
<span class="line"><span>Makefile:8: *** Recursive variable &#39;CC&#39; references itself (eventually).  Stop.</span></span></code></pre></div><p>为了避免这种情况发生，可以使用 <code>:=</code> 操作符（这被称为简单扩展变量）。以下代码不会造成上述问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CC := gcc</span></span>
<span class="line"><span>CC := \${CC}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all:</span></span>
<span class="line"><span>    @echo \${CC}</span></span></code></pre></div><h4 id="模式和函数" tabindex="-1">模式和函数 <a class="header-anchor" href="#模式和函数" aria-label="Permalink to “模式和函数”">​</a></h4><p>下面的 <code>Makefile</code> 使用了变量、模式和函数来实现所有 C 代码的编译。我们来逐行分析下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Usage:</span></span>
<span class="line"><span># make        # compile all binary</span></span>
<span class="line"><span># make clean  # remove ALL binaries and objects</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY = all clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CC = gcc                        # compiler to use</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LINKERFLAG = -lm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SRCS := $(wildcard *.c)</span></span>
<span class="line"><span>BINS := $(SRCS:%.c=%)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: \${BINS}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%: %.o</span></span>
<span class="line"><span>        @echo &quot;Checking..&quot;</span></span>
<span class="line"><span>        \${CC} \${LINKERFLAG} $&lt; -o $@</span></span>
<span class="line"><span></span></span>
<span class="line"><span>%.o: %.c</span></span>
<span class="line"><span>        @echo &quot;Creating object..&quot;</span></span>
<span class="line"><span>        \${CC} -c $&lt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm -rvf *.o \${BINS}</span></span></code></pre></div><ul><li><p>以 <code>#</code> 开头的行是评论。</p></li><li><p><code>.PHONY = all clean</code> 行定义了 <code>all</code> 和 <code>clean</code> 两个伪目标。</p></li><li><p>变量 <code>LINKERFLAG</code> 定义了在步骤中 <code>gcc</code> 命令需要用到的参数。</p></li><li><p><code>SRCS := $(wildcard *.c)</code>：<code>$(wildcard pattern)</code> 是与文件名相关的一个函数。在本示例中，所有 “.c”后缀的文件会被存入 <code>SRCS</code> 变量。</p></li><li><p><code>BINS := $(SRCS:%.c=%)</code>：这被称为替代引用。本例中，如果 <code>SRCS</code> 的值为 <code>&#39;foo.c bar.c&#39;</code>，则 <code>BINS</code>的值为 <code>&#39;foo bar&#39;</code>。</p></li><li><p><code>all: \${BINS}</code> 行：伪目标 <code>all</code> 调用 <code>\${BINS}</code> 变量中的所有值作为子目标。</p></li><li><p>规则：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span></code></pre></div></li></ul><p>%: %.o   @echo &quot;Checking..&quot;   \${CC} \${LINKERFLAG} $&lt; -o $@</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>    下面通过一个示例来理解这条规则。假定 \`foo\` 是变量 \`\${BINS}\` 中的一个值。\`%\` 会匹配到 \`foo\`（\`%\`匹配任意一个目标）。下面是规则展开后的内容：</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>foo: foo.o</span></span>
<span class="line"><span>   @echo &quot;Checking..&quot;</span></span>
<span class="line"><span>   gcc -lm foo.o -o foo</span></span></code></pre></div><pre><code>如上所示，\`%\` 被 \`foo\` 替换掉了。\`$&lt;\` 被 \`foo.o\` 替换掉。\`$&lt;\`用于匹配预置条件，\`$@\` 匹配目标。对 \`\${BINS}\` 中的每个值，这条规则都会被调用一遍。
</code></pre><ul><li><p>规则：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span></code></pre></div></li></ul><p>%.o: %.c   @echo &quot;Creating object..&quot;   \${CC} -c $&lt;</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>    之前规则中的每个预置条件在这条规则中都会都被作为一个目标。下面是展开后的内容：</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    \`\`\`</span></span>
<span class="line"><span>foo.o: foo.c</span></span>
<span class="line"><span>  @echo &quot;Creating object..&quot;</span></span>
<span class="line"><span>  gcc -c foo.c</span></span></code></pre></div><ul><li>最后，在 <code>clean</code> 目标中，所有的二进制文件和编译文件将被删除。</li></ul><p>下面是重写后的 <code>Makefile</code>，该文件应该被放置在一个有 <code>foo.c</code> 文件的目录下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># Usage:</span></span>
<span class="line"><span># make        # compile all binary</span></span>
<span class="line"><span># make clean  # remove ALL binaries and objects</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.PHONY = all clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CC = gcc                        # compiler to use</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LINKERFLAG = -lm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SRCS := foo.c</span></span>
<span class="line"><span>BINS := foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo: foo.o</span></span>
<span class="line"><span>        @echo &quot;Checking..&quot;</span></span>
<span class="line"><span>        gcc -lm foo.o -o foo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>foo.o: foo.c</span></span>
<span class="line"><span>        @echo &quot;Creating object..&quot;</span></span>
<span class="line"><span>        gcc -c foo.c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        @echo &quot;Cleaning up...&quot;</span></span>
<span class="line"><span>        rm -rvf foo.o foo</span></span></code></pre></div>`,65)),p("p",null,[s[1]||(s[1]=a("关于 ",-1)),s[2]||(s[2]=p("code",null,"Makefile",-1)),s[3]||(s[3]=a(" 的更多信息，",-1)),e(n,{href:"https://www.gnu.org/software/make/manual/make.pdf"},{default:l(()=>[...s[0]||(s[0]=[a("GNU Make 手册",-1)])]),_:1}),s[4]||(s[4]=a("提供了更完整的说明和实例。",-1))]),s[21]||(s[21]=p("hr",null,null,-1)),p("p",null,[s[6]||(s[6]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/18/8/what-how-makefile"},{default:l(()=>[...s[5]||(s[5]=[a("https://opensource.com/article/18/8/what-how-makefile",-1)])]),_:1})]),p("p",null,[s[11]||(s[11]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/psachin"},{default:l(()=>[...s[7]||(s[7]=[a("Sachin Patil",-1)])]),_:1}),s[12]||(s[12]=a(" 选题：",-1)),e(n,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[8]||(s[8]=[a("lujun9972",-1)])]),_:1}),s[13]||(s[13]=a(" 译者：",-1)),e(n,{href:"https://github.com/zafiry"},{default:l(()=>[...s[9]||(s[9]=[a("Zafiry",-1)])]),_:1}),s[14]||(s[14]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[17]||(s[17]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:l(()=>[...s[16]||(s[16]=[a("Linux中国",-1)])]),_:1}),s[19]||(s[19]=a(" 荣誉推出",-1))])])}const v=i(h,[["render",r]]);export{y as __pageData,v as default};
