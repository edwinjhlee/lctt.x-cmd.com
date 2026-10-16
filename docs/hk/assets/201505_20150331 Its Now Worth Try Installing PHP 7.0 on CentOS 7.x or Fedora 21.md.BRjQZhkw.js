import{_ as p,a0 as a,w as s,s as l,ao as d,I as r,x as e,a1 as i,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0 | LCTT x X-CMD","titleTemplate":false,"description":"在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150331 Its Now Worth Try Installing PHP 7.0 on CentOS 7.x or Fedora 21","title":"在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0","tag":"201505","desc":""},"relativePath":"201505/20150331 Its Now Worth Try Installing PHP 7.0 on CentOS 7.x or Fedora 21.md","filePath":"[post].md"}'),h={name:"201505/20150331 Its Now Worth Try Installing PHP 7.0 on CentOS 7.x or Fedora 21.md"};function c(u,n,P,g,f,m){const t=a("Link");return s(),l("div",null,[n[16]||(n[16]=d(`<h1 id="在centos-7-x-fedora-21-上面體驗-php-7-0" tabindex="-1">在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0 <a class="header-anchor" href="#在centos-7-x-fedora-21-上面體驗-php-7-0" aria-label="Permalink to “在CentOS 7.x / Fedora 21 上面體驗 PHP 7.0”">​</a></h1><p>PHP是一種為我們熟知的通用服務器網頁腳本語言。非常多的在線網站都是用PHP編寫的。PHP這些年來一直在持續進化，豐富其功能，變得易於使用，更好地組織的腳本語言。目前PHP的開發團隊正籌備下一個PHP版本的發行，名字是PHP 7。現在的PHP版本為PHP 5.6，可能你清楚PHP 6已經流產了，PHP 7的支持者們不希望下一個重要的版本被其他分支混淆，即過去已經停止很久的PHP 6。所以決定下一個PHP主要的發行版本叫PHP 7，而不是PHP 6。PHP 7.0預計在今年十一月份發行。</p><p>在下一代主要PHP版本里有一些不錯的功能：</p><ul><li>為了改善執行效率與內存佔用，新的版本添加了PHPNG功能。</li><li>引入了JIT引擎來動態編譯Zend操作碼為自然機器碼，以此來達到更快的處理性能。這項功能允許隨後的程序調用同一份代碼，這樣會運行快很多。</li><li>AST（抽象語法樹）是最新添加的功能，它可以增強支持PHP的擴展性和用户應用。</li><li>添加異步編程功能以支持同一個請求中的並行任務。</li><li>新的版本會支持獨立的多線程網頁服務器，這樣可以使用一個單獨的存儲池處理很多併發的請求。</li></ul><h3 id="在centos-fedora上安裝php-7" tabindex="-1">在CentOS/Fedora上安裝PHP 7 <a class="header-anchor" href="#在centos-fedora上安裝php-7" aria-label="Permalink to “在CentOS/Fedora上安裝PHP 7”">​</a></h3><p>讓我們來看看怎樣在CentOS 7和Fedora 21安裝PHP7。為了安裝PHP7，我們首先需要克隆php-src 倉庫。當克隆工作完成，我們再配置和編譯它。進行下一步之前，我們要確保已經在LInux系統下安裝瞭如下的組件，否則PHP編譯會返回錯誤中止。</p><ul><li>Git</li><li>autoconf</li><li>gcc</li><li>bison</li></ul><p>所有上面提到的要求可以使用Yum軟件包管理器安裝。以下一條命令即可完成：</p><pre><code>yum install git autoconf gcc bison
</code></pre><p>準備好開始安裝PHP7了嗎？讓我們先創建一個PHP7目錄，作為你的當前工作目錄。</p><pre><code>mkdir php7

cd php7
</code></pre><p>現在克隆php-src倉庫，在終端裏運行下面的命令。</p><pre><code>git clone https://git.php.net/repository/php-src.git
</code></pre><p>工作應該會在幾分鐘後完成，這裏是一個樣例輸出，你應該會在任務完成時看見。</p><pre><code>[root@localhost php7]# git clone https://git.php.net/repository/php-src.git

Cloning into &#39;php-src&#39;...

remote: Counting objects: 615064, done.

remote: Compressing objects: 100% (127800/127800), done.

remote: Total 615064 (delta 492063), reused 608718 (delta 485944)

Receiving objects: 100% (615064/615064), 152.32 MiB | 16.97 MiB/s, done.

Resolving deltas: 100% (492063/492063), done.
</code></pre><p>讓我們來配置，編譯PHP7，在終端運行下面的命令，開始配置工作：</p><pre><code>cd php-src

./buildconf
</code></pre><p>下面是./buildconf命令的樣例輸出。</p><pre><code>[root@localhost php-src]# ./buildconf

buildconf: checking installation...

buildconf: autoconf version 2.69 (ok)

rebuilding aclocal.m4

rebuilding configure

rebuilding main/php_config.h.in
</code></pre><p>使用下面的命令，繼續配置進程：</p><pre><code>./configure \\

--prefix=$HOME/php7/usr \\

--with-config-file-path=$HOME/php7/usr/etc \\

--enable-mbstring \\

--enable-zip \\

--enable-bcmath \\

--enable-pcntl \\

--enable-ftp \\

--enable-exif \\

--enable-calendar \\

--enable-sysvmsg \\

--enable-sysvsem \\

--enable-sysvshm \\

--enable-wddx \\

--with-curl \\

--with-mcrypt \\

--with-iconv \\

--with-gmp \\

--with-pspell \\

--with-gd \\

--with-jpeg-dir=/usr \\

--with-png-dir=/usr \\

--with-zlib-dir=/usr \\

--with-xpm-dir=/usr \\

--with-freetype-dir=/usr \\

--with-t1lib=/usr \\

--enable-gd-native-ttf \\

--enable-gd-jis-conv \\

--with-openssl \\

--with-mysql=/usr \\

--with-pdo-mysql=/usr \\

--with-gettext=/usr \\

--with-zlib=/usr \\

--with-bz2=/usr \\

--with-recode=/usr \\

--with-mysqli=/usr/bin/mysql_config
</code></pre><p>這會花去不少的時間，當完成後你應該會看到如下面的輸出：</p><pre><code>creating libtool

appending configuration tag &quot;CXX&quot; to libtool

Generating files

configure: creating ./config.status

creating main/internal_functions.c

creating main/internal_functions_cli.c

+--------------------------------------------------------------------+

| License:                                                           |

| This software is subject to the PHP License, available in this     |

| distribution in the file LICENSE.  By continuing this installation |

| process, you are bound by the terms of this license agreement.     |

| If you do not agree with the terms of this license, you must abort |

| the installation process at this point.                            |

+--------------------------------------------------------------------+

 

Thank you for using PHP.

 

config.status: creating php7.spec

config.status: creating main/build-defs.h

config.status: creating scripts/phpize

config.status: creating scripts/man1/phpize.1

config.status: creating scripts/php-config

config.status: creating scripts/man1/php-config.1

config.status: creating sapi/cli/php.1

config.status: creating sapi/cgi/php-cgi.1

config.status: creating ext/phar/phar.1

config.status: creating ext/phar/phar.phar.1

config.status: creating main/php_config.h

config.status: executing default commands
</code></pre><p>運行下面的命令，完成編譯過程。</p><pre><code>make
</code></pre><p>“make”命令的樣例輸出如下所示：</p><pre><code>Generating phar.php

Generating phar.phar

PEAR package PHP_Archive not installed: generated phar will require PHP&#39;s phar extension be enabled.

clicommand.inc

directorytreeiterator.inc

directorygraphiterator.inc

pharcommand.inc

invertedregexiterator.inc

phar.inc

 

Build complete.

Don&#39;t forget to run &#39;make test&#39;.
</code></pre><p>活兒幹完了，該安裝PHP7了，運行下面的命令安裝它。</p><pre><code>make install
</code></pre><p>成功安裝的進程的樣例輸出應該像這樣：</p><pre><code>[root@localhost php-src]# make install

Installing shared extensions:     /root/php7/usr/lib/php/extensions/no-debug-non-zts-20141001/

Installing PHP CLI binary:        /root/php7/usr/bin/

Installing PHP CLI man page:      /root/php7/usr/php/man/man1/

Installing PHP CGI binary:        /root/php7/usr/bin/

Installing PHP CGI man page:      /root/php7/usr/php/man/man1/

Installing build environment:     /root/php7/usr/lib/php/build/

Installing header files:          /root/php7/usr/include/php/

Installing helper programs:       /root/php7/usr/bin/

program: phpize

program: php-config

Installing man pages:             /root/php7/usr/php/man/man1/

page: phpize.1

page: php-config.1

Installing PEAR environment:      /root/php7/usr/lib/php/

[PEAR] Archive_Tar    - installed: 1.3.13

[PEAR] Console_Getopt - installed: 1.3.1

[PEAR] Structures_Graph- installed: 1.0.4

[PEAR] XML_Util       - installed: 1.2.3

[PEAR] PEAR           - installed: 1.9.5

Wrote PEAR system config file at: /root/php7/usr/etc/pear.conf

You may want to add: /root/php7/usr/lib/php to your php.ini include_path

/root/php7/php-src/build/shtool install -c ext/phar/phar.phar /root/php7/usr/bin

ln -s -f /root/php7/usr/bin/phar.phar /root/php7/usr/bin/phar

Installing PDO headers:          /root/php7/usr/include/php/ext/pdo/
</code></pre><p>恭喜你，PHP7已經安裝在你的Linux系統上了。安裝完後，進入PHP7安裝文件裏的sapi/cli裏面。</p><pre><code>cd sapi/cli
</code></pre><p>驗證一下PHP的版本。</p><pre><code>[root@localhost cli]# ./php -v

PHP 7.0.0-dev (cli) (built: Mar 28 2015 00:54:11)

Copyright (c) 1997-2015 The PHP Group

Zend Engine v3.0.0-dev, Copyright (c) 1998-2015 Zend Technologies
</code></pre><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>`,36)),r("p",null,[n[1]||(n[1]=e("PHP 7也",-1)),i(t,{href:"http://blog.famillecollet.com/post/2015/03/25/PHP-7.0-as-Software-Collection"},{default:o(()=>[...n[0]||(n[0]=[e("添加到了remi倉庫",-1)])]),_:1}),n[2]||(n[2]=e("，這個即將到來的版本主要關注執行效率的提升，它的新特性致力於使PHP較好滿足現代編程的需求和趨勢。PHP 7.0將會有許多新的特性、丟棄一些老版本的東西。在接下來的日子裏，我們希望看到新特性和棄用功能的具體情況。希望你喜歡！",-1))]),n[17]||(n[17]=r("hr",null,null,-1)),r("p",null,[n[4]||(n[4]=e("via: ",-1)),i(t,{href:"http://linoxide.com/linux-how-to/install-php-7-centos-7-fedora-21/"},{default:o(()=>[...n[3]||(n[3]=[e("http://linoxide.com/linux-how-to/install-php-7-centos-7-fedora-21/",-1)])]),_:1})]),r("p",null,[n[8]||(n[8]=e("作者：",-1)),i(t,{href:"http://linoxide.com/author/arunrz/"},{default:o(()=>[...n[5]||(n[5]=[e("Aun Raza",-1)])]),_:1}),n[9]||(n[9]=e(" 譯者：",-1)),i(t,{href:"https://github.com/wi-cuckoo"},{default:o(()=>[...n[6]||(n[6]=[e("wi-cuckoo",-1)])]),_:1}),n[10]||(n[10]=e(" 校對：",-1)),i(t,{href:"https://github.com/wxy"},{default:o(()=>[...n[7]||(n[7]=[e("wxy",-1)])]),_:1})]),r("p",null,[n[13]||(n[13]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...n[11]||(n[11]=[e("LCTT",-1)])]),_:1}),n[14]||(n[14]=e(" 原創翻譯，",-1)),i(t,{href:"http://linux.cn/"},{default:o(()=>[...n[12]||(n[12]=[e("Linux中國",-1)])]),_:1}),n[15]||(n[15]=e(" 榮譽推出",-1))])])}const C=p(h,[["render",c]]);export{x as __pageData,C as default};
