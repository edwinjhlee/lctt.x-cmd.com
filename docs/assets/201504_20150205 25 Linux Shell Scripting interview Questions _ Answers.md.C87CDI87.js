import{_ as h,a0 as r,w as o,s as d,ao as i,I as e,x as a,a1 as t,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const Q=JSON.parse('{"title":"Linux Shell脚本面试25问 | LCTT x X-CMD","titleTemplate":false,"description":"Linux Shell脚本面试25问 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux Shell脚本面试25问 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux Shell脚本面试25问 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/20150205 25 Linux Shell Scripting interview Questions & Answers","title":"Linux Shell脚本面试25问","tag":"201504","desc":""},"relativePath":"201504/20150205 25 Linux Shell Scripting interview Questions & Answers.md","filePath":"[post].md"}'),p={name:"201504/20150205 25 Linux Shell Scripting interview Questions & Answers.md"};function c(w,l,b,f,u,g){const n=r("Link");return o(),d("div",null,[l[13]||(l[13]=i(`<h1 id="linux-shell脚本面试25问" tabindex="-1">Linux Shell脚本面试25问 <a class="header-anchor" href="#linux-shell脚本面试25问" aria-label="Permalink to “Linux Shell脚本面试25问”">​</a></h1><h3 id="q-1-shell脚本是什么、它是必需的吗" tabindex="-1">Q:1 Shell脚本是什么、它是必需的吗? <a class="header-anchor" href="#q-1-shell脚本是什么、它是必需的吗" aria-label="Permalink to “Q:1 Shell脚本是什么、它是必需的吗?”">​</a></h3><p>答:一个Shell脚本是一个文本文件，包含一个或多个命令。作为系统管理员，我们经常需要使用多个命令来完成一项任务，我们可以添加这些所有命令在一个文本文件(Shell脚本)来完成这些日常工作任务。</p><h3 id="q-2-什么是默认登录shell-如何改变指定用户的登录shell" tabindex="-1">Q:2 什么是默认登录shell，如何改变指定用户的登录shell <a class="header-anchor" href="#q-2-什么是默认登录shell-如何改变指定用户的登录shell" aria-label="Permalink to “Q:2 什么是默认登录shell，如何改变指定用户的登录shell”">​</a></h3><p>答:在Linux操作系统，“/bin/bash”是默认登录shell，是在创建用户时分配的。使用chsh命令可以改变默认的shell。示例如下所示:</p><pre><code># chsh &lt;用户名&gt; -s &lt;新shell&gt;
# chsh linuxtechi -s /bin/sh
</code></pre><h3 id="q-3-可以在shell脚本中使用哪些类型的变量" tabindex="-1">Q:3 可以在shell脚本中使用哪些类型的变量? <a class="header-anchor" href="#q-3-可以在shell脚本中使用哪些类型的变量" aria-label="Permalink to “Q:3 可以在shell脚本中使用哪些类型的变量?”">​</a></h3><p>答：在shell脚本，我们可以使用两种类型的变量：</p><ul><li>系统定义变量</li><li>用户定义变量</li></ul><p>系统变量是由系统系统自己创建的。这些变量通常由大写字母组成，可以通过“<strong>set</strong>”命令查看。</p><p>用户变量由系统用户来生成和定义，变量的值可以通过命令“<code>echo $&lt;变量名&gt;</code>”查看。</p><h3 id="q-4-如何将标准输出和错误输出同时重定向到同一位置" tabindex="-1">Q:4 如何将标准输出和错误输出同时重定向到同一位置? <a class="header-anchor" href="#q-4-如何将标准输出和错误输出同时重定向到同一位置" aria-label="Permalink to “Q:4 如何将标准输出和错误输出同时重定向到同一位置?”">​</a></h3><p>答：这里有两个方法来实现：</p><p>方法一：</p><pre><code>2&gt;&amp;1 (如# ls /usr/share/doc &gt; out.txt 2&gt;&amp;1 )
</code></pre><p>方法二：</p><pre><code>&amp;&gt; (如# ls /usr/share/doc &amp;&gt; out.txt )
</code></pre><h3 id="q-5-shell脚本中-if-语法如何嵌套" tabindex="-1">Q:5 shell脚本中“if”语法如何嵌套? <a class="header-anchor" href="#q-5-shell脚本中-if-语法如何嵌套" aria-label="Permalink to “Q:5 shell脚本中“if”语法如何嵌套?”">​</a></h3><p>答：基础语法如下：</p><pre><code>if [ 条件 ]
then
命令1
命令2
…..
else
if [ 条件 ]
then
命令1
命令2
….
else
命令1
命令2
…..
fi
fi
</code></pre><h3 id="q-6-shell脚本中-标记的用途是什么" tabindex="-1">Q:6 shell脚本中“$?”标记的用途是什么？ ? <a class="header-anchor" href="#q-6-shell脚本中-标记的用途是什么" aria-label="Permalink to “Q:6 shell脚本中“$?”标记的用途是什么？ ?”">​</a></h3><p>答：在写一个shell脚本时，如果你想要检查前一命令是否执行成功，在if条件中使用“$?”可以来检查前一命令的结束状态。简单的例子如下：</p><pre><code>root@localhost:~# ls /usr/bin/shar
/usr/bin/shar
root@localhost:~# echo $?
0
</code></pre><p>如果结束状态是0，说明前一个命令执行成功。</p><pre><code>root@localhost:~# ls /usr/bin/share

ls: cannot access /usr/bin/share: No such file or directory
root@localhost:~# echo $?
2
</code></pre><p>如果结束状态不是0，说明命令执行失败。</p><h3 id="q-7-在shell脚本中如何比较两个数字" tabindex="-1">Q:7 在shell脚本中如何比较两个数字 ? <a class="header-anchor" href="#q-7-在shell脚本中如何比较两个数字" aria-label="Permalink to “Q:7 在shell脚本中如何比较两个数字 ?”">​</a></h3><p>答：在if-then中使用测试命令（ -gt 等）来比较两个数字，例子如下：</p><pre><code>#!/bin/bash
x=10
y=20

if [ $x -gt $y ]
then
echo “x is greater than y”
else
echo “y is greater than x”
fi
</code></pre><h3 id="q-8-shell脚本中break命令的作用" tabindex="-1">Q:8 shell脚本中break命令的作用 ? <a class="header-anchor" href="#q-8-shell脚本中break命令的作用" aria-label="Permalink to “Q:8 shell脚本中break命令的作用 ?”">​</a></h3><p>答：break命令一个简单的用途是退出执行中的循环。我们可以在while和until循环中使用break命令跳出循环。</p><h3 id="q-9-shell脚本中continue命令的作用" tabindex="-1">Q:9 shell脚本中continue命令的作用 ? <a class="header-anchor" href="#q-9-shell脚本中continue命令的作用" aria-label="Permalink to “Q:9 shell脚本中continue命令的作用 ?”">​</a></h3><p>答：continue命令不同于break命令，它只跳出当前循环的迭代，而不是<strong>整个</strong>循环。continue命令很多时候是很有用的，例如错误发生，但我们依然希望继续执行大循环的时候。</p><h3 id="q-10-告诉我shell脚本中case语句的语法" tabindex="-1">Q:10 告诉我shell脚本中Case语句的语法 ? <a class="header-anchor" href="#q-10-告诉我shell脚本中case语句的语法" aria-label="Permalink to “Q:10 告诉我shell脚本中Case语句的语法 ?”">​</a></h3><p>答：基础语法如下：</p><pre><code>case 变量 in
值1)
命令1
命令2
…..
最后命令
!! 
值2)
命令1
命令2
……
最后命令
;;
esac
</code></pre><h3 id="q-11-shell脚本中while循环语法" tabindex="-1">Q:11 shell脚本中while循环语法 ? <a class="header-anchor" href="#q-11-shell脚本中while循环语法" aria-label="Permalink to “Q:11 shell脚本中while循环语法 ?”">​</a></h3><p>答：如同for循环，while循环只要条件成立就重复它的命令块。不同于for循环，while循环会不断迭代，直到它的条件不为真。基础语法：</p><pre><code>while [ 条件 ]
do
命令…
done
</code></pre><h3 id="q-12-如何使脚本可执行" tabindex="-1">Q:12 如何使脚本可执行 ? <a class="header-anchor" href="#q-12-如何使脚本可执行" aria-label="Permalink to “Q:12 如何使脚本可执行 ?”">​</a></h3><p>答：使用chmod命令来使脚本可执行。例子如下：</p><pre><code># chmod a+x myscript.sh
</code></pre><h3 id="q-13-bin-bash-的作用" tabindex="-1">Q:13 “#!/bin/bash”的作用 ? <a class="header-anchor" href="#q-13-bin-bash-的作用" aria-label="Permalink to “Q:13 “#!/bin/bash”的作用 ?”">​</a></h3><p>答：#!/bin/bash是shell脚本的第一行，称为释伴（shebang）行。这里#符号叫做hash，而! 叫做 bang。它的意思是命令通过 /bin/bash 来执行。</p><h3 id="q-14-shell脚本中for循环语法" tabindex="-1">Q:14 shell脚本中for循环语法 ? <a class="header-anchor" href="#q-14-shell脚本中for循环语法" aria-label="Permalink to “Q:14 shell脚本中for循环语法 ?”">​</a></h3><p>答：for循环的基础语法：</p><pre><code>for 变量 in 循环列表
do
命令1
命令2
….
最后命令
done
</code></pre><h3 id="q-15-如何调试shell脚本" tabindex="-1">Q:15 如何调试shell脚本 ? <a class="header-anchor" href="#q-15-如何调试shell脚本" aria-label="Permalink to “Q:15 如何调试shell脚本 ?”">​</a></h3><p>答：使用&#39;-x&#39;参数（sh -x myscript.sh）可以调试shell脚本。另一个种方法是使用‘-nv’参数( sh -nv myscript.sh)。</p><h3 id="q-16-shell脚本如何比较字符串" tabindex="-1">Q:16 shell脚本如何比较字符串? <a class="header-anchor" href="#q-16-shell脚本如何比较字符串" aria-label="Permalink to “Q:16 shell脚本如何比较字符串?”">​</a></h3><p>答：test命令可以用来比较字符串。测试命令会通过比较字符串中的每一个字符来比较。</p><h3 id="q-17-bourne-shell-bash-中有哪些特殊的变量" tabindex="-1">Q:17 Bourne shell(bash) 中有哪些特殊的变量 ? <a class="header-anchor" href="#q-17-bourne-shell-bash-中有哪些特殊的变量" aria-label="Permalink to “Q:17 Bourne shell(bash) 中有哪些特殊的变量 ?”">​</a></h3><p>答：下面的表列出了Bourne shell为命令行设置的特殊变量。</p>`,53)),l[14]||(l[14]=e("table",{width:"659",cellspacing:"0",cellpadding:"4"},[e("colgroup",null,[e("col",{width:"173"}),e("col",{width:"453"})]),e("tbody",null,[e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"内建变量")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"解释")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$0")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"命令行中的脚本名字")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$1")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"第一个命令行参数")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$2")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"第二个命令行参数")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"…..")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"…….")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$9")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"第九个命令行参数")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$#")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"命令行参数的数量")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$*")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"所有命令行参数，以空格隔开")])])])],-1)),l[15]||(l[15]=e("h3",{id:"q-18-how-to-test-files-in-a-shell-script",tabindex:"-1"},[a("Q:18 How to test files in a shell script ? "),e("a",{class:"header-anchor",href:"#q-18-how-to-test-files-in-a-shell-script","aria-label":"Permalink to “Q:18 How to test files in a shell script ?”"},"​")],-1)),l[16]||(l[16]=e("h3",{id:"q-18-在shell脚本中-如何测试文件",tabindex:"-1"},[a("Q:18 在shell脚本中，如何测试文件 ? "),e("a",{class:"header-anchor",href:"#q-18-在shell脚本中-如何测试文件","aria-label":"Permalink to “Q:18 在shell脚本中，如何测试文件 ?”"},"​")],-1)),l[17]||(l[17]=e("p",null,"答：test命令可以用来测试文件。基础用法如下表格：",-1)),l[18]||(l[18]=e("table",{width:"644",cellspacing:"0",cellpadding:"4"},[e("colgroup",null,[e("col",{width:"173"}),e("col",{width:"453"})]),e("tbody",null,[e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"Test")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"用法")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-d 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在并且是目录，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-e 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-f 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在并且是普通文件，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-r 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在并可读，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-s 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在并且不为空，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-w 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在并可写，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-x 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在并可执行，返回true")])])])],-1)),l[19]||(l[19]=i(`<h3 id="q-19-在shell脚本中-如何写入注释" tabindex="-1">Q:19 在shell脚本中，如何写入注释 ? <a class="header-anchor" href="#q-19-在shell脚本中-如何写入注释" aria-label="Permalink to “Q:19 在shell脚本中，如何写入注释 ?”">​</a></h3><p>答：注释可以用来描述一个脚本可以做什么和它是如何工作的。每一行注释以#开头。例子如下：</p><pre><code>#!/bin/bash
# This is a command
echo “I am logged in as $USER”
</code></pre><h3 id="q-20-如何让-shell-就脚本得到来自终端的输入" tabindex="-1">Q:20 如何让 shell 就脚本得到来自终端的输入? <a class="header-anchor" href="#q-20-如何让-shell-就脚本得到来自终端的输入" aria-label="Permalink to “Q:20 如何让 shell 就脚本得到来自终端的输入?”">​</a></h3><p>答：read命令可以读取来自终端（使用键盘）的数据。read命令得到用户的输入并置于你给出的变量中。例子如下：</p><pre><code># vi /tmp/test.sh

#!/bin/bash
echo ‘Please enter your name’
read name
echo “My Name is $name”

# ./test.sh
Please enter your name
LinuxTechi
My Name is LinuxTechi
</code></pre><h3 id="q-21-如何取消变量或取消变量赋值" tabindex="-1">Q:21 如何取消变量或取消变量赋值 ? <a class="header-anchor" href="#q-21-如何取消变量或取消变量赋值" aria-label="Permalink to “Q:21 如何取消变量或取消变量赋值 ?”">​</a></h3><p>答：“unset”命令用于取消变量或取消变量赋值。语法如下所示：</p><pre><code># unset &lt;变量名&gt;
</code></pre><h3 id="q-22-如何执行算术运算" tabindex="-1">Q:22 如何执行算术运算 ? <a class="header-anchor" href="#q-22-如何执行算术运算" aria-label="Permalink to “Q:22 如何执行算术运算 ?”">​</a></h3><p>答：有两种方法来执行算术运算：</p><p>1.使用<code>expr</code>命令（# expr 5 + 2） 2.用一个美元符号和方括号（<code>$[ 表达式 ]</code>）例如：test=$[16 + 4] ; test=$[16 + 4]</p><h3 id="q-23-do-while语句的基本格式" tabindex="-1">Q:23 do-while语句的基本格式 ? <a class="header-anchor" href="#q-23-do-while语句的基本格式" aria-label="Permalink to “Q:23 do-while语句的基本格式 ?”">​</a></h3><p>答：do-while语句类似于while语句，但检查条件语句之前先执行命令（LCTT 译注：意即至少执行一次。）。下面是用do-while语句的语法</p><pre><code>do
{
命令
} while (条件)
</code></pre><h3 id="q-24-在shell脚本如何定义函数呢" tabindex="-1">Q:24 在shell脚本如何定义函数呢 ? <a class="header-anchor" href="#q-24-在shell脚本如何定义函数呢" aria-label="Permalink to “Q:24 在shell脚本如何定义函数呢 ?”">​</a></h3><p>答：函数是拥有名字的代码块。当我们定义代码块，我们就可以在我们的脚本调用函数名字，该块就会被执行。示例如下所示：</p><pre><code>$ diskusage () { df -h ; }

译注：下面是我给的shell函数语法，原文没有

[ function ] 函数名 [()] 
{ 

  命令; 
  [return int;] 

}
</code></pre><h3 id="q-25-如何在shell脚本中使用bc-bash计算器" tabindex="-1">Q:25 如何在shell脚本中使用BC（bash计算器） ? <a class="header-anchor" href="#q-25-如何在shell脚本中使用bc-bash计算器" aria-label="Permalink to “Q:25 如何在shell脚本中使用BC（bash计算器） ?”">​</a></h3><p>答：使用下列格式，在shell脚本中使用bc：</p><pre><code>variable=\`echo “options; expression” | bc\`
</code></pre><hr>`,22)),e("p",null,[l[1]||(l[1]=a("via: ",-1)),t(n,{href:"http://www.linuxtechi.com/linux-shell-scripting-interview-questions-answers/"},{default:s(()=>[...l[0]||(l[0]=[a("http://www.linuxtechi.com/linux-shell-scripting-interview-questions-answers/",-1)])]),_:1})]),e("p",null,[l[5]||(l[5]=a("作者：",-1)),t(n,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:s(()=>[...l[2]||(l[2]=[a("Pradeep Kumar",-1)])]),_:1}),l[6]||(l[6]=a(" 译者：",-1)),t(n,{href:"http://vicyu.net"},{default:s(()=>[...l[3]||(l[3]=[a("VicYu/Vic020",-1)])]),_:1}),l[7]||(l[7]=a(" 校对：",-1)),t(n,{href:"https://github.com/wxy"},{default:s(()=>[...l[4]||(l[4]=[a("wxy",-1)])]),_:1})]),e("p",null,[l[10]||(l[10]=a("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...l[8]||(l[8]=[a("LCTT",-1)])]),_:1}),l[11]||(l[11]=a(" 原创翻译，",-1)),t(n,{href:"http://linux.cn/"},{default:s(()=>[...l[9]||(l[9]=[a("Linux中国",-1)])]),_:1}),l[12]||(l[12]=a(" 荣誉推出",-1))])])}const q=h(p,[["render",c]]);export{Q as __pageData,q as default};
