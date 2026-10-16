import{_ as t,a0 as o,w as r,s as u,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const C=JSON.parse('{"title":"2022 Rust 入门指南 | LCTT x X-CMD","titleTemplate":false,"description":"2022 Rust 入门指南 | LCTT (202205) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"2022 Rust 入门指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"2022 Rust 入门指南 | LCTT (202205) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202205/20220113 Learn Rust in 2022","title":"2022 Rust 入门指南","tag":"202205","desc":""},"relativePath":"202205/20220113 Learn Rust in 2022.md","filePath":"[post].md"}'),d={name:"202205/20220113 Learn Rust in 2022.md"};function c(g,s,h,k,b,f){const p=o("Link");return r(),u("div",null,[s[31]||(s[31]=a("h1",{id:"_2022-rust-入门指南",tabindex:"-1"},[n("2022 Rust 入门指南 "),a("a",{class:"header-anchor",href:"#_2022-rust-入门指南","aria-label":"Permalink to “2022 Rust 入门指南”"},"​")],-1)),s[32]||(s[32]=a("blockquote",null,[a("p",null,"如果你打算在今年探索 Rust，请下载我们的免费 Rust 速查表，以供快速参考基础知识。")],-1)),s[33]||(s[33]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202205/08/161625lvo8v82ell9l3xmm.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Rust 是一门相对较新的编程语言，受到各个企业的 ",-1)),e(p,{href:"https://opensource.com/article/20/5/rust-java"},{default:i(()=>[...s[0]||(s[0]=[n("程序员的欢迎",-1)])]),_:1}),s[2]||(s[2]=n("。尽管如此，它仍是一门建立在之前所有事物之上的语言。毕竟，Rust 不是一天做出来的，所以即便 Rust 中的一些概念看起来与你从 Python、Java、C++ 等编程语言学到的东西大不相同，但它们都是基于同一个基础，那就是你一直与之交互（无论你是否知道）的 CPU 和 NUMA（",-1)),s[3]||(s[3]=a("ruby",null,[n("非统一内存访问"),a("rt",null,"Non Uniform Memory Access")],-1)),s[4]||(s[4]=n("）架构，因此 Rust 中的一些新功能让人感觉有些熟悉。",-1))]),s[34]||(s[34]=a("p",null,"现在，我的职业不是程序员。我没耐心但我又有点儿强迫症。当我需要完成某件事时，如果一门语言不能帮助我相对较快地获得想要的结果，那么我很少会受到鼓舞而使用它。Rust 试图平衡两个矛盾：现代计算机对安全和结构化代码的需求，和现代程序员对编码工作事半功倍的渴望。",-1)),s[35]||(s[35]=a("h3",{id:"安装-rust",tabindex:"-1"},[n("安装 Rust "),a("a",{class:"header-anchor",href:"#安装-rust","aria-label":"Permalink to “安装 Rust”"},"​")],-1)),a("p",null,[e(p,{href:"http://rust-lang.org"},{default:i(()=>[...s[5]||(s[5]=[n("rust-lang.org",-1)])]),_:1}),s[6]||(s[6]=n(" 网站有丰富的的文档指导如何安装 Rust，但通常，它就像下载 ",-1)),s[7]||(s[7]=a("code",null,"sh.rustup.rs",-1)),s[8]||(s[8]=n(" 脚本并运行它一样简单。",-1))]),s[36]||(s[36]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl --proto &#39;=https&#39; --tlsv1.2 -sSf https://sh.rustup.rs</span></span>
<span class="line"><span>$ less sh.rustup.sh</span></span>
<span class="line"><span>$ sh ./sh.rustup.rs</span></span></code></pre></div><h3 id="没有类" tabindex="-1">没有类 <a class="header-anchor" href="#没有类" aria-label="Permalink to “没有类”">​</a></h3><p>Rust 没有类，也不使用 <code>class</code> 关键字。Rust 确实有 <code>struct</code> 数据类型，但它的作用是充当数据集合的一种模板。因此，你可以使用<ruby>结构体<rt>struct</rt></ruby>，而不是创建一个类来表示虚拟对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Penguin {</span></span>
<span class="line"><span>  genus: String,</span></span>
<span class="line"><span>  species: String,</span></span>
<span class="line"><span>  extinct: bool,</span></span>
<span class="line"><span>  classified: u64,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以像使用类一样使用它。例如，当定义完 <code>Penguin</code> 结构，你就可以创建它的实例，并与该实例进行交互：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Penguin {</span></span>
<span class="line"><span>  genus: String,</span></span>
<span class="line"><span>  species: String,</span></span>
<span class="line"><span>  extinct: bool,</span></span>
<span class="line"><span>  classified: u64,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let p = Penguin { genus: &quot;Pygoscelis&quot;.to_owned(),</span></span>
<span class="line"><span>    species: &quot;R adeliæ&quot;.to_owned(), </span></span>
<span class="line"><span>    extinct: false, </span></span>
<span class="line"><span>    classified: 1841 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  println!(&quot;Species: {}&quot;, p.species);    </span></span>
<span class="line"><span>  println!(&quot;Genus: {}&quot;, p.genus);</span></span>
<span class="line"><span>  println!(&quot;Classified in {}&quot;, p.classified);</span></span>
<span class="line"><span>  if p.extinct == true {</span></span>
<span class="line"><span>    println!(&quot;Sadly this penguin has been made extinct.&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>将 <code>impl</code> 数据类型与 <code>struct</code> 数据类型结合使用，你可以实现一个包含函数的结构体，并且可以添加继承和其他与类相似的特性。</p><h3 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to “函数”">​</a></h3><p>Rust 中的函数很像其他语言中的函数。每个函数都代表一组严谨的任务，你可以在需要时调用它们。主函数名必须是 <code>main</code>。</p><p>用 <code>fn</code> 关键字声明函数，后跟函数名称和函数接受的所有参数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn foo() {</span></span>
<span class="line"><span>  let n = 8;</span></span>
<span class="line"><span>  println!(&quot;Eight is written as {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通过参数，将信息从一个函数传递到另一个函数。例如，我已经创建了一个 <code>Penguin</code> 类（结构），并且我有一个 <code>Penguin</code> 的实例为 <code>p</code>，将目标函数的参数指定为 <code>Penguin</code> 类型，就可把 <code>p</code> 的属性从一个函数传递到另一个函数。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let p = Penguin { genus: &quot;Pygoscelis&quot;.to_owned(), </span></span>
<span class="line"><span>    species: &quot;R adeliæ&quot;.to_owned(), </span></span>
<span class="line"><span>    extinct: false, classified: 1841 };</span></span>
<span class="line"><span>  printer(p);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn printer(p: Penguin) {</span></span>
<span class="line"><span>  println!(&quot;Species: {}&quot;, p.species);    </span></span>
<span class="line"><span>  println!(&quot;Genus: {}&quot;, p.genus);</span></span>
<span class="line"><span>  println!(&quot;Classified in {}&quot;, p.classified);</span></span>
<span class="line"><span>  if p.extinct == true {</span></span>
<span class="line"><span>    println!(&quot;Sadly this penguin has been made extinct.&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to “变量”">​</a></h3><p>Rust 默认创建的为<ruby>不可变<rt>immutable</rt></ruby>变量。这意味着你创建的变量以后无法更改。这段代码虽然看起来没问题，但无法编译：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let n = 6;</span></span>
<span class="line"><span>  let n = 5;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但你可以使用关键字 <code>mut</code> 声明一个<ruby>可变<rt>mutable</rt></ruby>变量，因此下面这段代码可以编译成功：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let mut n = 6;</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>  n = 5;</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to “编译”">​</a></h3><p>Rust 编译器，至少就其报错信息而言，是可用的最好的编译器之一。当你在 Rust 中出错时，编译器会真诚地告诉你做错了什么。实际上，仅通过从编译器错误消息中学习，我就了解了 Rust 的许多细微差别（就我理解到的 Rust 的任何细微差别而言）。即便有时错误消息太过于模糊，而不知所以然，互联网搜索几乎总能得到解释。</p><p>启动 Rust 程序的最简单方法是使用 <code>cargo</code>，它是 Rust 的包管理和构建系统。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir myproject</span></span>
<span class="line"><span>$ cd myproject</span></span>
<span class="line"><span>$ cargo init</span></span></code></pre></div><p>以上命令为项目创建了基本的基础架构，最值得注意的是 <code>src</code> 子目录中的 <code>main.rs</code> 文件。打开此文件，把我为本文生成的示例代码粘贴进去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Penguin {</span></span>
<span class="line"><span>  genus: String,</span></span>
<span class="line"><span>  species: String,</span></span>
<span class="line"><span>  extinct: bool,</span></span>
<span class="line"><span>  classified: u64,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let p = Penguin { genus: &quot;Pygoscelis&quot;.to_owned(), species: &quot;R adeliæ&quot;.to_owned(), extinct: false, classified: 1841 };</span></span>
<span class="line"><span>  printer(p);</span></span>
<span class="line"><span>  foo();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn printer(p: Penguin) {</span></span>
<span class="line"><span>  println!(&quot;Species: {}&quot;, p.species);    </span></span>
<span class="line"><span>  println!(&quot;Genus: {}&quot;, p.genus);</span></span>
<span class="line"><span>  println!(&quot;Classified in {}&quot;, p.classified);</span></span>
<span class="line"><span>  if p.extinct == true {</span></span>
<span class="line"><span>    println!(&quot;Sadly this penguin has been made extinct.&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn foo() {</span></span>
<span class="line"><span>  let mut n = 6;</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>  n = 8;</span></span>
<span class="line"><span>  println!(&quot;Eight is written as {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>cargo build</code> 命令进行编译：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build</span></span></code></pre></div><p>执行 <code>target</code> 子目录下的二进制程序，或者直接运行 <code>cargo run</code> 命令来运行你的项目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo run</span></span>
<span class="line"><span>Species: R adeliæ</span></span>
<span class="line"><span>Genus: Pygoscelis</span></span>
<span class="line"><span>Classified in 1841</span></span>
<span class="line"><span>Value is 6</span></span>
<span class="line"><span>Eight is written as 8</span></span></code></pre></div><h3 id="crates" tabindex="-1">Crates <a class="header-anchor" href="#crates" aria-label="Permalink to “Crates”">​</a></h3>`,29)),a("p",null,[s[10]||(s[10]=n("任何语言的大部分便利都来自于它的库或模块。在 Rust 中，进行分发和跟踪的库称为 “crate”（箱子）。",-1)),e(p,{href:"https://crates.io/"},{default:i(()=>[...s[9]||(s[9]=[n("crates.io",-1)])]),_:1}),s[11]||(s[11]=n(" 是一个很好的社区 crate 注册网站。",-1))]),s[37]||(s[37]=l(`<p>把一个 crate 添加到你的 Rust 项目，首先要在 <code>Cargo.toml</code> 文件中添加这个 crate。例如，要安装随机数函数，我使用名为 <code>rand</code> 的 crate，使用 <code>*</code> 作为通配符，以确保在编译时获得最新版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[package]</span></span>
<span class="line"><span>name = &quot;myproject&quot;</span></span>
<span class="line"><span>version = &quot;0.1.0&quot;</span></span>
<span class="line"><span>authors = [&quot;Seth &lt;seth@opensource.com&gt;&quot;]</span></span>
<span class="line"><span>edition = &quot;2022&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[dependencies]</span></span>
<span class="line"><span>rand = &quot;*&quot;</span></span></code></pre></div><p>在 Rust 代码中使用它需要在最顶行使用 <code>use</code> 语句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use rand::Rng;</span></span></code></pre></div><p>以下是一些创建随机种子和随机范围的示例代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn foo() {</span></span>
<span class="line"><span>  let mut rng = rand::thread_rng();</span></span>
<span class="line"><span>  let mut n = rng.gen_range(1..99);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>  n = rng.gen_range(1..99);</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以使用 <code>cargo run</code> 来运行它，它会检测代码是否被更改并触发一个新的构建。构建过程中下载名为 <code>rand</code> 的 <code>crete</code> 和它依赖的所有 <code>crate</code>，编译代码，然后运行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo run</span></span>
<span class="line"><span>Updating crates.io index</span></span>
<span class="line"><span>Downloaded ppv-lite86 v0.2.16</span></span>
<span class="line"><span>Downloaded 1 crate (22.2 KB) in 1.40s</span></span>
<span class="line"><span> Compiling libc v0.2.112</span></span>
<span class="line"><span> Compiling cfg-if v1.0.0</span></span>
<span class="line"><span> Compiling ppv-lite86 v0.2.16</span></span>
<span class="line"><span> Compiling getrandom v0.2.3</span></span>
<span class="line"><span> Compiling rand_core v0.6.3</span></span>
<span class="line"><span> Compiling rand_chacha v0.3.1</span></span>
<span class="line"><span> Compiling rand v0.8.4</span></span>
<span class="line"><span> Compiling rustpenguin v0.1.0 (/home/sek/Demo/rustpenguin)</span></span>
<span class="line"><span> Finished dev [unoptimized + debuginfo] target(s) in 13.97s</span></span>
<span class="line"><span> Running \`target/debug/rustpenguin\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Species: R adeliæ</span></span>
<span class="line"><span>Genus: Pygoscelis</span></span>
<span class="line"><span>Classified in 1841</span></span>
<span class="line"><span>Value is 70</span></span>
<span class="line"><span>Value is 35</span></span></code></pre></div><h3 id="rust-速查表" tabindex="-1">Rust 速查表 <a class="header-anchor" href="#rust-速查表" aria-label="Permalink to “Rust 速查表”">​</a></h3><p>Rust 是一门令人非常愉快的语言。集成了在线注册网站、有用的编译器和几乎直观的语法，它给人的适当的现代感。</p>`,10)),a("p",null,[s[13]||(s[13]=n("但请不要误会，Rust 仍是一门复杂的语言，它具有严格的数据类型、强作用域变量和许多内置方法。Rust 值得一看，如果你要探索它，那么你应该下载我们的免费 ",-1)),e(p,{href:"https://opensource.com/downloads/rust-cheat-sheet"},{default:i(()=>[...s[12]||(s[12]=[n("Rust 速查表",-1)])]),_:1}),s[14]||(s[14]=n("，以便快速了解基础知识。越早开始，就越早了解 Rust。当然，你应该经常练习以避免生疏。",-1))]),a("blockquote",null,[a("p",null,[a("strong",null,[e(p,{href:"https://opensource.com/downloads/rust-cheat-sheet"},{default:i(()=>[...s[15]||(s[15]=[n("Rust 速查表",-1)])]),_:1})])])]),s[38]||(s[38]=a("hr",null,null,-1)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/22/1/rust-cheat-sheet"},{default:i(()=>[...s[16]||(s[16]=[n("https://opensource.com/article/22/1/rust-cheat-sheet",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[18]||(s[18]=[n("Seth Kenlon",-1)])]),_:1}),s[23]||(s[23]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[19]||(s[19]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 译者：",-1)),e(p,{href:"https://github.com/hanszhao80"},{default:i(()=>[...s[20]||(s[20]=[n("hanszhao80",-1)])]),_:1}),s[25]||(s[25]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[27]||(s[27]=[n("Linux中国",-1)])]),_:1}),s[30]||(s[30]=n(" 荣誉推出",-1))])])}const q=t(d,[["render",c]]);export{C as __pageData,q as default};
