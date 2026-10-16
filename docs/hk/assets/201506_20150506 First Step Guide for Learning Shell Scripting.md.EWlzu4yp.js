import{_ as l,a0 as a,w as p,s as h,ao as d,I as s,x as t,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"Shell腳本編程初體驗 | LCTT x X-CMD","titleTemplate":false,"description":"Shell腳本編程初體驗 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Shell腳本編程初體驗 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Shell腳本編程初體驗 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150506 First Step Guide for Learning Shell Scripting","title":"Shell腳本編程初體驗","tag":"201506","desc":""},"relativePath":"201506/20150506 First Step Guide for Learning Shell Scripting.md","filePath":"[post].md"}'),i={name:"201506/20150506 First Step Guide for Learning Shell Scripting.md"};function c(u,o,g,m,b,x){const e=a("Link");return p(),h("div",null,[o[13]||(o[13]=d(`<h1 id="shell腳本編程初體驗" tabindex="-1">Shell腳本編程初體驗 <a class="header-anchor" href="#shell腳本編程初體驗" aria-label="Permalink to “Shell腳本編程初體驗”">​</a></h1><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/myfirstshellscript.jpg" alt=""></p><p>通常，當人們提到“shell腳本語言”時，浮現在他們腦海中是bash，ksh，sh或者其它相類似的linux/unix腳本語言。腳本語言是與計算機交流的另外一種途徑。使用圖形化窗口界面（不管是windows還是linux都無所謂）用户可以移動鼠標並點擊各種對象，比如按鈕、列表、選框等等。但這種方式在每次用户想要計算機/服務器完成相同任務時（比如説批量轉換照片，或者下載新的電影、mp3等）卻是十分不方便。要想讓所有這些事情變得簡單並且自動化，我們可以使用shell腳本。</p><p>某些編程語言，像pascal、foxpro、C、java之類，在執行前需要先進行編譯。它們需要合適的編譯器來讓我們的代碼完成某個任務。</p><p>而其它一些編程語言，像php、javascript、visualbasic之類，則不需要編譯器，因此它們需要解釋器，而我們不需要編譯代碼就可以運行程序。</p><p>shell腳本也像解釋器一樣，但它通常用於調用外部已編譯的程序。然後，它會捕獲輸出結果、退出代碼並根據情況進行處理。</p><p>Linux世界中最為流行的shell腳本語言之一，就是bash。而我認為（這是我自己的看法）原因在於，默認情況下bash shell可以讓用户便捷地通過歷史命令（先前執行過的）導航，與之相反的是，ksh則要求對.profile進行一些調整，或者記住一些“魔術”組合鍵來查閲歷史並修正命令。</p><p>好了，我想這些介紹已經足夠了，剩下來哪個環境最適合你，就留給你自己去判斷吧。從現在開始，我將只講bash及其腳本。在下面的例子中，我將使用CentOS 6.6和bash-4.1.2。請確保你有相同版本，或者更高版本。</p><h3 id="shell腳本流" tabindex="-1">Shell腳本流 <a class="header-anchor" href="#shell腳本流" aria-label="Permalink to “Shell腳本流”">​</a></h3><p>shell腳本語言就跟和幾個人聊天類似。你只需把所有命令想像成能幫你做事的那些人，只要你用正確的方式來請求他們去做。比如説，你想要寫文檔。首先，你需要紙。然後，你需要把內容説給某個人聽，讓他幫你寫。最後，你想要把它存放到某個地方。或者説，你想要造一所房子，因而你需要請合適的人來清空場地。在他們説“事情幹完了”，那麼另外一些工程師就可以幫你來砌牆。最後，當這些工程師們也告訴你“事情幹完了”的時候，你就可以叫油漆工來給房子粉飾了。如果你讓油漆工在牆砌好前就來粉飾，會發生什麼呢？我想，他們會開始發牢騷了。幾乎所有這些像人一樣的命令都會説話，如果它們完成了工作而沒有發生什麼問題，那麼它們就會告訴“標準輸出”。如果它們不能做你叫它們做的事——它們會告訴“標準錯誤”。這樣，最後，所有的命令都通過“標準輸入”來聽你的話。</p><p>快速實例——當你打開linux終端並寫一些文本時——你正通過“標準輸入”和bash説話。那麼，讓我們來問問bash shell <strong>who am i（我是誰？）</strong>吧。</p><pre><code>root@localhost ~]# who am i                                &lt;--- 你通過標準輸入對 bash shell 説
root     pts/0        2015-04-22 20:17 (192.168.1.123)          &lt;--- bash shell通過標準輸出回答你
</code></pre><p>現在，讓我們説一些bash聽不懂的問題：</p><pre><code>[root@localhost ~]# blablabla           &lt;--- 哈，你又在和標準輸入説話了
-bash: blablabla: command not found     &lt;--- bash通過標準錯誤在發牢騷了
</code></pre><p>“:”之前的第一個單詞通常是向你發牢騷的命令。實際上，這些流中的每一個都有它們自己的索引號（LCTT 譯註：文件句柄號）：</p><ul><li>標準輸入（<strong>stdin</strong>） - 0</li><li>標準輸出（<strong>stdout</strong>） - 1</li><li>標準錯誤（<strong>stderr</strong>） - 2</li></ul><p>如果你真的想要知道哪個輸出命令説了些什麼——你需要將那次發言重定向到（在命令後使用大於號“&gt;”和流索引）文件：</p><pre><code>[root@localhost ~]# blablabla 1&gt; output.txt
-bash: blablabla: command not found
</code></pre><p>在本例中，我們試着重定向流1（<strong>stdout</strong>）到名為output.txt的文件。讓我們來看對該文件內容所做的事情吧，使用cat命令可以做這事：</p><pre><code>[root@localhost ~]# cat output.txt
[root@localhost ~]#
</code></pre><p>看起來似乎是空的。好吧，現在讓我們來重定向流2（<strong>stderr</strong>）：</p><pre><code>[root@localhost ~]# blablabla 2&gt; error.txt
[root@localhost ~]#
</code></pre><p>好吧，我們看到牢騷話沒了。讓我們檢查一下那個文件：</p><pre><code>[root@localhost ~]# cat error.txt
-bash: blablabla: command not found
[root@localhost ~]#
</code></pre><p>果然如此！我們看到，所有牢騷話都被記錄到errors.txt文件裏頭去了。</p><p>有時候，命令會同時產生<strong>stdout</strong>和<strong>stderr</strong>。要重定向它們到不同的文件，我們可以使用以下語句：</p><pre><code>command 1&gt;out.txt 2&gt;err.txt
</code></pre><p>要縮短一點語句，我們可以忽略“1”，因為默認情況下<strong>stdout</strong>會被重定向：</p><pre><code>command &gt;out.txt 2&gt;err.txt
</code></pre><p>好吧，讓我們試試做些“壞事”。讓我們用rm命令把file1和folder1給刪了吧：</p><pre><code>[root@localhost ~]# rm -vf folder1 file1 &gt; out.txt 2&gt;err.txt
</code></pre><p>現在來檢查以下輸出文件：</p><pre><code>[root@localhost ~]# cat out.txt
removed \`file1&#39;
[root@localhost ~]# cat err.txt
rm: cannot remove \`folder1&#39;: Is a directory
[root@localhost ~]#
</code></pre><p>正如我們所看到的，不同的流被分離到了不同的文件。有時候，這也不是很方便，因為我們想要查看出現錯誤時，在某些操作前面或後面所連續發生的事情。要實現這一目的，我們可以重定向兩個流到同一個文件：</p><pre><code>command &gt;&gt;out_err.txt 2&gt;&gt;out_err.txt
</code></pre><p>注意：請注意，我使用“&gt;&gt;”替代了“&gt;”。它允許我們附加到文件，而不是覆蓋文件。</p><p>我們也可以重定向一個流到另一個：</p><pre><code>command &gt;out_err.txt 2&gt;&amp;1
</code></pre><p>讓我來解釋一下吧。所有命令的標準輸出將被重定向到out_err.txt，錯誤輸出將被重定向到流1（上面已經解釋過了），而該流會被重定向到同一個文件。讓我們看這個實例：</p><pre><code>[root@localhost ~]# rm -fv folder2 file2 &gt;out_err.txt 2&gt;&amp;1
[root@localhost ~]# cat out_err.txt
rm: cannot remove \`folder2&#39;: Is a directory
removed \`file2&#39;
[root@localhost ~]#
</code></pre><p>看着這些組合的輸出，我們可以將其説明為：首先，<strong>rm</strong>命令試着將folder2刪除，而它不會成功，因為linux要求<strong>-r</strong>鍵來允許<strong>rm</strong>命令刪除文件夾，而第二個file2會被刪除。通過為<strong>rm</strong>提供<strong>-v</strong>（詳情）鍵，我們讓rm命令告訴我們每個被刪除的文件或文件夾。</p><p>這些就是你需要知道的，關於重定向的幾乎所有內容了。我是説幾乎，因為還有一個更為重要的重定向工具，它稱之為“管道”。通過使用|（管道）符號，我們通常重定向<strong>stdout</strong>流。</p><p>比如説，我們有這樣一個文本文件：</p><pre><code>[root@localhost ~]# cat text_file.txt
This line does not contain H e l l o  word
This lilne contains Hello
This also containd Hello
This one no due to HELLO all capital
Hello bash world!
</code></pre><p>而我們需要找到其中某些帶有“Hello”的行，Linux中有個<strong>grep</strong>命令可以完成該工作：</p><pre><code>[root@localhost ~]# grep Hello text_file.txt
This lilne contains Hello
This also containd Hello
Hello bash world!
[root@localhost ~]#
</code></pre><p>當我們有個文件，想要在裏頭搜索的時候，這用起來很不錯。當如果我們需要在另一個命令的輸出中查找某些東西，這又該怎麼辦呢？是的，當然，我們可以重定向輸出到文件，然後再在文件裏頭查找：</p><pre><code>[root@localhost ~]# fdisk -l&gt;fdisk.out
[root@localhost ~]# grep &quot;Disk /dev&quot; fdisk.out
Disk /dev/sda: 8589 MB, 8589934592 bytes
Disk /dev/mapper/VolGroup-lv_root: 7205 MB, 7205814272 bytes
Disk /dev/mapper/VolGroup-lv_swap: 855 MB, 855638016 bytes
[root@localhost ~]#
</code></pre><p>如果你打算grep一些雙引號引起來帶有空格的內容呢！</p><p>注意：fdisk命令顯示關於Linux操作系統磁盤驅動器的信息。</p><p>就像我們看到的，這種方式很不方便，因為我們不一會兒就把臨時文件空間給搞亂了。要完成該任務，我們可以使用管道。它們允許我們重定向一個命令的<strong>stdout</strong>到另一個命令的<strong>stdin</strong>流：</p><pre><code>[root@localhost ~]# fdisk -l | grep &quot;Disk /dev&quot;
Disk /dev/sda: 8589 MB, 8589934592 bytes
Disk /dev/mapper/VolGroup-lv_root: 7205 MB, 7205814272 bytes
Disk /dev/mapper/VolGroup-lv_swap: 855 MB, 855638016 bytes
[root@localhost ~]#
</code></pre><p>如你所見，我們不需要任何臨時文件就獲得了相同的結果。我們把<strong>fdisk stdout</strong>重定向到了<strong>grep stdin</strong>。</p><p><strong>注意</strong> ： 管道重定向總是從左至右的。</p><p>還有幾個其它重定向，但是我們將把它們放在後面講。</p><h3 id="在shell中顯示自定義信息" tabindex="-1">在shell中顯示自定義信息 <a class="header-anchor" href="#在shell中顯示自定義信息" aria-label="Permalink to “在shell中顯示自定義信息”">​</a></h3><p>正如我們所知道的，通常，與shell的交流以及shell內的交流是以對話的方式進行的。因此，讓我們創建一些真正的腳本吧，這些腳本也會和我們講話。這會讓你學到一些簡單的命令，並對腳本的概念有一個更好的理解。</p><p>假設我們是某個公司的總服務枱經理，我們想要創建某個shell腳本來註冊呼叫信息：電話號碼、用户名以及問題的簡要描述。我們打算把這些信息存儲到普通文本文件data.txt中，以便今後統計。腳本它自己就是以對話的方式工作，這會讓總服務枱的工作人員的小日子過得輕鬆點。那麼，首先我們需要顯示提問。對於顯示信息，我們可以用echo和printf命令。這兩個都是用來顯示信息的，但是printf更為強大，因為我們可以通過它很好地格式化輸出，我們可以讓它右對齊、左對齊或者為信息留出專門的空間。讓我們從一個簡單的例子開始吧。要創建文件，請使用你慣用的文本編輯器（kate，nano，vi，……），然後創建名為note.sh的文件，裏面寫入這些命令：</p><pre><code>echo &quot;Phone number ?&quot;
</code></pre><h3 id="如何運行-執行腳本" tabindex="-1">如何運行/執行腳本？ <a class="header-anchor" href="#如何運行-執行腳本" aria-label="Permalink to “如何運行/執行腳本？”">​</a></h3><p>在保存文件後，我們可以使用bash命令來運行，把我們的文件作為它的參數：</p><pre><code>[root@localhost ~]# bash note.sh
Phone number ?
</code></pre><p>實際上，這樣來執行腳本是很不方便的。如果不使用<strong>bash</strong>命令作為前綴來執行，會更舒服一些。要讓腳本可執行，我們可以使用<strong>chmod</strong>命令：</p><pre><code>[root@localhost ~]# ls -la note.sh
-rw-r--r--. 1 root root 22 Apr 23 20:52 note.sh
[root@localhost ~]# chmod +x note.sh
[root@localhost ~]# ls -la note.sh
-rwxr-xr-x. 1 root root 22 Apr 23 20:52 note.sh
[root@localhost ~]#
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/Capture.png" alt="set permission script file"></p><p><strong>注意</strong> ： ls命令顯示了當前文件夾內的文件。通過添加-la鍵，它會顯示更多文件信息。</p><p>如我們所見，在<strong>chmod</strong>命令執行前，腳本只有讀（r）和寫（w）權限。在執行<strong>chmod +x</strong>後，它就獲得了執行（x）權限。（關於權限的更多細節，我會在下一篇文章中講述。）現在，我們只需這麼來運行：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number ?
</code></pre><p>在腳本名前，我添加了 ./ 組合。.(點）在unix世界中意味着當前位置（當前文件夾），/（斜線）是文件夾分隔符。（在Windows系統中，我們使用反斜線 \\ 表示同樣功能）所以，這整個組合的意思是説：“從當前文件夾執行note.sh腳本”。我想，如果我用完整路徑來運行這個腳本的話，你會更加清楚一些：</p><pre><code>[root@localhost ~]# /root/note.sh
Phone number ?
[root@localhost ~]#
</code></pre><p>它也能工作。</p><p>如果所有linux用户都有相同的默認shell，那就萬事OK。如果我們只是執行該腳本，默認的用户shell就會用於解析腳本內容並運行命令。不同的shell的語法、內部命令等等有着一丁點不同，所以，為了保證我們的腳本會使用<strong>bash</strong>，我們應該添加<strong>#!/bin/bash</strong>到文件首行。這樣，默認的用户shell將調用<strong>/bin/bash</strong>，而只有在那時候，腳本中的命令才會被執行：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
echo &quot;Phone number ?&quot;
</code></pre><p>直到現在，我們才100%確信<strong>bash</strong>會用來解析我們的腳本內容。讓我們繼續。</p><h3 id="讀取輸入" tabindex="-1">讀取輸入 <a class="header-anchor" href="#讀取輸入" aria-label="Permalink to “讀取輸入”">​</a></h3><p>在顯示信息後，腳本會等待用户回答。有個<strong>read</strong>命令用來接收用户的回答：</p><pre><code>#!/bin/bash
echo &quot;Phone number ?&quot;
read phone
</code></pre><p>在執行後，腳本會等待用户輸入，直到用户按[ENTER]鍵結束輸入：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number ?
12345                               &lt;--- 這兒是我輸入的內容
[root@localhost ~]#
</code></pre><p>你輸入的所有東西都會被存儲到變量<strong>phone</strong>中，要顯示變量的值，我們同樣可以使用<strong>echo</strong>命令：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
echo &quot;Phone number ?&quot;
read phone
echo &quot;You have entered $phone as a phone number&quot;
[root@localhost ~]# ./note.sh
Phone number ?
123456
You have entered 123456 as a phone number
[root@localhost ~]#
</code></pre><p>在<strong>bash</strong> shell中，一般我們使用<strong>$</strong>（美元）符號來表明這是一個變量，除了讀入到變量和其它為數不多的時候才不用這個$（將在今後説明）。</p><p>好了，現在我們準備添加剩下的問題了：</p><pre><code>#!/bin/bash
echo &quot;Phone number?&quot;
read phone
echo &quot;Name?&quot;
read name
echo &quot;Issue?&quot;
read issue
[root@localhost ~]# ./note.sh
Phone number?
123
Name?
Jim
Issue?
script is not working.
[root@localhost ~]#
</code></pre><h3 id="使用流重定向" tabindex="-1">使用流重定向 <a class="header-anchor" href="#使用流重定向" aria-label="Permalink to “使用流重定向”">​</a></h3><p>太完美了！剩下來就是重定向所有東西到文件data.txt了。作為字段分隔符，我們將使用/（斜線）符號。</p><p><strong>注意</strong> ： 你可以選擇任何你認為是最好的分隔符，但是確保文件內容不會包含這些符號在內，否則它會導致在文本行中產生額外字段。</p><p>別忘了使用“&gt;&gt;”來代替“&gt;”，因為我們想要將輸出內容附加到文件末！</p><pre><code>[root@localhost ~]# tail -2 note.sh
read issue
echo &quot;$phone/$name/$issue&quot;&gt;&gt;data.txt
[root@localhost ~]# ./note.sh
Phone number?
987
Name?
Jimmy
Issue?
Keybord issue.
[root@localhost ~]# cat data.txt
987/Jimmy/Keybord issue.
[root@localhost ~]#
</code></pre><p><strong>注意</strong> ： <strong>tail</strong>命令顯示了文件的最後的<strong>n</strong>行。</p><p>搞定。讓我們再來運行一次看看：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number?
556
Name?
Janine
Issue?
Mouse was broken.
[root@localhost ~]# cat data.txt
987/Jimmy/Keybord issue.
556/Janine/Mouse was broken.
[root@localhost ~]#
</code></pre><p>我們的文件在增長，讓我們在每行前面加個日期吧，這對於今後擺弄這些統計數據時會很有用。要實現這功能，我們可以使用date命令，並指定某種格式，因為我不喜歡默認格式：</p><pre><code>[root@localhost ~]# date
Thu Apr 23 21:33:14 EEST 2015                      &lt;---- date命令的默認輸出
[root@localhost ~]# date &quot;+%Y.%m.%d %H:%M:%S&quot;
2015.04.23 21:33:18                               &lt;---- 格式化後的輸出
</code></pre><p>有幾種方式可以讀取命令的輸出到變量，在這種簡單的情況下，我們將使用\`（是反引號，不是單引號，和波浪號~在同一個鍵位）：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
echo &quot;Phone number?&quot;
read phone
echo &quot;Name?&quot;
read name
echo &quot;Issue?&quot;
read issue
echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
[root@localhost ~]# ./note.sh
Phone number?
123
Name?
Jim
Issue?
Script hanging.
[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
[root@localhost ~]#
</code></pre><p>嗯…… 我們的腳本看起來有點醜啊，讓我們來美化一下。如果你要手動讀取<strong>read</strong>命令，你會發現read命令也可以顯示一些信息。要實現該功能，我們應該使用-p鍵加上信息：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
read -p &quot;Phone number: &quot; phone
read -p &quot;Name: &quot; name
read -p &quot;Issue: &quot; issue
echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
</code></pre><p>你可以直接從控制台查找到各個命令的大量有趣的信息，只需輸入：<strong>man read, man echo, man date, man ……</strong></p><p>同意嗎？它看上去是舒服多了！</p><pre><code>[root@localhost ~]# ./note.sh
Phone number: 321
Name: Susane
Issue: Mouse was stolen
[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
2015.04.23 21:43:50/321/Susane/Mouse was stolen
[root@localhost ~]#
</code></pre><p>光標在消息的後面（不是在新的一行中），這有點意思。（LCTT 譯註：如果用 echo 命令輸出顯示的話，可以用 -n 參數來避免換行。）</p><h3 id="循環" tabindex="-1">循環 <a class="header-anchor" href="#循環" aria-label="Permalink to “循環”">​</a></h3><p>是時候來改進我們的腳本了。如果用户一整天都在接電話，如果每次都要去運行，這豈不是很麻煩？讓我們讓這些活動都永無止境地循環去吧：</p><pre><code>[root@localhost ~]# cat note.sh
#!/bin/bash
while true
do
        read -p &quot;Phone number: &quot; phone
        now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
        read -p &quot;Name: &quot; name
        read -p &quot;Issue: &quot; issue
        echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
done
</code></pre><p>我已經交換了<strong>read phone</strong>和<strong>now=<code>date</code></strong>行的位置。這是因為我想要在輸入電話號碼後再獲得時間。如果我把它放在循環的首行，那麼循環一次後，變量 now 就會在數據存儲到文件中後馬上獲得時間。而這並不好，因為下一次呼叫可能在20分鐘後，甚至更晚。</p><pre><code>[root@localhost ~]# ./note.sh
Phone number: 123
Name: Jim
Issue: Script still not works.
Phone number: 777
Name: Daniel
Issue: I broke my monitor
Phone number: ^C
[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
2015.04.23 21:43:50/321/Susane/Mouse was stolen
2015.04.23 21:47:55/123/Jim/Script still not works.
2015.04.23 21:48:16/777/Daniel/I broke my monitor
[root@localhost ~]#
</code></pre><p>注意： 要從無限循環中退出，你可以按[Ctrl]+[C]鍵。Shell會顯示^表示Ctrl鍵。</p><h3 id="使用管道重定向" tabindex="-1">使用管道重定向 <a class="header-anchor" href="#使用管道重定向" aria-label="Permalink to “使用管道重定向”">​</a></h3><p>讓我們添加更多功能到我們的“弗蘭肯斯坦（Frankenstein）”，我想要腳本在每次呼叫後顯示某個統計數據。比如説，我想要查看各個號碼呼叫了我幾次。對於這個，我們應該cat文件data.txt：</p><pre><code>[root@localhost ~]# cat data.txt
2015.04.23 21:38:56/123/Jim/Script hanging.
2015.04.23 21:43:50/321/Susane/Mouse was stolen
2015.04.23 21:47:55/123/Jim/Script still not works.
2015.04.23 21:48:16/777/Daniel/I broke my monitor
2015.04.23 22:02:14/123/Jimmy/New script also not working!!!
[root@localhost ~]#
</code></pre><p>現在，所有輸出我們都可以重定向到<strong>cut</strong>命令，讓<strong>cut</strong>來把每行切成一塊一塊（我們使用分隔符“/”），然後打印第二個字段：</p><pre><code>[root@localhost ~]# cat data.txt | cut -d&quot;/&quot; -f2
123
321
123
777
123
[root@localhost ~]#
</code></pre><p>現在，我們可以把這個輸出重定向打另外一個命令<strong>sort</strong>：</p><pre><code>[root@localhost ~]# cat data.txt | cut -d&quot;/&quot; -f2|sort
123
123
123
321
777
[root@localhost ~]#
</code></pre><p>然後只留下唯一的行。要統計唯一條目，只需添加<strong>-c</strong>鍵到<strong>uniq</strong>命令：</p><pre><code>[root@localhost ~]# cat data.txt | cut -d&quot;/&quot; -f2 | sort | uniq -c
    3 123
    1 321
    1 777
[root@localhost ~]#
</code></pre><p>只要把這個添加到我們的循環的最後：</p><pre><code>#!/bin/bash
while true
do
        read -p &quot;Phone number: &quot; phone
        now=\`date &quot;+%Y.%m.%d %H:%M:%S&quot;\`
        read -p &quot;Name: &quot; name
        read -p &quot;Issue: &quot; issue
        echo &quot;$now/$phone/$name/$issue&quot;&gt;&gt;data.txt
        echo &quot;===== We got calls from =====&quot;
        cat data.txt | cut -d&quot;/&quot; -f2 | sort | uniq -c
        echo &quot;--------------------------------&quot;
done
</code></pre><p>運行：</p><pre><code>[root@localhost ~]# ./note.sh
Phone number: 454
Name: Malini
Issue: Windows license expired.
===== We got calls from =====
    3 123
    1 321
    1 454
    1 777
--------------------------------
Phone number: ^C
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/Capture11.png" alt="running script"></p><p>當前場景貫穿了幾個熟知的步驟：</p><ul><li>顯示消息</li><li>獲取用户輸入</li><li>存儲值到文件</li><li>處理存儲的數據</li></ul><p>但是，如果用户有點責任心，他有時候需要輸入數據，有時候需要統計，或者可能要在存儲的數據中查找一些東西呢？對於這些事情，我們需要使用switches/cases，並知道怎樣來很好地格式化輸出。這對於在shell中“畫”表格的時候很有用。</p><hr>`,126)),s("p",null,[o[1]||(o[1]=t("via: ",-1)),n(e,{href:"http://linoxide.com/linux-shell-script/guide-start-learning-shell-scripting-scratch/"},{default:r(()=>[...o[0]||(o[0]=[t("http://linoxide.com/linux-shell-script/guide-start-learning-shell-scripting-scratch/",-1)])]),_:1})]),s("p",null,[o[5]||(o[5]=t("作者：",-1)),n(e,{href:"http://linoxide.com/author/petrasl/"},{default:r(()=>[...o[2]||(o[2]=[t("Petras Liumparas",-1)])]),_:1}),o[6]||(o[6]=t(" 譯者：",-1)),n(e,{href:"https://github.com/GOLinux"},{default:r(()=>[...o[3]||(o[3]=[t("GOLinux",-1)])]),_:1}),o[7]||(o[7]=t(" 校對：",-1)),n(e,{href:"https://github.com/wxy"},{default:r(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[o[10]||(o[10]=t("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原創翻譯，",-1)),n(e,{href:"https://linux.cn/"},{default:r(()=>[...o[9]||(o[9]=[t("Linux中國",-1)])]),_:1}),o[12]||(o[12]=t(" 榮譽推出",-1))])])}const S=l(i,[["render",c]]);export{w as __pageData,S as default};
