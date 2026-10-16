import{_ as o,a0 as l,w as i,s as d,I as a,x as n,a1 as r,A as s,ao as m}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const f=JSON.parse(`{"title":"给linux用户的11个高级MySQL数据库面试问题和答案 | LCTT x X-CMD","titleTemplate":false,"description":"给linux用户的11个高级MySQL数据库面试问题和答案 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"给linux用户的11个高级MySQL数据库面试问题和答案 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"给linux用户的11个高级MySQL数据库面试问题和答案 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140620 11 Advance MySQL Database 'Interview Questions and Answers' for Linux Users","title":"给linux用户的11个高级MySQL数据库面试问题和答案","tag":"201408","desc":""},"relativePath":"201408/20140620 11 Advance MySQL Database 'Interview Questions and Answers' for Linux Users.md","filePath":"[post].md"}`),p={name:"201408/20140620 11 Advance MySQL Database 'Interview Questions and Answers' for Linux Users.md"};function c(u,e,L,y,h,S){const t=l("Link");return i(),d("div",null,[e[13]||(e[13]=a("h1",{id:"给linux用户的11个高级mysql数据库面试问题和答案",tabindex:"-1"},[n("给linux用户的11个高级MySQL数据库面试问题和答案 "),a("a",{class:"header-anchor",href:"#给linux用户的11个高级mysql数据库面试问题和答案","aria-label":"Permalink to “给linux用户的11个高级MySQL数据库面试问题和答案”"},"​")],-1)),e[14]||(e[14]=a("p",null,"我们已经发表了两篇MySQL的文章，非常感谢Tecmint社区的大力支持。这是MySQL面试系列的第三篇文章,并且在面试专栏中排第16。",-1)),a("ul",null,[a("li",null,[r(t,{href:"http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/"},{default:s(()=>[...e[0]||(e[0]=[n("15个基本的MySQL面试问题",-1)])]),_:1})]),a("li",null,[r(t,{href:"http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/"},{default:s(()=>[...e[1]||(e[1]=[n("给中级人员的10个MySQL面试问题",-1)])]),_:1})])]),e[15]||(e[15]=m(`<p><img src="http://www.tecmint.com/wp-content/uploads/2014/06/MySQL-Interview-Questions.jpeg" alt="11个MySQL面试问题"></p><p>因为有大家的支持，我们才能做到现在，感谢你们这一路上对我们的支持.在这篇文章中，我们将主要针对MySQL的实用技巧，讲讲面试中相关的问题.</p><h3 id="_1-如何使用select语句找到你正在运行的服务器的版本并打印出当前数据库的名称" tabindex="-1">1. 如何使用SELECT语句找到你正在运行的服务器的版本并打印出当前数据库的名称? <a class="header-anchor" href="#_1-如何使用select语句找到你正在运行的服务器的版本并打印出当前数据库的名称" aria-label="Permalink to “1. 如何使用SELECT语句找到你正在运行的服务器的版本并打印出当前数据库的名称?”">​</a></h3><p><strong>答</strong>：下面的语句的结果会显示服务器的版本和当前的数据库名称</p><pre><code> mysql&gt; SELECT VERSION(), DATABASE();
 
 +-------------------------+------------+
 | VERSION()               | DATABASE() |
 +-------------------------+------------+
 | 5.5.34-0ubuntu0.13.10.1 | NULL       |
 +-------------------------+------------+
 1 row in set (0.06 sec)
</code></pre><p>在Database一列中显示<strong>NULL</strong>是因为我们当前没有选择任何数据库。因此，使用下面的语句先选择一个数据库,就能看到相应的结果。</p><pre><code>mysql&gt; use Tecmint;

Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
</code></pre><hr><pre><code>mysql&gt; select VERSION(), DATABASE();

+-------------------------+------------+
| VERSION()               | DATABASE() |
+-------------------------+------------+
| 5.5.34-0ubuntu0.13.10.1 | tecmint    |
+-------------------------+------------+
1 row in set (0.00 sec)
</code></pre><h3 id="_2-使用非运算符-从表-tecmint-中列出除了-sam-以外的所有user记录" tabindex="-1">2. 使用非运算符(!)从表&quot;Tecmint&quot;中列出除了&quot;SAM&quot;以外的所有user记录 <a class="header-anchor" href="#_2-使用非运算符-从表-tecmint-中列出除了-sam-以外的所有user记录" aria-label="Permalink to “2. 使用非运算符(!)从表Tecmint中列出除了SAM以外的所有user记录”">​</a></h3><p><strong>答</strong>：使用下面的语句</p><pre><code>mysql&gt; SELECT * FROM Tecmint WHERE user !=SAM;

+---------------------+---------+---------+---------+---------+-------+ 
| date                | user    | host 	 | root     | local   | size  | 
+---------------------+---------+---------+---------+---------+-------+ 
| 2001-05-14 14:42:21 | Anthony | venus  | barb     | venus   | 98151 | 
| 2001-05-15 08:50:57 | TIM     | venus  | phil     | venus   | 978   | 
+---------------------+---------+---------+---------+---------+-------+
</code></pre><h3 id="_3-and-运算符有可能带着非运算符-一起用吗" tabindex="-1">3. ‘AND’运算符有可能带着非运算符(!)一起用吗？ <a class="header-anchor" href="#_3-and-运算符有可能带着非运算符-一起用吗" aria-label="Permalink to “3. ‘AND’运算符有可能带着非运算符(!)一起用吗？”">​</a></h3><p><strong>答</strong>：当我们使用‘=’号时用‘AND’连接，用‘!=’时用‘OR’连接，下面是‘=’和AND运算符一起用的例子</p><pre><code>mysql&gt; SELECT * FROM mail WHERE user = SAM AND root = phil
</code></pre><p>‘!=’和OR运算符的例子</p><pre><code>mysql&gt; SELECT * FROM mail WHERE user != SAM OR root != phil

+---------------------+---------+---------+---------+---------+-------+ 
| date                | user    | host    | root    | local   | size  | 
+---------------------+---------+---------+---------+---------+-------+ 
| 2001-05-14 14:42:21 | Anthony | venus   | barb    | venus   | 98151 | 
+---------------------+---------+---------+---------+---------+-------+
</code></pre><ul><li>= : 等于</li><li>!= : 不等于</li><li>! : 代表“非”的运算符</li></ul><p>AND和OR在MySQL中被看作连接运算符</p><h3 id="_4-ifnull-当打在mysql中有什么作用" tabindex="-1">4. IFNULL()当打在MySQL中有什么作用? <a class="header-anchor" href="#_4-ifnull-当打在mysql中有什么作用" aria-label="Permalink to “4. IFNULL()当打在MySQL中有什么作用?”">​</a></h3><p><strong>答</strong>：使用<strong>IFNULL()</strong>方法能使MySQL中的查询更加精确。IFNULL()方法将会测试它的第一个参数，若不为NULL则返回该参数的值，否则返回第二个参数的值</p><pre><code>mysql&gt; SELECT name, IFNULL(id,&#39;Unknown&#39;) AS &#39;id&#39; FROM taxpayer;

+---------+---------+ 
| name 	  | id      | 
+---------+---------+ 
| bernina | 198-48  | 
| bertha  | Unknown | 
| ben     | Unknown | 
| bill    | 475-83  | 
+---------+---------+
</code></pre><h3 id="_5-如果你只想知道从一个结果集的开头或者结尾开始的特定几条记录-该如何实现" tabindex="-1">5. 如果你只想知道从一个结果集的开头或者结尾开始的特定几条记录，该如何实现？ <a class="header-anchor" href="#_5-如果你只想知道从一个结果集的开头或者结尾开始的特定几条记录-该如何实现" aria-label="Permalink to “5. 如果你只想知道从一个结果集的开头或者结尾开始的特定几条记录，该如何实现？”">​</a></h3><p><strong>答</strong>：我们需要把<strong>LIMIT</strong>语句接在<strong>ORDER BY</strong>语句后使用，以达到上述效果。</p><h4 id="显示一行记录" tabindex="-1">显示一行记录 <a class="header-anchor" href="#显示一行记录" aria-label="Permalink to “显示一行记录”">​</a></h4><pre><code>mysql&gt; SELECT * FROM name LIMIT 1;

+----+------+------------+-------+----------------------+------+ 
| id | name | birth      | color | foods                | cats | 
+----+------+------------+-------+----------------------+------+ 
| 1  | Fred | 1970-04-13 | black | lutefisk,fadge,pizza | 0    | 
+----+------+------------+-------+----------------------+------+
</code></pre><h4 id="显示5行记录" tabindex="-1">显示5行记录 <a class="header-anchor" href="#显示5行记录" aria-label="Permalink to “显示5行记录”">​</a></h4><pre><code>mysql&gt; SELECT * FROM profile LIMIT 5;

+----+------+------------+-------+-----------------------+------+ 
| id | name | birth      | color | foods                 | cats | 
+----+------+------------+-------+-----------------------+------+ 
| 1  | Fred | 1970-04-13 | black | lutefisk,fadge,pizza  | 0    | 
| 2  | Mort | 1969-09-30 | white | burrito,curry,eggroll | 3    | 
| 3  | Brit | 1957-12-01 | red   | burrito,curry,pizza   | 1    |   
| 4  | Carl | 1973-11-02 | red   | eggroll,pizza         | 4    | 
| 5  | Sean | 1963-07-04 | blue  | burrito,curry         | 5    | 
+----+------+------------+-------+-----------------------+------+
</code></pre><h4 id="显示按照order-by排序后的第一条记录" tabindex="-1">显示按照ORDER BY排序后的第一条记录 <a class="header-anchor" href="#显示按照order-by排序后的第一条记录" aria-label="Permalink to “显示按照ORDER BY排序后的第一条记录”">​</a></h4><pre><code>mysql&gt; SELECT * FROM profile ORDER BY birth LIMIT 1;

+----+------+------------+-------+----------------+------+ 
| id | name | birth      | color | foods          | cats | 
+----+------+------------+-------+----------------+------+ 
| 9  | Dick | 1952-08-20 | green | lutefisk,fadge | 0    | 
+----+------+------------+-------+----------------+------+
</code></pre><h3 id="_6-oracle-和-mysql该如何选择-为什么" tabindex="-1">6. Oracle 和 MySQL该如何选择，为什么? <a class="header-anchor" href="#_6-oracle-和-mysql该如何选择-为什么" aria-label="Permalink to “6. Oracle 和 MySQL该如何选择，为什么?”">​</a></h3><p><strong>答</strong>：它们都有各自的优点和缺点。考虑到时间因素，我倾向于MySQL。</p><h4 id="选择mysql而不选orcale的原因" tabindex="-1">选择MySQL而不选orcale的原因 <a class="header-anchor" href="#选择mysql而不选orcale的原因" aria-label="Permalink to “选择MySQL而不选orcale的原因”">​</a></h4><ul><li>MySQL开源</li><li>MySQL轻便快捷</li><li>MySQL对命令行和图形界面的支持都很好</li><li>MySQL支持通过Query Browser进行管理</li></ul><h3 id="_7-mysql中如何得到当前日期" tabindex="-1">7. MySQL中如何得到当前日期? <a class="header-anchor" href="#_7-mysql中如何得到当前日期" aria-label="Permalink to “7. MySQL中如何得到当前日期?”">​</a></h3><p><strong>答</strong>：在MySQL中获取当前日期就是如下的SELECT语句这么简单。</p><pre><code>mysql&gt; SELECT CURRENT_DATE();

+----------------+
| CURRENT_DATE() |
+----------------+
| 2014-06-17     |
+----------------+
</code></pre><h3 id="_8-mysql中如何将表导出为xml文件" tabindex="-1">8. MySQL中如何将表导出为XML文件? <a class="header-anchor" href="#_8-mysql中如何将表导出为xml文件" aria-label="Permalink to “8. MySQL中如何将表导出为XML文件?”">​</a></h3><p><strong>答</strong>：我们可以使用&#39;-e&#39;(export)选项来把MySQL表或整个数据库导出到XML文件。当处理大型表的时候我们可能需要手动导出，不过对于小表的话可以直接使用想phpMyAdmin等这样的工具。</p><pre><code>mysql -u USER_NAME -xml -e &#39;SELECT * FROM table_name&#39; &gt; table_name.xml
</code></pre><p>上面的例子中USER_NAME是数据库的用户名，table_name是待导出为xml文件的表名，table_name.xml是存放数据的xml文件</p><h3 id="_9-mysql-pconnect是什么-它和mysql-connect有什么区别" tabindex="-1">9. MySQL_pconnect是什么? 它和MySQL_connect有什么区别? <a class="header-anchor" href="#_9-mysql-pconnect是什么-它和mysql-connect有什么区别" aria-label="Permalink to “9. MySQL_pconnect是什么? 它和MySQL_connect有什么区别?”">​</a></h3><p><strong>答</strong>：MySQL_pconnect()打开一个持久的数据库连接，这意味着数据库不是在每次页面加载的时候被打开一个新连接，因此我们不能使用MySQL_close()来关闭一个持久的连接</p><p>MySQL_pconnect和MySQL_connect最简要的区别是：</p><p>与MySQL_pconnect不同，MySQL_connect在每次页面被加载的时候打开连接，这个连接可以使用MySQL_close()语句来关闭</p><h3 id="_10-当你需要查看一个名为-mysql-的数据库中-user-表中的所有索引时-你会如何做" tabindex="-1">10. 当你需要查看一个名为&#39;mysql&#39;的数据库中&#39;user&#39;表中的所有索引时，你会如何做? <a class="header-anchor" href="#_10-当你需要查看一个名为-mysql-的数据库中-user-表中的所有索引时-你会如何做" aria-label="Permalink to “10. 当你需要查看一个名为&#39;mysql&#39;的数据库中&#39;user&#39;表中的所有索引时，你会如何做?”">​</a></h3><p><strong>答</strong>：下面的命令将会显示出‘user’表中所有的索引</p><pre><code>mysql&gt; show index from user;
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+ 
| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | 
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+ 
| user  |          0 | PRIMARY  |            1 | Host        | A         |        NULL |     NULL | NULL   |      | BTREE      |         |               | 
| user  |          0 | PRIMARY  |            2 | User        | A         |           4 |     NULL | NULL   |      | BTREE      |         |               | 
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+ 
2 rows in set (0.00 sec)
</code></pre><h3 id="_11-什么是csv表" tabindex="-1">11. 什么是CSV表? <a class="header-anchor" href="#_11-什么是csv表" aria-label="Permalink to “11. 什么是CSV表?”">​</a></h3><p><strong>答</strong>：CSV是逗号分隔值（Comma-Separated Values）或也被称为字符分隔值（Character-Separated Values）的缩写。CSV表以纯文本和表格形式来存储数据。</p><p>每一条记录都使用特定的分隔符隔开(如逗号,分号,...)，并且每条记录都有着顺序相同的列。CSV表最广泛地被用来存储用于导入和导出的电话联系人，并能够用来存储任何类型的纯文本数据。</p><p>以上就是这次要讲的全部内容。我还会带来其他你们应该会喜欢的有趣的文章。到那时敬请关注并访问Tecmint，不要忘了在下方的评论栏中留下你们的宝贵意见。</p><hr>`,53)),a("p",null,[e[3]||(e[3]=n("via: ",-1)),r(t,{href:"http://www.tecmint.com/mysql-advance-interview-questions/"},{default:s(()=>[...e[2]||(e[2]=[n("http://www.tecmint.com/mysql-advance-interview-questions/",-1)])]),_:1})]),a("p",null,[e[6]||(e[6]=n("译者：",-1)),r(t,{href:"https://github.com/GOLinux"},{default:s(()=>[...e[4]||(e[4]=[n("GOLinux",-1)])]),_:1}),e[7]||(e[7]=n(" 校对：",-1)),r(t,{href:"https://github.com/reinoir"},{default:s(()=>[...e[5]||(e[5]=[n("ReiNoir",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原创翻译，",-1)),r(t,{href:"http://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[n("Linux中国",-1)])]),_:1}),e[12]||(e[12]=n(" 荣誉推出",-1))])])}const g=o(p,[["render",c]]);export{f as __pageData,g as default};
