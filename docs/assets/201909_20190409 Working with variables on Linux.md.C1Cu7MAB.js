import{_ as t,a0 as o,w as c,s as h,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"在 Linux 中使用变量 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中使用变量 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中使用变量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中使用变量 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190409 Working with variables on Linux","title":"在 Linux 中使用变量","tag":"201909","desc":""},"relativePath":"201909/20190409 Working with variables on Linux.md","filePath":"[post].md"}'),r={name:"201909/20190409 Working with variables on Linux.md"};function d(u,s,g,k,b,f){const a=o("Link");return c(),h("div",null,[s[18]||(s[18]=l('<h1 id="在-linux-中使用变量" tabindex="-1">在 Linux 中使用变量 <a class="header-anchor" href="#在-linux-中使用变量" aria-label="Permalink to “在 Linux 中使用变量”">​</a></h1><blockquote><p>变量通常看起来像 <code>$var</code> 这样，但它们也有 <code>$1</code>、<code>$*</code>、<code>$?</code> 和 <code>$$</code> 这种形式。让我们来看看所有这些 <code>$</code> 值可以告诉你什么。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201909/15/105140faf2jzyybubu1d0c.jpg" alt=""></p>',3)),i("p",null,[s[1]||(s[1]=n("有许多重要的值都存储在 Linux 系统中，我们称为“变量”，但实际上变量有几种类型，并且一些有趣的命令可以帮助你使用它们。在上一篇文章中，我们研究了",-1)),p(a,{href:"https://linux.cn/article-10916-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("环境变量",-1)])]),_:1}),s[2]||(s[2]=n("以及它们定义在何处。在本文中，我们来看一看在命令行和脚本中使用的变量。",-1))]),s[19]||(s[19]=l(`<h3 id="用户变量" tabindex="-1">用户变量 <a class="header-anchor" href="#用户变量" aria-label="Permalink to “用户变量”">​</a></h3><p>虽然在命令行中设置变量非常容易，但是有一些有趣的技巧。要设置变量，你只需这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ myvar=11</span></span>
<span class="line"><span>$ myvar2=&quot;eleven&quot;</span></span></code></pre></div><p>要显示这些值，只需这样做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>11</span></span>
<span class="line"><span>$ echo $myvar2</span></span>
<span class="line"><span>eleven</span></span></code></pre></div><p>你也可以使用这些变量。例如，要递增一个数字变量，使用以下任意一个命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ myvar=$((myvar+1))</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>12</span></span>
<span class="line"><span>$ ((myvar=myvar+1))</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>13</span></span>
<span class="line"><span>$ ((myvar+=1))</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>14</span></span>
<span class="line"><span>$ ((myvar++))</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>15</span></span>
<span class="line"><span>$ let &quot;myvar=myvar+1&quot;</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>16</span></span>
<span class="line"><span>$ let &quot;myvar+=1&quot;</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>17</span></span>
<span class="line"><span>$ let &quot;myvar++&quot;</span></span>
<span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>18</span></span></code></pre></div><p>使用其中的一些，你可以增加一个变量的值。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ myvar0=0</span></span>
<span class="line"><span>$ ((myvar0++))</span></span>
<span class="line"><span>$ echo $myvar0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ ((myvar0+=10))</span></span>
<span class="line"><span>$ echo $myvar0</span></span>
<span class="line"><span>11</span></span></code></pre></div><p>通过这些选项，你可能会发现它们是容易记忆、使用方便的。</p><p>你也可以<em>删除</em>一个变量 -- 这意味着没有定义它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ unset myvar</span></span>
<span class="line"><span>$ echo $myvar</span></span></code></pre></div><p>另一个有趣的选项是，你可以设置一个变量并将其设为<strong>只读</strong>。换句话说，变量一旦设置为只读，它的值就不能改变（除非一些非常复杂的命令行魔法才可以）。这意味着你也不能删除它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ readonly myvar3=1</span></span>
<span class="line"><span>$ echo $myvar3</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ ((myvar3++))</span></span>
<span class="line"><span>-bash: myvar3: readonly variable</span></span>
<span class="line"><span>$ unset myvar3</span></span>
<span class="line"><span>-bash: unset: myvar3: cannot unset: readonly variable</span></span></code></pre></div><p>你可以使用这些设置和递增选项中来赋值和操作脚本中的变量，但也有一些非常有用的<em>内部变量</em>可以用于在脚本中。注意，你无法重新赋值或增加它们的值。</p><h3 id="内部变量" tabindex="-1">内部变量 <a class="header-anchor" href="#内部变量" aria-label="Permalink to “内部变量”">​</a></h3><p>在脚本中可以使用很多变量来计算参数并显示有关脚本本身的信息。</p><ul><li><code>$1</code>、<code>$2</code>、<code>$3</code> 等表示脚本的第一个、第二个、第三个等参数。</li><li><code>$#</code> 表示参数的数量。</li><li><code>$*</code> 表示所有参数。</li><li><code>$0</code> 表示脚本的名称。</li><li><code>$?</code> 表示先前运行的命令的返回码（0 代表成功）。</li><li><code>$$</code> 显示脚本的进程 ID。</li><li><code>$PPID</code> 显示 shell 的进程 ID（脚本的父进程）。</li></ul><p>其中一些变量也适用于命令行，但显示相关信息：</p><ul><li><code>$0</code> 显示你正在使用的 shell 的名称（例如，-bash）。</li><li><code>$$</code> 显示 shell 的进程 ID。</li><li><code>$PPID</code> 显示 shell 的父进程的进程 ID（对我来说，是 sshd）。</li></ul><p>为了查看它们的结果，如果我们将所有这些变量都放入一个脚本中，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $0</span></span>
<span class="line"><span>echo $1</span></span>
<span class="line"><span>echo $2</span></span>
<span class="line"><span>echo $#</span></span>
<span class="line"><span>echo $*</span></span>
<span class="line"><span>echo $?</span></span>
<span class="line"><span>echo $$</span></span>
<span class="line"><span>echo $PPID</span></span></code></pre></div><p>当我们调用这个脚本时，我们会看到如下内容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tryme one two three</span></span>
<span class="line"><span>/home/shs/bin/tryme     &lt;== 脚本名称</span></span>
<span class="line"><span>one                     &lt;== 第一个参数</span></span>
<span class="line"><span>two                     &lt;== 第二个参数</span></span>
<span class="line"><span>3                       &lt;== 参数的个数</span></span>
<span class="line"><span>one two three           &lt;== 所有的参数</span></span>
<span class="line"><span>0                       &lt;== 上一条 echo 命令的返回码</span></span>
<span class="line"><span>10410                   &lt;== 脚本的进程 ID</span></span>
<span class="line"><span>10109                   &lt;== 父进程 ID</span></span></code></pre></div><p>如果我们在脚本运行完毕后检查 shell 的进程 ID，我们可以看到它与脚本中显示的 PPID 相匹配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $$</span></span>
<span class="line"><span>10109                   &lt;== shell 的进程 ID</span></span></code></pre></div><p>当然，比起简单地显示它们的值，更有用的方式是使用它们。我们来看一看它们可能的用处。</p><p>检查是否已提供参数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $# == 0 ]; then</span></span>
<span class="line"><span>    echo &quot;$0 filename&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>检查特定进程是否正在运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ps -ef | grep apache2 &gt; /dev/null</span></span>
<span class="line"><span>if [ $? != 0 ]; then</span></span>
<span class="line"><span>    echo Apache is not running</span></span>
<span class="line"><span>    exit</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>在尝试访问文件之前验证文件是否存在：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $# -lt 2 ]; then</span></span>
<span class="line"><span>    echo &quot;Usage: $0 lines filename&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f $2 ]; then</span></span>
<span class="line"><span>    echo &quot;Error: File $2 not found&quot;</span></span>
<span class="line"><span>    exit 2</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    head -$1 $2</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>在下面的小脚本中，我们检查是否提供了正确数量的参数、第一个参数是否为数字，以及第二个参数代表的文件是否存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $# -lt 2 ]; then</span></span>
<span class="line"><span>    echo &quot;Usage: $0 lines filename&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $1 != [0-9]* ]]; then</span></span>
<span class="line"><span>    echo &quot;Error: $1 is not numeric&quot;</span></span>
<span class="line"><span>    exit 2</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f $2 ]; then</span></span>
<span class="line"><span>    echo &quot;Error: File $2 not found&quot;</span></span>
<span class="line"><span>    exit 3</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo top of file</span></span>
<span class="line"><span>    head -$1 $2</span></span>
<span class="line"><span>fi</span></span></code></pre></div><h3 id="重命名变量" tabindex="-1">重命名变量 <a class="header-anchor" href="#重命名变量" aria-label="Permalink to “重命名变量”">​</a></h3><p>在编写复杂的脚本时，为脚本的参数指定名称通常很有用，而不是继续将它们称为 <code>$1</code>、<code>$2</code> 等。等到第 35 行，阅读你脚本的人可能已经忘了 <code>$2</code> 表示什么。如果你将一个重要参数的值赋给 <code>$filename</code> 或 <code>$numlines</code>，那么他就不容易忘记。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ $# -lt 2 ]; then</span></span>
<span class="line"><span>    echo &quot;Usage: $0 lines filename&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    numlines=$1</span></span>
<span class="line"><span>    filename=$2</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $numlines != [0-9]* ]]; then</span></span>
<span class="line"><span>    echo &quot;Error: $numlines is not numeric&quot;</span></span>
<span class="line"><span>    exit 2</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f $ filename]; then</span></span>
<span class="line"><span>    echo &quot;Error: File $filename not found&quot;</span></span>
<span class="line"><span>    exit 3</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    echo top of file</span></span>
<span class="line"><span>    head -$numlines $filename</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>当然，这个示例脚本只是运行 <code>head</code> 命令来显示文件中的前 x 行，但它的目的是显示如何在脚本中使用内部参数来帮助确保脚本运行良好，或在失败时清晰地知道失败原因。</p><hr>`,40)),i("p",null,[s[4]||(s[4]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3387154/working-with-variables-on-linux.html"},{default:e(()=>[...s[3]||(s[3]=[n("https://www.networkworld.com/article/3387154/working-with-variables-on-linux.html",-1)])]),_:1})]),i("p",null,[s[9]||(s[9]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[5]||(s[5]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=n(" 选题：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),p(a,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[7]||(s[7]=[n("MjSeven",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const v=t(r,[["render",d]]);export{y as __pageData,v as default};
