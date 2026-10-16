import{_ as r,a0 as u,w as d,s as m,I as i,x as e,a1 as n,A as p,ao as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const h=JSON.parse('{"title":"使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计 | LCTT x X-CMD","titleTemplate":false,"description":"使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150909 Linux Server See the Historical and Statistical Uptime of System With tuptime Utility","title":"使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计","tag":"201509","desc":""},"relativePath":"201509/20150909 Linux Server See the Historical and Statistical Uptime of System With tuptime Utility.md","filePath":"[post].md"}'),a={name:"201509/20150909 Linux Server See the Historical and Statistical Uptime of System With tuptime Utility.md"};function l(y,t,c,g,x,S){const s=u("Link");return d(),m("div",null,[t[17]||(t[17]=i("h1",{id:"使用-tuptime-工具查看-linux-服务器系统的开机时间的历史和统计",tabindex:"-1"},[e("使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计 "),i("a",{class:"header-anchor",href:"#使用-tuptime-工具查看-linux-服务器系统的开机时间的历史和统计","aria-label":"Permalink to “使用 tuptime 工具查看 Linux 服务器系统的开机时间的历史和统计”"},"​")],-1)),t[18]||(t[18]=i("p",null,"你可以使用下面的工具来查看 Linux 或类 Unix 系统运行了多长时间：",-1)),t[19]||(t[19]=i("ul",null,[i("li",null,"uptime ： 告诉你服务器运行了多长的时间。"),i("li",null,"lastt ： 显示重启和关机时间。"),i("li",null,"tuptime ： 报告系统的运行时间历史和运行时间统计，这是指重启之间的运行时间。和 uptime 命令类似，不过输出结果更有意思。")],-1)),t[20]||(t[20]=i("h3",{id:"找出系统上次重启时间和日期",tabindex:"-1"},[e("找出系统上次重启时间和日期 "),i("a",{class:"header-anchor",href:"#找出系统上次重启时间和日期","aria-label":"Permalink to “找出系统上次重启时间和日期”"},"​")],-1)),i("p",null,[t[1]||(t[1]=e("你",-1)),n(s,{href:"http://www.cyberciti.biz/hardware/howto-see-historical-statistical-uptime-on-linux-server/"},{default:p(()=>[...t[0]||(t[0]=[e("可以使用下面的命令来获取Linux操作系统的上次重启和关机时间及日期",-1)])]),_:1}),t[2]||(t[2]=e("（在OSX/类Unix系统上也可以用）：",-1))]),t[21]||(t[21]=o(`<pre><code>### 显示系统重启和关机时间
who -b
last reboot
last shutdown
### 开机信息
uptime
cat /proc/uptime
awk &#39;{ print &quot;up &quot; $1 /60 &quot; minutes&quot;}&#39; /proc/uptime
w
</code></pre><p><strong>样例输出：</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/uptime-w-awk-outputs.jpg" alt="Fig.01: Various Linux commands in action to find out the server uptime"></p><p><em>图01：用于找出服务器开机时间的多个Linux命令</em></p><p>###跟 tuptime 问打个招呼吧###</p><p>tuptime 命令行工具可以报告基于 Linux 的系统上的下列信息：</p><ol><li>系统启动次数统计</li><li>注册首次启动时间（也就是安装时间）</li><li>正常关机和意外关机统计</li><li>平均开机时间和故障停机时间</li><li>当前开机时间</li><li>首次启动以来的开机和故障停机率</li><li>累积系统开机时间、故障停机时间和合计</li><li>报告每次启动、开机时间、关机和故障停机时间</li></ol><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h4>`,8)),i("p",null,[t[4]||(t[4]=e("输入",-1)),n(s,{href:"http://www.cyberciti.biz/faq/debian-ubunut-linux-download-a-git-repository/"},{default:p(()=>[...t[3]||(t[3]=[e("下面的命令来克隆 git 仓库到 Linux 系统中",-1)])]),_:1}),t[5]||(t[5]=e("：",-1))]),t[22]||(t[22]=o(`<pre><code>$ cd /tmp
$ git clone https://github.com/rfrail3/tuptime.git
$ ls
$ cd tuptime
$ ls
</code></pre><p><strong>样例输出：</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/git-install-tuptime.jpg" alt="Fig.02: Cloning a git repo"></p><p><em>图02：克隆git仓库</em></p><p>确保你安装了带有 sys，optparse，os，re，string，sqlite3，datetime，disutils 和 locale 模块的 Python v2.7。</p><p>你可以像下面这样来安装：</p><pre><code>$ sudo tuptime-install.sh
</code></pre><p>或者，可以手工安装（基于 systemd 或非 systemd ）：</p><pre><code>$ sudo cp /tmp/tuptime/latest/cron.d/tuptime /etc/cron.d/tuptime
</code></pre><p>如果系统是systemd的，拷贝服务文件并启用：</p><pre><code>$ sudo cp /tmp/tuptime/latest/systemd/tuptime.service /lib/systemd/system/
$ sudo systemctl enable tuptime.service
</code></pre><p>如果系统不是systemd的，拷贝初始化文件：</p><pre><code>$ sudo cp /tmp/tuptime/latest/init.d/tuptime.init.d-debian7 /etc/init.d/tuptime
$ sudo update-rc.d tuptime defaults
</code></pre><p>####运行####</p><p>只需输入以下命令：</p><pre><code>$ sudo tuptime
</code></pre><p><strong>样例输出：</strong></p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/09/tuptime-output.jpg" alt="Fig.03: tuptime in action"></p><p><em>图03：tuptime工作中</em></p><p>在一次更新内核后，我重启了系统，然后再次输入了同样的命令：</p><pre><code>$ sudo tuptime
System startups:	2   since   03:52:16 PM 08/21/2015
System shutdowns:	1 ok   -   0 bad
Average uptime: 	7 days, 16 hours, 48 minutes and 3 seconds
Average downtime: 	2 hours, 30 minutes and 5 seconds
Current uptime: 	5 minutes and 28 seconds   since   06:23:06 AM 09/06/2015
Uptime rate: 		98.66 %
Downtime rate: 		1.34 %
System uptime: 		15 days, 9 hours, 36 minutes and 7 seconds
System downtime: 	5 hours, 0 minutes and 11 seconds
System life: 		15 days, 14 hours, 36 minutes and 18 seconds
</code></pre><p>你可以像下面这样修改日期和时间格式：</p><pre><code>$ sudo tuptime -d &#39;%H:%M:%S %m-%d-%Y&#39;
</code></pre><p><strong>样例输出：</strong></p><pre><code>System startups:	1   since   15:52:16 08-21-2015
System shutdowns:	0 ok   -   0 bad
Average uptime: 	15 days, 9 hours, 21 minutes and 19 seconds
Average downtime: 	0 seconds
Current uptime: 	15 days, 9 hours, 21 minutes and 19 seconds   since   15:52:16 08-21-2015
Uptime rate: 		100.0 %
Downtime rate: 		0.0 %
System uptime: 		15 days, 9 hours, 21 minutes and 19 seconds
System downtime: 	0 seconds
System life: 		15 days, 9 hours, 21 minutes and 19 seconds
</code></pre><p>计算每次启动、开机时间、关机和故障停机时间：</p><pre><code>$ sudo tuptime -e
</code></pre><p><strong>样例输出：</strong></p><pre><code>Startup:  1  at  03:52:16 PM 08/21/2015
Uptime:   15 days, 9 hours, 22 minutes and 33 seconds
 
System startups:	1   since   03:52:16 PM 08/21/2015
System shutdowns:	0 ok   -   0 bad
Average uptime: 	15 days, 9 hours, 22 minutes and 33 seconds
Average downtime: 	0 seconds
Current uptime: 	15 days, 9 hours, 22 minutes and 33 seconds   since   03:52:16 PM 08/21/2015
Uptime rate: 		100.0 %
Downtime rate: 		0.0 %
System uptime: 		15 days, 9 hours, 22 minutes and 33 seconds
System downtime: 	0 seconds
System life: 		15 days, 9 hours, 22 minutes and 33 seconds
</code></pre><hr>`,30)),i("p",null,[t[7]||(t[7]=e("via: ",-1)),n(s,{href:"http://www.cyberciti.biz/hardware/howto-see-historical-statistical-uptime-on-linux-server/"},{default:p(()=>[...t[6]||(t[6]=[e("http://www.cyberciti.biz/hardware/howto-see-historical-statistical-uptime-on-linux-server/",-1)])]),_:1})]),i("p",null,[t[10]||(t[10]=e("作者：Vivek Gite 译者：",-1)),n(s,{href:"https://github.com/GOLinux"},{default:p(()=>[...t[8]||(t[8]=[e("GOLinux",-1)])]),_:1}),t[11]||(t[11]=e(" 校对：",-1)),n(s,{href:"https://github.com/wxy"},{default:p(()=>[...t[9]||(t[9]=[e("wxy",-1)])]),_:1})]),i("p",null,[t[14]||(t[14]=e("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...t[12]||(t[12]=[e("LCTT",-1)])]),_:1}),t[15]||(t[15]=e(" 原创编译，",-1)),n(s,{href:"https://linux.cn/"},{default:p(()=>[...t[13]||(t[13]=[e("Linux中国",-1)])]),_:1}),t[16]||(t[16]=e(" 荣誉推出",-1))])])}const b=r(a,[["render",l]]);export{h as __pageData,b as default};
