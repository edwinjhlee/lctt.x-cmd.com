import{_ as t,a0 as o,w as d,s as c,ao as l,I as n,x as a,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"FreeDOS 基础：从 A 到 Z | LCTT x X-CMD","titleTemplate":false,"description":"FreeDOS 基础：从 A 到 Z | LCTT (202310) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"FreeDOS 基础：从 A 到 Z | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"FreeDOS 基础：从 A 到 Z | LCTT (202310) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202310/20220629 ABCs of FreeDOS- 26 commands I use all the time","title":"FreeDOS 基础：从 A 到 Z","tag":"202310","desc":""},"relativePath":"202310/20220629 ABCs of FreeDOS- 26 commands I use all the time.md","filePath":"[post].md"}'),r={name:"202310/20220629 ABCs of FreeDOS- 26 commands I use all the time.md"};function h(g,s,b,u,k,m){const e=o("Link");return d(),c("div",null,[s[34]||(s[34]=l(`<h1 id="freedos-基础-从-a-到-z" tabindex="-1">FreeDOS 基础：从 A 到 Z <a class="header-anchor" href="#freedos-基础-从-a-到-z" aria-label="Permalink to “FreeDOS 基础：从 A 到 Z”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202310/12/102950rnookbm1124y54k1.jpg" alt=""></p><blockquote><p>我很高兴分享我最喜欢的 26 个 FreeDOS 命令。</p></blockquote><p>我家最早的一批计算机中有一台运行着一款名称为 DOS 的命令行操作系统，即 “<ruby>磁盘操作系统<rt>Disk Operating System</rt></ruby>”。我是在 DOS 系统环境中长大的，学会了利用命令行来使我的工作更轻松。很多其他的人也是如此。我们非常爱 DOS ，所以在 1994 年 6 月 29 日，我们创建了 FreeDOS 工程。</p><p>如果你的 FreeDOS 的初学者，你可能会对如何使用其附带的不同的命令行程序感到困惑。让我们从我最喜欢的 26 个 FreeDOS 命令开始吧。要学习更多的信息，在大部分命令的后面添加 <code>/?</code> 选项来获取更多的信息:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;attrib /?</span></span>
<span class="line"><span>ATTRIB v2.1 - 显示或更高文件属性。</span></span>
<span class="line"><span>版权所有 (c) 1998-2003，遵循 GPL2 协议。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>语法：ATTRIB { options | [path][file] | /@[list] }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>选项：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  +H 设置隐藏属性。     -H  清除隐藏属性。</span></span>
<span class="line"><span>  +S 设置系统属性。     -S  清除系统属性。</span></span>
<span class="line"><span>  +R 设置只读属性。     -R  清除只读属性。</span></span>
<span class="line"><span>  +A 设置存档属性。     -A  清楚存档属性。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  /S 处理具体指定路径中的所有目录中的文件。</span></span>
<span class="line"><span>  /D 处理带有通配符的参数的目录名称。</span></span>
<span class="line"><span>  /@ 处理文件，文件列在具体指定文件 中 [或 stdin]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  attrib file -rhs</span></span>
<span class="line"><span>  attrib +a -r dir1 dir2*.dat /s</span></span>
<span class="line"><span>  attrib -hs/sd /@list.txt *.*</span></span></code></pre></div><h3 id="a-是-attrib" tabindex="-1">A 是 ATTRIB <a class="header-anchor" href="#a-是-attrib" aria-label="Permalink to “A 是 ATTRIB”">​</a></h3><p><code>ATTRIB</code> 程序显示或更改文件的 <em>属性</em> 。属性可以是以下四个值之一：隐藏（<code>H</code>）、系统 <code>S</code>）、只读（<code>R</code>）、存档（<code>A</code>）。</p><p>标记为隐藏的文件将不会在目录列表中显示。例如，假设你想隐藏一个名称为 <code>SECRET.TXT</code> 的文件，这样就不会有人它在那里。首先，你可以显示该文件的属性，以便查看它的当前设置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\FILES&gt;attrib secret.txt </span></span>
<span class="line"><span>[----A] SECRET.TXT</span></span></code></pre></div><p>为隐藏这个文件，使用加号（<code>+</code>）操作符来开启用隐藏属性，像这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\FILES&gt;attrib +h secret.txt </span></span>
<span class="line"><span>[----A] -&gt; [-H--A] SECRET.TXT</span></span>
<span class="line"><span>C:\\FILES&gt;dir</span></span>
<span class="line"><span> Volume in drive C is FREEDOS2022</span></span>
<span class="line"><span> Volume Serial Number is 333D-0B18</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Directory of C:\\FILES</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.                   &lt;DIR&gt;  05-27-2022  9:22p</span></span>
<span class="line"><span>..                  &lt;DIR&gt;  05-27-2022  9:22p</span></span>
<span class="line"><span>         0 file(s)              0 bytes</span></span>
<span class="line"><span>         2 dir(s)     279,560,192 bytes free</span></span></code></pre></div><p><code>ATTRIB</code> 的另一种常见使用方法是操作只读属性，这样你就不会意外地覆盖重要的文件。假设你想要保护 <code>SECRET.TXT</code> 文件，这样你就不能删除或更改它。使用 <code>+R</code> 修饰符 ，打开只读属性，像这样:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\FILES&gt;attrib +r secret.txt </span></span>
<span class="line"><span>[----A] -&gt; [---RA] SECRET.TXT</span></span>
<span class="line"><span>C:\\FILES&gt;del secret.txt</span></span>
<span class="line"><span>C:\\FILES\\SECRET.TXT: Permission denied</span></span>
<span class="line"><span>no file removed.</span></span></code></pre></div><h3 id="b-是-哔哔-声" tabindex="-1">B 是“哔哔”声 <a class="header-anchor" href="#b-是-哔哔-声" aria-label="Permalink to “B 是“哔哔”声”">​</a></h3><p>如果你需要在一个批处理文件中添加一些激情活力，你可以使用 <code>BEEP</code> 命令来获取用户的注意力。<code>BEEP</code> 不会在屏幕上显示任何内容，但是会简单地发出一个 “哔哔” 的声音信号。</p><p>注意：<code>BEEP</code> 使用个人计算机内置的扬声器来发出 “哔哔” 声。如果你使用一台虚拟机器来引导启用 FreeDOS，检查你的系统是否建立正确的模拟个人计算机扬声器。否则，你将不会听到任何声音。</p><h3 id="c-是-cd" tabindex="-1">C 是 CD <a class="header-anchor" href="#c-是-cd" aria-label="Permalink to “C 是 CD”">​</a></h3><p>像 Linux 一样，FreeDOS 支持目录，这会允许你以一种来你有帮助的方式来组织你的文件。例如，你可以在一个名称为 <code>FILES</code> 的目录中存放你的全部文件，对于某些类型的文件，你可能会有其它的目录，例如，针对字处理器文件的 <code>DOCS</code> ，或者针对表格文件的 <code>SPRDSHT</code>。</p><p>你可以使用 <code>CD</code>（即 “<ruby>更改目录<rt>change directory</rt></ruby>”） 命令来导航到一个目录。<code>CHDIR</code> 命令和 <code>CD</code> 命令一样，如果你更喜欢使用这种语法的话。</p><p>为更改到一个新的目录，使用 <code>CD</code> 目录和目标目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;cd files</span></span>
<span class="line"><span>C:\\FILES&gt;cd sprdsht</span></span>
<span class="line"><span>C:\\FILES\\SPRDSHT&gt;dir</span></span>
<span class="line"><span>Volume in drive C is FREEDOS2022</span></span>
<span class="line"><span>Volume Serial Number is 333D-0B18</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Directory of C:\\FILES\\SPRDSHT</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>. &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>.. &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>FIB WKS 2,093 05-27-2022 10:07p</span></span>
<span class="line"><span>LAB1 WKS 2,087 05-27-2022 10:10p</span></span>
<span class="line"><span>MIS100 WKS 2,232 05-27-2022 10:05p</span></span>
<span class="line"><span>3 file(s) 6,412 bytes</span></span>
<span class="line"><span>2 dir(s) 279,527,424 bytes free</span></span></code></pre></div><p>你不必一次导航一层目录。相反，你可以使用一个 <code>CD</code> 命令和提供完整的你想要更改到的目录路径:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;cd \\files\\sprdsht</span></span>
<span class="line"><span>C:\\FILES\\SPRDSHT&gt;dir</span></span>
<span class="line"><span>Volume in drive C is FREEDOS2022</span></span>
<span class="line"><span>Volume Serial Number is 333D-0B18</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Directory of C:\\FILES\\SPRDSHT</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>.  &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>.. &lt;DIR&gt; 05-27-2022 9:59p</span></span>
<span class="line"><span>FIB WKS 2,093 05-27-2022 10:07p</span></span>
<span class="line"><span>LAB1 WKS 2,087 05-27-2022 10:10p</span></span>
<span class="line"><span>MIS100 WKS 2,232 05-27-2022 10:05p</span></span>
<span class="line"><span>3 file(s) 6,412 bytes</span></span>
<span class="line"><span>2 dir(s) 279,527,424 bytes free</span></span></code></pre></div><h3 id="d-是-deltree" tabindex="-1">D 是 DELTREE <a class="header-anchor" href="#d-是-deltree" aria-label="Permalink to “D 是 DELTREE”">​</a></h3><p>如果需要删除一个单个文件，你可以使用 <code>DEL</code> 命令。为删除一个空的目录，你可以使用 <code>RMDIR</code> 或 <code>RD</code> 命令。但是，如果你想删除一个有很多文件和子目录的目录?</p><p>一个包含有其它目录的目录称为 <em>目录树</em> 。你可以使用 <code>DELTREE</code> 命令来删除整个目录树。例如，为删除你的 <code>FILES</code> 目录，包括其中包含的所有的文件和目录，输入这个命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;deltree files</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    [DEFAULT-BUILD v1.02g] of DELTREE.  The &quot;ROOT-SAFETY-CHECK&quot; is enabled.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete directory &quot;C:\\FILES&quot;</span></span>
<span class="line"><span>and all its subdirectories?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Y] [N] [Q], [ENTER] ?  Y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==&gt; Deleting &quot;C:\\FILES&quot; ...</span></span></code></pre></div><p>你可以使用一个单一的 <code>DELTREE</code> 命令来轻松快捷地完成很多工作，因此，FreeDOS 的 <code>DELTREE</code> 提示会询问你是否真的想要这样做。谨慎地使用这个命令。</p><h3 id="e-是-edit" tabindex="-1">E 是 EDIT <a class="header-anchor" href="#e-是-edit" aria-label="Permalink to “E 是 EDIT”">​</a></h3><p>如果你需要在 FreeDOS 上编辑一个文本文件，<code>EDIT</code> 程序会让你轻松快速地完成任务。例如，要开始编辑一个名称为 <code>HELLO.TXT</code> 的文件，输入 <code>EDIT HELLO.TXT</code> 。如果 <code>HELLO.TXT</code> 文件已经存在，<code>EDIT</code> 打开文件并开始编辑。如果 <code>HELLO.TXT</code> 尚未存在，那么 <code>EDIT</code> 为你开启一个新的文件。</p><p><img src="https://opensource.com/sites/default/files/2022-06/FREEDedit_0.png" alt="Image of edit"></p><p>FreeDOS 的 <code>EDIT</code> 使用了一种友好的界面，对大多数人来说应该很容易使用。使用菜单来访问 <code>EDIT</code> 的各种特色功能，包括保存文件、打开一个新的文件、或者退出编辑器。为访问菜单，在你的键盘上按下 <code>Alt</code> 按键，然后使用箭头按键来避开和进入选择的动作。</p><p><img src="https://opensource.com/sites/default/files/2022-06/Freededit-save.png" alt="Image of save menu"></p><h3 id="f-是-find" tabindex="-1">F 是 FIND <a class="header-anchor" href="#f-是-find" aria-label="Permalink to “F 是 FIND”">​</a></h3><p>如果你需要在一个文件中查找文本，<code>FIND</code> 命令可以完成这项工作。类似于在 Linux 上的 <code>fgrep</code> ，<code>FIND</code> 会打印一些包含一个字符串的行。例如，为检查 <code>FDCONFIG.SYS</code> 文件中的 &quot;Menu Default&quot; 条目项，像这样使用 <code>FIND</code> :</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;find &quot;MENUDEFAULT&quot; fdconfig.sys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---------------- FDCONFIG.SYS</span></span>
<span class="line"><span>MENUDEFAULT=2,5</span></span></code></pre></div><p>如果你不确定你想要查找的字符串是使用的大写字母还是小写字母，添加 <code>/I</code> 选项来忽略字母的大小写情况:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;find /i &quot;menudefault&quot; fdconfig.sys</span></span>
<span class="line"><span>---------------- FDCONFIG.SYS</span></span>
<span class="line"><span>MENUDEFAULT=2,5</span></span></code></pre></div><h3 id="g-是-graphics" tabindex="-1">G 是 GRAPHICS <a class="header-anchor" href="#g-是-graphics" aria-label="Permalink to “G 是 GRAPHICS”">​</a></h3><p>如果你想要捕捉屏幕，你可以使用你键盘上的 <code>PrtScr</code>（<ruby>打印屏幕<rt>Print Screen</rt></ruby>）按键来直接将你显示器上的文本打印到打印机上。不过，这只对纯文本来说有效。如果你要打印图形屏幕，你需要加载 <code>GRAPHICS</code> 程序。</p><p><code>GRAPHICS</code> 支持不同的打印机类型，包括 HP 的 PCL 打印机、Epson 的点阵打印机，和兼容 PostScript 的打印机。例如，如果有一台连接到你的计算机的 HP 的激光打印机，你可以通过输入这条命令来为这台打印机加载支持:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;graphics hpdefault</span></span>
<span class="line"><span>Running in MS GRAPHICS compatibility mode...</span></span>
<span class="line"><span>Using HPPCL type for type hpdefault</span></span>
<span class="line"><span>  If you think this is not correct, mail me (see help text).</span></span>
<span class="line"><span>Printing black as white and white as black</span></span>
<span class="line"><span>which internally uses /I of this GRAPHICS.</span></span>
<span class="line"><span>You can use the following command directly instead of</span></span>
<span class="line"><span>GRAPHICS [your options] in the future:</span></span>
<span class="line"><span>LH GRAPH-HP /I</span></span>
<span class="line"><span>Note that GRAPH-HP allows extra options:</span></span>
<span class="line"><span>  /E economy mode, /1 use LPT1, /2 use LPT2, /3 use LPT3,</span></span>
<span class="line"><span>  /R for random instead of ordered dither</span></span>
<span class="line"><span>  /C for 300dpi instead of 600dpi</span></span>
<span class="line"><span>Driver to make &#39;shift PrtScr&#39; key work</span></span>
<span class="line"><span>even in CGA, EGA, VGA, MCGA graphics</span></span>
<span class="line"><span>modes loaded, in HP PCL mode.</span></span></code></pre></div><h3 id="h-是-help" tabindex="-1">H 是 HELP <a class="header-anchor" href="#h-是-help" aria-label="Permalink to “H 是 HELP”">​</a></h3><p>如果你刚刚来到 FreeDOS 的世界，你可以通过输入 <code>HELP</code> 来获取如何使用不同命令的提示。这将带来 FreeDOS 的帮助系统，包含所有命令的文档:</p><p><img src="https://opensource.com/sites/default/files/2022-06/Freedhelp.system.png" alt="Image of FreeDos help system"></p><h3 id="i-是-if" tabindex="-1">I 是 IF <a class="header-anchor" href="#i-是-if" aria-label="Permalink to “I 是 IF”">​</a></h3><p>你可以使用 <code>IF</code> 语句来将条件语句添加到你的命令行或<em>批处理文件</em> 。<code>IF</code> 进行一次简短的测试，然后执行一个单个命令。例如，如果存在某个文件，那么打印结果 “It&#39;s there”，你可以输入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;if exist kernel.sys echo It&#39;s there</span></span>
<span class="line"><span>It&#39;s there</span></span></code></pre></div><p>如果你想要测试相反的东西，在测试内容前，使用 <code>NOT</code> 关键字。例如，如果两个字符串的值不相同，那么打印结果 “Not equal” ，输入这条语句:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;if not &quot;a&quot;==&quot;b&quot; echo Not equal</span></span>
<span class="line"><span>Not equal</span></span></code></pre></div><h3 id="j-是-join" tabindex="-1">J 是 JOIN <a class="header-anchor" href="#j-是-join" aria-label="Permalink to “J 是 JOIN”">​</a></h3><p>早期的 DOS 版本是相当简单的；DOS 的第一个版本甚至不支持目录。为向这些较旧的程序提供向后兼容性，我们需要 <code>JOIN</code> 程序来作为一种巧妙的应变方法。<code>JOIN</code> 使用驱动器字母代替路径，这样，你可以将旧程序放入其自己的子目录中，但是，使用一个单个驱动器字母来访问它。</p><p>让我们假设你有一个名称为 <code>VC</code> 的旧应用程序，它不懂目录。为保持 <code>VC</code> 的工作，你可以将它的路径 <ruby>连接<rt>join</rt></ruby> 到一个驱动器字母。例如:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>JOIN V: D:\\VC</span></span></code></pre></div><p>FreeDOS 将 <code>JOIN</code> 实施为 <code>SWSUBST</code>，它也兼备类似 <code>SUBST</code> 命令的特色功能。为将 <code>D:\\VC</code> 路径链接到到一个名称为 <code>V:</code> 的驱动器字母，输入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;swsubst v: d:\\vc</span></span>
<span class="line"><span>C:\\&gt;dir v:</span></span>
<span class="line"><span>Volume in drive V is DATA</span></span>
<span class="line"><span>Volume Serial Number is 212C-1DF8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Directory of V:\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>. &lt;DIR&gt; 02-21-2022 10:35p</span></span>
<span class="line"><span>.. &lt;DIR&gt; 02-21-2022 10:35p</span></span>
<span class="line"><span>VC COM 27,520 07-14-2019 4:48p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 file(s) 27,520 bytes</span></span>
<span class="line"><span>2 dir(s) 48,306,176 bytes free</span></span></code></pre></div><h3 id="k-是-keyb" tabindex="-1">K 是 KEYB <a class="header-anchor" href="#k-是-keyb" aria-label="Permalink to “K 是 KEYB”">​</a></h3><p>DOS 默认采用美式英语键盘布局。你的键盘是不同的，你可以使用 <code>KEYB</code> 命令来加载新的键盘语言布局。例如，为为加载一种德语键盘布局，输入:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;keyb gr</span></span>
<span class="line"><span>FreeDOS KEYB 2.01 - (c) Aitor Santamaría Merino - GNU GPL 2.0</span></span>
<span class="line"><span>Keyboard layout : C:\\FREEDOS\\BIN\\KEYBOARD.SYS:GR [858] (3)</span></span></code></pre></div><h3 id="l-是-label" tabindex="-1">L 是 LABEL <a class="header-anchor" href="#l-是-label" aria-label="Permalink to “L 是 LABEL”">​</a></h3><p>FreeDOS 使用 <ruby>标签<rt>label</rt></ruby> 来命名每个软盘驱动器和硬盘驱动器。这些标签提供了一种识别磁盘可能包含内容的方法。当你需要将文件存储到单个不同的软盘上时，<code>LABEL</code> 命令是非常有用的，你可以标记一个软盘 “Data”，另一个软盘为 “Games” 。</p><p>为分配一个新的标签到一个驱动器。或者更改在一个驱动器上的现存标签。像这样使用标签:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\&gt;label d: data</span></span>
<span class="line"><span>D:\\&gt;dir /w</span></span>
<span class="line"><span>Volume in drive D is DATA</span></span>
<span class="line"><span>Volume Serial Number is 212C-1DF8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Directory of D:\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[123] [ABILITY] [ASEASY] [GAMES2] [QUATTRO]</span></span>
<span class="line"><span>[SRC] [TEMP] [THE] [VC] [WORD]</span></span>
<span class="line"><span>[WS400] EDLIN16.EXE EDLIN32.EXE MYENV.BAT</span></span>
<span class="line"><span>3 file(s) 113,910 bytes</span></span>
<span class="line"><span>11 dir(s) 48,306,176 bytes free</span></span></code></pre></div><h3 id="m-是-mem" tabindex="-1">M 是 MEM <a class="header-anchor" href="#m-是-mem" aria-label="Permalink to “M 是 MEM”">​</a></h3><p>运行程序和加载驱动程序会占用内存。可以查看你的系统有多少内存，以及有多少可用来运行 DOS 程序，使用 <code>MEM</code> 命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;mem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Memory Type Total Used Free</span></span>
<span class="line"><span>---------------- -------- -------- --------</span></span>
<span class="line"><span>Conventional 639K 11K 628K</span></span>
<span class="line"><span>Upper 104K 18K 86K</span></span>
<span class="line"><span>Reserved 281K 281K 0K</span></span>
<span class="line"><span>Extended (XMS) 15,224K 537K 14,687K</span></span>
<span class="line"><span>---------------- -------- -------- --------</span></span>
<span class="line"><span>Total memory 16,248K 847K 15,401K</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Total under 1 MB 743K 29K 714K</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Total Expanded (EMS) 8,576K (8,781,824 bytes)</span></span>
<span class="line"><span>Free Expanded (EMS) 8,192K (8,388,608 bytes)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>Largest executable program size 628K (643,104 bytes)</span></span>
<span class="line"><span>Largest free upper memory block 84K ( 85,728 bytes)</span></span>
<span class="line"><span>FreeDOS is resident in the high memory area.</span></span></code></pre></div><h3 id="n-是-nansi" tabindex="-1">N 是 NANSI <a class="header-anchor" href="#n-是-nansi" aria-label="Permalink to “N 是 NANSI”">​</a></h3><p>如果你想添加一点颜色到 FreeDOS 命令行，你可以使用 ANSI 转义序列。这些序列之所以叫“转义”，是因为每个序列都以代码 33（转义字符 <code>ESC</code>）和一个由美国国家标准化协会（ANSI）定义的特殊字符序列为开头。</p><p>FreeDOS 通过 <code>NANSI.SYS</code> 驱动程序来支持 ANSI 转义序列。随着 <code>NANSI</code> 的加载，你的 FreeDOS 控制台将解释 ANSI 转义序列，例如，设置文本颜色。</p><p><img src="https://opensource.com/sites/default/files/2022-06/FreeDnansi.png" alt="Image of Nansi"></p><h3 id="o-是-ozone" tabindex="-1">O 是 oZone <a class="header-anchor" href="#o-是-ozone" aria-label="Permalink to “O 是 oZone”">​</a></h3><p>FreeDOS 是一款命令行操作系统，但是一些人们更喜欢使用可备选的图形化用户界面。这就是为什么 FreeDOS 的 1.3 发行版包含一些图形化桌面的原因。我喜欢的一款名称为 oZone 的图形化桌面，它提供一种时尚、现代化外观的界面。</p><p><img src="https://opensource.com/sites/default/files/2022-06/FreeDozone.png" alt="Image of Ozone GUI"></p><p>注意，oZone 有一点烦人的错误，可能还需要一些来自外部开发者的关爱。如果你想让 oZone 变得更好，可以下载源文件代码做些贡献。</p><h3 id="p-是-prompt" tabindex="-1">P 是 PROMPT <a class="header-anchor" href="#p-是-prompt" aria-label="Permalink to “P 是 PROMPT”">​</a></h3><p>标准的 FreeDOS 命令行提示符会告诉你：你所在文件系统中的位置。当你第一次启动 FreeDOS 时，你的提示符看起来像 <code>C:\\&gt;</code>, 这意味着 <code>\\</code>（根）目录在 <code>C:</code> 驱动器。<code>&gt;</code> 字符表示着你可以在那里输入命令。</p><p>在你的提示符中，如果你更喜欢不同的信息，使用 <code>PROMPT</code> 目录来更改它。你可以使用一个带有 <code>$</code> 的开头的特殊代码来显示不同的信息，例如，<code>$D</code> 用于日期、<code>$T</code> 用于时间。例如，你可以使用 <code>$$</code> 指令来使你的 FreeDOS 命令行看起来像一个 Linux 提示符，来打印一个单个美元符号:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;prompt $$</span></span>
<span class="line"><span>$</span></span></code></pre></div><p>输入 <code>PROMPT /?</code> 来查看一份全部特殊代码的列表。</p><h3 id="q-是-qbasic" tabindex="-1">Q 是 QBASIC <a class="header-anchor" href="#q-是-qbasic" aria-label="Permalink to “Q 是 QBASIC”">​</a></h3><p>FreeDOS 实际上没有 QBASIC 。它是针对 MS-DOS 的专有 BASIC 语言环境。作为备选方案，我们提供一些开放源文件的编译器，包括一些针对 BASIC 编程的编译器。</p><p>FreeBASIC 编译器可以编译外来的大多数 QBASIC 程序。这里有一个简单的 “猜数” 示例:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>dim number as integer</span></span>
<span class="line"><span>dim guess as integer</span></span>
<span class="line"><span>randomize timer</span></span>
<span class="line"><span>number = int( 10 * rnd() ) + 1</span></span>
<span class="line"><span>print &quot;Guess the number from 1 to 10:&quot;</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>input guess</span></span>
<span class="line"><span>if guess &lt; number then print &quot;Too low&quot;</span></span>
<span class="line"><span>if guess &gt; number then print &quot;Too high&quot;</span></span>
<span class="line"><span>loop while guess &lt;&gt; number</span></span>
<span class="line"><span>print &quot;That&#39;s right!&quot;</span></span></code></pre></div><p>使用 <code>FBC</code> 命令来编译 FreeBASIC 程序:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL\\FBC&gt;fbc guess.bas</span></span></code></pre></div><p>这里是这个简单游戏的快速演示:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL\\FBC&gt;guess</span></span>
<span class="line"><span>Guess the number from 1 to 10:</span></span>
<span class="line"><span>? 5</span></span>
<span class="line"><span>Too high</span></span>
<span class="line"><span>? 3</span></span>
<span class="line"><span>Too low</span></span>
<span class="line"><span>? 4</span></span>
<span class="line"><span>That&#39;s right!</span></span></code></pre></div><h3 id="r-是-rem" tabindex="-1">R 是 REM <a class="header-anchor" href="#r-是-rem" aria-label="Permalink to “R 是 REM”">​</a></h3><p>在编写程序时，注释是极好的；注释帮助我们理解程序应该要做什么。可以在批处理文件中使用 <code>REM</code> 来做同样的事。在批处理文件中，在 <code>REM</code> 的后面的任何东西都将会被忽略。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>REM this is a comment</span></span></code></pre></div><h3 id="s-是-set" tabindex="-1">S 是 SET <a class="header-anchor" href="#s-是-set" aria-label="Permalink to “S 是 SET”">​</a></h3><p>FreeDOS 命令行使用一系列称为 <ruby>环境变量<rt>environment variables</rt></ruby> 的变量，让你来自定义你的系统。你可以使用 <code>SET</code> 命令来设置这些变量。例如。使用 <code>DIRCMD</code> 变量来控制 <code>DIR</code> 如何排列目录列表。为设置 <code>DIRCMD</code> 变量，使用 <code>SET</code> 命令:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET DIRCMD=/O:GNE</span></span></code></pre></div><p>这告诉 <code>DIR</code> 先按照目录分组（<code>G</code>）来排序（<code>O</code>）输出，然后再按照名称（<code>N</code>）和扩展名（<code>E</code>）来排序结果。</p><h3 id="t-是-type" tabindex="-1">T 是 TYPE <a class="header-anchor" href="#t-是-type" aria-label="Permalink to “T 是 TYPE”">​</a></h3><p><code>TYPE</code> 命令是最常使用的 DOS 命令之一。<code>TYPE</code> 显示一个文件的内容，类似于在 Linux 上的 <code>cat</code> 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL&gt;type hello.c</span></span>
<span class="line"><span>#include </span></span>
<span class="line"><span></span></span>
<span class="line"><span>int</span></span>
<span class="line"><span>main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>puts(&quot;Hello world&quot;);</span></span>
<span class="line"><span>return 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="u-是-unzip" tabindex="-1">U 是 UNZIP <a class="header-anchor" href="#u-是-unzip" aria-label="Permalink to “U 是 UNZIP”">​</a></h3><p>在 Linux 上，你可能更熟悉标准的 Unix 存档命令: <code>tar</code>。在 FreeDOS 上也有一个 <code>tar</code> 版本（和其它大量的流行的存档程序），但是，在 DOS 上的事实上的标准的存档命令是 <code>ZIP</code> 和 <code>UNZIP</code> 。两者都默认安装在 FreeDOS 1.3 之中。</p><p>比如说，我有一些文件的一个 zip 存档。如果我想提取整个 Zip 文件，我可以只使用 <code>UNZIP</code> 命令，并将 Zip 文件作为命令行的选项来提供。这将在我当前工作目录中开始提取存档文件。除非我正在恢复一些东西的先前版本，我通常不希望覆盖我的当前文件。在这种情况下，我将提取存档到一个新的目录。你可以使用 <code>-d</code>（“<ruby>目标<rt>destination</rt></ruby>”）命令行选项来具体指定目标路径：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\SRC&gt;unzip monkeys.zip -d monkeys.new</span></span>
<span class="line"><span>Warning: TZ environment variable not found, cannot use UTC times!!</span></span>
<span class="line"><span>Archive: monkeys.zip</span></span>
<span class="line"><span>creating: monkeys.new/monkeys/</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/banana.c</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/banana.obj</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/banana.exe</span></span>
<span class="line"><span>creating: monkeys.new/monkeys/putimg/</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/putimg/putimg.c</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/putimg/putimg.obj</span></span>
<span class="line"><span>inflating: monkeys.new/monkeys/putimg/putimg.exe</span></span></code></pre></div>`,102)),n("p",null,[s[1]||(s[1]=a("为学习更多关于 ",-1)),s[2]||(s[2]=n("code",null,"ZIP",-1)),s[3]||(s[3]=a(" 和 ",-1)),s[4]||(s[4]=n("code",null,"UNZIP",-1)),s[5]||(s[5]=a(" 命令的信息，可以阅读 ",-1)),p(e,{href:"https://opensource.com/article/21/6/archive-files-freedos"},{default:i(()=>[...s[0]||(s[0]=[a("如何在 FreeDOS 上存档文件",-1)])]),_:1}),s[6]||(s[6]=a("。",-1))]),s[35]||(s[35]=l(`<h3 id="v-是-ver" tabindex="-1">V 是 VER <a class="header-anchor" href="#v-是-ver" aria-label="Permalink to “V 是 VER”">​</a></h3><p>在 DOS 的古老岁月中，<code>VER</code> 命令会报告你正在运行的 DOS 发行版本，例如：“MS-DOS 5.0.D”。对于 FreeDOS，<code>VER</code> 命令将给予你额外的详细信息，例如 FreeDOS Shell 的版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL&gt;ver</span></span>
<span class="line"><span>FreeCom version 0.85a - WATCOMC - XMS_Swap [Jul 10 2021 19:28:06]</span></span></code></pre></div><p>如果你还想查看 FreeDOS 内核版本和 DOS 兼容性等级，添加 <code>/R</code> 选项:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\DEVEL&gt;ver /r</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FreeCom version 0.85a - WATCOMC - XMS_Swap [Jul 10 2021 19:28:06]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DOS version 7.10</span></span>
<span class="line"><span>FreeDOS kernel 2043 (build 2043 OEM:0xfd) [compiled May 14 2021]</span></span></code></pre></div><h3 id="w-是-which" tabindex="-1">W 是 WHICH <a class="header-anchor" href="#w-是-which" aria-label="Permalink to “W 是 WHICH”">​</a></h3><p>FreeDOS 命令行可以运行来自记录在 <code>PATH</code> 变量中的不同的目录列表的程序。你可以使用 <code>WHICH</code> 命令来准确地识别出程序的位置。只需要输入 <code>WHICH</code> 加上你想要定位的程序名称：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>C:\\&gt;which xcopy</span></span>
<span class="line"><span>xcopy C:\\FREEDOS\\BIN\\XCOPY.EXE</span></span></code></pre></div><h3 id="x-是-xcopy" tabindex="-1">X 是 XCOPY <a class="header-anchor" href="#x-是-xcopy" aria-label="Permalink to “X 是 XCOPY”">​</a></h3><p><code>COPY</code> 命令只能将文件从一个位置复制到另一个位置。如果你想扩大复制的范围来包括一些目录，使用 <code>XCOPY</code> 命令。我通常添加 <code>/E</code> 选项来包含所有的子目录，包括空的子目录，这样，我可以复制整个目录树。这样就可以有效地备份我正在工作的任意工程:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\SRC&gt;xcopy /e monkeys monkeys.bak</span></span>
<span class="line"><span>Does MONKEYS.BAK specify a file name</span></span>
<span class="line"><span>or directory name on the target (File/Directory)? d</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\PUTIMG\\PUTIMG.C</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\PUTIMG\\PUTIMG.OBJ</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\PUTIMG\\PUTIMG.EXE</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\BANANA.C</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\BANANA.OBJ</span></span>
<span class="line"><span>Copying D:\\SRC\\MONKEYS\\BANANA.EXE</span></span>
<span class="line"><span>6 file(s) copied</span></span></code></pre></div><h3 id="y-是-yellow" tabindex="-1">Y 是 Yellow <a class="header-anchor" href="#y-是-yellow" aria-label="Permalink to “Y 是 Yellow”">​</a></h3><p>这不是一个命令，而是关于 DOS 如何显示颜色的有趣的百科知识。如果你仔细留心过 FreeDOS，你可能已经注意到，文本只能获取有限的颜色范围—— 十六种文本颜色、八种背景颜色。</p><p>IBM 的 5153 彩色显示器，通过点亮不同亮度等级的微小的红、绿、蓝荧光点的方式创建 16 种文本颜色和 8 种背景颜色来为用户显示颜色。早期的个人计算机只能以“标准强度”级别来显示背景颜色；只有文本颜色可以使用明亮颜色。</p><p>如果你查看文本颜色，你有黑色、蓝色、绿色、蓝绿色、红色、品红色、橙色和白色。这些颜色的“明亮”版本有亮黑色（暗灰色）、亮蓝色、亮绿色、亮蓝绿色、亮红色、亮品红色、黄色和亮白色。橙色的“明亮”版本有实际上是黄色。没有“亮橙色”。</p>`,15)),n("p",null,[s[8]||(s[8]=a("如果你想要学习更多关于文本颜色的信息，阅读我们关于 ",-1)),p(e,{href:"https://opensource.com/article/21/6/freedos-sixteen-colors"},{default:i(()=>[...s[7]||(s[7]=[a("FreeDOS 为什么有 16 种颜色",-1)])]),_:1}),s[9]||(s[9]=a(" 的文章。",-1))]),s[36]||(s[36]=l(`<h3 id="z-是-zip" tabindex="-1">Z 是 ZIP <a class="header-anchor" href="#z-是-zip" aria-label="Permalink to “Z 是 ZIP”">​</a></h3><p>你可以在 DOS 命令行中使用 <code>ZIP</code> 来创建文件和目录的存档。这是一种很便利的方法：可以备份你的工作，或者发布一个 “软件包” 来在未来的 FreeDOS 发行版中使用。例如，比如说，我想备份我的工程源文件代码，其中包含这些源文件文件:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>D:\\SRC&gt;zip -9r monkeys.zip monkeys</span></span>
<span class="line"><span>zip warning: TZ environment variable not found, cannot use UTC times!!</span></span>
<span class="line"><span>adding: monkeys/ (stored 0%)</span></span>
<span class="line"><span>adding: monkeys/banana.c (deflated 66%)</span></span>
<span class="line"><span>adding: monkeys/banana.obj (deflated 26%)</span></span>
<span class="line"><span>adding: monkeys/banana.exe (deflated 34%)</span></span>
<span class="line"><span>adding: monkeys/putimg/ (stored 0%)</span></span>
<span class="line"><span>adding: monkeys/putimg/putimg.c (deflated 62%)</span></span>
<span class="line"><span>adding: monkeys/putimg/putimg.obj (deflated 29%)</span></span>
<span class="line"><span>adding: monkeys/putimg/putimg.exe (deflated 34%)</span></span></code></pre></div><p>ZIP 支持很多命令行选项来完成不同的工作，但是，我使用最多的命令行选项是： <code>-r</code> 用于递归处理目录和子目录、<code>-9</code> 用于提供尽可能大的压缩比。<code>ZIP</code> 和 <code>UNZIP</code> 使用类 Unix 命令行，因此，你可以在短划线后面合并选项: <code>-9r</code> 将在 Zip 文件中给予最大压缩比和包括子目录。</p>`,4)),n("p",null,[s[11]||(s[11]=a("关于如何使用 ",-1)),s[12]||(s[12]=n("code",null,"ZIP",-1)),s[13]||(s[13]=a(" 和 ",-1)),s[14]||(s[14]=n("code",null,"UNZIP",-1)),s[15]||(s[15]=a(" 命令的更多详细信息，阅读 ",-1)),p(e,{href:"https://opensource.com/article/21/6/archive-files-freedos"},{default:i(()=>[...s[10]||(s[10]=[a("如何在 FreeDOS 上存档文件",-1)])]),_:1}),s[16]||(s[16]=a("。",-1))]),s[37]||(s[37]=n("h3",{id:"新的-freedos-指南",tabindex:"-1"},[a("新的 FreeDOS 指南 "),n("a",{class:"header-anchor",href:"#新的-freedos-指南","aria-label":"Permalink to “新的 FreeDOS 指南”"},"​")],-1)),s[38]||(s[38]=n("p",null,"准备好你的 FreeDOS 旅程的下一步了吗?查看我们的新的电子书，现在开始尝试我们的 FreeDOS !",-1)),n("blockquote",null,[n("p",null,[n("strong",null,[p(e,{href:"https://opensource.com/downloads/guide-using-freedos"},{default:i(()=>[...s[17]||(s[17]=[a("FreeDOS 使用指南",-1)])]),_:1})])])]),n("blockquote",null,[n("p",null,[n("strong",null,[p(e,{href:"https://opensource.com/downloads/advanced-freedos"},{default:i(()=>[...s[18]||(s[18]=[a("深入 FreeDOS 高级指南",-1)])]),_:1})])])]),s[39]||(s[39]=n("p",null,[n("em",null,"（题图：MJ/0b21dcc8-4c8d-457b-9e0d-fbbe5dd08c60）")],-1)),s[40]||(s[40]=n("hr",null,null,-1)),n("p",null,[s[20]||(s[20]=a("via: ",-1)),p(e,{href:"https://opensource.com/article/22/6/26-freedos-commands"},{default:i(()=>[...s[19]||(s[19]=[a("https://opensource.com/article/22/6/26-freedos-commands",-1)])]),_:1})]),n("p",null,[s[25]||(s[25]=a("作者：",-1)),p(e,{href:"https://opensource.com/users/jim-hall"},{default:i(()=>[...s[21]||(s[21]=[a("Jim Hall",-1)])]),_:1}),s[26]||(s[26]=a(" 选题：",-1)),p(e,{href:"https://github.com/lkxed"},{default:i(()=>[...s[22]||(s[22]=[a("lkxed",-1)])]),_:1}),s[27]||(s[27]=a(" 译者：",-1)),p(e,{href:"https://github.com/robsean"},{default:i(()=>[...s[23]||(s[23]=[a("robsean",-1)])]),_:1}),s[28]||(s[28]=a(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...s[24]||(s[24]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[31]||(s[31]=a("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[29]||(s[29]=[a("LCTT",-1)])]),_:1}),s[32]||(s[32]=a(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:i(()=>[...s[30]||(s[30]=[a("Linux中国",-1)])]),_:1}),s[33]||(s[33]=a(" 荣誉推出",-1))])])}const y=t(r,[["render",h]]);export{C as __pageData,y as default};
