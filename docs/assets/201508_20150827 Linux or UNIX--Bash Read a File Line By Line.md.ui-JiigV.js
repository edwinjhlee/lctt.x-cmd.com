import{_ as r,a0 as a,w as s,s as l,ao as d,I as o,x as t,a1 as i,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"Bash 下如何逐行读取一个文件 | LCTT x X-CMD","titleTemplate":false,"description":"Bash 下如何逐行读取一个文件 | LCTT (201508) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Bash 下如何逐行读取一个文件 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Bash 下如何逐行读取一个文件 | LCTT (201508) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201508/20150827 Linux or UNIX--Bash Read a File Line By Line","title":"Bash 下如何逐行读取一个文件","tag":"201508","desc":""},"relativePath":"201508/20150827 Linux or UNIX--Bash Read a File Line By Line.md","filePath":"[post].md"}'),u={name:"201508/20150827 Linux or UNIX--Bash Read a File Line By Line.md"};function h(f,e,c,q,m,g){const n=a("Link");return s(),l("div",null,[e[11]||(e[11]=d(`<h1 id="bash-下如何逐行读取一个文件" tabindex="-1">Bash 下如何逐行读取一个文件 <a class="header-anchor" href="#bash-下如何逐行读取一个文件" aria-label="Permalink to “Bash 下如何逐行读取一个文件”">​</a></h1><p>在 Linux 或类 UNIX 系统下如何使用 KSH 或 BASH shell 逐行读取一个文件？</p><p>在 Linux、OSX、 *BSD 或者类 Unix 系统下你可以使用 ​​while..do..done 的 bash 循环来逐行读取一个文件。</p><p>###在 Bash Unix 或者 Linux shell 中逐行读取一个文件的语法</p><p>对于 bash、ksh、 zsh 和其他的 shells 语法如下</p><pre><code>while read -r line; do COMMAND; done &lt; input.file
</code></pre><p>通过 -r 选项传递给 read 命令以防止阻止解释其中的反斜杠转义符。</p><p>在 read 命令之前添加 <code>IFS=</code> 选项，来防止首尾的空白字符被去掉。</p><pre><code>while IFS= read -r line; do COMMAND_on $line; done &lt; input.file
</code></pre><p>这是更适合人类阅读的语法:</p><pre><code>#!/bin/bash
input=&quot;/path/to/txt/file&quot;
while IFS= read -r var
do
  echo &quot;$var&quot;
done &lt; &quot;$input&quot;
</code></pre><p><strong>示例</strong></p><p>下面是一些例子:</p><pre><code>#!/bin/ksh
file=&quot;/home/vivek/data.txt&quot;
while IFS= read line
do
    # display $line or do somthing with $line
	echo &quot;$line&quot;
done &lt;&quot;$file&quot;
</code></pre><p>在 bash shell 中相同的例子:</p><pre><code>#!/bin/bash
file=&quot;/home/vivek/data.txt&quot;
while IFS= read -r line
do
    # display $line or do somthing with $line
	printf &#39;%s\\n&#39; &quot;$line&quot;
done &lt;&quot;$file&quot;
</code></pre><p>你还可以看看这个更好的:</p><pre><code>#!/bin/bash
file=&quot;/etc/passwd&quot;
while IFS=: read -r f1 f2 f3 f4 f5 f6 f7
do
    # display fields using f1, f2,..,f7
    printf &#39;Username: %s, Shell: %s, Home Dir: %s\\n&#39; &quot;$f1&quot; &quot;$f7&quot; &quot;$f6&quot;
done &lt;&quot;$file&quot;
</code></pre><p>示例输出:</p><p><img src="http://s0.cyberciti.org/uploads/faq/2011/01/Bash-Scripting-Read-File-line-by-line-demo.jpg" alt="Fig.01: Bash shell scripting- read file line by line demo outputs"></p><p><em>图01：Bash 脚本：读取文件并逐行输出文件</em></p><p>###Bash 脚本：逐行读取文本文件并创建为 pdf 文件</p><p>我的输入文件如下（faq.txt）:</p><pre><code>4|http://www.cyberciti.biz/faq/mysql-user-creation/|Mysql User Creation: Setting Up a New MySQL User Account
4096|http://www.cyberciti.biz/faq/ksh-korn-shell/|What is UNIX / Linux Korn Shell?
4101|http://www.cyberciti.biz/faq/what-is-posix-shell/|What Is POSIX Shell?
17267|http://www.cyberciti.biz/faq/linux-check-battery-status/|Linux: Check Battery Status Command
17245|http://www.cyberciti.biz/faq/restarting-ntp-service-on-linux/|Linux Restart NTPD Service Command
17183|http://www.cyberciti.biz/faq/ubuntu-linux-determine-your-ip-address/|Ubuntu Linux: Determine Your IP Address
17172|http://www.cyberciti.biz/faq/determine-ip-address-of-linux-server/|HowTo: Determine an IP Address My Linux Server
16510|http://www.cyberciti.biz/faq/unix-linux-restart-php-service-command/|Linux / Unix: Restart PHP Service Command
8292|http://www.cyberciti.biz/faq/mounting-harddisks-in-freebsd-with-mount-command/|FreeBSD: Mount Hard Drive / Disk Command
8190|http://www.cyberciti.biz/faq/rebooting-solaris-unix-server/|Reboot a Solaris UNIX System
</code></pre><p>我的 bash 脚本:</p><pre><code>#!/bin/bash
# Usage: Create pdf files from input (wrapper script)
# Author: Vivek Gite &lt;Www.cyberciti.biz&gt; under GPL v2.x+
#---------------------------------------------------------
 
#Input file
_db=&quot;/tmp/wordpress/faq.txt&quot;
 
#Output location
o=&quot;/var/www/prviate/pdf/faq&quot;
 
_writer=&quot;~/bin/py/pdfwriter.py&quot;
 
# If file exists 
if [[ -f &quot;$_db&quot; ]]
then
    # read it
	while IFS=&#39;|&#39; read -r pdfid pdfurl pdftitle
    do
    	local pdf=&quot;$o/$pdfid.pdf&quot;
        echo &quot;Creating $pdf file ...&quot;
	#Genrate pdf file
        $_writer --quiet --footer-spacing 2 \\
        --footer-left &quot;nixCraft is GIT UL++++ W+++ C++++ M+ e+++ d-&quot; \\
        --footer-right &quot;Page [page] of [toPage]&quot; --footer-line \\
        --footer-font-size 7 --print-media-type &quot;$pdfurl&quot; &quot;$pdf&quot;
    done &lt;&quot;$_db&quot;
fi
</code></pre><p>###技巧：从 bash 变量中读取</p><p>让我们看看如何在 Debian 或者 Ubuntu Linux 下列出所有安装过的 php 包，请输入：</p><pre><code># 我将输出内容赋值到一个变量名为 $list中 #

list=$(dpkg --list php\\* | awk &#39;/ii/{print $2}&#39;)
printf &#39;%s\\n&#39; &quot;$list&quot;
</code></pre><p>示例输出:</p><pre><code>php-pear
php5-cli
php5-common
php5-fpm
php5-gd
php5-json
php5-memcache
php5-mysql
php5-readline
php5-suhosin-extension
</code></pre><p>你现在可以从 $list 中看到它们，并安装这些包：</p><pre><code>#!/bin/bash
# BASH can iterate over $list variable using a &quot;here string&quot; #
while IFS= read -r pkg
do
    printf &#39;Installing php package %s...\\n&#39; &quot;$pkg&quot;
    /usr/bin/apt-get -qq install $pkg
done &lt;&lt;&lt; &quot;$list&quot;
printf &#39;*** Do not forget to run php5enmod and restart the server (httpd or php5-fpm) ***\\n&#39;
</code></pre><p>示例输出:</p><pre><code>Installing php package php-pear...
Installing php package php5-cli...
Installing php package php5-common...
Installing php package php5-fpm...
Installing php package php5-gd...
Installing php package php5-json...
Installing php package php5-memcache...
Installing php package php5-mysql...
Installing php package php5-readline...
Installing php package php5-suhosin-extension...

*** Do not forget to run php5enmod and restart the server (httpd or php5-fpm) ***
</code></pre><hr>`,36)),o("p",null,[e[1]||(e[1]=t("via: ",-1)),i(n,{href:"http://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/"},{default:p(()=>[...e[0]||(e[0]=[t("http://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/",-1)])]),_:1})]),o("p",null,[e[4]||(e[4]=t("作者： VIVEK GIT 译者：",-1)),i(n,{href:"https://github.com/strugglingyouth"},{default:p(()=>[...e[2]||(e[2]=[t("strugglingyouth",-1)])]),_:1}),e[5]||(e[5]=t(" 校对：",-1)),i(n,{href:"https://github.com/wxy"},{default:p(()=>[...e[3]||(e[3]=[t("wxy",-1)])]),_:1})]),o("p",null,[e[8]||(e[8]=t("本文由 ",-1)),i(n,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[6]||(e[6]=[t("LCTT",-1)])]),_:1}),e[9]||(e[9]=t(" 原创翻译，",-1)),i(n,{href:"https://linux.cn/"},{default:p(()=>[...e[7]||(e[7]=[t("Linux中国",-1)])]),_:1}),e[10]||(e[10]=t(" 荣誉推出",-1))])])}const y=r(u,[["render",h]]);export{x as __pageData,y as default};
