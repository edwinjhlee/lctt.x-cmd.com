import{_ as n,a0 as p,w as i,s as d,ao as l,I as s,x as t,a1 as o,A as a}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"如何在 CentOS Linux 中配置 MariaDB 复制 | LCTT x X-CMD","titleTemplate":false,"description":"如何在 CentOS Linux 中配置 MariaDB 复制 | LCTT (201505) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"如何在 CentOS Linux 中配置 MariaDB 复制 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"如何在 CentOS Linux 中配置 MariaDB 复制 | LCTT (201505) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201505/20150417 How to Configure MariaDB Replication on CentOS Linux","title":"如何在 CentOS Linux 中配置 MariaDB 复制","tag":"201505","desc":""},"relativePath":"201505/20150417 How to Configure MariaDB Replication on CentOS Linux.md","filePath":"[post].md"}'),u={name:"201505/20150417 How to Configure MariaDB Replication on CentOS Linux.md"};function m(c,e,_,S,q,g){const r=p("Link");return i(),d("div",null,[e[13]||(e[13]=l(`<h1 id="如何在-centos-linux-中配置-mariadb-复制" tabindex="-1">如何在 CentOS Linux 中配置 MariaDB 复制 <a class="header-anchor" href="#如何在-centos-linux-中配置-mariadb-复制" aria-label="Permalink to “如何在 CentOS Linux 中配置 MariaDB 复制”">​</a></h1><p>这是一个创建数据库重复版本的过程。复制过程不仅仅是复制一个数据库，同时也包括从主节点到一个从节点的更改同步。但这并不意味着从数据库就是和主数据库完全相同的副本，因为复制可以配置为只复制表结构、行或者列，这叫做局部复制。复制保证了特定的配置对象在不同的数据库之间保持一致。</p><h3 id="mariadb-复制概念" tabindex="-1">Mariadb 复制概念 <a class="header-anchor" href="#mariadb-复制概念" aria-label="Permalink to “Mariadb 复制概念”">​</a></h3><p><strong>备份</strong> ：复制可以用来进行数据库备份。例如，当你做了主-&gt;从复制。如果主节点数据丢失(比如硬盘损坏)，你可以从从节点中恢复你的数据库。</p><p><strong>扩展</strong> ：你可以使用主-&gt;从复制作为扩展解决方案。例如，如果你有一些大的数据库以及SQL查询，使用复制你可以将这些查询分离到每个复制节点。写入操作的SQL应该只在主节点进行，而只读查询可以在从节点上进行。</p><p><strong>分发解决方案</strong> ：你可以用复制来进行分发。例如，你可以将不同的销售数据分发到不同的数据库。</p><p><strong>故障解决方案</strong> : 假如你建立有主节点-&gt;从节点1-&gt;从节点2-&gt;从节点3的复制结构。你可以为主节点写脚本监控，如果主节点出故障了，脚本可以快速的将从节点1切换为新的主节点，这样复制结构变成了主节点-&gt;从节点1-&gt;从节点2，你的应用可以继续工作而不会停机。</p><h3 id="复制的简单图解示范" tabindex="-1">复制的简单图解示范 <a class="header-anchor" href="#复制的简单图解示范" aria-label="Permalink to “复制的简单图解示范”">​</a></h3><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/mysql-replication-principle.png" alt="mysql 复制原理"></p><p>开始之前，你应该知道什么是<strong>二进制日志文件</strong>以及 Ibdata1。</p><p>二进制日志文件中包括关于数据库，数据和结构的所有更改的记录，以及每条语句的执行了多长时间。二进制日志文件包括一系列日志文件和一个索引文件。这意味着主要的SQL语句，例如CREATE, ALTER, INSERT, UPDATE 和 DELETE 会放到这个日志文件中；而例如SELECT这样的语句就不会被记录，它们可以被记录到普通的query.log文件中。</p><p>而 <strong>Ibdata1</strong> 简单的说据是一个包括所有表和所有数据库信息的文件。</p><h3 id="主服务器配置" tabindex="-1">主服务器配置 <a class="header-anchor" href="#主服务器配置" aria-label="Permalink to “主服务器配置”">​</a></h3><p>首先升级服务器</p><pre><code>sudo yum install update -y &amp;&amp; sudo yum install upgrade -y
</code></pre><p>我们工作在centos7 服务器上</p><pre><code>sudo cat /etc/redhat-release

CentOS Linux release 7.0.1406 (Core)
</code></pre><p>安装 MariaDB</p><pre><code>sudo yum install mariadb-server -y
</code></pre><p>启动 MariaDB 并启用随服务器启动</p><pre><code>sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service
</code></pre><p>输出如下:</p><pre><code>ln -s &#39;/usr/lib/systemd/system/mariadb.service&#39; &#39;/etc/systemd/system/multi-user.target.wants/mariadb.service&#39;
</code></pre><p>检查 MariaDB 状态</p><pre><code>sudo service mariadb status
</code></pre><p>或者使用</p><pre><code>sudo systemctl is-active mariadb.service
</code></pre><p>输出如下:</p><pre><code>Redirecting to /bin/systemctl status  mariadb.service
mariadb.service - MariaDB database server
Loaded: loaded (/usr/lib/systemd/system/mariadb.service; enabled)
</code></pre><p>设置 MariaDB 密码</p><pre><code>mysql -u root
mysql&gt; use mysql;
mysql&gt; update user set password=PASSWORD(&quot;SOME_ROOT_PASSWORD&quot;) where User=&#39;root&#39;;
mysql&gt; flush privileges;
mysql&gt; exit
</code></pre><p>这里 SOME_ROOT_PASSWORD 是你的 root 密码。 例如我用&quot;q&quot;作为密码，然后尝试登录：</p><pre><code>sudo mysql -u root -pSOME_ROOT_PASSWORD
</code></pre><p>输出如下:</p><pre><code>Welcome to the MariaDB monitor.  Commands end with ; or \\g.
Your MariaDB connection id is 5
Server version: 5.5.41-MariaDB MariaDB Server
Copyright (c) 2000, 2014, Oracle, MariaDB Corporation Ab and others.
</code></pre><p>输入 &#39;help;&#39; 或 &#39;\\h&#39; 查看帮助信息。 输入 &#39;\\c&#39; 清空当前输入语句。</p><p>让我们创建包括一些数据的表的数据库</p><p>创建数据库/模式</p><pre><code>sudo mysql -u root -pSOME_ROOT_PASSWORD
mysql&gt; create database test_repl;
</code></pre><p>其中:</p><pre><code>test_repl - 将要被复制的模式的名字
</code></pre><p>输出:如下</p><pre><code>Query OK, 1 row affected (0.00 sec)
</code></pre><p>创建 Persons 表</p><pre><code>mysql&gt; use test_repl;

CREATE TABLE Persons (
PersonID int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
);
</code></pre><p>输出如下:</p><pre><code>mysql&gt; MariaDB [test_repl]&gt; CREATE TABLE Persons (
-&gt; PersonID int,
-&gt; LastName varchar(255),
-&gt; FirstName varchar(255),
-&gt; Address varchar(255),
-&gt; City varchar(255)
-&gt; );
Query OK, 0 rows affected (0.01 sec)
</code></pre><p>插入一些数据</p><pre><code>mysql&gt; INSERT INTO Persons VALUES (1, &quot;LastName1&quot;, &quot;FirstName1&quot;, &quot;Address1&quot;, &quot;City1&quot;);
mysql&gt; INSERT INTO Persons VALUES (2, &quot;LastName2&quot;, &quot;FirstName2&quot;, &quot;Address2&quot;, &quot;City2&quot;);
mysql&gt; INSERT INTO Persons VALUES (3, &quot;LastName3&quot;, &quot;FirstName3&quot;, &quot;Address3&quot;, &quot;City3&quot;);
mysql&gt; INSERT INTO Persons VALUES (4, &quot;LastName4&quot;, &quot;FirstName4&quot;, &quot;Address4&quot;, &quot;City4&quot;);
mysql&gt; INSERT INTO Persons VALUES (5, &quot;LastName5&quot;, &quot;FirstName5&quot;, &quot;Address5&quot;, &quot;City5&quot;);
</code></pre><p>输出如下:</p><pre><code>Query OK, 5 row affected (0.00 sec)
</code></pre><p>检查数据</p><pre><code>mysql&gt; select * from Persons;
</code></pre><p>输出如下:</p><pre><code>+----------+-----------+------------+----------+-------+
| PersonID | LastName  | FirstName  | Address  | City  |
+----------+-----------+------------+----------+-------+
|        1 | LastName1 | FirstName1 | Address1 | City1 |
|        1 | LastName1 | FirstName1 | Address1 | City1 |
|        2 | LastName2 | FirstName2 | Address2 | City2 |
|        3 | LastName3 | FirstName3 | Address3 | City3 |
|        4 | LastName4 | FirstName4 | Address4 | City4 |
|        5 | LastName5 | FirstName5 | Address5 | City5 |
+----------+-----------+------------+----------+-------+
</code></pre><h3 id="配置-mariadb-复制" tabindex="-1">配置 MariaDB 复制 <a class="header-anchor" href="#配置-mariadb-复制" aria-label="Permalink to “配置 MariaDB 复制”">​</a></h3><p>你需要在主节点服务器上编辑 my.cnf文件来启用二进制日志以及设置服务器id。我会使用vi文本编辑器，但你可以使用任何你喜欢的，例如nano，joe。</p><pre><code>sudo vi /etc/my.cnf 
</code></pre><p>将下面的一些行写到[mysqld]部分。</p><pre><code>log-basename=master
log-bin
binlog-format=row
server_id=1
</code></pre><p>输出如下:</p><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/mariadb-config.png" alt="mariadb 配置主节点"></p><p>然后重启 MariaDB:</p><pre><code>sudo service mariadb restart
</code></pre><p>登录到 MariaDB 并查看二进制日志文件:</p><p>sudo mysql -u root -pq test_repl</p><p>mysql&gt; SHOW MASTER STATUS;</p><p>输出如下:</p><pre><code>+--------------------+----------+--------------+------------------+
| File               | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+--------------------+----------+--------------+------------------+
| mariadb-bin.000002 |     3913 |              |                  |
+--------------------+----------+--------------+------------------+
</code></pre><p><strong>记住</strong> : &quot;File&quot; 和 &quot;Position&quot; 的值。在从节点中你需要使用这些值</p><p>创建用来复制的用户</p><pre><code>mysql&gt; GRANT REPLICATION SLAVE ON *.* TO replication_user IDENTIFIED BY &#39;bigs3cret&#39; WITH GRANT OPTION;
mysql&gt; flush privileges;
</code></pre><p>输出如下:</p><pre><code>Query OK, 0 rows affected (0.00 sec)
Query OK, 0 rows affected (0.00 sec)
</code></pre><p>在数据库中检查用户</p><pre><code>mysql&gt; select * from mysql.user WHERE user=&quot;replication_user&quot;\\G;
</code></pre><p>输出如下:</p><pre><code>mysql&gt; select * from mysql.user WHERE user=&quot;replication_user&quot;\\G;
*************************** 1. row ***************************
Host: %
User: replication_user
Password: *2AF30E7AEE9BF3AF584FB19653881D2D072FA49C
Select_priv: N
.....
</code></pre><p>从主节点创建 DB dump (将要被复制的所有数据的快照)</p><pre><code>mysqldump -uroot -pSOME_ROOT_PASSWORD  test_repl &gt; full-dump.sql
</code></pre><p>其中:</p><pre><code>SOME_ROOT_PASSWORD - 你设置的root用户的密码
test_repl - 将要复制的数据库的名称;
</code></pre><p>你需要在从节点中恢复 mysql dump (full-dump.sql)。重复需要这个。</p><h3 id="从节点配置" tabindex="-1">从节点配置 <a class="header-anchor" href="#从节点配置" aria-label="Permalink to “从节点配置”">​</a></h3><p>所有这些命令需要在从节点中进行。</p><p>假设我们已经更新/升级了包括有最新的MariaDB服务器的 CentOS 7.x，而且你可以用root账号登陆到MariaDB服务器(这在这篇文章的第一部分已经介绍过)</p><p>登录到Maria 数据库控制台并创建数据库</p><pre><code>mysql -u root -pSOME_ROOT_PASSWORD;
mysql&gt; create database test_repl;
mysql&gt; exit;
</code></pre><p>在从节点恢复主节点的数据</p><pre><code>mysql -u root -pSOME_ROOT_PASSWORD test_repl &lt; full-dump.sql
</code></pre><p>其中:</p><p>full-dump.sql - 你在测试服务器中创建的DB Dump。</p><p>登录到Maria 数据库并启用复制</p><pre><code>mysql&gt;     CHANGE MASTER TO
MASTER_HOST=&#39;82.196.5.39&#39;,
MASTER_USER=&#39;replication_user&#39;,
MASTER_PASSWORD=&#39;bigs3cret&#39;,
MASTER_PORT=3306,
MASTER_LOG_FILE=&#39;mariadb-bin.000002&#39;,
MASTER_LOG_POS=3913,
MASTER_CONNECT_RETRY=10;
</code></pre><p><img src="http://blog.linoxide.com/wp-content/uploads/2015/04/setup-replication.png" alt="mariadb 启用复制"></p><p>其中:</p><pre><code>MASTER_HOST - 主节点服务器的IP
MASTER_USER - 主节点服务器中的复制用户
MASTER_PASSWORD - 复制用户密码
MASTER_PORT - 主节点中的mysql端口
MASTER_LOG_FILE - 主节点中的二进制日志文件名称
MASTER_LOG_POS - 主节点中的二进制日志文件位置
</code></pre><p>开启从节点模式</p><pre><code>mysql&gt; slave start;
</code></pre><p>输出如下:</p><pre><code>Query OK, 0 rows affected (0.00 sec)
</code></pre><p>检查从节点状态</p><pre><code>mysql&gt; show slave status\\G;
</code></pre><p>输出如下:</p><pre><code>*************************** 1. row ***************************
Slave_IO_State: Waiting for master to send event
Master_Host: 82.196.5.39
Master_User: replication_user
Master_Port: 3306
Connect_Retry: 10
Master_Log_File: mariadb-bin.000002
Read_Master_Log_Pos: 4175
Relay_Log_File: mariadb-relay-bin.000002
Relay_Log_Pos: 793
Relay_Master_Log_File: mariadb-bin.000002
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
Replicate_Do_DB:
Replicate_Ignore_DB:
Replicate_Do_Table:
Replicate_Ignore_Table:
Replicate_Wild_Do_Table:
Replicate_Wild_Ignore_Table:
Last_Errno: 0
Last_Error:
Skip_Counter: 0
Exec_Master_Log_Pos: 4175
Relay_Log_Space: 1089
Until_Condition: None
Until_Log_File:
Until_Log_Pos: 0
Master_SSL_Allowed: No
Master_SSL_CA_File:
Master_SSL_CA_Path:
Master_SSL_Cert:
Master_SSL_Cipher:
Master_SSL_Key:
Seconds_Behind_Master: 0
Master_SSL_Verify_Server_Cert: No
Last_IO_Errno: 0
Last_IO_Error:
Last_SQL_Errno: 0
Last_SQL_Error:
Replicate_Ignore_Server_Ids:
Master_Server_Id: 1
1 row in set (0.00 sec)
</code></pre><p>到这里所有步骤都应该没问题，也不应该出现错误。</p><h3 id="测试复制" tabindex="-1">测试复制 <a class="header-anchor" href="#测试复制" aria-label="Permalink to “测试复制”">​</a></h3><p>在主节点服务器中添加一些条目到数据库</p><pre><code>mysql -u root -pSOME_ROOT_PASSWORD test_repl

mysql&gt; INSERT INTO Persons VALUES (6, &quot;LastName6&quot;, &quot;FirstName6&quot;, &quot;Address6&quot;, &quot;City6&quot;);
mysql&gt; INSERT INTO Persons VALUES (7, &quot;LastName7&quot;, &quot;FirstName7&quot;, &quot;Address7&quot;, &quot;City7&quot;);
mysql&gt; INSERT INTO Persons VALUES (8, &quot;LastName8&quot;, &quot;FirstName8&quot;, &quot;Address8&quot;, &quot;City8&quot;);
</code></pre><p>到从节点服务器中查看复制数据</p><pre><code>mysql -u root -pSOME_ROOT_PASSWORD test_repl

mysql&gt; select * from Persons;

+----------+-----------+------------+----------+-------+
| PersonID | LastName  | FirstName  | Address  | City  |
+----------+-----------+------------+----------+-------+
...................
|        6 | LastName6 | FirstName6 | Address6 | City6 |
|        7 | LastName7 | FirstName7 | Address7 | City7 |
|        8 | LastName8 | FirstName8 | Address8 | City8 |
+----------+-----------+------------+----------+-------+
</code></pre><p>你可以看到数据已经被复制到从节点。这意味着复制能正常工作。希望你能喜欢这篇文章。如果你有任何问题请告诉我们。</p><hr>`,113)),s("p",null,[e[1]||(e[1]=t("via: ",-1)),o(r,{href:"http://linoxide.com/how-tos/configure-mariadb-replication-centos-linux/"},{default:a(()=>[...e[0]||(e[0]=[t("http://linoxide.com/how-tos/configure-mariadb-replication-centos-linux/",-1)])]),_:1})]),s("p",null,[e[5]||(e[5]=t("作者：",-1)),o(r,{href:"http://linoxide.com/author/bobbin/"},{default:a(()=>[...e[2]||(e[2]=[t("Bobbin Zachariah",-1)])]),_:1}),e[6]||(e[6]=t(" 译者：",-1)),o(r,{href:"https://github.com/ictlyh"},{default:a(()=>[...e[3]||(e[3]=[t("ictlyh",-1)])]),_:1}),e[7]||(e[7]=t(" 校对：",-1)),o(r,{href:"https://github.com/wxy"},{default:a(()=>[...e[4]||(e[4]=[t("wxy",-1)])]),_:1})]),s("p",null,[e[10]||(e[10]=t("本文由 ",-1)),o(r,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[8]||(e[8]=[t("LCTT",-1)])]),_:1}),e[11]||(e[11]=t(" 原创翻译，",-1)),o(r,{href:"http://linux.cn/"},{default:a(()=>[...e[9]||(e[9]=[t("Linux中国",-1)])]),_:1}),e[12]||(e[12]=t(" 荣誉推出",-1))])])}const L=n(u,[["render",m]]);export{T as __pageData,L as default};
