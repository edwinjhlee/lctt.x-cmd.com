import{_ as t,a0 as o,w as d,s as r,I as a,x as n,a1 as p,A as e,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"awk 系列：如何在 awk 中使用流控制语句 | LCTT x X-CMD","titleTemplate":false,"description":"awk 系列：如何在 awk 中使用流控制语句 | LCTT (awk) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"awk 系列：如何在 awk 中使用流控制语句 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"awk 系列：如何在 awk 中使用流控制语句 | LCTT (awk) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"awk/part 12 - How to Use Flow Control Statements in Awk","title":"awk 系列：如何在 awk 中使用流控制语句","tag":"awk","desc":""},"relativePath":"awk/part 12 - How to Use Flow Control Statements in Awk.md","filePath":"[post].md"}'),h={name:"awk/part 12 - How to Use Flow Control Statements in Awk.md"};function c(k,s,g,u,b,f){const i=o("Link");return d(),r("div",null,[s[29]||(s[29]=a("h1",{id:"awk-系列-如何在-awk-中使用流控制语句",tabindex:"-1"},[n("awk 系列：如何在 awk 中使用流控制语句 "),a("a",{class:"header-anchor",href:"#awk-系列-如何在-awk-中使用流控制语句","aria-label":"Permalink to “awk 系列：如何在 awk 中使用流控制语句”"},"​")],-1)),a("p",null,[s[1]||(s[1]=n("回顾从 Awk 系列，从最开始到现在我们所讲的所有关于 Awk 的例子，你会发现不同例子中的所有命令都是顺序执行的，也就是一个接一个的执行。但是在某些场景下，我们可能希望根据一些条件来执行一些",-1)),p(i,{href:"http://www.tecmint.com/use-linux-awk-command-to-filter-text-string-in-files/"},{default:e(()=>[...s[0]||(s[0]=[n("文本过滤操作",-1)])]),_:1}),s[2]||(s[2]=n("，这个时候流控制语句就派上用场了。",-1))]),s[30]||(s[30]=l('<p><img src="http://www.tecmint.com/wp-content/uploads/2016/08/Use-Flow-Control-Statements-in-Awk.png" alt=""></p><p>Awk 包含很多的流控制语句，包括：</p><ul><li>if-else 语句</li><li>for 语句</li><li>while 语句</li><li>do-while 语句</li><li>break 语句</li><li>continue 语句</li><li>next 语句</li><li>nextfile 语句</li><li>exit 语句</li></ul>',3)),a("p",null,[s[4]||(s[4]=n("但是在这个系列中，我们将详细解释：",-1)),s[5]||(s[5]=a("code",null,"if-else",-1)),s[6]||(s[6]=n("，",-1)),s[7]||(s[7]=a("code",null,"for",-1)),s[8]||(s[8]=n("，",-1)),s[9]||(s[9]=a("code",null,"while",-1)),s[10]||(s[10]=n("，",-1)),s[11]||(s[11]=a("code",null,"do-while",-1)),s[12]||(s[12]=n(" 语句。关于如何使用 ",-1)),s[13]||(s[13]=a("code",null,"next",-1)),s[14]||(s[14]=n(" 语句，如果你们记得的话，我们已经在 ",-1)),p(i,{href:"http://www.tecmint.com/use-next-command-with-awk-in-linux/"},{default:e(()=>[...s[3]||(s[3]=[n("Awk 系列的第6部分",-1)])]),_:1}),s[15]||(s[15]=n("介绍过了。",-1))]),s[31]||(s[31]=l(`<h3 id="_1-if-else-语句" tabindex="-1">1. if-else 语句 <a class="header-anchor" href="#_1-if-else-语句" aria-label="Permalink to “1. if-else 语句”">​</a></h3><p>if 语句的语法和 shell 里面的 if 语句类似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if  (condition1) {</span></span>
<span class="line"><span>actions1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>actions2</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的语法中，condition1 和 condition2 是 Awk 的表达式，actions1 和 actions2 是当相应的条件满足时执行的 Awk 命令。</p><p>当 condition1 满足时，意味着它的值是 true，此时会执行 actions1，if 语句退出，否则（译注：condition1 为 false）执行 actions2。</p><p>if 语句可以扩展成如下的 <code>if-else_if-else</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if (condition1){</span></span>
<span class="line"><span>actions1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if (conditions2){</span></span>
<span class="line"><span>actions2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else{</span></span>
<span class="line"><span>actions3</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面例子中，如果 condition1 为 true，执行 actions1，if 语句退出；否则对 condition2 求值，如果值为 true，那么执行 actions2，if 语句退出。然而如果 condition2 是 false，那么会执行 actions3 退出 if语句。</p><p>下面是一个使用 if 语句的例子，我们有一个存储用户和他们年龄列表的文件 users.txt。</p><p>我们想要打印用户的名字以及他们的年龄是大于 25 还是小于 25。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>aaronkilik@tecMint ~ $ cat users.txt</span></span>
<span class="line"><span>Sarah L			35    	F</span></span>
<span class="line"><span>Aaron Kili		40    	M</span></span>
<span class="line"><span>John  Doo		20    	M</span></span>
<span class="line"><span>Kili  Seth		49    	M</span></span></code></pre></div><p>我们可以写一个简短的 shell 脚本来执行我们上面的任务，下面是脚本的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; { </span></span>
<span class="line"><span>if ( $3 &lt;= 25 ){</span></span>
<span class="line"><span>print &quot;User&quot;,$1,$2,&quot;is less than 25 years old.&quot; ;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>print &quot;User&quot;,$1,$2,&quot;is more than 25 years old&quot; ; </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}&#39;    ~/users.txt</span></span></code></pre></div><p>保存文件后退出，执行下面命令让脚本可执行，然后执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>输出样例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>User Sarah L is more than 25 years old</span></span>
<span class="line"><span>User Aaron Kili is more than 25 years old</span></span>
<span class="line"><span>User John Doo is less than 25 years old.</span></span>
<span class="line"><span>User Kili Seth is more than 25 years old</span></span></code></pre></div><h3 id="_2-for-语句" tabindex="-1">2. for 语句 <a class="header-anchor" href="#_2-for-语句" aria-label="Permalink to “2. for 语句”">​</a></h3><p>如果你想循环执行一些 Awk 命令，那么 <code>for</code> 语句十分合适，它的语法如下：</p><p>这里只是简单的定义一个计数器来控制循环的执行。首先你要初始化那个计数器 （counter），然后根据某个条件判断是否执行，如果该条件为 true 则执行，最后增加计数器。当计数器不满足条件时则终止循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for ( counter-initialization; test-condition; counter-increment ){</span></span>
<span class="line"><span>actions</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>下面的 Awk 命令利用打印数字 0-10 来说明 <code>for</code> 语句是怎么工作的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ awk &#39;BEGIN{ for(counter=0;counter&lt;=10;counter++){ print counter} }&#39;</span></span></code></pre></div><p>输出样例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_3-while-语句" tabindex="-1">3. while 语句 <a class="header-anchor" href="#_3-while-语句" aria-label="Permalink to “3. while 语句”">​</a></h3><p>传统的 <code>while</code> 语句语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while ( condition ) {</span></span>
<span class="line"><span>actions</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的 condition 是 Awk 表达式，actions 是当 condition 为 true 时执行的 Awk 命令。</p><p>下面是仍然用打印数字 0-10 来解释 while 语句的用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0 ;</span></span>
<span class="line"><span>while(counter&lt;=10){</span></span>
<span class="line"><span>print counter;</span></span>
<span class="line"><span>counter+=1 ;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>保存文件，让文件可执行，然后执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>输出样例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_4-do-while-语句" tabindex="-1">4. do-while 语句 <a class="header-anchor" href="#_4-do-while-语句" aria-label="Permalink to “4. do-while 语句”">​</a></h3><p>这个是上面的 <code>while</code> 语句语法的一个变化，其语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>do {</span></span>
<span class="line"><span>actions</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>while (condition)</span></span></code></pre></div><p>二者的区别是，在 <code>do-while</code> 中，Awk 的命令在条件求值前先执行。我们使用 <code>while</code> 语句中同样的例子来解释 <code>do-while</code> 的使用，将 test.sh 脚本中的 Awk 命令做如下更改：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0 ;  </span></span>
<span class="line"><span>do{</span></span>
<span class="line"><span>print counter;  </span></span>
<span class="line"><span>counter+=1 ;    </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>while (counter&lt;=10)   </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>&#39;</span></span></code></pre></div><p>修改脚本后，保存退出。让脚本可执行，然后按如下方式执行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>输出样例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>前面指出，这并不是一个 Awk 流控制的完整介绍。在 Awk 中还有其它几个流控制语句。</p><p>不管怎样，Awk 系列的此部分给你一个如何基于某些条件来控制 Awk 命令执行的基本概念。</p><p>你可以接着通过仔细看看其余的流控制语句来获得关于这个主题的更多知识。最后，Awk 系列的下一部分，我们将会介绍如何写 Awk 脚本。</p><hr>`,49)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),p(i,{href:"http://www.tecmint.com/use-flow-control-statements-with-awk-command/"},{default:e(()=>[...s[16]||(s[16]=[n("http://www.tecmint.com/use-flow-control-statements-with-awk-command/",-1)])]),_:1})]),a("p",null,[s[21]||(s[21]=n("作者：",-1)),p(i,{href:"http://www.tecmint.com/author/aaronkili/"},{default:e(()=>[...s[18]||(s[18]=[n("Aaron Kili",-1)])]),_:1}),s[22]||(s[22]=n(" 译者：",-1)),p(i,{href:"https://github.com/chunyang-wen"},{default:e(()=>[...s[19]||(s[19]=[n("chunyang-wen",-1)])]),_:1}),s[23]||(s[23]=n(" 校对：",-1)),p(i,{href:"https://github.com/wxy"},{default:e(()=>[...s[20]||(s[20]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[26]||(s[26]=n("本文由 ",-1)),p(i,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[24]||(s[24]=[n("LCTT",-1)])]),_:1}),s[27]||(s[27]=n(" 原创编译，",-1)),p(i,{href:"https://linux.cn/"},{default:e(()=>[...s[25]||(s[25]=[n("Linux中国",-1)])]),_:1}),s[28]||(s[28]=n(" 荣誉推出",-1))])])}const C=t(h,[["render",c]]);export{y as __pageData,C as default};
