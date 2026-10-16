import{_ as i,a0 as t,w as d,s as o,ao as c,I as l,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"如何使用 Linux sed 命令自动进行文件编辑 | LCTT x X-CMD","titleTemplate":false,"description":"如何使用 Linux sed 命令自动进行文件编辑 | LCTT (202208) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何使用 Linux sed 命令自动进行文件编辑 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何使用 Linux sed 命令自动进行文件编辑 | LCTT (202208) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202208/20220802 How I use the Linux sed command to automate file edits","title":"如何使用 Linux sed 命令自动进行文件编辑","tag":"202208","desc":""},"relativePath":"202208/20220802 How I use the Linux sed command to automate file edits.md","filePath":"[post].md"}'),g={name:"202208/20220802 How I use the Linux sed command to automate file edits.md"};function r(u,s,f,h,k,m){const n=t("Link");return d(),o("div",null,[s[15]||(s[15]=c(`<h1 id="如何使用-linux-sed-命令自动进行文件编辑" tabindex="-1">如何使用 Linux sed 命令自动进行文件编辑 <a class="header-anchor" href="#如何使用-linux-sed-命令自动进行文件编辑" aria-label="Permalink to “如何使用 Linux sed 命令自动进行文件编辑”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202208/17/120535by5jfu5dovfesd56.jpg" alt=""></p><blockquote><p>以下是从 Linux 命令行自动编辑文件的一些提示和技巧。</p></blockquote><p>当我使用 Linux 命令行时，无论是在台式机上编写新程序还是在 Web 服务器上管理网站，我经常需要处理文本文件。Linux 提供了强大的工具，我可以利用这些工具来完成我的工作。我经常使用 <code>sed</code>，一个可以根据模式修改文本的编辑器。</p><p><code>sed</code> 代表 <ruby>流编辑器<rt>Stream EDitor</rt></ruby>，它编辑文件中的文本并打印结果。使用 <code>sed</code> 的一种方法是识别一个字符串在文件中的几次出现，并将它们替换为不同的字符串。使用 <code>sed</code> 来处理文本文件的方式似乎是无穷无尽的，但我想分享一些使用 <code>sed</code> 来帮助我管理文件的方法。</p><h3 id="在-linux-上搜索和替换文件中的文本" tabindex="-1">在 Linux 上搜索和替换文件中的文本 <a class="header-anchor" href="#在-linux-上搜索和替换文件中的文本" aria-label="Permalink to “在 Linux 上搜索和替换文件中的文本”">​</a></h3><p>要使用 <code>sed</code>，你需要使用一个<em>正则表达式</em>。正则表达式是定义模式的一组特殊字符。我最常使用 <code>sed</code> 的例子是替换文件中的文本。替换文本的语法如下：<code>s/originaltext/newtext</code>。<code>s</code> 告诉 <code>sed</code> 执行文本替换或交换出现的文本。在斜线之间提供原始文本和新文本。</p><p>此语法将仅替换每行中第一次出现的 <code>originaltext</code>。要替换每个匹配项，即使在一行中原始文本出现了不止一次，要将 <code>g</code> 追加到表达式的末尾。例如：<code>s/originaltext/newtext/g</code>。</p><p>要在 <code>sed</code> 中使用此表达式，请使用 <code>-e</code> 选项指定此正则表达式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/originaltext/newtext/g&#39;</span></span></code></pre></div><p>例如，假设我有一个名为 <code>game</code> 程序的 Makefile 文件，该程序模拟了康威的《生命游戏》：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.PHONY: all run clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>game: game.o</span></span>
<span class="line"><span>        $(CC) $(CFLAGS) -o game game.o $(LDFLAGS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run: game</span></span>
<span class="line"><span>        ./game</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        $(RM) *~</span></span>
<span class="line"><span>        $(RM) *.o</span></span>
<span class="line"><span>        $(RM) game</span></span></code></pre></div><p><code>game</code> 这个名字并不是很有描述性，所以我想会把它改名为 <code>life</code>。将 <code>game.c</code> 源文件重命名为 <code>life.c</code> 非常简单，但现在我需要修改 Makefile 以使用新名称。我可以使用 <code>sed</code> 来将所有的 <code>game</code> 更改为 <code>life</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/game/life/g&#39; Makefile</span></span>
<span class="line"><span>.PHONY: all run clean</span></span>
<span class="line"><span></span></span>
<span class="line"><span>all: life</span></span>
<span class="line"><span></span></span>
<span class="line"><span>life: life.o</span></span>
<span class="line"><span>        $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>run: life</span></span>
<span class="line"><span>        ./life</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clean:</span></span>
<span class="line"><span>        $(RM) *~</span></span>
<span class="line"><span>        $(RM) *.o</span></span>
<span class="line"><span>        $(RM) life</span></span></code></pre></div><p><code>sed</code> 会将输出打印到屏幕上，这是检查文本替换是否符合你要求的好方法。要对 Makefile 进行这些更改，首先，备份文件，然后运行 <code>sed</code> 并将输出保存到原始文件名：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cp Makefile Makefile.old</span></span>
<span class="line"><span>$ sed -e &#39;s/game/life/g&#39; Makefile.old &gt; Makefile</span></span></code></pre></div><p>如果你确信你的更改正是你想要的，请使用 <code>-i</code> 或 <code>--in-place</code> 选项来编辑文件。但是，我建议添加一个备份文件后缀，如 <code>--in-place=.old</code>，用来备份原始文件，以备日后需要恢复时使用。它看起来像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed --in-place=.old -e &#39;s/game/life/g&#39; Makefile</span></span>
<span class="line"><span>$ ls Makefile*</span></span>
<span class="line"><span>Makefile  Makefile.old</span></span></code></pre></div><h3 id="在-linux-上使用-sed-引用文件" tabindex="-1">在 Linux 上使用 sed 引用文件 <a class="header-anchor" href="#在-linux-上使用-sed-引用文件" aria-label="Permalink to “在 Linux 上使用 sed 引用文件”">​</a></h3><p>你可以使用正则表达式的其它功能来匹配特定的文本实例。例如，你可能需要替换出现在行首的文本。使用 <code>sed</code>，你可以用上尖号 <code>^</code> 来匹配行的开头。</p><p>我使用“行首”来替换文本的一种方式是当我需要在电子邮件中引用一个文件时。假设我想在电子邮件中共享我的 Makefile，但我不想将其作为文件附件包含在内。相反，我更喜欢在电子邮件正文中“引用”文件，在每行之前使用 <code>&gt;</code>。我可以使用以下 <code>sed</code> 命令将编辑后的版本打印到我的终端，并将其复制粘贴到新的电子邮件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/^/&gt;/&#39; Makefile</span></span>
<span class="line"><span>&gt;.PHONY: all run clean</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;all: life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;life: life.o</span></span>
<span class="line"><span>&gt;       $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;run: life</span></span>
<span class="line"><span>&gt;       ./life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;clean:</span></span>
<span class="line"><span>&gt;       $(RM) *~</span></span>
<span class="line"><span>&gt;       $(RM) *.o</span></span>
<span class="line"><span>&gt;       $(RM) life</span></span></code></pre></div><p><code>s/^/&gt;/</code> 正则表达式匹配每行的开头（<code>^</code>），并在那里放置一个 <code>&gt;</code>。实际上，这相当于每行都以 <code>&gt;</code> 符号开始。</p><p>制表符可能无法在电子邮件中正确显示，但我可以通过添加另一个正则表达式将 Makefile 中的所有制表符替换为几个空格：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sed -e &#39;s/^/&gt;/&#39; -e &#39;s/\\t/  /g&#39; Makefile</span></span>
<span class="line"><span>&gt;.PHONY: all run clean</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;all: life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;life: life.o</span></span>
<span class="line"><span>&gt;  $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;run: life</span></span>
<span class="line"><span>&gt;  ./life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;clean:</span></span>
<span class="line"><span>&gt;  $(RM) *~</span></span>
<span class="line"><span>&gt;  $(RM) *.o</span></span>
<span class="line"><span>&gt;  $(RM) life</span></span></code></pre></div><p><code>\\t</code> 表示文字制表符，因此 <code>s/\\t/ /g</code> 告诉 <code>sed</code> 用输出中的两个空格替换输入中的所有制表符。</p><p>如果你需要对文件进行大量编辑，你可以将 <code>-e</code> 命令保存在文件中，并使用 <code>-f</code> 选项来告诉 <code>sed</code> 将该文件用作“脚本”。如果你需要经常进行相同的编辑，这种方法特别有用。我已经准备了 <code>quotemail.sed</code> 的脚本文件来在我的电子邮件中引用 Makefile：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat quotemail.sed</span></span>
<span class="line"><span>s/^/&gt;/</span></span>
<span class="line"><span>s/\\t/  /g</span></span>
<span class="line"><span>$ sed -f quotemail.sed Makefile</span></span>
<span class="line"><span>&gt;.PHONY: all run clean</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;all: life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;life: life.o</span></span>
<span class="line"><span>&gt;  $(CC) $(CFLAGS) -o life life.o $(LDFLAGS)</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;run: life</span></span>
<span class="line"><span>&gt;  ./life</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>&gt;clean:</span></span>
<span class="line"><span>&gt;  $(RM) *~</span></span>
<span class="line"><span>&gt;  $(RM) *.o</span></span>
<span class="line"><span>&gt;  $(RM) life</span></span></code></pre></div><h3 id="学习在-linux-上使用-sed" tabindex="-1">学习在 Linux 上使用 sed <a class="header-anchor" href="#学习在-linux-上使用-sed" aria-label="Permalink to “学习在 Linux 上使用 sed”">​</a></h3><p><code>sed</code> 是一个很好的工具，可以保存在你的 Linux 命令行工具包中。浏览 <code>sed</code> 手册页并了解有关如何使用它的更多信息。在命令行中键入 <code>man sed</code> 以获取有关不同命令行选项的完整文档，以及如何使用 <code>sed</code> 处理文本文件。</p><hr>`,31)),l("p",null,[s[1]||(s[1]=a("via: ",-1)),e(n,{href:"https://opensource.com/article/22/8/automate-file-edits-sed-linux"},{default:p(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/22/8/automate-file-edits-sed-linux",-1)])]),_:1})]),l("p",null,[s[6]||(s[6]=a("作者：",-1)),e(n,{href:"https://opensource.com/users/jim-hall"},{default:p(()=>[...s[2]||(s[2]=[a("Jim Hall",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),e(n,{href:"https://github.com/lkxed"},{default:p(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),e(n,{href:"https://github.com/perfiffer"},{default:p(()=>[...s[4]||(s[4]=[a("perfiffer",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:p(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),l("p",null,[s[12]||(s[12]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:p(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const L=i(g,[["render",r]]);export{C as __pageData,L as default};
