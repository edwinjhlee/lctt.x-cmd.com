import{_ as i,a0 as l,w as d,s as o,I as a,x as n,a1 as p,A as t,ao as r}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"SQL 入門 | LCTT x X-CMD","titleTemplate":false,"description":"SQL 入門 | LCTT (201804) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"SQL 入門 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"SQL 入門 | LCTT (201804) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201804/20180221 Getting started with SQL","title":"SQL 入門","tag":"201804","desc":""},"relativePath":"201804/20180221 Getting started with SQL.md","filePath":"[post].md"}'),c={name:"201804/20180221 Getting started with SQL.md"};function u(g,s,T,b,h,E){const e=l("Link");return d(),o("div",null,[s[19]||(s[19]=a("h1",{id:"sql-入門",tabindex:"-1"},[n("SQL 入門 "),a("a",{class:"header-anchor",href:"#sql-入門","aria-label":"Permalink to “SQL 入門”"},"​")],-1)),s[20]||(s[20]=a("blockquote",null,[a("p",null,"使用 SQL 構建一個關係資料庫比你想的更容易。")],-1)),s[21]||(s[21]=a("p",null,[a("img",{src:"https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/brain_data.png?itok=RH6NA32X",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("使用 SQL 構建資料庫比大多數人想像得要簡單。實際上，你甚至不需要成為一個有經驗的程序員就可以使用 SQL 創建資料庫。在本文中，我將解釋如何使用 MySQL 5.6 來創建簡單的關係型資料庫管理系統（RDMS）。在開始之前，我想順便感謝一下 ",-1)),p(e,{href:"http://sqlfiddle.com"},{default:t(()=>[...s[0]||(s[0]=[n("SQL Fiddle",-1)])]),_:1}),s[2]||(s[2]=n("，這是我用來運行腳本的工具。它提供了一個用於測試簡單腳本的有用的沙箱。",-1))]),s[22]||(s[22]=r(`<p>在本教程中，我將構建一個使用如下實體關係圖（ERD）中顯示的簡單架構的資料庫。資料庫列出了學生和正在學習的課程。為了保持簡單，我使用了兩個實體（即表），只有一種關係和依賴。這兩個實體稱為 <code>dbo_students</code> 和 <code>dbo_courses</code>。</p><p><img src="https://opensource.com/sites/default/files/u128651/erd.png" alt=""></p><p>資料庫的多樣性是一對多的，因為每門課程可以包含很多學生，但每個學生只能學習一門課程。</p><p>關於術語的快速説明：</p><ol><li>一張表稱為一個實體。</li><li>一個字段稱為一個屬性。</li><li>一條記錄稱為一個元組。</li><li>用於構建資料庫的腳本稱為架構。</li></ol><h3 id="構建架構" tabindex="-1">構建架構 <a class="header-anchor" href="#構建架構" aria-label="Permalink to “構建架構”">​</a></h3><p>要構建資料庫，使用 <code>CREATE TABLE &lt;表名&gt;</code> 命令，然後定義每個字段的名稱和數據類型。資料庫使用 <code>VARCHAR(n)</code> （字符串）和 <code>INT(n)</code> （整數），其中 <code>n</code> 表示可以存儲的值的長度。例如 <code>INT(2)</code> 可以是 <code>01</code>。</p><p>這是用於創建兩個表的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE dbo_students</span></span>
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
<span class="line"><span>);</span></span></code></pre></div><p><code>NOT NULL</code> 意味着字段不能為空，<code>AUTO_INCREMENT</code> 意味着當一個新的元組被添加時，ID 號將自動生成，是對先前存儲的 ID 號加 1，以強化各實體之間的完整參照性。 <code>PRIMARY KEY</code> 是每個表的惟一標識符屬性。這意味着每個元組都有自己的不同的標識。</p><h3 id="關係作為一種約束" tabindex="-1">關係作為一種約束 <a class="header-anchor" href="#關係作為一種約束" aria-label="Permalink to “關係作為一種約束”">​</a></h3><p>就目前來看，這兩張表格是獨立存在的，沒有任何聯繫或關係。要連接它們，必須標識一個外鍵。在 <code>dbo_students</code> 中，外鍵是 <code>course_studied</code>，其來源在 <code>dbo_courses</code> 中，意味着該字段被引用。SQL 中的特定命令為 <code>CONSTRAINT</code>，並且將使用另一個名為 <code>ALTER TABLE</code> 的命令添加這種關係，這樣即使在架構構建完畢後，也可以編輯表。</p><p>以下代碼將關係添加到資料庫構造腳本中：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>ALTER TABLE dbo_students</span></span>
<span class="line"><span>ADD CONSTRAINT FK_course_studied</span></span>
<span class="line"><span>FOREIGN KEY (course_studied) REFERENCES dbo_courses(course_id);</span></span></code></pre></div><p>使用 <code>CONSTRAINT</code> 命令實際上並不是必要的，但這是一個好習慣，因為它意味着約束可以被命名並且使維護更容易。現在資料庫已經完成了，是時候添加一些數據了。</p><h3 id="將數據添加到資料庫" tabindex="-1">將數據添加到資料庫 <a class="header-anchor" href="#將數據添加到資料庫" aria-label="Permalink to “將數據添加到資料庫”">​</a></h3><p><code>INSERT INTO &lt;表名&gt;</code> 是用於直接選擇要添加哪些屬性（即字段）數據的命令。首先聲明實體名稱，然後聲明屬性，下邊是添加到實體的數據，從而創建一個元組。如果指定了 <code>NOT NULL</code>，這表示該屬性不能留空。以下代碼將展示如何向表中添加記錄：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>INSERT INTO dbo_courses(course_id,course_name)</span></span>
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
<span class="line"><span>VALUES(004,&#39;student4&#39;,003);</span></span></code></pre></div><p>現在資料庫架構已經完成並添加了數據，現在是時候在資料庫上運行查詢了。</p><h3 id="查詢" tabindex="-1">查詢 <a class="header-anchor" href="#查詢" aria-label="Permalink to “查詢”">​</a></h3><p>查詢遵循使用以下命令的集合結構：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT &lt;attributes&gt;</span></span>
<span class="line"><span>FROM &lt;entity&gt;</span></span>
<span class="line"><span>WHERE &lt;condition&gt;</span></span></code></pre></div><p>要顯示 <code>dbo_courses</code> 實體內的所有記錄並顯示課程代碼和課程名稱，請使用 <code>*</code> 。 這是一個通配符，它消除了鍵入所有屬性名稱的需要。（在生產資料庫中不建議使用它。）此處查詢的代碼是：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM dbo_courses</span></span></code></pre></div><p>此處查詢的輸出顯示錶中的所有元組，因此可顯示所有可用課程：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>| course_id |          course_name |</span></span>
<span class="line"><span>|-----------|----------------------|</span></span>
<span class="line"><span>|         1 | Software Engineering |</span></span>
<span class="line"><span>|         2 |     Computer Science |</span></span>
<span class="line"><span>|         3 |            Computing |</span></span></code></pre></div><p>在後面的文章中，我將使用三種類型的連接之一來解釋更復雜的查詢：內連接、外連接和交叉連接。</p><p>這是完整的腳本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE dbo_students</span></span>
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
<span class="line"><span>FROM dbo_courses</span></span></code></pre></div><h3 id="學習更多" tabindex="-1">學習更多 <a class="header-anchor" href="#學習更多" aria-label="Permalink to “學習更多”">​</a></h3><p>SQL 並不困難；我認為它比編程簡單，並且該語言對於不同的資料庫系統是通用的。 請注意，實體關係圖中 <code>dbo.&lt;實體&gt;</code> （LCTT 譯註：文章中使用的是 <code>dbo_&lt;實體&gt;</code>）不是必需的實體命名約定；我之所以使用，僅僅是因為它是 Microsoft SQL Server 中的標準。</p>`,31)),a("p",null,[s[4]||(s[4]=n("如果你想了解更多，在網絡上這方面的最佳指南是 ",-1)),p(e,{href:"https://www.w3schools.com/sql/default.asp"},{default:t(()=>[...s[3]||(s[3]=[n("W3Schools.com",-1)])]),_:1}),s[5]||(s[5]=n(" 中對所有資料庫平台的 SQL 綜合指南。",-1))]),s[23]||(s[23]=a("p",null,"請隨意使用我的資料庫。另外，如果你有任何建議或疑問，請在評論中回覆。",-1)),s[24]||(s[24]=a("hr",null,null,-1)),a("p",null,[s[7]||(s[7]=n("via: ",-1)),p(e,{href:"https://opensource.com/article/18/2/getting-started-sql"},{default:t(()=>[...s[6]||(s[6]=[n("https://opensource.com/article/18/2/getting-started-sql",-1)])]),_:1})]),a("p",null,[s[11]||(s[11]=n("作者：",-1)),p(e,{href:"https://opensource.com/users/aaroncocker"},{default:t(()=>[...s[8]||(s[8]=[n("Aaron Cocker",-1)])]),_:1}),s[12]||(s[12]=n(" 譯者：",-1)),p(e,{href:"https://github.com/MjSeven"},{default:t(()=>[...s[9]||(s[9]=[n("MjSeven",-1)])]),_:1}),s[13]||(s[13]=n(" 校對：",-1)),p(e,{href:"https://github.com/wxy"},{default:t(()=>[...s[10]||(s[10]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[16]||(s[16]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:t(()=>[...s[14]||(s[14]=[n("LCTT",-1)])]),_:1}),s[17]||(s[17]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:t(()=>[...s[15]||(s[15]=[n("Linux中國",-1)])]),_:1}),s[18]||(s[18]=n(" 榮譽推出",-1))])])}const S=i(c,[["render",u]]);export{k as __pageData,S as default};
