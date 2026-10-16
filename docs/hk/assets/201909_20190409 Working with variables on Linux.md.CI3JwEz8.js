import{_ as t,a0 as o,w as c,s as h,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"在 Linux 中使用變量 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 中使用變量 | LCTT (201909) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 中使用變量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 中使用變量 | LCTT (201909) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201909/20190409 Working with variables on Linux","title":"在 Linux 中使用變量","tag":"201909","desc":""},"relativePath":"201909/20190409 Working with variables on Linux.md","filePath":"[post].md"}'),r={name:"201909/20190409 Working with variables on Linux.md"};function d(u,s,g,k,b,f){const a=o("Link");return c(),h("div",null,[s[18]||(s[18]=l('<h1 id="在-linux-中使用變量" tabindex="-1">在 Linux 中使用變量 <a class="header-anchor" href="#在-linux-中使用變量" aria-label="Permalink to “在 Linux 中使用變量”">​</a></h1><blockquote><p>變量通常看起來像 <code>$var</code> 這樣，但它們也有 <code>$1</code>、<code>$*</code>、<code>$?</code> 和 <code>$$</code> 這種形式。讓我們來看看所有這些 <code>$</code> 值可以告訴你什麼。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/201909/15/105140faf2jzyybubu1d0c.jpg" alt=""></p>',3)),i("p",null,[s[1]||(s[1]=n("有許多重要的值都存儲在 Linux 系統中，我們稱為“變量”，但實際上變量有幾種類型，並且一些有趣的命令可以幫助你使用它們。在上一篇文章中，我們研究了",-1)),p(a,{href:"https://linux.cn/article-10916-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("環境變量",-1)])]),_:1}),s[2]||(s[2]=n("以及它們定義在何處。在本文中，我們來看一看在命令列和腳本中使用的變量。",-1))]),s[19]||(s[19]=l(`<h3 id="用户變量" tabindex="-1">用户變量 <a class="header-anchor" href="#用户變量" aria-label="Permalink to “用户變量”">​</a></h3><p>雖然在命令列中設置變量非常容易，但是有一些有趣的技巧。要設置變量，你只需這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ myvar=11</span></span>
<span class="line"><span>$ myvar2=&quot;eleven&quot;</span></span></code></pre></div><p>要顯示這些值，只需這樣做：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $myvar</span></span>
<span class="line"><span>11</span></span>
<span class="line"><span>$ echo $myvar2</span></span>
<span class="line"><span>eleven</span></span></code></pre></div><p>你也可以使用這些變量。例如，要遞增一個數字變量，使用以下任意一個命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ myvar=$((myvar+1))</span></span>
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
<span class="line"><span>18</span></span></code></pre></div><p>使用其中的一些，你可以增加一個變量的值。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ myvar0=0</span></span>
<span class="line"><span>$ ((myvar0++))</span></span>
<span class="line"><span>$ echo $myvar0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ ((myvar0+=10))</span></span>
<span class="line"><span>$ echo $myvar0</span></span>
<span class="line"><span>11</span></span></code></pre></div><p>通過這些選項，你可能會發現它們是容易記憶、使用方便的。</p><p>你也可以<em>刪除</em>一個變量 -- 這意味着沒有定義它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ unset myvar</span></span>
<span class="line"><span>$ echo $myvar</span></span></code></pre></div><p>另一個有趣的選項是，你可以設置一個變量並將其設為<strong>只讀</strong>。換句話説，變量一旦設置為只讀，它的值就不能改變（除非一些非常複雜的命令列魔法才可以）。這意味着你也不能刪除它。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ readonly myvar3=1</span></span>
<span class="line"><span>$ echo $myvar3</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>$ ((myvar3++))</span></span>
<span class="line"><span>-bash: myvar3: readonly variable</span></span>
<span class="line"><span>$ unset myvar3</span></span>
<span class="line"><span>-bash: unset: myvar3: cannot unset: readonly variable</span></span></code></pre></div><p>你可以使用這些設置和遞增選項中來賦值和操作腳本中的變量，但也有一些非常有用的<em>內部變量</em>可以用於在腳本中。注意，你無法重新賦值或增加它們的值。</p><h3 id="內部變量" tabindex="-1">內部變量 <a class="header-anchor" href="#內部變量" aria-label="Permalink to “內部變量”">​</a></h3><p>在腳本中可以使用很多變量來計算參數並顯示有關腳本本身的信息。</p><ul><li><code>$1</code>、<code>$2</code>、<code>$3</code> 等表示腳本的第一個、第二個、第三個等參數。</li><li><code>$#</code> 表示參數的數量。</li><li><code>$*</code> 表示所有參數。</li><li><code>$0</code> 表示腳本的名稱。</li><li><code>$?</code> 表示先前運行的命令的返回碼（0 代表成功）。</li><li><code>$$</code> 顯示腳本的進程 ID。</li><li><code>$PPID</code> 顯示 shell 的進程 ID（腳本的父進程）。</li></ul><p>其中一些變量也適用於命令列，但顯示相關信息：</p><ul><li><code>$0</code> 顯示你正在使用的 shell 的名稱（例如，-bash）。</li><li><code>$$</code> 顯示 shell 的進程 ID。</li><li><code>$PPID</code> 顯示 shell 的父進程的進程 ID（對我來説，是 sshd）。</li></ul><p>為了查看它們的結果，如果我們將所有這些變量都放入一個腳本中，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo $0</span></span>
<span class="line"><span>echo $1</span></span>
<span class="line"><span>echo $2</span></span>
<span class="line"><span>echo $#</span></span>
<span class="line"><span>echo $*</span></span>
<span class="line"><span>echo $?</span></span>
<span class="line"><span>echo $$</span></span>
<span class="line"><span>echo $PPID</span></span></code></pre></div><p>當我們調用這個腳本時，我們會看到如下內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tryme one two three</span></span>
<span class="line"><span>/home/shs/bin/tryme     &lt;== 腳本名稱</span></span>
<span class="line"><span>one                     &lt;== 第一個參數</span></span>
<span class="line"><span>two                     &lt;== 第二個參數</span></span>
<span class="line"><span>3                       &lt;== 參數的個數</span></span>
<span class="line"><span>one two three           &lt;== 所有的參數</span></span>
<span class="line"><span>0                       &lt;== 上一條 echo 命令的返回碼</span></span>
<span class="line"><span>10410                   &lt;== 腳本的進程 ID</span></span>
<span class="line"><span>10109                   &lt;== 父進程 ID</span></span></code></pre></div><p>如果我們在腳本運行完畢後檢查 shell 的進程 ID，我們可以看到它與腳本中顯示的 PPID 相匹配：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ echo $$</span></span>
<span class="line"><span>10109                   &lt;== shell 的進程 ID</span></span></code></pre></div><p>當然，比起簡單地顯示它們的值，更有用的方式是使用它們。我們來看一看它們可能的用處。</p><p>檢查是否已提供參數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $# == 0 ]; then</span></span>
<span class="line"><span>    echo &quot;$0 filename&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>檢查特定進程是否正在運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ps -ef | grep apache2 &gt; /dev/null</span></span>
<span class="line"><span>if [ $? != 0 ]; then</span></span>
<span class="line"><span>    echo Apache is not running</span></span>
<span class="line"><span>    exit</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>在嘗試訪問文件之前驗證文件是否存在：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>if [ $# -lt 2 ]; then</span></span>
<span class="line"><span>    echo &quot;Usage: $0 lines filename&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ ! -f $2 ]; then</span></span>
<span class="line"><span>    echo &quot;Error: File $2 not found&quot;</span></span>
<span class="line"><span>    exit 2</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    head -$1 $2</span></span>
<span class="line"><span>fi</span></span></code></pre></div><p>在下面的小腳本中，我們檢查是否提供了正確數量的參數、第一個參數是否為數字，以及第二個參數代表的文件是否存在。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>fi</span></span></code></pre></div><h3 id="重命名變量" tabindex="-1">重命名變量 <a class="header-anchor" href="#重命名變量" aria-label="Permalink to “重命名變量”">​</a></h3><p>在編寫複雜的腳本時，為腳本的參數指定名稱通常很有用，而不是繼續將它們稱為 <code>$1</code>、<code>$2</code> 等。等到第 35 行，閲讀你腳本的人可能已經忘了 <code>$2</code> 表示什麼。如果你將一個重要參數的值賦給 <code>$filename</code> 或 <code>$numlines</code>，那麼他就不容易忘記。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#!/bin/bash</span></span>
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
<span class="line"><span>fi</span></span></code></pre></div><p>當然，這個示例腳本只是運行 <code>head</code> 命令來顯示文件中的前 x 行，但它的目的是顯示如何在腳本中使用內部參數來幫助確保腳本運行良好，或在失敗時清晰地知道失敗原因。</p><hr>`,40)),i("p",null,[s[4]||(s[4]=n("via: ",-1)),p(a,{href:"https://www.networkworld.com/article/3387154/working-with-variables-on-linux.html"},{default:e(()=>[...s[3]||(s[3]=[n("https://www.networkworld.com/article/3387154/working-with-variables-on-linux.html",-1)])]),_:1})]),i("p",null,[s[9]||(s[9]=n("作者：",-1)),p(a,{href:"https://www.networkworld.com/author/Sandra-Henry_Stocker/"},{default:e(()=>[...s[5]||(s[5]=[n("Sandra Henry-Stocker",-1)])]),_:1}),s[10]||(s[10]=n(" 選題：",-1)),p(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[6]||(s[6]=[n("lujun9972",-1)])]),_:1}),s[11]||(s[11]=n(" 譯者：",-1)),p(a,{href:"https://github.com/MjSeven"},{default:e(()=>[...s[7]||(s[7]=[n("MjSeven",-1)])]),_:1}),s[12]||(s[12]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中國",-1)])]),_:1}),s[17]||(s[17]=n(" 榮譽推出",-1))])])}const v=t(r,[["render",d]]);export{y as __pageData,v as default};
