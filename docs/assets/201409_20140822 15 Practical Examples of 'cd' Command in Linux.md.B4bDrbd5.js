import{_ as a,a0 as c,w as p,s as r,ao as d,I as l,x as e,a1 as n,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse(`{"title":"15个关于Linux的‘cd’命令的练习例子 | LCTT x X-CMD","titleTemplate":false,"description":"15个关于Linux的‘cd’命令的练习例子 | LCTT (201409) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"15个关于Linux的‘cd’命令的练习例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"15个关于Linux的‘cd’命令的练习例子 | LCTT (201409) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201409/20140822 15 Practical Examples of 'cd' Command in Linux","title":"15个关于Linux的‘cd’命令的练习例子","tag":"201409","desc":""},"relativePath":"201409/20140822 15 Practical Examples of 'cd' Command in Linux.md","filePath":"[post].md"}`),s={name:"201409/20140822 15 Practical Examples of 'cd' Command in Linux.md"};function m(u,t,v,x,w,$){const i=c("Link");return p(),r("div",null,[t[13]||(t[13]=d(`<h1 id="_15个关于linux的-cd-命令的练习例子" tabindex="-1">15个关于Linux的‘cd’命令的练习例子 <a class="header-anchor" href="#_15个关于linux的-cd-命令的练习例子" aria-label="Permalink to “15个关于Linux的‘cd’命令的练习例子”">​</a></h1><p>在Linux中，<strong>‘cd‘（改变目录）</strong>命令，是对新手和系统管理员来说，最重要最常用的命令。对管理无图形界面的服务器的管理员，‘<strong>cd</strong>‘是进入目录，检查日志，执行程序/应用软件/脚本和其余每个任务的唯一方法。对新手来说，是他们必须自己动手学习的最初始命令</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/08/cd-command-in-linux.png" alt="15 cd command examples in linux"></p><p><em>Linux中15个cd命令举例</em></p><p>所以，请用心学习，我们在这会带给你<strong>15</strong>个基础的‘<strong>cd</strong>‘命令，它们富有技巧和捷径，学会使用这些了解到的技巧，会大大减少你在终端上花费的努力和时间</p><h3 id="课程细节" tabindex="-1">课程细节 <a class="header-anchor" href="#课程细节" aria-label="Permalink to “课程细节”">​</a></h3><ul><li>命令名称：cd</li><li>代表：切换目录</li><li>使用平台：所有Linux发行版本</li><li>执行方式：命令行</li><li>权限：访问自己的目录或者其余指定目录</li><li>级别：基础/初学者</li></ul><ol><li><p>从当前目录切换到/usr/local</p><pre><code> avi@tecmint:~$ cd /usr/local
 avi@tecmint:/usr/local$
</code></pre></li><li><p>使用绝对路径，从当前目录切换到/usr/local/lib</p><pre><code> avi@tecmint:/usr/local$ cd /usr/local/lib
	avi@tecmint:/usr/local/lib$
</code></pre></li><li><p>使用相对路径，从当前路径切换到/usr/local/lib</p><pre><code> avi@tecmint:/usr/local$ cd lib
 avi@tecmint:/usr/local/lib$
</code></pre></li><li><p><strong>（a）</strong>切换当前目录到上级目录</p><pre><code> avi@tecmint:/usr/local/lib$ cd -
 /usr/local
 avi@tecmint:/usr/local$
</code></pre><p><strong>（b）</strong>切换当前目录到上级目录</p><pre><code> avi@tecmint:/usr/local/lib$ cd ..
 avi@tecmint:/usr/local$
</code></pre></li><li><p>显示我们最后一个离开的工作目录（使用‘-’选项）</p><pre><code> avi@tecmint:/usr/local$ cd --
 /home/avi
</code></pre></li><li><p>从当前目录向上级返回两层</p><pre><code> avi@tecmint:/usr/local$ cd ../../
 avi@tecmint:/$
</code></pre></li><li><p>从任何目录返回到用户home目录</p><pre><code> avi@tecmint:/usr/local$ cd ~
 avi@tecmint:~$
</code></pre><p>或</p><pre><code> avi@tecmint:/usr/local$ cd
 avi@tecmint:~$
</code></pre></li><li><p>切换工作目录到当前工作目录（LCTT：这有什么意义嘛？！）</p><pre><code> avi@tecmint:~/Downloads$ cd .
 avi@tecmint:~/Downloads$
</code></pre><p>或</p><pre><code> avi@tecmint:~/Downloads$ cd ./
 avi@tecmint:~/Downloads$
</code></pre></li><li><p>你当前目录是“/usr/local/lib/python3.4/dist-packages”，现在要切换到“/home/avi/Desktop/”，要求：一行命令，通过向上一直切换直到‘/’，然后使用绝对路径</p><pre><code> avi@tecmint:/usr/local/lib/python3.4/dist-packages$ cd ../../../../../home/avi/Desktop/
 avi@tecmint:~/Desktop$
</code></pre></li><li><p>从当前工作目录切换到/var/www/html，要求：不要将命令打完整，使用TAB</p><pre><code>avi@tecmint:/var/www$ cd /v&lt;TAB&gt;/w&lt;TAB&gt;/h&lt;TAB&gt;
avi@tecmint:/var/www/html$
</code></pre></li><li><p>从当前目录切换到/etc/v__ _，啊呀，你竟然忘了目录的名字，但是你又不想用TAB</p><pre><code>avi@tecmint:~$ cd /etc/v*
avi@tecmint:/etc/vbox$
</code></pre><p><strong>请注意：</strong>如果只有一个目录以‘<strong>v</strong>‘开头，这将会移动到‘<strong>vbox</strong>‘。如果有很多目录以‘<strong>v</strong>‘开头，而且命令行中没有提供更多的标准，这将会移动到第一个以‘<strong>v</strong>‘开头的目录（按照他们在标准字典里字母存在的顺序）</p></li><li><p>你想切换到用户‘<strong>av</strong>‘（不确定是avi还是avt）目录，不用<strong>TAB</strong></p><pre><code>avi@tecmint:/etc$ cd /home/av?
avi@tecmint:~$
</code></pre></li><li><p>Linux下的pushed和poped</p><p>Pushed和poped是Linux bash命令，也是其他几个能够保存当前工作目录位置至内存，并且从内存读取目录作为当前目录的脚本，这些脚本也可以切换目录</p><pre><code>avi@tecmint:~$ pushd /var/www/html
/var/www/html ~
avi@tecmint:/var/www/html$ 
</code></pre><p>上面的命令保存当前目录到内存，然后切换到要求的目录。一旦poped被执行，它会从内存取出保存的目录位置，作为当前目录</p><pre><code>avi@tecmint:/var/www/html$ popd
~
avi@tecmint:~$
</code></pre></li><li><p>切换到名字带有空格的目录</p><pre><code>avi@tecmint:~$ cd test\\ tecmint/
avi@tecmint:~/test tecmint$
</code></pre><p>或</p><pre><code>avi@tecmint:~$ cd &#39;test tecmint&#39;
avi@tecmint:~/test tecmint$
</code></pre><p>或</p><pre><code>avi@tecmint:~$ cd &quot;test tecmint&quot;/
avi@tecmint:~/test tecmint$
</code></pre></li><li><p>从当前目录切换到下载目录，然后列出它所包含的内容（使用一行命令）</p><pre><code>avi@tecmint:/usr$ cd ~/Downloads &amp;&amp; ls
...
.
service_locator_in.xls
sources.list
teamviewer_linux_x64.deb
tor-browser-linux64-3.6.3_en-US.tar.xz
.
...
</code></pre></li></ol><p>我们尝试使用最少的词句和一如既往的友好，来让你了解Linux的工作和执行</p><p>这就是所有内容。我很快会带着另一个有趣的主题回来的。</p><hr>`,11)),l("p",null,[t[1]||(t[1]=e("via: ",-1)),n(i,{href:"http://www.tecmint.com/cd-command-in-linux/"},{default:o(()=>[...t[0]||(t[0]=[e("http://www.tecmint.com/cd-command-in-linux/",-1)])]),_:1})]),l("p",null,[t[5]||(t[5]=e("作者：",-1)),n(i,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...t[2]||(t[2]=[e("Avishek Kumar",-1)])]),_:1}),t[6]||(t[6]=e(" 译者：",-1)),n(i,{href:"https://github.com/su-kaiyao"},{default:o(()=>[...t[3]||(t[3]=[e("su-kaiyao",-1)])]),_:1}),t[7]||(t[7]=e(" 校对：",-1)),n(i,{href:"https://github.com/wxy"},{default:o(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),l("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原创翻译，",-1)),n(i,{href:"http://linux.cn/"},{default:o(()=>[...t[9]||(t[9]=[e("Linux中国",-1)])]),_:1}),t[12]||(t[12]=e(" 荣誉推出",-1))])])}const f=a(s,[["render",m]]);export{L as __pageData,f as default};
