import{_ as p,a0 as l,w as d,s,ao as o,I as r,x as n,a1 as t,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"20个 Unix/Linux 命令技巧（一） | LCTT x X-CMD","titleTemplate":false,"description":"20个 Unix/Linux 命令技巧（一） | LCTT (201503) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"20个 Unix/Linux 命令技巧（一） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"20个 Unix/Linux 命令技巧（一） | LCTT (201503) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201503/20150115 20 Unix Command Line Tricks--Part I","title":"20个 Unix/Linux 命令技巧（一）","tag":"201503","desc":""},"relativePath":"201503/20150115 20 Unix Command Line Tricks--Part I.md","filePath":"[post].md"}'),m={name:"201503/20150115 20 Unix Command Line Tricks--Part I.md"};function h(c,e,f,u,x,b){const a=l("Link");return d(),s("div",null,[e[20]||(e[20]=o(`<h1 id="_20个-unix-linux-命令技巧-一" tabindex="-1">20个 Unix/Linux 命令技巧（一） <a class="header-anchor" href="#_20个-unix-linux-命令技巧-一" aria-label="Permalink to “20个 Unix/Linux 命令技巧（一）”">​</a></h1><p>让我们用<strong>这些Unix/Linux命令技巧</strong>开启新的一年，提高在终端下的生产力。我已经找了很久了，现在就与你们分享。</p><p><img src="http://s0.cyberciti.org/uploads/cms/2015/01/unix-command-line-tricks.001.jpg" alt=""></p><h3 id="删除一个大文件" tabindex="-1">删除一个大文件 <a class="header-anchor" href="#删除一个大文件" aria-label="Permalink to “删除一个大文件”">​</a></h3><p>我在生产服务器上有一个很大的200GB的日志文件需要删除。我的rm和ls命令已经崩溃，我担心这是由于巨大的磁盘IO造成的，要删除这个大文件，输入：</p><pre><code>&gt; /path/to/file.log
# 或使用如下格式
: &gt; /path/to/file.log
 
# 然后删除它 
rm /path/to/file.log
</code></pre><h3 id="如何记录终端输出" tabindex="-1">如何记录终端输出？ <a class="header-anchor" href="#如何记录终端输出" aria-label="Permalink to “如何记录终端输出？”">​</a></h3><p>试试使用script命令行工具来为你的终端输出创建输出记录。</p><pre><code>script my.terminal.sessio
</code></pre><p>输入命令：</p><pre><code>ls
date
sudo service foo stop
</code></pre><p>要退出（结束script会话），输入 <em>exit</em> 或者 <em>logout</em> 或者按下 <em>control-D</em>。</p><pre><code>exit
</code></pre><p>要浏览输入：</p><pre><code>more my.terminal.session
less my.terminal.session
cat my.terminal.session
</code></pre><h3 id="还原被删除的-tmp-文件夹" tabindex="-1">还原被删除的 /tmp 文件夹 <a class="header-anchor" href="#还原被删除的-tmp-文件夹" aria-label="Permalink to “还原被删除的 /tmp 文件夹”">​</a></h3>`,16)),r("p",null,[e[1]||(e[1]=n("我在文章",-1)),t(a,{href:"http://www.cyberciti.biz/tips/my-10-unix-command-line-mistakes.html"},{default:i(()=>[...e[0]||(e[0]=[n("Linux和Unix shell，我犯了一些错误",-1)])]),_:1}),e[2]||(e[2]=n("。我意外地删除了/tmp文件夹。要还原它，我需要这么做：",-1))]),e[21]||(e[21]=o(`<pre><code>mkdir /tmp
chmod 1777 /tmp
chown root:root /tmp
ls -ld /tmp
</code></pre><h3 id="锁定一个文件夹" tabindex="-1">锁定一个文件夹 <a class="header-anchor" href="#锁定一个文件夹" aria-label="Permalink to “锁定一个文件夹”">​</a></h3><p>为了我的数据隐私，我想要锁定我文件服务器下的/downloads文件夹。因此我运行了：</p><pre><code>chmod 0000 /downloads
</code></pre><p>root用户仍旧可以访问，而ls和cd命令则不工作。要还原它用：</p><pre><code>chmod 0755 /downloads
</code></pre><h3 id="在vim中用密码保护文件" tabindex="-1">在vim中用密码保护文件 <a class="header-anchor" href="#在vim中用密码保护文件" aria-label="Permalink to “在vim中用密码保护文件”">​</a></h3><p>害怕root用户或者其他人偷窥你的个人文件么？尝试在vim中用密码保护，输入：</p><pre><code>vim +X filename
</code></pre><p>或者，在退出vim之前使用:X 命令来加密你的文件，vim会提示你输入一个密码。</p><h3 id="清除屏幕上的乱码" tabindex="-1">清除屏幕上的乱码 <a class="header-anchor" href="#清除屏幕上的乱码" aria-label="Permalink to “清除屏幕上的乱码”">​</a></h3><p>只要输入：</p><pre><code>reset
</code></pre><h3 id="易读格式" tabindex="-1">易读格式 <a class="header-anchor" href="#易读格式" aria-label="Permalink to “易读格式”">​</a></h3><p>传递<em>-h</em>或者<em>-H</em>（和其他选项）选项给GNU或者BSD工具来获取像ls、df、du等命令以易读的格式输出：</p><pre><code>ls -lh
# 以易读的格式 (比如： 1K 234M 2G)
df -h
df -k
# 以字节、KB、MB 或 GB 输出： 
free -b
free -k
free -m
free -g
# 以易读的格式输出 (比如 1K 234M 2G)
du -h
# 以易读的格式显示文件系统权限
stat -c %A /boot
# 比较易读的数字
sort -h -a file
# 在Linux上以易读的形式显示cpu信息
lscpu
lscpu -e
lscpu -e=cpu,node
# 以易读的形式显示每个文件的大小
tree -h
tree -h /boot
</code></pre><h3 id="在linux系统中显示已知的用户信息" tabindex="-1">在Linux系统中显示已知的用户信息 <a class="header-anchor" href="#在linux系统中显示已知的用户信息" aria-label="Permalink to “在Linux系统中显示已知的用户信息”">​</a></h3><p>只要输入：</p><pre><code>## linux 版本 ##
lslogins
 
## BSD 版本 ##
logins
</code></pre><p>示例输出：</p><pre><code>UID USER      PWD-LOCK PWD-DENY LAST-LOGIN GECOS
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
</code></pre><h3 id="我如何删除意外在当前文件夹下解压的文件" tabindex="-1">我如何删除意外在当前文件夹下解压的文件？ <a class="header-anchor" href="#我如何删除意外在当前文件夹下解压的文件" aria-label="Permalink to “我如何删除意外在当前文件夹下解压的文件？”">​</a></h3><p>我意外在/var/www/html/而不是/home/projects/www/current下解压了一个tarball。它搞乱了/var/www/html下的文件，你甚至不知道哪些是误解压出来的。最简单修复这个问题的方法是：</p><pre><code>cd /var/www/html/
/bin/rm -f &quot;$(tar ztf /path/to/file.tar.gz)&quot;
</code></pre><h3 id="对top命令的输出感到疑惑" tabindex="-1">对top命令的输出感到疑惑？ <a class="header-anchor" href="#对top命令的输出感到疑惑" aria-label="Permalink to “对top命令的输出感到疑惑？”">​</a></h3><p>正经地说，你应该试一下用htop代替top：</p><pre><code>sudo htop
</code></pre><h3 id="想要再次运行相同的命令" tabindex="-1">想要再次运行相同的命令 <a class="header-anchor" href="#想要再次运行相同的命令" aria-label="Permalink to “想要再次运行相同的命令”">​</a></h3><p>只需要输入!!。比如：</p><pre><code>/myhome/dir/script/name arg1 arg2
 
# 要再次运行相同的命令 
!!
 
## 以root用户运行最后运行的命令
sudo !!
</code></pre><p>!!会运行最近使用的命令。要运行最近运行的以“foo”开头命令：</p><pre><code>!foo
# 以root用户运行上一次以“service”开头的命令
sudo !service
</code></pre><p>!$用于运行带上最后一个参数的命令：</p><pre><code># 编辑 nginx.conf
sudo vi /etc/nginx/nginx.conf
 
# 测试 nginx.conf
/sbin/nginx -t -c /etc/nginx/nginx.conf
 
# 测试完 &quot;/sbin/nginx -t -c /etc/nginx/nginx.conf&quot;你可以用vi再次编辑这个文件了
sudo vi !$
</code></pre><h3 id="在终端上提醒你必须得走了" tabindex="-1">在终端上提醒你必须得走了 <a class="header-anchor" href="#在终端上提醒你必须得走了" aria-label="Permalink to “在终端上提醒你必须得走了”">​</a></h3><p>如果你需要提醒离开你的终端，输入下面的命令：</p><pre><code>leave +hhmm
</code></pre><p>这里：</p><ul><li><strong>hhmm</strong> - 时间是以hhmm的形式，hh表示小时（12时制或者24小时制），mm代表分钟。所有的时间都转化成12时制，并且假定发生在接下来的12小时。</li></ul><h3 id="甜蜜的家" tabindex="-1">甜蜜的家 <a class="header-anchor" href="#甜蜜的家" aria-label="Permalink to “甜蜜的家”">​</a></h3><p>想要进入刚才进入的地方？运行：</p><pre><code>cd -
</code></pre><p>需要快速地回到你的家目录？输入：</p><pre><code>cd
</code></pre><p>变量<em>CDPATH</em>定义了目录的搜索路径：</p><pre><code>export CDPATH=/var/www:/nas10
</code></pre><p>现在，不用输入cd */var/www/html/ 这样长了，我可以直接输入下面的命令进入 /var/www/html：</p><pre><code>cd html
</code></pre><h3 id="在less浏览时编辑文件" tabindex="-1">在less浏览时编辑文件 <a class="header-anchor" href="#在less浏览时编辑文件" aria-label="Permalink to “在less浏览时编辑文件”">​</a></h3><p>要编辑一个正在用less浏览的文件，可以按下v。你就可以用变量$EDITOR所指定的编辑器来编辑了：</p><pre><code>less *.c
less foo.html
## 按下v键来编辑文件 ##
## 退出编辑器后，你可以继续用less浏览了 ##
</code></pre><h3 id="列出你系统中的所有文件和目录" tabindex="-1">列出你系统中的所有文件和目录 <a class="header-anchor" href="#列出你系统中的所有文件和目录" aria-label="Permalink to “列出你系统中的所有文件和目录”">​</a></h3><p>要看到你系统中的所有目录，运行：</p><pre><code>find / -type d | less
 
# 列出$HOME 所有目录
find $HOME -type d -ls | less
</code></pre><p>要看到所有的文件，运行：</p><pre><code>find / -type f | less
 
# 列出 $HOME 中所有的文件
find $HOME -type f -ls | less
</code></pre><h3 id="用一条命令构造目录树" tabindex="-1">用一条命令构造目录树 <a class="header-anchor" href="#用一条命令构造目录树" aria-label="Permalink to “用一条命令构造目录树”">​</a></h3><p>你可以用mkdir加上-p选项一次创建一颗目录树：</p><pre><code>mkdir -p /jail/{dev,bin,sbin,etc,usr,lib,lib64}
ls -l /jail/
</code></pre><h3 id="将文件复制到多个目录中" tabindex="-1">将文件复制到多个目录中 <a class="header-anchor" href="#将文件复制到多个目录中" aria-label="Permalink to “将文件复制到多个目录中”">​</a></h3><p>不必运行：</p><pre><code>cp /path/to/file /usr/dir1
cp /path/to/file /var/dir2
cp /path/to/file /nas/dir3
</code></pre><p>运行下面的命令来复制文件到多个目录中：</p><pre><code>echo /usr/dir1 /var/dir2 /nas/dir3 |  xargs -n 1 cp -v /path/to/file
</code></pre>`,64)),r("p",null,[e[4]||(e[4]=n("留下",-1)),t(a,{href:"http://bash.cyberciti.biz/guide/Writing_your_first_shell_function"},{default:i(()=>[...e[3]||(e[3]=[n("创建一个shell函数",-1)])]),_:1}),e[5]||(e[5]=n("作为读者的练习。",-1))]),e[22]||(e[22]=r("h3",{id:"快速找出两个目录的不同",tabindex:"-1"},[n("快速找出两个目录的不同 "),r("a",{class:"header-anchor",href:"#快速找出两个目录的不同","aria-label":"Permalink to “快速找出两个目录的不同”"},"​")],-1)),e[23]||(e[23]=r("p",null,"diff命令会按行比较文件。但是它也可以比较两个目录：",-1)),e[24]||(e[24]=r("pre",null,[r("code",null,`ls -l /tmp/r
ls -l /tmp/s
# 使用 diff 比较两个文件夹
diff /tmp/r/ /tmp/s/
`)],-1)),r("p",null,[t(a,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/20-unix-command-line-tricks-part-i/attachment/differences-between-folders/"},{default:i(()=>[...e[6]||(e[6]=[r("img",{src:"http://s0.cyberciti.org/uploads/cms/2015/01/differences-between-folders.jpg",alt:"Fig. : Finding differences between folders"},null,-1)])]),_:1})]),e[25]||(e[25]=o(`<p><em>图片： 找出目录之间的不同</em></p><h3 id="文本格式化" tabindex="-1">文本格式化 <a class="header-anchor" href="#文本格式化" aria-label="Permalink to “文本格式化”">​</a></h3><p>你可以用fmt命令重新格式化每个段落。在本例中，我要用分割超长的行并且填充短行：</p><pre><code>fmt file.txt
</code></pre><p>你也可以分割长的行，但是不重新填充，也就是说分割长行，但是不填充短行：</p><pre><code>fmt -s file.txt
</code></pre><h3 id="可以看见输出并将其写入到一个文件中" tabindex="-1">可以看见输出并将其写入到一个文件中 <a class="header-anchor" href="#可以看见输出并将其写入到一个文件中" aria-label="Permalink to “可以看见输出并将其写入到一个文件中”">​</a></h3><p>如下使用tee命令在屏幕上看见输出并同样写入到日志文件my.log中：</p><pre><code>mycoolapp arg1 arg2 input.file | tee my.log
</code></pre><p>tee可以保证你同时在屏幕上看到mycoolapp的输出并写入文件  my.log。</p><hr>`,11)),r("p",null,[e[8]||(e[8]=n("via: ",-1)),t(a,{href:"http://www.cyberciti.biz/open-source/command-line-hacks/20-unix-command-line-tricks-part-i/"},{default:i(()=>[...e[7]||(e[7]=[n("http://www.cyberciti.biz/open-source/command-line-hacks/20-unix-command-line-tricks-part-i/",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=n("作者：",-1)),t(a,{href:"http://www.cyberciti.biz/tips/about-us"},{default:i(()=>[...e[9]||(e[9]=[n("nixCraft",-1)])]),_:1}),e[13]||(e[13]=n(" 译者：",-1)),t(a,{href:"https://github.com/geekpi"},{default:i(()=>[...e[10]||(e[10]=[n("geekpi",-1)])]),_:1}),e[14]||(e[14]=n(" 校对：",-1)),t(a,{href:"https://github.com/wxy"},{default:i(()=>[...e[11]||(e[11]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[17]||(e[17]=n("本文由 ",-1)),t(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[15]||(e[15]=[n("LCTT",-1)])]),_:1}),e[18]||(e[18]=n(" 原创翻译，",-1)),t(a,{href:"http://linux.cn/"},{default:i(()=>[...e[16]||(e[16]=[n("Linux中国",-1)])]),_:1}),e[19]||(e[19]=n(" 荣誉推出",-1))])])}const T=p(m,[["render",h]]);export{k as __pageData,T as default};
