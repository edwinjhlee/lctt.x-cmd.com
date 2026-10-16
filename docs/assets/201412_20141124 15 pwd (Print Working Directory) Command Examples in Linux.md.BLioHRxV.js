import{_ as s,a0 as l,w as d,s as a,ao as p,I as t,x as e,a1 as r,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"菜鸟教程：全面学习 pwd 命令 | LCTT x X-CMD","titleTemplate":false,"description":"菜鸟教程：全面学习 pwd 命令 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"菜鸟教程：全面学习 pwd 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"菜鸟教程：全面学习 pwd 命令 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141124 15 pwd (Print Working Directory) Command Examples in Linux","title":"菜鸟教程：全面学习 pwd 命令","tag":"201412","desc":""},"relativePath":"201412/20141124 15 pwd (Print Working Directory) Command Examples in Linux.md","filePath":"[post].md"}'),m={name:"201412/20141124 15 pwd (Print Working Directory) Command Examples in Linux.md"};function g(w,n,c,h,u,f){const o=l("Link");return d(),a("div",null,[n[13]||(n[13]=p(`<h1 id="菜鸟教程-全面学习-pwd-命令" tabindex="-1">菜鸟教程：全面学习 pwd 命令 <a class="header-anchor" href="#菜鸟教程-全面学习-pwd-命令" aria-label="Permalink to “菜鸟教程：全面学习 pwd 命令”">​</a></h1><p>对于那些使用Linux命令行的人来说，‘<strong>pwd</strong>‘命令是非常有用的，它告诉你你现在在那个目录，从根目录(<strong>/</strong>)如何到达。特别是对于或许会在目录的切换间容易糊涂的Linux新手而言，‘<strong>pwd</strong>‘ 可以拯救他们。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/pwd-command.png" alt="15 pwd Command Examples"></p><p><em>15个 pwd 命令示例</em></p><h3 id="什么是pwd" tabindex="-1">什么是pwd? <a class="header-anchor" href="#什么是pwd" aria-label="Permalink to “什么是pwd?”">​</a></h3><p>‘<strong>pwd</strong>‘ 代表的是‘<strong>Print Working Directory</strong>’（打印当前目录）。如它的名字那样，‘<strong>pwd</strong>’会打印出当前工作目录，或简单的来说就是当前用户所位于的目录。它会打印出以根目录 (<strong>/</strong>)为起点的完整目录名（绝对目录）。这条命令是一条shell内建命令，并且在大多数shell中都可以使用，如bash、Bourne shell，ksh、zsh等等。</p><h4 id="pwd的基本语法" tabindex="-1">pwd的基本语法: <a class="header-anchor" href="#pwd的基本语法" aria-label="Permalink to “pwd的基本语法:”">​</a></h4><pre><code># pwd [OPTION]
</code></pre><h4 id="pwd的选项" tabindex="-1">pwd的选项 <a class="header-anchor" href="#pwd的选项" aria-label="Permalink to “pwd的选项”">​</a></h4>`,9)),n[14]||(n[14]=t("table",{border:"0",cellspacing:"0"},[t("colgroup",{width:"126"}),t("colgroup",{width:"450"}),t("tbody",null,[t("tr",null,[t("td",{height:"21",align:"LEFT",style:{border:"1px solid #000000"}},[t("b",null,[t("span",{style:{"font-size":"small"}}," 选项")])]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("b",null,[t("span",{style:{"font-size":"small"}}," 描述")])])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," -L (即逻辑路径logical )")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 使用环境中的路径，即使包含了符号链接")])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," -P (即物理路径physical)")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 避免所有的符号链接")])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," –help ")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 显示帮助并退出")])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," –version")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 输出版本信息并退出")])])])],-1)),n[15]||(n[15]=t("p",null,[e("如果同时使用了‘"),t("strong",null,"-L"),e("‘和‘"),t("strong",null,"-P"),e("‘，‘"),t("strong",null,"-L"),e("‘会有更高的优先级。如果没有指定参数，pwd会避开所有的软链接，也就是说会使用‘"),t("strong",null,"-P"),e("‘参数。")],-1)),n[16]||(n[16]=t("p",null,"pwd的退出状态:",-1)),n[17]||(n[17]=t("table",{border:"0",cellspacing:"0"},[t("colgroup",{width:"128"}),t("colgroup",{width:"151"}),t("tbody",null,[t("tr",null,[t("td",{height:"19",align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"0")]),t("td",{align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"成功")])]),t("tr",null,[t("td",{height:"19",align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"非零值")]),t("td",{align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"失败")])])])],-1)),n[18]||(n[18]=p(`<p>本篇的目的是采用例子让你对‘<strong>pwd</strong>‘有更深入的领悟。</p><p><strong>1.</strong> 打印当前工作目录.</p><pre><code>avi@tecmint:~$ /bin/pwd

/home/avi
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/pwd.gif" alt="Print Working Directory"></p><p><em>打印工作目录</em></p><p><strong>2.</strong> 为文件夹创建一个符号链接（比如说在home目录下创建一个<strong>htm</strong>链接指向<strong>/var/www/html</strong>）。进入新创建的目录并打印出含有以及不含符号链接的目录。</p><p>在home目录下创建一个htm链接指向/var/www/html，并进入。</p><pre><code>avi@tecmint:~$ ln -s /var/www/html/ htm
avi@tecmint:~$ cd htm
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Create-Symbolic-Link.gif" alt="Create Symbolic Link"></p><p><em>创建符号链接</em></p><p><strong>3.</strong> 从当前环境中打印目录即使它含有符号链接。</p><pre><code>avi@tecmint:~$ /bin/pwd -L

/home/avi/htm
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Print-Working-Directory.gif" alt="Print Current Working Directory"></p><p><em>打印工作目录</em></p><p><strong>4.</strong> 解析符号链接并打印出物理目录。</p><pre><code>avi@tecmint:~$ /bin/pwd -P

/var/www/html
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Print-Physical-Working-Directory.gif" alt="Print Physical Working Directory"></p><p><em>打印物理工作目录</em></p><p><strong>5.</strong> 查看一下“<strong>pwd</strong>”和“<strong>pwd -P</strong>”的输出是否一致，也就是说，如果没有跟上选项，“<strong>pwd</strong>”时候会自动采用<strong>-P</strong>选项。</p><pre><code>avi@tecmint:~$ /bin/pwd

/var/www/html
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-pwd-Output.gif" alt="Check pwd Output"></p><p><em>检查pwd输出</em></p><p><strong>结论：</strong> 上面例子4和5的输出很明显（结果相同），当你“<strong>pwd</strong>”后面不带参数时，pwd会使用“<strong>-P</strong>”选项。</p><p><strong>6.</strong> 打印pwd命令的版本。</p><pre><code>avi@tecmint:~$ /bin/pwd --version

pwd (GNU coreutils) 8.23
Copyright (C) 2014 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later &lt;http://gnu.org/licenses/gpl.html&gt;.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Jim Meyering.
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-pwd-Version.gif" alt="Check pwd Version"></p><p><em>检查pwd命令版本</em></p><p><strong>注意：</strong> ‘pwd’ 通常不带选项运行，且没有任何参数</p><p><strong>重要：</strong> 你可能注意到我们刚才运行的都是 “<strong>/bin/pwd</strong>” 而不是 “<strong>pwd</strong>”。</p><p>这有什么区别呢？直接使用“<strong>pwd</strong>”意味着使用shell内置的pwd。你的shell可能有不同版本的pwd。具体请参考手册。当你使用的是<strong>/bin/pwd</strong>时，我们调用的是二进制版本的命令。虽然二进制的版本有更多的选项，但是它们两者都能打印当前的目录。</p><p><strong>7.</strong> 打印所有含有可执行pwd的路径</p><pre><code>avi@tecmint:~$ type -a pwd

pwd is a shell builtin
pwd is /bin/pwd
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Print-Executable-Locations.gif" alt="Print Executable Locations"></p><p><em>打印可执行文件路径</em></p><p><strong>8.</strong> 存储“<strong>pwd</strong>”命令的值到变量中（比如说：<strong>a</strong> ），并从中打印变量的值（对于观察shell脚本很重要）。</p><pre><code>avi@tecmint:~$ a=$(pwd)
avi@tecmint:~$ echo &quot;Current working directory is : $a&quot;

Current working directory is : /home/avi
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Store-Pwd-Value-in-Variable.gif" alt="Store Pwd Value in Variable"></p><p><em>存储pwd的值到变量中</em></p><p>下面的例子中也可以用<strong>printf</strong>来替代。</p><p><strong>9.</strong> 将工作路径切换到其他地方（比如说 <strong>/home</strong>），并在命令行中显示。通过执行命令（比如说 ‘<strong>ls</strong>‘）来验证一切<strong>OK</strong>。</p><pre><code>avi@tecmint:~$ cd /home
avi@tecmint:~$ PS1=&#39;$pwd&gt; &#39;		[注意例子中的单引号]
&gt; ls
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Change-Current-Working-Directory.gif" alt="Change Current Working Directory"></p><p><em>改变当前工作路径</em></p><p><strong>10.</strong> 设置多行显示 （就像下面这样），</p><pre><code>/home
123#Hello#!
</code></pre><p>接着执行命令（比如说 <strong>ls</strong>）来检验一切<strong>OK</strong>。</p><pre><code>avi@tecmint:~$ PS1=&#39;
&gt; $PWD
$ 123#Hello#!
$ &#39;

/home
123#Hello#!
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Set-Multi-Commandline-Prompt.gif" alt="Set Multi Commandline Prompt"></p><p><em>设置多行显示</em></p><p><strong>11.</strong> 一下子检查当前工作路径以及先前的工作路径。</p><pre><code>avi@tecmint:~$ echo “$PWD $OLDPWD”

/home /home/avi
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-Present-Previous-Working-Directory.gif" alt="Check Present Previous Working Directory"></p><p><em>检查当前工作路径</em></p><p><strong>12.</strong> pwd文件的绝对路径（以<strong>/</strong>开始）。</p><pre><code>/bin/pwd 
</code></pre><p><strong>13.</strong> pwd源文件文件的绝对路径（以<strong>/</strong>开始）。</p><pre><code>/usr/include/pwd.h 
</code></pre><p><strong>13.</strong> pwd手册的绝对路径（以<strong>/</strong>开始）。</p><pre><code>/usr/share/man/man1/pwd.1.gz
</code></pre><p><strong>15.</strong> 写一个shell脚本分析home目录下的一个目录（比如<strong>tecmint</strong>）。如果当前目录是<strong>tecmint</strong>就输出“<strong>Well! You are in tecmint directory</strong>”接着输出“<strong>Good Bye</strong>”，不然就在<strong>tecmint</strong>下面创建一个目录并提示你cd进入它。</p><p>让我们首先创建一个‘tecmint’目录，在下面创建一个名为‘pwd.sh’的脚本文件。</p><pre><code>avi@tecmint:~$ mkdir tecmint
avi@tecmint:~$ cd tecmint
avi@tecmint:~$ nano pwd.sh
</code></pre><p>接下来在pwd.sh中加入下面的脚本。</p><pre><code>#!/bin/bash

x=&quot;$(pwd)&quot;
if [ &quot;$x&quot; == &quot;/home/$USER/tecmint&quot; ]
then
     {
      echo &quot;Well you are in tecmint directory&quot;
      echo &quot;Good Bye&quot;
     }
else
     {
      mkdir /home/$USER/tecmint
      echo &quot;Created Directory tecmint you may now cd to it&quot;
     }
fi
</code></pre><p>给予执行权限并运行。</p><pre><code>avi@tecmint:~$ chmod 755 pwd.sh
avi@tecmint:~$ ./pwd.sh

Well you are in tecmint directory
Good Bye
</code></pre><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h4><p><strong>pwd</strong>是一个最简单且会广泛用到的命令。掌握好pwd是使用Linux终端的基础。就是这些了。我很快会再带来另外有趣的文章，请不要走开继续关注我们。</p><hr>`,69)),t("p",null,[n[1]||(n[1]=e("via: ",-1)),r(o,{href:"http://www.tecmint.com/pwd-command-examples/"},{default:i(()=>[...n[0]||(n[0]=[e("http://www.tecmint.com/pwd-command-examples/",-1)])]),_:1})]),t("p",null,[n[5]||(n[5]=e("作者：",-1)),r(o,{href:"http://www.tecmint.com/author/avishek/"},{default:i(()=>[...n[2]||(n[2]=[e("Avishek Kumar",-1)])]),_:1}),n[6]||(n[6]=e(" 译者：",-1)),r(o,{href:"https://github.com/geekpi"},{default:i(()=>[...n[3]||(n[3]=[e("geekpi",-1)])]),_:1}),n[7]||(n[7]=e(" 校对：",-1)),r(o,{href:"https://github.com/wxy"},{default:i(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[10]||(n[10]=e("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原创翻译，",-1)),r(o,{href:"http://linux.cn/"},{default:i(()=>[...n[9]||(n[9]=[e("Linux中国",-1)])]),_:1}),n[12]||(n[12]=e(" 荣誉推出",-1))])])}const x=s(m,[["render",g]]);export{T as __pageData,x as default};
