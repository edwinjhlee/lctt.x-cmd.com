import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"详解 Ubuntu snap 包的制作过程 | LCTT x X-CMD","titleTemplate":false,"description":"详解 Ubuntu snap 包的制作过程 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"详解 Ubuntu snap 包的制作过程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"详解 Ubuntu snap 包的制作过程 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170228 How to create a snap for timg with snapcraft on Ubuntu","title":"详解 Ubuntu snap 包的制作过程","tag":"201710","desc":""},"relativePath":"201710/20170228 How to create a snap for timg with snapcraft on Ubuntu.md","filePath":"[post].md"}'),g={name:"201710/20170228 How to create a snap for timg with snapcraft on Ubuntu.md"};function c(u,s,m,b,h,k){const p=o("Link");return r(),d("div",null,[s[117]||(s[117]=a("h1",{id:"详解-ubuntu-snap-包的制作过程",tabindex:"-1"},[n("详解 Ubuntu snap 包的制作过程 "),a("a",{class:"header-anchor",href:"#详解-ubuntu-snap-包的制作过程","aria-label":"Permalink to “详解 Ubuntu snap 包的制作过程”"},"​")],-1)),s[118]||(s[118]=a("blockquote",null,[a("p",null,"如果你看过译者以前翻译的 snappy 文章，不知有没有感觉相关主题都是浅尝辄止，讲得不够透彻，看得也不太过瘾？如果有的话，相信这篇详细讲解如何从零开始制作一个 snap 包的文章应该不会让你失望。")],-1)),a("p",null,[s[2]||(s[2]=n("在这篇文章中，我们将看到如何为名为 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[0]||(s[0]=[n("timg",-1)])]),_:1}),s[3]||(s[3]=n(" 的实用程序制作对应的 snap 包。如果这是你第一次听说 snap 安装包，你可以先看看 ",-1)),i(p,{href:"https://tutorials.ubuntu.com/tutorial/create-your-first-snap"},{default:e(()=>[...s[1]||(s[1]=[n("如何创建你的第一个 snap 包",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[119]||(s[119]=a("p",null,"今天我们将学习以下有关使用 snapcraft 制作 snap 包的内容：",-1)),a("ul",null,[a("li",null,[i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[5]||(s[5]=[n("timg",-1)])]),_:1}),s[7]||(s[7]=n(" 源码中的 Makefile 文件是手工编写，我们需要修改一些 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[6]||(s[6]=[n("make 插件参数",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[11]||(s[11]=a("li",null,"这个程序是用 C++ 语言写的，依赖几个额外的库文件。我们需要把相关的代码添加到 snap 包中。",-1)),a("li",null,[i(p,{href:"https://snapcraft.io/docs/reference/confinement"},{default:e(()=>[...s[9]||(s[9]=[n("严格限制还是传统限制",-1)])]),_:1}),s[10]||(s[10]=n("？我们将会讨论如何在它们之间进行选择。",-1))])]),a("p",null,[s[13]||(s[13]=n("首先，我们了解下 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[12]||(s[12]=[n("timg",-1)])]),_:1}),s[14]||(s[14]=n(" 有什么用？",-1))]),s[120]||(s[120]=a("h3",{id:"背景",tabindex:"-1"},[n("背景 "),a("a",{class:"header-anchor",href:"#背景","aria-label":"Permalink to “背景”"},"​")],-1)),s[121]||(s[121]=a("p",null,"Linux 终端模拟器已经变得非常炫酷，并且还能显示颜色！",-1)),s[122]||(s[122]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/ynm5k5urc7idb037ahca2s93/%E5%9B%BE%E7%89%87.png",alt:"1.png-19.9kB"})],-1)),s[123]||(s[123]=a("p",null,"除了标准的颜色，大多数终端模拟器（如上图显示的 GNOME 终端）都支持真彩色（1600 万种颜色）。",-1)),s[124]||(s[124]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/h2ynj68axdqiy7dwszgw5z1f/%E5%9B%BE%E7%89%87.png",alt:"图片.png-61.9kB"})],-1)),a("p",null,[s[17]||(s[17]=n("是的！终端模拟器已经支持真彩色了！从这个页面“ ",-1)),i(p,{href:"https://gist.github.com/XVilka/8346728"},{default:e(()=>[...s[15]||(s[15]=[n("多个终端和终端应用程序已经支持真彩色（1600 万种颜色）",-1)])]),_:1}),s[18]||(s[18]=n("” 可以获取 AWK 代码自己进行测试。你可以看到在代码中使用了一些 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Escape_sequence"},{default:e(()=>[...s[16]||(s[16]=[n("转义序列",-1)])]),_:1}),s[19]||(s[19]=n(" 来指定 RGB 的值（256 * 256 * 256 ~= 1600 万种颜色）。",-1))]),s[125]||(s[125]=a("h3",{id:"timg-是什么",tabindex:"-1"},[n("timg 是什么？ "),a("a",{class:"header-anchor",href:"#timg-是什么","aria-label":"Permalink to “timg 是什么？”"},"​")],-1)),a("p",null,[s[21]||(s[21]=n("好了，言归正传，",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[20]||(s[20]=[n("timg",-1)])]),_:1}),s[22]||(s[22]=n(" 有什么用？它能将输入的图片重新调整为终端窗口字符所能显示范围的大小（比如：80 x 25），然后在任何分辨率的终端窗口用彩色字符显示图像。",-1))]),s[126]||(s[126]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/nzlqpq3xn4rs72h4r96k4xlw/%E5%9B%BE%E7%89%87.png",alt:"图片.png-37.3kB"})],-1)),a("p",null,[s[24]||(s[24]=n("这幅图用彩色块字符显示了 ",-1)),i(p,{href:"http://design.ubuntu.com/wp-content/uploads/ubuntu-logo112.png"},{default:e(()=>[...s[23]||(s[23]=[n("Ubuntu 的 logo",-1)])]),_:1}),s[25]||(s[25]=n("，原图是一个 PNG 格式的文件。",-1))]),s[127]||(s[127]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/vo1nxnu4xfaghyib03fnkvq4/%E5%9B%BE%E7%89%87.png",alt:"图片.png-165kB"})],-1)),a("p",null,[s[27]||(s[27]=n("这是 ",-1)),i(p,{href:"https://www.flickr.com/photos/doug88888/5776072628/in/photolist-9WCiNQ-7U3Trc-7YUZBL-5DwkEQ-6e1iT8-a372aS-5F75aL-a1gbow-6eNayj-8gWK2H-5CtH7P-6jVqZv-86RpwN-a2nEnB-aiRmsc-6aKvwK-8hmXrN-5CWDNP-62hWM8-a9smn1-ahQqHw-a22p3w-a36csK-ahN4Pv-7VEmnt-ahMSiT-9NpTa7-5A3Pon-ai7DL7-9TKCqV-ahr7gN-a1boqP-83ZzpH-9Sqjmq-5xujdi-7UmDVb-6J2zQR-5wAGNR-5eERar-5KVDym-5dL8SZ-5S2Uut-7RVyHg-9Z6MAt-aiRiT4-5tLesw-aGLSv6-5ftp6j-5wAVBq-5T2KAP"},{default:e(()=>[...s[26]||(s[26]=[n("@Doug8888 拍摄的花",-1)])]),_:1}),s[28]||(s[28]=n("。",-1))]),a("p",null,[s[30]||(s[30]=n("如果你通过远程连接服务器来管理自己的业务，并想要查看图像文件，那么 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[29]||(s[29]=[n("timg",-1)])]),_:1}),s[31]||(s[31]=n(" 将会特别有用。",-1))]),a("p",null,[s[33]||(s[33]=n("除了静态图片，",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[32]||(s[32]=[n("timg",-1)])]),_:1}),s[34]||(s[34]=n(" 同样也可以显示 gif 动图。",-1))]),s[128]||(s[128]=a("p",null,"那么让我们开始 snap 之旅吧！",-1)),s[129]||(s[129]=a("h3",{id:"熟悉-timg-的源码",tabindex:"-1"},[n("熟悉 timg 的源码 "),a("a",{class:"header-anchor",href:"#熟悉-timg-的源码","aria-label":"Permalink to “熟悉 timg 的源码”"},"​")],-1)),a("p",null,[i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[35]||(s[35]=[n("timg",-1)])]),_:1}),s[37]||(s[37]=n(" 的源码可以在 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[36]||(s[36]=[n("https://github.com/hzeller/timg",-1)])]),_:1}),s[38]||(s[38]=n(" 找到。让我们试着手动编译它，以了解它有什么需求。",-1))]),s[130]||(s[130]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/hovu73yqx08pdhm8qmdg6f6a/%E5%9B%BE%E7%89%87.png",alt:"图片.png-128.4kB"})],-1)),s[131]||(s[131]=a("p",null,[a("code",null,"Makefile"),n(" 在 "),a("code",null,"src/"),n(" 子文件夹中而不是项目的根文件夹中。在 github 页面上，他们说需要安装两个开发包（GraphicsMagic++ 和 WebP），然后使用 "),a("code",null,"make"),n(" 就能生成可执行文件。在截图中可以看到我已经将它们安装好了（在我读完相关的 Readme.md 文件后）。")],-1)),s[132]||(s[132]=a("p",null,[n("因此，在编写 "),a("code",null,"snapcraft.yaml"),n(" 文件时已经有了四条腹稿：")],-1)),a("ol",null,[s[45]||(s[45]=a("li",null,[a("code",null,"Makefile"),n(" 在 "),a("code",null,"src/"),n(" 子文件夹中而不是项目的根文件夹中。")],-1)),s[46]||(s[46]=a("li",null,"这个程序编译时需要两个开发库。",-1)),s[47]||(s[47]=a("li",null,"为了让 timg 以 snap 包形式运行，我们需要将这两个库捆绑在 snap 包中（或者静态链接它们）。",-1)),a("li",null,[i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[39]||(s[39]=[n("timg",-1)])]),_:1}),s[40]||(s[40]=n(" 是用 C++ 编写的，所以需要安装 g++。在编译之前，让我们通过 ",-1)),s[41]||(s[41]=a("code",null,"snapcraft.yaml",-1)),s[42]||(s[42]=n(" 文件来检查 ",-1)),s[43]||(s[43]=a("code",null,"build-essential",-1)),s[44]||(s[44]=n(" 元包是否已经安装。",-1))])]),s[133]||(s[133]=l(`<h3 id="从-snapcraft-开始" tabindex="-1">从 snapcraft 开始 <a class="header-anchor" href="#从-snapcraft-开始" aria-label="Permalink to “从 snapcraft 开始”">​</a></h3><p>让我们新建一个名为 <code>timg-snap/</code> 的文件夹，并在其中运行 <code>snapcraft init</code> 这条命令来创建 <code>snapcraft.yaml</code> 工作的框架。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~$ mkdir timg-snap</span></span>
<span class="line"><span>ubuntu@snaps:~$ cd timg-snap/</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft init</span></span>
<span class="line"><span>Created snap/snapcraft.yaml.</span></span>
<span class="line"><span>Edit the file to your liking or run \`snapcraft\` to get started</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ cat snap/snapcraft.yaml </span></span>
<span class="line"><span>name: my-snap-name # you probably want to &#39;snapcraft register &lt;name&gt;&#39;</span></span>
<span class="line"><span>version: &#39;0.1&#39; # just for humans, typically &#39;1.2+git&#39; or &#39;1.3.2&#39;</span></span>
<span class="line"><span>summary: Single-line elevator pitch for your amazing snap # 79 char long summary</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  This is my-snap&#39;s description. You have a paragraph or two to tell the most important story about your snap. Keep it under 100 words though, we live in tweetspace and your description wants to look good in the snap store.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: devel # must be &#39;stable&#39; to release into candidate/stable channels</span></span>
<span class="line"><span>confinement: devmode # use &#39;strict&#39; once you have the right plugs and slots</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  my-part:</span></span>
<span class="line"><span>    # See &#39;snapcraft plugins&#39;</span></span>
<span class="line"><span>    plugin: nil</span></span></code></pre></div><h3 id="填充元数据" tabindex="-1">填充元数据 <a class="header-anchor" href="#填充元数据" aria-label="Permalink to “填充元数据”">​</a></h3><p><code>snapcraft.yaml</code> 配置文件的上半部分是元数据。我们需要一个一个把它们填满，这算是比较容易的部分。元数据由以下字段组成：</p><ol><li><code>name</code> （名字）—— snap 包的名字，它将公开在 Ubuntu 商店中。</li><li><code>version</code> （版本）—— snap 包的版本号。可以是源代码存储库中一个适当的分支或者标记，如果没有分支或标记的话，也可以是当前日期。</li><li><code>summary</code> （摘要）—— 不超过 80 个字符的简短描述。</li><li><code>description</code> （描述）—— 长一点的描述, 100 个字以下。</li><li><code>grade</code> （等级）—— <code>stable</code> （稳定）或者 <code>devel</code> （开发）。因为我们想要在 Ubuntu 商店的稳定通道中发布这个 snap 包，所以在 snap 包能正常工作后，就把它设置成 <code>stable</code>。</li><li><code>confinement</code> （限制）—— 我们首先设置为 <code>devmode</code> （开发模式），这样系统将不会以任何方式限制 snap 包。一旦它在 <code>devmode</code>下能正常工作，我们再考虑选择 <code>strict</code> （严格）还是 <code>classic</code> （传统）限制。</li></ol><p>我们将使用 <code>timg</code> 这个名字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft register timg</span></span>
<span class="line"><span>Registering timg.</span></span>
<span class="line"><span>You already own the name &#39;timg&#39;.</span></span></code></pre></div><p>是的，这个名字我已经注册了 😃。</p><p>接下来，我们应该选择哪个版本的 timg？</p><p><img src="http://static.zybuluo.com/apollomoon/o64i7jm65u3o12wg3fqqcn7x/%E5%9B%BE%E7%89%87.png" alt="图片.png-72.7kB"></p><p>当在仓库中寻找分支或标记时，我们会发现有一个 v0.9.5 标签，其中有 2016 年 6 月 27 日最新提交的代码。</p><p><img src="http://static.zybuluo.com/apollomoon/t4w1uak9j4h6rfn4ghc8q15k/%E5%9B%BE%E7%89%87.png" alt="图片.png-71.4kB"></p><p>然而主分支（<code>master</code>）中有两个看起来很重要的提交。因此我们使用主分支而不用 <code>v0.9.5</code> 标签的那个。我们使用今天的日期—— <code>20170226</code> 做为版本号。</p><p>我们从仓库中搜集了摘要和描述。其中摘要的内容为 <code>A terminal image viewer</code>，描述的内容为 <code>A viewer that uses 24-Bit color capabilities and unicode character blocks to display images in the terminal</code>。</p><p>最后，将 <code>grade</code> （等级）设置为 <code>stable</code> （稳定），将 <code>confinement</code> 限制设置为 <code>devmode</code> （开发模式）（一直到 snap 包真正起作用）。</p><p>这是更新后的 <code>snapcraft.yaml</code>，带有所有的元数据：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ cat snap/snapcraft.yaml </span></span>
<span class="line"><span>name: timg</span></span>
<span class="line"><span>version: &#39;20170226&#39;</span></span>
<span class="line"><span>summary: A terminal image viewer</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  A viewer that uses 24-Bit color capabilities and unicode character blocks to display images in the terminal.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: stable </span></span>
<span class="line"><span>confinement: devmode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  my-part:</span></span>
<span class="line"><span>    # See &#39;snapcraft plugins&#39;</span></span>
<span class="line"><span>    plugin: nil</span></span></code></pre></div><h3 id="弄清楚-parts-是什么" tabindex="-1">弄清楚 <code>parts:</code> 是什么 <a class="header-anchor" href="#弄清楚-parts-是什么" aria-label="Permalink to “弄清楚 parts: 是什么”">​</a></h3><p>现在我们需要将上面已经存在的 <code>parts:</code> 部分替换成真实的 <code>parts:</code>。</p><p><img src="http://static.zybuluo.com/apollomoon/cvuetj2rzd5nee7pgfcp7wr3/timg-git-url.png" alt="timg-git-url.png-8kB"></p><p><em>Git 仓库的 URL。</em></p><p><img src="http://static.zybuluo.com/apollomoon/dxtl628r1qavphhzu70jiw1n/%E5%9B%BE%E7%89%87.png" alt="图片.png-28.7kB"></p><p><em>存在 Makefile，因此我们需要 make 插件。</em></p>`,24)),a("p",null,[s[50]||(s[50]=n("我们已经知道 git 仓库的 URL 链接，并且 timg 源码中已有了 ",-1)),s[51]||(s[51]=a("code",null,"Makefile",-1)),s[52]||(s[52]=n(" 文件。至于 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[48]||(s[48]=[n("snapcraft make 插件",-1)])]),_:1}),s[53]||(s[53]=n(" 的 Makefile 命令，正如文档所言，这个插件总是会运行 ",-1)),s[54]||(s[54]=a("code",null,"make",-1)),s[55]||(s[55]=n(" 后再运行 ",-1)),s[56]||(s[56]=a("code",null,"make install",-1)),s[57]||(s[57]=n("。为了确认 ",-1)),s[58]||(s[58]=a("code",null,"make",-1)),s[59]||(s[59]=n(" 插件的用法，我查看了 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/"},{default:e(()=>[...s[49]||(s[49]=[n("snapcraft 可用插件列表",-1)])]),_:1}),s[60]||(s[60]=n("。",-1))]),s[134]||(s[134]=l(`<p>因此，我们将最初的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  my-part:</span></span>
<span class="line"><span>    # See &#39;snapcraft plugins&#39;</span></span>
<span class="line"><span>    plugin: nil</span></span></code></pre></div><p>修改为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    plugin: make</span></span></code></pre></div><p>这是当前 <code>snapcraft.yaml</code> 文件的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
<span class="line"><span>version: &#39;20170226&#39;</span></span>
<span class="line"><span>summary: A terminal image viewer</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  A viewer that uses 24-Bit color capabilities and unicode character blocks </span></span>
<span class="line"><span>  to display images in the terminal.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: stable </span></span>
<span class="line"><span>confinement: devmode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    plugin: make</span></span></code></pre></div><p>让我们运行下 <code>snapcraft prime</code> 命令看看会发生什么：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime</span></span>
<span class="line"><span>Preparing to pull timg </span></span>
<span class="line"><span>Pulling timg </span></span>
<span class="line"><span>Cloning into &#39;/home/ubuntu/timg-snap/parts/timg/src&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 144, done.</span></span>
<span class="line"><span>remote: Total 144 (delta 0), reused 0 (delta 0), pack-reused 144</span></span>
<span class="line"><span>Receiving objects: 100% (144/144), 116.00 KiB | 0 bytes/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (89/89), done.</span></span>
<span class="line"><span>Checking connectivity... done.</span></span>
<span class="line"><span>Preparing to build timg </span></span>
<span class="line"><span>Building timg </span></span>
<span class="line"><span>make -j4</span></span>
<span class="line"><span>make: *** No targets specified and no makefile found.  Stop.</span></span>
<span class="line"><span>Command &#39;[&#39;/bin/sh&#39;, &#39;/tmp/tmpem97fh9d&#39;, &#39;make&#39;, &#39;-j4&#39;]&#39; returned non-zero exit status 2</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>我们可以看到 <code>snapcraft</code> 无法在源代码中找到 <code>Makefile</code> 文件，正如我们之前所暗示的，<code>Makefile</code> 位于 <code>src/</code> 子文件夹中。那么，我们可以让 <code>snapcraft</code> 使用 <code>src/</code> 文件夹中的 <code>Makefile</code> 文件吗？</p>`,9)),a("p",null,[s[62]||(s[62]=n("每个 snapcraft 插件都有自己的选项，并且有一些通用选项是所有插件共享的。在本例中，我们希望研究那些",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/source"},{default:e(()=>[...s[61]||(s[61]=[n("与源代码相关的 snapcraft 选项",-1)])]),_:1}),s[63]||(s[63]=n("。我们开始吧：",-1))]),s[135]||(s[135]=l(`<p><strong>source-subdir：path</strong></p><p>snapcraft 会<ruby>检出<rt>checkout</rt></ruby> <code>source</code> 关键字所引用的仓库或者解压归档文件到 <code>parts/&lt;part-name&gt;/src/</code> 中，但是它只会将特定的子目录复制到 <code>parts/&lt;part-name&gt;/build/</code> 中。</p><p>我们已经有了适当的选项，下面更新下 <code>parts</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span></code></pre></div><p>然后再次运行 <code>snapcraft prime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime </span></span>
<span class="line"><span>The &#39;pull&#39; step of &#39;timg&#39; is out of date:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The &#39;source-subdir&#39; part property appears to have changed.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please clean that part&#39;s &#39;pull&#39; step in order to continue</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft clean</span></span>
<span class="line"><span>Cleaning up priming area</span></span>
<span class="line"><span>Cleaning up staging area</span></span>
<span class="line"><span>Cleaning up parts directory</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime </span></span>
<span class="line"><span>Skipping pull timg (already ran)</span></span>
<span class="line"><span>Preparing to build timg </span></span>
<span class="line"><span>Building timg </span></span>
<span class="line"><span>make -j4</span></span>
<span class="line"><span>g++ \`GraphicsMagick++-config --cppflags --cxxflags\` -Wall -O3 -fPIC -c -o timg.o timg.cc</span></span>
<span class="line"><span>g++ -Wall -O3 -fPIC   -c -o terminal-canvas.o terminal-canvas.cc</span></span>
<span class="line"><span>/bin/sh: 1: GraphicsMagick++-config: not found</span></span>
<span class="line"><span>timg.cc:33:22: fatal error: Magick++.h: No such file or directory</span></span>
<span class="line"><span>compilation terminated.</span></span>
<span class="line"><span>Makefile:10: recipe for target &#39;timg.o&#39; failed</span></span>
<span class="line"><span>make: *** [timg.o] Error 1</span></span>
<span class="line"><span>make: *** Waiting for unfinished jobs....</span></span>
<span class="line"><span>Command &#39;[&#39;/bin/sh&#39;, &#39;/tmp/tmpeeyxj5kw&#39;, &#39;make&#39;, &#39;-j4&#39;]&#39; returned non-zero exit status 2</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div>`,6)),a("p",null,[s[65]||(s[65]=n("从错误信息我们可以得知 snapcraft 找不到 GraphicsMagick++ 这个开发库文件。根据 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/common"},{default:e(()=>[...s[64]||(s[64]=[n("snapcraft 常见关键字",-1)])]),_:1}),s[66]||(s[66]=n(" 可知，我们需要在 ",-1)),s[67]||(s[67]=a("code",null,"snapcraft.yaml",-1)),s[68]||(s[68]=n(" 中指定这个库文件，这样 snapcraft 才能安装它。",-1))]),s[136]||(s[136]=l(`<p><strong>build-packages：[deb, deb, deb…]</strong></p><p>列出构建 part 前需要在主机中安装的 Ubuntu 包。这些包通常不会进入最终的 snap 包中，除非它们含有 snap 包中二进制文件直接依赖的库文件（在这种情况下，可以通过 <code>ldd</code> 发现它们），或者在 <code>stage-package</code> 中显式地指定了它们。</p><p>让我们寻找下这个开发包的名字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ apt-cache search graphicsmagick++ | grep dev</span></span>
<span class="line"><span>graphicsmagick-libmagick-dev-compat/xenial 1.3.23-1build1 all</span></span>
<span class="line"><span>libgraphicsmagick++1-dev/xenial 1.3.23-1build1 amd64</span></span>
<span class="line"><span>  format-independent image processing - C++ development files</span></span>
<span class="line"><span>libgraphicsmagick1-dev/xenial 1.3.23-1build1 amd64</span></span>
<span class="line"><span>  format-independent image processing - C development files</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>可以看到包名为 <code>libgraphicsmagick++1-dev</code>，下面是更新后的 <code>parts</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span></code></pre></div><p>再次运行 <code>snapcraft</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft</span></span>
<span class="line"><span>Installing build dependencies: libgraphicsmagick++1-dev</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev libgraphicsmagick-q16-3</span></span>
<span class="line"><span>  libgraphicsmagick1-dev libwebp5</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Building timg </span></span>
<span class="line"><span>make -j4</span></span>
<span class="line"><span>g++ \`GraphicsMagick++-config --cppflags --cxxflags\` -Wall -O3 -fPIC -c -o timg.o timg.cc</span></span>
<span class="line"><span>g++ -Wall -O3 -fPIC   -c -o terminal-canvas.o terminal-canvas.cc</span></span>
<span class="line"><span>g++ -o timg timg.o terminal-canvas.o \`GraphicsMagick++-config --ldflags --libs\`</span></span>
<span class="line"><span>/usr/bin/ld: cannot find -lwebp</span></span>
<span class="line"><span>collect2: error: ld returned 1 exit status</span></span>
<span class="line"><span>Makefile:7: recipe for target &#39;timg&#39; failed</span></span>
<span class="line"><span>make: *** [timg] Error 1</span></span>
<span class="line"><span>Command &#39;[&#39;/bin/sh&#39;, &#39;/tmp/tmptma45jzl&#39;, &#39;make&#39;, &#39;-j4&#39;]&#39; returned non-zero exit status 2</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>虽然只指定了开发库 <code>libgraphicsmagick+1-dev</code>，但 Ubuntu 还安装了一些代码库，包括 <code>libgraphicsmagick ++-q16-12</code>，以及动态代码库 <code>libwebp</code>。</p><p>这里仍然有一个错误，这个是因为缺少开发版本的 <code>webp</code> 库（一个静态库）。我们可以通过下面的命令找到它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ apt-cache search libwebp | grep dev</span></span>
<span class="line"><span>libwebp-dev - Lossy compression of digital photographic images.</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>上面安装的 <code>libwebp5</code> 包只提供了一个动态库（.so）。通过 <code>libwebp-dev</code> 包，我们可以得到相应的静态库（.a）。好了，让我们更新下 <code>parts:</code> 部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages:</span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span></code></pre></div><p>下面是更新后的 <code>snapcraft.yaml</code> 文件的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
<span class="line"><span>version: &#39;20170226&#39;</span></span>
<span class="line"><span>summary: A terminal image viewer</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  A viewer that uses 24-Bit color capabilities and unicode character blocks </span></span>
<span class="line"><span>  to display images in the terminal.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: stable </span></span>
<span class="line"><span>confinement: devmode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span></code></pre></div><p>让我们运行下 <code>snapcraft prime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime</span></span>
<span class="line"><span>Skipping pull timg (already ran)</span></span>
<span class="line"><span>Preparing to build timg </span></span>
<span class="line"><span>Building timg </span></span>
<span class="line"><span>make -j4</span></span>
<span class="line"><span>g++ \`GraphicsMagick++-config --cppflags --cxxflags\` -Wall -O3 -fPIC -c -o timg.o timg.cc</span></span>
<span class="line"><span>g++ -Wall -O3 -fPIC   -c -o terminal-canvas.o terminal-canvas.cc</span></span>
<span class="line"><span>g++ -o timg timg.o terminal-canvas.o \`GraphicsMagick++-config --ldflags --libs\`</span></span>
<span class="line"><span>make install DESTDIR=/home/ubuntu/timg-snap/parts/timg/install</span></span>
<span class="line"><span>install timg /usr/local/bin</span></span>
<span class="line"><span>install: cannot create regular file &#39;/usr/local/bin/timg&#39;: Permission denied</span></span>
<span class="line"><span>Makefile:13: recipe for target &#39;install&#39; failed</span></span>
<span class="line"><span>make: *** [install] Error 1</span></span>
<span class="line"><span>Command &#39;[&#39;/bin/sh&#39;, &#39;/tmp/tmptq_s1itc&#39;, &#39;make&#39;, &#39;install&#39;, &#39;DESTDIR=/home/ubuntu/timg-snap/parts/timg/install&#39;]&#39; returned non-zero exit status 2</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div>`,17)),a("p",null,[s[70]||(s[70]=n("我们遇到了一个新问题。由于 ",-1)),s[71]||(s[71]=a("code",null,"Makefile",-1)),s[72]||(s[72]=n(" 文件是手工编写的，不符合 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[69]||(s[69]=[n("snapcraft make 插件",-1)])]),_:1}),s[73]||(s[73]=n(" 的参数设置，所以不能正确安装到 ",-1)),s[74]||(s[74]=a("code",null,"prime/",-1)),s[75]||(s[75]=n(" 文件夹中。",-1)),s[76]||(s[76]=a("code",null,"Makefile",-1)),s[77]||(s[77]=n(" 会尝试安装到 ",-1)),s[78]||(s[78]=a("code",null,"usr/local/bin",-1)),s[79]||(s[79]=n(" 中。",-1))]),a("p",null,[s[81]||(s[81]=n("我们需要告诉 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[80]||(s[80]=[n("snapcraft make 插件",-1)])]),_:1}),s[82]||(s[82]=n(" 不要运行 ",-1)),s[83]||(s[83]=a("code",null,"make install",-1)),s[84]||(s[84]=n("，而是找到 ",-1)),s[85]||(s[85]=a("code",null,"timg",-1)),s[86]||(s[86]=n(" 可执行文件然后把它放到 ",-1)),s[87]||(s[87]=a("code",null,"prime/",-1)),s[88]||(s[88]=n(" 文件夹中。根据文档的描述：",-1))]),s[137]||(s[137]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- artifacts:</span></span>
<span class="line"><span>（列表）</span></span>
<span class="line"><span>将 make 生成的指定文件复制或者链接到 snap 包安装目录。如果使用，则 \`make install\` 这步操作将被忽略。</span></span></code></pre></div><p>所以，我们需要将一些东西放到 <code>artifacts:</code> 中。但是具体是哪些东西？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap/parts/timg$ ls build/src/</span></span>
<span class="line"><span>Makefile            terminal-canvas.h  timg*     timg.o</span></span>
<span class="line"><span>terminal-canvas.cc  terminal-canvas.o  timg.cc</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap/parts/timg$</span></span></code></pre></div><p>在 <code>build/</code> 子目录中，我们可以找到 <code>make</code> 的输出结果。由于我们设置了 <code>source-subdir:</code> 为 <code>src</code>，所以 <code>artifacts:</code> 的基目录为 <code>build/src</code>。在这里我们可以找到可执行文件 <code>timg</code>，我们需要将它设置为 <code>artifacts:</code> 的一个参数。通过 <code>artifacts:</code>，我们可以把 <code>make</code> 输出的某些文件复制到 snap 包的安装目录（在 <code>prime/</code> 中）。</p><p>下面是更新后 <code>snapcraft.yaml</code> 文件 <code>parts:</code> 部分的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span>
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>让我们运行 <code>snapcraft prime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime</span></span>
<span class="line"><span>Preparing to pull timg </span></span>
<span class="line"><span>Pulling timg </span></span>
<span class="line"><span>Cloning into &#39;/home/ubuntu/timg-snap/parts/timg/src&#39;...</span></span>
<span class="line"><span>remote: Counting objects: 144, done.</span></span>
<span class="line"><span>remote: Total 144 (delta 0), reused 0 (delta 0), pack-reused 144</span></span>
<span class="line"><span>Receiving objects: 100% (144/144), 116.00 KiB | 207.00 KiB/s, done.</span></span>
<span class="line"><span>Resolving deltas: 100% (89/89), done.</span></span>
<span class="line"><span>Checking connectivity... done.</span></span>
<span class="line"><span>Preparing to build timg </span></span>
<span class="line"><span>Building timg </span></span>
<span class="line"><span>make -j4</span></span>
<span class="line"><span>g++ \`GraphicsMagick++-config --cppflags --cxxflags\` -Wall -O3 -fPIC -c -o timg.o timg.cc</span></span>
<span class="line"><span>g++ -Wall -O3 -fPIC   -c -o terminal-canvas.o terminal-canvas.cc</span></span>
<span class="line"><span>g++ -o timg timg.o terminal-canvas.o \`GraphicsMagick++-config --ldflags --libs\`</span></span>
<span class="line"><span>Staging timg </span></span>
<span class="line"><span>Priming timg </span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>我们还将继续迭代。</p><h3 id="导出命令" tabindex="-1">导出命令 <a class="header-anchor" href="#导出命令" aria-label="Permalink to “导出命令”">​</a></h3><p>到目前为止，snapcraft 生成了可执行文件，但没有导出给用户使用的命令。接下来我们需要通过 <code>apps:</code> 导出一个命令。</p><p>首先我们需要知道命令在 <code>prime/</code> 的哪个子文件夹中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ ls prime/</span></span>
<span class="line"><span>meta/  snap/  timg*  usr/</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>它在 <code>prime/</code> 子文件夹的根目录中。现在，我们已经准备好要在 <code>snapcaft.yaml</code> 中增加 <code>apps:</code> 的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ cat snap/snapcraft.yaml </span></span>
<span class="line"><span>name: timg</span></span>
<span class="line"><span>version: &#39;20170226&#39;</span></span>
<span class="line"><span>summary: A terminal image viewer</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  A viewer that uses 24-Bit color capabilities and unicode character blocks </span></span>
<span class="line"><span>  to display images in the terminal.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: stable </span></span>
<span class="line"><span>confinement: devmode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apps:</span></span>
<span class="line"><span>  timg: </span></span>
<span class="line"><span>    command: timg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span>
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>让我们再次运行 <code>snapcraft prime</code>，然后测试下生成的 snap 包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime </span></span>
<span class="line"><span>Skipping pull timg (already ran)</span></span>
<span class="line"><span>Skipping build timg (already ran)</span></span>
<span class="line"><span>Skipping stage timg (already ran)</span></span>
<span class="line"><span>Skipping prime timg (already ran)</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snap try --devmode prime/</span></span>
<span class="line"><span>timg 20170226 mounted from /home/ubuntu/timg-snap/prime</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p><img src="http://static.zybuluo.com/apollomoon/v9y3vutt8li4wwaxeigwr4yz/%E5%9B%BE%E7%89%87.png" alt="图片.png-42.3kB"></p>`,18)),a("p",null,[a("em",null,[s[90]||(s[90]=n("图片来源： ",-1)),i(p,{href:"https://www.flickr.com/photos/mustangjoe/6091603784/"},{default:e(()=>[...s[89]||(s[89]=[n("https://www.flickr.com/photos/mustangjoe/6091603784/",-1)])]),_:1})])]),s[138]||(s[138]=l(`<p>我们可以通过 <code>snap try --devmode prime/ </code> 启用该 snap 包然后测试 <code>timg</code> 命令。这是一种高效的测试方法，可以避免生成 .snap 文件，并且无需安装和卸载它们，因为 <code>snap try prime/</code> 直接使用了 <code>prime/</code> 文件夹中的内容。</p><h3 id="限制-snap" tabindex="-1">限制 snap <a class="header-anchor" href="#限制-snap" aria-label="Permalink to “限制 snap”">​</a></h3><p>到目前为止，snap 包一直是在不受限制的开发模式下运行的。让我们看看如何限制它的运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snap list</span></span>
<span class="line"><span>Name           Version   Rev   Developer  Notes</span></span>
<span class="line"><span>core           16-2      1337  canonical  -</span></span>
<span class="line"><span>timg           20170226  x1               devmode,try</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snap try --jailmode prime</span></span>
<span class="line"><span>timg 20170226 mounted from /home/ubuntu/timg-snap/prime</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snap list</span></span>
<span class="line"><span>Name           Version   Rev   Developer  Notes</span></span>
<span class="line"><span>core           16-2      1337  canonical  -</span></span>
<span class="line"><span>timg           20170226  x2               jailmode,try</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ timg pexels-photo-149813.jpeg </span></span>
<span class="line"><span>Trouble loading pexels-photo-149813.jpeg (Magick: Unable to open file (pexels-photo-149813.jpeg) reported by magick/blob.c:2828 (OpenBlob))</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>通过这种方式，我们可以无需修改 <code>snapcraft.yaml</code> 文件就从开发模式（<code>devmode</code>）切换到限制模式（<code>jailmode</code>）（<code>confinement: strict</code>）。正如预期的那样，<code>timg</code> 无法读取图像，因为我们没有开放访问文件系统的权限。</p><p>现在，我们需要作出决定。使用限制模式，我们可以很容易授予某个命令访问用户 <code>$HOME</code> 目录中文件的权限，但是只能访问那里。如果图像文件位于其它地方，我们总是需要复制到 <code>$HOME</code> 目录并在 <code>$HOME</code> 的副本上运行 timg。如果我们觉得可行，那我们可以设置 <code>snapcraf.yaml</code> 为:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
<span class="line"><span>version: &#39;20170226&#39;</span></span>
<span class="line"><span>summary: A terminal image viewer</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  A viewer that uses 24-Bit color capabilities and unicode character blocks </span></span>
<span class="line"><span>  to display images in the terminal.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: stable </span></span>
<span class="line"><span>confinement: strict</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apps:</span></span>
<span class="line"><span>  timg: </span></span>
<span class="line"><span>    command: timg</span></span>
<span class="line"><span>    plugs: [home]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span>
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>另一方面，如果希望 timg snap 包能访问整个文件系统，我们可以设置传统限制来实现。对应的 <code>snapcraft.yaml</code> 内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
<span class="line"><span>version: &#39;20170226&#39;</span></span>
<span class="line"><span>summary: A terminal image viewer</span></span>
<span class="line"><span>description: |</span></span>
<span class="line"><span>  A viewer that uses 24-Bit color capabilities and unicode character blocks </span></span>
<span class="line"><span>  to display images in the terminal.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>grade: stable </span></span>
<span class="line"><span>confinement: classic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apps:</span></span>
<span class="line"><span>  timg: </span></span>
<span class="line"><span>    command: timg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span>
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>接下来我们将选择严格（<code>strict</code>）约束选项。因此，图像应该只能放在 $HOME 中。</p><h3 id="打包和测试" tabindex="-1">打包和测试 <a class="header-anchor" href="#打包和测试" aria-label="Permalink to “打包和测试”">​</a></h3><p>让我们打包这个 snap，也就是制作 .snap 文件，然后在新安装的 Ubuntu 系统上对它进行测试。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft </span></span>
<span class="line"><span>Skipping pull timg (already ran)</span></span>
<span class="line"><span>Skipping build timg (already ran)</span></span>
<span class="line"><span>Skipping stage timg (already ran)</span></span>
<span class="line"><span>Skipping prime timg (already ran)</span></span>
<span class="line"><span>Snapping &#39;timg&#39; \\                                                 </span></span>
<span class="line"><span>Snapped timg_20170226_amd64.snap</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>我们如何在几秒钟内得到一个全新安装的 Ubuntu 系统来对 snap 包进行测试？</p>`,14)),a("p",null,[s[92]||(s[92]=n("请查看 ",-1)),i(p,{href:"https://blog.simos.info/trying-out-lxd-containers-on-our-ubuntu/"},{default:e(()=>[...s[91]||(s[91]=[n("尝试在 Ubuntu 上使用 LXD 容器",-1)])]),_:1}),s[93]||(s[93]=n("，并在你的系统上设置 LXD。然后回到这里，尝试运行下面的命令：",-1))]),s[139]||(s[139]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ lxc launch ubuntu:x snaptesting</span></span>
<span class="line"><span>Creating snaptesting</span></span>
<span class="line"><span>Starting snaptesting</span></span>
<span class="line"><span>$ lxc file push timg_20170226_amd64.snap snaptesting/home/ubuntu/</span></span>
<span class="line"><span>$ lxc exec snaptesting -- sudo su - ubuntu</span></span>
<span class="line"><span>To run a command as administrator (user &quot;root&quot;), use &quot;sudo &lt;command&gt;&quot;.</span></span>
<span class="line"><span>See &quot;man sudo_root&quot; for details.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ubuntu@snaptesting:~$ ls</span></span>
<span class="line"><span>timg_20170226_amd64.snap</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ snap install timg_20170226_amd64.snap </span></span>
<span class="line"><span>error: access denied (try with sudo)</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ sudo snap install timg_20170226_amd64.snap</span></span>
<span class="line"><span>error: cannot find signatures with metadata for snap &quot;timg_20170226_amd64.snap&quot;</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ sudo snap install timg_20170226_amd64.snap --dangerous</span></span>
<span class="line"><span>error: cannot perform the following tasks:</span></span>
<span class="line"><span>- Mount snap &quot;core&quot; (1337) ([start snap-core-1337.mount] failed with exit status 1: Job for snap-core-1337.mount failed. See &quot;systemctl status snap-core-1337.mount&quot; and &quot;journalctl -xe&quot; for details.</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ sudo apt install squashfuse</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Setting up squashfuse (0.1.100-0ubuntu1~ubuntu16.04.1) ...</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ sudo snap install timg_20170226_amd64.snap --dangerous</span></span>
<span class="line"><span>timg 20170226 installed</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ wget https://farm7.staticflickr.com/6187/6091603784_d6960c8be2_z_d.jpg</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>2017-02-26 22:12:18 (636 KB/s) - ‘6091603784_d6960c8be2_z_d.jpg’ saved [240886/240886]</span></span>
<span class="line"><span>ubuntu@snaptesting:~$ timg 6091603784_d6960c8be2_z_d.jpg </span></span>
<span class="line"><span>[it worked!]</span></span>
<span class="line"><span>ubuntu@snaptesting:~$</span></span></code></pre></div><p>我们启动了一个名为 <code>snaptesting</code> 的 LXD 容器，并将 .snap 文件复制进去。然后，通过普通用户连接到容器，并尝试安装 snap 包。最初，我们安装失败了，因为在无特权的 LXD 容器中安装 snap 包需要使用 <code>sudo</code> 。接着又失败了，因为 .snap 没有经过签名（我们需要使用 <code>--dangerous</code> 参数）。然而还是失败了，这次是因为我们需要安装 <code>squashfuse</code> 包（Ubuntu 16.04 镜像中没有预装）。最后，我们成功安装了snap，并设法查看了图像。</p><p>在一个全新安装的 Linux 系统中测试 snap 包是很重要的，因为这样才能确保 snap 包中包含所有必须的代码库。在这个例子中，我们使用了静态库并运行良好。</p><h3 id="发布到-ubuntu-商店" tabindex="-1">发布到 Ubuntu 商店 <a class="header-anchor" href="#发布到-ubuntu-商店" aria-label="Permalink to “发布到 Ubuntu 商店”">​</a></h3>`,4)),a("p",null,[s[95]||(s[95]=n("这是 ",-1)),i(p,{href:"https://snapcraft.io/docs/build-snaps/publish"},{default:e(()=>[...s[94]||(s[94]=[n("发布 snap 包到 Ubuntu 商店的说明",-1)])]),_:1}),s[96]||(s[96]=n("。 在之前的教程中，我们已经发布了一些 snap 包。对于 ",-1)),s[97]||(s[97]=a("code",null,"timg",-1)),s[98]||(s[98]=n(" 来说，我们设置了严格限制和稳定等级。因此，我们会将它发布到稳定通道。",-1))]),s[140]||(s[140]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ snapcraft push timg_20170226_amd64.snap </span></span>
<span class="line"><span>Pushing &#39;timg_20170226_amd64.snap&#39; to the store.</span></span>
<span class="line"><span>Uploading timg_20170226_amd64.snap [                                       ]   0%</span></span>
<span class="line"><span>Uploading timg_20170226_amd64.snap [=======================================] 100%</span></span>
<span class="line"><span>Ready to release!|                                                               </span></span>
<span class="line"><span>Revision 6 of &#39;timg&#39; created.</span></span>
<span class="line"><span>$ snapcraft release timg 6 stable</span></span>
<span class="line"><span>Track    Arch    Series    Channel    Version    Revision</span></span>
<span class="line"><span>latest   amd64   16        stable     20170226   6</span></span>
<span class="line"><span>                           candidate  ^          ^</span></span>
<span class="line"><span>                           beta       0.9.5      5</span></span>
<span class="line"><span>                           edge       0.9.5      5</span></span>
<span class="line"><span>The &#39;stable&#39; channel is now open.</span></span></code></pre></div><p>我们把 .snap 包推送到 Ubuntu 商店后，得到了一个 <code>Revision 6</code>。然后，我们将 timg <code>Revision 6</code> 发布到了 Ubuntu 商店的稳定通道。</p><p>在候选通道中没有已发布的 snap 包，它继承的是稳定通道的包，所以显示 <code>^</code> 字符。</p><p>在之前的测试中，我将一些较老版本的 snap 包上传到了测试和边缘通道。这些旧版本使用了 timg 标签为 <code>0.9.5</code> 的源代码。</p><p>我们可以通过将稳定版本发布到测试和边缘通道来移除旧的 0.9.5 版本的包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ snapcraft release timg 6 beta</span></span>
<span class="line"><span>Track    Arch    Series    Channel    Version    Revision</span></span>
<span class="line"><span>latest   amd64   16        stable     20170226   6</span></span>
<span class="line"><span>                           candidate  ^          ^</span></span>
<span class="line"><span>                           beta       20170226   6</span></span>
<span class="line"><span>                           edge       0.9.5      5</span></span>
<span class="line"><span>$ snapcraft release timg 6 edge</span></span>
<span class="line"><span>Track    Arch    Series    Channel    Version    Revision</span></span>
<span class="line"><span>latest   amd64   16        stable     20170226   6</span></span>
<span class="line"><span>                           candidate  ^          ^</span></span>
<span class="line"><span>                           beta       20170226   6</span></span>
<span class="line"><span>                           edge       20170226   6</span></span></code></pre></div><h3 id="使用-timg" tabindex="-1">使用 timg <a class="header-anchor" href="#使用-timg" aria-label="Permalink to “使用 timg”">​</a></h3><p>让我们不带参数运行 <code>timg</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaptesting:~$ timg</span></span>
<span class="line"><span>Expected image filename.</span></span>
<span class="line"><span>usage: /snap/timg/x1/timg [options] &lt;image&gt; [&lt;image&gt;...]</span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>    -g&lt;w&gt;x&lt;h&gt;  : Output pixel geometry. Default from terminal 80x48</span></span>
<span class="line"><span>    -s[&lt;ms&gt;]   : Scroll horizontally (optionally: delay ms (60)).</span></span>
<span class="line"><span>    -d&lt;dx:dy&gt;  : delta x and delta y when scrolling (default: 1:0).</span></span>
<span class="line"><span>    -w&lt;seconds&gt;: If multiple images given: Wait time between (default: 0.0).</span></span>
<span class="line"><span>    -t&lt;seconds&gt;: Only animation or scrolling: stop after this time.</span></span>
<span class="line"><span>    -c&lt;num&gt;    : Only Animation or scrolling: number of runs through a full cycle.</span></span>
<span class="line"><span>    -C         : Clear screen before showing image.</span></span>
<span class="line"><span>    -F         : Print filename before showing picture.</span></span>
<span class="line"><span>    -v         : Print version and exit.</span></span>
<span class="line"><span>If both -c and -t are given, whatever comes first stops.</span></span>
<span class="line"><span>If both -w and -t are given for some animation/scroll, -t takes precedence</span></span>
<span class="line"><span>ubuntu@snaptesting:~$</span></span></code></pre></div><p>这里提到当前我们终端模拟器的缩放级别，即分辨率为：80 × 48。</p><p>让我们缩小一点，并最大化 GNOME 终端窗口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-g&lt;w&gt;x&lt;h&gt;  : Output pixel geometry. Default from terminal 635x428</span></span></code></pre></div><p>这是一个更好的解决方案，但我几乎看不到字符，因为他们太小了。让我们调用前面的命令再次显示这辆车。</p><p><img src="http://static.zybuluo.com/apollomoon/clnv44g3bwhaqog7o1jpvpcd/%E5%9B%BE%E7%89%87.png" alt="图片.png-904.9kB"></p><p>你所看到的是调整后的图像（1080p）。虽然它是用彩色文本字符显示的，但看起来依旧很棒。</p><p>接下来呢？<code>timg</code> 其实也可以播放 gif 动画哦！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wget https://m.popkey.co/9b7141/QbAV_f-maxage-0.gif -O JonahHillAmazed.gif$ timg JonahHillAmazed.gif</span></span></code></pre></div>`,17)),a("p",null,[s[100]||(s[100]=n("你可以试着安装 ",-1)),s[101]||(s[101]=a("code",null,"timg",-1)),s[102]||(s[102]=n(" 来体验 gif 动画。要是不想自己动手，可以在 ",-1)),i(p,{href:"https://asciinema.org/a/dezbe2gpye84e0pjndp8t0pvh"},{default:e(()=>[...s[99]||(s[99]=[n("asciinema",-1)])]),_:1}),s[103]||(s[103]=n(" 上查看相关记录 （如果视频看上去起伏不定的，请重新运行它）。",-1))]),s[141]||(s[141]=a("p",null,"谢谢阅读！",-1)),s[142]||(s[142]=a("hr",null,null,-1)),s[143]||(s[143]=a("p",null,"译者简介：",-1)),s[144]||(s[144]=a("p",null,[n("经常混迹于 snapcraft.io，对 Ubuntu Core、Snaps 和 Snapcraft 有着浓厚的兴趣，并致力于将这些还在快速发展的新技术通过翻译或原创的方式介绍到中文世界。有兴趣的小伙伴也可以关注译者个人公众号： "),a("code",null,"Snapcraft")],-1)),s[145]||(s[145]=a("hr",null,null,-1)),a("p",null,[s[105]||(s[105]=n("via：",-1)),i(p,{href:"https://blog.simos.info/how-to-create-a-snap-for-timg-with-snapcraft-on-ubuntu/"},{default:e(()=>[...s[104]||(s[104]=[n("https://blog.simos.info/how-to-create-a-snap-for-timg-with-snapcraft-on-ubuntu/",-1)])]),_:1})]),a("p",null,[s[109]||(s[109]=n("作者：",-1)),i(p,{href:"https://blog.simos.info/"},{default:e(()=>[...s[106]||(s[106]=[n("Mi blog lah!",-1)])]),_:1}),s[110]||(s[110]=n(" 译者：",-1)),i(p,{href:"https://github.com/Snapcrafter"},{default:e(()=>[...s[107]||(s[107]=[n("Snapcrafter",-1)])]),_:1}),s[111]||(s[111]=n(" 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[108]||(s[108]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[114]||(s[114]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[112]||(s[112]=[n("LCTT",-1)])]),_:1}),s[115]||(s[115]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[113]||(s[113]=[n("Linux中国",-1)])]),_:1}),s[116]||(s[116]=n(" 荣誉推出",-1))])])}const C=t(g,[["render",c]]);export{v as __pageData,C as default};
