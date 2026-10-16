import{_ as i,a0 as o,w as u,s as c,I as a,x as s,a1 as e,A as l,ao as t}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const k=JSON.parse('{"title":"Rust 基礎系列 #8：編寫里程碑 Rust 程序 | LCTT x X-CMD","titleTemplate":false,"description":"Rust 基礎系列 #8：編寫里程碑 Rust 程序 | LCTT (202306) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"Rust 基礎系列 #8：編寫里程碑 Rust 程序 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"Rust 基礎系列 #8：編寫里程碑 Rust 程序 | LCTT (202306) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"202306/20230515.0 ⭐️⭐️ Rust Basics Series 8 Write the Milestone Rust Program","title":"Rust 基礎系列 #8：編寫里程碑 Rust 程序","tag":"202306","desc":""},"relativePath":"202306/20230515.0 ⭐️⭐️ Rust Basics Series 8 Write the Milestone Rust Program.md","filePath":"[post].md"}'),r={name:"202306/20230515.0 ⭐️⭐️ Rust Basics Series 8 Write the Milestone Rust Program.md"};function d(q,n,f,_,m,g){const p=o("Link");return u(),c("div",null,[n[39]||(n[39]=a("h1",{id:"rust-基礎系列-8-編寫里程碑-rust-程序",tabindex:"-1"},[s("Rust 基礎系列 #8：編寫里程碑 Rust 程序 "),a("a",{class:"header-anchor",href:"#rust-基礎系列-8-編寫里程碑-rust-程序","aria-label":"Permalink to “Rust 基礎系列 #8：編寫里程碑 Rust 程序”"},"​")],-1)),n[40]||(n[40]=a("p",null,[a("img",{src:"https://img.linux.net.cn/data/attachment/album/202306/23/114333ni9fkzpykmz37zpu.jpg",alt:""})],-1)),a("p",null,[n[5]||(n[5]=s("到目前為止，我們已經講解了包括 ",-1)),e(p,{href:"https://linux.cn/article-15771-1.html"},{default:l(()=>[...n[0]||(n[0]=[s("變量、可變性、常量",-1)])]),_:1}),n[6]||(n[6]=s("、",-1)),e(p,{href:"https://linux.cn/article-15811-1.html"},{default:l(()=>[...n[1]||(n[1]=[s("數據類型",-1)])]),_:1}),n[7]||(n[7]=s("、",-1)),e(p,{href:"https://linux.cn/article-15855-1.html"},{default:l(()=>[...n[2]||(n[2]=[s("函數",-1)])]),_:1}),n[8]||(n[8]=s("、",-1)),e(p,{href:"https://linux.cn/article-15896-1.html"},{default:l(()=>[...n[3]||(n[3]=[s("if-else 語句",-1)])]),_:1}),n[9]||(n[9]=s(" 和 ",-1)),e(p,{href:"https://linux.cn/article-15908-1.html"},{default:l(()=>[...n[4]||(n[4]=[s("循環",-1)])]),_:1}),n[10]||(n[10]=s(" 在內的一些關於 Rust 編程的基礎知識。",-1))]),n[41]||(n[41]=t(`<p>在 Rust 基礎系列的最後一章裏，讓我們現在用 Rust 編寫一個程序，使用這些主題，以便更好地理解它們在現實世界中的用途。讓我們來編寫一個相對簡單的程序，用來從水果市場訂購水果。</p><h3 id="我們程序的基本結構" tabindex="-1">我們程序的基本結構 <a class="header-anchor" href="#我們程序的基本結構" aria-label="Permalink to “我們程序的基本結構”">​</a></h3><p>來讓我們首先向用户問好，並告訴他們如何與程序交互。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>    println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="獲取用户輸入" tabindex="-1">獲取用户輸入 <a class="header-anchor" href="#獲取用户輸入" aria-label="Permalink to “獲取用户輸入”">​</a></h3><p>上面的代碼非常簡單。目前，你不知道接下來該做什麼，因為你不知道用户接下來想做什麼。</p><p>所以讓我們添加一些代碼，接受用户輸入並將其存儲在某個地方以便稍後解析，然後根據用户輸入採取適當的操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>    println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 獲取用户輸入</span></span>
<span class="line"><span>    let mut user_input = String::new();</span></span>
<span class="line"><span>    io::stdin()</span></span>
<span class="line"><span>        .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>        .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>有三個新元素需要告訴你。所以讓我們對這些新元素進行淺層次的探索。</p><h4 id="_1-理解-use-關鍵字" tabindex="-1">1. 理解 use 關鍵字 <a class="header-anchor" href="#_1-理解-use-關鍵字" aria-label="Permalink to “1. 理解 use 關鍵字”">​</a></h4><p>在這個程序的第一行，你可能已經注意到我們“使用”（哈哈！）了一個叫做 <code>use</code> 的新關鍵字。Rust 中的 <code>use</code> 關鍵字類似於 C/C++ 中的 <code>#include</code> 指令和 Python 中的 <code>import</code> 關鍵字。使用 <code>use</code> 關鍵字，我們從 Rust 標準庫 <code>std</code> 中“導入”了 <code>io</code>（輸入輸出）模組。</p><blockquote><p>LCTT 譯註：“使用”在原文中為“use”，與新介紹的關鍵字一樣。</p></blockquote>`,12)),a("p",null,[n[12]||(n[12]=s("你可能會想知道為什麼我們在可以使用 ",-1)),n[13]||(n[13]=a("code",null,"println",-1)),n[14]||(n[14]=s(" 宏來將某些內容輸出到標準輸出時，導入 ",-1)),n[15]||(n[15]=a("code",null,"io",-1)),n[16]||(n[16]=s(" 模組是必要的。Rust 的標準庫有一個叫做 ",-1)),n[17]||(n[17]=a("code",null,"prelude",-1)),n[18]||(n[18]=s(" 的模組，它會自動被包含。該模組包含了 Rust 程序員可能需要使用的所有常用函數，比如 ",-1)),n[19]||(n[19]=a("code",null,"println",-1)),n[20]||(n[20]=s(" 宏。（你可以在 ",-1)),e(p,{href:"https://doc.rust-lang.org/std/prelude/index.html"},{default:l(()=>[...n[11]||(n[11]=[s("這裏",-1)])]),_:1}),n[21]||(n[21]=s(" 閲讀更多關於 ",-1)),n[22]||(n[22]=a("code",null,"std::prelude",-1)),n[23]||(n[23]=s(" 模組的內容。）",-1))]),n[42]||(n[42]=t(`<p>Rust 標準庫 <code>std</code> 中的 <code>io</code> 模組是接受用户輸入所必需的。因此，我們在程序的第一行添加了一個 <code>use</code> 語句。</p><h4 id="_2-理解-rust-中的-string-類型" tabindex="-1">2. 理解 Rust 中的 String 類型 <a class="header-anchor" href="#_2-理解-rust-中的-string-類型" aria-label="Permalink to “2. 理解 Rust 中的 String 類型”">​</a></h4><p>在第 11 行，我創建了一個新的可變變量 <code>user_input</code>，正如它的名字所表示的那樣，它將被用來存儲用户輸入。但是在同一行，你可能已經注意到了一些“新的”東西（哈哈，又來了！）。</p><blockquote><p>LCTT 譯註：“新的”在原文中為“new”，在第 11 行的代碼中，原作者使用了 <code>String::new()</code> 函數，所以此處的梗與“使用”一樣，原作者使用了一個在代碼中用到的單詞。</p></blockquote><p>我沒有使用雙引號（<code>&quot;&quot;</code>）聲明一個空字符串，而是使用 <code>String::new()</code> 函數來創建一個新的空字符串。</p><p><code>&quot;&quot;</code> 與 <code>String::new()</code> 的區別是你將在 Rust 系列的後續文章中學習到的。現在，只需要知道，使用 <code>String::new()</code> 函數，你可以創建一個<strong>可變</strong>的，<strong>位於堆上</strong>的字符串。</p><p>如果我使用 <code>&quot;&quot;</code> 創建了一個字符串，我將得到一個叫做“字符串切片”的東西。字符串切片的內容也位於堆上，但是字符串本身是<strong>不可變</strong>的。所以，即使變量本身是可變的，作為字符串存儲的實際數據是不可變的，需要被<strong>覆蓋</strong>而不是修改。</p><h4 id="_3-接受用户輸入" tabindex="-1">3. 接受用户輸入 <a class="header-anchor" href="#_3-接受用户輸入" aria-label="Permalink to “3. 接受用户輸入”">​</a></h4><p>在第 12 行，我調用了 <code>std::io</code> 的 <code>stdin()</code> 函數。如果我在程序的開頭沒有導入 <code>std::io</code> 模組，那麼這一行將是 <code>std::io::stdin()</code> 而不是 <code>io::stdin()</code>。</p><p><code>sdtin()</code> 函數返回一個終端的輸入句柄。<code>read_line()</code> 函數抓住這個輸入句柄，然後，正如它的名字所暗示的那樣，讀取一行輸入。這個函數接受一個可變字符串的引用。所以，我傳入了 <code>user_input</code> 變量，通過在它前面加上 <code>&amp;mut</code>，使它成為一個可變引用。</p><blockquote><p>⚠️ <code>read_line()</code> 函數有一個 <em>怪癖</em>。這個函數在用户按下回車鍵之後 <strong>停止</strong> 讀取輸入。因此，這個函數也會記錄換行符（<code>\\n</code>），並將一個換行符存儲在你傳入的可變字符串變量的結尾處。</p></blockquote><p>所以，請在處理它時要麼考慮到這個換行符，要麼將它刪除。</p><h3 id="rust-中的錯誤處理入門" tabindex="-1">Rust 中的錯誤處理入門 <a class="header-anchor" href="#rust-中的錯誤處理入門" aria-label="Permalink to “Rust 中的錯誤處理入門”">​</a></h3><p>最後，在這個鏈的末尾有一個 <code>expect()</code> 函數。讓我們稍微偏題一下，來理解為什麼要調用這個函數。</p><p><code>read_line()</code> 函數返回一個叫做 <code>Result</code> 的枚舉。我會在後面的文章中講解 Rust 中的枚舉，但是現在只需要知道，枚舉在 Rust 中是非常強大的。這個 <code>Result</code> 枚舉返回一個值，告訴程序員在讀取用户輸入時是否發生了錯誤。</p><p><code>expect()</code> 函數接受這個 <code>Result</code> 枚舉，並檢查結果是否正常。如果沒有發生錯誤，什麼都不會發生。但是如果發生了錯誤，我傳入的消息（<code>無法讀取用户輸入。</code>）將會被打印到 STDERR，<em>程序將會退出</em>。</p><blockquote><p>📋 <strong>所有我簡要提及的新概念將會在後續的新 Rust 系列文章中講解。</strong></p></blockquote><p>現在我希望你應該已經理解了這些新概念，讓我們添加更多的代碼來增加程序的功能。</p><h3 id="驗證用户輸入" tabindex="-1">驗證用户輸入 <a class="header-anchor" href="#驗證用户輸入" aria-label="Permalink to “驗證用户輸入”">​</a></h3><p>我接受了用户的輸入，但是我沒有對其進行驗證。在當前的上下文中，驗證意味着用户輸入了一些“命令”，我們希望能夠處理這些命令。目前，這些命令有兩個“類別”。</p><p>第一類用户可以輸入的命令是用户希望購買的水果的名稱。第二個命令表示用户想要退出程序。</p><p>我們的任務現在是確保用户輸入不會偏離 <em>可接受的命令</em>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>    println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 獲取用户輸入</span></span>
<span class="line"><span>    let mut user_input = String::new();</span></span>
<span class="line"><span>    io::stdin()</span></span>
<span class="line"><span>        .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>        .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 驗證用户輸入</span></span>
<span class="line"><span>    let valid_inputs = [&quot;蘋果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span>    user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span>    let mut input_error = true;</span></span>
<span class="line"><span>    for input in valid_inputs {</span></span>
<span class="line"><span>        if input == user_input {</span></span>
<span class="line"><span>            input_error = false;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>要使驗證更容易，我創建了一個叫做 <code>valid_inputs</code> 的字符串切片數組（第 17 行）。這個數組包含了所有可以購買的水果的名稱，以及字符串切片 <code>q</code> 和 <code>quit</code>，讓用户可以傳達他們是否希望退出。</p><p>用户可能不知道我們希望輸入是什麼樣的。用户可能會輸入“Apple”、“apple”或 “APPLE” 來表示他們想要購買蘋果。我們的工作是正確處理這些輸入。</p><p>在第 18 行，我通過調用 <code>trim()</code> 函數從 <code>user_input</code> 字符串中刪除了尾部的換行符。為了處理上面提到的問題，我使用 <code>to_lowercase()</code> 函數將所有字符轉換為小寫，這樣 “Apple”、“apple” 和 “APPLE” 都會變成 “apple”。</p><p>現在，來看第 19 行，我創建了一個名為 <code>input_error</code> 的可變布爾變量，初始值為 <code>true</code>。稍後在第 20 行，我創建了一個 <code>for</code> 循環，它遍歷了 <code>valid_inputs</code> 數組的所有元素（字符串切片），並將迭代的模式存儲在 <code>input</code> 變量中。</p><p>在循環內部，我檢查用户輸入是否等於其中一個有效字符串，如果是，我將 <code>input_error</code> 布爾值的值設置為 <code>false</code>，並跳出 <code>for</code> 循環。</p><h3 id="處理無效輸入" tabindex="-1">處理無效輸入 <a class="header-anchor" href="#處理無效輸入" aria-label="Permalink to “處理無效輸入”">​</a></h3><p>現在是時候處理無效輸入了。這可以通過將一些代碼移動到無限循環中來完成，如果用户給出無效輸入，則 <em>繼續</em> 該無限循環。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;蘋果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 讀取用户輸入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 驗證用户輸入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 處理無效輸入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;錯誤: 請輸入有效的輸入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>這裏，我將一些代碼移動到了循環內部，並重新組織了一下代碼，以便更好地處理循環的引入。在循環內部，第 31 行，如果用户輸入了一個無效的字符串，我將 <code>continue</code> <code>mart</code> 循環。</p><h3 id="對用户輸入做出反應" tabindex="-1">對用户輸入做出反應 <a class="header-anchor" href="#對用户輸入做出反應" aria-label="Permalink to “對用户輸入做出反應”">​</a></h3><p>現在，所有其他的狀況都已經處理好了，是時候寫一些代碼來讓用户從水果市場購買水果了，當用户希望退出時，程序也會退出。</p><p>因為你也知道用户選擇了哪種水果，所以讓我們問一下他們打算購買多少，並告訴他們輸入數量的格式。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;蘋果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span>        let mut quantity = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 讀取用户輸入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 驗證用户輸入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 處理無效輸入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;錯誤: 請輸入有效的輸入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果用户想要退出，就退出</span></span>
<span class="line"><span>        if user_input == &quot;q&quot; || user_input == &quot;quit&quot; {</span></span>
<span class="line"><span>            break &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 獲取數量</span></span>
<span class="line"><span>        println!(</span></span>
<span class="line"><span>            &quot;\\n你選擇購買的水果是 \\&quot;{}\\&quot;。請輸入以千克為單位的數量。</span></span>
<span class="line"><span>（1 千克 500 克的數量應該輸入為 &#39;1.5&#39;。）&quot;,</span></span>
<span class="line"><span>            user_input</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut quantity)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在第 11 行，我聲明瞭另一個可變變量，它的值是一個空字符串，在第 48 行，我接受了用户的輸入，但是這次是用户打算購買的水果的數量。</p><h4 id="解析數量" tabindex="-1">解析數量 <a class="header-anchor" href="#解析數量" aria-label="Permalink to “解析數量”">​</a></h4><p>我剛剛增加了一些代碼，以已知的格式接受數量，但是這些數據被存儲為字符串。我需要從中提取出浮點數。幸運的是，這可以通過 <code>parse()</code> 方法來完成。</p><p>就像 <code>read_line()</code> 方法一樣，<code>parse()</code> 方法返回一個 <code>Result</code> 枚舉。<code>parse()</code> 方法返回 <code>Result</code> 枚舉的原因可以通過我們試圖實現的內容來輕鬆理解。</p><p>我正在接受用户的字符串，並嘗試將其轉換為浮點數。浮點數有兩個可能的值。一個是浮點數本身，另一個是小數。</p><p>字符串可以包含字母，但是浮點數不行。所以，如果用户輸入的不是浮點數和小數，<code>parse()</code> 函數將會返回一個錯誤。</p><p>因此，這個錯誤也需要處理。我們將使用 <code>expect()</code> 函數來處理這個錯誤。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;蘋果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span>        let mut quantity = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 讀取用户輸入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 驗證用户輸入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 處理無效輸入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;錯誤: 請輸入有效的輸入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果用户想要退出，就退出</span></span>
<span class="line"><span>        if user_input == &quot;q&quot; || user_input == &quot;quit&quot; {</span></span>
<span class="line"><span>            break &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 獲取數量</span></span>
<span class="line"><span>        println!(</span></span>
<span class="line"><span>            &quot;\\n你選擇購買的水果是 \\&quot;{}\\&quot;。請輸入以千克為單位的數量。</span></span>
<span class="line"><span>（1 千克 500 克的數量應該輸入為 &#39;1.5&#39;。）&quot;,</span></span>
<span class="line"><span>            user_input</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut quantity)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let quantity: f64 = quantity</span></span>
<span class="line"><span>            .trim()</span></span>
<span class="line"><span>            .parse()</span></span>
<span class="line"><span>            .expect(&quot;請輸入有效的數量。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如你所見，我通過變量遮蔽將解析後的浮點數存儲在變量 <code>quantity</code> 中。為了告訴 <code>parse()</code> 函數，我的意圖是將字符串解析為 <code>f64</code>，我手動將變量 <code>quantity</code> 的類型註釋為 <code>f64</code>。</p><p>現在，<code>parse()</code> 函數將會解析字符串並返回一個 <code>f64</code> 或者一個錯誤，<code>expect()</code> 函數將會處理這個錯誤。</p><h3 id="計算價格-最後的修飾" tabindex="-1">計算價格 + 最後的修飾 <a class="header-anchor" href="#計算價格-最後的修飾" aria-label="Permalink to “計算價格 + 最後的修飾”">​</a></h3><p>現在我們知道了用户想要購買的水果及其數量，現在是時候進行計算了，並讓用户知道結果/總價了。</p><p>為了真實起見，我將為每種水果設置兩個價格。第一個價格是零售價，我們在購買少量水果時向水果供應商支付的價格。水果的第二個價格是當有人批量購買水果時支付的批發價。</p><p>批發價將會在訂單數量大於被認為是批發購買的最低訂單數量時確定。這個最低訂單數量對於每種水果都是不同的。每種水果的價格都是每千克多少盧比。</p><p>想好了邏輯，下面是最終的程序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>use std::io;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const APPLE_RETAIL_PER_KG: f64 = 60.0;</span></span>
<span class="line"><span>const APPLE_WHOLESALE_PER_KG: f64 = 45.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const BANANA_RETAIL_PER_KG: f64 = 20.0;</span></span>
<span class="line"><span>const BANANA_WHOLESALE_PER_KG: f64 = 15.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const ORANGE_RETAIL_PER_KG: f64 = 100.0;</span></span>
<span class="line"><span>const ORANGE_WHOLESALE_PER_KG: f64 = 80.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const MANGO_RETAIL_PER_KG: f64 = 60.0;</span></span>
<span class="line"><span>const MANGO_WHOLESALE_PER_KG: f64 = 55.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const GRAPES_RETAIL_PER_KG: f64 = 120.0;</span></span>
<span class="line"><span>const GRAPES_WHOLESALE_PER_KG: f64 = 100.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn main() {</span></span>
<span class="line"><span>    println!(&quot;歡迎來到水果市場！&quot;);</span></span>
<span class="line"><span>    println!(&quot;請選擇要購買的水果。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let valid_inputs = [&quot;蘋果&quot;, &quot;香蕉&quot;, &quot;橘子&quot;, &quot;芒果&quot;, &quot;葡萄&quot;, &quot;quit&quot;, &quot;q&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;mart: loop {</span></span>
<span class="line"><span>        let mut user_input = String::new();</span></span>
<span class="line"><span>        let mut quantity = String::new();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        println!(&quot;\\n可以購買的水果：蘋果、香蕉、橘子、芒果、葡萄&quot;);</span></span>
<span class="line"><span>        println!(&quot;購買完成後，請輸入“quit”或“q”。\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 讀取用户輸入</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut user_input)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span>        user_input = user_input.trim().to_lowercase();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 驗證用户輸入</span></span>
<span class="line"><span>        let mut input_error = true;</span></span>
<span class="line"><span>        for input in valid_inputs {</span></span>
<span class="line"><span>            if input == user_input {</span></span>
<span class="line"><span>                input_error = false;</span></span>
<span class="line"><span>                break;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 處理無效輸入</span></span>
<span class="line"><span>        if input_error {</span></span>
<span class="line"><span>            println!(&quot;錯誤: 請輸入有效的輸入&quot;);</span></span>
<span class="line"><span>            continue &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 如果用户想要退出，就退出</span></span>
<span class="line"><span>        if user_input == &quot;q&quot; || user_input == &quot;quit&quot; {</span></span>
<span class="line"><span>            break &#39;mart;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 獲取數量</span></span>
<span class="line"><span>        println!(</span></span>
<span class="line"><span>            &quot;\\n你選擇購買的水果是 \\&quot;{}\\&quot;。請輸入以千克為單位的數量。</span></span>
<span class="line"><span>（1 千克 500 克的數量應該輸入為 &#39;1.5&#39;。）&quot;,</span></span>
<span class="line"><span>            user_input</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>        io::stdin()</span></span>
<span class="line"><span>            .read_line(&amp;mut quantity)</span></span>
<span class="line"><span>            .expect(&quot;無法讀取用户輸入。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let quantity: f64 = quantity</span></span>
<span class="line"><span>            .trim()</span></span>
<span class="line"><span>            .parse()</span></span>
<span class="line"><span>            .expect(&quot;請輸入有效的數量。&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        total += calc_price(quantity, user_input);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    println!(&quot;\\n\\n總價是 {} 盧比。&quot;, total);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn calc_price(quantity: f64, fruit: String) -&gt; f64 {</span></span>
<span class="line"><span>    if fruit == &quot;apple&quot; {</span></span>
<span class="line"><span>        price_apple(quantity)</span></span>
<span class="line"><span>    } else if fruit == &quot;banana&quot; {</span></span>
<span class="line"><span>        price_banana(quantity)</span></span>
<span class="line"><span>    } else if fruit == &quot;orange&quot; {</span></span>
<span class="line"><span>        price_orange(quantity)</span></span>
<span class="line"><span>    } else if fruit == &quot;mango&quot; {</span></span>
<span class="line"><span>        price_mango(quantity)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        price_grapes(quantity)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_apple(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 7.0 {</span></span>
<span class="line"><span>        quantity * APPLE_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * APPLE_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_banana(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 4.0 {</span></span>
<span class="line"><span>        quantity * BANANA_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * BANANA_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_orange(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 3.5 {</span></span>
<span class="line"><span>        quantity * ORANGE_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * ORANGE_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_mango(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 5.0 {</span></span>
<span class="line"><span>        quantity * MANGO_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * MANGO_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn price_grapes(quantity: f64) -&gt; f64 {</span></span>
<span class="line"><span>    if quantity &gt; 2.0 {</span></span>
<span class="line"><span>        quantity * GRAPES_WHOLESALE_PER_KG</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        quantity * GRAPES_RETAIL_PER_KG</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>對比之前的版本，我做了一些改動……</p><p>水果的價格可能會波動，但是在我們程序的生命週期內，這些價格不會波動。所以我將每種水果的零售價和批發價存儲在常量中。我將這些常量定義在 <code>main()</code> 函數之外（即全局常量），因為我不會在 <code>main()</code> 函數內計算每種水果的價格。這些常量被聲明為 <code>f64</code>，因為它們將與 <code>quantity</code> 相乘，而 <code>quantity</code> 是 <code>f64</code>。記住，Rust 沒有隱式類型轉換 😉</p><p>當水果名稱和用户想要購買的數量被存下來之後，<code>calc_price()</code> 函數被調用來計算用户指定數量的水果的價格。這個函數接受水果名稱和數量作為參數，並將價格作為 <code>f64</code> 返回。</p><p>當你看到 <code>calc_price()</code> 函數的內部時，你會發現它是許多人所説的包裝函數。它被稱為包裝函數，因為它調用其他函數來完成它的髒活。</p><p>因為每種水果都有不同的最低訂單數量，才能被認為是批發購買，為了確保代碼在未來可以輕鬆維護，每種水果都有單獨的函數負責計算價格。</p><p>所以，<code>calc_price()</code> 函數所做的就是確定用户選擇了哪種水果，並調用相應的函數來計算所選水果的價格。這些水果特定的函數只接受一個參數：數量。這些水果特定的函數將價格作為 <code>f64</code> 返回。</p><p>現在，<code>price_*()</code> 函數只做一件事。它們檢查訂單數量是否大於被認為是批發購買的最低訂單數量。如果是這樣，<code>quantity</code> 將會乘以水果的每千克批發價格。否則，<code>quantity</code> 將會乘以水果的每千克零售價格。</p><p>由於乘法行末尾沒有分號，所以函數返回乘積。</p><p>如果你仔細看看 <code>calc_price()</code> 函數中水果特定函數的函數調用，這些函數調用在末尾沒有分號。這意味着，<code>price_*()</code> 函數返回的值將會被 <code>calc_price()</code> 函數返回給它的調用者。</p><p>而且 <code>calc_price()</code> 函數只有一個調用者。這個調用者在 <code>mart</code> 循環的末尾，這個調用者使用這個函數返回的值來增加 <code>total</code> 的值。</p><p>最終，當 <code>mart</code> 循環結束（當用户輸入 <code>q</code> 或 <code>quit</code> 時），存儲在變量 <code>total</code> 中的值將會被打印到屏幕上，並且用户將會被告知他/她需要支付的價格。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>這篇文章中，我使用了之前講解的 Rust 編程語言的所有主題來創建一個簡單的程序，這個程序仍然在某種程度上展示了一個現實世界的問題。</p><p>現在，我寫的代碼肯定可以用一種更符合編程習慣的方式來寫，這種方式最好地使用了 Rust 的喜愛特性，但是我還沒有講到它們！</p><p>所以，敬請關注後續的 <strong>將 Rust 帶入下一個層次</strong> 系列，並學習更多 Rust 編程語言的內容！</p><p>Rust 基礎系列到此結束。歡迎你的反饋。</p><p><em>（題圖：MJ/6d486f23-e6fe-4bef-a28d-df067ef2ec06）</em></p><hr>`,70)),a("p",null,[n[25]||(n[25]=s("via: ",-1)),e(p,{href:"https://itsfoss.com/milestone-rust-program/"},{default:l(()=>[...n[24]||(n[24]=[s("https://itsfoss.com/milestone-rust-program/",-1)])]),_:1})]),a("p",null,[n[30]||(n[30]=s("作者：",-1)),e(p,{href:"https://itsfoss.com/author/pratham/"},{default:l(()=>[...n[26]||(n[26]=[s("Pratham Patel",-1)])]),_:1}),n[31]||(n[31]=s(" 選題：",-1)),e(p,{href:"https://github.com/lkxed/"},{default:l(()=>[...n[27]||(n[27]=[s("lkxed",-1)])]),_:1}),n[32]||(n[32]=s(" 譯者：",-1)),e(p,{href:"https://github.com/Cubik65536"},{default:l(()=>[...n[28]||(n[28]=[s("Cubik65536",-1)])]),_:1}),n[33]||(n[33]=s(" 校對：",-1)),e(p,{href:"https://github.com/wxy"},{default:l(()=>[...n[29]||(n[29]=[s("wxy",-1)])]),_:1})]),a("p",null,[n[36]||(n[36]=s("本文由 ",-1)),e(p,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...n[34]||(n[34]=[s("LCTT",-1)])]),_:1}),n[37]||(n[37]=s(" 原創編譯，",-1)),e(p,{href:"https://linux.cn/"},{default:l(()=>[...n[35]||(n[35]=[s("Linux中國",-1)])]),_:1}),n[38]||(n[38]=s(" 榮譽推出",-1))])])}const R=i(r,[["render",d]]);export{k as __pageData,R as default};
