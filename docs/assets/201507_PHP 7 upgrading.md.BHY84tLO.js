import{_ as o,a0 as u,w as s,s as a,ao as r,I as t,a1 as e,A as n,x as i}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const y=JSON.parse('{"title":"PHP 7.0 升级备注 | LCTT x X-CMD","titleTemplate":false,"description":"PHP 7.0 升级备注 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"PHP 7.0 升级备注 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"PHP 7.0 升级备注 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/PHP 7 upgrading","title":"PHP 7.0 升级备注","tag":"201507","desc":""},"relativePath":"201507/PHP 7 upgrading.md","filePath":"[post].md"}'),_={name:"201507/PHP 7 upgrading.md"};function d(f,l,m,g,T,b){const p=u("Link");return s(),a("div",null,[l[88]||(l[88]=r(`<h1 id="php-7-0-升级备注" tabindex="-1">PHP 7.0 升级备注 <a class="header-anchor" href="#php-7-0-升级备注" aria-label="Permalink to “PHP 7.0 升级备注”">​</a></h1><ol><li>向后不兼容的变化</li><li>新功能</li><li>SAPI 模块中的变化</li><li>废弃的功能</li><li>变化的功能</li><li>新功能</li><li>新的类和接口</li><li>移除的扩展和 SAPI</li><li>扩展的其它变化</li><li>新的全局常量</li><li>INI 文件处理的变化</li><li>Windows 支持</li><li>其它变化</li></ol><p>##1. 向后不兼容的变化</p><p>###语言变化</p><p>####变量处理的变化</p><ul><li><p>间接变量、属性和方法引用现在以从左到右的语义进行解释。一些例子：</p><pre><code>  $$foo[&#39;bar&#39;][&#39;baz&#39;] // 解释做 ($$foo)[&#39;bar&#39;][&#39;baz&#39;]   
	$foo-&gt;$bar[&#39;baz&#39;]   // 解释做 ($foo-&gt;$bar)[&#39;baz&#39;]
	$foo-&gt;$bar[&#39;baz&#39;]() // 解释做 ($foo-&gt;$bar)[&#39;baz&#39;]()
	Foo::$bar[&#39;baz&#39;]()  // 解释做 (Foo::$bar)[&#39;baz&#39;]()
</code></pre><p>要恢复以前的行为，需要显式地加大括号：</p><pre><code> 	\${$foo[&#39;bar&#39;][&#39;baz&#39;]}
 	$foo-&gt;{$bar[&#39;baz&#39;]}
 	$foo-&gt;{$bar[&#39;baz&#39;]}()
  Foo::{$bar[&#39;baz&#39;]}()
</code></pre></li><li><p>全局关键字现在只接受简单变量。像以前的</p><pre><code> 	global $$foo-&gt;bar;
</code></pre><p>现在要求如下写法：</p><pre><code>	global \${$foo-&gt;bar};
</code></pre></li><li><p>变量或函数调用的前后加上括号不再有任何影响。例如下列代码，函数调用结果以引用的方式传给一个函数</p><pre><code>	function getArray() { return [1, 2, 3]; }

	$last = array_pop(getArray());
	// Strict Standards: 只有变量可以用引用方式传递
	$last = array_pop((getArray()));
	// Strict Standards: 只有变量可以用引用方式传递
</code></pre><p>现在无论是否使用括号，都会抛出一个严格标准错误。以前在第二种调用方式下不会有提示。</p></li><li><p>数组元素或对象属性自动安装引用顺序创建，现在的结果顺序将不同。例如：</p><pre><code>	$array = [];
	$array[&quot;a&quot;] =&amp; $array[&quot;b&quot;];
	$array[&quot;b&quot;] = 1;
	var_dump($array);
</code></pre><p>现在结果是 [&quot;a&quot; =&gt; 1, &quot;b&quot; =&gt; 1]，而以前的结果是 [&quot;b&quot; =&gt; 1, &quot;a&quot; =&gt; 1]。</p></li></ul><p>相关的 RFC：</p>`,7)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/uniform_variable_syntax"},{default:n(()=>[...l[0]||(l[0]=[i("https://wiki.php.net/rfc/uniform_variable_syntax",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/abstract_syntax_tree"},{default:n(()=>[...l[1]||(l[1]=[i("https://wiki.php.net/rfc/abstract_syntax_tree",-1)])]),_:1})])]),l[89]||(l[89]=r(`<p>####list() 的变化</p><ul><li><p>list() 不再以反序赋值，例如：</p><pre><code>	list($array[], $array[], $array[]) = [1, 2, 3];
	var_dump($array);
</code></pre><p>现在结果是 $array == [1, 2, 3] ，而不是 [3, 2, 1]。注意仅赋值<strong>顺序</strong>变化了，而赋值仍然一致（LCTT 译注：即以前的 list()行为是从后面的变量开始逐一赋值，这样对与上述用法就会产生 [3,2,1] 这样的结果了。）。例如，类似如下的常规用法</p><pre><code>	list($a, $b, $c) = [1, 2, 3];
	// $a = 1; $b = 2; $c = 3;
</code></pre><p>仍然保持当前的行为。</p></li><li><p>不再允许对空的 list() 赋值。如下全是无效的：</p><pre><code>	list() = $a;
	list(,,) = $a;
	list($x, list(), $y) = $a;
</code></pre></li><li><p>list() 不再支持对字符串的拆分（以前也只在某些情况下支持）。如下代码：</p><pre><code>	$string = &quot;xy&quot;;
	list($x, $y) = $string;
</code></pre><p>现在的结果是： $x == null 和 $y == null （没有提示），而以前的结果是： $x == &quot;x&quot; 和 $y == &quot;y&quot; 。此外， list() 现在总是可以处理实现了 ArrayAccess 的对象，例如：</p><pre><code>	list($a, $b) = (object) new ArrayObject([0, 1]);
</code></pre><p>现在的结果是： $a == 0 和 $b == 1。 以前 $a 和 $b 都是 null。</p></li></ul><p>相关 RFC:</p>`,3)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/abstract_syntax_tree#changes_to_list"},{default:n(()=>[...l[2]||(l[2]=[i("https://wiki.php.net/rfc/abstract_syntax_tree#changes_to_list",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/fix_list_behavior_inconsistency"},{default:n(()=>[...l[3]||(l[3]=[i("https://wiki.php.net/rfc/fix_list_behavior_inconsistency",-1)])]),_:1})])]),l[90]||(l[90]=r(`<p>####foreach 的变化</p><ul><li><p>foreach() 迭代不再影响数组内部指针，数组指针可通过 current()/next() 等系列的函数访问。例如：</p><pre><code>	$array = [0, 1, 2];
	foreach ($array as &amp;$val) {
    	var_dump(current($array));
	}
</code></pre><p>现在将指向值 int(0) 三次。以前的输出是 int(1)、int(2) 和 bool(false)。</p></li><li><p>在对数组按值迭代时，foreach 总是在对数组副本进行操作，在迭代中任何对数组的操作都不会影响到迭代行为。例如：</p><pre><code>	$array = [0, 1, 2];
	$ref =&amp; $array; // Necessary to trigger the old behavior
	foreach ($array as $val) {
    	var_dump($val);
    	unset($array[1]);
	}
</code></pre><p>现在将打印出全部三个元素 (0 1 2)，而以前第二个元素 1 会跳过 (0 2)。</p></li><li><p>在对数组按引用迭代时，对数组的修改将继续会影响到迭代。不过，现在 PHP 在使用数字作为键时可以更好的维护数组内的位置。例如，在按引用迭代过程中添加数组元素：</p><pre><code>	$array = [0];
	foreach ($array as &amp;$val) {
    	var_dump($val);
    	$array[1] = 1;
	}
</code></pre><p>现在迭代会正确的添加了元素。如上代码输出是 &quot;int(0) int(1)&quot;，而以前只是 &quot;int(0)&quot;。</p></li><li><p>对普通（不可遍历的）对象按值或按引用迭代的行为类似于对数组进行按引用迭代。这符合以前的行为，除了如上一点所述的更精确的位置管理的改进。</p></li><li><p>对可遍历对象的迭代行为保持不变。</p></li></ul>`,2)),t("p",null,[l[5]||(l[5]=i("相关 RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/php7_foreach"},{default:n(()=>[...l[4]||(l[4]=[i("https://wiki.php.net/rfc/php7_foreach",-1)])]),_:1})]),l[91]||(l[91]=r(`<p>####参数处理的变化</p><ul><li><p>不能定义两个同名的函数参数。例如，下面的方法将会触发编译时错误：</p><pre><code>	public function foo($a, $b, $unused, $unused) {
    	// ...
	}
</code></pre><p>如上的代码应该修改使用不同的参数名，如：</p><pre><code>	public function foo($a, $b, $unused1, $unused2) {
    	// ...
	}
</code></pre></li><li><p>func_get_arg() 和 func_get_args() 函数不再返回传递给参数的原始值，而是返回其当前值（也许会被修改）。例如：</p><pre><code>	function foo($x) {
    	$x++;
    	var_dump(func_get_arg(0));
	}
	foo(1);
</code></pre><p>将会打印 &quot;2&quot; 而不是 &quot;1&quot;。代码应该改成仅在调用 func_get_arg(s) 后进行修改操作。</p><pre><code>	function foo($x) {
    	var_dump(func_get_arg(0));
    	$x++;
	}
</code></pre><p>或者应该避免修改参数：</p><pre><code>	function foo($x) {
    	$newX = $x + 1;
    	var_dump(func_get_arg(0));
	}
</code></pre></li><li><p>类似的，异常回溯也不再显示传递给函数的原始值，而是修改后的值。例如：</p><pre><code>	function foo($x) {
    	$x = 42;
    	throw new Exception;
	}
	foo(&quot;string&quot;);
</code></pre><p>现在堆栈跟踪的结果是：</p><pre><code>	Stack trace:
	#0 file.php(4): foo(42)
  #1 {main}
</code></pre><p>而以前是：</p><pre><code>	Stack trace:
	#0 file.php(4): foo(&#39;string&#39;)
	#1 {main}
</code></pre><p>这并不会影响到你的代码的运行时行为，值得注意的是在调试时会有所不同。</p><p>同样的限制也会影响到 debug_backtrace() 及其它检查函数参数的函数。</p></li></ul>`,2)),t("p",null,[l[7]||(l[7]=i("相关 RFC: ",-1)),e(p,{href:"https://wiki.php.net/phpng"},{default:n(()=>[...l[6]||(l[6]=[i("https://wiki.php.net/phpng",-1)])]),_:1})]),l[92]||(l[92]=r(`<p>####整数处理的变化</p><ul><li><p>无效的八进制表示（包含大于7的数字）现在会产生编译错误。例如，下列代码不再有效：</p><pre><code>	$i = 0781; // 8 不是一个有效的八进制数字！
</code></pre><p>以前，无效的数字（以及无效数字后的任何数字）会简单的忽略。以前如上 $i 的值是 7，因为后两位数字会被悄悄丢弃。</p></li><li><p>二进制以负数镜像位移现在会抛出一个算术错误：</p><pre><code>	var_dump(1 &gt;&gt; -1);
	// ArithmeticError: 以负数进行位移
</code></pre></li><li><p>向左位移的位数超出了整型宽度时，结果总是 0。</p><pre><code>	var_dump(1 &lt;&lt; 64); // int(0)
</code></pre><p>以前上述代码的结果依赖于所用的 CPU 架构。例如，在 x86（包括 x86-64） 上结果是 int(1)，因为其位移操作数在范围内。</p></li><li><p>类似的，向右位移的位数超出了整型宽度时，其结果总是 0 或 -1 （依赖于符号）：</p><pre><code>	var_dump(1 &gt;&gt; 64);  // int(0)
	var_dump(-1 &gt;&gt; 64); // int(-1)
</code></pre></li></ul>`,2)),t("p",null,[l[9]||(l[9]=i("相关 RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/integer_semantics"},{default:n(()=>[...l[8]||(l[8]=[i("https://wiki.php.net/rfc/integer_semantics",-1)])]),_:1})]),l[93]||(l[93]=r(`<p>####字符串处理的变化</p><ul><li><p>包含十六进制数字的字符串不会再被当做数字，也不会被特殊处理。参见例子中的新行为：</p><pre><code>	var_dump(&quot;0x123&quot; == &quot;291&quot;);     // bool(false)     (以前是 true)
	var_dump(is_numeric(&quot;0x123&quot;));  // bool(false)     (以前是 true)
	var_dump(&quot;0xe&quot; + &quot;0x1&quot;);        // int(0)          (以前是 16)

	var_dump(substr(&quot;foo&quot;, &quot;0x1&quot;)); // string(3) &quot;foo&quot; (以前是 &quot;oo&quot;)
	// 注意：遇到了一个非正常格式的数字
</code></pre><p>filter_var() 可以用来检查一个字符串是否包含了十六进制数字，或这个字符串是否能转换为整数：</p><pre><code>  $str = &quot;0xffff&quot;;
  $int = filter_var($str, FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX);
  if (false === $int) {
  	throw new Exception(&quot;Invalid integer!&quot;);
  }
  var_dump($int); // int(65535)
</code></pre></li><li><p>由于给双引号字符串和 HERE 文档增加了 Unicode 码点转义格式（Unicode Codepoint Escape Syntax）， 所以带有无效序列的 &quot;\\u{&quot; 现在会造成错误：</p><pre><code>	$str = &quot;\\u{xyz}&quot;; // 致命错误：无效的 UTF-8 码点转义序列
</code></pre><p>要避免这种情况，需要转义开头的反斜杠：</p><pre><code>	$str = &quot;\\\\u{xyz}&quot;; // 正确
</code></pre><p>不过，不跟随 { 的 &quot;\\u&quot; 不受影响。如下代码不会生成错误，和前面的一样工作：</p><pre><code>	$str = &quot;\\u202e&quot;; // 正确
</code></pre></li></ul><p>相关 RFC:</p>`,3)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/remove_hex_support_in_numeric_strings"},{default:n(()=>[...l[10]||(l[10]=[i("https://wiki.php.net/rfc/remove_hex_support_in_numeric_strings",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/unicode_escape"},{default:n(()=>[...l[11]||(l[11]=[i("https://wiki.php.net/rfc/unicode_escape",-1)])]),_:1})])]),l[94]||(l[94]=r("<p>####错误处理的变化</p><ul><li><p>现在有两个异常类： Exception 和 Error 。这两个类都实现了一个新接口： Throwable 。在异常处理代码中的类型指示也许需要修改来处理这种情况。</p></li><li><p>一些致命错误和可恢复的致命错误现在改为抛出一个 Error 。由于 Error 是一个独立于 Exception 的类，这些异常不会被已有的 try/catch 块捕获。</p><p>可恢复的致命错误被转换为一个异常，所以它们不能在错误处理里面悄悄的忽略。部分情况下，类型指示失败不再能忽略。</p></li><li><p>解析错误现在会生成一个 Error 扩展的 ParseError 。除了以前的基于返回值 / error_get_last() 的处理，对某些可能无效的代码的 eval() 的错误处理应该改为捕获 ParseError 。</p></li><li><p>内部类的构造函数在失败时总是会抛出一个异常。以前一些构造函数会返回 NULL 或一个不可用的对象。</p></li><li><p>一些 E_STRICT 提示的错误级别改变了。</p></li></ul><p>相关 RFC:</p>",3)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/engine_exceptions_for_php7"},{default:n(()=>[...l[12]||(l[12]=[i("https://wiki.php.net/rfc/engine_exceptions_for_php7",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/throwable-interface"},{default:n(()=>[...l[13]||(l[13]=[i("https://wiki.php.net/rfc/throwable-interface",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/internal_constructor_behaviour"},{default:n(()=>[...l[14]||(l[14]=[i("https://wiki.php.net/rfc/internal_constructor_behaviour",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/reclassify_e_strict"},{default:n(()=>[...l[15]||(l[15]=[i("https://wiki.php.net/rfc/reclassify_e_strict",-1)])]),_:1})])]),l[95]||(l[95]=t("p",null,"####其它的语言变化",-1)),t("ul",null,[l[22]||(l[22]=r(`<li><p>静态调用一个不兼容的 $this 上下文的非静态调用的做法不再支持。这种情况下，$this 是没有定义的，但是对它的调用是允许的，并带有一个废弃提示。例子：</p><pre><code>	class A {
    	public function test() { var_dump($this); }
	}

	// 注意：没有从类 A 进行扩展
	class B {
    	public function callNonStaticMethodOfA() { A::test(); }
	}

	(new B)-&gt;callNonStaticMethodOfA();

	// 废弃：非静态方法 A::test() 不应该被静态调用
	// 提示：未定义的变量 $this
	NULL
</code></pre><p>注意，这仅出现在来自不兼容上下文的调用上。如果类 B 扩展自类 A ，调用会被允许，没有任何提示。</p></li><li><p>不能使用下列类名、接口名和特殊名（大小写敏感）：</p><pre><code>	bool
	int
	float
	string
	null
	false
	true
</code></pre><p>这用于 class/interface/trait 声明、 class_alias() 和 use 语句中。</p><p>此外，下列类名、接口名和特殊名保留做将来使用，但是使用时尚不会抛出错误：</p><pre><code>	resource
	object
	mixed
	numeric
</code></pre></li><li><p>yield 语句结构当用在一个表达式上下文时，不再要求括号。它现在是一个优先级在 “print” 和 “=&gt;” 之间的右结合操作符。在某些情况下这会导致不同的行为，例如：</p><pre><code>	echo yield -1;
	// 以前被解释如下
	echo (yield) - 1;
	// 现在被解释如下
	echo yield (-1);

	yield $foo or die;
	// 以前被解释如下
	yield ($foo or die);
	// 现在被解释如下
	(yield $foo) or die;
</code></pre><p>这种情况可以通过增加括号来解决。</p></li>`,3)),t("li",null,[l[18]||(l[18]=t("p",null,"移除了 ASP (<%) 和 script (<script language=php>) 标签。",-1)),t("p",null,[l[17]||(l[17]=i("RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/remove_alternative_php_tags"},{default:n(()=>[...l[16]||(l[16]=[i("https://wiki.php.net/rfc/remove_alternative_php_tags",-1)])]),_:1})])]),l[23]||(l[23]=t("li",null,[t("p",null,"不支持以引用的方式对 new 的结果赋值。")],-1)),t("li",null,[t("p",null,[l[20]||(l[20]=i("不支持对一个来自非兼容的 $this 上下文的非静态方法的域内调用。细节参见： ",-1)),e(p,{href:"https://wiki.php.net/rfc/incompat_ctx"},{default:n(()=>[...l[19]||(l[19]=[i("https://wiki.php.net/rfc/incompat_ctx",-1)])]),_:1}),l[21]||(l[21]=i(" 。",-1))])]),l[24]||(l[24]=t("li",null,[t("p",null,"不支持 ini 文件中的 # 风格的备注。使用 ; 风格的备注替代。")],-1)),l[25]||(l[25]=t("li",null,[t("p",null,"$HTTP_RAW_POST_DATA 不再可用，使用 php://input 流替代。")],-1))]),l[96]||(l[96]=r("<p>###标准库的变化</p><ul><li><p>call_user_method() 和 call_user_method_array() 不再存在。</p></li><li><p>在一个输出缓冲区被创建在输出缓冲处理器里时， ob_start() 不再发出 E_ERROR，而是 E_RECOVERABLE_ERROR。</p></li><li><p>改进的 zend_qsort （使用 hybrid 排序算法）性能更好，并改名为 zend_sort。</p></li><li><p>增加静态排序算法 zend_insert_sort。</p></li><li><p>移除 fpm-fcgi 的 dl() 函数。</p></li><li><p>setcookie() 如果 cookie 名为空会触发一个 WARNING ，而不是发出一个空的 set-cookie 头。</p></li></ul><p>###其它</p><ul><li><p>Curl:</p><ul><li>去除对禁用 CURLOPT_SAFE_UPLOAD 选项的支持。所有的 curl 文件上载必须使用 curl_file / CURLFile API。</li></ul></li><li><p>Date:</p><ul><li>从 mktime() 和 gmmktime() 中移除 $is_dst 参数</li></ul></li><li><p>DBA</p><ul><li>如果键也没有出现在 inifile 处理器中，dba_delete() 现在会返回 false。</li></ul></li><li><p>GMP</p><ul><li>现在要求 libgmp 版本 4.2 或更新。</li><li>gmp_setbit() 和 gmp_clrbit() 对于负指标返回 FALSE，和其它的 GMP 函数一致。</li></ul></li><li><p>Intl:</p><ul><li>移除废弃的别名 datefmt_set_timezone_id() 和 IntlDateFormatter::setTimeZoneID()。替代使用 datefmt_set_timezone() 和 IntlDateFormatter::setTimeZone()。</li></ul></li><li><p>libxml:</p><ul><li>增加 LIBXML_BIGLINES 解析器选项。从 libxml 2.9.0 开始可用，并增加了在错误报告中行号大于 16 位的支持。</li></ul></li><li><p>Mcrypt</p><ul><li>移除等同于 mcrypt_generic_deinit() 的废弃别名 mcrypt_generic_end()。</li><li>移除废弃的 mcrypt_ecb()、 mcrypt_cbc()、 mcrypt_cfb() 和 mcrypt_ofb() 函数，它们等同于使用 MCRYPT_MODE_* 标志的 mcrypt_encrypt() 和 mcrypt_decrypt() 。</li></ul></li><li><p>Session</p><ul><li>session_start() 以数组方式接受所有的 INI 设置。例如， [&#39;cache_limiter&#39;=&gt;&#39;private&#39;] 会设置 session.cache_limiter=private 。也支持 &#39;read_and_close&#39; 以在读取数据后立即关闭会话数据。</li><li>会话保存处理器接受使用 validate_sid() 和 update_timestamp() 来校验会话 ID 是否存在、更新会话时间戳。对旧式的用户定义的会话保存处理器继续兼容。</li><li>增加了 SessionUpdateTimestampHandlerInterface 。 validateSid()、 updateTimestamp() 定义在接口里面。</li><li>session.lazy_write(默认是 On) 的 INI 设置支持仅在会话数据更新时写入。</li></ul></li><li><p>Opcache</p><ul><li>移除 opcache.load_comments 配置语句。现在文件内备注载入无成本，并且总是启用的。</li></ul></li><li><p>OpenSSL:</p><ul><li>移除 &quot;rsa_key_size&quot; SSL 上下文选项，按给出的协商的加密算法自动设置适当的大小。</li><li>移除 &quot;CN_match&quot; 和 &quot;SNI_server_name&quot; SSL 上下文选项。使用自动侦测或 &quot;peer_name&quot; 选项替代。</li></ul></li><li><p>PCRE:</p><ul><li>移除对 /e (PREG_REPLACE_EVAL) 修饰符的支持，使用 preg_replace_callback() 替代。</li></ul></li><li><p>PDO_pgsql:</p><ul><li>移除 PGSQL_ATTR_DISABLE_NATIVE_PREPARED_STATEMENT 属性，等同于 ATTR_EMULATE_PREPARES。</li></ul></li><li><p>Standard:</p><ul><li>移除 setlocale() 中的字符串类目支持。使用 LC_* 常量替代。 instead.</li><li>移除 set_magic_quotes_runtime() 及其别名 magic_quotes_runtime()。</li></ul></li><li><p>JSON:</p><ul><li>拒绝 json_decode 中的 RFC 7159 不兼容数字格式 - 顶层 (07, 0xff, .1, -.1) 和所有层的 ([1.], [1.e1])</li><li>用一个参数调用 json_decode 等价于用空的 PHP 字符串或值调用，转换为空字符串（NULL, FALSE）的结果是 JSON 格式错误。</li></ul></li><li><p>Stream:</p><ul><li>移除 set_socket_blocking() ，等同于其别名 stream_set_blocking()。</li></ul></li><li><p>XSL:</p><ul><li>移除 xsl.security_prefs ini 选项，使用 XsltProcessor::setSecurityPrefs() 替代。</li></ul></li></ul><p>##2. 新功能</p>",5)),t("ul",null,[t("li",null,[l[51]||(l[51]=t("p",null,"Core",-1)),t("ul",null,[t("li",null,[l[27]||(l[27]=i("增加了组式 use 声明。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/group_use_declarations"},{default:n(()=>[...l[26]||(l[26]=[i("https://wiki.php.net/rfc/group_use_declarations",-1)])]),_:1}),l[28]||(l[28]=i(")",-1))]),t("li",null,[l[30]||(l[30]=i("增加了 null 合并操作符 (??)。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/isset_ternary"},{default:n(()=>[...l[29]||(l[29]=[i("https://wiki.php.net/rfc/isset_ternary",-1)])]),_:1}),l[31]||(l[31]=i(")",-1))]),l[47]||(l[47]=t("li",null,"在 64 位架构上支持长度 >= 2^31 字节的字符串。",-1)),l[48]||(l[48]=t("li",null,"增加了 Closure::call() 方法（仅工作在用户侧的类）。",-1)),l[49]||(l[49]=t("li",null,"在双引号字符串和 here 文档中增加了 \\u{xxxxxx} Unicode 码点转义格式。",-1)),l[50]||(l[50]=t("li",null,"define() 现在支持数组作为常量值，修复了一个当 define() 还不支持数组常量值时的疏忽。",-1)),t("li",null,[l[33]||(l[33]=i("增加了比较操作符 (<=>)，即太空船操作符。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/combined-comparison-operator"},{default:n(()=>[...l[32]||(l[32]=[i("https://wiki.php.net/rfc/combined-comparison-operator",-1)])]),_:1}),l[34]||(l[34]=i(")",-1))]),t("li",null,[l[36]||(l[36]=i("为委托生成器添加了类似协程的 yield from 操作符。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/generator-delegation"},{default:n(()=>[...l[35]||(l[35]=[i("https://wiki.php.net/rfc/generator-delegation",-1)])]),_:1}),l[37]||(l[37]=i(")",-1))]),t("li",null,[l[39]||(l[39]=i("保留的关键字现在可以用在几种新的上下文中。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/context_sensitive_lexer"},{default:n(()=>[...l[38]||(l[38]=[i("https://wiki.php.net/rfc/context_sensitive_lexer",-1)])]),_:1}),l[40]||(l[40]=i(")",-1))]),t("li",null,[l[42]||(l[42]=i("增加了标量类型的声明支持，并可以使用 declare(strict_types=1) 的声明严格模式。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/scalar_type_hints_v5"},{default:n(()=>[...l[41]||(l[41]=[i("https://wiki.php.net/rfc/scalar_type_hints_v5",-1)])]),_:1}),l[43]||(l[43]=i(")",-1))]),t("li",null,[l[45]||(l[45]=i("增加了对加密级安全的用户侧的随机数发生器的支持。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/easy_userland_csprng"},{default:n(()=>[...l[44]||(l[44]=[i("https://wiki.php.net/rfc/easy_userland_csprng",-1)])]),_:1}),l[46]||(l[46]=i(")",-1))])])]),l[52]||(l[52]=r("<li><p>Opcache</p><ul><li>增加了基于文件的二级 opcode 缓存（实验性——默认禁用）。要启用它，PHP 需要使用 --enable-opcache-file 配置和构建，然后 opcache.file_cache=&lt;DIR&gt; 配置指令就可以设置在 php.ini 中。二级缓存也许可以提升服务器重启或 SHM 重置时的性能。此外，也可以设置 opcache.file_cache_only=1 来使用文件缓存而根本不用 SHM（也许对于共享主机有用）；设置 opcache.file_cache_consistency_checks=0 来禁用文件缓存一致性检查，以加速载入过程，有安全风险。</li></ul></li><li><p>OpenSSL</p><ul><li>当用 OpenSSL 1.0.2 及更新构建时，增加了 &quot;alpn_protocols&quot; SSL 上下文选项来允许加密的客户端/服务器流使用 ALPN TLS 扩展去协商替代的协议。协商后的协议信息可以通过 stream_get_meta_data() 输出访问。</li></ul></li><li><p>Reflection</p><ul><li>增加了一个 ReflectionGenerator 类（yield from Traces，当前文件/行等等）。</li><li>增加了一个 ReflectionType 类来更好的支持新的返回类型和标量类型声明功能。新的 ReflectionParameter::getType() 和 ReflectionFunctionAbstract::getReturnType() 方法都返回一个 ReflectionType 实例。</li></ul></li><li><p>Stream</p><ul><li>添加了新的仅用于 Windows 的流上下文选项以允许阻塞管道读取。要启用该功能，当创建流上下文时，传递 array(&quot;pipe&quot; =&gt; array(&quot;blocking&quot; =&gt; true)) 。要注意的是，该选项会导致管道缓冲区的死锁，然而它在几个命令行场景中有用。</li></ul></li>",4))]),l[97]||(l[97]=r("<p>##3. SAPI 模块的变化</p><ul><li>FPM <ul><li>修复错误 #65933 （不能设置超过1024字节的配置行）。</li><li>Listen = port 现在监听在所有地址上（IPv6 和 IPv4 映射的）。</li></ul></li></ul><p>##4. 废弃的功能</p><ul><li><p>Core</p><ul><li>废弃了 PHP 4 风格的构建函数（即构建函数名必须与类名相同）。</li><li>废弃了对非静态方法的静态调用。</li></ul></li><li><p>OpenSSL</p><ul><li>废弃了 &quot;capture_session_meta&quot; SSL 上下文选项。 在流资源上活动的加密相关的元数据可以通过 stream_get_meta_data() 的返回值访问。</li></ul></li></ul><p>##5. 函数的变化</p>",5)),t("ul",null,[l[57]||(l[57]=t("li",null,[t("p",null,"parse_ini_file():")],-1)),l[58]||(l[58]=t("li",null,[t("p",null,"parse_ini_string():"),t("ul",null,[t("li",null,"添加了扫描模式 INI_SCANNER_TYPED 来得到 yield 类型的 .ini 值。")])],-1)),t("li",null,[l[56]||(l[56]=t("p",null,"unserialize():",-1)),t("ul",null,[t("li",null,[l[54]||(l[54]=i("给 unserialize 函数添加了第二个参数 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/secure_unserialize"},{default:n(()=>[...l[53]||(l[53]=[i("https://wiki.php.net/rfc/secure_unserialize",-1)])]),_:1}),l[55]||(l[55]=i(') 来指定可接受的类： unserialize($foo, ["allowed_classes" => ["MyClass", "MyClass2"]]);',-1))])])]),l[59]||(l[59]=r("<li><p>proc_open():</p><ul><li>可以被 proc_open() 使用的最大管道数以前被硬编码地限制为 16。现在去除了这个限制，只受限于 PHP 的可用内存大小。</li><li>新添加的仅用于 Windows 的配置选项 &quot;blocking_pipes&quot; 可以用于强制阻塞对子进程管道的读取。这可以用于几种命令行应用场景，但是它会导致死锁。此外，这与新的流的管道上下文选项相关。</li></ul></li><li><p>array_column():</p><ul><li>该函数现在支持把对象数组当做二维数组。只有公开属性会被处理，对象里面使用 __get() 的动态属性必须也实现 __isset() 才行。</li></ul></li><li><p>stream_context_create()</p><ul><li>现在可以接受一个仅 Windows 可用的配置 array(&quot;pipe&quot; =&gt; array(&quot;blocking&quot; =&gt; &lt;boolean&gt;)) 来强制阻塞管道读取。该选项应该小心使用，该平台有可能导致管道缓冲区的死锁。</li></ul></li>",3))]),l[98]||(l[98]=t("p",null,"##6. 新函数",-1)),t("ul",null,[l[64]||(l[64]=t("li",null,[t("p",null,"GMP"),t("ul",null,[t("li",null,"添加了 gmp_random_seed()。")])],-1)),t("li",null,[l[63]||(l[63]=t("p",null,"PCRE:",-1)),t("ul",null,[t("li",null,[l[61]||(l[61]=i("添加了 preg_replace_callback_array 函数。 (RFC: ",-1)),e(p,{href:"https://wiki.php.net/rfc/preg_replace_callback_array"},{default:n(()=>[...l[60]||(l[60]=[i("https://wiki.php.net/rfc/preg_replace_callback_array",-1)])]),_:1}),l[62]||(l[62]=i(")",-1))])])]),l[65]||(l[65]=t("li",null,[t("p",null,"Standard . 添加了整数除法 intdiv() 函数。 . 添加了重置错误状态的 error_clear_last() 函数。")],-1)),l[66]||(l[66]=t("li",null,[t("p",null,"Zlib: . 添加了 deflate_init()、 deflate_add()、 inflate_init()、 inflate_add() 函数来运行递增和流的压缩/解压。")],-1))]),l[99]||(l[99]=r("<p>##7. 新的类和接口</p><p>（暂无）</p><p>##8. 移除的扩展和 SAPI</p><ul><li>sapi/aolserver</li><li>sapi/apache</li><li>sapi/apache_hooks</li><li>sapi/apache2filter</li><li>sapi/caudium</li><li>sapi/continuity</li><li>sapi/isapi</li><li>sapi/milter</li><li>sapi/nsapi</li><li>sapi/phttpd</li><li>sapi/pi3web</li><li>sapi/roxen</li><li>sapi/thttpd</li><li>sapi/tux</li><li>sapi/webjames</li><li>ext/mssql</li><li>ext/mysql</li><li>ext/sybase_ct</li><li>ext/ereg</li></ul><p>更多细节参见：</p>",5)),t("ul",null,[t("li",null,[e(p,{href:"https://wiki.php.net/rfc/removal_of_dead_sapis_and_exts"},{default:n(()=>[...l[67]||(l[67]=[i("https://wiki.php.net/rfc/removal_of_dead_sapis_and_exts",-1)])]),_:1})]),t("li",null,[e(p,{href:"https://wiki.php.net/rfc/remove_deprecated_functionality_in_php7"},{default:n(()=>[...l[68]||(l[68]=[i("https://wiki.php.net/rfc/remove_deprecated_functionality_in_php7",-1)])]),_:1})])]),l[100]||(l[100]=r("<p>注意：NSAPI 没有在 RFC 中投票，不过它会在以后移除。这就是说，它相关的 SDK 今后不可用。</p><p>##9. 扩展的其它变化</p><ul><li>Mhash <ul><li>Mhash 今后不是一个扩展了，使用 function_exists(&quot;mhash&quot;) 来检查器是否可用。</li></ul></li></ul><p>##10. 新的全局常量</p><ul><li><p>Core . 添加 PHP_INT_MIN</p></li><li><p>Zlib</p><ul><li>添加的这些常量用于控制新的增量deflate_add() 和 inflate_add() 函数的刷新行为：</li><li>ZLIB_NO_FLUSH</li><li>ZLIB_PARTIAL_FLUSH</li><li>ZLIB_SYNC_FLUSH</li><li>ZLIB_FULL_FLUSH</li><li>ZLIB_BLOCK</li><li>ZLIB_FINISH</li></ul></li><li><p>GD</p><ul><li><p>移除了 T1Lib 支持，这样由于对 T1Lib 的可选依赖，如下将来不可用：</p><p>函数：</p><ul><li>imagepsbbox()</li><li>imagepsencodefont()</li><li>imagepsextendedfont()</li><li>imagepsfreefont()</li><li>imagepsloadfont()</li><li>imagepsslantfont()</li><li>imagepstext()</li></ul><p>资源：</p><ul><li>&#39;gd PS font&#39;</li><li>&#39;gd PS encoding&#39;</li></ul></li></ul></li></ul><p>##11. INI 文件处理的变化</p><ul><li>Core <ul><li>移除了 asp_tags ini 指令。如果启用它会导致致命错误。</li><li>移除了 always_populate_raw_post_data ini 指令。</li></ul></li></ul><p>##12. Windows 支持</p><ul><li><p>Core</p><ul><li>在 64 位系统上支持原生的 64 位整数。</li><li>在 64 位系统上支持大文件。</li><li>支持 getrusage()。</li></ul></li><li><p>ftp</p><ul><li>所带的 ftp 扩展总是共享库的。</li><li>对于 SSL 支持，取消了对 openssl 扩展的依赖，取而代之仅依赖 openssl 库。如果在编译时需要，会自动启用 ftp_ssl_connect()。</li></ul></li><li><p>odbc</p><ul><li>所带的 odbc 扩展总是共享库的。</li></ul></li></ul><p>##13. 其它变化</p>",10)),t("ul",null,[t("li",null,[l[74]||(l[74]=i("Core ",-1)),t("ul",null,[l[71]||(l[71]=t("li",null,"NaN 和 Infinity 转换为整数时总是 0，而不是未定义和平台相关的。",-1)),t("li",null,[l[70]||(l[70]=i("对非对象调用方法会触发一个可捕获错误，而不是致命错误；参见： ",-1)),e(p,{href:"https://wiki.php.net/rfc/catchable-call-to-member-of-non-object"},{default:n(()=>[...l[69]||(l[69]=[i("https://wiki.php.net/rfc/catchable-call-to-member-of-non-object",-1)])]),_:1})]),l[72]||(l[72]=t("li",null,'zend_parse_parameters、类型提示和转换，现在总是用 "integer" 和 "float"，而不是 "long" 和 "double"。',-1)),l[73]||(l[73]=t("li",null,"如果 ignore_user_abort 设置为 true ，对应中断的连接，输出缓存会继续工作。",-1))])])]),l[101]||(l[101]=t("hr",null,null,-1)),t("p",null,[l[76]||(l[76]=i("via: ",-1)),e(p,{href:"https://github.com/php/php-src/blob/php-7.0.0beta1/UPGRADING"},{default:n(()=>[...l[75]||(l[75]=[i("https://github.com/php/php-src/blob/php-7.0.0beta1/UPGRADING",-1)])]),_:1})]),t("p",null,[l[80]||(l[80]=i("作者：",-1)),e(p,{href:"https://github.com/php"},{default:n(()=>[...l[77]||(l[77]=[i("php",-1)])]),_:1}),l[81]||(l[81]=i(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:n(()=>[...l[78]||(l[78]=[i("wxy",-1)])]),_:1}),l[82]||(l[82]=i(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:n(()=>[...l[79]||(l[79]=[i("wxy",-1)])]),_:1})]),t("p",null,[l[85]||(l[85]=i("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:n(()=>[...l[83]||(l[83]=[i("LCTT",-1)])]),_:1}),l[86]||(l[86]=i(" 原创翻译，",-1)),e(p,{href:"https://linux.cn/"},{default:n(()=>[...l[84]||(l[84]=[i("Linux中国",-1)])]),_:1}),l[87]||(l[87]=i(" 荣誉推出",-1))])])}const P=o(_,[["render",d]]);export{y as __pageData,P as default};
