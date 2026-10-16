import{_ as t,a0 as o,w as c,s as d,ao as l,I as i,x as n,a1 as p,A as e}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const _=JSON.parse('{"title":"Rust 基礎系列 #5: Rust 中的函數 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基礎系列 #5: Rust 中的函數 | LCTT (202305) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基礎系列 #5: Rust 中的函數 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基礎系列 #5: Rust 中的函數 | LCTT (202305) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202305/20230424.0 ⭐️⭐️ Rust Basics Series 5 Functions in the Rust Programming Language","title":"Rust 基礎系列 #5: Rust 中的函數","tag":"202305","desc":""},"relativePath":"202305/20230424.0 ⭐️⭐️ Rust Basics Series 5 Functions in the Rust Programming Language.md","filePath":"[post].md"}'),r={name:"202305/20230424.0 ⭐️⭐️ Rust Basics Series 5 Functions in the Rust Programming Language.md"};function h(u,s,g,k,b,f){const a=o("Link");return c(),d("div",null,[s[18]||(s[18]=l(`<h1 id="rust-基礎系列-5-rust-中的函數" tabindex="-1">Rust 基礎系列 #5: Rust 中的函數 <a class="header-anchor" href="#rust-基礎系列-5-rust-中的函數" aria-label="Permalink to “Rust 基礎系列 #5: Rust 中的函數”">​</a></h1><p><img src="https://img.linux.net.cn/data/attachment/album/202305/29/150550h23qbhahwzb66hb1.jpg" alt=""></p><blockquote><p>在這一章中，在實例的幫助下，學習如何使用函數並從中返回值。</p></blockquote><p>就跟任何現代編程語言一樣，Rust 也有函數。</p><p>你已經熟悉的函數是 <code>main</code> 函數。這個函數在程序啓動時被調用。</p><p>但是其他函數呢？在本文中，你將學習如何在 Rust 程序中使用函數。</p><h3 id="函數的基本語法" tabindex="-1">函數的基本語法 <a class="header-anchor" href="#函數的基本語法" aria-label="Permalink to “函數的基本語法”">​</a></h3><p>你可能已經在我們聲明 <code>main</code> 函數時知道了這一點，不管怎麼樣，還是讓我們看一下聲明函數的語法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 聲明函數</span></span>
<span class="line"><span>fn function_name() {</span></span>
<span class="line"><span>    &lt;statement(s)&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 調用函數</span></span>
<span class="line"><span>function_name();</span></span></code></pre></div><p>來讓我們看一個簡單的函數，它將字符串 <code>&quot;Hi there!&quot;</code> 打印到標準輸出。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    greet();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn greet() {</span></span>
<span class="line"><span>    println!(&quot;Hi there!&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>📋 與 C 不一樣的是，不管你是否要在聲明或定義之前調用函數都沒有關係。只要這個函數在 <em>某個地方</em> 被聲明瞭，Rust 就會處理它。</p></blockquote><p>正如預期，它的輸出如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Hi there!</span></span></code></pre></div><p>這挺簡單的。讓我們把它提升到下一個級別。讓我們創建一個接受參數並返回值的函數。有沒有參數和有沒有返回值這兩者之間無關。</p><h3 id="使用函數接受參數" tabindex="-1">使用函數接受參數 <a class="header-anchor" href="#使用函數接受參數" aria-label="Permalink to “使用函數接受參數”">​</a></h3><p>聲明一個接受參數的函數的語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 聲明函數</span></span>
<span class="line"><span>fn function_name(variable_name: type) {</span></span>
<span class="line"><span>    &lt;statement(s)&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 調用函數</span></span>
<span class="line"><span>function_name(value);</span></span></code></pre></div>`,18)),i("p",null,[s[1]||(s[1]=n("你可以把函數參數想像成一個傳遞給函數的 ",-1)),p(a,{href:"https://linux.cn/article-15837-1.html"},{default:e(()=>[...s[0]||(s[0]=[n("元組",-1)])]),_:1}),s[2]||(s[2]=n("。它可以接受多種數據類型的參數，而且你可以接受任意多個參數。所以，你不必侷限於接受相同類型的參數。",-1))]),s[19]||(s[19]=l(`<p>與某些語言不同的是，Rust 沒有 <em>默認參數</em>。<strong>在調用函數時填充所有參數是強制性的</strong>。</p><h4 id="示例-飢餓函數" tabindex="-1">示例：飢餓函數 <a class="header-anchor" href="#示例-飢餓函數" aria-label="Permalink to “示例：飢餓函數”">​</a></h4><p>來讓我們看一個程序來更好地理解這個。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    food(2, 4);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn food(theplas: i32, rotis: i32) {</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;我餓了... 我需要 {} 個葫蘆巴葉餅和 {} 個羅提！&quot;,</span></span>
<span class="line"><span>        theplas, rotis</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在第 5 行，我聲明瞭一個名為 <code>food</code> 的函數。這個函數接受 2 個參數：<code>theplas</code> 和 <code>rotis</code>（印度食物的名字）。然後我打印了這些變量的內容。</p><p>對於 <code>main</code> 函數，我使用參數 <code>2</code> 和 <code>4</code> 調用 <code>food</code> 函數。這意味着 <code>theplas</code> 被賦值為 <code>2</code>，<code>rotis</code> 被賦值為 <code>4</code>。</p><p>來讓我們看一下程序的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我餓了... 我需要 2 個葫蘆巴葉餅和 4 個羅提！</span></span></code></pre></div><p>我現在真的餓了... 😋</p><h3 id="從函數返回值" tabindex="-1">從函數返回值 <a class="header-anchor" href="#從函數返回值" aria-label="Permalink to “從函數返回值”">​</a></h3><p>就像函數可以接受參數一樣，函數也可以返回一個或多個值。這樣的函數的語法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 聲明函數</span></span>
<span class="line"><span>fn function_name() -&gt; data_type {</span></span>
<span class="line"><span>    &lt;statement(s)&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 調用函數</span></span>
<span class="line"><span>let x = function_name();</span></span></code></pre></div><p>函數可以使用 <code>return</code> 關鍵字或者使用表達式而不是語句來返回一個值。</p><p>等等！什麼是表達式？</p><h4 id="在進一步之前-語句與表達式" tabindex="-1">在進一步之前：語句與表達式 <a class="header-anchor" href="#在進一步之前-語句與表達式" aria-label="Permalink to “在進一步之前：語句與表達式”">​</a></h4><p>在講解 Rust 函數的例子中提起這個可能不太合適，但是你應該理解 Rust 和其他編程語言中語句和表達式的區別。</p><p>語句是以分號結尾且 <em>不會計算出某個值</em> 的代碼行。另一方面，表達式是一行不以分號結尾且計算出某個值的代碼行。</p><p>來讓我們用一個例子來理解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let a = 873;</span></span>
<span class="line"><span>    let b = {</span></span>
<span class="line"><span>        // 語句</span></span>
<span class="line"><span>        println!(&quot;Assigning some value to b...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 表達式</span></span>
<span class="line"><span>        a * 10</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;b: {b}&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在第 3 行，我開始了一個代碼塊，在這個代碼塊中我有一個語句和一個表達式。註釋標明瞭哪個是哪個。</p><p>在第 5 行的代碼不會計算出某個值，因此需要以分號結尾。這是一個語句。</p><p>第 8 行的代碼計算出了一個值。它是 <code>a * 10</code>（<code>873 * 10</code>），並計算出了 <code>8730</code>。因為這一行沒有以分號結尾，所以這是一個表達式。</p><blockquote><p>📋 使用表達式是從代碼塊中返回某些東西的一種方便的方法。因此，當返回一個值時，它是 <code>return</code> 關鍵字的替代方案。表達式不僅僅用於從函數中 “返回” 一個值。正如你剛剛看到的，<code>a * 10</code> 的值是從內部作用域 “返回” 到外部作用域，並賦值給變量 <code>b</code>。一個簡單的作用域不是一個函數，但表達式的值仍然被 “返回” 了。</p></blockquote><h4 id="示例-購買腐爛的水果" tabindex="-1">示例：購買腐爛的水果 <a class="header-anchor" href="#示例-購買腐爛的水果" aria-label="Permalink to “示例：購買腐爛的水果”">​</a></h4><p>來讓我們看一個演示以理解函數如何返回一個值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;如果我從水果攤買了 2 公斤蘋果，我必須付給他們 {} 印度盧比。&quot;,</span></span>
<span class="line"><span>        retail_price(2.0)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    println!(</span></span>
<span class="line"><span>        &quot;但是，如果我從水果攤買了 30 公斤蘋果，我就要付給他們 {} 印度盧比。&quot;,</span></span>
<span class="line"><span>        wholesale_price(30.0)</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn retail_price(weight: f64) -&gt; f64 {</span></span>
<span class="line"><span>    return weight * 500.0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn wholesale_price(weight: f64) -&gt; f64 {</span></span>
<span class="line"><span>    weight * 400.0</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>我在上述代碼中有兩個函數：<code>retail_price</code> 和 <code>wholesale_price</code>。兩個函數都接受一個參數並將值存儲在 <code>weight</code> 變量中。這個變量的類型是 <code>f64</code>，函數簽名表示最終函數返回一個 <code>f64</code> 值。</p><p>這兩個函數都將購買的蘋果的重量乘以一個數字。這個數字表示蘋果的當前每公斤價格。由於批發商有大量訂單，物流在某種程度上更容易，價格可以降低一點。</p><p>除了每公斤價格之外，這兩個函數還有一個區別。那就是，<code>retail_price</code> 函數使用 <code>return</code> 關鍵字返回乘積。而 <code>wholesale_price</code> 函數使用表達式返回乘積。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>如果我從水果攤買了 2 公斤蘋果，我必須付給他們 1000 印度盧比。</span></span>
<span class="line"><span>但是，如果我從水果攤買了 30 公斤蘋果，我就要付給他們 12000 印度盧比。</span></span></code></pre></div><p>輸出顯示，從函數返回值的兩種方法都按預期工作。</p><h4 id="返回多個值" tabindex="-1">返回多個值 <a class="header-anchor" href="#返回多個值" aria-label="Permalink to “返回多個值”">​</a></h4><p>你可以有一個返回不同類型的多個值的函數。你有很多選擇，但返回一個元組是最簡單的。</p><p>接下來是一個示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    let (maths, english, science, sanskrit) = tuple_func();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;數學考試得分: {maths}&quot;);</span></span>
<span class="line"><span>    println!(&quot;英語考試得分: {english}&quot;);</span></span>
<span class="line"><span>    println!(&quot;科學考試得分: {science}&quot;);</span></span>
<span class="line"><span>    println!(&quot;梵語考試得分: {sanskrit}&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn tuple_func() -&gt; (f64, f64, f64, f64) {</span></span>
<span class="line"><span>    // return marks for a student</span></span>
<span class="line"><span>    let maths = 84.50;</span></span>
<span class="line"><span>    let english = 85.00;</span></span>
<span class="line"><span>    let science = 75.00;</span></span>
<span class="line"><span>    let sanskrit = 67.25;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    (maths, english, science, sanskrit)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>函數 <code>tuple_func</code> 返回 4 個封裝在一個元組中的 <code>f64</code> 值。這些值是一個學生在四門科目（滿分 100 分）中獲得的分數。</p><p>當函數被調用時，這個元組被返回。我可以使用 <code>tuple_name.0</code> 方案打印這些值，但我認為最好先解構元組，這樣可以幫助我們搞清楚值對應的是什麼。然後我使用了包含被解構的元組的值的變量來打印分數。</p><p>這是我得到的輸出：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>數學考試得分: 84.5</span></span>
<span class="line"><span>英語考試得分: 85</span></span>
<span class="line"><span>科學考試得分: 75</span></span>
<span class="line"><span>梵語考試得分: 67.25</span></span></code></pre></div><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>本文介紹了 Rust 編程語言中的函數。這些是函數的 “類型”：</p><ul><li>不接受任何參數也不返回任何值的函數</li><li>接收一個或多個參數的函數</li><li>給調用者返回一個或多個值的函數</li></ul><p>你知道接下來是什麼嗎？Rust 中的條件語句，也就是 if-else。請繼續關注並享受學習 Rust 的過程。</p><p><em>（題圖：MJ/5a07503b-c691-4276-83b2-bb42f5fda347）</em></p><hr>`,45)),i("p",null,[s[4]||(s[4]=n("via: ",-1)),p(a,{href:"https://itsfoss.com/rust-functions/"},{default:e(()=>[...s[3]||(s[3]=[n("https://itsfoss.com/rust-functions/",-1)])]),_:1})]),i("p",null,[s[9]||(s[9]=n("作者：",-1)),p(a,{href:"https://itsfoss.com/author/pratham/"},{default:e(()=>[...s[5]||(s[5]=[n("Pratham Patel",-1)])]),_:1}),s[10]||(s[10]=n(" 選題：",-1)),p(a,{href:"https://github.com/lkxed/"},{default:e(()=>[...s[6]||(s[6]=[n("lkxed",-1)])]),_:1}),s[11]||(s[11]=n(" 譯者：",-1)),p(a,{href:"https://github.com/Cubik65536"},{default:e(()=>[...s[7]||(s[7]=[n("Cubik65536",-1)])]),_:1}),s[12]||(s[12]=n(" 校對：",-1)),p(a,{href:"https://github.com/wxy"},{default:e(()=>[...s[8]||(s[8]=[n("wxy",-1)])]),_:1})]),i("p",null,[s[15]||(s[15]=n("本文由 ",-1)),p(a,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[13]||(s[13]=[n("LCTT",-1)])]),_:1}),s[16]||(s[16]=n(" 原創編譯，",-1)),p(a,{href:"https://linux.cn/"},{default:e(()=>[...s[14]||(s[14]=[n("Linux中國",-1)])]),_:1}),s[17]||(s[17]=n(" 榮譽推出",-1))])])}const y=t(r,[["render",h]]);export{_ as __pageData,y as default};
