import{_ as t,a0 as o,w as r,s as c,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"Rust 基础系列 #2: 在 Rust 程序中使用变量和常量 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基础系列 #2: 在 Rust 程序中使用变量和常量 | LCTT (202305) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基础系列 #2: 在 Rust 程序中使用变量和常量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基础系列 #2: 在 Rust 程序中使用变量和常量 | LCTT (202305) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202305/20230403.1 ⭐️⭐️ Rust Basics Series 2 Using Variables and Constants in Rust Programs","title":"Rust 基础系列 #2: 在 Rust 程序中使用变量和常量","tag":"202305","desc":""},"relativePath":"202305/20230403.1 ⭐️⭐️ Rust Basics Series 2 Using Variables and Constants in Rust Programs.md","filePath":"[post].md"}'),d={name:"202305/20230403.1 ⭐️⭐️ Rust Basics Series 2 Using Variables and Constants in Rust Programs.md"};function u(b,s,h,g,k,f){const p=o("Link");return r(),c("div",null,[s[26]||(s[26]=n("h1",{id:"rust-基础系列-2-在-rust-程序中使用变量和常量",tabindex:"-1"},[a("Rust 基础系列 #2: 在 Rust 程序中使用变量和常量 "),n("a",{class:"header-anchor",href:"#rust-基础系列-2-在-rust-程序中使用变量和常量","aria-label":"Permalink to “Rust 基础系列 #2: 在 Rust 程序中使用变量和常量”"},"​")],-1)),s[27]||(s[27]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202305/01/144948gp13zdindx50ll0p.png",alt:""})],-1)),s[28]||(s[28]=n("blockquote",null,[n("p",null,"推进你的 Rust 学习，熟悉 Rust 程序的变量和常量。")],-1)),n("p",null,[s[2]||(s[2]=a("在 ",-1)),e(p,{href:"https://linux.cn/article-15709-1.html"},{default:i(()=>[...s[0]||(s[0]=[a("该系列的第一章",-1)])]),_:1}),s[3]||(s[3]=a("中，我讲述了为什么 Rust 是一门越来越流行的编程语言。我还展示了如何 ",-1)),e(p,{href:"https://linux.cn/article-15709-1.html"},{default:i(()=>[...s[1]||(s[1]=[a("在 Rust 中编写 Hello World 程序",-1)])]),_:1}),s[4]||(s[4]=a("。",-1))]),s[29]||(s[29]=l(`<p>让我们继续 Rust 之旅。在本文中，我将向你介绍 Rust 编程语言中的变量和常量。</p><p>此外，我还将讲解一个称为“<ruby>遮蔽<rt>shadowing</rt></ruby>”的新编程概念。</p><h3 id="rust-变量的独特之处" tabindex="-1">Rust 变量的独特之处 <a class="header-anchor" href="#rust-变量的独特之处" aria-label="Permalink to “Rust 变量的独特之处”">​</a></h3><p>在编程语言中，变量是指 <em>存储某些数据的内存地址的一个别名</em> 。</p><p>对 Rust 语言来讲也是如此。但是 Rust 有一个独特的“特性”。每个你声明的变量都是 <strong>默认 <ruby>不可变的<rt>immutable</rt></ruby></strong> 。这意味着一旦给变量赋值，就不能再改变它的值。</p><p>这个决定是为了确保默认情况下，你不需要使用 <ruby>自旋锁<rt>spin lock</rt></ruby> 或 <ruby>互斥锁<rt>mutex</rt></ruby> 等特殊机制来引入多线程。Rust <strong>会保证</strong> 安全的并发。由于所有变量（默认情况下）都是不可变的，因此你不需要担心线程会无意中更改变量值。</p><p>这并不是在说 Rust 中的变量就像常量一样，因为它们确实不是常量。变量可以被显式地定义为可变的。这样的变量称为 <strong>可变变量</strong> 。</p><p>这是在 Rust 中声明变量的语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 默认情况下不可变</span></span>
<span class="line"><span>// 初始化值是**唯一**的值</span></span>
<span class="line"><span>let variable_name = value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 &#39;mut&#39; 关键字定义可变变量</span></span>
<span class="line"><span>// 初始化值可以被改变</span></span>
<span class="line"><span>let mut variable_name = value;</span></span></code></pre></div><blockquote><p>🚧 尽管你可以改变可变变量的值，但你不能将另一种数据类型的值赋值给它。</p><p>这意味着，如果你有一个可变的浮点型变量，你不能在后面将一个字符赋值给它。</p></blockquote><h3 id="rust-数据类型概观" tabindex="-1">Rust 数据类型概观 <a class="header-anchor" href="#rust-数据类型概观" aria-label="Permalink to “Rust 数据类型概观”">​</a></h3><p>在上一篇文章中，你可能注意到了我提到 Rust 是一种强类型语言。但是在定义变量时，你不需要指定数据类型，而是使用一个通用的关键字 <code>let</code>。</p><p>Rust 编译器可以根据赋值给变量的值推断出变量的数据类型。但是如果你仍然希望明确指定数据类型并希望注释类型，那么可以这样做。以下是语法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let variable_name: data_type = value;</span></span></code></pre></div><p>下面是 Rust 编程语言中一些常见的数据类型：</p><ul><li><strong>整数类型</strong>：分别用于有符号和无符号的 32 位整数的 <code>i32</code> 和 <code>u32</code></li><li><strong>浮点类型</strong>：分别用于 32 位和 64 位浮点数的 <code>f32</code> 和 <code>f64</code></li><li><strong>布尔类型</strong>：<code>bool</code></li><li><strong>字符类型</strong>：<code>char</code></li></ul><p>我会在下一篇文章中更详细地介绍 Rust 的数据类型。现在，这应该足够了。</p><blockquote><p>🚧 Rust 并不支持隐式类型转换。因此，如果你将值 <code>8</code> 赋给一个浮点型变量，你将会遇到编译时错误。你应该赋的值是 <code>8.</code> 或 <code>8.0</code>。</p></blockquote><p>Rust 还强制要求在读取存储在其中的值之前初始化变量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{ // 该代码块不会被编译</span></span>
<span class="line"><span>    let a;</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, a); // 本行报错</span></span>
<span class="line"><span>    // 读取一个**未初始化**变量的值是一个编译时错误</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ // 该代码块会被编译</span></span>
<span class="line"><span>    let a;</span></span>
<span class="line"><span>    a = 128;</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, a); // 本行不会报错</span></span>
<span class="line"><span>    // 变量 &#39;a&#39; 有一个初始值</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你在不初始化的情况下声明一个变量，并在给它赋值之前使用它，Rust 编译器将会抛出一个 <strong>编译时错误</strong> 。</p><p>虽然错误很烦人，但在这种情况下，Rust 编译器强制你不要犯写代码时常见的错误之一：未初始化的变量。</p><h3 id="rust-编译器的错误信息" tabindex="-1">Rust 编译器的错误信息 <a class="header-anchor" href="#rust-编译器的错误信息" aria-label="Permalink to “Rust 编译器的错误信息”">​</a></h3><p>来写几个程序，你将</p><ul><li>通过执行“正常”的任务来理解 Rust 的设计，这些任务实际上是内存相关问题的主要原因</li><li>阅读和理解 Rust 编译器的错误/警告信息</li></ul><h4 id="测试变量的不可变性" tabindex="-1">测试变量的不可变性 <a class="header-anchor" href="#测试变量的不可变性" aria-label="Permalink to “测试变量的不可变性”">​</a></h4><p>让我们故意写一个试图修改不可变变量的程序，看看接下来会发生什么。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut a = 172;</span></span>
<span class="line"><span>    let b = 273;</span></span>
<span class="line"><span>    println!(&quot;a: {a}, b: {b}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    a = 380;</span></span>
<span class="line"><span>    b = 420;</span></span>
<span class="line"><span>    println!(&quot;a: {}, b: {}&quot;, a, b);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>直到第 4 行看起来都是一个简单的程序。但是在第 7 行，变量 <code>b</code> —— 一个不可变变量 —— 的值被修改了。</p><p>注意打印 Rust 变量值的两种方法。在第 4 行，我将变量括在花括号中，以便打印它们的值。在第 8 行，我保持括号为空，并使用 C 的风格将变量作为参数。这两种方法都是有效的。（除了修改不可变变量的值，这个程序中的所有内容都是正确的。）</p><p>来编译一下！如果你按照上一章的步骤做了，你已经知道该怎么做了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustc main.rs</span></span>
<span class="line"><span>error[E0384]: cannot assign twice to immutable variable \`b\`</span></span>
<span class="line"><span> --&gt; main.rs:7:5</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>3 |     let b = 273;</span></span>
<span class="line"><span>  |         -</span></span>
<span class="line"><span>  |         |</span></span>
<span class="line"><span>  |         first assignment to \`b\`</span></span>
<span class="line"><span>  |         help: consider making this binding mutable: \`mut b\`</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>7 |     b = 420;</span></span>
<span class="line"><span>  |     ^^^^^^^ cannot assign twice to immutable variable</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error: aborting due to previous error</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For more information about this error, try \`rustc --explain E0384\`.</span></span></code></pre></div><blockquote><p>📋 “binding” 一词是指变量名。但这只是一个简单的解释。</p></blockquote><p>这很好的展示了 Rust 强大的错误检查和信息丰富的错误信息。第一行展示了阻止上述代码编译的错误信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>error[E0384]: cannot assign twice to immutable variable b</span></span></code></pre></div><p>这意味着，Rust 编译器注意到我试图给变量 <code>b</code> 重新赋值，但变量 <code>b</code> 是一个不可变变量。所以这就是导致这个错误的原因。</p><p>编译器甚至可以识别出错误发生的确切行和列号。</p><p>在显示 <code>first assignment to b</code> 的行下面，是提供帮助的行。因为我正在改变不可变变量 <code>b</code> 的值，所以我被告知使用 <code>mut</code> 关键字将变量 <code>b</code> 声明为可变变量。</p><blockquote><p>🖥️ 自己实现一个修复来更好地理解手头的问题。</p></blockquote><h4 id="使用未初始化的变量" tabindex="-1">使用未初始化的变量 <a class="header-anchor" href="#使用未初始化的变量" aria-label="Permalink to “使用未初始化的变量”">​</a></h4><p>现在，让我们看看当我们尝试读取未初始化变量的值时，Rust 编译器会做什么。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a: i32;</span></span>
<span class="line"><span>    a = 123;</span></span>
<span class="line"><span>    println!(&quot;a: {a}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let b: i32;</span></span>
<span class="line"><span>    println!(&quot;b: {b}&quot;);</span></span>
<span class="line"><span>    b = 123;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这里，我有两个不可变变量 <code>a</code> 和 <code>b</code>，在声明时都没有初始化。变量 <code>a</code> 在其值被读取之前被赋予了一个值。但是变量 <code>b</code> 的值在被赋予初始值之前被读取了。</p><p>来编译一下，看看结果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustc main.rs</span></span>
<span class="line"><span>warning: value assigned to \`b\` is never read</span></span>
<span class="line"><span> --&gt; main.rs:8:5</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>8 |     b = 123;</span></span>
<span class="line"><span>  |     ^</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  = help: maybe it is overwritten before being read?</span></span>
<span class="line"><span>  = note: \`#[warn(unused_assignments)]\` on by default</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error[E0381]: used binding \`b\` is possibly-uninitialized</span></span>
<span class="line"><span> --&gt; main.rs:7:19</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>6 |     let b: i32;</span></span>
<span class="line"><span>  |         - binding declared here but left uninitialized</span></span>
<span class="line"><span>7 |     println!(&quot;b: {b}&quot;);</span></span>
<span class="line"><span>  |                   ^ \`b\` used here but it is possibly-uninitialized</span></span>
<span class="line"><span>  |</span></span>
<span class="line"><span>  = note: this error originates in the macro \`$crate::format_args_nl\` which comes from the expansion of the macro \`println\` (in Nightly builds, run with -Z macro-backtrace for more info)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error: aborting due to previous error; 1 warning emitted</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For more information about this error, try \`rustc --explain E0381\`.</span></span></code></pre></div><p>这里，Rust 编译器抛出了一个编译时错误和一个警告。警告说变量 <code>b</code> 的值从来没有被读取过。</p><p>但是这是荒谬的！变量 <code>b</code> 的值在第 7 行被访问了。但是仔细看；警告是关于第 8 行的。这很令人困惑；让我们暂时跳过这个警告，继续看错误。</p><p>这个错误信息说 <code>used binding b is possibly-uninitialized</code>。和之前的例子一样，Rust 编译器指出错误是由于尝试在第 7 行读取变量 <code>b</code> 的值而引起的。读取变量 <code>b</code> 的值是错误的原因是它的值没有初始化。在 Rust 编程语言中，这是非法的。因此编译时错误出现。</p><blockquote><p>🖥️ 这个错误可以很容易地通过交换第 7 和第 8 行的代码来解决。试一下，看看错误是否消失了。</p></blockquote><h3 id="示例程序-交换数字" tabindex="-1">示例程序：交换数字 <a class="header-anchor" href="#示例程序-交换数字" aria-label="Permalink to “示例程序：交换数字”">​</a></h3><p>现在你已经熟悉了常见的变量相关问题，让我们来看一个交换两个变量值的程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut a = 7186932;</span></span>
<span class="line"><span>    let mut b = 1276561;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;a: {a}, b: {b}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 交换变量值</span></span>
<span class="line"><span>    let temp = a;</span></span>
<span class="line"><span>    a = b;</span></span>
<span class="line"><span>    b = temp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;a: {}, b: {}&quot;, a, b);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我在这里声明了两个变量 <code>a</code> 和 <code>b</code>。这两个变量都是可变的，因为我希望在后面改变它们的值。我赋予了一些随机值。最初，我打印了这些变量的值。</p><p>然后，在第 8 行，我创建了一个名为 <code>temp</code> 的不可变变量，并将存储在 <code>a</code> 中的值赋给它。之所以这个变量是不可变的，是因为 <code>temp</code> 的值不会改变。</p><p>要交换值，我将变量 <code>b</code> 的值赋给变量 <code>a</code>，在下一行，我将 <code>temp</code> 的值（它包含 <code>a</code> 的值）赋给变量 <code>b</code>。现在值已经交换了，我打印了变量 <code>a</code> 和 <code>b</code> 的值。</p><p>在编译并执行上面的代码后，我得到了以下输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a: 7186932, b: 1276561</span></span>
<span class="line"><span>a: 1276561, b: 7186932</span></span></code></pre></div><p>正如你所见，值已经交换了。完美。</p><h3 id="使用未使用的变量" tabindex="-1">使用未使用的变量 <a class="header-anchor" href="#使用未使用的变量" aria-label="Permalink to “使用未使用的变量”">​</a></h3><p>当你声明了一些变量，打算在后面使用它们，但是还没有使用它们，然后编译你的 Rust 代码来检查一些东西时，Rust 编译器会警告你。</p><p>原因是显而易见的。不会被使用的变量占用了不必要的初始化时间（CPU 周期）和内存空间。如果不会被使用，为什么要在程序写上它呢？尽管编译器确实会优化这一点。但是它仍然是一个问题，因为它会以多余的代码的形式影响可读性。</p><p>但是，有的时候，你可能会面对这样的情况：创建一个变量与否不在你的控制之下。比如说，当一个函数返回多个值，而你只需要其中的一些值时。在这种情况下，你不能要求库维护者根据你的需要调整他们的函数。</p><p>所以，在这种情况下，你可以写一个以下划线开头的变量，Rust 编译器将不再显示这样的警告。如果你真的不需要使用存储在该未使用变量中的值，你可以简单地将其命名为 <code>_</code>（下划线），Rust 编译器也会忽略它！</p><p>接下来的程序不仅不会生成任何输出，而且也不会生成任何警告和/或错误消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let _unnecessary_var = 0; // 没有警告</span></span>
<span class="line"><span>    let _ = 0.0; // 完全忽略</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="算术运算" tabindex="-1">算术运算 <a class="header-anchor" href="#算术运算" aria-label="Permalink to “算术运算”">​</a></h3><p>数学就是数学，Rust 并没有在这方面创新。你可以使用在其他编程语言（如 C、C++ 和/或 Java）中使用过的所有算术运算符。</p>`,67)),n("p",null,[s[6]||(s[6]=a("包含可以在 Rust 编程语言中使用的所有运算符和它们的含义的完整列表可以在 ",-1)),e(p,{href:"https://doc.rust-lang.org/book/appendix-02-operators.html?ref=itsfoss.com#operators"},{default:i(()=>[...s[5]||(s[5]=[a("这里",-1)])]),_:1}),s[7]||(s[7]=a(" 找到。",-1))]),s[30]||(s[30]=l(`<h4 id="示例程序-一个生锈的温度计" tabindex="-1">示例程序：一个生锈的温度计 <a class="header-anchor" href="#示例程序-一个生锈的温度计" aria-label="Permalink to “示例程序：一个生锈的温度计”">​</a></h4><p>（LCTT 译注：这里的温度计“生锈”了是因为它是使用 Rust（生锈）编写的，原作者在这里玩了一个双关。）</p><p>接下来是一个典型的程序，它将华氏度转换为摄氏度，反之亦然。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let boiling_water_f: f64 = 212.0;</span></span>
<span class="line"><span>    let frozen_water_c: f64 = 0.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let boiling_water_c = (boiling_water_f - 32.0) * (5.0 / 9.0);</span></span>
<span class="line"><span>    let frozen_water_f = (frozen_water_c * (9.0 / 5.0)) + 32.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;Water starts boiling at {}°C (or {}°F).&quot;,</span></span>
<span class="line"><span>        boiling_water_c, boiling_water_f</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;Water starts freezing at {}°C (or {}°F).&quot;,</span></span>
<span class="line"><span>        frozen_water_c, frozen_water_f</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>没什么大不了的……华氏温度转换为摄氏温度，反之亦然。</p><p>正如你在这里看到的，由于 Rust 不允许自动类型转换，我不得不在整数 32、9 和 5 后放一个小数点。除此之外，这与你在 C、C++ 和/或 Java 中所做的类似。</p><p>作为练习，尝试编写一个程序，找出给定数中有多少位数字。</p><h3 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to “常量”">​</a></h3><p>如果你有一些编程知识，你可能知道这意味着什么。常量是一种特殊类型的变量，它的值<strong>永远不会改变</strong>。<em>它保持不变</em>。</p><p>在 Rust 编程语言中，使用以下语法声明常量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CONSTANT_NAME: data_type = value;</span></span></code></pre></div><p>如你所见，声明常量的语法与我们在 Rust 中看到的变量声明非常相似。但是有两个不同之处：</p><ul><li>常量的名字需要像 <code>SCREAMING_SNAKE_CASE</code> 这样。所有的大写字母和单词之间用下划线分隔。</li><li>常量的数据类型<strong>必须</strong>被显性定义。</li></ul><h4 id="变量与常量的对比" tabindex="-1">变量与常量的对比 <a class="header-anchor" href="#变量与常量的对比" aria-label="Permalink to “变量与常量的对比”">​</a></h4><p>你可能在想，既然变量默认是不可变的，为什么语言还要包含常量呢？</p>`,15)),n("p",null,[s[9]||(s[9]=a("接下来这个表格应该可以帮助你消除疑虑。（如果你好奇并且想更好地理解这些区别，你可以看看",-1)),e(p,{href:"https://blog.thefossguy.com/posts/immutable-vars-vs-constants-rs.md?ref=itsfoss.com"},{default:i(()=>[...s[8]||(s[8]=[a("我的博客",-1)])]),_:1}),s[10]||(s[10]=a("，它详细地展示了这些区别。）",-1))]),s[31]||(s[31]=l(`<p><img src="https://itsfoss.com/content/images/2023/02/image.png" alt="一个展示 Rust 编程语言中变量和常量之间区别的表格"></p><h4 id="使用常量的示例程序-计算圆的面积" tabindex="-1">使用常量的示例程序：计算圆的面积 <a class="header-anchor" href="#使用常量的示例程序-计算圆的面积" aria-label="Permalink to “使用常量的示例程序：计算圆的面积”">​</a></h4><p>这是一个很直接的关于 Rust 中常量的简单程序。它计算圆的面积和周长。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    const PI: f64 = 3.14;</span></span>
<span class="line"><span>    let radius: f64 = 50.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let circle_area = PI * (radius * radius);</span></span>
<span class="line"><span>    let circle_perimeter = 2.0 * PI * radius;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;有一个周长为 {radius} 厘米的圆&quot;);</span></span>
<span class="line"><span>    println!(&quot;它的面积是 {} 平方厘米&quot;, circle_area);</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;以及它的周长是 {} 厘米&quot;,</span></span>
<span class="line"><span>        circle_perimeter</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果运行代码，将产生以下输出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>有一个周长为 50 厘米的圆</span></span>
<span class="line"><span>它的面积是 7850 平方厘米</span></span>
<span class="line"><span>以及它的周长是 314 厘米</span></span></code></pre></div><h3 id="rust-中的变量遮蔽" tabindex="-1">Rust 中的变量遮蔽 <a class="header-anchor" href="#rust-中的变量遮蔽" aria-label="Permalink to “Rust 中的变量遮蔽”">​</a></h3><p>如果你是一个 C++ 程序员，你可能已经知道我在说什么了。当程序员<strong>声明</strong>一个与已经声明的变量同名的新变量时，这就是变量遮蔽。</p><p>与 C++ 不同，Rust 允许你在同一作用域中执行变量遮蔽！</p><blockquote><p>💡 当程序员遮蔽一个已经存在的变量时，新变量会被分配一个新的内存地址，但是使用与现有变量相同的名称引用。</p></blockquote><p>来看看它在 Rust 中是如何工作的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a = 108;</span></span>
<span class="line"><span>    println!(&quot;a 的地址: {:p}, a 的值 {a}&quot;, &amp;a);</span></span>
<span class="line"><span>    let a = 56;</span></span>
<span class="line"><span>    println!(&quot;a 的地址: {:p}, a 的值: {a} // 遮蔽后&quot;, &amp;a);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mut b = 82;</span></span>
<span class="line"><span>    println!(&quot;\\nb 的地址: {:p}, b 的值: {b}&quot;, &amp;b);</span></span>
<span class="line"><span>    let mut b = 120;</span></span>
<span class="line"><span>    println!(&quot;b的地址: {:p}, b的值: {b} // 遮蔽后&quot;, &amp;b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mut c = 18;</span></span>
<span class="line"><span>    println!(&quot;\\nc 的地址: {:p}, c的值: {c}&quot;, &amp;c);</span></span>
<span class="line"><span>    c = 29;</span></span>
<span class="line"><span>    println!(&quot;c 的地址: {:p}, c的值: {c} // 遮蔽后&quot;, &amp;c);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>println</code> 语句中花括号内的 <code>:p</code> 与 C 中的 <code>%p</code> 类似。它指定值的格式为内存地址（指针）。</p><p>我在这里使用了 3 个变量。变量 <code>a</code> 是不可变的，并且在第 4 行被遮蔽。变量 <code>b</code> 是可变的，并且在第 9 行也被遮蔽。变量 <code>c</code> 是可变的，但是在第 14 行，只有它的值被改变了。它没有被遮蔽。</p><p>现在，让我们看看输出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a 的地址: 0x7ffe954bf614, a 的值 108</span></span>
<span class="line"><span>a 的地址: 0x7ffe954bf674, a 的值: 56 // 遮蔽后</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b 的地址: 0x7ffe954bf6d4, b 的值: 82</span></span>
<span class="line"><span>b 的地址: 0x7ffe954bf734, b 的值: 120 // 遮蔽后</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c 的地址: 0x7ffe954bf734, c 的值: 18</span></span>
<span class="line"><span>c 的地址: 0x7ffe954bf734, c 的值: 29 // 遮蔽后</span></span></code></pre></div><p>来看看输出，你会发现不仅所有三个变量的值都改变了，而且被遮蔽的变量的地址也不同（检查十六进制的最后几个字符）。</p><p>变量 <code>a</code> 和 <code>b</code> 的内存地址改变了。这意味着变量的可变性或不可变性并不是遮蔽变量的限制。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to “总结”">​</a></h3><p>本文介绍了 Rust 编程语言中的变量和常量。还介绍了算术运算。</p><p>做个总结：</p><ul><li>Rust 中的变量默认是不可变的，但是可以引入可变性。</li><li>程序员需要显式地指定变量的可变性。</li><li>常量总是不可变的，无论如何都需要类型注释。</li><li>变量遮蔽是指使用与现有变量相同的名称声明一个 <em>新</em> 变量。</li></ul><p>很好！我相信和 Rust 一起的进展不错。在下一章中，我将讨论 Rust 中的数据类型。敬请关注。</p><p>与此同时，如果你有任何问题，请告诉我。</p><p><em>（题图：MJ/7c5366b8-f926-487e-9153-0a877145ca5）</em></p><hr>`,26)),n("p",null,[s[12]||(s[12]=a("via: ",-1)),e(p,{href:"https://itsfoss.com/rust-variables/"},{default:i(()=>[...s[11]||(s[11]=[a("https://itsfoss.com/rust-variables/",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("作者：",-1)),e(p,{href:"https://itsfoss.com/author/pratham/"},{default:i(()=>[...s[13]||(s[13]=[a("Pratham Patel",-1)])]),_:1}),s[18]||(s[18]=a(" 选题：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:i(()=>[...s[14]||(s[14]=[a("lkxed",-1)])]),_:1}),s[19]||(s[19]=a(" 译者：",-1)),e(p,{href:"https://github.com/Cubik65536"},{default:i(()=>[...s[15]||(s[15]=[a("Cubik",-1)])]),_:1}),s[20]||(s[20]=a(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[a("Linux中国",-1)])]),_:1}),s[25]||(s[25]=a(" 荣誉推出",-1))])])}const y=t(d,[["render",u]]);export{C as __pageData,y as default};
