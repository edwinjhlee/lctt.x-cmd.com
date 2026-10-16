import{_ as a,a0 as i,w as p,s as d,ao as r,I as t,x as n,a1 as l,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const v=JSON.parse('{"title":"如何在shell脚本中使用变量 | LCTT x X-CMD","titleTemplate":false,"description":"如何在shell脚本中使用变量 | LCTT (201409) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在shell脚本中使用变量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在shell脚本中使用变量 | LCTT (201409) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201409/20140730 How to use variables in shell Scripting","title":"如何在shell脚本中使用变量","tag":"201409","desc":""},"relativePath":"201409/20140730 How to use variables in shell Scripting.md","filePath":"[post].md"}'),u={name:"201409/20140730 How to use variables in shell Scripting.md"};function g(h,e,c,m,T,$){const s=i("Link");return p(),d("div",null,[e[12]||(e[12]=r('<h1 id="如何在shell脚本中使用变量" tabindex="-1">如何在shell脚本中使用变量 <a class="header-anchor" href="#如何在shell脚本中使用变量" aria-label="Permalink to “如何在shell脚本中使用变量”">​</a></h1><p>在每种<strong>编程</strong>语言中，<strong>变量</strong>都扮演了一个重要的角色。在Linux shell脚本编程中，我们使用两种类型的变量：<strong>系统定义的变量</strong>和<strong>用户定义的变量</strong>。</p><p>shell脚本中的变量是用来<strong>调用</strong>一个<strong>数值</strong>或者<strong>字符值</strong>的手段。与正规的编程语言不同的是，shell脚本不要求你去为变量<strong>声明一个类型</strong>。</p><p>在本文中，我们将讨论shell脚本编程中的变量及其类型，以及如何设置和使用这些变量。</p><h3 id="系统定义的变量" tabindex="-1">系统定义的变量： <a class="header-anchor" href="#系统定义的变量" aria-label="Permalink to “系统定义的变量：”">​</a></h3><p>这些变量由<strong>操作系统（Linux）自身</strong>创建并维护，通常它们以<strong>大写字母</strong>定义，我们可以通过命令“<strong>$ set</strong>”来查看这些变量。下面列出了部分系统定义的变量：</p>',6)),e[13]||(e[13]=t("table",{width:"100%",cellspacing:"1",cellpadding:"1"},[t("tbody",null,[t("tr",null,[t("td",null,[t("strong",null,"系统定义的变量 ")]),t("td",null,[t("strong",null,"意义 ")])]),t("tr",null,[t("td",null," BASH=/bin/bash "),t("td",null," Bash Shell 名称 ")]),t("tr",null,[t("td",null," BASH_VERSION=4.1.2(1) "),t("td",null," Bash 版本 ")]),t("tr",null,[t("td",null," COLUMNS=80 "),t("td",null," 你的屏幕宽度（列数） ")]),t("tr",null,[t("td",null," HOME=/home/linuxtechi "),t("td",null," 用户家目录 ")]),t("tr",null,[t("td",null," LINES=25 "),t("td",null," 你的屏幕高度（行数） ")]),t("tr",null,[t("td",null," LOGNAME=LinuxTechi "),t("td",null," 当前登录用户的名字 ")]),t("tr",null,[t("td",null," OSTYPE=Linux "),t("td",null," 操作系统类型 ")]),t("tr",null,[t("td",null," PATH=/usr/bin:/sbin:/bin:/usr/sbin "),t("td",null," 可执行文件搜索路径 ")]),t("tr",null,[t("td",null," PS1=[\\u@\\h \\W]\\$ "),t("td",null," 命令行提示符 ")]),t("tr",null,[t("td",null," PWD=/home/linuxtechi "),t("td",null," 当前工作目录 ")]),t("tr",null,[t("td",null," SHELL=/bin/bash "),t("td",null," Shell 名称 ")]),t("tr",null,[t("td",null," USERNAME=linuxtechi "),t("td",null," 当前登录的用户名 ")])])],-1)),e[14]||(e[14]=r(`<p>要打印以上变量的值，可以使用<strong>echo command</strong>命令，如下：</p><pre><code># echo $HOME
# echo $USERNAME
</code></pre><p>我们可以通过在环境变量名前前置一个美元符号来从你的脚本里输入环境变量。请看下面脚本演示：</p><pre><code>$ cat myscript

#!/bin/bash
# display user information from the system.
echo “User info for userid: $USER”
echo UID: $UID
echo HOME: $HOME 
</code></pre><p>注意：echo命令中的<strong>环境变量</strong>在脚本运行时会被它们的值替代。同时注意，我们可以再第一个字符串的双引号中放置<strong>$USER</strong>系统变量，而shell脚本仍然可以明白我们的意思。然而，该方法有一个<strong>缺点</strong>。看下面这个例子：</p><pre><code>$ echo “The cost of the item is $15”
The cost of the item is 5
</code></pre><p>很明显，那不是我们说希望的。无论何时，当脚本遇见引号中的美元符号时，它都会认为你是在调用一个变量。在本例中，该脚本试着显示<strong>变量$1</strong>（而这个变量并没有定义），然后显示数字5。要显示实际上的美元符号，你<strong>必须前置</strong>一个<strong>反斜线字符</strong>：</p><pre><code>$ echo “The cost of the item is \\$15”
The cost of the item is $15
</code></pre><p>那样好多了。反斜线允许shell脚本将<strong>美元符号</strong>解释成为实际的美元符号，而不是变量。</p><h3 id="用户定义的变量" tabindex="-1">用户定义的变量： <a class="header-anchor" href="#用户定义的变量" aria-label="Permalink to “用户定义的变量：”">​</a></h3><p>这些变量由<strong>用户</strong>定义。shell脚本允许我们在脚本中设置并使用我们<strong>自己的变量</strong>。设置变量允许你<strong>临时存储数据</strong>并在脚本中使用，让shell脚本看起来像一个真正的计算机程序。</p><p><strong>用户变量</strong>可以是任何不超过<strong>20个的字母、数字</strong>或者<strong>下划线字符</strong>的文本字符串（LCTT 译注：变量只能以字母或下划线开头）。用户变量是大小写敏感的，因此，变量Var1和变量var1是不同的变量。这个小规则常常让新手编写脚本时麻烦重重。</p><p>我们可以通过<strong>等于号</strong>为变量赋值。变量，等于号和值（对于新手又是个麻烦的地方）之间不能有空格。下面是几个给用户变量赋值的例子：</p><pre><code>var1=10
var2=-57
var3=testing
var4=“still more testing”
</code></pre><p>shell脚本为变量值<strong>自动确定数据类型</strong>。shell脚本内定义的变量会在脚本运行时保留它们的值，当脚本完成后则删除这些值。</p><p>就像系统变量一样，用户变量也可以使用美元符号来调用：</p><pre><code>$ cat test3
#!/bin/bash
# testing variables
days=10
guest=&quot;Katie&quot;
echo &quot;$guest checked in $days days ago&quot;
days=5
guest=&quot;Jessica&quot;
echo &quot;$guest checked in $days days ago&quot;
$
</code></pre><p>运行脚本会产生以下输出：</p><pre><code>$ chmod u+x test3
$ ./test3
Katie checked in 10 days ago
Jessica checked in 5 days ago
$
</code></pre><p>每次变量被<strong>调用</strong>，它都会变成了当前分配给它的值。有一点很重要，当调用一个变量值时，你使用<strong>美元符号</strong>，但是当为一个变量分配一个值时，你不能用美元符号。下面用例子来说明：</p><pre><code>$ cat test4
#!/bin/bash
# assigning a variable value to another variable
value1=10
value2=$value1
echo The resulting value is $value2
$
</code></pre><p>当你使用赋值语句中<strong>value1</strong>变量的<strong>值</strong>时，你仍然必须使用美元符号。这段代码产生了如下输出：</p><pre><code>$ chmod u+x test4
$ ./test4
The resulting value is 10
$
</code></pre><p>如果你忘了美元符号，而又让value2赋值行看起来像这样：</p><p>value2=value1</p><p>你会获得下面的输出：</p><pre><code>$ ./test4    
The resulting value is value1
$
</code></pre><p>没有美元符号，<strong>shell解释</strong>变量名为<strong>普通文本字符串</strong>，这极有可能不是你想要的。</p><h3 id="在shell变量中使用反引号" tabindex="-1">在shell变量中使用反引号（\`）： <a class="header-anchor" href="#在shell变量中使用反引号" aria-label="Permalink to “在shell变量中使用反引号（\`）：”">​</a></h3><p><strong>反引号允许</strong>你将shell命令的输出赋值给变量。虽然这似乎没什么大不了，但它是<strong>脚本编程</strong>中主要的构建基块。你必须使用反引号将整个命令行包含起来：</p><pre><code>**testing=\`date\`**
</code></pre><p>shell会在<strong>反引号</strong>中运行命令，然后将输出结果赋值给变量testing。下面的例子给出了如何使用一个常规shell命令的输出结果来创建一个变量：</p><pre><code>$ cat test5
#!/bin/bash
# using the backtick character
testing=\`date\`
echo &quot;The date and time are: &quot; $testing
$
</code></pre><p>变量testing接收来自date命令的输出结果，而它又在echo语句中被调用。运行脚本会产生如下输出：</p><pre><code>$ chmod u+x test5
$ ./test5
The date and time are: Mon Jan 31 20:23:25 EDT 2011
</code></pre><p><strong>注</strong>：在bash中，你也可以选用$(...)语法来替换反引号(\`)，它有个优点就是可以重用（re-entrant）。</p><p>例：</p><pre><code>$ echo &quot; Today’s date &amp; time is :&quot; $(date)
Today’s date &amp; time is : Sun Jul 27 16:26:56 IST 2014 
</code></pre><hr>`,39)),t("p",null,[e[1]||(e[1]=n("via: ",-1)),l(s,{href:"http://www.linuxtechi.com/variables-in-shell-scripting/"},{default:o(()=>[...e[0]||(e[0]=[n("http://www.linuxtechi.com/variables-in-shell-scripting/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=n("作者：",-1)),l(s,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:o(()=>[...e[2]||(e[2]=[n("Pradeep Kumar",-1)])]),_:1}),e[5]||(e[5]=n(" 译者：",-1)),l(s,{href:"https://github.com/GOLinux"}),e[6]||(e[6]=n(" 校对：",-1)),l(s,{href:"https://github.com/wxy"},{default:o(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[9]||(e[9]=n("本文由 ",-1)),l(s,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[7]||(e[7]=[n("LCTT",-1)])]),_:1}),e[10]||(e[10]=n(" 原创翻译，",-1)),l(s,{href:"http://linux.cn/"},{default:o(()=>[...e[8]||(e[8]=[n("Linux中国",-1)])]),_:1}),e[11]||(e[11]=n(" 荣誉推出",-1))])])}const x=a(u,[["render",g]]);export{v as __pageData,x as default};
