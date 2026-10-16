import{_ as a,a0 as c,w as p,s as r,ao as d,I as l,x as e,a1 as n,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse(`{"title":"15個關於Linux的‘cd’命令的練習例子 | LCTT x X-CMD","titleTemplate":false,"description":"15個關於Linux的‘cd’命令的練習例子 | LCTT (201409) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"15個關於Linux的‘cd’命令的練習例子 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"15個關於Linux的‘cd’命令的練習例子 | LCTT (201409) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201409/20140822 15 Practical Examples of 'cd' Command in Linux","title":"15個關於Linux的‘cd’命令的練習例子","tag":"201409","desc":""},"relativePath":"201409/20140822 15 Practical Examples of 'cd' Command in Linux.md","filePath":"[post].md"}`),s={name:"201409/20140822 15 Practical Examples of 'cd' Command in Linux.md"};function m(u,t,v,x,w,$){const i=c("Link");return p(),r("div",null,[t[13]||(t[13]=d(`<h1 id="_15個關於linux的-cd-命令的練習例子" tabindex="-1">15個關於Linux的‘cd’命令的練習例子 <a class="header-anchor" href="#_15個關於linux的-cd-命令的練習例子" aria-label="Permalink to “15個關於Linux的‘cd’命令的練習例子”">​</a></h1><p>在Linux中，<strong>‘cd‘（改變目錄）</strong>命令，是對新手和系統管理員來説，最重要最常用的命令。對管理無圖形界面的服務器的管理員，‘<strong>cd</strong>‘是進入目錄，檢查日誌，執行程序/應用軟件/腳本和其餘每個任務的唯一方法。對新手來説，是他們必須自己動手學習的最初始命令</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/08/cd-command-in-linux.png" alt="15 cd command examples in linux"></p><p><em>Linux中15個cd命令舉例</em></p><p>所以，請用心學習，我們在這會帶給你<strong>15</strong>個基礎的‘<strong>cd</strong>‘命令，它們富有技巧和捷徑，學會使用這些瞭解到的技巧，會大大減少你在終端上花費的努力和時間</p><h3 id="課程細節" tabindex="-1">課程細節 <a class="header-anchor" href="#課程細節" aria-label="Permalink to “課程細節”">​</a></h3><ul><li>命令名稱：cd</li><li>代表：切換目錄</li><li>使用平台：所有Linux發行版本</li><li>執行方式：命令列</li><li>權限：訪問自己的目錄或者其餘指定目錄</li><li>級別：基礎/初學者</li></ul><ol><li><p>從當前目錄切換到/usr/local</p><pre><code> avi@tecmint:~$ cd /usr/local
 avi@tecmint:/usr/local$
</code></pre></li><li><p>使用絕對路徑，從當前目錄切換到/usr/local/lib</p><pre><code> avi@tecmint:/usr/local$ cd /usr/local/lib
	avi@tecmint:/usr/local/lib$
</code></pre></li><li><p>使用相對路徑，從當前路徑切換到/usr/local/lib</p><pre><code> avi@tecmint:/usr/local$ cd lib
 avi@tecmint:/usr/local/lib$
</code></pre></li><li><p><strong>（a）</strong>切換當前目錄到上級目錄</p><pre><code> avi@tecmint:/usr/local/lib$ cd -
 /usr/local
 avi@tecmint:/usr/local$
</code></pre><p><strong>（b）</strong>切換當前目錄到上級目錄</p><pre><code> avi@tecmint:/usr/local/lib$ cd ..
 avi@tecmint:/usr/local$
</code></pre></li><li><p>顯示我們最後一個離開的工作目錄（使用‘-’選項）</p><pre><code> avi@tecmint:/usr/local$ cd --
 /home/avi
</code></pre></li><li><p>從當前目錄向上級返回兩層</p><pre><code> avi@tecmint:/usr/local$ cd ../../
 avi@tecmint:/$
</code></pre></li><li><p>從任何目錄返回到用户home目錄</p><pre><code> avi@tecmint:/usr/local$ cd ~
 avi@tecmint:~$
</code></pre><p>或</p><pre><code> avi@tecmint:/usr/local$ cd
 avi@tecmint:~$
</code></pre></li><li><p>切換工作目錄到當前工作目錄（LCTT：這有什麼意義嘛？！）</p><pre><code> avi@tecmint:~/Downloads$ cd .
 avi@tecmint:~/Downloads$
</code></pre><p>或</p><pre><code> avi@tecmint:~/Downloads$ cd ./
 avi@tecmint:~/Downloads$
</code></pre></li><li><p>你當前目錄是“/usr/local/lib/python3.4/dist-packages”，現在要切換到“/home/avi/Desktop/”，要求：一行命令，通過向上一直切換直到‘/’，然後使用絕對路徑</p><pre><code> avi@tecmint:/usr/local/lib/python3.4/dist-packages$ cd ../../../../../home/avi/Desktop/
 avi@tecmint:~/Desktop$
</code></pre></li><li><p>從當前工作目錄切換到/var/www/html，要求：不要將命令打完整，使用TAB</p><pre><code>avi@tecmint:/var/www$ cd /v&lt;TAB&gt;/w&lt;TAB&gt;/h&lt;TAB&gt;
avi@tecmint:/var/www/html$
</code></pre></li><li><p>從當前目錄切換到/etc/v__ _，啊呀，你竟然忘了目錄的名字，但是你又不想用TAB</p><pre><code>avi@tecmint:~$ cd /etc/v*
avi@tecmint:/etc/vbox$
</code></pre><p><strong>請注意：</strong>如果只有一個目錄以‘<strong>v</strong>‘開頭，這將會移動到‘<strong>vbox</strong>‘。如果有很多目錄以‘<strong>v</strong>‘開頭，而且命令列中沒有提供更多的標準，這將會移動到第一個以‘<strong>v</strong>‘開頭的目錄（按照他們在標準字典裏字母存在的順序）</p></li><li><p>你想切換到用户‘<strong>av</strong>‘（不確定是avi還是avt）目錄，不用<strong>TAB</strong></p><pre><code>avi@tecmint:/etc$ cd /home/av?
avi@tecmint:~$
</code></pre></li><li><p>Linux下的pushed和poped</p><p>Pushed和poped是Linux bash命令，也是其他幾個能夠保存當前工作目錄位置至內存，並且從內存讀取目錄作為當前目錄的腳本，這些腳本也可以切換目錄</p><pre><code>avi@tecmint:~$ pushd /var/www/html
/var/www/html ~
avi@tecmint:/var/www/html$ 
</code></pre><p>上面的命令保存當前目錄到內存，然後切換到要求的目錄。一旦poped被執行，它會從內存取出保存的目錄位置，作為當前目錄</p><pre><code>avi@tecmint:/var/www/html$ popd
~
avi@tecmint:~$
</code></pre></li><li><p>切換到名字帶有空格的目錄</p><pre><code>avi@tecmint:~$ cd test\\ tecmint/
avi@tecmint:~/test tecmint$
</code></pre><p>或</p><pre><code>avi@tecmint:~$ cd &#39;test tecmint&#39;
avi@tecmint:~/test tecmint$
</code></pre><p>或</p><pre><code>avi@tecmint:~$ cd &quot;test tecmint&quot;/
avi@tecmint:~/test tecmint$
</code></pre></li><li><p>從當前目錄切換到下載目錄，然後列出它所包含的內容（使用一行命令）</p><pre><code>avi@tecmint:/usr$ cd ~/Downloads &amp;&amp; ls
...
.
service_locator_in.xls
sources.list
teamviewer_linux_x64.deb
tor-browser-linux64-3.6.3_en-US.tar.xz
.
...
</code></pre></li></ol><p>我們嘗試使用最少的詞句和一如既往的友好，來讓你瞭解Linux的工作和執行</p><p>這就是所有內容。我很快會帶着另一個有趣的主題回來的。</p><hr>`,11)),l("p",null,[t[1]||(t[1]=e("via: ",-1)),n(i,{href:"http://www.tecmint.com/cd-command-in-linux/"},{default:o(()=>[...t[0]||(t[0]=[e("http://www.tecmint.com/cd-command-in-linux/",-1)])]),_:1})]),l("p",null,[t[5]||(t[5]=e("作者：",-1)),n(i,{href:"http://www.tecmint.com/author/avishek/"},{default:o(()=>[...t[2]||(t[2]=[e("Avishek Kumar",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),n(i,{href:"https://github.com/su-kaiyao"},{default:o(()=>[...t[3]||(t[3]=[e("su-kaiyao",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),n(i,{href:"https://github.com/wxy"},{default:o(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),l("p",null,[t[10]||(t[10]=e("本文由 ",-1)),n(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),n(i,{href:"http://linux.cn/"},{default:o(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const f=a(s,[["render",m]]);export{L as __pageData,f as default};
