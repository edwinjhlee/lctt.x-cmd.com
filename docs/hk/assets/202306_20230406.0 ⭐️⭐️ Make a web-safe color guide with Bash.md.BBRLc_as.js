import{_ as i,a0 as t,w as o,s as d,I as n,x as a,a1 as e,A as l,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 Bash 製作 Web 安全顏色 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Bash 製作 Web 安全顏色 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Bash 製作 Web 安全顏色 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Bash 製作 Web 安全顏色 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230406.0 ⭐️⭐️ Make a web-safe color guide with Bash","title":"使用 Bash 製作 Web 安全顏色","tag":"202306","desc":""},"relativePath":"202306/20230406.0 ⭐️⭐️ Make a web-safe color guide with Bash.md","filePath":"[post].md"}'),c={name:"202306/20230406.0 ⭐️⭐️ Make a web-safe color guide with Bash.md"};function h(b,s,g,f,k,u){const p=t("Link");return o(),d("div",null,[s[20]||(s[20]=n("h1",{id:"使用-bash-製作-web-安全顏色",tabindex:"-1"},[a("使用 Bash 製作 Web 安全顏色 "),n("a",{class:"header-anchor",href:"#使用-bash-製作-web-安全顏色","aria-label":"Permalink to “使用 Bash 製作 Web 安全顏色”"},"​")],-1)),s[21]||(s[21]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202306/21/133552hlgt2vdditxfzzcl.jpg",alt:""})],-1)),s[22]||(s[22]=n("blockquote",null,[n("p",null,"使用 Bash 中的 for 循環，為網頁創建一個方便的調色板。")],-1)),n("p",null,[s[1]||(s[1]=a("當計算機顯示器的調色板有限時，網頁設計師通常使用一組 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Web_colors#Web-safe_colors"},{default:l(()=>[...s[0]||(s[0]=[a("Web 安全顏色",-1)])]),_:1}),s[2]||(s[2]=a(" 來創建網站。雖然在較新設備上顯示的現代網站可以顯示比最初的 Web 安全調色板更多的顏色，但我有時喜歡在創建網頁時參考 Web 安全顏色。這樣我就知道我的網頁在任何地方都看起來不錯。",-1))]),s[23]||(s[23]=n("p",null,[a("你可以在網上找到 Web 安全調色板，但我想擁有自己的副本以方便參考。你也可以使用 Bash 中的 "),n("code",null,"for"),a(" 循環創建一個。")],-1)),s[24]||(s[24]=n("h3",{id:"bash-for-循環",tabindex:"-1"},[a("Bash for 循環 "),n("a",{class:"header-anchor",href:"#bash-for-循環","aria-label":"Permalink to “Bash for 循環”"},"​")],-1)),n("p",null,[e(p,{href:"https://opensource.com/article/19/6/how-write-loop-bash"},{default:l(()=>[...s[3]||(s[3]=[a("Bash 中的 for 循環",-1)])]),_:1}),s[4]||(s[4]=a(" 的語法如下所示：",-1))]),s[25]||(s[25]=r(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for 變量 in 集合 ; do 語句 ; done</span></span></code></pre></div><p>例如，假設你想打印從 1 到 3 的所有數字。你可以快速在 Bash 命令列上編寫一個 <code>for</code> 循環來為你完成這項工作：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ for n in 1 2 3 ; do echo $n ; done</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span></code></pre></div><p>分號是標準的 Bash 語句分隔符。它們允許你在一行中編寫多個命令。如果你要在 Bash 腳本文件中包含這個 <code>for</code> 循環，你可以用換行符替換分號並像這樣寫出 <code>for</code> 循環：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for n in 1 2 3</span></span>
<span class="line"><span>  do</span></span>
<span class="line"><span>    echo $n</span></span>
<span class="line"><span>  done</span></span></code></pre></div><p>我喜歡將 <code>do</code> 和 <code>for</code> 放在同一行，這樣我更容易閲讀：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for n in 1 2 3 ; do</span></span>
<span class="line"><span>  echo $n</span></span>
<span class="line"><span>done</span></span></code></pre></div><h3 id="一次多個-for-循環" tabindex="-1">一次多個 for 循環 <a class="header-anchor" href="#一次多個-for-循環" aria-label="Permalink to “一次多個 for 循環”">​</a></h3><p>你可以將一個循環放在另一個循環中。這可以幫助你迭代多個變量，一次做不止一件事。假設你想打印出字母 A、B 和 C 與數字 1、2 和 3 的所有組合。你可以在 Bash 中使用兩個 <code>for</code> 循環來實現，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for number in 1 2 3 ; do</span></span>
<span class="line"><span>  for letter in A B C ; do</span></span>
<span class="line"><span>    echo $letter$number</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果將這些行放在名為 <code>for.bash</code> 的 Bash 腳本文件中並運行它，你會看到九行顯示了所有字母與每個數字配對的組合：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash for.bash</span></span>
<span class="line"><span>A1</span></span>
<span class="line"><span>B1</span></span>
<span class="line"><span>C1</span></span>
<span class="line"><span>A2</span></span>
<span class="line"><span>B2</span></span>
<span class="line"><span>C2</span></span>
<span class="line"><span>A3</span></span>
<span class="line"><span>B3</span></span>
<span class="line"><span>C3</span></span></code></pre></div><h3 id="遍歷-web-安全顏色" tabindex="-1">遍歷 Web 安全顏色 <a class="header-anchor" href="#遍歷-web-安全顏色" aria-label="Permalink to “遍歷 Web 安全顏色”">​</a></h3><p>Web 安全顏色是從十六進制顏色 <code>#000</code>（黑色，即紅色、綠色和藍色值均為零）到 <code>#fff</code>（白色，即紅色、綠色和藍色均為最高），每個十六進制值的步進為 0、3、6、9、c 和 f。</p><p>你可以在 Bash 中使用三個 <code>for</code> 循環生成 Web 安全顏色的所有組合的列表，其中循環遍歷紅色、綠色和藍色值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for r in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>  for g in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>    for b in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>      echo &quot;#$r$g$b&quot;</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果將其保存在名為 <code>websafe.bash</code> 的新 Bash 腳本中並運行它，你就會看到所有 Web 安全顏色的十六進制值的迭代：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash websafe.bash | head</span></span>
<span class="line"><span>#000</span></span>
<span class="line"><span>#003</span></span>
<span class="line"><span>#006</span></span>
<span class="line"><span>#009</span></span>
<span class="line"><span>#00c</span></span>
<span class="line"><span>#00f</span></span>
<span class="line"><span>#030</span></span>
<span class="line"><span>#033</span></span>
<span class="line"><span>#036</span></span>
<span class="line"><span>#039</span></span></code></pre></div><p>要製作可用作 Web 安全顏色參考的 HTML 頁面，你需要使每個條目成為一個單獨的 HTML 元素。將每種顏色放在一個 <code>&lt;div&gt;</code> 元素中，並將背景設置為 Web 安全顏色。為了使十六進制值更易於閲讀，將其放在單獨的 <code>&lt;code&gt;</code> 元素中。將 Bash 腳本更新為如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>for r in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>  for g in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>    for b in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>      echo &quot;&lt;div style=&#39;background-color:#$r$g$b&#39;&gt;&lt;code&gt;#$r$g$b&lt;/code&gt;&lt;/div&gt;&quot;</span></span>
<span class="line"><span>    done</span></span>
<span class="line"><span>  done</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>當你運行新的 Bash 腳本並將結果保存到 HTML 文件時，你可以在瀏覽器中查看所有 Web 安全顏色的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash websafe.bash &gt; websafe.html</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2023-03/10000001000002620000013685924861376B1AB6.webp" alt="Colour gradient."></p><p>這個網頁不是很好看。深色背景上的黑色文字無法閲讀。我喜歡應用一些 HTML 樣式來確保十六進制值在顏色矩形內以黑色背景上的白色文本顯示。為了使頁面看起來非常漂亮，我還使用 HTML 網格樣式來排列每行六個框，每個框之間留出一些空間。</p><p>要添加這種額外的樣式，你需要在 for 循環前後包含其他 HTML 元素。頂部的 HTML 代碼定義樣式，底部的 HTML 代碼關閉所有打開的 HTML 標籤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat&lt;&lt;EOF</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>  &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Web-safe colors&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>  padding-bottom: 1em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>code {</span></span>
<span class="line"><span>  background-color: black;</span></span>
<span class="line"><span>  color: white;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@media only screen and (min-width:600px) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>  display: grid;</span></span>
<span class="line"><span>  grid-template-columns: repeat(6,1fr);</span></span>
<span class="line"><span>  column-gap: 1em;</span></span>
<span class="line"><span>  row-gap: 1em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>  padding-bottom: 3em;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>  &lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for r in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>for g in 0 3 6 9 c f ; do</span></span>
<span class="line"><span>for b in 0 3 6 9 c f ; do</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;&lt;div</span></span>
<span class="line"><span>style=&#39;background-color:#$r$g$b&#39;&gt;&lt;code&gt;#$r$g$b&lt;/code&gt;&lt;/div&gt;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat&lt;&lt;EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span>
<span class="line"><span>EOF</span></span></code></pre></div><p>這個完成的 Bash 腳本以 HTML 格式生成 Web 安全顏色指南。每當你需要引用網絡安全顏色時，運行腳本並將結果保存到 HTML 頁面。現在你可以在瀏覽器中看到 Web 安全顏色的演示，作為你下一個 Web 項目的簡單參考：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ bash websafe.bash &gt; websafe.html</span></span></code></pre></div><p><img src="https://opensource.com/sites/default/files/2023-03/10000001000002620000013633233DC8DC56C891.webp" alt="Web colors."></p><p><em>（題圖：MJ/abf9daf2-b72f-4929-8dd8-b77fb5b9d39b）</em></p><hr>`,31)),n("p",null,[s[6]||(s[6]=a("via: ",-1)),e(p,{href:"https://opensource.com/article/23/4/web-safe-color-guide-bash"},{default:l(()=>[...s[5]||(s[5]=[a("https://opensource.com/article/23/4/web-safe-color-guide-bash",-1)])]),_:1})]),n("p",null,[s[11]||(s[11]=a("作者：",-1)),e(p,{href:"https://opensource.com/users/jim-hall"},{default:l(()=>[...s[7]||(s[7]=[a("Jim Hall",-1)])]),_:1}),s[12]||(s[12]=a(" 選題：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:l(()=>[...s[8]||(s[8]=[a("lkxed",-1)])]),_:1}),s[13]||(s[13]=a(" 譯者：",-1)),e(p,{href:"https://github.com/geekpi"},{default:l(()=>[...s[9]||(s[9]=[a("geekpi",-1)])]),_:1}),s[14]||(s[14]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[10]||(s[10]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[15]||(s[15]=[a("LCTT",-1)])]),_:1}),s[18]||(s[18]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[16]||(s[16]=[a("Linux中國",-1)])]),_:1}),s[19]||(s[19]=a(" 榮譽推出",-1))])])}const v=i(c,[["render",h]]);export{y as __pageData,v as default};
