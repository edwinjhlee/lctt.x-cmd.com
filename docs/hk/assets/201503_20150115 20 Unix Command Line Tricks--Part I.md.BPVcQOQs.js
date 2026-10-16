import{_ as p,a0 as l,w as d,s,ao as o,I as r,x as n,a1 as t,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"20個 Unix/Linux 命令技巧（一） | LCTT x X-CMD","titleTemplate":false,"description":"20個 Unix/Linux 命令技巧（一） | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"20個 Unix/Linux 命令技巧（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"20個 Unix/Linux 命令技巧（一） | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150115 20 Unix Command Line Tricks--Part I","title":"20個 Unix/Linux 命令技巧（一）","tag":"201503","desc":""},"relativePath":"201503/20150115 20 Unix Command Line Tricks--Part I.md","filePath":"[post].md"}'),m={name:"201503/20150115 20 Unix Command Line Tricks--Part I.md"};function h(c,e,f,u,x,b){const a=l("Link");return d(),s("div",null,[e[20]||(e[20]=o(`<h1 id="_20個-unix-linux-命令技巧-一" tabindex="-1">20個 Unix/Linux 命令技巧（一） <a class="header-anchor" href="#_20個-unix-linux-命令技巧-一" aria-label="Permalink to “20個 Unix/Linux 命令技巧（一）”">​</a></h1><p>讓我們用<strong>這些Unix/Linux命令技巧</strong>開啓新的一年，提高在終端下的生產力。我已經找了很久了，現在就與你們分享。</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/unix-command-line-tricks.001.jpg" alt=""></p><h3 id="刪除一個大文件" tabindex="-1">刪除一個大文件 <a class="header-anchor" href="#刪除一個大文件" aria-label="Permalink to “刪除一個大文件”">​</a></h3><p>我在生產服務器上有一個很大的200GB的日誌文件需要刪除。我的rm和ls命令已經崩潰，我擔心這是由於巨大的磁盤IO造成的，要刪除這個大文件，輸入：</p><pre><code>&gt; /path/to/file.log
# 或使用如下格式
: &gt; /path/to/file.log
 
# 然後刪除它 
rm /path/to/file.log
</code></pre><h3 id="如何記錄終端輸出" tabindex="-1">如何記錄終端輸出？ <a class="header-anchor" href="#如何記錄終端輸出" aria-label="Permalink to “如何記錄終端輸出？”">​</a></h3><p>試試使用script命令列工具來為你的終端輸出創建輸出記錄。</p><pre><code>script my.terminal.sessio
</code></pre><p>輸入命令：</p><pre><code>ls
date
sudo service foo stop
</code></pre><p>要退出（結束script會話），輸入 <em>exit</em> 或者 <em>logout</em> 或者按下 <em>control-D</em>。</p><pre><code>exit
</code></pre><p>要瀏覽輸入：</p><pre><code>more my.terminal.session
less my.terminal.session
cat my.terminal.session
</code></pre><h3 id="還原被刪除的-tmp-文件夾" tabindex="-1">還原被刪除的 /tmp 文件夾 <a class="header-anchor" href="#還原被刪除的-tmp-文件夾" aria-label="Permalink to “還原被刪除的 /tmp 文件夾”">​</a></h3>`,16)),r("p",null,[e[1]||(e[1]=n("我在文章",-1)),t(a,{href:"http://www.cyberciti.biz/tips/my-10-unix-command-line-mistakes.html"},{default:i(()=>[...e[0]||(e[0]=[n("Linux和Unix shell，我犯了一些錯誤",-1)])]),_:1}),e[2]||(e[2]=n("。我意外地刪除了/tmp文件夾。要還原它，我需要這麼做：",-1))]),e[21]||(e[21]=o(`<pre><code>mkdir /tmp
chmod 1777 /tmp
chown root:root /tmp
ls -ld /tmp
</code></pre><h3 id="鎖定一個文件夾" tabindex="-1">鎖定一個文件夾 <a class="header-anchor" href="#鎖定一個文件夾" aria-label="Permalink to “鎖定一個文件夾”">​</a></h3><p>為了我的數據隱私，我想要鎖定我文件服務器下的/downloads文件夾。因此我運行了：</p><pre><code>chmod 0000 /downloads
</code></pre><p>root用户仍舊可以訪問，而ls和cd命令則不工作。要還原它用：</p><pre><code>chmod 0755 /downloads
</code></pre><h3 id="在vim中用密碼保護文件" tabindex="-1">在vim中用密碼保護文件 <a class="header-anchor" href="#在vim中用密碼保護文件" aria-label="Permalink to “在vim中用密碼保護文件”">​</a></h3><p>害怕root用户或者其他人偷窺你的個人文件麼？嘗試在vim中用密碼保護，輸入：</p><pre><code>vim +X filename
</code></pre><p>或者，在退出vim之前使用:X 命令來加密你的文件，vim會提示你輸入一個密碼。</p><h3 id="清除屏幕上的亂碼" tabindex="-1">清除屏幕上的亂碼 <a class="header-anchor" href="#清除屏幕上的亂碼" aria-label="Permalink to “清除屏幕上的亂碼”">​</a></h3><p>只要輸入：</p><pre><code>reset
</code></pre><h3 id="易讀格式" tabindex="-1">易讀格式 <a class="header-anchor" href="#易讀格式" aria-label="Permalink to “易讀格式”">​</a></h3><p>傳遞<em>-h</em>或者<em>-H</em>（和其他選項）選項給GNU或者BSD工具來獲取像ls、df、du等命令以易讀的格式輸出：</p><pre><code>ls -lh
# 以易讀的格式 (比如： 1K 234M 2G)
df -h
df -k
# 以字節、KB、MB 或 GB 輸出： 
free -b
free -k
free -m
free -g
# 以易讀的格式輸出 (比如 1K 234M 2G)
du -h
# 以易讀的格式顯示文件系統權限
stat -c %A /boot
# 比較易讀的數字
sort -h -a file
# 在Linux上以易讀的形式顯示cpu信息
lscpu
lscpu -e
lscpu -e=cpu,node
# 以易讀的形式顯示每個文件的大小
tree -h
tree -h /boot
</code></pre><h3 id="在linux系統中顯示已知的用户信息" tabindex="-1">在Linux系統中顯示已知的用户信息 <a class="header-anchor" href="#在linux系統中顯示已知的用户信息" aria-label="Permalink to “在Linux系統中顯示已知的用户信息”">​</a></h3><p>只要輸入：</p><pre><code>## linux 版本 ##
lslogins
 
## BSD 版本 ##
logins
</code></pre><p>示例輸出：</p><pre><code>UID USER      PWD-LOCK PWD-DENY LAST-LOGIN GECOS
  0 root             0        0   22:37:59 root
  1 bin              0        1            bin
  2 daemon           0        1            daemon
  3 adm              0        1            adm
  4 lp               0        1            lp
  5 sync             0        1            sync
  6 shutdown         0        1 2014-Dec17 shutdown
  7 halt             0        1            halt
  8 mail             0        1            mail
 10 uucp             0        1            uucp
 11 operator         0        1            operator
 12 games            0        1            games
 13 gopher           0        1            gopher
 14 ftp              0        1            FTP User
 27 mysql            0        1            MySQL Server
 38 ntp              0        1
 48 apache           0        1            Apache
 68 haldaemon        0        1            HAL daemon
 69 vcsa             0        1            virtual console memory owner
 72 tcpdump          0        1
 74 sshd             0        1            Privilege-separated SSH
 81 dbus             0        1            System message bus
 89 postfix          0        1
 99 nobody           0        1            Nobody
173 abrt             0        1
497 vnstat           0        1            vnStat user
498 nginx            0        1            nginx user
499 saslauth         0        1            &quot;Saslauthd user&quot;
</code></pre><h3 id="我如何刪除意外在當前文件夾下解壓的文件" tabindex="-1">我如何刪除意外在當前文件夾下解壓的文件？ <a class="header-anchor" href="#我如何刪除意外在當前文件夾下解壓的文件" aria-label="Permalink to “我如何刪除意外在當前文件夾下解壓的文件？”">​</a></h3><p>我意外在/var/www/html/而不是/home/projects/www/current下解壓了一個tarball。它搞亂了/var/www/html下的文件，你甚至不知道哪些是誤解壓出來的。最簡單修復這個問題的方法是：</p><pre><code>cd /var/www/html/
/bin/rm -f &quot;$(tar ztf /path/to/file.tar.gz)&quot;
</code></pre><h3 id="對top命令的輸出感到疑惑" tabindex="-1">對top命令的輸出感到疑惑？ <a class="header-anchor" href="#對top命令的輸出感到疑惑" aria-label="Permalink to “對top命令的輸出感到疑惑？”">​</a></h3><p>正經地説，你應該試一下用htop代替top：</p><pre><code>sudo htop
</code></pre><h3 id="想要再次運行相同的命令" tabindex="-1">想要再次運行相同的命令 <a class="header-anchor" href="#想要再次運行相同的命令" aria-label="Permalink to “想要再次運行相同的命令”">​</a></h3><p>只需要輸入!!。比如：</p><pre><code>/myhome/dir/script/name arg1 arg2
 
# 要再次運行相同的命令 
!!
 
## 以root用户運行最後運行的命令
sudo !!
</code></pre><p>!!會運行最近使用的命令。要運行最近運行的以“foo”開頭命令：</p><pre><code>!foo
# 以root用户運行上一次以“service”開頭的命令
sudo !service
</code></pre><p>!$用於運行帶上最後一個參數的命令：</p><pre><code># 編輯 nginx.conf
sudo vi /etc/nginx/nginx.conf
 
# 測試 nginx.conf
/sbin/nginx -t -c /etc/nginx/nginx.conf
 
# 測試完 &quot;/sbin/nginx -t -c /etc/nginx/nginx.conf&quot;你可以用vi再次編輯這個文件了
sudo vi !$
</code></pre><h3 id="在終端上提醒你必須得走了" tabindex="-1">在終端上提醒你必須得走了 <a class="header-anchor" href="#在終端上提醒你必須得走了" aria-label="Permalink to “在終端上提醒你必須得走了”">​</a></h3><p>如果你需要提醒離開你的終端，輸入下面的命令：</p><pre><code>leave +hhmm
</code></pre><p>這裏：</p><ul><li><strong>hhmm</strong> - 時間是以hhmm的形式，hh表示小時（12時制或者24小時制），mm代表分鐘。所有的時間都轉化成12時制，並且假定發生在接下來的12小時。</li></ul><h3 id="甜蜜的家" tabindex="-1">甜蜜的家 <a class="header-anchor" href="#甜蜜的家" aria-label="Permalink to “甜蜜的家”">​</a></h3><p>想要進入剛才進入的地方？運行：</p><pre><code>cd -
</code></pre><p>需要快速地回到你的家目錄？輸入：</p><pre><code>cd
</code></pre><p>變量<em>CDPATH</em>定義了目錄的搜索路徑：</p><pre><code>export CDPATH=/var/www:/nas10
</code></pre><p>現在，不用輸入cd */var/www/html/ 這樣長了，我可以直接輸入下面的命令進入 /var/www/html：</p><pre><code>cd html
</code></pre><h3 id="在less瀏覽時編輯文件" tabindex="-1">在less瀏覽時編輯文件 <a class="header-anchor" href="#在less瀏覽時編輯文件" aria-label="Permalink to “在less瀏覽時編輯文件”">​</a></h3><p>要編輯一個正在用less瀏覽的文件，可以按下v。你就可以用變量$EDITOR所指定的編輯器來編輯了：</p><pre><code>less *.c
less foo.html
## 按下v鍵來編輯文件 ##
## 退出編輯器後，你可以繼續用less瀏覽了 ##
</code></pre><h3 id="列出你係統中的所有文件和目錄" tabindex="-1">列出你係統中的所有文件和目錄 <a class="header-anchor" href="#列出你係統中的所有文件和目錄" aria-label="Permalink to “列出你係統中的所有文件和目錄”">​</a></h3><p>要看到你係統中的所有目錄，運行：</p><pre><code>find / -type d | less
 
# 列出$HOME 所有目錄
find $HOME -type d -ls | less
</code></pre><p>要看到所有的文件，運行：</p><pre><code>find / -type f | less
 
# 列出 $HOME 中所有的文件
find $HOME -type f -ls | less
</code></pre><h3 id="用一條命令構造目錄樹" tabindex="-1">用一條命令構造目錄樹 <a class="header-anchor" href="#用一條命令構造目錄樹" aria-label="Permalink to “用一條命令構造目錄樹”">​</a></h3><p>你可以用mkdir加上-p選項一次創建一顆目錄樹：</p><pre><code>mkdir -p /jail/{dev,bin,sbin,etc,usr,lib,lib64}
ls -l /jail/
</code></pre><h3 id="將文件複製到多個目錄中" tabindex="-1">將文件複製到多個目錄中 <a class="header-anchor" href="#將文件複製到多個目錄中" aria-label="Permalink to “將文件複製到多個目錄中”">​</a></h3><p>不必運行：</p><pre><code>cp /path/to/file /usr/dir1
cp /path/to/file /var/dir2
cp /path/to/file /nas/dir3
</code></pre><p>運行下面的命令來複制文件到多個目錄中：</p><pre><code>echo /usr/dir1 /var/dir2 /nas/dir3 |  xargs -n 1 cp -v /path/to/file
</code></pre>`,64)),r("p",null,[e[4]||(e[4]=n("留下",-1)),t(a,{href:"http://bash.cyberciti.biz/guide/Writing_your_first_shell_function"},{default:i(()=>[...e[3]||(e[3]=[n("創建一個shell函數",-1)])]),_:1}),e[5]||(e[5]=n("作為讀者的練習。",-1))]),e[22]||(e[22]=r("h3",{id:"快速找出兩個目錄的不同",tabindex:"-1"},[n("快速找出兩個目錄的不同 "),r("a",{class:"header-anchor",href:"#快速找出兩個目錄的不同","aria-label":"Permalink to “快速找出兩個目錄的不同”"},"​")],-1)),e[23]||(e[23]=r("p",null,"diff命令會按行比較文件。但是它也可以比較兩個目錄：",-1)),e[24]||(e[24]=r("pre",null,[r("code",null,`ls -l /tmp/r
ls -l /tmp/s
# 使用 diff 比較兩個文件夾
diff /tmp/r/ /tmp/s/
`)],-1)),r("p",null,[t(a,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/20-unix-command-line-tricks-part-i/attachment/differences-between-folders/"},{default:i(()=>[...e[6]||(e[6]=[r("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/differences-between-folders.jpg",alt:"Fig. : Finding differences between folders"},null,-1)])]),_:1})]),e[25]||(e[25]=o(`<p><em>圖片： 找出目錄之間的不同</em></p><h3 id="文本格式化" tabindex="-1">文本格式化 <a class="header-anchor" href="#文本格式化" aria-label="Permalink to “文本格式化”">​</a></h3><p>你可以用fmt命令重新格式化每個段落。在本例中，我要用分割超長的行並且填充短行：</p><pre><code>fmt file.txt
</code></pre><p>你也可以分割長的行，但是不重新填充，也就是説分割長行，但是不填充短行：</p><pre><code>fmt -s file.txt
</code></pre><h3 id="可以看見輸出並將其寫入到一個文件中" tabindex="-1">可以看見輸出並將其寫入到一個文件中 <a class="header-anchor" href="#可以看見輸出並將其寫入到一個文件中" aria-label="Permalink to “可以看見輸出並將其寫入到一個文件中”">​</a></h3><p>如下使用tee命令在屏幕上看見輸出並同樣寫入到日誌文件my.log中：</p><pre><code>mycoolapp arg1 arg2 input.file | tee my.log
</code></pre><p>tee可以保證你同時在屏幕上看到mycoolapp的輸出並寫入文件  my.log。</p><hr>`,11)),r("p",null,[e[8]||(e[8]=n("via: ",-1)),t(a,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/20-unix-command-line-tricks-part-i/"},{default:i(()=>[...e[7]||(e[7]=[n("http://www.cyberciti.biz/open-source/command-line-hacks/20-unix-command-line-tricks-part-i/",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=n("作者：",-1)),t(a,{href:"http://www.cyberciti.biz/tips/about-us"},{default:i(()=>[...e[9]||(e[9]=[n("nixCraft",-1)])]),_:1}),e[13]||(e[13]=n(" 譯者：",-1)),t(a,{href:"https://github.com/geekpi"},{default:i(()=>[...e[10]||(e[10]=[n("geekpi",-1)])]),_:1}),e[14]||(e[14]=n(" 校對：",-1)),t(a,{href:"https://github.com/wxy"},{default:i(()=>[...e[11]||(e[11]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[17]||(e[17]=n("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[15]||(e[15]=[n("LCTT",-1)])]),_:1}),e[18]||(e[18]=n(" 原創翻譯，",-1)),t(a,{href:"http://linux.cn/"},{default:i(()=>[...e[16]||(e[16]=[n("Linux中國",-1)])]),_:1}),e[19]||(e[19]=n(" 榮譽推出",-1))])])}const T=p(m,[["render",h]]);export{k as __pageData,T as default};
