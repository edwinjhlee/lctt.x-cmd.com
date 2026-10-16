import{_ as t,a0 as p,w as l,s as d,I as o,x as n,a1 as i,A as a,ao as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const E=JSON.parse('{"title":"如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE) | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140910 How to set up Nagios Remote Plugin Executor (NRPE) in Linux","title":"如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE)","tag":"201410","desc":""},"relativePath":"201410/20140910 How to set up Nagios Remote Plugin Executor (NRPE) in Linux.md","filePath":"[post].md"}'),c={name:"201410/20140910 How to set up Nagios Remote Plugin Executor (NRPE) in Linux.md"};function g(u,e,m,h,N,P){const r=p("Link");return l(),d("div",null,[e[24]||(e[24]=o("h1",{id:"如何在-linux-环境下配置-nagios-remote-plugin-executor-nrpe",tabindex:"-1"},[n("如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE) "),o("a",{class:"header-anchor",href:"#如何在-linux-环境下配置-nagios-remote-plugin-executor-nrpe","aria-label":"Permalink to “如何在 Linux 环境下配置 Nagios Remote Plugin Executor (NRPE)”"},"​")],-1)),o("p",null,[e[2]||(e[2]=n("就网络管理而言，Nagios 是最强大的工具之一。Nagios 可以监控远程主机的可访问性，以及其中正在运行的服务的状态。不过，如果我们想要监控远程主机中网络服务以外的东西呢？比方说，我们可能想要监控远程主机上的磁盘利用率或者 ",-1)),i(r,{href:"http://xmodulo.com/2012/08/how-to-measure-average-cpu-utilization.html"},{default:a(()=>[...e[0]||(e[0]=[n("CPU 处理器负载",-1)])]),_:1}),e[3]||(e[3]=n("。Nagios Remote Plugin Executor（NRPE）便是一个可以帮助你完成这些操作的工具。NRPE 允许你执行在远程主机上安装的 Nagios 插件，并且将它们集成到一个",-1)),i(r,{href:"http://linux.cn/article-2436-1.html"},{default:a(()=>[...e[1]||(e[1]=[n("已经存在的 Nagios 服务器",-1)])]),_:1}),e[4]||(e[4]=n("里。",-1))]),e[25]||(e[25]=o("p",null,"本教程将会介绍如何在一个已经部署好的 Nagios 中配置 NRPE。本教程主要分为两部分：",-1)),e[26]||(e[26]=o("ul",null,[o("li",null,"配置远程主机。"),o("li",null,"配置 Nagios 监控服务器。")],-1)),e[27]||(e[27]=o("p",null,"之后我们会以定义一些可以被 NRPE 使用的自定义命令来结束本教程。",-1)),e[28]||(e[28]=o("h3",{id:"为-nrpe-配置远程主机",tabindex:"-1"},[n("为 NRPE 配置远程主机 "),o("a",{class:"header-anchor",href:"#为-nrpe-配置远程主机","aria-label":"Permalink to “为 NRPE 配置远程主机”"},"​")],-1)),e[29]||(e[29]=o("h4",{id:"第一步-安装-nrpe-服务",tabindex:"-1"},[n("第一步：安装 NRPE 服务 "),o("a",{class:"header-anchor",href:"#第一步-安装-nrpe-服务","aria-label":"Permalink to “第一步：安装 NRPE 服务”"},"​")],-1)),e[30]||(e[30]=o("p",null,"你需要在你想要使用 NRPE 监控的每一台远程主机上安装 NRPE 服务。每一台远程主机上的 NRPE 服务守护进程将会与一台 Nagios 监控服务器进行通信。",-1)),o("p",null,[e[6]||(e[6]=n("NRPE 服务所需要的软件包可以很容易地用 apt-get 或者 yum 来安装，取决于所在的平台。对于 CentOS 来说，由于 NRPE 并不在 CentOS 的仓库中，我们需要",-1)),i(r,{href:"http://xmodulo.com/2013/01/how-to-set-up-rpmforge-repoforge-repository-on-centos.html"},{default:a(()=>[...e[5]||(e[5]=[n("添加 Repoforge 仓库",-1)])]),_:1}),e[7]||(e[7]=n("。",-1))]),e[31]||(e[31]=s(`<p><strong>对于 Debian、Ubuntu 或者 Linux Mint：</strong></p><pre><code># apt-get install nagios-nrpe-server
</code></pre><p><strong>对于 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># yum install nagios-nrpe
</code></pre><h4 id="第二步-准备配置文件" tabindex="-1">第二步：准备配置文件 <a class="header-anchor" href="#第二步-准备配置文件" aria-label="Permalink to “第二步：准备配置文件”">​</a></h4><p>配置文件 /etc/nagios/nrpe.cfg 在基于 Debian 或者 RedHat 的系统中比较相近。让我们备份并修改配置文件：</p><pre><code># vim /etc/nagios/nrpe.cfg
</code></pre><hr><pre><code>## NRPE 服务端口是可以自定义的 ##
server_port=5666

## 允许 Nagios 监控服务器访问 ##
## 注意：逗号后面没有空格 ##
allowed_hosts=127.0.0.1,X.X.X.X-IP_v4_of_Nagios_server

## 下面的例子中我们硬编码了参数。
## 这些参数可以按需修改。

## 注意：对于 CentOS 64 位用户，请使用 /usr/lib64 替代 /usr/lib ##

command[check_users]=/usr/lib/nagios/plugins/check_users -w 5 -c 10
command[check_load]=/usr/lib/nagios/plugins/check_load -w 15,10,5 -c 30,25,20
command[check_hda1]=/usr/lib/nagios/plugins/check_disk -w 20% -c 10% -p /dev/hda1
command[check_zombie_procs]=/usr/lib/nagios/plugins/check_procs -w 5 -c 10 -s Z
command[check_total_procs]=/usr/lib/nagios/plugins/check_procs -w 150 -c 200
</code></pre><p>现在配置文件已经准备好了，NRPE 服务已经可以启动了。</p><h4 id="第三步-初始化-nrpe-服务" tabindex="-1">第三步：初始化 NRPE 服务 <a class="header-anchor" href="#第三步-初始化-nrpe-服务" aria-label="Permalink to “第三步：初始化 NRPE 服务”">​</a></h4><p>对于基于 RedHat 的系统，NRPE 服务需要被添加为启动服务。</p><p><strong>对于 Debian、Ubuntu、Linux Mint：</strong></p><pre><code># service nagios-nrpe-server restart
</code></pre><p><strong>对于 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># service nrpe restart
# chkconfig nrpe on
</code></pre><h4 id="第四步-验证-nrpe-服务状态" tabindex="-1">第四步：验证 NRPE 服务状态 <a class="header-anchor" href="#第四步-验证-nrpe-服务状态" aria-label="Permalink to “第四步：验证 NRPE 服务状态”">​</a></h4><p>NRPE 守护进程的状态信息可以在系统日志中找到。对于基于 Debian 的系统，日志文件在 /var/log/syslog，而基于 RedHat 的系统的日志文件则是 /var/log/messages。下面提供一段样例日志以供参考：</p><pre><code>nrpe[19723]: Starting up daemon
nrpe[19723]: Listening for connections on port 5666
nrpe[19723]: Allowing connections from: 127.0.0.1,X.X.X.X
</code></pre><p>如果使用了防火墙，被 NRPE 守护进程使用的 TCP 端口 5666 应该被开启。</p><pre><code># netstat -tpln | grep 5666
</code></pre><hr><pre><code>tcp    0    0    0.0.0.0:5666      0.0.0.0:*      LISTEN    19885/nrpe
</code></pre><h3 id="为-nrpe-配置-nagios-监控服务器" tabindex="-1">为 NRPE 配置 Nagios 监控服务器 <a class="header-anchor" href="#为-nrpe-配置-nagios-监控服务器" aria-label="Permalink to “为 NRPE 配置 Nagios 监控服务器”">​</a></h3><p>为 NRPE 配置已有的 Nagios 监控服务器的第一步是在服务器上安装 NRPE 插件。</p><h4 id="第一步-安装-nrpe-插件" tabindex="-1">第一步：安装 NRPE 插件 <a class="header-anchor" href="#第一步-安装-nrpe-插件" aria-label="Permalink to “第一步：安装 NRPE 插件”">​</a></h4><p>当 Nagios 服务器运行在基于 Debian 的系统（Debian、Ubuntu 或者 Linux Mint）上时，需要的软件包可以通过 apt-get 安装。</p><pre><code># apt-get install nagios-nrpe-plugin
</code></pre><p>插件安装完成后，对随插件安装的 check_nrpe 命令稍作修改。</p><pre><code># vim /etc/nagios-plugins/config/check_nrpe.cfg
</code></pre><hr><pre><code>## 默认命令会被覆盖 ##
define command{
        command_name    check_nrpe
        command_line    /usr/lib/nagios/plugins/check_nrpe -H &#39;$HOSTADDRESS$&#39; -c &#39;$ARG1$&#39;
}
</code></pre>`,32)),o("p",null,[e[9]||(e[9]=n("如果 Nagios 服务器运行在基于 RedHat 的系统（CentOS、Fedora 或者 RHEL）上，你可以通过 yum 安装 NRPE 插件。对于 CentOS，",-1)),i(r,{href:"http://xmodulo.com/2013/01/how-to-set-up-rpmforge-repoforge-repository-on-centos.html"},{default:a(()=>[...e[8]||(e[8]=[n("添加 Repoforge 仓库",-1)])]),_:1}),e[10]||(e[10]=n(" 是必要的。",-1))]),e[32]||(e[32]=s(`<pre><code># yum install nagios-plugins-nrpe
</code></pre><p>现在 NRPE 插件已经安装完成，继续下面的步骤以配置一台 Nagios 服务器。</p><h4 id="第二步-为-nrpe-插件定义-nagios-命令" tabindex="-1">第二步：为 NRPE 插件定义 Nagios 命令 <a class="header-anchor" href="#第二步-为-nrpe-插件定义-nagios-命令" aria-label="Permalink to “第二步：为 NRPE 插件定义 Nagios 命令”">​</a></h4><p>我们需要首先在 Nagios 中定义一个命令来使用 NRPE。</p><pre><code># vim /etc/nagios/objects/commands.cfg
</code></pre><hr><pre><code>## 注意：对于 CentOS 64 位用户，请使用 /usr/lib64 替代 /usr/lib ##
define command{
        command_name    check_nrpe
        command_line    /usr/lib/nagios/plugins/check_nrpe -H &#39;$HOSTADDRESS$&#39; -c &#39;$ARG1$&#39;
}
</code></pre><h4 id="第三步-添加主机与命令定义" tabindex="-1">第三步：添加主机与命令定义 <a class="header-anchor" href="#第三步-添加主机与命令定义" aria-label="Permalink to “第三步：添加主机与命令定义”">​</a></h4><p>接下来定义远程主机以及我们将要在它们上面运行的命令。</p><p>下面的例子为一台远程主机定义了一个可以在上面执行的命令。一般来说，你的配置需要按照你的需求来改变。配置文件的路径在基于 Debian 和基于 RedHat 的系统上略有不同，不过文件的内容是完全一样的。</p><p><strong>对于 Debian、Ubuntu 或者 Linux Mint：</strong></p><pre><code># vim /etc/nagios3/conf.d/nrpe.cfg
</code></pre><p><strong>对于 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># vim /etc/nagios/objects/nrpe.cfg
</code></pre><hr><pre><code>define host{
        use                     linux-server
        host_name               server-1
        alias                   server-1
        address                 X.X.X.X-IPv4_address_of_remote_host
}

define service {
        host_name                       server-1
        service_description             Check Load
        check_command                   check_nrpe!check_load
        check_interval                  1
        use                             generic-service
}
</code></pre><h4 id="第四步-重启-nagios-服务" tabindex="-1">第四步：重启 Nagios 服务 <a class="header-anchor" href="#第四步-重启-nagios-服务" aria-label="Permalink to “第四步：重启 Nagios 服务”">​</a></h4><p>在重启 Nagios 之前，可以通过测试来验证配置。</p><p><strong>对于 Ubuntu、Debian 或者 Linux Mint：</strong></p><pre><code># nagios3 -v /etc/nagios3/nagios.cfg
</code></pre><p><strong>对于 CentOS、Fedora 或者 RHEL：</strong></p><pre><code># nagios -v /etc/nagios/nagios.cfg
</code></pre><p>如果一切正常，我们就可以重启 Nagios 服务了。</p><pre><code># service nagios restart
</code></pre><p><img src="https://farm8.staticflickr.com/7024/13330387845_0bde8b6db5_z.jpg" alt=""></p><h3 id="为-nrpe-配置自定义命令" tabindex="-1">为 NRPE 配置自定义命令 <a class="header-anchor" href="#为-nrpe-配置自定义命令" aria-label="Permalink to “为 NRPE 配置自定义命令”">​</a></h3><h4 id="远程服务器上安装" tabindex="-1">远程服务器上安装 <a class="header-anchor" href="#远程服务器上安装" aria-label="Permalink to “远程服务器上安装”">​</a></h4><p>下面列出了一些可以用于 NRPE 的自定义命令。这些命令在远程服务器的 /etc/nagios/nrpe.cfg 文件中定义。</p><pre><code>## 当 1、5、15 分钟的平均负载分别超过 1、2、1 时进入警告状态
## 当 1、5、15 分钟的平均负载分别超过 3、5、3 时进入严重警告状态
command[check_load]=/usr/lib/nagios/plugins/check_load -w 1,2,1 -c 3,5,3

## 对于 /home 目录的可用空间设置了警告级别为 25%，以及严重警告级别为 10%。
## 可以定制为监控任何分区（比如 /dev/sdb1、/、/var、/home）
command[check_disk]=/usr/lib/nagios/plugins/check_disk -w 25% -c 10% -p /home

## 当 process_ABC 的实例数量超过 10 时警告，超过 20 时严重警告 ##
command[check_process_ABC]=/usr/lib/nagios/plugins/check_procs -w 1:10 -c 1:20 -C process_ABC

## 当 process_ABC 的实例数量跌到 1 以下时严重警告 ##
command[check_process_XYZ]=/usr/lib/nagios/plugins/check_procs -w 1: -c 1: -C process_XYZ
</code></pre><h4 id="nagios-监控服务器上安装" tabindex="-1">Nagios 监控服务器上安装 <a class="header-anchor" href="#nagios-监控服务器上安装" aria-label="Permalink to “Nagios 监控服务器上安装”">​</a></h4><p>我们通过如下命令来修改 Nagios 监控服务器里的服务定义来应用上面定义的自定义命令。服务定义可以写在所有服务被定义的地方（比如 /etc/nagios/objects/nrpe.cfg 或 /etc/nagios3/conf.d/nrpe.cfg）</p><pre><code>## 示例 1：检查进程 XYZ ##
define service {
        host_name                       server-1
        service_description             Check Process XYZ
        check_command                   check_nrpe!check_process_XYZ
        check_interval                  1
        use                             generic-service
}

## 示例 2：检查磁盘状态 ##
define service {
        host_name                       server-1
        service_description             Check Process XYZ
        check_command                   check_nrpe!check_disk
        check_interval                  1
        use                             generic-service
}
</code></pre><p>总而言之，NRPE 是 Nagios 的一个强大的扩展，它提供了高度可定制的远程服务器监控方案。使用 NRPE，我们可以监控系统的负载、运行的进程、已登录的用户、磁盘状态，以及其它参数。</p><p>希望这些可以帮到你。</p><hr>`,35)),o("p",null,[e[12]||(e[12]=n("via: ",-1)),i(r,{href:"http://xmodulo.com/2014/03/nagios-remote-plugin-executor-nrpe-linux.html"},{default:a(()=>[...e[11]||(e[11]=[n("http://xmodulo.com/2014/03/nagios-remote-plugin-executor-nrpe-linux.html",-1)])]),_:1})]),o("p",null,[e[16]||(e[16]=n("作者：",-1)),i(r,{href:"http://xmodulo.com/author/sarmed"},{default:a(()=>[...e[13]||(e[13]=[n("Sarmed Rahman",-1)])]),_:1}),e[17]||(e[17]=n(" 译者：",-1)),i(r,{href:"https://github.com/felixonmars"},{default:a(()=>[...e[14]||(e[14]=[n("felixonmars",-1)])]),_:1}),e[18]||(e[18]=n(" 校对：",-1)),i(r,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...e[15]||(e[15]=[n("Caroline",-1)])]),_:1})]),o("p",null,[e[21]||(e[21]=n("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[19]||(e[19]=[n("LCTT",-1)])]),_:1}),e[22]||(e[22]=n(" 原创翻译，",-1)),i(r,{href:"http://linux.cn/"},{default:a(()=>[...e[20]||(e[20]=[n("Linux中国",-1)])]),_:1}),e[23]||(e[23]=n(" 荣誉推出",-1))])])}const x=t(c,[["render",g]]);export{E as __pageData,x as default};
