import{_ as i,a0 as s,w as m,s as l,ao as a,I as o,x as n,a1 as p,A as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const g=JSON.parse(`{"title":"RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin | LCTT x X-CMD","titleTemplate":false,"description":"RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin | LCTT (201506) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin | LCTT (201506) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201506/20150504 How to Install and Configure 'PowerDNS' (with MariaDB) and 'PowerAdmin' in RHEL or CentOS 7","title":"RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin","tag":"201506","desc":""},"relativePath":"201506/20150504 How to Install and Configure 'PowerDNS' (with MariaDB) and 'PowerAdmin' in RHEL or CentOS 7.md","filePath":"[post].md"}`),w={name:"201506/20150504 How to Install and Configure 'PowerDNS' (with MariaDB) and 'PowerAdmin' in RHEL or CentOS 7.md"};function d(c,e,D,N,S,u){const t=s("Link");return m(),l("div",null,[e[18]||(e[18]=a(`<h1 id="rhel-centos-7中安裝並配置-powerdns-和-poweradmin" tabindex="-1">RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin <a class="header-anchor" href="#rhel-centos-7中安裝並配置-powerdns-和-poweradmin" aria-label="Permalink to “RHEL/CentOS 7中安裝並配置 PowerDNS 和 PowerAdmin”">​</a></h1><p>PowerDNS是一個運行在許多Linux/Unix衍生版上的DNS服務器，它可以使用不同的後端進行配置，包括BIND類型的區域文件、關係型資料庫，或者負載均衡/失效轉移算法。它也可以被配置成一台DNS遞歸器，作為服務器上的一個獨立進程運行。</p><p>PowerDNS授權服務器的最新版本是3.4.4，但是當前EPEL倉庫中可以獲得的版本是3.4.3。我推薦安裝EPEL倉庫中提供的那一個，因為該版本已經在CentOS和Fedora中測試過。那樣，你也可以在今後很容易地更新PowerDNS。</p><p>本文用於向你演示如何安裝並配置以MariaDB作為後端的PowerDNS，以及它的界面友好的 Web 管理工具 PowerAdmin。</p><p>出於本文的寫作目的，我將使用以下服務器：</p><pre><code>主機名： centos7.localhost 
IP地址： 192.168.0.102
</code></pre><h3 id="第一部分-安裝帶有mariadb後端的powerdns" tabindex="-1">第一部分： 安裝帶有MariaDB後端的PowerDNS <a class="header-anchor" href="#第一部分-安裝帶有mariadb後端的powerdns" aria-label="Permalink to “第一部分： 安裝帶有MariaDB後端的PowerDNS”">​</a></h3><p>1、 首先，你需要為你的系統啓用EPEL倉庫，只需使用：</p><pre><code># yum install epel-release.noarch 
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-Epel-Repository.png" alt="Enable Epel Repository"></p><p><em>啓用Epel倉庫</em></p><p>2、 下一步是安裝MariaDB服務器。運行以下命令即可達成：</p><pre><code># yum -y install mariadb-server mariadb
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-MariaDB-Server.png" alt="Install MariaDB Server"></p><p><em>安裝MariaDB服務器</em></p><p>3、 接下來，我們將配置並啓用MariaDB，並設置開機啓動：</p><pre><code># systemctl enable mariadb.service
# systemctl start mariadb.service
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-Start-MariaDB-System-Boot.png" alt="Enable Start MariaDB System Boot"></p><p><em>啓用MariaDB開機啓動</em></p><p>4、 現在MariaDB服務運行起來了，我們將為MariaDB設置密碼進行安全加固，運行以下命令：</p><pre><code># mysql_secure_installation
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
</code></pre><p>5、 MariaDB配置成功後，我們可以繼續去安裝PowerDNS。運行以下命令即可輕易完成：</p><pre><code># yum -y install pdns pdns-backend-mysql
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-PowerDNS-with-MariaDB-Backend.png" alt="Install PowerDNS with MariaDB Backend"></p><p><em>安裝帶有MariaDB後端的PowerDNS</em></p><p>6、 PowerDNS的配置文件位於<code>/etc/pdns/pdns</code>，在編輯之前，我們將為PowerDNS服務配置一個MariaDB資料庫。首先，我們將連接到MariaDB服務器並創建一個名為powerdns的資料庫：</p><pre><code># mysql -u root -p
MariaDB [(none)]&gt; CREATE DATABASE powerdns;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-PowerDNS-Database.png" alt="Create PowerDNS Database"></p><p><em>創建PowerDNS資料庫</em></p><p>7、 接下來，我們將創建一個名為powerdns的資料庫用户：</p><pre><code>MariaDB [(none)]&gt; GRANT ALL ON powerdns.* TO &#39;powerdns&#39;@&#39;localhost&#39; IDENTIFIED BY ‘tecmint123’;
MariaDB [(none)]&gt; GRANT ALL ON powerdns.* TO &#39;powerdns&#39;@&#39;centos7.localdomain&#39; IDENTIFIED BY &#39;tecmint123&#39;;
MariaDB [(none)]&gt; FLUSH PRIVILEGES;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-PowerDNS-User.png" alt="Create PowerDNS User"></p><p><em>創建PowerDNS用户</em></p><p><strong>注意</strong>： 請將“tecmint123”替換為你想要設置的實際密碼。</p><p>8、 我們繼續創建PowerDNS要使用的資料庫表。像堆積木一樣執行以下這些：</p><pre><code>MariaDB [(none)]&gt; USE powerdns;
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
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Table-Domains-for-PowerDNS.png" alt="Create Table Domains for PowerDNS"></p><p><em>創建用於PowerDNS的表domains</em></p><pre><code>MariaDB [(none)]&gt; CREATE UNIQUE INDEX name_index ON domains(name);
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
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Index-Domains-for-PowerDNS.png" alt="Create Table Records for PowerDNS"></p><p><em>創建用於PowerDNS的表 records</em></p><pre><code>MariaDB [(none)]&gt; CREATE INDEX rec_name_index ON records(name);
MariaDB [(none)]&gt; CREATE INDEX nametype_index ON records(name,type);
MariaDB [(none)]&gt; CREATE INDEX domain_id ON records(domain_id);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Records.png" alt="Create Index of Table"></p><p><em>創建表索引</em></p><pre><code>MariaDB [(none)]&gt; CREATE TABLE supermasters (
ip VARCHAR(25) NOT NULL,
nameserver VARCHAR(255) NOT NULL,
account VARCHAR(40) DEFAULT NULL
);
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-Table-Supermaster.png" alt="Create Table Supermaster"></p><p><em>創建表supermasters</em></p><p>你現在可以輸入以下命令退出MariaDB控制台：</p><pre><code>MariaDB [(none)]&gt; quit;
</code></pre><p>9、 最後，我們可以繼續配置PowerDNS了，以MariaDB作為後台。請打開PowerDNS的配置文件：</p><pre><code># vim /etc/pdns/pdns.conf 
</code></pre><p>在該文件中查找像下面這樣的行：</p><pre><code>#################################
# launch        Which backends to launch and order to query them in
#
# launch=
</code></pre><p>在這後面放置以下代碼：</p><pre><code>launch=gmysql
gmysql-host=localhost
gmysql-user=powerdns
gmysql-password=user-pass
gmysql-dbname=powerdns
</code></pre><p>修改“user-pass”為你先前設置的實際密碼，配置如下：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Configure-PowerDNS.png" alt="Configure PowerDNS"></p><p><em>配置PowerDNS</em></p><p>保存修改並退出。</p><p>10、 現在，我們將啓動並添加PowerDNS到系統開機啓動列表：</p><pre><code># systemctl enable pdns.service 
# systemctl start pdns.service 
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-and-Start-PowerDNS.png" alt="Enable and Start PowerDNS"></p><p><em>啓用並啓動PowerDNS</em></p>`,65)),o("p",null,[e[1]||(e[1]=n("到這一步，你的PowerDNS服務器已經起來並運行了。要獲取更多關於PowerDNS的信息，你可以參考手冊",-1)),p(t,{href:"http://downloads.powerdns.com/documentation/html/index.html"},{default:r(()=>[...e[0]||(e[0]=[n("http://downloads.powerdns.com/documentation/html/index.html",-1)])]),_:1})]),e[19]||(e[19]=a(`<h3 id="第二部分-安裝poweradmin來管理powerdns" tabindex="-1">第二部分： 安裝PowerAdmin來管理PowerDNS <a class="header-anchor" href="#第二部分-安裝poweradmin來管理powerdns" aria-label="Permalink to “第二部分： 安裝PowerAdmin來管理PowerDNS”">​</a></h3><p>11、 現在，我們將安裝PowerAdmin——一個界面友好的PowerDNS服務器的 Web 管理器。由於它是用PHP寫的，我們將需要安裝PHP和一台網絡服務器（Apache）：</p><pre><code># yum install httpd php php-devel php-gd php-imap php-ldap php-mysql php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-mhash gettext
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-Apache-PHP.jpeg" alt="Install Apache PHP"></p><p><em>安裝Apache 和 PHP</em></p><p>PowerAdmin也需要兩個PEAR包：</p><pre><code># yum -y install php-pear-DB php-pear-MDB2-Driver-mysql 
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Install-Pear.jpeg" alt="Install Pear"></p><p><em>安裝Pear</em></p><p>你也可以參考一下文章瞭解CentOS 7中安裝LAMP堆棧的完整指南：</p>`,10)),o("ul",null,[o("li",null,[p(t,{href:"http://www.tecmint.com/install-lamp-in-centos-7/"},{default:r(()=>[...e[2]||(e[2]=[n("CentOS 7中安裝LAMP",-1)])]),_:1})])]),e[20]||(e[20]=a(`<p>安裝完成後，我們將需要啓動並設置Apache開機啓動：</p><pre><code># systemctl enable httpd.service
# systemctl start httpd.service
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Enable-Start-Apache-System-Boot.png" alt="Enable Start Apache System Boot"></p><p><em>啓用Apache開機啓動</em></p><p>12、 由於已經滿足PowerAdmin的所有系統要求，我們可以繼續下載軟件包。因為Apache默認的網頁目錄位於/var/www/html/，我們將下載軟件包到這裏。</p><pre><code># cd /var/www/html/
# wget http://downloads.sourceforge.net/project/poweradmin/poweradmin-2.1.7.tgz 
# tar xfv poweradmin-2.1.7.tgz
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Download-PowerAdmin.jpeg" alt="Download PowerAdmin"></p><p><em>下載PowerAdmin</em></p><p>13、 現在，我們可以啓動PowerAdmin的網頁安裝器了，只需打開：</p><pre><code>http://192.168.0.102/poweradmin-2.1.7/install/
</code></pre><p>這會進入安裝過程的第一步：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Select-Installation-Language.png" alt="Select Installation Language"></p><p><em>選擇安裝語言</em></p><p>上面的頁面會要求你為PowerAdmin選擇語言，請選擇你想要使用的那一個，然後點擊“進入步驟 2”按鈕。</p><p>14、 安裝器需要PowerDNS資料庫：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Database.png" alt="PowerDNS Database"></p><p><em>PowerDNS資料庫</em></p><p>15、 因為我們已經創建了一個數據庫，所以我們可以繼續進入下一步。你會被要求提供先前配置的資料庫詳情，你也需要為Poweradmin設置管理員密碼：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS.png" alt="Enter PowerDNS Database Settings"></p><p><em>輸入PowerDNS資料庫配置</em></p><p>16、 輸入這些信息後，進入步驟 4。你將創建為Poweradmin創建一個受限用户。這裏你需要輸入的字段是：</p><ul><li>用户名（Username） - PowerAdmin用户名。</li><li>密碼（Password） – 上述用户的密碼。</li><li>主機管理員（Hostmaster） - 當創建SOA記錄而你沒有指定主機管理員時，該值會被用作默認值。</li><li>主域名服務器 - 該值在創建新的DNS區域時會被用於作為主域名服務器。</li><li>輔域名服務器 – 該值在創建新的DNS區域時會被用於作為輔域名服務器。</li></ul><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Configuration-Settings.png" alt="PowerDNS Configuration Settings"></p><p><em>PowerDNS配置設置</em></p><p>17、 在下一步中，Poweradmin會要求你在資料庫表中創建一個新的受限資料庫用户，它會提供你需要在MariaDB控制台輸入的代碼：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Create-New-Database-User.png" alt="Create New Database User"></p><p><em>創建新的資料庫用户</em></p><p>18、 現在打開終端並運行：</p><pre><code># mysql -u root -p
</code></pre><p>提供你的密碼並執行由PowerAdmin提供的代碼：</p><pre><code>MariaDB [(none)]&gt; GRANT SELECT, INSERT, UPDATE, DELETE
ON powerdns.*
TO &#39;powermarin&#39;@&#39;localhost&#39;
IDENTIFIED BY &#39;123qweasd&#39;;
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Grant-Mysql-Permissions-to-User.png" alt="Grant Mysql Permissions to User"></p><p><em>為用户授予Mysql權限</em></p><p>19、 現在，回到瀏覽器中並繼續下一步。安裝器將嘗試創建配置文件到/var/www/html/poweradmin-2.1.7/inc。</p><p>文件名是config.inc.php。為防止該腳本沒有寫權限，你可以手動複製這些內容到上述文件中：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Configuration.png" alt="Configuration Settings of PowerDNS"></p><p><em>配置PowerDNS設置</em></p><p>20、 現在，進入最後頁面，該頁面會告知你安裝已經完成以及如何訪問安裝好的PowerAdmin：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Installation-Completed.png" alt="PowerDNS Installation Completed"></p><p><em>PowerDNS安裝完成</em></p><p>你可以通過運行以下命令來啓用用於其他動態DNS提供商的URL：</p><pre><code># cp install/htaccess.dist .htaccess 
</code></pre><p>出於該目的，你將需要在Apache的配置中啓用mod_rewrite。</p><p>21、 現在，需要移除從PowerAdmin的根目錄中移除“install”文件夾，這一點很重要。使用以下命令：</p><pre><code># rm -fr /var/www/html/poweradmin/install/
</code></pre><p>在此之後，你可以通過以下方式訪問PowerAdmin：</p><pre><code>http://192.168.0.102/poweradmin-2.1.7/
</code></pre><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Login.png" alt="PowerDNS Login"></p><p><em>PowerDNS登錄</em></p><p>在登錄後，你應該會看到PowerAdmin的主頁：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/PowerDNS-Dashboard.png" alt="PowerDNS Dashboard"></p><p><em>PowerDNS儀表盤</em></p><p>到這裏，安裝已經完成了，你也可以開始管理你的DNS區域了。</p><h3 id="第三部分-powerdns中添加、編輯和刪除dns區域" tabindex="-1">第三部分： PowerDNS中添加、編輯和刪除DNS區域 <a class="header-anchor" href="#第三部分-powerdns中添加、編輯和刪除dns區域" aria-label="Permalink to “第三部分： PowerDNS中添加、編輯和刪除DNS區域”">​</a></h3><p>22、 要添加新的主區域，只需點擊“添加主區域”：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Add-Master-Zone.png" alt="Add Master Zone"></p><p><em>添加主區域</em></p><p>在下一頁中，你需要填寫一些東西：</p><ul><li>域（Domain） – 你要添加區域的域。</li><li>所有者（Owner） – 設置DNS區域的所有者。</li><li>模板（Template）– DNS模板 – 留空。</li><li>DNSSEC – 域名系統安全擴展（可選——看看你是否需要）。</li></ul><p>點擊“添加區域”按鈕來添加DNS區域。</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Master-DNS-Zone.png" alt="Master DNS Zone"></p><p><em>主DNS區域</em></p><p>現在，你可以點擊“首頁”鏈接回到PowerAdmin的首頁。要查看所有現存的DNS區域，只需轉到“列出區域（List Zones）”：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Check-List-Zones.png" alt="Check List of Zones"></p><p><em>查看區域列表</em></p><p>你現在應該看到一個可用DNS區域列表：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/DNS-Zones.png" alt="Check List of DNS Zones"></p><p><em>檢查DNS區域列表</em></p><p>23、 要編輯現存DNS區域或者添加新的記錄，點擊編輯圖標：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Edit-DNS-Zone.png" alt="Edit DNS Zone"></p><p><em>編輯DNS區域</em></p><p>在接下來的頁面，你會看到你選擇的DNS區域的條目：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Domain-DNS.png" alt="Domain DNS Zone Entries"></p><p><em>域名的DNS區域條目</em></p><p>24、 在此處添加新的DNS條目，你需要設置以下信息：</p><ul><li>名稱（Name） – 條目名稱。只需添加域/子域的第一部分，PowerAdmin會添加剩下的。</li><li>類型（Type） – 選擇記錄類型。</li><li>優先級（Priority） – 記錄優先級。</li><li>TTL – 存活時間，以秒計算。</li></ul><p>出於本文目的，我將為子域new.example.com添加一個A記錄用於解析IP地址192.168.0.102，設置存活時間為14400秒：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Add-New-DNS-Record.png" alt="Add New DNS Record"></p><p><em>添加新DNS記錄</em></p><p>最後，點擊“添加記錄”按鈕。</p><p>25、 如果你想要刪除DNS區域，你可以回到“列出區域”頁面，然後點擊你想要刪除的DNS區域旁邊“垃圾桶”圖標：</p><p><img src="http://www.tecmint.com/wp-content/uploads/2015/04/Delete-DNS-Zone.png" alt="Delete DNS Zone"></p><p><em>刪除DNS區域</em></p><p>Poweradmin將問你是否確定想要刪除DNS區域。只需點擊“是”來完成刪除。</p>`,84)),o("p",null,[e[4]||(e[4]=n("如要獲取更多關於怎樣創建、編輯和刪除區域的説明，你可以參與Poweradmin的文檔：",-1)),p(t,{href:"https://github.com/poweradmin/poweradmin/wiki/Documentation"},{default:r(()=>[...e[3]||(e[3]=[n("https://github.com/poweradmin/poweradmin/wiki/Documentation",-1)])]),_:1})]),e[21]||(e[21]=o("p",null,"我希望你已經發現本文很有趣，也很有用。一如既往，如果你有問題或要發表評論，請別猶豫，在下面評論區提交你的評論吧。",-1)),e[22]||(e[22]=o("hr",null,null,-1)),o("p",null,[e[6]||(e[6]=n("via: ",-1)),p(t,{href:"http://www.tecmint.com/install-powerdns-poweradmin-mariadb-in-centos-rhel/"},{default:r(()=>[...e[5]||(e[5]=[n("http://www.tecmint.com/install-powerdns-poweradmin-mariadb-in-centos-rhel/",-1)])]),_:1})]),o("p",null,[e[10]||(e[10]=n("作者：",-1)),p(t,{href:"http://www.tecmint.com/author/marintodorov89/"},{default:r(()=>[...e[7]||(e[7]=[n("Marin Todorov",-1)])]),_:1}),e[11]||(e[11]=n(" 譯者：",-1)),p(t,{href:"https://github.com/GOLinux"},{default:r(()=>[...e[8]||(e[8]=[n("GOLinux",-1)])]),_:1}),e[12]||(e[12]=n(" 校對：",-1)),p(t,{href:"https://github.com/wxy"},{default:r(()=>[...e[9]||(e[9]=[n("wxy",-1)])]),_:1})]),o("p",null,[e[15]||(e[15]=n("本文由 ",-1)),p(t,{href:"https://github.com/LCTT/TranslateProject"},{default:r(()=>[...e[13]||(e[13]=[n("LCTT",-1)])]),_:1}),e[16]||(e[16]=n(" 原創翻譯，",-1)),p(t,{href:"http://linux.cn/"},{default:r(()=>[...e[14]||(e[14]=[n("Linux中國",-1)])]),_:1}),e[17]||(e[17]=n(" 榮譽推出",-1))])])}const A=i(w,[["render",d]]);export{g as __pageData,A as default};
