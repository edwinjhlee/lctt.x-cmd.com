import{_ as s,a0 as d,w as l,s as p,ao as o,I as a,x as r,a1 as n,A as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const A=JSON.parse('{"title":"在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver | LCTT x X-CMD","titleTemplate":false,"description":"在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver | LCTT (201602) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver | LCTT (201602) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201602/20151119 How to Install Revive Adserver on Ubuntu 15.04 or CentOS 7","title":"在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver","tag":"201602","desc":""},"relativePath":"201602/20151119 How to Install Revive Adserver on Ubuntu 15.04 or CentOS 7.md","filePath":"[post].md"}'),v={name:"201602/20151119 How to Install Revive Adserver on Ubuntu 15.04 or CentOS 7.md"};function u(c,e,h,b,m,g){const t=d("Link");return l(),p("div",null,[e[25]||(e[25]=o(`<h1 id="在-ubuntu-15-04-centos-7-上安装广告服务器-revive-adserver" tabindex="-1">在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver <a class="header-anchor" href="#在-ubuntu-15-04-centos-7-上安装广告服务器-revive-adserver" aria-label="Permalink to “在 Ubuntu 15.04 / CentOS 7 上安装广告服务器 Revive Adserver”">​</a></h1><p>Revive Adserver是一个自由开源的广告管理系统，能使出版商，广告平台和广告商在网页、应用、视频上投放并管理广告的系统。Revive Adserver以前叫做OpenX Source，遵循GNU通用公共授权协议。它集广告管理、网站定位、地理定位和一个用于数据收集的跟踪系统于一体。能使网站站长管理内部的、付费的以及第三方来源的广告，如谷歌的AdSense。本教程中，将会教会你在Ubuntu 15.04或CentOS 7安装并运行Revive Adserver。</p><h3 id="_1-安装lamp" tabindex="-1">1. 安装LAMP### <a class="header-anchor" href="#_1-安装lamp" aria-label="Permalink to “1. 安装LAMP###”">​</a></h3><p>首先，Revive Adserver需要完整的LAMP环境才能运行，所以我们先安装LAMP。LAMP是Apache网页服务器，MySQL/MariaDB数据库和PHP模块的集合。要使Revive正常运行，需要安装PHP的众多模块，如apc, zlib, xml, pcre, mysql和mbstring。在不同的Linux发行版中，我们可以用下列命令进行LAMP的配置:</p><h4 id="在ubuntu-15-04下" tabindex="-1">在Ubuntu 15.04下#### <a class="header-anchor" href="#在ubuntu-15-04下" aria-label="Permalink to “在Ubuntu 15.04下####”">​</a></h4><pre><code># apt-get install apache2 mariadb-server php5 php5-gd php5-mysql php5-curl php-apc zlibc zlib1g zlib1g-dev libpcre3 libpcre3-dev libapache2-mod-php5 zip
</code></pre><h4 id="在centos-7下" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下" aria-label="Permalink to “在CentOS 7下”">​</a></h4><pre><code># yum install httpd mariadb php php-gd php-mysql php-curl php-mbstring php-xml php-apc zlibc zlib1g zlib1g-dev libpcre3 libpcre3-dev zip
</code></pre><h3 id="_2-启动apache-web和mariadb服务" tabindex="-1">2. 启动Apache Web和MariaDB服务 <a class="header-anchor" href="#_2-启动apache-web和mariadb服务" aria-label="Permalink to “2. 启动Apache Web和MariaDB服务”">​</a></h3><p>可以用下列命令启动刚刚安装好的Apache Web服务和MariaDB数据库服务。</p><h4 id="在ubuntu-15-04下-1" tabindex="-1">在Ubuntu 15.04下#### <a class="header-anchor" href="#在ubuntu-15-04下-1" aria-label="Permalink to “在Ubuntu 15.04下####”">​</a></h4><p>Ubuntu15.04使用Systemd作为默认初始系统，所以用下列命令启动Apache和MariaDB进程：</p><pre><code># systemctl start apache2 mysql
</code></pre><p>可以用下列命令使其开机自动运行：</p><pre><code># systemctl enable apache2 mysql

Synchronizing state for apache2.service with sysvinit using update-rc.d...
Executing /usr/sbin/update-rc.d apache2 defaults
Executing /usr/sbin/update-rc.d apache2 enable
Synchronizing state for mysql.service with sysvinit using update-rc.d...
Executing /usr/sbin/update-rc.d mysql defaults
Executing /usr/sbin/update-rc.d mysql enable
</code></pre><h4 id="在centos-7下-1" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下-1" aria-label="Permalink to “在CentOS 7下”">​</a></h4><p>CentOS 7同样是以Systemd作为默认初始系统，可以用下列命令启动:</p><pre><code># systemctl start httpd mariadb

ln -s &#39;/usr/lib/systemd/system/httpd.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/httpd.service&#39;
ln -s &#39;/usr/lib/systemd/system/mariadb.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/mariadb.service&#39;
</code></pre><h3 id="_3-配置mariadb" tabindex="-1">3. 配置MariaDB <a class="header-anchor" href="#_3-配置mariadb" aria-label="Permalink to “3. 配置MariaDB”">​</a></h3><h4 id="在centos-7-ubuntu-15-04下" tabindex="-1">在CentOS 7/Ubuntu 15.04下 <a class="header-anchor" href="#在centos-7-ubuntu-15-04下" aria-label="Permalink to “在CentOS 7/Ubuntu 15.04下”">​</a></h4><p>当我们第一次启动MariaDB时，MariaDB是没有分配密码的，所以要先设置一个root密码。之后再创建一个新的数据库用来储存Revive Adserver的数据。</p><p>使用以下命令配置MariaDB并设置其root密码：</p><pre><code># mysql_secure_installation
</code></pre><p>这时会要我们输入root密码，但我们之前什么密码都没设置，所以按回车下一步。之后，要求设置root密码，这时我们输入Y，然后输入自己想要的密码。回车继续下一步。</p><pre><code> ….
so you should just press enter here.

Enter current password for root (enter for none):
OK, successfully used password, moving on…

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

Set root password? [Y/n] y
New password:
Re-enter new password:
Password updated successfully!
Reloading privilege tables..
… Success!
…
installation should now be secure.
Thanks for using MariaDB!
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-mariadb.png" alt="Configuring MariaDB"></p><h3 id="_4-创建新的数据库" tabindex="-1">4. 创建新的数据库 <a class="header-anchor" href="#_4-创建新的数据库" aria-label="Permalink to “4. 创建新的数据库”">​</a></h3><p>为MariaDB的root用户设置了密码之后，就可以创建用来储存Revive Adserver应用数据的数据库。首先通过以下命令登录MariaDB控制台：</p><pre><code># mysql -u root -p
</code></pre><p>这时要求输入root用户的密码，我们只要输入上一步设置好的密码。然后进入MariaDB控制台创建新的数据库，数据库用户及其密码，并且授予其创建、删除、编辑和存储表与数据的全部权限。</p><pre><code>&gt; CREATE DATABASE revivedb;
&gt; CREATE USER &#39;reviveuser&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;Pa$$worD123&#39;;
&gt; GRANT ALL PRIVILEGES ON revivedb.* TO &#39;reviveuser&#39;@&#39;localhost&#39;;
&gt; FLUSH PRIVILEGES;
&gt; EXIT;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/creating-mariadb-revive-database.png" alt="Creating Mariadb Revive Database"></p><h3 id="_5-下载revive-adserver" tabindex="-1">5. 下载Revive Adserver <a class="header-anchor" href="#_5-下载revive-adserver" aria-label="Permalink to “5. 下载Revive Adserver”">​</a></h3>`,33)),a("p",null,[e[1]||(e[1]=r("接下来下载Revive Adserver的最新版本Revive Adserver.3.2.2（写本文时）。可以使用wget命令从Revive Adserverde 官方网站下载压缩包，网址是：",-1)),n(t,{href:"http://www.revive-adserver.com/download/"},{default:i(()=>[...e[0]||(e[0]=[r("http://www.revive-adserver.com/download/",-1)])]),_:1}),e[2]||(e[2]=r(" 。命令如下：",-1))]),e[26]||(e[26]=o(`<pre><code># cd /tmp/
# wget http://download.revive-adserver.com/revive-adserver-3.2.2.zip

--2015-11-09 17:03:48-- http://download.revive-adserver.com/revive-adserver-3.2.2.zip
Resolving download.revive-adserver.com (download.revive-adserver.com)... 54.230.119.219, 54.239.132.177, 54.230.116.214, ...
Connecting to download.revive-adserver.com (download.revive-adserver.com)|54.230.119.219|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: 11663620 (11M) [application/zip]
Saving to: &#39;revive-adserver-3.2.2.zip&#39;
revive-adserver-3.2 100%[=====================&gt;] 11.12M 1.80MB/s in 13s
2015-11-09 17:04:02 (906 KB/s) - &#39;revive-adserver-3.2.2.zip&#39; saved [11663620/11663620]
</code></pre><p>解压到临时目录下：</p><pre><code># unzip revive-adserver-3.2.2.zip
</code></pre><p>把解压后的整个文件夹移动到Apache Web服务器的默认根目录/var/www/html/下：</p><pre><code># mv revive-adserver-3.2.2 /var/www/html/reviveads
</code></pre><h3 id="_6-配置apache-web服务" tabindex="-1">6. 配置Apache Web服务 <a class="header-anchor" href="#_6-配置apache-web服务" aria-label="Permalink to “6. 配置Apache Web服务”">​</a></h3><p>现在配置Apache服务使Revive正常运行。通过创建配置文件reviveads.conf来创建一个新的虚拟主机。这个目录在不同的Linux发行版上有所不同。</p><h4 id="在ubuntu-15-04下-2" tabindex="-1">在Ubuntu 15.04下 <a class="header-anchor" href="#在ubuntu-15-04下-2" aria-label="Permalink to “在Ubuntu 15.04下”">​</a></h4><pre><code># touch /etc/apache2/sites-available/reviveads.conf
# ln -s /etc/apache2/sites-available/reviveads.conf /etc/apache2/sites-enabled/reviveads.conf
# nano /etc/apache2/sites-available/reviveads.conf
</code></pre><p>在这个文件中添加下列几行文本：</p><pre><code>&lt;VirtualHost *:80&gt;
ServerAdmin info@reviveads.linoxide.com
DocumentRoot /var/www/html/reviveads/
ServerName reviveads.linoxide.com
ServerAlias www.reviveads.linoxide.com
&lt;Directory /var/www/html/reviveads/&gt;
Options FollowSymLinks
AllowOverride All
&lt;/Directory&gt;
ErrorLog /var/log/apache2/reviveads.linoxide.com-error_log
CustomLog /var/log/apache2/reviveads.linoxide.com-access_log common
&lt;/VirtualHost&gt;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-apache2-ubuntu.png" alt="Configuring Apache2 Ubuntu"></p><p>保存并退出，重启Apache Web服务：</p><pre><code># systemctl restart apache2
</code></pre><h4 id="在centos-7下-2" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下-2" aria-label="Permalink to “在CentOS 7下”">​</a></h4><p>在CentOS下，我们直接在/etc/httpd/conf.d/ 目录下创建reviveads.conf :</p><pre><code># nano /etc/httpd/conf.d/reviveads.conf	
</code></pre><p>在这个文件中添加下列几行文本：</p><pre><code>&lt;VirtualHost *:80&gt;
ServerAdmin info@reviveads.linoxide.com
DocumentRoot /var/www/html/reviveads/
ServerName reviveads.linoxide.com
ServerAlias www.reviveads.linoxide.com
&lt;Directory /var/www/html/reviveads/&gt;
Options FollowSymLinks
AllowOverride All
&lt;/Directory&gt;
ErrorLog /var/log/httpd/reviveads.linoxide.com-error_log
CustomLog /var/log/httpd/reviveads.linoxide.com-access_log common
&lt;/VirtualHost&gt;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-httpd-centos.png" alt="Configuring httpd Centos"></p><p>保存并退出，重启Apache Web服务：</p><pre><code># systemctl restart httpd
</code></pre><h3 id="_7-修复权限和所有权" tabindex="-1">7. 修复权限和所有权 <a class="header-anchor" href="#_7-修复权限和所有权" aria-label="Permalink to “7. 修复权限和所有权”">​</a></h3><p>现在我们修改安装路径下文件的权限和所有权。把安装目录的所有权改成Apache进程所有，以便Apache Web服务有文件和目录的编辑、创建和删除的完全权限。</p><h4 id="在ubuntu-15-04下-3" tabindex="-1">在Ubuntu 15.04下#### <a class="header-anchor" href="#在ubuntu-15-04下-3" aria-label="Permalink to “在Ubuntu 15.04下####”">​</a></h4><pre><code># chown www-data: -R /var/www/html/reviveads
</code></pre><h4 id="在centos-7下-3" tabindex="-1">在CentOS 7下 <a class="header-anchor" href="#在centos-7下-3" aria-label="Permalink to “在CentOS 7下”">​</a></h4><pre><code># chown apache: -R /var/www/html/reviveads	
</code></pre><h3 id="_8-设置防火墙" tabindex="-1">8. 设置防火墙 <a class="header-anchor" href="#_8-设置防火墙" aria-label="Permalink to “8. 设置防火墙”">​</a></h3><pre><code>现在要配置防火墙，打开80端口使Apache Web服务运行的Revive Adserver能够被网络上的其他机器所访问。
</code></pre><h4 id="在ubuntu-15-04-centos-7下" tabindex="-1">在Ubuntu 15.04/CentOS 7下 <a class="header-anchor" href="#在ubuntu-15-04-centos-7下" aria-label="Permalink to “在Ubuntu 15.04/CentOS 7下”">​</a></h4><p>Ubuntu15.04/CentOS 7都使用Systemd作为默认初始系统，使用firewalld作为其防火墙。要打开80端口（http服务端口），执行以下命令：</p><pre><code># firewall-cmd --permanent --add-service=http

success

# firewall-cmd --reload

success	
</code></pre><h3 id="_9-网站的安装" tabindex="-1">9. 网站的安装 <a class="header-anchor" href="#_9-网站的安装" aria-label="Permalink to “9. 网站的安装”">​</a></h3>`,34)),a("p",null,[e[6]||(e[6]=r("顺利的话我们能够使用浏览器进行交互，并可以将浏览器指向正在运行的网络服务器。只要在浏览器输入",-1)),n(t,{href:"http://ip-address/"},{default:i(()=>[...e[3]||(e[3]=[r("http://ip-address/",-1)])]),_:1}),e[7]||(e[7]=r(" 或者 ",-1)),n(t,{href:"http://domain.com"},{default:i(()=>[...e[4]||(e[4]=[r("http://domain.com",-1)])]),_:1}),e[8]||(e[8]=r(" 。这里我们要访问 ",-1)),n(t,{href:"http://reviveads.linoxide.com/"},{default:i(()=>[...e[5]||(e[5]=[r("http://reviveads.linoxide.com/",-1)])]),_:1})]),e[27]||(e[27]=a("p",null,"打开后可以看到Revive Adserver的欢迎页面，上面还有作为它发行许可证的GNU通用公共许可证V2。点击 I agree 继续下一步安装。",-1)),e[28]||(e[28]=a("p",null,"在下一页中，我们要输入数据库信息以便把Revive Adserver和MariaDB数据库服务连接起来。要输入之前设置的数据库名称，用户名以及密码。在本教程中，我们分别输入数据库名称为revivedb，用户名为reviveuser，密码为Pa$$worD123,并且令主机名为localhost，点击continue继续。",-1)),e[29]||(e[29]=a("p",null,[a("img",{src:"http://blog.linoxide.com/wp-content/uploads/2015/11/configuring-revive-adserver.png",alt:"Configuring Revive Adserver"})],-1)),e[30]||(e[30]=a("p",null,"输入要填的信息，如：管理员用户名，密码和邮箱。可以以这些信息登录Adserver的控制界面。然后跳到最后一页，可以看到Revive Adserver已经安装成功了。",-1)),e[31]||(e[31]=a("p",null,"接着，转到Adverstiser页面，添加新的广告管理。在控制界面添加新用户到adserver，为广告库户添加标题，网页，视频 广告。",-1)),e[32]||(e[32]=a("h3",{id:"总结",tabindex:"-1"},[r("总结 "),a("a",{class:"header-anchor",href:"#总结","aria-label":"Permalink to “总结”"},"​")],-1)),a("p",null,[e[10]||(e[10]=r("本文中，我们学习了如何在Ubuntu 15.04和CentOS 7上安装并配置Revive Adserver。尽管Revive Adserver的原始代码是从OpenX那买的，但现在OpenX Enterprise和Revive Adserver已经完全分开了。可以从",-1)),n(t,{href:"http://www.adserverplugins.com/"},{default:i(()=>[...e[9]||(e[9]=[r("http://www.adserverplugins.com/",-1)])]),_:1}),e[11]||(e[11]=r(" 获得更多插件来扩展新特性。讲真，这个软件确实让网页，应用，视频上的广告管理变得容易了许多。",-1))]),e[33]||(e[33]=a("hr",null,null,-1)),a("p",null,[e[13]||(e[13]=r("via: ",-1)),n(t,{href:"http://linoxide.com/linux-how-to/install-revive-adserver-ubuntu-15-04-centos-7/"},{default:i(()=>[...e[12]||(e[12]=[r("http://linoxide.com/linux-how-to/install-revive-adserver-ubuntu-15-04-centos-7/",-1)])]),_:1})]),a("p",null,[e[17]||(e[17]=r("作者：",-1)),n(t,{href:"http://linoxide.com/author/arunp/"},{default:i(()=>[...e[14]||(e[14]=[r("Arun Pyasi",-1)])]),_:1}),e[18]||(e[18]=r(" 译者：",-1)),n(t,{href:"https://github.com/chisper"},{default:i(()=>[...e[15]||(e[15]=[r("chisper",-1)])]),_:1}),e[19]||(e[19]=r(" 校对：",-1)),n(t,{href:"https://github.com/wxy"},{default:i(()=>[...e[16]||(e[16]=[r("wxy",-1)])]),_:1})]),a("p",null,[e[22]||(e[22]=r("本文由 ",-1)),n(t,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...e[20]||(e[20]=[r("LCTT",-1)])]),_:1}),e[23]||(e[23]=r(" 原创编译，",-1)),n(t,{href:"https://linux.cn/"},{default:i(()=>[...e[21]||(e[21]=[r("Linux中国",-1)])]),_:1}),e[24]||(e[24]=r(" 荣誉推出",-1))])])}const x=s(v,[["render",u]]);export{A as __pageData,x as default};
