import{_ as l,a0 as o,w as t,s as d,ao as c,I as i,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在 awk 中怎麼使用循環 | LCTT x X-CMD","titleTemplate":false,"description":"在 awk 中怎麼使用循環 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 awk 中怎麼使用循環 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 awk 中怎麼使用循環 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191125 How to use loops in awk","title":"在 awk 中怎麼使用循環","tag":"201912","desc":""},"relativePath":"201912/20191125 How to use loops in awk.md","filePath":"[post].md"}'),r={name:"201912/20191125 How to use loops in awk.md"};function h(u,s,k,b,g,f){const n=o("Link");return t(),d("div",null,[s[15]||(s[15]=c(`<h1 id="在-awk-中怎麼使用循環" tabindex="-1">在 awk 中怎麼使用循環 <a class="header-anchor" href="#在-awk-中怎麼使用循環" aria-label="Permalink to “在 awk 中怎麼使用循環”">​</a></h1><blockquote><p>來學習一下多次執行同一條命令的不同類型的循環。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201912/02/232951h3ibohlh77bk77d7.jpg" alt=""></p><p><code>awk</code> 腳本有三個主要部分：<code>BEGIN</code> 和 <code>END</code> 函數（都可選），用户自己寫的每次要執行的函數。某種程度上，<code>awk</code> 的主體部分就是一個循環，因為函數中的命令對每一條記錄都會執行一次。然而，有時你希望對於一條記錄執行多次命令，那麼你就需要用到循環。</p><p>有多種類型的循環，分別適合不同的場景。</p><h3 id="while-循環" tabindex="-1">while 循環 <a class="header-anchor" href="#while-循環" aria-label="Permalink to “while 循環”">​</a></h3><p>一個 <code>while</code> 循環檢測一個表達式，如果表達式為 <code>true</code> 就執行命令。當表達式變為 <code>false</code> 時，循環中斷。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/awk -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BEGIN {</span></span>
<span class="line"><span>        # Loop through 1 to 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    i=1;</span></span>
<span class="line"><span>    while (i &lt;= 10) {</span></span>
<span class="line"><span>        print i, &quot; to the second power is &quot;, i*i;</span></span>
<span class="line"><span>        i = i+1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這個簡單實例中，<code>awk</code> 打印了放在變量 <code>i</code> 中的整數值的平方。<code>while (i &lt;= 10)</code> 語句告訴 <code>awk</code> 僅在 <code>i</code> 的值小於或等於 10 時才執行循環。在循環最後一次執行時（<code>i</code> 的值是 10），循環終止。</p><h3 id="do-while-循環" tabindex="-1">do-while 循環 <a class="header-anchor" href="#do-while-循環" aria-label="Permalink to “do-while 循環”">​</a></h3><p>do-while 循環執行在關鍵字 <code>do</code> 之後的命令。在每次循環結束時檢測一個測試表達式來決定是否終止循環。僅在測試表達式返回 <code>true</code> 時才會重複執行命令（即還沒有到終止循環的條件）。如果測試表達式返回 <code>false</code>，因為到了終止循環的條件所以循環被終止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/awk -f</span></span>
<span class="line"><span>BEGIN {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        i=2;</span></span>
<span class="line"><span>        do {</span></span>
<span class="line"><span>                print i, &quot; to the second power is &quot;, i*i;</span></span>
<span class="line"><span>                i = i + 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        while (i &lt; 10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="for-循環" tabindex="-1">for 循環 <a class="header-anchor" href="#for-循環" aria-label="Permalink to “for 循環”">​</a></h3><p><code>awk</code> 中有兩種 <code>for</code> 循環。</p><p>一種 <code>for</code> 循環初始化一個變量，檢測一個測試表達式，執行變量遞增，當表達式的結果為 <code>true</code> 時循環就會一直執行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/awk -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BEGIN {</span></span>
<span class="line"><span>    for (i=1; i &lt;= 10; i++) {</span></span>
<span class="line"><span>        print i, &quot; to the second power is &quot;, i*i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>另一種 <code>for</code> 循環設置一個有連續索引的數組變量，對每一個索引執行一個命令集。換句話説，它用一個數組“收集”每一條命令執行後的結果。</p><p>本例實現了一個簡易版的 Unix 命令 <code>uniq</code>。通過把一系列字符串作為鍵加到數組 <code>a</code> 中，當相同的鍵再次出現時就增加鍵值，可以得到某個字符串出現的次數（就像 <code>uniq</code> 的 <code>--count</code> 選項）。如果你打印該數組的所有鍵，將會得到出現過的所有字符串。</p><p>用演示文件 <code>colours.txt</code>（前一篇文章中的文件）來舉例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name       color  amount</span></span>
<span class="line"><span>apple      red    4</span></span>
<span class="line"><span>banana     yellow 6</span></span>
<span class="line"><span>raspberry  red    99</span></span>
<span class="line"><span>strawberry red    3</span></span>
<span class="line"><span>grape      purple 10</span></span>
<span class="line"><span>apple      green  8</span></span>
<span class="line"><span>plum       purple 2</span></span>
<span class="line"><span>kiwi       brown  4</span></span>
<span class="line"><span>potato     brown  9</span></span>
<span class="line"><span>pineapple  yellow 5</span></span></code></pre></div><p>這是 <code>awk</code> 版的簡易 <code>uniq -c</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/awk -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NR != 1 {</span></span>
<span class="line"><span>    a[$2]++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END {</span></span>
<span class="line"><span>    for (key in a) {</span></span>
<span class="line"><span>                print a[key] &quot; &quot; key</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>示例數據文件的第三列是第一列列出的條目的計數。你可以用一個數組和 <code>for</code> 循環來按顏色統計第三列的條目。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/awk -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BEGIN {</span></span>
<span class="line"><span>    FS=&quot; &quot;;</span></span>
<span class="line"><span>    OFS=&quot;\\t&quot;;</span></span>
<span class="line"><span>    print(&quot;color\\tsum&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>NR != 1 {</span></span>
<span class="line"><span>    a[$2]+=$3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END {</span></span>
<span class="line"><span>    for (b in a) {</span></span>
<span class="line"><span>        print b, a[b]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以看到，在處理文件之前也需要在 <code>BEFORE</code> 函數（僅僅執行一次）中打印一列表頭。</p><h3 id="循環" tabindex="-1">循環 <a class="header-anchor" href="#循環" aria-label="Permalink to “循環”">​</a></h3><p>在任何編程語言中循環都是很重要的一部分，<code>awk</code> 也不例外。使用循環你可以控制 <code>awk</code> 腳本怎樣去運行，它可以統計什麼信息，還有它怎麼去處理你的數據。我們下一篇文章會討論 <code>switch</code>、<code>continue</code> 和 <code>next</code> 語句。</p><hr>`,28)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/19/11/loops-awk"},{default:e(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/19/11/loops-awk",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[2]||(s[2]=[a("Seth Kenlon",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),p(n,{href:"https://github.com/lxbwolf"},{default:e(()=>[...s[4]||(s[4]=[a("lxbwolf",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const C=l(r,[["render",h]]);export{x as __pageData,C as default};
