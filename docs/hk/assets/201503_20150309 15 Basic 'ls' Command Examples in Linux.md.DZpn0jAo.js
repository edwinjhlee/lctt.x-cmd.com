import{_ as e,a0 as s,w as i,s as d,ao as p,I as n,x as o,a1 as l,A as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse(`{"title":"Linux中的15個基本‘ls’命令示例 | LCTT x X-CMD","titleTemplate":false,"description":"Linux中的15個基本‘ls’命令示例 | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux中的15個基本‘ls’命令示例 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux中的15個基本‘ls’命令示例 | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150309 15 Basic 'ls' Command Examples in Linux","title":"Linux中的15個基本‘ls’命令示例","tag":"201503","desc":""},"relativePath":"201503/20150309 15 Basic 'ls' Command Examples in Linux.md","filePath":"[post].md"}`),u={name:"201503/20150309 15 Basic 'ls' Command Examples in Linux.md"};function x(c,r,h,m,g,w){const t=s("Link");return i(),d("div",null,[r[13]||(r[13]=p(`<h1 id="linux中的15個基本-ls-命令示例" tabindex="-1">Linux中的15個基本‘ls’命令示例 <a class="header-anchor" href="#linux中的15個基本-ls-命令示例" aria-label="Permalink to “Linux中的15個基本‘ls’命令示例”">​</a></h1><p>ls命令是Linux系統中最被頻繁使用的命令之一，我相信ls命令一定是你進入一台Linux系統的電腦打開命令提示符後第一個使用的命令。我們每天都在頻繁地使用ls命令,即使我們可能沒有意識也從來用不到所有可用的選項。本文中，我們將討論下一些基本的ls命令並且覆蓋儘可能多的有關參數來講解。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2012/08/Linux-ls-Commands.png" alt="Linux ls Command"></p><p><em>Linux的ls命令</em></p><h3 id="_1-不帶任何選項列出文件" tabindex="-1">1. 不帶任何選項列出文件 <a class="header-anchor" href="#_1-不帶任何選項列出文件" aria-label="Permalink to “1. 不帶任何選項列出文件”">​</a></h3><p>不帶選項的ls命令來光禿禿地列出文件和目錄，我們是不能看到像文件類型、大小、修改日期和時間、權限以及鏈接這樣具體的信息的。</p><pre><code># ls

0001.pcap        Desktop    Downloads         index.html   install.log.syslog  Pictures  Templates
anaconda-ks.cfg  Documents  fbcmd_update.php  install.log  Music               Public    Videos
</code></pre><h3 id="_2-帶-–l-選項列出文件列表" tabindex="-1">2 帶 –l 選項列出文件列表 <a class="header-anchor" href="#_2-帶-–l-選項列出文件列表" aria-label="Permalink to “2 帶 –l 選項列出文件列表”">​</a></h3><p>你看，ls -l（-l是字母不是“1”）就能展示出是文件還是目錄，它的大小、修改日期和時間、文件或目錄的名字以及文件的屬主和它的權限。</p><pre><code># ls -l

total 176
-rw-r--r--. 1 root root   683 Aug 19 09:59 0001.pcap
-rw-------. 1 root root  1586 Jul 31 02:17 anaconda-ks.cfg
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Desktop
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Documents
drwxr-xr-x. 4 root root  4096 Aug 16 02:55 Downloads
-rw-r--r--. 1 root root 21262 Aug 12 12:42 fbcmd_update.php
-rw-r--r--. 1 root root 46701 Jul 31 09:58 index.html
-rw-r--r--. 1 root root 48867 Jul 31 02:17 install.log
-rw-r--r--. 1 root root 11439 Jul 31 02:13 install.log.syslog
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Music
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Pictures
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Public
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Templates
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Videos
</code></pre><h3 id="_3-瀏覽隱藏文件" tabindex="-1">3. 瀏覽隱藏文件 <a class="header-anchor" href="#_3-瀏覽隱藏文件" aria-label="Permalink to “3. 瀏覽隱藏文件”">​</a></h3><p>列出所有文件包括以‘.’開頭的隱藏文件。</p><pre><code># ls -a

.                .bashrc  Documents         .gconfd          install.log         .nautilus     .pulse-cookie
..               .cache   Downloads         .gnome2          install.log.syslog  .netstat.swp  .recently-used.xbel
0001.pcap        .config  .elinks           .gnome2_private  .kde                .opera        .spice-vdagent
anaconda-ks.cfg  .cshrc   .esd_auth         .gtk-bookmarks   .libreoffice        Pictures      .tcshrc
.bash_history    .dbus    .fbcmd            .gvfs            .local              .pki          Templates
.bash_logout     Desktop  fbcmd_update.php  .ICEauthority    .mozilla            Public        Videos
.bash_profile    .digrc   .gconf            index.html       Music               .pulse        .wireshark
</code></pre><h3 id="_4-用-lh-選項來以易讀方式列出文件" tabindex="-1">4. 用 -lh 選項來以易讀方式列出文件 <a class="header-anchor" href="#_4-用-lh-選項來以易讀方式列出文件" aria-label="Permalink to “4. 用 -lh 選項來以易讀方式列出文件”">​</a></h3><p>用-lh組合選項，以易讀方式來顯示大小。</p><pre><code># ls -lh

total 176K
-rw-r--r--. 1 root root  683 Aug 19 09:59 0001.pcap
-rw-------. 1 root root 1.6K Jul 31 02:17 anaconda-ks.cfg
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Desktop
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Documents
drwxr-xr-x. 4 root root 4.0K Aug 16 02:55 Downloads
-rw-r--r--. 1 root root  21K Aug 12 12:42 fbcmd_update.php
-rw-r--r--. 1 root root  46K Jul 31 09:58 index.html
-rw-r--r--. 1 root root  48K Jul 31 02:17 install.log
-rw-r--r--. 1 root root  12K Jul 31 02:13 install.log.syslog
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Music
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Pictures
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Public
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Templates
drwxr-xr-x. 2 root root 4.0K Jul 31 02:48 Videos
</code></pre><h3 id="_5-以尾部以-字符結尾的方式列出文件和目錄" tabindex="-1">5. 以尾部以‘/’字符結尾的方式列出文件和目錄 <a class="header-anchor" href="#_5-以尾部以-字符結尾的方式列出文件和目錄" aria-label="Permalink to “5. 以尾部以‘/’字符結尾的方式列出文件和目錄”">​</a></h3><p>使用 ls 命令的 -F 選項，會在每個目錄的末尾添加“/”字符顯示。</p><pre><code># ls -F

0001.pcap        Desktop/    Downloads/        index.html   install.log.syslog  Pictures/  Templates/
anaconda-ks.cfg  Documents/  fbcmd_update.php  install.log  Music/              Public/    Videos/
</code></pre><h3 id="_6-倒序列出文件" tabindex="-1">6. 倒序列出文件 <a class="header-anchor" href="#_6-倒序列出文件" aria-label="Permalink to “6. 倒序列出文件”">​</a></h3><p>ls -r 選項能以倒序方式顯示文件和目錄。</p><pre><code># ls -r

Videos     Public    Music               install.log  fbcmd_update.php  Documents  anaconda-ks.cfg
Templates  Pictures  install.log.syslog  index.html   Downloads         Desktop    0001.pcap
</code></pre><h3 id="_7-遞歸列出子目錄" tabindex="-1">7. 遞歸列出子目錄 <a class="header-anchor" href="#_7-遞歸列出子目錄" aria-label="Permalink to “7. 遞歸列出子目錄”">​</a></h3><p>ls -R 選項能列出非常長的目錄樹，來看看示例輸出：</p><pre><code># ls -R

total 1384
-rw-------. 1 root     root      33408 Aug  8 17:25 anaconda.log
-rw-------. 1 root     root      30508 Aug  8 17:25 anaconda.program.log

./httpd:
total 132
-rw-r--r--  1 root root     0 Aug 19 03:14 access_log
-rw-r--r--. 1 root root 61916 Aug 10 17:55 access_log-20120812

./lighttpd:
total 68
-rw-r--r--  1 lighttpd lighttpd  7858 Aug 21 15:26 access.log
-rw-r--r--. 1 lighttpd lighttpd 37531 Aug 17 18:21 access.log-20120819

./nginx:
total 12
-rw-r--r--. 1 root root    0 Aug 12 03:17 access.log
-rw-r--r--. 1 root root  390 Aug 12 03:17 access.log-20120812.gz
</code></pre><h3 id="_8-以修改時間倒序列出" tabindex="-1">8. 以修改時間倒序列出 <a class="header-anchor" href="#_8-以修改時間倒序列出" aria-label="Permalink to “8. 以修改時間倒序列出”">​</a></h3><p>帶-ltr組合選項能以文件或目錄的最新修改時間的次序來顯示它們。</p><pre><code># ls -ltr

total 176
-rw-r--r--. 1 root root 11439 Jul 31 02:13 install.log.syslog
-rw-r--r--. 1 root root 48867 Jul 31 02:17 install.log
-rw-------. 1 root root  1586 Jul 31 02:17 anaconda-ks.cfg
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Desktop
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Videos
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Templates
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Public
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Pictures
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Music
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Documents
-rw-r--r--. 1 root root 46701 Jul 31 09:58 index.html
-rw-r--r--. 1 root root 21262 Aug 12 12:42 fbcmd_update.php
drwxr-xr-x. 4 root root  4096 Aug 16 02:55 Downloads
-rw-r--r--. 1 root root   683 Aug 19 09:59 0001.pcap
</code></pre><h3 id="_9-按文件大小排序" tabindex="-1">9. 按文件大小排序 <a class="header-anchor" href="#_9-按文件大小排序" aria-label="Permalink to “9. 按文件大小排序”">​</a></h3><p>帶-lS組合選項能按文件從大到小的次序顯示。</p><pre><code># ls -lS

total 176
-rw-r--r--. 1 root root 48867 Jul 31 02:17 install.log
-rw-r--r--. 1 root root 46701 Jul 31 09:58 index.html
-rw-r--r--. 1 root root 21262 Aug 12 12:42 fbcmd_update.php
-rw-r--r--. 1 root root 11439 Jul 31 02:13 install.log.syslog
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Desktop
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Documents
drwxr-xr-x. 4 root root  4096 Aug 16 02:55 Downloads
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Music
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Pictures
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Public
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Templates
drwxr-xr-x. 2 root root  4096 Jul 31 02:48 Videos
-rw-------. 1 root root  1586 Jul 31 02:17 anaconda-ks.cfg
-rw-r--r--. 1 root root   683 Aug 19 09:59 0001.pcap
</code></pre><h3 id="_10-顯示文件或目錄的索引節點號" tabindex="-1">10. 顯示文件或目錄的索引節點號 <a class="header-anchor" href="#_10-顯示文件或目錄的索引節點號" aria-label="Permalink to “10. 顯示文件或目錄的索引節點號”">​</a></h3><p>我們有時候可以看到一些數字打印在文件或目錄名之前，帶-i選項就能列出文件或目錄的索引節點號。</p><pre><code># ls -i

20112 0001.pcap        23610 Documents         23793 index.html          23611 Music     23597 Templates
23564 anaconda-ks.cfg  23595 Downloads            22 install.log         23612 Pictures  23613 Videos
23594 Desktop          23585 fbcmd_update.php     35 install.log.syslog  23601 Public
</code></pre><h3 id="_11-顯示ls命令的版本" tabindex="-1">11. 顯示ls命令的版本 <a class="header-anchor" href="#_11-顯示ls命令的版本" aria-label="Permalink to “11. 顯示ls命令的版本”">​</a></h3><p>查看ls命令的版本。</p><pre><code># ls --version

ls (GNU coreutils) 8.4
Copyright (C) 2010 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later &lt;http://gnu.org/licenses/gpl.html&gt;.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
Written by Richard M. Stallman and David MacKenzie.
</code></pre><h3 id="_12-顯示幫助頁面" tabindex="-1">12. 顯示幫助頁面 <a class="header-anchor" href="#_12-顯示幫助頁面" aria-label="Permalink to “12. 顯示幫助頁面”">​</a></h3><p>列出ls命令的選項幫助頁面。</p><pre><code># ls --help

Usage: ls [OPTION]... [FILE]...
</code></pre><h3 id="_13-列出目錄信息" tabindex="-1">13. 列出目錄信息 <a class="header-anchor" href="#_13-列出目錄信息" aria-label="Permalink to “13. 列出目錄信息”">​</a></h3><p>用ls -l命令列出/tmp目錄下的文件，其中-ld參數可以只顯示/tmp目錄的信息。</p><pre><code># ls -l /tmp
total 408
drwx------. 2 narad narad   4096 Aug  2 02:00 CRX_75DAF8CB7768
-r--------. 1 root  root  384683 Aug  4 12:28 htop-1.0.1.tar.gz
drwx------. 2 root  root    4096 Aug  4 11:20 keyring-6Mfjnk
drwx------. 2 root  root    4096 Aug 16 01:33 keyring-pioZJr
drwx------. 2 gdm   gdm     4096 Aug 21 11:26 orbit-gdm
drwx------. 2 root  root    4096 Aug 19 08:41 pulse-gl6o4ZdxQVrX
drwx------. 2 narad narad   4096 Aug  4 08:16 pulse-UDH76ExwUVoU
drwx------. 2 gdm   gdm     4096 Aug 21 11:26 pulse-wJtcweUCtvhn
-rw-------. 1 root  root     300 Aug 16 03:34 yum_save_tx-2012-08-16-03-34LJTAa1.yumtx
</code></pre><hr><pre><code># ls -ld /tmp/

drwxrwxrwt. 13 root root 4096 Aug 21 12:48 /tmp/
</code></pre><h3 id="_14-顯示文件的uid和gid" tabindex="-1">14. 顯示文件的UID和GID <a class="header-anchor" href="#_14-顯示文件的uid和gid" aria-label="Permalink to “14. 顯示文件的UID和GID”">​</a></h3><p>用ls -n命令來顯示文件和目錄的UID（譯者注：userid，用户ID）和GID（譯者注：groupid，組ID）。</p><pre><code># ls -n

total 36
drwxr-xr-x. 2 500 500 4096 Aug  2 01:52 Downloads
drwxr-xr-x. 2 500 500 4096 Aug  2 01:52 Music
drwxr-xr-x. 2 500 500 4096 Aug  2 01:52 Pictures
-rw-rw-r--. 1 500 500   12 Aug 21 13:06 tmp.txt
drwxr-xr-x. 2 500 500 4096 Aug  2 01:52 Videos
</code></pre><h3 id="_15-ls命令和它的別名" tabindex="-1">15. ls命令和它的別名 <a class="header-anchor" href="#_15-ls命令和它的別名" aria-label="Permalink to “15. ls命令和它的別名”">​</a></h3><p>我們給ls命令設置如下別名之後，當我們執行ls命令的時候它會默認執行-l選項並且像上文提到的那樣顯示長列表。</p><pre><code># alias ls=&quot;ls -l&quot;
</code></pre><p>注意：我們可以通過不加任何參數的alias命令來看到目前系統中可用的所有alias設置，當然它們同時也可以unalias來取消。</p><pre><code># alias

alias cp=&#39;cp -i&#39;
alias l.=&#39;ls -d .* --color=auto&#39;
alias ll=&#39;ls -l --color=auto&#39;
alias ls=&#39;ls --color=auto&#39;
alias mv=&#39;mv -i&#39;
alias rm=&#39;rm -i&#39;
alias which=&#39;alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde&#39;
</code></pre><p>刪除一項之前定義的alias設置，只需用unalias命令即可。</p><pre><code># unalias ls
</code></pre><p>下篇文章我們將討論更多更高級的ls命令以及示例，如果我們在本文有遺漏了任何東西，請通過評論讓我們獲悉。</p><hr>`,57)),n("p",null,[r[1]||(r[1]=o("via: ",-1)),l(t,{href:"http://www.tecmint.com/15-basic-ls-command-examples-in-linux/"},{default:a(()=>[...r[0]||(r[0]=[o("http://www.tecmint.com/15-basic-ls-command-examples-in-linux/",-1)])]),_:1})]),n("p",null,[r[5]||(r[5]=o("作者：",-1)),l(t,{href:"http://www.tecmint.com/author/admin/"},{default:a(()=>[...r[2]||(r[2]=[o("Ravi Saive",-1)])]),_:1}),r[6]||(r[6]=o(" 譯者：",-1)),l(t,{href:"https://github.com/ZTinoZ"},{default:a(()=>[...r[3]||(r[3]=[o("ZTinoZ",-1)])]),_:1}),r[7]||(r[7]=o(" 校對：",-1)),l(t,{href:"https://github.com/wxy"},{default:a(()=>[...r[4]||(r[4]=[o("wxy",-1)])]),_:1})]),n("p",null,[r[10]||(r[10]=o("本文由 ",-1)),l(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...r[8]||(r[8]=[o("LCTT",-1)])]),_:1}),r[11]||(r[11]=o(" 原創翻譯，",-1)),l(t,{href:"http://linux.cn/"},{default:a(()=>[...r[9]||(r[9]=[o("Linux中國",-1)])]),_:1}),r[12]||(r[12]=o(" 榮譽推出",-1))])])}const k=e(u,[["render",x]]);export{_ as __pageData,k as default};
