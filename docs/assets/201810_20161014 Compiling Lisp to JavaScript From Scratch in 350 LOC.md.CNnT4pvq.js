import{_ as l,a0 as r,w as o,s as c,I as p,x as a,a1 as e,A as i,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const x=JSON.parse('{"title":"用 350 行代码从零开始，将 Lisp 编译成 JavaScript | LCTT x X-CMD","titleTemplate":false,"description":"用 350 行代码从零开始，将 Lisp 编译成 JavaScript | LCTT (201810) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 350 行代码从零开始，将 Lisp 编译成 JavaScript | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 350 行代码从零开始，将 Lisp 编译成 JavaScript | LCTT (201810) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201810/20161014 Compiling Lisp to JavaScript From Scratch in 350 LOC","title":"用 350 行代码从零开始，将 Lisp 编译成 JavaScript","tag":"201810","desc":""},"relativePath":"201810/20161014 Compiling Lisp to JavaScript From Scratch in 350 LOC.md","filePath":"[post].md"}'),d={name:"201810/20161014 Compiling Lisp to JavaScript From Scratch in 350 LOC.md"};function g(h,s,u,b,k,m){const n=r("Link");return o(),c("div",null,[s[26]||(s[26]=p("h1",{id:"用-350-行代码从零开始-将-lisp-编译成-javascript",tabindex:"-1"},[a("用 350 行代码从零开始，将 Lisp 编译成 JavaScript "),p("a",{class:"header-anchor",href:"#用-350-行代码从零开始-将-lisp-编译成-javascript","aria-label":"Permalink to “用 350 行代码从零开始，将 Lisp 编译成 JavaScript”"},"​")],-1)),p("p",null,[s[1]||(s[1]=a("我们将会在本篇文章中看到从零开始实现的编译器，将简单的类 LISP 计算语言编译成 JavaScript。完整的源代码在 ",-1)),e(n,{href:"https://gist.github.com/soupi/d4ff0727ccb739045fad6cdf533ca7dd"},{default:i(()=>[...s[0]||(s[0]=[a("这里",-1)])]),_:1}),s[2]||(s[2]=a("。",-1))]),s[27]||(s[27]=t(`<p>我们将会：</p><ol><li>自定义语言，并用它编写一个简单的程序</li><li>实现一个简单的解析器组合器</li><li>为该语言实现一个解析器</li><li>为该语言实现一个美观的打印器</li><li>为我们的用途定义 JavaScript 的一个子集</li><li>实现代码转译器，将代码转译成我们定义的 JavaScript 子集</li><li>把所有东西整合在一起</li></ol><p>开始吧！</p><h3 id="_1、定义语言" tabindex="-1">1、定义语言 <a class="header-anchor" href="#_1、定义语言" aria-label="Permalink to “1、定义语言”">​</a></h3><p>Lisp 族语言最迷人的地方在于，它们的语法就是树状表示的，这就是这门语言很容易解析的原因。我们很快就能接触到它。但首先让我们把自己的语言定义好。关于我们语言的语法的范式（BNF）描述如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>program ::= expr</span></span>
<span class="line"><span>expr ::= &lt;integer&gt; | &lt;name&gt; | ([&lt;expr&gt;])</span></span></code></pre></div><p>基本上，我们可以在该语言的最顶层定义表达式并对其进行运算。表达式由一个整数（比如 <code>5</code>）、一个变量（比如 <code>x</code>）或者一个表达式列表（比如 <code>(add x 1)</code>）组成。</p><p>整数对应它本身的值，变量对应它在当前环境中绑定的值，表达式列表对应一个函数调用，该列表的第一个参数是相应的函数，剩下的表达式是传递给这个函数的参数。</p><p>该语言中，我们保留一些内建的特殊形式，这样我们就能做一些更有意思的事情：</p><ul><li><code>let</code> 表达式使我们可以在它的 <code>body</code> 环境中引入新的变量。语法如下：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let ::= (let ([&lt;letarg&gt;]) &lt;body&gt;)</span></span>
<span class="line"><span>letargs ::= (&lt;name&gt; &lt;expr&gt;)</span></span>
<span class="line"><span>body ::= &lt;expr&gt;</span></span></code></pre></div><ul><li><code>lambda</code> 表达式：也就是匿名函数定义。语法如下：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lambda ::= (lambda ([&lt;name&gt;]) &lt;body&gt;)</span></span></code></pre></div><p>还有一些内建函数： <code>add</code>、<code>mul</code>、<code>sub</code>、<code>div</code> 和 <code>print</code>。</p><p>让我们看看用我们这门语言编写的入门示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(let</span></span>
<span class="line"><span>  ((compose</span></span>
<span class="line"><span>    (lambda (f g)</span></span>
<span class="line"><span>      (lambda (x) (f (g x)))))</span></span>
<span class="line"><span>  (square</span></span>
<span class="line"><span>    (lambda (x) (mul x x)))</span></span>
<span class="line"><span>  (add1</span></span>
<span class="line"><span>    (lambda (x) (add x 1))))</span></span>
<span class="line"><span>  (print ((compose square add1) 5)))</span></span></code></pre></div><p>这个程序定义了 3 个函数：<code>compose</code>、<code>square</code> 和 <code>add1</code>。然后将计算结果的值 <code>((compose square add1) 5)</code> 输出出来。</p><p>我相信了解这门语言，这些信息就足够了。开始实现它吧。</p><p>在 Haskell 中，我们可以这样定义语言：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Name = String</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data Expr</span></span>
<span class="line"><span>  = ATOM Atom</span></span>
<span class="line"><span>  | LIST [Expr]</span></span>
<span class="line"><span>    deriving (Eq, Read, Show)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data Atom</span></span>
<span class="line"><span>  = Int Int</span></span>
<span class="line"><span>  | Symbol Name</span></span>
<span class="line"><span>    deriving (Eq, Read, Show)</span></span></code></pre></div><p>我们可以解析用该语言用 <code>Expr</code> 定义的程序。而且，这里我们添加了新数据类型 <code>Eq</code>、<code>Read</code> 和 <code>Show</code> 等实例用于测试和调试。你能够在 REPL 中使用这些数据类型，验证它们确实有用。</p><p>我们不在语法中定义 <code>lambda</code>、<code>let</code> 或其它的内建函数，原因在于，当前情况下我们没必要用到这些东西。这些函数仅仅是 <code>LIST</code> （表达式列表）的更加特殊的用例。所以我决定将它放到后面的部分。</p><p>一般来说你想要在抽象语法中定义这些特殊用例 —— 用于改进错误信息、禁用静态分析和优化等等，但在这里我们不会这样做，对我们来说这些已经足够了。</p><p>另一件你想做的事情可能是在语法中添加一些注释信息。比如定位：<code>Expr</code> 是来自哪个文件的，具体到这个文件的哪一行哪一列。你可以在后面的阶段中使用这一特性，打印出错误定位，即使它们不是处于解析阶段。</p><ul><li><em>练习 1</em>：添加一个 <code>Program</code> 数据类型，可以按顺序包含多个 <code>Expr</code></li><li><em>练习 2</em>：向语法树中添加一个定位注解。</li></ul><h3 id="_2、实现一个简单的解析器组合库" tabindex="-1">2、实现一个简单的解析器组合库 <a class="header-anchor" href="#_2、实现一个简单的解析器组合库" aria-label="Permalink to “2、实现一个简单的解析器组合库”">​</a></h3>`,26)),p("p",null,[s[4]||(s[4]=a("我们要做的第一件事情是定义一个",-1)),s[5]||(s[5]=p("ruby",null,[a("嵌入式领域专用语言"),p("rt",null,"Embedded Domain Specific Language")],-1)),s[6]||(s[6]=a("（EDSL），我们会用它来定义我们的语言解析器。这常常被称为解析器组合库。我们做这件事完全是出于学习的目的，Haskell 里有很好的解析库，在实际构建软件或者进行实验时，你应该使用它们。",-1)),e(n,{href:"https://mrkkrp.github.io/megaparsec/"},{default:i(()=>[...s[3]||(s[3]=[a("megaparsec",-1)])]),_:1}),s[7]||(s[7]=a(" 就是这样的一个库。",-1))]),s[28]||(s[28]=t(`<p>首先我们来谈谈解析库的实现的思路。本质上，我们的解析器就是一个函数，接受一些输入，可能会读取输入的一些或全部内容，然后返回解析出来的值和无法解析的输入部分，或者在解析失败时抛出异常。我们把它写出来。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>newtype Parser a</span></span>
<span class="line"><span>  = Parser (ParseString -&gt; Either ParseError (a, ParseString))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data ParseString</span></span>
<span class="line"><span>  = ParseString Name (Int, Int) String</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data ParseError</span></span>
<span class="line"><span>  = ParseError ParseString Error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Error = String</span></span></code></pre></div><p>这里我们定义了三个主要的新类型。</p><p>第一个，<code>Parser a</code> 是之前讨论的解析函数。</p><p>第二个，<code>ParseString</code> 是我们的输入或携带的状态。它有三个重要的部分：</p><ul><li><code>Name</code>: 这是源的名字</li><li><code>(Int, Int)</code>: 这是源的当前位置</li><li><code>String</code>: 这是等待解析的字符串</li></ul><p>第三个，<code>ParseError</code> 包含了解析器的当前状态和一个错误信息。</p><p>现在我们想让这个解析器更灵活，我们将会定义一些常用类型的实例。这些实例让我们能够将小巧的解析器和复杂的解析器结合在一起（因此它的名字叫做 “解析器组合器”）。</p><p>第一个是 <code>Functor</code> 实例。我们需要 <code>Functor</code> 实例，因为我们要能够对解析值应用函数从而使用不同的解析器。当我们定义自己语言的解析器时，我们将会看到关于它的示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Functor Parser where</span></span>
<span class="line"><span>  fmap f (Parser parser) =</span></span>
<span class="line"><span>    Parser (\\str -&gt; first f &lt;$&gt; parser str)</span></span></code></pre></div><p>第二个是 <code>Applicative</code> 实例。该实例的常见用例是在多个解析器中实现一个纯函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Applicative Parser where</span></span>
<span class="line"><span>  pure x = Parser (\\str -&gt; Right (x, str))</span></span>
<span class="line"><span>  (Parser p1) &lt;*&gt; (Parser p2) =</span></span>
<span class="line"><span>    Parser $</span></span>
<span class="line"><span>      \\str -&gt; do</span></span>
<span class="line"><span>        (f, rest)  &lt;- p1 str</span></span>
<span class="line"><span>        (x, rest&#39;) &lt;- p2 rest</span></span>
<span class="line"><span>        pure (f x, rest&#39;)</span></span></code></pre></div><p>（注意：<em>我们还会实现一个 Monad 实例，这样我们才能使用符号</em>）</p><p>第三个是 <code>Alternative</code> 实例。万一前面的解析器解析失败了，我们要能够提供一个备用的解析器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Alternative Parser where</span></span>
<span class="line"><span>  empty = Parser (\`throwErr\` &quot;Failed consuming input&quot;)</span></span>
<span class="line"><span>  (Parser p1) &lt;|&gt; (Parser p2) =</span></span>
<span class="line"><span>    Parser $</span></span>
<span class="line"><span>      \\pstr -&gt; case p1 pstr of</span></span>
<span class="line"><span>        Right result -&gt; Right result</span></span>
<span class="line"><span>        Left  _      -&gt; p2 pstr</span></span></code></pre></div><p>第四个是 <code>Monad</code> 实例。这样我们就能链接解析器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Monad Parser where</span></span>
<span class="line"><span>  (Parser p1) &gt;&gt;= f =</span></span>
<span class="line"><span>    Parser $</span></span>
<span class="line"><span>     \\str -&gt; case p1 str of</span></span>
<span class="line"><span>       Left err -&gt; Left err</span></span>
<span class="line"><span>       Right (rs, rest) -&gt;</span></span>
<span class="line"><span>         case f rs of</span></span>
<span class="line"><span>           Parser parser -&gt; parser rest</span></span></code></pre></div><p>接下来，让我们定义一种的方式，用于运行解析器和防止失败的助手函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>runParser :: String -&gt; String -&gt; Parser a -&gt; Either ParseError (a, ParseString)</span></span>
<span class="line"><span>runParser name str (Parser parser) = parser $ ParseString name (0,0) str</span></span>
<span class="line"><span></span></span>
<span class="line"><span>throwErr :: ParseString -&gt; String -&gt; Either ParseError a</span></span>
<span class="line"><span>throwErr ps@(ParseString name (row,col) _) errMsg =</span></span>
<span class="line"><span>  Left $ ParseError ps $ unlines</span></span>
<span class="line"><span>    [ &quot;*** &quot; ++ name ++ &quot;: &quot; ++ errMsg</span></span>
<span class="line"><span>    , &quot;* On row &quot; ++ show row ++ &quot;, column &quot; ++ show col ++ &quot;.&quot;</span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>现在我们将会开始实现组合器，这是 EDSL 的 API，也是它的核心。</p><p>首先，我们会定义 <code>oneOf</code>。如果输入列表中的字符后面还有字符的话，<code>oneOf</code> 将会成功，否则就会失败。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>oneOf :: [Char] -&gt; Parser Char</span></span>
<span class="line"><span>oneOf chars =</span></span>
<span class="line"><span>  Parser $ \\case</span></span>
<span class="line"><span>    ps@(ParseString name (row, col) str) -&gt;</span></span>
<span class="line"><span>      case str of</span></span>
<span class="line"><span>        []     -&gt; throwErr ps &quot;Cannot read character of empty string&quot;</span></span>
<span class="line"><span>        (c:cs) -&gt;</span></span>
<span class="line"><span>          if c \`elem\` chars</span></span>
<span class="line"><span>          then Right (c, ParseString name (row, col+1) cs)</span></span>
<span class="line"><span>          else throwErr ps $ unlines [&quot;Unexpected character &quot; ++ [c], &quot;Expecting one of: &quot; ++ show chars]</span></span></code></pre></div><p><code>optional</code> 将会抛出异常，停止解析器。失败时它仅仅会返回 <code>Nothing</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>optional :: Parser a -&gt; Parser (Maybe a)</span></span>
<span class="line"><span>optional (Parser parser) =</span></span>
<span class="line"><span>  Parser $</span></span>
<span class="line"><span>    \\pstr -&gt; case parser pstr of</span></span>
<span class="line"><span>      Left _ -&gt; Right (Nothing, pstr)</span></span>
<span class="line"><span>      Right (x, rest) -&gt; Right (Just x, rest)</span></span></code></pre></div><p><code>many</code> 将会试着重复运行解析器，直到失败。当它完成的时候，会返回成功运行的解析器列表。<code>many1</code> 做的事情是一样的，但解析失败时它至少会抛出一次异常。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>many :: Parser a -&gt; Parser [a]</span></span>
<span class="line"><span>many parser = go []</span></span>
<span class="line"><span>  where go cs = (parser &gt;&gt;= \\c -&gt; go (c:cs)) &lt;|&gt; pure (reverse cs)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>many1 :: Parser a -&gt; Parser [a]</span></span>
<span class="line"><span>many1 parser =</span></span>
<span class="line"><span>  (:) &lt;$&gt; parser &lt;*&gt; many parser</span></span></code></pre></div><p>下面的这些解析器通过我们定义的组合器来实现一些特殊的解析器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char :: Char -&gt; Parser Char</span></span>
<span class="line"><span>char c = oneOf [c]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>string :: String -&gt; Parser String</span></span>
<span class="line"><span>string = traverse char</span></span>
<span class="line"><span></span></span>
<span class="line"><span>space :: Parser Char</span></span>
<span class="line"><span>space = oneOf &quot; \\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>spaces :: Parser String</span></span>
<span class="line"><span>spaces = many space</span></span>
<span class="line"><span></span></span>
<span class="line"><span>spaces1 :: Parser String</span></span>
<span class="line"><span>spaces1 = many1 space</span></span>
<span class="line"><span></span></span>
<span class="line"><span>withSpaces :: Parser a -&gt; Parser a</span></span>
<span class="line"><span>withSpaces parser =</span></span>
<span class="line"><span>  spaces *&gt; parser &lt;* spaces</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parens :: Parser a -&gt; Parser a</span></span>
<span class="line"><span>parens parser =</span></span>
<span class="line"><span>     (withSpaces $ char &#39;(&#39;)</span></span>
<span class="line"><span>  *&gt; withSpaces parser</span></span>
<span class="line"><span>  &lt;* (spaces *&gt; char &#39;)&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sepBy :: Parser a -&gt; Parser b -&gt; Parser [b]</span></span>
<span class="line"><span>sepBy sep parser = do</span></span>
<span class="line"><span>  frst &lt;- optional parser</span></span>
<span class="line"><span>  rest &lt;- many (sep *&gt; parser)</span></span>
<span class="line"><span>  pure $ maybe rest (:rest) frst</span></span></code></pre></div><p>现在为该门语言定义解析器所需要的所有东西都有了。</p><ul><li><em>练习</em> ：实现一个 EOF（end of file/input，即文件或输入终止符）解析器组合器。</li></ul><h3 id="_3、为我们的语言实现解析器" tabindex="-1">3、为我们的语言实现解析器 <a class="header-anchor" href="#_3、为我们的语言实现解析器" aria-label="Permalink to “3、为我们的语言实现解析器”">​</a></h3><p>我们会用自顶而下的方法定义解析器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parseExpr :: Parser Expr</span></span>
<span class="line"><span>parseExpr = fmap ATOM parseAtom &lt;|&gt; fmap LIST parseList</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parseList :: Parser [Expr]</span></span>
<span class="line"><span>parseList = parens $ sepBy spaces1 parseExpr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parseAtom :: Parser Atom</span></span>
<span class="line"><span>parseAtom = parseSymbol &lt;|&gt; parseInt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parseSymbol :: Parser Atom</span></span>
<span class="line"><span>parseSymbol = fmap Symbol parseName</span></span></code></pre></div><p>注意到这四个函数是在我们这门语言中属于高阶描述。这解释了为什么 Haskell 执行解析工作这么棒。在定义完高级部分后，我们还需要定义低级别的 <code>parseName</code> 和 <code>parseInt</code>。</p><p>我们能在这门语言中用什么字符作为名字呢？用小写的字母、数字和下划线吧，而且名字的第一个字符必须是字母。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parseName :: Parser Name</span></span>
<span class="line"><span>parseName = do</span></span>
<span class="line"><span>  c  &lt;- oneOf [&#39;a&#39;..&#39;z&#39;]</span></span>
<span class="line"><span>  cs &lt;- many $ oneOf $ [&#39;a&#39;..&#39;z&#39;] ++ &quot;0123456789&quot; ++ &quot;_&quot;</span></span>
<span class="line"><span>  pure (c:cs)</span></span></code></pre></div><p>整数是一系列数字，数字前面可能有负号 <code>-</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parseInt :: Parser Atom</span></span>
<span class="line"><span>parseInt = do</span></span>
<span class="line"><span>  sign &lt;- optional $ char &#39;-&#39;</span></span>
<span class="line"><span>  num  &lt;- many1 $ oneOf &quot;0123456789&quot;</span></span>
<span class="line"><span>  let result = read $ maybe num (:num) sign of</span></span>
<span class="line"><span>  pure $ Int result</span></span></code></pre></div><p>最后，我们会定义用来运行解析器的函数，返回值可能是一个 <code>Expr</code> 或者是一条错误信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>runExprParser :: Name -&gt; String -&gt; Either String Expr</span></span>
<span class="line"><span>runExprParser name str =</span></span>
<span class="line"><span>  case runParser name str (withSpaces parseExpr) of</span></span>
<span class="line"><span>    Left (ParseError _ errMsg) -&gt; Left errMsg</span></span>
<span class="line"><span>    Right (result, _) -&gt; Right result</span></span></code></pre></div><ul><li><em>练习 1</em> ：为第一节中定义的 <code>Program</code> 类型编写一个解析器</li><li><em>练习 2</em> ：用 Applicative 的形式重写 <code>parseName</code></li><li><em>练习 3</em> ：<code>parseInt</code> 可能出现溢出情况，找到处理它的方法，不要用 <code>read</code>。</li></ul><h3 id="_4、为这门语言实现一个更好看的输出器" tabindex="-1">4、为这门语言实现一个更好看的输出器 <a class="header-anchor" href="#_4、为这门语言实现一个更好看的输出器" aria-label="Permalink to “4、为这门语言实现一个更好看的输出器”">​</a></h3><p>我们还想做一件事，将我们的程序以源代码的形式打印出来。这对完善错误信息很有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>printExpr :: Expr -&gt; String</span></span>
<span class="line"><span>printExpr = printExpr&#39; False 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printAtom :: Atom -&gt; String</span></span>
<span class="line"><span>printAtom = \\case</span></span>
<span class="line"><span>  Symbol s -&gt; s</span></span>
<span class="line"><span>  Int i -&gt; show i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printExpr&#39; :: Bool -&gt; Int -&gt; Expr -&gt; String</span></span>
<span class="line"><span>printExpr&#39; doindent level = \\case</span></span>
<span class="line"><span>  ATOM a -&gt; indent (bool 0 level doindent) (printAtom a)</span></span>
<span class="line"><span>  LIST (e:es) -&gt;</span></span>
<span class="line"><span>    indent (bool 0 level doindent) $</span></span>
<span class="line"><span>      concat</span></span>
<span class="line"><span>        [ &quot;(&quot;</span></span>
<span class="line"><span>        , printExpr&#39; False (level + 1) e</span></span>
<span class="line"><span>        , bool &quot;\\n&quot; &quot;&quot; (null es)</span></span>
<span class="line"><span>        , intercalate &quot;\\n&quot; $ map (printExpr&#39; True (level + 1)) es</span></span>
<span class="line"><span>        , &quot;)&quot;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>indent :: Int -&gt; String -&gt; String</span></span>
<span class="line"><span>indent tabs e = concat (replicate tabs &quot;  &quot;) ++ e</span></span></code></pre></div><ul><li><em>练习</em> ：为第一节中定义的 <code>Program</code> 类型编写一个美观的输出器</li></ul><p>好，目前为止我们写了近 200 行代码，这些代码一般叫做编译器的前端。我们还要写大概 150 行代码，用来执行三个额外的任务：我们需要根据需求定义一个 JS 的子集，定义一个将我们的语言转译成这个子集的转译器，最后把所有东西整合在一起。开始吧。</p><h3 id="_5、根据需求定义-javascript-的子集" tabindex="-1">5、根据需求定义 JavaScript 的子集 <a class="header-anchor" href="#_5、根据需求定义-javascript-的子集" aria-label="Permalink to “5、根据需求定义 JavaScript 的子集”">​</a></h3><p>首先，我们要定义将要使用的 JavaScript 的子集：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data JSExpr</span></span>
<span class="line"><span>  = JSInt Int</span></span>
<span class="line"><span>  | JSSymbol Name</span></span>
<span class="line"><span>  | JSBinOp JSBinOp JSExpr JSExpr</span></span>
<span class="line"><span>  | JSLambda [Name] JSExpr</span></span>
<span class="line"><span>  | JSFunCall JSExpr [JSExpr]</span></span>
<span class="line"><span>  | JSReturn JSExpr</span></span>
<span class="line"><span>    deriving (Eq, Show, Read)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type JSBinOp = String</span></span></code></pre></div><p>这个数据类型表示 JavaScript 表达式。我们有两个原子类型 <code>JSInt</code> 和 <code>JSSymbol</code>，它们是由我们这个语言中的 <code>Atom</code> 转译来的，我们用 <code>JSBinOp</code> 来表示二元操作，比如 <code>+</code> 或 <code>*</code>，用 <code>JSLambda</code> 来表示匿名函数，和我们语言中的 <code>lambda expression（lambda 表达式）</code> 一样，我们将会用 <code>JSFunCall</code> 来调用函数，用 <code>let</code> 来引入新名字，用 <code>JSReturn</code> 从函数中返回值，在 JavaScript 中是需要返回值的。</p><p><code>JSExpr</code> 类型是对 JavaScript 表达式的 <strong>抽象表示</strong>。我们会把自己语言中表达式的抽象表示 <code>Expr</code> 转译成 JavaScript 表达式的抽象表示 <code>JSExpr</code>。但为了实现这个功能，我们需要实现 <code>JSExpr</code> ，并从这个抽象表示中生成 JavaScript 代码。我们将通过递归匹配 <code>JSExpr</code> 实现，将 JS 代码当作 <code>String</code> 来输出。这和我们在 <code>printExpr</code> 中做的基本上是一样的。我们还会追踪元素的作用域，这样我们才可以用合适的方式缩进生成的代码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>printJSOp :: JSBinOp -&gt; String</span></span>
<span class="line"><span>printJSOp op = op</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printJSExpr :: Bool -&gt; Int -&gt; JSExpr -&gt; String</span></span>
<span class="line"><span>printJSExpr doindent tabs = \\case</span></span>
<span class="line"><span>  JSInt    i     -&gt; show i</span></span>
<span class="line"><span>  JSSymbol name  -&gt; name</span></span>
<span class="line"><span>  JSLambda vars expr -&gt; (if doindent then indent tabs else id) $ unlines</span></span>
<span class="line"><span>    [&quot;function(&quot; ++ intercalate &quot;, &quot; vars ++ &quot;) {&quot;</span></span>
<span class="line"><span>    ,indent (tabs+1) $ printJSExpr False (tabs+1) expr</span></span>
<span class="line"><span>    ] ++ indent tabs &quot;}&quot;</span></span>
<span class="line"><span>  JSBinOp  op e1 e2  -&gt; &quot;(&quot; ++ printJSExpr False tabs e1 ++ &quot; &quot; ++ printJSOp op ++ &quot; &quot; ++ printJSExpr False tabs e2 ++ &quot;)&quot;</span></span>
<span class="line"><span>  JSFunCall f exprs  -&gt; &quot;(&quot; ++ printJSExpr False tabs f ++ &quot;)(&quot; ++ intercalate &quot;, &quot; (fmap (printJSExpr False tabs) exprs) ++ &quot;)&quot;</span></span>
<span class="line"><span>  JSReturn expr      -&gt; (if doindent then indent tabs else id) $ &quot;return &quot; ++ printJSExpr False tabs expr ++ &quot;;&quot;</span></span></code></pre></div><ul><li><em>练习 1</em> ：添加 <code>JSProgram</code> 类型，它可以包含多个 <code>JSExpr</code> ，然后创建一个叫做 <code>printJSExprProgram</code> 的函数来生成代码。</li><li><em>练习 2</em> ：添加 <code>JSExpr</code> 的新类型：<code>JSIf</code>，并为其生成代码。</li></ul><h3 id="_6、实现到我们定义的-javascript-子集的代码转译器" tabindex="-1">6、实现到我们定义的 JavaScript 子集的代码转译器 <a class="header-anchor" href="#_6、实现到我们定义的-javascript-子集的代码转译器" aria-label="Permalink to “6、实现到我们定义的 JavaScript 子集的代码转译器”">​</a></h3><p>我们快做完了。这一节将会创建函数，将 <code>Expr</code> 转译成 <code>JSExpr</code>。</p><p>基本思想很简单，我们会将 <code>ATOM</code> 转译成 <code>JSSymbol</code> 或者 <code>JSInt</code>，然后会将 <code>LIST</code> 转译成一个函数调用或者转译的特例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type TransError = String</span></span>
<span class="line"><span></span></span>
<span class="line"><span>translateToJS :: Expr -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>translateToJS = \\case</span></span>
<span class="line"><span>  ATOM (Symbol s) -&gt; pure $ JSSymbol s</span></span>
<span class="line"><span>  ATOM (Int i)    -&gt; pure $ JSInt i</span></span>
<span class="line"><span>  LIST xs -&gt; translateList xs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>translateList :: [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>translateList = \\case</span></span>
<span class="line"><span>  []     -&gt; Left &quot;translating empty list&quot;</span></span>
<span class="line"><span>  ATOM (Symbol s):xs</span></span>
<span class="line"><span>    | Just f &lt;- lookup s builtins -&gt;</span></span>
<span class="line"><span>      f xs</span></span>
<span class="line"><span>  f:xs -&gt;</span></span>
<span class="line"><span>    JSFunCall &lt;$&gt; translateToJS f &lt;*&gt; traverse translateToJS xs</span></span></code></pre></div><p><code>builtins</code> 是一系列要转译的特例，就像 <code>lambada</code> 和 <code>let</code>。每一种情况都可以获得一系列参数，验证它是否合乎语法规范，然后将其转译成等效的 <code>JSExpr</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Builtin  = [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>type Builtins = [(Name, Builtin)]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>builtins :: Builtins</span></span>
<span class="line"><span>builtins =</span></span>
<span class="line"><span>  [(&quot;lambda&quot;, transLambda)</span></span>
<span class="line"><span>  ,(&quot;let&quot;, transLet)</span></span>
<span class="line"><span>  ,(&quot;add&quot;, transBinOp &quot;add&quot; &quot;+&quot;)</span></span>
<span class="line"><span>  ,(&quot;mul&quot;, transBinOp &quot;mul&quot; &quot;*&quot;)</span></span>
<span class="line"><span>  ,(&quot;sub&quot;, transBinOp &quot;sub&quot; &quot;-&quot;)</span></span>
<span class="line"><span>  ,(&quot;div&quot;, transBinOp &quot;div&quot; &quot;/&quot;)</span></span>
<span class="line"><span>  ,(&quot;print&quot;, transPrint)</span></span>
<span class="line"><span>  ]</span></span></code></pre></div><p>我们这种情况，会将内建的特殊形式当作特殊的、非第一类的进行对待，因此不可能将它们当作第一类函数。</p><p>我们会把 Lambda 表达式转译成一个匿名函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transLambda :: [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>transLambda = \\case</span></span>
<span class="line"><span>  [LIST vars, body] -&gt; do</span></span>
<span class="line"><span>    vars&#39; &lt;- traverse fromSymbol vars</span></span>
<span class="line"><span>    JSLambda vars&#39; &lt;$&gt; (JSReturn &lt;$&gt; translateToJS body)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  vars -&gt;</span></span>
<span class="line"><span>    Left $ unlines</span></span>
<span class="line"><span>      [&quot;Syntax error: unexpected arguments for lambda.&quot;</span></span>
<span class="line"><span>      ,&quot;expecting 2 arguments, the first is the list of vars and the second is the body of the lambda.&quot;</span></span>
<span class="line"><span>      ,&quot;In expression: &quot; ++ show (LIST $ ATOM (Symbol &quot;lambda&quot;) : vars)</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fromSymbol :: Expr -&gt; Either String Name</span></span>
<span class="line"><span>fromSymbol (ATOM (Symbol s)) = Right s</span></span>
<span class="line"><span>fromSymbol e = Left $ &quot;cannot bind value to non symbol type: &quot; ++ show e</span></span></code></pre></div><p>我们会将 <code>let</code> 转译成带有相关名字参数的函数定义，然后带上参数调用函数，因此会在这一作用域中引入变量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transLet :: [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>transLet = \\case</span></span>
<span class="line"><span>  [LIST binds, body] -&gt; do</span></span>
<span class="line"><span>    (vars, vals) &lt;- letParams binds</span></span>
<span class="line"><span>    vars&#39; &lt;- traverse fromSymbol vars</span></span>
<span class="line"><span>    JSFunCall . JSLambda vars&#39; &lt;$&gt; (JSReturn &lt;$&gt; translateToJS body) &lt;*&gt; traverse translateToJS vals</span></span>
<span class="line"><span>   where</span></span>
<span class="line"><span>    letParams :: [Expr] -&gt; Either Error ([Expr],[Expr])</span></span>
<span class="line"><span>    letParams = \\case</span></span>
<span class="line"><span>      [] -&gt; pure ([],[])</span></span>
<span class="line"><span>      LIST [x,y] : rest -&gt; ((x:) *** (y:)) &lt;$&gt; letParams rest</span></span>
<span class="line"><span>      x : _ -&gt; Left (&quot;Unexpected argument in let list in expression:\\n&quot; ++ printExpr x)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  vars -&gt;</span></span>
<span class="line"><span>    Left $ unlines</span></span>
<span class="line"><span>      [&quot;Syntax error: unexpected arguments for let.&quot;</span></span>
<span class="line"><span>      ,&quot;expecting 2 arguments, the first is the list of var/val pairs and the second is the let body.&quot;</span></span>
<span class="line"><span>      ,&quot;In expression:\\n&quot; ++ printExpr (LIST $ ATOM (Symbol &quot;let&quot;) : vars)</span></span>
<span class="line"><span>      ]</span></span></code></pre></div><p>我们会将可以在多个参数之间执行的操作符转译成一系列二元操作符。比如：<code>(add 1 2 3)</code> 将会变成 <code>1 + (2 + 3)</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transBinOp :: Name -&gt; Name -&gt; [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>transBinOp f _ []   = Left $ &quot;Syntax error: &#39;&quot; ++ f ++ &quot;&#39; expected at least 1 argument, got: 0&quot;</span></span>
<span class="line"><span>transBinOp _ _ [x]  = translateToJS x</span></span>
<span class="line"><span>transBinOp _ f list = foldl1 (JSBinOp f) &lt;$&gt; traverse translateToJS list</span></span></code></pre></div><p>然后我们会将 <code>print</code> 转换成对 <code>console.log</code> 的调用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transPrint :: [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>transPrint [expr] = JSFunCall (JSSymbol &quot;console.log&quot;) . (:[]) &lt;$&gt; translateToJS expr</span></span>
<span class="line"><span>transPrint xs     = Left $ &quot;Syntax error. print expected 1 arguments, got: &quot; ++ show (length xs)</span></span></code></pre></div><p>注意，如果我们将这些代码当作 <code>Expr</code> 的特例进行解析，那我们就可能会跳过语法验证。</p><ul><li><em>练习 1</em> ：将 <code>Program</code> 转译成 <code>JSProgram</code></li><li><em>练习 2</em> ：为 <code>if Expr Expr Expr</code> 添加一个特例，并将它转译成你在上一次练习中实现的 <code>JSIf</code> 条件语句。</li></ul><h3 id="_7、把所有东西整合到一起" tabindex="-1">7、把所有东西整合到一起 <a class="header-anchor" href="#_7、把所有东西整合到一起" aria-label="Permalink to “7、把所有东西整合到一起”">​</a></h3><p>最终，我们将会把所有东西整合到一起。我们会：</p><ol><li>读取文件</li><li>将文件解析成 <code>Expr</code></li><li>将文件转译成 <code>JSExpr</code></li><li>将 JavaScript 代码发送到标准输出流</li></ol><p>我们还会启用一些用于测试的标志位：</p><ul><li><code>--e</code> 将进行解析并打印出表达式的抽象表示（<code>Expr</code>）</li><li><code>--pp</code> 将进行解析，美化输出</li><li><code>--jse</code> 将进行解析、转译、并打印出生成的 JS 表达式（<code>JSExpr</code>）的抽象表示</li><li><code>--ppc</code> 将进行解析，美化输出并进行编译</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>main :: IO ()</span></span>
<span class="line"><span>main = getArgs &gt;&gt;= \\case</span></span>
<span class="line"><span>  [file] -&gt;</span></span>
<span class="line"><span>    printCompile =&lt;&lt; readFile file</span></span>
<span class="line"><span>  [&quot;--e&quot;,file] -&gt;</span></span>
<span class="line"><span>    either putStrLn print . runExprParser &quot;--e&quot; =&lt;&lt; readFile file</span></span>
<span class="line"><span>  [&quot;--pp&quot;,file] -&gt;</span></span>
<span class="line"><span>    either putStrLn (putStrLn . printExpr) . runExprParser &quot;--pp&quot; =&lt;&lt; readFile file</span></span>
<span class="line"><span>  [&quot;--jse&quot;,file] -&gt;</span></span>
<span class="line"><span>    either print (either putStrLn print . translateToJS) . runExprParser &quot;--jse&quot; =&lt;&lt; readFile file</span></span>
<span class="line"><span>  [&quot;--ppc&quot;,file] -&gt;</span></span>
<span class="line"><span>    either putStrLn (either putStrLn putStrLn) . fmap (compile . printExpr) . runExprParser &quot;--ppc&quot; =&lt;&lt; readFile file</span></span>
<span class="line"><span>  _ -&gt;</span></span>
<span class="line"><span>    putStrLn $ unlines</span></span>
<span class="line"><span>      [&quot;Usage: runghc Main.hs [ --e, --pp, --jse, --ppc ] &lt;filename&gt;&quot;</span></span>
<span class="line"><span>      ,&quot;--e     print the Expr&quot;</span></span>
<span class="line"><span>      ,&quot;--pp    pretty print Expr&quot;</span></span>
<span class="line"><span>      ,&quot;--jse   print the JSExpr&quot;</span></span>
<span class="line"><span>      ,&quot;--ppc   pretty print Expr and then compile&quot;</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printCompile :: String -&gt; IO ()</span></span>
<span class="line"><span>printCompile = either putStrLn putStrLn . compile</span></span>
<span class="line"><span></span></span>
<span class="line"><span>compile :: String -&gt; Either Error String</span></span>
<span class="line"><span>compile str = printJSExpr False 0 &lt;$&gt; (translateToJS =&lt;&lt; runExprParser &quot;compile&quot; str)</span></span></code></pre></div>`,76)),p("p",null,[s[9]||(s[9]=a("大功告成。将自己的语言编译到 JS 子集的编译器已经完成了。再说一次，你可以在 ",-1)),e(n,{href:"https://gist.github.com/soupi/d4ff0727ccb739045fad6cdf533ca7dd"},{default:i(()=>[...s[8]||(s[8]=[a("这里",-1)])]),_:1}),s[10]||(s[10]=a(" 看到完整的源文件。",-1))]),s[29]||(s[29]=t(`<p>用我们的编译器运行第一节的示例，产生的 JavaScript 代码如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ runhaskell Lisp.hs example.lsp</span></span>
<span class="line"><span>(function(compose, square, add1) {</span></span>
<span class="line"><span>  return (console.log)(((compose)(square, add1))(5));</span></span>
<span class="line"><span>})(function(f, g) {</span></span>
<span class="line"><span>  return function(x) {</span></span>
<span class="line"><span>    return (f)((g)(x));</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}, function(x) {</span></span>
<span class="line"><span>  return (x * x);</span></span>
<span class="line"><span>}, function(x) {</span></span>
<span class="line"><span>  return (x + 1);</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>如果你在自己电脑上安装了 node.js，你可以用以下命令运行这段代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ runhaskell Lisp.hs example.lsp | node -p</span></span>
<span class="line"><span>36</span></span>
<span class="line"><span>undefined</span></span></code></pre></div><ul><li><em>最终练习</em> : 编译有多个表达式的程序而非仅编译一个表达式。</li></ul><hr>`,6)),p("p",null,[s[12]||(s[12]=a("via: ",-1)),e(n,{href:"https://gilmi.me/blog/post/2016/10/14/lisp-to-js"},{default:i(()=>[...s[11]||(s[11]=[a("https://gilmi.me/blog/post/2016/10/14/lisp-to-js",-1)])]),_:1})]),p("p",null,[s[17]||(s[17]=a("作者：",-1)),e(n,{href:"https://gilmi.me/home"},{default:i(()=>[...s[13]||(s[13]=[a("Gil Mizrahi",-1)])]),_:1}),s[18]||(s[18]=a(" 选题：",-1)),e(n,{href:"https://github.com/oska874"},{default:i(()=>[...s[14]||(s[14]=[a("oska874",-1)])]),_:1}),s[19]||(s[19]=a(" 译者：",-1)),e(n,{href:"https://github.com/BriFuture"},{default:i(()=>[...s[15]||(s[15]=[a("BriFuture",-1)])]),_:1}),s[20]||(s[20]=a(" 校对：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原创编译，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[a("Linux中国",-1)])]),_:1}),s[25]||(s[25]=a(" 荣誉推出",-1))])])}const y=l(d,[["render",g]]);export{x as __pageData,y as default};
