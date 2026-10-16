import{_ as i,a0 as d,w as r,s as o,I as a,x as n,a1 as e,A as l,ao as t}from"./chunks/framework.ePQ6-oQR.js";import"./chunks/theme.D0YJYoYq.js";const B=JSON.parse('{"title":"C 还是 Rust：选择哪个用于硬件抽象编程 | LCTT x X-CMD","titleTemplate":false,"description":"C 还是 Rust：选择哪个用于硬件抽象编程 | LCTT (202001) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"C 还是 Rust：选择哪个用于硬件抽象编程 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"C 还是 Rust：选择哪个用于硬件抽象编程 | LCTT (202001) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202001/20200117 C vs. Rust- Which to choose for programming hardware abstractions","title":"C 还是 Rust：选择哪个用于硬件抽象编程","tag":"202001","desc":""},"relativePath":"202001/20200117 C vs. Rust- Which to choose for programming hardware abstractions.md","filePath":"[post].md"}'),u={name:"202001/20200117 C vs. Rust- Which to choose for programming hardware abstractions.md"},g={class:"table-wrap"};function k(h,s,c,f,m,b){const p=d("Link");return r(),o("div",null,[s[86]||(s[86]=a("h1",{id:"c-还是-rust-选择哪个用于硬件抽象编程",tabindex:"-1"},[n("C 还是 Rust：选择哪个用于硬件抽象编程 "),a("a",{class:"header-anchor",href:"#c-还是-rust-选择哪个用于硬件抽象编程","aria-label":"Permalink to “C 还是 Rust：选择哪个用于硬件抽象编程”"},"​")],-1)),s[87]||(s[87]=a("blockquote",null,[a("p",null,"在 Rust 中使用类型级编程可以使硬件抽象更加安全。")],-1)),s[88]||(s[88]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202001/28/123350k2w4mr3tp7crd4m2.jpg",alt:""})],-1)),s[89]||(s[89]=a("p",null,"Rust 是一种日益流行的编程语言，被视为硬件接口的最佳选择。通常会将其与 C 的抽象级别相比较。本文介绍了 Rust 如何通过多种方式处理按位运算，并提供了既安全又易于使用的解决方案。",-1)),a("div",g,[a("table",null,[s[16]||(s[16]=a("thead",null,[a("tr",null,[a("th",null,"语言"),a("th",null,"诞生于"),a("th",null,"官方描述"),a("th",null,"总览")])],-1)),a("tbody",null,[a("tr",null,[s[6]||(s[6]=a("td",null,"C",-1)),s[7]||(s[7]=a("td",null,"1972 年",-1)),a("td",null,[s[1]||(s[1]=n("C 是一种通用编程语言，具有表达式简约、现代的控制流和数据结构，以及丰富的运算符集等特点。（来源：[CS 基础知识] ",-1)),e(p,{href:"https://cs-fundamentals.com/c-programming/history-of-c-programming-language.php"},{default:l(()=>[...s[0]||(s[0]=[n("2",-1)])]),_:1}),s[2]||(s[2]=n("）",-1))]),a("td",null,[s[4]||(s[4]=n("C 是（一种）命令式语言，旨在以相对简单的方式进行编译，从而提供对内存的低级访问。（来源：[W3schools.in] ",-1)),e(p,{href:"https://www.w3schools.in/c-tutorial/history-of-c/"},{default:l(()=>[...s[3]||(s[3]=[n("3",-1)])]),_:1}),s[5]||(s[5]=n("）",-1))])]),a("tr",null,[s[14]||(s[14]=a("td",null,"Rust",-1)),s[15]||(s[15]=a("td",null,"2010 年",-1)),a("td",null,[s[9]||(s[9]=n("一种赋予所有人构建可靠、高效的软件的能力的语言（来源：[Rust 网站] ",-1)),e(p,{href:"https://www.rust-lang.org/"},{default:l(()=>[...s[8]||(s[8]=[n("4",-1)])]),_:1}),s[10]||(s[10]=n("）",-1))]),a("td",null,[s[12]||(s[12]=n("Rust 是一种专注于安全性（尤其是安全并发性）的多范式系统编程语言。（来源：[维基百科] ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Rust_(programming_language)"},{default:l(()=>[...s[11]||(s[11]=[n("5",-1)])]),_:1}),s[13]||(s[13]=n("）",-1))])])])])]),s[90]||(s[90]=t(`<h3 id="在-c-语言中对寄存器值进行按位运算" tabindex="-1">在 C 语言中对寄存器值进行按位运算 <a class="header-anchor" href="#在-c-语言中对寄存器值进行按位运算" aria-label="Permalink to “在 C 语言中对寄存器值进行按位运算”">​</a></h3><p>在系统编程领域，你可能经常需要编写硬件驱动程序或直接与内存映射设备进行交互，而这些交互几乎总是通过硬件提供的内存映射寄存器来完成的。通常，你通过对某些固定宽度的数字类型进行按位运算来与这些寄存器进行交互。</p><p>例如，假设一个 8 位寄存器具有三个字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>| (unused) | Kind | Interrupt | Enabled |</span></span>
<span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>   5-7       2-4        1          0</span></span></code></pre></div><p>字段名称下方的数字规定了该字段在寄存器中使用的位。要启用该寄存器，你将写入值 <code>1</code>（以二进制表示为 <code>0000_0001</code>）来设置 <code>Enabled</code> 字段的位。但是，通常情况下，你也不想干扰寄存器中的现有配置。假设你要在设备上启用中断功能，但也要确保设备保持启用状态。为此，必须将 <code>Interrupt</code> 字段的值与 <code>Enabled</code> 字段的值结合起来。你可以通过按位操作来做到这一点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1 | (1 &lt;&lt; 1)</span></span></code></pre></div><p>通过将 1 和 2（<code>1</code> 左移一位得到）进行“或”（<code>|</code>）运算得到二进制值 <code>0000_0011</code> 。你可以将其写入寄存器，使其保持启用状态，但也启用中断功能。</p><p>你的头脑中要记住很多事情，特别是当你要在一个完整的系统上和可能有数百个之多的寄存器打交道时。在实践上，你可以使用助记符来执行此操作，助记符可跟踪字段在寄存器中的位置以及字段的宽度（即它的上边界是什么）</p><p>下面是这些助记符之一的示例。它们是 C 语言的宏，用右侧的代码替换它们的出现的地方。这是上面列出的寄存器的简写。<code>＆</code> 的左侧是该字段的起始位置，而右侧则限制该字段所占的位：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#define REG_ENABLED_FIELD(x) (x &lt;&lt; 0) &amp; 1</span></span>
<span class="line"><span>#define REG_INTERRUPT_FIELD(x) (x &lt;&lt; 1) &amp; 2</span></span>
<span class="line"><span>#define REG_KIND_FIELD(x) (x &lt;&lt; 2) &amp; (7 &lt;&lt; 2)</span></span></code></pre></div><p>然后，你可以使用这些来抽象化寄存器值的操作，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>void set_reg_val(reg* u8, val u8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn enable_reg_with_interrupt(reg* u8) {</span></span>
<span class="line"><span>    set_reg_val(reg, REG_ENABLED_FIELD(1) | REG_INTERRUPT_FIELD(1));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这就是现在的做法。实际上，这就是大多数驱动程序在 Linux 内核中的使用方式。</p><p>有没有更好的办法？如果能够基于对现代编程语言研究得出新的类型系统，就可能能够获得安全性和可表达性的好处。也就是说，如何使用更丰富、更具表现力的类型系统来使此过程更安全、更持久？</p><h3 id="在-rust-语言中对寄存器值进行按位运算" tabindex="-1">在 Rust 语言中对寄存器值进行按位运算 <a class="header-anchor" href="#在-rust-语言中对寄存器值进行按位运算" aria-label="Permalink to “在 Rust 语言中对寄存器值进行按位运算”">​</a></h3><p>继续用上面的寄存器作为例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>| (unused) | Kind | Interrupt | Enabled |</span></span>
<span class="line"><span>+----------+------+-----------+---------+</span></span>
<span class="line"><span>   5-7       2-4        1          0</span></span></code></pre></div><p>你想如何用 Rust 类型来表示它呢？</p><p>你将以类似的方式开始，为每个字段的<em>偏移</em>定义常量（即，距最低有效位有多远）及其掩码。<em>掩码</em>是一个值，其二进制表示形式可用于更新或读取寄存器内部的字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const ENABLED_MASK: u8 = 1;</span></span>
<span class="line"><span>const ENABLED_OFFSET: u8 = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const INTERRUPT_MASK: u8 = 2;</span></span>
<span class="line"><span>const INTERRUPT_OFFSET: u8 = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const KIND_MASK: u8 = 7 &lt;&lt; 2;</span></span>
<span class="line"><span>const KIND_OFFSET: u8 = 2;</span></span></code></pre></div><p>接下来，你将声明一个 <code>Field</code> 类型并进行操作，将给定值转换为与其位置相关的值，以供在寄存器内使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Field {</span></span>
<span class="line"><span>    value: u8,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Field {</span></span>
<span class="line"><span>    fn new(mask: u8, offset: u8, val: u8) -&gt; Self {</span></span>
<span class="line"><span>        Field {</span></span>
<span class="line"><span>            value: (val &lt;&lt; offset) &amp; mask,</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>最后，你将使用一个 <code>Register</code> 类型，该类型会封装一个与你的寄存器宽度匹配的数字类型。 <code>Register</code> 具有 <code>update</code> 函数，可使用给定字段来更新寄存器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Register(u8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>impl Register {</span></span>
<span class="line"><span>    fn update(&amp;mut self, val: Field) {</span></span>
<span class="line"><span>        self.0 = self.0 | field.value;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(Field::new(ENABLED_MASK, ENABLED_OFFSET, 1));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用 Rust，你可以使用数据结构来表示字段，将它们与特定的寄存器联系起来，并在与硬件交互时提供简洁明了的工效。这个例子使用了 Rust 提供的最基本的功能。无论如何，添加的结构都会减轻上述 C 示例中的某些晦涩的地方。现在，字段是个带有名字的事物，而不是从模糊的按位运算符派生而来的数字，并且寄存器是具有状态的类型 —— 这在硬件上多了一层抽象。</p><h3 id="一个易用的-rust-实现" tabindex="-1">一个易用的 Rust 实现 <a class="header-anchor" href="#一个易用的-rust-实现" aria-label="Permalink to “一个易用的 Rust 实现”">​</a></h3><p>用 Rust 重写的第一个版本很好，但是并不理想。你必须记住要带上掩码和偏移量，并且要手工进行临时计算，这容易出错。人类不擅长精确且重复的任务 —— 我们往往会感到疲劳或失去专注力，这会导致错误。一次一个寄存器地手动记录掩码和偏移量几乎可以肯定会以糟糕的结局而告终。这是最好留给机器的任务。</p><p>其次，从结构上进行思考：如果有一种方法可以让字段的类型携带掩码和偏移信息呢？如果可以在编译时就发现硬件寄存器的访问和交互的实现代码中存在错误，而不是在运行时才发现，该怎么办？也许你可以依靠一种在编译时解决问题的常用策略，例如类型。</p>`,28)),a("p",null,[s[18]||(s[18]=n("你可以使用 ",-1)),e(p,{href:"https://docs.rs/crate/typenum"},{default:l(()=>[...s[17]||(s[17]=[n("typenum",-1)])]),_:1}),s[19]||(s[19]=n(" 来修改前面的示例，该库在类型级别提供数字和算术。在这里，你将使用掩码和偏移量对 ",-1)),s[20]||(s[20]=a("code",null,"Field",-1)),s[21]||(s[21]=n(" 类型进行参数化，使其可用于任何 ",-1)),s[22]||(s[22]=a("code",null,"Field",-1)),s[23]||(s[23]=n(" 实例，而无需将其包括在调用处：",-1))]),s[91]||(s[91]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#[macro_use]</span></span>
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
<span class="line"><span>type RegKind = Field&lt;op!(U7 &lt;&lt; U2), U2&gt;;</span></span></code></pre></div><p>现在，当重新访问 <code>Field</code> 的构造函数时，你可以忽略掩码和偏移量参数，因为类型中包含该信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>impl&lt;Mask: Unsigned, Offset: Unsigned&gt; Field&lt;Mask, Offset&gt; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>看起来不错，但是……如果你在给定的值是否<em>适合</em>该字段方面犯了错误，会发生什么？考虑一个简单的输入错误，你在其中放置了 <code>10</code> 而不是 <code>1</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(RegEnabled::new(10));</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的代码中，预期结果是什么？好吧，代码会将启用位设置为 0，因为 <code>10＆1 = 0</code>。那真不幸；最好在尝试写入之前知道你要写入字段的值是否适合该字段。事实上，我认为截掉错误字段值的高位是一种 1<em>未定义的行为</em>（哈）。</p><h3 id="出于安全考虑使用-rust" tabindex="-1">出于安全考虑使用 Rust <a class="header-anchor" href="#出于安全考虑使用-rust" aria-label="Permalink to “出于安全考虑使用 Rust”">​</a></h3><p>如何以一般方式检查字段的值是否适合其规定的位置？需要更多类型级别的数字！</p><p>你可以在 <code>Field</code> 中添加 <code>Width</code> 参数，并使用它来验证给定的值是否适合该字段：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Field&lt;Width: Unsigned, Mask: Unsigned, Offset: Unsigned&gt; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>现在，只有给定值适合时，你才能构造一个 <code>Field</code> ！否则，你将得到 <code>None</code> 信号，该信号指示发生了错误，而不是截掉该值的高位并静默写入意外的值。</p><p>但是请注意，这将在运行时环境中引发错误。但是，我们事先知道我们想写入的值，还记得吗？鉴于此，我们可以教编译器完全拒绝具有无效字段值的程序 —— 我们不必等到运行它！</p><p>这次，你将向 <code>new</code> 的新实现 <code>new_checked</code> 中添加一个特征绑定（<code>where</code> 子句），该函数要求输入值小于或等于给定字段用 <code>Width</code> 所能容纳的最大可能值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Field&lt;Width: Unsigned, Mask: Unsigned, Offset: Unsigned&gt; {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>只有拥有此属性的数字才实现此特征，因此，如果使用不适合的数字，它将无法编译。让我们看一看！</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn enable_register(&amp;mut reg) {</span></span>
<span class="line"><span>    reg.update(RegEnabled::new_checked::&lt;U10&gt;());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>12 |     reg.update(RegEnabled::new_checked::&lt;U10&gt;());</span></span>
<span class="line"><span>   |                           ^^^^^^^^^^^^^^^^ expected struct \`typenum::B0\`, found struct \`typenum::B1\`</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   = note: expected type \`typenum::B0\`</span></span>
<span class="line"><span>           found type \`typenum::B1\`</span></span></code></pre></div><p><code>new_checked</code> 将无法生成一个程序，因为该字段的值有错误的高位。你的输入错误不会在运行时环境中才爆炸，因为你永远无法获得一个可以运行的工件。</p><p>就使内存映射的硬件进行交互的安全性而言，你已经接近 Rust 的极致。但是，你在 C 的第一个示例中所写的内容比最终得到的一锅粥的类型参数更简洁。当你谈论潜在可能有数百甚至数千个寄存器时，这样做是否容易处理？</p><h3 id="让-rust-恰到好处-既安全又方便使用" tabindex="-1">让 Rust 恰到好处：既安全又方便使用 <a class="header-anchor" href="#让-rust-恰到好处-既安全又方便使用" aria-label="Permalink to “让 Rust 恰到好处：既安全又方便使用”">​</a></h3><p>早些时候，我认为手工计算掩码有问题，但我又做了同样有问题的事情 —— 尽管是在类型级别。虽然使用这种方法很不错，但要达到编写任何代码的地步，则需要大量样板和手动转录（我在这里谈论的是类型的同义词）。</p>`,20)),a("p",null,[s[26]||(s[26]=n("我们的团队想要像 ",-1)),e(p,{href:"https://docs.rs/tock-registers/0.3.0/tock_registers/"},{default:l(()=>[...s[24]||(s[24]=[n("TockOS mmio 寄存器",-1)])]),_:1}),s[27]||(s[27]=n("之类的东西，而以最少的手动转录生成类型安全的实现。我们得出的结果是一个宏，该宏生成必要的样板以获得类似 Tock 的 API 以及基于类型的边界检查。要使用它，请写下一些有关寄存器的信息，其字段、宽度和偏移量以及可选的",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Enumerated_type"},{default:l(()=>[...s[25]||(s[25]=[n("枚举",-1)])]),_:1}),s[28]||(s[28]=n("类的值（你应该为字段可能具有的值赋予“含义”）：",-1))]),s[92]||(s[92]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>register! {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>由此，你可以生成寄存器和字段类型，如上例所示，其中索引：<code>Width</code>、<code>Mask</code> 和 <code>Offset</code> 是从一个字段定义的 <code>WIDTH</code> 和 <code>OFFSET</code> 部分的输入值派生的。另外，请注意，所有这些数字都是 “类型数字”；它们将直接进入你的 <code>Field</code> 定义！</p><p>生成的代码通过为寄存器及字段指定名称来为寄存器及其相关字段提供名称空间。这很绕口，看起来是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>mod Status {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,4)),a("p",null,[s[30]||(s[30]=n("生成的 API 包含名义上期望的读取和写入的原语，以获取原始寄存器的值，但它也有办法获取单个字段的值、执行集合操作以及确定是否设置了任何（或全部）位集合的方法。你可以阅读",-1)),e(p,{href:"https://github.com/auxoncorp/bounded-registers#the-register-api"},{default:l(()=>[...s[29]||(s[29]=[n("完整生成的 API",-1)])]),_:1}),s[31]||(s[31]=n("上的文档。",-1))]),s[93]||(s[93]=a("h3",{id:"粗略检查",tabindex:"-1"},[n("粗略检查 "),a("a",{class:"header-anchor",href:"#粗略检查","aria-label":"Permalink to “粗略检查”"},"​")],-1)),s[94]||(s[94]=a("p",null,"将这些定义用于实际设备会是什么样？代码中是否会充斥着类型参数，从而掩盖了视图中的实际逻辑？",-1)),s[95]||(s[95]=a("p",null,"不会！通过使用类型同义词和类型推断，你实际上根本不必考虑程序的类型层面部分。你可以直接与硬件交互，并自动获得与边界相关的保证。",-1)),a("p",null,[s[33]||(s[33]=n("这是一个 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter"},{default:l(()=>[...s[32]||(s[32]=[n("UART",-1)])]),_:1}),s[34]||(s[34]=n(" 寄存器块的示例。我会跳过寄存器本身的声明，因为包括在这里就太多了。而是从寄存器“块”开始，然后帮助编译器知道如何从指向该块开头的指针中查找寄存器。我们通过实现 ",-1)),s[35]||(s[35]=a("code",null,"Deref",-1)),s[36]||(s[36]=n(" 和 ",-1)),s[37]||(s[37]=a("code",null,"DerefMut",-1)),s[38]||(s[38]=n(" 来做到这一点：",-1))]),s[96]||(s[96]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#[repr(C)]</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>一旦到位，使用这些寄存器就像 <code>read()</code> 和 <code>modify()</code> 一样简单：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div>`,3)),a("p",null,[s[40]||(s[40]=n("当我们使用运行时值时，我们使用如前所述的",-1)),s[41]||(s[41]=a("strong",null,"选项",-1)),s[42]||(s[42]=n("。这里我使用的是 ",-1)),s[43]||(s[43]=a("code",null,"unwrap",-1)),s[44]||(s[44]=n("，但是在一个输入未知的真实程序中，你可能想检查一下从新调用中返回的",-1)),s[45]||(s[45]=a("strong",null,"某些东西",-1)),s[46]||(s[46]=n("： ",-1)),e(p,{href:"%E4%BB%8E%E6%8A%80%E6%9C%AF%E4%B8%8A%E8%AE%B2%EF%BC%8C%E4%BB%8E%E5%AE%9A%E4%B9%89%E4%B8%8A%E7%9C%8B%EF%BC%8C%E4%BB%8E%E5%AF%84%E5%AD%98%E5%99%A8%E5%AD%97%E6%AE%B5%E8%AF%BB%E5%8F%96%E7%9A%84%E5%80%BC%E5%8F%AA%E8%83%BD%E5%9C%A8%E8%A7%84%E5%AE%9A%E7%9A%84%E8%8C%83%E5%9B%B4%E5%86%85%EF%BC%8C%E4%BD%86%E6%98%AF%E6%88%91%E4%BB%AC%E5%BD%93%E4%B8%AD%E6%B2%A1%E6%9C%89%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%94%9F%E6%B4%BB%E5%9C%A8%E4%B8%80%E4%B8%AA%E7%BA%AF%E5%87%80%E7%9A%84%E4%B8%96%E7%95%8C%E4%B8%AD%EF%BC%8C%E8%80%8C%E4%B8%94%E4%BD%A0%E6%B0%B8%E8%BF%9C%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E5%A4%96%E9%83%A8%E7%B3%BB%E7%BB%9F%E5%8F%91%E6%8C%A5%E4%BD%9C%E7%94%A8%E6%97%B6%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%E3%80%82%E4%BD%A0%E6%98%AF%E5%9C%A8%E8%BF%99%E9%87%8C%E6%8E%A5%E5%8F%97%E7%A1%AC%E4%BB%B6%E4%B9%8B%E7%A5%9E%E7%9A%84%E5%91%BD%E4%BB%A4%EF%BC%8C%E5%9B%A0%E6%AD%A4%E4%B8%8E%E5%85%B6%E5%BC%BA%E8%BF%AB%E4%BD%A0%E8%BF%9B%E5%85%A5%E2%80%9C%E5%8F%AF%E8%83%BD%E7%9A%84%E6%81%90%E6%85%8C%E2%80%9D%E7%8A%B6%E6%80%81%EF%BC%8C%E8%BF%98%E4%B8%8D%E5%A6%82%E7%BB%99%E4%BD%A0%E6%8F%90%E4%BE%9B%E5%A4%84%E7%90%86%E2%80%9C%E8%BF%99%E5%B0%86%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E5%8F%91%E7%94%9F%E2%80%9D%E7%9A%84%E6%9C%BA%E4%BC%9A%E3%80%82"},{default:l(()=>[...s[39]||(s[39]=[n("^1",-1)])]),_:1}),s[47]||(s[47]=n(" [^2]",-1))]),s[97]||(s[97]=t(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="解码失败条件" tabindex="-1">解码失败条件 <a class="header-anchor" href="#解码失败条件" aria-label="Permalink to “解码失败条件”">​</a></h3><p>根据你的个人痛苦忍耐程度，你可能已经注意到这些错误几乎是无法理解的。看一下我所说的不那么微妙的提醒：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>error[E0271]: type mismatch resolving \`&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UTerm, typenum::B1&gt;, typenum::B0&gt;, typenum::B1&gt;, typenum::B0&gt;, typenum::B0&gt; as typenum::IsLessOrEqual&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UInt&lt;typenum::UTerm, typenum::B1&gt;, typenum::B0&gt;, typenum::B1&gt;, typenum::B0&gt;&gt;&gt;::Output == typenum::B1\`</span></span>
<span class="line"><span>  --&gt; src/main.rs:12:5</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>12 |     less_than_ten::&lt;U20&gt;();</span></span>
<span class="line"><span>   |     ^^^^^^^^^^^^^^^^^^^^ expected struct \`typenum::B0\`, found struct \`typenum::B1\`</span></span>
<span class="line"><span>   |</span></span>
<span class="line"><span>   = note: expected type \`typenum::B0\`</span></span>
<span class="line"><span>       found type \`typenum::B1\`</span></span></code></pre></div>`,4)),a("p",null,[s[49]||(s[49]=a("code",null,"expected struct typenum::B0, found struct typenum::B1",-1)),s[50]||(s[50]=n(" 部分是有意义的，但是 ",-1)),s[51]||(s[51]=a("code",null," typenum::UInt<typenum::UInt, typenum::UInt...",-1)),s[52]||(s[52]=n(" 到底是什么呢？好吧，",-1)),s[53]||(s[53]=a("code",null,"typenum",-1)),s[54]||(s[54]=n(" 将数字表示为二进制 ",-1)),e(p,{href:"https://en.wikipedia.org/wiki/Cons"},{default:l(()=>[...s[48]||(s[48]=[n("cons",-1)])]),_:1}),s[55]||(s[55]=n(" 单元！像这样的错误使操作变得很困难，尤其是当你将多个这些类型级别的数字限制在狭窄的范围内时，你很难知道它在说哪个数字。当然，除非你一眼就能将巴洛克式二进制表示形式转换为十进制表示形式。",-1))]),a("p",null,[s[57]||(s[57]=n("在第 U100 次试图从这个混乱中破译出某些含义之后，我们的一个队友简直《",-1)),s[58]||(s[58]=a("ruby",null,[n("疯了，地狱了，不要再忍受了"),a("rt",null,"Mad As Hell And Wasn't Going To Take It Anymore")],-1)),s[59]||(s[59]=n("》，并做了一个小工具 ",-1)),s[60]||(s[60]=a("code",null,"tnfilt",-1)),s[61]||(s[61]=n("，从这种命名空间的二进制 cons 单元的痛苦中解脱出来。",-1)),s[62]||(s[62]=a("code",null,"tnfilt",-1)),s[63]||(s[63]=n(" 将 cons 单元格式的表示法替换为可让人看懂的十进制数字。我们认为其他人也会遇到类似的困难，所以我们分享了 ",-1)),e(p,{href:"https://github.com/auxoncorp/tnfilt"},{default:l(()=>[...s[56]||(s[56]=[n("tnfilt",-1)])]),_:1}),s[64]||(s[64]=n("。你可以像这样使用它：",-1))]),s[98]||(s[98]=t('<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build 2&gt;&amp;1 | tnfilt</span></span></code></pre></div><p>它将上面的输出转换为如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>error[E0271]: type mismatch resolving `&lt;U20 as typenum::IsLessOrEqual&lt;U10&gt;&gt;::Output == typenum::B1`</span></span></code></pre></div><p>现在<em>这</em>才有意义！</p><h3 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to “结论”">​</a></h3>',5)),a("p",null,[s[66]||(s[66]=n("当在软件与硬件进行交互时，普遍使用内存映射寄存器，并且有无数种方法来描述这些交互，每种方法在易用性和安全性上都有不同的权衡。我们发现使用类型级编程来取得内存映射寄存器交互的编译时检查可以为我们提供制作更安全软件的必要信息。该代码可在 ",-1)),e(p,{href:"https://crates.io/crates/bounded-registers"},{default:l(()=>[...s[65]||(s[65]=[n("bounded-registers",-1)])]),_:1}),s[67]||(s[67]=n(" crate（Rust 包）中找到。",-1))]),s[99]||(s[99]=t("<p>我们的团队从安全性较高的一面开始，然后尝试找出如何将易用性滑块移近易用端。从这些雄心壮志中，“边界寄存器”就诞生了，我们在 Auxon 公司的冒险中遇到内存映射设备的任何时候都可以使用它。</p><hr><p>[^2]: <code>get_field</code> 看起来有点奇怪。我正在专门查看 <code>Field::Read</code> 部分。<code>Field</code> 是一种类型，你需要该类型的实例才能传递给 <code>get_field</code>。更干净的 API 可能类似于：<code>regs.rx.get_field::&lt;UartRx::Data::Field&gt;();</code> 但是请记住，<code>Field</code> 是一种具有固定的宽度、偏移量等索引的类型的同义词。要像这样对 <code>get_field</code> 进行参数化，你需要使用更高级的类型。</p><hr>",4)),a("p",null,[s[69]||(s[69]=n("此内容最初发布在 ",-1)),e(p,{href:"https://blog.auxon.io/2019/10/25/type-level-registers/"},{default:l(()=>[...s[68]||(s[68]=[n("Auxon Engineering 博客",-1)])]),_:1}),s[70]||(s[70]=n("上，并经许可进行编辑和重新发布。",-1))]),s[100]||(s[100]=a("hr",null,null,-1)),a("p",null,[s[72]||(s[72]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/20/1/c-vs-rust-abstractions"},{default:l(()=>[...s[71]||(s[71]=[n("https://opensource.com/article/20/1/c-vs-rust-abstractions",-1)])]),_:1})]),a("p",null,[s[77]||(s[77]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/dan-pittman"},{default:l(()=>[...s[73]||(s[73]=[n("Dan Pittman",-1)])]),_:1}),s[78]||(s[78]=n(" 选题：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:l(()=>[...s[74]||(s[74]=[n("lujun9972",-1)])]),_:1}),s[79]||(s[79]=n(" 译者：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[75]||(s[75]=[n("wxy",-1)])]),_:1}),s[80]||(s[80]=n(" 校对：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...s[76]||(s[76]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[83]||(s[83]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[81]||(s[81]=[n("LCTT",-1)])]),_:1}),s[84]||(s[84]=n(" 原创编译，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...s[82]||(s[82]=[n("Linux中国",-1)])]),_:1}),s[85]||(s[85]=n(" 荣誉推出",-1))])])}const C=i(u,[["render",k]]);export{B as __pageData,C as default};
