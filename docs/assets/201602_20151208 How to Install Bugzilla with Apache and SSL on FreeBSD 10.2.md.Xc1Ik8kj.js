import{_ as r,a0 as n,w as i,s,ao as c,I as t,x as l,a1 as o,A as p}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const q=JSON.parse('{"title":"在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla | LCTT x X-CMD","titleTemplate":false,"description":"在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151208 How to Install Bugzilla with Apache and SSL on FreeBSD 10.2","title":"在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla","tag":"201602","desc":""},"relativePath":"201602/20151208 How to Install Bugzilla with Apache and SSL on FreeBSD 10.2.md","filePath":"[post].md"}'),d={name:"201602/20151208 How to Install Bugzilla with Apache and SSL on FreeBSD 10.2.md"};function u(g,e,h,m,b,z){const a=n("Link");return i(),s("div",null,[e[13]||(e[13]=c(`<h1 id="在-freebsd-10-2-上如何通过配置-apache-和-ssl-安装-bugzilla" tabindex="-1">在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla <a class="header-anchor" href="#在-freebsd-10-2-上如何通过配置-apache-和-ssl-安装-bugzilla" aria-label="Permalink to “在 FreeBSD 10.2 上如何通过配置 Apache 和 SSL 安装 Bugzilla”">​</a></h1><p>Bugzilla 是一款开源的 Web 应用，用于 bug 跟踪系统和测试工具，由 mozilla 开发，并采用 Mozilla 公共许可证授权（MPL）。它经常被一些高科技公司如 mozilla、红帽公司和 gnome 使用。Bugzilla 起初由 Terry Weissman开发于1998年，它用 perl 语言编写，用 MySQL 作为后端数据库。它是一款旨在帮助管理软件开发的服务器软件，它有丰富的功能、高度优化的数据库、卓越的安全性、高级的搜索工具、集成了邮件功能等等。</p><p>在本教程中，我们将安装 bugzilla 5.0 ，采用 apache 作为 Web 服务器，并为它启用 SSL，然后在 freebsd 10.2 上安装 mysql 5.1 来作为数据库系统。</p><h4 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to “准备”">​</a></h4><ul><li>FreeBSD 10.2 - 64位</li><li>Root 权限</li></ul><h3 id="第一步-更新系统" tabindex="-1">第一步 - 更新系统 <a class="header-anchor" href="#第一步-更新系统" aria-label="Permalink to “第一步 - 更新系统”">​</a></h3><p>用 ssh 登录 freebsd 服务器，并更新软件库：</p><pre><code>sudo su
freebsd-update fetch
freebsd-update install
</code></pre><h3 id="第二步-安装并配置-apache" tabindex="-1">第二步 - 安装并配置 Apache <a class="header-anchor" href="#第二步-安装并配置-apache" aria-label="Permalink to “第二步 - 安装并配置 Apache”">​</a></h3><p>在这一步我们将使用 pkg 命令从 freebsd 软件库中安装 apache，然后在 apache24 目录下编辑 &quot;httpd.conf&quot; 文件，来配置 apache 以启用 SSL 和 CGI 支持。</p><p>用 pkg 命令安装 apache：</p><pre><code>pkg install apache24
</code></pre><p>进入 apache 目录并用 nano 编辑器编辑&quot;httpd.conf&quot;文件：</p><pre><code>cd /usr/local/etc/apache24
nano -c httpd.conf
</code></pre><p>取消下面列出行的注释：</p><pre><code>#第70行
LoadModule authn_socache_module libexec/apache24/mod_authn_socache.so

#第89行
LoadModule socache_shmcb_module libexec/apache24/mod_socache_shmcb.so

#第117行
LoadModule expires_module libexec/apache24/mod_expires.so

#第141行，启用SSL
LoadModule ssl_module libexec/apache24/mod_ssl.so

#第162行，支持cgi
LoadModule cgi_module libexec/apache24/mod_cgi.so

#第174行，启用mod_rewrite
LoadModule rewrite_module libexec/apache24/mod_rewrite.so

#第219行，服务器名配置
ServerName 127.0.0.1:80
</code></pre><p>保存并退出。</p><p>接着，我们需要从 freebsd 库中安装 mod perl，并启用它：</p><pre><code>pkg install ap24-mod_perl2
</code></pre><p>启用 mod_perl，编辑&quot;httpd.conf&quot;文件并添加&quot;Loadmodule&quot;行：</p><pre><code>nano -c httpd.conf
</code></pre><p>添加该行：</p><pre><code>#第175行
LoadModule perl_module libexec/apache24/mod_perl.so
</code></pre><p>保存并退出。</p><p>在启用 apache 之前，用 sysrc 命令添加以下行作为开机启动项：</p><pre><code>sysrc apache24_enable=yes
service apache24 start
</code></pre><h3 id="第三步-安装并配置-mysql-数据库" tabindex="-1">第三步 - 安装并配置 MySQL 数据库 <a class="header-anchor" href="#第三步-安装并配置-mysql-数据库" aria-label="Permalink to “第三步 - 安装并配置 MySQL 数据库”">​</a></h3><p>我们要用 mysql 5.1 来作为后端数据库并且支持 perl 模块。用 pkg 命令安装 mysql 5.1：</p><pre><code>pkg install p5-DBD-mysql51 mysql51-server mysql51-client
</code></pre><p>现在我们要将 mysql 服务设置为开机启动，然后为 mysql 配置 root 密码。</p><p>运行以下命令来完成上述所有操作：</p><pre><code>sysrc mysql_enable=yes
service mysql-server start
mysqladmin -u root password aqwe123
</code></pre><p>注意：</p><p>这里 mysql 密码为：aqwe123</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Configure-MySQL-Password.png" alt="Configure MySQL Password"></p><p>以上步骤都完成之后，我们用 root 登录 mysql shell，然后为 bugzilla 安装创建一个新的数据库和用户。</p><p>用以下命令登录 mysql shell：</p><pre><code>mysql -u root -p
password: aqwe123
</code></pre><p>添加数据库：</p><pre><code>create database bugzilladb;
create user bugzillauser@localhost identified by &#39;bugzillauser@&#39;;
grant all privileges on bugzilladb.* to bugzillauser@localhost identified by &#39;bugzillauser@&#39;;
flush privileges;
\\q
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Creating-Database-for-Bugzilla.png" alt="Creating Database for Bugzilla"></p><p>bugzilla 的数据库创建好了，名字为&quot;bugzilladb&quot;，用户名和密码分别为&quot;bugzillauser&quot;和&quot;bugzillauser@&quot;。</p><h3 id="第四步-生成新的-ssl-证书" tabindex="-1">第四步 - 生成新的 SSL 证书 <a class="header-anchor" href="#第四步-生成新的-ssl-证书" aria-label="Permalink to “第四步 - 生成新的 SSL 证书”">​</a></h3><p>在 bugzilla 站点的 &quot;ssl&quot; 目录里生成新的自签名 SSL 证书。</p><p>前往 apache24 目录并在此创建新目录 &quot;ssl&quot;：</p><pre><code>cd /usr/local/etc/apache24/
mkdir ssl; cd ssl
</code></pre><p>接着，用 openssl 命令生成证书文件，然后更改其权限：</p><pre><code>sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /usr/local/etc/apache24/ssl/bugzilla.key -out /usr/local/etc/apache24/ssl/bugzilla.crt
chmod 600 *
</code></pre><h3 id="第五步-配置虚拟主机" tabindex="-1">第五步 - 配置虚拟主机 <a class="header-anchor" href="#第五步-配置虚拟主机" aria-label="Permalink to “第五步 - 配置虚拟主机”">​</a></h3><p>我们将在 &quot;/usr/local/www/bugzilla&quot; 目录里安装 bugzilla，所以我们必须为它创建新的虚拟主机配置。</p><p>前往 apache 目录并为虚拟主机文件创建名为 &quot;vhost&quot; 的新目录：</p><pre><code>cd /usr/local/etc/apache24/
mkdir vhost; cd vhost
</code></pre><p>现在为虚拟主机文件创建新文件 &quot;bugzilla.conf&quot;：</p><pre><code>nano -c bugzilla.conf
</code></pre><p>将以下配置粘贴进去：</p><pre><code>&lt;VirtualHost *:80&gt;
ServerName mybugzilla.me
ServerAlias www.mybuzilla.me
DocumentRoot /usr/local/www/bugzilla
Redirect permanent / https://mybugzilla.me/
&lt;/VirtualHost&gt;

Listen 443
&lt;VirtualHost _default_:443&gt;
ServerName mybugzilla.me
DocumentRoot /usr/local/www/bugzilla

ErrorLog &quot;/var/log/mybugzilla.me-error_log&quot;
CustomLog &quot;/var/log/mybugzilla.me-access_log&quot; common

SSLEngine On
SSLCertificateFile /usr/local/etc/apache24/ssl/bugzilla.crt
SSLCertificateKeyFile /usr/local/etc/apache24/ssl/bugzilla.key

&lt;Directory &quot;/usr/local/www/bugzilla&quot;&gt;
AddHandler cgi-script .cgi
Options +ExecCGI
DirectoryIndex index.cgi index.html
AllowOverride Limit FileInfo Indexes Options
Require all granted
&lt;/Directory&gt;
&lt;/VirtualHost&gt;
</code></pre><p>保存并退出。</p><p>上述都完成之后，为 bugzilla 安装创建新目录，并在 httpd.conf 文件添加虚拟主机配置来启用 bugzilla虚拟主机。</p><p>在 &quot;apache24&quot; 目录下运行以下命令：</p><pre><code>mkdir -p /usr/local/www/bugzilla
cd /usr/local/etc/apache24/
nano -c httpd.conf
</code></pre><p>文末，添加以下配置：</p><pre><code>Include etc/apache24/vhost/*.conf
</code></pre><p>保存并退出。</p><p>现在用 &quot;apachectl&quot; 命令测试一下 apache 的配置并重启它：</p><pre><code>apachectl configtest
service apache24 restart
</code></pre><h3 id="第六步-安装-bugzilla" tabindex="-1">第六步 - 安装 Bugzilla <a class="header-anchor" href="#第六步-安装-bugzilla" aria-label="Permalink to “第六步 - 安装 Bugzilla”">​</a></h3><p>我们可以通过下载源来手动安装 bugzilla 了，或从 freebsd 库中安装也可以。在这一步中我们将用 pkg 命令从 freebsd 库中安装 bugzilla：</p><pre><code>pkg install bugzilla50
</code></pre><p>以上步骤都完成之后，前往 bugzilla 安装目录并安装所有 bugzilla 需要的 perl 模块。</p><pre><code>cd /usr/local/www/bugzilla
./install-module --all
</code></pre><p>要等到所有都完成，这需要点时间。</p><p>下一步，在 bugzilla 的安装目录中执行 &quot;checksetup.pl&quot; 文件来生成配置文件 &quot;localconfig&quot;。</p><pre><code>./checksetup.pl
</code></pre><p>你会看到一条关于数据库配置错误的消息，你得用 nano 编辑器编辑一下 &quot;localconfig&quot; 文件：</p><pre><code>nano -c localconfig
</code></pre><p>现在添加第三步创建的数据库。</p><pre><code>#第57行
$db_name = &#39;bugzilladb&#39;;

#第60行
$db_user = &#39;bugzillauser&#39;;

#第67行
$db_pass = &#39;bugzillauser@&#39;;
</code></pre><p>保存并退出。</p><p>然后再次运行 &quot;checksetup.pl&quot;：</p><pre><code>./checksetup.pl
</code></pre><p>你会收到输入邮箱名和管理员账号的提示，你只要输入你的邮箱、用户名和密码就行了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Admin-Setup.png" alt="Admin Setup"></p><p>最后，我们需要把安装目录的属主改成 &quot;www&quot;，然后用服务命令重启 apache：</p><pre><code>cd /usr/local/www/
chown -R www:www bugzilla
service apache24 restart
</code></pre><p>现在 Bugzilla 已经安装好了，你可以通过访问 mybugzilla.me 来查看，并且将会重定向到 https 连接。</p><p>Bugzilla 首页：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Bugzilla-Home.png" alt="Bugzilla Home"></p><p>Bugzilla admin 面板：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Bugzilla-Admin-Page.png" alt="Bugzilla Admin Page"></p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3><p>Bugzilla 是一个基于 web 的应用，并能帮助你管理软件开发，它用 perl 开发并以 MySQL 作为数据库系统。Bugzilla 帮助 mozilla、redhat、gnome 等公司完成软件开发工作。Bugzilla 有很多功能并易于配置和安装。</p><hr>`,92)),t("p",null,[e[1]||(e[1]=l("via: ",-1)),o(a,{href:"http://linoxide.com/tools/install-bugzilla-apache-ssl-freebsd-10-2/"},{default:p(()=>[...e[0]||(e[0]=[l("http://linoxide.com/tools/install-bugzilla-apache-ssl-freebsd-10-2/",-1)])]),_:1})]),t("p",null,[e[5]||(e[5]=l("作者：",-1)),o(a,{href:"http://linoxide.com/author/arulm/"},{default:p(()=>[...e[2]||(e[2]=[l("Arul",-1)])]),_:1}),e[6]||(e[6]=l(" 译者：",-1)),o(a,{href:"https://github.com/ZTinoZ"},{default:p(()=>[...e[3]||(e[3]=[l("ZTinoZ",-1)])]),_:1}),e[7]||(e[7]=l(" 校对：",-1)),o(a,{href:"https://github.com/carolinewuyan"},{default:p(()=>[...e[4]||(e[4]=[l("Caroline",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=l("本文由 ",-1)),o(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[8]||(e[8]=[l("LCTT",-1)])]),_:1}),e[11]||(e[11]=l(" 原创编译，",-1)),o(a,{href:"https://linux.cn/"},{default:p(()=>[...e[9]||(e[9]=[l("Linux中国",-1)])]),_:1}),e[12]||(e[12]=l(" 荣誉推出",-1))])])}const w=r(d,[["render",u]]);export{q as __pageData,w as default};
