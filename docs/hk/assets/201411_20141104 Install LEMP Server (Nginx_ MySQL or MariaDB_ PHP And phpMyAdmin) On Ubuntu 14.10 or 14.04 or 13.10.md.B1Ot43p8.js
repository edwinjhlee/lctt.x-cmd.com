import{_ as a,a0 as s,w as d,s as l,ao as o,I as e,x as p,a1 as t,A as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT (201411) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） | LCTT (201411) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201411/20141104 Install LEMP Server (Nginx, MySQL or MariaDB, PHP And phpMyAdmin) On Ubuntu 14.10 or 14.04 or 13.10","title":"在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin）","tag":"201411","desc":""},"relativePath":"201411/20141104 Install LEMP Server (Nginx, MySQL or MariaDB, PHP And phpMyAdmin) On Ubuntu 14.10 or 14.04 or 13.10.md","filePath":"[post].md"}'),g={name:"201411/20141104 Install LEMP Server (Nginx, MySQL or MariaDB, PHP And phpMyAdmin) On Ubuntu 14.10 or 14.04 or 13.10.md"};function u(h,n,m,c,x,y){const r=s("Link");return d(),l("div",null,[n[24]||(n[24]=o(`<h1 id="在-ubuntu-14-10-14-04-13-10-上安裝-lemp-服務-nginx-mysql-或-mariadb-php-和-phpmyadmin" tabindex="-1">在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin） <a class="header-anchor" href="#在-ubuntu-14-10-14-04-13-10-上安裝-lemp-服務-nginx-mysql-或-mariadb-php-和-phpmyadmin" aria-label="Permalink to “在 Ubuntu 14.10/14.04/13.10 上安裝 LEMP 服務（Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin）”">​</a></h1><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/lemp.jpg" alt=""></p><p><strong>LEMP</strong>是一個操作系統和幾個開源軟件包的合稱。縮寫LEMP來自 <strong>L</strong> inux，Nginx（發音是 <strong>e</strong> ngine-x）HTTP服務器， <strong>M</strong> ySQL資料庫，和 <strong>P</strong> HP/ <strong>P</strong> erl/ <strong>P</strong> ython的首字母。</p><p>在這篇教程裏，讓我們看一下如何在 Ubuntu 14.10 上安裝 Nginx，MySQL 或 MariaDB，PHP 和 phpMyAdmin。</p><h3 id="安裝nginx" tabindex="-1">安裝Nginx <a class="header-anchor" href="#安裝nginx" aria-label="Permalink to “安裝Nginx”">​</a></h3><p><strong>Nginx</strong> (發音是engine-x)是一個免費的、開源的、高性能HTTP服務器和反向代理，也可以用作IMAP/POP3代理服務器，它是由Igor Sysoev開發。</p><p>要安裝Nginx，在你的終端裏輸入下面的命令：</p><p><strong>注意</strong>：如果你的系統裏已經安裝了apache2，先卸載掉以避免衝突。要卸載apache，運行下面的命令：</p><pre><code>sudo apt-get purge apache2*
sudo apt-get autoremove -y
</code></pre><p>現在，用下面的命令安裝nginx：</p><pre><code>sudo apt-get install nginx
</code></pre><p>用下面的命令啓用Nginx服務：</p><pre><code>sudo service nginx start
</code></pre><h3 id="測試-nginx" tabindex="-1">測試 nginx <a class="header-anchor" href="#測試-nginx" aria-label="Permalink to “測試 nginx”">​</a></h3>`,14)),e("p",null,[n[1]||(n[1]=p("打開你的瀏覽器訪問",-1)),t(r,{href:"http://xn--IP-im8ckc/%E6%88%96%E8%80%85http://localhost/%E3%80%82%E5%B0%87%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E9%A1%9E%E4%BC%BC%E4%B8%8B%E9%9D%A2%E7%9A%84%E6%88%AA%E5%9C%96%E3%80%82"},{default:i(()=>[...n[0]||(n[0]=[p("http://IP地址/或者http://localhost/。將可以看到類似下面的截圖。",-1)])]),_:1})]),n[25]||(n[25]=o(`<p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/10/Welcome-to-nginx-Mozilla-Firefox_005.png" alt=""></p><h3 id="配置-nginx" tabindex="-1">配置 Nginx <a class="header-anchor" href="#配置-nginx" aria-label="Permalink to “配置 Nginx”">​</a></h3><p>用任意文本編輯器打開文件<strong>/etc/nginx/nginx.conf</strong></p><pre><code>sudo nano /etc/nginx/nginx.conf
</code></pre><p>設置 worker_processes（例如，你係統裏CPU數目）。查看CPU數目，可以使用命令“lscpu”。在我這裏是“1”。所以我把這個值設為1。</p><pre><code>worker_processes 1;
</code></pre><p>重啓 Nginx 服務：</p><pre><code>sudo service nginx restart
</code></pre><p>默認虛擬主機（服務器模組）定義在文件<strong>/etc/nginx/sites-available/default</strong>裏。</p><p>用任意文本編輯器打開文件/etc/nginx/sites-available/default。</p><pre><code>sudo nano /etc/nginx/sites-available/default
</code></pre><p>在Server區域裏，按如下設置服務器FQDN或IP地址。確保你增加了index.php這一行。</p><pre><code>[...]
server {
      listen 80 default_server;
      listen [::]:80 default_server ipv6only=on;
      root /usr/share/nginx/html;
      index index.php index.html index.htm;
      # Make site accessible from http://localhost/
      server_name server.unixmen.local;
[...]
</code></pre><p>這裏面</p><ul><li><strong>listen 80;</strong> –&gt; 監聽ipv4端口</li><li><strong>listen [::]:80 default_server ipv6only=on;</strong> –&gt; 監聽ipv6寬口</li><li><strong>root /usr/share/nginx/html;</strong> –&gt; 文件根目錄</li><li><strong>server_name server.unixmen.local;</strong> –&gt; 服務器FQDN</li></ul><p>現在，向下滾動找到區域#location <strong>~ .php$</strong>。去掉註釋並按如下修改：</p><pre><code> location ~ \\.php$ {
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
</code></pre><p>這裏面，我增加了額外一行<strong>‘try_files $uri =404;’</strong>用於避免0day漏洞。</p><p>保存文件並退出。</p><h3 id="測試-nginx-配置" tabindex="-1">測試 nginx 配置 <a class="header-anchor" href="#測試-nginx-配置" aria-label="Permalink to “測試 nginx 配置”">​</a></h3><p>使用下面的命令測試nginx配置是否存在語法錯誤：</p><pre><code>sudo nginx -t
</code></pre><p>典型輸出：</p><pre><code>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
</code></pre><p>最後重啓nginx服務</p><pre><code>sudo service nginx restart
</code></pre><h3 id="安裝-mysql" tabindex="-1">安裝 MySQL <a class="header-anchor" href="#安裝-mysql" aria-label="Permalink to “安裝 MySQL”">​</a></h3><p><strong>MySQL</strong>是一個關係型資料庫管理系統（RDBMS），作為服務啓動提供給多用户訪問多種資料庫，儘管SQLite可能有更多的嵌入式部署。</p><pre><code>sudo apt-get install mysql-server mysql-client
</code></pre><p>在安裝過程中，會提示你設置MySQL超級用户密碼。輸入密碼並按確認。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_001.png" alt=""></p><p>重新輸入密碼。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_0021.png" alt=""></p><p>現在，MySQL服務器就安裝好了。</p><p>你可以用下面的命令檢查 MySQL 服務器狀態：</p><pre><code>sudo service mysql status
</code></pre><p>典型輸出：</p><pre><code>mysql start/running, process 5671
</code></pre><p><strong>注意</strong>：如果你希望使用MariaDB而不是MySQL，可以參考下面的步驟。</p><h3 id="安裝-mariadb" tabindex="-1">安裝 MariaDB <a class="header-anchor" href="#安裝-mariadb" aria-label="Permalink to “安裝 MariaDB”">​</a></h3><p><strong>MariaDB</strong>是 MySQL 的一個直接替代軟件。它是一個穩定、可擴展又可靠的SQL服務器，包含許多增強功能。</p><p>首先，如果有的話你得先卸載掉 MySQL。要完全卸載 MySQL 包括配置文件，輸入如下命令：</p><pre><code>sudo apt-get purge mysql*
</code></pre><p>運行如下命令清除不需要的軟件包。</p><pre><code>sudo apt-get autoremove
</code></pre><p>在卸載完MySQL後，運行如下命令安裝MariaDB。</p><pre><code>sudo apt-get install mariadb-server mariadb-client
</code></pre>`,47)),e("p",null,[n[3]||(n[3]=p("另外，如果你希望體驗最新版的MariaDB，可以從",-1)),t(r,{href:"https://downloads.mariadb.org/mariadb/repositories/#mirror=tsinghua"},{default:i(()=>[...n[2]||(n[2]=[p("MariaDB倉庫",-1)])]),_:1}),n[4]||(n[4]=p("安裝。運行下面的命令添加PPA。在寫這篇文章的時候，MariaDB PPA還沒有更新 Ubuntu 14.10。不過，我們還是可以使用 Ubuntu 14.04 的倉庫來替代。",-1))]),n[26]||(n[26]=o(`<pre><code>sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
sudo add-apt-repository &#39;deb http://sgp1.mirrors.digitalocean.com/mariadb/repo/5.5/ubuntu trusty main&#39;
</code></pre><p>用如下命令更新一下軟件源列表，然後安裝MariaDB：</p><pre><code>sudo apt-get update
sudo apt-get install mariadb-server mariadb-client -y
</code></pre><p>在安裝過程中，會提示你設置資料庫‘root’用户密碼。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_0031.png" alt=""></p><p>重新輸入一次密碼：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_004.png" alt=""></p><p>點擊‘是’遷移到 MariaDB。注意一下，如果在安裝MariaDB之前沒有裝過 MySQL 的話，不會提示你這個問題。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_005.png" alt=""></p><p>你可以用如下命令檢查 MariaDB 版本：</p><pre><code>sudo mysql -v -u root -p
</code></pre><p>典型輸出：</p><pre><code>Welcome to the MariaDB monitor.  Commands end with ; or \\g.
Your MariaDB connection id is 34
Server version: 5.5.39-MariaDB-2 (Ubuntu)

Copyright (c) 2000, 2014, Oracle, Monty Program Ab and others.

Reading history-file /home/sk/.mysql_history
Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.
</code></pre><p>用如下命令檢查MariaDB是否已經開始運行：</p><pre><code>sudo service mysql status
</code></pre><p>典型輸出：</p><pre><code> * /usr/bin/mysqladmin  Ver 9.0 Distrib 5.5.39-MariaDB, for debian-linux-gnu on x86_64
Copyright (c) 2000, 2014, Oracle, Monty Program Ab and others.

Server version        5.5.39-MariaDB-2
Protocol version    10
Connection        Localhost via UNIX socket
UNIX socket        /var/run/mysqld/mysqld.sock
Uptime:            2 min 21 sec

Threads: 1  Questions: 566  Slow queries: 0  Opens: 330  Flush tables: 4  Open tables: 22  Queries per second avg: 4.014
</code></pre><h3 id="安裝-php" tabindex="-1">安裝 PHP <a class="header-anchor" href="#安裝-php" aria-label="Permalink to “安裝 PHP”">​</a></h3><p><strong>PHP</strong>（PHP: Hypertext Preprocessor的遞歸縮寫）是一個應用廣泛的開源通用腳本語言，特別適合於網頁開發，可以直接嵌入到 HTML 中。</p><p>使用如下命令安裝PHP：</p><pre><code>sudo apt-get install php5 php5-fpm php5-mysql
</code></pre><h3 id="配置php" tabindex="-1">配置PHP <a class="header-anchor" href="#配置php" aria-label="Permalink to “配置PHP”">​</a></h3><p>用任意文本編輯器打開<strong>php.ini</strong>文件：</p><pre><code>sudo nano /etc/php5/fpm/php.ini
</code></pre><p>找到這一行‘cgi.fix_pathinfo=1′，去掉註釋並把值1改為0。</p><pre><code>cgi.fix_pathinfo=0
</code></pre><p>現在重啓php-fpm服務。</p><pre><code>sudo service php5-fpm restart
</code></pre><h3 id="測試-php" tabindex="-1">測試 PHP <a class="header-anchor" href="#測試-php" aria-label="Permalink to “測試 PHP”">​</a></h3><p>在nginx文檔根目錄下創建一個測試文件“testphp.php”。</p><pre><code>sudo nano /usr/share/nginx/html/testphp.php
</code></pre><p>加入下面幾行。</p><pre><code>&lt;?php
 phpinfo();
?&gt;
</code></pre><p>保存文件並退出。</p>`,34)),e("p",null,[n[6]||(n[6]=p("訪問地址**",-1)),t(r,{href:"http://server-ip-address/testphp.php**%E3%80%82%E5%B0%87%E9%A1%AF%E7%A4%BA%E5%87%BA%E6%89%80%E6%9C%89%E9%97%9C%E6%96%BC"},{default:i(()=>[...n[5]||(n[5]=[p("http://server-ip-address/testphp.php**。將顯示出所有關於",-1)])]),_:1}),n[7]||(n[7]=p(" php 的信息，比如版本、構建日期以及命令等等。",-1))]),n[27]||(n[27]=o(`<p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/10/phpinfo-Mozilla-Firefox_0012.png" alt=""></p><p>PHP-FPM會默認監聽套接字<strong>/var/run/php5-fpm.sock</strong>。如果你希望PHP-FPM使用TCP連接，打開文件<strong>/etc/php5/fpm/pool.d/www.conf</strong>，</p><pre><code>sudo nano /etc/php5/fpm/pool.d/www.conf
</code></pre><p>找到這一行listen = /var/run/php5-fpm.sock，</p><pre><code>;listen = /var/run/php5-fpm.sock
</code></pre><p>把它改成<strong>listen = 127.0.0.1:9000</strong>。</p><pre><code>listen = 127.0.0.1:9000
</code></pre><p>保存退出。重啓 php5-fpm 服務。</p><pre><code>sudo service php5-fpm restart
</code></pre><p>現在打開 nginx 配置文件：</p><pre><code>sudo nano /etc/nginx/sites-available/default
</code></pre><p>找到這一行<strong>fastcgi_pass unix:/var/run/php5-fpm.sock;</strong>，參考下面把它改成 fastcgi_pass 127.0.0.1:9000;。</p><pre><code>location ~ \\.php$ {
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
</code></pre><p>保存退出。最後重啓 nginx 服務。</p><pre><code>sudo service nginx restart
</code></pre><h3 id="使用-phpmyadmin-管理-mysql-資料庫-可選" tabindex="-1">使用 phpMyAdmin 管理 MySQL 資料庫（可選） <a class="header-anchor" href="#使用-phpmyadmin-管理-mysql-資料庫-可選" aria-label="Permalink to “使用 phpMyAdmin 管理 MySQL 資料庫（可選）”">​</a></h3><p><strong>phpMyAdmin</strong>是一個免費的開源網頁界面工具，用來管理你的 MySQL 資料庫。</p><h3 id="安裝-phpmyadmin" tabindex="-1">安裝 phpMyAdmin <a class="header-anchor" href="#安裝-phpmyadmin" aria-label="Permalink to “安裝 phpMyAdmin”">​</a></h3><p>在 Debian 官方倉庫裏就有。所以可以用下面的命令安裝：</p><pre><code>sudo apt-get install phpmyadmin
</code></pre><p>選擇一個網頁服務器。默認情況下，這裏不會顯示 nginx。所以，選擇 apache 或者 lighttpd，然後我們再把 phpMyAdmin 和 nginx 連接起來工作。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_007.png" alt=""></p><p>選擇‘是’通過dbconfig-common為phpMyAdmin配置資料庫。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_008.png" alt=""></p><p>輸入資料庫的管理員賬號密碼。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_009.png" alt=""></p><p>輸入 phpmyadmin 帳號的 MySQL 密碼：</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_010.png" alt=""></p><p>重新輸入一次密碼。</p><p><img src="http://180016988.r.cdn77.net/wp-content/uploads/2014/06/sk@server-_011.png" alt=""></p><p>phpMyAdmin 就安裝完成了。</p><p>創建一個 phpMyAdmin 的軟連接到網站根目錄。這裏我們的網站根文檔目錄是/usr/share/nginx/html/。</p><pre><code>sudo ln -s /usr/share/phpmyadmin/ /usr/share/nginx/html
</code></pre><p>重啓 nginx 服務。</p><pre><code>sudo service nginx restart
</code></pre><h3 id="訪問-phpmyadmin-網頁控制台" tabindex="-1">訪問 phpMyAdmin 網頁控制台 <a class="header-anchor" href="#訪問-phpmyadmin-網頁控制台" aria-label="Permalink to “訪問 phpMyAdmin 網頁控制台”">​</a></h3>`,36)),e("p",null,[n[9]||(n[9]=p("現在你可以在瀏覽器中通過地址**",-1)),t(r,{href:"http://server-ip-address/phpmyadmin/**%E8%A8%AA%E5%95%8F"},{default:i(()=>[...n[8]||(n[8]=[p("http://server-ip-address/phpmyadmin/**訪問",-1)])]),_:1}),n[10]||(n[10]=p(" phpMyAdmin 的控制台了。",-1))]),n[28]||(n[28]=e("p",null,"輸入你在前面步驟裏留下的 MySQL 用户名和密碼。在我這裏是“root”和“ubuntu”。",-1)),n[29]||(n[29]=e("p",null,[e("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/10/phpMyAdmin-Mozilla-Firefox_0021.png",alt:""})],-1)),n[30]||(n[30]=e("p",null,"就可以重定向到 phpMyAdmin 的網頁管理首頁。",-1)),n[31]||(n[31]=e("p",null,[e("img",{src:"http://180016988.r.cdn77.net/wp-content/uploads/2014/10/192.168.1.100-localhost-phpMyAdmin-4.2.6deb1-Mozilla-Firefox_0031.png",alt:""})],-1)),n[32]||(n[32]=e("p",null,"現在你就可以在 phpMyAdmin 網頁裏管理你的 MyQL 資料庫了。",-1)),n[33]||(n[33]=e("p",null,"就這樣。你的 LEMP 服務器已經配置完畢，可以使用了。",-1)),n[34]||(n[34]=e("hr",null,null,-1)),e("p",null,[n[12]||(n[12]=p("via: ",-1)),t(r,{href:"http://www.unixmen.com/install-lemp-server-nginx-mysql-mariadb-php-phpmyadmin-ubuntu-14-1014-0413-10/"},{default:i(()=>[...n[11]||(n[11]=[p("http://www.unixmen.com/install-lemp-server-nginx-mysql-mariadb-php-phpmyadmin-ubuntu-14-1014-0413-10/",-1)])]),_:1})]),e("p",null,[n[16]||(n[16]=p("作者：",-1)),t(r,{href:"http://www.unixmen.com/author/sk/"},{default:i(()=>[...n[13]||(n[13]=[p("SK",-1)])]),_:1}),n[17]||(n[17]=p(" 譯者：",-1)),t(r,{href:"https://github.com/zpl1025"},{default:i(()=>[...n[14]||(n[14]=[p("zpl1025",-1)])]),_:1}),n[18]||(n[18]=p(" 校對：",-1)),t(r,{href:"https://github.com/carolinewuyan"},{default:i(()=>[...n[15]||(n[15]=[p("Caroline",-1)])]),_:1})]),e("p",null,[n[21]||(n[21]=p("本文由 ",-1)),t(r,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...n[19]||(n[19]=[p("LCTT",-1)])]),_:1}),n[22]||(n[22]=p(" 原創翻譯，",-1)),t(r,{href:"http://linux.cn/"},{default:i(()=>[...n[20]||(n[20]=[p("Linux中國",-1)])]),_:1}),n[23]||(n[23]=p(" 榮譽推出",-1))])])}const b=a(g,[["render",u]]);export{P as __pageData,b as default};
