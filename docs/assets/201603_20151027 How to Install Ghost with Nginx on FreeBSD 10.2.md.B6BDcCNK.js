import{_ as p,a0 as a,w as d,s as i,ao as g,I as r,x as t,a1 as n,A as s}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost | LCTT x X-CMD","titleTemplate":false,"description":"如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost | LCTT (201603) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost | LCTT (201603) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201603/20151027 How to Install Ghost with Nginx on FreeBSD 10.2","title":"如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost","tag":"201603","desc":""},"relativePath":"201603/20151027 How to Install Ghost with Nginx on FreeBSD 10.2.md","filePath":"[post].md"}'),l={name:"201603/20151027 How to Install Ghost with Nginx on FreeBSD 10.2.md"};function h(c,o,u,m,x,q){const e=a("Link");return d(),i("div",null,[o[13]||(o[13]=g(`<h1 id="如何在-freebsd-10-2-上安装使用-nginx-的-ghost" tabindex="-1">如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost <a class="header-anchor" href="#如何在-freebsd-10-2-上安装使用-nginx-的-ghost" aria-label="Permalink to “如何在 FreeBSD 10.2 上安装使用 Nginx 的 Ghost”">​</a></h1><p>Node.js 是用于开发服务器端应用程序的开源的运行时环境。Node.js 应用使用 JavaScript 编写，能在任何有 Node.js 运行时的服务器上运行。它跨平台支持 Linux、Windows、OSX、IBM AIX，也包括 FreeBSD。Node.js 是 Ryan Dahl 以及在 Joyent 工作的其他开发者于 2009 年创建的。它的设计目标就是构建可扩展的网络应用程序。</p><p>Ghost 是使用 Node.js 编写的博客平台。它不仅开源，而且有很漂亮的界面设计、对用户友好并且免费。它允许你快速地在网络上发布内容，或者创建你的混合网站。</p><p>在这篇指南中我们会在 FreeBSD 上安装使用 Nginx 作为 web 服务器的 Ghost。我们会在 FreeBSD 10.2 上安装 Node.js、Npm、nginx 和 sqlite3。</p><h3 id="第一步-安装-node-js-npm-和-sqlite3" tabindex="-1">第一步 - 安装 Node.js npm 和 Sqlite3 <a class="header-anchor" href="#第一步-安装-node-js-npm-和-sqlite3" aria-label="Permalink to “第一步 - 安装 Node.js npm 和 Sqlite3”">​</a></h3><p>如果你想在你的服务器上运行 ghost，你必须安装 node.js。在这一部分，我们会从 freebsd 移植软件库中安装 node.js，请进入库目录 &quot;/usr/ports/www/node&quot; 并通过运行命令 &quot;<strong>make</strong>&quot; 安装。</p><pre><code>cd /usr/ports/www/node
make install clean
</code></pre><p>如果你已经安装了 node.js，那就进入到 npm 目录并安装它。<strong>npm</strong> 是用于安装、发布和管理 node 程序的软件包管理器。</p><pre><code>cd /usr/ports/www/npm/
make install clean
</code></pre><p>下一步，安装 sqlite3。默认情况下 ghost 使用 sqlite3 作为数据库系统，但它也支持 mysql/mariadb 和 postgresql。我们会使用 sqlite3 作为默认数据库。</p><pre><code>cd /usr/ports/databases/sqlite3/
make install clean
</code></pre><p>如果安装完了所有软件，还有检查 node.js 和 npm 的版本：</p><pre><code>node --version
v0.12.6

npm --version
2.11.3

sqlite3 --version
3.8.10.2
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/node-and-npm-version.png" alt="node 和 npm 版本"></p><h3 id="第二步-添加-ghost-用户" tabindex="-1">第二步 - 添加 Ghost 用户 <a class="header-anchor" href="#第二步-添加-ghost-用户" aria-label="Permalink to “第二步 - 添加 Ghost 用户”">​</a></h3><p>我们会以普通用户 &quot;<strong>ghost</strong>&quot; 身份安装和运行 ghost。用 &quot;adduser&quot; 命令添加新用户：</p><pre><code>adduser ghost
FILL With Your INFO
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/Add-user-Ghost.png" alt="添加用户 Ghost"></p><h3 id="第三步-安装-ghost" tabindex="-1">第三步 - 安装 Ghost <a class="header-anchor" href="#第三步-安装-ghost" aria-label="Permalink to “第三步 - 安装 Ghost”">​</a></h3><p>我们会把 ghost 安装到 &quot;<strong>/var/www/</strong>&quot; 目录，首先新建目录然后进入到安装目录：</p><pre><code>mkdir -p /var/www/
cd /var/www/
</code></pre><p>用 wget 命令下载最新版本的 ghost：</p><pre><code>wget --no-check-certificate https://ghost.org/zip/ghost-latest.zip
</code></pre><p>把它解压到 &quot;<strong>ghost</strong>&quot; 目录：</p><pre><code>unzip -d ghost ghost-latest.zip
</code></pre><p>下一步，更改属主为 &quot;<strong>ghost</strong>&quot;，我们会以这个用户安装和运行它。</p><pre><code>chown -R ghost:ghost ghost/
</code></pre><p>都做完了的话，通过输入以下命令切换到 &quot;<strong>ghost</strong>&quot; 用户：</p><pre><code>su - ghost
</code></pre><p>然后进入到安装目录&quot;/var/www/ghost/&quot;：</p><pre><code>cd /var/www/ghost/
</code></pre><p>在安装 ghost 之前，我们需要为 node.js 安装 sqlite3 模块，用 npm 命令安装：</p><pre><code>setenv CXX c++ ; npm install sqlite3 --sqlite=/usr/local
</code></pre><p><strong>注意： 以 “ghost” 用户运行，而不是 root 用户。</strong></p><p>现在，我们准备好安装 ghost 了，用 npm 命令安装：</p><pre><code>npm install --production
</code></pre><p>下一步，复制配置文件 &quot;config.example.js&quot; 为 &quot;<strong>config.js</strong>&quot;，用 nano 编辑器编辑：</p><pre><code>cp config.example.js config.js
nano -c config.js
</code></pre><p>更改 server 模块的第 25 行：</p><pre><code>host: &#39;0.0.0.0&#39;,
</code></pre><p>保存并退出。</p><p>现在用下面的命令运行 ghost：</p><pre><code>npm start --production
</code></pre><p>通过访问服务器 ip 和 2368 号端口验证一下。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/Ghost-Installed.png" alt="Ghost 安装完成"></p><p>以 “ghost” 用户在 &quot;/var/www/ghost&quot; 目录安装了 ghost。</p><h3 id="第四步-作为-freebsd-服务运行-ghost" tabindex="-1">第四步 - 作为 FreeBSD 服务运行 Ghost <a class="header-anchor" href="#第四步-作为-freebsd-服务运行-ghost" aria-label="Permalink to “第四步 - 作为 FreeBSD 服务运行 Ghost”">​</a></h3><p>要在 freebsd 上以服务形式运行应用，你需要在 rc.d 目录添加脚本。我们会在 &quot;<strong>/usr/local/etc/rc.d/</strong>&quot; 目录为 ghost 创建新的服务脚本。</p><p>在创建服务脚本之前，为了以服务形式运行 ghost，我们需要安装一个 node.js 模块，用 npm 命令以 <strong>sudo/root</strong> 权限安装 forever 模块：</p><pre><code>npm install forever -g
</code></pre><p>现在进入到 rc.d 目录并创建名为 ghost 的新文件：</p><pre><code>cd /usr/local/etc/rc.d/
nano -c ghost
</code></pre><p>粘贴下面的服务脚本：</p><pre><code>#!/bin/sh

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
</code></pre><p>保存并退出。</p><p>下一步，给 ghost 服务脚本添加可执行权限：</p><pre><code>chmod +x ghost
</code></pre><p>为 ghost 日志创建新的目录和文件，并把属主修改为 ghost 用户：</p><pre><code>mkdir -p /var/www/ghost/
touch /var/www/ghost/ghost.log
chown -R /var/www/ghost/
</code></pre><p>最后，如果你想运行 ghost 服务，你需要用 sysrc 命令添加 ghost 服务到开机启动应用程序：</p><pre><code>sysrc ghost_enable=yes
</code></pre><p>用以下命令启动 ghost：</p><pre><code>service ghost start
</code></pre><p>其它命令：</p><pre><code>service ghost stop
service ghost status
service ghost restart
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/Ghost-service-command.png" alt="Ghost 服务命令"></p><h3 id="第五步-为-ghost-安装和配置-nginx" tabindex="-1">第五步 - 为 Ghost 安装和配置 Nginx <a class="header-anchor" href="#第五步-为-ghost-安装和配置-nginx" aria-label="Permalink to “第五步 - 为 Ghost 安装和配置 Nginx”">​</a></h3><p>默认情况下，ghost 会以独立模式运行，你可以不用 Nginx、apache 或 IIS web 服务器直接运行它。但在这篇指南中我们会安装和配置 nginx 和 ghost 一起使用。</p><p>用 pkg 命令从 freebsd 库中安装 nginx：</p><pre><code>pkg install nginx
</code></pre><p>下一步，进入 nginx 配置目录并为 virtualhost 配置创建新的目录。</p><pre><code>cd /usr/local/etc/nginx/
mkdir virtualhost/
</code></pre><p>进入 virtualhost 目录，用 nano 编辑器创建名为 ghost.conf 的新文件：</p><pre><code>cd virtualhost/
nano -c ghost.conf
</code></pre><p>粘贴下面的 virtualhost 配置：</p><pre><code>server {
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
</code></pre><p>保存并退出。</p><p>要启用 virtualhost 配置，你需要把那个文件添加到 <strong>nginx.conf</strong>。进入 nginx 配置目录并编辑 nginx.conf 文件：</p><pre><code>cd /usr/local/etc/nginx/
nano -c nginx.conf
</code></pre><p>在最后一行的前面，包含 virtualhost 配置目录：</p><pre><code>[......]

include virtualhost/*.conf;

}
</code></pre><p>保存并退出。</p><p>用命令 &quot;<strong>nginx -t</strong>&quot; 测试 nginx 配置，如果没有错误，用 sysrc 添加 nginx 到开机启动：</p><pre><code>sysrc nginx_enable=yes
</code></pre><p>并启动 nginx：</p><pre><code>service nginx start
</code></pre><p>现在测试所有 nginx 和 virtualhost 配置。请打开你的浏览器并输入： ghost.me</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/ghost.me-successfully.png" alt="ghost.me 成功运行"></p><p>Ghost.me 正在成功运行。</p><p>如果你想要检查 nginx 服务器，可以使用 &quot;<strong>curl</strong>&quot; 命令。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/10/ghost-and-nginx-test.png" alt="测试 ghost 和 nginx"></p><p>Ghost 正在 nginx 上运行。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>Node.js 是 Ryan Dahl 为创建和开发可扩展服务器端应用程序创建的运行时环境。Ghost 是使用 node.js 编写的开源博客平台，它有漂亮的外观设计并且易于使用。默认情况下，ghost 是可以单独运行的 web 应用程序，并不需要类似 apache、nginx 或 IIS 之类的 web 服务器，但我们也可以和 web 服务器集成（在这篇指南中使用 Nginx）。Sqlite 是 ghost 默认使用的数据库，它还支持 msql/mariadb 和 postgresql。Ghost 能快速部署并且易于使用和配置。</p><hr>`,95)),r("p",null,[o[1]||(o[1]=t("via: ",-1)),n(e,{href:"http://linoxide.com/linux-how-to/install-ghost-nginx-freebsd-10-2/"},{default:s(()=>[...o[0]||(o[0]=[t("http://linoxide.com/linux-how-to/install-ghost-nginx-freebsd-10-2/",-1)])]),_:1})]),r("p",null,[o[5]||(o[5]=t("作者：",-1)),n(e,{href:"http://linoxide.com/author/arulm/"},{default:s(()=>[...o[2]||(o[2]=[t("Arul",-1)])]),_:1}),o[6]||(o[6]=t(" 译者：",-1)),n(e,{href:"http://mutouxiaogui.cn/blog/"},{default:s(()=>[...o[3]||(o[3]=[t("ictlyh",-1)])]),_:1}),o[7]||(o[7]=t(" 校对：",-1)),n(e,{href:"https://github.com/wxy"},{default:s(()=>[...o[4]||(o[4]=[t("wxy",-1)])]),_:1})]),r("p",null,[o[10]||(o[10]=t("本文由 ",-1)),n(e,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...o[8]||(o[8]=[t("LCTT",-1)])]),_:1}),o[11]||(o[11]=t(" 原创编译，",-1)),n(e,{href:"https://linux.cn/"},{default:s(()=>[...o[9]||(o[9]=[t("Linux中国",-1)])]),_:1}),o[12]||(o[12]=t(" 荣誉推出",-1))])])}const b=p(l,[["render",h]]);export{_ as __pageData,b as default};
