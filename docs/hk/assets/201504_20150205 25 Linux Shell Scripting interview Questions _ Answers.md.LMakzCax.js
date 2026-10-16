import{_ as h,a0 as r,w as o,s as d,ao as i,I as e,x as a,a1 as t,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const Q=JSON.parse('{"title":"Linux Shell腳本面試25問 | LCTT x X-CMD","titleTemplate":false,"description":"Linux Shell腳本面試25問 | LCTT (201504) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux Shell腳本面試25問 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux Shell腳本面試25問 | LCTT (201504) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201504/20150205 25 Linux Shell Scripting interview Questions & Answers","title":"Linux Shell腳本面試25問","tag":"201504","desc":""},"relativePath":"201504/20150205 25 Linux Shell Scripting interview Questions & Answers.md","filePath":"[post].md"}'),p={name:"201504/20150205 25 Linux Shell Scripting interview Questions & Answers.md"};function c(w,l,b,f,u,g){const n=r("Link");return o(),d("div",null,[l[13]||(l[13]=i(`<h1 id="linux-shell腳本面試25問" tabindex="-1">Linux Shell腳本面試25問 <a class="header-anchor" href="#linux-shell腳本面試25問" aria-label="Permalink to “Linux Shell腳本面試25問”">​</a></h1><h3 id="q-1-shell腳本是什麼、它是必需的嗎" tabindex="-1">Q:1 Shell腳本是什麼、它是必需的嗎? <a class="header-anchor" href="#q-1-shell腳本是什麼、它是必需的嗎" aria-label="Permalink to “Q:1 Shell腳本是什麼、它是必需的嗎?”">​</a></h3><p>答:一個Shell腳本是一個文本文件，包含一個或多個命令。作為系統管理員，我們經常需要使用多個命令來完成一項任務，我們可以添加這些所有命令在一個文本文件(Shell腳本)來完成這些日常工作任務。</p><h3 id="q-2-什麼是默認登錄shell-如何改變指定用户的登錄shell" tabindex="-1">Q:2 什麼是默認登錄shell，如何改變指定用户的登錄shell <a class="header-anchor" href="#q-2-什麼是默認登錄shell-如何改變指定用户的登錄shell" aria-label="Permalink to “Q:2 什麼是默認登錄shell，如何改變指定用户的登錄shell”">​</a></h3><p>答:在Linux操作系統，“/bin/bash”是默認登錄shell，是在創建用户時分配的。使用chsh命令可以改變默認的shell。示例如下所示:</p><pre><code># chsh &lt;用户名&gt; -s &lt;新shell&gt;
# chsh linuxtechi -s /bin/sh
</code></pre><h3 id="q-3-可以在shell腳本中使用哪些類型的變量" tabindex="-1">Q:3 可以在shell腳本中使用哪些類型的變量? <a class="header-anchor" href="#q-3-可以在shell腳本中使用哪些類型的變量" aria-label="Permalink to “Q:3 可以在shell腳本中使用哪些類型的變量?”">​</a></h3><p>答：在shell腳本，我們可以使用兩種類型的變量：</p><ul><li>系統定義變量</li><li>用户定義變量</li></ul><p>系統變量是由系統系統自己創建的。這些變量通常由大寫字母組成，可以通過“<strong>set</strong>”命令查看。</p><p>用户變量由系統用户來生成和定義，變量的值可以通過命令“<code>echo $&lt;變量名&gt;</code>”查看。</p><h3 id="q-4-如何將標準輸出和錯誤輸出同時重定向到同一位置" tabindex="-1">Q:4 如何將標準輸出和錯誤輸出同時重定向到同一位置? <a class="header-anchor" href="#q-4-如何將標準輸出和錯誤輸出同時重定向到同一位置" aria-label="Permalink to “Q:4 如何將標準輸出和錯誤輸出同時重定向到同一位置?”">​</a></h3><p>答：這裏有兩個方法來實現：</p><p>方法一：</p><pre><code>2&gt;&amp;1 (如# ls /usr/share/doc &gt; out.txt 2&gt;&amp;1 )
</code></pre><p>方法二：</p><pre><code>&amp;&gt; (如# ls /usr/share/doc &amp;&gt; out.txt )
</code></pre><h3 id="q-5-shell腳本中-if-語法如何嵌套" tabindex="-1">Q:5 shell腳本中“if”語法如何嵌套? <a class="header-anchor" href="#q-5-shell腳本中-if-語法如何嵌套" aria-label="Permalink to “Q:5 shell腳本中“if”語法如何嵌套?”">​</a></h3><p>答：基礎語法如下：</p><pre><code>if [ 條件 ]
then
命令1
命令2
…..
else
if [ 條件 ]
then
命令1
命令2
….
else
命令1
命令2
…..
fi
fi
</code></pre><h3 id="q-6-shell腳本中-標記的用途是什麼" tabindex="-1">Q:6 shell腳本中“$?”標記的用途是什麼？ ? <a class="header-anchor" href="#q-6-shell腳本中-標記的用途是什麼" aria-label="Permalink to “Q:6 shell腳本中“$?”標記的用途是什麼？ ?”">​</a></h3><p>答：在寫一個shell腳本時，如果你想要檢查前一命令是否執行成功，在if條件中使用“$?”可以來檢查前一命令的結束狀態。簡單的例子如下：</p><pre><code>root@localhost:~# ls /usr/bin/shar
/usr/bin/shar
root@localhost:~# echo $?
0
</code></pre><p>如果結束狀態是0，説明前一個命令執行成功。</p><pre><code>root@localhost:~# ls /usr/bin/share

ls: cannot access /usr/bin/share: No such file or directory
root@localhost:~# echo $?
2
</code></pre><p>如果結束狀態不是0，説明命令執行失敗。</p><h3 id="q-7-在shell腳本中如何比較兩個數字" tabindex="-1">Q:7 在shell腳本中如何比較兩個數字 ? <a class="header-anchor" href="#q-7-在shell腳本中如何比較兩個數字" aria-label="Permalink to “Q:7 在shell腳本中如何比較兩個數字 ?”">​</a></h3><p>答：在if-then中使用測試命令（ -gt 等）來比較兩個數字，例子如下：</p><pre><code>#!/bin/bash
x=10
y=20

if [ $x -gt $y ]
then
echo “x is greater than y”
else
echo “y is greater than x”
fi
</code></pre><h3 id="q-8-shell腳本中break命令的作用" tabindex="-1">Q:8 shell腳本中break命令的作用 ? <a class="header-anchor" href="#q-8-shell腳本中break命令的作用" aria-label="Permalink to “Q:8 shell腳本中break命令的作用 ?”">​</a></h3><p>答：break命令一個簡單的用途是退出執行中的循環。我們可以在while和until循環中使用break命令跳出循環。</p><h3 id="q-9-shell腳本中continue命令的作用" tabindex="-1">Q:9 shell腳本中continue命令的作用 ? <a class="header-anchor" href="#q-9-shell腳本中continue命令的作用" aria-label="Permalink to “Q:9 shell腳本中continue命令的作用 ?”">​</a></h3><p>答：continue命令不同於break命令，它只跳出當前循環的迭代，而不是<strong>整個</strong>循環。continue命令很多時候是很有用的，例如錯誤發生，但我們依然希望繼續執行大循環的時候。</p><h3 id="q-10-告訴我shell腳本中case語句的語法" tabindex="-1">Q:10 告訴我shell腳本中Case語句的語法 ? <a class="header-anchor" href="#q-10-告訴我shell腳本中case語句的語法" aria-label="Permalink to “Q:10 告訴我shell腳本中Case語句的語法 ?”">​</a></h3><p>答：基礎語法如下：</p><pre><code>case 變量 in
值1)
命令1
命令2
…..
最後命令
!! 
值2)
命令1
命令2
……
最後命令
;;
esac
</code></pre><h3 id="q-11-shell腳本中while循環語法" tabindex="-1">Q:11 shell腳本中while循環語法 ? <a class="header-anchor" href="#q-11-shell腳本中while循環語法" aria-label="Permalink to “Q:11 shell腳本中while循環語法 ?”">​</a></h3><p>答：如同for循環，while循環只要條件成立就重複它的命令塊。不同於for循環，while循環會不斷迭代，直到它的條件不為真。基礎語法：</p><pre><code>while [ 條件 ]
do
命令…
done
</code></pre><h3 id="q-12-如何使腳本可執行" tabindex="-1">Q:12 如何使腳本可執行 ? <a class="header-anchor" href="#q-12-如何使腳本可執行" aria-label="Permalink to “Q:12 如何使腳本可執行 ?”">​</a></h3><p>答：使用chmod命令來使腳本可執行。例子如下：</p><pre><code># chmod a+x myscript.sh
</code></pre><h3 id="q-13-bin-bash-的作用" tabindex="-1">Q:13 “#!/bin/bash”的作用 ? <a class="header-anchor" href="#q-13-bin-bash-的作用" aria-label="Permalink to “Q:13 “#!/bin/bash”的作用 ?”">​</a></h3><p>答：#!/bin/bash是shell腳本的第一行，稱為釋伴（shebang）行。這裏#符號叫做hash，而! 叫做 bang。它的意思是命令通過 /bin/bash 來執行。</p><h3 id="q-14-shell腳本中for循環語法" tabindex="-1">Q:14 shell腳本中for循環語法 ? <a class="header-anchor" href="#q-14-shell腳本中for循環語法" aria-label="Permalink to “Q:14 shell腳本中for循環語法 ?”">​</a></h3><p>答：for循環的基礎語法：</p><pre><code>for 變量 in 循環列表
do
命令1
命令2
….
最後命令
done
</code></pre><h3 id="q-15-如何調試shell腳本" tabindex="-1">Q:15 如何調試shell腳本 ? <a class="header-anchor" href="#q-15-如何調試shell腳本" aria-label="Permalink to “Q:15 如何調試shell腳本 ?”">​</a></h3><p>答：使用&#39;-x&#39;參數（sh -x myscript.sh）可以調試shell腳本。另一個種方法是使用‘-nv’參數( sh -nv myscript.sh)。</p><h3 id="q-16-shell腳本如何比較字符串" tabindex="-1">Q:16 shell腳本如何比較字符串? <a class="header-anchor" href="#q-16-shell腳本如何比較字符串" aria-label="Permalink to “Q:16 shell腳本如何比較字符串?”">​</a></h3><p>答：test命令可以用來比較字符串。測試命令會通過比較字符串中的每一個字符來比較。</p><h3 id="q-17-bourne-shell-bash-中有哪些特殊的變量" tabindex="-1">Q:17 Bourne shell(bash) 中有哪些特殊的變量 ? <a class="header-anchor" href="#q-17-bourne-shell-bash-中有哪些特殊的變量" aria-label="Permalink to “Q:17 Bourne shell(bash) 中有哪些特殊的變量 ?”">​</a></h3><p>答：下面的表列出了Bourne shell為命令列設置的特殊變量。</p>`,53)),l[14]||(l[14]=e("table",{width:"659",cellspacing:"0",cellpadding:"4"},[e("colgroup",null,[e("col",{width:"173"}),e("col",{width:"453"})]),e("tbody",null,[e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"內建變量")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"解釋")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$0")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"命令列中的腳本名字")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$1")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"第一個命令列參數")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$2")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"第二個命令列參數")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"…..")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"…….")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$9")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"第九個命令列參數")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$#")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"命令列參數的數量")])]),e("tr",null,[e("td",{width:"173",valign:"top"},[e("p",{align:"left",class:"western"},"$*")]),e("td",{width:"453",valign:"top"},[e("p",{align:"left",class:"western"},"所有命令列參數，以空格隔開")])])])],-1)),l[15]||(l[15]=e("h3",{id:"q-18-how-to-test-files-in-a-shell-script",tabindex:"-1"},[a("Q:18 How to test files in a shell script ? "),e("a",{class:"header-anchor",href:"#q-18-how-to-test-files-in-a-shell-script","aria-label":"Permalink to “Q:18 How to test files in a shell script ?”"},"​")],-1)),l[16]||(l[16]=e("h3",{id:"q-18-在shell腳本中-如何測試文件",tabindex:"-1"},[a("Q:18 在shell腳本中，如何測試文件 ? "),e("a",{class:"header-anchor",href:"#q-18-在shell腳本中-如何測試文件","aria-label":"Permalink to “Q:18 在shell腳本中，如何測試文件 ?”"},"​")],-1)),l[17]||(l[17]=e("p",null,"答：test命令可以用來測試文件。基礎用法如下表格：",-1)),l[18]||(l[18]=e("table",{width:"644",cellspacing:"0",cellpadding:"4"},[e("colgroup",null,[e("col",{width:"173"}),e("col",{width:"453"})]),e("tbody",null,[e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"Test")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"用法")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-d 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在並且是目錄，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-e 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-f 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在並且是普通文件，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-r 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在並可讀，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-s 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在並且不為空，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-w 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在並可寫，返回true")])]),e("tr",{valign:"top"},[e("td",{width:"173"},[e("p",{align:"left",class:"western"},"-x 文件名")]),e("td",{width:"453"},[e("p",{align:"left",class:"western"},"如果文件存在並可執行，返回true")])])])],-1)),l[19]||(l[19]=i(`<h3 id="q-19-在shell腳本中-如何寫入註釋" tabindex="-1">Q:19 在shell腳本中，如何寫入註釋 ? <a class="header-anchor" href="#q-19-在shell腳本中-如何寫入註釋" aria-label="Permalink to “Q:19 在shell腳本中，如何寫入註釋 ?”">​</a></h3><p>答：註釋可以用來描述一個腳本可以做什麼和它是如何工作的。每一行註釋以#開頭。例子如下：</p><pre><code>#!/bin/bash
# This is a command
echo “I am logged in as $USER”
</code></pre><h3 id="q-20-如何讓-shell-就腳本得到來自終端的輸入" tabindex="-1">Q:20 如何讓 shell 就腳本得到來自終端的輸入? <a class="header-anchor" href="#q-20-如何讓-shell-就腳本得到來自終端的輸入" aria-label="Permalink to “Q:20 如何讓 shell 就腳本得到來自終端的輸入?”">​</a></h3><p>答：read命令可以讀取來自終端（使用鍵盤）的數據。read命令得到用户的輸入並置於你給出的變量中。例子如下：</p><pre><code># vi /tmp/test.sh

#!/bin/bash
echo ‘Please enter your name’
read name
echo “My Name is $name”

# ./test.sh
Please enter your name
LinuxTechi
My Name is LinuxTechi
</code></pre><h3 id="q-21-如何取消變量或取消變量賦值" tabindex="-1">Q:21 如何取消變量或取消變量賦值 ? <a class="header-anchor" href="#q-21-如何取消變量或取消變量賦值" aria-label="Permalink to “Q:21 如何取消變量或取消變量賦值 ?”">​</a></h3><p>答：“unset”命令用於取消變量或取消變量賦值。語法如下所示：</p><pre><code># unset &lt;變量名&gt;
</code></pre><h3 id="q-22-如何執行算術運算" tabindex="-1">Q:22 如何執行算術運算 ? <a class="header-anchor" href="#q-22-如何執行算術運算" aria-label="Permalink to “Q:22 如何執行算術運算 ?”">​</a></h3><p>答：有兩種方法來執行算術運算：</p><p>1.使用<code>expr</code>命令（# expr 5 + 2） 2.用一個美元符號和方括號（<code>$[ 表達式 ]</code>）例如：test=$[16 + 4] ; test=$[16 + 4]</p><h3 id="q-23-do-while語句的基本格式" tabindex="-1">Q:23 do-while語句的基本格式 ? <a class="header-anchor" href="#q-23-do-while語句的基本格式" aria-label="Permalink to “Q:23 do-while語句的基本格式 ?”">​</a></h3><p>答：do-while語句類似於while語句，但檢查條件語句之前先執行命令（LCTT 譯註：意即至少執行一次。）。下面是用do-while語句的語法</p><pre><code>do
{
命令
} while (條件)
</code></pre><h3 id="q-24-在shell腳本如何定義函數呢" tabindex="-1">Q:24 在shell腳本如何定義函數呢 ? <a class="header-anchor" href="#q-24-在shell腳本如何定義函數呢" aria-label="Permalink to “Q:24 在shell腳本如何定義函數呢 ?”">​</a></h3><p>答：函數是擁有名字的代碼塊。當我們定義代碼塊，我們就可以在我們的腳本調用函數名字，該塊就會被執行。示例如下所示：</p><pre><code>$ diskusage () { df -h ; }

譯註：下面是我給的shell函數語法，原文沒有

[ function ] 函數名 [()] 
{ 

  命令; 
  [return int;] 

}
</code></pre><h3 id="q-25-如何在shell腳本中使用bc-bash計算器" tabindex="-1">Q:25 如何在shell腳本中使用BC（bash計算器） ? <a class="header-anchor" href="#q-25-如何在shell腳本中使用bc-bash計算器" aria-label="Permalink to “Q:25 如何在shell腳本中使用BC（bash計算器） ?”">​</a></h3><p>答：使用下列格式，在shell腳本中使用bc：</p><pre><code>variable=\`echo “options; expression” | bc\`
</code></pre><hr>`,22)),e("p",null,[l[1]||(l[1]=a("via: ",-1)),t(n,{href:"http://www.linuxtechi.com/linux-shell-scripting-interview-questions-answers/"},{default:s(()=>[...l[0]||(l[0]=[a("http://www.linuxtechi.com/linux-shell-scripting-interview-questions-answers/",-1)])]),_:1})]),e("p",null,[l[5]||(l[5]=a("作者：",-1)),t(n,{href:"http://www.linuxtechi.com/author/pradeep/"},{default:s(()=>[...l[2]||(l[2]=[a("Pradeep Kumar",-1)])]),_:1}),l[6]||(l[6]=a(" 譯者：",-1)),t(n,{href:"http://vicyu.net"},{default:s(()=>[...l[3]||(l[3]=[a("VicYu/Vic020",-1)])]),_:1}),l[7]||(l[7]=a(" 校對：",-1)),t(n,{href:"https://github.com/wxy"},{default:s(()=>[...l[4]||(l[4]=[a("wxy",-1)])]),_:1})]),e("p",null,[l[10]||(l[10]=a("本文由 ",-1)),t(n,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...l[8]||(l[8]=[a("LCTT",-1)])]),_:1}),l[11]||(l[11]=a(" 原創翻譯，",-1)),t(n,{href:"http://linux.cn/"},{default:s(()=>[...l[9]||(l[9]=[a("Linux中國",-1)])]),_:1}),l[12]||(l[12]=a(" 榮譽推出",-1))])])}const q=h(p,[["render",c]]);export{Q as __pageData,q as default};
