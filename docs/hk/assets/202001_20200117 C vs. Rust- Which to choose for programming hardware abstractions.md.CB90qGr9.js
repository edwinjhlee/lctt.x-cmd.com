import{_ as i,a0 as d,w as r,s as o,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"C 還是 Rust：選擇哪個用於硬件抽象編程 | LCTT x X-CMD","titleTemplate":false,"description":"C 還是 Rust：選擇哪個用於硬件抽象編程 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"C 還是 Rust：選擇哪個用於硬件抽象編程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"C 還是 Rust：選擇哪個用於硬件抽象編程 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200117 C vs. Rust- Which to choose for programming hardware abstractions","title":"C 還是 Rust：選擇哪個用於硬件抽象編程","tag":"202001","desc":""},"relativePath":"202001/20200117 C vs. Rust- Which to choose for programming hardware abstractions.md","filePath":"[post].md"}'),u={name:"202001/20200117 C vs. Rust- Which to choose for programming hardware abstractions.md"},g={class:"table-wrap"};function k(h,s,c,f,m,b){const p=d("Link");return r(),o("div",null,[s[86]||(s[86]=a("h1",{id:"c-還是-rust-選擇哪個用於硬件抽象編程",tabindex:"-1"},[n("C 還是 Rust：選擇哪個用於硬件抽象編程 "),a("a",{class:"header-anchor",href:"#c-還是-rust-選擇哪個用於硬件抽象編程","aria-label":"Permalink to “C 還是 Rust：選擇哪個用於硬件抽象編程”"},"​")],-1)),s[87]||(s[87]=a("blockquote",null,[a("p",null,"在 Rust 中使用類型級編程可以使硬件抽象更加安全。")],-1)),s[88]||(s[88]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/28/123350k2w4mr3tp7crd4m2.jpg",alt:""})],-1)),s[89]||(s[89]=a("p",null,"Rust 是一種日益流行的編程語言，被視為硬件接口的最佳選擇。通常會將其與 C 的抽象級別相比較。本文介紹了 Rust 如何通過多種方式處理按位運算，並提供了既安全又易於使用的解決方案。",-1)),a("div",g,[a("table",null,[s[16]||(s[16]=a("thead",null,[a("tr",null,[a("th",null,"語言"),a("th",null,"誕生於"),a("th",null,"官方描述"),a("th",null,"總覽")])],-1)),a("tbody",null,[a("tr",null,[s[6]||(s[6]=a("td",null,"C",-1)),s[7]||(s[7]=a("td",null,"1972 年",-1)),a("td",null,[s[1]||(s[1]=n("C 是一種通用編程語言，具有表達式簡約、現代的控制流和數據結構，以及豐富的運算符集等特點。（來源：[CS 基礎知識] ",-1)),e(p,{href:"https://cs-fundamentals.com/c-programming/history-of-c-programming-language.php"},{default:l(()=>[...s[0]||(s[0]=[n("2",-1)])]),_:1}),s[2]||(s[2]=n("）",-1))]),a("td",null,[s[4]||(s[4]=n("C 是（一種）命令式語言，旨在以相對簡單的方式進行編譯，從而提供對內存的低級訪問。（來源：[W3schools.in] ",-1)),e(p,{href:"https://www.w3schools.in/c-tutorial/history-of-c/"},{default:l(()=>[...s[3]||(s[3]=[n("3",-1)])]),_:1}),s[5]||(s[5]=n("）",-1))])]),a("tr",null,[s[14]||(s[14]=a("td",null,"Rust",-1)),s[15]||(s[15]=a("td",null,"2010 年",-1)),a("td",null,[s[9]||(s[9]=n("一種賦予所有人構建可靠、高效的軟件的能力的語言（來源：[Rust 網站] ",-1)),e(p,{href:"https://www.rust-lang.org/"},{default:l(()=>[...s[8]||(s[8]=[n("4",-1)])]),_:1}),s[10]||(s[10]=n("）",-1))]),a("td",null,[s[12]||(s[12]=n("Rust 是一種專注於安全性（尤其是安全併發性）的多範式系統編程語言。（來源：[維基百科] ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Rust_(programming_language)"},{default:l(()=>[...s[11]||(s[11]=[n("5",-1)])]),_:1}),s[13]||(s[13]=n("）",-1))])])])])]),s[90]||(s[90]=t(`<h3 id="在-c-語言中對寄存器值進行按位運算" tabindex="-1">在 C 語言中對寄存器值進行按位運算 <a class="header-anchor" href="#在-c-語言中對寄存器值進行按位運算" aria-label="Permalink to “在 C 語言中對寄存器值進行按位運算”">​</a></h3><p>在系統編程領域，你可能經常需要編寫硬件驅動程序或直接與內存映射設備進行交互，而這些交互幾乎總是通過硬件提供的內存映射寄存器來完成的。通常，你通過對某些固定寬度的數字類型進行按位運算來與這些寄存器進行交互。</p><p>例如，假設一個 8 位寄存器具有三個字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>| (unused) | Kind | Interrupt | Enabled |</span></span>
<span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>   5-7       2-4        1          0</span></span></code></pre></div><p>字段名稱下方的數字規定了該字段在寄存器中使用的位。要啓用該寄存器，你將寫入值 <code>1</code>（以二進制表示為 <code>0000_0001</code>）來設置 <code>Enabled</code> 字段的位。但是，通常情況下，你也不想幹擾寄存器中的現有配置。假設你要在設備上啓用中斷功能，但也要確保設備保持啓用狀態。為此，必須將 <code>Interrupt</code> 字段的值與 <code>Enabled</code> 字段的值結合起來。你可以通過按位操作來做到這一點：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1 | (1 &lt;&lt; 1)</span></span></code></pre></div><p>通過將 1 和 2（<code>1</code> 左移一位得到）進行“或”（<code>|</code>）運算得到二進制值 <code>0000_0011</code> 。你可以將其寫入寄存器，使其保持啓用狀態，但也啓用中斷功能。</p><p>你的頭腦中要記住很多事情，特別是當你要在一個完整的系統上和可能有數百個之多的寄存器打交道時。在實踐上，你可以使用助記符來執行此操作，助記符可跟蹤字段在寄存器中的位置以及字段的寬度（即它的上邊界是什麼）</p><p>下面是這些助記符之一的示例。它們是 C 語言的宏，用右側的代碼替換它們的出現的地方。這是上面列出的寄存器的簡寫。<code>＆</code> 的左側是該字段的起始位置，而右側則限制該字段所佔的位：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define REG_ENABLED_FIELD(x) (x &lt;&lt; 0) &amp; 1</span></span>
<span class="line"><span>#define REG_INTERRUPT_FIELD(x) (x &lt;&lt; 1) &amp; 2</span></span>
<span class="line"><span>#define REG_KIND_FIELD(x) (x &lt;&lt; 2) &amp; (7 &lt;&lt; 2)</span></span></code></pre></div><p>然後，你可以使用這些來抽象化寄存器值的操作，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void set_reg_val(reg* u8, val u8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn enable_reg_with_interrupt(reg* u8) {</span></span>
<span class="line"><span>    set_reg_val(reg, REG_ENABLED_FIELD(1) | REG_INTERRUPT_FIELD(1));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這就是現在的做法。實際上，這就是大多數驅動程序在 Linux 內核中的使用方式。</p><p>有沒有更好的辦法？如果能夠基於對現代編程語言研究得出新的類型系統，就可能能夠獲得安全性和可表達性的好處。也就是説，如何使用更豐富、更具表現力的類型系統來使此過程更安全、更持久？</p><h3 id="在-rust-語言中對寄存器值進行按位運算" tabindex="-1">在 Rust 語言中對寄存器值進行按位運算 <a class="header-anchor" href="#在-rust-語言中對寄存器值進行按位運算" aria-label="Permalink to “在 Rust 語言中對寄存器值進行按位運算”">​</a></h3><p>繼續用上面的寄存器作為例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>| (unused) | Kind | Interrupt | Enabled |</span></span>
<span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>   5-7       2-4        1          0</span></span></code></pre></div><p>你想如何用 Rust 類型來表示它呢？</p><p>你將以類似的方式開始，為每個字段的<em>偏移</em>定義常量（即，距最低有效位有多遠）及其掩碼。<em>掩碼</em>是一個值，其二進制表示形式可用於更新或讀取寄存器內部的字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const ENABLED_MASK: u8 = 1;</span></span>
<span class="line"><span>const ENABLED_OFFSET: u8 = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const INTERRUPT_MASK: u8 = 2;</span></span>
<span class="line"><span>const INTERRUPT_OFFSET: u8 = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const KIND_MASK: u8 = 7 &lt;&lt; 2;</span></span>
<span class="line"><span>const KIND_OFFSET: u8 = 2;</span></span></code></pre></div><p>接下來，你將聲明一個 <code>Field</code> 類型並進行操作，將給定值轉換為與其位置相關的值，以供在寄存器內使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Field {</span></span>
<span class="line"><span>    value: u8,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Field {</span></span>
<span class="line"><span>    fn new(mask: u8, offset: u8, val: u8) -&gt; Self {</span></span>
<span class="line"><span>        Field {</span></span>
<span class="line"><span>            value: (val &lt;&lt; offset) &amp; mask,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最後，你將使用一個 <code>Register</code> 類型，該類型會封裝一個與你的寄存器寬度匹配的數字類型。 <code>Register</code> 具有 <code>update</code> 函數，可使用給定字段來更新寄存器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Register(u8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Register {</span></span>
<span class="line"><span>    fn update(&amp;mut self, val: Field) {</span></span>
<span class="line"><span>        self.0 = self.0 | field.value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(Field::new(ENABLED_MASK, ENABLED_OFFSET, 1));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 Rust，你可以使用數據結構來表示字段，將它們與特定的寄存器聯繫起來，並在與硬件交互時提供簡潔明瞭的工效。這個例子使用了 Rust 提供的最基本的功能。無論如何，添加的結構都會減輕上述 C 示例中的某些晦澀的地方。現在，字段是個帶有名字的事物，而不是從模糊的按位運算符派生而來的數字，並且寄存器是具有狀態的類型 —— 這在硬件上多了一層抽象。</p><h3 id="一個易用的-rust-實現" tabindex="-1">一個易用的 Rust 實現 <a class="header-anchor" href="#一個易用的-rust-實現" aria-label="Permalink to “一個易用的 Rust 實現”">​</a></h3><p>用 Rust 重寫的第一個版本很好，但是並不理想。你必須記住要帶上掩碼和偏移量，並且要手工進行臨時計算，這容易出錯。人類不擅長精確且重複的任務 —— 我們往往會感到疲勞或失去專注力，這會導致錯誤。一次一個寄存器地手動記錄掩碼和偏移量幾乎可以肯定會以糟糕的結局而告終。這是最好留給機器的任務。</p><p>其次，從結構上進行思考：如果有一種方法可以讓字段的類型攜帶掩碼和偏移信息呢？如果可以在編譯時就發現硬件寄存器的訪問和交互的實現代碼中存在錯誤，而不是在運行時才發現，該怎麼辦？也許你可以依靠一種在編譯時解決問題的常用策略，例如類型。</p>`,28)),a("p",null,[s[18]||(s[18]=n("你可以使用 ",-1)),e(p,{href:"https://docs.rs/crate/typenum"},{default:l(()=>[...s[17]||(s[17]=[n("typenum",-1)])]),_:1}),s[19]||(s[19]=n(" 來修改前面的示例，該庫在類型級別提供數字和算術。在這裏，你將使用掩碼和偏移量對 ",-1)),s[20]||(s[20]=a("code",null,"Field",-1)),s[21]||(s[21]=n(" 類型進行參數化，使其可用於任何 ",-1)),s[22]||(s[22]=a("code",null,"Field",-1)),s[23]||(s[23]=n(" 實例，而無需將其包括在調用處：",-1))]),s[91]||(s[91]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#[macro_use]</span></span>
<span class="line"><span>extern crate typenum;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use core::marker::PhantomData;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>use typenum::*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Now we&#39;ll add Mask and Offset to Field&#39;s type</span></span>
<span class="line"><span>struct Field&lt;Mask: Unsigned, Offset: Unsigned&gt; {</span></span>
<span class="line"><span>    value: u8,</span></span>
<span class="line"><span>    _mask: PhantomData&lt;Mask&gt;,</span></span>
<span class="line"><span>    _offset: PhantomData&lt;Offset&gt;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// We can use type aliases to give meaningful names to</span></span>
<span class="line"><span>// our fields (and not have to remember their offsets and masks).</span></span>
<span class="line"><span>type RegEnabled = Field&lt;U1, U0&gt;;</span></span>
<span class="line"><span>type RegInterrupt = Field&lt;U2, U1&gt;;</span></span>
<span class="line"><span>type RegKind = Field&lt;op!(U7 &lt;&lt; U2), U2&gt;;</span></span></code></pre></div><p>現在，當重新訪問 <code>Field</code> 的構造函數時，你可以忽略掩碼和偏移量參數，因為類型中包含該信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>impl&lt;Mask: Unsigned, Offset: Unsigned&gt; Field&lt;Mask, Offset&gt; {</span></span>
<span class="line"><span>    fn new(val: u8) -&gt; Self {</span></span>
<span class="line"><span>        Field {</span></span>
<span class="line"><span>            value: (val &lt;&lt; Offset::U8) &amp; Mask::U8,</span></span>
<span class="line"><span>            _mask: PhantomData,</span></span>
<span class="line"><span>            _offset: PhantomData,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// And to enable our register...</span></span>
<span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(RegEnabled::new(1));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看起來不錯，但是……如果你在給定的值是否<em>適合</em>該字段方面犯了錯誤，會發生什麼？考慮一個簡單的輸入錯誤，你在其中放置了 <code>10</code> 而不是 <code>1</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(RegEnabled::new(10));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的代碼中，預期結果是什麼？好吧，代碼會將啓用位設置為 0，因為 <code>10＆1 = 0</code>。那真不幸；最好在嘗試寫入之前知道你要寫入字段的值是否適合該字段。事實上，我認為截掉錯誤字段值的高位是一種 1<em>未定義的行為</em>（哈）。</p><h3 id="出於安全考慮使用-rust" tabindex="-1">出於安全考慮使用 Rust <a class="header-anchor" href="#出於安全考慮使用-rust" aria-label="Permalink to “出於安全考慮使用 Rust”">​</a></h3><p>如何以一般方式檢查字段的值是否適合其規定的位置？需要更多類型級別的數字！</p><p>你可以在 <code>Field</code> 中添加 <code>Width</code> 參數，並使用它來驗證給定的值是否適合該字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Field&lt;Width: Unsigned, Mask: Unsigned, Offset: Unsigned&gt; {</span></span>
<span class="line"><span>    value: u8,</span></span>
<span class="line"><span>    _mask: PhantomData&lt;Mask&gt;,</span></span>
<span class="line"><span>    _offset: PhantomData&lt;Offset&gt;,</span></span>
<span class="line"><span>    _width: PhantomData&lt;Width&gt;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type RegEnabled = Field&lt;U1,U1, U0&gt;;</span></span>
<span class="line"><span>type RegInterrupt = Field&lt;U1, U2, U1&gt;;</span></span>
<span class="line"><span>type RegKind = Field&lt;U3, op!(U7 &lt;&lt; U2), U2&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;Width: Unsigned, Mask: Unsigned, Offset: Unsigned&gt; Field&lt;Width, Mask, Offset&gt; {</span></span>
<span class="line"><span>    fn new(val: u8) -&gt; Option&lt;Self&gt; {</span></span>
<span class="line"><span>        if val &lt;= (1 &lt;&lt; Width::U8) - 1 {</span></span>
<span class="line"><span>            Some(Field {</span></span>
<span class="line"><span>                value: (val &lt;&lt; Offset::U8) &amp; Mask::U8,</span></span>
<span class="line"><span>                _mask: PhantomData,</span></span>
<span class="line"><span>                _offset: PhantomData,</span></span>
<span class="line"><span>                _width: PhantomData,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            None</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>現在，只有給定值適合時，你才能構造一個 <code>Field</code> ！否則，你將得到 <code>None</code> 信號，該信號指示發生了錯誤，而不是截掉該值的高位並靜默寫入意外的值。</p><p>但是請注意，這將在運行時環境中引發錯誤。但是，我們事先知道我們想寫入的值，還記得嗎？鑑於此，我們可以教編譯器完全拒絕具有無效字段值的程序 —— 我們不必等到運行它！</p><p>這次，你將向 <code>new</code> 的新實現 <code>new_checked</code> 中添加一個特徵綁定（<code>where</code> 子句），該函數要求輸入值小於或等於給定字段用 <code>Width</code> 所能容納的最大可能值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Field&lt;Width: Unsigned, Mask: Unsigned, Offset: Unsigned&gt; {</span></span>
<span class="line"><span>    value: u8,</span></span>
<span class="line"><span>    _mask: PhantomData&lt;Mask&gt;,</span></span>
<span class="line"><span>    _offset: PhantomData&lt;Offset&gt;,</span></span>
<span class="line"><span>    _width: PhantomData&lt;Width&gt;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type RegEnabled = Field&lt;U1, U1, U0&gt;;</span></span>
<span class="line"><span>type RegInterrupt = Field&lt;U1, U2, U1&gt;;</span></span>
<span class="line"><span>type RegKind = Field&lt;U3, op!(U7 &lt;&lt; U2), U2&gt;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl&lt;Width: Unsigned, Mask: Unsigned, Offset: Unsigned&gt; Field&lt;Width, Mask, Offset&gt; {</span></span>
<span class="line"><span>    const fn new_checked&lt;V: Unsigned&gt;() -&gt; Self</span></span>
<span class="line"><span>    where</span></span>
<span class="line"><span>        V: IsLessOrEqual&lt;op!((U1 &lt;&lt; Width) - U1), Output = True&gt;,</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        Field {</span></span>
<span class="line"><span>            value: (V::U8 &lt;&lt; Offset::U8) &amp; Mask::U8,</span></span>
<span class="line"><span>            _mask: PhantomData,</span></span>
<span class="line"><span>            _offset: PhantomData,</span></span>
<span class="line"><span>            _width: PhantomData,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>只有擁有此屬性的數字才實現此特徵，因此，如果使用不適合的數字，它將無法編譯。讓我們看一看！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(RegEnabled::new_checked::&lt;U10&gt;());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>12 |     reg.update(RegEnabled::new_checked::&lt;U10&gt;());</span></span>
<span class="line"><span>   |                           ^^^^^^^^^^^^^^^^ expected struct \`typenum::B0\`, found struct \`typenum::B1\`</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   = note: expected type \`typenum::B0\`</span></span>
<span class="line"><span>           found type \`typenum::B1\`</span></span></code></pre></div><p><code>new_checked</code> 將無法生成一個程序，因為該字段的值有錯誤的高位。你的輸入錯誤不會在運行時環境中才爆炸，因為你永遠無法獲得一個可以運行的工件。</p><p>就使內存映射的硬件進行交互的安全性而言，你已經接近 Rust 的極致。但是，你在 C 的第一個示例中所寫的內容比最終得到的一鍋粥的類型參數更簡潔。當你談論潛在可能有數百甚至數千個寄存器時，這樣做是否容易處理？</p><h3 id="讓-rust-恰到好處-既安全又方便使用" tabindex="-1">讓 Rust 恰到好處：既安全又方便使用 <a class="header-anchor" href="#讓-rust-恰到好處-既安全又方便使用" aria-label="Permalink to “讓 Rust 恰到好處：既安全又方便使用”">​</a></h3><p>早些時候，我認為手工計算掩碼有問題，但我又做了同樣有問題的事情 —— 儘管是在類型級別。雖然使用這種方法很不錯，但要達到編寫任何代碼的地步，則需要大量樣板和手動轉錄（我在這裏談論的是類型的同義詞）。</p>`,20)),a("p",null,[s[26]||(s[26]=n("我們的團隊想要像 ",-1)),e(p,{href:"https://docs.rs/tock-registers/0.3.0/tock_registers/"},{default:l(()=>[...s[24]||(s[24]=[n("TockOS mmio 寄存器",-1)])]),_:1}),s[27]||(s[27]=n("之類的東西，而以最少的手動轉錄生成類型安全的實現。我們得出的結果是一個宏，該宏生成必要的樣板以獲得類似 Tock 的 API 以及基於類型的邊界檢查。要使用它，請寫下一些有關寄存器的信息，其字段、寬度和偏移量以及可選的",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Enumerated_type"},{default:l(()=>[...s[25]||(s[25]=[n("枚舉",-1)])]),_:1}),s[28]||(s[28]=n("類的值（你應該為字段可能具有的值賦予“含義”）：",-1))]),s[92]||(s[92]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>register! {</span></span>
<span class="line"><span>    // The register&#39;s name</span></span>
<span class="line"><span>    Status,</span></span>
<span class="line"><span>    // The type which represents the whole register.</span></span>
<span class="line"><span>    u8,</span></span>
<span class="line"><span>    // The register&#39;s mode, ReadOnly, ReadWrite, or WriteOnly.</span></span>
<span class="line"><span>    RW,</span></span>
<span class="line"><span>    // And the fields in this register.</span></span>
<span class="line"><span>    Fields [</span></span>
<span class="line"><span>        On    WIDTH(U1) OFFSET(U0),</span></span>
<span class="line"><span>        Dead  WIDTH(U1) OFFSET(U1),</span></span>
<span class="line"><span>        Color WIDTH(U3) OFFSET(U2) [</span></span>
<span class="line"><span>            Red    = U1,</span></span>
<span class="line"><span>            Blue   = U2,</span></span>
<span class="line"><span>            Green  = U3,</span></span>
<span class="line"><span>            Yellow = U4</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>由此，你可以生成寄存器和字段類型，如上例所示，其中索引：<code>Width</code>、<code>Mask</code> 和 <code>Offset</code> 是從一個字段定義的 <code>WIDTH</code> 和 <code>OFFSET</code> 部分的輸入值派生的。另外，請注意，所有這些數字都是 “類型數字”；它們將直接進入你的 <code>Field</code> 定義！</p><p>生成的代碼通過為寄存器及字段指定名稱來為寄存器及其相關字段提供名稱空間。這很繞口，看起來是這樣的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mod Status {</span></span>
<span class="line"><span>    struct Register(u8);</span></span>
<span class="line"><span>    mod On {</span></span>
<span class="line"><span>        struct Field; // There is of course more to this definition</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mod Dead {</span></span>
<span class="line"><span>        struct Field;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    mod Color {</span></span>
<span class="line"><span>        struct Field;</span></span>
<span class="line"><span>        pub const Red: Field = Field::&lt;U1&gt;new();</span></span>
<span class="line"><span>        // &amp;c.</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)),a("p",null,[s[30]||(s[30]=n("生成的 API 包含名義上期望的讀取和寫入的原語，以獲取原始寄存器的值，但它也有辦法獲取單個字段的值、執行集合操作以及確定是否設置了任何（或全部）位集合的方法。你可以閲讀",-1)),e(p,{href:"https://github.com/auxoncorp/bounded-registers#the-register-api"},{default:l(()=>[...s[29]||(s[29]=[n("完整生成的 API",-1)])]),_:1}),s[31]||(s[31]=n("上的文檔。",-1))]),s[93]||(s[93]=a("h3",{id:"粗略檢查",tabindex:"-1"},[n("粗略檢查 "),a("a",{class:"header-anchor",href:"#粗略檢查","aria-label":"Permalink to “粗略檢查”"},"​")],-1)),s[94]||(s[94]=a("p",null,"將這些定義用於實際設備會是什麼樣？代碼中是否會充斥着類型參數，從而掩蓋了視圖中的實際邏輯？",-1)),s[95]||(s[95]=a("p",null,"不會！通過使用類型同義詞和類型推斷，你實際上根本不必考慮程序的類型層面部分。你可以直接與硬件交互，並自動獲得與邊界相關的保證。",-1)),a("p",null,[s[33]||(s[33]=n("這是一個 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter"},{default:l(()=>[...s[32]||(s[32]=[n("UART",-1)])]),_:1}),s[34]||(s[34]=n(" 寄存器塊的示例。我會跳過寄存器本身的聲明，因為包括在這裏就太多了。而是從寄存器“塊”開始，然後幫助編譯器知道如何從指向該塊開頭的指針中查找寄存器。我們通過實現 ",-1)),s[35]||(s[35]=a("code",null,"Deref",-1)),s[36]||(s[36]=n(" 和 ",-1)),s[37]||(s[37]=a("code",null,"DerefMut",-1)),s[38]||(s[38]=n(" 來做到這一點：",-1))]),s[96]||(s[96]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#[repr(C)]</span></span>
<span class="line"><span>pub struct UartBlock {</span></span>
<span class="line"><span>    rx: UartRX::Register,</span></span>
<span class="line"><span>    _padding1: [u32; 15],</span></span>
<span class="line"><span>    tx: UartTX::Register,</span></span>
<span class="line"><span>    _padding2: [u32; 15],</span></span>
<span class="line"><span>    control1: UartControl1::Register,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pub struct Regs {</span></span>
<span class="line"><span>    addr: usize,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Deref for Regs {</span></span>
<span class="line"><span>    type Target = UartBlock;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    fn deref(&amp;self) -&gt; &amp;UartBlock {</span></span>
<span class="line"><span>        unsafe { &amp;*(self.addr as *const UartBlock) }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl DerefMut for Regs {</span></span>
<span class="line"><span>    fn deref_mut(&amp;mut self) -&gt; &amp;mut UartBlock {</span></span>
<span class="line"><span>        unsafe { &amp;mut *(self.addr as *mut UartBlock) }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>一旦到位，使用這些寄存器就像 <code>read()</code> 和 <code>modify()</code> 一樣簡單：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // A pretend register block.</span></span>
<span class="line"><span>    let mut x = [0_u32; 33];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mut regs = Regs {</span></span>
<span class="line"><span>        // Some shenanigans to get at \`x\` as though it were a</span></span>
<span class="line"><span>        // pointer. Normally you&#39;d be given some address like</span></span>
<span class="line"><span>        // \`0xDEADBEEF\` over which you&#39;d instantiate a \`Regs\`.</span></span>
<span class="line"><span>        addr: &amp;mut x as *mut [u32; 33] as usize,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    assert_eq!(regs.rx.read(), 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    regs.control1</span></span>
<span class="line"><span>        .modify(UartControl1::Enable::Set + UartControl1::RecvReadyInterrupt::Set);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The first bit and the 10th bit should be set.</span></span>
<span class="line"><span>    assert_eq!(regs.control1.read(), 0b_10_0000_0001);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)),a("p",null,[s[40]||(s[40]=n("當我們使用運行時值時，我們使用如前所述的",-1)),s[41]||(s[41]=a("strong",null,"選項",-1)),s[42]||(s[42]=n("。這裏我使用的是 ",-1)),s[43]||(s[43]=a("code",null,"unwrap",-1)),s[44]||(s[44]=n("，但是在一個輸入未知的真實程序中，你可能想檢查一下從新調用中返回的",-1)),s[45]||(s[45]=a("strong",null,"某些東西",-1)),s[46]||(s[46]=n("： ",-1)),e(p,{href:"%E5%BE%9E%E6%8A%80%E8%A1%93%E4%B8%8A%E8%AC%9B%EF%BC%8C%E5%BE%9E%E5%AE%9A%E7%BE%A9%E4%B8%8A%E7%9C%8B%EF%BC%8C%E5%BE%9E%E5%AF%84%E5%AD%98%E5%99%A8%E5%AD%97%E6%AE%B5%E8%AE%80%E5%8F%96%E7%9A%84%E5%80%BC%E5%8F%AA%E8%83%BD%E5%9C%A8%E8%A6%8F%E5%AE%9A%E7%9A%84%E7%AF%84%E5%9C%8D%E5%85%A7%EF%BC%8C%E4%BD%86%E6%98%AF%E6%88%91%E5%80%91%E7%95%B6%E4%B8%AD%E6%B2%92%E6%9C%89%E4%B8%80%E5%80%8B%E4%BA%BA%E7%94%9F%E6%B4%BB%E5%9C%A8%E4%B8%80%E5%80%8B%E7%B4%94%E6%B7%A8%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%AD%EF%BC%8C%E8%80%8C%E4%B8%94%E4%BD%A0%E6%B0%B8%E9%81%A0%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E5%A4%96%E9%83%A8%E7%B3%BB%E7%B5%B1%E7%99%BC%E6%8F%AE%E4%BD%9C%E7%94%A8%E6%99%82%E6%9C%83%E7%99%BC%E7%94%9F%E4%BB%80%E9%BA%BC%E3%80%82%E4%BD%A0%E6%98%AF%E5%9C%A8%E9%80%99%E8%A3%8F%E6%8E%A5%E5%8F%97%E7%A1%AC%E4%BB%B6%E4%B9%8B%E7%A5%9E%E7%9A%84%E5%91%BD%E4%BB%A4%EF%BC%8C%E5%9B%A0%E6%AD%A4%E8%88%87%E5%85%B6%E5%BC%B7%E8%BF%AB%E4%BD%A0%E9%80%B2%E5%85%A5%E2%80%9C%E5%8F%AF%E8%83%BD%E7%9A%84%E6%81%90%E6%85%8C%E2%80%9D%E7%8B%80%E6%85%8B%EF%BC%8C%E9%82%84%E4%B8%8D%E5%A6%82%E7%B5%A6%E4%BD%A0%E6%8F%90%E4%BE%9B%E8%99%95%E7%90%86%E2%80%9C%E9%80%99%E5%B0%87%E6%B0%B8%E9%81%A0%E4%B8%8D%E6%9C%83%E7%99%BC%E7%94%9F%E2%80%9D%E7%9A%84%E6%A9%9F%E6%9C%83%E3%80%82"},{default:l(()=>[...s[39]||(s[39]=[n("^1",-1)])]),_:1}),s[47]||(s[47]=n(" [^2]",-1))]),s[97]||(s[97]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    // A pretend register block.</span></span>
<span class="line"><span>    let mut x = [0_u32; 33];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let mut regs = Regs {</span></span>
<span class="line"><span>        // Some shenanigans to get at \`x\` as though it were a</span></span>
<span class="line"><span>        // pointer. Normally you&#39;d be given some address like</span></span>
<span class="line"><span>        // \`0xDEADBEEF\` over which you&#39;d instantiate a \`Regs\`.</span></span>
<span class="line"><span>        addr: &amp;amp;mut x as *mut [u32; 33] as usize,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let input = regs.rx.get_field(UartRX::Data::Field::Read).unwrap();</span></span>
<span class="line"><span>    regs.tx.modify(UartTX::Data::Field::new(input).unwrap());</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="解碼失敗條件" tabindex="-1">解碼失敗條件 <a class="header-anchor" href="#解碼失敗條件" aria-label="Permalink to “解碼失敗條件”">​</a></h3><p>根據你的個人痛苦忍耐程度，你可能已經注意到這些錯誤幾乎是無法理解的。看一下我所説的不那麼微妙的提醒：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>error[E0271]: type mismatch resolving \`&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UTerm, typenum::B1&gt;, typenum::B0&gt;, typenum::B1&gt;, typenum::B0&gt;, typenum::B0&gt; as typenum::IsLessOrEqual&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UTerm, typenum::B1&gt;, typenum::B0&gt;, typenum::B1&gt;, typenum::B0&gt;&gt;&gt;::Output == typenum::B1\`</span></span>
<span class="line"><span>  --&gt; src/main.rs:12:5</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>12 |     less_than_ten::&lt;U20&gt;();</span></span>
<span class="line"><span>   |     ^^^^^^^^^^^^^^^^^^^^ expected struct \`typenum::B0\`, found struct \`typenum::B1\`</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   = note: expected type \`typenum::B0\`</span></span>
<span class="line"><span>       found type \`typenum::B1\`</span></span></code></pre></div>`,4)),a("p",null,[s[49]||(s[49]=a("code",null,"expected struct typenum::B0, found struct typenum::B1",-1)),s[50]||(s[50]=n(" 部分是有意義的，但是 ",-1)),s[51]||(s[51]=a("code",null," typenum::UInt<typenum::UInt, typenum::UInt...",-1)),s[52]||(s[52]=n(" 到底是什麼呢？好吧，",-1)),s[53]||(s[53]=a("code",null,"typenum",-1)),s[54]||(s[54]=n(" 將數字表示為二進制 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Cons"},{default:l(()=>[...s[48]||(s[48]=[n("cons",-1)])]),_:1}),s[55]||(s[55]=n(" 單元！像這樣的錯誤使操作變得很困難，尤其是當你將多個這些類型級別的數字限制在狹窄的範圍內時，你很難知道它在説哪個數字。當然，除非你一眼就能將巴洛克式二進制表示形式轉換為十進制表示形式。",-1))]),a("p",null,[s[57]||(s[57]=n("在第 U100 次試圖從這個混亂中破譯出某些含義之後，我們的一個隊友簡直《",-1)),s[58]||(s[58]=a("ruby",null,[n("瘋了，地獄了，不要再忍受了"),a("rt",null,"Mad As Hell And Wasn't Going To Take It Anymore")],-1)),s[59]||(s[59]=n("》，並做了一個小工具 ",-1)),s[60]||(s[60]=a("code",null,"tnfilt",-1)),s[61]||(s[61]=n("，從這種命名空間的二進制 cons 單元的痛苦中解脱出來。",-1)),s[62]||(s[62]=a("code",null,"tnfilt",-1)),s[63]||(s[63]=n(" 將 cons 單元格式的表示法替換為可讓人看懂的十進制數字。我們認為其他人也會遇到類似的困難，所以我們分享了 ",-1)),e(p,{href:"https://github.com/auxoncorp/tnfilt"},{default:l(()=>[...s[56]||(s[56]=[n("tnfilt",-1)])]),_:1}),s[64]||(s[64]=n("。你可以像這樣使用它：",-1))]),s[98]||(s[98]=t('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build 2&gt;&amp;1 | tnfilt</span></span></code></pre></div><p>它將上面的輸出轉換為如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>error[E0271]: type mismatch resolving `&lt;U20 as typenum::IsLessOrEqual&lt;U10&gt;&gt;::Output == typenum::B1`</span></span></code></pre></div><p>現在<em>這</em>才有意義！</p><h3 id="結論" tabindex="-1">結論 <a class="header-anchor" href="#結論" aria-label="Permalink to “結論”">​</a></h3>',5)),a("p",null,[s[66]||(s[66]=n("當在軟件與硬件進行交互時，普遍使用內存映射寄存器，並且有無數種方法來描述這些交互，每種方法在易用性和安全性上都有不同的權衡。我們發現使用類型級編程來取得內存映射寄存器交互的編譯時檢查可以為我們提供製作更安全軟件的必要信息。該代碼可在 ",-1)),e(p,{href:"https://crates.io/crates/bounded-registers"},{default:l(()=>[...s[65]||(s[65]=[n("bounded-registers",-1)])]),_:1}),s[67]||(s[67]=n(" crate（Rust 包）中找到。",-1))]),s[99]||(s[99]=t("<p>我們的團隊從安全性較高的一面開始，然後嘗試找出如何將易用性滑塊移近易用端。從這些雄心壯志中，“邊界寄存器”就誕生了，我們在 Auxon 公司的冒險中遇到內存映射設備的任何時候都可以使用它。</p><hr><p>[^2]: <code>get_field</code> 看起來有點奇怪。我正在專門查看 <code>Field::Read</code> 部分。<code>Field</code> 是一種類型，你需要該類型的實例才能傳遞給 <code>get_field</code>。更乾淨的 API 可能類似於：<code>regs.rx.get_field::&lt;UartRx::Data::Field&gt;();</code> 但是請記住，<code>Field</code> 是一種具有固定的寬度、偏移量等索引的類型的同義詞。要像這樣對 <code>get_field</code> 進行參數化，你需要使用更高級的類型。</p><hr>",4)),a("p",null,[s[69]||(s[69]=n("此內容最初發布在 ",-1)),e(p,{href:"https://blog.auxon.io/2019/10/25/type-level-registers/"},{default:l(()=>[...s[68]||(s[68]=[n("Auxon Engineering Blog",-1)])]),_:1}),s[70]||(s[70]=n("上，並經許可進行編輯和重新發布。",-1))]),s[100]||(s[100]=a("hr",null,null,-1)),a("p",null,[s[72]||(s[72]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/c-vs-rust-abstractions"},{default:l(()=>[...s[71]||(s[71]=[n("https://opensource.com/article/20/1/c-vs-rust-abstractions",-1)])]),_:1})]),a("p",null,[s[77]||(s[77]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/dan-pittman"},{default:l(()=>[...s[73]||(s[73]=[n("Dan Pittman",-1)])]),_:1}),s[78]||(s[78]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[74]||(s[74]=[n("lujun9972",-1)])]),_:1}),s[79]||(s[79]=n(" 譯者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[75]||(s[75]=[n("wxy",-1)])]),_:1}),s[80]||(s[80]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[76]||(s[76]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[83]||(s[83]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[81]||(s[81]=[n("LCTT",-1)])]),_:1}),s[84]||(s[84]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[82]||(s[82]=[n("Linux中國",-1)])]),_:1}),s[85]||(s[85]=n(" 榮譽推出",-1))])])}const B=i(u,[["render",k]]);export{C as __pageData,B as default};
