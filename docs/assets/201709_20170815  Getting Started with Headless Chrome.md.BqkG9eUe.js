import{_ as o,a0 as t,w as r,s as d,I as a,x as n,a1 as p,A as l,ao as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"Headless Chrome 入门 | LCTT x X-CMD","titleTemplate":false,"description":"Headless Chrome 入门 | LCTT (201709) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Headless Chrome 入门 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Headless Chrome 入门 | LCTT (201709) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201709/20170815  Getting Started with Headless Chrome","title":"Headless Chrome 入门","tag":"201709","desc":""},"relativePath":"201709/20170815  Getting Started with Headless Chrome.md","filePath":"[post].md"}'),u={name:"201709/20170815  Getting Started with Headless Chrome.md"};function h(m,s,g,b,c,f){const e=t("Link");return r(),d("div",null,[s[119]||(s[119]=a("h1",{id:"headless-chrome-入门",tabindex:"-1"},[n("Headless Chrome 入门 "),a("a",{class:"header-anchor",href:"#headless-chrome-入门","aria-label":"Permalink to “Headless Chrome 入门”"},"​")],-1)),s[120]||(s[120]=a("h3",{id:"摘要",tabindex:"-1"},[n("摘要 "),a("a",{class:"header-anchor",href:"#摘要","aria-label":"Permalink to “摘要”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("在 Chrome 59　中开始搭载 ",-1)),p(e,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md"},{default:l(()=>[...s[0]||(s[0]=[n("Headless Chrome",-1)])]),_:1}),s[2]||(s[2]=n("。这是一种在",-1)),s[3]||(s[3]=a("ruby",null,[n("无需显示"),a("rt",null,"headless")],-1)),s[4]||(s[4]=n("的环境下运行 Chrome 浏览器的方式。从本质上来说，就是不用 chrome 浏览器来运行 Chrome 的功能！它将 Chromium 和 Blink 渲染引擎提供的所有现代 Web 平台的功能都带入了命令行。",-1))]),s[121]||(s[121]=a("p",null,"它有什么用？",-1)),s[122]||(s[122]=a("p",null,[a("ruby",null,[n("无需显示"),a("rt",null,"headless")]),n("的浏览器对于自动化测试和不需要可视化 UI 界面的服务器环境是一个很好的工具。例如，你可能需要对真实的网页运行一些测试，创建一个 PDF，或者只是检查浏览器如何呈现 URL。")],-1)),a("blockquote",null,[a("p",null,[s[6]||(s[6]=a("strong",null,"注意：",-1)),s[7]||(s[7]=n(" Mac 和 Linux 上的 Chrome 59 都可以运行无需显示模式。",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=686608"},{default:l(()=>[...s[5]||(s[5]=[n("对 Windows 的支持",-1)])]),_:1}),s[8]||(s[8]=n("将在 Chrome 60 中提供。要检查你使用的 Chrome 版本，请在浏览器中打开 ",-1)),s[9]||(s[9]=a("code",null,"chrome://version",-1)),s[10]||(s[10]=n("。",-1))])]),s[123]||(s[123]=i(`<h3 id="开启无需显示headless模式-命令行界面" tabindex="-1">开启<ruby>无需显示<rt>headless</rt></ruby>模式（命令行界面） <a class="header-anchor" href="#开启无需显示headless模式-命令行界面" aria-label="Permalink to “开启无需显示headless模式（命令行界面）”">​</a></h3><p>开启<ruby>无需显示<rt>headless</rt></ruby>模式最简单的方法是从命令行打开 Chrome 二进制文件。如果你已经安装了 Chrome 59 以上的版本，请使用 <code>--headless</code> 标志启动 Chrome：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome \\</span></span>
<span class="line"><span>  --headless \\                   # Runs Chrome in headless mode.</span></span>
<span class="line"><span>  --disable-gpu \\                # Temporarily needed for now.</span></span>
<span class="line"><span>  --remote-debugging-port=9222 \\</span></span>
<span class="line"><span>  https://www.chromestatus.com   # URL to open. Defaults to about:blank.</span></span></code></pre></div><blockquote><p><strong>注意：</strong>目前你仍然需要使用 <code>--disable-gpu</code> 标志。但它最终会不需要的。</p></blockquote><p><code>chrome</code> 二进制文件应该指向你安装 Chrome 的位置。确切的位置会因平台差异而不同。当前我在 Mac 上操作，所以我为安装的每个版本的 Chrome 都创建了方便使用的别名。</p><p>如果您使用 Chrome 的稳定版，并且无法获得测试版，我建议您使用 <code>chrome-canary</code> 版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alias chrome=&quot;/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome&quot;</span></span>
<span class="line"><span>alias chrome-canary=&quot;/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary&quot;</span></span>
<span class="line"><span>alias chromium=&quot;/Applications/Chromium.app/Contents/MacOS/Chromium&quot;</span></span></code></pre></div>`,7)),a("p",null,[s[12]||(s[12]=n("在",-1)),p(e,{href:"https://www.google.com/chrome/browser/canary.html"},{default:l(()=>[...s[11]||(s[11]=[n("这里",-1)])]),_:1}),s[13]||(s[13]=n("下载 Chrome Cannary。",-1))]),s[124]||(s[124]=a("h3",{id:"命令行的功能",tabindex:"-1"},[n("命令行的功能 "),a("a",{class:"header-anchor",href:"#命令行的功能","aria-label":"Permalink to “命令行的功能”"},"​")],-1)),a("p",null,[s[16]||(s[16]=n("在某些情况下，你可能不需要",-1)),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome#node"},{default:l(()=>[...s[14]||(s[14]=[n("以脚本编程的方式",-1)])]),_:1}),s[17]||(s[17]=n("操作 Headless Chrome。可以使用一些",-1)),p(e,{href:"https://cs.chromium.org/chromium/src/headless/app/headless_shell_switches.cc"},{default:l(()=>[...s[15]||(s[15]=[n("有用的命令行标志",-1)])]),_:1}),s[18]||(s[18]=n("来执行常见的任务。",-1))]),s[125]||(s[125]=i(`<h4 id="打印-dom" tabindex="-1">打印 DOM <a class="header-anchor" href="#打印-dom" aria-label="Permalink to “打印 DOM”">​</a></h4><p><code>--dump-dom</code> 标志将打印 <code>document.body.innerHTML</code> 到标准输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome --headless --disable-gpu --dump-dom https://www.chromestatus.com/</span></span></code></pre></div><h4 id="创建一个-pdf" tabindex="-1">创建一个 PDF <a class="header-anchor" href="#创建一个-pdf" aria-label="Permalink to “创建一个 PDF”">​</a></h4><p><code>--print-to-pdf</code> 标志将页面转出为 PDF 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome --headless --disable-gpu --print-to-pdf https://www.chromestatus.com/</span></span></code></pre></div><h4 id="截图" tabindex="-1">截图 <a class="header-anchor" href="#截图" aria-label="Permalink to “截图”">​</a></h4><p>要捕获页面的屏幕截图，请使用 <code>--screenshot</code> 标志：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome --headless --disable-gpu --screenshot https://www.chromestatus.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Size of a standard letterhead.</span></span>
<span class="line"><span>chrome --headless --disable-gpu --screenshot --window-size=1280,1696 https://www.chromestatus.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Nexus 5x</span></span>
<span class="line"><span>chrome --headless --disable-gpu --screenshot --window-size=412,732 https://www.chromestatus.com/</span></span></code></pre></div>`,9)),a("p",null,[s[20]||(s[20]=n("使用 ",-1)),s[21]||(s[21]=a("code",null,"--screenshot",-1)),s[22]||(s[22]=n(" 标志运行 Headless Chrome 将在当前工作目录中生成一个名为 ",-1)),s[23]||(s[23]=a("code",null,"screenshot.png",-1)),s[24]||(s[24]=n(" 的文件。如果你正在寻求整个页面的截图，那么会涉及到很多事情。来自 David Schnurr 的一篇很棒的博文已经介绍了这一内容。请查看 ",-1)),p(e,{href:"https://medium.com/@dschnr/using-headless-chrome-as-an-automated-screenshot-tool-4b07dffba79a"},{default:l(()=>[...s[19]||(s[19]=[n("使用 headless Chrome 作为自动截屏工具",-1)])]),_:1}),s[25]||(s[25]=n("。",-1))]),s[126]||(s[126]=i(`<h4 id="repl-模式-read-eval-print-loop" tabindex="-1">REPL 模式 (read-eval-print loop) <a class="header-anchor" href="#repl-模式-read-eval-print-loop" aria-label="Permalink to “REPL 模式 (read-eval-print loop)”">​</a></h4><p><code>--repl</code> 标志可以使 Headless Chrome 运行在一个你可以使用浏览器评估 JS 表达式的模式下。执行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chrome --headless --disable-gpu --repl https://www.chromestatus.com/</span></span>
<span class="line"><span>[0608/112805.245285:INFO:headless_shell.cc(278)] Type a Javascript expression to evaluate or &quot;quit&quot; to exit.</span></span>
<span class="line"><span>&gt;&gt;&gt; location.href</span></span>
<span class="line"><span>{&quot;result&quot;:{&quot;type&quot;:&quot;string&quot;,&quot;value&quot;:&quot;https://www.chromestatus.com/features&quot;}}</span></span>
<span class="line"><span>&gt;&gt;&gt; quit</span></span></code></pre></div><h3 id="在没有浏览器界面的情况下调试-chrome" tabindex="-1">在没有浏览器界面的情况下调试 Chrome <a class="header-anchor" href="#在没有浏览器界面的情况下调试-chrome" aria-label="Permalink to “在没有浏览器界面的情况下调试 Chrome”">​</a></h3>`,4)),a("p",null,[s[27]||(s[27]=n("当你使用 ",-1)),s[28]||(s[28]=a("code",null,"--remote-debugging-port=9222",-1)),s[29]||(s[29]=n(" 运行 Chrome 时，它会启动一个支持 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[26]||(s[26]=[n("DevTools 协议",-1)])]),_:1}),s[30]||(s[30]=n("的实例。该协议用于与 Chrome 进行通信，并且驱动 Headless Chrome 浏览器实例。它也是一个类似 Sublime、VS Code 和 Node 的工具，可用于应用程序的远程调试。#协同效应",-1))]),s[127]||(s[127]=i('<p>由于你没有浏览器用户界面可用来查看网页，请在另一个浏览器中输入 <code>http://localhost:9222</code>，以检查一切是否正常。你将会看到一个<ruby>可检查的<rt>inspectable</rt></ruby>页面的列表，可以点击它们来查看 Headless Chrome 正在呈现的内容：</p><p><img src="https://developers.google.com/web/updates/images/2017/04/headless-chrome/remote-debugging-ui.jpg" alt="DevTools Remote"></p><p><em>DevTools 远程调试界面</em></p><p>从这里，你就可以像往常一样使用熟悉的 DevTools 来检查、调试和调整页面了。如果你以编程方式使用 Headless Chrome，这个页面也是一个功能强大的调试工具，用于查看所有通过网络与浏览器交互的原始 DevTools 协议命令。</p><h3 id="使用编程模式-node" tabindex="-1">使用编程模式 （Node） <a class="header-anchor" href="#使用编程模式-node" aria-label="Permalink to “使用编程模式 （Node）”">​</a></h3><h4 id="puppeteer-库-api" tabindex="-1">Puppeteer 库 API <a class="header-anchor" href="#puppeteer-库-api" aria-label="Permalink to “Puppeteer 库 API”">​</a></h4>',6)),a("p",null,[p(e,{href:"https://github.com/GoogleChrome/puppeteer"},{default:l(()=>[...s[31]||(s[31]=[n("Puppeteer",-1)])]),_:1}),s[32]||(s[32]=n(" 是一个由 Chrome 团队开发的 Node 库。它提供了一个高层次的 API 来控制无需显示版（或 完全版）的 Chrome。它与其他自动化测试库，如 Phantom 和 NightmareJS 相类似，但是只适用于最新版本的 Chrome。",-1))]),s[128]||(s[128]=i(`<p>除此之外，Puppeteer 还可用于轻松截取屏幕截图，创建 PDF，页面间导航以及获取有关这些页面的信息。如果你想快速地自动化进行浏览器测试，我建议使用该库。它隐藏了 DevTools 协议的复杂性，并可以处理诸如启动 Chrome 调试实例等繁冗的任务。</p><p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add puppeteer</span></span></code></pre></div><p><strong>例子</strong> - 打印用户代理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const puppeteer = require(&#39;puppeteer&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async() =&gt; {</span></span>
<span class="line"><span>  const browser = await puppeteer.launch();</span></span>
<span class="line"><span>  console.log(await browser.version());</span></span>
<span class="line"><span>  browser.close();</span></span>
<span class="line"><span>})();</span></span></code></pre></div><p><strong>例子</strong> - 获取页面的屏幕截图：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const puppeteer = require(&#39;puppeteer&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const browser = await puppeteer.launch();</span></span>
<span class="line"><span>const page = await browser.newPage();</span></span>
<span class="line"><span>await page.goto(&#39;https://www.chromestatus.com&#39;, {waitUntil: &#39;networkidle&#39;});</span></span>
<span class="line"><span>await page.pdf({path: &#39;page.pdf&#39;, format: &#39;A4&#39;});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>browser.close();</span></span>
<span class="line"><span>})();</span></span></code></pre></div>`,7)),a("p",null,[s[34]||(s[34]=n("查看 ",-1)),p(e,{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"},{default:l(()=>[...s[33]||(s[33]=[n("Puppeteer 的文档",-1)])]),_:1}),s[35]||(s[35]=n("，了解完整 API 的更多信息。",-1))]),s[129]||(s[129]=a("h4",{id:"cri-库",tabindex:"-1"},[n("CRI 库 "),a("a",{class:"header-anchor",href:"#cri-库","aria-label":"Permalink to “CRI 库”"},"​")],-1)),a("p",null,[p(e,{href:"https://www.npmjs.com/package/chrome-remote-interface"},{default:l(()=>[...s[36]||(s[36]=[n("chrome-remote-interface",-1)])]),_:1}),s[38]||(s[38]=n(" 是一个比 Puppeteer API 更低层次的库。如果你想要更接近原始信息和更直接地使用 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[37]||(s[37]=[n("DevTools 协议",-1)])]),_:1}),s[39]||(s[39]=n("的话，我推荐使用它。",-1))]),s[130]||(s[130]=a("p",null,[a("strong",null,"启动 Chrome")],-1)),s[131]||(s[131]=a("p",null,"chrome-remote-interface 不会为你启动 Chrome，所以你要自己启动它。",-1)),a("p",null,[s[41]||(s[41]=n("在前面的 CLI 章节中，我们使用 ",-1)),s[42]||(s[42]=a("code",null,"--headless --remote-debugging-port=9222",-1)),s[43]||(s[43]=n()),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome#cli"},{default:l(()=>[...s[40]||(s[40]=[n("手动启动了 Chrome",-1)])]),_:1}),s[44]||(s[44]=n("。但是，要想做到完全自动化测试，你可能希望从你的应用程序中启动 Chrome。",-1))]),s[132]||(s[132]=i(`<p>其中一种方法是使用 <code>child_process</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const execFile = require(&#39;child_process&#39;).execFile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function launchHeadlessChrome(url, callback) {</span></span>
<span class="line"><span>  // Assuming MacOSx.</span></span>
<span class="line"><span>  const CHROME = &#39;/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome&#39;;</span></span>
<span class="line"><span>  execFile(CHROME, [&#39;--headless&#39;, &#39;--disable-gpu&#39;, &#39;--remote-debugging-port=9222&#39;, url], callback);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>launchHeadlessChrome(&#39;https://www.chromestatus.com&#39;, (err, stdout, stderr) =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>但是如果你想要在多个平台上运行可移植的解决方案，事情会变得很棘手。请注意 Chrome 的硬编码路径：</p><p><strong>使用 ChromeLauncher</strong></p>`,4)),a("p",null,[p(e,{href:"https://developers.google.com/web/tools/lighthouse/"},{default:l(()=>[...s[45]||(s[45]=[n("Lighthouse",-1)])]),_:1}),s[47]||(s[47]=n(" 是一个令人称奇的网络应用的质量测试工具。Lighthouse 内部开发了一个强大的用于启动 Chrome 的模块，现在已经被提取出来单独使用。",-1)),p(e,{href:"https://www.npmjs.com/package/chrome-launcher"},{default:l(()=>[...s[46]||(s[46]=[n("chrome-launcher NPM 模块",-1)])]),_:1}),s[48]||(s[48]=n(" 可以找到 Chrome 的安装位置，设置调试实例，启动浏览器和在程序运行完之后将其杀死。它最好的一点是可以跨平台工作，感谢 Node！",-1))]),s[133]||(s[133]=i(`<p>默认情况下，<strong>chrome-launcher 会尝试启动 Chrome Canary</strong>（如果已经安装），但是你也可以更改它，手动选择使用的 Chrome 版本。要想使用它，首先从 npm 安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add chrome-launcher</span></span></code></pre></div><p><strong>例子</strong> - 使用 <code>chrome-launcher</code> 启动 Headless Chrome：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const chromeLauncher = require(&#39;chrome-launcher&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Optional: set logging level of launcher to see its output.</span></span>
<span class="line"><span>// Install it using: yarn add lighthouse-logger</span></span>
<span class="line"><span>// const log = require(&#39;lighthouse-logger&#39;);</span></span>
<span class="line"><span>// log.setLevel(&#39;info&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Launches a debugging instance of Chrome.</span></span>
<span class="line"><span> * @param {boolean=} headless True (default) launches Chrome in headless mode.</span></span>
<span class="line"><span> *     False launches a full version of Chrome.</span></span>
<span class="line"><span> * @return {Promise&lt;ChromeLauncher&gt;}</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function launchChrome(headless=true) {</span></span>
<span class="line"><span>  return chromeLauncher.launch({</span></span>
<span class="line"><span>    // port: 9222,</span><span> // Uncomment to force a specific port of your choice.</span></span>
<span class="line"><span>    chromeFlags: [</span></span>
<span class="line"><span>      &#39;--window-size=412,732&#39;,</span></span>
<span class="line"><span>      &#39;--disable-gpu&#39;,</span></span>
<span class="line"><span>      headless ? &#39;--headless&#39; : &#39;&#39;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>launchChrome().then(chrome =&gt; {</span></span>
<span class="line"><span>  console.log(\`Chrome debuggable on port: \${chrome.port}\`);</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  // chrome.kill();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>运行这个脚本没有做太多的事情，但你应该能在任务管理器中看到启动了一个 Chrome 的实例，它加载了页面 <code>about:blank</code>。记住，它不会有任何的浏览器界面，我们是无需显示的。</p><p>为了控制浏览器，我们需要 DevTools 协议！</p><h4 id="检索有关页面的信息" tabindex="-1">检索有关页面的信息 <a class="header-anchor" href="#检索有关页面的信息" aria-label="Permalink to “检索有关页面的信息”">​</a></h4>`,7)),a("blockquote",null,[a("p",null,[s[50]||(s[50]=a("strong",null,"警告：",-1)),s[51]||(s[51]=n(" DevTools 协议可以做一些有趣的事情，但是起初可能有点令人生畏。我建议先花点时间浏览 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[49]||(s[49]=[n("DevTools 协议查看器",-1)])]),_:1}),s[52]||(s[52]=n("。然后，转到 ",-1)),s[53]||(s[53]=a("code",null,"chrome-remote-interface",-1)),s[54]||(s[54]=n(" 的 API 文档，看看它是如何包装原始协议的。",-1))])]),s[134]||(s[134]=i(`<p>我们来安装该库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add chrome-remote-interface</span></span></code></pre></div><p><strong>例子</strong> - 打印用户代理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CDP = require(&#39;chrome-remote-interface&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>launchChrome().then(async chrome =&gt; {</span></span>
<span class="line"><span>  const version = await CDP.Version({port: chrome.port});</span></span>
<span class="line"><span>  console.log(version[&#39;User-Agent&#39;]);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>结果是类似这样的东西：<code>HeadlessChrome/60.0.3082.0</code>。</p>`,5)),a("p",null,[s[56]||(s[56]=a("strong",null,"例子",-1)),s[57]||(s[57]=n(" - 检查网站是否有 ",-1)),p(e,{href:"https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/"},{default:l(()=>[...s[55]||(s[55]=[n("Web 应用程序清单",-1)])]),_:1}),s[58]||(s[58]=n("：",-1))]),s[135]||(s[135]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CDP = require(&#39;chrome-remote-interface&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const chrome = await launchChrome();</span></span>
<span class="line"><span>const protocol = await CDP({port: chrome.port});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Extract the DevTools protocol domains we need and enable them.</span></span>
<span class="line"><span>// See API docs: https://chromedevtools.github.io/devtools-protocol/</span></span>
<span class="line"><span>const {Page} = protocol;</span></span>
<span class="line"><span>await Page.enable();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Page.navigate({url: &#39;https://www.chromestatus.com/&#39;});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Wait for window.onload before doing stuff.</span></span>
<span class="line"><span>Page.loadEventFired(async () =&gt; {</span></span>
<span class="line"><span>  const manifest = await Page.getAppManifest();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (manifest.url) {</span></span>
<span class="line"><span>    console.log(&#39;Manifest: &#39; + manifest.url);</span></span>
<span class="line"><span>    console.log(manifest.data);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    console.log(&#39;Site has no app manifest&#39;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  protocol.close();</span></span>
<span class="line"><span>  chrome.kill(); // Kill Chrome.</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre></div><p><strong>例子</strong> - 使用 DOM API 提取页面的 <code>&lt;title&gt;</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CDP = require(&#39;chrome-remote-interface&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async function() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const chrome = await launchChrome();</span></span>
<span class="line"><span>const protocol = await CDP({port: chrome.port});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Extract the DevTools protocol domains we need and enable them.</span></span>
<span class="line"><span>// See API docs: https://chromedevtools.github.io/devtools-protocol/</span></span>
<span class="line"><span>const {Page, Runtime} = protocol;</span></span>
<span class="line"><span>await Promise.all([Page.enable(), Runtime.enable()]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Page.navigate({url: &#39;https://www.chromestatus.com/&#39;});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Wait for window.onload before doing stuff.</span></span>
<span class="line"><span>Page.loadEventFired(async () =&gt; {</span></span>
<span class="line"><span>  const js = &quot;document.querySelector(&#39;title&#39;).textContent&quot;;</span></span>
<span class="line"><span>  // Evaluate the JS expression in the page.</span></span>
<span class="line"><span>  const result = await Runtime.evaluate({expression: js});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(&#39;Title of page: &#39; + result.result.value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  protocol.close();</span></span>
<span class="line"><span>  chrome.kill(); // Kill Chrome.</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre></div><h3 id="使用-selenium、webdriver-和-chromedriver" tabindex="-1">使用 Selenium、WebDriver 和 ChromeDriver <a class="header-anchor" href="#使用-selenium、webdriver-和-chromedriver" aria-label="Permalink to “使用 Selenium、WebDriver 和 ChromeDriver”">​</a></h3>`,4)),a("p",null,[s[60]||(s[60]=n("现在，Selenium 开启了 Chrome 的完整实例。换句话说，这是一个自动化的解决方案，但不是完全无需显示的。但是，Selenium 只需要进行小小的配置即可运行 Headless Chrome。如果你想要关于如何自己设置的完整说明，我建议你阅读“",-1)),p(e,{href:"https://intoli.com/blog/running-selenium-with-headless-chrome/"},{default:l(()=>[...s[59]||(s[59]=[n("使用 Headless Chrome 来运行 Selenium",-1)])]),_:1}),s[61]||(s[61]=n("”，不过你可以从下面的一些示例开始。",-1))]),s[136]||(s[136]=a("h4",{id:"使用-chromedriver",tabindex:"-1"},[n("使用 ChromeDriver "),a("a",{class:"header-anchor",href:"#使用-chromedriver","aria-label":"Permalink to “使用 ChromeDriver”"},"​")],-1)),a("p",null,[p(e,{href:"https://sites.google.com/a/chromium.org/chromedriver/"},{default:l(()=>[...s[62]||(s[62]=[n("ChromeDriver",-1)])]),_:1}),s[63]||(s[63]=n(" 2.3.0 支持 Chrome 59 及更新版本，可与 Headless Chrome 配合使用。在某些情况下，你可能需要等到 Chrome 60 以解决 bug。例如，Chrome 59 中屏幕截图已知存在问题。",-1))]),s[137]||(s[137]=i(`<p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add selenium-webdriver chromedriver</span></span></code></pre></div><p>例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>const webdriver = require(&#39;selenium-webdriver&#39;);</span></span>
<span class="line"><span>const chromedriver = require(&#39;chromedriver&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// This should be the path to your Canary installation.</span></span>
<span class="line"><span>// I&#39;m assuming Mac for the example.</span></span>
<span class="line"><span>const PATH_TO_CANARY = &#39;/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const chromeCapabilities = webdriver.Capabilities.chrome();</span></span>
<span class="line"><span>chromeCapabilities.set(&#39;chromeOptions&#39;, {</span></span>
<span class="line"><span>  binary: PATH_TO_CANARY // Screenshots require Chrome 60\\. Force Canary.</span></span>
<span class="line"><span>  &#39;args&#39;: [</span></span>
<span class="line"><span>    &#39;--headless&#39;,</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const driver = new webdriver.Builder()</span></span>
<span class="line"><span>  .forBrowser(&#39;chrome&#39;)</span></span>
<span class="line"><span>  .withCapabilities(chromeCapabilities)</span></span>
<span class="line"><span>  .build();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Navigate to google.com, enter a search.</span></span>
<span class="line"><span>driver.get(&#39;https://www.google.com/&#39;);</span></span>
<span class="line"><span>driver.findElement({name: &#39;q&#39;}).sendKeys(&#39;webdriver&#39;);</span></span>
<span class="line"><span>driver.findElement({name: &#39;btnG&#39;}).click();</span></span>
<span class="line"><span>driver.wait(webdriver.until.titleIs(&#39;webdriver - Google Search&#39;), 1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Take screenshot of results page. Save to disk.</span></span>
<span class="line"><span>driver.takeScreenshot().then(base64png =&gt; {</span></span>
<span class="line"><span>  fs.writeFileSync(&#39;screenshot.png&#39;, new Buffer(base64png, &#39;base64&#39;));</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>driver.quit();</span></span></code></pre></div><h4 id="使用-webdriverio" tabindex="-1">使用 WebDriverIO <a class="header-anchor" href="#使用-webdriverio" aria-label="Permalink to “使用 WebDriverIO”">​</a></h4>`,5)),a("p",null,[p(e,{href:"http://webdriver.io/"},{default:l(()=>[...s[64]||(s[64]=[n("WebDriverIO",-1)])]),_:1}),s[65]||(s[65]=n(" 是一个在 Selenium WebDrive 上构建的更高层次的 API。",-1))]),s[138]||(s[138]=i(`<p>安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add webdriverio chromedriver</span></span></code></pre></div><p>例子：过滤 chromestatus.com 上的 CSS 功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const webdriverio = require(&#39;webdriverio&#39;);</span></span>
<span class="line"><span>const chromedriver = require(&#39;chromedriver&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// This should be the path to your Canary installation.</span></span>
<span class="line"><span>// I&#39;m assuming Mac for the example.</span></span>
<span class="line"><span>const PATH_TO_CANARY = &#39;/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary&#39;;</span></span>
<span class="line"><span>const PORT = 9515;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chromedriver.start([</span></span>
<span class="line"><span>  &#39;--url-base=wd/hub&#39;,</span></span>
<span class="line"><span>  \`--port=\${PORT}\`,</span></span>
<span class="line"><span>  &#39;--verbose&#39;</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async () =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const opts = {</span></span>
<span class="line"><span>  port: PORT,</span></span>
<span class="line"><span>  desiredCapabilities: {</span></span>
<span class="line"><span>    browserName: &#39;chrome&#39;,</span></span>
<span class="line"><span>    chromeOptions: {</span></span>
<span class="line"><span>      binary: PATH_TO_CANARY // Screenshots require Chrome 60\\. Force Canary.</span></span>
<span class="line"><span>      args: [&#39;--headless&#39;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const browser = webdriverio.remote(opts).init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>await browser.url(&#39;https://www.chromestatus.com/features&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const title = await browser.getTitle();</span></span>
<span class="line"><span>console.log(\`Title: \${title}\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>await browser.waitForText(&#39;.num-features&#39;, 3000);</span></span>
<span class="line"><span>let numFeatures = await browser.getText(&#39;.num-features&#39;);</span></span>
<span class="line"><span>console.log(\`Chrome has \${numFeatures} total features\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>await browser.setValue(&#39;input[type=&quot;search&quot;]&#39;, &#39;CSS&#39;);</span></span>
<span class="line"><span>console.log(&#39;Filtering features...&#39;);</span></span>
<span class="line"><span>await browser.pause(1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>numFeatures = await browser.getText(&#39;.num-features&#39;);</span></span>
<span class="line"><span>console.log(\`Chrome has \${numFeatures} CSS features\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const buffer = await browser.saveScreenshot(&#39;screenshot.png&#39;);</span></span>
<span class="line"><span>console.log(&#39;Saved screenshot...&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>chromedriver.stop();</span></span>
<span class="line"><span>browser.end();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})();</span></span></code></pre></div><h3 id="更多资源" tabindex="-1">更多资源 <a class="header-anchor" href="#更多资源" aria-label="Permalink to “更多资源”">​</a></h3><p>以下是一些可以带你入门的有用资源：</p><p>文档</p>`,7)),a("ul",null,[a("li",null,[p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[66]||(s[66]=[n("DevTools Protocol Viewer",-1)])]),_:1}),s[67]||(s[67]=n(" - API 参考文档",-1))])]),s[139]||(s[139]=a("p",null,"工具",-1)),a("ul",null,[a("li",null,[p(e,{href:"https://www.npmjs.com/package/chrome-remote-interface"},{default:l(()=>[...s[68]||(s[68]=[n("chrome-remote-interface",-1)])]),_:1}),s[69]||(s[69]=n(" - 基于 DevTools 协议的 node 模块",-1))]),a("li",null,[p(e,{href:"https://github.com/GoogleChrome/lighthouse"},{default:l(()=>[...s[70]||(s[70]=[n("Lighthouse",-1)])]),_:1}),s[71]||(s[71]=n(" - 测试 Web 应用程序质量的自动化工具；大量使用了协议",-1))]),a("li",null,[p(e,{href:"https://github.com/GoogleChrome/lighthouse/tree/master/chrome-launcher"},{default:l(()=>[...s[72]||(s[72]=[n("chrome-launcher",-1)])]),_:1}),s[73]||(s[73]=n(" - 用于启动 Chrome 的 node 模块，可以自动化",-1))])]),s[140]||(s[140]=a("p",null,"样例",-1)),a("ul",null,[a("li",null,[s[75]||(s[75]=n('"',-1)),p(e,{href:"https://paul.kinlan.me/the-headless-web/"},{default:l(()=>[...s[74]||(s[74]=[n("The Headless Web",-1)])]),_:1}),s[76]||(s[76]=n('" - Paul Kinlan 发布的使用了 Headless 和 api.ai 的精彩博客',-1))])]),s[141]||(s[141]=a("h3",{id:"常见问题",tabindex:"-1"},[n("常见问题 "),a("a",{class:"header-anchor",href:"#常见问题","aria-label":"Permalink to “常见问题”"},"​")],-1)),s[142]||(s[142]=a("p",null,[a("strong",null,[n("我需要 "),a("code",null,"--disable-gpu"),n(" 标志吗？")])],-1)),a("p",null,[s[79]||(s[79]=n("目前是需要的。",-1)),s[80]||(s[80]=a("code",null,"--disable-gpu",-1)),s[81]||(s[81]=n(" 标志在处理一些 bug 时是需要的。在未来版本的 Chrome 中就不需要了。查看 ",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=546953#c152"},{default:l(()=>[...s[77]||(s[77]=[n("https://crbug.com/546953#c152",-1)])]),_:1}),s[82]||(s[82]=n(" 和 ",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=695212"},{default:l(()=>[...s[78]||(s[78]=[n("https://crbug.com/695212",-1)])]),_:1}),s[83]||(s[83]=n(" 获取更多信息。",-1))]),s[143]||(s[143]=a("p",null,[a("strong",null,"所以我仍然需要 Xvfb 吗？")],-1)),s[144]||(s[144]=a("p",null,"不。Headless Chrome 不使用窗口，所以不需要像 Xvfb 这样的显示服务器。没有它你也可以愉快地运行你的自动化测试。",-1)),s[145]||(s[145]=a("p",null,"什么是 Xvfb？Xvfb 是一个用于类 Unix 系统的运行于内存之内的显示服务器，可以让你运行图形应用程序（如 Chrome），而无需附加的物理显示器。许多人使用 Xvfb 运行早期版本的 Chrome 进行 “headless” 测试。",-1)),s[146]||(s[146]=a("p",null,[a("strong",null,"如何创建一个运行 Headless Chrome 的 Docker 容器？")],-1)),a("p",null,[s[86]||(s[86]=n("查看 ",-1)),p(e,{href:"https://github.com/ebidel/lighthouse-ci"},{default:l(()=>[...s[84]||(s[84]=[n("lighthouse-ci",-1)])]),_:1}),s[87]||(s[87]=n("。它有一个使用 Ubuntu 作为基础镜像的 ",-1)),p(e,{href:"https://github.com/ebidel/lighthouse-ci/blob/master/builder/Dockerfile.headless"},{default:l(()=>[...s[85]||(s[85]=[n("Dockerfile 示例",-1)])]),_:1}),s[88]||(s[88]=n("，并且在 App Engine Flexible 容器中安装和运行了 Lighthouse。",-1))]),s[147]||(s[147]=a("p",null,[a("strong",null,"我可以把它和 Selenium / WebDriver / ChromeDriver 一起使用吗？")],-1)),a("p",null,[s[90]||(s[90]=n("是的。查看 ",-1)),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome#drivers"},{default:l(()=>[...s[89]||(s[89]=[n("Using Selenium, WebDrive, or ChromeDriver",-1)])]),_:1}),s[91]||(s[91]=n("。",-1))]),s[148]||(s[148]=a("p",null,[a("strong",null,"它和 PhantomJS 有什么关系？")],-1)),a("p",null,[s[93]||(s[93]=n("Headless Chrome 和 ",-1)),p(e,{href:"http://phantomjs.org/"},{default:l(()=>[...s[92]||(s[92]=[n("PhantomJS",-1)])]),_:1}),s[94]||(s[94]=n(" 是类似的工具。它们都可以用来在无需显示的环境中进行自动化测试。两者的主要不同在于 Phantom 使用了一个较老版本的 WebKit 作为它的渲染引擎，而 Headless Chrome 使用了最新版本的 Blink。",-1))]),a("p",null,[s[96]||(s[96]=n("目前，Phantom 提供了比 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[95]||(s[95]=[n("DevTools protocol",-1)])]),_:1}),s[97]||(s[97]=n(" 更高层次的 API。",-1))]),s[149]||(s[149]=a("p",null,[a("strong",null,"我在哪儿提交 bug？")],-1)),a("p",null,[s[99]||(s[99]=n("对于 Headless Chrome 的 bug，请提交到 ",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/entry?components=Blink&blocking=705916&cc=skyostil%40chromium.org&Proj=Headless"},{default:l(()=>[...s[98]||(s[98]=[n("crbug.com",-1)])]),_:1}),s[100]||(s[100]=n("。",-1))]),a("p",null,[s[102]||(s[102]=n("对于 DevTools 协议的 bug，请提交到 ",-1)),p(e,{href:"https://github.com/ChromeDevTools/devtools-protocol/issues/new"},{default:l(()=>[...s[101]||(s[101]=[n("github.com/ChromeDevTools/devtools-protocol",-1)])]),_:1}),s[103]||(s[103]=n("。",-1))]),s[150]||(s[150]=a("hr",null,null,-1)),s[151]||(s[151]=a("p",null,"作者简介",-1)),a("p",null,[p(e,{href:"https://developers.google.com/web/resources/contributors#ericbidelman"},{default:l(()=>[...s[104]||(s[104]=[n("Eric Bidelman",-1)])]),_:1}),s[105]||(s[105]=n(" 谷歌工程师，Lighthouse 开发，Web 和 Web 组件开发，Chrome 开发",-1))]),s[152]||(s[152]=a("hr",null,null,-1)),a("p",null,[s[107]||(s[107]=n("via: ",-1)),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},{default:l(()=>[...s[106]||(s[106]=[n("https://developers.google.com/web/updates/2017/04/headless-chrome",-1)])]),_:1})]),a("p",null,[s[111]||(s[111]=n("作者：",-1)),p(e,{href:"https://developers.google.com/web/resources/contributors#ericbidelman"},{default:l(()=>[...s[108]||(s[108]=[n("Eric Bidelman",-1)])]),_:1}),s[112]||(s[112]=n(" 译者：",-1)),p(e,{href:"https://github.com/firmianay"},{default:l(()=>[...s[109]||(s[109]=[n("firmianay",-1)])]),_:1}),s[113]||(s[113]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[110]||(s[110]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[116]||(s[116]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[114]||(s[114]=[n("LCTT",-1)])]),_:1}),s[117]||(s[117]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[115]||(s[115]=[n("Linux中国",-1)])]),_:1}),s[118]||(s[118]=n(" 荣誉推出",-1))])])}const w=o(u,[["render",h]]);export{v as __pageData,w as default};
