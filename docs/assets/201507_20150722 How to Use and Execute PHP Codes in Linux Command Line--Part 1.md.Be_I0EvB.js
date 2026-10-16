import{_ as d,a0 as P,w as a,s as l,ao as i,I as r,x as e,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在 Linux 命令行中使用和执行 PHP 代码（一） | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令行中使用和执行 PHP 代码（一） | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令行中使用和执行 PHP 代码（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令行中使用和执行 PHP 代码（一） | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150722 How to Use and Execute PHP Codes in Linux Command Line--Part 1","title":"在 Linux 命令行中使用和执行 PHP 代码（一）","tag":"201507","desc":""},"relativePath":"201507/20150722 How to Use and Execute PHP Codes in Linux Command Line--Part 1.md","filePath":"[post].md"}'),s={name:"201507/20150722 How to Use and Execute PHP Codes in Linux Command Line--Part 1.md"};function c(h,p,m,u,w,H){const t=P("Link");return a(),l("div",null,[p[18]||(p[18]=i(`<h1 id="在-linux-命令行中使用和执行-php-代码-一" tabindex="-1">在 Linux 命令行中使用和执行 PHP 代码（一） <a class="header-anchor" href="#在-linux-命令行中使用和执行-php-代码-一" aria-label="Permalink to “在 Linux 命令行中使用和执行 PHP 代码（一）”">​</a></h1><p>PHP是一个开源服务器端脚本语言，最初这三个字母代表的是“Personal Home Page”，而现在则代表的是“PHP：Hypertext Preprocessor”，它是个递归首字母缩写。它是一个跨平台脚本语言，深受C、C++和Java的影响。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/php-command-line-usage.jpeg" alt="Run PHP Codes in Linux Command Line"></p><p><em>在 Linux 命令行中运行 PHP 代码</em></p><p>PHP的语法和C、Java以及带有一些PHP特性的Perl变成语言中的语法十分相似，它当下大约正被2.6亿个网站所使用，当前最新的稳定版本是PHP版本5.6.10。</p><p>PHP是HTML的嵌入脚本，它便于开发人员快速写出动态生成的页面。PHP主要用于服务器端（而Javascript则用于客户端）以通过HTTP生成动态网页，然而，当你知道可以在Linux终端中不需要网页浏览器来执行PHP时，你或许会大为惊讶。</p><p>本文将阐述PHP脚本语言的命令行方面。</p><p><strong>1. 在安装完PHP和Apache2后，我们需要安装PHP命令行解释器。</strong></p><pre><code># apt-get install php5-cli 			[Debian 及类似系统]
# yum install php-cli 				[CentOS 及类似系统]
</code></pre><p>接下来我们通常要做的是，在<code>/var/www/html</code>（这是 Apache2 在大多数发行版中的工作目录）这个位置创建一个内容为 <code>&lt;?php phpinfo(); ?&gt;</code>，名为 <code>infophp.php</code> 的文件来测试（PHP是否安装正确），执行以下命令即可。</p><pre><code># echo &#39;&lt;?php phpinfo(); ?&gt;&#39; &gt; /var/www/html/infophp.php
</code></pre>`,11)),r("p",null,[p[1]||(p[1]=e("然后，将浏览器访问 ",-1)),n(t,{href:"http://127.0.0.1/infophp.php"},{default:o(()=>[...p[0]||(p[0]=[e("http://127.0.0.1/infophp.php",-1)])]),_:1}),p[2]||(p[2]=e(" ，这将会在网络浏览器中打开该文件。",-1))]),p[19]||(p[19]=i(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-PHP-Info.png" alt="Check PHP Info"></p><p><em>检查PHP信息</em></p><p>不需要任何浏览器，在Linux终端中也可以获得相同的结果。在Linux命令行中执行<code>/var/www/html/infophp.php</code>，如：</p><pre><code># php -f /var/www/html/infophp.php
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-PHP-info-from-Commandline.png" alt="Check PHP info from Commandline"></p><p><em>从命令行检查PHP信息</em></p><p>由于输出结果太大，我们可以通过管道将上述输出结果输送给 <code>less</code> 命令，这样就可以一次输出一屏了，命令如下：</p><pre><code># php -f /var/www/html/infophp.php | less
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-All-PHP-Info.png" alt="Check All PHP Info"></p><p><em>检查所有PHP信息</em></p><p>这里，‘-f‘选项解析并执行命令后跟随的文件。</p><p><strong>2. 我们可以直接在Linux命令行使用<code>phpinfo()</code>这个十分有价值的调试工具而不需要从文件来调用，只需执行以下命令：</strong></p><pre><code># php -r &#39;phpinfo();&#39;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/PHP-Debugging-Tool.png" alt="PHP Debugging Tool"></p><p><em>PHP调试工具</em></p><p>这里，‘-r‘ 选项会让PHP代码在Linux终端中不带<code>&lt;</code>和<code>&gt;</code>标记直接执行。</p><p><strong>3. 以交互模式运行PHP并做一些数学运算。这里，‘-a‘ 选项用于以交互模式运行PHP。</strong></p><pre><code># php -a

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
</code></pre><p>输入 ‘exit‘ 或者按下 ‘ctrl+c‘ 来关闭PHP交互模式。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Enable-PHP-interactive-mode1.png" alt="Enable PHP Interactive Mode"></p><p><em>启用PHP交互模式</em></p><p><strong>4. 你可以仅仅将PHP脚本作为shell脚本来运行。首先，创建在你当前工作目录中创建一个PHP样例脚本。</strong></p><pre><code># echo -e &#39;#!/usr/bin/php\\n&lt;?php phpinfo(); ?&gt;&#39; &gt; phpscript.php
</code></pre><p>注意，我们在该PHP脚本的第一行使用<code>#!/usr/bin/php</code>，就像在shell脚本中那样（<code>/bin/bash</code>）。第一行的<code>#!/usr/bin/php</code>告诉Linux命令行用 PHP 解释器来解析该脚本文件。</p><p>其次，让该脚本可执行：</p><pre><code># chmod 755 phpscript.php
</code></pre><p>接着来运行它，</p><pre><code># ./phpscript.php
</code></pre><p><strong>5. 你可以完全靠自己通过交互shell来创建简单函数，这你一定会被惊到了。下面是循序渐进的指南。</strong></p><p>开启PHP交互模式。</p><pre><code># php -a
</code></pre><p>创建一个函数，将它命名为 <code>addition</code>。同时，声明两个变量 <code>$a</code> 和 <code>$b</code>。</p><pre><code>php &gt; function addition ($a, $b)
</code></pre><p>使用花括号来在其间为该函数定义规则。</p><pre><code>php &gt; {
</code></pre><p>定义规则。这里，该规则讲的是添加这两个变量。</p><pre><code>php { echo $a + $b;
</code></pre><p>所有规则定义完毕，通过闭合花括号来封装规则。</p><pre><code>php {}
</code></pre><p>测试函数，添加数字4和3，命令如下：</p><pre><code>php &gt; var_dump (addition(4,3));
</code></pre><h4 id="样例输出" tabindex="-1">样例输出 <a class="header-anchor" href="#样例输出" aria-label="Permalink to “样例输出”">​</a></h4><pre><code>7NULL
</code></pre><p>你可以运行以下代码来执行该函数，你可以测试不同的值，你想来多少次都行。将里头的 a 和 b 替换成你自己的值。</p><pre><code>php &gt; var_dump (addition(a,b));
</code></pre><hr><pre><code>php &gt; var_dump (addition(9,3.3));
</code></pre><h4 id="样例输出-1" tabindex="-1">样例输出 <a class="header-anchor" href="#样例输出-1" aria-label="Permalink to “样例输出”">​</a></h4><pre><code>12.3NULL
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Create-PHP-Functions.png" alt="Create PHP Functions"></p><p><em>创建PHP函数</em></p><p>你可以一直运行该函数，直至退出交互模式（ctrl+z）。同时，你也应该注意到了，上面输出结果中返回的数据类型为 NULL。这个问题可以通过要求 php 交互 shell用 return 代替 echo 返回结果来修复。</p><p>只需要在上面的函数的中 ‘echo‘ 声明用 ‘return‘ 来替换</p><p>替换</p><pre><code>php { echo $a + $b;
</code></pre><p>为</p><pre><code>php { return $a + $b;
</code></pre><p>剩下的东西和原理仍然一样。</p><p>这里是一个样例，在该样例的输出结果中返回了正确的数据类型。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/PHP-Functions.png" alt="PHP Functions"></p><p><em>PHP函数</em></p><p>永远都记住，用户定义的函数不会从一个shell会话保留到下一个shell会话，因此，一旦你退出交互shell，它就会丢失了。</p><p>希望你喜欢此次教程。保持连线，你会获得更多此类文章。保持关注，保持健康。请在下面的评论中为我们提供有价值的反馈。点赞并分享，帮助我们扩散。</p>`,63)),r("p",null,[p[4]||(p[4]=e("还请阅读： ",-1)),n(t,{href:"http://www.tecmint.com/execute-php-codes-functions-in-linux-commandline/"},{default:o(()=>[...p[3]||(p[3]=[e("12个Linux终端中有用的的PHP命令行用法——第二部分",-1)])]),_:1})]),p[20]||(p[20]=r("hr",null,null,-1)),r("p",null,[p[6]||(p[6]=e("via: ",-1)),n(t,{href:"http://www.tecmint.com/run-php-codes-from-linux-commandline/"},{default:o(()=>[...p[5]||(p[5]=[e("http://www.tecmint.com/run-php-codes-from-linux-commandline/",-1)])]),_:1})]),r("p",null,[p[10]||(p[10]=e("作者：",-1)),n(t,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...p[7]||(p[7]=[e("Avishek Kumar",-1)])]),_:1}),p[11]||(p[11]=e(" 译者：",-1)),n(t,{href:"https://github.com/GOLinux"},{default:o(()=>[...p[8]||(p[8]=[e("GOLinux",-1)])]),_:1}),p[12]||(p[12]=e(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...p[9]||(p[9]=[e("wxy",-1)])]),_:1})]),r("p",null,[p[15]||(p[15]=e("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...p[13]||(p[13]=[e("LCTT",-1)])]),_:1}),p[16]||(p[16]=e(" 原创翻译，",-1)),n(t,{href:"https://linux.cn/"},{default:o(()=>[...p[14]||(p[14]=[e("Linux中国",-1)])]),_:1}),p[17]||(p[17]=e(" 荣誉推出",-1))])])}const L=d(s,[["render",c]]);export{x as __pageData,L as default};
