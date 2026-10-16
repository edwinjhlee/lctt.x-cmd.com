import{_ as i,a0 as o,w as r,s as c,I as n,x as a,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"一次 Docker 镜像的逆向工程 | LCTT x X-CMD","titleTemplate":false,"description":"一次 Docker 镜像的逆向工程 | LCTT (202104) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一次 Docker 镜像的逆向工程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一次 Docker 镜像的逆向工程 | LCTT (202104) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202104/20210318 Reverse Engineering a Docker Image","title":"一次 Docker 镜像的逆向工程","tag":"202104","desc":""},"relativePath":"202104/20210318 Reverse Engineering a Docker Image.md","filePath":"[post].md"}'),d={name:"202104/20210318 Reverse Engineering a Docker Image.md"};function u(b,s,f,q,m,g){const p=o("Link");return r(),c("div",null,[s[32]||(s[32]=n("h1",{id:"一次-docker-镜像的逆向工程",tabindex:"-1"},[a("一次 Docker 镜像的逆向工程 "),n("a",{class:"header-anchor",href:"#一次-docker-镜像的逆向工程","aria-label":"Permalink to “一次 Docker 镜像的逆向工程”"},"​")],-1)),s[33]||(s[33]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202104/01/215523oajrgjo77irb7nun.jpg",alt:""})],-1)),s[34]||(s[34]=n("p",null,"这要从一次咨询的失误说起：政府组织 A 让政府组织 B 开发一个 Web 应用程序。政府机构 B 把部分工作外包给某个人。后来，项目的托管和维护被外包给一家私人公司 C。C 公司发现，之前外包的人（已经离开很久了）构建了一个自定义的 Docker 镜像，并将其成为系统构建的依赖项，但这个人没有提交原始的 Dockerfile。C 公司有合同义务管理这个 Docker 镜像，可是他们他们没有源代码。C 公司偶尔叫我进去做各种工作，所以处理一些关于这个神秘 Docker 镜像的事情就成了我的工作。",-1)),n("p",null,[s[1]||(s[1]=a("幸运的是，Docker 镜像的格式比想象的透明多了。虽然还需要做一些侦查工作，但只要解剖一个镜像文件，就能发现很多东西。例如，这里有一个 ",-1)),e(p,{href:"https://github.com/tmknom/prettier"},{default:l(()=>[...s[0]||(s[0]=[a("Prettier 代码格式化",-1)])]),_:1}),s[2]||(s[2]=a(" 的镜像可供快速浏览。",-1))]),s[35]||(s[35]=t(`<p>首先，让 Docker <ruby>守护进程<rt>daemon</rt></ruby>拉取镜像，然后将镜像提取到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker pull tmknom/prettier:2.0.5</span></span>
<span class="line"><span>docker save tmknom/prettier:2.0.5 &gt; prettier.tar</span></span></code></pre></div><p>是的，该文件只是一个典型 tarball 格式的归档文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar xvf prettier.tar</span></span>
<span class="line"><span>6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/</span></span>
<span class="line"><span>6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/VERSION</span></span>
<span class="line"><span>6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/json</span></span>
<span class="line"><span>6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/layer.tar</span></span>
<span class="line"><span>88f38be28f05f38dba94ce0c1328ebe2b963b65848ab96594f8172a9c3b0f25b.json</span></span>
<span class="line"><span>a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/</span></span>
<span class="line"><span>a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/VERSION</span></span>
<span class="line"><span>a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/json</span></span>
<span class="line"><span>a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/layer.tar</span></span>
<span class="line"><span>d4f612de5397f1fc91272cfbad245b89eac8fa4ad9f0fc10a40ffbb54a356cb4/</span></span>
<span class="line"><span>d4f612de5397f1fc91272cfbad245b89eac8fa4ad9f0fc10a40ffbb54a356cb4/VERSION</span></span>
<span class="line"><span>d4f612de5397f1fc91272cfbad245b89eac8fa4ad9f0fc10a40ffbb54a356cb4/json</span></span>
<span class="line"><span>d4f612de5397f1fc91272cfbad245b89eac8fa4ad9f0fc10a40ffbb54a356cb4/layer.tar</span></span>
<span class="line"><span>manifest.json</span></span>
<span class="line"><span>repositories</span></span></code></pre></div>`,4)),n("p",null,[s[4]||(s[4]=a("如你所见，Docker 在命名时经常使用",-1)),s[5]||(s[5]=n("ruby",null,[a("哈希"),n("rt",null,"hash")],-1)),s[6]||(s[6]=a("。我们看看 ",-1)),s[7]||(s[7]=n("code",null,"manifest.json",-1)),s[8]||(s[8]=a("。它是以难以阅读的压缩 JSON 写的，不过 ",-1)),e(p,{href:"https://stedolan.github.io/jq/"},{default:l(()=>[...s[3]||(s[3]=[a("JSON 瑞士军刀 jq",-1)])]),_:1}),s[9]||(s[9]=a(" 可以很好地打印 JSON：",-1))]),s[36]||(s[36]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jq . manifest.json</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;Config&quot;: &quot;88f38be28f05f38dba94ce0c1328ebe2b963b65848ab96594f8172a9c3b0f25b.json&quot;,</span></span>
<span class="line"><span>    &quot;RepoTags&quot;: [</span></span>
<span class="line"><span>      &quot;tmknom/prettier:2.0.5&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;Layers&quot;: [</span></span>
<span class="line"><span>      &quot;a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/layer.tar&quot;,</span></span>
<span class="line"><span>      &quot;d4f612de5397f1fc91272cfbad245b89eac8fa4ad9f0fc10a40ffbb54a356cb4/layer.tar&quot;,</span></span>
<span class="line"><span>      &quot;6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/layer.tar&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>请注意，这三个<ruby>层<rt>Layer</rt></ruby>对应三个以哈希命名的目录。我们以后再看。现在，让我们看看 <code>Config</code> 键指向的 JSON 文件。它有点长，所以我只在这里转储第一部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jq . 88f38be28f05f38dba94ce0c1328ebe2b963b65848ab96594f8172a9c3b0f25b.json | head -n 20</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;architecture&quot;: &quot;amd64&quot;,</span></span>
<span class="line"><span>  &quot;config&quot;: {</span></span>
<span class="line"><span>    &quot;Hostname&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;Domainname&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;User&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;AttachStdin&quot;: false,</span></span>
<span class="line"><span>    &quot;AttachStdout&quot;: false,</span></span>
<span class="line"><span>    &quot;AttachStderr&quot;: false,</span></span>
<span class="line"><span>    &quot;Tty&quot;: false,</span></span>
<span class="line"><span>    &quot;OpenStdin&quot;: false,</span></span>
<span class="line"><span>    &quot;StdinOnce&quot;: false,</span></span>
<span class="line"><span>    &quot;Env&quot;: [</span></span>
<span class="line"><span>      &quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;Cmd&quot;: [</span></span>
<span class="line"><span>      &quot;--help&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;ArgsEscaped&quot;: true,</span></span>
<span class="line"><span>    &quot;Image&quot;: &quot;sha256:93e72874b338c1e0734025e1d8ebe259d4f16265dc2840f88c4c754e1c01ba0a&quot;,</span></span></code></pre></div><p>最重要的是 <code>history</code> 列表，它列出了镜像中的每一层。Docker 镜像由这些层堆叠而成。Dockerfile 中几乎每条命令都会变成一个层，描述该命令对镜像所做的更改。如果你执行 <code>RUN script.sh</code> 命令创建了 <code>really_big_file</code>，然后用 <code>RUN rm really_big_file</code> 命令删除文件，Docker 镜像实际生成两层：一个包含 <code>really_big_file</code>，一个包含 <code>.wh.really_big_file</code> 记录来删除它。整个镜像文件大小不变。这就是为什么你会经常看到像 <code>RUN script.sh &amp;&amp; rm really_big_file</code> 这样的 Dockerfile 命令链接在一起——它保障所有更改都合并到一层中。</p><p>以下是该 Docker 镜像中记录的所有层。注意，大多数层不改变文件系统镜像，并且 <code>empty_layer</code> 标记为 <code>true</code>。以下只有三个层是非空的，与我们之前描述的相符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jq .history 88f38be28f05f38dba94ce0c1328ebe2b963b65848ab96594f8172a9c3b0f25b.json</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-24T01:05:03.608058404Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop) ADD file:b91adb67b670d3a6ff9463e48b7def903ed516be66fc4282d22c53e41512be49 in / &quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-24T01:05:03.92860976Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  CMD [\\&quot;/bin/sh\\&quot;]&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:06.617130538Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ARG BUILD_DATE&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:07.020521808Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ARG VCS_REF&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:07.36915054Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ARG VERSION&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:07.708820086Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ARG REPO_NAME&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:08.06429638Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  LABEL org.label-schema.vendor=tmknom org.label-schema.name=tmknom/prettier org.label-schema.description=Prettier is an opinionated code formatter. org.label-schema.build-date=2020-04-29T06:34:01Z org</span></span>
<span class="line"><span>.label-schema.version=2.0.5 org.label-schema.vcs-ref=35d2587 org.label-schema.vcs-url=https://github.com/tmknom/prettier org.label-schema.usage=https://github.com/tmknom/prettier/blob/master/README.md#usage org.label-schema.docker.cmd=do</span></span>
<span class="line"><span>cker run --rm -v $PWD:/work tmknom/prettier --parser=markdown --write &#39;**/*.md&#39; org.label-schema.schema-version=1.0&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:08.511269907Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ARG NODEJS_VERSION=12.15.0-r1&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:08.775876657Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ARG PRETTIER_VERSION&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:26.399622951Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;|6 BUILD_DATE=2020-04-29T06:34:01Z NODEJS_VERSION=12.15.0-r1 PRETTIER_VERSION=2.0.5 REPO_NAME=tmknom/prettier VCS_REF=35d2587 VERSION=2.0.5 /bin/sh -c set -x &amp;&amp;     apk add --no-cache nodejs=\${NODEJS_VERSION} nodejs-np</span></span>
<span class="line"><span>m=\${NODEJS_VERSION} &amp;&amp;     npm install -g prettier@\${PRETTIER_VERSION} &amp;&amp;     npm cache clean --force &amp;&amp;     apk del nodejs-npm&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:26.764034848Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop) WORKDIR /work&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:27.092671047Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  ENTRYPOINT [\\&quot;/usr/bin/prettier\\&quot;]&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    &quot;created&quot;: &quot;2020-04-29T06:34:27.406606712Z&quot;,</span></span>
<span class="line"><span>    &quot;created_by&quot;: &quot;/bin/sh -c #(nop)  CMD [\\&quot;--help\\&quot;]&quot;,</span></span>
<span class="line"><span>    &quot;empty_layer&quot;: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>太棒了！所有的命令都在 <code>created_by</code> 字段中，我们几乎可以用这些命令重建 Dockerfile。但不是完全可以。最上面的 <code>ADD</code> 命令实际上没有给我们需要添加的文件。<code>COPY</code> 命令也没有全部信息。我们还失去了 <code>FROM</code> 语句，因为它们扩展成了从基础 Docker 镜像继承的所有层。</p><p>我们可以通过查看<ruby>时间戳<rt>timestamp</rt></ruby>，按 Dockerfile 对层进行分组。大多数层的时间戳相差不到一分钟，代表每一层构建所需的时间。但是前两层是 <code>2020-04-24</code>，其余的是 <code>2020-04-29</code>。这是因为前两层来自一个基础 Docker 镜像。理想情况下，我们可以找出一个 <code>FROM</code> 命令来获得这个镜像，这样我们就有了一个可维护的 Dockerfile。</p><p><code>manifest.json</code> 展示第一个非空层是 <code>a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/layer.tar</code>。让我们看看它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/</span></span>
<span class="line"><span>$ tar tf layer.tf | head</span></span>
<span class="line"><span>bin/</span></span>
<span class="line"><span>bin/arch</span></span>
<span class="line"><span>bin/ash</span></span>
<span class="line"><span>bin/base64</span></span>
<span class="line"><span>bin/bbconfig</span></span>
<span class="line"><span>bin/busybox</span></span>
<span class="line"><span>bin/cat</span></span>
<span class="line"><span>bin/chgrp</span></span>
<span class="line"><span>bin/chmod</span></span>
<span class="line"><span>bin/chown</span></span></code></pre></div><p>看起来它可能是一个<ruby>操作系统<rt>operating system</rt></ruby>基础镜像，这也是你期望从典型 Dockerfile 中看到的。Tarball 中有 488 个条目，如果你浏览一下，就会发现一些有趣的条目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>dev/</span></span>
<span class="line"><span>etc/</span></span>
<span class="line"><span>etc/alpine-release</span></span>
<span class="line"><span>etc/apk/</span></span>
<span class="line"><span>etc/apk/arch</span></span>
<span class="line"><span>etc/apk/keys/</span></span>
<span class="line"><span>etc/apk/keys/alpine-devel@lists.alpinelinux.org-4a6a0840.rsa.pub</span></span>
<span class="line"><span>etc/apk/keys/alpine-devel@lists.alpinelinux.org-5243ef4b.rsa.pub</span></span>
<span class="line"><span>etc/apk/keys/alpine-devel@lists.alpinelinux.org-5261cecb.rsa.pub</span></span>
<span class="line"><span>etc/apk/protected_paths.d/</span></span>
<span class="line"><span>etc/apk/repositories</span></span>
<span class="line"><span>etc/apk/world</span></span>
<span class="line"><span>etc/conf.d/</span></span>
<span class="line"><span>...</span></span></code></pre></div>`,12)),n("p",null,[s[11]||(s[11]=a("果不其然，这是一个 ",-1)),e(p,{href:"https://www.alpinelinux.org/"},{default:l(()=>[...s[10]||(s[10]=[a("Alpine",-1)])]),_:1}),s[12]||(s[12]=a(" 镜像，如果你注意到其他层使用 ",-1)),s[13]||(s[13]=n("code",null,"apk",-1)),s[14]||(s[14]=a(" 命令安装软件包，你可能已经猜到了。让我们解压 tarball 看看：",-1))]),s[37]||(s[37]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir files</span></span>
<span class="line"><span>$ cd files</span></span>
<span class="line"><span>$ tar xf ../layer.tar</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>bin  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var</span></span>
<span class="line"><span>$ cat etc/alpine-release</span></span>
<span class="line"><span>3.11.6</span></span></code></pre></div><p>如果你拉取、解压 <code>alpine:3.11.6</code>，你会发现里面有一个非空层，<code>layer.tar</code> 与 Prettier 镜像基础层中的 <code>layer.tar</code> 是一样的。</p><p>出于兴趣，另外两个非空层是什么？第二层是包含 Prettier 安装包的主层。它有 528 个条目，包含 Prettier、一堆依赖项和证书更新：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
<span class="line"><span>usr/lib/libuv.so.1</span></span>
<span class="line"><span>usr/lib/libuv.so.1.0.0</span></span>
<span class="line"><span>usr/lib/node_modules/</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/LICENSE</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/README.md</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/bin-prettier.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/doc.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/index.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/package.json</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-angular.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-babel.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-flow.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-glimmer.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-graphql.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-html.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-markdown.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-postcss.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-typescript.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/parser-yaml.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/standalone.js</span></span>
<span class="line"><span>usr/lib/node_modules/prettier/third-party.js</span></span>
<span class="line"><span>usr/local/</span></span>
<span class="line"><span>usr/local/share/</span></span>
<span class="line"><span>usr/local/share/ca-certificates/</span></span>
<span class="line"><span>usr/sbin/</span></span>
<span class="line"><span>usr/sbin/update-ca-certificates</span></span>
<span class="line"><span>usr/share/</span></span>
<span class="line"><span>usr/share/ca-certificates/</span></span>
<span class="line"><span>usr/share/ca-certificates/mozilla/</span></span>
<span class="line"><span>usr/share/ca-certificates/mozilla/ACCVRAIZ1.crt</span></span>
<span class="line"><span>usr/share/ca-certificates/mozilla/AC_RAIZ_FNMT-RCM.crt</span></span>
<span class="line"><span>usr/share/ca-certificates/mozilla/Actalis_Authentication_Root_CA.crt</span></span>
<span class="line"><span>...</span></span></code></pre></div><p>第三层由 <code>WORKDIR /work</code> 命令创建，它只包含一个条目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar tf 6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/layer.tar</span></span>
<span class="line"><span>work/</span></span></code></pre></div>`,6)),n("p",null,[e(p,{href:"https://github.com/tmknom/prettier/blob/35d2587ec052e880d73f73547f1ffc2b11e29597/Dockerfile"},{default:l(()=>[...s[15]||(s[15]=[a("原始 Dockerfile 在 Prettier 的 git 仓库中",-1)])]),_:1}),s[16]||(s[16]=a("。",-1))]),s[38]||(s[38]=n("hr",null,null,-1)),n("p",null,[s[18]||(s[18]=a("via: ",-1)),e(p,{href:"https://theartofmachinery.com/2021/03/18/reverse_engineering_a_docker_image.html"},{default:l(()=>[...s[17]||(s[17]=[a("https://theartofmachinery.com/2021/03/18/reverse_engineering_a_docker_image.html",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("作者：",-1)),e(p,{href:"https://theartofmachinery.com"},{default:l(()=>[...s[19]||(s[19]=[a("Simon Arneaud",-1)])]),_:1}),s[24]||(s[24]=a(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[20]||(s[20]=[a("lujun9972",-1)])]),_:1}),s[25]||(s[25]=a(" 译者：",-1)),e(p,{href:"https://github.com/DCOLIVERSUN"},{default:l(()=>[...s[21]||(s[21]=[a("DCOLIVERSUN",-1)])]),_:1}),s[26]||(s[26]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[22]||(s[22]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[29]||(s[29]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[27]||(s[27]=[a("LCTT",-1)])]),_:1}),s[30]||(s[30]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[28]||(s[28]=[a("Linux中国",-1)])]),_:1}),s[31]||(s[31]=a(" 荣誉推出",-1))])])}const _=i(d,[["render",u]]);export{y as __pageData,_ as default};
