import{_ as t,a0 as o,w as d,s as r,ao as l,I as p,x as n,a1 as i,A as e}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const T=JSON.parse('{"title":"使用 Rust 进行嵌入式开发 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Rust 进行嵌入式开发 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Rust 进行嵌入式开发 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Rust 进行嵌入式开发 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20211025 Use Rust for embedded development","title":"使用 Rust 进行嵌入式开发","tag":"202110","desc":""},"relativePath":"202110/20211025 Use Rust for embedded development.md","filePath":"[post].md"}'),u={name:"202110/20211025 Use Rust for embedded development.md"};function c(g,s,h,b,k,f){const a=o("Link");return d(),r("div",null,[s[36]||(s[36]=l('<h1 id="使用-rust-进行嵌入式开发" tabindex="-1">使用 Rust 进行嵌入式开发 <a class="header-anchor" href="#使用-rust-进行嵌入式开发" aria-label="Permalink to “使用 Rust 进行嵌入式开发”">​</a></h1><blockquote><p>Rust 的高性能、高可靠性和高生产力使它适合于嵌入式系统。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202110/26/103848djcdhjk0d2z1hc52.jpg" alt=""></p><p>在过去的几年里，Rust 在程序员中获得了热情的追捧。技术潮流来来去去，所以很难将仅仅因为某项新技术而产生的兴奋与对某项技术的优点的兴奋区分开来，但我认为 Rust 是一种真正设计良好的语言。它的目标是帮助开发者建立可靠和高效的软件，而且它从一开始就是为这个目的设计的。你可能听过一些 Rust 的关键特性，在这篇文章中，我会证明这些特性正是 Rust 也恰好适合嵌入式系统的原因。比如：</p><ul><li>高性能：它速度快，内存利用率高</li><li>可靠性：在编译过程中可以消除内存错误</li><li>生产力：很棒的文档，友好的编译器，有用的错误信息，以及一流的工具化。它有一个集成的包管理器和构建工具，智能的多编辑器支持自动补完和类型检查、自动格式化等等。</li></ul><h3 id="为什么使用-rust-进行嵌入式开发" tabindex="-1">为什么使用 Rust 进行嵌入式开发？ <a class="header-anchor" href="#为什么使用-rust-进行嵌入式开发" aria-label="Permalink to “为什么使用 Rust 进行嵌入式开发？”">​</a></h3><p>Rust 的设计是为了保证安全和高性能。嵌入式软件会出现的问题主要是内存的问题。从某种程度上说，Rust 是一种面向编译器的语言，所以你可以确保在编译时安全使用内存。以下是使用 Rust 在嵌入式设备上开发的一些好处：</p><ul><li>强大的静态分析</li><li>灵活的内存</li><li>无畏的并发性</li><li>互操作性</li><li>可移植性</li><li>社区驱动</li></ul>',8)),p("p",null,[s[1]||(s[1]=n("在这篇文章中，我使用开源的 ",-1)),i(a,{href:"https://github.com/RT-Thread/rt-thread"},{default:e(()=>[...s[0]||(s[0]=[n("RT-Thread 操作系统",-1)])]),_:1}),s[2]||(s[2]=n(" 来演示如何使用 Rust 进行嵌入式开发。",-1))]),s[37]||(s[37]=l(`<h3 id="如何在-c-语言中调用-rust" tabindex="-1">如何在 C 语言中调用 Rust <a class="header-anchor" href="#如何在-c-语言中调用-rust" aria-label="Permalink to “如何在 C 语言中调用 Rust”">​</a></h3><p>在 C 代码中调用 Rust 代码时，你必须将 Rust 源代码打包成静态库文件。当 C 代码编译时，将其链接进去。</p><h4 id="用-rust-创建一个静态库" tabindex="-1">用 Rust 创建一个静态库 <a class="header-anchor" href="#用-rust-创建一个静态库" aria-label="Permalink to “用 Rust 创建一个静态库”">​</a></h4><p>在这个过程中，有两个步骤：</p><p>1、使用 <code>cargo init --lib rust_to_c</code> 在 Clion 中建立一个 <code>lib</code> 库。在 <code>lib.rs</code> 中加入以下代码。下面的函数计算两个类型为 <code>i32</code> 的值的总和并返回结果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#![no_std]</span></span>
<span class="line"><span>use core::panic::PanicInfo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[no_mangle]</span></span>
<span class="line"><span>pub extern &quot;C&quot; fn sum(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>    a + b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[panic_handler]</span></span>
<span class="line"><span>fn panic(_info:&amp;PanicInfo) -&gt; !{</span></span>
<span class="line"><span>    loop{}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>2、在你的 <code>Cargo.toml</code> 文件中添加以下代码，以告诉 Rustc 要生成什么类型的库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[lib]</span></span>
<span class="line"><span>name = &quot;sum&quot;</span></span>
<span class="line"><span>crate-type = [&quot;staticlib&quot;]</span></span>
<span class="line"><span>path = &quot;src/lib.rs&quot;</span></span></code></pre></div><h4 id="交叉编译" tabindex="-1">交叉编译 <a class="header-anchor" href="#交叉编译" aria-label="Permalink to “交叉编译”">​</a></h4><p>你可以针对你的目标平台进行交叉编译。假设你的嵌入式系统是基于 Arm 的，步骤很简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustup target add armv7a-none-eabi</span></span></code></pre></div><p>生成静态库文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build --target=armv7a-none-eabi --release --verbose</span></span>
<span class="line"><span>Fresh rust_to_c v0.1.0</span></span>
<span class="line"><span>Finished release [optimized] target(s) in 0.01s</span></span></code></pre></div><h4 id="生成头文件" tabindex="-1">生成头文件 <a class="header-anchor" href="#生成头文件" aria-label="Permalink to “生成头文件”">​</a></h4><p>你也需要头文件：</p>`,15)),p("p",null,[s[4]||(s[4]=n("1、安装 ",-1)),i(a,{href:"https://github.com/eqrion/cbindgen"},{default:e(()=>[...s[3]||(s[3]=[n("cbindgen",-1)])]),_:1}),s[5]||(s[5]=n("。",-1)),s[6]||(s[6]=p("code",null,"cbindgen",-1)),s[7]||(s[7]=n(" 工具会从 Rust 库中生成一个 C 或 C++11 的头文件：",-1))]),s[38]||(s[38]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo install --force cbindgen</span></span></code></pre></div><p>2、在你的项目文件夹下创建一个新的 <code>cbindgen.toml</code> 文件。</p><p>3、生成一个头文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cbindgen --config cbindgen.toml --crate rust_to_c --output sum.h</span></span></code></pre></div><h4 id="调用-rust-库文件" tabindex="-1">调用 Rust 库文件 <a class="header-anchor" href="#调用-rust-库文件" aria-label="Permalink to “调用 Rust 库文件”">​</a></h4><p>现在你可以对你的 Rust 库进行调用了。</p><p>1、把生成的 <code>sum.h</code> 和 <code>sum.a</code> 文件放到 <code>rt-thread/bsp/qemu-vexpress-a9/applications</code> 目录下。</p><p>2、修改 <code>SConscript</code> 文件并添加一个静态库：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   from building import *</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   cwd     = GetCurrentDir()</span></span>
<span class="line"><span>   src     = Glob(&#39;*.c&#39;) + Glob(&#39;*.cpp&#39;)</span></span>
<span class="line"><span>   CPPPATH = [cwd]</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   LIBS = [&quot;libsum.a&quot;]</span></span>
<span class="line"><span>   LIBPATH = [GetCurrentDir()]</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   group = DefineGroup(&#39;Applications&#39;, src, depend = [&#39;&#39;], CPPPATH = CPPPATH, LIBS = LIBS, LIBPATH = LIBPATH)</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   Return(&#39;group&#39;)</span></span></code></pre></div><p>3、在主函数中调用 <code>sum</code> 函数，得到返回值，并 <code>printf</code> 该值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   #include &lt;stdint.h&gt;</span></span>
<span class="line"><span>   #include &lt;stdio.h&gt;</span></span>
<span class="line"><span>   #include &lt;stdlib.h&gt;</span></span>
<span class="line"><span>   #include &lt;rtthread.h&gt;</span></span>
<span class="line"><span>   #include &quot;sum.h&quot;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   int main(void)</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>       int32_t tmp;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       tmp = sum(1, 2);</span></span>
<span class="line"><span>       printf(&quot;call rust sum(1, 2) = %d\\n&quot;, tmp);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       return 0;</span></span>
<span class="line"><span>   }</span></span></code></pre></div>`,11)),p("p",null,[s[9]||(s[9]=n("4、在 RT-Thread ",-1)),i(a,{href:"https://www.rt-thread.io/download.html?download=Env"},{default:e(()=>[...s[8]||(s[8]=[n("Env",-1)])]),_:1}),s[10]||(s[10]=n(" 环境中，使用 ",-1)),s[11]||(s[11]=p("code",null,"scons",-1)),s[12]||(s[12]=n(" 来编译项目并运行：",-1))]),s[39]||(s[39]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ scons -j6</span></span>
<span class="line"><span>scons: Reading SConscript files ...</span></span>
<span class="line"><span>scons: done reading SConscript files.</span></span>
<span class="line"><span>scons: Building targets ...</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>scons: done building targets.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ qemu.sh</span></span>
<span class="line"><span> \\ | /</span></span>
<span class="line"><span>- RT -     Thread Operating System</span></span>
<span class="line"><span> / | \\     4.0.4 build Jul 28 2021</span></span>
<span class="line"><span>2006 - 2021 Copyright by rt-thread team</span></span>
<span class="line"><span>lwIP-2.1.2 initialized!</span></span>
<span class="line"><span>[...]</span></span>
<span class="line"><span>call rust sum(1, 2) = 3</span></span></code></pre></div><h3 id="加、减、乘、除" tabindex="-1">加、减、乘、除 <a class="header-anchor" href="#加、减、乘、除" aria-label="Permalink to “加、减、乘、除”">​</a></h3><p>你可以在 Rust 中实现一些复杂的数学运算。在 <code>lib.rs</code> 文件中，使用 Rust 语言来实现加、减、乘、除：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#![no_std]</span></span>
<span class="line"><span>use core::panic::PanicInfo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[no_mangle]</span></span>
<span class="line"><span>pub extern &quot;C&quot; fn add(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>    a + b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[no_mangle]</span></span>
<span class="line"><span>pub extern &quot;C&quot; fn subtract(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>    a - b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[no_mangle]</span></span>
<span class="line"><span>pub extern &quot;C&quot; fn multiply(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>    a * b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[no_mangle]</span></span>
<span class="line"><span>pub extern &quot;C&quot; fn divide(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>    a / b</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#[panic_handler]</span></span>
<span class="line"><span>fn panic(_info:&amp;PanicInfo) -&gt; !{</span></span>
<span class="line"><span>    loop{}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)),p("p",null,[s[14]||(s[14]=n("构建你的库文件和头文件，并把它们放在应用程序目录中。使用 ",-1)),s[15]||(s[15]=p("code",null,"scons",-1)),s[16]||(s[16]=n(" 来编译。如果在链接过程中出现错误，请在官方 ",-1)),i(a,{href:"https://github.com/rust-lang/compiler-builtins/issues/353"},{default:e(()=>[...s[13]||(s[13]=[n("Github 页面",-1)])]),_:1}),s[17]||(s[17]=n(" 中找到解决方案。",-1))]),s[40]||(s[40]=l(`<p>修改 <code>rtconfig.py</code> 文件，并添加链接参数 <code>--allow-multiple-definition</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>       DEVICE = &#39; -march=armv7-a -marm -msoft-float&#39;</span></span>
<span class="line"><span>       CFLAGS = DEVICE + &#39; -Wall&#39;</span></span>
<span class="line"><span>       AFLAGS = &#39; -c&#39; + DEVICE + &#39; -x assembler-with-cpp -D__ASSEMBLY__ -I.&#39;</span></span>
<span class="line"><span>       LINK_SCRIPT = &#39;link.lds&#39;</span></span>
<span class="line"><span>       LFLAGS = DEVICE + &#39; -nostartfiles -Wl,--gc-sections,-Map=rtthread.map,-cref,-u,system_vectors,--allow-multiple-definition&#39;+\\</span></span>
<span class="line"><span>                         &#39; -T %s&#39; % LINK_SCRIPT</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       CPATH = &#39;&#39;</span></span>
<span class="line"><span>       LPATH = &#39;&#39;</span></span></code></pre></div><p>编译并运行 QEMU 来看看你的工作。</p><h3 id="在-rust-中调用-c-语言" tabindex="-1">在 Rust 中调用 C 语言 <a class="header-anchor" href="#在-rust-中调用-c-语言" aria-label="Permalink to “在 Rust 中调用 C 语言”">​</a></h3><p>Rust 可以在 C 代码中调用，但是如何在你的 Rust 代码中调用 C 呢？下面是一个在 Rust 代码中调用 <code>rt_kprintf</code> C 函数的例子。</p><p>首先，修改 <code>lib.rs</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    // The imported rt-thread functions list</span></span>
<span class="line"><span>    extern &quot;C&quot; {</span></span>
<span class="line"><span>        pub fn rt_kprintf(format: *const u8, ...);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>    #[no_mangle]</span></span>
<span class="line"><span>    pub extern &quot;C&quot; fn add(a: i32, b: i32) -&gt; i32 {</span></span>
<span class="line"><span>        unsafe {</span></span>
<span class="line"><span>            rt_kprintf(b&quot;this is from rust\\n&quot; as *const u8);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        a + b</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>接下来，生成库文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build --target=armv7a-none-eabi --release --verbose</span></span>
<span class="line"><span>Compiling rust_to_c v0.1.0</span></span>
<span class="line"><span>Running \`rustc --crate-name sum --edition=2018 src/lib.rs --error-format=json --json=diagnostic-rendered-ansi --crate-type staticlib --emit=dep-info,link -C opt-level=3 -C embed-bitcode=no -C metadata=a</span></span>
<span class="line"><span>Finished release [optimized] target(s) in 0.11s</span></span></code></pre></div><p>而现在，要运行代码，将 Rust 生成的库文件复制到应用程序目录中，然后重新构建：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ scons -j6 scons: Reading SConscript files ... scons: done reading SConscript files. [...]</span></span>
<span class="line"><span>scons: Building targets ... scons: done building targets.</span></span></code></pre></div><p>再次运行 QEMU，可以在你的嵌入式镜像中看到结果。</p><h3 id="你可以拥有这一切" tabindex="-1">你可以拥有这一切 <a class="header-anchor" href="#你可以拥有这一切" aria-label="Permalink to “你可以拥有这一切”">​</a></h3>`,13)),p("p",null,[s[19]||(s[19]=n("在你的嵌入式开发中使用 Rust，你可以获得 Rust 的所有功能，而不需要牺牲灵活性或稳定性。今天就在你的嵌入式系统上试试 Rust 吧。关于嵌入式 Rust 的过程（以及 RT-Thread 本身）的更多信息，请查看 RT-Thread 项目的 ",-1)),i(a,{href:"https://www.youtube.com/channel/UCdDHtIfSYPq4002r27ffqP"},{default:e(()=>[...s[18]||(s[18]=[n("YouTube 频道",-1)])]),_:1}),s[20]||(s[20]=n("。请记住，嵌入式也可以是开放的。",-1))]),s[41]||(s[41]=p("hr",null,null,-1)),p("p",null,[s[22]||(s[22]=n("via: ",-1)),i(a,{href:"https://opensource.com/article/21/10/rust-embedded-development"},{default:e(()=>[...s[21]||(s[21]=[n("https://opensource.com/article/21/10/rust-embedded-development",-1)])]),_:1})]),p("p",null,[s[27]||(s[27]=n("作者：",-1)),i(a,{href:"https://opensource.com/users/alansmithee"},{default:e(()=>[...s[23]||(s[23]=[n("Alan Smithee",-1)])]),_:1}),s[28]||(s[28]=n(" 选题：",-1)),i(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[24]||(s[24]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 译者：",-1)),i(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1}),s[30]||(s[30]=n(" 校对：",-1)),i(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[33]||(s[33]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原创编译，",-1)),i(a,{href:"https://linux.cn/"},{default:e(()=>[...s[32]||(s[32]=[n("Linux中国",-1)])]),_:1}),s[35]||(s[35]=n(" 荣誉推出",-1))])])}const R=t(u,[["render",c]]);export{T as __pageData,R as default};
