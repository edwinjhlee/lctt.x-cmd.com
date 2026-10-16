import{_ as t,a0 as o,w as d,s as r,ao as i,I as a,x as n,a1 as p,A as l}from"./chunks/framework.C16IyNjs.js";import"./chunks/theme.CClUzVyq.js";const y=JSON.parse('{"title":"從零開始學習 Go 語言的切片 | LCTT x X-CMD","titleTemplate":false,"description":"從零開始學習 Go 語言的切片 | LCTT (201808) | X-CMD","frontmatter":{"pageClass":"x-lctt","head":[["meta",{"name":"og:title","content":"從零開始學習 Go 語言的切片 | LCTT x X-CMD"}],["meta",{"name":"og:description","content":"從零開始學習 Go 語言的切片 | LCTT (201808) | X-CMD"}]]},"headers":[],"params":{"isLCTT":true,"post":"201808/20180712 Slices from the ground up","title":"從零開始學習 Go 語言的切片","tag":"201808","desc":""},"relativePath":"201808/20180712 Slices from the ground up.md","filePath":"[post].md"}'),c={name:"201808/20180712 Slices from the ground up.md"};function u(g,s,h,b,f,k){const e=o("Link");return d(),r("div",null,[s[42]||(s[42]=i(`<h1 id="從零開始學習-go-語言的切片" tabindex="-1">從零開始學習 Go 語言的切片 <a class="header-anchor" href="#從零開始學習-go-語言的切片" aria-label="Permalink to “從零開始學習 Go 語言的切片”">​</a></h1><p>這篇文章受到了我與同事討論使用<ruby>切片<rt>slice</rt></ruby>作為<ruby>棧<rt>stack</rt></ruby>的一次聊天的啓發。後來話題聊到了 Go 語言中的切片是如何工作的。我認為這些信息對別人也有用，所以就把它記錄了下來。</p><h3 id="數組" tabindex="-1">數組 <a class="header-anchor" href="#數組" aria-label="Permalink to “數組”">​</a></h3><p>任何關於 Go 語言切片的討論都要從另一個數據結構也就是<ruby>數組<rt>array</rt></ruby>開始。Go 的數組有兩個特性：</p><ol><li><p>數組的長度是固定的；<code>[5]int</code> 是由 5 個 <code>int</code> 構成的數組，和 <code>[3]int</code> 不同。</p></li><li><p>數組是值類型。看下面這個示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        var a [5]int</span></span>
<span class="line"><span>        b := a</span></span>
<span class="line"><span>        b[2] = 7</span></span>
<span class="line"><span>        fmt.Println(a, b) // prints [0 0 0 0 0] [0 0 7 0 0]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>語句 <code>b := a</code> 定義了一個類型是 <code>[5]int</code> 的新變量 <code>b</code>，然後把 <code>a</code> 中的內容 <em>複製</em> 到 <code>b</code> 中。改變 <code>b</code> 對 <code>a</code> 中的內容沒有影響，因為 <code>a</code> 和 <code>b</code> 是相互獨立的值。[^1]</p></li></ol><h3 id="切片" tabindex="-1">切片 <a class="header-anchor" href="#切片" aria-label="Permalink to “切片”">​</a></h3><p>Go 語言的切片和數組的主要有如下兩個區別：</p><ol><li>切片沒有一個固定的長度。切片的長度不是它類型定義的一部分，而是由切片內部自己維護的。我們可以使用內置的 <code>len</code> 函數知道它的長度。[^2]</li><li>將一個切片賦值給另一個切片時 <em>不會</em> 對切片內容進行復制操作。這是因為切片沒有直接持有其內部數據，而是保留了一個指向 <em>底層數組</em> [^3] 的指針。數據都保留在底層數組裏。</li></ol><p>基於第二個特性，兩個切片可以享有共同的底層數組。看下面的示例：</p><ol><li><p>對切片取切片</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        var a = []int{1,2,3,4,5}</span></span>
<span class="line"><span>        b := a[2:]</span></span>
<span class="line"><span>        b[0] = 0</span></span>
<span class="line"><span>        fmt.Println(a, b) // prints [1 2 0 4 5] [0 4 5]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這個例子裏，<code>a</code> 和 <code>b</code> 享有共同的底層數組 —— 儘管 <code>b</code> 在數組裏的起始偏移量不同，兩者的長度也不同。通過 <code>b</code> 修改底層數組的值也會導致 <code>a</code> 裏的值的改變。</p></li><li><p>將切片傳進函數</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func negate(s []int) {</span></span>
<span class="line"><span>        for i := range s {</span></span>
<span class="line"><span>                s[i] = -s[i]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        var a = []int{1, 2, 3, 4, 5}</span></span>
<span class="line"><span>        negate(a)</span></span>
<span class="line"><span>        fmt.Println(a) // prints [-1 -2 -3 -4 -5]</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在這個例子裏，<code>a</code> 作為形參 <code>s</code> 的實參傳進了 <code>negate</code> 函數，這個函數遍歷 <code>s</code> 內的元素並改變其符號。儘管 <code>nagate</code> 沒有返回值，且沒有訪問到 <code>main</code> 函數里的 <code>a</code>。但是當將之傳進 <code>negate</code> 函數內時，<code>a</code> 裏面的值卻被改變了。</p></li></ol><p>大多數程序員都能直觀地瞭解 Go 語言切片的底層數組是如何工作的，因為它與其它語言中類似數組的工作方式類似。比如下面就是使用 Python 重寫的這一小節的第一個示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>Python 2.7.10 (default, Feb  7 2017, 00:08:15)</span></span>
<span class="line"><span>[GCC 4.2.1 Compatible Apple LLVM 8.0.0 (clang-800.0.34)] on darwin</span></span>
<span class="line"><span>Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.</span></span>
<span class="line"><span>&gt;&gt;&gt; a = [1,2,3,4,5]</span></span>
<span class="line"><span>&gt;&gt;&gt; b = a</span></span>
<span class="line"><span>&gt;&gt;&gt; b[2] = 0</span></span>
<span class="line"><span>&gt;&gt;&gt; a</span></span>
<span class="line"><span>[1, 2, 0, 4, 5]</span></span></code></pre></div><p>以及使用 Ruby 重寫的版本:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>irb(main):001:0&gt; a = [1,2,3,4,5]</span></span>
<span class="line"><span>=&gt; [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>irb(main):002:0&gt; b = a</span></span>
<span class="line"><span>=&gt; [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>irb(main):003:0&gt; b[2] = 0</span></span>
<span class="line"><span>=&gt; 0</span></span>
<span class="line"><span>irb(main):004:0&gt; a</span></span>
<span class="line"><span>=&gt; [1, 2, 0, 4, 5]</span></span></code></pre></div><p>在大多數將數組視為對象或者是引用類型的語言也是如此。[^4]</p><h3 id="切片頭" tabindex="-1">切片頭 <a class="header-anchor" href="#切片頭" aria-label="Permalink to “切片頭”">​</a></h3>`,16)),a("p",null,[s[1]||(s[1]=n("切片同時擁有值和指針特性的神奇之處在於理解切片實際上是一個",-1)),s[2]||(s[2]=a("ruby",null,[n("結構體"),a("rt",null,"struct")],-1)),s[3]||(s[3]=n("類型。通常在",-1)),p(e,{href:"https://golang.org/pkg/reflect/#SliceHeader"},{default:l(()=>[...s[0]||(s[0]=[a("ruby",null,[n("反射"),a("rt",null,"reflect")],-1),n("包內相應部分之後",-1)])]),_:1}),s[4]||(s[4]=n("的這個結構體被稱作",-1)),s[5]||(s[5]=a("ruby",null,[n("切片頭"),a("rt",null,"slice header")],-1)),s[6]||(s[6]=n("。切片頭的定義大致如下：",-1))]),s[43]||(s[43]=i(`<p><img src="https://dave.cheney.net/wp-content/uploads/2018/07/slice.001-300x257.png" alt=""></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package runtime</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type slice struct {</span></span>
<span class="line"><span>        ptr   unsafe.Pointer</span></span>
<span class="line"><span>        len   int</span></span>
<span class="line"><span>        cap   int</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2)),a("p",null,[s[8]||(s[8]=n("這很重要，因為和 ",-1)),p(e,{href:"https://golang.org/pkg/reflect/#SliceHeader"},{default:l(()=>[...s[7]||(s[7]=[a("code",null,"map",-1),n(" 以及 ",-1),a("code",null,"chan",-1),n(" 這兩個類型不同",-1)])]),_:1}),s[9]||(s[9]=n("，切片是值類型，當被賦值或者被作為參數傳入函數時候會被複制過去。",-1))]),s[44]||(s[44]=i(`<p>程序員們都能理解 <code>square</code> 的形參 <code>v</code> 和 <code>main</code> 中聲明的 <code>v</code> 的是相互獨立的。請看下面的例子：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func square(v int) {</span></span>
<span class="line"><span>        v = v * v</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        v := 3</span></span>
<span class="line"><span>        square(v)</span></span>
<span class="line"><span>        fmt.Println(v) // prints 3, not 9</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因此 <code>square</code> 對自己的形參 <code>v</code> 的操作沒有影響到 <code>main</code> 中的 <code>v</code>。下面這個示例中的 <code>s</code> 也是 <code>main</code> 中聲明的切片 <code>s</code> 的獨立副本， <em>而不是</em> 指向 <code>main</code> 的 <code>s</code> 的指針。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func double(s []int) {</span></span>
<span class="line"><span>        s = append(s, s...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        s := []int{1, 2, 3}</span></span>
<span class="line"><span>        double(s)</span></span>
<span class="line"><span>        fmt.Println(s, len(s)) // prints [1 2 3] 3</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Go 的切片是作為值傳遞而不是指針這一點不太尋常。當你在 Go 內定義一個結構體時，90% 的時間裏傳遞的都是這個結構體的指針[^5] 。切片的傳遞方式真的很不尋常，我能想到的唯一與之相同的例子只有 <code>time.Time</code>。</p><p>切片作為值傳遞而不是作為指針傳遞這一特殊行為會讓很多想要理解切片的工作原理的 Go 程序員感到困惑。你只需要記住，當你對切片進行賦值、取切片、傳參或者作為返回值等操作時，你是在複製切片頭結構的三個字段：指向底層數組的指針、長度，以及容量。</p><h3 id="總結" tabindex="-1">總結 <a class="header-anchor" href="#總結" aria-label="Permalink to “總結”">​</a></h3><p>我們來用引出這一話題的切片作為棧的例子來總結下本文的內容：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;fmt&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func f(s []string, level int) {</span></span>
<span class="line"><span>        if level &gt; 5 {</span></span>
<span class="line"><span>               return</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        s = append(s, fmt.Sprint(level))</span></span>
<span class="line"><span>        f(s, level+1)</span></span>
<span class="line"><span>        fmt.Println(&quot;level:&quot;, level, &quot;slice:&quot;, s)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>        f(nil, 0)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>main</code> 函數的最開始我們把一個 <code>nil</code> 切片傳給了函數 <code>f</code> 作為 <code>level</code> 0 。在函數 <code>f</code> 裏我們把當前的 <code>level</code> 添加到切片的後面，之後增加 <code>level</code> 的值並進行遞歸。一旦 <code>level</code> 大於 5，函數返回，打印出當前的 <code>level</code> 以及它們複製到的 <code>s</code> 的內容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>level: 5 slice: [0 1 2 3 4 5]</span></span>
<span class="line"><span>level: 4 slice: [0 1 2 3 4]</span></span>
<span class="line"><span>level: 3 slice: [0 1 2 3]</span></span>
<span class="line"><span>level: 2 slice: [0 1 2]</span></span>
<span class="line"><span>level: 1 slice: [0 1]</span></span>
<span class="line"><span>level: 0 slice: [0]</span></span></code></pre></div><p>你可以注意到在每一個 <code>level</code> 內 <code>s</code> 的值沒有被別的 <code>f</code> 的調用影響，儘管當計算更高的 <code>level</code> 時作為 <code>append</code> 的副產品，調用棧內的四個 <code>f</code> 函數創建了四個底層數組[^6] ，但是沒有影響到當前各自的切片。</p><h3 id="擴展閲讀" tabindex="-1">擴展閲讀 <a class="header-anchor" href="#擴展閲讀" aria-label="Permalink to “擴展閲讀”">​</a></h3><p>如果你想要了解更多 Go 語言內切片運行的原理，我建議看看 Go Blog裏的這些文章：</p>`,14)),a("ul",null,[a("li",null,[p(e,{href:"https://blog.golang.org/go-slices-usage-and-internals"},{default:l(()=>[...s[10]||(s[10]=[n("Go Slices: usage and internals",-1)])]),_:1}),s[11]||(s[11]=n(" (blog.golang.org)",-1))]),a("li",null,[p(e,{href:"https://blog.golang.org/slices"},{default:l(()=>[...s[12]||(s[12]=[n("Arrays, slices (and strings): The mechanics of 'append'",-1)])]),_:1}),s[13]||(s[13]=n(" (blog.golang.org)",-1))])]),a("p",null,[s[15]||(s[15]=n("[^1]: 這不是數組才有的特性，在 Go 語言裏中 ",-1)),s[16]||(s[16]=a("em",null,"一切",-1)),s[17]||(s[17]=n(" 賦值都是複製過去的。 [^2]: 你也可以在對數組使用 ",-1)),s[18]||(s[18]=a("code",null,"len",-1)),s[19]||(s[19]=n(" 函數，但是其結果本來就人盡皆知。 [^3]: 有時也叫做",-1)),s[20]||(s[20]=a("ruby",null,[n("後台數組"),a("rt",null,"backing array")],-1)),s[21]||(s[21]=n("，以及更不嚴謹的説法是後台切片。 [^4]: Go 語言裏我們傾向於説值類型以及指針類型，因為 C++ 的",-1)),s[22]||(s[22]=a("ruby",null,[n("引用"),a("rt",null,"reference")],-1)),s[23]||(s[23]=n("類型這個詞產生誤會。但在這裏我認為調用數組作為引用類型是沒有問題的。 [^5]: 如果你的結構體有",-1)),p(e,{href:"https://golang.org/pkg/reflect/#SliceHeader"},{default:l(()=>[...s[14]||(s[14]=[n("定義在其上的方法或者用於滿足某個接口",-1)])]),_:1}),s[24]||(s[24]=n("，那麼你傳入結構體指針的比率可以飆升到接近 100%。 [^6]: 證明留做習題。",-1))]),s[45]||(s[45]=a("h3",{id:"相關文章",tabindex:"-1"},[n("相關文章： "),a("a",{class:"header-anchor",href:"#相關文章","aria-label":"Permalink to “相關文章：”"},"​")],-1)),a("ol",null,[a("li",null,[p(e,{href:"https://dave.cheney.net/2017/04/30/if-a-map-isnt-a-reference-variable-what-is-it"},{default:l(()=>[...s[25]||(s[25]=[n("If a map isn't a reference variable, what is it?",-1)])]),_:1})]),a("li",null,[p(e,{href:"https://dave.cheney.net/2013/01/19/what-is-the-zero-value-and-why-is-it-useful"},{default:l(()=>[...s[26]||(s[26]=[n("What is the zero value, and why is it useful?",-1)])]),_:1})]),a("li",null,[p(e,{href:"https://dave.cheney.net/2014/03/25/the-empty-struct"},{default:l(()=>[...s[27]||(s[27]=[n("The empty struct",-1)])]),_:1})]),a("li",null,[p(e,{href:"https://dave.cheney.net/2016/03/19/should-methods-be-declared-on-t-or-t"},{default:l(()=>[...s[28]||(s[28]=[n("Should methods be declared on T or *T",-1)])]),_:1})])]),s[46]||(s[46]=a("hr",null,null,-1)),a("p",null,[s[30]||(s[30]=n("via: ",-1)),p(e,{href:"https://dave.cheney.net/2018/07/12/slices-from-the-ground-up"},{default:l(()=>[...s[29]||(s[29]=[n("https://dave.cheney.net/2018/07/12/slices-from-the-ground-up",-1)])]),_:1})]),a("p",null,[s[34]||(s[34]=n("作者：",-1)),p(e,{href:"https://dave.cheney.net/"},{default:l(()=>[...s[31]||(s[31]=[n("Dave Cheney",-1)])]),_:1}),s[35]||(s[35]=n(" 譯者：",-1)),p(e,{href:"https://github.com/name1e5s"},{default:l(()=>[...s[32]||(s[32]=[n("name1e5s",-1)])]),_:1}),s[36]||(s[36]=n(" 校對：",-1)),p(e,{href:"https://github.com/pityonline"},{default:l(()=>[...s[33]||(s[33]=[n("pityonline",-1)])]),_:1})]),a("p",null,[s[39]||(s[39]=n("本文由 ",-1)),p(e,{href:"https://github.com/LCTT/TranslateProject"},{default:l(()=>[...s[37]||(s[37]=[n("LCTT",-1)])]),_:1}),s[40]||(s[40]=n(" 原創編譯，",-1)),p(e,{href:"https://linux.cn/"},{default:l(()=>[...s[38]||(s[38]=[n("Linux中國",-1)])]),_:1}),s[41]||(s[41]=n(" 榮譽推出",-1))])])}const C=t(c,[["render",u]]);export{y as __pageData,C as default};
