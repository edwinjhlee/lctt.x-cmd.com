import{_ as t,a0 as o,w as c,s as d,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const _=JSON.parse('{"title":"Rust 基础系列 #5: Rust 中的函数 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基础系列 #5: Rust 中的函数 | LCTT (202305) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基础系列 #5: Rust 中的函数 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基础系列 #5: Rust 中的函数 | LCTT (202305) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202305/20230424.0 ⭐️⭐️ Rust Basics Series 5 Functions in the Rust Programming Language","title":"Rust 基础系列 #5: Rust 中的函数","tag":"202305","desc":""},"relativePath":"202305/20230424.0 ⭐️⭐️ Rust Basics Series 5 Functions in the Rust Programming Language.md","filePath":"[post].md"}'),r={name:"202305/20230424.0 ⭐️⭐️ Rust Basics Series 5 Functions in the Rust Programming Language.md"};function h(u,s,g,k,b,f){const a=o("Link");return c(),d("div",null,[s[18]||(s[18]=l(`<h1 id="rust-基础系列-5-rust-中的函数" tabindex="-1">Rust 基础系列 #5: Rust 中的函数 <a class="header-anchor" href="#rust-基础系列-5-rust-中的函数" aria-label="Permalink to “Rust 基础系列 #5: Rust 中的函数”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202305/29/150550h23qbhahwzb66hb1.jpg" alt=""></p><blockquote><p>在这一章中，在实例的帮助下，学习如何使用函数并从中返回值。</p></blockquote><p>就跟任何现代编程语言一样，Rust 也有函数。</p><p>你已经熟悉的函数是 <code>main</code> 函数。这个函数在程序启动时被调用。</p><p>但是其他函数呢？在本文中，你将学习如何在 Rust 程序中使用函数。</p><h3 id="函数的基本语法" tabindex="-1">函数的基本语法 <a class="header-anchor" href="#函数的基本语法" aria-label="Permalink to “函数的基本语法”">​</a></h3><p>你可能已经在我们声明 <code>main</code> 函数时知道了这一点，不管怎么样，还是让我们看一下声明函数的语法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 声明函数</span></span>
<span class="line"><span>fn function_name() {</span></span>
<span class="line"><span>    &lt;statement(s)&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用函数</span></span>
<span class="line"><span>function_name();</span></span></code></pre></div><p>来让我们看一个简单的函数，它将字符串 <code>&quot;Hi there!&quot;</code> 打印到标准输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    greet();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn greet() {</span></span>
<span class="line"><span>    println!(&quot;Hi there!&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>📋 与 C 不一样的是，不管你是否要在声明或定义之前调用函数都没有关系。只要这个函数在 <em>某个地方</em> 被声明了，Rust 就会处理它。</p></blockquote><p>正如预期，它的输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hi there!</span></span></code></pre></div><p>这挺简单的。让我们把它提升到下一个级别。让我们创建一个接受参数并返回值的函数。有没有参数和有没有返回值这两者之间无关。</p><h3 id="使用函数接受参数" tabindex="-1">使用函数接受参数 <a class="header-anchor" href="#使用函数接受参数" aria-label="Permalink to “使用函数接受参数”">​</a></h3><p>声明一个接受参数的函数的语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 声明函数</span></span>
<span class="line"><span>fn function_name(variable_name: type) {</span></span>
<span class="line"><span>    &lt;statement(s)&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用函数</span></span>
<span class="line"><span>function_name(value);</span></span></code></pre></div>`,18)),i("p",null,[s[1]||(s[1]=n("你可以把函数参数想象成一个传递给函数的 ",-1)),p(a,{href:"https://linux.cn/article-15837-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("元组",-1)])]),_:1}),s[2]||(s[2]=n("。它可以接受多种数据类型的参数，而且你可以接受任意多个参数。所以，你不必局限于接受相同类型的参数。",-1))]),s[19]||(s[19]=l(`<p>与某些语言不同的是，Rust 没有 <em>默认参数</em>。<strong>在调用函数时填充所有参数是强制性的</strong>。</p><h4 id="示例-饥饿函数" tabindex="-1">示例：饥饿函数 <a class="header-anchor" href="#示例-饥饿函数" aria-label="Permalink to “示例：饥饿函数”">​</a></h4><p>来让我们看一个程序来更好地理解这个。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    food(2, 4);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn food(theplas: i32, rotis: i32) {</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;我饿了... 我需要 {} 个葫芦巴叶饼和 {} 个罗提！&quot;,</span></span>
<span class="line"><span>        theplas, rotis</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在第 5 行，我声明了一个名为 <code>food</code> 的函数。这个函数接受 2 个参数：<code>theplas</code> 和 <code>rotis</code>（印度食物的名字）。然后我打印了这些变量的内容。</p><p>对于 <code>main</code> 函数，我使用参数 <code>2</code> 和 <code>4</code> 调用 <code>food</code> 函数。这意味着 <code>theplas</code> 被赋值为 <code>2</code>，<code>rotis</code> 被赋值为 <code>4</code>。</p><p>来让我们看一下程序的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我饿了... 我需要 2 个葫芦巴叶饼和 4 个罗提！</span></span></code></pre></div><p>我现在真的饿了... 😋</p><h3 id="从函数返回值" tabindex="-1">从函数返回值 <a class="header-anchor" href="#从函数返回值" aria-label="Permalink to “从函数返回值”">​</a></h3><p>就像函数可以接受参数一样，函数也可以返回一个或多个值。这样的函数的语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 声明函数</span></span>
<span class="line"><span>fn function_name() -&gt; data_type {</span></span>
<span class="line"><span>    &lt;statement(s)&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调用函数</span></span>
<span class="line"><span>let x = function_name();</span></span></code></pre></div><p>函数可以使用 <code>return</code> 关键字或者使用表达式而不是语句来返回一个值。</p><p>等等！什么是表达式？</p><h4 id="在进一步之前-语句与表达式" tabindex="-1">在进一步之前：语句与表达式 <a class="header-anchor" href="#在进一步之前-语句与表达式" aria-label="Permalink to “在进一步之前：语句与表达式”">​</a></h4><p>在讲解 Rust 函数的例子中提起这个可能不太合适，但是你应该理解 Rust 和其他编程语言中语句和表达式的区别。</p><p>语句是以分号结尾且 <em>不会计算出某个值</em> 的代码行。另一方面，表达式是一行不以分号结尾且计算出某个值的代码行。</p><p>来让我们用一个例子来理解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a = 873;</span></span>
<span class="line"><span>    let b = {</span></span>
<span class="line"><span>        // 语句</span></span>
<span class="line"><span>        println!(&quot;Assigning some value to b...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 表达式</span></span>
<span class="line"><span>        a * 10</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;b: {b}&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在第 3 行，我开始了一个代码块，在这个代码块中我有一个语句和一个表达式。注释标明了哪个是哪个。</p><p>在第 5 行的代码不会计算出某个值，因此需要以分号结尾。这是一个语句。</p><p>第 8 行的代码计算出了一个值。它是 <code>a * 10</code>（<code>873 * 10</code>），并计算出了 <code>8730</code>。因为这一行没有以分号结尾，所以这是一个表达式。</p><blockquote><p>📋 使用表达式是从代码块中返回某些东西的一种方便的方法。因此，当返回一个值时，它是 <code>return</code> 关键字的替代方案。表达式不仅仅用于从函数中 “返回” 一个值。正如你刚刚看到的，<code>a * 10</code> 的值是从内部作用域 “返回” 到外部作用域，并赋值给变量 <code>b</code>。一个简单的作用域不是一个函数，但表达式的值仍然被 “返回” 了。</p></blockquote><h4 id="示例-购买腐烂的水果" tabindex="-1">示例：购买腐烂的水果 <a class="header-anchor" href="#示例-购买腐烂的水果" aria-label="Permalink to “示例：购买腐烂的水果”">​</a></h4><p>来让我们看一个演示以理解函数如何返回一个值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;如果我从水果摊买了 2 公斤苹果，我必须付给他们 {} 印度卢比。&quot;,</span></span>
<span class="line"><span>        retail_price(2.0)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;但是，如果我从水果摊买了 30 公斤苹果，我就要付给他们 {} 印度卢比。&quot;,</span></span>
<span class="line"><span>        wholesale_price(30.0)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn retail_price(weight: f64) -&gt; f64 {</span></span>
<span class="line"><span>    return weight * 500.0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn wholesale_price(weight: f64) -&gt; f64 {</span></span>
<span class="line"><span>    weight * 400.0</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我在上述代码中有两个函数：<code>retail_price</code> 和 <code>wholesale_price</code>。两个函数都接受一个参数并将值存储在 <code>weight</code> 变量中。这个变量的类型是 <code>f64</code>，函数签名表示最终函数返回一个 <code>f64</code> 值。</p><p>这两个函数都将购买的苹果的重量乘以一个数字。这个数字表示苹果的当前每公斤价格。由于批发商有大量订单，物流在某种程度上更容易，价格可以降低一点。</p><p>除了每公斤价格之外，这两个函数还有一个区别。那就是，<code>retail_price</code> 函数使用 <code>return</code> 关键字返回乘积。而 <code>wholesale_price</code> 函数使用表达式返回乘积。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>如果我从水果摊买了 2 公斤苹果，我必须付给他们 1000 印度卢比。</span></span>
<span class="line"><span>但是，如果我从水果摊买了 30 公斤苹果，我就要付给他们 12000 印度卢比。</span></span></code></pre></div><p>输出显示，从函数返回值的两种方法都按预期工作。</p><h4 id="返回多个值" tabindex="-1">返回多个值 <a class="header-anchor" href="#返回多个值" aria-label="Permalink to “返回多个值”">​</a></h4><p>你可以有一个返回不同类型的多个值的函数。你有很多选择，但返回一个元组是最简单的。</p><p>接下来是一个示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let (maths, english, science, sanskrit) = tuple_func();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;数学考试得分: {maths}&quot;);</span></span>
<span class="line"><span>    println!(&quot;英语考试得分: {english}&quot;);</span></span>
<span class="line"><span>    println!(&quot;科学考试得分: {science}&quot;);</span></span>
<span class="line"><span>    println!(&quot;梵语考试得分: {sanskrit}&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn tuple_func() -&gt; (f64, f64, f64, f64) {</span></span>
<span class="line"><span>    // return marks for a student</span></span>
<span class="line"><span>    let maths = 84.50;</span></span>
<span class="line"><span>    let english = 85.00;</span></span>
<span class="line"><span>    let science = 75.00;</span></span>
<span class="line"><span>    let sanskrit = 67.25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    (maths, english, science, sanskrit)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>函数 <code>tuple_func</code> 返回 4 个封装在一个元组中的 <code>f64</code> 值。这些值是一个学生在四门科目（满分 100 分）中获得的分数。</p><p>当函数被调用时，这个元组被返回。我可以使用 <code>tuple_name.0</code> 方案打印这些值，但我认为最好先解构元组，这样可以帮助我们搞清楚值对应的是什么。然后我使用了包含被解构的元组的值的变量来打印分数。</p><p>这是我得到的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>数学考试得分: 84.5</span></span>
<span class="line"><span>英语考试得分: 85</span></span>
<span class="line"><span>科学考试得分: 75</span></span>
<span class="line"><span>梵语考试得分: 67.25</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>本文介绍了 Rust 编程语言中的函数。这些是函数的 “类型”：</p><ul><li>不接受任何参数也不返回任何值的函数</li><li>接收一个或多个参数的函数</li><li>给调用者返回一个或多个值的函数</li></ul><p>你知道接下来是什么吗？Rust 中的条件语句，也就是 if-else。请继续关注并享受学习 Rust 的过程。</p><p><em>（题图：MJ/5a07503b-c691-4276-83b2-bb42f5fda347）</em></p><hr>`,45)),i("p",null,[s[4]||(s[4]=n("via: ",-1)),p(a,{href:"https://itsfoss.com/rust-functions/"},{default:e(()=>[...s[3]||(s[3]=[n("https://itsfoss.com/rust-functions/",-1)])]),_:1})]),i("p",null,[s[9]||(s[9]=n("作者：",-1)),p(a,{href:"https://itsfoss.com/author/pratham/"},{default:e(()=>[...s[5]||(s[5]=[n("Pratham Patel",-1)])]),_:1}),s[10]||(s[10]=n(" 选题：",-1)),p(a,{href:"https://github.com/lkxed/"},{default:e(()=>[...s[6]||(s[6]=[n("lkxed",-1)])]),_:1}),s[11]||(s[11]=n(" 译者：",-1)),p(a,{href:"https://github.com/Cubik65536"},{default:e(()=>[...s[7]||(s[7]=[n("Cubik65536",-1)])]),_:1}),s[12]||(s[12]=n(" 校对：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原创编译，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中国",-1)])]),_:1}),s[17]||(s[17]=n(" 荣誉推出",-1))])])}const y=t(r,[["render",h]]);export{_ as __pageData,y as default};
