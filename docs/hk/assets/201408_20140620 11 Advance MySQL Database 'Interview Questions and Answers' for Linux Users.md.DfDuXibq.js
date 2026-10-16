import{_ as o,a0 as l,w as i,s as d,I as a,x as n,a1 as r,A as s,ao as m}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const f=JSON.parse(`{"title":"給linux用户的11個高級MySQL資料庫面試問題和答案 | LCTT x X-CMD","titleTemplate":false,"description":"給linux用户的11個高級MySQL資料庫面試問題和答案 | LCTT (201408) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"給linux用户的11個高級MySQL資料庫面試問題和答案 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"給linux用户的11個高級MySQL資料庫面試問題和答案 | LCTT (201408) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201408/20140620 11 Advance MySQL Database 'Interview Questions and Answers' for Linux Users","title":"給linux用户的11個高級MySQL資料庫面試問題和答案","tag":"201408","desc":""},"relativePath":"201408/20140620 11 Advance MySQL Database 'Interview Questions and Answers' for Linux Users.md","filePath":"[post].md"}`),p={name:"201408/20140620 11 Advance MySQL Database 'Interview Questions and Answers' for Linux Users.md"};function c(u,e,L,y,h,S){const t=l("Link");return i(),d("div",null,[e[13]||(e[13]=a("h1",{id:"給linux用户的11個高級mysql資料庫面試問題和答案",tabindex:"-1"},[n("給linux用户的11個高級MySQL資料庫面試問題和答案 "),a("a",{class:"header-anchor",href:"#給linux用户的11個高級mysql資料庫面試問題和答案","aria-label":"Permalink to “給linux用户的11個高級MySQL資料庫面試問題和答案”"},"​")],-1)),e[14]||(e[14]=a("p",null,"我們已經發表了兩篇MySQL的文章，非常感謝Tecmint社區的大力支持。這是MySQL面試系列的第三篇文章,並且在面試專欄中排第16。",-1)),a("ul",null,[a("li",null,[r(t,{href:"http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/"},{default:s(()=>[...e[0]||(e[0]=[n("15個基本的MySQL面試問題",-1)])]),_:1})]),a("li",null,[r(t,{href:"http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/"},{default:s(()=>[...e[1]||(e[1]=[n("給中級人員的10個MySQL面試問題",-1)])]),_:1})])]),e[15]||(e[15]=m(`<p><img src="http://www.tecmint.com/wp-content/uploads/2014/06/MySQL-Interview-Questions.jpeg" alt="11個MySQL面試問題"></p><p>因為有大家的支持，我們才能做到現在，感謝你們這一路上對我們的支持.在這篇文章中，我們將主要針對MySQL的實用技巧，講講面試中相關的問題.</p><h3 id="_1-如何使用select語句找到你正在運行的服務器的版本並打印出當前資料庫的名稱" tabindex="-1">1. 如何使用SELECT語句找到你正在運行的服務器的版本並打印出當前資料庫的名稱? <a class="header-anchor" href="#_1-如何使用select語句找到你正在運行的服務器的版本並打印出當前資料庫的名稱" aria-label="Permalink to “1. 如何使用SELECT語句找到你正在運行的服務器的版本並打印出當前資料庫的名稱?”">​</a></h3><p><strong>答</strong>：下面的語句的結果會顯示服務器的版本和當前的資料庫名稱</p><pre><code> mysql&gt; SELECT VERSION(), DATABASE();
 
 +-------------------------+------------+
 | VERSION()               | DATABASE() |
 +-------------------------+------------+
 | 5.5.34-0ubuntu0.13.10.1 | NULL       |
 +-------------------------+------------+
 1 row in set (0.06 sec)
</code></pre><p>在Database一列中顯示<strong>NULL</strong>是因為我們當前沒有選擇任何資料庫。因此，使用下面的語句先選擇一個數據庫,就能看到相應的結果。</p><pre><code>mysql&gt; use Tecmint;

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
</code></pre><h3 id="_2-使用非運算符-從表-tecmint-中列出除了-sam-以外的所有user記錄" tabindex="-1">2. 使用非運算符(!)從表&quot;Tecmint&quot;中列出除了&quot;SAM&quot;以外的所有user記錄 <a class="header-anchor" href="#_2-使用非運算符-從表-tecmint-中列出除了-sam-以外的所有user記錄" aria-label="Permalink to “2. 使用非運算符(!)從表Tecmint中列出除了SAM以外的所有user記錄”">​</a></h3><p><strong>答</strong>：使用下面的語句</p><pre><code>mysql&gt; SELECT * FROM Tecmint WHERE user !=SAM;

+---------------------+---------+---------+---------+---------+-------+ 
| date                | user    | host 	 | root     | local   | size  | 
+---------------------+---------+---------+---------+---------+-------+ 
| 2001-05-14 14:42:21 | Anthony | venus  | barb     | venus   | 98151 | 
| 2001-05-15 08:50:57 | TIM     | venus  | phil     | venus   | 978   | 
+---------------------+---------+---------+---------+---------+-------+
</code></pre><h3 id="_3-and-運算符有可能帶着非運算符-一起用嗎" tabindex="-1">3. ‘AND’運算符有可能帶着非運算符(!)一起用嗎？ <a class="header-anchor" href="#_3-and-運算符有可能帶着非運算符-一起用嗎" aria-label="Permalink to “3. ‘AND’運算符有可能帶着非運算符(!)一起用嗎？”">​</a></h3><p><strong>答</strong>：當我們使用‘=’號時用‘AND’連接，用‘!=’時用‘OR’連接，下面是‘=’和AND運算符一起用的例子</p><pre><code>mysql&gt; SELECT * FROM mail WHERE user = SAM AND root = phil
</code></pre><p>‘!=’和OR運算符的例子</p><pre><code>mysql&gt; SELECT * FROM mail WHERE user != SAM OR root != phil

+---------------------+---------+---------+---------+---------+-------+ 
| date                | user    | host    | root    | local   | size  | 
+---------------------+---------+---------+---------+---------+-------+ 
| 2001-05-14 14:42:21 | Anthony | venus   | barb    | venus   | 98151 | 
+---------------------+---------+---------+---------+---------+-------+
</code></pre><ul><li>= : 等於</li><li>!= : 不等於</li><li>! : 代表“非”的運算符</li></ul><p>AND和OR在MySQL中被看作連接運算符</p><h3 id="_4-ifnull-當打在mysql中有什麼作用" tabindex="-1">4. IFNULL()當打在MySQL中有什麼作用? <a class="header-anchor" href="#_4-ifnull-當打在mysql中有什麼作用" aria-label="Permalink to “4. IFNULL()當打在MySQL中有什麼作用?”">​</a></h3><p><strong>答</strong>：使用<strong>IFNULL()</strong>方法能使MySQL中的查詢更加精確。IFNULL()方法將會測試它的第一個參數，若不為NULL則返回該參數的值，否則返回第二個參數的值</p><pre><code>mysql&gt; SELECT name, IFNULL(id,&#39;Unknown&#39;) AS &#39;id&#39; FROM taxpayer;

+---------+---------+ 
| name 	  | id      | 
+---------+---------+ 
| bernina | 198-48  | 
| bertha  | Unknown | 
| ben     | Unknown | 
| bill    | 475-83  | 
+---------+---------+
</code></pre><h3 id="_5-如果你只想知道從一個結果集的開頭或者結尾開始的特定幾條記錄-該如何實現" tabindex="-1">5. 如果你只想知道從一個結果集的開頭或者結尾開始的特定幾條記錄，該如何實現？ <a class="header-anchor" href="#_5-如果你只想知道從一個結果集的開頭或者結尾開始的特定幾條記錄-該如何實現" aria-label="Permalink to “5. 如果你只想知道從一個結果集的開頭或者結尾開始的特定幾條記錄，該如何實現？”">​</a></h3><p><strong>答</strong>：我們需要把<strong>LIMIT</strong>語句接在<strong>ORDER BY</strong>語句後使用，以達到上述效果。</p><h4 id="顯示一行記錄" tabindex="-1">顯示一行記錄 <a class="header-anchor" href="#顯示一行記錄" aria-label="Permalink to “顯示一行記錄”">​</a></h4><pre><code>mysql&gt; SELECT * FROM name LIMIT 1;

+----+------+------------+-------+----------------------+------+ 
| id | name | birth      | color | foods                | cats | 
+----+------+------------+-------+----------------------+------+ 
| 1  | Fred | 1970-04-13 | black | lutefisk,fadge,pizza | 0    | 
+----+------+------------+-------+----------------------+------+
</code></pre><h4 id="顯示5行記錄" tabindex="-1">顯示5行記錄 <a class="header-anchor" href="#顯示5行記錄" aria-label="Permalink to “顯示5行記錄”">​</a></h4><pre><code>mysql&gt; SELECT * FROM profile LIMIT 5;

+----+------+------------+-------+-----------------------+------+ 
| id | name | birth      | color | foods                 | cats | 
+----+------+------------+-------+-----------------------+------+ 
| 1  | Fred | 1970-04-13 | black | lutefisk,fadge,pizza  | 0    | 
| 2  | Mort | 1969-09-30 | white | burrito,curry,eggroll | 3    | 
| 3  | Brit | 1957-12-01 | red   | burrito,curry,pizza   | 1    |   
| 4  | Carl | 1973-11-02 | red   | eggroll,pizza         | 4    | 
| 5  | Sean | 1963-07-04 | blue  | burrito,curry         | 5    | 
+----+------+------------+-------+-----------------------+------+
</code></pre><h4 id="顯示按照order-by排序後的第一條記錄" tabindex="-1">顯示按照ORDER BY排序後的第一條記錄 <a class="header-anchor" href="#顯示按照order-by排序後的第一條記錄" aria-label="Permalink to “顯示按照ORDER BY排序後的第一條記錄”">​</a></h4><pre><code>mysql&gt; SELECT * FROM profile ORDER BY birth LIMIT 1;

+----+------+------------+-------+----------------+------+ 
| id | name | birth      | color | foods          | cats | 
+----+------+------------+-------+----------------+------+ 
| 9  | Dick | 1952-08-20 | green | lutefisk,fadge | 0    | 
+----+------+------------+-------+----------------+------+
</code></pre><h3 id="_6-oracle-和-mysql該如何選擇-為什麼" tabindex="-1">6. Oracle 和 MySQL該如何選擇，為什麼? <a class="header-anchor" href="#_6-oracle-和-mysql該如何選擇-為什麼" aria-label="Permalink to “6. Oracle 和 MySQL該如何選擇，為什麼?”">​</a></h3><p><strong>答</strong>：它們都有各自的優點和缺點。考慮到時間因素，我傾向於MySQL。</p><h4 id="選擇mysql而不選orcale的原因" tabindex="-1">選擇MySQL而不選orcale的原因 <a class="header-anchor" href="#選擇mysql而不選orcale的原因" aria-label="Permalink to “選擇MySQL而不選orcale的原因”">​</a></h4><ul><li>MySQL開源</li><li>MySQL輕便快捷</li><li>MySQL對命令列和圖形界面的支持都很好</li><li>MySQL支持通過Query Browser進行管理</li></ul><h3 id="_7-mysql中如何得到當前日期" tabindex="-1">7. MySQL中如何得到當前日期? <a class="header-anchor" href="#_7-mysql中如何得到當前日期" aria-label="Permalink to “7. MySQL中如何得到當前日期?”">​</a></h3><p><strong>答</strong>：在MySQL中獲取當前日期就是如下的SELECT語句這麼簡單。</p><pre><code>mysql&gt; SELECT CURRENT_DATE();

+----------------+
| CURRENT_DATE() |
+----------------+
| 2014-06-17     |
+----------------+
</code></pre><h3 id="_8-mysql中如何將表導出為xml文件" tabindex="-1">8. MySQL中如何將表導出為XML文件? <a class="header-anchor" href="#_8-mysql中如何將表導出為xml文件" aria-label="Permalink to “8. MySQL中如何將表導出為XML文件?”">​</a></h3><p><strong>答</strong>：我們可以使用&#39;-e&#39;(export)選項來把MySQL表或整個資料庫導出到XML文件。當處理大型表的時候我們可能需要手動導出，不過對於小表的話可以直接使用想phpMyAdmin等這樣的工具。</p><pre><code>mysql -u USER_NAME -xml -e &#39;SELECT * FROM table_name&#39; &gt; table_name.xml
</code></pre><p>上面的例子中USER_NAME是資料庫的用户名，table_name是待導出為xml文件的表名，table_name.xml是存放數據的xml文件</p><h3 id="_9-mysql-pconnect是什麼-它和mysql-connect有什麼區別" tabindex="-1">9. MySQL_pconnect是什麼? 它和MySQL_connect有什麼區別? <a class="header-anchor" href="#_9-mysql-pconnect是什麼-它和mysql-connect有什麼區別" aria-label="Permalink to “9. MySQL_pconnect是什麼? 它和MySQL_connect有什麼區別?”">​</a></h3><p><strong>答</strong>：MySQL_pconnect()打開一個持久的資料庫連接，這意味着資料庫不是在每次頁面加載的時候被打開一個新連接，因此我們不能使用MySQL_close()來關閉一個持久的連接</p><p>MySQL_pconnect和MySQL_connect最簡要的區別是：</p><p>與MySQL_pconnect不同，MySQL_connect在每次頁面被加載的時候打開連接，這個連接可以使用MySQL_close()語句來關閉</p><h3 id="_10-當你需要查看一個名為-mysql-的資料庫中-user-表中的所有索引時-你會如何做" tabindex="-1">10. 當你需要查看一個名為&#39;mysql&#39;的資料庫中&#39;user&#39;表中的所有索引時，你會如何做? <a class="header-anchor" href="#_10-當你需要查看一個名為-mysql-的資料庫中-user-表中的所有索引時-你會如何做" aria-label="Permalink to “10. 當你需要查看一個名為&#39;mysql&#39;的資料庫中&#39;user&#39;表中的所有索引時，你會如何做?”">​</a></h3><p><strong>答</strong>：下面的命令將會顯示出‘user’表中所有的索引</p><pre><code>mysql&gt; show index from user;
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+ 
| Table | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | 
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+ 
| user  |          0 | PRIMARY  |            1 | Host        | A         |        NULL |     NULL | NULL   |      | BTREE      |         |               | 
| user  |          0 | PRIMARY  |            2 | User        | A         |           4 |     NULL | NULL   |      | BTREE      |         |               | 
+-------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+ 
2 rows in set (0.00 sec)
</code></pre><h3 id="_11-什麼是csv表" tabindex="-1">11. 什麼是CSV表? <a class="header-anchor" href="#_11-什麼是csv表" aria-label="Permalink to “11. 什麼是CSV表?”">​</a></h3><p><strong>答</strong>：CSV是逗號分隔值（Comma-Separated Values）或也被稱為字符分隔值（Character-Separated Values）的縮寫。CSV表以純文本和表格形式來存儲數據。</p><p>每一條記錄都使用特定的分隔符隔開(如逗號,分號,...)，並且每條記錄都有着順序相同的列。CSV表最廣泛地被用來存儲用於導入和導出的電話聯繫人，並能夠用來存儲任何類型的純文本數據。</p><p>以上就是這次要講的全部內容。我還會帶來其他你們應該會喜歡的有趣的文章。到那時敬請關注並訪問Tecmint，不要忘了在下方的評論欄中留下你們的寶貴意見。</p><hr>`,53)),a("p",null,[e[3]||(e[3]=n("via: ",-1)),r(t,{href:"http://www.tecmint.com/mysql-advance-interview-questions/"},{default:s(()=>[...e[2]||(e[2]=[n("http://www.tecmint.com/mysql-advance-interview-questions/",-1)])]),_:1})]),a("p",null,[e[6]||(e[6]=n("譯者：",-1)),r(t,{href:"https://github.com/GOLinux"},{default:s(()=>[...e[4]||(e[4]=[n("GOLinux",-1)])]),_:1}),e[7]||(e[7]=n(" 校對：",-1)),r(t,{href:"https://github.com/reinoir"},{default:s(()=>[...e[5]||(e[5]=[n("ReiNoir",-1)])]),_:1})]),a("p",null,[e[10]||(e[10]=n("本文由 ",-1)),r(t,{href:"https://github.com/LCTT/TranslateProject"},{default:s(()=>[...e[8]||(e[8]=[n("LCTT",-1)])]),_:1}),e[11]||(e[11]=n(" 原創翻譯，",-1)),r(t,{href:"http://linux.cn/"},{default:s(()=>[...e[9]||(e[9]=[n("Linux中國",-1)])]),_:1}),e[12]||(e[12]=n(" 榮譽推出",-1))])])}const g=o(p,[["render",c]]);export{f as __pageData,g as default};
