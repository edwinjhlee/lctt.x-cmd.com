import{_ as t,a0 as o,w as g,s as r,I as a,x as n,a1 as i,A as l,ao as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"如何用 GVM 管理 Go 項目 | LCTT x X-CMD","titleTemplate":false,"description":"如何用 GVM 管理 Go 項目 | LCTT (201910) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何用 GVM 管理 Go 項目 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何用 GVM 管理 Go 項目 | LCTT (201910) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201910/20191008 How to manage Go projects with GVM","title":"如何用 GVM 管理 Go 項目","tag":"201910","desc":""},"relativePath":"201910/20191008 How to manage Go projects with GVM.md","filePath":"[post].md"}'),d={name:"201910/20191008 How to manage Go projects with GVM.md"};function c(h,s,m,u,k,b){const p=o("Link");return g(),r("div",null,[s[30]||(s[30]=a("h1",{id:"如何用-gvm-管理-go-項目",tabindex:"-1"},[n("如何用 GVM 管理 Go 項目 "),a("a",{class:"header-anchor",href:"#如何用-gvm-管理-go-項目","aria-label":"Permalink to “如何用 GVM 管理 Go 項目”"},"​")],-1)),s[31]||(s[31]=a("blockquote",null,[a("p",null,"使用 Go 版本管理器管理多個版本的 Go 語言環境及其模組。")],-1)),s[32]||(s[32]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/programming-code-keyboard-laptop-music-headphones.png?itok=EQZ2WKzy",alt:"正在編程的女人",title:"Woman programming"})],-1)),a("p",null,[s[2]||(s[2]=n("Go 語言版本管理器（",-1)),i(p,{href:"https://github.com/moovweb/gvm"},{default:l(()=>[...s[0]||(s[0]=[n("GVM",-1)])]),_:1}),s[3]||(s[3]=n("）是管理 Go 語言環境的開源工具。GVM “pkgsets” 支持安裝多個版本的 Go 並管理每個項目的模組。它最初由 ",-1)),i(p,{href:"https://github.com/jbussdieker"},{default:l(()=>[...s[1]||(s[1]=[n("Josh Bussdieker",-1)])]),_:1}),s[4]||(s[4]=n(" 開發，GVM（像它的對手 Ruby RVM 一樣）允許你為每個項目或一組項目創建一個開發環境，分離不同的 Go 版本和包依賴關係，以提供更大的靈活性，防止不同版本造成的問題。",-1))]),s[33]||(s[33]=a("p",null,"有幾種管理 Go 包的方式，包括內置於 Go 中的 Go 1.11 的 Modules。我發現 GVM 簡單直觀，即使我不用它來管理包，我還是會用它來管理 Go 不同的版本的。",-1)),s[34]||(s[34]=a("h3",{id:"安裝-gvm",tabindex:"-1"},[n("安裝 GVM "),a("a",{class:"header-anchor",href:"#安裝-gvm","aria-label":"Permalink to “安裝 GVM”"},"​")],-1)),a("p",null,[s[6]||(s[6]=n("安裝 GVM 很簡單。",-1)),i(p,{href:"https://github.com/moovweb/gvm#installing"},{default:l(()=>[...s[5]||(s[5]=[n("GVM 存儲庫",-1)])]),_:1}),s[7]||(s[7]=n("安裝文檔指示你下載安裝程序腳本並將其傳送到 Bash 來安裝:",-1))]),s[35]||(s[35]=e('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>bash &lt; &lt;(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)</span></span></code></pre></div><p>儘管越來越多的人採用這種安裝方法，但是在安裝之前先看看安裝程序在做什麼仍然是一個很好的想法。以 GVM 為例，該安裝程序腳本:</p><ol><li>檢查一些相關依賴性</li><li>克隆 GVM 存儲庫</li><li>使用 shell 腳本： <ul><li>安裝 Go 語言</li><li>管理 <code>GOPATH</code> 環境變量</li><li>向 <code>bashrc</code>、<code>zshrc</code> 或配置文件中添加一行內容</li></ul></li></ol><p>如果你想確認它在做什麼，你可以克隆該存儲庫並查看 shell 腳本，然後運行 <code>./binscripts/gvm-installer</code> 這個本地腳本進行設置。</p>',4)),a("p",null,[s[9]||(s[9]=a("code",null,"注意：",-1)),s[10]||(s[10]=n(" 因為 GVM 可以用來下載和編譯新的 Go 版本，所以有一些預期的依賴關係，如 Make、Git 和 Curl。你可以在 ",-1)),i(p,{href:"https://github.com/moovweb/gvm/blob/master/README.md"},{default:l(()=>[...s[8]||(s[8]=[n("GVM 的自述文件",-1)])]),_:1}),s[11]||(s[11]=n("中找到完整的發行版列表。",-1))]),s[36]||(s[36]=e(`<h3 id="使用-gvm-安裝和管理-go-版本" tabindex="-1">使用 GVM 安裝和管理 GO 版本 <a class="header-anchor" href="#使用-gvm-安裝和管理-go-版本" aria-label="Permalink to “使用 GVM 安裝和管理 GO 版本”">​</a></h3><p>一旦安裝了 GVM，你就可以使用它來安裝和管理不同版本的 Go。<code>gvm listall</code> 命令顯示可下載和編譯的可用版本的 Go：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin ]$ gvm listall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm gos (available)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   go1</span></span>
<span class="line"><span>   go1.0.1</span></span>
<span class="line"><span>   go1.0.2</span></span>
<span class="line"><span>   go1.0.3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;輸出截斷&gt;</span></span></code></pre></div><p>安裝特定的 Go 版本就像 <code>gvm install &lt;版本&gt;</code> 一樣簡單，其中 <code>&lt;版本&gt;</code> 是 <code>gvm listall</code> 命令返回的版本之一。</p><p>假設你正在進行一個使用 Go1.12.8 版本的項目。你可以使用 <code>gvm install go1.12.8</code> 安裝這個版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm install go1.12.8</span></span>
<span class="line"><span>Installing go1.12.8...</span></span>
<span class="line"><span> * Compiling...</span></span>
<span class="line"><span>go1.12.8 successfully installed!</span></span></code></pre></div><p>輸入 <code>gvm list</code>，你會看到 Go 版本 1.12.8 與系統 Go 版本（使用操作系統的軟件包管理器打包的版本）一起並存：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm gos (installed)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   go1.12.8</span></span>
<span class="line"><span>=&gt; system</span></span></code></pre></div><p>GVM 仍在使用系統版本的 Go ，由 <code>=&gt;</code> 符號表示。你可以使用 <code>gvm use</code> 命令切換你的環境以使用新安裝的 go1.12.8：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm use go1.12.8</span></span>
<span class="line"><span>Now using version go1.12.8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ go version</span></span>
<span class="line"><span>go version go1.12.8 linux/amd64</span></span></code></pre></div><p>GVM 使管理已安裝版本的 Go 變得極其簡單，但它不止於此！</p><h3 id="使用-gvm-pkgset" tabindex="-1">使用 GVM pkgset <a class="header-anchor" href="#使用-gvm-pkgset" aria-label="Permalink to “使用 GVM pkgset”">​</a></h3><p>開箱即用，Go 有一種出色而令人沮喪的管理包和模組的方式。默認情況下，如果你 <code>go get</code> 獲取一個包，它將被下載到 <code>$GOPATH</code> 目錄中的 <code>src</code> 和 <code>pkg</code> 目錄下，然後可以使用 <code>import</code> 將其包含在你的 Go 程序中。這使得獲得軟件包變得很容易，特別是對於非特權用户，而不需要 <code>sudo</code> 或 root 特權（很像 Python 中的 <code>pip install --user</code>）。然而，在不同的項目中管理相同包的不同版本是非常困難的。</p>`,13)),a("p",null,[s[13]||(s[13]=n("有許多方法可以嘗試修復或緩解這個問題，包括實驗性 Go Modules（Go 1.11 版中增加了初步支持）和 ",-1)),i(p,{href:"https://golang.github.io/dep/"},{default:l(()=>[...s[12]||(s[12]=[n("Go dep",-1)])]),_:1}),s[14]||(s[14]=n("（Go Modules 的“官方實驗”並且持續迭代）。在我發現 GVM 之前，我會在一個 Go 項目自己的 Docker 容器中構建和測試它，以確保分離。",-1))]),s[37]||(s[37]=e(`<p>GVM 通過使用 “pkgsets” 將項目的新目錄附加到安裝的 Go 版本的默認 <code>$GOPATH</code> 上，很好地實現了項目之間包的管理和隔離，就像 <code>$PATH</code> 在 Unix/Linux 系統上工作一樣。</p><p>想像它如何運行的。首先，安裝新版 Go 1.12.9：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ echo $GOPATH</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.8/global</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm install go1.12.9</span></span>
<span class="line"><span>Installing go1.12.9...</span></span>
<span class="line"><span> * Compiling...</span></span>
<span class="line"><span>go1.12.9 successfully installed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm use go1.12.9</span></span>
<span class="line"><span>Now using version go1.12.9</span></span></code></pre></div><p>當 GVM 被告知使用新版本時，它會更改為新的 <code>$GOPATH</code>，默認 <code>gloabl</code> pkgset 應用於該版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ echo $GOPATH</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.9/global</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm pkgset list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm go package sets (go1.12.9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>=&gt;  global</span></span></code></pre></div><p>儘管默認情況下沒有安裝額外的包，但是全局 pkgset 中的包對於使用該特定版本的 Go 的任何項目都是可用的。</p><p>現在，假設你正在啓用一個新項目，它需要一個特定的包。首先，使用 GVM 創建一個新的 pkgset，名為 <code>introToGvm</code>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ gvm pkgset create introToGvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm pkgset use introToGvm</span></span>
<span class="line"><span>Now using version go1.12.9@introToGvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ gvm pkgset list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gvm go package sets (go1.12.9)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    global</span></span>
<span class="line"><span>=&gt;  introToGvm</span></span></code></pre></div><p>如上所述，pkgset 的一個新目錄被添加到 <code>$GOPATH</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ echo $GOPATH</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.9/introToGvm:/home/chris/.gvm/pkgsets/go1.12.9/global</span></span></code></pre></div><p>將目錄更改為預先設置的 <code>introToGvm</code> 路徑，檢查目錄結構，這裏使用 <code>awk</code> 和 <code>bash</code> 完成。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ cd $( awk -F&#39;:&#39; &#39;{print $1}&#39; &lt;&lt;&lt; $GOPATH )</span></span>
<span class="line"><span>[chris@marvin]$ pwd</span></span>
<span class="line"><span>/home/chris/.gvm/pkgsets/go1.12.9/introToGvm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[chris@marvin]$ ls</span></span>
<span class="line"><span>overlay  pkg  src</span></span></code></pre></div><p>請注意，新目錄看起來很像普通的 <code>$GOPATH</code>。新的 Go 包使用同樣的 <code>go get</code> 命令下載並正常使用，且添加到 pkgset 中。</p><p>例如，使用以下命令獲取 <code>gorilla/mux</code> 包，然後檢查 pkgset 的目錄結構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[chris@marvin]$ go get github.com/gorilla/mux</span></span>
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
<span class="line"><span>            └── test_helpers.go</span></span></code></pre></div><p>如你所見，<code>gorilla/mux</code> 已按預期添加到 pkgset <code>$GOPATH</code> 目錄中，現在可用於使用此 pkgset 項目了。</p><h3 id="gvm-讓-go-管理變得輕而易舉" tabindex="-1">GVM 讓 Go 管理變得輕而易舉 <a class="header-anchor" href="#gvm-讓-go-管理變得輕而易舉" aria-label="Permalink to “GVM 讓 Go 管理變得輕而易舉”">​</a></h3><p>GVM 是一種直觀且非侵入性的管理 Go 版本和包的方式。它可以單獨使用，也可以與其他 Go 模組管理技術結合使用並利用 GVM Go 版本管理功能。按 Go 版本和包依賴來分離項目使得開發更加容易，並且減少了管理版本衝突的複雜性，GVM 讓這變得輕而易舉。</p><hr>`,19)),a("p",null,[s[16]||(s[16]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/19/10/introduction-gvm"},{default:l(()=>[...s[15]||(s[15]=[n("https://opensource.com/article/19/10/introduction-gvm",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/clcollins"},{default:l(()=>[...s[17]||(s[17]=[n("Chris Collins",-1)])]),_:1}),s[22]||(s[22]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[18]||(s[18]=[n("lujun9972",-1)])]),_:1}),s[23]||(s[23]=n(" 譯者：",-1)),i(p,{href:"https://github.com/heguangzhi"},{default:l(()=>[...s[19]||(s[19]=[n("heguangzhi",-1)])]),_:1}),s[24]||(s[24]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const T=t(d,[["render",c]]);export{f as __pageData,T as default};
