import{_ as t,a0 as o,w as d,s as r,ao as l,I as n,x as a,a1 as e,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"awk 系列：在 awk 中如何使用流程控制语句 | LCTT x X-CMD","titleTemplate":false,"description":"awk 系列：在 awk 中如何使用流程控制语句 | LCTT (awk) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"awk 系列：在 awk 中如何使用流程控制语句 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"awk 系列：在 awk 中如何使用流程控制语句 | LCTT (awk) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"awk/Part 12 -  How to Use Flow Control Statements in Awk - Part 12","title":"awk 系列：在 awk 中如何使用流程控制语句","tag":"awk","desc":""},"relativePath":"awk/Part 12 -  How to Use Flow Control Statements in Awk - Part 12.md","filePath":"[post].md"}'),h={name:"awk/Part 12 -  How to Use Flow Control Statements in Awk - Part 12.md"};function c(k,s,g,b,u,f){const i=o("Link");return d(),r("div",null,[s[26]||(s[26]=l('<h1 id="awk-系列-在-awk-中如何使用流程控制语句" tabindex="-1">awk 系列：在 awk 中如何使用流程控制语句 <a class="header-anchor" href="#awk-系列-在-awk-中如何使用流程控制语句" aria-label="Permalink to “awk 系列：在 awk 中如何使用流程控制语句”">​</a></h1><p>当你回顾所有到目前为止我们已经覆盖的 awk 实例，从 awk 系列的开始，你会注意到各种实例的所有指令是顺序执行的，即一个接一个地执行。但在某些情况下，我们可能希望基于一些条件进行文本过滤操作，即流程控制语句允许的那些语句。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2016/08/Use-Flow-Control-Statements-in-Awk.png" alt=""></p><p>在 awk 编程中有各种各样的流程控制语句，其中包括：</p><ul><li>if-else 语句</li><li>for 语句</li><li>while 语句</li><li>do-while 语句</li><li>break 语句</li><li>continue 语句</li><li>next 语句</li><li>nextfile 语句</li><li>exit 语句</li></ul>',5)),n("p",null,[s[1]||(s[1]=a("然而，对于本系列的这一部分，我们将阐述：",-1)),s[2]||(s[2]=n("code",null,"if-else",-1)),s[3]||(s[3]=a("、",-1)),s[4]||(s[4]=n("code",null,"for",-1)),s[5]||(s[5]=a("、",-1)),s[6]||(s[6]=n("code",null,"while",-1)),s[7]||(s[7]=a(" 和 ",-1)),s[8]||(s[8]=n("code",null,"do while",-1)),s[9]||(s[9]=a(" 语句。请记住，我们已经在这个 ",-1)),e(i,{href:"https://linux.cn/article-7609-1.html"},{default:p(()=>[...s[0]||(s[0]=[a("awk 系列的第 6 部分",-1)])]),_:1}),s[10]||(s[10]=a("介绍过如何使用 awk 的 ",-1)),s[11]||(s[11]=n("code",null,"next",-1)),s[12]||(s[12]=a(" 语句。",-1))]),s[27]||(s[27]=l(`<h3 id="_1-if-else-语句" tabindex="-1">1. if-else 语句 <a class="header-anchor" href="#_1-if-else-语句" aria-label="Permalink to “1. if-else 语句”">​</a></h3><p>如你想的那样。if 语句的语法类似于 shell 中的 if 语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if  (条件 1) {</span></span>
<span class="line"><span>     动作 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else {</span></span>
<span class="line"><span>      动作 2</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上述语法中，<code>条件 1</code> 和<code>条件 2</code> 是 awk 表达式，而<code>动作 1</code> 和<code>动作 2</code> 是当各自的条件得到满足时所执行的 awk 命令。</p><p>当<code>条件 1</code> 满足时，意味着它为真，那么<code>动作 1</code> 被执行并退出 <code>if 语句</code>，否则<code>动作 2</code> 被执行。</p><p>if 语句还能扩展为如下的 <code>if-else_if-else</code> 语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if (条件 1){</span></span>
<span class="line"><span>     动作 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else if (条件 2){</span></span>
<span class="line"><span>      动作 2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>else{</span></span>
<span class="line"><span>     动作 3</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对于上面的形式，如果<code>条件 1</code> 为真，那么<code>动作 1</code> 被执行并退出 <code>if 语句</code>，否则<code>条件 2</code> 被求值且如果值为真，那么<code>动作 2</code> 被执行并退出 <code>if 语句</code>。然而，当<code>条件 2</code> 为假时，那么<code>动作 3</code> 被执行并退出 <code>if 语句</code>。</p><p>这是在使用 if 语句的一个实例，我们有一个用户和他们年龄的列表，存储在文件 users.txt 中。</p><p>我们要打印一个清单，显示用户的名称和用户的年龄是否小于或超过 25 岁。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>aaronkilik@tecMint ~ $ cat users.txt</span></span>
<span class="line"><span>Sarah L			35    	F</span></span>
<span class="line"><span>Aaron Kili		40    	M</span></span>
<span class="line"><span>John  Doo		20    	M</span></span>
<span class="line"><span>Kili  Seth		49    	M</span></span></code></pre></div><p>我们可以写一个简短的 shell 脚本来执行上文中我们的工作，这是脚本的内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; {</span></span>
<span class="line"><span>        if ( $3 &lt;= 25 ){</span></span>
<span class="line"><span>           print &quot;User&quot;,$1,$2,&quot;is less than 25 years old.&quot; ;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>           print &quot;User&quot;,$1,$2,&quot;is more than 25 years old&quot; ;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}&#39;    ~/users.txt</span></span></code></pre></div><p>然后保存文件并退出，按如下方式使脚本可执行并运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
<span class="line"><span>$ ./test.sh</span></span></code></pre></div><p>输出样例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>User Sarah L is more than 25 years old</span></span>
<span class="line"><span>User Aaron Kili is more than 25 years old</span></span>
<span class="line"><span>User John Doo is less than 25 years old.</span></span>
<span class="line"><span>User Kili Seth is more than 25 years old</span></span></code></pre></div><h3 id="_2-for-语句" tabindex="-1">2. for 语句 <a class="header-anchor" href="#_2-for-语句" aria-label="Permalink to “2. for 语句”">​</a></h3><p>如果你想在一个循环中执行一些 awk 命令，那么 <code>for 语句</code>为你提供一个做这个的合适方式，格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for ( 计数器的初始化 ; 测试条件 ; 计数器增加 ){</span></span>
<span class="line"><span>      动作</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，该方法是通过一个计数器来控制循环执行来定义的，首先你需要初始化这个计数器，然后针对测试条件运行它，如果它为真，执行这些动作并最终增加这个计数器。当计数器不满足条件时，循环终止。</p><p>在我们想要打印数字 0 到 10 时，以下 awk 命令显示 for 语句是如何工作的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ awk &#39;BEGIN{ for(counter=0;counter&lt;=10;counter++){ print counter} }&#39;</span></span></code></pre></div><p>输出样例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span>10</span></span></code></pre></div><h3 id="_3-while-语句" tabindex="-1">3. while 语句 <a class="header-anchor" href="#_3-while-语句" aria-label="Permalink to “3. while 语句”">​</a></h3><p>while 语句的传统语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while ( 条件 ) {</span></span>
<span class="line"><span>          动作</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这个<code>条件</code>是一个 awk 表达式而<code>动作</code>是当条件为真时被执行的 awk 命令。</p><p>下面是一个说明使用 <code>while</code> 语句来打印数字 0 到 10 的脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        while(counter&lt;=10){</span></span>
<span class="line"><span>              print counter;</span></span>
<span class="line"><span>              counter+=1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>保存文件并使脚本可执行，然后运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
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
<span class="line"><span>10</span></span></code></pre></div><h3 id="_4-do-while-语句" tabindex="-1">4. do while 语句 <a class="header-anchor" href="#_4-do-while-语句" aria-label="Permalink to “4. do while 语句”">​</a></h3><p>它是上文中 <code>while</code> 语句的一个变型，具有以下语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>do {</span></span>
<span class="line"><span>     动作</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> while (条件)</span></span></code></pre></div><p>这轻微的区别在于，在 <code>do while</code> 语句下，awk 的命令在求值条件之前执行。使用上文 <code>while</code> 语句的例子，我们可以通过按如下所述修改 test.sh 脚本中的 awk 命令来说明 <code>do while</code> 语句的用法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>awk &#39; BEGIN{ counter=0;</span></span>
<span class="line"><span>        do{</span></span>
<span class="line"><span>            print counter;</span></span>
<span class="line"><span>            counter+=1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        while (counter&lt;=10)</span></span>
<span class="line"><span>}&#39;</span></span></code></pre></div><p>修改脚本之后，保存文件并退出。按如下方式使脚本可执行并执行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x test.sh</span></span>
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
<span class="line"><span>10</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>这不是关于 awk 的流程控制语句的一个全面的指南，正如我早先提到的，在 awk 里还有其他几个流程控制语句。</p><p>尽管如此，awk 系列的这一部分使应该你明白了一个明确的基于某些条件控制的 awk 命令是如何执行的基本概念。</p><p>你还可以了解其余更多的流程控制语句以获得更多关于该主题的理解。最后，在 awk 的系列下一节，我们将进入编写 awk 脚本。</p><hr>`,49)),n("p",null,[s[17]||(s[17]=a("via: ",-1)),e(i,{href:"http://www.tecmint.com/use-flow-control-statements-with-awk-command/"},{default:p(()=>[...s[13]||(s[13]=[a("http://www.tecmint.com/use-flow-control-statements-with-awk-command/",-1)])]),_:1}),s[18]||(s[18]=a(" 作者：",-1)),e(i,{href:"http://www.tecmint.com/author/aaronkili/"},{default:p(()=>[...s[14]||(s[14]=[a("Aaron Kili",-1)])]),_:1}),s[19]||(s[19]=a(" 译者：",-1)),e(i,{href:"https://github.com/robot527"},{default:p(()=>[...s[15]||(s[15]=[a("robot527",-1)])]),_:1}),s[20]||(s[20]=a(" 校对：",-1)),e(i,{href:"https://github.com/wxy"},{default:p(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(i,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原创编译，",-1)),e(i,{href:"https://linux.cn/"},{default:p(()=>[...s[22]||(s[22]=[a("Linux 中国",-1)])]),_:1}),s[25]||(s[25]=a(" 荣誉推出",-1))])])}const C=t(h,[["render",c]]);export{y as __pageData,C as default};
