import{_ as r,a0 as s,w as l,s as u,ao as i,I as o,x as t,a1 as a,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse('{"title":"使用 GIT 備份 linux 上的網頁文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 GIT 備份 linux 上的網頁文件 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 GIT 備份 linux 上的網頁文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 GIT 備份 linux 上的網頁文件 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140929 Using GIT to backup your website files on linux","title":"使用 GIT 備份 linux 上的網頁文件","tag":"201410","desc":""},"relativePath":"201410/20140929 Using GIT to backup your website files on linux.md","filePath":"[post].md"}'),d={name:"201410/20140929 Using GIT to backup your website files on linux.md"};function b(m,e,h,f,v,c){const n=s("Link");return l(),u("div",null,[e[18]||(e[18]=i(`<h1 id="使用-git-備份-linux-上的網頁文件" tabindex="-1">使用 GIT 備份 linux 上的網頁文件 <a class="header-anchor" href="#使用-git-備份-linux-上的網頁文件" aria-label="Permalink to “使用 GIT 備份 linux 上的網頁文件”">​</a></h1><p><img src="http://techarena51.com/wp-content/uploads/2014/09/git_logo-1024x480-580x271.png" alt=""></p><p>BUP 並不單純是 Git, 而是一款基於 Git 的軟件. 一般情況下, 我使用 rsync 來備份我的文件, 而且迄今為止一直工作的很好. 唯一的不足就是無法把文件恢復到某個特定的時間點. 因此, 我開始尋找替代品, 結果發現了 BUP, 一款基於 git 的軟件, 它將數據存儲在一個倉庫中, 並且有將數據恢復到特定時間點的選項.</p><p>要使用 BUP, 你先要初始化一個空的倉庫, 然後備份所有文件. 當 BUP 完成一次備份是, 它會創建一個還原點, 你可以過後還原到這裏. 它還會創建所有文件的索引, 包括文件的屬性和驗校和. 當要進行下一個備份時, BUP 會對比文件的屬性和驗校和, 只保存發生變化的數據. 這樣可以節省很多空間.</p><h3 id="安裝-bup-在-centos-6-7-上測試通過" tabindex="-1">安裝 BUP (在 Centos 6 &amp; 7 上測試通過) <a class="header-anchor" href="#安裝-bup-在-centos-6-7-上測試通過" aria-label="Permalink to “安裝 BUP (在 Centos 6 &amp; 7 上測試通過)”">​</a></h3><p>首先確保你已經安裝了 RPMFORGE 和 EPEL 倉庫</p><pre><code>[techarena51@vps ~]$ sudo yum groupinstall &quot;Development Tools&quot;
[techarena51@vps ~]$ sudo yum install python python-devel
[techarena51@vps ~]$ sudo yum install fuse-python pyxattr pylibacl
[techarena51@vps ~]$ sudo yum install perl-Time-HiRes
[techarena51@vps ~]$ git clone git://github.com/bup/bup
[techarena51@vps ~]$ cd bup
[techarena51@vps ~]$ make
[techarena51@vps ~]$ make test
[techarena51@vps ~]$ sudo make install
</code></pre>`,7)),o("p",null,[e[1]||(e[1]=t('對於 debian/ubuntu 用户, 你可以使用 "apt-get build-dep bup". 要獲得更多的信息, 可以查看 ',-1)),a(n,{href:"https://github.com/bup/bup"},{default:p(()=>[...e[0]||(e[0]=[t("https://github.com/bup/bup",-1)])]),_:1})]),e[19]||(e[19]=i(`<p>在 CentOS 7 上, 當你運行 &quot;make test&quot; 時可能會出錯, 但你可以繼續運行 &quot;make install&quot;.</p><p>第一步時初始化一個空的倉庫, 就像 git 一樣.</p><pre><code>[techarena51@vps ~]$ bup init
</code></pre><p>默認情況下, bup 會把倉庫存儲在 &quot;~/.bup&quot; 中, 但你可以通過設置環境變量 &quot;export BUP_DIR=/mnt/user/bup&quot; 來改變設置.</p><p>然後, 創建所有文件的索引. 這個索引, 就像之前講過的那樣, 存儲了一系列文件和它們的屬性及 git 目標 id (sha1 哈希表). (屬性包括了軟鏈接, 權限和不可改變字節)</p><pre><code>bup index /path/to/file
bup save -n nameofbackup /path/to/file

#Example
[techarena51@vps ~]$ bup index /var/www/html
Indexing: 7973, done (4398 paths/s).
bup: merging indexes (7980/7980), done.

[techarena51@vps ~]$ bup save -n techarena51 /var/www/html

Reading index: 28, done.
Saving: 100.00% (4/4k, 28/28 files), done.
bloom: adding 1 file (7 objects).
Receiving index from server: 1268/1268, done.
bloom: adding 1 file (7 objects).
</code></pre><p>&quot;BUP save&quot; 會把所有內容分塊, 然後把它們作為對象儲存. &quot;-n&quot; 選項指定備份名.</p><p>你可以查看備份列表和已備份文件.</p><pre><code>[techarena51@vps ~]$ bup ls
local-etc    techarena51  test
#Check for a list of backups available for my site
[techarena51@vps ~]$ bup ls techarena51
2014-09-24-064416  2014-09-24-071814  latest
#Check for the files available in these backups
[techarena51@vps ~]$ bup ls techarena51/2014-09-24-064416/var/www/html
apc.php                      techarena51.com              wp-config-sample.php         wp-load.php
</code></pre><p>在同一個服務器上備份文件從來不是一個好的選擇. BUP 允許你遠程備份網頁文件, 但你必須保證你的 SSH 密鑰和 BUP 都已經安裝在遠程服務器上.</p><pre><code>bup index path/to/dir
bup save-r remote-vps.com -n backupname path/to/dir
</code></pre><h3 id="例子-備份-var-www-html-文件夾" tabindex="-1">例子: 備份 &quot;/var/www/html&quot; 文件夾 <a class="header-anchor" href="#例子-備份-var-www-html-文件夾" aria-label="Permalink to “例子: 備份 /var/www/html 文件夾”">​</a></h3><pre><code>[techarena51@vps ~]$bup index /var/www/html
[techarena51@vps ~]$ bup save -r user@remotelinuxvps.com: -n techarena51 /var/www/html
Reading index: 28, done.
Saving: 100.00% (4/4k, 28/28 files), done.
bloom: adding 1 file (7 objects).
Receiving index from server: 1268/1268, done.
bloom: adding 1 file (7 objects).
</code></pre><h3 id="恢復備份" tabindex="-1">恢復備份 <a class="header-anchor" href="#恢復備份" aria-label="Permalink to “恢復備份”">​</a></h3><p>登入遠程服務器並輸入下面的命令</p><pre><code>[techarena51@vps ~]$bup restore -C ./backup techarena51/latest

#Restore an older version of the entire working dir elsewhere
[techarena51@vps ~]$bup restore -C /tmp/bup-out /testrepo/2013-09-29-195827
#Restore one individual file from an old backup
[techarena51@vps ~]$bup restore -C /tmp/bup-out /testrepo/2013-09-29-201328/root/testbup/binfile1.bin
</code></pre><p>唯一的缺點是你不能把文件恢復到另一個服務器, 你必須通過 SCP 或者 rsync 手動複製文件.</p><p>通過集成的 web 服務器查看備份.</p><pre><code>bup web
#specific port
bup web :8181
</code></pre><p>你可以使用 shell 腳本來運行 bup, 並建立一個每日運行的定時任務.</p><pre><code>#!/bin/bash

bup index /var/www/html 
bup save -r user@remote-vps.com: -n techarena51 /var/www/html 
</code></pre><p>BUP 並不完美, 但它的確能夠很好地完成任務. 我當然非常願意看到這個項目的進一步開發, 希望以後能夠增加遠程恢復的功能.</p>`,22)),o("p",null,[e[3]||(e[3]=t("你也許喜歡閲讀這篇——使用",-1)),a(n,{href:"http://techarena51.com/index.php/inotify-tools-example/"},{default:p(()=>[...e[2]||(e[2]=[t("inotify-tools",-1)])]),_:1}),e[4]||(e[4]=t("實時文件同步.",-1))]),e[20]||(e[20]=o("hr",null,null,-1)),o("p",null,[e[6]||(e[6]=t("via: ",-1)),a(n,{href:"http://techarena51.com/index.php/using-git-backup-website-files-on-linux/"},{default:p(()=>[...e[5]||(e[5]=[t("http://techarena51.com/index.php/using-git-backup-website-files-on-linux/",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=t("作者：",-1)),a(n,{href:"http://techarena51.com/"},{default:p(()=>[...e[7]||(e[7]=[t("Leo G",-1)])]),_:1}),e[11]||(e[11]=t(" 譯者：",-1)),a(n,{href:"https://github.com/wangjiezhe"},{default:p(()=>[...e[8]||(e[8]=[t("wangjiezhe",-1)])]),_:1}),e[12]||(e[12]=t(" 校對：",-1)),a(n,{href:"https://github.com/carolinewuyan"},{default:p(()=>[...e[9]||(e[9]=[t("Caroline",-1)])]),_:1})]),o("p",null,[e[15]||(e[15]=t("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[13]||(e[13]=[t("LCTT",-1)])]),_:1}),e[16]||(e[16]=t(" 原創翻譯，",-1)),a(n,{href:"http://linux.cn/"},{default:p(()=>[...e[14]||(e[14]=[t("Linux中國",-1)])]),_:1}),e[17]||(e[17]=t(" 榮譽推出",-1))])])}const T=r(d,[["render",b]]);export{g as __pageData,T as default};
