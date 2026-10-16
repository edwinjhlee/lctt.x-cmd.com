import{_ as r,a0 as s,w as l,s as u,ao as i,I as o,x as t,a1 as a,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse('{"title":"使用 GIT 备份 linux 上的网页文件 | LCTT x X-CMD","titleTemplate":false,"description":"使用 GIT 备份 linux 上的网页文件 | LCTT (201410) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 GIT 备份 linux 上的网页文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 GIT 备份 linux 上的网页文件 | LCTT (201410) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201410/20140929 Using GIT to backup your website files on linux","title":"使用 GIT 备份 linux 上的网页文件","tag":"201410","desc":""},"relativePath":"201410/20140929 Using GIT to backup your website files on linux.md","filePath":"[post].md"}'),d={name:"201410/20140929 Using GIT to backup your website files on linux.md"};function b(m,e,h,f,v,c){const n=s("Link");return l(),u("div",null,[e[18]||(e[18]=i(`<h1 id="使用-git-备份-linux-上的网页文件" tabindex="-1">使用 GIT 备份 linux 上的网页文件 <a class="header-anchor" href="#使用-git-备份-linux-上的网页文件" aria-label="Permalink to “使用 GIT 备份 linux 上的网页文件”">​</a></h1><p><img src="http://techarena51.com/wp-content/uploads/2014/09/git_logo-1024x480-580x271.png" alt=""></p><p>BUP 并不单纯是 Git, 而是一款基于 Git 的软件. 一般情况下, 我使用 rsync 来备份我的文件, 而且迄今为止一直工作的很好. 唯一的不足就是无法把文件恢复到某个特定的时间点. 因此, 我开始寻找替代品, 结果发现了 BUP, 一款基于 git 的软件, 它将数据存储在一个仓库中, 并且有将数据恢复到特定时间点的选项.</p><p>要使用 BUP, 你先要初始化一个空的仓库, 然后备份所有文件. 当 BUP 完成一次备份是, 它会创建一个还原点, 你可以过后还原到这里. 它还会创建所有文件的索引, 包括文件的属性和验校和. 当要进行下一个备份时, BUP 会对比文件的属性和验校和, 只保存发生变化的数据. 这样可以节省很多空间.</p><h3 id="安装-bup-在-centos-6-7-上测试通过" tabindex="-1">安装 BUP (在 Centos 6 &amp; 7 上测试通过) <a class="header-anchor" href="#安装-bup-在-centos-6-7-上测试通过" aria-label="Permalink to “安装 BUP (在 Centos 6 &amp; 7 上测试通过)”">​</a></h3><p>首先确保你已经安装了 RPMFORGE 和 EPEL 仓库</p><pre><code>[techarena51@vps ~]$ sudo yum groupinstall &quot;Development Tools&quot;
[techarena51@vps ~]$ sudo yum install python python-devel
[techarena51@vps ~]$ sudo yum install fuse-python pyxattr pylibacl
[techarena51@vps ~]$ sudo yum install perl-Time-HiRes
[techarena51@vps ~]$ git clone git://github.com/bup/bup
[techarena51@vps ~]$ cd bup
[techarena51@vps ~]$ make
[techarena51@vps ~]$ make test
[techarena51@vps ~]$ sudo make install
</code></pre>`,7)),o("p",null,[e[1]||(e[1]=t('对于 debian/ubuntu 用户, 你可以使用 "apt-get build-dep bup". 要获得更多的信息, 可以查看 ',-1)),a(n,{href:"https://github.com/bup/bup"},{default:p(()=>[...e[0]||(e[0]=[t("https://github.com/bup/bup",-1)])]),_:1})]),e[19]||(e[19]=i(`<p>在 CentOS 7 上, 当你运行 &quot;make test&quot; 时可能会出错, 但你可以继续运行 &quot;make install&quot;.</p><p>第一步时初始化一个空的仓库, 就像 git 一样.</p><pre><code>[techarena51@vps ~]$ bup init
</code></pre><p>默认情况下, bup 会把仓库存储在 &quot;~/.bup&quot; 中, 但你可以通过设置环境变量 &quot;export BUP_DIR=/mnt/user/bup&quot; 来改变设置.</p><p>然后, 创建所有文件的索引. 这个索引, 就像之前讲过的那样, 存储了一系列文件和它们的属性及 git 目标 id (sha1 哈希表). (属性包括了软链接, 权限和不可改变字节)</p><pre><code>bup index /path/to/file
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
</code></pre><p>&quot;BUP save&quot; 会把所有内容分块, 然后把它们作为对象储存. &quot;-n&quot; 选项指定备份名.</p><p>你可以查看备份列表和已备份文件.</p><pre><code>[techarena51@vps ~]$ bup ls
local-etc    techarena51  test
#Check for a list of backups available for my site
[techarena51@vps ~]$ bup ls techarena51
2014-09-24-064416  2014-09-24-071814  latest
#Check for the files available in these backups
[techarena51@vps ~]$ bup ls techarena51/2014-09-24-064416/var/www/html
apc.php                      techarena51.com              wp-config-sample.php         wp-load.php
</code></pre><p>在同一个服务器上备份文件从来不是一个好的选择. BUP 允许你远程备份网页文件, 但你必须保证你的 SSH 密钥和 BUP 都已经安装在远程服务器上.</p><pre><code>bup index path/to/dir
bup save-r remote-vps.com -n backupname path/to/dir
</code></pre><h3 id="例子-备份-var-www-html-文件夹" tabindex="-1">例子: 备份 &quot;/var/www/html&quot; 文件夹 <a class="header-anchor" href="#例子-备份-var-www-html-文件夹" aria-label="Permalink to “例子: 备份 /var/www/html 文件夹”">​</a></h3><pre><code>[techarena51@vps ~]$bup index /var/www/html
[techarena51@vps ~]$ bup save -r user@remotelinuxvps.com: -n techarena51 /var/www/html
Reading index: 28, done.
Saving: 100.00% (4/4k, 28/28 files), done.
bloom: adding 1 file (7 objects).
Receiving index from server: 1268/1268, done.
bloom: adding 1 file (7 objects).
</code></pre><h3 id="恢复备份" tabindex="-1">恢复备份 <a class="header-anchor" href="#恢复备份" aria-label="Permalink to “恢复备份”">​</a></h3><p>登入远程服务器并输入下面的命令</p><pre><code>[techarena51@vps ~]$bup restore -C ./backup techarena51/latest

#Restore an older version of the entire working dir elsewhere
[techarena51@vps ~]$bup restore -C /tmp/bup-out /testrepo/2013-09-29-195827
#Restore one individual file from an old backup
[techarena51@vps ~]$bup restore -C /tmp/bup-out /testrepo/2013-09-29-201328/root/testbup/binfile1.bin
</code></pre><p>唯一的缺点是你不能把文件恢复到另一个服务器, 你必须通过 SCP 或者 rsync 手动复制文件.</p><p>通过集成的 web 服务器查看备份.</p><pre><code>bup web
#specific port
bup web :8181
</code></pre><p>你可以使用 shell 脚本来运行 bup, 并建立一个每日运行的定时任务.</p><pre><code>#!/bin/bash

bup index /var/www/html 
bup save -r user@remote-vps.com: -n techarena51 /var/www/html 
</code></pre><p>BUP 并不完美, 但它的确能够很好地完成任务. 我当然非常愿意看到这个项目的进一步开发, 希望以后能够增加远程恢复的功能.</p>`,22)),o("p",null,[e[3]||(e[3]=t("你也许喜欢阅读这篇——使用",-1)),a(n,{href:"http://techarena51.com/index.php/inotify-tools-example/"},{default:p(()=>[...e[2]||(e[2]=[t("inotify-tools",-1)])]),_:1}),e[4]||(e[4]=t("实时文件同步.",-1))]),e[20]||(e[20]=o("hr",null,null,-1)),o("p",null,[e[6]||(e[6]=t("via: ",-1)),a(n,{href:"http://techarena51.com/index.php/using-git-backup-website-files-on-linux/"},{default:p(()=>[...e[5]||(e[5]=[t("http://techarena51.com/index.php/using-git-backup-website-files-on-linux/",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=t("作者：",-1)),a(n,{href:"http://techarena51.com/"},{default:p(()=>[...e[7]||(e[7]=[t("Leo G",-1)])]),_:1}),e[11]||(e[11]=t(" 译者：",-1)),a(n,{href:"https://github.com/wangjiezhe"},{default:p(()=>[...e[8]||(e[8]=[t("wangjiezhe",-1)])]),_:1}),e[12]||(e[12]=t(" 校对：",-1)),a(n,{href:"https://github.com/carolinewuyan"},{default:p(()=>[...e[9]||(e[9]=[t("Caroline",-1)])]),_:1})]),o("p",null,[e[15]||(e[15]=t("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[13]||(e[13]=[t("LCTT",-1)])]),_:1}),e[16]||(e[16]=t(" 原创翻译，",-1)),a(n,{href:"http://linux.cn/"},{default:p(()=>[...e[14]||(e[14]=[t("Linux中国",-1)])]),_:1}),e[17]||(e[17]=t(" 荣誉推出",-1))])])}const T=r(d,[["render",b]]);export{g as __pageData,T as default};
