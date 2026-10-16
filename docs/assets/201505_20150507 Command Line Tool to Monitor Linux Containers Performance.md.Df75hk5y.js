import{_ as l,a0 as i,w as s,s as a,ao as c,I as r,x as t,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"监控 Linux 容器性能的命令行神器 | LCTT x X-CMD","titleTemplate":false,"description":"监控 Linux 容器性能的命令行神器 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"监控 Linux 容器性能的命令行神器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"监控 Linux 容器性能的命令行神器 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150507 Command Line Tool to Monitor Linux Containers Performance","title":"监控 Linux 容器性能的命令行神器","tag":"201505","desc":""},"relativePath":"201505/20150507 Command Line Tool to Monitor Linux Containers Performance.md","filePath":"[post].md"}'),u={name:"201505/20150507 Command Line Tool to Monitor Linux Containers Performance.md"};function m(d,o,g,f,h,L){const n=i("Link");return s(),a("div",null,[o[16]||(o[16]=c(`<h1 id="监控-linux-容器性能的命令行神器" tabindex="-1">监控 Linux 容器性能的命令行神器 <a class="header-anchor" href="#监控-linux-容器性能的命令行神器" aria-label="Permalink to “监控 Linux 容器性能的命令行神器”">​</a></h1><p>ctop是一个新的基于命令行的工具，它可用于在容器层级监控进程。容器通过利用控制器组（cgroup）的资源管理功能，提供了操作系统层级的虚拟化环境。该工具从cgroup收集与内存、CPU、块输入输出的相关数据，以及拥有者、开机时间等元数据，并以人性化的格式呈现给用户，这样就可以快速对系统健康状况进行评估。基于所获得的数据，它可以尝试推测下层的容器技术。ctop也有助于在低内存环境中检测出谁在消耗大量的内存。</p><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to “功能”">​</a></h3><p>ctop的一些功能如下：</p><ul><li>收集CPU、内存和块输入输出的度量值</li><li>收集与拥有者、容器技术和任务统计相关的信息</li><li>通过任意栏对信息排序</li><li>以树状视图显示信息</li><li>折叠/展开cgroup树</li><li>选择并跟踪cgroup/容器</li><li>选择显示数据刷新的时间窗口</li><li>暂停刷新数据</li><li>检测基于systemd、Docker和LXC的容器</li><li>基于Docker和LXC的容器的高级特性 <ul><li>打开/连接shell以进行深度诊断</li><li>停止/杀死容器类型</li></ul></li></ul><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h3><p><strong>ctop</strong>是由Python写成的，因此，除了需要Python 2.6或其更高版本外（带有内建的光标支持），别无其它外部依赖。推荐使用Python的pip进行安装，如果还没有安装pip，请先安装，然后使用pip安装ctop。</p><p><em>注意：本文样例来自Ubuntu（14.10）系统</em></p><pre><code>$ sudo apt-get install python-pip
</code></pre><p>使用pip安装ctop：</p><pre><code>poornima@poornima-Lenovo:~$ sudo pip install ctop

[sudo] password for poornima:

Downloading/unpacking ctop

Downloading ctop-0.4.0.tar.gz

Running setup.py (path:/tmp/pip_build_root/ctop/setup.py) egg_info for package ctop

Installing collected packages: ctop

Running setup.py install for ctop

changing mode of build/scripts-2.7/ctop from 644 to 755

changing mode of /usr/local/bin/ctop to 755

Successfully installed ctop

Cleaning up...
</code></pre><p>如果不选择使用pip安装，你也可以使用wget直接从github安装：</p><pre><code>poornima@poornima-Lenovo:~$ wget https://raw.githubusercontent.com/yadutaf/ctop/master/cgroup_top.py -O ctop

--2015-04-29 19:32:53-- https://raw.githubusercontent.com/yadutaf/ctop/master/cgroup_top.py

Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 199.27.78.133

Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|199.27.78.133|:443... connected.

HTTP request sent, awaiting response... 200 OK Length: 27314 (27K) [text/plain]

Saving to: ctop

100%[======================================&gt;] 27,314 --.-K/s in 0s

2015-04-29 19:32:59 (61.0 MB/s) - ctop saved [27314/27314]
</code></pre><hr><pre><code>poornima@poornima-Lenovo:~$ chmod +x ctop
</code></pre><p>如果cgroup-bin包没有安装，你可能会碰到一个错误消息，你可以通过安装需要的包来解决。</p><pre><code>poornima@poornima-Lenovo:~$ ./ctop

[ERROR] Failed to locate cgroup mountpoints.

poornima@poornima-Lenovo:~$ sudo apt-get install cgroup-bin
</code></pre><p>下面是ctop的输出样例：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop.png" alt="ctop screen"></p><p><em>ctop屏幕</em></p><h3 id="用法选项" tabindex="-1">用法选项 <a class="header-anchor" href="#用法选项" aria-label="Permalink to “用法选项”">​</a></h3><pre><code>ctop [--tree] [--refresh=] [--columns=] [--sort-col=] [--follow=] [--fold=, ...] ctop (-h | --help)
</code></pre><p>当你进入ctop屏幕，可使用上（↑）和下（↓）箭头键在容器间导航。点击某个容器就选定了该容器，按q或Ctrl+C退出该容器。</p><p>现在，让我们来看看上面列出的那一堆选项究竟是怎么用的吧。</p><p><strong>-h / --help - 显示帮助信息</strong></p><pre><code>poornima@poornima-Lenovo:~$ ctop -h
Usage: ctop [options]

Options:
-h, --help show this help message and exit
--tree show tree view by default
--refresh=REFRESH Refresh display every &lt;seconds&gt;
--follow=FOLLOW Follow cgroup path
--columns=COLUMNS List of optional columns to display. Always includes
&#39;name&#39;
--sort-col=SORT_COL Select column to sort by initially. Can be changed
dynamically.
</code></pre><p><strong>--tree - 显示容器的树形视图</strong></p><p>默认情况下，会显示列表视图</p><p>当你进入ctop窗口，你可以使用F5按钮在树状/列表视图间切换。</p><p><strong><code>--fold=&lt;name&gt;</code> - 在树形视图中折叠名为 <code>&lt;name&gt;</code> 的 cgroup 路径</strong></p><p>该选项需要与 --tree 选项组合使用。</p><p>例子: ctop --tree --fold=/user.slice</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop-fold.png" alt="Output of &#39;ctop --fold&#39;"></p><p><em>&#39;ctop --fold&#39;的输出</em></p><p>在ctop窗口中，使用+/-键来展开或折叠子cgroup。</p><p>注意：在写本文时，pip仓库中还没有最新版的ctop，还不支持命令行的‘--fold’选项</p><p><strong>--follow= - 跟踪/高亮 cgroup 路径</strong></p><p>例子: ctop --follow=/user.slice/user-1000.slice</p><p>正如你在下面屏幕中所见到的那样，带有“/user.slice/user-1000.slice”路径的cgroup被高亮显示，这让用户易于跟踪，就算显示位置变了也一样。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop-follow.png" alt="Output of &#39;ctop --follow&#39;"></p><p><em>&#39;ctop --follow&#39;的输出</em></p><p>你也可以使用‘f’按钮来让高亮的行跟踪选定的容器。默认情况下，跟踪是关闭的。</p><p><strong>--refresh= - 按指定频率刷新显示，默认1秒</strong></p><p>这对于按每用户需求来显示改变刷新率时很有用。使用‘p’按钮可以暂停刷新并选择文本。</p><p><strong><code>--columns=&lt;columns&gt;</code> - 限定只显示选定的列。&#39;name&#39; 需要是第一个字段，其后跟着其它字段。默认情况下，字段包括：owner, processes,memory, cpu-sys, cpu-user, blkio, cpu-time</strong></p><p>例子: ctop --columns=name,owner,type,memory</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/05/ctop-column.png" alt="Output of &#39;ctop --column&#39;"></p><p><em>&#39;ctop --column&#39;的输出</em></p><p><strong><code>-sort-col=&lt;sort-col&gt;</code> - 按指定的列排序。默认使用 cpu-user 排序</strong></p><p>例子: ctop --sort-col=blkio</p><p>如果有Docker和LXC支持的额外容器，跟踪选项也是可用的：</p><pre><code>press &#39;a&#39; - 接驳到终端输出

press &#39;e&#39; - 打开容器中的一个 shell

press &#39;s&#39; - 停止容器 (SIGTERM)

press &#39;k&#39; - 杀死容器 (SIGKILL)
</code></pre>`,52)),r("p",null,[o[1]||(o[1]=t("目前 Jean-Tiare Le Bigot 还在积极开发 ",-1)),p(n,{href:"https://github.com/yadutaf/ctop"},{default:e(()=>[...o[0]||(o[0]=[t("ctop",-1)])]),_:1}),o[2]||(o[2]=t(" 中，希望我们能在该工具中见到像本地 top 命令一样的特性 😃",-1))]),o[17]||(o[17]=r("hr",null,null,-1)),r("p",null,[o[4]||(o[4]=t("via: ",-1)),p(n,{href:"http://linoxide.com/how-tos/monitor-linux-containers-performance/"},{default:e(()=>[...o[3]||(o[3]=[t("http://linoxide.com/how-tos/monitor-linux-containers-performance/",-1)])]),_:1})]),r("p",null,[o[8]||(o[8]=t("作者：",-1)),p(n,{href:"http://linoxide.com/author/bnpoornima/"},{default:e(()=>[...o[5]||(o[5]=[t("B N Poornima",-1)])]),_:1}),o[9]||(o[9]=t(" 译者：",-1)),p(n,{href:"https://github.com/GOLinux"},{default:e(()=>[...o[6]||(o[6]=[t("GOLinux",-1)])]),_:1}),o[10]||(o[10]=t(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...o[7]||(o[7]=[t("wxy",-1)])]),_:1})]),r("p",null,[o[13]||(o[13]=t("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...o[11]||(o[11]=[t("LCTT",-1)])]),_:1}),o[14]||(o[14]=t(" 原创翻译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...o[12]||(o[12]=[t("Linux中国",-1)])]),_:1}),o[15]||(o[15]=t(" 荣誉推出",-1))])])}const b=l(u,[["render",m]]);export{C as __pageData,b as default};
