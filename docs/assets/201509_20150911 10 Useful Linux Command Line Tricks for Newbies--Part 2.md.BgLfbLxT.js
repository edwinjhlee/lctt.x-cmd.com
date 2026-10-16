import{_ as p,a0 as d,w as s,s as a,I as e,x as t,a1 as i,A as r,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"给新手的 10 个有用 Linux 命令行技巧 | LCTT x X-CMD","titleTemplate":false,"description":"给新手的 10 个有用 Linux 命令行技巧 | LCTT (201509) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"给新手的 10 个有用 Linux 命令行技巧 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"给新手的 10 个有用 Linux 命令行技巧 | LCTT (201509) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201509/20150911 10 Useful Linux Command Line Tricks for Newbies--Part 2","title":"给新手的 10 个有用 Linux 命令行技巧","tag":"201509","desc":""},"relativePath":"201509/20150911 10 Useful Linux Command Line Tricks for Newbies--Part 2.md","filePath":"[post].md"}'),m={name:"201509/20150911 10 Useful Linux Command Line Tricks for Newbies--Part 2.md"};function u(f,n,h,x,w,g){const o=d("Link");return s(),a("div",null,[n[26]||(n[26]=e("h1",{id:"给新手的-10-个有用-linux-命令行技巧",tabindex:"-1"},[t("给新手的 10 个有用 Linux 命令行技巧 "),e("a",{class:"header-anchor",href:"#给新手的-10-个有用-linux-命令行技巧","aria-label":"Permalink to “给新手的 10 个有用 Linux 命令行技巧”"},"​")],-1)),n[27]||(n[27]=e("p",null,"我记得我第一次使用 Linux 的时候，我还习惯于 Windows 的图形界面，我真的很讨厌 Linux 终端。那时候我觉得命令难以记忆，不能正确使用它们。随着时间推移，我意识到了 Linux 终端的优美、灵活和可用性，说实话，我没有一天不使用它。今天，我很高兴和刚开始接触 Linux 的人一起来分享一些有用的技巧和提示，希望能帮助他们更好的向 Linux 过渡，并帮助他们学到一些新的东西（希望如此）。",-1)),n[28]||(n[28]=e("p",null,[e("img",{src:"http://www.tecmint.com/wp-content/uploads/2015/09/10-Linux-Commandline-Tricks.jpg",alt:"给新手的 10 个命令行技巧"})],-1)),n[29]||(n[29]=e("p",null,[e("em",null,"10 个 Linux 命令行技巧")],-1)),e("ul",null,[e("li",null,[i(o,{href:"https://linux.cn/article-5485-1.html"},{default:r(()=>[...n[0]||(n[0]=[t("5 个有趣的 Linux 命令行技巧",-1)])]),_:1})]),e("li",null,[i(o,{href:"http://www.tecmint.com/manage-file-types-and-set-system-time-in-linux/"},{default:r(()=>[...n[1]||(n[1]=[t("管理 Linux 文件类型的 5 个有用命令",-1)])]),_:1})])]),n[30]||(n[30]=l(`<p>这篇文章希望向你展示一些不需要很高的技术就可以像一个高手一样使用 Linux 终端的有用技巧。你只需要一个 Linux 终端和一些自由时间来体会这些命令。</p><h3 id="_1-找到正确的命令" tabindex="-1">1. 找到正确的命令 <a class="header-anchor" href="#_1-找到正确的命令" aria-label="Permalink to “1. 找到正确的命令”">​</a></h3><p>执行正确的命令对你的系统来说非常重要。然而在 Linux 中有如此多的、难以记忆的各种的命令行。那么怎样才能找到你需要的正确命令呢？答案是 apropos。你只需要运行：</p><pre><code># apropos &lt;description&gt;
</code></pre><p>其中你要用真正描述你要查找的命令的语句代替 “description”。这里有一个例子：</p><pre><code># apropos &quot;list directory&quot;

dir (1) - list directory contents
ls (1) - list directory contents
ntfsls (8) - list directory contents on an NTFS filesystem
vdir (1) - list directory contents
</code></pre><p>左边你看到的是命令，右边是它们的描述。</p><h3 id="_2-执行之前的命令" tabindex="-1">2. 执行之前的命令 <a class="header-anchor" href="#_2-执行之前的命令" aria-label="Permalink to “2. 执行之前的命令”">​</a></h3><p>很多时候你需要一遍又一遍执行相同的命令。尽管你可以重复按你键盘上的向上光标键，但你也可以用 history 命令替代。这个命令会列出自从你上次启动终端以来所有输入过的命令：</p><pre><code># history

    1  fdisk -l
    2  apt-get install gnome-paint
    3  hostname tecmint.com
    4  hostnamectl tecmint.com
    5  man hostnamectl 
    6  hostnamectl --set-hostname tecmint.com
    7  hostnamectl -set-hostname tecmint.com
    8  hostnamectl set-hostname tecmint.com
    9  mount -t &quot;ntfs&quot; -o
   10  fdisk -l
   11  mount -t ntfs-3g /dev/sda5 /mnt
   12  mount -t rw ntfs-3g /dev/sda5 /mnt
   13  mount -t -rw ntfs-3g /dev/sda5 /mnt
   14  mount -t ntfs-3g /dev/sda5 /mnt
   15  mount man
   16  man mount
   17  mount -t -o ntfs-3g /dev/sda5 /mnt
   18  mount -o ntfs-3g /dev/sda5 /mnt
   19  mount -ro ntfs-3g /dev/sda5 /mnt
   20  cd /mnt
   ...
</code></pre><p>正如你上面看到的，你会得到一个你运行过的命令的列表。每一行中有一个数字表示你在第几行输入了命令。你可以通过以下方法重新调用该命令：</p><pre><code>!#
</code></pre><p>其中要用命令的实际编号代替 #。为了更好的理解，请看下面的例子：</p><pre><code>!501
</code></pre><p>等价于：</p><pre><code># history
</code></pre><h3 id="_3-使用-midnight-命令" tabindex="-1">3. 使用 midnight 命令 <a class="header-anchor" href="#_3-使用-midnight-命令" aria-label="Permalink to “3. 使用 midnight 命令”">​</a></h3><p>如果你不习惯使用类似 cd、cp、mv、rm 等命令，你可以使用 midnight 命令。它是一个简单的可视化 shell，你可以在上面使用鼠标：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/09/mc-command.jpg" alt="Midnight 命令"></p><p><em>Midnight 命令</em></p><p>借助 F1 到 F12 键，你可以轻易地执行不同任务。只需要在底部选择对应的命令。要选择文件或者目录，按下 “Insert” 键。</p><p>简而言之 midnight 就是所谓的 “mc”。要安装 mc，只需要运行：</p><pre><code>$ sudo apt-get install mc        [On Debian based systems]
</code></pre><hr><pre><code># yum install mc                 [On Fedora based systems]
</code></pre><p>下面是一个使用 midnight 命令器的简单例子。通过输入以下命令打开 mc：</p><pre><code># mc
</code></pre><p>现在使用 TAB 键选择不同的窗口 - 左和右。我有一个想要移动到 “Software” 目录的 LibreOffice 文件：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/09/Midnight-Commander-Move-Files.jpg" alt="Midnight 命令移动文件"></p><p><em>Midnight 命令移动文件</em></p><p>按 F6 按钮移动文件到新的目录。MC 会请求你确认：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/09/Move-Files-to-new-Directory.png" alt="移动文件到新目录"></p><p><em>移动文件到新目录</em></p><p>确认了之后，文件就会被移动到新的目标目录。</p>`,34)),e("ul",null,[e("li",null,[n[3]||(n[3]=t("扩展阅读：",-1)),i(o,{href:"http://www.tecmint.com/midnight-commander-a-console-based-file-manager-for-linux/"},{default:r(()=>[...n[2]||(n[2]=[t("如何在 Linux 中使用 Midnight 命令文件管理器",-1)])]),_:1})])]),n[31]||(n[31]=l(`<h3 id="_4-在指定时间关闭计算机" tabindex="-1">4. 在指定时间关闭计算机 <a class="header-anchor" href="#_4-在指定时间关闭计算机" aria-label="Permalink to “4. 在指定时间关闭计算机”">​</a></h3><p>有时候你需要在下班几个小时后再关闭计算机。你可以通过使用下面的命令在指定时间关闭你的计算机：</p><pre><code>$ sudo shutdown 21:00
</code></pre><p>这会告诉你在你指定的时间关闭计算机。你也可以告诉系统在指定分钟后关闭：</p><pre><code>$ sudo shutdown +15
</code></pre><p>这表示计算机会在 15 分钟后关闭。</p><h3 id="_5-显示已知用户的信息" tabindex="-1">5. 显示已知用户的信息 <a class="header-anchor" href="#_5-显示已知用户的信息" aria-label="Permalink to “5. 显示已知用户的信息”">​</a></h3><p>你可以使用一个简单的命令列出你 Linux 系统的用户以及一些关于它们的基本信息。</p><pre><code># lslogins
</code></pre><p>这会输出下面的结果：</p><pre><code>UID USER PWD-LOCK PWD-DENY LAST-LOGIN GECOS
0 root 0 0 Apr29/11:35 root
1 bin 0 1 bin
2 daemon 0 1 daemon
3 adm 0 1 adm
4 lp 0 1 lp
5 sync 0 1 sync
6 shutdown 0 1 Jul19/10:04 shutdown
7 halt 0 1 halt
8 mail 0 1 mail
10 uucp 0 1 uucp
11 operator 0 1 operator
12 games 0 1 games
13 gopher 0 1 gopher
14 ftp 0 1 FTP User
23 squid 0 1
25 named 0 1 Named
27 mysql 0 1 MySQL Server
47 mailnull 0 1
48 apache 0 1 Apache
...
</code></pre><h3 id="_6-查找文件" tabindex="-1">6. 查找文件 <a class="header-anchor" href="#_6-查找文件" aria-label="Permalink to “6. 查找文件”">​</a></h3><p>查找文件有时候并不像你想象的那么简单。一个搜索文件的好例子是：</p><pre><code># find /home/user -type f
</code></pre><p>这个命令会搜索 /home/user 目录下的所有文件。find 命令真的很强大，你可以传递更多选项给它使得你的搜索更加详细。如果你想搜索超过特定大小的文件，可以使用：</p><pre><code># find . -type f -size 10M
</code></pre><p>上面的命令会搜索当前目录中所有大于 10M 的文件。确保不要在你 Linux 系统的根目录运行该命令，因为这可能导致你的机器 I/O 瓶颈。</p><p>我最经常和 find 命令一起使用的选项之一是 “exec”，这允许你对 find 命令的结果运行一些操作。</p><p>例如，假如我们想查找一个目录中的所有文件并更改权限。可以通过以下简单命令完成：</p><pre><code># find /home/user/files/ -type f -exec chmod 644 {} \\;
</code></pre>`,20)),e("p",null,[n[5]||(n[5]=t("上面的命令会递归搜索指定目录内的所有文件，并对找到的文件执行 chmod 命令。推荐你阅读 ",-1)),i(o,{href:"http://www.tecmint.com/35-practical-examples-of-linux-find-command/"},{default:r(()=>[...n[4]||(n[4]=[t("35 个 Linux ‘find’ 命令的使用方法",-1)])]),_:1}),n[6]||(n[6]=t("，我肯定你会发现这个命令更多的使用方法。",-1))]),n[32]||(n[32]=l(`<h3 id="_7-用一个命令创建目录树" tabindex="-1">7. 用一个命令创建目录树 <a class="header-anchor" href="#_7-用一个命令创建目录树" aria-label="Permalink to “7. 用一个命令创建目录树”">​</a></h3><p>你很可能知道可以使用 mkdir 命令创建新的目录。因此如果你想创建一个新的目录，你可能会运行：</p><pre><code># mkdir new_folder
</code></pre><p>但如果你想在该目录下创建 5 个子目录呢？运行 5 次 mkdir 命令并非是一个好的选择。相反你可以类似下面这样使用 -p 选项：</p><pre><code># mkdir -p new_folder/{folder_1,folder_2,folder_3,folder_4,folder_5}
</code></pre><p>最后你会在 new_folder 中有 5 个目录：</p><pre><code># ls new_folder/

folder_1 folder_2 folder_3 folder_4 folder_5
</code></pre><h3 id="_8-复制文件到多个目录" tabindex="-1">8. 复制文件到多个目录 <a class="header-anchor" href="#_8-复制文件到多个目录" aria-label="Permalink to “8. 复制文件到多个目录”">​</a></h3><p>通常使用 cp 命令进行文件复制。复制文件通常看起来类似：</p><pre><code># cp /path-to-file/my_file.txt /path-to-new-directory/
</code></pre><p>现在假设你需要复制该文件到多个目录：</p><pre><code># cp /home/user/my_file.txt /home/user/1
# cp /home/user/my_file.txt /home/user/2
# cp /home/user/my_file.txt /home/user/3
</code></pre><p>这有点荒唐。相反，你可以用简单的一行命令解决问题：</p><pre><code># echo /home/user/1/ /home/user/2/ /home/user/3/ | xargs -n 1  cp /home/user/my_file.txt
</code></pre><h3 id="_9-删除大文件" tabindex="-1">9. 删除大文件 <a class="header-anchor" href="#_9-删除大文件" aria-label="Permalink to “9. 删除大文件”">​</a></h3><p>有时候文件可能会变得很大。我看过由于缺乏管理技能一个日志文件就超过 250G 的例子。用 rm 命令可能不足以删除该文件，因为有大量的数据需要移除。应该避免这个很“笨重”的操作。相反，你可以使用一个简单的方法解决这个问题：</p><pre><code># &gt; /path-to-file/huge_file.log
</code></pre><p>当然你需要根据你实际情况替换路径和文件名。上面的命令写一个空输出到该文件。用更简单的话说它会清空文件而不会导致你的系统产生大的 I/O 消耗。</p><h3 id="_10-在多个-linux-服务器上运行相同命令" tabindex="-1">10. 在多个 Linux 服务器上运行相同命令 <a class="header-anchor" href="#_10-在多个-linux-服务器上运行相同命令" aria-label="Permalink to “10. 在多个 Linux 服务器上运行相同命令”">​</a></h3>`,19)),e("p",null,[n[8]||(n[8]=t("最近我们的一个读者在 ",-1)),i(o,{href:"http://www.linuxsay.com/"},{default:r(()=>[...n[7]||(n[7]=[t("LinuxSay 论坛",-1)])]),_:1}),n[9]||(n[9]=t("提问说如何通过 ssh 在多个 Linux 服务器上执行一个命令。他机器的 IP 地址是：",-1))]),n[33]||(n[33]=e("pre",null,[e("code",null,`10.0.0.1
10.0.0.2
10.0.0.3
10.0.0.4
10.0.0.5
`)],-1)),n[34]||(n[34]=e("p",null,"这里有一个简单的解决方法。将服务器的 IP 地址写到文件 list.txt 中，像上面那样一行一个。然后运行：",-1)),n[35]||(n[35]=e("pre",null,[e("code",null,`# for in $i(cat list.txt); do ssh user@$i 'bash command'; done
`)],-1)),e("p",null,[n[11]||(n[11]=t("上面的命令中你需要用实际登录的用户替换 “user”，用你希望执行的实际命令替换 “bash command”。这个方法非常适用于通过",-1)),i(o,{href:"https://linux.cn/article-5202-1.html"},{default:r(()=>[...n[10]||(n[10]=[t("使用 SSH 密钥进行无密码验证",-1)])]),_:1}),n[12]||(n[12]=t("，因为这样你不需要每次都为用户输入密码。",-1))]),n[36]||(n[36]=e("p",null,"注意取决于你 Linux 系统的设置，你可能还需要传递一些额外的参数给 SSH 命令。",-1)),n[37]||(n[37]=e("h3",{id:"总结",tabindex:"-1"},[t("总结 "),e("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),n[38]||(n[38]=e("p",null,"上面的例子都很简单，我希望它们能帮助你发现 Linux 的优美之处，你如何能简单实现在其它操作系统上需要更多时间的不同操作。",-1)),n[39]||(n[39]=e("hr",null,null,-1)),e("p",null,[n[14]||(n[14]=t("via: ",-1)),i(o,{href:"http://www.tecmint.com/10-useful-linux-command-line-tricks-for-newbies/"},{default:r(()=>[...n[13]||(n[13]=[t("http://www.tecmint.com/10-useful-linux-command-line-tricks-for-newbies/",-1)])]),_:1})]),e("p",null,[n[18]||(n[18]=t("作者：",-1)),i(o,{href:"http://www.tecmint.com/author/marintodorov89/"},{default:r(()=>[...n[15]||(n[15]=[t("Marin Todorov",-1)])]),_:1}),n[19]||(n[19]=t(" 译者：",-1)),i(o,{href:"http://mutouxiaogui.cn/blog/"},{default:r(()=>[...n[16]||(n[16]=[t("ictlyh",-1)])]),_:1}),n[20]||(n[20]=t(" 校对：",-1)),i(o,{href:"https://github.com/wxy"},{default:r(()=>[...n[17]||(n[17]=[t("wxy",-1)])]),_:1})]),e("p",null,[n[23]||(n[23]=t("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...n[21]||(n[21]=[t("LCTT",-1)])]),_:1}),n[24]||(n[24]=t(" 原创编译，",-1)),i(o,{href:"https://linux.cn/"},{default:r(()=>[...n[22]||(n[22]=[t("Linux中国",-1)])]),_:1}),n[25]||(n[25]=t(" 荣誉推出",-1))])])}const b=p(m,[["render",u]]);export{T as __pageData,b as default};
