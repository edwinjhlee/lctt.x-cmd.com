import{_ as i,a0 as a,w as l,s as d,I as t,x as n,a1 as s,A as o,ao as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const S=JSON.parse('{"title":"如何在 Docker 容器中架設一個完整的 WordPress 站點 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 Docker 容器中架設一個完整的 WordPress 站點 | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 Docker 容器中架設一個完整的 WordPress 站點 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 Docker 容器中架設一個完整的 WordPress 站點 | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150331 How to Install WordPress with Nginx in a Docker Container","title":"如何在 Docker 容器中架設一個完整的 WordPress 站點","tag":"201506","desc":""},"relativePath":"201506/20150331 How to Install WordPress with Nginx in a Docker Container.md","filePath":"[post].md"}'),c={name:"201506/20150331 How to Install WordPress with Nginx in a Docker Container.md"};function u(m,e,h,g,_,f){const r=a("Link");return l(),d("div",null,[e[21]||(e[21]=t("h1",{id:"如何在-docker-容器中架設一個完整的-wordpress-站點",tabindex:"-1"},[n("如何在 Docker 容器中架設一個完整的 WordPress 站點 "),t("a",{class:"header-anchor",href:"#如何在-docker-容器中架設一個完整的-wordpress-站點","aria-label":"Permalink to “如何在 Docker 容器中架設一個完整的 WordPress 站點”"},"​")],-1)),t("p",null,[e[1]||(e[1]=n("大家好，今天我們來學習一下如何在 Docker 容器裏運行的 Nginx Web 服務器中安裝 WordPress。WordPress 是一個很好的免費開源的內容管理系統，全球成千上萬的網站都在使用它。",-1)),s(r,{href:"http://docker.io/"},{default:o(()=>[...e[0]||(e[0]=[n("Docker",-1)])]),_:1}),e[2]||(e[2]=n(" 是一個開源項目，提供了一個可以打包、裝載和運行任何應用的輕量級容器的開放平台。它沒有語言支持、框架和打包系統的限制，從小型的家用電腦到高端服務器，在何時何地都可以運行。這使它們可以不依賴於特定軟件棧和供應商，像一塊塊積木一樣部署和擴展網絡應用、資料庫和後端服務。",-1))]),e[22]||(e[22]=p(`<p>今天，我們會在 docker 容器上部署最新的 WordPress 軟件包，包括需要的前提條件，例如 Nginx Web 服務器、PHP5、MariaDB 服務器等。下面是在運行在 Docker 容器上成功安裝 WordPress 的簡單步驟。</p><h3 id="_1-安裝-docker" tabindex="-1">1. 安裝 Docker <a class="header-anchor" href="#_1-安裝-docker" aria-label="Permalink to “1. 安裝 Docker”">​</a></h3><p>在我們真正開始之前，我們需要確保在我們的 Linux 機器上已經安裝了 Docker。我們使用的主機是 CentOS 7，因此我們用下面的命令使用 yum 管理器安裝 docker。</p><pre><code># yum install docker
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/installing-docker.png" alt="安裝 Docker"></p><pre><code># systemctl restart docker.service
</code></pre><h3 id="_2-創建-wordpress-的-dockerfile" tabindex="-1">2. 創建 WordPress 的 Dockerfile <a class="header-anchor" href="#_2-創建-wordpress-的-dockerfile" aria-label="Permalink to “2. 創建 WordPress 的 Dockerfile”">​</a></h3><p>我們需要創建用於自動安裝 wordpress 以及其前置需求的 Dockerfile。這個 Dockerfile 將用於構建 WordPress 的安裝鏡像。這個 WordPress Dockerfile 會從 Docker Registry Hub 獲取 CentOS 7 鏡像並用最新的可用更新升級系統。然後它會安裝必要的軟件，例如 Nginx Web 服務器、PHP、MariaDB、Open SSH 服務器，以及其它保證 Docker 容器正常運行不可缺少的組件。最後它會執行一個初始化 WordPress 安裝的腳本。</p><pre><code># nano Dockerfile
</code></pre><p>然後，我們需要將下面的配置行添加到 Dockerfile中。</p><pre><code>FROM centos:centos7
MAINTAINER The CentOS Project &lt;cloud-ops@centos.org&gt;

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install mariadb mariadb-server mariadb-client nginx php-fpm php-cli php-mysql php-gd php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-magickwand php-magpierss php-mbstring php-mcrypt php-mssql php-shout php-snmp php-soap php-tidy php-apc pwgen python-setuptools curl git tar; yum clean all
ADD ./start.sh /start.sh
ADD ./nginx-site.conf /nginx.conf
RUN mv /nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
RUN /usr/bin/easy_install supervisor
RUN /usr/bin/easy_install supervisor-stdout
ADD ./supervisord.conf /etc/supervisord.conf
RUN echo %sudo ALL=NOPASSWD: ALL &gt;&gt; /etc/sudoers
ADD http://wordpress.org/latest.tar.gz /wordpress.tar.gz
RUN tar xvzf /wordpress.tar.gz
RUN mv /wordpress/* /usr/share/nginx/html/.
RUN chown -R apache:apache /usr/share/nginx/
RUN chmod 755 /start.sh
RUN mkdir /var/run/sshd

EXPOSE 80
EXPOSE 22

CMD [&quot;/bin/bash&quot;, &quot;/start.sh&quot;]
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/Dockerfile-wordpress.png" alt="Wordpress Docker 文件"></p><h3 id="_3-創建啓動腳本" tabindex="-1">3. 創建啓動腳本 <a class="header-anchor" href="#_3-創建啓動腳本" aria-label="Permalink to “3. 創建啓動腳本”">​</a></h3><p>我們創建了 Dockerfile 之後，我們需要創建用於運行和配置 WordPress 安裝的腳本，名稱為 start.sh。它會為 WordPress 創建並配置資料庫和密碼。用我們喜歡的文本編輯器打開 start.sh。</p><pre><code># nano start.sh
</code></pre><p>打開 start.sh 之後，我們要添加下面的配置行到文件中。</p><pre><code>#!/bin/bash

__check() {
if [ -f /usr/share/nginx/html/wp-config.php ]; then
exit
fi
}

__create_user() {
# 創建用於 SSH 登錄的用户
SSH_USERPASS=\`pwgen -c -n -1 8\`
useradd -G wheel user
echo user:$SSH_USERPASS | chpasswd
echo ssh user password: $SSH_USERPASS
}

__mysql_config() {
# 啓用並運行 MySQL
yum -y erase mariadb mariadb-server
rm -rf /var/lib/mysql/ /etc/my.cnf
yum -y install mariadb mariadb-server
mysql_install_db
chown -R mysql:mysql /var/lib/mysql
/usr/bin/mysqld_safe &amp;
sleep 10
}

__handle_passwords() {
# 在這裏我們生成隨機密碼(多虧了 pwgen)。前面兩個用於 mysql 用户，最後一個用於 wp-config.php 的隨機密鑰。
WORDPRESS_DB=&quot;wordpress&quot;
MYSQL_PASSWORD=\`pwgen -c -n -1 12\`
WORDPRESS_PASSWORD=\`pwgen -c -n -1 12\`
# 這是在日誌中顯示的密碼。
echo mysql root password: $MYSQL_PASSWORD
echo wordpress password: $WORDPRESS_PASSWORD
echo $MYSQL_PASSWORD &gt; /mysql-root-pw.txt
echo $WORDPRESS_PASSWORD &gt; /wordpress-db-pw.txt
# 這裏原來是一個包括 sed、cat、pipe 和 stuff 的很長的行，但多虧了
#  @djfiander 的 https://gist.github.com/djfiander/6141138
# 現在沒有了
sed -e &quot;s/database_name_here/$WORDPRESS_DB/
s/username_here/$WORDPRESS_DB/
s/password_here/$WORDPRESS_PASSWORD/
/&#39;AUTH_KEY&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;SECURE_AUTH_KEY&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;LOGGED_IN_KEY&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;NONCE_KEY&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;AUTH_SALT&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;SECURE_AUTH_SALT&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;LOGGED_IN_SALT&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/
/&#39;NONCE_SALT&#39;/s/put your unique phrase here/\`pwgen -c -n -1 65\`/&quot; /usr/share/nginx/html/wp-config-sample.php &gt; /usr/share/nginx/html/wp-config.php
}

__httpd_perms() {
chown apache:apache /usr/share/nginx/html/wp-config.php
}

__start_mysql() {
# systemctl 啓動 mysqld 服務
mysqladmin -u root password $MYSQL_PASSWORD
mysql -uroot -p$MYSQL_PASSWORD -e &quot;CREATE DATABASE wordpress; GRANT ALL PRIVILEGES ON wordpress.* TO &#39;wordpress&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;$WORDPRESS_PASSWORD&#39;; FLUSH PRIVILEGES;&quot;
killall mysqld
sleep 10
}

__run_supervisor() {
supervisord -n
}

# 調用所有函數
__check
__create_user
__mysql_config
__handle_passwords
__httpd_perms
__start_mysql
__run_supervisor
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/start-script.png" alt="啓動腳本"></p><p>增加完上面的配置之後，保存並關閉文件。</p><h3 id="_4-創建配置文件" tabindex="-1">4. 創建配置文件 <a class="header-anchor" href="#_4-創建配置文件" aria-label="Permalink to “4. 創建配置文件”">​</a></h3><p>現在，我們需要創建 Nginx Web 服務器的配置文件，命名為 nginx-site.conf。</p><pre><code># nano nginx-site.conf
</code></pre><p>然後，增加下面的配置信息到配置文件。</p><pre><code>user nginx;
worker_processes 1;

error_log /var/log/nginx/error.log;
#error_log /var/log/nginx/error.log notice;
#error_log /var/log/nginx/error.log info;

pid /run/nginx.pid;
events {
worker_connections 1024;
}
http {
include /etc/nginx/mime.types;
default_type application/octet-stream;

log_format main &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

access_log /var/log/nginx/access.log main;

sendfile on;
#tcp_nopush on;

#keepalive_timeout 0;
keepalive_timeout 65;

#gzip on;

index index.html index.htm index.php;

# Load modular configuration files from the /etc/nginx/conf.d directory.
# See http://nginx.org/en/docs/ngx_core_module.html#include
# for more information.
include /etc/nginx/conf.d/*.conf;

server {
listen 80;
server_name localhost;

#charset koi8-r;

#access_log logs/host.access.log main;
root /usr/share/nginx/html;

#error_page 404 /404.html;

# redirect server error pages to the static page /50x.html
#
error_page 500 502 503 504 /50x.html;
location = /50x.html {
root html;
}

# proxy the PHP scripts to Apache listening on 127.0.0.1:80
#
#location ~ \\.php$ {
# proxy_pass http://127.0.0.1;
#}

# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
#
location ~ \\.php$ {

root /usr/share/nginx/html;
try_files $uri =404;
fastcgi_pass 127.0.0.1:9000;
fastcgi_index index.php;
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
}

# deny access to .htaccess files, if Apache&#39;s document root
# concurs with nginx&#39;s one
#
#location ~ /\\.ht {
# deny all;
#}

}
}
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/nginx-conf.png" alt="Nginx 配置"></p><p>現在，創建 supervisor.conf 文件並添加下面的行。</p><pre><code># nano supervisord.conf
</code></pre><p>然後，添加以下行。</p><pre><code>[unix_http_server]
file=/tmp/supervisor.sock ; (the path to the socket file)

[supervisord]
logfile=/tmp/supervisord.log ; (main log file;default $CWD/supervisord.log)
logfile_maxbytes=50MB ; (max main logfile bytes b4 rotation;default 50MB)
logfile_backups=10 ; (num of main logfile rotation backups;default 10)
loglevel=info ; (log level;default info; others: debug,warn,trace)
pidfile=/tmp/supervisord.pid ; (supervisord pidfile;default supervisord.pid)
nodaemon=false ; (start in foreground if true;default false)
minfds=1024 ; (min. avail startup file descriptors;default 1024)
minprocs=200 ; (min. avail process descriptors;default 200)

; the below section must remain in the config file for RPC
; (supervisorctl/web interface) to work, additional interfaces may be
; added by defining them in separate rpcinterface: sections
[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[supervisorctl]
serverurl=unix:///tmp/supervisor.sock ; use a unix:// URL for a unix socket

[program:php-fpm]
command=/usr/sbin/php-fpm -c /etc/php/fpm
stdout_events_enabled=true
stderr_events_enabled=true

[program:php-fpm-log]
command=tail -f /var/log/php-fpm/php-fpm.log
stdout_events_enabled=true
stderr_events_enabled=true

[program:mysql]
command=/usr/bin/mysql --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib/mysql/plugin --user=mysql --log-error=/var/log/mysql/error.log --pid-file=/var/run/mysqld/mysqld.pid --socket=/var/run/mysqld/mysqld.sock --port=3306
stdout_events_enabled=true
stderr_events_enabled=true

[program:nginx]
command=/usr/sbin/nginx
stdout_events_enabled=true
stderr_events_enabled=true

[eventlistener:stdout]
command = supervisor_stdout
buffer_size = 100
events = PROCESS_LOG
result_handler = supervisor_stdout:event_handler
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/supervisord.png" alt="Supervisord 配置"></p><p>添加完後，保存並關閉文件。</p><h3 id="_5-構建-wordpress-容器" tabindex="-1">5. 構建 WordPress 容器 <a class="header-anchor" href="#_5-構建-wordpress-容器" aria-label="Permalink to “5. 構建 WordPress 容器”">​</a></h3><p>現在，完成了創建配置文件和腳本之後，我們終於要使用 Dockerfile 來創建安裝最新的 WordPress CMS（譯者注：Content Management System，內容管理系統）所需要的容器，並根據配置文件進行配置。做到這點，我們需要在對應的目錄中運行以下命令。</p><pre><code># docker build --rm -t wordpress:centos7 .
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/building-wordpress-container.png" alt="構建 WordPress 容器"></p><h3 id="_6-運行-wordpress-容器" tabindex="-1">6. 運行 WordPress 容器 <a class="header-anchor" href="#_6-運行-wordpress-容器" aria-label="Permalink to “6. 運行 WordPress 容器”">​</a></h3><p>現在，執行以下命令運行新構建的容器，併為 Nginx Web 服務器和 SSH 訪問打開88 和 22號相應端口 。</p><pre><code># CID=$(docker run -d -p 80:80 wordpress:centos7)
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/run-wordpress-docker.png" alt="運行 WordPress Docker"></p><p>運行以下命令檢查進程以及容器內部執行的命令。</p><pre><code>#  echo &quot;$(docker logs $CID )&quot;
</code></pre><p>運行以下命令檢查端口映射是否正確。</p><pre><code># docker ps
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/docker-state.png" alt="docker 狀態"></p><h3 id="_7-web-界面" tabindex="-1">7. Web 界面 <a class="header-anchor" href="#_7-web-界面" aria-label="Permalink to “7. Web 界面”">​</a></h3>`,45)),t("p",null,[e[5]||(e[5]=n("最後如果一切正常的話，當我們用瀏覽器打開 ",-1)),s(r,{href:"http://ip-address/"},{default:o(()=>[...e[3]||(e[3]=[n("http://ip-address/",-1)])]),_:1}),e[6]||(e[6]=n(" 或者 ",-1)),s(r,{href:"http://mywebsite.com/"},{default:o(()=>[...e[4]||(e[4]=[n("http://mywebsite.com/",-1)])]),_:1}),e[7]||(e[7]=n(" 的時候會看到 WordPress 的歡迎界面。",-1))]),e[23]||(e[23]=p('<p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/wordpress-start.png" alt="啓動Wordpress"></p><p>現在，我們將通過 Web 界面為 WordPress 面板設置 WordPress 的配置、用户名和密碼。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/wordpress-welcome.png" alt="Wordpress 歡迎界面"></p><p>然後，用上面用户名和密碼輸入到 WordPress 登錄界面。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/03/wordpress-login.png" alt="wordpress 登錄"></p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>我們已經成功地在以 CentOS 7 作為 docker OS 的 LEMP 棧上構建並運行了 WordPress CMS。從安全層面來説，在容器中運行 WordPress 對於宿主系統更加安全可靠。這篇文章介紹了在 Docker 容器中運行的 Nginx Web 服務器上使用 WordPress 的完整配置。如果你有任何問題、建議、反饋，請在下面的評論框中寫下來，讓我們可以改進和更新我們的內容。非常感謝！Enjoy 😃</p><hr>',8)),t("p",null,[e[9]||(e[9]=n("via: ",-1)),s(r,{href:"http://linoxide.com/linux-how-to/install-wordpress-nginx-docker-container/"},{default:o(()=>[...e[8]||(e[8]=[n("http://linoxide.com/linux-how-to/install-wordpress-nginx-docker-container/",-1)])]),_:1})]),t("p",null,[e[13]||(e[13]=n("作者：",-1)),s(r,{href:"http://linoxide.com/author/arunp/"},{default:o(()=>[...e[10]||(e[10]=[n("Arun Pyasi",-1)])]),_:1}),e[14]||(e[14]=n(" 譯者：",-1)),s(r,{href:"https://github.com/ictlyh"},{default:o(()=>[...e[11]||(e[11]=[n("ictlyh",-1)])]),_:1}),e[15]||(e[15]=n(" 校對：",-1)),s(r,{href:"https://github.com/wxy"},{default:o(()=>[...e[12]||(e[12]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[18]||(e[18]=n("本文由 ",-1)),s(r,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[16]||(e[16]=[n("LCTT",-1)])]),_:1}),e[19]||(e[19]=n(" 原創翻譯，",-1)),s(r,{href:"http://linux.cn/"},{default:o(()=>[...e[17]||(e[17]=[n("Linux中國",-1)])]),_:1}),e[20]||(e[20]=n(" 榮譽推出",-1))])])}const b=i(c,[["render",u]]);export{S as __pageData,b as default};
