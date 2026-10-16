import{_ as d,a0 as a,w as p,s as c,ao as l,I as s,x as e,a1 as r,A as n}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const w=JSON.parse('{"title":"如何在 CentOS 7 上安装 Docker | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS 7 上安装 Docker | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS 7 上安装 Docker | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS 7 上安装 Docker | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141127 How to install Docker on CentOS 7","title":"如何在 CentOS 7 上安装 Docker","tag":"201411","desc":""},"relativePath":"201411/20141127 How to install Docker on CentOS 7.md","filePath":"[post].md"}'),i={name:"201411/20141127 How to install Docker on CentOS 7.md"};function k(u,o,m,C,f,T){const t=a("Link");return p(),c("div",null,[o[21]||(o[21]=l(`<h1 id="如何在-centos-7-上安装-docker" tabindex="-1">如何在 CentOS 7 上安装 Docker <a class="header-anchor" href="#如何在-centos-7-上安装-docker" aria-label="Permalink to “如何在 CentOS 7 上安装 Docker”">​</a></h1><p>Docker 是一个开源工具，它可以让创建和管理 <strong>Linux 容器</strong>变得简单。容器就像是轻量级的虚拟机，并且可以以毫秒级的速度来启动或停止。Docker 帮助系统管理员和程序员在容器中开发应用程序，并且可以扩展到成千上万的节点。</p><p>容器和 VM（虚拟机）的主要区别是，容器提供了<strong>基于进程的隔离</strong>，而虚拟机提供了资源的完全隔离。虚拟机可能需要一分钟来启动，而容器只需要一秒钟或更短。容器使用宿主操作系统的内核，而虚拟机使用独立的内核。</p><p>Docker 的局限性之一是，它只能用在 <strong>64 位</strong>的操作系统上。</p><p>在这篇文章中我们将讨论如何在 CentOS 7.x 中安装 docker。</p><h3 id="centos-7-中-docker-的安装" tabindex="-1">CentOS 7 中 Docker 的安装 <a class="header-anchor" href="#centos-7-中-docker-的安装" aria-label="Permalink to “CentOS 7 中 Docker 的安装”">​</a></h3><p>Docker 软件包已经包括在默认的 CentOS-Extras 软件源里。因此想要安装 docker，只需要运行下面的 yum 命令：</p><pre><code>[root@localhost ~]# yum install docker
</code></pre><h3 id="启动-docker-服务" tabindex="-1">启动 Docker 服务 <a class="header-anchor" href="#启动-docker-服务" aria-label="Permalink to “启动 Docker 服务”">​</a></h3><p>安装完成后，使用下面的命令来启动 docker 服务，并将其设置为开机启动：</p><pre><code>[root@localhost ~]# service docker start
[root@localhost ~]# chkconfig docker on
</code></pre><p>（LCTT 译注：此处采用了旧式的 sysv 语法，如采用CentOS 7中支持的新式 systemd 语法，如下：</p><pre><code>[root@localhost ~]# systemctl  start docker.service
[root@localhost ~]# systemctl  enable docker.service
</code></pre><p>）</p>`,14)),s("p",null,[o[2]||(o[2]=s("strong",null,"下载官方的 CentOS 镜像到本地",-1)),o[3]||(o[3]=e(" （LCTT 译注：由于 Docker 被",-1)),o[4]||(o[4]=s("strong",null,"墙",-1)),o[5]||(o[5]=e(" :-< ，所以请使用 ",-1)),r(t,{href:"http://docker.cn"},{default:n(()=>[...o[0]||(o[0]=[e("http://docker.cn",-1)])]),_:1}),o[6]||(o[6]=e("  的",-1)),r(t,{href:"https://docker.cn/h/how-to-use-docker-official-repositories"},{default:n(()=>[...o[1]||(o[1]=[e("镜像",-1)])]),_:1}),o[7]||(o[7]=e("，感谢 @马全一 的镜像。 ）",-1))]),o[22]||(o[22]=l(`<pre><code>[root@localhost ~]# docker pull centos
Pulling repository centos
192178b11d36: Download complete 
70441cac1ed5: Download complete 
ae0c2d0bdc10: Download complete 
511136ea3c5a: Download complete 
5b12ef8fd570: Download complete
</code></pre><p><strong>确认 CentOS 镜像已经被获取：</strong></p><pre><code>[root@localhost ~]# docker images centos
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
centos              centos5             192178b11d36        2 weeks ago         466.9 MB
centos              centos6             70441cac1ed5        2 weeks ago         215.8 MB
centos              centos7             ae0c2d0bdc10        2 weeks ago         224 MB
centos              latest              ae0c2d0bdc10        2 weeks ago         224 MB
</code></pre><p><strong>运行一个 Docker 容器：</strong></p><pre><code>[root@localhost ~]# docker run -i -t centos /bin/bash
[root@dbf66395436d /]#
</code></pre><p>我们可以看到，CentOS 容器已经被启动，并且我们得到了 bash 提示符。在 docker 命令中我们使用了 “-i 捕获标准输入输出”和 “-t 分配一个终端或控制台”选项。若要断开与容器的连接，输入 exit。</p><pre><code>[root@cd05639b3f5c /]# cat /etc/redhat-release 
CentOS Linux release 7.0.1406 (Core) 
[root@cd05639b3f5c /]# exit
exit
[root@localhost ~]#
</code></pre><p>我们还可以搜索基于 Fedora 和 Ubuntu 操作系统的容器。</p><pre><code>[root@localhost ~]# docker search ubuntu
[root@localhost ~]# docker search fedora
</code></pre><p><strong>显示当前正在运行容器的列表</strong></p><p><img src="http://www.linuxtechi.com/wp-content/uploads/2014/11/docker-ps.png" alt=""></p><hr>`,12)),s("p",null,[o[9]||(o[9]=e("via: ",-1)),r(t,{href:"http://www.linuxtechi.com/install-docker-on-centos-7/"},{default:n(()=>[...o[8]||(o[8]=[e("http://www.linuxtechi.com/install-docker-on-centos-7/",-1)])]),_:1})]),s("p",null,[o[13]||(o[13]=e("作者：",-1)),r(t,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:n(()=>[...o[10]||(o[10]=[e("Pradeep Kumar",-1)])]),_:1}),o[14]||(o[14]=e(" 译者：",-1)),r(t,{href:"https://github.com/felixonmars"},{default:n(()=>[...o[11]||(o[11]=[e("felixonmars",-1)])]),_:1}),o[15]||(o[15]=e(" 校对：",-1)),r(t,{href:"https://github.com/wxy"},{default:n(()=>[...o[12]||(o[12]=[e("wxy",-1)])]),_:1})]),s("p",null,[o[18]||(o[18]=e("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...o[16]||(o[16]=[e("LCTT",-1)])]),_:1}),o[19]||(o[19]=e(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:n(()=>[...o[17]||(o[17]=[e("Linux中国",-1)])]),_:1}),o[20]||(o[20]=e(" 荣誉推出",-1))])])}const S=d(i,[["render",k]]);export{w as __pageData,S as default};
