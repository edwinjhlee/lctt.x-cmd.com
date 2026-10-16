import{_ as n,a0 as d,w as i,s as l,ao as s,I as r,x as o,a1 as a,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"jobs 命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"jobs 命令示例 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"jobs 命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"jobs 命令示例 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151204 Linux or Unix--jobs Command Examples","title":"jobs 命令示例","tag":"201601","desc":""},"relativePath":"201601/20151204 Linux or Unix--jobs Command Examples.md","filePath":"[post].md"}'),b={name:"201601/20151204 Linux or Unix--jobs Command Examples.md"};function c(h,e,m,u,j,x){const t=d("Link");return i(),l("div",null,[e[14]||(e[14]=s(`<h1 id="jobs-命令示例" tabindex="-1">jobs 命令示例 <a class="header-anchor" href="#jobs-命令示例" aria-label="Permalink to “jobs 命令示例”">​</a></h1><p>我是个新的 Linux/Unix 用户。我该如何在 Linux 或类 Unix 系统中使用 BASH/KSH/TCSH 或者基于 POSIX 的 shell 来查看当前正在进行的作业（job）？在 Unix/Linux 上怎样显示当前作业的状态？(LCTT 译注：job，也常称为“任务”)</p><p>作业控制是一种能力，可以停止/暂停进程（命令）的执行并按你的要求继续/恢复它们的执行。这是通过你的操作系统和诸如 bash/ksh 或 POSIX shell 等 shell 来执行的。</p><p>shell 会将当前所执行的作业保存在一个表中，可以用 jobs 命令来显示。</p><h3 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to “用途”">​</a></h3><blockquote><p>在当前 shell 会话中显示作业的状态。</p></blockquote><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h3><p>其基本语法如下:</p><pre><code>jobs
</code></pre><p>或</p><pre><code>jobs jobID
</code></pre><p>或者</p><pre><code>jobs [options] jobID
</code></pre><h3 id="启动一些作业来进行示范" tabindex="-1">启动一些作业来进行示范 <a class="header-anchor" href="#启动一些作业来进行示范" aria-label="Permalink to “启动一些作业来进行示范”">​</a></h3><p>在开始使用 jobs 命令前，你需要在系统上先启动多个作业。执行以下命令来启动作业：</p><pre><code>### 启动 xeyes, calculator, 和 gedit 文本编辑器 ###
xeyes &amp;
gnome-calculator &amp;
gedit fetch-stock-prices.py &amp;
</code></pre><p>最后，在前台运行 ping 命令：</p><pre><code>ping www.cyberciti.biz
</code></pre><p>按 <strong>Ctrl-Z</strong> 键来挂起（suspend） ping 命令的作业。</p><h3 id="jobs-命令示例-1" tabindex="-1">jobs 命令示例 <a class="header-anchor" href="#jobs-命令示例-1" aria-label="Permalink to “jobs 命令示例”">​</a></h3><p>要在当前 shell 显示作业的状态，请输入：</p><pre><code>$ jobs
</code></pre><p>输出示例:</p><pre><code>[1]   7895 Running                 gpass &amp;
[2]   7906 Running                 gnome-calculator &amp;
[3]-  7910 Running                 gedit fetch-stock-prices.py &amp;
[4]+  7946 Stopped                 ping cyberciti.biz
</code></pre><p>要显示名字以“p”开头的进程 ID 或作业名称，输入：</p><pre><code>$ jobs -p %p
</code></pre><p>或者</p><pre><code>$ jobs %p
</code></pre><p>输出示例:</p><pre><code>[4]-  Stopped                 ping cyberciti.biz
</code></pre><p>字符 ％ 是一个指定任务的方法。在这个例子中，你可以使用作业名称开头字符串来来暂停它，如 ％ping。</p><h3 id="如何显示进程-id-不包含其他正常的信息" tabindex="-1">如何显示进程 ID 不包含其他正常的信息？ <a class="header-anchor" href="#如何显示进程-id-不包含其他正常的信息" aria-label="Permalink to “如何显示进程 ID 不包含其他正常的信息？”">​</a></h3><p>通过 jobs 命令的 -l（小写的 L）选项列出每个作业的详细信息，运行：</p><pre><code>$ jobs -l
</code></pre><p>示例输出:</p><p><img src="http://s0.cyberciti.org/uploads/faq/2013/02/jobs-command-output.jpg" alt="Fig.01: Displaying the status of jobs in the shell"></p><p><em>Fig.01: 在 shell 中显示 jobs 的状态</em></p><h3 id="如何只列出最近一次状态改变的进程" tabindex="-1">如何只列出最近一次状态改变的进程？ <a class="header-anchor" href="#如何只列出最近一次状态改变的进程" aria-label="Permalink to “如何只列出最近一次状态改变的进程？”">​</a></h3><p>首先，启动一个新的工作如下所示：</p><pre><code>$ sleep 100 &amp;
</code></pre><p>现在，只显示自从上次提示过停止或退出之后的作业，输入：</p><pre><code>$ jobs -n
</code></pre><p>示例输出:</p><pre><code>[5]-  Running                 sleep 100 &amp;
</code></pre><h3 id="仅显示进程-id-pid" tabindex="-1">仅显示进程 ID（PID） <a class="header-anchor" href="#仅显示进程-id-pid" aria-label="Permalink to “仅显示进程 ID（PID）”">​</a></h3><p>通过 jobs 命令的 -p 选项仅显示 PID：</p><pre><code>$ jobs -p
</code></pre><p>示例输出:</p><pre><code>7895
7906
7910
7946
7949
</code></pre><h3 id="怎样只显示正在运行的作业呢" tabindex="-1">怎样只显示正在运行的作业呢？ <a class="header-anchor" href="#怎样只显示正在运行的作业呢" aria-label="Permalink to “怎样只显示正在运行的作业呢？”">​</a></h3><p>通过 jobs 命令的 -r 选项只显示正在运行的作业，输入：</p><pre><code>$ jobs -r
</code></pre><p>示例输出:</p><pre><code>[1]   Running                 gpass &amp;
[2]   Running                 gnome-calculator &amp;
[3]-  Running                 gedit fetch-stock-prices.py &amp;
</code></pre><h3 id="怎样只显示已经停止工作的作业" tabindex="-1">怎样只显示已经停止工作的作业？ <a class="header-anchor" href="#怎样只显示已经停止工作的作业" aria-label="Permalink to “怎样只显示已经停止工作的作业？”">​</a></h3><p>通过 jobs 命令的 -s 选项只显示停止工作的作业，输入：</p><pre><code>$ jobs -s
</code></pre><p>示例输出:</p><pre><code>[4]+  Stopped                 ping cyberciti.biz
</code></pre><p>要继续执行 ping cyberciti.biz 作业，输入以下 bg 命令：</p><pre><code>$ bg %4
</code></pre><h3 id="jobs-命令选项" tabindex="-1">jobs 命令选项 <a class="header-anchor" href="#jobs-命令选项" aria-label="Permalink to “jobs 命令选项”">​</a></h3>`,62)),r("p",null,[e[1]||(e[1]=o("摘自 ",-1)),a(t,{href:"http://www.manpager.com/linux/man1/bash.1.html"},{default:p(()=>[...e[0]||(e[0]=[o("bash(1)",-1)])]),_:1}),e[2]||(e[2]=o(" 命令 man 手册页:",-1))]),e[15]||(e[15]=s(`<div class="table-wrap"><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td><code>-l</code></td><td>列出进程 ID 及其它信息。</td></tr><tr><td><code>-p</code></td><td>仅列出进程 ID。</td></tr><tr><td><code>-n</code></td><td>仅列出自从上次输出了状态变化提示（比如显示有进程退出）后的发生了状态变化的进程。</td></tr><tr><td><code>-r</code></td><td>仅显示运行中的作业。</td></tr><tr><td><code>-s</code></td><td>仅显示停止的作业。</td></tr><tr><td><code>-x</code></td><td>运行命令及其参数，并用新的命令的进程 ID 替代所匹配的原有作业的进程组 ID。</td></tr></tbody></table></div><h3 id="关于-usr-bin-jobs-和-shell-内建的说明" tabindex="-1">关于 /usr/bin/jobs 和 shell 内建的说明 <a class="header-anchor" href="#关于-usr-bin-jobs-和-shell-内建的说明" aria-label="Permalink to “关于 /usr/bin/jobs 和 shell 内建的说明”">​</a></h3><p>输入以下 type 命令找出是否 jobs 命令是 shell 的内建命令或是外部命令还是都是：</p><pre><code>$ type -a jobs
</code></pre><p>输出示例:</p><pre><code>jobs is a shell builtin
jobs is /usr/bin/jobs
</code></pre><p>在几乎所有情况下，你都需要使用 BASH/KSH/POSIX shell 内建的jobs 命令。/usr/bin/jobs 命令不能被用在当前 shell 中。/usr/bin/jobs 命令工作在不同的环境中，并不共享其父 bash/ksh 的 shell 作业。</p><hr>`,8)),r("p",null,[e[4]||(e[4]=o("via: ",-1)),a(t,{href:"http://www.cyberciti.biz/faq/unix-linux-jobs-command-examples-usage-syntax/"},{default:p(()=>[...e[3]||(e[3]=[o("http://www.cyberciti.biz/faq/unix-linux-jobs-command-examples-usage-syntax/",-1)])]),_:1})]),r("p",null,[e[7]||(e[7]=o("作者：Vivek Gite 译者：",-1)),a(t,{href:"https://github.com/strugglingyouth"},{default:p(()=>[...e[5]||(e[5]=[o("strugglingyouth",-1)])]),_:1}),e[8]||(e[8]=o(" 校对：",-1)),a(t,{href:"https://github.com/wxy"},{default:p(()=>[...e[6]||(e[6]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[11]||(e[11]=o("本文由 ",-1)),a(t,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[9]||(e[9]=[o("LCTT",-1)])]),_:1}),e[12]||(e[12]=o(" 原创编译，",-1)),a(t,{href:"https://linux.cn/"},{default:p(()=>[...e[10]||(e[10]=[o("Linux中国",-1)])]),_:1}),e[13]||(e[13]=o(" 荣誉推出",-1))])])}const C=n(b,[["render",c]]);export{T as __pageData,C as default};
