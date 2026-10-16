import{_ as s,a0 as l,w as d,s as a,ao as p,I as t,x as e,a1 as r,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"菜鳥教程：全面學習 pwd 命令 | LCTT x X-CMD","titleTemplate":false,"description":"菜鳥教程：全面學習 pwd 命令 | LCTT (201412) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"菜鳥教程：全面學習 pwd 命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"菜鳥教程：全面學習 pwd 命令 | LCTT (201412) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201412/20141124 15 pwd (Print Working Directory) Command Examples in Linux","title":"菜鳥教程：全面學習 pwd 命令","tag":"201412","desc":""},"relativePath":"201412/20141124 15 pwd (Print Working Directory) Command Examples in Linux.md","filePath":"[post].md"}'),m={name:"201412/20141124 15 pwd (Print Working Directory) Command Examples in Linux.md"};function g(w,n,c,h,u,f){const o=l("Link");return d(),a("div",null,[n[13]||(n[13]=p(`<h1 id="菜鳥教程-全面學習-pwd-命令" tabindex="-1">菜鳥教程：全面學習 pwd 命令 <a class="header-anchor" href="#菜鳥教程-全面學習-pwd-命令" aria-label="Permalink to “菜鳥教程：全面學習 pwd 命令”">​</a></h1><p>對於那些使用Linux命令列的人來説，‘<strong>pwd</strong>‘命令是非常有用的，它告訴你你現在在那個目錄，從根目錄(<strong>/</strong>)如何到達。特別是對於或許會在目錄的切換間容易糊塗的Linux新手而言，‘<strong>pwd</strong>‘ 可以拯救他們。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/pwd-command.png" alt="15 pwd Command Examples"></p><p><em>15個 pwd 命令示例</em></p><h3 id="什麼是pwd" tabindex="-1">什麼是pwd? <a class="header-anchor" href="#什麼是pwd" aria-label="Permalink to “什麼是pwd?”">​</a></h3><p>‘<strong>pwd</strong>‘ 代表的是‘<strong>Print Working Directory</strong>’（打印當前目錄）。如它的名字那樣，‘<strong>pwd</strong>’會打印出當前工作目錄，或簡單的來説就是當前用户所位於的目錄。它會打印出以根目錄 (<strong>/</strong>)為起點的完整目錄名（絕對目錄）。這條命令是一條shell內建命令，並且在大多數shell中都可以使用，如bash、Bourne shell，ksh、zsh等等。</p><h4 id="pwd的基本語法" tabindex="-1">pwd的基本語法: <a class="header-anchor" href="#pwd的基本語法" aria-label="Permalink to “pwd的基本語法:”">​</a></h4><pre><code># pwd [OPTION]
</code></pre><h4 id="pwd的選項" tabindex="-1">pwd的選項 <a class="header-anchor" href="#pwd的選項" aria-label="Permalink to “pwd的選項”">​</a></h4>`,9)),n[14]||(n[14]=t("table",{border:"0",cellspacing:"0"},[t("colgroup",{width:"126"}),t("colgroup",{width:"450"}),t("tbody",null,[t("tr",null,[t("td",{height:"21",align:"LEFT",style:{border:"1px solid #000000"}},[t("b",null,[t("span",{style:{"font-size":"small"}}," 選項")])]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("b",null,[t("span",{style:{"font-size":"small"}}," 描述")])])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," -L (即邏輯路徑logical )")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 使用環境中的路徑，即使包含了符號鏈接")])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," -P (即物理路徑physical)")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 避免所有的符號鏈接")])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," –help ")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 顯示幫助並退出")])]),t("tr",null,[t("td",{height:"19",align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," –version")]),t("td",{align:"LEFT",style:{border:"1px solid #000000"}},[t("span",{style:{"font-family":"Liberation Serif,Times New Roman","font-size":"small"}}," 輸出版本信息並退出")])])])],-1)),n[15]||(n[15]=t("p",null,[e("如果同時使用了‘"),t("strong",null,"-L"),e("‘和‘"),t("strong",null,"-P"),e("‘，‘"),t("strong",null,"-L"),e("‘會有更高的優先級。如果沒有指定參數，pwd會避開所有的軟鏈接，也就是説會使用‘"),t("strong",null,"-P"),e("‘參數。")],-1)),n[16]||(n[16]=t("p",null,"pwd的退出狀態:",-1)),n[17]||(n[17]=t("table",{border:"0",cellspacing:"0"},[t("colgroup",{width:"128"}),t("colgroup",{width:"151"}),t("tbody",null,[t("tr",null,[t("td",{height:"19",align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"0")]),t("td",{align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"成功")])]),t("tr",null,[t("td",{height:"19",align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"非零值")]),t("td",{align:"CENTER",style:{border:"1px solid #000000"}},[t("span",{style:{"font-size":"small"}},"失敗")])])])],-1)),n[18]||(n[18]=p(`<p>本篇的目的是採用例子讓你對‘<strong>pwd</strong>‘有更深入的領悟。</p><p><strong>1.</strong> 打印當前工作目錄.</p><pre><code>avi@tecmint:~$ /bin/pwd

/home/avi
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/pwd.gif" alt="Print Working Directory"></p><p><em>打印工作目錄</em></p><p><strong>2.</strong> 為文件夾創建一個符號鏈接（比如説在home目錄下創建一個<strong>htm</strong>鏈接指向<strong>/var/www/html</strong>）。進入新創建的目錄並打印出含有以及不含符號鏈接的目錄。</p><p>在home目錄下創建一個htm鏈接指向/var/www/html，並進入。</p><pre><code>avi@tecmint:~$ ln -s /var/www/html/ htm
avi@tecmint:~$ cd htm
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Create-Symbolic-Link.gif" alt="Create Symbolic Link"></p><p><em>創建符號鏈接</em></p><p><strong>3.</strong> 從當前環境中打印目錄即使它含有符號鏈接。</p><pre><code>avi@tecmint:~$ /bin/pwd -L

/home/avi/htm
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Print-Working-Directory.gif" alt="Print Current Working Directory"></p><p><em>打印工作目錄</em></p><p><strong>4.</strong> 解析符號鏈接並打印出物理目錄。</p><pre><code>avi@tecmint:~$ /bin/pwd -P

/var/www/html
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Print-Physical-Working-Directory.gif" alt="Print Physical Working Directory"></p><p><em>打印物理工作目錄</em></p><p><strong>5.</strong> 查看一下“<strong>pwd</strong>”和“<strong>pwd -P</strong>”的輸出是否一致，也就是説，如果沒有跟上選項，“<strong>pwd</strong>”時候會自動採用<strong>-P</strong>選項。</p><pre><code>avi@tecmint:~$ /bin/pwd

/var/www/html
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-pwd-Output.gif" alt="Check pwd Output"></p><p><em>檢查pwd輸出</em></p><p><strong>結論：</strong> 上面例子4和5的輸出很明顯（結果相同），當你“<strong>pwd</strong>”後面不帶參數時，pwd會使用“<strong>-P</strong>”選項。</p><p><strong>6.</strong> 打印pwd命令的版本。</p><pre><code>avi@tecmint:~$ /bin/pwd --version

pwd (GNU coreutils) 8.23
Copyright (C) 2014 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later &lt;http://gnu.org/licenses/gpl.html&gt;.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Jim Meyering.
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-pwd-Version.gif" alt="Check pwd Version"></p><p><em>檢查pwd命令版本</em></p><p><strong>注意：</strong> ‘pwd’ 通常不帶選項運行，且沒有任何參數</p><p><strong>重要：</strong> 你可能注意到我們剛才運行的都是 “<strong>/bin/pwd</strong>” 而不是 “<strong>pwd</strong>”。</p><p>這有什麼區別呢？直接使用“<strong>pwd</strong>”意味着使用shell內置的pwd。你的shell可能有不同版本的pwd。具體請參考手冊。當你使用的是<strong>/bin/pwd</strong>時，我們調用的是二進制版本的命令。雖然二進制的版本有更多的選項，但是它們兩者都能打印當前的目錄。</p><p><strong>7.</strong> 打印所有含有可執行pwd的路徑</p><pre><code>avi@tecmint:~$ type -a pwd

pwd is a shell builtin
pwd is /bin/pwd
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Print-Executable-Locations.gif" alt="Print Executable Locations"></p><p><em>打印可執行文件路徑</em></p><p><strong>8.</strong> 存儲“<strong>pwd</strong>”命令的值到變量中（比如説：<strong>a</strong> ），並從中打印變量的值（對於觀察shell腳本很重要）。</p><pre><code>avi@tecmint:~$ a=$(pwd)
avi@tecmint:~$ echo &quot;Current working directory is : $a&quot;

Current working directory is : /home/avi
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Store-Pwd-Value-in-Variable.gif" alt="Store Pwd Value in Variable"></p><p><em>存儲pwd的值到變量中</em></p><p>下面的例子中也可以用<strong>printf</strong>來替代。</p><p><strong>9.</strong> 將工作路徑切換到其他地方（比如説 <strong>/home</strong>），並在命令列中顯示。通過執行命令（比如説 ‘<strong>ls</strong>‘）來驗證一切<strong>OK</strong>。</p><pre><code>avi@tecmint:~$ cd /home
avi@tecmint:~$ PS1=&#39;$pwd&gt; &#39;		[注意例子中的單引號]
&gt; ls
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Change-Current-Working-Directory.gif" alt="Change Current Working Directory"></p><p><em>改變當前工作路徑</em></p><p><strong>10.</strong> 設置多行顯示 （就像下面這樣），</p><pre><code>/home
123#Hello#!
</code></pre><p>接着執行命令（比如説 <strong>ls</strong>）來檢驗一切<strong>OK</strong>。</p><pre><code>avi@tecmint:~$ PS1=&#39;
&gt; $PWD
$ 123#Hello#!
$ &#39;

/home
123#Hello#!
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Set-Multi-Commandline-Prompt.gif" alt="Set Multi Commandline Prompt"></p><p><em>設置多行顯示</em></p><p><strong>11.</strong> 一下子檢查當前工作路徑以及先前的工作路徑。</p><pre><code>avi@tecmint:~$ echo “$PWD $OLDPWD”

/home /home/avi
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/11/Check-Present-Previous-Working-Directory.gif" alt="Check Present Previous Working Directory"></p><p><em>檢查當前工作路徑</em></p><p><strong>12.</strong> pwd文件的絕對路徑（以<strong>/</strong>開始）。</p><pre><code>/bin/pwd 
</code></pre><p><strong>13.</strong> pwd源文件文件的絕對路徑（以<strong>/</strong>開始）。</p><pre><code>/usr/include/pwd.h 
</code></pre><p><strong>13.</strong> pwd手冊的絕對路徑（以<strong>/</strong>開始）。</p><pre><code>/usr/share/man/man1/pwd.1.gz
</code></pre><p><strong>15.</strong> 寫一個shell腳本分析home目錄下的一個目錄（比如<strong>tecmint</strong>）。如果當前目錄是<strong>tecmint</strong>就輸出“<strong>Well! You are in tecmint directory</strong>”接着輸出“<strong>Good Bye</strong>”，不然就在<strong>tecmint</strong>下面創建一個目錄並提示你cd進入它。</p><p>讓我們首先創建一個‘tecmint’目錄，在下面創建一個名為‘pwd.sh’的腳本文件。</p><pre><code>avi@tecmint:~$ mkdir tecmint
avi@tecmint:~$ cd tecmint
avi@tecmint:~$ nano pwd.sh
</code></pre><p>接下來在pwd.sh中加入下面的腳本。</p><pre><code>#!/bin/bash

x=&quot;$(pwd)&quot;
if [ &quot;$x&quot; == &quot;/home/$USER/tecmint&quot; ]
then
     {
      echo &quot;Well you are in tecmint directory&quot;
      echo &quot;Good Bye&quot;
     }
else
     {
      mkdir /home/$USER/tecmint
      echo &quot;Created Directory tecmint you may now cd to it&quot;
     }
fi
</code></pre><p>給予執行權限並運行。</p><pre><code>avi@tecmint:~$ chmod 755 pwd.sh
avi@tecmint:~$ ./pwd.sh

Well you are in tecmint directory
Good Bye
</code></pre><h4 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h4><p><strong>pwd</strong>是一個最簡單且會廣泛用到的命令。掌握好pwd是使用Linux終端的基礎。就是這些了。我很快會再帶來另外有趣的文章，請不要走開繼續關注我們。</p><hr>`,69)),t("p",null,[n[1]||(n[1]=e("via: ",-1)),r(o,{href:"http://www.tecmint.com/pwd-command-examples/"},{default:i(()=>[...n[0]||(n[0]=[e("http://www.tecmint.com/pwd-command-examples/",-1)])]),_:1})]),t("p",null,[n[5]||(n[5]=e("作者：",-1)),r(o,{href:"http://www.tecmint.com/author/avishek/"},{default:i(()=>[...n[2]||(n[2]=[e("Avishek Kumar",-1)])]),_:1}),n[6]||(n[6]=e(" 譯者：",-1)),r(o,{href:"https://github.com/geekpi"},{default:i(()=>[...n[3]||(n[3]=[e("geekpi",-1)])]),_:1}),n[7]||(n[7]=e(" 校對：",-1)),r(o,{href:"https://github.com/wxy"},{default:i(()=>[...n[4]||(n[4]=[e("wxy",-1)])]),_:1})]),t("p",null,[n[10]||(n[10]=e("本文由 ",-1)),r(o,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[8]||(n[8]=[e("LCTT",-1)])]),_:1}),n[11]||(n[11]=e(" 原創翻譯，",-1)),r(o,{href:"http://linux.cn/"},{default:i(()=>[...n[9]||(n[9]=[e("Linux中國",-1)])]),_:1}),n[12]||(n[12]=e(" 榮譽推出",-1))])])}const x=s(m,[["render",g]]);export{T as __pageData,x as default};
