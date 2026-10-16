import{_ as o,a0 as l,w as d,s as m,I as n,x as t,a1 as r,A as i,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"Linux mkdir、tar 和 kill 命令的 4 个有用小技巧 | LCTT x X-CMD","titleTemplate":false,"description":"Linux mkdir、tar 和 kill 命令的 4 个有用小技巧 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux mkdir、tar 和 kill 命令的 4 个有用小技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux mkdir、tar 和 kill 命令的 4 个有用小技巧 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150629 4 Useful Tips on mkdir, tar and kill Commands in Linux","title":"Linux mkdir、tar 和 kill 命令的 4 个有用小技巧","tag":"201507","desc":""},"relativePath":"201507/20150629 4 Useful Tips on mkdir, tar and kill Commands in Linux.md","filePath":"[post].md"}'),s={name:"201507/20150629 4 Useful Tips on mkdir, tar and kill Commands in Linux.md"};function u(k,e,x,c,f,h){const p=l("Link");return d(),m("div",null,[e[22]||(e[22]=n("h1",{id:"linux-mkdir、tar-和-kill-命令的-4-个有用小技巧",tabindex:"-1"},[t("Linux mkdir、tar 和 kill 命令的 4 个有用小技巧 "),n("a",{class:"header-anchor",href:"#linux-mkdir、tar-和-kill-命令的-4-个有用小技巧","aria-label":"Permalink to “Linux mkdir、tar 和 kill 命令的 4 个有用小技巧”"},"​")],-1)),n("p",null,[e[1]||(e[1]=t("我们一直以常规的方式完成一个任务，直到我们知道有更好的处理方法。作为 ",-1)),r(p,{href:"http://www.tecmint.com/tag/linux-tricks/"},{default:i(()=>[...e[0]||(e[0]=[t("Linux 技巧和绝招系列",-1)])]),_:1}),e[2]||(e[2]=t(" 的后续，我会在这里介绍能在各个方面给你帮助的 4 个小技巧。开始吧！",-1))]),e[23]||(e[23]=a(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Linux-Useful-Tips.jpg" alt="有用的 Linux 小技巧"></p><p><em>4 个有用的 Linux 小技巧</em></p><h3 id="_1-假设你要创建一个类似于下面很长的-复杂的目录树。实现这最有效的方法是什么呢" tabindex="-1">1. 假设你要创建一个类似于下面很长的/复杂的目录树。实现这最有效的方法是什么呢？ <a class="header-anchor" href="#_1-假设你要创建一个类似于下面很长的-复杂的目录树。实现这最有效的方法是什么呢" aria-label="Permalink to “1. 假设你要创建一个类似于下面很长的/复杂的目录树。实现这最有效的方法是什么呢？”">​</a></h3><p>类似下面要实现的目录树结构。</p><pre><code>$ cd /home/$USER/Desktop
$ mkdir tecmint
$ mkdir tecmint/etc
$ mkdir tecmint/lib
$ mkdir tecmint/usr
$ mkdir tecmint/bin
$ mkdir tecmint/tmp
$ mkdir tecmint/opt
$ mkdir tecmint/var
$ mkdir tecmint/etc/x1
$ mkdir tecmint/usr/x2
$ mkdir tecmint/usr/x3
$ mkdir tecmint/tmp/Y1
$ mkdir tecmint/tmp/Y2
$ mkdir tecmint/tmp/Y3
$ mkdir tecmint/tmp/Y3/z
</code></pre><p>上述情况可以简单地通过运行下面一行命令来实现。</p><pre><code>$ mkdir -p /home/$USER/Desktop/tecmint/{etc/x1,lib,usr/{x2,x3},bin,tmp/{Y1,Y2,Y3/z},opt,var}
</code></pre><p>你可以用 tree 命令验证。如果没有安装你可以使用 apt 或 yum 安装 ‘tree’ 软件包。</p><pre><code>$ tree tecmint
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-Directory-Structure.png" alt="检查目录结构"></p><p><em>检查目录结构</em></p><p>我们可以用上面的方式创建任意复杂的目录树结构。注意这仅仅是一个普通的命令，但是用 ‘{}’ 来创建层级目录。需要的时候如果在 shell 脚本中使用是非常有用的。</p><h3 id="_2-在桌面-home-user-desktop-创建一个文件-例如-test-并填入以下内容。" tabindex="-1">2. 在桌面（/home/$USER/Desktop）创建一个文件（例如 test）并填入以下内容。 <a class="header-anchor" href="#_2-在桌面-home-user-desktop-创建一个文件-例如-test-并填入以下内容。" aria-label="Permalink to “2. 在桌面（/home/$USER/Desktop）创建一个文件（例如 test）并填入以下内容。”">​</a></h3><pre><code>ABC
DEF
GHI
JKL
MNO
PQR
STU
VWX
Y
Z
</code></pre><p>这种情况一个普通用户会怎么做呢？</p>`,15)),n("p",null,[e[4]||(e[4]=t("a. 他首先会创建文件，最好使用 ",-1)),r(p,{href:"http://www.tecmint.com/8-pratical-examples-of-linux-touch-command/"},{default:i(()=>[...e[3]||(e[3]=[t("touch 命令",-1)])]),_:1}),e[5]||(e[5]=t("，例如：",-1))]),e[24]||(e[24]=a(`<pre><code>$ touch /home/$USER/Desktop/test
</code></pre><p>b. 他会用一个文本编辑器打开文件，这可能是 nano、vim 或其它编辑器。</p><pre><code>$ nano /home/$USER/Desktop/test
</code></pre><p>c. 然后他会将上面的内容输入到文件中，保存并退出。</p><p>忽略他/她使用的时间，他至少需要 3 步来执行上面的情况。</p><p>一个经验丰富的 Linux 用户会怎么做呢？他会在终端中输入下面的文本然后就完成所有任务。他不需要单独执行每一步。</p><pre><code>cat &lt;&lt; EOF &gt; /home/$USER/Desktop/test
ABC
DEF
GHI
JKL
MNO
PQR
STU
VWX
Y
Z
EOF
</code></pre><p>你可以用 ‘cat’ 命令检查是否成功创建了文件和内容。</p><pre><code>$ cat /home/avi/Desktop/test
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-File-Content.gif" alt="检查文件内容"></p><h3 id="_3-我们经常在-linux-中处理归档文件-尤其是-tar-包-。很多情况下我们会在某些位置-而不是在-downloads-目录中使用-tar-包。这种情况下我们怎么做呢" tabindex="-1">3. 我们经常在 Linux 中处理归档文件（尤其是 TAR 包）。很多情况下我们会在某些位置，而不是在 Downloads 目录中使用 TAR 包。这种情况下我们怎么做呢？ <a class="header-anchor" href="#_3-我们经常在-linux-中处理归档文件-尤其是-tar-包-。很多情况下我们会在某些位置-而不是在-downloads-目录中使用-tar-包。这种情况下我们怎么做呢" aria-label="Permalink to “3. 我们经常在 Linux 中处理归档文件（尤其是 TAR 包）。很多情况下我们会在某些位置，而不是在 Downloads 目录中使用 TAR 包。这种情况下我们怎么做呢？”">​</a></h3><p>在这种情况下我们通常会做两件事。</p><p>a. 复制/移动 tar 包到目标位置并解压，例如：</p><pre><code>$ cp firefox-37.0.2.tar.bz2 /opt/
或
$ mv firefox-37.0.2.tar.bz2 /opt/
</code></pre><p>b. cd 到 /opt/ 目录。</p><pre><code>$ cd /opt/
</code></pre><p>c. 解压 tar 包。</p><pre><code># tar -jxvf firefox-37.0.2.tar.bz2 
</code></pre><p>我们也可以采用另外一种方式。</p><p>我们也可以在 Tar 包所在位置解压并复制/移动解压后的文件到所需的目标位置，例如：</p><pre><code>$ tar -jxvf firefox-37.0.2.tar.bz2 
$ cp -R firefox/  /opt/
或
$ mv firefox/ /opt/
</code></pre><p>不管哪种方式都需要两步才能完成任务。专业的人可以只用一步就完成这个任务：</p><pre><code>$ tar -jxvf firefox-37.0.2.tar.bz2 -C /opt/
</code></pre><p>-C 选项提取文件到指定目录（这里是 /opt/）。</p><p>这并不是关于选项（-C）的问题，<strong>而是习惯的问题</strong>。养成使用带 -C 选项 tar 命令的习惯。这会使你的工作更加轻松。从现在开始不要再移动归档文件或复制/移动解压后的文件了，在 Downloads 文件夹保存 tar 包并解压到你想要的任何地方吧。</p><h3 id="_4-常规方式我们怎样杀掉一个进程" tabindex="-1">4. 常规方式我们怎样杀掉一个进程？ <a class="header-anchor" href="#_4-常规方式我们怎样杀掉一个进程" aria-label="Permalink to “4. 常规方式我们怎样杀掉一个进程？”">​</a></h3><p>最普遍的方法，我们首先用 <code>ps -A</code> 命令列出所有进程，然后通过管道输入到 grep 来查找进程/服务（假如 apache2），如下：</p><pre><code>$ ps -A | grep -i apache2
</code></pre><h4 id="输出样例" tabindex="-1">输出样例 <a class="header-anchor" href="#输出样例" aria-label="Permalink to “输出样例”">​</a></h4><pre><code> 1006 ?        00:00:00 apache2
 2702 ?        00:00:00 apache2
 2703 ?        00:00:00 apache2
 2704 ?        00:00:00 apache2
 2705 ?        00:00:00 apache2
 2706 ?        00:00:00 apache2
 2707 ?        00:00:00 apache2
</code></pre><p>上面的输出显示了所有正在运行 apache2 的进程以及它们的 PID，然后你可以使用这些 PID 在下面命令的帮助下杀掉 apache2。</p><pre><code># kill 1006 2702 2703 2704 2705 2706 2707
</code></pre><p>然后交叉检查是否还有名称中包含 ‘apache2’ 的进程/服务在运行，如下：</p><pre><code>$ ps -A | grep -i apache2
</code></pre><p>实际上我们可以使用类似 pgrep 和 pkill 的工具以一种更容易理解的方式实现。你可以使用 pgrep 找到和一个进程相关的信息。假如你要找和 apache2 相关的进程信息，你只需要运行：</p><pre><code>$ pgrep apache2
</code></pre><h4 id="输出样例-1" tabindex="-1">输出样例 <a class="header-anchor" href="#输出样例-1" aria-label="Permalink to “输出样例”">​</a></h4><pre><code>15396
15400
15401
15402
15403
15404
15405
</code></pre><p>你也可以通过运行下面命令列出进程名称以及 pid。</p><pre><code>$ pgrep -l apache2
</code></pre><h4 id="输出样例-2" tabindex="-1">输出样例 <a class="header-anchor" href="#输出样例-2" aria-label="Permalink to “输出样例”">​</a></h4><pre><code>15396 apache2
15400 apache2
15401 apache2
15402 apache2
15403 apache2
15404 apache2
15405 apache2
</code></pre>`,42)),n("p",null,[e[7]||(e[7]=t("用 pkill 杀掉进程非常简单。你只需要输入想要杀死的资源名称。我写了一篇关于 pkill 的博文，你可以参考： ",-1)),r(p,{href:"http://www.tecmint.com/how-to-kill-a-process-in-linux/"},{default:i(()=>[...e[6]||(e[6]=[t("http://www.tecmint.com/how-to-kill-a-process-in-linux/",-1)])]),_:1}),e[8]||(e[8]=t("。",-1))]),e[25]||(e[25]=n("p",null,"用 pkill 杀死一个进程（例如 apache2），你只需要输入以下命令：",-1)),e[26]||(e[26]=n("pre",null,[n("code",null,`# pkill apache2
`)],-1)),e[27]||(e[27]=n("p",null,"你可以通过运行下面命令验证是否杀掉了 apache2。",-1)),e[28]||(e[28]=n("pre",null,[n("code",null,`$ pgrep -l apache2
`)],-1)),e[29]||(e[29]=n("p",null,"它没有输出任何东西并返回到窗口意味着没有名称中包含 apache2 的进程在运行。",-1)),e[30]||(e[30]=n("p",null,[t("这就是我要说的所有东西。上面讨论的点肯定远远不够，但也肯定对你有所帮助。我们不仅仅是介绍教程使你学到一些新的东西，更重要的是想告诉你 ‘"),n("strong",null,"在同样的情况下如何变得更有效率"),t("’。在下面的评论框中告诉我们你的反馈吧。保持联系，继续评论。")],-1)),e[31]||(e[31]=n("hr",null,null,-1)),n("p",null,[e[10]||(e[10]=t("via: ",-1)),r(p,{href:"http://www.tecmint.com/mkdir-tar-and-kill-commands-in-linux/"},{default:i(()=>[...e[9]||(e[9]=[t("http://www.tecmint.com/mkdir-tar-and-kill-commands-in-linux/",-1)])]),_:1})]),n("p",null,[e[14]||(e[14]=t("作者：",-1)),r(p,{href:"http://www.tecmint.com/author/avishek/"},{default:i(()=>[...e[11]||(e[11]=[t("Avishek Kumar",-1)])]),_:1}),e[15]||(e[15]=t(" 译者：",-1)),r(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...e[12]||(e[12]=[t("ictlyh",-1)])]),_:1}),e[16]||(e[16]=t(" 校对：",-1)),r(p,{href:"https://github.com/wxy"},{default:i(()=>[...e[13]||(e[13]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[19]||(e[19]=t("本文由 ",-1)),r(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原创翻译，",-1)),r(p,{href:"https://linux.cn/"},{default:i(()=>[...e[18]||(e[18]=[t("Linux中国",-1)])]),_:1}),e[21]||(e[21]=t(" 荣誉推出",-1))])])}const C=o(s,[["render",u]]);export{T as __pageData,C as default};
