import{_ as t,a0 as o,w as r,s as d,I as a,x as s,a1 as i,A as p,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Buildah 入门 | LCTT x X-CMD","titleTemplate":false,"description":"Buildah 入门 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Buildah 入门 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Buildah 入门 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180606 Getting started with Buildah","title":"Buildah 入门","tag":"201807","desc":""},"relativePath":"201807/20180606 Getting started with Buildah.md","filePath":"[post].md"}'),u={name:"201807/20180606 Getting started with Buildah.md"};function c(h,n,b,g,f,k){const l=o("Link");return r(),d("div",null,[n[42]||(n[42]=a("h1",{id:"buildah-入门",tabindex:"-1"},[s("Buildah 入门 "),a("a",{class:"header-anchor",href:"#buildah-入门","aria-label":"Permalink to “Buildah 入门”"},"​")],-1)),n[43]||(n[43]=a("blockquote",null,[a("p",null,"Buildah 提供一种灵活、可脚本编程的方式，来使用你熟悉的工具创建精简、高效的容器镜像。")],-1)),n[44]||(n[44]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/blocks_building.png?itok=eMOT-ire",alt:""})],-1)),a("p",null,[i(l,{href:"https://github.com/projectatomic/buildah"},{default:p(()=>[...n[0]||(n[0]=[s("Buildah",-1)])]),_:1}),n[3]||(n[3]=s(" 是一个命令行工具，可以方便、快捷的构建与",-1)),a("ruby",null,[i(l,{href:"https://www.opencontainers.org/"},{default:p(()=>[...n[1]||(n[1]=[s("开放容器标准",-1)])]),_:1}),n[2]||(n[2]=a("rt",null,"Open Container Initiative",-1))]),n[4]||(n[4]=s("（OCI）兼容的容器镜像，这意味着其构建的镜像与 Docker 和 Kubernetes 兼容。该工具可作为 Docker 守护进程 ",-1)),n[5]||(n[5]=a("code",null,"docker build",-1)),n[6]||(n[6]=s(" 命令（即使用传统的 Dockerfile 构建镜像）的一种",-1)),n[7]||(n[7]=a("ruby",null,[s("简单"),a("rt",null,"drop-in")],-1)),n[8]||(n[8]=s("替换，而且更加灵活，允许构建镜像时使用你擅长的工具。Buildah 可以轻松与脚本集成并生成",-1)),n[9]||(n[9]=a("ruby",null,[s("流水线"),a("rt",null,"pipeline")],-1)),n[10]||(n[10]=s("，最好之处在于构建镜像不再需要运行容器守护进程（LCTT 译注：这里主要是指 Docker 守护进程）。",-1))]),n[45]||(n[45]=a("h3",{id:"docker-build-的简单替换",tabindex:"-1"},[s("docker build 的简单替换 "),a("a",{class:"header-anchor",href:"#docker-build-的简单替换","aria-label":"Permalink to “docker build 的简单替换”"},"​")],-1)),n[46]||(n[46]=a("p",null,[s("目前你可能使用 Dockerfile 和 "),a("code",null,"docker build"),s(" 命令构建镜像，那么你可以马上使用 Buildah 进行替代。Buildah 的 "),a("code",null,"build-using-dockerfile"),s(" （或 "),a("code",null,"bud"),s("）子命令与 "),a("code",null,"docker build"),s(" 基本等价，因此可以轻松的与已有脚本结合或构建流水线。")],-1)),a("p",null,[n[12]||(n[12]=s("类似我的上一篇关于 Buildah 的",-1)),i(l,{href:"http://chris.collins.is/2017/08/17/buildah-a-new-way-to-build-container-images/"},{default:p(()=>[...n[11]||(n[11]=[s("文章",-1)])]),_:1}),n[13]||(n[13]=s("，我也将以使用源码安装 “GNU Hello” 为例进行说明，对应的 Dockerfile 文件如下：",-1))]),n[47]||(n[47]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>FROM fedora:28</span></span>
<span class="line"><span>LABEL maintainer Chris Collins &lt;collins.christopher@gmail.com&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN dnf install -y tar gzip gcc make \\</span></span>
<span class="line"><span>        &amp;&amp; dnf clean all</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADD http://ftpmirror.gnu.org/hello/hello-2.10.tar.gz /tmp/hello-2.10.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN tar xvzf /tmp/hello-2.10.tar.gz -C /opt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /opt/hello-2.10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN ./configure</span></span>
<span class="line"><span>RUN make</span></span>
<span class="line"><span>RUN make install</span></span>
<span class="line"><span>RUN hello -v</span></span>
<span class="line"><span>ENTRYPOINT &quot;/usr/local/bin/hello&quot;</span></span></code></pre></div><p>使用 Buildah 从 Dockerfile 构建镜像也很简单，使用 <code>buildah bud -t hello .</code> 替换 <code>docker build -t hello .</code> 即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ sudo buildah bud -t hello .</span></span>
<span class="line"><span>STEP 1: FROM fedora:28</span></span>
<span class="line"><span>Getting image source signatures</span></span>
<span class="line"><span>Copying blob sha256:e06fd16225608e5b92ebe226185edb7422c3f581755deadf1312c6b14041fe73</span></span>
<span class="line"><span> 81.48 MiB / 81.48 MiB [====================================================] 8s</span></span>
<span class="line"><span>Copying config sha256:30190780b56e33521971b0213810005a69051d720b73154c6e473c1a07ebd609</span></span>
<span class="line"><span> 2.29 KiB / 2.29 KiB [======================================================] 0s</span></span>
<span class="line"><span>Writing manifest to image destination</span></span>
<span class="line"><span>Storing signatures</span></span>
<span class="line"><span>STEP 2: LABEL maintainer Chris Collins &lt;collins.christopher@gmail.com&gt;</span></span>
<span class="line"><span>STEP 3: RUN dnf install -y tar gzip gcc make    &amp;&amp; dnf clean all</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;考虑篇幅，略去后续输出&gt;</span></span></code></pre></div><p>镜像构建完毕后，可以使用 <code>buildah images</code> 命令查看这个新镜像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ sudo buildah images</span></span>
<span class="line"><span>IMAGE ID        IMAGE NAME                              CREATED AT              SIZE</span></span>
<span class="line"><span>30190780b56e    docker.io/library/fedora:28             Mar 7, 2018 16:53       247 MB</span></span>
<span class="line"><span>6d54bef73e63    docker.io/library/hello:latest    May 3, 2018 15:24     391.8 MB</span></span></code></pre></div>`,5)),a("p",null,[n[15]||(n[15]=s("新镜像的标签为 ",-1)),n[16]||(n[16]=a("code",null,"hello:latest",-1)),n[17]||(n[17]=s("，我们可以将其推送至远程镜像仓库，可以使用 ",-1)),i(l,{href:"http://cri-o.io/"},{default:p(()=>[...n[14]||(n[14]=[s("CRI-O",-1)])]),_:1}),n[18]||(n[18]=s(" 或其它 Kubernetes CRI 兼容的运行时来运行该镜像，也可以推送到远程仓库。如果你要测试对 Docker build 命令的替代性，你可以将镜像拷贝至 docker 守护进程的本地镜像存储中，这样 Docker 也可以使用该镜像。使用 ",-1)),n[19]||(n[19]=a("code",null,"buildah push",-1)),n[20]||(n[20]=s(" 可以很容易的完成推送操作：",-1))]),n[48]||(n[48]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ sudo buildah push hello:latest docker-daemon:hello:latest</span></span>
<span class="line"><span>Getting image source signatures</span></span>
<span class="line"><span>Copying blob sha256:72fcdba8cff9f105a61370d930d7f184702eeea634ac986da0105d8422a17028</span></span>
<span class="line"><span> 247.02 MiB / 247.02 MiB [==================================================] 2s</span></span>
<span class="line"><span>Copying blob sha256:e567905cf805891b514af250400cc75db3cb47d61219750e0db047c5308bd916</span></span>
<span class="line"><span> 144.75 MiB / 144.75 MiB [==================================================] 1s</span></span>
<span class="line"><span>Copying config sha256:6d54bef73e638f2e2dd8b7bf1c4dfa26e7ed1188f1113ee787893e23151ff3ff</span></span>
<span class="line"><span> 1.59 KiB / 1.59 KiB [======================================================] 0s</span></span>
<span class="line"><span>Writing manifest to image destination</span></span>
<span class="line"><span>Storing signatures</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@krang] $ sudo docker images | head -n2</span></span>
<span class="line"><span>REPOSITORY              TAG             IMAGE ID        CREATED                 SIZE</span></span>
<span class="line"><span>docker.io/hello      latest       6d54bef73e63  2 minutes ago   398 MB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@krang] $ sudo docker run -t hello:latest</span></span>
<span class="line"><span>Hello, world!</span></span></code></pre></div><h3 id="若干差异" tabindex="-1">若干差异 <a class="header-anchor" href="#若干差异" aria-label="Permalink to “若干差异”">​</a></h3><p>与 Docker build 不同，Buildah 不会自动的将 Dockerfile 中的每条指令产生的变更提到新的<ruby>分层<rt>layer</rt></ruby>中，只是简单的每次从头到尾执行构建。类似于<ruby>自动化<rt>automation</rt></ruby>和<ruby>流水线构建<rt>build pipeline</rt></ruby>，这种<ruby>无缓存构建<rt>non-cached</rt></ruby>方式的好处是可以提高构建速度，在指令较多时尤为明显。从<ruby>自动部署<rt>automated deployment</rt></ruby>或<ruby>持续交付<rt>continuous delivery</rt></ruby>的视角来看，使用这种方式可以快速的将新变更落实到生产环境中。</p><p>但从实际角度出发，缓存机制的缺乏对镜像开发不利，毕竟缓存层可以避免一遍遍的执行构建，从而显著的节省时间。自动分层只在 <code>build-using-dockerfile</code> 命令中生效。但我们在下面会看到，Buildah 原生命令允许我们选择将变更提交到硬盘的时间，提高了开发的灵活性。</p><h3 id="buildah-原生命令" tabindex="-1">Buildah 原生命令 <a class="header-anchor" href="#buildah-原生命令" aria-label="Permalink to “Buildah 原生命令”">​</a></h3><p>Buildah <em>真正</em> 有趣之处在于它的原生命令，你可以在容器构建过程中使用这些命令进行交互。相比与使用 <code>build-using-dockerfile/bud</code> 命令执行每次构建，Buildah 提供命令让你可以与构建过程中的临时容器进行交互。（Docker 也使用临时或<ruby><em>中间</em> <rt>intermediate</rt></ruby>容器，但你无法在镜像构建过程中与其交互。）</p><p>还是使用 “GNU Hello” 为例，考虑使用如下 Buildah 命令构建的镜像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set -o errexit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create a container</span></span>
<span class="line"><span>container=$(buildah from fedora:28)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Labels are part of the &quot;buildah config&quot; command</span></span>
<span class="line"><span>buildah config --label maintainer=&quot;Chris Collins &lt;collins.christopher@gmail.com&gt;&quot; $container</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Grab the source code outside of the container</span></span>
<span class="line"><span>curl -sSL http://ftpmirror.gnu.org/hello/hello-2.10.tar.gz -o hello-2.10.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildah copy $container hello-2.10.tar.gz /tmp/hello-2.10.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildah run $container dnf install -y tar gzip gcc make</span></span>
<span class="line"><span>buildah run $container dnf clean all</span></span>
<span class="line"><span>buildah run $container tar xvzf /tmp/hello-2.10.tar.gz -C /opt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Workingdir is also a &quot;buildah config&quot; command</span></span>
<span class="line"><span>buildah config --workingdir /opt/hello-2.10 $container</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildah run $container ./configure</span></span>
<span class="line"><span>buildah run $container make</span></span>
<span class="line"><span>buildah run $container make install</span></span>
<span class="line"><span>buildah run $container hello -v</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Entrypoint, too, is a “buildah config” command</span></span>
<span class="line"><span>buildah config --entrypoint /usr/local/bin/hello $container</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Finally saves the running container to an image</span></span>
<span class="line"><span>buildah commit --format docker $container hello:latest</span></span></code></pre></div><p>我们可以一眼看出这是一个 Bash 脚本而不是 Dockerfile。基于 Buildah 的原生命令，可以轻易的使用任何脚本语言或你擅长的自动化工具编写脚本。形式可以是 makefile、Python 脚本或其它你擅长的类型。</p><p>这个脚本做了哪些工作呢？首先，Buildah 命令 <code>container=$(buildah from fedora:28)</code> 基于 fedora:28 镜像创建了一个正在运行的容器，将容器名（<code>buildah from</code> 命令的返回值）保存到变量中，便于后续使用。后续所有命令都是有 <code>$container</code> 变量指明需要操作的容器。这些命令的功能大多可以从名称看出：<code>buildah copy</code> 将文件拷贝至容器，<code>buildah run</code> 会在容器中执行命令。可以很容易的将上述命令与 Dockerfile 中的指令对应起来。</p><p>最后一条命令 <code>buildah commit</code> 将容器提交到硬盘上的镜像中。当不使用 Dockerfile 而是使用 Buildah 命令构建镜像时，你可以使用 <code>commit</code> 命令决定何时保存变更。在上例中，所有的变更是一起提交的；但也可以增加中间提交，让你可以选择作为起点的<ruby>缓存点<rt>cache point</rt></ruby>。（例如，执行完 <code>dnf install</code> 命令后将变更缓存到硬盘是特别有意义的，一方面因为该操作耗时较长，另一方面每次执行的结果也确实相同。）</p><h3 id="挂载点-安装目录以及-chroot" tabindex="-1">挂载点，安装目录以及 chroot <a class="header-anchor" href="#挂载点-安装目录以及-chroot" aria-label="Permalink to “挂载点，安装目录以及 chroot”">​</a></h3><p>另一个可以大大增加构建镜像灵活性的 Buildah 命令是 <code>buildah mount</code>，可以将容器的根目录挂载到你主机的一个挂载点上。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ container=$(sudo buildah from fedora:28)</span></span>
<span class="line"><span>[chris@krang] $ mountpoint=$(sudo buildah mount \${container})</span></span>
<span class="line"><span>[chris@krang] $ echo $mountpoint</span></span>
<span class="line"><span>/var/lib/containers/storage/overlay2/463eda71ec74713d8cebbe41ee07da5f6df41c636f65139a7bd17b24a0e845e3/merged</span></span>
<span class="line"><span>[chris@krang] $ cat \${mountpoint}/etc/redhat-release</span></span>
<span class="line"><span>Fedora release 28 (Twenty Eight)</span></span>
<span class="line"><span>[chris@krang] $ ls \${mountpoint}</span></span>
<span class="line"><span>bin   dev  home  lib64          media  opt   root  sbin  sys  usr</span></span>
<span class="line"><span>boot  etc  lib   lost+found  mnt        proc  run   srv   tmp  var</span></span></code></pre></div><p>这太棒了，你可以通过与挂载点交互对容器镜像进行修改。这允许你使用主机上的工具进行构建和安装软件，不用将这些构建工具打包到容器镜像本身中。例如，在我们上面的 Bash 脚本中，我们需要安装 tar、Gzip、GCC 和 make，在容器内编译 “GNU Hello”。如果使用挂载点，我仍使用同样的工具进行构建，但下载的压缩包和 tar、Gzip 等 RPM 包都在主机而不是容器和生成的镜像内：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set -o errexit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Create a container</span></span>
<span class="line"><span>container=$(buildah from fedora:28)</span></span>
<span class="line"><span>mountpoint=$(buildah mount $container)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildah config --label maintainer=&quot;Chris Collins &lt;collins.christopher@gmail.com&gt;&quot; $container</span></span>
<span class="line"><span></span></span>
<span class="line"><span>curl -sSL http://ftpmirror.gnu.org/hello/hello-2.10.tar.gz \\</span></span>
<span class="line"><span>     -o /tmp/hello-2.10.tar.gz</span></span>
<span class="line"><span>tar xvzf src/hello-2.10.tar.gz -C \${mountpoint}/opt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pushd \${mountpoint}/opt/hello-2.10</span></span>
<span class="line"><span>./configure</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>make install DESTDIR=\${mountpoint}</span></span>
<span class="line"><span>popd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chroot $mountpoint bash -c &quot;/usr/local/bin/hello -v&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildah config --entrypoint &quot;/usr/local/bin/hello&quot; $container</span></span>
<span class="line"><span>buildah commit --format docker $container hello</span></span>
<span class="line"><span>buildah unmount $container</span></span></code></pre></div><p>在上述脚本中，需要提到如下几点：</p><ol><li><code>curl</code> 命令将压缩包下载到主机中，而不是镜像中；</li><li>（主机中的） <code>tar</code> 命令将压缩包中的源代码解压到容器的 <code>/opt</code> 目录；</li><li><code>configure</code>，<code>make</code> 和 <code>make install</code> 命令都在主机的挂载点目录中执行，而不是在容器内；</li><li>这里的 <code>chroot</code> 命令用于将挂载点本身当作根路径并测试 &quot;hello&quot; 是否正常工作；类似于前面例子中用到的 <code>buildah run</code> 命令。</li></ol>`,18)),a("p",null,[n[22]||(n[22]=s("这个脚本更加短小，使用大多数 Linux 爱好者都很熟悉的工具，最后生成的镜像也更小（没有 tar 包，没有额外的软件包等）。你甚至可以使用主机系统上的包管理器为容器安装软件。例如，（出于某种原因）你希望安装 GNU Hello 的同时在容器中安装 ",-1)),i(l,{href:"https://www.nginx.com/"},{default:p(()=>[...n[21]||(n[21]=[s("NGINX",-1)])]),_:1}),n[23]||(n[23]=s("：",-1))]),n[49]||(n[49]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ mountpoint=$(sudo buildah mount \${container})</span></span>
<span class="line"><span>[chris@krang] $ sudo dnf install nginx --installroot $mountpoint</span></span>
<span class="line"><span>[chris@krang] $ sudo chroot $mountpoint nginx -v</span></span>
<span class="line"><span>nginx version: nginx/1.12.1</span></span></code></pre></div><p>在上面的例子中，DNF 使用 <code>--installroot</code> 参数将 NGINX 安装到容器中，可以通过 chroot 进行校验。</p><h3 id="快来试试吧" tabindex="-1">快来试试吧！ <a class="header-anchor" href="#快来试试吧" aria-label="Permalink to “快来试试吧！”">​</a></h3><p>Buildah 是一种轻量级、灵活的容器镜像构建方法，不需要在主机上运行完整的 Docker 守护进程。除了提供基于 Dockerfile 构建容器的开箱即用支持，Buildah 还可以很容易的与脚本或你喜欢的构建工具相结合，特别是可以使用主机上已有的工具构建容器镜像。Buildah 生成的容器体积更小，更便于网络传输，占用更小的存储空间，而且潜在的受攻击面更小。快来试试吧！</p>`,4)),a("p",null,[a("strong",null,[n[25]||(n[25]=s("[阅读相关的故事，",-1)),i(l,{href:"https://linux.cn/article-9719-1.html"},{default:p(()=>[...n[24]||(n[24]=[s("使用 Buildah 创建小体积的容器",-1)])]),_:1}),n[26]||(n[26]=s("]",-1))])]),n[50]||(n[50]=a("hr",null,null,-1)),a("p",null,[n[28]||(n[28]=s("via: ",-1)),i(l,{href:"https://opensource.com/article/18/6/getting-started-buildah"},{default:p(()=>[...n[27]||(n[27]=[s("https://opensource.com/article/18/6/getting-started-buildah",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("作者：",-1)),i(l,{href:"https://opensource.com/users/clcollins"},{default:p(()=>[...n[29]||(n[29]=[s("Chris Collins",-1)])]),_:1}),n[34]||(n[34]=s(" 选题：",-1)),i(l,{href:"https://github.com/lujun9972"},{default:p(()=>[...n[30]||(n[30]=[s("lujun9972",-1)])]),_:1}),n[35]||(n[35]=s(" 译者：",-1)),i(l,{href:"https://github.com/pinewall"},{default:p(()=>[...n[31]||(n[31]=[s("pinewall",-1)])]),_:1}),n[36]||(n[36]=s(" 校对：",-1)),i(l,{href:"https://github.com/wxy"},{default:p(()=>[...n[32]||(n[32]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[39]||(n[39]=s("本文由 ",-1)),i(l,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[37]||(n[37]=[s("LCTT",-1)])]),_:1}),n[40]||(n[40]=s(" 原创编译，",-1)),i(l,{href:"https://linux.cn/"},{default:p(()=>[...n[38]||(n[38]=[s("Linux中国",-1)])]),_:1}),n[41]||(n[41]=s(" 荣誉推出",-1))])])}const B=t(u,[["render",c]]);export{C as __pageData,B as default};
