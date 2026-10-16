import{_ as i,a0 as o,w as u,s as c,I as a,x as s,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const k=JSON.parse('{"title":"Rust 基础系列 #8：编写里程碑 Rust 程序 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基础系列 #8：编写里程碑 Rust 程序 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基础系列 #8：编写里程碑 Rust 程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基础系列 #8：编写里程碑 Rust 程序 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230515.0 ⭐️⭐️ Rust Basics Series 8 Write the Milestone Rust Program","title":"Rust 基础系列 #8：编写里程碑 Rust 程序","tag":"202306","desc":""},"relativePath":"202306/20230515.0 ⭐️⭐️ Rust Basics Series 8 Write the Milestone Rust Program.md","filePath":"[post].md"}'),r={name:"202306/20230515.0 ⭐️⭐️ Rust Basics Series 8 Write the Milestone Rust Program.md"};function d(q,n,f,_,m,g){const p=o("Link");return u(),c("div",null,[n[39]||(n[39]=a("h1",{id:"rust-基础系列-8-编写里程碑-rust-程序",tabindex:"-1"},[s("Rust 基础系列 #8：编写里程碑 Rust 程序 "),a("a",{class:"header-anchor",href:"#rust-基础系列-8-编写里程碑-rust-程序","aria-label":"Permalink to “Rust 基础系列 #8：编写里程碑 Rust 程序”"},"​")],-1)),n[40]||(n[40]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202306/23/114333ni9fkzpykmz37zpu.jpg",alt:""})],-1)),a("p",null,[n[5]||(n[5]=s("到目前为止，我们已经讲解了包括 ",-1)),e(p,{href:"https://linux.cn/article-15771-1.html"},{default:l(()=>[...n[0]||(n[0]=[s("变量、可变性、常量",-1)])]),_:1}),n[6]||(n[6]=s("、",-1)),e(p,{href:"https://linux.cn/article-15811-1.html"},{default:l(()=>[...n[1]||(n[1]=[s("数据类型",-1)])]),_:1}),n[7]||(n[7]=s("、",-1)),e(p,{href:"https://linux.cn/article-15855-1.html"},{default:l(()=>[...n[2]||(n[2]=[s("函数",-1)])]),_:1}),n[8]||(n[8]=s("、",-1)),e(p,{href:"https://linux.cn/article-15896-1.html"},{default:l(()=>[...n[3]||(n[3]=[s("if-else 语句",-1)])]),_:1}),n[9]||(n[9]=s(" 和 ",-1)),e(p,{href:"https://linux.cn/article-15908-1.html"},{default:l(()=>[...n[4]||(n[4]=[s("循环",-1)])]),_:1}),n[10]||(n[10]=s(" 在内的一些关于 Rust 编程的基础知识。",-1))]),n[41]||(n[41]=t(`<p>在 Rust 基础系列的最后一章里，让我们现在用 Rust 编写一个程序，使用这些主题，以便更好地理解它们在现实世界中的用途。让我们来编写一个相对简单的程序，用来从水果市场订购水果。</p><h3 id="我们程序的基本结构" tabindex="-1">我们程序的基本结构 <a class="header-anchor" href="#我们程序的基本结构" aria-label="Permalink to “我们程序的基本结构”">​</a></h3><p>来让我们首先向用户问好，并告诉他们如何与程序交互。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>    println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="获取用户输入" tabindex="-1">获取用户输入 <a class="header-anchor" href="#获取用户输入" aria-label="Permalink to “获取用户输入”">​</a></h3><p>上面的代码非常简单。目前，你不知道接下来该做什么，因为你不知道用户接下来想做什么。</p><p>所以让我们添加一些代码，接受用户输入并将其存储在某个地方以便稍后解析，然后根据用户输入采取适当的操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>    println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取用户输入</span></span>
<span class="line"><span>    let mut user_input = String::new();</span></span>
<span class="line"><span>    io::stdin()</span></span>
<span class="line"><span>        .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>        .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>有三个新元素需要告诉你。所以让我们对这些新元素进行浅层次的探索。</p><h4 id="_1-理解-use-关键字" tabindex="-1">1. 理解 use 关键字 <a class="header-anchor" href="#_1-理解-use-关键字" aria-label="Permalink to “1. 理解 use 关键字”">​</a></h4><p>在这个程序的第一行，你可能已经注意到我们“使用”（哈哈！）了一个叫做 <code>use</code> 的新关键字。Rust 中的 <code>use</code> 关键字类似于 C/C++ 中的 <code>#include</code> 指令和 Python 中的 <code>import</code> 关键字。使用 <code>use</code> 关键字，我们从 Rust 标准库 <code>std</code> 中“导入”了 <code>io</code>（输入输出）模块。</p><blockquote><p>LCTT 译注：“使用”在原文中为“use”，与新介绍的关键字一样。</p></blockquote>`,12)),a("p",null,[n[12]||(n[12]=s("你可能会想知道为什么我们在可以使用 ",-1)),n[13]||(n[13]=a("code",null,"println",-1)),n[14]||(n[14]=s(" 宏来将某些内容输出到标准输出时，导入 ",-1)),n[15]||(n[15]=a("code",null,"io",-1)),n[16]||(n[16]=s(" 模块是必要的。Rust 的标准库有一个叫做 ",-1)),n[17]||(n[17]=a("code",null,"prelude",-1)),n[18]||(n[18]=s(" 的模块，它会自动被包含。该模块包含了 Rust 程序员可能需要使用的所有常用函数，比如 ",-1)),n[19]||(n[19]=a("code",null,"println",-1)),n[20]||(n[20]=s(" 宏。（你可以在 ",-1)),e(p,{href:"https://doc.rust-lang.org/std/prelude/index.html"},{default:l(()=>[...n[11]||(n[11]=[s("这里",-1)])]),_:1}),n[21]||(n[21]=s(" 阅读更多关于 ",-1)),n[22]||(n[22]=a("code",null,"std::prelude",-1)),n[23]||(n[23]=s(" 模块的内容。）",-1))]),n[42]||(n[42]=t(`<p>Rust 标准库 <code>std</code> 中的 <code>io</code> 模块是接受用户输入所必需的。因此，我们在程序的第一行添加了一个 <code>use</code> 语句。</p><h4 id="_2-理解-rust-中的-string-类型" tabindex="-1">2. 理解 Rust 中的 String 类型 <a class="header-anchor" href="#_2-理解-rust-中的-string-类型" aria-label="Permalink to “2. 理解 Rust 中的 String 类型”">​</a></h4><p>在第 11 行，我创建了一个新的可变变量 <code>user_input</code>，正如它的名字所表示的那样，它将被用来存储用户输入。但是在同一行，你可能已经注意到了一些“新的”东西（哈哈，又来了！）。</p><blockquote><p>LCTT 译注：“新的”在原文中为“new”，在第 11 行的代码中，原作者使用了 <code>String::new()</code> 函数，所以此处的梗与“使用”一样，原作者使用了一个在代码中用到的单词。</p></blockquote><p>我没有使用双引号（<code>&quot;&quot;</code>）声明一个空字符串，而是使用 <code>String::new()</code> 函数来创建一个新的空字符串。</p><p><code>&quot;&quot;</code> 与 <code>String::new()</code> 的区别是你将在 Rust 系列的后续文章中学习到的。现在，只需要知道，使用 <code>String::new()</code> 函数，你可以创建一个<strong>可变</strong>的，<strong>位于堆上</strong>的字符串。</p><p>如果我使用 <code>&quot;&quot;</code> 创建了一个字符串，我将得到一个叫做“字符串切片”的东西。字符串切片的内容也位于堆上，但是字符串本身是<strong>不可变</strong>的。所以，即使变量本身是可变的，作为字符串存储的实际数据是不可变的，需要被<strong>覆盖</strong>而不是修改。</p><h4 id="_3-接受用户输入" tabindex="-1">3. 接受用户输入 <a class="header-anchor" href="#_3-接受用户输入" aria-label="Permalink to “3. 接受用户输入”">​</a></h4><p>在第 12 行，我调用了 <code>std::io</code> 的 <code>stdin()</code> 函数。如果我在程序的开头没有导入 <code>std::io</code> 模块，那么这一行将是 <code>std::io::stdin()</code> 而不是 <code>io::stdin()</code>。</p><p><code>sdtin()</code> 函数返回一个终端的输入句柄。<code>read_line()</code> 函数抓住这个输入句柄，然后，正如它的名字所暗示的那样，读取一行输入。这个函数接受一个可变字符串的引用。所以，我传入了 <code>user_input</code> 变量，通过在它前面加上 <code>&amp;mut</code>，使它成为一个可变引用。</p><blockquote><p>⚠️ <code>read_line()</code> 函数有一个 <em>怪癖</em>。这个函数在用户按下回车键之后 <strong>停止</strong> 读取输入。因此，这个函数也会记录换行符（<code>\\n</code>），并将一个换行符存储在你传入的可变字符串变量的结尾处。</p></blockquote><p>所以，请在处理它时要么考虑到这个换行符，要么将它删除。</p><h3 id="rust-中的错误处理入门" tabindex="-1">Rust 中的错误处理入门 <a class="header-anchor" href="#rust-中的错误处理入门" aria-label="Permalink to “Rust 中的错误处理入门”">​</a></h3><p>最后，在这个链的末尾有一个 <code>expect()</code> 函数。让我们稍微偏题一下，来理解为什么要调用这个函数。</p><p><code>read_line()</code> 函数返回一个叫做 <code>Result</code> 的枚举。我会在后面的文章中讲解 Rust 中的枚举，但是现在只需要知道，枚举在 Rust 中是非常强大的。这个 <code>Result</code> 枚举返回一个值，告诉程序员在读取用户输入时是否发生了错误。</p><p><code>expect()</code> 函数接受这个 <code>Result</code> 枚举，并检查结果是否正常。如果没有发生错误，什么都不会发生。但是如果发生了错误，我传入的消息（<code>无法读取用户输入。</code>）将会被打印到 STDERR，<em>程序将会退出</em>。</p><blockquote><p>📋 <strong>所有我简要提及的新概念将会在后续的新 Rust 系列文章中讲解。</strong></p></blockquote><p>现在我希望你应该已经理解了这些新概念，让我们添加更多的代码来增加程序的功能。</p><h3 id="验证用户输入" tabindex="-1">验证用户输入 <a class="header-anchor" href="#验证用户输入" aria-label="Permalink to “验证用户输入”">​</a></h3><p>我接受了用户的输入，但是我没有对其进行验证。在当前的上下文中，验证意味着用户输入了一些“命令”，我们希望能够处理这些命令。目前，这些命令有两个“类别”。</p><p>第一类用户可以输入的命令是用户希望购买的水果的名称。第二个命令表示用户想要退出程序。</p><p>我们的任务现在是确保用户输入不会偏离 <em>可接受的命令</em>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>    println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取用户输入</span></span>
<span class="line"><span>    let mut user_input = String::new();</span></span>
<span class="line"><span>    io::stdin()</span></span>
<span class="line"><span>        .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>        .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 验证用户输入</span></span>
<span class="line"><span>    let valid_inputs = [&quot;苹果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span>    user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span>    let mut input_error = true;</span></span>
<span class="line"><span>    for input in valid_inputs {</span></span>
<span class="line"><span>        if input == user_input {</span></span>
<span class="line"><span>            input_error = false;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>要使验证更容易，我创建了一个叫做 <code>valid_inputs</code> 的字符串切片数组（第 17 行）。这个数组包含了所有可以购买的水果的名称，以及字符串切片 <code>q</code> 和 <code>quit</code>，让用户可以传达他们是否希望退出。</p><p>用户可能不知道我们希望输入是什么样的。用户可能会输入“Apple”、“apple”或 “APPLE” 来表示他们想要购买苹果。我们的工作是正确处理这些输入。</p><p>在第 18 行，我通过调用 <code>trim()</code> 函数从 <code>user_input</code> 字符串中删除了尾部的换行符。为了处理上面提到的问题，我使用 <code>to_lowercase()</code> 函数将所有字符转换为小写，这样 “Apple”、“apple” 和 “APPLE” 都会变成 “apple”。</p><p>现在，来看第 19 行，我创建了一个名为 <code>input_error</code> 的可变布尔变量，初始值为 <code>true</code>。稍后在第 20 行，我创建了一个 <code>for</code> 循环，它遍历了 <code>valid_inputs</code> 数组的所有元素（字符串切片），并将迭代的模式存储在 <code>input</code> 变量中。</p><p>在循环内部，我检查用户输入是否等于其中一个有效字符串，如果是，我将 <code>input_error</code> 布尔值的值设置为 <code>false</code>，并跳出 <code>for</code> 循环。</p><h3 id="处理无效输入" tabindex="-1">处理无效输入 <a class="header-anchor" href="#处理无效输入" aria-label="Permalink to “处理无效输入”">​</a></h3><p>现在是时候处理无效输入了。这可以通过将一些代码移动到无限循环中来完成，如果用户给出无效输入，则 <em>继续</em> 该无限循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;苹果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 读取用户输入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 验证用户输入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理无效输入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;错误: 请输入有效的输入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，我将一些代码移动到了循环内部，并重新组织了一下代码，以便更好地处理循环的引入。在循环内部，第 31 行，如果用户输入了一个无效的字符串，我将 <code>continue</code> <code>mart</code> 循环。</p><h3 id="对用户输入做出反应" tabindex="-1">对用户输入做出反应 <a class="header-anchor" href="#对用户输入做出反应" aria-label="Permalink to “对用户输入做出反应”">​</a></h3><p>现在，所有其他的状况都已经处理好了，是时候写一些代码来让用户从水果市场购买水果了，当用户希望退出时，程序也会退出。</p><p>因为你也知道用户选择了哪种水果，所以让我们问一下他们打算购买多少，并告诉他们输入数量的格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;苹果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span>        let mut quantity = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 读取用户输入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 验证用户输入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理无效输入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;错误: 请输入有效的输入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果用户想要退出，就退出</span></span>
<span class="line"><span>        if user_input == &quot;q&quot; || user_input == &quot;quit&quot; {</span></span>
<span class="line"><span>            break &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取数量</span></span>
<span class="line"><span>        println!(</span></span>
<span class="line"><span>            &quot;\\n你选择购买的水果是 \\&quot;{}\\&quot;。请输入以千克为单位的数量。</span></span>
<span class="line"><span>（1 千克 500 克的数量应该输入为 &#39;1.5&#39;。）&quot;,</span></span>
<span class="line"><span>            user_input</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut quantity)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在第 11 行，我声明了另一个可变变量，它的值是一个空字符串，在第 48 行，我接受了用户的输入，但是这次是用户打算购买的水果的数量。</p><h4 id="解析数量" tabindex="-1">解析数量 <a class="header-anchor" href="#解析数量" aria-label="Permalink to “解析数量”">​</a></h4><p>我刚刚增加了一些代码，以已知的格式接受数量，但是这些数据被存储为字符串。我需要从中提取出浮点数。幸运的是，这可以通过 <code>parse()</code> 方法来完成。</p><p>就像 <code>read_line()</code> 方法一样，<code>parse()</code> 方法返回一个 <code>Result</code> 枚举。<code>parse()</code> 方法返回 <code>Result</code> 枚举的原因可以通过我们试图实现的内容来轻松理解。</p><p>我正在接受用户的字符串，并尝试将其转换为浮点数。浮点数有两个可能的值。一个是浮点数本身，另一个是小数。</p><p>字符串可以包含字母，但是浮点数不行。所以，如果用户输入的不是浮点数和小数，<code>parse()</code> 函数将会返回一个错误。</p><p>因此，这个错误也需要处理。我们将使用 <code>expect()</code> 函数来处理这个错误。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;苹果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span>        let mut quantity = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 读取用户输入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 验证用户输入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理无效输入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;错误: 请输入有效的输入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果用户想要退出，就退出</span></span>
<span class="line"><span>        if user_input == &quot;q&quot; || user_input == &quot;quit&quot; {</span></span>
<span class="line"><span>            break &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取数量</span></span>
<span class="line"><span>        println!(</span></span>
<span class="line"><span>            &quot;\\n你选择购买的水果是 \\&quot;{}\\&quot;。请输入以千克为单位的数量。</span></span>
<span class="line"><span>（1 千克 500 克的数量应该输入为 &#39;1.5&#39;。）&quot;,</span></span>
<span class="line"><span>            user_input</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut quantity)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let quantity: f64 = quantity</span></span>
<span class="line"><span>            .trim()</span></span>
<span class="line"><span>            .parse()</span></span>
<span class="line"><span>            .expect(&quot;请输入有效的数量。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如你所见，我通过变量遮蔽将解析后的浮点数存储在变量 <code>quantity</code> 中。为了告诉 <code>parse()</code> 函数，我的意图是将字符串解析为 <code>f64</code>，我手动将变量 <code>quantity</code> 的类型注释为 <code>f64</code>。</p><p>现在，<code>parse()</code> 函数将会解析字符串并返回一个 <code>f64</code> 或者一个错误，<code>expect()</code> 函数将会处理这个错误。</p><h3 id="计算价格-最后的修饰" tabindex="-1">计算价格 + 最后的修饰 <a class="header-anchor" href="#计算价格-最后的修饰" aria-label="Permalink to “计算价格 + 最后的修饰”">​</a></h3><p>现在我们知道了用户想要购买的水果及其数量，现在是时候进行计算了，并让用户知道结果/总价了。</p><p>为了真实起见，我将为每种水果设置两个价格。第一个价格是零售价，我们在购买少量水果时向水果供应商支付的价格。水果的第二个价格是当有人批量购买水果时支付的批发价。</p><p>批发价将会在订单数量大于被认为是批发购买的最低订单数量时确定。这个最低订单数量对于每种水果都是不同的。每种水果的价格都是每千克多少卢比。</p><p>想好了逻辑，下面是最终的程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const APPLE_RETAIL_PER_KG: f64 = 60.0;</span></span>
<span class="line"><span>const APPLE_WHOLESALE_PER_KG: f64 = 45.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const BANANA_RETAIL_PER_KG: f64 = 20.0;</span></span>
<span class="line"><span>const BANANA_WHOLESALE_PER_KG: f64 = 15.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const ORANGE_RETAIL_PER_KG: f64 = 100.0;</span></span>
<span class="line"><span>const ORANGE_WHOLESALE_PER_KG: f64 = 80.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const MANGO_RETAIL_PER_KG: f64 = 60.0;</span></span>
<span class="line"><span>const MANGO_WHOLESALE_PER_KG: f64 = 55.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const GRAPES_RETAIL_PER_KG: f64 = 120.0;</span></span>
<span class="line"><span>const GRAPES_WHOLESALE_PER_KG: f64 = 100.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;欢迎来到水果市场！&quot;);</span></span>
<span class="line"><span>    println!(&quot;请选择要购买的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;苹果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span>        let mut quantity = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以购买的水果：苹果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;购买完成后，请输入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 读取用户输入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 验证用户输入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理无效输入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;错误: 请输入有效的输入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果用户想要退出，就退出</span></span>
<span class="line"><span>        if user_input == &quot;q&quot; || user_input == &quot;quit&quot; {</span></span>
<span class="line"><span>            break &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 获取数量</span></span>
<span class="line"><span>        println!(</span></span>
<span class="line"><span>            &quot;\\n你选择购买的水果是 \\&quot;{}\\&quot;。请输入以千克为单位的数量。</span></span>
<span class="line"><span>（1 千克 500 克的数量应该输入为 &#39;1.5&#39;。）&quot;,</span></span>
<span class="line"><span>            user_input</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut quantity)</span></span>
<span class="line"><span>            .expect(&quot;无法读取用户输入。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let quantity: f64 = quantity</span></span>
<span class="line"><span>            .trim()</span></span>
<span class="line"><span>            .parse()</span></span>
<span class="line"><span>            .expect(&quot;请输入有效的数量。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        total += calc_price(quantity, user_input);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n\\n总价是 {} 卢比。&quot;, total);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn calc_price(quantity: f64, fruit: String) -&gt; f64 {</span></span>
<span class="line"><span>    if fruit == &quot;apple&quot; {</span></span>
<span class="line"><span>        price_apple(quantity)</span></span>
<span class="line"><span>    } else if fruit == &quot;banana&quot; {</span></span>
<span class="line"><span>        price_banana(quantity)</span></span>
<span class="line"><span>    } else if fruit == &quot;orange&quot; {</span></span>
<span class="line"><span>        price_orange(quantity)</span></span>
<span class="line"><span>    } else if fruit == &quot;mango&quot; {</span></span>
<span class="line"><span>        price_mango(quantity)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        price_grapes(quantity)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_apple(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 7.0 {</span></span>
<span class="line"><span>        quantity * APPLE_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * APPLE_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_banana(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 4.0 {</span></span>
<span class="line"><span>        quantity * BANANA_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * BANANA_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_orange(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 3.5 {</span></span>
<span class="line"><span>        quantity * ORANGE_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * ORANGE_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_mango(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 5.0 {</span></span>
<span class="line"><span>        quantity * MANGO_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * MANGO_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_grapes(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 2.0 {</span></span>
<span class="line"><span>        quantity * GRAPES_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * GRAPES_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对比之前的版本，我做了一些改动……</p><p>水果的价格可能会波动，但是在我们程序的生命周期内，这些价格不会波动。所以我将每种水果的零售价和批发价存储在常量中。我将这些常量定义在 <code>main()</code> 函数之外（即全局常量），因为我不会在 <code>main()</code> 函数内计算每种水果的价格。这些常量被声明为 <code>f64</code>，因为它们将与 <code>quantity</code> 相乘，而 <code>quantity</code> 是 <code>f64</code>。记住，Rust 没有隐式类型转换 😉</p><p>当水果名称和用户想要购买的数量被存下来之后，<code>calc_price()</code> 函数被调用来计算用户指定数量的水果的价格。这个函数接受水果名称和数量作为参数，并将价格作为 <code>f64</code> 返回。</p><p>当你看到 <code>calc_price()</code> 函数的内部时，你会发现它是许多人所说的包装函数。它被称为包装函数，因为它调用其他函数来完成它的脏活。</p><p>因为每种水果都有不同的最低订单数量，才能被认为是批发购买，为了确保代码在未来可以轻松维护，每种水果都有单独的函数负责计算价格。</p><p>所以，<code>calc_price()</code> 函数所做的就是确定用户选择了哪种水果，并调用相应的函数来计算所选水果的价格。这些水果特定的函数只接受一个参数：数量。这些水果特定的函数将价格作为 <code>f64</code> 返回。</p><p>现在，<code>price_*()</code> 函数只做一件事。它们检查订单数量是否大于被认为是批发购买的最低订单数量。如果是这样，<code>quantity</code> 将会乘以水果的每千克批发价格。否则，<code>quantity</code> 将会乘以水果的每千克零售价格。</p><p>由于乘法行末尾没有分号，所以函数返回乘积。</p><p>如果你仔细看看 <code>calc_price()</code> 函数中水果特定函数的函数调用，这些函数调用在末尾没有分号。这意味着，<code>price_*()</code> 函数返回的值将会被 <code>calc_price()</code> 函数返回给它的调用者。</p><p>而且 <code>calc_price()</code> 函数只有一个调用者。这个调用者在 <code>mart</code> 循环的末尾，这个调用者使用这个函数返回的值来增加 <code>total</code> 的值。</p><p>最终，当 <code>mart</code> 循环结束（当用户输入 <code>q</code> 或 <code>quit</code> 时），存储在变量 <code>total</code> 中的值将会被打印到屏幕上，并且用户将会被告知他/她需要支付的价格。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>这篇文章中，我使用了之前讲解的 Rust 编程语言的所有主题来创建一个简单的程序，这个程序仍然在某种程度上展示了一个现实世界的问题。</p><p>现在，我写的代码肯定可以用一种更符合编程习惯的方式来写，这种方式最好地使用了 Rust 的喜爱特性，但是我还没有讲到它们！</p><p>所以，敬请关注后续的 <strong>将 Rust 带入下一个层次</strong> 系列，并学习更多 Rust 编程语言的内容！</p><p>Rust 基础系列到此结束。欢迎你的反馈。</p><p><em>（题图：MJ/6d486f23-e6fe-4bef-a28d-df067ef2ec06）</em></p><hr>`,70)),a("p",null,[n[25]||(n[25]=s("via: ",-1)),e(p,{href:"https://itsfoss.com/milestone-rust-program/"},{default:l(()=>[...n[24]||(n[24]=[s("https://itsfoss.com/milestone-rust-program/",-1)])]),_:1})]),a("p",null,[n[30]||(n[30]=s("作者：",-1)),e(p,{href:"https://itsfoss.com/author/pratham/"},{default:l(()=>[...n[26]||(n[26]=[s("Pratham Patel",-1)])]),_:1}),n[31]||(n[31]=s(" 选题：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:l(()=>[...n[27]||(n[27]=[s("lkxed",-1)])]),_:1}),n[32]||(n[32]=s(" 译者：",-1)),e(p,{href:"https://github.com/Cubik65536"},{default:l(()=>[...n[28]||(n[28]=[s("Cubik65536",-1)])]),_:1}),n[33]||(n[33]=s(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[29]||(n[29]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[36]||(n[36]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[34]||(n[34]=[s("LCTT",-1)])]),_:1}),n[37]||(n[37]=s(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[35]||(n[35]=[s("Linux中国",-1)])]),_:1}),n[38]||(n[38]=s(" 荣誉推出",-1))])])}const R=i(r,[["render",d]]);export{k as __pageData,R as default};
