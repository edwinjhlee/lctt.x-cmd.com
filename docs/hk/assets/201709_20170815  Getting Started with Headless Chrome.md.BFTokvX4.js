import{_ as o,a0 as t,w as r,s as d,I as a,x as n,a1 as p,A as l,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"Headless Chrome 入門 | LCTT x X-CMD","titleTemplate":false,"description":"Headless Chrome 入門 | LCTT (201709) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Headless Chrome 入門 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Headless Chrome 入門 | LCTT (201709) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201709/20170815  Getting Started with Headless Chrome","title":"Headless Chrome 入門","tag":"201709","desc":""},"relativePath":"201709/20170815  Getting Started with Headless Chrome.md","filePath":"[post].md"}'),u={name:"201709/20170815  Getting Started with Headless Chrome.md"};function h(m,s,g,b,c,f){const e=t("Link");return r(),d("div",null,[s[119]||(s[119]=a("h1",{id:"headless-chrome-入門",tabindex:"-1"},[n("Headless Chrome 入門 "),a("a",{class:"header-anchor",href:"#headless-chrome-入門","aria-label":"Permalink to “Headless Chrome 入門”"},"​")],-1)),s[120]||(s[120]=a("h3",{id:"摘要",tabindex:"-1"},[n("摘要 "),a("a",{class:"header-anchor",href:"#摘要","aria-label":"Permalink to “摘要”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("在 Chrome 59　中開始搭載 ",-1)),p(e,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md"},{default:l(()=>[...s[0]||(s[0]=[n("Headless Chrome",-1)])]),_:1}),s[2]||(s[2]=n("。這是一種在",-1)),s[3]||(s[3]=a("ruby",null,[n("無需顯示"),a("rt",null,"headless")],-1)),s[4]||(s[4]=n("的環境下運行 Chrome 瀏覽器的方式。從本質上來説，就是不用 chrome 瀏覽器來運行 Chrome 的功能！它將 Chromium 和 Blink 渲染引擎提供的所有現代 Web 平台的功能都帶入了命令列。",-1))]),s[121]||(s[121]=a("p",null,"它有什麼用？",-1)),s[122]||(s[122]=a("p",null,[a("ruby",null,[n("無需顯示"),a("rt",null,"headless")]),n("的瀏覽器對於自動化測試和不需要可視化 UI 界面的服務器環境是一個很好的工具。例如，你可能需要對真實的網頁運行一些測試，創建一個 PDF，或者只是檢查瀏覽器如何呈現 URL。")],-1)),a("blockquote",null,[a("p",null,[s[6]||(s[6]=a("strong",null,"注意：",-1)),s[7]||(s[7]=n(" Mac 和 Linux 上的 Chrome 59 都可以運行無需顯示模式。",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=686608"},{default:l(()=>[...s[5]||(s[5]=[n("對 Windows 的支持",-1)])]),_:1}),s[8]||(s[8]=n("將在 Chrome 60 中提供。要檢查你使用的 Chrome 版本，請在瀏覽器中打開 ",-1)),s[9]||(s[9]=a("code",null,"chrome://version",-1)),s[10]||(s[10]=n("。",-1))])]),s[123]||(s[123]=i(`<h3 id="開啓無需顯示headless模式-命令列界面" tabindex="-1">開啓<ruby>無需顯示<rt>headless</rt></ruby>模式（命令列界面） <a class="header-anchor" href="#開啓無需顯示headless模式-命令列界面" aria-label="Permalink to “開啓無需顯示headless模式（命令列界面）”">​</a></h3><p>開啓<ruby>無需顯示<rt>headless</rt></ruby>模式最簡單的方法是從命令列打開 Chrome 二進制文件。如果你已經安裝了 Chrome 59 以上的版本，請使用 <code>--headless</code> 標誌啓動 Chrome：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome \\</span></span>
<span class="line"><span>  --headless \\                   # Runs Chrome in headless mode.</span></span>
<span class="line"><span>  --disable-gpu \\                # Temporarily needed for now.</span></span>
<span class="line"><span>  --remote-debugging-port=9222 \\</span></span>
<span class="line"><span>  https://www.chromestatus.com   # URL to open. Defaults to about:blank.</span></span></code></pre></div><blockquote><p><strong>注意：</strong>目前你仍然需要使用 <code>--disable-gpu</code> 標誌。但它最終會不需要的。</p></blockquote><p><code>chrome</code> 二進制文件應該指向你安裝 Chrome 的位置。確切的位置會因平台差異而不同。當前我在 Mac 上操作，所以我為安裝的每個版本的 Chrome 都創建了方便使用的別名。</p><p>如果您使用 Chrome 的穩定版，並且無法獲得測試版，我建議您使用 <code>chrome-canary</code> 版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>alias chrome=&quot;/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome&quot;</span></span>
<span class="line"><span>alias chrome-canary=&quot;/Applications/Google\\ Chrome\\ Canary.app/Contents/MacOS/Google\\ Chrome\\ Canary&quot;</span></span>
<span class="line"><span>alias chromium=&quot;/Applications/Chromium.app/Contents/MacOS/Chromium&quot;</span></span></code></pre></div>`,7)),a("p",null,[s[12]||(s[12]=n("在",-1)),p(e,{href:"https://www.google.com/chrome/browser/canary.html"},{default:l(()=>[...s[11]||(s[11]=[n("這裏",-1)])]),_:1}),s[13]||(s[13]=n("下載 Chrome Cannary。",-1))]),s[124]||(s[124]=a("h3",{id:"命令列的功能",tabindex:"-1"},[n("命令列的功能 "),a("a",{class:"header-anchor",href:"#命令列的功能","aria-label":"Permalink to “命令列的功能”"},"​")],-1)),a("p",null,[s[16]||(s[16]=n("在某些情況下，你可能不需要",-1)),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome#node"},{default:l(()=>[...s[14]||(s[14]=[n("以腳本編程的方式",-1)])]),_:1}),s[17]||(s[17]=n("操作 Headless Chrome。可以使用一些",-1)),p(e,{href:"https://cs.chromium.org/chromium/src/headless/app/headless_shell_switches.cc"},{default:l(()=>[...s[15]||(s[15]=[n("有用的命令列標誌",-1)])]),_:1}),s[18]||(s[18]=n("來執行常見的任務。",-1))]),s[125]||(s[125]=i(`<h4 id="打印-dom" tabindex="-1">打印 DOM <a class="header-anchor" href="#打印-dom" aria-label="Permalink to “打印 DOM”">​</a></h4><p><code>--dump-dom</code> 標誌將打印 <code>document.body.innerHTML</code> 到標準輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome --headless --disable-gpu --dump-dom https://www.chromestatus.com/</span></span></code></pre></div><h4 id="創建一個-pdf" tabindex="-1">創建一個 PDF <a class="header-anchor" href="#創建一個-pdf" aria-label="Permalink to “創建一個 PDF”">​</a></h4><p><code>--print-to-pdf</code> 標誌將頁面轉出為 PDF 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome --headless --disable-gpu --print-to-pdf https://www.chromestatus.com/</span></span></code></pre></div><h4 id="截圖" tabindex="-1">截圖 <a class="header-anchor" href="#截圖" aria-label="Permalink to “截圖”">​</a></h4><p>要捕獲頁面的屏幕截圖，請使用 <code>--screenshot</code> 標誌：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>chrome --headless --disable-gpu --screenshot https://www.chromestatus.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Size of a standard letterhead.</span></span>
<span class="line"><span>chrome --headless --disable-gpu --screenshot --window-size=1280,1696 https://www.chromestatus.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Nexus 5x</span></span>
<span class="line"><span>chrome --headless --disable-gpu --screenshot --window-size=412,732 https://www.chromestatus.com/</span></span></code></pre></div>`,9)),a("p",null,[s[20]||(s[20]=n("使用 ",-1)),s[21]||(s[21]=a("code",null,"--screenshot",-1)),s[22]||(s[22]=n(" 標誌運行 Headless Chrome 將在當前工作目錄中生成一個名為 ",-1)),s[23]||(s[23]=a("code",null,"screenshot.png",-1)),s[24]||(s[24]=n(" 的文件。如果你正在尋求整個頁面的截圖，那麼會涉及到很多事情。來自 David Schnurr 的一篇很棒的博文已經介紹了這一內容。請查看 ",-1)),p(e,{href:"https://medium.com/@dschnr/using-headless-chrome-as-an-automated-screenshot-tool-4b07dffba79a"},{default:l(()=>[...s[19]||(s[19]=[n("使用 headless Chrome 作為自動截屏工具",-1)])]),_:1}),s[25]||(s[25]=n("。",-1))]),s[126]||(s[126]=i(`<h4 id="repl-模式-read-eval-print-loop" tabindex="-1">REPL 模式 (read-eval-print loop) <a class="header-anchor" href="#repl-模式-read-eval-print-loop" aria-label="Permalink to “REPL 模式 (read-eval-print loop)”">​</a></h4><p><code>--repl</code> 標誌可以使 Headless Chrome 運行在一個你可以使用瀏覽器評估 JS 表達式的模式下。執行下面的命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chrome --headless --disable-gpu --repl https://www.chromestatus.com/</span></span>
<span class="line"><span>[0608/112805.245285:INFO:headless_shell.cc(278)] Type a Javascript expression to evaluate or &quot;quit&quot; to exit.</span></span>
<span class="line"><span>&gt;&gt;&gt; location.href</span></span>
<span class="line"><span>{&quot;result&quot;:{&quot;type&quot;:&quot;string&quot;,&quot;value&quot;:&quot;https://www.chromestatus.com/features&quot;}}</span></span>
<span class="line"><span>&gt;&gt;&gt; quit</span></span></code></pre></div><h3 id="在沒有瀏覽器界面的情況下調試-chrome" tabindex="-1">在沒有瀏覽器界面的情況下調試 Chrome <a class="header-anchor" href="#在沒有瀏覽器界面的情況下調試-chrome" aria-label="Permalink to “在沒有瀏覽器界面的情況下調試 Chrome”">​</a></h3>`,4)),a("p",null,[s[27]||(s[27]=n("當你使用 ",-1)),s[28]||(s[28]=a("code",null,"--remote-debugging-port=9222",-1)),s[29]||(s[29]=n(" 運行 Chrome 時，它會啓動一個支持 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[26]||(s[26]=[n("DevTools 協議",-1)])]),_:1}),s[30]||(s[30]=n("的實例。該協議用於與 Chrome 進行通信，並且驅動 Headless Chrome 瀏覽器實例。它也是一個類似 Sublime、VS Code 和 Node 的工具，可用於應用程序的遠程調試。#協同效應",-1))]),s[127]||(s[127]=i('<p>由於你沒有瀏覽器用户界面可用來查看網頁，請在另一個瀏覽器中輸入 <code>http://localhost:9222</code>，以檢查一切是否正常。你將會看到一個<ruby>可檢查的<rt>inspectable</rt></ruby>頁面的列表，可以點擊它們來查看 Headless Chrome 正在呈現的內容：</p><p><img src="https://developers.google.com/web/updates/images/2017/04/headless-chrome/remote-debugging-ui.jpg" alt="DevTools Remote"></p><p><em>DevTools 遠程調試界面</em></p><p>從這裏，你就可以像往常一樣使用熟悉的 DevTools 來檢查、調試和調整頁面了。如果你以編程方式使用 Headless Chrome，這個頁面也是一個功能強大的調試工具，用於查看所有通過網絡與瀏覽器交互的原始 DevTools 協議命令。</p><h3 id="使用編程模式-node" tabindex="-1">使用編程模式 （Node） <a class="header-anchor" href="#使用編程模式-node" aria-label="Permalink to “使用編程模式 （Node）”">​</a></h3><h4 id="puppeteer-庫-api" tabindex="-1">Puppeteer 庫 API <a class="header-anchor" href="#puppeteer-庫-api" aria-label="Permalink to “Puppeteer 庫 API”">​</a></h4>',6)),a("p",null,[p(e,{href:"https://github.com/GoogleChrome/puppeteer"},{default:l(()=>[...s[31]||(s[31]=[n("Puppeteer",-1)])]),_:1}),s[32]||(s[32]=n(" 是一個由 Chrome 團隊開發的 Node 庫。它提供了一個高層次的 API 來控制無需顯示版（或 完全版）的 Chrome。它與其他自動化測試庫，如 Phantom 和 NightmareJS 相類似，但是隻適用於最新版本的 Chrome。",-1))]),s[128]||(s[128]=i(`<p>除此之外，Puppeteer 還可用於輕鬆截取屏幕截圖，創建 PDF，頁面間導航以及獲取有關這些頁面的信息。如果你想快速地自動化進行瀏覽器測試，我建議使用該庫。它隱藏了 DevTools 協議的複雜性，並可以處理諸如啓動 Chrome 調試實例等繁冗的任務。</p><p>安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add puppeteer</span></span></code></pre></div><p><strong>例子</strong> - 打印用户代理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const puppeteer = require(&#39;puppeteer&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async() =&gt; {</span></span>
<span class="line"><span>  const browser = await puppeteer.launch();</span></span>
<span class="line"><span>  console.log(await browser.version());</span></span>
<span class="line"><span>  browser.close();</span></span>
<span class="line"><span>})();</span></span></code></pre></div><p><strong>例子</strong> - 獲取頁面的屏幕截圖：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const puppeteer = require(&#39;puppeteer&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(async() =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const browser = await puppeteer.launch();</span></span>
<span class="line"><span>const page = await browser.newPage();</span></span>
<span class="line"><span>await page.goto(&#39;https://www.chromestatus.com&#39;, {waitUntil: &#39;networkidle&#39;});</span></span>
<span class="line"><span>await page.pdf({path: &#39;page.pdf&#39;, format: &#39;A4&#39;});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>browser.close();</span></span>
<span class="line"><span>})();</span></span></code></pre></div>`,7)),a("p",null,[s[34]||(s[34]=n("查看 ",-1)),p(e,{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"},{default:l(()=>[...s[33]||(s[33]=[n("Puppeteer 的文檔",-1)])]),_:1}),s[35]||(s[35]=n("，瞭解完整 API 的更多信息。",-1))]),s[129]||(s[129]=a("h4",{id:"cri-庫",tabindex:"-1"},[n("CRI 庫 "),a("a",{class:"header-anchor",href:"#cri-庫","aria-label":"Permalink to “CRI 庫”"},"​")],-1)),a("p",null,[p(e,{href:"https://www.npmjs.com/package/chrome-remote-interface"},{default:l(()=>[...s[36]||(s[36]=[n("chrome-remote-interface",-1)])]),_:1}),s[38]||(s[38]=n(" 是一個比 Puppeteer API 更低層次的庫。如果你想要更接近原始信息和更直接地使用 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[37]||(s[37]=[n("DevTools 協議",-1)])]),_:1}),s[39]||(s[39]=n("的話，我推薦使用它。",-1))]),s[130]||(s[130]=a("p",null,[a("strong",null,"啓動 Chrome")],-1)),s[131]||(s[131]=a("p",null,"chrome-remote-interface 不會為你啓動 Chrome，所以你要自己啓動它。",-1)),a("p",null,[s[41]||(s[41]=n("在前面的 CLI 章節中，我們使用 ",-1)),s[42]||(s[42]=a("code",null,"--headless --remote-debugging-port=9222",-1)),s[43]||(s[43]=n()),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome#cli"},{default:l(()=>[...s[40]||(s[40]=[n("手動啓動了 Chrome",-1)])]),_:1}),s[44]||(s[44]=n("。但是，要想做到完全自動化測試，你可能希望從你的應用程序中啓動 Chrome。",-1))]),s[132]||(s[132]=i(`<p>其中一種方法是使用 <code>child_process</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const execFile = require(&#39;child_process&#39;).execFile;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function launchHeadlessChrome(url, callback) {</span></span>
<span class="line"><span>  // Assuming MacOSx.</span></span>
<span class="line"><span>  const CHROME = &#39;/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome&#39;;</span></span>
<span class="line"><span>  execFile(CHROME, [&#39;--headless&#39;, &#39;--disable-gpu&#39;, &#39;--remote-debugging-port=9222&#39;, url], callback);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>launchHeadlessChrome(&#39;https://www.chromestatus.com&#39;, (err, stdout, stderr) =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>但是如果你想要在多個平台上運行可移植的解決方案，事情會變得很棘手。請注意 Chrome 的硬編碼路徑：</p><p><strong>使用 ChromeLauncher</strong></p>`,4)),a("p",null,[p(e,{href:"https://developers.google.com/web/tools/lighthouse/"},{default:l(()=>[...s[45]||(s[45]=[n("Lighthouse",-1)])]),_:1}),s[47]||(s[47]=n(" 是一個令人稱奇的網絡應用的質量測試工具。Lighthouse 內部開發了一個強大的用於啓動 Chrome 的模組，現在已經被提取出來單獨使用。",-1)),p(e,{href:"https://www.npmjs.com/package/chrome-launcher"},{default:l(()=>[...s[46]||(s[46]=[n("chrome-launcher NPM 模組",-1)])]),_:1}),s[48]||(s[48]=n(" 可以找到 Chrome 的安裝位置，設置調試實例，啓動瀏覽器和在程序運行完之後將其殺死。它最好的一點是可以跨平台工作，感謝 Node！",-1))]),s[133]||(s[133]=i(`<p>默認情況下，<strong>chrome-launcher 會嘗試啓動 Chrome Canary</strong>（如果已經安裝），但是你也可以更改它，手動選擇使用的 Chrome 版本。要想使用它，首先從 npm 安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add chrome-launcher</span></span></code></pre></div><p><strong>例子</strong> - 使用 <code>chrome-launcher</code> 啓動 Headless Chrome：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const chromeLauncher = require(&#39;chrome-launcher&#39;);</span></span>
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
<span class="line"><span>});</span></span></code></pre></div><p>運行這個腳本沒有做太多的事情，但你應該能在任務管理器中看到啓動了一個 Chrome 的實例，它加載了頁面 <code>about:blank</code>。記住，它不會有任何的瀏覽器界面，我們是無需顯示的。</p><p>為了控制瀏覽器，我們需要 DevTools 協議！</p><h4 id="檢索有關頁面的信息" tabindex="-1">檢索有關頁面的信息 <a class="header-anchor" href="#檢索有關頁面的信息" aria-label="Permalink to “檢索有關頁面的信息”">​</a></h4>`,7)),a("blockquote",null,[a("p",null,[s[50]||(s[50]=a("strong",null,"警告：",-1)),s[51]||(s[51]=n(" DevTools 協議可以做一些有趣的事情，但是起初可能有點令人生畏。我建議先花點時間瀏覽 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[49]||(s[49]=[n("DevTools 協議查看器",-1)])]),_:1}),s[52]||(s[52]=n("。然後，轉到 ",-1)),s[53]||(s[53]=a("code",null,"chrome-remote-interface",-1)),s[54]||(s[54]=n(" 的 API 文檔，看看它是如何包裝原始協議的。",-1))])]),s[134]||(s[134]=i(`<p>我們來安裝該庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add chrome-remote-interface</span></span></code></pre></div><p><strong>例子</strong> - 打印用户代理：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CDP = require(&#39;chrome-remote-interface&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>launchChrome().then(async chrome =&gt; {</span></span>
<span class="line"><span>  const version = await CDP.Version({port: chrome.port});</span></span>
<span class="line"><span>  console.log(version[&#39;User-Agent&#39;]);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>結果是類似這樣的東西：<code>HeadlessChrome/60.0.3082.0</code>。</p>`,5)),a("p",null,[s[56]||(s[56]=a("strong",null,"例子",-1)),s[57]||(s[57]=n(" - 檢查網站是否有 ",-1)),p(e,{href:"https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/"},{default:l(()=>[...s[55]||(s[55]=[n("Web 應用程序清單",-1)])]),_:1}),s[58]||(s[58]=n("：",-1))]),s[135]||(s[135]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CDP = require(&#39;chrome-remote-interface&#39;);</span></span>
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
<span class="line"><span>})();</span></span></code></pre></div><p><strong>例子</strong> - 使用 DOM API 提取頁面的 <code>&lt;title&gt;</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CDP = require(&#39;chrome-remote-interface&#39;);</span></span>
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
<span class="line"><span>})();</span></span></code></pre></div><h3 id="使用-selenium、webdriver-和-chromedriver" tabindex="-1">使用 Selenium、WebDriver 和 ChromeDriver <a class="header-anchor" href="#使用-selenium、webdriver-和-chromedriver" aria-label="Permalink to “使用 Selenium、WebDriver 和 ChromeDriver”">​</a></h3>`,4)),a("p",null,[s[60]||(s[60]=n("現在，Selenium 開啓了 Chrome 的完整實例。換句話説，這是一個自動化的解決方案，但不是完全無需顯示的。但是，Selenium 只需要進行小小的配置即可運行 Headless Chrome。如果你想要關於如何自己設置的完整説明，我建議你閲讀“",-1)),p(e,{href:"https://intoli.com/blog/running-selenium-with-headless-chrome/"},{default:l(()=>[...s[59]||(s[59]=[n("使用 Headless Chrome 來運行 Selenium",-1)])]),_:1}),s[61]||(s[61]=n("”，不過你可以從下面的一些示例開始。",-1))]),s[136]||(s[136]=a("h4",{id:"使用-chromedriver",tabindex:"-1"},[n("使用 ChromeDriver "),a("a",{class:"header-anchor",href:"#使用-chromedriver","aria-label":"Permalink to “使用 ChromeDriver”"},"​")],-1)),a("p",null,[p(e,{href:"https://sites.google.com/a/chromium.org/chromedriver/"},{default:l(()=>[...s[62]||(s[62]=[n("ChromeDriver",-1)])]),_:1}),s[63]||(s[63]=n(" 2.3.0 支持 Chrome 59 及更新版本，可與 Headless Chrome 配合使用。在某些情況下，你可能需要等到 Chrome 60 以解決 bug。例如，Chrome 59 中屏幕截圖已知存在問題。",-1))]),s[137]||(s[137]=i(`<p>安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add selenium-webdriver chromedriver</span></span></code></pre></div><p>例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
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
<span class="line"><span>driver.quit();</span></span></code></pre></div><h4 id="使用-webdriverio" tabindex="-1">使用 WebDriverIO <a class="header-anchor" href="#使用-webdriverio" aria-label="Permalink to “使用 WebDriverIO”">​</a></h4>`,5)),a("p",null,[p(e,{href:"http://webdriver.io/"},{default:l(()=>[...s[64]||(s[64]=[n("WebDriverIO",-1)])]),_:1}),s[65]||(s[65]=n(" 是一個在 Selenium WebDrive 上構建的更高層次的 API。",-1))]),s[138]||(s[138]=i(`<p>安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>yarn add webdriverio chromedriver</span></span></code></pre></div><p>例子：過濾 chromestatus.com 上的 CSS 功能：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const webdriverio = require(&#39;webdriverio&#39;);</span></span>
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
<span class="line"><span>})();</span></span></code></pre></div><h3 id="更多資源" tabindex="-1">更多資源 <a class="header-anchor" href="#更多資源" aria-label="Permalink to “更多資源”">​</a></h3><p>以下是一些可以帶你入門的有用資源：</p><p>文檔</p>`,7)),a("ul",null,[a("li",null,[p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[66]||(s[66]=[n("DevTools Protocol Viewer",-1)])]),_:1}),s[67]||(s[67]=n(" - API 參考文檔",-1))])]),s[139]||(s[139]=a("p",null,"工具",-1)),a("ul",null,[a("li",null,[p(e,{href:"https://www.npmjs.com/package/chrome-remote-interface"},{default:l(()=>[...s[68]||(s[68]=[n("chrome-remote-interface",-1)])]),_:1}),s[69]||(s[69]=n(" - 基於 DevTools 協議的 node 模組",-1))]),a("li",null,[p(e,{href:"https://github.com/GoogleChrome/lighthouse"},{default:l(()=>[...s[70]||(s[70]=[n("Lighthouse",-1)])]),_:1}),s[71]||(s[71]=n(" - 測試 Web 應用程序質量的自動化工具；大量使用了協議",-1))]),a("li",null,[p(e,{href:"https://github.com/GoogleChrome/lighthouse/tree/master/chrome-launcher"},{default:l(()=>[...s[72]||(s[72]=[n("chrome-launcher",-1)])]),_:1}),s[73]||(s[73]=n(" - 用於啓動 Chrome 的 node 模組，可以自動化",-1))])]),s[140]||(s[140]=a("p",null,"樣例",-1)),a("ul",null,[a("li",null,[s[75]||(s[75]=n('"',-1)),p(e,{href:"https://paul.kinlan.me/the-headless-web/"},{default:l(()=>[...s[74]||(s[74]=[n("The Headless Web",-1)])]),_:1}),s[76]||(s[76]=n('" - Paul Kinlan 發佈的使用了 Headless 和 api.ai 的精彩Blog',-1))])]),s[141]||(s[141]=a("h3",{id:"常見問題",tabindex:"-1"},[n("常見問題 "),a("a",{class:"header-anchor",href:"#常見問題","aria-label":"Permalink to “常見問題”"},"​")],-1)),s[142]||(s[142]=a("p",null,[a("strong",null,[n("我需要 "),a("code",null,"--disable-gpu"),n(" 標誌嗎？")])],-1)),a("p",null,[s[79]||(s[79]=n("目前是需要的。",-1)),s[80]||(s[80]=a("code",null,"--disable-gpu",-1)),s[81]||(s[81]=n(" 標誌在處理一些 bug 時是需要的。在未來版本的 Chrome 中就不需要了。查看 ",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=546953#c152"},{default:l(()=>[...s[77]||(s[77]=[n("https://crbug.com/546953#c152",-1)])]),_:1}),s[82]||(s[82]=n(" 和 ",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=695212"},{default:l(()=>[...s[78]||(s[78]=[n("https://crbug.com/695212",-1)])]),_:1}),s[83]||(s[83]=n(" 獲取更多信息。",-1))]),s[143]||(s[143]=a("p",null,[a("strong",null,"所以我仍然需要 Xvfb 嗎？")],-1)),s[144]||(s[144]=a("p",null,"不。Headless Chrome 不使用窗口，所以不需要像 Xvfb 這樣的顯示服務器。沒有它你也可以愉快地運行你的自動化測試。",-1)),s[145]||(s[145]=a("p",null,"什麼是 Xvfb？Xvfb 是一個用於類 Unix 系統的運行於內存之內的顯示服務器，可以讓你運行圖形應用程序（如 Chrome），而無需附加的物理顯示器。許多人使用 Xvfb 運行早期版本的 Chrome 進行 “headless” 測試。",-1)),s[146]||(s[146]=a("p",null,[a("strong",null,"如何創建一個運行 Headless Chrome 的 Docker 容器？")],-1)),a("p",null,[s[86]||(s[86]=n("查看 ",-1)),p(e,{href:"https://github.com/ebidel/lighthouse-ci"},{default:l(()=>[...s[84]||(s[84]=[n("lighthouse-ci",-1)])]),_:1}),s[87]||(s[87]=n("。它有一個使用 Ubuntu 作為基礎鏡像的 ",-1)),p(e,{href:"https://github.com/ebidel/lighthouse-ci/blob/master/builder/Dockerfile.headless"},{default:l(()=>[...s[85]||(s[85]=[n("Dockerfile 示例",-1)])]),_:1}),s[88]||(s[88]=n("，並且在 App Engine Flexible 容器中安裝和運行了 Lighthouse。",-1))]),s[147]||(s[147]=a("p",null,[a("strong",null,"我可以把它和 Selenium / WebDriver / ChromeDriver 一起使用嗎？")],-1)),a("p",null,[s[90]||(s[90]=n("是的。查看 ",-1)),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome#drivers"},{default:l(()=>[...s[89]||(s[89]=[n("Using Selenium, WebDrive, or ChromeDriver",-1)])]),_:1}),s[91]||(s[91]=n("。",-1))]),s[148]||(s[148]=a("p",null,[a("strong",null,"它和 PhantomJS 有什麼關係？")],-1)),a("p",null,[s[93]||(s[93]=n("Headless Chrome 和 ",-1)),p(e,{href:"http://phantomjs.org/"},{default:l(()=>[...s[92]||(s[92]=[n("PhantomJS",-1)])]),_:1}),s[94]||(s[94]=n(" 是類似的工具。它們都可以用來在無需顯示的環境中進行自動化測試。兩者的主要不同在於 Phantom 使用了一個較老版本的 WebKit 作為它的渲染引擎，而 Headless Chrome 使用了最新版本的 Blink。",-1))]),a("p",null,[s[96]||(s[96]=n("目前，Phantom 提供了比 ",-1)),p(e,{href:"https://chromedevtools.github.io/devtools-protocol/"},{default:l(()=>[...s[95]||(s[95]=[n("DevTools protocol",-1)])]),_:1}),s[97]||(s[97]=n(" 更高層次的 API。",-1))]),s[149]||(s[149]=a("p",null,[a("strong",null,"我在哪兒提交 bug？")],-1)),a("p",null,[s[99]||(s[99]=n("對於 Headless Chrome 的 bug，請提交到 ",-1)),p(e,{href:"https://bugs.chromium.org/p/chromium/issues/entry?components=Blink&blocking=705916&cc=skyostil%40chromium.org&Proj=Headless"},{default:l(()=>[...s[98]||(s[98]=[n("crbug.com",-1)])]),_:1}),s[100]||(s[100]=n("。",-1))]),a("p",null,[s[102]||(s[102]=n("對於 DevTools 協議的 bug，請提交到 ",-1)),p(e,{href:"https://github.com/ChromeDevTools/devtools-protocol/issues/new"},{default:l(()=>[...s[101]||(s[101]=[n("github.com/ChromeDevTools/devtools-protocol",-1)])]),_:1}),s[103]||(s[103]=n("。",-1))]),s[150]||(s[150]=a("hr",null,null,-1)),s[151]||(s[151]=a("p",null,"作者簡介",-1)),a("p",null,[p(e,{href:"https://developers.google.com/web/resources/contributors#ericbidelman"},{default:l(()=>[...s[104]||(s[104]=[n("Eric Bidelman",-1)])]),_:1}),s[105]||(s[105]=n(" 谷歌工程師，Lighthouse 開發，Web 和 Web 組件開發，Chrome 開發",-1))]),s[152]||(s[152]=a("hr",null,null,-1)),a("p",null,[s[107]||(s[107]=n("via: ",-1)),p(e,{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},{default:l(()=>[...s[106]||(s[106]=[n("https://developers.google.com/web/updates/2017/04/headless-chrome",-1)])]),_:1})]),a("p",null,[s[111]||(s[111]=n("作者：",-1)),p(e,{href:"https://developers.google.com/web/resources/contributors#ericbidelman"},{default:l(()=>[...s[108]||(s[108]=[n("Eric Bidelman",-1)])]),_:1}),s[112]||(s[112]=n(" 譯者：",-1)),p(e,{href:"https://github.com/firmianay"},{default:l(()=>[...s[109]||(s[109]=[n("firmianay",-1)])]),_:1}),s[113]||(s[113]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:l(()=>[...s[110]||(s[110]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[116]||(s[116]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[114]||(s[114]=[n("LCTT",-1)])]),_:1}),s[117]||(s[117]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[115]||(s[115]=[n("Linux中國",-1)])]),_:1}),s[118]||(s[118]=n(" 榮譽推出",-1))])])}const w=o(u,[["render",h]]);export{v as __pageData,w as default};
