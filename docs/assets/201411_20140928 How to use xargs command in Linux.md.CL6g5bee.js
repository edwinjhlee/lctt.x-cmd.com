import{_ as n,a0 as o,w as l,s as d,ao as p,I as i,x as t,a1 as a,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const B=JSON.parse('{"title":"如何在Linux里使用xargs命令 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Linux里使用xargs命令 | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Linux里使用xargs命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Linux里使用xargs命令 | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20140928 How to use xargs command in Linux","title":"如何在Linux里使用xargs命令","tag":"201411","desc":""},"relativePath":"201411/20140928 How to use xargs command in Linux.md","filePath":"[post].md"}'),x={name:"201411/20140928 How to use xargs command in Linux.md"};function g(f,e,m,u,h,c){const r=o("Link");return l(),d("div",null,[e[13]||(e[13]=p(`<h1 id="如何在linux里使用xargs命令" tabindex="-1">如何在Linux里使用xargs命令 <a class="header-anchor" href="#如何在linux里使用xargs命令" aria-label="Permalink to “如何在Linux里使用xargs命令”">​</a></h1><p>你是否遇到过这样的情况，需要一遍又一遍地对多个文件执行同样的操作？如果有过，那你肯定会深有感触这是多么的无聊和效率低下。还好有种简单的方式，可以在基于Unix的操作系统中使用xargs命令解决这个烦恼。通过这个命令你可以有效地处理多个文件，节省你的时间和精力。在这篇教程中，你可以学到如何一次性对多个文件执行命令或脚本操作，再也不用担心像单独处理无数个日志或数据文件那样吓人的任务了。</p><p>xargs命令有两个要点。第一，你必须列出目标文件。第二，你必须指定对每个文件需要执行的命令或脚本。</p><p>这篇教程会涉及三个应用场景，xargs命令被用来处理分布在不同目录下的文件：</p><ol><li>计算所有文件的行数</li><li>打印指定文件的第一行</li><li>对每个文件执行一个自定义脚本</li></ol><p>请看下面这个叫xargstest的目录（用tree命令以及-i和-f选项显示了目录树结构，这样可以避免缩进显示而且每个文件都会带有完整路径）：</p><pre><code>$ tree -if xargstest/ 
</code></pre><p><img src="https://farm3.staticflickr.com/2942/15334985981_ce1a192def.jpg" alt=""></p><p>这六个文件的内容分别如下：</p><p><img src="https://farm4.staticflickr.com/3882/15346287662_a3084a8e4f_o.png" alt=""></p><p>这个<strong>xargstest</strong>目录，以及它包含的子目录和文件将用在下面的例子中。</p><h3 id="场景1-计算所有文件的行数" tabindex="-1">场景1：计算所有文件的行数 <a class="header-anchor" href="#场景1-计算所有文件的行数" aria-label="Permalink to “场景1：计算所有文件的行数”">​</a></h3><p>就像之前提到的，使用xargs命令的第一个要点是一个用来运行命令或脚本的文件列表。我们可以用find命令来确定和列出目标文件。选项<strong>-name &#39;file??&#39;</strong>指定了xargstest目录下那些名字以&quot;file&quot;开头并跟随两个任意字符的文件才是匹配的。这个搜索默认是递归的，意思是find命令会在xargstest和它的子目录下搜索匹配的文件。</p><pre><code>$ find xargstest/ -name &#39;file??&#39; 
</code></pre><hr><pre><code>xargstest/dir3/file3B
xargstest/dir3/file3A
xargstest/dir1/file1A
xargstest/dir1/file1B
xargstest/dir2/file2B
xargstest/dir2/file2A
</code></pre><p>我们可以通过管道把结果发给sort命令让文件名按顺序排列：</p><pre><code>$ find xargstest/ -name &#39;file??&#39; | sort 
</code></pre><hr><pre><code>xargstest/dir1/file1A
xargstest/dir1/file1B
xargstest/dir2/file2A
xargstest/dir2/file2B
xargstest/dir3/file3A
xargstest/dir3/file3B
</code></pre><p>然后我们需要第二个要素，就是需要执行的命令。我们使用带有-l选项的wc命令来计算每个文件包含的换行符数目（会在输出的每一行的前面打印出来）：</p><pre><code>$ find xargstest/ -name &#39;file??&#39; | sort | xargs wc -l 
</code></pre><hr><pre><code> 1 xargstest/dir1/file1A
 2 xargstest/dir1/file1B
 3 xargstest/dir2/file2A
 4 xargstest/dir2/file2B
 5 xargstest/dir3/file3A
 6 xargstest/dir3/file3B
21 total
</code></pre><p>可以看到，不用对每个文件手动执行一次wc -l命令，而xargs命令可以让你在一步里完成所有操作。那些之前看起来无法完成的任务，例如单独处理数百个文件，现在可以相当轻松地完成了。</p><h3 id="场景2-打印指定文件的第一行" tabindex="-1">场景2：打印指定文件的第一行 <a class="header-anchor" href="#场景2-打印指定文件的第一行" aria-label="Permalink to “场景2：打印指定文件的第一行”">​</a></h3><p>既然你已经有一些使用xargs命令的基础，你可以自由选择执行什么命令。有时，你也许希望只对一部分文件执行操作而忽略其他的。在这种情况下，你可以使用find命令的-name选项以及?通配符（匹配任意单个字符）来选中特定文件并通过管道输出给xargs命令。举个例子，如果你想打印以“B”字符结尾的文件而忽略以“A”结尾的文件的第一行，可以使用下面的find、xargs和head命令组合来完成（head -n1会打印一个文件的第一行）：</p><pre><code>$ find xargstest/ -name &#39;file?B&#39; | sort | xargs head -n1 
</code></pre><hr><pre><code>==&gt; xargstest/dir1/file1B &lt;==
one

==&gt; xargstest/dir2/file2B &lt;==
one

==&gt; xargstest/dir3/file3B &lt;==
one
</code></pre><p>你将看到只有以“B”结尾的文件会被处理，而所有以“A”结尾的文件都被忽略了。</p><h3 id="场景3-对每个文件执行一个自定义脚本" tabindex="-1">场景3：对每个文件执行一个自定义脚本 <a class="header-anchor" href="#场景3-对每个文件执行一个自定义脚本" aria-label="Permalink to “场景3：对每个文件执行一个自定义脚本”">​</a></h3><p>最后，你也许希望对一些文件执行一个自定义脚本（例如Bash、Python或是Perl）。要做到这一点，只要简单地用你的自定义脚本名字替换掉之前例子中的wc和head命令就好了：</p><pre><code>$ find xargstest/ -name &#39;file??&#39; | xargs myscript.sh 
</code></pre><p>自定义脚本<strong>myscript.sh</strong>需要写成接受一个文件名作为参数并处理这个文件。上面的命令将为find命令找到的每个文件分别调用脚本。</p><p>注意一下上面的例子中的文件名并没有包含空格。通常来说，在Linux环境下操作没有空格的文件名会舒服很多。如果你实在是需要处理名字中带有空格的文件，上边的命令就不能用了，需要稍微处理一下来让它可以被接受。这可以通过find命令的-print0选项（它会打印完整的文件名到标准输出，并以空字符结尾），以及xargs命令的-0选项（它会以空字符作为字符串结束标记）来实现，就像下面的例子：</p><pre><code>$ find xargstest/ -name &#39;file*&#39; -print0 | xargs -0 myscript.sh 
</code></pre><p>注意一下，-name选项所跟的参数已经改为&#39;file*&#39;，意思是所有以&quot;file&quot;开头而结尾可以是任意字符的文件都会被选中。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>在看完这篇教程后你应该会理解xargs命令的作用，以及如何应用到自己的工作中。很快你就可以有时间享受这个命令所带来的高效率，而不用把你的时间耗费在一些重复的任务上了。想了解更详细的信息以及更多的选项，你可以在终端中输入&#39;man xargs&#39;命令来查看xargs的文档。</p><hr>`,41)),i("p",null,[e[1]||(e[1]=t("via: ",-1)),a(r,{href:"http://xmodulo.com/xargs-command-linux.html"},{default:s(()=>[...e[0]||(e[0]=[t("http://xmodulo.com/xargs-command-linux.html",-1)])]),_:1})]),i("p",null,[e[5]||(e[5]=t("作者：",-1)),a(r,{href:"http://xmodulo.com/author/joshua"},{default:s(()=>[...e[2]||(e[2]=[t("Joshua Reed",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),a(r,{href:"https://github.com/zpl1025"},{default:s(()=>[...e[3]||(e[3]=[t("zpl1025",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),a(r,{href:"https://github.com/carolinewuyan"},{default:s(()=>[...e[4]||(e[4]=[t("Caroline",-1)])]),_:1})]),i("p",null,[e[10]||(e[10]=t("本文由 ",-1)),a(r,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),a(r,{href:"http://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const C=n(x,[["render",g]]);export{B as __pageData,C as default};
