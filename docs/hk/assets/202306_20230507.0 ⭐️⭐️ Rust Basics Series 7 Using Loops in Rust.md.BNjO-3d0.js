import{_ as l,a0 as t,w as o,s as c,I as a,x as n,a1 as e,A as i,ao as d}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const C=JSON.parse('{"title":"Rust 基礎系列 #7: 在 Rust 中使用循環 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基礎系列 #7: 在 Rust 中使用循環 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基礎系列 #7: 在 Rust 中使用循環 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基礎系列 #7: 在 Rust 中使用循環 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230507.0 ⭐️⭐️ Rust Basics Series 7 Using Loops in Rust","title":"Rust 基礎系列 #7: 在 Rust 中使用循環","tag":"202306","desc":""},"relativePath":"202306/20230507.0 ⭐️⭐️ Rust Basics Series 7 Using Loops in Rust.md","filePath":"[post].md"}'),r={name:"202306/20230507.0 ⭐️⭐️ Rust Basics Series 7 Using Loops in Rust.md"};function h(u,s,g,b,k,f){const p=t("Link");return o(),c("div",null,[s[22]||(s[22]=a("h1",{id:"rust-基礎系列-7-在-rust-中使用循環",tabindex:"-1"},[n("Rust 基礎系列 #7: 在 Rust 中使用循環 "),a("a",{class:"header-anchor",href:"#rust-基礎系列-7-在-rust-中使用循環","aria-label":"Permalink to “Rust 基礎系列 #7: 在 Rust 中使用循環”"},"​")],-1)),s[23]||(s[23]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202306/15/164034klkjbf3ibapjbbfk.jpg",alt:""})],-1)),a("p",null,[s[1]||(s[1]=n("在 Rust 系列的 ",-1)),e(p,{href:"https://linux.cn/article-15896-1.html"},{default:i(()=>[...s[0]||(s[0]=[n("上一篇文章",-1)])]),_:1}),s[2]||(s[2]=n(" 中，我介紹瞭如何使用 ",-1)),s[3]||(s[3]=a("code",null,"if",-1)),s[4]||(s[4]=n(" 和 ",-1)),s[5]||(s[5]=a("code",null,"else",-1)),s[6]||(s[6]=n(" 關鍵字來處理 Rust 程序的控制流。",-1))]),s[24]||(s[24]=d(`<p>這是處理程序控制流的一種方法。另一種方法是使用循環。因此，讓我們在本文中看看循環。</p><h3 id="rust-中可用的循環" tabindex="-1">Rust 中可用的循環 <a class="header-anchor" href="#rust-中可用的循環" aria-label="Permalink to “Rust 中可用的循環”">​</a></h3><p>Rust 編程語言有三種不同的循環，基於你想要實現什麼以及可用的內容：</p><ul><li><code>for</code></li><li><code>while</code></li><li><code>loop</code></li></ul><p>我假設你對 <code>for</code> 和 <code>while</code> 已經很熟悉了，但 <code>loop</code> 對你來説可能是個新概念。讓我們先從熟悉的概念開始。</p><h3 id="for-循環" tabindex="-1">for 循環 <a class="header-anchor" href="#for-循環" aria-label="Permalink to “for 循環”">​</a></h3><p><code>for</code> 循環主要用於迭代一種稱為迭代器的東西。</p><p>這個迭代器可以從任何東西中創建，從數組、向量（很快就會介紹！）、一系列值，或者任何自定義的東西。這裏的可能性是無限的。</p><p>來看看 <code>for</code> 循環的語法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>for 迭代變量 in 迭代器 {</span></span>
<span class="line"><span>    &lt;語句&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中的 <code>迭代變量</code> 在大多數其他編程語言教程中通常被稱為 <code>i</code> ; )</p><p><code>迭代器</code> 可以是任何東西，只要它能告訴下一個值是什麼，如果有的話。</p><p>來通過一個程序來理解這個。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let my_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;迭代數組&quot;);</span></span>
<span class="line"><span>    for element in my_arr {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n迭代一個真正的迭代器&quot;);</span></span>
<span class="line"><span>    for element in my_arr.iter() {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\nPython 風格的範圍&quot;);</span></span>
<span class="line"><span>    for element in 0..10 {</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, element);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏，我聲明瞭一個數組，它包含從 0 到 9 的 10 個數字。在第 5 行的 <code>for</code> 循環中，我只是將這個數組指定為迭代器，Rust 會自動處理對這個數組的所有元素的迭代。不需要花哨的 <code>my_arr[i]</code> 魔法。</p><p>但是，在第 10 行，我調用了 <code>.iter()</code> 函數。這是一個明確的提及，它基於 <code>my_arr</code> 的值來獲取一個迭代器。這個循環和第 5 行的循環之間唯一的區別是，這裏你是通過在數組上調用 <code>.iter()</code> 函數來明確地調用它的。</p><p><em>在這個上下文環境中</em>，在一個數據類型上調用 <code>.iter()</code> 函數不是必須的。因為這是一個數組，是語言本身提供的一種數據類型，Rust 已經知道如何處理它了。但是你 <em>需要</em> 在自定義數據類型中使用它。</p><p>最後，在第 15 行，我們有一個循環，它循環遍歷一個範圍。嗯，差不多是這樣。如果你仔細看，這個範圍看起來很像切片 “類型”。Rust 也知道這一點，並且 <em>為</em> 你處理了迭代（哈哈，明白了嗎？）。</p><blockquote><p>LCTT 譯註：此處的梗是，“為你處理了迭代” 的英文原文是 “handles iteration <em>for</em> you&quot;，其中的 “for” 與 “for 循環” 的 “for” 是同一個單詞。</p></blockquote><p>輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>迭代數組</span></span>
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
<span class="line"><span>迭代一個真正的迭代器</span></span>
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
<span class="line"><span>Python 風格的範圍</span></span>
<span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>4</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>6</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>8</span></span>
<span class="line"><span>9</span></span></code></pre></div><h3 id="while-循環" tabindex="-1">while 循環 <a class="header-anchor" href="#while-循環" aria-label="Permalink to “while 循環”">​</a></h3><p><code>while</code> 循環可以被認為是非常類似於 <code>if</code> 條件語句。使用 <code>if</code> 語句，只要用户提供的條件為 <code>true</code>，<code>if</code> 語句體中的代碼就會被執行 <em>一次</em>。</p><p>但是，在 <code>while</code> 循環中，如果條件評估為 <code>true</code>，循環就會開始循環循環體。只要條件繼續評估為 <code>true</code>，循環就會繼續迭代。</p><p><code>while</code> 循環只有在循環完成當前迭代中所有語句的執行並且在檢查條件時，它的結果為 <code>false</code> 時才會停止。</p><p>來看看 <code>while</code> 循環的語法...</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>while 條件 {</span></span>
<span class="line"><span>    &lt;語句&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>看到了嗎？和 <code>if</code> 條件語句非常相似！不過沒有 <code>else</code> 塊 ; )</p><p>來看一個程序來更好地理解這個。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let mut var = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while var &lt; 3 {</span></span>
<span class="line"><span>        println!(&quot;{var}&quot;);</span></span>
<span class="line"><span>        var += 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我有一個可變變量 <code>var</code>，它的初始值為 0。只要可變變量 <code>var</code> 中存儲的值小於 3，<code>while</code> 循環就會執行。</p><p>在循環中，<code>var</code> 的值被打印出來，然後它的值被增加 1。</p><p>這是上面代碼的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span></code></pre></div><h3 id="loop-循環" tabindex="-1">loop 循環 <a class="header-anchor" href="#loop-循環" aria-label="Permalink to “loop 循環”">​</a></h3><p>Rust 有一個無限循環。是的，一個沒有開始條件和停止條件的循環。它只是一直循環，直到永遠。當然，它有觸發器來停止代碼本身的循環執行。</p><p>無限循環的語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>loop {</span></span>
<span class="line"><span>    &lt;語句&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>📋 這些循環主要用於 GUI 軟件，退出是一個 <em>顯式</em> 操作。</p></blockquote><p>在我給你一個例子之前，因為這個循環非常特殊，讓我們先看看如何 <em>退出</em> 它 :p</p><p>要停止無限循環的執行，需要在循環內使用 <code>break</code> 關鍵字。</p><p>來看一個例子，只有 0 到 3 之間的整數（包括 0 和 3）才會被打印到程序輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>看待這個特定的例子的最好方法是將它看作是一個增加了一堆沒有必要的東西的 <code>while</code> 循環 ; )</p><p>你有一個可變變量 <code>var</code>，它的初始值為 0，它被用作迭代器。無限循環從一個 <code>if</code> 條件開始，如果 <code>var</code> 的值大於 3，<code>break</code> 關鍵字就會被執行。後來，就像 <code>while</code> 循環的前一個例子一樣，<code>var</code> 的值被打印到標準輸出，然後它的值被增加 1。</p><p>它的輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>0</span></span>
<span class="line"><span>1</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>3</span></span></code></pre></div><h3 id="標記循環" tabindex="-1">標記循環 <a class="header-anchor" href="#標記循環" aria-label="Permalink to “標記循環”">​</a></h3><p>假設有兩個無限循環，一個嵌套在另一箇中。由於某種原因，退出條件在最內層循環中被檢查，但這個退出條件是為了退出最外層循環。</p><p>在這種情況下，標記循環可能是有益的。</p><blockquote><p>💡 <code>break</code> 和 <code>continue</code> 關鍵字並不僅僅用於無限循環。它們可以用於 Rust 語言提供的所有三種循環。</p></blockquote><p>接下來是如何標記循環。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&#39;標記: loop {}</span></span></code></pre></div><p>要告訴編譯器一個循環被標記了，從一個單引號字符開始，輸入它的標籤，然後跟着一個冒號。然後，繼續使用你通常定義循環的方式。</p><p>當你需要退出某個循環時，只需像這樣指定循環標籤：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>break &#39;標記;</span></span></code></pre></div><p>來看一個例子來更好地理解這個。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>這裏，我使用兩個可變變量 <code>a</code> 和 <code>b</code>，它們的初始值都設置為 0。</p><p>然後，最外層的循環被標記為 <code>parent</code>。<code>parent</code> 循環將變量 <code>a</code> 的值增加 1，並有一個內部/子循環。</p><p>這個（在第 8 行的）子循環打印變量 <code>a</code> 和 <code>b</code> 的值。在這個循環內部，變量 <code>b</code> 的值增加了 1。退出條件是 <code>a + b == 10</code>。這意味着只要變量 <code>a</code> 和 <code>b</code> 中存儲的值相加，結果為 10，<code>parent</code> 循環就會被打破。即使第 14 行的 <code>break</code> 條件“屬於”內部循環，它也會打破 <code>parent</code> 循環。</p><p>來看看程序的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>a: 1, b: 0</span></span>
<span class="line"><span>a: 1, b: 1</span></span>
<span class="line"><span>a: 1, b: 2</span></span>
<span class="line"><span>a: 1, b: 3</span></span>
<span class="line"><span>a: 1, b: 4</span></span>
<span class="line"><span>a: 1, b: 5</span></span>
<span class="line"><span>a: 1, b: 6</span></span>
<span class="line"><span>a: 1, b: 7</span></span>
<span class="line"><span>a: 1, b: 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1 + 9 = 10</span></span></code></pre></div><p>就像從程序輸出中可以看出的那樣，循環在 <code>a</code> 和 <code>b</code> 分別具有值 1 和 9 時停止。</p><h3 id="continue-關鍵字" tabindex="-1">continue 關鍵字 <a class="header-anchor" href="#continue-關鍵字" aria-label="Permalink to “continue 關鍵字”">​</a></h3><p>如果你已經在其他編程語言（如 C/C++/Java/Python）中使用過循環，你可能已經知道 <code>continue</code> 關鍵字的用法。</p><p>當 <code>break</code> 關鍵字用於完全停止循環執行時，<code>continue</code> 關鍵字用於“跳過”循環執行的 <strong>當前迭代</strong> 並從下一迭代開始（如果條件允許）。</p><p>來看一個例子來理解 <code>continue</code> 關鍵字的工作原理。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    for i in 0..10 {</span></span>
<span class="line"><span>        if i % 2 == 0 {</span></span>
<span class="line"><span>            continue;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        println!(&quot;{}&quot;, i)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在上面的代碼中，我有一個 <code>for</code> 循環，它迭代了 0 到 9 之間的整數（包括 0 和 9）。一旦循環開始，我就設置了一個條件檢查，看看這個數字是不是偶數。如果這個數字是偶數，<code>continue</code> 關鍵字就會被執行。</p><p>但是如果這個數字是奇數，這個數字就會被打印到程序輸出。</p><p>來看看這個程序的輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1</span></span>
<span class="line"><span>3</span></span>
<span class="line"><span>5</span></span>
<span class="line"><span>7</span></span>
<span class="line"><span>9</span></span></code></pre></div><p>正如你所看到的，循環似乎一直在“進行”，儘管 0 到 9 之間顯然有偶數。但是因為我使用了 <code>continue</code> 關鍵字，當遇到這個關鍵字時，循環執行就會停止。</p><p>這個循環跳過了它下面的任何東西，並繼續下一次迭代。這就是為什麼偶數沒有被打印出來，但是 0 到 9 之間的所有奇數都被打印到了程序輸出中。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>要總結這篇長文，我演示了 3 種不同循環的用法：<code>for</code>、<code>while</code> 和 <code>loop</code>。我還討論了兩個關鍵字，它們影響這些循環的控制流：<code>break</code> 和 <code>continue</code>。</p><p>我希望你現在能理解每個循環的適當用例。如果你有任何問題，請告訴我。</p><p><em>（題圖：MJ/25579e09-ae1c-47d3-8266-3bd9a54456c0）</em></p><hr>`,80)),a("p",null,[s[8]||(s[8]=n("via: ",-1)),e(p,{href:"https://itsfoss.com/rust-loops/"},{default:i(()=>[...s[7]||(s[7]=[n("https://itsfoss.com/rust-loops/",-1)])]),_:1})]),a("p",null,[s[13]||(s[13]=n("作者：",-1)),e(p,{href:"https://itsfoss.com/author/pratham/"},{default:i(()=>[...s[9]||(s[9]=[n("Pratham Patel",-1)])]),_:1}),s[14]||(s[14]=n(" 選題：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:i(()=>[...s[10]||(s[10]=[n("lkxed",-1)])]),_:1}),s[15]||(s[15]=n(" 譯者：",-1)),e(p,{href:"https://github.com/Cubik65536"},{default:i(()=>[...s[11]||(s[11]=[n("Cubik65536",-1)])]),_:1}),s[16]||(s[16]=n(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:i(()=>[...s[12]||(s[12]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[19]||(s[19]=n("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:i(()=>[...s[17]||(s[17]=[n("LCTT",-1)])]),_:1}),s[20]||(s[20]=n(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:i(()=>[...s[18]||(s[18]=[n("Linux中國",-1)])]),_:1}),s[21]||(s[21]=n(" 榮譽推出",-1))])])}const v=l(r,[["render",h]]);export{C as __pageData,v as default};
