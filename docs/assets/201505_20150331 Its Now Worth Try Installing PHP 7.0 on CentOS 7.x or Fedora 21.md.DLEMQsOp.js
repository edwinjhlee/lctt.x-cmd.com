import{_ as p,a0 as a,w as s,s as l,ao as d,I as r,x as e,a1 as i,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"在CentOS 7.x / Fedora 21 上面体验 PHP 7.0 | LCTT x X-CMD","titleTemplate":false,"description":"在CentOS 7.x / Fedora 21 上面体验 PHP 7.0 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在CentOS 7.x / Fedora 21 上面体验 PHP 7.0 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在CentOS 7.x / Fedora 21 上面体验 PHP 7.0 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150331 Its Now Worth Try Installing PHP 7.0 on CentOS 7.x or Fedora 21","title":"在CentOS 7.x / Fedora 21 上面体验 PHP 7.0","tag":"201505","desc":""},"relativePath":"201505/20150331 Its Now Worth Try Installing PHP 7.0 on CentOS 7.x or Fedora 21.md","filePath":"[post].md"}'),h={name:"201505/20150331 Its Now Worth Try Installing PHP 7.0 on CentOS 7.x or Fedora 21.md"};function c(u,n,P,g,f,m){const t=a("Link");return s(),l("div",null,[n[16]||(n[16]=d(`<h1 id="在centos-7-x-fedora-21-上面体验-php-7-0" tabindex="-1">在CentOS 7.x / Fedora 21 上面体验 PHP 7.0 <a class="header-anchor" href="#在centos-7-x-fedora-21-上面体验-php-7-0" aria-label="Permalink to “在CentOS 7.x / Fedora 21 上面体验 PHP 7.0”">​</a></h1><p>PHP是一种为我们熟知的通用服务器网页脚本语言。非常多的在线网站都是用PHP编写的。PHP这些年来一直在持续进化，丰富其功能，变得易于使用，更好地组织的脚本语言。目前PHP的开发团队正筹备下一个PHP版本的发行，名字是PHP 7。现在的PHP版本为PHP 5.6，可能你清楚PHP 6已经流产了，PHP 7的支持者们不希望下一个重要的版本被其他分支混淆，即过去已经停止很久的PHP 6。所以决定下一个PHP主要的发行版本叫PHP 7，而不是PHP 6。PHP 7.0预计在今年十一月份发行。</p><p>在下一代主要PHP版本里有一些不错的功能：</p><ul><li>为了改善执行效率与内存占用，新的版本添加了PHPNG功能。</li><li>引入了JIT引擎来动态编译Zend操作码为自然机器码，以此来达到更快的处理性能。这项功能允许随后的程序调用同一份代码，这样会运行快很多。</li><li>AST（抽象语法树）是最新添加的功能，它可以增强支持PHP的扩展性和用户应用。</li><li>添加异步编程功能以支持同一个请求中的并行任务。</li><li>新的版本会支持独立的多线程网页服务器，这样可以使用一个单独的存储池处理很多并发的请求。</li></ul><h3 id="在centos-fedora上安装php-7" tabindex="-1">在CentOS/Fedora上安装PHP 7 <a class="header-anchor" href="#在centos-fedora上安装php-7" aria-label="Permalink to “在CentOS/Fedora上安装PHP 7”">​</a></h3><p>让我们来看看怎样在CentOS 7和Fedora 21安装PHP7。为了安装PHP7，我们首先需要克隆php-src 仓库。当克隆工作完成，我们再配置和编译它。进行下一步之前，我们要确保已经在LInux系统下安装了如下的组件，否则PHP编译会返回错误中止。</p><ul><li>Git</li><li>autoconf</li><li>gcc</li><li>bison</li></ul><p>所有上面提到的要求可以使用Yum软件包管理器安装。以下一条命令即可完成：</p><pre><code>yum install git autoconf gcc bison
</code></pre><p>准备好开始安装PHP7了吗？让我们先创建一个PHP7目录，作为你的当前工作目录。</p><pre><code>mkdir php7

cd php7
</code></pre><p>现在克隆php-src仓库，在终端里运行下面的命令。</p><pre><code>git clone https://git.php.net/repository/php-src.git
</code></pre><p>工作应该会在几分钟后完成，这里是一个样例输出，你应该会在任务完成时看见。</p><pre><code>[root@localhost php7]# git clone https://git.php.net/repository/php-src.git

Cloning into &#39;php-src&#39;...

remote: Counting objects: 615064, done.

remote: Compressing objects: 100% (127800/127800), done.

remote: Total 615064 (delta 492063), reused 608718 (delta 485944)

Receiving objects: 100% (615064/615064), 152.32 MiB | 16.97 MiB/s, done.

Resolving deltas: 100% (492063/492063), done.
</code></pre><p>让我们来配置，编译PHP7，在终端运行下面的命令，开始配置工作：</p><pre><code>cd php-src

./buildconf
</code></pre><p>下面是./buildconf命令的样例输出。</p><pre><code>[root@localhost php-src]# ./buildconf

buildconf: checking installation...

buildconf: autoconf version 2.69 (ok)

rebuilding aclocal.m4

rebuilding configure

rebuilding main/php_config.h.in
</code></pre><p>使用下面的命令，继续配置进程：</p><pre><code>./configure \\

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
</code></pre><p>这会花去不少的时间，当完成后你应该会看到如下面的输出：</p><pre><code>creating libtool

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
</code></pre><p>运行下面的命令，完成编译过程。</p><pre><code>make
</code></pre><p>“make”命令的样例输出如下所示：</p><pre><code>Generating phar.php

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
</code></pre><p>活儿干完了，该安装PHP7了，运行下面的命令安装它。</p><pre><code>make install
</code></pre><p>成功安装的进程的样例输出应该像这样：</p><pre><code>[root@localhost php-src]# make install

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
</code></pre><p>恭喜你，PHP7已经安装在你的Linux系统上了。安装完后，进入PHP7安装文件里的sapi/cli里面。</p><pre><code>cd sapi/cli
</code></pre><p>验证一下PHP的版本。</p><pre><code>[root@localhost cli]# ./php -v

PHP 7.0.0-dev (cli) (built: Mar 28 2015 00:54:11)

Copyright (c) 1997-2015 The PHP Group

Zend Engine v3.0.0-dev, Copyright (c) 1998-2015 Zend Technologies
</code></pre><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3>`,36)),r("p",null,[n[1]||(n[1]=e("PHP 7也",-1)),i(t,{href:"http://blog.famillecollet.com/post/2015/03/25/PHP-7.0-as-Software-Collection"},{default:o(()=>[...n[0]||(n[0]=[e("添加到了remi仓库",-1)])]),_:1}),n[2]||(n[2]=e("，这个即将到来的版本主要关注执行效率的提升，它的新特性致力于使PHP较好满足现代编程的需求和趋势。PHP 7.0将会有许多新的特性、丢弃一些老版本的东西。在接下来的日子里，我们希望看到新特性和弃用功能的具体情况。希望你喜欢！",-1))]),n[17]||(n[17]=r("hr",null,null,-1)),r("p",null,[n[4]||(n[4]=e("via: ",-1)),i(t,{href:"http://linoxide.com/linux-how-to/install-php-7-centos-7-fedora-21/"},{default:o(()=>[...n[3]||(n[3]=[e("http://linoxide.com/linux-how-to/install-php-7-centos-7-fedora-21/",-1)])]),_:1})]),r("p",null,[n[8]||(n[8]=e("作者：",-1)),i(t,{href:"http://linoxide.com/author/arunrz/"},{default:o(()=>[...n[5]||(n[5]=[e("Aun Raza",-1)])]),_:1}),n[9]||(n[9]=e(" 译者：",-1)),i(t,{href:"https://github.com/wi-cuckoo"},{default:o(()=>[...n[6]||(n[6]=[e("wi-cuckoo",-1)])]),_:1}),n[10]||(n[10]=e(" 校对：",-1)),i(t,{href:"https://github.com/wxy"},{default:o(()=>[...n[7]||(n[7]=[e("wxy",-1)])]),_:1})]),r("p",null,[n[13]||(n[13]=e("本文由 ",-1)),i(t,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...n[11]||(n[11]=[e("LCTT",-1)])]),_:1}),n[14]||(n[14]=e(" 原创翻译，",-1)),i(t,{href:"http://linux.cn/"},{default:o(()=>[...n[12]||(n[12]=[e("Linux中国",-1)])]),_:1}),n[15]||(n[15]=e(" 荣誉推出",-1))])])}const C=p(h,[["render",c]]);export{x as __pageData,C as default};
