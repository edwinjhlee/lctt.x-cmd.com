import{_ as l,a0 as o,w as t,s as d,ao as c,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在 awk 中怎么使用循环 | LCTT x X-CMD","titleTemplate":false,"description":"在 awk 中怎么使用循环 | LCTT (201912) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 awk 中怎么使用循环 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 awk 中怎么使用循环 | LCTT (201912) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201912/20191125 How to use loops in awk","title":"在 awk 中怎么使用循环","tag":"201912","desc":""},"relativePath":"201912/20191125 How to use loops in awk.md","filePath":"[post].md"}'),r={name:"201912/20191125 How to use loops in awk.md"};function h(u,s,k,b,g,f){const n=o("Link");return t(),d("div",null,[s[15]||(s[15]=c(`<h1 id="在-awk-中怎么使用循环" tabindex="-1">在 awk 中怎么使用循环 <a class="header-anchor" href="#在-awk-中怎么使用循环" aria-label="Permalink to “在 awk 中怎么使用循环”">​</a></h1><blockquote><p>来学习一下多次执行同一条命令的不同类型的循环。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201912/02/232951h3ibohlh77bk77d7.jpg" alt=""></p><p><code>awk</code> 脚本有三个主要部分：<code>BEGIN</code> 和 <code>END</code> 函数（都可选），用户自己写的每次要执行的函数。某种程度上，<code>awk</code> 的主体部分就是一个循环，因为函数中的命令对每一条记录都会执行一次。然而，有时你希望对于一条记录执行多次命令，那么你就需要用到循环。</p><p>有多种类型的循环，分别适合不同的场景。</p><h3 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to “while 循环”">​</a></h3><p>一个 <code>while</code> 循环检测一个表达式，如果表达式为 <code>true</code> 就执行命令。当表达式变为 <code>false</code> 时，循环中断。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/awk -f</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>在这个简单实例中，<code>awk</code> 打印了放在变量 <code>i</code> 中的整数值的平方。<code>while (i &lt;= 10)</code> 语句告诉 <code>awk</code> 仅在 <code>i</code> 的值小于或等于 10 时才执行循环。在循环最后一次执行时（<code>i</code> 的值是 10），循环终止。</p><h3 id="do-while-循环" tabindex="-1">do-while 循环 <a class="header-anchor" href="#do-while-循环" aria-label="Permalink to “do-while 循环”">​</a></h3><p>do-while 循环执行在关键字 <code>do</code> 之后的命令。在每次循环结束时检测一个测试表达式来决定是否终止循环。仅在测试表达式返回 <code>true</code> 时才会重复执行命令（即还没有到终止循环的条件）。如果测试表达式返回 <code>false</code>，因为到了终止循环的条件所以循环被终止。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/usr/bin/awk -f</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-label="Permalink to “for 循环”">​</a></h3><p><code>awk</code> 中有两种 <code>for</code> 循环。</p><p>一种 <code>for</code> 循环初始化一个变量，检测一个测试表达式，执行变量递增，当表达式的结果为 <code>true</code> 时循环就会一直执行。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/awk -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BEGIN {</span></span>
<span class="line"><span>    for (i=1; i &lt;= 10; i++) {</span></span>
<span class="line"><span>        print i, &quot; to the second power is &quot;, i*i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>exit;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>另一种 <code>for</code> 循环设置一个有连续索引的数组变量，对每一个索引执行一个命令集。换句话说，它用一个数组“收集”每一条命令执行后的结果。</p><p>本例实现了一个简易版的 Unix 命令 <code>uniq</code>。通过把一系列字符串作为键加到数组 <code>a</code> 中，当相同的键再次出现时就增加键值，可以得到某个字符串出现的次数（就像 <code>uniq</code> 的 <code>--count</code> 选项）。如果你打印该数组的所有键，将会得到出现过的所有字符串。</p><p>用演示文件 <code>colours.txt</code>（前一篇文章中的文件）来举例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>name       color  amount</span></span>
<span class="line"><span>apple      red    4</span></span>
<span class="line"><span>banana     yellow 6</span></span>
<span class="line"><span>raspberry  red    99</span></span>
<span class="line"><span>strawberry red    3</span></span>
<span class="line"><span>grape      purple 10</span></span>
<span class="line"><span>apple      green  8</span></span>
<span class="line"><span>plum       purple 2</span></span>
<span class="line"><span>kiwi       brown  4</span></span>
<span class="line"><span>potato     brown  9</span></span>
<span class="line"><span>pineapple  yellow 5</span></span></code></pre></div><p>这是 <code>awk</code> 版的简易 <code>uniq -c</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/awk -f</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NR != 1 {</span></span>
<span class="line"><span>    a[$2]++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>END {</span></span>
<span class="line"><span>    for (key in a) {</span></span>
<span class="line"><span>                print a[key] &quot; &quot; key</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>示例数据文件的第三列是第一列列出的条目的计数。你可以用一个数组和 <code>for</code> 循环来按颜色统计第三列的条目。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#! /usr/bin/awk -f</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>你可以看到，在处理文件之前也需要在 <code>BEFORE</code> 函数（仅仅执行一次）中打印一列表头。</p><h3 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to “循环”">​</a></h3><p>在任何编程语言中循环都是很重要的一部分，<code>awk</code> 也不例外。使用循环你可以控制 <code>awk</code> 脚本怎样去运行，它可以统计什么信息，还有它怎么去处理你的数据。我们下一篇文章会讨论 <code>switch</code>、<code>continue</code> 和 <code>next</code> 语句。</p><hr>`,28)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/19/11/loops-awk"},{default:e(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/19/11/loops-awk",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/seth"},{default:e(()=>[...s[2]||(s[2]=[a("Seth Kenlon",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),p(n,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[3]||(s[3]=[a("lujun9972",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),p(n,{href:"https://github.com/lxbwolf"},{default:e(()=>[...s[4]||(s[4]=[a("lxbwolf",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const C=l(r,[["render",h]]);export{x as __pageData,C as default};
