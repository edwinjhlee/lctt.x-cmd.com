import{_ as s,a0 as p,w as a,s as u,I as n,x as e,a1 as l,A as i,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务 | LCTT x X-CMD","titleTemplate":false,"description":"RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务 | LCTT (RHCE) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务 | LCTT (RHCE) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"RHCE/Part 4 - Using Shell Scripting to Automate Linux System Maintenance Tasks","title":"RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务","tag":"RHCE","desc":""},"relativePath":"RHCE/Part 4 - Using Shell Scripting to Automate Linux System Maintenance Tasks.md","filePath":"[post].md"}'),m={name:"RHCE/Part 4 - Using Shell Scripting to Automate Linux System Maintenance Tasks.md"};function d(h,t,g,E,f,S){const o=p("Link");return a(),u("div",null,[t[33]||(t[33]=n("h1",{id:"rhce-系列-四-使用-shell-脚本自动化-linux-系统维护任务",tabindex:"-1"},[e("RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务 "),n("a",{class:"header-anchor",href:"#rhce-系列-四-使用-shell-脚本自动化-linux-系统维护任务","aria-label":"Permalink to “RHCE 系列（四）： 使用 Shell 脚本自动化 Linux 系统维护任务”"},"​")],-1)),t[34]||(t[34]=n("p",null,"之前我听说高效的系统管理员的一个特点是懒惰。一开始看起来很矛盾，但作者接下来解释了其中的原因：",-1)),t[35]||(t[35]=n("p",null,[n("img",{src:"http://www.tecmint.com/wp-content/uploads/2015/08/Automate-Linux-System-Maintenance-Tasks.png",alt:"自动化 Linux 系统维护任务"})],-1)),t[36]||(t[36]=n("p",null,[n("em",null,"RHCE 系列：第四部分 - 自动化 Linux 系统维护任务")],-1)),n("p",null,[t[1]||(t[1]=e("如果一个系统管理员花费大量的时间解决问题以及做重复的工作，你就应该怀疑他这么做是否正确。换句话说，一个高效的系统管理员/工程师应该制定一个计划使得其尽量花费少的时间去做重复的工作，以及通过使用本系列中第三部分 ",-1)),l(o,{href:"https://linux.cn/article-6512-1.html"},{default:i(()=>[...t[0]||(t[0]=[e("使用 Linux 工具集监视系统活动报告",-1)])]),_:1}),t[2]||(t[2]=e(" 介绍的工具来预见问题。因此，尽管看起来他/她没有做很多的工作，但那是因为 shell 脚本帮助完成了他的/她的大部分任务，这也就是本章我们将要探讨的东西。",-1))]),t[37]||(t[37]=n("h3",{id:"什么是-shell-脚本",tabindex:"-1"},[e("什么是 shell 脚本？ "),n("a",{class:"header-anchor",href:"#什么是-shell-脚本","aria-label":"Permalink to “什么是 shell 脚本？”"},"​")],-1)),t[38]||(t[38]=n("p",null,"简单的说，shell 脚本就是一个由 shell 一步一步执行的程序，而 shell 是在 Linux 内核和最终用户之间提供接口的另一个程序。",-1)),n("p",null,[t[4]||(t[4]=e("默认情况下，RHEL 7 中用户使用的 shell 是 bash（/bin/bash）。如果你想知道详细的信息和历史背景，你可以查看这个",-1)),l(o,{href:"https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29"},{default:i(()=>[...t[3]||(t[3]=[e("维基页面",-1)])]),_:1}),t[5]||(t[5]=e("。",-1))]),n("p",null,[t[8]||(t[8]=e("关于这个 shell 提供的众多功能的介绍，可以查看 ",-1)),t[9]||(t[9]=n("strong",null,"man 手册",-1)),t[10]||(t[10]=e("，也可以从 （",-1)),l(o,{href:"http://www.tecmint.com/wp-content/pdf/bash.pdf"},{default:i(()=>[...t[6]||(t[6]=[e("Bash 命令",-1)])]),_:1}),t[11]||(t[11]=e("）处下载 PDF 格式。除此之外，假设你已经熟悉 Linux 命令（否则我强烈建议你首先看一下 ",-1)),t[12]||(t[12]=n("strong",null,"Tecmint.com",-1)),t[13]||(t[13]=e(" 中的文章 ",-1)),l(o,{href:"http://www.tecmint.com/60-commands-of-linux-a-guide-from-newbies-to-system-administrator/"},{default:i(()=>[...t[7]||(t[7]=[e("从新手到系统管理员指南",-1)])]),_:1}),t[14]||(t[14]=e(" ）。现在让我们开始吧。",-1))]),t[39]||(t[39]=r(`<h3 id="写一个脚本显示系统信息" tabindex="-1">写一个脚本显示系统信息 <a class="header-anchor" href="#写一个脚本显示系统信息" aria-label="Permalink to “写一个脚本显示系统信息”">​</a></h3><p>为了方便，首先让我们新建一个目录用于保存我们的 shell 脚本：</p><pre><code># mkdir scripts
# cd scripts
</code></pre><p>然后用喜欢的文本编辑器打开新的文本文件 <code>system_info.sh</code>。我们首先在头部插入一些注释以及一些命令：</p><pre><code>#!/bin/bash

# RHCE 系列第四部分示例脚本
# 该脚本会返回以下这些系统信息：
# -主机名称:
echo -e &quot;\\e[31;43m***** HOSTNAME INFORMATION *****\\e[0m&quot;
hostnamectl
echo &quot;&quot;
# -文件系统磁盘空间使用：
echo -e &quot;\\e[31;43m***** FILE SYSTEM DISK SPACE USAGE *****\\e[0m&quot;
df -h
echo &quot;&quot;
# -系统空闲和使用中的内存：
echo -e &quot;\\e[31;43m ***** FREE AND USED MEMORY *****\\e[0m&quot;
free
echo &quot;&quot;
# -系统启动时间：
echo -e &quot;\\e[31;43m***** SYSTEM UPTIME AND LOAD *****\\e[0m&quot;
uptime
echo &quot;&quot;
# -登录的用户：
echo -e &quot;\\e[31;43m***** CURRENTLY LOGGED-IN USERS *****\\e[0m&quot;
who
echo &quot;&quot;
# -使用内存最多的 5 个进程
echo -e &quot;\\e[31;43m***** TOP 5 MEMORY-CONSUMING PROCESSES *****\\e[0m&quot;
ps -eo %mem,%cpu,comm --sort=-%mem | head -n 6
echo &quot;&quot;
echo -e &quot;\\e[1;32mDone.\\e[0m&quot;
</code></pre><p>然后，给脚本可执行权限：</p><pre><code># chmod +x system_info.sh
</code></pre><p>运行脚本：</p><pre><code>./system_info.sh
</code></pre><p>注意为了更好的可视化效果各部分标题都用颜色显示：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/Server-Monitoring-Shell-Script.png" alt="服务器监视 Shell 脚本"></p><p><em>服务器监视 Shell 脚本</em></p><p>颜色功能是由以下命令提供的：</p><pre><code>echo -e &quot;\\e[COLOR1;COLOR2m&lt;YOUR TEXT HERE&gt;\\e[0m&quot;
</code></pre>`,14)),n("p",null,[t[16]||(t[16]=e("其中 COLOR1 和 COLOR2 是前景色和背景色（",-1)),l(o,{href:"https://wiki.archlinux.org/index.php/Color_Bash_Prompt"},{default:i(()=>[...t[15]||(t[15]=[e("Arch Linux Wiki",-1)])]),_:1}),t[17]||(t[17]=e(" 有更多的信息和选项解释），",-1)),t[18]||(t[18]=n("code",null,"<YOUR TEXT HERE>",-1)),t[19]||(t[19]=e(" 是你想用颜色显示的字符串。",-1))]),t[40]||(t[40]=r(`<h3 id="使任务自动化" tabindex="-1">使任务自动化 <a class="header-anchor" href="#使任务自动化" aria-label="Permalink to “使任务自动化”">​</a></h3><p>你想使其自动化的任务可能因情况而不同。因此，我们不可能在一篇文章中覆盖所有可能的场景，但是我们会介绍使用 shell 脚本可以使其自动化的三种典型任务：</p><ol><li>更新本地文件数据库， 2) 查找（或者删除）有 777 权限的文件， 以及 3) 文件系统使用超过定义的阀值时发出警告。</li></ol><p>让我们在脚本目录中新建一个名为 <code>auto_tasks.sh</code> 的文件并添加以下内容：</p><pre><code>#!/bin/bash

# 自动化任务示例脚本：
# -更新本地文件数据库：
echo -e &quot;\\e[4;32mUPDATING LOCAL FILE DATABASE\\e[0m&quot;
updatedb
if [ $? == 0 ]; then
        echo &quot;The local file database was updated correctly.&quot;
else
        echo &quot;The local file database was not updated correctly.&quot;
fi
echo &quot;&quot;

# -查找 和/或 删除有 777 权限的文件。
echo -e &quot;\\e[4;32mLOOKING FOR FILES WITH 777 PERMISSIONS\\e[0m&quot;
# Enable either option (comment out the other line), but not both.
# Option 1: Delete files without prompting for confirmation. Assumes GNU version of find.
#find -type f -perm 0777 -delete
# Option 2: Ask for confirmation before deleting files. More portable across systems.
find -type f -perm 0777 -exec rm -i {} +;
echo &quot;&quot;
# -文件系统使用率超过定义的阀值时发出警告 
echo -e &quot;\\e[4;32mCHECKING FILE SYSTEM USAGE\\e[0m&quot;
THRESHOLD=30
while read line; do
        # This variable stores the file system path as a string
        FILESYSTEM=$(echo $line | awk &#39;{print $1}&#39;)
        # This variable stores the use percentage (XX%)
        PERCENTAGE=$(echo $line | awk &#39;{print $5}&#39;)
        # Use percentage without the % sign.
        USAGE=\${PERCENTAGE%?}
        if [ $USAGE -gt $THRESHOLD ]; then
                echo &quot;The remaining available space in $FILESYSTEM is critically low. Used: $PERCENTAGE&quot;
        fi
done &lt; &lt;(df -h --total | grep -vi filesystem)
</code></pre><p>请注意该脚本最后一行两个 <code>&lt;</code> 符号之间有个空格。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/Shell-Script-to-Find-777-Permissions.png" alt="查找 777 权限文件的 Shell 脚本"></p><p><em>查找 777 权限文件的 Shell 脚本</em></p><h3 id="使用-cron" tabindex="-1">使用 Cron <a class="header-anchor" href="#使用-cron" aria-label="Permalink to “使用 Cron”">​</a></h3><p>想更进一步提高效率，你不会想只是坐在你的电脑前手动执行这些脚本。相反，你会使用 cron 来调度这些任务周期性地执行，并把结果通过邮件发动给预先指定的接收者，或者将它们保存到使用 web 浏览器可以查看的文件中。</p><p>下面的脚本（filesystem_usage.sh）会运行有名的 <strong>df -h</strong> 命令，格式化输出到 HTML 表格并保存到 <strong>report.html</strong> 文件中：</p><pre><code>#!/bin/bash
# 演示使用 shell 脚本创建 HTML 报告的示例脚本
# Web directory
WEB_DIR=/var/www/html
# A little CSS and table layout to make the report look a little nicer
echo &quot;&lt;HTML&gt;
&lt;HEAD&gt;
&lt;style&gt;
.titulo{font-size: 1em; color: white; background:#0863CE; padding: 0.1em 0.2em;}
table
{
border-collapse:collapse;
}
table, td, th
{
border:1px solid black;
}
&lt;/style&gt;
&lt;meta http-equiv=&#39;Content-Type&#39; content=&#39;text/html; charset=UTF-8&#39; /&gt;
&lt;/HEAD&gt;
&lt;BODY&gt;&quot; &gt; $WEB_DIR/report.html
# View hostname and insert it at the top of the html body
HOST=$(hostname)
echo &quot;Filesystem usage for host &lt;strong&gt;$HOST&lt;/strong&gt;&lt;br&gt;
Last updated: &lt;strong&gt;$(date)&lt;/strong&gt;&lt;br&gt;&lt;br&gt;
&lt;table border=&#39;1&#39;&gt;
&lt;tr&gt;&lt;th class=&#39;titulo&#39;&gt;Filesystem&lt;/td&gt;
&lt;th class=&#39;titulo&#39;&gt;Size&lt;/td&gt;
&lt;th class=&#39;titulo&#39;&gt;Use %&lt;/td&gt;
&lt;/tr&gt;&quot; &gt;&gt; $WEB_DIR/report.html
# Read the output of df -h line by line
while read line; do
echo &quot;&lt;tr&gt;&lt;td align=&#39;center&#39;&gt;&quot; &gt;&gt; $WEB_DIR/report.html
echo $line | awk &#39;{print $1}&#39; &gt;&gt; $WEB_DIR/report.html
echo &quot;&lt;/td&gt;&lt;td align=&#39;center&#39;&gt;&quot; &gt;&gt; $WEB_DIR/report.html
echo $line | awk &#39;{print $2}&#39; &gt;&gt; $WEB_DIR/report.html
echo &quot;&lt;/td&gt;&lt;td align=&#39;center&#39;&gt;&quot; &gt;&gt; $WEB_DIR/report.html
echo $line | awk &#39;{print $5}&#39; &gt;&gt; $WEB_DIR/report.html
echo &quot;&lt;/td&gt;&lt;/tr&gt;&quot; &gt;&gt; $WEB_DIR/report.html
done &lt; &lt;(df -h | grep -vi filesystem)
echo &quot;&lt;/table&gt;&lt;/BODY&gt;&lt;/HTML&gt;&quot; &gt;&gt; $WEB_DIR/report.html
</code></pre><p>在我们的 <strong>RHEL 7</strong> 服务器（<strong>192.168.0.18</strong>）中，看起来像下面这样：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/08/Server-Monitoring-Report.png" alt="服务器监视报告"></p><p><em>服务器监视报告</em></p><p>你可以添加任何你想要的信息到那个报告中。添加下面的 crontab 条目在每天下午的 1：30 运行该脚本：</p><pre><code>30 13 * * * /root/scripts/filesystem_usage.sh
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>你很可能想起各种其他想要自动化的任务；正如你看到的，使用 shell 脚本能极大的简化任务。如果你觉得这篇文章对你有所帮助就告诉我们吧，别犹豫在下面的表格中添加你自己的想法或评论。</p><hr>`,20)),n("p",null,[t[21]||(t[21]=e("via: ",-1)),l(o,{href:"http://www.tecmint.com/using-shell-script-to-automate-linux-system-maintenance-tasks/"},{default:i(()=>[...t[20]||(t[20]=[e("http://www.tecmint.com/using-shell-script-to-automate-linux-system-maintenance-tasks/",-1)])]),_:1})]),n("p",null,[t[25]||(t[25]=e("作者：",-1)),l(o,{href:"http://www.tecmint.com/author/gacanepa/"},{default:i(()=>[...t[22]||(t[22]=[e("Gabriel Cánepa",-1)])]),_:1}),t[26]||(t[26]=e(" 译者：",-1)),l(o,{href:"https://github.com/ictlyh"},{default:i(()=>[...t[23]||(t[23]=[e("ictlyh",-1)])]),_:1}),t[27]||(t[27]=e(" 校对：",-1)),l(o,{href:"https://github.com/wxy"},{default:i(()=>[...t[24]||(t[24]=[e("wxy",-1)])]),_:1})]),n("p",null,[t[30]||(t[30]=e("本文由 ",-1)),l(o,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...t[28]||(t[28]=[e("LCTT",-1)])]),_:1}),t[31]||(t[31]=e(" 原创翻译，",-1)),l(o,{href:"http://linux.cn/"},{default:i(()=>[...t[29]||(t[29]=[e("Linux中国",-1)])]),_:1}),t[32]||(t[32]=e(" 荣誉推出",-1))])])}const b=s(m,[["render",d]]);export{w as __pageData,b as default};
