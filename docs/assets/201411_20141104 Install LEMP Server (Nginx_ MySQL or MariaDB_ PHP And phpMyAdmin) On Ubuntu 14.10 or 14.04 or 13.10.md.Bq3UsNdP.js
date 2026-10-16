import{_ as a,a0 as s,w as d,s as l,ao as o,I as e,x as p,a1 as t,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141104 Install LEMP Server (Nginx, MySQL or MariaDB, PHP And phpMyAdmin) On Ubuntu 14.10 or 14.04 or 13.10","title":"在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin）","tag":"201411","desc":""},"relativePath":"201411/20141104 Install LEMP Server (Nginx, MySQL or MariaDB, PHP And phpMyAdmin) On Ubuntu 14.10 or 14.04 or 13.10.md","filePath":"[post].md"}'),g={name:"201411/20141104 Install LEMP Server (Nginx, MySQL or MariaDB, PHP And phpMyAdmin) On Ubuntu 14.10 or 14.04 or 13.10.md"};function u(h,n,m,c,x,y){const r=s("Link");return d(),l("div",null,[n[24]||(n[24]=o(`<h1 id="在-ubuntu-14-10-14-04-13-10-上安装-lemp-服务-nginx-mysql-或-mariadb-php-和-phpmyadmin" tabindex="-1">在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） <a class="header-anchor" href="#在-ubuntu-14-10-14-04-13-10-上安装-lemp-服务-nginx-mysql-或-mariadb-php-和-phpmyadmin" aria-label="Permalink to “在 Ubuntu 14.10/14.04/13.10 上安装 LEMP 服务（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin）”">​</a></h1><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/lemp.jpg" alt=""></p><p><strong>LEMP</strong>是一个操作系统和几个开源软件包的合称。缩写LEMP来自 <strong>L</strong> inux，Nginx（发音是 <strong>e</strong> ngine-x）HTTP服务器， <strong>M</strong> ySQL数据库，和 <strong>P</strong> HP/ <strong>P</strong> erl/ <strong>P</strong> ython的首字母。</p><p>在这篇教程里，让我们看一下如何在 Ubuntu 14.10 上安装 Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin。</p><h3 id="安装nginx" tabindex="-1">安装Nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to “安装Nginx”">​</a></h3><p><strong>Nginx</strong> (发音是engine-x)是一个免费的、开源的、高性能HTTP服务器和反向代理，也可以用作IMAP/POP3代理服务器，它是由Igor Sysoev开发。</p><p>要安装Nginx，在你的终端里输入下面的命令：</p><p><strong>注意</strong>：如果你的系统里已经安装了apache2，先卸载掉以避免冲突。要卸载apache，运行下面的命令：</p><pre><code>sudo apt-get purge apache2*
sudo apt-get autoremove -y
</code></pre><p>现在，用下面的命令安装nginx：</p><pre><code>sudo apt-get install nginx
</code></pre><p>用下面的命令启用Nginx服务：</p><pre><code>sudo service nginx start
</code></pre><h3 id="测试-nginx" tabindex="-1">测试 nginx <a class="header-anchor" href="#测试-nginx" aria-label="Permalink to “测试 nginx”">​</a></h3>`,14)),e("p",null,[n[1]||(n[1]=p("打开你的浏览器访问",-1)),t(r,{href:"http://xn--IP-im8ckc/%E6%88%96%E8%80%85http://localhost/%E3%80%82%E5%B0%86%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E7%B1%BB%E4%BC%BC%E4%B8%8B%E9%9D%A2%E7%9A%84%E6%88%AA%E5%9B%BE%E3%80%82"},{default:i(()=>[...n[0]||(n[0]=[p("http://IP地址/或者http://localhost/。将可以看到类似下面的截图。",-1)])]),_:1})]),n[25]||(n[25]=o(`<p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/10/Welcome-to-nginx-Mozilla-Firefox_005.png" alt=""></p><h3 id="配置-nginx" tabindex="-1">配置 Nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to “配置 Nginx”">​</a></h3><p>用任意文本编辑器打开文件<strong>/etc/nginx/nginx.conf</strong></p><pre><code>sudo nano /etc/nginx/nginx.conf
</code></pre><p>设置 worker_processes（例如，你系统里CPU数目）。查看CPU数目，可以使用命令“lscpu”。在我这里是“1”。所以我把这个值设为1。</p><pre><code>worker_processes 1;
</code></pre><p>重启 Nginx 服务：</p><pre><code>sudo service nginx restart
</code></pre><p>默认虚拟主机（服务器模块）定义在文件<strong>/etc/nginx/sites-available/default</strong>里。</p><p>用任意文本编辑器打开文件/etc/nginx/sites-available/default。</p><pre><code>sudo nano /etc/nginx/sites-available/default
</code></pre><p>在Server区域里，按如下设置服务器FQDN或IP地址。确保你增加了index.php这一行。</p><pre><code>[...]
server {
      listen 80 default_server;
      listen [::]:80 default_server ipv6only=on;
      root /usr/share/nginx/html;
      index index.php index.html index.htm;
      # Make site accessible from http://localhost/
      server_name server.unixmen.local;
[...]
</code></pre><p>这里面</p><ul><li><strong>listen 80;</strong> –&gt; 监听ipv4端口</li><li><strong>listen [::]:80 default_server ipv6only=on;</strong> –&gt; 监听ipv6宽口</li><li><strong>root /usr/share/nginx/html;</strong> –&gt; 文件根目录</li><li><strong>server_name server.unixmen.local;</strong> –&gt; 服务器FQDN</li></ul><p>现在，向下滚动找到区域#location <strong>~ .php$</strong>。去掉注释并按如下修改：</p><pre><code> location ~ \\.php$ {
         try_files $uri =404;   ---------&gt; Add this line
         fastcgi_split_path_info ^(.+\\.php)(/.+)$;
         #       # NOTE: You should have &quot;cgi.fix_pathinfo = 0;&quot; in php.ini
         #
         #       # With php5-cgi alone:
         #       fastcgi_pass 127.0.0.1:9000;
         #       # With php5-fpm:
         fastcgi_pass unix:/var/run/php5-fpm.sock;
         fastcgi_index index.php;
         include fastcgi.conf;
    }
</code></pre><p>这里面，我增加了额外一行<strong>‘try_files $uri =404;’</strong>用于避免0day漏洞。</p><p>保存文件并退出。</p><h3 id="测试-nginx-配置" tabindex="-1">测试 nginx 配置 <a class="header-anchor" href="#测试-nginx-配置" aria-label="Permalink to “测试 nginx 配置”">​</a></h3><p>使用下面的命令测试nginx配置是否存在语法错误：</p><pre><code>sudo nginx -t
</code></pre><p>典型输出：</p><pre><code>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
</code></pre><p>最后重启nginx服务</p><pre><code>sudo service nginx restart
</code></pre><h3 id="安装-mysql" tabindex="-1">安装 MySQL <a class="header-anchor" href="#安装-mysql" aria-label="Permalink to “安装 MySQL”">​</a></h3><p><strong>MySQL</strong>是一个关系型数据库管理系统（RDBMS），作为服务启动提供给多用户访问多种数据库，尽管SQLite可能有更多的嵌入式部署。</p><pre><code>sudo apt-get install mysql-server mysql-client
</code></pre><p>在安装过程中，会提示你设置MySQL超级用户密码。输入密码并按确认。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_001.png" alt=""></p><p>重新输入密码。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_0021.png" alt=""></p><p>现在，MySQL服务器就安装好了。</p><p>你可以用下面的命令检查 MySQL 服务器状态：</p><pre><code>sudo service mysql status
</code></pre><p>典型输出：</p><pre><code>mysql start/running, process 5671
</code></pre><p><strong>注意</strong>：如果你希望使用MariaDB而不是MySQL，可以参考下面的步骤。</p><h3 id="安装-mariadb" tabindex="-1">安装 MariaDB <a class="header-anchor" href="#安装-mariadb" aria-label="Permalink to “安装 MariaDB”">​</a></h3><p><strong>MariaDB</strong>是 MySQL 的一个直接替代软件。它是一个稳定、可扩展又可靠的SQL服务器，包含许多增强功能。</p><p>首先，如果有的话你得先卸载掉 MySQL。要完全卸载 MySQL 包括配置文件，输入如下命令：</p><pre><code>sudo apt-get purge mysql*
</code></pre><p>运行如下命令清除不需要的软件包。</p><pre><code>sudo apt-get autoremove
</code></pre><p>在卸载完MySQL后，运行如下命令安装MariaDB。</p><pre><code>sudo apt-get install mariadb-server mariadb-client
</code></pre>`,47)),e("p",null,[n[3]||(n[3]=p("另外，如果你希望体验最新版的MariaDB，可以从",-1)),t(r,{href:"https://downloads.mariadb.org/mariadb/repositories/#mirror=tsinghua"},{default:i(()=>[...n[2]||(n[2]=[p("MariaDB仓库",-1)])]),_:1}),n[4]||(n[4]=p("安装。运行下面的命令添加PPA。在写这篇文章的时候，MariaDB PPA还没有更新 Ubuntu 14.10。不过，我们还是可以使用 Ubuntu 14.04 的仓库来替代。",-1))]),n[26]||(n[26]=o(`<pre><code>sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
sudo add-apt-repository &#39;deb http://sgp1.mirrors.digitalocean.com/mariadb/repo/5.5/ubuntu trusty main&#39;
</code></pre><p>用如下命令更新一下软件源列表，然后安装MariaDB：</p><pre><code>sudo apt-get update
sudo apt-get install mariadb-server mariadb-client -y
</code></pre><p>在安装过程中，会提示你设置数据库‘root’用户密码。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_0031.png" alt=""></p><p>重新输入一次密码：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_004.png" alt=""></p><p>点击‘是’迁移到 MariaDB。注意一下，如果在安装MariaDB之前没有装过 MySQL 的话，不会提示你这个问题。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_005.png" alt=""></p><p>你可以用如下命令检查 MariaDB 版本：</p><pre><code>sudo mysql -v -u root -p
</code></pre><p>典型输出：</p><pre><code>Welcome to the MariaDB monitor.  Commands end with ; or \\g.
Your MariaDB connection id is 34
Server version: 5.5.39-MariaDB-2 (Ubuntu)

Copyright (c) 2000, 2014, Oracle, Monty Program Ab and others.

Reading history-file /home/sk/.mysql_history
Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.
</code></pre><p>用如下命令检查MariaDB是否已经开始运行：</p><pre><code>sudo service mysql status
</code></pre><p>典型输出：</p><pre><code> * /usr/bin/mysqladmin  Ver 9.0 Distrib 5.5.39-MariaDB, for debian-linux-gnu on x86_64
Copyright (c) 2000, 2014, Oracle, Monty Program Ab and others.

Server version        5.5.39-MariaDB-2
Protocol version    10
Connection        Localhost via UNIX socket
UNIX socket        /var/run/mysqld/mysqld.sock
Uptime:            2 min 21 sec

Threads: 1  Questions: 566  Slow queries: 0  Opens: 330  Flush tables: 4  Open tables: 22  Queries per second avg: 4.014
</code></pre><h3 id="安装-php" tabindex="-1">安装 PHP <a class="header-anchor" href="#安装-php" aria-label="Permalink to “安装 PHP”">​</a></h3><p><strong>PHP</strong>（PHP: Hypertext Preprocessor的递归缩写）是一个应用广泛的开源通用脚本语言，特别适合于网页开发，可以直接嵌入到 HTML 中。</p><p>使用如下命令安装PHP：</p><pre><code>sudo apt-get install php5 php5-fpm php5-mysql
</code></pre><h3 id="配置php" tabindex="-1">配置PHP <a class="header-anchor" href="#配置php" aria-label="Permalink to “配置PHP”">​</a></h3><p>用任意文本编辑器打开<strong>php.ini</strong>文件：</p><pre><code>sudo nano /etc/php5/fpm/php.ini
</code></pre><p>找到这一行‘cgi.fix_pathinfo=1′，去掉注释并把值1改为0。</p><pre><code>cgi.fix_pathinfo=0
</code></pre><p>现在重启php-fpm服务。</p><pre><code>sudo service php5-fpm restart
</code></pre><h3 id="测试-php" tabindex="-1">测试 PHP <a class="header-anchor" href="#测试-php" aria-label="Permalink to “测试 PHP”">​</a></h3><p>在nginx文档根目录下创建一个测试文件“testphp.php”。</p><pre><code>sudo nano /usr/share/nginx/html/testphp.php
</code></pre><p>加入下面几行。</p><pre><code>&lt;?php
 phpinfo();
?&gt;
</code></pre><p>保存文件并退出。</p>`,34)),e("p",null,[n[6]||(n[6]=p("访问地址**",-1)),t(r,{href:"http://server-ip-address/testphp.php**%E3%80%82%E5%B0%86%E6%98%BE%E7%A4%BA%E5%87%BA%E6%89%80%E6%9C%89%E5%85%B3%E4%BA%8E"},{default:i(()=>[...n[5]||(n[5]=[p("http://server-ip-address/testphp.php**。将显示出所有关于",-1)])]),_:1}),n[7]||(n[7]=p(" php 的信息，比如版本、构建日期以及命令等等。",-1))]),n[27]||(n[27]=o(`<p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/10/phpinfo-Mozilla-Firefox_0012.png" alt=""></p><p>PHP-FPM会默认监听套接字<strong>/var/run/php5-fpm.sock</strong>。如果你希望PHP-FPM使用TCP连接，打开文件<strong>/etc/php5/fpm/pool.d/www.conf</strong>，</p><pre><code>sudo nano /etc/php5/fpm/pool.d/www.conf
</code></pre><p>找到这一行listen = /var/run/php5-fpm.sock，</p><pre><code>;listen = /var/run/php5-fpm.sock
</code></pre><p>把它改成<strong>listen = 127.0.0.1:9000</strong>。</p><pre><code>listen = 127.0.0.1:9000
</code></pre><p>保存退出。重启 php5-fpm 服务。</p><pre><code>sudo service php5-fpm restart
</code></pre><p>现在打开 nginx 配置文件：</p><pre><code>sudo nano /etc/nginx/sites-available/default
</code></pre><p>找到这一行<strong>fastcgi_pass unix:/var/run/php5-fpm.sock;</strong>，参考下面把它改成 fastcgi_pass 127.0.0.1:9000;。</p><pre><code>location ~ \\.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\\.php)(/.+)$;fastcgi_pass 127.0.0.1:9000;
        #       # NOTE: You should have &quot;cgi.fix_pathinfo = 0;&quot; in php.ini
        #
        #       # With php5-cgi alone:
        fastcgi_pass 127.0.0.1:9000;
        #       # With php5-fpm:
        #        fastcgi_pass unix:/var/run/php5-fpm.sock;
        fastcgi_index index.php;
        include fastcgi.conf;
   }
</code></pre><p>保存退出。最后重启 nginx 服务。</p><pre><code>sudo service nginx restart
</code></pre><h3 id="使用-phpmyadmin-管理-mysql-数据库-可选" tabindex="-1">使用 phpMyAdmin 管理 MySQL 数据库（可选） <a class="header-anchor" href="#使用-phpmyadmin-管理-mysql-数据库-可选" aria-label="Permalink to “使用 phpMyAdmin 管理 MySQL 数据库（可选）”">​</a></h3><p><strong>phpMyAdmin</strong>是一个免费的开源网页界面工具，用来管理你的 MySQL 数据库。</p><h3 id="安装-phpmyadmin" tabindex="-1">安装 phpMyAdmin <a class="header-anchor" href="#安装-phpmyadmin" aria-label="Permalink to “安装 phpMyAdmin”">​</a></h3><p>在 Debian 官方仓库里就有。所以可以用下面的命令安装：</p><pre><code>sudo apt-get install phpmyadmin
</code></pre><p>选择一个网页服务器。默认情况下，这里不会显示 nginx。所以，选择 apache 或者 lighttpd，然后我们再把 phpMyAdmin 和 nginx 连接起来工作。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_007.png" alt=""></p><p>选择‘是’通过dbconfig-common为phpMyAdmin配置数据库。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_008.png" alt=""></p><p>输入数据库的管理员账号密码。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_009.png" alt=""></p><p>输入 phpmyadmin 帐号的 MySQL 密码：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_010.png" alt=""></p><p>重新输入一次密码。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_011.png" alt=""></p><p>phpMyAdmin 就安装完成了。</p><p>创建一个 phpMyAdmin 的软连接到网站根目录。这里我们的网站根文档目录是/usr/share/nginx/html/。</p><pre><code>sudo ln -s /usr/share/phpmyadmin/ /usr/share/nginx/html
</code></pre><p>重启 nginx 服务。</p><pre><code>sudo service nginx restart
</code></pre><h3 id="访问-phpmyadmin-网页控制台" tabindex="-1">访问 phpMyAdmin 网页控制台 <a class="header-anchor" href="#访问-phpmyadmin-网页控制台" aria-label="Permalink to “访问 phpMyAdmin 网页控制台”">​</a></h3>`,36)),e("p",null,[n[9]||(n[9]=p("现在你可以在浏览器中通过地址**",-1)),t(r,{href:"http://server-ip-address/phpmyadmin/**%E8%AE%BF%E9%97%AE"},{default:i(()=>[...n[8]||(n[8]=[p("http://server-ip-address/phpmyadmin/**访问",-1)])]),_:1}),n[10]||(n[10]=p(" phpMyAdmin 的控制台了。",-1))]),n[28]||(n[28]=e("p",null,"输入你在前面步骤里留下的 MySQL 用户名和密码。在我这里是“root”和“ubuntu”。",-1)),n[29]||(n[29]=e("p",null,[e("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/10/phpMyAdmin-Mozilla-Firefox_0021.png",alt:""})],-1)),n[30]||(n[30]=e("p",null,"就可以重定向到 phpMyAdmin 的网页管理首页。",-1)),n[31]||(n[31]=e("p",null,[e("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/10/192.168.1.100-localhost-phpMyAdmin-4.2.6deb1-Mozilla-Firefox_0031.png",alt:""})],-1)),n[32]||(n[32]=e("p",null,"现在你就可以在 phpMyAdmin 网页里管理你的 MyQL 数据库了。",-1)),n[33]||(n[33]=e("p",null,"就这样。你的 LEMP 服务器已经配置完毕，可以使用了。",-1)),n[34]||(n[34]=e("hr",null,null,-1)),e("p",null,[n[12]||(n[12]=p("via: ",-1)),t(r,{href:"http://www.unixmen.com/install-lemp-server-nginx-mysql-mariadb-php-phpmyadmin-ubuntu-14-1014-0413-10/"},{default:i(()=>[...n[11]||(n[11]=[p("http://www.unixmen.com/install-lemp-server-nginx-mysql-mariadb-php-phpmyadmin-ubuntu-14-1014-0413-10/",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=p("作者：",-1)),t(r,{href:"http://www.unixmen.com/author/sk/"},{default:i(()=>[...n[13]||(n[13]=[p("SK",-1)])]),_:1}),n[17]||(n[17]=p(" 译者：",-1)),t(r,{href:"https://github.com/zpl1025"},{default:i(()=>[...n[14]||(n[14]=[p("zpl1025",-1)])]),_:1}),n[18]||(n[18]=p(" 校对：",-1)),t(r,{href:"https://github.com/carolinewuyan"},{default:i(()=>[...n[15]||(n[15]=[p("Caroline",-1)])]),_:1})]),e("p",null,[n[21]||(n[21]=p("本文由 ",-1)),t(r,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[19]||(n[19]=[p("LCTT",-1)])]),_:1}),n[22]||(n[22]=p(" 原创翻译，",-1)),t(r,{href:"http://linux.cn/"},{default:i(()=>[...n[20]||(n[20]=[p("Linux中国",-1)])]),_:1}),n[23]||(n[23]=p(" 荣誉推出",-1))])])}const b=a(g,[["render",u]]);export{P as __pageData,b as default};
