import{_ as l,a0 as r,w as o,s as c,I as p,x as a,a1 as e,A as i,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const x=JSON.parse('{"title":"用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript | LCTT x X-CMD","titleTemplate":false,"description":"用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript | LCTT (201810) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript | LCTT (201810) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201810/20161014 Compiling Lisp to JavaScript From Scratch in 350 LOC","title":"用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript","tag":"201810","desc":""},"relativePath":"201810/20161014 Compiling Lisp to JavaScript From Scratch in 350 LOC.md","filePath":"[post].md"}'),d={name:"201810/20161014 Compiling Lisp to JavaScript From Scratch in 350 LOC.md"};function g(h,s,u,b,k,m){const n=r("Link");return o(),c("div",null,[s[26]||(s[26]=p("h1",{id:"用-350-行代碼從零開始-將-lisp-編譯成-javascript",tabindex:"-1"},[a("用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript "),p("a",{class:"header-anchor",href:"#用-350-行代碼從零開始-將-lisp-編譯成-javascript","aria-label":"Permalink to “用 350 行代碼從零開始，將 Lisp 編譯成 JavaScript”"},"​")],-1)),p("p",null,[s[1]||(s[1]=a("我們將會在本篇文章中看到從零開始實現的編譯器，將簡單的類 LISP 計算語言編譯成 JavaScript。完整的源代碼在 ",-1)),e(n,{href:"https://gist.github.com/soupi/d4ff0727ccb739045fad6cdf533ca7dd"},{default:i(()=>[...s[0]||(s[0]=[a("這裏",-1)])]),_:1}),s[2]||(s[2]=a("。",-1))]),s[27]||(s[27]=t(`<p>我們將會：</p><ol><li>自定義語言，並用它編寫一個簡單的程序</li><li>實現一個簡單的解析器組合器</li><li>為該語言實現一個解析器</li><li>為該語言實現一個美觀的打印器</li><li>為我們的用途定義 JavaScript 的一個子集</li><li>實現代碼轉譯器，將代碼轉譯成我們定義的 JavaScript 子集</li><li>把所有東西整合在一起</li></ol><p>開始吧！</p><h3 id="_1、定義語言" tabindex="-1">1、定義語言 <a class="header-anchor" href="#_1、定義語言" aria-label="Permalink to “1、定義語言”">​</a></h3><p>Lisp 族語言最迷人的地方在於，它們的語法就是樹狀表示的，這就是這門語言很容易解析的原因。我們很快就能接觸到它。但首先讓我們把自己的語言定義好。關於我們語言的語法的範式（BNF）描述如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>program ::= expr</span></span>
<span class="line"><span>expr ::= &lt;integer&gt; | &lt;name&gt; | ([&lt;expr&gt;])</span></span></code></pre></div><p>基本上，我們可以在該語言的最頂層定義表達式並對其進行運算。表達式由一個整數（比如 <code>5</code>）、一個變量（比如 <code>x</code>）或者一個表達式列表（比如 <code>(add x 1)</code>）組成。</p><p>整數對應它本身的值，變量對應它在當前環境中綁定的值，表達式列表對應一個函數調用，該列表的第一個參數是相應的函數，剩下的表達式是傳遞給這個函數的參數。</p><p>該語言中，我們保留一些內建的特殊形式，這樣我們就能做一些更有意思的事情：</p><ul><li><code>let</code> 表達式使我們可以在它的 <code>body</code> 環境中引入新的變量。語法如下：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let ::= (let ([&lt;letarg&gt;]) &lt;body&gt;)</span></span>
<span class="line"><span>letargs ::= (&lt;name&gt; &lt;expr&gt;)</span></span>
<span class="line"><span>body ::= &lt;expr&gt;</span></span></code></pre></div><ul><li><code>lambda</code> 表達式：也就是匿名函數定義。語法如下：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lambda ::= (lambda ([&lt;name&gt;]) &lt;body&gt;)</span></span></code></pre></div><p>還有一些內建函數： <code>add</code>、<code>mul</code>、<code>sub</code>、<code>div</code> 和 <code>print</code>。</p><p>讓我們看看用我們這門語言編寫的入門示例程序：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(let</span></span>
<span class="line"><span>  ((compose</span></span>
<span class="line"><span>    (lambda (f g)</span></span>
<span class="line"><span>      (lambda (x) (f (g x)))))</span></span>
<span class="line"><span>  (square</span></span>
<span class="line"><span>    (lambda (x) (mul x x)))</span></span>
<span class="line"><span>  (add1</span></span>
<span class="line"><span>    (lambda (x) (add x 1))))</span></span>
<span class="line"><span>  (print ((compose square add1) 5)))</span></span></code></pre></div><p>這個程序定義了 3 個函數：<code>compose</code>、<code>square</code> 和 <code>add1</code>。然後將計算結果的值 <code>((compose square add1) 5)</code> 輸出出來。</p><p>我相信瞭解這門語言，這些信息就足夠了。開始實現它吧。</p><p>在 Haskell 中，我們可以這樣定義語言：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Name = String</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data Expr</span></span>
<span class="line"><span>  = ATOM Atom</span></span>
<span class="line"><span>  | LIST [Expr]</span></span>
<span class="line"><span>    deriving (Eq, Read, Show)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data Atom</span></span>
<span class="line"><span>  = Int Int</span></span>
<span class="line"><span>  | Symbol Name</span></span>
<span class="line"><span>    deriving (Eq, Read, Show)</span></span></code></pre></div><p>我們可以解析用該語言用 <code>Expr</code> 定義的程序。而且，這裏我們添加了新數據類型 <code>Eq</code>、<code>Read</code> 和 <code>Show</code> 等實例用於測試和調試。你能夠在 REPL 中使用這些數據類型，驗證它們確實有用。</p><p>我們不在語法中定義 <code>lambda</code>、<code>let</code> 或其它的內建函數，原因在於，當前情況下我們沒必要用到這些東西。這些函數僅僅是 <code>LIST</code> （表達式列表）的更加特殊的用例。所以我決定將它放到後面的部分。</p><p>一般來説你想要在抽象語法中定義這些特殊用例 —— 用於改進錯誤信息、禁用靜態分析和優化等等，但在這裏我們不會這樣做，對我們來説這些已經足夠了。</p><p>另一件你想做的事情可能是在語法中添加一些註釋信息。比如定位：<code>Expr</code> 是來自哪個文件的，具體到這個文件的哪一行哪一列。你可以在後面的階段中使用這一特性，打印出錯誤定位，即使它們不是處於解析階段。</p><ul><li><em>練習 1</em>：添加一個 <code>Program</code> 數據類型，可以按順序包含多個 <code>Expr</code></li><li><em>練習 2</em>：向語法樹中添加一個定位註解。</li></ul><h3 id="_2、實現一個簡單的解析器組合庫" tabindex="-1">2、實現一個簡單的解析器組合庫 <a class="header-anchor" href="#_2、實現一個簡單的解析器組合庫" aria-label="Permalink to “2、實現一個簡單的解析器組合庫”">​</a></h3>`,26)),p("p",null,[s[4]||(s[4]=a("我們要做的第一件事情是定義一個",-1)),s[5]||(s[5]=p("ruby",null,[a("嵌入式領域專用語言"),p("rt",null,"Embedded Domain Specific Language")],-1)),s[6]||(s[6]=a("（EDSL），我們會用它來定義我們的語言解析器。這常常被稱為解析器組合庫。我們做這件事完全是出於學習的目的，Haskell 裏有很好的解析庫，在實際構建軟件或者進行實驗時，你應該使用它們。",-1)),e(n,{href:"https://mrkkrp.github.io/megaparsec/"},{default:i(()=>[...s[3]||(s[3]=[a("megaparsec",-1)])]),_:1}),s[7]||(s[7]=a(" 就是這樣的一個庫。",-1))]),s[28]||(s[28]=t(`<p>首先我們來談談解析庫的實現的思路。本質上，我們的解析器就是一個函數，接受一些輸入，可能會讀取輸入的一些或全部內容，然後返回解析出來的值和無法解析的輸入部分，或者在解析失敗時拋出異常。我們把它寫出來。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>newtype Parser a</span></span>
<span class="line"><span>  = Parser (ParseString -&gt; Either ParseError (a, ParseString))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data ParseString</span></span>
<span class="line"><span>  = ParseString Name (Int, Int) String</span></span>
<span class="line"><span></span></span>
<span class="line"><span>data ParseError</span></span>
<span class="line"><span>  = ParseError ParseString Error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Error = String</span></span></code></pre></div><p>這裏我們定義了三個主要的新類型。</p><p>第一個，<code>Parser a</code> 是之前討論的解析函數。</p><p>第二個，<code>ParseString</code> 是我們的輸入或攜帶的狀態。它有三個重要的部分：</p><ul><li><code>Name</code>: 這是源的名字</li><li><code>(Int, Int)</code>: 這是源的當前位置</li><li><code>String</code>: 這是等待解析的字符串</li></ul><p>第三個，<code>ParseError</code> 包含了解析器的當前狀態和一個錯誤信息。</p><p>現在我們想讓這個解析器更靈活，我們將會定義一些常用類型的實例。這些實例讓我們能夠將小巧的解析器和複雜的解析器結合在一起（因此它的名字叫做 “解析器組合器”）。</p><p>第一個是 <code>Functor</code> 實例。我們需要 <code>Functor</code> 實例，因為我們要能夠對解析值應用函數從而使用不同的解析器。當我們定義自己語言的解析器時，我們將會看到關於它的示例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Functor Parser where</span></span>
<span class="line"><span>  fmap f (Parser parser) =</span></span>
<span class="line"><span>    Parser (\\str -&gt; first f &lt;$&gt; parser str)</span></span></code></pre></div><p>第二個是 <code>Applicative</code> 實例。該實例的常見用例是在多個解析器中實現一個純函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Applicative Parser where</span></span>
<span class="line"><span>  pure x = Parser (\\str -&gt; Right (x, str))</span></span>
<span class="line"><span>  (Parser p1) &lt;*&gt; (Parser p2) =</span></span>
<span class="line"><span>    Parser $</span></span>
<span class="line"><span>      \\str -&gt; do</span></span>
<span class="line"><span>        (f, rest)  &lt;- p1 str</span></span>
<span class="line"><span>        (x, rest&#39;) &lt;- p2 rest</span></span>
<span class="line"><span>        pure (f x, rest&#39;)</span></span></code></pre></div><p>（注意：<em>我們還會實現一個 Monad 實例，這樣我們才能使用符號</em>）</p><p>第三個是 <code>Alternative</code> 實例。萬一前面的解析器解析失敗了，我們要能夠提供一個備用的解析器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Alternative Parser where</span></span>
<span class="line"><span>  empty = Parser (\`throwErr\` &quot;Failed consuming input&quot;)</span></span>
<span class="line"><span>  (Parser p1) &lt;|&gt; (Parser p2) =</span></span>
<span class="line"><span>    Parser $</span></span>
<span class="line"><span>      \\pstr -&gt; case p1 pstr of</span></span>
<span class="line"><span>        Right result -&gt; Right result</span></span>
<span class="line"><span>        Left  _      -&gt; p2 pstr</span></span></code></pre></div><p>第四個是 <code>Monad</code> 實例。這樣我們就能鏈接解析器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>instance Monad Parser where</span></span>
<span class="line"><span>  (Parser p1) &gt;&gt;= f =</span></span>
<span class="line"><span>    Parser $</span></span>
<span class="line"><span>     \\str -&gt; case p1 str of</span></span>
<span class="line"><span>       Left err -&gt; Left err</span></span>
<span class="line"><span>       Right (rs, rest) -&gt;</span></span>
<span class="line"><span>         case f rs of</span></span>
<span class="line"><span>           Parser parser -&gt; parser rest</span></span></code></pre></div><p>接下來，讓我們定義一種的方式，用於運行解析器和防止失敗的助手函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>runParser :: String -&gt; String -&gt; Parser a -&gt; Either ParseError (a, ParseString)</span></span>
<span class="line"><span>runParser name str (Parser parser) = parser $ ParseString name (0,0) str</span></span>
<span class="line"><span></span></span>
<span class="line"><span>throwErr :: ParseString -&gt; String -&gt; Either ParseError a</span></span>
<span class="line"><span>throwErr ps@(ParseString name (row,col) _) errMsg =</span></span>
<span class="line"><span>  Left $ ParseError ps $ unlines</span></span>
<span class="line"><span>    [ &quot;*** &quot; ++ name ++ &quot;: &quot; ++ errMsg</span></span>
<span class="line"><span>    , &quot;* On row &quot; ++ show row ++ &quot;, column &quot; ++ show col ++ &quot;.&quot;</span></span>
<span class="line"><span>    ]</span></span></code></pre></div><p>現在我們將會開始實現組合器，這是 EDSL 的 API，也是它的核心。</p><p>首先，我們會定義 <code>oneOf</code>。如果輸入列表中的字符後面還有字符的話，<code>oneOf</code> 將會成功，否則就會失敗。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>oneOf :: [Char] -&gt; Parser Char</span></span>
<span class="line"><span>oneOf chars =</span></span>
<span class="line"><span>  Parser $ \\case</span></span>
<span class="line"><span>    ps@(ParseString name (row, col) str) -&gt;</span></span>
<span class="line"><span>      case str of</span></span>
<span class="line"><span>        []     -&gt; throwErr ps &quot;Cannot read character of empty string&quot;</span></span>
<span class="line"><span>        (c:cs) -&gt;</span></span>
<span class="line"><span>          if c \`elem\` chars</span></span>
<span class="line"><span>          then Right (c, ParseString name (row, col+1) cs)</span></span>
<span class="line"><span>          else throwErr ps $ unlines [&quot;Unexpected character &quot; ++ [c], &quot;Expecting one of: &quot; ++ show chars]</span></span></code></pre></div><p><code>optional</code> 將會拋出異常，停止解析器。失敗時它僅僅會返回 <code>Nothing</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>optional :: Parser a -&gt; Parser (Maybe a)</span></span>
<span class="line"><span>optional (Parser parser) =</span></span>
<span class="line"><span>  Parser $</span></span>
<span class="line"><span>    \\pstr -&gt; case parser pstr of</span></span>
<span class="line"><span>      Left _ -&gt; Right (Nothing, pstr)</span></span>
<span class="line"><span>      Right (x, rest) -&gt; Right (Just x, rest)</span></span></code></pre></div><p><code>many</code> 將會試着重複運行解析器，直到失敗。當它完成的時候，會返回成功運行的解析器列表。<code>many1</code> 做的事情是一樣的，但解析失敗時它至少會拋出一次異常。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>many :: Parser a -&gt; Parser [a]</span></span>
<span class="line"><span>many parser = go []</span></span>
<span class="line"><span>  where go cs = (parser &gt;&gt;= \\c -&gt; go (c:cs)) &lt;|&gt; pure (reverse cs)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>many1 :: Parser a -&gt; Parser [a]</span></span>
<span class="line"><span>many1 parser =</span></span>
<span class="line"><span>  (:) &lt;$&gt; parser &lt;*&gt; many parser</span></span></code></pre></div><p>下面的這些解析器通過我們定義的組合器來實現一些特殊的解析器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>char :: Char -&gt; Parser Char</span></span>
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
<span class="line"><span>  pure $ maybe rest (:rest) frst</span></span></code></pre></div><p>現在為該門語言定義解析器所需要的所有東西都有了。</p><ul><li><em>練習</em> ：實現一個 EOF（end of file/input，即文件或輸入終止符）解析器組合器。</li></ul><h3 id="_3、為我們的語言實現解析器" tabindex="-1">3、為我們的語言實現解析器 <a class="header-anchor" href="#_3、為我們的語言實現解析器" aria-label="Permalink to “3、為我們的語言實現解析器”">​</a></h3><p>我們會用自頂而下的方法定義解析器。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parseExpr :: Parser Expr</span></span>
<span class="line"><span>parseExpr = fmap ATOM parseAtom &lt;|&gt; fmap LIST parseList</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parseList :: Parser [Expr]</span></span>
<span class="line"><span>parseList = parens $ sepBy spaces1 parseExpr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parseAtom :: Parser Atom</span></span>
<span class="line"><span>parseAtom = parseSymbol &lt;|&gt; parseInt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>parseSymbol :: Parser Atom</span></span>
<span class="line"><span>parseSymbol = fmap Symbol parseName</span></span></code></pre></div><p>注意到這四個函數是在我們這門語言中屬於高階描述。這解釋了為什麼 Haskell 執行解析工作這麼棒。在定義完高級部分後，我們還需要定義低級別的 <code>parseName</code> 和 <code>parseInt</code>。</p><p>我們能在這門語言中用什麼字符作為名字呢？用小寫的字母、數字和下劃線吧，而且名字的第一個字符必須是字母。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parseName :: Parser Name</span></span>
<span class="line"><span>parseName = do</span></span>
<span class="line"><span>  c  &lt;- oneOf [&#39;a&#39;..&#39;z&#39;]</span></span>
<span class="line"><span>  cs &lt;- many $ oneOf $ [&#39;a&#39;..&#39;z&#39;] ++ &quot;0123456789&quot; ++ &quot;_&quot;</span></span>
<span class="line"><span>  pure (c:cs)</span></span></code></pre></div><p>整數是一系列數字，數字前面可能有負號 <code>-</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>parseInt :: Parser Atom</span></span>
<span class="line"><span>parseInt = do</span></span>
<span class="line"><span>  sign &lt;- optional $ char &#39;-&#39;</span></span>
<span class="line"><span>  num  &lt;- many1 $ oneOf &quot;0123456789&quot;</span></span>
<span class="line"><span>  let result = read $ maybe num (:num) sign of</span></span>
<span class="line"><span>  pure $ Int result</span></span></code></pre></div><p>最後，我們會定義用來運行解析器的函數，返回值可能是一個 <code>Expr</code> 或者是一條錯誤信息。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>runExprParser :: Name -&gt; String -&gt; Either String Expr</span></span>
<span class="line"><span>runExprParser name str =</span></span>
<span class="line"><span>  case runParser name str (withSpaces parseExpr) of</span></span>
<span class="line"><span>    Left (ParseError _ errMsg) -&gt; Left errMsg</span></span>
<span class="line"><span>    Right (result, _) -&gt; Right result</span></span></code></pre></div><ul><li><em>練習 1</em> ：為第一節中定義的 <code>Program</code> 類型編寫一個解析器</li><li><em>練習 2</em> ：用 Applicative 的形式重寫 <code>parseName</code></li><li><em>練習 3</em> ：<code>parseInt</code> 可能出現溢出情況，找到處理它的方法，不要用 <code>read</code>。</li></ul><h3 id="_4、為這門語言實現一個更好看的輸出器" tabindex="-1">4、為這門語言實現一個更好看的輸出器 <a class="header-anchor" href="#_4、為這門語言實現一個更好看的輸出器" aria-label="Permalink to “4、為這門語言實現一個更好看的輸出器”">​</a></h3><p>我們還想做一件事，將我們的程序以源代碼的形式打印出來。這對完善錯誤信息很有用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>printExpr :: Expr -&gt; String</span></span>
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
<span class="line"><span>indent tabs e = concat (replicate tabs &quot;  &quot;) ++ e</span></span></code></pre></div><ul><li><em>練習</em> ：為第一節中定義的 <code>Program</code> 類型編寫一個美觀的輸出器</li></ul><p>好，目前為止我們寫了近 200 行代碼，這些代碼一般叫做編譯器的前端。我們還要寫大概 150 行代碼，用來執行三個額外的任務：我們需要根據需求定義一個 JS 的子集，定義一個將我們的語言轉譯成這個子集的轉譯器，最後把所有東西整合在一起。開始吧。</p><h3 id="_5、根據需求定義-javascript-的子集" tabindex="-1">5、根據需求定義 JavaScript 的子集 <a class="header-anchor" href="#_5、根據需求定義-javascript-的子集" aria-label="Permalink to “5、根據需求定義 JavaScript 的子集”">​</a></h3><p>首先，我們要定義將要使用的 JavaScript 的子集：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>data JSExpr</span></span>
<span class="line"><span>  = JSInt Int</span></span>
<span class="line"><span>  | JSSymbol Name</span></span>
<span class="line"><span>  | JSBinOp JSBinOp JSExpr JSExpr</span></span>
<span class="line"><span>  | JSLambda [Name] JSExpr</span></span>
<span class="line"><span>  | JSFunCall JSExpr [JSExpr]</span></span>
<span class="line"><span>  | JSReturn JSExpr</span></span>
<span class="line"><span>    deriving (Eq, Show, Read)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type JSBinOp = String</span></span></code></pre></div><p>這個數據類型表示 JavaScript 表達式。我們有兩個原子類型 <code>JSInt</code> 和 <code>JSSymbol</code>，它們是由我們這個語言中的 <code>Atom</code> 轉譯來的，我們用 <code>JSBinOp</code> 來表示二元操作，比如 <code>+</code> 或 <code>*</code>，用 <code>JSLambda</code> 來表示匿名函數，和我們語言中的 <code>lambda expression（lambda 表達式）</code> 一樣，我們將會用 <code>JSFunCall</code> 來調用函數，用 <code>let</code> 來引入新名字，用 <code>JSReturn</code> 從函數中返回值，在 JavaScript 中是需要返回值的。</p><p><code>JSExpr</code> 類型是對 JavaScript 表達式的 <strong>抽象表示</strong>。我們會把自己語言中表達式的抽象表示 <code>Expr</code> 轉譯成 JavaScript 表達式的抽象表示 <code>JSExpr</code>。但為了實現這個功能，我們需要實現 <code>JSExpr</code> ，並從這個抽象表示中生成 JavaScript 代碼。我們將通過遞歸匹配 <code>JSExpr</code> 實現，將 JS 代碼當作 <code>String</code> 來輸出。這和我們在 <code>printExpr</code> 中做的基本上是一樣的。我們還會追蹤元素的作用域，這樣我們才可以用合適的方式縮進生成的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>printJSOp :: JSBinOp -&gt; String</span></span>
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
<span class="line"><span>  JSReturn expr      -&gt; (if doindent then indent tabs else id) $ &quot;return &quot; ++ printJSExpr False tabs expr ++ &quot;;&quot;</span></span></code></pre></div><ul><li><em>練習 1</em> ：添加 <code>JSProgram</code> 類型，它可以包含多個 <code>JSExpr</code> ，然後創建一個叫做 <code>printJSExprProgram</code> 的函數來生成代碼。</li><li><em>練習 2</em> ：添加 <code>JSExpr</code> 的新類型：<code>JSIf</code>，併為其生成代碼。</li></ul><h3 id="_6、實現到我們定義的-javascript-子集的代碼轉譯器" tabindex="-1">6、實現到我們定義的 JavaScript 子集的代碼轉譯器 <a class="header-anchor" href="#_6、實現到我們定義的-javascript-子集的代碼轉譯器" aria-label="Permalink to “6、實現到我們定義的 JavaScript 子集的代碼轉譯器”">​</a></h3><p>我們快做完了。這一節將會創建函數，將 <code>Expr</code> 轉譯成 <code>JSExpr</code>。</p><p>基本思想很簡單，我們會將 <code>ATOM</code> 轉譯成 <code>JSSymbol</code> 或者 <code>JSInt</code>，然後會將 <code>LIST</code> 轉譯成一個函數調用或者轉譯的特例。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type TransError = String</span></span>
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
<span class="line"><span>    JSFunCall &lt;$&gt; translateToJS f &lt;*&gt; traverse translateToJS xs</span></span></code></pre></div><p><code>builtins</code> 是一系列要轉譯的特例，就像 <code>lambada</code> 和 <code>let</code>。每一種情況都可以獲得一系列參數，驗證它是否合乎語法規範，然後將其轉譯成等效的 <code>JSExpr</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>type Builtin  = [Expr] -&gt; Either TransError JSExpr</span></span>
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
<span class="line"><span>  ]</span></span></code></pre></div><p>我們這種情況，會將內建的特殊形式當作特殊的、非第一類的進行對待，因此不可能將它們當作第一類函數。</p><p>我們會把 Lambda 表達式轉譯成一個匿名函數：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transLambda :: [Expr] -&gt; Either TransError JSExpr</span></span>
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
<span class="line"><span>fromSymbol e = Left $ &quot;cannot bind value to non symbol type: &quot; ++ show e</span></span></code></pre></div><p>我們會將 <code>let</code> 轉譯成帶有相關名字參數的函數定義，然後帶上參數調用函數，因此會在這一作用域中引入變量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transLet :: [Expr] -&gt; Either TransError JSExpr</span></span>
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
<span class="line"><span>      ]</span></span></code></pre></div><p>我們會將可以在多個參數之間執行的操作符轉譯成一系列二元操作符。比如：<code>(add 1 2 3)</code> 將會變成 <code>1 + (2 + 3)</code>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transBinOp :: Name -&gt; Name -&gt; [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>transBinOp f _ []   = Left $ &quot;Syntax error: &#39;&quot; ++ f ++ &quot;&#39; expected at least 1 argument, got: 0&quot;</span></span>
<span class="line"><span>transBinOp _ _ [x]  = translateToJS x</span></span>
<span class="line"><span>transBinOp _ f list = foldl1 (JSBinOp f) &lt;$&gt; traverse translateToJS list</span></span></code></pre></div><p>然後我們會將 <code>print</code> 轉換成對 <code>console.log</code> 的調用。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>transPrint :: [Expr] -&gt; Either TransError JSExpr</span></span>
<span class="line"><span>transPrint [expr] = JSFunCall (JSSymbol &quot;console.log&quot;) . (:[]) &lt;$&gt; translateToJS expr</span></span>
<span class="line"><span>transPrint xs     = Left $ &quot;Syntax error. print expected 1 arguments, got: &quot; ++ show (length xs)</span></span></code></pre></div><p>注意，如果我們將這些代碼當作 <code>Expr</code> 的特例進行解析，那我們就可能會跳過語法驗證。</p><ul><li><em>練習 1</em> ：將 <code>Program</code> 轉譯成 <code>JSProgram</code></li><li><em>練習 2</em> ：為 <code>if Expr Expr Expr</code> 添加一個特例，並將它轉譯成你在上一次練習中實現的 <code>JSIf</code> 條件語句。</li></ul><h3 id="_7、把所有東西整合到一起" tabindex="-1">7、把所有東西整合到一起 <a class="header-anchor" href="#_7、把所有東西整合到一起" aria-label="Permalink to “7、把所有東西整合到一起”">​</a></h3><p>最終，我們將會把所有東西整合到一起。我們會：</p><ol><li>讀取文件</li><li>將文件解析成 <code>Expr</code></li><li>將文件轉譯成 <code>JSExpr</code></li><li>將 JavaScript 代碼發送到標準輸出流</li></ol><p>我們還會啓用一些用於測試的標誌位：</p><ul><li><code>--e</code> 將進行解析並打印出表達式的抽象表示（<code>Expr</code>）</li><li><code>--pp</code> 將進行解析，美化輸出</li><li><code>--jse</code> 將進行解析、轉譯、並打印出生成的 JS 表達式（<code>JSExpr</code>）的抽象表示</li><li><code>--ppc</code> 將進行解析，美化輸出並進行編譯</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>main :: IO ()</span></span>
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
<span class="line"><span>compile str = printJSExpr False 0 &lt;$&gt; (translateToJS =&lt;&lt; runExprParser &quot;compile&quot; str)</span></span></code></pre></div>`,76)),p("p",null,[s[9]||(s[9]=a("大功告成。將自己的語言編譯到 JS 子集的編譯器已經完成了。再説一次，你可以在 ",-1)),e(n,{href:"https://gist.github.com/soupi/d4ff0727ccb739045fad6cdf533ca7dd"},{default:i(()=>[...s[8]||(s[8]=[a("這裏",-1)])]),_:1}),s[10]||(s[10]=a(" 看到完整的源文件。",-1))]),s[29]||(s[29]=t(`<p>用我們的編譯器運行第一節的示例，產生的 JavaScript 代碼如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ runhaskell Lisp.hs example.lsp</span></span>
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
<span class="line"><span>})</span></span></code></pre></div><p>如果你在自己電腦上安裝了 node.js，你可以用以下命令運行這段代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ runhaskell Lisp.hs example.lsp | node -p</span></span>
<span class="line"><span>36</span></span>
<span class="line"><span>undefined</span></span></code></pre></div><ul><li><em>最終練習</em> : 編譯有多個表達式的程序而非僅編譯一個表達式。</li></ul><hr>`,6)),p("p",null,[s[12]||(s[12]=a("via: ",-1)),e(n,{href:"https://gilmi.me/blog/post/2016/10/14/lisp-to-js"},{default:i(()=>[...s[11]||(s[11]=[a("https://gilmi.me/blog/post/2016/10/14/lisp-to-js",-1)])]),_:1})]),p("p",null,[s[17]||(s[17]=a("作者：",-1)),e(n,{href:"https://gilmi.me/home"},{default:i(()=>[...s[13]||(s[13]=[a("Gil Mizrahi",-1)])]),_:1}),s[18]||(s[18]=a(" 選題：",-1)),e(n,{href:"https://github.com/oska874"},{default:i(()=>[...s[14]||(s[14]=[a("oska874",-1)])]),_:1}),s[19]||(s[19]=a(" 譯者：",-1)),e(n,{href:"https://github.com/BriFuture"},{default:i(()=>[...s[15]||(s[15]=[a("BriFuture",-1)])]),_:1}),s[20]||(s[20]=a(" 校對：",-1)),e(n,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),p("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(n,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原創編譯，",-1)),e(n,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[a("Linux中國",-1)])]),_:1}),s[25]||(s[25]=a(" 榮譽推出",-1))])])}const y=l(d,[["render",g]]);export{x as __pageData,y as default};
