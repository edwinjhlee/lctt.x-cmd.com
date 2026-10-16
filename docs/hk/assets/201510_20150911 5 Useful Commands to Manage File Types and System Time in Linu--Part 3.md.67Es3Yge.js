import{_ as p,a0 as o,w as m,s as a,I as i,x as n,a1 as r,A as l,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"5 個在 Linux 中管理文件類型和系統時間的有用命令 | LCTT x X-CMD","titleTemplate":false,"description":"5 個在 Linux 中管理文件類型和系統時間的有用命令 | LCTT (201510) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"5 個在 Linux 中管理文件類型和系統時間的有用命令 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"5 個在 Linux 中管理文件類型和系統時間的有用命令 | LCTT (201510) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201510/20150911 5 Useful Commands to Manage File Types and System Time in Linu--Part 3","title":"5 個在 Linux 中管理文件類型和系統時間的有用命令","tag":"201510","desc":""},"relativePath":"201510/20150911 5 Useful Commands to Manage File Types and System Time in Linu--Part 3.md","filePath":"[post].md"}'),d={name:"201510/20150911 5 Useful Commands to Manage File Types and System Time in Linu--Part 3.md"};function u(c,t,x,T,f,L){const e=o("Link");return m(),a("div",null,[t[26]||(t[26]=i("h1",{id:"_5-個在-linux-中管理文件類型和系統時間的有用命令",tabindex:"-1"},[n("5 個在 Linux 中管理文件類型和系統時間的有用命令 "),i("a",{class:"header-anchor",href:"#_5-個在-linux-中管理文件類型和系統時間的有用命令","aria-label":"Permalink to “5 個在 Linux 中管理文件類型和系統時間的有用命令”"},"​")],-1)),t[27]||(t[27]=i("p",null,"對於想學習 Linux 的初學者來説要適應使用命令列或者終端可能非常困難。由於終端比圖形用户界面程序更能幫助用户控制 Linux 系統，我們必須習慣在終端中運行命令。因此為了有效記憶 Linux 不同的命令，你應該每天使用終端並明白怎樣將命令和不同選項以及參數一同使用。",-1)),t[28]||(t[28]=i("p",null,[i("img",{src:"http://www.tecmint.com/wp-content/uploads/2015/09/Find-File-Types-in-Linux.jpg",alt:"在 Linux 中管理文件類型並設置時間"})],-1)),t[29]||(t[29]=i("p",null,[i("em",null,"在 Linux 中管理文件類型並設置時間")],-1)),t[30]||(t[30]=i("p",null,"請先查看我們 Linux 小技巧系列之前的文章：",-1)),i("ul",null,[i("li",null,[r(e,{href:"https://linux.cn/article-5485-1.html"},{default:l(()=>[...t[0]||(t[0]=[n("5 個有趣的 Linux 命令列技巧",-1)])]),_:1})]),i("li",null,[r(e,{href:"https://linux.cn/article-6314-1.html"},{default:l(()=>[...t[1]||(t[1]=[n("給新手的 10 個有用 Linux 命令列技巧",-1)])]),_:1})])]),t[31]||(t[31]=s(`<p>在這篇文章中，我們打算看看終端中 5 個和文件以及時間相關的提示和技巧。</p><h3 id="linux-中的文件類型" tabindex="-1">Linux 中的文件類型 <a class="header-anchor" href="#linux-中的文件類型" aria-label="Permalink to “Linux 中的文件類型”">​</a></h3><p>在 Linux 中，一切皆文件，你的設備、目錄以及普通文件都認為是文件。</p><p>Linux 系統中文件有不同的類型：</p><ul><li>普通文件：可能包含命令、文檔、音頻文件、視頻、圖像，歸檔文件等。</li><li>設備文件：系統用於訪問你硬件組件。</li></ul><p>這裏有兩種表示存儲設備的設備文件：塊文件，例如硬盤，它們以塊讀取數據；字符文件，以逐個字符讀取數據。</p><ul><li>硬鏈接和軟鏈接：用於在 Linux 文件系統的任意地方訪問文件。</li><li>命名管道和套接字：允許不同的進程之間進行交互。</li></ul><h4 id="_1-用-file-命令確定文件類型" tabindex="-1">1. 用 ‘file’ 命令確定文件類型 <a class="header-anchor" href="#_1-用-file-命令確定文件類型" aria-label="Permalink to “1. 用 ‘file’ 命令確定文件類型”">​</a></h4><p>你可以像下面這樣使用 file 命令確定文件的類型。下面的截圖顯示了用 file 命令確定不同文件類型的例子。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ dir
BACKUP				      master.zip
crossroads-stable.tar.gz	      num.txt
EDWARD-MAYA-2011-2012-NEW-REMIX.mp3   reggea.xspf
Linux-Security-Optimization-Book.gif  tmp-link

tecmint@tecmint ~/Linux-Tricks $ file BACKUP/
BACKUP/: directory 

tecmint@tecmint ~/Linux-Tricks $ file master.zip 
master.zip: Zip archive data, at least v1.0 to extract

tecmint@tecmint ~/Linux-Tricks $ file crossroads-stable.tar.gz
crossroads-stable.tar.gz: gzip compressed data, from Unix, last modified: Tue Apr  5 15:15:20 2011

tecmint@tecmint ~/Linux-Tricks $ file Linux-Security-Optimization-Book.gif 
Linux-Security-Optimization-Book.gif: GIF image data, version 89a, 200 x 259

tecmint@tecmint ~/Linux-Tricks $ file EDWARD-MAYA-2011-2012-NEW-REMIX.mp3 
EDWARD-MAYA-2011-2012-NEW-REMIX.mp3: Audio file with ID3 version 2.3.0, contains: MPEG ADTS, layer III, v1, 192 kbps, 44.1 kHz, JntStereo

tecmint@tecmint ~/Linux-Tricks $ file /dev/sda1
/dev/sda1: block special 

tecmint@tecmint ~/Linux-Tricks $ file /dev/tty1
/dev/tty1: character special 
</code></pre><h4 id="_2-用-ls-和-dir-命令確定文件類型" tabindex="-1">2. 用 ‘ls’ 和 ‘dir’ 命令確定文件類型 <a class="header-anchor" href="#_2-用-ls-和-dir-命令確定文件類型" aria-label="Permalink to “2. 用 ‘ls’ 和 ‘dir’ 命令確定文件類型”">​</a></h4>`,11)),i("p",null,[t[3]||(t[3]=n("確定文件類型的另一種方式是用 ls 和 ",-1)),r(e,{href:"http://www.tecmint.com/linux-dir-command-usage-with-examples/"},{default:l(()=>[...t[2]||(t[2]=[n("dir",-1)])]),_:1}),t[4]||(t[4]=n(" 命令顯示一長串結果。",-1))]),t[32]||(t[32]=s(`<p>用 ls -l 確定一個文件的類型。</p><p>當你查看文件權限時，第一個字符顯示了文件類型，其它字符顯示文件權限。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ ls -l
total 6908
drwxr-xr-x 2 tecmint tecmint    4096 Sep  9 11:46 BACKUP
-rw-r--r-- 1 tecmint tecmint 1075620 Sep  9 11:47 crossroads-stable.tar.gz
-rwxr----- 1 tecmint tecmint 5916085 Sep  9 11:49 EDWARD-MAYA-2011-2012-NEW-REMIX.mp3
-rw-r--r-- 1 tecmint tecmint   42122 Sep  9 11:49 Linux-Security-Optimization-Book.gif
-rw-r--r-- 1 tecmint tecmint   17627 Sep  9 11:46 master.zip
-rw-r--r-- 1 tecmint tecmint       5 Sep  9 11:48 num.txt
-rw-r--r-- 1 tecmint tecmint       0 Sep  9 11:46 reggea.xspf
-rw-r--r-- 1 tecmint tecmint       5 Sep  9 11:47 tmp-link
</code></pre><p>使用 ls -l 確定塊和字符文件</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ ls -l /dev/sda1
brw-rw---- 1 root disk 8, 1 Sep  9 10:53 /dev/sda1

tecmint@tecmint ~/Linux-Tricks $ ls -l /dev/tty1
crw-rw---- 1 root tty 4, 1 Sep  9 10:54 /dev/tty1
</code></pre><p>使用 dir -l 確定一個文件的類型。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ dir -l
total 6908
drwxr-xr-x 2 tecmint tecmint    4096 Sep  9 11:46 BACKUP
-rw-r--r-- 1 tecmint tecmint 1075620 Sep  9 11:47 crossroads-stable.tar.gz
-rwxr----- 1 tecmint tecmint 5916085 Sep  9 11:49 EDWARD-MAYA-2011-2012-NEW-REMIX.mp3
-rw-r--r-- 1 tecmint tecmint   42122 Sep  9 11:49 Linux-Security-Optimization-Book.gif
-rw-r--r-- 1 tecmint tecmint   17627 Sep  9 11:46 master.zip
-rw-r--r-- 1 tecmint tecmint       5 Sep  9 11:48 num.txt
-rw-r--r-- 1 tecmint tecmint       0 Sep  9 11:46 reggea.xspf
-rw-r--r-- 1 tecmint tecmint       5 Sep  9 11:47 tmp-link
</code></pre><h4 id="_3-統計指定類型文件的數目" tabindex="-1">3. 統計指定類型文件的數目 <a class="header-anchor" href="#_3-統計指定類型文件的數目" aria-label="Permalink to “3. 統計指定類型文件的數目”">​</a></h4>`,8)),i("p",null,[t[7]||(t[7]=n("下面我們來看看在一個目錄中用 ls，",-1)),r(e,{href:"https://linux.cn/article-2250-1.html"},{default:l(()=>[...t[5]||(t[5]=[n("grep",-1)])]),_:1}),t[8]||(t[8]=n(" 和 ",-1)),r(e,{href:"http://www.tecmint.com/wc-command-examples/"},{default:l(()=>[...t[6]||(t[6]=[n("wc",-1)])]),_:1}),t[9]||(t[9]=n(" 命令統計指定類型文件數目的技巧。命令之間的交互通過命名管道完成。",-1))]),t[33]||(t[33]=s(`<ul><li>grep – 用户根據給定模式或正則表達式進行搜索的命令。</li><li>wc – 用於統計行、字和字符的命令。</li></ul><p><strong>統計普通文件的數目</strong></p><p>在 Linux 中，普通文件用符號 <code>-</code> 表示。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ ls -l | grep ^- | wc -l
7
</code></pre><p><strong>統計目錄的數目</strong></p><p>在 Linux 中，目錄用符號 <code>d</code> 表示。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ ls -l | grep ^d | wc -l
1
</code></pre><p><strong>統計符號鏈接和硬鏈接的數目</strong></p><p>在 Linux 中，符號鏈接和硬鏈接用符號 <code>l</code> 表示。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ ls -l | grep ^l | wc -l
0
</code></pre><p><strong>統計塊文件和字符文件的數目</strong></p><p>在 Linux 中，塊和字符文件用符號 <code>b</code> 和 <code>c</code> 表示。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ ls -l /dev | grep ^b | wc -l
37
tecmint@tecmint ~/Linux-Tricks $ ls -l /dev | grep ^c | wc -l
159
</code></pre><h4 id="_4-在-linux-系統中查找文件" tabindex="-1">4. 在 Linux 系統中查找文件 <a class="header-anchor" href="#_4-在-linux-系統中查找文件" aria-label="Permalink to “4. 在 Linux 系統中查找文件”">​</a></h4><p>下面我們來看看在 Linux 系統中查找文件一些命令，它們包括 locate、find、whatis 和 which 命令。</p><p><strong>用 locate 命令查找文件</strong></p>`,16)),i("p",null,[t[11]||(t[11]=n("在下面的輸出中，我想要定位系統中的 ",-1)),r(e,{href:"http://www.tecmint.com/setup-samba-file-sharing-for-linux-windows-clients/"},{default:l(()=>[...t[10]||(t[10]=[n("Samba 服務器配置文件",-1)])]),_:1})]),t[34]||(t[34]=i("pre",null,[i("code",null,`tecmint@tecmint ~/Linux-Tricks $ locate samba.conf
/usr/lib/tmpfiles.d/samba.conf
/var/lib/dpkg/info/samba.conffiles
`)],-1)),t[35]||(t[35]=i("p",null,[i("strong",null,"用 find 命令查找文件")],-1)),t[36]||(t[36]=i("p",null,"想要學習如何在 Linux 中使用 find 命令，你可以閲讀我們以下的文章，裏面列出了 find 命令的 30 多個例子和使用方法。",-1)),i("ul",null,[i("li",null,[r(e,{href:"http://www.tecmint.com/35-practical-examples-of-linux-find-command/"},{default:l(()=>[...t[12]||(t[12]=[n("Linux 中 35 個 ‘find’ 命令示例",-1)])]),_:1})])]),t[37]||(t[37]=s(`<p><strong>用 whatis 命令定位命令</strong></p><p>whatis 命令通常用於定位命令，它很特殊，因為它給出關於一個命令的信息，它還能查找配置文件和命令的幫助手冊條目。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ whatis bash
bash (1)             - GNU Bourne-Again SHell

tecmint@tecmint ~/Linux-Tricks $ whatis find
find (1)             - search for files in a directory hierarchy

tecmint@tecmint ~/Linux-Tricks $ whatis ls
ls (1)               - list directory contents
</code></pre><p><strong>用 which 命令定位命令</strong></p><p>which 命令用於定位文件系統中的命令。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ which mkdir
/bin/mkdir

tecmint@tecmint ~/Linux-Tricks $ which bash
/bin/bash

tecmint@tecmint ~/Linux-Tricks $ which find
/usr/bin/find

tecmint@tecmint ~/Linux-Tricks $ $ which ls
/bin/ls
</code></pre><h4 id="_5-處理-linux-系統的時間" tabindex="-1">5.處理 Linux 系統的時間 <a class="header-anchor" href="#_5-處理-linux-系統的時間" aria-label="Permalink to “5.處理 Linux 系統的時間”">​</a></h4><p>在聯網環境中，保持你 Linux 系統時間準確是一個好的習慣。Linux 系統中有很多服務要求時間正確才能在聯網條件下正常工作。</p><p>讓我們來看看你可以用來管理你機器時間的命令。在 Linux 中，有兩種方式管理時間：系統時間和硬件時間。</p><p>系統時間由系統時鐘管理，硬件時間由硬件時鐘管理。</p><p>要查看你的系統時間、日期和時區，像下面這樣使用 date 命令。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ date
Wed Sep  9 12:25:40 IST 2015
</code></pre><p>像下面這樣用 date -s 或 date -set=“STRING” 設置系統時間。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ sudo date -s &quot;12:27:00&quot;
Wed Sep  9 12:27:00 IST 2015

tecmint@tecmint ~/Linux-Tricks $ sudo date --set=&quot;12:27:00&quot;
Wed Sep  9 12:27:00 IST 2015
</code></pre><p>你也可以像下面這樣設置時間和日期。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ sudo date 090912302015
Wed Sep  9 12:30:00 IST 2015
</code></pre><p>使用 cal 命令從日曆中查看當前日期。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ cal
   September 2015     
Su Mo Tu We Th Fr Sa  
       1  2  3  4  5  
 6  7  8  9 10 11 12  
13 14 15 16 17 18 19  
20 21 22 23 24 25 26  
27 28 29 30      
</code></pre><p>使用 hwclock 命令查看硬件時鐘時間。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ sudo hwclock
Wednesday 09 September 2015 06:02:58 PM IST  -0.200081 seconds
</code></pre><p>要設置硬件時鐘時間，像下面這樣使用 hwclock –set –date=“STRING” 命令。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ sudo hwclock --set --date=&quot;09/09/2015 12:33:00&quot;

tecmint@tecmint ~/Linux-Tricks $ sudo hwclock
Wednesday 09 September 2015 12:33:11 PM IST  -0.891163 seconds
</code></pre><p>系統時間是由硬件時鐘時間在啓動時設置的，系統關閉時，硬件時間被重置為系統時間。</p><p>因此你查看系統時間和硬件時間時，它們是一樣的，除非你更改了系統時間。當你的 CMOS 電量不足時，硬件時間可能不正確。</p><p>你也可以像下面這樣使用硬件時鐘的時間設置系統時間。</p><pre><code>$ sudo hwclock --hctosys
</code></pre><p>也可以像下面這樣用系統時鐘時間設置硬件時鐘時間。</p><pre><code>$ sudo hwclock --systohc
</code></pre><p>要查看你的 Linux 系統已經運行了多長時間，可以使用 uptime 命令。</p><pre><code>tecmint@tecmint ~/Linux-Tricks $ uptime
12:36:27 up  1:43,  2 users,  load average: 1.39, 1.34, 1.45

tecmint@tecmint ~/Linux-Tricks $ uptime -p
up 1 hour, 43 minutes

tecmint@tecmint ~/Linux-Tricks $ uptime -s
2015-09-09 10:52:47
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>對於初學者來説理解 Linux 中的文件類型是一個好的嘗試，同時時間管理也非常重要，尤其是在需要可靠有效地管理服務的服務器上。希望這篇指南能對你有所幫助。如果你有任何反饋，別忘了給我們寫評論。和我們保持聯繫。</p><hr>`,33)),i("p",null,[t[14]||(t[14]=n("via: ",-1)),r(e,{href:"http://www.tecmint.com/manage-file-types-and-set-system-time-in-linux/"},{default:l(()=>[...t[13]||(t[13]=[n("http://www.tecmint.com/manage-file-types-and-set-system-time-in-linux/",-1)])]),_:1})]),i("p",null,[t[18]||(t[18]=n("作者：",-1)),r(e,{href:"http://www.tecmint.com/author/aaronkili/"},{default:l(()=>[...t[15]||(t[15]=[n("Aaron Kili",-1)])]),_:1}),t[19]||(t[19]=n(" 譯者：",-1)),r(e,{href:"http://www.mutouxiaogui.cn/blog/"},{default:l(()=>[...t[16]||(t[16]=[n("ictlyh",-1)])]),_:1}),t[20]||(t[20]=n(" 校對：",-1)),r(e,{href:"https://github.com/wxy"},{default:l(()=>[...t[17]||(t[17]=[n("wxy",-1)])]),_:1})]),i("p",null,[t[23]||(t[23]=n("本文由 ",-1)),r(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...t[21]||(t[21]=[n("LCTT",-1)])]),_:1}),t[24]||(t[24]=n(" 原創編譯，",-1)),r(e,{href:"https://linux.cn/"},{default:l(()=>[...t[22]||(t[22]=[n("Linux中國",-1)])]),_:1}),t[25]||(t[25]=n(" 榮譽推出",-1))])])}const g=p(d,[["render",u]]);export{S as __pageData,g as default};
