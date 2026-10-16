import{_ as t,a0 as o,w as r,s as c,I as n,x as a,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量 | LCTT (202305) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量 | LCTT (202305) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202305/20230403.1 ⭐️⭐️ Rust Basics Series 2 Using Variables and Constants in Rust Programs","title":"Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量","tag":"202305","desc":""},"relativePath":"202305/20230403.1 ⭐️⭐️ Rust Basics Series 2 Using Variables and Constants in Rust Programs.md","filePath":"[post].md"}'),d={name:"202305/20230403.1 ⭐️⭐️ Rust Basics Series 2 Using Variables and Constants in Rust Programs.md"};function u(b,s,h,g,k,f){const p=o("Link");return r(),c("div",null,[s[26]||(s[26]=n("h1",{id:"rust-基礎系列-2-在-rust-程序中使用變量和常量",tabindex:"-1"},[a("Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量 "),n("a",{class:"header-anchor",href:"#rust-基礎系列-2-在-rust-程序中使用變量和常量","aria-label":"Permalink to “Rust 基礎系列 #2: 在 Rust 程序中使用變量和常量”"},"​")],-1)),s[27]||(s[27]=n("p",null,[n("img",{src:"https://img.linux.net.cn/data/attachment/album/202305/01/144948gp13zdindx50ll0p.png",alt:""})],-1)),s[28]||(s[28]=n("blockquote",null,[n("p",null,"推進你的 Rust 學習，熟悉 Rust 程序的變量和常量。")],-1)),n("p",null,[s[2]||(s[2]=a("在 ",-1)),e(p,{href:"https://linux.cn/article-15709-1.html"},{default:i(()=>[...s[0]||(s[0]=[a("該系列的第一章",-1)])]),_:1}),s[3]||(s[3]=a("中，我講述了為什麼 Rust 是一門越來越流行的編程語言。我還展示瞭如何 ",-1)),e(p,{href:"https://linux.cn/article-15709-1.html"},{default:i(()=>[...s[1]||(s[1]=[a("在 Rust 中編寫 Hello World 程序",-1)])]),_:1}),s[4]||(s[4]=a("。",-1))]),s[29]||(s[29]=l(`<p>讓我們繼續 Rust 之旅。在本文中，我將向你介紹 Rust 編程語言中的變量和常量。</p><p>此外，我還將講解一個稱為“<ruby>遮蔽<rt>shadowing</rt></ruby>”的新編程概念。</p><h3 id="rust-變量的獨特之處" tabindex="-1">Rust 變量的獨特之處 <a class="header-anchor" href="#rust-變量的獨特之處" aria-label="Permalink to “Rust 變量的獨特之處”">​</a></h3><p>在編程語言中，變量是指 <em>存儲某些數據的內存地址的一個別名</em> 。</p><p>對 Rust 語言來講也是如此。但是 Rust 有一個獨特的“特性”。每個你聲明的變量都是 <strong>默認 <ruby>不可變的<rt>immutable</rt></ruby></strong> 。這意味着一旦給變量賦值，就不能再改變它的值。</p><p>這個決定是為了確保默認情況下，你不需要使用 <ruby>自旋鎖<rt>spin lock</rt></ruby> 或 <ruby>互斥鎖<rt>mutex</rt></ruby> 等特殊機制來引入多線程。Rust <strong>會保證</strong> 安全的併發。由於所有變量（默認情況下）都是不可變的，因此你不需要擔心線程會無意中更改變量值。</p><p>這並不是在説 Rust 中的變量就像常量一樣，因為它們確實不是常量。變量可以被顯式地定義為可變的。這樣的變量稱為 <strong>可變變量</strong> 。</p><p>這是在 Rust 中聲明變量的語法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 默認情況下不可變</span></span>
<span class="line"><span>// 初始化值是**唯一**的值</span></span>
<span class="line"><span>let variable_name = value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用 &#39;mut&#39; 關鍵字定義可變變量</span></span>
<span class="line"><span>// 初始化值可以被改變</span></span>
<span class="line"><span>let mut variable_name = value;</span></span></code></pre></div><blockquote><p>🚧 儘管你可以改變可變變量的值，但你不能將另一種數據類型的值賦值給它。</p><p>這意味着，如果你有一個可變的浮點型變量，你不能在後面將一個字符賦值給它。</p></blockquote><h3 id="rust-數據類型概觀" tabindex="-1">Rust 數據類型概觀 <a class="header-anchor" href="#rust-數據類型概觀" aria-label="Permalink to “Rust 數據類型概觀”">​</a></h3><p>在上一篇文章中，你可能注意到了我提到 Rust 是一種強類型語言。但是在定義變量時，你不需要指定數據類型，而是使用一個通用的關鍵字 <code>let</code>。</p><p>Rust 編譯器可以根據賦值給變量的值推斷出變量的數據類型。但是如果你仍然希望明確指定數據類型並希望註釋類型，那麼可以這樣做。以下是語法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>let variable_name: data_type = value;</span></span></code></pre></div><p>下面是 Rust 編程語言中一些常見的數據類型：</p><ul><li><strong>整數類型</strong>：分別用於有符號和無符號的 32 位整數的 <code>i32</code> 和 <code>u32</code></li><li><strong>浮點類型</strong>：分別用於 32 位和 64 位浮點數的 <code>f32</code> 和 <code>f64</code></li><li><strong>布爾類型</strong>：<code>bool</code></li><li><strong>字符類型</strong>：<code>char</code></li></ul><p>我會在下一篇文章中更詳細地介紹 Rust 的數據類型。現在，這應該足夠了。</p><blockquote><p>🚧 Rust 並不支持隱式類型轉換。因此，如果你將值 <code>8</code> 賦給一個浮點型變量，你將會遇到編譯時錯誤。你應該賦的值是 <code>8.</code> 或 <code>8.0</code>。</p></blockquote><p>Rust 還強制要求在讀取存儲在其中的值之前初始化變量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{ // 該代碼塊不會被編譯</span></span>
<span class="line"><span>    let a;</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, a); // 本行報錯</span></span>
<span class="line"><span>    // 讀取一個**未初始化**變量的值是一個編譯時錯誤</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ // 該代碼塊會被編譯</span></span>
<span class="line"><span>    let a;</span></span>
<span class="line"><span>    a = 128;</span></span>
<span class="line"><span>    println!(&quot;{}&quot;, a); // 本行不會報錯</span></span>
<span class="line"><span>    // 變量 &#39;a&#39; 有一個初始值</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果你在不初始化的情況下聲明一個變量，並在給它賦值之前使用它，Rust 編譯器將會拋出一個 <strong>編譯時錯誤</strong> 。</p><p>雖然錯誤很煩人，但在這種情況下，Rust 編譯器強制你不要犯寫代碼時常見的錯誤之一：未初始化的變量。</p><h3 id="rust-編譯器的錯誤信息" tabindex="-1">Rust 編譯器的錯誤信息 <a class="header-anchor" href="#rust-編譯器的錯誤信息" aria-label="Permalink to “Rust 編譯器的錯誤信息”">​</a></h3><p>來寫幾個程序，你將</p><ul><li>通過執行“正常”的任務來理解 Rust 的設計，這些任務實際上是內存相關問題的主要原因</li><li>閲讀和理解 Rust 編譯器的錯誤/警告信息</li></ul><h4 id="測試變量的不可變性" tabindex="-1">測試變量的不可變性 <a class="header-anchor" href="#測試變量的不可變性" aria-label="Permalink to “測試變量的不可變性”">​</a></h4><p>讓我們故意寫一個試圖修改不可變變量的程序，看看接下來會發生什麼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut a = 172;</span></span>
<span class="line"><span>    let b = 273;</span></span>
<span class="line"><span>    println!(&quot;a: {a}, b: {b}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    a = 380;</span></span>
<span class="line"><span>    b = 420;</span></span>
<span class="line"><span>    println!(&quot;a: {}, b: {}&quot;, a, b);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>直到第 4 行看起來都是一個簡單的程序。但是在第 7 行，變量 <code>b</code> —— 一個不可變變量 —— 的值被修改了。</p><p>注意打印 Rust 變量值的兩種方法。在第 4 行，我將變量括在花括號中，以便打印它們的值。在第 8 行，我保持括號為空，並使用 C 的風格將變量作為參數。這兩種方法都是有效的。（除了修改不可變變量的值，這個程序中的所有內容都是正確的。）</p><p>來編譯一下！如果你按照上一章的步驟做了，你已經知道該怎麼做了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustc main.rs</span></span>
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
<span class="line"><span>For more information about this error, try \`rustc --explain E0384\`.</span></span></code></pre></div><blockquote><p>📋 “binding” 一詞是指變量名。但這只是一個簡單的解釋。</p></blockquote><p>這很好的展示了 Rust 強大的錯誤檢查和信息豐富的錯誤信息。第一行展示了阻止上述代碼編譯的錯誤信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>error[E0384]: cannot assign twice to immutable variable b</span></span></code></pre></div><p>這意味着，Rust 編譯器注意到我試圖給變量 <code>b</code> 重新賦值，但變量 <code>b</code> 是一個不可變變量。所以這就是導致這個錯誤的原因。</p><p>編譯器甚至可以識別出錯誤發生的確切行和列號。</p><p>在顯示 <code>first assignment to b</code> 的行下面，是提供幫助的行。因為我正在改變不可變變量 <code>b</code> 的值，所以我被告知使用 <code>mut</code> 關鍵字將變量 <code>b</code> 聲明為可變變量。</p><blockquote><p>🖥️ 自己實現一個修復來更好地理解手頭的問題。</p></blockquote><h4 id="使用未初始化的變量" tabindex="-1">使用未初始化的變量 <a class="header-anchor" href="#使用未初始化的變量" aria-label="Permalink to “使用未初始化的變量”">​</a></h4><p>現在，讓我們看看當我們嘗試讀取未初始化變量的值時，Rust 編譯器會做什麼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a: i32;</span></span>
<span class="line"><span>    a = 123;</span></span>
<span class="line"><span>    println!(&quot;a: {a}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let b: i32;</span></span>
<span class="line"><span>    println!(&quot;b: {b}&quot;);</span></span>
<span class="line"><span>    b = 123;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏，我有兩個不可變變量 <code>a</code> 和 <code>b</code>，在聲明時都沒有初始化。變量 <code>a</code> 在其值被讀取之前被賦予了一個值。但是變量 <code>b</code> 的值在被賦予初始值之前被讀取了。</p><p>來編譯一下，看看結果。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ rustc main.rs</span></span>
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
<span class="line"><span>For more information about this error, try \`rustc --explain E0381\`.</span></span></code></pre></div><p>這裏，Rust 編譯器拋出了一個編譯時錯誤和一個警告。警告説變量 <code>b</code> 的值從來沒有被讀取過。</p><p>但是這是荒謬的！變量 <code>b</code> 的值在第 7 行被訪問了。但是仔細看；警告是關於第 8 行的。這很令人困惑；讓我們暫時跳過這個警告，繼續看錯誤。</p><p>這個錯誤信息説 <code>used binding b is possibly-uninitialized</code>。和之前的例子一樣，Rust 編譯器指出錯誤是由於嘗試在第 7 行讀取變量 <code>b</code> 的值而引起的。讀取變量 <code>b</code> 的值是錯誤的原因是它的值沒有初始化。在 Rust 編程語言中，這是非法的。因此編譯時錯誤出現。</p><blockquote><p>🖥️ 這個錯誤可以很容易地通過交換第 7 和第 8 行的代碼來解決。試一下，看看錯誤是否消失了。</p></blockquote><h3 id="示例程序-交換數字" tabindex="-1">示例程序：交換數字 <a class="header-anchor" href="#示例程序-交換數字" aria-label="Permalink to “示例程序：交換數字”">​</a></h3><p>現在你已經熟悉了常見的變量相關問題，讓我們來看一個交換兩個變量值的程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut a = 7186932;</span></span>
<span class="line"><span>    let mut b = 1276561;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;a: {a}, b: {b}&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 交換變量值</span></span>
<span class="line"><span>    let temp = a;</span></span>
<span class="line"><span>    a = b;</span></span>
<span class="line"><span>    b = temp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;a: {}, b: {}&quot;, a, b);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我在這裏聲明瞭兩個變量 <code>a</code> 和 <code>b</code>。這兩個變量都是可變的，因為我希望在後面改變它們的值。我賦予了一些隨機值。最初，我打印了這些變量的值。</p><p>然後，在第 8 行，我創建了一個名為 <code>temp</code> 的不可變變量，並將存儲在 <code>a</code> 中的值賦給它。之所以這個變量是不可變的，是因為 <code>temp</code> 的值不會改變。</p><p>要交換值，我將變量 <code>b</code> 的值賦給變量 <code>a</code>，在下一行，我將 <code>temp</code> 的值（它包含 <code>a</code> 的值）賦給變量 <code>b</code>。現在值已經交換了，我打印了變量 <code>a</code> 和 <code>b</code> 的值。</p><p>在編譯並執行上面的代碼後，我得到了以下輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a: 7186932, b: 1276561</span></span>
<span class="line"><span>a: 1276561, b: 7186932</span></span></code></pre></div><p>正如你所見，值已經交換了。完美。</p><h3 id="使用未使用的變量" tabindex="-1">使用未使用的變量 <a class="header-anchor" href="#使用未使用的變量" aria-label="Permalink to “使用未使用的變量”">​</a></h3><p>當你聲明瞭一些變量，打算在後面使用它們，但是還沒有使用它們，然後編譯你的 Rust 代碼來檢查一些東西時，Rust 編譯器會警告你。</p><p>原因是顯而易見的。不會被使用的變量佔用了不必要的初始化時間（CPU 週期）和內存空間。如果不會被使用，為什麼要在程序寫上它呢？儘管編譯器確實會優化這一點。但是它仍然是一個問題，因為它會以多餘的代碼的形式影響可讀性。</p><p>但是，有的時候，你可能會面對這樣的情況：創建一個變量與否不在你的控制之下。比如説，當一個函數返回多個值，而你只需要其中的一些值時。在這種情況下，你不能要求庫維護者根據你的需要調整他們的函數。</p><p>所以，在這種情況下，你可以寫一個以下劃線開頭的變量，Rust 編譯器將不再顯示這樣的警告。如果你真的不需要使用存儲在該未使用變量中的值，你可以簡單地將其命名為 <code>_</code>（下劃線），Rust 編譯器也會忽略它！</p><p>接下來的程序不僅不會生成任何輸出，而且也不會生成任何警告和/或錯誤消息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let _unnecessary_var = 0; // 沒有警告</span></span>
<span class="line"><span>    let _ = 0.0; // 完全忽略</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="算術運算" tabindex="-1">算術運算 <a class="header-anchor" href="#算術運算" aria-label="Permalink to “算術運算”">​</a></h3><p>數學就是數學，Rust 並沒有在這方面創新。你可以使用在其他編程語言（如 C、C++ 和/或 Java）中使用過的所有算術運算符。</p>`,67)),n("p",null,[s[6]||(s[6]=a("包含可以在 Rust 編程語言中使用的所有運算符和它們的含義的完整列表可以在 ",-1)),e(p,{href:"https://doc.rust-lang.org/book/appendix-02-operators.html?ref=itsfoss.com#operators"},{default:i(()=>[...s[5]||(s[5]=[a("這裏",-1)])]),_:1}),s[7]||(s[7]=a(" 找到。",-1))]),s[30]||(s[30]=l(`<h4 id="示例程序-一個生鏽的温度計" tabindex="-1">示例程序：一個生鏽的温度計 <a class="header-anchor" href="#示例程序-一個生鏽的温度計" aria-label="Permalink to “示例程序：一個生鏽的温度計”">​</a></h4><p>（LCTT 譯註：這裏的温度計“生鏽”了是因為它是使用 Rust（生鏽）編寫的，原作者在這裏玩了一個雙關。）</p><p>接下來是一個典型的程序，它將華氏度轉換為攝氏度，反之亦然。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>沒什麼大不了的……華氏温度轉換為攝氏温度，反之亦然。</p><p>正如你在這裏看到的，由於 Rust 不允許自動類型轉換，我不得不在整數 32、9 和 5 後放一個小數點。除此之外，這與你在 C、C++ 和/或 Java 中所做的類似。</p><p>作為練習，嘗試編寫一個程序，找出給定數中有多少位數字。</p><h3 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to “常量”">​</a></h3><p>如果你有一些編程知識，你可能知道這意味着什麼。常量是一種特殊類型的變量，它的值<strong>永遠不會改變</strong>。<em>它保持不變</em>。</p><p>在 Rust 編程語言中，使用以下語法聲明常量：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const CONSTANT_NAME: data_type = value;</span></span></code></pre></div><p>如你所見，聲明常量的語法與我們在 Rust 中看到的變量聲明非常相似。但是有兩個不同之處：</p><ul><li>常量的名字需要像 <code>SCREAMING_SNAKE_CASE</code> 這樣。所有的大寫字母和單詞之間用下劃線分隔。</li><li>常量的數據類型<strong>必須</strong>被顯性定義。</li></ul><h4 id="變量與常量的對比" tabindex="-1">變量與常量的對比 <a class="header-anchor" href="#變量與常量的對比" aria-label="Permalink to “變量與常量的對比”">​</a></h4><p>你可能在想，既然變量默認是不可變的，為什麼語言還要包含常量呢？</p>`,15)),n("p",null,[s[9]||(s[9]=a("接下來這個表格應該可以幫助你消除疑慮。（如果你好奇並且想更好地理解這些區別，你可以看看",-1)),e(p,{href:"https://blog.thefossguy.com/posts/immutable-vars-vs-constants-rs.md?ref=itsfoss.com"},{default:i(()=>[...s[8]||(s[8]=[a("我的Blog",-1)])]),_:1}),s[10]||(s[10]=a("，它詳細地展示了這些區別。）",-1))]),s[31]||(s[31]=l(`<p><img src="https://itsfoss.com/content/images/2023/02/image.png" alt="一個展示 Rust 編程語言中變量和常量之間區別的表格"></p><h4 id="使用常量的示例程序-計算圓的面積" tabindex="-1">使用常量的示例程序：計算圓的面積 <a class="header-anchor" href="#使用常量的示例程序-計算圓的面積" aria-label="Permalink to “使用常量的示例程序：計算圓的面積”">​</a></h4><p>這是一個很直接的關於 Rust 中常量的簡單程序。它計算圓的面積和周長。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    const PI: f64 = 3.14;</span></span>
<span class="line"><span>    let radius: f64 = 50.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let circle_area = PI * (radius * radius);</span></span>
<span class="line"><span>    let circle_perimeter = 2.0 * PI * radius;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;有一個周長為 {radius} 釐米的圓&quot;);</span></span>
<span class="line"><span>    println!(&quot;它的面積是 {} 平方釐米&quot;, circle_area);</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;以及它的周長是 {} 釐米&quot;,</span></span>
<span class="line"><span>        circle_perimeter</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果運行代碼，將產生以下輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>有一個周長為 50 釐米的圓</span></span>
<span class="line"><span>它的面積是 7850 平方釐米</span></span>
<span class="line"><span>以及它的周長是 314 釐米</span></span></code></pre></div><h3 id="rust-中的變量遮蔽" tabindex="-1">Rust 中的變量遮蔽 <a class="header-anchor" href="#rust-中的變量遮蔽" aria-label="Permalink to “Rust 中的變量遮蔽”">​</a></h3><p>如果你是一個 C++ 程序員，你可能已經知道我在説什麼了。當程序員<strong>聲明</strong>一個與已經聲明的變量同名的新變量時，這就是變量遮蔽。</p><p>與 C++ 不同，Rust 允許你在同一作用域中執行變量遮蔽！</p><blockquote><p>💡 當程序員遮蔽一個已經存在的變量時，新變量會被分配一個新的內存地址，但是使用與現有變量相同的名稱引用。</p></blockquote><p>來看看它在 Rust 中是如何工作的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a = 108;</span></span>
<span class="line"><span>    println!(&quot;a 的地址: {:p}, a 的值 {a}&quot;, &amp;a);</span></span>
<span class="line"><span>    let a = 56;</span></span>
<span class="line"><span>    println!(&quot;a 的地址: {:p}, a 的值: {a} // 遮蔽後&quot;, &amp;a);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mut b = 82;</span></span>
<span class="line"><span>    println!(&quot;\\nb 的地址: {:p}, b 的值: {b}&quot;, &amp;b);</span></span>
<span class="line"><span>    let mut b = 120;</span></span>
<span class="line"><span>    println!(&quot;b的地址: {:p}, b的值: {b} // 遮蔽後&quot;, &amp;b);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mut c = 18;</span></span>
<span class="line"><span>    println!(&quot;\\nc 的地址: {:p}, c的值: {c}&quot;, &amp;c);</span></span>
<span class="line"><span>    c = 29;</span></span>
<span class="line"><span>    println!(&quot;c 的地址: {:p}, c的值: {c} // 遮蔽後&quot;, &amp;c);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>println</code> 語句中花括號內的 <code>:p</code> 與 C 中的 <code>%p</code> 類似。它指定值的格式為內存地址（指針）。</p><p>我在這裏使用了 3 個變量。變量 <code>a</code> 是不可變的，並且在第 4 行被遮蔽。變量 <code>b</code> 是可變的，並且在第 9 行也被遮蔽。變量 <code>c</code> 是可變的，但是在第 14 行，只有它的值被改變了。它沒有被遮蔽。</p><p>現在，讓我們看看輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a 的地址: 0x7ffe954bf614, a 的值 108</span></span>
<span class="line"><span>a 的地址: 0x7ffe954bf674, a 的值: 56 // 遮蔽後</span></span>
<span class="line"><span></span></span>
<span class="line"><span>b 的地址: 0x7ffe954bf6d4, b 的值: 82</span></span>
<span class="line"><span>b 的地址: 0x7ffe954bf734, b 的值: 120 // 遮蔽後</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c 的地址: 0x7ffe954bf734, c 的值: 18</span></span>
<span class="line"><span>c 的地址: 0x7ffe954bf734, c 的值: 29 // 遮蔽後</span></span></code></pre></div><p>來看看輸出，你會發現不僅所有三個變量的值都改變了，而且被遮蔽的變量的地址也不同（檢查十六進制的最後幾個字符）。</p><p>變量 <code>a</code> 和 <code>b</code> 的內存地址改變了。這意味着變量的可變性或不可變性並不是遮蔽變量的限制。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本文介紹了 Rust 編程語言中的變量和常量。還介紹了算術運算。</p><p>做個總結：</p><ul><li>Rust 中的變量默認是不可變的，但是可以引入可變性。</li><li>程序員需要顯式地指定變量的可變性。</li><li>常量總是不可變的，無論如何都需要類型註釋。</li><li>變量遮蔽是指使用與現有變量相同的名稱聲明一個 <em>新</em> 變量。</li></ul><p>很好！我相信和 Rust 一起的進展不錯。在下一章中，我將討論 Rust 中的數據類型。敬請關注。</p><p>與此同時，如果你有任何問題，請告訴我。</p><p><em>（題圖：MJ/7c5366b8-f926-487e-9153-0a877145ca5）</em></p><hr>`,26)),n("p",null,[s[12]||(s[12]=a("via: ",-1)),e(p,{href:"https://itsfoss.com/rust-variables/"},{default:i(()=>[...s[11]||(s[11]=[a("https://itsfoss.com/rust-variables/",-1)])]),_:1})]),n("p",null,[s[17]||(s[17]=a("作者：",-1)),e(p,{href:"https://itsfoss.com/author/pratham/"},{default:i(()=>[...s[13]||(s[13]=[a("Pratham Patel",-1)])]),_:1}),s[18]||(s[18]=a(" 選題：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:i(()=>[...s[14]||(s[14]=[a("lkxed",-1)])]),_:1}),s[19]||(s[19]=a(" 譯者：",-1)),e(p,{href:"https://github.com/Cubik65536"},{default:i(()=>[...s[15]||(s[15]=[a("Cubik",-1)])]),_:1}),s[20]||(s[20]=a(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[16]||(s[16]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[21]||(s[21]=[a("LCTT",-1)])]),_:1}),s[24]||(s[24]=a(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[22]||(s[22]=[a("Linux中國",-1)])]),_:1}),s[25]||(s[25]=a(" 榮譽推出",-1))])])}const y=t(d,[["render",u]]);export{C as __pageData,y as default};
