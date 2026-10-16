import{_ as s,a0 as i,w as l,s as d,I as o,x as n,a1 as r,A as a,ao as m}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const M=JSON.parse('{"title":"15个 MySQL 基础面试题，DBA 们准备好了吗？ | LCTT x X-CMD","titleTemplate":false,"description":"15个 MySQL 基础面试题，DBA 们准备好了吗？ | LCTT (201401) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"15个 MySQL 基础面试题，DBA 们准备好了吗？ | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"15个 MySQL 基础面试题，DBA 们准备好了吗？ | LCTT (201401) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201401/15 Basic MySQL Interview Questions for Database Administrators","title":"15个 MySQL 基础面试题，DBA 们准备好了吗？","tag":"201401","desc":""},"relativePath":"201401/15 Basic MySQL Interview Questions for Database Administrators.md","filePath":"[post].md"}'),c={name:"201401/15 Basic MySQL Interview Questions for Database Administrators.md"};function u(p,e,g,b,h,y){const t=i("Link");return l(),d("div",null,[e[19]||(e[19]=o("h1",{id:"_15个-mysql-基础面试题-dba-们准备好了吗",tabindex:"-1"},[n("15个 MySQL 基础面试题，DBA 们准备好了吗？ "),o("a",{class:"header-anchor",href:"#_15个-mysql-基础面试题-dba-们准备好了吗","aria-label":"Permalink to “15个 MySQL 基础面试题，DBA 们准备好了吗？”"},"​")],-1)),o("p",null,[e[3]||(e[3]=n("此前我们已经有发表过Linux 面试基础问答之",-1)),r(t,{href:"http://linux.cn/article-2315-1.html"},{default:a(()=>[...e[0]||(e[0]=[n("一",-1)])]),_:1}),e[4]||(e[4]=n("、",-1)),r(t,{href:"http://linux.cn/article-2370-1.html"},{default:a(()=>[...e[1]||(e[1]=[n("二",-1)])]),_:1}),e[5]||(e[5]=n("和",-1)),r(t,{href:"http://linux.cn/article-2371-1.html"},{default:a(()=>[...e[2]||(e[2]=[n("三",-1)])]),_:1}),e[6]||(e[6]=n("共3篇文章，获得读者的好评，同时我们得到反馈，有些读者希望这种交互式学习方法能够做得更加灵活。心动不如行动，我们这就为您奉上 ",-1)),e[7]||(e[7]=o("strong",null,"15个 MySQL 面试题",-1))]),e[20]||(e[20]=m(`<p><img src="http://www.tecmint.com/wp-content/uploads/2013/12/Mysql-Interview-Questions.png" alt=""></p><h3 id="问题1-你如何确定-mysql-是否处于运行状态" tabindex="-1">问题1：你如何确定 MySQL 是否处于运行状态？ <a class="header-anchor" href="#问题1-你如何确定-mysql-是否处于运行状态" aria-label="Permalink to “问题1：你如何确定 MySQL 是否处于运行状态？”">​</a></h3><blockquote><p><strong>答案</strong>： Debian 上运行命令 <strong>service mysql status</strong>，在RedHat 上运行命令 <strong>service mysqld status</strong>。然后看看输出即可。</p></blockquote><ul><li></li></ul><pre><code>root@localhost:/home/avi# service mysql status

/usr/bin/mysqladmin  Ver 8.42 Distrib 5.1.72, for debian-linux-gnu on i486
Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Server version 5.1.72-2
Protocol version 10
Connection Localhost via UNIX socket
UNIX socket /var/run/mysqld/mysqld.sock
Uptime: 1 hour 22 min 49 sec

Threads: 1  Questions: 112138  Slow queries: 1  Opens: 1485  Flush tables: 1  Open tables: 64  Queries per second avg: 22.567.
</code></pre><h3 id="问题2-如何开启或停止-mysql-服务" tabindex="-1">问题2：如何开启或停止 MySQL 服务？ <a class="header-anchor" href="#问题2-如何开启或停止-mysql-服务" aria-label="Permalink to “问题2：如何开启或停止 MySQL 服务？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>service mysqld start</strong> 开启服务；运行命令 <strong>service mysqld stop</strong> 停止服务。</p></blockquote><ul><li></li></ul><pre><code>root@localhost:/home/avi# service mysql stop

Stopping MySQL database server: mysqld.

root@localhost:/home/avi# service mysql start

Starting MySQL database server: mysqld.

Checking for corrupt, not cleanly closed and upgrade needing tables..
</code></pre><h3 id="问题3-如何通过-shell-登入-mysql" tabindex="-1">问题3：如何通过 Shell 登入 MySQL？ <a class="header-anchor" href="#问题3-如何通过-shell-登入-mysql" aria-label="Permalink to “问题3：如何通过 Shell 登入 MySQL？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>mysql -u root -p</strong></p></blockquote><ul><li></li></ul><pre><code>root@localhost:/home/avi# mysql -u root -p 
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \\g. 
Your MySQL connection id is 207 
Server version: 5.1.72-2 (Debian) 

Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. 

Oracle is a registered trademark of Oracle Corporation and/or its 
affiliates. Other names may be trademarks of their respective 
owners. 

Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement. 

mysql&gt;
</code></pre><h3 id="问题4-如何列出所有数据库" tabindex="-1">问题4：如何列出所有数据库？ <a class="header-anchor" href="#问题4-如何列出所有数据库" aria-label="Permalink to “问题4：如何列出所有数据库？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>show databases;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; show databases; 
+--------------------+ 
| Database           | 
+--------------------+ 
| information_schema | 
| a1                 | 
| cloud              | 
| mysql              | 
| phpmyadmin         | 
| playsms            | 
| sisso              | 
| test               | 
| ukolovnik          | 
| wordpress          | 
+--------------------+ 
10 rows in set (0.14 sec)
</code></pre><h3 id="问题5-如何切换到某个数据库并在上面工作" tabindex="-1">问题5： 如何切换到某个数据库并在上面工作？ <a class="header-anchor" href="#问题5-如何切换到某个数据库并在上面工作" aria-label="Permalink to “问题5： 如何切换到某个数据库并在上面工作？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>use database_name;</strong> 进入名为 database_name 的数据库。</p></blockquote><ul><li></li></ul><pre><code>mysql&gt; use cloud; 
Reading table information for completion of table and column names 
You can turn off this feature to get a quicker startup with -A 

Database changed 
mysql&gt;
</code></pre><h3 id="问题6-如何列出某个数据库内所有表" tabindex="-1">问题6：如何列出某个数据库内所有表？ <a class="header-anchor" href="#问题6-如何列出某个数据库内所有表" aria-label="Permalink to “问题6：如何列出某个数据库内所有表？”">​</a></h3><blockquote><p><strong>答案</strong>：在当前数据库运行命令 <strong>show tables;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; show tables; 
+----------------------------+ 
| Tables_in_cloud            | 
+----------------------------+ 
| oc_appconfig               | 
| oc_calendar_calendars      | 
| oc_calendar_objects        | 
| oc_calendar_repeat         | 
| oc_calendar_share_calendar | 
| oc_calendar_share_event    | 
| oc_contacts_addressbooks   | 
| oc_contacts_cards          | 
| oc_fscache                 | 
| oc_gallery_sharing         | 
+----------------------------+ 
10 rows in set (0.00 sec)
</code></pre><h3 id="问题7-如何获取表内所有-field-对象的名称和类型" tabindex="-1">问题7：如何获取表内所有 Field 对象的名称和类型？ <a class="header-anchor" href="#问题7-如何获取表内所有-field-对象的名称和类型" aria-label="Permalink to “问题7：如何获取表内所有 Field 对象的名称和类型？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>describe table_name;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; describe oc_users; 
+----------+--------------+------+-----+---------+-------+ 
| Field    | Type         | Null | Key | Default | Extra | 
+----------+--------------+------+-----+---------+-------+ 
| uid      | varchar(64)  | NO   | PRI |         |       | 
| password | varchar(255) | NO   |     |         |       | 
+----------+--------------+------+-----+---------+-------+ 
2 rows in set (0.00 sec)
</code></pre><h3 id="问题8-如何删除表" tabindex="-1">问题8：如何删除表？ <a class="header-anchor" href="#问题8-如何删除表" aria-label="Permalink to “问题8：如何删除表？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>drop table table_name;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; drop table lookup; 

Query OK, 0 rows affected (0.00 sec)
</code></pre><h3 id="问题9-如何删除数据库" tabindex="-1">问题9：如何删除数据库？ <a class="header-anchor" href="#问题9-如何删除数据库" aria-label="Permalink to “问题9：如何删除数据库？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>drop database database-name;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; drop database a1; 

Query OK, 11 rows affected (0.07 sec)
</code></pre><h3 id="问题10-如何查看表内所有数据" tabindex="-1">问题10：如何查看表内所有数据？ <a class="header-anchor" href="#问题10-如何查看表内所有数据" aria-label="Permalink to “问题10：如何查看表内所有数据？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>select * from table_name;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; select * from engines; 
+------------+---------+----------------------------------------------------------------+--------------+------+------------+ 
| ENGINE     | SUPPORT | COMMENT                                                        | TRANSACTIONS | XA   | SAVEPOINTS | 
+------------+---------+----------------------------------------------------------------+--------------+------+------------+ 
| InnoDB     | YES     | Supports transactions, row-level locking, and foreign keys     | YES          | YES  | YES        | 
| MRG_MYISAM | YES     | Collection of identical MyISAM tables                          | NO           | NO   | NO         | 
| BLACKHOLE  | YES     | /dev/null storage engine (anything you write to it disappears) | NO           | NO   | NO         | 
| CSV        | YES     | CSV storage engine                                             | NO           | NO   | NO         | 
| MEMORY     | YES     | Hash based, stored in memory, useful for temporary tables      | NO           | NO   | NO         | 
| FEDERATED  | NO      | Federated MySQL storage engine                                 | NULL         | NULL | NULL       | 
| ARCHIVE    | YES     | Archive storage engine                                         | NO           | NO   | NO         | 
| MyISAM     | DEFAULT | Default engine as of MySQL 3.23 with great performance         | NO           | NO   | NO         | 
+------------+---------+----------------------------------------------------------------+--------------+------+------------+ 
8 rows in set (0.00 sec)
</code></pre><h3 id="问题11-如何从表-比如-oc-users-中获取一个-field-对象-比如-uid-的所有数据" tabindex="-1">问题11：如何从表（比如 oc_users ）中获取一个 field 对象（比如 uid）的所有数据？ <a class="header-anchor" href="#问题11-如何从表-比如-oc-users-中获取一个-field-对象-比如-uid-的所有数据" aria-label="Permalink to “问题11：如何从表（比如 oc_users ）中获取一个 field 对象（比如 uid）的所有数据？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>select uid from oc_users;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; select uid from oc_users; 
+-----+ 
| uid | 
+-----+ 
| avi | 
+-----+ 
1 row in set (0.03 sec)
</code></pre><h3 id="问题12-假设你有一个名为-xyz-的表-它存在多个字段-如-create-time-和-engine-。名为-engine-的字段由-memoty-和-myisam-两种数值组成。如何只列出-create-time-和-engine-这两列并且-engine-的值为-myisam" tabindex="-1">问题12：假设你有一个名为 ‘xyz’ 的表，它存在多个字段，如 ‘create_time’ 和 ‘engine’。名为 engine 的字段由 ‘Memoty’ 和 ‘MyIsam’ 两种数值组成。如何只列出 ‘create_time’ 和 ‘engine’ 这两列并且 engine 的值为 ‘MyIsam’？ <a class="header-anchor" href="#问题12-假设你有一个名为-xyz-的表-它存在多个字段-如-create-time-和-engine-。名为-engine-的字段由-memoty-和-myisam-两种数值组成。如何只列出-create-time-和-engine-这两列并且-engine-的值为-myisam" aria-label="Permalink to “问题12：假设你有一个名为 ‘xyz’ 的表，它存在多个字段，如 ‘create_time’ 和 ‘engine’。名为 engine 的字段由 ‘Memoty’ 和 ‘MyIsam’ 两种数值组成。如何只列出 ‘create_time’ 和 ‘engine’ 这两列并且 engine 的值为 ‘MyIsam’？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>select create_time, engine from xyz where engine = ”MyIsam”;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; select create_time, engine from xyz where engine=&quot;MyIsam&quot;;

+---------------------+--------+ 
| create_time         | engine | 
+---------------------+--------+ 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-12-15 13:43:27 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
| 2013-10-23 14:56:38 | MyISAM | 
+---------------------+--------+ 
132 rows in set (0.29 sec)
</code></pre><h3 id="问题13-如何列出表-xrt-内-name-域值为-tecmint-web-address-域值为-tecmint-com-的所有数据" tabindex="-1">问题13：如何列出表 ‘xrt’ 内 name 域值为 ‘tecmint’，web_address 域值为 ‘tecmint.com’ 的所有数据？ <a class="header-anchor" href="#问题13-如何列出表-xrt-内-name-域值为-tecmint-web-address-域值为-tecmint-com-的所有数据" aria-label="Permalink to “问题13：如何列出表 ‘xrt’ 内 name 域值为 ‘tecmint’，web_address 域值为 ‘tecmint.com’ 的所有数据？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>select * from xrt where name = “tecmint” and web_address = “tecmint.com”;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; select  * from xrt where name = &quot;tecmint&quot; and web_address = “tecmint.com”;
+---------------+---------------------+---------------+ 
| Id                  | name                   | web_address | 
+---------------+---------------------+----------------+ 
| 13                 |  tecmint               | tecmint.com  |
+---------------+---------------------+----------------+ 
| 41                 |  tecmint               | tecmint.com  |
+---------------+---------------------+----------------+
</code></pre><h3 id="问题14-如何列出表-xrt-内-name-域值不为-tecmint-web-address-域值为-tecmint-com-的所有数据" tabindex="-1">问题14：如何列出表 ‘xrt’ 内 name 域值不为 ‘tecmint’，web_address 域值为 ‘tecmint.com’ 的所有数据？ <a class="header-anchor" href="#问题14-如何列出表-xrt-内-name-域值不为-tecmint-web-address-域值为-tecmint-com-的所有数据" aria-label="Permalink to “问题14：如何列出表 ‘xrt’ 内 name 域值不为 ‘tecmint’，web_address 域值为 ‘tecmint.com’ 的所有数据？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>select * from xrt where name != &quot;tecmint&quot; and web_address = &quot;tecmint.com&quot;;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; select * from xrt where name != ”tecmint” and web_address = ”tecmint.com”;

+---------------+---------------------+---------------+ 
| Id            | name                | web_address   | 
+---------------+---------------------+----------------+ 
| 1173          |  tecmint            | tecmint.com   |
+---------------+---------------------+----------------+
</code></pre><h3 id="问题15-如何知道表内行数" tabindex="-1">问题15：如何知道表内行数？ <a class="header-anchor" href="#问题15-如何知道表内行数" aria-label="Permalink to “问题15：如何知道表内行数？”">​</a></h3><blockquote><p><strong>答案</strong>：运行命令 <strong>select count(*) from table_name;</strong></p></blockquote><ul><li></li></ul><pre><code>mysql&gt; select count(*) from Tables; 

+----------+ 
| count(*) | 
+----------+ 
|      282 | 
+----------+ 
1 row in set (0.01 sec)
</code></pre><p>以上是文章的全部内容。这篇‘<strong>Linux 面试题</strong>’对您有任何帮助吗？别忘了在下面留言，写出您的宝贵意见。</p><hr>`,63)),o("p",null,[e[9]||(e[9]=n("via: ",-1)),r(t,{href:"http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/"},{default:a(()=>[...e[8]||(e[8]=[n("http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/",-1)])]),_:1})]),o("p",null,[e[12]||(e[12]=n("译者：",-1)),r(t,{href:"https://github.com/bazz2"},{default:a(()=>[...e[10]||(e[10]=[n("bazz2",-1)])]),_:1}),e[13]||(e[13]=n(" 校对：",-1)),r(t,{href:"https://github.com/carolinewuyan"},{default:a(()=>[...e[11]||(e[11]=[n("Caroline",-1)])]),_:1})]),o("p",null,[e[16]||(e[16]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:a(()=>[...e[14]||(e[14]=[n("LCTT",-1)])]),_:1}),e[17]||(e[17]=n(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:a(()=>[...e[15]||(e[15]=[n("Linux中国",-1)])]),_:1}),e[18]||(e[18]=n(" 荣誉推出",-1))])])}const S=s(c,[["render",u]]);export{M as __pageData,S as default};
