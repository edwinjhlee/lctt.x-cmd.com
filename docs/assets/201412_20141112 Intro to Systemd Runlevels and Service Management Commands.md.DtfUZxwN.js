import{_ as l,a0 as p,w as d,s as a,ao as o,I as i,x as e,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"systemd的运行级别与服务管理命令简介 | LCTT x X-CMD","titleTemplate":false,"description":"systemd的运行级别与服务管理命令简介 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"systemd的运行级别与服务管理命令简介 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"systemd的运行级别与服务管理命令简介 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141112 Intro to Systemd Runlevels and Service Management Commands","title":"systemd的运行级别与服务管理命令简介","tag":"201412","desc":""},"relativePath":"201412/20141112 Intro to Systemd Runlevels and Service Management Commands.md","filePath":"[post].md"}'),u={name:"201412/20141112 Intro to Systemd Runlevels and Service Management Commands.md"};function m(g,t,y,f,S,T){const s=p("Link");return d(),a("div",null,[t[21]||(t[21]=o(`<h1 id="systemd的运行级别与服务管理命令简介" tabindex="-1">systemd的运行级别与服务管理命令简介 <a class="header-anchor" href="#systemd的运行级别与服务管理命令简介" aria-label="Permalink to “systemd的运行级别与服务管理命令简介”">​</a></h1><p><img src="http://www.linux.com/images/stories/41373/Linux_kernel_unified_hierarchy_cgroups_and_systemd.svg.png" alt=""></p><p>从很久很久以前我们就在使用静态运行级别。而systemd提供了更为动态灵活的机制，来管控你的系统。</p><p>在开始介绍systemd命令前，让我们先简单的回顾一下历史。在Linux世界里，有一个很奇怪的现象，一方面Linux和自由软件（FOSS）在不断的向前推进，另一方面人们对这些变化却不断的抱怨。这就是为什么我要在此稍稍提及那些反对systemd所引起的争论的原因，因为我依然记得历史上有不少类似的争论：</p><ul><li>软件包（Pacakge）是邪恶的，因为真正的Linux用户会从源码构建他所想要的的一切，并严格的管理系统中安装的软件。</li><li>解析依赖关系的包管理器是邪恶的，真正的Linux用户会手动解决这些该死的依赖关系。</li><li>apt-get总能把事情干好，所以只有Yum是邪恶的。</li><li>Red Hat简直就是Linux中的微软。</li><li>好样的，Ubuntu！</li><li>滚蛋吧，Ubuntu！</li></ul><p>诸如此类...就像我之前常常说的一样，变化总是让人沮丧。这些该死的变化搅乱了我的工作流程，这可不是一件小事情，任何业务流程的中断，都会直接影响到生产力。但是，我们现在还处于计算机发展的婴儿期，在未来的很长的一段时间内将会持续有快速的变化和发展。想必大家应该都认识一些因循守旧的人，在他们的心里，商品一旦买回家以后就是恒久不变的，就像是买了一把扳手、一套家具或是一个粉红色的火烈鸟草坪装饰品。就是这些人，仍然在坚持使用Windows Vista，甚至还有人在使用运行Windows 95的老破烂机器和CRT显示器。他们不能理解为什么要去换一台新机器。老的还能用啊，不是么？</p><p>这让我回忆起了我在维护老电脑上的一项伟大的成就，那台破电脑真的早就该淘汰掉。从前我有个朋友有一台286的老机器，安装了一个极其老的MS-DOS版本。她使用这台电脑来处理一些简单的任务，比如说约会、日记、记账等，我还用BASIC给她写了一个简单的记账软件。她不用关注任何安全更新，是这样么？因为它压根都没有联网。所以我会时不时给她维修一下电脑，更换电阻、电容、电源或者是CMOS电池什么的。它竟然还一直能用。它那袖珍的琥珀CRT显示器变得越来越暗，在使用了20多年后，终于退出了历史舞台。现在我的这位朋友，换了一台运行Linux的老Thinkpad，来干同样的活。</p><p>前面的话题有点偏题了，下面抓紧时间开始介绍systemd。</p><p>###运行级别 vs. 状态###</p><p>SysVInit使用静态的运行级别来构建不同的启动状态，大部分发布版本中提供了以下5个运行级别：</p><ul><li>单用户模式（Single-user mode）</li><li>多用户模式，不启动网络服务（Multi-user mode without network services started）</li><li>多用户模式，启动网络服务（Multi-user mode with network services started）</li><li>系统关机（System shutdown）</li><li>系统重启（System reboot）</li></ul><p>对于我来说，使用多个运行级别并没有太大的好处，但它们却一直在系统中存在着。 不同于运行级别，systemd可以创建不同的状态，状态提供了灵活的机制来设置启动时的配置项。这些状态是由多个unit文件组成的，状态又叫做启动目标（target）。启动目标有一个清晰的描述性命名，而不是像运行级别那样使用数字。unit文件可以控制服务、设备、套接字和挂载点。参考下/usr/lib/systemd/system/graphical.target，这是CentOS 7默认的启动目标：</p><pre><code>[Unit]
Description=Graphical Interface
Documentation=man:systemd.special(7)
Requires=multi-user.target
After=multi-user.target
Conflicts=rescue.target
Wants=display-manager.service
AllowIsolate=yes
[Install]
Alias=default.target
</code></pre><p>现在再看看unit文件长什么样？ 我来给大家找个例子。 unit文件存放在下面的两个目录下：</p><ul><li>/etc/systemd/system/</li><li>/usr/lib/systemd/system/</li></ul><p>我们可以修改第一个目录中的文件来进行自定义配置，而第二个目录中的文件是包安装时保存的备份。<strong>/etc/systemd/system/</strong>的优先级高于<strong>/usr/lib/systemd/system/</strong>。不错，用户优先级高于机器。下面是Apache Web server的unit文件：</p><pre><code>[Unit]
Description=The Apache HTTP Server
After=network.target remote-fs.target nss-lookup.target
[Service]
Type=notify
EnvironmentFile=/etc/sysconfig/httpd
ExecStart=/usr/sbin/httpd/ $OPTIONS -DFOREGROUND
ExecReload=/usr/sbin/httpd $OPTIONS -k graceful
ExecStop=/bin/kill -WINCH \${MAINPID}
KillSignal=SIGCONT
PrivateTmp=true
[Install]
WantedBy=multi.user.target
</code></pre><p>就算是对于新手而言，上面的文件也是非常简单易懂的。这可比SysVInit的init文件要简单多了，为了便于比较，下面截取了/etc/init.d/apache2的一个片段：</p><pre><code>SCRIPTNAME=&quot;\${0##*/}&quot;
SCRIPTNAME=&quot;\${SCRIPTNAME##[KS][0-9][0-9]}&quot;
if [ -n &quot;$APACHE_CONFDIR&quot; ] ; then
	if [ &quot;\${APACHE_CONFDIR##/etc/apache2-}&quot; != &quot;\${APACHE_CONFDIR}&quot; ] ; then
	        DIR_SUFFIX=&quot;\${APACHE_CONFDIR##/etc/apache2-}&quot;
	else
	        DIR_SUFFIX=
</code></pre><p>整个文件一共有410行。</p><p>你可以检查unit文件的依赖关系，我常常被这些复杂的依赖关系给吓到：</p><pre><code>$ systemctl list-dependencies httpd.service
</code></pre><h3 id="cgroups" tabindex="-1">cgroups <a class="header-anchor" href="#cgroups" aria-label="Permalink to “cgroups”">​</a></h3>`,23)),i("p",null,[t[1]||(t[1]=e("cgroups，或者叫控制组，在Linux内核里已经出现好几年了，但直到systemd的出现才被真正使用起来。",-1)),n(s,{href:"https://www.kernel.org/doc/Documentation/cgroups/cgroups.txt"},{default:r(()=>[...t[0]||(t[0]=[e("The kernel documentation",-1)])]),_:1}),t[2]||(t[2]=e("中是这样描述cgroups的：“控制组提供层次化的机制来管理任务组，使用它可以聚合和拆分任务组，并管理任务组后续产生的子任务。”换句话说，它提供了多种有效的方式来控制、限制和分配资源。systemd使用了cgroups，你可以便捷的查看它，使用下面的命令可以展示你系统中的整个cgroup树：",-1))]),t[22]||(t[22]=o(`<pre><code>$ systemd-cgls
</code></pre><p>你可以使用ps命令来进行查看cgroup树：</p><pre><code>$ ps xawf -eo pid,user,cgroup,args
</code></pre><p>###常用命令集###</p><p>下面的命令行展示了如何为守护进程重新装载配置文件，注意不是systemd服务文件。 使用这个命令能够激活新的配置项，且尽可能少的打断业务进程，下面以Apache为例：</p><pre><code># systemctl reload httpd.service
</code></pre><p>重新装载服务文件（service file）需要完全停止和重新启动服务。如果服务挂死了，用下面的命令行可以恢复它：</p><pre><code># systemctl restart httpd.service
</code></pre><p>你还可以用一个命令重启所有的守护进程。这个命令会重新装载所有守护进程的unit文件，然后重新生成依赖关系树：</p><pre><code># systemctl daemon-reload
</code></pre><p>在非特权模式下，你也可以进行重启、挂起、关机操作：</p><pre><code>$ systemctl reboot
$ systemctl suspend
$ systemctl poweroff
</code></pre>`,12)),i("p",null,[t[5]||(t[5]=e("按照惯例，最后给大家介绍一些systemd的学习材料。",-1)),n(s,{href:"http://www.linux.com/learn/tutorials/524577-here-we-go-again-another-linux-init-intro-to-systemd"},{default:r(()=>[...t[3]||(t[3]=[e("Here We Go Again, Another Linux Init: Intro to systemd",-1)])]),_:1}),t[6]||(t[6]=e(" 和 ",-1)),n(s,{href:"http://www.linux.com/learn/tutorials/788613-understanding-and-using-systemd"},{default:r(()=>[...t[4]||(t[4]=[e("Understanding and Using Systemd",-1)])]),_:1}),t[7]||(t[7]=e(" 是不错的入门材料，这两份文档里会链接到更多其他资源。",-1))]),t[23]||(t[23]=i("hr",null,null,-1)),i("p",null,[t[9]||(t[9]=e("via: ",-1)),n(s,{href:"http://www.linux.com/learn/tutorials/794615-systemd-runlevels-and-service-management"},{default:r(()=>[...t[8]||(t[8]=[e("http://www.linux.com/learn/tutorials/794615-systemd-runlevels-and-service-management",-1)])]),_:1})]),i("p",null,[t[13]||(t[13]=e("作者：",-1)),n(s,{href:"http://www.linux.com/community/forums/person/3734"},{default:r(()=>[...t[10]||(t[10]=[e("Carla Schroder",-1)])]),_:1}),t[14]||(t[14]=e(" 译者：",-1)),n(s,{href:"https://github.com/coloka"},{default:r(()=>[...t[11]||(t[11]=[e("coloka",-1)])]),_:1}),t[15]||(t[15]=e(" 校对：",-1)),n(s,{href:"https://github.com/wxy"},{default:r(()=>[...t[12]||(t[12]=[e("wxy",-1)])]),_:1})]),i("p",null,[t[18]||(t[18]=e("本文由 ",-1)),n(s,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[16]||(t[16]=[e("LCTT",-1)])]),_:1}),t[19]||(t[19]=e(" 原创翻译，",-1)),n(s,{href:"http://linux.cn/"},{default:r(()=>[...t[17]||(t[17]=[e("Linux中国",-1)])]),_:1}),t[20]||(t[20]=e(" 荣誉推出",-1))])])}const x=l(u,[["render",m]]);export{w as __pageData,x as default};
