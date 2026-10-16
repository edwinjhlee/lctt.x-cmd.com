import{_ as t,a0 as o,w as r,s as d,I as a,x as n,a1 as i,A as e,ao as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const v=JSON.parse('{"title":"從 Node 到 Go：一個粗略的比較 | LCTT x X-CMD","titleTemplate":false,"description":"從 Node 到 Go：一個粗略的比較 | LCTT (201709) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從 Node 到 Go：一個粗略的比較 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從 Node 到 Go：一個粗略的比較 | LCTT (201709) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201709/20170322 From Node to Go A High-Level Comparison","title":"從 Node 到 Go：一個粗略的比較","tag":"201709","desc":""},"relativePath":"201709/20170322 From Node to Go A High-Level Comparison.md","filePath":"[post].md"}'),g={name:"201709/20170322 From Node to Go A High-Level Comparison.md"};function u(h,s,b,c,k,f){const p=o("Link");return r(),d("div",null,[s[58]||(s[58]=a("h1",{id:"從-node-到-go-一個粗略的比較",tabindex:"-1"},[n("從 Node 到 Go：一個粗略的比較 "),a("a",{class:"header-anchor",href:"#從-node-到-go-一個粗略的比較","aria-label":"Permalink to “從 Node 到 Go：一個粗略的比較”"},"​")],-1)),a("p",null,[s[2]||(s[2]=n("在 XO 公司，我們最初使用 Node 和 Ruby 構建相互連接的服務系統。我們享受 Node 帶來的明顯性能優勢，以及可以訪問已有的大型軟件包倉庫。我們也可以輕鬆地在公司內部發布並複用已有的插件和模組。極大地提高了開發效率，使得我們可以快速編寫出可拓展的和可靠的應用。而且，龐大的 Node 社區使我們的工程師向開源軟件貢獻更加容易（比如 ",-1)),i(p,{href:"https://medium.com/xo-tech/bunnybus-building-a-data-transit-system-b9647f6283e5#.l64fdvfys"},{default:e(()=>[...s[0]||(s[0]=[n("BunnyBus",-1)])]),_:1}),s[3]||(s[3]=n(" 和 ",-1)),i(p,{href:"https://medium.com/xo-tech/introducing-felicity-7b6d0b734ce#.hmloiiyx8"},{default:e(()=>[...s[1]||(s[1]=[n("Felicity",-1)])]),_:1}),s[4]||(s[4]=n("）。",-1))]),s[59]||(s[59]=l('<p>雖然我在大學時期和剛剛工作的一些時間在使用更嚴謹的編譯語言，比如 C++ 和 C#，而後來我開始使用 JavaScript。我很喜歡它的自由和靈活，但是我最近開始懷念靜態和結構化的語言，因為當時有一個同事讓我對 Go 語言產生了興趣。</p><p>我從寫 JavaScript 到寫 Go，我發現兩種語言有很多相似之處。兩者學習起來都很快並且易於上手，都具有充滿表現力的語法，並且在開發者社區中都有很多工作機會。沒有完美的編程語言，所以你應該總是選擇一個適合手頭項目的語言。在這篇文章中，我將要説明這兩種語言深層次上的關鍵區別，希望能鼓勵沒有用過 Go 語言的用户<s>可以</s>有機會使用 Go 。</p><h3 id="大體上的差異" tabindex="-1">大體上的差異 <a class="header-anchor" href="#大體上的差異" aria-label="Permalink to “大體上的差異”">​</a></h3><p>在深入細節之前，我們應該先了解一下兩種語言之間的重要區別。</p><p>Go，或稱 Golang，是 Google 在 2007 年創建的自由開源編程語言。它以快速和簡單為設計目標。Go 被直接編譯成機器碼，這就是它速度的來源。使用編譯語言調試是相當容易的，因為你可以在早期捕獲大量錯誤。Go 也是一種強類型的語言，它有助於數據完整，並可以在編譯時查找類型錯誤。</p><p>另一方面，JavaScript 是一種弱類型語言。除了忽略驗證數據的類型和真值判斷陷阱所帶來的額外負擔之外，使用弱類型語言也有自己的好處。比起使用<ruby>接口<rt>interfaces</rt></ruby>和<ruby>範型<rt>generics</rt></ruby>，<ruby>柯里化<rt>currying</rt></ruby>和<ruby>可變的形參個數<rt>flexible arity</rt></ruby>讓函數變得更加靈活。JavaScript 在運行時進行解釋，這可能導致錯誤處理和調試的問題。Node 是一款基於 Google V8 虛擬機的 JavaScript 運行庫，這使它成為一個輕量和快速的 Web 開發平台。</p><h3 id="語法" tabindex="-1">語法 <a class="header-anchor" href="#語法" aria-label="Permalink to “語法”">​</a></h3><p>作為原來的 JavaScript 開發者，Go 簡單和直觀的語法很吸引我。由於兩種語言的語法可以説都是從 C 語言演變而來的，所以它們的語法有很多相同之處。Go 被普遍認為是一種“容易學習的語言”。那是因為它的對開發者友好的工具、精簡的語法和固守慣例（LCTT 譯註：慣例優先）。</p><p>Go 包含大量有助於簡化開發的內置特性。你可以用標準 Go 構建工具把你的程序用 <code>go build</code> 命令編譯成二進制可執行文件。使用內置的測試套件進行測試只需要運行 <code>go test</code> 即可。 諸如原生支持的併發等特性甚至在語言層面上提供。</p>',9)),a("p",null,[i(p,{href:"https://golang.org/doc/faq"},{default:e(()=>[...s[5]||(s[5]=[n("Google 的 Go 開發者",-1)])]),_:1}),s[8]||(s[8]=n("認為，現在的編程太複雜了，太多的“記賬一樣，重複勞動和文書工作”。這就是為什麼 Go 的語法被設計得如此簡單和乾淨，以減少混亂、提高效率和增強可讀性。它還鼓勵開發人員編寫明確的、易於理解的代碼。Go 只有 ",-1)),i(p,{href:"https://golang.org/ref/spec#Keywords"},{default:e(()=>[...s[6]||(s[6]=[n("25 個保留關鍵字",-1)])]),_:1}),s[9]||(s[9]=n("和一種循環（",-1)),s[10]||(s[10]=a("code",null,"for",-1)),s[11]||(s[11]=n(" 循環），而不像 JavaScript 有 ",-1)),i(p,{href:"https://www.w3schools.com/js/js_reserved.asp"},{default:e(()=>[...s[7]||(s[7]=[n(" 大約 84 個關鍵字",-1)])]),_:1}),s[12]||(s[12]=n("（包括保留關鍵字字、對象、屬性和方法）。",-1))]),s[60]||(s[60]=a("p",null,"為了説明語法的一些差異和相似之處，我們來看幾個例子：",-1)),a("ul",null,[a("li",null,[s[14]||(s[14]=n("標點符號： Go 去除了所有多餘的符號以提高效率和可讀性。儘管 JavaScript 中需要符號的地方也不多（參見： ",-1)),i(p,{href:"https://en.wikipedia.org/wiki/Lisp_%28programming_language%29"},{default:e(()=>[...s[13]||(s[13]=[n("Lisp",-1)])]),_:1}),s[15]||(s[15]=n("），而且經常是可選的，但我更加喜歡 Go 的簡單。",-1))])]),s[61]||(s[61]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// JavaScript 的逗號和分號</span></span>
<span class="line"><span>for (var i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>    console.log(i);</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*JavaScript 中的標點*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 使用最少數量標點</span></span>
<span class="line"><span>for i := 0; i &lt; 10; i++ {</span></span>
<span class="line"><span>    fmt.Println(i)</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go 中的標點*
</code></pre>`,4)),a("ul",null,[a("li",null,[s[17]||(s[17]=n("賦值：由於 Go 是強類型語言，所以你在初始化變量時可以使用 ",-1)),s[18]||(s[18]=a("code",null,":=",-1)),s[19]||(s[19]=n(" 操作符來進行類型推斷，以避免",-1)),i(p,{href:"https://golang.org/doc/faq#principles"},{default:e(()=>[...s[16]||(s[16]=[n("重複聲明",-1)])]),_:1}),s[20]||(s[20]=n("，而 JavaScript 則在運行時聲明類型。",-1))])]),s[62]||(s[62]=l(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// JavaScript 賦值</span></span>
<span class="line"><span>var foo = &quot;bar&quot;;</span></span></code></pre></div><pre><code>*JavaScript 中的賦值*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 的賦值</span></span>
<span class="line"><span>var foo string //不使用類型推導</span></span>
<span class="line"><span>foo = &quot;bar&quot;</span></span>
<span class="line"><span>foo := &quot;bar&quot; //使用類型推導</span></span></code></pre></div><pre><code>*Go 的賦值*
</code></pre><ul><li>導出：在 JavaScript 中，你必須從某個模組中顯式地導出。 在 Go 中，任何大寫的函數將被默認導出。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>const Bar = () =&gt; {};</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  Bar</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*JavaScript 中的導出*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 中的導出</span></span>
<span class="line"><span>package foo // 定義包名</span></span>
<span class="line"><span>func Bar (s string) string {</span></span>
<span class="line"><span>    // Bar 將被導出</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go 中的導出*
</code></pre><ul><li>導入：在 JavaScript 中 <code>required</code> 庫是導入依賴項和模組所必需的，而 Go 則利用原生的 <code>import</code> 關鍵字通過包的路徑導入模組。另一個區別是，與 Node 的中央 NPM 存儲庫不同，Go 使用 URL 作為路徑來導入非標準庫的包，這是為了從包的源碼倉庫直接克隆依賴。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Javascript 的導入</span></span>
<span class="line"><span>var foo = require(&#39;foo&#39;);</span></span>
<span class="line"><span>foo.bar();</span></span></code></pre></div><pre><code>*JavaScript 的導入*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go 的導入</span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>    &quot;fmt&quot;</span><span> // Go 的標準庫部分</span></span>
<span class="line"><span>    &quot;github.com/foo/foo&quot;</span><span> // 直接從倉庫導入</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>foo.Bar()</span></span></code></pre></div><pre><code>*Go 的導入*
</code></pre><ul><li>返回值：通過 Go 的多值返回特性可以優雅地傳遞和處理返回值和錯誤，並且通過傳遞引用減少了不正確的值傳遞。在 JavaScript 中需要通過一個對象或者數組來返回多個值。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Javascript - 返回多值</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>    return {a: 1, b: 2};</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const { a, b } = foo();</span></span></code></pre></div><pre><code>*JavaScript 的返回*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Go - 返回多值</span></span>
<span class="line"><span>func foo() (int, int) {</span></span>
<span class="line"><span>    return 1, 2</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>a, b := foo()</span></span></code></pre></div><pre><code>*Go 的返回*
</code></pre><ul><li>錯誤處理：Go 推薦在錯誤出現的地方捕獲它們，而不是像 Node 一樣在回調中讓錯誤冒泡。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// Node 的錯誤處理</span></span>
<span class="line"><span>foo(&#39;bar&#39;, function(err, data) {</span></span>
<span class="line"><span>    // 處理錯誤</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*JavaScript 的錯誤處理*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>//Go 的錯誤處理</span></span>
<span class="line"><span>foo, err := bar()</span></span>
<span class="line"><span>if err != nil {</span></span>
<span class="line"><span>    // 用 defer、 panic、 recover 或 log.fatal 等等處理錯誤.</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go  的錯誤處理*
</code></pre><ul><li>可變參數函數：Go 和 JavaScript 的函數都支持傳入不定數量的參數。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function foo (...args) {</span></span>
<span class="line"><span>    console.log(args.length);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>foo(); // 0</span></span>
<span class="line"><span>foo(1, 2, 3); // 3</span></span></code></pre></div><pre><code>*JavaScript 中的可變參數函數*
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>func foo (args ...int) {</span></span>
<span class="line"><span>    fmt.Println(len(args))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    foo() // 0</span></span>
<span class="line"><span>    foo(1,2,3) // 3</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>*Go 中的可變參數函數*
</code></pre><h3 id="社區" tabindex="-1">社區 <a class="header-anchor" href="#社區" aria-label="Permalink to “社區”">​</a></h3>`,30)),a("p",null,[s[22]||(s[22]=n("當比較 Go 和 Node 提供的編程範式哪種更方便時，兩邊都有不同的擁護者。Node 在軟件包數量和社區的大小上完全勝過了 Go。Node 包管理器（NPM），是世界上最大的軟件倉庫，擁有",-1)),i(p,{href:"http://www.modulecounts.com/"},{default:e(()=>[...s[21]||(s[21]=[n("超過 410,000 個軟件包，每天以 555 個新軟件包的驚人速度增長",-1)])]),_:1}),s[23]||(s[23]=n("。這個數字可能看起來令人吃驚（確實是），但是需要注意的是，這些包許多是重複的，且質量不足以用在生產環境。 相比之下，Go 大約有 13 萬個包。",-1))]),s[63]||(s[63]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/800/0*0oUnVVKxuUrvVG3F.",alt:""})],-1)),s[64]||(s[64]=a("p",null,[a("em",null,"Node 和 Go 包的數量")],-1)),a("p",null,[s[25]||(s[25]=n("儘管 Node 和 Go 歲數相仿，但 JavaScript 使用更加廣泛，並擁有巨大的開發者和開源社區。因為 Node 是為所有人開發的，並在開始的時候就帶有一個強壯的包管理器，而 Go 是特地為 Google 開發的。下面的",-1)),i(p,{href:"http://spectrum.ieee.org/static/interactive-the-top-programming-languages-2016"},{default:e(()=>[...s[24]||(s[24]=[n("Spectrum 排行榜",-1)])]),_:1}),s[26]||(s[26]=n("顯示了當前流行的的頂尖 Web 開發語言。",-1))]),s[65]||(s[65]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/800/0*o2SmnUo67xeaFbYZ.",alt:""})],-1)),s[66]||(s[66]=a("p",null,[a("em",null,"Web 開發語言排行榜前 7 名")],-1)),a("p",null,[s[28]||(s[28]=n("JavaScript 的受歡迎程度近年來似乎保持相對穩定，而 ",-1)),i(p,{href:"http://www.tiobe.com/tiobe-index/"},{default:e(()=>[...s[27]||(s[27]=[n("Go 一直在保持上升趨勢",-1)])]),_:1}),s[29]||(s[29]=n("。",-1))]),s[67]||(s[67]=a("p",null,[a("img",{src:"https://cdn-images-1.medium.com/max/800/0*zX5Yg3whLczpSif_.",alt:""})],-1)),s[68]||(s[68]=a("p",null,[a("em",null,"編程語言趨勢")],-1)),s[69]||(s[69]=a("h3",{id:"性能",tabindex:"-1"},[n("性能 "),a("a",{class:"header-anchor",href:"#性能","aria-label":"Permalink to “性能”"},"​")],-1)),a("p",null,[s[31]||(s[31]=n("如果你的主要關注點是速度呢？當今似乎人們比以前更重視性能的優化。用户不喜歡等待信息。 事實上，如果網頁的加載時間超過 3 秒，",-1)),i(p,{href:"https://hostingfacts.com/internet-facts-stats-2016/"},{default:e(()=>[...s[30]||(s[30]=[n("40％ 的用户會放棄訪問您的網站",-1)])]),_:1}),s[32]||(s[32]=n("。",-1))]),a("p",null,[s[34]||(s[34]=n("因為它的非阻塞異步 I/O，Node 經常被認為是高性能的語言。另外，正如我之前提到的，Node 運行在針對動態語言進行了優化的 Google V8 引擎上。而 Go 的設計也考慮到速度。",-1)),i(p,{href:"https://golang.org/doc/faq"},{default:e(()=>[...s[33]||(s[33]=[n("Google 的開發者們",-1)])]),_:1}),s[35]||(s[35]=n("通過建立了一個“充滿表現力而輕量級的類型系統；併發和垃圾回收機制；強制地指定依賴版本等等”，達成了這一目標。",-1))]),a("p",null,[s[37]||(s[37]=n("我運行了一些測試來比較 Node 和 Go 之間的性能。這些測試注重於語言提供的初級能力。如果我準備測試例如 HTTP 請求或者 CPU 密集型運算，我會使用 Go 語言級別的併發工具（goroutines/channels）。但是我更注重於各個語言提供的基本特性（參見 ",-1)),i(p,{href:"https://medium.com/xo-tech/concurrency-in-three-flavors-51ed709876fb#.khvqrttxa"},{default:e(()=>[...s[36]||(s[36]=[n("三種併發方法",-1)])]),_:1}),s[38]||(s[38]=n(" 瞭解關於 goroutines 和 channels 的更多知識）。",-1))]),s[70]||(s[70]=l(`<p>我在基準測試中也加入了 Python，所以無論如何我們對 Node 和 Go 的結果都很滿意。</p><h4 id="循環-算術" tabindex="-1">循環/算術 <a class="header-anchor" href="#循環-算術" aria-label="Permalink to “循環/算術”">​</a></h4><p>迭代十億項並把它們相加：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var r = 0;</span></span>
<span class="line"><span>for (var c = 0; c &lt; 1000000000; c++) {</span></span>
<span class="line"><span>    r += c;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Node</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    var r int</span></span>
<span class="line"><span>    for c := 0; c &lt; 1000000000; c++ {</span></span>
<span class="line"><span>        r += c</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Go</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>sum(xrange(1000000000))</span></span></code></pre></div><p><em>Python</em></p><p><img src="https://cdn-images-1.medium.com/max/1600/1*5u0Q9nmpkcsp2ltzmLO6CQ.png" alt=""></p><p><em>結果</em></p><p>這裏的輸家無疑是 Python，花了超過 7 秒的 CPU 時間。而 Node 和 Go 都相當高效，分別用了 900 ms 和 408 ms。</p><p><em>修正：由於一些評論表明 Python 的性能還可以提高。我更新了結果來反映這些變化。同時，使用 PyPy 大大地提高了性能。當使用 Python 3.6.1 和 PyPy 3.5.7 運行時，性能提升到 1.234 秒，但仍然不及 Go 和 Node 。</em></p><h4 id="i-o" tabindex="-1">I/O <a class="header-anchor" href="#i-o" aria-label="Permalink to “I/O”">​</a></h4><p>遍歷一百萬個數字並將其寫入一個文件。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span>var wstream = fs.createWriteStream(&#39;node&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (var c = 0; c &lt; 1000000; ++c) {</span></span>
<span class="line"><span>  wstream.write(c.toString());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>wstream.end();</span></span></code></pre></div><p><em>Node</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;bufio&quot;</span></span>
<span class="line"><span>	&quot;os&quot;</span></span>
<span class="line"><span>	&quot;strconv&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	file, _ := os.Create(&quot;go&quot;)</span></span>
<span class="line"><span>	b := bufio.NewWriter(file)</span></span>
<span class="line"><span>	for c := 0; c &lt; 1000000; c++ {</span></span>
<span class="line"><span>		num := strconv.Itoa(c)</span></span>
<span class="line"><span>		b.WriteString(num)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	file.Close()</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Go</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>with open(&quot;python&quot;, &quot;a&quot;) as text_file:</span></span>
<span class="line"><span>    for i in range(1000000):</span></span>
<span class="line"><span>        text_file.write(str(i))</span></span></code></pre></div><p><em>Python</em></p><p><img src="https://cdn-images-1.medium.com/max/1600/1*gHZoWV5wIYRmY18ehpjnUQ.png" alt=""></p><p><em>結果</em></p><p>Python 以 7.82 秒再次排名第三。 這次測試中，Node 和 Go 之間的差距很大，Node 花費大約 1.172 秒，Go 花費了 213 毫秒。真正令人印象深刻的是，Go 大部分的處理時間花費在編譯上。如果我們將代碼編譯，以二進制運行，這個 I/O 測試僅花費 78 毫秒——要比 Node 快 15 倍。</p><p><em>修正：修改了 Go 代碼以實現緩存 I/O。</em></p><h4 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to “冒泡排序”">​</a></h4><p>將含有十個元素的數組排序一千萬次。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>function bubbleSort(input) {</span></span>
<span class="line"><span>    var n = input.length;</span></span>
<span class="line"><span>    var swapped = true;</span></span>
<span class="line"><span>    while (swapped) {</span></span>
<span class="line"><span>        swapped = false;</span></span>
<span class="line"><span>        for (var i = 0; i &lt; n; i++) {</span></span>
<span class="line"><span>            if (input[i - 1] &gt; input [i]) {</span></span>
<span class="line"><span>                [input[i], input[i - 1]] = [input[i - 1], input[i]];</span></span>
<span class="line"><span>                swapped = true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for (var c = 0; c &lt; 1000000; c++) {</span></span>
<span class="line"><span>    const toBeSorted = [1, 3, 2, 4, 8, 6, 7, 2, 3, 0];</span></span>
<span class="line"><span>    bubbleSort(toBeSorted);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Node</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var toBeSorted [10]int = [10]int{1, 3, 2, 4, 8, 6, 7, 2, 3, 0}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func bubbleSort(input [10]int) {</span></span>
<span class="line"><span>    n := len(input)</span></span>
<span class="line"><span>    swapped := true</span></span>
<span class="line"><span>    for swapped {</span></span>
<span class="line"><span>        swapped = false</span></span>
<span class="line"><span>        for i := 1; i &lt; n; i++ {</span></span>
<span class="line"><span>            if input[i-1] &gt; input[i] {</span></span>
<span class="line"><span>                input[i], input[i-1] = input[i-1], input[i]</span></span>
<span class="line"><span>                swapped = true</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    for c := 0; c &lt; 1000000; c++ {</span></span>
<span class="line"><span>        bubbleSort(toBeSorted)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em>Go</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>def bubbleSort(input):</span></span>
<span class="line"><span>    length = len(input)</span></span>
<span class="line"><span>    swapped = True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    while swapped:</span></span>
<span class="line"><span>        swapped = False</span></span>
<span class="line"><span>        for i in range(1,length):</span></span>
<span class="line"><span>            if input[i - 1] &gt; input[i]:</span></span>
<span class="line"><span>                input[i], input[i - 1] = input[i - 1], input[i]</span></span>
<span class="line"><span>                swapped = True</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>for i in range(1000000):</span></span>
<span class="line"><span>    toBeSorted = [1, 3, 2, 4, 8, 6, 7, 2, 3, 0]</span></span>
<span class="line"><span>    bubbleSort(toBeSorted)</span></span></code></pre></div><p><em>Python</em></p><p><img src="https://cdn-images-1.medium.com/max/800/1*0_2-i-GwQ0l0n80pECHEUQ.png" alt=""></p><p><em>結果</em></p><p>像剛才一樣，Python 的表現是最差的，大約花費 15 秒完成了任務。 Go 完成任務的速度是 Node 的 16 倍。</p><h4 id="判決" tabindex="-1">判決 <a class="header-anchor" href="#判決" aria-label="Permalink to “判決”">​</a></h4><p>Go 無疑是這三個測試中的贏家，而 Node 大部分表現都很出色。Python 也表現不錯。要清楚，性能不是選擇編程語言需要考慮的全部內容。如果您的應用不需要處理大量數據，那麼 Node 和 Go 之間的性能差異可能是微不足道的。 有關性能的一些其他比較，請參閲以下內容：</p>`,38)),a("ul",null,[a("li",null,[i(p,{href:"https://jaxbot.me/articles/node-vs-go-2014"},{default:e(()=>[...s[39]||(s[39]=[n("Node Vs. Go",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://hashnode.com/post/comparison-nodejs-php-c-go-python-and-ruby-cio352ydg000ym253frmfnt70"},{default:e(()=>[...s[40]||(s[40]=[n("Multiple Language Performance Test",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://benchmarksgame.alioth.debian.org/u64q/compare.php?lang=go&amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;lang2=node"},{default:e(()=>[...s[41]||(s[41]=[n("Benchmarks Game",-1)])]),_:1})])]),s[71]||(s[71]=a("h3",{id:"結論",tabindex:"-1"},[n("結論 "),a("a",{class:"header-anchor",href:"#結論","aria-label":"Permalink to “結論”"},"​")],-1)),s[72]||(s[72]=a("p",null,"這個帖子不是為了證明一種語言比另一種語言更好。由於各種原因，每種編程語言都在軟件開發社區中佔有一席之地。 我的意圖是強調 Go 和 Node 之間的差異，並且促進展示一種新的 Web 開發語言。 在為一個項目選擇語言時，有各種因素需要考慮，比如開發人員的熟悉程度、花費和實用性。 我鼓勵在決定哪種語言適合您時進行一次徹底的底層分析。",-1)),s[73]||(s[73]=a("p",null,"正如我們所看到的，Go 有如下的優點：接近底層語言的性能，簡單的語法和相對簡單的學習曲線使它成為構建可拓展和安全的 Web 應用的理想選擇。隨着 Go 的使用率和社區活動的快速增長，它將會成為現代網絡開發中的重要角色。話雖如此，我相信如果 Node 被正確地實現，它正在向正確的方向努力，仍然是一種強大而有用的語言。它具有大量的追隨者和活躍的社區，使其成為一個簡單的平台，可以讓 Web 應用在任何時候啓動和運行。",-1)),s[74]||(s[74]=a("h3",{id:"資料",tabindex:"-1"},[n("資料 "),a("a",{class:"header-anchor",href:"#資料","aria-label":"Permalink to “資料”"},"​")],-1)),s[75]||(s[75]=a("p",null,"如果你對學習 Go 語言感興趣，可以參閲下面的資源：",-1)),a("ul",null,[a("li",null,[i(p,{href:"https://golang.org/doc/#learning"},{default:e(()=>[...s[42]||(s[42]=[n("Golang 網站",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://github.com/golang/go/wiki/Learn"},{default:e(()=>[...s[43]||(s[43]=[n("Golang Wiki",-1)])]),_:1})]),a("li",null,[i(p,{href:"https://www.reddit.com/r/golang/"},{default:e(()=>[...s[44]||(s[44]=[n("Golang Subreddit",-1)])]),_:1})])]),s[76]||(s[76]=a("hr",null,null,-1)),a("p",null,[s[46]||(s[46]=n("via: ",-1)),i(p,{href:"https://medium.com/xo-tech/from-node-to-go-a-high-level-comparison-56c8b717324a#.byltlz535"},{default:e(()=>[...s[45]||(s[45]=[n("https://medium.com/xo-tech/from-node-to-go-a-high-level-comparison-56c8b717324a#.byltlz535",-1)])]),_:1})]),a("p",null,[s[50]||(s[50]=n("作者：",-1)),i(p,{href:"https://medium.com/@johnstamatakos?source=post_header_lockup"},{default:e(()=>[...s[47]||(s[47]=[n("John Stamatakos",-1)])]),_:1}),s[51]||(s[51]=n(" 譯者：",-1)),i(p,{href:"https://github.com/trnhoe"},{default:e(()=>[...s[48]||(s[48]=[n("trnhoe",-1)])]),_:1}),s[52]||(s[52]=n(" 校對：",-1)),i(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[49]||(s[49]=[n("wxy",-1)])]),_:1})]),a("p",null,[s[55]||(s[55]=n("本文由 ",-1)),i(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[53]||(s[53]=[n("LCTT",-1)])]),_:1}),s[56]||(s[56]=n(" 原創編譯，",-1)),i(p,{href:"https://linux.cn/"},{default:e(()=>[...s[54]||(s[54]=[n("Linux中國",-1)])]),_:1}),s[57]||(s[57]=n(" 榮譽推出",-1))])])}const G=t(g,[["render",u]]);export{v as __pageData,G as default};
