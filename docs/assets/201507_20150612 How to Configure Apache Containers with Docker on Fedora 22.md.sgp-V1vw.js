import{_ as d,a0 as c,w as l,s as i,ao as n,I as a,x as o,a1 as p,A as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const D=JSON.parse('{"title":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT x X-CMD","titleTemplate":false,"description":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在Fedora 22上面配置Apache的Docker容器 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150612 How to Configure Apache Containers with Docker on Fedora 22","title":"如何在Fedora 22上面配置Apache的Docker容器","tag":"201507","desc":""},"relativePath":"201507/20150612 How to Configure Apache Containers with Docker on Fedora 22.md","filePath":"[post].md"}'),s={name:"201507/20150612 How to Configure Apache Containers with Docker on Fedora 22.md"};function h(k,e,u,g,m,f){const r=c("Link");return l(),i("div",null,[e[22]||(e[22]=n(`<h1 id="如何在fedora-22上面配置apache的docker容器" tabindex="-1">如何在Fedora 22上面配置Apache的Docker容器 <a class="header-anchor" href="#如何在fedora-22上面配置apache的docker容器" aria-label="Permalink to “如何在Fedora 22上面配置Apache的Docker容器”">​</a></h1><p>在这篇文章中，我们将会学习关于Docker的一些知识，如何使用Docker部署Apache httpd服务，并且共享到Docker Hub上面去。首先，我们学习怎样拉取和使用Docker Hub里面的镜像，然后在一个Fedora 22的镜像上交互式地安装Apache，之后我们将会学习如何用一个Dockerfile文件来以一种更快，更优雅的方式制作一个镜像。最后，我们将我们创建的镜像发布到Docker Hub上，这样以后任何人都可以下载并使用它。</p><h3 id="安装并初体验docker" tabindex="-1">安装并初体验Docker <a class="header-anchor" href="#安装并初体验docker" aria-label="Permalink to “安装并初体验Docker”">​</a></h3><p><strong>要求</strong></p><p>运行Docker，你至少需要满足这些：</p><ul><li>你需要一个64位的内核，版本3.10或者更高</li><li>Iptables 1.4 - Docker会用它来做网络配置，如网络地址转换（NAT）</li><li>Git 1.7 - Docker会使用Git来与仓库交流，如Docker Hub</li><li>ps - 在大多数环境中这个工具都存在，在procps包里有提供</li><li>root - 尽管一般用户可以通过TCP或者其他方式来运行Docker，但是为了简化，我们会假定你就是root</li></ul><h4 id="使用dnf安装docker" tabindex="-1">使用dnf安装docker <a class="header-anchor" href="#使用dnf安装docker" aria-label="Permalink to “使用dnf安装docker”">​</a></h4><p>以下的命令会安装Docker</p><pre><code>dnf update &amp;&amp; dnf install docker
</code></pre><p><strong>注意</strong>：在Fedora 22里，你仍然可以使用Yum命令，但是它被DNF取代了，而且在纯净安装时不可用了。</p><h4 id="检查安装" tabindex="-1">检查安装 <a class="header-anchor" href="#检查安装" aria-label="Permalink to “检查安装”">​</a></h4><p>我们将要使用的第一个命令是docker info，这会输出很多信息给你：</p><pre><code>docker info
</code></pre><p>也可以试着用<strong>docker version</strong>：</p><pre><code>docker version
</code></pre><h4 id="以守护进程方式启动dcoker" tabindex="-1">以守护进程方式启动Dcoker#### <a class="header-anchor" href="#以守护进程方式启动dcoker" aria-label="Permalink to “以守护进程方式启动Dcoker####”">​</a></h4><p>你应该启动一个docker实例，然后她会处理我们的请求。</p><pre><code>docker -d
</code></pre><p>现在我们设置 docker 随系统启动，以便我们不需要每次重启都需要运行上述命令。</p><pre><code>chkconfig docker on
</code></pre><p>让我们用Busybox来打印hello world：</p><pre><code>dockr run -t busybox /bin/echo &quot;hello world&quot;
</code></pre><p>这个命令里，我们告诉Docker在Busybox镜像的一个实例/容器里执行 /bin/echo &quot;hello world&quot;。Busybox是一个小型的POSIX环境，将许多小工具都结合到了一个单独的可执行程序里。</p><p>如果Docker不能在你的系统里找到本地的Busybox镜像，她就会自动从Docker Hub里拉取镜像，正如你可以看下如下的快照：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-hello-world-busybox-complete.png" alt="Hello world with Busybox"></p><p><em>Hello world with Busybox</em></p><p>再次尝试相同的命令，这次由于Docker已经有了本地的Busybox镜像，你将会看到的全部就是echo的输出：</p><pre><code>docker run -t busybox /bin/echo &quot;hello world&quot;
</code></pre><p>也可以尝试以下的命令进入到容器环境里去：</p><pre><code>docker run -it busybox /bin/sh
</code></pre><p>使用<strong>exit</strong>命令可以离开容器并停止它</p><h3 id="交互式地docker化apache" tabindex="-1">交互式地Docker化Apache <a class="header-anchor" href="#交互式地docker化apache" aria-label="Permalink to “交互式地Docker化Apache”">​</a></h3><p>拉取/下载 Fedora 镜像：</p><pre><code>docker pull fedora:22
</code></pre><p>启动一个容器在后台运行：</p><pre><code>docker run -d -t fedora:22 /bin/bash
</code></pre><p>列出正在运行地容器及其名字标识，如下</p><pre><code>docker ps
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-ps-with-docker-attach-highlight.png" alt="listing with docker ps and attaching with docker attach"></p><p><em>使用docker ps列出，并使用docker attach进入一个容器里</em></p><p>angry_noble是docker分配给我们容器的名字，所以我们来连接上去：</p><pre><code>docker attach angry_noble
</code></pre><p>注意：每次你启动一个容器，就会被给与一个新的名字，如果你的容器需要一个固定的名字，你应该在 docker run 命令里使用 -name 参数。</p><h4 id="安装apache" tabindex="-1">安装Apache <a class="header-anchor" href="#安装apache" aria-label="Permalink to “安装Apache”">​</a></h4><p>下面的命令会更新DNF的数据库，下载安装Apache（httpd包）并清理dnf缓存使镜像尽量小</p><pre><code>dnf -y update &amp;&amp; dnf -y install httpd &amp;&amp; dnf -y clean all
</code></pre><p><strong>配置Apache</strong></p><p>我们需要修改httpd.conf的唯一地方就是ServerName，这会使Apache停止抱怨</p><pre><code>sed -i.orig &#39;s/#ServerName/ServerName/&#39; /etc/httpd/conf/httpd.conf
</code></pre><p><strong>设定环境</strong></p><p>为了使Apache运行为独立模式，你必须以环境变量的格式提供一些信息，并且你也需要创建这些变量里的目录，所以我们将会用一个小的shell脚本干这个工作，当然也会启动Apache</p><pre><code>vi /etc/httpd/run_apache_foreground
</code></pre><hr><pre><code>#!/bin/bash

#设置环境变量
APACHE_LOG_DI=R&quot;/var/log/httpd&quot;
APACHE_LOCK_DIR=&quot;/var/lock/httpd&quot;
APACHE_RUN_USER=&quot;apache&quot;
APACHE_RUN_GROUP=&quot;apache&quot;
APACHE_PID_FILE=&quot;/var/run/httpd/httpd.pid&quot;
APACHE_RUN_DIR=&quot;/var/run/httpd&quot;

#如果需要的话，创建目录
if ! [ -d /var/run/httpd ]; then mkdir /var/run/httpd;fi
if ! [ -d /var/log/httpd ]; then mkdir /var/log/httpd;fi
if ! [ -d /var/lock/httpd ]; then mkdir /var/lock/httpd;fi

#运行 Apache
httpd -D FOREGROUND
</code></pre><p><strong>另外地</strong>，你可以粘贴这个片段代码到容器shell里并运行:</p><pre><code>dnf -y install git &amp;&amp; git clone https://github.com/gaiada/run-apache-foreground.git &amp;&amp; cd run-apach* &amp;&amp; ./install &amp;&amp; dnf erase git
</code></pre>`,56)),a("p",null,[e[1]||(e[1]=o("上面的内嵌脚本会安装Git，克隆",-1)),p(r,{href:"https://github.com/gaiada/run-apache-foreground"},{default:t(()=>[...e[0]||(e[0]=[o("这个仓库",-1)])]),_:1}),e[2]||(e[2]=o("，到文件里去运行脚本，并询问你是否卸载Git。",-1))]),e[23]||(e[23]=n(`<p><strong>保存你的容器状态</strong></p><p>你的容器现在准备好运行Apache，是时候保存容器当前的状态为一个镜像，以备你需要的时候使用。</p><p>为了离开容器环境，你必须顺序按下 <strong>Ctrl+q</strong> 和 <strong>Ctrl+p</strong>，如果你仅仅在shell执行exit，你同时也会停止容器，失去目前为止你做过的所有工作。</p><p>回到Docker主机，使用 <strong>docker commit</strong> 及容器名和你想要的仓库名字/标签：</p><pre><code>docker commit angry_noble gaiada/apache
</code></pre><p>现在，你保存了容器的状态到一个镜像里，可以使用 <strong>docker stop</strong> 停止容器了：</p><pre><code>docker stop angry_noble
</code></pre><p><strong>运行并测试你的镜像</strong></p><p>最后，从你的新镜像启动一个容器，并且重定向80端口到该容器：</p><pre><code>docker run -p 80:80 -d -t gaiada/apache /etc/httpd/run_apache_foreground
</code></pre>`,10)),a("p",null,[e[4]||(e[4]=o("到目前，你正在你的容器里运行Apache，打开你的浏览器访问该服务，在",-1)),p(r,{href:"http://localhost/"},{default:t(()=>[...e[3]||(e[3]=[o("http://localhost",-1)])]),_:1}),e[5]||(e[5]=o("，你将会看到如下Apache默认的页面",-1))]),e[24]||(e[24]=n(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-apache-running.png" alt="Apache default page running from Docker container"></p><p><em>在容器里运行的Apache默认页面</em></p><h3 id="使用dockerfile-docker化apache" tabindex="-1">使用Dockerfile Docker化Apache <a class="header-anchor" href="#使用dockerfile-docker化apache" aria-label="Permalink to “使用Dockerfile Docker化Apache”">​</a></h3><p>现在，我们将要去创建一个新的Apache镜像，这次所有步骤会写在一个Dockerfile文件里，文件将会被用于生成该镜像。</p><p>首先，新建一个目录，在里面放Dockerfile文件，并进入该目录：</p><pre><code>mkdir apachedf; cd apachedf
</code></pre><p>然后创建一个名为Dockerfile的文件，添加以下内容：</p><pre><code>FROM fedora:22

MAINTAINER Carlos Alberto
LABEL version=&quot;0.1&quot;

RUN dnf -y update &amp;&amp; dnf -y install httpd &amp;&amp; dnf -y clean all

RUN [ -d /var/log/httpd ] || mkdir /var/log/httpd
RUN [ -d /var/run/httpd ] || mkdir /var/run/httpd
RUN [ -d /var/lock/httpd ] || mkdir /var/lock/httpd

RUN sed -i.orig &#39;s/#ServerName/ServerName/&#39; /etc/httpd/conf/httpd.conf

ENV APACHE_RUN_USER apache
ENV APACHE_RUN_GROUP apache
ENV APACHE_LOG_DIR /var/log/httpd
ENV APACHE_LOCK_DIR /var/lock/httpd
ENV APACHE_RUN_DIR /var/run/httpd
ENV APACHE_PID_FILE /var/run/httpd/httpd.pid

EXPOSE 80

CMD [&quot;/usr/sbin/httpd&quot;, &quot;-D&quot;, &quot;FOREGROUND&quot;]
</code></pre><p>我们一起来看看Dockerfile里面有什么：</p><ul><li><strong>FROM</strong> - 这告诉docker，我们将要使用Fedora 22作为基础镜像</li><li><strong>MAINTAINER</strong> 和 <strong>LABLE</strong> - 这些命令对镜像没有直接作用，属于标记信息</li><li><strong>RUN</strong> - 自动完成我们之前交互式做的工作，安装Apache，新建目录并编辑httpd.conf</li><li><strong>ENV</strong> - 设置环境变量，现在我们再不需要run_apache_foreground脚本</li><li><strong>EXPOSE</strong> - 暴露80端口给外网</li><li><strong>CMD</strong> - 设置默认的命令启动httpd服务，这样我们就不需要每次起一个新的容器都重复这个工作</li></ul><p><strong>建立该镜像</strong></p><p>现在，我们将要建立这个镜像，并为其添加tag gaiada/apachedf</p><pre><code>docker build -t gaiada/apachedf:0.1 .
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-build-complete.png" alt="docker build complete"></p><p><em>docker完成创建</em></p><p>使用 <strong>docker images</strong> 列出本地镜像，查看是否存在你新建的镜像：</p><pre><code>docker images
</code></pre><p>然后运行新的镜像:</p><pre><code>docker run -t -p 80:80 gaiada/apachedf
</code></pre><p>这就是Dockerfile的工作，使用这项功能会使得事情更加容易，快速并且可重复生成。</p><h3 id="发布你的镜像" tabindex="-1">发布你的镜像 <a class="header-anchor" href="#发布你的镜像" aria-label="Permalink to “发布你的镜像”">​</a></h3><p>直到现在，你仅仅是从Docker Hub拉取了镜像，但是你也可以推送你的镜像，以后需要也可以再次拉取他们。实际上，其他人也可以下载你的镜像，在他们的系统中使用它而不需要改变任何东西。现在我们将要学习如何使我们的镜像对世界上的其他人可用。</p><p><strong>创建帐号</strong></p>`,23)),a("p",null,[e[7]||(e[7]=o("为了能够在Docker Hub上推送你的镜像，你需要创建一个帐号。访问 ",-1)),p(r,{href:"https://hub.docker.com/account/signup/"},{default:t(()=>[...e[6]||(e[6]=[o("https://hub.docker.com/account/signup/",-1)])]),_:1}),e[8]||(e[8]=o("，填写下面的表格：",-1))]),e[25]||(e[25]=n(`<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-hub-signup.png" alt="Docker Hub signup page"></p><p><em>Docker Hub 注册页面</em></p><p><strong>登录</strong></p><p>输入下面的命令，接着输入你注册时提供的用户名，密码和邮箱</p><pre><code>docker login
</code></pre><p>第一次登录过后，你的帐号信息会被记录在 <strong>～/.dockercfg</strong></p><p><strong>推送</strong></p><p>推送镜像，使用 <strong>docker push [registry/]your_login/repository_name[:tag]</strong></p><pre><code>docker push docker.io/gaiada/apachedf
</code></pre><p>你可能会看见像这样的输出，在你的控制台上：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/06/docker-pushing-apachedf-complete.png" alt="Docker push Apache image complete"></p><p><em>Docker推送Apache镜像完成</em></p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>现在，你知道如何Docker化Apache，试一试包含其他一些组件，Perl，PHP，proxy，HTTPS，或者任何你需要的东西。我希望你们这些家伙喜欢她，并推送你们自己的镜像到Docker Hub。</p><hr>`,15)),a("p",null,[e[10]||(e[10]=o("via: ",-1)),p(r,{href:"http://linoxide.com/linux-how-to/configure-apache-containers-docker-fedora-22/"},{default:t(()=>[...e[9]||(e[9]=[o("http://linoxide.com/linux-how-to/configure-apache-containers-docker-fedora-22/",-1)])]),_:1})]),a("p",null,[e[14]||(e[14]=o("作者：",-1)),p(r,{href:"http://linoxide.com/author/carlosal/"},{default:t(()=>[...e[11]||(e[11]=[o("Carlos Alberto",-1)])]),_:1}),e[15]||(e[15]=o(" 译者：",-1)),p(r,{href:"https://github.com/wi-cuckoo"},{default:t(()=>[...e[12]||(e[12]=[o("wi-cuckoo",-1)])]),_:1}),e[16]||(e[16]=o(" 校对：",-1)),p(r,{href:"https://github.com/wxy"},{default:t(()=>[...e[13]||(e[13]=[o("wxy",-1)])]),_:1})]),a("p",null,[e[19]||(e[19]=o("本文由 ",-1)),p(r,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...e[17]||(e[17]=[o("LCTT",-1)])]),_:1}),e[20]||(e[20]=o(" 原创翻译，",-1)),p(r,{href:"https://linux.cn/"},{default:t(()=>[...e[18]||(e[18]=[o("Linux中国",-1)])]),_:1}),e[21]||(e[21]=o(" 荣誉推出",-1))])])}const _=d(s,[["render",h]]);export{D as __pageData,_ as default};
