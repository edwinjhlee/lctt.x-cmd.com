import{_ as t,a0 as o,w as d,s as h,ao as e,I as a,x as n,a1 as i,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Bash 基礎知識系列 #8：For、While 和 Until 循環 | LCTT x X-CMD","titleTemplate":false,"description":"Bash 基礎知識系列 #8：For、While 和 Until 循環 | LCTT (202308) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash 基礎知識系列 #8：For、While 和 Until 循環 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash 基礎知識系列 #8：For、While 和 Until 循環 | LCTT (202308) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202308/20230731 Bash Basics Series -8- For, While and Until Loops","title":"Bash 基礎知識系列 #8：For、While 和 Until 循環","tag":"202308","desc":""},"relativePath":"202308/20230731 Bash Basics Series -8- For, While and Until Loops.md","filePath":"[post].md"}'),r={name:"202308/20230731 Bash Basics Series -8- For, While and Until Loops.md"};function c(g,s,u,b,k,f){const p=o("Link");return d(),h("div",null,[s[30]||(s[30]=e(`<h1 id="bash-基礎知識系列-8-for、while-和-until-循環" tabindex="-1">Bash 基礎知識系列 #8：For、While 和 Until 循環 <a class="header-anchor" href="#bash-基礎知識系列-8-for、while-和-until-循環" aria-label="Permalink to “Bash 基礎知識系列 #8：For、While 和 Until 循環”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202308/21/100731qmt2cmxnyub9xm62.jpg" alt=""></p><blockquote><p>在 Bash 基礎知識系列的倒數第二章節，學習 <code>for</code>、<code>while</code> 和 <code>until</code> 循環。</p></blockquote><p>循環是任何編程語言中的一個強大功能。如果你還不知道，循環其實是一種根據某些條件重複代碼的方式。</p><p>例如，想像一下你需要打印從 1 到 10 的數字。你可以使用 <code>echo</code> 命令寫十次，但那太原始了。你使用一個循環，在 3 到 4 行代碼內，就能完成。</p><p>這是我能想到的最簡單的例子。我將在討論 Bash 循環時，分享一些實際有用的例子。</p><p>在 Bash 中有三種類型的循環：</p><ul><li><code>for</code></li><li><code>while</code></li><li><code>until</code></li></ul><p>我將在教程中展示所有三種類型的循環。讓我們從最常見的一種開始。</p><h3 id="bash-中的-for-循環" tabindex="-1">Bash 中的 For 循環 <a class="header-anchor" href="#bash-中的-for-循環" aria-label="Permalink to “Bash 中的 For 循環”">​</a></h3><p>以下是 Bash 中的 <code>for</code> 循環語法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for arg in LIST; do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div>`,12)),a("p",null,[s[1]||(s[1]=n("這裏的 ",-1)),s[2]||(s[2]=a("code",null,"LIST",-1)),s[3]||(s[3]=n(" 可能是一個數組或者一個項目列表。",-1)),i(p,{href:"https://linuxhandbook.com/brace-expansion/?ref=itsfoss.com"},{default:l(()=>[...s[0]||(s[0]=[n("括號擴展",-1)])]),_:1}),s[4]||(s[4]=n(" 也是進行循環的常用手段。",-1))]),s[31]||(s[31]=e(`<p>考慮一下我在開始提到的最簡單的場景。讓我們使用 <code>for</code> 循環打印從 1 到 10 的數字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for num in {1..10}; do</span></span>
<span class="line"><span>    echo $num</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果你運行它，你應該會看到像這樣的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./for-loop.sh</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><p>你也可以使用 <code>for num in 1 2 3 4 5 6 7 8 9 10; do</code> ，但是使用括號擴展使得代碼看起來更短且更智能。</p><p><code>{..}</code> 是用於擴展模式的。你使用 <code>{d..h}</code> ，它等同於 <code>d e f g h</code> 。關於括號擴展的更多信息，可以在這篇文章中找到。</p>`,6)),a("blockquote",null,[a("p",null,[a("strong",null,[i(p,{href:"https://linuxhandbook.com/brace-expansion/?ref=itsfoss.com"},{default:l(()=>[...s[5]||(s[5]=[n("在 Bash 中使用括號擴展",-1)])]),_:1})])])]),s[32]||(s[32]=e(`<blockquote><p>💡 如果你熟悉 C 語言編程，你可能會喜歡在 bash 中使用 C 風格的 for 循環：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for ((i = 0 ; i &lt; 10 ; i++)); do</span></span>
<span class="line"><span>  echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div></blockquote>`,1)),a("p",null,[s[7]||(s[7]=n("讓我們看另一個例子，顯示 ",-1)),i(p,{href:"https://itsfoss.com/bash-arrays/"},{default:l(()=>[...s[6]||(s[6]=[n("Bash 數組",-1)])]),_:1}),s[8]||(s[8]=n(" 的所有內容：",-1))]),s[33]||(s[33]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>distros=(Ubuntu Fedora Debian Alpine)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in &quot;\${distros[@]}&quot;; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果你運行腳本，它將顯示數組中定義的所有發行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Ubuntu</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>Alpine</span></span></code></pre></div><h3 id="bash-中的-while-循環" tabindex="-1">Bash 中的 While 循環 <a class="header-anchor" href="#bash-中的-while-循環" aria-label="Permalink to “Bash 中的 While 循環”">​</a></h3><p><code>while</code> 循環測試一個條件，然後只要條件為真，就繼續循環。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while [ condition ]; do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果你考慮前一個例子，它可以使用 <code>while</code> 循環進行重寫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span>while [ $num -le 10 ]; do</span></span>
<span class="line"><span>    echo $num</span></span>
<span class="line"><span>    num=$(($num+1))</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如你所見，你首先需要將變量 <code>num</code> 定義為 1，然後在循環體內，你增加 <code>num</code> 的值。只要 <code>num</code> 小於或等於 10，while 循環就會檢查條件並運行腳本。</p><p>因此，現在運行腳本將會顯示出和之前 <code>for</code> 循環中看到的完全相同的結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div>`,11)),a("p",null,[s[10]||(s[10]=n("讓我們看另一個例子。這是一個 ",-1)),i(p,{href:"https://itsfoss.com/bash-pass-arguments/"},{default:l(()=>[...s[9]||(s[9]=[n("Bash 腳本，它接受一個數字作為參數",-1)])]),_:1}),s[11]||(s[11]=n(" 並顯示該表。",-1))]),s[34]||(s[34]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Table for $1 is:&quot;</span></span>
<span class="line"><span>index=1</span></span>
<span class="line"><span>while [ $index -le 10 ]; do</span></span>
<span class="line"><span>    echo $(($1*$index))</span></span>
<span class="line"><span>    index=$(($index+1))</span></span>
<span class="line"><span>done</span></span></code></pre></div>`,1)),a("p",null,[s[13]||(s[13]=n("如果你對 ",-1)),s[14]||(s[14]=a("code",null,"$1",-1)),s[15]||(s[15]=n(" 的使用感到困惑，它代表傳遞給腳本的第一個參數。更多的細節可以參考這個系列的 ",-1)),i(p,{href:"https://itsfoss.com/bash-pass-arguments/"},{default:l(()=>[...s[12]||(s[12]=[n("第三章",-1)])]),_:1}),s[16]||(s[16]=n("。",-1))]),s[35]||(s[35]=e(`<p>如果你運行這個腳本，它應該會顯示以下的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./table.sh 2</span></span>
<span class="line"><span>Table for 2 is:</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>10</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>18</span></span>
<span class="line"><span>20</span></span></code></pre></div><h3 id="bash-中的-until-循環" tabindex="-1">Bash 中的 Until 循環 <a class="header-anchor" href="#bash-中的-until-循環" aria-label="Permalink to “Bash 中的 Until 循環”">​</a></h3><p>這是一個使用較少的循環格式。它的行為和 <code>while</code> 循環類似。這裏的區別是，循環運行直到它檢查的條件為真為止。意味着為了在循環中執行代碼，<code>[ ]</code> 中的條件必須為假。</p><p>我馬上會解釋一下。讓我們先看一下它的語法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>until [ condition ]; do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>現在，如果我要使用相同的示例，即使用 <code>until</code> 循環打印從 1 到 10 的數字，它看起來會是這樣：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span>until [ $num -gt 10 ]; do</span></span>
<span class="line"><span>    echo $num</span></span>
<span class="line"><span>    num=$(($num+1))</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>區別在於條件；其餘部分保持不變。</p><ul><li>當變量 <code>num</code> 小於或等於 10 時，while 循環就會運行。<code>[ ]</code> 中的條件必須為真，循環才會執行。</li><li>知道變量 <code>num</code> 變得大於 10 時，until 循環才會運行。<code>[ ]</code> 中的條件必須為假，循環才會執行。</li></ul><p>這都是做同樣事情的兩種不同方式。<code>while</code> 更受歡迎，因為你會在大多數編程語言中找到類似 <code>while</code> 的循環語法。</p><h3 id="🏋️-練習時間" tabindex="-1">🏋️ 練習時間 <a class="header-anchor" href="#🏋️-練習時間" aria-label="Permalink to “🏋️ 練習時間”">​</a></h3><p>那是有趣的。現在是做一些練習的時候了。</p><p><strong>練習 1</strong>：編寫一個腳本，該腳本接受一個數字作為參數並打印其表格。如果腳本在沒有參數的情況下運行，你的腳本還應顯示一個消息。</p><p><strong>預期輸出</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$: ./table.sh</span></span>
<span class="line"><span>You forgot to enter a number</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$: ./table.sh 3</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>15</span></span>
<span class="line"><span>18</span></span>
<span class="line"><span>21</span></span>
<span class="line"><span>24</span></span>
<span class="line"><span>27</span></span>
<span class="line"><span>30</span></span></code></pre></div><p><strong>練習 2</strong> : 編寫一個腳本，列出目錄 <code>/var</code> 中的所有文件。</p><p><strong>提示</strong> : 對於循環，使用 <code>/var/*</code> 作為 “列表”。</p><p>Bash 基礎知識系列即將結束。作為該系列的最後一章，你將在下週學習在 Bash 腳本中使用函數。敬請期待。</p><p><em>（題圖：MJ/945241d6-6a73-432c-9bcd-e0948b3fadc0）</em></p><hr>`,21)),a("p",null,[s[18]||(s[18]=n("via: ",-1)),i(p,{href:"https://itsfoss.com/bash-loops/"},{default:l(()=>[...s[17]||(s[17]=[n("https://itsfoss.com/bash-loops/",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),i(p,{href:"https://itsfoss.com/author/abhishek/"},{default:l(()=>[...s[19]||(s[19]=[n("Abhishek Prakash",-1)])]),_:1}),s[23]||(s[23]=n(" 選題：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[20]||(s[20]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 譯者：ChatGPT 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中國",-1)])]),_:1}),s[29]||(s[29]=n(" 榮譽推出",-1))])])}const y=t(r,[["render",c]]);export{C as __pageData,y as default};
