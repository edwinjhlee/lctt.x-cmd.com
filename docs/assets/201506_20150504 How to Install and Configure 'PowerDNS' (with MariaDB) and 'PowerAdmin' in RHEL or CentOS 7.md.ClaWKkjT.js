import{_ as i,a0 as s,w as m,s as l,ao as a,I as o,x as n,a1 as p,A as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const g=JSON.parse(`{"title":"RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin | LCTT x X-CMD","titleTemplate":false,"description":"RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150504 How to Install and Configure 'PowerDNS' (with MariaDB) and 'PowerAdmin' in RHEL or CentOS 7","title":"RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin","tag":"201506","desc":""},"relativePath":"201506/20150504 How to Install and Configure 'PowerDNS' (with MariaDB) and 'PowerAdmin' in RHEL or CentOS 7.md","filePath":"[post].md"}`),w={name:"201506/20150504 How to Install and Configure 'PowerDNS' (with MariaDB) and 'PowerAdmin' in RHEL or CentOS 7.md"};function d(c,e,D,N,S,u){const t=s("Link");return m(),l("div",null,[e[18]||(e[18]=a(`<h1 id="rhel-centos-7中安装并配置-powerdns-和-poweradmin" tabindex="-1">RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin <a class="header-anchor" href="#rhel-centos-7中安装并配置-powerdns-和-poweradmin" aria-label="Permalink to “RHEL/CentOS 7中安装并配置 PowerDNS 和 PowerAdmin”">​</a></h1><p>PowerDNS是一个运行在许多Linux/Unix衍生版上的DNS服务器，它可以使用不同的后端进行配置，包括BIND类型的区域文件、关系型数据库，或者负载均衡/失效转移算法。它也可以被配置成一台DNS递归器，作为服务器上的一个独立进程运行。</p><p>PowerDNS授权服务器的最新版本是3.4.4，但是当前EPEL仓库中可以获得的版本是3.4.3。我推荐安装EPEL仓库中提供的那一个，因为该版本已经在CentOS和Fedora中测试过。那样，你也可以在今后很容易地更新PowerDNS。</p><p>本文用于向你演示如何安装并配置以MariaDB作为后端的PowerDNS，以及它的界面友好的 Web 管理工具 PowerAdmin。</p><p>出于本文的写作目的，我将使用以下服务器：</p><pre><code>主机名： centos7.localhost 
IP地址： 192.168.0.102
</code></pre><h3 id="第一部分-安装带有mariadb后端的powerdns" tabindex="-1">第一部分： 安装带有MariaDB后端的PowerDNS <a class="header-anchor" href="#第一部分-安装带有mariadb后端的powerdns" aria-label="Permalink to “第一部分： 安装带有MariaDB后端的PowerDNS”">​</a></h3><p>1、 首先，你需要为你的系统启用EPEL仓库，只需使用：</p><pre><code># yum install epel-release.noarch 
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-Epel-Repository.png" alt="Enable Epel Repository"></p><p><em>启用Epel仓库</em></p><p>2、 下一步是安装MariaDB服务器。运行以下命令即可达成：</p><pre><code># yum -y install mariadb-server mariadb
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-MariaDB-Server.png" alt="Install MariaDB Server"></p><p><em>安装MariaDB服务器</em></p><p>3、 接下来，我们将配置并启用MariaDB，并设置开机启动：</p><pre><code># systemctl enable mariadb.service
# systemctl start mariadb.service
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-Start-MariaDB-System-Boot.png" alt="Enable Start MariaDB System Boot"></p><p><em>启用MariaDB开机启动</em></p><p>4、 现在MariaDB服务运行起来了，我们将为MariaDB设置密码进行安全加固，运行以下命令：</p><pre><code># mysql_secure_installation
</code></pre><p><strong>按照指示做</strong></p><pre><code>/bin/mysql_secure_installation: line 379: find_mysql_client: command not found

NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we&#39;ll need the current
password for the root user.  If you&#39;ve just installed MariaDB, and
you haven&#39;t set the root password yet, the password will be blank,
so you should just press enter here.

Enter current password for root (enter for none):  Press ENTER
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

Set root password? [Y/n] y     
New password:  ← Set New Password
Re-enter new password:  ← Repeat Above Password
Password updated successfully!
Reloading privilege tables..
 ... Success!


By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y ← Choose “y” to disable that user
 ... Success!

Normally, root should only be allowed to connect from &#39;localhost&#39;.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] n ← Choose “n” for no
 ... skipping.

By default, MariaDB comes with a database named &#39;test&#39; that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y ← Choose “y” for yes
 - Dropping test database...
 ... Success!
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y ← Choose “y” for yes
 ... Success!

Cleaning up...

All done!  If you&#39;ve completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
</code></pre><p>5、 MariaDB配置成功后，我们可以继续去安装PowerDNS。运行以下命令即可轻易完成：</p><pre><code># yum -y install pdns pdns-backend-mysql
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-PowerDNS-with-MariaDB-Backend.png" alt="Install PowerDNS with MariaDB Backend"></p><p><em>安装带有MariaDB后端的PowerDNS</em></p><p>6、 PowerDNS的配置文件位于<code>/etc/pdns/pdns</code>，在编辑之前，我们将为PowerDNS服务配置一个MariaDB数据库。首先，我们将连接到MariaDB服务器并创建一个名为powerdns的数据库：</p><pre><code># mysql -u root -p
MariaDB [(none)]&gt; CREATE DATABASE powerdns;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-PowerDNS-Database.png" alt="Create PowerDNS Database"></p><p><em>创建PowerDNS数据库</em></p><p>7、 接下来，我们将创建一个名为powerdns的数据库用户：</p><pre><code>MariaDB [(none)]&gt; GRANT ALL ON powerdns.* TO &#39;powerdns&#39;@&#39;localhost&#39; IDENTIFIED BY ‘tecmint123’;
MariaDB [(none)]&gt; GRANT ALL ON powerdns.* TO &#39;powerdns&#39;@&#39;centos7.localdomain&#39; IDENTIFIED BY &#39;tecmint123&#39;;
MariaDB [(none)]&gt; FLUSH PRIVILEGES;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-PowerDNS-User.png" alt="Create PowerDNS User"></p><p><em>创建PowerDNS用户</em></p><p><strong>注意</strong>： 请将“tecmint123”替换为你想要设置的实际密码。</p><p>8、 我们继续创建PowerDNS要使用的数据库表。像堆积木一样执行以下这些：</p><pre><code>MariaDB [(none)]&gt; USE powerdns;
MariaDB [(none)]&gt; CREATE TABLE domains (
id INT auto_increment,
name VARCHAR(255) NOT NULL,
master VARCHAR(128) DEFAULT NULL,
last_check INT DEFAULT NULL,
type VARCHAR(6) NOT NULL,
notified_serial INT DEFAULT NULL,
account VARCHAR(40) DEFAULT NULL,
primary key (id)
);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Table-Domains-for-PowerDNS.png" alt="Create Table Domains for PowerDNS"></p><p><em>创建用于PowerDNS的表domains</em></p><pre><code>MariaDB [(none)]&gt; CREATE UNIQUE INDEX name_index ON domains(name);
MariaDB [(none)]&gt; CREATE TABLE records (
id INT auto_increment,
domain_id INT DEFAULT NULL,
name VARCHAR(255) DEFAULT NULL,
type VARCHAR(6) DEFAULT NULL,
content VARCHAR(255) DEFAULT NULL,
ttl INT DEFAULT NULL,
prio INT DEFAULT NULL,
change_date INT DEFAULT NULL,
primary key(id)
);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Index-Domains-for-PowerDNS.png" alt="Create Table Records for PowerDNS"></p><p><em>创建用于PowerDNS的表 records</em></p><pre><code>MariaDB [(none)]&gt; CREATE INDEX rec_name_index ON records(name);
MariaDB [(none)]&gt; CREATE INDEX nametype_index ON records(name,type);
MariaDB [(none)]&gt; CREATE INDEX domain_id ON records(domain_id);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Records.png" alt="Create Index of Table"></p><p><em>创建表索引</em></p><pre><code>MariaDB [(none)]&gt; CREATE TABLE supermasters (
ip VARCHAR(25) NOT NULL,
nameserver VARCHAR(255) NOT NULL,
account VARCHAR(40) DEFAULT NULL
);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Table-Supermaster.png" alt="Create Table Supermaster"></p><p><em>创建表supermasters</em></p><p>你现在可以输入以下命令退出MariaDB控制台：</p><pre><code>MariaDB [(none)]&gt; quit;
</code></pre><p>9、 最后，我们可以继续配置PowerDNS了，以MariaDB作为后台。请打开PowerDNS的配置文件：</p><pre><code># vim /etc/pdns/pdns.conf 
</code></pre><p>在该文件中查找像下面这样的行：</p><pre><code>#################################
# launch        Which backends to launch and order to query them in
#
# launch=
</code></pre><p>在这后面放置以下代码：</p><pre><code>launch=gmysql
gmysql-host=localhost
gmysql-user=powerdns
gmysql-password=user-pass
gmysql-dbname=powerdns
</code></pre><p>修改“user-pass”为你先前设置的实际密码，配置如下：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Configure-PowerDNS.png" alt="Configure PowerDNS"></p><p><em>配置PowerDNS</em></p><p>保存修改并退出。</p><p>10、 现在，我们将启动并添加PowerDNS到系统开机启动列表：</p><pre><code># systemctl enable pdns.service 
# systemctl start pdns.service 
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-and-Start-PowerDNS.png" alt="Enable and Start PowerDNS"></p><p><em>启用并启动PowerDNS</em></p>`,65)),o("p",null,[e[1]||(e[1]=n("到这一步，你的PowerDNS服务器已经起来并运行了。要获取更多关于PowerDNS的信息，你可以参考手册",-1)),p(t,{href:"http://downloads.powerdns.com/documentation/html/index.html"},{default:r(()=>[...e[0]||(e[0]=[n("http://downloads.powerdns.com/documentation/html/index.html",-1)])]),_:1})]),e[19]||(e[19]=a(`<h3 id="第二部分-安装poweradmin来管理powerdns" tabindex="-1">第二部分： 安装PowerAdmin来管理PowerDNS <a class="header-anchor" href="#第二部分-安装poweradmin来管理powerdns" aria-label="Permalink to “第二部分： 安装PowerAdmin来管理PowerDNS”">​</a></h3><p>11、 现在，我们将安装PowerAdmin——一个界面友好的PowerDNS服务器的 Web 管理器。由于它是用PHP写的，我们将需要安装PHP和一台网络服务器（Apache）：</p><pre><code># yum install httpd php php-devel php-gd php-imap php-ldap php-mysql php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-mhash gettext
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-Apache-PHP.jpeg" alt="Install Apache PHP"></p><p><em>安装Apache 和 PHP</em></p><p>PowerAdmin也需要两个PEAR包：</p><pre><code># yum -y install php-pear-DB php-pear-MDB2-Driver-mysql 
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-Pear.jpeg" alt="Install Pear"></p><p><em>安装Pear</em></p><p>你也可以参考一下文章了解CentOS 7中安装LAMP堆栈的完整指南：</p>`,10)),o("ul",null,[o("li",null,[p(t,{href:"http://www.tecmint.com/install-lamp-in-centos-7/"},{default:r(()=>[...e[2]||(e[2]=[n("CentOS 7中安装LAMP",-1)])]),_:1})])]),e[20]||(e[20]=a(`<p>安装完成后，我们将需要启动并设置Apache开机启动：</p><pre><code># systemctl enable httpd.service
# systemctl start httpd.service
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-Start-Apache-System-Boot.png" alt="Enable Start Apache System Boot"></p><p><em>启用Apache开机启动</em></p><p>12、 由于已经满足PowerAdmin的所有系统要求，我们可以继续下载软件包。因为Apache默认的网页目录位于/var/www/html/，我们将下载软件包到这里。</p><pre><code># cd /var/www/html/
# wget http://downloads.sourceforge.net/project/poweradmin/poweradmin-2.1.7.tgz 
# tar xfv poweradmin-2.1.7.tgz
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Download-PowerAdmin.jpeg" alt="Download PowerAdmin"></p><p><em>下载PowerAdmin</em></p><p>13、 现在，我们可以启动PowerAdmin的网页安装器了，只需打开：</p><pre><code>http://192.168.0.102/poweradmin-2.1.7/install/
</code></pre><p>这会进入安装过程的第一步：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Select-Installation-Language.png" alt="Select Installation Language"></p><p><em>选择安装语言</em></p><p>上面的页面会要求你为PowerAdmin选择语言，请选择你想要使用的那一个，然后点击“进入步骤 2”按钮。</p><p>14、 安装器需要PowerDNS数据库：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Database.png" alt="PowerDNS Database"></p><p><em>PowerDNS数据库</em></p><p>15、 因为我们已经创建了一个数据库，所以我们可以继续进入下一步。你会被要求提供先前配置的数据库详情，你也需要为Poweradmin设置管理员密码：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS.png" alt="Enter PowerDNS Database Settings"></p><p><em>输入PowerDNS数据库配置</em></p><p>16、 输入这些信息后，进入步骤 4。你将创建为Poweradmin创建一个受限用户。这里你需要输入的字段是：</p><ul><li>用户名（Username） - PowerAdmin用户名。</li><li>密码（Password） – 上述用户的密码。</li><li>主机管理员（Hostmaster） - 当创建SOA记录而你没有指定主机管理员时，该值会被用作默认值。</li><li>主域名服务器 - 该值在创建新的DNS区域时会被用于作为主域名服务器。</li><li>辅域名服务器 – 该值在创建新的DNS区域时会被用于作为辅域名服务器。</li></ul><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Configuration-Settings.png" alt="PowerDNS Configuration Settings"></p><p><em>PowerDNS配置设置</em></p><p>17、 在下一步中，Poweradmin会要求你在数据库表中创建一个新的受限数据库用户，它会提供你需要在MariaDB控制台输入的代码：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-New-Database-User.png" alt="Create New Database User"></p><p><em>创建新的数据库用户</em></p><p>18、 现在打开终端并运行：</p><pre><code># mysql -u root -p
</code></pre><p>提供你的密码并执行由PowerAdmin提供的代码：</p><pre><code>MariaDB [(none)]&gt; GRANT SELECT, INSERT, UPDATE, DELETE
ON powerdns.*
TO &#39;powermarin&#39;@&#39;localhost&#39;
IDENTIFIED BY &#39;123qweasd&#39;;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Grant-Mysql-Permissions-to-User.png" alt="Grant Mysql Permissions to User"></p><p><em>为用户授予Mysql权限</em></p><p>19、 现在，回到浏览器中并继续下一步。安装器将尝试创建配置文件到/var/www/html/poweradmin-2.1.7/inc。</p><p>文件名是config.inc.php。为防止该脚本没有写权限，你可以手动复制这些内容到上述文件中：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Configuration.png" alt="Configuration Settings of PowerDNS"></p><p><em>配置PowerDNS设置</em></p><p>20、 现在，进入最后页面，该页面会告知你安装已经完成以及如何访问安装好的PowerAdmin：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Installation-Completed.png" alt="PowerDNS Installation Completed"></p><p><em>PowerDNS安装完成</em></p><p>你可以通过运行以下命令来启用用于其他动态DNS提供商的URL：</p><pre><code># cp install/htaccess.dist .htaccess 
</code></pre><p>出于该目的，你将需要在Apache的配置中启用mod_rewrite。</p><p>21、 现在，需要移除从PowerAdmin的根目录中移除“install”文件夹，这一点很重要。使用以下命令：</p><pre><code># rm -fr /var/www/html/poweradmin/install/
</code></pre><p>在此之后，你可以通过以下方式访问PowerAdmin：</p><pre><code>http://192.168.0.102/poweradmin-2.1.7/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Login.png" alt="PowerDNS Login"></p><p><em>PowerDNS登录</em></p><p>在登录后，你应该会看到PowerAdmin的主页：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Dashboard.png" alt="PowerDNS Dashboard"></p><p><em>PowerDNS仪表盘</em></p><p>到这里，安装已经完成了，你也可以开始管理你的DNS区域了。</p><h3 id="第三部分-powerdns中添加、编辑和删除dns区域" tabindex="-1">第三部分： PowerDNS中添加、编辑和删除DNS区域 <a class="header-anchor" href="#第三部分-powerdns中添加、编辑和删除dns区域" aria-label="Permalink to “第三部分： PowerDNS中添加、编辑和删除DNS区域”">​</a></h3><p>22、 要添加新的主区域，只需点击“添加主区域”：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Add-Master-Zone.png" alt="Add Master Zone"></p><p><em>添加主区域</em></p><p>在下一页中，你需要填写一些东西：</p><ul><li>域（Domain） – 你要添加区域的域。</li><li>所有者（Owner） – 设置DNS区域的所有者。</li><li>模板（Template）– DNS模板 – 留空。</li><li>DNSSEC – 域名系统安全扩展（可选——看看你是否需要）。</li></ul><p>点击“添加区域”按钮来添加DNS区域。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Master-DNS-Zone.png" alt="Master DNS Zone"></p><p><em>主DNS区域</em></p><p>现在，你可以点击“首页”链接回到PowerAdmin的首页。要查看所有现存的DNS区域，只需转到“列出区域（List Zones）”：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Check-List-Zones.png" alt="Check List of Zones"></p><p><em>查看区域列表</em></p><p>你现在应该看到一个可用DNS区域列表：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/DNS-Zones.png" alt="Check List of DNS Zones"></p><p><em>检查DNS区域列表</em></p><p>23、 要编辑现存DNS区域或者添加新的记录，点击编辑图标：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Edit-DNS-Zone.png" alt="Edit DNS Zone"></p><p><em>编辑DNS区域</em></p><p>在接下来的页面，你会看到你选择的DNS区域的条目：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Domain-DNS.png" alt="Domain DNS Zone Entries"></p><p><em>域名的DNS区域条目</em></p><p>24、 在此处添加新的DNS条目，你需要设置以下信息：</p><ul><li>名称（Name） – 条目名称。只需添加域/子域的第一部分，PowerAdmin会添加剩下的。</li><li>类型（Type） – 选择记录类型。</li><li>优先级（Priority） – 记录优先级。</li><li>TTL – 存活时间，以秒计算。</li></ul><p>出于本文目的，我将为子域new.example.com添加一个A记录用于解析IP地址192.168.0.102，设置存活时间为14400秒：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Add-New-DNS-Record.png" alt="Add New DNS Record"></p><p><em>添加新DNS记录</em></p><p>最后，点击“添加记录”按钮。</p><p>25、 如果你想要删除DNS区域，你可以回到“列出区域”页面，然后点击你想要删除的DNS区域旁边“垃圾桶”图标：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Delete-DNS-Zone.png" alt="Delete DNS Zone"></p><p><em>删除DNS区域</em></p><p>Poweradmin将问你是否确定想要删除DNS区域。只需点击“是”来完成删除。</p>`,84)),o("p",null,[e[4]||(e[4]=n("如要获取更多关于怎样创建、编辑和删除区域的说明，你可以参与Poweradmin的文档：",-1)),p(t,{href:"https://github.com/poweradmin/poweradmin/wiki/Documentation"},{default:r(()=>[...e[3]||(e[3]=[n("https://github.com/poweradmin/poweradmin/wiki/Documentation",-1)])]),_:1})]),e[21]||(e[21]=o("p",null,"我希望你已经发现本文很有趣，也很有用。一如既往，如果你有问题或要发表评论，请别犹豫，在下面评论区提交你的评论吧。",-1)),e[22]||(e[22]=o("hr",null,null,-1)),o("p",null,[e[6]||(e[6]=n("via: ",-1)),p(t,{href:"http://www.tecmint.com/install-powerdns-poweradmin-mariadb-in-centos-rhel/"},{default:r(()=>[...e[5]||(e[5]=[n("http://www.tecmint.com/install-powerdns-poweradmin-mariadb-in-centos-rhel/",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=n("作者：",-1)),p(t,{href:"http://www.tecmint.com/author/marintodorov89/"},{default:r(()=>[...e[7]||(e[7]=[n("Marin Todorov",-1)])]),_:1}),e[11]||(e[11]=n(" 译者：",-1)),p(t,{href:"https://github.com/GOLinux"},{default:r(()=>[...e[8]||(e[8]=[n("GOLinux",-1)])]),_:1}),e[12]||(e[12]=n(" 校对：",-1)),p(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[15]||(e[15]=n("本文由 ",-1)),p(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原创翻译，",-1)),p(t,{href:"http://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[n("Linux中国",-1)])]),_:1}),e[17]||(e[17]=n(" 荣誉推出",-1))])])}const A=i(w,[["render",d]]);export{g as __pageData,A as default};
