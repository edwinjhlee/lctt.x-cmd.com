import{_ as p,a0 as l,w as i,s as d,ao as s,I as r,x as t,a1 as a,A as o}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const P=JSON.parse('{"title":"PHP 安全编程建议 | LCTT x X-CMD","titleTemplate":false,"description":"PHP 安全编程建议 | LCTT (201507) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"PHP 安全编程建议 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"PHP 安全编程建议 | LCTT (201507) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201507/20150706 PHP Security","title":"PHP 安全编程建议","tag":"201507","desc":""},"relativePath":"201507/20150706 PHP Security.md","filePath":"[post].md"}'),g={name:"201507/20150706 PHP Security.md"};function u(h,e,m,c,f,S){const n=l("Link");return i(),d("div",null,[e[29]||(e[29]=s(`<h1 id="php-安全编程建议" tabindex="-1">PHP 安全编程建议 <a class="header-anchor" href="#php-安全编程建议" aria-label="Permalink to “PHP 安全编程建议”">​</a></h1><p><img src="http://www.codeproject.com/KB/PHP/363897/php_security.jpg" alt=""></p><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to “简介”">​</a></h3><p>要提供互联网服务，当你在开发代码的时候必须时刻保持安全意识。可能大部分 PHP 脚本都对安全问题都不在意，这很大程度上是因为有大量的<em>无经验程序员</em>在使用这门语言。但是，没有理由让你因为对你的代码的不确定性而导致不一致的安全策略。当你在服务器上放任何涉及到钱的东西时，就有可能会有人尝试破解它。创建一个论坛程序或者任何形式的购物车，被攻击的可能性就上升到了无穷大。</p><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to “背景”">​</a></h3><p>为了确保你的 web 内容安全，这里有一些常规的安全准则：</p><h4 id="别相信表单" tabindex="-1">别相信表单 <a class="header-anchor" href="#别相信表单" aria-label="Permalink to “别相信表单”">​</a></h4><p>攻击表单很简单。通过使用一个简单的 JavaScript 技巧，你可以限制你的表单只允许在评分域中填写 1 到 5 的数字。如果有人关闭了他们浏览器的 JavaScript 功能或者提交自定义的表单数据，你客户端的验证就失败了。</p><p>用户主要通过表单参数和你的脚本交互，因此他们是最大的安全风险。你应该学到什么呢？在 PHP 脚本中，总是要验证 传递给任何 PHP 脚本的数据。在本文中，我们向你演示了如何分析和防范跨站脚本（XSS）攻击，它可能会劫持用户凭据（甚至更严重）。你也会看到如何防止会玷污或毁坏你数据的 MySQL 注入攻击。</p><h4 id="别相信用户" tabindex="-1">别相信用户 <a class="header-anchor" href="#别相信用户" aria-label="Permalink to “别相信用户”">​</a></h4><p>假定你网站获取的每一份数据都充满了有害的代码。清理每一部分，即便你相信没有人会尝试攻击你的站点。</p><h4 id="关闭全局变量" tabindex="-1">关闭全局变量 <a class="header-anchor" href="#关闭全局变量" aria-label="Permalink to “关闭全局变量”">​</a></h4><p>你可能会有的最大安全漏洞是启用了 register_globals 配置参数。幸运的是，PHP 4.2 及以后版本默认关闭了这个配置。如果打开了 <strong>register_globals</strong>，你可以在你的 php.ini 文件中通过改变 register_globals 变量为 Off 关闭该功能：</p><pre><code>register_globals = Off 
</code></pre><p>新手程序员觉得注册全局变量很方便，但他们不会意识到这个设置有多么危险。一个启用了全局变量的服务器会自动为全局变量赋任何形式的参数。为了了解它如何工作以及为什么有危险，让我们来看一个例子。</p><p>假设你有一个称为 process.php 的脚本，它会向你的数据库插入表单数据。初始的表单像下面这样：</p><pre><code>&lt;input name=&quot;username&quot; type=&quot;text&quot; size=&quot;15&quot; maxlength=&quot;64&quot;&gt;
</code></pre><p>运行 process.php 的时候，启用了注册全局变量的 PHP 会将该参数赋值到 $username 变量。这会比通过 <strong>$_POST[&#39;username&#39;]</strong> 或 <strong>$_GET[&#39;username&#39;]</strong> 访问它节省击键次数。不幸的是，这也会给你留下安全问题，因为 PHP 会设置该变量的值为通过 GET 或 POST 的参数发送到脚本的任何值，如果你没有显示地初始化该变量并且你不希望任何人去操作它，这就会有一个大问题。</p><p>看下面的脚本，假如 $authorized 变量的值为 true，它会给用户显示通过验证的数据。正常情况下，只有当用户正确通过了这个假想的 authenticated_user() 函数验证，$authorized 变量的值才会被设置为真。但是如果你启用了 <strong>register_globals</strong>，任何人都可以发送一个 GET 参数，例如 authorized=1 去覆盖它：</p><pre><code>&lt;?php
// Define $authorized = true only if user is authenticated
if (authenticated_user()) {
    $authorized = true;
}
?&gt;
</code></pre><p>这个故事的寓意是，你应该从预定义的服务器变量中获取表单数据。所有通过 post 表单传递到你 web 页面的数据都会自动保存到一个称为 <strong>$_POST</strong> 的大数组中，所有的 GET 数据都保存在 <strong>$_GET</strong> 大数组中。文件上传信息保存在一个称为 <strong>$_FILES</strong> 的特殊数据中。另外，还有一个称为 <strong>$_REQUEST</strong> 的复合变量。</p><p>要从一个 POST 方法表单中访问 username 字段，可以使用 <strong>$_POST[&#39;username&#39;]</strong>。如果 username 在 URL 中就使用 <strong>$_GET[&#39;username&#39;]</strong>。如果你不确定值来自哪里，用 <strong>$_REQUEST[&#39;username&#39;]</strong>。</p><pre><code>&lt;?php
$post_value = $_POST[&#39;post_value&#39;];
$get_value = $_GET[&#39;get_value&#39;];
$some_variable = $_REQUEST[&#39;some_value&#39;]; 
?&gt;  
</code></pre><p>$_REQUEST 是 $_GET、$_POST、和 $_COOKIE 数组的结合。如果你有两个或多个值有相同的参数名称，注意 PHP 会使用哪个。默认的顺序是 cookie、POST、然后是 GET。</p><h4 id="推荐安全配置选项" tabindex="-1">推荐安全配置选项 <a class="header-anchor" href="#推荐安全配置选项" aria-label="Permalink to “推荐安全配置选项”">​</a></h4><p>这里有几个会影响安全功能的 PHP 配置设置。下面是一些显然应该用于生产服务器的：</p><ul><li><strong>register_globals</strong> 设置为 off</li><li><strong>safe_mode</strong> 设置为 off</li><li><strong>error_reporting</strong> 设置为 off。如果出现错误了，这会向用户浏览器发送可见的错误报告信息。对于生产服务器，使用错误日志代替。开发服务器如果在防火墙后面就可以启用错误日志。（LCTT 译注：此处据原文逻辑和常识，应该是“开发服务器如果在防火墙后面就可以启用错误报告，即 on。”）</li><li>停用这些函数：system()、exec()、passthru()、shell_exec()、proc_open()、和 popen()。</li><li><strong>open_basedir</strong> 为 /tmp（以便保存会话信息）目录和 web 根目录，以便脚本不能访问这些选定区域外的文件。</li><li><strong>expose_php</strong> 设置为 off。该功能会向 Apache 头添加包含版本号的 PHP 签名。</li><li><strong>allow_url_fopen</strong> 设置为 off。如果你能够注意你代码中访问文件的方式-也就是你验证所有输入参数，这并不严格需要。</li><li><strong>allow_url_include</strong> 设置为 off。对于任何人来说，实在没有明智的理由会想要访问通过 HTTP 包含的文件。</li></ul><p>一般来说，如果你发现想要使用这些功能的代码，你就不应该相信它。尤其要小心会使用类似 system() 函数的代码-它几乎肯定有缺陷。</p><p>启用了这些设置后，让我们来看看一些特定的攻击以及能帮助你保护你服务器的方法。</p><h3 id="sql-注入攻击" tabindex="-1">SQL 注入攻击 <a class="header-anchor" href="#sql-注入攻击" aria-label="Permalink to “SQL 注入攻击”">​</a></h3><p>由于 PHP 传递到 MySQL 数据库的查询语句是用强大的 SQL 编程语言编写的，就有了某些人通过在 web 查询参数中使用 MySQL 语句尝试 SQL 注入攻击的风险。通过在参数中插入有害的 SQL 代码片段，攻击者会尝试进入（或破坏）你的服务器。</p><p>假如说你有一个最终会放入变量 $product 的表单参数，你使用了类似下面的 SQL 语句：</p><pre><code>$sql = &quot;select * from pinfo where product = &#39;$product&#39;&quot;;
</code></pre><p>如果参数是直接从表单中获得的，应该使用 PHP 自带的数据库特定转义函数，类似：</p><pre><code>$sql = &#39;Select * from pinfo where product = &#39;&quot;&#39; 
       mysql_real_escape_string($product) . &#39;&quot;&#39;;
</code></pre><p>如果不这样做的话，有人也许会把下面的代码段放到表单参数中：</p><pre><code>39&#39;; DROP pinfo; SELECT &#39;FOO 
</code></pre><p>那么 $sql 的结果就是：</p><pre><code>select product from pinfo where product = &#39;39&#39;; DROP pinfo; SELECT &#39;FOO&#39; 
</code></pre><p>由于分号是 MySQL 的语句分隔符，数据库会运行下面三条语句：</p><pre><code>select * from pinfo where product = &#39;39&#39;
DROP pinfo
SELECT &#39;FOO&#39; 
</code></pre><p>好了，你丢失了你的表。</p><p>注意实际上 PHP 和 MySQL 不会运行这种特殊语法，因为 <strong>mysql_query()</strong> 函数只允许每个请求处理一个语句。但是，一个子查询仍然会生效。</p><p>要防止 SQL 注入攻击，做这两件事：</p><ul><li>总是验证所有参数。例如，如果需要一个数字，就要确保它是一个数字。</li><li>总是对数据使用 mysql_real_escape_string() 函数转义数据中的任何引号和双引号。</li></ul><p><strong>注意：要自动转义任何表单数据，可以启用魔术引号（Magic Quotes）。</strong></p><p>一些 MySQL 破坏可以通过限制 MySQL 用户权限避免。任何 MySQL 账户可以限制为只允许对选定的表进行特定类型的查询。例如，你可以创建只能选择行的 MySQL 用户。但是，这对于动态数据并不十分有用，另外，如果你有敏感的用户信息，可能某些人能访问其中一些数据，但你并不希望如此。例如，一个访问账户数据的用户可能会尝试注入访问另一个人的账户号码的代码，而不是为当前会话指定的号码。</p><h3 id="防止基本的-xss-攻击" tabindex="-1">防止基本的 XSS 攻击 <a class="header-anchor" href="#防止基本的-xss-攻击" aria-label="Permalink to “防止基本的 XSS 攻击”">​</a></h3><p>XSS 表示跨站脚本。不像大部分攻击，该漏洞发生在客户端。XSS 最常见的基本形式是在用户提交的内容中放入 JavaScript 以便偷取用户 cookie 中的数据。由于大部分站点使用 cookie 和 session 验证访客，偷取的数据可用于模拟该用户-如果是一个常见的用户账户就会深受麻烦，如果是管理员账户甚至是彻底的惨败。如果你不在站点中使用 cookie 和 session ID，你的用户就不容易被攻击，但你仍然应该明白这种攻击是如何工作的。</p><p>不像 MySQL 注入攻击，XSS 攻击很难预防。Yahoo、eBay、Apple、以及 Microsoft 都曾经受 XSS 影响。尽管攻击不包含 PHP，但你可以使用 PHP 来剥离用户数据以防止攻击。为了防止 XSS 攻击，你应该限制和过滤用户提交给你站点的数据。正是因为这个原因，大部分在线公告板都不允许在提交的数据中使用 HTML 标签，而是用自定义的标签格式代替，例如 <strong>[b]</strong> 和 <strong>[linkto]</strong>。</p><p>让我们来看一个如何防止这类攻击的简单脚本。对于更完善的解决办法，可以使用 SafeHTML，本文的后面部分会讨论到。</p><pre><code>function transform_HTML($string, $length = null) {
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
</code></pre><p>这个函数将 HTML 特定的字符转换为 HTML 字面字符。一个浏览器对任何通过这个脚本的 HTML 以非标记的文本呈现。例如，考虑下面的 HTML 字符串：</p><pre><code>&lt;STRONG&gt;Bold Text&lt;/STRONG&gt;
</code></pre><p>一般情况下，HTML 会显示为：<strong>Bold Text</strong></p><p>但是，通过 <strong>transform_HTML()</strong> 后，它就像原始输入一样呈现。原因是处理的字符串中的标签字符串转换为 HTML 实体。<strong>transform_HTML()</strong> 的结果字符串的纯文本看起来像下面这样：</p><pre><code>&amp;lt;STRONG&amp;gt;Bold Text&amp;lt;/STRONG&amp;gt; 
</code></pre><p>该函数的实质是 htmlentities() 函数调用，它会将 &lt;、&gt;、和 &amp; 转换为 <strong>&amp;lt;</strong>、<strong>&amp;gt;</strong>、和 <strong>&amp;amp;</strong>。尽管这会处理大部分的普通攻击，但有经验的 XSS 攻击者有另一种把戏：用十六进制或 UTF-8 编码恶意脚本，而不是采用普通的 ASCII 文本，从而希望能绕过你的过滤器。他们可以在 URL 的 GET 变量中发送代码，告诉浏览器，“这是十六进制代码，你能帮我运行吗？” 一个十六进制例子看起来像这样：</p><pre><code>&lt;a href=&quot;http://host/a.php?variable=%22%3e %3c%53%43%52%49%50%54%3e%44%6f%73%6f%6d%65%74%68%69%6e%67%6d%61%6c%69%63%69%6f%75%73%3c%2f%53%43%52%49%50%54%3e&quot;&gt; 
</code></pre><p>浏览器渲染这个信息的时候，结果就是：</p><pre><code>&lt;a href=&quot;http://host/a.php?variable=&quot;&gt; &lt;SCRIPT&gt;Dosomethingmalicious&lt;/SCRIPT&gt;
</code></pre><p>为了防止这种情况，transform_HTML() 采用额外的步骤把 # 和 % 符号转换为它们的实体，从而避免十六进制攻击，并转换 UTF-8 编码的数据。</p><p>最后，为了防止某些人用很长的输入超载字符串从而导致某些东西崩溃，你可以添加一个可选的 $length 参数来截取你指定最大长度的字符串。</p><h3 id="使用-safehtml" tabindex="-1">使用 SafeHTML <a class="header-anchor" href="#使用-safehtml" aria-label="Permalink to “使用 SafeHTML”">​</a></h3><p>之前脚本的问题比较简单，它不允许任何类型的用户标记。不幸的是，这里有上百种方法能使 JavaScript 跳过用户的过滤器，并且要从用户输入中剥离全部 HTML，还没有方法可以防止这种情况。</p><p>当前，没有任何一个脚本能保证无法被破解，尽管有一些确实比大部分要好。有白名单和黑名单两种方法加固安全，白名单比较简单而且更加有效。</p><p>一个白名单解决方案是 PixelApes 的 SafeHTML 反跨站脚本解析器。</p><p>SafeHTML 能识别有效 HTML，能追踪并剥离任何危险标签。它用另一个称为 HTMLSax 的软件包进行解析。</p><p>按照下面步骤安装和使用 SafeHTML：</p>`,69)),r("ol",null,[r("li",null,[e[1]||(e[1]=t("到 ",-1)),a(n,{href:"http://pixel-apes.com/safehtml/?page=safehtml"},{default:o(()=>[...e[0]||(e[0]=[t("http://pixel-apes.com/safehtml/?page=safehtml",-1)])]),_:1}),e[2]||(e[2]=t(" 下载最新版本的 SafeHTML。",-1))]),e[3]||(e[3]=r("li",null,"把文件放到你服务器的类文件夹。该文件夹包括 SafeHTML 和 HTMLSax 功能所需的所有东西。",-1)),e[4]||(e[4]=r("li",null,[t("在脚本中 "),r("code",null,"include"),t(" SafeHTML 类文件（safehtml.php）。")],-1)),e[5]||(e[5]=r("li",null,"创建一个名为 $safehtml 的新 SafeHTML 对象。",-1)),e[6]||(e[6]=r("li",null,"用 $safehtml->parse() 方法清理你的数据。",-1))]),e[30]||(e[30]=r("p",null,"这是一个完整的例子：",-1)),e[31]||(e[31]=r("pre",null,[r("code",null,`<?php
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
`)],-1)),e[32]||(e[32]=r("p",null,"如果你想清理脚本中的任何其它数据，你不需要创建一个新的对象；在你的整个脚本中只需要使用 $safehtml->parse() 方法。",-1)),e[33]||(e[33]=r("h4",{id:"什么可能会出现问题",tabindex:"-1"},[t("什么可能会出现问题？ "),r("a",{class:"header-anchor",href:"#什么可能会出现问题","aria-label":"Permalink to “什么可能会出现问题？”"},"​")],-1)),e[34]||(e[34]=r("p",null,"你可能犯的最大错误是假设这个类能完全避免 XSS 攻击。SafeHTML 是一个相当复杂的脚本，几乎能检查所有事情，但没有什么是能保证的。你仍然需要对你的站点做参数验证。例如，该类不能检查给定变量的长度以确保能适应数据库的字段。它也不检查缓冲溢出问题。",-1)),r("p",null,[e[8]||(e[8]=t("XSS 攻击者很有创造力，他们使用各种各样的方法来尝试达到他们的目标。可以阅读 RSnake 的 XSS 教程",-1)),a(n,{href:"http://ha.ckers.org/xss.html"},{default:o(()=>[...e[7]||(e[7]=[t("http://ha.ckers.org/xss.html",-1)])]),_:1}),e[9]||(e[9]=t(" ，看一下这里有多少种方法尝试使代码跳过过滤器。SafeHTML 项目有很好的程序员一直在尝试阻止 XSS 攻击，但无法保证某些人不会想起一些奇怪和新奇的方法来跳过过滤器。",-1))]),r("p",null,[r("strong",null,[e[11]||(e[11]=t("注意：XSS 攻击严重影响的一个例子 ",-1)),a(n,{href:"http://namb.la/popular/tech.html"},{default:o(()=>[...e[10]||(e[10]=[t("http://namb.la/popular/tech.html",-1)])]),_:1}),e[12]||(e[12]=t("，其中显示了如何一步一步创建一个让 MySpace 服务器过载的 JavaScript XSS 蠕虫。",-1))])]),e[35]||(e[35]=s(`<h3 id="用单向哈希保护数据" tabindex="-1">用单向哈希保护数据 <a class="header-anchor" href="#用单向哈希保护数据" aria-label="Permalink to “用单向哈希保护数据”">​</a></h3><p>该脚本对输入的数据进行单向转换，换句话说，它能对某人的密码产生哈希签名，但不能解码获得原始密码。为什么你希望这样呢？应用程序会存储密码。一个管理员不需要知道用户的密码，事实上，只有用户知道他/她自己的密码是个好主意。系统（也仅有系统）应该能识别一个正确的密码；这是 Unix 多年来的密码安全模型。单向密码安全按照下面的方式工作：</p><ol><li>当一个用户或管理员创建或更改一个账户密码时，系统对密码进行哈希并保存结果。主机系统会丢弃明文密码。</li><li>当用户通过任何方式登录到系统时，再次对输入的密码进行哈希。</li><li>主机系统丢弃输入的明文密码。</li><li>当前新哈希的密码和之前保存的哈希相比较。</li><li>如果哈希的密码相匹配，系统就会授予访问权限。</li></ol><p>主机系统完成这些并不需要知道原始密码；事实上，原始密码完全无所谓。一个副作用是，如果某人侵入系统并盗取了密码数据库，入侵者会获得很多哈希后的密码，但无法把它们反向转换为原始密码。当然，给足够时间、计算能力，以及弱用户密码，一个攻击者还是有可能采用字典攻击找出密码。因此，别轻易让人碰你的密码数据库，如果确实有人这样做了，让每个用户更改他们的密码。</p><h4 id="加密-vs-哈希" tabindex="-1">加密 Vs 哈希 <a class="header-anchor" href="#加密-vs-哈希" aria-label="Permalink to “加密 Vs 哈希”">​</a></h4><p>技术上来来说，哈希过程并不是加密。哈希和加密是不同的，这有两个理由：</p><p>不像加密，哈希数据不能被解密。</p><p>是有可能（但非常罕见）两个不同的字符串会产生相同的哈希。并不能保证哈希是唯一的，因此别像数据库中的唯一键那样使用哈希。</p><pre><code>function hash_ish($string) {
    return md5($string);
}
</code></pre><p>上面的 md5() 函数基于 RSA 数据安全公司的消息摘要算法（即 MD5）返回一个由 32 个字符组成的十六进制串。然后你可以将那个 32 位字符串插入到数据库中和另一个 md5 字符串相比较，或者直接用这 32 个字符。</p><h4 id="破解脚本" tabindex="-1">破解脚本 <a class="header-anchor" href="#破解脚本" aria-label="Permalink to “破解脚本”">​</a></h4><p>几乎不可能解密 MD5 数据。或者说很难。但是，你仍然需要好的密码，因为用一整个字典生成哈希数据库仍然很简单。有一些在线 MD5 字典，当你输入 <strong>06d80eb0c50b49a509b49f2424e8c805</strong> 后会得到结果 “dog”。因此，尽管技术上 MD5 不能被解密，这里仍然有漏洞，如果某人获得了你的密码数据库，你可以肯定他们肯定会使用 MD5 字典破译。因此，当你创建基于密码的系统的时候尤其要注意密码长度（最小 6 个字符，8 个或许会更好）和包括字母和数字。并确保这个密码不在字典中。</p><h3 id="用-mcrypt-加密数据" tabindex="-1">用 Mcrypt 加密数据 <a class="header-anchor" href="#用-mcrypt-加密数据" aria-label="Permalink to “用 Mcrypt 加密数据”">​</a></h3><p>如果你不需要以可阅读形式查看密码，采用 MD5 就足够了。不幸的是，这里并不总是有可选项，如果你提供以加密形式存储某人的信用卡信息，你可能需要在后面的某个地方进行解密。</p><p>最早的一个解决方案是 Mcrypt 模块，这是一个用于允许 PHP 高速加密的插件。Mcrypt 库提供了超过 30 种用于加密的计算方法，并且提供口令确保只有你（或者你的用户）可以解密数据。</p><p>让我们来看看使用方法。下面的脚本包含了使用 Mcrypt 加密和解密数据的函数：</p><pre><code>&lt;?php
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
</code></pre><p><strong>mcrypt()</strong> 函数需要几个信息：</p><ul><li>需要加密的数据</li><li>用于加密和解锁数据的口令，也称为键。</li><li>用于加密数据的计算方法，也就是用于加密数据的算法。该脚本使用了 <strong>MCRYPT_SERPENT_256</strong>，但你可以从很多算法中选择，包括 <strong>MCRYPT_TWOFISH192</strong>、<strong>MCRYPT_RC2</strong>、<strong>MCRYPT_DES</strong>、和 <strong>MCRYPT_LOKI97</strong>。</li><li>加密数据的模式。这里有几个你可以使用的模式，包括电子密码本（Electronic Codebook） 和加密反馈（Cipher Feedback）。该脚本使用 <strong>MCRYPT_MODE_CBC</strong> 密码块链接。</li><li>一个 <strong>初始化向量</strong>-也称为 IV 或者种子，用于为加密算法设置种子的额外二进制位。也就是使算法更难于破解的额外信息。</li><li>键和 IV 字符串的长度，这可能随着加密和块而不同。使用 <strong>mcrypt_get_key_size()</strong> 和 <strong>mcrypt_get_block_size()</strong> 函数获取合适的长度；然后用 <strong>substr()</strong> 函数将键的值截取为合适的长度。（如果键的长度比要求的短，别担心，Mcrypt 会用 0 填充。）</li></ul><p>如果有人窃取了你的数据和短语，他们只能一个个尝试加密算法直到找到正确的那一个。因此，在使用它之前我们通过对键使用 <strong>md5()</strong> 函数增加安全，就算他们获取了数据和短语，入侵者也不能获得想要的东西。</p><p>入侵者同时需要函数，数据和口令，如果真是如此，他们可能获得了对你服务器的完整访问，你只能大清洗了。</p><p>这里还有一个数据存储格式的小问题。Mcrypt 以难懂的二进制形式返回加密后的数据，这使得当你将其存储到 MySQL 字段的时候可能出现可怕错误。因此，我们使用 <strong>base64encode()</strong> 和 <strong>base64decode()</strong> 函数转换为和 SQL 兼容的字母格式和可检索行。</p><h4 id="破解脚本-1" tabindex="-1">破解脚本 <a class="header-anchor" href="#破解脚本-1" aria-label="Permalink to “破解脚本”">​</a></h4><p>除了实验多种加密方法，你还可以在脚本中添加一些便利。例如，不用每次都提供键和模式，而是在包含的文件中声明为全局常量。</p><h3 id="生成随机密码" tabindex="-1">生成随机密码 <a class="header-anchor" href="#生成随机密码" aria-label="Permalink to “生成随机密码”">​</a></h3><p>随机（但难以猜测）字符串在用户安全中很重要。例如，如果某人丢失了密码并且你使用 MD5 哈希，你不可能，也不希望查找回来。而是应该生成一个安全的随机密码并发送给用户。为了访问你站点的服务，另外一个用于生成随机数字的应用程序会创建有效链接。下面是创建密码的一个函数：</p><pre><code>&lt;?php
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
</code></pre><h4 id="使用脚本" tabindex="-1">使用脚本 <a class="header-anchor" href="#使用脚本" aria-label="Permalink to “使用脚本”">​</a></h4><p><strong>make_password()</strong> 函数返回一个字符串，因此你需要做的就是提供字符串的长度作为参数：</p><pre><code>&lt;?php
$fifteen_character_password = make_password(15);
?&gt; 
</code></pre><p>函数按照下面步骤工作：</p><ul><li>函数确保 <strong>$num_chars</strong> 是非零的正整数。</li><li>函数初始化 <strong>$accepted_chars</strong> 变量为密码可能包含的字符列表。该脚本使用所有小写字母和数字 0 到 9，但你可以使用你喜欢的任何字符集合。（LCTT 译注：有时候为了便于肉眼识别，你可以将其中的 0 和 O，1 和 l 之类的都去掉。）</li><li>随机数生成器需要一个种子，从而获得一系列类随机值（PHP 4.2 及之后版本中并不需要，会自动播种）。</li><li>函数循环 <strong>$num_chars</strong> 次，每次迭代生成密码中的一个字符。</li><li>对于每个新字符，脚本查看 <strong>$accepted_chars</strong> 的长度，选择 0 和长度之间的一个数字，然后添加 <strong>$accepted_chars</strong> 中该数字为索引值的字符到 $password。</li><li>循环结束后，函数返回 <strong>$password</strong>。</li></ul><h3 id="许可证" tabindex="-1">许可证 <a class="header-anchor" href="#许可证" aria-label="Permalink to “许可证”">​</a></h3>`,33)),r("p",null,[e[14]||(e[14]=t("本篇文章，包括相关的源代码和文件，都是在 ",-1)),a(n,{href:"http://www.codeproject.com/info/cpol10.aspx"},{default:o(()=>[...e[13]||(e[13]=[t("The Code Project Open License (CPOL)",-1)])]),_:1}),e[15]||(e[15]=t(" 协议下发布。",-1))]),e[36]||(e[36]=r("hr",null,null,-1)),r("p",null,[e[17]||(e[17]=t("via: ",-1)),a(n,{href:"http://www.codeproject.com/Articles/363897/PHP-Security"},{default:o(()=>[...e[16]||(e[16]=[t("http://www.codeproject.com/Articles/363897/PHP-Security",-1)])]),_:1})]),r("p",null,[e[21]||(e[21]=t("作者：",-1)),a(n,{href:"http://www.codeproject.com/script/Membership/View.aspx?mid=7483622"},{default:o(()=>[...e[18]||(e[18]=[t("SamarRizvi",-1)])]),_:1}),e[22]||(e[22]=t(" 译者：",-1)),a(n,{href:"https://github.com/ictlyh"},{default:o(()=>[...e[19]||(e[19]=[t("ictlyh",-1)])]),_:1}),e[23]||(e[23]=t(" 校对：",-1)),a(n,{href:"https://github.com/wxy"},{default:o(()=>[...e[20]||(e[20]=[t("wxy",-1)])]),_:1})]),r("p",null,[e[26]||(e[26]=t("本文由 ",-1)),a(n,{href:"https://github.com/LCTT/TranslateProject"},{default:o(()=>[...e[24]||(e[24]=[t("LCTT",-1)])]),_:1}),e[27]||(e[27]=t(" 原创翻译，",-1)),a(n,{href:"https://linux.cn/"},{default:o(()=>[...e[25]||(e[25]=[t("Linux中国",-1)])]),_:1}),e[28]||(e[28]=t(" 荣誉推出",-1))])])}const _=p(g,[["render",u]]);export{P as __pageData,_ as default};
