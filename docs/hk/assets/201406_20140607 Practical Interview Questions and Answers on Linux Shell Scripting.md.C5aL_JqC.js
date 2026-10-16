import{_ as i,a0 as a,w as l,s as p,I as t,x as n,a1 as r,A as s,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"實用的Linux SHELL面試問題及答案 | LCTT x X-CMD","titleTemplate":false,"description":"實用的Linux SHELL面試問題及答案 | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"實用的Linux SHELL面試問題及答案 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"實用的Linux SHELL面試問題及答案 | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140607 Practical Interview Questions and Answers on Linux Shell Scripting","title":"實用的Linux SHELL面試問題及答案","tag":"201406","desc":""},"relativePath":"201406/20140607 Practical Interview Questions and Answers on Linux Shell Scripting.md","filePath":"[post].md"}'),u={name:"201406/20140607 Practical Interview Questions and Answers on Linux Shell Scripting.md"};function h(c,e,m,b,w,g){const o=a("Link");return l(),p("div",null,[e[14]||(e[14]=t("h1",{id:"實用的linux-shell面試問題及答案",tabindex:"-1"},[n("實用的Linux SHELL面試問題及答案 "),t("a",{class:"header-anchor",href:"#實用的linux-shell面試問題及答案","aria-label":"Permalink to “實用的Linux SHELL面試問題及答案”"},"​")],-1)),e[15]||(e[15]=t("p",null,"隨着之前有關面試的系列文章，讀者的反應比較強烈，所以我決定出一篇有關Linux Shell相關的面試文章，如果對本文有什麼意見或意見的話，歡迎反饋到我的郵箱裏。",-1)),t("p",null,[e[1]||(e[1]=n("如果想要閲讀已發表在Tecmint.com的文章，可以點擊鏈接，鏈接到[訪談系列] ",-1)),r(o,{href:"http://www.tecmint.com/category/interview-questions/"},{default:s(()=>[...e[0]||(e[0]=[n("1",-1)])]),_:1}),e[2]||(e[2]=n("，在這裏我們已經介紹很多題目即文章。，FTP，MySQL和Apache的，腳本，Linux命令等。",-1))]),e[16]||(e[16]=d(`<p><img src="http://www.tecmint.com/wp-content/uploads/2014/06/Interview-Questions-on-Shell-Scripting.png" alt="Practical Interview Question on Shell Scripting"></p><blockquote><p>實用的shell腳本面試問題</p></blockquote><p>這邊提到的5個面試問題，延續之前的有關Linux面試問題和答案。如果你是Tecmint.com的讀者，你的支持我非常感謝。</p><h3 id="_1-寫一個shell腳本來得到當前的日期-時間-用户名和當前工作目錄。" tabindex="-1">1. 寫一個shell腳本來得到當前的日期，時間，用户名和當前工作目錄。 <a class="header-anchor" href="#_1-寫一個shell腳本來得到當前的日期-時間-用户名和當前工作目錄。" aria-label="Permalink to “1. 寫一個shell腳本來得到當前的日期，時間，用户名和當前工作目錄。”">​</a></h3><blockquote><p><strong>答案</strong> : 輸出用户名，當前日期和時間，以及當前工作目錄的命令就是logname，date，who i am和pwd。</p></blockquote><p>現在，創建一個名為<strong><code>userstats.sh</code></strong>文件，將下面的代碼添加到它。</p><pre><code>#!/bin/bash 
echo &quot;Hello, $LOGNAME&quot; 
echo &quot;Current date is \`date\`&quot; 
echo &quot;User is \`who i am\`&quot; 
echo &quot;Current directory \`pwd\`&quot;
</code></pre><p>給它添加執行權限，並且執行他。</p><pre><code># chmod 755 userstats.sh 
# ./userstats.sh
</code></pre><h4 id="樣例輸出" tabindex="-1">樣例輸出 <a class="header-anchor" href="#樣例輸出" aria-label="Permalink to “樣例輸出”">​</a></h4><pre><code>Hello, avi 
Current date is Sat Jun  7 13:05:29 IST 2014 
User is avi      pts/0        2014-06-07 11:59 (:0) 
Current directory /home/avi/Desktop
</code></pre><h3 id="_2-寫一個shell腳本-進行兩個數字的相加-如果沒有輸入參數就輸出錯誤信息和一行使用説明" tabindex="-1">2.寫一個shell腳本，進行兩個數字的相加，如果沒有輸入參數就輸出錯誤信息和一行使用説明### <a class="header-anchor" href="#_2-寫一個shell腳本-進行兩個數字的相加-如果沒有輸入參數就輸出錯誤信息和一行使用説明" aria-label="Permalink to “2.寫一個shell腳本，進行兩個數字的相加，如果沒有輸入參數就輸出錯誤信息和一行使用説明###”">​</a></h3><blockquote><p><strong>答案</strong> : 下面是簡單的shell腳本以及描述，如果沒有命令列參數，它會拋出錯誤與如何使用腳本的説明。</p></blockquote><p>再創建一個名為<strong><code>twonumbers.sh</code></strong>文件和下面的內容添加到文件裏。</p><pre><code>#!/bin/bash 
# The Shebang

if [ $# -ne 2 ] 
# If two Inputs are not received from Standard Input

then 
# then execute the below statements

    echo &quot;Usage - $0   x    y&quot; 
    # print on standard output, how-to use the script (Usage - ./1.sh   x    y )

    echo &quot;        Where x and y are two nos for which I will print sum&quot; 
    # print on standard output, “Where x and y are two nos for which I will print sum ”

    exit 1 
    # Leave shell in Error Stage and before the task was successfully carried out.

fi 
# End of the if Statement.

    echo &quot;Sum of $1 and $2 is \`expr $1 + $2\`&quot;
    # If the above condition was false and user Entered two numbers as a command Line Argument,   
       it will show the sum of the entered numbers.
</code></pre><p>給他添加可執行權限，並且執行。</p><pre><code># chmod 755 two-numbers.sh
</code></pre><p><strong>情形一</strong>: 未輸入兩個數字作為命令列參數運行腳本，你將得到下面的輸出。</p><h4 id="樣例輸出-1" tabindex="-1">樣例輸出 <a class="header-anchor" href="#樣例輸出-1" aria-label="Permalink to “樣例輸出”">​</a></h4><pre><code># ./two-numbers.sh

Usage - ./two-numbers.sh   x    y 
        Where x and y are two nos for which I will print sum
</code></pre><p><strong>情形二</strong>: 當數字存在時，你會得到如圖所示的結果。</p><pre><code>$ ./two-numbers.sh 4 5 

Sum of 4 and 5 is 9
</code></pre><p>因此，上述shell腳本滿足了問題的要求。</p><h3 id="_3-你需要打印一個給定的數字的反序-如輸入10572-輸出27501-如果沒有輸入數據-應該拋出錯誤和使用腳本説明。在此之前-告訴我你需要在這裏使用的算法。" tabindex="-1">3.你需要打印一個給定的數字的反序，如輸入10572，輸出27501，如果沒有輸入數據，應該拋出錯誤和使用腳本説明。在此之前，告訴我你需要在這裏使用的算法。 <a class="header-anchor" href="#_3-你需要打印一個給定的數字的反序-如輸入10572-輸出27501-如果沒有輸入數據-應該拋出錯誤和使用腳本説明。在此之前-告訴我你需要在這裏使用的算法。" aria-label="Permalink to “3.你需要打印一個給定的數字的反序，如輸入10572，輸出27501，如果沒有輸入數據，應該拋出錯誤和使用腳本説明。在此之前，告訴我你需要在這裏使用的算法。”">​</a></h3><h4 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to “算法”">​</a></h4><ol><li>輸入的數字為n</li><li>賦值 rev=0, sd=0 (反向和單個數字設置為0)</li><li>n % 10, 將得到最左邊的數字</li><li>反向數字可以用這個方法生成 rev * 10 + sd</li><li>對輸入數字進行右位移操作（除以10）</li><li>如果n &gt; 0, 進入第三步，否則進行第七步</li><li>輸出rev</li></ol><p>現在，創建一個名為**<code>numbers.sh**</code>文件，並添加以下代碼。</p><pre><code>#!/bin/bash 
if [ $# -ne 1 ] 
then 
    echo &quot;Usage: $0   number&quot; 
    echo &quot;       I will find reverse of given number&quot; 
    echo &quot;       For eg. $0 0123, I will print 3210&quot; 
    exit 1 
fi 

n=$1 
rev=0 
sd=0 

while [ $n -gt 0 ] 
do 
    sd=\`expr $n % 10\` 
    rev=\`expr $rev \\* 10  + $sd\` 
    n=\`expr $n / 10\` 
done 
    echo  &quot;Reverse number is $rev&quot;
</code></pre><p>授予對文件的執行權限，並運行如下所示的腳本。</p><pre><code># chmod 755 numbers.h
</code></pre><p><strong>情形一</strong>: 當輸入不包含命令列參數，你將得到下面的輸出。</p><h4 id="樣例輸出-2" tabindex="-1">樣例輸出 <a class="header-anchor" href="#樣例輸出-2" aria-label="Permalink to “樣例輸出”">​</a></h4><pre><code>./numbers.sh

Usage: ./numbers.sh  number 
       I will find reverse of given number 
       For eg. ./2.sh 123, I will print 321
</code></pre><p><strong>情形二</strong>: 正常輸入</p><pre><code>$ ./numbers.sh 10572 

Reverse number is 27501
</code></pre><p>上面的腳本非常完美，輸出正是我們需要的。</p><h3 id="_4-你應該直接用終端-而不是依靠任何shell腳本來進行實數計算。你會怎麼做-比如實數7-56-2-453" tabindex="-1">4. 你應該直接用終端，而不是依靠任何shell腳本來進行實數計算。你會怎麼做（比如實數7.56+2.453）？ <a class="header-anchor" href="#_4-你應該直接用終端-而不是依靠任何shell腳本來進行實數計算。你會怎麼做-比如實數7-56-2-453" aria-label="Permalink to “4. 你應該直接用終端，而不是依靠任何shell腳本來進行實數計算。你會怎麼做（比如實數7.56+2.453）？”">​</a></h3><blockquote><p><strong>答案</strong> : 我們需要用如下所述的特殊方式使用bc命令。將7.56+2.453作為輸入通過管道進入bc中。</p></blockquote><pre><code>$ echo 7.56 + 2.453 | bc

10.013
</code></pre><h3 id="_5-你需要給出圓周率的值-精度為小數點後100位-什麼是最簡單的方法。" tabindex="-1">5. 你需要給出圓周率的值，精度為小數點後100位，什麼是最簡單的方法。 <a class="header-anchor" href="#_5-你需要給出圓周率的值-精度為小數點後100位-什麼是最簡單的方法。" aria-label="Permalink to “5. 你需要給出圓周率的值，精度為小數點後100位，什麼是最簡單的方法。”">​</a></h3><blockquote><p><strong>答案</strong> : 找圓周率的值最簡單的方法，我們只是需要發出以下命令。</p></blockquote><pre><code># pi 100 

3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067
</code></pre><p>很明顯！安裝我們必須有包<strong><code>pi</code></strong>。只用一個<strong>apt</strong>或<strong>yum</strong>命令，就能獲得所需的軟件包，同時用最簡單方法來實現這個需求。</p><p>就是這樣。我會很快在Tecmint.com發表另一個有趣的文章。至此敬請關注。別忘了向我們提供您在的評論和反饋。</p><hr>`,45)),t("p",null,[e[4]||(e[4]=n("via: ",-1)),r(o,{href:"http://www.tecmint.com/practical-interview-questions-on-linux-shell-scripting/"},{default:s(()=>[...e[3]||(e[3]=[n("http://www.tecmint.com/practical-interview-questions-on-linux-shell-scripting/",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=n("譯者：",-1)),r(o,{href:"https://github.com/MikeCoder"},{default:s(()=>[...e[5]||(e[5]=[n("MikeCoder",-1)])]),_:1}),e[8]||(e[8]=n(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:s(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[11]||(e[11]=n("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原創翻譯，",-1)),r(o,{href:"http://linux.cn/"},{default:s(()=>[...e[10]||(e[10]=[n("Linux中國",-1)])]),_:1}),e[13]||(e[13]=n(" 榮譽推出",-1))])])}const q=i(u,[["render",h]]);export{L as __pageData,q as default};
