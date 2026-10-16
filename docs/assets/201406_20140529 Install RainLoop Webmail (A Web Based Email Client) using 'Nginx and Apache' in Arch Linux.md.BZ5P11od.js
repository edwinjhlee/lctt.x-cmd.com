import{_ as p,a0 as l,w as s,s as d,I as t,x as o,a1 as e,A as i,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse(`{"title":"在Arch上使用Nginx/Apache安装RainLoop Webmail | LCTT x X-CMD","titleTemplate":false,"description":"在Arch上使用Nginx/Apache安装RainLoop Webmail | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Arch上使用Nginx/Apache安装RainLoop Webmail | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Arch上使用Nginx/Apache安装RainLoop Webmail | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140529 Install RainLoop Webmail (A Web Based Email Client) using 'Nginx and Apache' in Arch Linux","title":"在Arch上使用Nginx/Apache安装RainLoop Webmail","tag":"201406","desc":""},"relativePath":"201406/20140529 Install RainLoop Webmail (A Web Based Email Client) using 'Nginx and Apache' in Arch Linux.md","filePath":"[post].md"}`),g={name:"201406/20140529 Install RainLoop Webmail (A Web Based Email Client) using 'Nginx and Apache' in Arch Linux.md"};function m(u,n,c,w,h,x){const a=l("Link");return s(),d("div",null,[n[37]||(n[37]=t("h1",{id:"在arch上使用nginx-apache安装rainloop-webmail",tabindex:"-1"},[o("在Arch上使用Nginx/Apache安装RainLoop Webmail "),t("a",{class:"header-anchor",href:"#在arch上使用nginx-apache安装rainloop-webmail","aria-label":"Permalink to “在Arch上使用Nginx/Apache安装RainLoop Webmail”"},"​")],-1)),n[38]||(n[38]=t("p",null,"Rainloop是一个使用PHP编写的，开源免费的网页邮件客户端。他支持包括Google、Yahoo、OutLook在内的主流的邮件服务器，当然，他也支持你自己的本地邮件服务器。它看起来大致就像使用IMAP和SMTP协议的MUA(邮件客户端)一样。",-1)),n[39]||(n[39]=t("h4",{id:"rainloop-示例",tabindex:"-1"},[o("RainLoop 示例 "),t("a",{class:"header-anchor",href:"#rainloop-示例","aria-label":"Permalink to “RainLoop 示例”"},"​")],-1)),t("p",null,[n[1]||(n[1]=o("可以看一下RainLoop作者安装的演示页面： ",-1)),e(a,{href:"http://demo.rainloop.net/"},{default:i(()=>[...n[0]||(n[0]=[o("http://demo.rainloop.net/",-1)])]),_:1}),n[2]||(n[2]=o("。",-1))]),n[40]||(n[40]=r('<p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux.jpg" alt="在Arch Linux上安装RainLoop"> 在Arch Linux上安装RainLoop</p><p>一旦在您的服务器部署上Rainloop，剩余要做的唯一的事情是通过Web浏览器访问您的Rainloop，并提供你正在使用的邮件服务器信息。</p><p>本教程包含了在 <strong>Arch Linux</strong>上的<strong>Rainloop</strong> 网页客户端的安装流程，包括如何进行配置 <strong>Apache</strong> 或 <strong>Nginx</strong>, 当然本教程使用修改Hosts的方式，从而避免了DNS的访问。</p><p>If you also need references on installing Rainloop on <strong>Debian</strong> and <strong>Red Hat</strong> systems visit the previous RainLoop Webmail article at.</p><p>如果你还是需要一篇在<strong>Debian</strong> 和 <strong>Red Hat</strong> 安装 RainLoop Webmail 的教程，你可以看这篇文章：</p>',5)),t("ul",null,[t("li",null,[e(a,{href:"http://www.tecmint.com/rainloop-webmail-a-modern-fast-web-based-email-client-for-linux/"},{default:i(()=>[...n[3]||(n[3]=[o("在 Debian 和 RedHat 系的 Linux 上安装 RainLoop Webmail",-1)])]),_:1})])]),n[41]||(n[41]=t("p",null,[o("以及在 "),t("strong",null,"Ubuntu"),o(" 服务器中安装 RainLoop Webmail 的教程，你可以看这篇文章：")],-1)),t("ul",null,[t("li",null,[e(a,{href:"http://linux.cn/article-2794-1.html"},{default:i(()=>[...n[4]||(n[4]=[o("如何在 Ubuntu server 中设置 RainLoop Webmail",-1)])]),_:1})])]),n[42]||(n[42]=t("h3",{id:"系统要求",tabindex:"-1"},[o("系统要求 "),t("a",{class:"header-anchor",href:"#系统要求","aria-label":"Permalink to “系统要求”"},"​")],-1)),n[43]||(n[43]=t("h4",{id:"对-nginx",tabindex:"-1"},[o("对 Nginx "),t("a",{class:"header-anchor",href:"#对-nginx","aria-label":"Permalink to “对 Nginx”"},"​")],-1)),t("ul",null,[t("li",null,[e(a,{href:"http://www.tecmint.com/install-nginx-php-mysql-with-mariadb-engine-and-phpmyadmin-in-arch-linux/"},{default:i(()=>[...n[5]||(n[5]=[o("在 Arch Linux 上安装 LEMP (Nginx, PHP, MySQL/MariaDB 和 PhpMyAdmin)",-1)])]),_:1})]),t("li",null,[e(a,{href:"http://www.tecmint.com/create-virtual-hosts-using-nginx-on-arch-linux/"},{default:i(()=>[...n[6]||(n[6]=[o("在 Nginx 上创建虚拟主机",-1)])]),_:1})])]),n[44]||(n[44]=t("h4",{id:"对-apache",tabindex:"-1"},[o("对 Apache "),t("a",{class:"header-anchor",href:"#对-apache","aria-label":"Permalink to “对 Apache”"},"​")],-1)),t("ul",null,[t("li",null,[e(a,{href:"http://www.tecmint.com/install-lamp-in-arch-linux/"},{default:i(()=>[...n[7]||(n[7]=[o("在 Arch Linux 上安装 LAMP (Linux, Apache, MySQL/MariaDB 和 PHP/PhpMyAdmin)",-1)])]),_:1})])]),n[45]||(n[45]=r(`<h3 id="step-1-在-nginx-或者-apache-上创建虚拟主机" tabindex="-1">Step 1:在 Nginx 或者 Apache 上创建虚拟主机### <a class="header-anchor" href="#step-1-在-nginx-或者-apache-上创建虚拟主机" aria-label="Permalink to “Step 1:在 Nginx 或者 Apache 上创建虚拟主机###”">​</a></h3><p><strong>1.</strong> 假设你已经如上面介绍的链接所述，配置好了您的服务器（<strong>Nginx</strong>或<strong>Apache</strong>），你需要做的第一件事是在Hosts文件里创建一个原始解析记录，以指向<strong>的Arch Linux</strong>系统的IP。</p><p>对于Linux系统，修改 <strong>/etc/hosts</strong> 文件并且在你的localhost条目之下添加 Rainloop 的虚拟域。如下：</p><pre><code>127.0.0.1	localhost.localdomain  localhost     rainloop.lan
192.168.1.33	rainloop.lan
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-01.jpg" alt="Add Domain Host Entry"> 添加域信息</p><p>如果是Windows系统，则修改 <strong>C:\\Windows\\System32\\drivers\\etc\\hosts</strong> 并且将接下来的内容添加到你的文件里：</p><pre><code>192.168.1.33       rainloop.lan
</code></pre><p><strong>2.</strong> 使用 <strong>ping</strong> 命令确认本地的 Rainloop 域名创建成功之后，然后在 <strong>Apache</strong> 或 <strong>Nginx</strong> 中创建所需的 <strong>虚拟主机</strong> 和 <strong>SSL</strong> 配置。</p><h4 id="nginx-虚拟主机" tabindex="-1">Nginx 虚拟主机 <a class="header-anchor" href="#nginx-虚拟主机" aria-label="Permalink to “Nginx 虚拟主机”">​</a></h4><p>在<strong>/etc/nginx/sites-available/</strong> 目录下使用如下命令创建一个名叫<strong>rainloop.lan</strong>的文件：</p><pre><code>$ sudo nano /etc/nginx/sites-available/rainloop.conf
</code></pre><p>添加如下的文件内容：</p><pre><code>server {
    listen 80;
    server_name rainloop.lan;

    rewrite        ^ https://$server_name$request_uri? permanent;
    access_log /var/log/nginx/rainloop.lan.access.log;
    error_log /var/log/nginx/rainloop.lan.error.log;
    root /srv/www/rainloop/;

    # serve static files
    location ~ ^/(images|javascript|js|css|flash|media|static)/  {
     root    /srv/www/rainloop/;
     expires 30d;
    }

    location / {
        index index.html index.htm index.php;
                autoindex on;
                autoindex_exact_size off;
                autoindex_localtime on;
 }

 location ^~ /data {
  deny all;
}

    location ~ \\.php$ {
        #fastcgi_pass 127.0.0.1:9000; (depending on your php-fpm socket configuration)
        fastcgi_pass unix:/run/php-fpm/php-fpm.sock;
        fastcgi_index index.php;
        include fastcgi.conf;
    }
 }
</code></pre><p>接下来创建SSL配置文件：</p><pre><code>$ sudo nano /etc/nginx/sites-available/rainloop-ssl.conf
</code></pre><p>添加如下内容：</p><pre><code>server {
    listen 443 ssl;
    server_name rainloop.lan;

       ssl_certificate     /etc/nginx/ssl/rainloop.lan.crt;
       ssl_certificate_key  /etc/nginx/ssl/rainloop.lan.key;
       ssl_session_cache    shared:SSL:1m;
       ssl_session_timeout  5m;
       ssl_ciphers  HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers  on;

    access_log /var/log/nginx/rainloop.lan.access.log;
    error_log /var/log/nginx/rainloop.lan.error.log;

   root /srv/www/rainloop/;

    # serve static files
    location ~ ^/(images|javascript|js|css|flash|media|static)/  {
      root    /srv/www/rainloop/;
      expires 30d;
    }

location ^~ /data {
  deny all;
}

    location / {
        index index.html index.htm index.php;
                autoindex on;
                autoindex_exact_size off;
                autoindex_localtime on;
 }

    location ~ \\.php$ {
        #fastcgi_pass 127.0.0.1:9000; (depending on your php-fpm socket configuration)
        fastcgi_pass unix:/run/php-fpm/php-fpm.sock;
        fastcgi_index index.php;
        include fastcgi.conf;
    }
 }
</code></pre><p>接下来将会自动生成<strong>Certificate</strong>和<strong>Keys</strong>文件，然后在文件中叫<strong>Common Name*的证书里中添加您的虚拟域名（</strong> rainloop.lan**）。</p><pre><code>$ sudo nginx_gen_ssl.sh
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-04.jpg" alt="Generate Certificate and Keys"> 生成证书和密钥</p><p>生成证书和SSL密钥后，创建Rainloop Web服务器<strong>根</strong>的文件路径（Rainloop PHP文件所在的位置），然后启用虚拟主机，并重新启动Nginx的守护进程，应用配置。</p><pre><code>$ sudo mkdir -p /srv/www/rainloop
$ sudo n2ensite rainloop
$ sudo n2ensite rainloop-ssl
$ sudo systemctl restart nginx
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-05.jpg" alt="Create RainLoop Web Director"> 创建RainLoop 网页向导</p><h4 id="apache-虚拟主机" tabindex="-1">Apache 虚拟主机 <a class="header-anchor" href="#apache-虚拟主机" aria-label="Permalink to “Apache 虚拟主机”">​</a></h4><p>在<strong>/etc/httpd/conf/sites-available/</strong>中创建 <strong>rainloop.conf</strong>文件：</p><pre><code>$ sudo nano /etc/httpd/conf/sites-available/rainloop.conf
</code></pre><p>添加如下内容：</p><pre><code>&lt;VirtualHost *:80&gt;
                ServerName rainloop.lan
                DocumentRoot &quot;/srv/www/rainloop/&quot;
                ServerAdmin you@example.com
                ErrorLog &quot;/var/log/httpd/rainloop-error_log&quot;
                TransferLog &quot;/var/log/httpd/rainloop-access_log&quot;

&lt;Directory /&gt;
    Options +Indexes +FollowSymLinks +ExecCGI
    AllowOverride All
    Order deny,allow
    Allow from all
Require all granted
&lt;/Directory&gt;

&lt;/VirtualHost&gt;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-06.jpg" alt="Create Apache Virtual Host"> 创建Apache虚拟主机</p><p>为Apache添加SSL支持：</p><pre><code>$ sudo nano /etc/httpd/conf/sites-available/rainloop-ssl.conf
</code></pre><p>添加如下文件内容：</p><pre><code>&lt;VirtualHost *:443&gt;
                ServerName rainloop.lan
                DocumentRoot &quot;/srv/www/rainloop/&quot;
                ServerAdmin you@example.com
                ErrorLog &quot;/var/log/httpd/rainloop-ssl-error_log&quot;
                TransferLog &quot;/var/log/httpd/rainloop-ssl-access_log&quot;

SSLEngine on
SSLCertificateFile &quot;/etc/httpd/conf/ssl/rainloop.lan.crt&quot;
SSLCertificateKeyFile &quot;/etc/httpd/conf/ssl/rainloop.lan.key&quot;

&lt;FilesMatch &quot;\\.(cgi|shtml|phtml|php)$&quot;&gt;
    SSLOptions +StdEnvVars
&lt;/FilesMatch&gt;

BrowserMatch &quot;MSIE [2-5]&quot; \\
         nokeepalive ssl-unclean-shutdown \\
         downgrade-1.0 force-response-1.0

CustomLog &quot;/var/log/httpd/ssl_request_log&quot; \\
          &quot;%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \\&quot;%r\\&quot; %b&quot;

&lt;Directory /&gt;
    Options +Indexes +FollowSymLinks +ExecCGI
    AllowOverride All
    Order deny,allow
    Allow from all
Require all granted
&lt;/Directory&gt;

&lt;/VirtualHost&gt;
</code></pre><p>接下来将会自动生成<strong>Certificate</strong>和<strong>Keys</strong>文件，然后在文件中叫<strong>Common Name*的证书里中添加您的虚拟域名（</strong> rainloop.lan**）。</p><pre><code>$ sudo apache_gen_ssl
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-07.jpg" alt="Create SSL Certificate and Keys"> 创建SSL证书和密钥</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-08.jpg" alt="Enter Organization Details"> 输入组织信息</p><p>After the Certificate and SSL keys are created, add Rainloop <strong>DocumentRoot</strong> path, then enable Virtual Hosts and restart Apache daemon to apply configurations. 在证书和密钥建立之后，创建 RainLoop 的 <strong>DocumentRoot</strong> 所指向的目录，之后激活虚拟主机，并且重启Apache应用设置。</p><pre><code>$ sudo mkdir -p /srv/www/rainloop
$ sudo a2ensite rainloop
$ sudo a2ensite rainloop-ssl
$ sudo systemctl restart httpd
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-09.jpg" alt="Enable Virtual Hosts"> 激活虚拟主机</p><h3 id="step-2-添加必要的php支持" tabindex="-1">Step 2: 添加必要的PHP支持 <a class="header-anchor" href="#step-2-添加必要的php支持" aria-label="Permalink to “Step 2: 添加必要的PHP支持”">​</a></h3><p><strong>3.</strong> 无论您使用的是<strong>Apache</strong>或<strong>Nginx</strong>Web服务器，您需要激活<strong>php.ini</strong>文件下中的PHP扩展，并将新服务器的<strong>DocumentRoot</strong>目录放到 open_basedir 配置中。</p><pre><code>$ sudo nano /etc/php/php.ini
</code></pre><p>找到并且取消如下的PHP扩展的注释（LCTT译注，即启用这些模块）：</p><pre><code>extension=iconv.so
extension=imap.so
extension=mcrypt.so
extension=mssql.so
extension=mysqli.so
extension=openssl.so ( enables IMAPS and SMTP SSL protocols on mail servers)
extension=pdo_mysql.so
</code></pre><p>open_basedir语句应该看起来类似如下：</p><pre><code>open_basedir = /srv/http/:/home/:/tmp/:/usr/share/pear/:/usr/share/webapps/:/etc/webapps/:/srv/www/
</code></pre><p><strong>4.</strong> 在修改好<strong>php.ini</strong>之后，重启你的服务器，然后检查 <strong>phpinfo()</strong> 输出，去看看<strong>SSL</strong>协议是否已经激活。</p><pre><code>----------对于 Apache Web 服务器----------
$ sudo systemctl restart httpd
</code></pre><hr><pre><code>----------对于 Nginx Web 服务器----------
$ sudo systemctl restart nginx
$ sudo systemctl restart php-fpm
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-10.png" alt="Check PHP Information"> 查看 PHP 信息</p><h3 id="step-3-下载和安装-rainloop-webmail" tabindex="-1">Step 3: 下载和安装 RainLoop Webmail <a class="header-anchor" href="#step-3-下载和安装-rainloop-webmail" aria-label="Permalink to “Step 3: 下载和安装 RainLoop Webmail”">​</a></h3><p><strong>5.</strong>现在可以从官方网站下载Rainloop应用并解压缩到文档根目录了，但是需要首先安装<strong>wget的</strong>和<strong>unzip</strong>程序（LCTT译注，如果你已经有了可以忽略此步）。</p><pre><code>$ sudo pacman -S unzip wget
</code></pre>`,55)),t("p",null,[n[10]||(n[10]=t("strong",null,"6.",-1)),n[11]||(n[11]=o(" 使用",-1)),n[12]||(n[12]=t("strong",null,"wget",-1)),n[13]||(n[13]=o("命令或通过使用浏览器访问[",-1)),e(a,{href:"http://rainloop.net/downloads/"},{default:i(()=>[...n[8]||(n[8]=[o("http://rainloop.net/downloads/",-1)])]),_:1}),n[14]||(n[14]=o("] ",-1)),e(a,{href:"http://rainloop.net/downloads/"},{default:i(()=>[...n[9]||(n[9]=[o("6",-1)])]),_:1}),n[15]||(n[15]=o("下载最新的源码包Rainloop 压缩包。",-1))]),n[46]||(n[46]=r(`<pre><code>$ wget http://repository.rainloop.net/v1/rainloop-latest.zip
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-11.png" alt="Download RainLoop Package"> 下载 RainLoop 包</p><p><strong>7.</strong> 下载过程完成后，解压Rainloop压缩包到虚拟主机文档根目录路径( <strong>/srv/www/rainloop/</strong> )。</p><pre><code>$ sudo unzip rainloop-latest.zip -d  /srv/www/rainloop/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-12.png" alt="Extract Rainloop Archive"> 解压</p><p><strong>8.</strong> 然后设置应用程序的默认路径下的权限。</p><pre><code>$ sudo chmod -R 755 /srv/www/rainloop/
$ sudo chown -R http:http /srv/www/rainloop/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-13.jpg" alt="Set Permission on RainLoop"> 设置权限</p><h3 id="step-4-通过网页配置rainloop" tabindex="-1">Step 4: 通过网页配置RainLoop### <a class="header-anchor" href="#step-4-通过网页配置rainloop" aria-label="Permalink to “Step 4: 通过网页配置RainLoop###”">​</a></h3><p><strong>9.</strong> Rainloop应用程序可以通过两种方式进行配置：使用浏览器或者系统shell。如果要在终端配置就打开和编辑位于<strong>/ srv/www/rainloop/data/_data_da047852f16d2bc7352b24240a2f1599/<em>default</em>/configs/</strong>的application.ini**文件。</p>`,10)),t("p",null,[n[17]||(n[17]=t("strong",null,"10.",-1)),n[18]||(n[18]=o(" 若要从浏览器访问管理界面，使用下面的URL地址** ",-1)),e(a,{href:"https://rainloop.lan/?admin**%EF%BC%8C%E7%84%B6%E5%90%8E%E6%8F%90%E4%BE%9B%E8%BE%93%E5%85%A5%E9%BB%98%E8%AE%A4%E7%9A%84%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A0%81%EF%BC%8C%E5%A6%82%E4%B8%8B%EF%BC%9A"},{default:i(()=>[...n[16]||(n[16]=[o("https://rainloop.lan/?admin**，然后提供输入默认的应用程序用户名密码，如下：",-1)])]),_:1})]),n[47]||(n[47]=r(`<pre><code>User= admin
Password= 12345
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-14.png" alt="Rainloop Web Interface"> Rainloop Web 界面</p><p><strong>11.</strong> 首次登录后，你会被警示需要更改默认密码，所以我劝你做这一点。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-15.png" alt="Change Default Password"> 修改默认 Password</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-16.png" alt="Set New Admin Password"> 设置新的 Admin Password</p><p><strong>12.</strong> 如果您要启用<strong>Contact</strong>（联系人）功能，就登录到MySQL数据库并创建一个新的数据库及其用户，然后提供在<strong>Contacts</strong>字段里面输入数据库信息。</p><pre><code>mysql -u root -p
create database if not exists rainloop;
create user rainloop_user@localhost identified by “password”;
grant all privileges on rainloop.* to rainloop_user@localhost;
flush privileges;
exit;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-17.png" alt="Enable Contacts in RainLoop"> 在 RainLoop 中激活联系人</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-18.png" alt="Enter Contact Database Details"> 添加联系人数据库配置</p><p><strong>13.</strong> 默认情况下Rainloop提供了** Gmail<strong>，</strong>Yahoo<strong>和</strong>Outlook**的邮件服务器的配置文件，但是你如果愿意，你也可以添加其他的邮件服务器域。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-19.png" alt="Default Mail Domains"> 默认 Mail 域</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-20.png" alt="Add New Domain"> 添加新域</p>`,12)),t("p",null,[n[20]||(n[20]=t("strong",null,"14.",-1)),n[21]||(n[21]=o(" 登录你的邮件服务器，访问** ",-1)),e(a,{href:"https://rainloop.lan"},{default:i(()=>[...n[19]||(n[19]=[o("https://rainloop.lan",-1)])]),_:1}),n[22]||(n[22]=o("**，并提供您的域名服务器验证信息。",-1))]),n[48]||(n[48]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-21.png",alt:"Login to Mail Domain"}),o(" 登录到Yahoo邮件页面")],-1)),n[49]||(n[49]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-22.png",alt:"Login to Gmail Domain"}),o(" 登录Gmail")],-1)),n[50]||(n[50]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-23.png",alt:"RainLoop Email Interface"}),o(" RainLoop 登录后的Email 界面")],-1)),t("p",null,[n[24]||(n[24]=o("想要了解更多的文件，可以访问：",-1)),e(a,{href:"http://rainloop.net/docs/"},{default:i(()=>[...n[23]||(n[23]=[o("http://rainloop.net/docs/",-1)])]),_:1}),n[25]||(n[25]=o(".",-1))]),n[51]||(n[51]=t("p",null,"通过Rainloop你可以从浏览器中访问具有Internet连接的任何邮件服务器。唯一的缺憾就是在Arch Linux下使用Rainloop应用的话，少一个修改电子邮件帐户密码的poppassd插件包。",-1)),n[52]||(n[52]=t("hr",null,null,-1)),t("p",null,[n[27]||(n[27]=o("via: ",-1)),e(a,{href:"http://www.tecmint.com/install-rainloop-webmail-in-arch-linux/"},{default:i(()=>[...n[26]||(n[26]=[o("http://www.tecmint.com/install-rainloop-webmail-in-arch-linux/",-1)])]),_:1})]),t("p",null,[n[30]||(n[30]=o("译者：",-1)),e(a,{href:"https://github.com/MikeCoder"},{default:i(()=>[...n[28]||(n[28]=[o("MikeCoder",-1)])]),_:1}),n[31]||(n[31]=o(" 校对：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...n[29]||(n[29]=[o("wxy",-1)])]),_:1})]),t("p",null,[n[34]||(n[34]=o("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[32]||(n[32]=[o("LCTT",-1)])]),_:1}),n[35]||(n[35]=o(" 原创翻译，",-1)),e(a,{href:"http://linux.cn/"},{default:i(()=>[...n[33]||(n[33]=[o("Linux中国",-1)])]),_:1}),n[36]||(n[36]=o(" 荣誉推出",-1))])])}const R=p(g,[["render",m]]);export{A as __pageData,R as default};
