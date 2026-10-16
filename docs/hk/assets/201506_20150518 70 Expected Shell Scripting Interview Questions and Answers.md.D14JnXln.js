import{_ as n,a0 as t,w as d,s as c,ao as h,I as o,x as a,a1 as i,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Shell 腳本面試問題大全 | LCTT x X-CMD","titleTemplate":false,"description":"Shell 腳本面試問題大全 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell 腳本面試問題大全 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell 腳本面試問題大全 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150518 70 Expected Shell Scripting Interview Questions and Answers","title":"Shell 腳本面試問題大全","tag":"201506","desc":""},"relativePath":"201506/20150518 70 Expected Shell Scripting Interview Questions and Answers.md","filePath":"[post].md"}'),s={name:"201506/20150518 70 Expected Shell Scripting Interview Questions and Answers.md"};function p(b,e,m,_,u,x){const r=t("Link");return d(),c("div",null,[e[16]||(e[16]=h(`<h1 id="shell-腳本面試問題大全" tabindex="-1">Shell 腳本面試問題大全 <a class="header-anchor" href="#shell-腳本面試問題大全" aria-label="Permalink to “Shell 腳本面試問題大全”">​</a></h1><p>我們為你的面試準備選擇了 70 個你可能遇到的 shell 腳面問題及解答。瞭解腳本或至少知道基礎知識對系統管理員來説至關重要，它也有助於你在工作環境中自動完成很多任務。在過去的幾年裏，我們注意到所有的 linux 工作職位都要求腳本技能。</p><h3 id="_1-如何向腳本傳遞參數" tabindex="-1">1) 如何向腳本傳遞參數 ? <a class="header-anchor" href="#_1-如何向腳本傳遞參數" aria-label="Permalink to “1) 如何向腳本傳遞參數 ?”">​</a></h3><pre><code>./script argument
</code></pre><p><strong>例子</strong> : 顯示文件名稱腳本</p><pre><code>./show.sh file1.txt

cat show.sh
#!/bin/bash
cat $1
</code></pre><h3 id="_2-如何在腳本中使用參數" tabindex="-1">2) 如何在腳本中使用參數 ? <a class="header-anchor" href="#_2-如何在腳本中使用參數" aria-label="Permalink to “2) 如何在腳本中使用參數 ?”">​</a></h3><p>第一個參數 : $1，第二個參數 : $2</p><p>例子 : 腳本會複製文件(arg1) 到目標地址(arg2)</p><pre><code>./copy.sh file1.txt /tmp/

cat copy.sh
#!/bin/bash
cp $1 $2
</code></pre><h3 id="_3-如何計算傳遞進來的參數" tabindex="-1">3) 如何計算傳遞進來的參數 ? <a class="header-anchor" href="#_3-如何計算傳遞進來的參數" aria-label="Permalink to “3) 如何計算傳遞進來的參數 ?”">​</a></h3><pre><code>$#
</code></pre><h3 id="_4-如何在腳本中獲取腳本名稱" tabindex="-1">4) 如何在腳本中獲取腳本名稱 ? <a class="header-anchor" href="#_4-如何在腳本中獲取腳本名稱" aria-label="Permalink to “4) 如何在腳本中獲取腳本名稱 ?”">​</a></h3><pre><code>$0
</code></pre><h3 id="_5-如何檢查之前的命令是否運行成功" tabindex="-1">5) 如何檢查之前的命令是否運行成功 ? <a class="header-anchor" href="#_5-如何檢查之前的命令是否運行成功" aria-label="Permalink to “5) 如何檢查之前的命令是否運行成功 ?”">​</a></h3><pre><code>$?
</code></pre><h3 id="_6-如何獲取文件的最後一行" tabindex="-1">6) 如何獲取文件的最後一行 ? <a class="header-anchor" href="#_6-如何獲取文件的最後一行" aria-label="Permalink to “6) 如何獲取文件的最後一行 ?”">​</a></h3><pre><code>tail -1
</code></pre><h3 id="_7-如何獲取文件的第一行" tabindex="-1">7) 如何獲取文件的第一行 ? <a class="header-anchor" href="#_7-如何獲取文件的第一行" aria-label="Permalink to “7) 如何獲取文件的第一行 ?”">​</a></h3><pre><code>head -1
</code></pre><h3 id="_8-如何獲取一個文件每一行的第三個元素" tabindex="-1">8) 如何獲取一個文件每一行的第三個元素 ? <a class="header-anchor" href="#_8-如何獲取一個文件每一行的第三個元素" aria-label="Permalink to “8) 如何獲取一個文件每一行的第三個元素 ?”">​</a></h3><pre><code>awk &#39;{print $3}&#39;
</code></pre><h3 id="_9-假如文件中每行第一個元素是-find-如何獲取第二個元素" tabindex="-1">9) 假如文件中每行第一個元素是 FIND，如何獲取第二個元素 <a class="header-anchor" href="#_9-假如文件中每行第一個元素是-find-如何獲取第二個元素" aria-label="Permalink to “9) 假如文件中每行第一個元素是 FIND，如何獲取第二個元素”">​</a></h3><pre><code>awk &#39;{ if ($1 == &quot;FIND&quot;) print $2}&#39;
</code></pre><h3 id="_10-如何調試-bash-腳本" tabindex="-1">10) 如何調試 bash 腳本 <a class="header-anchor" href="#_10-如何調試-bash-腳本" aria-label="Permalink to “10) 如何調試 bash 腳本”">​</a></h3><p>將 -xv 參數加到 #!/bin/bash 後</p><p>例子：</p><pre><code>#!/bin/bash –xv
</code></pre><h3 id="_11-舉例如何寫一個函數" tabindex="-1">11) 舉例如何寫一個函數 ? <a class="header-anchor" href="#_11-舉例如何寫一個函數" aria-label="Permalink to “11) 舉例如何寫一個函數 ?”">​</a></h3><pre><code>function example {
echo &quot;Hello world!&quot;
}
</code></pre><h3 id="_12-如何向連接兩個字符串" tabindex="-1">12) 如何向連接兩個字符串 ? <a class="header-anchor" href="#_12-如何向連接兩個字符串" aria-label="Permalink to “12) 如何向連接兩個字符串 ?”">​</a></h3><pre><code>V1=&quot;Hello&quot;
V2=&quot;World&quot;
V3=$V1+$V2
echo $V3
</code></pre><p>輸出</p><pre><code>Hello+World
</code></pre><h3 id="_13-如何進行兩個整數相加" tabindex="-1">13) 如何進行兩個整數相加 ? <a class="header-anchor" href="#_13-如何進行兩個整數相加" aria-label="Permalink to “13) 如何進行兩個整數相加 ?”">​</a></h3><pre><code>V1=1
V2=2
V3=$V1+$V2
echo $V3
</code></pre><p>輸出</p><pre><code>3
</code></pre><h3 id="_14-如何檢查文件系統中是否存在某個文件" tabindex="-1">14) 如何檢查文件系統中是否存在某個文件 ? <a class="header-anchor" href="#_14-如何檢查文件系統中是否存在某個文件" aria-label="Permalink to “14) 如何檢查文件系統中是否存在某個文件 ?”">​</a></h3><pre><code>if [ -f /var/log/messages ]
then
echo &quot;File exists&quot;
fi
</code></pre><h3 id="_15-寫出-shell-腳本中所有循環語法" tabindex="-1">15) 寫出 shell 腳本中所有循環語法 ? <a class="header-anchor" href="#_15-寫出-shell-腳本中所有循環語法" aria-label="Permalink to “15) 寫出 shell 腳本中所有循環語法 ?”">​</a></h3><h4 id="for-循環" tabindex="-1">for 循環 : <a class="header-anchor" href="#for-循環" aria-label="Permalink to “for 循環 :”">​</a></h4><pre><code>for i in $( ls ); do
echo item: $i
done
</code></pre><h4 id="while-循環" tabindex="-1">while 循環 : <a class="header-anchor" href="#while-循環" aria-label="Permalink to “while 循環 :”">​</a></h4><pre><code>#!/bin/bash
COUNTER=0
while [ $COUNTER -lt 10 ]; do
echo The counter is $COUNTER
let COUNTER=COUNTER+1
done
</code></pre><h4 id="until-循環" tabindex="-1">until 循環 : <a class="header-anchor" href="#until-循環" aria-label="Permalink to “until 循環 :”">​</a></h4><pre><code>#!/bin/bash
COUNTER=20
until [ $COUNTER -lt 10 ]; do
echo COUNTER $COUNTER
let COUNTER-=1
done
</code></pre><h3 id="_16-每個腳本開始的-bin-sh-或-bin-bash-表示什麼意思" tabindex="-1">16) 每個腳本開始的 #!/bin/sh 或 #!/bin/bash 表示什麼意思 ? <a class="header-anchor" href="#_16-每個腳本開始的-bin-sh-或-bin-bash-表示什麼意思" aria-label="Permalink to “16) 每個腳本開始的 #!/bin/sh 或 #!/bin/bash 表示什麼意思 ?”">​</a></h3>`,48)),o("p",null,[e[1]||(e[1]=a("這一行説明要使用的 shell。#!/bin/bash 表示腳本使用 /bin/bash。對於 python 腳本，就是 #!/usr/bin/python。（LCTT譯註：這一行稱之為",-1)),i(r,{href:"https://linux.cn/article-3664-1.html"},{default:l(()=>[...e[0]||(e[0]=[a("釋伴行",-1)])]),_:1}),e[2]||(e[2]=a("。）",-1))]),e[17]||(e[17]=h(`<h3 id="_17-如何獲取文本文件的第-10-行" tabindex="-1">17) 如何獲取文本文件的第 10 行 ? <a class="header-anchor" href="#_17-如何獲取文本文件的第-10-行" aria-label="Permalink to “17) 如何獲取文本文件的第 10 行 ?”">​</a></h3><pre><code>head -10 file|tail -1
</code></pre><h3 id="_18-bash-腳本文件的第一個符號是什麼" tabindex="-1">18) bash 腳本文件的第一個符號是什麼 <a class="header-anchor" href="#_18-bash-腳本文件的第一個符號是什麼" aria-label="Permalink to “18) bash 腳本文件的第一個符號是什麼”">​</a></h3><pre><code>#
</code></pre><h3 id="_19-命令-z-echo-0-echo-1-的輸出是什麼" tabindex="-1">19) 命令：[ -z &quot;&quot; ] &amp;&amp; echo 0 || echo 1 的輸出是什麼 <a class="header-anchor" href="#_19-命令-z-echo-0-echo-1-的輸出是什麼" aria-label="Permalink to “19) 命令：[ -z  ] &amp;&amp; echo 0 || echo 1 的輸出是什麼”">​</a></h3><pre><code>0
</code></pre><h3 id="_20-命令-export-有什麼用" tabindex="-1">20) 命令 “export” 有什麼用 ? <a class="header-anchor" href="#_20-命令-export-有什麼用" aria-label="Permalink to “20) 命令 “export” 有什麼用 ?”">​</a></h3><p>使變量在子 shell 中可用。</p><h3 id="_21-如何在後台運行腳本" tabindex="-1">21) 如何在後台運行腳本 ? <a class="header-anchor" href="#_21-如何在後台運行腳本" aria-label="Permalink to “21) 如何在後台運行腳本 ?”">​</a></h3><p>在腳本後面添加 “&amp;”。</p><h3 id="_22-chmod-500-script-做什麼" tabindex="-1">22) &quot;chmod 500 script&quot; 做什麼 ? <a class="header-anchor" href="#_22-chmod-500-script-做什麼" aria-label="Permalink to “22) chmod 500 script 做什麼 ?”">​</a></h3><p>使腳本所有者擁有可執行權限。</p><h3 id="_23-做什麼" tabindex="-1">23) &quot;&gt;&quot; 做什麼 ? <a class="header-anchor" href="#_23-做什麼" aria-label="Permalink to “23) &gt; 做什麼 ?”">​</a></h3><p>重定向輸出流到文件或另一個流。</p><h3 id="_24-和-有什麼區別" tabindex="-1">24) &amp; 和 &amp;&amp; 有什麼區別 <a class="header-anchor" href="#_24-和-有什麼區別" aria-label="Permalink to “24) &amp; 和 &amp;&amp; 有什麼區別”">​</a></h3><ul><li>&amp; - 希望腳本在後台運行的時候使用它</li><li>&amp;&amp; - 當前一個腳本成功完成才執行後面的命令/腳本的時候使用它</li></ul><h3 id="_25-什麼時候要在-condition-之前使用-if" tabindex="-1">25) 什麼時候要在 [ condition ] 之前使用 “if” ? <a class="header-anchor" href="#_25-什麼時候要在-condition-之前使用-if" aria-label="Permalink to “25) 什麼時候要在 [ condition ] 之前使用 “if” ?”">​</a></h3><p>當條件滿足時需要運行多條命令的時候。</p><h3 id="_26-命令-name-john-echo-my-name-is-name-的輸出是什麼" tabindex="-1">26) 命令： name=John &amp;&amp; echo &#39;My name is $name&#39; 的輸出是什麼 <a class="header-anchor" href="#_26-命令-name-john-echo-my-name-is-name-的輸出是什麼" aria-label="Permalink to “26) 命令： name=John &amp;&amp; echo &#39;My name is $name&#39; 的輸出是什麼”">​</a></h3><pre><code>My name is $name
</code></pre><h3 id="_27-bash-shell-腳本中哪個符號用於註釋" tabindex="-1">27) bash shell 腳本中哪個符號用於註釋 ? <a class="header-anchor" href="#_27-bash-shell-腳本中哪個符號用於註釋" aria-label="Permalink to “27) bash shell 腳本中哪個符號用於註釋 ?”">​</a></h3><pre><code>#
</code></pre><h3 id="_28-命令-echo-new-variable-的輸出是什麼" tabindex="-1">28) 命令: echo \${new:-variable} 的輸出是什麼 <a class="header-anchor" href="#_28-命令-echo-new-variable-的輸出是什麼" aria-label="Permalink to “28) 命令: echo \${new:-variable} 的輸出是什麼”">​</a></h3><pre><code>variable
</code></pre><h3 id="_29-和-引號有什麼區別" tabindex="-1">29) &#39; 和 &quot; 引號有什麼區別 ? <a class="header-anchor" href="#_29-和-引號有什麼區別" aria-label="Permalink to “29)  &#39; 和  引號有什麼區別 ?”">​</a></h3><ul><li>&#39; - 當我們不希望把變量轉換為值的時候使用它。</li><li>&quot; - 會計算所有變量的值並用值代替。</li></ul><h3 id="_30-如何在腳本文件中重定向標準輸出和標準錯誤流到-log-txt-文件" tabindex="-1">30) 如何在腳本文件中重定向標準輸出和標準錯誤流到 log.txt 文件 ? <a class="header-anchor" href="#_30-如何在腳本文件中重定向標準輸出和標準錯誤流到-log-txt-文件" aria-label="Permalink to “30) 如何在腳本文件中重定向標準輸出和標準錯誤流到 log.txt 文件 ?”">​</a></h3><p>在腳本文件中添加 &quot;exec &gt;log.txt 2&gt;&amp;1&quot; 命令。</p><h3 id="_31-如何只用-echo-命令獲取字符串變量的一部分" tabindex="-1">31) 如何只用 echo 命令獲取字符串變量的一部分 ? <a class="header-anchor" href="#_31-如何只用-echo-命令獲取字符串變量的一部分" aria-label="Permalink to “31) 如何只用 echo 命令獲取字符串變量的一部分 ?”">​</a></h3><pre><code>echo \${variable:x:y}
x - 起始位置
y - 長度
</code></pre><p>例子:</p><pre><code>variable=&quot;My name is Petras, and I am developer.&quot;
echo \${variable:11:6} # 會顯示 Petras
</code></pre><h3 id="_32-如果給定字符串-variable-user-123-321-home-dir-如何只用-echo-命令獲取-home-dir" tabindex="-1">32) 如果給定字符串 variable=&quot;User:123:321:/home/dir&quot;，如何只用 echo 命令獲取 home_dir ? <a class="header-anchor" href="#_32-如果給定字符串-variable-user-123-321-home-dir-如何只用-echo-命令獲取-home-dir" aria-label="Permalink to “32) 如果給定字符串 variable=User:123:321:/home/dir，如何只用 echo 命令獲取 home_dir ?”">​</a></h3><pre><code>echo \${variable#*:*:*:}
</code></pre><p>或</p><pre><code>echo \${variable##*:}
</code></pre><h3 id="_33-如何從上面的字符串中獲取-user" tabindex="-1">33) 如何從上面的字符串中獲取 “User” ? <a class="header-anchor" href="#_33-如何從上面的字符串中獲取-user" aria-label="Permalink to “33) 如何從上面的字符串中獲取 “User”  ?”">​</a></h3><pre><code>echo \${variable%:*:*:*}
</code></pre><p>或</p><pre><code>echo \${variable%%:*}
</code></pre><h3 id="_34-如何使用-awk-列出-uid-小於-100-的用户" tabindex="-1">34) 如何使用 awk 列出 UID 小於 100 的用户 ? <a class="header-anchor" href="#_34-如何使用-awk-列出-uid-小於-100-的用户" aria-label="Permalink to “34) 如何使用 awk 列出 UID 小於 100 的用户 ?”">​</a></h3><pre><code>awk -F: &#39;$3&lt;100&#39; /etc/passwd
</code></pre><h3 id="_35-寫程序為用户計算主組數目並顯示次數和組名" tabindex="-1">35) 寫程序為用户計算主組數目並顯示次數和組名 <a class="header-anchor" href="#_35-寫程序為用户計算主組數目並顯示次數和組名" aria-label="Permalink to “35) 寫程序為用户計算主組數目並顯示次數和組名”">​</a></h3><pre><code>cat /etc/passwd|cut -d: -f4|sort|uniq -c|while read c g
do
{ echo $c; grep :$g: /etc/group|cut -d: -f1;}|xargs -n 2
done
</code></pre><h3 id="_36-如何在-bash-shell-中更改標準的域分隔符為" tabindex="-1">36) 如何在 bash shell 中更改標準的域分隔符為 &quot;:&quot; ? <a class="header-anchor" href="#_36-如何在-bash-shell-中更改標準的域分隔符為" aria-label="Permalink to “36) 如何在 bash shell 中更改標準的域分隔符為 : ?”">​</a></h3><pre><code>IFS=&quot;:&quot;
</code></pre><h3 id="_37-如何獲取變量長度" tabindex="-1">37) 如何獲取變量長度 ? <a class="header-anchor" href="#_37-如何獲取變量長度" aria-label="Permalink to “37) 如何獲取變量長度 ?”">​</a></h3><pre><code>\${#variable}
</code></pre><h3 id="_38-如何打印變量的最後-5-個字符" tabindex="-1">38) 如何打印變量的最後 5 個字符 ? <a class="header-anchor" href="#_38-如何打印變量的最後-5-個字符" aria-label="Permalink to “38) 如何打印變量的最後 5 個字符 ?”">​</a></h3><pre><code>echo \${variable: -5}
</code></pre><h3 id="_39-variable-10-和-variable-10-有什麼區別" tabindex="-1">39) \${variable:-10} 和 \${variable: -10} 有什麼區別? <a class="header-anchor" href="#_39-variable-10-和-variable-10-有什麼區別" aria-label="Permalink to “39) \${variable:-10} 和 \${variable: -10} 有什麼區別?”">​</a></h3><ul><li>\${variable:-10} - 如果之前沒有給 variable 賦值則輸出 10</li><li>\${variable: -10} - 輸出 variable 的最後 10 個字符</li></ul><h3 id="_40-如何只用-echo-命令替換字符串的一部分" tabindex="-1">40) 如何只用 echo 命令替換字符串的一部分 ? <a class="header-anchor" href="#_40-如何只用-echo-命令替換字符串的一部分" aria-label="Permalink to “40) 如何只用 echo 命令替換字符串的一部分 ?”">​</a></h3><pre><code>echo \${variable//pattern/replacement}
</code></pre><h3 id="_41-哪個命令將命令替換為大寫" tabindex="-1">41) 哪個命令將命令替換為大寫 ? <a class="header-anchor" href="#_41-哪個命令將命令替換為大寫" aria-label="Permalink to “41) 哪個命令將命令替換為大寫 ?”">​</a></h3><pre><code>tr &#39;[:lower:]&#39; &#39;[:upper:]&#39;
</code></pre><h3 id="_42-如何計算本地用户數目" tabindex="-1">42) 如何計算本地用户數目 ? <a class="header-anchor" href="#_42-如何計算本地用户數目" aria-label="Permalink to “42) 如何計算本地用户數目 ?”">​</a></h3><p>wc -l /etc/passwd|cut -d&quot; &quot; -f1 或者 cat /etc/passwd|wc -l</p><h3 id="_43-不用-wc-命令如何計算字符串中的單詞數目" tabindex="-1">43) 不用 wc 命令如何計算字符串中的單詞數目 ? <a class="header-anchor" href="#_43-不用-wc-命令如何計算字符串中的單詞數目" aria-label="Permalink to “43) 不用 wc 命令如何計算字符串中的單詞數目 ?”">​</a></h3><pre><code>set \${string}
echo $#
</code></pre><h3 id="_44-export-variable-或-export-variable-哪個正確" tabindex="-1">44) &quot;export $variable&quot; 或 &quot;export variable&quot; 哪個正確 ? <a class="header-anchor" href="#_44-export-variable-或-export-variable-哪個正確" aria-label="Permalink to “44)  export $variable 或 export variable 哪個正確 ?”">​</a></h3><pre><code>export variable
</code></pre><h3 id="_45-如何列出第二個字母是-a-或-b-的文件" tabindex="-1">45) 如何列出第二個字母是 a 或 b 的文件 ? <a class="header-anchor" href="#_45-如何列出第二個字母是-a-或-b-的文件" aria-label="Permalink to “45) 如何列出第二個字母是 a 或 b 的文件 ?”">​</a></h3><pre><code>ls -d ?[ab]*
</code></pre><h3 id="_46-如何將整數-a-加到-b-並賦值給-c" tabindex="-1">46) 如何將整數 a 加到 b 並賦值給 c ? <a class="header-anchor" href="#_46-如何將整數-a-加到-b-並賦值給-c" aria-label="Permalink to “46) 如何將整數 a 加到 b 並賦值給 c ?”">​</a></h3><pre><code>c=$((a+b))
</code></pre><p>或</p><pre><code>c=\`expr $a + $b\`
</code></pre><p>或</p><pre><code>c=\`echo &quot;$a+$b&quot;|bc\`
</code></pre><h3 id="_47-如何去除字符串中的所有空格" tabindex="-1">47) 如何去除字符串中的所有空格 ? <a class="header-anchor" href="#_47-如何去除字符串中的所有空格" aria-label="Permalink to “47) 如何去除字符串中的所有空格 ?”">​</a></h3><pre><code>echo $string|tr -d &quot; &quot;
</code></pre><h3 id="_48-重寫這個命令-將輸出變量轉換為複數-item-car-echo-i-like-item" tabindex="-1">48) 重寫這個命令，將輸出變量轉換為複數: item=&quot;car&quot;; echo &quot;I like $item&quot; ? <a class="header-anchor" href="#_48-重寫這個命令-將輸出變量轉換為複數-item-car-echo-i-like-item" aria-label="Permalink to “48) 重寫這個命令，將輸出變量轉換為複數: item=car; echo I like $item ?”">​</a></h3><pre><code>item=&quot;car&quot;; echo &quot;I like \${item}s&quot;
</code></pre><h3 id="_49-寫出輸出數字-0-到-100-中-3-的倍數-0-3-6-9-的命令" tabindex="-1">49) 寫出輸出數字 0 到 100 中 3 的倍數(0 3 6 9 …)的命令 ? <a class="header-anchor" href="#_49-寫出輸出數字-0-到-100-中-3-的倍數-0-3-6-9-的命令" aria-label="Permalink to “49) 寫出輸出數字 0 到 100 中 3 的倍數(0 3 6 9 …)的命令 ?”">​</a></h3><pre><code>for i in {0..100..3}; do echo $i; done
</code></pre><p>或</p><pre><code>for (( i=0; i&lt;=100; i=i+3 )); do echo &quot;Welcome $i times&quot;; done
</code></pre><h3 id="_50-如何打印傳遞給腳本的所有參數" tabindex="-1">50) 如何打印傳遞給腳本的所有參數 ? <a class="header-anchor" href="#_50-如何打印傳遞給腳本的所有參數" aria-label="Permalink to “50) 如何打印傳遞給腳本的所有參數 ?”">​</a></h3><pre><code>echo $*
</code></pre><p>或</p><pre><code>echo $@
</code></pre><h3 id="_51-a-b-和-a-eq-b-有什麼區別" tabindex="-1">51) [ $a == $b ] 和 [ $a -eq $b ] 有什麼區別 <a class="header-anchor" href="#_51-a-b-和-a-eq-b-有什麼區別" aria-label="Permalink to “51)  [ $a == $b ] 和 [ $a -eq $b ] 有什麼區別”">​</a></h3><ul><li>[ $a == $b ] - 用於字符串比較</li><li>[ $a -eq $b ] - 用於數字比較</li></ul><h3 id="_52-和-有什麼區別" tabindex="-1">52) = 和 == 有什麼區別 <a class="header-anchor" href="#_52-和-有什麼區別" aria-label="Permalink to “52) = 和 == 有什麼區別”">​</a></h3><ul><li>= - 用於為變量複製</li><li>== - 用於字符串比較</li></ul><h3 id="_53-寫出測試-a-是否大於-12-的命令" tabindex="-1">53) 寫出測試 $a 是否大於 12 的命令 ? <a class="header-anchor" href="#_53-寫出測試-a-是否大於-12-的命令" aria-label="Permalink to “53) 寫出測試 $a 是否大於 12 的命令 ?”">​</a></h3><pre><code>[ $a -gt 12 ]
</code></pre><h3 id="_54-寫出測試-b-是否小於等於-12-的命令" tabindex="-1">54) 寫出測試 $b 是否小於等於 12 的命令 ? <a class="header-anchor" href="#_54-寫出測試-b-是否小於等於-12-的命令" aria-label="Permalink to “54) 寫出測試 $b 是否小於等於 12 的命令 ?”">​</a></h3><pre><code>[ $b -le 12 ]
</code></pre><h3 id="_55-如何檢查字符串是否以字母-abc-開頭" tabindex="-1">55) 如何檢查字符串是否以字母 &quot;abc&quot; 開頭 ? <a class="header-anchor" href="#_55-如何檢查字符串是否以字母-abc-開頭" aria-label="Permalink to “55) 如何檢查字符串是否以字母 abc 開頭 ?”">​</a></h3><pre><code>[[ $string == abc* ]]
</code></pre><h3 id="_56-string-abc-和-string-abc-有什麼區別" tabindex="-1">56) [[ $string == abc* ]] 和 [[ $string == &quot;abc*&quot; ]] 有什麼區別 <a class="header-anchor" href="#_56-string-abc-和-string-abc-有什麼區別" aria-label="Permalink to “56) [[ $string == abc* ]] 和 [[ $string == abc* ]] 有什麼區別”">​</a></h3><ul><li>[[ $string == abc* ]] - 檢查字符串是否以字母 abc 開頭</li><li>[[ $string == &quot;abc*&quot; ]] - 檢查字符串是否完全等於 abc*</li></ul><h3 id="_57-如何列出以-ab-或-xy-開頭的用户名" tabindex="-1">57) 如何列出以 ab 或 xy 開頭的用户名 ? <a class="header-anchor" href="#_57-如何列出以-ab-或-xy-開頭的用户名" aria-label="Permalink to “57) 如何列出以 ab 或 xy 開頭的用户名 ?”">​</a></h3><pre><code>egrep &quot;^ab|^xy&quot; /etc/passwd|cut -d: -f1
</code></pre><h3 id="_58-bash-中-表示什麼意思" tabindex="-1">58) bash 中 $! 表示什麼意思 ? <a class="header-anchor" href="#_58-bash-中-表示什麼意思" aria-label="Permalink to “58) bash 中 $! 表示什麼意思 ?”">​</a></h3><p>後台最近執行命令的 PID.</p><h3 id="_59-表示什麼意思" tabindex="-1">59) $? 表示什麼意思 ? <a class="header-anchor" href="#_59-表示什麼意思" aria-label="Permalink to “59) $? 表示什麼意思 ?”">​</a></h3><p>前台最近命令的結束狀態。</p><h3 id="_60-如何輸出當前-shell-的-pid" tabindex="-1">60) 如何輸出當前 shell 的 PID ? <a class="header-anchor" href="#_60-如何輸出當前-shell-的-pid" aria-label="Permalink to “60) 如何輸出當前 shell 的 PID ?”">​</a></h3><pre><code>echo $$
</code></pre><h3 id="_61-如何獲取傳遞給腳本的參數數目" tabindex="-1">61) 如何獲取傳遞給腳本的參數數目 ? <a class="header-anchor" href="#_61-如何獲取傳遞給腳本的參數數目" aria-label="Permalink to “61) 如何獲取傳遞給腳本的參數數目 ?”">​</a></h3><pre><code>echo $#
</code></pre><p>（LCTT 譯註：和第3題重複了。）</p><h3 id="_62-和-有什麼區別" tabindex="-1">62) $* 和 $@ 有什麼區別 <a class="header-anchor" href="#_62-和-有什麼區別" aria-label="Permalink to “62) $* 和 $@ 有什麼區別”">​</a></h3><ul><li>$* - 以一個字符串形式輸出所有傳遞到腳本的參數</li><li>$@ - 以 $IFS 為分隔符列出所有傳遞到腳本中的參數</li></ul><h3 id="_63-如何在-bash-中定義數組" tabindex="-1">63) 如何在 bash 中定義數組 ? <a class="header-anchor" href="#_63-如何在-bash-中定義數組" aria-label="Permalink to “63) 如何在 bash 中定義數組 ?”">​</a></h3><pre><code>array=(&quot;Hi&quot; &quot;my&quot; &quot;name&quot; &quot;is&quot;)
</code></pre><h3 id="_64-如何打印數組的第一個元素" tabindex="-1">64) 如何打印數組的第一個元素 ? <a class="header-anchor" href="#_64-如何打印數組的第一個元素" aria-label="Permalink to “64) 如何打印數組的第一個元素 ?”">​</a></h3><pre><code>echo \${array[0]}
</code></pre><h3 id="_65-如何打印數組的所有元素" tabindex="-1">65) 如何打印數組的所有元素 ? <a class="header-anchor" href="#_65-如何打印數組的所有元素" aria-label="Permalink to “65) 如何打印數組的所有元素 ?”">​</a></h3><pre><code>echo \${array[@]}
</code></pre><h3 id="_66-如何輸出所有數組索引" tabindex="-1">66) 如何輸出所有數組索引 ? <a class="header-anchor" href="#_66-如何輸出所有數組索引" aria-label="Permalink to “66) 如何輸出所有數組索引 ?”">​</a></h3><pre><code>echo \${!array[@]}
</code></pre><h3 id="_67-如何移除數組中索引為-2-的元素" tabindex="-1">67) 如何移除數組中索引為 2 的元素 ? <a class="header-anchor" href="#_67-如何移除數組中索引為-2-的元素" aria-label="Permalink to “67) 如何移除數組中索引為 2 的元素 ?”">​</a></h3><pre><code>unset array[2]
</code></pre><h3 id="_68-如何在數組中添加-id-為-333-的元素" tabindex="-1">68) 如何在數組中添加 id 為 333 的元素 ? <a class="header-anchor" href="#_68-如何在數組中添加-id-為-333-的元素" aria-label="Permalink to “68) 如何在數組中添加 id 為 333 的元素 ?”">​</a></h3><pre><code>array[333]=&quot;New_element&quot;
</code></pre><h3 id="_69-shell-腳本如何獲取輸入的值" tabindex="-1">69) shell 腳本如何獲取輸入的值 ? <a class="header-anchor" href="#_69-shell-腳本如何獲取輸入的值" aria-label="Permalink to “69) shell 腳本如何獲取輸入的值 ?”">​</a></h3><p>a) 通過參數</p><pre><code>./script param1 param2
</code></pre><p>b) 通過 read 命令</p><pre><code>read -p &quot;Destination backup Server : &quot; desthost
</code></pre><h3 id="_70-在腳本中如何使用-expect" tabindex="-1">70) 在腳本中如何使用 &quot;expect&quot; ? <a class="header-anchor" href="#_70-在腳本中如何使用-expect" aria-label="Permalink to “70) 在腳本中如何使用 expect ?”">​</a></h3><pre><code>/usr/bin/expect &lt;&lt; EOD
spawn rsync -ar \${line} \${desthost}:\${destpath}
expect &quot;*?assword:*&quot;
send &quot;\${password}\\r&quot;
expect eof
EOD
</code></pre><p>祝你好運 !! 如果你有任何疑問或者問題需要解答都可以在下面的評論框中寫下來。讓我們知道這對你的面試有所幫助:-)</p><hr>`,128)),o("p",null,[e[4]||(e[4]=a("via: ",-1)),i(r,{href:"http://linoxide.com/linux-shell-script/shell-scripting-interview-questions-answers/"},{default:l(()=>[...e[3]||(e[3]=[a("http://linoxide.com/linux-shell-script/shell-scripting-interview-questions-answers/",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=a("作者：",-1)),i(r,{href:"http://linoxide.com/author/petrasl/"},{default:l(()=>[...e[5]||(e[5]=[a("Petras Liumparas",-1)])]),_:1}),e[9]||(e[9]=a(" 譯者：",-1)),i(r,{href:"https://github.com/ictlyh"},{default:l(()=>[...e[6]||(e[6]=[a("ictlyh",-1)])]),_:1}),e[10]||(e[10]=a(" 校對：",-1)),i(r,{href:"https://github.com/wxy"},{default:l(()=>[...e[7]||(e[7]=[a("wxy",-1)])]),_:1})]),o("p",null,[e[13]||(e[13]=a("本文由 ",-1)),i(r,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...e[11]||(e[11]=[a("LCTT",-1)])]),_:1}),e[14]||(e[14]=a(" 原創翻譯，",-1)),i(r,{href:"https://linux.cn/"},{default:l(()=>[...e[12]||(e[12]=[a("Linux中國",-1)])]),_:1}),e[15]||(e[15]=a(" 榮譽推出",-1))])])}const P=n(s,[["render",p]]);export{k as __pageData,P as default};
