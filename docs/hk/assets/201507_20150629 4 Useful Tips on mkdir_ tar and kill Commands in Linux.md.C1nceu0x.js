import{_ as o,a0 as l,w as d,s as m,I as n,x as t,a1 as r,A as i,ao as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"Linux mkdir、tar 和 kill 命令的 4 個有用小技巧 | LCTT x X-CMD","titleTemplate":false,"description":"Linux mkdir、tar 和 kill 命令的 4 個有用小技巧 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux mkdir、tar 和 kill 命令的 4 個有用小技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux mkdir、tar 和 kill 命令的 4 個有用小技巧 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150629 4 Useful Tips on mkdir, tar and kill Commands in Linux","title":"Linux mkdir、tar 和 kill 命令的 4 個有用小技巧","tag":"201507","desc":""},"relativePath":"201507/20150629 4 Useful Tips on mkdir, tar and kill Commands in Linux.md","filePath":"[post].md"}'),s={name:"201507/20150629 4 Useful Tips on mkdir, tar and kill Commands in Linux.md"};function u(k,e,x,c,f,h){const p=l("Link");return d(),m("div",null,[e[22]||(e[22]=n("h1",{id:"linux-mkdir、tar-和-kill-命令的-4-個有用小技巧",tabindex:"-1"},[t("Linux mkdir、tar 和 kill 命令的 4 個有用小技巧 "),n("a",{class:"header-anchor",href:"#linux-mkdir、tar-和-kill-命令的-4-個有用小技巧","aria-label":"Permalink to “Linux mkdir、tar 和 kill 命令的 4 個有用小技巧”"},"​")],-1)),n("p",null,[e[1]||(e[1]=t("我們一直以常規的方式完成一個任務，直到我們知道有更好的處理方法。作為 ",-1)),r(p,{href:"http://www.tecmint.com/tag/linux-tricks/"},{default:i(()=>[...e[0]||(e[0]=[t("Linux 技巧和絕招系列",-1)])]),_:1}),e[2]||(e[2]=t(" 的後續，我會在這裏介紹能在各個方面給你幫助的 4 個小技巧。開始吧！",-1))]),e[23]||(e[23]=a(`<p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Linux-Useful-Tips.jpg" alt="有用的 Linux 小技巧"></p><p><em>4 個有用的 Linux 小技巧</em></p><h3 id="_1-假設你要創建一個類似於下面很長的-複雜的目錄樹。實現這最有效的方法是什麼呢" tabindex="-1">1. 假設你要創建一個類似於下面很長的/複雜的目錄樹。實現這最有效的方法是什麼呢？ <a class="header-anchor" href="#_1-假設你要創建一個類似於下面很長的-複雜的目錄樹。實現這最有效的方法是什麼呢" aria-label="Permalink to “1. 假設你要創建一個類似於下面很長的/複雜的目錄樹。實現這最有效的方法是什麼呢？”">​</a></h3><p>類似下面要實現的目錄樹結構。</p><pre><code>$ cd /home/$USER/Desktop
$ mkdir tecmint
$ mkdir tecmint/etc
$ mkdir tecmint/lib
$ mkdir tecmint/usr
$ mkdir tecmint/bin
$ mkdir tecmint/tmp
$ mkdir tecmint/opt
$ mkdir tecmint/var
$ mkdir tecmint/etc/x1
$ mkdir tecmint/usr/x2
$ mkdir tecmint/usr/x3
$ mkdir tecmint/tmp/Y1
$ mkdir tecmint/tmp/Y2
$ mkdir tecmint/tmp/Y3
$ mkdir tecmint/tmp/Y3/z
</code></pre><p>上述情況可以簡單地通過運行下面一行命令來實現。</p><pre><code>$ mkdir -p /home/$USER/Desktop/tecmint/{etc/x1,lib,usr/{x2,x3},bin,tmp/{Y1,Y2,Y3/z},opt,var}
</code></pre><p>你可以用 tree 命令驗證。如果沒有安裝你可以使用 apt 或 yum 安裝 ‘tree’ 軟件包。</p><pre><code>$ tree tecmint
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-Directory-Structure.png" alt="檢查目錄結構"></p><p><em>檢查目錄結構</em></p><p>我們可以用上面的方式創建任意複雜的目錄樹結構。注意這僅僅是一個普通的命令，但是用 ‘{}’ 來創建層級目錄。需要的時候如果在 shell 腳本中使用是非常有用的。</p><h3 id="_2-在桌面-home-user-desktop-創建一個文件-例如-test-並填入以下內容。" tabindex="-1">2. 在桌面（/home/$USER/Desktop）創建一個文件（例如 test）並填入以下內容。 <a class="header-anchor" href="#_2-在桌面-home-user-desktop-創建一個文件-例如-test-並填入以下內容。" aria-label="Permalink to “2. 在桌面（/home/$USER/Desktop）創建一個文件（例如 test）並填入以下內容。”">​</a></h3><pre><code>ABC
DEF
GHI
JKL
MNO
PQR
STU
VWX
Y
Z
</code></pre><p>這種情況一個普通用户會怎麼做呢？</p>`,15)),n("p",null,[e[4]||(e[4]=t("a. 他首先會創建文件，最好使用 ",-1)),r(p,{href:"http://www.tecmint.com/8-pratical-examples-of-linux-touch-command/"},{default:i(()=>[...e[3]||(e[3]=[t("touch 命令",-1)])]),_:1}),e[5]||(e[5]=t("，例如：",-1))]),e[24]||(e[24]=a(`<pre><code>$ touch /home/$USER/Desktop/test
</code></pre><p>b. 他會用一個文本編輯器打開文件，這可能是 nano、vim 或其它編輯器。</p><pre><code>$ nano /home/$USER/Desktop/test
</code></pre><p>c. 然後他會將上面的內容輸入到文件中，保存並退出。</p><p>忽略他/她使用的時間，他至少需要 3 步來執行上面的情況。</p><p>一個經驗豐富的 Linux 用户會怎麼做呢？他會在終端中輸入下面的文本然後就完成所有任務。他不需要單獨執行每一步。</p><pre><code>cat &lt;&lt; EOF &gt; /home/$USER/Desktop/test
ABC
DEF
GHI
JKL
MNO
PQR
STU
VWX
Y
Z
EOF
</code></pre><p>你可以用 ‘cat’ 命令檢查是否成功創建了文件和內容。</p><pre><code>$ cat /home/avi/Desktop/test
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/06/Check-File-Content.gif" alt="檢查文件內容"></p><h3 id="_3-我們經常在-linux-中處理歸檔文件-尤其是-tar-包-。很多情況下我們會在某些位置-而不是在-downloads-目錄中使用-tar-包。這種情況下我們怎麼做呢" tabindex="-1">3. 我們經常在 Linux 中處理歸檔文件（尤其是 TAR 包）。很多情況下我們會在某些位置，而不是在 Downloads 目錄中使用 TAR 包。這種情況下我們怎麼做呢？ <a class="header-anchor" href="#_3-我們經常在-linux-中處理歸檔文件-尤其是-tar-包-。很多情況下我們會在某些位置-而不是在-downloads-目錄中使用-tar-包。這種情況下我們怎麼做呢" aria-label="Permalink to “3. 我們經常在 Linux 中處理歸檔文件（尤其是 TAR 包）。很多情況下我們會在某些位置，而不是在 Downloads 目錄中使用 TAR 包。這種情況下我們怎麼做呢？”">​</a></h3><p>在這種情況下我們通常會做兩件事。</p><p>a. 複製/移動 tar 包到目標位置並解壓，例如：</p><pre><code>$ cp firefox-37.0.2.tar.bz2 /opt/
或
$ mv firefox-37.0.2.tar.bz2 /opt/
</code></pre><p>b. cd 到 /opt/ 目錄。</p><pre><code>$ cd /opt/
</code></pre><p>c. 解壓 tar 包。</p><pre><code># tar -jxvf firefox-37.0.2.tar.bz2 
</code></pre><p>我們也可以採用另外一種方式。</p><p>我們也可以在 Tar 包所在位置解壓並複製/移動解壓後的文件到所需的目標位置，例如：</p><pre><code>$ tar -jxvf firefox-37.0.2.tar.bz2 
$ cp -R firefox/  /opt/
或
$ mv firefox/ /opt/
</code></pre><p>不管哪種方式都需要兩步才能完成任務。專業的人可以只用一步就完成這個任務：</p><pre><code>$ tar -jxvf firefox-37.0.2.tar.bz2 -C /opt/
</code></pre><p>-C 選項提取文件到指定目錄（這裏是 /opt/）。</p><p>這並不是關於選項（-C）的問題，<strong>而是習慣的問題</strong>。養成使用帶 -C 選項 tar 命令的習慣。這會使你的工作更加輕鬆。從現在開始不要再移動歸檔文件或複製/移動解壓後的文件了，在 Downloads 文件夾保存 tar 包並解壓到你想要的任何地方吧。</p><h3 id="_4-常規方式我們怎樣殺掉一個進程" tabindex="-1">4. 常規方式我們怎樣殺掉一個進程？ <a class="header-anchor" href="#_4-常規方式我們怎樣殺掉一個進程" aria-label="Permalink to “4. 常規方式我們怎樣殺掉一個進程？”">​</a></h3><p>最普遍的方法，我們首先用 <code>ps -A</code> 命令列出所有進程，然後通過管道輸入到 grep 來查找進程/服務（假如 apache2），如下：</p><pre><code>$ ps -A | grep -i apache2
</code></pre><h4 id="輸出樣例" tabindex="-1">輸出樣例 <a class="header-anchor" href="#輸出樣例" aria-label="Permalink to “輸出樣例”">​</a></h4><pre><code> 1006 ?        00:00:00 apache2
 2702 ?        00:00:00 apache2
 2703 ?        00:00:00 apache2
 2704 ?        00:00:00 apache2
 2705 ?        00:00:00 apache2
 2706 ?        00:00:00 apache2
 2707 ?        00:00:00 apache2
</code></pre><p>上面的輸出顯示了所有正在運行 apache2 的進程以及它們的 PID，然後你可以使用這些 PID 在下面命令的幫助下殺掉 apache2。</p><pre><code># kill 1006 2702 2703 2704 2705 2706 2707
</code></pre><p>然後交叉檢查是否還有名稱中包含 ‘apache2’ 的進程/服務在運行，如下：</p><pre><code>$ ps -A | grep -i apache2
</code></pre><p>實際上我們可以使用類似 pgrep 和 pkill 的工具以一種更容易理解的方式實現。你可以使用 pgrep 找到和一個進程相關的信息。假如你要找和 apache2 相關的進程信息，你只需要運行：</p><pre><code>$ pgrep apache2
</code></pre><h4 id="輸出樣例-1" tabindex="-1">輸出樣例 <a class="header-anchor" href="#輸出樣例-1" aria-label="Permalink to “輸出樣例”">​</a></h4><pre><code>15396
15400
15401
15402
15403
15404
15405
</code></pre><p>你也可以通過運行下面命令列出進程名稱以及 pid。</p><pre><code>$ pgrep -l apache2
</code></pre><h4 id="輸出樣例-2" tabindex="-1">輸出樣例 <a class="header-anchor" href="#輸出樣例-2" aria-label="Permalink to “輸出樣例”">​</a></h4><pre><code>15396 apache2
15400 apache2
15401 apache2
15402 apache2
15403 apache2
15404 apache2
15405 apache2
</code></pre>`,42)),n("p",null,[e[7]||(e[7]=t("用 pkill 殺掉進程非常簡單。你只需要輸入想要殺死的資源名稱。我寫了一篇關於 pkill 的博文，你可以參考： ",-1)),r(p,{href:"http://www.tecmint.com/how-to-kill-a-process-in-linux/"},{default:i(()=>[...e[6]||(e[6]=[t("http://www.tecmint.com/how-to-kill-a-process-in-linux/",-1)])]),_:1}),e[8]||(e[8]=t("。",-1))]),e[25]||(e[25]=n("p",null,"用 pkill 殺死一個進程（例如 apache2），你只需要輸入以下命令：",-1)),e[26]||(e[26]=n("pre",null,[n("code",null,`# pkill apache2
`)],-1)),e[27]||(e[27]=n("p",null,"你可以通過運行下面命令驗證是否殺掉了 apache2。",-1)),e[28]||(e[28]=n("pre",null,[n("code",null,`$ pgrep -l apache2
`)],-1)),e[29]||(e[29]=n("p",null,"它沒有輸出任何東西並返回到窗口意味着沒有名稱中包含 apache2 的進程在運行。",-1)),e[30]||(e[30]=n("p",null,[t("這就是我要説的所有東西。上面討論的點肯定遠遠不夠，但也肯定對你有所幫助。我們不僅僅是介紹教程使你學到一些新的東西，更重要的是想告訴你 ‘"),n("strong",null,"在同樣的情況下如何變得更有效率"),t("’。在下面的評論框中告訴我們你的反饋吧。保持聯繫，繼續評論。")],-1)),e[31]||(e[31]=n("hr",null,null,-1)),n("p",null,[e[10]||(e[10]=t("via: ",-1)),r(p,{href:"http://www.tecmint.com/mkdir-tar-and-kill-commands-in-linux/"},{default:i(()=>[...e[9]||(e[9]=[t("http://www.tecmint.com/mkdir-tar-and-kill-commands-in-linux/",-1)])]),_:1})]),n("p",null,[e[14]||(e[14]=t("作者：",-1)),r(p,{href:"http://www.tecmint.com/author/avishek/"},{default:i(()=>[...e[11]||(e[11]=[t("Avishek Kumar",-1)])]),_:1}),e[15]||(e[15]=t(" 譯者：",-1)),r(p,{href:"https://github.com/ictlyh"},{default:i(()=>[...e[12]||(e[12]=[t("ictlyh",-1)])]),_:1}),e[16]||(e[16]=t(" 校對：",-1)),r(p,{href:"https://github.com/wxy"},{default:i(()=>[...e[13]||(e[13]=[t("wxy",-1)])]),_:1})]),n("p",null,[e[19]||(e[19]=t("本文由 ",-1)),r(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原創翻譯，",-1)),r(p,{href:"https://linux.cn/"},{default:i(()=>[...e[18]||(e[18]=[t("Linux中國",-1)])]),_:1}),e[21]||(e[21]=t(" 榮譽推出",-1))])])}const C=o(s,[["render",u]]);export{T as __pageData,C as default};
