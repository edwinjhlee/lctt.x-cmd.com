import{_ as r,a0 as n,w as i,s,ao as c,I as t,x as l,a1 as o,A as p}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const q=JSON.parse('{"title":"在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla | LCTT x X-CMD","titleTemplate":false,"description":"在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151208 How to Install Bugzilla with Apache and SSL on FreeBSD 10.2","title":"在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla","tag":"201602","desc":""},"relativePath":"201602/20151208 How to Install Bugzilla with Apache and SSL on FreeBSD 10.2.md","filePath":"[post].md"}'),d={name:"201602/20151208 How to Install Bugzilla with Apache and SSL on FreeBSD 10.2.md"};function u(g,e,h,m,b,z){const a=n("Link");return i(),s("div",null,[e[13]||(e[13]=c(`<h1 id="在-freebsd-10-2-上如何通過配置-apache-和-ssl-安裝-bugzilla" tabindex="-1">在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla <a class="header-anchor" href="#在-freebsd-10-2-上如何通過配置-apache-和-ssl-安裝-bugzilla" aria-label="Permalink to “在 FreeBSD 10.2 上如何通過配置 Apache 和 SSL 安裝 Bugzilla”">​</a></h1><p>Bugzilla 是一款開源的 Web 應用，用於 bug 跟蹤系統和測試工具，由 mozilla 開發，並採用 Mozilla 公共許可證授權（MPL）。它經常被一些高科技公司如 mozilla、紅帽公司和 gnome 使用。Bugzilla 起初由 Terry Weissman開發於1998年，它用 perl 語言編寫，用 MySQL 作為後端資料庫。它是一款旨在幫助管理軟件開發的服務器軟件，它有豐富的功能、高度優化的資料庫、卓越的安全性、高級的搜索工具、集成了郵件功能等等。</p><p>在本教程中，我們將安裝 bugzilla 5.0 ，採用 apache 作為 Web 服務器，併為它啓用 SSL，然後在 freebsd 10.2 上安裝 mysql 5.1 來作為資料庫系統。</p><h4 id="準備" tabindex="-1">準備 <a class="header-anchor" href="#準備" aria-label="Permalink to “準備”">​</a></h4><ul><li>FreeBSD 10.2 - 64位</li><li>Root 權限</li></ul><h3 id="第一步-更新系統" tabindex="-1">第一步 - 更新系統 <a class="header-anchor" href="#第一步-更新系統" aria-label="Permalink to “第一步 - 更新系統”">​</a></h3><p>用 ssh 登錄 freebsd 服務器，並更新軟件庫：</p><pre><code>sudo su
freebsd-update fetch
freebsd-update install
</code></pre><h3 id="第二步-安裝並配置-apache" tabindex="-1">第二步 - 安裝並配置 Apache <a class="header-anchor" href="#第二步-安裝並配置-apache" aria-label="Permalink to “第二步 - 安裝並配置 Apache”">​</a></h3><p>在這一步我們將使用 pkg 命令從 freebsd 軟件庫中安裝 apache，然後在 apache24 目錄下編輯 &quot;httpd.conf&quot; 文件，來配置 apache 以啓用 SSL 和 CGI 支持。</p><p>用 pkg 命令安裝 apache：</p><pre><code>pkg install apache24
</code></pre><p>進入 apache 目錄並用 nano 編輯器編輯&quot;httpd.conf&quot;文件：</p><pre><code>cd /usr/local/etc/apache24
nano -c httpd.conf
</code></pre><p>取消下面列出行的註釋：</p><pre><code>#第70行
LoadModule authn_socache_module libexec/apache24/mod_authn_socache.so

#第89行
LoadModule socache_shmcb_module libexec/apache24/mod_socache_shmcb.so

#第117行
LoadModule expires_module libexec/apache24/mod_expires.so

#第141行，啓用SSL
LoadModule ssl_module libexec/apache24/mod_ssl.so

#第162行，支持cgi
LoadModule cgi_module libexec/apache24/mod_cgi.so

#第174行，啓用mod_rewrite
LoadModule rewrite_module libexec/apache24/mod_rewrite.so

#第219行，服務器名配置
ServerName 127.0.0.1:80
</code></pre><p>保存並退出。</p><p>接着，我們需要從 freebsd 庫中安裝 mod perl，並啓用它：</p><pre><code>pkg install ap24-mod_perl2
</code></pre><p>啓用 mod_perl，編輯&quot;httpd.conf&quot;文件並添加&quot;Loadmodule&quot;行：</p><pre><code>nano -c httpd.conf
</code></pre><p>添加該行：</p><pre><code>#第175行
LoadModule perl_module libexec/apache24/mod_perl.so
</code></pre><p>保存並退出。</p><p>在啓用 apache 之前，用 sysrc 命令添加以下行作為開機啓動項：</p><pre><code>sysrc apache24_enable=yes
service apache24 start
</code></pre><h3 id="第三步-安裝並配置-mysql-資料庫" tabindex="-1">第三步 - 安裝並配置 MySQL 資料庫 <a class="header-anchor" href="#第三步-安裝並配置-mysql-資料庫" aria-label="Permalink to “第三步 - 安裝並配置 MySQL 資料庫”">​</a></h3><p>我們要用 mysql 5.1 來作為後端資料庫並且支持 perl 模組。用 pkg 命令安裝 mysql 5.1：</p><pre><code>pkg install p5-DBD-mysql51 mysql51-server mysql51-client
</code></pre><p>現在我們要將 mysql 服務設置為開機啓動，然後為 mysql 配置 root 密碼。</p><p>運行以下命令來完成上述所有操作：</p><pre><code>sysrc mysql_enable=yes
service mysql-server start
mysqladmin -u root password aqwe123
</code></pre><p>注意：</p><p>這裏 mysql 密碼為：aqwe123</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Configure-MySQL-Password.png" alt="Configure MySQL Password"></p><p>以上步驟都完成之後，我們用 root 登錄 mysql shell，然後為 bugzilla 安裝創建一個新的資料庫和用户。</p><p>用以下命令登錄 mysql shell：</p><pre><code>mysql -u root -p
password: aqwe123
</code></pre><p>添加資料庫：</p><pre><code>create database bugzilladb;
create user bugzillauser@localhost identified by &#39;bugzillauser@&#39;;
grant all privileges on bugzilladb.* to bugzillauser@localhost identified by &#39;bugzillauser@&#39;;
flush privileges;
\\q
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Creating-Database-for-Bugzilla.png" alt="Creating Database for Bugzilla"></p><p>bugzilla 的資料庫創建好了，名字為&quot;bugzilladb&quot;，用户名和密碼分別為&quot;bugzillauser&quot;和&quot;bugzillauser@&quot;。</p><h3 id="第四步-生成新的-ssl-證書" tabindex="-1">第四步 - 生成新的 SSL 證書 <a class="header-anchor" href="#第四步-生成新的-ssl-證書" aria-label="Permalink to “第四步 - 生成新的 SSL 證書”">​</a></h3><p>在 bugzilla 站點的 &quot;ssl&quot; 目錄裏生成新的自簽名 SSL 證書。</p><p>前往 apache24 目錄並在此創建新目錄 &quot;ssl&quot;：</p><pre><code>cd /usr/local/etc/apache24/
mkdir ssl; cd ssl
</code></pre><p>接着，用 openssl 命令生成證書文件，然後更改其權限：</p><pre><code>sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /usr/local/etc/apache24/ssl/bugzilla.key -out /usr/local/etc/apache24/ssl/bugzilla.crt
chmod 600 *
</code></pre><h3 id="第五步-配置虛擬主機" tabindex="-1">第五步 - 配置虛擬主機 <a class="header-anchor" href="#第五步-配置虛擬主機" aria-label="Permalink to “第五步 - 配置虛擬主機”">​</a></h3><p>我們將在 &quot;/usr/local/www/bugzilla&quot; 目錄裏安裝 bugzilla，所以我們必須為它創建新的虛擬主機配置。</p><p>前往 apache 目錄併為虛擬主機文件創建名為 &quot;vhost&quot; 的新目錄：</p><pre><code>cd /usr/local/etc/apache24/
mkdir vhost; cd vhost
</code></pre><p>現在為虛擬主機文件創建新文件 &quot;bugzilla.conf&quot;：</p><pre><code>nano -c bugzilla.conf
</code></pre><p>將以下配置粘貼進去：</p><pre><code>&lt;VirtualHost *:80&gt;
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
</code></pre><p>保存並退出。</p><p>上述都完成之後，為 bugzilla 安裝創建新目錄，並在 httpd.conf 文件添加虛擬主機配置來啓用 bugzilla虛擬主機。</p><p>在 &quot;apache24&quot; 目錄下運行以下命令：</p><pre><code>mkdir -p /usr/local/www/bugzilla
cd /usr/local/etc/apache24/
nano -c httpd.conf
</code></pre><p>文末，添加以下配置：</p><pre><code>Include etc/apache24/vhost/*.conf
</code></pre><p>保存並退出。</p><p>現在用 &quot;apachectl&quot; 命令測試一下 apache 的配置並重啓它：</p><pre><code>apachectl configtest
service apache24 restart
</code></pre><h3 id="第六步-安裝-bugzilla" tabindex="-1">第六步 - 安裝 Bugzilla <a class="header-anchor" href="#第六步-安裝-bugzilla" aria-label="Permalink to “第六步 - 安裝 Bugzilla”">​</a></h3><p>我們可以通過下載源來手動安裝 bugzilla 了，或從 freebsd 庫中安裝也可以。在這一步中我們將用 pkg 命令從 freebsd 庫中安裝 bugzilla：</p><pre><code>pkg install bugzilla50
</code></pre><p>以上步驟都完成之後，前往 bugzilla 安裝目錄並安裝所有 bugzilla 需要的 perl 模組。</p><pre><code>cd /usr/local/www/bugzilla
./install-module --all
</code></pre><p>要等到所有都完成，這需要點時間。</p><p>下一步，在 bugzilla 的安裝目錄中執行 &quot;checksetup.pl&quot; 文件來生成配置文件 &quot;localconfig&quot;。</p><pre><code>./checksetup.pl
</code></pre><p>你會看到一條關於資料庫配置錯誤的消息，你得用 nano 編輯器編輯一下 &quot;localconfig&quot; 文件：</p><pre><code>nano -c localconfig
</code></pre><p>現在添加第三步創建的資料庫。</p><pre><code>#第57行
$db_name = &#39;bugzilladb&#39;;

#第60行
$db_user = &#39;bugzillauser&#39;;

#第67行
$db_pass = &#39;bugzillauser@&#39;;
</code></pre><p>保存並退出。</p><p>然後再次運行 &quot;checksetup.pl&quot;：</p><pre><code>./checksetup.pl
</code></pre><p>你會收到輸入郵箱名和管理員賬號的提示，你只要輸入你的郵箱、用户名和密碼就行了。</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Admin-Setup.png" alt="Admin Setup"></p><p>最後，我們需要把安裝目錄的屬主改成 &quot;www&quot;，然後用服務命令重啓 apache：</p><pre><code>cd /usr/local/www/
chown -R www:www bugzilla
service apache24 restart
</code></pre><p>現在 Bugzilla 已經安裝好了，你可以通過訪問 mybugzilla.me 來查看，並且將會重定向到 https 連接。</p><p>Bugzilla 首頁：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Bugzilla-Home.png" alt="Bugzilla Home"></p><p>Bugzilla admin 面板：</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/12/Bugzilla-Admin-Page.png" alt="Bugzilla Admin Page"></p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3><p>Bugzilla 是一個基於 web 的應用，並能幫助你管理軟件開發，它用 perl 開發並以 MySQL 作為資料庫系統。Bugzilla 幫助 mozilla、redhat、gnome 等公司完成軟件開發工作。Bugzilla 有很多功能並易於配置和安裝。</p><hr>`,92)),t("p",null,[e[1]||(e[1]=l("via: ",-1)),o(a,{href:"http://linoxide.com/tools/install-bugzilla-apache-ssl-freebsd-10-2/"},{default:p(()=>[...e[0]||(e[0]=[l("http://linoxide.com/tools/install-bugzilla-apache-ssl-freebsd-10-2/",-1)])]),_:1})]),t("p",null,[e[5]||(e[5]=l("作者：",-1)),o(a,{href:"http://linoxide.com/author/arulm/"},{default:p(()=>[...e[2]||(e[2]=[l("Arul",-1)])]),_:1}),e[6]||(e[6]=l(" 譯者：",-1)),o(a,{href:"https://github.com/ZTinoZ"},{default:p(()=>[...e[3]||(e[3]=[l("ZTinoZ",-1)])]),_:1}),e[7]||(e[7]=l(" 校對：",-1)),o(a,{href:"https://github.com/carolinewuyan"},{default:p(()=>[...e[4]||(e[4]=[l("Caroline",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=l("本文由 ",-1)),o(a,{href:"https://github.com/LCTT/TranslateProject"},{default:p(()=>[...e[8]||(e[8]=[l("LCTT",-1)])]),_:1}),e[11]||(e[11]=l(" 原創編譯，",-1)),o(a,{href:"https://linux.cn/"},{default:p(()=>[...e[9]||(e[9]=[l("Linux中國",-1)])]),_:1}),e[12]||(e[12]=l(" 榮譽推出",-1))])])}const w=r(d,[["render",u]]);export{q as __pageData,w as default};
