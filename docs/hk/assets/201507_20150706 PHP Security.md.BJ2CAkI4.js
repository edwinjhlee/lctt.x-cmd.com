import{_ as p,a0 as l,w as i,s as d,ao as s,I as r,x as t,a1 as a,A as o}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const P=JSON.parse('{"title":"PHP 安全編程建議 | LCTT x X-CMD","titleTemplate":false,"description":"PHP 安全編程建議 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"PHP 安全編程建議 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"PHP 安全編程建議 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150706 PHP Security","title":"PHP 安全編程建議","tag":"201507","desc":""},"relativePath":"201507/20150706 PHP Security.md","filePath":"[post].md"}'),g={name:"201507/20150706 PHP Security.md"};function u(h,e,m,c,f,S){const n=l("Link");return i(),d("div",null,[e[29]||(e[29]=s(`<h1 id="php-安全編程建議" tabindex="-1">PHP 安全編程建議 <a class="header-anchor" href="#php-安全編程建議" aria-label="Permalink to “PHP 安全編程建議”">​</a></h1><p><img src="http://www.codeproject.com/KB/PHP/363897/php_security.jpg" alt=""></p><h3 id="簡介" tabindex="-1">簡介 <a class="header-anchor" href="#簡介" aria-label="Permalink to “簡介”">​</a></h3><p>要提供互聯網服務，當你在開發代碼的時候必須時刻保持安全意識。可能大部分 PHP 腳本都對安全問題都不在意，這很大程度上是因為有大量的<em>無經驗程序員</em>在使用這門語言。但是，沒有理由讓你因為對你的代碼的不確定性而導致不一致的安全策略。當你在服務器上放任何涉及到錢的東西時，就有可能會有人嘗試破解它。創建一個論壇程序或者任何形式的購物車，被攻擊的可能性就上升到了無窮大。</p><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to “背景”">​</a></h3><p>為了確保你的 web 內容安全，這裏有一些常規的安全準則：</p><h4 id="別相信表單" tabindex="-1">別相信表單 <a class="header-anchor" href="#別相信表單" aria-label="Permalink to “別相信表單”">​</a></h4><p>攻擊表單很簡單。通過使用一個簡單的 JavaScript 技巧，你可以限制你的表單只允許在評分域中填寫 1 到 5 的數字。如果有人關閉了他們瀏覽器的 JavaScript 功能或者提交自定義的表單數據，你客户端的驗證就失敗了。</p><p>用户主要通過表單參數和你的腳本交互，因此他們是最大的安全風險。你應該學到什麼呢？在 PHP 腳本中，總是要驗證 傳遞給任何 PHP 腳本的數據。在本文中，我們向你演示瞭如何分析和防範跨站腳本（XSS）攻擊，它可能會劫持用户憑據（甚至更嚴重）。你也會看到如何防止會玷污或毀壞你數據的 MySQL 注入攻擊。</p><h4 id="別相信用户" tabindex="-1">別相信用户 <a class="header-anchor" href="#別相信用户" aria-label="Permalink to “別相信用户”">​</a></h4><p>假定你網站獲取的每一份數據都充滿了有害的代碼。清理每一部分，即便你相信沒有人會嘗試攻擊你的站點。</p><h4 id="關閉全局變量" tabindex="-1">關閉全局變量 <a class="header-anchor" href="#關閉全局變量" aria-label="Permalink to “關閉全局變量”">​</a></h4><p>你可能會有的最大安全漏洞是啓用了 register_globals 配置參數。幸運的是，PHP 4.2 及以後版本默認關閉了這個配置。如果打開了 <strong>register_globals</strong>，你可以在你的 php.ini 文件中通過改變 register_globals 變量為 Off 關閉該功能：</p><pre><code>register_globals = Off 
</code></pre><p>新手程序員覺得註冊全局變量很方便，但他們不會意識到這個設置有多麼危險。一個啓用了全局變量的服務器會自動為全局變量賦任何形式的參數。為了瞭解它如何工作以及為什麼有危險，讓我們來看一個例子。</p><p>假設你有一個稱為 process.php 的腳本，它會向你的資料庫插入表單數據。初始的表單像下面這樣：</p><pre><code>&lt;input name=&quot;username&quot; type=&quot;text&quot; size=&quot;15&quot; maxlength=&quot;64&quot;&gt;
</code></pre><p>運行 process.php 的時候，啓用了註冊全局變量的 PHP 會將該參數賦值到 $username 變量。這會比通過 <strong>$_POST[&#39;username&#39;]</strong> 或 <strong>$_GET[&#39;username&#39;]</strong> 訪問它節省擊鍵次數。不幸的是，這也會給你留下安全問題，因為 PHP 會設置該變量的值為通過 GET 或 POST 的參數發送到腳本的任何值，如果你沒有顯示地初始化該變量並且你不希望任何人去操作它，這就會有一個大問題。</p><p>看下面的腳本，假如 $authorized 變量的值為 true，它會給用户顯示通過驗證的數據。正常情況下，只有當用户正確通過了這個假想的 authenticated_user() 函數驗證，$authorized 變量的值才會被設置為真。但是如果你啓用了 <strong>register_globals</strong>，任何人都可以發送一個 GET 參數，例如 authorized=1 去覆蓋它：</p><pre><code>&lt;?php
// Define $authorized = true only if user is authenticated
if (authenticated_user()) {
    $authorized = true;
}
?&gt;
</code></pre><p>這個故事的寓意是，你應該從預定義的服務器變量中獲取表單數據。所有通過 post 表單傳遞到你 web 頁面的數據都會自動保存到一個稱為 <strong>$_POST</strong> 的大數組中，所有的 GET 數據都保存在 <strong>$_GET</strong> 大數組中。文件上傳信息保存在一個稱為 <strong>$_FILES</strong> 的特殊數據中。另外，還有一個稱為 <strong>$_REQUEST</strong> 的複合變量。</p><p>要從一個 POST 方法表單中訪問 username 字段，可以使用 <strong>$_POST[&#39;username&#39;]</strong>。如果 username 在 URL 中就使用 <strong>$_GET[&#39;username&#39;]</strong>。如果你不確定值來自哪裏，用 <strong>$_REQUEST[&#39;username&#39;]</strong>。</p><pre><code>&lt;?php
$post_value = $_POST[&#39;post_value&#39;];
$get_value = $_GET[&#39;get_value&#39;];
$some_variable = $_REQUEST[&#39;some_value&#39;]; 
?&gt;  
</code></pre><p>$_REQUEST 是 $_GET、$_POST、和 $_COOKIE 數組的結合。如果你有兩個或多個值有相同的參數名稱，注意 PHP 會使用哪個。默認的順序是 cookie、POST、然後是 GET。</p><h4 id="推薦安全配置選項" tabindex="-1">推薦安全配置選項 <a class="header-anchor" href="#推薦安全配置選項" aria-label="Permalink to “推薦安全配置選項”">​</a></h4><p>這裏有幾個會影響安全功能的 PHP 配置設置。下面是一些顯然應該用於生產服務器的：</p><ul><li><strong>register_globals</strong> 設置為 off</li><li><strong>safe_mode</strong> 設置為 off</li><li><strong>error_reporting</strong> 設置為 off。如果出現錯誤了，這會向用户瀏覽器發送可見的錯誤報告信息。對於生產服務器，使用錯誤日誌代替。開發服務器如果在防火牆後面就可以啓用錯誤日誌。（LCTT 譯註：此處據原文邏輯和常識，應該是“開發服務器如果在防火牆後面就可以啓用錯誤報告，即 on。”）</li><li>停用這些函數：system()、exec()、passthru()、shell_exec()、proc_open()、和 popen()。</li><li><strong>open_basedir</strong> 為 /tmp（以便保存會話信息）目錄和 web 根目錄，以便腳本不能訪問這些選定區域外的文件。</li><li><strong>expose_php</strong> 設置為 off。該功能會向 Apache 頭添加包含版本號的 PHP 簽名。</li><li><strong>allow_url_fopen</strong> 設置為 off。如果你能夠注意你代碼中訪問文件的方式-也就是你驗證所有輸入參數，這並不嚴格需要。</li><li><strong>allow_url_include</strong> 設置為 off。對於任何人來説，實在沒有明智的理由會想要訪問通過 HTTP 包含的文件。</li></ul><p>一般來説，如果你發現想要使用這些功能的代碼，你就不應該相信它。尤其要小心會使用類似 system() 函數的代碼-它幾乎肯定有缺陷。</p><p>啓用了這些設置後，讓我們來看看一些特定的攻擊以及能幫助你保護你服務器的方法。</p><h3 id="sql-注入攻擊" tabindex="-1">SQL 注入攻擊 <a class="header-anchor" href="#sql-注入攻擊" aria-label="Permalink to “SQL 注入攻擊”">​</a></h3><p>由於 PHP 傳遞到 MySQL 資料庫的查詢語句是用強大的 SQL 編程語言編寫的，就有了某些人通過在 web 查詢參數中使用 MySQL 語句嘗試 SQL 注入攻擊的風險。通過在參數中插入有害的 SQL 代碼片段，攻擊者會嘗試進入（或破壞）你的服務器。</p><p>假如説你有一個最終會放入變量 $product 的表單參數，你使用了類似下面的 SQL 語句：</p><pre><code>$sql = &quot;select * from pinfo where product = &#39;$product&#39;&quot;;
</code></pre><p>如果參數是直接從表單中獲得的，應該使用 PHP 自帶的資料庫特定轉義函數，類似：</p><pre><code>$sql = &#39;Select * from pinfo where product = &#39;&quot;&#39; 
       mysql_real_escape_string($product) . &#39;&quot;&#39;;
</code></pre><p>如果不這樣做的話，有人也許會把下面的代碼段放到表單參數中：</p><pre><code>39&#39;; DROP pinfo; SELECT &#39;FOO 
</code></pre><p>那麼 $sql 的結果就是：</p><pre><code>select product from pinfo where product = &#39;39&#39;; DROP pinfo; SELECT &#39;FOO&#39; 
</code></pre><p>由於分號是 MySQL 的語句分隔符，資料庫會運行下面三條語句：</p><pre><code>select * from pinfo where product = &#39;39&#39;
DROP pinfo
SELECT &#39;FOO&#39; 
</code></pre><p>好了，你丟失了你的表。</p><p>注意實際上 PHP 和 MySQL 不會運行這種特殊語法，因為 <strong>mysql_query()</strong> 函數只允許每個請求處理一個語句。但是，一個子查詢仍然會生效。</p><p>要防止 SQL 注入攻擊，做這兩件事：</p><ul><li>總是驗證所有參數。例如，如果需要一個數字，就要確保它是一個數字。</li><li>總是對數據使用 mysql_real_escape_string() 函數轉義數據中的任何引號和雙引號。</li></ul><p><strong>注意：要自動轉義任何表單數據，可以啓用魔術引號（Magic Quotes）。</strong></p><p>一些 MySQL 破壞可以通過限制 MySQL 用户權限避免。任何 MySQL 賬户可以限制為只允許對選定的表進行特定類型的查詢。例如，你可以創建只能選擇行的 MySQL 用户。但是，這對於動態數據並不十分有用，另外，如果你有敏感的用户信息，可能某些人能訪問其中一些數據，但你並不希望如此。例如，一個訪問賬户數據的用户可能會嘗試注入訪問另一個人的賬户號碼的代碼，而不是為當前會話指定的號碼。</p><h3 id="防止基本的-xss-攻擊" tabindex="-1">防止基本的 XSS 攻擊 <a class="header-anchor" href="#防止基本的-xss-攻擊" aria-label="Permalink to “防止基本的 XSS 攻擊”">​</a></h3><p>XSS 表示跨站腳本。不像大部分攻擊，該漏洞發生在客户端。XSS 最常見的基本形式是在用户提交的內容中放入 JavaScript 以便偷取用户 cookie 中的數據。由於大部分站點使用 cookie 和 session 驗證訪客，偷取的數據可用於模擬該用户-如果是一個常見的用户賬户就會深受麻煩，如果是管理員賬户甚至是徹底的慘敗。如果你不在站點中使用 cookie 和 session ID，你的用户就不容易被攻擊，但你仍然應該明白這種攻擊是如何工作的。</p><p>不像 MySQL 注入攻擊，XSS 攻擊很難預防。Yahoo、eBay、Apple、以及 Microsoft 都曾經受 XSS 影響。儘管攻擊不包含 PHP，但你可以使用 PHP 來剝離用户數據以防止攻擊。為了防止 XSS 攻擊，你應該限制和過濾用户提交給你站點的數據。正是因為這個原因，大部分在線公告板都不允許在提交的數據中使用 HTML 標籤，而是用自定義的標籤格式代替，例如 <strong>[b]</strong> 和 <strong>[linkto]</strong>。</p><p>讓我們來看一個如何防止這類攻擊的簡單腳本。對於更完善的解決辦法，可以使用 SafeHTML，本文的後面部分會討論到。</p><pre><code>function transform_HTML($string, $length = null) {
// Helps prevent XSS attacks
    // Remove dead space.
    $string = trim($string);
    // Prevent potential Unicode codec problems.
    $string = utf8_decode($string);
    // HTMLize HTML-specific characters.
    $string = htmlentities($string, ENT_NOQUOTES);
    $string = str_replace(&quot;#&quot;, &quot;&amp;#35;&quot;, $string);
    $string = str_replace(&quot;%&quot;, &quot;&amp;#37;&quot;, $string);
    $length = intval($length);
    if ($length &gt; 0) {
        $string = substr($string, 0, $length);
    }
    return $string;
} 
</code></pre><p>這個函數將 HTML 特定的字符轉換為 HTML 字面字符。一個瀏覽器對任何通過這個腳本的 HTML 以非標記的文本呈現。例如，考慮下面的 HTML 字符串：</p><pre><code>&lt;STRONG&gt;Bold Text&lt;/STRONG&gt;
</code></pre><p>一般情況下，HTML 會顯示為：<strong>Bold Text</strong></p><p>但是，通過 <strong>transform_HTML()</strong> 後，它就像原始輸入一樣呈現。原因是處理的字符串中的標籤字符串轉換為 HTML 實體。<strong>transform_HTML()</strong> 的結果字符串的純文本看起來像下面這樣：</p><pre><code>&amp;lt;STRONG&amp;gt;Bold Text&amp;lt;/STRONG&amp;gt; 
</code></pre><p>該函數的實質是 htmlentities() 函數調用，它會將 &lt;、&gt;、和 &amp; 轉換為 <strong>&amp;lt;</strong>、<strong>&amp;gt;</strong>、和 <strong>&amp;amp;</strong>。儘管這會處理大部分的普通攻擊，但有經驗的 XSS 攻擊者有另一種把戲：用十六進制或 UTF-8 編碼惡意腳本，而不是採用普通的 ASCII 文本，從而希望能繞過你的過濾器。他們可以在 URL 的 GET 變量中發送代碼，告訴瀏覽器，“這是十六進制代碼，你能幫我運行嗎？” 一個十六進制例子看起來像這樣：</p><pre><code>&lt;a href=&quot;http://host/a.php?variable=%22%3e %3c%53%43%52%49%50%54%3e%44%6f%73%6f%6d%65%74%68%69%6e%67%6d%61%6c%69%63%69%6f%75%73%3c%2f%53%43%52%49%50%54%3e&quot;&gt; 
</code></pre><p>瀏覽器渲染這個信息的時候，結果就是：</p><pre><code>&lt;a href=&quot;http://host/a.php?variable=&quot;&gt; &lt;SCRIPT&gt;Dosomethingmalicious&lt;/SCRIPT&gt;
</code></pre><p>為了防止這種情況，transform_HTML() 採用額外的步驟把 # 和 % 符號轉換為它們的實體，從而避免十六進制攻擊，並轉換 UTF-8 編碼的數據。</p><p>最後，為了防止某些人用很長的輸入超載字符串從而導致某些東西崩潰，你可以添加一個可選的 $length 參數來截取你指定最大長度的字符串。</p><h3 id="使用-safehtml" tabindex="-1">使用 SafeHTML <a class="header-anchor" href="#使用-safehtml" aria-label="Permalink to “使用 SafeHTML”">​</a></h3><p>之前腳本的問題比較簡單，它不允許任何類型的用户標記。不幸的是，這裏有上百種方法能使 JavaScript 跳過用户的過濾器，並且要從用户輸入中剝離全部 HTML，還沒有方法可以防止這種情況。</p><p>當前，沒有任何一個腳本能保證無法被破解，儘管有一些確實比大部分要好。有白名單和黑名單兩種方法加固安全，白名單比較簡單而且更加有效。</p><p>一個白名單解決方案是 PixelApes 的 SafeHTML 反跨站腳本解析器。</p><p>SafeHTML 能識別有效 HTML，能追蹤並剝離任何危險標籤。它用另一個稱為 HTMLSax 的軟件包進行解析。</p><p>按照下面步驟安裝和使用 SafeHTML：</p>`,69)),r("ol",null,[r("li",null,[e[1]||(e[1]=t("到 ",-1)),a(n,{href:"http://pixel-apes.com/safehtml/?page=safehtml"},{default:o(()=>[...e[0]||(e[0]=[t("http://pixel-apes.com/safehtml/?page=safehtml",-1)])]),_:1}),e[2]||(e[2]=t(" 下載最新版本的 SafeHTML。",-1))]),e[3]||(e[3]=r("li",null,"把文件放到你服務器的類文件夾。該文件夾包括 SafeHTML 和 HTMLSax 功能所需的所有東西。",-1)),e[4]||(e[4]=r("li",null,[t("在腳本中 "),r("code",null,"include"),t(" SafeHTML 類文件（safehtml.php）。")],-1)),e[5]||(e[5]=r("li",null,"創建一個名為 $safehtml 的新 SafeHTML 對象。",-1)),e[6]||(e[6]=r("li",null,"用 $safehtml->parse() 方法清理你的數據。",-1))]),e[30]||(e[30]=r("p",null,"這是一個完整的例子：",-1)),e[31]||(e[31]=r("pre",null,[r("code",null,`<?php
/* If you're storing the HTMLSax3.php in the /classes directory, along
   with the safehtml.php script, define XML_HTMLSAX3 as a null string. */
define(XML_HTMLSAX3, '');
// Include the class file.
require_once('classes/safehtml.php');
// Define some sample bad code.
$data = "This data would raise an alert <script>alert('XSS Attack')<\/script>";
// Create a safehtml object.
$safehtml = new safehtml();
// Parse and sanitize the data.
$safe_data = $safehtml->parse($data);
// Display result.
echo 'The sanitized data is <br />' . $safe_data;
?>
`)],-1)),e[32]||(e[32]=r("p",null,"如果你想清理腳本中的任何其它數據，你不需要創建一個新的對象；在你的整個腳本中只需要使用 $safehtml->parse() 方法。",-1)),e[33]||(e[33]=r("h4",{id:"什麼可能會出現問題",tabindex:"-1"},[t("什麼可能會出現問題？ "),r("a",{class:"header-anchor",href:"#什麼可能會出現問題","aria-label":"Permalink to “什麼可能會出現問題？”"},"​")],-1)),e[34]||(e[34]=r("p",null,"你可能犯的最大錯誤是假設這個類能完全避免 XSS 攻擊。SafeHTML 是一個相當複雜的腳本，幾乎能檢查所有事情，但沒有什麼是能保證的。你仍然需要對你的站點做參數驗證。例如，該類不能檢查給定變量的長度以確保能適應資料庫的字段。它也不檢查緩衝溢出問題。",-1)),r("p",null,[e[8]||(e[8]=t("XSS 攻擊者很有創造力，他們使用各種各樣的方法來嘗試達到他們的目標。可以閲讀 RSnake 的 XSS 教程",-1)),a(n,{href:"http://ha.ckers.org/xss.html"},{default:o(()=>[...e[7]||(e[7]=[t("http://ha.ckers.org/xss.html",-1)])]),_:1}),e[9]||(e[9]=t(" ，看一下這裏有多少種方法嘗試使代碼跳過過濾器。SafeHTML 項目有很好的程序員一直在嘗試阻止 XSS 攻擊，但無法保證某些人不會想起一些奇怪和新奇的方法來跳過過濾器。",-1))]),r("p",null,[r("strong",null,[e[11]||(e[11]=t("注意：XSS 攻擊嚴重影響的一個例子 ",-1)),a(n,{href:"http://namb.la/popular/tech.html"},{default:o(()=>[...e[10]||(e[10]=[t("http://namb.la/popular/tech.html",-1)])]),_:1}),e[12]||(e[12]=t("，其中顯示瞭如何一步一步創建一個讓 MySpace 服務器過載的 JavaScript XSS 蠕蟲。",-1))])]),e[35]||(e[35]=s(`<h3 id="用單向哈希保護數據" tabindex="-1">用單向哈希保護數據 <a class="header-anchor" href="#用單向哈希保護數據" aria-label="Permalink to “用單向哈希保護數據”">​</a></h3><p>該腳本對輸入的數據進行單向轉換，換句話説，它能對某人的密碼產生哈希簽名，但不能解碼獲得原始密碼。為什麼你希望這樣呢？應用程序會存儲密碼。一個管理員不需要知道用户的密碼，事實上，只有用户知道他/她自己的密碼是個好主意。系統（也僅有系統）應該能識別一個正確的密碼；這是 Unix 多年來的密碼安全模型。單向密碼安全按照下面的方式工作：</p><ol><li>當一個用户或管理員創建或更改一個賬户密碼時，系統對密碼進行哈希並保存結果。主機系統會丟棄明文密碼。</li><li>當用户通過任何方式登錄到系統時，再次對輸入的密碼進行哈希。</li><li>主機系統丟棄輸入的明文密碼。</li><li>當前新哈希的密碼和之前保存的哈希相比較。</li><li>如果哈希的密碼相匹配，系統就會授予訪問權限。</li></ol><p>主機系統完成這些並不需要知道原始密碼；事實上，原始密碼完全無所謂。一個副作用是，如果某人侵入系統並盜取了密碼資料庫，入侵者會獲得很多哈希後的密碼，但無法把它們反向轉換為原始密碼。當然，給足夠時間、計算能力，以及弱用户密碼，一個攻擊者還是有可能採用字典攻擊找出密碼。因此，別輕易讓人碰你的密碼資料庫，如果確實有人這樣做了，讓每個用户更改他們的密碼。</p><h4 id="加密-vs-哈希" tabindex="-1">加密 Vs 哈希 <a class="header-anchor" href="#加密-vs-哈希" aria-label="Permalink to “加密 Vs 哈希”">​</a></h4><p>技術上來來説，哈希過程並不是加密。哈希和加密是不同的，這有兩個理由：</p><p>不像加密，哈希數據不能被解密。</p><p>是有可能（但非常罕見）兩個不同的字符串會產生相同的哈希。並不能保證哈希是唯一的，因此別像資料庫中的唯一鍵那樣使用哈希。</p><pre><code>function hash_ish($string) {
    return md5($string);
}
</code></pre><p>上面的 md5() 函數基於 RSA 數據安全公司的消息摘要算法（即 MD5）返回一個由 32 個字符組成的十六進制串。然後你可以將那個 32 位字符串插入到資料庫中和另一個 md5 字符串相比較，或者直接用這 32 個字符。</p><h4 id="破解腳本" tabindex="-1">破解腳本 <a class="header-anchor" href="#破解腳本" aria-label="Permalink to “破解腳本”">​</a></h4><p>幾乎不可能解密 MD5 數據。或者説很難。但是，你仍然需要好的密碼，因為用一整個字典生成哈希資料庫仍然很簡單。有一些在線 MD5 字典，當你輸入 <strong>06d80eb0c50b49a509b49f2424e8c805</strong> 後會得到結果 “dog”。因此，儘管技術上 MD5 不能被解密，這裏仍然有漏洞，如果某人獲得了你的密碼資料庫，你可以肯定他們肯定會使用 MD5 字典破譯。因此，當你創建基於密碼的系統的時候尤其要注意密碼長度（最小 6 個字符，8 個或許會更好）和包括字母和數字。並確保這個密碼不在字典中。</p><h3 id="用-mcrypt-加密數據" tabindex="-1">用 Mcrypt 加密數據 <a class="header-anchor" href="#用-mcrypt-加密數據" aria-label="Permalink to “用 Mcrypt 加密數據”">​</a></h3><p>如果你不需要以可閲讀形式查看密碼，採用 MD5 就足夠了。不幸的是，這裏並不總是有可選項，如果你提供以加密形式存儲某人的信用卡信息，你可能需要在後面的某個地方進行解密。</p><p>最早的一個解決方案是 Mcrypt 模組，這是一個用於允許 PHP 高速加密的插件。Mcrypt 庫提供了超過 30 種用於加密的計算方法，並且提供口令確保只有你（或者你的用户）可以解密數據。</p><p>讓我們來看看使用方法。下面的腳本包含了使用 Mcrypt 加密和解密數據的函數：</p><pre><code>&lt;?php
$data = &quot;Stuff you want encrypted&quot;;
$key = &quot;Secret passphrase used to encrypt your data&quot;;
$cipher = &quot;MCRYPT_SERPENT_256&quot;;
$mode = &quot;MCRYPT_MODE_CBC&quot;;
function encrypt($data, $key, $cipher, $mode) {
// Encrypt data
return (string)
            base64_encode
                (
                mcrypt_encrypt
                    (
                    $cipher,
                    substr(md5($key),0,mcrypt_get_key_size($cipher, $mode)),
                    $data,
                    $mode,
                    substr(md5($key),0,mcrypt_get_block_size($cipher, $mode))
                    )
                );
}
function decrypt($data, $key, $cipher, $mode) {
// Decrypt data
    return (string)
            mcrypt_decrypt
                (
                $cipher,
                substr(md5($key),0,mcrypt_get_key_size($cipher, $mode)),
                base64_decode($data),
                $mode,
                substr(md5($key),0,mcrypt_get_block_size($cipher, $mode))
                );
}
?&gt;
</code></pre><p><strong>mcrypt()</strong> 函數需要幾個信息：</p><ul><li>需要加密的數據</li><li>用於加密和解鎖數據的口令，也稱為鍵。</li><li>用於加密數據的計算方法，也就是用於加密數據的算法。該腳本使用了 <strong>MCRYPT_SERPENT_256</strong>，但你可以從很多算法中選擇，包括 <strong>MCRYPT_TWOFISH192</strong>、<strong>MCRYPT_RC2</strong>、<strong>MCRYPT_DES</strong>、和 <strong>MCRYPT_LOKI97</strong>。</li><li>加密數據的模式。這裏有幾個你可以使用的模式，包括電子密碼本（Electronic Codebook） 和加密反饋（Cipher Feedback）。該腳本使用 <strong>MCRYPT_MODE_CBC</strong> 密碼塊鏈接。</li><li>一個 <strong>初始化向量</strong>-也稱為 IV 或者種子，用於為加密算法設置種子的額外二進制位。也就是使算法更難於破解的額外信息。</li><li>鍵和 IV 字符串的長度，這可能隨着加密和塊而不同。使用 <strong>mcrypt_get_key_size()</strong> 和 <strong>mcrypt_get_block_size()</strong> 函數獲取合適的長度；然後用 <strong>substr()</strong> 函數將鍵的值截取為合適的長度。（如果鍵的長度比要求的短，別擔心，Mcrypt 會用 0 填充。）</li></ul><p>如果有人竊取了你的數據和短語，他們只能一個個嘗試加密算法直到找到正確的那一個。因此，在使用它之前我們通過對鍵使用 <strong>md5()</strong> 函數增加安全，就算他們獲取了數據和短語，入侵者也不能獲得想要的東西。</p><p>入侵者同時需要函數，數據和口令，如果真是如此，他們可能獲得了對你服務器的完整訪問，你只能大清洗了。</p><p>這裏還有一個數據存儲格式的小問題。Mcrypt 以難懂的二進制形式返回加密後的數據，這使得當你將其存儲到 MySQL 字段的時候可能出現可怕錯誤。因此，我們使用 <strong>base64encode()</strong> 和 <strong>base64decode()</strong> 函數轉換為和 SQL 兼容的字母格式和可檢索行。</p><h4 id="破解腳本-1" tabindex="-1">破解腳本 <a class="header-anchor" href="#破解腳本-1" aria-label="Permalink to “破解腳本”">​</a></h4><p>除了實驗多種加密方法，你還可以在腳本中添加一些便利。例如，不用每次都提供鍵和模式，而是在包含的文件中聲明為全局常量。</p><h3 id="生成隨機密碼" tabindex="-1">生成隨機密碼 <a class="header-anchor" href="#生成隨機密碼" aria-label="Permalink to “生成隨機密碼”">​</a></h3><p>隨機（但難以猜測）字符串在用户安全中很重要。例如，如果某人丟失了密碼並且你使用 MD5 哈希，你不可能，也不希望查找回來。而是應該生成一個安全的隨機密碼併發送給用户。為了訪問你站點的服務，另外一個用於生成隨機數字的應用程序會創建有效鏈接。下面是創建密碼的一個函數：</p><pre><code>&lt;?php
 function make_password($num_chars) {
    if ((is_numeric($num_chars)) &amp;&amp;
        ($num_chars &gt; 0) &amp;&amp;
        (! is_null($num_chars))) {
        $password = &#39;&#39;;
        $accepted_chars = &#39;abcdefghijklmnopqrstuvwxyz1234567890&#39;;
        // Seed the generator if necessary.
        srand(((int)((double)microtime()*1000003)) );
        for ($i=0; $i&lt;=$num_chars; $i++) {
            $random_number = rand(0, (strlen($accepted_chars) -1));
            $password .= $accepted_chars[$random_number] ;
        }
        return $password;
     }
}
?&gt; 
</code></pre><h4 id="使用腳本" tabindex="-1">使用腳本 <a class="header-anchor" href="#使用腳本" aria-label="Permalink to “使用腳本”">​</a></h4><p><strong>make_password()</strong> 函數返回一個字符串，因此你需要做的就是提供字符串的長度作為參數：</p><pre><code>&lt;?php
$fifteen_character_password = make_password(15);
?&gt; 
</code></pre><p>函數按照下面步驟工作：</p><ul><li>函數確保 <strong>$num_chars</strong> 是非零的正整數。</li><li>函數初始化 <strong>$accepted_chars</strong> 變量為密碼可能包含的字符列表。該腳本使用所有小寫字母和數字 0 到 9，但你可以使用你喜歡的任何字符集合。（LCTT 譯註：有時候為了便於肉眼識別，你可以將其中的 0 和 O，1 和 l 之類的都去掉。）</li><li>隨機數生成器需要一個種子，從而獲得一系列類隨機值（PHP 4.2 及之後版本中並不需要，會自動播種）。</li><li>函數循環 <strong>$num_chars</strong> 次，每次迭代生成密碼中的一個字符。</li><li>對於每個新字符，腳本查看 <strong>$accepted_chars</strong> 的長度，選擇 0 和長度之間的一個數字，然後添加 <strong>$accepted_chars</strong> 中該數字為索引值的字符到 $password。</li><li>循環結束後，函數返回 <strong>$password</strong>。</li></ul><h3 id="許可證" tabindex="-1">許可證 <a class="header-anchor" href="#許可證" aria-label="Permalink to “許可證”">​</a></h3>`,33)),r("p",null,[e[14]||(e[14]=t("本篇文章，包括相關的源代碼和文件，都是在 ",-1)),a(n,{href:"http://www.codeproject.com/info/cpol10.aspx"},{default:o(()=>[...e[13]||(e[13]=[t("The Code Project Open License (CPOL)",-1)])]),_:1}),e[15]||(e[15]=t(" 協議下發布。",-1))]),e[36]||(e[36]=r("hr",null,null,-1)),r("p",null,[e[17]||(e[17]=t("via: ",-1)),a(n,{href:"http://www.codeproject.com/Articles/363897/PHP-Security"},{default:o(()=>[...e[16]||(e[16]=[t("http://www.codeproject.com/Articles/363897/PHP-Security",-1)])]),_:1})]),r("p",null,[e[21]||(e[21]=t("作者：",-1)),a(n,{href:"http://www.codeproject.com/script/Membership/View.aspx?mid=7483622"},{default:o(()=>[...e[18]||(e[18]=[t("SamarRizvi",-1)])]),_:1}),e[22]||(e[22]=t(" 譯者：",-1)),a(n,{href:"https://github.com/ictlyh"},{default:o(()=>[...e[19]||(e[19]=[t("ictlyh",-1)])]),_:1}),e[23]||(e[23]=t(" 校對：",-1)),a(n,{href:"https://github.com/wxy"},{default:o(()=>[...e[20]||(e[20]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[26]||(e[26]=t("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[24]||(e[24]=[t("LCTT",-1)])]),_:1}),e[27]||(e[27]=t(" 原創翻譯，",-1)),a(n,{href:"https://linux.cn/"},{default:o(()=>[...e[25]||(e[25]=[t("Linux中國",-1)])]),_:1}),e[28]||(e[28]=t(" 榮譽推出",-1))])])}const _=p(g,[["render",u]]);export{P as __pageData,_ as default};
