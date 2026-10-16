import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"使用 awk 統計字母頻率 | LCTT x X-CMD","titleTemplate":false,"description":"使用 awk 統計字母頻率 | LCTT (202203) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 awk 統計字母頻率 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 awk 統計字母頻率 | LCTT (202203) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202203/20210401 Use awk to calculate letter frequency","title":"使用 awk 統計字母頻率","tag":"202203","desc":""},"relativePath":"202203/20210401 Use awk to calculate letter frequency.md","filePath":"[post].md"}'),d={name:"202203/20210401 Use awk to calculate letter frequency.md"};function h(g,s,k,u,b,f){const p=t("Link");return c(),o("div",null,[s[18]||(s[18]=a("h1",{id:"使用-awk-統計字母頻率",tabindex:"-1"},[n("使用 awk 統計字母頻率 "),a("a",{class:"header-anchor",href:"#使用-awk-統計字母頻率","aria-label":"Permalink to “使用 awk 統計字母頻率”"},"​")],-1)),s[19]||(s[19]=a("blockquote",null,[a("p",null,"編寫一個 awk 腳本來找到一組單詞中出現次數最多（和最少）的單詞。")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202203/20/085052bajyoejnea8cpw5j.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("近一段時間，我開始編寫一個小遊戲，在這個小遊戲裏，玩家使用一個個字母塊來組成單詞。編寫這個遊戲之前，我需要先知道常見英文單詞中每個字母的使用頻率，這樣一來，我就可以找到一組更有用的字母塊。字母頻次統計在很多地方都有相關討論，包括在 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Letter_frequency"},{default:e(()=>[...s[0]||(s[0]=[n("維基百科",-1)])]),_:1}),s[2]||(s[2]=n(" 上，但我還是想要自己來實現。",-1))]),s[21]||(s[21]=r(`<p>Linux 系統在 <code>/usr/share/dict/words</code> 文件中提供了一個單詞列表，所以我已經有了一個現成的單詞列表。然而，儘管這個 <code>words</code> 文件包含了很多我想要的單詞，卻也包含了一些我不想要的。我想要的單詞首先不能是複合詞（即不包含連接符和空格的單詞），也不能是專有名詞（即不包含大寫字母單詞）。為了得到這個結果，我可以運行 <code>grep</code> 命令來取出只由小寫字母組成的行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep  &#39;^[a-z]*$&#39; /usr/share/dict/words</span></span></code></pre></div><p>這個正則表達式的作用是讓 <code>grep</code> 去匹配僅包含小寫字母的行。表達式中的字符 <code>^</code> 和 <code>$</code> 分別代表了這一行的開始和結束。<code>[a-z]</code> 分組僅匹配從 “a” 到 “z” 的小寫字母。</p><p>下面是一個輸出示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep  &#39;^[a-z]*$&#39; /usr/share/dict/words | head</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>aa</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span>aah</span></span>
<span class="line"><span>aahed</span></span>
<span class="line"><span>aahing</span></span>
<span class="line"><span>aahs</span></span>
<span class="line"><span>aal</span></span>
<span class="line"><span>aalii</span></span>
<span class="line"><span>aaliis</span></span></code></pre></div><p>沒錯，這些都是合法的單詞。比如，“aahed” 是 “aah” 的過去式，表示在放鬆時的感嘆，而 “aalii” 是一種濃密的熱帶灌木。</p><p>現在我只需要編寫一個 <code>gawk</code> 腳本來統計出單詞中各個字母出現的次數，然後打印出每個字母的相對頻率。</p><h3 id="字母計數" tabindex="-1">字母計數 <a class="header-anchor" href="#字母計數" aria-label="Permalink to “字母計數”">​</a></h3><p>一種使用 <code>gawk</code> 來統計字母個數的方式是，遍歷每行輸入中的每一個字符，然後對 “a” 到 “z” 之間的每個字母進行計數。<code>substr</code> 函數會返回一個給定長度的子串，它可以只包含一個字符，也可以是更長的字符串。比如，下面的示例代碼能夠取到輸入中的每一個字符 <code>c</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>    len = length($0); for (i = 1; i &lt;= len; i++) {</span></span>
<span class="line"><span>        c = substr($0, i, 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果使用一個全局字符串變量 <code>LETTERS</code> 來存儲字母表，我就可以藉助 <code>index</code> 函數來找到某個字符在字母表中的位置。我將擴展 <code>gawk</code> 代碼示例，讓它在輸入數據中只取範圍在 “a” 到 “z” 的字母：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BEGIN { LETTERS = &quot;abcdefghijklmnopqrstuvwxyz&quot; }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    len = length($0); for (i = 1; i &lt;= len; i++) {</span></span>
<span class="line"><span>        c = substr($0, i, 1);</span></span>
<span class="line"><span>        ltr = index(LETTERS, c);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>需要注意的是，<code>index</code> 函數將返回字母在 <code>LETTERS</code> 字符串中首次出現的位置，第一個位置返回 1，如果沒有找到則返回 0。如果我有一個大小為 26 的數組，我就可以利用這個數組來統計每個字母出現的次數。我將在下面的示例代碼中添加這個功能，每當一個字母出現在輸入中，我就讓它對應的數組元素值增加 1（使用 <code>++</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BEGIN { LETTERS = &quot;abcdefghijklmnopqrstuvwxyz&quot; }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    len = length($0); for (i = 1; i &lt;= len; i++) {</span></span>
<span class="line"><span>        c = substr($0, i, 1);</span></span>
<span class="line"><span>        ltr = index(LETTERS, c);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        if (ltr &amp;gt; 0) {</span></span>
<span class="line"><span>            ++count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="打印相對頻率" tabindex="-1">打印相對頻率 <a class="header-anchor" href="#打印相對頻率" aria-label="Permalink to “打印相對頻率”">​</a></h3><p>當 <code>gawk</code> 腳本統計完所有的字母后，我希望它能輸出每個字母的頻率。畢竟，我對輸入中各個字母的個數沒有興趣，我更關心它們的 <em>相對頻率</em>。</p><p>我將先統計字母 “a” 的個數，然後把它和剩餘 “b” 到 “z” 字母的個數比較：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>END {</span></span>
<span class="line"><span>    min = count[1]; for (ltr = 2; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        if (count[ltr] &lt; min) {</span></span>
<span class="line"><span>            min = count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在循環的最後，變量 <code>min</code> 會等於最少的出現次數，我可以把它為基準，為字母的個數設定一個參照值，然後計算打印出每個字母的相對頻率。比如，如果出現次數最少的字母是 “q”，那麼 <code>min</code> 就會等於 “q” 的出現次數。</p><p>接下來，我會遍歷每個字母，打印出它和它的相對頻率。我通過把每個字母的個數都除以 <code>min</code> 的方式來計算出它的相對頻率，這意味着出現次數最少的字母的相對頻率是 1。如果另一個字母出現的次數恰好是最少次數的兩倍，那麼這個字母的相對頻率就是 2。我只關心整數，所以 2.1 和 2.9 對我來説是一樣的（都是 2）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>END {</span></span>
<span class="line"><span>    min = count[1]; for (ltr = 2; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        if (count[ltr] &lt; min) {</span></span>
<span class="line"><span>            min = count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    for (ltr = 1; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        print substr(LETTERS, ltr, 1), int(count[ltr] / min);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="最後的完整程序" tabindex="-1">最後的完整程序 <a class="header-anchor" href="#最後的完整程序" aria-label="Permalink to “最後的完整程序”">​</a></h3><p>現在，我已經有了一個能夠統計輸入中各個字母的相對頻率的 <code>gawk</code> 腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/gawk -f</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 只統計 a-z 的字符，忽略 A-Z 和其他的字符</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>BEGIN { LETTERS = &quot;abcdefghijklmnopqrstuvwxyz&quot; }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    len = length($0); for (i = 1; i &lt;= len; i++) {</span></span>
<span class="line"><span>        c = substr($0, i, 1);</span></span>
<span class="line"><span>        ltr = index(LETTERS, c);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        if (ltr &lt; 0) {</span></span>
<span class="line"><span>            ++count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 打印每個字符的相對頻率</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>END {</span></span>
<span class="line"><span>    min = count[1]; for (ltr = 2; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        if (count[ltr] &lt; min) {</span></span>
<span class="line"><span>            min = count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    for (ltr = 1; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        print substr(LETTERS, ltr, 1), int(count[ltr] / min);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我將把這段程序保存到名為 <code>letter-freq.awk</code> 的文件中，這樣一來，我就可以在命令列中更方便地使用它。</p><p>如果你願意的話，你也可以使用 <code>chmod +x</code> 命令把這個文件設為可獨立執行。第一行中的 <code>#!/usr/bin/gawk -f</code> 表示 Linux 會使用 <code>/usr/bin/gawk</code> 把這個文件當作一個腳本來運行。由於 <code>gawk</code> 命令列使用 <code>-f</code> 來指定它要運行的腳本文件名，你需要在末尾加上 <code>-f</code>。如此一來，當你在 shell 中執行 <code>letter-freq.awk</code>，它會被解釋為 <code>/usr/bin/gawk -f letter-freq.awk</code>。</p><p>接下來我將用幾個簡單的輸入來測試這個腳本。比如，如果我給我的 <code>gawk</code> 腳本輸入整個字母表，每個字母的相對頻率都應該是 1：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo abcdefghijklmnopqrstuvwxyz | gawk -f letter-freq.awk</span></span>
<span class="line"><span>a 1</span></span>
<span class="line"><span>b 1</span></span>
<span class="line"><span>c 1</span></span>
<span class="line"><span>d 1</span></span>
<span class="line"><span>e 1</span></span>
<span class="line"><span>f 1</span></span>
<span class="line"><span>g 1</span></span>
<span class="line"><span>h 1</span></span>
<span class="line"><span>i 1</span></span>
<span class="line"><span>j 1</span></span>
<span class="line"><span>k 1</span></span>
<span class="line"><span>l 1</span></span>
<span class="line"><span>m 1</span></span>
<span class="line"><span>n 1</span></span>
<span class="line"><span>o 1</span></span>
<span class="line"><span>p 1</span></span>
<span class="line"><span>q 1</span></span>
<span class="line"><span>r 1</span></span>
<span class="line"><span>s 1</span></span>
<span class="line"><span>t 1</span></span>
<span class="line"><span>u 1</span></span>
<span class="line"><span>v 1</span></span>
<span class="line"><span>w 1</span></span>
<span class="line"><span>x 1</span></span>
<span class="line"><span>y 1</span></span>
<span class="line"><span>z 1</span></span></code></pre></div><p>還是使用上述例子，只不過這次我在輸入中添加了一個字母 “e”，此時的輸出結果中，“e” 的相對頻率會是 2，而其他字母的相對頻率仍然會是 1：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo abcdeefghijklmnopqrstuvwxyz | gawk -f letter-freq.awk</span></span>
<span class="line"><span>a 1</span></span>
<span class="line"><span>b 1</span></span>
<span class="line"><span>c 1</span></span>
<span class="line"><span>d 1</span></span>
<span class="line"><span>e 2</span></span>
<span class="line"><span>f 1</span></span>
<span class="line"><span>g 1</span></span>
<span class="line"><span>h 1</span></span>
<span class="line"><span>i 1</span></span>
<span class="line"><span>j 1</span></span>
<span class="line"><span>k 1</span></span>
<span class="line"><span>l 1</span></span>
<span class="line"><span>m 1</span></span>
<span class="line"><span>n 1</span></span>
<span class="line"><span>o 1</span></span>
<span class="line"><span>p 1</span></span>
<span class="line"><span>q 1</span></span>
<span class="line"><span>r 1</span></span>
<span class="line"><span>s 1</span></span>
<span class="line"><span>t 1</span></span>
<span class="line"><span>u 1</span></span>
<span class="line"><span>v 1</span></span>
<span class="line"><span>w 1</span></span>
<span class="line"><span>x 1</span></span>
<span class="line"><span>y 1</span></span>
<span class="line"><span>z 1</span></span></code></pre></div><p>現在我可以跨出最大的一步了！我將使用 <code>grep</code> 命令和 <code>/usr/share/dict/words</code> 文件，統計所有僅由小寫字母組成的單詞中，各個字母的相對使用頻率：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep  &#39;^[a-z]*$&#39; /usr/share/dict/words | gawk -f letter-freq.awk</span></span>
<span class="line"><span>a 53</span></span>
<span class="line"><span>b 12</span></span>
<span class="line"><span>c 28</span></span>
<span class="line"><span>d 21</span></span>
<span class="line"><span>e 72</span></span>
<span class="line"><span>f 7</span></span>
<span class="line"><span>g 15</span></span>
<span class="line"><span>h 17</span></span>
<span class="line"><span>i 58</span></span>
<span class="line"><span>j 1</span></span>
<span class="line"><span>k 5</span></span>
<span class="line"><span>l 36</span></span>
<span class="line"><span>m 19</span></span>
<span class="line"><span>n 47</span></span>
<span class="line"><span>o 47</span></span>
<span class="line"><span>p 21</span></span>
<span class="line"><span>q 1</span></span>
<span class="line"><span>r 46</span></span>
<span class="line"><span>s 48</span></span>
<span class="line"><span>t 44</span></span>
<span class="line"><span>u 25</span></span>
<span class="line"><span>v 6</span></span>
<span class="line"><span>w 4</span></span>
<span class="line"><span>x 1</span></span>
<span class="line"><span>y 13</span></span>
<span class="line"><span>z 2</span></span></code></pre></div><p>在 <code>/usr/share/dict/words</code> 文件的所有小寫單詞中，字母 “j”、“q” 和 “x” 出現的相對頻率最低，字母 “z” 也使用得很少。不出意料，字母 “e” 是使用頻率最高的。</p><hr>`,34)),a("p",null,[s[4]||(s[4]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/21/4/gawk-letter-game"},{default:e(()=>[...s[3]||(s[3]=[n("https://opensource.com/article/21/4/gawk-letter-game",-1)])]),_:1})]),a("p",null,[s[9]||(s[9]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[5]||(s[5]=[n("Jim Hall",-1)])]),_:1}),s[10]||(s[10]=n(" 選題：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[11]||(s[11]=n(" 譯者：",-1)),l(p,{href:"https://github.com/lkxed"},{default:e(()=>[...s[7]||(s[7]=[n("lkxed",-1)])]),_:1}),s[12]||(s[12]=n(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中國",-1)])]),_:1}),s[17]||(s[17]=n(" 榮譽推出",-1))])])}const x=i(d,[["render",h]]);export{y as __pageData,x as default};
