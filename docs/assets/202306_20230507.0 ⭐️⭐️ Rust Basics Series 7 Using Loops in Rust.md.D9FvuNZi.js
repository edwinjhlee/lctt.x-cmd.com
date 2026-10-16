import{_ as l,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as i,ao as d}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Rust 基础系列 #7: 在 Rust 中使用循环 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基础系列 #7: 在 Rust 中使用循环 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基础系列 #7: 在 Rust 中使用循环 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基础系列 #7: 在 Rust 中使用循环 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230507.0 ⭐️⭐️ Rust Basics Series 7 Using Loops in Rust","title":"Rust 基础系列 #7: 在 Rust 中使用循环","tag":"202306","desc":""},"relativePath":"202306/20230507.0 ⭐️⭐️ Rust Basics Series 7 Using Loops in Rust.md","filePath":"[post].md"}'),r={name:"202306/20230507.0 ⭐️⭐️ Rust Basics Series 7 Using Loops in Rust.md"};function h(u,s,g,b,k,f){const p=t("Link");return o(),c("div",null,[s[22]||(s[22]=a("h1",{id:"rust-基础系列-7-在-rust-中使用循环",tabindex:"-1"},[n("Rust 基础系列 #7: 在 Rust 中使用循环 "),a("a",{class:"header-anchor",href:"#rust-基础系列-7-在-rust-中使用循环","aria-label":"Permalink to “Rust 基础系列 #7: 在 Rust 中使用循环”"},"​")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202306/15/164034klkjbf3ibapjbbfk.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在 Rust 系列的 ",-1)),e(p,{href:"https://linux.cn/article-15896-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("上一篇文章",-1)])]),_:1}),s[2]||(s[2]=n(" 中，我介绍了如何使用 ",-1)),s[3]||(s[3]=a("code",null,"if",-1)),s[4]||(s[4]=n(" 和 ",-1)),s[5]||(s[5]=a("code",null,"else",-1)),s[6]||(s[6]=n(" 关键字来处理 Rust 程序的控制流。",-1))]),s[24]||(s[24]=d(`<p>这是处理程序控制流的一种方法。另一种方法是使用循环。因此，让我们在本文中看看循环。</p><h3 id="rust-中可用的循环" tabindex="-1">Rust 中可用的循环 <a class="header-anchor" href="#rust-中可用的循环" aria-label="Permalink to “Rust 中可用的循环”">​</a></h3><p>Rust 编程语言有三种不同的循环，基于你想要实现什么以及可用的内容：</p><ul><li><code>for</code></li><li><code>while</code></li><li><code>loop</code></li></ul><p>我假设你对 <code>for</code> 和 <code>while</code> 已经很熟悉了，但 <code>loop</code> 对你来说可能是个新概念。让我们先从熟悉的概念开始。</p><h3 id="for-循环" tabindex="-1">for 循环 <a class="header-anchor" href="#for-循环" aria-label="Permalink to “for 循环”">​</a></h3><p><code>for</code> 循环主要用于迭代一种称为迭代器的东西。</p><p>这个迭代器可以从任何东西中创建，从数组、向量（很快就会介绍！）、一系列值，或者任何自定义的东西。这里的可能性是无限的。</p><p>来看看 <code>for</code> 循环的语法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for 迭代变量 in 迭代器 {</span></span>
<span class="line"><span>    &lt;语句&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中的 <code>迭代变量</code> 在大多数其他编程语言教程中通常被称为 <code>i</code> ; )</p><p><code>迭代器</code> 可以是任何东西，只要它能告诉下一个值是什么，如果有的话。</p><p>来通过一个程序来理解这个。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let my_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;迭代数组&quot;);</span></span>
<span class="line"><span>    for element in my_arr {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n迭代一个真正的迭代器&quot;);</span></span>
<span class="line"><span>    for element in my_arr.iter() {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\nPython 风格的范围&quot;);</span></span>
<span class="line"><span>    for element in 0..10 {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，我声明了一个数组，它包含从 0 到 9 的 10 个数字。在第 5 行的 <code>for</code> 循环中，我只是将这个数组指定为迭代器，Rust 会自动处理对这个数组的所有元素的迭代。不需要花哨的 <code>my_arr[i]</code> 魔法。</p><p>但是，在第 10 行，我调用了 <code>.iter()</code> 函数。这是一个明确的提及，它基于 <code>my_arr</code> 的值来获取一个迭代器。这个循环和第 5 行的循环之间唯一的区别是，这里你是通过在数组上调用 <code>.iter()</code> 函数来明确地调用它的。</p><p><em>在这个上下文环境中</em>，在一个数据类型上调用 <code>.iter()</code> 函数不是必须的。因为这是一个数组，是语言本身提供的一种数据类型，Rust 已经知道如何处理它了。但是你 <em>需要</em> 在自定义数据类型中使用它。</p><p>最后，在第 15 行，我们有一个循环，它循环遍历一个范围。嗯，差不多是这样。如果你仔细看，这个范围看起来很像切片 “类型”。Rust 也知道这一点，并且 <em>为</em> 你处理了迭代（哈哈，明白了吗？）。</p><blockquote><p>LCTT 译注：此处的梗是，“为你处理了迭代” 的英文原文是 “handles iteration <em>for</em> you&quot;，其中的 “for” 与 “for 循环” 的 “for” 是同一个单词。</p></blockquote><p>输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>迭代数组</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>迭代一个真正的迭代器</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Python 风格的范围</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span></code></pre></div><h3 id="while-循环" tabindex="-1">while 循环 <a class="header-anchor" href="#while-循环" aria-label="Permalink to “while 循环”">​</a></h3><p><code>while</code> 循环可以被认为是非常类似于 <code>if</code> 条件语句。使用 <code>if</code> 语句，只要用户提供的条件为 <code>true</code>，<code>if</code> 语句体中的代码就会被执行 <em>一次</em>。</p><p>但是，在 <code>while</code> 循环中，如果条件评估为 <code>true</code>，循环就会开始循环循环体。只要条件继续评估为 <code>true</code>，循环就会继续迭代。</p><p><code>while</code> 循环只有在循环完成当前迭代中所有语句的执行并且在检查条件时，它的结果为 <code>false</code> 时才会停止。</p><p>来看看 <code>while</code> 循环的语法...</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while 条件 {</span></span>
<span class="line"><span>    &lt;语句&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看到了吗？和 <code>if</code> 条件语句非常相似！不过没有 <code>else</code> 块 ; )</p><p>来看一个程序来更好地理解这个。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut var = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while var &lt; 3 {</span></span>
<span class="line"><span>        println!(&quot;{var}&quot;);</span></span>
<span class="line"><span>        var += 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我有一个可变变量 <code>var</code>，它的初始值为 0。只要可变变量 <code>var</code> 中存储的值小于 3，<code>while</code> 循环就会执行。</p><p>在循环中，<code>var</code> 的值被打印出来，然后它的值被增加 1。</p><p>这是上面代码的输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span></code></pre></div><h3 id="loop-循环" tabindex="-1">loop 循环 <a class="header-anchor" href="#loop-循环" aria-label="Permalink to “loop 循环”">​</a></h3><p>Rust 有一个无限循环。是的，一个没有开始条件和停止条件的循环。它只是一直循环，直到永远。当然，它有触发器来停止代码本身的循环执行。</p><p>无限循环的语法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>loop {</span></span>
<span class="line"><span>    &lt;语句&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>📋 这些循环主要用于 GUI 软件，退出是一个 <em>显式</em> 操作。</p></blockquote><p>在我给你一个例子之前，因为这个循环非常特殊，让我们先看看如何 <em>退出</em> 它 :p</p><p>要停止无限循环的执行，需要在循环内使用 <code>break</code> 关键字。</p><p>来看一个例子，只有 0 到 3 之间的整数（包括 0 和 3）才会被打印到程序输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut var = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    loop {</span></span>
<span class="line"><span>        if var &gt; 3 {</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;{}&quot;, var);</span></span>
<span class="line"><span>        var += 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看待这个特定的例子的最好方法是将它看作是一个增加了一堆没有必要的东西的 <code>while</code> 循环 ; )</p><p>你有一个可变变量 <code>var</code>，它的初始值为 0，它被用作迭代器。无限循环从一个 <code>if</code> 条件开始，如果 <code>var</code> 的值大于 3，<code>break</code> 关键字就会被执行。后来，就像 <code>while</code> 循环的前一个例子一样，<code>var</code> 的值被打印到标准输出，然后它的值被增加 1。</p><p>它的输出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span></code></pre></div><h3 id="标记循环" tabindex="-1">标记循环 <a class="header-anchor" href="#标记循环" aria-label="Permalink to “标记循环”">​</a></h3><p>假设有两个无限循环，一个嵌套在另一个中。由于某种原因，退出条件在最内层循环中被检查，但这个退出条件是为了退出最外层循环。</p><p>在这种情况下，标记循环可能是有益的。</p><blockquote><p>💡 <code>break</code> 和 <code>continue</code> 关键字并不仅仅用于无限循环。它们可以用于 Rust 语言提供的所有三种循环。</p></blockquote><p>接下来是如何标记循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;标记: loop {}</span></span></code></pre></div><p>要告诉编译器一个循环被标记了，从一个单引号字符开始，输入它的标签，然后跟着一个冒号。然后，继续使用你通常定义循环的方式。</p><p>当你需要退出某个循环时，只需像这样指定循环标签：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>break &#39;标记;</span></span></code></pre></div><p>来看一个例子来更好地理解这个。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut a = 0;</span></span>
<span class="line"><span>    let mut b = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;parent: loop {</span></span>
<span class="line"><span>        a += 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        loop {</span></span>
<span class="line"><span>            println!(&quot;a: {}, b: {}&quot;, a, b);</span></span>
<span class="line"><span>            b += 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if a + b == 10 {</span></span>
<span class="line"><span>                println!(&quot;\\n{} + {} = 10&quot;, a, b);</span></span>
<span class="line"><span>                break &#39;parent;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，我使用两个可变变量 <code>a</code> 和 <code>b</code>，它们的初始值都设置为 0。</p><p>然后，最外层的循环被标记为 <code>parent</code>。<code>parent</code> 循环将变量 <code>a</code> 的值增加 1，并有一个内部/子循环。</p><p>这个（在第 8 行的）子循环打印变量 <code>a</code> 和 <code>b</code> 的值。在这个循环内部，变量 <code>b</code> 的值增加了 1。退出条件是 <code>a + b == 10</code>。这意味着只要变量 <code>a</code> 和 <code>b</code> 中存储的值相加，结果为 10，<code>parent</code> 循环就会被打破。即使第 14 行的 <code>break</code> 条件“属于”内部循环，它也会打破 <code>parent</code> 循环。</p><p>来看看程序的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a: 1, b: 0</span></span>
<span class="line"><span>a: 1, b: 1</span></span>
<span class="line"><span>a: 1, b: 2</span></span>
<span class="line"><span>a: 1, b: 3</span></span>
<span class="line"><span>a: 1, b: 4</span></span>
<span class="line"><span>a: 1, b: 5</span></span>
<span class="line"><span>a: 1, b: 6</span></span>
<span class="line"><span>a: 1, b: 7</span></span>
<span class="line"><span>a: 1, b: 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 + 9 = 10</span></span></code></pre></div><p>就像从程序输出中可以看出的那样，循环在 <code>a</code> 和 <code>b</code> 分别具有值 1 和 9 时停止。</p><h3 id="continue-关键字" tabindex="-1">continue 关键字 <a class="header-anchor" href="#continue-关键字" aria-label="Permalink to “continue 关键字”">​</a></h3><p>如果你已经在其他编程语言（如 C/C++/Java/Python）中使用过循环，你可能已经知道 <code>continue</code> 关键字的用法。</p><p>当 <code>break</code> 关键字用于完全停止循环执行时，<code>continue</code> 关键字用于“跳过”循环执行的 <strong>当前迭代</strong> 并从下一迭代开始（如果条件允许）。</p><p>来看一个例子来理解 <code>continue</code> 关键字的工作原理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    for i in 0..10 {</span></span>
<span class="line"><span>        if i % 2 == 0 {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, i)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的代码中，我有一个 <code>for</code> 循环，它迭代了 0 到 9 之间的整数（包括 0 和 9）。一旦循环开始，我就设置了一个条件检查，看看这个数字是不是偶数。如果这个数字是偶数，<code>continue</code> 关键字就会被执行。</p><p>但是如果这个数字是奇数，这个数字就会被打印到程序输出。</p><p>来看看这个程序的输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>正如你所看到的，循环似乎一直在“进行”，尽管 0 到 9 之间显然有偶数。但是因为我使用了 <code>continue</code> 关键字，当遇到这个关键字时，循环执行就会停止。</p><p>这个循环跳过了它下面的任何东西，并继续下一次迭代。这就是为什么偶数没有被打印出来，但是 0 到 9 之间的所有奇数都被打印到了程序输出中。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>要总结这篇长文，我演示了 3 种不同循环的用法：<code>for</code>、<code>while</code> 和 <code>loop</code>。我还讨论了两个关键字，它们影响这些循环的控制流：<code>break</code> 和 <code>continue</code>。</p><p>我希望你现在能理解每个循环的适当用例。如果你有任何问题，请告诉我。</p><p><em>（题图：MJ/25579e09-ae1c-47d3-8266-3bd9a54456c0）</em></p><hr>`,80)),a("p",null,[s[8]||(s[8]=n("via: ",-1)),e(p,{href:"https://itsfoss.com/rust-loops/"},{default:i(()=>[...s[7]||(s[7]=[n("https://itsfoss.com/rust-loops/",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("作者：",-1)),e(p,{href:"https://itsfoss.com/author/pratham/"},{default:i(()=>[...s[9]||(s[9]=[n("Pratham Patel",-1)])]),_:1}),s[14]||(s[14]=n(" 选题：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:i(()=>[...s[10]||(s[10]=[n("lkxed",-1)])]),_:1}),s[15]||(s[15]=n(" 译者：",-1)),e(p,{href:"https://github.com/Cubik65536"},{default:i(()=>[...s[11]||(s[11]=[n("Cubik65536",-1)])]),_:1}),s[16]||(s[16]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[12]||(s[12]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中国",-1)])]),_:1}),s[21]||(s[21]=n(" 荣誉推出",-1))])])}const v=l(r,[["render",h]]);export{C as __pageData,v as default};
