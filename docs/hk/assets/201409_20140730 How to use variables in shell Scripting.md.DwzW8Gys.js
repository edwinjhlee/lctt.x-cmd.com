import{_ as a,a0 as i,w as p,s as d,ao as r,I as t,x as n,a1 as l,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"如何在shell腳本中使用變量 | LCTT x X-CMD","titleTemplate":false,"description":"如何在shell腳本中使用變量 | LCTT (201409) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在shell腳本中使用變量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在shell腳本中使用變量 | LCTT (201409) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201409/20140730 How to use variables in shell Scripting","title":"如何在shell腳本中使用變量","tag":"201409","desc":""},"relativePath":"201409/20140730 How to use variables in shell Scripting.md","filePath":"[post].md"}'),u={name:"201409/20140730 How to use variables in shell Scripting.md"};function g(h,e,c,m,T,$){const s=i("Link");return p(),d("div",null,[e[12]||(e[12]=r('<h1 id="如何在shell腳本中使用變量" tabindex="-1">如何在shell腳本中使用變量 <a class="header-anchor" href="#如何在shell腳本中使用變量" aria-label="Permalink to “如何在shell腳本中使用變量”">​</a></h1><p>在每種<strong>編程</strong>語言中，<strong>變量</strong>都扮演了一個重要的角色。在Linux shell腳本編程中，我們使用兩種類型的變量：<strong>系統定義的變量</strong>和<strong>用户定義的變量</strong>。</p><p>shell腳本中的變量是用來<strong>調用</strong>一個<strong>數值</strong>或者<strong>字符值</strong>的手段。與正規的編程語言不同的是，shell腳本不要求你去為變量<strong>聲明一個類型</strong>。</p><p>在本文中，我們將討論shell腳本編程中的變量及其類型，以及如何設置和使用這些變量。</p><h3 id="系統定義的變量" tabindex="-1">系統定義的變量： <a class="header-anchor" href="#系統定義的變量" aria-label="Permalink to “系統定義的變量：”">​</a></h3><p>這些變量由<strong>操作系統（Linux）自身</strong>創建並維護，通常它們以<strong>大寫字母</strong>定義，我們可以通過命令“<strong>$ set</strong>”來查看這些變量。下面列出了部分系統定義的變量：</p>',6)),e[13]||(e[13]=t("table",{width:"100%",cellspacing:"1",cellpadding:"1"},[t("tbody",null,[t("tr",null,[t("td",null,[t("strong",null,"系統定義的變量 ")]),t("td",null,[t("strong",null,"意義 ")])]),t("tr",null,[t("td",null," BASH=/bin/bash "),t("td",null," Bash Shell 名稱 ")]),t("tr",null,[t("td",null," BASH_VERSION=4.1.2(1) "),t("td",null," Bash 版本 ")]),t("tr",null,[t("td",null," COLUMNS=80 "),t("td",null," 你的屏幕寬度（列數） ")]),t("tr",null,[t("td",null," HOME=/home/linuxtechi "),t("td",null," 用户家目錄 ")]),t("tr",null,[t("td",null," LINES=25 "),t("td",null," 你的屏幕高度（行數） ")]),t("tr",null,[t("td",null," LOGNAME=LinuxTechi "),t("td",null," 當前登錄用户的名字 ")]),t("tr",null,[t("td",null," OSTYPE=Linux "),t("td",null," 操作系統類型 ")]),t("tr",null,[t("td",null," PATH=/usr/bin:/sbin:/bin:/usr/sbin "),t("td",null," 可執行文件搜索路徑 ")]),t("tr",null,[t("td",null," PS1=[\\u@\\h \\W]\\$ "),t("td",null," 命令列提示符 ")]),t("tr",null,[t("td",null," PWD=/home/linuxtechi "),t("td",null," 當前工作目錄 ")]),t("tr",null,[t("td",null," SHELL=/bin/bash "),t("td",null," Shell 名稱 ")]),t("tr",null,[t("td",null," USERNAME=linuxtechi "),t("td",null," 當前登錄的用户名 ")])])],-1)),e[14]||(e[14]=r(`<p>要打印以上變量的值，可以使用<strong>echo command</strong>命令，如下：</p><pre><code># echo $HOME
# echo $USERNAME
</code></pre><p>我們可以通過在環境變量名前前置一個美元符號來從你的腳本里輸入環境變量。請看下面腳本演示：</p><pre><code>$ cat myscript

#!/bin/bash
# display user information from the system.
echo “User info for userid: $USER”
echo UID: $UID
echo HOME: $HOME 
</code></pre><p>注意：echo命令中的<strong>環境變量</strong>在腳本運行時會被它們的值替代。同時注意，我們可以再第一個字符串的雙引號中放置<strong>$USER</strong>系統變量，而shell腳本仍然可以明白我們的意思。然而，該方法有一個<strong>缺點</strong>。看下面這個例子：</p><pre><code>$ echo “The cost of the item is $15”
The cost of the item is 5
</code></pre><p>很明顯，那不是我們説希望的。無論何時，當腳本遇見引號中的美元符號時，它都會認為你是在調用一個變量。在本例中，該腳本試着顯示<strong>變量$1</strong>（而這個變量並沒有定義），然後顯示數字5。要顯示實際上的美元符號，你<strong>必須前置</strong>一個<strong>反斜線字符</strong>：</p><pre><code>$ echo “The cost of the item is \\$15”
The cost of the item is $15
</code></pre><p>那樣好多了。反斜線允許shell腳本將<strong>美元符號</strong>解釋成為實際的美元符號，而不是變量。</p><h3 id="用户定義的變量" tabindex="-1">用户定義的變量： <a class="header-anchor" href="#用户定義的變量" aria-label="Permalink to “用户定義的變量：”">​</a></h3><p>這些變量由<strong>用户</strong>定義。shell腳本允許我們在腳本中設置並使用我們<strong>自己的變量</strong>。設置變量允許你<strong>臨時存儲數據</strong>並在腳本中使用，讓shell腳本看起來像一個真正的計算機程序。</p><p><strong>用户變量</strong>可以是任何不超過<strong>20個的字母、數字</strong>或者<strong>下劃線字符</strong>的文本字符串（LCTT 譯註：變量只能以字母或下劃線開頭）。用户變量是大小寫敏感的，因此，變量Var1和變量var1是不同的變量。這個小規則常常讓新手編寫腳本時麻煩重重。</p><p>我們可以通過<strong>等於號</strong>為變量賦值。變量，等於號和值（對於新手又是個麻煩的地方）之間不能有空格。下面是幾個給用户變量賦值的例子：</p><pre><code>var1=10
var2=-57
var3=testing
var4=“still more testing”
</code></pre><p>shell腳本為變量值<strong>自動確定數據類型</strong>。shell腳本內定義的變量會在腳本運行時保留它們的值，當腳本完成後則刪除這些值。</p><p>就像系統變量一樣，用户變量也可以使用美元符號來調用：</p><pre><code>$ cat test3
#!/bin/bash
# testing variables
days=10
guest=&quot;Katie&quot;
echo &quot;$guest checked in $days days ago&quot;
days=5
guest=&quot;Jessica&quot;
echo &quot;$guest checked in $days days ago&quot;
$
</code></pre><p>運行腳本會產生以下輸出：</p><pre><code>$ chmod u+x test3
$ ./test3
Katie checked in 10 days ago
Jessica checked in 5 days ago
$
</code></pre><p>每次變量被<strong>調用</strong>，它都會變成了當前分配給它的值。有一點很重要，當調用一個變量值時，你使用<strong>美元符號</strong>，但是當為一個變量分配一個值時，你不能用美元符號。下面用例子來説明：</p><pre><code>$ cat test4
#!/bin/bash
# assigning a variable value to another variable
value1=10
value2=$value1
echo The resulting value is $value2
$
</code></pre><p>當你使用賦值語句中<strong>value1</strong>變量的<strong>值</strong>時，你仍然必須使用美元符號。這段代碼產生了如下輸出：</p><pre><code>$ chmod u+x test4
$ ./test4
The resulting value is 10
$
</code></pre><p>如果你忘了美元符號，而又讓value2賦值行看起來像這樣：</p><p>value2=value1</p><p>你會獲得下面的輸出：</p><pre><code>$ ./test4    
The resulting value is value1
$
</code></pre><p>沒有美元符號，<strong>shell解釋</strong>變量名為<strong>普通文本字符串</strong>，這極有可能不是你想要的。</p><h3 id="在shell變量中使用反引號" tabindex="-1">在shell變量中使用反引號（\`）： <a class="header-anchor" href="#在shell變量中使用反引號" aria-label="Permalink to “在shell變量中使用反引號（\`）：”">​</a></h3><p><strong>反引號允許</strong>你將shell命令的輸出賦值給變量。雖然這似乎沒什麼大不了，但它是<strong>腳本編程</strong>中主要的構建基塊。你必須使用反引號將整個命令列包含起來：</p><pre><code>**testing=\`date\`**
</code></pre><p>shell會在<strong>反引號</strong>中運行命令，然後將輸出結果賦值給變量testing。下面的例子給出瞭如何使用一個常規shell命令的輸出結果來創建一個變量：</p><pre><code>$ cat test5
#!/bin/bash
# using the backtick character
testing=\`date\`
echo &quot;The date and time are: &quot; $testing
$
</code></pre><p>變量testing接收來自date命令的輸出結果，而它又在echo語句中被調用。運行腳本會產生如下輸出：</p><pre><code>$ chmod u+x test5
$ ./test5
The date and time are: Mon Jan 31 20:23:25 EDT 2011
</code></pre><p><strong>注</strong>：在bash中，你也可以選用$(...)語法來替換反引號(\`)，它有個優點就是可以重用（re-entrant）。</p><p>例：</p><pre><code>$ echo &quot; Today’s date &amp; time is :&quot; $(date)
Today’s date &amp; time is : Sun Jul 27 16:26:56 IST 2014 
</code></pre><hr>`,39)),t("p",null,[e[1]||(e[1]=n("via: ",-1)),l(s,{href:"http://www.linuxtechi.com/variables-in-shell-scripting/"},{default:o(()=>[...e[0]||(e[0]=[n("http://www.linuxtechi.com/variables-in-shell-scripting/",-1)])]),_:1})]),t("p",null,[e[4]||(e[4]=n("作者：",-1)),l(s,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:o(()=>[...e[2]||(e[2]=[n("Pradeep Kumar",-1)])]),_:1}),e[5]||(e[5]=n(" 譯者：",-1)),l(s,{href:"https://github.com/GOLinux"}),e[6]||(e[6]=n(" 校對：",-1)),l(s,{href:"https://github.com/wxy"},{default:o(()=>[...e[3]||(e[3]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[9]||(e[9]=n("本文由 ",-1)),l(s,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[7]||(e[7]=[n("LCTT",-1)])]),_:1}),e[10]||(e[10]=n(" 原創翻譯，",-1)),l(s,{href:"http://linux.cn/"},{default:o(()=>[...e[8]||(e[8]=[n("Linux中國",-1)])]),_:1}),e[11]||(e[11]=n(" 榮譽推出",-1))])])}const x=a(u,[["render",g]]);export{v as __pageData,x as default};
