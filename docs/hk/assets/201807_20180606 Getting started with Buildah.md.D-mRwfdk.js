import{_ as t,a0 as o,w as r,s as d,I as a,x as s,a1 as i,A as p,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Buildah 入門 | LCTT x X-CMD","titleTemplate":false,"description":"Buildah 入門 | LCTT (201807) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Buildah 入門 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Buildah 入門 | LCTT (201807) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201807/20180606 Getting started with Buildah","title":"Buildah 入門","tag":"201807","desc":""},"relativePath":"201807/20180606 Getting started with Buildah.md","filePath":"[post].md"}'),u={name:"201807/20180606 Getting started with Buildah.md"};function c(h,n,b,g,f,k){const l=o("Link");return r(),d("div",null,[n[42]||(n[42]=a("h1",{id:"buildah-入門",tabindex:"-1"},[s("Buildah 入門 "),a("a",{class:"header-anchor",href:"#buildah-入門","aria-label":"Permalink to “Buildah 入門”"},"​")],-1)),n[43]||(n[43]=a("blockquote",null,[a("p",null,"Buildah 提供一種靈活、可腳本編程的方式，來使用你熟悉的工具創建精簡、高效的容器鏡像。")],-1)),n[44]||(n[44]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/blocks_building.png?itok=eMOT-ire",alt:""})],-1)),a("p",null,[i(l,{href:"https://github.com/projectatomic/buildah"},{default:p(()=>[...n[0]||(n[0]=[s("Buildah",-1)])]),_:1}),n[3]||(n[3]=s(" 是一個命令列工具，可以方便、快捷的構建與",-1)),a("ruby",null,[i(l,{href:"https://www.opencontainers.org/"},{default:p(()=>[...n[1]||(n[1]=[s("開放容器標準",-1)])]),_:1}),n[2]||(n[2]=a("rt",null,"Open Container Initiative",-1))]),n[4]||(n[4]=s("（OCI）兼容的容器鏡像，這意味着其構建的鏡像與 Docker 和 Kubernetes 兼容。該工具可作為 Docker 守護進程 ",-1)),n[5]||(n[5]=a("code",null,"docker build",-1)),n[6]||(n[6]=s(" 命令（即使用傳統的 Dockerfile 構建鏡像）的一種",-1)),n[7]||(n[7]=a("ruby",null,[s("簡單"),a("rt",null,"drop-in")],-1)),n[8]||(n[8]=s("替換，而且更加靈活，允許構建鏡像時使用你擅長的工具。Buildah 可以輕鬆與腳本集成並生成",-1)),n[9]||(n[9]=a("ruby",null,[s("流水線"),a("rt",null,"pipeline")],-1)),n[10]||(n[10]=s("，最好之處在於構建鏡像不再需要運行容器守護進程（LCTT 譯註：這裏主要是指 Docker 守護進程）。",-1))]),n[45]||(n[45]=a("h3",{id:"docker-build-的簡單替換",tabindex:"-1"},[s("docker build 的簡單替換 "),a("a",{class:"header-anchor",href:"#docker-build-的簡單替換","aria-label":"Permalink to “docker build 的簡單替換”"},"​")],-1)),n[46]||(n[46]=a("p",null,[s("目前你可能使用 Dockerfile 和 "),a("code",null,"docker build"),s(" 命令構建鏡像，那麼你可以馬上使用 Buildah 進行替代。Buildah 的 "),a("code",null,"build-using-dockerfile"),s(" （或 "),a("code",null,"bud"),s("）子命令與 "),a("code",null,"docker build"),s(" 基本等價，因此可以輕鬆的與已有腳本結合或構建流水線。")],-1)),a("p",null,[n[12]||(n[12]=s("類似我的上一篇關於 Buildah 的",-1)),i(l,{href:"http://chris.collins.is/2017/08/17/buildah-a-new-way-to-build-container-images/"},{default:p(()=>[...n[11]||(n[11]=[s("文章",-1)])]),_:1}),n[13]||(n[13]=s("，我也將以使用源碼安裝 “GNU Hello” 為例進行説明，對應的 Dockerfile 文件如下：",-1))]),n[47]||(n[47]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>FROM fedora:28</span></span>
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
<span class="line"><span>ENTRYPOINT &quot;/usr/local/bin/hello&quot;</span></span></code></pre></div><p>使用 Buildah 從 Dockerfile 構建鏡像也很簡單，使用 <code>buildah bud -t hello .</code> 替換 <code>docker build -t hello .</code> 即可：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ sudo buildah bud -t hello .</span></span>
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
<span class="line"><span>&lt;考慮篇幅，略去後續輸出&gt;</span></span></code></pre></div><p>鏡像構建完畢後，可以使用 <code>buildah images</code> 命令查看這個新鏡像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ sudo buildah images</span></span>
<span class="line"><span>IMAGE ID        IMAGE NAME                              CREATED AT              SIZE</span></span>
<span class="line"><span>30190780b56e    docker.io/library/fedora:28             Mar 7, 2018 16:53       247 MB</span></span>
<span class="line"><span>6d54bef73e63    docker.io/library/hello:latest    May 3, 2018 15:24     391.8 MB</span></span></code></pre></div>`,5)),a("p",null,[n[15]||(n[15]=s("新鏡像的標籤為 ",-1)),n[16]||(n[16]=a("code",null,"hello:latest",-1)),n[17]||(n[17]=s("，我們可以將其推送至遠程鏡像倉庫，可以使用 ",-1)),i(l,{href:"http://cri-o.io/"},{default:p(()=>[...n[14]||(n[14]=[s("CRI-O",-1)])]),_:1}),n[18]||(n[18]=s(" 或其它 Kubernetes CRI 兼容的運行時來運行該鏡像，也可以推送到遠程倉庫。如果你要測試對 Docker build 命令的替代性，你可以將鏡像拷貝至 docker 守護進程的本地鏡像存儲中，這樣 Docker 也可以使用該鏡像。使用 ",-1)),n[19]||(n[19]=a("code",null,"buildah push",-1)),n[20]||(n[20]=s(" 可以很容易的完成推送操作：",-1))]),n[48]||(n[48]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ sudo buildah push hello:latest docker-daemon:hello:latest</span></span>
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
<span class="line"><span>Hello, world!</span></span></code></pre></div><h3 id="若干差異" tabindex="-1">若干差異 <a class="header-anchor" href="#若干差異" aria-label="Permalink to “若干差異”">​</a></h3><p>與 Docker build 不同，Buildah 不會自動的將 Dockerfile 中的每條指令產生的變更提到新的<ruby>分層<rt>layer</rt></ruby>中，只是簡單的每次從頭到尾執行構建。類似於<ruby>自動化<rt>automation</rt></ruby>和<ruby>流水線構建<rt>build pipeline</rt></ruby>，這種<ruby>無緩存構建<rt>non-cached</rt></ruby>方式的好處是可以提高構建速度，在指令較多時尤為明顯。從<ruby>自動部署<rt>automated deployment</rt></ruby>或<ruby>持續交付<rt>continuous delivery</rt></ruby>的視角來看，使用這種方式可以快速的將新變更落實到生產環境中。</p><p>但從實際角度出發，緩存機制的缺乏對鏡像開發不利，畢竟緩存層可以避免一遍遍的執行構建，從而顯著的節省時間。自動分層只在 <code>build-using-dockerfile</code> 命令中生效。但我們在下面會看到，Buildah 原生命令允許我們選擇將變更提交到硬盤的時間，提高了開發的靈活性。</p><h3 id="buildah-原生命令" tabindex="-1">Buildah 原生命令 <a class="header-anchor" href="#buildah-原生命令" aria-label="Permalink to “Buildah 原生命令”">​</a></h3><p>Buildah <em>真正</em> 有趣之處在於它的原生命令，你可以在容器構建過程中使用這些命令進行交互。相比與使用 <code>build-using-dockerfile/bud</code> 命令執行每次構建，Buildah 提供命令讓你可以與構建過程中的臨時容器進行交互。（Docker 也使用臨時或<ruby><em>中間</em> <rt>intermediate</rt></ruby>容器，但你無法在鏡像構建過程中與其交互。）</p><p>還是使用 “GNU Hello” 為例，考慮使用如下 Buildah 命令構建的鏡像：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span>buildah commit --format docker $container hello:latest</span></span></code></pre></div><p>我們可以一眼看出這是一個 Bash 腳本而不是 Dockerfile。基於 Buildah 的原生命令，可以輕易的使用任何腳本語言或你擅長的自動化工具編寫腳本。形式可以是 makefile、Python 腳本或其它你擅長的類型。</p><p>這個腳本做了哪些工作呢？首先，Buildah 命令 <code>container=$(buildah from fedora:28)</code> 基於 fedora:28 鏡像創建了一個正在運行的容器，將容器名（<code>buildah from</code> 命令的返回值）保存到變量中，便於後續使用。後續所有命令都是有 <code>$container</code> 變量指明需要操作的容器。這些命令的功能大多可以從名稱看出：<code>buildah copy</code> 將文件拷貝至容器，<code>buildah run</code> 會在容器中執行命令。可以很容易的將上述命令與 Dockerfile 中的指令對應起來。</p><p>最後一條命令 <code>buildah commit</code> 將容器提交到硬盤上的鏡像中。當不使用 Dockerfile 而是使用 Buildah 命令構建鏡像時，你可以使用 <code>commit</code> 命令決定何時保存變更。在上例中，所有的變更是一起提交的；但也可以增加中間提交，讓你可以選擇作為起點的<ruby>緩存點<rt>cache point</rt></ruby>。（例如，執行完 <code>dnf install</code> 命令後將變更緩存到硬盤是特別有意義的，一方面因為該操作耗時較長，另一方面每次執行的結果也確實相同。）</p><h3 id="掛載點-安裝目錄以及-chroot" tabindex="-1">掛載點，安裝目錄以及 chroot <a class="header-anchor" href="#掛載點-安裝目錄以及-chroot" aria-label="Permalink to “掛載點，安裝目錄以及 chroot”">​</a></h3><p>另一個可以大大增加構建鏡像靈活性的 Buildah 命令是 <code>buildah mount</code>，可以將容器的根目錄掛載到你主機的一個掛載點上。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ container=$(sudo buildah from fedora:28)</span></span>
<span class="line"><span>[chris@krang] $ mountpoint=$(sudo buildah mount \${container})</span></span>
<span class="line"><span>[chris@krang] $ echo $mountpoint</span></span>
<span class="line"><span>/var/lib/containers/storage/overlay2/463eda71ec74713d8cebbe41ee07da5f6df41c636f65139a7bd17b24a0e845e3/merged</span></span>
<span class="line"><span>[chris@krang] $ cat \${mountpoint}/etc/redhat-release</span></span>
<span class="line"><span>Fedora release 28 (Twenty Eight)</span></span>
<span class="line"><span>[chris@krang] $ ls \${mountpoint}</span></span>
<span class="line"><span>bin   dev  home  lib64          media  opt   root  sbin  sys  usr</span></span>
<span class="line"><span>boot  etc  lib   lost+found  mnt        proc  run   srv   tmp  var</span></span></code></pre></div><p>這太棒了，你可以通過與掛載點交互對容器鏡像進行修改。這允許你使用主機上的工具進行構建和安裝軟件，不用將這些構建工具打包到容器鏡像本身中。例如，在我們上面的 Bash 腳本中，我們需要安裝 tar、Gzip、GCC 和 make，在容器內編譯 “GNU Hello”。如果使用掛載點，我仍使用同樣的工具進行構建，但下載的壓縮包和 tar、Gzip 等 RPM 包都在主機而不是容器和生成的鏡像內：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span>buildah unmount $container</span></span></code></pre></div><p>在上述腳本中，需要提到如下幾點：</p><ol><li><code>curl</code> 命令將壓縮包下載到主機中，而不是鏡像中；</li><li>（主機中的） <code>tar</code> 命令將壓縮包中的源代碼解壓到容器的 <code>/opt</code> 目錄；</li><li><code>configure</code>，<code>make</code> 和 <code>make install</code> 命令都在主機的掛載點目錄中執行，而不是在容器內；</li><li>這裏的 <code>chroot</code> 命令用於將掛載點本身當作根路徑並測試 &quot;hello&quot; 是否正常工作；類似於前面例子中用到的 <code>buildah run</code> 命令。</li></ol>`,18)),a("p",null,[n[22]||(n[22]=s("這個腳本更加短小，使用大多數 Linux 愛好者都很熟悉的工具，最後生成的鏡像也更小（沒有 tar 包，沒有額外的軟件包等）。你甚至可以使用主機系統上的包管理器為容器安裝軟件。例如，（出於某種原因）你希望安裝 GNU Hello 的同時在容器中安裝 ",-1)),i(l,{href:"https://www.nginx.com/"},{default:p(()=>[...n[21]||(n[21]=[s("NGINX",-1)])]),_:1}),n[23]||(n[23]=s("：",-1))]),n[49]||(n[49]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@krang] $ mountpoint=$(sudo buildah mount \${container})</span></span>
<span class="line"><span>[chris@krang] $ sudo dnf install nginx --installroot $mountpoint</span></span>
<span class="line"><span>[chris@krang] $ sudo chroot $mountpoint nginx -v</span></span>
<span class="line"><span>nginx version: nginx/1.12.1</span></span></code></pre></div><p>在上面的例子中，DNF 使用 <code>--installroot</code> 參數將 NGINX 安裝到容器中，可以通過 chroot 進行校驗。</p><h3 id="快來試試吧" tabindex="-1">快來試試吧！ <a class="header-anchor" href="#快來試試吧" aria-label="Permalink to “快來試試吧！”">​</a></h3><p>Buildah 是一種輕量級、靈活的容器鏡像構建方法，不需要在主機上運行完整的 Docker 守護進程。除了提供基於 Dockerfile 構建容器的開箱即用支持，Buildah 還可以很容易的與腳本或你喜歡的構建工具相結合，特別是可以使用主機上已有的工具構建容器鏡像。Buildah 生成的容器體積更小，更便於網絡傳輸，佔用更小的存儲空間，而且潛在的受攻擊面更小。快來試試吧！</p>`,4)),a("p",null,[a("strong",null,[n[25]||(n[25]=s("[閲讀相關的故事，",-1)),i(l,{href:"https://linux.cn/article-9719-1.html"},{default:p(()=>[...n[24]||(n[24]=[s("使用 Buildah 創建小體積的容器",-1)])]),_:1}),n[26]||(n[26]=s("]",-1))])]),n[50]||(n[50]=a("hr",null,null,-1)),a("p",null,[n[28]||(n[28]=s("via: ",-1)),i(l,{href:"https://opensource.com/article/18/6/getting-started-buildah"},{default:p(()=>[...n[27]||(n[27]=[s("https://opensource.com/article/18/6/getting-started-buildah",-1)])]),_:1})]),a("p",null,[n[33]||(n[33]=s("作者：",-1)),i(l,{href:"https://opensource.com/users/clcollins"},{default:p(()=>[...n[29]||(n[29]=[s("Chris Collins",-1)])]),_:1}),n[34]||(n[34]=s(" 選題：",-1)),i(l,{href:"https://github.com/lujun9972"},{default:p(()=>[...n[30]||(n[30]=[s("lujun9972",-1)])]),_:1}),n[35]||(n[35]=s(" 譯者：",-1)),i(l,{href:"https://github.com/pinewall"},{default:p(()=>[...n[31]||(n[31]=[s("pinewall",-1)])]),_:1}),n[36]||(n[36]=s(" 校對：",-1)),i(l,{href:"https://github.com/wxy"},{default:p(()=>[...n[32]||(n[32]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[39]||(n[39]=s("本文由 ",-1)),i(l,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...n[37]||(n[37]=[s("LCTT",-1)])]),_:1}),n[40]||(n[40]=s(" 原創編譯，",-1)),i(l,{href:"https://linux.cn/"},{default:p(()=>[...n[38]||(n[38]=[s("Linux中國",-1)])]),_:1}),n[41]||(n[41]=s(" 榮譽推出",-1))])])}const B=t(u,[["render",c]]);export{C as __pageData,B as default};
