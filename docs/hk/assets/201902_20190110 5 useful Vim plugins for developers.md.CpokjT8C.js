import{_ as l,a0 as o,w as r,s as d,ao as t,I as a,a1 as i,A as e,x as n}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"5 個好用的開發者 Vim 插件 | LCTT x X-CMD","titleTemplate":false,"description":"5 個好用的開發者 Vim 插件 | LCTT (201902) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"5 個好用的開發者 Vim 插件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"5 個好用的開發者 Vim 插件 | LCTT (201902) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201902/20190110 5 useful Vim plugins for developers","title":"5 個好用的開發者 Vim 插件","tag":"201902","desc":""},"relativePath":"201902/20190110 5 useful Vim plugins for developers.md","filePath":"[post].md"}'),u={name:"201902/20190110 5 useful Vim plugins for developers.md"};function g(c,s,m,h,k,b){const p=o("Link");return r(),d("div",null,[s[40]||(s[40]=t('<h1 id="_5-個好用的開發者-vim-插件" tabindex="-1">5 個好用的開發者 Vim 插件 <a class="header-anchor" href="#_5-個好用的開發者-vim-插件" aria-label="Permalink to “5 個好用的開發者 Vim 插件”">​</a></h1><blockquote><p>通過這 5 個插件擴展 Vim 功能來提升你的編碼效率。</p></blockquote><p><img src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/web_browser_desktop_devlopment_design_system_computer.jpg?itok=pfqRrJgh" alt=""></p><p>我用 Vim 已經超過 20 年了，兩年前我決定把它作為我的首要文本編輯器。我用 Vim 來編寫代碼、配置文件、Blog文章及其它任意可以用純文本表達的東西。Vim 有很多超級棒的功能，一旦你適合了它，你的工作會變得非常高效。</p><p>在日常編輯工作中，我更傾向於使用 Vim 穩定的原生功能，但開源社區對 Vim 開發了大量的插件，可以擴展 Vim 的功能、改進你的工作流程和提升工作效率。</p><p>以下列舉 5 個非常好用的可以用於編寫任意編程語言的插件。</p><h3 id="_1、auto-pairs" tabindex="-1">1、Auto Pairs <a class="header-anchor" href="#_1、auto-pairs" aria-label="Permalink to “1、Auto Pairs”">​</a></h3>',7)),a("p",null,[i(p,{href:"https://www.vim.org/scripts/script.php?script_id=3599"},{default:e(()=>[...s[0]||(s[0]=[n("Auto Pairs",-1)])]),_:1}),s[1]||(s[1]=n(" 插件可以幫助你插入和刪除成對的文字，如花括號、圓括號或引號。這在編寫代碼時非常有用，因為很多編程語言都有成對標記的語法，就像圓括號用於函數調用，或引號用於字符串定義。",-1))]),s[41]||(s[41]=t(`<p>Auto Pairs 最基本的功能是在你輸入一個左括號時會自動補全對應的另一半括號。比如，你輸入了一個 <code>[</code>，它會自動幫你補充另一半 <code>]</code>。相反，如果你用退格鍵刪除開頭的一半括號，Auto Pairs 會刪除另一半。</p><p>如果你設置了自動縮進，當你按下回車鍵時 Auto Pairs 會在恰當的縮進位置補全另一半括號，這比你找到放置另一半的位置並選擇一個正確的括號要省勁多了。</p><p>例如下面這段代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    x := true</span></span>
<span class="line"><span>    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if x { </span></span>
<span class="line"><span>        for _, i := range items</span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>items</code> 後面輸入一個左花括號按下回車會產生下面的結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    x := true</span></span>
<span class="line"><span>    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if x {</span></span>
<span class="line"><span>        for _, i := range items  {</span></span>
<span class="line"><span>            | (cursor here)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)),a("p",null,[s[3]||(s[3]=n("Auto Pairs 提供了大量其它選項（你可以在 ",-1)),i(p,{href:"https://github.com/jiangmiao/auto-pairs"},{default:e(()=>[...s[2]||(s[2]=[n("GitHub",-1)])]),_:1}),s[4]||(s[4]=n(" 上找到），但最基本的功能已經很讓人省時間了。",-1))]),s[42]||(s[42]=a("h3",{id:"_2、nerd-commenter",tabindex:"-1"},[n("2、NERD Commenter "),a("a",{class:"header-anchor",href:"#_2、nerd-commenter","aria-label":"Permalink to “2、NERD Commenter”"},"​")],-1)),a("p",null,[i(p,{href:"https://github.com/scrooloose/nerdcommenter"},{default:e(()=>[...s[5]||(s[5]=[n("NERD Commenter",-1)])]),_:1}),s[6]||(s[6]=n(" 插件給 Vim 增加了代碼註釋的功能，類似在 ",-1)),s[7]||(s[7]=a("ruby",null,[n("IDE"),a("rt",null,"integrated development environment")],-1)),s[8]||(s[8]=n(" 中註釋功能。有了這個插件，你可以一鍵註釋單行或多行代碼。",-1))]),a("p",null,[s[10]||(s[10]=n("NERD Commenter 可以與標準的 Vim ",-1)),i(p,{href:"http://vim.wikia.com/wiki/Filetype.vim"},{default:e(()=>[...s[9]||(s[9]=[n("filetype",-1)])]),_:1}),s[11]||(s[11]=n(" 插件配合，所以它能理解一些編程語言並使用合適的方式來註釋代碼。",-1))]),s[43]||(s[43]=t(`<p>最易上手的方法是按 <code>Leader+Space</code> 組合鍵來切換註釋當前行。Vim 默認的 Leader 鍵是 <code>\\</code>。</p><p>在<ruby>可視化模式<rt>Visual mode</rt></ruby>中，你可以選擇多行一併註釋。NERD Commenter 也可以按計數註釋，所以你可以加個數量 n 來註釋 n 行。</p><p>還有個有用的特性 “Sexy Comment” 可以用 <code>Leader+cs</code> 來觸發，它的塊註釋風格更漂亮一些。例如下面這段代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    x := true</span></span>
<span class="line"><span>    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if x {</span></span>
<span class="line"><span>        for _, i := range items {</span></span>
<span class="line"><span>            fmt.Println(i)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>選擇 <code>main</code> 函數中的所有行然後按下 <code>Leader+cs</code> 會出來以下注釋效果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> *    x := true</span></span>
<span class="line"><span> *    items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> *    if x {</span></span>
<span class="line"><span> *        for _, i := range items {</span></span>
<span class="line"><span> *            fmt.Println(i)</span></span>
<span class="line"><span> *        }</span></span>
<span class="line"><span> *    }</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因為這些行都是在一個塊中註釋的，你可以用 <code>Leader+Space</code> 組合鍵一次去掉這裏所有的註釋。</p><p>NERD Commenter 是任何使用 Vim 寫代碼的開發者都必裝的插件。</p><h3 id="_3、vim-surround" tabindex="-1">3、VIM Surround <a class="header-anchor" href="#_3、vim-surround" aria-label="Permalink to “3、VIM Surround”">​</a></h3>`,9)),a("p",null,[i(p,{href:"https://www.vim.org/scripts/script.php?script_id=1697"},{default:e(()=>[...s[12]||(s[12]=[n("Vim Surround",-1)])]),_:1}),s[13]||(s[13]=n(" 插件可以幫你“環繞”現有文本插入成對的符號（如括號或雙引號）或標籤（如 HTML 或 XML 標籤）。它和 Auto Pairs 有點兒類似，但是用於處理已有文本，在編輯文本時更有用。",-1))]),s[44]||(s[44]=t(`<p>比如你有以下一個句子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&quot;Vim plugins are awesome !&quot;</span></span></code></pre></div><p>當你的光標處於引起來的句中任何位置時，你可以用 <code>ds&quot;</code> 組合鍵刪除句子兩端的雙引號。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Vim plugins are awesome !</span></span></code></pre></div><p>你也可以用 <code>cs&quot;&#39;</code> 把雙端的雙引號換成單引號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;Vim plugins are awesome !&#39;</span></span></code></pre></div><p>或者再用 <code>cs&#39;[</code> 替換成中括號：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[ Vim plugins are awesome ! ]</span></span></code></pre></div><p>它對編輯 HTML 或 XML 文本中的<ruby>標籤<rt>tag</rt></ruby>尤其在行。假如你有以下一行 HTML 代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;Vim plugins are awesome !&lt;/p&gt;</span></span></code></pre></div><p>當光標在 “awesome” 這個單詞的任何位置時，你可以按 <code>ysiw&lt;em&gt;</code> 直接給它加上着重標籤（<code>&lt;em&gt;</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;Vim plugins are &lt;em&gt;awesome&lt;/em&gt; !&lt;/p&gt;</span></span></code></pre></div><p>注意它聰明地加上了 <code>&lt;/em&gt;</code> 閉合標籤。</p><p>Vim Surround 也可以用 <code>ySS</code> 縮進文本並加上標籤。比如你有以下文本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;p&gt;Vim plugins are &lt;em&gt;awesome&lt;/em&gt; !&lt;/p&gt;</span></span></code></pre></div><p>你可以用 <code>ySS&lt;div class=&quot;normal&quot;&gt;</code> 加上 <code>div</code> 標籤，注意生成的段落是自動縮進的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;div class=&quot;normal&quot;&gt;</span></span>
<span class="line"><span>        &lt;p&gt;Vim plugins are &lt;em&gt;awesome&lt;/em&gt; !&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,17)),a("p",null,[s[15]||(s[15]=n("Vim Surround 有很多其它選項，你可以參照 ",-1)),i(p,{href:"https://github.com/tpope/vim-surround"},{default:e(()=>[...s[14]||(s[14]=[n("GitHub",-1)])]),_:1}),s[16]||(s[16]=n(" 上的説明嘗試它們。",-1))]),s[45]||(s[45]=a("h3",{id:"_4、vim-gitgutter",tabindex:"-1"},[n("4、Vim Gitgutter "),a("a",{class:"header-anchor",href:"#_4、vim-gitgutter","aria-label":"Permalink to “4、Vim Gitgutter”"},"​")],-1)),a("p",null,[i(p,{href:"https://github.com/airblade/vim-gitgutter"},{default:e(()=>[...s[17]||(s[17]=[n("Vim Gitgutter",-1)])]),_:1}),s[18]||(s[18]=n(" 插件對使用 Git 作為版本控制工具的人來説非常有用。它會在 Vim 的行號列旁顯示 ",-1)),s[19]||(s[19]=a("code",null,"git diff",-1)),s[20]||(s[20]=n(" 的差異標記。假設你有如下已提交過的代碼：",-1))]),s[46]||(s[46]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 package main</span></span>
<span class="line"><span>  2</span></span>
<span class="line"><span>  3 import &quot;fmt&quot;</span></span>
<span class="line"><span>  4</span></span>
<span class="line"><span>  5 func main() {</span></span>
<span class="line"><span>  6     x := true</span></span>
<span class="line"><span>  7     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>  8</span></span>
<span class="line"><span>  9     if x {</span></span>
<span class="line"><span> 10         for _, i := range items {</span></span>
<span class="line"><span> 11             fmt.Println(i)</span></span>
<span class="line"><span> 12         }</span></span>
<span class="line"><span> 13     }</span></span>
<span class="line"><span> 14 }</span></span></code></pre></div><p>當你做出一些修改後，Vim Gitgutter 會顯示如下標記：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    1 package main</span></span>
<span class="line"><span>    2</span></span>
<span class="line"><span>    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>    4</span></span>
<span class="line"><span>_   5 func main() {</span></span>
<span class="line"><span>    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>    9         for _, i := range items {</span></span>
<span class="line"><span>   10             fmt.Println(i)</span></span>
<span class="line"><span>+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>   12         }</span></span>
<span class="line"><span>   13     }</span></span>
<span class="line"><span>   14 }</span></span></code></pre></div><p><code>_</code> 標記表示在第 5 行和第 6 行之間刪除了一行。<code>~</code> 表示第 8 行有修改，<code>+</code> 表示新增了第 11 行。</p><p>另外，Vim Gitgutter 允許你用 <code>[c</code> 和 <code>]c</code> 在多個有修改的塊之間跳轉，甚至可以用 <code>Leader+hs</code> 來暫存某個變更集。</p><p>這個插件提供了對變更的即時視覺反饋，如果你用 Git 的話，有了它簡直是如虎添翼。</p><h3 id="_5、vim-fugitive" tabindex="-1">5、VIM Fugitive <a class="header-anchor" href="#_5、vim-fugitive" aria-label="Permalink to “5、VIM Fugitive”">​</a></h3>`,7)),a("p",null,[i(p,{href:"https://www.vim.org/scripts/script.php?script_id=2975"},{default:e(()=>[...s[21]||(s[21]=[n("Vim Fugitive",-1)])]),_:1}),s[23]||(s[23]=n(" 是另一個將 Git 工作流集成到 Vim 中的超棒插件。它對 Git 做了一些封裝，可以讓你在 Vim 裏直接執行 Git 命令並將結果集成在 Vim 界面裏。這個插件有超多的特性，更多信息請訪問它的 ",-1)),i(p,{href:"https://github.com/tpope/vim-fugitive"},{default:e(()=>[...s[22]||(s[22]=[n("GitHub",-1)])]),_:1}),s[24]||(s[24]=n(" 項目頁面。",-1))]),s[47]||(s[47]=t(`<p>這裏有一個使用 Vim Fugitive 的基礎 Git 工作流示例。設想我們已經對下面的 Go 代碼做出修改，你可以用 <code>:Gblame</code> 調用 <code>git blame</code> 來查看每行最後的提交信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    1 package main</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    2</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    4</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│_   5 func main() {</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    7</span></span>
<span class="line"><span>00000000 (Not Committed Yet 2018-12-05 18:55:00 -0500)│~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│    9         for _, i := range items {</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   10             fmt.Println(i)</span></span>
<span class="line"><span>00000000 (Not Committed Yet 2018-12-05 18:55:00 -0500)│+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   12         }</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   13     }</span></span>
<span class="line"><span>e9949066 (Ricardo Gerardi   2018-12-05 18:17:19 -0500)│   14 }</span></span></code></pre></div><p>可以看到第 8 行和第 11 行顯示還未提交。用 <code>:Gstatus</code> 命令檢查倉庫當前的狀態：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 # On branch master</span></span>
<span class="line"><span>  2 # Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span>  3 #</span></span>
<span class="line"><span>  4 # Changes not staged for commit:</span></span>
<span class="line"><span>  5 #   (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)</span></span>
<span class="line"><span>  6 #   (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)</span></span>
<span class="line"><span>  7 #</span></span>
<span class="line"><span>  8 #       modified:   vim-5plugins/examples/test1.go</span></span>
<span class="line"><span>  9 #</span></span>
<span class="line"><span> 10 no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>    1 package main</span></span>
<span class="line"><span>    2</span></span>
<span class="line"><span>    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>    4</span></span>
<span class="line"><span>_   5 func main() {</span></span>
<span class="line"><span>    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>    9         for _, i := range items {</span></span>
<span class="line"><span>   10             fmt.Println(i)</span></span>
<span class="line"><span>+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>   12         }</span></span>
<span class="line"><span>   13     }</span></span>
<span class="line"><span>   14 }</span></span></code></pre></div><p>Vim Fugitive 在分割的窗口裏顯示 <code>git status</code> 的輸出結果。你可以在該行按下 <code>-</code> 鍵用該文件的名字暫存這個文件的提交，再按一次 <code>-</code> 可以取消暫存。這個信息會隨着你的操作自動更新：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 # On branch master</span></span>
<span class="line"><span>  2 # Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span>  3 #</span></span>
<span class="line"><span>  4 # Changes to be committed:</span></span>
<span class="line"><span>  5 #   (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)</span></span>
<span class="line"><span>  6 #</span></span>
<span class="line"><span>  7 #       modified:   vim-5plugins/examples/test1.go</span></span>
<span class="line"><span>  8 #</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>    1 package main</span></span>
<span class="line"><span>    2</span></span>
<span class="line"><span>    3 import &quot;fmt&quot;</span></span>
<span class="line"><span>    4</span></span>
<span class="line"><span>_   5 func main() {</span></span>
<span class="line"><span>    6     items := []string{&quot;tv&quot;, &quot;pc&quot;, &quot;tablet&quot;}</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>~   8     if len(items) &gt; 0 {</span></span>
<span class="line"><span>    9         for _, i := range items {</span></span>
<span class="line"><span>   10             fmt.Println(i)</span></span>
<span class="line"><span>+  11             fmt.Println(&quot;------&quot;)</span></span>
<span class="line"><span>   12         }</span></span>
<span class="line"><span>   13     }</span></span>
<span class="line"><span>   14 }</span></span></code></pre></div><p>現在你可以用 <code>:Gcommit</code> 來提交修改了。Vim Fugitive 會打開另一個分割窗口讓你輸入提交信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 vim-5plugins: Updated test1.go example file</span></span>
<span class="line"><span>  2 # Please enter the commit message for your changes. Lines starting</span></span>
<span class="line"><span>  3 # with &#39;#&#39; will be ignored, and an empty message aborts the commit.</span></span>
<span class="line"><span>  4 #</span></span>
<span class="line"><span>  5 # On branch master</span></span>
<span class="line"><span>  6 # Your branch is up to date with &#39;origin/master&#39;.</span></span>
<span class="line"><span>  7 #</span></span>
<span class="line"><span>  8 # Changes to be committed:</span></span>
<span class="line"><span>  9 #       modified:   vim-5plugins/examples/test1.go</span></span>
<span class="line"><span> 10 #</span></span></code></pre></div><p>按 <code>:wq</code> 保存文件完成提交：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[master c3bf80f] vim-5plugins: Updated test1.go example file</span></span>
<span class="line"><span> 1 file changed, 2 insertions(+), 2 deletions(-)</span></span>
<span class="line"><span>Press ENTER or type command to continue</span></span></code></pre></div><p>然後你可以再用 <code>:Gstatus</code> 檢查結果並用 <code>:Gpush</code> 把新的提交推送到遠程。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>  1 # On branch master</span></span>
<span class="line"><span>  2 # Your branch is ahead of &#39;origin/master&#39; by 1 commit.</span></span>
<span class="line"><span>  3 #   (use &quot;git push&quot; to publish your local commits)</span></span>
<span class="line"><span>  4 #</span></span>
<span class="line"><span>  5 nothing to commit, working tree clean</span></span></code></pre></div><p>Vim Fugitive 的 GitHub 項目主頁有很多屏幕錄像展示了它的更多功能和工作流，如果你喜歡它並想多學一些，快去看看吧。</p><h3 id="接下來" tabindex="-1">接下來？ <a class="header-anchor" href="#接下來" aria-label="Permalink to “接下來？”">​</a></h3><p>這些 Vim 插件都是程序開發者的神器！還有另外兩類開發者常用的插件：自動完成插件和語法檢查插件。它些大都是和具體的編程語言相關的，以後我會在一些文章中介紹它們。</p><p>你在寫代碼時是否用到一些其它 Vim 插件？請在評論區留言分享。</p><hr>`,17)),a("p",null,[s[26]||(s[26]=n("via: ",-1)),i(p,{href:"https://opensource.com/article/19/1/vim-plugins-developers"},{default:e(()=>[...s[25]||(s[25]=[n("https://opensource.com/article/19/1/vim-plugins-developers",-1)])]),_:1})]),a("p",null,[s[31]||(s[31]=n("作者：",-1)),i(p,{href:"https://opensource.com/users/rgerardi"},{default:e(()=>[...s[27]||(s[27]=[n("Ricardo Gerardi",-1)])]),_:1}),s[32]||(s[32]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[28]||(s[28]=[n("lujun9972",-1)])]),_:1}),s[33]||(s[33]=n(" 譯者：",-1)),i(p,{href:"https://github.com/pityonline"},{default:e(()=>[...s[29]||(s[29]=[n("pityonline",-1)])]),_:1}),s[34]||(s[34]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[30]||(s[30]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[37]||(s[37]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[35]||(s[35]=[n("LCTT",-1)])]),_:1}),s[38]||(s[38]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[36]||(s[36]=[n("Linux中國",-1)])]),_:1}),s[39]||(s[39]=n(" 榮譽推出",-1))])])}const y=l(u,[["render",g]]);export{v as __pageData,y as default};
