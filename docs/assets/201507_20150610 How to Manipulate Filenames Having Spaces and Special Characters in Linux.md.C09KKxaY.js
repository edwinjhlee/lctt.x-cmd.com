import{_ as c,a0 as d,w as i,s as l,ao as p,I as o,x as t,a1 as r,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"Linux 下如何处理包含空格和特殊字符的文件名 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 下如何处理包含空格和特殊字符的文件名 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 下如何处理包含空格和特殊字符的文件名 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 下如何处理包含空格和特殊字符的文件名 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150610 How to Manipulate Filenames Having Spaces and Special Characters in Linux","title":"Linux 下如何处理包含空格和特殊字符的文件名","tag":"201507","desc":""},"relativePath":"201507/20150610 How to Manipulate Filenames Having Spaces and Special Characters in Linux.md","filePath":"[post].md"}'),h={name:"201507/20150610 How to Manipulate Filenames Having Spaces and Special Characters in Linux.md"};function x(s,e,b,u,m,$){const a=d("Link");return i(),l("div",null,[e[19]||(e[19]=p(`<h1 id="linux-下如何处理包含空格和特殊字符的文件名" tabindex="-1">Linux 下如何处理包含空格和特殊字符的文件名 <a class="header-anchor" href="#linux-下如何处理包含空格和特殊字符的文件名" aria-label="Permalink to “Linux 下如何处理包含空格和特殊字符的文件名”">​</a></h1><p>我们经常会看到文件名和文件夹名。大多数时候文件/文件夹的名字和内容相关并以数字和字母开头。字母加数字的文件名最常见，应用也很广泛，但总会需要处理一些包含特殊字符的文件名/文件夹名。</p><p>** 注意 **：我们可能有各种类型的文件，但是为了简单以及方便实现，在本文中我们只用文本文件（.txt）做演示。</p><p>最常见的文件名例子：</p><pre><code>abc.txt
avi.txt
debian.txt
...
</code></pre><p>数字文件名例子：</p><pre><code>121.txt
3221.txt
674659.txt
...
</code></pre><p>字母数字文件名例子：</p><pre><code>eg84235.txt
3kf43nl2.txt
2323ddw.txt
...
</code></pre><p>包含特殊字符的文件名的例子，并不常见：</p><pre><code>#232.txt
#bkf.txt
#bjsd3469.txt
#121nkfd.txt
-2232.txt
-fbjdew.txt
-gi32kj.txt
--321.txt
--bk34.txt
...
</code></pre><p>一个显而易见的问题是 - 在这个星球上有谁会创建和处理包含井号<code>(#)</code>，分号<code>(;)</code>，破折号<code>(-)</code>或其他特殊字符的文件/文件夹啊。</p><p>我和你想的一样，这种文件名确实不常见，不过在你必须得处理这种文件名的时候你的 shell 也不应该出错或罢工。而且技术上来说，Linux 下的一切比如文件夹、驱动器或其他所有的都被当作文件处理。</p><h3 id="处理名字包含破折号-的文件" tabindex="-1">处理名字包含破折号(-)的文件 <a class="header-anchor" href="#处理名字包含破折号-的文件" aria-label="Permalink to “处理名字包含破折号(-)的文件”">​</a></h3><p>创建以破折号<code>(-)</code>开头的文件，比如 -abx.txt。</p><pre><code>$ touch -abc.txt
</code></pre><h4 id="测试输出" tabindex="-1">测试输出 <a class="header-anchor" href="#测试输出" aria-label="Permalink to “测试输出”">​</a></h4><pre><code>touch: invalid option -- &#39;b&#39;
Try &#39;touch --help&#39; for more information.
</code></pre><p>出现上面错误的原因是，shell 把破折号<code>(-)</code>之后的内容认作参数了，而很明显没有这样的参数，所以报错。</p><p>要解决这个问题，我们得告诉 Bash shell（是的，这里以及本文后面的大多数例子都是基于 BASH 环境）不要将特殊字符（这里是破折号）后的字符解释为参数。</p><p>有两种方法解决这个错误：</p><pre><code>$ touch -- -abc.txt		[方法 #1]
$ touch ./-abc.txt		[方法 #2]
</code></pre>`,22)),o("p",null,[e[1]||(e[1]=t("你可以通过运行命令 ls 或 ",-1)),r(a,{href:"https://linux.cn/article-5349-1.html"},{default:n(()=>[...e[0]||(e[0]=[t("ls -l",-1)])]),_:1}),e[2]||(e[2]=t(" 列出详细信息来检查通过上面两种方式创建的文件。",-1))]),e[20]||(e[20]=p(`<pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 11:05 -abc.txt
</code></pre><p>要编辑上述文件可以这样：</p><pre><code>$ nano -- -abc.txt 
或者 
$ nano ./-abc.txt 
</code></pre><p><strong>注意</strong>：你可以将 nano 替换为任何其他你喜欢的编辑器比如说 vim：</p><pre><code>$ vim -- -abc.txt 
或者 
$ vim ./-abc.txt 
</code></pre><p>如果只是简单地移动文件可以这样：</p><pre><code>$ mv -- -abc.txt -a.txt
或者
$ mv -- -a.txt -abc.txt
</code></pre><p>删除这种文件，可以这样：</p><pre><code>$ rm -- -abc.txt
或者
$ rm ./-abc.txt 
</code></pre><p>如果一个目录下有大量这种名字包含破折号的文件，要一次全部删除的话，可以这样：</p><pre><code>$ rm ./-*
</code></pre><p><strong>重要：</strong></p><ol><li><p>上面讨论的规则可以同样应用于名字中包含任意数量以及任意位置的连接符号的文件。就是说，-a-b-c.txt，ab-c.txt，abc-.txt，等等。</p></li><li><p>上面讨论的规则可以同样应用于名字中包含任意数量以及任意位置连接符号的文件夹，除了一种情况，在删除一个文件夹的时候你得这样使用<code>rm -rf</code>：</p><p>$ rm -rf -- -abc 或者 $ rm -rf ./-abc</p></li></ol><h3 id="处理名字包含井号-的文件" tabindex="-1">处理名字包含井号(#)的文件 <a class="header-anchor" href="#处理名字包含井号-的文件" aria-label="Permalink to “处理名字包含井号(#)的文件”">​</a></h3><p>符号<code>#</code>在 BASH 里有非常特别的含义。<code>#</code>之后的一切都会被认为是评论，因此会被 BASH 忽略。</p><p><strong>通过例子来加深理解：</strong></p><p>创建一个名字是 #abc.txt 的文件：</p><pre><code>$ touch #abc.txt
</code></pre><h4 id="测试输出-1" tabindex="-1">测试输出 <a class="header-anchor" href="#测试输出-1" aria-label="Permalink to “测试输出”">​</a></h4><pre><code>touch: missing file operand
Try &#39;touch --help&#39; for more information.
</code></pre>`,20)),o("p",null,[e[4]||(e[4]=t("出现上面错误的原因是，BASH 将 #abc.txt 解释为评论而忽略了。所以",-1)),r(a,{href:"http://www.tecmint.com/8-pratical-examples-of-linux-touch-command/"},{default:n(()=>[...e[3]||(e[3]=[t("命令 touch",-1)])]),_:1}),e[5]||(e[5]=t("没有收到任何文件作为参数，所以导致这个错误。",-1))]),e[21]||(e[21]=p(`<p>要解决这个问题，你可能需要告诉 BASH 不要将 # 解释为评论。</p><pre><code>$ touch ./#abc.txt
或者
$ touch &#39;#abc.txt&#39;
</code></pre><p>检查刚创建的文件：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:14 #abc.txt
</code></pre><p>现在创建名字中除了开头的其他地方包含 # 的文件。</p><pre><code>$ touch ./a#bc.txt
$ touch ./abc#.txt    
或者
$ touch &#39;a#bc.txt&#39;
$ touch &#39;abc#.txt&#39;
</code></pre><p>运行 ‘ls -l‘ 来检查：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:16 a#bc.txt
-rw-r--r-- 1 avi avi 0 Jun  8 12:16 abc#.txt
</code></pre><p>如果同时创建两个文件（比如 a 和 #bc）会怎么样：</p><pre><code>$ touch a.txt #bc.txt
</code></pre><p>检查刚创建的文件：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:18 a.txt
</code></pre><p>很明显上面的例子中只创建了文件 <code>a</code> 而文件 <code>#bc</code> 被忽略了。对于上面的情况我们可以这样做，</p><pre><code>$ touch a.txt ./#bc.txt
或者
$ touch a.txt &#39;#bc.txt&#39;
</code></pre><p>检查一下：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 12:20 a.txt
-rw-r--r-- 1 avi avi 0 Jun  8 12:20 #bc.txt
</code></pre><p>可以这样移动文件：</p><pre><code>$ mv ./#bc.txt ./#cd.txt
或者
$ mv &#39;#bc.txt&#39; &#39;#cd.txt&#39;
</code></pre><p>这样拷贝：</p><pre><code>$ cp ./#cd.txt ./#de.txt
或者
$ cp &#39;#cd.txt&#39; &#39;#de.txt&#39;
</code></pre><p>可以使用你喜欢的编辑器来编辑文件：</p><pre><code>$ vi ./#cd.txt
或者
$ vi &#39;#cd.txt&#39;

$ nano ./#cd.txt
或者
$ nano &#39;#cd.txt&#39;
</code></pre><p>这样删除：</p><pre><code>$ rm ./#bc.txt 
或者
$ rm &#39;#bc.txt&#39;
</code></pre><p>要删除所有以井号（#）开头的文件，可以这样：</p><pre><code># rm ./#*
</code></pre><h3 id="处理名字包含分号-的文件" tabindex="-1">处理名字包含分号(;)的文件 <a class="header-anchor" href="#处理名字包含分号-的文件" aria-label="Permalink to “处理名字包含分号(;)的文件”">​</a></h3><p>如果你还不知道的话，分号在 BASH 里起到命令分隔的作用，其他 shell 可能也是一样的。分号作为分隔符可以让你一次执行几个命令。你碰到过名字包含分号的文件吗？如果没有的话，这里有例子。</p><p>创建一个名字包含分号的文件。</p><pre><code>$ touch ;abc.txt
</code></pre><h4 id="测试输出-2" tabindex="-1">测试输出 <a class="header-anchor" href="#测试输出-2" aria-label="Permalink to “测试输出”">​</a></h4><pre><code>touch: missing file operand
Try &#39;touch --help&#39; for more information.
bash: abc.txt: command not found
</code></pre><p>出现上面错误的原因是，在运行上面命令的时候 BASH 会把 touch 解释为一个命令但是在分号前没有任何文件参数，所以报告错误。然后报告的另一个错误找不到命令 <code>abc.txt</code>，只是因为在分号后 BASH 会期望另一个新的命令，而 <code>abc.txt</code> 并不是一个命令。</p><p>要解决这个问题，我们得告诉 BASH 不要将分号解释为命令分隔符，例如：</p><pre><code>$ touch ./&#39;;abc.txt&#39;
或者
$ touch &#39;;abc.txt&#39;
</code></pre><p><strong>注意</strong>：我们将文件名用单引号 &#39;&#39; 包含起来。这样可以告诉 BASH 分号 ; 是文件名的一部分而不是命令分隔符。</p><p>对名字包含分号的文件和文件夹的其他操作（就是，拷贝、移动、删除）可以直接将名字用单引号包含起来就好了。</p><h3 id="处理名字包含其他特殊字符的文件-文件夹" tabindex="-1">处理名字包含其他特殊字符的文件/文件夹 <a class="header-anchor" href="#处理名字包含其他特殊字符的文件-文件夹" aria-label="Permalink to “处理名字包含其他特殊字符的文件/文件夹”">​</a></h3><h4 id="文件名包含加号" tabindex="-1">文件名包含加号 (+) <a class="header-anchor" href="#文件名包含加号" aria-label="Permalink to “文件名包含加号 (+)”">​</a></h4><p>不需要任何特殊处理，按平时的方式做就好了，比如下面测试的文件名。</p><pre><code>$ touch +12.txt 
</code></pre><h4 id="文件名包含美元符" tabindex="-1">文件名包含美元符 ($) <a class="header-anchor" href="#文件名包含美元符" aria-label="Permalink to “文件名包含美元符 ($)”">​</a></h4><p>你需要将文件名用单引号括起来，像处理分号那样的方式。然后就很简单了。</p><pre><code>$ touch &#39;$12.txt&#39;
</code></pre><h4 id="文件名包含百分号" tabindex="-1">文件名包含百分号 (%) <a class="header-anchor" href="#文件名包含百分号" aria-label="Permalink to “文件名包含百分号 (%)”">​</a></h4><p>不需要任何特殊处理，当作一个普通文件就可以了。</p><pre><code>$ touch %12.txt
</code></pre><h4 id="文件名包含星号" tabindex="-1">文件名包含星号 (*) <a class="header-anchor" href="#文件名包含星号" aria-label="Permalink to “文件名包含星号 (*)”">​</a></h4><p>需要用单引号括起来或使用反斜杠转义。（LCTT 译注：此处原文有误，已修改。）</p><pre><code>$ touch *12.txt
</code></pre><p>注意：当你需要删除星号开头的文件时，千万不要用类似下面的命令。</p><pre><code>$ rm *
或者
$ rm -rf *
</code></pre><p>而是用这样的命令，(LCTT 译注：此处原文有误，已修改）</p><pre><code>$ rm ./&#39;*.txt&#39;
</code></pre><h4 id="文件名包含叹号" tabindex="-1">文件名包含叹号 (!) <a class="header-anchor" href="#文件名包含叹号" aria-label="Permalink to “文件名包含叹号 (!)”">​</a></h4><p>只要将文件名用单引号括起来，其他的就一样了。</p><pre><code>$ touch &#39;!12.txt&#39;
</code></pre><h4 id="文件名包含小老鼠" tabindex="-1">文件名包含小老鼠 (@) <a class="header-anchor" href="#文件名包含小老鼠" aria-label="Permalink to “文件名包含小老鼠 (@)”">​</a></h4><p>没有什么特别的，可以将名字包含小老鼠的文件当作普通文件。</p><pre><code>$ touch &#39;@12.txt&#39;
</code></pre><h4 id="文件名包含" tabindex="-1">文件名包含 ^ <a class="header-anchor" href="#文件名包含" aria-label="Permalink to “文件名包含 ^”">​</a></h4><p>不需要特殊处理。可以将名字包含 ^ 的文件当作普通文件。</p><pre><code>$ touch ^12.txt
</code></pre><h4 id="文件名包含-1" tabindex="-1">文件名包含 (&amp;) <a class="header-anchor" href="#文件名包含-1" aria-label="Permalink to “文件名包含 (&amp;)”">​</a></h4><p>将文件名用单引号括起来，然后就可以操作了。</p><pre><code>$ touch &#39;&amp;12.txt&#39;
</code></pre><h4 id="文件名包含括号" tabindex="-1">文件名包含括号 () <a class="header-anchor" href="#文件名包含括号" aria-label="Permalink to “文件名包含括号 ()”">​</a></h4><p>如果文件名包含括号，你需要将文件名用单引号括起来。</p><pre><code>$ touch &#39;(12.txt)&#39;
</code></pre><h4 id="文件名包含花括号" tabindex="-1">文件名包含花括号 {} <a class="header-anchor" href="#文件名包含花括号" aria-label="Permalink to “文件名包含花括号 {}”">​</a></h4><p>用单引号括起来或使用反斜杠转义。（LCTT 译注：此处原文有误，已修改）</p><pre><code>$ touch &#39;{12.txt}&#39;
</code></pre><h4 id="文件名包含尖括号" tabindex="-1">文件名包含尖括号 &lt;&gt; <a class="header-anchor" href="#文件名包含尖括号" aria-label="Permalink to “文件名包含尖括号 &lt;&gt;”">​</a></h4><p>名字包含尖括号的文件需要用单引号括起来。</p><pre><code>$ touch &#39;&lt;12.txt&gt;&#39;
</code></pre><h4 id="文件名包含方括号" tabindex="-1">文件名包含方括号 [ ] <a class="header-anchor" href="#文件名包含方括号" aria-label="Permalink to “文件名包含方括号 [ ]”">​</a></h4><p>用单引号括起来或使用反斜杠转义。（LCTT 译注：此处原文有误，已修改）</p><pre><code>$ touch &#39;[12.txt]&#39;
</code></pre><h4 id="文件名包含下划线" tabindex="-1">文件名包含下划线 (_) <a class="header-anchor" href="#文件名包含下划线" aria-label="Permalink to “文件名包含下划线 (_)”">​</a></h4><p>这个非常普遍，不需要特殊对待。当作普通文件随意处理。</p><pre><code>$ touch _12.txt
</code></pre><h4 id="文件名包含等号" tabindex="-1">文件名包含等号 (=) <a class="header-anchor" href="#文件名包含等号" aria-label="Permalink to “文件名包含等号 (=)”">​</a></h4><p>用单引号括起来或使用反斜杠转义。（LCTT 译注：此处原文有误，已修改）</p><pre><code>$ touch &#39;=12.txt&#39;
</code></pre><h4 id="处理反斜杠" tabindex="-1">处理反斜杠 () <a class="header-anchor" href="#处理反斜杠" aria-label="Permalink to “处理反斜杠 ()”">​</a></h4><p>反斜杠会告诉 shell 忽略后面字符的特殊含义。你必须将文件名用单引号括起来，就像处理分号那样。其他的就没什么了。</p><pre><code>$ touch &#39;\\12.txt&#39;
</code></pre><h4 id="包含斜杠的特殊情形" tabindex="-1">包含斜杠的特殊情形 <a class="header-anchor" href="#包含斜杠的特殊情形" aria-label="Permalink to “包含斜杠的特殊情形”">​</a></h4><p>除非你的文件系统有问题，否则你不能创建名字包含斜杠的文件。没办法转义斜杠。</p><p>所以如果你能创建类似 ‘/12.txt’ 或者 ‘b/c.txt’ 这样的文件，那要么你的文件系统有问题，或者支持 Unicode，这样你可以创建包含斜杠的文件。只是这样并不是真的斜杠，而是一个看起来像斜杠的 Unicode 字符。</p><h4 id="文件名包含问号" tabindex="-1">文件名包含问号 (?) <a class="header-anchor" href="#文件名包含问号" aria-label="Permalink to “文件名包含问号 (?)”">​</a></h4><p>用单引号括起来或使用反斜杠转义。（LCTT 译注：此处原文有误，已修改）</p><pre><code>$ touch &#39;?12.txt&#39;
</code></pre><h4 id="文件名包含点" tabindex="-1">文件名包含点 (.) <a class="header-anchor" href="#文件名包含点" aria-label="Permalink to “文件名包含点 (.)”">​</a></h4><p>在 Linux 里以点 <code>(.)</code> 开头的文件非常特别，被称为点文件。它们通常是隐藏的配置文件或系统文件。你需要使用 ls 命令的 ‘-a‘ 或 ‘-A‘ 开关来查看这种文件。</p><p>创建，编辑，重命名和删除这种文件很直接。</p><pre><code>$ touch .12.txt
</code></pre><p>注意：在 Linux 里你可能碰到名字包含许多点 <code>(.)</code> 的文件。不像其他操作系统，文件名里的点并不意味着分隔名字和扩展后缀。你可以创建名字包含多个点的文件：</p><pre><code>$ touch 1.2.3.4.5.6.7.8.9.10.txt
</code></pre><p>检查一下：</p><pre><code>$ ls -l

total 0
-rw-r--r-- 1 avi avi 0 Jun  8 14:32 1.2.3.4.5.6.7.8.9.10.txt
</code></pre><h4 id="文件名包含逗号" tabindex="-1">文件名包含逗号 (,) <a class="header-anchor" href="#文件名包含逗号" aria-label="Permalink to “文件名包含逗号 (,)”">​</a></h4><p>你可以在文件名中使用逗号，可以有任意多个而不用特殊对待。就像平时普通名字文件那样处理。</p><pre><code>$ touch ,12.txt
或者
$ touch ,12,.txt
</code></pre><h4 id="文件名包含冒号" tabindex="-1">文件名包含冒号 (😃 <a class="header-anchor" href="#文件名包含冒号" aria-label="Permalink to “文件名包含冒号 (”">​</a></h4><p>用单引号括起来或使用反斜杠转义。（LCTT 译注：此处原文有误，已修改）</p><pre><code>$ touch &#39;:12.txt&#39;
或者
$ touch &#39;:12:.txt&#39;
</code></pre><h4 id="文件名包含引号-单引号和双引号" tabindex="-1">文件名包含引号（单引号和双引号） <a class="header-anchor" href="#文件名包含引号-单引号和双引号" aria-label="Permalink to “文件名包含引号（单引号和双引号）”">​</a></h4><p>要在文件名里使用引号，我们需要使用交替规则。例如，如果你需要在文件名里使用单引号，那就用双引号把文件名括起来。而如果你需要在文件名里使用双引号，那就用单引号把文件名括起来。（LCTT 译注：或者如果单引号和双引号混杂的情况，你也可以用反斜杠转义。）</p><pre><code>$ touch &quot;15&#39;.txt&quot;

以及

$ touch &#39;15&quot;.txt&#39;
</code></pre><h4 id="文件名包含波浪号" tabindex="-1">文件名包含波浪号 (~) <a class="header-anchor" href="#文件名包含波浪号" aria-label="Permalink to “文件名包含波浪号 (~)”">​</a></h4><p>Linux 下一些像 emacs 这样的文本编辑器在编辑文件的时候会创建备份文件。这个备份文件的名字是在原文件名后面附加一个波浪号。你可以在文件名任意位置使用波浪号，例如：</p><pre><code>$ touch ~1a.txt
或者
$touch 2b~.txt
</code></pre><h4 id="文件名包含空格" tabindex="-1">文件名包含空格 <a class="header-anchor" href="#文件名包含空格" aria-label="Permalink to “文件名包含空格”">​</a></h4><p>创建名字的字符/单词之间包含空格的文件，比如 “hi my name is avishek.txt”。</p><p>最好不要在文件名里使用空格，如果你必须要分隔可读的名字，可以使用下划线或横杠。不过，你还是需要创建这样的文件的话，你可以用反斜杠来转义下一个字符。要创建上面名字的文件可以这样做。</p><pre><code>$ touch hi\\ my\\ name\\ is\\ avishek.txt

hi my name is avishek.txt
</code></pre><p>我已经尝试覆盖你可能碰到的所有情况。上面大多数测试都在 BASH Shell 里完成，可能在其他 shell 下会有差异。</p><p>如果你觉得我遗漏了什么（这很正常也符合人性），请把你的建议发表到下面的评论里。保持联系，多评论。不要走开！求点赞求分享求扩散！</p><hr>`,120)),o("p",null,[e[7]||(e[7]=t("via: ",-1)),r(a,{href:"http://www.tecmint.com/manage-linux-filenames-with-special-characters/"},{default:n(()=>[...e[6]||(e[6]=[t("http://www.tecmint.com/manage-linux-filenames-with-special-characters/",-1)])]),_:1})]),o("p",null,[e[11]||(e[11]=t("作者：",-1)),r(a,{href:"http://www.tecmint.com/author/avishek/"},{default:n(()=>[...e[8]||(e[8]=[t("Avishek Kumar",-1)])]),_:1}),e[12]||(e[12]=t(" 译者：",-1)),r(a,{href:"https://github.com/zpl1025"},{default:n(()=>[...e[9]||(e[9]=[t("zpl1025",-1)])]),_:1}),e[13]||(e[13]=t(" 校对：",-1)),r(a,{href:"https://github.com/wxy"},{default:n(()=>[...e[10]||(e[10]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[16]||(e[16]=t("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[14]||(e[14]=[t("LCTT",-1)])]),_:1}),e[17]||(e[17]=t(" 原创翻译，",-1)),r(a,{href:"https://linux.cn/"},{default:n(()=>[...e[15]||(e[15]=[t("Linux中国",-1)])]),_:1}),e[18]||(e[18]=t(" 荣誉推出",-1))])])}const v=c(h,[["render",x]]);export{k as __pageData,v as default};
