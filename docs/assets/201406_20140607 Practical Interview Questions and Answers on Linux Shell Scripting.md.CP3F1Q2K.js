import{_ as i,a0 as a,w as l,s as p,I as t,x as n,a1 as r,A as s,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"实用的Linux SHELL面试问题及答案 | LCTT x X-CMD","titleTemplate":false,"description":"实用的Linux SHELL面试问题及答案 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"实用的Linux SHELL面试问题及答案 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"实用的Linux SHELL面试问题及答案 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140607 Practical Interview Questions and Answers on Linux Shell Scripting","title":"实用的Linux SHELL面试问题及答案","tag":"201406","desc":""},"relativePath":"201406/20140607 Practical Interview Questions and Answers on Linux Shell Scripting.md","filePath":"[post].md"}'),u={name:"201406/20140607 Practical Interview Questions and Answers on Linux Shell Scripting.md"};function h(c,e,m,b,w,g){const o=a("Link");return l(),p("div",null,[e[14]||(e[14]=t("h1",{id:"实用的linux-shell面试问题及答案",tabindex:"-1"},[n("实用的Linux SHELL面试问题及答案 "),t("a",{class:"header-anchor",href:"#实用的linux-shell面试问题及答案","aria-label":"Permalink to “实用的Linux SHELL面试问题及答案”"},"​")],-1)),e[15]||(e[15]=t("p",null,"随着之前有关面试的系列文章，读者的反应比较强烈，所以我决定出一篇有关Linux Shell相关的面试文章，如果对本文有什么意见或意见的话，欢迎反馈到我的邮箱里。",-1)),t("p",null,[e[1]||(e[1]=n("如果想要阅读已发表在Tecmint.com的文章，可以点击链接，链接到[访谈系列] ",-1)),r(o,{href:"http://www.tecmint.com/category/interview-questions/"},{default:s(()=>[...e[0]||(e[0]=[n("1",-1)])]),_:1}),e[2]||(e[2]=n("，在这里我们已经介绍很多题目即文章。，FTP，MySQL和Apache的，脚本，Linux命令等。",-1))]),e[16]||(e[16]=d(`<p><img src="http://www.tecmint.com/wp-content/uploads/2014/06/Interview-Questions-on-Shell-Scripting.png" alt="Practical Interview Question on Shell Scripting"></p><blockquote><p>实用的shell脚本面试问题</p></blockquote><p>这边提到的5个面试问题，延续之前的有关Linux面试问题和答案。如果你是Tecmint.com的读者，你的支持我非常感谢。</p><h3 id="_1-写一个shell脚本来得到当前的日期-时间-用户名和当前工作目录。" tabindex="-1">1. 写一个shell脚本来得到当前的日期，时间，用户名和当前工作目录。 <a class="header-anchor" href="#_1-写一个shell脚本来得到当前的日期-时间-用户名和当前工作目录。" aria-label="Permalink to “1. 写一个shell脚本来得到当前的日期，时间，用户名和当前工作目录。”">​</a></h3><blockquote><p><strong>答案</strong> : 输出用户名，当前日期和时间，以及当前工作目录的命令就是logname，date，who i am和pwd。</p></blockquote><p>现在，创建一个名为<strong><code>userstats.sh</code></strong>文件，将下面的代码添加到它。</p><pre><code>#!/bin/bash 
echo &quot;Hello, $LOGNAME&quot; 
echo &quot;Current date is \`date\`&quot; 
echo &quot;User is \`who i am\`&quot; 
echo &quot;Current directory \`pwd\`&quot;
</code></pre><p>给它添加执行权限，并且执行他。</p><pre><code># chmod 755 userstats.sh 
# ./userstats.sh
</code></pre><h4 id="样例输出" tabindex="-1">样例输出 <a class="header-anchor" href="#样例输出" aria-label="Permalink to “样例输出”">​</a></h4><pre><code>Hello, avi 
Current date is Sat Jun  7 13:05:29 IST 2014 
User is avi      pts/0        2014-06-07 11:59 (:0) 
Current directory /home/avi/Desktop
</code></pre><h3 id="_2-写一个shell脚本-进行两个数字的相加-如果没有输入参数就输出错误信息和一行使用说明" tabindex="-1">2.写一个shell脚本，进行两个数字的相加，如果没有输入参数就输出错误信息和一行使用说明### <a class="header-anchor" href="#_2-写一个shell脚本-进行两个数字的相加-如果没有输入参数就输出错误信息和一行使用说明" aria-label="Permalink to “2.写一个shell脚本，进行两个数字的相加，如果没有输入参数就输出错误信息和一行使用说明###”">​</a></h3><blockquote><p><strong>答案</strong> : 下面是简单的shell脚本以及描述，如果没有命令行参数，它会抛出错误与如何使用脚本的说明。</p></blockquote><p>再创建一个名为<strong><code>twonumbers.sh</code></strong>文件和下面的内容添加到文件里。</p><pre><code>#!/bin/bash 
# The Shebang

if [ $# -ne 2 ] 
# If two Inputs are not received from Standard Input

then 
# then execute the below statements

    echo &quot;Usage - $0   x    y&quot; 
    # print on standard output, how-to use the script (Usage - ./1.sh   x    y )

    echo &quot;        Where x and y are two nos for which I will print sum&quot; 
    # print on standard output, “Where x and y are two nos for which I will print sum ”

    exit 1 
    # Leave shell in Error Stage and before the task was successfully carried out.

fi 
# End of the if Statement.

    echo &quot;Sum of $1 and $2 is \`expr $1 + $2\`&quot;
    # If the above condition was false and user Entered two numbers as a command Line Argument,   
       it will show the sum of the entered numbers.
</code></pre><p>给他添加可执行权限，并且执行。</p><pre><code># chmod 755 two-numbers.sh
</code></pre><p><strong>情形一</strong>: 未输入两个数字作为命令行参数运行脚本，你将得到下面的输出。</p><h4 id="样例输出-1" tabindex="-1">样例输出 <a class="header-anchor" href="#样例输出-1" aria-label="Permalink to “样例输出”">​</a></h4><pre><code># ./two-numbers.sh

Usage - ./two-numbers.sh   x    y 
        Where x and y are two nos for which I will print sum
</code></pre><p><strong>情形二</strong>: 当数字存在时，你会得到如图所示的结果。</p><pre><code>$ ./two-numbers.sh 4 5 

Sum of 4 and 5 is 9
</code></pre><p>因此，上述shell脚本满足了问题的要求。</p><h3 id="_3-你需要打印一个给定的数字的反序-如输入10572-输出27501-如果没有输入数据-应该抛出错误和使用脚本说明。在此之前-告诉我你需要在这里使用的算法。" tabindex="-1">3.你需要打印一个给定的数字的反序，如输入10572，输出27501，如果没有输入数据，应该抛出错误和使用脚本说明。在此之前，告诉我你需要在这里使用的算法。 <a class="header-anchor" href="#_3-你需要打印一个给定的数字的反序-如输入10572-输出27501-如果没有输入数据-应该抛出错误和使用脚本说明。在此之前-告诉我你需要在这里使用的算法。" aria-label="Permalink to “3.你需要打印一个给定的数字的反序，如输入10572，输出27501，如果没有输入数据，应该抛出错误和使用脚本说明。在此之前，告诉我你需要在这里使用的算法。”">​</a></h3><h4 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to “算法”">​</a></h4><ol><li>输入的数字为n</li><li>赋值 rev=0, sd=0 (反向和单个数字设置为0)</li><li>n % 10, 将得到最左边的数字</li><li>反向数字可以用这个方法生成 rev * 10 + sd</li><li>对输入数字进行右位移操作（除以10）</li><li>如果n &gt; 0, 进入第三步，否则进行第七步</li><li>输出rev</li></ol><p>现在，创建一个名为**<code>numbers.sh**</code>文件，并添加以下代码。</p><pre><code>#!/bin/bash 
if [ $# -ne 1 ] 
then 
    echo &quot;Usage: $0   number&quot; 
    echo &quot;       I will find reverse of given number&quot; 
    echo &quot;       For eg. $0 0123, I will print 3210&quot; 
    exit 1 
fi 

n=$1 
rev=0 
sd=0 

while [ $n -gt 0 ] 
do 
    sd=\`expr $n % 10\` 
    rev=\`expr $rev \\* 10  + $sd\` 
    n=\`expr $n / 10\` 
done 
    echo  &quot;Reverse number is $rev&quot;
</code></pre><p>授予对文件的执行权限，并运行如下所示的脚本。</p><pre><code># chmod 755 numbers.h
</code></pre><p><strong>情形一</strong>: 当输入不包含命令行参数，你将得到下面的输出。</p><h4 id="样例输出-2" tabindex="-1">样例输出 <a class="header-anchor" href="#样例输出-2" aria-label="Permalink to “样例输出”">​</a></h4><pre><code>./numbers.sh

Usage: ./numbers.sh  number 
       I will find reverse of given number 
       For eg. ./2.sh 123, I will print 321
</code></pre><p><strong>情形二</strong>: 正常输入</p><pre><code>$ ./numbers.sh 10572 

Reverse number is 27501
</code></pre><p>上面的脚本非常完美，输出正是我们需要的。</p><h3 id="_4-你应该直接用终端-而不是依靠任何shell脚本来进行实数计算。你会怎么做-比如实数7-56-2-453" tabindex="-1">4. 你应该直接用终端，而不是依靠任何shell脚本来进行实数计算。你会怎么做（比如实数7.56+2.453）？ <a class="header-anchor" href="#_4-你应该直接用终端-而不是依靠任何shell脚本来进行实数计算。你会怎么做-比如实数7-56-2-453" aria-label="Permalink to “4. 你应该直接用终端，而不是依靠任何shell脚本来进行实数计算。你会怎么做（比如实数7.56+2.453）？”">​</a></h3><blockquote><p><strong>答案</strong> : 我们需要用如下所述的特殊方式使用bc命令。将7.56+2.453作为输入通过管道进入bc中。</p></blockquote><pre><code>$ echo 7.56 + 2.453 | bc

10.013
</code></pre><h3 id="_5-你需要给出圆周率的值-精度为小数点后100位-什么是最简单的方法。" tabindex="-1">5. 你需要给出圆周率的值，精度为小数点后100位，什么是最简单的方法。 <a class="header-anchor" href="#_5-你需要给出圆周率的值-精度为小数点后100位-什么是最简单的方法。" aria-label="Permalink to “5. 你需要给出圆周率的值，精度为小数点后100位，什么是最简单的方法。”">​</a></h3><blockquote><p><strong>答案</strong> : 找圆周率的值最简单的方法，我们只是需要发出以下命令。</p></blockquote><pre><code># pi 100 

3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067
</code></pre><p>很明显！安装我们必须有包<strong><code>pi</code></strong>。只用一个<strong>apt</strong>或<strong>yum</strong>命令，就能获得所需的软件包，同时用最简单方法来实现这个需求。</p><p>就是这样。我会很快在Tecmint.com发表另一个有趣的文章。至此敬请关注。别忘了向我们提供您在的评论和反馈。</p><hr>`,45)),t("p",null,[e[4]||(e[4]=n("via: ",-1)),r(o,{href:"http://www.tecmint.com/practical-interview-questions-on-linux-shell-scripting/"},{default:s(()=>[...e[3]||(e[3]=[n("http://www.tecmint.com/practical-interview-questions-on-linux-shell-scripting/",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=n("译者：",-1)),r(o,{href:"https://github.com/MikeCoder"},{default:s(()=>[...e[5]||(e[5]=[n("MikeCoder",-1)])]),_:1}),e[8]||(e[8]=n(" 校对：",-1)),r(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[11]||(e[11]=n("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原创翻译，",-1)),r(o,{href:"http://linux.cn/"},{default:s(()=>[...e[10]||(e[10]=[n("Linux中国",-1)])]),_:1}),e[13]||(e[13]=n(" 荣誉推出",-1))])])}const q=i(u,[["render",h]]);export{L as __pageData,q as default};
