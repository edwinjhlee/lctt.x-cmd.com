import{_ as e,a0 as o,w as u,s as r,I as n,x as a,a1 as l,A as t,ao as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"Up：在幾秒鐘內部署無服務器應用程序 | LCTT x X-CMD","titleTemplate":false,"description":"Up：在幾秒鐘內部署無服務器應用程序 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Up：在幾秒鐘內部署無服務器應用程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Up：在幾秒鐘內部署無服務器應用程序 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170811 UP – deploy serverless apps in seconds","title":"Up：在幾秒鐘內部署無服務器應用程序","tag":"201710","desc":""},"relativePath":"201710/20170811 UP – deploy serverless apps in seconds.md","filePath":"[post].md"}'),d={name:"201710/20170811 UP – deploy serverless apps in seconds.md"};function g(h,s,q,c,b,k){const p=o("Link");return u(),r("div",null,[s[72]||(s[72]=n("h1",{id:"up-在幾秒鐘內部署無服務器應用程序",tabindex:"-1"},[a("Up：在幾秒鐘內部署無服務器應用程序 "),n("a",{class:"header-anchor",href:"#up-在幾秒鐘內部署無服務器應用程序","aria-label":"Permalink to “Up：在幾秒鐘內部署無服務器應用程序”"},"​")],-1)),s[73]||(s[73]=n("p",null,[n("img",{src:"https://cdn-images-1.medium.com/max/2000/1*8KijrYCm1j0_XvrACQD_fQ.png",alt:""})],-1)),n("p",null,[s[2]||(s[2]=a("去年，我",-1)),l(p,{href:"https://medium.com/@tjholowaychuk/blueprints-for-up-1-5f8197179275"},{default:t(()=>[...s[0]||(s[0]=[a("為 Up 規劃了一份藍圖",-1)])]),_:1}),s[3]||(s[3]=a("，其中描述瞭如何以最小的成本在 AWS 上為大多數構建塊創建一個很棒的無服務器環境。這篇文章則是討論了 ",-1)),l(p,{href:"https://github.com/apex/up"},{default:t(()=>[...s[1]||(s[1]=[a("Up",-1)])]),_:1}),s[4]||(s[4]=a(" 的初始 alpha 版本。",-1))]),s[74]||(s[74]=n("p",null,[a("為什麼關注"),n("ruby",null,[a("無服務器"),n("rt",null,"serverless")]),a("？對於初學者來説，它可以節省成本，因為你可以按需付費，且只為你使用的付費。無服務器方式是自愈的，因為每個請求被隔離並被視作“無狀態的”。最後，它可以無限輕鬆地擴展 —— 沒有機器或集羣要管理。部署你的代碼就行了。")],-1)),n("p",null,[s[7]||(s[7]=a("大約一個月前，我決定開始在 ",-1)),l(p,{href:"https://github.com/apex/up"},{default:t(()=>[...s[5]||(s[5]=[a("apex/up",-1)])]),_:1}),s[8]||(s[8]=a(" 上開發它，併為動態 SVG 版本的 GitHub 用户投票功能寫了第一個小型無服務器示例程序 ",-1)),l(p,{href:"https://github.com/tj/gh-polls"},{default:t(()=>[...s[6]||(s[6]=[a("tj/gh-polls",-1)])]),_:1}),s[9]||(s[9]=a("。它運行良好，成本低於每月 1 美元即可為數百萬次投票服務，因此我會繼續這個項目，看看我是否可以提供開源版本及商業的變體版本。",-1))]),s[75]||(s[75]=n("p",null,"其長期的目標是提供“你自己的 Heroku” 的版本，支持許多平台。雖然平台即服務（PaaS）並不新鮮，但無服務器生態系統正在使這種方案日益萎縮。據説，AWS 和其他的供應商經常由於他們提供的靈活性而被人詬病用户體驗。Up 將複雜性抽象出來，同時為你提供一個幾乎無需運維的解決方案。",-1)),s[76]||(s[76]=n("h3",{id:"安裝",tabindex:"-1"},[a("安裝 "),n("a",{class:"header-anchor",href:"#安裝","aria-label":"Permalink to “安裝”"},"​")],-1)),n("p",null,[s[12]||(s[12]=a("你可以使用以下命令安裝 Up，查看這篇",-1)),l(p,{href:"https://github.com/apex/up/tree/master/docs"},{default:t(()=>[...s[10]||(s[10]=[a("臨時文檔",-1)])]),_:1}),s[13]||(s[13]=a("開始使用。或者如果你使用安裝腳本，請下載",-1)),l(p,{href:"https://github.com/apex/up/releases"},{default:t(()=>[...s[11]||(s[11]=[a("二進制版本",-1)])]),_:1}),s[14]||(s[14]=a("。（請記住，這個項目還在早期。）",-1))]),s[77]||(s[77]=i('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl -sfL https://raw.githubusercontent.com/apex/up/master/install.sh | sh</span></span></code></pre></div><p>只需運行以下命令隨時升級到最新版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up upgrade</span></span></code></pre></div><p>你也可以通過 NPM 進行安裝：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm install -g up</span></span></code></pre></div><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to “功能”">​</a></h3>',6)),n("p",null,[s[16]||(s[16]=a("這個早期 alpha 版本提供什麼功能？讓我們來看看！請記住，Up 不是託管服務，因此你需要一個 AWS 帳户和 ",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/aws-credentials.md"},{default:t(()=>[...s[15]||(s[15]=[a("AWS 憑證",-1)])]),_:1}),s[17]||(s[17]=a("。如果你對 AWS 不熟悉，你可能需要先停下來，直到熟悉流程。",-1))]),n("p",null,[s[19]||(s[19]=a("我遇到的第一個問題是：up(1) 與 ",-1)),l(p,{href:"https://github.com/apex/apex"},{default:t(()=>[...s[18]||(s[18]=[a("apex(1)",-1)])]),_:1}),s[20]||(s[20]=a(" 有何不同？Apex 專注於部署功能，用於管道和事件處理，而 Up 則側重於應用程序、API 和靜態站點，也就是單個可部署單元。Apex 不為你提供 API 網關、SSL 證書或 DNS，也不提供 URL 重寫，腳本注入等。",-1))]),s[78]||(s[78]=i(`<h4 id="單命令無服務器應用程序" tabindex="-1">單命令無服務器應用程序 <a class="header-anchor" href="#單命令無服務器應用程序" aria-label="Permalink to “單命令無服務器應用程序”">​</a></h4><p>Up 可以讓你使用單條命令部署應用程序、API 和靜態站點。要創建一個應用程序，你只需要一個文件，在 Node.js 的情況下，<code>./app.js</code> 監聽由 Up 提供的 <code>PORT&#39;。請注意，如果你使用的是 </code>package.json<code>，則會檢測並使用</code>start<code>和 </code>build\` 腳本。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const http = require(&#39;http&#39;)</span></span>
<span class="line"><span>const { PORT = 3000 } = process.env</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http.createServer((req, res) =&gt; {</span></span>
<span class="line"><span>  res.end(&#39;Hello World\\n&#39;)</span></span>
<span class="line"><span>}).listen(PORT)</span></span></code></pre></div>`,4)),n("p",null,[s[22]||(s[22]=a("額外的",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/runtimes.md"},{default:t(()=>[...s[21]||(s[21]=[a("運行時環境",-1)])]),_:1}),s[23]||(s[23]=a("也支持開箱可用，例如用於 Golang 的 “main.go”，所以你可以在幾秒鐘內部署 Golang、Python、Crystal 或 Node.js 應用程序。",-1))]),s[79]||(s[79]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>要部署應用程序輸入 <code>up</code> 來創建所需的資源並部署應用程序本身。這裏沒有模糊不清的地方，一旦它説“完成”了那就完成了，該應用程序立即可用 —— 沒有遠程構建過程。</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*tBYR5HXeDDVkb_Pv2MCj1A.png" alt=""></p><p>後續的部署將會更快，因為棧已被配置：</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*2w2WHDTfTT-7GsMtNPklXw.png" alt=""></p><p>使用 <code>up url --open</code> 測試你的程序，以在瀏覽器中瀏覽它，<code>up url --copy</code> 可以將 URL 保存到剪貼板，或者可以嘗試使用 curl：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>curl \`up url\`</span></span>
<span class="line"><span>Hello World</span></span></code></pre></div><p>要刪除應用程序及其資源，只需輸入 <code>up stack delete</code>：</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*FUdhBTtDHaZ2CEPHR7PGqg.png" alt=""></p>`,9)),n("p",null,[s[25]||(s[25]=a("例如，使用 ",-1)),s[26]||(s[26]=n("code",null,"up staging",-1)),s[27]||(s[27]=a(" 或 ",-1)),s[28]||(s[28]=n("code",null,"up production",-1)),s[29]||(s[29]=a(" 和 ",-1)),s[30]||(s[30]=n("code",null,"up url --open production",-1)),s[31]||(s[31]=a(" 部署到預發佈或生產環境。請注意，自定義域名尚不可用，",-1)),l(p,{href:"https://github.com/apex/up/issues/166"},{default:t(()=>[...s[24]||(s[24]=[a("它們將很快可用",-1)])]),_:1}),s[32]||(s[32]=a("。之後，你還可以將版本“推廣”到其他環境。",-1))]),s[80]||(s[80]=i(`<h4 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to “反向代理”">​</a></h4><p>Up 的一個獨特的功能是，它不僅僅是簡單地部署代碼，它將一個 Golang 反向代理放在應用程序的前面。這提供了許多功能，如 URL 重寫、重定向、腳本注入等等，我們將在後面進一步介紹。</p><h4 id="基礎設施即代碼" tabindex="-1">基礎設施即代碼 <a class="header-anchor" href="#基礎設施即代碼" aria-label="Permalink to “基礎設施即代碼”">​</a></h4><p>在配置方面，Up 遵循現代最佳實踐，因此對基礎設施的更改都可以在部署之前預覽，並且 IAM 策略的使用還可以限制開發人員訪問以防止事故發生。一個附帶的好處是它有助於自動記錄你的基礎設施。</p><p>以下是使用 Let&#39;s Encrypt 通過 AWS ACM 配置一些（虛擬）DNS 記錄和免費 SSL 證書的示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>當你首次通過 <code>up</code> 部署應用程序時，需要所有的權限，它為你創建 API 網關、Lambda 函數、ACM 證書、Route53 DNS 記錄等。</p>`,7)),n("p",null,[l(p,{href:"https://github.com/apex/up/issues/115"},{default:t(()=>[...s[33]||(s[33]=[a("ChangeSets",-1)])]),_:1}),s[34]||(s[34]=a(" 尚未實現，但你能使用 ",-1)),s[35]||(s[35]=n("code",null,"up stack plan",-1)),s[36]||(s[36]=a(" 預覽進一步的更改，並使用 ",-1)),s[37]||(s[37]=n("code",null,"up stack apply",-1)),s[38]||(s[38]=a(" 提交，這與 Terraform 非常相似。",-1))]),n("p",null,[s[40]||(s[40]=a("詳細信息請參閲",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/configuration.md"},{default:t(()=>[...s[39]||(s[39]=[a("配置文檔",-1)])]),_:1}),s[41]||(s[41]=a("。",-1))]),s[81]||(s[81]=i(`<h4 id="全球部署" tabindex="-1">全球部署 <a class="header-anchor" href="#全球部署" aria-label="Permalink to “全球部署”">​</a></h4><p><code>regions</code> 數組可以指定應用程序的目標區域。例如，如果你只對單個地區感興趣，請使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;regions&quot;: [&quot;us-west-2&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你的客户集中在北美，你可能需要使用美國和加拿大所有地區：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;regions&quot;: [&quot;us-*&quot;, &quot;ca-*&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最後，你可以使用 AWS 目前支持的所有 14 個地區：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;regions&quot;: [&quot;*&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>多區域支持仍然是一個正在進行的工作，因為需要一些新的 AWS 功能來將它們結合在一起。</p><h4 id="靜態文件服務" tabindex="-1">靜態文件服務 <a class="header-anchor" href="#靜態文件服務" aria-label="Permalink to “靜態文件服務”">​</a></h4><p>Up 默認支持靜態文件服務，並帶有 HTTP 緩存支持，因此你可以在應用程序前使用 CloudFront 或任何其他 CDN 來大大減少延遲。</p><p>當 <code>type</code> 為 <code>static</code> 時，默認情況下的工作目錄是 <code>.</code>，但是你也可以提供一個 <code>static.dir</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;static&quot;: {</span></span>
<span class="line"><span>    &quot;dir&quot;: &quot;public&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="構建鈎子" tabindex="-1">構建鈎子 <a class="header-anchor" href="#構建鈎子" aria-label="Permalink to “構建鈎子”">​</a></h4><p>構建鈎子允許你在部署或執行其他操作時定義自定義操作。一個常見的例子是使用 Webpack 或 Browserify 捆綁 Node.js 應用程序，這大大減少了文件大小，因為 node 模組是_很大_的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;hooks&quot;: {</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;browserify --node server.js &gt; app.js&quot;,</span></span>
<span class="line"><span>    &quot;clean&quot;: &quot;rm app.js&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="腳本和樣式表插入" tabindex="-1">腳本和樣式表插入 <a class="header-anchor" href="#腳本和樣式表插入" aria-label="Permalink to “腳本和樣式表插入”">​</a></h4>`,16)),n("p",null,[s[43]||(s[43]=a("Up 允許你插入腳本和樣式，無論是內聯方式或聲明路徑。它甚至支持一些“罐頭”腳本，用於 Google Analytics（分析）和 ",-1)),l(p,{href:"https://segment.com/"},{default:t(()=>[...s[42]||(s[42]=[a("Segment",-1)])]),_:1}),s[44]||(s[44]=a("，只需複製並粘貼你的寫入密鑰即可。",-1))]),s[82]||(s[82]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="重寫和重定向" tabindex="-1">重寫和重定向 <a class="header-anchor" href="#重寫和重定向" aria-label="Permalink to “重寫和重定向”">​</a></h4><p>Up 通過 <code>redirects</code> 對象支持重定向和 URL 重寫，該對象將路徑模式映射到新位置。如果省略 <code>status</code> 參數（或值為 200），那麼它是重寫，否則是重定向。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>用於重寫的常見情況是 SPA（單頁面應用程序），你希望不管路徑如何都提供 <code>index.html</code>，當然除非文件存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;app&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;redirects&quot;: {</span></span>
<span class="line"><span>    &quot;/*&quot;: {</span></span>
<span class="line"><span>      &quot;location&quot;: &quot;/&quot;,</span></span>
<span class="line"><span>      &quot;status&quot;: 200</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果要強制實施該規則，無論文件是否存在，只需添加 <code>&quot;force&quot;: true</code> 。</p><h4 id="環境變量" tabindex="-1">環境變量 <a class="header-anchor" href="#環境變量" aria-label="Permalink to “環境變量”">​</a></h4><p>密碼將在下一個版本中有，但是現在支持純文本環境變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;api&quot;,</span></span>
<span class="line"><span>  &quot;environment&quot;: {</span></span>
<span class="line"><span>    &quot;API_FEATURE_FOO&quot;: &quot;1&quot;,</span></span>
<span class="line"><span>    &quot;API_FEATURE_BAR&quot;: &quot;0&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="cors-支持" tabindex="-1">CORS 支持 <a class="header-anchor" href="#cors-支持" aria-label="Permalink to “CORS 支持”">​</a></h4>`,11)),n("p",null,[l(p,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS"},{default:t(()=>[...s[45]||(s[45]=[a("CORS",-1)])]),_:1}),s[46]||(s[46]=a(" 支持允許你指定哪些（如果有的話）域可以從瀏覽器訪問你的 API。如果你希望允許任何網站訪問你的 API，只需啓用它：",-1))]),s[83]||(s[83]=i(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;cors&quot;: {</span></span>
<span class="line"><span>    &quot;enable&quot;: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你還可以自定義訪問，例如僅將 API 訪問限制為你的前端或 SPA。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;cors&quot;: {</span></span>
<span class="line"><span>    &quot;allowed_origins&quot;: [&quot;https://myapp.com&quot;],</span></span>
<span class="line"><span>    &quot;allowed_methods&quot;: [&quot;HEAD&quot;, &quot;GET&quot;, &quot;POST&quot;, &quot;PUT&quot;, &quot;DELETE&quot;],</span></span>
<span class="line"><span>    &quot;allowed_headers&quot;: [&quot;Content-Type&quot;, &quot;Authorization&quot;]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="日誌" tabindex="-1">日誌 <a class="header-anchor" href="#日誌" aria-label="Permalink to “日誌”">​</a></h4>`,4)),n("p",null,[s[48]||(s[48]=a("對於 $0.5/GB 的低價格，你可以使用 CloudWatch 日誌進行結構化日誌查詢和跟蹤。Up 實現了一種用於改進 CloudWatch 提供的自定義",-1)),l(p,{href:"https://github.com/apex/up/blob/master/internal/logs/parser/grammar.peg"},{default:t(()=>[...s[47]||(s[47]=[a("查詢語言",-1)])]),_:1}),s[49]||(s[49]=a("，專門用於查詢結構化 JSON 日誌。",-1))]),s[84]||(s[84]=i(`<p><img src="https://cdn-images-1.medium.com/max/2000/1*hrON4pH_WzN6CajaiU-ZYw.png" alt=""></p><p>你可以查詢現有日誌：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up logs</span></span></code></pre></div><p>跟蹤在線日誌：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up logs -f</span></span></code></pre></div><p>或者對其中任一個進行過濾，例如只顯示耗時超過 5 毫秒的 200 個 GET/HEAD 請求：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>up logs &#39;method in (&quot;GET&quot;, &quot;HEAD&quot;) status = 200 duration &gt;= 5&#39;</span></span></code></pre></div><p><img src="https://cdn-images-1.medium.com/max/1600/1*Nhc5eiMM24gbiICFW7kBLg.png" alt=""></p><p>查詢語言是非常靈活的，這裏有更多來自於 <code>up help logs</code> 的例子</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### 顯示過去 5 分鐘的日誌</span></span>
<span class="line"><span>$ up logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示過去 30 分鐘的日誌</span></span>
<span class="line"><span>$ up logs -s 30m</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示過去 5 小時的日誌</span></span>
<span class="line"><span>$ up logs -s 5h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 實時顯示日誌</span></span>
<span class="line"><span>$ up logs -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示錯誤日誌</span></span>
<span class="line"><span>$ up logs error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示錯誤和致命錯誤日誌</span></span>
<span class="line"><span>$ up logs &#39;error or fatal&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示非 info 日誌</span></span>
<span class="line"><span>$ up logs &#39;not info&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示特定消息的日誌</span></span>
<span class="line"><span>$ up logs &#39;message = &quot;user login&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示超時 150ms 的 200 響應</span></span>
<span class="line"><span>$ up logs &#39;status = 200 duration &gt; 150&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示 4xx 和 5xx 響應</span></span>
<span class="line"><span>$ up logs &#39;status &gt;= 400&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示用户郵件包含 @apex.sh 的日誌</span></span>
<span class="line"><span>$ up logs &#39;user.email contains &quot;@apex.sh&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示用户郵件以 @apex.sh 結尾的日誌</span></span>
<span class="line"><span>$ up logs &#39;user.email = &quot;*@apex.sh&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示用户郵件以 tj@ 開始的日誌</span></span>
<span class="line"><span>$ up logs &#39;user.email = &quot;tj@*&quot;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 顯示路徑 /tobi 和 /loki 下的錯誤日誌</span></span>
<span class="line"><span>$ up logs &#39;error and (path = &quot;/tobi&quot; or path = &quot;/loki&quot;)&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 和上面一樣，用 in 顯示</span></span>
<span class="line"><span>$ up logs &#39;error and path in (&quot;/tobi&quot;, &quot;/loki&quot;)&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 更復雜的查詢方式</span></span>
<span class="line"><span>$ up logs &#39;method in (&quot;POST&quot;, &quot;PUT&quot;) ip = &quot;207.*&quot; status = 200 duration &gt;= 50&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 將 JSON 格式的錯誤日誌發送給 jq 工具</span></span>
<span class="line"><span>$ up logs error | jq</span></span></code></pre></div><p>請注意，<code>and</code> 關鍵字是暗含的，雖然你也可以使用它。</p><h4 id="冷啓動時間" tabindex="-1">冷啓動時間 <a class="header-anchor" href="#冷啓動時間" aria-label="Permalink to “冷啓動時間”">​</a></h4><p>這是 AWS Lambda 平台的特性，但冷啓動時間通常遠遠低於 1 秒，在未來，我計劃提供一個選項來保持它們在線。</p><h4 id="配置驗證" tabindex="-1">配置驗證 <a class="header-anchor" href="#配置驗證" aria-label="Permalink to “配置驗證”">​</a></h4><p><code>up config</code> 命令輸出解析後的配置，有默認值和推斷的運行時設置 - 它也起到驗證配置的雙重目的，因為任何錯誤都會導致退出狀態 &gt; 0。</p><h4 id="崩潰恢復" tabindex="-1">崩潰恢復 <a class="header-anchor" href="#崩潰恢復" aria-label="Permalink to “崩潰恢復”">​</a></h4><p>使用 Up 作為反向代理的另一個好處是執行崩潰恢復 —— 在崩潰後重新啓動服務器，並在將錯誤的響應發送給客户端之前重新嘗試該請求。</p><p>例如，假設你的 Node.js 程序由於間歇性資料庫問題而導致未捕獲的異常崩潰，Up 可以在響應客户端之前重試該請求。之後這個行為會更加可定製。</p><h4 id="適合持續集成" tabindex="-1">適合持續集成 <a class="header-anchor" href="#適合持續集成" aria-label="Permalink to “適合持續集成”">​</a></h4><p>很難説這是一個功能，但是感謝 Golang 相對較小和獨立的二進制文件，你可以在一兩秒中在 CI 中安裝 Up。</p><h4 id="http-2" tabindex="-1">HTTP/2 <a class="header-anchor" href="#http-2" aria-label="Permalink to “HTTP/2”">​</a></h4><p>Up 通過 API 網關支持 HTTP/2，對於服務很多資源的應用和站點可以減少延遲。我將來會對許多平台進行更全面的測試，但是 Up 的延遲已經很好了：</p><p><img src="https://cdn-images-1.medium.com/max/1600/1*psg0kJND1UCryXEa0D3VBA.jpeg" alt=""></p><h4 id="錯誤頁面" tabindex="-1">錯誤頁面 <a class="header-anchor" href="#錯誤頁面" aria-label="Permalink to “錯誤頁面”">​</a></h4><p>Up 提供了一個默認錯誤頁面，如果你要提供支持電子郵件或調整顏色，你可以使用 <code>error_pages</code> 自定義。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;site&quot;,</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;static&quot;,</span></span>
<span class="line"><span>  &quot;error_pages&quot;: {</span></span>
<span class="line"><span>    &quot;variables&quot;: {</span></span>
<span class="line"><span>      &quot;support_email&quot;: &quot;support@apex.sh&quot;,</span></span>
<span class="line"><span>      &quot;color&quot;: &quot;#228ae6&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>默認情況下，它看上去像這樣：</p><p><img src="https://cdn-images-1.medium.com/max/2000/1*_Mdj6uTCGvYTCoXsNOSD6w.png" alt=""></p><p>如果你想提供自定義模板，你可以創建以下一個或多個文件。特定文件優先。</p><ul><li><code>error.html</code> – 匹配任何 4xx 或 5xx</li><li><code>5xx.html</code> – 匹配任何 5xx 錯誤</li><li><code>4xx.html</code> – 匹配任何 4xx 錯誤</li><li><code>CODE.html</code> – 匹配一個特定的代碼，如 404.html</li></ul>`,30)),n("p",null,[s[51]||(s[51]=a("查看",-1)),l(p,{href:"https://github.com/apex/up/blob/master/docs/configuration.md#error-pages"},{default:t(()=>[...s[50]||(s[50]=[a("文檔",-1)])]),_:1}),s[52]||(s[52]=a("閲讀更多有關模板的信息。",-1))]),s[85]||(s[85]=n("h3",{id:"伸縮和成本",tabindex:"-1"},[a("伸縮和成本 "),n("a",{class:"header-anchor",href:"#伸縮和成本","aria-label":"Permalink to “伸縮和成本”"},"​")],-1)),s[86]||(s[86]=n("p",null,"你已經做了這麼多，但是 Up 怎麼伸縮？目前，API 網關和 AWS 是目標平台，因此你無需進行任何更改即可擴展，只需部署代碼即可完成。你只需按需支付實際使用的數量並且無需人工干預。",-1)),n("p",null,[s[54]||(s[54]=a("AWS 每月免費提供 1,000,000 個請求，但你可以使用 ",-1)),l(p,{href:"http://serverlesscalc.com/"},{default:t(()=>[...s[53]||(s[53]=[a("http://serverlesscalc.com",-1)])]),_:1}),s[55]||(s[55]=a(" 來插入預期流量。在未來 Up 將提供更多的平台，所以如果一個成本過高，你可以遷移到另一個！",-1))]),s[87]||(s[87]=n("h3",{id:"未來",tabindex:"-1"},[a("未來 "),n("a",{class:"header-anchor",href:"#未來","aria-label":"Permalink to “未來”"},"​")],-1)),s[88]||(s[88]=n("p",null,"目前為止就這樣了！它可能看起來不是很多，但它已經超過 10,000 行代碼，並且我剛剛開始開發。看看這個問題隊列，假設項目可持續發展，看看未來會有什麼期待。",-1)),n("p",null,[s[57]||(s[57]=a("如果你發現這個免費版本有用，請考慮在 ",-1)),l(p,{href:"https://opencollective.com/apex-up"},{default:t(()=>[...s[56]||(s[56]=[a("OpenCollective",-1)])]),_:1}),s[58]||(s[58]=a(" 上捐贈我，因為我沒有任何工作。我將在短期內開發早期專業版，對早期用户有年費優惠。專業或企業版也將提供源碼，因此可以進行內部修復和自定義。",-1))]),s[89]||(s[89]=n("hr",null,null,-1)),n("p",null,[s[60]||(s[60]=a("via: ",-1)),l(p,{href:"https://medium.freecodecamp.org/up-b3db1ca930ee"},{default:t(()=>[...s[59]||(s[59]=[a("https://medium.freecodecamp.org/up-b3db1ca930ee",-1)])]),_:1})]),n("p",null,[s[64]||(s[64]=a("作者：",-1)),l(p,{href:"https://medium.freecodecamp.org/@tjholowaychuk?source=post_header_lockup"},{default:t(()=>[...s[61]||(s[61]=[a("TJ Holowaychuk",-1)])]),_:1}),s[65]||(s[65]=a(" 譯者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:t(()=>[...s[62]||(s[62]=[a("geekpi",-1)])]),_:1}),s[66]||(s[66]=a(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:t(()=>[...s[63]||(s[63]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[69]||(s[69]=a("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[67]||(s[67]=[a("LCTT",-1)])]),_:1}),s[70]||(s[70]=a(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:t(()=>[...s[68]||(s[68]=[a("Linux中國",-1)])]),_:1}),s[71]||(s[71]=a(" 榮譽推出",-1))])])}const x=e(d,[["render",g]]);export{y as __pageData,x as default};
