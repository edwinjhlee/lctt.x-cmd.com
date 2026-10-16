import{_ as t,a0 as o,w as g,s as r,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse('{"title":"如何用 GVM 管理 Go 项目 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 GVM 管理 Go 项目 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 GVM 管理 Go 项目 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 GVM 管理 Go 项目 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191008 How to manage Go projects with GVM","title":"如何用 GVM 管理 Go 项目","tag":"201910","desc":""},"relativePath":"201910/20191008 How to manage Go projects with GVM.md","filePath":"[post].md"}'),d={name:"201910/20191008 How to manage Go projects with GVM.md"};function c(h,s,m,u,k,b){const p=o("Link");return g(),r("div",null,[s[30]||(s[30]=a("h1",{id:"如何用-gvm-管理-go-项目",tabindex:"-1"},[n("如何用 GVM 管理 Go 项目 "),a("a",{class:"header-anchor",href:"#如何用-gvm-管理-go-项目","aria-label":"Permalink to “如何用 GVM 管理 Go 项目”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"使用 Go 版本管理器管理多个版本的 Go 语言环境及其模块。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/programming-code-keyboard-laptop-music-headphones.png?itok=EQZ2WKzy",alt:"正在编程的女人",title:"Woman programming"})],-1)),a("p",null,[s[2]||(s[2]=n("Go 语言版本管理器（",-1)),i(p,{href:"https://github.com/moovweb/gvm"},{default:l(()=>[...s[0]||(s[0]=[n("GVM",-1)])]),_:1}),s[3]||(s[3]=n("）是管理 Go 语言环境的开源工具。GVM “pkgsets” 支持安装多个版本的 Go 并管理每个项目的模块。它最初由 ",-1)),i(p,{href:"https://github.com/jbussdieker"},{default:l(()=>[...s[1]||(s[1]=[n("Josh Bussdieker",-1)])]),_:1}),s[4]||(s[4]=n(" 开发，GVM（像它的对手 Ruby RVM 一样）允许你为每个项目或一组项目创建一个开发环境，分离不同的 Go 版本和包依赖关系，以提供更大的灵活性，防止不同版本造成的问题。",-1))]),s[33]||(s[33]=a("p",null,"有几种管理 Go 包的方式，包括内置于 Go 中的 Go 1.11 的 Modules。我发现 GVM 简单直观，即使我不用它来管理包，我还是会用它来管理 Go 不同的版本的。",-1)),s[34]||(s[34]=a("h3",{id:"安装-gvm",tabindex:"-1"},[n("安装 GVM "),a("a",{class:"header-anchor",href:"#安装-gvm","aria-label":"Permalink to “安装 GVM”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("安装 GVM 很简单。",-1)),i(p,{href:"https://github.com/moovweb/gvm#installing"},{default:l(()=>[...s[5]||(s[5]=[n("GVM 存储库",-1)])]),_:1}),s[7]||(s[7]=n("安装文档指示你下载安装程序脚本并将其传送到 Bash 来安装:",-1))]),s[35]||(s[35]=e('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bash &lt; &lt;(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)</span></span></code></pre></div><p>尽管越来越多的人采用这种安装方法，但是在安装之前先看看安装程序在做什么仍然是一个很好的想法。以 GVM 为例，该安装程序脚本:</p><ol><li>检查一些相关依赖性</li><li>克隆 GVM 存储库</li><li>使用 shell 脚本： <ul><li>安装 Go 语言</li><li>管理 <code>GOPATH</code> 环境变量</li><li>向 <code>bashrc</code>、<code>zshrc</code> 或配置文件中添加一行内容</li></ul></li></ol><p>如果你想确认它在做什么，你可以克隆该存储库并查看 shell 脚本，然后运行 <code>./binscripts/gvm-installer</code> 这个本地脚本进行设置。</p>',4)),a("p",null,[s[9]||(s[9]=a("code",null,"注意：",-1)),s[10]||(s[10]=n(" 因为 GVM 可以用来下载和编译新的 Go 版本，所以有一些预期的依赖关系，如 Make、Git 和 Curl。你可以在 ",-1)),i(p,{href:"https://github.com/moovweb/gvm/blob/master/README.md"},{default:l(()=>[...s[8]||(s[8]=[n("GVM 的自述文件",-1)])]),_:1}),s[11]||(s[11]=n("中找到完整的发行版列表。",-1))]),s[36]||(s[36]=e(`<h3 id="使用-gvm-安装和管理-go-版本" tabindex="-1">使用 GVM 安装和管理 GO 版本 <a class="header-anchor" href="#使用-gvm-安装和管理-go-版本" aria-label="Permalink to “使用 GVM 安装和管理 GO 版本”">​</a></h3><p>一旦安装了 GVM，你就可以使用它来安装和管理不同版本的 Go。<code>gvm listall</code> 命令显示可下载和编译的可用版本的 Go：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin ]$ gvm listall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm gos (available)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   go1</span></span>
<span class="line"><span>   go1.0.1</span></span>
<span class="line"><span>   go1.0.2</span></span>
<span class="line"><span>   go1.0.3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;输出截断&gt;</span></span></code></pre></div><p>安装特定的 Go 版本就像 <code>gvm install &lt;版本&gt;</code> 一样简单，其中 <code>&lt;版本&gt;</code> 是 <code>gvm listall</code> 命令返回的版本之一。</p><p>假设你正在进行一个使用 Go1.12.8 版本的项目。你可以使用 <code>gvm install go1.12.8</code> 安装这个版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm install go1.12.8</span></span>
<span class="line"><span>Installing go1.12.8...</span></span>
<span class="line"><span> * Compiling...</span></span>
<span class="line"><span>go1.12.8 successfully installed!</span></span></code></pre></div><p>输入 <code>gvm list</code>，你会看到 Go 版本 1.12.8 与系统 Go 版本（使用操作系统的软件包管理器打包的版本）一起并存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm gos (installed)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   go1.12.8</span></span>
<span class="line"><span>=&gt; system</span></span></code></pre></div><p>GVM 仍在使用系统版本的 Go ，由 <code>=&gt;</code> 符号表示。你可以使用 <code>gvm use</code> 命令切换你的环境以使用新安装的 go1.12.8：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm use go1.12.8</span></span>
<span class="line"><span>Now using version go1.12.8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ go version</span></span>
<span class="line"><span>go version go1.12.8 linux/amd64</span></span></code></pre></div><p>GVM 使管理已安装版本的 Go 变得极其简单，但它不止于此！</p><h3 id="使用-gvm-pkgset" tabindex="-1">使用 GVM pkgset <a class="header-anchor" href="#使用-gvm-pkgset" aria-label="Permalink to “使用 GVM pkgset”">​</a></h3><p>开箱即用，Go 有一种出色而令人沮丧的管理包和模块的方式。默认情况下，如果你 <code>go get</code> 获取一个包，它将被下载到 <code>$GOPATH</code> 目录中的 <code>src</code> 和 <code>pkg</code> 目录下，然后可以使用 <code>import</code> 将其包含在你的 Go 程序中。这使得获得软件包变得很容易，特别是对于非特权用户，而不需要 <code>sudo</code> 或 root 特权（很像 Python 中的 <code>pip install --user</code>）。然而，在不同的项目中管理相同包的不同版本是非常困难的。</p>`,13)),a("p",null,[s[13]||(s[13]=n("有许多方法可以尝试修复或缓解这个问题，包括实验性 Go Modules（Go 1.11 版中增加了初步支持）和 ",-1)),i(p,{href:"https://golang.github.io/dep/"},{default:l(()=>[...s[12]||(s[12]=[n("Go dep",-1)])]),_:1}),s[14]||(s[14]=n("（Go Modules 的“官方实验”并且持续迭代）。在我发现 GVM 之前，我会在一个 Go 项目自己的 Docker 容器中构建和测试它，以确保分离。",-1))]),s[37]||(s[37]=e(`<p>GVM 通过使用 “pkgsets” 将项目的新目录附加到安装的 Go 版本的默认 <code>$GOPATH</code> 上，很好地实现了项目之间包的管理和隔离，就像 <code>$PATH</code> 在 Unix/Linux 系统上工作一样。</p><p>想象它如何运行的。首先，安装新版 Go 1.12.9：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ echo $GOPATH</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.8/global</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm install go1.12.9</span></span>
<span class="line"><span>Installing go1.12.9...</span></span>
<span class="line"><span> * Compiling...</span></span>
<span class="line"><span>go1.12.9 successfully installed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm use go1.12.9</span></span>
<span class="line"><span>Now using version go1.12.9</span></span></code></pre></div><p>当 GVM 被告知使用新版本时，它会更改为新的 <code>$GOPATH</code>，默认 <code>gloabl</code> pkgset 应用于该版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ echo $GOPATH</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.9/global</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm pkgset list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm go package sets (go1.12.9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>=&gt;  global</span></span></code></pre></div><p>尽管默认情况下没有安装额外的包，但是全局 pkgset 中的包对于使用该特定版本的 Go 的任何项目都是可用的。</p><p>现在，假设你正在启用一个新项目，它需要一个特定的包。首先，使用 GVM 创建一个新的 pkgset，名为 <code>introToGvm</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm pkgset create introToGvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm pkgset use introToGvm</span></span>
<span class="line"><span>Now using version go1.12.9@introToGvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm pkgset list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm go package sets (go1.12.9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    global</span></span>
<span class="line"><span>=&gt;  introToGvm</span></span></code></pre></div><p>如上所述，pkgset 的一个新目录被添加到 <code>$GOPATH</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ echo $GOPATH</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.9/introToGvm:/home/chris/.gvm/pkgsets/go1.12.9/global</span></span></code></pre></div><p>将目录更改为预先设置的 <code>introToGvm</code> 路径，检查目录结构，这里使用 <code>awk</code> 和 <code>bash</code> 完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ cd $( awk -F&#39;:&#39; &#39;{print $1}&#39; &lt;&lt;&lt; $GOPATH )</span></span>
<span class="line"><span>[chris@marvin]$ pwd</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.9/introToGvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ ls</span></span>
<span class="line"><span>overlay  pkg  src</span></span></code></pre></div><p>请注意，新目录看起来很像普通的 <code>$GOPATH</code>。新的 Go 包使用同样的 <code>go get</code> 命令下载并正常使用，且添加到 pkgset 中。</p><p>例如，使用以下命令获取 <code>gorilla/mux</code> 包，然后检查 pkgset 的目录结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ go get github.com/gorilla/mux</span></span>
<span class="line"><span>[chris@marvin]$ tree</span></span>
<span class="line"><span>[chris@marvin introToGvm ]$ tree</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├── overlay</span></span>
<span class="line"><span>│   ├── bin</span></span>
<span class="line"><span>│   └── lib</span></span>
<span class="line"><span>│       └── pkgconfig</span></span>
<span class="line"><span>├── pkg</span></span>
<span class="line"><span>│   └── linux_amd64</span></span>
<span class="line"><span>│       └── github.com</span></span>
<span class="line"><span>│           └── gorilla</span></span>
<span class="line"><span>│               └── mux.a</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>└── github.com</span></span>
<span class="line"><span>    └── gorilla</span></span>
<span class="line"><span>        └── mux</span></span>
<span class="line"><span>            ├── AUTHORS</span></span>
<span class="line"><span>            ├── bench_test.go</span></span>
<span class="line"><span>            ├── context.go</span></span>
<span class="line"><span>            ├── context_test.go</span></span>
<span class="line"><span>            ├── doc.go</span></span>
<span class="line"><span>            ├── example_authentication_middleware_test.go</span></span>
<span class="line"><span>            ├── example_cors_method_middleware_test.go</span></span>
<span class="line"><span>            ├── example_route_test.go</span></span>
<span class="line"><span>            ├── go.mod</span></span>
<span class="line"><span>            ├── LICENSE</span></span>
<span class="line"><span>            ├── middleware.go</span></span>
<span class="line"><span>            ├── middleware_test.go</span></span>
<span class="line"><span>            ├── mux.go</span></span>
<span class="line"><span>            ├── mux_test.go</span></span>
<span class="line"><span>            ├── old_test.go</span></span>
<span class="line"><span>            ├── README.md</span></span>
<span class="line"><span>            ├── regexp.go</span></span>
<span class="line"><span>            ├── route.go</span></span>
<span class="line"><span>            └── test_helpers.go</span></span></code></pre></div><p>如你所见，<code>gorilla/mux</code> 已按预期添加到 pkgset <code>$GOPATH</code> 目录中，现在可用于使用此 pkgset 项目了。</p><h3 id="gvm-让-go-管理变得轻而易举" tabindex="-1">GVM 让 Go 管理变得轻而易举 <a class="header-anchor" href="#gvm-让-go-管理变得轻而易举" aria-label="Permalink to “GVM 让 Go 管理变得轻而易举”">​</a></h3><p>GVM 是一种直观且非侵入性的管理 Go 版本和包的方式。它可以单独使用，也可以与其他 Go 模块管理技术结合使用并利用 GVM Go 版本管理功能。按 Go 版本和包依赖来分离项目使得开发更加容易，并且减少了管理版本冲突的复杂性，GVM 让这变得轻而易举。</p><hr>`,19)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/19/10/introduction-gvm"},{default:l(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/10/introduction-gvm",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/clcollins"},{default:l(()=>[...s[17]||(s[17]=[n("Chris Collins",-1)])]),_:1}),s[22]||(s[22]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 译者：",-1)),i(p,{href:"https://github.com/heguangzhi"},{default:l(()=>[...s[19]||(s[19]=[n("heguangzhi",-1)])]),_:1}),s[24]||(s[24]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const T=t(d,[["render",c]]);export{f as __pageData,T as default};
