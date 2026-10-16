import{_ as p,a0 as o,w as a,s as d,ao as s,I as n,x as t,a1 as l,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除 | LCTT x X-CMD","titleTemplate":false,"description":"LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除 | LCTT (LFCS) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除 | LCTT (LFCS) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"LFCS/Part 10 - LFCS--Understanding and Learning Basic Shell Scripting and Linux Filesystem Troubleshooting","title":"LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除","tag":"LFCS","desc":""},"relativePath":"LFCS/Part 10 - LFCS--Understanding and Learning Basic Shell Scripting and Linux Filesystem Troubleshooting.md","filePath":"[post].md"}'),m={name:"LFCS/Part 10 - LFCS--Understanding and Learning Basic Shell Scripting and Linux Filesystem Troubleshooting.md"};function h(u,e,c,g,f,S){const i=o("Link");return a(),d("div",null,[e[26]||(e[26]=s('<h1 id="lfcs-系列第十讲-学习简单的-shell-脚本编程和文件系统故障排除" tabindex="-1">LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除 <a class="header-anchor" href="#lfcs-系列第十讲-学习简单的-shell-脚本编程和文件系统故障排除" aria-label="Permalink to “LFCS 系列第十讲：学习简单的 Shell 脚本编程和文件系统故障排除”">​</a></h1><p>Linux 基金会发起了 LFCS 认证 (Linux Foundation Certified Sysadmin，Linux 基金会认证系统管理员)，这是一个全新的认证体系，旨在让世界各地的人能够参与到中等水平的 Linux 系统的基本管理操作的认证考试中去，这项认证包括：维护正在运行的系统和服务的能力、全面监控和分析的能力以及何时向上游团队请求支持的决策能力。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/lfcs-Part-10.png" alt="Basic Shell Scripting and Filesystem Troubleshooting"></p><p><em>LFCS 系列第十讲</em></p><p>请看以下视频，这里边介绍了 Linux 基金会认证程序。</p><video src="https://dn-linuxcn.qbox.me/static%2Fvideo%2FIntroducing%20The%20Linux%20Foundation%20Certification%20Program-Y29qZ71Kicg.mp4" controls="controls" width="100%"></video><p>本讲是系列教程中的第十讲，主要集中讲解简单的 Shell 脚本编程和文件系统故障排除。这两块内容都是 LFCS 认证中的必备考点。</p><h3 id="理解终端-terminals-和-shell" tabindex="-1">理解终端 (Terminals) 和 Shell <a class="header-anchor" href="#理解终端-terminals-和-shell" aria-label="Permalink to “理解终端 (Terminals) 和 Shell”">​</a></h3><p>首先要声明一些概念。</p><ul><li>Shell 是一个程序，它将命令传递给操作系统来执行。</li><li>Terminal 也是一个程序，允许最终用户使用它与 Shell 来交互。比如，下边的图片是 GNOME Terminal。</li></ul><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Gnome-Terminal.png" alt="Gnome Terminal"></p><p><em>Gnome Terminal</em></p><p>启动 Shell 之后，会呈现一个命令提示符 (也称为命令行) 提示我们 Shell 已经做好了准备，接受标准输入设备输入的命令，这个标准输入设备通常是键盘。</p>',13)),n("p",null,[e[1]||(e[1]=t("你可以参考该系列文章的 ",-1)),l(i,{href:"https://linux.cn/article-7161-1.html"},{default:r(()=>[...e[0]||(e[0]=[t("第一讲 如何在 Linux 上使用 GNU sed 等命令来创建、编辑和操作文件",-1)])]),_:1}),e[2]||(e[2]=t(" 来温习一些常用的命令。",-1))]),e[27]||(e[27]=s('<p>Linux 为提供了许多可以选用的 Shell，下面列出一些常用的：</p><p><strong>bash Shell</strong></p><p>Bash 代表 Bourne Again Shell，它是 GNU 项目默认的 Shell。它借鉴了 Korn shell (ksh) 和 C shell (csh) 中有用的特性，并同时对性能进行了提升。它同时也是 LFCS 认证中所涵盖的各发行版中默认 Shell，也是本系列教程将使用的 Shell。</p><p><strong>sh Shell</strong></p><p>Bourne SHell 是一个比较古老的 shell，多年来一直都是很多类 Unix 系统的默认 shell。</p><p><strong>ksh Shell</strong></p><p>Korn SHell (ksh shell) 也是一个 Unix shell，是贝尔实验室 (Bell Labs) 的 David Korn 在 19 世纪 80 年代初的时候开发的。它兼容 Bourne shell ，并同时包含了 C shell 中的多数特性。</p><p>一个 shell 脚本仅仅只是一个可执行的文本文件，里边包含一条条可执行命令。</p><h3 id="简单的-shell-脚本编程" tabindex="-1">简单的 Shell 脚本编程 <a class="header-anchor" href="#简单的-shell-脚本编程" aria-label="Permalink to “简单的 Shell 脚本编程”">​</a></h3>',9)),n("p",null,[e[4]||(e[4]=t("如前所述，一个 shell 脚本就是一个纯文本文件，因此，可以使用自己喜欢的文本编辑器来创建和编辑。你可以考虑使用 vi/vim (参考本系列 ",-1)),l(i,{href:"https://linux.cn/article-7165-1.html"},{default:r(()=>[...e[3]||(e[3]=[t("第二讲 如何安装和使用纯文本编辑器 vi/vim",-1)])]),_:1}),e[5]||(e[5]=t(")，它的语法高亮让我的编辑工作非常方便。",-1))]),e[28]||(e[28]=n("p",null,"输入如下命令来创建一个名为 myscript.sh 的脚本文件：",-1)),e[29]||(e[29]=n("pre",null,[n("code",null,`# vim myscript.sh
`)],-1)),n("p",null,[e[7]||(e[7]=t("shell 脚本的第一行 (著名的 ",-1)),l(i,{href:"https://linux.cn/article-3664-1.html"},{default:r(()=>[...e[6]||(e[6]=[t("释伴（shebang）行",-1)])]),_:1}),e[8]||(e[8]=t(") 必须如下：",-1))]),e[30]||(e[30]=s(`<pre><code>#!/bin/bash
</code></pre><p>这条语句“告诉”操作系统需要用哪个解释器来运行这个脚本文件之后命令。</p><p>现在可以添加需要执行的命令了。通过注释，我们可以声明每一条命令或者整个脚本的具体含义。注意，shell 会忽略掉以井号 (#) 开始的注释语句。</p><pre><code>#!/bin/bash
echo 这是关于 LFCS 认证系列的第十部分
echo 今天是 $(date +%Y-%m-%d)
</code></pre><p>编写并保存脚本之后，通过以下命令来使脚本文件成为可执行文件：</p><pre><code># chmod 755 myscript.sh
</code></pre><p>在执行脚本之前，我们需要说一下环境变量 ($PATH)，运行：</p><pre><code>echo $PATH
</code></pre><p>我们就会看到环境变量 ($PATH) 的具体内容：这是当输入命令时系统所搜索可执行程序的目录，每一项之间使用冒号 (😃 隔开。称它为环境变量，是因为它本是就是 shell 环境的一部分 —— 这是当 shell 每次启动时 shell 及其子进程可以获取的一系列信息。</p><p>当我们输入一个命令并按下回车时，shell 会搜索 $PATH 变量中列出的目录并执行第一个知道的实例。请看如下例子：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Environment-Variable.png" alt="Linux Environment Variables"></p><p><em>环境变量</em></p><p>假如存在两个同名的可执行程序，一个在 /usr/local/bin，另一个在 /usr/bin，则会执行环境变量中最先列出的那个，并忽略另外一个。</p><p>如果我们自己编写的脚本没有放在 $PATH 变量列出目录中的任何一个，则需要输入 ./filename 来执行它。而如果存储在 $PATH 变量中的任意一个目录，我们就可以像运行其他命令一样来运行之前编写的脚本了。</p><pre><code># pwd
# ./myscript.sh
# cp myscript.sh ../bin
# cd ../bin
# pwd
# myscript.sh
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Execute-Script.png" alt="Execute Script in Linux"></p><p><em>执行脚本</em></p><h4 id="if-条件语句" tabindex="-1">if 条件语句 <a class="header-anchor" href="#if-条件语句" aria-label="Permalink to “if 条件语句”">​</a></h4><p>无论何时，当你需要在脚本中根据某个命令的运行结果来采取相应动作时，你应该使用 if 结构来定义条件。基本语法如下：</p><pre><code>if CONDITION; then
	COMMANDS;
else
	OTHER-COMMANDS
fi
</code></pre><p>其中，CONDITION 可以是如下情形的任意一项 (仅列出常用的)，并且达到以下条件时返回 true：</p><ul><li>[ -a file ] → 指定文件存在。</li><li>[ -d file ] → 指定文件存在，并且是一个目录。</li><li>[ -f file ] → 指定文件存在，并且是一个普通文件。</li><li>[ -u file ] → 指定文件存在，并设置了 SUID 权限位。</li><li>[ -g file ] → 指定文件存在，并设置了 SGID 权限位。</li><li>[ -k file ] → 指定文件存在，并设置了“黏连 (Sticky)”位。</li><li>[ -r file ] → 指定文件存在，并且文件可读。</li><li>[ -s file ] → 指定文件存在，并且文件不为空。</li><li>[ -w file ] → 指定文件存在，并且文件可写入。</li><li>[ -x file ] → 指定文件存在，并且可执行。</li><li>[ string1 = string2 ] → 字符串相同。</li><li>[ string1 != string2 ] → 字符串不相同。</li></ul><p>[ int1 op int2 ] 为前述列表中的一部分 (例如： -eq –&gt; int1 与 int2 相同时返回 true) ，其中比较项也可以是一个列表子项， 其中 op 为以下比较操作符。</p><ul><li>-eq –&gt; int1 等于 int2 时返回 true。</li><li>-ne –&gt; int1 不等于 int2 时返回 true。</li><li>-lt –&gt; int1 小于 int2 时返回 true。</li><li>-le –&gt; int1 小于或等于 int2 时返回 true。</li><li>-gt –&gt; int1 大于 int2 时返回 true。</li><li>-ge –&gt; int1 大于或等于 int2 时返回 true。</li></ul><h4 id="for-循环语句" tabindex="-1">for 循环语句 <a class="header-anchor" href="#for-循环语句" aria-label="Permalink to “for 循环语句”">​</a></h4><p>循环语句可以在某个条件下重复执行某个命令。基本语法如下：</p><pre><code>for item in SEQUENCE; do
		COMMANDS;
done
</code></pre><p>其中，item 为每次执行 COMMANDS 时，在 SEQUENCE 中匹配到的值。</p><h4 id="while-循环语句" tabindex="-1">While 循环语句 <a class="header-anchor" href="#while-循环语句" aria-label="Permalink to “While 循环语句”">​</a></h4><p>该循环结构会一直执行重复的命令，直到控制命令（EVALUATION_COMMAND）执行的退出状态值等于 0 时 (即执行成功) 停止。基本语法如下：</p><pre><code>while EVALUATION_COMMAND; do
		EXECUTE_COMMANDS;
done
</code></pre><p>其中，EVALUATION_COMMAND 可以是任何能够返回成功 (0) 或失败 (0 以外的值) 的退出状态值的命令，EXECUTE_COMMANDS 则可以是任何的程序、脚本或者 shell 结构体，包括其他的嵌套循环。</p><h4 id="综合使用" tabindex="-1">综合使用 <a class="header-anchor" href="#综合使用" aria-label="Permalink to “综合使用”">​</a></h4><p>我们会通过以下例子来演示 if 条件语句和 for 循环语句。</p><p><strong>在基于 systemd 的发行版中探测某个服务是否在运行</strong></p><p>先建立一个文件，列出我们想要想要查看的服务名。</p><pre><code># cat myservices.txt

sshd
mariadb
httpd
crond
firewalld
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Monitor-Services.png" alt="Script to Monitor Linux Services"></p><p><em>使用脚本监控 Linux 服务</em></p><p>我们编写的脚本看起来应该是这样的：</p><pre><code>#!/bin/bash

# This script iterates over a list of services and
# is used to determine whether they are running or not.

for service in $(cat myservices.txt); do
    	systemctl status $service | grep --quiet &quot;running&quot;
    	if [ $? -eq 0 ]; then
            	echo $service &quot;is [ACTIVE]&quot;
    	else
            	echo $service &quot;is [INACTIVE or NOT INSTALLED]&quot;
    	fi
done
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Monitor-Script.png" alt="Linux Service Monitoring Script"></p><p><em>Linux 服务监控脚本</em></p><p><strong>我们来解释一下这个脚本的工作流程</strong></p><p>1). for 循环每次读取 myservices.txt 文件中的一项记录，每一项纪录表示一个服务的通用变量名。各项记录组成如下：</p><pre><code># cat myservices.txt
</code></pre><p>2). 以上命令由圆括号括着，并在前面添加美元符，表示它需要从 myservices.txt 的记录列表中取值并作为变量传递给 for 循环。</p><p>3). 对于记录列表中的每一项纪录 (即每一项纪录的服务变量)，都会执行以下动作：</p><pre><code># systemctl status $service | grep --quiet &quot;running&quot;
</code></pre><p>此时，需要在每个通用变量名 (即每一项纪录的服务变量) 的前面添加美元符，以表明它是作为变量来传递的。其输出则通过管道符传给 grep。</p><p>其中，-quiet 选项用于阻止 grep 命令将发现的 “running” 的行回显到屏幕。当 grep 捕获到 “running” 时，则会返回一个退出状态码 “0” (在 if 结构体表示为 $?)，由此确认某个服务正在运行中。</p><p>如果退出状态码是非零值 (即 systemctl status $service 命令中的回显中没有出现 “running”)，则表明某个服务为运行。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Services-Monitoring-Script.png" alt="Services Monitoring Script"></p><p><em>服务监控脚本</em></p><p>我们可以增加一步，在开始循环之前，先确认 myservices.txt 是否存在。</p><pre><code>#!/bin/bash

# This script iterates over a list of services and
# is used to determine whether they are running or not.

if [ -f myservices.txt ]; then
    	for service in $(cat myservices.txt); do
            	systemctl status $service | grep --quiet &quot;running&quot;
            	if [ $? -eq 0 ]; then
                    	echo $service &quot;is [ACTIVE]&quot;
            	else
                    	echo $service &quot;is [INACTIVE or NOT INSTALLED]&quot;
            	fi
    	done
else
    	echo &quot;myservices.txt is missing&quot;
fi
</code></pre><p><strong>Ping 一系列网络或者 Internet 主机名以获取应答数据</strong></p><p>你可能想把自己维护的主机写入一个文本文件，并使用脚本探测它们是否能够 ping 得通 (脚本中的 myhosts 可以随意替换为你想要的名称)。</p><p>shell 的内置 read 命令将告诉 while 循环一行行的读取 myhosts，并将读取的每行内容传给 host 变量，随后 host 变量传递给 ping 命令。</p><pre><code>#!/bin/bash

# This script is used to demonstrate the use of a while loop

while read host; do
    	ping -c 2 $host
done &lt; myhosts
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Script-to-Ping-Servers.png" alt="Script to Ping Servers"></p><p><em>使用脚本 Ping 服务器</em></p><p>扩展阅读:</p>`,63)),n("ul",null,[n("li",null,[l(i,{href:"http://www.tecmint.com/learning-shell-scripting-language-a-guide-from-newbies-to-system-administrator/"},{default:r(()=>[...e[9]||(e[9]=[t("Learn Shell Scripting: A Guide from Newbies to System Administrator",-1)])]),_:1})]),n("li",null,[l(i,{href:"http://www.tecmint.com/basic-shell-programming-part-ii/"},{default:r(()=>[...e[10]||(e[10]=[t("5 Shell Scripts to Learn Shell Programming",-1)])]),_:1})])]),e[31]||(e[31]=s(`<h3 id="文件系统排错" tabindex="-1">文件系统排错 <a class="header-anchor" href="#文件系统排错" aria-label="Permalink to “文件系统排错”">​</a></h3><p>尽管 Linux 是一个很稳定的操作系统，但仍然会因为某些原因出现崩溃时 (比如因为断电等)，正好你有一个 (或者更多个) 文件系统未能正确卸载，Linux 重启的时候就会自动检测其中可能发生的错误。</p><p>此外，每次系统正常启动的时候，都会在文件系统挂载之前校验它们的完整度。而这些全部都依赖于 fsck 工具 (“file system check，文件系统校验”)。</p><p>如果对 fsck 进行设定，它除了校验文件系统的完整性之外，还可以尝试修复错误。fsck 能否成功修复错误，取决于文件系统的损伤程度；如果可以修复，被损坏部分的文件会恢复到位于每个文件系统根目录的 lost+found。</p><p>最后但同样重要的是，我们必须注意，如果拔掉系统正在写入数据的 USB 设备同样会发生错误，甚至可能发生硬件损坏。</p><p>fsck 的基本用如下：</p><pre><code># fsck [options] filesystem
</code></pre><p><strong>检查文件系统错误并尝试自动修复</strong></p><p>想要使用 fsck 检查文件系统，我们需要首先卸载文件系统。</p><pre><code># mount | grep sdg1
# umount /mnt
# fsck -y /dev/sdg1
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-Filesystem-Errors.png" alt="Scan Linux Filesystem for Errors"></p><p><em>检查文件系统错误</em></p><p>除了 -y 选项，我们也可以使用 -a 选项来自动修复文件系统错误，而不必做出交互式应答，并在文件系统看起来 “干净” 卸载的情况下强制校验。</p><pre><code># fsck -af /dev/sdg1
</code></pre><p>如果只是要找出什么地方发生了错误 (不用在检测到错误的时候修复)，我们可以使用 -n 选项，这样只会将文件系统错误输出到标准输出设备上。</p><pre><code># fsck -n /dev/sdg1
</code></pre><p>根据 fsck 输出的错误信息，我们可以知道是否可以自己修复或者需要将问题提交给工程师团队来做详细的硬件校验。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>至此，系列教程的第十讲就全部结束了，全系列教程涵盖了通过 LFCS 测试所需的基础内容。</p><p>但显而易见的，本系列的十讲并不足以在单个主题方面做到全面描述，我们希望这一系列教程可以成为你学习的基础素材，并一直保持学习的热情（LCTT 译注：还有后继补充的几篇）。</p>`,20)),n("p",null,[e[12]||(e[12]=t("我们欢迎你提出任何问题或者建议，所以你可以毫不犹豫的通过以下链接联系到我们： 成为一个 ",-1)),l(i,{href:"http://www.shareasale.com/r.cfm?b=768106&u=1260899&m=59485&urllink=&afftrack="},{default:r(()=>[...e[11]||(e[11]=[t("Linux 认证系统工程师",-1)])]),_:1})]),e[32]||(e[32]=n("hr",null,null,-1)),n("p",null,[e[14]||(e[14]=t("via: ",-1)),l(i,{href:"http://www.tecmint.com/linux-basic-shell-scripting-and-linux-filesystem-troubleshooting/"},{default:r(()=>[...e[13]||(e[13]=[t("http://www.tecmint.com/linux-basic-shell-scripting-and-linux-filesystem-troubleshooting/",-1)])]),_:1})]),n("p",null,[e[18]||(e[18]=t("作者：",-1)),l(i,{href:"http://www.tecmint.com/author/gacanepa/"},{default:r(()=>[...e[15]||(e[15]=[t("Gabriel Cánepa",-1)])]),_:1}),e[19]||(e[19]=t(" 译者：",-1)),l(i,{href:"https://github.com/GHLandy"},{default:r(()=>[...e[16]||(e[16]=[t("GHLandy",-1)])]),_:1}),e[20]||(e[20]=t(" 校对：",-1)),l(i,{href:"https://github.com/wxy"},{default:r(()=>[...e[17]||(e[17]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[23]||(e[23]=t("本文由 ",-1)),l(i,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[21]||(e[21]=[t("LCTT",-1)])]),_:1}),e[24]||(e[24]=t(" 原创翻译，",-1)),l(i,{href:"https://linux.cn/"},{default:r(()=>[...e[22]||(e[22]=[t("Linux中国",-1)])]),_:1}),e[25]||(e[25]=t(" 荣誉推出",-1))])])}const C=p(m,[["render",h]]);export{L as __pageData,C as default};
