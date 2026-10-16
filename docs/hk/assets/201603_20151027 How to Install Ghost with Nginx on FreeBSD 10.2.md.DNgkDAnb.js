import{_ as p,a0 as a,w as d,s as i,ao as g,I as r,x as t,a1 as n,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost | LCTT x X-CMD","titleTemplate":false,"description":"如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost | LCTT (201603) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost | LCTT (201603) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201603/20151027 How to Install Ghost with Nginx on FreeBSD 10.2","title":"如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost","tag":"201603","desc":""},"relativePath":"201603/20151027 How to Install Ghost with Nginx on FreeBSD 10.2.md","filePath":"[post].md"}'),l={name:"201603/20151027 How to Install Ghost with Nginx on FreeBSD 10.2.md"};function h(c,o,u,m,x,q){const e=a("Link");return d(),i("div",null,[o[13]||(o[13]=g(`<h1 id="如何在-freebsd-10-2-上安裝使用-nginx-的-ghost" tabindex="-1">如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost <a class="header-anchor" href="#如何在-freebsd-10-2-上安裝使用-nginx-的-ghost" aria-label="Permalink to “如何在 FreeBSD 10.2 上安裝使用 Nginx 的 Ghost”">​</a></h1><p>Node.js 是用於開發服務器端應用程序的開源的運行時環境。Node.js 應用使用 JavaScript 編寫，能在任何有 Node.js 運行時的服務器上運行。它跨平台支持 Linux、Windows、OSX、IBM AIX，也包括 FreeBSD。Node.js 是 Ryan Dahl 以及在 Joyent 工作的其他開發者於 2009 年創建的。它的設計目標就是構建可擴展的網絡應用程序。</p><p>Ghost 是使用 Node.js 編寫的Blog平台。它不僅開源，而且有很漂亮的界面設計、對用户友好並且免費。它允許你快速地在網絡上發佈內容，或者創建你的混合網站。</p><p>在這篇指南中我們會在 FreeBSD 上安裝使用 Nginx 作為 web 服務器的 Ghost。我們會在 FreeBSD 10.2 上安裝 Node.js、Npm、nginx 和 sqlite3。</p><h3 id="第一步-安裝-node-js-npm-和-sqlite3" tabindex="-1">第一步 - 安裝 Node.js npm 和 Sqlite3 <a class="header-anchor" href="#第一步-安裝-node-js-npm-和-sqlite3" aria-label="Permalink to “第一步 - 安裝 Node.js npm 和 Sqlite3”">​</a></h3><p>如果你想在你的服務器上運行 ghost，你必須安裝 node.js。在這一部分，我們會從 freebsd 移植軟件庫中安裝 node.js，請進入庫目錄 &quot;/usr/ports/www/node&quot; 並通過運行命令 &quot;<strong>make</strong>&quot; 安裝。</p><pre><code>cd /usr/ports/www/node
make install clean
</code></pre><p>如果你已經安裝了 node.js，那就進入到 npm 目錄並安裝它。<strong>npm</strong> 是用於安裝、發佈和管理 node 程序的軟件包管理器。</p><pre><code>cd /usr/ports/www/npm/
make install clean
</code></pre><p>下一步，安裝 sqlite3。默認情況下 ghost 使用 sqlite3 作為資料庫系統，但它也支持 mysql/mariadb 和 postgresql。我們會使用 sqlite3 作為默認資料庫。</p><pre><code>cd /usr/ports/databases/sqlite3/
make install clean
</code></pre><p>如果安裝完了所有軟件，還有檢查 node.js 和 npm 的版本：</p><pre><code>node --version
v0.12.6

npm --version
2.11.3

sqlite3 --version
3.8.10.2
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/node-and-npm-version.png" alt="node 和 npm 版本"></p><h3 id="第二步-添加-ghost-用户" tabindex="-1">第二步 - 添加 Ghost 用户 <a class="header-anchor" href="#第二步-添加-ghost-用户" aria-label="Permalink to “第二步 - 添加 Ghost 用户”">​</a></h3><p>我們會以普通用户 &quot;<strong>ghost</strong>&quot; 身份安裝和運行 ghost。用 &quot;adduser&quot; 命令添加新用户：</p><pre><code>adduser ghost
FILL With Your INFO
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/Add-user-Ghost.png" alt="添加用户 Ghost"></p><h3 id="第三步-安裝-ghost" tabindex="-1">第三步 - 安裝 Ghost <a class="header-anchor" href="#第三步-安裝-ghost" aria-label="Permalink to “第三步 - 安裝 Ghost”">​</a></h3><p>我們會把 ghost 安裝到 &quot;<strong>/var/www/</strong>&quot; 目錄，首先新建目錄然後進入到安裝目錄：</p><pre><code>mkdir -p /var/www/
cd /var/www/
</code></pre><p>用 wget 命令下載最新版本的 ghost：</p><pre><code>wget --no-check-certificate https://ghost.org/zip/ghost-latest.zip
</code></pre><p>把它解壓到 &quot;<strong>ghost</strong>&quot; 目錄：</p><pre><code>unzip -d ghost ghost-latest.zip
</code></pre><p>下一步，更改屬主為 &quot;<strong>ghost</strong>&quot;，我們會以這個用户安裝和運行它。</p><pre><code>chown -R ghost:ghost ghost/
</code></pre><p>都做完了的話，通過輸入以下命令切換到 &quot;<strong>ghost</strong>&quot; 用户：</p><pre><code>su - ghost
</code></pre><p>然後進入到安裝目錄&quot;/var/www/ghost/&quot;：</p><pre><code>cd /var/www/ghost/
</code></pre><p>在安裝 ghost 之前，我們需要為 node.js 安裝 sqlite3 模組，用 npm 命令安裝：</p><pre><code>setenv CXX c++ ; npm install sqlite3 --sqlite=/usr/local
</code></pre><p><strong>注意： 以 “ghost” 用户運行，而不是 root 用户。</strong></p><p>現在，我們準備好安裝 ghost 了，用 npm 命令安裝：</p><pre><code>npm install --production
</code></pre><p>下一步，複製配置文件 &quot;config.example.js&quot; 為 &quot;<strong>config.js</strong>&quot;，用 nano 編輯器編輯：</p><pre><code>cp config.example.js config.js
nano -c config.js
</code></pre><p>更改 server 模組的第 25 行：</p><pre><code>host: &#39;0.0.0.0&#39;,
</code></pre><p>保存並退出。</p><p>現在用下面的命令運行 ghost：</p><pre><code>npm start --production
</code></pre><p>通過訪問服務器 ip 和 2368 號端口驗證一下。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/Ghost-Installed.png" alt="Ghost 安裝完成"></p><p>以 “ghost” 用户在 &quot;/var/www/ghost&quot; 目錄安裝了 ghost。</p><h3 id="第四步-作為-freebsd-服務運行-ghost" tabindex="-1">第四步 - 作為 FreeBSD 服務運行 Ghost <a class="header-anchor" href="#第四步-作為-freebsd-服務運行-ghost" aria-label="Permalink to “第四步 - 作為 FreeBSD 服務運行 Ghost”">​</a></h3><p>要在 freebsd 上以服務形式運行應用，你需要在 rc.d 目錄添加腳本。我們會在 &quot;<strong>/usr/local/etc/rc.d/</strong>&quot; 目錄為 ghost 創建新的服務腳本。</p><p>在創建服務腳本之前，為了以服務形式運行 ghost，我們需要安裝一個 node.js 模組，用 npm 命令以 <strong>sudo/root</strong> 權限安裝 forever 模組：</p><pre><code>npm install forever -g
</code></pre><p>現在進入到 rc.d 目錄並創建名為 ghost 的新文件：</p><pre><code>cd /usr/local/etc/rc.d/
nano -c ghost
</code></pre><p>粘貼下面的服務腳本：</p><pre><code>#!/bin/sh

# PROVIDE: ghost
# KEYWORD: shutdown
PATH=&quot;/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin&quot;

. /etc/rc.subr

name=&quot;ghost&quot;
rcvar=&quot;ghost_enable&quot;
extra_commands=&quot;status&quot;

load_rc_config ghost
: \${ghost_enable:=&quot;NO&quot;}

status_cmd=&quot;ghost_status&quot;
start_cmd=&quot;ghost_start&quot;
stop_cmd=&quot;ghost_stop&quot;
restart_cmd=&quot;ghost_restart&quot;

ghost=&quot;/var/www/ghost&quot;
log=&quot;/var/log/ghost/ghost.log&quot;
ghost_start() {
sudo -u ghost sh -c &quot;cd $ghost &amp;&amp; NODE_ENV=production forever start -al $log index.js&quot;
}

ghost_stop() {
sudo -u ghost sh -c &quot;cd $ghost &amp;&amp; NODE_ENV=production forever stop index.js&quot;
}

ghost_status() {
sudo -u ghost sh -c &quot;NODE_ENV=production forever list&quot;
}

ghost_restart() {
ghost_stop;
ghost_start;
}

run_rc_command &quot;$1&quot;
</code></pre><p>保存並退出。</p><p>下一步，給 ghost 服務腳本添加可執行權限：</p><pre><code>chmod +x ghost
</code></pre><p>為 ghost 日誌創建新的目錄和文件，並把屬主修改為 ghost 用户：</p><pre><code>mkdir -p /var/www/ghost/
touch /var/www/ghost/ghost.log
chown -R /var/www/ghost/
</code></pre><p>最後，如果你想運行 ghost 服務，你需要用 sysrc 命令添加 ghost 服務到開機啓動應用程序：</p><pre><code>sysrc ghost_enable=yes
</code></pre><p>用以下命令啓動 ghost：</p><pre><code>service ghost start
</code></pre><p>其它命令：</p><pre><code>service ghost stop
service ghost status
service ghost restart
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/Ghost-service-command.png" alt="Ghost 服務命令"></p><h3 id="第五步-為-ghost-安裝和配置-nginx" tabindex="-1">第五步 - 為 Ghost 安裝和配置 Nginx <a class="header-anchor" href="#第五步-為-ghost-安裝和配置-nginx" aria-label="Permalink to “第五步 - 為 Ghost 安裝和配置 Nginx”">​</a></h3><p>默認情況下，ghost 會以獨立模式運行，你可以不用 Nginx、apache 或 IIS web 服務器直接運行它。但在這篇指南中我們會安裝和配置 nginx 和 ghost 一起使用。</p><p>用 pkg 命令從 freebsd 庫中安裝 nginx：</p><pre><code>pkg install nginx
</code></pre><p>下一步，進入 nginx 配置目錄併為 virtualhost 配置創建新的目錄。</p><pre><code>cd /usr/local/etc/nginx/
mkdir virtualhost/
</code></pre><p>進入 virtualhost 目錄，用 nano 編輯器創建名為 ghost.conf 的新文件：</p><pre><code>cd virtualhost/
nano -c ghost.conf
</code></pre><p>粘貼下面的 virtualhost 配置：</p><pre><code>server {
listen 80;

#Your Domain
server_name ghost.me;

location ~* \\.(?:ico|css|js|gif|jpe?g|png|ttf|woff)$ {
access_log off;
expires 30d;
add_header Pragma public;
add_header Cache-Control &quot;public, mustrevalidate, proxy-revalidate&quot;;
proxy_pass http://127.0.0.1:2368;
}

location / {
add_header X-XSS-Protection &quot;1; mode=block&quot;;
add_header Cache-Control &quot;public, max-age=0&quot;;
add_header Content-Security-Policy &quot;script-src &#39;self&#39; ; font-src &#39;self&#39; ; connect-src &#39;self&#39; ; block-all-mixed-content; reflected-xss block; referrer no-referrer&quot;;
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $http_host;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_pass http://127.0.0.1:2368;
}

location = /robots.txt { access_log off; log_not_found off; }
location = /favicon.ico { access_log off; log_not_found off; }

location ~ /\\.ht {
deny all;
}

}
</code></pre><p>保存並退出。</p><p>要啓用 virtualhost 配置，你需要把那個文件添加到 <strong>nginx.conf</strong>。進入 nginx 配置目錄並編輯 nginx.conf 文件：</p><pre><code>cd /usr/local/etc/nginx/
nano -c nginx.conf
</code></pre><p>在最後一行的前面，包含 virtualhost 配置目錄：</p><pre><code>[......]

include virtualhost/*.conf;

}
</code></pre><p>保存並退出。</p><p>用命令 &quot;<strong>nginx -t</strong>&quot; 測試 nginx 配置，如果沒有錯誤，用 sysrc 添加 nginx 到開機啓動：</p><pre><code>sysrc nginx_enable=yes
</code></pre><p>並啓動 nginx：</p><pre><code>service nginx start
</code></pre><p>現在測試所有 nginx 和 virtualhost 配置。請打開你的瀏覽器並輸入： ghost.me</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/ghost.me-successfully.png" alt="ghost.me 成功運行"></p><p>Ghost.me 正在成功運行。</p><p>如果你想要檢查 nginx 服務器，可以使用 &quot;<strong>curl</strong>&quot; 命令。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/ghost-and-nginx-test.png" alt="測試 ghost 和 nginx"></p><p>Ghost 正在 nginx 上運行。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>Node.js 是 Ryan Dahl 為創建和開發可擴展服務器端應用程序創建的運行時環境。Ghost 是使用 node.js 編寫的開源Blog平台，它有漂亮的外觀設計並且易於使用。默認情況下，ghost 是可以單獨運行的 web 應用程序，並不需要類似 apache、nginx 或 IIS 之類的 web 服務器，但我們也可以和 web 服務器集成（在這篇指南中使用 Nginx）。Sqlite 是 ghost 默認使用的資料庫，它還支持 msql/mariadb 和 postgresql。Ghost 能快速部署並且易於使用和配置。</p><hr>`,95)),r("p",null,[o[1]||(o[1]=t("via: ",-1)),n(e,{href:"http://linoxide.com/linux-how-to/install-ghost-nginx-freebsd-10-2/"},{default:s(()=>[...o[0]||(o[0]=[t("http://linoxide.com/linux-how-to/install-ghost-nginx-freebsd-10-2/",-1)])]),_:1})]),r("p",null,[o[5]||(o[5]=t("作者：",-1)),n(e,{href:"http://linoxide.com/author/arulm/"},{default:s(()=>[...o[2]||(o[2]=[t("Arul",-1)])]),_:1}),o[6]||(o[6]=t(" 譯者：",-1)),n(e,{href:"http://mutouxiaogui.cn/blog/"},{default:s(()=>[...o[3]||(o[3]=[t("ictlyh",-1)])]),_:1}),o[7]||(o[7]=t(" 校對：",-1)),n(e,{href:"https://github.com/wxy"},{default:s(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),r("p",null,[o[10]||(o[10]=t("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原創編譯，",-1)),n(e,{href:"https://linux.cn/"},{default:s(()=>[...o[9]||(o[9]=[t("Linux中國",-1)])]),_:1}),o[12]||(o[12]=t(" 榮譽推出",-1))])])}const b=p(l,[["render",h]]);export{_ as __pageData,b as default};
