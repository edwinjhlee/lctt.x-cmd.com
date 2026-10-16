import{_ as t,a0 as o,w as d,s as h,ao as e,I as a,x as n,a1 as i,A as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Bash 基础知识系列 #8：For、While 和 Until 循环 | LCTT x X-CMD","titleTemplate":false,"description":"Bash 基础知识系列 #8：For、While 和 Until 循环 | LCTT (202308) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash 基础知识系列 #8：For、While 和 Until 循环 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash 基础知识系列 #8：For、While 和 Until 循环 | LCTT (202308) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202308/20230731 Bash Basics Series -8- For, While and Until Loops","title":"Bash 基础知识系列 #8：For、While 和 Until 循环","tag":"202308","desc":""},"relativePath":"202308/20230731 Bash Basics Series -8- For, While and Until Loops.md","filePath":"[post].md"}'),r={name:"202308/20230731 Bash Basics Series -8- For, While and Until Loops.md"};function c(g,s,u,b,k,f){const p=o("Link");return d(),h("div",null,[s[30]||(s[30]=e(`<h1 id="bash-基础知识系列-8-for、while-和-until-循环" tabindex="-1">Bash 基础知识系列 #8：For、While 和 Until 循环 <a class="header-anchor" href="#bash-基础知识系列-8-for、while-和-until-循环" aria-label="Permalink to “Bash 基础知识系列 #8：For、While 和 Until 循环”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202308/21/100731qmt2cmxnyub9xm62.jpg" alt=""></p><blockquote><p>在 Bash 基础知识系列的倒数第二章节，学习 <code>for</code>、<code>while</code> 和 <code>until</code> 循环。</p></blockquote><p>循环是任何编程语言中的一个强大功能。如果你还不知道，循环其实是一种根据某些条件重复代码的方式。</p><p>例如，想象一下你需要打印从 1 到 10 的数字。你可以使用 <code>echo</code> 命令写十次，但那太原始了。你使用一个循环，在 3 到 4 行代码内，就能完成。</p><p>这是我能想到的最简单的例子。我将在讨论 Bash 循环时，分享一些实际有用的例子。</p><p>在 Bash 中有三种类型的循环：</p><ul><li><code>for</code></li><li><code>while</code></li><li><code>until</code></li></ul><p>我将在教程中展示所有三种类型的循环。让我们从最常见的一种开始。</p><h3 id="bash-中的-for-循环" tabindex="-1">Bash 中的 For 循环 <a class="header-anchor" href="#bash-中的-for-循环" aria-label="Permalink to “Bash 中的 For 循环”">​</a></h3><p>以下是 Bash 中的 <code>for</code> 循环语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for arg in LIST; do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div>`,12)),a("p",null,[s[1]||(s[1]=n("这里的 ",-1)),s[2]||(s[2]=a("code",null,"LIST",-1)),s[3]||(s[3]=n(" 可能是一个数组或者一个项目列表。",-1)),i(p,{href:"https://linuxhandbook.com/brace-expansion/?ref=itsfoss.com"},{default:l(()=>[...s[0]||(s[0]=[n("括号扩展",-1)])]),_:1}),s[4]||(s[4]=n(" 也是进行循环的常用手段。",-1))]),s[31]||(s[31]=e(`<p>考虑一下我在开始提到的最简单的场景。让我们使用 <code>for</code> 循环打印从 1 到 10 的数字：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for num in {1..10}; do</span></span>
<span class="line"><span>    echo $num</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果你运行它，你应该会看到像这样的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./for-loop.sh</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><p>你也可以使用 <code>for num in 1 2 3 4 5 6 7 8 9 10; do</code> ，但是使用括号扩展使得代码看起来更短且更智能。</p><p><code>{..}</code> 是用于扩展模式的。你使用 <code>{d..h}</code> ，它等同于 <code>d e f g h</code> 。关于括号扩展的更多信息，可以在这篇文章中找到。</p>`,6)),a("blockquote",null,[a("p",null,[a("strong",null,[i(p,{href:"https://linuxhandbook.com/brace-expansion/?ref=itsfoss.com"},{default:l(()=>[...s[5]||(s[5]=[n("在 Bash 中使用括号扩展",-1)])]),_:1})])])]),s[32]||(s[32]=e(`<blockquote><p>💡 如果你熟悉 C 语言编程，你可能会喜欢在 bash 中使用 C 风格的 for 循环：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for ((i = 0 ; i &lt; 10 ; i++)); do</span></span>
<span class="line"><span>  echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div></blockquote>`,1)),a("p",null,[s[7]||(s[7]=n("让我们看另一个例子，显示 ",-1)),i(p,{href:"https://itsfoss.com/bash-arrays/"},{default:l(()=>[...s[6]||(s[6]=[n("Bash 数组",-1)])]),_:1}),s[8]||(s[8]=n(" 的所有内容：",-1))]),s[33]||(s[33]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>distros=(Ubuntu Fedora Debian Alpine)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i in &quot;\${distros[@]}&quot;; do</span></span>
<span class="line"><span>    echo $i</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果你运行脚本，它将显示数组中定义的所有发行版：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Ubuntu</span></span>
<span class="line"><span>Fedora</span></span>
<span class="line"><span>Debian</span></span>
<span class="line"><span>Alpine</span></span></code></pre></div><h3 id="bash-中的-while-循环" tabindex="-1">Bash 中的 While 循环 <a class="header-anchor" href="#bash-中的-while-循环" aria-label="Permalink to “Bash 中的 While 循环”">​</a></h3><p><code>while</code> 循环测试一个条件，然后只要条件为真，就继续循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while [ condition ]; do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如果你考虑前一个例子，它可以使用 <code>while</code> 循环进行重写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span>while [ $num -le 10 ]; do</span></span>
<span class="line"><span>    echo $num</span></span>
<span class="line"><span>    num=$(($num+1))</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>如你所见，你首先需要将变量 <code>num</code> 定义为 1，然后在循环体内，你增加 <code>num</code> 的值。只要 <code>num</code> 小于或等于 10，while 循环就会检查条件并运行脚本。</p><p>因此，现在运行脚本将会显示出和之前 <code>for</code> 循环中看到的完全相同的结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div>`,11)),a("p",null,[s[10]||(s[10]=n("让我们看另一个例子。这是一个 ",-1)),i(p,{href:"https://itsfoss.com/bash-pass-arguments/"},{default:l(()=>[...s[9]||(s[9]=[n("Bash 脚本，它接受一个数字作为参数",-1)])]),_:1}),s[11]||(s[11]=n(" 并显示该表。",-1))]),s[34]||(s[34]=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;Table for $1 is:&quot;</span></span>
<span class="line"><span>index=1</span></span>
<span class="line"><span>while [ $index -le 10 ]; do</span></span>
<span class="line"><span>    echo $(($1*$index))</span></span>
<span class="line"><span>    index=$(($index+1))</span></span>
<span class="line"><span>done</span></span></code></pre></div>`,1)),a("p",null,[s[13]||(s[13]=n("如果你对 ",-1)),s[14]||(s[14]=a("code",null,"$1",-1)),s[15]||(s[15]=n(" 的使用感到困惑，它代表传递给脚本的第一个参数。更多的细节可以参考这个系列的 ",-1)),i(p,{href:"https://itsfoss.com/bash-pass-arguments/"},{default:l(()=>[...s[12]||(s[12]=[n("第三章",-1)])]),_:1}),s[16]||(s[16]=n("。",-1))]),s[35]||(s[35]=e(`<p>如果你运行这个脚本，它应该会显示以下的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ ./table.sh 2</span></span>
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
<span class="line"><span>20</span></span></code></pre></div><h3 id="bash-中的-until-循环" tabindex="-1">Bash 中的 Until 循环 <a class="header-anchor" href="#bash-中的-until-循环" aria-label="Permalink to “Bash 中的 Until 循环”">​</a></h3><p>这是一个使用较少的循环格式。它的行为和 <code>while</code> 循环类似。这里的区别是，循环运行直到它检查的条件为真为止。意味着为了在循环中执行代码，<code>[ ]</code> 中的条件必须为假。</p><p>我马上会解释一下。让我们先看一下它的语法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>until [ condition ]; do</span></span>
<span class="line"><span>    commands</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>现在，如果我要使用相同的示例，即使用 <code>until</code> 循环打印从 1 到 10 的数字，它看起来会是这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>num=1</span></span>
<span class="line"><span>until [ $num -gt 10 ]; do</span></span>
<span class="line"><span>    echo $num</span></span>
<span class="line"><span>    num=$(($num+1))</span></span>
<span class="line"><span>done</span></span></code></pre></div><p>区别在于条件；其余部分保持不变。</p><ul><li>当变量 <code>num</code> 小于或等于 10 时，while 循环就会运行。<code>[ ]</code> 中的条件必须为真，循环才会执行。</li><li>知道变量 <code>num</code> 变得大于 10 时，until 循环才会运行。<code>[ ]</code> 中的条件必须为假，循环才会执行。</li></ul><p>这都是做同样事情的两种不同方式。<code>while</code> 更受欢迎，因为你会在大多数编程语言中找到类似 <code>while</code> 的循环语法。</p><h3 id="🏋️-练习时间" tabindex="-1">🏋️ 练习时间 <a class="header-anchor" href="#🏋️-练习时间" aria-label="Permalink to “🏋️ 练习时间”">​</a></h3><p>那是有趣的。现在是做一些练习的时候了。</p><p><strong>练习 1</strong>：编写一个脚本，该脚本接受一个数字作为参数并打印其表格。如果脚本在没有参数的情况下运行，你的脚本还应显示一个消息。</p><p><strong>预期输出</strong>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$: ./table.sh</span></span>
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
<span class="line"><span>30</span></span></code></pre></div><p><strong>练习 2</strong> : 编写一个脚本，列出目录 <code>/var</code> 中的所有文件。</p><p><strong>提示</strong> : 对于循环，使用 <code>/var/*</code> 作为 “列表”。</p><p>Bash 基础知识系列即将结束。作为该系列的最后一章，你将在下周学习在 Bash 脚本中使用函数。敬请期待。</p><p><em>（题图：MJ/945241d6-6a73-432c-9bcd-e0948b3fadc0）</em></p><hr>`,21)),a("p",null,[s[18]||(s[18]=n("via: ",-1)),i(p,{href:"https://itsfoss.com/bash-loops/"},{default:l(()=>[...s[17]||(s[17]=[n("https://itsfoss.com/bash-loops/",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),i(p,{href:"https://itsfoss.com/author/abhishek/"},{default:l(()=>[...s[19]||(s[19]=[n("Abhishek Prakash",-1)])]),_:1}),s[23]||(s[23]=n(" 选题：",-1)),i(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[20]||(s[20]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 译者：ChatGPT 校对：",-1)),i(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[27]||(s[27]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[25]||(s[25]=[n("LCTT",-1)])]),_:1}),s[28]||(s[28]=n(" 原创编译，",-1)),i(p,{href:"https://linux.cn/"},{default:l(()=>[...s[26]||(s[26]=[n("Linux中国",-1)])]),_:1}),s[29]||(s[29]=n(" 荣誉推出",-1))])])}const y=t(r,[["render",c]]);export{C as __pageData,y as default};
