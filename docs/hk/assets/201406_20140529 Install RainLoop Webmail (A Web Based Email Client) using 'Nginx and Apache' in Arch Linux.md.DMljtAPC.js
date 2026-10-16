import{_ as p,a0 as l,w as s,s as d,I as t,x as o,a1 as e,A as i,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const A=JSON.parse(`{"title":"在Arch上使用Nginx/Apache安裝RainLoop Webmail | LCTT x X-CMD","titleTemplate":false,"description":"在Arch上使用Nginx/Apache安裝RainLoop Webmail | LCTT (201406) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在Arch上使用Nginx/Apache安裝RainLoop Webmail | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在Arch上使用Nginx/Apache安裝RainLoop Webmail | LCTT (201406) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201406/20140529 Install RainLoop Webmail (A Web Based Email Client) using 'Nginx and Apache' in Arch Linux","title":"在Arch上使用Nginx/Apache安裝RainLoop Webmail","tag":"201406","desc":""},"relativePath":"201406/20140529 Install RainLoop Webmail (A Web Based Email Client) using 'Nginx and Apache' in Arch Linux.md","filePath":"[post].md"}`),g={name:"201406/20140529 Install RainLoop Webmail (A Web Based Email Client) using 'Nginx and Apache' in Arch Linux.md"};function m(u,n,c,w,h,x){const a=l("Link");return s(),d("div",null,[n[37]||(n[37]=t("h1",{id:"在arch上使用nginx-apache安裝rainloop-webmail",tabindex:"-1"},[o("在Arch上使用Nginx/Apache安裝RainLoop Webmail "),t("a",{class:"header-anchor",href:"#在arch上使用nginx-apache安裝rainloop-webmail","aria-label":"Permalink to “在Arch上使用Nginx/Apache安裝RainLoop Webmail”"},"​")],-1)),n[38]||(n[38]=t("p",null,"Rainloop是一個使用PHP編寫的，開源免費的網頁郵件客户端。他支持包括Google、Yahoo、OutLook在內的主流的郵件服務器，當然，他也支持你自己的本地郵件服務器。它看起來大致就像使用IMAP和SMTP協議的MUA(郵件客户端)一樣。",-1)),n[39]||(n[39]=t("h4",{id:"rainloop-示例",tabindex:"-1"},[o("RainLoop 示例 "),t("a",{class:"header-anchor",href:"#rainloop-示例","aria-label":"Permalink to “RainLoop 示例”"},"​")],-1)),t("p",null,[n[1]||(n[1]=o("可以看一下RainLoop作者安裝的演示頁面： ",-1)),e(a,{href:"http://demo.rainloop.net/"},{default:i(()=>[...n[0]||(n[0]=[o("http://demo.rainloop.net/",-1)])]),_:1}),n[2]||(n[2]=o("。",-1))]),n[40]||(n[40]=r('<p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux.jpg" alt="在Arch Linux上安裝RainLoop"> 在Arch Linux上安裝RainLoop</p><p>一旦在您的服務器部署上Rainloop，剩餘要做的唯一的事情是通過Web瀏覽器訪問您的Rainloop，並提供你正在使用的郵件服務器信息。</p><p>本教程包含了在 <strong>Arch Linux</strong>上的<strong>Rainloop</strong> 網頁客户端的安裝流程，包括如何進行配置 <strong>Apache</strong> 或 <strong>Nginx</strong>, 當然本教程使用修改Hosts的方式，從而避免了DNS的訪問。</p><p>If you also need references on installing Rainloop on <strong>Debian</strong> and <strong>Red Hat</strong> systems visit the previous RainLoop Webmail article at.</p><p>如果你還是需要一篇在<strong>Debian</strong> 和 <strong>Red Hat</strong> 安裝 RainLoop Webmail 的教程，你可以看這篇文章：</p>',5)),t("ul",null,[t("li",null,[e(a,{href:"http://www.tecmint.com/rainloop-webmail-a-modern-fast-web-based-email-client-for-linux/"},{default:i(()=>[...n[3]||(n[3]=[o("在 Debian 和 RedHat 系的 Linux 上安裝 RainLoop Webmail",-1)])]),_:1})])]),n[41]||(n[41]=t("p",null,[o("以及在 "),t("strong",null,"Ubuntu"),o(" 服務器中安裝 RainLoop Webmail 的教程，你可以看這篇文章：")],-1)),t("ul",null,[t("li",null,[e(a,{href:"http://linux.cn/article-2794-1.html"},{default:i(()=>[...n[4]||(n[4]=[o("如何在 Ubuntu server 中設置 RainLoop Webmail",-1)])]),_:1})])]),n[42]||(n[42]=t("h3",{id:"系統要求",tabindex:"-1"},[o("系統要求 "),t("a",{class:"header-anchor",href:"#系統要求","aria-label":"Permalink to “系統要求”"},"​")],-1)),n[43]||(n[43]=t("h4",{id:"對-nginx",tabindex:"-1"},[o("對 Nginx "),t("a",{class:"header-anchor",href:"#對-nginx","aria-label":"Permalink to “對 Nginx”"},"​")],-1)),t("ul",null,[t("li",null,[e(a,{href:"http://www.tecmint.com/install-nginx-php-mysql-with-mariadb-engine-and-phpmyadmin-in-arch-linux/"},{default:i(()=>[...n[5]||(n[5]=[o("在 Arch Linux 上安裝 LEMP (Nginx, PHP, MySQL/MariaDB 和 PhpMyAdmin)",-1)])]),_:1})]),t("li",null,[e(a,{href:"http://www.tecmint.com/create-virtual-hosts-using-nginx-on-arch-linux/"},{default:i(()=>[...n[6]||(n[6]=[o("在 Nginx 上創建虛擬主機",-1)])]),_:1})])]),n[44]||(n[44]=t("h4",{id:"對-apache",tabindex:"-1"},[o("對 Apache "),t("a",{class:"header-anchor",href:"#對-apache","aria-label":"Permalink to “對 Apache”"},"​")],-1)),t("ul",null,[t("li",null,[e(a,{href:"http://www.tecmint.com/install-lamp-in-arch-linux/"},{default:i(()=>[...n[7]||(n[7]=[o("在 Arch Linux 上安裝 LAMP (Linux, Apache, MySQL/MariaDB 和 PHP/PhpMyAdmin)",-1)])]),_:1})])]),n[45]||(n[45]=r(`<h3 id="step-1-在-nginx-或者-apache-上創建虛擬主機" tabindex="-1">Step 1:在 Nginx 或者 Apache 上創建虛擬主機### <a class="header-anchor" href="#step-1-在-nginx-或者-apache-上創建虛擬主機" aria-label="Permalink to “Step 1:在 Nginx 或者 Apache 上創建虛擬主機###”">​</a></h3><p><strong>1.</strong> 假設你已經如上面介紹的鏈接所述，配置好了您的服務器（<strong>Nginx</strong>或<strong>Apache</strong>），你需要做的第一件事是在Hosts文件裏創建一個原始解析記錄，以指向<strong>的Arch Linux</strong>系統的IP。</p><p>對於Linux系統，修改 <strong>/etc/hosts</strong> 文件並且在你的localhost條目之下添加 Rainloop 的虛擬域。如下：</p><pre><code>127.0.0.1	localhost.localdomain  localhost     rainloop.lan
192.168.1.33	rainloop.lan
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-01.jpg" alt="Add Domain Host Entry"> 添加域信息</p><p>如果是Windows系統，則修改 <strong>C:\\Windows\\System32\\drivers\\etc\\hosts</strong> 並且將接下來的內容添加到你的文件裏：</p><pre><code>192.168.1.33       rainloop.lan
</code></pre><p><strong>2.</strong> 使用 <strong>ping</strong> 命令確認本地的 Rainloop 域名創建成功之後，然後在 <strong>Apache</strong> 或 <strong>Nginx</strong> 中創建所需的 <strong>虛擬主機</strong> 和 <strong>SSL</strong> 配置。</p><h4 id="nginx-虛擬主機" tabindex="-1">Nginx 虛擬主機 <a class="header-anchor" href="#nginx-虛擬主機" aria-label="Permalink to “Nginx 虛擬主機”">​</a></h4><p>在<strong>/etc/nginx/sites-available/</strong> 目錄下使用如下命令創建一個名叫<strong>rainloop.lan</strong>的文件：</p><pre><code>$ sudo nano /etc/nginx/sites-available/rainloop.conf
</code></pre><p>添加如下的文件內容：</p><pre><code>server {
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
</code></pre><p>接下來創建SSL配置文件：</p><pre><code>$ sudo nano /etc/nginx/sites-available/rainloop-ssl.conf
</code></pre><p>添加如下內容：</p><pre><code>server {
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
</code></pre><p>接下來將會自動生成<strong>Certificate</strong>和<strong>Keys</strong>文件，然後在文件中叫<strong>Common Name*的證書裏中添加您的虛擬域名（</strong> rainloop.lan**）。</p><pre><code>$ sudo nginx_gen_ssl.sh
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-04.jpg" alt="Generate Certificate and Keys"> 生成證書和密鑰</p><p>生成證書和SSL密鑰後，創建Rainloop Web服務器<strong>根</strong>的文件路徑（Rainloop PHP文件所在的位置），然後啓用虛擬主機，並重新啓動Nginx的守護進程，應用配置。</p><pre><code>$ sudo mkdir -p /srv/www/rainloop
$ sudo n2ensite rainloop
$ sudo n2ensite rainloop-ssl
$ sudo systemctl restart nginx
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-05.jpg" alt="Create RainLoop Web Director"> 創建RainLoop 網頁嚮導</p><h4 id="apache-虛擬主機" tabindex="-1">Apache 虛擬主機 <a class="header-anchor" href="#apache-虛擬主機" aria-label="Permalink to “Apache 虛擬主機”">​</a></h4><p>在<strong>/etc/httpd/conf/sites-available/</strong>中創建 <strong>rainloop.conf</strong>文件：</p><pre><code>$ sudo nano /etc/httpd/conf/sites-available/rainloop.conf
</code></pre><p>添加如下內容：</p><pre><code>&lt;VirtualHost *:80&gt;
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
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-06.jpg" alt="Create Apache Virtual Host"> 創建Apache虛擬主機</p><p>為Apache添加SSL支持：</p><pre><code>$ sudo nano /etc/httpd/conf/sites-available/rainloop-ssl.conf
</code></pre><p>添加如下文件內容：</p><pre><code>&lt;VirtualHost *:443&gt;
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
</code></pre><p>接下來將會自動生成<strong>Certificate</strong>和<strong>Keys</strong>文件，然後在文件中叫<strong>Common Name*的證書裏中添加您的虛擬域名（</strong> rainloop.lan**）。</p><pre><code>$ sudo apache_gen_ssl
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-07.jpg" alt="Create SSL Certificate and Keys"> 創建SSL證書和密鑰</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-08.jpg" alt="Enter Organization Details"> 輸入組織信息</p><p>After the Certificate and SSL keys are created, add Rainloop <strong>DocumentRoot</strong> path, then enable Virtual Hosts and restart Apache daemon to apply configurations. 在證書和密鑰建立之後，創建 RainLoop 的 <strong>DocumentRoot</strong> 所指向的目錄，之後激活虛擬主機，並且重啓Apache應用設置。</p><pre><code>$ sudo mkdir -p /srv/www/rainloop
$ sudo a2ensite rainloop
$ sudo a2ensite rainloop-ssl
$ sudo systemctl restart httpd
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-09.jpg" alt="Enable Virtual Hosts"> 激活虛擬主機</p><h3 id="step-2-添加必要的php支持" tabindex="-1">Step 2: 添加必要的PHP支持 <a class="header-anchor" href="#step-2-添加必要的php支持" aria-label="Permalink to “Step 2: 添加必要的PHP支持”">​</a></h3><p><strong>3.</strong> 無論您使用的是<strong>Apache</strong>或<strong>Nginx</strong>Web服務器，您需要激活<strong>php.ini</strong>文件下中的PHP擴展，並將新服務器的<strong>DocumentRoot</strong>目錄放到 open_basedir 配置中。</p><pre><code>$ sudo nano /etc/php/php.ini
</code></pre><p>找到並且取消如下的PHP擴展的註釋（LCTT譯註，即啓用這些模組）：</p><pre><code>extension=iconv.so
extension=imap.so
extension=mcrypt.so
extension=mssql.so
extension=mysqli.so
extension=openssl.so ( enables IMAPS and SMTP SSL protocols on mail servers)
extension=pdo_mysql.so
</code></pre><p>open_basedir語句應該看起來類似如下：</p><pre><code>open_basedir = /srv/http/:/home/:/tmp/:/usr/share/pear/:/usr/share/webapps/:/etc/webapps/:/srv/www/
</code></pre><p><strong>4.</strong> 在修改好<strong>php.ini</strong>之後，重啓你的服務器，然後檢查 <strong>phpinfo()</strong> 輸出，去看看<strong>SSL</strong>協議是否已經激活。</p><pre><code>----------對於 Apache Web 服務器----------
$ sudo systemctl restart httpd
</code></pre><hr><pre><code>----------對於 Nginx Web 服務器----------
$ sudo systemctl restart nginx
$ sudo systemctl restart php-fpm
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-10.png" alt="Check PHP Information"> 查看 PHP 信息</p><h3 id="step-3-下載和安裝-rainloop-webmail" tabindex="-1">Step 3: 下載和安裝 RainLoop Webmail <a class="header-anchor" href="#step-3-下載和安裝-rainloop-webmail" aria-label="Permalink to “Step 3: 下載和安裝 RainLoop Webmail”">​</a></h3><p><strong>5.</strong>現在可以從官方網站下載Rainloop應用並解壓縮到文檔根目錄了，但是需要首先安裝<strong>wget的</strong>和<strong>unzip</strong>程序（LCTT譯註，如果你已經有了可以忽略此步）。</p><pre><code>$ sudo pacman -S unzip wget
</code></pre>`,55)),t("p",null,[n[10]||(n[10]=t("strong",null,"6.",-1)),n[11]||(n[11]=o(" 使用",-1)),n[12]||(n[12]=t("strong",null,"wget",-1)),n[13]||(n[13]=o("命令或通過使用瀏覽器訪問[",-1)),e(a,{href:"http://rainloop.net/downloads/"},{default:i(()=>[...n[8]||(n[8]=[o("http://rainloop.net/downloads/",-1)])]),_:1}),n[14]||(n[14]=o("] ",-1)),e(a,{href:"http://rainloop.net/downloads/"},{default:i(()=>[...n[9]||(n[9]=[o("6",-1)])]),_:1}),n[15]||(n[15]=o("下載最新的源碼包Rainloop 壓縮包。",-1))]),n[46]||(n[46]=r(`<pre><code>$ wget http://repository.rainloop.net/v1/rainloop-latest.zip
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-11.png" alt="Download RainLoop Package"> 下載 RainLoop 包</p><p><strong>7.</strong> 下載過程完成後，解壓Rainloop壓縮包到虛擬主機文檔根目錄路徑( <strong>/srv/www/rainloop/</strong> )。</p><pre><code>$ sudo unzip rainloop-latest.zip -d  /srv/www/rainloop/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-12.png" alt="Extract Rainloop Archive"> 解壓</p><p><strong>8.</strong> 然後設置應用程序的默認路徑下的權限。</p><pre><code>$ sudo chmod -R 755 /srv/www/rainloop/
$ sudo chown -R http:http /srv/www/rainloop/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-13.jpg" alt="Set Permission on RainLoop"> 設置權限</p><h3 id="step-4-通過網頁配置rainloop" tabindex="-1">Step 4: 通過網頁配置RainLoop### <a class="header-anchor" href="#step-4-通過網頁配置rainloop" aria-label="Permalink to “Step 4: 通過網頁配置RainLoop###”">​</a></h3><p><strong>9.</strong> Rainloop應用程序可以通過兩種方式進行配置：使用瀏覽器或者系統shell。如果要在終端配置就打開和編輯位於<strong>/ srv/www/rainloop/data/_data_da047852f16d2bc7352b24240a2f1599/<em>default</em>/configs/</strong>的application.ini**文件。</p>`,10)),t("p",null,[n[17]||(n[17]=t("strong",null,"10.",-1)),n[18]||(n[18]=o(" 若要從瀏覽器訪問管理界面，使用下面的URL地址** ",-1)),e(a,{href:"https://rainloop.lan/?admin**%EF%BC%8C%E7%84%B6%E5%BE%8C%E6%8F%90%E4%BE%9B%E8%BC%B8%E5%85%A5%E9%BB%98%E8%AA%8D%E7%9A%84%E6%87%89%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%94%A8%E6%88%B7%E5%90%8D%E5%AF%86%E7%A2%BC%EF%BC%8C%E5%A6%82%E4%B8%8B%EF%BC%9A"},{default:i(()=>[...n[16]||(n[16]=[o("https://rainloop.lan/?admin**，然後提供輸入默認的應用程序用户名密碼，如下：",-1)])]),_:1})]),n[47]||(n[47]=r(`<pre><code>User= admin
Password= 12345
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-14.png" alt="Rainloop Web Interface"> Rainloop Web 界面</p><p><strong>11.</strong> 首次登錄後，你會被警示需要更改默認密碼，所以我勸你做這一點。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-15.png" alt="Change Default Password"> 修改默認 Password</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-16.png" alt="Set New Admin Password"> 設置新的 Admin Password</p><p><strong>12.</strong> 如果您要啓用<strong>Contact</strong>（聯繫人）功能，就登錄到MySQL資料庫並創建一個新的資料庫及其用户，然後提供在<strong>Contacts</strong>字段裏面輸入資料庫信息。</p><pre><code>mysql -u root -p
create database if not exists rainloop;
create user rainloop_user@localhost identified by “password”;
grant all privileges on rainloop.* to rainloop_user@localhost;
flush privileges;
exit;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-17.png" alt="Enable Contacts in RainLoop"> 在 RainLoop 中激活聯繫人</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-18.png" alt="Enter Contact Database Details"> 添加聯繫人資料庫配置</p><p><strong>13.</strong> 默認情況下Rainloop提供了** Gmail<strong>，</strong>Yahoo<strong>和</strong>Outlook**的郵件服務器的配置文件，但是你如果願意，你也可以添加其他的郵件服務器域。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-19.png" alt="Default Mail Domains"> 默認 Mail 域</p><p><img src="http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-20.png" alt="Add New Domain"> 添加新域</p>`,12)),t("p",null,[n[20]||(n[20]=t("strong",null,"14.",-1)),n[21]||(n[21]=o(" 登錄你的郵件服務器，訪問** ",-1)),e(a,{href:"https://rainloop.lan"},{default:i(()=>[...n[19]||(n[19]=[o("https://rainloop.lan",-1)])]),_:1}),n[22]||(n[22]=o("**，並提供您的域名服務器驗證信息。",-1))]),n[48]||(n[48]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-21.png",alt:"Login to Mail Domain"}),o(" 登錄到Yahoo郵件頁面")],-1)),n[49]||(n[49]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-22.png",alt:"Login to Gmail Domain"}),o(" 登錄Gmail")],-1)),n[50]||(n[50]=t("p",null,[t("img",{src:"http://www.tecmint.com/wp-content/uploads/2014/05/Install-RainLoop-in-Arch-Linux-23.png",alt:"RainLoop Email Interface"}),o(" RainLoop 登錄後的Email 界面")],-1)),t("p",null,[n[24]||(n[24]=o("想要了解更多的文件，可以訪問：",-1)),e(a,{href:"http://rainloop.net/docs/"},{default:i(()=>[...n[23]||(n[23]=[o("http://rainloop.net/docs/",-1)])]),_:1}),n[25]||(n[25]=o(".",-1))]),n[51]||(n[51]=t("p",null,"通過Rainloop你可以從瀏覽器中訪問具有Internet連接的任何郵件服務器。唯一的缺憾就是在Arch Linux下使用Rainloop應用的話，少一個修改電子郵件帳户密碼的poppassd插件包。",-1)),n[52]||(n[52]=t("hr",null,null,-1)),t("p",null,[n[27]||(n[27]=o("via: ",-1)),e(a,{href:"http://www.tecmint.com/install-rainloop-webmail-in-arch-linux/"},{default:i(()=>[...n[26]||(n[26]=[o("http://www.tecmint.com/install-rainloop-webmail-in-arch-linux/",-1)])]),_:1})]),t("p",null,[n[30]||(n[30]=o("譯者：",-1)),e(a,{href:"https://github.com/MikeCoder"},{default:i(()=>[...n[28]||(n[28]=[o("MikeCoder",-1)])]),_:1}),n[31]||(n[31]=o(" 校對：",-1)),e(a,{href:"https://github.com/wxy"},{default:i(()=>[...n[29]||(n[29]=[o("wxy",-1)])]),_:1})]),t("p",null,[n[34]||(n[34]=o("本文由 ",-1)),e(a,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[32]||(n[32]=[o("LCTT",-1)])]),_:1}),n[35]||(n[35]=o(" 原創翻譯，",-1)),e(a,{href:"http://linux.cn/"},{default:i(()=>[...n[33]||(n[33]=[o("Linux中國",-1)])]),_:1}),n[36]||(n[36]=o(" 榮譽推出",-1))])])}const R=p(g,[["render",m]]);export{A as __pageData,R as default};
