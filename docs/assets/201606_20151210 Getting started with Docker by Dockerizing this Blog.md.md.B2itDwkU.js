import{_ as t,a0 as o,w as c,s as d,ao as l,I as a,x as s,a1 as p,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"通过 Docker 化一个博客网站来开启我们的 Docker 之旅 | LCTT x X-CMD","titleTemplate":false,"description":"通过 Docker 化一个博客网站来开启我们的 Docker 之旅 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"通过 Docker 化一个博客网站来开启我们的 Docker 之旅 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"通过 Docker 化一个博客网站来开启我们的 Docker 之旅 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20151210 Getting started with Docker by Dockerizing this Blog.md","title":"通过 Docker 化一个博客网站来开启我们的 Docker 之旅","tag":"201606","desc":""},"relativePath":"201606/20151210 Getting started with Docker by Dockerizing this Blog.md.md","filePath":"[post].md"}'),r={name:"201606/20151210 Getting started with Docker by Dockerizing this Blog.md.md"};function g(k,n,b,h,u,f){const e=o("Link");return c(),d("div",null,[n[59]||(n[59]=l('<h1 id="通过-docker-化一个博客网站来开启我们的-docker-之旅" tabindex="-1">通过 Docker 化一个博客网站来开启我们的 Docker 之旅 <a class="header-anchor" href="#通过-docker-化一个博客网站来开启我们的-docker-之旅" aria-label="Permalink to “通过 Docker 化一个博客网站来开启我们的 Docker 之旅”">​</a></h1><p><img src="http://bencane.com/static/img/post-bg.jpg" alt=""></p><blockquote><p>这篇文章包含 Docker 的基本概念，以及如何通过创建一个定制的 Dockerfile 来 Docker 化（Dockerize）一个应用。</p></blockquote><p>Docker 是一个过去两年来从某个 idea 中孕育而生的有趣技术，公司组织们用它在世界上每个角落来部署应用。在今天的文章中，我将讲述如何通过“Docker 化（Dockerize）”一个现有的应用，来开始我们的 Docker 之旅。这里提到的应用指的就是这个博客！</p><h2 id="什么是-docker" tabindex="-1">什么是 Docker？ <a class="header-anchor" href="#什么是-docker" aria-label="Permalink to “什么是 Docker？”">​</a></h2><p>当我们开始学习 Docker 基本概念时，让我们先去搞清楚什么是 Docker 以及它为什么这么流行。Docker 是一个操作系统容器管理工具，它通过将应用打包在操作系统容器中，来方便我们管理和部署应用。</p><h3 id="容器-vs-虚拟机" tabindex="-1">容器 vs. 虚拟机 <a class="header-anchor" href="#容器-vs-虚拟机" aria-label="Permalink to “容器 vs. 虚拟机”">​</a></h3><p>容器和虚拟机并不完全相似，它是另外一种提供<strong>操作系统虚拟化</strong>的方式。它和标准的虚拟机还是有所不同。</p><p>标准的虚拟机一般会包括一个完整的操作系统、操作系统软件包、最后还有一至两个应用。这都得益于为虚拟机提供硬件虚拟化的管理程序。这样一来，一个单一的服务器就可以将许多独立的操作系统作为虚拟客户机运行了。</p><p>容器和虚拟机很相似，它们都支持在单一的服务器上运行多个操作环境，只是，在容器中，这些环境并不是一个个完整的操作系统。容器一般只包含必要的操作系统软件包和一些应用。它们通常不会包含一个完整的操作系统或者硬件的虚拟化。这也意味着容器比传统的虚拟机开销更少。</p><p>容器和虚拟机常被误认为是两种对立的技术。虚拟机采用一个物理服务器来提供全功能的操作环境，该环境会和其余虚拟机一起共享这些物理资源。容器一般用来隔离一个单一主机上运行的应用进程，以保证隔离后的进程之间不能相互影响。事实上，容器和 <strong>BSD Jails</strong> 以及 <code>chroot</code> 进程的相似度，超过了和完整虚拟机的相似度。</p><h3 id="docker-在容器之上提供了什么" tabindex="-1">Docker 在容器之上提供了什么 <a class="header-anchor" href="#docker-在容器之上提供了什么" aria-label="Permalink to “Docker 在容器之上提供了什么”">​</a></h3>',12)),a("p",null,[n[2]||(n[2]=s("Docker 本身不是一个容器运行环境，事实上，只是一个与具体实现无关的容器技术，Docker 正在努力支持 ",-1)),p(e,{href:"https://blog.docker.com/2015/08/docker-oracle-solaris-zones/"},{default:i(()=>[...n[0]||(n[0]=[s("Solaris Zones",-1)])]),_:1}),n[3]||(n[3]=s(" 和 ",-1)),p(e,{href:"https://wiki.freebsd.org/Docker"},{default:i(()=>[...n[1]||(n[1]=[s("BSD Jails",-1)])]),_:1}),n[4]||(n[4]=s("。Docker 提供了一种管理、打包和部署容器的方式。虽然一定程度上，虚拟机多多少少拥有这些类似的功能，但虚拟机并没有完整拥有绝大多数的容器功能，即使拥有，这些功能用起来都并没有 Docker 来的方便或那么完整。",-1))]),n[60]||(n[60]=l(`<p>现在，我们应该知道 Docker 是什么了，然后，我们将从安装 Docker，并部署一个公开的预构建好的容器开始，学习 Docker 是如何工作的。</p><h2 id="从安装开始" tabindex="-1">从安装开始 <a class="header-anchor" href="#从安装开始" aria-label="Permalink to “从安装开始”">​</a></h2><p>默认情况下，Docker 并不会自动被安装在您的计算机中，所以，第一步就是安装 Docker 软件包；我们的教学机器系统是 Ubuntu 14.0.4，所以，我们将使用 Apt 软件包管理器，来执行安装操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># apt-get install docker.io</span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree       </span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following extra packages will be installed:</span></span>
<span class="line"><span>  aufs-tools cgroup-lite git git-man liberror-perl</span></span>
<span class="line"><span>Suggested packages:</span></span>
<span class="line"><span>  btrfs-tools debootstrap lxc rinse git-daemon-run git-daemon-sysvinit git-doc</span></span>
<span class="line"><span>  git-el git-email git-gui gitk gitweb git-arch git-bzr git-cvs git-mediawiki</span></span>
<span class="line"><span>  git-svn</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  aufs-tools cgroup-lite docker.io git git-man liberror-perl</span></span>
<span class="line"><span>0 upgraded, 6 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 7,553 kB of archives.</span></span>
<span class="line"><span>After this operation, 46.6 MB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue? [Y/n] y</span></span></code></pre></div><p>为了检查当前是否有容器运行，我们可以执行<code>docker</code>命令，加上<code>ps</code>选项</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES</span></span></code></pre></div><p><code>docker</code>命令中的<code>ps</code>功能类似于 Linux 的<code>ps</code>命令。它将显示可找到的 Docker 容器及其状态。由于我们并没有启动任何 Docker 容器，所以命令没有显示任何正在运行的容器。</p><h2 id="部署一个预构建好的-nginx-docker-容器" tabindex="-1">部署一个预构建好的 nginx Docker 容器 <a class="header-anchor" href="#部署一个预构建好的-nginx-docker-容器" aria-label="Permalink to “部署一个预构建好的 nginx Docker 容器”">​</a></h2><p>我比较喜欢的 Docker 特性之一就是 Docker 部署预先构建好的容器的方式，就像<code>yum</code>和<code>apt-get</code>部署包一样。为了更好地解释，我们来部署一个运行着 nginx web 服务器的预构建容器。我们可以继续使用<code>docker</code>命令，这次选择<code>run</code>选项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker run -d nginx</span></span>
<span class="line"><span>Unable to find image &#39;nginx&#39; locally</span></span>
<span class="line"><span>Pulling repository nginx</span></span>
<span class="line"><span>5c82215b03d1: Download complete </span></span>
<span class="line"><span>e2a4fb18da48: Download complete </span></span>
<span class="line"><span>58016a5acc80: Download complete </span></span>
<span class="line"><span>657abfa43d82: Download complete </span></span>
<span class="line"><span>dcb2fe003d16: Download complete </span></span>
<span class="line"><span>c79a417d7c6f: Download complete </span></span>
<span class="line"><span>abb90243122c: Download complete </span></span>
<span class="line"><span>d6137c9e2964: Download complete </span></span>
<span class="line"><span>85e566ddc7ef: Download complete </span></span>
<span class="line"><span>69f100eb42b5: Download complete </span></span>
<span class="line"><span>cd720b803060: Download complete </span></span>
<span class="line"><span>7cc81e9a118a: Download complete</span></span></code></pre></div><p><code>docker</code>命令的<code>run</code>选项，用来通知 Docker 去寻找一个指定的 Docker 镜像，然后启动运行着该镜像的容器。默认情况下，Docker 容器运行在前台，这意味着当你运行<code>docker run</code>命令的时候，你的 shell 会被绑定到容器的控制台以及运行在容器中的进程。为了能在后台运行该 Docker 容器，我们使用了<code>-d</code> (<strong>detach</strong>)标志。</p><p>再次运行<code>docker ps</code>命令，可以看到 nginx 容器正在运行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS               NAMES</span></span>
<span class="line"><span>f6d31ab01fc9        nginx:latest        nginx -g &#39;daemon off   4 seconds ago       Up 3 seconds        443/tcp, 80/tcp     desperate_lalande</span></span></code></pre></div><p>从上面的输出信息中，我们可以看到正在运行的名为<code>desperate_lalande</code>的容器，它是由<code>nginx:latest image</code>（LCTT 译注： nginx 最新版本的镜像）构建而来得。</p><h3 id="docker-镜像" tabindex="-1">Docker 镜像 <a class="header-anchor" href="#docker-镜像" aria-label="Permalink to “Docker 镜像”">​</a></h3><p>镜像是 Docker 的核心特征之一，类似于虚拟机镜像。和虚拟机镜像一样，Docker 镜像是一个被保存并打包的容器。当然，Docker 不只是创建镜像，它还可以通过 Docker 仓库发布这些镜像，Docker 仓库和软件包仓库的概念差不多，它让 Docker 能够模仿<code>yum</code>部署软件包的方式来部署镜像。为了更好地理解这是怎么工作的，我们来回顾<code>docker run</code>执行后的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker run -d nginx</span></span>
<span class="line"><span>Unable to find image &#39;nginx&#39; locally</span></span></code></pre></div><p>我们可以看到第一条信息是，Docker 不能在本地找到名叫 nginx 的镜像。这是因为当我们执行<code>docker run</code>命令时，告诉 Docker 运行一个基于 nginx 镜像的容器。既然 Docker 要启动一个基于特定镜像的容器，那么 Docker 首先需要找到那个指定镜像。在检查远程仓库之前，Docker 首先检查本地是否存在指定名称的本地镜像。</p><p>因为系统是崭新的，不存在 nginx 镜像，Docker 将选择从 Docker 仓库下载之。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Pulling repository nginx</span></span>
<span class="line"><span>5c82215b03d1: Download complete </span></span>
<span class="line"><span>e2a4fb18da48: Download complete </span></span>
<span class="line"><span>58016a5acc80: Download complete </span></span>
<span class="line"><span>657abfa43d82: Download complete </span></span>
<span class="line"><span>dcb2fe003d16: Download complete </span></span>
<span class="line"><span>c79a417d7c6f: Download complete </span></span>
<span class="line"><span>abb90243122c: Download complete </span></span>
<span class="line"><span>d6137c9e2964: Download complete </span></span>
<span class="line"><span>85e566ddc7ef: Download complete </span></span>
<span class="line"><span>69f100eb42b5: Download complete </span></span>
<span class="line"><span>cd720b803060: Download complete </span></span>
<span class="line"><span>7cc81e9a118a: Download complete</span></span></code></pre></div>`,20)),a("p",null,[n[6]||(n[6]=s("这就是第二部分输出信息显示给我们的内容。默认情况下，Docker 会使用 ",-1)),p(e,{href:"https://hub.docker.com/"},{default:i(()=>[...n[5]||(n[5]=[s("Docker Hub",-1)])]),_:1}),n[7]||(n[7]=s(" 仓库，该仓库由 Docker 公司维护。",-1))]),n[61]||(n[61]=l(`<p>和 Github 一样，在 Docker Hub 创建公共仓库是免费的，私人仓库就需要缴纳费用了。当然，部署你自己的 Docker 仓库也是可以的，事实上只需要简单地运行<code>docker run registry</code>命令就行了。但在这篇文章中，我们的重点将不是讲解如何部署一个定制的注册服务。</p><h3 id="关闭并移除容器" tabindex="-1">关闭并移除容器 <a class="header-anchor" href="#关闭并移除容器" aria-label="Permalink to “关闭并移除容器”">​</a></h3><p>在我们继续构建定制容器之前，我们先清理一下 Docker 环境，我们将关闭先前的容器，并移除它。</p><p>我们利用<code>docker</code>命令和<code>run</code>选项运行一个容器，所以，为了停止同一个容器，我们简单地在执行<code>docker</code>命令时，使用<code>kill</code>选项，并指定容器名。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker kill desperate_lalande</span></span>
<span class="line"><span>desperate_lalande</span></span></code></pre></div><p>当我们再次执行<code>docker ps</code>，就不再有容器运行了</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES</span></span></code></pre></div><p>但是，此时，我们这是停止了容器；虽然它不再运行，但仍然存在。默认情况下，<code>docker ps</code>只会显示正在运行的容器，如果我们附加<code>-a</code> (all) 标识，它会显示所有运行和未运行的容器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps -a</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS                           PORTS               NAMES</span></span>
<span class="line"><span>f6d31ab01fc9        5c82215b03d1        nginx -g &#39;daemon off   4 weeks ago         Exited (-1) About a minute ago                       desperate_lalande</span></span></code></pre></div><p>为了能完整地移除容器，我们在用<code>docker</code>命令时，附加<code>rm</code>选项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker rm desperate_lalande</span></span>
<span class="line"><span>desperate_lalande</span></span></code></pre></div><p>虽然容器被移除了；但是我们仍拥有可用的<strong>nginx</strong>镜像（LCTT 译注：镜像缓存）。如果我们重新运行<code>docker run -d nginx</code>，Docker 就无需再次拉取 nginx 镜像即可启动容器。这是因为我们本地系统中已经保存了一个副本。</p><p>为了列出系统中所有的本地镜像，我们运行<code>docker</code>命令，附加<code>images</code>选项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker images</span></span>
<span class="line"><span>REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE</span></span>
<span class="line"><span>nginx               latest              9fab4090484a        5 days ago          132.8 MB</span></span></code></pre></div><h2 id="构建我们自己的镜像" tabindex="-1">构建我们自己的镜像 <a class="header-anchor" href="#构建我们自己的镜像" aria-label="Permalink to “构建我们自己的镜像”">​</a></h2><p>截至目前，我们已经使用了一些基础的 Docker 命令来启动、停止和移除一个预构建好的普通镜像。为了“Docker 化（Dockerize）”这篇博客，我们需要构建我们自己的镜像，也就是创建一个 <strong>Dockerfile</strong>。</p><p>在大多数虚拟机环境中，如果你想创建一个机器镜像，首先，你需要建立一个新的虚拟机、安装操作系统、安装应用，最后将其转换为一个模板或者镜像。但在 Docker 中，所有这些步骤都可以通过 Dockerfile 实现全自动。Dockerfile 是向 Docker 提供构建指令去构建定制镜像的方式。在这一章节，我们将编写能用来部署这个博客的定制 Dockerfile。</p><h3 id="理解应用" tabindex="-1">理解应用 <a class="header-anchor" href="#理解应用" aria-label="Permalink to “理解应用”">​</a></h3><p>我们开始构建 Dockerfile 之前，第一步要搞明白，我们需要哪些东西来部署这个博客。</p>`,19)),a("p",null,[n[9]||(n[9]=s("这个博客本质上是由一个静态站点生成器生成的静态 HTML 页面，这个生成器是我编写的，名为 ",-1)),n[10]||(n[10]=a("strong",null,"hamerkop",-1)),n[11]||(n[11]=s("。这个生成器很简单，它所做的就是生成该博客站点。所有的代码和源文件都被我放在了一个公共的 ",-1)),p(e,{href:"https://github.com/madflojo/blog"},{default:i(()=>[...n[8]||(n[8]=[s("Github 仓库",-1)])]),_:1}),n[12]||(n[12]=s("。为了部署这篇博客，我们要先从 Github 仓库把这些内容拉取下来，然后安装 ",-1)),n[13]||(n[13]=a("strong",null,"Python",-1)),n[14]||(n[14]=s(" 和一些 ",-1)),n[15]||(n[15]=a("strong",null,"Python",-1)),n[16]||(n[16]=s(" 模块，最后执行",-1)),n[17]||(n[17]=a("code",null,"hamerkop",-1)),n[18]||(n[18]=s("应用。我们还需要安装 ",-1)),n[19]||(n[19]=a("strong",null,"nginx",-1)),n[20]||(n[20]=s("，来运行生成后的内容。",-1))]),a("p",null,[n[22]||(n[22]=s("截止目前，这些还是一个简单的 Dockerfile，但它却给我们展示了相当多的 ",-1)),p(e,{href:"(https://docs.docker.com/v1.8/reference/builder/)"},{default:i(()=>[...n[21]||(n[21]=[s("Dockerfile 语法",-1)])]),_:1}),n[23]||(n[23]=s("。我们需要克隆 Github 仓库，然后使用你最喜欢的编辑器编写 Dockerfile，我选择",-1)),n[24]||(n[24]=a("code",null,"vi",-1))]),n[62]||(n[62]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># git clone https://github.com/madflojo/blog.git</span></span>
<span class="line"><span>Cloning into &#39;blog&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 622, done.</span></span>
<span class="line"><span>remote: Total 622 (delta 0), reused 0 (delta 0), pack-reused 622</span></span>
<span class="line"><span>Receiving objects: 100% (622/622), 14.80 MiB | 1.06 MiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (242/242), done.</span></span>
<span class="line"><span>Checking connectivity... done.</span></span>
<span class="line"><span># cd blog/</span></span>
<span class="line"><span># vi Dockerfile</span></span></code></pre></div><h3 id="from-继承一个-docker-镜像" tabindex="-1">FROM - 继承一个 Docker 镜像 <a class="header-anchor" href="#from-继承一个-docker-镜像" aria-label="Permalink to “FROM - 继承一个 Docker 镜像”">​</a></h3><p>第一条 Dockerfile 指令是<code>FROM</code>指令。这将指定一个现存的镜像作为我们的基础镜像。这也从根本上给我们提供了继承其他 Docker 镜像的途径。在本例中，我们还是从刚刚我们使用的 <strong>nginx</strong> 开始，如果我们想从头开始，我们可以通过指定<code>ubuntu:latest</code>来使用 <strong>Ubuntu</strong> Docker 镜像。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span></code></pre></div><p>除了<code>FROM</code>指令，我还使用了<code>MAINTAINER</code>，它用来显示 Dockerfile 的作者。</p><p>Docker 支持使用<code>#</code>作为注释，我将经常使用该语法，来解释 Dockerfile 的部分内容。</p><h3 id="运行一次测试构建" tabindex="-1">运行一次测试构建 <a class="header-anchor" href="#运行一次测试构建" aria-label="Permalink to “运行一次测试构建”">​</a></h3>`,7)),a("p",null,[n[26]||(n[26]=s("因为我们继承了 ",-1)),n[27]||(n[27]=a("strong",null,"nginx",-1)),n[28]||(n[28]=s(" Docker镜像，我们现在的 Dockerfile 也就包括了用来构建 ",-1)),n[29]||(n[29]=a("strong",null,"nginx",-1)),n[30]||(n[30]=s(" 镜像的 ",-1)),p(e,{href:"https://github.com/nginxinc/docker-nginx/blob/08eeb0e3f0a5ee40cbc2bc01f0004c2aa5b78c15/Dockerfile"},{default:i(()=>[...n[25]||(n[25]=[s("Dockerfile",-1)])]),_:1}),n[31]||(n[31]=s(" 中所有指令。这意味着，此时我们可以从该 Dockerfile 中构建出一个 Docker 镜像，然后以该镜像运行一个容器。虽然，最终的镜像和 ",-1)),n[32]||(n[32]=a("strong",null,"nginx",-1)),n[33]||(n[33]=s(" 镜像本质上是一样的，但是我们这次是通过构建 Dockerfile 的形式，然后我们将讲解 Docker 构建镜像的过程。",-1))]),n[63]||(n[63]=l(`<p>想要从 Dockerfile 构建镜像，我们只需要在运行 <code>docker</code> 命令的时候，加上 <code>build</code> 选项。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker build -t blog /root/blog </span></span>
<span class="line"><span>Sending build context to Docker daemon  23.6 MB</span></span>
<span class="line"><span>Sending build context to Docker daemon </span></span>
<span class="line"><span>Step 0 : FROM nginx:latest</span></span>
<span class="line"><span> ---&gt; 9fab4090484a</span></span>
<span class="line"><span>Step 1 : MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span> ---&gt; Running in c97f36450343</span></span>
<span class="line"><span> ---&gt; 60a44f78d194</span></span>
<span class="line"><span>Removing intermediate container c97f36450343</span></span>
<span class="line"><span>Successfully built 60a44f78d194</span></span></code></pre></div><p>上面的例子，我们使用了<code>-t</code> (<strong>tag</strong>)标识给镜像添加“blog”的标签。实质上我们就是在给镜像命名，如果我们不指定标签，就只能通过 Docker 分配的 <strong>Image ID</strong> 来访问镜像了。本例中，从 Docker 构建成功的信息可以看出，<strong>Image ID</strong>值为 <code>60a44f78d194</code>。</p><p>除了<code>-t</code>标识外，我还指定了目录<code>/root/blog</code>。该目录被称作“构建目录”，它将包含 Dockerfile，以及其它需要构建该容器的文件。</p><p>现在我们构建成功了，下面我们开始定制该镜像。</p><h3 id="使用-run-来执行-apt-get" tabindex="-1">使用 RUN 来执行 apt-get <a class="header-anchor" href="#使用-run-来执行-apt-get" aria-label="Permalink to “使用 RUN 来执行 apt-get”">​</a></h3><p>用来生成 HTML 页面的静态站点生成器是用 <strong>Python</strong> 语言编写的，所以，在 Dockerfile 中需要做的第一件定制任务是安装 Python。我们将使用 Apt 软件包管理器来安装 Python 软件包，这意味着在 Dockerfile 中我们要指定运行<code>apt-get update</code>和<code>apt-get install python-dev</code>；为了完成这一点，我们可以使用<code>RUN</code>指令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install python and pip</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span>RUN apt-get install -y python-dev python-pip</span></span></code></pre></div><p>如上所示，我们只是简单地告知 Docker 构建镜像的时候，要去执行指定的<code>apt-get</code>命令。比较有趣的是，这些命令只会在该容器的上下文中执行。这意味着，即使在容器中安装了<code>python-dev</code>和<code>python-pip</code>，但主机本身并没有安装这些。说的更简单点，<code>pip</code>命令将只在容器中执行，出了容器，<code>pip</code>命令不存在。</p><p>还有一点比较重要的是，Docker 构建过程中不接受用户输入。这说明任何被<code>RUN</code>指令执行的命令必须在没有用户输入的时候完成。由于很多应用在安装的过程中需要用户的输入信息，所以这增加了一点难度。不过我们例子中，<code>RUN</code>命令执行的命令都不需要用户输入。</p><h3 id="安装-python-模块" tabindex="-1">安装 Python 模块 <a class="header-anchor" href="#安装-python-模块" aria-label="Permalink to “安装 Python 模块”">​</a></h3><p><strong>Python</strong> 安装完毕后，我们现在需要安装 Python 模块。如果在 Docker 外做这些事，我们通常使用<code>pip</code>命令，然后参考我的博客 Git 仓库中名叫<code>requirements.txt</code>的文件。在之前的步骤中，我们已经使用<code>git</code>命令成功地将 Github 仓库“克隆”到了<code>/root/blog</code>目录；这个目录碰巧也是我们创建<code>Dockerfile</code>的目录。这很重要，因为这意味着 Docker 在构建过程中可以访问这个 Git 仓库中的内容。</p><p>当我们执行构建后，Docker 将构建的上下文环境设置为指定的“构建目录”。这意味着目录中的所有文件都可以在构建过程中被使用，目录之外的文件（构建环境之外）是不能访问的。</p><p>为了能安装所需的 Python 模块，我们需要将<code>requirements.txt</code>从构建目录拷贝到容器中。我们可以在<code>Dockerfile</code>中使用<code>COPY</code>指令完成这一需求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install python and pip</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span>RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Create a directory for required files</span></span>
<span class="line"><span>RUN mkdir -p /build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Add requirements file and run pip</span></span>
<span class="line"><span>COPY requirements.txt /build/</span></span>
<span class="line"><span>RUN pip install -r /build/requirements.txt</span></span></code></pre></div><p>在<code>Dockerfile</code>中，我们增加了3条指令。第一条指令使用<code>RUN</code>在容器中创建了<code>/build/</code>目录。该目录用来拷贝生成静态 HTML 页面所需的一切应用文件。第二条指令是<code>COPY</code>指令，它将<code>requirements.txt</code>从“构建目录”(<code>/root/blog</code>)拷贝到容器中的<code>/build/</code>目录。第三条使用<code>RUN</code>指令来执行<code>pip</code>命令；安装<code>requirements.txt</code>文件中指定的所有模块。</p><p>当构建定制镜像时，<code>COPY</code>是条重要的指令。如果在 Dockerfile 中不指定拷贝文件，Docker 镜像将不会包含requirements.txt 这个文件。在 Docker 容器中，所有东西都是隔离的，除非在 Dockerfile 中指定执行，否则容器中不会包括所需的依赖。</p><h3 id="重新运行构建" tabindex="-1">重新运行构建 <a class="header-anchor" href="#重新运行构建" aria-label="Permalink to “重新运行构建”">​</a></h3><p>现在，我们让 Docker 执行了一些定制任务，现在我们尝试另一次 blog 镜像的构建。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker build -t blog /root/blog</span></span>
<span class="line"><span>Sending build context to Docker daemon 19.52 MB</span></span>
<span class="line"><span>Sending build context to Docker daemon </span></span>
<span class="line"><span>Step 0 : FROM nginx:latest</span></span>
<span class="line"><span> ---&gt; 9fab4090484a</span></span>
<span class="line"><span>Step 1 : MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 8e0f1899d1eb</span></span>
<span class="line"><span>Step 2 : RUN apt-get update</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 78b36ef1a1a2</span></span>
<span class="line"><span>Step 3 : RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; ef4f9382658a</span></span>
<span class="line"><span>Step 4 : RUN mkdir -p /build/</span></span>
<span class="line"><span> ---&gt; Running in bde05cf1e8fe</span></span>
<span class="line"><span> ---&gt; f4b66e09fa61</span></span>
<span class="line"><span>Removing intermediate container bde05cf1e8fe</span></span>
<span class="line"><span>Step 5 : COPY requirements.txt /build/</span></span>
<span class="line"><span> ---&gt; cef11c3fb97c</span></span>
<span class="line"><span>Removing intermediate container 9aa8ff43f4b0</span></span>
<span class="line"><span>Step 6 : RUN pip install -r /build/requirements.txt</span></span>
<span class="line"><span> ---&gt; Running in c50b15ddd8b1</span></span>
<span class="line"><span>Downloading/unpacking jinja2 (from -r /build/requirements.txt (line 1))</span></span>
<span class="line"><span>Downloading/unpacking PyYaml (from -r /build/requirements.txt (line 2))</span></span>
<span class="line"><span>&lt;truncated to reduce noise&gt;</span></span>
<span class="line"><span>Successfully installed jinja2 PyYaml mistune markdown MarkupSafe</span></span>
<span class="line"><span>Cleaning up...</span></span>
<span class="line"><span> ---&gt; abab55c20962</span></span>
<span class="line"><span>Removing intermediate container c50b15ddd8b1</span></span>
<span class="line"><span>Successfully built abab55c20962</span></span></code></pre></div><p>上述输出所示，我们可以看到构建成功了，我们还可以看到另外一个有趣的信息<code> ---&gt; Using cache</code>。这条信息告诉我们，Docker 在构建该镜像时使用了它的构建缓存。</p><h3 id="docker-构建缓存" tabindex="-1">Docker 构建缓存 <a class="header-anchor" href="#docker-构建缓存" aria-label="Permalink to “Docker 构建缓存”">​</a></h3><p>当 Docker 构建镜像时，它不仅仅构建一个单独的镜像；事实上，在构建过程中，它会构建许多镜像。从上面的输出信息可以看出，在每一“步”执行后，Docker 都在创建新的镜像。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> Step 5 : COPY requirements.txt /build/</span></span>
<span class="line"><span>  ---&gt; cef11c3fb97c</span></span></code></pre></div><p>上面片段的最后一行可以看出，Docker 在告诉我们它在创建一个新镜像，因为它打印了<strong>Image ID</strong> : <code>cef11c3fb97c</code>。这种方式有用之处在于，Docker能在随后构建这个 <strong>blog</strong> 镜像时将这些镜像作为缓存使用。这很有用处，因为这样， Docker 就能加速同一个容器中新构建任务的构建流程。从上面的例子中，我们可以看出，Docker 没有重新安装<code>python-dev</code>和<code>python-pip</code>包，Docker 则使用了缓存镜像。但是由于 Docker 并没有找到执行<code>mkdir</code>命令的构建缓存，随后的步骤就被一一执行了。</p><p>Docker 构建缓存一定程度上是福音，但有时也是噩梦。这是因为决定使用缓存或者重新运行指令的因素很少。比如，如果<code>requirements.txt</code>文件发生了修改，Docker 会在构建时检测到该变化，然后 Docker 会重新执行该执行那个点往后的所有指令。这得益于 Docker 能查看<code>requirements.txt</code>的文件内容。但是，<code>apt-get</code>命令的执行就是另一回事了。如果提供 Python 软件包的 <strong>Apt</strong> 仓库包含了一个更新的 python-pip 包；Docker 不会检测到这个变化，转而去使用构建缓存。这会导致之前旧版本的包将被安装。虽然对<code>python-pip</code>来说，这不是主要的问题，但对使用了存在某个致命攻击缺陷的软件包缓存来说，这是个大问题。</p><p>出于这个原因，抛弃 Docker 缓存，定期地重新构建镜像是有好处的。这时，当我们执行 Docker 构建时，我简单地指定<code>--no-cache=True</code>即可。</p><h2 id="部署博客的剩余部分" tabindex="-1">部署博客的剩余部分 <a class="header-anchor" href="#部署博客的剩余部分" aria-label="Permalink to “部署博客的剩余部分”">​</a></h2><p>Python 软件包和模块安装后，接下来我们将拷贝需要用到的应用文件，然后运行<code>hamerkop</code>应用。我们只需要使用更多的<code>COPY</code> 和 <code>RUN</code>指令就可完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>## Dockerfile that generates an instance of http://bencane.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:latest</span></span>
<span class="line"><span>MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Install python and pip</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span>RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Create a directory for required files</span></span>
<span class="line"><span>RUN mkdir -p /build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Add requirements file and run pip</span></span>
<span class="line"><span>COPY requirements.txt /build/</span></span>
<span class="line"><span>RUN pip install -r /build/requirements.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Add blog code nd required files</span></span>
<span class="line"><span>COPY static /build/static</span></span>
<span class="line"><span>COPY templates /build/templates</span></span>
<span class="line"><span>COPY hamerkop /build/</span></span>
<span class="line"><span>COPY config.yml /build/</span></span>
<span class="line"><span>COPY articles /build/articles</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Run Generator</span></span>
<span class="line"><span>RUN /build/hamerkop -c /build/config.yml</span></span></code></pre></div><p>现在我们已经写出了剩余的构建指令，我们再次运行另一次构建，并确保镜像构建成功。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker build -t blog /root/blog/</span></span>
<span class="line"><span>Sending build context to Docker daemon 19.52 MB</span></span>
<span class="line"><span>Sending build context to Docker daemon </span></span>
<span class="line"><span>Step 0 : FROM nginx:latest</span></span>
<span class="line"><span> ---&gt; 9fab4090484a</span></span>
<span class="line"><span>Step 1 : MAINTAINER Benjamin Cane &lt;ben@bencane.com&gt;</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 8e0f1899d1eb</span></span>
<span class="line"><span>Step 2 : RUN apt-get update</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; 78b36ef1a1a2</span></span>
<span class="line"><span>Step 3 : RUN apt-get install -y python-dev python-pip</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; ef4f9382658a</span></span>
<span class="line"><span>Step 4 : RUN mkdir -p /build/</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; f4b66e09fa61</span></span>
<span class="line"><span>Step 5 : COPY requirements.txt /build/</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; cef11c3fb97c</span></span>
<span class="line"><span>Step 6 : RUN pip install -r /build/requirements.txt</span></span>
<span class="line"><span> ---&gt; Using cache</span></span>
<span class="line"><span> ---&gt; abab55c20962</span></span>
<span class="line"><span>Step 7 : COPY static /build/static</span></span>
<span class="line"><span> ---&gt; 15cb91531038</span></span>
<span class="line"><span>Removing intermediate container d478b42b7906</span></span>
<span class="line"><span>Step 8 : COPY templates /build/templates</span></span>
<span class="line"><span> ---&gt; ecded5d1a52e</span></span>
<span class="line"><span>Removing intermediate container ac2390607e9f</span></span>
<span class="line"><span>Step 9 : COPY hamerkop /build/</span></span>
<span class="line"><span> ---&gt; 59efd1ca1771</span></span>
<span class="line"><span>Removing intermediate container b5fbf7e817b7</span></span>
<span class="line"><span>Step 10 : COPY config.yml /build/</span></span>
<span class="line"><span> ---&gt; bfa3db6c05b7</span></span>
<span class="line"><span>Removing intermediate container 1aebef300933</span></span>
<span class="line"><span>Step 11 : COPY articles /build/articles</span></span>
<span class="line"><span> ---&gt; 6b61cc9dde27</span></span>
<span class="line"><span>Removing intermediate container be78d0eb1213</span></span>
<span class="line"><span>Step 12 : RUN /build/hamerkop -c /build/config.yml</span></span>
<span class="line"><span> ---&gt; Running in fbc0b5e574c5</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//2011/06/25/checking-the-number-of-lwp-threads-in-linux</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//2011/06/checking-the-number-of-lwp-threads-in-linux</span></span>
<span class="line"><span>&lt;truncated to reduce noise&gt;</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//archive.html</span></span>
<span class="line"><span>Successfully created file /usr/share/nginx/html//sitemap.xml</span></span>
<span class="line"><span> ---&gt; 3b25263113e1</span></span>
<span class="line"><span>Removing intermediate container fbc0b5e574c5</span></span>
<span class="line"><span>Successfully built 3b25263113e1</span></span></code></pre></div><h3 id="运行定制的容器" tabindex="-1">运行定制的容器 <a class="header-anchor" href="#运行定制的容器" aria-label="Permalink to “运行定制的容器”">​</a></h3><p>成功的一次构建后，我们现在就可以通过运行<code>docker</code>命令和<code>run</code>选项来运行我们定制的容器，和之前我们启动 nginx 容器一样。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker run -d -p 80:80 --name=blog blog</span></span>
<span class="line"><span>5f6c7a2217dcdc0da8af05225c4d1294e3e6bb28a41ea898a1c63fb821989ba1</span></span></code></pre></div><p>我们这次又使用了<code>-d</code> (<strong>detach</strong>)标识来让Docker在后台运行。但是，我们也可以看到两个新标识。第一个新标识是<code>--name</code>，这用来给容器指定一个用户名称。之前的例子，我们没有指定名称，因为 Docker 随机帮我们生成了一个。第二个新标识是<code>-p</code>，这个标识允许用户从主机映射一个端口到容器中的一个端口。</p><p>之前我们使用的基础 <strong>nginx</strong> 镜像分配了80端口给 HTTP 服务。默认情况下，容器内的端口通道并没有绑定到主机系统。为了让外部系统能访问容器内部端口，我们必须使用<code>-p</code>标识将主机端口映射到容器内部端口。上面的命令，我们通过<code>-p 8080:80</code>语法将主机80端口映射到容器内部的80端口。</p><p>经过上面的命令，我们的容器看起来成功启动了，我们可以通过执行<code>docker ps</code>核实。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># docker ps</span></span>
<span class="line"><span>CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS                         NAMES</span></span>
<span class="line"><span>d264c7ef92bd        blog:latest         nginx -g &#39;daemon off   3 seconds ago       Up 3 seconds        443/tcp, 0.0.0.0:80-&gt;80/tcp   blog</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h2>`,40)),a("p",null,[n[35]||(n[35]=s("截止目前，我们拥有了一个运行中的定制 Docker 容器。虽然在这篇文章中，我们只接触了一些 Dockerfile 指令用法，但是我们还是要学习所有的指令。我们可以检查 ",-1)),p(e,{href:"https://docs.docker.com/v1.8/reference/builder/"},{default:i(()=>[...n[34]||(n[34]=[s("Docker's reference page",-1)])]),_:1}),n[36]||(n[36]=s(" 来获取所有的 Dockerfile 指令用法，那里对指令的用法说明得很详细。",-1))]),a("p",null,[n[38]||(n[38]=s("另一个比较好的资源是 ",-1)),p(e,{href:"https://docs.docker.com/engine/articles/dockerfile_best-practices/"},{default:i(()=>[...n[37]||(n[37]=[s("Dockerfile Best Practices page",-1)])]),_:1}),n[39]||(n[39]=s("，它有许多构建定制 Dockerfile 的最佳练习。有些技巧非常有用，比如战略性地组织好 Dockerfile 中的命令。上面的例子中，我们将",-1)),n[40]||(n[40]=a("code",null,"articles",-1)),n[41]||(n[41]=s("目录的",-1)),n[42]||(n[42]=a("code",null,"COPY",-1)),n[43]||(n[43]=s("指令作为 Dockerfile 中最后的",-1)),n[44]||(n[44]=a("code",null,"COPY",-1)),n[45]||(n[45]=s("指令。这是因为",-1)),n[46]||(n[46]=a("code",null,"articles",-1)),n[47]||(n[47]=s("目录会经常变动。所以，将那些经常变化的指令尽可能地放在最后面的位置，来最优化那些可以被缓存的步骤。",-1))]),n[64]||(n[64]=a("p",null,"通过这篇文章，我们涉及了如何运行一个预构建的容器，以及如何构建，然后部署定制容器。虽然关于 Docker 你还有许多需要继续学习的地方，但我想这篇文章给了你如何继续开始的好建议。当然，如果你认为还有一些需要继续补充的内容，在下面评论即可。",-1)),n[65]||(n[65]=a("hr",null,null,-1)),a("p",null,[n[49]||(n[49]=s("via: ",-1)),p(e,{href:"http://bencane.com/2015/12/01/getting-started-with-docker-by-dockerizing-this-blog/"},{default:i(()=>[...n[48]||(n[48]=[s("http://bencane.com/2015/12/01/getting-started-with-docker-by-dockerizing-this-blog/",-1)])]),_:1})]),a("p",null,[n[52]||(n[52]=s("作者：Benjamin Cane 译者：",-1)),p(e,{href:"https://github.com/su-kaiyao"},{default:i(()=>[...n[50]||(n[50]=[s("su-kaiyao",-1)])]),_:1}),n[53]||(n[53]=s(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:i(()=>[...n[51]||(n[51]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[56]||(n[56]=s("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[54]||(n[54]=[s("LCTT",-1)])]),_:1}),n[57]||(n[57]=s(" 原创翻译，",-1)),p(e,{href:"http://linux.cn/"},{default:i(()=>[...n[55]||(n[55]=[s("Linux中国",-1)])]),_:1}),n[58]||(n[58]=s(" 荣誉推出",-1))])])}const x=t(r,[["render",g]]);export{y as __pageData,x as default};
