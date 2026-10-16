import{_ as d,a0 as s,w as p,s as a,ao as e,I as i,x as l,a1 as n,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"Linux / Unix：chroot 命令實例講解 | LCTT x X-CMD","titleTemplate":false,"description":"Linux / Unix：chroot 命令實例講解 | LCTT (201405) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Linux / Unix：chroot 命令實例講解 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Linux / Unix：chroot 命令實例講解 | LCTT (201405) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201405/Linux or Unix--chroot Command Examples","title":"Linux / Unix：chroot 命令實例講解","tag":"201405","desc":""},"relativePath":"201405/Linux or Unix--chroot Command Examples.md","filePath":"[post].md"}'),u={name:"201405/Linux or Unix--chroot Command Examples.md"};function b(x,o,h,m,f,w){const t=s("Link");return p(),a("div",null,[o[46]||(o[46]=e(`<h1 id="linux-unix-chroot-命令實例講解" tabindex="-1">Linux / Unix：chroot 命令實例講解 <a class="header-anchor" href="#linux-unix-chroot-命令實例講解" aria-label="Permalink to “Linux / Unix：chroot 命令實例講解”">​</a></h1><blockquote><p>我是一個剛接觸 Linux 和 Unix 的新手。我該如何改變一個命令的根目錄？我要怎樣改變一個進程的根目錄呢，比如用 chroot 命令將web服務與文件系統隔離？我要如何使用 chroot 恢復密碼或修復基於 Linux/Unix的受損壞的環境？</p></blockquote><p><img src="http://s0.cyberciti.org/uploads/faq/2014/02/chroot-command.jpg" alt=""></p><p>在 Linux和類 Unix 系統下每一個進程/命令的當前工作目錄稱之為進程/命令的根目錄（譯註：譯者以為此處有誤，實際上沒有進行過chroot的進程，其根目錄是系統的根目錄，而不是其工作目錄）。你可以使用 chroot 命令改變一個命令的根目錄，這最終將會改變當前運行的進程及其子進程的根目錄。</p><p>如果一個進程/命令運行在一個不能訪問外部根目錄文件的已修改環境中。這種修改環境通常被稱為&quot;監禁目錄&quot;（jail）或是&quot;chroot 監禁&quot;。只有特權進程和根用户才能使用 chroot 命令。然而這通常是很有用的：</p><ol><li>將特權分配給無特權的進程，例如 Web 服務或 DNS 服務。</li><li>建立測試環境。</li><li>不使程序或系統崩潰下，運行舊程序或 ABI 兼容的程序。</li><li>系統恢復。</li><li>重新安裝引導裝載程序，例如 Grub 或 Lilo。</li><li>密碼找回，重置一個已丟失的密碼等。</li></ol><h3 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to “用途”">​</a></h3><blockquote><p>chroot 命令 <strong>改變其當前目錄，並將根目錄變為指定目錄,然後如果提供了命令則運行命令</strong>，也可以運行一個用户的交互式shell的副本（譯註：即bash等。）。請注意並不是每一個程序都可以使用 chroot 命令。</p></blockquote><h3 id="語法" tabindex="-1">語法 <a class="header-anchor" href="#語法" aria-label="Permalink to “語法”">​</a></h3><p>基本語法如下：</p><pre><code>chroot /path/to/new/root command
</code></pre><p>或者</p><pre><code>chroot /path/to/new/root /path/to/server
</code></pre><p>或者</p><pre><code>chroot [options] /path/to/new/root /path/to/server
</code></pre><h4 id="chroot-命令實例" tabindex="-1">chroot 命令實例 <a class="header-anchor" href="#chroot-命令實例" aria-label="Permalink to “chroot 命令實例”">​</a></h4><p>在這個例子中，建立了一個&quot;迷你監獄&quot;用來測試一個只有 ls 命令的 Bash shell。首先用 mkdir 命令設定好 jail &quot;監獄&quot; 路徑。</p><pre><code>$ J=$HOME/jail
</code></pre><p>在 $J 內創建目錄：</p><pre><code>$ mkdir -p $J
$ mkdir -p $J/{bin,lib64,lib}
$ cd $J
</code></pre>`,20)),i("p",null,[o[1]||(o[1]=l("用",-1)),n(t,{href:"http://www.cyberciti.biz/faq/cp-copy-command-in-unix-examples/"},{default:r(()=>[...o[0]||(o[0]=[l("cp 命令",-1)])]),_:1}),o[2]||(o[2]=l("將/bin/bash 和 /bin/ls 複製到 $J/bin/ 路徑下：",-1))]),o[47]||(o[47]=e(`<pre><code>$ cp -v /bin/{bash,ls} $J/bin
</code></pre><p>將所需庫文件拷貝到$J。可以用 ldd 命令找到 bash 所依賴的共享庫。</p><pre><code>$ ldd /bin/bash
</code></pre><p>輸出樣例：</p><pre><code>linux-vdso.so.1 =&gt;  (0x00007fff8d987000)
libtinfo.so.5 =&gt; /lib64/libtinfo.so.5 (0x00000032f7a00000)
libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00000032f6e00000)
libc.so.6 =&gt; /lib64/libc.so.6 (0x00000032f7200000)
/lib64/ld-linux-x86-64.so.2 (0x00000032f6a00000)
</code></pre><p>直接拷貝上面輸出中的庫文件到 $J 目錄：</p><pre><code>$ cp -v /lib64/libtinfo.so.5 /lib64/libdl.so.2 /lib64/libc.so.6 /lib64/ld-linux-x86-64.so.2 $J/lib64/
</code></pre><p>輸出樣例：</p><pre><code>\`/lib64/libtinfo.so.5&#39; -&gt; \`/home/vivek/jail/lib64/libtinfo.so.5&#39;
\`/lib64/libdl.so.2&#39; -&gt; \`/home/vivek/jail/lib64/libdl.so.2&#39;
\`/lib64/libc.so.6&#39; -&gt; \`/home/vivek/jail/lib64/libc.so.6&#39;
\`/lib64/ld-linux-x86-64.so.2&#39; -&gt; \`/home/vivek/jail/lib64/ld-linux-x86-64.so.2&#39;
</code></pre><p>複製 ls 命令所需的庫文件到 $J 目錄下。用 ldd 命令打印出 ls 命令依賴的共享庫：</p><pre><code>$ ldd /bin/ls
</code></pre><p>輸出樣例：</p><pre><code>linux-vdso.so.1 =&gt;  (0x00007fff68dff000)
libselinux.so.1 =&gt; /lib64/libselinux.so.1 (0x00000032f8a00000)
librt.so.1 =&gt; /lib64/librt.so.1 (0x00000032f7a00000)
libcap.so.2 =&gt; /lib64/libcap.so.2 (0x00000032fda00000)
libacl.so.1 =&gt; /lib64/libacl.so.1 (0x00000032fbe00000)
libc.so.6 =&gt; /lib64/libc.so.6 (0x00000032f7200000)
libdl.so.2 =&gt; /lib64/libdl.so.2 (0x00000032f6e00000)
/lib64/ld-linux-x86-64.so.2 (0x00000032f6a00000)
libpthread.so.0 =&gt; /lib64/libpthread.so.0 (0x00000032f7600000)
libattr.so.1 =&gt; /lib64/libattr.so.1 (0x00000032f9600000)
</code></pre>`,13)),i("p",null,[o[4]||(o[4]=l("你可以一個個的複製庫文件，為了更高效的作業，我們也可以使用",-1)),n(t,{href:"http://www.cyberciti.biz/faq/bash-for-loop/"},{default:r(()=>[...o[3]||(o[3]=[l("bash shell 的循環指令",-1)])]),_:1}),o[5]||(o[5]=l("實現：",-1))]),o[48]||(o[48]=e("<pre><code>list=&quot;$(ldd /bin/ls | egrep -o &#39;/lib.*\\.[0-9]&#39;)&quot;\nfor i in $list; do cp  -v &quot;$i&quot; &quot;${J}${i}&quot;; done\n</code></pre><p>輸出樣例：</p><pre><code>`/lib64/libselinux.so.1&#39; -&gt; `/home/vivek/jail/lib64/libselinux.so.1&#39;\n`/lib64/librt.so.1&#39; -&gt; `/home/vivek/jail/lib64/librt.so.1&#39;\n`/lib64/libcap.so.2&#39; -&gt; `/home/vivek/jail/lib64/libcap.so.2&#39;\n`/lib64/libacl.so.1&#39; -&gt; `/home/vivek/jail/lib64/libacl.so.1&#39;\n`/lib64/libc.so.6&#39; -&gt; `/home/vivek/jail/lib64/libc.so.6&#39;\n`/lib64/libdl.so.2&#39; -&gt; `/home/vivek/jail/lib64/libdl.so.2&#39;\n`/lib64/ld-linux-x86-64.so.2&#39; -&gt; `/home/vivek/jail/lib64/ld-linux-x86-64.so.2&#39;\n`/lib64/libpthread.so.0&#39; -&gt; `/home/vivek/jail/lib64/libpthread.so.0&#39;\n`/lib64/libattr.so.1&#39; -&gt; `/home/vivek/jail/lib64/libattr.so.1&#39;\n</code></pre><p>最後，chroot 到你的新jail：</p><pre><code>$ sudo chroot $J /bin/bash\n</code></pre><p>嘗試瀏覽一下 /etc 或 /var：</p><pre><code># ls /\n# ls /etc/\n# ls /var/\n</code></pre><p>改變了根目錄的 bash 和 ls 程序現在被監禁在$HOME/$J這個特殊目錄中，而且不能再訪問外部的目錄樹，這個目錄可以看做是它們的&quot;/&quot;(root)目錄。如果配置正確的話,這會極大增強安全性。我通常用這種技術鎖定以下的應用程序。</p>",8)),i("ol",null,[i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/chroot-apache-under-rhel-fedora-centos-linux.html"},{default:r(()=>[...o[6]||(o[6]=[l("Apache - Red Hat / CentOS: Chroot Apache 2 Web Server",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/faq/howto-run-nginx-in-a-chroot-jail/"},{default:r(()=>[...o[7]||(o[7]=[l("Nginx - Linux nginx: Chroot (Jail) Setup",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/howto-setup-lighttpd-php-mysql-chrooted-jail.html"},{default:r(()=>[...o[8]||(o[8]=[l("Chroot Lighttpd web server on a Linux based system",-1)])]),_:1})]),o[9]||(o[9]=i("li",null,"Chroot mail server.",-1)),o[10]||(o[10]=i("li",null,"Chroot Bind DNS server 等等",-1))]),o[49]||(o[49]=i("h3",{id:"如何退出-chroot-監禁呢",tabindex:"-1"},[l("如何退出 chroot 監禁呢？ "),i("a",{class:"header-anchor",href:"#如何退出-chroot-監禁呢","aria-label":"Permalink to “如何退出 chroot 監禁呢？”"},"​")],-1)),o[50]||(o[50]=i("p",null,"鍵入 exit 即可",-1)),o[51]||(o[51]=i("pre",null,[i("code",null,`$ exit
`)],-1)),o[52]||(o[52]=i("p",null,"上述會話樣例如下：",-1)),i("p",null,[n(t,{href:"http://www.cyberciti.biz/faq/?attachment_id=28148"},{default:r(()=>[...o[11]||(o[11]=[i("img",{src:"http://s0.cyberciti.org/uploads/faq/2013/01/bash-chroot-ls-demo.gif",alt:"Animated gif 01: Linux / Unix: Bash Chroot ls Command Demo"},null,-1)])]),_:1})]),o[53]||(o[53]=e(`<p>Gif 動畫01: Linux / Unix: Bash Chroot ls 命令演示</p><h3 id="查找服務是否存在於-chrooted-監禁內" tabindex="-1">查找服務是否存在於 chrooted 監禁內### <a class="header-anchor" href="#查找服務是否存在於-chrooted-監禁內" aria-label="Permalink to “查找服務是否存在於 chrooted 監禁內###”">​</a></h3><p>你可以用下面兩個命令[輕鬆的找出 Postfix 郵件服務是否已經 chrooted]：</p><pre><code>pid=$(pidof -s master)
ls -ld /proc/$pid/root
</code></pre><p>從基本Linux服務中輸出樣例：</p><pre><code>lrwxrwxrwx. 1 root root 0 Mar  9 11:16 /proc/8613/root -&gt; /
</code></pre><p>PID 8613 指向了 / (root) 也就是説這個程序的根目錄並沒有被改變或是被 chroot。這個方法非常的快速而又直接，不需要打開配置文件。下面是從已經 chroot 的 ngnix 服務中得到的另一個例子：</p><pre><code>pid=$(pidof -s master)
ls -ld /proc/$pid/root
</code></pre><p>輸出樣例：</p><pre><code>lrwxrwxrwx 1 nginx nginx 0 Mar  9 11:17 /proc/4233/root -&gt; /nginxjail
</code></pre><p>程序的根目錄已經改為 /nginxjail。</p><h3 id="用-chroot-救援和修復軟件raid-磁盤陣列-系統" tabindex="-1">用 chroot 救援和修復軟件RAID(磁盤陣列)系統 <a class="header-anchor" href="#用-chroot-救援和修復軟件raid-磁盤陣列-系統" aria-label="Permalink to “用 chroot 救援和修復軟件RAID(磁盤陣列)系統”">​</a></h3>`,12)),i("p",null,[o[13]||(o[13]=l("我先假設基於軟RAID的 Linux 系統無法正常啓動。所以你",-1)),n(t,{href:"http://www.cyberciti.biz/faq/centos-rhel-linux-mount-raid-hard-disk-from-livecd/"},{default:r(()=>[...o[12]||(o[12]=[l("需要用Live CD或用基於網絡的內核應急模式",-1)])]),_:1}),o[14]||(o[14]=l("來修復系統。在這個例子中，我用了 Live Linux DVD/CD 啓動一個基於 RHEL 的系統，然後再 chroot 到 /dev/sda1 和 /或 /dev/md0 修復問題：",-1))]),o[54]||(o[54]=i("pre",null,[i("code",null,`## 在 Live CD 的提示符下，鍵入以下命令來恢復數據。##
## /dev/sda1 系統主分區##
# 建立 jail 目錄
d=/chroot
mkdir $d

# 掛載 sda1 和其他所需目錄
mount /dev/sda1 $d
mount -o bind /dev $d/dev
mount -o bind /sys $d/sys
mount -o bind /dev/shm $d/dev/shm
mount -o bind /proc $d/proc

# 掛載軟件RAID /dev/md0
mount /dev/md0 $d/data

# Chroot 到我們新建的 jail 中。這將允許我們修復引導裝載系統(bootloader)，或者在所有文件被/dev/null吞噬之前抓取數據。
chroot $d

#你能看見嗎？
ls
df

# 將文件置入安全路徑
rsync -avr /path/to/my_precious_data_dir user@safe.location.cyberciti.biz:/path/to/dest

# 退出 jail ,然後重啓或者根據個人所需格式化服務 ;)
exit
umount {dev,sys,[...],}
reboot
`)],-1)),o[55]||(o[55]=i("p",null,[i("strong",null,"別急，還有更精彩的內容！")],-1)),o[56]||(o[56]=i("p",null,"查看nixCraft下所有其他有關 chroot 命令的文章：",-1)),i("ol",null,[i("li",null,[n(t,{href:"http://www.cyberciti.biz/faq/ubuntu-mounting-your-encrypted-home-from-livecd/"},{default:r(()=>[...o[15]||(o[15]=[l("Ubuntu: Mount Encrypted Home Directory (~/.private) From an Ubuntu Live CD",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/howto-linux-unix-rssh-chroot-jail-setup.html"},{default:r(()=>[...o[16]||(o[16]=[l("Linux Configure rssh Chroot Jail To Lock Users To Their Home Directories Only",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/howto-fix-dual-boot-windows-vista-linux.html"},{default:r(()=>[...o[17]||(o[17]=[l("Fix a dual boot MS-Windows XP/Vista/7/Server and Linux problem",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.cyberciti.biz/tips/restore-debian-linux-grub-boot-loader.html"},{default:r(()=>[...o[18]||(o[18]=[l("Restore Debian Linux Grub boot loader",-1)])]),_:1})])]),o[57]||(o[57]=i("h3",{id:"在-linux-和-類unix-系統下-chroot-應用程序的注意事項",tabindex:"-1"},[l("在 Linux 和 類Unix 系統下 chroot 應用程序的注意事項 "),i("a",{class:"header-anchor",href:"#在-linux-和-類unix-系統下-chroot-應用程序的注意事項","aria-label":"Permalink to “在 Linux 和 類Unix 系統下 chroot 應用程序的注意事項”"},"​")],-1)),o[58]||(o[58]=i("p",null,"你應該在各種情況下都用 chroot 特性嗎？從上面的例子看出，這個程序是相當簡單的，但是最終可能出現幾種不同的問題而結束，例如：",-1)),i("p",null,[o[21]||(o[21]=l("1.在 jail 中缺失庫文件可能直接導致 jail 崩潰。 1.一些複雜的程序不好被 chroot。所以我建議你要麼嘗試",-1)),n(t,{href:"http://www.cyberciti.biz/faq/how-to-upgrade-freebsd-jail-vps/"},{default:r(()=>[...o[19]||(o[19]=[l("真正的jail，例如FreeBSD提供的",-1)])]),_:1}),o[22]||(o[22]=l("，要麼用虛擬化解決，比如",-1)),n(t,{href:"http://www.cyberciti.biz/faq/kvm-virtualization-in-redhat-centos-scientific-linux-6/"},{default:r(()=>[...o[20]||(o[20]=[l("Linux 下的 KVM",-1)])]),_:1}),o[23]||(o[23]=l('。 1.正在運行某一程序的 jail 不能再運行其他程序，不能更改任何文件，也不能"假設"另一個用户的身份。放寬這些限制，會降低你的安全性，請根據具體情況 chroot。',-1))]),o[59]||(o[59]=i("p",null,"還要注意：",-1)),i("ol",null,[o[26]||(o[26]=i("li",null,"當你升級本地程序時，不要忘記升級已 chroot 的程序。",-1)),o[27]||(o[27]=i("li",null,"並非所有程序能夠或者應該被 chroot。",-1)),o[28]||(o[28]=i("li",null,"任何需要 root 權限操作的程序，對其 chroot 是沒意義的。因為通常 root 用户都能脱離 chroot。",-1)),i("li",null,[o[25]||(o[25]=l("Chroot 並不一個高招。更多的可以學習",-1)),n(t,{href:"http://www.cyberciti.biz/tips/linux-security.html"},{default:r(()=>[...o[24]||(o[24]=[l("如何保護和加強系統的各個部分",-1)])]),_:1})])]),o[60]||(o[60]=i("h3",{id:"choort-部分命令選項",tabindex:"-1"},[l("choort 部分命令選項 "),i("a",{class:"header-anchor",href:"#choort-部分命令選項","aria-label":"Permalink to “choort 部分命令選項”"},"​")],-1)),i("p",null,[o[30]||(o[30]=l("取自 man 幫助頁面",-1)),n(t,{href:"http://www.manpager.com/linux/man8/chroot.8.html"},{default:r(()=>[...o[29]||(o[29]=[l("chroot(8)",-1)])]),_:1}),o[31]||(o[31]=l(":",-1))]),o[61]||(o[61]=i("pre",null,[i("code",null,`  --userspec=USER:GROUP  使用指定的 用户 和 組 (ID 或 名稱)
  --groups=G_LIST        指定補充組 g1,g2,..,gN 
      --help     顯示幫助並退出
      --version  顯示版本信息並退出
`)],-1)),o[62]||(o[62]=i("h3",{id:"參見",tabindex:"-1"},[l("參見 "),i("a",{class:"header-anchor",href:"#參見","aria-label":"Permalink to “參見”"},"​")],-1)),i("ul",null,[i("li",null,[n(t,{href:"http://www.manpager.com/linux/man8/chroot.8.html"},{default:r(()=>[...o[32]||(o[32]=[l("chroot(8) Linux/Unix 命令 man 頁面",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.manpager.com/linux/man2/chroot.2.html"},{default:r(()=>[...o[33]||(o[33]=[l("Man頁面 chroot(2)",-1)])]),_:1})]),i("li",null,[n(t,{href:"http://www.openbsd.org/faq/"},{default:r(()=>[...o[34]||(o[34]=[l("OpenBSD文檔參見Apache chrooting FAQ 提取更多信息",-1)])]),_:1})])]),o[63]||(o[63]=i("hr",null,null,-1)),i("p",null,[o[36]||(o[36]=l("via: ",-1)),n(t,{href:"http://www.cyberciti.biz/faq/unix-linux-chroot-command-examples-usage-syntax/"},{default:r(()=>[...o[35]||(o[35]=[l("http://www.cyberciti.biz/faq/unix-linux-chroot-command-examples-usage-syntax/",-1)])]),_:1})]),i("p",null,[o[39]||(o[39]=l("譯者：",-1)),n(t,{href:"https://github.com/Luoxcat"},{default:r(()=>[...o[37]||(o[37]=[l("Luoxcat",-1)])]),_:1}),o[40]||(o[40]=l(" 校對：",-1)),n(t,{href:"https://github.com/wxy"},{default:r(()=>[...o[38]||(o[38]=[l("wxy",-1)])]),_:1})]),i("p",null,[o[43]||(o[43]=l("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...o[41]||(o[41]=[l("LCTT",-1)])]),_:1}),o[44]||(o[44]=l(" 原創翻譯，",-1)),n(t,{href:"http://linux.cn/"},{default:r(()=>[...o[42]||(o[42]=[l("Linux中國",-1)])]),_:1}),o[45]||(o[45]=l(" 榮譽推出",-1))])])}const C=d(u,[["render",b]]);export{L as __pageData,C as default};
