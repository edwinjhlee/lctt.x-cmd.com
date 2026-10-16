import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"詳解 Ubuntu snap 包的製作過程 | LCTT x X-CMD","titleTemplate":false,"description":"詳解 Ubuntu snap 包的製作過程 | LCTT (201710) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"詳解 Ubuntu snap 包的製作過程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"詳解 Ubuntu snap 包的製作過程 | LCTT (201710) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201710/20170228 How to create a snap for timg with snapcraft on Ubuntu","title":"詳解 Ubuntu snap 包的製作過程","tag":"201710","desc":""},"relativePath":"201710/20170228 How to create a snap for timg with snapcraft on Ubuntu.md","filePath":"[post].md"}'),g={name:"201710/20170228 How to create a snap for timg with snapcraft on Ubuntu.md"};function c(u,s,m,b,h,k){const p=o("Link");return r(),d("div",null,[s[117]||(s[117]=a("h1",{id:"詳解-ubuntu-snap-包的製作過程",tabindex:"-1"},[n("詳解 Ubuntu snap 包的製作過程 "),a("a",{class:"header-anchor",href:"#詳解-ubuntu-snap-包的製作過程","aria-label":"Permalink to “詳解 Ubuntu snap 包的製作過程”"},"​")],-1)),s[118]||(s[118]=a("blockquote",null,[a("p",null,"如果你看過譯者以前翻譯的 snappy 文章，不知有沒有感覺相關主題都是淺嘗輒止，講得不夠透徹，看得也不太過癮？如果有的話，相信這篇詳細講解如何從零開始製作一個 snap 包的文章應該不會讓你失望。")],-1)),a("p",null,[s[2]||(s[2]=n("在這篇文章中，我們將看到如何為名為 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[0]||(s[0]=[n("timg",-1)])]),_:1}),s[3]||(s[3]=n(" 的實用程序製作對應的 snap 包。如果這是你第一次聽説 snap 安裝包，你可以先看看 ",-1)),i(p,{href:"https://tutorials.ubuntu.com/tutorial/create-your-first-snap"},{default:e(()=>[...s[1]||(s[1]=[n("如何創建你的第一個 snap 包",-1)])]),_:1}),s[4]||(s[4]=n("。",-1))]),s[119]||(s[119]=a("p",null,"今天我們將學習以下有關使用 snapcraft 製作 snap 包的內容：",-1)),a("ul",null,[a("li",null,[i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[5]||(s[5]=[n("timg",-1)])]),_:1}),s[7]||(s[7]=n(" 源碼中的 Makefile 文件是手工編寫，我們需要修改一些 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[6]||(s[6]=[n("make 插件參數",-1)])]),_:1}),s[8]||(s[8]=n("。",-1))]),s[11]||(s[11]=a("li",null,"這個程序是用 C++ 語言寫的，依賴幾個額外的庫文件。我們需要把相關的代碼添加到 snap 包中。",-1)),a("li",null,[i(p,{href:"https://snapcraft.io/docs/reference/confinement"},{default:e(()=>[...s[9]||(s[9]=[n("嚴格限制還是傳統限制",-1)])]),_:1}),s[10]||(s[10]=n("？我們將會討論如何在它們之間進行選擇。",-1))])]),a("p",null,[s[13]||(s[13]=n("首先，我們瞭解下 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[12]||(s[12]=[n("timg",-1)])]),_:1}),s[14]||(s[14]=n(" 有什麼用？",-1))]),s[120]||(s[120]=a("h3",{id:"背景",tabindex:"-1"},[n("背景 "),a("a",{class:"header-anchor",href:"#背景","aria-label":"Permalink to “背景”"},"​")],-1)),s[121]||(s[121]=a("p",null,"Linux 終端模擬器已經變得非常炫酷，並且還能顯示顏色！",-1)),s[122]||(s[122]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/ynm5k5urc7idb037ahca2s93/%E5%9B%BE%E7%89%87.png",alt:"1.png-19.9kB"})],-1)),s[123]||(s[123]=a("p",null,"除了標準的顏色，大多數終端模擬器（如上圖顯示的 GNOME 終端）都支持真彩色（1600 萬種顏色）。",-1)),s[124]||(s[124]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/h2ynj68axdqiy7dwszgw5z1f/%E5%9B%BE%E7%89%87.png",alt:"圖片.png-61.9kB"})],-1)),a("p",null,[s[17]||(s[17]=n("是的！終端模擬器已經支持真彩色了！從這個頁面“ ",-1)),i(p,{href:"https://gist.github.com/XVilka/8346728"},{default:e(()=>[...s[15]||(s[15]=[n("多個終端和終端應用程序已經支持真彩色（1600 萬種顏色）",-1)])]),_:1}),s[18]||(s[18]=n("” 可以獲取 AWK 代碼自己進行測試。你可以看到在代碼中使用了一些 ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Escape_sequence"},{default:e(()=>[...s[16]||(s[16]=[n("轉義序列",-1)])]),_:1}),s[19]||(s[19]=n(" 來指定 RGB 的值（256 * 256 * 256 ~= 1600 萬種顏色）。",-1))]),s[125]||(s[125]=a("h3",{id:"timg-是什麼",tabindex:"-1"},[n("timg 是什麼？ "),a("a",{class:"header-anchor",href:"#timg-是什麼","aria-label":"Permalink to “timg 是什麼？”"},"​")],-1)),a("p",null,[s[21]||(s[21]=n("好了，言歸正傳，",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[20]||(s[20]=[n("timg",-1)])]),_:1}),s[22]||(s[22]=n(" 有什麼用？它能將輸入的圖片重新調整為終端窗口字符所能顯示範圍的大小（比如：80 x 25），然後在任何分辨率的終端窗口用彩色字符顯示圖像。",-1))]),s[126]||(s[126]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/nzlqpq3xn4rs72h4r96k4xlw/%E5%9B%BE%E7%89%87.png",alt:"圖片.png-37.3kB"})],-1)),a("p",null,[s[24]||(s[24]=n("這幅圖用彩色塊字符顯示了 ",-1)),i(p,{href:"http://design.ubuntu.com/wp-content/uploads/ubuntu-logo112.png"},{default:e(()=>[...s[23]||(s[23]=[n("Ubuntu 的 logo",-1)])]),_:1}),s[25]||(s[25]=n("，原圖是一個 PNG 格式的文件。",-1))]),s[127]||(s[127]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/vo1nxnu4xfaghyib03fnkvq4/%E5%9B%BE%E7%89%87.png",alt:"圖片.png-165kB"})],-1)),a("p",null,[s[27]||(s[27]=n("這是 ",-1)),i(p,{href:"https://www.flickr.com/photos/doug88888/5776072628/in/photolist-9WCiNQ-7U3Trc-7YUZBL-5DwkEQ-6e1iT8-a372aS-5F75aL-a1gbow-6eNayj-8gWK2H-5CtH7P-6jVqZv-86RpwN-a2nEnB-aiRmsc-6aKvwK-8hmXrN-5CWDNP-62hWM8-a9smn1-ahQqHw-a22p3w-a36csK-ahN4Pv-7VEmnt-ahMSiT-9NpTa7-5A3Pon-ai7DL7-9TKCqV-ahr7gN-a1boqP-83ZzpH-9Sqjmq-5xujdi-7UmDVb-6J2zQR-5wAGNR-5eERar-5KVDym-5dL8SZ-5S2Uut-7RVyHg-9Z6MAt-aiRiT4-5tLesw-aGLSv6-5ftp6j-5wAVBq-5T2KAP"},{default:e(()=>[...s[26]||(s[26]=[n("@Doug8888 拍攝的花",-1)])]),_:1}),s[28]||(s[28]=n("。",-1))]),a("p",null,[s[30]||(s[30]=n("如果你通過遠程連接服務器來管理自己的業務，並想要查看圖像文件，那麼 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[29]||(s[29]=[n("timg",-1)])]),_:1}),s[31]||(s[31]=n(" 將會特別有用。",-1))]),a("p",null,[s[33]||(s[33]=n("除了靜態圖片，",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[32]||(s[32]=[n("timg",-1)])]),_:1}),s[34]||(s[34]=n(" 同樣也可以顯示 gif 動圖。",-1))]),s[128]||(s[128]=a("p",null,"那麼讓我們開始 snap 之旅吧！",-1)),s[129]||(s[129]=a("h3",{id:"熟悉-timg-的源碼",tabindex:"-1"},[n("熟悉 timg 的源碼 "),a("a",{class:"header-anchor",href:"#熟悉-timg-的源碼","aria-label":"Permalink to “熟悉 timg 的源碼”"},"​")],-1)),a("p",null,[i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[35]||(s[35]=[n("timg",-1)])]),_:1}),s[37]||(s[37]=n(" 的源碼可以在 ",-1)),i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[36]||(s[36]=[n("https://github.com/hzeller/timg",-1)])]),_:1}),s[38]||(s[38]=n(" 找到。讓我們試着手動編譯它，以瞭解它有什麼需求。",-1))]),s[130]||(s[130]=a("p",null,[a("img",{src:"http://static.zybuluo.com/apollomoon/hovu73yqx08pdhm8qmdg6f6a/%E5%9B%BE%E7%89%87.png",alt:"圖片.png-128.4kB"})],-1)),s[131]||(s[131]=a("p",null,[a("code",null,"Makefile"),n(" 在 "),a("code",null,"src/"),n(" 子文件夾中而不是項目的根文件夾中。在 github 頁面上，他們説需要安裝兩個開發包（GraphicsMagic++ 和 WebP），然後使用 "),a("code",null,"make"),n(" 就能生成可執行文件。在截圖中可以看到我已經將它們安裝好了（在我讀完相關的 Readme.md 文件後）。")],-1)),s[132]||(s[132]=a("p",null,[n("因此，在編寫 "),a("code",null,"snapcraft.yaml"),n(" 文件時已經有了四條腹稿：")],-1)),a("ol",null,[s[45]||(s[45]=a("li",null,[a("code",null,"Makefile"),n(" 在 "),a("code",null,"src/"),n(" 子文件夾中而不是項目的根文件夾中。")],-1)),s[46]||(s[46]=a("li",null,"這個程序編譯時需要兩個開發庫。",-1)),s[47]||(s[47]=a("li",null,"為了讓 timg 以 snap 包形式運行，我們需要將這兩個庫捆綁在 snap 包中（或者靜態鏈接它們）。",-1)),a("li",null,[i(p,{href:"https://github.com/hzeller/timg"},{default:e(()=>[...s[39]||(s[39]=[n("timg",-1)])]),_:1}),s[40]||(s[40]=n(" 是用 C++ 編寫的，所以需要安裝 g++。在編譯之前，讓我們通過 ",-1)),s[41]||(s[41]=a("code",null,"snapcraft.yaml",-1)),s[42]||(s[42]=n(" 文件來檢查 ",-1)),s[43]||(s[43]=a("code",null,"build-essential",-1)),s[44]||(s[44]=n(" 元包是否已經安裝。",-1))])]),s[133]||(s[133]=l(`<h3 id="從-snapcraft-開始" tabindex="-1">從 snapcraft 開始 <a class="header-anchor" href="#從-snapcraft-開始" aria-label="Permalink to “從 snapcraft 開始”">​</a></h3><p>讓我們新建一個名為 <code>timg-snap/</code> 的文件夾，並在其中運行 <code>snapcraft init</code> 這條命令來創建 <code>snapcraft.yaml</code> 工作的框架。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~$ mkdir timg-snap</span></span>
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
<span class="line"><span>    plugin: nil</span></span></code></pre></div><h3 id="填充元數據" tabindex="-1">填充元數據 <a class="header-anchor" href="#填充元數據" aria-label="Permalink to “填充元數據”">​</a></h3><p><code>snapcraft.yaml</code> 配置文件的上半部分是元數據。我們需要一個一個把它們填滿，這算是比較容易的部分。元數據由以下字段組成：</p><ol><li><code>name</code> （名字）—— snap 包的名字，它將公開在 Ubuntu 商店中。</li><li><code>version</code> （版本）—— snap 包的版本號。可以是源代碼存儲庫中一個適當的分支或者標記，如果沒有分支或標記的話，也可以是當前日期。</li><li><code>summary</code> （摘要）—— 不超過 80 個字符的簡短描述。</li><li><code>description</code> （描述）—— 長一點的描述, 100 個字以下。</li><li><code>grade</code> （等級）—— <code>stable</code> （穩定）或者 <code>devel</code> （開發）。因為我們想要在 Ubuntu 商店的穩定通道中發佈這個 snap 包，所以在 snap 包能正常工作後，就把它設置成 <code>stable</code>。</li><li><code>confinement</code> （限制）—— 我們首先設置為 <code>devmode</code> （開發模式），這樣系統將不會以任何方式限制 snap 包。一旦它在 <code>devmode</code>下能正常工作，我們再考慮選擇 <code>strict</code> （嚴格）還是 <code>classic</code> （傳統）限制。</li></ol><p>我們將使用 <code>timg</code> 這個名字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft register timg</span></span>
<span class="line"><span>Registering timg.</span></span>
<span class="line"><span>You already own the name &#39;timg&#39;.</span></span></code></pre></div><p>是的，這個名字我已經註冊了 😃。</p><p>接下來，我們應該選擇哪個版本的 timg？</p><p><img src="http://static.zybuluo.com/apollomoon/o64i7jm65u3o12wg3fqqcn7x/%E5%9B%BE%E7%89%87.png" alt="圖片.png-72.7kB"></p><p>當在倉庫中尋找分支或標記時，我們會發現有一個 v0.9.5 標籤，其中有 2016 年 6 月 27 日最新提交的代碼。</p><p><img src="http://static.zybuluo.com/apollomoon/t4w1uak9j4h6rfn4ghc8q15k/%E5%9B%BE%E7%89%87.png" alt="圖片.png-71.4kB"></p><p>然而主分支（<code>master</code>）中有兩個看起來很重要的提交。因此我們使用主分支而不用 <code>v0.9.5</code> 標籤的那個。我們使用今天的日期—— <code>20170226</code> 做為版本號。</p><p>我們從倉庫中搜集了摘要和描述。其中摘要的內容為 <code>A terminal image viewer</code>，描述的內容為 <code>A viewer that uses 24-Bit color capabilities and unicode character blocks to display images in the terminal</code>。</p><p>最後，將 <code>grade</code> （等級）設置為 <code>stable</code> （穩定），將 <code>confinement</code> 限制設置為 <code>devmode</code> （開發模式）（一直到 snap 包真正起作用）。</p><p>這是更新後的 <code>snapcraft.yaml</code>，帶有所有的元數據：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ cat snap/snapcraft.yaml </span></span>
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
<span class="line"><span>    plugin: nil</span></span></code></pre></div><h3 id="弄清楚-parts-是什麼" tabindex="-1">弄清楚 <code>parts:</code> 是什麼 <a class="header-anchor" href="#弄清楚-parts-是什麼" aria-label="Permalink to “弄清楚 parts: 是什麼”">​</a></h3><p>現在我們需要將上面已經存在的 <code>parts:</code> 部分替換成真實的 <code>parts:</code>。</p><p><img src="http://static.zybuluo.com/apollomoon/cvuetj2rzd5nee7pgfcp7wr3/timg-git-url.png" alt="timg-git-url.png-8kB"></p><p><em>Git 倉庫的 URL。</em></p><p><img src="http://static.zybuluo.com/apollomoon/dxtl628r1qavphhzu70jiw1n/%E5%9B%BE%E7%89%87.png" alt="圖片.png-28.7kB"></p><p><em>存在 Makefile，因此我們需要 make 插件。</em></p>`,24)),a("p",null,[s[50]||(s[50]=n("我們已經知道 git 倉庫的 URL 鏈接，並且 timg 源碼中已有了 ",-1)),s[51]||(s[51]=a("code",null,"Makefile",-1)),s[52]||(s[52]=n(" 文件。至於 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[48]||(s[48]=[n("snapcraft make 插件",-1)])]),_:1}),s[53]||(s[53]=n(" 的 Makefile 命令，正如文檔所言，這個插件總是會運行 ",-1)),s[54]||(s[54]=a("code",null,"make",-1)),s[55]||(s[55]=n(" 後再運行 ",-1)),s[56]||(s[56]=a("code",null,"make install",-1)),s[57]||(s[57]=n("。為了確認 ",-1)),s[58]||(s[58]=a("code",null,"make",-1)),s[59]||(s[59]=n(" 插件的用法，我查看了 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/"},{default:e(()=>[...s[49]||(s[49]=[n("snapcraft 可用插件列表",-1)])]),_:1}),s[60]||(s[60]=n("。",-1))]),s[134]||(s[134]=l(`<p>因此，我們將最初的配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  my-part:</span></span>
<span class="line"><span>    # See &#39;snapcraft plugins&#39;</span></span>
<span class="line"><span>    plugin: nil</span></span></code></pre></div><p>修改為：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    plugin: make</span></span></code></pre></div><p>這是當前 <code>snapcraft.yaml</code> 文件的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
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
<span class="line"><span>    plugin: make</span></span></code></pre></div><p>讓我們運行下 <code>snapcraft prime</code> 命令看看會發生什麼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime</span></span>
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
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>我們可以看到 <code>snapcraft</code> 無法在源代碼中找到 <code>Makefile</code> 文件，正如我們之前所暗示的，<code>Makefile</code> 位於 <code>src/</code> 子文件夾中。那麼，我們可以讓 <code>snapcraft</code> 使用 <code>src/</code> 文件夾中的 <code>Makefile</code> 文件嗎？</p>`,9)),a("p",null,[s[62]||(s[62]=n("每個 snapcraft 插件都有自己的選項，並且有一些通用選項是所有插件共享的。在本例中，我們希望研究那些",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/source"},{default:e(()=>[...s[61]||(s[61]=[n("與源代碼相關的 snapcraft 選項",-1)])]),_:1}),s[63]||(s[63]=n("。我們開始吧：",-1))]),s[135]||(s[135]=l(`<p><strong>source-subdir：path</strong></p><p>snapcraft 會<ruby>檢出<rt>checkout</rt></ruby> <code>source</code> 關鍵字所引用的倉庫或者解壓歸檔文件到 <code>parts/&lt;part-name&gt;/src/</code> 中，但是它只會將特定的子目錄複製到 <code>parts/&lt;part-name&gt;/build/</code> 中。</p><p>我們已經有了適當的選項，下面更新下 <code>parts</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span></code></pre></div><p>然後再次運行 <code>snapcraft prime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime </span></span>
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
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div>`,6)),a("p",null,[s[65]||(s[65]=n("從錯誤信息我們可以得知 snapcraft 找不到 GraphicsMagick++ 這個開發庫文件。根據 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/common"},{default:e(()=>[...s[64]||(s[64]=[n("snapcraft 常見關鍵字",-1)])]),_:1}),s[66]||(s[66]=n(" 可知，我們需要在 ",-1)),s[67]||(s[67]=a("code",null,"snapcraft.yaml",-1)),s[68]||(s[68]=n(" 中指定這個庫文件，這樣 snapcraft 才能安裝它。",-1))]),s[136]||(s[136]=l(`<p><strong>build-packages：[deb, deb, deb…]</strong></p><p>列出構建 part 前需要在主機中安裝的 Ubuntu 包。這些包通常不會進入最終的 snap 包中，除非它們含有 snap 包中二進制文件直接依賴的庫文件（在這種情況下，可以通過 <code>ldd</code> 發現它們），或者在 <code>stage-package</code> 中顯式地指定了它們。</p><p>讓我們尋找下這個開發包的名字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ apt-cache search graphicsmagick++ | grep dev</span></span>
<span class="line"><span>graphicsmagick-libmagick-dev-compat/xenial 1.3.23-1build1 all</span></span>
<span class="line"><span>libgraphicsmagick++1-dev/xenial 1.3.23-1build1 amd64</span></span>
<span class="line"><span>  format-independent image processing - C++ development files</span></span>
<span class="line"><span>libgraphicsmagick1-dev/xenial 1.3.23-1build1 amd64</span></span>
<span class="line"><span>  format-independent image processing - C development files</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>可以看到包名為 <code>libgraphicsmagick++1-dev</code>，下面是更新後的 <code>parts</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span></code></pre></div><p>再次運行 <code>snapcraft</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft</span></span>
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
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>雖然只指定了開發庫 <code>libgraphicsmagick+1-dev</code>，但 Ubuntu 還安裝了一些代碼庫，包括 <code>libgraphicsmagick ++-q16-12</code>，以及動態代碼庫 <code>libwebp</code>。</p><p>這裏仍然有一個錯誤，這個是因為缺少開發版本的 <code>webp</code> 庫（一個靜態庫）。我們可以通過下面的命令找到它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ apt-cache search libwebp | grep dev</span></span>
<span class="line"><span>libwebp-dev - Lossy compression of digital photographic images.</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>上面安裝的 <code>libwebp5</code> 包只提供了一個動態庫（.so）。通過 <code>libwebp-dev</code> 包，我們可以得到相應的靜態庫（.a）。好了，讓我們更新下 <code>parts:</code> 部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages:</span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span></code></pre></div><p>下面是更新後的 <code>snapcraft.yaml</code> 文件的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
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
<span class="line"><span>      - libwebp-dev</span></span></code></pre></div><p>讓我們運行下 <code>snapcraft prime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime</span></span>
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
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div>`,17)),a("p",null,[s[70]||(s[70]=n("我們遇到了一個新問題。由於 ",-1)),s[71]||(s[71]=a("code",null,"Makefile",-1)),s[72]||(s[72]=n(" 文件是手工編寫的，不符合 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[69]||(s[69]=[n("snapcraft make 插件",-1)])]),_:1}),s[73]||(s[73]=n(" 的參數設置，所以不能正確安裝到 ",-1)),s[74]||(s[74]=a("code",null,"prime/",-1)),s[75]||(s[75]=n(" 文件夾中。",-1)),s[76]||(s[76]=a("code",null,"Makefile",-1)),s[77]||(s[77]=n(" 會嘗試安裝到 ",-1)),s[78]||(s[78]=a("code",null,"usr/local/bin",-1)),s[79]||(s[79]=n(" 中。",-1))]),a("p",null,[s[81]||(s[81]=n("我們需要告訴 ",-1)),i(p,{href:"https://snapcraft.io/docs/reference/plugins/make"},{default:e(()=>[...s[80]||(s[80]=[n("snapcraft make 插件",-1)])]),_:1}),s[82]||(s[82]=n(" 不要運行 ",-1)),s[83]||(s[83]=a("code",null,"make install",-1)),s[84]||(s[84]=n("，而是找到 ",-1)),s[85]||(s[85]=a("code",null,"timg",-1)),s[86]||(s[86]=n(" 可執行文件然後把它放到 ",-1)),s[87]||(s[87]=a("code",null,"prime/",-1)),s[88]||(s[88]=n(" 文件夾中。根據文檔的描述：",-1))]),s[137]||(s[137]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>- artifacts:</span></span>
<span class="line"><span>（列表）</span></span>
<span class="line"><span>將 make 生成的指定文件複製或者鏈接到 snap 包安裝目錄。如果使用，則 \`make install\` 這步操作將被忽略。</span></span></code></pre></div><p>所以，我們需要將一些東西放到 <code>artifacts:</code> 中。但是具體是哪些東西？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap/parts/timg$ ls build/src/</span></span>
<span class="line"><span>Makefile            terminal-canvas.h  timg*     timg.o</span></span>
<span class="line"><span>terminal-canvas.cc  terminal-canvas.o  timg.cc</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap/parts/timg$</span></span></code></pre></div><p>在 <code>build/</code> 子目錄中，我們可以找到 <code>make</code> 的輸出結果。由於我們設置了 <code>source-subdir:</code> 為 <code>src</code>，所以 <code>artifacts:</code> 的基目錄為 <code>build/src</code>。在這裏我們可以找到可執行文件 <code>timg</code>，我們需要將它設置為 <code>artifacts:</code> 的一個參數。通過 <code>artifacts:</code>，我們可以把 <code>make</code> 輸出的某些文件複製到 snap 包的安裝目錄（在 <code>prime/</code> 中）。</p><p>下面是更新後 <code>snapcraft.yaml</code> 文件 <code>parts:</code> 部分的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parts:</span></span>
<span class="line"><span>  timg:</span></span>
<span class="line"><span>    source: https://github.com/hzeller/timg.git</span></span>
<span class="line"><span>    source-subdir: src</span></span>
<span class="line"><span>    plugin: make</span></span>
<span class="line"><span>    build-packages: </span></span>
<span class="line"><span>      - libgraphicsmagick++1-dev</span></span>
<span class="line"><span>      - libwebp-dev</span></span>
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>讓我們運行 <code>snapcraft prime</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime</span></span>
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
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>我們還將繼續迭代。</p><h3 id="導出命令" tabindex="-1">導出命令 <a class="header-anchor" href="#導出命令" aria-label="Permalink to “導出命令”">​</a></h3><p>到目前為止，snapcraft 生成了可執行文件，但沒有導出給用户使用的命令。接下來我們需要通過 <code>apps:</code> 導出一個命令。</p><p>首先我們需要知道命令在 <code>prime/</code> 的哪個子文件夾中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ ls prime/</span></span>
<span class="line"><span>meta/  snap/  timg*  usr/</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>它在 <code>prime/</code> 子文件夾的根目錄中。現在，我們已經準備好要在 <code>snapcaft.yaml</code> 中增加 <code>apps:</code> 的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ cat snap/snapcraft.yaml </span></span>
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
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>讓我們再次運行 <code>snapcraft prime</code>，然後測試下生成的 snap 包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft prime </span></span>
<span class="line"><span>Skipping pull timg (already ran)</span></span>
<span class="line"><span>Skipping build timg (already ran)</span></span>
<span class="line"><span>Skipping stage timg (already ran)</span></span>
<span class="line"><span>Skipping prime timg (already ran)</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$ snap try --devmode prime/</span></span>
<span class="line"><span>timg 20170226 mounted from /home/ubuntu/timg-snap/prime</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p><img src="http://static.zybuluo.com/apollomoon/v9y3vutt8li4wwaxeigwr4yz/%E5%9B%BE%E7%89%87.png" alt="圖片.png-42.3kB"></p>`,18)),a("p",null,[a("em",null,[s[90]||(s[90]=n("圖片來源： ",-1)),i(p,{href:"https://www.flickr.com/photos/mustangjoe/6091603784/"},{default:e(()=>[...s[89]||(s[89]=[n("https://www.flickr.com/photos/mustangjoe/6091603784/",-1)])]),_:1})])]),s[138]||(s[138]=l(`<p>我們可以通過 <code>snap try --devmode prime/ </code> 啓用該 snap 包然後測試 <code>timg</code> 命令。這是一種高效的測試方法，可以避免生成 .snap 文件，並且無需安裝和卸載它們，因為 <code>snap try prime/</code> 直接使用了 <code>prime/</code> 文件夾中的內容。</p><h3 id="限制-snap" tabindex="-1">限制 snap <a class="header-anchor" href="#限制-snap" aria-label="Permalink to “限制 snap”">​</a></h3><p>到目前為止，snap 包一直是在不受限制的開發模式下運行的。讓我們看看如何限制它的運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snap list</span></span>
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
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>通過這種方式，我們可以無需修改 <code>snapcraft.yaml</code> 文件就從開發模式（<code>devmode</code>）切換到限制模式（<code>jailmode</code>）（<code>confinement: strict</code>）。正如預期的那樣，<code>timg</code> 無法讀取圖像，因為我們沒有開放訪問文件系統的權限。</p><p>現在，我們需要作出決定。使用限制模式，我們可以很容易授予某個命令訪問用户 <code>$HOME</code> 目錄中文件的權限，但是隻能訪問那裏。如果圖像文件位於其它地方，我們總是需要複製到 <code>$HOME</code> 目錄並在 <code>$HOME</code> 的副本上運行 timg。如果我們覺得可行，那我們可以設置 <code>snapcraf.yaml</code> 為:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
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
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>另一方面，如果希望 timg snap 包能訪問整個文件系統，我們可以設置傳統限制來實現。對應的 <code>snapcraft.yaml</code> 內容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name: timg</span></span>
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
<span class="line"><span>    artifacts: [timg]</span></span></code></pre></div><p>接下來我們將選擇嚴格（<code>strict</code>）約束選項。因此，圖像應該只能放在 $HOME 中。</p><h3 id="打包和測試" tabindex="-1">打包和測試 <a class="header-anchor" href="#打包和測試" aria-label="Permalink to “打包和測試”">​</a></h3><p>讓我們打包這個 snap，也就是製作 .snap 文件，然後在新安裝的 Ubuntu 系統上對它進行測試。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaps:~/timg-snap$ snapcraft </span></span>
<span class="line"><span>Skipping pull timg (already ran)</span></span>
<span class="line"><span>Skipping build timg (already ran)</span></span>
<span class="line"><span>Skipping stage timg (already ran)</span></span>
<span class="line"><span>Skipping prime timg (already ran)</span></span>
<span class="line"><span>Snapping &#39;timg&#39; \\                                                 </span></span>
<span class="line"><span>Snapped timg_20170226_amd64.snap</span></span>
<span class="line"><span>ubuntu@snaps:~/timg-snap$</span></span></code></pre></div><p>我們如何在幾秒鐘內得到一個全新安裝的 Ubuntu 系統來對 snap 包進行測試？</p>`,14)),a("p",null,[s[92]||(s[92]=n("請查看 ",-1)),i(p,{href:"https://blog.simos.info/trying-out-lxd-containers-on-our-ubuntu/"},{default:e(()=>[...s[91]||(s[91]=[n("嘗試在 Ubuntu 上使用 LXD 容器",-1)])]),_:1}),s[93]||(s[93]=n("，並在你的系統上設置 LXD。然後回到這裏，嘗試運行下面的命令：",-1))]),s[139]||(s[139]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ lxc launch ubuntu:x snaptesting</span></span>
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
<span class="line"><span>ubuntu@snaptesting:~$</span></span></code></pre></div><p>我們啓動了一個名為 <code>snaptesting</code> 的 LXD 容器，並將 .snap 文件複製進去。然後，通過普通用户連接到容器，並嘗試安裝 snap 包。最初，我們安裝失敗了，因為在無特權的 LXD 容器中安裝 snap 包需要使用 <code>sudo</code> 。接着又失敗了，因為 .snap 沒有經過簽名（我們需要使用 <code>--dangerous</code> 參數）。然而還是失敗了，這次是因為我們需要安裝 <code>squashfuse</code> 包（Ubuntu 16.04 鏡像中沒有預裝）。最後，我們成功安裝了snap，並設法查看了圖像。</p><p>在一個全新安裝的 Linux 系統中測試 snap 包是很重要的，因為這樣才能確保 snap 包中包含所有必須的代碼庫。在這個例子中，我們使用了靜態庫並運行良好。</p><h3 id="發佈到-ubuntu-商店" tabindex="-1">發佈到 Ubuntu 商店 <a class="header-anchor" href="#發佈到-ubuntu-商店" aria-label="Permalink to “發佈到 Ubuntu 商店”">​</a></h3>`,4)),a("p",null,[s[95]||(s[95]=n("這是 ",-1)),i(p,{href:"https://snapcraft.io/docs/build-snaps/publish"},{default:e(()=>[...s[94]||(s[94]=[n("發佈 snap 包到 Ubuntu 商店的説明",-1)])]),_:1}),s[96]||(s[96]=n("。 在之前的教程中，我們已經發布了一些 snap 包。對於 ",-1)),s[97]||(s[97]=a("code",null,"timg",-1)),s[98]||(s[98]=n(" 來説，我們設置了嚴格限制和穩定等級。因此，我們會將它發佈到穩定通道。",-1))]),s[140]||(s[140]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ snapcraft push timg_20170226_amd64.snap </span></span>
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
<span class="line"><span>The &#39;stable&#39; channel is now open.</span></span></code></pre></div><p>我們把 .snap 包推送到 Ubuntu 商店後，得到了一個 <code>Revision 6</code>。然後，我們將 timg <code>Revision 6</code> 發佈到了 Ubuntu 商店的穩定通道。</p><p>在候選通道中沒有已發佈的 snap 包，它繼承的是穩定通道的包，所以顯示 <code>^</code> 字符。</p><p>在之前的測試中，我將一些較老版本的 snap 包上傳到了測試和邊緣通道。這些舊版本使用了 timg 標籤為 <code>0.9.5</code> 的源代碼。</p><p>我們可以通過將穩定版本發佈到測試和邊緣通道來移除舊的 0.9.5 版本的包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ snapcraft release timg 6 beta</span></span>
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
<span class="line"><span>                           edge       20170226   6</span></span></code></pre></div><h3 id="使用-timg" tabindex="-1">使用 timg <a class="header-anchor" href="#使用-timg" aria-label="Permalink to “使用 timg”">​</a></h3><p>讓我們不帶參數運行 <code>timg</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ubuntu@snaptesting:~$ timg</span></span>
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
<span class="line"><span>ubuntu@snaptesting:~$</span></span></code></pre></div><p>這裏提到當前我們終端模擬器的縮放級別，即分辨率為：80 × 48。</p><p>讓我們縮小一點，並最大化 GNOME 終端窗口。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-g&lt;w&gt;x&lt;h&gt;  : Output pixel geometry. Default from terminal 635x428</span></span></code></pre></div><p>這是一個更好的解決方案，但我幾乎看不到字符，因為他們太小了。讓我們調用前面的命令再次顯示這輛車。</p><p><img src="http://static.zybuluo.com/apollomoon/clnv44g3bwhaqog7o1jpvpcd/%E5%9B%BE%E7%89%87.png" alt="圖片.png-904.9kB"></p><p>你所看到的是調整後的圖像（1080p）。雖然它是用彩色文本字符顯示的，但看起來依舊很棒。</p><p>接下來呢？<code>timg</code> 其實也可以播放 gif 動畫哦！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ wget https://m.popkey.co/9b7141/QbAV_f-maxage-0.gif -O JonahHillAmazed.gif$ timg JonahHillAmazed.gif</span></span></code></pre></div>`,17)),a("p",null,[s[100]||(s[100]=n("你可以試着安裝 ",-1)),s[101]||(s[101]=a("code",null,"timg",-1)),s[102]||(s[102]=n(" 來體驗 gif 動畫。要是不想自己動手，可以在 ",-1)),i(p,{href:"https://asciinema.org/a/dezbe2gpye84e0pjndp8t0pvh"},{default:e(()=>[...s[99]||(s[99]=[n("asciinema",-1)])]),_:1}),s[103]||(s[103]=n(" 上查看相關記錄 （如果視頻看上去起伏不定的，請重新運行它）。",-1))]),s[141]||(s[141]=a("p",null,"謝謝閲讀！",-1)),s[142]||(s[142]=a("hr",null,null,-1)),s[143]||(s[143]=a("p",null,"譯者簡介：",-1)),s[144]||(s[144]=a("p",null,[n("經常混跡於 snapcraft.io，對 Ubuntu Core、Snaps 和 Snapcraft 有着濃厚的興趣，並致力於將這些還在快速發展的新技術通過翻譯或原創的方式介紹到中文世界。有興趣的小夥伴也可以關注譯者個人公眾號： "),a("code",null,"Snapcraft")],-1)),s[145]||(s[145]=a("hr",null,null,-1)),a("p",null,[s[105]||(s[105]=n("via：",-1)),i(p,{href:"https://blog.simos.info/how-to-create-a-snap-for-timg-with-snapcraft-on-ubuntu/"},{default:e(()=>[...s[104]||(s[104]=[n("https://blog.simos.info/how-to-create-a-snap-for-timg-with-snapcraft-on-ubuntu/",-1)])]),_:1})]),a("p",null,[s[109]||(s[109]=n("作者：",-1)),i(p,{href:"https://blog.simos.info/"},{default:e(()=>[...s[106]||(s[106]=[n("Mi blog lah!",-1)])]),_:1}),s[110]||(s[110]=n(" 譯者：",-1)),i(p,{href:"https://github.com/Snapcrafter"},{default:e(()=>[...s[107]||(s[107]=[n("Snapcrafter",-1)])]),_:1}),s[111]||(s[111]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[108]||(s[108]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[114]||(s[114]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[112]||(s[112]=[n("LCTT",-1)])]),_:1}),s[115]||(s[115]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[113]||(s[113]=[n("Linux中國",-1)])]),_:1}),s[116]||(s[116]=n(" 榮譽推出",-1))])])}const C=t(g,[["render",c]]);export{v as __pageData,C as default};
