import{_ as l,a0 as t,w as h,s as o,ao as d,I as p,x as n,a1 as i,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"給初學者看的 shuf 命令教程 | LCTT x X-CMD","titleTemplate":false,"description":"給初學者看的 shuf 命令教程 | LCTT (201805) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"給初學者看的 shuf 命令教程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"給初學者看的 shuf 命令教程 | LCTT (201805) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201805/20180407 The Shuf Command Tutorial With Examples For Beginners","title":"給初學者看的 shuf 命令教程","tag":"201805","desc":""},"relativePath":"201805/20180407 The Shuf Command Tutorial With Examples For Beginners.md","filePath":"[post].md"}'),c={name:"201805/20180407 The Shuf Command Tutorial With Examples For Beginners.md"};function r(g,s,u,k,b,f){const a=t("Link");return h(),o("div",null,[s[15]||(s[15]=d(`<h1 id="給初學者看的-shuf-命令教程" tabindex="-1">給初學者看的 shuf 命令教程 <a class="header-anchor" href="#給初學者看的-shuf-命令教程" aria-label="Permalink to “給初學者看的 shuf 命令教程”">​</a></h1><p><img src="https://www.ostechnix.com/wp-content/uploads/2018/04/shuf-command-720x340.png" alt=""></p><p><code>shuf</code> 命令用於在類 Unix 操作系統中生成隨機排列。使用 <code>shuf</code> 命令，我們可以隨機打亂給定輸入文件的行。<code>shuf</code> 命令是 GNU Coreutils 的一部分，因此你不必擔心安裝問題。在這個簡短的教程中，讓我向你展示一些 <code>shuf</code> 命令的例子。</p><h3 id="帶例子的-shuf-命令教程" tabindex="-1">帶例子的 shuf 命令教程 <a class="header-anchor" href="#帶例子的-shuf-命令教程" aria-label="Permalink to “帶例子的 shuf 命令教程”">​</a></h3><p>我有一個名為 <code>ostechnix.txt</code> 的文件，內容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat ostechnix.txt</span></span>
<span class="line"><span>line1</span></span>
<span class="line"><span>line2</span></span>
<span class="line"><span>line3</span></span>
<span class="line"><span>line4</span></span>
<span class="line"><span>line5</span></span>
<span class="line"><span>line6</span></span>
<span class="line"><span>line7</span></span>
<span class="line"><span>line8</span></span>
<span class="line"><span>line9</span></span>
<span class="line"><span>line10</span></span></code></pre></div><p>現在讓我們以隨機順序顯示上面的行。為此，請運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf ostechnix.txt</span></span>
<span class="line"><span>line2</span></span>
<span class="line"><span>line8</span></span>
<span class="line"><span>line5</span></span>
<span class="line"><span>line10</span></span>
<span class="line"><span>line7</span></span>
<span class="line"><span>line1</span></span>
<span class="line"><span>line4</span></span>
<span class="line"><span>line6</span></span>
<span class="line"><span>line9</span></span>
<span class="line"><span>line3</span></span></code></pre></div><p>看到了嗎？上面的命令將名為 <code>ostechnix.txt</code> 中的行隨機排列並輸出了結果。</p><p>你可能想將輸出寫入另一個文件。例如，我想將輸出保存到 <code>output.txt</code> 中。為此，請先創建 <code>output.txt</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ touch output.txt</span></span></code></pre></div><p>然後，像下面使用 <code>-o</code> 標誌將輸出寫入該文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf ostechnix.txt -o output.txt</span></span></code></pre></div><p>上面的命令將隨機隨機打亂 <code>ostechnix.txt</code> 的內容並將輸出寫入 <code>output.txt</code>。你可以使用命令查看 <code>output.txt</code> 的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cat output.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>line2</span></span>
<span class="line"><span>line8</span></span>
<span class="line"><span>line9</span></span>
<span class="line"><span>line10</span></span>
<span class="line"><span>line1</span></span>
<span class="line"><span>line3</span></span>
<span class="line"><span>line7</span></span>
<span class="line"><span>line6</span></span>
<span class="line"><span>line4</span></span>
<span class="line"><span>line5</span></span></code></pre></div><p>我只想顯示文件中的任意一行。我該怎麼做？很簡單！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -n 1 ostechnix.txt</span></span>
<span class="line"><span>line6</span></span></code></pre></div><p>同樣，我們可以選擇前 “n” 個隨機條目。以下命令將只顯示前五個隨機條目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -n 5 ostechnix.txt</span></span>
<span class="line"><span>line10</span></span>
<span class="line"><span>line4</span></span>
<span class="line"><span>line5</span></span>
<span class="line"><span>line9</span></span>
<span class="line"><span>line3</span></span></code></pre></div><p>如下所示，我們可以直接使用 <code>-e</code> 標誌傳入輸入，而不是從文件中讀取行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -e line1 line2 line3 line4 line5</span></span>
<span class="line"><span>line1</span></span>
<span class="line"><span>line3</span></span>
<span class="line"><span>line5</span></span>
<span class="line"><span>line4</span></span>
<span class="line"><span>line2</span></span></code></pre></div><p>你也可以傳入數字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -e 1 2 3 4 5</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>2</span></span></code></pre></div><p>要快速在給定範圍選擇一個，請改用此命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -n 1 -e 1 2 3 4 5</span></span></code></pre></div><p>或者，選擇下面的任意三個隨機數字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -n 3 -e 1 2 3 4 5</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>1</span></span></code></pre></div><p>我們也可以在特定範圍內生成隨機數。例如，要顯示 1 到 10 之間的隨機數，只需使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ shuf -i 1-10</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>5</span></span></code></pre></div><p>有關更多詳細信息，請參閲手冊頁。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ man shuf</span></span></code></pre></div><p>今天就是這些。還有更多更好的東西。敬請關注！</p><p>乾杯!</p><hr>`,34)),p("p",null,[s[1]||(s[1]=n("via: ",-1)),i(a,{href:"https://www.ostechnix.com/the-shuf-command-tutorial-with-examples-for-beginners/"},{default:e(()=>[...s[0]||(s[0]=[n("https://www.ostechnix.com/the-shuf-command-tutorial-with-examples-for-beginners/",-1)])]),_:1})]),p("p",null,[s[6]||(s[6]=n("作者：",-1)),i(a,{href:"https://www.ostechnix.com/author/sk/"},{default:e(()=>[...s[2]||(s[2]=[n("SK",-1)])]),_:1}),s[7]||(s[7]=n(" 選題：",-1)),i(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[n("lujun9972",-1)])]),_:1}),s[8]||(s[8]=n(" 譯者：",-1)),i(a,{href:"https://github.com/geekpi"},{default:e(()=>[...s[4]||(s[4]=[n("geekpi",-1)])]),_:1}),s[9]||(s[9]=n(" 校對：",-1)),i(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[12]||(s[12]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[n("LCTT",-1)])]),_:1}),s[13]||(s[13]=n(" 原創編譯，",-1)),i(a,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[n("Linux中國",-1)])]),_:1}),s[14]||(s[14]=n(" 榮譽推出",-1))])])}const y=l(c,[["render",r]]);export{C as __pageData,y as default};
