import{_ as s,a0 as l,w as a,s as p,I as t,x as n,a1 as r,A as o,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Linux 面试基础问题 - 2 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 面试基础问题 - 2 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 面试基础问题 - 2 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 面试基础问题 - 2 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Basic Linux Interview Questions and Answers – Part II","title":"Linux 面试基础问题 - 2","tag":"201312","desc":""},"relativePath":"201312/Basic Linux Interview Questions and Answers – Part II.md","filePath":"[post].md"}'),u={name:"201312/Basic Linux Interview Questions and Answers – Part II.md"};function c(m,e,x,b,h,f){const i=l("Link");return a(),p("div",null,[e[14]||(e[14]=t("h1",{id:"linux-面试基础问题-2",tabindex:"-1"},[n("Linux 面试基础问题 - 2 "),t("a",{class:"header-anchor",href:"#linux-面试基础问题-2","aria-label":"Permalink to “Linux 面试基础问题 - 2”"},"​")],-1)),e[15]||(e[15]=t("p",null,"继续我们这面试系列，在这篇文章里我们给出了10个问题。这些问题或者是在以后的文章中出现的问题不一定在面试中会被问到。然而通过这些文章我们呈现出的是一个交互的学习平台，这必将会对你有很大的帮助。",-1)),e[16]||(e[16]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/11/Basic-Interview-Questions-2.png",alt:""})],-1)),t("p",null,[e[1]||(e[1]=n("自本系列的上一篇文章",-1)),r(i,{href:"http://linux.cn/article-2315-1.html"},{default:o(()=>[...e[0]||(e[0]=[n("11个基本的 Linux 面试问题",-1)])]),_:1}),e[2]||(e[2]=n("，我们分析了不同论坛对此作出的评论，这对我们将更好的文章提供给我们的读者是很重要的。我们付出了时间和金钱，那我们又渴望从你们身上得到什么回报呢？答案是没有的。如果你不能赞扬我们的工作，但恳请不要在评论中诋毁我们的工作。",-1))]),e[17]||(e[17]=d(`<p>如果你在文章中没有找到什么新的东西，但也请不要忘记它对某些人却是非常有用的，并且他或她会非常感激我们的工作。我们不能够让每一篇文章都使大家高兴。但我希望读者们能够尽量理解。</p><h3 id="q-1-哪一条命令用于把用户登录会话记录在文件中" tabindex="-1">Q.1：哪一条命令用于把用户登录会话记录在文件中？ <a class="header-anchor" href="#q-1-哪一条命令用于把用户登录会话记录在文件中" aria-label="Permalink to “Q.1：哪一条命令用于把用户登录会话记录在文件中？”">​</a></h3><ul><li>macro</li><li>read</li><li>script</li><li>record</li><li>sessionrecord</li></ul><blockquote><p><strong>答</strong>：‘script’ 命令是用来把用户登录的会话信息记录在文件里。这条命令能够用在 shell 脚本里面，或者直接在终端中使用。下面是一个例子，它记录了开始用 script 到输入 exit 结束之间的所有东西。</p></blockquote><p>如下命令记录用户登录会话到一个文件中：</p><pre><code>[root@tecmint ~]# script my-session-record.txt

Script started, file is my-session-record.txt
</code></pre><p>记录的文件“my-session-record.txt”可以通过下述方式查看：</p><pre><code>[root@tecmint ~]# nano my-session-record.txt

script started on Friday 22 November 2013 08:19:01 PM IST
[root@tecmint ~]# ls
^[[0m^[[01;34mBinary^[[0m ^[[01;34mDocuments^[[0m ^[[01;34mMusic^[[0m $
^[[01;34mDesktop^[[0m ^[[01;34mDownloads^[[0m my-session-record.txt ^[[01;34$
</code></pre><h3 id="q-2-以下那一条命令可以用来查看内核日志信息" tabindex="-1">Q.2：以下那一条命令可以用来查看内核日志信息 <a class="header-anchor" href="#q-2-以下那一条命令可以用来查看内核日志信息" aria-label="Permalink to “Q.2：以下那一条命令可以用来查看内核日志信息”">​</a></h3><ul><li>dmesg</li><li>kernel</li><li>ls -i</li><li>uname</li><li>以上全不是</li></ul><blockquote><p><strong>答</strong>：执行 &#39;dmesg&#39; 命令可以查看内核的日志信息。在上面的命令中，kernel 不是一个有效的命令，&#39;ls -i&#39; 是用来列出工作目录中文件的索引节点，而 &#39;uname&#39; 是用来显示操作系统信息的。</p></blockquote><pre><code>[root@tecmint ~]# dmesg

Initializing cgroup subsys cpuset
Initializing cgroup subsys cpu
Linux version 2.6.32-279.el6.i686 (mockbuild@c6b9.bsys.dev.centos.org) (gcc version 4.4.6 20120305 (Red Hat 4.4.6-4) (GCC) ) #1 SMP Fri Jun 22 10:59:55 UTC 2012
KERNEL supported cpus:
  Intel GenuineIntel
  AMD AuthenticAMD
  NSC Geode by NSC
  Cyrix CyrixInstead
  Centaur CentaurHauls
  Transmeta GenuineTMx86
  Transmeta TransmetaCPU
  UMC UMC UMC UMC
Disabled fast string operations
BIOS-provided physical RAM map:
...
</code></pre><h3 id="q-3-哪一条命令是用来显示-linux-内核发行信息的" tabindex="-1">Q.3：哪一条命令是用来显示 Linux 内核发行信息的？ <a class="header-anchor" href="#q-3-哪一条命令是用来显示-linux-内核发行信息的" aria-label="Permalink to “Q.3：哪一条命令是用来显示 Linux 内核发行信息的？”">​</a></h3><ul><li>uname -v</li><li>uname -r</li><li>uname -m</li><li>uname -n</li><li>uname -o</li></ul><blockquote><p><strong>答</strong>：‘uname -r’是用来显示内核的发行信息。其它参数‘-v’、‘-m’、‘-n’、‘o’分别显示内核版本、机器硬件名称、网络节点、主机名和操作系统。</p></blockquote><pre><code>[root@tecmint ~]# uname -r

2.6.32-279.el6.i686
</code></pre><h3 id="q-4-那一条命令是被用来识别文件类型的" tabindex="-1">Q.4：那一条命令是被用来识别文件类型的？ <a class="header-anchor" href="#q-4-那一条命令是被用来识别文件类型的" aria-label="Permalink to “Q.4：那一条命令是被用来识别文件类型的？”">​</a></h3><ul><li>type</li><li>info</li><li>file</li><li>which</li><li>ls</li></ul><blockquote><p><strong>答</strong>：‘file’命令是用来识别文件类型的。其语法是‘file [选项] 文件名’。</p></blockquote><pre><code>[root@tecmint ~]# file wtop

wtop: POSIX shell script text executable
</code></pre><h3 id="q-5-哪一条命令是被用来找一条命令的二进制文件、源和手册的所在的路径" tabindex="-1">Q.5：哪一条命令是被用来找一条命令的二进制文件、源和手册的所在的路径？ <a class="header-anchor" href="#q-5-哪一条命令是被用来找一条命令的二进制文件、源和手册的所在的路径" aria-label="Permalink to “Q.5：哪一条命令是被用来找一条命令的二进制文件、源和手册的所在的路径？”">​</a></h3><blockquote><p><strong>答</strong>：‘whereis’驾到！‘whereis’命令是用来找一条命令的二进制文件、源和手册的所在的路径。</p></blockquote><pre><code>[root@tecmint ~]# whereis /usr/bin/ftp

ftp: /usr/bin/ftp /usr/share/man/man1/ftp.1.gz
</code></pre><h3 id="q-6-当用户登录时-默认情况下哪些文件会被调用作为用户配置" tabindex="-1">Q.6：当用户登录时，默认情况下哪些文件会被调用作为用户配置？ <a class="header-anchor" href="#q-6-当用户登录时-默认情况下哪些文件会被调用作为用户配置" aria-label="Permalink to “Q.6：当用户登录时，默认情况下哪些文件会被调用作为用户配置？”">​</a></h3><blockquote><p><strong>答</strong>：在用户的目录下‘.profile’和‘.bashrc’会默认地被调用作为用户配置。</p></blockquote><pre><code>[root@tecmint ~]# ls -al
-rw-r--r--.  1 tecmint     tecmint            176 May 11  2012 .bash_profile
-rw-r--r--.  1 tecmint     tecmint            124 May 11  2012 .bashrc
</code></pre><h3 id="q-7-resolve-conf-文件是什么的配置文件" tabindex="-1">Q.7：‘resolve.conf’文件是什么的配置文件？ <a class="header-anchor" href="#q-7-resolve-conf-文件是什么的配置文件" aria-label="Permalink to “Q.7：‘resolve.conf’文件是什么的配置文件？”">​</a></h3><blockquote><p><strong>答</strong>：‘/etc/resolve.conf’ 是 DNS 客户端的配置文件。</p></blockquote><pre><code>[root@tecmint ~]# cat /etc/resolv.conf

nameserver 172.16.16.94
</code></pre><h3 id="q-8-哪一条命令是用来创建一个文件的软链接的" tabindex="-1">Q.8：哪一条命令是用来创建一个文件的软链接的？ <a class="header-anchor" href="#q-8-哪一条命令是用来创建一个文件的软链接的" aria-label="Permalink to “Q.8：哪一条命令是用来创建一个文件的软链接的？”">​</a></h3><ul><li>ln</li><li>ln -s</li><li>link</li><li>link -soft</li><li>以上都不是</li></ul><blockquote><p><strong>答</strong>：在 Linux 环境下，‘ls -s’是被用来创建一个文件的软链接的。</p></blockquote><pre><code>[root@tecmint ~]# ln -s /etc/httpd/conf/httpd.conf httpd.original.conf
</code></pre><h3 id="q-9-在linux下-pwd-命令是-passwd-命令的别名吗" tabindex="-1">Q.9：在Linux下，‘pwd’命令是‘passwd’命令的别名吗？ <a class="header-anchor" href="#q-9-在linux下-pwd-命令是-passwd-命令的别名吗" aria-label="Permalink to “Q.9：在Linux下，‘pwd’命令是‘passwd’命令的别名吗？”">​</a></h3><blockquote><p><strong>答</strong>：不是！默认情况下‘pwd’命令不是‘passwd’命令的别名。‘pwd’是‘print working directory’（显示工作目录）的缩写，也就是输出当前的工作目录，而‘passwd’在 Linux 中是被用来更改用户的帐号密码。</p></blockquote><pre><code>[root@tecmint ~]# pwd

/home/tecmint

[root@tecmint ~]# passwd
Changing password for user root.
New password:
Retype new password:
</code></pre><h3 id="q-10-在-linux-中-你会怎样检测-pci-设备的厂商和版本。" tabindex="-1">Q.10：在 Linux 中，你会怎样检测 pci 设备的厂商和版本。 <a class="header-anchor" href="#q-10-在-linux-中-你会怎样检测-pci-设备的厂商和版本。" aria-label="Permalink to “Q.10：在 Linux 中，你会怎样检测 pci 设备的厂商和版本。”">​</a></h3><blockquote><p><strong>答</strong>：我们用的 Linux 命令是‘lspci’。</p></blockquote><pre><code>[root@tecmint ~]# lspci

00:00.0 Host bridge: Intel Corporation 5000P Chipset Memory Controller Hub (rev b1)
00:02.0 PCI bridge: Intel Corporation 5000 Series Chipset PCI Express x8 Port 2-3 (rev b1)
00:04.0 PCI bridge: Intel Corporation 5000 Series Chipset PCI Express x8 Port 4-5 (rev b1)
00:06.0 PCI bridge: Intel Corporation 5000 Series Chipset PCI Express x8 Port 6-7 (rev b1)
00:08.0 System peripheral: Intel Corporation 5000 Series Chipset DMA Engine (rev b1)
...
</code></pre><p>现在就到这里。我希望以上的问题也许对你很有用。在下星期我会再想出一些新的问题。到时请保持好的健康，继续关注我们并且与 Tecmint 保持联系喔！</p><hr>`,41)),t("p",null,[e[4]||(e[4]=n("via: ",-1)),r(i,{href:"http://www.tecmint.com/basic-linux-interview-questions-and-answers-part-ii/"},{default:o(()=>[...e[3]||(e[3]=[n("http://www.tecmint.com/basic-linux-interview-questions-and-answers-part-ii/",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=n("译者：",-1)),r(i,{href:"https://github.com/hyaocuk"},{default:o(()=>[...e[5]||(e[5]=[n("hyaocuk",-1)])]),_:1}),e[8]||(e[8]=n(" 校对：",-1)),r(i,{href:"https://github.com/wxy"},{default:o(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[11]||(e[11]=n("本文由 ",-1)),r(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原创翻译，",-1)),r(i,{href:"http://linux.cn/"},{default:o(()=>[...e[10]||(e[10]=[n("Linux中国",-1)])]),_:1}),e[13]||(e[13]=n(" 荣誉推出",-1))])])}const k=s(u,[["render",c]]);export{C as __pageData,k as default};
