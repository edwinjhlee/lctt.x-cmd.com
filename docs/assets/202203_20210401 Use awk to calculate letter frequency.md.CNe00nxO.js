import{_ as i,a0 as t,w as c,s as o,I as a,x as n,a1 as l,A as e,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"使用 awk 统计字母频率 | LCTT x X-CMD","titleTemplate":false,"description":"使用 awk 统计字母频率 | LCTT (202203) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 awk 统计字母频率 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 awk 统计字母频率 | LCTT (202203) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202203/20210401 Use awk to calculate letter frequency","title":"使用 awk 统计字母频率","tag":"202203","desc":""},"relativePath":"202203/20210401 Use awk to calculate letter frequency.md","filePath":"[post].md"}'),d={name:"202203/20210401 Use awk to calculate letter frequency.md"};function h(g,s,k,u,b,f){const p=t("Link");return c(),o("div",null,[s[18]||(s[18]=a("h1",{id:"使用-awk-统计字母频率",tabindex:"-1"},[n("使用 awk 统计字母频率 "),a("a",{class:"header-anchor",href:"#使用-awk-统计字母频率","aria-label":"Permalink to “使用 awk 统计字母频率”"},"​")],-1)),s[19]||(s[19]=a("blockquote",null,[a("p",null,"编写一个 awk 脚本来找到一组单词中出现次数最多（和最少）的单词。")],-1)),s[20]||(s[20]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202203/20/085052bajyoejnea8cpw5j.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("近一段时间，我开始编写一个小游戏，在这个小游戏里，玩家使用一个个字母块来组成单词。编写这个游戏之前，我需要先知道常见英文单词中每个字母的使用频率，这样一来，我就可以找到一组更有用的字母块。字母频次统计在很多地方都有相关讨论，包括在 ",-1)),l(p,{href:"https://en.wikipedia.org/wiki/Letter_frequency"},{default:e(()=>[...s[0]||(s[0]=[n("维基百科",-1)])]),_:1}),s[2]||(s[2]=n(" 上，但我还是想要自己来实现。",-1))]),s[21]||(s[21]=r(`<p>Linux 系统在 <code>/usr/share/dict/words</code> 文件中提供了一个单词列表，所以我已经有了一个现成的单词列表。然而，尽管这个 <code>words</code> 文件包含了很多我想要的单词，却也包含了一些我不想要的。我想要的单词首先不能是复合词（即不包含连接符和空格的单词），也不能是专有名词（即不包含大写字母单词）。为了得到这个结果，我可以运行 <code>grep</code> 命令来取出只由小写字母组成的行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep  &#39;^[a-z]*$&#39; /usr/share/dict/words</span></span></code></pre></div><p>这个正则表达式的作用是让 <code>grep</code> 去匹配仅包含小写字母的行。表达式中的字符 <code>^</code> 和 <code>$</code> 分别代表了这一行的开始和结束。<code>[a-z]</code> 分组仅匹配从 “a” 到 “z” 的小写字母。</p><p>下面是一个输出示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep  &#39;^[a-z]*$&#39; /usr/share/dict/words | head</span></span>
<span class="line"><span>a</span></span>
<span class="line"><span>aa</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span>aah</span></span>
<span class="line"><span>aahed</span></span>
<span class="line"><span>aahing</span></span>
<span class="line"><span>aahs</span></span>
<span class="line"><span>aal</span></span>
<span class="line"><span>aalii</span></span>
<span class="line"><span>aaliis</span></span></code></pre></div><p>没错，这些都是合法的单词。比如，“aahed” 是 “aah” 的过去式，表示在放松时的感叹，而 “aalii” 是一种浓密的热带灌木。</p><p>现在我只需要编写一个 <code>gawk</code> 脚本来统计出单词中各个字母出现的次数，然后打印出每个字母的相对频率。</p><h3 id="字母计数" tabindex="-1">字母计数 <a class="header-anchor" href="#字母计数" aria-label="Permalink to “字母计数”">​</a></h3><p>一种使用 <code>gawk</code> 来统计字母个数的方式是，遍历每行输入中的每一个字符，然后对 “a” 到 “z” 之间的每个字母进行计数。<code>substr</code> 函数会返回一个给定长度的子串，它可以只包含一个字符，也可以是更长的字符串。比如，下面的示例代码能够取到输入中的每一个字符 <code>c</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>    len = length($0); for (i = 1; i &lt;= len; i++) {</span></span>
<span class="line"><span>        c = substr($0, i, 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果使用一个全局字符串变量 <code>LETTERS</code> 来存储字母表，我就可以借助 <code>index</code> 函数来找到某个字符在字母表中的位置。我将扩展 <code>gawk</code> 代码示例，让它在输入数据中只取范围在 “a” 到 “z” 的字母：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BEGIN { LETTERS = &quot;abcdefghijklmnopqrstuvwxyz&quot; }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    len = length($0); for (i = 1; i &lt;= len; i++) {</span></span>
<span class="line"><span>        c = substr($0, i, 1);</span></span>
<span class="line"><span>        ltr = index(LETTERS, c);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>需要注意的是，<code>index</code> 函数将返回字母在 <code>LETTERS</code> 字符串中首次出现的位置，第一个位置返回 1，如果没有找到则返回 0。如果我有一个大小为 26 的数组，我就可以利用这个数组来统计每个字母出现的次数。我将在下面的示例代码中添加这个功能，每当一个字母出现在输入中，我就让它对应的数组元素值增加 1（使用 <code>++</code>）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>BEGIN { LETTERS = &quot;abcdefghijklmnopqrstuvwxyz&quot; }</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="打印相对频率" tabindex="-1">打印相对频率 <a class="header-anchor" href="#打印相对频率" aria-label="Permalink to “打印相对频率”">​</a></h3><p>当 <code>gawk</code> 脚本统计完所有的字母后，我希望它能输出每个字母的频率。毕竟，我对输入中各个字母的个数没有兴趣，我更关心它们的 <em>相对频率</em>。</p><p>我将先统计字母 “a” 的个数，然后把它和剩余 “b” 到 “z” 字母的个数比较：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>END {</span></span>
<span class="line"><span>    min = count[1]; for (ltr = 2; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        if (count[ltr] &lt; min) {</span></span>
<span class="line"><span>            min = count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在循环的最后，变量 <code>min</code> 会等于最少的出现次数，我可以把它为基准，为字母的个数设定一个参照值，然后计算打印出每个字母的相对频率。比如，如果出现次数最少的字母是 “q”，那么 <code>min</code> 就会等于 “q” 的出现次数。</p><p>接下来，我会遍历每个字母，打印出它和它的相对频率。我通过把每个字母的个数都除以 <code>min</code> 的方式来计算出它的相对频率，这意味着出现次数最少的字母的相对频率是 1。如果另一个字母出现的次数恰好是最少次数的两倍，那么这个字母的相对频率就是 2。我只关心整数，所以 2.1 和 2.9 对我来说是一样的（都是 2）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>END {</span></span>
<span class="line"><span>    min = count[1]; for (ltr = 2; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        if (count[ltr] &lt; min) {</span></span>
<span class="line"><span>            min = count[ltr];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    for (ltr = 1; ltr &lt;= 26; ltr++) {</span></span>
<span class="line"><span>        print substr(LETTERS, ltr, 1), int(count[ltr] / min);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="最后的完整程序" tabindex="-1">最后的完整程序 <a class="header-anchor" href="#最后的完整程序" aria-label="Permalink to “最后的完整程序”">​</a></h3><p>现在，我已经有了一个能够统计输入中各个字母的相对频率的 <code>gawk</code> 脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/gawk -f</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 只统计 a-z 的字符，忽略 A-Z 和其他的字符</span></span>
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
<span class="line"><span># 打印每个字符的相对频率</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>我将把这段程序保存到名为 <code>letter-freq.awk</code> 的文件中，这样一来，我就可以在命令行中更方便地使用它。</p><p>如果你愿意的话，你也可以使用 <code>chmod +x</code> 命令把这个文件设为可独立执行。第一行中的 <code>#!/usr/bin/gawk -f</code> 表示 Linux 会使用 <code>/usr/bin/gawk</code> 把这个文件当作一个脚本来运行。由于 <code>gawk</code> 命令行使用 <code>-f</code> 来指定它要运行的脚本文件名，你需要在末尾加上 <code>-f</code>。如此一来，当你在 shell 中执行 <code>letter-freq.awk</code>，它会被解释为 <code>/usr/bin/gawk -f letter-freq.awk</code>。</p><p>接下来我将用几个简单的输入来测试这个脚本。比如，如果我给我的 <code>gawk</code> 脚本输入整个字母表，每个字母的相对频率都应该是 1：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo abcdefghijklmnopqrstuvwxyz | gawk -f letter-freq.awk</span></span>
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
<span class="line"><span>z 1</span></span></code></pre></div><p>还是使用上述例子，只不过这次我在输入中添加了一个字母 “e”，此时的输出结果中，“e” 的相对频率会是 2，而其他字母的相对频率仍然会是 1：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo abcdeefghijklmnopqrstuvwxyz | gawk -f letter-freq.awk</span></span>
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
<span class="line"><span>z 1</span></span></code></pre></div><p>现在我可以跨出最大的一步了！我将使用 <code>grep</code> 命令和 <code>/usr/share/dict/words</code> 文件，统计所有仅由小写字母组成的单词中，各个字母的相对使用频率：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ grep  &#39;^[a-z]*$&#39; /usr/share/dict/words | gawk -f letter-freq.awk</span></span>
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
<span class="line"><span>z 2</span></span></code></pre></div><p>在 <code>/usr/share/dict/words</code> 文件的所有小写单词中，字母 “j”、“q” 和 “x” 出现的相对频率最低，字母 “z” 也使用得很少。不出意料，字母 “e” 是使用频率最高的。</p><hr>`,34)),a("p",null,[s[4]||(s[4]=n("via: ",-1)),l(p,{href:"https://opensource.com/article/21/4/gawk-letter-game"},{default:e(()=>[...s[3]||(s[3]=[n("https://opensource.com/article/21/4/gawk-letter-game",-1)])]),_:1})]),a("p",null,[s[9]||(s[9]=n("作者：",-1)),l(p,{href:"https://opensource.com/users/jim-hall"},{default:e(()=>[...s[5]||(s[5]=[n("Jim Hall",-1)])]),_:1}),s[10]||(s[10]=n(" 选题：",-1)),l(p,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),l(p,{href:"https://github.com/lkxed"},{default:e(()=>[...s[7]||(s[7]=[n("lkxed",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[15]||(s[15]=n("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const x=i(d,[["render",h]]);export{y as __pageData,x as default};
