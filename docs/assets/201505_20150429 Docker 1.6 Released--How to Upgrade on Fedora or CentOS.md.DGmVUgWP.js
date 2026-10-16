import{_ as a,a0 as p,w as i,s as l,ao as s,I as r,x as o,a1 as n,A as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const S=JSON.parse('{"title":"如何在Fedora / CentOS上面升级Docker 1.6 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Fedora / CentOS上面升级Docker 1.6 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Fedora / CentOS上面升级Docker 1.6 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Fedora / CentOS上面升级Docker 1.6 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150429 Docker 1.6 Released--How to Upgrade on Fedora or CentOS","title":"如何在Fedora / CentOS上面升级Docker 1.6","tag":"201505","desc":""},"relativePath":"201505/20150429 Docker 1.6 Released--How to Upgrade on Fedora or CentOS.md","filePath":"[post].md"}'),c={name:"201505/20150429 Docker 1.6 Released--How to Upgrade on Fedora or CentOS.md"};function k(u,e,m,g,D,T){const t=p("Link");return i(),l("div",null,[e[21]||(e[21]=s(`<h1 id="如何在fedora-centos上面升级docker-1-6" tabindex="-1">如何在Fedora / CentOS上面升级Docker 1.6 <a class="header-anchor" href="#如何在fedora-centos上面升级docker-1-6" aria-label="Permalink to “如何在Fedora / CentOS上面升级Docker 1.6”">​</a></h1><p>Docker，一个流行的将软件打包的开源容器平台，已经有了新的1.6版，增加了许多新的特性。该版本主要更新了Docker Registry、Engine、 Swarm、 Compose 和 Machine等方面。这次发布旨在提升性能、改善开发者和系统管理员的体验。让我们来快速看看有哪些新特性吧。</p><p><strong>Docker Registry (2.0)</strong>是一项推送Docker镜像用于存储和分享的服务，因为面临加载下的体验问题而经历了架构的改变。它仍然向后兼容。Docker Registry的编写语言现在从Python改为Google的Go语言了，以提升性能。与Docker Engine 1.6结合后，拉取镜像的能力更快了。早先的镜像是队列式输送的，而现在是并行的啦。</p><p><strong>Docker Engine (1.6)</strong>相比之前的版本有很大的提高。目前支持容器与镜像的标签。通过标签，你可以附加用户自定义的元数据到镜像和容器上，而镜像和容器反过来可以被其他工具使用。标签对正在运行的应用是不可见的，可以用来加速搜索容器和镜像。</p><p>Windows版本的Docker客户端可以连接到远程的运行在linux上的Docker Engine。</p><p>Docker目前支持日志驱动API，这允许我们发送容器日志给系统如Syslog，或者第三方。这将会使得系统管理员受益。</p><p><strong>Swarm (0.2)</strong>是一个Docker集群工具，可以将一个Docker主机池转换为一个虚拟主机。在新特性里，容器甚至被放在了可用的节点上。通过添加更多的Docker命令，努力支持完整的Docker API。将来，使用第三方驱动来集群会成为可能。</p><p><strong>Compose (1.2)</strong> 是一个Docker里定义和运行复杂应用的工具, 也得到了升级。在新版本里，可以创建多个子文件，而不是用一个没有结构的文件描述一个多容器应用。</p><p>通过<strong>Machine (0.2)</strong>，我们可以很容易地在本地计算机、云和数据中心上搭建Docker主机。新的发布版本为开发者提供了一个相对干净地驱动界面来编写驱动。Machine集中控制供给，而不是每个独立的驱动。增加了新的命令，可以用来生成主机的TLS证书，以提高安全性。</p><h3 id="在fedora-centos-上的升级指导" tabindex="-1">在Fedora / CentOS 上的升级指导 <a class="header-anchor" href="#在fedora-centos-上的升级指导" aria-label="Permalink to “在Fedora / CentOS 上的升级指导”">​</a></h3><p>在这一部分里，我们将会学习如何在Fedora和CentOS上升级已有的docker到最新版本。请注意，目前的Docker仅运行在64位的架构上，Fedora和CentOS都源于RedHat，命令的使用是差不多相同的，除了在Fedora20和CentOS6.5里Docker包被叫做“docker-io”。</p><p>如果你系统之前没有安装Docker，使用下面命令安装：</p><pre><code>&quot;yum install docker-io&quot;  –  on Fedora20 / CentOS6.5

&quot;yum install docker&quot;  - on Fedora21 / CentOS7
</code></pre><p>在升级之前，备份一下docker镜像和容器卷是个不错的主意。</p>`,14)),r("p",null,[e[2]||(e[2]=o("参考",-1)),n(t,{href:"http://docs.docker.com/reference/commandline/cli/#export"},{default:d(()=>[...e[0]||(e[0]=[o("“将文件系统打成 tar 包”",-1)])]),_:1}),e[3]||(e[3]=o("与",-1)),n(t,{href:"http://docs.docker.com/userguide/dockervolumes/#backup-restore-or-migrate-data-volumes"},{default:d(()=>[...e[1]||(e[1]=[o("“卷备份、恢复或迁移”",-1)])]),_:1}),e[4]||(e[4]=o("，获取更多信息。",-1))]),e[22]||(e[22]=s(`<p>目前，测试系统安装了Docker1.5。样例输出显示是来自一个Fedora20的系统。</p><p>验证当前系统安装的Docker版本</p><pre><code>[root@TestNode1 ~]#sudo docker -v

Docker version 1.5.0, build a8a31ef/1.5.0
</code></pre><p>如果Docker正在运行，先停掉。</p><pre><code>[root@TestNode1 ~]# sudo systemctl stop docker
</code></pre><p>使用yum update升级到最新版，但是写这篇文章的时候，仓库并不是最新版本(1.6)，因此你需要使用二进制的升级方法。</p><pre><code>[root@TestNode1 ~]#sudo yum -y update docker-io

No packages marked for update

[root@TestNode1 ~]#sudo wget https://get.docker.com/builds/Linux/x86_64/docker-latest -O /usr/bin/docker

--2015-04-19 13:40:48-- https://get.docker.com/builds/Linux/x86_64/docker-latest

Resolving get.docker.com (get.docker.com)... 162.242.195.82

Connecting to get.docker.com (get.docker.com)|162.242.195.82|:443... connected.

HTTP request sent, awaiting response... 200 OK

Length: 15443598 (15M) [binary/octet-stream]

Saving to: /usr/bin/docker

100%[======================================&gt;] 15,443,598 8.72MB/s in 1.7s

2015-04-19 13:40:50 (8.72 MB/s) - /usr/bin/docker saved
</code></pre><p>检查更新后的版本</p><pre><code>[root@TestNode1 ~]#sudo docker -v

Docker version 1.6.0, build 4749651
</code></pre><p>重启docker服务</p><pre><code>[root@TestNode1 ~]# sudo systemctl start docker
</code></pre><p>确认Docker在运行</p><pre><code>[root@TestNode1 ~]# docker images

REPOSITORY TAG IMAGE ID CREATED VIRTUAL SIZE

fedora latest 834629358fe2 3 months ago 241.3 MB

[root@TestNode1 ~]# docker run fedora /bin/echo Hello World

Hello World
</code></pre><p>CentOS安装时需要<strong>注意</strong>，在CentOS上安装完Docker后，当你试图启动Docker服务的时候，你可能会得到错误的信息，如下所示：</p><pre><code>docker.service - Docker Application Container Engine

Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled)

Active: failed (Result: exit-code) since Mon 2015-04-20 03:24:24 EDT; 6h ago

Docs: http://docs.docker.com

Process: 21069 ExecStart=/usr/bin/docker -d $OPTIONS $DOCKER_STORAGE_OPTIONS $DOCKER_NETWORK_OPTIONS $ADD_REGISTRY $BLOCK_REGISTRY $INSECURE_REGISTRY (code=exited, status=127)

Main PID: 21069 (code=exited, status=127)

Apr 20 03:24:24 centos7 systemd[1]: Starting Docker Application Container E.....

Apr 20 03:24:24 centos7 docker[21069]: time=&quot;2015-04-20T03:24:24-04:00&quot; lev...)&quot;

Apr 20 03:24:24 centos7 docker[21069]: time=&quot;2015-04-20T03:24:24-04:00&quot; lev...)&quot;

Apr 20 03:24:24 centos7 docker[21069]: /usr/bin/docker: relocation error: /...ce

Apr 20 03:24:24 centos7 systemd[1]: docker.service: main process exited, co.../a

Apr 20 03:24:24 centos7 systemd[1]: Failed to start Docker Application Cont...e.

Apr 20 03:24:24 centos7 systemd[1]: Unit docker.service entered failed state.
</code></pre>`,15)),r("p",null,[e[6]||(e[6]=o("这是一个已知的bug（",-1)),n(t,{href:"https://bugzilla.redhat.com/show_bug.cgi?id=1207839"},{default:d(()=>[...e[5]||(e[5]=[o("https://bugzilla.redhat.com/show_bug.cgi?id=1207839",-1)])]),_:1}),e[7]||(e[7]=o("），需要将设备映射升级到最新。",-1))]),e[23]||(e[23]=r("pre",null,[r("code",null,`[root@centos7 ~]# rpm -qa device-mapper

device-mapper-1.02.84-14.el7.x86_64

[root@centos7 ~]# yum update device-mapper

[root@centos7 ~]# rpm -qa device-mapper

device-mapper-1.02.93-3.el7.x86_64

[root@centos7 ~]# systemctl start docker
`)],-1)),e[24]||(e[24]=r("h3",{id:"总结",tabindex:"-1"},[o("总结 "),r("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),e[25]||(e[25]=r("p",null,"尽管docker技术出现时间不长，但很快就变得非常流行了。它使得开发者的生活变得轻松，运维团队可以快速独立地创建和部署应用。通过该公司的发布，Docker的快速更新，产品质量的提升，满足用户需求，未来对于Docker来说一片光明。",-1)),e[26]||(e[26]=r("hr",null,null,-1)),r("p",null,[e[9]||(e[9]=o("via: ",-1)),n(t,{href:"http://linoxide.com/linux-how-to/docker-1-6-features-upgrade-fedora-centos/"},{default:d(()=>[...e[8]||(e[8]=[o("http://linoxide.com/linux-how-to/docker-1-6-features-upgrade-fedora-centos/",-1)])]),_:1})]),r("p",null,[e[13]||(e[13]=o("作者：",-1)),n(t,{href:"http://linoxide.com/author/bnpoornima/"},{default:d(()=>[...e[10]||(e[10]=[o("B N Poornima",-1)])]),_:1}),e[14]||(e[14]=o(" 译者：",-1)),n(t,{href:"https://github.com/wi-cuckoo"},{default:d(()=>[...e[11]||(e[11]=[o("wi-cuckoo",-1)])]),_:1}),e[15]||(e[15]=o(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:d(()=>[...e[12]||(e[12]=[o("wxy",-1)])]),_:1})]),r("p",null,[e[18]||(e[18]=o("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:d(()=>[...e[16]||(e[16]=[o("LCTT",-1)])]),_:1}),e[19]||(e[19]=o(" 原创翻译，",-1)),n(t,{href:"http://linux.cn/"},{default:d(()=>[...e[17]||(e[17]=[o("Linux中国",-1)])]),_:1}),e[20]||(e[20]=o(" 荣誉推出",-1))]),e[27]||(e[27]=r("p",null,"[20]:",-1))])}const O=a(c,[["render",k]]);export{S as __pageData,O as default};
