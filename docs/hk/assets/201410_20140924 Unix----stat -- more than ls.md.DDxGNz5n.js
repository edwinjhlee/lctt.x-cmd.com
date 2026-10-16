import{_ as a,a0 as i,w as l,s as p,ao as d,I as o,x as e,a1 as s,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"stat -- 獲取比 ls 更多的信息 | LCTT x X-CMD","titleTemplate":false,"description":"stat -- 獲取比 ls 更多的信息 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"stat -- 獲取比 ls 更多的信息 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"stat -- 獲取比 ls 更多的信息 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140924 Unix----stat -- more than ls","title":"stat -- 獲取比 ls 更多的信息","tag":"201410","desc":""},"relativePath":"201410/20140924 Unix----stat -- more than ls.md","filePath":"[post].md"}'),c={name:"201410/20140924 Unix----stat -- more than ls.md"};function h(m,t,u,f,w,x){const n=i("Link");return l(),p("div",null,[t[13]||(t[13]=d(`<h1 id="stat-獲取比-ls-更多的信息" tabindex="-1">stat -- 獲取比 ls 更多的信息 <a class="header-anchor" href="#stat-獲取比-ls-更多的信息" aria-label="Permalink to “stat -- 獲取比 ls 更多的信息”">​</a></h1><blockquote><p>厭倦了 ls 命令，並且想查看更多有關你的文件的有趣的信息？ 試一試 stat！</p></blockquote><p><img src="http://www.itworld.com/sites/default/files/imagecache/large_thumb_150x113/stats.jpg" alt=""></p><p>ls 命令可能是每一個 Unix 使用者第一個學習的命令之一， 但它僅僅顯示了 stat 命令能給出的信息的一小部分。</p><p>stat 命令從文件的索引節點獲取信息。 正如你可能已經瞭解的那樣， 每一個系統裏的文件都存有三組日期和時間， 它們包括最近修改時間（即使用 ls -l 命令時顯示的日期和時間）, 最近狀態改變時間（包括對文件重命名）和最近訪問時間。</p><p>使用長列表模式查看文件信息， 你會看到類似下面的內容：</p><pre><code>$ ls -l trythis
-rwx------ 1 shs unixdweebs 109 Nov 11  2013 trythis
</code></pre><p>使用 stat 命令， 你會看到下面這些：</p><pre><code>$ stat trythis
  File: \`trythis&#39;
  Size: 109      Blocks: 8   IO Block: 262144 regular file
Device: 18h/24d Inode: 12731691    Links: 1
Access: (0700/-rwx------)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-09-09 19:27:58.000000000 -0400
Modify: 2013-11-11 08:40:10.000000000 -0500
Change: 2013-11-11 08:40:10.000000000 -0500
</code></pre><p>在上面的情形中， 文件的狀態改變和文件修改的日期/時間是相同的， 而訪問時間則是相當近的時間。 我們還可以看到文件使用了 8 個塊， 以及兩種格式顯示的文件權限 -- 八進制（0700）格式和 rwx 格式。 在第三行顯示的索引節點是 12731681. 文件沒有其它的硬鏈接（Links: 1）。 而且， 這個文件是一個常規文件。</p><p>把文件重命名， 你會看到狀態改變時間發生變化。</p><p>這裏的 ctime 信息， 最早設計用來存儲文件的創建（create）日期和時間， 但後來不知道什麼時候變為用來存儲狀態修改（change）時間。</p><pre><code>$ mv trythis trythat
$ stat trythat
  File: \`trythat&#39;
  Size: 109      Blocks: 8   IO Block: 262144 regular file
Device: 18h/24d Inode: 12731691    Links: 1
Access: (0700/-rwx------)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-09-09 19:27:58.000000000 -0400
Modify: 2013-11-11 08:40:10.000000000 -0500
Change: 2014-09-21 12:46:22.000000000 -0400
</code></pre><p>改變文件的權限也會改變 ctime 域。</p><p>你也可以配合通配符來使用 stat 命令以列出一組文件的狀態：</p><pre><code>$ stat myfile*
  File: \`myfile&#39;
  Size: 20              Blocks: 8          IO Block: 262144 regular file
Device: 18h/24d Inode: 12731803    Links: 1
Access: (0640/-rw-r-----)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-08-23 03:00:36.000000000 -0400
Modify: 2014-08-22 12:02:12.000000000 -0400
Change: 2014-08-22 12:02:12.000000000 -0400
  File: \`myfile2&#39;
  Size: 20              Blocks: 8          IO Block: 262144 regular file
Device: 18h/24d Inode: 12731806    Links: 1
Access: (0640/-rw-r-----)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-08-23 03:00:36.000000000 -0400
Modify: 2014-08-22 12:03:30.000000000 -0400
Change: 2014-08-22 12:03:30.000000000 -0400
  File: \`myfile3&#39;
  Size: 40              Blocks: 8          IO Block: 262144 regular file
Device: 18h/24d Inode: 12730533    Links: 1
Access: (0640/-rw-r-----)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-08-23 03:00:36.000000000 -0400
Modify: 2014-08-22 12:03:59.000000000 -0400
Change: 2014-08-22 12:03:59.000000000 -0400
</code></pre><p>如果我們喜歡的話， 我們也可以通過其他命令來獲取這些信息。</p><p>向 ls -l 命令添加 &quot;u&quot; 選項， 你會看到下面的結果。 注意這個選項會顯示最後訪問時間， 而添加 &quot;c&quot; 選項則會顯示狀態改變時間（在本例中， 是我們重命名文件的時間）。</p><pre><code>$ ls -lu trythat
-rwx------ 1 shs unixdweebs 109 Sep  9 19:27 trythat
$ ls -lc trythat
-rwx------ 1 shs unixdweebs 109 Sep 21 12:46 trythat
</code></pre><p>stat 命令也可應用與文件夾。</p><p>在這個例子中， 我們可以看到有許多的鏈接。</p><pre><code>$ stat bin
  File: \`bin&#39;
  Size: 12288    Blocks: 24  IO Block: 262144 directory
Device: 18h/24d Inode: 15089714    Links: 9
Access: (0700/drwx------)  Uid: (  263/     shs)   Gid: (  100/ unixdweebs)
Access: 2014-09-21 03:00:45.000000000 -0400
Modify: 2014-09-15 17:54:41.000000000 -0400
Change: 2014-09-15 17:54:41.000000000 -0400
</code></pre><p>在這裏， 我們還可以查看一個文件系統。</p><pre><code>$ stat -f /dev/cciss/c0d0p2
  File: &quot;/dev/cciss/c0d0p2&quot;
    ID: 0 Namelen: 255     Type: tmpfs
Block size: 4096Fundamental block size: 4096
Blocks: Total: 259366     Free: 259337     Available: 259337
Inodes: Total: 223834     Free: 223531
</code></pre><p>注意 Namelen （文件名長度）域， 如果文件名長於 255 個字符的話， 你會很幸運地在文件名處看到心形符號！</p><p>stat 命令還可以一次顯示所有我們想要的信息。 下面的例子中， 我們只想查看文件類型， 然後是硬連接數。</p><pre><code>$ stat --format=%F trythat
regular file
$ stat --format=%h trythat
1
</code></pre><p>在下面的例子中， 我們查看了文件權限 -- 分別以兩種可用的格式 -- 然後是文件的 SELinux 安全環境。最後，我們我們可以以從 Epoch 開始的秒數格式來查看文件訪問時間。</p><pre><code>$ stat --format=%a trythat
700
$ stat --format=%A trythat
-rwx------
$ stat --format=%C trythat
(null)
$ stat --format=%X bin
1411282845
</code></pre><p>下面全部是可用的選項：</p><pre><code>%a     八進制表示的訪問權限
%A     可讀格式表示的訪問權限
%b     分配的塊數（參見 %B）
%B     %b 參數顯示的每個塊的字節數
%d     十進制表示的設備號
%D     十六進制表示的設備號
%f     十六進制表示的 Raw 模式
%F     文件類型
%g     屬主的組 ID
%G     屬主的組名
%h     硬連接數
%i     Inode 號
%n     文件名
%N     如果是符號鏈接，顯示器所鏈接的文件名
%o     I/O 塊大小
%s     全部佔用的字節大小
%t     十六進制的主設備號
%T     十六進制的副設備號
%u     屬主的用户 ID
%U     屬主的用户名
%x     最後訪問時間
%X     最後訪問時間，自 Epoch 開始的秒數
%y     最後修改時間
%Y     最後修改時間，自 Epoch 開始的秒數
%z     最後改變時間
%Z     最後改變時間，自 Epoch 開始的秒數
</code></pre><p>針對文件系統還有如下格式選項：</p><pre><code>%a     普通用户可用的塊數
%b     文件系統的全部數據塊數
%c     文件系統的全部文件節點數
%d     文件系統的可用文件節點數
%f     文件系統的可用節點數
%C     SELinux 的安全上下文
%i     十六進制表示的文件系統 ID
%l     文件名的最大長度
%n     文件系統的文件名
%s     塊大小（用於更快的傳輸）
%S     基本塊大小（用於塊計數）
%t     十六進制表示的文件系統類型
%T     可讀格式表示的文件系統類型
</code></pre><p>這些信息都可以得到，stat 命令也許可以幫你以稍微不同的角度來了解你的文件。</p><hr>`,35)),o("p",null,[t[1]||(t[1]=e("via: ",-1)),s(n,{href:"http://www.itworld.com/operating-systems/437351/unix-stat-more-ls"},{default:r(()=>[...t[0]||(t[0]=[e("http://www.itworld.com/operating-systems/437351/unix-stat-more-ls",-1)])]),_:1})]),o("p",null,[t[5]||(t[5]=e("作者：",-1)),s(n,{href:"http://www.itworld.com/sandra-henry-stocker"},{default:r(()=>[...t[2]||(t[2]=[e("Sandra Henry-Stocker",-1)])]),_:1}),t[6]||(t[6]=e(" 譯者：",-1)),s(n,{href:"https://github.com/wangjiezhe"},{default:r(()=>[...t[3]||(t[3]=[e("wangjiezhe",-1)])]),_:1}),t[7]||(t[7]=e(" 校對：",-1)),s(n,{href:"https://github.com/wxy"},{default:r(()=>[...t[4]||(t[4]=[e("wxy",-1)])]),_:1})]),o("p",null,[t[10]||(t[10]=e("本文由 ",-1)),s(n,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...t[8]||(t[8]=[e("LCTT",-1)])]),_:1}),t[11]||(t[11]=e(" 原創翻譯，",-1)),s(n,{href:"http://linux.cn/"},{default:r(()=>[...t[9]||(t[9]=[e("Linux中國",-1)])]),_:1}),t[12]||(t[12]=e(" 榮譽推出",-1))])])}const T=a(c,[["render",h]]);export{g as __pageData,T as default};
