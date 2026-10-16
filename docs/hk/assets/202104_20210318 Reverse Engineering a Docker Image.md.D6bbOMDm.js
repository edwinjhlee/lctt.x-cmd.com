import{_ as i,a0 as o,w as r,s as c,I as n,x as a,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"一次 Docker 鏡像的逆向工程 | LCTT x X-CMD","titleTemplate":false,"description":"一次 Docker 鏡像的逆向工程 | LCTT (202104) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"一次 Docker 鏡像的逆向工程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"一次 Docker 鏡像的逆向工程 | LCTT (202104) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202104/20210318 Reverse Engineering a Docker Image","title":"一次 Docker 鏡像的逆向工程","tag":"202104","desc":""},"relativePath":"202104/20210318 Reverse Engineering a Docker Image.md","filePath":"[post].md"}'),d={name:"202104/20210318 Reverse Engineering a Docker Image.md"};function u(b,s,f,q,m,g){const p=o("Link");return r(),c("div",null,[s[32]||(s[32]=n("h1",{id:"一次-docker-鏡像的逆向工程",tabindex:"-1"},[a("一次 Docker 鏡像的逆向工程 "),n("a",{class:"header-anchor",href:"#一次-docker-鏡像的逆向工程","aria-label":"Permalink to “一次 Docker 鏡像的逆向工程”"},"​")],-1)),s[33]||(s[33]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202104/01/215523oajrgjo77irb7nun.jpg",alt:""})],-1)),s[34]||(s[34]=n("p",null,"這要從一次諮詢的失誤説起：政府組織 A 讓政府組織 B 開發一個 Web 應用程序。政府機構 B 把部分工作外包給某個人。後來，項目的託管和維護被外包給一傢俬人公司 C。C 公司發現，之前外包的人（已經離開很久了）構建了一個自定義的 Docker 鏡像，並將其成為系統構建的依賴項，但這個人沒有提交原始的 Dockerfile。C 公司有合同義務管理這個 Docker 鏡像，可是他們他們沒有源代碼。C 公司偶爾叫我進去做各種工作，所以處理一些關於這個神秘 Docker 鏡像的事情就成了我的工作。",-1)),n("p",null,[s[1]||(s[1]=a("幸運的是，Docker 鏡像的格式比想像的透明多了。雖然還需要做一些偵查工作，但只要解剖一個鏡像文件，就能發現很多東西。例如，這裏有一個 ",-1)),e(p,{href:"https://github.com/tmknom/prettier"},{default:l(()=>[...s[0]||(s[0]=[a("Prettier 代碼格式化",-1)])]),_:1}),s[2]||(s[2]=a(" 的鏡像可供快速瀏覽。",-1))]),s[35]||(s[35]=t(`<p>首先，讓 Docker <ruby>守護進程<rt>daemon</rt></ruby>拉取鏡像，然後將鏡像提取到文件中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>docker pull tmknom/prettier:2.0.5</span></span>
<span class="line"><span>docker save tmknom/prettier:2.0.5 &gt; prettier.tar</span></span></code></pre></div><p>是的，該文件只是一個典型 tarball 格式的歸檔文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar xvf prettier.tar</span></span>
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
<span class="line"><span>repositories</span></span></code></pre></div>`,4)),n("p",null,[s[4]||(s[4]=a("如你所見，Docker 在命名時經常使用",-1)),s[5]||(s[5]=n("ruby",null,[a("哈希"),n("rt",null,"hash")],-1)),s[6]||(s[6]=a("。我們看看 ",-1)),s[7]||(s[7]=n("code",null,"manifest.json",-1)),s[8]||(s[8]=a("。它是以難以閲讀的壓縮 JSON 寫的，不過 ",-1)),e(p,{href:"https://stedolan.github.io/jq/"},{default:l(()=>[...s[3]||(s[3]=[a("JSON 瑞士軍刀 jq",-1)])]),_:1}),s[9]||(s[9]=a(" 可以很好地打印 JSON：",-1))]),s[36]||(s[36]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jq . manifest.json</span></span>
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
<span class="line"><span>]</span></span></code></pre></div><p>請注意，這三個<ruby>層<rt>Layer</rt></ruby>對應三個以哈希命名的目錄。我們以後再看。現在，讓我們看看 <code>Config</code> 鍵指向的 JSON 文件。它有點長，所以我只在這裏轉儲第一部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jq . 88f38be28f05f38dba94ce0c1328ebe2b963b65848ab96594f8172a9c3b0f25b.json | head -n 20</span></span>
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
<span class="line"><span>    &quot;Image&quot;: &quot;sha256:93e72874b338c1e0734025e1d8ebe259d4f16265dc2840f88c4c754e1c01ba0a&quot;,</span></span></code></pre></div><p>最重要的是 <code>history</code> 列表，它列出了鏡像中的每一層。Docker 鏡像由這些層堆疊而成。Dockerfile 中幾乎每條命令都會變成一個層，描述該命令對鏡像所做的更改。如果你執行 <code>RUN script.sh</code> 命令創建了 <code>really_big_file</code>，然後用 <code>RUN rm really_big_file</code> 命令刪除文件，Docker 鏡像實際生成兩層：一個包含 <code>really_big_file</code>，一個包含 <code>.wh.really_big_file</code> 記錄來刪除它。整個鏡像文件大小不變。這就是為什麼你會經常看到像 <code>RUN script.sh &amp;&amp; rm really_big_file</code> 這樣的 Dockerfile 命令鏈接在一起——它保障所有更改都合併到一層中。</p><p>以下是該 Docker 鏡像中記錄的所有層。注意，大多數層不改變文件系統鏡像，並且 <code>empty_layer</code> 標記為 <code>true</code>。以下只有三個層是非空的，與我們之前描述的相符。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ jq .history 88f38be28f05f38dba94ce0c1328ebe2b963b65848ab96594f8172a9c3b0f25b.json</span></span>
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
<span class="line"><span>]</span></span></code></pre></div><p>太棒了！所有的命令都在 <code>created_by</code> 字段中，我們幾乎可以用這些命令重建 Dockerfile。但不是完全可以。最上面的 <code>ADD</code> 命令實際上沒有給我們需要添加的文件。<code>COPY</code> 命令也沒有全部信息。我們還失去了 <code>FROM</code> 語句，因為它們擴展成了從基礎 Docker 鏡像繼承的所有層。</p><p>我們可以通過查看<ruby>時間戳<rt>timestamp</rt></ruby>，按 Dockerfile 對層進行分組。大多數層的時間戳相差不到一分鐘，代表每一層構建所需的時間。但是前兩層是 <code>2020-04-24</code>，其餘的是 <code>2020-04-29</code>。這是因為前兩層來自一個基礎 Docker 鏡像。理想情況下，我們可以找出一個 <code>FROM</code> 命令來獲得這個鏡像，這樣我們就有了一個可維護的 Dockerfile。</p><p><code>manifest.json</code> 展示第一個非空層是 <code>a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/layer.tar</code>。讓我們看看它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cd a9cc4ace48cd792ef888ade20810f82f6c24aaf2436f30337a2a712cd054dc97/</span></span>
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
<span class="line"><span>bin/chown</span></span></code></pre></div><p>看起來它可能是一個<ruby>操作系統<rt>operating system</rt></ruby>基礎鏡像，這也是你期望從典型 Dockerfile 中看到的。Tarball 中有 488 個條目，如果你瀏覽一下，就會發現一些有趣的條目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
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
<span class="line"><span>...</span></span></code></pre></div>`,12)),n("p",null,[s[11]||(s[11]=a("果不其然，這是一個 ",-1)),e(p,{href:"https://www.alpinelinux.org/"},{default:l(()=>[...s[10]||(s[10]=[a("Alpine",-1)])]),_:1}),s[12]||(s[12]=a(" 鏡像，如果你注意到其他層使用 ",-1)),s[13]||(s[13]=n("code",null,"apk",-1)),s[14]||(s[14]=a(" 命令安裝軟件包，你可能已經猜到了。讓我們解壓 tarball 看看：",-1))]),s[37]||(s[37]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir files</span></span>
<span class="line"><span>$ cd files</span></span>
<span class="line"><span>$ tar xf ../layer.tar</span></span>
<span class="line"><span>$ ls</span></span>
<span class="line"><span>bin  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var</span></span>
<span class="line"><span>$ cat etc/alpine-release</span></span>
<span class="line"><span>3.11.6</span></span></code></pre></div><p>如果你拉取、解壓 <code>alpine:3.11.6</code>，你會發現裏面有一個非空層，<code>layer.tar</code> 與 Prettier 鏡像基礎層中的 <code>layer.tar</code> 是一樣的。</p><p>出於興趣，另外兩個非空層是什麼？第二層是包含 Prettier 安裝包的主層。它有 528 個條目，包含 Prettier、一堆依賴項和證書更新：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>...</span></span>
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
<span class="line"><span>...</span></span></code></pre></div><p>第三層由 <code>WORKDIR /work</code> 命令創建，它只包含一個條目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar tf 6c37da2ee7de579a0bf5495df32ba3e7807b0a42e2a02779206d165f55f1ba70/layer.tar</span></span>
<span class="line"><span>work/</span></span></code></pre></div>`,6)),n("p",null,[e(p,{href:"https://github.com/tmknom/prettier/blob/35d2587ec052e880d73f73547f1ffc2b11e29597/Dockerfile"},{default:l(()=>[...s[15]||(s[15]=[a("原始 Dockerfile 在 Prettier 的 git 倉庫中",-1)])]),_:1}),s[16]||(s[16]=a("。",-1))]),s[38]||(s[38]=n("hr",null,null,-1)),n("p",null,[s[18]||(s[18]=a("via: ",-1)),e(p,{href:"https://theartofmachinery.com/2021/03/18/reverse_engineering_a_docker_image.html"},{default:l(()=>[...s[17]||(s[17]=[a("https://theartofmachinery.com/2021/03/18/reverse_engineering_a_docker_image.html",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("作者：",-1)),e(p,{href:"https://theartofmachinery.com"},{default:l(()=>[...s[19]||(s[19]=[a("Simon Arneaud",-1)])]),_:1}),s[24]||(s[24]=a(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[20]||(s[20]=[a("lujun9972",-1)])]),_:1}),s[25]||(s[25]=a(" 譯者：",-1)),e(p,{href:"https://github.com/DCOLIVERSUN"},{default:l(()=>[...s[21]||(s[21]=[a("DCOLIVERSUN",-1)])]),_:1}),s[26]||(s[26]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[22]||(s[22]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[29]||(s[29]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[27]||(s[27]=[a("LCTT",-1)])]),_:1}),s[30]||(s[30]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[28]||(s[28]=[a("Linux中國",-1)])]),_:1}),s[31]||(s[31]=a(" 榮譽推出",-1))])])}const _=i(d,[["render",u]]);export{y as __pageData,_ as default};
