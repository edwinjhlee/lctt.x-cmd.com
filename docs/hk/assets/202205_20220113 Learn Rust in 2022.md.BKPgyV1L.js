import{_ as t,a0 as o,w as r,s as u,I as a,x as n,a1 as e,A as i,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"2022 Rust 入門指南 | LCTT x X-CMD","titleTemplate":false,"description":"2022 Rust 入門指南 | LCTT (202205) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"2022 Rust 入門指南 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"2022 Rust 入門指南 | LCTT (202205) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202205/20220113 Learn Rust in 2022","title":"2022 Rust 入門指南","tag":"202205","desc":""},"relativePath":"202205/20220113 Learn Rust in 2022.md","filePath":"[post].md"}'),d={name:"202205/20220113 Learn Rust in 2022.md"};function c(g,s,h,k,b,f){const p=o("Link");return r(),u("div",null,[s[31]||(s[31]=a("h1",{id:"_2022-rust-入門指南",tabindex:"-1"},[n("2022 Rust 入門指南 "),a("a",{class:"header-anchor",href:"#_2022-rust-入門指南","aria-label":"Permalink to “2022 Rust 入門指南”"},"​")],-1)),s[32]||(s[32]=a("blockquote",null,[a("p",null,"如果你打算在今年探索 Rust，請下載我們的免費 Rust 速查表，以供快速參考基礎知識。")],-1)),s[33]||(s[33]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202205/08/161625lvo8v82ell9l3xmm.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("Rust 是一門相對較新的編程語言，受到各個企業的 ",-1)),e(p,{href:"https://opensource.com/article/20/5/rust-java"},{default:i(()=>[...s[0]||(s[0]=[n("程序員的歡迎",-1)])]),_:1}),s[2]||(s[2]=n("。儘管如此，它仍是一門建立在之前所有事物之上的語言。畢竟，Rust 不是一天做出來的，所以即便 Rust 中的一些概念看起來與你從 Python、Java、C++ 等編程語言學到的東西大不相同，但它們都是基於同一個基礎，那就是你一直與之交互（無論你是否知道）的 CPU 和 NUMA（",-1)),s[3]||(s[3]=a("ruby",null,[n("非統一內存訪問"),a("rt",null,"Non Uniform Memory Access")],-1)),s[4]||(s[4]=n("）架構，因此 Rust 中的一些新功能讓人感覺有些熟悉。",-1))]),s[34]||(s[34]=a("p",null,"現在，我的職業不是程序員。我沒耐心但我又有點兒強迫症。當我需要完成某件事時，如果一門語言不能幫助我相對較快地獲得想要的結果，那麼我很少會受到鼓舞而使用它。Rust 試圖平衡兩個矛盾：現代計算機對安全和結構化代碼的需求，和現代程序員對編碼工作事半功倍的渴望。",-1)),s[35]||(s[35]=a("h3",{id:"安裝-rust",tabindex:"-1"},[n("安裝 Rust "),a("a",{class:"header-anchor",href:"#安裝-rust","aria-label":"Permalink to “安裝 Rust”"},"​")],-1)),a("p",null,[e(p,{href:"http://rust-lang.org"},{default:i(()=>[...s[5]||(s[5]=[n("rust-lang.org",-1)])]),_:1}),s[6]||(s[6]=n(" 網站有豐富的的文檔指導如何安裝 Rust，但通常，它就像下載 ",-1)),s[7]||(s[7]=a("code",null,"sh.rustup.rs",-1)),s[8]||(s[8]=n(" 腳本並運行它一樣簡單。",-1))]),s[36]||(s[36]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ curl --proto &#39;=https&#39; --tlsv1.2 -sSf https://sh.rustup.rs</span></span>
<span class="line"><span>$ less sh.rustup.sh</span></span>
<span class="line"><span>$ sh ./sh.rustup.rs</span></span></code></pre></div><h3 id="沒有類" tabindex="-1">沒有類 <a class="header-anchor" href="#沒有類" aria-label="Permalink to “沒有類”">​</a></h3><p>Rust 沒有類，也不使用 <code>class</code> 關鍵字。Rust 確實有 <code>struct</code> 數據類型，但它的作用是充當數據集合的一種模板。因此，你可以使用<ruby>結構體<rt>struct</rt></ruby>，而不是創建一個類來表示虛擬對象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Penguin {</span></span>
<span class="line"><span>  genus: String,</span></span>
<span class="line"><span>  species: String,</span></span>
<span class="line"><span>  extinct: bool,</span></span>
<span class="line"><span>  classified: u64,</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以像使用類一樣使用它。例如，當定義完 <code>Penguin</code> 結構，你就可以創建它的實例，並與該實例進行交互：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Penguin {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>將 <code>impl</code> 數據類型與 <code>struct</code> 數據類型結合使用，你可以實現一個包含函數的結構體，並且可以添加繼承和其他與類相似的特性。</p><h3 id="函數" tabindex="-1">函數 <a class="header-anchor" href="#函數" aria-label="Permalink to “函數”">​</a></h3><p>Rust 中的函數很像其他語言中的函數。每個函數都代表一組嚴謹的任務，你可以在需要時調用它們。主函數名必須是 <code>main</code>。</p><p>用 <code>fn</code> 關鍵字聲明函數，後跟函數名稱和函數接受的所有參數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn foo() {</span></span>
<span class="line"><span>  let n = 8;</span></span>
<span class="line"><span>  println!(&quot;Eight is written as {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>通過參數，將信息從一個函數傳遞到另一個函數。例如，我已經創建了一個 <code>Penguin</code> 類（結構），並且我有一個 <code>Penguin</code> 的實例為 <code>p</code>，將目標函數的參數指定為 <code>Penguin</code> 類型，就可把 <code>p</code> 的屬性從一個函數傳遞到另一個函數。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="變量" tabindex="-1">變量 <a class="header-anchor" href="#變量" aria-label="Permalink to “變量”">​</a></h3><p>Rust 默認創建的為<ruby>不可變<rt>immutable</rt></ruby>變量。這意味着你創建的變量以後無法更改。這段代碼雖然看起來沒問題，但無法編譯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let n = 6;</span></span>
<span class="line"><span>  let n = 5;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>但你可以使用關鍵字 <code>mut</code> 聲明一個<ruby>可變<rt>mutable</rt></ruby>變量，因此下面這段代碼可以編譯成功：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>  let mut n = 6;</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>  n = 5;</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="編譯" tabindex="-1">編譯 <a class="header-anchor" href="#編譯" aria-label="Permalink to “編譯”">​</a></h3><p>Rust 編譯器，至少就其報錯信息而言，是可用的最好的編譯器之一。當你在 Rust 中出錯時，編譯器會真誠地告訴你做錯了什麼。實際上，僅通過從編譯器錯誤消息中學習，我就瞭解了 Rust 的許多細微差別（就我理解到的 Rust 的任何細微差別而言）。即便有時錯誤消息太過於模糊，而不知所以然，互聯網搜索幾乎總能得到解釋。</p><p>啓動 Rust 程序的最簡單方法是使用 <code>cargo</code>，它是 Rust 的包管理和構建系統。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ mkdir myproject</span></span>
<span class="line"><span>$ cd myproject</span></span>
<span class="line"><span>$ cargo init</span></span></code></pre></div><p>以上命令為項目創建了基本的基礎架構，最值得注意的是 <code>src</code> 子目錄中的 <code>main.rs</code> 文件。打開此文件，把我為本文生成的示例代碼粘貼進去：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>struct Penguin {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>使用 <code>cargo build</code> 命令進行編譯：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo build</span></span></code></pre></div><p>執行 <code>target</code> 子目錄下的二進制程序，或者直接運行 <code>cargo run</code> 命令來運行你的項目：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo run</span></span>
<span class="line"><span>Species: R adeliæ</span></span>
<span class="line"><span>Genus: Pygoscelis</span></span>
<span class="line"><span>Classified in 1841</span></span>
<span class="line"><span>Value is 6</span></span>
<span class="line"><span>Eight is written as 8</span></span></code></pre></div><h3 id="crates" tabindex="-1">Crates <a class="header-anchor" href="#crates" aria-label="Permalink to “Crates”">​</a></h3>`,29)),a("p",null,[s[10]||(s[10]=n("任何語言的大部分便利都來自於它的庫或模組。在 Rust 中，進行分發和跟蹤的庫稱為 “crate”（箱子）。",-1)),e(p,{href:"https://crates.io/"},{default:i(()=>[...s[9]||(s[9]=[n("crates.io",-1)])]),_:1}),s[11]||(s[11]=n(" 是一個很好的社區 crate 註冊網站。",-1))]),s[37]||(s[37]=l(`<p>把一個 crate 添加到你的 Rust 項目，首先要在 <code>Cargo.toml</code> 文件中添加這個 crate。例如，要安裝隨機數函數，我使用名為 <code>rand</code> 的 crate，使用 <code>*</code> 作為通配符，以確保在編譯時獲得最新版本：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>[package]</span></span>
<span class="line"><span>name = &quot;myproject&quot;</span></span>
<span class="line"><span>version = &quot;0.1.0&quot;</span></span>
<span class="line"><span>authors = [&quot;Seth &lt;seth@opensource.com&gt;&quot;]</span></span>
<span class="line"><span>edition = &quot;2022&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[dependencies]</span></span>
<span class="line"><span>rand = &quot;*&quot;</span></span></code></pre></div><p>在 Rust 代碼中使用它需要在最頂行使用 <code>use</code> 語句：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use rand::Rng;</span></span></code></pre></div><p>以下是一些創建隨機種子和隨機範圍的示例代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn foo() {</span></span>
<span class="line"><span>  let mut rng = rand::thread_rng();</span></span>
<span class="line"><span>  let mut n = rng.gen_range(1..99);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>  n = rng.gen_range(1..99);</span></span>
<span class="line"><span>  println!(&quot;Value is {}&quot;, n);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>你可以使用 <code>cargo run</code> 來運行它，它會檢測代碼是否被更改並觸發一個新的構建。構建過程中下載名為 <code>rand</code> 的 <code>crete</code> 和它依賴的所有 <code>crate</code>，編譯代碼，然後運行它：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cargo run</span></span>
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
<span class="line"><span>Value is 35</span></span></code></pre></div><h3 id="rust-速查表" tabindex="-1">Rust 速查表 <a class="header-anchor" href="#rust-速查表" aria-label="Permalink to “Rust 速查表”">​</a></h3><p>Rust 是一門令人非常愉快的語言。集成了在線註冊網站、有用的編譯器和幾乎直觀的語法，它給人的適當的現代感。</p>`,10)),a("p",null,[s[13]||(s[13]=n("但請不要誤會，Rust 仍是一門複雜的語言，它具有嚴格的數據類型、強作用域變量和許多內置方法。Rust 值得一看，如果你要探索它，那麼你應該下載我們的免費 ",-1)),e(p,{href:"https://opensource.com/downloads/rust-cheat-sheet"},{default:i(()=>[...s[12]||(s[12]=[n("Rust 速查表",-1)])]),_:1}),s[14]||(s[14]=n("，以便快速瞭解基礎知識。越早開始，就越早了解 Rust。當然，你應該經常練習以避免生疏。",-1))]),a("blockquote",null,[a("p",null,[a("strong",null,[e(p,{href:"https://opensource.com/downloads/rust-cheat-sheet"},{default:i(()=>[...s[15]||(s[15]=[n("Rust 速查表",-1)])]),_:1})])])]),s[38]||(s[38]=a("hr",null,null,-1)),a("p",null,[s[17]||(s[17]=n("via: ",-1)),e(p,{href:"https://opensource.com/article/22/1/rust-cheat-sheet"},{default:i(()=>[...s[16]||(s[16]=[n("https://opensource.com/article/22/1/rust-cheat-sheet",-1)])]),_:1})]),a("p",null,[s[22]||(s[22]=n("作者：",-1)),e(p,{href:"https://opensource.com/users/seth"},{default:i(()=>[...s[18]||(s[18]=[n("Seth Kenlon",-1)])]),_:1}),s[23]||(s[23]=n(" 選題：",-1)),e(p,{href:"https://github.com/lujun9972"},{default:i(()=>[...s[19]||(s[19]=[n("lujun9972",-1)])]),_:1}),s[24]||(s[24]=n(" 譯者：",-1)),e(p,{href:"https://github.com/hanszhao80"},{default:i(()=>[...s[20]||(s[20]=[n("hanszhao80",-1)])]),_:1}),s[25]||(s[25]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[21]||(s[21]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[28]||(s[28]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[26]||(s[26]=[n("LCTT",-1)])]),_:1}),s[29]||(s[29]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[27]||(s[27]=[n("Linux中國",-1)])]),_:1}),s[30]||(s[30]=n(" 榮譽推出",-1))])])}const q=t(d,[["render",c]]);export{C as __pageData,q as default};
