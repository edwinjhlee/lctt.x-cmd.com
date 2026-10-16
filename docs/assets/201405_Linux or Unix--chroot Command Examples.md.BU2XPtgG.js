import{_ as d,a0 as s,w as p,s as a,ao as e,I as i,x as l,a1 as n,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"Linux / Unix：chroot 命令实例讲解 | LCTT x X-CMD","titleTemplate":false,"description":"Linux / Unix：chroot 命令实例讲解 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux / Unix：chroot 命令实例讲解 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux / Unix：chroot 命令实例讲解 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/Linux or Unix--chroot Command Examples","title":"Linux / Unix：chroot 命令实例讲解","tag":"201405","desc":""},"relativePath":"201405/Linux or Unix--chroot Command Examples.md","filePath":"[post].md"}'),u={name:"201405/Linux or Unix--chroot Command Examples.md"};function b(x,o,h,m,f,w){const t=s("Link");return p(),a("div",null,[o[46]||(o[46]=e(`<h1 id="linux-unix-chroot-命令实例讲解" tabindex="-1">Linux / Unix：chroot 命令实例讲解 <a class="header-anchor" href="#linux-unix-chroot-命令实例讲解" aria-label="Permalink to “Linux / Unix：chroot 命令实例讲解”">​</a></h1><blockquote><p>我是一个刚接触 Linux 和 Unix 的新手。我该如何改变一个命令的根目录？我要怎样改变一个进程的根目录呢，比如用 chroot 命令将web服务与文件系统隔离？我要如何使用 chroot 恢复密码或修复基于 Linux/Unix的受损坏的环境？</p></blockquote><p><img src="http://s0.cyberciti.org/uploads/faq/2014/02/chroot-command.jpg" alt=""></p><p>在 Linux和类 Unix 系统下每一个进程/命令的当前工作目录称之为进程/命令的根目录（译注：译者以为此处有误，实际上没有进行过chroot的进程，其根目录是系统的根目录，而不是其工作目录）。你可以使用 chroot 命令改变一个命令的根目录，这最终将会改变当前运行的进程及其子进程的根目录。</p><p>如果一个进程/命令运行在一个不能访问外部根目录文件的已修改环境中。这种修改环境通常被称为&quot;监禁目录&quot;（jail）或是&quot;chroot 监禁&quot;。只有特权进程和根用户才能使用 chroot 命令。然而这通常是很有用的：</p><ol><li>将特权分配给无特权的进程，例如 Web 服务或 DNS 服务。</li><li>建立测试环境。</li><li>不使程序或系统崩溃下，运行旧程序或 ABI 兼容的程序。</li><li>系统恢复。</li><li>重新安装引导装载程序，例如 Grub 或 Lilo。</li><li>密码找回，重置一个已丢失的密码等。</li></ol><h3 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to “用途”">​</a></h3><blockquote><p>chroot 命令 <strong>改变其当前目录，并将根目录变为指定目录,然后如果提供了命令则运行命令</strong>，也可以运行一个用户的交互式shell的副本（译注：即bash等。）。请注意并不是每一个程序都可以使用 chroot 命令。</p></blockquote><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h3><p>基本语法如下：</p><pre><code>chroot /path/to/new/root command
</code></pre><p>或者</p><pre><code>chroot /path/to/new/root /path/to/server
</code></pre><p>或者</p><pre><code>chroot [options] /path/to/new/root /path/to/server
</code></pre><h4 id="chroot-命令实例" tabindex="-1">chroot 命令实例 <a class="header-anchor" href="#chroot-命令实例" aria-label="Permalink to “chroot 命令实例”">​</a></h4><p>在这个例子中，建立了一个&quot;迷你监狱&quot;用来测试一个只有 ls 命令的 Bash shell。首先用 mkdir 命令设定好 jail &quot;监狱&quot; 路径。</p><pre><code>$ J=$HOME/jail
</code></pre><p>在 $J 内创建目录：</p><pre><code>$ mkdir -p $J
$ mkdir -p $J/{bin,lib64,lib}
$ cd $J
</code></pre>`,20)),i("p",null,[o[1]||(o[1]=l("用",-1)),n(t,{href:"http://www.cyberciti.biz/faq/cp-copy-command-in-unix-examples/"},{default:r(()=>[...o[0]||(o[0]=[l("cp 命令",-1)])]),_:1}),o[2]||(o[2]=l("将/bin/bash 和 /bin/ls 复制到 $J/bin/ 路径下：",-1))]),o[47]||(o[47]=e(`<pre><code>$ cp -v /bin/{bash,ls} $J/bin
</code></pre><p>将所需库文件拷贝到$J。可以用 ldd 命令找到 bash 所依赖的共享库。</p><pre><code>$ ldd /bin/bash
</code></pre><p>输出样例：</p><pre><code>linux-vdso.so.1 =&gt;  (0x00007fff8d987000)
libtinfo.so.5 =&gt; /lib64/libtinfo.so.5 (0x00000032f7a00000)
libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00000032f6e00000)
libc.so.6 =&gt; /lib64/libc.so.6 (0x00000032f7200000)
/lib64/ld-linux-x86-64.so.2 (0x00000032f6a00000)
</code></pre><p>直接拷贝上面输出中的库文件到 $J 目录：</p><pre><code>$ cp -v /lib64/libtinfo.so.5 /lib64/libdl.so.2 /lib64/libc.so.6 /lib64/ld-linux-x86-64.so.2 $J/lib64/
</code></pre><p>输出样例：</p><pre><code>\`/lib64/libtinfo.so.5&#39; -&gt; \`/home/vivek/jail/lib64/libtinfo.so.5&#39;
\`/lib64/libdl.so.2&#39; -&gt; \`/home/vivek/jail/lib64/libdl.so.2&#39;
\`/lib64/libc.so.6&#39; -&gt; \`/home/vivek/jail/lib64/libc.so.6&#39;
\`/lib64/ld-linux-x86-64.so.2&#39; -&gt; \`/home/vivek/jail/lib64/ld-linux-x86-64.so.2&#39;
</code></pre><p>复制 ls 命令所需的库文件到 $J 目录下。用 ldd 命令打印出 ls 命令依赖的共享库：</p><pre><code>$ ldd /bin/ls
</code></pre><p>输出样例：</p><pre><code>linux-vdso.so.1 =&gt;  (0x00007fff68dff000)
libselinux.so.1 =&gt; /lib64/libselinux.so.1 (0x00000032f8a00000)
librt.so.1 =&gt; /lib64/librt.so.1 (0x00000032f7a00000)
libcap.so.2 =&gt; /lib64/libcap.so.2 (0x00000032fda00000)
libacl.so.1 =&gt; /lib64/libacl.so.1 (0x00000032fbe00000)
libc.so.6 =&gt; /lib64/libc.so.6 (0x00000032f7200000)
libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00000032f6e00000)
/lib64/ld-linux-x86-64.so.2 (0x00000032f6a00000)
libpthread.so.0 =&gt; /lib64/libpthread.so.0 (0x00000032f7600000)
libattr.so.1 =&gt; /lib64/libattr.so.1 (0x00000032f9600000)
</code></pre>`,13)),i("p",null,[o[4]||(o[4]=l("你可以一个个的复制库文件，为了更高效的作业，我们也可以使用",-1)),n(t,{href:"http://www.cyberciti.biz/faq/bash-for-loop/"},{default:r(()=>[...o[3]||(o[3]=[l("bash shell 的循环指令",-1)])]),_:1}),o[5]||(o[5]=l("实现：",-1))]),o[48]||(o[48]=e("<pre><code>list=&quot;$(ldd /bin/ls | egrep -o &#39;/lib.*\\.[0-9]&#39;)&quot;\nfor i in $list; do cp  -v &quot;$i&quot; &quot;${J}${i}&quot;; done\n</code></pre><p>输出样例：</p><pre><code>`/lib64/libselinux.so.1&#39; -&gt; `/home/vivek/jail/lib64/libselinux.so.1&#39;\n`/lib64/librt.so.1&#39; -&gt; `/home/vivek/jail/lib64/librt.so.1&#39;\n`/lib64/libcap.so.2&#39; -&gt; `/home/vivek/jail/lib64/libcap.so.2&#39;\n`/lib64/libacl.so.1&#39; -&gt; `/home/vivek/jail/lib64/libacl.so.1&#39;\n`/lib64/libc.so.6&#39; -&gt; `/home/vivek/jail/lib64/libc.so.6&#39;\n`/lib64/libdl.so.2&#39; -&gt; `/home/vivek/jail/lib64/libdl.so.2&#39;\n`/lib64/ld-linux-x86-64.so.2&#39; -&gt; `/home/vivek/jail/lib64/ld-linux-x86-64.so.2&#39;\n`/lib64/libpthread.so.0&#39; -&gt; `/home/vivek/jail/lib64/libpthread.so.0&#39;\n`/lib64/libattr.so.1&#39; -&gt; `/home/vivek/jail/lib64/libattr.so.1&#39;\n</code></pre><p>最后，chroot 到你的新jail：</p><pre><code>$ sudo chroot $J /bin/bash\n</code></pre><p>尝试浏览一下 /etc 或 /var：</p><pre><code># ls /\n# ls /etc/\n# ls /var/\n</code></pre><p>改变了根目录的 bash 和 ls 程序现在被监禁在$HOME/$J这个特殊目录中，而且不能再访问外部的目录树，这个目录可以看做是它们的&quot;/&quot;(root)目录。如果配置正确的话,这会极大增强安全性。我通常用这种技术锁定以下的应用程序。</p>",8)),i("ol",null,[i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/chroot-apache-under-rhel-fedora-centos-linux.html"},{default:r(()=>[...o[6]||(o[6]=[l("Apache - Red Hat / CentOS: Chroot Apache 2 Web Server",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/faq/howto-run-nginx-in-a-chroot-jail/"},{default:r(()=>[...o[7]||(o[7]=[l("Nginx - Linux nginx: Chroot (Jail) Setup",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/howto-setup-lighttpd-php-mysql-chrooted-jail.html"},{default:r(()=>[...o[8]||(o[8]=[l("Chroot Lighttpd web server on a Linux based system",-1)])]),_:1})]),o[9]||(o[9]=i("li",null,"Chroot mail server.",-1)),o[10]||(o[10]=i("li",null,"Chroot Bind DNS server 等等",-1))]),o[49]||(o[49]=i("h3",{id:"如何退出-chroot-监禁呢",tabindex:"-1"},[l("如何退出 chroot 监禁呢？ "),i("a",{class:"header-anchor",href:"#如何退出-chroot-监禁呢","aria-label":"Permalink to “如何退出 chroot 监禁呢？”"},"​")],-1)),o[50]||(o[50]=i("p",null,"键入 exit 即可",-1)),o[51]||(o[51]=i("pre",null,[i("code",null,`$ exit
`)],-1)),o[52]||(o[52]=i("p",null,"上述会话样例如下：",-1)),i("p",null,[n(t,{href:"http://www.cyberciti.biz/faq/?attachment_id=28148"},{default:r(()=>[...o[11]||(o[11]=[i("img",{src:"http://s0.cyberciti.org/uploads/faq/2013/01/bash-chroot-ls-demo.gif",alt:"Animated gif 01: Linux / Unix: Bash Chroot ls Command Demo"},null,-1)])]),_:1})]),o[53]||(o[53]=e(`<p>Gif 动画01: Linux / Unix: Bash Chroot ls 命令演示</p><h3 id="查找服务是否存在于-chrooted-监禁内" tabindex="-1">查找服务是否存在于 chrooted 监禁内### <a class="header-anchor" href="#查找服务是否存在于-chrooted-监禁内" aria-label="Permalink to “查找服务是否存在于 chrooted 监禁内###”">​</a></h3><p>你可以用下面两个命令[轻松的找出 Postfix 邮件服务是否已经 chrooted]：</p><pre><code>pid=$(pidof -s master)
ls -ld /proc/$pid/root
</code></pre><p>从基本Linux服务中输出样例：</p><pre><code>lrwxrwxrwx. 1 root root 0 Mar  9 11:16 /proc/8613/root -&gt; /
</code></pre><p>PID 8613 指向了 / (root) 也就是说这个程序的根目录并没有被改变或是被 chroot。这个方法非常的快速而又直接，不需要打开配置文件。下面是从已经 chroot 的 ngnix 服务中得到的另一个例子：</p><pre><code>pid=$(pidof -s master)
ls -ld /proc/$pid/root
</code></pre><p>输出样例：</p><pre><code>lrwxrwxrwx 1 nginx nginx 0 Mar  9 11:17 /proc/4233/root -&gt; /nginxjail
</code></pre><p>程序的根目录已经改为 /nginxjail。</p><h3 id="用-chroot-救援和修复软件raid-磁盘阵列-系统" tabindex="-1">用 chroot 救援和修复软件RAID(磁盘阵列)系统 <a class="header-anchor" href="#用-chroot-救援和修复软件raid-磁盘阵列-系统" aria-label="Permalink to “用 chroot 救援和修复软件RAID(磁盘阵列)系统”">​</a></h3>`,12)),i("p",null,[o[13]||(o[13]=l("我先假设基于软RAID的 Linux 系统无法正常启动。所以你",-1)),n(t,{href:"http://www.cyberciti.biz/faq/centos-rhel-linux-mount-raid-hard-disk-from-livecd/"},{default:r(()=>[...o[12]||(o[12]=[l("需要用Live CD或用基于网络的内核应急模式",-1)])]),_:1}),o[14]||(o[14]=l("来修复系统。在这个例子中，我用了 Live Linux DVD/CD 启动一个基于 RHEL 的系统，然后再 chroot 到 /dev/sda1 和 /或 /dev/md0 修复问题：",-1))]),o[54]||(o[54]=i("pre",null,[i("code",null,`## 在 Live CD 的提示符下，键入以下命令来恢复数据。##
## /dev/sda1 系统主分区##
# 建立 jail 目录
d=/chroot
mkdir $d

# 挂载 sda1 和其他所需目录
mount /dev/sda1 $d
mount -o bind /dev $d/dev
mount -o bind /sys $d/sys
mount -o bind /dev/shm $d/dev/shm
mount -o bind /proc $d/proc

# 挂载软件RAID /dev/md0
mount /dev/md0 $d/data

# Chroot 到我们新建的 jail 中。这将允许我们修复引导装载系统(bootloader)，或者在所有文件被/dev/null吞噬之前抓取数据。
chroot $d

#你能看见吗？
ls
df

# 将文件置入安全路径
rsync -avr /path/to/my_precious_data_dir user@safe.location.cyberciti.biz:/path/to/dest

# 退出 jail ,然后重启或者根据个人所需格式化服务 ;)
exit
umount {dev,sys,[...],}
reboot
`)],-1)),o[55]||(o[55]=i("p",null,[i("strong",null,"别急，还有更精彩的内容！")],-1)),o[56]||(o[56]=i("p",null,"查看nixCraft下所有其他有关 chroot 命令的文章：",-1)),i("ol",null,[i("li",null,[n(t,{href:"http://www.cyberciti.biz/faq/ubuntu-mounting-your-encrypted-home-from-livecd/"},{default:r(()=>[...o[15]||(o[15]=[l("Ubuntu: Mount Encrypted Home Directory (~/.private) From an Ubuntu Live CD",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/howto-linux-unix-rssh-chroot-jail-setup.html"},{default:r(()=>[...o[16]||(o[16]=[l("Linux Configure rssh Chroot Jail To Lock Users To Their Home Directories Only",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/howto-fix-dual-boot-windows-vista-linux.html"},{default:r(()=>[...o[17]||(o[17]=[l("Fix a dual boot MS-Windows XP/Vista/7/Server and Linux problem",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/restore-debian-linux-grub-boot-loader.html"},{default:r(()=>[...o[18]||(o[18]=[l("Restore Debian Linux Grub boot loader",-1)])]),_:1})])]),o[57]||(o[57]=i("h3",{id:"在-linux-和-类unix-系统下-chroot-应用程序的注意事项",tabindex:"-1"},[l("在 Linux 和 类Unix 系统下 chroot 应用程序的注意事项 "),i("a",{class:"header-anchor",href:"#在-linux-和-类unix-系统下-chroot-应用程序的注意事项","aria-label":"Permalink to “在 Linux 和 类Unix 系统下 chroot 应用程序的注意事项”"},"​")],-1)),o[58]||(o[58]=i("p",null,"你应该在各种情况下都用 chroot 特性吗？从上面的例子看出，这个程序是相当简单的，但是最终可能出现几种不同的问题而结束，例如：",-1)),i("p",null,[o[21]||(o[21]=l("1.在 jail 中缺失库文件可能直接导致 jail 崩溃。 1.一些复杂的程序不好被 chroot。所以我建议你要么尝试",-1)),n(t,{href:"http://www.cyberciti.biz/faq/how-to-upgrade-freebsd-jail-vps/"},{default:r(()=>[...o[19]||(o[19]=[l("真正的jail，例如FreeBSD提供的",-1)])]),_:1}),o[22]||(o[22]=l("，要么用虚拟化解决，比如",-1)),n(t,{href:"http://www.cyberciti.biz/faq/kvm-virtualization-in-redhat-centos-scientific-linux-6/"},{default:r(()=>[...o[20]||(o[20]=[l("Linux 下的 KVM",-1)])]),_:1}),o[23]||(o[23]=l('。 1.正在运行某一程序的 jail 不能再运行其他程序，不能更改任何文件，也不能"假设"另一个用户的身份。放宽这些限制，会降低你的安全性，请根据具体情况 chroot。',-1))]),o[59]||(o[59]=i("p",null,"还要注意：",-1)),i("ol",null,[o[26]||(o[26]=i("li",null,"当你升级本地程序时，不要忘记升级已 chroot 的程序。",-1)),o[27]||(o[27]=i("li",null,"并非所有程序能够或者应该被 chroot。",-1)),o[28]||(o[28]=i("li",null,"任何需要 root 权限操作的程序，对其 chroot 是没意义的。因为通常 root 用户都能脱离 chroot。",-1)),i("li",null,[o[25]||(o[25]=l("Chroot 并不一个高招。更多的可以学习",-1)),n(t,{href:"http://www.cyberciti.biz/tips/linux-security.html"},{default:r(()=>[...o[24]||(o[24]=[l("如何保护和加强系统的各个部分",-1)])]),_:1})])]),o[60]||(o[60]=i("h3",{id:"choort-部分命令选项",tabindex:"-1"},[l("choort 部分命令选项 "),i("a",{class:"header-anchor",href:"#choort-部分命令选项","aria-label":"Permalink to “choort 部分命令选项”"},"​")],-1)),i("p",null,[o[30]||(o[30]=l("取自 man 帮助页面",-1)),n(t,{href:"http://www.manpager.com/linux/man8/chroot.8.html"},{default:r(()=>[...o[29]||(o[29]=[l("chroot(8)",-1)])]),_:1}),o[31]||(o[31]=l(":",-1))]),o[61]||(o[61]=i("pre",null,[i("code",null,`  --userspec=USER:GROUP  使用指定的 用户 和 组 (ID 或 名称)
  --groups=G_LIST        指定补充组 g1,g2,..,gN 
      --help     显示帮助并退出
      --version  显示版本信息并退出
`)],-1)),o[62]||(o[62]=i("h3",{id:"参见",tabindex:"-1"},[l("参见 "),i("a",{class:"header-anchor",href:"#参见","aria-label":"Permalink to “参见”"},"​")],-1)),i("ul",null,[i("li",null,[n(t,{href:"http://www.manpager.com/linux/man8/chroot.8.html"},{default:r(()=>[...o[32]||(o[32]=[l("chroot(8) Linux/Unix 命令 man 页面",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.manpager.com/linux/man2/chroot.2.html"},{default:r(()=>[...o[33]||(o[33]=[l("Man页面 chroot(2)",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.openbsd.org/faq/"},{default:r(()=>[...o[34]||(o[34]=[l("OpenBSD文档参见Apache chrooting FAQ 提取更多信息",-1)])]),_:1})])]),o[63]||(o[63]=i("hr",null,null,-1)),i("p",null,[o[36]||(o[36]=l("via: ",-1)),n(t,{href:"http://www.cyberciti.biz/faq/unix-linux-chroot-command-examples-usage-syntax/"},{default:r(()=>[...o[35]||(o[35]=[l("http://www.cyberciti.biz/faq/unix-linux-chroot-command-examples-usage-syntax/",-1)])]),_:1})]),i("p",null,[o[39]||(o[39]=l("译者：",-1)),n(t,{href:"https://github.com/Luoxcat"},{default:r(()=>[...o[37]||(o[37]=[l("Luoxcat",-1)])]),_:1}),o[40]||(o[40]=l(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:r(()=>[...o[38]||(o[38]=[l("wxy",-1)])]),_:1})]),i("p",null,[o[43]||(o[43]=l("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[41]||(o[41]=[l("LCTT",-1)])]),_:1}),o[44]||(o[44]=l(" 原创翻译，",-1)),n(t,{href:"http://linux.cn/"},{default:r(()=>[...o[42]||(o[42]=[l("Linux中国",-1)])]),_:1}),o[45]||(o[45]=l(" 荣誉推出",-1))])])}const C=d(u,[["render",b]]);export{L as __pageData,C as default};
