import{_ as i,a0 as l,w as d,s as o,I as a,x as n,a1 as p,A as t,ao as r}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"SQL 入门 | LCTT x X-CMD","titleTemplate":false,"description":"SQL 入门 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"SQL 入门 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"SQL 入门 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180221 Getting started with SQL","title":"SQL 入门","tag":"201804","desc":""},"relativePath":"201804/20180221 Getting started with SQL.md","filePath":"[post].md"}'),c={name:"201804/20180221 Getting started with SQL.md"};function u(g,s,T,b,h,E){const e=l("Link");return d(),o("div",null,[s[19]||(s[19]=a("h1",{id:"sql-入门",tabindex:"-1"},[n("SQL 入门 "),a("a",{class:"header-anchor",href:"#sql-入门","aria-label":"Permalink to “SQL 入门”"},"​")],-1)),s[20]||(s[20]=a("blockquote",null,[a("p",null,"使用 SQL 构建一个关系数据库比你想的更容易。")],-1)),s[21]||(s[21]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/brain_data.png?itok=RH6NA32X",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("使用 SQL 构建数据库比大多数人想象得要简单。实际上，你甚至不需要成为一个有经验的程序员就可以使用 SQL 创建数据库。在本文中，我将解释如何使用 MySQL 5.6 来创建简单的关系型数据库管理系统（RDMS）。在开始之前，我想顺便感谢一下 ",-1)),p(e,{href:"http://sqlfiddle.com"},{default:t(()=>[...s[0]||(s[0]=[n("SQL Fiddle",-1)])]),_:1}),s[2]||(s[2]=n("，这是我用来运行脚本的工具。它提供了一个用于测试简单脚本的有用的沙箱。",-1))]),s[22]||(s[22]=r(`<p>在本教程中，我将构建一个使用如下实体关系图（ERD）中显示的简单架构的数据库。数据库列出了学生和正在学习的课程。为了保持简单，我使用了两个实体（即表），只有一种关系和依赖。这两个实体称为 <code>dbo_students</code> 和 <code>dbo_courses</code>。</p><p><img src="https://opensource.com/sites/default/files/u128651/erd.png" alt=""></p><p>数据库的多样性是一对多的，因为每门课程可以包含很多学生，但每个学生只能学习一门课程。</p><p>关于术语的快速说明：</p><ol><li>一张表称为一个实体。</li><li>一个字段称为一个属性。</li><li>一条记录称为一个元组。</li><li>用于构建数据库的脚本称为架构。</li></ol><h3 id="构建架构" tabindex="-1">构建架构 <a class="header-anchor" href="#构建架构" aria-label="Permalink to “构建架构”">​</a></h3><p>要构建数据库，使用 <code>CREATE TABLE &lt;表名&gt;</code> 命令，然后定义每个字段的名称和数据类型。数据库使用 <code>VARCHAR(n)</code> （字符串）和 <code>INT(n)</code> （整数），其中 <code>n</code> 表示可以存储的值的长度。例如 <code>INT(2)</code> 可以是 <code>01</code>。</p><p>这是用于创建两个表的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE dbo_students</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>  student_id INT(2) AUTO_INCREMENT NOT NULL,</span></span>
<span class="line"><span>  student_name VARCHAR(50),</span></span>
<span class="line"><span>  course_studied INT(2),</span></span>
<span class="line"><span>  PRIMARY KEY (student_id)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE dbo_courses</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>  course_id INT(2) AUTO_INCREMENT NOT NULL,</span></span>
<span class="line"><span>  course_name VARCHAR(30),</span></span>
<span class="line"><span>  PRIMARY KEY (course_id)</span></span>
<span class="line"><span>);</span></span></code></pre></div><p><code>NOT NULL</code> 意味着字段不能为空，<code>AUTO_INCREMENT</code> 意味着当一个新的元组被添加时，ID 号将自动生成，是对先前存储的 ID 号加 1，以强化各实体之间的完整参照性。 <code>PRIMARY KEY</code> 是每个表的惟一标识符属性。这意味着每个元组都有自己的不同的标识。</p><h3 id="关系作为一种约束" tabindex="-1">关系作为一种约束 <a class="header-anchor" href="#关系作为一种约束" aria-label="Permalink to “关系作为一种约束”">​</a></h3><p>就目前来看，这两张表格是独立存在的，没有任何联系或关系。要连接它们，必须标识一个外键。在 <code>dbo_students</code> 中，外键是 <code>course_studied</code>，其来源在 <code>dbo_courses</code> 中，意味着该字段被引用。SQL 中的特定命令为 <code>CONSTRAINT</code>，并且将使用另一个名为 <code>ALTER TABLE</code> 的命令添加这种关系，这样即使在架构构建完毕后，也可以编辑表。</p><p>以下代码将关系添加到数据库构造脚本中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ALTER TABLE dbo_students</span></span>
<span class="line"><span>ADD CONSTRAINT FK_course_studied</span></span>
<span class="line"><span>FOREIGN KEY (course_studied) REFERENCES dbo_courses(course_id);</span></span></code></pre></div><p>使用 <code>CONSTRAINT</code> 命令实际上并不是必要的，但这是一个好习惯，因为它意味着约束可以被命名并且使维护更容易。现在数据库已经完成了，是时候添加一些数据了。</p><h3 id="将数据添加到数据库" tabindex="-1">将数据添加到数据库 <a class="header-anchor" href="#将数据添加到数据库" aria-label="Permalink to “将数据添加到数据库”">​</a></h3><p><code>INSERT INTO &lt;表名&gt;</code> 是用于直接选择要添加哪些属性（即字段）数据的命令。首先声明实体名称，然后声明属性，下边是添加到实体的数据，从而创建一个元组。如果指定了 <code>NOT NULL</code>，这表示该属性不能留空。以下代码将展示如何向表中添加记录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
<span class="line"><span>VALUES(001,&#39;Software Engineering&#39;);</span></span>
<span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
<span class="line"><span>VALUES(002,&#39;Computer Science&#39;);</span></span>
<span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
<span class="line"><span>VALUES(003,&#39;Computing&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(001,&#39;student1&#39;,001);</span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(002,&#39;student2&#39;,002);</span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(003,&#39;student3&#39;,002);</span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(004,&#39;student4&#39;,003);</span></span></code></pre></div><p>现在数据库架构已经完成并添加了数据，现在是时候在数据库上运行查询了。</p><h3 id="查询" tabindex="-1">查询 <a class="header-anchor" href="#查询" aria-label="Permalink to “查询”">​</a></h3><p>查询遵循使用以下命令的集合结构：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT &lt;attributes&gt;</span></span>
<span class="line"><span>FROM &lt;entity&gt;</span></span>
<span class="line"><span>WHERE &lt;condition&gt;</span></span></code></pre></div><p>要显示 <code>dbo_courses</code> 实体内的所有记录并显示课程代码和课程名称，请使用 <code>*</code> 。 这是一个通配符，它消除了键入所有属性名称的需要。（在生产数据库中不建议使用它。）此处查询的代码是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM dbo_courses</span></span></code></pre></div><p>此处查询的输出显示表中的所有元组，因此可显示所有可用课程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>| course_id |          course_name |</span></span>
<span class="line"><span>|-----------|----------------------|</span></span>
<span class="line"><span>|         1 | Software Engineering |</span></span>
<span class="line"><span>|         2 |     Computer Science |</span></span>
<span class="line"><span>|         3 |            Computing |</span></span></code></pre></div><p>在后面的文章中，我将使用三种类型的连接之一来解释更复杂的查询：内连接、外连接和交叉连接。</p><p>这是完整的脚本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE dbo_students</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>  student_id INT(2) AUTO_INCREMENT NOT NULL,</span></span>
<span class="line"><span>  student_name VARCHAR(50),</span></span>
<span class="line"><span>  course_studied INT(2),</span></span>
<span class="line"><span>  PRIMARY KEY (student_id)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CREATE TABLE dbo_courses</span></span>
<span class="line"><span>(</span></span>
<span class="line"><span>  course_id INT(2) AUTO_INCREMENT NOT NULL,</span></span>
<span class="line"><span>  course_name VARCHAR(30),</span></span>
<span class="line"><span>  PRIMARY KEY (course_id)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ALTER TABLE dbo_students</span></span>
<span class="line"><span>ADD CONSTRAINT FK_course_studied</span></span>
<span class="line"><span>FOREIGN KEY (course_studied) REFERENCES dbo_courses(course_id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
<span class="line"><span>VALUES(001,&#39;Software Engineering&#39;);</span></span>
<span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
<span class="line"><span>VALUES(002,&#39;Computer Science&#39;);</span></span>
<span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
<span class="line"><span>VALUES(003,&#39;Computing&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(001,&#39;student1&#39;,001);</span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(002,&#39;student2&#39;,002);</span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(003,&#39;student3&#39;,002);</span></span>
<span class="line"><span>INSERT INTO dbo_students(student_id,student_name,course_studied)</span></span>
<span class="line"><span>VALUES(004,&#39;student4&#39;,003);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM dbo_courses</span></span></code></pre></div><h3 id="学习更多" tabindex="-1">学习更多 <a class="header-anchor" href="#学习更多" aria-label="Permalink to “学习更多”">​</a></h3><p>SQL 并不困难；我认为它比编程简单，并且该语言对于不同的数据库系统是通用的。 请注意，实体关系图中 <code>dbo.&lt;实体&gt;</code> （LCTT 译注：文章中使用的是 <code>dbo_&lt;实体&gt;</code>）不是必需的实体命名约定；我之所以使用，仅仅是因为它是 Microsoft SQL Server 中的标准。</p>`,31)),a("p",null,[s[4]||(s[4]=n("如果你想了解更多，在网络上这方面的最佳指南是 ",-1)),p(e,{href:"https://www.w3schools.com/sql/default.asp"},{default:t(()=>[...s[3]||(s[3]=[n("W3Schools.com",-1)])]),_:1}),s[5]||(s[5]=n(" 中对所有数据库平台的 SQL 综合指南。",-1))]),s[23]||(s[23]=a("p",null,"请随意使用我的数据库。另外，如果你有任何建议或疑问，请在评论中回复。",-1)),s[24]||(s[24]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/18/2/getting-started-sql"},{default:t(()=>[...s[6]||(s[6]=[n("https://opensource.com/article/18/2/getting-started-sql",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/aaroncocker"},{default:t(()=>[...s[8]||(s[8]=[n("Aaron Cocker",-1)])]),_:1}),s[12]||(s[12]=n(" 译者：",-1)),p(e,{href:"https://github.com/MjSeven"},{default:t(()=>[...s[9]||(s[9]=[n("MjSeven",-1)])]),_:1}),s[13]||(s[13]=n(" 校对：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原创编译，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...s[15]||(s[15]=[n("Linux中国",-1)])]),_:1}),s[18]||(s[18]=n(" 荣誉推出",-1))])])}const S=i(c,[["render",u]]);export{k as __pageData,S as default};
