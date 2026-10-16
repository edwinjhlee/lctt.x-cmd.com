import{_ as e,a0 as o,w as u,s as r,I as n,x as a,a1 as l,A as t,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"Up：在几秒钟内部署无服务器应用程序 | LCTT x X-CMD","titleTemplate":false,"description":"Up：在几秒钟内部署无服务器应用程序 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Up：在几秒钟内部署无服务器应用程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Up：在几秒钟内部署无服务器应用程序 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170811 UP – deploy serverless apps in seconds","title":"Up：在几秒钟内部署无服务器应用程序","tag":"201710","desc":""},"relativePath":"201710/20170811 UP – deploy serverless apps in seconds.md","filePath":"[post].md"}'),d={name:"201710/20170811 UP – deploy serverless apps in seconds.md"};function g(h,s,q,c,b,k){const p=o("Link");return u(),r("div",null,[s[72]||(s[72]=n("h1",{id:"up-在几秒钟内部署无服务器应用程序",tabindex:"-1"},[a("Up：在几秒钟内部署无服务器应用程序 "),n("a",{class:"header-anchor",href:"#up-在几秒钟内部署无服务器应用程序","aria-label":"Permalink to “Up：在几秒钟内部署无服务器应用程序”"},"​")],-1)),s[73]||(s[73]=n("p",null,[n("img",{src:"https://cdn-images-1.medium.com/max/2000/1*8KijrYCm1j0_XvrACQD_fQ.png",alt:""})],-1)),n("p",null,[s[2]||(s[2]=a("去年，我",-1)),l(p,{href:"https://medium.com/@tjholowaychuk/blueprints-for-up-1-5f8197179275"},{default:t(()=>[...s[0]||(s[0]=[a("为 Up 规划了一份蓝图",-1)])]),_:1}),s[3]||(s[3]=a("，其中描述了如何以最小的成本在 AWS 上为大多数构建块创建一个很棒的无服务器环境。这篇文章则是讨论了 ",-1)),l(p,{href:"https://github.com/apex/up"},{default:t(()=>[...s[1]||(s[1]=[a("Up",-1)])]),_:1}),s[4]||(s[4]=a(" 的初始 alpha 版本。",-1))]),s[74]||(s[74]=n("p",null,[a("为什么关注"),n("ruby",null,[a("无服务器"),n("rt",null,"serverless")]),a("？对于初学者来说，它可以节省成本，因为你可以按需付费，且只为你使用的付费。无服务器方式是自愈的，因为每个请求被隔离并被视作“无状态的”。最后，它可以无限轻松地扩展 —— 没有机器或集群要管理。部署你的代码就行了。")],-1)),n("p",null,[s[7]||(s[7]=a("大约一个月前，我决定开始在 ",-1)),l(p,{href:"https://github.com/apex/up"},{default:t(()=>[...s[5]||(s[5]=[a("apex/up",-1)])]),_:1}),s[8]||(s[8]=a(" 上开发它，并为动态 SVG 版本的 GitHub 用户投票功能写了第一个小型无服务器示例程序 ",-1)),l(p,{href:"https://github.com/tj/gh-polls"},{default:t(()=>[...s[6]||(s[6]=[a("tj/gh-polls",-1)])]),_:1}),s[9]||(s[9]=a("。它运行良好，成本低于每月 1 美元即可为数百万次投票服务，因此我会继续这个项目，看看我是否可以提供开源版本及商业的变体版本。",-1))]),s[75]||(s[75]=n("p",null,"其长期的目标是提供“你自己的 Heroku” 的版本，支持许多平台。虽然平台即服务（PaaS）并不新鲜，但无服务器生态系统正在使这种方案日益萎缩。据说，AWS 和其他的供应商经常由于他们提供的灵活性而被人诟病用户体验。Up 将复杂性抽象出来，同时为你提供一个几乎无需运维的解决方案。",-1)),s[76]||(s[76]=n("h3",{id:"安装",tabindex:"-1"},[a("安装 "),n("a",{class:"header-anchor",href:"#安装","aria-label":"Permalink to “安装”"},"​")],-1)),n("p",null,[s[12]||(s[12]=a("你可以使用以下命令安装 Up，查看这篇",-1)),l(p,{href:"https://github.com/apex/up/tree/master/docs"},{default:t(()=>[...s[10]||(s[10]=[a("临时文档",-1)])]),_:1}),s[13]||(s[13]=a("开始使用。或者如果你使用安装脚本，请下载",-1)),l(p,{href:"https://github.com/apex/up/releases"},{default:t(()=>[...s[11]||(s[11]=[a("二进制版本",-1)])]),_:1}),s[14]||(s[14]=a("。（请记住，这个项目还在早期。）",-1))]),s[77]||(s[77]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl -sfL https://raw.githubusercontent.com/apex/up/master/install.sh | sh</span></span></code></pre></div><p>只需运行以下命令随时升级到最新版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up upgrade</span></span></code></pre></div><p>你也可以通过 NPM 进行安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm install -g up</span></span></code></pre></div><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to “功能”">​</a></h3>',6)),n("p",null,[s[16]||(s[16]=a("这个早期 alpha 版本提供什么功能？让我们来看看！请记住，Up 不是托管服务，因此你需要一个 AWS 帐户和 ",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/aws-credentials.md"},{default:t(()=>[...s[15]||(s[15]=[a("AWS 凭证",-1)])]),_:1}),s[17]||(s[17]=a("。如果你对 AWS 不熟悉，你可能需要先停下来，直到熟悉流程。",-1))]),n("p",null,[s[19]||(s[19]=a("我遇到的第一个问题是：up(1) 与 ",-1)),l(p,{href:"https://github.com/apex/apex"},{default:t(()=>[...s[18]||(s[18]=[a("apex(1)",-1)])]),_:1}),s[20]||(s[20]=a(" 有何不同？Apex 专注于部署功能，用于管道和事件处理，而 Up 则侧重于应用程序、API 和静态站点，也就是单个可部署单元。Apex 不为你提供 API 网关、SSL 证书或 DNS，也不提供 URL 重写，脚本注入等。",-1))]),s[78]||(s[78]=i(`<h4 id="单命令无服务器应用程序" tabindex="-1">单命令无服务器应用程序 <a class="header-anchor" href="#单命令无服务器应用程序" aria-label="Permalink to “单命令无服务器应用程序”">​</a></h4><p>Up 可以让你使用单条命令部署应用程序、API 和静态站点。要创建一个应用程序，你只需要一个文件，在 Node.js 的情况下，<code>./app.js</code> 监听由 Up 提供的 <code>PORT&#39;。请注意，如果你使用的是 </code>package.json<code>，则会检测并使用</code>start<code>和 </code>build\` 脚本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const http = require(&#39;http&#39;)</span></span>
<span class="line"><span>const { PORT = 3000 } = process.env</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http.createServer((req, res) =&gt; {</span></span>
<span class="line"><span>  res.end(&#39;Hello World\\n&#39;)</span></span>
<span class="line"><span>}).listen(PORT)</span></span></code></pre></div>`,4)),n("p",null,[s[22]||(s[22]=a("额外的",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/runtimes.md"},{default:t(()=>[...s[21]||(s[21]=[a("运行时环境",-1)])]),_:1}),s[23]||(s[23]=a("也支持开箱可用，例如用于 Golang 的 “main.go”，所以你可以在几秒钟内部署 Golang、Python、Crystal 或 Node.js 应用程序。",-1))]),s[79]||(s[79]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span> &quot;fmt&quot;</span></span>
<span class="line"><span> &quot;log&quot;</span></span>
<span class="line"><span> &quot;net/http&quot;</span></span>
<span class="line"><span> &quot;os&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span> addr := &quot;:&quot; + os.Getenv(&quot;PORT&quot;)</span></span>
<span class="line"><span> http.HandleFunc(&quot;/&quot;, hello)</span></span>
<span class="line"><span> log.Fatal(http.ListenAndServe(addr, nil))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func hello(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span> fmt.Fprintln(w, &quot;Hello World from Go&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>要部署应用程序输入 <code>up</code> 来创建所需的资源并部署应用程序本身。这里没有模糊不清的地方，一旦它说“完成”了那就完成了，该应用程序立即可用 —— 没有远程构建过程。</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*tBYR5HXeDDVkb_Pv2MCj1A.png" alt=""></p><p>后续的部署将会更快，因为栈已被配置：</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*2w2WHDTfTT-7GsMtNPklXw.png" alt=""></p><p>使用 <code>up url --open</code> 测试你的程序，以在浏览器中浏览它，<code>up url --copy</code> 可以将 URL 保存到剪贴板，或者可以尝试使用 curl：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl \`up url\`</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>要删除应用程序及其资源，只需输入 <code>up stack delete</code>：</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*FUdhBTtDHaZ2CEPHR7PGqg.png" alt=""></p>`,9)),n("p",null,[s[25]||(s[25]=a("例如，使用 ",-1)),s[26]||(s[26]=n("code",null,"up staging",-1)),s[27]||(s[27]=a(" 或 ",-1)),s[28]||(s[28]=n("code",null,"up production",-1)),s[29]||(s[29]=a(" 和 ",-1)),s[30]||(s[30]=n("code",null,"up url --open production",-1)),s[31]||(s[31]=a(" 部署到预发布或生产环境。请注意，自定义域名尚不可用，",-1)),l(p,{href:"https://github.com/apex/up/issues/166"},{default:t(()=>[...s[24]||(s[24]=[a("它们将很快可用",-1)])]),_:1}),s[32]||(s[32]=a("。之后，你还可以将版本“推广”到其他环境。",-1))]),s[80]||(s[80]=i(`<h4 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to “反向代理”">​</a></h4><p>Up 的一个独特的功能是，它不仅仅是简单地部署代码，它将一个 Golang 反向代理放在应用程序的前面。这提供了许多功能，如 URL 重写、重定向、脚本注入等等，我们将在后面进一步介绍。</p><h4 id="基础设施即代码" tabindex="-1">基础设施即代码 <a class="header-anchor" href="#基础设施即代码" aria-label="Permalink to “基础设施即代码”">​</a></h4><p>在配置方面，Up 遵循现代最佳实践，因此对基础设施的更改都可以在部署之前预览，并且 IAM 策略的使用还可以限制开发人员访问以防止事故发生。一个附带的好处是它有助于自动记录你的基础设施。</p><p>以下是使用 Let&#39;s Encrypt 通过 AWS ACM 配置一些（虚拟）DNS 记录和免费 SSL 证书的示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;dns&quot;: {</span></span>
<span class="line"><span>    &quot;myapp.com&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;myapp.com&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;A&quot;,</span></span>
<span class="line"><span>        &quot;ttl&quot;: 300,</span></span>
<span class="line"><span>        &quot;value&quot;: [&quot;35.161.83.243&quot;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;blog.myapp.com&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;CNAME&quot;,</span></span>
<span class="line"><span>        &quot;ttl&quot;: 300,</span></span>
<span class="line"><span>        &quot;value&quot;: [&quot;34.209.172.67&quot;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;name&quot;: &quot;api.myapp.com&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;A&quot;,</span></span>
<span class="line"><span>        &quot;ttl&quot;: 300,</span></span>
<span class="line"><span>        &quot;value&quot;: [&quot;54.187.185.18&quot;]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;certs&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;domains&quot;: [&quot;myapp.com&quot;, &quot;*.myapp.com&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>当你首次通过 <code>up</code> 部署应用程序时，需要所有的权限，它为你创建 API 网关、Lambda 函数、ACM 证书、Route53 DNS 记录等。</p>`,7)),n("p",null,[l(p,{href:"https://github.com/apex/up/issues/115"},{default:t(()=>[...s[33]||(s[33]=[a("ChangeSets",-1)])]),_:1}),s[34]||(s[34]=a(" 尚未实现，但你能使用 ",-1)),s[35]||(s[35]=n("code",null,"up stack plan",-1)),s[36]||(s[36]=a(" 预览进一步的更改，并使用 ",-1)),s[37]||(s[37]=n("code",null,"up stack apply",-1)),s[38]||(s[38]=a(" 提交，这与 Terraform 非常相似。",-1))]),n("p",null,[s[40]||(s[40]=a("详细信息请参阅",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/configuration.md"},{default:t(()=>[...s[39]||(s[39]=[a("配置文档",-1)])]),_:1}),s[41]||(s[41]=a("。",-1))]),s[81]||(s[81]=i(`<h4 id="全球部署" tabindex="-1">全球部署 <a class="header-anchor" href="#全球部署" aria-label="Permalink to “全球部署”">​</a></h4><p><code>regions</code> 数组可以指定应用程序的目标区域。例如，如果你只对单个地区感兴趣，请使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;regions&quot;: [&quot;us-west-2&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你的客户集中在北美，你可能需要使用美国和加拿大所有地区：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;regions&quot;: [&quot;us-*&quot;, &quot;ca-*&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，你可以使用 AWS 目前支持的所有 14 个地区：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;regions&quot;: [&quot;*&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>多区域支持仍然是一个正在进行的工作，因为需要一些新的 AWS 功能来将它们结合在一起。</p><h4 id="静态文件服务" tabindex="-1">静态文件服务 <a class="header-anchor" href="#静态文件服务" aria-label="Permalink to “静态文件服务”">​</a></h4><p>Up 默认支持静态文件服务，并带有 HTTP 缓存支持，因此你可以在应用程序前使用 CloudFront 或任何其他 CDN 来大大减少延迟。</p><p>当 <code>type</code> 为 <code>static</code> 时，默认情况下的工作目录是 <code>.</code>，但是你也可以提供一个 <code>static.dir</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;static&quot;: {</span></span>
<span class="line"><span>    &quot;dir&quot;: &quot;public&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="构建钩子" tabindex="-1">构建钩子 <a class="header-anchor" href="#构建钩子" aria-label="Permalink to “构建钩子”">​</a></h4><p>构建钩子允许你在部署或执行其他操作时定义自定义操作。一个常见的例子是使用 Webpack 或 Browserify 捆绑 Node.js 应用程序，这大大减少了文件大小，因为 node 模块是_很大_的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;hooks&quot;: {</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;browserify --node server.js &gt; app.js&quot;,</span></span>
<span class="line"><span>    &quot;clean&quot;: &quot;rm app.js&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="脚本和样式表插入" tabindex="-1">脚本和样式表插入 <a class="header-anchor" href="#脚本和样式表插入" aria-label="Permalink to “脚本和样式表插入”">​</a></h4>`,16)),n("p",null,[s[43]||(s[43]=a("Up 允许你插入脚本和样式，无论是内联方式或声明路径。它甚至支持一些“罐头”脚本，用于 Google Analytics（分析）和 ",-1)),l(p,{href:"https://segment.com/"},{default:t(()=>[...s[42]||(s[42]=[a("Segment",-1)])]),_:1}),s[44]||(s[44]=a("，只需复制并粘贴你的写入密钥即可。",-1))]),s[82]||(s[82]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;site&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;inject&quot;: {</span></span>
<span class="line"><span>    &quot;head&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;segment&quot;,</span></span>
<span class="line"><span>        &quot;value&quot;: &quot;API_KEY&quot;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;inline style&quot;,</span></span>
<span class="line"><span>        &quot;file&quot;: &quot;/css/primer.css&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;body&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;script&quot;,</span></span>
<span class="line"><span>        &quot;value&quot;: &quot;/app.js&quot;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="重写和重定向" tabindex="-1">重写和重定向 <a class="header-anchor" href="#重写和重定向" aria-label="Permalink to “重写和重定向”">​</a></h4><p>Up 通过 <code>redirects</code> 对象支持重定向和 URL 重写，该对象将路径模式映射到新位置。如果省略 <code>status</code> 参数（或值为 200），那么它是重写，否则是重定向。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;redirects&quot;: {</span></span>
<span class="line"><span>    &quot;/blog&quot;: {</span></span>
<span class="line"><span>      &quot;location&quot;: &quot;https://blog.apex.sh/&quot;,</span></span>
<span class="line"><span>      &quot;status&quot;: 301</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;/docs/:section/guides/:guide&quot;: {</span></span>
<span class="line"><span>      &quot;location&quot;: &quot;/help/:section/:guide&quot;,</span></span>
<span class="line"><span>      &quot;status&quot;: 302</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;/store/*&quot;: {</span></span>
<span class="line"><span>      &quot;location&quot;: &quot;/shop/:splat&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>用于重写的常见情况是 SPA（单页面应用程序），你希望不管路径如何都提供 <code>index.html</code>，当然除非文件存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;redirects&quot;: {</span></span>
<span class="line"><span>    &quot;/*&quot;: {</span></span>
<span class="line"><span>      &quot;location&quot;: &quot;/&quot;,</span></span>
<span class="line"><span>      &quot;status&quot;: 200</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果要强制实施该规则，无论文件是否存在，只需添加 <code>&quot;force&quot;: true</code> 。</p><h4 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to “环境变量”">​</a></h4><p>密码将在下一个版本中有，但是现在支持纯文本环境变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;api&quot;,</span></span>
<span class="line"><span>  &quot;environment&quot;: {</span></span>
<span class="line"><span>    &quot;API_FEATURE_FOO&quot;: &quot;1&quot;,</span></span>
<span class="line"><span>    &quot;API_FEATURE_BAR&quot;: &quot;0&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="cors-支持" tabindex="-1">CORS 支持 <a class="header-anchor" href="#cors-支持" aria-label="Permalink to “CORS 支持”">​</a></h4>`,11)),n("p",null,[l(p,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS"},{default:t(()=>[...s[45]||(s[45]=[a("CORS",-1)])]),_:1}),s[46]||(s[46]=a(" 支持允许你指定哪些（如果有的话）域可以从浏览器访问你的 API。如果你希望允许任何网站访问你的 API，只需启用它：",-1))]),s[83]||(s[83]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;cors&quot;: {</span></span>
<span class="line"><span>    &quot;enable&quot;: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你还可以自定义访问，例如仅将 API 访问限制为你的前端或 SPA。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;cors&quot;: {</span></span>
<span class="line"><span>    &quot;allowed_origins&quot;: [&quot;https://myapp.com&quot;],</span></span>
<span class="line"><span>    &quot;allowed_methods&quot;: [&quot;HEAD&quot;, &quot;GET&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;DELETE&quot;],</span></span>
<span class="line"><span>    &quot;allowed_headers&quot;: [&quot;Content-Type&quot;, &quot;Authorization&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to “日志”">​</a></h4>`,4)),n("p",null,[s[48]||(s[48]=a("对于 $0.5/GB 的低价格，你可以使用 CloudWatch 日志进行结构化日志查询和跟踪。Up 实现了一种用于改进 CloudWatch 提供的自定义",-1)),l(p,{href:"https://github.com/apex/up/blob/master/internal/logs/parser/grammar.peg"},{default:t(()=>[...s[47]||(s[47]=[a("查询语言",-1)])]),_:1}),s[49]||(s[49]=a("，专门用于查询结构化 JSON 日志。",-1))]),s[84]||(s[84]=i(`<p><img src="https://cdn-images-1.medium.com/max/2000/1*hrON4pH_WzN6CajaiU-ZYw.png" alt=""></p><p>你可以查询现有日志：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up logs</span></span></code></pre></div><p>跟踪在线日志：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up logs -f</span></span></code></pre></div><p>或者对其中任一个进行过滤，例如只显示耗时超过 5 毫秒的 200 个 GET/HEAD 请求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up logs &#39;method in (&quot;GET&quot;, &quot;HEAD&quot;) status = 200 duration &gt;= 5&#39;</span></span></code></pre></div><p><img src="https://cdn-images-1.medium.com/max/1600/1*Nhc5eiMM24gbiICFW7kBLg.png" alt=""></p><p>查询语言是非常灵活的，这里有更多来自于 <code>up help logs</code> 的例子</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### 显示过去 5 分钟的日志</span></span>
<span class="line"><span>$ up logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示过去 30 分钟的日志</span></span>
<span class="line"><span>$ up logs -s 30m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示过去 5 小时的日志</span></span>
<span class="line"><span>$ up logs -s 5h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 实时显示日志</span></span>
<span class="line"><span>$ up logs -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示错误日志</span></span>
<span class="line"><span>$ up logs error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示错误和致命错误日志</span></span>
<span class="line"><span>$ up logs &#39;error or fatal&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示非 info 日志</span></span>
<span class="line"><span>$ up logs &#39;not info&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示特定消息的日志</span></span>
<span class="line"><span>$ up logs &#39;message = &quot;user login&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示超时 150ms 的 200 响应</span></span>
<span class="line"><span>$ up logs &#39;status = 200 duration &gt; 150&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示 4xx 和 5xx 响应</span></span>
<span class="line"><span>$ up logs &#39;status &gt;= 400&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示用户邮件包含 @apex.sh 的日志</span></span>
<span class="line"><span>$ up logs &#39;user.email contains &quot;@apex.sh&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示用户邮件以 @apex.sh 结尾的日志</span></span>
<span class="line"><span>$ up logs &#39;user.email = &quot;*@apex.sh&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示用户邮件以 tj@ 开始的日志</span></span>
<span class="line"><span>$ up logs &#39;user.email = &quot;tj@*&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 显示路径 /tobi 和 /loki 下的错误日志</span></span>
<span class="line"><span>$ up logs &#39;error and (path = &quot;/tobi&quot; or path = &quot;/loki&quot;)&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 和上面一样，用 in 显示</span></span>
<span class="line"><span>$ up logs &#39;error and path in (&quot;/tobi&quot;, &quot;/loki&quot;)&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 更复杂的查询方式</span></span>
<span class="line"><span>$ up logs &#39;method in (&quot;POST&quot;, &quot;PUT&quot;) ip = &quot;207.*&quot; status = 200 duration &gt;= 50&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 将 JSON 格式的错误日志发送给 jq 工具</span></span>
<span class="line"><span>$ up logs error | jq</span></span></code></pre></div><p>请注意，<code>and</code> 关键字是暗含的，虽然你也可以使用它。</p><h4 id="冷启动时间" tabindex="-1">冷启动时间 <a class="header-anchor" href="#冷启动时间" aria-label="Permalink to “冷启动时间”">​</a></h4><p>这是 AWS Lambda 平台的特性，但冷启动时间通常远远低于 1 秒，在未来，我计划提供一个选项来保持它们在线。</p><h4 id="配置验证" tabindex="-1">配置验证 <a class="header-anchor" href="#配置验证" aria-label="Permalink to “配置验证”">​</a></h4><p><code>up config</code> 命令输出解析后的配置，有默认值和推断的运行时设置 - 它也起到验证配置的双重目的，因为任何错误都会导致退出状态 &gt; 0。</p><h4 id="崩溃恢复" tabindex="-1">崩溃恢复 <a class="header-anchor" href="#崩溃恢复" aria-label="Permalink to “崩溃恢复”">​</a></h4><p>使用 Up 作为反向代理的另一个好处是执行崩溃恢复 —— 在崩溃后重新启动服务器，并在将错误的响应发送给客户端之前重新尝试该请求。</p><p>例如，假设你的 Node.js 程序由于间歇性数据库问题而导致未捕获的异常崩溃，Up 可以在响应客户端之前重试该请求。之后这个行为会更加可定制。</p><h4 id="适合持续集成" tabindex="-1">适合持续集成 <a class="header-anchor" href="#适合持续集成" aria-label="Permalink to “适合持续集成”">​</a></h4><p>很难说这是一个功能，但是感谢 Golang 相对较小和独立的二进制文件，你可以在一两秒中在 CI 中安装 Up。</p><h4 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-label="Permalink to “HTTP/2”">​</a></h4><p>Up 通过 API 网关支持 HTTP/2，对于服务很多资源的应用和站点可以减少延迟。我将来会对许多平台进行更全面的测试，但是 Up 的延迟已经很好了：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*psg0kJND1UCryXEa0D3VBA.jpeg" alt=""></p><h4 id="错误页面" tabindex="-1">错误页面 <a class="header-anchor" href="#错误页面" aria-label="Permalink to “错误页面”">​</a></h4><p>Up 提供了一个默认错误页面，如果你要提供支持电子邮件或调整颜色，你可以使用 <code>error_pages</code> 自定义。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;site&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;error_pages&quot;: {</span></span>
<span class="line"><span>    &quot;variables&quot;: {</span></span>
<span class="line"><span>      &quot;support_email&quot;: &quot;support@apex.sh&quot;,</span></span>
<span class="line"><span>      &quot;color&quot;: &quot;#228ae6&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>默认情况下，它看上去像这样：</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*_Mdj6uTCGvYTCoXsNOSD6w.png" alt=""></p><p>如果你想提供自定义模板，你可以创建以下一个或多个文件。特定文件优先。</p><ul><li><code>error.html</code> – 匹配任何 4xx 或 5xx</li><li><code>5xx.html</code> – 匹配任何 5xx 错误</li><li><code>4xx.html</code> – 匹配任何 4xx 错误</li><li><code>CODE.html</code> – 匹配一个特定的代码，如 404.html</li></ul>`,30)),n("p",null,[s[51]||(s[51]=a("查看",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/configuration.md#error-pages"},{default:t(()=>[...s[50]||(s[50]=[a("文档",-1)])]),_:1}),s[52]||(s[52]=a("阅读更多有关模板的信息。",-1))]),s[85]||(s[85]=n("h3",{id:"伸缩和成本",tabindex:"-1"},[a("伸缩和成本 "),n("a",{class:"header-anchor",href:"#伸缩和成本","aria-label":"Permalink to “伸缩和成本”"},"​")],-1)),s[86]||(s[86]=n("p",null,"你已经做了这么多，但是 Up 怎么伸缩？目前，API 网关和 AWS 是目标平台，因此你无需进行任何更改即可扩展，只需部署代码即可完成。你只需按需支付实际使用的数量并且无需人工干预。",-1)),n("p",null,[s[54]||(s[54]=a("AWS 每月免费提供 1,000,000 个请求，但你可以使用 ",-1)),l(p,{href:"http://serverlesscalc.com/"},{default:t(()=>[...s[53]||(s[53]=[a("http://serverlesscalc.com",-1)])]),_:1}),s[55]||(s[55]=a(" 来插入预期流量。在未来 Up 将提供更多的平台，所以如果一个成本过高，你可以迁移到另一个！",-1))]),s[87]||(s[87]=n("h3",{id:"未来",tabindex:"-1"},[a("未来 "),n("a",{class:"header-anchor",href:"#未来","aria-label":"Permalink to “未来”"},"​")],-1)),s[88]||(s[88]=n("p",null,"目前为止就这样了！它可能看起来不是很多，但它已经超过 10,000 行代码，并且我刚刚开始开发。看看这个问题队列，假设项目可持续发展，看看未来会有什么期待。",-1)),n("p",null,[s[57]||(s[57]=a("如果你发现这个免费版本有用，请考虑在 ",-1)),l(p,{href:"https://opencollective.com/apex-up"},{default:t(()=>[...s[56]||(s[56]=[a("OpenCollective",-1)])]),_:1}),s[58]||(s[58]=a(" 上捐赠我，因为我没有任何工作。我将在短期内开发早期专业版，对早期用户有年费优惠。专业或企业版也将提供源码，因此可以进行内部修复和自定义。",-1))]),s[89]||(s[89]=n("hr",null,null,-1)),n("p",null,[s[60]||(s[60]=a("via: ",-1)),l(p,{href:"https://medium.freecodecamp.org/up-b3db1ca930ee"},{default:t(()=>[...s[59]||(s[59]=[a("https://medium.freecodecamp.org/up-b3db1ca930ee",-1)])]),_:1})]),n("p",null,[s[64]||(s[64]=a("作者：",-1)),l(p,{href:"https://medium.freecodecamp.org/@tjholowaychuk?source=post_header_lockup"},{default:t(()=>[...s[61]||(s[61]=[a("TJ Holowaychuk",-1)])]),_:1}),s[65]||(s[65]=a(" 译者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:t(()=>[...s[62]||(s[62]=[a("geekpi",-1)])]),_:1}),s[66]||(s[66]=a(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[63]||(s[63]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[69]||(s[69]=a("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[67]||(s[67]=[a("LCTT",-1)])]),_:1}),s[70]||(s[70]=a(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:t(()=>[...s[68]||(s[68]=[a("Linux中国",-1)])]),_:1}),s[71]||(s[71]=a(" 荣誉推出",-1))])])}const x=e(d,[["render",g]]);export{y as __pageData,x as default};
