import{_ as s,a0 as l,w as a,s as p,I as t,x as n,a1 as r,A as o,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Linux 面試基礎問題 - 2 | LCTT x X-CMD","titleTemplate":false,"description":"Linux 面試基礎問題 - 2 | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux 面試基礎問題 - 2 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux 面試基礎問題 - 2 | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Basic Linux Interview Questions and Answers – Part II","title":"Linux 面試基礎問題 - 2","tag":"201312","desc":""},"relativePath":"201312/Basic Linux Interview Questions and Answers – Part II.md","filePath":"[post].md"}'),u={name:"201312/Basic Linux Interview Questions and Answers – Part II.md"};function c(m,e,x,b,h,f){const i=l("Link");return a(),p("div",null,[e[14]||(e[14]=t("h1",{id:"linux-面試基礎問題-2",tabindex:"-1"},[n("Linux 面試基礎問題 - 2 "),t("a",{class:"header-anchor",href:"#linux-面試基礎問題-2","aria-label":"Permalink to “Linux 面試基礎問題 - 2”"},"​")],-1)),e[15]||(e[15]=t("p",null,"繼續我們這面試系列，在這篇文章裏我們給出了10個問題。這些問題或者是在以後的文章中出現的問題不一定在面試中會被問到。然而通過這些文章我們呈現出的是一個交互的學習平台，這必將會對你有很大的幫助。",-1)),e[16]||(e[16]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2013/11/Basic-Interview-Questions-2.png",alt:""})],-1)),t("p",null,[e[1]||(e[1]=n("自本系列的上一篇文章",-1)),r(i,{href:"http://linux.cn/article-2315-1.html"},{default:o(()=>[...e[0]||(e[0]=[n("11個基本的 Linux 面試問題",-1)])]),_:1}),e[2]||(e[2]=n("，我們分析了不同論壇對此作出的評論，這對我們將更好的文章提供給我們的讀者是很重要的。我們付出了時間和金錢，那我們又渴望從你們身上得到什麼回報呢？答案是沒有的。如果你不能讚揚我們的工作，但懇請不要在評論中詆譭我們的工作。",-1))]),e[17]||(e[17]=d(`<p>如果你在文章中沒有找到什麼新的東西，但也請不要忘記它對某些人卻是非常有用的，並且他或她會非常感激我們的工作。我們不能夠讓每一篇文章都使大家高興。但我希望讀者們能夠儘量理解。</p><h3 id="q-1-哪一條命令用於把用户登錄會話記錄在文件中" tabindex="-1">Q.1：哪一條命令用於把用户登錄會話記錄在文件中？ <a class="header-anchor" href="#q-1-哪一條命令用於把用户登錄會話記錄在文件中" aria-label="Permalink to “Q.1：哪一條命令用於把用户登錄會話記錄在文件中？”">​</a></h3><ul><li>macro</li><li>read</li><li>script</li><li>record</li><li>sessionrecord</li></ul><blockquote><p><strong>答</strong>：‘script’ 命令是用來把用户登錄的會話信息記錄在文件裏。這條命令能夠用在 shell 腳本里面，或者直接在終端中使用。下面是一個例子，它記錄了開始用 script 到輸入 exit 結束之間的所有東西。</p></blockquote><p>如下命令記錄用户登錄會話到一個文件中：</p><pre><code>[root@tecmint ~]# script my-session-record.txt

Script started, file is my-session-record.txt
</code></pre><p>記錄的文件“my-session-record.txt”可以通過下述方式查看：</p><pre><code>[root@tecmint ~]# nano my-session-record.txt

script started on Friday 22 November 2013 08:19:01 PM IST
[root@tecmint ~]# ls
^[[0m^[[01;34mBinary^[[0m ^[[01;34mDocuments^[[0m ^[[01;34mMusic^[[0m $
^[[01;34mDesktop^[[0m ^[[01;34mDownloads^[[0m my-session-record.txt ^[[01;34$
</code></pre><h3 id="q-2-以下那一條命令可以用來查看內核日誌信息" tabindex="-1">Q.2：以下那一條命令可以用來查看內核日誌信息 <a class="header-anchor" href="#q-2-以下那一條命令可以用來查看內核日誌信息" aria-label="Permalink to “Q.2：以下那一條命令可以用來查看內核日誌信息”">​</a></h3><ul><li>dmesg</li><li>kernel</li><li>ls -i</li><li>uname</li><li>以上全不是</li></ul><blockquote><p><strong>答</strong>：執行 &#39;dmesg&#39; 命令可以查看內核的日誌信息。在上面的命令中，kernel 不是一個有效的命令，&#39;ls -i&#39; 是用來列出工作目錄中文件的索引節點，而 &#39;uname&#39; 是用來顯示操作系統信息的。</p></blockquote><pre><code>[root@tecmint ~]# dmesg

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
</code></pre><h3 id="q-3-哪一條命令是用來顯示-linux-內核發行信息的" tabindex="-1">Q.3：哪一條命令是用來顯示 Linux 內核發行信息的？ <a class="header-anchor" href="#q-3-哪一條命令是用來顯示-linux-內核發行信息的" aria-label="Permalink to “Q.3：哪一條命令是用來顯示 Linux 內核發行信息的？”">​</a></h3><ul><li>uname -v</li><li>uname -r</li><li>uname -m</li><li>uname -n</li><li>uname -o</li></ul><blockquote><p><strong>答</strong>：‘uname -r’是用來顯示內核的發行信息。其它參數‘-v’、‘-m’、‘-n’、‘o’分別顯示內核版本、機器硬件名稱、網絡節點、主機名和操作系統。</p></blockquote><pre><code>[root@tecmint ~]# uname -r

2.6.32-279.el6.i686
</code></pre><h3 id="q-4-那一條命令是被用來識別文件類型的" tabindex="-1">Q.4：那一條命令是被用來識別文件類型的？ <a class="header-anchor" href="#q-4-那一條命令是被用來識別文件類型的" aria-label="Permalink to “Q.4：那一條命令是被用來識別文件類型的？”">​</a></h3><ul><li>type</li><li>info</li><li>file</li><li>which</li><li>ls</li></ul><blockquote><p><strong>答</strong>：‘file’命令是用來識別文件類型的。其語法是‘file [選項] 文件名’。</p></blockquote><pre><code>[root@tecmint ~]# file wtop

wtop: POSIX shell script text executable
</code></pre><h3 id="q-5-哪一條命令是被用來找一條命令的二進制文件、源和手冊的所在的路徑" tabindex="-1">Q.5：哪一條命令是被用來找一條命令的二進制文件、源和手冊的所在的路徑？ <a class="header-anchor" href="#q-5-哪一條命令是被用來找一條命令的二進制文件、源和手冊的所在的路徑" aria-label="Permalink to “Q.5：哪一條命令是被用來找一條命令的二進制文件、源和手冊的所在的路徑？”">​</a></h3><blockquote><p><strong>答</strong>：‘whereis’駕到！‘whereis’命令是用來找一條命令的二進制文件、源和手冊的所在的路徑。</p></blockquote><pre><code>[root@tecmint ~]# whereis /usr/bin/ftp

ftp: /usr/bin/ftp /usr/share/man/man1/ftp.1.gz
</code></pre><h3 id="q-6-當用户登錄時-默認情況下哪些文件會被調用作為用户配置" tabindex="-1">Q.6：當用户登錄時，默認情況下哪些文件會被調用作為用户配置？ <a class="header-anchor" href="#q-6-當用户登錄時-默認情況下哪些文件會被調用作為用户配置" aria-label="Permalink to “Q.6：當用户登錄時，默認情況下哪些文件會被調用作為用户配置？”">​</a></h3><blockquote><p><strong>答</strong>：在用户的目錄下‘.profile’和‘.bashrc’會默認地被調用作為用户配置。</p></blockquote><pre><code>[root@tecmint ~]# ls -al
-rw-r--r--.  1 tecmint     tecmint            176 May 11  2012 .bash_profile
-rw-r--r--.  1 tecmint     tecmint            124 May 11  2012 .bashrc
</code></pre><h3 id="q-7-resolve-conf-文件是什麼的配置文件" tabindex="-1">Q.7：‘resolve.conf’文件是什麼的配置文件？ <a class="header-anchor" href="#q-7-resolve-conf-文件是什麼的配置文件" aria-label="Permalink to “Q.7：‘resolve.conf’文件是什麼的配置文件？”">​</a></h3><blockquote><p><strong>答</strong>：‘/etc/resolve.conf’ 是 DNS 客户端的配置文件。</p></blockquote><pre><code>[root@tecmint ~]# cat /etc/resolv.conf

nameserver 172.16.16.94
</code></pre><h3 id="q-8-哪一條命令是用來創建一個文件的軟鏈接的" tabindex="-1">Q.8：哪一條命令是用來創建一個文件的軟鏈接的？ <a class="header-anchor" href="#q-8-哪一條命令是用來創建一個文件的軟鏈接的" aria-label="Permalink to “Q.8：哪一條命令是用來創建一個文件的軟鏈接的？”">​</a></h3><ul><li>ln</li><li>ln -s</li><li>link</li><li>link -soft</li><li>以上都不是</li></ul><blockquote><p><strong>答</strong>：在 Linux 環境下，‘ls -s’是被用來創建一個文件的軟鏈接的。</p></blockquote><pre><code>[root@tecmint ~]# ln -s /etc/httpd/conf/httpd.conf httpd.original.conf
</code></pre><h3 id="q-9-在linux下-pwd-命令是-passwd-命令的別名嗎" tabindex="-1">Q.9：在Linux下，‘pwd’命令是‘passwd’命令的別名嗎？ <a class="header-anchor" href="#q-9-在linux下-pwd-命令是-passwd-命令的別名嗎" aria-label="Permalink to “Q.9：在Linux下，‘pwd’命令是‘passwd’命令的別名嗎？”">​</a></h3><blockquote><p><strong>答</strong>：不是！默認情況下‘pwd’命令不是‘passwd’命令的別名。‘pwd’是‘print working directory’（顯示工作目錄）的縮寫，也就是輸出當前的工作目錄，而‘passwd’在 Linux 中是被用來更改用户的帳號密碼。</p></blockquote><pre><code>[root@tecmint ~]# pwd

/home/tecmint

[root@tecmint ~]# passwd
Changing password for user root.
New password:
Retype new password:
</code></pre><h3 id="q-10-在-linux-中-你會怎樣檢測-pci-設備的廠商和版本。" tabindex="-1">Q.10：在 Linux 中，你會怎樣檢測 pci 設備的廠商和版本。 <a class="header-anchor" href="#q-10-在-linux-中-你會怎樣檢測-pci-設備的廠商和版本。" aria-label="Permalink to “Q.10：在 Linux 中，你會怎樣檢測 pci 設備的廠商和版本。”">​</a></h3><blockquote><p><strong>答</strong>：我們用的 Linux 命令是‘lspci’。</p></blockquote><pre><code>[root@tecmint ~]# lspci

00:00.0 Host bridge: Intel Corporation 5000P Chipset Memory Controller Hub (rev b1)
00:02.0 PCI bridge: Intel Corporation 5000 Series Chipset PCI Express x8 Port 2-3 (rev b1)
00:04.0 PCI bridge: Intel Corporation 5000 Series Chipset PCI Express x8 Port 4-5 (rev b1)
00:06.0 PCI bridge: Intel Corporation 5000 Series Chipset PCI Express x8 Port 6-7 (rev b1)
00:08.0 System peripheral: Intel Corporation 5000 Series Chipset DMA Engine (rev b1)
...
</code></pre><p>現在就到這裏。我希望以上的問題也許對你很有用。在下星期我會再想出一些新的問題。到時請保持好的健康，繼續關注我們並且與 Tecmint 保持聯繫喔！</p><hr>`,41)),t("p",null,[e[4]||(e[4]=n("via: ",-1)),r(i,{href:"http://www.tecmint.com/basic-linux-interview-questions-and-answers-part-ii/"},{default:o(()=>[...e[3]||(e[3]=[n("http://www.tecmint.com/basic-linux-interview-questions-and-answers-part-ii/",-1)])]),_:1})]),t("p",null,[e[7]||(e[7]=n("譯者：",-1)),r(i,{href:"https://github.com/hyaocuk"},{default:o(()=>[...e[5]||(e[5]=[n("hyaocuk",-1)])]),_:1}),e[8]||(e[8]=n(" 校對：",-1)),r(i,{href:"https://github.com/wxy"},{default:o(()=>[...e[6]||(e[6]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[11]||(e[11]=n("本文由 ",-1)),r(i,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[9]||(e[9]=[n("LCTT",-1)])]),_:1}),e[12]||(e[12]=n(" 原創翻譯，",-1)),r(i,{href:"http://linux.cn/"},{default:o(()=>[...e[10]||(e[10]=[n("Linux中國",-1)])]),_:1}),e[13]||(e[13]=n(" 榮譽推出",-1))])])}const k=s(u,[["render",c]]);export{C as __pageData,k as default};
