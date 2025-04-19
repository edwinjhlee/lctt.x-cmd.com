import{_ as t,W as o,s as d,u as c,I as n,ah as i,w as s,Z as e,A as l}from"./chunks/framework.CW1q-D1p.js";import"./chunks/theme.DKZ8RGYq.js";const y=JSON.parse('{"title":"备忘单：提升你的 MariaDB 和 MySQL 数据库技能 | LCTT x X-CMD","titleTemplate":false,"description":"备忘单：提升你的 MariaDB 和 MySQL 数据库技能 | LCTT (202011) | X-CMD","frontmatter":{"pageClass":"x-blog","head":[["meta",{"name":"og:title","content":"备忘单：提升你的 MariaDB 和 MySQL 数据库技能 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"备忘单：提升你的 MariaDB 和 MySQL 数据库技能 | LCTT (202011) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202011/20201029 Improve your database knowledge with this MariaDB and MySQL cheat sheet","title":"备忘单：提升你的 MariaDB 和 MySQL 数据库技能","tag":"202011"},"relativePath":"202011/20201029 Improve your database knowledge with this MariaDB and MySQL cheat sheet.md","filePath":"[post].md"}'),r={name:"202011/20201029 Improve your database knowledge with this MariaDB and MySQL cheat sheet.md"};function u(h,a,m,g,b,v){const p=o("Link");return c(),d("div",null,[a[40]||(a[40]=n("h1",{id:"备忘单-提升你的-mariadb-和-mysql-数据库技能",tabindex:"-1"},[s("备忘单：提升你的 MariaDB 和 MySQL 数据库技能 "),n("a",{class:"header-anchor",href:"#备忘单-提升你的-mariadb-和-mysql-数据库技能","aria-label":"Permalink to 备忘单：提升你的 MariaDB 和 MySQL 数据库技能"},"​")],-1)),a[41]||(a[41]=n("blockquote",null,[n("p",null,"阅读本文并下载我们的免费备忘单，去使用开源的数据库吧。")],-1)),a[42]||(a[42]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202011/14/065421hq1qocmk3rf4npq1.jpg",alt:""})],-1)),n("p",null,[a[1]||(a[1]=s("当你写一个程序或配置一个服务时，你最终都要持久化存储信息。有时候，你只需要一个 INI 或者 ")),e(p,{href:"https://www.redhat.com/sysadmin/yaml-tips"},{default:l(()=>a[0]||(a[0]=[s("YAML")])),_:1}),a[2]||(a[2]=s(" 配置文件就够了。而有时候，一个自定义格式的 XML 或者 JSON 或其他类似的文件会更好。"))]),n("p",null,[a[5]||(a[5]=s("但也有时候你需要校验输入、快速查询信息、关联数据、通常还要熟练地处理你的用户的请求。这就是设计数据库的目的，而 ")),e(p,{href:"https://mariadb.org/"},{default:l(()=>a[3]||(a[3]=[s("MariaDB")])),_:1}),a[6]||(a[6]=s("（由 ")),e(p,{href:"https://www.mysql.com/"},{default:l(()=>a[4]||(a[4]=[s("MySQL")])),_:1}),a[7]||(a[7]=s(" 的原始开发人员开发的一个分支） 是一个极佳的选项。在本文中我使用的是 MariaDB，但这些信息同样适用于 MySQL。"))]),n("p",null,[a[9]||(a[9]=s("通过编程语言与数据库进行交互是很普遍的。正因如此，出现了大量 Java、Python、Lua、PHP、Ruby、C++ 和其他语言的 ")),e(p,{href:"https://en.wikipedia.org/wiki/SQL"},{default:l(()=>a[8]||(a[8]=[s("SQL")])),_:1}),a[10]||(a[10]=s(" 库。然而，在使用这些库之前，理解数据库引擎做了什么以及为什么选择数据库是重要的对我们会很有帮助。本文介绍 MariaDB 和 ")),a[11]||(a[11]=n("code",null,"mysql",-1)),a[12]||(a[12]=s(" 命令来帮助你熟悉数据库处理数据的基本原理。"))]),n("p",null,[a[15]||(a[15]=s("如果你还没有安装 MariaDB，请查阅我的文章 ")),e(p,{href:"https://opensource.com/article/20/10/install-mariadb-and-mysql-linux"},{default:l(()=>a[13]||(a[13]=[s("在 Linux 上安装 MariaDB")])),_:1}),a[16]||(a[16]=s("。如果你没有使用 Linux，请参照 MariaDB ")),e(p,{href:"https://mariadb.org/download"},{default:l(()=>a[14]||(a[14]=[s("下载页面")])),_:1}),a[17]||(a[17]=s("提供的指导方法。"))]),a[43]||(a[43]=i(`<h3 id="与-mariadb-交互" tabindex="-1">与 MariaDB 交互 <a class="header-anchor" href="#与-mariadb-交互" aria-label="Permalink to 与 MariaDB 交互">​</a></h3><p>你可以使用 <code>mysql</code> 命令与 MariaDB 进行交互。首先使用子命令 <code>ping</code> 确认你的服务是运行着的，在提示后输入密码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ mysqladmin -u root -p ping</span></span>
<span class="line"><span>Enter password:</span></span>
<span class="line"><span>mysqld is alive</span></span></code></pre></div><p>为了易于读者理解，打开一个交互式的 MariaDB 会话：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ mysql -u root -p</span></span>
<span class="line"><span>Enter password:</span></span>
<span class="line"><span>Welcome to the MariaDB monitor.</span></span>
<span class="line"><span>Commands end with ; or \\g.</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>Type &#39;help;&#39; or &#39;\\h&#39; for help.</span></span>
<span class="line"><span>Type &#39;\\c&#39; to clear the current input statement.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MariaDB [(none)]&gt;</span></span></code></pre></div><p>你现在是在一个 MariaDB 子 shell 中，提示符是 MariaDB 提示符。普通的 Bash 命令在这里不能使用，只能用 MariaDB 命令。输入 <code>help</code> （或 <code>?</code>）查看命令列表。这些是你的 MariaDB shell 的管理命令，使用它们可以定制你的 shell，但它们不属于 SQL 语言。</p><h3 id="学习-sql-基本知识" tabindex="-1">学习 SQL 基本知识 <a class="header-anchor" href="#学习-sql-基本知识" aria-label="Permalink to 学习 SQL 基本知识">​</a></h3>`,7)),n("p",null,[e(p,{href:"https://publications.opengroup.org/c449"},{default:l(()=>a[18]||(a[18]=[s("结构化查询语言")])),_:1}),a[19]||(a[19]=s("是基于它们的能力定义的：一种通过有规则且一致的语法来查询数据库中的内容以得到有用的结果的方法。SQL 看起来像是普通的英文语句，有一点点生硬。例如，如果你登入数据库服务器，想查看有哪些库，输入 ")),a[20]||(a[20]=n("code",null,"SHOW DATABASES;",-1)),a[21]||(a[21]=s(" 并回车就能看到结果。"))]),a[44]||(a[44]=i(`<p>SQL 命令以分号作为结尾。如果你忘记输入分号，MariaDB 会认为你是想在下一行继续输入你的查询命令，在下一行你可以继续输入命令也可以输入分号结束命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MariaDB [(NONE)]&gt; SHOW DATABASES;</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| DATABASE           |</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| information_schema |</span></span>
<span class="line"><span>| mysql              |</span></span>
<span class="line"><span>| performance_schema |</span></span>
<span class="line"><span>| test               |</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>4 ROWS IN SET (0.000 sec)</span></span></code></pre></div><p>上面的例子显示当前有四个数据库：<code>information_schema</code>、<code>mysql</code>、<code>performance_schema</code> 和 <code>test</code>。你必须指定 MariaDB 使用哪个库，才能对该库使用查询语句。指定数据库的命令是 <code>use</code>。当你选择了一个库后，MariaDB 提示框会切换为选择的库。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MariaDB [(NONE)]&gt; USE test;</span></span>
<span class="line"><span>MariaDB [(test)]&gt;</span></span></code></pre></div><h4 id="显示数据库的表" tabindex="-1">显示数据库的表 <a class="header-anchor" href="#显示数据库的表" aria-label="Permalink to 显示数据库的表">​</a></h4><p>数据库里有<em>表</em>，与电子表格类似：有一系列的行（在数据库中称为<em>记录</em>）和列。一个行和一个列唯一确定一个<em>字段</em>。</p><p>查看一个数据库中可用的表（可以理解为多表单电子表格中的一页），使用 SQL 关键字 <code>SHOW</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MariaDB [(test)]&gt; SHOW TABLES;</span></span>
<span class="line"><span>empty SET</span></span></code></pre></div><p><code>test</code> 数据库是空的，所以使用 <code>use</code> 命令切换到 <code>mysql</code> 数据库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MariaDB [(test)]&gt; USE mysql;</span></span>
<span class="line"><span>MariaDB [(mysql)]&gt; SHOW TABLES;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>| Tables_in_mysql           |</span></span>
<span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>| column_stats              |</span></span>
<span class="line"><span>| columns_priv              |</span></span>
<span class="line"><span>| db                        |</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>| time_zone_transition_type |</span></span>
<span class="line"><span>| transaction_registry      |</span></span>
<span class="line"><span>| USER                      |</span></span>
<span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>31 ROWS IN SET (0.000 sec)</span></span></code></pre></div><p>这个数据库中有很多表！<code>mysql</code> 数据库是这个 MariaDB 实例的系统管理数据库。它里面包含重要数据，比如用来管理数据库权限的用户结构。这个数据库很重要，你不需要经常直接与它交互，但是使用 SQL 脚本来操作它却很常见。当你学习 MariaDB 时理解 <code>mysql</code> 数据库很有用，因为它有助于说明一些基本的 SQL 命令。</p><h4 id="检查一个表" tabindex="-1">检查一个表 <a class="header-anchor" href="#检查一个表" aria-label="Permalink to 检查一个表">​</a></h4><p>这个实例的 <code>mysql</code> 数据库的最后一个表名为 <code>USER</code>。这个表包含了可以访问这个数据库的用户。当前里面只有一个 root 用户，但是你可以添加不同权限的用户，赋予它们查看、更新或创建数据的权限。你可以查看一个表的列首来了解一个 MariaDB 用户的所有属性：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; SHOW COLUMNS IN USER;</span></span>
<span class="line"><span>MariaDB [mysql]&gt; SHOW COLUMNS IN USER;</span></span>
<span class="line"><span>+-------------+---------------+------+-----+----------+</span></span>
<span class="line"><span>| FIELD       | TYPE          | NULL | KEY | DEFAULT  |</span></span>
<span class="line"><span>+-------------+---------------+------+-----+----------+</span></span>
<span class="line"><span>| Host        | CHAR(60)      | NO   | PRI |          |</span></span>
<span class="line"><span>| USER        | CHAR(80)      | NO   | PRI |          |</span></span>
<span class="line"><span>| Password    | CHAR(41)      | NO   |     |          |</span></span>
<span class="line"><span>| Select_priv | enum(&#39;N&#39;,&#39;Y&#39;) | NO   |     | N        |</span></span>
<span class="line"><span>| Insert_priv | enum(&#39;N&#39;,&#39;Y&#39;) | NO   |     | N        |</span></span>
<span class="line"><span>| Update_priv | enum(&#39;N&#39;,&#39;Y&#39;) | NO   |     | N        |</span></span>
<span class="line"><span>| Delete_priv | enum(&#39;N&#39;,&#39;Y&#39;) | NO   |     | N        |</span></span>
<span class="line"><span>| Create_priv | enum(&#39;N&#39;,&#39;Y&#39;) | NO   |     | N        |</span></span>
<span class="line"><span>| Drop_priv   | enum(&#39;N&#39;,&#39;Y&#39;) | NO   |     | N        |</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>47 ROWS IN SET (0.001 sec)</span></span></code></pre></div><h4 id="创建一个新的用户" tabindex="-1">创建一个新的用户 <a class="header-anchor" href="#创建一个新的用户" aria-label="Permalink to 创建一个新的用户">​</a></h4><p>不论你是否需要一个普通的账号来管理数据库或者为计算机配置数据库（例如安装 WordPress、Drupal 或 Joomla时），在 MariaDB 中多建一个用户账号是很普遍的。你可以通过向 <code>mysql</code> 数据库的 <code>USER</code> 表中添加一个用户或使用 SQL 关键字 <code>CREATE</code> 来提示 MariaDB 创建一个 MariaDB 用户。使用 <code>CREATE</code> 来创建新用户会默认执行一些有用的方法，因此你不需要手动生成所有的信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; CREATE USER &#39;tux&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;really_secure_password&#39;;</span></span></code></pre></div><h4 id="查看表的字段" tabindex="-1">查看表的字段 <a class="header-anchor" href="#查看表的字段" aria-label="Permalink to 查看表的字段">​</a></h4><p>你可以使用 <code>SELECT</code> 关键字来查看数据库表的字段和值。这本例中，你创建了一个名为 <code>tux</code> 的用户，因此查询 <code>USER</code> 表中的列：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; SELECT USER,host FROM USER;</span></span>
<span class="line"><span>+------+------------+</span></span>
<span class="line"><span>| USER | host       |</span></span>
<span class="line"><span>+------+------------+</span></span>
<span class="line"><span>| root | localhost  |</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>| tux  | localhost  |</span></span>
<span class="line"><span>+------+------------+</span></span>
<span class="line"><span>7 ROWS IN SET (0.000 sec)</span></span></code></pre></div><h4 id="为一个用户赋予权限" tabindex="-1">为一个用户赋予权限 <a class="header-anchor" href="#为一个用户赋予权限" aria-label="Permalink to 为一个用户赋予权限">​</a></h4><p>通过查看 <code>USER</code> 表列出的信息，你可以看到用户的状态。例如，新用户 <code>tux</code> 对这个数据库没有任何权限。使用 <code>WHERE</code> 语句你可以只查 <code>tux</code> 那一条记录。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; SELECT USER,select_priv,insert_priv,update_priv FROM USER WHERE USER=&#39;tux&#39;;</span></span>
<span class="line"><span>+------+-------------+-------------+-------------+</span></span>
<span class="line"><span>| USER | select_priv | insert_priv | update_priv |</span></span>
<span class="line"><span>+------+-------------+-------------+-------------+</span></span>
<span class="line"><span>| tux  | N           | N           | N           |</span></span>
<span class="line"><span>+------+-------------+-------------+-------------+</span></span></code></pre></div><p>使用 <code>GRANT</code> 命令修改用户的权限：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; GRANT SELECT ON *.* TO &#39;tux&#39;@&#39;localhost&#39;;</span></span>
<span class="line"><span>&gt; FLUSH PRIVILEGES;</span></span></code></pre></div><p>验证你的修改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; SELECT USER,select_priv,insert_priv,update_priv FROM USER WHERE USER=&#39;tux&#39;;</span></span>
<span class="line"><span>+------+-------------+-------------+-------------+</span></span>
<span class="line"><span>| USER | select_priv | insert_priv | update_priv |</span></span>
<span class="line"><span>+------+-------------+-------------+-------------+</span></span>
<span class="line"><span>| tux  | Y           | N           | N           |</span></span>
<span class="line"><span>+------+-------------+-------------+-------------+</span></span></code></pre></div><p><code>tux</code> 用户现在有了从所有表中查询记录的权限。</p><h3 id="创建自定义的数据库" tabindex="-1">创建自定义的数据库 <a class="header-anchor" href="#创建自定义的数据库" aria-label="Permalink to 创建自定义的数据库">​</a></h3><p>到目前为止，你一直在与默认的数据库进行交互。除了用户管理，大部分人很少会与默认的数据库进行交互。通常，你会用自定义的数据来填充创建的数据库。</p><h4 id="创建一个-mariadb-数据库" tabindex="-1">创建一个 MariaDB 数据库 <a class="header-anchor" href="#创建一个-mariadb-数据库" aria-label="Permalink to 创建一个 MariaDB 数据库">​</a></h4><p>你可能已经可以自己在 MariaDB 中创建新数据库了。创建数据库跟新建用户差不多。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; CREATE DATABASE example;</span></span>
<span class="line"><span>Query OK, 1 ROW affected (0.000 sec)</span></span>
<span class="line"><span>&gt; SHOW DATABASES;</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| DATABASE           |</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| example            |</span></span>
<span class="line"><span>[...]</span></span></code></pre></div><p>使用 <code>use</code> 命令来把这个新建的数据库作为当前使用的库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; USE example;</span></span></code></pre></div><h4 id="创建一个表" tabindex="-1">创建一个表 <a class="header-anchor" href="#创建一个表" aria-label="Permalink to 创建一个表">​</a></h4><p>创建表比创建数据库要复杂，因为你必须定义列首。MariaDB 提供了很多方便的函数，可以用于创建列，引入数据类型定义，自增选项，对空值的约束，自动时间戳等等。</p><p>下面是用来描述一系列用户的一个简单的表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; CREATE TABLE IF NOT EXISTS member (</span></span>
<span class="line"><span>    -&gt; id INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    -&gt; name VARCHAR(128) NOT NULL,</span></span>
<span class="line"><span>    -&gt; startdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP);</span></span>
<span class="line"><span>Query OK, 0 ROWS affected (0.030 sec)</span></span></code></pre></div><p>这个表通过使用一个自动递增的方法来唯一标识每一行。表示用户名字的字段不能为空（或 <code>null</code>），每一行被创建时会自动生成时间戳。</p><p>使用 SQL 关键字 <code>INSERT</code> 向这个表填充一些示例数据：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; INSERT INTO member (name) VALUES (&#39;Alice&#39;);</span></span>
<span class="line"><span>Query OK, 1 ROW affected (0.011 sec)</span></span>
<span class="line"><span>&gt; INSERT INTO member (name) VALUES (&#39;Bob&#39;);</span></span>
<span class="line"><span>Query OK, 1 ROW affected (0.011 sec)</span></span>
<span class="line"><span>&gt; INSERT INTO member (name) VALUES (&#39;Carol&#39;);</span></span>
<span class="line"><span>Query OK, 1 ROW affected (0.011 sec)</span></span>
<span class="line"><span>&gt; INSERT INTO member (name) VALUES (&#39;David&#39;);</span></span>
<span class="line"><span>Query OK, 1 ROW affected (0.011 sec)</span></span></code></pre></div><p>验证一下表里的数据：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; SELECT * FROM member;</span></span>
<span class="line"><span>+----+-------+---------------------+</span></span>
<span class="line"><span>| id | name  | startdate           |</span></span>
<span class="line"><span>+----+-------+---------------------+</span></span>
<span class="line"><span>|  1 | Alice | 2020-10-03 15:25:06 |</span></span>
<span class="line"><span>|  2 | Bob   | 2020-10-03 15:26:43 |</span></span>
<span class="line"><span>|  3 | Carol | 2020-10-03 15:26:46 |</span></span>
<span class="line"><span>|  4 | David | 2020-10-03 15:26:51 |</span></span>
<span class="line"><span>+----+-------+---------------------+</span></span>
<span class="line"><span>4 ROWS IN SET (0.000 sec)</span></span></code></pre></div><h4 id="同时增加多行数据" tabindex="-1">同时增加多行数据 <a class="header-anchor" href="#同时增加多行数据" aria-label="Permalink to 同时增加多行数据">​</a></h4><p>再创建一个表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; CREATE TABLE IF NOT EXISTS linux (</span></span>
<span class="line"><span>    -&gt; id INT AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>    -&gt; distro VARCHAR(128) NOT NULL);</span></span>
<span class="line"><span>Query OK, 0 ROWS affected (0.030 sec)</span></span></code></pre></div><p>填充一些示例数据，这次使用 <code>VALUES</code> 快捷方式，这样你可以一次添加多行数据。<code>VALUES</code> 关键字需要一个用括号包围的列表作为参数，也可以用逗号分隔的多个列表作为参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; INSERT INTO linux (distro)</span></span>
<span class="line"><span> -&gt; VALUES (&#39;Slackware&#39;), (&#39;RHEL&#39;),(&#39;Fedora&#39;),(&#39;Debian&#39;);</span></span>
<span class="line"><span>Query OK, 4 ROWS affected (0.011 sec)</span></span>
<span class="line"><span>Records: 4  Duplicates: 0  Warnings: 0</span></span>
<span class="line"><span>&gt; SELECT * FROM linux;</span></span>
<span class="line"><span>+----+-----------+</span></span>
<span class="line"><span>| id | distro    |</span></span>
<span class="line"><span>+----+-----------+</span></span>
<span class="line"><span>|  1 | Slackware |</span></span>
<span class="line"><span>|  2 | RHEL      |</span></span>
<span class="line"><span>|  3 | Fedora    |</span></span>
<span class="line"><span>|  4 | Debian    |</span></span>
<span class="line"><span>+----+-----------+</span></span></code></pre></div><h3 id="关联多个表" tabindex="-1">关联多个表 <a class="header-anchor" href="#关联多个表" aria-label="Permalink to 关联多个表">​</a></h3><p>现在你有两个表，之间没有关联。两个表的数据是独立的，但是你可能需要表一中的一个值来识别表二的记录。</p><p>你可以在表一中新增一列对应表二中的值。因为两个表都有唯一的标识符（自动递增的 <code>id</code> 字段），关联的它们的最简单的方式是，使用表一中的 <code>id</code> 字段作为表二的查询条件。</p><p>在表一中创建一列用来表示表二中的一个值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; ALTER TABLE member ADD COLUMN (os INT);</span></span>
<span class="line"><span>Query OK, 0 ROWS affected (0.012 sec)</span></span>
<span class="line"><span>Records: 0  Duplicates: 0  Warnings: 0</span></span>
<span class="line"><span>&gt; DESCRIBE member;</span></span>
<span class="line"><span>DESCRIBE member;</span></span>
<span class="line"><span>+-----------+--------------+------+-----+---------+------+</span></span>
<span class="line"><span>| FIELD     | TYPE         | NULL | KEY | DEFAULT | Extra|</span></span>
<span class="line"><span>+-----------+--------------+------+-----+---------+------+</span></span>
<span class="line"><span>| id        | INT(11)      | NO   | PRI | NULL    | auto_|</span></span>
<span class="line"><span>| name      | VARCHAR(128) | NO   |     | NULL    |      |</span></span>
<span class="line"><span>| startdate | TIMESTAMP    | NO   |     | cur[...]|      |</span></span>
<span class="line"><span>| os        | INT(11)      | YES  |     | NULL    |      |</span></span>
<span class="line"><span>+-----------+--------------+------+-----+---------+------+</span></span></code></pre></div><p>把 <code>linux</code> 表中的唯一 ID 分配给每个成员。因为记录已经存在，使用 <code>UPDATE</code> 关键字而不是 <code>INSERT</code>。尤其是当你想查询某行然后再更新某列值时。语法上，表达方式有点倒装，先更新后查询：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; UPDATE member SET os=1 WHERE name=&#39;Alice&#39;;</span></span>
<span class="line"><span>Query OK, 1 ROW affected (0.007 sec)</span></span>
<span class="line"><span>ROWS matched: 1  Changed: 1  Warnings: 0</span></span></code></pre></div><p>要填充数据，请对其他名字重复执行这个过程。为了数据的多样性，在四行记录中分配三个不同的值。</p><h4 id="连接表" tabindex="-1">连接表 <a class="header-anchor" href="#连接表" aria-label="Permalink to 连接表">​</a></h4><p>现在这两个表彼此有了关联，你可以使用 SQL 来展示关联的数据。数据库中有很多种连接方式，你可以尽请尝试。下面的例子是关联 <code>member</code> 表中 <code>os</code> 字段和 <code>linux</code> 表中 <code>id</code> 字段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT * FROM member JOIN linux ON member.os=linux.id;</span></span>
<span class="line"><span>+----+-------+---------------------+------+----+-----------+</span></span>
<span class="line"><span>| id | name  | startdate           | os   | id | distro    |</span></span>
<span class="line"><span>+----+-------+---------------------+------+----+-----------+</span></span>
<span class="line"><span>|  1 | Alice | 2020-10-03 15:25:06 |    1 |  1 | Slackware |</span></span>
<span class="line"><span>|  2 | Bob   | 2020-10-03 15:26:43 |    3 |  3 | Fedora    |</span></span>
<span class="line"><span>|  4 | David | 2020-10-03 15:26:51 |    3 |  3 | Fedora    |</span></span>
<span class="line"><span>|  3 | Carol | 2020-10-03 15:26:46 |    4 |  4 | Debian    |</span></span>
<span class="line"><span>+----+-------+---------------------+------+----+-----------+</span></span>
<span class="line"><span>4 ROWS IN SET (0.000 sec)</span></span></code></pre></div><p>连接 <code>os</code> 和 <code>id</code> 字段。</p><p>在图形化的应用中，你可以想象 <code>os</code> 字段可以在下拉菜单中设置，值的来源是 <code>linux</code> 表中的 <code>distro</code> 字段。通过使用多个表中独立却有关联的数据，你可以保证数据的一致性和有效性，使用 SQL 你可以动态地关联它们。</p><h3 id="下载-mariadb-和-mysql-备忘单" tabindex="-1">下载 MariaDB 和 MySQL 备忘单 <a class="header-anchor" href="#下载-mariadb-和-mysql-备忘单" aria-label="Permalink to 下载 MariaDB 和 MySQL 备忘单">​</a></h3>`,63)),n("p",null,[a[23]||(a[23]=s("MariaDB 是企业级的数据库。它是健壮、强大、高效的数据库引擎。学习它是你向管理 web 应用和编写语言库迈出的伟大的一步。你可以")),e(p,{href:"https://opensource.com/downloads/mariadb-mysql-cheat-sheet"},{default:l(()=>a[22]||(a[22]=[s("下载 MariaDB 和 MySQL 备忘单")])),_:1}),a[24]||(a[24]=s("，在你使用 MariaDB 时可以快速参考。"))]),a[45]||(a[45]=n("hr",null,null,-1)),n("p",null,[a[26]||(a[26]=s("via: ")),e(p,{href:"https://opensource.com/article/20/10/mariadb-mysql-cheat-sheet"},{default:l(()=>a[25]||(a[25]=[s("https://opensource.com/article/20/10/mariadb-mysql-cheat-sheet")])),_:1})]),n("p",null,[a[31]||(a[31]=s("作者：")),e(p,{href:"https://opensource.com/users/seth"},{default:l(()=>a[27]||(a[27]=[s("Seth Kenlon")])),_:1}),a[32]||(a[32]=s(" 选题：")),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>a[28]||(a[28]=[s("lujun9972")])),_:1}),a[33]||(a[33]=s(" 译者：")),e(p,{href:"https://github.com/lxbwolf"},{default:l(()=>a[29]||(a[29]=[s("lxbwolf")])),_:1}),a[34]||(a[34]=s(" 校对：")),e(p,{href:"https://github.com/wxy"},{default:l(()=>a[30]||(a[30]=[s("wxy")])),_:1})]),n("p",null,[a[37]||(a[37]=s("本文由 ")),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>a[35]||(a[35]=[s("LCTT")])),_:1}),a[38]||(a[38]=s(" 原创编译，")),e(p,{href:"https://linux.cn/"},{default:l(()=>a[36]||(a[36]=[s("Linux中国")])),_:1}),a[39]||(a[39]=s(" 荣誉推出"))])])}const T=t(r,[["render",u]]);export{y as __pageData,T as default};
