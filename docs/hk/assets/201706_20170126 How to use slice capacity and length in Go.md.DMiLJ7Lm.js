import{_ as t,a0 as o,w as r,s as d,ao as i,I as n,a1 as l,A as e,x as a}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const T=JSON.parse('{"title":"在 Go 中如何使用切片的容量和長度 | LCTT x X-CMD","titleTemplate":false,"description":"在 Go 中如何使用切片的容量和長度 | LCTT (201706) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"在 Go 中如何使用切片的容量和長度 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"在 Go 中如何使用切片的容量和長度 | LCTT (201706) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201706/20170126 How to use slice capacity and length in Go","title":"在 Go 中如何使用切片的容量和長度","tag":"201706","desc":""},"relativePath":"201706/20170126 How to use slice capacity and length in Go.md","filePath":"[post].md"}'),u={name:"201706/20170126 How to use slice capacity and length in Go.md"};function c(g,s,h,m,f,k){const p=o("Link");return r(),d("div",null,[s[31]||(s[31]=i(`<h1 id="在-go-中如何使用切片的容量和長度" tabindex="-1">在 Go 中如何使用切片的容量和長度 <a class="header-anchor" href="#在-go-中如何使用切片的容量和長度" aria-label="Permalink to “在 Go 中如何使用切片的容量和長度”">​</a></h1><p>快速測試 - 下面的代碼輸出什麼？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div>`,3)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/7PgUqBdZ6Z"},{default:e(()=>[...s[0]||(s[0]=[a("在 Go Playground 運行一下",-1)])]),_:1})])]),s[32]||(s[32]=i(`<p>如果你猜測的是 <code>[0 0 0 0 0 0 1 2 3 4]</code>，那你是對的。</p><p><em>等等，什麼？</em> 為什麼不是 <code>[0 1 2 3 4]</code>?</p><p>如果你在測試中做錯了，你也不用擔心。這是在過渡到 Go 語言的過程中相當常見的錯誤，在這篇文章中，我們將説明為什麼輸出不是你預期的，以及如何利用 Go 的細微差別來使你的代碼更有效率。</p><h3 id="切片-vs-數組" tabindex="-1">切片 vs 數組 <a class="header-anchor" href="#切片-vs-數組" aria-label="Permalink to “切片 vs 數組”">​</a></h3><p>在 Go 中同時有數組（array）和切片（slice）。這可能令人困惑，但一旦你習慣了，你會喜歡上它。請相信我。</p><p>切片和數組之間存在許多差異，但我們要在本文中重點介紹的內容是數組的大小是其類型的一部分，而切片可以具有動態大小，因為它們是圍繞數組的封裝。</p><p>這在實踐中意味着什麼？那麼假設我們有數組 <code>val a [10]int</code>。該數組具有固定大小，且無法更改。如果我們調用 <code>len(a)</code>，它總是返回 <code>10</code>，因為這個大小是類型的一部分。因此，如果你突然需要在數組中超過 10 個項，則必須創建一個完全不同類型的新對象，例如 <code>val b [11]int</code>，然後將所有值從 <code>a</code> 複製到 <code>b</code>。</p><p>在特定情況下，含有集合大小的數組是有價值的，但一般而言，這不是開發人員想要的。相反，他們希望在 Go 中使用類似於數組的東西，但是隨着時間的推移，它們能夠隨時增長。一個粗略的方式是創建一個比它需要大得多的數組，然後將數組的一個子集視為數組。下面的代碼是個例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var vals [20]int  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals[i] = i * i</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>subsetLen := 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fmt.Println(&quot;The subset of our array has a length of:&quot;, subsetLen)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Add a new item to our array</span></span>
<span class="line"><span>vals[subsetLen] = 123  </span></span>
<span class="line"><span>subsetLen++  </span></span>
<span class="line"><span>fmt.Println(&quot;The subset of our array has a length of:&quot;, subsetLen)</span></span></code></pre></div>`,9)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/Np6-NEohm2"},{default:e(()=>[...s[1]||(s[1]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[33]||(s[33]=i(`<p>在代碼中，我們有一個長度為 <code>20</code> 的數組，但是由於我們只使用一個子集，代碼中我們可以假定數組的長度是 <code>5</code>，然後在我們向數組中添加一個新的項之後是 <code>6</code>。</p><p>這是（非常粗略地説）切片是如何工作的。它們包含一個具有設置大小的數組，就像我們前面的例子中的數組一樣，它的大小為 <code>20</code>。</p><p>它們還跟蹤程序中使用的數組的子集 - 這就是 <code>append</code> 屬性，它類似於上一個例子中的 <code>subsetLen</code> 變量。</p><p>最後，一個切片還有一個 <code>capacity</code>，類似於前面例子中我們的數組的總長度（<code>20</code>）。這是很有用的，因為它會告訴你的子集在無法容納切片數組之前可以增長的大小。當發生這種情況時，需要分配一個新的數組，但所有這些邏輯都隱藏在 <code>append</code> 函數的後面。</p><p>簡而言之，使用 <code>append</code> 函數組合切片給我們一個非常類似於數組的類型，但隨着時間的推移，它可以處理更多的元素。</p><p>我們再來看一下前面的例子，但是這次我們將使用切片而不是數組。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>var vals []int  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>  fmt.Println(&quot;The length of our slice is:&quot;, len(vals))</span></span>
<span class="line"><span>  fmt.Println(&quot;The capacity of our slice is:&quot;, cap(vals))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Add a new item to our array</span></span>
<span class="line"><span>vals = append(vals, 123)  </span></span>
<span class="line"><span>fmt.Println(&quot;The length of our slice is:&quot;, len(vals))  </span></span>
<span class="line"><span>fmt.Println(&quot;The capacity of our slice is:&quot;, cap(vals))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Accessing items is the same as an array</span></span>
<span class="line"><span>fmt.Println(vals[5])  </span></span>
<span class="line"><span>fmt.Println(vals[2])</span></span></code></pre></div>`,7)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/M_qaNGVbC-"},{default:e(()=>[...s[2]||(s[2]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[34]||(s[34]=i(`<p>我們仍然可以像數組一樣訪問我們的切片中的元素，但是通過使用切片和 <code>append</code> 函數，我們不再需要考慮背後數組的大小。我們仍然可以通過使用 <code>len</code> 和 <code>cap</code> 函數來計算出這些東西，但是我們不用擔心太多。簡潔吧？</p><h3 id="回到測試" tabindex="-1">回到測試 <a class="header-anchor" href="#回到測試" aria-label="Permalink to “回到測試”">​</a></h3><p>記住這點，讓我們回顧前面的測試，看下什麼出錯了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div><p>當調用 <code>make</code> 時，我們允許最多傳入 3 個參數。第一個是我們分配的類型，第二個是類型的“長度”，第三個是類型的“容量”（<em>這個參數是可選的</em>）。</p><p>通過傳遞參數 <code>make([]int, 5)</code>，我們告訴程序我們要創建一個長度為 5 的切片，在這種情況下，默認的容量與長度相同 - 本例中是 5。</p><p>雖然這可能看起來像我們想要的那樣，這裏的重要區別是我們告訴我們的切片，我們要將“長度”和“容量”設置為 5，假設你想要在初始的 5 個元素_之後_添加新的元素，我們接着調用 <code>append</code> 函數，那麼它會增加容量的大小，並且會在切片的最後添加新的元素。</p><p>如果在代碼中添加一條 <code>Println()</code> 語句，你可以看到容量的變化。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>fmt.Println(&quot;Capacity was:&quot;, cap(vals))  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals = append(vals, i)</span></span>
<span class="line"><span>  fmt.Println(&quot;Capacity is now:&quot;, cap(vals))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div>`,9)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/d6OUulTYM7"},{default:e(()=>[...s[3]||(s[3]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[35]||(s[35]=i(`<p>最後，我們最終得到 <code>[0 0 0 0 0 0 1 2 3 4]</code> 的輸出而不是希望的 <code>[0 1 2 3 4]</code>。</p><p>如何修復它呢？好的，這有幾種方法，我們將講解兩種，你可以選取任何一種在你的場景中最有用的方法。</p><h4 id="直接使用索引寫入而不是-append" tabindex="-1">直接使用索引寫入而不是 <code>append</code> <a class="header-anchor" href="#直接使用索引寫入而不是-append" aria-label="Permalink to “直接使用索引寫入而不是 append”">​</a></h4><p>第一種修復是保留 <code>make</code> 調用不變，並且顯式地使用索引來設置每個元素。這樣，我們就得到如下的代碼：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>vals := make([]int, 5)  </span></span>
<span class="line"><span>for i := 0; i &lt; 5; i++ {  </span></span>
<span class="line"><span>  vals[i] = i</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fmt.Println(vals)</span></span></code></pre></div>`,5)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/JI8Fx3fJCU"},{default:e(()=>[...s[4]||(s[4]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[36]||(s[36]=i(`<p>在這種情況下，我們設置的值恰好與我們要使用的索引相同，但是你也可以獨立跟蹤索引。</p><p>比如，如果你想要獲取 map 的鍵，你可以使用下面的代碼。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {  </span></span>
<span class="line"><span>  fmt.Println(keys(map[string]struct{}{</span></span>
<span class="line"><span>    &quot;dog&quot;: struct{}{},</span></span>
<span class="line"><span>    &quot;cat&quot;: struct{}{},</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func keys(m map[string]struct{}) []string {  </span></span>
<span class="line"><span>  ret := make([]string, len(m))</span></span>
<span class="line"><span>  i := 0</span></span>
<span class="line"><span>  for key := range m {</span></span>
<span class="line"><span>    ret[i] = key</span></span>
<span class="line"><span>    i++</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return ret</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/kIKxkdX35B"},{default:e(()=>[...s[5]||(s[5]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[37]||(s[37]=i(`<p>這樣做很好，因為我們知道我們返回的切片的長度將與 map 的長度相同，因此我們可以用該長度初始化我們的切片，然後將每個元素分配到適當的索引中。這種方法的缺點是我們必須跟蹤 <code>i</code>，以便了解每個索引要設置的值。</p><p>這就讓我們引出了第二種方法……</p><h4 id="使用-0-作為你的長度並指定容量" tabindex="-1">使用 <code>0</code> 作為你的長度並指定容量 <a class="header-anchor" href="#使用-0-作為你的長度並指定容量" aria-label="Permalink to “使用 0 作為你的長度並指定容量”">​</a></h4><p>與其跟蹤我們要添加的值的索引，我們可以更新我們的 <code>make</code> 調用，並在切片類型之後提供兩個參數。第一個，我們的新切片的長度將被設置為 <code>0</code>，因為我們還沒有添加任何新的元素到切片中。第二個，我們新切片的容量將被設置為 map 參數的長度，因為我們知道我們的切片最終會添加許多字符串。</p><p>這會如前面的例子那樣仍舊會在背後構建相同的數組，但是現在當我們調用 <code>append</code> 時，它會將它們放在切片開始處，因為切片的長度是 0。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {  </span></span>
<span class="line"><span>  fmt.Println(keys(map[string]struct{}{</span></span>
<span class="line"><span>    &quot;dog&quot;: struct{}{},</span></span>
<span class="line"><span>    &quot;cat&quot;: struct{}{},</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func keys(m map[string]struct{}) []string {  </span></span>
<span class="line"><span>  ret := make([]string, 0, len(m))</span></span>
<span class="line"><span>  for key := range m {</span></span>
<span class="line"><span>    ret = append(ret, key)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return ret</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/h5hVAHmqJm"},{default:e(()=>[...s[6]||(s[6]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[38]||(s[38]=i(`<h3 id="如果-append-處理它-為什麼我們還要擔心容量呢" tabindex="-1">如果 <code>append</code> 處理它，為什麼我們還要擔心容量呢？ <a class="header-anchor" href="#如果-append-處理它-為什麼我們還要擔心容量呢" aria-label="Permalink to “如果 append 處理它，為什麼我們還要擔心容量呢？”">​</a></h3><p>接下來你可能會問：“如果 <code>append</code> 函數可以為我增加切片的容量，那我們為什麼要告訴程序容量呢？”</p><p>事實是，在大多數情況下，你不必擔心這太多。如果它使你的代碼變得更復雜，只需用 <code>var vals []int</code> 初始化你的切片，然後讓 <code>append</code> 函數處理接下來的事。</p><p>但這種情況是不同的。它並不是聲明容量困難的例子，實際上這很容易確定我們的切片的最後容量，因為我們知道它將直接映射到提供的 map 中。因此，當我們初始化它時，我們可以聲明切片的容量，並免於讓我們的程序執行不必要的內存分配。</p><p>如果要查看額外的內存分配情況，請在 Go Playground 上運行以下代碼。每次增加容量，程序都需要做一次內存分配。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {  </span></span>
<span class="line"><span>  fmt.Println(keys(map[string]struct{}{</span></span>
<span class="line"><span>    &quot;dog&quot;:       struct{}{},</span></span>
<span class="line"><span>    &quot;cat&quot;:       struct{}{},</span></span>
<span class="line"><span>    &quot;mouse&quot;:     struct{}{},</span></span>
<span class="line"><span>    &quot;wolf&quot;:      struct{}{},</span></span>
<span class="line"><span>    &quot;alligator&quot;: struct{}{},</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func keys(m map[string]struct{}) []string {  </span></span>
<span class="line"><span>  var ret []string</span></span>
<span class="line"><span>  fmt.Println(cap(ret))</span></span>
<span class="line"><span>  for key := range m {</span></span>
<span class="line"><span>    ret = append(ret, key)</span></span>
<span class="line"><span>    fmt.Println(cap(ret))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return ret</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/fDbAxtAjLF"},{default:e(()=>[...s[7]||(s[7]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[39]||(s[39]=i(`<p>現在將此與相同的代碼進行比較，但具有預定義的容量。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {  </span></span>
<span class="line"><span>  fmt.Println(keys(map[string]struct{}{</span></span>
<span class="line"><span>    &quot;dog&quot;:       struct{}{},</span></span>
<span class="line"><span>    &quot;cat&quot;:       struct{}{},</span></span>
<span class="line"><span>    &quot;mouse&quot;:     struct{}{},</span></span>
<span class="line"><span>    &quot;wolf&quot;:      struct{}{},</span></span>
<span class="line"><span>    &quot;alligator&quot;: struct{}{},</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func keys(m map[string]struct{}) []string {  </span></span>
<span class="line"><span>  ret := make([]string, 0, len(m))</span></span>
<span class="line"><span>  fmt.Println(cap(ret))</span></span>
<span class="line"><span>  for key := range m {</span></span>
<span class="line"><span>    ret = append(ret, key)</span></span>
<span class="line"><span>    fmt.Println(cap(ret))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return ret</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2)),n("p",null,[n("em",null,[l(p,{href:"https://play.golang.org/p/nwT8X9-7eQ"},{default:e(()=>[...s[8]||(s[8]=[a("在 Go Playground 中運行",-1)])]),_:1})])]),s[40]||(s[40]=i('<p>在第一個代碼示例中，我們的容量從 <code>0</code> 開始，然後增加到 <code>1</code>、 <code>2</code>、 <code>4</code>, 最後是 <code>8</code>，這意味着我們不得不分配 5 次數組，最後一個容納我們切片的數組的容量是 <code>8</code>，這比我們最終需要的要大。</p><p>另一方面，我們的第二個例子開始和結束都是相同的容量（<code>5</code>），它只需要在 <code>keys()</code> 函數的開頭分配一次。我們還避免了浪費任何額外的內存，並返回一個能放下這個數組的完美大小的切片。</p><h3 id="不要過分優化" tabindex="-1">不要過分優化 <a class="header-anchor" href="#不要過分優化" aria-label="Permalink to “不要過分優化”">​</a></h3><p>如前所述，我通常不鼓勵任何人做這樣的小優化，但如果最後大小的效果真的很明顯，那麼我強烈建議你嘗試為切片設置適當的容量或長度。</p><p>這不僅有助於提高程序的性能，還可以通過明確説明輸入的大小和輸出的大小之間的關係來幫助澄清你的代碼。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3>',6)),n("blockquote",null,[s[12]||(s[12]=n("p",null,"你好！我寫了很多關於Go、Web 開發和其他我覺得有趣的話題。",-1)),n("p",null,[s[10]||(s[10]=a("如果你想跟上最新的文章，請",-1)),l(p,{href:"https://www.calhoun.io/how-to-use-slice-capacity-and-length-in-go/?utm_source=golangweekly&utm_medium=email#mailing-list-form"},{default:e(()=>[...s[9]||(s[9]=[a("註冊我的郵件列表",-1)])]),_:1}),s[11]||(s[11]=a("。我會給你發送我新書的樣例、Go 的 Web 開發、以及每當有新文章（通常每週 1-2 次）會給你發送郵件。",-1))]),s[13]||(s[13]=n("p",null,"哦，我保證不會發垃圾郵件。我像你一樣討厭它 😃",-1))]),s[41]||(s[41]=n("p",null,"本文並不是對切片或數組之間差異的詳細討論，而是簡要介紹了容量和長度如何影響切片，以及它們在方案中的用途。",-1)),s[42]||(s[42]=n("p",null,"為了進一步閲讀，我強烈推薦 Go Blog中的以下文章：",-1)),n("ul",null,[n("li",null,[l(p,{href:"https://blog.golang.org/go-slices-usage-and-internals"},{default:e(()=>[...s[14]||(s[14]=[a("Go Slices：使用及內部",-1)])]),_:1})]),n("li",null,[l(p,{href:"https://blog.golang.org/slices"},{default:e(()=>[...s[15]||(s[15]=[a("數組、切片（和字符串）：“append” 的機制",-1)])]),_:1})]),n("li",null,[l(p,{href:"https://github.com/golang/go/wiki/SliceTricks"},{default:e(()=>[...s[16]||(s[16]=[a("切片技巧",-1)])]),_:1})])]),s[43]||(s[43]=n("hr",null,null,-1)),s[44]||(s[44]=n("p",null,"作者簡介：",-1)),s[45]||(s[45]=n("p",null,"Jon 是一名軟件顧問，也是 《Web Development with Go》 一書的作者。在此之前，他創立了 EasyPost，一家 Y Combinator 支持的創業公司，並在 Google 工作。",-1)),n("p",null,[l(p,{href:"https://www.usegolang.com"},{default:e(()=>[...s[17]||(s[17]=[a("https://www.usegolang.com",-1)])]),_:1})]),s[46]||(s[46]=n("hr",null,null,-1)),n("p",null,[s[19]||(s[19]=a("via: ",-1)),l(p,{href:"https://www.calhoun.io/how-to-use-slice-capacity-and-length-in-go"},{default:e(()=>[...s[18]||(s[18]=[a("https://www.calhoun.io/how-to-use-slice-capacity-and-length-in-go",-1)])]),_:1})]),n("p",null,[s[23]||(s[23]=a("作者：",-1)),l(p,{href:"https://www.calhoun.io/hire-me"},{default:e(()=>[...s[20]||(s[20]=[a("Jon Calhoun",-1)])]),_:1}),s[24]||(s[24]=a(" 譯者：",-1)),l(p,{href:"https://github.com/geekpi"},{default:e(()=>[...s[21]||(s[21]=[a("geekpi",-1)])]),_:1}),s[25]||(s[25]=a(" 校對：",-1)),l(p,{href:"https://github.com/wxy"},{default:e(()=>[...s[22]||(s[22]=[a("wxy",-1)])]),_:1})]),n("p",null,[s[28]||(s[28]=a("本文由 ",-1)),l(p,{href:"https://github.com/LCTT/TranslateProject"},{default:e(()=>[...s[26]||(s[26]=[a("LCTT",-1)])]),_:1}),s[29]||(s[29]=a(" 原創編譯，",-1)),l(p,{href:"https://linux.cn/"},{default:e(()=>[...s[27]||(s[27]=[a("Linux中國",-1)])]),_:1}),s[30]||(s[30]=a(" 榮譽推出",-1))])])}const _=t(u,[["render",c]]);export{T as __pageData,_ as default};
