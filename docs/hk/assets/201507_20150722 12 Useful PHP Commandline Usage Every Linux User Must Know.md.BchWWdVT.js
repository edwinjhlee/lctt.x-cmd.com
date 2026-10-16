import{_ as r,a0 as l,w as P,s as i,I as s,x as p,a1 as n,A as o,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150722 12 Useful PHP Commandline Usage Every Linux User Must Know","title":"在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法","tag":"201507","desc":""},"relativePath":"201507/20150722 12 Useful PHP Commandline Usage Every Linux User Must Know.md","filePath":"[post].md"}'),m={name:"201507/20150722 12 Useful PHP Commandline Usage Every Linux User Must Know.md"};function c(d,e,h,u,g,H){const t=l("Link");return P(),i("div",null,[e[16]||(e[16]=s("h1",{id:"在-linux-命令列中使用和執行-php-代碼-二-12-個-php-交互性-shell-的用法",tabindex:"-1"},[p("在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法 "),s("a",{class:"header-anchor",href:"#在-linux-命令列中使用和執行-php-代碼-二-12-個-php-交互性-shell-的用法","aria-label":"Permalink to “在 Linux 命令列中使用和執行 PHP 代碼（二）：12 個 PHP 交互性 shell 的用法”"},"​")],-1)),s("p",null,[e[1]||(e[1]=p("在上一篇文章“",-1)),n(t,{href:"https://linux.cn/article-5906-1.html"},{default:o(()=>[...e[0]||(e[0]=[p("在 Linux 命令列中使用和執行 PHP 代碼（一）",-1)])]),_:1}),e[2]||(e[2]=p("”中，我同時着重討論了直接在Linux命令列中運行PHP代碼以及在Linux終端中執行PHP腳本文件。",-1))]),e[17]||(e[17]=a(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Run-PHP-Codes-in-Linux-Commandline.jpeg" alt="Run PHP Codes in Linux Commandline"></p><p>本文旨在讓你瞭解一些相當不錯的Linux終端中的PHP交互性 shell 的用法特性。</p><p>讓我們先在PHP 的交互shell中來對<code>php.ini</code>設置進行一些配置吧。</p><p><strong>6. 設置PHP命令列提示符</strong></p><p>要設置PHP命令列提示，你需要在Linux終端中使用下面的php -a（啓用PHP交互模式）命令開啓一個PHP交互shell。</p><pre><code>$ php -a
</code></pre><p>然後，設置任何東西（比如説Hi Tecmint ::）作為PHP交互shell的命令提示符，操作如下：</p><pre><code>php &gt; #cli.prompt=Hi Tecmint ::
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Enable-PHP-Interactive-Shell.png" alt="Enable PHP Interactive Shell"></p><p><em>啓用PHP交互Shell</em></p><p>同時，你也可以設置當前時間作為你的命令列提示符，操作如下：</p><pre><code>php &gt; #cli.prompt=\`echo date(&#39;H:m:s&#39;);\` &gt;

22:15:43 &gt;
</code></pre><p><strong>7. 每次輸出一屏</strong></p><p>在我們上一篇文章中，我們已經在原始命令中通過管道在很多地方使用了<code>less</code>命令。通過該操作，我們可以在那些不能一屏全部輸出的地方獲得分屏顯示。但是，我們可以通過配置php.ini文件，設置pager的值為less以每次輸出一屏，操作如下：</p><pre><code>$ php -a
php &gt; #cli.pager=less
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Fix-PHP-Screen-Output.png" alt="Fix PHP Screen Output"></p><p><em>限制PHP屏幕輸出</em></p><p>這樣，下次當你運行一個命令（比如説條調試器<code>phpinfo();</code>）的時候，而該命令的輸出內容又太過龐大而不能固定在一屏，它就會自動產生適合你當前屏幕的輸出結果。</p><pre><code>php &gt; phpinfo();
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/PHP-Info-Output.png" alt="PHP Info Output"></p><p><em>PHP信息輸出</em></p><p><strong>8. 建議和TAB補全</strong></p><p>PHP shell足夠智能，它可以顯示給你建議和進行TAB補全，你可以通過TAB鍵來使用該功能。如果對於你想要用TAB補全的字符串而言有多個選項，那麼你需要使用兩次TAB鍵來完成，其它情況則使用一次即可。</p><p>如果有超過一個的可能性，請使用兩次TAB鍵。</p><pre><code>php &gt; ZIP [TAB] [TAB]
</code></pre><p>如果只有一個可能性，只要使用一次TAB鍵。</p><pre><code>php &gt; #cli.pager [TAB]
</code></pre><p>你可以一直按TAB鍵來獲得建議的補全，直到該值滿足要求。所有的行為都將記錄到<code>~/.php-history</code>文件。</p><p>要檢查你的PHP交互shell活動日誌，你可以執行：</p><pre><code>$ nano ~/.php_history | less
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-PHP-Interactive-Shell-Logs.png" alt="Check PHP Interactive Shell Logs"></p><p><em>檢查PHP交互Shell日誌</em></p><p><strong>9. 你可以在PHP交互shell中使用顏色，你所需要知道的僅僅是顏色代碼。</strong></p><p>使用echo來打印各種顏色的輸出結果，類似這樣：</p><pre><code>php &gt; echo &quot;color_code1 TEXT second_color_code&quot;;
</code></pre><p>具體來説是：</p><pre><code>php &gt; echo &quot;\\033[0;31m Hi Tecmint \\x1B[0m&quot;;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Enable-Colors-in-PHP-Shell.png" alt="Enable Colors in PHP Shell"></p><p><em>在PHP Shell中啓用彩色</em></p><p>到目前為止，我們已經看到，按回車鍵意味着執行命令，然而PHP Shell中各個命令結尾的分號是必須的。</p><p><strong>10. 在PHP shell中用basename()輸出路徑中最後一部分</strong></p><p>PHP shell中的basename函數可以從給出的包含有到文件或目錄路徑的最後部分。</p><p>basename()樣例#1和#2。</p><pre><code>php &gt; echo basename(&quot;/var/www/html/wp/wp-content/plugins&quot;);
php &gt; echo basename(&quot;www.tecmint.com/contact-us.html&quot;);
</code></pre><p>上述兩個樣例將輸出：</p><pre><code>plugins
contact-us.html
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Print-Base-Name-in-PHP.png" alt="Print Base Name in PHP"></p><p><em>在PHP中打印基本名稱</em></p><p><strong>11. 你可以使用PHP交互shell在你的桌面創建文件（比如説test1.txt），就像下面這麼簡單</strong></p><pre><code>php&gt; touch(&quot;/home/avi/Desktop/test1.txt&quot;);
</code></pre><p>我們已經見識了PHP交互shell在數學運算中有多優秀，這裏還有更多一些例子會令你吃驚。</p><p><strong>12. 使用PHP交互shell打印比如像tecmint.com這樣的字符串的長度</strong></p><p>strlen函數用於獲取指定字符串的長度。</p><pre><code>php &gt; echo strlen(&quot;tecmint.com&quot;);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Print-Length-String-in-PHP.png" alt="Print Length String in PHP"></p><p><em>在PHP中打印字符串長度</em></p><p><strong>13. PHP交互shell可以對數組排序，是的，你沒聽錯</strong></p><p>聲明變量a，並將其值設置為array(7,9,2,5,10)。</p><pre><code>php &gt; $a=array(7,9,2,5,10);
</code></pre><p>對數組中的數字進行排序。</p><pre><code>php &gt; sort($a);
</code></pre><p>以排序後的順序打印數組中的數字，同時打印序號，第一個為[0]。</p><pre><code>php &gt; print_r($a);
Array
(
    [0] =&gt; 2
    [1] =&gt; 5
    [2] =&gt; 7
    [3] =&gt; 9
    [4] =&gt; 10
)
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Sort-Arrays-in-PHP.png" alt="Sort Arrays in PHP"></p><p><em>在PHP中對數組排序</em></p><p><strong>14. 在PHP交互Shell中獲取π的值</strong></p><pre><code>php &gt; echo pi();

3.1415926535898
</code></pre><p><strong>15. 打印某個數比如32的平方根</strong></p><pre><code>php &gt; echo sqrt(150);

12.247448713916
</code></pre><p><strong>16. 從0-10的範圍內挑選一個隨機數</strong></p><pre><code>php &gt; echo rand(0, 10);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Get-Random-Number-in-PHP.png" alt="Get Random Number in PHP"></p><p><em>在PHP中獲取隨機數</em></p><p><strong>17. 獲取某個指定字符串的md5校驗和sha1校驗，例如，讓我們在PHP Shell中檢查某個字符串（比如説avi）的md5校驗和sha1校驗，並交叉校驗bash shell生成的md5校驗和sha1校驗的結果。</strong></p><pre><code>php &gt; echo md5(avi);
3fca379b3f0e322b7b7967bfcfb948ad

php &gt; echo sha1(avi);
8f920f22884d6fea9df883843c4a8095a2e5ac6f
</code></pre><hr><pre><code>$ echo -n avi | md5sum
3fca379b3f0e322b7b7967bfcfb948ad  -

$ echo -n avi | sha1sum
8f920f22884d6fea9df883843c4a8095a2e5ac6f  -
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-md5sum-and-sha1sum.png" alt="Check md5sum and sha1sum in PHP"></p><p><em>在PHP中檢查md5校驗和sha1校驗</em></p><p>這裏只是PHP Shell中所能獲取的功能和PHP Shell的交互特性的驚鴻一瞥，這些就是到現在為止我所討論的一切。保持連線，在評論中為我們提供你有價值的反饋吧。為我們點贊並分享，幫助我們擴散哦。</p><hr>`,81)),s("p",null,[e[4]||(e[4]=p("via: ",-1)),n(t,{href:"http://www.tecmint.com/execute-php-codes-functions-in-linux-commandline/"},{default:o(()=>[...e[3]||(e[3]=[p("http://www.tecmint.com/execute-php-codes-functions-in-linux-commandline/",-1)])]),_:1})]),s("p",null,[e[8]||(e[8]=p("作者：",-1)),n(t,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...e[5]||(e[5]=[p("Avishek Kumar",-1)])]),_:1}),e[9]||(e[9]=p(" 譯者：",-1)),n(t,{href:"https://github.com/GOLinux"},{default:o(()=>[...e[6]||(e[6]=[p("GOLinux",-1)])]),_:1}),e[10]||(e[10]=p(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[7]||(e[7]=[p("wxy",-1)])]),_:1})]),s("p",null,[e[13]||(e[13]=p("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[11]||(e[11]=[p("LCTT",-1)])]),_:1}),e[14]||(e[14]=p(" 原創翻譯，",-1)),n(t,{href:"https://linux.cn/"},{default:o(()=>[...e[12]||(e[12]=[p("Linux中國",-1)])]),_:1}),e[15]||(e[15]=p(" 榮譽推出",-1))])])}const T=r(m,[["render",c]]);export{x as __pageData,T as default};
