import{_ as r,a0 as s,w as i,s as p,ao as d,I as l,x as n,a1 as e,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const M=JSON.parse('{"title":"Linux内置的审计跟踪工具 -  last命令 | LCTT x X-CMD","titleTemplate":false,"description":"Linux内置的审计跟踪工具 -  last命令 | LCTT (201402) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux内置的审计跟踪工具 -  last命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux内置的审计跟踪工具 -  last命令 | LCTT (201402) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201402/Built in Audit Trail Tool – Last Command in Linux","title":"Linux内置的审计跟踪工具 -  last命令","tag":"201402","desc":""},"relativePath":"201402/Built in Audit Trail Tool – Last Command in Linux.md","filePath":"[post].md"}'),g={name:"201402/Built in Audit Trail Tool – Last Command in Linux.md"};function m(c,t,h,u,b,x){const o=s("Link");return i(),p("div",null,[t[11]||(t[11]=d(`<h1 id="linux内置的审计跟踪工具-last命令" tabindex="-1">Linux内置的审计跟踪工具 - last命令 <a class="header-anchor" href="#linux内置的审计跟踪工具-last命令" aria-label="Permalink to “Linux内置的审计跟踪工具 -  last命令”">​</a></h1><p><img src="http://linoxide.com/wp-content/uploads/2013/12/linux-last-command.jpg" alt=""></p><p>如果你是一个服务器管理员，你或许知道你要保护你的服务器的话，不仅是从外部，还要从内部保护。linux有一个内置工具来看到最后登陆服务器的用户，可以帮助你保护服务器。</p><p>这个命令是<strong>last</strong>。它<strong>对于追踪非常有用</strong>。让我们来看一下last可以为你做些什么。</p><h3 id="last命令的功能是什么" tabindex="-1">last命令的功能是什么 <a class="header-anchor" href="#last命令的功能是什么" aria-label="Permalink to “last命令的功能是什么”">​</a></h3><p><strong>last</strong>显示的是自<strong>/var/log/wtmp</strong>文件创建起所有登录(和登出)的用户。这个文件是二进制文件，它不能被文本编辑器浏览，比如vi、Joe或者其他软件。这是非常有用的，因为用户(或者root)不能像他们希望的那样修改这个文件。</p><p>last会给出所有已登录用户的用户名、tty、IP地址(如果用户是远程连接的话)、日期-时间和用户已经登录的时间。</p><h3 id="如何运行last" tabindex="-1">如何运行last <a class="header-anchor" href="#如何运行last" aria-label="Permalink to “如何运行last”">​</a></h3><p>你只要在控制台中输入<strong>last</strong>即可。这是个例子：</p><pre><code>$ last

leni pts/0 10.0.76.162 Mon Dec 2 12:32 - 13:25 (00:53)
pungki tty1 Mon Dec 2 09:31 still logged in
reboot system boot 2.6.32-358.23.2 Mon Dec 2 09:20 - 13:25 (04:05) 
</code></pre><p>这里是如何阅读last信息：</p><ul><li><p>第一列告诉谁是用户</p></li><li><p>第二列给出了用户如何连接的信息</p><ul><li><p>pts/0 (伪终端) 意味着从诸如SSH或telnet的远程连接的用户</p></li><li><p>tty (teletypewriter) 意味着直接连接到计算机或者本地连接的用户</p></li><li><p>除了重启活动,所有状态会在启动时显示</p></li></ul></li><li><p>第三列<strong>显示用户来自哪里</strong>。如果用户来自于远程计算机，你会看到一个主机名或者IP地址。如果你看见:0.0 或者什么都没有，这意味着用户通过本地终端连接。除了重启活动，内核版本会显示在状态中。</p></li><li><p>剩下的列显示<strong>日志活动发生在何时</strong>。括号中的数字告诉我们连接持续了多少小时和分钟。</p></li></ul><h3 id="日常操作中last的一些示例" tabindex="-1">日常操作中last的一些示例 <a class="header-anchor" href="#日常操作中last的一些示例" aria-label="Permalink to “日常操作中last的一些示例”">​</a></h3><h4 id="限制显示行的数目" tabindex="-1">限制显示行的数目 <a class="header-anchor" href="#限制显示行的数目" aria-label="Permalink to “限制显示行的数目”">​</a></h4><p>当你有很多行要显示时,你可以限制你想看到的行的数目.使用 <strong>-n 参数</strong>来这么做。</p><pre><code>$ last -n 3

leni pts/0 10.0.76.162 Mon Dec 2 12:32 - 13:25 (00:53)
pungki tty1 Mon Dec 2 09:31 still logged in
reboot system boot 2.6.32-358.23.2 Mon Dec 2 09:20 - 13:25 (04:05)
</code></pre><p><strong>-n</strong> 参数会使last显示从当前时间到以后的3条记录。</p><h4 id="不显示主机名" tabindex="-1">不显示主机名 <a class="header-anchor" href="#不显示主机名" aria-label="Permalink to “不显示主机名”">​</a></h4><p>使用 <strong>-R</strong> 参数来这么做。这里是例子 :</p><pre><code>$ last -R

leni pts/0 Mon Dec 2 12:32 - 13:25 (00:53)
pungki tty1 Mon Dec 2 09:31 still logged in
reboot system boot Mon Dec 2 09:20 - 13:25 (04:05)
</code></pre><p>如你所见,现在在也没有关于主机或者IP地址的信息了。</p><h4 id="最后一列显示主机名" tabindex="-1">最后一列显示主机名 <a class="header-anchor" href="#最后一列显示主机名" aria-label="Permalink to “最后一列显示主机名”">​</a></h4><p>要这么做,我们使用 <strong>-a</strong>参数</p><pre><code>$ last -a

leni pts/0 Mon Dec 2 12:32 - 13:25 (00:53) 10.0.76.162
pungki tty1 Mon Dec 2 09:31 still logged in :0.0
reboot system boot Mon Dec 2 09:20 - 13:25 (04:05) 2.6.32-358.23.2.el6.i686
</code></pre><p>现在主机信息诸如10.0.76.162 会放在最后一列。</p><h4 id="显示完整登入登出时间日期" tabindex="-1">显示完整登入登出时间日期 <a class="header-anchor" href="#显示完整登入登出时间日期" aria-label="Permalink to “显示完整登入登出时间日期”">​</a></h4><p>对于此,你可以使用 <strong>-F</strong> 参数。这个是个示例:</p><pre><code>$ last -F

leni pts/0 10.0.76.162 Mon Dec 2 12:32:24 2013 – Mon Dec 2013 13:25:24 2013 (00:53)
</code></pre><h4 id="打印特定的用户名" tabindex="-1">打印特定的用户名 <a class="header-anchor" href="#打印特定的用户名" aria-label="Permalink to “打印特定的用户名”">​</a></h4><p>如果你想要追踪特定的用户,你可以特别打印它。在last命令后面输入用户名。</p><pre><code>$ last leni

leni tty1 Mon Dec 2 18-42 still logged in
leni pts/0 Mon Dec 2 12:32 - 13:25 (00:53) 10.0.76.162
</code></pre><p>或者你想要知道<strong>reboot</strong>何时完成，你也可以这样显示它：</p><pre><code>$ last reboot

reboot system boot Mon Dec 2 09:20 - 16:55 (07:34)
reboot system boot Sun Dec 1 04:26 - 04:27 (00:01)
reboot system boot Wed Nov 27 20:27 - 01:24 (04:57)
reboot system boot Tue Nov 26 21:06 - 06:13 (09:06)
</code></pre><h4 id="打印特定-pts" tabindex="-1">打印特定 / pts <a class="header-anchor" href="#打印特定-pts" aria-label="Permalink to “打印特定 / pts”">​</a></h4><p>last同样可以打印特定tty/pts的信息. 只要在last命令后面输入tty名字或者pty名字。</p><p>这里有一些例子:</p><pre><code>$ last tty1

pungki tty1 Mon Dec 2 09:31 still logged in
pungki tty1 Mon Dec 2 04:26 – down (00:00)
pungki tty1 Mon Dec 2 04:07 – down (00:00)
pungki tty1 Sun Dec 1 18:55 – 04:07 (09:12)

$ last pts/0

leni pts/0 10.0.76.162 Mon Dec 2 12:32 - 13:25 (00:53)
pungki pts/0 :0.0 Wed Nov 27 20:28 – down (04:56)
</code></pre><p>当你看到 <strong>down 的值</strong> - 比如上面的第二行,它意味着用户从某个时间登录直到系统重启或关机。</p><h4 id="使用另一个文件而不是-var-log-wtmp" tabindex="-1">使用另一个文件而不是 /var/log/wtmp <a class="header-anchor" href="#使用另一个文件而不是-var-log-wtmp" aria-label="Permalink to “使用另一个文件而不是 /var/log/wtmp”">​</a></h4><p>默认上，last命令会从<strong>/var/log/wtmp</strong>中解析信息。如果你想要<strong>last命令</strong>从另外一个文件解析，你可以使用<strong>-f</strong> 参数。比如，当日志切割后，让我们假设切割后，之前的文件名变为<strong>/var/log/wtmp.1</strong>。那么last命令会像这样。</p><pre><code>$ last -f /var/log/wtmp.1
</code></pre><h4 id="显示运行级别改变" tabindex="-1">显示运行级别改变 <a class="header-anchor" href="#显示运行级别改变" aria-label="Permalink to “显示运行级别改变”">​</a></h4><p>这里有个<strong>-x</strong>参数来显示运行级别。这里示例输出:</p><pre><code>pungki tty1 Mon Dec 2 19:21 still logged in
runlevel (to lvl 3) 2.6.32-358.23.2 Mon Dec 2 19:20 – 19:29 (00:08)
reboot system boot 2.6.32-358.23.2 Mon Dec 2 19:20 – 19:29 (00:08)
shutdown system down 2.6.32-358.23.2 Mon Dec 2 18:56 – 19:20 (00:23)
runlevel (to lvl 0) 2.6.32-358.23.2 Mon Dec 2 18:56 – 18:56 (00:00)
leni tty1 Mon Dec 2 18:42 – down (00:00) 
</code></pre><p>你可以看到这里有两个运行级别。运行级别<strong>to lvl 3</strong>的条目意味着系统运行在完整的控制台模式，而没在X window或者GUI中。同时,当系统<strong>关机</strong>时，实际上是切换为<strong>运行级别0</strong>，这就是为什么last会显示<strong>to lvl 0</strong>。</p><h4 id="查看失败登录" tabindex="-1">查看失败登录 <a class="header-anchor" href="#查看失败登录" aria-label="Permalink to “查看失败登录”">​</a></h4><p><strong>last</strong>命令用了记录成功登录，而 <strong>lastb</strong> 命令<strong>记录失败的登录尝试</strong>。你<strong>必须拥有root</strong>权限才能运行lastb命令。这里有一个lastb命令的示例输出。lastb会解析/var/log/btmp的信息。</p><pre><code># lastb

leni tty1 Mon Dec 2 22:12 – 22:12 (00:00)
rahma tty1 Mon Dec 2 22:11 – 22:11 (00:00) 
</code></pre><h4 id="切割日志" tabindex="-1">切割日志 <a class="header-anchor" href="#切割日志" aria-label="Permalink to “切割日志”">​</a></h4><p>因为*/var/log/wtmp<strong>记录每次的登录活动，文件的大小可能会快速地增长。默认上，Linux会每月</strong>切割 /var/log/wtmp/<strong>。切割的策略放在/etc/logrotate.conf 文件中。这里是我</strong>/etc/logrotate.conf**文件的内容。</p><pre><code>/var/log/wtmp {
　　monthly
　　create 0664 root umtp
　　minsize 1M
　　rotate 1
}
</code></pre><p>对于 <strong>/var/log/btmp</strong>, 这里是默认的倒换活动配置</p><pre><code>/var/log/btmp {
　　missingok
　　monthly
　　create 0600 root umtp
　　minsize 1M
　　rotate 1
}
</code></pre><p>你可以根据需要自己修改。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>你可以结合这些参数来自定义last和lastb的输出。所有可以<strong>运行于last命令</strong>的参数都<strong>可运行在</strong>lastb命令上。更多细节,请通过在控制台输入<strong>man last</strong>来访问。</p><hr>`,57)),l("p",null,[t[1]||(t[1]=n("via: ",-1)),e(o,{href:"http://linoxide.com/linux-command/linux-last-command/"},{default:a(()=>[...t[0]||(t[0]=[n("http://linoxide.com/linux-command/linux-last-command/",-1)])]),_:1})]),l("p",null,[t[4]||(t[4]=n("译者：",-1)),e(o,{href:"https://github.com/geekpi"},{default:a(()=>[...t[2]||(t[2]=[n("geekpi",-1)])]),_:1}),t[5]||(t[5]=n(" 校对：",-1)),e(o,{href:"https://github.com/wxy"},{default:a(()=>[...t[3]||(t[3]=[n("wxy",-1)])]),_:1})]),l("p",null,[t[8]||(t[8]=n("本文由 ",-1)),e(o,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...t[6]||(t[6]=[n("LCTT",-1)])]),_:1}),t[9]||(t[9]=n(" 原创翻译，",-1)),e(o,{href:"http://linux.cn/"},{default:a(()=>[...t[7]||(t[7]=[n("Linux中国",-1)])]),_:1}),t[10]||(t[10]=n(" 荣誉推出",-1))])])}const y=r(g,[["render",m]]);export{M as __pageData,y as default};
