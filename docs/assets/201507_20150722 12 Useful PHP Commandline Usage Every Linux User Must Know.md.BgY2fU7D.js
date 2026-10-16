import{_ as r,a0 as l,w as P,s as i,I as s,x as p,a1 as n,A as o,ao as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法 | LCTT x X-CMD","titleTemplate":false,"description":"在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150722 12 Useful PHP Commandline Usage Every Linux User Must Know","title":"在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法","tag":"201507","desc":""},"relativePath":"201507/20150722 12 Useful PHP Commandline Usage Every Linux User Must Know.md","filePath":"[post].md"}'),m={name:"201507/20150722 12 Useful PHP Commandline Usage Every Linux User Must Know.md"};function c(d,e,h,u,g,H){const t=l("Link");return P(),i("div",null,[e[16]||(e[16]=s("h1",{id:"在-linux-命令行中使用和执行-php-代码-二-12-个-php-交互性-shell-的用法",tabindex:"-1"},[p("在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法 "),s("a",{class:"header-anchor",href:"#在-linux-命令行中使用和执行-php-代码-二-12-个-php-交互性-shell-的用法","aria-label":"Permalink to “在 Linux 命令行中使用和执行 PHP 代码（二）：12 个 PHP 交互性 shell 的用法”"},"​")],-1)),s("p",null,[e[1]||(e[1]=p("在上一篇文章“",-1)),n(t,{href:"https://linux.cn/article-5906-1.html"},{default:o(()=>[...e[0]||(e[0]=[p("在 Linux 命令行中使用和执行 PHP 代码（一）",-1)])]),_:1}),e[2]||(e[2]=p("”中，我同时着重讨论了直接在Linux命令行中运行PHP代码以及在Linux终端中执行PHP脚本文件。",-1))]),e[17]||(e[17]=a(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Run-PHP-Codes-in-Linux-Commandline.jpeg" alt="Run PHP Codes in Linux Commandline"></p><p>本文旨在让你了解一些相当不错的Linux终端中的PHP交互性 shell 的用法特性。</p><p>让我们先在PHP 的交互shell中来对<code>php.ini</code>设置进行一些配置吧。</p><p><strong>6. 设置PHP命令行提示符</strong></p><p>要设置PHP命令行提示，你需要在Linux终端中使用下面的php -a（启用PHP交互模式）命令开启一个PHP交互shell。</p><pre><code>$ php -a
</code></pre><p>然后，设置任何东西（比如说Hi Tecmint ::）作为PHP交互shell的命令提示符，操作如下：</p><pre><code>php &gt; #cli.prompt=Hi Tecmint ::
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Enable-PHP-Interactive-Shell.png" alt="Enable PHP Interactive Shell"></p><p><em>启用PHP交互Shell</em></p><p>同时，你也可以设置当前时间作为你的命令行提示符，操作如下：</p><pre><code>php &gt; #cli.prompt=\`echo date(&#39;H:m:s&#39;);\` &gt;

22:15:43 &gt;
</code></pre><p><strong>7. 每次输出一屏</strong></p><p>在我们上一篇文章中，我们已经在原始命令中通过管道在很多地方使用了<code>less</code>命令。通过该操作，我们可以在那些不能一屏全部输出的地方获得分屏显示。但是，我们可以通过配置php.ini文件，设置pager的值为less以每次输出一屏，操作如下：</p><pre><code>$ php -a
php &gt; #cli.pager=less
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Fix-PHP-Screen-Output.png" alt="Fix PHP Screen Output"></p><p><em>限制PHP屏幕输出</em></p><p>这样，下次当你运行一个命令（比如说条调试器<code>phpinfo();</code>）的时候，而该命令的输出内容又太过庞大而不能固定在一屏，它就会自动产生适合你当前屏幕的输出结果。</p><pre><code>php &gt; phpinfo();
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/PHP-Info-Output.png" alt="PHP Info Output"></p><p><em>PHP信息输出</em></p><p><strong>8. 建议和TAB补全</strong></p><p>PHP shell足够智能，它可以显示给你建议和进行TAB补全，你可以通过TAB键来使用该功能。如果对于你想要用TAB补全的字符串而言有多个选项，那么你需要使用两次TAB键来完成，其它情况则使用一次即可。</p><p>如果有超过一个的可能性，请使用两次TAB键。</p><pre><code>php &gt; ZIP [TAB] [TAB]
</code></pre><p>如果只有一个可能性，只要使用一次TAB键。</p><pre><code>php &gt; #cli.pager [TAB]
</code></pre><p>你可以一直按TAB键来获得建议的补全，直到该值满足要求。所有的行为都将记录到<code>~/.php-history</code>文件。</p><p>要检查你的PHP交互shell活动日志，你可以执行：</p><pre><code>$ nano ~/.php_history | less
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-PHP-Interactive-Shell-Logs.png" alt="Check PHP Interactive Shell Logs"></p><p><em>检查PHP交互Shell日志</em></p><p><strong>9. 你可以在PHP交互shell中使用颜色，你所需要知道的仅仅是颜色代码。</strong></p><p>使用echo来打印各种颜色的输出结果，类似这样：</p><pre><code>php &gt; echo &quot;color_code1 TEXT second_color_code&quot;;
</code></pre><p>具体来说是：</p><pre><code>php &gt; echo &quot;\\033[0;31m Hi Tecmint \\x1B[0m&quot;;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Enable-Colors-in-PHP-Shell.png" alt="Enable Colors in PHP Shell"></p><p><em>在PHP Shell中启用彩色</em></p><p>到目前为止，我们已经看到，按回车键意味着执行命令，然而PHP Shell中各个命令结尾的分号是必须的。</p><p><strong>10. 在PHP shell中用basename()输出路径中最后一部分</strong></p><p>PHP shell中的basename函数可以从给出的包含有到文件或目录路径的最后部分。</p><p>basename()样例#1和#2。</p><pre><code>php &gt; echo basename(&quot;/var/www/html/wp/wp-content/plugins&quot;);
php &gt; echo basename(&quot;www.tecmint.com/contact-us.html&quot;);
</code></pre><p>上述两个样例将输出：</p><pre><code>plugins
contact-us.html
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Print-Base-Name-in-PHP.png" alt="Print Base Name in PHP"></p><p><em>在PHP中打印基本名称</em></p><p><strong>11. 你可以使用PHP交互shell在你的桌面创建文件（比如说test1.txt），就像下面这么简单</strong></p><pre><code>php&gt; touch(&quot;/home/avi/Desktop/test1.txt&quot;);
</code></pre><p>我们已经见识了PHP交互shell在数学运算中有多优秀，这里还有更多一些例子会令你吃惊。</p><p><strong>12. 使用PHP交互shell打印比如像tecmint.com这样的字符串的长度</strong></p><p>strlen函数用于获取指定字符串的长度。</p><pre><code>php &gt; echo strlen(&quot;tecmint.com&quot;);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Print-Length-String-in-PHP.png" alt="Print Length String in PHP"></p><p><em>在PHP中打印字符串长度</em></p><p><strong>13. PHP交互shell可以对数组排序，是的，你没听错</strong></p><p>声明变量a，并将其值设置为array(7,9,2,5,10)。</p><pre><code>php &gt; $a=array(7,9,2,5,10);
</code></pre><p>对数组中的数字进行排序。</p><pre><code>php &gt; sort($a);
</code></pre><p>以排序后的顺序打印数组中的数字，同时打印序号，第一个为[0]。</p><pre><code>php &gt; print_r($a);
Array
(
    [0] =&gt; 2
    [1] =&gt; 5
    [2] =&gt; 7
    [3] =&gt; 9
    [4] =&gt; 10
)
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Sort-Arrays-in-PHP.png" alt="Sort Arrays in PHP"></p><p><em>在PHP中对数组排序</em></p><p><strong>14. 在PHP交互Shell中获取π的值</strong></p><pre><code>php &gt; echo pi();

3.1415926535898
</code></pre><p><strong>15. 打印某个数比如32的平方根</strong></p><pre><code>php &gt; echo sqrt(150);

12.247448713916
</code></pre><p><strong>16. 从0-10的范围内挑选一个随机数</strong></p><pre><code>php &gt; echo rand(0, 10);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Get-Random-Number-in-PHP.png" alt="Get Random Number in PHP"></p><p><em>在PHP中获取随机数</em></p><p><strong>17. 获取某个指定字符串的md5校验和sha1校验，例如，让我们在PHP Shell中检查某个字符串（比如说avi）的md5校验和sha1校验，并交叉校验bash shell生成的md5校验和sha1校验的结果。</strong></p><pre><code>php &gt; echo md5(avi);
3fca379b3f0e322b7b7967bfcfb948ad

php &gt; echo sha1(avi);
8f920f22884d6fea9df883843c4a8095a2e5ac6f
</code></pre><hr><pre><code>$ echo -n avi | md5sum
3fca379b3f0e322b7b7967bfcfb948ad  -

$ echo -n avi | sha1sum
8f920f22884d6fea9df883843c4a8095a2e5ac6f  -
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/07/Check-md5sum-and-sha1sum.png" alt="Check md5sum and sha1sum in PHP"></p><p><em>在PHP中检查md5校验和sha1校验</em></p><p>这里只是PHP Shell中所能获取的功能和PHP Shell的交互特性的惊鸿一瞥，这些就是到现在为止我所讨论的一切。保持连线，在评论中为我们提供你有价值的反馈吧。为我们点赞并分享，帮助我们扩散哦。</p><hr>`,81)),s("p",null,[e[4]||(e[4]=p("via: ",-1)),n(t,{href:"http://www.tecmint.com/execute-php-codes-functions-in-linux-commandline/"},{default:o(()=>[...e[3]||(e[3]=[p("http://www.tecmint.com/execute-php-codes-functions-in-linux-commandline/",-1)])]),_:1})]),s("p",null,[e[8]||(e[8]=p("作者：",-1)),n(t,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...e[5]||(e[5]=[p("Avishek Kumar",-1)])]),_:1}),e[9]||(e[9]=p(" 译者：",-1)),n(t,{href:"https://github.com/GOLinux"},{default:o(()=>[...e[6]||(e[6]=[p("GOLinux",-1)])]),_:1}),e[10]||(e[10]=p(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:o(()=>[...e[7]||(e[7]=[p("wxy",-1)])]),_:1})]),s("p",null,[e[13]||(e[13]=p("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[11]||(e[11]=[p("LCTT",-1)])]),_:1}),e[14]||(e[14]=p(" 原创翻译，",-1)),n(t,{href:"https://linux.cn/"},{default:o(()=>[...e[12]||(e[12]=[p("Linux中国",-1)])]),_:1}),e[15]||(e[15]=p(" 荣誉推出",-1))])])}const T=r(m,[["render",c]]);export{x as __pageData,T as default};
