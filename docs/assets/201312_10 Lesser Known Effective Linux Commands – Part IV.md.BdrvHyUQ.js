import{_ as l,a0 as i,w as d,s as p,I as o,x as n,a1 as r,A as s,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"十个鲜为人知的 Linux 命令 - Part 4 | LCTT x X-CMD","titleTemplate":false,"description":"十个鲜为人知的 Linux 命令 - Part 4 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十个鲜为人知的 Linux 命令 - Part 4 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十个鲜为人知的 Linux 命令 - Part 4 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/10 Lesser Known Effective Linux Commands – Part IV","title":"十个鲜为人知的 Linux 命令 - Part 4","tag":"201312","desc":""},"relativePath":"201312/10 Lesser Known Effective Linux Commands – Part IV.md","filePath":"[post].md"}'),m={name:"201312/10 Lesser Known Effective Linux Commands – Part IV.md"};function u(g,t,_,f,w,x){const e=i("Link");return d(),p("div",null,[t[39]||(t[39]=o("h1",{id:"十个鲜为人知的-linux-命令-part-4",tabindex:"-1"},[n("十个鲜为人知的 Linux 命令 - Part 4 "),o("a",{class:"header-anchor",href:"#十个鲜为人知的-linux-命令-part-4","aria-label":"Permalink to “十个鲜为人知的 Linux 命令 - Part 4”"},"​")],-1)),t[40]||(t[40]=o("p",null,[n('继续我们的"鲜为人知"系列，本系列的第四篇会让你了解一些'),o("strong",null,"有趣"),n(" 又 "),o("strong",null,"动态"),n("的命令。这里我们进入实际的教程，没有很多理论。")],-1)),t[41]||(t[41]=o("p",null,[o("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/11/10-Lesser-Known-Effective-Commands-.png",alt:""})],-1)),o("ul",null,[o("li",null,[r(e,{href:"http://linux.cn/article-2258-1.html"},{default:s(()=>[...t[0]||(t[0]=[n("十一个鲜为人知的 Linux 命令 - Part 1",-1)])]),_:1})]),o("li",null,[r(e,{href:"http://linux.cn/article-2265-1.html"},{default:s(()=>[...t[1]||(t[1]=[n("十个鲜为人知的 Linux 命令 - Part 2",-1)])]),_:1})]),o("li",null,[r(e,{href:"http://linux.cn/article-2284-1.html"},{default:s(()=>[...t[2]||(t[2]=[n("十个鲜为人知的 Linux 命令 - Part 3",-1)])]),_:1})])]),t[42]||(t[42]=a(`<p>本系列的第四篇包含了另外的鲜为人知的Linux命令，这些值得去了解。也许你已经知道了这些命令，毫无疑问你是一个勇于探索的资深Linux用户。</p><h3 id="_32-strace-command" tabindex="-1">32. strace Command <a class="header-anchor" href="#_32-strace-command" aria-label="Permalink to “32. strace Command”">​</a></h3><p><strong>strace</strong>是一个调试工具并被主要用于Linux的故障排除。它可能在你的系统内没有默认安装，你可能需要<strong>apt</strong> 或者 <strong>yum</strong> 安装所需要的包。</p><p>使用strace命令追踪一个命令的执行。</p><pre><code>root@tecmint [~]# strace pwd
</code></pre><h4 id="示例输出" tabindex="-1">示例输出 <a class="header-anchor" href="#示例输出" aria-label="Permalink to “示例输出”">​</a></h4><pre><code>execve(&quot;/bin/pwd&quot;, [&quot;pwd&quot;], [/* 29 vars */]) = 0
brk(0)                                  = 0x728000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0df2000
access(&quot;/etc/ld.so.preload&quot;, R_OK)      = -1 ENOENT (No such file or directory)
open(&quot;/etc/ld.so.cache&quot;, O_RDONLY)      = 3
fstat(3, {st_mode=S_IFREG|0644, st_size=38427, ...}) = 0
mmap(NULL, 38427, PROT_READ, MAP_PRIVATE, 3, 0) = 0x7f29b0de8000
close(3)                                = 0
open(&quot;/lib64/libc.so.6&quot;, O_RDONLY)      = 3
read(3, &quot;\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0&gt;\\0\\1\\0\\0\\0\\360\\355\\1I;\\0\\0\\0&quot;..., 832) = 832
fstat(3, {st_mode=S_IFREG|0755, st_size=1922152, ...}) = 0
mmap(0x3b49000000, 3745960, PROT_READ|PROT_EXEC, MAP_PRIVATE|MAP_DENYWRITE, 3, 0) = 0x3b49000000
mprotect(0x3b4918a000, 2093056, PROT_NONE) = 0
mmap(0x3b49389000, 20480, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_DENYWRITE, 3, 0x189000) = 0x3b49389000
mmap(0x3b4938e000, 18600, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_FIXED|MAP_ANONYMOUS, -1, 0) = 0x3b4938e000
close(3)                                = 0
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0de7000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0de6000
mmap(NULL, 4096, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0x7f29b0de5000
....
</code></pre><p><strong>strace</strong>命令有大量的参数和选项，请参考man页来获取详细信息。</p><h3 id="_33-disown-a-exit-命令" tabindex="-1">33. disown -a &amp;&amp; exit 命令 <a class="header-anchor" href="#_33-disown-a-exit-命令" aria-label="Permalink to “33. disown -a &amp;&amp; exit 命令”">​</a></h3>`,9)),o("p",null,[t[4]||(t[4]=n("大多数系统管理员使用",-1)),r(e,{href:"http://www.tecmint.com/screen-command-examples-to-manage-linux-terminals/"},{default:s(()=>[...t[3]||(t[3]=[n("screen 命令",-1)])]),_:1}),t[5]||(t[5]=n("来控制运行在终端后台的作业。让我们假设一下如果你有一个长期运行的作业并想要将它从终端中",-1)),t[6]||(t[6]=o("strong",null,"脱离",-1)),t[7]||(t[7]=n("，你可以用screen命令来这么做。但是如果你不知道如何使用screen，那么disown可以用来救急。",-1))]),t[43]||(t[43]=o("p",null,"disown命令可以在后台持续运行任务，即使你关闭了终端会话。disown命令的语法是:",-1)),t[44]||(t[44]=o("pre",null,[o("code",null,`root@tecmint [~]# Command; disown -a && exit
`)],-1)),o("p",null,[t[9]||(t[9]=n("为了在终端中再次脱离一个已经长期运行的任务（译注：可能已经bg运行了，但是并没有脱离终端），使用",-1)),t[10]||(t[10]=o("strong",null,"jobs",-1)),t[11]||(t[11]=n("命令来找出任务号，接着使用disown ",-1)),t[12]||(t[12]=o("strong",null,"%n",-1)),t[13]||(t[13]=n("，这里的",-1)),t[14]||(t[14]=o("strong",null,"%n",-1)),t[15]||(t[15]=n("是作业号。为了验证作业确实在运行，使用",-1)),t[16]||(t[16]=o("strong",null,"ps",-1)),t[17]||(t[17]=n(" 或者 ",-1)),r(e,{href:"http://www.tecmint.com/12-top-command-examples-in-linux/"},{default:s(()=>[...t[8]||(t[8]=[n("top 命令",-1)])]),_:1}),t[18]||(t[18]=n("。",-1)),t[19]||(t[19]=o("strong",null,"nohup",-1)),t[20]||(t[20]=n("命令也是一个disown命令的替代品。",-1))]),t[45]||(t[45]=a(`<h3 id="_34-getconf-long-bit-命令" tabindex="-1">34. getconf LONG_BIT 命令 <a class="header-anchor" href="#_34-getconf-long-bit-命令" aria-label="Permalink to “34. getconf LONG_BIT 命令”">​</a></h3><p>上面的命令能显示你的机器架构是<strong>32</strong> bit 或者 <strong>64</strong> 位?</p><pre><code>root@tecmint [~]# getconf LONG_BIT

32
</code></pre><h3 id="_35-终端上显示日期" tabindex="-1">35. 终端上显示日期 <a class="header-anchor" href="#_35-终端上显示日期" aria-label="Permalink to “35. 终端上显示日期”">​</a></h3><p>下面的命令是几个命令的集合，确切地说是一个脚本。对于在shell或者终端下工作的人来说，没有GUI界面看到当前系统日期是一个乏味的工作。你可以用‘<strong>date</strong>‘命令查看今天的日期。</p><p>只要在提示符后输入如下的命令你就会在终端的右上角看到<strong>日期</strong>和<strong>时间</strong>。</p><pre><code>root@tecmint [~]# while sleep 1;do tput sc;tput cup 0 $(($(tput cols)-29));date;tput rc;done &amp;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/Date.jpg" alt="在终端下显示日期"></p><h3 id="_36-convert-命令" tabindex="-1">36. convert 命令 <a class="header-anchor" href="#_36-convert-命令" aria-label="Permalink to “36. convert 命令”">​</a></h3><p>在写教程的时候，我经常需要生成输出，很多时候是图片格式的输出。上面的命令集合并不适合我。假设我需要tree命令的图片格式的输出(对 <strong>/etc/x11</strong> 目录 )。</p><pre><code>root@tecmint:/etc/X11# tree | convert label:@- /home/avi/tree.png
</code></pre><p>上面命令的输出可以在一个特定的位置(这里是我的主目录)下看到，文件名是<strong>tree.png</strong>。</p><h3 id="_37-watch-t-n1-date-t-figlet" tabindex="-1">37. watch -t -n1 “date +%T|figlet” <a class="header-anchor" href="#_37-watch-t-n1-date-t-figlet" aria-label="Permalink to “37. watch -t -n1 “date +%T|figlet””">​</a></h3>`,13)),o("p",null,[t[22]||(t[22]=n("记住“",-1)),t[23]||(t[23]=o("strong",null,"figlet",-1)),t[24]||(t[24]=n("”命令在我们早期的文章“",-1)),r(e,{href:"http://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/"},{default:s(()=>[...t[21]||(t[21]=[n("20 Funny Commands of Linux",-1)])]),_:1}),t[25]||(t[25]=n("”中的描述。这个命令非常酷，这次我们会通过管道输出到‘",-1)),t[26]||(t[26]=o("strong",null,"figlet",-1)),t[27]||(t[27]=n("‘而在终端上显示一个动画电子钟。",-1))]),t[46]||(t[46]=a(`<p>你自己检查一下，记住你必须已经在系统上安装了<strong>figlet</strong>，用<strong>apt</strong> 或者 <strong>yum</strong>安装所需要的包。</p><pre><code>root@tecmint [~]# watch -t -n1 &quot;date +%T|figlet&quot;
</code></pre><h4 id="示例输出-1" tabindex="-1">示例输出 <a class="header-anchor" href="#示例输出-1" aria-label="Permalink to “示例输出”">​</a></h4><pre><code> _  ___    ____   ___    _____ _  _                                                                                             Fri Nov 29 10:29:34 GMT 
/ |/ _ \\ _|___ \\ / _ \\ _|___ /| || |
| | | | (_) __) | (_) (_) |_ \\| || |_
| | |_| |_ / __/ \\__, |_ ___) |__   _|
|_|\\___/(_)_____|  /_/(_)____/   |_|
</code></pre><h3 id="_38-host-和-dig-命令" tabindex="-1">38. host 和 dig 命令 <a class="header-anchor" href="#_38-host-和-dig-命令" aria-label="Permalink to “38. host 和 dig 命令”">​</a></h3><p>虽然“<strong>host</strong>” 和 “<strong>dig</strong>”命令不那么鲜为人知，仍然很少使用。host命令是一个<strong>DNS</strong>查询工具。</p><pre><code>root@tecmint [~]# host www.google.com

www.google.com has address 173.194.66.147
www.google.com has address 173.194.66.105
www.google.com has address 173.194.66.99
www.google.com has address 173.194.66.104
www.google.com has address 173.194.66.106
www.google.com has address 173.194.66.103
www.google.com has IPv6 address 2a00:1450:400c:c03::68
</code></pre><p>（译注：事实上，我觉得dig命令是最强大的，自从有了dig，我就再也不用 nslookup 了。）</p><pre><code>root@tecmint [~]# dig www.google.com

; &lt;&lt;&gt;&gt; DiG 9.8.2rc1-RedHat-9.8.2-0.17.rc1.el6_4.6 &lt;&lt;&gt;&gt; www.google.com
;; global options: +cmd
;; Got answer:
;; -&gt;&gt;HEADER&lt;
</code></pre><h3 id="_39-dstat-命令" tabindex="-1">39. dstat 命令 <a class="header-anchor" href="#_39-dstat-命令" aria-label="Permalink to “39. dstat 命令”">​</a></h3><p><strong>dstat</strong>是一个多用途的工具，它会依据系统资源生成统计。默认情况下你的系统可能没有安装‘<strong>dstat</strong>‘。在使用这个彩色的描述系统信息的生成器前使用<strong>apt</strong> 或者 <strong>yum</strong>来安装。</p><pre><code>root@tecmint [~]# dstat
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/dstat.jpeg" alt="dstat 命令"></p><h3 id="_40-bind-p-命令" tabindex="-1">40. bind -p 命令 <a class="header-anchor" href="#_40-bind-p-命令" aria-label="Permalink to “40. bind -p 命令”">​</a></h3><p>‘<strong>bind -p</strong>‘会显示所有的<strong>BASH</strong> shell可用的快捷方式。</p><pre><code>root@tecmint [~]# bind -p

&quot;\\C-g&quot;: abort 
&quot;\\C-x\\C-g&quot;: abort 
&quot;\\e\\C-g&quot;: abort 
&quot;\\C-j&quot;: accept-line
&quot;\\C-m&quot;: accept-line 
# alias-expand-line (not bound) 
# arrow-key-prefix (not bound) 
# backward-byte (not bound) 
&quot;\\C-b&quot;: backward-char 
&quot;\\eOD&quot;: backward-char 
&quot;\\e[D&quot;: backward-char 
&quot;\\e!&quot;: complete-command 
&quot;\\e/&quot;: complete-filename 
&quot;\\e@&quot;: complete-hostname 
&quot;\\e{&quot;: complete-into-braces 
&quot;\\e~&quot;: complete-username 
&quot;\\e$&quot;: complete-variable 
# copy-backward-word (not bound)
# copy-forward-word (not bound) 
# copy-region-as-kill (not bound)
....
....
</code></pre><h3 id="_41-touch-forcefsck" tabindex="-1">41. touch /forcefsck <a class="header-anchor" href="#_41-touch-forcefsck" aria-label="Permalink to “41. touch /forcefsck”">​</a></h3><p>下面的命令会在root目录下创建一个空的文件夹&#39;<strong>forcefsck</strong>&#39;。这会强制Linux系统在下次启动时检查文件系统。</p><pre><code>root@tecmint [~]# touch /forcefsck
</code></pre><p>今天这些就是全部。因为你们爱‘<strong>鲜为人知的命令</strong>‘ ，因此我们将继续这个系列，本系列的下一篇文章将很快发布。</p><p>不要走开继续关注<strong>Tecmint</strong>。不要忘记在评论栏里留下你们有价值的反馈。帮我们一个忙，喜爱、分享我们的文章，并帮我们传播。</p><hr>`,22)),o("p",null,[t[29]||(t[29]=n("via: ",-1)),r(e,{href:"http://www.tecmint.com/10-lesser-known-effective-linux-commands-part-iv/"},{default:s(()=>[...t[28]||(t[28]=[n("http://www.tecmint.com/10-lesser-known-effective-linux-commands-part-iv/",-1)])]),_:1})]),o("p",null,[t[32]||(t[32]=n("译者：",-1)),r(e,{href:"https://github.com/geekpi"},{default:s(()=>[...t[30]||(t[30]=[n("geekpi",-1)])]),_:1}),t[33]||(t[33]=n(" 校对：",-1)),r(e,{href:"https://github.com/wxy"},{default:s(()=>[...t[31]||(t[31]=[n("wxy",-1)])]),_:1})]),o("p",null,[t[36]||(t[36]=n("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...t[34]||(t[34]=[n("LCTT",-1)])]),_:1}),t[37]||(t[37]=n(" 原创翻译，",-1)),r(e,{href:"http://linux.cn/"},{default:s(()=>[...t[35]||(t[35]=[n("Linux中国",-1)])]),_:1}),t[38]||(t[38]=n(" 荣誉推出",-1))])])}const A=l(m,[["render",u]]);export{T as __pageData,A as default};
