import{_ as o,a0 as u,w as s,s as a,ao as r,I as t,a1 as e,A as n,x as i}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"PHP 7.0 升級備註 | LCTT x X-CMD","titleTemplate":false,"description":"PHP 7.0 升級備註 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"PHP 7.0 升級備註 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"PHP 7.0 升級備註 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/PHP 7 upgrading","title":"PHP 7.0 升級備註","tag":"201507","desc":""},"relativePath":"201507/PHP 7 upgrading.md","filePath":"[post].md"}'),_={name:"201507/PHP 7 upgrading.md"};function d(f,l,m,g,T,b){const p=u("Link");return s(),a("div",null,[l[88]||(l[88]=r(`<h1 id="php-7-0-升級備註" tabindex="-1">PHP 7.0 升級備註 <a class="header-anchor" href="#php-7-0-升級備註" aria-label="Permalink to “PHP 7.0 升級備註”">​</a></h1><ol><li>向後不兼容的變化</li><li>新功能</li><li>SAPI 模組中的變化</li><li>廢棄的功能</li><li>變化的功能</li><li>新功能</li><li>新的類和接口</li><li>移除的擴展和 SAPI</li><li>擴展的其它變化</li><li>新的全局常量</li><li>INI 文件處理的變化</li><li>Windows 支持</li><li>其它變化</li></ol><p>##1. 向後不兼容的變化</p><p>###語言變化</p><p>####變量處理的變化</p><ul><li><p>間接變量、屬性和方法引用現在以從左到右的語義進行解釋。一些例子：</p><pre><code>  $$foo[&#39;bar&#39;][&#39;baz&#39;] // 解釋做 ($$foo)[&#39;bar&#39;][&#39;baz&#39;]   
	$foo-&gt;$bar[&#39;baz&#39;]   // 解釋做 ($foo-&gt;$bar)[&#39;baz&#39;]
	$foo-&gt;$bar[&#39;baz&#39;]() // 解釋做 ($foo-&gt;$bar)[&#39;baz&#39;]()
	Foo::$bar[&#39;baz&#39;]()  // 解釋做 (Foo::$bar)[&#39;baz&#39;]()
</code></pre><p>要恢復以前的行為，需要顯式地加大括號：</p><pre><code> 	\${$foo[&#39;bar&#39;][&#39;baz&#39;]}
 	$foo-&gt;{$bar[&#39;baz&#39;]}
 	$foo-&gt;{$bar[&#39;baz&#39;]}()
  Foo::{$bar[&#39;baz&#39;]}()
</code></pre></li><li><p>全局關鍵字現在只接受簡單變量。像以前的</p><pre><code> 	global $$foo-&gt;bar;
</code></pre><p>現在要求如下寫法：</p><pre><code>	global \${$foo-&gt;bar};
</code></pre></li><li><p>變量或函數調用的前後加上括號不再有任何影響。例如下列代碼，函數調用結果以引用的方式傳給一個函數</p><pre><code>	function getArray() { return [1, 2, 3]; }

	$last = array_pop(getArray());
	// Strict Standards: 只有變量可以用引用方式傳遞
	$last = array_pop((getArray()));
	// Strict Standards: 只有變量可以用引用方式傳遞
</code></pre><p>現在無論是否使用括號，都會拋出一個嚴格標準錯誤。以前在第二種調用方式下不會有提示。</p></li><li><p>數組元素或對象屬性自動安裝引用順序創建，現在的結果順序將不同。例如：</p><pre><code>	$array = [];
	$array[&quot;a&quot;] =&amp; $array[&quot;b&quot;];
	$array[&quot;b&quot;] = 1;
	var_dump($array);
</code></pre><p>現在結果是 [&quot;a&quot; =&gt; 1, &quot;b&quot; =&gt; 1]，而以前的結果是 [&quot;b&quot; =&gt; 1, &quot;a&quot; =&gt; 1]。</p></li></ul><p>相關的 RFC：</p>`,7)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/uniform_variable_syntax"},{default:n(()=>[...l[0]||(l[0]=[i("https://wiki.php.net/rfc/uniform_variable_syntax",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/abstract_syntax_tree"},{default:n(()=>[...l[1]||(l[1]=[i("https://wiki.php.net/rfc/abstract_syntax_tree",-1)])]),_:1})])]),l[89]||(l[89]=r(`<p>####list() 的變化</p><ul><li><p>list() 不再以反序賦值，例如：</p><pre><code>	list($array[], $array[], $array[]) = [1, 2, 3];
	var_dump($array);
</code></pre><p>現在結果是 $array == [1, 2, 3] ，而不是 [3, 2, 1]。注意僅賦值<strong>順序</strong>變化了，而賦值仍然一致（LCTT 譯註：即以前的 list()行為是從後面的變量開始逐一賦值，這樣對與上述用法就會產生 [3,2,1] 這樣的結果了。）。例如，類似如下的常規用法</p><pre><code>	list($a, $b, $c) = [1, 2, 3];
	// $a = 1; $b = 2; $c = 3;
</code></pre><p>仍然保持當前的行為。</p></li><li><p>不再允許對空的 list() 賦值。如下全是無效的：</p><pre><code>	list() = $a;
	list(,,) = $a;
	list($x, list(), $y) = $a;
</code></pre></li><li><p>list() 不再支持對字符串的拆分（以前也只在某些情況下支持）。如下代碼：</p><pre><code>	$string = &quot;xy&quot;;
	list($x, $y) = $string;
</code></pre><p>現在的結果是： $x == null 和 $y == null （沒有提示），而以前的結果是： $x == &quot;x&quot; 和 $y == &quot;y&quot; 。此外， list() 現在總是可以處理實現了 ArrayAccess 的對象，例如：</p><pre><code>	list($a, $b) = (object) new ArrayObject([0, 1]);
</code></pre><p>現在的結果是： $a == 0 和 $b == 1。 以前 $a 和 $b 都是 null。</p></li></ul><p>相關 RFC:</p>`,3)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/abstract_syntax_tree#changes_to_list"},{default:n(()=>[...l[2]||(l[2]=[i("https://wiki.php.net/rfc/abstract_syntax_tree#changes_to_list",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/fix_list_behavior_inconsistency"},{default:n(()=>[...l[3]||(l[3]=[i("https://wiki.php.net/rfc/fix_list_behavior_inconsistency",-1)])]),_:1})])]),l[90]||(l[90]=r(`<p>####foreach 的變化</p><ul><li><p>foreach() 迭代不再影響數組內部指針，數組指針可通過 current()/next() 等系列的函數訪問。例如：</p><pre><code>	$array = [0, 1, 2];
	foreach ($array as &amp;$val) {
    	var_dump(current($array));
	}
</code></pre><p>現在將指向值 int(0) 三次。以前的輸出是 int(1)、int(2) 和 bool(false)。</p></li><li><p>在對數組按值迭代時，foreach 總是在對數組副本進行操作，在迭代中任何對數組的操作都不會影響到迭代行為。例如：</p><pre><code>	$array = [0, 1, 2];
	$ref =&amp; $array; // Necessary to trigger the old behavior
	foreach ($array as $val) {
    	var_dump($val);
    	unset($array[1]);
	}
</code></pre><p>現在將打印出全部三個元素 (0 1 2)，而以前第二個元素 1 會跳過 (0 2)。</p></li><li><p>在對數組按引用迭代時，對數組的修改將繼續會影響到迭代。不過，現在 PHP 在使用數字作為鍵時可以更好的維護數組內的位置。例如，在按引用迭代過程中添加數組元素：</p><pre><code>	$array = [0];
	foreach ($array as &amp;$val) {
    	var_dump($val);
    	$array[1] = 1;
	}
</code></pre><p>現在迭代會正確的添加了元素。如上代碼輸出是 &quot;int(0) int(1)&quot;，而以前只是 &quot;int(0)&quot;。</p></li><li><p>對普通（不可遍歷的）對象按值或按引用迭代的行為類似於對數組進行按引用迭代。這符合以前的行為，除了如上一點所述的更精確的位置管理的改進。</p></li><li><p>對可遍歷對象的迭代行為保持不變。</p></li></ul>`,2)),t("p",null,[l[5]||(l[5]=i("相關 RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/php7_foreach"},{default:n(()=>[...l[4]||(l[4]=[i("https://wiki.php.net/rfc/php7_foreach",-1)])]),_:1})]),l[91]||(l[91]=r(`<p>####參數處理的變化</p><ul><li><p>不能定義兩個同名的函數參數。例如，下面的方法將會觸發編譯時錯誤：</p><pre><code>	public function foo($a, $b, $unused, $unused) {
    	// ...
	}
</code></pre><p>如上的代碼應該修改使用不同的參數名，如：</p><pre><code>	public function foo($a, $b, $unused1, $unused2) {
    	// ...
	}
</code></pre></li><li><p>func_get_arg() 和 func_get_args() 函數不再返回傳遞給參數的原始值，而是返回其當前值（也許會被修改）。例如：</p><pre><code>	function foo($x) {
    	$x++;
    	var_dump(func_get_arg(0));
	}
	foo(1);
</code></pre><p>將會打印 &quot;2&quot; 而不是 &quot;1&quot;。代碼應該改成僅在調用 func_get_arg(s) 後進行修改操作。</p><pre><code>	function foo($x) {
    	var_dump(func_get_arg(0));
    	$x++;
	}
</code></pre><p>或者應該避免修改參數：</p><pre><code>	function foo($x) {
    	$newX = $x + 1;
    	var_dump(func_get_arg(0));
	}
</code></pre></li><li><p>類似的，異常回溯也不再顯示傳遞給函數的原始值，而是修改後的值。例如：</p><pre><code>	function foo($x) {
    	$x = 42;
    	throw new Exception;
	}
	foo(&quot;string&quot;);
</code></pre><p>現在堆棧跟蹤的結果是：</p><pre><code>	Stack trace:
	#0 file.php(4): foo(42)
  #1 {main}
</code></pre><p>而以前是：</p><pre><code>	Stack trace:
	#0 file.php(4): foo(&#39;string&#39;)
	#1 {main}
</code></pre><p>這並不會影響到你的代碼的運行時行為，值得注意的是在調試時會有所不同。</p><p>同樣的限制也會影響到 debug_backtrace() 及其它檢查函數參數的函數。</p></li></ul>`,2)),t("p",null,[l[7]||(l[7]=i("相關 RFC: ",-1)),e(p,{href:"https://wiki.php.net/phpng"},{default:n(()=>[...l[6]||(l[6]=[i("https://wiki.php.net/phpng",-1)])]),_:1})]),l[92]||(l[92]=r(`<p>####整數處理的變化</p><ul><li><p>無效的八進制表示（包含大於7的數字）現在會產生編譯錯誤。例如，下列代碼不再有效：</p><pre><code>	$i = 0781; // 8 不是一個有效的八進制數字！
</code></pre><p>以前，無效的數字（以及無效數字後的任何數字）會簡單的忽略。以前如上 $i 的值是 7，因為後兩位數字會被悄悄丟棄。</p></li><li><p>二進制以負數鏡像位移現在會拋出一個算術錯誤：</p><pre><code>	var_dump(1 &gt;&gt; -1);
	// ArithmeticError: 以負數進行位移
</code></pre></li><li><p>向左位移的位數超出了整型寬度時，結果總是 0。</p><pre><code>	var_dump(1 &lt;&lt; 64); // int(0)
</code></pre><p>以前上述代碼的結果依賴於所用的 CPU 架構。例如，在 x86（包括 x86-64） 上結果是 int(1)，因為其位移操作數在範圍內。</p></li><li><p>類似的，向右位移的位數超出了整型寬度時，其結果總是 0 或 -1 （依賴於符號）：</p><pre><code>	var_dump(1 &gt;&gt; 64);  // int(0)
	var_dump(-1 &gt;&gt; 64); // int(-1)
</code></pre></li></ul>`,2)),t("p",null,[l[9]||(l[9]=i("相關 RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/integer_semantics"},{default:n(()=>[...l[8]||(l[8]=[i("https://wiki.php.net/rfc/integer_semantics",-1)])]),_:1})]),l[93]||(l[93]=r(`<p>####字符串處理的變化</p><ul><li><p>包含十六進制數字的字符串不會再被當做數字，也不會被特殊處理。參見例子中的新行為：</p><pre><code>	var_dump(&quot;0x123&quot; == &quot;291&quot;);     // bool(false)     (以前是 true)
	var_dump(is_numeric(&quot;0x123&quot;));  // bool(false)     (以前是 true)
	var_dump(&quot;0xe&quot; + &quot;0x1&quot;);        // int(0)          (以前是 16)

	var_dump(substr(&quot;foo&quot;, &quot;0x1&quot;)); // string(3) &quot;foo&quot; (以前是 &quot;oo&quot;)
	// 注意：遇到了一個非正常格式的數字
</code></pre><p>filter_var() 可以用來檢查一個字符串是否包含了十六進制數字，或這個字符串是否能轉換為整數：</p><pre><code>  $str = &quot;0xffff&quot;;
  $int = filter_var($str, FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX);
  if (false === $int) {
  	throw new Exception(&quot;Invalid integer!&quot;);
  }
  var_dump($int); // int(65535)
</code></pre></li><li><p>由於給雙引號字符串和 HERE 文檔增加了 Unicode 碼點轉義格式（Unicode Codepoint Escape Syntax）， 所以帶有無效序列的 &quot;\\u{&quot; 現在會造成錯誤：</p><pre><code>	$str = &quot;\\u{xyz}&quot;; // 致命錯誤：無效的 UTF-8 碼點轉義序列
</code></pre><p>要避免這種情況，需要轉義開頭的反斜槓：</p><pre><code>	$str = &quot;\\\\u{xyz}&quot;; // 正確
</code></pre><p>不過，不跟隨 { 的 &quot;\\u&quot; 不受影響。如下代碼不會生成錯誤，和前面的一樣工作：</p><pre><code>	$str = &quot;\\u202e&quot;; // 正確
</code></pre></li></ul><p>相關 RFC:</p>`,3)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/remove_hex_support_in_numeric_strings"},{default:n(()=>[...l[10]||(l[10]=[i("https://wiki.php.net/rfc/remove_hex_support_in_numeric_strings",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/unicode_escape"},{default:n(()=>[...l[11]||(l[11]=[i("https://wiki.php.net/rfc/unicode_escape",-1)])]),_:1})])]),l[94]||(l[94]=r("<p>####錯誤處理的變化</p><ul><li><p>現在有兩個異常類： Exception 和 Error 。這兩個類都實現了一個新接口： Throwable 。在異常處理代碼中的類型指示也許需要修改來處理這種情況。</p></li><li><p>一些致命錯誤和可恢復的致命錯誤現在改為拋出一個 Error 。由於 Error 是一個獨立於 Exception 的類，這些異常不會被已有的 try/catch 塊捕獲。</p><p>可恢復的致命錯誤被轉換為一個異常，所以它們不能在錯誤處理裏面悄悄的忽略。部分情況下，類型指示失敗不再能忽略。</p></li><li><p>解析錯誤現在會生成一個 Error 擴展的 ParseError 。除了以前的基於返回值 / error_get_last() 的處理，對某些可能無效的代碼的 eval() 的錯誤處理應該改為捕獲 ParseError 。</p></li><li><p>內部類的構造函數在失敗時總是會拋出一個異常。以前一些構造函數會返回 NULL 或一個不可用的對象。</p></li><li><p>一些 E_STRICT 提示的錯誤級別改變了。</p></li></ul><p>相關 RFC:</p>",3)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/engine_exceptions_for_php7"},{default:n(()=>[...l[12]||(l[12]=[i("https://wiki.php.net/rfc/engine_exceptions_for_php7",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/throwable-interface"},{default:n(()=>[...l[13]||(l[13]=[i("https://wiki.php.net/rfc/throwable-interface",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/internal_constructor_behaviour"},{default:n(()=>[...l[14]||(l[14]=[i("https://wiki.php.net/rfc/internal_constructor_behaviour",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/reclassify_e_strict"},{default:n(()=>[...l[15]||(l[15]=[i("https://wiki.php.net/rfc/reclassify_e_strict",-1)])]),_:1})])]),l[95]||(l[95]=t("p",null,"####其它的語言變化",-1)),t("ul",null,[l[22]||(l[22]=r(`<li><p>靜態調用一個不兼容的 $this 上下文的非靜態調用的做法不再支持。這種情況下，$this 是沒有定義的，但是對它的調用是允許的，並帶有一個廢棄提示。例子：</p><pre><code>	class A {
    	public function test() { var_dump($this); }
	}

	// 注意：沒有從類 A 進行擴展
	class B {
    	public function callNonStaticMethodOfA() { A::test(); }
	}

	(new B)-&gt;callNonStaticMethodOfA();

	// 廢棄：非靜態方法 A::test() 不應該被靜態調用
	// 提示：未定義的變量 $this
	NULL
</code></pre><p>注意，這僅出現在來自不兼容上下文的調用上。如果類 B 擴展自類 A ，調用會被允許，沒有任何提示。</p></li><li><p>不能使用下列類名、接口名和特殊名（大小寫敏感）：</p><pre><code>	bool
	int
	float
	string
	null
	false
	true
</code></pre><p>這用於 class/interface/trait 聲明、 class_alias() 和 use 語句中。</p><p>此外，下列類名、接口名和特殊名保留做將來使用，但是使用時尚不會拋出錯誤：</p><pre><code>	resource
	object
	mixed
	numeric
</code></pre></li><li><p>yield 語句結構當用在一個表達式上下文時，不再要求括號。它現在是一個優先級在 “print” 和 “=&gt;” 之間的右結合操作符。在某些情況下這會導致不同的行為，例如：</p><pre><code>	echo yield -1;
	// 以前被解釋如下
	echo (yield) - 1;
	// 現在被解釋如下
	echo yield (-1);

	yield $foo or die;
	// 以前被解釋如下
	yield ($foo or die);
	// 現在被解釋如下
	(yield $foo) or die;
</code></pre><p>這種情況可以通過增加括號來解決。</p></li>`,3)),t("li",null,[l[18]||(l[18]=t("p",null,"移除了 ASP (<%) 和 script (<script language=php>) 標籤。",-1)),t("p",null,[l[17]||(l[17]=i("RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/remove_alternative_php_tags"},{default:n(()=>[...l[16]||(l[16]=[i("https://wiki.php.net/rfc/remove_alternative_php_tags",-1)])]),_:1})])]),l[23]||(l[23]=t("li",null,[t("p",null,"不支持以引用的方式對 new 的結果賦值。")],-1)),t("li",null,[t("p",null,[l[20]||(l[20]=i("不支持對一個來自非兼容的 $this 上下文的非靜態方法的域內調用。細節參見： ",-1)),e(p,{href:"https://wiki.php.net/rfc/incompat_ctx"},{default:n(()=>[...l[19]||(l[19]=[i("https://wiki.php.net/rfc/incompat_ctx",-1)])]),_:1}),l[21]||(l[21]=i(" 。",-1))])]),l[24]||(l[24]=t("li",null,[t("p",null,"不支持 ini 文件中的 # 風格的備註。使用 ; 風格的備註替代。")],-1)),l[25]||(l[25]=t("li",null,[t("p",null,"$HTTP_RAW_POST_DATA 不再可用，使用 php://input 流替代。")],-1))]),l[96]||(l[96]=r("<p>###標準庫的變化</p><ul><li><p>call_user_method() 和 call_user_method_array() 不再存在。</p></li><li><p>在一個輸出緩衝區被創建在輸出緩衝處理器裏時， ob_start() 不再發出 E_ERROR，而是 E_RECOVERABLE_ERROR。</p></li><li><p>改進的 zend_qsort （使用 hybrid 排序算法）性能更好，並改名為 zend_sort。</p></li><li><p>增加靜態排序算法 zend_insert_sort。</p></li><li><p>移除 fpm-fcgi 的 dl() 函數。</p></li><li><p>setcookie() 如果 cookie 名為空會觸發一個 WARNING ，而不是發出一個空的 set-cookie 頭。</p></li></ul><p>###其它</p><ul><li><p>Curl:</p><ul><li>去除對禁用 CURLOPT_SAFE_UPLOAD 選項的支持。所有的 curl 文件上載必須使用 curl_file / CURLFile API。</li></ul></li><li><p>Date:</p><ul><li>從 mktime() 和 gmmktime() 中移除 $is_dst 參數</li></ul></li><li><p>DBA</p><ul><li>如果鍵也沒有出現在 inifile 處理器中，dba_delete() 現在會返回 false。</li></ul></li><li><p>GMP</p><ul><li>現在要求 libgmp 版本 4.2 或更新。</li><li>gmp_setbit() 和 gmp_clrbit() 對於負指標返回 FALSE，和其它的 GMP 函數一致。</li></ul></li><li><p>Intl:</p><ul><li>移除廢棄的別名 datefmt_set_timezone_id() 和 IntlDateFormatter::setTimeZoneID()。替代使用 datefmt_set_timezone() 和 IntlDateFormatter::setTimeZone()。</li></ul></li><li><p>libxml:</p><ul><li>增加 LIBXML_BIGLINES 解析器選項。從 libxml 2.9.0 開始可用，並增加了在錯誤報告中行號大於 16 位的支持。</li></ul></li><li><p>Mcrypt</p><ul><li>移除等同於 mcrypt_generic_deinit() 的廢棄別名 mcrypt_generic_end()。</li><li>移除廢棄的 mcrypt_ecb()、 mcrypt_cbc()、 mcrypt_cfb() 和 mcrypt_ofb() 函數，它們等同於使用 MCRYPT_MODE_* 標誌的 mcrypt_encrypt() 和 mcrypt_decrypt() 。</li></ul></li><li><p>Session</p><ul><li>session_start() 以數組方式接受所有的 INI 設置。例如， [&#39;cache_limiter&#39;=&gt;&#39;private&#39;] 會設置 session.cache_limiter=private 。也支持 &#39;read_and_close&#39; 以在讀取數據後立即關閉會話數據。</li><li>會話保存處理器接受使用 validate_sid() 和 update_timestamp() 來校驗會話 ID 是否存在、更新會話時間戳。對舊式的用户定義的會話保存處理器繼續兼容。</li><li>增加了 SessionUpdateTimestampHandlerInterface 。 validateSid()、 updateTimestamp() 定義在接口裏面。</li><li>session.lazy_write(默認是 On) 的 INI 設置支持僅在會話數據更新時寫入。</li></ul></li><li><p>Opcache</p><ul><li>移除 opcache.load_comments 配置語句。現在文件內備註載入無成本，並且總是啓用的。</li></ul></li><li><p>OpenSSL:</p><ul><li>移除 &quot;rsa_key_size&quot; SSL 上下文選項，按給出的協商的加密算法自動設置適當的大小。</li><li>移除 &quot;CN_match&quot; 和 &quot;SNI_server_name&quot; SSL 上下文選項。使用自動偵測或 &quot;peer_name&quot; 選項替代。</li></ul></li><li><p>PCRE:</p><ul><li>移除對 /e (PREG_REPLACE_EVAL) 修飾符的支持，使用 preg_replace_callback() 替代。</li></ul></li><li><p>PDO_pgsql:</p><ul><li>移除 PGSQL_ATTR_DISABLE_NATIVE_PREPARED_STATEMENT 屬性，等同於 ATTR_EMULATE_PREPARES。</li></ul></li><li><p>Standard:</p><ul><li>移除 setlocale() 中的字符串類目支持。使用 LC_* 常量替代。 instead.</li><li>移除 set_magic_quotes_runtime() 及其別名 magic_quotes_runtime()。</li></ul></li><li><p>JSON:</p><ul><li>拒絕 json_decode 中的 RFC 7159 不兼容數字格式 - 頂層 (07, 0xff, .1, -.1) 和所有層的 ([1.], [1.e1])</li><li>用一個參數調用 json_decode 等價於用空的 PHP 字符串或值調用，轉換為空字符串（NULL, FALSE）的結果是 JSON 格式錯誤。</li></ul></li><li><p>Stream:</p><ul><li>移除 set_socket_blocking() ，等同於其別名 stream_set_blocking()。</li></ul></li><li><p>XSL:</p><ul><li>移除 xsl.security_prefs ini 選項，使用 XsltProcessor::setSecurityPrefs() 替代。</li></ul></li></ul><p>##2. 新功能</p>",5)),t("ul",null,[t("li",null,[l[51]||(l[51]=t("p",null,"Core",-1)),t("ul",null,[t("li",null,[l[27]||(l[27]=i("增加了組式 use 聲明。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/group_use_declarations"},{default:n(()=>[...l[26]||(l[26]=[i("https://wiki.php.net/rfc/group_use_declarations",-1)])]),_:1}),l[28]||(l[28]=i(")",-1))]),t("li",null,[l[30]||(l[30]=i("增加了 null 合併操作符 (??)。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/isset_ternary"},{default:n(()=>[...l[29]||(l[29]=[i("https://wiki.php.net/rfc/isset_ternary",-1)])]),_:1}),l[31]||(l[31]=i(")",-1))]),l[47]||(l[47]=t("li",null,"在 64 位架構上支持長度 >= 2^31 字節的字符串。",-1)),l[48]||(l[48]=t("li",null,"增加了 Closure::call() 方法（僅工作在用户側的類）。",-1)),l[49]||(l[49]=t("li",null,"在雙引號字符串和 here 文檔中增加了 \\u{xxxxxx} Unicode 碼點轉義格式。",-1)),l[50]||(l[50]=t("li",null,"define() 現在支持數組作為常量值，修復了一個當 define() 還不支持數組常量值時的疏忽。",-1)),t("li",null,[l[33]||(l[33]=i("增加了比較操作符 (<=>)，即太空船操作符。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/combined-comparison-operator"},{default:n(()=>[...l[32]||(l[32]=[i("https://wiki.php.net/rfc/combined-comparison-operator",-1)])]),_:1}),l[34]||(l[34]=i(")",-1))]),t("li",null,[l[36]||(l[36]=i("為委託生成器添加了類似協程的 yield from 操作符。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/generator-delegation"},{default:n(()=>[...l[35]||(l[35]=[i("https://wiki.php.net/rfc/generator-delegation",-1)])]),_:1}),l[37]||(l[37]=i(")",-1))]),t("li",null,[l[39]||(l[39]=i("保留的關鍵字現在可以用在幾種新的上下文中。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/context_sensitive_lexer"},{default:n(()=>[...l[38]||(l[38]=[i("https://wiki.php.net/rfc/context_sensitive_lexer",-1)])]),_:1}),l[40]||(l[40]=i(")",-1))]),t("li",null,[l[42]||(l[42]=i("增加了標量類型的聲明支持，並可以使用 declare(strict_types=1) 的聲明嚴格模式。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/scalar_type_hints_v5"},{default:n(()=>[...l[41]||(l[41]=[i("https://wiki.php.net/rfc/scalar_type_hints_v5",-1)])]),_:1}),l[43]||(l[43]=i(")",-1))]),t("li",null,[l[45]||(l[45]=i("增加了對加密級安全的用户側的隨機數發生器的支持。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/easy_userland_csprng"},{default:n(()=>[...l[44]||(l[44]=[i("https://wiki.php.net/rfc/easy_userland_csprng",-1)])]),_:1}),l[46]||(l[46]=i(")",-1))])])]),l[52]||(l[52]=r("<li><p>Opcache</p><ul><li>增加了基於文件的二級 opcode 緩存（實驗性——默認禁用）。要啓用它，PHP 需要使用 --enable-opcache-file 配置和構建，然後 opcache.file_cache=&lt;DIR&gt; 配置指令就可以設置在 php.ini 中。二級緩存也許可以提升服務器重啓或 SHM 重置時的性能。此外，也可以設置 opcache.file_cache_only=1 來使用文件緩存而根本不用 SHM（也許對於共享主機有用）；設置 opcache.file_cache_consistency_checks=0 來禁用文件緩存一致性檢查，以加速載入過程，有安全風險。</li></ul></li><li><p>OpenSSL</p><ul><li>當用 OpenSSL 1.0.2 及更新構建時，增加了 &quot;alpn_protocols&quot; SSL 上下文選項來允許加密的客户端/服務器流使用 ALPN TLS 擴展去協商替代的協議。協商後的協議信息可以通過 stream_get_meta_data() 輸出訪問。</li></ul></li><li><p>Reflection</p><ul><li>增加了一個 ReflectionGenerator 類（yield from Traces，當前文件/行等等）。</li><li>增加了一個 ReflectionType 類來更好的支持新的返回類型和標量類型聲明功能。新的 ReflectionParameter::getType() 和 ReflectionFunctionAbstract::getReturnType() 方法都返回一個 ReflectionType 實例。</li></ul></li><li><p>Stream</p><ul><li>添加了新的僅用於 Windows 的流上下文選項以允許阻塞管道讀取。要啓用該功能，當創建流上下文時，傳遞 array(&quot;pipe&quot; =&gt; array(&quot;blocking&quot; =&gt; true)) 。要注意的是，該選項會導致管道緩衝區的死鎖，然而它在幾個命令列場景中有用。</li></ul></li>",4))]),l[97]||(l[97]=r("<p>##3. SAPI 模組的變化</p><ul><li>FPM <ul><li>修復錯誤 #65933 （不能設置超過1024字節的配置行）。</li><li>Listen = port 現在監聽在所有地址上（IPv6 和 IPv4 映射的）。</li></ul></li></ul><p>##4. 廢棄的功能</p><ul><li><p>Core</p><ul><li>廢棄了 PHP 4 風格的構建函數（即構建函數名必須與類名相同）。</li><li>廢棄了對非靜態方法的靜態調用。</li></ul></li><li><p>OpenSSL</p><ul><li>廢棄了 &quot;capture_session_meta&quot; SSL 上下文選項。 在流資源上活動的加密相關的元數據可以通過 stream_get_meta_data() 的返回值訪問。</li></ul></li></ul><p>##5. 函數的變化</p>",5)),t("ul",null,[l[57]||(l[57]=t("li",null,[t("p",null,"parse_ini_file():")],-1)),l[58]||(l[58]=t("li",null,[t("p",null,"parse_ini_string():"),t("ul",null,[t("li",null,"添加了掃描模式 INI_SCANNER_TYPED 來得到 yield 類型的 .ini 值。")])],-1)),t("li",null,[l[56]||(l[56]=t("p",null,"unserialize():",-1)),t("ul",null,[t("li",null,[l[54]||(l[54]=i("給 unserialize 函數添加了第二個參數 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/secure_unserialize"},{default:n(()=>[...l[53]||(l[53]=[i("https://wiki.php.net/rfc/secure_unserialize",-1)])]),_:1}),l[55]||(l[55]=i(') 來指定可接受的類： unserialize($foo, ["allowed_classes" => ["MyClass", "MyClass2"]]);',-1))])])]),l[59]||(l[59]=r("<li><p>proc_open():</p><ul><li>可以被 proc_open() 使用的最大管道數以前被硬編碼地限制為 16。現在去除了這個限制，只受限於 PHP 的可用內存大小。</li><li>新添加的僅用於 Windows 的配置選項 &quot;blocking_pipes&quot; 可以用於強制阻塞對子進程管道的讀取。這可以用於幾種命令列應用場景，但是它會導致死鎖。此外，這與新的流的管道上下文選項相關。</li></ul></li><li><p>array_column():</p><ul><li>該函數現在支持把對象數組當做二維數組。只有公開屬性會被處理，對象裏面使用 __get() 的動態屬性必須也實現 __isset() 才行。</li></ul></li><li><p>stream_context_create()</p><ul><li>現在可以接受一個僅 Windows 可用的配置 array(&quot;pipe&quot; =&gt; array(&quot;blocking&quot; =&gt; &lt;boolean&gt;)) 來強制阻塞管道讀取。該選項應該小心使用，該平台有可能導致管道緩衝區的死鎖。</li></ul></li>",3))]),l[98]||(l[98]=t("p",null,"##6. 新函數",-1)),t("ul",null,[l[64]||(l[64]=t("li",null,[t("p",null,"GMP"),t("ul",null,[t("li",null,"添加了 gmp_random_seed()。")])],-1)),t("li",null,[l[63]||(l[63]=t("p",null,"PCRE:",-1)),t("ul",null,[t("li",null,[l[61]||(l[61]=i("添加了 preg_replace_callback_array 函數。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/preg_replace_callback_array"},{default:n(()=>[...l[60]||(l[60]=[i("https://wiki.php.net/rfc/preg_replace_callback_array",-1)])]),_:1}),l[62]||(l[62]=i(")",-1))])])]),l[65]||(l[65]=t("li",null,[t("p",null,"Standard . 添加了整數除法 intdiv() 函數。 . 添加了重置錯誤狀態的 error_clear_last() 函數。")],-1)),l[66]||(l[66]=t("li",null,[t("p",null,"Zlib: . 添加了 deflate_init()、 deflate_add()、 inflate_init()、 inflate_add() 函數來運行遞增和流的壓縮/解壓。")],-1))]),l[99]||(l[99]=r("<p>##7. 新的類和接口</p><p>（暫無）</p><p>##8. 移除的擴展和 SAPI</p><ul><li>sapi/aolserver</li><li>sapi/apache</li><li>sapi/apache_hooks</li><li>sapi/apache2filter</li><li>sapi/caudium</li><li>sapi/continuity</li><li>sapi/isapi</li><li>sapi/milter</li><li>sapi/nsapi</li><li>sapi/phttpd</li><li>sapi/pi3web</li><li>sapi/roxen</li><li>sapi/thttpd</li><li>sapi/tux</li><li>sapi/webjames</li><li>ext/mssql</li><li>ext/mysql</li><li>ext/sybase_ct</li><li>ext/ereg</li></ul><p>更多細節參見：</p>",5)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/removal_of_dead_sapis_and_exts"},{default:n(()=>[...l[67]||(l[67]=[i("https://wiki.php.net/rfc/removal_of_dead_sapis_and_exts",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/remove_deprecated_functionality_in_php7"},{default:n(()=>[...l[68]||(l[68]=[i("https://wiki.php.net/rfc/remove_deprecated_functionality_in_php7",-1)])]),_:1})])]),l[100]||(l[100]=r("<p>注意：NSAPI 沒有在 RFC 中投票，不過它會在以後移除。這就是説，它相關的 SDK 今後不可用。</p><p>##9. 擴展的其它變化</p><ul><li>Mhash <ul><li>Mhash 今後不是一個擴展了，使用 function_exists(&quot;mhash&quot;) 來檢查器是否可用。</li></ul></li></ul><p>##10. 新的全局常量</p><ul><li><p>Core . 添加 PHP_INT_MIN</p></li><li><p>Zlib</p><ul><li>添加的這些常量用於控制新的增量deflate_add() 和 inflate_add() 函數的刷新行為：</li><li>ZLIB_NO_FLUSH</li><li>ZLIB_PARTIAL_FLUSH</li><li>ZLIB_SYNC_FLUSH</li><li>ZLIB_FULL_FLUSH</li><li>ZLIB_BLOCK</li><li>ZLIB_FINISH</li></ul></li><li><p>GD</p><ul><li><p>移除了 T1Lib 支持，這樣由於對 T1Lib 的可選依賴，如下將來不可用：</p><p>函數：</p><ul><li>imagepsbbox()</li><li>imagepsencodefont()</li><li>imagepsextendedfont()</li><li>imagepsfreefont()</li><li>imagepsloadfont()</li><li>imagepsslantfont()</li><li>imagepstext()</li></ul><p>資源：</p><ul><li>&#39;gd PS font&#39;</li><li>&#39;gd PS encoding&#39;</li></ul></li></ul></li></ul><p>##11. INI 文件處理的變化</p><ul><li>Core <ul><li>移除了 asp_tags ini 指令。如果啓用它會導致致命錯誤。</li><li>移除了 always_populate_raw_post_data ini 指令。</li></ul></li></ul><p>##12. Windows 支持</p><ul><li><p>Core</p><ul><li>在 64 位系統上支持原生的 64 位整數。</li><li>在 64 位系統上支持大文件。</li><li>支持 getrusage()。</li></ul></li><li><p>ftp</p><ul><li>所帶的 ftp 擴展總是共享庫的。</li><li>對於 SSL 支持，取消了對 openssl 擴展的依賴，取而代之僅依賴 openssl 庫。如果在編譯時需要，會自動啓用 ftp_ssl_connect()。</li></ul></li><li><p>odbc</p><ul><li>所帶的 odbc 擴展總是共享庫的。</li></ul></li></ul><p>##13. 其它變化</p>",10)),t("ul",null,[t("li",null,[l[74]||(l[74]=i("Core ",-1)),t("ul",null,[l[71]||(l[71]=t("li",null,"NaN 和 Infinity 轉換為整數時總是 0，而不是未定義和平台相關的。",-1)),t("li",null,[l[70]||(l[70]=i("對非對象調用方法會觸發一個可捕獲錯誤，而不是致命錯誤；參見： ",-1)),e(p,{href:"https://wiki.php.net/rfc/catchable-call-to-member-of-non-object"},{default:n(()=>[...l[69]||(l[69]=[i("https://wiki.php.net/rfc/catchable-call-to-member-of-non-object",-1)])]),_:1})]),l[72]||(l[72]=t("li",null,'zend_parse_parameters、類型提示和轉換，現在總是用 "integer" 和 "float"，而不是 "long" 和 "double"。',-1)),l[73]||(l[73]=t("li",null,"如果 ignore_user_abort 設置為 true ，對應中斷的連接，輸出緩存會繼續工作。",-1))])])]),l[101]||(l[101]=t("hr",null,null,-1)),t("p",null,[l[76]||(l[76]=i("via: ",-1)),e(p,{href:"https://github.com/php/php-src/blob/php-7.0.0beta1/UPGRADING"},{default:n(()=>[...l[75]||(l[75]=[i("https://github.com/php/php-src/blob/php-7.0.0beta1/UPGRADING",-1)])]),_:1})]),t("p",null,[l[80]||(l[80]=i("作者：",-1)),e(p,{href:"https://github.com/php"},{default:n(()=>[...l[77]||(l[77]=[i("php",-1)])]),_:1}),l[81]||(l[81]=i(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:n(()=>[...l[78]||(l[78]=[i("wxy",-1)])]),_:1}),l[82]||(l[82]=i(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:n(()=>[...l[79]||(l[79]=[i("wxy",-1)])]),_:1})]),t("p",null,[l[85]||(l[85]=i("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...l[83]||(l[83]=[i("LCTT",-1)])]),_:1}),l[86]||(l[86]=i(" 原創翻譯，",-1)),e(p,{href:"https://linux.cn/"},{default:n(()=>[...l[84]||(l[84]=[i("Linux中國",-1)])]),_:1}),l[87]||(l[87]=i(" 榮譽推出",-1))])])}const P=o(_,[["render",d]]);export{y as __pageData,P as default};
