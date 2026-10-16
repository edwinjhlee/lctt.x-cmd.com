import{_ as d,a0 as P,w as a,s as l,ao as i,I as r,x as e,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在 Linux 命令列中使用和執行 PHP 代碼（一） | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令列中使用和執行 PHP 代碼（一） | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令列中使用和執行 PHP 代碼（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令列中使用和執行 PHP 代碼（一） | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150722 How to Use and Execute PHP Codes in Linux Command Line--Part 1","title":"在 Linux 命令列中使用和執行 PHP 代碼（一）","tag":"201507","desc":""},"relativePath":"201507/20150722 How to Use and Execute PHP Codes in Linux Command Line--Part 1.md","filePath":"[post].md"}'),s={name:"201507/20150722 How to Use and Execute PHP Codes in Linux Command Line--Part 1.md"};function c(h,p,m,u,w,H){const t=P("Link");return a(),l("div",null,[p[18]||(p[18]=i(`<h1 id="在-linux-命令列中使用和執行-php-代碼-一" tabindex="-1">在 Linux 命令列中使用和執行 PHP 代碼（一） <a class="header-anchor" href="#在-linux-命令列中使用和執行-php-代碼-一" aria-label="Permalink to “在 Linux 命令列中使用和執行 PHP 代碼（一）”">​</a></h1><p>PHP是一個開源服務器端腳本語言，最初這三個字母代表的是“Personal Home Page”，而現在則代表的是“PHP：Hypertext Preprocessor”，它是個遞歸首字母縮寫。它是一個跨平台腳本語言，深受C、C++和Java的影響。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/php-command-line-usage.jpeg" alt="Run PHP Codes in Linux Command Line"></p><p><em>在 Linux 命令列中運行 PHP 代碼</em></p><p>PHP的語法和C、Java以及帶有一些PHP特性的Perl變成語言中的語法十分相似，它當下大約正被2.6億個網站所使用，當前最新的穩定版本是PHP版本5.6.10。</p><p>PHP是HTML的嵌入腳本，它便於開發人員快速寫出動態生成的頁面。PHP主要用於服務器端（而Javascript則用於客户端）以通過HTTP生成動態網頁，然而，當你知道可以在Linux終端中不需要網頁瀏覽器來執行PHP時，你或許會大為驚訝。</p><p>本文將闡述PHP腳本語言的命令列方面。</p><p><strong>1. 在安裝完PHP和Apache2後，我們需要安裝PHP命令列解釋器。</strong></p><pre><code># apt-get install php5-cli 			[Debian 及類似系統]
# yum install php-cli 				[CentOS 及類似系統]
</code></pre><p>接下來我們通常要做的是，在<code>/var/www/html</code>（這是 Apache2 在大多數發行版中的工作目錄）這個位置創建一個內容為 <code>&lt;?php phpinfo(); ?&gt;</code>，名為 <code>infophp.php</code> 的文件來測試（PHP是否安裝正確），執行以下命令即可。</p><pre><code># echo &#39;&lt;?php phpinfo(); ?&gt;&#39; &gt; /var/www/html/infophp.php
</code></pre>`,11)),r("p",null,[p[1]||(p[1]=e("然後，將瀏覽器訪問 ",-1)),n(t,{href:"http://127.0.0.1/infophp.php"},{default:o(()=>[...p[0]||(p[0]=[e("http://127.0.0.1/infophp.php",-1)])]),_:1}),p[2]||(p[2]=e(" ，這將會在網絡瀏覽器中打開該文件。",-1))]),p[19]||(p[19]=i(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-PHP-Info.png" alt="Check PHP Info"></p><p><em>檢查PHP信息</em></p><p>不需要任何瀏覽器，在Linux終端中也可以獲得相同的結果。在Linux命令列中執行<code>/var/www/html/infophp.php</code>，如：</p><pre><code># php -f /var/www/html/infophp.php
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-PHP-info-from-Commandline.png" alt="Check PHP info from Commandline"></p><p><em>從命令列檢查PHP信息</em></p><p>由於輸出結果太大，我們可以通過管道將上述輸出結果輸送給 <code>less</code> 命令，這樣就可以一次輸出一屏了，命令如下：</p><pre><code># php -f /var/www/html/infophp.php | less
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-All-PHP-Info.png" alt="Check All PHP Info"></p><p><em>檢查所有PHP信息</em></p><p>這裏，‘-f‘選項解析並執行命令後跟隨的文件。</p><p><strong>2. 我們可以直接在Linux命令列使用<code>phpinfo()</code>這個十分有價值的調試工具而不需要從文件來調用，只需執行以下命令：</strong></p><pre><code># php -r &#39;phpinfo();&#39;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/PHP-Debugging-Tool.png" alt="PHP Debugging Tool"></p><p><em>PHP調試工具</em></p><p>這裏，‘-r‘ 選項會讓PHP代碼在Linux終端中不帶<code>&lt;</code>和<code>&gt;</code>標記直接執行。</p><p><strong>3. 以交互模式運行PHP並做一些數學運算。這裏，‘-a‘ 選項用於以交互模式運行PHP。</strong></p><pre><code># php -a

Interactive shell

php &gt; echo 2+3;
5
php &gt; echo 9-6;
3
php &gt; echo 5*4;
20
php &gt; echo 12/3;
4
php &gt; echo 12/5;
2.4
php &gt; echo 2+3-1;
4
php &gt; echo 2+3-1*3;
2
php &gt; exit
</code></pre><p>輸入 ‘exit‘ 或者按下 ‘ctrl+c‘ 來關閉PHP交互模式。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Enable-PHP-interactive-mode1.png" alt="Enable PHP Interactive Mode"></p><p><em>啓用PHP交互模式</em></p><p><strong>4. 你可以僅僅將PHP腳本作為shell腳本來運行。首先，創建在你當前工作目錄中創建一個PHP樣例腳本。</strong></p><pre><code># echo -e &#39;#!/usr/bin/php\\n&lt;?php phpinfo(); ?&gt;&#39; &gt; phpscript.php
</code></pre><p>注意，我們在該PHP腳本的第一行使用<code>#!/usr/bin/php</code>，就像在shell腳本中那樣（<code>/bin/bash</code>）。第一行的<code>#!/usr/bin/php</code>告訴Linux命令列用 PHP 解釋器來解析該腳本文件。</p><p>其次，讓該腳本可執行：</p><pre><code># chmod 755 phpscript.php
</code></pre><p>接着來運行它，</p><pre><code># ./phpscript.php
</code></pre><p><strong>5. 你可以完全靠自己通過交互shell來創建簡單函數，這你一定會被驚到了。下面是循序漸進的指南。</strong></p><p>開啓PHP交互模式。</p><pre><code># php -a
</code></pre><p>創建一個函數，將它命名為 <code>addition</code>。同時，聲明兩個變量 <code>$a</code> 和 <code>$b</code>。</p><pre><code>php &gt; function addition ($a, $b)
</code></pre><p>使用花括號來在其間為該函數定義規則。</p><pre><code>php &gt; {
</code></pre><p>定義規則。這裏，該規則講的是添加這兩個變量。</p><pre><code>php { echo $a + $b;
</code></pre><p>所有規則定義完畢，通過閉合花括號來封裝規則。</p><pre><code>php {}
</code></pre><p>測試函數，添加數字4和3，命令如下：</p><pre><code>php &gt; var_dump (addition(4,3));
</code></pre><h4 id="樣例輸出" tabindex="-1">樣例輸出 <a class="header-anchor" href="#樣例輸出" aria-label="Permalink to “樣例輸出”">​</a></h4><pre><code>7NULL
</code></pre><p>你可以運行以下代碼來執行該函數，你可以測試不同的值，你想來多少次都行。將裏頭的 a 和 b 替換成你自己的值。</p><pre><code>php &gt; var_dump (addition(a,b));
</code></pre><hr><pre><code>php &gt; var_dump (addition(9,3.3));
</code></pre><h4 id="樣例輸出-1" tabindex="-1">樣例輸出 <a class="header-anchor" href="#樣例輸出-1" aria-label="Permalink to “樣例輸出”">​</a></h4><pre><code>12.3NULL
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Create-PHP-Functions.png" alt="Create PHP Functions"></p><p><em>創建PHP函數</em></p><p>你可以一直運行該函數，直至退出交互模式（ctrl+z）。同時，你也應該注意到了，上面輸出結果中返回的數據類型為 NULL。這個問題可以通過要求 php 交互 shell用 return 代替 echo 返回結果來修復。</p><p>只需要在上面的函數的中 ‘echo‘ 聲明用 ‘return‘ 來替換</p><p>替換</p><pre><code>php { echo $a + $b;
</code></pre><p>為</p><pre><code>php { return $a + $b;
</code></pre><p>剩下的東西和原理仍然一樣。</p><p>這裏是一個樣例，在該樣例的輸出結果中返回了正確的數據類型。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/PHP-Functions.png" alt="PHP Functions"></p><p><em>PHP函數</em></p><p>永遠都記住，用户定義的函數不會從一個shell會話保留到下一個shell會話，因此，一旦你退出交互shell，它就會丟失了。</p><p>希望你喜歡此次教程。保持連線，你會獲得更多此類文章。保持關注，保持健康。請在下面的評論中為我們提供有價值的反饋。點贊並分享，幫助我們擴散。</p>`,63)),r("p",null,[p[4]||(p[4]=e("還請閲讀： ",-1)),n(t,{href:"http://www.tecmint.com/execute-php-codes-functions-in-linux-commandline/"},{default:o(()=>[...p[3]||(p[3]=[e("12個Linux終端中有用的的PHP命令列用法——第二部分",-1)])]),_:1})]),p[20]||(p[20]=r("hr",null,null,-1)),r("p",null,[p[6]||(p[6]=e("via: ",-1)),n(t,{href:"http://www.tecmint.com/run-php-codes-from-linux-commandline/"},{default:o(()=>[...p[5]||(p[5]=[e("http://www.tecmint.com/run-php-codes-from-linux-commandline/",-1)])]),_:1})]),r("p",null,[p[10]||(p[10]=e("作者：",-1)),n(t,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...p[7]||(p[7]=[e("Avishek Kumar",-1)])]),_:1}),p[11]||(p[11]=e(" 譯者：",-1)),n(t,{href:"https://github.com/GOLinux"},{default:o(()=>[...p[8]||(p[8]=[e("GOLinux",-1)])]),_:1}),p[12]||(p[12]=e(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...p[9]||(p[9]=[e("wxy",-1)])]),_:1})]),r("p",null,[p[15]||(p[15]=e("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...p[13]||(p[13]=[e("LCTT",-1)])]),_:1}),p[16]||(p[16]=e(" 原創翻譯，",-1)),n(t,{href:"https://linux.cn/"},{default:o(()=>[...p[14]||(p[14]=[e("Linux中國",-1)])]),_:1}),p[17]||(p[17]=e(" 榮譽推出",-1))])])}const L=d(s,[["render",c]]);export{x as __pageData,L as default};
