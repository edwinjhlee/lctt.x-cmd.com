import{_ as l,a0 as t,w as c,s as d,ao as o,I as i,x as a,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const L=JSON.parse('{"title":"MySQL 字符串指南 | LCTT x X-CMD","titleTemplate":false,"description":"MySQL 字符串指南 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"MySQL 字符串指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"MySQL 字符串指南 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20230110.0 ⭐️⭐️ A guide to strings in MySQL","title":"MySQL 字符串指南","tag":"202301","desc":""},"relativePath":"202301/20230110.0 ⭐️⭐️ A guide to strings in MySQL.md","filePath":"[post].md"}'),r={name:"202301/20230110.0 ⭐️⭐️ A guide to strings in MySQL.md"};function h(b,s,g,u,k,C){const n=t("Link");return c(),d("div",null,[s[15]||(s[15]=o(`<h1 id="mysql-字符串指南" tabindex="-1">MySQL 字符串指南 <a class="header-anchor" href="#mysql-字符串指南" aria-label="Permalink to “MySQL 字符串指南”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202301/11/161410lh9944zpgjgmgs8t.jpg" alt=""></p><blockquote><p>瞭解 MySQL 如何存儲和顯示你的字符串變量，以便你能更好地控制你的數據。</p></blockquote><p>字符串是你在 MySQL 中使用的最常見的數據類型之一。許多用户在他們的資料庫中插入和讀取字符串，而沒有認真地瞭解過它們。本文旨在讓你深入瞭解 MySQL 如何存儲和顯示你的字符串變量，以便你能更好地控制你的數據。</p><p>你可以把字符串分成兩類：二進制和非二進制。你可能在大多數時候想到的是非二進制字符串。非二進制字符串有字符集和排序的不同。另一方面，二進制字符串存儲諸如 MP3 文件或圖像等東西。即使你在二進制字符串中存儲了一個詞，比如“歌曲”，它的存儲方式也與非二進制字符串不同。</p><p>我將重點討論非二進制字符串。MySQL 中的所有非二進制字符串都與字符集和排序相關。字符串的字符集控制哪些字符可以存儲在字符串中，而它的排序方式控制當你顯示字符串時如何排序。</p><h3 id="字符集" tabindex="-1">字符集 <a class="header-anchor" href="#字符集" aria-label="Permalink to “字符集”">​</a></h3><p>要查看你係統中的字符集，請運行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SHOW CHARACTER SET;</span></span></code></pre></div><p>這個命令將輸出四列數據，包括字符集：</p><ul><li>名稱</li><li>簡要描述</li><li>默認的排序方式</li><li>字符集中每個字符的最大尺寸</li></ul><p>MySQL 過去默認為 <code>latin1</code> 字符集，但自 8.0 版以來，默認為 <code>utf8mb4</code>。現在的默認排序方式是 <code>utf8mb4_0900_ai_ci</code>。<code>ai</code> 表示該排序對音調不敏感（ <code>á</code> = <code>a</code>），而 <code>ci</code> 則指定它對大小寫不敏感（<code>a</code> = <code>A</code>）。</p><p>不同的字符集將其字符存儲在內存中不同大小的塊中。例如，從上面的命令可以看出，存儲在 <code>utf8mb4</code> 的字符被存儲在 1 到 4 個字節大小的內存中。如果你想看看一個字符串是否包含多字節的字符，你可以使用 <code>CHAR_LENGTH()</code> 和 <code>LENGTH()</code> 函數。<code>CHAR_LENGTH()</code> 顯示一個字符串包含多少個字符，而 <code>LENGTH()</code> 顯示一個字符串有多少個字節，根據字符集的不同，它可能與一個字符串的字符長度相同，也可能不相同。下面是一個例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET @a = CONVERT(&#39;data&#39; USING latin1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT LENGTH(@a), CHAR_LENGTH(@a);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+-----------------+</span></span>
<span class="line"><span>| LENGTH(@a) | CHAR_LENGTH(@a) |</span></span>
<span class="line"><span>+------------+-----------------+</span></span>
<span class="line"><span>|     4      |       4         |</span></span>
<span class="line"><span>+------------+-----------------+</span></span></code></pre></div><p>這個例子表明，<code>latin1</code> 字符集以單字節為單位存儲字符。其他字符集，如 <code>utf16</code>，允許多字節的字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET @b = CONVERT(&#39;data&#39; USING utf16);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT LENGTH(@b), CHAR_LENGTH(@b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+------------------+</span></span>
<span class="line"><span>| LENGTH(@b) | CHAR_LENGTH(@b)  |</span></span>
<span class="line"><span>+------------+------------------+</span></span>
<span class="line"><span>|       8    |        4         |</span></span>
<span class="line"><span>+------------+------------------+</span></span></code></pre></div><h3 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to “排序”">​</a></h3><p>當你運行帶有 <code>ORDER BY</code> 子句的 SQL 語句時，字符串排序方式將決定值的顯示方式。你對排序方式的選擇是由你選擇的字符集決定的。當你運行上面的 <code>SHOW CHARACTER SET</code> 命令時，你看到了每個字符集的默認排序方式。你可以很容易地看到某個特定字符集的所有排序方式。例如，如果你想查看 <code>utf8mb4</code> 字符集允許哪些排序，請運行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SHOW COLLATION LIKE &#39;utf8mb4%&#39;;</span></span></code></pre></div><p>排序方式可以是不區分大小寫的，也可以是區分大小寫的，或者是二進制的。讓我們建立一個簡單的表，向其中插入一些值，然後用不同的排序方式查看數據，看看輸出結果有什麼不同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE sample (s CHAR(5));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO sample (s) VALUES </span></span>
<span class="line"><span> (&#39;AAAAA&#39;), (&#39;ccccc&#39;),  (&#39;bbbbb&#39;), (&#39;BBBBB&#39;), (&#39;aaaaa&#39;), (&#39;CCCCC&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM sample;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| s         |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| AAAAA     |</span></span>
<span class="line"><span>| ccccc     |</span></span>
<span class="line"><span>| bbbbb     |</span></span>
<span class="line"><span>| BBBBB     |</span></span>
<span class="line"><span>| aaaaa     |</span></span>
<span class="line"><span>| CCCCC     |</span></span>
<span class="line"><span>+-----------+</span></span></code></pre></div><p>在不區分大小寫的情況下，你的數據會按字母順序返回，但不能保證大寫的單詞會排在小寫的單詞之前，如下圖所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT * FROM sample ORDER BY s COLLATE utf8mb4_turkish_ci;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| s         |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| AAAAA     |</span></span>
<span class="line"><span>| aaaaa     |</span></span>
<span class="line"><span>| bbbbb     |</span></span>
<span class="line"><span>| BBBBB     |</span></span>
<span class="line"><span>| ccccc     |</span></span>
<span class="line"><span>| CCCCC     |</span></span>
<span class="line"><span>+-----------+</span></span></code></pre></div><p>另一方面，當 MySQL 運行大小寫敏感的搜索時，每個字母的小寫將排在大寫之前：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT * FROM sample ORDER BY s COLLATE utf8mb4_0900_as_cs;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| s         |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| aaaaa     |</span></span>
<span class="line"><span>| AAAAA     |</span></span>
<span class="line"><span>| bbbbb     |</span></span>
<span class="line"><span>| BBBBB     |</span></span>
<span class="line"><span>| ccccc     |</span></span>
<span class="line"><span>| CCCCC     |</span></span>
<span class="line"><span>+-----------+</span></span></code></pre></div><p>而按二進制排序方式將返回所有大寫的值，然後再返回小寫的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT * FROM sample ORDER BY s COLLATE utf8mb4_0900_bin;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| s         |</span></span>
<span class="line"><span>+-----------+</span></span>
<span class="line"><span>| AAAAA     |</span></span>
<span class="line"><span>| ccccc     |</span></span>
<span class="line"><span>| bbbbb     |</span></span>
<span class="line"><span>| BBBBB     |</span></span>
<span class="line"><span>| aaaaa     |</span></span>
<span class="line"><span>| CCCCC     |</span></span>
<span class="line"><span>+-----------+</span></span></code></pre></div><p>如果你想知道一個字符串使用哪種字符集和排序，你可以使用被恰當命名的 <code>charset</code> 和 <code>collation</code> 函數。運行 MySQL 8.0 或更高版本的服務器將默認使用 <code>utf8mb4</code> 字符集和 <code>utf8mb4_0900_ai_ci</code> 排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT charset(&#39;data&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span>| charset(&#39;data&#39;)   |</span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span>| utf8mb4           |</span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT collation(&#39;data&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| collation(&#39;data&#39;)  |</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| utf8mb4_0900_ai_ci |</span></span>
<span class="line"><span>+--------------------+</span></span></code></pre></div><p>你可以使用 <code>SET NAMES</code> 命令來改變所使用的字符集或排序方式。</p><p>要從 <code>utf8mb4</code> 字符集改為 <code>utf16</code>，運行這個命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET NAMES &#39;utf16&#39;;</span></span></code></pre></div><p>如果你想選擇默認以外的排序方式，你可以在 <code>SET NAMES</code> 命令中添加一個 <code>COLLATE</code> 子句。</p><p>例如，假設你的資料庫存儲西班牙語的單詞。MySQL 的默認排序（<code>utf8mb4_0900_ai_ci</code>）將 <code>ch</code> 和 <code>ll</code> 視為兩個不同的字符，並將它們排序。但在西班牙語中，<code>ch</code> 和 <code>ll</code> 是單獨的字母，所以如果你想讓它們按正確的順序排序（分別排在 <code>c</code> 和 <code>l</code> 之後），你需要使用不同的排序。一個選擇是使用 <code>utf8mb4_spanish2_ci</code> 排序方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET NAMES &#39;utf8mb4&#39; COLLATE &#39;utf8mb4_spanish2_ci&#39;;</span></span></code></pre></div><h3 id="儲存字符串" tabindex="-1">儲存字符串 <a class="header-anchor" href="#儲存字符串" aria-label="Permalink to “儲存字符串”">​</a></h3><p>MySQL 允許你為你的字符串值選擇不同的數據類型。（甚至比其他流行的資料庫，如 PostgreSQL 和 MongoDB 更多。）</p><p>下面是 MySQL 的二進制字符串數據類型的列表、它們的非二進制對應物，以及它們的最大長度：</p><ul><li><code>binary</code>：<code>char</code>（255）</li><li><code>varbinary</code>：<code>varchar</code>（65,535）</li><li><code>tinyblob</code>：<code>tinytext</code>（255）</li><li><code>blob</code>：<code>text</code>（65,535）</li><li><code>mediumblob</code>：<code>mediumtext</code>（16,777,215）</li><li><code>longblob</code>：<code>longtext</code>（4,294,967,295）</li></ul><p>要記住的一件重要事情是，與被存儲在可變長度的字段中的 <code>varbinary</code>、<code>varchar</code>、<code>text</code> 和 <code>blob</code> 類型不同（也就是説，只使用需要的空間），MySQL 將二進制（<code>binary</code>）和字符（<code>char</code>）類型存儲在固定長度的字段。因此，像 <code>char(20)</code> 或 <code>binary(20)</code> 這樣的值將總是佔用 20 個字節，即使你在其中存儲了少於 20 個字符。對於二進制類型，MySQL用 ASCII NUL 值（<code>0x00</code>）填充這些值，對於 字符類型，用空格填充。</p><p>在選擇數據類型時要考慮的另一件事是，你是否希望在字符串後面的空格被保留或剝離。在顯示數據時，MySQL 會從以字符數據類型存儲的數據中剝離空格，但不會剝離 <code>varchar</code> 的空格。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE sample2 (s1 CHAR(10), s2 VARCHAR(10));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO sample2 (s1, s2) VALUES (&#39;cat       &#39;, &#39;cat       &#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT s1, s2, CHAR_LENGTH(s1), CHAR_LENGTH(s2) FROM sample2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+---------+---------+-----------------------------------+</span></span>
<span class="line"><span>| s1      | s2      | CHAR_LENGTH(s1) | CHAR_LENGTH(s2) |</span></span>
<span class="line"><span>+---------+---------+-----------------------------------+</span></span>
<span class="line"><span>| cat     | cat     |        3        |       10        |</span></span>
<span class="line"><span>+---------+---------+-----------------------------------+</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>字符串是資料庫中最常用的數據類型之一，而 MySQL 仍然是當今最流行的資料庫系統之一。我希望你能從這篇文章中學到一些新的東西，並能用你的新知識來提高你的資料庫技能。</p><hr>`,45)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/23/1/strings-mysql"},{default:e(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/23/1/strings-mysql",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/hunterc"},{default:e(()=>[...s[2]||(s[2]=[a("Hunter Coleman",-1)])]),_:1}),s[7]||(s[7]=a(" 選題：",-1)),p(n,{href:"https://github.com/lkxed"},{default:e(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 譯者：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[a("wxy",-1)])]),_:1}),s[9]||(s[9]=a(" 校對：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原創編譯，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中國",-1)])]),_:1}),s[14]||(s[14]=a(" 榮譽推出",-1))])])}const y=l(r,[["render",h]]);export{L as __pageData,y as default};
