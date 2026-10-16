import{_ as r,a0 as p,w as a,s as d,I as l,x as t,a1 as i,A as n,ao as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse('{"title":"在Ubuntu下用jailkit建立一個受限Shell | LCTT x X-CMD","titleTemplate":false,"description":"在Ubuntu下用jailkit建立一個受限Shell | LCTT (201312) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Ubuntu下用jailkit建立一個受限Shell | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Ubuntu下用jailkit建立一個受限Shell | LCTT (201312) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201312/Setup a jailed shell with jailkit on ubuntu","title":"在Ubuntu下用jailkit建立一個受限Shell","tag":"201312","desc":""},"relativePath":"201312/Setup a jailed shell with jailkit on ubuntu.md","filePath":"[post].md"}'),u={name:"201312/Setup a jailed shell with jailkit on ubuntu.md"};function b(h,e,j,k,m,c){const o=p("Link");return a(),d("div",null,[e[22]||(e[22]=l("h1",{id:"在ubuntu下用jailkit建立一個受限shell",tabindex:"-1"},[t("在Ubuntu下用jailkit建立一個受限Shell "),l("a",{class:"header-anchor",href:"#在ubuntu下用jailkit建立一個受限shell","aria-label":"Permalink to “在Ubuntu下用jailkit建立一個受限Shell”"},"​")],-1)),e[23]||(e[23]=l("h3",{id:"jailkit和jailed-shell",tabindex:"-1"},[t("Jailkit和jailed Shell "),l("a",{class:"header-anchor",href:"#jailkit和jailed-shell","aria-label":"Permalink to “Jailkit和jailed Shell”"},"​")],-1)),e[24]||(e[24]=l("p",null,"受限shell（Jailed Shell）是一類被限制的shell，它看起來非常像真實的Shell，但是它不允許查看和修改真實的文件系統的任何部分。Shell內的文件系統不同於底層的文件系統。這種功能是通過chroot和其他多種程序實現的。舉例來説，給用户建立一個linux shell去讓他“玩玩”，或者在一個限定的環境裏運行一些程序的所有功能等等。",-1)),e[25]||(e[25]=l("p",null,"在這個教程裏我們將會探討在Ubuntu下用jailkit建立一個受限shell。Jailkit是一個讓你快速建立一個受限shell的工具，將受限用户放到裏面，並配置那些要在受限制環境裏運行的程序。",-1)),l("p",null,[e[1]||(e[1]=t("Jailkit 從這裏下載：",-1)),i(o,{href:"http://olivier.sessink.nl/jailkit/"},{default:n(()=>[...e[0]||(e[0]=[t("http://olivier.sessink.nl/jailkit/",-1)])]),_:1})]),e[26]||(e[26]=l("p",null,"###在Ubuntu/Debian 上安裝 jailkit ###",-1)),l("ol",null,[e[5]||(e[5]=l("li",null,[l("p",null,"因為jaikit需要在系統上編譯，首先，我們需要有用於編譯的那些工具。所以，安裝如下包："),l("pre",null,[l("code",null,` $ sudo apt-get install build-essential autoconf automake libtool flex bison debhelper binutils-gold
`)])],-1)),l("li",null,[l("p",null,[e[3]||(e[3]=t("從下述URL下載Jailkit，或者訪問它的網站以下載最新版本的，如果有了更新版本的話。",-1)),i(o,{href:"http://olivier.sessink.nl/jailkit/jailkit-2.16.tar.gz"},{default:n(()=>[...e[2]||(e[2]=[t("http://olivier.sessink.nl/jailkit/jailkit-2.16.tar.gz",-1)])]),_:1})]),e[4]||(e[4]=l("pre",null,[l("code",null,` $ wget http://olivier.sessink.nl/jailkit/jailkit-2.16.tar.gz
`)],-1))]),e[6]||(e[6]=s(`<li><p>解壓</p><pre><code> $ tar -vxzf jailkit-2.16.tar.gz
</code></pre></li><li><p>編譯並創建deb軟件包</p><p>Jailkit已經包含了用於編譯成deb軟件包的代碼和配置，可以直接安裝在Debian系的Linux上。運行下列命令來完成它。</p><pre><code> $ cd jailkit-2.16/
 $ sudo ./debian/rules binary
</code></pre></li><li><p>安裝deb軟件包</p><p>上述命令創建的deb軟件包叫做： jailkit_2.16-1_amd64.deb.</p><pre><code> $ cd ..
 $ sudo dpkg -i jailkit_2.16-1_amd64.deb
</code></pre><p>就是這樣，現在Jailkit已經安裝完成了。Jailkit有許多命令可以用來設置一個基於chroot的受限環境，如下是這些命令：</p><pre><code> $ jk_
 jk_addjailuser   jk_chrootlaunch  jk_cp            jk_jailuser      jk_lsh           jk_uchroot       
 jk_check         jk_chrootsh      jk_init          jk_list          jk_socketd       jk_update
</code></pre></li>`,3))]),e[27]||(e[27]=s(`<p>上述命令都有man幫助信息，如果你使用它們時，可以參考。</p><h3 id="配置jailed-shell" tabindex="-1">配置Jailed Shell <a class="header-anchor" href="#配置jailed-shell" aria-label="Permalink to “配置Jailed Shell”">​</a></h3><ol><li><p>配置受限環境</p><p>我們需要建立一個目錄來存放所有受限環境的配置。目錄隨便放在什麼地方，比如我們可以創建個/opt/jail的目錄。</p><pre><code> $ sudo mkdir /opt/jail
</code></pre><p>這個目錄應為Root所有。用chown改變屬主。</p><pre><code> $ sudo chown root:root /opt/jail
</code></pre></li><li><p>設置在受限環境中可用的程序</p><p>任何程序想要在受限環境中執行則必須用jk_init命令拷貝到目錄中。</p><p>例如：</p><pre><code> $ sudo jk_init -v /jail basicshell 
 $ sudo jk_init -v /jail editors 
 $ sudo jk_init -v /jail extendedshell 
 $ sudo jk_init -v /jail netutils 
 $ sudo jk_init -v /jail ssh 
 $ sudo jk_init -v /jail sftp
 $ sudo jk_init -v /jail jk_lsh
</code></pre><p>或一次性解決：</p><pre><code> $ sudo jk_init -v /opt/jail netutils basicshell jk_lsh openvpn ssh sftp
</code></pre><p>像basicshell, editors, netutils是一些組名，其中包含多個程序。複製到jail shell中的每個組都是可執行文件、庫文件等的集合。比如<strong>basicshell</strong>就在jail提供有bash, ls, cat, chmod, mkdir, cp, cpio, date, dd, echo, egrep等程序。</p><p>完整的程序列表設置，你可以在/etc/jailkit/jk_init.ini中查看。</p><blockquote><p>jk_lsh (Jailkit limited shell) - 這是一個重要的部分，必須添加到受限環境中。</p></blockquote></li><li><p>創建將被監禁的用户</p><p>需要將一個用户放入jail裏。可以先創建一個</p><pre><code> $ sudo adduser robber
 Adding user \`robber&#39; ...
 Adding new group \`robber&#39; (1005) ...
 Adding new user \`robber&#39; (1006) with group \`robber&#39; ...
 Creating home directory \`/home/robber&#39; ...
 Copying files from \`/etc/skel&#39; ...	
 Enter new UNIX password: 
 Retype new UNIX password: 
 passwd: password updated successfully
 Changing the user information for robber
 Enter the new value, or press ENTER for the default
     Full Name []: 
     Room Number []: 
     Work Phone []: 
     Home Phone []: 
     Other []: 
 Is the information correct? [Y/n] y
</code></pre><p>注意:目前創建的是一個在實際文件系統中的普通用户，並沒有添加到受限環境中。</p><p>在下一步這個用户會被放到受限環境裏。</p><p>這時候如果你查看/etc/passwd文件，你會在文件最後看到跟下面差不多的一個條目。</p><pre><code> robber:x:1006:1005:,,,:/home/robber:/bin/bash
</code></pre><p>這是我們新創建的用户，最後部分的/bin/bash指示了這個用户如果登入了那麼它可以在系統上正常的Shell訪問</p></li><li><p>限制用户</p><p>現在是時候將用户限制</p><pre><code> $ sudo jk_jailuser -m -j /opt/jail/ robber
</code></pre><p>執行上列命令後，用户robber將會被限制。</p><p>如果你現在再觀察/etc/passwd文件，會發現類似下面的最後條目。</p><pre><code> robber:x:1006:1005:,,,:/opt/jail/./home/robber:/usr/sbin/jk_chrootsh
</code></pre><p>注意:最後兩部分表明用户主目錄和shell類型已經被改變了。現在用户的主目錄在/opt/jail(受限環境)中。用户的Shell是一個名叫jk_chrootsh的特殊程序，會提供Jailed Shell。</p><p>jk_chrootsh這是個特殊的shell，每當用户登入系統時，它都會將用户放入受限環境中。</p><p>到目前為止受限配置已經幾乎完成了。但是如果你試圖用ssh連接，那麼註定會失敗,像這樣：</p><pre><code> $ ssh robber@localhost
 robber@localhost&#39;s password: 
 Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-25-generic x86_64)
 * Documentation:  https://help.ubuntu.com/
 13 packages can be updated.
 0 updates are security updates.
 *** /dev/sda7 will be checked for errors at next reboot ***
 *** /dev/sda8 will be checked for errors at next reboot ***
 Last login: Sat Jun 23 12:45:13 2012 from localhost
 Connection to localhost closed.
 $
</code></pre><p>連接會立馬關閉，這意味着用户已經活動在一個受限制的shell中。</p></li><li><p>給在jail中的用户Bash Shell</p><p>下個重要的事情是給用户在限制環境中的一個正確的bash shell。</p><p>打開下面的文件</p><pre><code> /opt/jail/etc/passwd
</code></pre><p>這是個jail中的password文件。類似如下</p><pre><code> root:x:0:0:root:/root:/bin/bash
 robber:x:1006:1005:,,,:/home/robber:/usr/sbin/jk_lsh
</code></pre><p>將/usr/sbin/jk_lsh改為/bin/bash</p><pre><code> root:x:0:0:root:/root:/bin/bash
 robber:x:1006:1005:,,,:/home/robber:/bin/bash
</code></pre><p>保存文件並退出。</p></li><li><p>登入限制環境</p><p>現在讓我們再次登入受限環境</p><pre><code> $ ssh robber@localhost
 robber@localhost&#39;s password: 
 Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-25-generic x86_64)
  * Documentation:  https://help.ubuntu.com/
 13 packages can be updated.
 0 updates are security updates.
 *** /dev/sda7 will be checked for errors at next reboot ***
 *** /dev/sda8 will be checked for errors at next reboot ***
 Last login: Sat Jun 23 12:46:01 2012 from localhost
 bash: groups: command not found
 I have no name!@desktop:~$
</code></pre><p>受限環境説&#39;I have no name!&#39;，哈哈。現在我們在受限環境中有了個完整功能的bash shell。</p><p>現在看看實際的環境。受限環境中的根目錄實際就是真實文件系統中的/opt/jail。但這隻有我們自己知道，受限用户並不知情。</p><pre><code> I have no name!@desktop:~$ cd /
 I have no name!@desktop:/$ ls
 bin  dev  etc  home  lib  lib64  run  usr  var
 I have no name!@desktop:/$
</code></pre><p>也只有我們通過jk_cp拷貝到jail中的命令能使用。</p><p>如果登入失敗，請檢查一下/var/log/auth.log的錯誤信息。</p><p>現在嘗試運行一些網絡命令，類似wget的命令。</p><pre><code> $ wget http://www.google.com/
</code></pre><p>如果你獲得類似的錯誤提示：</p><pre><code> $ wget http://www.google.com/
 --2012-06-23 12:56:43--  http://www.google.com/
 Resolving www.google.com (www.google.com)... failed: Name or service not known.
 wget: unable to resolve host address \`www.google.com&#39;
</code></pre><p>你可以通過運行下列兩條命令來解決這個問題:</p><pre><code> $ sudo jk_cp -v -j /opt/jail /lib/x86_64-linux-gnu/libnss_files.so.2
 $ sudo jk_cp -v -j /opt/jail /lib/x86_64-linux-gnu/libnss_dns.so.2
</code></pre><p>這樣才能正確的定位到libnss_files.so和libnss_dns.so</p></li></ol><h3 id="在限制環境中運行程序或服務" tabindex="-1">在限制環境中運行程序或服務 <a class="header-anchor" href="#在限制環境中運行程序或服務" aria-label="Permalink to “在限制環境中運行程序或服務”">​</a></h3><p>現在配置已經完成了。可以在限制/安全的環境裏運行程序或服務。要在限制環境中啓動一個程序或守護進程可以用<strong>jk_chrootlaunch</strong>命令。</p><pre><code>$ sudo jk_chrootlaunch -j /opt/jail -u robber -x /some/command/in/jail
</code></pre><p>jk_chrootlaunch工具可以在限制環境中啓動一個特殊的進程同時指定用户特權。如果守護進程啓動失敗，請檢查/var/log/syslog/錯誤信息。</p><p>在限制環境中運行程序之前，該程序必須已經用jk_cp命令複製到jail中。</p><blockquote><p>jk_cp -　將文件包括權限信息和庫文件複製到jail的工具</p></blockquote>`,9)),l("p",null,[e[8]||(e[8]=t("進一步閲讀有關其他jailkit命令信息，可以閲讀文檔，",-1)),i(o,{href:"http://olivier.sessink.nl/jailkit/"},{default:n(()=>[...e[7]||(e[7]=[t("http://olivier.sessink.nl/jailkit/",-1)])]),_:1})]),e[28]||(e[28]=l("hr",null,null,-1)),l("p",null,[e[10]||(e[10]=t("via: ",-1)),i(o,{href:"http://www.binarytides.com/install-jailkit-ubuntu-debian/"},{default:n(()=>[...e[9]||(e[9]=[t("http://www.binarytides.com/install-jailkit-ubuntu-debian/",-1)])]),_:1})]),l("p",null,[e[12]||(e[12]=t("via: ",-1)),i(o,{href:"http://www.binarytides.com/setup-jailed-shell-jailkit-ubuntu/"},{default:n(()=>[...e[11]||(e[11]=[t("http://www.binarytides.com/setup-jailed-shell-jailkit-ubuntu/",-1)])]),_:1})]),l("p",null,[e[15]||(e[15]=t("譯者：",-1)),i(o,{href:"https://github.com/Luoxcat"},{default:n(()=>[...e[13]||(e[13]=[t("Luoxcat",-1)])]),_:1}),e[16]||(e[16]=t(" 校對：",-1)),i(o,{href:"https://github.com/wxy"},{default:n(()=>[...e[14]||(e[14]=[t("wxy",-1)])]),_:1})]),l("p",null,[e[19]||(e[19]=t("本文由 ",-1)),i(o,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...e[17]||(e[17]=[t("LCTT",-1)])]),_:1}),e[20]||(e[20]=t(" 原創翻譯，",-1)),i(o,{href:"http://linux.cn/"},{default:n(()=>[...e[18]||(e[18]=[t("Linux中國",-1)])]),_:1}),e[21]||(e[21]=t(" 榮譽推出",-1))])])}const _=r(u,[["render",b]]);export{f as __pageData,_ as default};
