import{_ as t,a0 as o,w as d,s as r,ao as l,I as p,x as n,a1 as i,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"使用 Rust 進行嵌入式開發 | LCTT x X-CMD","titleTemplate":false,"description":"使用 Rust 進行嵌入式開發 | LCTT (202110) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"使用 Rust 進行嵌入式開發 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"使用 Rust 進行嵌入式開發 | LCTT (202110) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202110/20211025 Use Rust for embedded development","title":"使用 Rust 進行嵌入式開發","tag":"202110","desc":""},"relativePath":"202110/20211025 Use Rust for embedded development.md","filePath":"[post].md"}'),u={name:"202110/20211025 Use Rust for embedded development.md"};function c(g,s,h,b,k,f){const a=o("Link");return d(),r("div",null,[s[36]||(s[36]=l('<h1 id="使用-rust-進行嵌入式開發" tabindex="-1">使用 Rust 進行嵌入式開發 <a class="header-anchor" href="#使用-rust-進行嵌入式開發" aria-label="Permalink to “使用 Rust 進行嵌入式開發”">​</a></h1><blockquote><p>Rust 的高性能、高可靠性和高生產力使它適合於嵌入式系統。</p></blockquote><p><img src="https://img.linux.net.cn/data/attachment/album/202110/26/103848djcdhjk0d2z1hc52.jpg" alt=""></p><p>在過去的幾年裏，Rust 在程序員中獲得了熱情的追捧。技術潮流來來去去，所以很難將僅僅因為某項新技術而產生的興奮與對某項技術的優點的興奮區分開來，但我認為 Rust 是一種真正設計良好的語言。它的目標是幫助開發者建立可靠和高效的軟件，而且它從一開始就是為這個目的設計的。你可能聽過一些 Rust 的關鍵特性，在這篇文章中，我會證明這些特性正是 Rust 也恰好適合嵌入式系統的原因。比如：</p><ul><li>高性能：它速度快，內存利用率高</li><li>可靠性：在編譯過程中可以消除內存錯誤</li><li>生產力：很棒的文檔，友好的編譯器，有用的錯誤信息，以及一流的工具化。它有一個集成的包管理器和構建工具，智能的多編輯器支持自動補完和類型檢查、自動格式化等等。</li></ul><h3 id="為什麼使用-rust-進行嵌入式開發" tabindex="-1">為什麼使用 Rust 進行嵌入式開發？ <a class="header-anchor" href="#為什麼使用-rust-進行嵌入式開發" aria-label="Permalink to “為什麼使用 Rust 進行嵌入式開發？”">​</a></h3><p>Rust 的設計是為了保證安全和高性能。嵌入式軟件會出現的問題主要是內存的問題。從某種程度上説，Rust 是一種面向編譯器的語言，所以你可以確保在編譯時安全使用內存。以下是使用 Rust 在嵌入式設備上開發的一些好處：</p><ul><li>強大的靜態分析</li><li>靈活的內存</li><li>無畏的併發性</li><li>互操作性</li><li>可移植性</li><li>社區驅動</li></ul>',8)),p("p",null,[s[1]||(s[1]=n("在這篇文章中，我使用開源的 ",-1)),i(a,{href:"https://github.com/RT-Thread/rt-thread"},{default:e(()=>[...s[0]||(s[0]=[n("RT-Thread 操作系統",-1)])]),_:1}),s[2]||(s[2]=n(" 來演示如何使用 Rust 進行嵌入式開發。",-1))]),s[37]||(s[37]=l(`<h3 id="如何在-c-語言中調用-rust" tabindex="-1">如何在 C 語言中調用 Rust <a class="header-anchor" href="#如何在-c-語言中調用-rust" aria-label="Permalink to “如何在 C 語言中調用 Rust”">​</a></h3><p>在 C 代碼中調用 Rust 代碼時，你必須將 Rust 源代碼打包成靜態庫文件。當 C 代碼編譯時，將其鏈接進去。</p><h4 id="用-rust-創建一個靜態庫" tabindex="-1">用 Rust 創建一個靜態庫 <a class="header-anchor" href="#用-rust-創建一個靜態庫" aria-label="Permalink to “用 Rust 創建一個靜態庫”">​</a></h4><p>在這個過程中，有兩個步驟：</p><p>1、使用 <code>cargo init --lib rust_to_c</code> 在 Clion 中建立一個 <code>lib</code> 庫。在 <code>lib.rs</code> 中加入以下代碼。下面的函數計算兩個類型為 <code>i32</code> 的值的總和並返回結果：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#![no_std]</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>2、在你的 <code>Cargo.toml</code> 文件中添加以下代碼，以告訴 Rustc 要生成什麼類型的庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[lib]</span></span>
<span class="line"><span>name = &quot;sum&quot;</span></span>
<span class="line"><span>crate-type = [&quot;staticlib&quot;]</span></span>
<span class="line"><span>path = &quot;src/lib.rs&quot;</span></span></code></pre></div><h4 id="交叉編譯" tabindex="-1">交叉編譯 <a class="header-anchor" href="#交叉編譯" aria-label="Permalink to “交叉編譯”">​</a></h4><p>你可以針對你的目標平台進行交叉編譯。假設你的嵌入式系統是基於 Arm 的，步驟很簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustup target add armv7a-none-eabi</span></span></code></pre></div><p>生成靜態庫文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build --target=armv7a-none-eabi --release --verbose</span></span>
<span class="line"><span>Fresh rust_to_c v0.1.0</span></span>
<span class="line"><span>Finished release [optimized] target(s) in 0.01s</span></span></code></pre></div><h4 id="生成頭文件" tabindex="-1">生成頭文件 <a class="header-anchor" href="#生成頭文件" aria-label="Permalink to “生成頭文件”">​</a></h4><p>你也需要頭文件：</p>`,15)),p("p",null,[s[4]||(s[4]=n("1、安裝 ",-1)),i(a,{href:"https://github.com/eqrion/cbindgen"},{default:e(()=>[...s[3]||(s[3]=[n("cbindgen",-1)])]),_:1}),s[5]||(s[5]=n("。",-1)),s[6]||(s[6]=p("code",null,"cbindgen",-1)),s[7]||(s[7]=n(" 工具會從 Rust 庫中生成一個 C 或 C++11 的頭文件：",-1))]),s[38]||(s[38]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo install --force cbindgen</span></span></code></pre></div><p>2、在你的項目文件夾下創建一個新的 <code>cbindgen.toml</code> 文件。</p><p>3、生成一個頭文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cbindgen --config cbindgen.toml --crate rust_to_c --output sum.h</span></span></code></pre></div><h4 id="調用-rust-庫文件" tabindex="-1">調用 Rust 庫文件 <a class="header-anchor" href="#調用-rust-庫文件" aria-label="Permalink to “調用 Rust 庫文件”">​</a></h4><p>現在你可以對你的 Rust 庫進行調用了。</p><p>1、把生成的 <code>sum.h</code> 和 <code>sum.a</code> 文件放到 <code>rt-thread/bsp/qemu-vexpress-a9/applications</code> 目錄下。</p><p>2、修改 <code>SConscript</code> 文件並添加一個靜態庫：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   from building import *</span></span>
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
<span class="line"><span>   Return(&#39;group&#39;)</span></span></code></pre></div><p>3、在主函數中調用 <code>sum</code> 函數，得到返回值，並 <code>printf</code> 該值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>   #include &lt;stdint.h&gt;</span></span>
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
<span class="line"><span>   }</span></span></code></pre></div>`,11)),p("p",null,[s[9]||(s[9]=n("4、在 RT-Thread ",-1)),i(a,{href:"https://www.rt-thread.io/download.html?download=Env"},{default:e(()=>[...s[8]||(s[8]=[n("Env",-1)])]),_:1}),s[10]||(s[10]=n(" 環境中，使用 ",-1)),s[11]||(s[11]=p("code",null,"scons",-1)),s[12]||(s[12]=n(" 來編譯項目並運行：",-1))]),s[39]||(s[39]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ scons -j6</span></span>
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
<span class="line"><span>call rust sum(1, 2) = 3</span></span></code></pre></div><h3 id="加、減、乘、除" tabindex="-1">加、減、乘、除 <a class="header-anchor" href="#加、減、乘、除" aria-label="Permalink to “加、減、乘、除”">​</a></h3><p>你可以在 Rust 中實現一些複雜的數學運算。在 <code>lib.rs</code> 文件中，使用 Rust 語言來實現加、減、乘、除：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#![no_std]</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,4)),p("p",null,[s[14]||(s[14]=n("構建你的庫文件和頭文件，並把它們放在應用程序目錄中。使用 ",-1)),s[15]||(s[15]=p("code",null,"scons",-1)),s[16]||(s[16]=n(" 來編譯。如果在鏈接過程中出現錯誤，請在官方 ",-1)),i(a,{href:"https://github.com/rust-lang/compiler-builtins/issues/353"},{default:e(()=>[...s[13]||(s[13]=[n("Github 頁面",-1)])]),_:1}),s[17]||(s[17]=n(" 中找到解決方案。",-1))]),s[40]||(s[40]=l(`<p>修改 <code>rtconfig.py</code> 文件，並添加鏈接參數 <code>--allow-multiple-definition</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>       DEVICE = &#39; -march=armv7-a -marm -msoft-float&#39;</span></span>
<span class="line"><span>       CFLAGS = DEVICE + &#39; -Wall&#39;</span></span>
<span class="line"><span>       AFLAGS = &#39; -c&#39; + DEVICE + &#39; -x assembler-with-cpp -D__ASSEMBLY__ -I.&#39;</span></span>
<span class="line"><span>       LINK_SCRIPT = &#39;link.lds&#39;</span></span>
<span class="line"><span>       LFLAGS = DEVICE + &#39; -nostartfiles -Wl,--gc-sections,-Map=rtthread.map,-cref,-u,system_vectors,--allow-multiple-definition&#39;+\\</span></span>
<span class="line"><span>                         &#39; -T %s&#39; % LINK_SCRIPT</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       CPATH = &#39;&#39;</span></span>
<span class="line"><span>       LPATH = &#39;&#39;</span></span></code></pre></div><p>編譯並運行 QEMU 來看看你的工作。</p><h3 id="在-rust-中調用-c-語言" tabindex="-1">在 Rust 中調用 C 語言 <a class="header-anchor" href="#在-rust-中調用-c-語言" aria-label="Permalink to “在 Rust 中調用 C 語言”">​</a></h3><p>Rust 可以在 C 代碼中調用，但是如何在你的 Rust 代碼中調用 C 呢？下面是一個在 Rust 代碼中調用 <code>rt_kprintf</code> C 函數的例子。</p><p>首先，修改 <code>lib.rs</code> 文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>    // The imported rt-thread functions list</span></span>
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
<span class="line"><span>    }</span></span></code></pre></div><p>接下來，生成庫文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build --target=armv7a-none-eabi --release --verbose</span></span>
<span class="line"><span>Compiling rust_to_c v0.1.0</span></span>
<span class="line"><span>Running \`rustc --crate-name sum --edition=2018 src/lib.rs --error-format=json --json=diagnostic-rendered-ansi --crate-type staticlib --emit=dep-info,link -C opt-level=3 -C embed-bitcode=no -C metadata=a</span></span>
<span class="line"><span>Finished release [optimized] target(s) in 0.11s</span></span></code></pre></div><p>而現在，要運行代碼，將 Rust 生成的庫文件複製到應用程序目錄中，然後重新構建：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ scons -j6 scons: Reading SConscript files ... scons: done reading SConscript files. [...]</span></span>
<span class="line"><span>scons: Building targets ... scons: done building targets.</span></span></code></pre></div><p>再次運行 QEMU，可以在你的嵌入式鏡像中看到結果。</p><h3 id="你可以擁有這一切" tabindex="-1">你可以擁有這一切 <a class="header-anchor" href="#你可以擁有這一切" aria-label="Permalink to “你可以擁有這一切”">​</a></h3>`,13)),p("p",null,[s[19]||(s[19]=n("在你的嵌入式開發中使用 Rust，你可以獲得 Rust 的所有功能，而不需要犧牲靈活性或穩定性。今天就在你的嵌入式系統上試試 Rust 吧。關於嵌入式 Rust 的過程（以及 RT-Thread 本身）的更多信息，請查看 RT-Thread 項目的 ",-1)),i(a,{href:"https://www.youtube.com/channel/UCdDHtIfSYPq4002r27ffqP"},{default:e(()=>[...s[18]||(s[18]=[n("YouTube 頻道",-1)])]),_:1}),s[20]||(s[20]=n("。請記住，嵌入式也可以是開放的。",-1))]),s[41]||(s[41]=p("hr",null,null,-1)),p("p",null,[s[22]||(s[22]=n("via: ",-1)),i(a,{href:"https://opensource.com/article/21/10/rust-embedded-development"},{default:e(()=>[...s[21]||(s[21]=[n("https://opensource.com/article/21/10/rust-embedded-development",-1)])]),_:1})]),p("p",null,[s[27]||(s[27]=n("作者：",-1)),i(a,{href:"https://opensource.com/users/alansmithee"},{default:e(()=>[...s[23]||(s[23]=[n("Alan Smithee",-1)])]),_:1}),s[28]||(s[28]=n(" 選題：",-1)),i(a,{href:"https://github.com/lujun9972"},{default:e(()=>[...s[24]||(s[24]=[n("lujun9972",-1)])]),_:1}),s[29]||(s[29]=n(" 譯者：",-1)),i(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[25]||(s[25]=[n("wxy",-1)])]),_:1}),s[30]||(s[30]=n(" 校對：",-1)),i(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[26]||(s[26]=[n("wxy",-1)])]),_:1})]),p("p",null,[s[33]||(s[33]=n("本文由 ",-1)),i(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[31]||(s[31]=[n("LCTT",-1)])]),_:1}),s[34]||(s[34]=n(" 原創編譯，",-1)),i(a,{href:"https://linux.cn/"},{default:e(()=>[...s[32]||(s[32]=[n("Linux中國",-1)])]),_:1}),s[35]||(s[35]=n(" 榮譽推出",-1))])])}const R=t(u,[["render",c]]);export{T as __pageData,R as default};
