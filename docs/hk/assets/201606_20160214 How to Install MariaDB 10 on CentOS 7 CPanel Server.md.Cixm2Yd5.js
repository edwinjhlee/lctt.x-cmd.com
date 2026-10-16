import{_ as o,a0 as i,w as l,s as d,ao as c,I as t,x as n,a1 as r,A as s}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"在 CentOS 7 CPanel 服務器上安裝 MariaDB 10 | LCTT x X-CMD","titleTemplate":false,"description":"在 CentOS 7 CPanel 服務器上安裝 MariaDB 10 | LCTT (201606) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 CentOS 7 CPanel 服務器上安裝 MariaDB 10 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 CentOS 7 CPanel 服務器上安裝 MariaDB 10 | LCTT (201606) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201606/20160214 How to Install MariaDB 10 on CentOS 7 CPanel Server","title":"在 CentOS 7 CPanel 服務器上安裝 MariaDB 10","tag":"201606","desc":""},"relativePath":"201606/20160214 How to Install MariaDB 10 on CentOS 7 CPanel Server.md","filePath":"[post].md"}'),m={name:"201606/20160214 How to Install MariaDB 10 on CentOS 7 CPanel Server.md"};function p(y,e,h,u,S,M){const a=i("Link");return l(),d("div",null,[e[13]||(e[13]=c(`<h1 id="在-centos-7-cpanel-服務器上安裝-mariadb-10" tabindex="-1">在 CentOS 7 CPanel 服務器上安裝 MariaDB 10 <a class="header-anchor" href="#在-centos-7-cpanel-服務器上安裝-mariadb-10" aria-label="Permalink to “在 CentOS 7 CPanel 服務器上安裝 MariaDB 10”">​</a></h1><p>MariaDB 是一個增強版的、開源的 MySQL 替代品。它主要由 MariaDB 社區在維護，採用 GPL v2 授權許可。軟件的安全性是 MariaDB 開發者的主要焦點。他們保持為 MariaDB 的每個版本發佈安全補丁。當有任何安全問題被發現時，開發者會盡快修復並推出 MariaDB 的新版本。</p><h3 id="mariadb-的優勢" tabindex="-1">MariaDB 的優勢 <a class="header-anchor" href="#mariadb-的優勢" aria-label="Permalink to “MariaDB 的優勢”">​</a></h3><ul><li>完全開源</li><li>快速且透明的安全版本</li><li>與 MySQL 高度兼容</li><li>性能更好</li><li>比 MySQL 的存儲引擎多</li></ul><p>在這篇文章中，我將談論關於如何在 CentOS7 CPanel 服務器上升級 MySQL5.5 到最新的 MariaDB 。在安裝前先完成以下步驟。</p><h3 id="先決條件" tabindex="-1">先決條件: <a class="header-anchor" href="#先決條件" aria-label="Permalink to “先決條件:”">​</a></h3><h4 id="_1-停止當前-mysql-服務" tabindex="-1">1. 停止當前 MySQL 服務 <a class="header-anchor" href="#_1-停止當前-mysql-服務" aria-label="Permalink to “1. 停止當前 MySQL 服務”">​</a></h4><pre><code>root@server1 [/var/# mysql
Welcome to the MySQL monitor. Commands end with ; or \\g.
Your MySQL connection id is 5859
Server version: 5.5.47-cll MySQL Community Server (GPL)

Copyright (c) 2000, 2015, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

root@server1 [~]# systemctl stop mysql
root@server1 [~]# systemctl status mysql
● mysql.service - LSB: start and stop MySQL
Loaded: loaded (/etc/rc.d/init.d/mysql)
Active: failed (Result: exit-code) since Sun 2016-01-31 10:00:02 UTC; 1min 31s ago
Docs: man:systemd-sysv-generator(8)
Main PID: 23430 (code=exited, status=203/EXEC)

Jan 31 10:00:02 server1.centos7-test.com systemd[1]: Started MySQL Server.
Jan 31 10:00:02 server1.centos7-test.com systemd[1]: Starting MySQL Server...
Jan 31 10:00:02 server1.centos7-test.com systemd[1]: mysql.service: main process exited, code=exited, status=203/EXEC
Jan 31 10:00:02 server1.centos7-test.com systemd[1]: Unit mysql.service entered failed state.
Jan 31 10:00:02 server1.centos7-test.com systemd[1]: mysql.service failed.
</code></pre><h4 id="_2-在升級之前將所有配置文件和資料庫轉移" tabindex="-1">2. 在升級之前將所有配置文件和資料庫轉移 <a class="header-anchor" href="#_2-在升級之前將所有配置文件和資料庫轉移" aria-label="Permalink to “2. 在升級之前將所有配置文件和資料庫轉移”">​</a></h4><p>轉移資料庫的存儲路徑和 MySQL 的配置文件</p><pre><code>root@server1 [~]# cp -Rf /var/lib/mysql /var/lib/mysql-old

root@server1 [/var/lib/mysql]# cat /etc/my.cnf
[mysqld]
default-storage-engine=MyISAM
innodb_file_per_table=1
max_allowed_packet=268435456
open_files_limit=10000

root@server1 [~]#mv /etc/my.cnf /etc/my.cnf-old
</code></pre><h4 id="_3-從服務器上刪除和卸載-mysql-所有的-rpm-包" tabindex="-1">3. 從服務器上刪除和卸載 MySQL 所有的 RPM 包 <a class="header-anchor" href="#_3-從服務器上刪除和卸載-mysql-所有的-rpm-包" aria-label="Permalink to “3. 從服務器上刪除和卸載 MySQL 所有的 RPM 包”">​</a></h4><p>運行以下命令來禁用 MySQL RPM 的目標（target）。通過運行此命令，cPanel 將不再處理 MySQL 的更新，並在系統上將這些 RPM 版本標記為已卸載。</p><pre><code>/scripts/update_local_rpm_versions --edit target_settings.MySQL50 uninstalled
/scripts/update_local_rpm_versions --edit target_settings.MySQL51 uninstalled
/scripts/update_local_rpm_versions --edit target_settings.MySQL55 uninstalled
/scripts/update_local_rpm_versions --edit target_settings.MySQL56 uninstalled
</code></pre><p>現在運行以下命令：</p><p>/scripts/check_cpanel_rpms --fix --targets=MySQL50,MySQL51,MySQL55,MySQL56</p><p>移除服務器上所有已有的 MySQL RPM 來為 MariaDB 的安裝清理環境。請看下面的輸出：</p><pre><code>root@server1 [/var/lib/mysql]# /scripts/check_cpanel_rpms --fix --targets=MySQL50,MySQL51,MySQL55,MySQL56
[2016-01-31 09:53:59 +0000]
[2016-01-31 09:53:59 +0000] Problems were detected with cPanel-provided files which are RPM controlled.
[2016-01-31 09:53:59 +0000] If you did not make these changes intentionally, you can correct them by running:
[2016-01-31 09:53:59 +0000]
[2016-01-31 09:53:59 +0000] &gt; /usr/local/cpanel/scripts/check_cpanel_rpms --fix
[2016-01-31 09:53:59 +0000]
[2016-01-31 09:53:59 +0000] The following RPMs are unneeded on your system and should be uninstalled:
[2016-01-31 09:53:59 +0000] MySQL55-client-5.5.47-1.cp1148
[2016-01-31 09:53:59 +0000] MySQL55-devel-5.5.47-1.cp1148
[2016-01-31 09:53:59 +0000] MySQL55-server-5.5.47-1.cp1148
[2016-01-31 09:53:59 +0000] MySQL55-shared-5.5.47-1.cp1148
[2016-01-31 09:53:59 +0000] MySQL55-test-5.5.47-1.cp1148
[2016-01-31 09:53:59 +0000] compat-MySQL50-shared-5.0.96-4.cp1136
[2016-01-31 09:53:59 +0000] compat-MySQL51-shared-5.1.73-1.cp1150
[2016-01-31 09:53:59 +0000] Removing 0 broken rpms:
[2016-01-31 09:53:59 +0000] rpm: no packages given for erase
[2016-01-31 09:53:59 +0000] No new RPMS needed for install
[2016-01-31 09:53:59 +0000] Disabling service monitoring.
[2016-01-31 09:54:01 +0000] Uninstalling unneeded rpms: MySQL55-test MySQL55-server MySQL55-client compat-MySQL51-shared compat-MySQL50-shared MySQL55-shared MySQL55-devel
[2016-01-31 09:54:04 +0000] Removed symlink /etc/systemd/system/multi-user.target.wants/mysql.service.
[2016-01-31 09:54:04 +0000] Restoring service monitoring.
</code></pre><p>通過這些步驟，我們已經卸載了現有的 MySQL RPM，並做了標記來防止 MySQL的更新，服務器的環境已經清理，然後準備安裝 MariaDB。</p><p>開始安裝吧，我們需要根據 CentOS 和 MariaDB 的版本為 MariaDB 創建一個 yum 軟件庫。下面是我的做法！</p><h3 id="安裝步驟" tabindex="-1">安裝步驟： <a class="header-anchor" href="#安裝步驟" aria-label="Permalink to “安裝步驟：”">​</a></h3><h4 id="第1步-創建-yum-軟件庫。" tabindex="-1">第1步：創建 YUM 軟件庫。#### <a class="header-anchor" href="#第1步-創建-yum-軟件庫。" aria-label="Permalink to “第1步：創建 YUM 軟件庫。####”">​</a></h4><pre><code>root@server1 [~]# vim /etc/yum.repos.d/MariaDB.repo
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.0/centos7-amd64/
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
root@server1 [/etc/yum.repos.d]# cat /etc/yum.repos.d/MariaDB.repo
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.0/centos7-amd64/
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
</code></pre><h4 id="第2步-打開-etc-yum-conf-並修改如下行" tabindex="-1">第2步：打開 /etc/yum.conf 並修改如下行： <a class="header-anchor" href="#第2步-打開-etc-yum-conf-並修改如下行" aria-label="Permalink to “第2步：打開 /etc/yum.conf 並修改如下行：”">​</a></h4><p><strong>刪除這一行：</strong></p><pre><code>exclude=courier* dovecot* exim* filesystem httpd* mod_ssl* mydns* mysql* nsd* php* proftpd* pure-ftpd* spamassassin* squirrelmail*
</code></pre><p><strong>替換為：</strong></p><pre><code>exclude=courier* dovecot* exim* filesystem httpd* mod_ssl* mydns* nsd* proftpd* pure-ftpd* spamassassin* squirrelmail*
</code></pre><p><strong>重要</strong></p><p>需要確保我們已經從 exclude 列表中移除了 MySQL 和 PHP。</p><h4 id="第3步-運行以下命令來安裝-mariadb-和相關的包。" tabindex="-1">第3步：運行以下命令來安裝 MariaDB 和相關的包。 <a class="header-anchor" href="#第3步-運行以下命令來安裝-mariadb-和相關的包。" aria-label="Permalink to “第3步：運行以下命令來安裝 MariaDB 和相關的包。”">​</a></h4><pre><code>root@server1 [~]#yum install MariaDB-server MariaDB-client MariaDB-devel php-mysql

Dependencies Resolved

===============================================================================================================================================
Package Arch Version Repository Size
===============================================================================================================================================
Installing:
MariaDB-client x86_64 10.0.23-1.el7.centos mariadb 10 M
MariaDB-devel x86_64 10.0.23-1.el7.centos mariadb 6.3 M
MariaDB-server x86_64 10.0.23-1.el7.centos mariadb 55 M
php-mysql x86_64 5.4.16-36.el7_1 base 99 k
Installing for dependencies:
MariaDB-common x86_64 10.0.23-1.el7.centos mariadb 43 k
MariaDB-shared x86_64 10.0.23-1.el7.centos mariadb 1.2 M
libzip x86_64 0.10.1-8.el7 base 48 k
php-common x86_64 5.4.16-36.el7_1 base 563 k
php-pdo x86_64 5.4.16-36.el7_1 base 97 k

Transaction Summary
===============================================================================================================================================
Install 4 Packages (+5 Dependent package)
</code></pre><h4 id="第4步-重新啓動-並確保-mysql-服務已啓動。" tabindex="-1">第4步：重新啓動，並確保 MySQL 服務已啓動。#### <a class="header-anchor" href="#第4步-重新啓動-並確保-mysql-服務已啓動。" aria-label="Permalink to “第4步：重新啓動，並確保 MySQL 服務已啓動。####”">​</a></h4><pre><code>root@server1 [~]# systemctl start mysql
root@server1 [~]#
root@server1 [~]#
root@server1 [~]# systemctl status mysql
● mysql.service - LSB: start and stop MySQL
Loaded: loaded (/etc/rc.d/init.d/mysql)
Active: active (exited) since Sun 2016-01-31 10:01:46 UTC; 3s ago
Docs: man:systemd-sysv-generator(8)
Process: 23717 ExecStart=/etc/rc.d/init.d/mysql start (code=exited, status=0/SUCCESS)
Main PID: 23430 (code=exited, status=203/EXEC)

Jan 31 10:01:46 server1.centos7-test.com systemd[1]: Starting LSB: start and stop MySQL...
Jan 31 10:01:46 server1.centos7-test.com mysql[23717]: Starting MySQL SUCCESS!
Jan 31 10:01:46 server1.centos7-test.com systemd[1]: Started LSB: start and stop MySQL.
</code></pre><h4 id="第5步-運行-mysql-upgrade-命令。" tabindex="-1">第5步：運行 mysql_upgrade 命令。 <a class="header-anchor" href="#第5步-運行-mysql-upgrade-命令。" aria-label="Permalink to “第5步：運行 mysql_upgrade 命令。”">​</a></h4><p>它將檢查所有資料庫中的所有表與當前安裝的版本是否兼容，並在必要時會更新系統表，以賦予當前版本新增加的權限或能力。</p><pre><code>root@server1 [~]# mysql_upgrade
MySQL upgrade detected
Phase 1/6: Checking and upgrading mysql database
Processing databases
mysql
mysql.columns_priv OK
mysql.db OK
mysql.event OK
mysql.func OK
mysql.help_category OK
mysql.help_keyword OK
mysql.help_relation OK
mysql.help_topic OK
mysql.host OK
mysql.ndb_binlog_index OK
mysql.plugin OK
mysql.proc OK
mysql.procs_priv OK
mysql.proxies_priv OK
mysql.servers OK
mysql.tables_priv OK
mysql.time_zone OK
mysql.time_zone_leap_second OK
mysql.time_zone_name OK
mysql.time_zone_transition OK
mysql.time_zone_transition_type OK
mysql.user OK
Phase 2/6: Fixing views from mysql
Phase 3/6: Running &#39;mysql_fix_privilege_tables&#39;
Phase 4/6: Fixing table and database names
Phase 5/6: Checking and upgrading tables
Processing databases
cphulkd
cphulkd.auths OK
cphulkd.blacklist OK
cphulkd.brutes OK
cphulkd.good_logins OK
cphulkd.ip_lists OK
cphulkd.known_netblocks OK
cphulkd.login_track OK
cphulkd.logins OK
cphulkd.report OK
cphulkd.whitelist OK
eximstats
eximstats.defers OK
eximstats.failures OK
eximstats.sends OK
eximstats.smtp OK
information_schema
leechprotect
leechprotect.hits OK
modsec
modsec.hits OK
performance_schema
roundcube
roundcube.cache OK
roundcube.cache_index OK
roundcube.cache_messages OK
roundcube.cache_shared OK
roundcube.cache_thread OK
roundcube.contactgroupmembers OK
roundcube.contactgroups OK
roundcube.contacts OK
roundcube.cp_schema_version OK
roundcube.dictionary OK
roundcube.identities OK
roundcube.searches OK
roundcube.session OK
roundcube.system OK
roundcube.users OK
saheetha_test
saheetha_test.authors OK
whmxfer
whmxfer.sessions OK
Phase 6/6: Running &#39;FLUSH PRIVILEGES&#39;
OK
</code></pre><h4 id="第6步-再次重新啓動-mysql-的服務-以確保一切都運行完好。" tabindex="-1">第6步：再次重新啓動 MySQL 的服務，以確保一切都運行完好。 <a class="header-anchor" href="#第6步-再次重新啓動-mysql-的服務-以確保一切都運行完好。" aria-label="Permalink to “第6步：再次重新啓動 MySQL 的服務，以確保一切都運行完好。”">​</a></h4><pre><code>root@server1 [~]# systemctl restart mysql
root@server1 [~]#
root@server1 [~]# systemctl status mysql
● mysql.service - LSB: start and stop MySQL
Loaded: loaded (/etc/rc.d/init.d/mysql)
Active: active (running) since Sun 2016-01-31 10:04:11 UTC; 9s ago
Docs: man:systemd-sysv-generator(8)
Process: 23831 ExecStop=/etc/rc.d/init.d/mysql stop (code=exited, status=0/SUCCESS)
Process: 23854 ExecStart=/etc/rc.d/init.d/mysql start (code=exited, status=0/SUCCESS)
Main PID: 23430 (code=exited, status=203/EXEC)
CGroup: /system.slice/mysql.service
├─23861 /bin/sh /usr/bin/mysqld_safe --datadir=/var/lib/mysql --pid-file=/var/lib/mysql/server1.centos7-test.com.pid
└─23933 /usr/sbin/mysqld --basedir=/usr --datadir=/var/lib/mysql --plugin-dir=/usr/lib64/mysql/plugin --user=mysql --log-error=/v...

Jan 31 10:04:10 server1.centos7-test.com systemd[1]: Starting LSB: start and stop MySQL...
Jan 31 10:04:11 server1.centos7-test.com mysql[23854]: Starting MySQL. SUCCESS!
Jan 31 10:04:11 server1.centos7-test.com systemd[1]: Started LSB: start and stop MySQL.
</code></pre><h4 id="第7步-運行-easyapache-重建-apache-php-以支持-mariadb-並確保所有-php-的模組保持不變。" tabindex="-1">第7步：運行 EasyApache，重建 Apache/PHP 以支持 MariaDB，並確保所有 PHP 的模組保持不變。#### <a class="header-anchor" href="#第7步-運行-easyapache-重建-apache-php-以支持-mariadb-並確保所有-php-的模組保持不變。" aria-label="Permalink to “第7步：運行 EasyApache，重建 Apache/PHP 以支持 MariaDB，並確保所有 PHP 的模組保持不變。####”">​</a></h4><pre><code>root@server1 [~]#/scripts/easyapache --build
</code></pre><p><strong>重要</strong></p><p>如果你在安裝 MariaDB 之後忘記重建 Apache/PHP，將會報如下庫錯誤：</p><pre><code>root@server1 [/etc/my.cnf.d]# php -v
php: error while loading shared libraries: libmysqlclient.so.18: cannot open shared object file: No such file or directory
</code></pre><h4 id="第8步-現在驗證安裝的程序和資料庫。" tabindex="-1">第8步：現在驗證安裝的程序和資料庫。 <a class="header-anchor" href="#第8步-現在驗證安裝的程序和資料庫。" aria-label="Permalink to “第8步：現在驗證安裝的程序和資料庫。”">​</a></h4><pre><code>root@server1 [/var/lib/mysql]# mysql
Welcome to the MariaDB monitor. Commands end with ; or \\g.
Your MariaDB connection id is 15
Server version: 10.0.23-MariaDB MariaDB Server

Copyright (c) 2000, 2015, Oracle, MariaDB Corporation Ab and others.

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.

MariaDB [(none)]&gt; show storage engines;
+--------------------+---------+----------------------------------------------------------------------------+--------------+------+------------+
| Engine | Support | Comment | Transactions | XA | Savepoints |
+--------------------+---------+----------------------------------------------------------------------------+--------------+------+------------+
| CSV | YES | CSV storage engine | NO | NO | NO |
| MRG_MyISAM | YES | Collection of identical MyISAM tables | NO | NO | NO |
| MEMORY | YES | Hash based, stored in memory, useful for temporary tables | NO | NO | NO |
| BLACKHOLE | YES | /dev/null storage engine (anything you write to it disappears) | NO | NO | NO |
| MyISAM | YES | MyISAM storage engine | NO | NO | NO |
| InnoDB | DEFAULT | Percona-XtraDB, Supports transactions, row-level locking, and foreign keys | YES | YES | YES |
| ARCHIVE | YES | Archive storage engine | NO | NO | NO |
| FEDERATED | YES | FederatedX pluggable storage engine | YES | NO | YES |
| PERFORMANCE_SCHEMA | YES | Performance Schema | NO | NO | NO |
| Aria | YES | Crash-safe tables with MyISAM heritage | NO | NO | NO |
+--------------------+---------+----------------------------------------------------------------------------+--------------+------+------------+
10 rows in set (0.00 sec)
</code></pre><p>就這樣 ：）。現在，我們該去欣賞 MariaDB 完善和高效的特點了。希望你喜歡閲讀本文。希望留下您寶貴的建議和反饋！</p><hr>`,48)),t("p",null,[e[1]||(e[1]=n("via: ",-1)),r(a,{href:"http://linoxide.com/how-tos/install-mariadb-10-centos-7-cpanel/"},{default:s(()=>[...e[0]||(e[0]=[n("http://linoxide.com/how-tos/install-mariadb-10-centos-7-cpanel/",-1)])]),_:1})]),t("p",null,[e[5]||(e[5]=n("作者：",-1)),r(a,{href:"http://linoxide.com/author/saheethas/"},{default:s(()=>[...e[2]||(e[2]=[n("Saheetha Shameer",-1)])]),_:1}),e[6]||(e[6]=n(" 譯者：",-1)),r(a,{href:"https://github.com/strugglingyouth"},{default:s(()=>[...e[3]||(e[3]=[n("strugglingyouth",-1)])]),_:1}),e[7]||(e[7]=n(" 校對：",-1)),r(a,{href:"https://github.com/wxy"},{default:s(()=>[...e[4]||(e[4]=[n("wxy",-1)])]),_:1})]),t("p",null,[e[10]||(e[10]=n("本文由 ",-1)),r(a,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原創編譯，",-1)),r(a,{href:"https://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[n("Linux中國",-1)])]),_:1}),e[12]||(e[12]=n(" 榮譽推出",-1))])])}const _=o(m,[["render",p]]);export{v as __pageData,_ as default};
