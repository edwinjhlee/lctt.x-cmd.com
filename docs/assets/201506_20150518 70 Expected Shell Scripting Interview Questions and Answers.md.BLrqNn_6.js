import{_ as n,a0 as t,w as d,s as c,ao as h,I as o,x as a,a1 as i,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"Shell 脚本面试问题大全 | LCTT x X-CMD","titleTemplate":false,"description":"Shell 脚本面试问题大全 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell 脚本面试问题大全 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell 脚本面试问题大全 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150518 70 Expected Shell Scripting Interview Questions and Answers","title":"Shell 脚本面试问题大全","tag":"201506","desc":""},"relativePath":"201506/20150518 70 Expected Shell Scripting Interview Questions and Answers.md","filePath":"[post].md"}'),s={name:"201506/20150518 70 Expected Shell Scripting Interview Questions and Answers.md"};function p(b,e,m,_,u,x){const r=t("Link");return d(),c("div",null,[e[16]||(e[16]=h(`<h1 id="shell-脚本面试问题大全" tabindex="-1">Shell 脚本面试问题大全 <a class="header-anchor" href="#shell-脚本面试问题大全" aria-label="Permalink to “Shell 脚本面试问题大全”">​</a></h1><p>我们为你的面试准备选择了 70 个你可能遇到的 shell 脚面问题及解答。了解脚本或至少知道基础知识对系统管理员来说至关重要，它也有助于你在工作环境中自动完成很多任务。在过去的几年里，我们注意到所有的 linux 工作职位都要求脚本技能。</p><h3 id="_1-如何向脚本传递参数" tabindex="-1">1) 如何向脚本传递参数 ? <a class="header-anchor" href="#_1-如何向脚本传递参数" aria-label="Permalink to “1) 如何向脚本传递参数 ?”">​</a></h3><pre><code>./script argument
</code></pre><p><strong>例子</strong> : 显示文件名称脚本</p><pre><code>./show.sh file1.txt

cat show.sh
#!/bin/bash
cat $1
</code></pre><h3 id="_2-如何在脚本中使用参数" tabindex="-1">2) 如何在脚本中使用参数 ? <a class="header-anchor" href="#_2-如何在脚本中使用参数" aria-label="Permalink to “2) 如何在脚本中使用参数 ?”">​</a></h3><p>第一个参数 : $1，第二个参数 : $2</p><p>例子 : 脚本会复制文件(arg1) 到目标地址(arg2)</p><pre><code>./copy.sh file1.txt /tmp/

cat copy.sh
#!/bin/bash
cp $1 $2
</code></pre><h3 id="_3-如何计算传递进来的参数" tabindex="-1">3) 如何计算传递进来的参数 ? <a class="header-anchor" href="#_3-如何计算传递进来的参数" aria-label="Permalink to “3) 如何计算传递进来的参数 ?”">​</a></h3><pre><code>$#
</code></pre><h3 id="_4-如何在脚本中获取脚本名称" tabindex="-1">4) 如何在脚本中获取脚本名称 ? <a class="header-anchor" href="#_4-如何在脚本中获取脚本名称" aria-label="Permalink to “4) 如何在脚本中获取脚本名称 ?”">​</a></h3><pre><code>$0
</code></pre><h3 id="_5-如何检查之前的命令是否运行成功" tabindex="-1">5) 如何检查之前的命令是否运行成功 ? <a class="header-anchor" href="#_5-如何检查之前的命令是否运行成功" aria-label="Permalink to “5) 如何检查之前的命令是否运行成功 ?”">​</a></h3><pre><code>$?
</code></pre><h3 id="_6-如何获取文件的最后一行" tabindex="-1">6) 如何获取文件的最后一行 ? <a class="header-anchor" href="#_6-如何获取文件的最后一行" aria-label="Permalink to “6) 如何获取文件的最后一行 ?”">​</a></h3><pre><code>tail -1
</code></pre><h3 id="_7-如何获取文件的第一行" tabindex="-1">7) 如何获取文件的第一行 ? <a class="header-anchor" href="#_7-如何获取文件的第一行" aria-label="Permalink to “7) 如何获取文件的第一行 ?”">​</a></h3><pre><code>head -1
</code></pre><h3 id="_8-如何获取一个文件每一行的第三个元素" tabindex="-1">8) 如何获取一个文件每一行的第三个元素 ? <a class="header-anchor" href="#_8-如何获取一个文件每一行的第三个元素" aria-label="Permalink to “8) 如何获取一个文件每一行的第三个元素 ?”">​</a></h3><pre><code>awk &#39;{print $3}&#39;
</code></pre><h3 id="_9-假如文件中每行第一个元素是-find-如何获取第二个元素" tabindex="-1">9) 假如文件中每行第一个元素是 FIND，如何获取第二个元素 <a class="header-anchor" href="#_9-假如文件中每行第一个元素是-find-如何获取第二个元素" aria-label="Permalink to “9) 假如文件中每行第一个元素是 FIND，如何获取第二个元素”">​</a></h3><pre><code>awk &#39;{ if ($1 == &quot;FIND&quot;) print $2}&#39;
</code></pre><h3 id="_10-如何调试-bash-脚本" tabindex="-1">10) 如何调试 bash 脚本 <a class="header-anchor" href="#_10-如何调试-bash-脚本" aria-label="Permalink to “10) 如何调试 bash 脚本”">​</a></h3><p>将 -xv 参数加到 #!/bin/bash 后</p><p>例子：</p><pre><code>#!/bin/bash –xv
</code></pre><h3 id="_11-举例如何写一个函数" tabindex="-1">11) 举例如何写一个函数 ? <a class="header-anchor" href="#_11-举例如何写一个函数" aria-label="Permalink to “11) 举例如何写一个函数 ?”">​</a></h3><pre><code>function example {
echo &quot;Hello world!&quot;
}
</code></pre><h3 id="_12-如何向连接两个字符串" tabindex="-1">12) 如何向连接两个字符串 ? <a class="header-anchor" href="#_12-如何向连接两个字符串" aria-label="Permalink to “12) 如何向连接两个字符串 ?”">​</a></h3><pre><code>V1=&quot;Hello&quot;
V2=&quot;World&quot;
V3=$V1+$V2
echo $V3
</code></pre><p>输出</p><pre><code>Hello+World
</code></pre><h3 id="_13-如何进行两个整数相加" tabindex="-1">13) 如何进行两个整数相加 ? <a class="header-anchor" href="#_13-如何进行两个整数相加" aria-label="Permalink to “13) 如何进行两个整数相加 ?”">​</a></h3><pre><code>V1=1
V2=2
V3=$V1+$V2
echo $V3
</code></pre><p>输出</p><pre><code>3
</code></pre><h3 id="_14-如何检查文件系统中是否存在某个文件" tabindex="-1">14) 如何检查文件系统中是否存在某个文件 ? <a class="header-anchor" href="#_14-如何检查文件系统中是否存在某个文件" aria-label="Permalink to “14) 如何检查文件系统中是否存在某个文件 ?”">​</a></h3><pre><code>if [ -f /var/log/messages ]
then
echo &quot;File exists&quot;
fi
</code></pre><h3 id="_15-写出-shell-脚本中所有循环语法" tabindex="-1">15) 写出 shell 脚本中所有循环语法 ? <a class="header-anchor" href="#_15-写出-shell-脚本中所有循环语法" aria-label="Permalink to “15) 写出 shell 脚本中所有循环语法 ?”">​</a></h3><h4 id="for-循环" tabindex="-1">for 循环 : <a class="header-anchor" href="#for-循环" aria-label="Permalink to “for 循环 :”">​</a></h4><pre><code>for i in $( ls ); do
echo item: $i
done
</code></pre><h4 id="while-循环" tabindex="-1">while 循环 : <a class="header-anchor" href="#while-循环" aria-label="Permalink to “while 循环 :”">​</a></h4><pre><code>#!/bin/bash
COUNTER=0
while [ $COUNTER -lt 10 ]; do
echo The counter is $COUNTER
let COUNTER=COUNTER+1
done
</code></pre><h4 id="until-循环" tabindex="-1">until 循环 : <a class="header-anchor" href="#until-循环" aria-label="Permalink to “until 循环 :”">​</a></h4><pre><code>#!/bin/bash
COUNTER=20
until [ $COUNTER -lt 10 ]; do
echo COUNTER $COUNTER
let COUNTER-=1
done
</code></pre><h3 id="_16-每个脚本开始的-bin-sh-或-bin-bash-表示什么意思" tabindex="-1">16) 每个脚本开始的 #!/bin/sh 或 #!/bin/bash 表示什么意思 ? <a class="header-anchor" href="#_16-每个脚本开始的-bin-sh-或-bin-bash-表示什么意思" aria-label="Permalink to “16) 每个脚本开始的 #!/bin/sh 或 #!/bin/bash 表示什么意思 ?”">​</a></h3>`,48)),o("p",null,[e[1]||(e[1]=a("这一行说明要使用的 shell。#!/bin/bash 表示脚本使用 /bin/bash。对于 python 脚本，就是 #!/usr/bin/python。（LCTT译注：这一行称之为",-1)),i(r,{href:"https://linux.cn/article-3664-1.html"},{default:l(()=>[...e[0]||(e[0]=[a("释伴行",-1)])]),_:1}),e[2]||(e[2]=a("。）",-1))]),e[17]||(e[17]=h(`<h3 id="_17-如何获取文本文件的第-10-行" tabindex="-1">17) 如何获取文本文件的第 10 行 ? <a class="header-anchor" href="#_17-如何获取文本文件的第-10-行" aria-label="Permalink to “17) 如何获取文本文件的第 10 行 ?”">​</a></h3><pre><code>head -10 file|tail -1
</code></pre><h3 id="_18-bash-脚本文件的第一个符号是什么" tabindex="-1">18) bash 脚本文件的第一个符号是什么 <a class="header-anchor" href="#_18-bash-脚本文件的第一个符号是什么" aria-label="Permalink to “18) bash 脚本文件的第一个符号是什么”">​</a></h3><pre><code>#
</code></pre><h3 id="_19-命令-z-echo-0-echo-1-的输出是什么" tabindex="-1">19) 命令：[ -z &quot;&quot; ] &amp;&amp; echo 0 || echo 1 的输出是什么 <a class="header-anchor" href="#_19-命令-z-echo-0-echo-1-的输出是什么" aria-label="Permalink to “19) 命令：[ -z  ] &amp;&amp; echo 0 || echo 1 的输出是什么”">​</a></h3><pre><code>0
</code></pre><h3 id="_20-命令-export-有什么用" tabindex="-1">20) 命令 “export” 有什么用 ? <a class="header-anchor" href="#_20-命令-export-有什么用" aria-label="Permalink to “20) 命令 “export” 有什么用 ?”">​</a></h3><p>使变量在子 shell 中可用。</p><h3 id="_21-如何在后台运行脚本" tabindex="-1">21) 如何在后台运行脚本 ? <a class="header-anchor" href="#_21-如何在后台运行脚本" aria-label="Permalink to “21) 如何在后台运行脚本 ?”">​</a></h3><p>在脚本后面添加 “&amp;”。</p><h3 id="_22-chmod-500-script-做什么" tabindex="-1">22) &quot;chmod 500 script&quot; 做什么 ? <a class="header-anchor" href="#_22-chmod-500-script-做什么" aria-label="Permalink to “22) chmod 500 script 做什么 ?”">​</a></h3><p>使脚本所有者拥有可执行权限。</p><h3 id="_23-做什么" tabindex="-1">23) &quot;&gt;&quot; 做什么 ? <a class="header-anchor" href="#_23-做什么" aria-label="Permalink to “23) &gt; 做什么 ?”">​</a></h3><p>重定向输出流到文件或另一个流。</p><h3 id="_24-和-有什么区别" tabindex="-1">24) &amp; 和 &amp;&amp; 有什么区别 <a class="header-anchor" href="#_24-和-有什么区别" aria-label="Permalink to “24) &amp; 和 &amp;&amp; 有什么区别”">​</a></h3><ul><li>&amp; - 希望脚本在后台运行的时候使用它</li><li>&amp;&amp; - 当前一个脚本成功完成才执行后面的命令/脚本的时候使用它</li></ul><h3 id="_25-什么时候要在-condition-之前使用-if" tabindex="-1">25) 什么时候要在 [ condition ] 之前使用 “if” ? <a class="header-anchor" href="#_25-什么时候要在-condition-之前使用-if" aria-label="Permalink to “25) 什么时候要在 [ condition ] 之前使用 “if” ?”">​</a></h3><p>当条件满足时需要运行多条命令的时候。</p><h3 id="_26-命令-name-john-echo-my-name-is-name-的输出是什么" tabindex="-1">26) 命令： name=John &amp;&amp; echo &#39;My name is $name&#39; 的输出是什么 <a class="header-anchor" href="#_26-命令-name-john-echo-my-name-is-name-的输出是什么" aria-label="Permalink to “26) 命令： name=John &amp;&amp; echo &#39;My name is $name&#39; 的输出是什么”">​</a></h3><pre><code>My name is $name
</code></pre><h3 id="_27-bash-shell-脚本中哪个符号用于注释" tabindex="-1">27) bash shell 脚本中哪个符号用于注释 ? <a class="header-anchor" href="#_27-bash-shell-脚本中哪个符号用于注释" aria-label="Permalink to “27) bash shell 脚本中哪个符号用于注释 ?”">​</a></h3><pre><code>#
</code></pre><h3 id="_28-命令-echo-new-variable-的输出是什么" tabindex="-1">28) 命令: echo \${new:-variable} 的输出是什么 <a class="header-anchor" href="#_28-命令-echo-new-variable-的输出是什么" aria-label="Permalink to “28) 命令: echo \${new:-variable} 的输出是什么”">​</a></h3><pre><code>variable
</code></pre><h3 id="_29-和-引号有什么区别" tabindex="-1">29) &#39; 和 &quot; 引号有什么区别 ? <a class="header-anchor" href="#_29-和-引号有什么区别" aria-label="Permalink to “29)  &#39; 和  引号有什么区别 ?”">​</a></h3><ul><li>&#39; - 当我们不希望把变量转换为值的时候使用它。</li><li>&quot; - 会计算所有变量的值并用值代替。</li></ul><h3 id="_30-如何在脚本文件中重定向标准输出和标准错误流到-log-txt-文件" tabindex="-1">30) 如何在脚本文件中重定向标准输出和标准错误流到 log.txt 文件 ? <a class="header-anchor" href="#_30-如何在脚本文件中重定向标准输出和标准错误流到-log-txt-文件" aria-label="Permalink to “30) 如何在脚本文件中重定向标准输出和标准错误流到 log.txt 文件 ?”">​</a></h3><p>在脚本文件中添加 &quot;exec &gt;log.txt 2&gt;&amp;1&quot; 命令。</p><h3 id="_31-如何只用-echo-命令获取字符串变量的一部分" tabindex="-1">31) 如何只用 echo 命令获取字符串变量的一部分 ? <a class="header-anchor" href="#_31-如何只用-echo-命令获取字符串变量的一部分" aria-label="Permalink to “31) 如何只用 echo 命令获取字符串变量的一部分 ?”">​</a></h3><pre><code>echo \${variable:x:y}
x - 起始位置
y - 长度
</code></pre><p>例子:</p><pre><code>variable=&quot;My name is Petras, and I am developer.&quot;
echo \${variable:11:6} # 会显示 Petras
</code></pre><h3 id="_32-如果给定字符串-variable-user-123-321-home-dir-如何只用-echo-命令获取-home-dir" tabindex="-1">32) 如果给定字符串 variable=&quot;User:123:321:/home/dir&quot;，如何只用 echo 命令获取 home_dir ? <a class="header-anchor" href="#_32-如果给定字符串-variable-user-123-321-home-dir-如何只用-echo-命令获取-home-dir" aria-label="Permalink to “32) 如果给定字符串 variable=User:123:321:/home/dir，如何只用 echo 命令获取 home_dir ?”">​</a></h3><pre><code>echo \${variable#*:*:*:}
</code></pre><p>或</p><pre><code>echo \${variable##*:}
</code></pre><h3 id="_33-如何从上面的字符串中获取-user" tabindex="-1">33) 如何从上面的字符串中获取 “User” ? <a class="header-anchor" href="#_33-如何从上面的字符串中获取-user" aria-label="Permalink to “33) 如何从上面的字符串中获取 “User”  ?”">​</a></h3><pre><code>echo \${variable%:*:*:*}
</code></pre><p>或</p><pre><code>echo \${variable%%:*}
</code></pre><h3 id="_34-如何使用-awk-列出-uid-小于-100-的用户" tabindex="-1">34) 如何使用 awk 列出 UID 小于 100 的用户 ? <a class="header-anchor" href="#_34-如何使用-awk-列出-uid-小于-100-的用户" aria-label="Permalink to “34) 如何使用 awk 列出 UID 小于 100 的用户 ?”">​</a></h3><pre><code>awk -F: &#39;$3&lt;100&#39; /etc/passwd
</code></pre><h3 id="_35-写程序为用户计算主组数目并显示次数和组名" tabindex="-1">35) 写程序为用户计算主组数目并显示次数和组名 <a class="header-anchor" href="#_35-写程序为用户计算主组数目并显示次数和组名" aria-label="Permalink to “35) 写程序为用户计算主组数目并显示次数和组名”">​</a></h3><pre><code>cat /etc/passwd|cut -d: -f4|sort|uniq -c|while read c g
do
{ echo $c; grep :$g: /etc/group|cut -d: -f1;}|xargs -n 2
done
</code></pre><h3 id="_36-如何在-bash-shell-中更改标准的域分隔符为" tabindex="-1">36) 如何在 bash shell 中更改标准的域分隔符为 &quot;:&quot; ? <a class="header-anchor" href="#_36-如何在-bash-shell-中更改标准的域分隔符为" aria-label="Permalink to “36) 如何在 bash shell 中更改标准的域分隔符为 : ?”">​</a></h3><pre><code>IFS=&quot;:&quot;
</code></pre><h3 id="_37-如何获取变量长度" tabindex="-1">37) 如何获取变量长度 ? <a class="header-anchor" href="#_37-如何获取变量长度" aria-label="Permalink to “37) 如何获取变量长度 ?”">​</a></h3><pre><code>\${#variable}
</code></pre><h3 id="_38-如何打印变量的最后-5-个字符" tabindex="-1">38) 如何打印变量的最后 5 个字符 ? <a class="header-anchor" href="#_38-如何打印变量的最后-5-个字符" aria-label="Permalink to “38) 如何打印变量的最后 5 个字符 ?”">​</a></h3><pre><code>echo \${variable: -5}
</code></pre><h3 id="_39-variable-10-和-variable-10-有什么区别" tabindex="-1">39) \${variable:-10} 和 \${variable: -10} 有什么区别? <a class="header-anchor" href="#_39-variable-10-和-variable-10-有什么区别" aria-label="Permalink to “39) \${variable:-10} 和 \${variable: -10} 有什么区别?”">​</a></h3><ul><li>\${variable:-10} - 如果之前没有给 variable 赋值则输出 10</li><li>\${variable: -10} - 输出 variable 的最后 10 个字符</li></ul><h3 id="_40-如何只用-echo-命令替换字符串的一部分" tabindex="-1">40) 如何只用 echo 命令替换字符串的一部分 ? <a class="header-anchor" href="#_40-如何只用-echo-命令替换字符串的一部分" aria-label="Permalink to “40) 如何只用 echo 命令替换字符串的一部分 ?”">​</a></h3><pre><code>echo \${variable//pattern/replacement}
</code></pre><h3 id="_41-哪个命令将命令替换为大写" tabindex="-1">41) 哪个命令将命令替换为大写 ? <a class="header-anchor" href="#_41-哪个命令将命令替换为大写" aria-label="Permalink to “41) 哪个命令将命令替换为大写 ?”">​</a></h3><pre><code>tr &#39;[:lower:]&#39; &#39;[:upper:]&#39;
</code></pre><h3 id="_42-如何计算本地用户数目" tabindex="-1">42) 如何计算本地用户数目 ? <a class="header-anchor" href="#_42-如何计算本地用户数目" aria-label="Permalink to “42) 如何计算本地用户数目 ?”">​</a></h3><p>wc -l /etc/passwd|cut -d&quot; &quot; -f1 或者 cat /etc/passwd|wc -l</p><h3 id="_43-不用-wc-命令如何计算字符串中的单词数目" tabindex="-1">43) 不用 wc 命令如何计算字符串中的单词数目 ? <a class="header-anchor" href="#_43-不用-wc-命令如何计算字符串中的单词数目" aria-label="Permalink to “43) 不用 wc 命令如何计算字符串中的单词数目 ?”">​</a></h3><pre><code>set \${string}
echo $#
</code></pre><h3 id="_44-export-variable-或-export-variable-哪个正确" tabindex="-1">44) &quot;export $variable&quot; 或 &quot;export variable&quot; 哪个正确 ? <a class="header-anchor" href="#_44-export-variable-或-export-variable-哪个正确" aria-label="Permalink to “44)  export $variable 或 export variable 哪个正确 ?”">​</a></h3><pre><code>export variable
</code></pre><h3 id="_45-如何列出第二个字母是-a-或-b-的文件" tabindex="-1">45) 如何列出第二个字母是 a 或 b 的文件 ? <a class="header-anchor" href="#_45-如何列出第二个字母是-a-或-b-的文件" aria-label="Permalink to “45) 如何列出第二个字母是 a 或 b 的文件 ?”">​</a></h3><pre><code>ls -d ?[ab]*
</code></pre><h3 id="_46-如何将整数-a-加到-b-并赋值给-c" tabindex="-1">46) 如何将整数 a 加到 b 并赋值给 c ? <a class="header-anchor" href="#_46-如何将整数-a-加到-b-并赋值给-c" aria-label="Permalink to “46) 如何将整数 a 加到 b 并赋值给 c ?”">​</a></h3><pre><code>c=$((a+b))
</code></pre><p>或</p><pre><code>c=\`expr $a + $b\`
</code></pre><p>或</p><pre><code>c=\`echo &quot;$a+$b&quot;|bc\`
</code></pre><h3 id="_47-如何去除字符串中的所有空格" tabindex="-1">47) 如何去除字符串中的所有空格 ? <a class="header-anchor" href="#_47-如何去除字符串中的所有空格" aria-label="Permalink to “47) 如何去除字符串中的所有空格 ?”">​</a></h3><pre><code>echo $string|tr -d &quot; &quot;
</code></pre><h3 id="_48-重写这个命令-将输出变量转换为复数-item-car-echo-i-like-item" tabindex="-1">48) 重写这个命令，将输出变量转换为复数: item=&quot;car&quot;; echo &quot;I like $item&quot; ? <a class="header-anchor" href="#_48-重写这个命令-将输出变量转换为复数-item-car-echo-i-like-item" aria-label="Permalink to “48) 重写这个命令，将输出变量转换为复数: item=car; echo I like $item ?”">​</a></h3><pre><code>item=&quot;car&quot;; echo &quot;I like \${item}s&quot;
</code></pre><h3 id="_49-写出输出数字-0-到-100-中-3-的倍数-0-3-6-9-的命令" tabindex="-1">49) 写出输出数字 0 到 100 中 3 的倍数(0 3 6 9 …)的命令 ? <a class="header-anchor" href="#_49-写出输出数字-0-到-100-中-3-的倍数-0-3-6-9-的命令" aria-label="Permalink to “49) 写出输出数字 0 到 100 中 3 的倍数(0 3 6 9 …)的命令 ?”">​</a></h3><pre><code>for i in {0..100..3}; do echo $i; done
</code></pre><p>或</p><pre><code>for (( i=0; i&lt;=100; i=i+3 )); do echo &quot;Welcome $i times&quot;; done
</code></pre><h3 id="_50-如何打印传递给脚本的所有参数" tabindex="-1">50) 如何打印传递给脚本的所有参数 ? <a class="header-anchor" href="#_50-如何打印传递给脚本的所有参数" aria-label="Permalink to “50) 如何打印传递给脚本的所有参数 ?”">​</a></h3><pre><code>echo $*
</code></pre><p>或</p><pre><code>echo $@
</code></pre><h3 id="_51-a-b-和-a-eq-b-有什么区别" tabindex="-1">51) [ $a == $b ] 和 [ $a -eq $b ] 有什么区别 <a class="header-anchor" href="#_51-a-b-和-a-eq-b-有什么区别" aria-label="Permalink to “51)  [ $a == $b ] 和 [ $a -eq $b ] 有什么区别”">​</a></h3><ul><li>[ $a == $b ] - 用于字符串比较</li><li>[ $a -eq $b ] - 用于数字比较</li></ul><h3 id="_52-和-有什么区别" tabindex="-1">52) = 和 == 有什么区别 <a class="header-anchor" href="#_52-和-有什么区别" aria-label="Permalink to “52) = 和 == 有什么区别”">​</a></h3><ul><li>= - 用于为变量复制</li><li>== - 用于字符串比较</li></ul><h3 id="_53-写出测试-a-是否大于-12-的命令" tabindex="-1">53) 写出测试 $a 是否大于 12 的命令 ? <a class="header-anchor" href="#_53-写出测试-a-是否大于-12-的命令" aria-label="Permalink to “53) 写出测试 $a 是否大于 12 的命令 ?”">​</a></h3><pre><code>[ $a -gt 12 ]
</code></pre><h3 id="_54-写出测试-b-是否小于等于-12-的命令" tabindex="-1">54) 写出测试 $b 是否小于等于 12 的命令 ? <a class="header-anchor" href="#_54-写出测试-b-是否小于等于-12-的命令" aria-label="Permalink to “54) 写出测试 $b 是否小于等于 12 的命令 ?”">​</a></h3><pre><code>[ $b -le 12 ]
</code></pre><h3 id="_55-如何检查字符串是否以字母-abc-开头" tabindex="-1">55) 如何检查字符串是否以字母 &quot;abc&quot; 开头 ? <a class="header-anchor" href="#_55-如何检查字符串是否以字母-abc-开头" aria-label="Permalink to “55) 如何检查字符串是否以字母 abc 开头 ?”">​</a></h3><pre><code>[[ $string == abc* ]]
</code></pre><h3 id="_56-string-abc-和-string-abc-有什么区别" tabindex="-1">56) [[ $string == abc* ]] 和 [[ $string == &quot;abc*&quot; ]] 有什么区别 <a class="header-anchor" href="#_56-string-abc-和-string-abc-有什么区别" aria-label="Permalink to “56) [[ $string == abc* ]] 和 [[ $string == abc* ]] 有什么区别”">​</a></h3><ul><li>[[ $string == abc* ]] - 检查字符串是否以字母 abc 开头</li><li>[[ $string == &quot;abc*&quot; ]] - 检查字符串是否完全等于 abc*</li></ul><h3 id="_57-如何列出以-ab-或-xy-开头的用户名" tabindex="-1">57) 如何列出以 ab 或 xy 开头的用户名 ? <a class="header-anchor" href="#_57-如何列出以-ab-或-xy-开头的用户名" aria-label="Permalink to “57) 如何列出以 ab 或 xy 开头的用户名 ?”">​</a></h3><pre><code>egrep &quot;^ab|^xy&quot; /etc/passwd|cut -d: -f1
</code></pre><h3 id="_58-bash-中-表示什么意思" tabindex="-1">58) bash 中 $! 表示什么意思 ? <a class="header-anchor" href="#_58-bash-中-表示什么意思" aria-label="Permalink to “58) bash 中 $! 表示什么意思 ?”">​</a></h3><p>后台最近执行命令的 PID.</p><h3 id="_59-表示什么意思" tabindex="-1">59) $? 表示什么意思 ? <a class="header-anchor" href="#_59-表示什么意思" aria-label="Permalink to “59) $? 表示什么意思 ?”">​</a></h3><p>前台最近命令的结束状态。</p><h3 id="_60-如何输出当前-shell-的-pid" tabindex="-1">60) 如何输出当前 shell 的 PID ? <a class="header-anchor" href="#_60-如何输出当前-shell-的-pid" aria-label="Permalink to “60) 如何输出当前 shell 的 PID ?”">​</a></h3><pre><code>echo $$
</code></pre><h3 id="_61-如何获取传递给脚本的参数数目" tabindex="-1">61) 如何获取传递给脚本的参数数目 ? <a class="header-anchor" href="#_61-如何获取传递给脚本的参数数目" aria-label="Permalink to “61) 如何获取传递给脚本的参数数目 ?”">​</a></h3><pre><code>echo $#
</code></pre><p>（LCTT 译注：和第3题重复了。）</p><h3 id="_62-和-有什么区别" tabindex="-1">62) $* 和 $@ 有什么区别 <a class="header-anchor" href="#_62-和-有什么区别" aria-label="Permalink to “62) $* 和 $@ 有什么区别”">​</a></h3><ul><li>$* - 以一个字符串形式输出所有传递到脚本的参数</li><li>$@ - 以 $IFS 为分隔符列出所有传递到脚本中的参数</li></ul><h3 id="_63-如何在-bash-中定义数组" tabindex="-1">63) 如何在 bash 中定义数组 ? <a class="header-anchor" href="#_63-如何在-bash-中定义数组" aria-label="Permalink to “63) 如何在 bash 中定义数组 ?”">​</a></h3><pre><code>array=(&quot;Hi&quot; &quot;my&quot; &quot;name&quot; &quot;is&quot;)
</code></pre><h3 id="_64-如何打印数组的第一个元素" tabindex="-1">64) 如何打印数组的第一个元素 ? <a class="header-anchor" href="#_64-如何打印数组的第一个元素" aria-label="Permalink to “64) 如何打印数组的第一个元素 ?”">​</a></h3><pre><code>echo \${array[0]}
</code></pre><h3 id="_65-如何打印数组的所有元素" tabindex="-1">65) 如何打印数组的所有元素 ? <a class="header-anchor" href="#_65-如何打印数组的所有元素" aria-label="Permalink to “65) 如何打印数组的所有元素 ?”">​</a></h3><pre><code>echo \${array[@]}
</code></pre><h3 id="_66-如何输出所有数组索引" tabindex="-1">66) 如何输出所有数组索引 ? <a class="header-anchor" href="#_66-如何输出所有数组索引" aria-label="Permalink to “66) 如何输出所有数组索引 ?”">​</a></h3><pre><code>echo \${!array[@]}
</code></pre><h3 id="_67-如何移除数组中索引为-2-的元素" tabindex="-1">67) 如何移除数组中索引为 2 的元素 ? <a class="header-anchor" href="#_67-如何移除数组中索引为-2-的元素" aria-label="Permalink to “67) 如何移除数组中索引为 2 的元素 ?”">​</a></h3><pre><code>unset array[2]
</code></pre><h3 id="_68-如何在数组中添加-id-为-333-的元素" tabindex="-1">68) 如何在数组中添加 id 为 333 的元素 ? <a class="header-anchor" href="#_68-如何在数组中添加-id-为-333-的元素" aria-label="Permalink to “68) 如何在数组中添加 id 为 333 的元素 ?”">​</a></h3><pre><code>array[333]=&quot;New_element&quot;
</code></pre><h3 id="_69-shell-脚本如何获取输入的值" tabindex="-1">69) shell 脚本如何获取输入的值 ? <a class="header-anchor" href="#_69-shell-脚本如何获取输入的值" aria-label="Permalink to “69) shell 脚本如何获取输入的值 ?”">​</a></h3><p>a) 通过参数</p><pre><code>./script param1 param2
</code></pre><p>b) 通过 read 命令</p><pre><code>read -p &quot;Destination backup Server : &quot; desthost
</code></pre><h3 id="_70-在脚本中如何使用-expect" tabindex="-1">70) 在脚本中如何使用 &quot;expect&quot; ? <a class="header-anchor" href="#_70-在脚本中如何使用-expect" aria-label="Permalink to “70) 在脚本中如何使用 expect ?”">​</a></h3><pre><code>/usr/bin/expect &lt;&lt; EOD
spawn rsync -ar \${line} \${desthost}:\${destpath}
expect &quot;*?assword:*&quot;
send &quot;\${password}\\r&quot;
expect eof
EOD
</code></pre><p>祝你好运 !! 如果你有任何疑问或者问题需要解答都可以在下面的评论框中写下来。让我们知道这对你的面试有所帮助:-)</p><hr>`,128)),o("p",null,[e[4]||(e[4]=a("via: ",-1)),i(r,{href:"http://linoxide.com/linux-shell-script/shell-scripting-interview-questions-answers/"},{default:l(()=>[...e[3]||(e[3]=[a("http://linoxide.com/linux-shell-script/shell-scripting-interview-questions-answers/",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=a("作者：",-1)),i(r,{href:"http://linoxide.com/author/petrasl/"},{default:l(()=>[...e[5]||(e[5]=[a("Petras Liumparas",-1)])]),_:1}),e[9]||(e[9]=a(" 译者：",-1)),i(r,{href:"https://github.com/ictlyh"},{default:l(()=>[...e[6]||(e[6]=[a("ictlyh",-1)])]),_:1}),e[10]||(e[10]=a(" 校对：",-1)),i(r,{href:"https://github.com/wxy"},{default:l(()=>[...e[7]||(e[7]=[a("wxy",-1)])]),_:1})]),o("p",null,[e[13]||(e[13]=a("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[11]||(e[11]=[a("LCTT",-1)])]),_:1}),e[14]||(e[14]=a(" 原创翻译，",-1)),i(r,{href:"https://linux.cn/"},{default:l(()=>[...e[12]||(e[12]=[a("Linux中国",-1)])]),_:1}),e[15]||(e[15]=a(" 荣誉推出",-1))])])}const P=n(s,[["render",p]]);export{k as __pageData,P as default};
