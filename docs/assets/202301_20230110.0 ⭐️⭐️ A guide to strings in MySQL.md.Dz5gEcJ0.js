import{_ as l,a0 as t,w as c,s as d,ao as o,I as i,x as a,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const L=JSON.parse('{"title":"MySQL 字符串指南 | LCTT x X-CMD","titleTemplate":false,"description":"MySQL 字符串指南 | LCTT (202301) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"MySQL 字符串指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"MySQL 字符串指南 | LCTT (202301) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202301/20230110.0 ⭐️⭐️ A guide to strings in MySQL","title":"MySQL 字符串指南","tag":"202301","desc":""},"relativePath":"202301/20230110.0 ⭐️⭐️ A guide to strings in MySQL.md","filePath":"[post].md"}'),r={name:"202301/20230110.0 ⭐️⭐️ A guide to strings in MySQL.md"};function h(b,s,g,u,k,C){const n=t("Link");return c(),d("div",null,[s[15]||(s[15]=o(`<h1 id="mysql-字符串指南" tabindex="-1">MySQL 字符串指南 <a class="header-anchor" href="#mysql-字符串指南" aria-label="Permalink to “MySQL 字符串指南”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202301/11/161410lh9944zpgjgmgs8t.jpg" alt=""></p><blockquote><p>了解 MySQL 如何存储和显示你的字符串变量，以便你能更好地控制你的数据。</p></blockquote><p>字符串是你在 MySQL 中使用的最常见的数据类型之一。许多用户在他们的数据库中插入和读取字符串，而没有认真地了解过它们。本文旨在让你深入了解 MySQL 如何存储和显示你的字符串变量，以便你能更好地控制你的数据。</p><p>你可以把字符串分成两类：二进制和非二进制。你可能在大多数时候想到的是非二进制字符串。非二进制字符串有字符集和排序的不同。另一方面，二进制字符串存储诸如 MP3 文件或图像等东西。即使你在二进制字符串中存储了一个词，比如“歌曲”，它的存储方式也与非二进制字符串不同。</p><p>我将重点讨论非二进制字符串。MySQL 中的所有非二进制字符串都与字符集和排序相关。字符串的字符集控制哪些字符可以存储在字符串中，而它的排序方式控制当你显示字符串时如何排序。</p><h3 id="字符集" tabindex="-1">字符集 <a class="header-anchor" href="#字符集" aria-label="Permalink to “字符集”">​</a></h3><p>要查看你系统中的字符集，请运行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SHOW CHARACTER SET;</span></span></code></pre></div><p>这个命令将输出四列数据，包括字符集：</p><ul><li>名称</li><li>简要描述</li><li>默认的排序方式</li><li>字符集中每个字符的最大尺寸</li></ul><p>MySQL 过去默认为 <code>latin1</code> 字符集，但自 8.0 版以来，默认为 <code>utf8mb4</code>。现在的默认排序方式是 <code>utf8mb4_0900_ai_ci</code>。<code>ai</code> 表示该排序对音调不敏感（ <code>á</code> = <code>a</code>），而 <code>ci</code> 则指定它对大小写不敏感（<code>a</code> = <code>A</code>）。</p><p>不同的字符集将其字符存储在内存中不同大小的块中。例如，从上面的命令可以看出，存储在 <code>utf8mb4</code> 的字符被存储在 1 到 4 个字节大小的内存中。如果你想看看一个字符串是否包含多字节的字符，你可以使用 <code>CHAR_LENGTH()</code> 和 <code>LENGTH()</code> 函数。<code>CHAR_LENGTH()</code> 显示一个字符串包含多少个字符，而 <code>LENGTH()</code> 显示一个字符串有多少个字节，根据字符集的不同，它可能与一个字符串的字符长度相同，也可能不相同。下面是一个例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET @a = CONVERT(&#39;data&#39; USING latin1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT LENGTH(@a), CHAR_LENGTH(@a);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+-----------------+</span></span>
<span class="line"><span>| LENGTH(@a) | CHAR_LENGTH(@a) |</span></span>
<span class="line"><span>+------------+-----------------+</span></span>
<span class="line"><span>|     4      |       4         |</span></span>
<span class="line"><span>+------------+-----------------+</span></span></code></pre></div><p>这个例子表明，<code>latin1</code> 字符集以单字节为单位存储字符。其他字符集，如 <code>utf16</code>，允许多字节的字符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET @b = CONVERT(&#39;data&#39; USING utf16);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT LENGTH(@b), CHAR_LENGTH(@b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+------------+------------------+</span></span>
<span class="line"><span>| LENGTH(@b) | CHAR_LENGTH(@b)  |</span></span>
<span class="line"><span>+------------+------------------+</span></span>
<span class="line"><span>|       8    |        4         |</span></span>
<span class="line"><span>+------------+------------------+</span></span></code></pre></div><h3 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to “排序”">​</a></h3><p>当你运行带有 <code>ORDER BY</code> 子句的 SQL 语句时，字符串排序方式将决定值的显示方式。你对排序方式的选择是由你选择的字符集决定的。当你运行上面的 <code>SHOW CHARACTER SET</code> 命令时，你看到了每个字符集的默认排序方式。你可以很容易地看到某个特定字符集的所有排序方式。例如，如果你想查看 <code>utf8mb4</code> 字符集允许哪些排序，请运行：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SHOW COLLATION LIKE &#39;utf8mb4%&#39;;</span></span></code></pre></div><p>排序方式可以是不区分大小写的，也可以是区分大小写的，或者是二进制的。让我们建立一个简单的表，向其中插入一些值，然后用不同的排序方式查看数据，看看输出结果有什么不同：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE sample (s CHAR(5));</span></span>
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
<span class="line"><span>+-----------+</span></span></code></pre></div><p>在不区分大小写的情况下，你的数据会按字母顺序返回，但不能保证大写的单词会排在小写的单词之前，如下图所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT * FROM sample ORDER BY s COLLATE utf8mb4_turkish_ci;</span></span>
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
<span class="line"><span>+-----------+</span></span></code></pre></div><p>另一方面，当 MySQL 运行大小写敏感的搜索时，每个字母的小写将排在大写之前：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT * FROM sample ORDER BY s COLLATE utf8mb4_0900_as_cs;</span></span>
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
<span class="line"><span>+-----------+</span></span></code></pre></div><p>而按二进制排序方式将返回所有大写的值，然后再返回小写的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT * FROM sample ORDER BY s COLLATE utf8mb4_0900_bin;</span></span>
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
<span class="line"><span>+-----------+</span></span></code></pre></div><p>如果你想知道一个字符串使用哪种字符集和排序，你可以使用被恰当命名的 <code>charset</code> 和 <code>collation</code> 函数。运行 MySQL 8.0 或更高版本的服务器将默认使用 <code>utf8mb4</code> 字符集和 <code>utf8mb4_0900_ai_ci</code> 排序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SELECT charset(&#39;data&#39;);</span></span>
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
<span class="line"><span>+--------------------+</span></span></code></pre></div><p>你可以使用 <code>SET NAMES</code> 命令来改变所使用的字符集或排序方式。</p><p>要从 <code>utf8mb4</code> 字符集改为 <code>utf16</code>，运行这个命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET NAMES &#39;utf16&#39;;</span></span></code></pre></div><p>如果你想选择默认以外的排序方式，你可以在 <code>SET NAMES</code> 命令中添加一个 <code>COLLATE</code> 子句。</p><p>例如，假设你的数据库存储西班牙语的单词。MySQL 的默认排序（<code>utf8mb4_0900_ai_ci</code>）将 <code>ch</code> 和 <code>ll</code> 视为两个不同的字符，并将它们排序。但在西班牙语中，<code>ch</code> 和 <code>ll</code> 是单独的字母，所以如果你想让它们按正确的顺序排序（分别排在 <code>c</code> 和 <code>l</code> 之后），你需要使用不同的排序。一个选择是使用 <code>utf8mb4_spanish2_ci</code> 排序方式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>SET NAMES &#39;utf8mb4&#39; COLLATE &#39;utf8mb4_spanish2_ci&#39;;</span></span></code></pre></div><h3 id="储存字符串" tabindex="-1">储存字符串 <a class="header-anchor" href="#储存字符串" aria-label="Permalink to “储存字符串”">​</a></h3><p>MySQL 允许你为你的字符串值选择不同的数据类型。（甚至比其他流行的数据库，如 PostgreSQL 和 MongoDB 更多。）</p><p>下面是 MySQL 的二进制字符串数据类型的列表、它们的非二进制对应物，以及它们的最大长度：</p><ul><li><code>binary</code>：<code>char</code>（255）</li><li><code>varbinary</code>：<code>varchar</code>（65,535）</li><li><code>tinyblob</code>：<code>tinytext</code>（255）</li><li><code>blob</code>：<code>text</code>（65,535）</li><li><code>mediumblob</code>：<code>mediumtext</code>（16,777,215）</li><li><code>longblob</code>：<code>longtext</code>（4,294,967,295）</li></ul><p>要记住的一件重要事情是，与被存储在可变长度的字段中的 <code>varbinary</code>、<code>varchar</code>、<code>text</code> 和 <code>blob</code> 类型不同（也就是说，只使用需要的空间），MySQL 将二进制（<code>binary</code>）和字符（<code>char</code>）类型存储在固定长度的字段。因此，像 <code>char(20)</code> 或 <code>binary(20)</code> 这样的值将总是占用 20 个字节，即使你在其中存储了少于 20 个字符。对于二进制类型，MySQL用 ASCII NUL 值（<code>0x00</code>）填充这些值，对于 字符类型，用空格填充。</p><p>在选择数据类型时要考虑的另一件事是，你是否希望在字符串后面的空格被保留或剥离。在显示数据时，MySQL 会从以字符数据类型存储的数据中剥离空格，但不会剥离 <code>varchar</code> 的空格。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>CREATE TABLE sample2 (s1 CHAR(10), s2 VARCHAR(10));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INSERT INTO sample2 (s1, s2) VALUES (&#39;cat       &#39;, &#39;cat       &#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT s1, s2, CHAR_LENGTH(s1), CHAR_LENGTH(s2) FROM sample2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>+---------+---------+-----------------------------------+</span></span>
<span class="line"><span>| s1      | s2      | CHAR_LENGTH(s1) | CHAR_LENGTH(s2) |</span></span>
<span class="line"><span>+---------+---------+-----------------------------------+</span></span>
<span class="line"><span>| cat     | cat     |        3        |       10        |</span></span>
<span class="line"><span>+---------+---------+-----------------------------------+</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>字符串是数据库中最常用的数据类型之一，而 MySQL 仍然是当今最流行的数据库系统之一。我希望你能从这篇文章中学到一些新的东西，并能用你的新知识来提高你的数据库技能。</p><hr>`,45)),i("p",null,[s[1]||(s[1]=a("via: ",-1)),p(n,{href:"https://opensource.com/article/23/1/strings-mysql"},{default:e(()=>[...s[0]||(s[0]=[a("https://opensource.com/article/23/1/strings-mysql",-1)])]),_:1})]),i("p",null,[s[6]||(s[6]=a("作者：",-1)),p(n,{href:"https://opensource.com/users/hunterc"},{default:e(()=>[...s[2]||(s[2]=[a("Hunter Coleman",-1)])]),_:1}),s[7]||(s[7]=a(" 选题：",-1)),p(n,{href:"https://github.com/lkxed"},{default:e(()=>[...s[3]||(s[3]=[a("lkxed",-1)])]),_:1}),s[8]||(s[8]=a(" 译者：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[4]||(s[4]=[a("wxy",-1)])]),_:1}),s[9]||(s[9]=a(" 校对：",-1)),p(n,{href:"https://github.com/wxy"},{default:e(()=>[...s[5]||(s[5]=[a("wxy",-1)])]),_:1})]),i("p",null,[s[12]||(s[12]=a("本文由 ",-1)),p(n,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[10]||(s[10]=[a("LCTT",-1)])]),_:1}),s[13]||(s[13]=a(" 原创编译，",-1)),p(n,{href:"https://linux.cn/"},{default:e(()=>[...s[11]||(s[11]=[a("Linux中国",-1)])]),_:1}),s[14]||(s[14]=a(" 荣誉推出",-1))])])}const y=l(r,[["render",h]]);export{L as __pageData,y as default};
