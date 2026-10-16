import{_ as t,a0 as o,w as c,s as d,ao as p,I as l,x as e,a1 as a,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"Bash Shell 脚本新手指南（三） | LCTT x X-CMD","titleTemplate":false,"description":"Bash Shell 脚本新手指南（三） | LCTT (202202) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash Shell 脚本新手指南（三） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash Shell 脚本新手指南（三） | LCTT (202202) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202202/20211206 Bash Shell Scripting for beginners (Part 3)","title":"Bash Shell 脚本新手指南（三）","tag":"202202","desc":""},"relativePath":"202202/20211206 Bash Shell Scripting for beginners (Part 3).md","filePath":"[post].md"}'),h={name:"202202/20211206 Bash Shell Scripting for beginners (Part 3).md"};function r(u,s,g,b,f,m){const n=o("Link");return c(),d("div",null,[s[18]||(s[18]=p(`<h1 id="bash-shell-脚本新手指南-三" tabindex="-1">Bash Shell 脚本新手指南（三） <a class="header-anchor" href="#bash-shell-脚本新手指南-三" aria-label="Permalink to “Bash Shell 脚本新手指南（三）”">​</a></h1><p><img src="https://fedoramagazine.org/wp-content/uploads/2021/11/bash_shell_scripting_pt3-816x345.jpg" alt=""></p><p>欢迎来到面向初学者的 Bash Shell 脚本知识第三部分。这最后一篇文章将再来学习一些知识点，这些将使你为持续的个人发展做好准备。它将涉及到函数、用 <code>if</code>/<code>elif</code> 语句进行比较，并以研究 <code>while</code> 循环作为结尾。</p><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to “函数”">​</a></h3><p>让我们从一个看似困难但其实很简单的基本概念开始，即函数。把它看作是一种简单的方法，可以把脚本中被反复使用的部分放到一个可重复使用的组中。你在本系列第一篇或第二篇文章中所做的任何事情都可以放在一个函数中。因此，让我们把一个函数放到我们的 <code>learnToScript.sh</code> 文件中。让我指出几个关键点。你将需要为你的函数起一个名字、一对小括号，以及用大括号包围放在你的函数中的命令。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#A function to return an echo statement.</span></span>
<span class="line"><span>helloFunc() {</span></span>
<span class="line"><span>        echo &quot;Hello from a function.&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#invoke the first function helloFunc()</span></span>
<span class="line"><span>helloFunc</span></span></code></pre></div><p>你会看到如下输出结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>Hello from a function.</span></span>
<span class="line"><span>[zexcon@fedora ~]$</span></span></code></pre></div><p>函数是重复使用一组命令的好方法，但如果你能使它们在每次使用时对不同的数据进行操作，它们会更加有用。这就要求你在每次调用函数时提供数据，这称为参数。</p><p>要提供参数，你只需在调用函数时把它们加在函数名称后面。为了使用你提供的数据，你在函数命令中使用位置来引用它们。它们将被命名为 <code>$1</code>、<code>$2</code>、<code>$3</code>，以此类推，这取决于你的函数将需要多少个参数。</p><p>让我们修改上一个例子来帮助更好地理解这个问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#A function to return an echo statement.</span></span>
<span class="line"><span>helloFunc() {</span></span>
<span class="line"><span>        echo &quot;Hello from a function.&quot;</span></span>
<span class="line"><span>        echo $1</span></span>
<span class="line"><span>        echo $2</span></span>
<span class="line"><span>        echo &quot;You gave me $# arguments&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#invoke the function helloFunc()</span></span>
<span class="line"><span>helloFunc &quot;How is the weather?&quot; Fine</span></span></code></pre></div><p>输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hello from a function.</span></span>
<span class="line"><span>How is the weather?</span></span>
<span class="line"><span>Fine</span></span>
<span class="line"><span>You gave me 2 arguments</span></span></code></pre></div><p>输出中发生的事情是 <code>helloFunc()</code> 在每一行都做了一个回显。首先它回显了一个 <code>Hello from a function</code>，然后它继续回显变量 <code>$1</code> 的值，结果是你传递给 <code>helloFunc</code> 的 <code>&quot;How is the weather?&quot;</code>。然后它将继续处理变量 <code>$2</code>，并回显其值，这是你传递的第二个项目：<code>Fine</code>。该函数将以回显 <code>You gave me $# arguments</code> 结束。注意，第一个参数是一个用双引号括起来的单个字符串 <code>&quot;How is the weather?&quot;</code>。第二个参数 <code>Fine</code> 没有空格，所以不需要引号。</p><p>除了使用 <code>$1</code>、<code>$2</code> 等之外，你还可以通过使用变量 <code>$#</code> 来确定传递给函数的参数数量。这意味着你可以创建一个接受可变参数数量的函数。</p>`,16)),l("p",null,[s[1]||(s[1]=e("关于 bash 函数的更多细节，网上有很多好的参考资料。",-1)),a(n,{href:"https://opensource.com/article/20/6/bash-functions"},{default:i(()=>[...s[0]||(s[0]=[e("这里有一个可以让你入门的资料",-1)])]),_:1}),s[2]||(s[2]=e("。",-1))]),s[19]||(s[19]=p(`<p>我希望你能了解到函数如何在你的 bash 脚本中提供巨大的灵活性。</p><h3 id="数值比较" tabindex="-1">数值比较 [] <a class="header-anchor" href="#数值比较" aria-label="Permalink to “数值比较 []”">​</a></h3><p>如果你想进行数字比较，你需要在方括号 <code>[]</code> 中使用以下运算符之一：</p><ul><li><code>-eq</code> （等于）</li><li><code>-ge</code> （等于或大于）</li><li><code>-gt</code> （大于）</li><li><code>-le</code> （小于或等于）</li><li><code>-lt</code> （小于）</li><li><code>-ne</code> （不相等）</li></ul><p>因此，举例来说，如果你想看 12 是否等于或小于 25，可以像 <code>[ 12 -le 25 ]</code> 这样。当然，12 和 25 可以是变量。例如，<code>[ $twelve -le $twentyfive ]</code>。（LCTT 译注：注意保留方括号和判断语句间的空格）</p><h3 id="if-和-elif-语句" tabindex="-1">if 和 elif 语句 <a class="header-anchor" href="#if-和-elif-语句" aria-label="Permalink to “if 和 elif 语句”">​</a></h3><p>那么让我们用数字比较来介绍 <code>if</code> 语句。Bash 中的 <code>if</code> 语句将以 <code>if</code> 开始, 以 <code>fi</code> 结束。<code>if</code> 语句 以 <code>if</code> 开始，然后是你想做的检查。在本例中，检查的内容是变量 <code>numberOne</code> 是否等于 <code>1</code>。如果 <code>numberOne</code> 等于 <code>1</code>，将执行 <code>then</code> 语句，否则将执行 <code>else</code> 语句。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>numberTwelve=12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $numberTwelve -eq 12 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;numberTwelve is equal to 12&quot;</span></span>
<span class="line"><span>elif [ $numberTwelve -gt 12 ]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;numberTwelve variable is greater than 12&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;neither of the statemens matched&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>numberTwelve variable is equal to 12</span></span></code></pre></div><p>你所看到的是 <code>if</code> 语句的第一行，它在检查变量的值是否真的等于 <code>12</code>。如果是的话，语句就会停止，并发出 <code>numberTwelve is equal to 12</code> 的回显，然后在 <code>fi</code> 之后继续执行你的脚本。如果变量大于 <code>12</code> 的话，就会执行 <code>elif</code> 语句，并在 <code>fi</code> 之后继续执行。当你使用 <code>if</code> 或 <code>if</code>/<code>elif</code> 语句时，它是自上而下工作的。当第一条语句是匹配的时候，它会停止并执行该命令，并在 <code>fi</code> 之后继续执行。</p><h3 id="字符串比较" tabindex="-1">字符串比较 [[]] <a class="header-anchor" href="#字符串比较" aria-label="Permalink to “字符串比较 [[]]”">​</a></h3><p>这就是数字比较。那么字符串的比较呢？使用双方括号 <code>[[]]</code> 和以下运算符等于或不等于。（LCTT 译注：注意保留方括号和判断语句间的空格）</p><ul><li><code>=</code> （相等）</li><li><code>!=</code> （不相等）</li></ul><p>请记住，字符串还有一些其他的比较方法，我们这里不会讨论，但可以深入了解一下它们以及它们是如何工作的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#variable with a string</span></span>
<span class="line"><span>stringItem=&quot;Hello&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#This will match since it is looking for an exact match with $stringItem</span></span>
<span class="line"><span>if [[ $stringItem = &quot;Hello&quot; ]]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;The string is an exact match.&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;The strings do not match exactly.&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#This will utilize the then statement since it is not looking for a case sensitive match</span></span>
<span class="line"><span>if [[ $stringItem = &quot;hello&quot; ]]</span></span>
<span class="line"><span>then</span></span>
<span class="line"><span>        echo &quot;The string does match but is not case sensitive.&quot;</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>        echo &quot;The string does not match because of the capitalized H.&quot;</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>你将得到以下三行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>The string is an exact match.</span></span>
<span class="line"><span>The string does not match because of the capitalized H.</span></span>
<span class="line"><span>[zexcon@fedora ~]$</span></span></code></pre></div><h3 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to “while 循环”">​</a></h3><p>在结束这个系列之前，让我们看一下循环。一个关于 <code>while</code> 循环的例子是：“当 1个数值 小于 10 时，在数值上加 1”，你继续这样做直到该判断语句不再为真。下面你将看到变量 <code>number</code> 设置为 <code>1</code>。在下一行，我们有一个 <code>while</code> 语句，它检查 <code>number</code> 是否小于或等于 <code>10</code>。在 <code>do</code> 和 <code>done</code> 之间包含的命令被执行，因为 <code>while</code> 的比较结果为真。所以我们回显一些文本，并在 <code>number</code> 的值上加 <code>1</code>。我们继续执行，直到 <code>while</code> 语句不再为真，它脱离了循环，并回显 <code>We have completed the while loop since $number is greater than 10.</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>number=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>while [ $number -le 10 ]</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        echo &quot;We checked the current number is $number so we will increment once&quot;</span></span>
<span class="line"><span>        ((number=number+1))</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>        echo &quot;We have completed the while loop since $number is greater than 10.&quot;</span></span></code></pre></div><p><code>while</code> 循环的结果如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[zexcon@fedora ~]$ ./learnToScript.sh</span></span>
<span class="line"><span>We checked the current number is 1 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 2 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 3 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 4 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 5 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 6 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 7 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 8 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 9 so we will increment once</span></span>
<span class="line"><span>We checked the current number is 10 so we will increment once</span></span>
<span class="line"><span>We have completed the while loop since 11 is greater than 10.</span></span>
<span class="line"><span>[zexcon@fedora ~]$</span></span></code></pre></div><p>正如你所看到的，实现这一目的所需的脚本量要比用 <code>if</code> 语句不断检查每个数字少得多。这就是循环的伟大之处，而 <code>while</code> 循环只是众多方式之一，它以不同的方式来满足你的个人需要。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>下一步是什么？正如文章所指出的，这是，面向 Bash Shell 脚本初学者的。希望我激发了你对脚本的兴趣或终生的热爱。我建议你去看看其他人的脚本，了解你不知道或不理解的地方。请记住，由于本系列每篇文章都介绍了数学运算、比较字符串、输出和归纳数据的多种方法，它们也可以用函数、循环或许多其他方法来完成。如果你练习所讨论的基础知识，你将会很开心地把它们与你还要学习的所有其他知识结合起来。试试吧，让我们在 Fedora Linux 世界里见。</p><hr>`,27)),l("p",null,[s[4]||(s[4]=e("via: ",-1)),a(n,{href:"https://fedoramagazine.org/bash-shell-scripting-for-beginners-part-3"},{default:i(()=>[...s[3]||(s[3]=[e("https://fedoramagazine.org/bash-shell-scripting-for-beginners-part-3",-1)])]),_:1})]),l("p",null,[s[9]||(s[9]=e("作者：",-1)),a(n,{href:"https://fedoramagazine.org/author/zexcon/"},{default:i(()=>[...s[5]||(s[5]=[e("Matthew Darnell",-1)])]),_:1}),s[10]||(s[10]=e(" 选题：",-1)),a(n,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[6]||(s[6]=[e("lujun9972",-1)])]),_:1}),s[11]||(s[11]=e(" 译者：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[7]||(s[7]=[e("wxy",-1)])]),_:1}),s[12]||(s[12]=e(" 校对：",-1)),a(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[8]||(s[8]=[e("wxy",-1)])]),_:1})]),l("p",null,[s[15]||(s[15]=e("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[13]||(s[13]=[e("LCTT",-1)])]),_:1}),s[16]||(s[16]=e(" 原创编译，",-1)),a(n,{href:"https://linux.cn/"},{default:i(()=>[...s[14]||(s[14]=[e("Linux中国",-1)])]),_:1}),s[17]||(s[17]=e(" 荣誉推出",-1))])])}const v=t(h,[["render",r]]);export{T as __pageData,v as default};
