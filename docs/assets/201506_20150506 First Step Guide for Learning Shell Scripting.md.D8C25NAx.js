import{_ as l,a0 as a,w as p,s as h,ao as d,I as s,x as t,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"Shell脚本编程初体验 | LCTT x X-CMD","titleTemplate":false,"description":"Shell脚本编程初体验 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell脚本编程初体验 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell脚本编程初体验 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150506 First Step Guide for Learning Shell Scripting","title":"Shell脚本编程初体验","tag":"201506","desc":""},"relativePath":"201506/20150506 First Step Guide for Learning Shell Scripting.md","filePath":"[post].md"}'),i={name:"201506/20150506 First Step Guide for Learning Shell Scripting.md"};function c(u,o,g,m,b,x){const e=a("Link");return p(),h("div",null,[o[13]||(o[13]=d(`<h1 id="shell脚本编程初体验" tabindex="-1">Shell脚本编程初体验 <a class="header-anchor" href="#shell脚本编程初体验" aria-label="Permalink to “Shell脚本编程初体验”">​</a></h1><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/myfirstshellscript.jpg" alt=""></p><p>通常，当人们提到“shell脚本语言”时，浮现在他们脑海中是bash，ksh，sh或者其它相类似的linux/unix脚本语言。脚本语言是与计算机交流的另外一种途径。使用图形化窗口界面（不管是windows还是linux都无所谓）用户可以移动鼠标并点击各种对象，比如按钮、列表、选框等等。但这种方式在每次用户想要计算机/服务器完成相同任务时（比如说批量转换照片，或者下载新的电影、mp3等）却是十分不方便。要想让所有这些事情变得简单并且自动化，我们可以使用shell脚本。</p><p>某些编程语言，像pascal、foxpro、C、java之类，在执行前需要先进行编译。它们需要合适的编译器来让我们的代码完成某个任务。</p><p>而其它一些编程语言，像php、javascript、visualbasic之类，则不需要编译器，因此它们需要解释器，而我们不需要编译代码就可以运行程序。</p><p>shell脚本也像解释器一样，但它通常用于调用外部已编译的程序。然后，它会捕获输出结果、退出代码并根据情况进行处理。</p><p>Linux世界中最为流行的shell脚本语言之一，就是bash。而我认为（这是我自己的看法）原因在于，默认情况下bash shell可以让用户便捷地通过历史命令（先前执行过的）导航，与之相反的是，ksh则要求对.profile进行一些调整，或者记住一些“魔术”组合键来查阅历史并修正命令。</p><p>好了，我想这些介绍已经足够了，剩下来哪个环境最适合你，就留给你自己去判断吧。从现在开始，我将只讲bash及其脚本。在下面的例子中，我将使用CentOS 6.6和bash-4.1.2。请确保你有相同版本，或者更高版本。</p><h3 id="shell脚本流" tabindex="-1">Shell脚本流 <a class="header-anchor" href="#shell脚本流" aria-label="Permalink to “Shell脚本流”">​</a></h3><p>shell脚本语言就跟和几个人聊天类似。你只需把所有命令想象成能帮你做事的那些人，只要你用正确的方式来请求他们去做。比如说，你想要写文档。首先，你需要纸。然后，你需要把内容说给某个人听，让他帮你写。最后，你想要把它存放到某个地方。或者说，你想要造一所房子，因而你需要请合适的人来清空场地。在他们说“事情干完了”，那么另外一些工程师就可以帮你来砌墙。最后，当这些工程师们也告诉你“事情干完了”的时候，你就可以叫油漆工来给房子粉饰了。如果你让油漆工在墙砌好前就来粉饰，会发生什么呢？我想，他们会开始发牢骚了。几乎所有这些像人一样的命令都会说话，如果它们完成了工作而没有发生什么问题，那么它们就会告诉“标准输出”。如果它们不能做你叫它们做的事——它们会告诉“标准错误”。这样，最后，所有的命令都通过“标准输入”来听你的话。</p><p>快速实例——当你打开linux终端并写一些文本时——你正通过“标准输入”和bash说话。那么，让我们来问问bash shell <strong>who am i（我是谁？）</strong>吧。</p><pre><code>root@localhost ~]# who am i                                &lt;--- 你通过标准输入对 bash shell 说
root     pts/0        2015-04-22 20:17 (192.168.1.123)          &lt;--- bash shell通过标准输出回答你
</code></pre><p>现在，让我们说一些bash听不懂的问题：</p><pre><code>[root@localhost ~]# blablabla           &lt;--- 哈，你又在和标准输入说话了
-bash: blablabla: command not found     &lt;--- bash通过标准错误在发牢骚了
</code></pre><p>“:”之前的第一个单词通常是向你发牢骚的命令。实际上，这些流中的每一个都有它们自己的索引号（LCTT 译注：文件句柄号）：</p><ul><li>标准输入（<strong>stdin</strong>） - 0</li><li>标准输出（<strong>stdout</strong>） - 1</li><li>标准错误（<strong>stderr</strong>） - 2</li></ul><p>如果你真的想要知道哪个输出命令说了些什么——你需要将那次发言重定向到（在命令后使用大于号“&gt;”和流索引）文件：</p><pre><code>[root@localhost ~]# blablabla 1&gt; output.txt
-bash: blablabla: command not found
</code></pre><p>在本例中，我们试着重定向流1（<strong>stdout</strong>）到名为output.txt的文件。让我们来看对该文件内容所做的事情吧，使用cat命令可以做这事：</p><pre><code>[root@localhost ~]# cat output.txt
[root@localhost ~]#
</code></pre><p>看起来似乎是空的。好吧，现在让我们来重定向流2（<strong>stderr</strong>）：</p><pre><code>[root@localhost ~]# blablabla 2&gt; error.txt
[root@localhost ~]#
</code></pre><p>好吧，我们看到牢骚话没了。让我们检查一下那个文件：</p><pre><code>[root@localhost ~]# cat error.txt
-bash: blablabla: command not found
[root@localhost ~]#
</code></pre><p>果然如此！我们看到，所有牢骚话都被记录到errors.txt文件里头去了。</p><p>有时候，命令会同时产生<strong>stdout</strong>和<strong>stderr</strong>。要重定向它们到不同的文件，我们可以使用以下语句：</p><pre><code>command 1&gt;out.txt 2&gt;err.txt
</code></pre><p>要缩短一点语句，我们可以忽略“1”，因为默认情况下<strong>stdout</strong>会被重定向：</p><pre><code>command &gt;out.txt 2&gt;err.txt
</code></pre><p>好吧，让我们试试做些“坏事”。让我们用rm命令把file1和folder1给删了吧：</p><pre><code>[root@localhost ~]# rm -vf folder1 file1 &gt; out.txt 2&gt;err.txt
</code></pre><p>现在来检查以下输出文件：</p><pre><code>[root@localhost ~]# cat out.txt
removed \`file1&#39;
[root@localhost ~]# cat err.txt
rm: cannot remove \`folder1&#39;: Is a directory
[root@localhost ~]#
</code></pre><p>正如我们所看到的，不同的流被分离到了不同的文件。有时候，这也不是很方便，因为我们想要查看出现错误时，在某些操作前面或后面所连续发生的事情。要实现这一目的，我们可以重定向两个流到同一个文件：</p><pre><code>command &gt;&gt;out_err.txt 2&gt;&gt;out_err.txt
</code></pre><p>注意：请注意，我使用“&gt;&gt;”替代了“&gt;”。它允许我们附加到文件，而不是覆盖文件。</p><p>我们也可以重定向一个流到另一个：</p><pre><code>command &gt;out_err.txt 2&gt;&amp;1
</code></pre><p>让我来解释一下吧。所有命令的标准输出将被重定向到out_err.txt，错误输出将被重定向到流1（上面已经解释过了），而该流会被重定向到同一个文件。让我们看这个实例：</p><pre><code>[root@localhost ~]# rm -fv folder2 file2 &gt;out_err.txt 2&gt;&amp;1
[root@localhost ~]# cat out_err.txt
rm: cannot remove \`folder2&#39;: Is a directory
removed \`file2&#39;
[root@localhost ~]#
</code></pre><p>看着这些组合的输出，我们可以将其说明为：首先，<strong>rm</strong>命令试着将folder2删除，而它不会成功，因为linux要求<strong>-r</strong>键来允许<strong>rm</strong>命令删除文件夹，而第二个file2会被删除。通过为<strong>rm</strong>提供<strong>-v</strong>（详情）键，我们让rm命令告诉我们每个被删除的文件或文件夹。</p><p>这些就是你需要知道的，关于重定向的几乎所有内容了。我是说几乎，因为还有一个更为重要的重定向工具，它称之为“管道”。通过使用|（管道）符号，我们通常重定向<strong>stdout</strong>流。</p><p>比如说，我们有这样一个文本文件：</p><pre><code>[root@localhost ~]# cat text_file.txt
This line does not contain H e l l o  word
This lilne contains Hello
This also containd Hello
This one no due to HELLO all capital
Hello bash world!
</code></pre><p>而我们需要找到其中某些带有“Hello”的行，Linux中有个<strong>grep</strong>命令可以完成该工作：</p><pre><code>[root@localhost ~]# grep Hello text_file.txt
This lilne contains Hello
This also containd Hello
Hello bash world!
[root@localhost ~]#
</code></pre><p>当我们有个文件，想要在里头搜索的时候，这用起来很不错。当如果我们需要在另一个命令的输出中查找某些东西，这又该怎么办呢？是的，当然，我们可以重定向输出到文件，然后再在文件里头查找：</p><pre><code>[root@localhost ~]# fdisk -l&gt;fdisk.out
[root@localhost ~]# grep &quot;Disk /dev&quot; fdisk.out
Disk /dev/sda: 8589 MB, 8589934592 bytes
Disk /dev/mapper/VolGroup-lv_root: 7205 MB, 7205814272 bytes
Disk /dev/mapper/VolGroup-lv_swap: 855 MB, 855638016 bytes
[root@localhost ~]#
</code></pre><p>如果你打算grep一些双引号引起来带有空格的内容呢！</p><p>注意：fdisk命令显示关于Linux操作系统磁盘驱动器的信息。</p><p>就像我们看到的，这种方式很不方便，因为我们不一会儿就把临时文件空间给搞乱了。要完成该任务，我们可以使用管道。它们允许我们重定向一个命令的<strong>stdout</strong>到另一个命令的<strong>stdin</strong>流：</p><pre><code>[root@localhost ~]# fdisk -l | grep &quot;Disk /dev&quot;
Disk /dev/sda: 8589 MB, 8589934592 bytes
Disk /dev/mapper/VolGroup-lv_root: 7205 MB, 7205814272 bytes
Disk /dev/mapper/VolGroup-lv_swap: 855 MB, 855638016 bytes
[root@localhost ~]#
</code></pre><p>如你所见，我们不需要任何临时文件就获得了相同的结果。我们把<strong>fdisk stdout</strong>重定向到了<strong>grep stdin</strong>。</p><p><strong>注意</strong> ： 管道重定向总是从左至右的。</p><p>还有几个其它重定向，但是我们将把它们放在后面讲。</p><h3 id="在shell中显示自定义信息" tabindex="-1">在shell中显示自定义信息 <a class="header-anchor" href="#在shell中显示自定义信息" aria-label="Permalink to “在shell中显示自定义信息”">​</a></h3><p>正如我们所知道的，通常，与shell的交流以及shell内的交流是以对话的方式进行的。因此，让我们创建一些真正的脚本吧，这些脚本也会和我们讲话。这会让你学到一些简单的命令，并对脚本的概念有一个更好的理解。</p><p>假设我们是某个公司的总服务台经理，我们想要创建某个shell脚本来注册呼叫信息：电话号码、用户名以及问题的简要描述。我们打算把这些信息存储到普通文本文件data.txt中，以便今后统计。脚本它自己就是以对话的方式工作，这会让总服务台的工作人员的小日子过得轻松点。那么，首先我们需要显示提问。对于显示信息，我们可以用echo和printf命令。这两个都是用来显示信息的，但是printf更为强大，因为我们可以通过它很好地格式化输出，我们可以让它右对齐、左对齐或者为信息留出专门的空间。让我们从一个简单的例子开始吧。要创建文件，请使用你惯用的文本编辑器（kate，nano，vi，……），然后创建名为note.sh的文件，里面写入这些命令：</p><pre><code>echo &quot;Phone number ?&quot;
</code></pre><h3 id="如何运行-执行脚本" tabindex="-1">如何运行/执行脚本？ <a class="header-anchor" href="#如何运行-执行脚本" aria-label="Permalink to “如何运行/执行脚本？”">​</a></h3><p>在保存文件后，我们可以使用bash命令来运行，把我们的文件作为它的参数：</p><pre><code>[root@localhost ~]# bash note.sh
Phone number ?
</code></pre><p>实际上，这样来执行脚本是很不方便的。如果不使用<strong>bash</strong>命令作为前缀来执行，会更舒服一些。要让脚本可执行，我们可以使用<strong>chmod</strong>命令：</p><pre><code>[root@localhost ~]# ls -la note.sh
-rw-r--r--. 1 root root 22 Apr 23 20:52 note.sh
[root@localhost ~]# chmod +x note.sh
[root@localhost ~]# ls -la note.sh
-rwxr-xr-x. 1 root root 22 Apr 23 20:52 note.sh
[root@localhost ~]#
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/Capture.png" alt="set permission script file"></p><p><strong>注意</strong> ： ls命令显示了当前文件夹内的文件。通过添加-la键，它会显示更多文件信息。</p><p>如我们所见，在<strong>chmod</strong>命令执行前，脚本只有读（r）和写（w）权限。在执行<strong>chmod +x</strong>后，它就获得了执行（x）权限。（关于权限的更多细节，我会在下一篇文章中讲述。）现在，我们只需这么来运行：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number ?
</code></pre><p>在脚本名前，我添加了 ./ 组合。.(点）在unix世界中意味着当前位置（当前文件夹），/（斜线）是文件夹分隔符。（在Windows系统中，我们使用反斜线 \\ 表示同样功能）所以，这整个组合的意思是说：“从当前文件夹执行note.sh脚本”。我想，如果我用完整路径来运行这个脚本的话，你会更加清楚一些：</p><pre><code>[root@localhost ~]# /root/note.sh
Phone number ?
[root@localhost ~]#
</code></pre><p>它也能工作。</p><p>如果所有linux用户都有相同的默认shell，那就万事OK。如果我们只是执行该脚本，默认的用户shell就会用于解析脚本内容并运行命令。不同的shell的语法、内部命令等等有着一丁点不同，所以，为了保证我们的脚本会使用<strong>bash</strong>，我们应该添加<strong>#!/bin/bash</strong>到文件首行。这样，默认的用户shell将调用<strong>/bin/bash</strong>，而只有在那时候，脚本中的命令才会被执行：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
echo &quot;Phone number ?&quot;
</code></pre><p>直到现在，我们才100%确信<strong>bash</strong>会用来解析我们的脚本内容。让我们继续。</p><h3 id="读取输入" tabindex="-1">读取输入 <a class="header-anchor" href="#读取输入" aria-label="Permalink to “读取输入”">​</a></h3><p>在显示信息后，脚本会等待用户回答。有个<strong>read</strong>命令用来接收用户的回答：</p><pre><code>#!/bin/bash
echo &quot;Phone number ?&quot;
read phone
</code></pre><p>在执行后，脚本会等待用户输入，直到用户按[ENTER]键结束输入：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number ?
12345                               &lt;--- 这儿是我输入的内容
[root@localhost ~]#
</code></pre><p>你输入的所有东西都会被存储到变量<strong>phone</strong>中，要显示变量的值，我们同样可以使用<strong>echo</strong>命令：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
echo &quot;Phone number ?&quot;
read phone
echo &quot;You have entered $phone as a phone number&quot;
[root@localhost ~]# ./note.sh
Phone number ?
123456
You have entered 123456 as a phone number
[root@localhost ~]#
</code></pre><p>在<strong>bash</strong> shell中，一般我们使用<strong>$</strong>（美元）符号来表明这是一个变量，除了读入到变量和其它为数不多的时候才不用这个$（将在今后说明）。</p><p>好了，现在我们准备添加剩下的问题了：</p><pre><code>#!/bin/bash
echo &quot;Phone number?&quot;
read phone
echo &quot;Name?&quot;
read name
echo &quot;Issue?&quot;
read issue
[root@localhost ~]# ./note.sh
Phone number?
123
Name?
Jim
Issue?
script is not working.
[root@localhost ~]#
</code></pre><h3 id="使用流重定向" tabindex="-1">使用流重定向 <a class="header-anchor" href="#使用流重定向" aria-label="Permalink to “使用流重定向”">​</a></h3><p>太完美了！剩下来就是重定向所有东西到文件data.txt了。作为字段分隔符，我们将使用/（斜线）符号。</p><p><strong>注意</strong> ： 你可以选择任何你认为是最好的分隔符，但是确保文件内容不会包含这些符号在内，否则它会导致在文本行中产生额外字段。</p><p>别忘了使用“&gt;&gt;”来代替“&gt;”，因为我们想要将输出内容附加到文件末！</p><pre><code>[root@localhost ~]# tail -2 note.sh
read issue
echo &quot;$phone/$name/$issue&quot;&gt;&gt;data.txt
[root@localhost ~]# ./note.sh
Phone number?
987
Name?
Jimmy
Issue?
Keybord issue.
[root@localhost ~]# cat data.txt
987/Jimmy/Keybord issue.
[root@localhost ~]#
</code></pre><p><strong>注意</strong> ： <strong>tail</strong>命令显示了文件的最后的<strong>n</strong>行。</p><p>搞定。让我们再来运行一次看看：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number?
556
Name?
Janine
Issue?
Mouse was broken.
[root@localhost ~]# cat data.txt
987/Jimmy/Keybord issue.
556/Janine/Mouse was broken.
[root@localhost ~]#
</code></pre><p>我们的文件在增长，让我们在每行前面加个日期吧，这对于今后摆弄这些统计数据时会很有用。要实现这功能，我们可以使用date命令，并指定某种格式，因为我不喜欢默认格式：</p><pre><code>[root@localhost ~]# date
Thu Apr 23 21:33:14 EEST 2015                      &lt;---- date命令的默认输出
[root@localhost ~]# date &quot;+%Y.%m.%d %H:%M:%S&quot;
2015.04.23 21:33:18                               &lt;---- 格式化后的输出
</code></pre><p>有几种方式可以读取命令的输出到变量，在这种简单的情况下，我们将使用\`（是反引号，不是单引号，和波浪号~在同一个键位）：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
echo &quot;Phone number?&quot;
read phone
echo &quot;Name?&quot;
read name
echo &quot;Issue?&quot;
read issue
echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
[root@localhost ~]# ./note.sh
Phone number?
123
Name?
Jim
Issue?
Script hanging.
[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
[root@localhost ~]#
</code></pre><p>嗯…… 我们的脚本看起来有点丑啊，让我们来美化一下。如果你要手动读取<strong>read</strong>命令，你会发现read命令也可以显示一些信息。要实现该功能，我们应该使用-p键加上信息：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
read -p &quot;Phone number: &quot; phone
read -p &quot;Name: &quot; name
read -p &quot;Issue: &quot; issue
echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
</code></pre><p>你可以直接从控制台查找到各个命令的大量有趣的信息，只需输入：<strong>man read, man echo, man date, man ……</strong></p><p>同意吗？它看上去是舒服多了！</p><pre><code>[root@localhost ~]# ./note.sh
Phone number: 321
Name: Susane
Issue: Mouse was stolen
[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
2015.04.23 21:43:50/321/Susane/Mouse was stolen
[root@localhost ~]#
</code></pre><p>光标在消息的后面（不是在新的一行中），这有点意思。（LCTT 译注：如果用 echo 命令输出显示的话，可以用 -n 参数来避免换行。）</p><h3 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to “循环”">​</a></h3><p>是时候来改进我们的脚本了。如果用户一整天都在接电话，如果每次都要去运行，这岂不是很麻烦？让我们让这些活动都永无止境地循环去吧：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
while true
do
        read -p &quot;Phone number: &quot; phone
        now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
        read -p &quot;Name: &quot; name
        read -p &quot;Issue: &quot; issue
        echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
done
</code></pre><p>我已经交换了<strong>read phone</strong>和<strong>now=<code>date</code></strong>行的位置。这是因为我想要在输入电话号码后再获得时间。如果我把它放在循环的首行，那么循环一次后，变量 now 就会在数据存储到文件中后马上获得时间。而这并不好，因为下一次呼叫可能在20分钟后，甚至更晚。</p><pre><code>[root@localhost ~]# ./note.sh
Phone number: 123
Name: Jim
Issue: Script still not works.
Phone number: 777
Name: Daniel
Issue: I broke my monitor
Phone number: ^C
[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
2015.04.23 21:43:50/321/Susane/Mouse was stolen
2015.04.23 21:47:55/123/Jim/Script still not works.
2015.04.23 21:48:16/777/Daniel/I broke my monitor
[root@localhost ~]#
</code></pre><p>注意： 要从无限循环中退出，你可以按[Ctrl]+[C]键。Shell会显示^表示Ctrl键。</p><h3 id="使用管道重定向" tabindex="-1">使用管道重定向 <a class="header-anchor" href="#使用管道重定向" aria-label="Permalink to “使用管道重定向”">​</a></h3><p>让我们添加更多功能到我们的“弗兰肯斯坦（Frankenstein）”，我想要脚本在每次呼叫后显示某个统计数据。比如说，我想要查看各个号码呼叫了我几次。对于这个，我们应该cat文件data.txt：</p><pre><code>[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
2015.04.23 21:43:50/321/Susane/Mouse was stolen
2015.04.23 21:47:55/123/Jim/Script still not works.
2015.04.23 21:48:16/777/Daniel/I broke my monitor
2015.04.23 22:02:14/123/Jimmy/New script also not working!!!
[root@localhost ~]#
</code></pre><p>现在，所有输出我们都可以重定向到<strong>cut</strong>命令，让<strong>cut</strong>来把每行切成一块一块（我们使用分隔符“/”），然后打印第二个字段：</p><pre><code>[root@localhost ~]# cat data.txt | cut -d&quot;/&quot; -f2
123
321
123
777
123
[root@localhost ~]#
</code></pre><p>现在，我们可以把这个输出重定向打另外一个命令<strong>sort</strong>：</p><pre><code>[root@localhost ~]# cat data.txt | cut -d&quot;/&quot; -f2|sort
123
123
123
321
777
[root@localhost ~]#
</code></pre><p>然后只留下唯一的行。要统计唯一条目，只需添加<strong>-c</strong>键到<strong>uniq</strong>命令：</p><pre><code>[root@localhost ~]# cat data.txt | cut -d&quot;/&quot; -f2 | sort | uniq -c
    3 123
    1 321
    1 777
[root@localhost ~]#
</code></pre><p>只要把这个添加到我们的循环的最后：</p><pre><code>#!/bin/bash
while true
do
        read -p &quot;Phone number: &quot; phone
        now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
        read -p &quot;Name: &quot; name
        read -p &quot;Issue: &quot; issue
        echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
        echo &quot;===== We got calls from =====&quot;
        cat data.txt | cut -d&quot;/&quot; -f2 | sort | uniq -c
        echo &quot;--------------------------------&quot;
done
</code></pre><p>运行：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number: 454
Name: Malini
Issue: Windows license expired.
===== We got calls from =====
    3 123
    1 321
    1 454
    1 777
--------------------------------
Phone number: ^C
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/Capture11.png" alt="running script"></p><p>当前场景贯穿了几个熟知的步骤：</p><ul><li>显示消息</li><li>获取用户输入</li><li>存储值到文件</li><li>处理存储的数据</li></ul><p>但是，如果用户有点责任心，他有时候需要输入数据，有时候需要统计，或者可能要在存储的数据中查找一些东西呢？对于这些事情，我们需要使用switches/cases，并知道怎样来很好地格式化输出。这对于在shell中“画”表格的时候很有用。</p><hr>`,126)),s("p",null,[o[1]||(o[1]=t("via: ",-1)),n(e,{href:"http://linoxide.com/linux-shell-script/guide-start-learning-shell-scripting-scratch/"},{default:r(()=>[...o[0]||(o[0]=[t("http://linoxide.com/linux-shell-script/guide-start-learning-shell-scripting-scratch/",-1)])]),_:1})]),s("p",null,[o[5]||(o[5]=t("作者：",-1)),n(e,{href:"http://linoxide.com/author/petrasl/"},{default:r(()=>[...o[2]||(o[2]=[t("Petras Liumparas",-1)])]),_:1}),o[6]||(o[6]=t(" 译者：",-1)),n(e,{href:"https://github.com/GOLinux"},{default:r(()=>[...o[3]||(o[3]=[t("GOLinux",-1)])]),_:1}),o[7]||(o[7]=t(" 校对：",-1)),n(e,{href:"https://github.com/wxy"},{default:r(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[o[10]||(o[10]=t("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原创翻译，",-1)),n(e,{href:"https://linux.cn/"},{default:r(()=>[...o[9]||(o[9]=[t("Linux中国",-1)])]),_:1}),o[12]||(o[12]=t(" 荣誉推出",-1))])])}const S=l(i,[["render",c]]);export{w as __pageData,S as default};
