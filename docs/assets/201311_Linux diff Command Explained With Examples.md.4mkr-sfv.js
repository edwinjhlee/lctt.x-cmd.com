import{_ as l,a0 as p,w as a,s as o,ao as r,I as d,x as e,a1 as f,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"举例说明Linux diff 命令 | LCTT x X-CMD","titleTemplate":false,"description":"举例说明Linux diff 命令 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"举例说明Linux diff 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"举例说明Linux diff 命令 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/Linux diff Command Explained With Examples","title":"举例说明Linux diff 命令","tag":"201311","desc":""},"relativePath":"201311/Linux diff Command Explained With Examples.md","filePath":"[post].md"}'),s={name:"201311/Linux diff Command Explained With Examples.md"};function m(x,i,u,g,c,h){const n=p("Link");return a(),o("div",null,[i[14]||(i[14]=r(`<h1 id="举例说明linux-diff-命令" tabindex="-1">举例说明Linux diff 命令 <a class="header-anchor" href="#举例说明linux-diff-命令" aria-label="Permalink to “举例说明Linux diff 命令”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/linux-diff-command.png" alt=""></p><p>在比较文件的时候，通常会用基于GUI的软件。很少有人真正会为了这个目的使用命令行工具。虽然说使用命令行来比较文件/目录并不像一件小事儿那样容易，但是如果你是一个Linux使用者，那么我想你应该知道如何通过命令行比较文件，因为一旦使用了它，你会认为它绝对是一个快速的方法。</p><p>在本篇中，我们将通过一些实例来学习如何使用diff命令。</p><h3 id="linux-diff-命令" tabindex="-1">Linux diff 命令 <a class="header-anchor" href="#linux-diff-命令" aria-label="Permalink to “Linux diff 命令”">​</a></h3><p>让我们通过一些实际的例子理解diff命令。</p><p>假设我们有两个文件(file1 和 file2)：</p><pre><code>$ cat file1
Hi,
Hello,
How are you?
I am fine,
Thank you.


$ cat file2
Hello,
Hi,
How are you?
I am fine.
</code></pre><p>你可以看见两个文件有些小的不同。现在，让我们看看diff命令如何找出两者的不同的。</p><p>像这样运行diff命令:</p><pre><code>$ diff file1 file2
1d0
&lt; Hi, 
2a2 
&gt; Hi,
4,5c4
&lt; I am fine,
&lt; Thank you.
--- 
&gt; I am fine.
</code></pre><p>你可以看见diff后面跟了两个文件的名字作为命令行的参数，并且它在输出中生成了差异比较。输出并不容易理解。理由是，这是被计算机使用的而不是为了人类。尽管如此，让我们一步步解码输出：</p><p><strong>注意</strong> – 在下面的文本中，file1和file2将被当作旧文件和新文件。</p><pre><code>1d0
&lt; Hi,
</code></pre><p>这里，1d0这一行意味着旧文件的第一行应该被删除(d)以使两个文件的第一行同步。旧文件中需要被删除的行以&#39;&lt;&#39;标记。</p><pre><code>2a2
&gt; Hi,
</code></pre><p>这里，2a2行意味着新文件中的第二行应该加到旧文件的第二行后。要添加的行显示在输出的下一行用&#39;&gt;&#39;标记。</p><pre><code>4,5c4
&lt; I am fine,
&lt; Thank you.
---
&gt; I am fine.
</code></pre><p>这里，4,5c4这一行意味着在旧文件中的4到5行现在已被改变并且需要用新文件中的第4行代替。添加和删除的行分别用&#39;&gt;&#39;和&#39;&lt;&#39;表示。</p><p>那么，来总结一下,</p><ul><li>首先diff命令的第一个参数被视为旧文件而第二个参数被视为新文件。</li><li>像1d0、2a2、4,5c4这种表达式可以用语法解码为 <strong>[旧文件的行号或者行的范围][行为][新文件的行号或者行的范围]</strong>。这里的&#39;行为&#39;可以是追加,删除或者改变替换。</li><li>&#39;&lt;&#39;代表删除的行，而&#39;&gt;&#39;代表添加的行。</li></ul><p>除了文件外，diff命令还可以比较两个目录。让我们通过一个例子学习。</p><p>这里是&#39;new_dir&#39;目录包含的内容:</p><pre><code>$ ls new_dir/
file file2 frnd frnd1.cpp log1.txt log3.txt log5.txt
file1 file name with spaces frnd1 frnd.cpp log2.txt log4.txt
</code></pre><p>这是&#39;orig_dir&#39;目录含有的内容：(译注：原文为and here are the contents of a directory named ‘old_dir’ ，其中&#39;old_dir&#39;应为笔误。)</p><pre><code>$ ls orig_dir/
file1 file name with spaces frnd1 frnd.cpp log2.txt log4.txt test
file2 frnd frnd1.cpp log1.txt log3.txt log5.txt
</code></pre><p>下面是diff命令执行后的输出：</p><pre><code>$ diff new_dir/ orig_dir/
Only in new_dir/: file
Only in orig_dir/: test
</code></pre><p>你可以看到当diff命令被用来比较这两个目录时，很容易就会显示两个文件中缺失的文件。</p><p>下面是一些在命令行下常用的选项:</p><h3 id="_1-用-i-忽略大小写" tabindex="-1">1. 用 -i 忽略大小写 <a class="header-anchor" href="#_1-用-i-忽略大小写" aria-label="Permalink to “1. 用 -i 忽略大小写”">​</a></h3><p>如果两个文件含有相同的文本但是大小写不同，diff命令仍会默认报告它不同。</p><p>比如:</p><pre><code>$ cat file1
HI

$ cat file2
hi

$ diff file1 file2
1c1
&lt; HI
---
&gt; hi
</code></pre><p>你可以看见diff命令在输出中报告了大小写不同。</p><p>要去除这个默认行为，使用-i选项。</p><p>以下是个例子:</p><pre><code>$ diff -i file1 file2
$
</code></pre><p>这样你可以看到没有生成输出，这是当两个文件相同时的默认行为。</p><h3 id="_2-用-s-选项报告两个文件相同" tabindex="-1">2. 用 -s 选项报告两个文件相同 <a class="header-anchor" href="#_2-用-s-选项报告两个文件相同" aria-label="Permalink to “2. 用 -s 选项报告两个文件相同”">​</a></h3><p>在例子1的后面，我们看到如果文件相同diff不会生成报告。虽然这个默认行为不错但是它仍可能会造成很大疑惑，特别对于新手而言。因此，如果你像样diff命令明确地报告两个文件不同，那么就使用-s命令选项。</p><p>来举个例子:</p><pre><code>$ diff -is file1 file2
Files file1 and file2 are identical
</code></pre><p>你可以看到我加了-s选项在后面的例子中，这次diff命令会明确地报告两个文件是相同的。</p><h3 id="_3-使用-b-忽略空格" tabindex="-1">3. 使用 -b 忽略空格 <a class="header-anchor" href="#_3-使用-b-忽略空格" aria-label="Permalink to “3. 使用 -b 忽略空格”">​</a></h3><p>另外一个常用的是diff报告文件存在不同数量的空格。</p><p>举例说明：</p><pre><code>$ cat file1
Hi, how are you?

$ cat file2
Hi, how are  you?
</code></pre><p>观察这两个文件唯一的不同是file2中&#39;are&#39;和&#39;you&#39;之间额外的空格。现在，当使用diff命令比较两个文件时，输出如下：</p><pre><code>$ diff file1 file2
1c1
&lt; Hi, how are you?
---
&gt; Hi, how are  you?
</code></pre><p>因此你可以看到diff命令报告了不同。但是如果你想要忽略这些空格，使用 -b 选项。</p><pre><code>$ diff -b file1 file2
$
</code></pre><p>这样你可以看到由于-b选项，diff命令报告这两个文件是相同的。</p>`,53)),d("p",null,[i[1]||(i[1]=e("diff命令还提供了更多的命令行选项。阅读",-1)),f(n,{href:"http://unixhelp.ed.ac.uk/CGI/man-cgi?diff"},{default:t(()=>[...i[0]||(i[0]=[e("man page",-1)])]),_:1}),i[2]||(i[2]=e("来获取完整的列表。",-1))]),i[15]||(i[15]=d("hr",null,null,-1)),d("p",null,[i[4]||(i[4]=e("via: ",-1)),f(n,{href:"http://linoxide.com/linux-command/linux-diff-command-examples/"},{default:t(()=>[...i[3]||(i[3]=[e("http://linoxide.com/linux-command/linux-diff-command-examples/",-1)])]),_:1})]),d("p",null,[i[7]||(i[7]=e("译者：",-1)),f(n,{href:"https://github.com/geekpi"},{default:t(()=>[...i[5]||(i[5]=[e("geekpi",-1)])]),_:1}),i[8]||(i[8]=e(" 校对：",-1)),f(n,{href:"https://github.com/carolinewuyan"},{default:t(()=>[...i[6]||(i[6]=[e("Caroline",-1)])]),_:1})]),d("p",null,[i[11]||(i[11]=e("本文由 ",-1)),f(n,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...i[9]||(i[9]=[e("LCTT",-1)])]),_:1}),i[12]||(i[12]=e(" 原创翻译，",-1)),f(n,{href:"http://linux.cn/"},{default:t(()=>[...i[10]||(i[10]=[e("Linux中国",-1)])]),_:1}),i[13]||(i[13]=e(" 荣誉推出",-1))])])}const $=l(s,[["render",m]]);export{C as __pageData,$ as default};
