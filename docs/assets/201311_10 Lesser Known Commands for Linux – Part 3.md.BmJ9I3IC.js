import{_ as i,a0 as l,w as p,s as d,ao as s,I as n,x as o,a1 as a,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const b=JSON.parse('{"title":"十个鲜为人知的 Linux 命令 - Part 3 | LCTT x X-CMD","titleTemplate":false,"description":"十个鲜为人知的 Linux 命令 - Part 3 | LCTT (201311) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"十个鲜为人知的 Linux 命令 - Part 3 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"十个鲜为人知的 Linux 命令 - Part 3 | LCTT (201311) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201311/10 Lesser Known Commands for Linux – Part 3","title":"十个鲜为人知的 Linux 命令 - Part 3","tag":"201311","desc":""},"relativePath":"201311/10 Lesser Known Commands for Linux – Part 3.md","filePath":"[post].md"}'),u={name:"201311/10 Lesser Known Commands for Linux – Part 3.md"};function c(m,t,g,h,x,w){const e=l("Link");return p(),d("div",null,[t[23]||(t[23]=s(`<h1 id="十个鲜为人知的-linux-命令-part-3" tabindex="-1">十个鲜为人知的 Linux 命令 - Part 3 <a class="header-anchor" href="#十个鲜为人知的-linux-命令-part-3" aria-label="Permalink to “十个鲜为人知的 Linux 命令 - Part 3”">​</a></h1><p><img src="http://www.tecmint.com/wp-content/uploads/2013/11/10-Lesser-Known-Linux-Commands.png" alt=""></p><p>我们继续10个鲜为人知Linux命令系列的第三部分。或许你已经知道了这些命令，那你无疑是一个有经验而喜欢探索的Linux用户。</p><h3 id="_22-foo-bar-命令" tabindex="-1">22. ^foo^bar 命令 <a class="header-anchor" href="#_22-foo-bar-命令" aria-label="Permalink to “22. ^foo^bar 命令”">​</a></h3><p>在一个实例中运行修改后的最后一个命令。假设我需要运行一个命令‘<strong>ls -l</strong>‘来详细列出‘<strong>Desktop</strong>’目录下的内容。意外地，你打了‘<strong>lls -l</strong>‘。所以你需要重新打整个命令或者使用导航键编辑前面的命令。当你的命令很长时这个很痛苦。</p><pre><code>avi@localhost:~/Desktop$ lls -l 
bash: lls: command not found

avi@localhost:~/Desktop$ ^lls^ls 

ls -l 
total 7489440 

drwxr-xr-x 2 avi  avi       36864 Nov 13  2012 101MSDCF 
-rw-r--r-- 1 avi  avi      206833 Nov  5 15:27 1.jpg 
-rw-r--r-- 1 avi  avi      158951 Nov  5 15:27 2.jpg 
-rw-r--r-- 1 avi  avi       90624 Nov  5 12:59 Untitled 1.doc
</code></pre><p><strong>注意</strong>:在上面的替换中我们使用“<strong>^typo(被替换的)^original_command(原始命令)</strong>”。警告！这个命令可能会非常危险！如果你有意或者无意地打错了系统命令或者任何像<strong>rm -rf</strong>那样的风险命令的话！</p><h3 id="_23-file-txt-命令" tabindex="-1">23. &gt; file.txt 命令 <a class="header-anchor" href="#_23-file-txt-命令" aria-label="Permalink to “23. &gt; file.txt 命令”">​</a></h3><p>这个命令会刷新文件的内容而不需删除然后创建相同的文件。当我们需要反复输出，或者在相同的文件上记录日志时，这个命令就非常有用。</p><p>我有一个有很多文字的‘<strong>test.txt</strong>’文件在我的‘<strong>Desktop</strong>‘上。</p><pre><code>avi@localhost:~/Desktop$ cat test.txt 

Linux 
GNU 
Debian 
Fedora 
kali 
ubuntu 
git 
Linus 
Torvalds


avi@localhost:~/Desktop$ &gt; test.txt 
avi@localhost:~/Desktop$ cat test.txt
</code></pre><p><strong>注意</strong>:再说一次，这个命令可能很危险！永远不要尝试刷新系统文件或者某篇日志文件的内容。如果你这么做了，你可能会遭遇严重的问题！</p><h3 id="_24-at-命令" tabindex="-1">24. at 命令 <a class="header-anchor" href="#_24-at-命令" aria-label="Permalink to “24. at 命令”">​</a></h3>`,13)),n("p",null,[t[1]||(t[1]=o("‘",-1)),t[2]||(t[2]=n("strong",null,"at",-1)),t[3]||(t[3]=o("‘命令与",-1)),a(e,{href:"http://www.tecmint.com/11-cron-scheduling-task-examples-in-linux/"},{default:r(()=>[...t[0]||(t[0]=[o("cron 命令",-1)])]),_:1}),t[4]||(t[4]=o("相似也可用于安排一个任务或者在某个特定时刻执行命令。",-1))]),t[24]||(t[24]=s(`<pre><code>avi@localhost:~/Desktop$ echo &quot;ls -l &gt; /dev/pts/0&quot; | at 14:012
</code></pre><p>或</p><pre><code>avi@localhost:~/Desktop$ echo &quot;ls -l &gt; /dev/pts/0&quot; | at 2:12 PM
</code></pre><p><strong>示例输出</strong></p><pre><code>-rw-r--r-- 1 avi  avi      220492 Nov  1 13:49 Screenshot-1.png 
-rw-r--r-- 1 root root        358 Oct 17 10:11 sources.list 
-rw-r--r-- 1 avi  avi  4695982080 Oct 10 20:29 squeeze.iso 
..
..
-rw-r--r-- 1 avi  avi       90624 Nov  5 12:59 Untitled 1.doc 
-rw-r--r-- 1 avi  avi       96206 Nov  5 12:56 Untitled 1.odt 
-rw-r--r-- 1 avi  avi        9405 Nov 12 23:22 Untitled.png
</code></pre><p><strong>注意</strong>:echo “<strong>ls -l</strong>”的意思是，将这串命令(这里是 <strong>ls -l</strong>)输出在标准终端上。你可以用你需要或者选择的命令替代‘<strong>ls -l</strong>‘。</p><p>&gt; ：重定向输出</p><p><strong>/dev/pts/0</strong>: 这是输出设备和/或文件，输出到指定的地方，这里输出在终端（/dev/pts/0）。</p><p>就我而言，此时我的<strong>tty</strong>在<strong>/dev/pts/0</strong>。你可以用<strong>tty</strong>命令检查你的<strong>tty</strong>。</p><pre><code>avi@localhost:~/Desktop$ tty 

/dev/pts/0
</code></pre><p><strong>注意</strong>: ‘<strong>at</strong>‘会在系统时间匹配到特定时间时会尽快执行。</p><h3 id="_25-du-h-–max-depth-1-命令" tabindex="-1">25. du -h –max-depth=1 命令 <a class="header-anchor" href="#_25-du-h-–max-depth-1-命令" aria-label="Permalink to “25. du -h –max-depth=1 命令”">​</a></h3><p>下面的命令以人类可读的形式输出当前目录的子目录的大小。</p><pre><code>avi@localhost:/home/avi/Desktop# du -h --max-depth=1 

38M		./test 
1.1G	./shivji 
42M		./drupal 
6.9G	./101MSDCF 
16G	.
</code></pre>`,14)),n("p",null,[t[6]||(t[6]=n("strong",null,"注意",-1)),t[7]||(t[7]=o(":上面的命令在",-1)),a(e,{href:"http://www.tecmint.com/check-linux-disk-usage-of-files-and-directories/"},{default:r(()=>[...t[5]||(t[5]=[o("检查系统使用率",-1)])]),_:1}),t[8]||(t[8]=o("是非常有用。",-1))]),t[25]||(t[25]=s(`<h3 id="_26-expr-命令" tabindex="-1">26. expr 命令 <a class="header-anchor" href="#_26-expr-命令" aria-label="Permalink to “26. expr 命令”">​</a></h3><p>‘<strong>expr</strong>‘不是那么鲜为人知的命令。这个命令在终端中计算简单的算数时非常有用。</p><pre><code>avi@localhost:/home/avi/Desktop# expr 2 + 3 
5

avi@localhost:/home/avi/Desktop# expr 6 – 3 
3

avi@localhost:/home/avi/Desktop# expr 12 / 3 
4

avi@localhost:/home/avi/Desktop# expr 2 \\* 9 
18
</code></pre><h3 id="_27-look-命令" tabindex="-1">27. look 命令 <a class="header-anchor" href="#_27-look-命令" aria-label="Permalink to “27. look 命令”">​</a></h3><p>在终端上从英文字典上查单词以防混淆。比如说，我记不清了是该拼成carrier还是carieer。</p><p>avi@localhost:/home/avi/Documents# look car</p><pre><code>Cara 
Cara&#39;s 
…
... 
carps 
carpus 
carpus&#39;s 
carrel 
carrel&#39;s 
carrels 
carriage 
carriage&#39;s 
carriages 
carriageway 
carriageway&#39;s 
carried 
carrier 
carrier&#39;s 
carriers 
carries 
…
... 
caryatids
</code></pre><p>上面的命令会显示字典上所有以&#39;car&#39;开头的单词。我得到了我想找的。</p><h3 id="_28-yes-命令" tabindex="-1">28. yes 命令 <a class="header-anchor" href="#_28-yes-命令" aria-label="Permalink to “28. yes 命令”">​</a></h3><p>另外一个命令在通常基础上并不会经常使用，但是在脚本语言和系统管理时非常有用。</p><p>这个命令会持续地输出给定的字符串，直到由你的中断命令打断。</p><pre><code>avi@localhost:~/Desktop$ yes &quot;Tecmint is one of the best site dedicated to Linux, how to&quot; 

Tecmint is one of the best site dedicated to Linux, how to 
Tecmint is one of the best site dedicated to Linux, how to 
Tecmint is one of the best site dedicated to Linux, how to 
Tecmint is one of the best site dedicated to Linux, how to 
…
…
...
Tecmint is one of the best site dedicated to Linux, how to 
Tecmint is one of the best site dedicated to Linux, how to 
Tecmint is one of the best site dedicated to Linux, how to
</code></pre><h3 id="_29-factor-命令" tabindex="-1">29. factor 命令 <a class="header-anchor" href="#_29-factor-命令" aria-label="Permalink to “29. factor 命令”">​</a></h3><p>factor实际是一个源于数学的命令。这个命令会输出所有给定数字的因数。</p><pre><code>avi@localhost:~/Desktop$ factor 22 
22: 2 11

avi@localhost:~/Desktop$ factor 21 
21: 3 7

avi@localhost:~/Desktop$ factor 11 
11: 11
</code></pre><h3 id="_30-ping-i-60-a-ip-address" tabindex="-1">30. ping -i 60 -a IP_address <a class="header-anchor" href="#_30-ping-i-60-a-ip-address" aria-label="Permalink to “30. ping -i 60 -a IP_address”">​</a></h3><p>我们都用ping命令检测服务器是否连通。我通常ping google，来检测我是否连接到了因特网。</p><p>当你等待或者持续盯着你的终端等待命令的回应或者等待服务器的连接时，有时是很气人的。</p><p>一旦服务器连通就有一个声音如何（译注：下面命令是等60秒PING一次）？</p><pre><code>avi@localhost:~/Desktop$ ping -i 60 -a www.google.com 

PING www.google.com (74.125.200.103) 56(84) bytes of data. 
64 bytes from www.google.com (74.125.200.103): icmp_req=1 ttl=44 time=105 ms 
64 bytes from 74.125.200.103: icmp_req=2 ttl=44 time=281 ms
</code></pre><p>注意，当你发现命令不会返回声音时。请确保你的系统不是静音的，声音已经在‘<strong>sound preferences(声音选项)</strong>‘ 中启用并确保勾选了‘<strong>Enable window and window sound</strong>‘。</p><h3 id="_31-tac-命令" tabindex="-1">31. tac 命令 <a class="header-anchor" href="#_31-tac-命令" aria-label="Permalink to “31. tac 命令”">​</a></h3><p>这个命令很有趣，他会以倒序输出文本文件的内容。也就是从最后一行到第一行。</p>`,23)),n("p",null,[t[10]||(t[10]=o("在home目录下，我的Documents目录下有一个35.txt文件。用",-1)),a(e,{href:"http://www.tecmint.com/13-basic-cat-command-examples-in-linux/"},{default:r(()=>[...t[9]||(t[9]=[o("cat 命令",-1)])]),_:1}),t[11]||(t[11]=o("检查内容。",-1))]),t[26]||(t[26]=s(`<pre><code>avi@localhost:~/Documents$ cat 35.txt
</code></pre><p><strong>示例输出</strong></p><blockquote><ol><li>Linux is built with certain powerful tools, which are unavailable in windows.</li><li>One of such important tool is Shell Scripting. Windows however comes with such a tool but as usual it is much weak as compared to it&#39;s Linux Counterpart.</li><li>Shell scripting/programming makes it possible to execute command(s), piped to get desired output in order to automate day-to-day usages.</li></ol></blockquote><p>现在用tac命令反转文件内容（译注：当然，我们知道cat反转过来就是tac）。</p><pre><code>avi@localhost:~/Documents$ tac 35.txt
</code></pre><p><strong>示例输出</strong></p><blockquote><ol start="3"><li>Shell scripting/programming makes it possible to execute command(s), piped to get desired output in order to automate day-to-day usages.</li><li>One of such important tool is Shell Scripting. Windows however comes with such a tool but as usual it is much weak as compared to it&#39;s Linux Counterpart.</li><li>Linux is built with certain powerful tools, which are unavailable in windows.</li></ol></blockquote><p>现在结束了。如果你还知道其他一些Linux鲜为人知的命令，你可以在下面评论，那么我们你可以在以后的文章中包含进来。</p><p>不要忘了给我们有价值的评论。我很快会发另外有趣的文章。别走开继续关注 <strong>Tecmint</strong>。</p><hr>`,10)),n("p",null,[t[13]||(t[13]=o("via: ",-1)),a(e,{href:"http://www.tecmint.com/10-lesser-known-commands-for-linux-part-3/"},{default:r(()=>[...t[12]||(t[12]=[o("http://www.tecmint.com/10-lesser-known-commands-for-linux-part-3/",-1)])]),_:1})]),n("p",null,[t[16]||(t[16]=o("译者：",-1)),a(e,{href:"https://github.com/geekpi"},{default:r(()=>[...t[14]||(t[14]=[o("geekpi",-1)])]),_:1}),t[17]||(t[17]=o(" 校对：",-1)),a(e,{href:"https://github.com/wxy"},{default:r(()=>[...t[15]||(t[15]=[o("wxy",-1)])]),_:1})]),n("p",null,[t[20]||(t[20]=o("本文由 ",-1)),a(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[18]||(t[18]=[o("LCTT",-1)])]),_:1}),t[21]||(t[21]=o(" 原创翻译，",-1)),a(e,{href:"http://linux.cn/"},{default:r(()=>[...t[19]||(t[19]=[o("Linux中国",-1)])]),_:1}),t[22]||(t[22]=o(" 荣誉推出",-1))])])}const k=i(u,[["render",c]]);export{b as __pageData,k as default};
