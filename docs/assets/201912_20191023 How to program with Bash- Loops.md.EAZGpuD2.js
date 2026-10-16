import{_ as l,a0 as o,w as d,s as r,I as a,x as n,a1 as p,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"怎样用 Bash 编程：循环 | LCTT x X-CMD","titleTemplate":false,"description":"怎样用 Bash 编程：循环 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"怎样用 Bash 编程：循环 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"怎样用 Bash 编程：循环 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191023 How to program with Bash- Loops","title":"怎样用 Bash 编程：循环","tag":"201912","desc":""},"relativePath":"201912/20191023 How to program with Bash- Loops.md","filePath":"[post].md"}'),c={name:"201912/20191023 How to program with Bash- Loops.md"};function h(u,s,g,k,m,b){const e=o("Link");return d(),r("div",null,[s[30]||(s[30]=a("h1",{id:"怎样用-bash-编程-循环",tabindex:"-1"},[n("怎样用 Bash 编程：循环 "),a("a",{class:"header-anchor",href:"#怎样用-bash-编程-循环","aria-label":"Permalink to “怎样用 Bash 编程：循环”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"本文是 Bash 编程系列三篇中的最后一篇，来学习使用循环执行迭代的操作。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/201912/26/111437f9pa3zqqwcc9wwg1.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Bash 是一种强大的用于命令行和 shell 脚本的编程语言。本系列的三部分都是基于我的三集 ",-1)),p(e,{href:"http://www.both.org/?page_id=1183"},{default:i(()=>[...s[0]||(s[0]=[n("Linux 自学课程",-1)])]),_:1}),s[2]||(s[2]=n(" 写的，探索怎么用 CLI 进行 bash 编程。",-1))]),a("p",null,[s[5]||(s[5]=n("本系列的 ",-1)),p(e,{href:"https://linux.cn/article-11552-1.html"},{default:i(()=>[...s[3]||(s[3]=[n("第一篇文章",-1)])]),_:1}),s[6]||(s[6]=n(" 讨论了 bash 编程的一些简单命令行操作，如使用变量和控制操作符。",-1)),p(e,{href:"https://linux.cn/article-11687-1.html"},{default:i(()=>[...s[4]||(s[4]=[n("第二篇文章",-1)])]),_:1}),s[7]||(s[7]=n(" 探讨了文件、字符串、数字等类型和各种各样在执行流中提供控制逻辑的的逻辑运算符，还有 bash 中不同种类的扩展。本文是第三篇（也是最后一篇），意在考察在各种迭代的操作中使用循环以及怎么合理控制循环。",-1))]),s[33]||(s[33]=t(`<h3 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to “循环”">​</a></h3><p>我使用过的所有编程语言都至少有两种循环结构来用来执行重复的操作。我经常使用 <code>for</code> 循环，然而我发现 <code>while</code> 和 <code>until</code> 循环也很有用处。</p><h4 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-label="Permalink to “for 循环”">​</a></h4><p>我的理解是，在 bash 中实现的 <code>for</code> 命令比大部分语言灵活，因为它可以处理非数字的值；与之形成对比的是，诸如标准 C 语言的 <code>for</code> 循环只能处理数字类型的值。</p><p>Bash 版的 <code>for</code> 命令基本的结构很简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for Var in list1 ; do list2 ; done</span></span></code></pre></div><p>解释一下：“对于 <code>list1</code> 中的每一个值，把 <code>$Var</code> 设置为那个值，使用该值执行 <code>list2</code> 中的程序语句；<code>list1</code> 中的值都执行完后，整个循环结束，退出循环。” <code>list1</code> 中的值可以是一个简单的显式字符串值，也可以是一个命令执行后的结果（\`\` 包含其内的命令执行的结果，本系列第二篇文章中有描述）。我经常使用这种结构。</p><p>要测试它，确认 <code>~/testdir</code> 仍然是当前的工作目录（PWD）。删除目录下所有东西，来看下这个显式写出值列表的 <code>for</code> 循环的简单的示例。这个列表混合了字母和数字 — 但是不要忘了，在 bash 中所有的变量都是字符串或者可以被当成字符串来处理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rm *</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ for I in a b c d 1 2 3 4 ; do echo $I ; done</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>b</span></span>
<span class="line"><span>c</span></span>
<span class="line"><span>d</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span></code></pre></div><p>给变量赋予更有意义的名字，变成前面版本的进阶版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for Dept in &quot;Human Resources&quot; Sales Finance &quot;Information Technology&quot; Engineering Administration Research ; do echo &quot;Department $Dept&quot; ; done</span></span>
<span class="line"><span>Department Human Resources</span></span>
<span class="line"><span>Department Sales</span></span>
<span class="line"><span>Department Finance</span></span>
<span class="line"><span>Department Information Technology</span></span>
<span class="line"><span>Department Engineering</span></span>
<span class="line"><span>Department Administration</span></span>
<span class="line"><span>Department Research</span></span></code></pre></div><p>创建几个目录（创建时显示一些处理信息）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for Dept in &quot;Human Resources&quot; Sales Finance &quot;Information Technology&quot; Engineering Administration Research ; do echo &quot;Working on Department $Dept&quot; ; mkdir &quot;$Dept&quot;  ; done</span></span>
<span class="line"><span>Working on Department Human Resources</span></span>
<span class="line"><span>Working on Department Sales</span></span>
<span class="line"><span>Working on Department Finance</span></span>
<span class="line"><span>Working on Department Information Technology</span></span>
<span class="line"><span>Working on Department Engineering</span></span>
<span class="line"><span>Working on Department Administration</span></span>
<span class="line"><span>Working on Department Research</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ ll</span></span>
<span class="line"><span>total 28</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Administration</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Engineering</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Finance</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45 &#39;Human Resources&#39;</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45 &#39;Information Technology&#39;</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Research</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:45  Sales</span></span></code></pre></div><p>在 <code>mkdir</code> 语句中 <code>$Dept</code> 变量必须用引号包裹起来；否则名字中间有空格（如 <code>Information Technology</code>）会被当做两个独立的目录处理。我一直信奉的一条实践规则：所有的文件和目录都应该为一个单词（中间没有空格）。虽然大部分现代的操作系统可以处理名字中间有空格的情况，但是系统管理员需要花费额外的精力去确保脚本和 CLI 程序能正确处理这些特例。（即使它们很烦人，也务必考虑它们，因为你永远不知道将拥有哪些文件。）</p><p>再次删除 <code>~/testdir</code> 下的所有东西 — 再运行一次下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rm -rf * ; ll</span></span>
<span class="line"><span>total 0</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ for Dept in Human-Resources Sales Finance Information-Technology Engineering Administration Research ; do echo &quot;Working on Department $Dept&quot; ; mkdir &quot;$Dept&quot;  ; done</span></span>
<span class="line"><span>Working on Department Human-Resources</span></span>
<span class="line"><span>Working on Department Sales</span></span>
<span class="line"><span>Working on Department Finance</span></span>
<span class="line"><span>Working on Department Information-Technology</span></span>
<span class="line"><span>Working on Department Engineering</span></span>
<span class="line"><span>Working on Department Administration</span></span>
<span class="line"><span>Working on Department Research</span></span>
<span class="line"><span>[student@studentvm1 testdir]$ ll</span></span>
<span class="line"><span>total 28</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Administration</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Engineering</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Finance</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Human-Resources</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Information-Technology</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Research</span></span>
<span class="line"><span>drwxrwxr-x 2 student student 4096 Apr  8 15:52 Sales</span></span></code></pre></div><p>假设现在有个需求，需要列出一台 Linux 机器上所有的 RPM 包并对每个包附上简短的描述。我为北卡罗来纳州工作的时候，曾经遇到过这种需求。由于当时开源尚未得到州政府的“批准”，而且我只在台式机上使用 Linux，对技术一窍不通的老板（PHB）需要我列出我计算机上安装的所有软件，以便他们可以“批准”一个特例。</p><p>你怎么实现它？有一种方法是，已知 <code>rpm –qa</code> 命令提供了 RPM 包的完整描述，包括了白痴老板想要的东西：软件名称和概要描述。</p><p>让我们一步步执行出最后的结果。首先，列出所有的 RPM 包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rpm -qa</span></span>
<span class="line"><span>perl-HTTP-Message-6.18-3.fc29.noarch</span></span>
<span class="line"><span>perl-IO-1.39-427.fc29.x86_64</span></span>
<span class="line"><span>perl-Math-Complex-1.59-429.fc29.noarch</span></span>
<span class="line"><span>lua-5.3.5-2.fc29.x86_64</span></span>
<span class="line"><span>java-11-openjdk-headless-11.0.ea.28-2.fc29.x86_64</span></span>
<span class="line"><span>util-linux-2.32.1-1.fc29.x86_64</span></span>
<span class="line"><span>libreport-fedora-2.9.7-1.fc29.x86_64</span></span>
<span class="line"><span>rpcbind-1.2.5-0.fc29.x86_64</span></span>
<span class="line"><span>libsss_sudo-2.0.0-5.fc29.x86_64</span></span>
<span class="line"><span>libfontenc-1.1.3-9.fc29.x86_64</span></span>
<span class="line"><span>&amp;lt;snip&amp;gt;</span></span></code></pre></div><p>用 <code>sort</code> 和 <code>uniq</code> 命令对列表进行排序和打印去重后的结果（有些已安装的 RPM 包具有相同的名字）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ rpm -qa | sort | uniq</span></span>
<span class="line"><span>a2ps-4.14-39.fc29.x86_64</span></span>
<span class="line"><span>aajohan-comfortaa-fonts-3.001-3.fc29.noarch</span></span>
<span class="line"><span>abattis-cantarell-fonts-0.111-1.fc29.noarch</span></span>
<span class="line"><span>abiword-3.0.2-13.fc29.x86_64</span></span>
<span class="line"><span>abrt-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-ccpp-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-coredump-helper-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-kerneloops-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-pstoreoops-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>abrt-addon-vmcore-2.11.0-1.fc29.x86_64</span></span>
<span class="line"><span>&amp;lt;snip&amp;gt;</span></span></code></pre></div><p>以上命令得到了想要的 RPM 列表，因此你可以把这个列表作为一个循环的输入信息，循环最终会打印每个 RPM 包的详细信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for RPM in \`rpm -qa | sort | uniq\` ; do rpm -qi $RPM ; done</span></span></code></pre></div><p>这段代码产出了多余的信息。当循环结束后，下一步就是提取出白痴老板需要的信息。因此，添加一个 <code>egrep</code> 命令用来搜索匹配 <code>^Name</code> 或 <code>^Summary</code> 的行。脱字符（<code>^</code>）表示行首，整个命令表示显示所有以 Name 或 Summary 开头的行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for RPM in \`rpm -qa | sort | uniq\` ; do rpm -qi $RPM ; done | egrep -i &quot;^Name|^Summary&quot;</span></span>
<span class="line"><span>Name        : a2ps</span></span>
<span class="line"><span>Summary     : Converts text and other types of files to PostScript</span></span>
<span class="line"><span>Name        : aajohan-comfortaa-fonts</span></span>
<span class="line"><span>Summary     : Modern style true type font</span></span>
<span class="line"><span>Name        : abattis-cantarell-fonts</span></span>
<span class="line"><span>Summary     : Humanist sans serif font</span></span>
<span class="line"><span>Name        : abiword</span></span>
<span class="line"><span>Summary     : Word processing program</span></span>
<span class="line"><span>Name        : abrt</span></span>
<span class="line"><span>Summary     : Automatic bug detection and reporting tool</span></span>
<span class="line"><span>&amp;lt;snip&amp;gt;</span></span></code></pre></div><p>在上面的命令中你可以试试用 <code>grep</code> 代替 <code>egrep</code> ，你会发现用 <code>grep</code> 不能得到正确的结果。你也可以通过管道把命令结果用 <code>less</code> 过滤器来查看。最终命令像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ for RPM in \`rpm -qa | sort | uniq\` ; do rpm -qi $RPM ; done | egrep -i &quot;^Name|^Summary&quot; &gt; RPM-summary.txt</span></span></code></pre></div><p>这个命令行程序用到了管道、重定向和 <code>for</code> 循环，这些全都在一行中。它把你的 CLI 程序的结果重定向到了一个文件，这个文件可以在邮件中使用或在其他地方作为输入使用。</p><p>这个一次一步构建程序的过程让你能看到每步的结果，以此来确保整个程序以你期望的流程进行且输出你想要的结果。</p><p>白痴老板最终收到了超过 1900 个不同的 RPM 包的清单，我严重怀疑根本就没人读过这个列表。我给了他们想要的东西，没有从他们嘴里听到过任何关于 RPM 包的信息。</p><h3 id="其他循环" tabindex="-1">其他循环 <a class="header-anchor" href="#其他循环" aria-label="Permalink to “其他循环”">​</a></h3><p>Bash 中还有两种其他类型的循环结构：<code>while</code> 和 <code>until</code> 结构，两者在语法和功能上都类似。这些循环结构的基础语法很简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while [ expression ] ; do list ; done</span></span></code></pre></div><p>逻辑解释：表达式（<code>expression</code>）结果为 true 时，执行程序语句 <code>list</code>。表达式结果为 false 时，退出循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>until [ expression ] ; do list ; done</span></span></code></pre></div><p>逻辑解释：执行程序语句 <code>list</code>，直到表达式的结果为 true。当表达式结果为 true 时，退出循环。</p><h4 id="while-循环" tabindex="-1">While 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to “While 循环”">​</a></h4><p><code>while</code> 循环用于当逻辑表达式结果为 true 时执行一系列程序语句。假设你的 PWD 仍是 <code>~/testdir</code>。</p><p>最简单的 <code>while</code> 循环形式是这个会一直运行下去的循环。下面格式的条件语句永远以 <code>true</code> 作为返回。你也可以用简单的 <code>1</code> 代替 <code>true</code>，结果一样，但是这解释了 true 表达式的用法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 testdir]$ X=0 ; while [ true ] ; do echo $X ; X=$((X+1)) ; done | head</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>[student@studentvm1 testdir]$</span></span></code></pre></div><p>既然你已经学了 CLI 的各部分知识，那就让它变得更有用处。首先，为了防止变量 <code>$X</code> 在前面的程序或 CLI 命令执行后有遗留的值，设置 <code>$X</code> 的值为 0。然后，因为逻辑表达式 <code>[ true ]</code> 的结果永远是 1，即 true，在 <code>do</code> 和 <code>done</code> 中间的程序指令列表会一直执行 — 或者直到你按下 <code>Ctrl+C</code> 抑或发送一个 2 号信号给程序。那些程序指令是算数扩展，用来打印变量 <code>$X</code> 当前的值并加 1.</p>`,42)),a("p",null,[s[9]||(s[9]=n("《",-1)),p(e,{href:"https://www.apress.com/us/book/9781484237298"},{default:i(()=>[...s[8]||(s[8]=[n("系统管理员的 Linux 哲学",-1)])]),_:1}),s[10]||(s[10]=n("》的信条之一是追求优雅，实现优雅的一种方式就是简化。你可以用操作符 ",-1)),s[11]||(s[11]=a("code",null,"++",-1)),s[12]||(s[12]=n(" 来简化这个程序。在第一个例子中，变量当前的值被打印出来，然后变量的值增加了。可以在变量后加一个 ",-1)),s[13]||(s[13]=a("code",null,"++",-1)),s[14]||(s[14]=n(" 来表示这个逻辑：",-1))]),s[34]||(s[34]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; while [ true ] ; do echo $((X++)) ; done | head</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>现在删掉程序最后的 <code>| head</code> 再运行一次。</p><p>在下面这个版本中，变量在值被打印之前就自增了。这是通过在变量之前添加 <code>++</code> 操作符实现的。你能看出区别吗？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; while [ true ] ; do echo $((++X)) ; done | head</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>你已经把打印变量的值和自增简化到了一条语句。类似 <code>++</code> 操作符，也有 <code>--</code> 操作符。</p><p>你需要一个在循环到某个特定数字时终止循环的方法。把 true 表达式换成一个数字比较表达式来实现它。这里有一个循环到 5 终止的程序。在下面的示例代码中，你可以看到 <code>-le</code> 是 “小于或等于” 的数字逻辑操作符。整个语句的意思：只要 <code>$X</code> 的值小于或等于 5，循环就一直运行。当 <code>$X</code> 增加到 6 时，循环终止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; while [ $X -le 5 ] ; do echo $((X++)) ; done</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>[student@studentvm1 ~]$</span></span></code></pre></div><h4 id="until-循环" tabindex="-1">Until 循环 <a class="header-anchor" href="#until-循环" aria-label="Permalink to “Until 循环”">​</a></h4><p><code>until</code> 命令非常像 <code>while</code> 命令。不同之处是，它直到逻辑表达式的值是 <code>true</code> 之前，会一直循环。看一下这种结构最简单的格式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; until false  ; do echo $((X++)) ; done | head</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>[student@studentvm1 ~]$</span></span></code></pre></div><p>它用一个逻辑比较表达式来计数到一个特定的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[student@studentvm1 ~]$ X=0 ; until [ $X -eq 5 ]  ; do echo $((X++)) ; done</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>[student@studentvm1 ~]$ X=0 ; until [ $X -eq 5 ]  ; do echo $((++X)) ; done</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>[student@studentvm1 ~]$</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>本系列探讨了构建 Bash 命令行程序和 shell 脚本的很多强大的工具。但是这仅仅是你能用 Bash 做的很多有意思的事中的冰山一角，接下来就看你的了。</p><p>我发现学习 Bash 编程最好的方法就是实践。找一个需要多个 Bash 命令的简单项目然后写一个 CLI 程序。系统管理员们要做很多适合 CLI 编程的工作，因此我确信你很容易能找到自动化的任务。</p><p>很多年前，尽管我对其他的 Shell 语言和 Perl 很熟悉，但还是决定用 Bash 做所有系统管理员的自动化任务。我发现，有时稍微搜索一下，我可以用 Bash 实现我需要的所有事情。</p><hr>`,17)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/19/10/programming-bash-loops"},{default:i(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/10/programming-bash-loops",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/dboth"},{default:i(()=>[...s[17]||(s[17]=[n("David Both",-1)])]),_:1}),s[22]||(s[22]=n(" 选题：",-1)),p(e,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 译者：",-1)),p(e,{href:"https://github.com/lxbwolf"},{default:i(()=>[...s[19]||(s[19]=[n("lxbwolf",-1)])]),_:1}),s[24]||(s[24]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const v=l(c,[["render",h]]);export{y as __pageData,v as default};
