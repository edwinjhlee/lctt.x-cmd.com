import{_ as i,a0 as l,w as s,s as c,ao as p,I as r,x as t,a1 as o,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"13个Cat命令管理(显示，排序，建立)文件实例 | LCTT x X-CMD","titleTemplate":false,"description":"13个Cat命令管理(显示，排序，建立)文件实例 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"13个Cat命令管理(显示，排序，建立)文件实例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"13个Cat命令管理(显示，排序，建立)文件实例 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/13 Linux Cat Command Examples To Manage (Display,Sort,Create etc) Files","title":"13个Cat命令管理(显示，排序，建立)文件实例","tag":"201312","desc":""},"relativePath":"201312/13 Linux Cat Command Examples To Manage (Display,Sort,Create etc) Files.md","filePath":"[post].md"}'),d={name:"201312/13 Linux Cat Command Examples To Manage (Display,Sort,Create etc) Files.md"};function m(h,e,u,f,x,g){const n=l("Link");return s(),c("div",null,[e[11]||(e[11]=p(`<h1 id="_13个cat命令管理-显示-排序-建立-文件实例" tabindex="-1">13个Cat命令管理(显示，排序，建立)文件实例 <a class="header-anchor" href="#_13个cat命令管理-显示-排序-建立-文件实例" aria-label="Permalink to “13个Cat命令管理(显示，排序，建立)文件实例”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/11/linux-cat-command.png" alt=""></p><p>在Linux系统中，大多数配置文件、日志文件，甚至shell脚本都使用文本文件格式，因此，Linux系统存在着多种文本编辑器，但当你仅仅想要查看一下这些文件的内容时，可使用一个简单的命令-cat。</p><p>cat手册里这样描述：</p><blockquote><p>cat命令读取文件内容，并输出到标准设备上面</p></blockquote><p>cat是一条linux内置命令. 几乎所有linux发行版都内置（译注：或者说我从未听说过不内置cat命令的发行版）。接下来，让我们开始学习如何使用.</p><h3 id="_1-显示文件内容" tabindex="-1">1. 显示文件内容 <a class="header-anchor" href="#_1-显示文件内容" aria-label="Permalink to “1. 显示文件内容”">​</a></h3><p>最简单的方法是直接输入‘cat file_name’.</p><pre><code># cat /etc/issue

CentOS release 5.10 (Final)
Kernel \\r on an \\m
</code></pre><h3 id="_2-同时显示行号" tabindex="-1">2. 同时显示行号 <a class="header-anchor" href="#_2-同时显示行号" aria-label="Permalink to “2. 同时显示行号”">​</a></h3><p>当在读取内容很多的配置文件时，如果同时显示行号将会使操作变简单，加上-n参数可以实现.</p><pre><code># cat -n /etc/ntp.conf

1 # Permit time synchronization our time resource but do not
2 # permit the source to query or modify the service on this system
3 restrict default kod nomodify notrap nopeer noquery
4 restrict -6 default kod nomodify notrap nopeer noquery
5
6 # Permit all access over the loopback interface. This could be
7 # tightened as well, but to do so would effect some of the
8 # administration functions
9 restrict 127.0.0.1
10 restrict -6 ::1
</code></pre><h3 id="_3-在非空格行首显示行号" tabindex="-1">3. 在非空格行首显示行号 <a class="header-anchor" href="#_3-在非空格行首显示行号" aria-label="Permalink to “3. 在非空格行首显示行号”">​</a></h3><p>类似于-n参数，-b也可以显示行号。区别在于-b只在非空行前显示行号。</p><pre><code>#cat -b /etc/ntp.conf

1 # Permit time synchronization our time resource but do not
2 # permit the source to query or modify the service on this system
3 restrict default kod nomodify notrap nopeer noquery
4 restrict -6 default kod nomodify notrap nopeer noquery

5 # Permit all access over the loopback interface. This could be
6 # tightened as well, but to do so would effect some of the
7 # administration functions
8 restrict 127.0.0.1
9 restrict -6 ::1
</code></pre><h3 id="_4-显示tab制表符" tabindex="-1">4. 显示tab制表符 <a class="header-anchor" href="#_4-显示tab制表符" aria-label="Permalink to “4. 显示tab制表符”">​</a></h3><p>当你想要显示文本中的tab制表位时. 可使用-T参数. 它会在输入结果中标识为 <strong>^I</strong> .</p><pre><code># cat -T /etc/hosts

# Do not remove the following line, or various programs 
# that require network functionality will fail.
127.0.0.1^I^Ilocalhost.localdomain localhost
::1^I^Ilocalhost6.localdomain6 localhost6
</code></pre><h3 id="_5-显示换行符" tabindex="-1">5. 显示换行符 <a class="header-anchor" href="#_5-显示换行符" aria-label="Permalink to “5. 显示换行符”">​</a></h3><p>-E参数在每行结尾使用 <strong>$</strong> 表示换行符。如下所示 :</p><pre><code># cat -E /etc/hosts

# Do not remove the following line, or various programs$
# that require network functionality will fail.$
127.0.0.1 localhost.localdomain localhost$
::1 localhost6.localdomain6 localhost6$
</code></pre><h3 id="_6-同时显示制表符及换行符" tabindex="-1">6. 同时显示制表符及换行符 <a class="header-anchor" href="#_6-同时显示制表符及换行符" aria-label="Permalink to “6. 同时显示制表符及换行符”">​</a></h3><p>当你想要同时达到-T及-E的效果, 可使用-A参数.</p><pre><code># cat -A /etc/hosts

# Do not remove the following line, or various programs$
# that require network functionality will fail.$
127.0.0.1^I^Ilocalhost.localdomain localhost$
::1^I^Ilocalhost6.localdomain6 localhost6$
</code></pre><h3 id="_7-分屏显示" tabindex="-1">7. 分屏显示 <a class="header-anchor" href="#_7-分屏显示" aria-label="Permalink to “7. 分屏显示”">​</a></h3><p>当文件内容显示超过了你的屏幕大小, 可结合cat命令与其它命令分屏显示。使用管道符 ( | )来连接。</p><pre><code># cat /proc/meminfo | less

# cat /proc/meminfo | more
</code></pre><p>在less与more显示结果的区别在于less参数可pageup及pagedown上下翻滚。而more仅能使用空格向下翻屏。</p><h3 id="_8-同时查看2个文件中的内容" tabindex="-1">8. 同时查看2个文件中的内容 <a class="header-anchor" href="#_8-同时查看2个文件中的内容" aria-label="Permalink to “8. 同时查看2个文件中的内容”">​</a></h3><p>位于/root文件夹里有两个文件取名linux及desktop，每个文件含有以下内容 :</p><p><strong>Linux</strong> : ubuntu, centos, redhat, mint and slackware</p><p><strong>Desktop</strong> : gnome kde, xfce, enlightment, and cinnamon</p><p>当你想同时查看两文件中的内容时，可按如下方法 :</p><pre><code># cat /root/linux /root/desktop

ubuntu
centos
redhat
mint
slackware
gnome
kde
xfce
enlightment
cinnamon
</code></pre><h3 id="_9-排序显示" tabindex="-1">9. 排序显示 <a class="header-anchor" href="#_9-排序显示" aria-label="Permalink to “9. 排序显示”">​</a></h3><p>类似. 你也可以结合cat命令与其它命令来进行自定义输出. 如结合 <strong>sort</strong> ，通过管道符对内容进行排序显示。举例 :</p><pre><code># cat /root/linux | sort

centos
mint
redhat
slackware
Ubuntu
</code></pre><h3 id="_10-输入重定向" tabindex="-1">10. 输入重定向 <a class="header-anchor" href="#_10-输入重定向" aria-label="Permalink to “10. 输入重定向”">​</a></h3><p>你也可将显示结果输出重定向到屏幕或另一个文件。 只需要使用 &gt; 符号（大于号）即可输出生成到另一个文件。</p><pre><code># cat /root/linux &gt; /root/linuxdistro
</code></pre><p>以上命令会生成一个与/root/linux内容一模一样的叫linuxdistro的文件.</p><h3 id="_11-新建文件" tabindex="-1">11. 新建文件 <a class="header-anchor" href="#_11-新建文件" aria-label="Permalink to “11. 新建文件”">​</a></h3><p>Linux下有多种方法新建文件。其中使用cat就是方法之一.</p><pre><code># cat &gt; operating_system

Unix
Linux
Windows
MacOS
</code></pre><p>当你输入cat &gt; operating_system，它会生成一个operating_system的文件。然后下面会显示空行。此时你可输入内容。比如我们输入Unix, Linux, Windows 和 MacOS， 输入完成后，按<strong>Ctrl-D</strong>存盘退出cat。此时你会发现当前文件夹下会生成一个包含你刚才输入内容的叫 <strong>operating_system</strong>的文件。</p><h3 id="_12-向文件中追加内容" tabindex="-1">12.向文件中追加内容 <a class="header-anchor" href="#_12-向文件中追加内容" aria-label="Permalink to “12.向文件中追加内容”">​</a></h3><p>当你使用两个 &gt; 符时, 会将第一个文件中的内容追加到第二个文件的末尾。 举例 :</p><pre><code># cat /root/linux &gt;&gt; /root/desktop

# cat /root/desktop
</code></pre><p>它会将 /root/linux的内容追加到/root/desktop文件的末尾。</p><p>第二个文件的内容将会变成这样:</p><pre><code>gnome
kde
xfce
enlightment
cinnamon
ubuntu
centos
redhat
mint
slackware
</code></pre><h3 id="_13-重定向输入" tabindex="-1">13. 重定向输入 <a class="header-anchor" href="#_13-重定向输入" aria-label="Permalink to “13. 重定向输入”">​</a></h3><p>你可使用 <strong>&lt;</strong>命令（小于号）将文件输入到cat中.</p><pre><code># cat &lt; /root/linux
</code></pre><p>上面命令表示 /root/linux中的内容作为cat的输入。屏幕上显示如下 :</p><pre><code>ubuntu
centos
redhat
mint
slackware
</code></pre><p>为了更清楚表示它的意义，我们使用以下命令 :</p><pre><code># cat &lt; /root/linux | sort &gt; linux-sort
</code></pre><p>此命令这样理解: <strong>从/root/linux中读取内容，然后排序，将结果输出并生成linux-sort新文件</strong></p><p>然后我们看看linux-sort中的内容 :</p><pre><code>centos
mint
redhat
slackware
ubuntu
</code></pre><p>以上是一些cat命令的日常基本应用. 更多相关你可从cat命令手册中学到并记得经常练习它们.</p><hr>`,63)),r("p",null,[e[1]||(e[1]=t("via: ",-1)),o(n,{href:"http://linoxide.com/linux-command/13-cat-command-examples/"},{default:a(()=>[...e[0]||(e[0]=[t("http://linoxide.com/linux-command/13-cat-command-examples/",-1)])]),_:1})]),r("p",null,[e[4]||(e[4]=t("译者：",-1)),o(n,{href:"https://github.com/%E8%AF%91%E8%80%85ID"},{default:a(()=>[...e[2]||(e[2]=[t("hongchuntang",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),o(n,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...e[3]||(e[3]=[t("Caroline",-1)])]),_:1})]),r("p",null,[e[8]||(e[8]=t("本文由 ",-1)),o(n,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创翻译，",-1)),o(n,{href:"http://linux.cn/"},{default:a(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const C=i(d,[["render",m]]);export{k as __pageData,C as default};
