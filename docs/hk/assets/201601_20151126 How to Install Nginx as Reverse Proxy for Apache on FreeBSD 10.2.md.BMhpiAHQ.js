import{_ as t,a0 as i,w as c,s,ao as l,I as r,x as n,a1 as o,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const w=JSON.parse('{"title":"如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理 | LCTT (201601) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理 | LCTT (201601) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201601/20151126 How to Install Nginx as Reverse Proxy for Apache on FreeBSD 10.2","title":"如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理","tag":"201601","desc":""},"relativePath":"201601/20151126 How to Install Nginx as Reverse Proxy for Apache on FreeBSD 10.2.md","filePath":"[post].md"}'),h={name:"201601/20151126 How to Install Nginx as Reverse Proxy for Apache on FreeBSD 10.2.md"};function d(g,e,x,m,u,f){const a=i("Link");return c(),s("div",null,[e[15]||(e[15]=l(`<h1 id="如何在-freebsd-10-2-上安裝-nginx-作為-apache-的反向代理" tabindex="-1">如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理 <a class="header-anchor" href="#如何在-freebsd-10-2-上安裝-nginx-作為-apache-的反向代理" aria-label="Permalink to “如何在 FreeBSD 10.2 上安裝 Nginx 作為 Apache 的反向代理”">​</a></h1><p>Nginx 是一款自由開源的 HTTP 和反向代理服務器，也可以用作 POP3/IMAP 的郵件代理服務器。Nginx 是一款高性能的 web 服務器，其特點是功能豐富，結構簡單以及內存佔用低。 第一個版本由 Igor Sysoev 發佈於2002年，到現在有很多大型科技公司在使用，包括 Netflix、 Github、 Cloudflare、 WordPress.com 等等。</p><p>在這篇教程裏我們會“<strong>在 freebsd 10.2 系統上，安裝和配置 Nginx 網絡服務器作為 Apache 的反向代理</strong>”。 Apache 將在8080端口上運行 PHP ，而我們會配置 Nginx 運行在80端口以接收用户/訪問者的請求。如果80端口接收到用户瀏覽器的網頁請求，那麼 Nginx 會將該請求傳遞給運行在8080端口上的 Apache 網絡服務器和 PHP。</p><h4 id="前提條件" tabindex="-1">前提條件 <a class="header-anchor" href="#前提條件" aria-label="Permalink to “前提條件”">​</a></h4><ul><li>FreeBSD 10.2</li><li>Root 權限</li></ul><h3 id="步驟-1-更新系統" tabindex="-1">步驟 1 - 更新系統 <a class="header-anchor" href="#步驟-1-更新系統" aria-label="Permalink to “步驟 1 - 更新系統”">​</a></h3><p>使用 SSH 認證方式登錄到你的 FreeBSD 服務器，使用下面命令來更新你的系統：</p><pre><code>freebsd-update fetch
freebsd-update install
</code></pre><h3 id="步驟-2-安裝-apache" tabindex="-1">步驟 2 - 安裝 Apache <a class="header-anchor" href="#步驟-2-安裝-apache" aria-label="Permalink to “步驟 2 - 安裝 Apache”">​</a></h3><p>Apache 是開源的、使用範圍最廣的 web 服務器。在 FreeBSD 裏默認沒有安裝 Apache， 但是我們可以直接通過 /usr/ports/www/apache24 下的 ports 或軟件包來安裝，也可以直接使用 pkg 命令從 FreeBSD 軟件庫中安裝。在本教程中，我們將使用 pkg 命令從 FreeBSD 軟件庫中安裝：</p><pre><code>pkg install apache24
</code></pre><h3 id="步驟-3-安裝-php" tabindex="-1">步驟 3 - 安裝 PHP <a class="header-anchor" href="#步驟-3-安裝-php" aria-label="Permalink to “步驟 3 - 安裝 PHP”">​</a></h3><p>一旦成功安裝 Apache，接着將會安裝 PHP ，它來負責處理用户對 PHP 文件的請求。我們將會用到如下的 pkg 命令來安裝 PHP：</p><pre><code>pkg install php56 mod_php56 php56-mysql php56-mysqli
</code></pre><h3 id="步驟-4-配置-apache-和-php" tabindex="-1">步驟 4 - 配置 Apache 和 PHP <a class="header-anchor" href="#步驟-4-配置-apache-和-php" aria-label="Permalink to “步驟 4 - 配置 Apache 和 PHP”">​</a></h3><p>一旦所有都安裝好了，我們將會配置 Apache 運行在8080端口上， 並讓 PHP 與 Apache 一同工作。 要想配置Apache，我們可以編輯“httpd.conf”這個配置文件， 對於 PHP 我們只需要複製 “/usr/local/etc/”目錄下的 PHP 配置文件 php.ini。</p><p>進入到“/usr/local/etc/”目錄，並且複製 php.ini-production 文件到 php.ini :</p><pre><code>cd /usr/local/etc/
cp php.ini-production php.ini
</code></pre><p>下一步，在 Apache 目錄下通過編輯“httpd.conf”文件來配置 Apache：</p><pre><code>cd /usr/local/etc/apache24
nano -c httpd.conf
</code></pre><p>端口配置在第<strong>52</strong>行 :</p><pre><code>Listen 8080
</code></pre><p>服務器名稱配置在第<strong>219</strong>行:</p><pre><code>ServerName 127.0.0.1:8080
</code></pre><p>在第<strong>277</strong>行，添加 DirectoryIndex 文件，Apache 將用它來服務對目錄的請求：</p><pre><code>DirectoryIndex index.php index.html
</code></pre><p>在第<strong>287</strong>行下，配置 Apache ，添加腳本支持：</p><pre><code>&lt;FilesMatch &quot;\\.php$&quot;&gt;
SetHandler application/x-httpd-php
&lt;/FilesMatch&gt;
&lt;FilesMatch &quot;\\.phps$&quot;&gt;
SetHandler application/x-httpd-php-source
&lt;/FilesMatch&gt;
</code></pre><p>保存並退出。</p><p>現在用 sysrc 命令，來添加 Apache 為開機啓動項目：</p><pre><code>sysrc apache24_enable=yes
</code></pre><p>然後用下面的命令測試 Apache 的配置：</p><pre><code>apachectl configtest
</code></pre><p>如果到這裏都沒有問題的話，那麼就啓動 Apache 吧：</p><pre><code>service apache24 start
</code></pre><p>如果全部完畢，在“/usr/local/www/apache24/data”目錄下創建一個 phpinfo 文件來驗證 PHP 在 Apache 下順利運行：</p><pre><code>cd /usr/local/www/apache24/data
echo &quot;&lt;?php phpinfo(); ?&gt;&quot; &gt; info.php
</code></pre><p>現在就可以訪問 freebsd 的服務器 IP : 192.168.1.123:8080/info.php 。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/Apache-and-PHP-on-Port-8080.png" alt="Apache and PHP on Port 8080"></p><p>Apache 及 PHP 運行在 8080 端口。</p><h3 id="步驟-5-安裝-nginx" tabindex="-1">步驟 5 - 安裝 Nginx <a class="header-anchor" href="#步驟-5-安裝-nginx" aria-label="Permalink to “步驟 5 - 安裝 Nginx”">​</a></h3><p>Nginx 可以以較低內存佔用提供高性能的 Web 服務器和反向代理服務器。在這個步驟裏，我們將會使用 Nginx 作為Apache 的反向代理，因此讓我們用 pkg 命令來安裝它吧：</p><pre><code>pkg install nginx
</code></pre><h3 id="步驟-6-配置-nginx" tabindex="-1">步驟 6 - 配置 Nginx <a class="header-anchor" href="#步驟-6-配置-nginx" aria-label="Permalink to “步驟 6 - 配置 Nginx”">​</a></h3><p>一旦 Nginx 安裝完畢，在“<strong>nginx.conf</strong>”文件裏，我們需要做一個新的配置文件來替換掉原來的 nginx 配置文件。切換到“/usr/local/etc/nginx/”目錄下，並且備份默認 nginx.conf 文件：</p><pre><code>cd /usr/local/etc/nginx/
mv nginx.conf nginx.conf.oroginal
</code></pre><p>現在就可以創建一個新的 nginx 配置文件了：</p><pre><code>nano -c nginx.conf
</code></pre><p>然後粘貼下面的配置：</p><pre><code>user  www;
worker_processes  1;
error_log  /var/log/nginx/error.log;

events {
worker_connections  1024;
}

http {
include       mime.types;
default_type  application/octet-stream;

log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
access_log /var/log/nginx/access.log;

sendfile        on;
keepalive_timeout  65;

# Nginx cache configuration
proxy_cache_path    /var/nginx/cache levels=1:2 keys_zone=my-cache:8m max_size=1000m inactive=600m;
proxy_temp_path     /var/nginx/cache/tmp;
proxy_cache_key     &quot;$scheme$host$request_uri&quot;;

gzip  on;

server {
#listen       80;
server_name  _;

location /nginx_status {

stub_status on;
access_log off;
}

# redirect server error pages to the static page /50x.html
#
error_page   500 502 503 504  /50x.html;
location = /50x.html {
root   /usr/local/www/nginx-dist;
}

# proxy the PHP scripts to Apache listening on 127.0.0.1:8080
#
location ~ \\.php$ {
proxy_pass   http://127.0.0.1:8080;
include /usr/local/etc/nginx/proxy.conf;
}
}

include /usr/local/etc/nginx/vhost/*;

}
</code></pre><p>保存並退出。</p><p>下一步，在 nginx 目錄下面，創建一個 <strong>proxy.conf</strong> 文件，使其作為反向代理 :</p><pre><code>cd /usr/local/etc/nginx/
nano -c proxy.conf
</code></pre><p>粘貼如下配置：</p><pre><code>proxy_buffering         on;
proxy_redirect          off;
proxy_set_header        Host            $host;
proxy_set_header        X-Real-IP       $remote_addr;
proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
client_max_body_size    10m;
client_body_buffer_size 128k;
proxy_connect_timeout   90;
proxy_send_timeout      90;
proxy_read_timeout      90;
proxy_buffers           100 8k;
add_header              X-Cache $upstream_cache_status;
</code></pre><p>保存並退出。</p><p>最後一步，為 nginx 的高速緩存創建一個“/var/nginx/cache”的新目錄：</p><pre><code>mkdir -p /var/nginx/cache
</code></pre><h3 id="步驟-7-配置-nginx-的虛擬主機" tabindex="-1">步驟 7 - 配置 Nginx 的虛擬主機 <a class="header-anchor" href="#步驟-7-配置-nginx-的虛擬主機" aria-label="Permalink to “步驟 7 - 配置 Nginx 的虛擬主機”">​</a></h3><p>在這個步驟裏面，我們需要創建一個新的虛擬主機域“saitama.me”，其文檔根目錄為“/usr/local/www/saitama.me”，日誌文件放在“/var/log/nginx”目錄下。</p><p>我們必須做的第一件事情就是創建新的目錄來存放虛擬主機配置文件，我們創建的新目錄名為“<strong>vhost</strong>”。創建它：</p><pre><code>cd /usr/local/etc/nginx/
mkdir vhost
</code></pre><p>創建好 vhost 目錄，然後我們就進入這個目錄並創建一個新的虛擬主機文件。這裏我取名為“<strong>saitama.conf</strong>”：</p><pre><code>cd vhost/
nano -c saitama.conf
</code></pre><p>粘貼如下虛擬主機的配置：</p><pre><code>server {
# Replace with your freebsd IP
listen 192.168.1.123:80;

# Document Root
root /usr/local/www/saitama.me;
index index.php index.html index.htm;

# Domain
server_name www.saitama.me saitama.me;

# Error and Access log file
error_log  /var/log/nginx/saitama-error.log;
access_log /var/log/nginx/saitama-access.log main;

# Reverse Proxy Configuration
location ~ \\.php$ {
proxy_pass http://127.0.0.1:8080;
include /usr/local/etc/nginx/proxy.conf;

# Cache configuration
proxy_cache my-cache;
proxy_cache_valid 10s;
proxy_no_cache $cookie_PHPSESSID;
proxy_cache_bypass $cookie_PHPSESSID;
proxy_cache_key &quot;$scheme$host$request_uri&quot;;

}

# Disable Cache for the file type html, json
location ~* .(?:manifest|appcache|html?|xml|json)$ {
expires -1;
}

# Enable Cache the file 30 days
location ~* .(jpg|png|gif|jpeg|css|mp3|wav|swf|mov|doc|pdf|xls|ppt|docx|pptx|xlsx)$ {
proxy_cache_valid 200 120m;
expires 30d;
proxy_cache my-cache;
access_log off;
}

}
</code></pre><p>保存並退出。</p><p>下一步，為 nginx 和虛擬主機創建一個新的日誌目錄“/var/log/”：</p><pre><code>mkdir -p /var/log/nginx/
</code></pre><p>如果一切順利，在文件的根目錄下創建目錄 saitama.me 用作文檔根：</p><pre><code>cd /usr/local/www/
mkdir saitama.me
</code></pre><h3 id="步驟-8-測試" tabindex="-1">步驟 8 - 測試 <a class="header-anchor" href="#步驟-8-測試" aria-label="Permalink to “步驟 8 - 測試”">​</a></h3><p>在這個步驟裏面，我們只是測試我們的 nginx 和虛擬主機的配置。</p><p>用如下命令測試 nginx 的配置：</p><pre><code>nginx -t
</code></pre><p>如果一切都沒有問題，用 sysrc 命令添加 nginx 為開機啓動項，並且啓動 nginx 和重啓 apache：</p><pre><code>sysrc nginx_enable=yes
service nginx start
service apache24 restart
</code></pre><p>一切完畢後，在 saitama.me 目錄下，添加一個新的 phpinfo 文件來驗證 php 的正常運行：</p><pre><code>cd /usr/local/www/saitama.me
echo &quot;&lt;?php phpinfo(); ?&gt;&quot; &gt; info.php
</code></pre><p>然後訪問這個域名： <strong>www.saitama.me/info.php</strong>。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/Virtualhost-Configured-saitamame.png" alt="Virtualhost Configured saitamame"></p><p>Nginx 作為 Apache 的反向代理運行了，PHP 也同樣工作了。</p><p>這是另一個結果：</p><p>測試無緩存的 .html 文件。</p><pre><code>curl -I www.saitama.me
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/html-with-no-cache.png" alt="html with no-cache"></p><p>測試有三十天緩存的 .css 文件。</p><pre><code>curl -I www.saitama.me/test.css
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/css-file-30day-cache.png" alt="css file 30day cache"></p><p>測試緩存的 .php 文件：</p><pre><code>curl -I www.saitama.me/info.php
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/PHP-file-cached.png" alt="PHP file cached"></p><p>全部搞定。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Nginx 是最受歡迎的 HTTP 和反向代理服務器，擁有豐富的功能、高性能、低內存/RAM 佔用。Nginx 也用於緩存， 我們可以在網絡上緩存靜態文件使得網頁加速，並且緩存用户請求的 php 文件。 Nginx 容易配置和使用，可以將它用作 HTTP 服務器或者 apache 的反向代理。</p><hr>`,96)),r("p",null,[e[1]||(e[1]=n("via: ",-1)),o(a,{href:"http://linoxide.com/linux-how-to/install-nginx-reverse-proxy-apache-freebsd-10-2/"},{default:p(()=>[...e[0]||(e[0]=[n("http://linoxide.com/linux-how-to/install-nginx-reverse-proxy-apache-freebsd-10-2/",-1)])]),_:1})]),r("p",null,[e[6]||(e[6]=n("作者：",-1)),o(a,{href:"http://linoxide.com/author/arulm/"},{default:p(()=>[...e[2]||(e[2]=[n("Arul",-1)])]),_:1}),e[7]||(e[7]=n(" 譯者：",-1)),o(a,{href:"https://github.com/KnightJoker"},{default:p(()=>[...e[3]||(e[3]=[n("KnightJoker",-1)])]),_:1}),e[8]||(e[8]=n(" 校對：",-1)),o(a,{href:"https://github.com/carolinewuyan"},{default:p(()=>[...e[4]||(e[4]=[n("Caroline",-1)])]),_:1}),e[9]||(e[9]=n("，",-1)),o(a,{href:"https://github.com/wxy"},{default:p(()=>[...e[5]||(e[5]=[n("wxy",-1)])]),_:1})]),r("p",null,[e[12]||(e[12]=n("本文由 ",-1)),o(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[10]||(e[10]=[n("LCTT",-1)])]),_:1}),e[13]||(e[13]=n(" 原創編譯，",-1)),o(a,{href:"https://linux.cn/"},{default:p(()=>[...e[11]||(e[11]=[n("Linux中國",-1)])]),_:1}),e[14]||(e[14]=n(" 榮譽推出",-1))])])}const y=t(h,[["render",d]]);export{w as __pageData,y as default};
